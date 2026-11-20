// Vue CLI (@vue/cli) v5.0.9 (npm latest, published 2025-08-21; the project is in maintenance mode, 2026-11-20).
// Source: static read of the npm tarball (bin/vue.js, lib/*.js) and commander 7.2.0 help strings; the binary was not run.
// `vue serve` and `vue build` are aliases of the project's npm scripts since v5 (the v4 global-service file mode is gone).

const registryOption: Fig.Option = {
  name: "--registry",
  description:
    "Use specified npm registry when installing dependencies (only for npm)",
  args: {
    name: "url",
  },
};

const completionSpec: Fig.Spec = {
  name: "vue",
  description: "Vue cli tools",
  subcommands: [
    {
      name: "create",
      description: "Create a new project powered by vue-cli-service",
      args: {
        name: "app-name",
      },
      options: [
        {
          name: ["-p", "--preset"],
          description: "Skip prompts and use saved or remote preset",
          args: {
            name: "presetName",
          },
        },
        {
          name: ["-d", "--default"],
          description: "Skip prompts and use default preset",
        },
        {
          name: ["-i", "--inlinePreset"],
          description: "Skip prompts and use inline JSON string as preset",
          args: {
            name: "json",
          },
        },
        {
          name: ["-m", "--packageManager"],
          description: "Use specified npm client when installing dependencies",
          args: {
            name: "command",
            suggestions: ["yarn", "pnpm", "npm"],
          },
        },
        {
          name: ["-r", "--registry"],
          description:
            "Use specified npm registry when installing dependencies (only for npm)",
          args: {
            name: "url",
          },
        },
        {
          name: ["-g", "--git"],
          description: "Force git initialization with initial commit message",
          args: {
            name: "message",
            isOptional: true,
          },
        },
        {
          name: ["-n", "--no-git"],
          description: "Skip git initialization",
        },
        {
          name: ["-f", "--force"],
          description: "Overwrite target directory if it exists",
        },
        {
          name: "--merge",
          description: "Merge target directory if it exists",
        },
        {
          name: ["-c", "--clone"],
          description: "Use git clone when fetching remote preset",
        },
        {
          name: ["-x", "--proxy"],
          description: "Use specified proxy when creating project",
          args: {
            name: "proxyUrl",
          },
        },
        {
          name: ["-b", "--bare"],
          description: "Scaffold project without beginner instructions",
        },
        {
          name: "--skipGetStarted",
          description: 'Skip displaying "Get started" instructions',
        },
      ],
    },
    {
      name: "add",
      description:
        "Install a plugin and invoke its generator in an already created project",
      args: [
        {
          name: "plugin",
        },
        {
          name: "pluginOptions",
          description: "Options passed on to the plugin generator",
          isOptional: true,
        },
      ],
      options: [registryOption],
    },
    {
      name: "invoke",
      description:
        "Invoke the generator of a plugin in an already created project",
      args: [
        {
          name: "plugin",
        },
        {
          name: "pluginOptions",
          description: "Options passed on to the plugin generator",
          isOptional: true,
        },
      ],
      options: [registryOption],
    },
    {
      name: "inspect",
      description:
        "Inspect the webpack config in a project with vue-cli-service",
      args: {
        name: "paths",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        {
          name: "--mode",
          args: {
            name: "mode",
          },
        },
        {
          name: "--rule",
          description: "Inspect a specific module rule",
          args: {
            name: "ruleName",
          },
        },
        {
          name: "--plugin",
          description: "Inspect a specific plugin",
          args: {
            name: "pluginName",
          },
        },
        {
          name: "--rules",
          description: "List all module rule names",
        },
        {
          name: "--plugins",
          description: "List all plugin names",
        },
        {
          name: ["-v", "--verbose"],
          description: "Show full function definitions in output",
        },
      ],
    },
    {
      name: "serve",
      description: 'Alias of "npm run serve" in the current project',
      args: {
        name: "args",
        description: "Arguments passed on to the serve script",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "build",
      description: 'Alias of "npm run build" in the current project',
    },
    {
      name: "ui",
      description: "Start and open the vue-cli ui",
      options: [
        {
          name: ["-H", "--host"],
          description: "Host used for the UI server (default: localhost)",
          args: {
            name: "host",
          },
        },
        {
          name: ["-p", "--port"],
          description:
            "Port used for the UI server (by default search for available port)",
          args: {
            name: "port",
          },
        },
        {
          name: ["-D", "--dev"],
          description: "Run in dev mode",
        },
        {
          name: "--quiet",
          description: "Don't output starting messages",
        },
        {
          name: "--headless",
          description: "Don't open browser on start and output port",
        },
      ],
    },
    {
      name: "init",
      description:
        "Generate a project from a remote template (legacy API, requires @vue/cli-init)",
      args: [
        {
          name: "template",
        },
        {
          name: "app-name",
        },
      ],
      options: [
        {
          name: ["-c", "--clone"],
          description: "Use git clone when fetching remote template",
        },
        {
          name: "--offline",
          description: "Use cached template",
        },
      ],
    },
    {
      name: "config",
      description: "Inspect and modify the config",
      args: {
        name: "value",
        isOptional: true,
      },
      options: [
        {
          name: ["-g", "--get"],
          description: "Get value from option",
          args: {
            name: "path",
          },
        },
        {
          name: ["-s", "--set"],
          description: "Set option value",
          args: {
            name: "path",
          },
        },
        {
          name: ["-d", "--delete"],
          description: "Delete option from config",
          args: {
            name: "path",
          },
        },
        {
          name: ["-e", "--edit"],
          description: "Open config with default editor",
        },
        {
          name: "--json",
          description: "Outputs JSON result only",
        },
      ],
    },
    {
      name: "outdated",
      description:
        "(experimental) check for outdated vue cli service / plugins",
      options: [
        {
          name: "--next",
          description:
            "Also check for alpha / beta / rc versions when upgrading",
        },
      ],
    },
    {
      name: "upgrade",
      description: "(experimental) upgrade vue cli service / plugins",
      args: {
        name: "plugin-name",
        isOptional: true,
      },
      options: [
        {
          name: ["-t", "--to"],
          description: "Upgrade <package-name> to a version that is not latest",
          args: {
            name: "version",
          },
        },
        {
          name: ["-f", "--from"],
          description:
            "Skip probing installed plugin, assuming it is upgraded from the designated version",
          args: {
            name: "version",
          },
        },
        {
          name: ["-r", "--registry"],
          description:
            "Use specified npm registry when installing dependencies",
          args: {
            name: "url",
          },
        },
        {
          name: "--all",
          description: "Upgrade all plugins",
        },
        {
          name: "--next",
          description:
            "Also check for alpha / beta / rc versions when upgrading",
        },
      ],
    },
    {
      name: "migrate",
      description:
        "(experimental) run migrator for an already-installed cli plugin",
      args: {
        name: "plugin-name",
        isOptional: true,
      },
      options: [
        {
          name: ["-f", "--from"],
          description: "The base version for the migrator to migrate from",
          isRequired: true,
          args: {
            name: "version",
          },
        },
      ],
    },
    {
      name: "info",
      description: "Print debugging information about your environment",
    },
    {
      name: "help",
      description: "Display help for command",
      args: {
        name: "command",
        isOptional: true,
      },
    },
  ],
  options: [
    {
      name: ["-V", "--version"],
      description: "Output the version number",
    },
    {
      name: ["-h", "--help"],
      description: "Display help for command",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
