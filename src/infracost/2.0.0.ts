const currencyOption: Fig.Option = {
  name: "--currency",
  description: "ISO 4217 currency code to use for prices",
  args: { name: "currency", suggestions: ["USD", "EUR", "GBP"] },
};

const sshKeyFileOption: Fig.Option = {
  name: "--ssh-key-file",
  description:
    "Comma-separated SSH private key file(s) to use for fetching private modules over SSH (defaults to the standard ~/.ssh keys)",
  args: { name: "files", template: "filepaths" },
};

const includeWarningsOption: Fig.Option = {
  name: "--include-warnings",
  description: "Also show warning-severity diagnostics in the summary",
};

const pluginOption: Fig.Option = {
  name: ["-o", "--option"],
  description:
    "Specify a plugin-specific option, e.g. -o infracost/terraform.option=yes",
  isRepeatable: true,
  args: { name: "option" },
};

const scopeOption = (description: string): Fig.Option => ({
  name: "--scope",
  description,
  args: {
    name: "scope",
    default: "user",
    suggestions: ["user", "project", "local"],
  },
});

const pathArg = (description: string): Fig.Arg => ({
  name: "path",
  description,
  isOptional: true,
  template: "folders",
});

const hiddenStringOption = (
  name: string,
  description: string,
  argName: string
): Fig.Option => ({
  name,
  description,
  isPersistent: true,
  hidden: true,
  args: { name: argName },
});

const globalOptions: Fig.Option[] = [
  {
    name: "--org",
    description: "The organization slug or ID to use",
    isPersistent: true,
    args: { name: "org" },
  },
  {
    name: "--no-color",
    description: "Disable colored output",
    isPersistent: true,
  },
  {
    name: "--json",
    description: "Output logs and command results as JSON",
    isPersistent: true,
  },
  {
    name: "--debug",
    description: "Enable debug logging",
    isPersistent: true,
  },
  {
    name: "--llm",
    description:
      "Output command results in a compact, token-efficient format intended for LLM prompts",
    isPersistent: true,
  },
  {
    name: "--oauth-use-device-flow",
    description:
      "Use device flow for authentication instead of PKCE (useful when you don't have access to localhost)",
    isPersistent: true,
  },
  {
    name: "--access-token-use-cache",
    description:
      "Read and save access tokens from a cache file (disable with =false to force a fresh login)",
    isPersistent: true,
  },
  {
    name: "--environment",
    description: "The environment to use for authentication",
    isPersistent: true,
    hidden: true,
    args: {
      name: "environment",
      default: "prod",
      suggestions: ["prod", "dev", "local"],
    },
  },
  hiddenStringOption(
    "--pricing-endpoint",
    "The pricing endpoint to use for prices",
    "url"
  ),
  hiddenStringOption("--claude-path", "Path to the Claude CLI binary", "path"),
  hiddenStringOption(
    "--agents-endpoint",
    "The endpoint for the Infracost Agents API",
    "url"
  ),
  hiddenStringOption(
    "--events-endpoint",
    "The endpoint for the Infracost events service",
    "url"
  ),
  hiddenStringOption(
    "--dashboard-endpoint",
    "The endpoint for the Infracost dashboard",
    "url"
  ),
  hiddenStringOption(
    "--oauth-client-id",
    "The client ID to use for authentication",
    "client-id"
  ),
  hiddenStringOption(
    "--oauth-endpoint",
    "The auth endpoint to use for authentication",
    "url"
  ),
  {
    name: "--oauth-callback-port",
    description: "The callback port to use for authentication",
    isPersistent: true,
    hidden: true,
    args: { name: "port", default: "26372" },
  },
  hiddenStringOption(
    "--oauth-audience",
    "The audience to use for authentication",
    "audience"
  ),
  hiddenStringOption(
    "--access-token-cache-path",
    "The path to the token cache file",
    "path"
  ),
  hiddenStringOption(
    "--user-cache-path",
    "The path to the user cache file",
    "path"
  ),
  {
    name: ["-h", "--help"],
    description: "Show help for command",
    isPersistent: true,
  },
];

const removedCommand = (name: string, description: string): Fig.Subcommand => ({
  name,
  description,
  hidden: true,
});

const completionSubcommand = (shell: string): Fig.Subcommand => ({
  name: shell,
  description: `Generate the autocompletion script for ${shell}`,
  options: [
    {
      name: "--no-descriptions",
      description: "Disable completion descriptions",
    },
  ],
});

