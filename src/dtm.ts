// DevStream dtm v0.13.3 (latest git tag of devstream-io/devstream, 2026-11-20). Source: cobra command definitions read
// statically (binaries not run): cmd/*.go at v0.13.3 for commit/github/patch/scaffold and their -o/--config flags,
// cmd/devstream/*.go at v0.12.1 for every other command (the last tag with the classic toolchain-manager tree).
// The v0.13.x tags (May 2023) are a rewrite whose root command only has commit, github, patch and scaffold, and they have
// no release workflow, so the classic commands are kept; the repo's main branch was reset in 2025-03 to an unrelated
// Python "DevStream 2.0" project with no dtm binary. Not carried over from v0.13.3: the no-op root flag -t/--toggle
// and cobra's stock "completion <shell> --no-descriptions" flag.
import { filepaths } from "@tabsmith/autocomplete-generators";

const dtmGenerators: Record<string, Fig.Generator> = {
  plugins: {
    script: ["dtm", "list", "plugins"],
    postProcess: (output) => {
      if (output.startsWith("fatal:")) {
        return [];
      }
      return output
        .split("\n")
        .map((plugin) => plugin.trim())
        .filter(Boolean)
        .map((plugin) => ({ name: plugin, description: "Plugin" }));
    },
  },
  yamlFiles: filepaths({ extensions: ["yaml", "yml"] }),
};

const configFileOption: Fig.Option = {
  name: ["--config-file", "-f"],
  description: "Config file or directory",
  args: {
    name: "config-file",
    template: "filepaths",
    generators: dtmGenerators.yamlFiles,
  },
};

const pluginDirOption: Fig.Option = {
  name: ["--plugin-dir", "-d"],
  description: "Plugins directory",
  args: {
    name: "plugin-dir",
    default: "~/.devstream/plugins",
    template: "folders",
  },
};

const yesOption: Fig.Option = {
  name: ["--yes", "-y"],
  description: "Continue directly without confirmation",
};

// Root persistent flags of the v0.13.x line; they only exist on its own commands
const v013Options: Fig.Option[] = [
  {
    name: "--config",
    description: "Config file (default is $HOME/.devstream.yaml)",
    args: { name: "config", template: "filepaths" },
  },
  {
    name: ["--output", "-o"],
    description: "Output format",
    args: {
      name: "format",
      default: "raw",
      suggestions: ["json", "yaml", "raw"],
    },
  },
];

const completionShell = (shell: string): Fig.Subcommand => ({
  name: shell,
  description: `Generate autocompletion script for ${shell}`,
});

