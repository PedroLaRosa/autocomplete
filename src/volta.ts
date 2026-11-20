// Volta v2.0.2 (GitHub tag volta-cli/volta v2.0.2 = latest release, Homebrew formula 2.0.2, 2026-11-19). Source: clap definitions in src/cli.rs and src/command/*.rs at v2.0.2.
// Changes: --verbose/--quiet/--help are global; added --very-verbose, --silent alias, pnpm support in `run`, `ls` alias; fixed `run --bundled-npm` (was --bundle) and the elvish completions shell.

const toolArgs: Fig.Arg = {
  isVariadic: true,
  name: "tool[@version]",
};

const completionSpec: Fig.Spec = {
  name: "volta",
  description: "The JavaScript Launcher",
  subcommands: [
    {
      name: "fetch",
      description: "Fetches a tool to the local machine",
      args: toolArgs,
    },
    {
      name: "install",
      description: "Installs a tool in your toolchain",
      args: toolArgs,
    },
    {
      name: "uninstall",
      description: "Uninstalls a tool from your toolchain",
      args: {
        name: "tool",
      },
    },
    {
      name: "pin",
      description: "Pins your project's runtime or package manager",
      args: toolArgs,
    },
    {
      name: ["list", "ls"],
      description: "Displays the current toolchain",
      args: {
        name: "tool",
        isOptional: true,
        suggestions: [
          { name: "all", description: "Show every item in the toolchain" },
          { name: "node", description: "Show locally cached Node versions" },
          { name: "npm", description: "Show locally cached npm versions" },
          { name: "pnpm", description: "Show locally cached pnpm versions" },
          { name: "yarn", description: "Show locally cached Yarn versions" },
        ],
      },
      options: [
        {
          name: ["-c", "--current"],
          description: "Show the currently-active tool(s)",
          exclusiveOn: ["-d", "--default"],
        },
        {
          name: ["-d", "--default"],
          description: "Show your default tool(s)",
          exclusiveOn: ["-c", "--current"],
        },
        {
          name: "--format",
          description:
            "Specify the output format (defaults to human for TTYs, plain otherwise)",
          args: {
            name: "format",
            suggestions: ["human", "plain"],
          },
        },
      ],
    },
    {
      name: "completions",
      description: "Generates Volta completions",
      args: {
        name: "shell",
        description: "Shell to generate completions for",
        suggestions: ["bash", "elvish", "fish", "powershell", "zsh"],
      },
      options: [
        {
          name: ["-o", "--output"],
          description: "File to write generated completions to",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: ["-f", "--force"],
          description: "Write over an existing file, if any",
        },
      ],
    },
    {
      name: "which",
      description: "Locates the actual binary that will be called by Volta",
      args: {
        name: "binary",
        description: "The binary to find, e.g. `node` or `npm`",
      },
    },
    {
      name: "use",
      description: "Deprecated, use `volta install` or `volta pin`",
      hidden: true,
      args: {
        name: "anything",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "setup",
      description: "Enables Volta for the current user / shell",
    },
    {
      name: "run",
      description:
        "Run a command with custom Node, npm, pnpm, and/or Yarn versions",
      args: {
        name: "command",
        description: "The command to run, along with any arguments",
        isCommand: true,
      },
      options: [
        {
          name: "--node",
          description: "Set the custom Node version",
          args: {
            name: "version",
          },
        },
        {
          name: "--npm",
          description: "Set the custom npm version",
          exclusiveOn: ["--bundled-npm"],
          args: {
            name: "version",
          },
        },
        {
          name: "--bundled-npm",
          description: "Forces npm to be the version bundled with Node",
          exclusiveOn: ["--npm"],
        },
        {
          name: "--pnpm",
          description: "Set the custom pnpm version",
          exclusiveOn: ["--no-pnpm"],
          args: {
            name: "version",
          },
        },
        {
          name: "--no-pnpm",
          description: "Disables pnpm",
          exclusiveOn: ["--pnpm"],
        },
        {
          name: "--yarn",
          description: "Set the custom Yarn version",
          exclusiveOn: ["--no-yarn"],
          args: {
            name: "version",
          },
        },
        {
          name: "--no-yarn",
          description: "Disables Yarn",
          exclusiveOn: ["--yarn"],
        },
        {
          name: "--env",
          description:
            "Set an environment variable (can be used multiple times)",
          isRepeatable: true,
          args: {
            name: "NAME=value",
          },
        },
      ],
    },
    {
      name: "help",
      description: "Prints this message or the help of the given subcommand(s)",
      args: {
        name: "subcommand",
        isOptional: true,
      },
    },
  ],
  options: [
    {
      name: "--verbose",
      description: "Enables verbose diagnostics",
      isPersistent: true,
      exclusiveOn: ["--quiet"],
    },
    {
      name: "--very-verbose",
      description: "Enables trace-level diagnostics",
      isPersistent: true,
      dependsOn: ["--verbose"],
    },
    {
      name: ["--quiet", "--silent"],
      description: "Prevents unnecessary output",
      isPersistent: true,
      exclusiveOn: ["--verbose"],
    },
    {
      name: ["-h", "--help"],
      description: "Prints help information",
      isPersistent: true,
    },
    {
      name: ["-v", "--version"],
      description: "Prints the current version of Volta",
    },
  ],
};

export default completionSpec;
