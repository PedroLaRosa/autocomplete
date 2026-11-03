// Claude Code v2.1.317 (npm "latest", 2026-11-02). Source: `claude --help` on
// every subcommand, plus flags/commands documented at
// https://code.claude.com/docs/en/cli-reference that `--help` doesn't list.

const modelSuggestions: Fig.Suggestion[] = [
  { name: "fable", description: "Fable model, for the hardest, longest tasks" },
  { name: "opus", description: "Latest Opus model, for complex reasoning" },
  { name: "sonnet", description: "Latest Sonnet model, for daily coding" },
  { name: "haiku", description: "Fast and efficient Haiku model" },
  { name: "best", description: "Fable where available, otherwise Opus" },
  { name: "opus[1m]", description: "Opus with a 1M token context window" },
  { name: "sonnet[1m]", description: "Sonnet with a 1M token context window" },
  { name: "opusplan", description: "Opus in plan mode, Sonnet for execution" },
  { name: "default", description: "Clear the override, use account default" },
];

const modelArg: Fig.Arg = { name: "model", suggestions: modelSuggestions };

const permissionModeArg: Fig.Arg = {
  name: "mode",
  suggestions: [
    { name: "default", description: "Prompt for permission (alias: manual)" },
    { name: "manual", description: "Prompt for permission (alias: default)" },
    { name: "acceptEdits", description: "Auto-accept file edits" },
    { name: "plan", description: "Plan mode: read-only exploration" },
    { name: "auto", description: "Classifier decides what needs approval" },
    { name: "dontAsk", description: "Deny anything not pre-approved" },
    { name: "bypassPermissions", description: "Skip all permission checks" },
  ],
};

const effortArg: Fig.Arg = {
  name: "level",
  suggestions: [
    "low",
    "medium",
    "high",
    "xhigh",
    "max",
    { name: "ultracode", description: "Request xhigh effort with ultracode" },
  ],
};

const settingSourcesArg: Fig.Arg = {
  name: "sources",
  suggestions: [
    "user,project,local",
    "user,project",
    "user",
    "project",
    "local",
  ],
};

const scopeSuggestions = ["local", "user", "project"];

const sessionIdArg: Fig.Arg = { name: "id|name" };

const helpSubcommand: Fig.Subcommand = {
  name: "help",
  description: "Display help for command",
  args: { name: "command", isOptional: true },
};

const jsonResultOption: Fig.Option = {
  name: "--json",
  description: "Print one machine-readable result line on stdout",
};

const acceptCommandOption: Fig.Option = {
  name: "--accept-command",
  description: "Accept the marketplace-declared command with this sha256",
  args: { name: "sha256" },
};

const marketplaceYesOption: Fig.Option = {
  name: ["-y", "--yes"],
  description: "Accept the displayed marketplace-declared command",
};

const pluginScopeOption = (
  values: string[],
  description = "Installation scope"
): Fig.Option => ({
  name: ["-s", "--scope"],
  description,
  args: { name: "scope", suggestions: values },
});

const runnerConnectionOptions: Fig.Option[] = [
  {
    name: "--api-url",
    description: "API base URL",
    args: { name: "url" },
  },
  {
    name: "--environment-secret-file",
    description: "Path to environment secret file",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--agent-proxy-url",
    description: "Route sessions through the agent proxy at this URL",
    args: { name: "url" },
  },
  {
    name: "--hooks-dir",
    description: "Directory of lifecycle hook scripts",
    args: { name: "path", template: "folders" },
  },
  {
    name: "--health-port",
    description: "Port for /healthz HTTP listener (0 disables)",
    args: { name: "port" },
  },
  {
    name: "--log-level",
    description: "Log level",
    args: { name: "level", suggestions: ["info", "debug"] },
  },
];

const boolArg: Fig.Arg = {
  name: "bool",
  isOptional: true,
  suggestions: ["true", "false"],
};

