// dprint v0.65.0 (GitHub tag 0.65.0 of dprint/dprint, 2026-11-19). Source: static read of crates/dprint/src/arg_parser.rs (clap definitions) and website/src/cli.md at tag 0.65.0; the binary was not run.
// Windows-only hidden installer commands are left out.
const helpSubcommand: Fig.Subcommand = {
  name: "help",
  description: "Prints the help of the given subcommand(s)",
  args: {
    name: "SUBCOMMAND",
    isVariadic: true,
    description: "The subcommand whose help message to display",
  },
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
};

const globalOption = (description: string): Fig.Option => ({
  name: ["-g", "--global"],
  description,
});

const recursiveOption = (description: string): Fig.Option => ({
  name: ["-r", "--recursive"],
  description,
});

const minimumDependencyAgeDescription =
  "Don't resolve npm plugin versions published more recently than this. Accepts an ISO-8601 duration (ex. 'P3D', 'PT72H'), a number of minutes (ex. '1440'), a date or RFC3339 timestamp (ex. '2026-01-15'), or '0' to disable. Defaults to min-release-age in .npmrc, otherwise no minimum";

const minimumDependencyAgeOptions: Fig.Option[] = [
  {
    name: "--minimum-dependency-age",
    description: minimumDependencyAgeDescription,
    args: {
      name: "age",
    },
  },
  {
    // Undocumented alias for people used to npm's option name
    name: "--minimum-release-age",
    description: minimumDependencyAgeDescription,
    args: {
      name: "age",
    },
    hidden: true,
  },
];

const pluginArgument: Fig.Arg = {
  name: "url-or-plugin-name",
  isVariadic: true,
  isOptional: true,
  template: "filepaths",
};

// Options of `add` and `install` (the latter also adds the plugins it is given)
const addPluginOptions: Fig.Option[] = [
  {
    name: "--no-version",
    description:
      "For npm: specifiers, write the unversioned form instead of pinning dist-tags.latest. Defers version management to node_modules / package.json",
    exclusiveOn: ["--checksum"],
  },
  {
    name: "--package-json",
    description:
      "Like --no-version, and also add the package to the nearest package.json's devDependencies as a caret range",
    exclusiveOn: ["--checksum"],
  },
  {
    name: "--checksum",
    description:
      "Add a checksum to the plugin entry, even for Wasm plugins (which are otherwise added without one)",
    exclusiveOn: ["--no-version", "--package-json"],
  },
  ...minimumDependencyAgeOptions,
];

const addCommandOptions: Fig.Option[] = [
  globalOption("Add to the global dprint configuration file"),
  ...addPluginOptions,
];

const installCommandOptions: Fig.Option[] = [
  globalOption("Install the plugins in the global dprint configuration file"),
  ...addPluginOptions,
  {
    ...recursiveOption(
      "Install the plugins of the configuration files in the current directory and all descendant directories"
    ),
    exclusiveOn: ["--global"],
  },
];

const initCommandOptions: Fig.Option[] = [
  {
    ...globalOption("Initialize the global dprint configuration file"),
    exclusiveOn: ["--preferences"],
  },
  {
    name: ["-y", "--yes"],
    description:
      "Skip the interactive plugin prompt and accept the plugins selected based on the files in the current directory",
    exclusiveOn: ["--preferences"],
  },
  {
    name: "--preferences",
    description:
      "Change the plugins to prefer or avoid whenever initializing, along with the files and options of the preferred ones, instead of initializing a configuration file",
    exclusiveOn: ["--global", "--yes"],
  },
  ...minimumDependencyAgeOptions,
];

const addSubcommand = (description: string): Fig.Subcommand => ({
  name: "add",
  description,
  args: pluginArgument,
  options: addCommandOptions,
});

const installSubcommand: Fig.Subcommand = {
  name: "install",
  description:
    "Installs the plugins in the configuration file, adding any provided plugins to it first",
  args: {
    ...pluginArgument,
    description:
      "Plugins to add to the configuration file before installing (name, url, or npm: specifier)",
  },
  options: installCommandOptions,
};

const filesArgument: Fig.Arg = {
  name: "files",
  isVariadic: true,
  isOptional: true,
  description:
    "List of files, directories, or file patterns to format. This can be a subset of what is found in the config file",
  template: "filepaths",
};

const patternsArg = (name: string): Fig.Arg => ({
  name,
  isVariadic: true,
  template: "filepaths",
});

