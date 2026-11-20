// CircleCI CLI v1.18.0 (latest tag of CircleCI-Public/circleci-cli and Homebrew formula "circleci", 2026-11-20). Source: static read of the v1.18.0 source, not run (sandbox blocks running cloned code).
// The command tree, flags, types, aliases and defaults come from the per-command help pages committed as golden files in
// internal/cmd/root/testdata/help (checked by the repo's own tests), cross-checked with internal/cmd/**/*.go and CHANGELOG.md.
// The v1 line is a ground-up rewrite: the 0.1.x commands (local, follow, diagnostic, open, update, "orb publish <path> <orb>" etc.) are gone.
// Hidden commands kept: setup, step halt, man and completion bash/fish/powershell/zsh. Extension commands (e.g. testsuite) are not listed.

const jsonOption: Fig.Option = {
  name: "--json",
  description: "Output as JSON",
};

const jqOption: Fig.Option = {
  name: "--jq",
  description:
    "Process values from the response using jq syntax (see `circleci help formatting`)",
  args: {
    name: "jq",
  },
};

const projectOption: Fig.Option = {
  name: "--project",
  description: "Project slug (e.g. gh/org/repo); defaults to git remote",
  args: {
    name: "project",
  },
};

const forceOption: Fig.Option = {
  name: ["-f", "--force"],
  description: "Skip confirmation prompt",
};

const orgOption: Fig.Option = {
  name: "--org",
  description:
    "Organization slug (e.g. gh/myorg) or UUID; defaults to git remote",
  args: {
    name: "org",
  },
};

const policyContextOption: Fig.Option = {
  name: "--policy-context",
  description: "Policy context",
  args: {
    name: "policy-context",
    default: "config",
  },
};

const requiredOrgOption: Fig.Option = {
  name: "--org",
  description: "Organization slug (e.g. gh/myorg) or UUID (required)",
  args: {
    name: "org",
  },
};

const contextOrgOption: Fig.Option = {
  name: "--org",
  description:
    "Organization slug (e.g. gh/myorg) or UUID; used when resolving name to ID",
  args: {
    name: "org",
  },
};

const logLevelOption: Fig.Option = {
  name: "--log-level",
  description: "Log level (debug, info, warn, error)",
  args: {
    name: "log-level",
    suggestions: ["debug", "info", "warn", "error"],
  },
};

const projectIdOption: Fig.Option = {
  name: "--project-id",
  description: "Project UUID (overrides --project)",
  args: {
    name: "project-id",
  },
};

const completionOutputOption: Fig.Option = {
  name: ["-o", "--output"],
  description: "Write the completion script to this file instead of stdout",
  args: {
    name: "output",
    template: "filepaths",
  },
};

const resourceClassOption: Fig.Option = {
  name: "--resource-class",
  description: "Filter by resource class (namespace/name or ID)",
  args: {
    name: "resource-class",
  },
};

const pipelineConfigOption: Fig.Option = {
  name: ["-c", "--config"],
  description: "Path to the pipeline config file",
  args: {
    name: "config",
    template: "filepaths",
    default: ".circleci/config.yml",
  },
};

const mcpServerNameOption: Fig.Option = {
  name: "--server-name",
  description: "Name for the MCP server",
  args: {
    name: "server-name",
    default: "circleci-cli",
  },
};

const mcpRemoveServerNameOption: Fig.Option = {
  name: "--server-name",
  description: "Name of the MCP server to remove",
  args: {
    name: "server-name",
    default: "circleci-cli",
  },
};

const claudeConfigPathOption: Fig.Option = {
  name: "--config-path",
  description: "Path to Claude config file",
  args: {
    name: "config-path",
    template: "filepaths",
  },
};

const cursorConfigPathOption: Fig.Option = {
  name: "--config-path",
  description: "Path to Cursor config file",
  args: {
    name: "config-path",
    template: "filepaths",
  },
};

const vscodeConfigPathOption: Fig.Option = {
  name: "--config-path",
  description: "Path to VSCode config file",
  args: {
    name: "config-path",
    template: "filepaths",
  },
};

const environmentOption: Fig.Option = {
  name: "--environment",
  description: "Filter by deploy environment ID",
  args: {
    name: "environment",
  },
};

const envOption: Fig.Option = {
  name: ["-e", "--env"],
  description:
    "Environment variables (e.g., --env KEY1=value1 --env KEY2=value2)",
  isRepeatable: true,
  args: {
    name: "key=value",
  },
};

const namespaceOption: Fig.Option = {
  name: "--namespace",
  description: "Filter by namespace (organization)",
  args: {
    name: "namespace",
  },
};

const orbOrgOption: Fig.Option = {
  name: "--org",
  description:
    "Organization slug (e.g. gh/myorg) or UUID for private orb resolution; defaults to git remote",
  args: {
    name: "org",
  },
};

const orgSlugOption: Fig.Option = {
  name: "--org",
  description: "Organization slug (e.g. gh/myorg); defaults to git remote",
  args: {
    name: "org",
  },
};

const artifactsOutputOption: Fig.Option = {
  name: ["-o", "--output"],
  description: "Download artifacts into this directory",
  args: {
    name: "output",
    template: "folders",
  },
};

