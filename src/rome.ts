// Rome v12.1.3 (npm `rome` latest, published 2023-05-30; 2026-11-20). Source: static read of the bpaf 0.8 CLI definitions in
// crates/rome_cli and crates/rome_service/src/configuration plus the `--help` snapshots in crates/rome_cli/tests/snapshots
// at tag cli/v12.1.3 of rome/tools. The binary was not run. 12.1.3 is the last published release (no later cli/v* tag or npm version).

const boolean: Fig.Arg = {
  name: "boolean",
  suggestions: ["true", "false"],
};

// Options of the shared `CliOptions` struct, available on every command that parses it (not on start, stop and init)
const globalOptions: Fig.Option[] = [
  {
    name: "--colors",
    description:
      'Set the formatting mode for markup: "off" prints plain text, "force" forces ANSI formatting even if the console output is incompatible',
    args: {
      name: "mode",
      suggestions: ["off", "force"],
    },
  },
  {
    name: "--use-server",
    description: "Connect to a running instance of the Rome daemon server",
  },
  {
    name: "--verbose",
    description: "Print additional verbose advices on diagnostics",
  },
  {
    name: "--config-path",
    description:
      "Set the filesystem path to the directory of the rome.json configuration file",
    args: {
      name: "path",
      template: "folders",
    },
  },
  {
    name: "--max-diagnostics",
    description: "Cap the amount of diagnostics displayed (default: 20)",
    args: {
      name: "number",
    },
  },
  {
    name: "--skip-errors",
    description:
      "Skip over files containing syntax errors instead of emitting an error diagnostic",
  },
  {
    name: "--json",
    description: "Report information using the JSON format",
  },
];

const vcsOptions: Fig.Option[] = [
  {
    name: "--vcs-client-kind",
    description: "The kind of VCS client",
    args: {
      name: "client",
      suggestions: ["git"],
    },
  },
  {
    name: "--vcs-enabled",
    description: "Whether Rome should integrate itself with the VCS client",
    args: boolean,
  },
  {
    name: "--vcs-use-ignore-file",
    description:
      "Whether Rome should use the VCS ignore file and ignore the files specified in it",
    args: boolean,
  },
  {
    name: "--vcs-root",
    description:
      "The folder where Rome should check for VCS files (defaults to the folder where rome.json was found)",
    args: {
      name: "path",
      template: "folders",
    },
  },
];

const filesOptions: Fig.Option[] = [
  {
    name: "--files-max-size",
    description:
      "The maximum allowed size for source code files in bytes. Files above this limit are ignored (default: 1 MiB)",
    args: {
      name: "number",
    },
  },
];

const formatterOptions: Fig.Option[] = [
  {
    name: "--indent-style",
    description: "The indent style",
    args: {
      name: "style",
      suggestions: ["tab", "space"],
    },
  },
  {
    name: "--indent-size",
    description: "The size of the indentation (default: 2)",
    args: {
      name: "number",
    },
  },
  {
    name: "--line-width",
    description: "The max width of a line (default: 80)",
    args: {
      name: "number",
    },
  },
];

const javascriptFormatterOptions: Fig.Option[] = [
  {
    name: "--quote-style",
    description: "The style for quotes (default: double)",
    args: {
      name: "style",
      suggestions: ["double", "single"],
    },
  },
  {
    name: "--quote-properties",
    description: "When properties in objects are quoted (default: as-needed)",
    args: {
      name: "mode",
      suggestions: ["preserve", "as-needed"],
    },
  },
  {
    name: "--trailing-comma",
    description:
      "Print trailing commas wherever possible in multi-line comma-separated syntactic structures (default: all)",
    args: {
      name: "style",
      suggestions: ["all", "es5", "none"],
    },
  },
  {
    name: "--semicolons",
    description:
      "Whether the formatter prints semicolons for all statements or only where necessary because of ASI",
    args: {
      name: "style",
      suggestions: ["always", "as-needed"],
    },
  },
];

const toolToggleOptions: Fig.Option[] = [
  {
    name: "--formatter-enabled",
    description: "Enable or disable the formatter check",
    args: boolean,
  },
  {
    name: "--linter-enabled",
    description: "Enable or disable the linter check",
    args: boolean,
  },
  {
    name: "--organize-imports-enabled",
    description: "Enable or disable the organization of imports",
    args: boolean,
  },
];

const stdinFilePathOption: Fig.Option = {
  name: "--stdin-file-path",
  description:
    "A file name with its extension to pass when reading from standard input",
  args: {
    name: "path",
    template: "filepaths",
  },
};

const pathsArg: Fig.Arg = {
  name: "path",
  description: "Single file, single path or list of paths",
  template: ["filepaths", "folders"],
  isVariadic: true,
};

// Options of the `Configuration` struct that can be set from the command line
const configurationOptions: Fig.Option[] = [
  ...vcsOptions,
  ...filesOptions,
  ...formatterOptions,
  ...javascriptFormatterOptions,
];

const completionSpec: Fig.Spec = {
  name: "rome",
  description:
    "Rome official CLI to check the health of your project or single files",
  options: [
    {
      name: ["-h", "--help"],
      description: "Print help information",
      isPersistent: true,
    },
    {
      name: ["-V", "--version"],
      description: "Print version information",
    },
  ],
  subcommands: [
    {
      name: "check",
      description: "Run various checks on a set of files",
      args: pathsArg,
      options: [
        {
          name: "--apply",
          description: "Apply safe fixes, formatting",
        },
        {
          name: "--apply-unsafe",
          description:
            "Apply safe fixes and unsafe fixes, formatting and import sorting",
        },
        ...toolToggleOptions,
        ...configurationOptions,
        ...globalOptions,
        stdinFilePathOption,
      ],
    },
    {
      name: "ci",
      description:
        "Run various checks on a set of files, for use in CI environments",
      args: pathsArg,
      options: [
        ...toolToggleOptions,
        ...configurationOptions,
        ...globalOptions,
      ],
    },
    {
      name: "format",
      description: "Run the formatter on a set of files",
      args: pathsArg,
      options: [
        ...formatterOptions,
        ...javascriptFormatterOptions,
        ...vcsOptions,
        ...filesOptions,
        stdinFilePathOption,
        ...globalOptions,
        {
          name: "--write",
          description:
            "Edit the files in place (beware!) instead of printing the diff to the console",
        },
      ],
    },
    {
      name: "init",
      description:
        "Bootstrap a new Rome project by creating a configuration file with some defaults",
    },
    {
      name: "migrate",
      description: "Update the configuration when there are breaking changes",
      options: [
        ...globalOptions,
        {
          name: "--write",
          description: "Write the new configuration file to disk",
        },
      ],
    },
    {
      name: "start",
      description: "Start the Rome daemon server process",
    },
    {
      name: "stop",
      description: "Stop the Rome daemon server process",
    },
    {
      name: "lsp-proxy",
      description:
        "Act as a server for the Language Server Protocol over stdin/stdout",
      options: globalOptions,
    },
    {
      name: "rage",
      description: "Print information for debugging",
      options: globalOptions,
    },
    {
      name: "version",
      description: "Show the Rome version information and quit",
      options: globalOptions,
    },
    {
      name: "__run_server",
      description: "Run the Rome daemon server process (internal)",
      hidden: true,
      options: [
        {
          name: "--stop-on-disconnect",
          description: "Stop the server when the last client disconnects",
        },
      ],
    },
    {
      name: "__print_socket",
      description: "Print the path of the daemon socket (internal)",
      hidden: true,
    },
  ],
};

export default completionSpec;
