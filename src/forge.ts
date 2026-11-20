// Forge CLI v15.1.0 (npm @forge/cli dist-tag latest, 2026-11-20). Source: the published
// @forge/cli@15.1.0 npm tarball (README and out/command-line/register-*.js commander
// definitions) plus the help strings in @forge/cli-shared@9.10.0 (out/ui/text.js), read
// statically; the CLI was not installed or run. Feature-gated options that are off by
// default (tunnel --url and --local-port, the Teamwork Graph product) are left out.
// Hidden commands and options are marked hidden. The tunnel -h flag is the debug host
// there (it shadows the -h help alias, --help still works).

const environmentSuggestions = ["development", "staging", "production"];

const productSuggestions = ["Jira", "Confluence", "Compass", "Bitbucket"];

const uiTypeSuggestions = ["ui-kit", "custom-ui"];

const environmentOption: Fig.Option = {
  name: ["-e", "--environment"],
  description:
    "Specify the environment (see your default environment by running forge settings list)",
  args: {
    name: "environment",
    isOptional: true,
    suggestions: environmentSuggestions,
  },
};

const jsonOption: Fig.Option = {
  name: "--json",
  description: "Output results in JSON format",
};

const nonInteractiveOption: Fig.Option = {
  name: "--non-interactive",
  description: "Run the command without input prompts",
};

const appIdOverrideOption: Fig.Option = {
  name: "--app-id-override",
  description: "App ID to use (skips reading from manifest)",
  args: {
    name: "appId",
  },
};

const siteOption: Fig.Option = {
  name: ["-s", "--site"],
  description: "Site URL (example.atlassian.net)",
  args: {
    name: "site",
    isOptional: true,
  },
};

const productOption: Fig.Option = {
  name: ["-p", "--product"],
  description: `Atlassian app (${productSuggestions.join(", ")})`,
  args: {
    name: "Atlassian app",
    isOptional: true,
    suggestions: productSuggestions,
  },
};

const outFileOption: Fig.Option = {
  name: ["-f", "--out-file"],
  description: "Specify a file to output the results",
  args: {
    name: "outFile",
    template: "filepaths",
  },
};

const approveOption: Fig.Option = {
  name: "--approve",
  description: "List of validation rules to approve",
  args: {
    name: "rule",
    isVariadic: true,
  },
};

const inspectOption: Fig.Option = {
  name: "--inspect",
  description: "Save application bundle for inspection",
};

const buildTagOption = (description: string): Fig.Option => ({
  name: ["-t", "--tag"],
  description,
  args: {
    name: "tag",
  },
});

const noVerifyOption = (description: string, alias: string): Fig.Option => ({
  name: [alias, "--no-verify"],
  description,
});

const placementOption = (description: string): Fig.Option => ({
  name: "--placement",
  description,
  args: {
    name: "placement",
  },
});

const majorVersionOption = (
  description: string,
  isOptional: boolean
): Fig.Option => ({
  name: ["-v", "--major-version"],
  description,
  args: isOptional
    ? { name: "version", isOptional: true }
    : { name: "version" },
});

const limitOption = (description: string): Fig.Option => ({
  name: ["-l", "--limit"],
  description,
  args: {
    name: "limit",
  },
});

const containerKeyOption = (description: string): Fig.Option => ({
  name: ["-k", "--key"],
  description,
  args: {
    name: "key",
  },
});

const developerSpaceOptions: Fig.Option[] = [
  {
    name: ["-s", "--developer-space-id"],
    description:
      "Specify the Developer Space id to use (see your Developer Spaces by running forge developer-spaces list)",
    args: {
      name: "Developer Space id",
    },
  },
  {
    name: ["-y", "--accept-terms"],
    description: "Accept terms and conditions without prompting",
  },
];

const moduleProductOption = (description: string): Fig.Option => ({
  name: ["-p", "--product"],
  description,
  args: {
    name: "product",
  },
});

const moduleUiTypeOption = (description: string): Fig.Option => ({
  name: ["-u", "--ui-type"],
  description,
  args: {
    name: "ui-kit|custom-ui",
    suggestions: uiTypeSuggestions,
  },
});

