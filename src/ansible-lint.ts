// ansible-lint v26.11.0 (PyPI latest, 2026-11-19). Source: `ansible-lint --help` and src/ansiblelint/cli.py of ansible-lint 26.11.0 run from a venv (with ansible-core 2.22.0); deprecated --write and -p/--parseable are translated to --fix and --format=pep8 by get_config()

const formatArg: Fig.Arg = {
  name: "FORMAT",
  suggestions: [
    "brief",
    "full",
    "md",
    "json",
    "codeclimate",
    "quiet",
    "pep8",
    "sarif",
  ],
};

const completionSpec: Fig.Spec = {
  name: "ansible-lint",
  description: "Ansible static code analysis",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for ansible-lint",
    },
    {
      name: ["--list-profiles", "-P"],
      description: "List all profiles",
      exclusiveOn: ["-L", "--list-rules", "-T", "--list-tags"],
    },
    {
      name: ["--list-rules", "-L"],
      description: "List all the rules",
      exclusiveOn: ["-P", "--list-profiles", "-T", "--list-tags"],
    },
    {
      name: ["--list-tags", "-T"],
      description: "List all the tags and the rules they cover",
      exclusiveOn: ["-P", "--list-profiles", "-L", "--list-rules"],
    },
    {
      name: ["--format", "-f"],
      displayName: "Format",
      description: "Stdout formatting, json being an alias for codeclimate",
      args: formatArg,
      icon: "fig://icon?type=characters",
    },
    {
      name: "--sarif-file",
      description: "SARIF output file",
      args: {
        name: "SARIF_FILE",
        template: "filepaths",
      },
    },
    {
      name: "-q",
      description: "Quieter, reduce verbosity, can be specified twice",
      isRepeatable: 2,
    },
    {
      name: ["--parseable", "-p"],
      description:
        "Parseable output, deprecated alias of '--format=pep8'; use -f pep8 instead",
      deprecated: true,
    },
    {
      name: "--profile",
      description: "Specify which rules profile to be used",
      args: {
        name: "PROFILE",
        suggestions: [
          "min",
          "basic",
          "moderate",
          "safety",
          "shared",
          "production",
        ],
      },
    },
    {
      name: "--project-dir",
      description:
        "Location of project/repository, autodetected based on location of configuration file",
      args: {
        name: "PROJECT_DIR",
        template: "folders",
      },
    },
    {
      name: ["--rules-dir", "-r"],
      description: "Specify custom rule directories",
      args: {
        name: "RULESDIR",
        template: "folders",
      },
    },
    {
      name: "-R",
      description: "Keep using embedded rules when using '-r'",
    },
    {
      name: ["--strict", "-s"],
      description: "Return non-zero exit code on warnings as well as errors",
    },
    {
      name: "--fix",
      description:
        "Allow ansible-lint to perform auto-fixes, including YAML reformatting; '--fix' and '--fix=all' are equivalent",
      requiresSeparator: true,
      args: {
        name: "WRITE_LIST",
        description:
          "Limit the effective rule transforms by passing a keywords 'all' or 'none' or a comma separated list of rule ids or rule tags",
        isOptional: true,
        suggestions: ["all", "none", "rule1,rule2,..."],
        default: "all",
      },
    },
    {
      name: "--write",
      description:
        "Deprecated alias of '--fix' (accepted with a warning); use --fix instead",
      deprecated: true,
      requiresSeparator: true,
      args: {
        name: "WRITE_LIST",
        description:
          "Limit the effective rule transforms by passing a keywords 'all' or 'none' or a comma separated list of rule ids or rule tags",
        isOptional: true,
        suggestions: ["all", "none", "rule1,rule2,..."],
        default: "all",
      },
    },
    {
      name: "--show-relpath",
      description: "Display path relative to CWD",
    },
    {
      name: ["--tags", "-t"],
      description: "Only check rules whose id/tags match these values",
      args: {
        name: "TAGS",
      },
    },
    {
      name: "-v",
      description: "Increase verbosity level (-vv for more)",
      isRepeatable: 2,
    },
    {
      name: ["--skip-list", "-x"],
      description: "Only check rules whose id/tags do not match these values",
      args: {
        name: "SKIP_LIST",
      },
    },
    {
      name: "--generate-ignore",
      description:
        "Generate a text file '.ansible-lint-ignore' that ignores all found violations, each line contains filename and rule id separated by a space",
    },
    {
      name: ["--warn-list", "-w"],
      description:
        "Only warn about these rules, unless overridden in config file",
      args: {
        name: "WARN_LIST",
      },
    },
    {
      name: "--enable-list",
      description: "Activate optional rules by their tag name",
      args: {
        name: "ENABLE_LIST",
      },
    },
    {
      name: "--nocolor",
      description: "Disable colored output, same as NO_COLOR=1",
    },
    {
      name: "--force-color",
      description: "Force colored output, same as FORCE_COLOR=1",
    },
    {
      name: "--exclude",
      description:
        "Path to directories or files to skip. This option is repeatable",
      args: {
        name: "EXCLUDE_PATHS",
        isVariadic: true,
        template: "folders",
      },
    },
    {
      name: ["--config-file", "-c"],
      description:
        "Specify configuration file to use. By default it will look for '.ansible-lint', '.ansible-lint.yml', '.ansible-lint.yaml', '.config/ansible-lint.yml' or '.config/ansible-lint.yaml'",
      args: {
        name: "CONFIG_FILE",
        template: "filepaths",
      },
    },
    {
      name: ["--ignore-file", "-i"],
      description:
        "Specify ignore file to use. By default it will look for '.ansible-lint-ignore' or '.config/ansible-lint-ignore.txt'",
      args: {
        name: "IGNORE_FILE",
        template: "filepaths",
      },
    },
    {
      name: "--yamllint-file",
      description:
        "Specify yamllint config file to use. By default it will look for '.yamllint', '.yamllint.yaml', '.yamllint.yml', '~/.config/yamllint/config' or the XDG_CONFIG_HOME and YAMLLINT_CONFIG_FILE environment variables",
      args: {
        name: "YAMLLINT_FILE",
        template: "filepaths",
      },
    },
    {
      name: "--offline",
      description:
        "Disable installation of requirements.yml and schema refreshing",
      exclusiveOn: ["--no-offline"],
    },
    {
      name: "--no-offline",
      description:
        "Enable installation of requirements.yml and schema refreshing",
      exclusiveOn: ["--offline"],
    },
    {
      name: "--version",
      description: "Show version of ansible-lint",
    },
  ],
  args: {
    name: "lintables",
    description: "Files to lint",
    isOptional: true,
    isVariadic: true,
    template: "filepaths",
  },
};

export default completionSpec;
