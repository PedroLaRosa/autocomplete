// Doppler CLI v3.77.1 (latest git tag of DopplerHQ/cli, 2026-11-20). Source: static read of the cobra
// command and flag definitions in pkg/cmd/*.go and pkg/models/*.go from a shallow clone at tag 3.77.1
// (the binary was not built or run).
// Not covered: the hidden, deprecated `doppler enclave` command tree (it mirrors configs, environments,
// projects, secrets and setup) and the shell-completion helper `__complete` that cobra adds.

type JsonItem = Record<string, string>;

const jsonGenerator = (
  cacheKey: string,
  script: string[],
  toSuggestion: (item: JsonItem) => Fig.Suggestion
): Fig.Generator => ({
  cache: {
    strategy: "stale-while-revalidate",
    cacheKey,
    cacheByDirectory: true,
  },
  script: ["doppler", ...script, "--json"],
  postProcess: (out) => {
    try {
      const obj = JSON.parse(out);
      return obj.map((o: JsonItem) => ({ ...toSuggestion(o), priority: 100 }));
    } catch {
      return [];
    }
  },
});

const environmentsGenerator = jsonGenerator(
  "environments",
  ["environments"],
  (o) => ({
    name: o.id,
    description: o.name,
  })
);

const configGenerators = jsonGenerator("configs", ["configs"], (o) => ({
  name: o.name,
  description: o.environment,
}));

const projectsGenerator = jsonGenerator("projects", ["projects"], (o) => ({
  name: o.id,
  description: o.name,
}));

const tagsGenerator = jsonGenerator("tags", ["tags"], (o) => ({
  name: o.slug,
  description: o.name,
}));

const tokenSlugsGenerator = jsonGenerator(
  "config-token-slugs",
  ["configs", "tokens"],
  (o) => ({ name: o.slug, description: o.name })
);

const secretsGenerator: Fig.Generator = {
  cache: {
    strategy: "stale-while-revalidate",
    cacheKey: "secrets",
    cacheByDirectory: true,
  },
  script: ["doppler", "secrets", "--only-names", "--json"],
  postProcess: (out) => {
    try {
      const obj = JSON.parse(out);
      const names = Object.keys(obj);
      return names.map((name) => ({
        name,
        priority: 100,
      }));
    } catch {
      return [];
    }
  },
};

const secretFormats = [
  "json",
  "dotnet-json",
  "env",
  "yaml",
  "docker",
  "env-no-quotes",
];

// "doppler run --format" additionally accepts "template" and does not accept "yaml"
const mountFormats = [
  "env",
  "json",
  "dotnet-json",
  "template",
  "env-no-quotes",
  "docker",
];

const nameTransformers = [
  "upper-camel",
  "camel",
  "lower-kebab",
  "lower-snake",
  "tf-var",
  "dotnet",
  "dotnet-env",
];

// "doppler run --name-transformer" only accepts the transformers that are compatible with environment variables
const envCompatNameTransformers = nameTransformers.filter(
  (transformer) => transformer !== "dotnet"
);

const configFlags = ["analytics", "env-warning", "update-check"];

const configOptionNames = [
  "token",
  "api-host",
  "dashboard-host",
  "verify-tls",
  "project",
  "config",
];

const tagColors = [
  "gray",
  "purple",
  "blue",
  "green",
  "yellow",
  "orange",
  "red",
  "pink",
];

const projectOption: Fig.Option = {
  name: ["-p", "--project"],
  description: "Project (e.g. backend)",
  args: { name: "project", generators: projectsGenerator },
};

const configOption: Fig.Option = {
  name: ["-c", "--config"],
  description: "Config (e.g. dev)",
  args: { name: "config", generators: configGenerators },
};

const projectAndConfigOptions: Fig.Option[] = [projectOption, configOption];

const yesOption: Fig.Option = {
  name: ["-y", "--yes"],
  description: "Proceed without confirmation",
};

const rawOption: Fig.Option = {
  name: "--raw",
  description: "Print the raw secret value without processing variables",
};

const visibilityColumnOption: Fig.Option = {
  name: "--visibility",
  description: "Include secret visibility in table output",
};

const typeColumnOption: Fig.Option = {
  name: "--type",
  description: "Include secret type in table output",
};

