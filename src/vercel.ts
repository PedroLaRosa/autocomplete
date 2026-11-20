// Vercel CLI v66.5.0 (npm "latest", published 2026-11-19, checked 2026-11-20).
// Source: command structs (`commandsStructs`, `globalCommandOptions`) read
// statically (parsed, never executed) from the @vercel/cli-support@66.5.0
// bundle, the JS build of the CLI, and diffed against 66.2.0. Hidden
// experimental commands (`board`) are only stubbed.

// `--json` output shapes ({envs:[{key}]}, {domains:[{name}]}, {teams:[{slug}]})
// read from the CLI source; anything else yields no suggestions.
const jsonList = (
  script: string[],
  key: string,
  field: string
): Fig.Generator => ({
  script,
  postProcess: (out) => {
    try {
      const data = JSON.parse(out);
      return (Array.isArray(data) ? data : data[key]).map((item) => ({
        name: item[field],
      }));
    } catch {
      return [];
    }
  },
});

const envVarList = jsonList(["vercel", "env", "ls", "--json"], "envs", "key");
const domainList = jsonList(
  ["vercel", "domains", "ls", "--json"],
  "domains",
  "name"
);
const teamList = jsonList(["vercel", "teams", "ls", "--json"], "teams", "slug");

const managedRulesets = [
  "owasp",
  "crs",
  "bot-protection",
  "ai-bots",
  "traffic-sources",
  "vercel-ruleset",
];

const budgetTypes = ["team", "organization", "project", "product"];

const ciLogLevels = [
  "trace",
  "debug",
  "command",
  "info",
  "warn",
  "error",
  "systemError",
  "fatal",
];

const kmsAlgorithms = [
  "RS256",
  "RS384",
  "RS512",
  "PS256",
  "PS384",
  "PS512",
  "ES256",
  "ES384",
  "ES512",
  "EdDSA",
];

const jsonOption: Fig.Option = {
  name: "--json",
  description: "Output as JSON",
};

const formatOption: Fig.Option = {
  name: ["-F", "--format"],
  description: "Specify the output format (json)",
  args: {
    name: "format",
    suggestions: ["json"],
  },
  deprecated: true,
};

const projectOption: Fig.Option = {
  name: ["-p", "--project"],
  description: "Project name or ID (default: linked project)",
  args: {
    name: "name-or-id",
  },
};

const yesOption: Fig.Option = {
  name: ["-y", "--yes"],
  description: "Accept default value for all prompts",
};

const nextOption: Fig.Option = {
  name: "--next",
  description: "Show the next page using the cursor from the previous output",
  args: {
    name: "cursor",
  },
};

const limitOption: Fig.Option = {
  name: ["-n", "--limit"],
  description: "Number of results to return per page (default: 20, max: 100)",
  args: {
    name: "number",
  },
};

const yesOption2: Fig.Option = {
  name: ["-y", "--yes"],
  description: "Deprecated: use --confirm-name",
};

const untilOption: Fig.Option = {
  name: ["-u", "--until"],
  description: "End time: ISO 8601 or relative (default: now)",
  args: {
    name: "time",
  },
};

const teamLevelOption: Fig.Option = {
  name: "--team-level",
  description:
    "Operate on the team-level firewall configuration, which applies to every project in the team",
};

const messageOption: Fig.Option = {
  name: "--message",
  description: "Optional revision message for the update",
  args: {
    name: "text",
  },
};

const localOption: Fig.Option = {
  name: "--local",
  description: "Use the local Schedules session started by vercel dev",
};

const namespaceOption: Fig.Option = {
  name: "--namespace",
  description: "Use a schedule namespace (default: default)",
  args: {
    name: "namespace",
  },
};

const environmentOption: Fig.Option = {
  name: ["-e", "--environment"],
  description:
    "Use the schedules of production or a custom environment by name or ID (default: production)",
  args: {
    name: "environment",
    suggestions: ["production", "preview", "development"],
  },
};

const gitBranchOption: Fig.Option = {
  name: "--git-branch",
  description:
    "Use the schedules of a Git branch's deployments in the linked repository",
  args: {
    name: "branch",
  },
};

const userOption: Fig.Option = {
  name: "--user",
  description: "Use the schedules of CLI deployments by a user ID",
  args: {
    name: "user",
  },
};

const confirmOption: Fig.Option = {
  name: ["-c", "--confirm"],
  deprecated: true,
};

const dryRunOption: Fig.Option = {
  name: "--dry-run",
  description: "Show what would change without writing any files",
};

const setupDryRunOption: Fig.Option = {
  name: "--dry-run",
  description: "Preview configuration changes without applying them",
};

const projectOption2: Fig.Option = {
  name: ["-p", "--project"],
  description: "Project ID or name (default: linked project)",
  args: {
    name: "name-or-id",
  },
};

const accessOption: Fig.Option = {
  name: "--access",
  description: "Access level for the blob: public or private (required)",
  args: {
    name: "string",
    suggestions: ["public", "private"],
  },
};

const environmentOption2: Fig.Option = {
  name: ["-e", "--environment"],
  description:
    "Production or a custom environment slug or ID (default: production)",
  args: {
    name: "environment",
    suggestions: ["production", "preview", "development"],
  },
};

const targetOption: Fig.Option = {
  name: "--target",
  description: "Deprecated alias for `--environment`",
  args: {
    name: "environment",
    suggestions: ["production", "preview", "development"],
  },
  deprecated: true,
};

const sinceOption: Fig.Option = {
  name: ["-s", "--since"],
  description: "Start time: ISO 8601 or relative, like 1h or 7d",
  args: {
    name: "time",
  },
};

const untilOption2: Fig.Option = {
  name: ["-u", "--until"],
  description:
    "End time: ISO 8601 or relative; requires --since (default: now)",
  args: {
    name: "time",
  },
};

const budgetOption: Fig.Option = {
  name: "--budget",
  description: "Deprecated alias for `--amount`",
  args: {
    name: "amount",
  },
  deprecated: true,
};

const allOption: Fig.Option = {
  name: ["-a", "--all"],
  description: "Configure every supported coding agent",
};

const keyOption: Fig.Option = {
  name: "--key",
  description: "Use an existing AI Gateway API key instead of creating one",
  args: {
    name: "key",
  },
};

const reconfigureOption: Fig.Option = {
  name: "--reconfigure",
  description:
    "Re-run even if already configured, to rotate the key or switch team",
};

const noSessionMigrationOption: Fig.Option = {
  name: "--no-session-migration",
  description:
    "Do not copy existing Codex Desktop sessions for use with the Vercel AI Gateway provider",
};

const ttlDaysOption: Fig.Option = {
  name: "--ttl-days",
  description:
    "Delete the blob automatically this many days after upload (1-730)",
  args: {
    name: "number",
  },
};

const yesOption3: Fig.Option = {
  name: ["-y", "--yes"],
  description: "Skip the confirmation prompt",
};

const yesOption4: Fig.Option = {
  name: ["-y", "--yes"],
  description:
    "Skip confirmation when linking is required (e.g. in non-interactive mode)",
};

const sinceOption2: Fig.Option = {
  name: ["-s", "--since"],
  description:
    "Start time: ISO 8601 or relative, like 1h or 7d (default: 1h ago)",
  args: {
    name: "time",
  },
};

const dplOption: Fig.Option = {
  name: "--dpl",
  args: {
    name: "dpl",
  },
  deprecated: true,
};

const archiveOption: Fig.Option = {
  name: "--archive",
  description:
    "Compress the deployment code into an archive before uploading it",
  args: {
    name: "format",
  },
};

const environmentOption3: Fig.Option = {
  name: ["-e", "--environment"],
  description:
    "Environment to query Agent Runs from: production or preview (default: production)",
  args: {
    name: "environment",
    suggestions: ["production", "preview"],
  },
};

const jsonOption2: Fig.Option = {
  name: "--json",
  description: "Print the raw API response as JSON to stdout",
};

const agentOption: Fig.Option = {
  name: "--agent",
  description:
    "Coding agent to configure, repeatable; omit to pick from the detected agents",
  args: {
    name: "name",
  },
  isRepeatable: true,
};

const amountOption: Fig.Option = {
  name: "--amount",
  description: "Quota budget in dollars for a newly created key (minimum 1)",
  args: {
    name: "usd",
  },
};

const refreshPeriodOption: Fig.Option = {
  name: "--refresh-period",
  description:
    "Quota refresh cadence for a new key: daily, weekly, monthly, or none",
  args: {
    name: "period",
    suggestions: ["daily", "weekly", "monthly", "none"],
  },
};

const includeByokOption: Fig.Option = {
  name: "--include-byok",
  description: "Include BYOK usage in the new key quota",
};

const expirationOption: Fig.Option = {
  name: "--expiration",
  description:
    "Expiry for a new key: 7d, 30d, 60d, 90d, 1y, or none (default: none)",
  args: {
    name: "period",
    suggestions: ["7d", "30d", "60d", "90d", "1y", "none"],
  },
};

const nameOption: Fig.Option = {
  name: "--name",
  description: "Name for a newly created API key",
  args: {
    name: "name",
  },
};

const noBackupOption: Fig.Option = {
  name: "--no-backup",
  description: "Do not write .bak backups of changed files",
};

const noKeychainOption: Fig.Option = {
  name: "--no-keychain",
  description:
    "Always write the key into config files instead of the macOS Keychain",
};

const agentConfigOption: Fig.Option = {
  name: "--agent-config",
  description:
    "Override an agent's config file path, e.g. claude-code=/path/settings.json (repeatable)",
  args: {
    name: "agent=path",
  },
  isRepeatable: true,
};

const shellRcOption: Fig.Option = {
  name: "--shell-rc",
  description: "Shell rc file to write the env exports into",
  args: {
    name: "path",
    template: "filepaths",
  },
};

const applyOption: Fig.Option = {
  name: "--apply",
  description:
    "How to apply non-interactively: edit (write files) or prompt (emit an agent prompt on stdout; requires the macOS Keychain) (default: edit)",
  args: {
    name: "mode",
  },
};

const baseUrlOption: Fig.Option = {
  name: "--base-url",
  description:
    "Override the AI Gateway base URL written into agent configs (advanced; e.g. a preview deployment)",
  args: {
    name: "url",
  },
};

const formatOption2: Fig.Option = {
  name: "--format",
  description:
    "Output format: table, json, or csv (default: table in a terminal, json otherwise)",
  args: {
    name: "format",
    suggestions: ["table", "json", "csv"],
  },
};

const outputOption: Fig.Option = {
  name: ["-o", "--output"],
  description:
    "Write the payload to a file instead of stdout (default: json; use --format csv for CSV)",
  args: {
    name: "path",
    template: "filepaths",
  },
};

const outOption: Fig.Option = {
  name: "--out",
  description: "Deprecated alias for `--output`",
  args: {
    name: "file",
    template: "filepaths",
  },
  deprecated: true,
};

const sinceOption3: Fig.Option = {
  name: ["-s", "--since"],
  description:
    "Start time: ISO 8601 or relative, like 1h or 7d (default: 24h ago)",
  args: {
    name: "time",
  },
};

const idOption: Fig.Option = {
  name: "--id",
  args: {
    name: "id",
  },
  deprecated: true,
};

const jsonOption3: Fig.Option = {
  name: "--json",
  description: "Output results and errors as JSON",
};

const prefixOption: Fig.Option = {
  name: "--prefix",
  description:
    "Prefix for environment variable names (e.g., --prefix NEON2 creates NEON2_DATABASE_URL instead of DATABASE_URL)",
  args: {
    name: "prefix",
  },
};

const installationIdOption: Fig.Option = {
  name: "--installation-id",
  description: "Deprecated alias for `--installation`",
  args: {
    name: "id",
  },
  deprecated: true,
};

const jsonOption4: Fig.Option = {
  name: "--json",
  description: "Output JSON Lines ending with a summary line",
};

const projectOption3: Fig.Option = {
  name: ["-p", "--project"],
  description: "Use a project by name or ID",
  args: {
    name: "name-or-id",
  },
};

const cursorOption: Fig.Option = {
  name: ["-c", "--cursor"],
  description: "Cursor from a previous page to continue listing from",
  args: {
    name: "string",
  },
  deprecated: true,
};

const completionSpec: Fig.Spec = {
  name: "vercel",
  description: "The command-line interface for Vercel",
  args: {
    name: "project-path",
    isOptional: true,
    template: "folders",
  },
  options: [
    {
      name: ["-h", "--help"],
      description: "Output usage information",
      isPersistent: true,
    },
    {
      name: ["-v", "--version"],
      description: "Output the version number",
      isPersistent: true,
    },
    {
      name: "--cwd",
      description: "Run the command in another directory",
      args: {
        name: "dir",
        template: "folders",
      },
      isPersistent: true,
    },
    {
      name: ["-A", "--local-config"],
      description: "Path to the local `vercel.json` file",
      args: {
        name: "file",
        template: "filepaths",
      },
      isPersistent: true,
    },
    {
      name: ["-Q", "--global-config"],
      description: "Path to the global `.vercel` directory",
      args: {
        name: "dir",
        template: "folders",
      },
      isPersistent: true,
    },
    {
      name: ["-d", "--debug"],
      description: "Debug mode (default: off)",
      isPersistent: true,
    },
    {
      name: "--no-color",
      description: "No color mode (default: off)",
      isPersistent: true,
    },
    {
      name: "--non-interactive",
      description:
        "Run without interactive prompts (default: on when an agent is detected)",
      isPersistent: true,
    },
    {
      name: ["-S", "--scope"],
      description: "Team to run the command in (slug or ID)",
      args: {
        name: "team",
        generators: teamList,
      },
      isPersistent: true,
    },
    {
      name: ["-t", "--token"],
      description: "Login token",
      args: {
        name: "token",
      },
      isPersistent: true,
    },
    {
      name: ["-T", "--team"],
      args: {
        name: "team",
      },
      hidden: true,
      isPersistent: true,
    },
    {
      name: "--api",
      args: {
        name: "api",
      },
      hidden: true,
      isPersistent: true,
    },
    {
      name: "--changelog",
      description: "Show the 5 latest Vercel product updates",
    },
    {
      name: "--force",
      description: "Force a new deployment even if nothing has changed",
    },
    {
      name: "--with-cache",
      description: 'Retain build cache when using "--force"',
    },
    {
      name: "--env",
      description:
        "Specify environment variables during run-time (e.g. `--env KEY1=value1 --env KEY2=value2`)",
      args: {
        name: "key=value",
      },
      isRepeatable: true,
    },
    {
      name: "--build-env",
      description:
        "Specify environment variables during build-time (e.g. `--build-env KEY1=value1 --build-env KEY2=value2`)",
      args: {
        name: "key=value",
      },
      isRepeatable: true,
    },
    {
      name: "--turbo",
      description: "Use a Turbo build machine for this deployment",
    },
    {
      name: "--meta",
      description:
        "Specify metadata for the deployment (e.g. `--meta KEY1=value1 --meta KEY2=value2`)",
      args: {
        name: "key=value",
      },
      isRepeatable: true,
    },
    {
      name: "--regions",
      description: "Set default regions to enable the deployment on",
      args: {
        name: "region",
      },
    },
    {
      name: "--prebuilt",
      description: "Use in combination with `vc build`",
    },
    {
      name: "--prod",
      description:
        "Create a production deployment (shorthand for `--environment production`)",
    },
    {
      name: "--temporary",
      description: "Create a temporary deployment without logging in",
    },
    {
      name: "--delete-project-after",
      description:
        "Create a temporary project that is deleted automatically after 1h, 1d, 1w, 2w, or 30d",
      args: {
        name: "duration",
      },
    },
    archiveOption,
    {
      name: "--no-wait",
      description: "Don't wait for the deployment to finish",
    },
    {
      name: "--verify",
      description:
        "Load the deployment URL once it is ready and report the status code, size, and page title, even with Deployment Protection on (creates the project's Protection Bypass for Automation secret if missing)",
    },
    {
      name: "--dry",
      description:
        "Inspect the detected framework preset and source files without uploading or creating a deployment",
    },
    {
      name: "--create-if-missing",
      description: "Create the --project if it doesn't exist yet",
    },
    {
      name: "--skip-domain",
      description:
        "Disable the automatic promotion (aliasing) of the relevant domains to a new production deployment",
    },
    {
      name: ["-y", "--yes"],
      description: "Use default options to skip all prompts",
    },
    {
      name: "--logs",
      description: "Print the build logs",
    },
    {
      name: "--guidance",
      description: "Receive command suggestions once deployment is complete",
    },
    {
      name: "--no-logs",
      description: "Do not print the build logs",
      deprecated: true,
    },
    {
      name: ["-n", "--name"],
      args: {
        name: "name",
      },
      deprecated: true,
    },
    {
      name: "--no-clipboard",
      deprecated: true,
    },
    {
      name: "--environment",
      description:
        "Environment to deploy to: production, preview, or a custom environment",
      args: {
        name: "environment",
        suggestions: ["production", "preview"],
      },
    },
    targetOption,
    formatOption,
    jsonOption,
    confirmOption,
    {
      name: ["-p", "--project"],
      description:
        "Project name or ID to deploy to, without linking this directory (default: linked project)",
      args: {
        name: "name-or-id",
      },
    },
  ],
  subcommands: [
    {
      name: "agent",
      description: "Generate Vercel deployment guidance in AGENTS.md",
      args: {
        name: "init",
        isOptional: true,
      },
      options: [
        {
          name: ["-y", "--yes"],
          description: "Skip confirmation prompt",
        },
      ],
    },
    {
      name: "agent-runs",
      description: "Inspect Agent Runs observability data",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List Agent Runs for a project",
          options: [
            {
              name: ["-p", "--project"],
              description:
                "Project name or id to query (overrides the linked project)",
              args: {
                name: "name|id",
              },
            },
            environmentOption3,
            sinceOption,
            untilOption2,
            {
              name: ["-q", "--query"],
              description: "Search Agent Runs by title",
              args: {
                name: "text",
              },
            },
            {
              name: "--search",
              description: "Deprecated alias for `--query`",
              args: {
                name: "text",
              },
              deprecated: true,
            },
            nextOption,
            {
              name: "--page",
              description: "1-based page number (default: 1)",
              args: {
                name: "n",
              },
              deprecated: true,
            },
            {
              name: ["-n", "--limit"],
              description: "Number of Agent Runs per page (max: 100)",
              args: {
                name: "n",
              },
            },
            jsonOption2,
          ],
        },
        {
          name: "inspect",
          description:
            "Show metadata, lifecycle events, usage, and subagent data for an Agent Run",
          args: {
            name: "runId",
          },
          options: [
            {
              name: ["-p", "--project"],
              description:
                "Project name or id to query (overrides the linked project)",
              args: {
                name: "name|id",
              },
            },
            environmentOption3,
            sinceOption,
            untilOption2,
            jsonOption2,
          ],
        },
        {
          name: "trace",
          description:
            "Show the trace for an Agent Run (turns, messages, reasoning, and tool calls)",
          args: {
            name: "runId",
          },
          options: [
            {
              name: ["-p", "--project"],
              description:
                "Project name or id to query (overrides the linked project)",
              args: {
                name: "name|id",
              },
            },
            environmentOption3,
            sinceOption,
            untilOption2,
            {
              name: "--next",
              description:
                "Fetch newer trace activity using a cursor from a previous response",
              args: {
                name: "cursor",
              },
            },
            {
              name: "--previous",
              description:
                "Fetch older trace activity using a cursor from a previous response",
              args: {
                name: "cursor",
              },
            },
            {
              name: "--max-field-length",
              description:
                "Maximum length for individual string fields in the trace (default: 8000; 0 disables truncation)",
              args: {
                name: "n",
              },
            },
            jsonOption2,
          ],
        },
        {
          name: "projects",
          description:
            "List projects in the current team with Agent Runs activity",
          options: [environmentOption3, sinceOption, untilOption2, jsonOption2],
        },
      ],
    },
    {
      name: "ai-gateway",
      description: "Manage AI Gateway resources",
      subcommands: [
        {
          name: "api-keys",
          description: "Manage AI Gateway API keys",
          subcommands: [
            {
              name: "create",
              description: "Create a new AI Gateway API key",
              options: [
                {
                  name: "--token-pass",
                  description:
                    "Scope the key to Vercel Token Pass: it spends only the team's Token Pass credits, on Token Pass models only",
                },
                {
                  name: "--name",
                  description: "Human-readable name for the API key",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--amount",
                  description: "Quota budget limit in dollars (minimum 1)",
                  args: {
                    name: "usd",
                  },
                },
                {
                  name: "--limit",
                  description: "Deprecated alias for `--amount`",
                  args: {
                    name: "amount",
                  },
                  deprecated: true,
                },
                budgetOption,
                {
                  name: "--refresh-period",
                  description:
                    "Quota refresh cadence: daily, weekly, monthly, or none (default: none)",
                  args: {
                    name: "period",
                    suggestions: ["daily", "weekly", "monthly", "none"],
                  },
                },
                {
                  name: "--include-byok",
                  description: "Include BYOK usage in quota (default: false)",
                },
                {
                  name: "--alert-thresholds",
                  description:
                    "Comma-separated spend percentages to alert at, a subset of 50,75,100 (e.g. 75,100)",
                  args: {
                    name: "list",
                  },
                },
                {
                  name: "--expiration",
                  description:
                    "Expiry for the key: 7d, 30d, 60d, 90d, 1y, or none (default: none)",
                  args: {
                    name: "period",
                    suggestions: ["7d", "30d", "60d", "90d", "1y", "none"],
                  },
                },
                {
                  name: "--zdr-exempt",
                  description:
                    "Exempt the key from the team's ZDR-only model restriction (team owners only)",
                },
                {
                  name: "--bypass-all-settings",
                  description:
                    "Exempt the key from all of the team's restrictions: ZDR-only models, the provider/model allowlist, and the HIPAA and prompt-training filters (team owners only)",
                },
              ],
            },
            {
              name: ["list", "ls"],
              description: "List AI Gateway API keys",
              options: [
                {
                  name: ["-q", "--query"],
                  description:
                    "Only keys whose name or key suffix contains this text (case-insensitive)",
                  args: {
                    name: "text",
                  },
                },
                {
                  name: "--search",
                  description: "Alias for --query",
                  args: {
                    name: "text",
                  },
                  deprecated: true,
                },
                {
                  name: "--creator",
                  description:
                    'Only keys created by this team member (email, username, or user id), or "me"; an unknown user id is used as-is',
                  args: {
                    name: "user",
                  },
                },
                {
                  name: "--state",
                  description:
                    "Which keys to list: active (unexpired), expired, deleted, or any (default: active)",
                  args: {
                    name: "state",
                  },
                },
                {
                  name: "--sort",
                  description:
                    "Order by createdAt, lastActiveAt, name, or expiresAt, optionally with :asc or :desc (default: lastActiveAt:desc)",
                  args: {
                    name: "field",
                  },
                },
                limitOption,
                nextOption,
                formatOption,
                jsonOption,
              ],
            },
            {
              name: "inspect",
              description: "Show details about an AI Gateway API key",
              args: {
                name: "id",
              },
              options: [formatOption, jsonOption],
            },
            {
              name: ["revoke", "remove", "rm", "delete"],
              description: "Revoke an AI Gateway API key",
              args: {
                name: "id",
              },
              options: [yesOption, formatOption, jsonOption],
            },
          ],
        },
        {
          name: "budgets",
          description:
            "Manage AI Gateway budgets (metered spend limits per scope)",
          subcommands: [
            {
              name: "set",
              description:
                "Create or update an AI Gateway budget for a scope (team, project <name>, user <email>, or api-key <name>), or the default budget for a scope with --default",
              args: [
                {
                  name: "scope",
                },
                {
                  name: "name",
                  isOptional: true,
                },
              ],
              options: [
                {
                  name: "--amount",
                  description: "Budget limit in dollars (minimum 1)",
                  args: {
                    name: "usd",
                  },
                },
                {
                  name: "--limit",
                  description: "Deprecated alias for `--amount`",
                  args: {
                    name: "amount",
                  },
                  deprecated: true,
                },
                {
                  name: "--refresh-period",
                  description:
                    "Budget refresh cadence: daily, weekly, monthly, or none (default: monthly)",
                  args: {
                    name: "period",
                    suggestions: ["daily", "weekly", "monthly", "none"],
                  },
                },
                {
                  name: "--message",
                  description:
                    "The reason for the change, recorded in the activity log, up to 500 characters",
                  args: {
                    name: "text",
                  },
                },
                {
                  name: "--default",
                  description:
                    "Target the default budget for the scope, applied to resources of that scope without their own budget",
                },
                formatOption,
                jsonOption,
              ],
            },
            {
              name: ["list", "ls"],
              description: "List AI Gateway budgets",
              options: [
                {
                  name: "--scope-type",
                  description:
                    "Only list budgets for one scope: team, project, user, or api-key",
                  args: {
                    name: "scope",
                    suggestions: ["team", "project", "user", "api-key"],
                  },
                },
                {
                  name: "--defaults",
                  description:
                    "List the team's default budgets instead of individual budgets",
                },
                limitOption,
                nextOption,
                formatOption,
                jsonOption,
              ],
            },
            {
              name: "inspect",
              description:
                "Show one AI Gateway budget for a scope (team, project <name>, user <email>, or api-key <name>), or the default budget for a scope with --default",
              args: [
                {
                  name: "scope",
                },
                {
                  name: "name",
                  isOptional: true,
                },
              ],
              options: [
                {
                  name: "--default",
                  description:
                    "Target the default budget for the scope, applied to resources of that scope without their own budget",
                },
                formatOption,
                jsonOption,
              ],
            },
            {
              name: ["remove", "rm", "delete"],
              description:
                "Remove an AI Gateway budget for a scope (team, project <name>, user <email>, or api-key <name>), or the default budget for a scope with --default",
              args: [
                {
                  name: "scope",
                },
                {
                  name: "name",
                  isOptional: true,
                },
              ],
              options: [
                yesOption,
                {
                  name: "--message",
                  description:
                    "The reason for the change, recorded in the activity log, up to 500 characters",
                  args: {
                    name: "text",
                  },
                },
                {
                  name: "--default",
                  description:
                    "Target the default budget for the scope, applied to resources of that scope without their own budget",
                },
                formatOption,
                jsonOption,
              ],
            },
            {
              name: "defaults",
              description:
                "Manage AI Gateway budget defaults (per-project, per-api-key, and per-member spend limits applied by default)",
              subcommands: [
                {
                  name: ["list", "ls"],
                  description: "List the team's AI Gateway budget defaults",
                  options: [formatOption],
                },
                {
                  name: "set",
                  description:
                    "Create or update the AI Gateway budget default for a scope (project, api-key, or user), applied to resources of that scope without an explicit budget",
                  args: {
                    name: "scope",
                  },
                  options: [
                    {
                      name: "--amount",
                      description:
                        "Default budget limit in dollars (minimum 1)",
                      args: {
                        name: "usd",
                      },
                    },
                    {
                      name: "--limit",
                      description: "Deprecated alias for `--amount`",
                      args: {
                        name: "amount",
                      },
                      deprecated: true,
                    },
                    {
                      name: "--refresh-period",
                      description:
                        "Budget refresh cadence: daily, weekly, monthly, or none (default: monthly)",
                      args: {
                        name: "period",
                        suggestions: ["daily", "weekly", "monthly", "none"],
                      },
                    },
                    formatOption,
                  ],
                },
                {
                  name: ["remove", "rm", "delete"],
                  description:
                    "Remove the AI Gateway budget default for a scope (project, api-key, or user)",
                  args: {
                    name: "scope",
                  },
                  options: [yesOption, formatOption],
                },
              ],
              hidden: true,
            },
          ],
        },
        {
          name: "rules",
          description: "Manage AI Gateway routing rules",
          subcommands: [
            {
              name: "add",
              description: "Add an AI Gateway routing rule",
              options: [
                {
                  name: "--type",
                  description: "Rule type: rewrite or deny",
                  args: {
                    name: "type",
                    suggestions: ["rewrite", "deny"],
                  },
                },
                {
                  name: "--source",
                  description:
                    "Model the rule matches (e.g. anthropic/claude-sonnet-4.5)",
                  args: {
                    name: "model",
                  },
                },
                {
                  name: "--destination",
                  description: "Target model a rewrite rule routes to",
                  args: {
                    name: "model",
                  },
                },
                {
                  name: "--reason",
                  description: "Reason surfaced when the rule applies",
                  args: {
                    name: "text",
                  },
                },
                {
                  name: "--description",
                  description: "Human-readable description of the rule",
                  args: {
                    name: "text",
                  },
                },
                formatOption,
                jsonOption,
              ],
            },
            {
              name: ["list", "ls"],
              description: "List AI Gateway routing rules",
              options: [
                {
                  name: "--include-disabled",
                  description: "Include disabled rules",
                },
                limitOption,
                nextOption,
                formatOption,
                jsonOption,
              ],
            },
            {
              name: ["update", "edit"],
              description: "Update an AI Gateway routing rule",
              args: {
                name: "ruleId",
              },
              options: [
                {
                  name: "--enable",
                  description: "Turn the rule on",
                },
                {
                  name: "--no-enable",
                  description: "Turn the rule off",
                },
                {
                  name: "--disable",
                  description: "Deprecated alias for `--no-enable`",
                  deprecated: true,
                },
                {
                  name: "--destination",
                  description: "Target model a rewrite rule routes to",
                  args: {
                    name: "model",
                  },
                },
                {
                  name: "--reason",
                  description: "Reason surfaced when the rule applies",
                  args: {
                    name: "text",
                  },
                },
                {
                  name: "--description",
                  description: "Human-readable description of the rule",
                  args: {
                    name: "text",
                  },
                },
                formatOption,
                jsonOption,
              ],
            },
            {
              name: ["remove", "rm", "delete"],
              description: "Remove an AI Gateway routing rule",
              args: {
                name: "ruleId",
              },
              options: [yesOption, formatOption, jsonOption],
            },
          ],
        },
        {
          name: "virtual-models",
          description:
            "Manage AI Gateway virtual models, reusable model configurations callable as vmc/<slug>",
          subcommands: [
            {
              name: "create",
              description: "Create an AI Gateway virtual model",
              args: {
                name: "slug",
                isOptional: true,
              },
              options: [
                {
                  name: "--kind",
                  description:
                    "Virtual model kind: alias or relay (default: alias)",
                  args: {
                    name: "kind",
                    suggestions: ["alias", "relay"],
                  },
                },
                {
                  name: "--model",
                  description:
                    "Model the virtual model points at (e.g. openai/gpt-5.1)",
                  args: {
                    name: "slug",
                  },
                },
                {
                  name: "--display-name",
                  description: "Human-readable name shown in the dashboard",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--description",
                  description: "Description of the virtual model",
                  args: {
                    name: "text",
                  },
                },
                {
                  name: "--provider-order",
                  description: "Comma-separated providers to try, in order",
                  args: {
                    name: "list",
                  },
                },
                {
                  name: "--provider-only",
                  description:
                    "Comma-separated providers to restrict routing to",
                  args: {
                    name: "list",
                  },
                },
                {
                  name: "--config",
                  description:
                    "JSON object of virtual model fields, for anything without a dedicated option",
                  args: {
                    name: "json",
                  },
                },
                formatOption,
                jsonOption,
              ],
            },
            {
              name: ["list", "ls"],
              description: "List AI Gateway virtual models",
              options: [
                {
                  name: "--include-archived",
                  description: "Include archived virtual models",
                },
                limitOption,
                nextOption,
                formatOption,
                jsonOption,
              ],
            },
            {
              name: "inspect",
              description: "Show details about an AI Gateway virtual model",
              args: {
                name: "slug",
              },
              options: [formatOption, jsonOption],
            },
            {
              name: ["update", "edit"],
              description: "Update an AI Gateway virtual model",
              args: {
                name: "slug",
              },
              options: [
                {
                  name: "--model",
                  description:
                    "Model the virtual model points at (e.g. openai/gpt-5.1)",
                  args: {
                    name: "slug",
                  },
                },
                {
                  name: "--display-name",
                  description: "Human-readable name shown in the dashboard",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--description",
                  description: "Description of the virtual model",
                  args: {
                    name: "text",
                  },
                },
                {
                  name: "--provider-order",
                  description: "Comma-separated providers to try, in order",
                  args: {
                    name: "list",
                  },
                },
                {
                  name: "--provider-only",
                  description:
                    "Comma-separated providers to restrict routing to",
                  args: {
                    name: "list",
                  },
                },
                {
                  name: "--config",
                  description:
                    "JSON object of virtual model fields, for anything without a dedicated option",
                  args: {
                    name: "json",
                  },
                },
                formatOption,
                jsonOption,
              ],
            },
            {
              name: ["delete", "rm", "del", "remove"],
              description: "Delete an AI Gateway virtual model",
              args: {
                name: "slug",
              },
              options: [formatOption, jsonOption],
            },
            {
              name: "restore",
              description: "Restore a deleted AI Gateway virtual model",
              args: {
                name: "slug",
              },
              options: [formatOption, jsonOption],
            },
          ],
        },
        {
          name: "private-inference",
          description:
            "Manage private providers and models, callable as private/<slug>",
          options: [jsonOption],
          subcommands: [
            {
              name: "providers",
              description:
                "Manage private providers, the inference endpoints for private models",
              options: [jsonOption],
              subcommands: [
                {
                  name: ["list", "ls"],
                  description: "List the private providers in the current team",
                  options: [jsonOption],
                },
                {
                  name: "inspect",
                  description:
                    "Show a private provider and the private models that use it",
                  args: {
                    name: "slug",
                  },
                  options: [jsonOption],
                },
                {
                  name: "discover",
                  description:
                    "List the models a private provider serves, marking the ones already added",
                  args: {
                    name: "slug",
                  },
                  options: [
                    jsonOption,
                    {
                      name: ["-q", "--query"],
                      description:
                        "Show only models whose ID or name contains this text (case-insensitive)",
                      args: {
                        name: "text",
                      },
                    },
                  ],
                },
                {
                  name: "create",
                  description:
                    "Create a private provider: an inference endpoint of your own that serves private models",
                  args: {
                    name: "slug",
                  },
                  options: [
                    {
                      name: "--base-url",
                      description:
                        "Base URL of the provider's API, such as https://vllm.example.com/v1 (https, port 443)",
                      args: {
                        name: "url",
                      },
                    },
                    {
                      name: "--connection-type",
                      description:
                        "Connection type, such as openai or anthropic (default: openai)",
                      args: {
                        name: "type",
                      },
                    },
                    {
                      name: "--api-key",
                      description: "Read the provider's API key from stdin",
                      args: {
                        name: "file",
                        template: "filepaths",
                      },
                    },
                    {
                      name: "--name",
                      description: "Display name (default: the slug)",
                      args: {
                        name: "name",
                      },
                    },
                    {
                      name: "--icon-url",
                      description: "Https URL of an icon for the dashboard",
                      args: {
                        name: "url",
                      },
                    },
                    {
                      name: "--zdr",
                      description:
                        "Mark the provider as retaining no request data",
                    },
                    {
                      name: "--no-enable",
                      description:
                        "Turn the provider off, so its models serve no requests",
                    },
                    jsonOption,
                  ],
                },
                {
                  name: "update",
                  description: "Change a private provider's settings",
                  args: {
                    name: "slug",
                  },
                  options: [
                    {
                      name: "--base-url",
                      description:
                        "Base URL of the provider's API, such as https://vllm.example.com/v1 (https, port 443)",
                      args: {
                        name: "url",
                      },
                    },
                    {
                      name: "--connection-type",
                      description:
                        "Connection type, such as openai or anthropic",
                      args: {
                        name: "type",
                      },
                    },
                    {
                      name: "--name",
                      description: "Display name",
                      args: {
                        name: "name",
                      },
                    },
                    {
                      name: "--icon-url",
                      description: "Https URL of an icon for the dashboard",
                      args: {
                        name: "url",
                      },
                    },
                    {
                      name: "--api-key",
                      description: "Read the provider's API key from stdin",
                      args: {
                        name: "file",
                        template: "filepaths",
                      },
                    },
                    {
                      name: "--zdr",
                      description:
                        "Mark the provider as retaining no request data",
                    },
                    {
                      name: "--no-enable",
                      description:
                        "Turn the provider off, so its models serve no requests",
                    },
                    {
                      name: "--no-zdr",
                      description:
                        "Mark the provider as one that may retain request data",
                    },
                    {
                      name: "--enable",
                      description: "Turn the provider on",
                    },
                    jsonOption,
                  ],
                },
                {
                  name: ["delete", "rm", "del"],
                  description: "Delete a private provider",
                  args: {
                    name: "slug",
                  },
                  options: [
                    {
                      name: "--with-models",
                      description:
                        "Delete the private models that use the provider first",
                    },
                    {
                      name: "--confirm-name",
                      description:
                        "Approve the delete by naming the private provider slug",
                      args: {
                        name: "name",
                      },
                    },
                    yesOption2,
                    jsonOption,
                  ],
                },
              ],
            },
            {
              name: "models",
              description: "Manage private models, callable as private/<slug>",
              options: [
                {
                  name: "--provider",
                  description:
                    "Show only the models of this private provider (slug)",
                  args: {
                    name: "provider",
                  },
                },
                jsonOption,
              ],
              subcommands: [
                {
                  name: ["list", "ls"],
                  description: "List the private models in the current team",
                  options: [
                    {
                      name: "--provider",
                      description:
                        "Show only the models of this private provider (slug)",
                      args: {
                        name: "provider",
                      },
                    },
                    jsonOption,
                  ],
                },
                {
                  name: "inspect",
                  description:
                    "Show a private model's Model ID, provider, limits, and status",
                  args: {
                    name: "slug",
                    description: "Slug, or the Model ID private/<slug>",
                  },
                  options: [jsonOption],
                },
                {
                  name: "create",
                  description: "Create private models",
                  args: {
                    name: "slug",
                    description:
                      "Slug of one model, or its Model ID private/<slug> (default: from the API model ID)",
                    isOptional: true,
                  },
                  options: [
                    {
                      name: "--api-model",
                      description:
                        "Model ID the provider's API expects, repeatable to create a private model for each",
                      args: {
                        name: "model",
                      },
                      isRepeatable: true,
                    },
                    {
                      name: "--context-window",
                      description: "Context window in tokens, for one model",
                      args: {
                        name: "number",
                      },
                    },
                    {
                      name: "--description",
                      description: "Description, for one model",
                      args: {
                        name: "text",
                      },
                    },
                    jsonOption,
                    {
                      name: "--max-tokens",
                      description: "Maximum output tokens, for one model",
                      args: {
                        name: "number",
                      },
                    },
                    {
                      name: "--name",
                      description:
                        "Display name, for one model (default: the API model ID)",
                      args: {
                        name: "name",
                      },
                    },
                    {
                      name: "--no-enable",
                      description: "Create the models turned off",
                    },
                    {
                      name: "--provider",
                      description: "Private provider that serves the models",
                      args: {
                        name: "provider",
                      },
                    },
                    {
                      name: "--label",
                      description:
                        "Label shown with the models, repeatable up to 20 times",
                      args: {
                        name: "label",
                      },
                      isRepeatable: true,
                    },
                    {
                      name: "--type",
                      description:
                        "Model type, such as language or embedding (default: language)",
                      args: {
                        name: "type",
                      },
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Update a private model",
                  args: {
                    name: "slug",
                    description: "Slug, or the Model ID private/<slug>",
                  },
                  options: [
                    {
                      name: "--provider",
                      description:
                        "Private provider to serve it; the ID stays private/<slug>",
                      args: {
                        name: "provider",
                      },
                    },
                    {
                      name: "--api-model",
                      description: "Model ID the provider is called with",
                      args: {
                        name: "model",
                      },
                    },
                    {
                      name: "--name",
                      description: "Display name",
                      args: {
                        name: "name",
                      },
                    },
                    {
                      name: "--type",
                      description: "Model type, such as language or embedding",
                      args: {
                        name: "type",
                      },
                    },
                    {
                      name: "--description",
                      description: "Description of the model",
                      args: {
                        name: "text",
                      },
                    },
                    {
                      name: "--context-window",
                      description: "Context window in tokens",
                      args: {
                        name: "number",
                      },
                    },
                    {
                      name: "--max-tokens",
                      description: "Maximum output tokens",
                      args: {
                        name: "number",
                      },
                    },
                    {
                      name: "--label",
                      description:
                        "Label shown with the model, repeatable up to 20 times",
                      args: {
                        name: "label",
                      },
                      isRepeatable: true,
                    },
                    {
                      name: "--no-label",
                      description: "Remove every label",
                    },
                    {
                      name: "--enable",
                      description: "Turn the model on",
                    },
                    {
                      name: "--no-enable",
                      description:
                        "Turn the model off; requests to it fail until it is on",
                    },
                    jsonOption,
                  ],
                },
                {
                  name: ["delete", "rm", "del"],
                  description: "Delete a private model",
                  args: {
                    name: "slug",
                    description: "Slug, or the Model ID private/<slug>",
                  },
                  options: [
                    {
                      name: "--confirm-name",
                      description:
                        "Approve the delete by naming the private model slug",
                      args: {
                        name: "name",
                      },
                    },
                    yesOption2,
                    jsonOption,
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "setup",
          description: "Connect local coding agents to the AI Gateway",
          options: [
            {
              name: "--token-pass",
              description:
                "Scope the key to Vercel Token Pass: it spends only the team's Token Pass credits, on Token Pass models only",
            },
            agentOption,
            allOption,
            keyOption,
            amountOption,
            budgetOption,
            refreshPeriodOption,
            includeByokOption,
            expirationOption,
            nameOption,
            reconfigureOption,
            dryRunOption,
            noBackupOption,
            noSessionMigrationOption,
            noKeychainOption,
            agentConfigOption,
            shellRcOption,
            applyOption,
            baseUrlOption,
            yesOption,
          ],
        },
        {
          name: "coding-agents",
          description: "Connect local coding agents to the AI Gateway",
          subcommands: [
            {
              name: "setup",
              description: "Connect local coding agents to the AI Gateway",
              options: [
                {
                  name: "--token-pass",
                  description:
                    "Scope the key to Vercel Token Pass: it spends only the team's Token Pass credits, on Token Pass models only",
                },
                agentOption,
                allOption,
                keyOption,
                amountOption,
                budgetOption,
                refreshPeriodOption,
                includeByokOption,
                expirationOption,
                nameOption,
                reconfigureOption,
                dryRunOption,
                noBackupOption,
                noSessionMigrationOption,
                noKeychainOption,
                agentConfigOption,
                shellRcOption,
                applyOption,
                baseUrlOption,
                yesOption,
              ],
            },
          ],
          hidden: true,
        },
        {
          name: "models",
          description: "Manage AI Gateway models",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List AI Gateway models",
              options: [
                {
                  name: ["-q", "--query"],
                  description:
                    "Only models whose id or name contains this text (case-insensitive)",
                  args: {
                    name: "text",
                  },
                },
                formatOption,
                jsonOption,
                {
                  name: "--virtual",
                  description: "Show only your team's virtual models",
                },
                {
                  name: "--no-virtual",
                  description: "Hide virtual models",
                },
              ],
            },
            {
              name: "endpoints",
              description: "List provider endpoints for an AI Gateway model",
              args: {
                name: "model",
              },
              options: [formatOption, jsonOption],
            },
          ],
        },
        {
          name: ["leaderboard", "leaderboards"],
          description:
            "Explore AI Gateway usage leaderboards (open, anonymized data under CC BY 4.0)",
          subcommands: [
            {
              name: "models",
              description: "Show the most-used models on AI Gateway",
              options: [
                {
                  name: "--modality",
                  description:
                    "Filter by modality: all, text, image, or video (default: all)",
                  args: {
                    name: "modality",
                    suggestions: ["all", "text", "image", "video"],
                  },
                },
                {
                  name: "--metric",
                  description:
                    "Metric for the table view: requests, tokens, spend, imageCount, or videoCount (default: requests)",
                  args: {
                    name: "metric",
                    suggestions: [
                      "requests",
                      "tokens",
                      "spend",
                      "imageCount",
                      "videoCount",
                    ],
                  },
                },
                {
                  name: "--date",
                  description:
                    "Day to show in the table view (default: most recent)",
                  args: {
                    name: "yyyy-mm-dd",
                  },
                },
                formatOption2,
                outputOption,
                outOption,
              ],
            },
            {
              name: "labs",
              description:
                "Show the most-used model creators (labs) on AI Gateway",
              options: [
                {
                  name: "--modality",
                  description:
                    "Filter by modality: all, text, image, or video (default: all)",
                  args: {
                    name: "modality",
                    suggestions: ["all", "text", "image", "video"],
                  },
                },
                {
                  name: "--metric",
                  description:
                    "Metric for the table view: requests, tokens, spend, imageCount, or videoCount (default: requests)",
                  args: {
                    name: "metric",
                    suggestions: [
                      "requests",
                      "tokens",
                      "spend",
                      "imageCount",
                      "videoCount",
                    ],
                  },
                },
                {
                  name: "--date",
                  description:
                    "Day to show in the table view (default: most recent)",
                  args: {
                    name: "yyyy-mm-dd",
                  },
                },
                formatOption2,
                outputOption,
                outOption,
              ],
            },
            {
              name: "apps",
              description: "Show the top apps built on AI Gateway",
              options: [formatOption2, outputOption, outOption],
            },
            {
              name: "providers",
              description: "Show the top inference providers on AI Gateway",
              options: [formatOption2, outputOption, outOption],
            },
          ],
        },
        {
          name: "requests",
          description: "List and inspect AI Gateway requests",
          options: [
            {
              name: ["-s", "--since"],
              description:
                "Start time: ISO 8601 or relative, like 1h or 7d (default: 1h before --until)",
              args: {
                name: "time",
              },
            },
            untilOption,
            {
              name: ["-p", "--project"],
              description: "Filter by project name or ID",
              args: {
                name: "name-or-id",
              },
            },
            {
              name: ["-e", "--environment"],
              description:
                "Filter by environment, like production (repeatable)",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
              isRepeatable: true,
            },
            {
              name: "--model",
              description: "Filter by model, like openai/gpt-5 (repeatable)",
              args: {
                name: "model",
              },
              isRepeatable: true,
            },
            {
              name: "--provider",
              description: "Filter by provider, like anthropic (repeatable)",
              args: {
                name: "provider",
              },
              isRepeatable: true,
            },
            {
              name: "--key",
              description: "Filter by API key ID (repeatable)",
              args: {
                name: "key",
              },
              isRepeatable: true,
            },
            {
              name: "--status",
              description:
                "Filter by HTTP status, like 429 or 5xx (repeatable)",
              args: {
                name: "status",
              },
              isRepeatable: true,
            },
            {
              name: "--session",
              description: "Filter by client session ID",
              args: {
                name: "session",
              },
            },
            {
              name: "--agent",
              description: "Filter by coding agent, like Codex (repeatable)",
              args: {
                name: "agent",
              },
              isRepeatable: true,
            },
            {
              name: "--auth-method",
              description:
                "Filter by auth method, like api_key, oidc, app_token, personal_access_token, or client_secret (repeatable)",
              args: {
                name: "auth-method",
              },
              isRepeatable: true,
            },
            {
              name: "--user",
              description:
                "Filter by user: me, a team member's email or username, or a user ID (repeatable)",
              args: {
                name: "user",
              },
              isRepeatable: true,
            },
            {
              name: "--order",
              description: "Sort by time: asc or desc (default: desc)",
              args: {
                name: "order",
                suggestions: ["asc", "desc"],
              },
            },
            {
              name: ["-n", "--limit"],
              description:
                "Number of requests to return (default: 100, max: 1000)",
              args: {
                name: "number",
              },
            },
            nextOption,
            jsonOption,
          ],
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List the AI Gateway requests of the current team",
              options: [
                {
                  name: ["-s", "--since"],
                  description:
                    "Start time: ISO 8601 or relative, like 1h or 7d (default: 1h before --until)",
                  args: {
                    name: "time",
                  },
                },
                untilOption,
                {
                  name: ["-p", "--project"],
                  description: "Filter by project name or ID",
                  args: {
                    name: "name-or-id",
                  },
                },
                {
                  name: ["-e", "--environment"],
                  description:
                    "Filter by environment, like production (repeatable)",
                  args: {
                    name: "environment",
                    suggestions: ["production", "preview", "development"],
                  },
                  isRepeatable: true,
                },
                {
                  name: "--model",
                  description:
                    "Filter by model, like openai/gpt-5 (repeatable)",
                  args: {
                    name: "model",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--provider",
                  description:
                    "Filter by provider, like anthropic (repeatable)",
                  args: {
                    name: "provider",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--key",
                  description: "Filter by API key ID (repeatable)",
                  args: {
                    name: "key",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--status",
                  description:
                    "Filter by HTTP status, like 429 or 5xx (repeatable)",
                  args: {
                    name: "status",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--session",
                  description: "Filter by client session ID",
                  args: {
                    name: "session",
                  },
                },
                {
                  name: "--agent",
                  description:
                    "Filter by coding agent, like Codex (repeatable)",
                  args: {
                    name: "agent",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--auth-method",
                  description:
                    "Filter by auth method, like api_key, oidc, app_token, personal_access_token, or client_secret (repeatable)",
                  args: {
                    name: "auth-method",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--user",
                  description:
                    "Filter by user: me, a team member's email or username, or a user ID (repeatable)",
                  args: {
                    name: "user",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--order",
                  description: "Sort by time: asc or desc (default: desc)",
                  args: {
                    name: "order",
                    suggestions: ["asc", "desc"],
                  },
                },
                {
                  name: ["-n", "--limit"],
                  description:
                    "Number of requests to return (default: 100, max: 1000)",
                  args: {
                    name: "number",
                  },
                },
                nextOption,
                jsonOption,
              ],
            },
            {
              name: "inspect",
              description:
                "Show one AI Gateway request's model, status, tokens, cost, and timing",
              args: {
                name: "request",
                description: "Generation ID, as shown by requests list",
              },
              options: [jsonOption],
            },
          ],
        },
        {
          name: "sessions",
          description:
            "Show sessions, the requests that share a client session ID",
          options: [
            {
              name: ["-s", "--since"],
              description:
                "Start time: ISO 8601 or relative, like 1h or 7d (default: 24h before --until, at most 7d ago)",
              args: {
                name: "time",
              },
            },
            untilOption,
            {
              name: ["-p", "--project"],
              description:
                "Only sessions whose last request was in this project",
              args: {
                name: "name-or-id",
              },
            },
            {
              name: "--key",
              description:
                "Only sessions whose last request used this API key, by ID (repeatable)",
              args: {
                name: "key",
              },
              isRepeatable: true,
            },
            {
              name: "--agent",
              description:
                "Only sessions whose last request came from this coding agent, like Cursor (repeatable)",
              args: {
                name: "agent",
              },
              isRepeatable: true,
            },
            {
              name: "--auth-method",
              description:
                "Only sessions whose last request used this auth method, like api_key, oidc, app_token, personal_access_token, or client_secret (repeatable)",
              args: {
                name: "auth-method",
              },
              isRepeatable: true,
            },
            {
              name: "--user",
              description:
                "Only sessions whose last request belongs to this user: me, a team member's email or username, or a user ID (repeatable)",
              args: {
                name: "user",
              },
              isRepeatable: true,
            },
            {
              name: ["-n", "--limit"],
              description:
                "Number of sessions to return (default: 100, max: 1000)",
              args: {
                name: "number",
              },
            },
            nextOption,
            jsonOption,
          ],
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List sessions by their last request, newest first",
              options: [
                {
                  name: ["-s", "--since"],
                  description:
                    "Start time: ISO 8601 or relative, like 1h or 7d (default: 24h before --until, at most 7d ago)",
                  args: {
                    name: "time",
                  },
                },
                untilOption,
                {
                  name: ["-p", "--project"],
                  description:
                    "Only sessions whose last request was in this project",
                  args: {
                    name: "name-or-id",
                  },
                },
                {
                  name: "--key",
                  description:
                    "Only sessions whose last request used this API key, by ID (repeatable)",
                  args: {
                    name: "key",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--agent",
                  description:
                    "Only sessions whose last request came from this coding agent, like Cursor (repeatable)",
                  args: {
                    name: "agent",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--auth-method",
                  description:
                    "Only sessions whose last request used this auth method, like api_key, oidc, app_token, personal_access_token, or client_secret (repeatable)",
                  args: {
                    name: "auth-method",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--user",
                  description:
                    "Only sessions whose last request belongs to this user: me, a team member's email or username, or a user ID (repeatable)",
                  args: {
                    name: "user",
                  },
                  isRepeatable: true,
                },
                {
                  name: ["-n", "--limit"],
                  description:
                    "Number of sessions to return (default: 100, max: 1000)",
                  args: {
                    name: "number",
                  },
                },
                nextOption,
                jsonOption,
              ],
            },
            {
              name: "inspect",
              description:
                "Show one session's totals, models, and last request",
              args: {
                name: "session",
                description: "Client session ID, as shown by sessions list",
              },
              options: [
                {
                  name: ["-s", "--since"],
                  description:
                    "Start time: ISO 8601 or relative, like 1h or 7d (default: 7d ago, the maximum)",
                  args: {
                    name: "time",
                  },
                },
                untilOption,
                jsonOption,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "alerts",
      description: "List alert groups or inspect a group",
      options: [
        {
          name: "--type",
          description: "Filter by alert type",
          args: {
            name: "type",
          },
          isRepeatable: true,
        },
        {
          name: ["-p", "--project"],
          description:
            "Filter by project (overrides auto-detected linked project)",
          args: {
            name: "name-or-id",
          },
        },
        {
          name: ["-a", "--all"],
          description:
            "Show team-wide alerts (ignore linked project auto-scoping)",
        },
        {
          name: "--ai",
          description:
            "Print AI-focused sections (title, resolved time, summary, key findings) instead of table output",
        },
        sinceOption3,
        untilOption,
        limitOption,
        formatOption,
        jsonOption,
      ],
      subcommands: [
        {
          name: ["ls", "list"],
          hidden: true,
        },
        {
          name: "inspect",
          description: "Show details for a single alert group",
          args: {
            name: "groupId",
          },
          options: [
            formatOption,
            jsonOption,
            {
              name: ["-p", "--project"],
              description:
                "Filter by project (overrides auto-detected linked project)",
              args: {
                name: "name-or-id",
              },
            },
            {
              name: ["-a", "--all"],
              description:
                "Use team-wide scope (ignore linked project auto-scoping)",
            },
          ],
        },
      ],
    },
    {
      name: ["alias", "aliases", "ln"],
      description: "Interact with deployment aliases",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "Show all aliases",
          options: [limitOption, nextOption, formatOption, jsonOption],
        },
        {
          name: ["remove", "rm"],
          description: "Remove an alias using its hostname",
          args: {
            name: "alias",
          },
          options: [
            {
              name: "--confirm-name",
              description: "Approve the removal by naming the alias hostname",
              args: {
                name: "name",
              },
            },
            yesOption2,
          ],
        },
        {
          name: "set",
          description: "Create a new alias",
          args: [
            {
              name: "deployment",
            },
            {
              name: "alias",
            },
          ],
        },
      ],
    },
    {
      name: "activity",
      description: "List user activity events",
      options: [
        {
          name: "--type",
          description: "Filter by event type",
          args: {
            name: "type",
          },
          isRepeatable: true,
        },
        sinceOption,
        untilOption,
        {
          name: ["-p", "--project"],
          description:
            "Filter by project (overrides auto-detected linked project)",
          args: {
            name: "name-or-id",
          },
        },
        {
          name: ["-a", "--all"],
          description:
            "Show all team events (ignore linked project auto-scoping)",
        },
        limitOption,
        nextOption,
        formatOption,
        jsonOption,
      ],
      subcommands: [
        {
          name: ["ls", "list"],
          hidden: true,
        },
        {
          name: "types",
          description: "List available event types with descriptions",
          options: [formatOption, jsonOption],
        },
      ],
    },
    {
      name: "api",
      description: "Make authenticated HTTP requests to the Vercel API",
      args: {
        name: "endpoint",
        isOptional: true,
      },
      options: [
        {
          name: ["-X", "--method"],
          description:
            "HTTP method (GET, POST, PUT, PATCH, DELETE) (default: GET, or POST if body is provided)",
          args: {
            name: "method",
          },
        },
        {
          name: ["-F", "--field"],
          description: "Add a typed parameter (numbers, booleans parsed)",
          args: {
            name: "key=value",
          },
          isRepeatable: true,
        },
        {
          name: ["-f", "--raw-field"],
          description: "Add a string option (no type parsing)",
          args: {
            name: "key=value",
          },
          isRepeatable: true,
        },
        {
          name: ["-H", "--header"],
          description: "Add a custom HTTP header",
          args: {
            name: "key:value",
          },
          isRepeatable: true,
        },
        {
          name: "--input",
          description: "Read request body from file (use - for stdin)",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--paginate",
          description: "Fetch all pages of results",
        },
        {
          name: ["-i", "--include"],
          description: "Include response headers in output",
        },
        {
          name: "--silent",
          description: "Suppress response output",
        },
        {
          name: "--verbose",
          description: "Show debug information including full request/response",
        },
        {
          name: "--raw",
          description:
            "Output raw JSON without pretty-printing (default: on when output is piped)",
        },
        {
          name: "--refresh",
          description: "Force refresh the cached OpenAPI spec",
        },
        {
          name: "--generate",
          description:
            "Generate output instead of executing (e.g., --generate=curl)",
          args: {
            name: "format",
          },
        },
        {
          name: "--dangerously-skip-permissions",
          description:
            "Skip confirmation prompts for DELETE operations (use with caution)",
        },
      ],
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List all available API endpoints",
          options: [
            formatOption,
            jsonOption,
            {
              name: "--refresh",
              description: "Force refresh the cached OpenAPI spec",
            },
          ],
        },
      ],
    },
    {
      name: "billing",
      description: "Manage billing for a team",
      subcommands: [
        {
          name: "overview",
          description: "Show the plan, balance due, and invoice details",
          options: [jsonOption],
        },
        {
          name: "usage",
          description: "Show billing usage and costs",
          options: [
            {
              name: ["-s", "--since"],
              description:
                "Start time: YYYY-MM-DD (midnight LA time), ISO 8601, or relative, like 7d (default: start of the current billing cycle)",
              args: {
                name: "time",
              },
            },
            {
              name: ["-u", "--until"],
              description:
                "End time: YYYY-MM-DD (end of day LA time), ISO 8601, or relative; requires --since (default: now)",
              args: {
                name: "time",
              },
            },
            {
              name: "--from",
              args: {
                name: "from",
              },
              deprecated: true,
            },
            {
              name: "--to",
              args: {
                name: "to",
              },
              deprecated: true,
            },
            {
              name: "--breakdown",
              description:
                "Show usage breakdown by time period instead of aggregated totals (daily, weekly, monthly)",
              args: {
                name: "period",
              },
            },
            {
              name: "--group-by",
              description:
                "Group usage by a dimension instead of aggregated totals (project, region)",
              args: {
                name: "dimension",
              },
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "contract",
          description: "Show contract information for all billing periods",
          options: [formatOption, jsonOption],
        },
        {
          name: ["budgets", "budget"],
          description: "Manage spending beyond included credit",
          subcommands: [
            {
              name: ["inspect", "overview"],
              description:
                "Show a Spend Management budget and this cycle's spend against it: the team budget, or the one --organization, --project, or --product selects",
              options: [
                {
                  name: "--organization",
                  description:
                    "The organization budget, by organization slug or ID, from any team",
                  args: {
                    name: "organization",
                  },
                },
                {
                  name: ["-p", "--project"],
                  description: "A project's budget, by project name or ID",
                  args: {
                    name: "name-or-id",
                  },
                },
                {
                  name: "--product",
                  description:
                    "A product's budget, by product ID or name (case-insensitive), from the products that can have a budget",
                  args: {
                    name: "product",
                  },
                },
                formatOption,
                jsonOption,
              ],
            },
            {
              name: ["list", "ls"],
              description:
                "List Spend Management budgets on this team, from every scope unless --organization, --project, or --product narrows them",
              options: [
                {
                  name: "--type",
                  description:
                    "Only budgets of these types: team, organization, project, product. Repeat or separate with commas for several",
                  args: {
                    name: "type",
                    suggestions: budgetTypes,
                  },
                  isRepeatable: true,
                },
                {
                  name: "--organization",
                  description:
                    "Only the organization budget, by organization slug or ID",
                  args: {
                    name: "organization",
                  },
                },
                {
                  name: ["-p", "--project"],
                  description: "Only a project's budget, by name or ID",
                  args: {
                    name: "name-or-id",
                  },
                },
                {
                  name: "--product",
                  description: "Only a product's budget, by product ID or name",
                  args: {
                    name: "product",
                  },
                },
                formatOption,
                jsonOption,
              ],
            },
            {
              name: ["set", "update"],
              description:
                "Create or update a Spend Management budget: the team budget, or the one --organization, --project, or --product selects",
              options: [
                {
                  name: "--organization",
                  description:
                    "The organization budget, by organization slug or ID, from any team",
                  args: {
                    name: "organization",
                  },
                },
                {
                  name: ["-p", "--project"],
                  description: "A project's budget, by project name or ID",
                  args: {
                    name: "name-or-id",
                  },
                },
                {
                  name: "--product",
                  description:
                    "A product's budget, by product ID or name (case-insensitive), from the products that can have a budget",
                  args: {
                    name: "product",
                  },
                },
                {
                  name: "--amount",
                  description: "Budget amount in whole dollars (minimum 1)",
                  args: {
                    name: "usd",
                  },
                },
                {
                  name: "--pause",
                  description:
                    "Pause at 100% of the budget amount: all projects for a team budget, or the project for a project budget",
                },
                {
                  name: "--no-pause",
                  description: "Do not pause when the budget is reached",
                },
                {
                  name: "--webhook",
                  description:
                    "Webhook URL to notify when a threshold is reached",
                  args: {
                    name: "url",
                  },
                },
                {
                  name: "--no-webhook",
                  description: "Remove the budget webhook",
                },
                formatOption,
                jsonOption,
              ],
            },
            {
              name: ["remove", "rm", "delete", "disable"],
              description:
                "Remove a Spend Management budget: the team budget, or the one --organization, --project, or --product selects",
              options: [
                {
                  name: "--organization",
                  description:
                    "The organization budget, by organization slug or ID, from any team",
                  args: {
                    name: "organization",
                  },
                },
                {
                  name: ["-p", "--project"],
                  description: "A project's budget, by project name or ID",
                  args: {
                    name: "name-or-id",
                  },
                },
                {
                  name: "--product",
                  description:
                    "A product's budget, by product ID or name (case-insensitive), from the products that can have a budget",
                  args: {
                    name: "product",
                  },
                },
                yesOption,
                formatOption,
                jsonOption,
              ],
            },
            {
              name: "alerts",
              description:
                "List Spend Management alerts: each budget threshold reached, newest first, from every scope unless --organization, --project, or --product narrows them",
              options: [
                {
                  name: ["-s", "--since"],
                  description:
                    "Show alerts triggered after this time (ISO 8601 or relative: 1d, 7d, 30d)",
                  args: {
                    name: "time",
                  },
                },
                {
                  name: ["-u", "--until"],
                  description:
                    "Show alerts triggered before this time (ISO 8601 or relative)",
                  args: {
                    name: "time",
                  },
                },
                {
                  name: "--type",
                  description:
                    "Only budgets of these types: team, organization, project, product. Repeat or separate with commas for several",
                  args: {
                    name: "type",
                    suggestions: budgetTypes,
                  },
                  isRepeatable: true,
                },
                {
                  name: "--organization",
                  description:
                    "Only the organization budget, by organization slug or ID",
                  args: {
                    name: "organization",
                  },
                },
                {
                  name: ["-p", "--project"],
                  description: "Only a project's budget, by name or ID",
                  args: {
                    name: "name-or-id",
                  },
                },
                {
                  name: "--product",
                  description: "Only a product's budget, by product ID or name",
                  args: {
                    name: "product",
                  },
                },
                limitOption,
                nextOption,
                formatOption,
                jsonOption,
              ],
              subcommands: [
                {
                  name: ["list", "ls"],
                  description:
                    "List Spend Management alerts: each budget threshold reached, newest first, from every scope unless --organization, --project, or --product narrows them",
                  options: [
                    {
                      name: ["-s", "--since"],
                      description:
                        "Show alerts triggered after this time (ISO 8601 or relative: 1d, 7d, 30d)",
                      args: {
                        name: "time",
                      },
                    },
                    {
                      name: ["-u", "--until"],
                      description:
                        "Show alerts triggered before this time (ISO 8601 or relative)",
                      args: {
                        name: "time",
                      },
                    },
                    {
                      name: "--type",
                      description:
                        "Only budgets of these types: team, organization, project, product. Repeat or separate with commas for several",
                      args: {
                        name: "type",
                        suggestions: budgetTypes,
                      },
                      isRepeatable: true,
                    },
                    {
                      name: "--organization",
                      description:
                        "Only the organization budget, by organization slug or ID",
                      args: {
                        name: "organization",
                      },
                    },
                    {
                      name: ["-p", "--project"],
                      description: "Only a project's budget, by name or ID",
                      args: {
                        name: "name-or-id",
                      },
                    },
                    {
                      name: "--product",
                      description:
                        "Only a product's budget, by product ID or name",
                      args: {
                        name: "product",
                      },
                    },
                    limitOption,
                    nextOption,
                    formatOption,
                    jsonOption,
                  ],
                  hidden: true,
                },
              ],
            },
          ],
        },
        {
          name: ["invoices", "invoice"],
          description: "List, inspect, and download invoices",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List invoices, newest first",
              options: [
                {
                  name: "--status",
                  description:
                    "Only show invoices with this status, repeatable: draft, open, paid, uncollectible, void (default: open, paid, uncollectible)",
                  args: {
                    name: "status",
                    suggestions: [
                      "draft",
                      "open",
                      "paid",
                      "uncollectible",
                      "void",
                    ],
                  },
                  isRepeatable: true,
                },
                {
                  name: ["-n", "--limit"],
                  description:
                    "Number of invoices to show (default: 20, max: 100)",
                  args: {
                    name: "number",
                  },
                },
                nextOption,
                jsonOption,
              ],
            },
            {
              name: "inspect",
              description: "Show an invoice and its line items",
              args: {
                name: "invoice",
              },
              options: [jsonOption],
            },
            {
              name: "upcoming",
              description:
                "Show upcoming invoice estimates and their line items",
              options: [jsonOption],
            },
            {
              name: "download",
              description: "Download the PDF of an invoice",
              args: {
                name: "invoice",
              },
              options: [
                {
                  name: ["-o", "--output"],
                  description:
                    "File to write, or - for stdout (default: <INVOICE_NUMBER>.pdf in the current directory)",
                  args: {
                    name: "path",
                    template: "filepaths",
                  },
                },
                jsonOption,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "blob",
      description: "Interact with Vercel Blob",
      options: [
        {
          name: "--rw-token",
          description:
            "Use a read-write token instead of OIDC or environment credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--oidc-token",
          description:
            "OIDC token for the Blob store (must be passed together with --store)",
          args: {
            name: "string",
          },
        },
        {
          name: "--store",
          description:
            'Blob store id, with or without the "store_" prefix (must be passed together with --oidc-token)',
          args: {
            name: "store",
          },
        },
        {
          name: "--store-id",
          description: "Deprecated alias for `--store`",
          args: {
            name: "string",
          },
          deprecated: true,
        },
      ],
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List all files in the Blob store",
          options: [
            {
              name: ["-n", "--limit"],
              description:
                "Number of results to return per page (default: 10, max: 1000)",
              args: {
                name: "number",
              },
            },
            nextOption,
            {
              name: ["-c", "--cursor"],
              description: "Cursor from previous page to start listing from",
              args: {
                name: "string",
              },
              deprecated: true,
            },
            {
              name: "--prefix",
              description: "Prefix to filter Blobs by",
              args: {
                name: "string",
              },
            },
            {
              name: "--mode",
              description:
                "Mode to filter Blobs by either folded or expanded (default: expanded)",
              args: {
                name: "string",
                suggestions: ["folded", "expanded"],
              },
            },
            jsonOption,
          ],
        },
        {
          name: "put",
          description: "Upload a file to the Blob store",
          args: {
            name: "pathToFile",
            template: "filepaths",
          },
          options: [
            accessOption,
            {
              name: "--add-random-suffix",
              description:
                "Add a random suffix to the file name (default: false)",
            },
            {
              name: "--pathname",
              description: "Pathname to upload the file to (default: filename)",
              args: {
                name: "string",
              },
            },
            {
              name: "--multipart",
              description:
                "Upload the file in multiple small chunks for performance and reliability (default: true)",
            },
            {
              name: "--no-multipart",
              description: "Upload the file in a single request",
            },
            {
              name: "--content-type",
              description: "Overwrite the content-type",
              args: {
                name: "string",
              },
            },
            {
              name: "--cache-control-max-age",
              description:
                "Max-age of the cache-control header directive (default: 2592000 = 30 days)",
              args: {
                name: "number",
              },
            },
            ttlDaysOption,
            {
              name: "--force",
              description:
                "Overwrite the file if it already exists (default: false)",
            },
            {
              name: "--allow-overwrite",
              description: "Deprecated alias for `--force`",
              deprecated: true,
            },
            {
              name: "--if-match",
              description:
                "Only perform the operation if the blob's ETag matches this value",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "put-image",
          description:
            "Optimize an image with Vercel Image Optimization and store the result in the Blob store (requires OIDC credentials)",
          args: {
            name: "pathToFileOrUrl",
          },
          options: [
            accessOption,
            {
              name: "--width",
              description:
                "Width of the optimized image in pixels, between 1 and 8192 (required)",
              args: {
                name: "number",
              },
            },
            {
              name: "--quality",
              description:
                "Quality of the optimized image, between 1 and 100 (default: 75)",
              args: {
                name: "number",
              },
            },
            {
              name: "--format",
              description: "Output format: jpeg, png, webp, or avif",
              args: {
                name: "format",
                suggestions: ["jpeg", "png", "webp", "avif"],
              },
            },
            {
              name: "--pathname",
              description:
                "Pathname to store the optimized image at in the Blob store (required)",
              args: {
                name: "string",
              },
            },
            {
              name: "--add-random-suffix",
              description:
                "Add a random suffix to the file name (default: false)",
            },
            {
              name: "--cache-control-max-age",
              description:
                "Max-age of the cache-control header directive (default: 2592000 = 30 days)",
              args: {
                name: "number",
              },
            },
            ttlDaysOption,
            {
              name: "--force",
              description:
                "Overwrite the file if it already exists (default: false)",
            },
            {
              name: "--allow-overwrite",
              description: "Deprecated alias for `--force`",
              deprecated: true,
            },
            {
              name: "--json",
              description: "Output the stored blob as JSON",
            },
          ],
        },
        {
          name: "get",
          description: "Download a blob by URL or pathname",
          args: {
            name: "urlOrPathname",
          },
          options: [
            accessOption,
            {
              name: ["-o", "--output"],
              description: "Save blob content to a file instead of stdout",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
            {
              name: "--if-none-match",
              description:
                "Only return content if the blob's ETag does not match this value (returns 304 if unchanged)",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: ["delete", "rm", "del", "remove"],
          description: "Delete a file from the Blob store",
          args: {
            name: "urlsOrPathnames",
          },
          options: [
            {
              name: "--if-match",
              description:
                "Only perform the operation if the blob's ETag matches this value",
              args: {
                name: "string",
              },
            },
            {
              name: "--confirm-name",
              description:
                "Approve the delete by naming each blob, as given in the arguments",
              args: {
                name: "name",
              },
              isRepeatable: true,
            },
            yesOption2,
          ],
        },
        {
          name: ["copy", "cp"],
          description: "Copy a file in the Blob store",
          args: [
            {
              name: "fromUrlOrPathname",
            },
            {
              name: "toPathname",
            },
          ],
          options: [
            accessOption,
            {
              name: "--add-random-suffix",
              description: "Add a random suffix to the file name",
            },
            {
              name: "--content-type",
              description: "Overwrite the content-type",
              args: {
                name: "string",
              },
            },
            {
              name: "--cache-control-max-age",
              description:
                "Max-age of the cache-control header directive (default: 2592000 = 30 days)",
              args: {
                name: "number",
              },
            },
            ttlDaysOption,
            {
              name: "--if-match",
              description:
                "Only perform the operation if the blob's ETag matches this value",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "set-ttl",
          description: "Set or clear the TTL of one or more existing blobs",
          args: {
            name: "urlsOrPathnames",
            isVariadic: true,
          },
          options: [
            ttlDaysOption,
            {
              name: "--clear-ttl",
              description: "Remove the TTL so the blobs are kept indefinitely",
            },
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt when setting a TTL",
            },
            jsonOption,
          ],
        },
        {
          name: "signed-token",
          description: "Issue a short-lived signed token for Blob operations",
          options: [
            {
              name: "--pathname",
              description: 'Pathname scope for the token (default: "*")',
              args: {
                name: "string",
              },
            },
            {
              name: "--operation",
              description:
                "Allowed operation(s): get, head, put, delete (repeatable)",
              args: {
                name: "operation",
                suggestions: ["get", "head", "put", "delete"],
              },
              isRepeatable: true,
            },
            {
              name: "--valid-until",
              description:
                "Absolute expiration time as Unix timestamp in milliseconds (mutually exclusive with --valid-for)",
              args: {
                name: "timestamp-ms",
              },
            },
            {
              name: "--valid-for",
              description:
                "Relative duration before expiration (for example: 15m, 1h, 7d; mutually exclusive with --valid-until)",
              args: {
                name: "duration",
                suggestions: ["15m", "1h", "7d"],
              },
            },
            {
              name: "--allowed-content-type",
              description:
                "Allowed content type(s) for put operations (repeatable, supports wildcards)",
              args: {
                name: "mime-type",
              },
              isRepeatable: true,
            },
            {
              name: "--maximum-size-in-bytes",
              description:
                "Maximum upload size in bytes for put operations (max: 5TB)",
              args: {
                name: "bytes",
              },
            },
            {
              name: "--json",
              description: "Output signed token payload as JSON",
            },
          ],
        },
        {
          name: "presign",
          description: "Generate a presigned URL for Blob operations",
          args: {
            name: "pathname",
          },
          options: [
            accessOption,
            {
              name: "--operation",
              description:
                "Operation for the presigned URL: get, head, put, or delete (default: get)",
              args: {
                name: "operation",
                suggestions: ["get", "head", "put", "delete"],
              },
            },
            {
              name: "--delegation-token",
              description:
                "Delegation token from `vercel blob signed-token` (must be used with --client-signing-token)",
              args: {
                name: "string",
              },
            },
            {
              name: "--client-signing-token",
              description:
                "Signing secret/token from `vercel blob signed-token` (must be used with --delegation-token)",
              args: {
                name: "string",
              },
            },
            {
              name: "--valid-until",
              description:
                "Absolute expiration time as Unix timestamp in milliseconds (mutually exclusive with --valid-for)",
              args: {
                name: "timestamp-ms",
              },
            },
            {
              name: "--valid-for",
              description:
                "Relative duration before expiration (for example: 15m, 1h, 7d; mutually exclusive with --valid-until)",
              args: {
                name: "duration",
                suggestions: ["15m", "1h", "7d"],
              },
            },
            {
              name: "--if-match",
              description: "If-Match constraint for put or delete operations",
              args: {
                name: "string",
              },
            },
            {
              name: "--allow-overwrite",
              description: "Allow overwriting existing blobs (put only)",
            },
            {
              name: "--add-random-suffix",
              description: "Add a random suffix to the pathname (put only)",
            },
            {
              name: "--cache-control-max-age",
              description: "Cache-Control max-age in seconds (put only)",
              args: {
                name: "seconds",
              },
            },
            ttlDaysOption,
            {
              name: "--allowed-content-type",
              description:
                "Allowed content type(s) for uploads (put only, repeatable)",
              args: {
                name: "mime-type",
              },
              isRepeatable: true,
            },
            {
              name: "--maximum-size-in-bytes",
              description: "Maximum upload size in bytes (put only, max: 5TB)",
              args: {
                name: "bytes",
              },
            },
            {
              name: "--json",
              description: "Output presign result as JSON",
            },
          ],
        },
        {
          name: "create-store",
          description: "Create a new Blob store",
          args: {
            name: "name",
            isOptional: true,
          },
          options: [
            accessOption,
            {
              name: "--region",
              description:
                'Region to create the Blob store in (default: "iad1")',
              args: {
                name: "string",
              },
            },
            yesOption,
            {
              name: ["-e", "--environment"],
              description:
                "Environment to connect (can be repeated: production, preview, development) (default: all when --yes is used)",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "delete-store",
          description: "Delete a Blob store",
          args: {
            name: "storeId",
            isOptional: true,
          },
        },
        {
          name: "get-store",
          description: "Get a Blob store",
          args: {
            name: "storeId",
            isOptional: true,
          },
        },
        {
          name: ["list-stores", "ls-stores"],
          description: "List all Blob stores",
          options: [
            {
              name: ["-a", "--all"],
              description:
                "List all blob stores for the team, not just the ones connected to the current project",
            },
            jsonOption,
            {
              name: "--no-projects",
              description: "Hide the Projects column (table output only)",
            },
          ],
        },
        {
          name: "empty-store",
          description: "Delete all blobs in a Blob store",
          options: [
            {
              name: "--confirm-name",
              description: "Approve emptying the store by naming its store ID",
              args: {
                name: "name",
              },
            },
            yesOption2,
          ],
        },
      ],
    },
    {
      name: "board",
      description: "Read and write your team's board",
      hidden: true,
    },
    {
      name: "bisect",
      description:
        "Bisect the current project interactively or via an automated test script",
      options: [
        {
          name: "--bad",
          description: "Known bad URL",
          args: {
            name: "url",
          },
        },
        {
          name: "--good",
          description: "Known good URL",
          args: {
            name: "url",
          },
        },
        {
          name: "--open",
          description: "Automatically open each URL in the browser",
        },
        {
          name: "--path",
          description: "Subpath of the deployment URL to test",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--run",
          description: "Test script to run for each deployment",
          args: {
            name: "script",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "build",
      description: "Build the project",
      options: [
        {
          name: "--prod",
          description: "Build a production deployment",
        },
        {
          name: ["-e", "--environment"],
          description:
            "Environment to build for: production, preview, or a custom environment (default: preview)",
          args: {
            name: "environment",
            suggestions: ["production", "preview"],
          },
        },
        targetOption,
        {
          name: ["-o", "--output"],
          description: "Directory where built assets will be written to",
          args: {
            name: "dir",
            template: "folders",
          },
        },
        {
          name: ["-y", "--yes"],
          description:
            "Skip the confirmation prompt about pulling environment variables and project settings when not found locally",
        },
        {
          name: "--standalone",
          description:
            "Create a standalone build with all dependencies inlined into function output folders",
        },
        {
          name: "--deployment",
          description:
            "Deployment ID to pull environment variables from (e.g. dpl_xxx)",
          args: {
            name: "deployment",
          },
        },
        idOption,
        projectOption,
      ],
    },
    {
      name: "builders",
      description: "Manage the native Builder cache",
      subcommands: [
        {
          name: "preinstall",
          description: "Preinstall and load native Builders",
        },
      ],
      hidden: true,
    },
    {
      name: "buy",
      description: "Purchase Vercel products for your team",
      subcommands: [
        {
          name: "credits",
          description: "Purchase Vercel credits for your team",
          args: [
            {
              name: "credit-type",
            },
            {
              name: "amount",
            },
          ],
          options: [
            {
              name: "--amount",
              description:
                "Price a person approved for this charge, in USD. Agents must pass it; nothing is charged if the price changed",
              args: {
                name: "usd",
              },
            },
            {
              name: ["-y", "--yes"],
              description: "Deprecated: use --amount",
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: ["addon", "addons", "add-on"],
          description: "Purchase a Vercel addon for your team",
          args: [
            {
              name: "addon-name",
            },
            {
              name: "quantity",
              isOptional: true,
            },
          ],
          options: [yesOption3, jsonOption, projectOption],
        },
        {
          name: "pro",
          description: "Purchase a Vercel Pro subscription for your team",
          options: [yesOption3, formatOption, jsonOption],
        },
        {
          name: "domain",
          description: "Purchase a domain name",
          args: {
            name: "domain",
          },
          options: [
            {
              name: "--amount",
              description:
                "Exact purchase price a person approved, in USD, as `vercel domains price <domain>` shows it",
              args: {
                name: "usd",
              },
            },
            {
              name: "--use-billing-details",
              description:
                "Fill registrant details you don't pass from the team's billing info (email and address)",
            },
            {
              name: "--first-name",
              description: "Registrant first name",
              args: {
                name: "text",
              },
            },
            {
              name: "--last-name",
              description: "Registrant last name",
              args: {
                name: "text",
              },
            },
            {
              name: "--email",
              description: "Registrant email",
              args: {
                name: "text",
              },
            },
            {
              name: "--phone",
              description:
                "Registrant phone with country code, such as +11122233344",
              args: {
                name: "text",
              },
            },
            {
              name: "--address",
              description: "Registrant street address",
              args: {
                name: "text",
              },
            },
            {
              name: "--city",
              description: "Registrant city",
              args: {
                name: "text",
              },
            },
            {
              name: "--state",
              description: "Registrant state or province",
              args: {
                name: "text",
              },
            },
            {
              name: "--zip",
              description: "Registrant postal or ZIP code",
              args: {
                name: "text",
              },
            },
            {
              name: "--country",
              description: "Registrant 2-letter country code, such as US",
              args: {
                name: "text",
              },
            },
            {
              name: "--company",
              description: "Registrant company name (optional)",
              args: {
                name: "text",
              },
            },
            {
              name: "--auto-renew",
              description:
                "Renew the domain automatically at the end of each term",
            },
            {
              name: "--no-auto-renew",
              description: "Don't renew the domain automatically",
            },
            {
              name: "--timeout",
              description:
                "How long to wait for the order to finish, counted from when it is sent, as a duration with a unit such as 30s or 2m (default: 1m)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--no-wait",
              description:
                "Don't wait for the order to finish: exit once it's accepted, with the order ID",
            },
            formatOption,
            jsonOption,
          ],
        },
      ],
    },
    {
      name: "cache",
      description: "Manage cache for a Project",
      subcommands: [
        {
          name: "purge",
          description:
            "Purge the CDN cache and Data cache for the selected project",
          options: [
            yesOption,
            projectOption,
            {
              name: "--type",
              description:
                "Select the cache to purge: cdn, data, or all (default: all)",
              args: {
                name: "type",
                suggestions: ["cdn", "data", "all"],
              },
            },
          ],
        },
        {
          name: "invalidate",
          description:
            "Mark cached content matching a tag or source image as stale for background revalidation",
          options: [
            yesOption,
            projectOption,
            {
              name: "--tag",
              description: "Tags to invalidate (comma-separated)",
              args: {
                name: "tags",
              },
            },
            {
              name: "--srcimg",
              description: "Source Image to invalidate",
              args: {
                name: "srcimg",
              },
            },
          ],
        },
        {
          name: "dangerously-delete",
          description:
            "Delete cached content matching a tag or source image; cache misses block on revalidation",
          options: [
            yesOption,
            projectOption,
            {
              name: "--tag",
              description: "Tags to delete (comma-separated)",
              args: {
                name: "tags",
              },
            },
            {
              name: "--srcimg",
              description: "Source Image to delete",
              args: {
                name: "srcimg",
              },
            },
            {
              name: "--revalidation-deadline-seconds",
              description:
                "Delay deletion for this many seconds; content accessed before the deadline is revalidated",
              args: {
                name: "revalidation-deadline-seconds",
              },
            },
          ],
        },
      ],
    },
    {
      name: ["certs", "cert"],
      description: "Interact with SSL certificates",
      subcommands: [
        {
          name: "add",
          description: "Add a new certificate",
          options: [
            {
              name: "--crt",
              description: "Certificate file",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: "--key",
              description: "Certificate key file",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: "--ca",
              description: "CA certificate chain file",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: "--overwrite",
              deprecated: true,
            },
          ],
        },
        {
          name: "issue",
          description: "Issue a new certificate for a domain",
          args: {
            name: "cn",
          },
          options: [
            {
              name: "--challenge-only",
              description: "Only show challenges needed to issue a certificate",
            },
            {
              name: "--crt",
              description: "Certificate file",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: "--key",
              description: "Certificate key file",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: "--ca",
              description: "CA certificate chain file",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: "--overwrite",
              hidden: true,
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "Show all available certificates",
          options: [limitOption, nextOption, jsonOption],
        },
        {
          name: ["delete", "rm", "del", "remove"],
          description: "Delete a certificate by id",
          args: {
            name: "id",
          },
        },
      ],
    },
    {
      name: "changelog",
      description: "Show the latest Vercel product updates",
      options: [
        {
          name: ["-n", "--limit"],
          description: "Number of updates to show (default: 5, max: 20)",
          args: {
            name: "number",
          },
        },
        formatOption,
        jsonOption,
      ],
      subcommands: [
        {
          name: "search",
          description: "Search Vercel product updates by keyword",
          args: {
            name: "query",
            isVariadic: true,
          },
          options: [
            {
              name: ["-n", "--limit"],
              description: "Number of updates to show (default: 5, max: 20)",
              args: {
                name: "number",
              },
            },
            formatOption,
            jsonOption,
          ],
        },
      ],
    },
    {
      name: "ci",
      description: "Inspect Vercel CI and rerun runs",
      subcommands: [
        {
          name: "enable",
          description: "Enable Vercel CI for the current repository",
          options: [
            {
              name: "--remote",
              description:
                "Git remote to enable Vercel CI for (default: the only remote; prompts when multiple exist)",
              args: {
                name: "name",
              },
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "disable",
          description: "Disable Vercel CI for the current repository",
          options: [
            {
              name: "--remote",
              description:
                "Git remote to disable Vercel CI for (default: the only remote; prompts when multiple exist)",
              args: {
                name: "name",
              },
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: ["list", "ls"],
          description: "List Vercel CI runs for the current repository",
          options: [
            {
              name: "--git-branch",
              description:
                "Only list runs for this Git branch (default: the current branch)",
              args: {
                name: "branch",
              },
            },
            {
              name: "--branch",
              description: "Deprecated alias for `--git-branch`",
              args: {
                name: "branch",
              },
              deprecated: true,
            },
            {
              name: "--all-branches",
              description: "List runs for every branch of the repository",
            },
            {
              name: "--commit",
              description:
                "Only list runs for this commit on the current branch or --git-branch; cannot combine with --all-branches",
              args: {
                name: "sha",
              },
            },
            {
              name: "--status",
              description:
                "Only list runs with this status (queued, running, succeeded, failed, skipped)",
              args: {
                name: "status",
              },
            },
            limitOption,
            nextOption,
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "inspect",
          description:
            "Show the jobs and tasks of a Vercel CI run (default: the run for the current commit)",
          args: {
            name: "run",
            isOptional: true,
          },
          options: [
            {
              name: "--attempt",
              description:
                "Show this attempt of the run (default: the latest attempt)",
              args: {
                name: "number",
              },
            },
            {
              name: "--wait",
              description:
                "Wait up to 10 minutes for the run to finish, then exit with 1 if it failed",
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "logs",
          description:
            "Show task logs for a Vercel CI run (default: the run for the current commit)",
          args: {
            name: "run",
            isOptional: true,
          },
          options: [
            {
              name: "--failed",
              description:
                "Only show logs for tasks that failed (cannot be combined with --follow)",
            },
            {
              name: "--task",
              description:
                "Only show logs for this task (e.g., web#test); can be repeated",
              args: {
                name: "name",
              },
              isRepeatable: true,
            },
            {
              name: "--level",
              description:
                "Only show log lines with this level (trace, debug, command, info, warn, error, systemError, fatal); can be repeated",
              args: {
                name: "level",
                suggestions: ciLogLevels,
              },
              isRepeatable: true,
            },
            {
              name: "--grep",
              description:
                "Only show log lines containing this text, ignoring case",
              args: {
                name: "text",
              },
            },
            {
              name: "--attempt",
              description:
                "Show logs for this attempt of the run (default: the latest attempt)",
              args: {
                name: "number",
              },
            },
            {
              name: ["-n", "--limit"],
              description:
                "Maximum number of tasks to show (default: 10, max: 25)",
              args: {
                name: "number",
              },
            },
            {
              name: ["-f", "--follow"],
              description:
                "Stream logs for one task (requires --task; JSON uses JSONL)",
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "grep",
          description:
            "Search the task logs of recent Vercel CI runs for the current repository (default: the last 20 runs on the current branch)",
          args: {
            name: "text",
          },
          options: [
            {
              name: "--git-branch",
              description:
                "Search runs for this Git branch (default: the current branch)",
              args: {
                name: "branch",
              },
            },
            {
              name: "--branch",
              description: "Deprecated alias for `--git-branch`",
              args: {
                name: "branch",
              },
              deprecated: true,
            },
            {
              name: "--all-branches",
              description: "Search runs across every branch",
            },
            {
              name: "--status",
              description:
                "Only search runs whose latest attempt has this status (queued, running, succeeded, failed, skipped)",
              args: {
                name: "status",
              },
            },
            {
              name: "--runs",
              description:
                "Maximum recent runs to search (default: 20, max: 50); bounded scans can return fewer runs with an explicit partial-result notice",
              args: {
                name: "number",
              },
            },
            {
              name: "--level",
              description:
                "Only show log lines with this level (trace, debug, command, info, warn, error, systemError, fatal); can be repeated",
              args: {
                name: "level",
                suggestions: ciLogLevels,
              },
              isRepeatable: true,
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "rerun",
          description:
            "Start a new attempt of a finished Vercel CI run (default: a failed run for the current commit; succeeded or skipped runs require a run ID)",
          args: {
            name: "run",
            isOptional: true,
          },
          options: [
            {
              name: "--wait",
              description:
                "Wait up to 10 minutes for the new attempt to finish, then exit with 1 if it failed",
            },
            formatOption,
            jsonOption,
          ],
        },
      ],
    },
    {
      name: "comments",
      description:
        "Review and act on Vercel Toolbar comments from the command line",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List comments for a project",
          options: [
            projectOption2,
            {
              name: "--git-branch",
              description:
                "Filter by Git branch (repeatable) (default: the current branch when inferable)",
              args: {
                name: "branch",
              },
              isRepeatable: true,
            },
            {
              name: "--branch",
              description: "Deprecated alias for `--git-branch`",
              args: {
                name: "branch",
              },
              isRepeatable: true,
              deprecated: true,
            },
            {
              name: "--all-branches",
              description: "Show comments from every branch",
            },
            {
              name: "--status",
              description: "Unresolved, resolved, or all (default: unresolved)",
              args: {
                name: "status",
              },
            },
            {
              name: "--page-path",
              description: "Filter by recorded page path or glob (repeatable)",
              args: {
                name: "path",
                template: "filepaths",
              },
              isRepeatable: true,
            },
            {
              name: "--page",
              description: "Filter by recorded page path or glob",
              args: {
                name: "path",
                template: "filepaths",
              },
              isRepeatable: true,
              deprecated: true,
            },
            {
              name: "--author",
              description: "Filter by author user ID, or `me` (repeatable)",
              args: {
                name: "user",
              },
              isRepeatable: true,
            },
            {
              name: "--content",
              description: "Filter by CMS content ID (repeatable)",
              args: {
                name: "content",
              },
              isRepeatable: true,
            },
            {
              name: "--content-id",
              description: "Deprecated alias for `--content`",
              args: {
                name: "id",
              },
              isRepeatable: true,
              deprecated: true,
            },
            {
              name: ["-q", "--query"],
              description: "Search comment content",
              args: {
                name: "text",
              },
            },
            {
              name: "--search",
              description: "Deprecated alias for `--query`",
              args: {
                name: "text",
              },
              deprecated: true,
            },
            limitOption,
            nextOption,
            formatOption,
            jsonOption,
          ],
        },
        {
          name: ["inspect", "get"],
          description: "Show a comment thread with its full conversation",
          args: {
            name: "thread",
            isOptional: true,
          },
          options: [
            projectOption2,
            {
              name: "--context",
              description: "Include framework and device context",
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "open",
          description: "Open a comment thread on vercel.com",
          args: {
            name: "thread",
          },
          options: [projectOption2],
        },
        {
          name: "reply",
          description: "Reply to a comment thread",
          args: {
            name: "thread",
          },
          options: [
            projectOption2,
            {
              name: "--message",
              description: "Markdown message content",
              args: {
                name: "text",
              },
            },
            {
              name: "--file",
              description:
                "Read Markdown content from a file; use `-` for stdin",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
            {
              name: "--attach",
              description: "Attach a file by https URL (repeatable, max 10)",
              args: {
                name: "url",
              },
              isRepeatable: true,
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "resolve",
          description:
            "Resolve comment threads, optionally with a closing reply",
          args: {
            name: "thread",
            isVariadic: true,
          },
          options: [
            projectOption2,
            {
              name: "--message",
              description: "Markdown message content",
              args: {
                name: "text",
              },
            },
            yesOption,
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "reopen",
          description: "Reopen resolved comment threads",
          args: {
            name: "thread",
            isVariadic: true,
          },
          options: [projectOption2, yesOption, formatOption, jsonOption],
        },
        {
          name: ["update", "edit"],
          description:
            "Update a comment message while preserving its attachments",
          args: [
            {
              name: "thread",
            },
            {
              name: "message-id",
            },
          ],
          options: [
            projectOption2,
            {
              name: "--message",
              description: "Markdown message content",
              args: {
                name: "text",
              },
            },
            {
              name: "--file",
              description:
                "Read Markdown content from a file; use `-` for stdin",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: ["delete", "rm", "del"],
          description: "Delete a comment message",
          args: [
            {
              name: "thread",
            },
            {
              name: "message-id",
            },
          ],
          options: [projectOption2, yesOption, formatOption, jsonOption],
        },
      ],
    },
    {
      name: ["crons", "cron"],
      description: "Manage cron jobs for a project",
      subcommands: [
        {
          name: "add",
          description: "Add a cron job to vercel.json",
          options: [
            {
              name: "--path",
              description:
                "The API route path for the cron job (must start with /)",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
            {
              name: "--schedule",
              description: 'The cron schedule expression (e.g. "0 10 * * *")',
              args: {
                name: "expression",
              },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List all cron jobs for a project",
          options: [formatOption, jsonOption, projectOption],
        },
        {
          name: "run",
          description: "Trigger a cron job to run immediately",
          args: {
            name: "path",
            isOptional: true,
            template: "filepaths",
          },
          options: [projectOption],
        },
      ],
    },
    {
      name: "curl",
      description: "Request deployments with protection bypass",
      args: {
        name: "path",
        template: "filepaths",
      },
      options: [
        yesOption4,
        {
          name: "--deployment",
          description: "The deployment ID or URL to target",
          args: {
            name: "deployment",
          },
        },
        {
          name: "--protection-bypass",
          description:
            "Protection bypass secret for accessing protected deployments",
          args: {
            name: "secret",
          },
        },
        {
          name: "--trace",
          description:
            "Capture a session trace for the request and print the trace request id",
        },
        {
          name: "--json",
          description:
            "With --trace, emit { response, requestId } as JSON on stdout",
        },
      ],
    },
    {
      name: ["daemons", "daemon"],
      description: "Manage daemons for a project",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List all daemons of a project environment",
          options: [
            projectOption,
            environmentOption2,
            {
              name: ["-n", "--limit"],
              description: "Max daemons (default: all, max: 100)",
              args: {
                name: "number",
              },
            },
            nextOption,
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "inspect",
          description: "Show a daemon's configuration and instance readiness",
          args: {
            name: "daemon",
          },
          options: [
            projectOption,
            environmentOption2,
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "scale",
          description: "Set instance counts by region (e.g. iad1=3 fra1=1)",
          args: [
            {
              name: "daemon",
            },
            {
              name: "overrides",
              isOptional: true,
              isVariadic: true,
            },
          ],
          options: [
            projectOption,
            environmentOption2,
            {
              name: "--reset",
              description: "Remove the overrides and use the configured counts",
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: ["instances", "instance"],
          description: "Manage daemon instances",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List all daemon instances, for one or all daemons",
              args: {
                name: "daemon",
                isOptional: true,
              },
              options: [
                projectOption,
                environmentOption2,
                formatOption,
                jsonOption,
              ],
            },
            {
              name: "inspect",
              description:
                "Show the details and usage metrics of a daemon instance",
              args: {
                name: "instance",
              },
              options: [
                projectOption,
                environmentOption2,
                {
                  name: ["-s", "--since"],
                  description: "Start of the metrics (default: 1h)",
                  args: {
                    name: "time",
                  },
                },
                untilOption,
                formatOption,
                jsonOption,
              ],
            },
            {
              name: "restart",
              description:
                "Restart a daemon instance: SIGTERM, then a new container",
              args: {
                name: "instance",
              },
              options: [
                projectOption,
                environmentOption2,
                formatOption,
                jsonOption,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "drives",
      description: "Manage persistent drives for a project",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List drives for a project",
          options: [
            projectOption,
            jsonOption,
            {
              name: ["-n", "--limit"],
              description: "Number of drives to return, up to 50 (default: 50)",
              args: {
                name: "number",
              },
            },
            nextOption,
            {
              name: "--name-prefix",
              description: "Filter by name prefix and sort by name",
              args: {
                name: "prefix",
              },
            },
            {
              name: "--sort-order",
              description: "Sort order: asc or desc (default: desc)",
              args: {
                name: "order",
                suggestions: ["asc", "desc"],
              },
            },
          ],
        },
        {
          name: "get-or-create",
          description: "Create a drive if it does not exist, or retrieve it",
          args: {
            name: "name",
          },
          options: [
            projectOption,
            jsonOption,
            {
              name: "--max-size",
              description:
                "Maximum size in bytes or binary units, such as 200GiB or 2TiB. Fixed at creation (default: 1 TiB, or 1 GiB on Hobby)",
              args: {
                name: "size",
              },
            },
            {
              name: "--region",
              description: "Region where the drive is created (default: iad1)",
              args: {
                name: "region",
              },
            },
          ],
        },
        {
          name: "fork",
          description: "Fork a drive with its data, maximum size, and region",
          args: [
            {
              name: "drive",
            },
            {
              name: "name",
            },
          ],
          options: [projectOption, jsonOption],
        },
        {
          name: ["delete", "rm", "remove", "del"],
          description: "Permanently delete one or more unattached drives",
          args: {
            name: "name",
            isVariadic: true,
          },
          options: [
            projectOption,
            jsonOption,
            {
              name: "--confirm-name",
              description:
                "Approve deletion by repeating this option for each drive name",
              args: {
                name: "name",
              },
              isRepeatable: true,
            },
            {
              name: "--effects-digest",
              description:
                "The effects digest from the preview. Agents must pass it; nothing changes if the effects changed since",
              args: {
                name: "digest",
              },
            },
          ],
        },
      ],
      options: [jsonOption],
    },
    {
      name: "deploy",
      description: "Deploy your project to Vercel",
      args: {
        name: "project-path",
        isOptional: true,
        template: "folders",
      },
      options: [
        {
          name: "--force",
          description: "Force a new deployment even if nothing has changed",
        },
        {
          name: "--with-cache",
          description: 'Retain build cache when using "--force"',
        },
        {
          name: "--env",
          description:
            "Specify environment variables during run-time (e.g. `--env KEY1=value1 --env KEY2=value2`)",
          args: {
            name: "key=value",
          },
          isRepeatable: true,
        },
        {
          name: "--build-env",
          description:
            "Specify environment variables during build-time (e.g. `--build-env KEY1=value1 --build-env KEY2=value2`)",
          args: {
            name: "key=value",
          },
          isRepeatable: true,
        },
        {
          name: "--turbo",
          description: "Use a Turbo build machine for this deployment",
        },
        {
          name: "--meta",
          description:
            "Specify metadata for the deployment (e.g. `--meta KEY1=value1 --meta KEY2=value2`)",
          args: {
            name: "key=value",
          },
          isRepeatable: true,
        },
        {
          name: "--regions",
          description: "Set default regions to enable the deployment on",
          args: {
            name: "region",
          },
        },
        {
          name: "--prebuilt",
          description: "Use in combination with `vc build`",
        },
        {
          name: "--prod",
          description:
            "Create a production deployment (shorthand for `--environment production`)",
        },
        {
          name: "--temporary",
          description: "Create a temporary deployment without logging in",
        },
        {
          name: "--delete-project-after",
          description:
            "Create a temporary project that is deleted automatically after 1h, 1d, 1w, 2w, or 30d",
          args: {
            name: "duration",
          },
        },
        archiveOption,
        {
          name: "--no-wait",
          description: "Don't wait for the deployment to finish",
        },
        {
          name: "--verify",
          description:
            "Load the deployment URL once it is ready and report the status code, size, and page title, even with Deployment Protection on (creates the project's Protection Bypass for Automation secret if missing)",
        },
        {
          name: "--dry",
          description:
            "Inspect the detected framework preset and source files without uploading or creating a deployment",
        },
        {
          name: "--create-if-missing",
          description: "Create the --project if it doesn't exist yet",
        },
        {
          name: "--skip-domain",
          description:
            "Disable the automatic promotion (aliasing) of the relevant domains to a new production deployment",
        },
        {
          name: ["-y", "--yes"],
          description: "Use default options to skip all prompts",
        },
        {
          name: "--logs",
          description: "Print the build logs",
        },
        {
          name: "--guidance",
          description:
            "Receive command suggestions once deployment is complete",
        },
        {
          name: "--no-logs",
          description: "Do not print the build logs",
          deprecated: true,
        },
        {
          name: ["-n", "--name"],
          args: {
            name: "name",
          },
          deprecated: true,
        },
        {
          name: "--no-clipboard",
          deprecated: true,
        },
        {
          name: "--environment",
          description:
            "Environment to deploy to: production, preview, or a custom environment",
          args: {
            name: "environment",
            suggestions: ["production", "preview"],
          },
        },
        targetOption,
        formatOption,
        jsonOption,
        confirmOption,
        {
          name: ["-p", "--project"],
          description:
            "Project name or ID to deploy to, without linking this directory (default: linked project)",
          args: {
            name: "name-or-id",
          },
        },
      ],
      subcommands: [
        {
          name: "init",
          description: "Create a manual deployment that can be continued later",
          options: [
            {
              name: "--force",
              description: "Force a new deployment even if nothing has changed",
            },
            {
              name: "--with-cache",
              description: 'Retain build cache when using "--force"',
            },
            {
              name: "--env",
              description:
                "Specify environment variables during run-time (e.g. `--env KEY1=value1 --env KEY2=value2`)",
              args: {
                name: "key=value",
              },
              isRepeatable: true,
            },
            {
              name: "--build-env",
              description:
                "Specify environment variables during build-time (e.g. `--build-env KEY1=value1 --build-env KEY2=value2`)",
              args: {
                name: "key=value",
              },
              isRepeatable: true,
            },
            {
              name: "--meta",
              description:
                "Specify metadata for the deployment (e.g. `--meta KEY1=value1 --meta KEY2=value2`)",
              args: {
                name: "key=value",
              },
              isRepeatable: true,
            },
            {
              name: "--regions",
              description: "Set default regions to enable the deployment on",
              args: {
                name: "region",
              },
            },
            {
              name: "--prod",
              description:
                "Create a production deployment (shorthand for `--environment production`)",
            },
            archiveOption,
            {
              name: "--skip-domain",
              description:
                "Disable the automatic promotion (aliasing) of the relevant domains to a new production deployment",
            },
            {
              name: ["-y", "--yes"],
              description: "Use default options to skip all prompts",
            },
            {
              name: "--environment",
              description:
                "Environment to deploy to: production, preview, or a custom environment",
              args: {
                name: "environment",
                suggestions: ["production", "preview"],
              },
            },
            targetOption,
            formatOption,
            jsonOption,
            confirmOption,
            projectOption,
          ],
          hidden: true,
        },
        {
          name: "continue",
          description:
            "Continue a manual deployment by uploading build outputs",
          options: [
            {
              name: "--deployment",
              description: "The deployment ID to continue (e.g. dpl_xxx)",
              args: {
                name: "deployment",
              },
            },
            idOption,
            archiveOption,
            {
              name: "--error",
              description: "Mark the deployment as errored with a message",
              args: {
                name: "message",
              },
            },
          ],
          hidden: true,
        },
        {
          name: "describe",
          description:
            "Prepare deployment functions for provisioning in your AWS account",
          options: [
            {
              name: "--deployment",
              description:
                "Deployment ID used with vercel build --deployment (required)",
              args: {
                name: "deployment",
              },
            },
            idOption,
            {
              name: "--aws-account-id",
              description:
                "12-digit AWS account ID for provisioning (required)",
              args: {
                name: "aws-account",
              },
            },
            jsonOption,
          ],
          hidden: true,
        },
      ],
    },
    {
      name: ["deploy-hooks", "deploy-hook"],
      description: "Manage deploy hooks for Git-triggered builds",
      subcommands: [
        {
          name: ["list", "ls"],
          description:
            "List deploy hooks for a project (anyone with a hook URL can trigger a deployment)",
          options: [formatOption, jsonOption, projectOption],
        },
        {
          name: ["create", "add"],
          description:
            "Create a deploy hook for a Git branch (anyone with the URL can trigger a deployment)",
          args: {
            name: "name",
            isOptional: true,
          },
          options: [
            {
              name: "--git-branch",
              description:
                "Git branch to deploy when the hook URL is triggered",
              args: {
                name: "branch",
              },
            },
            {
              name: ["-r", "--ref"],
              description: "Deprecated alias for `--git-branch`",
              args: {
                name: "branch",
              },
              deprecated: true,
            },
            projectOption,
          ],
        },
        {
          name: ["delete", "rm", "del", "remove"],
          description: "Delete a deploy hook by id",
          args: {
            name: "id",
          },
          options: [
            projectOption,
            {
              name: ["-y", "--yes"],
              description:
                "Skip the confirmation prompt when deleting a deploy hook",
            },
          ],
        },
      ],
    },
    {
      name: ["dev", "develop"],
      description: "Starts the `vercel dev` server",
      args: {
        name: "dir",
        isOptional: true,
        template: "folders",
      },
      options: [
        {
          name: "--listen",
          description:
            "Specify a URI endpoint on which to listen (default: 0.0.0.0:3000)",
          args: {
            name: "uri",
          },
        },
        {
          name: "--local",
          description:
            "Start the dev server without linking to a Vercel project",
        },
        {
          name: "--queue-port",
          description:
            "Specify the local Vercel Queues server port (default: 4782)",
          args: {
            name: "port",
          },
        },
        {
          name: "--runtime-cache-port",
          description:
            "Specify the local Runtime Cache server port (default: 4783)",
          args: {
            name: "port",
          },
        },
        {
          name: "--tunnel",
          hidden: true,
        },
        {
          name: "--schedules-port",
          description:
            "Specify the local Vercel Schedules server port (default: 4784)",
          args: {
            name: "port",
          },
        },
        yesOption,
        {
          name: ["-p", "--port"],
          args: {
            name: "port",
          },
          deprecated: true,
        },
        confirmOption,
        {
          name: "--project",
          description: "Project name or ID (default: linked project)",
          args: {
            name: "name-or-id",
          },
        },
      ],
    },
    {
      name: "dns",
      description: "Manage DNS records for your domains",
      subcommands: [
        {
          name: "add",
          description: "Add a DNS record",
          args: [
            {
              name: "domain",
              generators: domainList,
            },
            {
              name: "details",
              description: "Record name, type, and value",
            },
          ],
        },
        {
          name: "import",
          description: "Import a DNS zone file",
          args: [
            {
              name: "domain",
              generators: domainList,
            },
            {
              name: "zonefile",
              template: "filepaths",
            },
          ],
        },
        {
          name: "inspect",
          description: "Show a DNS record in full using its ID",
          args: {
            name: "id",
          },
          options: [formatOption, jsonOption],
        },
        {
          name: ["list", "ls"],
          description: "List DNS entries",
          args: {
            name: "domain",
            isOptional: true,
            generators: domainList,
          },
          options: [limitOption, nextOption, formatOption, jsonOption],
        },
        {
          name: ["remove", "rm"],
          description: "Remove a DNS entry using its ID",
          args: {
            name: "id",
          },
          options: [
            {
              name: "--confirm-name",
              description: "Approve the removal by naming the DNS record ID",
              args: {
                name: "name",
              },
            },
            yesOption2,
          ],
        },
        {
          name: "update",
          description: "Update an existing DNS record using its ID",
          args: {
            name: "id",
          },
          options: [
            {
              name: "--name",
              description:
                "New name of the DNS record ('@' refers to the domain)",
              args: {
                name: "name",
              },
            },
            {
              name: "--type",
              description:
                "New type of the DNS record (A, AAAA, ALIAS, CAA, CNAME, MX, SRV, TXT)",
              args: {
                name: "type",
              },
            },
            {
              name: "--value",
              description: "New value of the DNS record",
              args: {
                name: "value",
              },
            },
            {
              name: "--ttl",
              description:
                "New Time to live (TTL) of the DNS record, in seconds",
              args: {
                name: "seconds",
              },
            },
            {
              name: "--mx-priority",
              description: "New priority of the MX record",
              args: {
                name: "priority",
              },
            },
            {
              name: "--srv-priority",
              description: "New priority of the SRV record",
              args: {
                name: "priority",
              },
            },
            {
              name: "--srv-weight",
              description: "New weight of the SRV record",
              args: {
                name: "weight",
              },
            },
            {
              name: "--srv-port",
              description: "New port of the SRV record",
              args: {
                name: "port",
              },
            },
            {
              name: "--srv-target",
              description: "New target of the SRV record",
              args: {
                name: "target",
              },
            },
            {
              name: "--comment",
              description:
                "A comment to add context on what this DNS record is for",
              args: {
                name: "text",
              },
            },
          ],
        },
      ],
    },
    {
      name: ["doctor", "dr"],
      description: "Check your CLI setup and show how to fix problems",
      options: [jsonOption],
    },
    {
      name: ["domains", "domain"],
      description: "Manage domains",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "Show all domains in a list",
          options: [limitOption, nextOption, formatOption, jsonOption],
        },
        {
          name: "inspect",
          description: "Displays information related to a domain",
          args: {
            name: "domain",
            generators: domainList,
          },
          options: [formatOption, jsonOption],
        },
        {
          name: "add",
          description: "Add a domain you already own to your team or a project",
          args: [
            {
              name: "domain",
              description: "Domain name, such as example.com",
            },
            {
              name: "project",
              description:
                "Optional project name; omit to add an apex domain to the team",
              isOptional: true,
            },
          ],
          options: [
            {
              name: "--force",
              description:
                "Remove the current assignment, then add the domain to the requested project (a failed add can leave it unassigned)",
            },
            {
              name: "--redirect",
              description:
                "Set a domain redirect: send requests for this domain to another domain on the project",
              args: {
                name: "domain",
              },
            },
            {
              name: "--redirect-status-code",
              description:
                "Status code for --redirect: 301, 302, 307, or 308 (default: the current code, or 307, temporary, for a new redirect)",
              args: {
                name: "number",
                suggestions: ["301", "302", "307", "308"],
              },
            },
            jsonOption,
          ],
        },
        {
          name: "buy",
          description: "Purchase a new domain name",
          args: {
            name: "domain",
          },
          options: [
            {
              name: "--amount",
              description:
                "Exact purchase price a person approved, in USD, as `vercel domains price <domain>` shows it",
              args: {
                name: "usd",
              },
            },
            {
              name: "--use-billing-details",
              description:
                "Fill registrant details you don't pass from the team's billing info (email and address)",
            },
            {
              name: "--first-name",
              description: "Registrant first name",
              args: {
                name: "text",
              },
            },
            {
              name: "--last-name",
              description: "Registrant last name",
              args: {
                name: "text",
              },
            },
            {
              name: "--email",
              description: "Registrant email",
              args: {
                name: "text",
              },
            },
            {
              name: "--phone",
              description:
                "Registrant phone with country code, such as +11122233344",
              args: {
                name: "text",
              },
            },
            {
              name: "--address",
              description: "Registrant street address",
              args: {
                name: "text",
              },
            },
            {
              name: "--city",
              description: "Registrant city",
              args: {
                name: "text",
              },
            },
            {
              name: "--state",
              description: "Registrant state or province",
              args: {
                name: "text",
              },
            },
            {
              name: "--zip",
              description: "Registrant postal or ZIP code",
              args: {
                name: "text",
              },
            },
            {
              name: "--country",
              description: "Registrant 2-letter country code, such as US",
              args: {
                name: "text",
              },
            },
            {
              name: "--company",
              description: "Registrant company name (optional)",
              args: {
                name: "text",
              },
            },
            {
              name: "--auto-renew",
              description:
                "Renew the domain automatically at the end of each term",
            },
            {
              name: "--no-auto-renew",
              description: "Don't renew the domain automatically",
            },
            {
              name: "--timeout",
              description:
                "How long to wait for the order to finish, counted from when it is sent, as a duration with a unit such as 30s or 2m (default: 1m)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--no-wait",
              description:
                "Don't wait for the order to finish: exit once it's accepted, with the order ID",
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "check",
          description: "Check whether one or more domains are available to buy",
          args: {
            name: "domain",
            isVariadic: true,
          },
          options: [formatOption, jsonOption],
        },
        {
          name: "move",
          description: "Move ownership of a domain name to another Vercel Team",
          args: [
            {
              name: "domain",
              generators: domainList,
            },
            {
              name: "destination",
            },
          ],
          options: [
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt when moving a domain",
            },
          ],
        },
        {
          name: "price",
          description: "Show registrar price quotes for one or more domains",
          args: {
            name: "domain",
            isVariadic: true,
          },
          options: [formatOption, jsonOption],
        },
        {
          name: "search",
          description:
            "Discover domain-name candidates from a keyword or fragment",
          args: {
            name: "query",
          },
          options: [
            {
              name: "--available",
              description: "Show only candidates available to register",
            },
            {
              name: "--order",
              description:
                "Order candidates by relevance, alphabetical order, or length (default: relevance)",
              args: {
                name: "order",
              },
            },
            {
              name: ["-n", "--limit"],
              description:
                "Number of candidates to check per page (default: 20, max: 200)",
              args: {
                name: "number",
              },
            },
            {
              name: "--tld",
              description: "Filter candidates by exact TLD. Repeatable",
              args: {
                name: "tld",
              },
              isRepeatable: true,
            },
            {
              name: "--next",
              description: "Show the next page of candidates",
              args: {
                name: "cursor",
              },
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "transfer-in",
          description: "Transfer in a domain name to Vercel",
          args: {
            name: "domain",
          },
          options: [
            {
              name: "--code",
              args: {
                name: "code",
              },
              hidden: true,
            },
          ],
        },
        {
          name: ["remove", "rm"],
          description: "Remove ownership of a domain name from a Vercel Team",
          args: {
            name: "domain",
            generators: domainList,
          },
          options: [
            {
              name: "--confirm-name",
              description: "Approve the removal by naming the domain",
              args: {
                name: "name",
              },
            },
            yesOption2,
            jsonOption,
          ],
        },
        {
          name: "renew",
          description:
            "Renew a registered domain before it expires (charges your account)",
          args: {
            name: "domain",
            generators: domainList,
          },
          options: [
            {
              name: "--amount",
              description:
                "Exact renewal price a person approved, in USD, as `vercel domains price <domain>` shows it",
              args: {
                name: "usd",
              },
            },
            {
              name: "--timeout",
              description:
                "How long to wait for the order to finish, counted from when it is sent, as a duration with a unit such as 30s or 2m (default: 1m)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--no-wait",
              description:
                "Don't wait for the order to finish: exit once it's accepted, with the order ID",
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "auto-renew",
          description:
            "Turn automatic renewal on or off for a registered domain",
          options: [formatOption, jsonOption],
          subcommands: [
            {
              name: "enable",
              description: "Turn on automatic renewal for a registered domain",
              args: {
                name: "domain",
                generators: domainList,
              },
              options: [formatOption, jsonOption],
            },
            {
              name: "disable",
              description: "Turn off automatic renewal for a registered domain",
              args: {
                name: "domain",
                generators: domainList,
              },
              options: [formatOption, jsonOption],
            },
          ],
        },
        {
          name: "verify",
          description:
            "Check a domain's DNS configuration and explain what to fix when it is misconfigured or unverified",
          args: {
            name: "domain",
            generators: domainList,
          },
          options: [
            projectOption,
            {
              name: "--strict",
              description:
                "Check DNS for the exact domain only, without falling back to the parent zone configuration",
            },
            formatOption,
            jsonOption,
          ],
        },
      ],
    },
    {
      name: ["drains", "drain"],
      description:
        "Manage drains for logs, traces, analytics, and speed insights",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List drains",
          options: [
            {
              name: ["-p", "--project"],
              description: "Only list drains that send data from this project",
              args: {
                name: "name-or-id",
              },
            },
            limitOption,
            nextOption,
            jsonOption,
          ],
        },
        {
          name: "inspect",
          description: "Show a drain",
          args: {
            name: "drain",
          },
          options: [
            {
              name: "--show-full-url",
              description:
                "Show the full endpoint URL, which can hold credentials (default: host only)",
            },
            jsonOption,
          ],
        },
        {
          name: "create",
          description: "Create a drain",
          options: [
            {
              name: "--name",
              description: "Name of the drain (required)",
              args: {
                name: "name",
              },
            },
            {
              name: "--url",
              description:
                "Endpoint that receives the data (http or https) (required)",
              args: {
                name: "url",
              },
            },
            {
              name: "--type",
              description:
                "Data to send: logs, traces, analytics, or speed-insights (required)",
              args: {
                name: "type",
                suggestions: ["logs", "traces", "analytics", "speed-insights"],
              },
            },
            {
              name: "--encoding",
              description:
                "Body encoding: json or ndjson, or json or proto for traces (default: json)",
              args: {
                name: "encoding",
              },
            },
            {
              name: "--header",
              description: "Header sent with each request (repeatable)",
              args: {
                name: "key:value",
              },
              isRepeatable: true,
            },
            {
              name: "--secret",
              description:
                "Secret that signs each request in the x-vercel-signature header; use - to read it from stdin",
              args: {
                name: "value",
              },
            },
            {
              name: ["-p", "--project"],
              description:
                "Only send data from these projects, comma-separated",
              args: {
                name: "name-or-id",
              },
            },
            {
              name: "--source",
              description:
                "Log source to send for logs drains, repeatable: lambda, edge, static, external, build, firewall, or redirect (default: all)",
              args: {
                name: "source",
                suggestions: [
                  "lambda",
                  "edge",
                  "static",
                  "external",
                  "build",
                  "firewall",
                  "redirect",
                ],
              },
              isRepeatable: true,
            },
            {
              name: ["-e", "--environment"],
              description:
                "Only send data from this environment, for logs drains, repeatable: production or preview (default: all)",
              args: {
                name: "environment",
                suggestions: ["production", "preview"],
              },
              isRepeatable: true,
            },
            {
              name: "--sample-rate",
              description:
                "Percentage of data to send, from 1 to 100 (default: 100)",
              args: {
                name: "percent",
              },
            },
            jsonOption,
          ],
        },
        {
          name: "update",
          description: "Update a drain; omitted options stay unchanged",
          args: {
            name: "drain",
          },
          options: [
            {
              name: "--name",
              description: "Name of the drain",
              args: {
                name: "name",
              },
            },
            {
              name: "--url",
              description: "Endpoint that receives the data (http or https)",
              args: {
                name: "url",
              },
            },
            {
              name: "--encoding",
              description:
                "Body encoding: json or ndjson, or json or proto for traces (default: the current encoding)",
              args: {
                name: "encoding",
              },
            },
            {
              name: "--header",
              description:
                "Header sent with each request; replaces all headers",
              args: {
                name: "key:value",
              },
              isRepeatable: true,
            },
            {
              name: "--secret",
              description:
                "Replace the signing secret; use - to read it from stdin",
              args: {
                name: "value",
              },
            },
            {
              name: ["-p", "--project"],
              description:
                "Only send data from these projects, comma-separated; replaces the projects",
              args: {
                name: "name-or-id",
              },
            },
            {
              name: ["-a", "--all"],
              description: "Send data from all projects",
            },
            {
              name: "--source",
              description:
                "Log source to send for logs drains, repeatable; replaces the sources",
              args: {
                name: "source",
              },
              isRepeatable: true,
            },
            {
              name: ["-e", "--environment"],
              description:
                "Only send data from this environment, for logs drains: production or preview; replaces the environments",
              args: {
                name: "environment",
                suggestions: ["production", "preview"],
              },
              isRepeatable: true,
            },
            {
              name: "--sample-rate",
              description: "Percentage of data to send, from 1 to 100",
              args: {
                name: "percent",
              },
            },
            jsonOption,
          ],
        },
        {
          name: "pause",
          description:
            "Pause a drain; data generated while it is paused is not sent",
          args: {
            name: "drain",
          },
          options: [
            {
              name: ["-y", "--yes"],
              description: "Pause without a confirmation prompt",
            },
            jsonOption,
          ],
        },
        {
          name: "resume",
          description: "Resume a paused drain",
          args: {
            name: "drain",
          },
          options: [jsonOption],
        },
        {
          name: ["delete", "rm", "del"],
          description: "Delete a drain",
          args: {
            name: "drain",
          },
          options: [
            {
              name: ["-y", "--yes"],
              description: "Delete without a confirmation prompt",
            },
            jsonOption,
          ],
        },
      ],
    },
    {
      name: "env",
      description: "Interact with Environment Variables for a Project",
      subcommands: [
        {
          name: "add",
          description: "Add an Environment Variable",
          args: {
            name: "name",
          },
          options: [
            projectOption,
            {
              name: ["-e", "--environment"],
              description:
                "Environments to add the variable to; repeatable or comma-separated",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
              isRepeatable: true,
            },
            {
              name: "--git-branch",
              description:
                "Set the Git branch for a Preview Environment Variable",
              args: {
                name: "branch",
              },
            },
            {
              name: "--sensitive",
              description: "Store the value as a Secret",
            },
            {
              name: "--no-sensitive",
              description: "Store the value as Config",
            },
            {
              name: "--type",
              description:
                "Set the Environment Variable type (`config` or `secret`)",
              args: {
                name: "type",
                suggestions: ["config", "secret"],
              },
            },
            {
              name: "--visibility",
              description: "Deprecated alias for `--type`",
              args: {
                name: "visibility",
              },
              deprecated: true,
            },
            {
              name: "--force",
              description:
                "Overwrite an existing variable in the same environment",
            },
            {
              name: ["-y", "--yes"],
              description:
                "Accept default choices when adding an Environment Variable",
            },
            {
              name: "--guidance",
              description: "Show command suggestions after completion",
            },
            {
              name: "--value",
              description:
                "Set the variable value for non-interactive use; otherwise use stdin or the prompt",
              args: {
                name: "value",
              },
            },
            jsonOption,
          ],
        },
        {
          name: ["list", "ls"],
          description: "List all Environment Variables for a Project",
          options: [
            {
              name: ["-e", "--environment"],
              description: "List only the variables for this environment",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
            },
            {
              name: "--git-branch",
              description: "List only the variables for this Git branch",
              args: {
                name: "branch",
              },
            },
            {
              name: ["-F", "--format"],
              description:
                "Specify the output format (json, including readable Environment Variable values)",
              args: {
                name: "format",
                suggestions: ["json"],
              },
              deprecated: true,
            },
            {
              name: "--json",
              description:
                "Output as JSON, including readable Environment Variable values",
            },
            projectOption,
            {
              name: "--guidance",
              description:
                "Receive command suggestions once command is complete",
            },
          ],
        },
        {
          name: "pull",
          description:
            "Pull Environment Variables into a local file (default: .env.local)",
          args: {
            name: "filename",
            isOptional: true,
            template: "filepaths",
          },
          options: [
            projectOption,
            {
              name: ["-e", "--environment"],
              description:
                "Select the environment to pull (default: development)",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
            },
            {
              name: "--git-branch",
              description:
                "Specify the Git branch to pull specific Environment Variables for",
              args: {
                name: "branch",
              },
            },
            {
              name: "--deployment",
              description:
                "Pull Environment Variables for a specific deployment (e.g. dpl_xxx)",
              args: {
                name: "deployment",
              },
            },
            idOption,
            {
              name: ["-y", "--yes"],
              description:
                "Skip the confirmation prompt when overwriting an existing file",
            },
          ],
        },
        {
          name: ["remove", "rm"],
          description: "Remove an Environment Variable",
          args: {
            name: "name",
            generators: envVarList,
          },
          options: [
            projectOption,
            {
              name: ["-e", "--environment"],
              description: "Remove the variable from this environment only",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
            },
            {
              name: "--git-branch",
              description: "Remove the variable for this Git branch only",
              args: {
                name: "branch",
              },
            },
            {
              name: "--confirm-name",
              description: "Approve the removal by naming the variable",
              args: {
                name: "name",
              },
            },
            yesOption2,
            jsonOption,
          ],
        },
        {
          name: "run",
          description:
            "Run a command with environment variables from the linked Vercel project",
          args: {
            name: "command",
            isVariadic: true,
          },
          options: [
            projectOption,
            {
              name: ["-e", "--environment"],
              description:
                "Specify the environment to pull variables from (default: development)",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
            },
            {
              name: "--git-branch",
              description:
                "Specify the Git branch to pull specific Environment Variables for",
              args: {
                name: "branch",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update the value of an existing Environment Variable",
          args: {
            name: "name",
            generators: envVarList,
          },
          options: [
            projectOption,
            {
              name: ["-e", "--environment"],
              description:
                "Pick the variable to update by an environment it covers",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
            },
            {
              name: "--git-branch",
              description: "Pick the variable to update by its Git branch",
              args: {
                name: "branch",
              },
            },
            {
              name: "--sensitive",
              description: "Store the updated value as a Secret",
            },
            {
              name: "--type",
              description:
                "Set the Environment Variable type (`config` or `secret`)",
              args: {
                name: "type",
                suggestions: ["config", "secret"],
              },
            },
            {
              name: "--visibility",
              description: "Deprecated alias for `--type`",
              args: {
                name: "visibility",
              },
              deprecated: true,
            },
            {
              name: ["-y", "--yes"],
              description:
                "Skip the confirmation prompt when updating an Environment Variable",
            },
            {
              name: "--value",
              description: "New value for the variable (non-interactive)",
              args: {
                name: "value",
              },
            },
          ],
        },
      ],
    },
    {
      name: "experiments",
      description: "Manage and analyze feature flag experiments",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List experiments for a project",
          options: [
            projectOption,
            {
              name: "--state",
              description: "Filter by draft, running, or completed state",
              args: {
                name: "state",
              },
            },
            formatOption,
          ],
          hidden: true,
        },
        {
          name: "inspect",
          description: "Display experiment settings and lifecycle details",
          args: {
            name: "experiment",
          },
          options: [projectOption, formatOption],
          hidden: true,
        },
        {
          name: "create",
          description: "Create a draft experiment and its feature flag",
          options: [
            projectOption,
            {
              name: "--file",
              description:
                "Read the JSON request body from a file or - for stdin",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            formatOption,
          ],
          hidden: true,
        },
        {
          name: "update",
          description: "Update experiment settings from a JSON file",
          args: {
            name: "experiment",
          },
          options: [
            projectOption,
            {
              name: "--file",
              description:
                "Read the JSON request body from a file or - for stdin",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: "--restart-analysis",
              description:
                "Start a new analysis epoch after updating a running experiment",
            },
            {
              name: "--keep-analysis",
              description:
                "Keep the current analysis epoch after updating a running experiment",
            },
            yesOption,
            formatOption,
          ],
          hidden: true,
        },
        {
          name: "start",
          description: "Start a draft experiment at a ramp percentage",
          args: {
            name: "experiment",
          },
          options: [
            projectOption,
            {
              name: "--ramp",
              description: "Set the percentage of eligible units enrolled",
              args: {
                name: "percentage",
              },
            },
            yesOption,
            formatOption,
          ],
          hidden: true,
        },
        {
          name: "set-ramp",
          description: "Change enrollment for a running experiment",
          args: {
            name: "experiment",
          },
          options: [
            projectOption,
            {
              name: "--ramp",
              description: "Set the percentage of eligible units enrolled",
              args: {
                name: "percentage",
              },
            },
            yesOption,
            formatOption,
          ],
          hidden: true,
        },
        {
          name: "restart-analysis",
          description:
            "Reset the measurement window while preserving enrollment",
          args: {
            name: "experiment",
          },
          options: [projectOption, yesOption, formatOption],
          hidden: true,
        },
        {
          name: "reseed-enrollment",
          description: "Randomize experiment enrollment with a new seed",
          args: {
            name: "experiment",
          },
          options: [projectOption, yesOption, formatOption],
          hidden: true,
        },
        {
          name: "return-to-draft",
          description: "Return an experiment to draft state",
          args: {
            name: "experiment",
          },
          options: [
            projectOption,
            {
              name: "--cause",
              description: "Record manual, guardrail, or srm as the stop cause",
              args: {
                name: "cause",
              },
            },
            {
              name: "--reason",
              description: "Record why the experiment returned to draft",
              args: {
                name: "text",
              },
            },
            yesOption,
            formatOption,
          ],
          hidden: true,
        },
        {
          name: "decide",
          description: "Complete an experiment with a winner or abandon it",
          args: {
            name: "experiment",
          },
          options: [
            projectOption,
            {
              name: "--winner",
              description: "Choose the winning variant ID",
              args: {
                name: "variant",
              },
            },
            {
              name: "--abandon",
              description: "Complete without a winning variant",
            },
            {
              name: "--rationale",
              description: "Record the decision rationale",
              args: {
                name: "text",
              },
            },
            yesOption,
            formatOption,
          ],
          hidden: true,
        },
        {
          name: "analyze",
          description:
            "Check experiment health and compare variants on every metric",
          args: {
            name: "experiment",
          },
          options: [
            projectOption,
            {
              name: "--exclude-contaminated",
              description:
                "Exclude units with conflicting experiment assignments",
            },
            {
              name: "--metric",
              description: "Use a metric alias as the primary timeseries",
              args: {
                name: "alias",
              },
            },
            {
              name: ["-e", "--environment"],
              description:
                "Environment to analyze: production, preview, or a custom environment (default: production)",
              args: {
                name: "environment",
                suggestions: ["production", "preview"],
              },
            },
            formatOption,
          ],
          hidden: true,
        },
        {
          name: "diagnose",
          description:
            "Show the latest exposures and metric events for an experiment",
          args: {
            name: "experiment",
          },
          options: [
            projectOption,
            {
              name: ["-n", "--limit"],
              description: "Set how many events to return, from 1 to 200",
              args: {
                name: "count",
              },
            },
            {
              name: "--exposures",
              description: "Show exposures; combine with --event to show both",
            },
            {
              name: "--event",
              description: "Show this metric event; repeatable",
              args: {
                name: "name",
              },
              isRepeatable: true,
            },
            {
              name: "--unit",
              description: "Show only rows for this experiment unit",
              args: {
                name: "value",
              },
            },
            {
              name: ["-s", "--since"],
              description:
                "Start time: ISO 8601 or relative, like 1h or 7d (default: experiment launch)",
              args: {
                name: "time",
              },
            },
            {
              name: ["-u", "--until"],
              description:
                "End time: ISO 8601 or relative; not with --follow (default: now)",
              args: {
                name: "time",
              },
            },
            {
              name: ["-f", "--follow"],
              description:
                "Stream experiment events as they arrive; not with --until",
            },
            {
              name: ["-e", "--environment"],
              description:
                "Environment to read: production, preview, or a custom environment (default: production)",
              args: {
                name: "environment",
                suggestions: ["production", "preview"],
              },
            },
            formatOption,
          ],
          hidden: true,
        },
        {
          name: "open",
          description: "Open an experiment in the Vercel dashboard",
          args: {
            name: "experiment",
            isOptional: true,
          },
          options: [
            projectOption,
            {
              name: "--tab",
              description: "Open the configuration or analysis tab",
              args: {
                name: "tab",
              },
            },
          ],
          hidden: true,
        },
        {
          name: ["delete", "rm", "del"],
          description: "Delete an experiment and release its feature flag",
          args: {
            name: "experiment",
          },
          options: [
            projectOption,
            {
              name: "--confirm",
              description:
                "Prove the experiment ID or slug for non-interactive deletion",
              args: {
                name: "experiment",
              },
            },
            formatOption,
          ],
          hidden: true,
        },
      ],
      hidden: true,
    },
    {
      name: "feedback",
      description:
        "Send bugs, friction, and feature requests to the Vercel team",
      args: {
        name: "note",
        isOptional: true,
      },
      options: [
        {
          name: "--field",
          description: "Named field (repeatable)",
          args: {
            name: "key=value",
          },
          isRepeatable: true,
        },
      ],
    },
    {
      name: "firewall",
      description: "Manage firewall rules and bypass settings",
      subcommands: [
        {
          name: "overview",
          description:
            "Show your project's firewall configuration with the last day of activity: traffic by action, the busiest rules, and alerts raised in the same window",
          options: [projectOption, jsonOption],
        },
        {
          name: "status",
          description:
            "Show firewall configuration in execution order, including managed rulesets and bypass paths",
          options: [projectOption, jsonOption],
        },
        {
          name: "diff",
          description:
            "Show draft changes that have been made but are not yet published to production",
          options: [projectOption, teamLevelOption, jsonOption],
        },
        {
          name: "publish",
          description:
            "Publish all draft firewall changes to production, making them live immediately",
          options: [
            projectOption,
            teamLevelOption,
            {
              name: "--confirm-name",
              description:
                "Approve publishing by naming the project, or the team with --team-level",
              args: {
                name: "name",
              },
            },
            {
              name: "--effects-digest",
              description: "The effects digest from the preview",
              args: {
                name: "digest",
              },
            },
            yesOption2,
          ],
        },
        {
          name: "discard",
          description:
            "Permanently discard all unpublished draft changes, reverting to the current production configuration",
          options: [projectOption, teamLevelOption, yesOption],
        },
        {
          name: "ip-blocks",
          description:
            "Manage IP blocking rules that deny access from specific addresses or ranges",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "List all IP blocking rules, including any unpublished draft changes",
              options: [projectOption, teamLevelOption, jsonOption],
            },
            {
              name: "block",
              description:
                "Block an IP address or CIDR range from accessing your project",
              args: {
                name: "ip",
              },
              options: [
                projectOption,
                teamLevelOption,
                {
                  name: "--hostname",
                  description:
                    "Scope block to a specific hostname (default: * for all hosts)",
                  args: {
                    name: "hostname",
                  },
                },
                {
                  name: "--notes",
                  description: "Add a note to the block rule",
                  args: {
                    name: "notes",
                  },
                },
                yesOption,
              ],
            },
            {
              name: ["unblock", "rm"],
              description:
                "Remove an IP blocking rule to allow the address to access your project again",
              args: {
                name: "id-or-ip",
              },
              options: [
                projectOption,
                teamLevelOption,
                {
                  name: "--hostname",
                  description:
                    "Narrow match to a specific hostname (useful when the same IP is blocked on multiple hosts)",
                  args: {
                    name: "hostname",
                  },
                },
                yesOption,
              ],
            },
          ],
        },
        {
          name: "rules",
          description:
            "Manage custom firewall rules that control how traffic is handled based on conditions",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "List managed bot rules and custom firewall rules, including unpublished draft changes",
              options: [
                projectOption,
                teamLevelOption,
                {
                  name: "--expand",
                  description: "Show full condition details for each rule",
                },
                jsonOption,
              ],
            },
            {
              name: "inspect",
              description:
                "Show a custom or managed bot rule, including conditions, action, and rate limit settings",
              args: {
                name: "name-or-id",
              },
              options: [projectOption, teamLevelOption, jsonOption],
            },
            {
              name: "add",
              description:
                "Create a new custom firewall rule using AI, an interactive builder, JSON, or command-line options",
              args: {
                name: "name",
                isOptional: true,
              },
              options: [
                projectOption,
                teamLevelOption,
                {
                  name: "--ai",
                  description:
                    "Generate rule from natural language (AI-powered)",
                  args: {
                    name: "ai",
                  },
                },
                {
                  name: "--data",
                  description: "Create rule from a JSON payload",
                  args: {
                    name: "json",
                  },
                },
                {
                  name: "--json",
                  args: {
                    name: "json",
                  },
                  deprecated: true,
                },
                {
                  name: "--condition",
                  description: "Condition as JSON (repeatable)",
                  args: {
                    name: "condition",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--or",
                  description: "Start a new OR group",
                },
                {
                  name: "--action",
                  description:
                    "Action: deny, challenge, log, bypass, rate_limit, redirect",
                  args: {
                    name: "action",
                    suggestions: [
                      "deny",
                      "challenge",
                      "log",
                      "bypass",
                      "rate_limit",
                      "redirect",
                    ],
                  },
                },
                {
                  name: "--duration",
                  description: "Action duration: 1m, 5m, 15m, 30m, 1h",
                  args: {
                    name: "duration",
                    suggestions: ["1m", "5m", "15m", "30m", "1h"],
                  },
                },
                {
                  name: "--description",
                  description: "Rule description (max 256 chars)",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--no-enable",
                  description: "Add the rule turned off (default: on)",
                },
                {
                  name: "--disabled",
                  description: "Deprecated alias for `--no-enable`",
                  deprecated: true,
                },
                {
                  name: "--rate-limit-algo",
                  description:
                    "Rate limit algorithm: fixed_window, token_bucket (default: fixed_window)",
                  args: {
                    name: "rate-limit-algo",
                    suggestions: ["fixed_window", "token_bucket"],
                  },
                },
                {
                  name: "--rate-limit-window",
                  description:
                    "Rate limit window in seconds, 10-3600 (required for rate_limit)",
                  args: {
                    name: "rate-limit-window",
                  },
                },
                {
                  name: "--rate-limit-requests",
                  description:
                    "Rate limit max requests per window, 1-10000000 (required for rate_limit)",
                  args: {
                    name: "rate-limit-requests",
                  },
                },
                {
                  name: "--rate-limit-keys",
                  description:
                    "Rate limit keys (repeatable): ip, ja4, header:name (default: ip)",
                  args: {
                    name: "rate-limit-keys",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--rate-limit-action",
                  description:
                    "Action when rate limit is exceeded: log, deny, challenge, rate_limit (default: rate_limit)",
                  args: {
                    name: "rate-limit-action",
                    suggestions: ["log", "deny", "challenge", "rate_limit"],
                  },
                },
                {
                  name: "--redirect-url",
                  description: "Redirect URL or path",
                  args: {
                    name: "redirect-url",
                  },
                },
                {
                  name: "--redirect-permanent",
                  description:
                    "Permanent redirect (301) (default: temporary, 307)",
                },
                yesOption,
              ],
            },
            {
              name: ["update", "edit"],
              description:
                "Update a custom rule or a managed bot rule action using AI, an interactive editor, JSON, or command-line options",
              args: {
                name: "name-or-id",
              },
              options: [
                projectOption,
                teamLevelOption,
                {
                  name: "--ai",
                  description:
                    "Describe changes using natural language (AI-powered)",
                  args: {
                    name: "ai",
                  },
                },
                {
                  name: "--data",
                  description: "Replace rule with a JSON payload",
                  args: {
                    name: "json",
                  },
                },
                {
                  name: "--json",
                  args: {
                    name: "json",
                  },
                  deprecated: true,
                },
                {
                  name: "--condition",
                  description: "Replace conditions as JSON (repeatable)",
                  args: {
                    name: "condition",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--or",
                  description: "Start a new OR condition group",
                },
                {
                  name: "--name",
                  description: "Rename the rule",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--action",
                  description:
                    "Change action: deny, challenge, log, bypass, rate_limit, redirect",
                  args: {
                    name: "action",
                    suggestions: [
                      "deny",
                      "challenge",
                      "log",
                      "bypass",
                      "rate_limit",
                      "redirect",
                    ],
                  },
                },
                {
                  name: "--category",
                  description:
                    "Select a category, such as ai-crawlers or ai-assistants",
                  args: {
                    name: "category",
                  },
                },
                {
                  name: "--duration",
                  description: "Change action duration: 1m, 5m, 15m, 30m, 1h",
                  args: {
                    name: "duration",
                    suggestions: ["1m", "5m", "15m", "30m", "1h"],
                  },
                },
                {
                  name: "--description",
                  description: 'Change description (use "" to clear)',
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--enable",
                  description: "Turn the rule on",
                },
                {
                  name: "--no-enable",
                  description: "Turn the rule off",
                },
                {
                  name: "--enabled",
                  description: "Deprecated alias for `--enable`",
                  deprecated: true,
                },
                {
                  name: "--disabled",
                  description: "Deprecated alias for `--no-enable`",
                  deprecated: true,
                },
                {
                  name: "--rate-limit-algo",
                  description:
                    "Rate limit algorithm: fixed_window, token_bucket",
                  args: {
                    name: "rate-limit-algo",
                    suggestions: ["fixed_window", "token_bucket"],
                  },
                },
                {
                  name: "--rate-limit-window",
                  description: "Rate limit window in seconds (10-3600)",
                  args: {
                    name: "rate-limit-window",
                  },
                },
                {
                  name: "--rate-limit-requests",
                  description:
                    "Rate limit max requests per window (1-10000000)",
                  args: {
                    name: "rate-limit-requests",
                  },
                },
                {
                  name: "--rate-limit-keys",
                  description:
                    "Rate limit keys (repeatable): ip, ja4, header:name",
                  args: {
                    name: "rate-limit-keys",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--rate-limit-action",
                  description:
                    "Action when rate limit is exceeded: log, deny, challenge, rate_limit (default: rate_limit)",
                  args: {
                    name: "rate-limit-action",
                    suggestions: ["log", "deny", "challenge", "rate_limit"],
                  },
                },
                {
                  name: "--redirect-url",
                  description: "Redirect URL or path",
                  args: {
                    name: "redirect-url",
                  },
                },
                {
                  name: "--redirect-permanent",
                  description:
                    "Permanent redirect (301) (default: temporary, 307)",
                },
                yesOption,
              ],
            },
            {
              name: "enable",
              description: "Enable a disabled custom firewall rule",
              args: {
                name: "name-or-id",
              },
              options: [projectOption, teamLevelOption, yesOption],
            },
            {
              name: "disable",
              description: "Disable a custom firewall rule without removing it",
              args: {
                name: "name-or-id",
              },
              options: [projectOption, teamLevelOption, yesOption],
            },
            {
              name: ["remove", "rm", "delete"],
              description: "Remove a custom firewall rule",
              args: {
                name: "name-or-id",
              },
              options: [projectOption, teamLevelOption, yesOption],
            },
            {
              name: ["move", "reorder"],
              description:
                "Change the priority order of a custom firewall rule",
              args: {
                name: "name-or-id",
              },
              options: [
                projectOption,
                teamLevelOption,
                {
                  name: "--position",
                  description: "Target position (1-based)",
                  args: {
                    name: "position",
                  },
                },
                {
                  name: "--first",
                  description: "Move to first position",
                },
                {
                  name: "--last",
                  description: "Move to last position",
                },
                yesOption,
              ],
            },
          ],
        },
        {
          name: "bot-management",
          description: "List managed bot rules and top unknown bot traffic",
          options: [projectOption, jsonOption],
        },
        {
          name: "managed-rulesets",
          description:
            "Manage WAF managed rulesets, such as OWASP Core Ruleset, Bot Protection, and AI Bots",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "List WAF managed rulesets, such as OWASP Core Ruleset and Bot Protection, and their actions",
              options: [projectOption, jsonOption],
            },
            {
              name: "enable",
              description:
                "Turn on a managed ruleset. OWASP Core Ruleset starts with its default rule groups; Bot Protection and AI Bots use their saved action, or Log",
              args: {
                name: "ruleset",
                description:
                  "Owasp (or crs), bot-protection, ai-bots, traffic-sources, or vercel-ruleset",
                suggestions: managedRulesets,
              },
              options: [projectOption, jsonOption, yesOption],
            },
            {
              name: "disable",
              description: "Turn off a managed ruleset",
              args: {
                name: "ruleset",
                description:
                  "Owasp (or crs), bot-protection, ai-bots, traffic-sources, or vercel-ruleset",
                suggestions: managedRulesets,
              },
              options: [projectOption, jsonOption, yesOption],
            },
            {
              name: "update",
              description:
                "Change the action of one rule group in a managed ruleset, or of a ruleset without groups such as Bot Protection",
              args: {
                name: "ruleset",
                description:
                  "Owasp (or crs), bot-protection, ai-bots, traffic-sources, or vercel-ruleset",
                suggestions: managedRulesets,
              },
              options: [
                projectOption,
                {
                  name: "--group",
                  description:
                    "Rule group ID, such as sqli or xss, or an AI Bots category. Omit for a ruleset without groups",
                  args: {
                    name: "group",
                  },
                },
                {
                  name: "--action",
                  description:
                    "Action for the group: log, deny, or off. Some rulesets also accept challenge. A ruleset without groups takes its own actions, such as off, log, or challenge for Bot Protection",
                  args: {
                    name: "action",
                    suggestions: ["log", "deny", "off", "challenge"],
                  },
                },
                jsonOption,
                yesOption,
              ],
            },
          ],
        },
        {
          name: "system-bypass",
          description:
            "Manage system bypass rules that allow specific IPs to skip firewall checks",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "List all system bypass rules that allow specific IPs to skip firewall checks",
              options: [projectOption, jsonOption],
            },
            {
              name: "add",
              description:
                "Add a system bypass rule to allow a specific IP address to skip firewall checks",
              args: {
                name: "ip",
              },
              options: [
                projectOption,
                {
                  name: "--domain",
                  description:
                    "Scope bypass to a specific domain (default: all domains)",
                  args: {
                    name: "domain",
                  },
                },
                {
                  name: "--notes",
                  description: "Add a note to the bypass rule",
                  args: {
                    name: "notes",
                  },
                },
                yesOption,
              ],
            },
            {
              name: ["remove", "rm"],
              description:
                "Remove a system bypass rule so the IP is no longer exempt from firewall checks",
              args: {
                name: "ip",
              },
              options: [
                projectOption,
                {
                  name: "--domain",
                  description: "Scope removal to a specific domain",
                  args: {
                    name: "domain",
                  },
                },
                yesOption,
              ],
            },
          ],
        },
        {
          name: "attack-mode",
          description:
            "Manage attack mode, which challenges all incoming requests with a verification page",
          subcommands: [
            {
              name: "enable",
              description:
                "Enable attack mode — all visitors will be shown a verification challenge before accessing your site",
              options: [
                projectOption,
                {
                  name: "--duration",
                  description: "Duration: 1h, 6h, or 24h (default: 1h)",
                  args: {
                    name: "duration",
                    suggestions: ["1h", "6h", "24h"],
                  },
                },
                yesOption,
              ],
            },
            {
              name: "disable",
              description:
                "Disable attack mode — visitors will no longer be challenged",
              options: [projectOption, yesOption],
            },
          ],
        },
        {
          name: "system-mitigations",
          description:
            "Manage automatic DDoS protection and system-level traffic filtering",
          subcommands: [
            {
              name: "pause",
              description:
                "Pause automatic DDoS protection and system-level traffic filtering for 24 hours",
              options: [projectOption, yesOption],
            },
            {
              name: "resume",
              description:
                "Resume automatic DDoS protection and system-level traffic filtering",
              options: [projectOption, yesOption],
            },
          ],
        },
        {
          name: "alerts",
          description:
            "List and inspect firewall alerts, including DDoS mitigation episodes",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "List active and resolved firewall alerts for the linked project",
              options: [projectOption, jsonOption, sinceOption3, untilOption],
            },
            {
              name: "inspect",
              description:
                "Show one firewall alert: window, request rate, denied IPs, and top hosts",
              args: {
                name: "alertid",
              },
              options: [projectOption, jsonOption],
            },
          ],
        },
        {
          name: "persistent-actions",
          description:
            "List and inspect persistent firewall actions taken against specific clients",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "List persistent firewall actions for the linked project (default: last hour)",
              options: [
                projectOption,
                jsonOption,
                sinceOption2,
                untilOption,
                {
                  name: ["-n", "--limit"],
                  description: "Number of actions to show (default: 10)",
                  args: {
                    name: "number",
                  },
                },
              ],
            },
            {
              name: "inspect",
              description:
                "Show one persistent firewall action: window and requests by action",
              args: {
                name: "ip",
              },
              options: [
                projectOption,
                jsonOption,
                {
                  name: "--host",
                  description: "Narrow to a hostname",
                  args: {
                    name: "hostname",
                  },
                },
                {
                  name: "--action",
                  description: "Narrow to an action (challenge, deny, log, …)",
                  args: {
                    name: "action",
                  },
                },
                sinceOption2,
                untilOption,
                {
                  name: "--paths",
                  description: "Include the top request paths",
                },
              ],
            },
          ],
        },
        {
          name: "traffic",
          description:
            "Explore firewall traffic: requests by action, top clients, and one dimension in detail",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "Show requests by firewall action, with the top clients behind them",
              options: [
                projectOption,
                jsonOption,
                sinceOption3,
                untilOption,
                {
                  name: ["-n", "--limit"],
                  description: "Rows per top list (default: 5)",
                  args: {
                    name: "number",
                  },
                },
                {
                  name: "--top",
                  description: "Deprecated alias for `--limit`",
                  args: {
                    name: "number",
                  },
                  deprecated: true,
                },
                {
                  name: "--dimension",
                  description:
                    "Top list to include: ip, ja4, asn, user-agent, path, rule, host, bot, unknown-bot, country, action (repeatable) (default: ip, ja4, asn, user-agent, path, rule, host, bot)",
                  args: {
                    name: "dim",
                    suggestions: [
                      "ip",
                      "ja4",
                      "asn",
                      "user-agent",
                      "path",
                      "rule",
                      "host",
                      "bot",
                      "unknown-bot",
                      "country",
                      "action",
                    ],
                  },
                  isRepeatable: true,
                },
                {
                  name: "--alert",
                  description:
                    "Scope the window and rule to one alert id from `firewall alerts list`",
                  args: {
                    name: "alert-id",
                  },
                },
                {
                  name: "--ip",
                  description: "Narrow to one client IP",
                  args: {
                    name: "ip",
                  },
                },
                {
                  name: "--ja4",
                  description: "Narrow to one JA4 TLS fingerprint",
                  args: {
                    name: "digest",
                  },
                },
                {
                  name: "--asn",
                  description: "Narrow to one autonomous system name",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--user-agent",
                  description: "Narrow to one user agent",
                  args: {
                    name: "ua",
                  },
                },
                {
                  name: "--path",
                  description: "Narrow to one request path",
                  args: {
                    name: "path",
                    template: "filepaths",
                  },
                },
                {
                  name: "--rule",
                  description: "Narrow to one firewall rule id",
                  args: {
                    name: "rule-id",
                  },
                },
                {
                  name: "--host",
                  description: "Narrow to one hostname",
                  args: {
                    name: "hostname",
                  },
                },
                {
                  name: "--bot",
                  description: "Narrow to one verified bot",
                  args: {
                    name: "bot",
                  },
                },
                {
                  name: "--unknown-bot",
                  description: "Narrow inspect unknown-bot to one category",
                  args: {
                    name: "category",
                  },
                },
                {
                  name: "--country",
                  description: "Narrow to one country code",
                  args: {
                    name: "code",
                  },
                },
                {
                  name: "--action",
                  description:
                    "Narrow to one firewall action (deny, challenge, log, …)",
                  args: {
                    name: "action",
                  },
                },
                {
                  name: ["-q", "--query"],
                  description:
                    "KQL filter expression (repeatable, ANDed together)",
                  args: {
                    name: "text",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--filter",
                  description: "Deprecated alias for `--query`",
                  args: {
                    name: "expr",
                  },
                  isRepeatable: true,
                  deprecated: true,
                },
              ],
            },
            {
              name: "inspect",
              description:
                "Show one traffic dimension value: its actions over time and what it requested",
              args: [
                {
                  name: "dimension",
                },
                {
                  name: "value",
                },
              ],
              options: [
                projectOption,
                jsonOption,
                sinceOption3,
                untilOption,
                {
                  name: "--group-by",
                  description:
                    "Dimension to break the traffic down by (default: depends on the inspected dimension)",
                  args: {
                    name: "dim",
                  },
                },
                {
                  name: ["-n", "--limit"],
                  description: "Rows in the breakdown (default: 10)",
                  args: {
                    name: "number",
                  },
                },
                {
                  name: "--top",
                  description: "Deprecated alias for `--limit`",
                  args: {
                    name: "number",
                  },
                  deprecated: true,
                },
                {
                  name: "--alert",
                  description:
                    "Scope the window and rule to one alert id from `firewall alerts list`",
                  args: {
                    name: "alert-id",
                  },
                },
                {
                  name: "--ip",
                  description: "Narrow to one client IP",
                  args: {
                    name: "ip",
                  },
                },
                {
                  name: "--ja4",
                  description: "Narrow to one JA4 TLS fingerprint",
                  args: {
                    name: "digest",
                  },
                },
                {
                  name: "--asn",
                  description: "Narrow to one autonomous system name",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--user-agent",
                  description: "Narrow to one user agent",
                  args: {
                    name: "ua",
                  },
                },
                {
                  name: "--path",
                  description: "Narrow to one request path",
                  args: {
                    name: "path",
                    template: "filepaths",
                  },
                },
                {
                  name: "--rule",
                  description: "Narrow to one firewall rule id",
                  args: {
                    name: "rule-id",
                  },
                },
                {
                  name: "--host",
                  description: "Narrow to one hostname",
                  args: {
                    name: "hostname",
                  },
                },
                {
                  name: "--bot",
                  description: "Narrow to one verified bot",
                  args: {
                    name: "bot",
                  },
                },
                {
                  name: "--unknown-bot",
                  description: "Narrow inspect unknown-bot to one category",
                  args: {
                    name: "category",
                  },
                },
                {
                  name: "--country",
                  description: "Narrow to one country code",
                  args: {
                    name: "code",
                  },
                },
                {
                  name: "--action",
                  description:
                    "Narrow to one firewall action (deny, challenge, log, …)",
                  args: {
                    name: "action",
                  },
                },
                {
                  name: ["-q", "--query"],
                  description:
                    "KQL filter expression (repeatable, ANDed together)",
                  args: {
                    name: "text",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--filter",
                  description: "Deprecated alias for `--query`",
                  args: {
                    name: "expr",
                  },
                  isRepeatable: true,
                  deprecated: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "flags",
      description: "Manage feature flags for a Vercel project",
      subcommands: [
        {
          name: ["list", "ls"],
          description:
            "List active feature flags for the current project (use --state archived for archived ones)",
          options: [
            projectOption,
            {
              name: "--state",
              description:
                "Filter flags by state: active or archived (default: active)",
              args: {
                name: "state",
                suggestions: ["active", "archived"],
              },
            },
            {
              name: "--tag",
              description: "Filter flags by tag (repeatable; all must match)",
              args: {
                name: "tag",
              },
              isRepeatable: true,
            },
            {
              name: "--created-by",
              description:
                "Filter flags by the id of the user or team that created them",
              args: {
                name: "id",
              },
            },
            {
              name: "--maintainer",
              description:
                "Filter flags by maintainer user id (repeatable; any may match)",
              args: {
                name: "maintainer",
              },
              isRepeatable: true,
            },
            {
              name: "--maintainer-id",
              description: "Deprecated alias for `--maintainer`",
              args: {
                name: "id",
              },
              isRepeatable: true,
              deprecated: true,
            },
            {
              name: ["-n", "--limit"],
              description:
                "Return a single page of at most NUMBER flags (1-100) instead of all",
              args: {
                name: "number",
              },
            },
            nextOption,
            jsonOption,
          ],
        },
        {
          name: "stale",
          description: "List stale feature flags for the current project",
          options: [
            projectOption,
            {
              name: "--stale-after",
              description:
                "Consider flags stale after this relative day duration (default: 30d, max: 90d)",
              args: {
                name: "duration",
              },
            },
            {
              name: ["-n", "--limit"],
              description:
                "Return one page of at most NUMBER stale flags (default: 50, max: 100)",
              args: {
                name: "number",
              },
            },
            nextOption,
            {
              name: "--has-no-cleanup",
              description:
                "List only flags without a Vercel Agent cleanup that is running or opened a pull request",
            },
            jsonOption,
          ],
          hidden: true,
        },
        {
          name: "cleanup",
          description:
            "Check whether a feature flag is ready to be removed from code, and recommend next steps",
          args: {
            name: "flag",
          },
          options: [
            projectOption,
            {
              name: "--vercel-agent",
              description:
                "After the checks, have Vercel Agent remove the flag from code and open a draft pull request",
            },
            {
              name: "--force",
              description:
                "With --vercel-agent, start a new cleanup even if Vercel Agent already opened a pull request",
            },
            {
              name: "--wait",
              description:
                "Block until the Vercel Agent cleanup run finishes (exits 1 if it fails or --timeout is reached first)",
            },
            {
              name: "--timeout",
              description:
                "With --wait, how long to wait for the run (default: 15m)",
              args: {
                name: "duration",
              },
            },
            {
              name: "--json",
              description:
                "Output the checks, replacement value, and recommendations as JSON",
            },
          ],
          hidden: true,
        },
        {
          name: "inspect",
          description: "Display information about a feature flag",
          args: {
            name: "flag",
          },
          options: [projectOption, jsonOption],
        },
        {
          name: "versions",
          description: "List and compare version history for a feature flag",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List version history for a feature flag",
              args: {
                name: "flag",
              },
              options: [
                projectOption,
                {
                  name: ["-e", "--environment"],
                  description: "Filter versions by changed environment",
                  args: {
                    name: "environment",
                    suggestions: ["production", "preview", "development"],
                  },
                },
                {
                  name: ["-n", "--limit"],
                  description: "Return at most NUMBER versions (1-100)",
                  args: {
                    name: "number",
                  },
                },
                nextOption,
                {
                  name: "--cursor",
                  description:
                    "Pagination cursor from a previous versions response",
                  args: {
                    name: "cursor",
                  },
                  deprecated: true,
                },
                jsonOption,
              ],
            },
            {
              name: "diff",
              description: "Show changes introduced by a feature flag version",
              args: {
                name: "flag",
              },
              options: [
                projectOption,
                {
                  name: "--revision",
                  description:
                    "Revision number to compare with the previous revision",
                  args: {
                    name: "number",
                  },
                },
                {
                  name: "--json",
                  description: "Output the diff in JSON format",
                },
              ],
            },
          ],
        },
        {
          name: "evaluations",
          description:
            "Display evaluation metrics for a feature flag, or for every flag in the project when no flag is given",
          args: {
            name: "flag",
            isOptional: true,
          },
          options: [
            projectOption,
            sinceOption2,
            untilOption,
            {
              name: "--granularity",
              description:
                "Time bucket size: 1m, 5m, 15m, 1h, 4h, 1d (default: auto)",
              args: {
                name: "size",
                suggestions: ["1m", "5m", "15m", "1h", "4h", "1d"],
              },
            },
            {
              name: "--group-by",
              description:
                "Dimensions to group by (repeatable): variant, flag, sdk-key, client, environment, reason, datafile-revision (default: variant for one flag, flag for the whole project)",
              args: {
                name: "dim",
                suggestions: [
                  "variant",
                  "flag",
                  "sdk-key",
                  "client",
                  "environment",
                  "reason",
                  "datafile-revision",
                ],
              },
              isRepeatable: true,
            },
            jsonOption,
          ],
        },
        {
          name: ["create", "add"],
          description: "Create a new feature flag",
          args: {
            name: "slug",
          },
          options: [
            jsonOption,
            projectOption,
            {
              name: "--kind",
              description:
                "The type of the flag value (boolean, string, number, or json)",
              args: {
                name: "kind",
              },
            },
            {
              name: "--description",
              description: "Description of the feature flag",
              args: {
                name: "text",
              },
            },
            {
              name: "--variant",
              description:
                "Variant definition as VALUE[=LABEL] (can be repeated for string, number, and json flags)",
              args: {
                name: "value[=label]",
              },
              isRepeatable: true,
            },
            {
              name: "--default-variant",
              description: "Variant ID or value to serve in every environment",
              args: {
                name: "variant",
              },
            },
            {
              name: "--environment-variant",
              description:
                "Variant ID or value to serve in one environment as ENVIRONMENT=VARIANT; repeatable, overrides --default-variant",
              args: {
                name: "environment=variant",
              },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "open",
          description: "Open feature flags in the Vercel dashboard",
          args: {
            name: "flag",
            isOptional: true,
          },
          options: [projectOption],
        },
        {
          name: "update",
          description: "Update an existing feature flag",
          args: {
            name: "flag",
          },
          options: [
            jsonOption,
            projectOption,
            {
              name: "--variant",
              description: "Variant ID or value to update",
              args: {
                name: "variant",
              },
            },
            {
              name: "--value",
              description: "New variant value",
              args: {
                name: "value",
              },
            },
            {
              name: "--label",
              description: "New variant label",
              args: {
                name: "label",
              },
            },
            {
              name: "--add-variant",
              description:
                "Add a variant as VALUE[=LABEL] (repeatable for string, number, and json flags)",
              args: {
                name: "value[=label]",
              },
              isRepeatable: true,
            },
            {
              name: "--remove-variant",
              description: "Remove a variant by ID or value (repeatable)",
              args: {
                name: "variant",
              },
              isRepeatable: true,
            },
            {
              name: "--description",
              description:
                "New description for the feature flag (an empty value clears it)",
              args: {
                name: "text",
              },
            },
            messageOption,
            {
              name: ["-y", "--yes"],
              description:
                "Skip the confirmation prompt when removing a variant",
            },
          ],
        },
        {
          name: "set",
          description:
            "Set the served variant for a feature flag in an environment",
          args: {
            name: "flag",
          },
          options: [
            jsonOption,
            projectOption,
            {
              name: ["-e", "--environment"],
              description:
                "The environment to set the variant in (production, preview, or development)",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
            },
            {
              name: "--variant",
              description: "The variant ID or value to serve",
              args: {
                name: "variant",
              },
            },
            messageOption,
          ],
        },
        {
          name: "targeting",
          description: "Manage targeting for a feature flag environment",
          subcommands: [
            {
              name: "enable",
              description:
                "Enable targeting for a feature flag environment; keeps the current fallthrough unless --default-variant is set",
              args: {
                name: "flag",
              },
              options: [
                jsonOption,
                projectOption,
                {
                  name: ["-e", "--environment"],
                  description:
                    "The environment to enable targeting in (production, preview, or development)",
                  args: {
                    name: "environment",
                    suggestions: ["production", "preview", "development"],
                  },
                },
                {
                  name: "--default-variant",
                  description:
                    "Replace the fallthrough with this variant when no targeting rules match",
                  args: {
                    name: "variant",
                  },
                },
                messageOption,
              ],
            },
          ],
        },
        {
          name: "use-targeting",
          description:
            "Enable targeting for a feature flag environment; keeps the current fallthrough unless --default-variant is set",
          args: {
            name: "flag",
          },
          options: [
            jsonOption,
            projectOption,
            {
              name: ["-e", "--environment"],
              description:
                "The environment to enable targeting in (production, preview, or development)",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
            },
            {
              name: "--default-variant",
              description:
                "Replace the fallthrough with this variant when no targeting rules match",
              args: {
                name: "variant",
              },
            },
            messageOption,
          ],
          hidden: true,
        },
        {
          name: "split",
          description:
            "Configure a weighted split for a feature flag in an environment",
          args: {
            name: "flag",
          },
          options: [
            jsonOption,
            projectOption,
            {
              name: ["-e", "--environment"],
              description:
                "The environment to configure (production, preview, or development)",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
            },
            {
              name: "--by",
              description:
                "Entity attribute used for bucketing, in the form entity.attribute",
              args: {
                name: "entity.attribute",
              },
            },
            {
              name: "--weight",
              description:
                "Variant weight ratio as VARIANT=WEIGHT. Repeat for each variant; values are normalized and 0 receives no traffic",
              args: {
                name: "variant=weight",
              },
              isRepeatable: true,
            },
            {
              name: "--default-variant",
              description:
                "The fallback variant to serve when the split attribute is unavailable",
              args: {
                name: "variant",
              },
            },
            messageOption,
          ],
        },
        {
          name: "rollout",
          description:
            "Configure a progressive rollout for a feature flag in an environment",
          args: {
            name: "flag",
          },
          options: [
            jsonOption,
            projectOption,
            {
              name: ["-e", "--environment"],
              description:
                "The environment to configure (production, preview, or development)",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
            },
            {
              name: "--from-variant",
              description:
                "The variant to roll away from (default: false for boolean flags)",
              args: {
                name: "variant",
              },
            },
            {
              name: "--to-variant",
              description:
                "The variant to roll towards (default: true for boolean flags)",
              args: {
                name: "variant",
              },
            },
            {
              name: "--default-variant",
              description:
                "The fallback variant to serve when the rollout attribute is unavailable",
              args: {
                name: "variant",
              },
            },
            {
              name: "--by",
              description:
                "Entity attribute used for bucketing, in the form entity.attribute",
              args: {
                name: "entity.attribute",
              },
            },
            {
              name: "--stage",
              description:
                'Add a rollout stage as PERCENTAGE,DURATION (e.g. "5,6h")',
              args: {
                name: "percentage,duration",
              },
              isRepeatable: true,
            },
            {
              name: "--final-percentage",
              description:
                "Percentage served indefinitely after the last stage (0–100, up to 3 decimal places)",
              args: {
                name: "percentage",
              },
            },
            {
              name: "--start",
              description:
                'When the rollout should start: "now", a future relative time like "1h", or an ISO 8601 datetime',
              args: {
                name: "time",
              },
            },
            messageOption,
          ],
        },
        {
          name: ["delete", "rm", "del", "remove"],
          description: "Delete a feature flag",
          args: {
            name: "flag",
          },
          options: [
            jsonOption,
            projectOption,
            {
              name: "--confirm-name",
              description: "Approve the delete by naming the flag slug",
              args: {
                name: "name",
              },
            },
            yesOption2,
          ],
        },
        {
          name: "archive",
          description: "Archive a feature flag",
          args: {
            name: "flag",
          },
          options: [
            jsonOption,
            projectOption,
            {
              name: "--confirm-name",
              description: "Approve archiving by naming the flag slug",
              args: {
                name: "name",
              },
            },
            yesOption2,
            {
              name: "--message",
              description: "Attach a revision message when archiving the flag",
              args: {
                name: "text",
              },
            },
          ],
        },
        {
          name: "unarchive",
          description: "Unarchive a feature flag",
          args: {
            name: "flag",
          },
          options: [
            jsonOption,
            projectOption,
            {
              name: ["-y", "--yes"],
              description:
                "Skip the confirmation prompt when unarchiving a flag",
            },
          ],
        },
        {
          name: "disable",
          description:
            "Shortcut to serve the false variant of a boolean feature flag in an environment",
          args: {
            name: "flag",
          },
          options: [
            jsonOption,
            projectOption,
            {
              name: ["-e", "--environment"],
              description:
                "The environment to disable the flag in (production, preview, or development)",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
            },
            {
              name: "--variant",
              description:
                "The variant ID or value to serve while the flag is disabled",
              args: {
                name: "variant",
              },
            },
            messageOption,
          ],
        },
        {
          name: "enable",
          description:
            "Shortcut to serve the true variant of a boolean feature flag in an environment",
          args: {
            name: "flag",
          },
          options: [
            jsonOption,
            projectOption,
            {
              name: ["-e", "--environment"],
              description:
                "The environment to enable the flag in (production, preview, or development)",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
            },
            messageOption,
          ],
        },
        {
          name: "rules",
          description: "Manage conditional rules for feature flags",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "List conditional rules for a feature flag environment",
              args: {
                name: "flag",
              },
              options: [
                projectOption,
                {
                  name: ["-e", "--environment"],
                  description:
                    "The environment to list rules for (production, preview, or development)",
                  args: {
                    name: "environment",
                    suggestions: ["production", "preview", "development"],
                  },
                },
                jsonOption,
              ],
            },
            {
              name: "add",
              description:
                "Add a conditional rule to a feature flag environment",
              args: {
                name: "flag",
              },
              options: [
                jsonOption,
                {
                  name: "--project",
                  description: "Project name or ID (default: linked project)",
                  args: {
                    name: "name-or-id",
                  },
                },
                {
                  name: ["-e", "--environment"],
                  description:
                    "The environment to add the rule to (production, preview, or development)",
                  args: {
                    name: "environment",
                    suggestions: ["production", "preview", "development"],
                  },
                },
                {
                  name: "--condition",
                  description:
                    "Rule condition as ENTITY.ATTRIBUTE:OPERATOR:VALUE or segment:OPERATOR:SEGMENT. Repeatable; semicolon-separated conditions are also supported",
                  args: {
                    name: "condition",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--variant",
                  description:
                    "Variant ID or value to serve when the rule matches",
                  args: {
                    name: "variant",
                  },
                },
                {
                  name: "--by",
                  description:
                    "Entity attribute used for split or rollout bucketing, in the form entity.attribute",
                  args: {
                    name: "entity.attribute",
                  },
                },
                {
                  name: "--weight",
                  description:
                    "Split weight ratio as VARIANT=WEIGHT. Repeat for each variant",
                  args: {
                    name: "variant=weight",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--default-variant",
                  description:
                    "Fallback variant for split or rollout outcomes when the bucketing attribute is unavailable",
                  args: {
                    name: "variant",
                  },
                },
                {
                  name: "--from-variant",
                  description: "Variant to roll away from for rollout outcomes",
                  args: {
                    name: "variant",
                  },
                },
                {
                  name: "--to-variant",
                  description: "Variant to roll towards for rollout outcomes",
                  args: {
                    name: "variant",
                  },
                },
                {
                  name: "--stage",
                  description:
                    "Add a rollout stage as PERCENTAGE,DURATION. Can be specified multiple times",
                  args: {
                    name: "percentage,duration",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--final-percentage",
                  description:
                    "Percentage served indefinitely after the last stage (0–100, up to 3 decimal places)",
                  args: {
                    name: "percentage",
                  },
                },
                {
                  name: "--start",
                  description:
                    'When the rollout should start: "now", a relative time like "1h", or an ISO 8601 datetime',
                  args: {
                    name: "time",
                  },
                },
                {
                  name: "--position",
                  description:
                    "1-based position for the new rule (default: last)",
                  args: {
                    name: "n",
                  },
                },
                messageOption,
              ],
            },
            {
              name: "update",
              description:
                "Update a conditional rule in a feature flag environment",
              args: [
                {
                  name: "flag",
                },
                {
                  name: "rule",
                },
              ],
              options: [
                jsonOption,
                projectOption,
                {
                  name: ["-e", "--environment"],
                  description:
                    "The environment containing the rule (production, preview, or development)",
                  args: {
                    name: "environment",
                    suggestions: ["production", "preview", "development"],
                  },
                },
                {
                  name: "--condition",
                  description: "Replace rule conditions",
                  args: {
                    name: "condition",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--variant",
                  description:
                    "Variant ID or value to serve when the rule matches",
                  args: {
                    name: "variant",
                  },
                },
                {
                  name: "--by",
                  description:
                    "Entity attribute used for split or rollout bucketing, in the form entity.attribute",
                  args: {
                    name: "entity.attribute",
                  },
                },
                {
                  name: "--weight",
                  description:
                    "Split weight ratio as VARIANT=WEIGHT. Repeat for each variant",
                  args: {
                    name: "variant=weight",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--default-variant",
                  description:
                    "Fallback variant for split or rollout outcomes when the bucketing attribute is unavailable",
                  args: {
                    name: "variant",
                  },
                },
                {
                  name: "--from-variant",
                  description: "Variant to roll away from for rollout outcomes",
                  args: {
                    name: "variant",
                  },
                },
                {
                  name: "--to-variant",
                  description: "Variant to roll towards for rollout outcomes",
                  args: {
                    name: "variant",
                  },
                },
                {
                  name: "--stage",
                  description:
                    "Add a rollout stage as PERCENTAGE,DURATION. Can be specified multiple times",
                  args: {
                    name: "percentage,duration",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--final-percentage",
                  description:
                    "Percentage served indefinitely after the last stage (0–100, up to 3 decimal places)",
                  args: {
                    name: "percentage",
                  },
                },
                {
                  name: "--start",
                  description:
                    'When the rollout should start: "now", a relative time like "1h", or an ISO 8601 datetime',
                  args: {
                    name: "time",
                  },
                },
                messageOption,
              ],
            },
            {
              name: ["remove", "rm"],
              description:
                "Remove a conditional rule from a feature flag environment",
              args: [
                {
                  name: "flag",
                },
                {
                  name: "rule",
                },
              ],
              options: [
                jsonOption,
                projectOption,
                {
                  name: ["-e", "--environment"],
                  description:
                    "The environment containing the rule (production, preview, or development)",
                  args: {
                    name: "environment",
                    suggestions: ["production", "preview", "development"],
                  },
                },
                messageOption,
              ],
            },
            {
              name: "move",
              description:
                "Move a conditional rule within a feature flag environment",
              args: [
                {
                  name: "flag",
                },
                {
                  name: "rule",
                },
              ],
              options: [
                jsonOption,
                {
                  name: "--project",
                  description: "Project name or ID (default: linked project)",
                  args: {
                    name: "name-or-id",
                  },
                },
                {
                  name: ["-e", "--environment"],
                  description:
                    "The environment containing the rule (production, preview, or development)",
                  args: {
                    name: "environment",
                    suggestions: ["production", "preview", "development"],
                  },
                },
                {
                  name: "--position",
                  description: "1-based destination position for the rule",
                  args: {
                    name: "n",
                  },
                },
                messageOption,
              ],
            },
          ],
        },
        {
          name: "targets",
          description:
            "Manage direct targets: entity values that always receive a fixed variant",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "List the direct targets of a feature flag environment",
              args: {
                name: "flag",
              },
              options: [
                projectOption,
                {
                  name: ["-e", "--environment"],
                  description:
                    "The environment to list targets for (production, preview, or development)",
                  args: {
                    name: "environment",
                    suggestions: ["production", "preview", "development"],
                  },
                },
                jsonOption,
              ],
            },
            {
              name: "add",
              description:
                "Serve a variant to specific entity values in a feature flag environment",
              args: [
                {
                  name: "flag",
                },
                {
                  name: "entity.attribute=value",
                  isVariadic: true,
                },
              ],
              options: [
                projectOption,
                {
                  name: ["-e", "--environment"],
                  description:
                    "The environment to change (production, preview, or development)",
                  args: {
                    name: "environment",
                    suggestions: ["production", "preview", "development"],
                  },
                },
                {
                  name: "--variant",
                  description:
                    "Variant ID or value to serve to the targets (default: true for boolean flags)",
                  args: {
                    name: "variant",
                  },
                },
                messageOption,
                jsonOption,
              ],
            },
            {
              name: ["remove", "rm"],
              description:
                "Remove direct targets from a feature flag environment",
              args: [
                {
                  name: "flag",
                },
                {
                  name: "entity.attribute=value",
                  isVariadic: true,
                },
              ],
              options: [
                projectOption,
                {
                  name: ["-e", "--environment"],
                  description:
                    "The environment to change (production, preview, or development)",
                  args: {
                    name: "environment",
                    suggestions: ["production", "preview", "development"],
                  },
                },
                messageOption,
                jsonOption,
              ],
            },
          ],
        },
        {
          name: "segments",
          description: "Manage feature flag segments",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "List all feature flag segments for the current project",
              options: [projectOption, jsonOption],
            },
            {
              name: "inspect",
              description: "Display information about a feature flag segment",
              args: {
                name: "segment",
              },
              options: [projectOption, jsonOption],
            },
            {
              name: ["create", "add"],
              description: "Create a feature flag segment",
              args: {
                name: "slug",
              },
              options: [
                projectOption,
                {
                  name: "--label",
                  description: "Human-readable label for the segment",
                  args: {
                    name: "label",
                  },
                },
                {
                  name: "--description",
                  description: "Description of the segment",
                  args: {
                    name: "text",
                  },
                },
                {
                  name: "--hint",
                  description: "Hint describing who belongs in the segment",
                  args: {
                    name: "text",
                  },
                },
                {
                  name: "--data",
                  description:
                    "Full segment data JSON with rules, include, and exclude fields",
                  args: {
                    name: "json",
                  },
                },
                {
                  name: "--add",
                  description:
                    "Add include:ENTITY.ATTRIBUTE=VALUE, exclude:ENTITY.ATTRIBUTE=VALUE, or rule:ENTITY.ATTRIBUTE:OPERATOR:VALUE; repeatable",
                  args: {
                    name: "target",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--json",
                  description: "Output the created segment as JSON",
                },
              ],
            },
            {
              name: "update",
              description: "Update a feature flag segment",
              args: {
                name: "segment",
              },
              options: [
                projectOption,
                {
                  name: "--label",
                  description: "New human-readable label for the segment",
                  args: {
                    name: "label",
                  },
                },
                {
                  name: "--description",
                  description: "New description for the segment",
                  args: {
                    name: "text",
                  },
                },
                {
                  name: "--hint",
                  description: "New hint for the segment",
                  args: {
                    name: "text",
                  },
                },
                {
                  name: "--data",
                  description:
                    "Replace the full segment data JSON with rules, include, and exclude fields",
                  args: {
                    name: "json",
                  },
                },
                {
                  name: "--add",
                  description:
                    "Add include:ENTITY.ATTRIBUTE=VALUE, exclude:ENTITY.ATTRIBUTE=VALUE, or rule:ENTITY.ATTRIBUTE:OPERATOR:VALUE; repeatable",
                  args: {
                    name: "target",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--remove",
                  description:
                    "Remove include:ENTITY.ATTRIBUTE=VALUE, exclude:ENTITY.ATTRIBUTE=VALUE, rule:ENTITY.ATTRIBUTE:OPERATOR:VALUE, or rule:RULE_ID; repeatable",
                  args: {
                    name: "target",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--json",
                  description: "Output the updated segment as JSON",
                },
              ],
            },
            {
              name: ["delete", "rm", "del", "remove"],
              description: "Delete a feature flag segment",
              args: {
                name: "segment",
              },
              options: [
                jsonOption,
                projectOption,
                {
                  name: "--confirm-name",
                  description: "Approve the delete by naming the segment slug",
                  args: {
                    name: "name",
                  },
                },
                yesOption2,
              ],
            },
          ],
        },
        {
          name: "entities",
          description: "Manage the entity schema used for flag targeting",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "List the feature flag entities for the current project",
              options: [projectOption, jsonOption],
            },
            {
              name: ["create", "add"],
              description: "Create a feature flag entity",
              args: {
                name: "kind",
              },
              options: [
                projectOption,
                {
                  name: "--label",
                  description: "Human-readable label for the entity",
                  args: {
                    name: "label",
                  },
                },
                {
                  name: "--attribute",
                  description: "Add an attribute as KEY:TYPE; repeatable",
                  args: {
                    name: "key:type",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--json",
                  description: "Output the created entity as JSON",
                },
              ],
            },
            {
              name: "update",
              description: "Update a feature flag entity and its attributes",
              args: {
                name: "kind",
              },
              options: [
                projectOption,
                {
                  name: "--label",
                  description: "New human-readable label for the entity",
                  args: {
                    name: "label",
                  },
                },
                {
                  name: "--add-attribute",
                  description: "Add an attribute as KEY:TYPE; repeatable",
                  args: {
                    name: "key:type",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--remove-attribute",
                  description: "Remove an attribute by key; repeatable",
                  args: {
                    name: "key",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--set-attribute-type",
                  description:
                    "Change the type of an attribute as KEY:TYPE; repeatable",
                  args: {
                    name: "key:type",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--json",
                  description: "Output the updated entity as JSON",
                },
              ],
            },
            {
              name: ["delete", "rm", "del", "remove"],
              description: "Delete a feature flag entity",
              args: {
                name: "kind",
              },
              options: [
                jsonOption,
                projectOption,
                {
                  name: "--confirm-name",
                  description: "Approve the delete by naming the entity kind",
                  args: {
                    name: "name",
                  },
                },
                yesOption2,
              ],
            },
          ],
        },
        {
          name: "labels",
          description:
            "Discover label lists and manage labels for string or stringArray attributes",
          subcommands: [
            {
              name: ["ls", "list"],
              description:
                "Discover label lists or list the labels for an attribute",
              args: {
                name: "ENTITY.ATTRIBUTE",
                isOptional: true,
              },
              options: [
                projectOption,
                jsonOption3,
                {
                  name: ["-n", "--limit"],
                  description:
                    "Return at most NUMBER lists or labels (default: 20)",
                  args: {
                    name: "number",
                  },
                },
                {
                  name: "--next",
                  description:
                    "Continue from the cursor returned by the previous page",
                  args: {
                    name: "cursor",
                  },
                },
              ],
            },
            {
              name: "set",
              description: "Create or replace one attribute value label",
              args: [
                {
                  name: "ENTITY.ATTRIBUTE",
                },
                {
                  name: "value",
                },
                {
                  name: "label",
                },
              ],
              options: [projectOption, jsonOption3],
            },
            {
              name: ["remove", "rm"],
              description:
                "Remove a value label without changing targeting; ignore missing labels",
              args: [
                {
                  name: "ENTITY.ATTRIBUTE",
                },
                {
                  name: "value",
                },
              ],
              options: [projectOption, jsonOption3],
            },
            {
              name: "apply",
              description: "Set and remove multiple attribute value labels",
              args: {
                name: "ENTITY.ATTRIBUTE",
              },
              options: [
                projectOption,
                jsonOption3,
                {
                  name: "--set",
                  description:
                    "Create or replace a value label as VALUE=LABEL; repeatable",
                  args: {
                    name: "value=label",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--remove",
                  description:
                    "Remove a value label; repeatable; ignore missing labels",
                  args: {
                    name: "value",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--data",
                  description:
                    "Apply label operations from a JSON array; cannot combine with --set or --remove",
                  args: {
                    name: "json",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "sdk-keys",
          description: "Manage SDK keys for feature flags",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List all SDK keys for the current project",
              options: [projectOption, jsonOption],
            },
            {
              name: ["create", "add"],
              description: "Create a new SDK key",
              options: [
                jsonOption,
                projectOption,
                {
                  name: "--type",
                  description:
                    "The type of SDK key (server, client, or mobile)",
                  args: {
                    name: "type",
                  },
                },
                {
                  name: ["-e", "--environment"],
                  description: "The environment for the SDK key",
                  args: {
                    name: "environment",
                    suggestions: ["production", "preview", "development"],
                  },
                },
                {
                  name: "--label",
                  description: "Optional label for the SDK key",
                  args: {
                    name: "label",
                  },
                },
                {
                  name: ["-o", "--output"],
                  description:
                    "Write the new SDK key credential to a file with mode 0600",
                  args: {
                    name: "path",
                    template: "filepaths",
                  },
                },
              ],
            },
            {
              name: ["revoke", "remove", "rm"],
              description: "Revoke an SDK key",
              args: {
                name: "key",
              },
              options: [
                jsonOption,
                projectOption,
                {
                  name: "--confirm-name",
                  description: "Approve revoking by naming the SDK key hash",
                  args: {
                    name: "name",
                  },
                },
                yesOption2,
              ],
            },
          ],
        },
        {
          name: "connections",
          description:
            "Manage which projects in the team may read the flags of a project",
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "List the projects connected to the flags of the current project",
              options: [
                projectOption,
                {
                  name: "--role",
                  description:
                    'Which side of the connection the current project is on: "source" lists the projects that may read its flags, "consumer" lists the projects whose flags it may read (default: source)',
                  args: {
                    name: "role",
                  },
                },
                jsonOption,
              ],
            },
            {
              name: "add",
              description:
                "Let another project in the team read the flags of the current project",
              args: {
                name: "consumer-project",
              },
              options: [projectOption],
            },
            {
              name: ["remove", "rm"],
              description:
                "Stop a project from reading the flags of the current project",
              args: {
                name: "consumer-project",
              },
              options: [
                projectOption,
                {
                  name: "--confirm-name",
                  description:
                    "Approve removing the connection by naming the consumer project",
                  args: {
                    name: "name",
                  },
                },
                yesOption2,
              ],
            },
          ],
        },
        {
          name: "prepare",
          description: "Prepare flag definition fallbacks for the build",
        },
        {
          name: "datafile",
          description: "Display the datafile of the project",
          options: [
            projectOption,
            {
              name: ["-e", "--environment"],
              description:
                "The environment to load the datafile for (production, preview, or development)",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
            },
            {
              name: "--sdk-key",
              description:
                "Authenticate with an SDK key instead of user or development OIDC credentials",
            },
            jsonOption,
          ],
        },
        {
          name: "override",
          description:
            "Encrypt flag overrides into a secure token for the vercel-flag-overrides cookie",
          args: {
            name: "flag=value",
            isOptional: true,
          },
          options: [
            {
              name: "--expiration",
              description:
                "Expiration time for the encrypted token (default: 1y)",
              args: {
                name: "time",
              },
            },
            {
              name: "--decrypt",
              description:
                "Decrypt an encrypted override token and print the JSON",
              args: {
                name: "token",
              },
            },
          ],
        },
      ],
    },
    {
      name: "git",
      description:
        "Manage your Git repository connection to the current Project",
      subcommands: [
        {
          name: "connect",
          description:
            "Connect your Vercel Project to your Git repository or provide the remote URL to your Git repository",
          args: {
            name: "git-url",
            isOptional: true,
          },
          options: [projectOption, yesOption, confirmOption],
        },
        {
          name: "disconnect",
          description: "Disconnect the Git repository from your Vercel Project",
          options: [projectOption, yesOption, confirmOption],
        },
      ],
    },
    {
      name: ["global-config", "edge-config"],
      description: "Manage Global Config stores (dashboard API parity)",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List Global Config stores for the current team",
          options: [formatOption, jsonOption],
        },
        {
          name: ["create", "add"],
          description: "Create a Global Config store",
          args: {
            name: "slug",
          },
          options: [
            formatOption,
            jsonOption,
            {
              name: "--items",
              description:
                'Optional JSON object of initial items `{ "key": <value>, ... }`',
              args: {
                name: "json",
              },
            },
          ],
        },
        {
          name: ["inspect", "get"],
          description:
            "Show metadata for a Global Config (id `ecfg_…` or slug)",
          args: {
            name: "id-or-slug",
          },
          options: [formatOption, jsonOption],
        },
        {
          name: "update",
          description:
            "Rename a Global Config (`--slug`) and/or patch items (`--patch` JSON)",
          args: {
            name: "id-or-slug",
          },
          options: [
            formatOption,
            jsonOption,
            {
              name: "--slug",
              description: "New slug for the Global Config",
              args: {
                name: "slug",
              },
            },
            {
              name: "--patch",
              description:
                'JSON for `PATCH /v1/global-config/:id/items`: `{"items":[...]}` or a bare array',
              args: {
                name: "json",
              },
            },
          ],
        },
        {
          name: ["delete", "rm", "del", "remove"],
          description: "Delete a Global Config store",
          args: {
            name: "id-or-slug",
          },
          options: [yesOption, formatOption, jsonOption],
        },
        {
          name: "items",
          description:
            "List items in a Global Config, or show one item with `--key`",
          args: {
            name: "id-or-slug",
          },
          options: [
            formatOption,
            jsonOption,
            {
              name: "--key",
              description: "When set, show a single item by key",
              args: {
                name: "key",
              },
            },
          ],
        },
        {
          name: "tokens",
          description:
            "List, create (`--add`), or revoke (`--remove`) read tokens for a Global Config",
          args: {
            name: "id-or-slug",
          },
          options: [
            formatOption,
            jsonOption,
            yesOption,
            {
              name: "--add",
              description: "Create a token with this label (1–52 characters)",
              args: {
                name: "label",
              },
            },
            {
              name: "--remove",
              description:
                "Revoke one or more tokens by id or plaintext token (repeatable)",
              args: {
                name: "id-or-token",
              },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "backups",
          description: "List, inspect, or restore Global Config backups",
          args: {
            name: "id-or-slug",
          },
          options: [
            formatOption,
            jsonOption,
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt when restoring",
            },
            {
              name: "--backup-version",
              description: "Show a single backup by version ID",
              args: {
                name: "version",
              },
            },
            {
              name: "--restore",
              description: "Restore items from the backup version id",
              args: {
                name: "version-id",
              },
            },
            {
              name: ["-n", "--limit"],
              description: "Maximum number of backups to list (0-50)",
              args: {
                name: "number",
              },
            },
            nextOption,
          ],
        },
      ],
    },
    {
      name: ["health", "status-page"],
      description:
        "Show the current Vercel platform status and recent incidents",
      options: [jsonOption],
    },
    {
      name: "httpstat",
      description: "Show deployment HTTP timing",
      args: {
        name: "path",
        template: "filepaths",
      },
      options: [
        yesOption4,
        {
          name: "--deployment",
          description: "The deployment ID or URL to target",
          args: {
            name: "deployment",
          },
        },
        {
          name: "--protection-bypass",
          description:
            "Protection bypass secret for accessing protected deployments",
          args: {
            name: "secret",
          },
        },
      ],
    },
    {
      name: "init",
      description: "Initialize example Vercel Projects",
      args: [
        {
          name: "example",
          isOptional: true,
        },
        {
          name: "dir",
          isOptional: true,
          template: "folders",
        },
      ],
      options: [
        {
          name: "--force",
          description:
            "Overwrite destination directory if exists (default: off)",
        },
      ],
    },
    {
      name: "kb",
      description: "Show the latest Vercel Knowledge Base guides, newest first",
      options: [
        {
          name: ["-n", "--limit"],
          description: "Number of guides to show (default: 5, max: 20)",
          args: {
            name: "number",
          },
        },
        nextOption,
        formatOption,
        jsonOption,
      ],
      subcommands: [
        {
          name: "search",
          description:
            "Search Knowledge Base guides by keyword, best match first",
          args: {
            name: "query",
            isVariadic: true,
          },
          options: [
            {
              name: ["-n", "--limit"],
              description: "Number of guides to show (default: 5, max: 20)",
              args: {
                name: "number",
              },
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "inspect",
          description: "Show a Knowledge Base guide as Markdown",
          args: {
            name: "guide",
          },
          options: [formatOption, jsonOption],
        },
      ],
    },
    {
      name: "docs",
      description: "Search and read the Vercel docs",
      options: [jsonOption],
      subcommands: [
        {
          name: "search",
          description: "Search the Vercel docs by keyword, best match first",
          args: {
            name: "query",
            isVariadic: true,
          },
          options: [
            {
              name: ["-n", "--limit"],
              description: "Number of pages to show (default: 5, max: 20)",
              args: {
                name: "number",
              },
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "inspect",
          description: "Show a Vercel docs page as Markdown",
          args: {
            name: "page",
          },
          options: [formatOption, jsonOption],
        },
      ],
    },
    {
      name: "templates",
      description: "Find, inspect, and deploy Vercel templates",
      options: [jsonOption],
      subcommands: [
        {
          name: "search",
          description: "Search the Vercel template catalog",
          args: {
            name: "query",
          },
          options: [
            formatOption,
            jsonOption,
            {
              name: "--framework",
              description: "Filter by framework slug",
              args: {
                name: "slug",
              },
            },
            {
              name: "--type",
              description: "Filter by template type",
              args: {
                name: "slug",
              },
            },
            limitOption,
            nextOption,
          ],
        },
        {
          name: "inspect",
          description: "Get template details and deployment requirements",
          args: {
            name: "slug-or-id",
          },
          options: [formatOption, jsonOption],
        },
        {
          name: "deploy",
          description:
            "Create a GitHub repository and deploy an application template",
          args: {
            name: "slug-or-id",
          },
          options: [
            formatOption,
            jsonOption,
            {
              name: ["-y", "--yes"],
              description: "Confirm creation after resolving required inputs",
            },
            {
              name: "--repo",
              description: "Create the GitHub repository OWNER/NAME",
              args: {
                name: "owner/name",
              },
            },
            {
              name: "--config",
              description: "Read deployment inputs from a JSON file",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: "--resume",
              description: "Resume a recorded run by ID",
              args: {
                name: "run-id",
              },
            },
            {
              name: "--public",
              description: "Create a public repository (default: private)",
            },
            {
              name: "--prod",
              description:
                "Explicitly select Production (used by new projects)",
            },
          ],
        },
      ],
    },
    {
      name: "inspect",
      description: "Show information about a deployment",
      args: {
        name: "deployment",
      },
      options: [
        {
          name: "--timeout",
          description: "Time to wait for deployment completion (default: 3m)",
          args: {
            name: "time",
          },
        },
        {
          name: "--wait",
          description:
            "Blocks until deployment completes (exits 1 if --timeout is reached first)",
        },
        {
          name: "--logs",
          description:
            "Prints the build logs instead of the deployment summary",
        },
        formatOption,
        jsonOption,
      ],
    },
    {
      name: ["install", "i"],
      description: "Install a marketplace integration",
      args: {
        name: "integration",
      },
      options: [
        {
          name: "--name",
          description:
            "Custom name for the resource (auto-generated if not provided)",
          args: {
            name: "name",
          },
        },
        {
          name: "--meta",
          description:
            "Metadata for the resource as KEY=VALUE (can be repeated)",
          args: {
            name: "key=value",
          },
          isRepeatable: true,
        },
        {
          name: ["-m", "--metadata"],
          description: "Deprecated alias for `--meta`",
          args: {
            name: "key=value",
          },
          isRepeatable: true,
          deprecated: true,
        },
        {
          name: "--billing-plan",
          description: "Billing plan ID to use for the resource",
          args: {
            name: "billing-plan",
          },
        },
        {
          name: ["-p", "--plan"],
          description: "Deprecated alias for `--billing-plan`",
          args: {
            name: "plan-id",
          },
          deprecated: true,
        },
        {
          name: "--no-connect",
          description:
            "Skip connecting the resource to the current project (also skips env pull)",
        },
        {
          name: "--no-env-pull",
          description: "Skip running env pull after provisioning",
        },
        {
          name: ["-e", "--environment"],
          description: "Environment to connect",
          args: {
            name: "environment",
            suggestions: ["production", "preview", "development"],
          },
          isRepeatable: true,
        },
        prefixOption,
        {
          name: "--installation",
          description:
            "Installation ID to use when multiple installations exist for the integration",
          args: {
            name: "installation",
          },
        },
        installationIdOption,
        {
          name: "--claim",
          description:
            "If the new resource is a sandbox (e.g. Stripe, Shopify), claim it immediately without prompting",
        },
        {
          name: "--no-claim",
          description:
            "If the new resource is a sandbox, skip the offer to claim it (only print a hint)",
        },
        formatOption,
        jsonOption,
      ],
    },
    {
      name: "integration",
      description: "Manage marketplace integrations",
      subcommands: [
        {
          name: ["add", "install"],
          description: "Installs a marketplace integration",
          args: {
            name: "integration",
          },
          options: [
            {
              name: "--name",
              description:
                "Custom name for the resource (auto-generated if not provided)",
              args: {
                name: "name",
              },
            },
            {
              name: "--meta",
              description:
                "Metadata for the resource as KEY=VALUE (can be repeated)",
              args: {
                name: "key=value",
              },
              isRepeatable: true,
            },
            {
              name: ["-m", "--metadata"],
              description: "Deprecated alias for `--meta`",
              args: {
                name: "key=value",
              },
              isRepeatable: true,
              deprecated: true,
            },
            {
              name: "--billing-plan",
              description: "Billing plan ID to use for the resource",
              args: {
                name: "billing-plan",
              },
            },
            {
              name: ["-p", "--plan"],
              description: "Deprecated alias for `--billing-plan`",
              args: {
                name: "plan-id",
              },
              deprecated: true,
            },
            {
              name: "--no-connect",
              description:
                "Skip connecting the resource to the current project (also skips env pull)",
            },
            {
              name: "--no-env-pull",
              description: "Skip running env pull after provisioning",
            },
            {
              name: ["-e", "--environment"],
              description: "Environment to connect",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
              isRepeatable: true,
            },
            prefixOption,
            {
              name: "--installation",
              description:
                "Installation ID to use when multiple installations exist for the integration",
              args: {
                name: "installation",
              },
            },
            installationIdOption,
            {
              name: "--claim",
              description:
                "If the new resource is a sandbox (e.g. Stripe, Shopify), claim it immediately without prompting",
            },
            {
              name: "--no-claim",
              description:
                "If the new resource is a sandbox, skip the offer to claim it (only print a hint)",
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "accept-terms",
          description:
            "Accept marketplace legal terms for an integration and install it on the current team (installation only; no product resource)",
          args: {
            name: "integration",
          },
          options: [
            {
              name: ["-y", "--yes"],
              description: "Accept the terms without a confirmation prompt",
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "balance",
          description:
            "Shows the balances and thresholds of a specified marketplace integration",
          args: {
            name: "integration",
          },
          options: [formatOption, jsonOption],
        },
        {
          name: "categories",
          description:
            "List marketplace integration categories (slugs valid for `integration discover --category`)",
          options: [formatOption, jsonOption],
        },
        {
          name: "discover",
          description: "Discover available marketplace integrations",
          args: {
            name: "query",
            isOptional: true,
          },
          options: [
            {
              name: "--category",
              description:
                "Filter integrations by category (can be repeated; e.g., --category storage --category authentication)",
              args: {
                name: "category",
              },
              isRepeatable: true,
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "guide",
          description:
            "Show getting started guides and code snippets for a marketplace integration",
          args: {
            name: "integration",
          },
          options: [
            {
              name: "--framework",
              description:
                "Select a framework guide without interactive prompt (e.g., nextjs, remix, astro, nuxtjs, sveltekit)",
              args: {
                name: "framework",
              },
            },
          ],
        },
        {
          name: ["installations", "installation"],
          description:
            "List marketplace integration installations for the current team (account scope)",
          options: [
            {
              name: "--integration",
              description:
                "Limit to installations of this integration (slug or id)",
              args: {
                name: "slug-or-id",
              },
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: ["list", "ls"],
          description:
            "List marketplace resources for the linked project, or the team if none is linked",
          args: {
            name: "project",
            isOptional: true,
          },
          options: [
            {
              name: "--integration",
              description:
                "Limits the resources listed to a designated integration",
              args: {
                name: "name",
              },
            },
            {
              name: ["-a", "--all"],
              description: "Lists all resources regardless of project",
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "open",
          description:
            "Opens a marketplace integration's or resource's dashboard via SSO",
          args: [
            {
              name: "name",
            },
            {
              name: "resource",
              isOptional: true,
            },
          ],
          options: [formatOption, jsonOption],
        },
        {
          name: "resource",
          description:
            "Manage marketplace integration resources (inspect, connect, disconnect, delete, claim, create-threshold)",
          subcommands: [
            {
              name: "connect",
              description: "Connect a marketplace resource to a project",
              args: [
                {
                  name: "resource",
                },
                {
                  name: "project",
                  isOptional: true,
                },
              ],
              options: [
                {
                  name: ["-e", "--environment"],
                  description:
                    "Environment to connect (can be repeated; accepts production, preview, development, or a Custom Environment slug or ID) (default: all system Environments)",
                  args: {
                    name: "environment",
                    suggestions: ["production", "preview", "development"],
                  },
                  isRepeatable: true,
                },
                prefixOption,
                {
                  name: ["-y", "--yes"],
                  description:
                    "Skip the confirmation prompt when connecting a resource (required without a terminal)",
                },
                formatOption,
                jsonOption,
              ],
            },
            {
              name: "create-threshold",
              description:
                "Creates a threshold for a resource (or installation, if the integration uses installation-level thresholds)",
              args: [
                {
                  name: "resource",
                },
                {
                  name: "minimum",
                },
                {
                  name: "spend",
                },
                {
                  name: "limit",
                },
              ],
              options: [
                {
                  name: ["-y", "--yes"],
                  description:
                    "Skip the confirmation prompt when creating a threshold",
                },
              ],
            },
            {
              name: "disconnect",
              description:
                "Disconnect a marketplace resource from a project without deleting the resource",
              args: [
                {
                  name: "resource",
                },
                {
                  name: "project",
                  isOptional: true,
                },
              ],
              options: [
                {
                  name: "--all",
                  description:
                    "Disconnects all projects from the specified resource",
                },
                {
                  name: ["-y", "--yes"],
                  description:
                    "Skip the confirmation prompt when disconnecting a resource",
                },
                formatOption,
                jsonOption,
              ],
            },
            {
              name: ["delete", "rm", "del", "remove"],
              description: "Delete an integration resource",
              args: {
                name: "resource",
              },
              options: [
                {
                  name: "--disconnect-all",
                  description:
                    "Disconnects all projects from the specified resource before deletion",
                },
                {
                  name: ["-y", "--yes"],
                  description:
                    "Skip the confirmation prompt when deleting a resource",
                },
                formatOption,
                jsonOption,
              ],
            },
            {
              name: "claim",
              description:
                "Claim a sandbox marketplace resource (e.g. Stripe, Shopify) by opening the provider claim URL in your browser",
              args: {
                name: "resource",
                isOptional: true,
              },
              options: [
                {
                  name: ["-y", "--yes"],
                  description:
                    "Skip the confirmation prompt when claiming a single sandbox resource",
                },
                {
                  name: "--no-wait",
                  description:
                    "Print the claim URL and exit without polling for completion",
                },
                formatOption,
                jsonOption,
              ],
            },
            {
              name: ["inspect", "status"],
              description:
                "Show live details and status for a marketplace integration resource, fetched fresh from the provider",
              args: {
                name: "resource",
              },
              options: [formatOption, jsonOption],
            },
          ],
        },
        {
          name: "update",
          description:
            "Update a marketplace integration installation (billing plan or which projects can access it)",
          args: {
            name: "integration",
          },
          options: [
            {
              name: "--billing-plan",
              description:
                "Billing plan ID for integrations that support installation-level billing plans",
              args: {
                name: "billing-plan",
              },
            },
            {
              name: ["-p", "--plan"],
              description: "Deprecated alias for `--billing-plan`",
              args: {
                name: "plan-id",
              },
              deprecated: true,
            },
            {
              name: "--authorization",
              description:
                "Billing authorization ID when the platform requires it for plan changes",
              args: {
                name: "authorization",
              },
            },
            {
              name: "--authorization-id",
              description: "Deprecated alias for `--authorization`",
              args: {
                name: "id",
              },
              deprecated: true,
            },
            {
              name: "--projects",
              description:
                'Project ID allowed to use this installation, or "all" for all projects (repeatable)',
              args: {
                name: "project",
              },
              isRepeatable: true,
            },
            {
              name: "--installation",
              description:
                "Configuration ID when multiple marketplace installations exist for this integration",
              args: {
                name: "installation",
              },
            },
            installationIdOption,
            formatOption,
            jsonOption,
          ],
        },
        {
          name: ["remove", "rm"],
          description: "Remove a marketplace integration",
          args: {
            name: "integration",
          },
          options: [
            {
              name: ["-y", "--yes"],
              description:
                "Skip the confirmation prompt when removing an integration",
            },
            formatOption,
            jsonOption,
          ],
        },
      ],
    },
    {
      name: ["integration-resource", "ir"],
      description: "Manage integration resources",
      subcommands: [
        {
          name: "connect",
          description: "Connect a marketplace resource to a project",
          args: [
            {
              name: "resource",
            },
            {
              name: "project",
              isOptional: true,
            },
          ],
          options: [
            {
              name: ["-e", "--environment"],
              description:
                "Environment to connect (can be repeated; accepts production, preview, development, or a Custom Environment slug or ID) (default: all system Environments)",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
              isRepeatable: true,
            },
            prefixOption,
            {
              name: ["-y", "--yes"],
              description:
                "Skip the confirmation prompt when connecting a resource (required without a terminal)",
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "create-threshold",
          description:
            "Creates a threshold for a resource (or installation, if the integration uses installation-level thresholds)",
          args: [
            {
              name: "resource",
            },
            {
              name: "minimum",
            },
            {
              name: "spend",
            },
            {
              name: "limit",
            },
          ],
          options: [
            {
              name: ["-y", "--yes"],
              description:
                "Skip the confirmation prompt when creating a threshold",
            },
          ],
        },
        {
          name: "disconnect",
          description:
            "Disconnect a marketplace resource from a project without deleting the resource",
          args: [
            {
              name: "resource",
            },
            {
              name: "project",
              isOptional: true,
            },
          ],
          options: [
            {
              name: "--all",
              description:
                "Disconnects all projects from the specified resource",
            },
            {
              name: ["-y", "--yes"],
              description:
                "Skip the confirmation prompt when disconnecting a resource",
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: ["delete", "rm", "del", "remove"],
          description: "Delete an integration resource",
          args: {
            name: "resource",
          },
          options: [
            {
              name: "--disconnect-all",
              description:
                "Disconnects all projects from the specified resource before deletion",
            },
            {
              name: ["-y", "--yes"],
              description:
                "Skip the confirmation prompt when deleting a resource",
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "claim",
          description:
            "Claim a sandbox marketplace resource (e.g. Stripe, Shopify) by opening the provider claim URL in your browser",
          args: {
            name: "resource",
            isOptional: true,
          },
          options: [
            {
              name: ["-y", "--yes"],
              description:
                "Skip the confirmation prompt when claiming a single sandbox resource",
            },
            {
              name: "--no-wait",
              description:
                "Print the claim URL and exit without polling for completion",
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: ["inspect", "status"],
          description:
            "Show live details and status for a marketplace integration resource, fetched fresh from the provider",
          args: {
            name: "resource",
          },
          options: [formatOption, jsonOption],
        },
      ],
    },
    {
      name: "kms",
      description: "Manage KMS issuers, signing keys, and project grants",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "Show all KMS issuers",
          options: [formatOption, jsonOption, limitOption, nextOption],
        },
        {
          name: ["inspect", "get"],
          description: "Show an issuer with its signing keys and grants",
          args: {
            name: "issuerId",
          },
          options: [formatOption, jsonOption],
        },
        {
          name: ["create", "add"],
          description: "Create an issuer with a Vercel-generated signing key",
          args: {
            name: "name",
          },
          options: [
            {
              name: "--algorithm",
              description:
                "Signing algorithm: RS256, RS384, RS512, PS256, PS384, PS512, ES256, ES384, ES512, EdDSA (default: RS512)",
              args: {
                name: "algorithm",
                suggestions: kmsAlgorithms,
              },
            },
            {
              name: "--claims-schema",
              description:
                "JSON Schema validating token claims, as inline JSON, `@<file>`, or `@-` for stdin",
              args: {
                name: "json",
              },
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "import",
          description: "Create an issuer from a private key you already have",
          args: {
            name: "name",
          },
          options: [
            {
              name: "--key",
              description:
                "Path to the PEM private key to import, or `-` to read it from stdin",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: "--key-id",
              description:
                "JWKS `kid` for the imported key (default: server-generated)",
              args: {
                name: "kid",
              },
            },
            {
              name: "--algorithm",
              description:
                "Signing algorithm: RS256, RS384, RS512, PS256, PS384, PS512, ES256, ES384, ES512, EdDSA (required for RSA keys, otherwise derived from the key)",
              args: {
                name: "algorithm",
                suggestions: kmsAlgorithms,
              },
            },
            {
              name: "--claims-schema",
              description:
                "JSON Schema validating token claims, as inline JSON, `@<file>`, or `@-` for stdin",
              args: {
                name: "json",
              },
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "update",
          description: "Rename an issuer or change its claims schema",
          args: {
            name: "issuerId",
          },
          options: [
            {
              name: "--name",
              description: "New name for the issuer",
              args: {
                name: "name",
              },
            },
            {
              name: "--claims-schema",
              description:
                "JSON Schema validating token claims, as inline JSON, `@<file>`, or `@-` for stdin",
              args: {
                name: "json",
              },
            },
            {
              name: "--remove-claims-schema",
              description:
                "Remove the claims schema, so claims are no longer validated",
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: ["delete", "rm", "del", "remove"],
          description: "Delete an issuer and all of its keys",
          args: {
            name: "issuerId",
          },
          options: [
            {
              name: ["-y", "--yes"],
              description:
                "Skip the confirmation prompt when deleting an issuer",
            },
          ],
        },
        {
          name: "add-key",
          description: "Add a Vercel-generated signing key to an issuer",
          args: {
            name: "issuerId",
          },
          options: [
            {
              name: "--activation",
              description:
                "When the key starts signing: automatic or manual (default: automatic)",
              args: {
                name: "mode",
                suggestions: ["automatic", "manual"],
              },
            },
            {
              name: "--revoke-previous-after-hours",
              description:
                "Hours the previous key keeps verifying after activation (default: 1)",
              args: {
                name: "hours",
              },
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "import-key",
          description:
            "Add a signing key you already have to an imported issuer",
          args: {
            name: "issuerId",
          },
          options: [
            {
              name: "--key",
              description:
                "Path to the PEM private key to import, or `-` to read it from stdin",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: "--key-id",
              description:
                "JWKS `kid` for the imported key (default: server-generated)",
              args: {
                name: "kid",
              },
            },
            {
              name: "--activation",
              description:
                "When the key starts signing: automatic or manual (default: automatic)",
              args: {
                name: "mode",
                suggestions: ["automatic", "manual"],
              },
            },
            {
              name: "--revoke-previous-after-hours",
              description:
                "Hours the previous key keeps verifying after activation (default: 1)",
              args: {
                name: "hours",
              },
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "activate-key",
          description: "Start signing with a staged key",
          args: [
            {
              name: "issuerId",
            },
            {
              name: "keyId",
            },
          ],
          options: [
            {
              name: "--revoke-previous-after-hours",
              description:
                "Hours the previous key keeps verifying after activation (default: 1)",
              args: {
                name: "hours",
              },
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "revoke-key",
          description:
            "End a scheduled revocation now, so a key stops verifying",
          args: [
            {
              name: "issuerId",
            },
            {
              name: "keyId",
            },
          ],
          options: [
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt when revoking a key",
            },
          ],
        },
        {
          name: "add-grant",
          description: "Grant a project permission to sign with an issuer",
          args: {
            name: "issuerId",
          },
          options: [
            projectOption,
            {
              name: ["-e", "--environment"],
              description:
                "Environment the grant applies to: a system environment (production, preview, development) or a custom environment ID (env_…)",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
              isRepeatable: true,
            },
            {
              name: "--token-claims",
              description:
                "Claims to include in tokens signed for this grant, as inline JSON, `@<file>`, or `@-` for stdin",
              args: {
                name: "json",
              },
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "update-grant",
          description: "Change a project grant's environments or token claims",
          args: [
            {
              name: "issuerId",
            },
            {
              name: "projectId",
            },
          ],
          options: [
            {
              name: ["-e", "--environment"],
              description:
                "Environment the grant applies to: a system environment (production, preview, development) or a custom environment ID (env_…)",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
              isRepeatable: true,
            },
            {
              name: "--token-claims",
              description:
                "Claims to include in tokens signed for this grant, as inline JSON, `@<file>`, or `@-` for stdin",
              args: {
                name: "json",
              },
            },
            {
              name: "--remove-token-claims",
              description: "Remove the token claims from the grant",
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: ["remove-grant", "rm-grant", "delete-grant"],
          description: "Revoke a project's permission to sign with an issuer",
          args: [
            {
              name: "issuerId",
            },
            {
              name: "projectId",
            },
          ],
          options: [
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt when removing a grant",
            },
          ],
        },
      ],
    },
    {
      name: "link",
      description: "Link a local directory to a Vercel project",
      options: [
        {
          name: "--repo",
          description:
            "Link multiple projects from the Git repository (alpha; per-directory project links take precedence)",
        },
        {
          name: ["-p", "--project"],
          description:
            "Set the project name or ID to link; required for non-interactive existing-project links",
          args: {
            name: "name-or-id",
          },
        },
        {
          name: "--team",
          description: "Deprecated alias for `--scope`",
          args: {
            name: "team-id-or-slug",
          },
          deprecated: true,
        },
        {
          name: ["-y", "--yes"],
          description:
            "Skip questions when setting up with default team and settings",
        },
        confirmOption,
        jsonOption,
      ],
      subcommands: [
        {
          name: "add",
          description:
            "Add projects to an existing repository link created by link --repo",
          options: [
            {
              name: ["-y", "--yes"],
              description:
                "Skip questions when adding projects with default team and settings",
            },
          ],
        },
      ],
    },
    {
      name: ["list", "ls"],
      description: "List deployments",
      args: {
        name: "app",
        isOptional: true,
      },
      options: [
        {
          name: ["-a", "--all"],
          description: "List resources across all projects",
        },
        {
          name: "--meta",
          description:
            "Filter deployments by metadata (e.g. `--meta KEY=value`)",
          args: {
            name: "key=value",
          },
          isRepeatable: true,
        },
        {
          name: "--policy",
          description:
            "See deployments with provided Deployment Retention policies (e.g. `--policy KEY=value`)",
          args: {
            name: "key=value",
          },
          isRepeatable: true,
        },
        {
          name: ["-e", "--environment"],
          description: "Filter deployments by environment",
          args: {
            name: "environment",
            suggestions: ["production", "preview", "development"],
          },
        },
        {
          name: "--status",
          description: "Filter deployments by their status",
          args: {
            name: "status",
          },
        },
        nextOption,
        limitOption,
        {
          name: "--prod",
          deprecated: true,
        },
        yesOption,
        confirmOption,
        formatOption,
        jsonOption,
      ],
    },
    {
      name: "login",
      description: "Sign in to your Vercel account",
      options: [
        {
          name: "--github",
          description: "Log in with GitHub",
          deprecated: true,
        },
        {
          name: "--oob",
          description: 'Log in with "out of band" authentication',
          deprecated: true,
        },
        {
          name: "--gitlab",
          deprecated: true,
        },
        {
          name: "--bitbucket",
          deprecated: true,
        },
        {
          name: "--future",
          description: "Sign in using OAuth Device Authorization",
          deprecated: true,
        },
      ],
    },
    {
      name: "logout",
      description: "Sign out the currently authenticated user",
    },
    {
      name: ["logs", "log"],
      description: "Display logs",
      options: [
        {
          name: "--deployment",
          description: "Filter to a deployment ID or URL",
          args: {
            name: "deployment",
          },
        },
        {
          name: ["-e", "--environment"],
          description: "Filter by environment, including custom environments",
          args: {
            name: "environment",
            suggestions: ["production", "preview", "development"],
          },
        },
        {
          name: ["-q", "--query"],
          description: "Filter the selected source with KQL-inspired syntax",
          args: {
            name: "expression",
          },
        },
        formatOption,
        jsonOption4,
        {
          name: ["-n", "--limit"],
          description: "Limit returned records (default: 100, max: 10000)",
          args: {
            name: "number",
          },
        },
        {
          name: "--next",
          description:
            "Continue a previous query from its summary's next value",
          args: {
            name: "cursor",
          },
        },
        {
          name: ["-p", "--project"],
          description: "Select a project (default: linked project)",
          args: {
            name: "name-or-id",
          },
        },
        {
          name: ["-s", "--since"],
          description:
            "Start time: ISO 8601, relative, or now (default: 30m before the end)",
          args: {
            name: "time",
          },
        },
        {
          name: ["-u", "--until"],
          description: "End time: ISO 8601, relative, or now (default: now)",
          args: {
            name: "time",
          },
        },
        {
          name: ["-f", "--follow"],
          description: "Deprecated; logs always returns a bounded result",
          deprecated: true,
        },
      ],
      subcommands: [
        {
          name: "runtime",
          description: "Display runtime log entries",
          options: [
            {
              name: "--deployment",
              description: "Filter to a deployment ID or URL",
              args: {
                name: "deployment",
              },
            },
            {
              name: ["-e", "--environment"],
              description:
                "Filter by environment, including custom environments",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
            },
            {
              name: ["-q", "--query"],
              description: "Filter runtime entries with KQL-inspired syntax",
              args: {
                name: "expression",
              },
            },
            formatOption,
            jsonOption4,
            {
              name: ["-n", "--limit"],
              description: "Limit returned entries (default: 100, max: 10000)",
              args: {
                name: "number",
              },
            },
            {
              name: "--next",
              description:
                "Continue a previous query from its summary's next value",
              args: {
                name: "cursor",
              },
            },
            {
              name: ["-p", "--project"],
              description: "Select a project (default: linked project)",
              args: {
                name: "name-or-id",
              },
            },
            {
              name: ["-s", "--since"],
              description:
                "Start time: ISO 8601, relative, or now (default: 30m before the end)",
              args: {
                name: "time",
              },
            },
            {
              name: ["-u", "--until"],
              description:
                "End time: ISO 8601, relative, or now (default: now)",
              args: {
                name: "time",
              },
            },
            {
              name: ["-f", "--follow"],
              description: "Deprecated; logs always returns a bounded result",
              deprecated: true,
            },
          ],
        },
        {
          name: "requests",
          description: "Display CDN request records",
          options: [
            {
              name: "--deployment",
              description: "Filter to a deployment ID or URL",
              args: {
                name: "deployment",
              },
            },
            {
              name: ["-e", "--environment"],
              description:
                "Filter by environment, including custom environments",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
            },
            {
              name: ["-q", "--query"],
              description: "Filter requests with KQL-inspired syntax",
              args: {
                name: "expression",
              },
            },
            formatOption,
            jsonOption4,
            {
              name: ["-n", "--limit"],
              description: "Limit returned requests (default: 100, max: 10000)",
              args: {
                name: "number",
              },
            },
            {
              name: "--next",
              description:
                "Continue a previous query from its summary's next value",
              args: {
                name: "cursor",
              },
            },
            {
              name: ["-p", "--project"],
              description: "Select a project (default: linked project)",
              args: {
                name: "name-or-id",
              },
            },
            {
              name: ["-s", "--since"],
              description:
                "Start time: ISO 8601, relative, or now (default: 30m before the end)",
              args: {
                name: "time",
              },
            },
            {
              name: ["-u", "--until"],
              description:
                "End time: ISO 8601, relative, or now (default: now)",
              args: {
                name: "time",
              },
            },
            {
              name: ["-f", "--follow"],
              description: "Deprecated; logs always returns a bounded result",
              deprecated: true,
            },
          ],
        },
      ],
    },
    {
      name: "mcp",
      description: "Set up MCP agents for Vercel",
      options: [
        {
          name: "--project",
          description:
            "Set up project-specific MCP access for the currently linked project",
        },
        {
          name: "--clients",
          description: "Comma-separated list of MCP clients to set up",
          args: {
            name: "clients",
          },
        },
      ],
    },
    {
      name: ["microfrontends", "mf"],
      description: "Manage microfrontends groups",
      subcommands: [
        {
          name: "create-group",
          description:
            "Create a new microfrontends group to compose multiple projects into one cohesive application with shared routing",
          options: [
            {
              name: "--name",
              description: "Name of the microfrontends group",
              args: {
                name: "name",
              },
            },
            {
              name: ["-p", "--project"],
              description: "Project name to include (repeatable)",
              args: {
                name: "project",
              },
              isRepeatable: true,
            },
            {
              name: "--default-app",
              description: "Project name for the default application",
              args: {
                name: "default-app",
              },
            },
            {
              name: "--default-route",
              description: "Default route for the default application",
              args: {
                name: "default-route",
              },
            },
            {
              name: "--project-default-route",
              description:
                'Default route for a non-default project in the form "<project>=<route>" (repeatable)',
              args: {
                name: "project-default-route",
              },
              isRepeatable: true,
            },
            {
              name: ["-y", "--yes"],
              description: "Skip creation confirmation prompt",
            },
          ],
        },
        {
          name: "add-to-group",
          description:
            "Add the current project to a microfrontends group so it can be independently deployed as part of the microfrontends group",
          options: [
            {
              name: "--group",
              description: "Name of the microfrontends group to add to",
              args: {
                name: "group",
              },
            },
            {
              name: "--default-route",
              description: "Default route for this project (e.g. /docs)",
              args: {
                name: "default-route",
              },
            },
          ],
        },
        {
          name: "remove-from-group",
          description:
            "Remove the current project from its microfrontends group so it is no longer part of the composed application",
          options: [
            {
              name: ["-y", "--yes"],
              description:
                "Skip the removal confirmations, including the one for a project still in microfrontends.json",
            },
          ],
        },
        {
          name: "delete-group",
          description: "Delete a microfrontends group and all of its settings",
          options: [
            {
              name: ["-y", "--yes"],
              description:
                "Skip the deletion confirmation (without a terminal, also pass --group)",
            },
            {
              name: "--group",
              description: "Name or ID of the microfrontends group to delete",
              args: {
                name: "group",
              },
            },
          ],
        },
        {
          name: "inspect-group",
          description:
            "Inspect a microfrontends group and return project metadata used for setup automation",
          options: [
            {
              name: "--group",
              description: "Name or ID of the microfrontends group to inspect",
              args: {
                name: "group",
              },
            },
            {
              name: "--config-file-name",
              description:
                "Custom microfrontends config file path/name relative to the default app root (must end with .json or .jsonc)",
              args: {
                name: "config-file-name",
              },
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "pull",
          description:
            "Pull a Vercel Microfrontends configuration into your project",
          options: [
            yesOption4,
            {
              name: "--deployment",
              description:
                "The deployment ID to use for pulling the microfrontends configuration",
              args: {
                name: "deployment",
              },
            },
            dplOption,
          ],
        },
      ],
    },
    {
      name: "monitors",
      description:
        "Add, inspect, list, update, and remove monitors, and manage their notification destinations",
      options: [
        projectOption3,
        {
          name: ["-a", "--all"],
          description: "List all accessible monitors in the selected team",
        },
        {
          name: "--type",
          description: "Filter by monitor type",
          args: {
            name: "type",
          },
          isRepeatable: true,
        },
        formatOption,
        jsonOption,
      ],
      subcommands: [
        {
          name: ["ls", "list"],
          description: "List monitors for a project or team",
          options: [
            projectOption3,
            {
              name: ["-a", "--all"],
              description: "List all accessible monitors in the selected team",
            },
            {
              name: "--type",
              description: "Filter by monitor type",
              args: {
                name: "type",
              },
              isRepeatable: true,
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "schema",
          description: "Show monitor request fields and examples",
          options: [
            {
              name: "--type",
              description: "Monitor type to describe",
              args: {
                name: "type",
              },
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: ["add", "create"],
          description: "Add a monitor from a JSON body",
          options: [
            projectOption3,
            {
              name: ["-a", "--all"],
              description:
                "Apply the monitor to all projects in the selected team",
            },
            formatOption,
            jsonOption,
            {
              name: "--body",
              description: "Read the monitor body from a JSON file",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
          ],
        },
        {
          name: ["inspect", "get"],
          description: "Show one monitor by ID",
          args: {
            name: "monitorId",
          },
          options: [
            {
              name: ["-p", "--project"],
              description: "Use a project by name or ID",
              args: {
                name: "name-or-id",
              },
              deprecated: true,
            },
            {
              name: ["-a", "--all"],
              description: "List all accessible monitors in the selected team",
              deprecated: true,
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: ["remove", "rm", "delete"],
          description: "Remove a monitor",
          args: {
            name: "monitorId",
          },
          options: [
            {
              name: ["-p", "--project"],
              description: "Use a project by name or ID",
              args: {
                name: "name-or-id",
              },
              deprecated: true,
            },
            {
              name: ["-a", "--all"],
              description: "List all accessible monitors in the selected team",
              deprecated: true,
            },
            formatOption,
            jsonOption,
            yesOption,
          ],
        },
        {
          name: ["update", "patch"],
          description: "Update a monitor's settings or scope",
          args: {
            name: "monitorId",
          },
          options: [
            projectOption3,
            {
              name: ["-a", "--all"],
              description:
                "Apply the monitor to all projects in the selected team",
            },
            formatOption,
            jsonOption,
            {
              name: "--body",
              description: "Read the partial update body from a JSON file",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
          ],
        },
        {
          name: "notifications",
          description:
            "List and manage linked Slack and webhook destinations for monitors",
          options: [formatOption, jsonOption],
          subcommands: [
            {
              name: ["ls", "list"],
              description:
                "List notification destinations for all readable monitors or one monitor",
              args: {
                name: "monitorId",
                isOptional: true,
              },
              options: [formatOption, jsonOption],
            },
            {
              name: "link",
              description:
                "Link a Slack channel or account webhook to a monitor",
              args: {
                name: "monitorId",
              },
              options: [
                {
                  name: "--webhook",
                  description: "Select an account webhook by ID",
                  args: {
                    name: "webhook-id",
                  },
                },
                {
                  name: "--slack-channel",
                  description: "Select a Slack channel by ID",
                  args: {
                    name: "channel-id",
                  },
                },
                {
                  name: "--slack-installation-id",
                  description:
                    "Slack installation ID. Optional only when the team has exactly one completed Slack installation",
                  args: {
                    name: "installation-id",
                  },
                },
                {
                  name: "--critical-only",
                  description:
                    "Notify only when Vercel Agent escalates an alert to Critical",
                },
                formatOption,
                jsonOption,
              ],
            },
            {
              name: ["update", "patch"],
              description:
                "Update a notification destination's delivery setting",
              args: {
                name: "monitorId",
              },
              options: [
                {
                  name: "--webhook",
                  description: "Select an account webhook by ID",
                  args: {
                    name: "webhook-id",
                  },
                },
                {
                  name: "--slack-channel",
                  description: "Select a Slack channel by ID",
                  args: {
                    name: "channel-id",
                  },
                },
                {
                  name: "--slack-installation-id",
                  description:
                    "Slack installation ID. Optional only when the team has exactly one completed Slack installation",
                  args: {
                    name: "installation-id",
                  },
                },
                {
                  name: "--critical-only",
                  description:
                    "Notify only when Vercel Agent escalates an alert to Critical",
                },
                {
                  name: "--no-critical-only",
                  description: "Deliver every alert matched by the monitor",
                },
                formatOption,
                jsonOption,
              ],
            },
            {
              name: "unlink",
              description:
                "Unlink a Slack channel or account webhook from a monitor",
              args: {
                name: "monitorId",
              },
              options: [
                {
                  name: "--webhook",
                  description: "Select an account webhook by ID",
                  args: {
                    name: "webhook-id",
                  },
                },
                {
                  name: "--slack-channel",
                  description: "Select a Slack channel by ID",
                  args: {
                    name: "channel-id",
                  },
                },
                {
                  name: "--slack-installation-id",
                  description:
                    "Slack installation ID. Optional only when the team has exactly one completed Slack installation",
                  args: {
                    name: "installation-id",
                  },
                },
                formatOption,
                jsonOption,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "open",
      description: "Opens the current project in the Vercel Dashboard",
      options: [yesOption4],
    },
    {
      name: ["organizations", "organization"],
      description: "Manage Vercel organizations",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List organizations you can view",
          options: [
            formatOption,
            jsonOption,
            {
              name: ["-n", "--limit"],
              description:
                "Number of results to return (default: 20, max: 100)",
              args: {
                name: "number",
              },
            },
            nextOption,
          ],
        },
        {
          name: "inspect",
          description: "Show an organization by ID or slug",
          args: {
            name: "organization",
            isOptional: true,
          },
          options: [formatOption, jsonOption],
        },
        {
          name: "create",
          description: "Create an organization using an existing team",
          options: [
            formatOption,
            jsonOption,
            {
              name: "--slug",
              description: "Set the slug (required)",
              args: {
                name: "slug",
              },
            },
            {
              name: "--name",
              description: "Set the display name",
              args: {
                name: "name",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update an organization slug",
          args: {
            name: "organization",
            isOptional: true,
          },
          options: [
            formatOption,
            jsonOption,
            {
              name: "--slug",
              description: "Set the slug (required)",
              args: {
                name: "slug",
              },
            },
          ],
        },
        {
          name: ["teams", "team"],
          description: "Manage organization child teams",
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List teams in an organization",
              args: {
                name: "organization",
                isOptional: true,
              },
              options: [
                formatOption,
                jsonOption,
                {
                  name: ["-n", "--limit"],
                  description:
                    "Number of results to return (default: 20, max: 100)",
                  args: {
                    name: "number",
                  },
                },
                nextOption,
              ],
            },
            {
              name: "create",
              description:
                "Create a child team billed through the organization",
              args: {
                name: "organization",
                isOptional: true,
              },
              options: [
                formatOption,
                jsonOption,
                {
                  name: "--slug",
                  description: "Set the slug (required)",
                  args: {
                    name: "slug",
                  },
                },
                {
                  name: "--name",
                  description: "Set the display name (required)",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--billing-plan",
                  description:
                    "Set the child billing plan: platform or enterprise (default: platform)",
                  args: {
                    name: "billing-plan",
                    suggestions: ["platform", "enterprise"],
                  },
                },
                {
                  name: ["-y", "--yes"],
                  description: "Confirm the billing change without a prompt",
                },
              ],
            },
            {
              name: "add",
              description:
                "Add an existing team and move its billing under the organization",
              args: {
                name: "organization",
                isOptional: true,
              },
              options: [
                formatOption,
                jsonOption,
                {
                  name: "--child-team",
                  description:
                    "Select the existing team to add, by ID or slug (required)",
                  args: {
                    name: "team",
                  },
                },
                {
                  name: "--billing-plan",
                  description:
                    "Set the child billing plan: platform or enterprise (default: derived from the existing team)",
                  args: {
                    name: "billing-plan",
                    suggestions: ["platform", "enterprise"],
                  },
                },
                {
                  name: ["-y", "--yes"],
                  description: "Confirm the billing change without a prompt",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "page-integrity",
      description:
        "Monitor and block the scripts, headers, and connections your pages load",
      options: [jsonOption],
      subcommands: [
        {
          name: "status",
          description: "Show monitoring, blocking, and what needs review",
          options: [jsonOption, projectOption],
        },
        {
          name: "enable",
          description: "Start monitoring paths in report-only mode",
          options: [
            {
              name: "--path",
              description:
                "Path pattern to monitor, such as /checkout/:path*. Repeat for more paths",
              args: {
                name: "pattern",
              },
              isRepeatable: true,
            },
            {
              name: "--exact",
              description: "Exact path to monitor. Repeat for more paths",
              args: {
                name: "path",
              },
              isRepeatable: true,
            },
            {
              name: "--regex",
              description:
                "Regular expression for the paths to monitor. Repeat for more",
              args: {
                name: "regex",
              },
              isRepeatable: true,
            },
            {
              name: ["-y", "--yes"],
              description: "Reuse the saved paths without asking",
            },
            jsonOption,
            projectOption,
          ],
        },
        {
          name: "disable",
          description: "Stop monitoring and turn off blocking",
          options: [
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt",
            },
            jsonOption,
            projectOption,
          ],
        },
        {
          name: ["scripts", "script"],
          description: "List and inspect Page Integrity scripts",
          options: [jsonOption],
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List Page Integrity scripts for a project",
              options: [
                jsonOption,
                limitOption,
                nextOption,
                projectOption,
                {
                  name: ["-a", "--all"],
                  description: "Include auto-approved scripts",
                },
                {
                  name: "--status",
                  description:
                    "Only show scripts with these statuses: pending, approved, rejected, auto-approved. Repeatable and comma-separated",
                  args: {
                    name: "status",
                    suggestions: [
                      "pending",
                      "approved",
                      "rejected",
                      "auto-approved",
                    ],
                  },
                  isRepeatable: true,
                },
              ],
            },
            {
              name: "inspect",
              description: "Show details about a specific script resource",
              args: {
                name: "script",
                template: "filepaths",
              },
              options: [jsonOption, projectOption],
            },
          ],
        },
        {
          name: ["headers", "header"],
          description: "List and inspect Page Integrity headers",
          options: [jsonOption],
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List Page Integrity headers for a project",
              options: [
                jsonOption,
                limitOption,
                nextOption,
                projectOption,
                {
                  name: "--status",
                  description:
                    "Only show headers with these statuses: pending, approved, rejected. Repeatable and comma-separated",
                  args: {
                    name: "status",
                    suggestions: ["pending", "approved", "rejected"],
                  },
                  isRepeatable: true,
                },
              ],
            },
            {
              name: "inspect",
              description: "Show details about a specific header resource",
              args: {
                name: "header",
              },
              options: [jsonOption, projectOption],
            },
          ],
        },
        {
          name: ["connections", "connection"],
          description: "List and inspect Page Integrity connections",
          options: [jsonOption],
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List Page Integrity connections for a project",
              options: [
                jsonOption,
                limitOption,
                nextOption,
                projectOption,
                {
                  name: ["-a", "--all"],
                  description: "Include auto-approved connections",
                },
                {
                  name: "--status",
                  description:
                    "Only show connections with these statuses: pending, approved, rejected, auto-approved. Repeatable and comma-separated",
                  args: {
                    name: "status",
                    suggestions: [
                      "pending",
                      "approved",
                      "rejected",
                      "auto-approved",
                    ],
                  },
                  isRepeatable: true,
                },
              ],
            },
            {
              name: "inspect",
              description: "Show details about a specific connection resource",
              args: {
                name: "connection",
              },
              options: [jsonOption, projectOption],
            },
          ],
        },
      ],
      hidden: true,
    },
    {
      name: "pricing",
      description: "Compare public plan features",
      args: {
        name: "query",
        isOptional: true,
        isVariadic: true,
      },
      options: [formatOption, jsonOption],
    },
    {
      name: ["project", "projects"],
      description: "Manage your Vercel projects",
      subcommands: [
        {
          name: ["create", "add"],
          description: "Create a new project",
          args: {
            name: "name",
          },
        },
        {
          name: ["access-summary", "summary"],
          description:
            "Show member counts by team role for project access (requires access groups entitlement)",
          args: {
            name: "name",
            isOptional: true,
          },
          options: [formatOption, jsonOption],
        },
        {
          name: "checks",
          description: "List, add, or remove deployment checks for a project",
          args: {
            name: "name",
            isOptional: true,
          },
          options: [
            formatOption,
            jsonOption,
            {
              name: "--blocks",
              description: "When listing: filter by blocking stage",
              args: {
                name: "blocks",
              },
            },
            {
              name: "--file",
              description:
                "Path to JSON file for the POST body (see REST: Create a check)",
              args: {
                name: "file",
              },
            },
            {
              name: "--check-name",
              description:
                "Name of the deployment check (required with --requires unless --file is set)",
              args: {
                name: "check-name",
              },
            },
            {
              name: "--requires",
              description:
                "When the check runs: build-ready, deployment-url, or none (required with --check-name unless --file)",
              args: {
                name: "requires",
                suggestions: ["build-ready", "deployment-url", "none"],
              },
            },
            {
              name: "--timeout",
              description:
                "Timeout in seconds for the new check (default: 300)",
              args: {
                name: "timeout",
              },
            },
            {
              name: "--targets",
              description:
                "Comma-separated deployment targets (e.g. production,preview)",
              args: {
                name: "targets",
              },
            },
            {
              name: "--source",
              description:
                "JSON string for the `source` object (integration, webhook, or git-provider)",
              args: {
                name: "source",
              },
            },
          ],
        },
        {
          name: "inspect",
          description: "Displays information related to a project",
          args: {
            name: "name",
            isOptional: true,
          },
          options: [yesOption, formatOption, jsonOption],
        },
        {
          name: ["list", "ls"],
          description: "Show all projects in the selected scope",
          options: [
            nextOption,
            limitOption,
            formatOption,
            jsonOption,
            {
              name: "--update-required",
              description:
                "A list of projects affected by an upcoming deprecation",
            },
            {
              name: "--paused",
              description:
                "Show only projects whose production traffic is paused",
            },
            {
              name: ["-a", "--all"],
              description:
                "Show the projects from every page (can't be used with --limit or --next)",
            },
            {
              name: ["-q", "--query"],
              description:
                "Search projects by name or domain on the server (returns at most 300 projects)",
              args: {
                name: "text",
              },
            },
            {
              name: ["-f", "--filter"],
              description: "Deprecated alias for `--query`",
              args: {
                name: "name",
              },
              deprecated: true,
            },
          ],
        },
        {
          name: ["members", "member"],
          description: "List, add, or remove project members for a project",
          args: {
            name: "name",
            isOptional: true,
          },
          options: [
            formatOption,
            jsonOption,
            {
              name: ["-q", "--query"],
              description: "Search project members by name, username, or email",
              args: {
                name: "text",
              },
            },
            {
              name: "--search",
              description: "Deprecated alias for `--query`",
              args: {
                name: "search",
              },
              deprecated: true,
            },
            {
              name: ["-n", "--limit"],
              description: "Limit number of project members returned (1-100)",
              args: {
                name: "limit",
              },
            },
            nextOption,
            {
              name: "--role",
              description:
                "Project role when adding a member: ADMIN, PROJECT_DEVELOPER, PROJECT_VIEWER, PROJECT_GUEST",
              args: {
                name: "role",
                suggestions: [
                  "ADMIN",
                  "PROJECT_DEVELOPER",
                  "PROJECT_VIEWER",
                  "PROJECT_GUEST",
                ],
              },
            },
          ],
        },
        {
          name: ["access-groups", "accessgroups"],
          description: "List access groups for a project",
          args: {
            name: "name",
            isOptional: true,
          },
          options: [
            formatOption,
            jsonOption,
            nextOption,
            {
              name: ["-q", "--query"],
              description: "Search access groups by name",
              args: {
                name: "text",
              },
            },
            {
              name: "--search",
              description: "Deprecated alias for `--query`",
              args: {
                name: "search",
              },
              deprecated: true,
            },
            {
              name: ["-n", "--limit"],
              description: "Limit number of access groups returned (1-100)",
              args: {
                name: "limit",
              },
            },
          ],
        },
        {
          name: "protection",
          description:
            "Show or toggle deployment protection settings for a project",
          args: {
            name: "name",
            isOptional: true,
          },
          options: [formatOption, jsonOption],
          subcommands: [
            {
              name: "enable",
              description:
                "Turn on deployment protection settings for a project",
              args: {
                name: "name",
                isOptional: true,
              },
              options: [
                formatOption,
                jsonOption,
                {
                  name: ["-y", "--yes"],
                  description: "Accepted for scripts",
                },
                {
                  name: "--sso",
                  description: "Apply action to SSO protection",
                },
                {
                  name: "--password",
                  description:
                    "Apply action to password protection (requires eligible plan/permissions)",
                },
                {
                  name: "--protection-password",
                  description:
                    "Password value when enabling password protection (max 72 characters)",
                  args: {
                    name: "password",
                  },
                },
                {
                  name: "--customer-support-code-visibility",
                  description:
                    "Apply action to customer support code visibility protection",
                },
                {
                  name: "--skew",
                  description: "Apply action to skew protection",
                },
                {
                  name: "--skew-max-age",
                  description:
                    "When enabling with --skew, max age in seconds for skew protection (default: 2592000, 30 days)",
                  args: {
                    name: "seconds",
                  },
                },
                {
                  name: "--protection-bypass",
                  description:
                    "Apply action to automation protection bypass secrets",
                },
                {
                  name: "--protection-bypass-secret",
                  description: "Optional secret value for protection bypass",
                  args: {
                    name: "secret",
                  },
                },
                {
                  name: "--git-fork-protection",
                  description: "Apply action to Git fork protection",
                },
              ],
            },
            {
              name: "disable",
              description:
                "Turn off deployment protection settings for a project",
              args: {
                name: "name",
                isOptional: true,
              },
              options: [
                formatOption,
                jsonOption,
                {
                  name: ["-y", "--yes"],
                  description:
                    "Skip confirmation prompts (disabling never prompts)",
                },
                {
                  name: "--sso",
                  description: "Apply action to SSO protection",
                },
                {
                  name: "--password",
                  description:
                    "Apply action to password protection (requires eligible plan/permissions)",
                },
                {
                  name: "--protection-password",
                  description:
                    "Password value when enabling password protection (max 72 characters)",
                  args: {
                    name: "password",
                  },
                },
                {
                  name: "--customer-support-code-visibility",
                  description:
                    "Apply action to customer support code visibility protection",
                },
                {
                  name: "--skew",
                  description: "Apply action to skew protection",
                },
                {
                  name: "--skew-max-age",
                  description:
                    "When enabling with --skew, max age in seconds for skew protection (default: 2592000, 30 days)",
                  args: {
                    name: "seconds",
                  },
                },
                {
                  name: "--protection-bypass",
                  description:
                    "Apply action to automation protection bypass secrets",
                },
                {
                  name: "--protection-bypass-secret",
                  description: "Optional secret value for protection bypass",
                  args: {
                    name: "secret",
                  },
                },
                {
                  name: "--git-fork-protection",
                  description: "Apply action to Git fork protection",
                },
              ],
            },
          ],
        },
        {
          name: "web-analytics",
          description: "Enable or disable Web Analytics for a project",
          options: [formatOption, jsonOption],
          subcommands: [
            {
              name: "enable",
              description: "Turn on Web Analytics for a project",
              args: {
                name: "name",
                isOptional: true,
              },
              options: [formatOption, jsonOption],
            },
            {
              name: "disable",
              description: "Turn off Web Analytics for a project",
              args: {
                name: "name",
                isOptional: true,
              },
              options: [
                {
                  name: ["-y", "--yes"],
                  description: "Skip the confirmation prompt when disabling",
                },
                formatOption,
                jsonOption,
              ],
            },
          ],
        },
        {
          name: "speed-insights",
          description:
            "Upgrade to Speed Insights Plus or downgrade to the free tier",
          options: [formatOption, jsonOption],
          subcommands: [
            {
              name: "enable",
              description: "Upgrade a project to Speed Insights Plus",
              args: {
                name: "name",
                isOptional: true,
              },
              options: [formatOption, jsonOption],
            },
            {
              name: "disable",
              description:
                "Downgrade a project to the Speed Insights free tier",
              args: {
                name: "name",
                isOptional: true,
              },
              options: [formatOption, jsonOption],
            },
          ],
        },
        {
          name: "pause",
          description:
            "Pause production traffic for a project (visitors will see an error page)",
          args: {
            name: "project",
            isOptional: true,
          },
          options: [formatOption, jsonOption],
        },
        {
          name: "keep",
          description:
            "Keep a temporary project by removing its scheduled automatic deletion",
          args: {
            name: "project",
            isOptional: true,
          },
          options: [formatOption, jsonOption],
        },
        {
          name: "observability",
          description: "Enable or disable Observability Plus for a project",
          options: [formatOption, jsonOption],
          subcommands: [
            {
              name: "enable",
              description: "Turn on Observability Plus for a project",
              args: {
                name: "name",
                isOptional: true,
              },
              options: [formatOption, jsonOption],
            },
            {
              name: "disable",
              description: "Turn off Observability Plus for a project",
              args: {
                name: "name",
                isOptional: true,
              },
              options: [
                {
                  name: ["-y", "--yes"],
                  description: "Skip the confirmation prompt when disabling",
                },
                formatOption,
                jsonOption,
              ],
            },
          ],
        },
        {
          name: ["priority", "priority-project"],
          description: "Upgrade a project to Priority, or remove that upgrade",
          options: [formatOption, jsonOption],
          subcommands: [
            {
              name: "enable",
              description: "Upgrade a project to Priority",
              args: {
                name: "name",
                isOptional: true,
              },
              options: [formatOption, jsonOption],
            },
            {
              name: "disable",
              description: "Remove the Priority upgrade from a project",
              args: {
                name: "name",
                isOptional: true,
              },
              options: [formatOption, jsonOption],
            },
          ],
        },
        {
          name: ["resume", "unpause"],
          description: "Resume production traffic for paused projects",
          args: {
            name: "project",
            isOptional: true,
            isVariadic: true,
          },
          options: [
            {
              name: "--all",
              description: "Resume every paused project in the team",
            },
            {
              name: ["-y", "--yes"],
              description:
                "Skip the confirmation prompt when resuming several projects (--all also needs --scope or VERCEL_ORG_ID)",
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: ["update", "set"],
          description:
            "Update one or more project settings; omitted settings remain unchanged",
          args: {
            name: "name",
            isOptional: true,
          },
          options: [
            {
              name: "--framework",
              description:
                'Set the framework preset by slug; use "other" to clear the preset',
              args: {
                name: "slug",
              },
            },
            {
              name: "--build-command",
              description: "Set the build command",
              args: {
                name: "command",
              },
            },
            {
              name: "--dev-command",
              description: "Set the development command",
              args: {
                name: "command",
              },
            },
            {
              name: "--install-command",
              description: "Set the install command",
              args: {
                name: "command",
              },
            },
            {
              name: "--output-directory",
              description: "Set the output directory",
              args: {
                name: "dir",
                template: "folders",
              },
            },
            {
              name: "--root-directory",
              description: "Set the project root directory",
              args: {
                name: "dir",
                template: "folders",
              },
            },
            {
              name: "--ignore-command",
              description:
                "Set the Ignore Command; the build is ignored when the command exits with code 0",
              args: {
                name: "command",
              },
            },
            {
              name: "--auto-detect",
              description:
                "Reset a setting to automatic detection; repeat for build-command, dev-command, install-command, output-directory, root-directory, or ignore-command",
              args: {
                name: "setting",
              },
              isRepeatable: true,
            },
            {
              name: "--source-files-outside-root-directory",
              description:
                "Include source files outside of the Root Directory in the Build Step",
            },
            {
              name: "--no-source-files-outside-root-directory",
              description:
                "Exclude source files outside of the Root Directory from the Build Step",
            },
            {
              name: "--fluid-compute",
              description: "Turn on Fluid compute",
            },
            {
              name: "--no-fluid-compute",
              description: "Turn off Fluid compute",
            },
            {
              name: "--function-cpu",
              description:
                "Set the default function CPU/memory tier: standard_legacy, standard, performance, or performance_xl",
              args: {
                name: "tier",
                suggestions: [
                  "standard_legacy",
                  "standard",
                  "performance",
                  "performance_xl",
                ],
              },
            },
            {
              name: "--sandbox-region",
              description:
                "Set the default region for sandboxes created in the project",
              args: {
                name: "region",
              },
            },
            {
              name: "--sandbox-failover-regions",
              description:
                "Set the ordered, comma-separated failover regions for sandboxes created in the project",
              args: {
                name: "regions",
              },
            },
            {
              name: "--build-machine",
              description:
                "Set the build machine type: basic, standard, enhanced, turbo, or elastic",
              args: {
                name: "type",
                suggestions: [
                  "basic",
                  "standard",
                  "enhanced",
                  "turbo",
                  "elastic",
                ],
              },
            },
            {
              name: "--elastic-concurrency",
              description: "Turn on elastic concurrency for builds",
            },
            {
              name: "--no-elastic-concurrency",
              description: "Turn off elastic concurrency for builds",
            },
            {
              name: "--node-version",
              description:
                "Set the Node.js major version as <major>.x, such as 24.x",
              args: {
                name: "version",
              },
            },
            {
              name: "--git-branch",
              description:
                "Set the Production Branch, the Git branch that creates Production deployments",
              args: {
                name: "branch",
              },
            },
            {
              name: "--git-commit-status",
              description:
                "Turn on Vercel commit statuses in the connected Git repository",
            },
            {
              name: "--no-git-commit-status",
              description: "Turn off Vercel commit statuses",
            },
            {
              name: "--git-pr-comments",
              description: "Turn on Vercel comments on pull requests",
            },
            {
              name: "--no-git-pr-comments",
              description: "Turn off Vercel comments on pull requests",
            },
            {
              name: "--github-deployment-events",
              description:
                "Turn on GitHub deployments and deployment_status events for each deployment",
            },
            {
              name: "--no-github-deployment-events",
              description:
                "Turn off GitHub deployments and deployment_status events",
            },
            {
              name: "--require-verified-commits",
              description:
                "Only create deployments for signed, verified commits",
            },
            {
              name: "--no-require-verified-commits",
              description:
                "Create deployments for unverified commits, overriding the team setting",
            },
            {
              name: "--inherit-verified-commits",
              description: "Use the team setting for verified commits",
            },
            {
              name: "--repository-dispatch-events",
              description:
                "Turn on GitHub repository_dispatch events for deployment events",
            },
            {
              name: "--no-repository-dispatch-events",
              description: "Turn off GitHub repository_dispatch events",
            },
            {
              name: ["-y", "--yes"],
              description: "Accepted for scripts",
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "rename",
          description: "Rename a project",
          args: [
            {
              name: "name",
            },
            {
              name: "new-name",
            },
          ],
        },
        {
          name: ["delete", "rm", "del", "remove"],
          description: "Delete a project",
          args: {
            name: "name",
          },
          options: [
            {
              name: "--confirm-name",
              description: "Approve the delete by naming the project",
              args: {
                name: "name",
              },
            },
            yesOption2,
          ],
        },
        {
          name: "token",
          description: "Get a development OIDC token for a project",
          args: {
            name: "name",
            isOptional: true,
          },
          options: [yesOption, formatOption, jsonOption],
        },
        {
          name: "dangerously-delete-immutable-static-asset",
          description:
            "Permanently delete an immutable static asset from storage",
          args: {
            name: "path",
            template: "filepaths",
          },
          options: [projectOption],
          hidden: true,
        },
      ],
    },
    {
      name: "promote",
      description: "Promote an existing Deployment to current",
      args: {
        name: "deployment",
      },
      options: [
        {
          name: "--timeout",
          description: "Time to wait for promotion completion (default: 3m)",
          args: {
            name: "time",
          },
        },
        {
          name: ["-y", "--yes"],
          description: "Skip the confirmation prompt when linking a Project",
        },
        jsonOption,
      ],
      subcommands: [
        {
          name: "status",
          description: "Show the status of any current pending promotions",
          args: {
            name: "project",
            isOptional: true,
          },
          options: [
            {
              name: "--timeout",
              description:
                "Time to wait for promotion completion (default: 3m)",
              args: {
                name: "time",
              },
            },
            {
              name: ["-y", "--yes"],
              description:
                "Skip the confirmation prompt when linking a Project",
            },
            jsonOption,
          ],
        },
      ],
    },
    {
      name: "pull",
      description:
        "Pull Environment Variables and project settings into .vercel",
      args: {
        name: "project-path",
        isOptional: true,
        template: "folders",
      },
      options: [
        {
          name: ["-e", "--environment"],
          description: "Deployment environment (default: development)",
          args: {
            name: "environment",
            suggestions: ["production", "preview", "development"],
          },
        },
        {
          name: "--git-branch",
          description:
            "Specify the Git branch to pull specific Environment Variables for",
          args: {
            name: "branch",
          },
        },
        {
          name: "--prod",
          deprecated: true,
        },
        {
          name: ["-y", "--yes"],
          description:
            "Skip questions when setting up new project using default scope and settings",
        },
        projectOption,
        jsonOption,
      ],
    },
    {
      name: "redeploy",
      description: "Rebuild and deploy a previous deployment",
      args: {
        name: "deployment",
      },
      options: [
        {
          name: "--no-wait",
          description: "Don't wait for the redeploy to finish",
        },
        {
          name: ["-e", "--environment"],
          description:
            "Environment to redeploy to: production, preview, or a custom environment (default: the original deployment's environment)",
          args: {
            name: "environment",
            suggestions: ["production", "preview"],
          },
        },
        {
          name: "--approve-commit-author",
          description:
            "If the deployment was blocked because its commit author isn't a member or is a Viewer, add them to the team as a Developer so the redeploy can build. This may add a paid seat to the team",
        },
        targetOption,
        jsonOption,
      ],
    },
    {
      name: ["redirects", "redirect"],
      description: "Manage redirects for a project",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List all redirects for the current project",
          options: [
            projectOption,
            jsonOption,
            {
              name: ["-q", "--query"],
              description: "Search for redirects by source or destination",
              args: {
                name: "text",
              },
            },
            {
              name: ["-s", "--search"],
              description: "Deprecated alias for `--query`",
              args: {
                name: "query",
              },
              deprecated: true,
            },
            nextOption,
            {
              name: ["-n", "--limit"],
              description: "Number of redirects per page (default: 50)",
              args: {
                name: "number",
              },
            },
            {
              name: "--page",
              description: "Page number to display",
              args: {
                name: "number",
              },
              deprecated: true,
            },
            {
              name: "--per-page",
              description: "Number of redirects per page (default: 50)",
              args: {
                name: "number",
              },
              deprecated: true,
            },
            {
              name: "--staging",
              description: "List redirects from the staging version",
            },
            {
              name: "--redirects-version",
              description: "List redirects from a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--version",
              description: "Use `--redirects-version`",
              args: {
                name: "version-id",
              },
              deprecated: true,
            },
          ],
        },
        {
          name: ["list-versions", "ls-versions"],
          description: "List all versions of redirects",
          options: [projectOption, jsonOption],
        },
        {
          name: "add",
          description: "Add a new redirect",
          args: [
            {
              name: "source",
              isOptional: true,
            },
            {
              name: "destination",
              isOptional: true,
            },
          ],
          options: [
            projectOption,
            {
              name: "--status",
              description: "HTTP status code (301, 302, 307, or 308)",
              args: {
                name: "code",
              },
            },
            {
              name: "--case-sensitive",
              description: "Make the redirect case sensitive",
            },
            {
              name: "--preserve-query-params",
              description: "Preserve query parameters when redirecting",
            },
            {
              name: "--name",
              description:
                "Version name for this redirect (max 256 characters)",
              args: {
                name: "name",
              },
            },
            {
              name: ["-y", "--yes"],
              description: "Skip prompts and use default values",
            },
          ],
        },
        {
          name: ["import", "upload"],
          description: "Import redirects from a CSV or JSON file",
          args: {
            name: "file",
            template: "filepaths",
          },
          options: [
            projectOption,
            {
              name: ["-y", "--yes"],
              description: "Skip confirmation prompt",
            },
            {
              name: "--force",
              description: "Replace all existing redirects",
            },
            {
              name: "--overwrite",
              description: "Deprecated alias for `--force`",
              deprecated: true,
            },
          ],
        },
        {
          name: ["remove", "rm"],
          description: "Remove a redirect",
          args: {
            name: "source",
          },
          options: [
            projectOption,
            {
              name: ["-y", "--yes"],
              description:
                "Skip the confirmation prompt when removing a redirect",
            },
          ],
        },
        {
          name: "promote",
          description: "Promote a staged redirects version to production",
          args: {
            name: "version-id",
          },
          options: [
            projectOption,
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt when promoting",
            },
          ],
        },
        {
          name: "restore",
          description: "Restore a previous redirects version",
          args: {
            name: "version-id",
          },
          options: [
            projectOption,
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt when restoring",
            },
          ],
        },
      ],
    },
    {
      name: ["remove", "rm"],
      description: "Delete deployment(s) by project name or deployment ID",
      args: {
        name: "name|deploymentId",
        isVariadic: true,
      },
      options: [
        {
          name: "--confirm-name",
          description:
            "Approve the delete by naming each deployment or project, as given in the arguments",
          args: {
            name: "name",
          },
          isRepeatable: true,
        },
        yesOption2,
        {
          name: "--safe",
          description: "Skip deployments with an active alias",
        },
        {
          name: "--hard",
          hidden: true,
        },
      ],
    },
    {
      name: "routes",
      description: "Manage routing rules for a project",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List all routing rules for the current project",
          options: [
            projectOption,
            jsonOption,
            {
              name: ["-q", "--query"],
              description:
                "Search by name, description, source, or destination",
              args: {
                name: "text",
              },
            },
            {
              name: ["-s", "--search"],
              description: "Deprecated alias for `--query`",
              args: {
                name: "query",
              },
              deprecated: true,
            },
            {
              name: "--type",
              description:
                "Filter by type: rewrite, redirect, set_status, transform",
              args: {
                name: "type",
                suggestions: ["rewrite", "redirect", "set_status", "transform"],
              },
            },
            {
              name: ["-f", "--filter"],
              description: "Deprecated alias for `--type`",
              args: {
                name: "type",
              },
              deprecated: true,
            },
            {
              name: "--production",
              description: "List routes from the live production version",
            },
            {
              name: "--routes-version",
              description: "List routes from a specific version",
              args: {
                name: "version",
              },
            },
            {
              name: "--version-id",
              description: "Deprecated alias for `--routes-version`",
              args: {
                name: "version-id",
              },
              deprecated: true,
            },
            {
              name: "--diff",
              description: "Compare staged changes against production",
            },
            {
              name: "--expand",
              description: "Show expanded details for each route",
            },
          ],
        },
        {
          name: ["list-versions", "ls-versions"],
          description: "List all versions of routing rules",
          options: [
            projectOption,
            jsonOption,
            {
              name: ["-n", "--limit"],
              description:
                "Number of versions to fetch (default: 20, max: 100)",
              args: {
                name: "number",
              },
            },
            {
              name: "--count",
              description: "Deprecated alias for `--limit`",
              args: {
                name: "number",
              },
              deprecated: true,
            },
          ],
        },
        {
          name: "inspect",
          description: "Show detailed information about a specific route",
          args: {
            name: "name-or-id",
          },
          options: [
            projectOption,
            jsonOption,
            {
              name: "--diff",
              description:
                "Compare staged changes against production for this route",
            },
          ],
        },
        {
          name: "add",
          description: "Add a new routing rule to the project",
          args: {
            name: "name",
            isOptional: true,
          },
          options: [
            projectOption,
            {
              name: "--src",
              description: "Path pattern (required in non-interactive mode)",
              args: {
                name: "pattern",
              },
            },
            {
              name: "--src-syntax",
              description:
                "Path syntax: regex, path-to-regexp, equals (default: regex)",
              args: {
                name: "type",
                suggestions: ["regex", "path-to-regexp", "equals"],
              },
            },
            {
              name: "--action",
              description:
                "Action type: rewrite, redirect, or set-status (required with --dest/--status)",
              args: {
                name: "type",
                suggestions: ["rewrite", "redirect", "set-status"],
              },
            },
            {
              name: "--dest",
              description: "Destination URL for rewrite or redirect",
              args: {
                name: "url",
              },
            },
            {
              name: "--status",
              description:
                "Status code (301/302/307/308 for redirect, or any for set-status)",
              args: {
                name: "code",
              },
            },
            {
              name: "--set-response-header",
              description: "Set response header: key=value (repeatable)",
              args: {
                name: "header",
              },
              isRepeatable: true,
            },
            {
              name: "--append-response-header",
              description: "Append to response header: key=value (repeatable)",
              args: {
                name: "header",
              },
              isRepeatable: true,
            },
            {
              name: "--delete-response-header",
              description: "Delete response header: key (repeatable)",
              args: {
                name: "key",
              },
              isRepeatable: true,
            },
            {
              name: "--set-request-header",
              description: "Set request header: key=value (repeatable)",
              args: {
                name: "header",
              },
              isRepeatable: true,
            },
            {
              name: "--append-request-header",
              description: "Append to request header: key=value (repeatable)",
              args: {
                name: "header",
              },
              isRepeatable: true,
            },
            {
              name: "--delete-request-header",
              description: "Delete request header: key (repeatable)",
              args: {
                name: "key",
              },
              isRepeatable: true,
            },
            {
              name: "--set-request-query",
              description: "Set query parameter: key=value (repeatable)",
              args: {
                name: "param",
              },
              isRepeatable: true,
            },
            {
              name: "--append-request-query",
              description: "Append to query parameter: key=value (repeatable)",
              args: {
                name: "param",
              },
              isRepeatable: true,
            },
            {
              name: "--delete-request-query",
              description: "Delete query parameter: key (repeatable)",
              args: {
                name: "key",
              },
              isRepeatable: true,
            },
            {
              name: "--has",
              description:
                "Condition that must match: type:key or type:key:value (repeatable)",
              args: {
                name: "condition",
              },
              isRepeatable: true,
            },
            {
              name: "--missing",
              description:
                '"Does not have" condition: type:key or type:key:value (repeatable)',
              args: {
                name: "condition",
              },
              isRepeatable: true,
            },
            {
              name: "--description",
              description: "Route description (max 1024 chars)",
              args: {
                name: "text",
              },
            },
            {
              name: "--no-enable",
              description: "Add the route turned off (default: on)",
            },
            {
              name: "--disabled",
              description: "Deprecated alias for `--no-enable`",
              deprecated: true,
            },
            {
              name: "--ai",
              description:
                "Generate route from a natural language description (AI-powered)",
              args: {
                name: "prompt",
              },
            },
            {
              name: "--position",
              description: "Position: start, end, after:<id>, before:<id>",
              args: {
                name: "position",
              },
            },
            {
              name: ["-y", "--yes"],
              description: "Skip confirmation prompts",
            },
          ],
        },
        {
          name: ["update", "edit"],
          description: "Update an existing routing rule",
          args: {
            name: "name-or-id",
          },
          options: [
            projectOption,
            {
              name: "--name",
              description: "Change route name",
              args: {
                name: "name",
              },
            },
            {
              name: "--description",
              description: 'Change description (use "" to clear)',
              args: {
                name: "text",
              },
            },
            {
              name: "--src",
              description: "Change source path pattern",
              args: {
                name: "pattern",
              },
            },
            {
              name: "--src-syntax",
              description: "Change path syntax: regex, path-to-regexp, equals",
              args: {
                name: "type",
                suggestions: ["regex", "path-to-regexp", "equals"],
              },
            },
            {
              name: "--action",
              description:
                "Set action type: rewrite, redirect, or set-status (required when switching types)",
              args: {
                name: "type",
                suggestions: ["rewrite", "redirect", "set-status"],
              },
            },
            {
              name: "--dest",
              description: "Set destination URL",
              args: {
                name: "url",
              },
            },
            {
              name: "--status",
              description: "Set status code",
              args: {
                name: "code",
              },
            },
            {
              name: "--no-dest",
              description: "Remove destination",
            },
            {
              name: "--no-status",
              description: "Remove status code",
            },
            {
              name: "--set-response-header",
              description: "Set response header: key=value (repeatable)",
              args: {
                name: "header",
              },
              isRepeatable: true,
            },
            {
              name: "--append-response-header",
              description: "Append to response header: key=value (repeatable)",
              args: {
                name: "header",
              },
              isRepeatable: true,
            },
            {
              name: "--delete-response-header",
              description: "Delete response header: key (repeatable)",
              args: {
                name: "key",
              },
              isRepeatable: true,
            },
            {
              name: "--set-request-header",
              description: "Set request header: key=value (repeatable)",
              args: {
                name: "header",
              },
              isRepeatable: true,
            },
            {
              name: "--append-request-header",
              description: "Append to request header: key=value (repeatable)",
              args: {
                name: "header",
              },
              isRepeatable: true,
            },
            {
              name: "--delete-request-header",
              description: "Delete request header: key (repeatable)",
              args: {
                name: "key",
              },
              isRepeatable: true,
            },
            {
              name: "--set-request-query",
              description: "Set query parameter: key=value (repeatable)",
              args: {
                name: "param",
              },
              isRepeatable: true,
            },
            {
              name: "--append-request-query",
              description: "Append to query parameter: key=value (repeatable)",
              args: {
                name: "param",
              },
              isRepeatable: true,
            },
            {
              name: "--delete-request-query",
              description: "Delete query parameter: key (repeatable)",
              args: {
                name: "key",
              },
              isRepeatable: true,
            },
            {
              name: "--has",
              description:
                "Add a has condition: type:key or type:key:value (repeatable)",
              args: {
                name: "condition",
              },
              isRepeatable: true,
            },
            {
              name: "--missing",
              description:
                'Add a "does not have" condition: type:key or type:key:value (repeatable)',
              args: {
                name: "condition",
              },
              isRepeatable: true,
            },
            {
              name: "--clear-conditions",
              description: "Remove all has/does-not-have conditions",
            },
            {
              name: "--clear-headers",
              description: "Remove all response headers",
            },
            {
              name: "--clear-transforms",
              description:
                "Remove all transforms (request headers, request query)",
            },
            {
              name: "--ai",
              description:
                "Describe changes using natural language (AI-powered)",
              args: {
                name: "prompt",
              },
            },
            {
              name: ["-y", "--yes"],
              description: "Skip confirmation prompts",
            },
          ],
        },
        {
          name: ["remove", "rm", "delete"],
          description: "Remove one or more routing rules",
          args: {
            name: "name-or-id",
            isVariadic: true,
          },
          options: [
            projectOption,
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt when removing",
            },
          ],
        },
        {
          name: "enable",
          description: "Enable a disabled routing rule",
          args: {
            name: "name-or-id",
          },
          options: [projectOption],
        },
        {
          name: "disable",
          description: "Disable a routing rule without deleting it",
          args: {
            name: "name-or-id",
          },
          options: [projectOption],
        },
        {
          name: ["move", "reorder"],
          description: "Move a routing rule to a different position",
          args: {
            name: "name-or-id",
          },
          options: [
            projectOption,
            {
              name: "--position",
              description:
                "Target position: start, end, a number (1-based), before:<id>, after:<id>",
              args: {
                name: "position",
              },
            },
            {
              name: "--first",
              description: "Move to the first position (highest priority)",
            },
            {
              name: "--last",
              description: "Move to the last position (lowest priority)",
            },
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt when moving",
            },
          ],
        },
        {
          name: "export",
          description: "Export routes to a vercel.json or vercel.ts file",
          args: {
            name: "name-or-id",
            isOptional: true,
          },
          options: [
            projectOption,
            {
              name: ["-o", "--output"],
              description: "Output file format: .json or .ts (default: .json)",
              args: {
                name: "json|ts",
                suggestions: ["json", "ts"],
              },
            },
          ],
        },
        {
          name: "publish",
          description: "Publish all staged routing changes to production",
          options: [
            projectOption,
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt when publishing",
            },
          ],
        },
        {
          name: "restore",
          description: "Restore a previous routing version to production",
          args: {
            name: "version-id",
          },
          options: [
            projectOption,
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt when restoring",
            },
          ],
        },
        {
          name: "discard-staging",
          description: "Discard staged routing changes",
          options: [
            projectOption,
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt when discarding",
            },
          ],
        },
      ],
    },
    {
      name: "rollback",
      description: "Roll back to a previous deployment",
      args: {
        name: "deployment",
      },
      options: [
        {
          name: "--timeout",
          description: "Time to wait for rollback completion (default: 3m)",
          args: {
            name: "time",
          },
        },
        yesOption,
        jsonOption,
      ],
      subcommands: [
        {
          name: "status",
          description: "Show the status of any current pending rollbacks",
          args: {
            name: "project",
            isOptional: true,
          },
          options: [
            {
              name: "--timeout",
              description: "Time to wait for rollback completion (default: 3m)",
              args: {
                name: "time",
              },
            },
            jsonOption,
          ],
        },
      ],
    },
    {
      name: ["rolling-release", "rr"],
      description: "Shift deployment traffic in stages",
      subcommands: [
        {
          name: ["update", "configure"],
          description: "Update rolling release settings for a project",
          options: [
            projectOption,
            {
              name: "--cfg",
              description: "Raw JSON configuration (advanced)",
              args: {
                name: "cfg",
              },
            },
            {
              name: "--enable",
              description: "Turn on rolling releases for this project",
            },
            {
              name: "--no-enable",
              description: "Turn off rolling releases for this project",
            },
            {
              name: "--disable",
              description: "Deprecated alias for `--no-enable`",
              deprecated: true,
            },
            {
              name: "--advancement-type",
              description:
                'How stages advance: "automatic" or "manual-approval"',
              args: {
                name: "type",
              },
            },
            {
              name: "--stage",
              description: "Add a rollout stage",
              args: {
                name: "percentage[,duration]",
              },
              isRepeatable: true,
            },
            jsonOption,
          ],
        },
        {
          name: "start",
          description: "Start a rolling release",
          options: [
            {
              name: "--deployment",
              description:
                "The deployment ID or URL to target for the rolling release",
              args: {
                name: "deployment",
              },
            },
            dplOption,
            projectOption,
            yesOption,
          ],
        },
        {
          name: "approve",
          description: "Approve the current stage of an active rolling release",
          options: [
            projectOption,
            {
              name: "--deployment",
              description: "The deployment ID or URL of the rolling release",
              args: {
                name: "deployment",
              },
            },
            dplOption,
            {
              name: "--currentStageIndex",
              description: "The current stage of a rolling release to approve",
              args: {
                name: "currentstageindex",
              },
            },
          ],
        },
        {
          name: "abort",
          description: "Abort an active rolling release",
          options: [
            projectOption,
            {
              name: "--deployment",
              description:
                "The deployment ID or URL of the rolling release to abort",
              args: {
                name: "deployment",
              },
            },
            dplOption,
          ],
        },
        {
          name: "complete",
          description: "Complete an active rolling release",
          options: [
            projectOption,
            {
              name: "--deployment",
              description:
                "The deployment ID or URL of the rolling release to complete",
              args: {
                name: "deployment",
              },
            },
            dplOption,
          ],
        },
        {
          name: ["inspect", "fetch"],
          description: "Show details about a rolling release",
          options: [projectOption, jsonOption],
        },
      ],
    },
    {
      name: "sandbox",
      description: "Interact with Vercel Sandbox",
    },
    {
      name: "schedules",
      description: "Manage schedules for the current project",
      options: [localOption],
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List schedules",
          options: [
            namespaceOption,
            environmentOption,
            gitBranchOption,
            userOption,
            limitOption,
            nextOption,
            formatOption,
            jsonOption,
            localOption,
          ],
        },
        {
          name: ["inspect", "get"],
          description: "Show a schedule",
          args: {
            name: "name",
          },
          options: [
            formatOption,
            jsonOption,
            localOption,
            namespaceOption,
            environmentOption,
            gitBranchOption,
            userOption,
          ],
        },
        {
          name: "create",
          description: "Create a schedule",
          args: {
            name: "name",
          },
          options: [
            namespaceOption,
            environmentOption,
            gitBranchOption,
            userOption,
            {
              name: "--cron",
              description: "Use a cron expression",
              args: {
                name: "expression",
              },
            },
            {
              name: "--at",
              description:
                "Run once at a local datetime (YYYY-MM-DDTHH:mm or :00 seconds)",
              args: {
                name: "datetime",
              },
            },
            {
              name: "--timezone",
              description:
                "Evaluate expressions in an IANA timezone (default: UTC)",
              args: {
                name: "timezone",
              },
            },
            {
              name: "--jitter",
              description: "Add a jitter window between 1 and 15 minutes",
              args: {
                name: "minutes",
              },
            },
            {
              name: "--topic",
              description: "Target a queue topic",
              args: {
                name: "topic",
              },
            },
            {
              name: "--payload",
              description: "Set the JSON payload delivered to the target",
              args: {
                name: "json",
              },
            },
            formatOption,
            jsonOption,
            localOption,
          ],
        },
        {
          name: "update",
          description: "Update a schedule",
          args: {
            name: "name",
          },
          options: [
            namespaceOption,
            environmentOption,
            gitBranchOption,
            userOption,
            {
              name: "--cron",
              description: "Use a cron expression",
              args: {
                name: "expression",
              },
            },
            {
              name: "--at",
              description:
                "Run once at a local datetime (YYYY-MM-DDTHH:mm or :00 seconds)",
              args: {
                name: "datetime",
              },
            },
            {
              name: "--timezone",
              description:
                "Evaluate expressions in an IANA timezone (default: UTC)",
              args: {
                name: "timezone",
              },
            },
            {
              name: "--jitter",
              description:
                "Set jitter to 1–15 minutes, or use none to remove it",
              args: {
                name: "minutes|none",
              },
            },
            {
              name: "--topic",
              description: "Target a queue topic",
              args: {
                name: "topic",
              },
            },
            {
              name: "--payload",
              description: "Replace the JSON payload; use null to remove it",
              args: {
                name: "json",
              },
            },
            formatOption,
            jsonOption,
            localOption,
          ],
        },
        {
          name: "enable",
          description: "Enable a schedule",
          args: {
            name: "name",
          },
          options: [
            namespaceOption,
            environmentOption,
            gitBranchOption,
            userOption,
            {
              name: ["-u", "--until"],
              description:
                "Enable only until this time, then disable again: ISO 8601 or Unix milliseconds",
              args: {
                name: "time",
              },
            },
            {
              name: "--for",
              description:
                "Enable only for this long, then disable again (e.g. 30m, 5h)",
              args: {
                name: "duration",
              },
            },
            formatOption,
            jsonOption,
            localOption,
          ],
        },
        {
          name: "disable",
          description: "Disable a schedule",
          args: {
            name: "name",
          },
          options: [
            namespaceOption,
            environmentOption,
            gitBranchOption,
            userOption,
            formatOption,
            jsonOption,
            localOption,
          ],
        },
        {
          name: "invoke",
          description: "Invoke a schedule immediately",
          args: {
            name: "name",
          },
          options: [
            namespaceOption,
            environmentOption,
            gitBranchOption,
            userOption,
            formatOption,
            jsonOption,
            localOption,
          ],
        },
        {
          name: ["delete", "rm", "del"],
          description: "Delete a schedule",
          args: {
            name: "name",
          },
          options: [
            namespaceOption,
            environmentOption,
            gitBranchOption,
            userOption,
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt when deleting",
            },
            formatOption,
            jsonOption,
            localOption,
          ],
        },
        {
          name: "executions",
          description: "Inspect schedule execution history",
          options: [
            {
              name: "--local",
              description: "Local execution history is not supported",
            },
          ],
          subcommands: [
            {
              name: ["list", "ls"],
              description: "List executions for a schedule",
              args: {
                name: "name",
              },
              options: [
                namespaceOption,
                environmentOption,
                gitBranchOption,
                userOption,
                limitOption,
                nextOption,
                {
                  name: "--sort",
                  description: "Sort by time: asc or desc (default: desc)",
                  args: {
                    name: "order",
                    suggestions: ["asc", "desc"],
                  },
                },
                {
                  name: ["-s", "--since"],
                  description:
                    "Start time: ISO 8601 or relative, like 1h or 7d (at most 30 days before --until)",
                  args: {
                    name: "time",
                  },
                },
                untilOption2,
                {
                  name: "--from",
                  args: {
                    name: "from",
                  },
                  deprecated: true,
                },
                {
                  name: "--to",
                  args: {
                    name: "to",
                  },
                  deprecated: true,
                },
                {
                  name: "--execution",
                  description: "Filter by execution ID substring",
                  args: {
                    name: "execution",
                  },
                },
                {
                  name: "--execution-id",
                  description: "Deprecated alias for `--execution`",
                  args: {
                    name: "id",
                  },
                  deprecated: true,
                },
                formatOption,
                jsonOption,
                {
                  name: "--local",
                  description: "Local execution history is not supported",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "security",
      description: "Inspect the security posture of the current team",
      subcommands: [
        {
          name: "check",
          description:
            "Run the security checks for the current team and show each check with its risk level, status, violation count, and muted findings",
          args: {
            name: "check",
            isOptional: true,
            isVariadic: true,
          },
          options: [
            {
              name: "--findings",
              description:
                "List individual findings under each check, including muted ones",
            },
            {
              name: ["-n", "--limit"],
              description: "Max findings listed per check (default: all)",
              args: {
                name: "n",
              },
            },
            {
              name: ["-p", "--project"],
              description: "Scope the report to one project",
              args: {
                name: "name-or-id",
              },
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: ["vulnerabilities", "vulnerability"],
          description:
            "Read and triage the current team's Security Review vulnerabilities",
          options: [
            {
              name: ["-p", "--project"],
              description: "Only list vulnerabilities in this project",
              args: {
                name: "name-or-id",
              },
            },
            {
              name: "--repository",
              description:
                "Only list vulnerabilities in this Git repository (<owner>/<repo>), including those in projects deployed from it",
              args: {
                name: "repository",
              },
            },
            {
              name: ["-e", "--environment"],
              description: "Only list vulnerabilities in this environment",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
            },
            {
              name: "--git-branch",
              description: "Only list vulnerabilities on this Git branch",
              args: {
                name: "branch",
              },
            },
            {
              name: "--status",
              description:
                "Only list vulnerabilities with these comma-separated statuses (open, closed, dismissed), or all (default: open)",
              args: {
                name: "status",
              },
            },
            {
              name: "--severity",
              description:
                "Only list vulnerabilities with these comma-separated severities (critical, high, medium, low)",
              args: {
                name: "severity",
              },
            },
            {
              name: ["-q", "--query"],
              description:
                "Search vulnerability titles, summaries, and descriptions",
              args: {
                name: "text",
              },
            },
            {
              name: ["-n", "--limit"],
              description:
                "Number of vulnerabilities to return (default: 20, max: 100)",
              args: {
                name: "number",
              },
            },
            nextOption,
            jsonOption,
          ],
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "List the current team's Security Review vulnerabilities, Production and most severe first",
              options: [
                {
                  name: ["-p", "--project"],
                  description: "Only list vulnerabilities in this project",
                  args: {
                    name: "name-or-id",
                  },
                },
                {
                  name: "--repository",
                  description:
                    "Only list vulnerabilities in this Git repository (<owner>/<repo>), including those in projects deployed from it",
                  args: {
                    name: "repository",
                  },
                },
                {
                  name: ["-e", "--environment"],
                  description: "Only list vulnerabilities in this environment",
                  args: {
                    name: "environment",
                    suggestions: ["production", "preview", "development"],
                  },
                },
                {
                  name: "--git-branch",
                  description: "Only list vulnerabilities on this Git branch",
                  args: {
                    name: "branch",
                  },
                },
                {
                  name: "--status",
                  description:
                    "Only list vulnerabilities with these comma-separated statuses (open, closed, dismissed), or all (default: open)",
                  args: {
                    name: "status",
                  },
                },
                {
                  name: "--severity",
                  description:
                    "Only list vulnerabilities with these comma-separated severities (critical, high, medium, low)",
                  args: {
                    name: "severity",
                  },
                },
                {
                  name: ["-q", "--query"],
                  description:
                    "Search vulnerability titles, summaries, and descriptions",
                  args: {
                    name: "text",
                  },
                },
                {
                  name: ["-n", "--limit"],
                  description:
                    "Number of vulnerabilities to return (default: 20, max: 100)",
                  args: {
                    name: "number",
                  },
                },
                nextOption,
                jsonOption,
              ],
            },
            {
              name: "inspect",
              description: "Show a vulnerability in full",
              args: {
                name: "vulnerability",
                description:
                  "The vulnerability: <project>/<number>, <owner>/<repo>/<number> for a repository, or its ID",
              },
              options: [jsonOption],
            },
            {
              name: "dismiss",
              description:
                "Dismiss a vulnerability as a false positive or an accepted risk",
              args: {
                name: "vulnerability",
                description:
                  "The vulnerability: <project>/<number>, <owner>/<repo>/<number> for a repository, or its ID",
              },
              options: [
                {
                  name: "--reason",
                  description:
                    "Why it is dismissed: false-positive or accepted-risk",
                  args: {
                    name: "reason",
                    suggestions: ["false-positive", "accepted-risk"],
                  },
                },
                {
                  name: "--message",
                  description:
                    "A note recorded with the dismissal, up to 500 characters",
                  args: {
                    name: "text",
                  },
                },
                jsonOption,
              ],
            },
            {
              name: "reopen",
              description: "Reopen a dismissed vulnerability",
              args: {
                name: "vulnerability",
                description:
                  "The vulnerability: <project>/<number>, <owner>/<repo>/<number> for a repository, or its ID",
              },
              options: [jsonOption],
            },
          ],
        },
      ],
    },
    {
      name: "setup",
      description: "Set up coding agents for Vercel",
      options: [
        {
          name: "--plugin",
          description: "DEPRECATED: Use `vercel setup plugin` instead",
          deprecated: true,
        },
        {
          name: "--gateway",
          description: "DEPRECATED: Use `vercel setup gateway` instead",
          deprecated: true,
        },
        {
          name: "--agent",
          description: "Select a coding agent (repeatable)",
          args: {
            name: "name",
          },
          isRepeatable: true,
        },
        setupDryRunOption,
        yesOption,
      ],
      subcommands: [
        {
          name: "plugin",
          description: "Install the Vercel plugin for detected coding agents",
          options: [
            {
              name: "--agent",
              description: "Select a coding agent (repeatable)",
              args: {
                name: "name",
              },
              isRepeatable: true,
            },
            setupDryRunOption,
            yesOption,
          ],
        },
        {
          name: "gateway",
          description: "Connect local coding agents to the AI Gateway",
          options: [
            {
              name: "--agent",
              description: "Select a coding agent (repeatable)",
              args: {
                name: "name",
              },
              isRepeatable: true,
            },
            allOption,
            keyOption,
            reconfigureOption,
            noSessionMigrationOption,
            setupDryRunOption,
            yesOption,
          ],
        },
        {
          name: "skills",
          description:
            "Write the vercel-cli agent skill that ships with this CLI version to ~/.agents/skills, or to --output",
          options: [
            {
              name: ["-o", "--output"],
              description:
                "Directory to write the skill into (default: ~/.agents/skills/vercel-cli)",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
            setupDryRunOption,
            formatOption,
            jsonOption,
          ],
        },
      ],
    },
    {
      name: "signup",
      description: "Create a Vercel account and sign in",
      options: [
        {
          name: "--email",
          description: "Email address to use when creating the account",
          args: {
            name: "email",
          },
        },
      ],
    },
    {
      name: "skills",
      description: "Discover agent skills relevant to your project",
      args: {
        name: "query",
        isOptional: true,
      },
      options: [
        jsonOption,
        {
          name: "--format",
          args: {
            name: "format",
          },
          hidden: true,
        },
        yesOption,
      ],
    },
    {
      name: "storage",
      description: "Manage project storage resources",
      subcommands: [
        {
          name: "list",
          description: "List storage resources in the current scope",
          options: [
            {
              name: "--type",
              description:
                "Only list stores of one type (e.g. blob, global-config, integration)",
              args: {
                name: "type",
              },
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "create",
          description: "Create a storage resource (blob, global-config)",
          args: {
            name: "name",
          },
          options: [
            {
              name: "--type",
              description: "Store type: blob, global-config",
              args: {
                name: "type",
                suggestions: ["blob", "global-config"],
              },
            },
            {
              name: "--access",
              description:
                "Blob only: access level for the store, `public` or `private` (required)",
              args: {
                name: "access",
              },
            },
            {
              name: "--region",
              description:
                "Blob only: region to create the store in (default: iad1)",
              args: {
                name: "region",
              },
            },
            {
              name: "--items",
              description:
                "Global Config only: initial items as a JSON object of key → value pairs",
              args: {
                name: "json",
              },
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: ["inspect", "get"],
          description: "Show the details of one storage resource",
          args: {
            name: "store",
          },
          options: [
            {
              name: "--type",
              description:
                "Only match stores of one type when several share a name (e.g. blob, global-config, integration)",
              args: {
                name: "type",
              },
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: ["delete", "rm", "del"],
          description:
            "Delete a Blob store or Global Config (Marketplace resources: use `vercel integration resource delete`)",
          args: {
            name: "store",
          },
          options: [
            {
              name: "--type",
              description:
                "Only match stores of one type when several share a name (e.g. blob, global-config, integration)",
              args: {
                name: "type",
              },
            },
          ],
        },
        {
          name: "connect",
          description:
            "Connect a storage resource (Blob, Global Config, Marketplace, or first-party) to a project",
          args: {
            name: "store",
          },
          options: [
            projectOption,
            {
              name: ["-e", "--environment"],
              description:
                "Environment to connect (repeatable: production, preview, development) (default: all three)",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
              isRepeatable: true,
            },
            {
              name: "--auth",
              description:
                "Credential mode: `oidc` or `token` (default: `oidc`)",
              args: {
                name: "mode",
              },
            },
            {
              name: "--add-rw-token",
              description:
                "Blob only: explicitly write the static read-write token env var",
            },
            {
              name: "--prefix",
              description:
                "Prefix for the generated environment variable names (e.g. --prefix UPLOADS writes UPLOADS_STORE_ID)",
              args: {
                name: "prefix",
              },
            },
            {
              name: "--dry-run",
              description:
                "Preview connection changes without applying them (provider variable names may be unavailable)",
            },
            {
              name: ["-y", "--yes"],
              description:
                "Skip the confirmation prompt when connecting a resource",
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "status",
          description:
            "Show storage connections, their environments, credential mode, and environment variables",
          args: {
            name: "store",
            isOptional: true,
          },
          options: [
            projectOption,
            {
              name: ["-a", "--all"],
              description: "Show every storage resource in the current scope",
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "update",
          description:
            "Update an existing storage connection (environments, prefix, or Blob credential mode)",
          args: {
            name: "store",
          },
          options: [
            projectOption,
            {
              name: ["-e", "--environment"],
              description:
                "Environment to connect (repeatable: production, preview, development) (default: the environments the connection already covers)",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
              isRepeatable: true,
            },
            {
              name: "--auth",
              description:
                "Credential mode: `oidc` or `token` (default: the mode the connection already uses, so unrelated updates never rotate credentials)",
              args: {
                name: "mode",
              },
            },
            {
              name: "--add-rw-token",
              description:
                "Blob only: explicitly write the static read-write token env var",
            },
            {
              name: "--prefix",
              description:
                "Prefix for the generated environment variable names (e.g. --prefix UPLOADS writes UPLOADS_STORE_ID)",
              args: {
                name: "prefix",
              },
            },
            {
              name: "--dry-run",
              description:
                "Preview connection changes without applying them (provider variable names may be unavailable)",
            },
            {
              name: ["-y", "--yes"],
              description:
                "Skip the confirmation prompt when updating a connection",
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "disconnect",
          description: "Disconnect a storage resource from a project",
          args: {
            name: "store",
          },
          options: [
            projectOption,
            {
              name: "--all",
              description:
                "Disconnect every project from the specified resource",
            },
            {
              name: "--dry-run",
              description:
                "Preview connection changes without applying them (provider variable names may be unavailable)",
            },
            formatOption,
            jsonOption,
          ],
        },
      ],
    },
    {
      name: ["environments", "environment", "targets", "target"],
      description: "Manage custom environments for a Project",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List environments for the current Project",
          options: [formatOption, jsonOption, projectOption, yesOption4],
        },
      ],
    },
    {
      name: ["teams", "switch", "team"],
      description: "Manage Teams under your Vercel account",
      subcommands: [
        {
          name: ["create", "add"],
          description: "Create a new team",
          options: [
            {
              name: "--slug",
              description:
                "Team URL slug (e.g. acme for vercel.com/acme); required in non-interactive mode",
              args: {
                name: "slug",
              },
            },
            {
              name: "--name",
              description:
                "Display name for the team; required in non-interactive mode",
              args: {
                name: "name",
              },
            },
          ],
        },
        {
          name: "invite",
          description:
            "Invite a new member to a team (prompts for emails when none are given, except in non-interactive mode)",
          args: {
            name: "email",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: ["list", "ls"],
          description: "Show all teams that you're a member of",
          options: [
            nextOption,
            limitOption,
            formatOption,
            jsonOption,
            {
              name: "--since",
              args: {
                name: "since",
              },
              deprecated: true,
            },
            {
              name: "--until",
              args: {
                name: "until",
              },
              deprecated: true,
            },
            {
              name: ["-C", "--count"],
              args: {
                name: "count",
              },
              deprecated: true,
            },
          ],
        },
        {
          name: ["request", "access-request"],
          description:
            "Show join-request status for the current team (default: the authenticated user)",
          args: {
            name: "userId",
            isOptional: true,
          },
          options: [formatOption, jsonOption],
        },
        {
          name: ["switch", "change"],
          description: "Switch to a different team",
          args: {
            name: "name",
            isOptional: true,
            generators: teamList,
          },
        },
        {
          name: "sso",
          description: "Show SAML / SSO configuration for the current team",
          options: [formatOption, jsonOption],
        },
        {
          name: ["members", "member"],
          description: "List, invite, or remove members from the current team",
          options: [nextOption, limitOption, formatOption, jsonOption],
        },
      ],
    },
    {
      name: "tokens",
      description: "Manage your personal Vercel authentication tokens",
      subcommands: [
        {
          name: ["create", "add"],
          description: "Create a new personal authentication token",
          args: {
            name: "name",
          },
          options: [
            formatOption,
            jsonOption,
            {
              name: ["-p", "--project"],
              description: "Optional project ID to scope the token to",
              args: {
                name: "name-or-id",
              },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List your personal authentication tokens",
          options: [
            formatOption,
            jsonOption,
            {
              name: ["-n", "--limit"],
              description:
                "Maximum number of tokens to return (default: 20, max: 100)",
              args: {
                name: "limit",
              },
            },
            nextOption,
          ],
        },
        {
          name: ["revoke", "remove", "rm", "delete"],
          description: "Revoke a personal authentication token by ID",
          args: {
            name: "id",
          },
          options: [
            formatOption,
            jsonOption,
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt when revoking a token",
            },
          ],
        },
      ],
    },
    {
      name: ["token-pass", "tokenpass"],
      description: "Set up a coding agent with Vercel Token Pass",
      options: [
        agentOption,
        allOption,
        keyOption,
        amountOption,
        budgetOption,
        refreshPeriodOption,
        includeByokOption,
        expirationOption,
        nameOption,
        reconfigureOption,
        dryRunOption,
        noBackupOption,
        noSessionMigrationOption,
        noKeychainOption,
        agentConfigOption,
        shellRcOption,
        applyOption,
        baseUrlOption,
        yesOption,
      ],
      subcommands: [
        {
          name: "setup",
          description: "Set up a coding agent with Vercel Token Pass",
          options: [
            agentOption,
            allOption,
            keyOption,
            amountOption,
            budgetOption,
            refreshPeriodOption,
            includeByokOption,
            expirationOption,
            nameOption,
            reconfigureOption,
            dryRunOption,
            noBackupOption,
            noSessionMigrationOption,
            noKeychainOption,
            agentConfigOption,
            shellRcOption,
            applyOption,
            baseUrlOption,
            yesOption,
          ],
        },
      ],
    },
    {
      name: "telemetry",
      description: "Allows you to enable or disable telemetry collection",
      subcommands: [
        {
          name: "enable",
          description: "Enables telemetry collection",
        },
        {
          name: "disable",
          description: "Disables telemetry collection",
        },
        {
          name: "status",
          description:
            "Shows whether telemetry collection is enabled or disabled",
          options: [jsonOption],
        },
        {
          name: "flush",
          description: "Internal command to flush telemetry events",
          hidden: true,
        },
      ],
    },
    {
      name: "traces",
      description:
        "Inspect project traces and search spans across a Vercel team",
      args: {
        name: "id",
        isOptional: true,
      },
      subcommands: [
        {
          name: ["inspect", "get"],
          description: "Show a captured trace by trace ID or request ID",
          args: {
            name: "id",
          },
          options: [
            {
              name: "--json",
              description: "Print the raw trace JSON to stdout",
            },
            {
              name: ["-p", "--project"],
              description:
                "Project that owns the trace (default: linked project)",
              args: {
                name: "name|id",
              },
            },
            {
              name: "--open",
              description:
                "Open the trace in the Vercel Dashboard instead of printing it",
            },
            {
              name: "--view",
              description: "Dashboard view to open (default: timeline)",
              args: {
                name: "timeline|tree|waterfall",
                suggestions: ["timeline", "tree", "waterfall"],
              },
            },
          ],
        },
        {
          name: "search",
          description: "Search team spans",
          options: [
            {
              name: ["-p", "--project"],
              description:
                "Filter spans to one project (default: all team projects)",
              args: {
                name: "name-or-id",
              },
            },
            {
              name: ["-e", "--environment"],
              description:
                "Environment: production or preview (case-insensitive)",
              args: {
                name: "environment",
                suggestions: ["production", "preview"],
              },
            },
            {
              name: "--service",
              description: "Filter by service name",
              args: {
                name: "service",
              },
            },
            {
              name: "--name",
              description: "Filter by span name",
              args: {
                name: "name",
              },
            },
            {
              name: "--kind",
              description:
                "Filter by span kind: unspecified (0), internal (1), server (2), client (3), producer (4), consumer (5)",
              args: {
                name: "kind",
              },
            },
            {
              name: "--status",
              description: "Status: error, ok, or unset (case-insensitive)",
              args: {
                name: "status",
                suggestions: ["error", "ok", "unset"],
              },
            },
            {
              name: "--deployment",
              description: "Filter by deployment ID",
              args: {
                name: "deployment",
              },
            },
            {
              name: "--deployment-id",
              args: {
                name: "deployment-id",
              },
              deprecated: true,
            },
            {
              name: "--request-id",
              description:
                "Filter by request ID. Some IDs return 404 in traces inspect",
              args: {
                name: "request-id",
              },
            },
            {
              name: "--trace",
              description: "Filter by trace ID",
              args: {
                name: "trace",
              },
            },
            {
              name: "--trace-id",
              args: {
                name: "trace-id",
              },
              deprecated: true,
            },
            {
              name: "--span",
              description: "Filter by span ID",
              args: {
                name: "span",
              },
            },
            {
              name: "--span-id",
              args: {
                name: "span-id",
              },
              deprecated: true,
            },
            {
              name: "--root",
              description: "Show root spans only",
            },
            sinceOption2,
            untilOption,
            {
              name: ["-n", "--limit"],
              description: "Maximum number of spans (default: 100, max: 1000)",
              args: {
                name: "limit",
              },
            },
            {
              name: ["-q", "--query"],
              description: "Filter spans using KQL",
              args: {
                name: "query",
              },
            },
            {
              name: "--columns",
              description: "Columns to show, in order",
              args: {
                name: "list",
              },
            },
            {
              name: "--next",
              description:
                "Continue a previous search from its summary's next value",
              args: {
                name: "cursor",
              },
            },
            jsonOption4,
          ],
        },
        {
          name: "create",
          description:
            "Capture a session trace for a request (alias for `vercel curl --trace`)",
          args: {
            name: "path",
            template: "filepaths",
          },
          options: [
            {
              name: "--deployment",
              description: "The deployment ID or URL to target",
              args: {
                name: "deployment",
              },
            },
            {
              name: "--protection-bypass",
              description:
                "Protection bypass secret for accessing protected deployments",
              args: {
                name: "secret",
              },
            },
            {
              name: "--json",
              description: "Emit { response, requestId } as JSON on stdout",
            },
            {
              name: ["-y", "--yes"],
              description:
                "Skip the production confirmation prompt (e.g. in non-interactive mode)",
            },
          ],
        },
        {
          name: "config",
          description: "Manage Vercel tracing sampling rules for a project",
          subcommands: [
            {
              name: ["ls", "list"],
              description:
                "List the Vercel tracing sampling rules for a project",
              options: [formatOption, jsonOption, projectOption],
            },
            {
              name: "set",
              description:
                "Enable Vercel tracing and add or replace one sampling rule",
              args: [
                {
                  name: "rate",
                },
                {
                  name: "requestPath",
                  isOptional: true,
                },
              ],
              options: [
                {
                  name: ["-e", "--environment"],
                  description:
                    "Environment the rule applies to (required): production, preview, or any",
                  args: {
                    name: "environment",
                    suggestions: ["production", "preview", "any"],
                  },
                },
                formatOption,
                jsonOption,
                projectOption,
              ],
            },
            {
              name: ["remove", "rm", "delete"],
              description: "Remove Vercel tracing sampling rules",
              args: {
                name: "requestPath",
                isOptional: true,
              },
              options: [
                {
                  name: ["-e", "--environment"],
                  description:
                    "Environment the rule applies to (required): production, preview, or any",
                  args: {
                    name: "environment",
                    suggestions: ["production", "preview", "any"],
                  },
                },
                {
                  name: "--default",
                  description:
                    "Remove only the rule that has no path prefix, keeping the per-path rules",
                },
                formatOption,
                jsonOption,
                projectOption,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "tunnel",
      description:
        "Forward a public URL to a server on this machine's port, through a preview deployment of the linked project",
      options: [
        {
          name: "--port",
          description: "The local port to forward every request to",
          args: {
            name: "port",
          },
        },
        {
          name: "--name",
          description:
            "The start of the tunnel's URL, before its random suffix (default: tun-<team>-<project>)",
          args: {
            name: "label",
          },
        },
        projectOption,
        yesOption,
      ],
      hidden: true,
    },
    {
      name: "upgrade",
      description:
        "Upgrade the current global or native Vercel CLI installation",
      args: {
        name: "version|latest",
        isOptional: true,
      },
      options: [
        {
          name: "--dry-run",
          description: "Show the upgrade command without executing it",
        },
        {
          name: "--autoupdate",
          description: "Turn on automatic CLI updates for future releases",
        },
        {
          name: "--no-autoupdate",
          description: "Turn off automatic CLI updates",
        },
        {
          name: "--enable-auto",
          description: "Deprecated alias for `--autoupdate`",
          deprecated: true,
        },
        {
          name: "--disable-auto",
          description: "Deprecated alias for `--no-autoupdate`",
          deprecated: true,
        },
        {
          name: "--bypass-min-release-age",
          description:
            "Bypass package-manager release-age checks for this and future foreground upgrades",
        },
        {
          name: "--no-bypass-min-release-age",
          description: "Restore package-manager release-age checks",
        },
        {
          name: "--disable-min-release-age-bypass",
          description: "Deprecated alias for `--no-bypass-min-release-age`",
          deprecated: true,
        },
        formatOption,
        jsonOption,
      ],
    },
    {
      name: ["webhooks", "webhook"],
      description: "Manage webhooks",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "Show all webhooks",
          options: [formatOption, jsonOption],
        },
        {
          name: ["inspect", "get"],
          description: "Displays information related to a webhook",
          args: {
            name: "id",
          },
          options: [formatOption, jsonOption],
        },
        {
          name: ["create", "add"],
          description: "Create a new webhook",
          args: {
            name: "url",
          },
          options: [
            {
              name: "--event",
              description:
                "Webhook event to subscribe to (can be used multiple times)",
              args: {
                name: "event",
              },
              isRepeatable: true,
            },
            {
              name: ["-p", "--project"],
              description:
                "Project ID to associate with the webhook (can be used multiple times)",
              args: {
                name: "project-id",
              },
              isRepeatable: true,
            },
          ],
        },
        {
          name: ["delete", "rm", "del", "remove"],
          description: "Delete a webhook",
          args: {
            name: "id",
          },
          options: [
            {
              name: ["-y", "--yes"],
              description:
                "Skip the confirmation prompt when deleting a webhook",
            },
          ],
        },
      ],
    },
    {
      name: "vcr",
      description:
        "Manage Vercel Container Registry repositories and images (see `vcr image`)",
      subcommands: [
        {
          name: ["ls", "list"],
          description: "List container registry repositories for a project",
          options: [
            projectOption,
            limitOption,
            nextOption,
            cursorOption,
            formatOption,
            jsonOption,
          ],
        },
        {
          name: ["inspect", "get"],
          description: "Show details for a single repository",
          args: {
            name: "repository",
          },
          options: [projectOption, formatOption, jsonOption],
        },
        {
          name: ["create", "add"],
          description: "Create a container registry repository",
          args: {
            name: "name",
          },
          options: [projectOption, formatOption, jsonOption],
        },
        {
          name: ["update", "config"],
          description:
            "Update a container registry repository, such as the repository's visibility",
          args: {
            name: "repository",
          },
          options: [
            {
              name: "--public",
              description: "Make the repository public",
            },
            {
              name: "--no-public",
              description: "Make the repository private",
            },
            projectOption,
            formatOption,
            jsonOption,
          ],
        },
        {
          name: ["delete", "rm", "del", "remove"],
          description: "Delete a container registry repository",
          args: {
            name: "repository",
          },
          options: [projectOption, yesOption, formatOption, jsonOption],
        },
        {
          name: "login",
          description:
            "Authenticate a container tool (docker, podman, or buildah) with the Vercel Container Registry",
          args: {
            name: "engine",
          },
          options: [projectOption, formatOption, jsonOption],
        },
        {
          name: "build",
          description:
            "Build a container image tagged for the Vercel Container Registry by shelling out to your container tool (docker, podman, or buildah)",
          args: [
            {
              name: "engine",
            },
            {
              name: "path",
              isOptional: true,
              template: "filepaths",
            },
            {
              name: "name",
              isOptional: true,
            },
          ],
          options: [
            projectOption,
            {
              name: "--platform",
              description:
                "Target platform for the build (default: linux/amd64)",
              args: {
                name: "platform",
              },
            },
            {
              name: "--push",
              description: "Push the image after building",
            },
          ],
        },
        {
          name: "push",
          description:
            "Push a container image to the Vercel Container Registry by shelling out to your container tool (docker, podman, or buildah)",
          args: [
            {
              name: "engine",
            },
            {
              name: "name",
              isOptional: true,
            },
          ],
          options: [projectOption],
        },
        {
          name: ["tag", "tags"],
          description: "List or inspect a repository's tags",
          subcommands: [
            {
              name: ["ls", "list"],
              description: "List a repository's tags",
              args: {
                name: "repository",
              },
              options: [
                projectOption,
                {
                  name: "--sort-by",
                  description: "Field to sort tags by (default: updatedAt)",
                  args: {
                    name: "field",
                    suggestions: ["updatedAt", "tag"],
                  },
                },
                {
                  name: "--sort-order",
                  description: "Sort direction (default: desc)",
                  args: {
                    name: "order",
                    suggestions: ["asc", "desc"],
                  },
                },
                limitOption,
                nextOption,
                cursorOption,
                formatOption,
                jsonOption,
              ],
            },
            {
              name: ["inspect", "get"],
              description: "Show details for a single tag",
              args: [
                {
                  name: "repository",
                },
                {
                  name: "tag",
                },
              ],
              options: [projectOption, formatOption, jsonOption],
            },
          ],
        },
        {
          name: ["image", "images"],
          description: "List, inspect, or delete images in a repository",
          subcommands: [
            {
              name: ["ls", "list"],
              description: "List images in a container registry repository",
              args: {
                name: "repository",
              },
              options: [
                projectOption,
                {
                  name: "--untagged",
                  description: "Only list images that have no tags",
                },
                limitOption,
                nextOption,
                cursorOption,
                formatOption,
                jsonOption,
              ],
            },
            {
              name: ["inspect", "get"],
              description:
                "Show details for a single image, including its layer history",
              args: [
                {
                  name: "repository",
                },
                {
                  name: "imageId",
                },
              ],
              options: [projectOption, formatOption, jsonOption],
            },
            {
              name: ["delete", "rm", "del", "remove"],
              description: "Delete an image from a repository",
              args: [
                {
                  name: "repository",
                },
                {
                  name: "imageId",
                },
              ],
              options: [projectOption, yesOption, formatOption, jsonOption],
            },
          ],
        },
        {
          name: ["permissions", "permission"],
          description:
            "Manage which teams can pull images from a container registry repository",
          args: {
            name: "repository",
          },
          subcommands: [
            {
              name: ["ls", "list"],
              description: "List teams with access to a repository",
              options: [
                projectOption,
                {
                  name: ["-n", "--limit"],
                  description:
                    "Number of results to return per page (default: 100, max: 100)",
                  args: {
                    name: "number",
                  },
                },
                nextOption,
                cursorOption,
                formatOption,
                jsonOption,
              ],
            },
            {
              name: "add",
              description:
                "Give one or more teams access to pull images from a repository",
              args: {
                name: "team",
                isVariadic: true,
              },
              options: [projectOption, formatOption, jsonOption],
            },
            {
              name: ["remove", "rm"],
              description: "Remove one or more teams' access to a repository",
              args: {
                name: "team",
                isVariadic: true,
              },
              options: [projectOption, formatOption, jsonOption],
            },
            {
              name: "clear",
              description: "Remove access to a repository for every team",
              options: [projectOption, yesOption, formatOption, jsonOption],
            },
          ],
        },
      ],
    },
    {
      name: ["version", "versions"],
      description: "Manages the installed Vercel CLI version",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "Lists Vercel CLI versions available to install",
          options: [jsonOption],
        },
        {
          name: "installed",
          description: "Lists installed Vercel CLI versions",
        },
        {
          name: ["use", "switch", "install"],
          description: "Installs and switches to a specific Vercel CLI version",
          args: {
            name: "version",
          },
        },
        {
          name: ["update", "upgrade"],
          description: "Updates the Vercel CLI to the latest version",
        },
        {
          name: "check",
          description: "Check for native CLI updates in the background",
        },
        {
          name: "autoupdate",
          description: "Enables or disables automatic CLI updates",
          subcommands: [
            {
              name: "enable",
              description: "Turn on automatic CLI updates",
            },
            {
              name: "disable",
              description: "Turn off automatic CLI updates",
            },
            {
              name: "status",
              description: "Show whether automatic CLI updates are on",
            },
          ],
        },
      ],
    },
    {
      name: "whoami",
      description: "Shows the username of the currently logged in user",
      options: [
        formatOption,
        jsonOption,
        {
          name: "--cached",
          description:
            "Print the username saved by the last check, without contacting Vercel",
        },
      ],
    },
    {
      name: "help",
      description: "Show help for a command, or find a command by task",
      options: [jsonOption],
      subcommands: [
        {
          name: "search",
          description: "Find commands by task",
          args: {
            name: "query",
            description: "The task in plain words, such as add a domain",
            isVariadic: true,
          },
          options: [
            jsonOption,
            {
              name: "--with-help",
              description: "Also show the help page of the first result",
            },
          ],
        },
      ],
    },
    {
      name: "metrics",
      description:
        "Query observability metrics for your Vercel project or team",
      args: {
        name: "metric-id",
        isOptional: true,
      },
      options: [
        {
          name: "--aggregation",
          description:
            "Aggregation function (default: sum for counts/bytes/currency, avg for durations/memory/ratios)",
          args: {
            name: "fn",
          },
        },
        {
          name: "--group-by",
          description: "Dimensions to group by (repeatable)",
          args: {
            name: "dim",
          },
          isRepeatable: true,
        },
        {
          name: ["-n", "--limit"],
          description: "Max groups per time bucket (default: 10)",
          args: {
            name: "n",
          },
        },
        {
          name: "--order-by",
          description:
            "Order grouped results by value or count (default: count, or value when count is unsupported)",
          args: {
            name: "value|count",
            suggestions: ["value", "count"],
          },
        },
        {
          name: "--order",
          description:
            "Order direction for grouped results: asc or desc (default: desc)",
          args: {
            name: "asc|desc",
            suggestions: ["asc", "desc"],
          },
        },
        {
          name: ["-q", "--query"],
          description: "KQL filter expression (repeatable, ANDed together)",
          args: {
            name: "text",
          },
          isRepeatable: true,
        },
        {
          name: ["-f", "--filter"],
          description: "Deprecated alias for `--query`",
          args: {
            name: "expr",
          },
          isRepeatable: true,
          deprecated: true,
        },
        {
          name: "--data",
          description:
            "Query with several metrics and formulas as JSON, or - to read it from stdin",
          args: {
            name: "json",
          },
        },
        {
          name: ["-e", "--environment"],
          description:
            "Limit the query to one environment, such as production or preview",
          args: {
            name: "environment",
            suggestions: ["production", "preview", "development"],
          },
        },
        {
          name: "--prod",
          description: "Deprecated alias for `--environment production`",
          deprecated: true,
        },
        sinceOption2,
        untilOption,
        {
          name: "--granularity",
          description:
            "Time bucket size: 1m, 5m, 15m, 1h, 4h, 1d (default: auto; raised when too fine for the time range)",
          args: {
            name: "size",
            suggestions: ["1m", "5m", "15m", "1h", "4h", "1d"],
          },
        },
        {
          name: "--bucket-timezone",
          description:
            "IANA timezone for calendar bucket alignment only; does not shift --since/--until or output timestamps (e.g., Europe/Paris)",
          args: {
            name: "zone",
          },
        },
        projectOption,
        {
          name: "--all",
          description: "Query across all projects for the team",
        },
        formatOption,
        jsonOption,
      ],
      subcommands: [
        {
          name: "query",
          hidden: true,
        },
        {
          name: "schema",
          description: "List available metrics or inspect a specific metric",
          args: {
            name: "metric-or-prefix",
            isOptional: true,
          },
          options: [formatOption, jsonOption],
        },
      ],
    },
    {
      name: "connect",
      description: "Manage connectors",
      subcommands: [
        {
          name: "discover",
          description: "Discover services you can create a connector for",
          args: {
            name: "query",
            isOptional: true,
          },
          options: [
            {
              name: "--category",
              description: "Filter by category",
              args: {
                name: "slug",
              },
              isRepeatable: true,
            },
            {
              name: "--connection-method",
              description:
                "Filter by connection method (oauth, api-key, mcp, or a service-specific method)",
              args: {
                name: "method",
              },
              isRepeatable: true,
            },
            {
              name: "--target",
              description: "Filter by the product a service exposes (e.g. mcp)",
              args: {
                name: "target",
              },
              isRepeatable: true,
            },
            {
              name: "--supports-triggers",
              description:
                "Only show services that can forward webhook triggers",
            },
            {
              name: ["-n", "--limit"],
              description:
                "Number of services to return (default: 50, max: 500)",
              args: {
                name: "count",
              },
            },
            nextOption,
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "categories",
          description: "List the categories services are grouped into",
          options: [formatOption, jsonOption],
        },
        {
          name: "create",
          description: "Create a new connector",
          args: {
            name: "service",
          },
          options: [
            {
              name: "--name",
              description: "Name of the connector",
              args: {
                name: "name",
              },
            },
            {
              name: "--triggers",
              description: "Enable webhook triggers for this connector",
            },
            {
              name: "--trigger-input",
              description:
                "Trigger input with verification and optional registration objects",
              args: {
                name: "json",
              },
            },
            {
              name: "--trigger-event",
              description: "Webhook event to receive",
              args: {
                name: "event",
              },
              isRepeatable: true,
            },
            {
              name: "--trigger-project",
              description:
                "Target a project by name or ID instead of the linked project",
              args: {
                name: "project",
              },
            },
            {
              name: "--trigger-path",
              description:
                "Set the path on the destination project that receives forwarded webhooks",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
            {
              name: "--git-branch",
              description: "Target a preview deployment by Git branch name",
              args: {
                name: "branch",
              },
            },
            {
              name: "--trigger-branch",
              description: "Deprecated alias for `--git-branch`",
              args: {
                name: "branch",
              },
              deprecated: true,
            },
            {
              name: "--trigger-environment",
              description:
                "Target a custom environment by slug or stable ID. Cannot be combined with --git-branch",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
            },
            {
              name: "--connection-method",
              description:
                "How to connect to the service (e.g. oauth, mcp, api-key)",
              args: {
                name: "method",
              },
            },
            {
              name: "--target",
              description:
                "Which of the service's products to connect to (e.g. api, mcp)",
              args: {
                name: "target",
              },
            },
            {
              name: "--param",
              description:
                "Value for a connection method template field (e.g. domain=acme.okta.com)",
              args: {
                name: "key=value",
              },
              isRepeatable: true,
            },
            {
              name: ["-y", "--yes"],
              description:
                "Skip the single-connection-method confirmation prompt",
            },
            {
              name: "--data",
              description: "JSON object for non-managed connector creation",
              args: {
                name: "json",
              },
            },
            {
              name: "--connector-type",
              description:
                "Connector type for non-managed creation (default: resolved from the service)",
              args: {
                name: "type",
              },
            },
            {
              name: "--icon",
              description:
                "Path to a PNG or JPEG image to use as the connector icon (uploaded to Vercel)",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
            {
              name: "--background-color",
              description:
                "Background color for the connector icon (e.g. #1A2B3C)",
              args: {
                name: "hex",
              },
            },
            {
              name: "--accent-color",
              description: "Accent color for the connector icon (e.g. #1A2B3C)",
              args: {
                name: "hex",
              },
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "update",
          description: "Update connector branding or triggers",
          args: {
            name: "id",
          },
          options: [
            {
              name: "--triggers",
              description:
                "Enable triggers using the same setup as connector creation",
            },
            {
              name: "--trigger-input",
              description:
                "Trigger input with verification and optional registration objects",
              args: {
                name: "json",
              },
            },
            {
              name: "--no-triggers",
              description: "Disable triggers and clear trigger setup data",
            },
            {
              name: "--icon",
              description:
                "Path to a PNG or JPEG image to use as the connector icon (uploaded to Vercel)",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
            {
              name: "--background-color",
              description:
                "Background color for the connector icon (e.g. #1A2B3C)",
              args: {
                name: "hex",
              },
            },
            {
              name: "--accent-color",
              description: "Accent color for the connector icon (e.g. #1A2B3C)",
              args: {
                name: "hex",
              },
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: ["list", "ls"],
          description:
            "List connectors linked to the current project (falls back to every connector in the team when no project is linked or when --all-projects is set)",
          options: [
            {
              name: "--all-projects",
              description:
                "List every connector in the team, regardless of project link",
            },
            {
              name: ["-n", "--limit"],
              description: "Number of connectors to return per page",
              args: {
                name: "count",
              },
            },
            nextOption,
            {
              name: ["-q", "--query"],
              description: "Search connectors by name or UID",
              args: {
                name: "text",
              },
            },
            {
              name: "--search",
              description: "Deprecated alias for `--query`",
              args: {
                name: "text",
              },
              deprecated: true,
            },
            {
              name: "--service",
              description:
                "Filter by service name (e.g. slack, mcp.linear.app)",
              args: {
                name: "name",
              },
              isRepeatable: true,
            },
            {
              name: "--type",
              description:
                "Filter by connector type (slack, github, oauth, custom)",
              args: {
                name: "type",
              },
              isRepeatable: true,
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "token",
          description:
            "Get a token for a connector (accepts a connector ID like scl_abc or a UID like slack/my-bot)",
          args: {
            name: "id",
          },
          options: [
            {
              name: "--subject",
              description:
                'Subject type: "user" (acts on behalf of you) or "app" (uses the connector\'s default installation) (default: "user")',
              args: {
                name: "type",
              },
            },
            {
              name: "--installation",
              description:
                "Target a specific installation (only useful with --subject app) (default: the connector's default installation)",
              args: {
                name: "installation",
              },
            },
            installationIdOption,
            {
              name: "--scopes",
              description:
                "Scopes (comma- or space-separated) (default: connector defaults)",
              args: {
                name: "scopes",
              },
            },
            {
              name: "--no-default-scopes",
              description: "Do not request the connector default scopes",
            },
            yesOption,
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "attach",
          description:
            "Attach a Vercel project to a connector for one or more environments",
          args: {
            name: "connector",
          },
          options: [
            {
              name: ["-e", "--environment"],
              description:
                "Environments to enable by system name, custom slug, or custom ID. Repeatable and comma-separated (default: production, preview, and development)",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
              isRepeatable: true,
            },
            {
              name: ["-p", "--project"],
              description:
                "Project name or ID (default: current linked project)",
              args: {
                name: "name-or-id",
              },
            },
            {
              name: "--triggers",
              description:
                "Also register this project as a trigger destination so the connector forwards verified webhooks to it (max 3 destinations per connector)",
            },
            {
              name: "--git-branch",
              description: "Target a preview deployment by Git branch name",
              args: {
                name: "branch",
              },
            },
            {
              name: "--trigger-branch",
              description: "Deprecated alias for `--git-branch`",
              args: {
                name: "branch",
              },
              deprecated: true,
            },
            {
              name: "--trigger-environment",
              description:
                "Target a custom environment by slug or stable ID. Cannot be combined with --git-branch",
              args: {
                name: "environment",
                suggestions: ["production", "preview", "development"],
              },
            },
            {
              name: "--trigger-path",
              description:
                "Path on the destination project that receives the forwarded webhook (default: /{service})",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
            yesOption3,
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "detach",
          description: "Detach a Vercel project from a connector",
          args: {
            name: "connector",
          },
          options: [
            {
              name: ["-p", "--project"],
              description:
                "Project name or ID (default: current linked project)",
              args: {
                name: "name-or-id",
              },
            },
            yesOption3,
            formatOption,
            jsonOption,
          ],
        },
        {
          name: ["delete", "rm", "del", "remove"],
          description: "Delete a connector",
          args: {
            name: "connector",
          },
          options: [
            {
              name: "--disconnect-all",
              description:
                "Disconnects all projects from the connector before deletion",
            },
            {
              name: ["-y", "--yes"],
              description:
                "Skip the confirmation prompt when deleting a connector",
            },
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "revoke-tokens",
          description: "Revoke tokens issued from a connector",
          args: {
            name: "connector",
          },
          options: [
            {
              name: "--my-tokens",
              description: "Revoke only your own tokens for this connector",
            },
            {
              name: "--all-tokens",
              description: "Revoke every token for all users and installations",
            },
            yesOption3,
            formatOption,
            jsonOption,
          ],
        },
        {
          name: "open",
          description: "Open a connector in the Vercel dashboard",
          args: {
            name: "id",
          },
          options: [formatOption, jsonOption],
        },
        {
          name: "contacts",
          description: "Manage phone contacts for connectors",
          subcommands: [
            {
              name: "add",
              description: "Add a phone contact that a connector may message",
              args: {
                name: "connector",
              },
              options: [
                {
                  name: "--phone-number",
                  description:
                    "Contact phone number in E.164 format (e.g. +12025551234)",
                  args: {
                    name: "phone",
                  },
                },
                formatOption,
                jsonOption,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "guidance",
      description: "Allows you to enable or disable guidance messages",
      subcommands: [
        {
          name: "enable",
          description: "Enables guidance messages",
        },
        {
          name: "disable",
          description: "Disables guidance messages",
        },
        {
          name: "status",
          description:
            "Shows whether guidance messages are enabled or disabled",
        },
      ],
      hidden: true,
    },
  ],
};

export default completionSpec;
