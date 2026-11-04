// Cursor CLI v2026.10.22 (https://cursor.com/docs/cli/reference/parameters,
// https://cursor.com/docs/cli/changelog). Hidden commands (`acp`, `sandbox`)
// and hidden root flags (`-e`, `-k`, `--auth-token`) are intentionally omitted.

const formatOption: Fig.Option = {
  name: "--format",
  description: "Output format",
  args: { name: "format", suggestions: ["text", "json"] },
};

const promptArg: Fig.Arg = {
  name: "prompt",
  description: "Initial prompt for the agent",
  isOptional: true,
  isVariadic: true,
};

const resumeOption: Fig.Option = {
  name: "--resume",
  description: "Resume a chat session",
  args: { name: "chatId", isOptional: true },
};

const sessionOptions: Fig.Option[] = [
  {
    name: ["-p", "--print"],
    description: "Print responses to console (non-interactive, all tools)",
  },
  {
    name: "--output-format",
    description: "Output format (only with --print)",
    args: { name: "format", suggestions: ["text", "json", "stream-json"] },
  },
  {
    name: "--stream-partial-output",
    description: "Stream partial output as text deltas (stream-json only)",
  },
  {
    name: ["-c", "--cloud"],
    description: "Start in cloud mode (open composer picker on launch)",
  },
  {
    name: "--mode",
    description: "Start in the given execution mode",
    args: {
      name: "mode",
      suggestions: [
        { name: "plan", description: "Read-only planning, no edits" },
        { name: "ask", description: "Read-only Q&A" },
      ],
    },
  },
  {
    name: "--plan",
    description: "Start in plan mode (shorthand for --mode=plan)",
  },
  resumeOption,
  {
    name: "--continue",
    description: "Continue the previous session",
  },
  {
    name: "--model",
    description: "Model to use",
    args: { name: "model" },
  },
  {
    name: "--list-models",
    description: "List available models and exit",
  },
  {
    name: ["-f", "--force"],
    description: "Force allow commands unless explicitly denied",
  },
  {
    name: "--yolo",
    description: "Alias for --force (Run Everything)",
  },
  {
    name: "--auto-review",
    description: "Use Auto-review run mode for approvals",
  },
  {
    name: "--sandbox",
    description: "Enable or disable sandbox mode (overrides config)",
    args: { name: "mode", suggestions: ["enabled", "disabled"] },
  },
  {
    name: "--approve-mcps",
    description: "Automatically approve all MCP servers",
  },
  {
    name: "--trust",
    description: "Trust the current workspace without prompting",
  },
  {
    name: "--workspace",
    description: "Workspace directory to use",
    args: { name: "path", template: "folders" },
  },
  {
    name: "--add-dir",
    description: "Add a directory to the workspace at launch",
    isRepeatable: true,
    args: { name: "path", template: "folders" },
  },
  {
    name: "--plugin-dir",
    description: "Load a local plugin directory",
    isRepeatable: true,
    args: { name: "path", template: "folders" },
  },
  {
    name: ["-w", "--worktree"],
    description: "Run in a new Git worktree under ~/.cursor/worktrees",
    args: { name: "name", isOptional: true },
  },
  {
    name: "--worktree-base",
    description: "Branch or ref to base the new worktree on",
    args: { name: "branch" },
  },
  {
    name: "--skip-worktree-setup",
    description: "Skip setup scripts from .cursor/worktrees.json",
  },
  {
    name: "--image",
    description: "Attach an image to the prompt",
    args: { name: "path", template: "filepaths" },
  },
];

const identifierArg: Fig.Arg = {
  name: "identifier",
  description: "MCP server identifier",
};