const dynamicTtlOption: Fig.Option = {
  name: "--dynamic-ttl",
  description:
    "(BETA) Dynamic secrets will expire after specified duration (e.g. '3h', '15m')",
  args: { name: "duration" },
};

const numberOption = (what: string, defaultValue: number): Fig.Option => ({
  name: ["-n", "--number"],
  description: `Max number of ${what} to display (default ${defaultValue})`,
  args: { name: "int" },
});

const pageOption = (description = "Page to display"): Fig.Option => ({
  name: "--page",
  description: `${description} (default 1)`,
  args: { name: "int" },
});

const logOption: Fig.Option = {
  name: "--log",
  description: "Audit log id",
  args: { name: "log_id" },
};

const noUpdateConfigOption = (description: string): Fig.Option => ({
  name: "--no-update-config",
  description,
});

const noUpdateConfigOptionsOption: Fig.Option = {
  name: "--no-update-config-options",
  description:
    "Do not remove configured options from the config file (i.e. project and config)",
};

const noUpdateEnclaveConfigOption: Fig.Option = {
  name: "--no-update-enclave-config",
  description: "Deprecated, use --no-update-config-options instead",
  deprecated: true,
};

// login, logout and oidc redefine --scope with a different default than the global flag
const tokenScopeOption: Fig.Option = {
  name: "--scope",
  description: 'The directory to scope your token to (default "/")',
  args: { name: "directory", template: "folders" },
};

const noInteractiveOption = (description: string): Fig.Option => ({
  name: "--no-interactive",
  description,
});

const fallbackOption: Fig.Option = {
  name: "--fallback",
  description:
    "Path to the fallback file. Encrypted secrets are written to this file after each successful fetch and are read from it if subsequent connections are unsuccessful",
  args: { name: "path", template: "filepaths" },
};

const fallbackOnlyOption = (implies: string): Fig.Option => ({
  name: ["--fallback-only", "--offline"],
  description: `Read all secrets directly from the fallback file, without contacting Doppler. Secrets will not be updated (implies ${implies})`,
});

const fallbackReadonlyOption: Fig.Option = {
  name: "--fallback-readonly",
  description:
    "Disable modifying the fallback file. Secrets can still be read from the file",
};

const noCacheOption: Fig.Option = {
  name: "--no-cache",
  description:
    "Disable using the fallback file to speed up fetches. The fallback file is only used when the API indicates that it's still current",
};

const noExitOnWriteFailureOption: Fig.Option = {
  name: "--no-exit-on-write-failure",
  description: "Do not exit if unable to write the fallback file",
};

const noFallbackOption = (extra = ""): Fig.Option => ({
  name: "--no-fallback",
  description: `Disable reading and writing the fallback file${extra}`,
});

const nameTransformerOption = (transformers: string[]): Fig.Option => ({
  name: "--name-transformer",
  description: "Output name transformer",
  args: { name: "transformer", suggestions: transformers },
});

const globalOptions: Fig.Option[] = [
  {
    name: "--api-host",
    description:
      'The host address for the Doppler API (default "https://api.doppler.com")',
    args: { name: "url" },
  },
  {
    name: "--attempts",
    description:
      "Number of http request attempts made before failing (default 5)",
    args: { name: "int" },
  },
  {
    name: "--config-dir",
    description: 'Config directory (default "~/.doppler")',
    args: { name: "directory", template: "folders" },
  },
  {
    name: "--configuration",
    description: "Deprecated, use --config-dir instead",
    args: { name: "file", template: "filepaths" },
    deprecated: true,
  },
  {
    name: "--dashboard-host",
    description:
      'The host address for the Doppler Dashboard (default "https://dashboard.doppler.com")',
    args: { name: "url" },
  },
  {
    name: "--debug",
    description: "Output additional information",
  },
  {
    name: "--dns-resolver-address",
    description: 'Address to use for DNS resolution (default "1.1.1.1:53")',
    args: { name: "address" },
  },
  {
    name: "--dns-resolver-proto",
    description: 'Protocol to use for DNS resolution (default "udp")',
    args: { name: "protocol" },
  },
  {
    name: "--dns-resolver-timeout",
    description: "Max dns lookup duration (default 5s)",
    args: { name: "duration" },
  },
  {
    name: "--enable-dns-resolver",
    description: "Bypass the OS's default DNS resolver",
  },
  {
    name: "--json",
    description: "Output json",
  },
  {
    name: "--no-check-version",
    description: "Disable checking for Doppler CLI updates",
  },
  {
    name: "--no-dns-resolver",
    description: "Deprecated, the DNS resolver is disabled by default",
    deprecated: true,
  },
  {
    name: "--no-read-env",
    description: "Do not read config from the environment",
  },
  {
    name: "--no-timeout",
    description: "Disable http timeout",
  },
  {
    name: "--no-verify-tls",
    description:
      "Do not verify the validity of TLS certificates on HTTP requests (not recommended)",
    isDangerous: true,
  },
  {
    name: "--print-config",
    description: "Output active configuration",
  },
  {
    name: "--scope",
    description: 'The directory to scope your config to (default ".")',
    args: { name: "directory", template: "folders" },
  },
  {
    name: "--silent",
    description: "Disable output of info messages",
  },
  {
    name: "--timeout",
    description: "Max http request duration (default 10s)",
    args: { name: "duration" },
  },
  {
    name: ["-t", "--token"],
    description: "Doppler token",
    args: { name: "token" },
  },
  {
    name: ["-h", "--help"],
    description: "Show help for the command",
  },
];

