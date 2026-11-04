import { valueList } from "@tabsmith/autocomplete-generators";

// Source: earendil-works/pi (formerly badlogic/pi-mono) v1.5.0,
// packages/coding-agent/src/{cli/args.ts,cli/auth-command.ts,package-manager-cli.ts,extensions/mcp/cli.ts}

const providers = [
  "amazon-bedrock",
  "ant-ling",
  "anthropic",
  "azure",
  "baseten",
  "cerebras",
  "cloudflare-ai-gateway",
  "cloudflare-workers-ai",
  "deepseek",
  "fireworks",
  "github-copilot",
  "google",
  "google-vertex",
  "groq",
  "huggingface",
  "kimi-coding",
  "meta",
  "minimax",
  "minimax-cn",
  "mistral",
  "moonshotai",
  "moonshotai-cn",
  "nvidia",
  "openai",
  "openai-codex",
  "opencode",
  "opencode-go",
  "openrouter",
  "qwen-token-plan",
  "qwen-token-plan-cn",
  "qwen-token-plan-individual",
  "radius",
  "together",
  "typesafe",
  "vercel-ai-gateway",
  "xai",
  "xiaomi",
  "xiaomi-token-plan-ams",
  "xiaomi-token-plan-cn",
  "xiaomi-token-plan-sgp",
  "zai",
  "zai-coding-cn",
];

const tools = [
  { name: "read", description: "Read file contents" },
  { name: "bash", description: "Execute bash commands" },
  { name: "powershell", description: "Execute PowerShell commands on Windows" },
  { name: "edit", description: "Edit files with find/replace" },
  { name: "write", description: "Write files (creates/overwrites)" },
  { name: "grep", description: "Search file contents (off by default)" },
  { name: "find", description: "Find files by glob pattern (off by default)" },
  { name: "ls", description: "List directory contents (off by default)" },
  { name: "codemode", description: "Codemode tool (built-in extension)" },
];

const helpOption: Fig.Option = {
  name: ["-h", "--help"],
  description: "Show help for this command",
};

const localOption: Fig.Option = {
  name: ["-l", "--local"],
  description: "Use project settings (.pi/) instead of global settings",
};

const approveOptions: Fig.Option[] = [
  {
    name: ["-a", "--approve"],
    description: "Trust project-local files for this run",
  },
  {
    name: ["-na", "--no-approve"],
    description: "Ignore project-local files for this run",
  },
];

const providerOption: Fig.Option = {
  name: "--provider",
  description: "Provider to use",
  args: { name: "provider", suggestions: providers },
};

const modelOption: Fig.Option = {
  name: "--model",
  description: 'Model pattern or ID (supports "provider/id")',
  args: { name: "pattern" },
};

const sourceArg: Fig.Arg = {
  name: "source",
  description: "Package source (npm:<pkg>, git:<repo>, URL, or local path)",
  template: "filepaths",
};

const serverArg: Fig.Arg = { name: "server", description: "MCP server name" };