const workerOptions: Fig.Option[] = [
  {
    name: "--worker-dir",
    description: "Workspace root to expose to agents",
    isRepeatable: true,
    args: { name: "path", template: "folders" },
  },
  {
    name: "--management-addr",
    description: "Listen address for /healthz, /readyz and /metrics",
    args: { name: "address" },
  },
  {
    name: "--label",
    description: "Add a worker label",
    isRepeatable: true,
    args: { name: "key=value" },
  },
  {
    name: "--labels-file",
    description: "JSON or TOML labels file",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--idle-release-timeout",
    description: "Seconds to stay connected while idle (0 disables)",
    args: { name: "seconds" },
  },
  {
    name: "--pool",
    description: "Register for pool assignment (default pool: default)",
    args: { name: "name", isOptional: true },
  },
  {
    name: "--single-use",
    description: "Legacy alias for --pool",
  },
  {
    name: "--pool-name",
    description: "Deprecated alias for --pool <name>",
    deprecated: true,
    args: { name: "name" },
  },
  {
    name: "--name",
    description: "Display name (default: hostname)",
    args: { name: "name" },
  },
  {
    name: "--data-dir",
    description: "Base directory for logs, artifacts and recordings",
    args: { name: "path", template: "folders" },
  },
  {
    name: "--debug",
    description: "Print debug diagnostics before starting bridge mode",
  },
  {
    name: "--computer-use",
    description: "Let agents drive this machine's desktop",
  },
  {
    name: "--display",
    description: "Linux only: X11 display to use for --computer-use",
    args: { name: "display" },
  },
  {
    name: "--share-desktop",
    description: "Linux only: let viewers watch or control the desktop",
    args: {
      name: "mode",
      isOptional: true,
      suggestions: ["view", "view_and_control"],
    },
  },
  {
    name: "--connect-workspace",
    description: "Linux only: allow opening a live workspace",
  },
  {
    name: "--auth-token",
    description: "Pre-minted access token",
    args: { name: "token" },
  },
  {
    name: "--auth-token-file",
    description: "File containing the auth token",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--clone-git-repos",
    description: "Check out the agent's GitHub repos on claim",
  },
  {
    name: "--mint-github-token",
    description: "Receive short-lived GitHub tokens during claimed runs",
  },
  {
    name: "--sync-dashboard-secrets",
    description: "Receive Cloud Agent secrets as env vars during runs",
  },
  {
    name: "--on-session-start",
    description: "Command to run after each claim",
    args: { name: "command" },
  },
  {
    name: "--on-session-end",
    description: "Command to run before each claim is torn down",
    args: { name: "command" },
  },
  {
    name: "--identity-socket",
    description: "Serve a per-claim OIDC token socket to agents",
  },
  {
    name: "--worker-id",
    description: "Stable worker ID used with claim",
    args: { name: "id" },
  },
  {
    name: "--mcp-tool-timeout",
    description: "Stdio MCP tool call timeout",
    isRepeatable: true,
    args: { name: "server[/tool]=seconds" },
  },
  {
    name: ["-e", "--endpoint"],
    description: "API endpoint",
    args: { name: "url" },
  },
];

const helpSubcommand: Fig.Subcommand = {
  name: "help",
  description: "Display help for command",
  args: { name: "command", isOptional: true, template: "help" },
};

