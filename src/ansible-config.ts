// ansible-config v2.22.0 (ansible-core latest on PyPI, 2026-11-19). Source: `ansible-config --help` and `ansible-config <subcommand> --help` of ansible-core 2.22.0 run from a venv, plus ansible/cli/config.py (argument parser)

const pluginTypes = [
  "all",
  "base",
  "become",
  "cache",
  "callback",
  "cliconf",
  "connection",
  "httpapi",
  "inventory",
  "lookup",
  "netconf",
  "shell",
  "vars",
];

const verboseOption: Fig.Option = {
  name: ["--verbose", "-v"],
  description:
    "Print more debug messages; -vvv is a reasonable level to start, connection debugging might require -vvvv",
  isRepeatable: 6,
};

const helpOption: Fig.Option = {
  name: ["--help", "-h"],
  description: "Show help and exit",
};

const configOption: Fig.Option = {
  name: ["--config", "-c"],
  description:
    "Path to configuration file, defaults to first file found in precedence",
  args: {
    name: "CONFIG_FILE",
    description: "Path to configuration file",
    template: ["filepaths"],
  },
};

const typeOption: Fig.Option = {
  name: ["--type", "-t"],
  description:
    "Filter down to a specific plugin type; use 'base' for the previous behavior",
  args: {
    name: "TYPE",
    description: "Plugin type",
    suggestions: pluginTypes,
    default: "all",
  },
};

const formatOption = (
  description: string,
  suggestions: string[],
  defaultValue: string
): Fig.Option => ({
  name: ["--format", "-f"],
  description,
  args: {
    name: "FORMAT",
    description: "Output format",
    suggestions,
    default: defaultValue,
  },
});

const commonOptions: Fig.Option[] = [
  helpOption,
  verboseOption,
  configOption,
  typeOption,
];

const pluginArg: Fig.Arg = {
  name: "args",
  description: "Specific plugin to target, requires type of plugin to be set",
  isOptional: true,
  isVariadic: true,
};

const completionSpec: Fig.Spec = {
  name: "ansible-config",
  description: "View ansible configuration",
  subcommands: [
    {
      name: "list",
      description: "Print all config options",
      options: [
        ...commonOptions,
        formatOption("Output format for list", ["json", "yaml"], "yaml"),
      ],
      args: pluginArg,
    },
    {
      name: "dump",
      description: "Dump configuration",
      options: [
        ...commonOptions,
        {
          name: ["--only-changed", "--changed-only"],
          description:
            "Only show configurations that have changed from the default",
        },
        formatOption(
          "Output format for dump",
          ["json", "yaml", "display"],
          "display"
        ),
      ],
      args: pluginArg,
    },
    {
      name: "view",
      description: "View configuration file",
      options: commonOptions,
      args: pluginArg,
    },
    {
      name: "init",
      description: "Create initial configuration",
      options: [
        ...commonOptions,
        {
          name: "--disabled",
          description:
            "Prefixes all entries with a comment character to disable them",
        },
        formatOption("Output format for init", ["ini", "env", "vars"], "ini"),
      ],
      args: pluginArg,
    },
    {
      name: "validate",
      description:
        "Validate the configuration file and environment variables (checks the base settings and all installed plugins unless narrowed with -t)",
      options: [
        ...commonOptions,
        formatOption("Output format for validate", ["ini", "env"], "ini"),
      ],
      args: pluginArg,
    },
  ],
  options: [
    {
      name: "--version",
      description:
        "Show program's version number, config file location, configured module search path, module location, executable location",
    },
    helpOption,
    verboseOption,
  ],
};
export default completionSpec;
