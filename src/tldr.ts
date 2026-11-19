// tldr v1.6.1 (tldr-pages/tldr-c-client GitHub release, latest tag as of 2026-11-19). Source: src/tldr.c (getopt table, usage text), man/tldr.1, CHANGELOG.md at tag v1.6.1.
// This spec follows the C client, whose page cache is ~/.tldrc/tldr/pages; the npm (3.5.0), Python (3.4.4) and Rust tlrc (1.13.1) clients ship different flags.
const tldrRc = `~/.tldrc/tldr`;
const android = `${tldrRc}/pages/android/`;
const common = `${tldrRc}/pages/common/`;
const linux = `${tldrRc}/pages/linux/`;
const osx = `${tldrRc}/pages/osx/`;
const sunos = `${tldrRc}/pages/sunos/`;
const windows = `${tldrRc}/pages/windows/`;

const isMarkDownRegex = new RegExp(/^.*\.md$/);

const wholeTldrPages: Fig.Generator = {
  custom: async (tokens, executeShellCommand, context) => {
    const { stdout } = await executeShellCommand({
      command: "ls",
      args: [
        "-Al",
        ...[android, common, linux, osx, sunos, windows].map((path) =>
          path.replace(/^~/, context.environmentVariables["HOME"])
        ),
      ],
    });

    return stdout
      .split("\n")
      .filter((line) => isMarkDownRegex.test(line))
      .map((line) => {
        return {
          name: line.split(" ").at(-1).slice(0, -3),
          description: "Tldr page",
          icon: "fig://icon?type=string",
        };
      });
  },
};

const platformSuggestions = ["linux", "osx", "sunos", "windows", "common"];

const completionSpec: Fig.Spec = {
  name: "tldr",
  description: "A simpler man page than the existing man page",
  args: { name: "page", generators: wholeTldrPages },
  options: [
    {
      name: ["-h", "--help"],
      description: "Print this help and exit",
    },
    {
      name: ["-C", "--color"],
      description: "Force color display",
    },
    {
      name: ["-p", "--platform"],
      description: "Select platform",
      args: {
        name: "platform",
        suggestions: platformSuggestions,
      },
    },
    {
      name: ["-r", "--render"],
      description: "Render a local page for testing purposes",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: ["-u", "--update"],
      description: "Update local database",
    },
    {
      name: ["-v", "--version"],
      description: "Print version and exit",
    },
    {
      name: ["-c", "--clear-cache"],
      description: "Clear local database",
    },
    {
      name: ["-V", "--verbose"],
      description: "Display verbose output (when used with -c or -u)",
    },
    {
      name: ["-l", "--list"],
      description: "List all entries in the local database",
    },
  ],
};
export default completionSpec;
