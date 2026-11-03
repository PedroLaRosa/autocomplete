// OpenAI Codex CLI, documented against codex-cli 0.166.0
// (installed 0.160.0 `--help` tree + openai/codex clap sources at rust-v0.166.0)

const sandboxModes: Fig.Suggestion[] = [
  { name: "read-only", description: "Read files only; no writes or network" },
  {
    name: "workspace-write",
    description: "Write inside the workspace and added directories",
  },
  {
    name: "danger-full-access",
    description: "No sandbox restrictions",
  },
];

const approvalPolicies: Fig.Suggestion[] = [
  {
    name: "on-request",
    description: "The model decides when to ask the user for approval",
  },
  {
    name: "never",
    description:
      "Never ask for approval; execution failures are returned to the model",
  },
];

const oauthClientRegistrations = ["auto", "cimd", "dcr"];

const helpOption: Fig.Option = {
  name: ["-h", "--help"],
  description: "Print help",
  isPersistent: true,
};

const versionOption: Fig.Option = {
  name: ["-V", "--version"],
  description: "Print version",
};

const strictConfigOption: Fig.Option = {
  name: "--strict-config",
  description:
    "Error out when config.toml contains fields not recognized by this version",
};

const jsonOption = (description: string): Fig.Option => ({
  name: "--json",
  description,
});

const remoteOptions: Fig.Option[] = [
  {
    name: "--remote",
    description: "Connect the TUI to a remote app server endpoint",
    args: {
      name: "addr",
      suggestions: ["ws://", "wss://", "unix://"],
    },
  },
  {
    name: "--remote-auth-token-env",
    description:
      "Environment variable holding the bearer token for a remote app server",
    args: { name: "env_var" },
  },
];

const imageOption: Fig.Option = {
  name: ["-i", "--image"],
  description: "Optional image(s) to attach to the initial prompt",
  isRepeatable: true,
  args: { name: "file", template: "filepaths", isVariadic: true },
};

const modelOption: Fig.Option = {
  name: ["-m", "--model"],
  description: "Model the agent should use",
  args: { name: "model" },
};

const dangerouslyBypassOption: Fig.Option = {
  name: ["--dangerously-bypass-approvals-and-sandbox", "--yolo"],
  description:
    "Skip all confirmation prompts and run commands without sandboxing. EXTREMELY DANGEROUS",
  isDangerous: true,
};

const bypassHookTrustOption: Fig.Option = {
  name: "--dangerously-bypass-hook-trust",
  description:
    "Run enabled hooks without requiring persisted hook trust. DANGEROUS",
  isDangerous: true,
};

const worktreeOption: Fig.Option = {
  name: "--worktree",
  description: "Run the session in a new managed Git worktree",
};

const profileOption: Fig.Option = {
  name: ["-p", "--profile"],
  description: "Layer $CODEX_HOME/<name>.config.toml on top of the base config",
  args: { name: "profile" },
};

const cdOption: Fig.Option = {
  name: ["-C", "--cd"],
  description: "Use the specified directory as the agent's working root",
  args: { name: "dir", template: "folders" },
};

// SharedCliOptions in codex-rs/utils/cli
const sharedOptions: Fig.Option[] = [
  imageOption,
  modelOption,
  { name: "--oss", description: "Use open-source provider" },
  {
    name: "--local-provider",
    description: "Local provider to use with --oss",
    args: { name: "oss_provider", suggestions: ["lmstudio", "ollama"] },
  },
  profileOption,
  {
    name: ["-s", "--sandbox"],
    description: "Sandbox policy for model-generated shell commands",
    args: { name: "sandbox_mode", suggestions: sandboxModes },
  },
  {
    name: ["--approve-for-me", "--not-so-yolo"],
    description:
      "Route approval requests through automatic review using the workspace-write sandbox",
  },
  dangerouslyBypassOption,
  bypassHookTrustOption,
  cdOption,
  worktreeOption,
  {
    name: "--add-dir",
    description:
      "Additional writable directory alongside the primary workspace",
    isRepeatable: true,
    args: { name: "dir", template: "folders" },
  },
];

// Options of the interactive TUI (`codex`, `codex resume`, `codex fork`)
const tuiOptions: Fig.Option[] = [
  ...remoteOptions,
  strictConfigOption,
  ...sharedOptions,
  {
    name: ["-a", "--ask-for-approval"],
    description:
      "When the model requires human approval before running a command",
    args: { name: "approval_policy", suggestions: approvalPolicies },
  },
  {
    name: "--search",
    description: "Enable live web search (native Responses web_search tool)",
  },
  {
    name: "--no-alt-screen",
    description: "Disable alternate screen mode (inline TUI, keeps scrollback)",
  },
  {
    name: "--no-daemon",
    description: "Run without the shared background server",
  },
];