const completionSpec: Fig.Spec = {
  name: "circleci",
  description: "# CircleCI CLI",
  subcommands: [
    {
      name: "api",
      description: "Call the CircleCI REST API directly",
      args: {
        name: "path",
        description:
          "Request path, relative to /api/v3 by default (for example, projects/{project-id})",
      },
      options: [
        {
          name: ["-d", "--data"],
          description:
            "Raw request body sent verbatim; @file reads from a file, @- from stdin",
          args: {
            name: "data",
          },
        },
        {
          name: ["-f", "--field"],
          description:
            "Add a field: key=value (query param for GET/DELETE, JSON body for POST/PUT/PATCH)",
          isRepeatable: true,
          args: {
            name: "key=value",
          },
        },
        {
          name: ["-H", "--header"],
          description: 'Add a request header: "Key: Value"',
          isRepeatable: true,
          args: {
            name: "Key: Value",
          },
        },
        jqOption,
        {
          name: ["-X", "--method"],
          description:
            "HTTP method (default: GET, or POST when -f or -d is used)",
          args: {
            name: "method",
          },
        },
      ],
    },
    {
      name: "artifact",
      description: "List and download a job's artifact files",
      args: {
        name: "job-id",
        description: "UUID of the job",
      },
      options: [jqOption, jsonOption, artifactsOutputOption],
    },
    {
      name: "auth",
      description: "Log in, sign up and check your CircleCI identity",
      subcommands: [
        {
          name: "id",
          description: "Show the device ID for this CLI installation",
          options: [jsonOption],
        },
        {
          name: "login",
          description: "Log in to a CircleCI account",
          options: [
            {
              name: "--no-browser",
              description:
                "Print the authorize URL instead of opening a browser",
            },
          ],
        },
        {
          name: "logout",
          description: "Log out of a CircleCI account",
          options: [jqOption, jsonOption],
        },
        {
          name: "me",
          description: "Display active account information",
          options: [jqOption, jsonOption],
        },
        {
          name: "signup",
          description: "Sign-up for a new CircleCI account",
          options: [
            {
              name: "--no-browser",
              description:
                "Print the authorize URL instead of opening a browser",
            },
          ],
        },
      ],
    },
    {
      name: "certificate",
      description: "Manage iOS code signing certificates",
      subcommands: [
        {
          name: ["delete", "rm"],
          description: "Delete an iOS certificate",
          args: {
            name: "cert-id",
            description: "ID of the certificate to delete",
          },
          options: [forceOption],
        },
        {
          name: ["list", "ls"],
          description: "List uploaded iOS certificates",
          options: [jqOption, jsonOption, orgOption],
        },
        {
          name: "upload",
          description: "Upload a .p12 certificate",
          options: [
            {
              name: "--cert-file",
              description: "Path to the .p12 certificate file",
              args: {
                name: "cert-file",
                template: "filepaths",
              },
            },
            jqOption,
            jsonOption,
            orgOption,
            {
              name: "--password",
              description:
                "Password for the .p12 file. Pass - to read from stdin. Prompted if omitted in a terminal",
              args: {
                name: "password",
              },
            },
          ],
        },
      ],
    },
    {
      name: "completion",
      description: "Install, remove or print shell completions",
      subcommands: [
        {
          name: "bash",
          description: "Generate bash completion script",
          hidden: true,
          options: [completionOutputOption],
        },
        {
          name: "fish",
          description: "Generate fish completion script",
          hidden: true,
          options: [completionOutputOption],
        },
        {
          name: "install",
          description: "Install shell completion into your shell profile",
        },
        {
          name: "powershell",
          description: "Generate powershell completion script",
          hidden: true,
          options: [completionOutputOption],
        },
        {
          name: "uninstall",
          description: "Remove shell completion from your shell profile",
        },
        {
          name: "zsh",
          description: "Generate zsh completion script",
          hidden: true,
          options: [completionOutputOption],
        },
      ],
    },
    {
      name: "component-version",
      description: "Manage deploy component versions",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List versions of a deploy component",
          args: {
            name: "component-id",
            description: "UUID of the deploy component",
          },
          options: [environmentOption, jqOption, jsonOption],
        },
      ],
    },
    {
      name: "config",
      description: "Generate, validate, process and pack config YAML",
      subcommands: [
        {
          name: "generate",
          description:
            "Print a prompt for your coding agent to write .circleci/config.yml",
          args: {
            name: "path",
            description: "Directory to scan; defaults to the current directory",
            template: "folders",
            isOptional: true,
          },
          options: [
            jsonOption,
            {
              name: "--template",
              description:
                "Write a starter config from a local template instead of printing a prompt",
            },
          ],
        },
        {
          name: "pack",
          description: "Bundle split config files into a single YAML document",
          args: {
            name: "path",
            description: "Split config directory to pack",
            template: "folders",
          },
        },
        {
          name: "process",
          description: "Compile and expand a pipeline config file",
          args: {
            name: "path",
            description: "Pipeline config file to compile, or - for stdin",
            template: "filepaths",
          },
          options: [
            {
              name: ["-n", "--next"],
              description:
                "Enable config next which previews upcoming potentially breaking config changes",
            },
            orbOrgOption,
            {
              name: "--pipeline-parameters",
              description:
                "Pipeline parameters as a YAML map or path to a YAML file",
              args: {
                name: "pipeline-parameters",
              },
            },
          ],
        },
        {
          name: "validate",
          description: "Validate a pipeline config file",
          args: {
            name: "path",
            description: "Pipeline config file to validate, or - for stdin",
            template: "filepaths",
            isOptional: true,
          },
          options: [
            {
              name: ["-c", "--config"],
              description: 'Path to config file (use "-" for stdin)',
              args: {
                name: "config",
                template: "filepaths",
                default: ".circleci/config.yml",
              },
            },
            jsonOption,
            {
              name: ["-n", "--next"],
              description:
                "Enable config next which previews upcoming potentially breaking config changes",
            },
            orbOrgOption,
          ],
        },
      ],
    },
    {
      name: "context",
      description: "Manage secret env vars shared across pipelines",
      subcommands: [
        {
          name: "create",
          description: "Create a new context",
          args: {
            name: "name",
            description: "Name for the new context",
          },
          options: [jqOption, jsonOption, orgOption],
        },
        {
          name: ["delete", "rm"],
          description: "Delete a context",
          args: {
            name: "context",
            description: "Context name or ID",
          },
          options: [forceOption, contextOrgOption],
        },
        {
          name: "get",
          description: "Get details of a context",
          args: {
            name: "context",
            description: "Context name or ID",
          },
          options: [jqOption, jsonOption, contextOrgOption],
        },
        {
          name: ["list", "ls"],
          description: "List contexts for an organization",
          options: [
            jqOption,
            jsonOption,
            {
              name: "--name",
              description: "Find contexts by name (partial match)",
              args: {
                name: "name",
              },
            },
            orgOption,
          ],
        },
        {
          name: "open",
          description: "Open the contexts settings page in the browser",
          options: [orgSlugOption],
        },
        {
          name: "restriction",
          description: "Manage context restrictions",
          subcommands: [
            {
              name: "create",
              description: "Add a restriction to a context",
              args: {
                name: "context",
                description: "Context name or ID",
              },
              options: [
                jqOption,
                jsonOption,
                contextOrgOption,
                {
                  name: "--type",
                  description:
                    "Restriction type: project, expression, or group",
                  args: {
                    name: "type",
                    suggestions: ["project", "expression", "group"],
                  },
                },
                {
                  name: "--value",
                  description:
                    "Project ID, pipeline expression, or group ID, matching --type",
                  args: {
                    name: "value",
                  },
                },
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Delete a restriction from a context",
              args: {
                name: "context",
                description: "Context name or ID",
              },
              options: [
                forceOption,
                contextOrgOption,
                {
                  name: "--restriction-id",
                  description: "UUID of the restriction to delete",
                  args: {
                    name: "restriction-id",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "secret",
          description: "Manage context environment variables",
          subcommands: [
            {
              name: ["delete", "rm"],
              description: "Delete an environment variable from a context",
              args: {
                name: "context",
                description: "Context name or ID",
              },
              options: [
                forceOption,
                {
                  name: "--name",
                  description: "Name of the environment variable to delete",
                  args: {
                    name: "name",
                  },
                },
                contextOrgOption,
              ],
            },
            {
              name: ["list", "ls"],
              description: "List environment variables in a context",
              args: {
                name: "context",
                description: "Context name or ID",
              },
              options: [jqOption, jsonOption, contextOrgOption],
            },
            {
              name: "set",
              description: "Set an environment variable in a context",
              args: {
                name: "context",
                description: "Context name or ID",
              },
              options: [
                {
                  name: "--name",
                  description: "Name of the environment variable",
                  args: {
                    name: "name",
                  },
                },
                contextOrgOption,
                {
                  name: "--value",
                  description:
                    "Value of the environment variable (prompted if omitted in a terminal)",
                  args: {
                    name: "value",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "deploy",
      description: "Track released components and versions",
      subcommands: [
        {
          name: "component",
          description: "Manage deploy components",
          subcommands: [
            {
              name: "get",
              description: "Get a deploy component",
              args: {
                name: "component-id",
                description: "UUID of the deploy component",
              },
              options: [jqOption, jsonOption],
            },
            {
              name: ["list", "ls"],
              description: "List deploy components",
              options: [jqOption, jsonOption, projectOption],
            },
            {
              name: "versions",
              description: "List versions of a deploy component",
              args: {
                name: "component-id",
                description: "UUID of the deploy component",
              },
              options: [environmentOption, jqOption, jsonOption],
            },
          ],
        },
        {
          name: "environment",
          description: "Manage deploy environments",
          subcommands: [
            {
              name: "get",
              description: "Get a deploy environment",
              args: {
                name: "environment-id",
                description: "ID of the deploy environment",
              },
              options: [jqOption, jsonOption],
            },
            {
              name: ["list", "ls"],
              description: "List deploy environments",
              options: [jqOption, jsonOption, orgSlugOption],
            },
          ],
        },
        {
          name: "init",
          description: "Instrument your config for deploy tracking",
          options: [
            {
              name: "--component",
              description: "Service/component name (skips prompt)",
              args: {
                name: "component",
              },
            },
            {
              name: "--environment",
              description:
                "Default environment for jobs whose target can't be inferred (skips prompt)",
              args: {
                name: "environment",
              },
            },
            {
              name: "--pipeline-config",
              description: "Path to CircleCI pipeline config file",
              args: {
                name: "pipeline-config",
                template: "filepaths",
                default: ".circleci/config.yml",
              },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List recent deploys",
          options: [
            jqOption,
            jsonOption,
            {
              name: "--limit",
              description: "Max number of deploys to return (0 = all)",
              args: {
                name: "limit",
                default: "10",
              },
            },
            {
              name: "--org-wide",
              description: "List deploys across all projects in the org",
            },
            projectOption,
          ],
        },
        {
          name: "open",
          description: "Open the deploys page in the browser",
          options: [projectOption],
        },
        {
          name: "rollback",
          description: "Roll back a deployed component to an earlier version",
          args: {
            name: "target-version",
            description: "Version to roll back to",
          },
          options: [
            {
              name: "--checkout-ref",
              description: "Git ref the rollback pipeline checks out",
              args: {
                name: "checkout-ref",
              },
            },
            {
              name: "--component",
              description: "Deploy component name or ID (required)",
              args: {
                name: "component",
              },
            },
            {
              name: "--config-ref",
              description:
                "Git ref the rollback pipeline's config is read from",
              args: {
                name: "config-ref",
              },
            },
            {
              name: "--environment",
              description: "Deploy environment name or ID (required)",
              args: {
                name: "environment",
              },
            },
            forceOption,
            {
              name: "--from",
              description:
                "Version being replaced; defaults to the latest deployed",
              args: {
                name: "from",
              },
            },
            jqOption,
            jsonOption,
            {
              name: "--namespace",
              description: "Namespace scoping the component",
              args: {
                name: "namespace",
                default: "default",
              },
            },
            {
              name: "--param",
              description:
                "Rollback pipeline parameter as key=value (repeatable)",
              isRepeatable: true,
              args: {
                name: "key=value",
              },
            },
            projectOption,
            {
              name: "--reason",
              description:
                "Why the rollback was requested; recorded in the audit log",
              args: {
                name: "reason",
              },
            },
          ],
        },
        {
          name: "settings",
          description: "Get deploy settings for a project",
          options: [jqOption, jsonOption, projectOption],
        },
        {
          name: "version",
          description: "Manage deploy component versions",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List versions of a deploy component",
              args: {
                name: "component-id",
                description: "UUID of the deploy component",
              },
              options: [environmentOption, jqOption, jsonOption],
            },
          ],
        },
      ],
    },
    {
      name: "dlc",
      description: "Purge a project's Docker layer cache (DLC)",
      subcommands: [
        {
          name: "purge",
          description: "Purge the Docker Layer Cache for a project",
          options: [forceOption, jsonOption, projectOption],
        },
      ],
    },
    {
      name: "env",
      description: "Work with environment variables",
      subcommands: [
        {
          name: "subst",
          description: "Substitute environment variables in a string",
          args: {
            name: "string",
            description: "String to substitute environment variables in",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "envvar",
      description: "List, set and delete a project's environment variables",
      subcommands: [
        {
          name: ["delete", "rm"],
          description: "Delete a project environment variable",
          args: {
            name: "name",
            description: "Name of the environment variable",
          },
          options: [forceOption, projectOption],
        },
        {
          name: ["list", "ls"],
          description: "List project environment variables",
          options: [jqOption, jsonOption, projectOption],
        },
        {
          name: "set",
          description: "Set a project environment variable",
          args: [
            {
              name: "name",
              description: "Name of the environment variable",
            },
            {
              name: "value",
              description: "Value to store",
            },
          ],
          options: [projectOption],
        },
      ],
    },
    {
      name: "extension",
      description: "Manage CLI extensions",
      subcommands: [
        {
          name: "install",
          description: "Install an extension",
          args: {
            name: "extension",
            description: "Extension to install",
          },
        },
        {
          name: "remove",
          description: "Remove an installed extension",
          args: {
            name: "extension",
            description: "Extension to remove",
          },
          options: [forceOption],
        },
      ],
    },
    {
      name: "feedback",
      description: "Send feedback about the CLI to CircleCI",
      args: {
        name: "message",
        description: "The feedback itself, up to 2000 characters",
      },
      options: [
        {
          name: "--function",
          description:
            'Function the report is about, or the name you looked for (e.g. "setup-vercel")',
          args: {
            name: "function",
          },
        },
        jqOption,
        jsonOption,
        {
          name: "--tool",
          description:
            'CLI command or MCP tool the feedback is about (e.g. "run get")',
          args: {
            name: "tool",
          },
        },
        {
          name: "--type",
          description:
            "Only for a Function: missing_function (none does what you needed) or function_gap (one falls short)",
          args: {
            name: "type",
            suggestions: ["missing_function", "function_gap"],
          },
        },
      ],
    },
    {
      name: "function",
      description: "Discover and declare CircleCI functions",
      subcommands: [
        {
          name: "add",
          description: "Declare a function in the pipeline config",
          args: {
            name: "name",
            description: "Name of the function to add",
          },
          options: [
            {
              name: "--as",
              description:
                "Alias a step invokes it by (default: the function's name)",
              args: {
                name: "as",
              },
            },
            pipelineConfigOption,
            {
              name: ["-n", "--dry-run"],
              description: "Show the change without writing it",
            },
            jqOption,
            jsonOption,
            {
              name: "--version",
              description: "Version to pin (default: the latest release)",
              args: {
                name: "version",
              },
            },
          ],
        },
        {
          name: ["get", "show"],
          description: "Show a function's versions and arguments",
          args: {
            name: "name",
            description: "Name of the function",
          },
          options: [
            jqOption,
            jsonOption,
            {
              name: "--version",
              description: "Version to show (default: the latest release)",
              args: {
                name: "version",
              },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List published CircleCI functions",
          options: [
            pipelineConfigOption,
            {
              name: "--include-pseudo",
              description: "Include builds in each function's versions",
            },
            jqOption,
            jsonOption,
            {
              name: "--pinned",
              description: "List the functions declared in the local config",
            },
          ],
        },
        {
          name: "update",
          description: "Change the version a declared function is pinned to",
          args: {
            name: "alias",
            description: "Alias the function is pinned under",
          },
          options: [
            pipelineConfigOption,
            {
              name: ["-n", "--dry-run"],
              description: "Show the change without writing it",
            },
            jqOption,
            jsonOption,
            {
              name: "--version",
              description: "Version to pin (default: the latest release)",
              args: {
                name: "version",
              },
            },
          ],
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command or help topic",
      args: {
        name: "command",
        description: "Command or help topic",
        isOptional: true,
        isVariadic: true,
        suggestions: [
          "agents",
          "environment",
          "formatting",
          "getting-started",
          "preflight-guide",
          "reference",
          "telemetry",
          "triggers",
        ],
      },
    },
    {
      name: "job",
      description: "Inspect a job's details, output and artifacts",
      subcommands: [
        {
          name: "artifact",
          description: "List or download artifacts for a job",
          args: {
            name: "job-id",
            description: "UUID of the job",
          },
          options: [jqOption, jsonOption, artifactsOutputOption],
        },
        {
          name: "get",
          description: "Get job details",
          args: {
            name: "job-id",
            description: "UUID of the job",
          },
          options: [jqOption, jsonOption],
        },
        {
          name: "open",
          description: "Open job in browser",
          args: {
            name: "job-id",
            description: "UUID of the job",
          },
        },
        {
          name: "output",
          description: "Work with job step output",
          subcommands: [
            {
              name: "get",
              description: "Get the output of a job step",
              args: {
                name: "job-id",
                description: "UUID of the job",
              },
              options: [
                {
                  name: "--condensed",
                  description:
                    "Fetch error-relevant lines only, filtered server-side (experimental)",
                },
                {
                  name: "--execution",
                  description: "Parallel execution index to read output from",
                  args: {
                    name: "execution",
                  },
                },
                {
                  name: "--step-num",
                  description: "Step number whose output to fetch (required)",
                  args: {
                    name: "step-num",
                  },
                },
                {
                  name: "--strip-ansi",
                  description:
                    "Force (or with =false, disable) ANSI stripping; defaults to stripping only when not a terminal",
                },
              ],
            },
            {
              name: "list",
              description: "List a job's steps with their output",
              args: {
                name: "job-id",
                description: "UUID of the job",
              },
              options: [
                {
                  name: "--execution",
                  description: "Parallel execution index to list output from",
                  args: {
                    name: "execution",
                  },
                },
                jqOption,
                jsonOption,
                {
                  name: "--tail",
                  description:
                    "Show only the last N lines of each step's output in the rendered view (0 for all)",
                  args: {
                    name: "tail",
                    default: "200",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "resource-usage",
          description: "Work with a job's CPU and memory usage",
          subcommands: [
            {
              name: "get",
              description: "Chart a job's CPU and memory usage",
              args: {
                name: "job-id",
                description: "UUID of the job",
              },
              options: [
                {
                  name: "--chart",
                  description:
                    "Plot parallel executions together or apart: auto|combined|separate",
                  args: {
                    name: "chart",
                    default: "auto",
                    suggestions: ["auto", "combined", "separate"],
                  },
                },
                {
                  name: "--execution",
                  description:
                    "Parallel execution index to report on (default all)",
                  args: {
                    name: "execution",
                    default: "-1",
                  },
                },
                jqOption,
                jsonOption,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "man",
      description: "Generate manpages",
      hidden: true,
      options: [
        {
          name: ["-o", "--output"],
          description: "Write the manpage to this file instead of stdout",
          args: {
            name: "output",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "mcp",
      description: "Run the CLI as an MCP server for AI tools",
      subcommands: [
        {
          name: "claude",
          description: "Manage Claude Desktop MCP servers",
          subcommands: [
            {
              name: "disable",
              description: "Remove server from Claude config",
              options: [claudeConfigPathOption, mcpRemoveServerNameOption],
            },
            {
              name: "enable",
              description: "Add server to Claude config",
              options: [
                claudeConfigPathOption,
                envOption,
                logLevelOption,
                mcpServerNameOption,
              ],
            },
            {
              name: "list",
              description: "Show Claude MCP servers",
              options: [claudeConfigPathOption],
            },
          ],
        },
        {
          name: "cursor",
          description: "Manage Cursor MCP servers",
          subcommands: [
            {
              name: "disable",
              description: "Remove server from Cursor config",
              options: [
                cursorConfigPathOption,
                mcpRemoveServerNameOption,
                {
                  name: "--workspace",
                  description:
                    "Remove from workspace settings (.cursor/mcp.json) instead of user settings",
                },
              ],
            },
            {
              name: "enable",
              description: "Add server to Cursor config",
              options: [
                cursorConfigPathOption,
                envOption,
                logLevelOption,
                mcpServerNameOption,
                {
                  name: "--workspace",
                  description:
                    "Add to workspace settings (.cursor/mcp.json) instead of user settings",
                },
              ],
            },
            {
              name: "list",
              description: "Show Cursor MCP servers",
              options: [
                cursorConfigPathOption,
                {
                  name: "--workspace",
                  description:
                    "List from workspace settings (.cursor/mcp.json) instead of user settings",
                },
              ],
            },
          ],
        },
        {
          name: "start",
          description: "Start the MCP server",
          options: [logLevelOption],
        },
        {
          name: "stream",
          description: "Stream the MCP server over HTTP",
          options: [
            {
              name: "--host",
              description: "Host to listen on",
              args: {
                name: "host",
              },
            },
            logLevelOption,
            {
              name: "--port",
              description: "Port number to listen on",
              args: {
                name: "port",
                default: "8080",
              },
            },
          ],
        },
        {
          name: "tools",
          description: "Export tools as JSON",
          options: [logLevelOption],
        },
        {
          name: "vscode",
          description: "Manage VSCode MCP servers",
          subcommands: [
            {
              name: "disable",
              description: "Remove server from VSCode config",
              options: [
                vscodeConfigPathOption,
                mcpRemoveServerNameOption,
                {
                  name: "--workspace",
                  description:
                    "Remove from workspace settings (.vscode/mcp.json) instead of user settings",
                },
              ],
            },
            {
              name: "enable",
              description: "Add server to VSCode config",
              options: [
                vscodeConfigPathOption,
                envOption,
                logLevelOption,
                mcpServerNameOption,
                {
                  name: "--workspace",
                  description:
                    "Add to workspace settings (.vscode/mcp.json) instead of user settings",
                },
              ],
            },
            {
              name: "list",
              description: "Show VSCode MCP servers",
              options: [
                vscodeConfigPathOption,
                {
                  name: "--workspace",
                  description:
                    "List from workspace settings (.vscode/mcp.json) instead of user settings",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "migrate",
      description: "Migrate workflows from other CI platforms to CircleCI",
      subcommands: [
        {
          name: "actions",
          description:
            "Copy a GitHub Actions workflow into .circleci/workflows/",
          args: {
            name: "workflow-file",
            description: "GitHub Actions workflow file to copy",
            template: "filepaths",
          },
          options: [
            {
              name: "--force",
              description:
                "Overwrite the destination file if it already exists",
            },
          ],
        },
      ],
    },
    {
      name: "my",
      description: "Show resources for the authenticated user",
      subcommands: [
        {
          name: ["runs", "run"],
          description: "List your recent runs grouped by project",
          options: [
            {
              name: "--failure-report",
              description:
                "Print the failure report for your newest failed run",
            },
            jqOption,
            jsonOption,
            {
              name: "--limit",
              description: "Maximum number of runs to fetch [default: 20]",
              args: {
                name: "limit",
                default: "20",
              },
            },
          ],
        },
      ],
    },
    {
      name: "namespace",
      description: "Manage the org namespace orbs publish under",
      subcommands: [
        {
          name: "create",
          description: "Create a namespace",
          args: {
            name: "name",
            description: "Namespace name to create; must be globally unique",
          },
          options: [
            jqOption,
            jsonOption,
            {
              name: "--org",
              description:
                "Organization slug (e.g. gh/myorg) or UUID to claim the namespace for (required)",
              args: {
                name: "org",
              },
            },
          ],
        },
        {
          name: ["delete", "rm"],
          description: "Delete a namespace and all its orbs",
          args: {
            name: "name",
            description: "Name of the namespace to delete",
          },
          options: [
            {
              name: ["-n", "--dry-run"],
              description: "Print what would be deleted without deleting",
            },
            forceOption,
          ],
        },
        {
          name: "get",
          description: "Get details of a namespace",
          args: {
            name: "name",
            description: "Name of the namespace",
          },
          options: [jqOption, jsonOption],
        },
        {
          name: "rename",
          description: "Rename a namespace",
          args: [
            {
              name: "name",
              description: "Current name of the namespace",
            },
            {
              name: "new-name",
              description: "New name for the namespace",
            },
          ],
          options: [jqOption, jsonOption],
        },
      ],
    },
    {
      name: "notification",
      description: "Configure where CircleCI sends notifications",
      subcommands: [
        {
          name: "slack",
          description: "Send a project's notifications to a Slack channel",
          subcommands: [
            {
              name: ["delete", "rm"],
              description: "Remove a project's Slack channel",
              options: [
                {
                  name: ["-n", "--dry-run"],
                  description: "Show what would be removed without removing it",
                },
                forceOption,
                projectOption,
              ],
            },
            {
              name: "get",
              description:
                "Show a project's Slack channel and Slack preferences",
              options: [jqOption, jsonOption, projectOption],
            },
            {
              name: "set",
              description: "Set, enable or disable a project's Slack channel",
              options: [
                {
                  name: "--channel",
                  description:
                    "Slack channel name (e.g. #ci-alerts) or ID to send notifications to",
                  args: {
                    name: "channel",
                  },
                },
                {
                  name: "--disable",
                  description:
                    "Pause Slack notifications, keeping the configured channel",
                },
                {
                  name: "--enable",
                  description:
                    "Resume Slack notifications for the configured channel",
                },
                jqOption,
                jsonOption,
                projectOption,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "onboard",
      description:
        "Guided onboarding: generate config, sign up, connect project",
      args: {
        name: "path",
        description: "Directory to onboard; defaults to the current directory",
        template: "folders",
        isOptional: true,
      },
      options: [
        {
          name: "--no-browser",
          description: "Print the signup URL instead of opening a browser",
        },
        {
          name: "--org",
          description:
            "Organization slug (e.g. gh/myorg) or UUID to set the project up in",
          args: {
            name: "org",
          },
        },
        {
          name: "--repo-id",
          description:
            "Repository ID, if it cannot be resolved from the git remote",
          args: {
            name: "repo-id",
          },
        },
        {
          name: "--scan",
          description: "Skip prompt: set up this repo on CircleCI",
        },
        {
          name: "--signup",
          description: "Skip prompt: sign up for CircleCI",
        },
      ],
    },
    {
      name: "orb",
      description: "Create, publish and inspect orbs (reusable config)",
      subcommands: [
        {
          name: "add-to-category",
          description: "Add an orb to a registry category",
          args: [
            {
              name: "namespace/orb",
              description: "Orb to add as namespace/orb",
            },
            {
              name: "category",
              description: "Registry category name",
            },
          ],
        },
        {
          name: "create",
          description: "Reserve an orb name in a namespace",
          args: {
            name: "namespace/orb",
            description: "Orb name to reserve as namespace/orb",
          },
          options: [
            jqOption,
            jsonOption,
            {
              name: "--private",
              description: "Create as a private orb",
            },
          ],
        },
        {
          name: "diff",
          description: "Show a unified diff between two orb versions",
          args: {
            name: "namespace/orb",
            description: "Orb to diff as namespace/orb",
          },
          options: [
            {
              name: "--from",
              description:
                "The first version (semver e.g. 1.0.0, or a dev label e.g. dev:my-branch)",
              args: {
                name: "from",
              },
            },
            {
              name: "--to",
              description: "The second version, in the same form as --from",
              args: {
                name: "to",
              },
            },
          ],
        },
        {
          name: "get",
          description: "Get orb metadata and statistics",
          args: {
            name: "orb",
            description: "Orb as namespace/orb[@version], or the orb ID (UUID)",
          },
          options: [jqOption, jsonOption],
        },
        {
          name: "init",
          description: "Initialize a new orb project",
          args: {
            name: "path",
            description: "Directory to scaffold the orb project into",
            template: "folders",
          },
          options: [
            {
              name: "--branch",
              description: "Primary git branch to track",
              args: {
                name: "branch",
                default: "main",
              },
            },
            {
              name: "--org",
              description:
                "Organization slug (e.g. gh/myorg) or UUID to own the orb namespace and publishing context",
              args: {
                name: "org",
              },
            },
            {
              name: "--private",
              description: "Initialize a private orb",
            },
            {
              name: "--remote",
              description:
                "Remote git repository URL (required for git setup when non-interactive)",
              args: {
                name: "remote",
              },
            },
            {
              name: "--skip-git",
              description: "Skip local git repository setup",
            },
            {
              name: "--template-only",
              description: "Download the template only; skip all setup",
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List orbs in the registry",
          args: {
            name: "namespace",
            description:
              "Namespace whose orbs to list; defaults to certified orbs",
            isOptional: true,
          },
          options: [
            jqOption,
            jsonOption,
            {
              name: "--private",
              description: "Only list private orbs (requires namespace)",
            },
            {
              name: "--uncertified",
              description: "Include uncertified orbs",
            },
          ],
        },
        {
          name: "list-categories",
          description: "List orb registry categories",
          options: [jqOption, jsonOption],
        },
        {
          name: "pack",
          description: "Pack a multi-file orb directory into a single YAML",
          args: {
            name: "path",
            description: "Orb source directory or a single orb YAML file",
            template: "filepaths",
          },
        },
        {
          name: "process",
          description: "Validate and print expanded orb YAML",
          args: {
            name: "path",
            description: "Orb YAML file, or - for stdin",
            template: "filepaths",
          },
          options: [
            {
              name: "--org",
              description:
                "Organization slug (e.g. gh/myorg) or UUID for private orb dependencies",
              args: {
                name: "org",
              },
            },
          ],
        },
        {
          name: "publish",
          description: "Publish orb versions",
          subcommands: [
            {
              name: "increment",
              description: "Increment and publish a new orb version",
              args: [
                {
                  name: "path",
                  description: "Orb YAML to publish, or - for stdin",
                  template: "filepaths",
                },
                {
                  name: "namespace/orb",
                  description: "Orb to publish as namespace/orb",
                },
              ],
              options: [
                {
                  name: "--bump",
                  description:
                    "Which version segment to increment: major, minor, or patch",
                  args: {
                    name: "bump",
                    suggestions: ["major", "minor", "patch"],
                  },
                },
              ],
            },
            {
              name: "promote",
              description: "Promote a dev orb version to a stable semver",
              args: {
                name: "namespace/orb@dev:label",
                description: "Dev version to promote",
              },
              options: [
                {
                  name: "--bump",
                  description:
                    "Which version segment to increment: major, minor, or patch",
                  args: {
                    name: "bump",
                    suggestions: ["major", "minor", "patch"],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "remove-from-category",
          description: "Remove an orb from a registry category",
          args: [
            {
              name: "namespace/orb",
              description: "Orb to remove as namespace/orb",
            },
            {
              name: "category",
              description: "Registry category name",
            },
          ],
        },
        {
          name: "source",
          description: "Print the YAML source of an orb version",
          args: {
            name: "namespace/orb[@version]",
            description:
              "Orb to print; defaults to the latest published version",
          },
        },
        {
          name: "unlist",
          description: "Hide or restore an orb in the registry",
          args: {
            name: "namespace/orb",
            description: "Orb to update as namespace/orb",
          },
          options: [
            {
              name: "--restore",
              description: "Restore the orb's visibility instead of hiding it",
            },
          ],
        },
        {
          name: "validate",
          description: "Validate an orb YAML file",
          args: {
            name: "path",
            description: "Orb YAML file, or - for stdin",
            template: "filepaths",
          },
          options: [
            {
              name: "--org",
              description:
                "Organization slug (e.g. gh/myorg) or UUID for private orb dependencies",
              args: {
                name: "org",
              },
            },
            {
              name: "--org-id",
              description: "Organization slug or UUID (deprecated: use --org)",
              hidden: true,
              args: {
                name: "org",
              },
            },
            {
              name: "--org-slug",
              description: "Organization slug or UUID (deprecated: use --org)",
              hidden: true,
              args: {
                name: "org",
              },
            },
          ],
        },
        {
          name: "version",
          description: "Get details of a single orb version",
          args: {
            name: "orb-version",
            description:
              "Orb version as namespace/orb[@version], or the orb version ID (UUID)",
          },
          options: [jqOption, jsonOption],
        },
      ],
      options: [
        {
          name: "--host",
          description: "CircleCI host (deprecated: set CIRCLE_HOST)",
          hidden: true,
          isPersistent: true,
          args: {
            name: "host",
          },
        },
        {
          name: "--token",
          description: "CircleCI API token (deprecated: set CIRCLE_TOKEN)",
          hidden: true,
          isPersistent: true,
          args: {
            name: "token",
          },
        },
      ],
    },
    {
      name: "org",
      description: "Manage CircleCI organizations",
      subcommands: [
        {
          name: "create",
          description: "Create an organization",
          args: {
            name: "name",
            description: "Name for the new organization",
          },
          options: [jqOption, jsonOption],
        },
        {
          name: "get",
          description: "Show organization details and your role in it",
          options: [jqOption, jsonOption, orgOption],
        },
        {
          name: ["list", "ls"],
          description: "List organizations you belong to",
          options: [jqOption, jsonOption],
        },
        {
          name: "setting",
          description: "View and update org advanced settings",
          subcommands: [
            {
              name: "get",
              description: "Get the current value of an org setting",
              args: {
                name: "setting",
                description: "Organization setting to read",
                suggestions: [
                  "ai-error-summarization",
                  "ai-agents",
                  "unversioned-config",
                  "certified-public-orbs",
                  "chunk-ip-ranges",
                  "marketing-tracking",
                  "minor-ai-features",
                  "preferences-tracking",
                  "private-orbs",
                  "statistics-tracking",
                  "uncertified-public-orbs",
                  "disable-user-checkout-keys",
                  "disable-running",
                  "enforce-privacy-optout",
                  "image-brownouts",
                  "context-group-restriction",
                  "resource-class-brownouts",
                  "runner-tos-accepted",
                ],
              },
              options: [jqOption, jsonOption, orgOption],
            },
            {
              name: ["list", "ls"],
              description: "List all advanced settings for an org",
              options: [jqOption, jsonOption, orgOption],
            },
            {
              name: "set",
              description: "Set an org setting",
              args: [
                {
                  name: "setting",
                  description: "Organization setting to change",
                  suggestions: [
                    "ai-error-summarization",
                    "ai-agents",
                    "unversioned-config",
                    "certified-public-orbs",
                    "chunk-ip-ranges",
                    "marketing-tracking",
                    "minor-ai-features",
                    "preferences-tracking",
                    "private-orbs",
                    "statistics-tracking",
                    "uncertified-public-orbs",
                    "disable-user-checkout-keys",
                    "disable-running",
                    "enforce-privacy-optout",
                    "image-brownouts",
                    "context-group-restriction",
                    "resource-class-brownouts",
                    "runner-tos-accepted",
                  ],
                },
                {
                  name: "value",
                  description: "New value",
                  suggestions: ["true", "false"],
                },
              ],
              options: [jqOption, jsonOption, orgOption],
            },
          ],
        },
      ],
    },
    {
      name: "pipeline",
      description: "Manage the pipeline definitions a run executes",
      subcommands: [
        {
          name: "create",
          description: "Create a pipeline definition",
          options: [
            {
              name: "--allow-nonstandard-path",
              description:
                "Allow a github-actions config file outside .github/workflows/",
            },
            {
              name: "--checkout-provider",
              description:
                "Checkout source provider (one of: github_app, github_server, origin, forgejo)",
              args: {
                name: "checkout-provider",
                suggestions: [
                  "github_app",
                  "github_server",
                  "origin",
                  "forgejo",
                ],
              },
            },
            {
              name: "--checkout-repo-full-name",
              description:
                "Checkout source repo owner/name (required for origin; enough on its own for forgejo)",
              args: {
                name: "checkout-repo-full-name",
              },
            },
            {
              name: "--checkout-repo-id",
              description: "Checkout source repo external ID",
              args: {
                name: "checkout-repo-id",
              },
            },
            {
              name: "--config-file",
              description: "Config file path (e.g. .circleci/config.yml)",
              args: {
                name: "config-file",
                template: "filepaths",
              },
            },
            {
              name: "--config-file-type",
              description:
                "Config file type, omit for standard CircleCI YAML (one of: github-actions)",
              args: {
                name: "config-file-type",
                suggestions: ["github-actions"],
              },
            },
            {
              name: "--config-provider",
              description:
                "Config source provider (one of: github_app, github_server, circleci, origin, forgejo)",
              args: {
                name: "config-provider",
                suggestions: [
                  "github_app",
                  "github_server",
                  "circleci",
                  "origin",
                  "forgejo",
                ],
              },
            },
            {
              name: "--config-repo-full-name",
              description:
                "Config source repo owner/name (required for origin; enough on its own for forgejo)",
              args: {
                name: "config-repo-full-name",
              },
            },
            {
              name: "--config-repo-id",
              description:
                "Config source repo external ID (required for github_app, github_server, origin)",
              args: {
                name: "config-repo-id",
              },
            },
            {
              name: "--description",
              description: "Pipeline definition description",
              args: {
                name: "description",
              },
            },
            jqOption,
            jsonOption,
            {
              name: "--name",
              description: "Pipeline definition name (required)",
              args: {
                name: "name",
              },
            },
            projectOption,
            projectIdOption,
          ],
        },
        {
          name: ["list", "ls"],
          description: "List pipeline definitions for a project",
          options: [jqOption, jsonOption, projectOption, projectIdOption],
        },
        {
          name: "run",
          description: "Trigger a new run of a pipeline",
          options: [
            {
              name: ["-b", "--branch"],
              description:
                "Branch to run (defaults to the checkout's current branch)",
              args: {
                name: "branch",
              },
            },
            {
              name: "--definition",
              description:
                "Pipeline definition name; needed when the project has several",
              args: {
                name: "definition",
              },
            },
            {
              name: "--definition-id",
              description: "Pipeline definition UUID, instead of --definition",
              args: {
                name: "definition-id",
              },
            },
            jqOption,
            jsonOption,
            {
              name: "--param",
              description: "Pipeline parameter as key=value (repeatable)",
              isRepeatable: true,
              args: {
                name: "key=value",
              },
            },
            projectOption,
            {
              name: ["-t", "--tag"],
              description: "Tag to run, instead of --branch",
              args: {
                name: "tag",
              },
            },
          ],
        },
      ],
    },
    {
      name: "policy",
      description: "Govern config with Rego security policies",
      subcommands: [
        {
          name: "decide",
          description: "Evaluate a config against remote policies",
          options: [
            {
              name: "--input",
              description:
                "Path to input file (e.g. .circleci/config.yml) (required)",
              args: {
                name: "input",
                template: "filepaths",
              },
            },
            jqOption,
            jsonOption,
            {
              name: "--meta",
              description: "Decision metadata as a JSON string",
              args: {
                name: "meta",
              },
            },
            {
              name: "--metafile",
              description: "Path to decision metadata file (YAML or JSON)",
              args: {
                name: "metafile",
                template: "filepaths",
              },
            },
            requiredOrgOption,
            policyContextOption,
            {
              name: "--strict",
              description: "Exit non-zero for HARD_FAIL or ERROR decisions",
            },
          ],
        },
        {
          name: "diff",
          description: "Show diff between local and remote policy bundles",
          args: {
            name: "path",
            description: "Directory of local .rego policy files",
            template: "folders",
          },
          options: [
            jqOption,
            jsonOption,
            requiredOrgOption,
            policyContextOption,
          ],
        },
        {
          name: "eval",
          description: "Evaluate a raw OPA query against policies locally",
          args: {
            name: "policy-path",
            description: "Policy .rego file or directory of policy files",
            template: "filepaths",
          },
          options: [
            {
              name: "--context",
              description:
                'Policy context (config compilation only runs when this is "config")',
              args: {
                name: "context",
                default: "config",
              },
            },
            {
              name: "--input",
              description:
                "Path to input file (e.g. .circleci/config.yml) (required)",
              args: {
                name: "input",
                template: "filepaths",
              },
            },
            jqOption,
            jsonOption,
            {
              name: "--meta",
              description: "Decision metadata as a JSON string",
              args: {
                name: "meta",
              },
            },
            {
              name: "--metafile",
              description: "Path to decision metadata file (YAML or JSON)",
              args: {
                name: "metafile",
                template: "filepaths",
              },
            },
            {
              name: "--no-compile",
              description: "Evaluate the raw config without compiling it first",
            },
            orbOrgOption,
            {
              name: "--pipeline-parameters",
              description:
                "Pipeline parameters as a YAML map or path to a YAML file",
              args: {
                name: "pipeline-parameters",
              },
            },
            {
              name: "--query",
              description: "The OPA query to evaluate",
              args: {
                name: "query",
                default: "data",
              },
            },
          ],
        },
        {
          name: "fetch",
          description: "Download the remote policy bundle",
          args: {
            name: "policy-name",
            description:
              "Name of a single policy to fetch; defaults to the whole bundle",
            isOptional: true,
          },
          options: [
            jqOption,
            jsonOption,
            requiredOrgOption,
            policyContextOption,
          ],
        },
        {
          name: "logs",
          description: "Get policy decision logs",
          args: {
            name: "decision-id",
            description:
              "Decision ID of a single log entry; defaults to all logs",
            isOptional: true,
          },
          options: [
            {
              name: "--after",
              description:
                "Return logs created after this time (RFC3339 or YYYY-MM-DD)",
              args: {
                name: "after",
              },
            },
            {
              name: "--before",
              description:
                "Return logs created before this time (RFC3339 or YYYY-MM-DD)",
              args: {
                name: "before",
              },
            },
            {
              name: "--branch",
              description: "Filter by branch name",
              args: {
                name: "branch",
              },
            },
            jqOption,
            jsonOption,
            requiredOrgOption,
            {
              name: "--out",
              description: "Write output to this file instead of stdout",
              args: {
                name: "out",
                template: "filepaths",
              },
            },
            {
              name: "--policy-bundle",
              description:
                "Retrieve the policy bundle snapshot for the given decision ID",
            },
            policyContextOption,
            {
              name: "--project-id",
              description: "Filter by project ID",
              args: {
                name: "project-id",
              },
            },
            {
              name: "--status",
              description:
                "Filter by decision status (PASS, SOFT_FAIL, HARD_FAIL, ERROR)",
              args: {
                name: "status",
                suggestions: ["PASS", "SOFT_FAIL", "HARD_FAIL", "ERROR"],
              },
            },
          ],
        },
        {
          name: "push",
          description: "Push a policy bundle to CircleCI",
          args: {
            name: "path",
            description: "Directory of local .rego policy files",
            template: "folders",
          },
          options: [
            jqOption,
            jsonOption,
            {
              name: "--no-prompt",
              description: "Skip confirmation prompt",
            },
            requiredOrgOption,
            policyContextOption,
          ],
        },
        {
          name: "settings",
          description: "Manage policy enforcement settings",
          subcommands: [
            {
              name: "get",
              description: "Get policy enforcement settings",
              options: [
                jqOption,
                jsonOption,
                requiredOrgOption,
                policyContextOption,
              ],
            },
            {
              name: "set",
              description: "Update policy enforcement settings",
              options: [
                {
                  name: "--enabled",
                  description: "Enable policy enforcement",
                },
                jqOption,
                jsonOption,
                requiredOrgOption,
                policyContextOption,
              ],
            },
          ],
        },
        {
          name: "test",
          description: "Run policy tests",
          args: {
            name: "path",
            description:
              "Directory of policies and tests; append /... to find tests recursively",
            template: "folders",
          },
          options: [
            {
              name: "--all",
              description: "Show all tests, not just failures",
            },
            {
              name: "--explain",
              description:
                "Print each test's full evaluation context (implies --all)",
            },
            jqOption,
            jsonOption,
            {
              name: "--junit",
              description: "Output results as JUnit XML",
            },
            {
              name: "--org",
              description:
                "Organization slug (e.g. gh/myorg) or UUID for private orb resolution when a test compiles; defaults to git remote",
              args: {
                name: "org",
              },
            },
            {
              name: "--run",
              description: "Only run tests whose name matches this regexp",
              args: {
                name: "run",
              },
            },
          ],
        },
      ],
    },
    {
      name: "preflight",
      description: "Run uncommitted changes through CI before you commit",
      subcommands: [
        {
          name: "cleanup",
          description: "Delete preflight branches left on the remote",
          options: [
            {
              name: ["-n", "--dry-run"],
              description: "Show what would be deleted without deleting",
            },
            forceOption,
            {
              name: "--id",
              description: "Only clean up the preflight with this ID",
              args: {
                name: "id",
              },
            },
            {
              name: "--include-running",
              description: "Also delete branches whose run has not ended",
            },
            jsonOption,
            projectOption,
            {
              name: "--remote",
              description: "Git remote to delete branches from",
              args: {
                name: "remote",
                default: "origin",
              },
            },
          ],
        },
        {
          name: "run",
          description:
            "Push the working tree to a temporary branch and watch its run",
          options: [
            {
              name: "--interval",
              description: "How often to poll the run",
              args: {
                name: "interval",
                default: "5s",
              },
            },
            jsonOption,
            {
              name: "--no-cleanup",
              description:
                "Keep the branch, and the run going, when the preflight stops",
            },
            {
              name: "--no-failfast",
              description:
                "Wait for the whole run instead of stopping at the first failed job",
            },
            {
              name: "--no-watch",
              description: "Return once the run starts, keeping the branch",
            },
            projectOption,
            {
              name: "--remote",
              description: "Git remote to push the branch to",
              args: {
                name: "remote",
                default: "origin",
              },
            },
            {
              name: "--timeout",
              description: "Maximum time to watch the run",
              args: {
                name: "timeout",
                default: "30m0s",
              },
            },
          ],
        },
      ],
    },
    {
      name: "project",
      description: "List, follow and configure CircleCI projects",
      subcommands: [
        {
          name: "create",
          description: "Create a new project",
          args: {
            name: "project-name",
            description:
              "Name for the new project; defaults to the git repository name",
            isOptional: true,
          },
          options: [
            jsonOption,
            {
              name: "--org",
              description: "Organization slug (e.g. gh/myorg)",
              args: {
                name: "org",
              },
            },
          ],
        },
        {
          name: "dlc",
          description: "Purge a project's Docker layer cache (DLC)",
          subcommands: [
            {
              name: "purge",
              description: "Purge the Docker Layer Cache for a project",
              options: [forceOption, jsonOption, projectOption],
            },
          ],
        },
        {
          name: "envvar",
          description: "List, set and delete a project's environment variables",
          subcommands: [
            {
              name: ["delete", "rm"],
              description: "Delete a project environment variable",
              args: {
                name: "name",
                description: "Name of the environment variable",
              },
              options: [forceOption, projectOption],
            },
            {
              name: ["list", "ls"],
              description: "List project environment variables",
              options: [jqOption, jsonOption, projectOption],
            },
            {
              name: "set",
              description: "Set a project environment variable",
              args: [
                {
                  name: "name",
                  description: "Name of the environment variable",
                },
                {
                  name: "value",
                  description: "Value to store",
                },
              ],
              options: [projectOption],
            },
          ],
        },
        {
          name: "follow",
          description: "Follow a project",
          options: [projectOption],
        },
        {
          name: "get",
          description: "Show project details",
          options: [jsonOption, projectOption],
        },
        {
          name: "link",
          description: "Bind this checkout to a CircleCI project",
          options: [
            {
              name: ["-f", "--force"],
              description: "Overwrite an existing .circleci/info.yml",
            },
            {
              name: "--project",
              description:
                "Project slug (e.g. gh/org/repo or circleci/<orgID>/<projectID>)",
              args: {
                name: "project",
              },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List projects",
          options: [
            {
              name: "--following",
              description:
                "Only projects you follow (default when no other filter is given)",
            },
            jqOption,
            jsonOption,
            {
              name: "--name",
              description: "Only projects matching this name",
              args: {
                name: "name",
              },
            },
            {
              name: "--org-id",
              description: "Only projects in this organization UUID",
              args: {
                name: "org-id",
              },
            },
            {
              name: "--slug",
              description: "Resolve one project by slug (e.g. gh/myorg/myrepo)",
              args: {
                name: "slug",
              },
            },
          ],
        },
        {
          name: "open",
          description: "Open the project page in the browser",
          options: [projectOption],
        },
        {
          name: "setting",
          description: "View and update project advanced settings",
          subcommands: [
            {
              name: "get",
              description: "Get the current value of a project setting",
              args: {
                name: "setting",
                description: "Project setting to read",
                suggestions: [
                  "build-forked-pull-requests",
                  "forks-receive-secret-env-vars",
                  "oss",
                  "auto-cancel-builds",
                  "set-github-status",
                  "build-prs-only",
                  "disable-ssh",
                  "write-settings-requires-admin",
                  "ai-error-summarization",
                  "dynamic-config",
                  "unversioned-config",
                  "disable-running",
                ],
              },
              options: [jqOption, jsonOption, projectOption],
            },
            {
              name: ["list", "ls"],
              description: "List all advanced settings for a project",
              options: [jqOption, jsonOption, projectOption],
            },
            {
              name: "set",
              description: "Set a project setting",
              args: [
                {
                  name: "setting",
                  description: "Project setting to change",
                  suggestions: [
                    "build-forked-pull-requests",
                    "forks-receive-secret-env-vars",
                    "oss",
                    "auto-cancel-builds",
                    "set-github-status",
                    "build-prs-only",
                    "disable-ssh",
                    "write-settings-requires-admin",
                    "ai-error-summarization",
                    "dynamic-config",
                    "unversioned-config",
                    "disable-running",
                  ],
                },
                {
                  name: "value",
                  description: "New value",
                  suggestions: ["true", "false"],
                },
              ],
              options: [jqOption, jsonOption, projectOption],
            },
          ],
        },
        {
          name: "trigger",
          description: "Manage project triggers",
          subcommands: [
            {
              name: "create",
              description: "Create a new project trigger",
              options: [
                {
                  name: "--checkout-ref",
                  description:
                    "Git ref for checking out code (only needed when checkout repo differs from event source repo)",
                  args: {
                    name: "checkout-ref",
                  },
                },
                {
                  name: "--config-ref",
                  description:
                    "Git ref for fetching config (only needed when config repo differs from event source repo)",
                  args: {
                    name: "config-ref",
                  },
                },
                {
                  name: "--event-preset",
                  description:
                    "Event preset for filtering trigger events (one of: all-pushes, only-tags, default-branch-pushes, only-build-prs, only-open-prs, only-labeled-prs, only-merged-prs, only-ready-for-review-prs, only-branch-delete, only-build-pushes-to-non-draft-prs, only-merged-or-closed-prs, pr-comment-equals-run-ci, non-draft-pr-opened, pushes-to-merge-queues)",
                  args: {
                    name: "event-preset",
                    suggestions: [
                      "all-pushes",
                      "only-tags",
                      "default-branch-pushes",
                      "only-build-prs",
                      "only-open-prs",
                      "only-labeled-prs",
                      "only-merged-prs",
                      "only-ready-for-review-prs",
                      "only-branch-delete",
                      "only-build-pushes-to-non-draft-prs",
                      "only-merged-or-closed-prs",
                      "pr-comment-equals-run-ci",
                      "non-draft-pr-opened",
                      "pushes-to-merge-queues",
                    ],
                  },
                },
                jqOption,
                jsonOption,
                {
                  name: "--pipeline-definition-id",
                  description: "Pipeline definition ID (required)",
                  args: {
                    name: "pipeline-definition-id",
                  },
                },
                projectOption,
                projectIdOption,
                {
                  name: "--provider",
                  description:
                    "Event source provider (one of: github_app, github_server, github_oauth, origin, forgejo, webhook, schedule)",
                  args: {
                    name: "provider",
                    default: "github_app",
                    suggestions: [
                      "github_app",
                      "github_server",
                      "github_oauth",
                      "origin",
                      "forgejo",
                      "webhook",
                      "schedule",
                    ],
                  },
                },
                {
                  name: "--repo-full-name",
                  description:
                    "Repository owner/name (required for origin; enough on its own for forgejo)",
                  args: {
                    name: "repo-full-name",
                  },
                },
                {
                  name: "--repo-id",
                  description:
                    "Repository external ID (required for github_app, github_server, github_oauth, origin)",
                  args: {
                    name: "repo-id",
                  },
                },
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Delete a project trigger",
              args: {
                name: "trigger-id",
                description: "ID of the trigger",
              },
              options: [
                forceOption,
                {
                  name: "--project",
                  description:
                    "Project slug (e.g. gh/org/repo); only needed for a project's OAuth trigger",
                  args: {
                    name: "project",
                  },
                },
                projectIdOption,
              ],
            },
            {
              name: ["list", "ls"],
              description: "List triggers for a pipeline definition",
              options: [
                jqOption,
                jsonOption,
                {
                  name: "--pipeline-definition-id",
                  description: "Pipeline definition ID (required)",
                  args: {
                    name: "pipeline-definition-id",
                  },
                },
                projectOption,
                projectIdOption,
              ],
            },
            {
              name: "update",
              description: "Update a project trigger",
              args: {
                name: "trigger-id",
                description: "ID of the trigger",
              },
              options: [
                {
                  name: "--checkout-ref",
                  description:
                    "Git ref for checking out code (only when the checkout repo differs from the event source repo)",
                  args: {
                    name: "checkout-ref",
                  },
                },
                {
                  name: "--config-ref",
                  description:
                    "Git ref for fetching config (only when the config repo differs from the event source repo)",
                  args: {
                    name: "config-ref",
                  },
                },
                {
                  name: "--disable",
                  description: "Pause the trigger without deleting it",
                },
                {
                  name: "--enable",
                  description:
                    "Resume the trigger so matching events start pipelines",
                },
                {
                  name: "--event-preset",
                  description:
                    "Event preset for filtering trigger events (one of: all-pushes, only-tags, default-branch-pushes, only-build-prs, only-open-prs, only-labeled-prs, only-merged-prs, only-ready-for-review-prs, only-branch-delete, only-build-pushes-to-non-draft-prs, only-merged-or-closed-prs, pr-comment-equals-run-ci, non-draft-pr-opened, pushes-to-merge-queues)",
                  args: {
                    name: "event-preset",
                    suggestions: [
                      "all-pushes",
                      "only-tags",
                      "default-branch-pushes",
                      "only-build-prs",
                      "only-open-prs",
                      "only-labeled-prs",
                      "only-merged-prs",
                      "only-ready-for-review-prs",
                      "only-branch-delete",
                      "only-build-pushes-to-non-draft-prs",
                      "only-merged-or-closed-prs",
                      "pr-comment-equals-run-ci",
                      "non-draft-pr-opened",
                      "pushes-to-merge-queues",
                    ],
                  },
                },
                jqOption,
                jsonOption,
                {
                  name: "--project",
                  description:
                    "Project slug (e.g. gh/org/repo); only needed for a project's OAuth trigger",
                  args: {
                    name: "project",
                  },
                },
                projectIdOption,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "run",
      description:
        "Trigger, watch, approve and cancel runs, and list artifacts",
      subcommands: [
        {
          name: "approve",
          description: "Approve an approval job that is on hold",
          args: {
            name: "run-number-or-id",
            description: "Run UUID or run number",
          },
          options: [
            forceOption,
            {
              name: "--job",
              description: "Name or UUID of the approval job to approve",
              args: {
                name: "job",
              },
            },
            jqOption,
            jsonOption,
            {
              name: "--project",
              description:
                "Project slug (e.g. gh/org/repo); used when approving by number",
              args: {
                name: "project",
              },
            },
          ],
        },
        {
          name: "artifacts",
          description: "List and download the artifacts of every job in a run",
          args: {
            name: "run-id",
            description: "Run UUID or run number; defaults to the latest run",
            isOptional: true,
          },
          options: [
            {
              name: ["-b", "--branch"],
              description:
                "Branch name (defaults to the current branch, or main when --project is set)",
              args: {
                name: "branch",
              },
            },
            jqOption,
            jsonOption,
            artifactsOutputOption,
            projectOption,
            {
              name: "--status",
              description:
                "Filter by run status, e.g. success or failed; picks the latest such run",
              args: {
                name: "status",
                suggestions: [
                  "canceled",
                  "error",
                  "failed",
                  "failing",
                  "not_run",
                  "on_hold",
                  "queued",
                  "running",
                  "success",
                  "unauthorized",
                ],
              },
            },
          ],
        },
        {
          name: "cancel",
          description: "Cancel a run",
          args: {
            name: "run-number-or-id",
            description: "Run UUID or run number",
          },
          options: [
            forceOption,
            {
              name: "--project",
              description:
                "Project slug (e.g. gh/org/repo); used when cancelling by number",
              args: {
                name: "project",
              },
            },
          ],
        },
        {
          name: "get",
          description: "Get a run's status",
          args: {
            name: "run-id",
            description: "Run UUID or run number; defaults to the latest run",
            isOptional: true,
          },
          options: [
            {
              name: ["-b", "--branch"],
              description:
                "Branch name (defaults to the current branch, or main when --project is set)",
              args: {
                name: "branch",
              },
            },
            {
              name: "--failure-report",
              description:
                "Print condensed output for every failed step; intended for agent consumption",
            },
            jqOption,
            jsonOption,
            {
              name: ["-m", "--mine"],
              description: "Filter to runs owned by you",
            },
            {
              name: "--no-interactive",
              description:
                "Skip the interactive picker and resolve the latest run directly",
            },
            {
              name: "--project",
              description:
                "Project slug (e.g. gh/org/repo); used for latest-run lookup",
              args: {
                name: "project",
              },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List recent runs for a project",
          options: [
            {
              name: ["-b", "--branch"],
              description: "Filter by branch",
              args: {
                name: "branch",
              },
            },
            {
              name: ["-B", "--current-branch"],
              description: "Filter by the currently checked-out branch",
            },
            jqOption,
            jsonOption,
            {
              name: "--limit",
              description: "Maximum number of runs to show [default: 10]",
              args: {
                name: "limit",
                default: "10",
              },
            },
            projectOption,
            {
              name: "--status",
              description: "Filter by run status, e.g. success or failed",
              args: {
                name: "status",
                suggestions: [
                  "canceled",
                  "error",
                  "failed",
                  "failing",
                  "not_run",
                  "on_hold",
                  "queued",
                  "running",
                  "success",
                  "unauthorized",
                ],
              },
            },
          ],
        },
        {
          name: "open",
          description: "Open the current project's runs page in the browser",
          options: [
            {
              name: ["-b", "--branch"],
              description: "Branch name (defaults to current branch)",
              args: {
                name: "branch",
              },
            },
            {
              name: "--project",
              description:
                "Project slug (e.g. gh/org/repo); used for latest-run lookup",
              args: {
                name: "project",
              },
            },
          ],
        },
        {
          name: "trigger",
          description: "Trigger a new run of a pipeline",
          options: [
            {
              name: ["-b", "--branch"],
              description:
                "Branch to run (defaults to the checkout's current branch)",
              args: {
                name: "branch",
              },
            },
            {
              name: "--definition",
              description:
                "Pipeline definition name; needed when the project has several",
              args: {
                name: "definition",
              },
            },
            {
              name: "--definition-id",
              description: "Pipeline definition UUID, instead of --definition",
              args: {
                name: "definition-id",
              },
            },
            jqOption,
            jsonOption,
            {
              name: "--param",
              description: "Pipeline parameter as key=value (repeatable)",
              isRepeatable: true,
              args: {
                name: "key=value",
              },
            },
            projectOption,
            {
              name: ["-t", "--tag"],
              description: "Tag to run, instead of --branch",
              args: {
                name: "tag",
              },
            },
          ],
        },
        {
          name: "watch",
          description: "Watch a run until it completes",
          args: {
            name: "run-id",
            description: "Run UUID or run number; defaults to the latest run",
            isOptional: true,
          },
          options: [
            {
              name: ["-b", "--branch"],
              description: "Branch to watch (defaults to current branch)",
              args: {
                name: "branch",
              },
            },
            {
              name: "--failfast",
              description:
                "Exit as soon as any job fails, without waiting for the rest of the run",
            },
            projectOption,
            {
              name: "--sha",
              description:
                "Watch run for this commit SHA; polls up to 2m if not yet created",
              args: {
                name: "sha",
              },
            },
            {
              name: "--timeout",
              description: "Maximum time to wait for run completion",
              args: {
                name: "timeout",
                default: "30m0s",
              },
            },
          ],
        },
      ],
    },
    {
      name: "runner",
      description: "Manage self-hosted runners",
      subcommands: [
        {
          name: "config",
          description: "Generate configuration for a self-hosted runner",
          args: {
            name: "resource-class",
            description: "Runner resource class as namespace/name, or its ID",
          },
          options: [
            {
              name: "--name",
              description: "Runner name, machine only (default: hostname)",
              args: {
                name: "name",
              },
            },
            {
              name: "--nickname",
              description: "Nickname for the new token",
              args: {
                name: "nickname",
              },
            },
            {
              name: ["-o", "--output"],
              description: "Write config to this file instead of stdout",
              args: {
                name: "output",
                template: "filepaths",
              },
            },
            {
              name: "--product",
              description:
                "Runner product: machine|container|machineOrchestrator (default machine, prompts when unset)",
              args: {
                name: "product",
                suggestions: ["machine", "container", "machineOrchestrator"],
              },
            },
            {
              name: "--token",
              description:
                "Use an existing token value instead of creating a new one",
              args: {
                name: "token",
              },
            },
            {
              name: "--working-directory",
              description: "Job working directory, machine only",
              args: {
                name: "working-directory",
              },
            },
          ],
        },
        {
          name: "fleet",
          description: "View runner fleets",
          subcommands: [
            {
              name: "get",
              description: "Show a runner fleet",
              args: {
                name: "resource-class",
                description:
                  "Runner resource class as namespace/name, or its ID",
              },
              options: [jqOption, jsonOption],
            },
            {
              name: ["list", "ls"],
              description: "List runner fleets",
              options: [
                jqOption,
                jsonOption,
                namespaceOption,
                orgOption,
                resourceClassOption,
              ],
            },
          ],
        },
        {
          name: "instance",
          description: "Manage runner instances",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List connected runner instances",
              args: {
                name: "namespace-or-resource-class",
                description:
                  "Namespace or resource class to list instances for",
                isOptional: true,
              },
              options: [
                jqOption,
                jsonOption,
                namespaceOption,
                orgOption,
                resourceClassOption,
              ],
            },
          ],
        },
        {
          name: "open",
          description: "Open the runners inventory page in the browser",
          options: [orgSlugOption],
        },
        {
          name: "resource-class",
          description: "Manage runner resource classes",
          subcommands: [
            {
              name: "create",
              description: "Create a runner resource class",
              args: {
                name: "namespace/name",
                description:
                  "Resource class name, where namespace is your organization name",
              },
              options: [
                {
                  name: "--description",
                  description:
                    "Human-readable description of the resource class",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--generate-token",
                  description:
                    'Also create a token for the resource class, nicknamed "default"',
                },
                jqOption,
                jsonOption,
                orgOption,
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Delete a runner resource class",
              args: {
                name: "resource-class",
                description:
                  "Runner resource class as namespace/name, or its ID",
              },
              options: [
                {
                  name: ["-f", "--force"],
                  description:
                    "Also delete its tokens (runners using them can no longer claim jobs); skip the prompt",
                },
                jqOption,
                jsonOption,
              ],
            },
            {
              name: ["list", "ls"],
              description: "List runner resource classes",
              args: {
                name: "namespace",
                description: "Namespace to list resource classes for",
                isOptional: true,
              },
              options: [
                jqOption,
                jsonOption,
                namespaceOption,
                orgOption,
                resourceClassOption,
              ],
            },
            {
              name: "update",
              description: "Update a runner resource class",
              args: {
                name: "resource-class",
                description:
                  "Runner resource class as namespace/name, or its ID",
              },
              options: [
                {
                  name: "--description",
                  description:
                    'New description for the resource class (use "" to clear)',
                  args: {
                    name: "description",
                  },
                },
                jqOption,
                jsonOption,
              ],
            },
          ],
        },
        {
          name: "terms",
          description: "Accept the self-hosted runner terms",
          subcommands: [
            {
              name: "accept",
              description:
                "Accept the self-hosted runner terms for an organization",
              options: [forceOption, jqOption, jsonOption, orgOption],
            },
          ],
        },
        {
          name: "token",
          description: "Manage runner tokens",
          subcommands: [
            {
              name: "create",
              description: "Create a token for a resource class",
              args: {
                name: "resource-class",
                description:
                  "Runner resource class as namespace/name, or its ID",
              },
              options: [
                jqOption,
                jsonOption,
                {
                  name: "--nickname",
                  description: "Human-readable nickname for the token",
                  args: {
                    name: "nickname",
                  },
                },
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Delete a runner token",
              args: {
                name: "token-id",
                description: "ID of the token (a UUID)",
              },
              options: [forceOption, jqOption, jsonOption],
            },
            {
              name: ["list", "ls"],
              description: "List tokens for a resource class",
              args: {
                name: "resource-class",
                description:
                  "Runner resource class as namespace/name, or its ID",
                isOptional: true,
              },
              options: [jqOption, jsonOption, orgOption, resourceClassOption],
            },
          ],
        },
      ],
    },
    {
      name: "setting",
      description: "Configure the CLI itself (token, host, defaults)",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List current CLI settings",
          options: [jqOption, jsonOption],
        },
        {
          name: "set",
          description: "Set a CLI setting",
          args: [
            {
              name: "key",
              description: "Setting to change",
              suggestions: [
                "token",
                "host",
                "telemetry",
                "theme",
                "update-check",
              ],
            },
            {
              name: "value",
              description: "Value to store; pass - to read it from stdin",
              isOptional: true,
            },
          ],
        },
        {
          name: "unset",
          description: "Remove a stored CLI setting",
          args: {
            name: "key",
            description: "Setting to remove",
            suggestions: ["token", "update-check"],
          },
        },
      ],
    },
    {
      name: "setup",
      description:
        "Configure the CLI with a host and token (legacy compatibility)",
      hidden: true,
      options: [
        {
          name: "--host",
          description: "CircleCI host, e.g. https://circleci.com (required)",
          args: {
            name: "host",
          },
        },
        {
          name: "--no-prompt",
          description: "Run without interactive prompts (required)",
        },
        {
          name: "--token",
          description: "CircleCI API token (required)",
          args: {
            name: "token",
          },
        },
      ],
    },
    {
      name: "signing-config",
      description: "Manage iOS signing configs",
      subcommands: [
        {
          name: "create",
          description: "Create an iOS signing config",
          options: [
            {
              name: "--cert-id",
              description:
                "ID of an uploaded certificate (see: circleci certificate list)",
              args: {
                name: "cert-id",
              },
            },
            jqOption,
            jsonOption,
            {
              name: "--name",
              description:
                "Name for the signing config (referenced in pipeline config)",
              args: {
                name: "name",
              },
            },
            orgOption,
            {
              name: "--profile",
              description: "Path to a provisioning profile file (repeatable)",
              isRepeatable: true,
              args: {
                name: "path",
                template: "filepaths",
              },
            },
          ],
        },
        {
          name: ["delete", "rm"],
          description: "Delete an iOS signing config",
          args: {
            name: "signing-config-id",
            description: "ID of the signing config",
          },
          options: [forceOption],
        },
        {
          name: ["list", "ls"],
          description: "List iOS signing configs",
          options: [jqOption, jsonOption, orgOption],
        },
        {
          name: "profile",
          description:
            "Add or remove provisioning profiles on a signing config",
          subcommands: [
            {
              name: "add",
              description:
                "Add or replace a provisioning profile on a signing config",
              args: {
                name: "signing-config-id",
                description: "ID of the signing config",
              },
              options: [
                {
                  name: "--profile",
                  description: "Path to a provisioning profile file",
                  args: {
                    name: "profile",
                    template: "filepaths",
                  },
                },
              ],
            },
            {
              name: ["remove", "rm"],
              description:
                "Remove a provisioning profile from a signing config",
              args: [
                {
                  name: "signing-config-id",
                  description: "ID of the signing config",
                },
                {
                  name: "profile-id",
                  description: "ID of the provisioning profile",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "step",
      description: "Control job step execution",
      hidden: true,
      subcommands: [
        {
          name: "halt",
          description: "Halt the current job and mark it as successful",
        },
      ],
    },
    {
      name: "testresult",
      description: "Inspect test results and flaky tests",
      subcommands: [
        {
          name: "flaky",
          description: "List flaky tests detected across a project's runs",
          options: [
            jqOption,
            jsonOption,
            {
              name: "--limit",
              description: "Maximum number of tests to show (0 = no limit)",
              args: {
                name: "limit",
              },
            },
            projectOption,
            {
              name: "--sort",
              description:
                "Sort by times_flaked or last_flaked (descending), or name",
              args: {
                name: "sort",
                default: "times_flaked",
                suggestions: ["times_flaked", "last_flaked", "name"],
              },
            },
          ],
        },
        {
          name: "get",
          description: "Get a single test result by name",
          args: [
            {
              name: "job-id",
              description: "UUID of the job",
            },
            {
              name: "name",
              description: "Exact test name to look up",
            },
          ],
          options: [
            {
              name: "--filter",
              description:
                "Disambiguate by classname=<value> when a name is shared; repeatable",
              isRepeatable: true,
              args: {
                name: "classname=value",
              },
            },
            jqOption,
            jsonOption,
            {
              name: "--plain",
              description:
                "Print only the raw test message, verbatim and unformatted",
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List test results for a job",
          args: {
            name: "job-id",
            description: "UUID of the job",
          },
          options: [
            {
              name: "--all",
              description:
                "Show all results (passing, failed and skipped), not just failures",
            },
            {
              name: "--filter",
              description:
                "Filter by key=value; repeatable. Keys: result (success|failure|skipped, exact), name and classname (case-insensitive substring). Same key repeated is OR, different keys AND. Cannot combine result= with --all",
              isRepeatable: true,
              args: {
                name: "key=value",
              },
            },
            jqOption,
            jsonOption,
            {
              name: "--limit",
              description: "Maximum number of results to show (0 = no limit)",
              args: {
                name: "limit",
              },
            },
            {
              name: "--sort",
              description: "Sort by name, classname, result or run_time",
              args: {
                name: "sort",
                suggestions: ["name", "classname", "result", "run_time"],
              },
            },
          ],
        },
      ],
    },
    {
      name: "version",
      description: "Print version information",
      options: [
        {
          name: "--json",
          description:
            "Output as JSON (fields: version, commit, modified, latest, outdated, upgrade_command)",
        },
      ],
    },
    {
      name: "workflow",
      description: "Inspect, rerun and cancel workflows (job graphs)",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a running workflow",
          args: {
            name: "workflow-id",
            description: "UUID of the workflow",
          },
          options: [forceOption],
        },
        {
          name: "get",
          description: "Get workflow details",
          args: {
            name: "workflow-id",
            description: "UUID of the workflow",
          },
          options: [jqOption, jsonOption],
        },
        {
          name: ["list", "ls"],
          description: "List workflows for a run or recent runs",
          args: {
            name: "run-id",
            description: "Run UUID or run number; defaults to the latest run",
            isOptional: true,
          },
          options: [
            {
              name: ["-b", "--branch"],
              description: "Filter by branch (recent-runs mode)",
              args: {
                name: "branch",
              },
            },
            jqOption,
            jsonOption,
            {
              name: "--limit",
              description: "Number of recent runs to show (recent-runs mode)",
              args: {
                name: "limit",
                default: "10",
              },
            },
            projectOption,
          ],
        },
        {
          name: "open",
          description: "Open workflow in browser",
          args: {
            name: "workflow-id",
            description: "UUID of the workflow",
          },
        },
        {
          name: "rerun",
          description: "Rerun a workflow",
          args: {
            name: "workflow-id",
            description: "UUID of the workflow",
          },
          options: [
            {
              name: "--from-failed",
              description: "Rerun only failed jobs",
            },
            {
              name: "--job",
              description: "Rerun only this job, by name or ID (repeatable)",
              isRepeatable: true,
              args: {
                name: "job",
              },
            },
            jsonOption,
            {
              name: "--no-wait",
              description:
                "With --ssh, return without waiting for the ssh command",
              dependsOn: ["--ssh"],
            },
            {
              name: "--ssh",
              description:
                "Enable SSH access to the rerun jobs (requires --job)",
              dependsOn: ["--job"],
            },
            {
              name: "--timeout",
              description: "With --ssh, how long to wait for the ssh command",
              args: {
                name: "timeout",
                default: "10m0s",
              },
            },
          ],
        },
      ],
    },
  ],
  options: [
    {
      name: ["-c", "--config"],
      description:
        "Path to config file (default: ~/.config/circleci/config.yml)",
      isPersistent: true,
      args: {
        name: "config",
        template: "filepaths",
      },
    },
    {
      name: "--debug",
      description: "Enable debug logging",
      isPersistent: true,
    },
    {
      name: ["-h", "--help"],
      description: "Show help for circleci",
      isPersistent: true,
    },
    {
      name: "--insecure-storage",
      description: "Do not use the system's secure storage for storing tokens",
      hidden: true,
      isPersistent: true,
    },
    {
      name: "--no-color",
      description: "Disable ANSI color output (same as setting NO_COLOR)",
      isPersistent: true,
    },
    {
      name: ["-q", "--quiet"],
      description:
        "Suppress informational output. Data on stdout is unaffected",
      isPersistent: true,
    },
    {
      name: "--skip-update-check",
      description: "Skip checking for CLI and extension updates",
      hidden: true,
      isPersistent: true,
    },
    {
      name: "--theme",
      description: "Set the color theme (default: auto)",
      hidden: true,
      isPersistent: true,
      args: {
        name: "theme",
        default: "auto",
      },
    },
    {
      name: ["-v", "--version"],
      description: "Show version for circleci",
    },
  ],
};

export default completionSpec;
