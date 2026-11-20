// asdf v0.20.2 (latest git tag asdf-vm/asdf and Homebrew formula, 2026-11-20). Source: statically read the v0.20.2 source (internal/cli/cli.go with urfave/cli v3.13.0, internal/cli/set, internal/help/help.txt, internal/completions/asdf.{zsh,fish,bash}, docs/manage and docs/guide/upgrading-to-v0-16.md); the binary was not built or run.
// The Go rewrite (v0.16+) removed the old bash commands plugin-add/plugin-list/plugin-list-all/plugin-remove/plugin-update, list-all, local, global, shell, shim/shim-versions (now shimversions) and update (it only prints a removal notice), so they are gone from this spec.

const PRIORITY_TOP_THRESHOLD = 76;
const HOUR_IN_MILLISECONDS = 3600000;

/*
 *  Generators
 */
const nonEmptyLines = (output: string): string[] =>
  output
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

// Installed versions are printed as "  1.2.3" or " *1.2.3" (current)
const stripCurrentMarker = (version: string): string =>
  version.replace(/^\*/, "");

// The tool name is the first positional argument after `anchor`
const pluginNameAfter = (context: string[], anchor: string): string => {
  const start = context.lastIndexOf(anchor);
  return context.slice(start + 1).find((token) => !token.startsWith("-")) ?? "";
};

const installedPluginNamesGenerator = (
  suggestOptions?: Partial<Fig.Suggestion>
): Fig.Generator => ({
  script: ["asdf", "plugin", "list"],
  postProcess: (output) =>
    nonEmptyLines(output).map((pluginName) => ({
      name: pluginName,
      description: "Plugin name",
      priority: PRIORITY_TOP_THRESHOLD,
      icon: "fig://icon?type=package",
      ...suggestOptions,
    })),
});

const allPluginNamesGenerator = (
  suggestOptions?: Partial<Fig.Suggestion>
): Fig.Generator => ({
  // If use `asdf plugin list all`, it will time out (it may update the plugin index), so use `ls`.
  custom: async (_, executeCommand, generatorContext) => {
    const dataDir =
      generatorContext.environmentVariables["ASDF_DATA_DIR"] ||
      `${generatorContext.environmentVariables["HOME"]}/.asdf`;
    const { stdout } = await executeCommand({
      command: "ls",
      args: ["-1", `${dataDir}/plugin-index/plugins`],
    });

    return nonEmptyLines(stdout).map((pluginName) => ({
      name: pluginName,
      description: "Plugin name",
      priority: PRIORITY_TOP_THRESHOLD,
      icon: "fig://icon?type=package",
      ...suggestOptions,
    }));
  },
});

const installedPluginVersionsGenerator = (
  anchor: string,
  suggestOptions?: Partial<Fig.Suggestion>,
  generatorOptions?: Partial<Fig.Generator>
): Fig.Generator => ({
  script: (context) => ["asdf", "list", pluginNameAfter(context, anchor)],
  postProcess: (output) =>
    nonEmptyLines(output)
      .map(stripCurrentMarker)
      .reverse()
      .map((pluginVersion) => ({
        name: pluginVersion,
        description: "Plugin version",
        priority: PRIORITY_TOP_THRESHOLD,
        icon: "fig://icon?type=commit",
        ...suggestOptions,
      })),
  ...generatorOptions,
});

const allPluginVersionsGenerator = (
  anchor: string,
  suggestOptions?: Partial<Fig.Suggestion>,
  generatorOptions?: Partial<Fig.Generator>
): Fig.Generator => ({
  script: (context) => [
    "asdf",
    "list",
    "all",
    pluginNameAfter(context, anchor),
  ],
  cache: {
    ttl: HOUR_IN_MILLISECONDS,
  },
  postProcess: (output) =>
    nonEmptyLines(output)
      .reverse()
      .map((pluginVersion) => ({
        name: pluginVersion,
        description: "Plugin version",
        priority: PRIORITY_TOP_THRESHOLD,
        icon: "fig://icon?type=commit",
        ...suggestOptions,
      })),
  ...generatorOptions,
});

const shimNamesGenerator = (
  suggestOptions?: Partial<Fig.Suggestion>
): Fig.Generator => ({
  // Use `ls` because there is no command to get shims in `asdf`.
  custom: async (_, executeCommand, generatorContext) => {
    const dataDir =
      generatorContext.environmentVariables["ASDF_DATA_DIR"] ||
      `${generatorContext.environmentVariables["HOME"]}/.asdf`;
    const { stdout } = await executeCommand({
      command: "ls",
      args: ["-1", `${dataDir}/shims`],
    });
    return nonEmptyLines(stdout).map((shimName) => ({
      name: shimName,
      description: "Shim name",
      priority: PRIORITY_TOP_THRESHOLD,
      icon: "fig://icon?type=command",
      ...suggestOptions,
    }));
  },
});

