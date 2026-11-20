// broot v1.62.0 (git tag Canop/broot v1.62.0, released 2026-11-01; checked 2026-11-20).
// Source: src/cli/args.rs (clap definitions), src/tree/tree_options.rs, src/cli/mod.rs,
// src/shell_install/mod.rs and CHANGELOG.md read statically from a shallow clone at the tag;
// the binary was not built or run. Removed since the previous spec: -o/--out (deprecated in
// v1.6.0, gone from the argument list), the -v alias of --version (only --version exists) and
// the --show-gitignored/--no-show-gitignored names (now --git-ignored/--no-git-ignored).

/**
 * Builds a flag and its counter-flag (each flag has a counter-flag so that
 * a flag set in the configuration file can be cancelled on the command line)
 */
const flagPair = (
  on: { name: string; short: string; description: string },
  off: { name: string; short: string; description: string }
): Fig.Option[] => [
  {
    name: [on.name, on.short],
    description: on.description,
    exclusiveOn: [off.name, off.short],
  },
  {
    name: [off.name, off.short],
    description: off.description,
    exclusiveOn: [on.name, on.short],
  },
];

const sortFlags: Fig.Option[] = [
  {
    name: "--sort-by-count",
    description: "Sort by count (only show one level of the tree)",
  },
  {
    name: "--sort-by-date",
    description: "Sort by date (only show one level of the tree)",
  },
  {
    name: "--sort-by-size",
    description: "Sort by size (only show one level of the tree)",
  },
  {
    name: "--sort-by-type",
    description: "Same as --sort-by-type-dirs-first",
  },
  {
    name: "--sort-by-type-dirs-first",
    description:
      "Sort by type, directories first (only show one level of the tree)",
  },
  {
    name: "--sort-by-type-dirs-last",
    description:
      "Sort by type, directories last (only show one level of the tree)",
  },
].map((option) => ({ ...option, exclusiveOn: ["--no-sort"] }));

const completionSpec: Fig.Spec = {
  name: "broot",
  description:
    "Broot lets you explore file hierarchies with a tree-like view, manipulate and preview files, launch actions, and define your own shortcuts. broot is best launched as br: this shell function gives you access to more commands, especially cd. The br shell function is interactively installed on first broot launch. Flags and options can be classically passed on launch but also written in the configuration file. Each flag has a counter-flag so that you can cancel at command line a flag which has been set in the configuration file",
  options: [
    ...flagPair(
      {
        name: "--dates",
        short: "-d",
        description: "Show the last modified date of files and directories",
      },
      {
        name: "--no-dates",
        short: "-D",
        description: "Don't show the last modified date",
      }
    ),
    ...flagPair(
      {
        name: "--only-folders",
        short: "-f",
        description: "Only show folders",
      },
      {
        name: "--no-only-folders",
        short: "-F",
        description: "Show folders and files alike",
      }
    ),
    {
      name: "--show-root-fs",
      description: "Show filesystem info on top",
    },
    {
      name: "--max-depth",
      description: "Only show trees up to a certain depth",
      args: {
        name: "max-depth",
      },
    },
    {
      name: ["--show-git-info", "-g"],
      description:
        "Show git statuses on files and stats on repo; repeat (-gg) to only show files with a git status",
      isRepeatable: 2,
    },
    {
      name: ["--no-show-git-info", "-G"],
      description: "Show less git information (undoes one -g)",
      isRepeatable: 2,
    },
    {
      name: "--git-status",
      description:
        "Only show files having an interesting git status, including hidden ones (same as -gg)",
    },
    ...flagPair(
      {
        name: "--hidden",
        short: "-h",
        description: "Show hidden files",
      },
      {
        name: "--no-hidden",
        short: "-H",
        description: "Don't show hidden files",
      }
    ),
    ...flagPair(
      {
        name: "--git-ignored",
        short: "-i",
        description: "Show git ignored files",
      },
      {
        name: "--no-git-ignored",
        short: "-I",
        description: "Don't show git ignored files",
      }
    ),
    ...flagPair(
      {
        name: "--permissions",
        short: "-p",
        description: "Show permissions",
      },
      {
        name: "--no-permissions",
        short: "-P",
        description: "Don't show permissions",
      }
    ),
    ...flagPair(
      {
        name: "--sizes",
        short: "-s",
        description: "Show the size of files and directories",
      },
      {
        name: "--no-sizes",
        short: "-S",
        description: "Don't show sizes",
      }
    ),
    ...sortFlags,
    {
      name: "--no-sort",
      description: "Don't sort",
      exclusiveOn: sortFlags.map((option) => option.name as string),
    },
    {
      name: "--tree",
      description: "Show the tree, when allowed by sorting mode",
      exclusiveOn: ["--no-tree"],
    },
    {
      name: "--no-tree",
      description: "Do not show the tree, even if allowed by sorting mode",
      exclusiveOn: ["--tree"],
    },
    ...flagPair(
      {
        name: "--whale-spotting",
        short: "-w",
        description: "Sort by size, show ignored and hidden files",
      },
      {
        name: "--no-whale-spotting",
        short: "-W",
        description: "No sort, no show hidden, no show git ignored",
      }
    ),
    ...flagPair(
      {
        name: "--trim-root",
        short: "-t",
        description: "Trim the root too and don't show a scrollbar",
      },
      {
        name: "--no-trim-root",
        short: "-T",
        description: "Don't trim the root level, show a scrollbar",
      }
    ),
    {
      name: "--install",
      description: "Install or reinstall the br shell function",
    },
    {
      name: "--set-install-state",
      description: "Manually set installation state",
      args: {
        name: "state",
        suggestions: ["undefined", "refused", "installed"],
      },
    },
    {
      name: "--print-shell-function",
      description: "Print to stdout the br function for a given shell",
      args: {
        name: "shell",
        suggestions: ["bash", "zsh", "fish", "nushell", "powershell"],
      },
    },
    {
      name: "--write-default-conf",
      description: "Write default conf files in given directory",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: "--conf",
      description: "Semicolon separated paths to specific config files",
      args: {
        name: "paths",
      },
    },
    {
      name: ["--cmd", "-c"],
      description: "Semicolon separated commands to execute",
      args: {
        name: "cmd",
      },
    },
    {
      name: "--outcmd",
      description: "Where to write the produced cmd (if any)",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--verb-output",
      description: "Optional path for verbs using `:write_output`",
      args: {
        name: "verb-output",
        template: "filepaths",
      },
    },
    {
      name: "--color",
      description: "Whether to have styles and colors (default: auto)",
      args: {
        name: "color",
        suggestions: ["auto", "yes", "no"],
      },
    },
    {
      name: "--height",
      description:
        "Height (if you don't want to fill the screen or for file export)",
      args: {
        name: "height",
      },
    },
    {
      name: "--listen",
      description: "A socket to listen to for commands",
      args: {
        name: "socket",
      },
    },
    {
      name: "--listen-auto",
      description: "Create a random socket to listen to for commands",
    },
    {
      name: "--get-root",
      description: "Ask for the current root of the remote broot",
    },
    {
      name: "--send",
      description: "A socket to send commands to",
      args: {
        name: "socket",
      },
    },
    {
      name: "--help",
      description: "Print help information",
    },
    {
      name: "--version",
      description: "Print the version",
    },
  ],
  args: {
    name: "root",
    description: "Root directory",
    isOptional: true,
    template: "filepaths",
  },
};
export default completionSpec;