const completionSpec: Fig.Spec = {
  name: "pi",
  description: "AI coding agent with read, bash, edit, write tools",
  subcommands: [
    {
      name: "install",
      description: "Install extension source and add to settings",
      args: sourceArg,
      options: [localOption, ...approveOptions, helpOption],
    },
    {
      name: ["remove", "uninstall"],
      description: "Remove extension source from settings",
      args: sourceArg,
      options: [localOption, ...approveOptions, helpOption],
    },
    {
      name: "update",
      description: "Update pi, extensions, or model catalogs",
      args: {
        ...sourceArg,
        isOptional: true,
        suggestions: [
          { name: "pi", description: "Update pi only" },
          { name: "self", description: "Update pi only (alias for pi)" },
        ],
      },
      options: [
        {
          name: "--self",
          description: "Update pi only (default when no target is given)",
        },
        { name: "--extensions", description: "Update installed packages only" },
        { name: "--models", description: "Refresh model catalogs only" },
        { name: "--all", description: "Update pi and installed packages" },
        {
          name: "--extension",
          description: "Update one package only",
          args: sourceArg,
        },
        ...approveOptions,
        {
          name: "--force",
          description: "Reinstall pi even if the current version is latest",
        },
        helpOption,
      ],
    },
    {
      name: "list",
      description: "List installed extensions from settings",
      options: [...approveOptions, helpOption],
    },
    {
      name: "config",
      description: "Open TUI to enable/disable package resources",
      options: [
        { ...localOption, description: "Edit project overrides (.pi/)" },
        ...approveOptions,
        helpOption,
      ],
    },
    {
      name: "auth",
      description: "Print credentials or check provider readiness",
      options: [helpOption],
      subcommands: [
        {
          name: "check",
          description: "Check whether a provider is ready to use",
          options: [
            providerOption,
            modelOption,
            { name: "--json", description: "Print the result as JSON" },
            {
              name: "--credentials",
              description: "Emit the credential, or include it in JSON output",
            },
            {
              name: "--no-refresh",
              description: "Don't refresh expired OAuth credentials",
            },
          ],
        },
        {
          name: "print-api-key",
          description: "Print a provider API key for an external client",
          options: [providerOption, modelOption],
        },
        {
          name: "print-bearer-token",
          description: "Print an OAuth bearer token (refreshes if expired)",
          options: [
            providerOption,
            modelOption,
            {
              name: "--min-expiry",
              description: "Refresh if the token expires sooner than this",
              args: { name: "duration", suggestions: ["30m", "1h"] },
            },
          ],
        },
      ],
    },
    {
      name: "mcp",
      description: "Manage MCP servers",
      options: [helpOption],
      subcommands: [
        {
          name: "add",
          description: "Add or replace a server in mcp.json",
          args: [
            serverArg,
            {
              name: "command",
              description: "Stdio server command (after --)",
              isOptional: true,
              isCommand: true,
            },
          ],
          options: [
            localOption,
            {
              name: "--url",
              description: "Streamable HTTP server URL (instead of a command)",
              args: { name: "url" },
            },
            {
              name: "--env",
              description: "Environment variable for a stdio server",
              isRepeatable: true,
              args: { name: "KEY=VALUE" },
            },
            {
              name: "--cwd",
              description: "Working directory for a stdio server",
              args: { name: "dir", template: "folders" },
            },
            {
              name: "--header",
              description: "HTTP header",
              isRepeatable: true,
              args: { name: "KEY=VALUE" },
            },
            {
              name: "--bearer-token-env-var",
              description: 'Send "Authorization: Bearer ${NAME}"',
              args: { name: "NAME" },
            },
            {
              name: "--oauth-client-id",
              description: "Pre-registered OAuth client id",
              args: { name: "id" },
            },
            {
              name: "--oauth-client-secret",
              description: "OAuth client secret (may be ${NAME} or !command)",
              args: { name: "secret" },
            },
            {
              name: "--oauth-callback-port",
              description: "Fixed OAuth callback port",
              args: { name: "port" },
            },
            {
              name: "--oauth-client-name",
              description: "Client name sent when registering with the server",
              args: { name: "name" },
            },
            {
              name: "--oauth-client-registration",
              description: "OAuth client registration mode",
              args: { name: "mode", suggestions: ["auto", "cimd", "dcr"] },
            },
            {
              name: "--exposure",
              description: "How the server's tools are exposed",
              args: {
                name: "mode",
                suggestions: ["codemode", "deferred", "direct", "hidden"],
              },
            },
            {
              name: "--description",
              description: "What the server offers, shown in the system prompt",
              args: { name: "text" },
            },
          ],
        },
        {
          name: "remove",
          description: "Remove a server from mcp.json",
          args: serverArg,
          options: [localOption],
        },
        {
          name: "list",
          description: "Show state, tools, and errors",
          options: [{ name: "--json", description: "Print the list as JSON" }],
        },
        {
          name: "login",
          description: "Sign in through the browser",
          args: serverArg,
          options: [
            localOption,
            {
              name: "--timeout",
              description: "Time limit for the whole sign-in (default: 300)",
              args: { name: "seconds" },
            },
          ],
        },
        {
          name: "logout",
          description: "Delete the stored OAuth credentials",
          args: serverArg,
          options: [localOption],
        },
      ],
    },
  ],
  options: [
    {
      ...providerOption,
      description: "Provider to search for --model (requires --model)",
    },
    {
      ...modelOption,
      description:
        'Model pattern or ID (supports "provider/id" and optional ":<thinking>")',
    },
    {
      name: "--api-key",
      description: "API key (defaults to env vars)",
      args: { name: "key" },
    },
    {
      name: "--system-prompt",
      description: "System prompt (default: coding assistant prompt)",
      args: { name: "text" },
    },
    {
      name: "--append-system-prompt",
      description: "Append text or file contents to the system prompt",
      isRepeatable: true,
      args: { name: "text", template: "filepaths" },
    },
    {
      name: "--mode",
      description: "Output mode",
      args: {
        name: "mode",
        suggestions: [
          { name: "text", description: "Plain text output (default)" },
          { name: "json", description: "JSON event stream" },
          { name: "rpc", description: "RPC over stdin/stdout" },
        ],
      },
    },
    {
      name: ["-p", "--print"],
      description: "Non-interactive mode: process prompt and exit",
      args: { name: "prompt", isOptional: true },
    },
    {
      name: ["-c", "--continue"],
      description: "Continue the most recent session for the current directory",
    },
    { name: ["-r", "--resume"], description: "Pick a session to resume" },
    {
      name: "--session",
      description: "Open a session by file path or full/partial ID",
      args: { name: "path|id", template: "filepaths" },
    },
    {
      name: "--session-id",
      description:
        "Use the existing session with this ID, creating it otherwise",
      args: { name: "id" },
    },
    {
      name: "--fork",
      description:
        "Fork a session by file path or ID into the current directory",
      args: { name: "path|id", template: "filepaths" },
    },
    {
      name: "--session-dir",
      description: "Directory for session storage and lookup",
      args: { name: "dir", template: "folders" },
    },
    { name: "--no-session", description: "Don't save session (ephemeral)" },
    {
      name: ["-n", "--name"],
      description: "Set session display name",
      args: { name: "name" },
    },
    {
      name: "--models",
      description: "Comma-separated model patterns for Ctrl+P cycling",
      args: { name: "patterns" },
    },
    {
      name: ["-nt", "--no-tools"],
      description: "Disable all tools by default (built-in and extension)",
    },
    {
      name: ["-nbt", "--no-builtin-tools"],
      description: "Disable built-in tools but keep extension/custom tools",
    },
    {
      name: ["-t", "--tools"],
      description: "Comma-separated allowlist of tool names or patterns",
      args: { name: "tools", generators: valueList({ values: tools }) },
    },
    {
      name: ["-xt", "--exclude-tools"],
      description: "Comma-separated denylist of tool names or patterns",
      args: { name: "tools", generators: valueList({ values: tools }) },
    },
    {
      name: "--thinking",
      description: "Set thinking level",
      args: {
        name: "level",
        suggestions: [
          "off",
          "minimal",
          "low",
          "medium",
          "high",
          "xhigh",
          "max",
        ],
      },
    },
    {
      name: ["-e", "--extension"],
      description: "Load an extension file or builtin:<name>",
      isRepeatable: true,
      args: {
        name: "path",
        template: "filepaths",
        suggestions: [
          "builtin:codemode",
          "builtin:llama.cpp",
          "builtin:mcp",
          "builtin:tool-search",
        ],
      },
    },
    {
      name: ["-ne", "--no-extensions"],
      description: "Disable extension discovery and built-in extensions",
    },
    { name: "--no-mcp", description: "Disable built-in MCP support" },
    {
      name: "--skill",
      description: "Load a skill file or directory",
      isRepeatable: true,
      args: { name: "path", template: "filepaths" },
    },
    {
      name: ["-ns", "--no-skills"],
      description: "Disable skills discovery and loading",
    },
    {
      name: "--prompt-template",
      description: "Load a prompt template file or directory",
      isRepeatable: true,
      args: { name: "path", template: "filepaths" },
    },
    {
      name: ["-np", "--no-prompt-templates"],
      description: "Disable prompt template discovery and loading",
    },
    {
      name: "--theme",
      description: "Load a theme file or directory",
      isRepeatable: true,
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--use-theme",
      description: "Set the initial interactive theme for this run",
      args: { name: "name[/name]", suggestions: ["dark", "light"] },
    },
    { name: "--no-themes", description: "Disable theme discovery and loading" },
    {
      name: ["-nc", "--no-context-files"],
      description: "Disable AGENTS.md and CLAUDE.md discovery and loading",
    },
    {
      name: "--export",
      description: "Export session file to HTML and exit",
      args: [
        { name: "file", template: "filepaths" },
        { name: "output", isOptional: true, template: "filepaths" },
      ],
    },
    {
      name: "--list-models",
      description: "List available models (with optional fuzzy search)",
      args: { name: "search", isOptional: true },
    },
    {
      name: "--verbose",
      description: "Force verbose startup (overrides quietStartup setting)",
    },
    {
      name: "--tui-mode",
      description: "TUI mode",
      args: {
        name: "mode",
        suggestions: [
          { name: "fullscreen", description: "Fullscreen TUI (default)" },
          { name: "regular", description: "Regular inline TUI" },
        ],
      },
    },
    ...approveOptions,
    {
      name: "--offline",
      description: "Disable startup network operations (same as PI_OFFLINE=1)",
    },
    { name: ["-h", "--help"], description: "Show help" },
    { name: ["-v", "--version"], description: "Show version number" },
  ],
  args: {
    name: "messages",
    description: "Prompt messages; prefix a path with @ to include the file",
    isOptional: true,
    isVariadic: true,
    // ponytail: plain filepaths, so @file needs the @ typed by hand; a custom generator could prefix it
    template: "filepaths",
  },
};

export default completionSpec;