/*
 *  Reusable specs
 */
const pluginListAllSpec: Omit<Fig.Subcommand, "name"> = {
  description: "List plugins registered on asdf-plugins repository with URLs",
};

/*
 *  Completion spec
 */
const completionSpec: Fig.Spec = {
  name: "asdf",
  description:
    "Extendable version manager with support for Ruby, Node.js, Elixir, Erlang & more",
  subcommands: [
    {
      name: "plugin",
      description: "Plugin management sub-commands",
      subcommands: [
        {
          name: "add",
          description:
            "Add a plugin from the plugin repo OR, add a Git repo as a plugin by specifying the name and repo url",
          args: [
            {
              name: "name",
              generators: allPluginNamesGenerator(),
            },
            {
              name: "git-url",
              isOptional: true,
            },
          ],
        },
        {
          name: "list",
          description:
            "List installed plugins. Optionally show git urls and git-ref",
          options: [
            {
              name: "--urls",
              description: "Show git urls",
            },
            {
              name: "--refs",
              description: "Show git refs",
            },
          ],
          subcommands: [
            {
              name: "all",
              ...pluginListAllSpec,
            },
          ],
        },
        {
          name: "remove",
          description: "Remove plugin and package versions",
          args: {
            name: "name",
            generators: installedPluginNamesGenerator({ isDangerous: true }),
          },
        },
        {
          name: "test",
          description:
            "Test a plugin's callbacks and installation of a tool version (used in plugin CI)",
          args: [
            {
              name: "name",
              description: "Name to register the plugin under during the test",
            },
            {
              name: "git-url",
              description: "Git URL of the plugin repository",
            },
          ],
          options: [
            {
              name: "--asdf-tool-version",
              description: "The tool version to use during testing",
              args: {
                name: "version",
                suggestions: [
                  {
                    name: "latest",
                    description: "Latest stable version",
                  },
                ],
              },
            },
            {
              name: "--asdf-plugin-gitref",
              description: "The plugin Git ref to test",
              args: {
                name: "git-ref",
              },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update a plugin to latest commit on default branch or a particular git-ref",
          args: [
            {
              name: "name",
              isOptional: true,
              isDangerous: true,
              generators: installedPluginNamesGenerator(),
            },
            {
              name: "git-ref",
              isOptional: true,
              isDangerous: true,
            },
          ],
          options: [
            {
              name: "--all",
              description:
                "Update all plugins to latest commit on default branch",
              isDangerous: true,
            },
          ],
        },
      ],
    },
    {
      name: "cmd",
      description: "Run a plugin's custom extension command",
      args: [
        {
          name: "plugin",
          generators: installedPluginNamesGenerator(),
        },
        {
          name: "command",
          description: "Extension command name (lib/commands/command-<name>)",
          isOptional: true,
        },
        {
          name: "args",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "completion",
      description: "Output the shell completion script for a shell",
      args: {
        name: "shell",
        suggestions: ["bash", "elvish", "fish", "nushell", "zsh"],
      },
    },
    {
      name: "current",
      description:
        "Display current version set or being used for all packages or a package",
      options: [
        {
          name: "--no-header",
          description: "Do not print a header line",
        },
      ],
      args: {
        name: "name",
        isOptional: true,
        generators: installedPluginNamesGenerator(),
      },
    },
    {
      name: "env",
      description:
        "Runs util (default: env) inside the environment used for command shim execution",
      args: [
        {
          name: "command",
          generators: shimNamesGenerator(),
        },
        {
          name: "util",
          isOptional: true,
          isCommand: true,
        },
      ],
    },
    {
      name: "exec",
      description: "Executes the command shim for the current version",
      args: {
        name: "command",
        generators: shimNamesGenerator(),
        isCommand: true,
      },
    },
    {
      name: "help",
      description: "Output documentation for plugin and tool",
      args: [
        {
          name: "name",
          isOptional: true,
          generators: installedPluginNamesGenerator(),
        },
        {
          name: "version",
          generators: installedPluginVersionsGenerator("help"),
          isOptional: true,
        },
      ],
    },
    {
      name: "info",
      description: "Print OS, Shell and asdf debug information",
    },
    {
      name: "install",
      description:
        "Install all versions from .tool-versions, or a tool at a stated version",
      options: [
        {
          name: "--keep-download",
          description: "Keep the download directory after a successful install",
        },
      ],
      args: [
        {
          name: "name",
          generators: installedPluginNamesGenerator(),
          isOptional: true,
        },
        {
          name: "version",
          suggestions: [
            {
              name: "latest",
              description: "Latest stable version of the tool",
            },
          ],
          generators: allPluginVersionsGenerator("install", undefined, {
            getQueryTerm: (token) => {
              if (token.includes("latest")) {
                return token.slice(token.indexOf(":") + 1);
              }
              return token;
            },
          }),
          isOptional: true,
        },
      ],
    },
    {
      name: "latest",
      description:
        "Show latest stable version of a package, optionally matching a version prefix",
      options: [
        {
          name: "--all",
          description:
            "Show latest stable version of all the packages and if they are installed",
        },
      ],
      args: [
        {
          name: "name",
          generators: installedPluginNamesGenerator(),
          isOptional: true,
        },
        {
          name: "version",
          generators: installedPluginVersionsGenerator("latest"),
          isOptional: true,
        },
      ],
    },
    {
      name: "list",
      description:
        "List installed versions of a package and optionally filter the versions",
      args: [
        {
          name: "name",
          generators: installedPluginNamesGenerator(),
          isOptional: true,
        },
        {
          name: "version",
          description: "Only list versions beginning with this string",
          generators: installedPluginVersionsGenerator("list"),
          isOptional: true,
        },
      ],
      subcommands: [
        {
          name: "all",
          priority: PRIORITY_TOP_THRESHOLD + 1,
          description:
            "List all versions of a package and optionally filter the returned versions",
          args: [
            {
              name: "name",
              generators: installedPluginNamesGenerator(),
            },
            {
              name: "version",
              description: "Only list versions beginning with this string",
              generators: allPluginVersionsGenerator("all"),
              isOptional: true,
            },
          ],
        },
      ],
    },
    {
      name: "reshim",
      description: "Recreate shims for version of a package",
      args: [
        {
          name: "name",
          generators: installedPluginNamesGenerator(),
          isOptional: true,
        },
        {
          name: "version",
          generators: installedPluginVersionsGenerator("reshim"),
          isOptional: true,
        },
      ],
    },
    {
      name: "set",
      description:
        "Set a tool version in a .tool-versions file in the current directory, or a parent directory",
      options: [
        {
          name: ["-u", "--home"],
          description: "Set the version in the current user's home directory",
          exclusiveOn: ["-p", "--parent"],
        },
        {
          name: ["-p", "--parent"],
          description:
            "Set the version in the closest existing .tool-versions file in a parent directory",
          exclusiveOn: ["-u", "--home"],
        },
      ],
      args: [
        {
          name: "name",
          generators: installedPluginNamesGenerator(),
        },
        {
          name: "versions",
          isVariadic: true,
          suggestions: [
            {
              name: "system",
              description: "Use the system version instead of an asdf one",
            },
            {
              name: "latest",
              description: "Latest stable version of the tool",
            },
          ],
          generators: installedPluginVersionsGenerator("set"),
        },
      ],
    },
    {
      name: "shimversions",
      description: "List the plugins and versions that provide a command",
      args: {
        name: "command",
        generators: shimNamesGenerator(),
      },
    },
    {
      name: "uninstall",
      description: "Remove a specific version of a package",
      args: [
        {
          name: "name",
          generators: installedPluginNamesGenerator({ isDangerous: true }),
        },
        {
          name: "version",
          generators: installedPluginVersionsGenerator("uninstall", {
            isDangerous: true,
          }),
        },
      ],
    },
    {
      name: "version",
      description: "Print the currently installed version of asdf",
    },
    {
      name: "where",
      description:
        "Display install path for an installed or current version of a package",
      args: [
        {
          name: "name",
          generators: installedPluginNamesGenerator(),
        },
        {
          name: "version",
          generators: installedPluginVersionsGenerator("where"),
          isOptional: true,
        },
      ],
    },
    {
      name: "which",
      description: "Display the path to an executable",
      args: {
        name: "command",
        generators: shimNamesGenerator(),
      },
    },
  ],
  options: [
    {
      name: ["-v", "--version"],
      description: "Print the version of asdf",
    },
    {
      name: ["-h", "--help"],
      description: "Show help for asdf",
    },
  ],
};

export default completionSpec;