// `codex archive` / `unarchive` / `delete`
const sessionArchiveOptions: Fig.Option[] = [
  ...remoteOptions,
  ...sharedOptions,
  strictConfigOption,
];

const sessionArg: Fig.Arg = {
  name: "session",
  description: "Session id (UUID) or session name",
};

const wsAuthOptions: Fig.Option[] = [
  {
    name: "--ws-auth",
    description: "Authentication mode for incoming WebSocket connections",
    args: {
      name: "mode",
      suggestions: ["capability-token", "signed-bearer-token"],
    },
  },
  {
    name: "--ws-token-file",
    description: "Absolute path to the capability-token file",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--ws-token-sha256",
    description: "Hex-encoded SHA-256 digest of the capability token",
    args: { name: "hex" },
  },
  {
    name: "--ws-shared-secret-file",
    description:
      "Absolute path to the shared secret file for signed JWT tokens",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--ws-issuer",
    description: "Expected issuer for signed JWT bearer tokens",
    args: { name: "issuer" },
  },
  {
    name: "--ws-audience",
    description: "Expected audience for signed JWT bearer tokens",
    args: { name: "audience" },
  },
  {
    name: "--ws-max-clock-skew-seconds",
    description: "Maximum clock skew when validating signed JWT bearer tokens",
    args: { name: "seconds" },
  },
];

const persistent = (options: Fig.Option[]): Fig.Option[] =>
  options.map((option) => ({ ...option, isPersistent: true }));

// Options marked `global = true` inside `codex exec`
const execPersistentOptions = persistent([
  strictConfigOption,
  modelOption,
  dangerouslyBypassOption,
  bypassHookTrustOption,
  worktreeOption,
  {
    name: "--thread-source",
    description: "Source classification for newly created or forked threads",
    args: { name: "source" },
  },
  {
    name: "--cyber-access-program",
    description:
      "Request an experimental Cyber access program for this turn (OpenAI provider only)",
    args: {
      name: "program",
      suggestions: ["standard", "daybreak_blue", "daybreak_red"],
    },
  },
  {
    name: "--skip-git-repo-check",
    description: "Allow running Codex outside a Git repository",
  },
  {
    name: "--ephemeral",
    description: "Run without persisting session files to disk",
  },
  {
    name: "--ignore-user-config",
    description: "Do not load $CODEX_HOME/config.toml",
  },
  {
    name: "--ignore-rules",
    description: "Do not load user or project execpolicy .rules files",
  },
  {
    name: "--output-schema",
    description: "JSON Schema file describing the model's final response shape",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: ["--json", "--experimental-json"],
    description: "Print events to stdout as JSONL",
  },
  {
    name: ["-o", "--output-last-message"],
    description: "File where the last message from the agent is written",
    args: { name: "file", template: "filepaths" },
  },
]);

const reviewOptions: Fig.Option[] = [
  {
    name: "--uncommitted",
    description: "Review staged, unstaged, and untracked changes",
  },
  {
    name: "--base",
    description: "Review changes against the given base branch",
    args: { name: "branch" },
  },
  {
    name: "--commit",
    description: "Review the changes introduced by a commit",
    args: { name: "sha" },
  },
  {
    name: "--title",
    description: "Commit title to display in the review summary",
    args: { name: "title" },
  },
];

const reviewPromptArg: Fig.Arg = {
  name: "prompt",
  description: "Custom review instructions ('-' reads from stdin)",
  isOptional: true,
};