const completionSpec: Fig.Spec = {
  name: "claude",
  description:
    "Claude Code - starts an interactive session by default, use -p/--print for non-interactive output",
  args: { name: "prompt", description: "Your prompt", isOptional: true },
  subcommands: [
    {
      name: "agents",
      description: "Manage background agents",
      options: [
        {
          name: "--add-dir",
          description: "Additional directory to allow tool access to",
          isRepeatable: true,
          args: { name: "directory", template: "folders" },
        },
        {
          name: "--agent",
          description: "Default agent for sessions dispatched from agent view",
          args: { name: "agent" },
        },
        {
          name: "--all",
          description:
            "With --json: also include completed background sessions",
        },
        {
          name: "--allow-dangerously-skip-permissions",
          description:
            "Make bypass-permissions mode available to dispatched sessions",
        },
        {
          name: "--cwd",
          description: "Show only background sessions started under <path>",
          args: { name: "path", template: "folders" },
        },
        {
          name: "--dangerously-skip-permissions",
          description: "Alias for --permission-mode bypassPermissions",
        },
        {
          name: "--effort",
          description: "Default effort level for dispatched sessions",
          args: effortArg,
        },
        {
          name: "--json",
          description: "Print active sessions as a JSON array and exit",
        },
        {
          name: "--mcp-config",
          description:
            "MCP server configuration to apply to dispatched sessions",
          isRepeatable: true,
          args: { name: "config", template: "filepaths" },
        },
        {
          name: "--model",
          description: "Default model for dispatched sessions",
          args: modelArg,
        },
        {
          name: "--permission-mode",
          description: "Default permission mode for dispatched sessions",
          args: permissionModeArg,
        },
        {
          name: "--plugin-dir",
          description: "Load plugins from specified directory",
          isRepeatable: true,
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--restricted",
          description: "Start dispatched sessions in restricted mode",
        },
        {
          name: "--setting-sources",
          description: "Comma-separated list of setting sources to load",
          args: settingSourcesArg,
        },
        {
          name: "--settings",
          description: "Settings file or JSON string to apply",
          args: { name: "file-or-json", template: "filepaths" },
        },
        {
          name: "--strict-mcp-config",
          description:
            "Only use MCP servers from --mcp-config in dispatched sessions",
        },
      ],
    },
    {
      name: "attach",
      description: "Open a background session in this terminal",
      args: sessionIdArg,
    },
    {
      name: "auth",
      description: "Manage authentication",
      subcommands: [
        {
          name: "login",
          description: "Sign in to your Anthropic account",
          options: [
            {
              name: "--claudeai",
              description: "Use Claude subscription (default)",
            },
            {
              name: "--console",
              description: "Use Anthropic Console (API usage billing)",
            },
            {
              name: "--email",
              description: "Pre-populate email address on the login page",
              args: { name: "email" },
            },
            { name: "--sso", description: "Force SSO login flow" },
          ],
        },
        {
          name: "logout",
          description: "Log out from your Anthropic account",
        },
        {
          name: "status",
          description: "Show authentication status",
          options: [
            { name: "--json", description: "Output as JSON (default)" },
            { name: "--text", description: "Output as human-readable text" },
          ],
        },
        helpSubcommand,
      ],
    },
    {
      name: "auto-mode",
      description: "Inspect or reset auto mode configuration",
      subcommands: [
        {
          name: "config",
          description: "Print the effective auto mode config as JSON",
        },
        {
          name: "critique",
          description: "Get AI feedback on your custom auto mode rules",
          options: [
            {
              name: "--model",
              description: "Override which model is used",
              args: modelArg,
            },
          ],
        },
        {
          name: "defaults",
          description: "Print the default auto mode rules as JSON",
          options: [
            {
              name: "--label",
              description:
                "Show only rules whose label starts with this prefix",
              args: { name: "prefix" },
            },
          ],
        },
        {
          name: "reset",
          description: "Reset auto mode configuration to the shipped defaults",
          options: [
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt",
            },
          ],
        },
        helpSubcommand,
      ],
    },
    {
      name: "daemon",
      description: "Manage the background-session supervisor",
      subcommands: [
        {
          name: "run",
          description: "Run the supervisor in the foreground",
          args: { name: "json-path", isOptional: true, template: "filepaths" },
        },
        { name: "status", description: "Show daemon pid, version, uptime" },
        { name: "logs", description: "Tail the daemon log (Ctrl-C to stop)" },
        {
          name: "uninstall",
          description: "Remove the background service (launchctl/systemd)",
        },
        {
          name: "stop",
          description:
            "Shut down the supervisor and terminate background sessions",
          options: [
            {
              name: "--any",
              description: "Also stop a transient (non-service) daemon",
            },
            {
              name: "--keep-workers",
              description: "Leave detached sessions running",
            },
          ],
        },
      ],
      options: [
        {
          name: "--json-path",
          description: "Config file (default: ~/.claude/daemon.json)",
          isPersistent: true,
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--log-file",
          description: "Log file (default: ~/.claude/daemon.log)",
          isPersistent: true,
          args: { name: "path", template: "filepaths" },
        },
      ],
    },
    {
      name: "doctor",
      description: "Check the health of your Claude Code installation",
    },
    {
      name: "gateway",
      description: "Run the enterprise auth/telemetry gateway",
      options: [
        {
          name: "--config",
          description: "Path to gateway YAML config",
          args: { name: "path", template: "filepaths" },
        },
      ],
    },
    {
      name: "import",
      description:
        "Import config from another AI coding agent into Claude Code",
      args: {
        name: "source",
        description: "Which agent to import from",
        isOptional: true,
        suggestions: ["codex", "gemini", "cursor"],
      },
      options: [
        {
          name: "--dry-run",
          description: "Show what would be imported without writing anything",
        },
        {
          name: "--yes",
          description: "Skip the interactive picker",
          requiresSeparator: true,
          args: { name: "digest", isOptional: true },
        },
      ],
    },
    {
      name: "install",
      description: "Install Claude Code native build",
      args: {
        name: "target",
        description: "Version to install (stable, latest, or specific version)",
        isOptional: true,
        suggestions: ["stable", "latest"],
      },
      options: [
        {
          name: "--force",
          description: "Force installation even if already installed",
        },
      ],
    },
    {
      name: "logs",
      description: "Print a background session's recent terminal output",
      args: sessionIdArg,
    },
    {
      name: "mcp",
      description: "Configure and manage MCP servers",
      subcommands: [
        {
          name: "add",
          description: "Add an MCP server to Claude Code",
          args: [
            { name: "name" },
            { name: "commandOrUrl", template: "filepaths" },
            { name: "args", isOptional: true, isVariadic: true },
          ],
          options: [
            {
              name: "--callback-port",
              description: "Fixed port for OAuth callback",
              args: { name: "port" },
            },
            {
              name: "--client-id",
              description: "OAuth client ID for HTTP/SSE servers",
              args: { name: "clientId" },
            },
            {
              name: "--client-secret",
              description: "Prompt for OAuth client secret",
            },
            {
              name: ["-e", "--env"],
              description: "Set environment variables (e.g. -e KEY=value)",
              isRepeatable: true,
              args: { name: "env", isVariadic: true },
            },
            {
              name: ["-H", "--header"],
              description: "Set headers for HTTP/SSE servers",
              isRepeatable: true,
              args: { name: "header", isVariadic: true },
            },
            {
              name: ["-s", "--scope"],
              description: "Configuration scope (default: local)",
              args: { name: "scope", suggestions: scopeSuggestions },
            },
            {
              name: ["-t", "--transport"],
              description: "Transport type (default: stdio)",
              args: {
                name: "transport",
                suggestions: ["stdio", "sse", "http"],
              },
            },
          ],
        },
        {
          name: "add-from-claude-desktop",
          description:
            "Import MCP servers from Claude Desktop (Mac and WSL only)",
          options: [
            {
              name: ["-s", "--scope"],
              description: "Configuration scope (default: local)",
              args: { name: "scope", suggestions: scopeSuggestions },
            },
          ],
        },
        {
          name: "add-json",
          description: "Add an MCP server with a JSON string",
          args: [{ name: "name" }, { name: "json" }],
          options: [
            {
              name: "--client-secret",
              description: "Prompt for OAuth client secret",
            },
            {
              name: ["-s", "--scope"],
              description: "Configuration scope (default: local)",
              args: { name: "scope", suggestions: scopeSuggestions },
            },
          ],
        },
        {
          name: "get",
          description: "Get details about an MCP server",
          args: { name: "name" },
        },
        helpSubcommand,
        { name: "list", description: "List configured MCP servers" },
        {
          name: "login",
          description: "Authenticate with an MCP server",
          args: { name: "name" },
          options: [
            {
              name: "--no-browser",
              description:
                "Print the authorization URL instead of opening a browser",
            },
          ],
        },
        {
          name: "logout",
          description: "Clear stored OAuth credentials for an MCP server",
          args: { name: "name" },
        },
        {
          name: "remove",
          description: "Remove an MCP server",
          args: { name: "name" },
          options: [
            {
              name: ["-s", "--scope"],
              description: "Configuration scope to remove from",
              args: { name: "scope", suggestions: scopeSuggestions },
            },
          ],
        },
        {
          name: "reset-project-choices",
          description:
            "Reset all approved and rejected project-scoped (.mcp.json) servers",
        },
        {
          name: "serve",
          description: "Start the Claude Code MCP server",
          options: [
            { name: ["-d", "--debug"], description: "Enable debug mode" },
            {
              name: "--verbose",
              description: "Override verbose mode setting from config",
            },
          ],
        },
      ],
    },
    {
      name: ["plugin", "plugins"],
      description: "Manage Claude Code plugins",
      subcommands: [
        {
          name: "configure",
          description: "Show a plugin's options, or save values from stdin",
          args: { name: "plugin" },
          options: [
            { name: "--json", description: "Output as JSON" },
            {
              name: "--values-stdin",
              description: "Read option values from stdin as a JSON object",
            },
          ],
        },
        {
          name: "details",
          description:
            "Show a plugin's component inventory and projected token cost",
          args: { name: "name" },
        },
        {
          name: "disable",
          description: "Disable an enabled plugin",
          args: { name: "plugin", isOptional: true },
          options: [
            {
              name: ["-a", "--all"],
              description: "Disable all enabled plugins",
            },
            jsonResultOption,
            pluginScopeOption(["user", "project", "local"]),
          ],
        },
        {
          name: "enable",
          description: "Enable a disabled plugin",
          args: { name: "plugin" },
          options: [
            jsonResultOption,
            pluginScopeOption(["user", "project", "local"]),
          ],
        },
        {
          name: "eval",
          description:
            "Run eval cases against a plugin and report scored results",
          args: {
            name: "target",
            description: "Path, plugin name, or plugin@marketplace id",
            isOptional: true,
            template: "folders",
          },
          subcommands: [
            {
              name: "init",
              description: "Author an eval suite under the eval dir",
              args: { name: "name", isOptional: true },
              options: [
                {
                  name: "--bare",
                  description:
                    "Write a blank template instead of the interview",
                },
                {
                  name: "--eval-dir",
                  description: "Directory to write cases into",
                  args: { name: "dir", template: "folders" },
                },
                {
                  name: ["-i", "--interactive"],
                  description: "Run the authoring interview",
                },
              ],
            },
          ],
          options: [
            {
              name: "--ablation",
              description: "Run a no-plugin baseline arm and report the delta",
              args: { name: "mode", suggestions: ["none", "with-without"] },
            },
            {
              name: "--allow-real-servers",
              description: "With --mocks record: also start real MCP servers",
            },
            {
              name: "--allow-tools",
              description: "Operator grant for gated tools",
              args: { name: "tools", isVariadic: true },
            },
            {
              name: "--case",
              description: "Filter cases by name glob",
              args: { name: "glob" },
            },
            {
              name: ["-j", "--concurrency"],
              description: "Run up to <n> agent runs at once (1-8)",
              args: { name: "n" },
            },
            {
              name: "--disallow-tools",
              description: "Built-in tools to keep from Claude in every case",
              args: { name: "tools", isVariadic: true },
            },
            {
              name: "--eval-dir",
              description: "Directory below the plugin that holds eval cases",
              args: { name: "dir", template: "folders" },
            },
            {
              name: "--json",
              description:
                "Print the full run result as JSON, or write to file",
              args: { name: "path", isOptional: true, template: "filepaths" },
            },
            {
              name: "--judge-model",
              description: "Override LLM-grader model (default: haiku)",
              args: modelArg,
            },
            {
              name: "--keep-temp",
              description: "Preserve scaffold dirs for debugging",
            },
            {
              name: "--max-cost-usd",
              description: "Optional hard cost ceiling",
              args: { name: "usd" },
            },
            {
              name: "--mocks",
              description: "Mock stand-ins for MCP servers",
              args: { name: "mode", suggestions: ["record", "off"] },
            },
            {
              name: "--model",
              description: "Override model for all cases",
              args: modelArg,
            },
            {
              name: "--no-publish",
              description: "Keep the HTML report local only",
            },
            {
              name: "--no-scaffold",
              description: "Explicitly skip scaffold_script",
            },
            {
              name: "--output-dir",
              description: "Directory for aggregate-result.json",
              args: { name: "dir", template: "folders" },
            },
            {
              name: "--publish-report",
              description: "Also require publishing the report to claude.ai",
            },
            {
              name: "--report",
              description: "Write the self-contained HTML report to <path>",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--runs",
              description: "Override per-case runs",
              args: { name: "n" },
            },
            {
              name: "--scaffold",
              description: "Run each case's scaffold_script",
            },
            {
              name: "--tag",
              description: "Filter cases by tag",
              isRepeatable: true,
              args: { name: "tag", isVariadic: true },
            },
            {
              name: "--threshold",
              description: "Exit 1 if any case score is below this threshold",
              args: { name: "0..1" },
            },
            {
              name: "--trust-plugin",
              description: "Skip the first-run trust prompt (for CI)",
            },
            {
              name: "--verbose",
              description: "Log per-message trace events to the debug log",
            },
          ],
        },
        helpSubcommand,
        {
          name: ["init", "new"],
          description: "Scaffold a new plugin at ~/.claude/skills/<name>/",
          args: { name: "name" },
          options: [
            {
              name: "--author",
              description: "Author name",
              args: { name: "name" },
            },
            {
              name: "--author-email",
              description: "Author email",
              args: { name: "email" },
            },
            {
              name: "--description",
              description: "Manifest description",
              args: { name: "text" },
            },
            {
              name: ["-f", "--force"],
              description:
                "Overwrite an existing .claude-plugin/ at the target",
            },
            {
              name: "--with",
              description: "Also scaffold these components",
              args: {
                name: "components",
                isVariadic: true,
                suggestions: [
                  "skills",
                  "agents",
                  "hooks",
                  "mcp",
                  "lsp",
                  "output-style",
                  "channel",
                ],
              },
            },
          ],
        },
        {
          name: ["install", "i"],
          description: "Install a plugin from available marketplaces",
          args: {
            name: "plugin",
            description: "Plugin name, or plugin@marketplace",
          },
          options: [
            acceptCommandOption,
            {
              name: "--config",
              description: "Set a userConfig option declared by the plugin",
              isRepeatable: true,
              args: { name: "key=value" },
            },
            jsonResultOption,
            {
              name: "--marketplace",
              description: "Install from the marketplace at this source",
              args: { name: "source" },
            },
            {
              name: "--registry",
              description: "For a <package>@npm install: npm registry to use",
              args: { name: "url" },
            },
            pluginScopeOption(
              ["user", "project", "local"],
              "Installation scope (default: user)"
            ),
            marketplaceYesOption,
          ],
        },
        {
          name: "list",
          description: "List installed plugins",
          options: [
            {
              name: "--available",
              description: "Include available plugins from marketplaces",
            },
            {
              name: "--data-size",
              description: "Measure installed plugins' saved data directories",
              args: { name: "plugin", isOptional: true },
            },
            { name: "--json", description: "Output as JSON" },
          ],
        },
        {
          name: "marketplace",
          description: "Manage Claude Code marketplaces",
          subcommands: [
            {
              name: "add",
              description: "Add a marketplace from a URL, path, or GitHub repo",
              args: { name: "source", template: "folders" },
              options: [
                {
                  name: "--claudeai",
                  description: "Add a marketplace that claude.ai hosts for you",
                },
                jsonResultOption,
                {
                  name: "--scope",
                  description: "Where to declare the marketplace",
                  args: {
                    name: "scope",
                    suggestions: ["user", "project", "local"],
                  },
                },
                {
                  name: "--sparse",
                  description: "Limit checkout to specific directories",
                  args: { name: "paths", isVariadic: true },
                },
              ],
            },
            helpSubcommand,
            {
              name: "list",
              description: "List all configured marketplaces",
              options: [{ name: "--json", description: "Output as JSON" }],
            },
            {
              name: ["remove", "rm"],
              description: "Remove a configured marketplace",
              args: { name: "name" },
              options: [
                jsonResultOption,
                {
                  name: "--scope",
                  description: "Remove the declaration from a specific scope",
                  args: {
                    name: "scope",
                    suggestions: ["user", "project", "local"],
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update marketplace(s) from their source",
              args: { name: "name", isOptional: true },
              options: [jsonResultOption],
            },
          ],
        },
        {
          name: ["prune", "autoremove"],
          description: "Remove auto-installed dependencies no longer needed",
          options: [
            {
              name: "--dry-run",
              description: "List what would be removed without removing",
            },
            pluginScopeOption(
              ["user", "project", "local"],
              "Prune at scope (default: user)"
            ),
            {
              name: ["-y", "--yes"],
              description: "Skip the confirmation prompt",
            },
          ],
        },
        {
          name: "tag",
          description:
            "Create a {name}--v{version} git tag for a plugin release",
          args: { name: "path", isOptional: true, template: "folders" },
          options: [
            {
              name: "--dry-run",
              description: "Print what would be tagged without creating it",
            },
            {
              name: ["-f", "--force"],
              description: "Skip the dirty-tree and tag-exists checks",
            },
            {
              name: ["-m", "--message"],
              description: "Tag annotation message (use %s for the version)",
              args: { name: "msg" },
            },
            {
              name: "--push",
              description: "Push the tag to --remote after creating it",
            },
            {
              name: "--remote",
              description: "Remote to push to with --push (default: origin)",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "test",
          description: "Run a mod's tests",
          args: {
            name: "dir",
            description: "The mod's folder (default: the current folder)",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["uninstall", "remove"],
          description: "Uninstall an installed plugin",
          args: { name: "plugin" },
          options: [
            jsonResultOption,
            {
              name: "--keep-data",
              description: "Preserve the plugin's persistent data directory",
            },
            {
              name: "--prune",
              description: "Also remove auto-installed dependencies",
            },
            pluginScopeOption(
              ["user", "project", "local"],
              "Uninstall from scope (default: user)"
            ),
            {
              name: ["-y", "--yes"],
              description: "Skip the --prune confirmation prompt",
            },
          ],
        },
        {
          name: "update",
          description: "Update a plugin to the latest version",
          args: { name: "plugin" },
          options: [
            acceptCommandOption,
            jsonResultOption,
            pluginScopeOption(["user", "project", "local", "managed"]),
            marketplaceYesOption,
          ],
        },
        {
          name: "validate",
          description:
            "Validate a plugin or marketplace manifest, or a directory",
          args: { name: "path", template: "filepaths" },
          options: [
            {
              name: "--json",
              description: "Output the validation report as JSON",
            },
            {
              name: "--profile",
              description:
                "Also fail on checks the plugin directory would refuse",
              args: { name: "name", suggestions: ["directory"] },
            },
            { name: "--strict", description: "Treat warnings as errors" },
          ],
        },
      ],
    },
    {
      name: "purge",
      description: "Delete a project's Claude Code data from this computer",
      args: { name: "path", isOptional: true, template: "folders" },
      options: [
        { name: "--all", description: "Purge state for every project" },
        {
          name: "--dry-run",
          description: "List what would be deleted without deleting anything",
        },
        {
          name: ["-i", "--interactive"],
          description: "Prompt for each item before deleting",
        },
        { name: ["-y", "--yes"], description: "Skip confirmation prompt" },
      ],
    },
    {
      name: "remote-control",
      description:
        "Start a Remote Control server (no local interactive session)",
      options: [
        {
          name: "--name",
          description: "Name for the session (shown in claude.ai/code)",
          args: { name: "name" },
        },
        {
          name: "--remote-control-session-name-prefix",
          description: "Prefix for auto-generated session names",
          args: { name: "prefix" },
        },
        {
          name: ["-c", "--continue"],
          description:
            "Reattach to the session last recorded for this directory",
        },
        {
          name: "--session-id",
          description: "Reattach to a specific session by ID",
          args: { name: "id" },
        },
        {
          name: "--permission-mode",
          description: "Permission mode for spawned sessions",
          args: permissionModeArg,
        },
        {
          name: "--chrome",
          description: "Enable Claude in Chrome for spawned sessions",
        },
        {
          name: "--no-chrome",
          description: "Disable Claude in Chrome for spawned sessions",
        },
        {
          name: ["-d", "--debug"],
          description: "Enable debug mode, with optional category filtering",
          requiresSeparator: true,
          args: { name: "filter", isOptional: true },
        },
        {
          name: "--debug-file",
          description: "Write debug logs to file",
          args: { name: "path", template: "filepaths" },
        },
        { name: ["-v", "--verbose"], description: "Enable verbose output" },
        {
          name: "--spawn",
          description: "Spawn mode (default: same-dir)",
          args: {
            name: "mode",
            suggestions: ["same-dir", "worktree", "session"],
          },
        },
        {
          name: "--capacity",
          description: "Max concurrent sessions (default: 32)",
          args: { name: "N" },
        },
        {
          name: "--create-session-in-dir",
          description: "Pre-create a session in the current directory",
        },
        {
          name: "--no-create-session-in-dir",
          description: "Don't pre-create a session in the current directory",
        },
      ],
    },
    {
      name: "respawn",
      description:
        "Restart a background session so it runs the current version",
      args: { name: "id", isOptional: true },
      options: [
        { name: "--all", description: "Restart every background session" },
      ],
    },
    {
      name: "rm",
      description: "Delete a background session, and its worktree when safe",
      args: { name: "id" },
      options: [
        {
          name: "--discard-unpushed",
          description: "Also discard the worktree's unpushed commits",
          args: { name: "commit@worktree-id" },
        },
        {
          name: "--force-remove-worktree",
          description: "Delete the worktree directory git couldn't remove",
          args: { name: "worktree-id" },
        },
      ],
    },
    {
      name: "self-hosted-runner",
      description:
        "Host Claude Code cloud sessions on your infrastructure (self-hosted environment)",
      subcommands: [
        {
          name: "setup",
          description: "Interactive wizard to set up a self-hosted runner",
          args: { name: "args", isOptional: true, isVariadic: true },
        },
        {
          name: "doctor",
          description: "Interactive wizard to diagnose a runner deployment",
          args: { name: "args", isOptional: true, isVariadic: true },
        },
        {
          name: "orchestrator",
          description: "Spawn on-demand runners from the spawn-hints queue",
          options: [
            ...runnerConnectionOptions,
            {
              name: "--hook-concurrency",
              description: "Max spawn-runner hooks running in parallel",
              args: { name: "n" },
            },
            {
              name: "--hook-timeout",
              description: "SIGTERM the hook after <sec> seconds",
              args: { name: "sec" },
            },
            {
              name: "--expected-spawn-seconds",
              description: "P99 boot time for spawned runners",
              args: { name: "n" },
            },
            {
              name: "--min-idle",
              description: "Keep at least <n> idle slots free",
              args: { name: "n" },
            },
            {
              name: "--scm-connector-host",
              description: "GHES hostname to forward to (enables connector)",
              args: { name: "host[:port]" },
            },
            {
              name: "--scm-connector-id",
              description: "The ghe_configurations.id for this org",
              args: { name: "n" },
            },
            {
              name: "--scm-connector-provider",
              description: "Provider slug (default: ghe)",
              args: { name: "slug" },
            },
            {
              name: "--scm-connector-ca-file",
              description: "Extra CA bundle (PEM) for TLS to the GHES host",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--shutdown-drain-sec",
              description:
                "On SIGTERM, let in-flight work finish for <n> seconds",
              args: { name: "n" },
            },
          ],
        },
      ],
      options: [
        ...runnerConnectionOptions,
        {
          name: "--lock-to-account",
          description: "Lock runner to a single account at registration",
          args: { name: "id" },
        },
        {
          name: "--client-label",
          description: "Observability label sent at registration",
          args: { name: "label" },
        },
        {
          name: "--proxy-authorization-command",
          description: "Command whose stdout is the Proxy-Authorization header",
          args: { name: "shell command" },
        },
        {
          name: "--proxy-authorization-file",
          description: "File holding the Proxy-Authorization header value",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--capacity",
          description: "Max concurrent sessions (default: 1)",
          args: { name: "n" },
        },
        {
          name: "--base-dir",
          description: "Base directory for repo checkouts",
          args: { name: "path", template: "folders" },
        },
        {
          name: "--exec-path",
          description: "Binary to spawn for child sessions",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--session-stop-grace-sec",
          description: "Wait before force-killing a session's process",
          args: { name: "n" },
        },
        {
          name: "--post-session-hook-timeout-sec",
          description: "SIGTERM budget for the post-session hook",
          args: { name: "n" },
        },
        {
          name: "--checkout-hook-timeout-min",
          description: "Wall-clock budget for each checkout hook run",
          args: { name: "n" },
        },
        {
          name: "--drain-wait-sec",
          description: "On SIGTERM, wait for in-flight turns to finish",
          args: { name: "n" },
        },
        {
          name: "--drain-marker-file",
          description: "Marker file announcing a host drain",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--git-ssh-rewrite",
          description: "Rewrite https://<host>/ source URLs to git@<host>:",
          isRepeatable: true,
          args: { name: "host" },
        },
        {
          name: "--git-host-rewrite",
          description: "Rewrite https://<f>/ source URLs to https://<t>/",
          isRepeatable: true,
          args: { name: "f=t" },
        },
        {
          name: "--use-anthropic-git-proxy",
          description: "Opt this runner into Anthropic-managed git",
        },
        {
          name: "--configure-git",
          description: "Set global git identity to Claude and enable signing",
        },
        {
          name: "--push-outcome-on-release",
          description: "Push outcome branches on a non-completed session end",
        },
        {
          name: "--trust-workspace",
          description: "Seed persisted trust for each session's repo paths",
          args: boolArg,
        },
        {
          name: "--remove-session-state",
          description: "Remove a session's per-session state when it ends",
          args: boolArg,
        },
        {
          name: "--diff-finds-nested-repository",
          description: "Show changes in a repository cloned into a sub-folder",
          args: boolArg,
        },
        {
          name: "--confine-repo-settings",
          description: "Repo-committed-settings confine guard mode",
          args: { name: "mode", suggestions: ["warn", "enforce", "off"] },
        },
        {
          name: "--server-auto-mode-lists",
          description: "Which server auto mode classifier lists to apply",
          args: { name: "mode", suggestions: ["all", "no-allow", "none"] },
        },
        {
          name: "--host-config-snapshot",
          description: "Where the host config startup snapshot is held",
          args: { name: "mode", suggestions: ["disk", "memory"] },
        },
        {
          name: "--log-file",
          description: "Tee runner logs to a file in append mode",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--exit-if-unused-min",
          description: "Exit if never assigned work for N min",
          args: { name: "n" },
        },
        {
          name: "--drain-grace-sec",
          description: "Seconds to keep polling after active sessions finish",
          args: { name: "n" },
        },
        {
          name: "--retire-at",
          description: "Retire the runner at this Unix timestamp",
          args: { name: "epoch-seconds" },
        },
        {
          name: "--defer-shutdown-max-min",
          description:
            "On the first SIGTERM, stop taking work instead of draining",
          args: { name: "m" },
        },
        {
          name: "--release-idle-session-min",
          description: "Release a session slot after N min of no user input",
          args: { name: "n" },
        },
        {
          name: "--hold-idle-file",
          description: "Don't release an idle session while this file exists",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--max-hold-min",
          description: "With --hold-idle-file: release anyway after N min",
          args: { name: "n" },
        },
        {
          name: "--startup-timeout-min",
          description: "Release a session slot if the child hasn't started",
          args: { name: "n" },
        },
        {
          name: "--kill-session-after-min",
          description: "Cap a session child's wall-clock life at N min",
          args: { name: "n" },
        },
      ],
    },
    {
      name: "setup-token",
      description: "Set up a long-lived authentication token",
    },
    {
      name: ["stop", "kill"],
      description: "Stop a background session (its conversation is kept)",
      args: { name: "id" },
    },
    {
      name: "ultrareview",
      description: "Run a cloud-hosted multi-agent code review",
      args: {
        name: "target",
        description: "PR number or base branch (default: current branch)",
        isOptional: true,
      },
      options: [
        {
          name: "--json",
          description: "Print the raw bugs.json payload",
        },
        {
          name: "--no-post",
          description: "Do not post the findings to the PR (default)",
        },
        {
          name: "--post",
          description: "Post the finished review's findings to the PR",
        },
        {
          name: "--timeout",
          description: "Maximum minutes to wait for the review (default: 45)",
          args: { name: "minutes" },
        },
        {
          name: "--trust-workspace",
          description: "Trust the current folder for this run only",
        },
      ],
    },
    {
      name: ["update", "upgrade"],
      description: "Check for updates and install if available",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Display help for command",
      isPersistent: true,
    },
    {
      name: "--add-dir",
      description: "Additional directories to allow tool access to",
      args: { name: "directories", isVariadic: true, template: "folders" },
    },
    {
      name: "--advisor",
      description: "Enable the server-side advisor tool with this model",
      args: modelArg,
    },
    {
      name: "--agent",
      description: "Agent for the current session",
      args: { name: "agent" },
    },
    {
      name: "--agents",
      description: "JSON object defining custom agents (or file with --print)",
      args: { name: "json-or-file", template: "filepaths" },
    },
    {
      name: "--allow-dangerously-skip-permissions",
      description: "Enable bypassing all permission checks as an option",
    },
    {
      name: ["--allowedTools", "--allowed-tools"],
      description: 'List of tool names to allow (e.g. "Bash(git *) Edit")',
      args: { name: "tools", isVariadic: true },
    },
    {
      name: "--append-subagent-system-prompt",
      description: "Append text to every subagent's system prompt (with -p)",
      args: { name: "prompt" },
    },
    {
      name: "--append-subagent-system-prompt-file",
      description: "Append a file's text to subagent system prompts (with -p)",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--append-system-prompt",
      description: "Append a system prompt to the default system prompt",
      args: { name: "prompt" },
    },
    {
      name: "--append-system-prompt-file",
      description: "Append a file's contents to the default system prompt",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--autocompact",
      description: "Auto-compact window size (auto, or 100k-1M tokens)",
      args: {
        name: "auto|tokens",
        suggestions: ["auto", "200k", "500k", "1M"],
      },
    },
    {
      name: "--ax-screen-reader",
      description: "Render screen-reader friendly output",
    },
    {
      name: ["--bg", "--background"],
      description: "Start the session in the background and return immediately",
    },
    {
      name: "--bare",
      description:
        "Minimal mode: skip hooks, LSP, plugin sync, auto-memory and CLAUDE.md",
    },
    {
      name: "--betas",
      description:
        "Beta headers to include in API requests (API key users only)",
      args: { name: "betas", isVariadic: true },
    },
    {
      name: "--brief",
      description:
        "Enable SendUserMessage tool for agent-to-user communication",
    },
    {
      name: "--channels",
      description: "(Research preview) MCP servers to listen to for channels",
      args: { name: "plugin:name@marketplace", isVariadic: true },
    },
    { name: "--chrome", description: "Enable Claude in Chrome integration" },
    {
      name: "--cloud",
      description: "Create a cloud session, or attach to an existing one",
      args: { name: "description|session_id|url", isOptional: true },
    },
    {
      name: ["-c", "--continue"],
      description: "Continue the most recent conversation in this directory",
    },
    {
      name: "--dangerously-load-development-channels",
      description: "Enable channels not on the approved allowlist",
      args: { name: "channels", isVariadic: true },
    },
    {
      name: "--dangerously-skip-permissions",
      description: "Bypass all permission checks",
    },
    {
      name: ["-d", "--debug"],
      description: "Enable debug mode with optional category filtering",
      requiresSeparator: true,
      args: { name: "filter", isOptional: true },
    },
    {
      name: "--debug-file",
      description: "Write debug logs to a specific file path",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--desktop",
      description: "Open in the Claude Desktop app instead of the terminal",
    },
    {
      name: "--disable-slash-commands",
      description: "Disable all skills and commands",
    },
    {
      name: ["--disallowedTools", "--disallowed-tools"],
      description: 'List of tool names to deny (e.g. "Bash(git *) Edit")',
      args: { name: "tools", isVariadic: true },
    },
    {
      name: "--effort",
      description: "Effort level for the current session",
      args: effortArg,
    },
    {
      name: "--environment",
      description: "Create a cloud session on this self-hosted environment",
      args: { name: "environment_id" },
    },
    {
      name: "--exclude-dynamic-system-prompt-sections",
      description:
        "Move per-machine system prompt sections into the first user message",
    },
    {
      name: "--exec",
      description: "Run a shell command as a background job (with --bg)",
      args: { name: "command" },
    },
    {
      name: "--fallback-model",
      description: "Fallback model(s) when the default is overloaded",
      args: modelArg,
    },
    {
      name: "--file",
      description: "File resources to download at startup (file_id:path)",
      args: { name: "specs", isVariadic: true },
    },
    {
      name: "--fork-session",
      description: "When resuming, create a new session ID",
    },
    {
      name: "--forward-subagent-text",
      description: "Forward subagent text and thinking blocks",
    },
    {
      name: "--from-pr",
      description: "Resume a session linked to a PR by number/URL",
      args: { name: "value", isOptional: true },
    },
    {
      name: "--ide",
      description: "Automatically connect to IDE on startup",
    },
    {
      name: "--include-hook-events",
      description: "Include all hook lifecycle events in the output stream",
    },
    {
      name: "--include-partial-messages",
      description: "Include partial message chunks as they arrive",
    },
    {
      name: "--init",
      description: "Run Setup hooks with the init matcher (print mode only)",
    },
    {
      name: "--init-only",
      description: "Run Setup and SessionStart hooks, then exit",
    },
    {
      name: "--input-format",
      description: "Input format (only works with --print)",
      args: { name: "format", suggestions: ["text", "stream-json"] },
    },
    {
      name: "--json-schema",
      description:
        "JSON Schema for structured output validation (with --print)",
      args: { name: "schema" },
    },
    {
      name: "--maintenance",
      description: "Run Setup hooks with the maintenance matcher (print mode)",
    },
    {
      name: "--max-budget-usd",
      description: "Maximum dollar amount to spend on API calls (with --print)",
      args: { name: "amount" },
    },
    {
      name: "--max-turns",
      description: "Limit the number of agentic turns (print mode only)",
      args: { name: "turns" },
    },
    {
      name: "--mcp-config",
      description: "Load MCP servers from JSON files or strings",
      args: { name: "configs", isVariadic: true, template: "filepaths" },
    },
    {
      name: "--model",
      description: "Model for the current session",
      args: modelArg,
    },
    {
      name: ["-n", "--name"],
      description: "Set a display name for this session",
      args: { name: "name" },
    },
    {
      name: "--no-chrome",
      description: "Disable Claude in Chrome integration",
    },
    {
      name: "--no-session-persistence",
      description: "Disable session persistence (only works with --print)",
    },
    {
      name: "--output-format",
      description: "Output format (only works with --print)",
      args: { name: "format", suggestions: ["text", "json", "stream-json"] },
    },
    {
      name: "--permission-mode",
      description: "Permission mode to use for the session",
      args: permissionModeArg,
    },
    {
      name: "--permission-prompt-tool",
      description: "MCP tool to handle permission prompts in print mode",
      args: { name: "tool" },
    },
    {
      name: "--permission-prompts",
      description: "Who answers permission prompts with --print",
      args: { name: "target", suggestions: ["host", "none"] },
    },
    {
      name: "--plugin-dir",
      description: "Load a plugin from a directory or .zip for this session",
      isRepeatable: true,
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--plugin-url",
      description: "Fetch a plugin .zip from a URL for this session",
      isRepeatable: true,
      args: { name: "url" },
    },
    {
      name: ["-p", "--print"],
      description: "Print response and exit (useful for pipes)",
    },
    {
      name: "--prompt-suggestions",
      description: "Enable prompt suggestions",
      args: {
        name: "value",
        isOptional: true,
        suggestions: ["true", "false", "1", "0", "yes", "no", "on", "off"],
      },
    },
    {
      name: "--ref",
      description: "With --environment, base the checkout on this ref",
      args: { name: "branch" },
    },
    {
      name: "--remote",
      description: "Deprecated alias for --cloud",
      deprecated: { description: "Use --cloud" },
      args: { name: "description|session_id|url", isOptional: true },
    },
    {
      name: ["--remote-control", "--rc"],
      description: "Start an interactive session with Remote Control enabled",
      args: { name: "name", isOptional: true },
    },
    {
      name: "--remote-control-session-name-prefix",
      description: "Prefix for auto-generated Remote Control session names",
      args: { name: "prefix" },
    },
    {
      name: "--replay-user-messages",
      description: "Re-emit user messages from stdin back on stdout",
    },
    {
      name: "--restricted",
      description:
        "Restricted mode: remove code-running tools and user settings",
    },
    {
      name: ["-r", "--resume"],
      description: "Resume a conversation by session ID or name, or pick one",
      args: { name: "value", isOptional: true },
    },
    {
      name: "--safe-mode",
      description: "Start with all customizations disabled",
    },
    {
      name: "--session-id",
      description: "Use a specific session ID (must be a valid UUID)",
      args: { name: "uuid" },
    },
    {
      name: "--setting-sources",
      description: "Comma-separated list of setting sources to load",
      args: settingSourcesArg,
    },
    {
      name: "--settings",
      description: "Path to a settings JSON file or a JSON string",
      args: { name: "file-or-json", template: "filepaths" },
    },
    {
      name: "--strict-mcp-config",
      description: "Only use MCP servers from --mcp-config",
    },
    {
      name: "--system-prompt",
      description: "System prompt to use for the session",
      args: { name: "prompt" },
    },
    {
      name: "--system-prompt-file",
      description: "Load the system prompt from a file",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--system-prompt-snapshot",
      description:
        "Record the system prompt once per conversation and reuse it",
      args: { name: "on|off", suggestions: ["on", "off"] },
    },
    {
      name: "--teammate-mode",
      description: "How agent team teammates display",
      args: {
        name: "mode",
        suggestions: ["in-process", "auto", "tmux", "iterm2"],
      },
    },
    {
      name: "--teleport",
      description: "Resume a teleport session",
      args: { name: "session", isOptional: true },
    },
    {
      name: "--tmux",
      description:
        "Create a tmux session for the worktree (requires --worktree)",
      requiresSeparator: true,
      args: { name: "mode", isOptional: true, suggestions: ["classic"] },
    },
    {
      name: "--tools",
      description: "List of available tools from the built-in set",
      args: { name: "tools", isVariadic: true, suggestions: ["default", '""'] },
    },
    {
      name: "--verbose",
      description: "Override verbose mode setting from config",
    },
    { name: ["-v", "--version"], description: "Output the version number" },
    {
      name: ["-w", "--worktree"],
      description: "Create a new git worktree for this session",
      args: { name: "name", isOptional: true },
    },
  ],
};

export default completionSpec;