const subcommands: Fig.Subcommand[] = [
  {
    name: "apply",
    description:
      "Create or update DevOps tools according to DevStream configuration file",
    options: [configFileOption, pluginDirOption, yesOption],
  },
  {
    name: "commit",
    description: "Execute git commit operations",
    options: [
      {
        name: ["--message", "-m"],
        description: "Commit message",
        isRequired: true,
        args: { name: "message" },
      },
      ...v013Options,
    ],
  },
  {
    name: "completion",
    description:
      "Generate the autocompletion script for dtm for the specified shell",
    subcommands: [
      completionShell("bash"),
      {
        name: ["fig", "generateFigSpec", "genFigSpec"],
        description: "Generate a Fig spec",
        hidden: true,
        options: [
          {
            name: "--include-hidden",
            description:
              "Include hidden commands in generated Fig autocomplete spec",
          },
        ],
      },
      completionShell("fish"),
      completionShell("powershell"),
      completionShell("zsh"),
    ],
  },
  {
    name: "create",
    description:
      "Create an app repository with GitHub Actions and an Argo CD application interactively",
  },
  {
    name: "delete",
    description:
      "Delete DevOps tools according to DevStream configuration file",
    options: [
      configFileOption,
      { name: "--force", description: "Force delete by config" },
      pluginDirOption,
      yesOption,
    ],
  },
  {
    name: "destroy",
    description:
      "Destroy DevOps tools deployment according to DevStream configuration file & state file",
    options: [
      configFileOption,
      { name: "--force", description: "Force destroy by config" },
      pluginDirOption,
      yesOption,
    ],
  },
  {
    name: "develop",
    description: "Develop is used for develop a new plugin",
    subcommands: [
      {
        name: "create-plugin",
        description: "Create a new plugin",
        options: [
          {
            name: ["--name", "-n"],
            description: "Specify name of the plugin to be created",
            isPersistent: true,
            args: { name: "name" },
          },
        ],
      },
      {
        name: "validate-plugin",
        description: "Validate a plugin",
        options: [
          {
            name: ["--all", "-a"],
            description: "Validate all plugins",
            isPersistent: true,
          },
          {
            name: ["--name", "-n"],
            description: "Specify name of the plugin to be validated",
            isPersistent: true,
            args: { name: "name" },
          },
        ],
      },
    ],
  },
  {
    name: "github",
    description: "Execute GitHub operations",
    options: v013Options,
  },
  {
    name: "init",
    description: "Download needed plugins according to the config file",
    options: [
      { name: ["--all", "-a"], description: "Download all plugins" },
      {
        name: "--arch",
        description: "Download plugins for specific arch",
        args: { name: "arch", suggestions: ["amd64", "arm64"] },
      },
      configFileOption,
      { name: "--download-only", description: "Download plugins only" },
      {
        name: "--os",
        description: "Download plugins for specific os",
        args: { name: "os", suggestions: ["linux", "darwin"] },
      },
      pluginDirOption,
      {
        name: ["--plugins", "-p"],
        description: "The plugins to be downloaded",
        isRepeatable: true,
        args: { name: "plugins", generators: dtmGenerators.plugins },
      },
    ],
  },
  {
    name: "list",
    description: "This command only supports listing plugins now",
    subcommands: [
      {
        name: "plugins",
        description: "List all plugins",
        options: [
          {
            name: ["--filter", "-r"],
            description: "Filter plugin by regex",
            isPersistent: true,
            args: { name: "filter" },
          },
        ],
      },
    ],
  },
  {
    name: "patch",
    description: "Apply a diff file to an original",
    options: v013Options,
    args: { name: "patchfile", template: "filepaths" },
  },
  {
    name: "scaffold",
    description: "Generate folder and file structure",
    options: [
      {
        name: ["--structure", "-s"],
        description: "Folder and file structure to generate",
        args: { name: "structure" },
      },
      ...v013Options,
    ],
    args: { name: "structure" },
  },
  {
    name: "show",
    description:
      "Show is used to print plugins' configuration templates or status",
    subcommands: [
      {
        name: "config",
        description: "Show configuration information",
        options: [
          configFileOption,
          pluginDirOption,
          {
            name: ["--plugin", "-p"],
            description: "Specify name with the plugin",
            args: { name: "plugin", generators: dtmGenerators.plugins },
          },
          {
            name: ["--template", "-t"],
            description: "Print a template config, e.g. quickstart/gitops/",
            args: { name: "template" },
          },
        ],
      },
      {
        name: "status",
        description: "Show status information",
        options: [
          {
            name: ["--all", "-a"],
            description: "Show all instances of all plugins status",
          },
          {
            name: ["--id", "-i"],
            description: "Specify id with the plugin instance",
            args: { name: "id" },
          },
          {
            name: ["--plugin", "-p"],
            description: "Specify name with the plugin",
            args: { name: "plugin", generators: dtmGenerators.plugins },
          },
        ],
      },
    ],
  },
  {
    name: "start",
    description:
      "Install and start Docker, Minikube, Helm and Argo CD if needed",
  },
  {
    name: "upgrade",
    description: "Upgrade dtm to the latest release version",
    options: [yesOption],
  },
  {
    name: "verify",
    description:
      "Verify DevOps tools according to DevStream config file and state",
    options: [configFileOption, pluginDirOption],
  },
  { name: "version", description: "Print the version number of DevStream" },
];

// cobra's built-in "help <command>" mirrors the command tree without flags
const helpSubcommands = (commands: Fig.Subcommand[]): Fig.Subcommand[] =>
  commands
    .filter((command) => !command.hidden)
    .map(({ name, description, subcommands: children }) => ({
      name,
      description,
      ...(children && { subcommands: helpSubcommands(children) }),
    }));

const completionSpec: Fig.Spec = {
  name: "dtm",
  description: "DevStream is an open-source DevOps toolchain manager",
  subcommands: [
    ...subcommands,
    {
      name: "help",
      description: "Help about any command",
      subcommands: helpSubcommands(subcommands),
    },
  ],
  options: [
    { name: "--debug", description: "Debug level log", isPersistent: true },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};

export default completionSpec;