// Options marked `global = true` inside `codex exec-server`
const execServerPersistentOptions = persistent([
  strictConfigOption,
  {
    name: "--linux-sandbox-pid-namespace",
    description: "Linux PID namespace mode",
    args: { name: "mode", suggestions: ["isolate", "inherit"] },
  },
  {
    name: "--proxy-private-ips-via-upstream",
    description:
      "Allow permitted private IP destinations to use the configured upstream proxy",
  },
  {
    name: "--remote",
    description:
      "Register this exec-server as a remote environment at this URL",
    args: { name: "url" },
  },
  {
    name: "--remote-transport",
    description: "Transport used for the remote executor connection",
    args: { name: "transport", suggestions: ["noise", "direct"] },
  },
  {
    name: "--environment-id",
    description: "Environment id to attach to when registering remotely",
    args: { name: "id" },
  },
  {
    name: "--name",
    description: "Human-readable environment name",
    args: { name: "name" },
  },
  {
    name: "--use-agent-identity-auth",
    description: "Use Agent Identity auth from CODEX_ACCESS_TOKEN",
  },
  {
    name: "--executor-credential-stdin",
    description: "Read rotating executor credentials from stdin",
  },
  {
    name: "--aws-sigv4",
    description: "Sign registration and WebSocket handshakes with AWS SigV4",
  },
  {
    name: "--aws-profile",
    description: "AWS profile used for SigV4 authentication",
    args: { name: "profile" },
  },
  {
    name: "--aws-region",
    description: "AWS signing region",
    args: { name: "region" },
  },
  {
    name: "--aws-service",
    description: "AWS signing service (default: execute-api)",
    args: { name: "service" },
  },
  {
    name: "--exit-on-stdin-close",
    description: "Exit when the parent-owned stdin pipe closes",
  },
]);

const marketplaceOption = (description: string): Fig.Option => ({
  name: ["-m", "--marketplace"],
  description,
  args: { name: "marketplace" },
});

const pluginArg = (description: string): Fig.Arg => ({
  name: "plugin[@marketplace]",
  description,
});

const mcpNameArg = (description: string): Fig.Arg => ({
  name: "name",
  description,
});

const cloudTaskArg = (description: string): Fig.Arg => ({
  name: "task_id",
  description,
});

