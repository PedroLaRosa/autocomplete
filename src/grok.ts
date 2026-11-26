// Grok Build v1.0.92 (npm @xai-official/grok "latest", 2026-11-25). Source:
// https://docs.x.ai/build/ CLI reference, headless scripting, MCP, sessions,
// worktrees, sandbox, permissions, terminal-support and enterprise pages.
// Not checked against `grok --help`: `plugin` and `setup` args are undocumented.

const json = (description = "Output as JSON"): Fig.Option => ({
  name: "--json",
  description,
});

const claudeAlias = (name: string, arg?: string): Fig.Option => ({
  name,
  description: "Claude Code compatibility alias",
  args: arg ? { name: arg } : undefined,
  hidden: true,
});

const completionSpec: Fig.Spec = {
  name: "grok",
  description: "Grok Build, xAI's coding agent",
  args: { name: "prompt", description: "Initial prompt", isOptional: true },
  subcommands: [
    {
      name: "login",
      description: "Sign in to Grok",
      options: [
        {
          name: "--device-auth",
          description:
            "Use device-code sign-in for headless or remote machines",
        },
      ],
    },
    { name: "logout", description: "Sign out" },
    {
      name: "inspect",
      description:
        "Show the rules, skills, plugins, hooks and MCP servers found for the current directory",
      options: [json()],
    },
    { name: "models", description: "List available models" },
    {
      name: "mcp",
      description: "Manage MCP servers",
      subcommands: [
        { name: "list", description: "List MCP servers", options: [json()] },
        {
          name: "add",
          description:
            "Add an MCP server (stdio: <name> -- <command> [args...]; remote: --transport http <name> <url>)",
          args: [
            { name: "name" },
            { name: "url or command", isOptional: true, isCommand: true },
          ],
          options: [
            {
              name: "--transport",
              description: "Transport for a remote server",
              args: { name: "transport", suggestions: ["http"] },
            },
            {
              name: "--header",
              description: "Static header sent to a remote server",
              args: { name: "Name: value" },
              isRepeatable: true,
            },
            {
              name: "--scope",
              description:
                "Where to save the server (project: .grok/config.toml)",
              args: { name: "scope", suggestions: ["project"] },
            },
          ],
        },
        {
          name: "remove",
          description: "Remove an MCP server",
          args: { name: "name" },
        },
        {
          name: "doctor",
          description: "Diagnose MCP servers",
          args: { name: "name", isOptional: true },
          options: [json()],
        },
      ],
    },
    {
      name: "plugin",
      description: "Manage plugins",
      subcommands: [
        { name: "list", description: "List plugins" },
        { name: "install", description: "Install a plugin" },
        { name: "uninstall", description: "Uninstall a plugin" },
        { name: "update", description: "Update plugins" },
        { name: "enable", description: "Enable a plugin" },
        { name: "disable", description: "Disable a plugin" },
        { name: "details", description: "Show plugin details" },
        { name: "validate", description: "Validate a plugin" },
        {
          name: "marketplace",
          description: "Manage plugin marketplaces",
          subcommands: [
            { name: "list", description: "List marketplaces" },
            { name: "add", description: "Add a marketplace" },
            { name: "remove", description: "Remove a marketplace" },
            { name: "update", description: "Update marketplaces" },
          ],
        },
      ],
    },
    {
      name: "sessions",
      description: "Manage saved sessions",
      subcommands: [
        {
          name: "list",
          description: "List recent sessions for the current directory",
        },
        {
          name: "search",
          description: "Search sessions",
          args: { name: "query" },
        },
        {
          name: "delete",
          description: "Permanently delete a session",
          args: { name: "id" },
        },
      ],
    },
    {
      name: "export",
      description: "Export a session transcript as Markdown",
      args: [
        { name: "id" },
        { name: "file", template: "filepaths", isOptional: true },
      ],
      options: [
        {
          name: "--clipboard",
          description: "Copy the transcript to the clipboard instead",
        },
      ],
    },
    {
      name: "import",
      description: "Import sessions from Claude Code",
      args: { name: "targets", isOptional: true, isVariadic: true },
    },
    {
      name: "memory",
      description: "Manage cross-session memory",
      subcommands: [
        {
          name: "clear",
          description: "Clear memory files",
          options: [
            {
              name: "--workspace",
              description: "Clear this workspace's memory",
              exclusiveOn: ["--global", "--all"],
            },
            {
              name: "--global",
              description: "Clear global memory",
              exclusiveOn: ["--workspace", "--all"],
            },
            {
              name: "--all",
              description: "Clear all memory",
              exclusiveOn: ["--workspace", "--global"],
            },
          ],
        },
      ],
    },
    {
      name: "worktree",
      description: "Manage session worktrees",
      subcommands: [
        { name: "list", description: "List worktrees" },
        {
          name: "show",
          description: "Show a worktree",
          args: { name: "id" },
        },
        {
          name: "rm",
          description: "Remove worktrees",
          args: { name: "ids", isVariadic: true },
          options: [{ name: "--dry-run", description: "Preview the removal" }],
        },
        {
          name: "gc",
          description: "Remove worktrees whose directory is gone",
          options: [
            {
              name: "--max-age",
              description: "Also expire idle worktrees older than this",
              args: { name: "duration", suggestions: ["7d"] },
            },
          ],
        },
      ],
    },
    { name: "dashboard", description: "Open the Agent Dashboard" },
    {
      name: "agent",
      description: "Run Grok as an agent for another client",
      subcommands: [
        {
          name: "stdio",
          description: "Run as an ACP agent over stdin/stdout (JSON-RPC)",
        },
      ],
    },
    {
      name: "wrap",
      description:
        "Run a command in a local PTY that forwards OSC 52 clipboard writes (experimental)",
      args: { name: "command", isCommand: true },
    },
    {
      name: "update",
      description: "Update Grok",
      options: [
        { name: "--check", description: "Only check for an update" },
        {
          name: "--version",
          description: "Install a specific version",
          args: { name: "version" },
        },
        {
          name: "--alpha",
          description: "Use the alpha channel",
          exclusiveOn: ["--stable"],
        },
        {
          name: "--stable",
          description: "Use the stable channel",
          exclusiveOn: ["--alpha"],
        },
      ],
    },
    { name: "version", description: "Show version information" },
    {
      name: "completions",
      description: "Generate shell completions",
      args: { name: "shell" },
    },
    { name: "setup", description: "Fetch and install managed configuration" },
  ],
  options: [
    {
      name: "--cwd",
      description: "Working directory",
      args: { name: "path", template: "folders" },
    },
    {
      name: ["-r", "--resume"],
      description: "Resume a session by ID, or the most recent one",
      args: { name: "id", isOptional: true },
    },
    {
      name: ["-c", "--continue"],
      description: "Continue the most recent session for the current directory",
    },
    {
      name: ["-s", "--session-id"],
      description: "UUID for a new session",
      args: { name: "uuid" },
    },
    {
      name: "--fork-session",
      description: "When resuming, fork into a new session ID",
    },
    {
      name: ["-w", "--worktree"],
      description: "Start the session in a new git worktree",
      args: { name: "name", isOptional: true },
      requiresSeparator: true,
    },
    {
      name: "--ref",
      description: "Branch, tag or commit to base the worktree on",
      args: { name: "ref" },
      dependsOn: ["-w", "--worktree"],
    },
    {
      name: ["-m", "--model"],
      description: "Model ID (see `grok models`)",
      args: { name: "model" },
    },
    {
      name: "--effort",
      description: "Reasoning effort",
      args: { name: "level" },
    },
    {
      name: ["-p", "--single"],
      description: "Send one prompt and exit (headless)",
      args: { name: "prompt" },
    },
    {
      name: "--output-format",
      description: "Headless output format",
      args: {
        name: "format",
        suggestions: ["plain", "json", "streaming-json"],
      },
      dependsOn: ["-p", "--single"],
    },
    {
      name: "--no-alt-screen",
      description: "Run inline instead of the fullscreen TUI",
    },
    {
      name: "--no-auto-update",
      description: "Skip background update checks",
    },
    {
      name: ["--always-approve", "--yolo"],
      description: "Auto-approve all tool executions",
    },
    {
      name: "--permission-mode",
      description: "Permission mode",
      args: {
        name: "mode",
        suggestions: ["acceptEdits", "dontAsk", "bypassPermissions"],
      },
    },
    {
      name: "--allow",
      description: "Allow rule, e.g. 'Bash(git *)' or 'Read(src/**)'",
      args: { name: "rule" },
      isRepeatable: true,
    },
    {
      name: "--deny",
      description: "Deny rule, e.g. 'Bash(rm -rf *)'; deny wins over allow",
      args: { name: "rule" },
      isRepeatable: true,
    },
    {
      name: "--sandbox",
      description: "Sandbox profile (built-in or a custom profile name)",
      args: {
        name: "profile",
        suggestions: ["off", "workspace", "devbox", "read-only", "strict"],
      },
    },
    {
      name: "--oauth",
      description: "Use OAuth when the welcome screen starts authentication",
    },
    {
      name: "--rules",
      description: "Extra rules appended to the system prompt",
      args: { name: "text" },
    },
    {
      name: "--system-prompt-override",
      description: "Replace the system prompt entirely",
      args: { name: "text" },
    },
    {
      name: "--tools",
      description: "Built-in tools to allow",
      args: { name: "list" },
    },
    {
      name: "--disallowed-tools",
      description: "Built-in tools to remove",
      args: { name: "list" },
    },
    {
      name: "--max-turns",
      description: "Maximum number of agent turns",
      args: { name: "n" },
    },
    {
      name: "--plugin-dir",
      description: "Extra plugin directory",
      args: { name: "path", template: "folders" },
    },
    { name: "--no-plan", description: "Disable plan mode for this session" },
    { name: "--no-subagents", description: "Disable subagents" },
    { name: "--no-memory", description: "Disable memory" },
    { name: "--disable-web-search", description: "Disable web search" },
    {
      name: "--experimental-memory",
      description: "Enable cross-session memory",
    },
    claudeAlias("--allowedTools", "tools"),
    claudeAlias("--disallowedTools", "tools"),
    claudeAlias("--append-system-prompt", "text"),
    claudeAlias("--system-prompt", "text"),
    claudeAlias("--dangerously-skip-permissions"),
    {
      name: ["-h", "--help"],
      description: "Show help",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
