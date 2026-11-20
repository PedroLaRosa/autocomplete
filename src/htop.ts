// htop v3.5.3 (latest release tag in htop-dev/htop, cross-checked with Homebrew, 2026-11-19).
// Source: static read of the 3.5.3 tag (CommandLine.c getopt table and --help text, htop.1.in,
// linux/Platform.c, pcp/Platform.h); the binary was not run. Options that exist only on
// unreleased master (--keep-visible) are left out, as are the pcp-htop only options
// (--host, --hostzone, --timezone) because they belong to a different binary.
const completionSpec: Fig.Spec = {
  name: "htop",
  description: "Improved top (interactive process viewer)",
  options: [
    {
      name: ["--help", "-h"],
      description: "Print the help screen and exit",
    },
    {
      name: ["--no-color", "--no-colour", "-C"],
      description: "Use a monochrome color scheme",
    },
    {
      name: ["--delay", "-d"],
      description:
        "Delay between updates, in tenths of a second (clamped to 1-100)",
      args: {
        name: "delay",
        suggestions: ["10", "1", "60"],
      },
    },
    {
      name: ["--max-iterations", "-n"],
      description: "Exit after NUMBER iterations (frame updates)",
      args: {
        name: "number",
      },
    },
    {
      name: ["--filter", "-F"],
      description:
        "Show only commands matching the given terms (case-insensitive, separate terms with |)",
      args: {
        name: "filter",
      },
    },
    {
      name: "--no-function-bar",
      description: "Hide the function bar",
    },
    {
      name: ["--highlight-changes", "-H"],
      description: "Highlight new and old processes",
      args: {
        name: "delay",
        description: "Seconds to keep changes highlighted",
        suggestions: ["5", "1", "10"],
        isOptional: true,
      },
    },
    {
      name: ["--no-mouse", "-M"],
      description: "Disable the mouse",
    },
    {
      name: "--no-meters",
      description: "Hide the header meters",
    },
    {
      name: ["--pid", "-p"],
      description: "Show only the given PIDs",
      isRepeatable: true,
      args: {
        name: "PID[,PID...]",
        description: "Comma-separated list of PIDs",
      },
    },
    {
      name: "--readonly",
      description: "Disable all system and process changing features",
    },
    {
      name: ["--sort-key", "-s"],
      description:
        "Sort by COLUMN in list view (use help as the column to list the columns)",
      args: {
        name: "column",
        generators: {
          script: ["htop", "--sort-key=help"],
          postProcess: (out) =>
            out
              .split("\n")
              .map((line) => line.trim())
              .filter(Boolean)
              .map((line) => {
                const [name, ...description] = line.split(/\s+/);
                return {
                  name,
                  description: description.join(" ") || undefined,
                };
              }),
        },
      },
    },
    {
      name: ["--tree", "-t"],
      description: "Show the tree view (can be combined with -s)",
      args: {
        name: "mode",
        description: "Stable tree mode",
        isOptional: true,
        suggestions: [
          { name: "classic", description: "Classic (jumpy) tree view" },
          {
            name: "soft",
            description: "Try to keep the current PID line stable on screen",
          },
          {
            name: "hard",
            description:
              "Also allow moving the whole tree down, creating empty space above the root",
          },
        ],
      },
    },
    {
      name: ["--user", "-u"],
      description: "Show only processes for a given user (or $USER)",
      args: {
        name: "user",
        description: "Username or UID",
        isOptional: true,
        suggestions: ["$USER"],
      },
    },
    {
      name: ["--no-unicode", "-U"],
      description: "Do not use unicode but plain ASCII",
    },
    {
      name: "--drop-capabilities",
      description:
        "Drop unneeded Linux capabilities (Linux only, needs libcap)",
      args: {
        name: "mode",
        isOptional: true,
        suggestions: [
          { name: "off", description: "Do not drop any capabilities" },
          {
            name: "basic",
            description: "Drop all capabilities not needed by htop (default)",
          },
          {
            name: "strict",
            description:
              "Drop all capabilities except those needed for core functionality",
          },
        ],
      },
    },
    {
      name: ["--version", "-V"],
      description: "Print version info",
    },
  ],
};
export default completionSpec;