const configurableCommandOptions: Fig.Option[] = [
  {
    name: "--stdin-files",
    description:
      "Read a newline-separated list of file paths to format from stdin instead of from the command line arguments",
    exclusiveOn: ["--staged", "--dirty"],
  },
  {
    name: "--includes-override",
    description:
      "List of file patterns in quotes to format. This overrides what is specified in the config file",
    args: patternsArg("patterns"),
  },
  {
    name: "--excludes",
    description:
      "List of file patterns or directories in quotes to exclude when formatting. This excludes in addition to what is found in the config file",
    args: patternsArg("patterns"),
  },
  {
    name: "--excludes-override",
    description:
      "List of file patterns or directories in quotes to exclude when formatting. This overrides what is specified in the config file",
    args: patternsArg("patterns"),
  },
  {
    name: "--allow-node-modules",
    description:
      "Allows traversing node module directories. This is implicit when the current working directory is within one (unstable - This flag will be renamed to be non-node specific in the future)",
    icon: "fig://icon?type=npm",
  },
  {
    name: "--no-gitignore",
    description: "Disables respecting .gitignore files",
  },
];

const stagedOption: Fig.Option = {
  name: "--staged",
  description: "Format only the staged files",
  exclusiveOn: ["--dirty", "--stdin-files"],
};

const dirtyOption: Fig.Option = {
  name: "--dirty",
  description:
    "Format only the files with uncommitted changes in the git working directory (staged, unstaged, and untracked)",
  exclusiveOn: ["--staged", "--stdin-files"],
};

const allowNoFilesOption: Fig.Option = {
  name: "--allow-no-files",
  description:
    "Causes dprint to exit with exit code 0 when no files are found instead of exit code 14",
};

const incrementalOption: Fig.Option = {
  name: "--incremental",
  description:
    "Only format files when they change. This may alternatively be specified in the configuration file",
  requiresSeparator: true,
  args: {
    name: "incremental",
    suggestions: ["true", "false"],
    isOptional: true,
  },
};

const diffFormatOption: Fig.Option = {
  name: "--diff-format",
  description:
    "The format to output diffs in. Use `unified` to output a standard unified diff that can be piped to other tools or applied with `patch`. Defaults to `pretty`, or `unified` when outputting json",
  args: {
    name: "format",
    suggestions: ["pretty", "unified"],
  },
};

const checkCommandOptions: Fig.Option[] = [
  incrementalOption,
  allowNoFilesOption,
  stagedOption,
  dirtyOption,
  diffFormatOption,
  ...configurableCommandOptions,
];

