// open (Xcode 27.2 man pages, 2026-11-19). Source: open(1) from keith/xcode-man-pages, the HTML export of the man pages bundled with Xcode 27.2 (27B52); identical in 27.3 beta 2.
// Read statically from the man page (revision April 14, 2017; the last change upstream added --arch in Xcode 15), not a live run on macOS.
// Long aliases (--fresh, --reveal, --wait-apps, --new, --hide, --background, --header) match an older `open` usage dump (weareinteractive/node-mac-open README).
// -D, --url, -i, -o and the /dev/null defaults are not in the man page; they remain from the previous spec and are unverified.
export const generateApps = (unquotedPath: string): Fig.Generator => ({
  cache: { strategy: "stale-while-revalidate" },
  script: [
    "mdfind",
    "kMDItemContentTypeTree=com.apple.application-bundle",
    "-onlyin",
    unquotedPath,
  ],
  postProcess: (out) => {
    return out.split("\n").map((path) => {
      const basename = path.slice(path.lastIndexOf("/") + 1);
      return {
        name: basename,
        description: path,
        icon: `fig://path/${path}`,
        priority: path.endsWith(`/Applications/${basename}`)
          ? 80
          : path.startsWith("/Applications")
            ? 76
            : 50,
      };
    });
  },
});

export const generateBundleIds = (unquotedPath: string): Fig.Generator => ({
  scriptTimeout: 15000,
  cache: { strategy: "stale-while-revalidate" },
  script: [
    "bash",
    "-c",
    `mdfind kMDItemContentTypeTree=com.apple.application-bundle -onlyin ${unquotedPath} | while read line; do echo $(mdls -name kMDItemCFBundleIdentifier -r "$line") $line; done`,
  ],
  postProcess: (out) => {
    const ids = new Map(
      out.split("\n").map((line) => {
        const sep = line.indexOf(" ");
        return [line.slice(0, sep), line.slice(sep + 1)] as const;
      })
    );
    ids.delete("(null)");
    const suggestions: Fig.Suggestion[] = [];
    for (const [id, path] of ids.entries()) {
      suggestions.push({
        name: id,
        description: path,
        icon: `fig://${path}`,
      });
    }
    return suggestions;
  },
});

const completionSpec: Fig.Spec = {
  name: "open",
  description: "Open files, apps, or URLs using default application",
  options: [
    {
      name: "-a",
      description: "Specify the application to use for opening the file",
      args: {
        name: "Application",
        generators: generateApps("/"),
      },
    },
    {
      name: "-b",
      description:
        "Specify the bundle identifier of the app to use to open the file",
      args: {
        name: "Bundle Identifier",
        generators: generateBundleIds("/"),
      },
    },
    {
      name: "-D",
      description: "Reveals the enclosing folder in finder",
    },
    {
      name: "-e",
      description: "Opens the file with the TextEdit application",
    },
    {
      name: "-t",
      description:
        "Open the file with the default text editor, as determined via LaunchServices",
    },
    {
      name: "-f",
      description:
        "Read input from standard input and open the results in the default text editor",
    },
    {
      name: ["-F", "--fresh"],
      description:
        "Opens the application without restoring windows. Saved persistent state is lost, except for Untitled documents",
    },
    {
      name: ["-W", "--wait-apps"],
      description:
        "Waits until the applications it opens (or that were already open) have exited. Use with -n to function as an editor for $EDITOR",
    },
    {
      name: ["-R", "--reveal"],
      description: "Reveals the file(s) in the Finder instead of opening them",
    },
    {
      name: ["-n", "--new"],
      description:
        "Open a new instance of the application(s) even if one is already running",
    },
    {
      name: ["-j", "--hide"],
      description: "Launches the app hidden",
    },
    {
      name: ["-g", "--background"],
      description: "Do not bring the application to the foreground",
    },
    {
      name: ["-h", "--header"],
      description:
        "Searches header locations for a header whose name matches the given string and then opens it. Pass a full header name (such as NSView.h) for increased performance",
    },
    {
      name: "-s",
      description:
        "For -h, partial or full SDK name to use; if supplied, only SDKs whose names contain the argument value are searched. Otherwise the highest versioned SDK in each platform is used",
      args: {
        name: "partial SDK name",
      },
    },
    {
      name: ["-u", "--url"],
      description:
        "Opens URL with whatever application claims the URL scheme, even if it also matches a file path",
      args: {
        name: "URL",
      },
    },
    {
      name: ["-i", "--stdin"],
      description:
        "Launches the application with stdin connected to PATH; defaults to /dev/null",
      args: {
        name: "PATH",
        template: "filepaths",
        default: "/dev/null",
      },
    },
    {
      name: ["-o", "--stdout"],
      description:
        "Launches the application with /dev/stdout connected to PATH",
      args: {
        name: "PATH",
        template: "filepaths",
        default: "/dev/null",
      },
    },
    {
      name: "--stderr",
      description:
        "Launches the application with /dev/stderr connected to PATH",
      args: {
        name: "PATH",
        template: "filepaths",
        default: "/dev/null",
      },
    },
    {
      name: "--arch",
      description:
        "Launch with the given CPU architecture type and subtype. Two integers matching cpu_type_t and cpu_subtype_t can be given separated by a '/', like 12/13",
      args: {
        name: "ARCH",
        suggestions: [
          "any",
          "arm",
          "arm64",
          "arm64e",
          "arm64_32",
          "x86_64",
          "x86_64h",
          "i386",
        ],
      },
    },
    {
      name: "--env",
      description:
        "Add an environment variable to the launched process, where VAR is formatted NAME=VALUE or NAME",
      isRepeatable: true,
      args: {
        name: "VAR",
      },
    },
    {
      name: "--args",
      description:
        "All remaining arguments are passed to the opened application in the argv parameter to main().  These arguments are not opened or interpreted by the open tool",
      args: {
        name: "Arguments",
        isVariadic: true,
      },
    },
  ],
  args: {
    template: ["filepaths", "folders"],
    isVariadic: true,
  },
};

export default completionSpec;
