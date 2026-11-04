import { valueList } from "@tabsmith/autocomplete-generators";

// Source: OpenCode 1 (anomalyco/opencode, npm `opencode-ai`) v1.19.5,
// packages/opencode/src/index.ts and packages/opencode/src/cli/cmd/
// ponytail: OpenCode 2 (`@opencode/cli`, opencode.ai/v2) has a different CLI; give it its own spec when needed

const builtinAgents: Fig.Suggestion[] = [
  { name: "build", description: "Default agent with all tools enabled" },
  { name: "plan", description: "Read-only agent for planning and analysis" },
];

const networkOptions: Fig.Option[] = [
  {
    name: "--port",
    description: "Port to listen on",
    args: { name: "port", default: "0" },
  },
  {
    name: "--hostname",
    description: "Hostname to listen on",
    args: { name: "hostname", default: "127.0.0.1" },
  },
  {
    name: "--mdns",
    description: "Enable mDNS service discovery (defaults hostname to 0.0.0.0)",
  },
  {
    name: "--mdns-domain",
    description: "Custom domain name for mDNS service",
    args: { name: "domain", default: "opencode.local" },
  },
  {
    name: "--cors",
    description: "Additional domains to allow for CORS",
    isRepeatable: true,
    args: { name: "domain" },
  },
];

const sessionOptions: Fig.Option[] = [
  {
    name: ["-c", "--continue"],
    description: "Continue the last session",
  },
  {
    name: ["-s", "--session"],
    description: "Session id to continue",
    args: { name: "sessionID" },
  },
  {
    name: "--fork",
    description:
      "Fork the session when continuing (use with --continue or --session)",
  },
];

const miniOptions: Fig.Option[] = [
  {
    name: "--mini",
    description: "Start the minimal interactive interface",
  },
  {
    name: "--no-replay",
    description:
      "Disable mini session history replay on resume and after resize",
  },
  {
    name: "--replay-limit",
    description: "Cap visible mini replay to the newest N messages",
    args: { name: "N" },
  },
];

const basicAuthOptions: Fig.Option[] = [
  {
    name: ["-p", "--password"],
    description: "Basic auth password (defaults to OPENCODE_SERVER_PASSWORD)",
    args: { name: "password" },
  },
  {
    name: ["-u", "--username"],
    description:
      "Basic auth username (defaults to OPENCODE_SERVER_USERNAME or 'opencode')",
    args: { name: "username" },
  },
];

const modelOption: Fig.Option = {
  name: ["-m", "--model"],
  description: "Model to use in the format of provider/model",
  args: { name: "provider/model" },
};

const agentOption: Fig.Option = {
  name: "--agent",
  description: "Agent to use",
  args: { name: "agent", suggestions: builtinAgents },
};

const autoOption: Fig.Option = {
  name: "--auto",
  description:
    "Auto-approve permissions that are not explicitly denied (dangerous!)",
  isDangerous: true,
};

const mcpServerArg = (isOptional: boolean): Fig.Arg => ({
  name: "name",
  description: "Name of the MCP server",
  isOptional,
});