const completionSpec: Fig.Spec = {
  name: "codex",
  description: "OpenAI Codex CLI",
  subcommands: [
    {
      name: "agents",
      description:
        "Browse all agent sessions on the shared local app-server daemon",
      options: [
        ...remoteOptions,
        {
          name: ["-C", "--cd"],
          description: "Use this directory for new tasks on a remote server",
          args: { name: "dir", template: "folders" },
        },
        {
          name: "--no-alt-screen",
          description: "Disable alternate screen mode",
        },
      ],
    },
    {
      name: ["exec", "e"],
      description: "Run Codex non-interactively",
      subcommands: [
        {
          name: "resume",
          description:
            "Resume a previous session by id or pick the most recent with --last",
          options: [
            {
              name: "--last",
              description: "Resume the most recent recorded session",
            },
            {
              name: "--all",
              description: "Show all sessions (disables cwd filtering)",
            },
            {
              name: ["-i", "--image"],
              description:
                "Image(s) to attach to the prompt sent after resuming",
              isRepeatable: true,
              args: { name: "file", template: "filepaths" },
            },
          ],
          args: [
            {
              name: "session_id",
              description: "Session id (UUID) or thread name",
              isOptional: true,
            },
            {
              name: "prompt",
              description: "Prompt to send after resuming ('-' reads stdin)",
              isOptional: true,
            },
          ],
        },
        {
          name: "fork",
          description: "Fork a previous session by id into a new session",
          options: [
            {
              name: ["-i", "--image"],
              description:
                "Image(s) to attach to the prompt sent after forking",
              isRepeatable: true,
              args: { name: "file", template: "filepaths" },
            },
          ],
          args: [
            {
              name: "session_id",
              description: "Session id (UUID) or thread name to fork",
            },
            {
              name: "prompt",
              description: "Prompt to send after forking ('-' reads stdin)",
              isOptional: true,
            },
          ],
        },
        {
          name: "review",
          description: "Run a code review against the current repository",
          options: reviewOptions,
          args: reviewPromptArg,
        },
      ],
      options: [
        ...execPersistentOptions,
        versionOption,
        imageOption,
        { name: "--oss", description: "Use open-source provider" },
        {
          name: "--local-provider",
          description: "Local provider to use with --oss",
          args: { name: "oss_provider", suggestions: ["lmstudio", "ollama"] },
        },
        profileOption,
        {
          name: ["-s", "--sandbox"],
          description: "Sandbox policy for model-generated shell commands",
          args: { name: "sandbox_mode", suggestions: sandboxModes },
        },
        {
          name: ["--approve-for-me", "--not-so-yolo"],
          description:
            "Route approval requests through automatic review using the workspace-write sandbox",
        },
        cdOption,
        {
          name: "--add-dir",
          description:
            "Additional writable directory alongside the primary workspace",
          isRepeatable: true,
          args: { name: "dir", template: "folders" },
        },
        {
          name: "--color",
          description: "Color settings for the output",
          args: {
            name: "color",
            suggestions: ["always", "never", "auto"],
            default: "auto",
          },
        },
      ],
      args: {
        name: "prompt",
        description:
          "Initial instructions for the agent ('-' or omitted reads stdin)",
        isOptional: true,
      },
    },
    {
      name: "review",
      description: "Run a code review non-interactively",
      options: [strictConfigOption, ...reviewOptions],
      args: reviewPromptArg,
    },
    {
      name: "login",
      description: "Manage login",
      subcommands: [{ name: "status", description: "Show login status" }],
      options: [
        {
          name: "--with-api-key",
          description: "Read the API key from stdin",
        },
        {
          name: "--with-access-token",
          description: "Read the access token from stdin",
        },
        {
          name: "--device-auth",
          description: "Sign in with a device code",
        },
      ],
    },
    {
      name: "logout",
      description: "Remove stored authentication credentials",
    },
    {
      name: "mcp",
      description: "Manage external MCP servers for Codex",
      subcommands: [
        {
          name: "list",
          description: "List configured MCP servers",
          options: [jsonOption("Output the configured servers as JSON")],
        },
        {
          name: "get",
          description: "Show an MCP server configuration",
          options: [jsonOption("Output the server configuration as JSON")],
          args: mcpNameArg("Name of the MCP server to display"),
        },
        {
          name: "add",
          description: "Add an MCP server launcher entry to config.toml",
          options: [
            {
              name: "--env",
              description:
                "Environment variable to set when launching a stdio server",
              isRepeatable: true,
              args: { name: "key=value" },
            },
            {
              name: "--url",
              description: "URL for a streamable HTTP MCP server",
              args: { name: "url" },
            },
            {
              name: "--bearer-token-env-var",
              description:
                "Environment variable to read for a bearer token (HTTP servers)",
              args: { name: "env_var" },
            },
            {
              name: "--oauth-client-id",
              description: "OAuth client identifier for this MCP server",
              args: { name: "client_id" },
            },
            {
              name: "--oauth-client-secret",
              description: "OAuth client secret for the pre-registered client",
              args: { name: "client_secret" },
            },
            {
              name: "--oauth-client-registration",
              description:
                "OAuth client-registration strategy for the immediate login",
              args: { name: "strategy", suggestions: oauthClientRegistrations },
            },
            {
              name: "--oauth-resource",
              description: "OAuth resource parameter to include during login",
              args: { name: "resource" },
            },
          ],
          args: [
            mcpNameArg("Name for the MCP server configuration"),
            {
              name: "command",
              description: "Command to launch the MCP server (after --)",
              isOptional: true,
              isVariadic: true,
              isCommand: true,
            },
          ],
        },
        {
          name: "remove",
          description: "Delete an MCP server entry",
          args: mcpNameArg("Name of the MCP server configuration to remove"),
        },
        {
          name: "login",
          description: "Authenticate with an MCP server using OAuth",
          options: [
            {
              name: "--no-browser",
              description:
                "Print the authorization URL instead of opening a browser",
            },
            {
              name: "--scopes",
              description: "Comma-separated list of OAuth scopes to request",
              args: { name: "scope,scope" },
            },
            {
              name: "--oauth-client-registration",
              description: "OAuth client-registration strategy for this login",
              args: { name: "strategy", suggestions: oauthClientRegistrations },
            },
          ],
          args: mcpNameArg("Name of the MCP server to authenticate with"),
        },
        {
          name: "logout",
          description: "Remove OAuth credentials for an MCP server",
          args: mcpNameArg("Name of the MCP server to deauthenticate"),
        },
      ],
    },
    {
      name: "plugin",
      description: "Manage Codex plugins",
      subcommands: [
        {
          name: "add",
          description:
            "Install a plugin from a configured or remote marketplace",
          options: [
            marketplaceOption(
              "Marketplace to use when PLUGIN does not include @MARKETPLACE"
            ),
            jsonOption("Output install result as JSON"),
          ],
          args: pluginArg("PLUGIN@MARKETPLACE, or PLUGIN with --marketplace"),
        },
        {
          name: "list",
          description:
            "List plugins available from configured and remote marketplaces",
          options: [
            marketplaceOption("Only list plugins from this marketplace"),
            jsonOption("Output plugin list as JSON"),
            {
              name: "--available",
              description: "Include uninstalled marketplace plugins in JSON",
            },
          ],
        },
        {
          name: "marketplace",
          description: "Add, list, upgrade, or remove plugin marketplaces",
          subcommands: [
            {
              name: "add",
              description: "Add a local or Git marketplace source",
              options: [
                {
                  name: "--ref",
                  description: "Git ref to fetch for Git marketplace sources",
                  args: { name: "ref" },
                },
                {
                  name: "--sparse",
                  description:
                    "Sparse checkout path for Git marketplace sources",
                  isRepeatable: true,
                  args: { name: "path" },
                },
                jsonOption("Output add result as JSON"),
              ],
              args: {
                name: "source",
                description:
                  "Local path, owner/repo[@ref], HTTPS Git URL, or SSH Git URL",
                template: "folders",
              },
            },
            {
              name: "list",
              description: "List plugin marketplaces and their roots",
              options: [jsonOption("Output marketplace list as JSON")],
            },
            {
              name: "upgrade",
              description: "Refresh configured Git marketplace snapshots",
              options: [jsonOption("Output upgrade result as JSON")],
              args: {
                name: "marketplace_name",
                description: "Marketplace to upgrade (omit for all)",
                isOptional: true,
              },
            },
            {
              name: "remove",
              description: "Remove a configured marketplace source by name",
              options: [jsonOption("Output remove result as JSON")],
              args: {
                name: "marketplace_name",
                description: "Configured marketplace name to remove",
              },
            },
          ],
        },
        {
          name: "remove",
          description: "Uninstall a plugin and remove its local cache",
          options: [
            marketplaceOption(
              "Marketplace to use when PLUGIN does not include @MARKETPLACE"
            ),
            jsonOption("Output remove result as JSON"),
          ],
          args: pluginArg("PLUGIN@MARKETPLACE, or PLUGIN with --marketplace"),
        },
      ],
    },
    {
      name: "app-server",
      description: "[experimental] Run the app server or related tooling",
      subcommands: [
        {
          name: "daemon",
          description: "Manage the local app-server daemon",
          subcommands: [
            {
              name: "bootstrap",
              description:
                "Install durable local app-server management for SSH use",
              options: [
                {
                  name: "--remote-control",
                  description:
                    "Launch the managed app-server with remote control enabled",
                },
              ],
            },
            {
              name: "start",
              description: "Start the local app server daemon if not running",
            },
            {
              name: "restart",
              description: "Restart the local app server daemon",
            },
            {
              name: "update",
              description:
                "Update the daemon package (may interrupt running work)",
              options: [
                {
                  name: "--from-cli",
                  description: "Copy and pin this CLI package",
                },
                {
                  name: ["-y", "--yes"],
                  description: "Confirm replacing the daemon package",
                },
              ],
            },
            {
              name: "enable-remote-control",
              description:
                "Enable remote control for future starts and the running daemon",
            },
            {
              name: "disable-remote-control",
              description:
                "Disable remote control for future starts and the running daemon",
            },
            {
              name: "stop",
              description: "Stop the local app server daemon",
            },
            {
              name: "version",
              description:
                "Print local CLI and running app-server versions as JSON",
            },
          ],
        },
        {
          name: "proxy",
          description: "Proxy stdio bytes to the running app-server socket",
          options: [
            {
              name: "--sock",
              description: "Path to the app-server Unix domain socket",
              args: { name: "socket_path", template: "filepaths" },
            },
          ],
        },
        {
          name: "generate-ts",
          description:
            "[experimental] Generate TypeScript bindings for the protocol",
          options: [
            {
              name: ["-o", "--out"],
              description: "Output directory for the .ts files",
              isRequired: true,
              args: { name: "dir", template: "folders" },
            },
            {
              name: ["-p", "--prettier"],
              description: "Path to the Prettier executable to format output",
              args: { name: "prettier_bin", template: "filepaths" },
            },
            {
              name: "--experimental",
              description: "Include experimental methods and fields",
            },
          ],
        },
        {
          name: "generate-json-schema",
          description: "[experimental] Generate JSON Schema for the protocol",
          options: [
            {
              name: ["-o", "--out"],
              description: "Output directory for the schema bundle",
              isRequired: true,
              args: { name: "dir", template: "folders" },
            },
            {
              name: "--experimental",
              description: "Include experimental methods and fields",
            },
          ],
        },
      ],
      options: [
        {
          name: "--print-startup-config",
          description:
            "Validate configuration and print requirements as JSON without starting",
        },
        {
          name: "--startup-sign-out",
          description:
            "Sign out via the managed auth path before loading startup requirements",
        },
        {
          name: "--startup-client-info",
          description: "ClientInfo JSON used for configuration/auth identity",
          args: { name: "json" },
        },
        {
          name: "--cloud-skills-snapshot",
          description: "Load frozen cloud skills from a JSON snapshot",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--code-mode-host",
          description: "Connect to a remote code-mode host",
          args: { name: "url" },
        },
        strictConfigOption,
        {
          name: "--listen",
          description: "Transport endpoint URL",
          args: {
            name: "url",
            suggestions: ["stdio://", "unix://", "ws://", "off"],
            default: "stdio://",
          },
        },
        {
          name: "--stdio",
          description: "Use stdio as the transport (same as --listen stdio://)",
        },
        {
          name: "--analytics-default-enabled",
          description: "Enable analytics by default (users can still opt out)",
        },
        ...wsAuthOptions,
      ],
    },
    {
      name: "remote-control",
      description:
        "[experimental] Manage the app-server daemon with remote control enabled",
      subcommands: [
        {
          name: "start",
          description: "Start the app-server daemon with remote control",
        },
        { name: "stop", description: "Stop the app-server daemon" },
        {
          name: "pair",
          description: "Create and print a short-lived manual pairing code",
        },
      ],
      options: [
        {
          name: "--json",
          description: "Emit machine-readable JSON",
          isPersistent: true,
        },
        {
          name: "--no-daemon",
          description: "Run an embedded app-server in the foreground",
        },
      ],
    },
    {
      name: "app",
      description: "Launch the Desktop app (opens the installer if missing)",
      options: [
        {
          name: "--download-url",
          description: "Override the app installer download URL (advanced)",
          args: { name: "url" },
        },
      ],
      args: {
        name: "path",
        description: "Workspace path to open in the Desktop app",
        template: "folders",
        isOptional: true,
        default: ".",
      },
    },
    {
      name: "completion",
      description: "Generate shell completion scripts",
      args: {
        name: "shell",
        suggestions: ["bash", "elvish", "fish", "powershell", "zsh"],
        isOptional: true,
        default: "bash",
      },
    },
    {
      name: "update",
      description: "Update Codex to the latest version",
    },
    {
      name: "doctor",
      description:
        "Diagnose local Codex installation, config, auth, and runtime health",
      options: [
        jsonOption("Emit a redacted machine-readable report"),
        {
          name: "--network-only",
          description:
            "Run only config, network, provider HTTP, and WebSocket checks",
        },
        {
          name: "--summary",
          description: "Only show grouped check rows and the final summary",
        },
        {
          name: "--all",
          description: "Expand long lists in detailed human output",
        },
        {
          name: "--no-color",
          description: "Disable ANSI color in human output",
        },
        {
          name: "--ascii",
          description: "Use ASCII status labels and separators",
        },
      ],
    },
    {
      name: "sandbox",
      description: "Run commands within a Codex-provided sandbox",
      subcommands: [
        {
          name: "uninstall",
          description:
            "Remove the legacy Windows sandbox's machine-wide accounts and network rules",
        },
      ],
      options: [
        {
          name: "--sandbox-state-json",
          description: "Opaque JSON value from codex/sandbox-state to apply",
          args: { name: "json" },
        },
        {
          name: "--sandbox-state-readable-root",
          description: "Add a readable root to the supplied sandbox state",
          isRepeatable: true,
          args: { name: "path", template: "folders" },
        },
        {
          name: "--sandbox-state-disable-network",
          description: "Disable direct network access in the sandbox state",
        },
        {
          name: ["-P", "--permission-profile"],
          description: "Named permissions profile from the active config stack",
          args: { name: "name" },
        },
        profileOption,
        {
          name: ["-C", "--cd"],
          description: "Working directory for profile resolution and execution",
          args: { name: "dir", template: "folders" },
        },
        {
          name: "--include-managed-config",
          description:
            "Include managed requirements when resolving a permissions profile",
        },
        {
          name: "--allow-unix-socket",
          description: "Allow AF_UNIX sockets rooted at this path (macOS)",
          isRepeatable: true,
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--log-denials",
          description: "Capture and print macOS sandbox denials after exit",
        },
      ],
      args: {
        name: "command",
        description: "Full command args to run under the sandbox",
        isOptional: true,
        isVariadic: true,
        isCommand: true,
      },
    },
    {
      name: "debug",
      description: "Debugging tools",
      subcommands: [
        {
          name: "models",
          description: "Render the raw model catalog as JSON",
          options: [
            {
              name: "--bundled",
              description: "Skip refresh and dump only the bundled catalog",
            },
          ],
        },
        {
          name: "app-server",
          description: "Tooling: helps debug the app server",
          subcommands: [
            {
              name: "send-message-v2",
              description: "Send a message to app server V2",
              args: { name: "user_message" },
            },
          ],
        },
        {
          name: "prompt-input",
          description: "Render the model-visible prompt input list as JSON",
          options: [
            {
              ...imageOption,
              description: "Optional image(s) to attach to the user prompt",
            },
          ],
          args: {
            name: "prompt",
            description: "User prompt to append after session context",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "execpolicy",
      description: "[experimental] Execpolicy tooling",
      subcommands: [
        {
          name: "check",
          description: "Check execpolicy files against a command",
          options: [
            {
              name: ["-r", "--rules"],
              description: "Execpolicy rule file to evaluate",
              isRequired: true,
              isRepeatable: true,
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--pretty",
              description: "Pretty-print the JSON output",
            },
            {
              name: "--resolve-host-executables",
              description:
                "Resolve absolute program paths against basename rules",
            },
          ],
          args: {
            name: "command",
            description: "Command tokens to check against the policy",
            isVariadic: true,
            isCommand: true,
          },
        },
      ],
    },
    {
      name: ["apply", "a"],
      description:
        "Apply the latest diff produced by the Codex agent with git apply",
      args: { name: "task_id" },
    },
    {
      name: "resume",
      description:
        "Resume a previous interactive session (picker by default; --last for most recent)",
      options: [
        {
          name: "--last",
          description: "Continue the most recent session without the picker",
        },
        {
          name: "--all",
          description: "Show all sessions (disables cwd filtering)",
        },
        {
          name: "--include-non-interactive",
          description:
            "Include non-interactive sessions in the picker and --last",
        },
        versionOption,
        ...tuiOptions,
      ],
      args: [
        {
          name: "session_id",
          description: "Session id (UUID) or session name",
          isOptional: true,
        },
        {
          name: "prompt",
          description: "Optional user prompt to start the session",
          isOptional: true,
        },
      ],
    },
    {
      name: "queue",
      description: "Queue a message for an existing session",
      options: [
        {
          name: "--thread",
          description: "Session UUID or exact session name",
          isRequired: true,
          args: { name: "thread" },
        },
        {
          name: "--message",
          description: "Message text to queue",
          isRequired: true,
          args: { name: "text" },
        },
        {
          name: "--resume",
          description: "After queueing, try to resume the thread",
        },
        ...remoteOptions,
        profileOption,
        strictConfigOption,
        {
          name: ["-C", "--cd"],
          description:
            "Working directory for the local server (without --remote)",
          args: { name: "dir", template: "folders" },
        },
      ],
    },
    {
      name: "archive",
      description: "Archive a saved session by id or session name",
      options: sessionArchiveOptions,
      args: sessionArg,
    },
    {
      name: "delete",
      description: "Permanently delete a saved session by id or session name",
      options: [
        ...sessionArchiveOptions,
        {
          name: "--force",
          description: "Delete without prompting (SESSION must be a UUID)",
          isDangerous: true,
        },
      ],
      args: sessionArg,
    },
    {
      name: "migrate-rollouts",
      description:
        "Inspect or migrate legacy local sessions to paginated thread history",
      options: [
        {
          name: "--apply",
          description: "Publish the migration (otherwise only report)",
        },
        {
          name: "--thread",
          description: "Restrict inspection or migration to this thread ID",
          isRepeatable: true,
          args: { name: "thread_id" },
        },
        {
          name: "--max-mib-per-second",
          description: "Limit aggregate rollout read/write throughput (MiB/s)",
          args: { name: "mib" },
        },
        jsonOption("Emit the complete per-thread report as JSON"),
        {
          name: "--verbose",
          description: "Print one line for every inspected rollout",
        },
      ],
    },
    {
      name: "migrate-nfs-db",
      description:
        "[experimental] Migrate configured SQLite databases to DELETE mode in place",
      options: [
        {
          name: "--staging-dir",
          description:
            "Local directory with space for the database and WAL files",
          args: { name: "dir", template: "folders" },
        },
      ],
    },
    {
      name: "unarchive",
      description: "Unarchive a saved session by id or session name",
      options: sessionArchiveOptions,
      args: sessionArg,
    },
    {
      name: "fork",
      description:
        "Fork a previous interactive session (picker by default; --last for most recent)",
      options: [
        {
          name: "--last",
          description: "Fork the most recent session without the picker",
        },
        {
          name: "--all",
          description: "Show all sessions (disables cwd filtering)",
        },
        versionOption,
        ...tuiOptions,
      ],
      args: [
        {
          name: "session_id",
          description: "Session id (UUID) to fork",
          isOptional: true,
        },
        {
          name: "prompt",
          description: "Optional user prompt to start the session",
          isOptional: true,
        },
      ],
    },
    {
      name: ["cloud", "cloud-tasks"],
      description:
        "[EXPERIMENTAL] Browse tasks from Codex Cloud and apply changes locally",
      subcommands: [
        {
          name: "exec",
          description: "Submit a new Codex Cloud task without the TUI",
          options: [
            {
              name: "--env",
              description: "Target environment identifier",
              isRequired: true,
              args: { name: "env_id" },
            },
            {
              name: "--attempts",
              description: "Number of assistant attempts (best-of-N)",
              args: {
                name: "attempts",
                suggestions: ["1", "2", "3", "4"],
                default: "1",
              },
            },
            {
              name: "--branch",
              description: "Git branch to run in Codex Cloud",
              args: { name: "branch" },
            },
          ],
          args: {
            name: "query",
            description: "Task prompt to run in Codex Cloud",
            isOptional: true,
          },
        },
        {
          name: "status",
          description: "Show the status of a Codex Cloud task",
          args: cloudTaskArg("Codex Cloud task identifier to inspect"),
        },
        {
          name: "list",
          description: "List Codex Cloud tasks",
          options: [
            {
              name: "--env",
              description: "Filter tasks by environment identifier",
              args: { name: "env_id" },
            },
            {
              name: "--limit",
              description: "Maximum number of tasks to return (1-20)",
              args: { name: "n", default: "20" },
            },
            {
              name: "--cursor",
              description: "Pagination cursor returned by a previous call",
              args: { name: "cursor" },
            },
            jsonOption("Emit JSON instead of plain text"),
          ],
        },
        {
          name: "apply",
          description: "Apply the diff for a Codex Cloud task locally",
          options: [
            {
              name: "--attempt",
              description: "Attempt number to apply (1-based)",
              args: { name: "n" },
            },
          ],
          args: cloudTaskArg("Codex Cloud task identifier to apply"),
        },
        {
          name: "diff",
          description: "Show the unified diff for a Codex Cloud task",
          options: [
            {
              name: "--attempt",
              description: "Attempt number to display (1-based)",
              args: { name: "n" },
            },
          ],
          args: cloudTaskArg("Codex Cloud task identifier to display"),
        },
      ],
      options: [versionOption],
    },
    {
      name: "exec-server",
      description: "[EXPERIMENTAL] Run the standalone exec-server service",
      subcommands: [
        {
          name: "forward",
          description:
            "Register an existing WebSocket exec-server as a remote environment",
          options: [
            {
              name: "--connect",
              description: "Destination exec-server WebSocket URL",
              isRequired: true,
              args: { name: "url" },
            },
          ],
        },
      ],
      options: [
        ...execServerPersistentOptions,
        {
          name: "--concurrent-requests",
          description: "Maximum concurrent requests per connection",
          args: { name: "count", default: "1" },
        },
        {
          name: "--listen",
          description: "Transport endpoint URL",
          args: { name: "url", suggestions: ["ws://", "stdio", "stdio://"] },
        },
        ...wsAuthOptions,
      ],
    },
    {
      name: "features",
      description: "Inspect feature flags",
      subcommands: [
        {
          name: "list",
          description: "List known features with their stage and state",
        },
        {
          name: "enable",
          description: "Enable a feature in config.toml",
          args: {
            name: "feature",
            description: "Feature key (e.g. unified_exec)",
          },
        },
        {
          name: "disable",
          description: "Disable a feature in config.toml",
          args: {
            name: "feature",
            description: "Feature key (e.g. unified_exec)",
          },
        },
      ],
    },
    {
      name: "help",
      description: "Print help for the given subcommand(s)",
    },
  ],
  options: [
    {
      name: ["-c", "--config"],
      description:
        "Override a config.toml value (dotted key path; value parsed as TOML)",
      isPersistent: true,
      isRepeatable: true,
      args: { name: "key=value" },
    },
    {
      name: "--enable",
      description: "Enable a feature (same as -c features.<name>=true)",
      isPersistent: true,
      isRepeatable: true,
      args: { name: "feature" },
    },
    {
      name: "--disable",
      description: "Disable a feature (same as -c features.<name>=false)",
      isPersistent: true,
      isRepeatable: true,
      args: { name: "feature" },
    },
    helpOption,
    versionOption,
    ...tuiOptions,
  ],
  args: {
    name: "prompt",
    description: "Optional user prompt to start the session",
    isOptional: true,
  },
};

export default completionSpec;