const skillsAgentOption: Fig.Option = {
  name: ["-a", "--agent"],
  description:
    "Specify AI agents: claude, cursor, codex, gemini, copilot, vscode",
  args: {
    name: "agent",
    isVariadic: true,
    suggestions: ["claude", "cursor", "codex", "gemini", "copilot", "vscode"],
  },
};

const skillsScopeOption: Fig.Option = {
  name: "--scope",
  description: "Set the scope to user or project",
  args: {
    name: "scope",
    default: "project",
    suggestions: ["user", "project"],
  },
};

const completionSpec: Fig.Spec = {
  name: "@forge/cli",
  description: "A command line interface for managing Atlassian-hosted apps",
  subcommands: [
    {
      name: "autocomplete",
      description: "Configures autocomplete for the Forge CLI",
      args: {
        name: "install|uninstall",
        suggestions: ["install", "uninstall"],
      },
      priority: 10,
    },
    {
      name: "login",
      description: "Log in to your Atlassian account",
      options: [
        {
          name: ["-u", "--email"],
          description: "Specify the email to use",
          args: {
            name: "user email",
          },
        },
        {
          name: ["-t", "--token"],
          description: "Specify the API token to use",
          args: {
            name: "api token",
          },
        },
        nonInteractiveOption,
      ],
      icon: "🔐",
    },
    {
      name: "logout",
      description: "Log out of your Atlassian account",
      icon: "🔓",
    },
    {
      name: "whoami",
      description: "Display the account information of the logged in user",
      icon: "👤",
    },
    {
      name: "create",
      description: "Create an app",
      options: [
        {
          name: ["-t", "--template"],
          description: "Specify the template to use",
          args: {
            name: "template name",
          },
        },
        {
          name: ["-d", "--directory"],
          description:
            "Specify the directory to create (uses the template name by default)",
          args: {
            name: "directory name",
          },
        },
        {
          name: "--personal",
          description: "Register as a personal app",
        },
        ...developerSpaceOptions,
        {
          name: "--preset",
          description: "Create the app from a preset set of modules",
          hidden: true,
          args: {
            name: "preset id",
            suggestions: [
              "jira-global-page-issue-panel",
              "jira-admin-page-issue-panel",
              "confluence-macro-global-settings",
            ],
          },
        },
      ],
      args: {
        name: "name",
        isOptional: true,
      },
      icon: "🆕",
      priority: 60,
    },
    {
      name: "register",
      description:
        "Register an app you didn't create so you can run commands for it",
      options: [
        {
          name: "--personal",
          description: "Register as a personal app",
        },
        ...developerSpaceOptions,
      ],
      args: {
        name: "name",
        isOptional: true,
      },
      icon: "📝",
    },
    {
      name: "build",
      description: "Build and upload your app",
      subcommands: [
        {
          name: "list",
          description: "List builds for your app",
          options: [
            limitOption("Specify the number of builds to show (default is 25)"),
            jsonOption,
            appIdOverrideOption,
          ],
        },
      ],
      options: [
        noVerifyOption("Disable pre-build checks", "-f"),
        buildTagOption("Specify a custom build tag for build"),
        inspectOption,
        nonInteractiveOption,
      ],
    },
    {
      name: "deploy",
      description: "Deploy your app to an environment",
      subcommands: [
        {
          name: "list",
          description: "List app deployments",
          options: [jsonOption],
        },
        {
          name: "status",
          description:
            "Show the placement deployment status of an app version in an environment",
          hidden: true,
          options: [
            majorVersionOption(
              "Specify the major version to show (defaults to the latest deployed version)",
              true
            ),
            environmentOption,
            nonInteractiveOption,
            jsonOption,
          ],
        },
        {
          name: "retry",
          description:
            "Retry the failed placements of an existing app version deployment in an environment, without a new deployment",
          hidden: true,
          options: [
            majorVersionOption(
              "Specify the major version to retry (defaults to the latest deployed version)",
              true
            ),
            {
              name: "--placement",
              description:
                "Placement IDs to retry, separated by spaces (defaults to every failed placement)",
              args: {
                name: "placement",
                isVariadic: true,
              },
            },
            environmentOption,
            nonInteractiveOption,
            jsonOption,
          ],
        },
      ],
      options: [
        noVerifyOption("Disable pre-deployment checks", "-f"),
        majorVersionOption("Specify a major version to update (Preview)", true),
        buildTagOption("Specify a build tag to deploy (from forge build)"),
        inspectOption,
        {
          name: "--skip-rollout",
          description: "Skip rolling release rollout after deployment",
        },
        approveOption,
        environmentOption,
        nonInteractiveOption,
      ],
      icon: "🚀",
      priority: 60,
    },
    {
      name: "install",
      description: "Manage app installations",
      subcommands: [
        {
          name: "list",
          description: "List app installations",
          options: [jsonOption, appIdOverrideOption],
        },
        {
          name: "install:list",
          description: "Deprecated, use forge install list instead",
          deprecated: true,
          hidden: true,
        },
      ],
      options: [
        appIdOverrideOption,
        environmentOption,
        siteOption,
        productOption,
        {
          name: ["-d", "--demo-site"],
          description:
            "Install onto your demo site instead of a site passed with --site",
        },
        {
          name: "--upgrade",
          description:
            "Upgrade an existing installation (allowed values: all (default), code)",
          args: {
            name: "target",
            isOptional: true,
            suggestions: ["all", "code"],
          },
        },
        {
          name: "--confirm-scopes",
          description:
            "Skip confirmation of scopes for the app before installing or upgrading the app",
        },
        {
          name: ["-l", "--license"],
          description:
            "Specify the license value for the app (allowed values: active, standard, advanced, inactive, and trial)",
          args: {
            name: "license",
            isOptional: true,
            suggestions: [
              "active",
              "standard",
              "advanced",
              "inactive",
              "trial",
            ],
          },
        },
        {
          name: "--license-modes",
          description:
            "Specify the list of license mode value for the app (allowed values: user-access)",
          args: {
            name: "licenseModes",
            isOptional: true,
            isVariadic: true,
            suggestions: ["user-access"],
          },
        },
        {
          name: "--users-with-access",
          description:
            "Specify the list of Atlassian Account IDs(aaid) for users who have access to the app",
          args: {
            name: "user",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "--major-version",
          description: "Specify the major version to install",
          args: {
            name: "majorVersion",
          },
        },
        {
          name: "--unitId",
          description: "The unit id to install the global app into",
          args: {
            name: "unitId",
          },
        },
        nonInteractiveOption,
      ],
      icon: "💿",
      priority: 60,
    },
    {
      name: "uninstall",
      description: "Uninstall the app from an Atlassian site",
      options: [
        siteOption,
        productOption,
        environmentOption,
        {
          name: "--batch",
          description: "Select up to 10 installations to uninstall",
        },
        {
          name: ["-i", "--installation-id"],
          description: "Specify the installation ID",
          args: {
            name: "installationId",
          },
        },
        appIdOverrideOption,
      ],
      icon: "❌",
    },
    {
      name: "tunnel",
      description:
        "Start a tunnel to connect your local code with the app running in the development environment",
      options: [
        environmentOption,
        {
          name: ["-d", "--debug"],
          description: "Enable debugger mode",
        },
        {
          name: ["-f", "--debugFunctionHandlers"],
          description:
            "List of function handlers declared on manifest to debug, separated by space. This option must be specified if debug mode is enabled. It is only used for Node runtime debugger",
          args: {
            name: "debugFunctionHandlers",
            isVariadic: true,
          },
        },
        {
          name: ["-p", "--debugStartingPort"],
          description:
            "Starting port to use for debugging, multiple handlers will get subsequent ports. It is only used for Node runtime debugger",
          args: {
            name: "debugStartingPort",
            isOptional: true,
            default: "9229",
          },
        },
        {
          name: ["-h", "--debugHost"],
          description:
            "Host to bind the Node runtime debuggers to, default is 127.0.0.1",
          args: {
            name: "debugHost",
            isOptional: true,
            default: "127.0.0.1",
          },
        },
        noVerifyOption("Disable pre-tunnel checks", "-n"),
      ],
      icon: "🔮",
      priority: 60,
    },
    {
      name: "lint",
      description: "Check the source files for common errors",
      options: [
        {
          name: "--fix",
          description: "Attempt to automatically fix any issues encountered",
        },
        approveOption,
        environmentOption,
      ],
      icon: "🧹",
    },
    {
      name: "logs",
      description: "View app logs",
      options: [
        environmentOption,
        {
          name: ["-i", "--invocation"],
          description: "View logs for a given invocation ID",
          args: {
            name: "invocation",
          },
        },
        {
          name: ["-n", "--limit"],
          description: "Number of log lines to return",
          args: {
            name: "limit",
            default: "20",
          },
        },
        {
          name: ["-s", "--since"],
          description:
            "View logs since the specified time. valid formats: YYYY-MM-DD, ISO 8061 timestamp or a relative time (e.g: 5m, 10h, 2d)",
          args: {
            name: "since",
          },
        },
        {
          name: ["-g", "--grouped"],
          description: "Group logs by invocation ID",
        },
        {
          name: ["-c", "--containerKey"],
          description: "View logs for a given container",
          args: {
            name: "containerKey",
          },
        },
        {
          name: "--instance",
          description: "View logs for a given container instance",
          args: {
            name: "instance",
          },
        },
        {
          name: "--serviceKey",
          description: "View logs for a given service",
          args: {
            name: "serviceKey",
          },
        },
        {
          name: ["-f", "--functionKey"],
          description: "View logs for a given function",
          args: {
            name: "functionKey",
          },
        },
        placementOption("View logs for a given container placement"),
      ],
      icon: "📃",
    },
    {
      name: "module",
      description:
        "[Preview] Commands for managing modules in your app. These commands may modify your app files (manifest.yml, source files, and package.json)",
      subcommands: [
        {
          name: "add",
          description:
            "[Preview] Add a module to your Forge App. This will modify your app files (manifest.yml, source files, and package.json)",
          options: [
            {
              name: ["-t", "--module-type"],
              description:
                "Module type to add (e.g. jira:issuePanel, jiraServiceManagement:portalFooter, confluence:macro, etc.)",
              args: {
                name: "type",
              },
            },
            moduleUiTypeOption("UI framework (ui-kit, custom-ui)"),
            moduleProductOption(
              "Target product (Jira, Jira Service Management, Confluence, etc.)"
            ),
            {
              name: "--dry-run",
              description: "Show what would be generated",
            },
            {
              name: "--force",
              description:
                "Overwrite existing files and upgrade conflicting dependencies to template versions",
            },
            {
              name: "--variables",
              description:
                'Template variables as a JSON object, e.g. \'{"moduleKey":"my-panel","title":"My Panel"}\'. Implies --non-interactive (requires -t/--module-type)',
              args: {
                name: "json",
              },
            },
            {
              name: "--no-install",
              description: "Skip installing dependencies",
            },
            nonInteractiveOption,
          ],
        },
        {
          name: "list",
          description: "[Preview] List available module templates",
          options: [
            {
              name: ["-f", "--prefix"],
              description:
                "Filter by module key prefix (e.g. jira:, jira:issuePanel, confluence:)",
              args: {
                name: "prefix",
              },
            },
            moduleProductOption(
              "Filter by product (Jira, Jira Service Management, Confluence, etc.)"
            ),
            moduleUiTypeOption("Filter by UI framework (ui-kit, custom-ui)"),
            nonInteractiveOption,
          ],
        },
        {
          name: "show",
          description: "[Preview] Show details about a module template",
          args: {
            name: "moduleType",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "console",
      description: "Show the link to your app in the developer console",
      options: [
        {
          name: "--open",
          description: "Also open the link in your default browser",
        },
      ],
    },
    {
      name: "environments",
      description: "Manage app environments",
      subcommands: [
        {
          name: "create",
          description: "Create a new development environment",
          options: [
            {
              name: ["-e", "--environment"],
              description: "Specify a name for the environment",
              args: {
                name: "environment",
                isOptional: true,
              },
            },
            nonInteractiveOption,
          ],
        },
        {
          name: "list",
          description: "View all environments for this app",
          options: [nonInteractiveOption, jsonOption],
        },
        {
          name: "delete",
          description: "Delete an existing development environment",
          options: [
            {
              name: ["-e", "--environment"],
              description: "Specify the environment to delete",
              args: {
                name: "environments",
                isOptional: true,
                isVariadic: true,
              },
            },
            nonInteractiveOption,
          ],
        },
      ],
    },
    {
      name: "variables",
      description: "Manage app environment variables",
      subcommands: [
        {
          name: "set",
          description: "Set an environment variable",
          options: [
            {
              name: "--encrypt",
              description: "Encrypt variable",
            },
            environmentOption,
          ],
          args: [
            {
              name: "key",
              isOptional: true,
            },
            {
              name: "value",
              isOptional: true,
            },
          ],
        },
        {
          name: "unset",
          description: "Remove an environment variable",
          options: [environmentOption],
          args: {
            name: "key",
          },
        },
        {
          name: "list",
          description: "List the environment variables",
          options: [environmentOption, jsonOption],
        },
        {
          name: "variables:set",
          description: "Deprecated, use forge variables set instead",
          deprecated: true,
          hidden: true,
        },
        {
          name: "variables:unset",
          description: "Deprecated, use forge variables unset instead",
          deprecated: true,
          hidden: true,
        },
        {
          name: "variables:list",
          description: "Deprecated, use forge variables list instead",
          deprecated: true,
          hidden: true,
        },
      ],
      icon: "🅰️",
    },
    {
      name: "webtrigger",
      description: "Manage webtriggers",
      subcommands: [
        {
          name: "create",
          description: "Get a web trigger URL",
          options: [
            {
              name: ["-f", "--functionKey"],
              description: "Web trigger key from the manifest.yml file",
              args: {
                name: "functionKey",
              },
            },
            {
              name: "--readSecretKey",
              description:
                "Read the secret key for an authenticated (HMAC) web trigger from stdin",
            },
            {
              name: "--noKeyExpiry",
              description:
                "Create the web trigger URL with a key that does not expire",
            },
            siteOption,
            productOption,
            environmentOption,
          ],
        },
        {
          name: "list",
          description: "List webtrigger URLs",
          options: [
            {
              name: ["-f", "--functionKey"],
              description: "Web trigger key from the manifest.yml file",
              args: {
                name: "functionKey",
              },
            },
            siteOption,
            productOption,
            environmentOption,
            jsonOption,
          ],
        },
        {
          name: "delete",
          description: "Delete a webtrigger URL",
          options: [
            {
              name: ["-i", "--webtriggerId"],
              description: "ID of the webtrigger URL to delete",
              args: {
                name: "webtriggerId",
              },
            },
            siteOption,
            productOption,
            environmentOption,
          ],
        },
      ],
      icon: "🌐",
    },
    {
      name: "settings",
      description: "Manage Forge CLI settings",
      subcommands: [
        {
          name: "list",
          description: "List Forge CLI settings",
          options: [jsonOption],
        },
        {
          name: "set",
          description:
            "Update Forge CLI setting (choices: usage-analytics, default-environment, seasonal-effects, proxy)",
          args: [
            {
              name: "setting",
              suggestions: [
                "usage-analytics",
                "default-environment",
                "seasonal-effects",
                "proxy",
                {
                  name: "non-interactive",
                  description:
                    "Run commands without prompts: off (default), on, or auto",
                  hidden: true,
                },
              ],
            },
            {
              name: "boolean|string",
              description:
                "Value: true or false for usage-analytics and seasonal-effects, a development environment name for default-environment, an http(s) URL for proxy, auto, on or off for non-interactive",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Forge CLI setting. Allowed settings: proxy",
          args: {
            name: "setting",
            suggestions: ["proxy"],
          },
        },
      ],
      icon: "⚙️",
    },
    {
      name: "providers",
      description: "Manage external providers",
      subcommands: [
        {
          name: "configure",
          description: "Configure provider credentials",
          options: [
            {
              name: ["-s", "--oauth-client-secret"],
              description: "Client secret",
              args: {
                name: "oauthClientSecret",
                isOptional: true,
              },
            },
            environmentOption,
          ],
          args: {
            name: "providerKey",
            isOptional: true,
          },
        },
      ],
      icon: "👥",
    },
    {
      name: "custom-scopes",
      description: "Manage custom scopes",
      subcommands: [
        {
          name: "list",
          description: "List custom scopes",
          options: [environmentOption, jsonOption],
        },
        {
          name: "create",
          description: "Submit custom scopes for creation",
          options: [
            environmentOption,
            {
              name: ["-f", "--file"],
              description:
                "Path to YAML file containing custom scope definitions",
              args: {
                name: "file",
                default: "custom-scopes.yaml",
                template: "filepaths",
              },
            },
          ],
        },
      ],
    },
    {
      name: "eligibility",
      description:
        "Check if your app is eligible for certain programs like Runs on Atlassian",
      options: [
        environmentOption,
        majorVersionOption("Specify a major version", true),
        nonInteractiveOption,
      ],
    },
    {
      name: "storage",
      description: "Manage storage for your app",
      subcommands: [
        {
          name: "entities",
          description: "Manage indexes for custom entities present in your app",
          subcommands: [
            {
              name: "indexes",
              description:
                "Manage indexes for custom entities present in your app",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List indexes for all custom entities present in your app",
                  options: [environmentOption, jsonOption],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "version",
      description: "App version information",
      subcommands: [
        {
          name: "details",
          description: "Returns the details of a specific version of the app",
          options: [
            environmentOption,
            nonInteractiveOption,
            jsonOption,
            majorVersionOption("Specify a major version", false),
            outFileOption,
          ],
        },
        {
          name: "compare",
          description:
            "Returns the details of two versions of the app for comparison",
          options: [
            environmentOption,
            nonInteractiveOption,
            {
              name: "--version1",
              description: "1st version to compare",
              args: {
                name: "version",
              },
            },
            {
              name: "--version2",
              description: "2nd version to compare",
              args: {
                name: "version",
              },
            },
            {
              name: "--environment1",
              description: "1st environment to compare",
              args: {
                name: "environment",
                suggestions: environmentSuggestions,
              },
            },
            {
              name: "--environment2",
              description: "2nd environment to compare",
              args: {
                name: "environment",
                suggestions: environmentSuggestions,
              },
            },
            outFileOption,
          ],
        },
        {
          name: "list",
          description: "Returns a summary of all major versions of the app",
          options: [
            environmentOption,
            nonInteractiveOption,
            jsonOption,
            outFileOption,
          ],
        },
        {
          name: "bulk-upgrade",
          description:
            "Upgrades installations from one major version to another version",
          subcommands: [
            {
              name: "start",
              description:
                "Upgrades installations using one major version to another version",
              options: [
                environmentOption,
                nonInteractiveOption,
                jsonOption,
                outFileOption,
                {
                  name: "--from-version",
                  description:
                    "Source version to upgrade in a non-interactive mode",
                  args: {
                    name: "fromVersion",
                  },
                },
                {
                  name: "--to-version",
                  description:
                    "Target version to upgrade to in a non-interactive mode",
                  args: {
                    name: "toVersion",
                  },
                },
                limitOption(
                  "Limit the number of installations to upgrade (optional)"
                ),
              ],
            },
            {
              name: "list",
              description: "Returns a summary of version update requests",
              options: [
                environmentOption,
                nonInteractiveOption,
                jsonOption,
                outFileOption,
              ],
            },
            {
              name: "cancel",
              description: "Cancels a version upgrade that is in progress",
              options: [
                environmentOption,
                nonInteractiveOption,
                jsonOption,
                {
                  name: "--app-upgrade-id",
                  description: "App rollout version Id to cancel",
                  args: {
                    name: "appUpgradeId",
                  },
                },
                outFileOption,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "rollout",
      description: "Manage rolling out new versions of your app",
      hidden: true,
      subcommands: [
        {
          name: "start",
          description:
            "Roll out the latest version of your app to existing installations",
          hidden: true,
          options: [
            appIdOverrideOption,
            environmentOption,
            nonInteractiveOption,
            jsonOption,
            limitOption(
              "Stop the rollout after a certain number of installations"
            ),
          ],
        },
      ],
    },
    {
      name: "containers",
      description: "Manage containers and container images",
      subcommands: [
        {
          name: "create",
          description: "Create new container definition",
          options: [containerKeyOption("Specify the name of the container")],
        },
        {
          name: "get-login",
          description: "Get login password for the image repository",
          options: [
            {
              name: "--password-only",
              description: "Display only the password",
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete container definition along with the associated image repository and all of its images",
          options: [
            containerKeyOption("Specify the key of the container"),
            {
              name: ["-f", "--force"],
              description: "Force deletion without confirmation",
            },
          ],
        },
        {
          name: "docker-login",
          description: "Authenticate to container registry",
        },
      ],
    },
    {
      name: "repositories",
      description: "View repositories and repository images",
      hidden: true,
      subcommands: [
        {
          name: "images",
          description: "Manage container images",
          subcommands: [
            {
              name: "list",
              description: "List all images for the container",
              options: [
                containerKeyOption("Specify the name of the container"),
                buildTagOption("Filter images by tag"),
                jsonOption,
              ],
            },
          ],
        },
        {
          name: "list",
          description: "List image repositories for all containers",
          options: [jsonOption],
        },
      ],
    },
    {
      name: "show",
      description:
        "Display information about the deployed app's containers and services",
      subcommands: [
        {
          name: "services",
          description: "Display information about deployed app services",
          options: [
            environmentOption,
            {
              name: ["-s", "--service"],
              description: "Specify the name of the service",
              args: {
                name: "service",
                isOptional: true,
              },
            },
            {
              name: ["-w", "--watch"],
              description: "Watch for changes to selected services",
            },
            jsonOption,
            placementOption("Placement where the app is deployed"),
          ],
        },
        {
          name: "containers",
          description:
            "Display information about deployed app containers for a given service",
          options: [
            {
              name: ["-s", "--service"],
              description: "Specify the name of a service",
              args: {
                name: "service",
              },
            },
            {
              name: ["-c", "--container"],
              description: "Specify the name of a container",
              args: {
                name: "container",
                isOptional: true,
              },
            },
            environmentOption,
            jsonOption,
            placementOption("Placement where the app is deployed"),
          ],
        },
      ],
    },
    {
      name: "manifest",
      description: "Manage app manifest",
      subcommands: [
        {
          name: "render",
          description:
            "Render the app manifest after applying environment transformations",
          options: [
            environmentOption,
            placementOption("Placement where the app is deployed"),
            jsonOption,
          ],
        },
      ],
    },
    {
      name: "developer-spaces",
      description: "Manage Developer Spaces",
      subcommands: [
        {
          name: "list",
          description: "Lists all Developer Spaces",
          options: [jsonOption],
        },
      ],
    },
    {
      name: "site",
      description: "Manage demo sites",
      subcommands: [
        {
          name: "provision",
          description: "Provision a demo site for development and testing",
        },
      ],
    },
    {
      name: "skills",
      description:
        "Manage Forge developer skills and MCP servers for AI coding agents",
      subcommands: [
        {
          name: "install",
          description:
            "Install the latest Forge developer skills and configure the Forge and ADS MCP servers",
          options: [
            skillsAgentOption,
            {
              name: ["-s", "--skill"],
              description: "Install only the specified Forge skills",
              args: {
                name: "skill",
                isVariadic: true,
              },
            },
            skillsScopeOption,
            {
              name: "--no-mcp",
              description: "Skip configuring the Forge and ADS MCP servers",
            },
            {
              name: "--dry-run",
              description: "Show the changes without making them",
            },
            jsonOption,
            nonInteractiveOption,
          ],
        },
        {
          name: "status",
          description:
            "Show which AI agents have Forge skills and MCP servers, and at which scope",
          options: [jsonOption],
        },
        {
          name: "remove",
          description:
            "Remove Forge skills and the Forge and ADS MCP servers from AI agents",
          options: [
            skillsAgentOption,
            skillsScopeOption,
            jsonOption,
            nonInteractiveOption,
          ],
        },
      ],
    },
    {
      name: "assistant",
      description:
        "[Experimental feature] Manage AI assistant settings (Rovo/Gemini)",
      subcommands: [
        {
          name: "on",
          description:
            "[Experimental feature] Enable AI assistant for error analysis (specify name: rovo or gemini)",
          args: {
            name: "name",
            suggestions: ["rovo", "gemini"],
          },
        },
        {
          name: "off",
          description: "Disable AI assistant for error analysis",
        },
      ],
    },
    {
      name: "feedback",
      description: "Let us know what you think about Forge",
      icon: "📢",
    },
  ],
  options: [
    {
      name: "--version",
      description: "Output the version number",
    },
    {
      name: "--verbose",
      description: "Enable verbose mode",
      isPersistent: true,
    },
    {
      name: "--no-color",
      description: "Disable colored output",
      hidden: true,
      isPersistent: true,
    },
    {
      name: ["-h", "--help"],
      description: "Display help for command",
      isPersistent: true,
      priority: 49,
    },
  ],
};

export default completionSpec;