const completionSpec: Fig.Spec = {
  name: "opencode",
  description: "The open source AI coding agent",
  args: {
    name: "project",
    description: "Path to start opencode in",
    isOptional: true,
    template: "folders",
  },
  subcommands: [
    {
      name: "completion",
      description: "Generate shell completion script",
    },
    {
      name: "acp",
      description: "Start ACP (Agent Client Protocol) server",
      options: [
        ...networkOptions,
        {
          name: "--cwd",
          description: "Working directory",
          args: { name: "dir", template: "folders" },
        },
      ],
    },
    {
      name: "mcp",
      description: "Manage MCP (Model Context Protocol) servers",
      subcommands: [
        {
          name: "add",
          description: "Add an MCP server",
          args: mcpServerArg(true),
          options: [
            {
              name: "--url",
              description: "URL for a remote MCP server",
              args: { name: "url" },
            },
            {
              name: "--env",
              description: "Environment variable for a local MCP server",
              isRepeatable: true,
              args: { name: "KEY=VALUE" },
            },
            {
              name: "--header",
              description: "HTTP header for a remote MCP server",
              isRepeatable: true,
              args: { name: "KEY=VALUE" },
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List MCP servers and their status",
        },
        {
          name: "auth",
          description: "Authenticate with an OAuth-enabled MCP server",
          args: mcpServerArg(true),
          subcommands: [
            {
              name: ["list", "ls"],
              description:
                "List OAuth-capable MCP servers and their auth status",
            },
          ],
        },
        {
          name: "logout",
          description: "Remove OAuth credentials for an MCP server",
          args: mcpServerArg(true),
        },
        {
          name: "debug",
          description: "Debug OAuth connection for an MCP server",
          args: mcpServerArg(false),
        },
      ],
    },
    {
      name: "attach",
      description: "Attach to a running opencode server",
      args: {
        name: "url",
        description: "Server URL, e.g. http://localhost:4096",
      },
      options: [
        {
          name: "--dir",
          description: "Directory to run in",
          args: { name: "dir", template: "folders" },
        },
        ...sessionOptions,
        ...basicAuthOptions,
        ...miniOptions,
      ],
    },
    {
      name: "run",
      description: "Run opencode with a message",
      args: {
        name: "message",
        description: "Message to send",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        {
          name: "--command",
          description: "The command to run, use message for args",
          args: { name: "command" },
        },
        ...sessionOptions,
        modelOption,
        agentOption,
        {
          name: "--format",
          description: "Output format: formatted text or raw JSON events",
          args: {
            name: "format",
            default: "default",
            suggestions: [
              { name: "default", description: "Formatted output" },
              { name: "json", description: "Raw JSON events" },
            ],
          },
        },
        {
          name: ["-f", "--file"],
          description: "File(s) to attach to message",
          isRepeatable: true,
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--title",
          description:
            "Title for the session (uses truncated prompt if no value provided)",
          args: { name: "title", isOptional: true },
        },
        {
          name: "--attach",
          description: "Attach to a running opencode server",
          args: { name: "url", description: "E.g. http://localhost:4096" },
        },
        ...basicAuthOptions,
        {
          name: "--dir",
          description:
            "Directory to run in, path on remote server if attaching",
          args: { name: "dir", template: "folders" },
        },
        {
          name: "--port",
          description:
            "Port for the local server (defaults to random port if no value provided)",
          args: { name: "port", isOptional: true },
        },
        {
          name: "--variant",
          description:
            "Model variant (provider-specific reasoning effort, e.g. high, max, minimal)",
          args: { name: "variant" },
        },
        {
          name: "--thinking",
          description: "Show thinking blocks",
        },
        {
          name: ["-i", "--interactive"],
          description: "Run in direct interactive split-footer mode",
        },
        autoOption,
      ],
    },
    {
      name: "debug",
      description: "Debugging and troubleshooting tools",
      subcommands: [
        { name: "config", description: "Show resolved configuration" },
        {
          name: "lsp",
          description: "LSP debugging utilities",
          subcommands: [
            {
              name: "diagnostics",
              description: "Get diagnostics for a file",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "symbols",
              description: "Search workspace symbols",
              args: { name: "query" },
            },
            {
              name: "document-symbols",
              description: "Get symbols from a document",
              args: { name: "uri" },
            },
          ],
        },
        {
          name: "rg",
          description: "Ripgrep debugging utilities",
          subcommands: [
            {
              name: "files",
              description: "List files using ripgrep",
              options: [
                {
                  name: "--query",
                  description: "Filter files by query",
                  args: { name: "query" },
                },
                {
                  name: "--glob",
                  description: "Glob pattern to match files",
                  args: { name: "glob" },
                },
                {
                  name: "--limit",
                  description: "Limit number of results",
                  args: { name: "limit" },
                },
              ],
            },
            {
              name: "search",
              description: "Search file contents using ripgrep",
              args: { name: "pattern", description: "Search pattern" },
              options: [
                {
                  name: "--glob",
                  description: "File glob patterns",
                  isRepeatable: true,
                  args: { name: "glob" },
                },
                {
                  name: "--limit",
                  description: "Limit number of results",
                  args: { name: "limit" },
                },
              ],
            },
          ],
        },
        {
          name: "file",
          description: "File system debugging utilities",
          subcommands: [
            {
              name: "read",
              description: "Read file contents as JSON",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "list",
              description: "List files in a directory",
              args: { name: "path", template: "folders" },
            },
            {
              name: "search",
              description: "Search files by query",
              args: { name: "query" },
            },
          ],
        },
        { name: "scrap", description: "List all known projects" },
        { name: "skill", description: "List all available skills" },
        {
          name: "snapshot",
          description: "Snapshot debugging utilities",
          subcommands: [
            { name: "track", description: "Track current snapshot state" },
            {
              name: "patch",
              description: "Show patch for a snapshot hash",
              args: { name: "hash" },
            },
            {
              name: "diff",
              description: "Show diff for a snapshot hash",
              args: { name: "hash" },
            },
          ],
        },
        { name: "startup", description: "Print startup timing" },
        {
          name: "agent",
          description: "Show agent configuration details",
          args: {
            name: "name",
            description: "Agent name",
            suggestions: [
              ...builtinAgents,
              { name: "general", description: "General-purpose subagent" },
              { name: "explore", description: "Codebase exploration subagent" },
            ],
          },
          options: [
            {
              name: "--tool",
              description: "Tool id to execute",
              args: { name: "tool" },
            },
            {
              name: "--params",
              description: "Tool params as JSON or a JS object literal",
              args: { name: "params" },
            },
          ],
        },
        { name: "v2", description: "Debug v2 catalog and built-in plugins" },
        { name: "info", description: "Show debug information" },
        {
          name: "paths",
          description: "Show global paths (data, config, cache, state)",
        },
        { name: "wait", description: "Wait indefinitely (for debugging)" },
      ],
    },
    {
      name: ["providers", "auth"],
      description: "Manage AI providers and credentials",
      subcommands: [
        {
          name: ["list", "ls"],
          description: "List providers and credentials",
        },
        {
          name: "login",
          description: "Log in to a provider",
          args: {
            name: "url",
            description: "Opencode auth provider",
            isOptional: true,
          },
          options: [
            {
              name: ["-p", "--provider"],
              description:
                "Provider id or name to log in to (skips provider selection)",
              args: { name: "provider" },
            },
            {
              name: ["-m", "--method"],
              description: "Login method label (skips method selection)",
              args: { name: "method" },
            },
          ],
        },
        {
          name: "logout",
          description: "Log out from a configured provider",
          args: {
            name: "provider",
            description: "Provider id or name to log out from",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "agent",
      description: "Manage agents",
      subcommands: [
        {
          name: "create",
          description: "Create a new agent",
          options: [
            {
              name: "--path",
              description: "Directory path to generate the agent file",
              args: { name: "path", template: "folders" },
            },
            {
              name: "--description",
              description: "What the agent should do",
              args: { name: "description" },
            },
            {
              name: "--mode",
              description: "Agent mode",
              args: {
                name: "mode",
                suggestions: ["all", "primary", "subagent"],
              },
            },
            {
              name: ["--permissions", "--tools"],
              description:
                "Comma-separated list of permissions to allow (default: all)",
              args: {
                name: "permissions",
                generators: valueList({
                  values: [
                    "bash",
                    "read",
                    "edit",
                    "glob",
                    "grep",
                    "webfetch",
                    "task",
                    "todowrite",
                    "websearch",
                    "lsp",
                    "skill",
                  ],
                }),
              },
            },
            modelOption,
          ],
        },
        { name: "list", description: "List all available agents" },
      ],
    },
    {
      name: "upgrade",
      description: "Upgrade opencode to the latest or a specific version",
      args: {
        name: "target",
        description: "Version to upgrade to, e.g. '0.1.48' or 'v0.1.48'",
        isOptional: true,
      },
      options: [
        {
          name: ["-m", "--method"],
          description: "Installation method to use",
          args: {
            name: "method",
            suggestions: [
              "curl",
              "npm",
              "pnpm",
              "bun",
              "brew",
              "choco",
              "scoop",
            ],
          },
        },
        {
          name: "--major",
          description: "Upgrade to OpenCode 2 and remove OpenCode 1",
          isDangerous: true,
        },
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall opencode and remove all related files",
      options: [
        {
          name: ["-c", "--keep-config"],
          description: "Keep configuration files",
        },
        {
          name: ["-d", "--keep-data"],
          description: "Keep session data and snapshots",
        },
        {
          name: "--dry-run",
          description: "Show what would be removed without removing",
        },
        {
          name: ["-f", "--force"],
          description: "Skip confirmation prompts",
          isDangerous: true,
        },
      ],
    },
    {
      name: "serve",
      description: "Starts a headless opencode server",
      options: networkOptions,
    },
    {
      name: "web",
      description: "Start opencode server and open web interface",
      options: networkOptions,
    },
    {
      name: "models",
      description: "List all available models",
      args: {
        name: "provider",
        description: "Provider ID to filter models by",
        isOptional: true,
      },
      options: [
        {
          name: "--verbose",
          description:
            "Use more verbose model output (includes metadata like costs)",
        },
        {
          name: "--refresh",
          description: "Refresh the models cache from models.dev",
        },
      ],
    },
    {
      name: "stats",
      description: "Show token usage and cost statistics",
      options: [
        {
          name: "--days",
          description: "Show stats for the last N days (default: all time)",
          args: { name: "N" },
        },
        {
          name: "--tools",
          description: "Number of tools to show (default: all)",
          args: { name: "N" },
        },
        {
          name: "--models",
          description:
            "Show model statistics. Pass a number to show top N, otherwise shows all",
          args: { name: "N", isOptional: true },
        },
        {
          name: "--project",
          description:
            "Filter by project (default: all projects, empty string: current project)",
          args: { name: "project" },
        },
      ],
    },
    {
      name: "export",
      description: "Export session data as JSON",
      args: {
        name: "sessionID",
        description: "Session id to export",
        isOptional: true,
      },
      options: [
        {
          name: "--sanitize",
          description: "Redact sensitive transcript and file data",
        },
      ],
    },
    {
      name: "import",
      description: "Import session data from JSON file",
      args: {
        name: "file",
        description: "Path to JSON file",
        template: "filepaths",
      },
    },
    {
      name: "github",
      description: "Manage GitHub agent",
      subcommands: [
        { name: "install", description: "Install the GitHub agent" },
        {
          name: "run",
          description: "Run the GitHub agent",
          options: [
            {
              name: "--event",
              description: "GitHub mock event to run the agent for",
              args: { name: "event" },
            },
            {
              name: "--token",
              description: "GitHub personal access token (github_pat_...)",
              args: { name: "token" },
            },
          ],
        },
      ],
    },
    {
      name: "pr",
      description: "Fetch and checkout a GitHub PR branch, then run opencode",
      args: { name: "number", description: "PR number to checkout" },
    },
    {
      name: "session",
      description: "Manage sessions",
      subcommands: [
        {
          name: "list",
          description: "List sessions",
          options: [
            {
              name: ["-n", "--max-count"],
              description: "Limit to N most recent sessions",
              args: { name: "N" },
            },
            {
              name: "--format",
              description: "Output format",
              args: {
                name: "format",
                default: "table",
                suggestions: ["table", "json"],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a session",
          args: { name: "sessionID", description: "Session ID to delete" },
          isDangerous: true,
        },
      ],
    },
    {
      name: ["plugin", "plug"],
      description: "Install plugin and update config",
      args: { name: "module", description: "Npm module name" },
      options: [
        {
          name: ["-g", "--global"],
          description: "Install in global config",
        },
        {
          name: ["-f", "--force"],
          description: "Replace existing plugin version",
        },
      ],
    },
    {
      name: "db",
      description:
        "Open an interactive sqlite3 shell or run a query (database tools)",
      args: {
        name: "query",
        description: "SQL query to execute",
        isOptional: true,
      },
      options: [
        {
          name: "--format",
          description: "Output format",
          args: {
            name: "format",
            default: "tsv",
            suggestions: ["json", "tsv"],
          },
        },
      ],
      subcommands: [{ name: "path", description: "Print the database path" }],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help",
      isPersistent: true,
    },
    {
      name: ["-v", "--version"],
      description: "Show version number",
      isPersistent: true,
    },
    {
      name: "--print-logs",
      description: "Print logs to stderr",
      isPersistent: true,
    },
    {
      name: "--log-level",
      description: "Log level",
      isPersistent: true,
      args: {
        name: "level",
        suggestions: ["DEBUG", "INFO", "WARN", "ERROR"],
      },
    },
    {
      name: "--pure",
      description: "Run without external plugins",
      isPersistent: true,
    },
    ...networkOptions,
    modelOption,
    ...sessionOptions,
    {
      name: "--prompt",
      description: "Prompt to use",
      args: { name: "prompt" },
    },
    agentOption,
    autoOption,
    ...miniOptions,
  ],
};

export default completionSpec;
