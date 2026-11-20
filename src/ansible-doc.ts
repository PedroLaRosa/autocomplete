// ansible-doc v2.22.0 (ansible-core latest on PyPI, 2026-11-19). Source: `ansible-doc --help` of ansible-core 2.22.0 run from a venv, plus ansible/cli/doc.py (argument parser); generator checked against `ansible-doc --list --json`

const allPluginsGenerator: Fig.Generator = {
  script: ["ansible-doc", "--list", "--json"],
  postProcess: function (output) {
    const plugins = JSON.parse(output);
    return Object.keys(plugins).map((key) => ({
      name: key,
      description: plugins[key],
    }));
  },
};

// -e, -s, -F, -l and --metadata-dump are a mutually exclusive group
const actionOptions = [
  ["-e", "--entry-point"],
  ["-s", "--snippet"],
  ["-F", "--list_files"],
  ["-l", "--list"],
  ["--metadata-dump"],
];
const exclusiveWith = (own: string): string[] =>
  actionOptions.filter((names) => !names.includes(own)).flat();

const completionSpec: Fig.Spec = {
  name: "ansible-doc",
  description: "Displays information on modules installed in Ansible libraries",
  options: [
    {
      name: "--metadata-dump",
      description:
        "For internal use only: dump json metadata for all entries, ignores other options",
      exclusiveOn: exclusiveWith("--metadata-dump"),
    },
    {
      name: "--no-fail-on-errors",
      description:
        "For internal use only: only used for --metadata-dump, do not fail on errors and report the error message in the JSON instead",
      dependsOn: ["--metadata-dump"],
    },
    {
      name: "--playbook-dir",
      description:
        "Substitute playbook directory, sets the relative path for many features including roles/ group_vars/ etc",
      args: {
        name: "BASEDIR",
        description: "Base directory",
        template: ["folders"],
      },
    },
    {
      name: "--version",
      description:
        "Show program's version number, config file location, configured module search path, module location, executable location",
    },
    {
      name: ["--list_files", "-F"],
      description:
        "Show plugin names and their source files without summaries (implies --list); a supplied argument is used for filtering by namespace or full collection name",
      exclusiveOn: exclusiveWith("-F"),
    },
    {
      name: ["--module-path", "-M"],
      description: "Prepend colon-separated path(s) to module library",
      isRepeatable: true,
      args: {
        name: "MODULE_PATH",
        template: ["folders"],
      },
    },
    {
      name: ["--entry-point", "-e"],
      description: "Select the entry point for role(s)",
      exclusiveOn: exclusiveWith("-e"),
      args: {
        name: "ENTRY_POINT",
      },
    },
    {
      name: ["--help", "-h"],
      description: "Show help and exit",
    },
    {
      name: ["--json", "-j"],
      description: "Change output into json format",
    },
    {
      name: ["--list", "-l"],
      description:
        "List available plugins; a supplied argument is used for filtering by namespace or full collection name",
      exclusiveOn: exclusiveWith("-l"),
    },
    {
      name: ["--roles-path", "-r"],
      description: "The path to the directory containing your roles",
      isRepeatable: true,
      args: {
        name: "ROLES_PATH",
        template: ["folders"],
      },
    },
    {
      name: ["--snippet", "-s"],
      description:
        "Show playbook snippet for these plugin types: inventory, lookup, module",
      exclusiveOn: exclusiveWith("-s"),
    },
    {
      name: ["--type", "-t"],
      description: 'Choose which plugin type (defaults to "module")',
      args: {
        name: "PLUGIN_TYPE",
        suggestions: [
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
          "module",
          "strategy",
          "test",
          "filter",
          "role",
          "keyword",
        ],
        default: "module",
      },
    },
    {
      name: ["--verbose", "-v"],
      description:
        "Print more debug messages; -vvv is a reasonable level to start, connection debugging might require -vvvv",
      isRepeatable: 6,
    },
  ],
  args: {
    name: "plugin",
    description: "Plugin",
    isVariadic: true,
    generators: allPluginsGenerator,
  },
};

export default completionSpec;