const completionSpec: Fig.Spec = {
  name: "cursor-agent",
  description: "Cursor CLI: AI coding agent in your terminal",
  subcommands: [
    {
      name: "agent",
      description: "Start the Cursor Agent",
      options: sessionOptions,
      args: promptArg,
    },
    { name: "login", description: "Authenticate with Cursor" },
    {
      name: "logout",
      description: "Sign out and clear stored authentication",
    },
    {
      name: ["status", "whoami"],
      description: "View authentication status",
      options: [formatOption],
    },
    {
      name: "about",
      description: "Display version, system, and account information",
      options: [formatOption],
    },
    { name: "models", description: "List available models for this account" },
    {
      name: "mcp",
      description: "Manage MCP servers",
      subcommands: [
        {
          name: "login",
          description: "Authenticate with an MCP server from mcp.json",
          args: identifierArg,
        },
        {
          name: "list",
          description: "List configured MCP servers and their status",
        },
        {
          name: "list-tools",
          description: "List available tools for an MCP server",
          args: identifierArg,
        },
        {
          name: "enable",
          description: "Add an MCP server to the local approved list",
          args: identifierArg,
        },
        {
          name: "disable",
          description: "Disable an MCP server",
          args: identifierArg,
        },
        helpSubcommand,
      ],
    },
    {
      name: "plugin",
      description: "Manage plugins",
      subcommands: [
        {
          name: "marketplace",
          description: "Manage plugin marketplaces",
          subcommands: [
            {
              name: "add",
              description: "Register a marketplace from a git URL",
              args: { name: "git-url" },
              options: [
                {
                  name: "--git-ref",
                  description: "Branch, tag, or commit to pin",
                  args: { name: "ref" },
                },
              ],
            },
            {
              name: "list",
              description: "List registered marketplaces",
              options: [formatOption],
            },
            {
              name: "update",
              description: "Re-index a marketplace from its repository",
              args: { name: "marketplace" },
            },
            {
              name: "remove",
              description: "Remove a user-scoped marketplace",
              args: { name: "marketplace" },
            },
          ],
        },
      ],
    },
    {
      name: "persist",
      description: "Start a persistent session that survives disconnects",
      options: [resumeOption],
      subcommands: [
        {
          name: "attach",
          description: "Reconnect to a persistent session",
          args: { name: "session", isOptional: true },
        },
        { name: "list", description: "List persistent sessions" },
        {
          name: "stop",
          description: "Stop a persistent session",
          args: { name: "session", isOptional: true },
        },
      ],
    },
    {
      name: "env",
      description: "Manage Cloud Agent environments",
      subcommands: [
        { name: "list", description: "List environments and their IDs" },
        {
          name: "get",
          description: "Show saved environments for a repository",
          args: { name: "repoUrl" },
        },
        {
          name: "deploy",
          description: "Deploy an environment file",
          // ponytail: unsure whether the file is positional; docs only say "files passed to"
          args: { name: "file", isOptional: true, template: "filepaths" },
          options: [
            {
              name: "--env",
              description: "Public ID of an existing environment to update",
              args: { name: "id" },
            },
            {
              name: "--name",
              description: "Environment name",
              args: { name: "name" },
            },
            {
              name: "--repo",
              description: "Repository URL",
              args: { name: "url" },
            },
            {
              name: "--scm-repo-node-id",
              description: "SCM repository node ID",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an environment by public ID",
          args: { name: "id" },
        },
      ],
    },
    {
      name: "team",
      description: "Manage the active team",
      subcommands: [{ name: "switch", description: "Switch the active team" }],
    },
    { name: "bedrock", description: "Configure AWS Bedrock access" },
    {
      name: "worker",
      description: "Run a private cloud worker in your environment",
      options: workerOptions,
      subcommands: [
        {
          name: "start",
          description: "Start the worker and connect to Cursor",
          options: [
            ...workerOptions,
            { name: "--verbose", description: "Enable verbose startup logs" },
          ],
        },
        {
          name: "debug",
          description: "Run preflight diagnostics for auth, privacy, routing",
          options: [{ name: "--json", description: "Output report as JSON" }],
        },
        {
          name: "controller",
          description: "Start workers from a spawn hook for pools",
          options: [
            {
              name: "--spawn",
              description: "Script to run per claim or missing warm worker",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--pool",
              description: "Pool to watch",
              isRepeatable: true,
              args: { name: "name" },
            },
            {
              name: "--all-pools",
              description: "Watch the team-wide pending-requests list",
            },
            {
              name: "--warm-idle",
              description: "Keep this many idle workers per pool",
              args: { name: "count" },
            },
            {
              name: "--session-token",
              description: "Give the spawn hook a session token per claim",
            },
            {
              name: "--identity-audience",
              description: "Request a signed identity token per claim",
              args: { name: "aud" },
            },
            {
              name: "--repository",
              description: "Filter pending requests by repository",
              args: { name: "url" },
            },
            {
              name: "--endpoint",
              description: "Public API base URL",
              args: { name: "url" },
            },
          ],
        },
        helpSubcommand,
      ],
    },
    {
      name: "update",
      description: "Update Cursor Agent to the latest version",
    },
    { name: "ls", description: "List previous chats and pick one to resume" },
    { name: "resume", description: "Resume the latest chat session" },
    {
      name: "create-chat",
      description: "Create a new empty chat and return its ID",
    },
    {
      name: ["generate-rule", "rule"],
      description: "Generate a new Cursor rule with interactive prompts",
    },
    {
      name: "install-shell-integration",
      description: "Install shell integration to ~/.zshrc",
    },
    {
      name: "uninstall-shell-integration",
      description: "Remove shell integration from ~/.zshrc",
    },
    helpSubcommand,
  ],
  options: [
    { name: ["-v", "--version"], description: "Output the version number" },
    {
      name: "--api-key",
      description: "API key for authentication (or CURSOR_API_KEY)",
      isPersistent: true,
      args: { name: "key" },
    },
    {
      name: ["-H", "--header"],
      description: "Add a custom request header ('Name: Value')",
      isPersistent: true,
      isRepeatable: true,
      args: { name: "header" },
    },
    ...sessionOptions,
    {
      name: ["-h", "--help"],
      description: "Display help for command",
      isPersistent: true,
    },
  ],
  args: promptArg,
};

export default completionSpec;
