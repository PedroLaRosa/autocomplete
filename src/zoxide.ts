// zoxide v0.10.0 (GitHub tag ajeetdsouza/zoxide, released 2026-07-04, 2026-11-19). Source: src/cmd/cmd.rs (clap definitions), src/cmd/import.rs,
// man/man1/*.1 and CHANGELOG.md read statically at tag v0.10.0 (binary not run); cross-checked against the generated contrib/completions/zoxide.ts of the same tag.
// Hidden `edit` helper subcommands and the `ksh` alias of the posix shell are not listed as suggestions; `edit` subcommands are kept as hidden.

const importSources: Fig.Subcommand[] = [
  { name: "atuin", description: "Import from atuin" },
  { name: "autojump", description: "Import from autojump" },
  { name: "fasd", description: "Import from fasd" },
  { name: "z", description: "Import from z" },
  { name: "z.lua", description: "Import from z.lua" },
  { name: "zsh-z", description: "Import from zsh-z" },
];

const hiddenEditSubcommands: Fig.Subcommand[] = [
  {
    name: "decrement",
    hidden: true,
    args: { name: "path" },
  },
  {
    name: "delete",
    hidden: true,
    args: { name: "path" },
  },
  {
    name: "increment",
    hidden: true,
    args: { name: "path" },
  },
  {
    name: "reload",
    hidden: true,
  },
];

const completion: Fig.Spec = {
  name: "zoxide",
  description: "A smarter cd command for your terminal",
  subcommands: [
    {
      name: "add",
      description: "Add a new directory or increment its rank",
      options: [
        {
          name: ["-s", "--score"],
          description:
            "The rank to increment the entry if it exists or initialize it with if it doesn't",
          args: {
            name: "score",
          },
        },
      ],
      args: {
        name: "paths",
        isVariadic: true,
        template: "folders",
      },
    },
    {
      name: "edit",
      description: "Edit the database",
      subcommands: hiddenEditSubcommands,
    },
    {
      name: "import",
      description: "Import entries from another application",
      subcommands: importSources,
      options: [
        {
          name: "--merge",
          description: "Merge into existing database",
          isPersistent: true,
        },
      ],
    },
    {
      name: "init",
      description: "Generate shell configuration",
      options: [
        {
          name: "--cmd",
          description: "Changes the prefix of the `z` and `zi` commands",
          args: {
            name: "cmd",
            default: "z",
          },
        },
        {
          name: "--hook",
          description:
            "Changes how often zoxide increments a directory's score",
          args: {
            name: "hook",
            default: "pwd",
            suggestions: ["none", "prompt", "pwd"],
          },
        },
        {
          name: "--no-cmd",
          description:
            "Prevents zoxide from defining the `z` and `zi` commands",
        },
        {
          name: "--no-aliases",
          description: "Deprecated alias of --no-cmd",
          deprecated: true,
        },
      ],
      args: {
        name: "shell",
        suggestions: [
          "bash",
          "elvish",
          "fish",
          "nushell",
          "posix",
          "powershell",
          "tcsh",
          "xonsh",
          "zsh",
        ],
      },
    },
    {
      name: "query",
      description: "Search for a directory in the database",
      options: [
        {
          name: ["-a", "--all"],
          description: "Show unavailable directories",
        },
        {
          name: ["-i", "--interactive"],
          description: "Use interactive selection",
          exclusiveOn: ["-l", "--list"],
        },
        {
          name: ["-l", "--list"],
          description: "List all matching directories",
          exclusiveOn: ["-i", "--interactive"],
        },
        {
          name: ["-s", "--score"],
          description: "Print score with results",
        },
        {
          name: "--exclude",
          description: "Exclude the current directory",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--base-dir",
          description: "Only search within this directory",
          args: {
            name: "path",
            template: "folders",
          },
        },
      ],
      args: {
        name: "keywords",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "remove",
      description: "Remove a directory from the database",
      args: {
        name: "paths",
        isVariadic: true,
        isOptional: true,
        template: "folders",
      },
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Print help",
      isPersistent: true,
    },
    {
      name: ["-V", "--version"],
      description: "Print version",
      isPersistent: true,
    },
  ],
};

export default completion;