const completionSpec: Fig.Spec = {
  name: "dprint",
  description:
    "A pluggable and configurable code formatting platform written in Rust",
  requiresSubcommand: true,
  subcommands: [
    {
      name: "init",
      description:
        "Initializes a configuration file in the current directory, or adds plugins to an existing one",
      icon: "⚙️",
      priority: 60,
      options: initCommandOptions,
    },
    {
      ...addSubcommand("Adds a plugin to the configuration file"),
      priority: 60,
    },
    {
      ...installSubcommand,
      priority: 60,
    },
    {
      name: "fmt",
      description:
        "Formats the source files and writes the result to the file system",
      icon: "🛠",
      args: filesArgument,
      priority: 76,
      options: [
        {
          name: "--diff",
          description: "Outputs a check-like diff of every formatted file",
          icon: `fig://template?badge=${encodeURIComponent("+-")}&color=ffffff`,
        },
        {
          name: "--stdin",
          description:
            "Format stdin and output the result to stdout. Provide an absolute file path to apply the inclusion and exclusion rules or an extension or file name to always format the text",
          exclusiveOn: ["--stdin-files"],
          args: {
            name: "extension/file-name/file-path",
            template: "filepaths",
          },
        },
        {
          name: "--lines",
          description:
            "Only format the provided 1-based and inclusive ranges of lines of a file (ex. `--lines src/main.ts:10-20,35-40`). The file path may be omitted when formatting a single file or using --stdin (ex. `--lines 10-20`). Plugins that don't support range formatting may format the entire file",
          isRepeatable: true,
          args: {
            name: "[file-path:]first-last[,first-last]...",
            template: "filepaths",
          },
        },
        {
          name: "--skip-stable-format",
          description:
            "Whether to skip formatting a file multiple times until the output is stable",
        },
        {
          name: "--fail-on-change",
          description: "Exit with exit code 20 if files were formatted",
        },
        ...checkCommandOptions,
      ],
    },
    {
      name: "check",
      description: "Checks for any files that haven't been formatted",
      icon: "💬",
      args: filesArgument,
      options: [
        {
          name: "--list-different",
          description:
            "Only outputs file paths that aren't formatted and doesn't output diffs",
          exclusiveOn: ["--json"],
        },
        {
          name: "--json",
          description:
            "Outputs a JSON object per line for each file that isn't formatted",
          exclusiveOn: ["--list-different"],
        },
        {
          name: "--fail-fast",
          description:
            "Stop checking files and exit on the first file that isn't formatted",
          requiresSeparator: true,
          args: {
            name: "fail-fast",
            suggestions: ["true", "false"],
            isOptional: true,
          },
        },
        ...checkCommandOptions,
      ],
      priority: 60,
    },
    {
      name: "config",
      description: "Functionality related to the configuration file",
      icon: "⚙️",
      priority: 60,
      subcommands: [
        {
          name: "init",
          description:
            "Initializes a configuration file in the current directory, or adds plugins to an existing one",
          options: initCommandOptions,
        },
        {
          name: ["update", "upgrade"],
          description:
            "Updates the plugins and the npm packages it extends in the configuration file",
          icon: "⤴️",
          options: [
            {
              name: ["-y", "--yes"],
              description:
                "Upgrade process plugins and configuration extended with a checksum without prompting to confirm checksums",
            },
            {
              name: "--dry-run",
              description:
                "Print the updates that would be made without modifying any files",
            },
            globalOption("Update the global dprint configuration file"),
            recursiveOption(
              "Update configuration files in the current directory and all descendant directories"
            ),
            ...minimumDependencyAgeOptions,
          ],
        },
        addSubcommand("Adds a plugin to the configuration file"),
        installSubcommand,
        {
          name: "edit",
          description: "Opens the configuration file in an editor",
          options: [globalOption("Edit the global dprint configuration file")],
        },
        helpSubcommand,
      ],
      requiresSubcommand: true,
    },
    {
      // `output-file-paths` is kept as a hidden alias upstream for backwards compatibility
      name: ["file-paths", "output-file-paths"],
      description:
        "Prints the resolved file paths for the plugins based on the args and configuration",
      options: [stagedOption, dirtyOption, ...configurableCommandOptions],
      args: filesArgument,
    },
    {
      name: ["resolved-config", "output-resolved-config"],
      description:
        "Prints the resolved configuration for the plugins based on the args and configuration",
      options: [
        {
          name: "--file",
          description:
            "Limit the output to only the plugins that would format this file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "incremental-state",
      description:
        "Prints the state used to determine whether the incremental cache would be invalidated",
    },
    {
      name: ["format-times", "output-format-times"],
      description:
        "Prints the amount of time it takes to format each file. Use this for debugging",
      options: [
        allowNoFilesOption,
        stagedOption,
        dirtyOption,
        ...configurableCommandOptions,
      ],
      args: filesArgument,
    },
    {
      name: "clear-cache",
      description: "Deletes the plugin cache directory",
    },
    {
      name: "upgrade",
      icon: "⤴️",
      description: "Upgrades the dprint executable",
      priority: 55,
    },
    {
      name: "completions",
      description: "Generate shell completions script for dprint",
      args: {
        name: "shell",
        suggestions: ["bash", "elvish", "fish", "powershell", "zsh"],
      },
    },
    {
      name: "license",
      description: "Outputs the software license",
    },
    {
      name: "lsp",
      description: "Starts up a language server for formatting files",
    },
    {
      name: "editor-info",
      description: "Outputs information used by editor extensions",
      hidden: true,
    },
    {
      name: "editor-service",
      description: "Starts the service used by editor extensions",
      hidden: true,
      options: [
        {
          name: "--parent-pid",
          description: "Process id of the editor",
          args: {
            name: "pid",
          },
        },
      ],
    },
    helpSubcommand,
  ],
  options: [
    {
      name: ["-c", "--config"],
      icon: "⚙️",
      description:
        "Path or url to JSON configuration file. Defaults to dprint.json(c) or .dprint.json(c) in current or ancestor directory when not provided",
      args: {
        name: "config",
        template: "filepaths",
      },
      isPersistent: true,
    },
    {
      name: "--config-discovery",
      description:
        "Sets the config discovery mode. Set to `false` to completely disable, `ignore-descendants` to avoid finding config files in child directories, or `global` to only use the global config file",
      requiresSeparator: true,
      args: {
        name: "boolean",
        suggestions: ["true", "false", "ignore-descendants", "global"],
        isOptional: true,
      },
      isPersistent: true,
    },
    {
      name: ["-h", "--help"],
      description: "Prints help information",
      isPersistent: true,
    },
    {
      name: ["-v", "-V", "--version"],
      description: "Prints version information (must be the only argument)",
    },
    {
      name: "--plugins",
      icon: "🔌",
      description:
        "List of urls or file paths of plugins to use. This overrides what is specified in the config file",
      args: {
        name: "urls/files",
        template: "filepaths",
        isVariadic: true,
      },
      isPersistent: true,
    },
    {
      name: "--reload",
      description:
        "Checks for newer versions of remote configuration files and plugins instead of using the cached ones. Specify `config` or `plugins` to only check one of them",
      requiresSeparator: true,
      args: {
        name: "config|plugins",
        suggestions: ["config", "plugins", "all"],
        isOptional: true,
      },
      isPersistent: true,
    },
    {
      name: ["-L", "--log-level"],
      description: "Set log level (default: info)",
      args: {
        name: "level",
        suggestions: ["debug", "info", "warn", "error", "silent"],
      },
      isPersistent: true,
    },
    {
      name: "--verbose",
      icon: "📢",
      description: "Alias for --log-level=debug",
      isPersistent: true,
      hidden: true,
    },
  ],
};
export default completionSpec;
