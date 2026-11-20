// mdfind macOS man page (mdfind(1) dated June 10, 2004; text taken from the Xcode 27.3 beta 2 export, 2026-11-19).
// Source: mdfind.1 HTML in the keith/xcode-man-pages mirror, read statically (no live run on macOS). -s is cross-checked
// against a copy of `mdfind` usage output; -reprint is not in the man page and is kept as it was (unverified).
// The usage output also has -attr (not confirmed from a primary source here, so not added)
const smartFolderGenerator: Fig.Generator = {
  // `mdfind -s` only accepts smart folders in ~/Library/Saved\ Searches/

  custom: async (_, executeCommand, context) => {
    const { stdout } = await executeCommand({
      command: "ls",
      args: [
        "-1A",
        `${context.environmentVariables["HOME"]}/Library/Saved Searches/`,
      ],
    });

    return stdout
      .split("\n")
      .filter((file) => file.endsWith("savedSearch"))
      .map((path) => {
        const components = path.split("/");
        const filename = components[components.length - 1];
        return {
          name: filename.substring(0, filename.indexOf(".")), // .savedSearch automatically added to the query, so remove it
          displayName: filename,
          icon: "fig://" + path,
          description: "Smart folder",
        };
      });
  },
  trigger: "/",
};

const completionSpec: Fig.Spec = {
  name: "mdfind",
  description: "Finds files matching a given query",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for mdfind",
    },
    {
      name: "-0",
      description: "Prints an ASCII NUL character after each result path",
    },
    {
      name: "-live",
      description:
        "Provide live-updates to the number of files matching the query. The find can be cancelled by typing ctrl-C",
    },
    {
      name: "-count",
      description:
        "Output the total number of matches, instead of the path to the matching items",
    },
    {
      name: "-onlyin",
      description: "Limit the scope of the search to the specified directory",
      args: {
        name: "dir",
        description: "Directory",
        template: "folders",
      },
    },
    {
      name: "-name",
      description: "Search for matching file names only",
      args: {
        name: "filename",
      },
    },
    {
      name: "-reprint",
      description: "Reprint results on live update",
    },
    {
      name: "-s",
      description:
        "Show contents of smart folder ~/Library/Saved Searches/<folder>.savedSearch",
      args: {
        name: "folder",
        description: "Smart folder in ~/Library/Saved Searches",
        generators: smartFolderGenerator,
      },
    },
    {
      name: "-literal",
      description:
        "Force the provided query string to be taken as a literal query string, without interpretation",
    },
    {
      name: "-interpret",
      description:
        "Force the provided query string to be interpreted as if it had been typed into the Spotlight menu",
    },
  ],
  args: {
    name: "query",
  },
};
export default completionSpec;