// "doppler configure flags" is registered under both "configure" and the root command
const flagsCommand: Fig.Subcommand = {
  name: "flags",
  description: "View current flags",
  subcommands: [
    {
      name: "get",
      description: "Get the value of a flag",
      options: [
        {
          name: "--plain",
          description: "Print value without formatting",
        },
      ],
      args: { name: "flag", suggestions: configFlags },
    },
    {
      name: "enable",
      description: "Enable a flag",
      args: { name: "flag", suggestions: configFlags },
    },
    {
      name: "disable",
      description: "Disable a flag",
      args: { name: "flag", suggestions: configFlags },
    },
    {
      name: "reset",
      description: "Reset a flag to its default",
      options: [yesOption],
      args: { name: "flag", suggestions: configFlags },
    },
  ],
};

const completionSpec: Fig.Spec = {
  name: "doppler",
  description: "The official Doppler CLI",
  subcommands: [
    {
      name: "activity",
      description: "Get workplace activity logs",
      options: [numberOption("logs", 20), pageOption("Log page to display")],
      subcommands: [
        {
          name: "get",
          description: "Get workplace activity log",
          options: [{ ...logOption, description: "Activity log id" }],
          args: { name: "log_id", isOptional: true },
        },
      ],
    },
    {
      name: "analytics",
      description: "Manage anonymous analytics",
      hidden: true,
      deprecated: true,
      subcommands: [
        {
          name: "status",
          description:
            "Check whether anonymous analytics are enabled (deprecated, use 'configure flags get analytics')",
          deprecated: true,
        },
        {
          name: "enable",
          description:
            "Enable anonymous analytics (deprecated, use 'configure flags enable analytics')",
          deprecated: true,
        },
        {
          name: "disable",
          description:
            "Disable anonymous analytics (deprecated, use 'configure flags disable analytics')",
          deprecated: true,
        },
      ],
    },
    {
      name: "changelog",
      description: "View the CLI's changelog",
      options: [
        {
          name: ["-n", "--number"],
          description: "Number of versions to show changes for (default 3)",
          args: { name: "int" },
        },
      ],
    },
    {
      name: "completion",
      description: "Print shell completion script",
      args: {
        name: "shell",
        suggestions: ["bash", "zsh", "fish"],
        isOptional: true,
      },
      subcommands: [
        {
          name: "install",
          description: "Install completions for the current shell",
          args: {
            name: "shell",
            suggestions: ["bash", "zsh"],
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "configs",
      description: "Manage configs",
      options: [
        projectOption,
        {
          name: ["-e", "--environment"],
          description: "Config environment",
          args: { name: "environment", generators: environmentsGenerator },
        },
        numberOption("configs", 100),
        pageOption(),
      ],
      subcommands: [
        {
          name: "clone",
          description: "Clone a config",
          options: [
            ...projectAndConfigOptions,
            {
              name: "--name",
              description: "New config name",
              args: { name: "name" },
            },
          ],
          args: {
            name: "config",
            generators: configGenerators,
            isOptional: true,
          },
        },
        {
          name: "create",
          description: "Create a config",
          options: [
            projectOption,
            {
              name: "--name",
              description: "Config name",
              args: { name: "name" },
            },
            {
              name: ["-e", "--environment"],
              description: "Config environment",
              args: { name: "environment", generators: environmentsGenerator },
            },
          ],
          args: { name: "name", isOptional: true },
        },
        {
          name: "delete",
          description: "Delete a config",
          options: [...projectAndConfigOptions, yesOption],
          args: {
            name: "config",
            generators: configGenerators,
            isOptional: true,
          },
        },
        {
          name: "get",
          description: "Get info for a config",
          options: projectAndConfigOptions,
          args: {
            name: "config",
            generators: configGenerators,
            isOptional: true,
          },
        },
        {
          name: "lock",
          description: "Lock a config",
          options: [...projectAndConfigOptions, yesOption],
          args: {
            name: "config",
            generators: configGenerators,
            isOptional: true,
          },
        },
        {
          name: "logs",
          description: "List config audit logs",
          options: [
            ...projectAndConfigOptions,
            pageOption("Log page to display"),
            numberOption("logs", 20),
          ],
          subcommands: [
            {
              name: "get",
              description: "Get config audit log",
              options: [logOption, ...projectAndConfigOptions],
              args: { name: "log_id", isOptional: true },
            },
            {
              name: "rollback",
              description: "Rollback a config change",
              options: [logOption, ...projectAndConfigOptions],
              args: { name: "log_id", isOptional: true },
            },
          ],
        },
        {
          name: "tokens",
          description: "List a config's service tokens",
          options: projectAndConfigOptions,
          subcommands: [
            {
              name: "get",
              description: "Get a config's service token",
              priority: 100,
              options: [
                {
                  name: "--slug",
                  description: "Service token slug",
                  args: { name: "slug", generators: tokenSlugsGenerator },
                },
                ...projectAndConfigOptions,
              ],
              args: {
                name: "slug",
                generators: tokenSlugsGenerator,
                isOptional: true,
              },
            },
            {
              name: "create",
              description: "Create a service token for a config",
              priority: 99,
              options: [
                {
                  name: "--access",
                  description: "The token's access (default read)",
                  args: {
                    name: "access",
                    suggestions: ["read", "read/write"],
                    default: "read",
                  },
                },
                {
                  name: "--copy",
                  description: "Copy the token to your clipboard",
                },
                {
                  name: "--max-age",
                  description:
                    "Token will expire after specified duration (e.g. '3h', '15m')",
                  args: { name: "duration" },
                },
                {
                  name: "--name",
                  description: "Service token name",
                  args: { name: "name" },
                },
                {
                  name: "--plain",
                  description: "Print only the token, without formatting",
                },
                ...projectAndConfigOptions,
              ],
              args: { name: "name", isOptional: true },
            },
            {
              name: ["revoke", "delete"],
              description: "Revoke a service token from a config",
              priority: 98,
              isDangerous: true,
              options: [
                {
                  name: "--slug",
                  description: "Service token slug",
                  args: { name: "slug", generators: tokenSlugsGenerator },
                },
                ...projectAndConfigOptions,
              ],
              args: {
                name: "slug|token",
                generators: tokenSlugsGenerator,
                isOptional: true,
              },
            },
          ],
        },
        {
          name: "unlock",
          description: "Unlock a config",
          options: [...projectAndConfigOptions, yesOption],
          args: {
            name: "config",
            generators: configGenerators,
            isOptional: true,
          },
        },
        {
          name: "update",
          description:
            "Update properties about a config, such as its name, inheritability flag, and inheritances",
          options: [
            ...projectAndConfigOptions,
            yesOption,
            {
              name: "--inheritable",
              description: "Toggle config inheritability",
              requiresSeparator: true,
              args: {
                name: "bool",
                suggestions: ["true", "false"],
                isOptional: true,
              },
            },
            {
              name: "--inherits",
              description:
                'Configs to inherit, as a comma separated list (e.g. "proj2.prd,shared.prd"); pass an empty value to clear',
              args: { name: "configs" },
            },
            {
              name: "--name",
              description: "Config name",
              args: { name: "name" },
            },
          ],
          args: {
            name: "config",
            generators: configGenerators,
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "configure",
      description: "View the config file",
      options: [
        {
          name: "--all",
          description: "Print all saved options",
        },
      ],
      subcommands: [
        {
          name: "debug",
          description:
            "View current configuration utilizing all config sources",
        },
        flagsCommand,
        {
          name: "get",
          description:
            "Get the value of one or more options in the config file",
          options: [
            {
              name: "--copy",
              description: "Copy the value(s) to your clipboard",
            },
            {
              name: "--plain",
              description:
                "Print values without formatting. Values will be printed in the same order as specified",
            },
          ],
          args: {
            name: "options",
            suggestions: configOptionNames,
            isVariadic: true,
          },
        },
        {
          name: "options",
          description: "List all supported config options",
        },
        {
          name: "reset",
          description: "Reset local CLI configuration to a clean initial state",
          options: [yesOption],
        },
        {
          name: "set",
          description:
            "Set the value of one or more options in the config file (e.g. project=backend config=dev)",
          args: {
            name: "options",
            suggestions: configOptionNames,
            isVariadic: true,
          },
        },
        {
          name: "unset",
          description:
            "Unset the value of one or more options in the config file",
          args: {
            name: "options",
            suggestions: configOptionNames,
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "environments",
      description: "Manage environments",
      options: [projectOption, numberOption("environments", 100), pageOption()],
      subcommands: [
        {
          name: "create",
          description: "Create an environment",
          options: [projectOption],
          args: [{ name: "name" }, { name: "slug" }],
        },
        {
          name: "delete",
          description: "Delete an environment",
          options: [projectOption, yesOption],
          args: { name: "slug", generators: environmentsGenerator },
        },
        {
          name: "get",
          description: "Get info for an environment",
          options: [projectOption],
          args: {
            name: "environment_id",
            generators: environmentsGenerator,
          },
        },
        {
          name: "rename",
          description: "Rename an environment",
          options: [
            projectOption,
            yesOption,
            {
              name: "--name",
              description: "New name",
              args: { name: "name" },
            },
            {
              name: "--slug",
              description: "New slug",
              args: { name: "slug" },
            },
          ],
          args: { name: "slug", generators: environmentsGenerator },
        },
      ],
    },
    {
      name: "feedback",
      description: "Provide feedback about the Doppler CLI",
    },
    flagsCommand,
    {
      name: "help",
      description: "Help about any command",
      args: { name: "command", isOptional: true },
    },
    {
      name: "import",
      description: "Import projects into your Doppler workplace",
      options: [
        {
          name: "--template",
          description:
            "Path to template file (e.g. './path/to/file.yaml') (default \"doppler-template.yaml\")",
          args: { name: "file", template: "filepaths" },
        },
      ],
    },
    {
      name: "login",
      description: "Authenticate to Doppler",
      options: [
        {
          name: "--no-copy",
          description: "Do not copy the auth code to the clipboard",
        },
        {
          name: "--overwrite",
          description: "Overwrite existing token if one exists",
        },
        tokenScopeOption,
        {
          name: ["-y", "--yes"],
          description: "Open browser without confirmation",
        },
      ],
      subcommands: [
        {
          name: "revoke",
          description: 'Revoke your auth token (alias of "logout")',
          options: [
            noUpdateConfigOption("Do not modify the config file"),
            noUpdateConfigOptionsOption,
            noUpdateEnclaveConfigOption,
            tokenScopeOption,
            yesOption,
          ],
        },
        {
          name: "roll",
          description:
            "Roll your auth token, which generates a new token and revokes the old one",
          options: [
            noUpdateConfigOption(
              "Do not update the rolled token in the config file"
            ),
            tokenScopeOption,
          ],
        },
      ],
    },
    {
      name: "logout",
      description: "Log out of the CLI and revoke your auth token",
      options: [
        noUpdateConfigOption("Do not modify the config file"),
        noUpdateConfigOptionsOption,
        noUpdateEnclaveConfigOption,
        tokenScopeOption,
        yesOption,
      ],
    },
    {
      name: ["me", "whoami"],
      description: "Get info about the currently authenticated entity",
    },
    {
      name: "mfa",
      description: "Account MFA commands",
      subcommands: [
        {
          name: "recovery",
          description: "Initiate an MFA recovery",
          options: [yesOption],
        },
      ],
    },
    {
      name: "oidc",
      description: "OIDC commands",
      subcommands: [
        {
          name: "login",
          description:
            "Authenticate to Doppler with a service account identity via an OIDC token",
          options: [
            {
              name: "--identity",
              description: "The service account identity ID to authenticate as",
              args: { name: "identity" },
            },
            tokenScopeOption,
            {
              name: "--token",
              description:
                "The signed OIDC JWT token string to authenticate with",
              args: { name: "jwt" },
            },
          ],
        },
        {
          name: "logout",
          description:
            "Revoke the current short lived service account identity access token created via OIDC",
          options: [
            noUpdateConfigOption("Do not modify the config file"),
            noUpdateConfigOptionsOption,
            tokenScopeOption,
          ],
        },
      ],
    },
    {
      name: "open",
      description: "Open the Doppler dashboard",
      options: projectAndConfigOptions,
      subcommands: [
        {
          name: "dashboard",
          description: "Open the Doppler dashboard",
          options: projectAndConfigOptions,
        },
        {
          name: "docs",
          description: "Open the Doppler documentation home page",
        },
        {
          name: "github",
          description: "Open Doppler's GitHub to help contribute",
        },
        {
          name: "status",
          description: "Open the Doppler status page",
        },
      ],
    },
    {
      name: "projects",
      description: "Manage projects",
      options: [numberOption("projects", 100), pageOption()],
      subcommands: [
        {
          name: "create",
          description: "Create a project",
          options: [
            {
              name: "--description",
              description: "Project description",
              args: { name: "description" },
            },
            {
              name: "--name",
              description: "Project name",
              args: { name: "name" },
            },
          ],
          args: { name: "name", isOptional: true },
        },
        {
          name: "delete",
          description: "Delete a project",
          options: [projectOption, yesOption],
          args: {
            name: "project_id",
            generators: projectsGenerator,
            isOptional: true,
          },
        },
        {
          name: "get",
          description: "Get info for a project",
          options: [projectOption],
          args: {
            name: "project_id",
            generators: projectsGenerator,
            isOptional: true,
          },
        },
        {
          name: "update",
          description: "Update a project",
          options: [
            projectOption,
            yesOption,
            {
              name: "--description",
              description: "Project description",
              args: { name: "description" },
            },
            {
              name: "--name",
              description: "Project name",
              isRequired: true,
              args: { name: "name" },
            },
          ],
          args: {
            name: "project_id",
            generators: projectsGenerator,
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "run",
      description: "Run a command with secrets injected into the environment",
      options: [
        ...projectAndConfigOptions,
        {
          name: "--command",
          description: 'Command to execute (e.g. "echo hi")',
          args: { name: "command", isCommand: true },
        },
        dynamicTtlOption,
        fallbackOption,
        fallbackOnlyOption("--fallback-readonly and --no-liveness-ping"),
        fallbackReadonlyOption,
        {
          name: "--forward-signals",
          description:
            "Forward signals to the child process (defaults to false when STDOUT is a TTY)",
        },
        {
          name: "--format",
          description:
            "File format to use for --mount. If not specified, will be auto-detected from the mount name (default json)",
          args: { name: "format", suggestions: mountFormats },
        },
        {
          name: "--mount",
          description:
            "Write secrets to an ephemeral file, accessible at DOPPLER_CLI_SECRETS_PATH. When enabled, secrets are NOT injected into the environment",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--mount-format",
          description: "Deprecated, use --format instead",
          args: { name: "format", suggestions: mountFormats },
          deprecated: true,
        },
        {
          name: "--mount-max-reads",
          description:
            "Maximum number of times the mounted secrets file can be read (0 for unlimited)",
          args: { name: "int" },
        },
        {
          name: "--mount-template",
          description:
            "Template file to use. Secrets will be rendered into this template before mount (see 'doppler secrets substitute')",
          args: { name: "file", template: "filepaths" },
        },
        nameTransformerOption(envCompatNameTransformers),
        noCacheOption,
        noExitOnWriteFailureOption,
        {
          name: "--no-exit-on-missing-only-secrets",
          description: "Do not exit on missing secrets via --only-secrets",
        },
        noFallbackOption(" (implies --no-cache)"),
        {
          name: "--no-liveness-ping",
          description: "Disable the periodic liveness ping",
        },
        {
          name: "--only-secrets",
          description: "Only include the specified secrets",
          isRepeatable: true,
          args: {
            name: "secrets",
            generators: secretsGenerator,
          },
        },
        {
          name: "--passphrase",
          description:
            "Passphrase to use for encrypting the fallback file. The default passphrase is computed using your current configuration",
          args: { name: "passphrase" },
        },
        {
          name: "--preserve-env",
          description:
            'Give existing environment values precedence over Doppler secrets, for a comma separated list of secrets (e.g. --preserve-env="FOO,BAR"). Without a value, applies to all secrets, which has potential security implications',
          requiresSeparator: true,
          args: {
            name: "secrets",
            suggestions: ["true", "false"],
            isOptional: true,
          },
        },
        {
          name: "--silent-exit",
          description: "Deprecated, this behavior is now the default",
          deprecated: true,
        },
        {
          name: "--watch",
          description:
            "(BETA) Automatically restart the process when secrets change",
        },
      ],
      args: { name: "command", isCommand: true },
      subcommands: [
        {
          name: "clean",
          description: "Delete old fallback files",
          options: [
            {
              name: "--all",
              description: "Delete all fallback files",
            },
            {
              name: "--dry-run",
              description:
                "Do not delete anything, print what would have happened",
            },
            {
              name: "--max-age",
              description:
                "Delete fallback files that exceed this age (default 336h0m0s)",
              args: { name: "duration" },
            },
          ],
        },
      ],
    },
    {
      name: "secrets",
      description: "Manage secrets",
      options: [
        ...projectAndConfigOptions,
        {
          name: "--only-names",
          description: "Only print the secret names; omit all values",
        },
        rawOption,
        typeColumnOption,
        visibilityColumnOption,
      ],
      subcommands: [
        {
          name: "delete",
          description: "Delete the value of one or more secrets",
          options: [...projectAndConfigOptions, rawOption, yesOption],
          args: {
            name: "secrets",
            generators: secretsGenerator,
            isVariadic: true,
          },
        },
        {
          name: "download",
          description: "Download a config's secrets for later use",
          options: [
            ...projectAndConfigOptions,
            dynamicTtlOption,
            fallbackOption,
            {
              name: "--fallback-passphrase",
              description:
                "Passphrase to use for encrypting the fallback file. By default the passphrase is computed using your current configuration",
              args: { name: "passphrase" },
            },
            fallbackOnlyOption("--fallback-readonly"),
            fallbackReadonlyOption,
            {
              name: "--format",
              description: "Output format (default json)",
              args: { name: "format", suggestions: secretFormats },
            },
            nameTransformerOption(nameTransformers),
            noCacheOption,
            noExitOnWriteFailureOption,
            noFallbackOption(),
            {
              name: "--no-file",
              description: "Print the response to stdout",
            },
            {
              name: "--passphrase",
              description:
                "Passphrase to use for encrypting the secrets file. The default passphrase is computed using your current configuration",
              args: { name: "passphrase" },
            },
          ],
          args: { name: "filepath", template: "filepaths", isOptional: true },
        },
        {
          name: "get",
          description: "Get the value of one or more secrets",
          options: [
            ...projectAndConfigOptions,
            {
              name: "--copy",
              description: "Copy the value(s) to your clipboard",
            },
            {
              name: "--no-exit-on-missing-secret",
              description: "Do not exit if unable to find a requested secret",
            },
            {
              name: "--plain",
              description: "Print values without formatting",
            },
            rawOption,
            typeColumnOption,
            visibilityColumnOption,
          ],
          args: {
            name: "secrets",
            generators: secretsGenerator,
            isVariadic: true,
          },
        },
        {
          name: "notes",
          description: "Manage secret notes",
          subcommands: [
            {
              name: "set",
              description:
                "Set a note on a secret. The secret must exist. Notes can be passed via arg or via stdin",
              options: [
                projectOption,
                {
                  ...configOption,
                  description:
                    "Deprecated, notes have always been set at the project level",
                  deprecated: true,
                },
              ],
              args: [
                { name: "secret", generators: secretsGenerator },
                { name: "note", isOptional: true },
              ],
            },
          ],
        },
        {
          name: "set",
          description: "Set the value of one or more secrets",
          options: [
            ...projectAndConfigOptions,
            {
              name: "--no-interactive",
              description:
                "Do not allow entering secret value via interactive mode",
            },
            rawOption,
            {
              name: "--type",
              description: "Value type (e.g. string, decimal, etc)",
              args: { name: "type" },
            },
            {
              name: "--visibility",
              description: "Secret visibility",
              args: {
                name: "visibility",
                suggestions: ["masked", "unmasked", "restricted"],
              },
            },
          ],
          args: {
            name: "secrets",
            generators: secretsGenerator,
            isVariadic: true,
          },
        },
        {
          name: "substitute",
          description:
            "Substitute secrets into a template file (Go text/template syntax)",
          options: [
            ...projectAndConfigOptions,
            dynamicTtlOption,
            {
              name: "--output",
              description:
                "Path to the output file. By default the rendered text will be written to stdout",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--use-env",
              description:
                "How to use environment variables passed to the template (default false)",
              args: {
                name: "setting",
                suggestions: [
                  {
                    name: "false",
                    description: "Do not expose environment variables",
                  },
                  {
                    name: "true",
                    description:
                      "Expose environment variables and secrets; secrets win on collision",
                  },
                  {
                    name: "override",
                    description:
                      "Expose environment variables and secrets; environment variables win on collision",
                  },
                  {
                    name: "only",
                    description:
                      "Only expose environment variables, without fetching Doppler secrets",
                  },
                ],
              },
            },
          ],
          args: { name: "filepath", template: "filepaths" },
        },
        {
          name: "upload",
          description: "Upload a json or env secrets file",
          options: [...projectAndConfigOptions, rawOption],
          args: { name: "filepath", template: "filepaths" },
        },
      ],
    },
    {
      name: "settings",
      description: "Get workplace settings",
      subcommands: [
        {
          name: "update",
          description: "Update workplace settings",
          options: [
            {
              name: "--email",
              description: "Set the workplace's billing email",
              args: { name: "email" },
            },
            {
              name: "--name",
              description: "Set the workplace's name",
              args: { name: "name" },
            },
          ],
        },
      ],
    },
    {
      name: "setup",
      description: "Setup the Doppler CLI for managing secrets",
      options: [
        ...projectAndConfigOptions,
        noInteractiveOption(
          "Do not prompt for information. If the project or config is not specified, an error will be thrown"
        ),
        {
          name: "--no-prompt",
          description: "Deprecated, use --no-interactive instead",
          deprecated: true,
        },
        {
          name: "--no-save-token",
          description:
            "Do not save the token to the config when passed via flag or environment variable",
        },
      ],
    },
    {
      name: "tags",
      description: "Manage workplace tags",
      subcommands: [
        {
          name: "create",
          description: "Create a tag",
          options: [
            {
              name: "--color",
              description: "Tag color",
              args: { name: "color", suggestions: tagColors },
            },
            {
              name: "--slug",
              description: "Tag slug (generated from the name when omitted)",
              args: { name: "slug" },
            },
          ],
          args: { name: "name" },
        },
        {
          name: "delete",
          description: "Delete a tag",
          options: [yesOption],
          args: { name: "slug", generators: tagsGenerator },
        },
        {
          name: "get",
          description: "Get info for a tag",
          args: { name: "slug", generators: tagsGenerator },
        },
        {
          name: "update",
          description: "Update a tag (requires --name or --color)",
          options: [
            {
              name: "--color",
              description: "New color",
              args: { name: "color", suggestions: tagColors },
            },
            {
              name: "--name",
              description: "New name",
              args: { name: "name" },
            },
          ],
          args: { name: "slug", generators: tagsGenerator },
        },
      ],
    },
    {
      name: "tui",
      description: "Launch TUI",
      options: [
        ...projectAndConfigOptions,
        {
          name: "--debug-tui",
          description: "Log TUI messages to file",
        },
      ],
    },
    {
      name: "update",
      description: "Update the Doppler CLI",
      options: [
        {
          name: ["-f", "--force"],
          description:
            "Install the latest CLI regardless of whether there's an update available",
        },
      ],
    },
  ],
  options: [
    ...globalOptions.map((option) => ({ ...option, isPersistent: true })),
    {
      name: ["-v", "--version"],
      description: "Get the version of the Doppler CLI",
    },
  ],
};

export default completionSpec;