const completion: Fig.Subcommand = {
  name: "infracost",
  description:
    "Shift FinOps Left: Prevent cloud waste and budget overruns before every deploy",
  options: [
    ...globalOptions,
    {
      name: ["-v", "--version"],
      description: "Show version for infracost",
    },
  ],
  subcommands: [
    {
      name: "setup",
      description: "Set up Infracost integrations",
    },
    {
      name: "auth",
      description: "Manage authentication",
      subcommands: [
        {
          name: "login",
          description: "Log in to Infracost",
        },
        {
          name: "logout",
          description: "Log out of Infracost",
        },
        {
          name: "whoami",
          description: "Show the current user",
        },
      ],
    },
    {
      name: "org",
      description: "Manage organizations",
      subcommands: [
        {
          name: "create",
          description: "Create a new organization",
          args: { name: "name", isOptional: true },
        },
        {
          name: "list",
          description: "List your organizations",
        },
        {
          name: "switch",
          description: "Switch the active organization",
          options: [
            {
              name: "--repo",
              description: "Save org selection for the current repository only",
            },
          ],
          args: { name: "org-slug", isOptional: true },
        },
        {
          name: "current",
          description: "Show the current organization",
        },
      ],
    },
    {
      name: "agent",
      description: "Manage AI coding agent integrations",
      subcommands: [
        {
          name: "setup",
          description: "Install Infracost skills for your AI coding agent",
          options: [scopeOption("Installation scope")],
        },
        {
          name: "remove",
          description: "Remove Infracost skills from your AI coding agent",
          options: [scopeOption("Installation scope")],
        },
        {
          name: "status",
          description:
            "Show which agents have Infracost skills installed and whether they're up to date",
        },
      ],
    },
    {
      name: "ide",
      description: "Manage IDE integrations",
      subcommands: [
        {
          name: "setup",
          description: "Install the Infracost extension for your IDE",
        },
      ],
    },
    {
      name: "ci",
      description: "Manage CI integrations",
      subcommands: [
        {
          name: "setup",
          description: "Set up Infracost CI integration for this repository",
          options: [
            {
              name: "--pipeline",
              description:
                "Write a CI config for this repository instead of using the app integration",
            },
            {
              name: "--ci-pipeline",
              description: "Deprecated, use --pipeline instead",
              deprecated: true,
            },
            {
              name: "--ci-platform",
              description:
                "CI platform to configure (detected from the repository when unset)",
              args: {
                name: "platform",
                suggestions: [
                  "github",
                  "gitlab",
                  "azure",
                  "bitbucket",
                  "jenkins",
                  "generic",
                ],
              },
            },
            {
              name: "--yes",
              description:
                "Skip confirmation prompts for non-interactive scripting",
            },
          ],
        },
      ],
    },
    {
      name: "plugin",
      description: "Manage Infracost plugins",
      subcommands: [
        {
          name: "list",
          description: "List Infracost parser and provider plugins",
        },
        {
          name: "update",
          description: "Update all Infracost plugins to the latest version",
        },
      ],
    },
    {
      name: "scan",
      description:
        "Scan your IaC and derive FinOps costs and policy violations",
      options: [
        currencyOption,
        sshKeyFileOption,
        includeWarningsOption,
        pluginOption,
      ],
      args: pathArg("Project path to scan (defaults to the current directory)"),
    },
    {
      name: "diff",
      description:
        "Show the cost change between a saved baseline and your current code",
      options: [
        {
          name: "--compare-to",
          description:
            "Path to an Infracost JSON file to compare against (defaults to the last cached scan of this path)",
          args: { name: "file", template: "filepaths" },
        },
        currencyOption,
        sshKeyFileOption,
        pluginOption,
        {
          name: "--path",
          description:
            "Deprecated, pass the path as an argument instead: infracost diff <path>",
          deprecated: true,
          args: { name: "path", template: "folders" },
        },
        {
          name: "--format",
          description: "Deprecated, use --json or --llm instead",
          deprecated: true,
          args: { name: "format" },
        },
        {
          name: "--out-file",
          description: "Deprecated, redirect stdout instead",
          deprecated: true,
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--show-skipped",
          description: "Deprecated, all resources are now shown",
          deprecated: true,
        },
        {
          name: "--terraform-var-file",
          description: "Deprecated, this flag is no longer supported",
          deprecated: true,
          isRepeatable: true,
          args: { name: "file", template: "filepaths" },
        },
      ],
      args: pathArg(
        "Project path to compare (defaults to the current directory)"
      ),
    },
    {
      name: "inspect",
      description:
        "Inspect cached analysis results with filtering and grouping",
      options: [
        {
          name: "--file",
          description: "Path to JSON file (skips cache)",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--summary",
          description: "Show a summary view",
        },
        {
          name: "--group-by",
          description:
            "Group by one or more dimensions (comma-separated or repeated)",
          isRepeatable: true,
          args: {
            name: "dimension",
            suggestions: [
              "type",
              "provider",
              "project",
              "resource",
              "file",
              "policy",
              "guardrail",
              "budget",
            ],
          },
        },
        {
          name: "--policy",
          description: "Filter by policy name or slug",
          args: { name: "policy" },
        },
        {
          name: "--budget",
          description: "Show budget detail by name or ID",
          args: { name: "budget" },
        },
        {
          name: "--guardrail",
          description: "Show guardrail detail by name or ID",
          args: { name: "guardrail" },
        },
        {
          name: "--resource",
          description: "Filter by resource address",
          args: { name: "address" },
        },
        {
          name: "--provider",
          description: "Filter by provider",
          args: { name: "provider", suggestions: ["aws", "google", "azurerm"] },
        },
        {
          name: "--project",
          description: "Filter by project name",
          args: { name: "project" },
        },
        {
          name: "--costs-only",
          description: "Hide free resources",
        },
        {
          name: "--failing",
          description: "Only show failing policies",
        },
        {
          name: "--diagnostics",
          description:
            "Show per-project diagnostics from the latest scan (critical and warning)",
        },
        {
          name: "--top",
          description: "Show only the top N resources by cost",
          args: { name: "N" },
        },
        {
          name: "--total-savings",
          description:
            "Print the scalar sum of yearly_savings across every FinOps issue",
        },
        {
          name: "--top-savings",
          description: "Print the top N FinOps issues sorted by yearly_savings",
          args: { name: "N" },
        },
        {
          name: "--addresses-only",
          description:
            "Strip everything except resource addresses, one per line (composes with the other selection flags)",
        },
        {
          name: "--missing-tag",
          description: "Limit to resources missing the given tag key entirely",
          args: { name: "tag" },
        },
        {
          name: "--invalid-tag",
          description:
            "Limit to resources where the given tag is set but its value is outside the policy's allowed list",
          args: { name: "tag" },
        },
        {
          name: "--min-cost",
          description: "Limit to resources with monthly cost >= N",
          args: { name: "N" },
        },
        {
          name: "--max-cost",
          description: "Limit to resources with monthly cost <= N",
          args: { name: "N" },
        },
        {
          name: "--filter",
          description:
            "Filter expression, AND'd and comma-separated (keys: policy, project, provider, tag.<key>=missing)",
          args: { name: "expression" },
        },
        {
          name: "--fields",
          description:
            "Tabular column projection (comma-separated), available fields depend on the view",
          args: { name: "fields" },
        },
      ],
      args: pathArg("Project path whose cached scan results to inspect"),
    },
    {
      name: "price",
      description: "Read IaC from stdin, scan it, and print the cost estimate",
      hidden: true,
      options: [currencyOption, sshKeyFileOption, includeWarningsOption],
    },
    {
      name: "policies",
      description: "List all available FinOps and tagging policies",
      options: [
        {
          name: ["-f", "--finops-only"],
          description: "Only list FinOps policies",
        },
        {
          name: ["-t", "--tagging-only"],
          description: "Only list tagging policies",
        },
        {
          name: ["-p", "--providers"],
          description:
            "Limit FinOps policy lookup to the given providers, reduces which provider plugins are downloaded",
          isRepeatable: true,
          args: {
            name: "provider",
            suggestions: ["aws", "azure", "google"],
          },
        },
        sshKeyFileOption,
      ],
      args: pathArg("Project path to load policies for"),
    },
    {
      name: "budgets",
      description: "List cost budgets for the current organization",
    },
    {
      name: "guardrails",
      description: "List cost guardrails for the current repository",
      args: pathArg("Repository path (defaults to the current directory)"),
    },
    {
      name: "findings",
      description:
        "List and inspect FinOps findings for the current organization",
      hidden: true,
      subcommands: [
        {
          name: "list",
          description: "List findings for the current organization",
          options: [
            {
              name: "--status",
              description: "Filter by status",
              args: {
                name: "status",
                suggestions: [
                  "open",
                  "in_progress",
                  "resolved",
                  "dismissed",
                  "duplicate",
                ],
              },
            },
            {
              name: "--effort",
              description: "Filter by effort",
              args: {
                name: "effort",
                suggestions: ["trivial", "small", "medium", "large"],
              },
            },
            {
              name: "--page",
              description: "1-based page to fetch (default the first page)",
              args: { name: "page" },
            },
            {
              name: "--limit",
              description:
                "Maximum number of findings to return per page (server caps at 200, default 50)",
              args: { name: "limit" },
            },
          ],
        },
        {
          name: "get",
          description: "Show a finding's details, including its tasks",
          args: { name: "finding-id" },
        },
        {
          name: "update",
          description:
            "Update a finding's status (open / resolved / dismissed)",
          options: [
            {
              name: "--status",
              description: "New status",
              isRequired: true,
              args: {
                name: "status",
                suggestions: ["open", "resolved", "dismissed"],
              },
            },
            {
              name: "--reason",
              description: "Optional reason (recommended for dismissals)",
              args: { name: "reason" },
            },
          ],
          args: { name: "finding-id" },
        },
      ],
    },
    {
      name: "tasks",
      description: "Draft and submit fixes for FinOps task work",
      hidden: true,
      subcommands: [
        {
          name: "update",
          description: "Confirm, correct, or dismiss a task",
          options: [
            {
              name: "--status",
              description: "Resolution of the task",
              isRequired: true,
              args: {
                name: "status",
                suggestions: ["confirm", "correct", "dismiss"],
              },
            },
            {
              name: "--reason",
              description:
                "Reason, required for correct, recommended for dismiss, ignored for confirm",
              args: { name: "reason" },
            },
          ],
          args: { name: "task-id" },
        },
        {
          name: "preview-fix",
          description: "Draft a PR or ticket for a task without creating it",
          options: [
            {
              name: "--finding-id",
              description: "Finding ID the task belongs to",
              isRequired: true,
              args: { name: "finding-id" },
            },
            {
              name: "--type",
              description:
                "Action type to draft, defaults to the task's own suggested action",
              args: {
                name: "type",
                suggestions: ["open_pr", "create_ticket"],
              },
            },
          ],
          args: { name: "task-id" },
        },
        {
          name: "create-fix",
          description: "Submit a previously-drafted fix to Agents",
          options: [
            {
              name: "--finding-id",
              description: "Finding ID the task belongs to",
              isRequired: true,
              args: { name: "finding-id" },
            },
            {
              name: "--type",
              description:
                "Action type being created, defaults to the drafted config's own type",
              args: {
                name: "type",
                suggestions: ["open_pr", "create_ticket"],
              },
            },
            {
              name: "--config",
              description: 'Path to the drafted config JSON ("-" for stdin)',
              args: { name: "file", default: "-", template: "filepaths" },
            },
          ],
          args: { name: "task-id" },
        },
      ],
    },
    {
      name: "actions",
      description:
        "Manage actions (PRs, tickets, manual fixes) attached to findings",
      hidden: true,
      subcommands: [
        {
          name: "retry",
          description: "Re-queue a failed action for another attempt",
          args: { name: "action-id" },
        },
      ],
    },
    {
      name: "doctor",
      description: "Run diagnostic checks on your Infracost installation",
      options: [
        {
          name: "--verbose",
          description: "Show full diagnostic detail for every check",
        },
        {
          name: "--fix",
          description: "Attempt auto-remediation for failing checks",
        },
        {
          name: "--bundle",
          description: "Generate a support bundle with full diagnostic output",
        },
        {
          name: "--check-agents",
          description: "Include AI coding agent integrations in the checks",
        },
        {
          name: "--check-ide",
          description: "Include IDE integrations in the checks",
        },
        scopeOption("Installation scope for --fix"),
      ],
    },
    {
      name: "mcp",
      description: "Run as a Model Context Protocol stdio server",
    },
    {
      name: "update",
      description: "Update to the latest version",
    },
    {
      name: "cache",
      description: "Inspect and manage the on-disk Infracost cache",
      subcommands: [
        {
          name: "info",
          description: "Show on-disk size of each Infracost cache",
        },
        {
          name: "prune",
          description: "Remove old cache entries and any stray files",
          options: [
            {
              name: "--age",
              description: "Minimum age of entries to prune (e.g. 24h, 7d, 2w)",
              args: { name: "age", default: "24h0m0s" },
            },
          ],
        },
        {
          name: "clear",
          description: "Wipe the results and parser caches",
        },
      ],
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: ["bash", "zsh", "fish", "powershell"].map(
        completionSubcommand
      ),
    },
    {
      name: "version",
      description: "Show the current version",
      hidden: true,
    },
    removedCommand(
      "breakdown",
      "Deprecated, warns and runs infracost scan instead"
    ),
    removedCommand("generate", "Removed, use infracost setup instead"),
    removedCommand(
      "comment",
      "Removed, configure an official CI/CD integration with infracost ci setup instead"
    ),
    removedCommand("configure", "Removed"),
    removedCommand("output", "Removed"),
    removedCommand("upload", "Removed"),
  ],
};

const versions: Fig.VersionDiffMap = {};

versions["2.19.1"] = {};

export { versions };
export default completion;
