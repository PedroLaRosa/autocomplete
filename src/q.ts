// Amazon Q CLI (q) v1.19.7 (latest aws/amazon-q-developer-cli tag, release build of 2025-11-15, 2026-11-19). Source:
// static inspection only, the `q` binary could not be run here (execution was blocked). Read: the shipped Linux
// x86_64 `q` 1.19.7 zip from desktop-release.q.us-east-1.amazonaws.com (embedded clap help strings and symbol names),
// matched against the clap definitions of q_cli (last public source, aws/amazon-q-developer-cli v1.12.3,
// commit 09aa3cba^) and of chat_cli at tag v1.19.7 (settings, login, chat, agent, mcp, which `q` shares with or
// forwards to `qchat`).
// Removed vs. the 2024 spec: `app` and `onboarding` (no longer root commands). New: `setup --global`, `profile`,
// `inline`, `mcp`, `agent`, `internal multiplexer`, `debug fix-permissions`/`refresh-auth-token`, `login` flags.
// Limits: macOS-only subcommands (input-method, swap-files, brew-uninstall, verify-codesign) are kept from the
// source and are absent from the Linux binary; short flags of new hidden args and the `--rollout` description could
// not be confirmed. Upstream is superseded by Kiro CLI (kirocli 3.5.0 on the same release channel), so `q` is not
// expected to change after 1.19.7.
export const themesGenerator: Fig.Generator = {
  script: ["q", "theme", "--list"],
  postProcess: (output) => {
    const builtinThemes: Fig.Suggestion[] = [
      {
        name: "system",
        icon: "💻",
        priority: 51,
      },
      {
        name: "light",
        icon: "fig://template?color=ffffff&badge=☀️",
        priority: 51,
      },
      {
        name: "dark",
        icon: "fig://template?color=000000&badge=🌙",
        priority: 51,
      },
    ];
    return output
      .split("\n")
      .map(
        (name) =>
          ({
            name,
            icon: "🎨",
          }) as Fig.Suggestion
      )
      .concat(builtinThemes);
  },
};

const outputFormats: Fig.Suggestion[] = [
  { name: "plain", description: "Outputs the results as markdown" },
  { name: "json", description: "Outputs the results as JSON" },
  {
    name: "json-pretty",
    description: "Outputs the results as pretty print JSON",
  },
];

const formatOption = (description: string): Fig.Option => ({
  name: ["-f", "--format"],
  description,
  args: { name: "format", suggestions: outputFormats },
});

const shells: Fig.Suggestion[] = [
  { name: "bash", description: "Bash shell" },
  { name: "zsh", description: "Zsh shell" },
  { name: "fish", description: "Fish shell" },
  { name: "nu", description: "Nu shell" },
];

const debugApps = ["dashboard", "autocomplete"];

const scopes = ["default", "workspace", "global"];

const filepathArg = (name: string): Fig.Arg => ({
  name,
  isOptional: true,
  template: "filepaths",
});

// Shared by `q setup` and `q internal install`
const installOptions: Fig.Option[] = [
  {
    name: "--dotfiles",
    description: "Install only the shell integrations",
  },
  {
    name: "--input-method",
    description: "Prompt input method installation",
  },
  {
    name: "--no-confirm",
    description: "Don't confirm automatic installation",
  },
  {
    name: "--force",
    description: "Force installation of q",
  },
  {
    name: "--global",
    description: "Install q globally",
  },
];

// Shared by `q login` and `q user login`
const loginOptions: Fig.Option[] = [
  {
    name: "--license",
    description: "License type (pro for Identity Center, free for Builder ID)",
    args: {
      name: "license",
      suggestions: [
        { name: "free", description: "Free license with Builder ID" },
        { name: "pro", description: "Pro license with Identity Center" },
      ],
    },
  },
  {
    name: "--identity-provider",
    description: "Identity provider URL (for Identity Center)",
    args: { name: "identity_provider" },
  },
  {
    name: "--region",
    description: "Region (for Identity Center)",
    args: { name: "region" },
  },
  {
    name: "--use-device-flow",
    description:
      "Always use the OAuth device flow for authentication. Useful for instances where browser redirects cannot be handled",
  },
];

// Shared by `q login`, `q logout`, `q whoami`, `q profile` and `q user ...`
const accountSubcommands: Fig.Subcommand[] = [
  {
    name: "login",
    description: "Login",
    options: loginOptions,
  },
  {
    name: "logout",
    description: "Logout",
  },
  {
    name: "whoami",
    description: "Prints details about the current user",
    options: [formatOption("Output format to use")],
  },
  {
    name: "profile",
    description: "Show the profile associated with this idc user",
  },
];

const settingKeys: Fig.Suggestion[] = [
  {
    name: "telemetry.enabled",
    description: "Enable/disable telemetry collection (boolean)",
  },
  {
    name: "telemetryClientId",
    description: "Legacy client identifier for telemetry (string)",
  },
  {
    name: "codeWhisperer.shareCodeWhispererContentWithAWS",
    description: "Share content with CodeWhisperer service (boolean)",
  },
  {
    name: "chat.enableThinking",
    description: "Enable thinking tool for complex reasoning (boolean)",
  },
  {
    name: "chat.enableKnowledge",
    description: "Enable knowledge base functionality (boolean)",
  },
  {
    name: "knowledge.defaultIncludePatterns",
    description: "Default file patterns to include in knowledge base (array)",
  },
  {
    name: "knowledge.defaultExcludePatterns",
    description: "Default file patterns to exclude from knowledge base (array)",
  },
  {
    name: "knowledge.maxFiles",
    description: "Maximum number of files for knowledge indexing (number)",
  },
  {
    name: "knowledge.chunkSize",
    description: "Text chunk size for knowledge processing (number)",
  },
  {
    name: "knowledge.chunkOverlap",
    description: "Overlap between text chunks (number)",
  },
  {
    name: "knowledge.indexType",
    description: "Type of knowledge index to use (string)",
  },
  {
    name: "chat.skimCommandKey",
    description: "Key binding for fuzzy search command (single character)",
  },
  {
    name: "chat.autocompletionKey",
    description:
      "Key binding for autocompletion hint acceptance (single character)",
  },
  {
    name: "chat.enableTangentMode",
    description: "Enable tangent mode feature (boolean)",
  },
  {
    name: "chat.tangentModeKey",
    description: "Key binding for tangent mode toggle (single character)",
  },
  {
    name: "chat.delegateModeKey",
    description: "Key binding for delegate command (single character)",
  },
  {
    name: "introspect.tangentMode",
    description: "Auto-enter tangent mode for introspect questions (boolean)",
  },
  {
    name: "chat.greeting.enabled",
    description: "Show greeting message on chat start (boolean)",
  },
  {
    name: "api.timeout",
    description: "API request timeout in seconds (number)",
  },
  {
    name: "chat.editMode",
    description: "Enable edit mode for chat interface (boolean)",
  },
  {
    name: "chat.enableNotifications",
    description: "Enable desktop notifications (boolean)",
  },
  {
    name: "api.codewhisperer.service",
    description: "CodeWhisperer service endpoint URL (string)",
  },
  {
    name: "api.q.service",
    description: "Q service endpoint URL (string)",
  },
  {
    name: "mcp.initTimeout",
    description: "MCP server initialization timeout (number)",
  },
  {
    name: "mcp.noInteractiveTimeout",
    description: "Non-interactive MCP timeout (number)",
  },
  {
    name: "mcp.loadedBefore",
    description: "Track previously loaded MCP servers (boolean)",
  },
  {
    name: "chat.enableContextUsageIndicator",
    description: "Show context usage percentage in prompt (boolean)",
  },
  {
    name: "chat.defaultModel",
    description: "Default AI model for conversations (string)",
  },
  {
    name: "chat.disableMarkdownRendering",
    description: "Disable markdown formatting in chat (boolean)",
  },
  {
    name: "chat.defaultAgent",
    description: "Default agent configuration (string)",
  },
  {
    name: "chat.disableAutoCompaction",
    description: "Disable automatic conversation summarization (boolean)",
  },
  {
    name: "chat.enableHistoryHints",
    description: "Show conversation history hints (boolean)",
  },
  {
    name: "chat.enableTodoList",
    description: "Enable the todo list feature (boolean)",
  },
  {
    name: "chat.enableCheckpoint",
    description: "Enable the checkpoint feature (boolean)",
  },
  {
    name: "chat.enableDelegate",
    description: "Enable the delegate tool for subagent management (boolean)",
  },
  {
    name: "chat.uiMode",
    description: "Specify UI variant to use (string)",
  },
];

// `q integrations <action> <integration>`: every action takes the same integration subcommands
const integrationSubcommands: Fig.Subcommand[] = [
  {
    name: "dotfiles",
    args: {
      name: "shell",
      description: "Only install the integrations for a single shell",
      isOptional: true,
      suggestions: shells,
    },
  },
  { name: "ssh" },
  { name: "input-method" },
  { name: "vscode" },
  { name: ["intellij-plugin", "jetbrains-plugin"] },
  { name: "autostart-entry" },
  { name: "gnome-shell-extension" },
  { name: "all" },
];

const integrationAction = (
  name: string,
  options: Fig.Option[]
): Fig.Subcommand => ({
  name,
  options,
  subcommands: integrationSubcommands,
});

const silentOption: Fig.Option = {
  name: ["-s", "--silent"],
  description: "Suppress status messages",
};

// `q chat`, `q mcp` and `q agent` forward their arguments to `qchat chat|mcp|agent` (chat_cli v1.19.7)
const mcpScopeOption: Fig.Option = {
  name: "--scope",
  description:
    "Scope. This parameter is only meaningful in the absence of agent name",
  args: { name: "scope", suggestions: scopes },
};

const chatOptions: Fig.Option[] = [
  {
    name: ["-r", "--resume"],
    description: "Resumes the previous conversation from this directory",
  },
  {
    name: "--agent",
    description: "Context profile to use",
    args: { name: "agent" },
  },
  {
    name: "--profile",
    description: "Deprecated alias of --agent",
    deprecated: true,
    args: { name: "profile" },
  },
  {
    name: "--model",
    description: "Current model to use",
    args: { name: "model" },
  },
  {
    name: ["-a", "--trust-all-tools"],
    description:
      "Allows the model to use any tool to run commands without asking for confirmation",
  },
  {
    name: "--trust-tools",
    description:
      "Trust only this set of tools. Example: trust some tools: '--trust-tools=fs_read,fs_write', trust no tools: '--trust-tools='",
    args: { name: "tool_names" },
  },
  {
    name: ["--no-interactive", "--non-interactive"],
    description: "Whether the command should run without expecting user input",
  },
  {
    name: ["-w", "--wrap"],
    description: "Control line wrapping behavior (default: auto-detect)",
    args: {
      name: "wrap",
      suggestions: [
        { name: "always", description: "Always wrap at terminal width" },
        { name: "never", description: "Never wrap (raw output)" },
        {
          name: "auto",
          description: "Auto-detect based on output target (default)",
        },
      ],
    },
  },
];

const agentName = (description?: string): Fig.Option => ({
  name: ["-n", "--name"],
  description,
  args: { name: "name" },
});

const subcommands: Fig.Subcommand[] = [
  {
    name: "hook",
    description: "Hook commands",
    hidden: true,
    subcommands: [
      {
        name: "editbuffer",
        args: [
          { name: "session_id" },
          { name: "integration" },
          { name: "tty" },
          { name: "pid" },
          { name: "histno" },
          { name: "cursor" },
          { name: "text" },
        ],
      },
      { name: "hide" },
      { name: "init", args: [{ name: "pid" }, { name: "tty" }] },
      { name: "integration-ready", args: { name: "integration" } },
      {
        name: "keyboard-focus-changed",
        args: [{ name: "app_identifier" }, { name: "focused_session_id" }],
      },
      { name: "pre-exec", args: [{ name: "pid" }, { name: "tty" }] },
      { name: "prompt", args: [{ name: "pid" }, { name: "tty" }] },
      {
        name: "ssh",
        options: [{ name: "--prompt" }],
        args: [
          { name: "pid" },
          { name: "tty" },
          { name: "control_path" },
          { name: "remote_dest" },
        ],
      },
      {
        name: "clear-autocomplete-cache",
        options: [
          {
            name: "--cli",
            isRepeatable: true,
            args: { name: "cli" },
          },
        ],
      },
    ],
  },
  {
    name: "debug",
    description: "Debug the app",
    subcommands: [
      {
        name: "app",
        description: "Debug the app",
      },
      {
        name: "build",
        description: "Switch to another branch of a Fig.js app",
        args: [
          { name: "app", suggestions: debugApps },
          {
            name: "build",
            isOptional: true,
            suggestions: ["production", "beta", "develop"],
          },
        ],
      },
      {
        name: "autocomplete-window",
        description: "Toggle/set autocomplete window debug mode",
        args: {
          name: "mode",
          isOptional: true,
          suggestions: ["on", "off"],
        },
      },
      {
        name: "logs",
        description: "Show debug logs",
        options: [
          {
            name: "--level",
            args: { name: "level" },
          },
        ],
        args: {
          name: "files",
          isOptional: true,
          isVariadic: true,
        },
      },
      {
        // macOS only
        name: "input-method",
        description: "Input method debugger",
        subcommands: [
          {
            name: "install",
            args: filepathArg("bundle_path"),
          },
          {
            name: "uninstall",
            args: filepathArg("bundle_path"),
          },
          { name: "list" },
          {
            name: "status",
            args: filepathArg("bundle_path"),
          },
          {
            name: "source",
            args: [
              { name: "bundle_identifier" },
              {
                name: "action",
                suggestions: ["enable", "disable", "select", "deselect"],
              },
            ],
          },
        ],
      },
      {
        name: "prompt-accessibility",
        description: "Prompt accessibility",
      },
      {
        name: "sample",
        description: "Sample desktop process",
      },
      {
        // macOS only
        name: "verify-codesign",
        description: "Debug application codesigning",
      },
      {
        name: "accessibility",
        description: "Accessibility",
        args: {
          name: "action",
          isOptional: true,
          suggestions: ["refresh", "reset", "prompt", "open", "status"],
        },
      },
      {
        name: "key-tester",
        description: "Key Tester",
      },
      {
        name: "diagnostics",
        description: "Watches diagnostics",
        options: [
          { name: "--watch" },
          {
            name: "--rate",
            dependsOn: ["--watch"],
            args: { name: "rate" },
          },
        ],
      },
      {
        name: "query-index",
        description:
          "Queries remote repository for updates given the specified metadata",
        options: [
          {
            name: ["-c", "--channel"],
            args: { name: "channel" },
          },
          {
            name: ["-t", "--target-triple"],
            args: { name: "target_triple" },
          },
          {
            name: ["-V", "--variant"],
            args: { name: "variant" },
          },
          {
            name: ["-e", "--version"],
            args: { name: "version" },
          },
          {
            name: ["-r", "--enable-rollout"],
          },
          {
            name: "--is-auto-update",
          },
          {
            name: ["-o", "--override-threshold"],
            args: { name: "override_threshold" },
          },
          {
            name: ["-f", "--file-type"],
            args: { name: "file_type" },
          },
        ],
      },
      {
        name: "devtools",
        description: "Open up the devtools of a specific webview",
        args: { name: "app", suggestions: debugApps },
      },
      {
        name: "get-index",
        description: "Displays remote index",
        options: [
          {
            name: ["-d", "--debug"],
            description: "Display using debug formatting",
          },
        ],
        args: { name: "channel" },
      },
      {
        name: "list-intellij-variants",
        description: "Lists installed IntelliJ variants",
      },
      {
        name: "shell",
        description:
          "Disables sourcing of user shell config and instead uses a minimal shell config",
      },
      {
        name: "fix-permissions",
        description:
          "Update the shell config permissions to have the correct owner and access rights",
      },
      { name: "refresh-auth-token" },
    ],
  },
  {
    name: ["settings", "setting"],
    description: "Customize appearance & behavior",
    subcommands: [
      {
        name: "open",
        description: "Open the settings file",
      },
      {
        name: "list",
        description: "List settings",
        options: [
          {
            name: "--all",
            description: "Show all available settings",
          },
          formatOption("Format of the output"),
        ],
      },
      {
        name: "all",
        description: "List configured settings",
        hidden: true,
        options: [formatOption("Format of the output")],
      },
    ],
    options: [
      {
        name: ["-d", "--delete"],
        description: "Delete a key (No value needed)",
      },
      formatOption("Format of the output"),
    ],
    args: [
      {
        name: "key",
        isOptional: true,
        suggestions: settingKeys,
      },
      {
        name: "value",
        isOptional: true,
      },
    ],
  },
  {
    name: ["setup", "install"],
    description: "Setup cli components",
    options: installOptions,
  },
  {
    name: "uninstall",
    description: "Uninstall Amazon Q",
    hidden: true,
    options: [{ name: ["-y", "--no-confirm"] }],
  },
  {
    name: ["update", "upgrade"],
    description: "Update the Amazon Q application",
    options: [
      {
        name: ["-y", "--non-interactive"],
        description: "Don't prompt for confirmation",
      },
      {
        name: "--relaunch-dashboard",
        description:
          "Relaunch into dashboard after update (false will launch in background)",
      },
      { name: "--rollout" },
    ],
  },
  {
    name: ["diagnostic", "diagnostics"],
    description: "Run diagnostic tests",
    options: [
      formatOption("The format of the output"),
      {
        name: "--force",
        description: "Force limited diagnostic output",
      },
    ],
  },
  {
    name: "init",
    description: "Generate the dotfiles for the given shell",
    options: [
      {
        name: "--rcfile",
        args: { name: "rcfile" },
      },
    ],
    args: [
      {
        name: "shell",
        description: "The shell to generate the dotfiles for",
        suggestions: shells,
      },
      {
        name: "when",
        description: "When to generate the dotfiles for",
        suggestions: ["pre", "post"],
      },
    ],
  },
  {
    name: "theme",
    description: "Get or set theme",
    options: [
      {
        name: "--list",
        exclusiveOn: ["--folder"],
      },
      {
        name: "--folder",
        exclusiveOn: ["--list"],
      },
    ],
    args: {
      name: "theme",
      isOptional: true,
      generators: themesGenerator,
    },
  },
  {
    name: "issue",
    description: "Create a new Github issue",
    options: [
      {
        name: ["-f", "--force"],
        description: "Force issue creation",
      },
    ],
    args: {
      name: "description",
      description: "Issue description",
      isVariadic: true,
      isOptional: true,
    },
  },
  ...accountSubcommands,
  {
    name: "user",
    description: "Manage your account",
    subcommands: accountSubcommands,
  },
  {
    name: "doctor",
    description: "Fix and diagnose common issues",
    options: [
      {
        name: ["-a", "--all"],
        description: "Run all doctor tests, with no fixes",
      },
      {
        name: ["-s", "--strict"],
        description: "Error on warnings",
      },
    ],
  },
  {
    name: "completion",
    description: "Generate CLI completion spec",
    hidden: true,
    args: {
      name: "shell",
      description: "Shell to generate the completion spec for",
      isOptional: true,
      suggestions: [
        { name: "bash", description: "Bash shell completions" },
        { name: "fish", description: "Fish shell completions" },
        { name: "zsh", description: "Zsh shell completions" },
        { name: "fig", description: "Fig completion spec" },
      ],
    },
  },
  {
    name: ["internal", "_"],
    description: "Internal subcommands",
    hidden: true,
    subcommands: [
      {
        name: "pre-cmd",
        description:
          "Command that is run during the PreCmd section of the Amazon Q integrations",
        options: [
          {
            name: "--alias",
            args: { name: "alias" },
          },
        ],
      },
      {
        name: "local-state",
        description: "Change the local-state file",
        subcommands: [
          {
            name: "init",
            description: "Reload the state listener",
          },
          {
            name: "all",
            description: "List all the settings",
            options: [formatOption("Format of the output")],
          },
        ],
        options: [
          {
            name: ["-d", "--delete"],
            description: "Delete the state",
          },
          formatOption("Format of the output"),
        ],
        args: [
          {
            name: "key",
            description: "Key of the state",
            isOptional: true,
          },
          {
            name: "value",
            description: "Value of the state",
            isOptional: true,
          },
        ],
      },
      {
        name: "callback",
        description: "Callback used for the internal pseudoterminal",
        args: [
          { name: "handler_id" },
          { name: "filename", isOptional: true },
          { name: "exit_code", isOptional: true },
        ],
      },
      {
        name: "install",
        description: "Install the Amazon Q cli",
        options: installOptions,
      },
      {
        name: "uninstall",
        description: "Uninstall the Amazon Q cli",
        options: [
          {
            name: "--dotfiles",
            description: "Uninstall only the shell integrations",
          },
          {
            name: "--input-method",
            description: "Uninstall only the input method",
          },
          {
            name: "--binary",
            description: "Uninstall only the binary",
          },
          {
            name: "--ssh",
            description: "Uninstall only the ssh integration",
          },
        ],
      },
      { name: "get-shell" },
      { name: "hostname" },
      {
        name: "should-figterm-launch",
        description: "Detects if Figterm should be launched",
      },
      {
        name: "event",
        options: [
          {
            name: "--name",
            description: "Name of the event",
            args: { name: "name" },
          },
          {
            name: "--payload",
            description: "Payload of the event as a JSON string",
            args: { name: "payload" },
          },
          {
            name: "--apps",
            description: "Apps to send the event to",
            isRepeatable: true,
            args: { name: "apps" },
          },
        ],
      },
      { name: "sockets-dir" },
      { name: "stream-from-socket" },
      {
        name: "figterm-socket-path",
        args: { name: "session_id" },
      },
      {
        name: "ipc",
        options: [
          { name: "--app", exclusiveOn: ["--figterm"] },
          {
            name: "--figterm",
            exclusiveOn: ["--app"],
            args: { name: "figterm" },
          },
          {
            name: "--json",
            args: { name: "json" },
          },
          { name: "--recv" },
        ],
      },
      { name: "uninstall-for-all-users" },
      {
        name: "remove-data-dir",
        options: [{ name: "--force" }],
      },
      { name: "uuidgen" },
      {
        // Linux only
        name: "ibus-bootstrap",
      },
      {
        // Linux only
        name: "detect-sandbox",
        description: "Checks for sandboxing",
      },
      { name: "open-uninstall-page" },
      {
        name: "ssh-local-command",
        description: "Displays prompt to install remote shell integrations",
        args: [{ name: "remote_dest" }, { name: "uuid" }],
      },
      {
        name: "prompt-ssh",
        description:
          "Deprecated: Displays prompt to install remote shell integrations",
        deprecated: true,
        args: { name: "remote_dest" },
      },
      {
        // macOS only
        name: "attempt-to-finish-input-method-installation",
        args: filepathArg("bundle_path"),
      },
      {
        name: "dump-state",
        args: {
          name: "component",
          suggestions: ["figterm", "web-notifications", "platform"],
        },
      },
      {
        name: "finish-update",
        description: "Currently only used by macOS after finishing an update",
        options: [
          { name: "--relaunch-dashboard" },
          {
            name: "--delete-bundle",
            args: { name: "delete_bundle" },
          },
        ],
      },
      {
        // macOS only
        name: "swap-files",
        options: [{ name: "--not-same-bundle-name" }],
        args: [
          { name: "from", template: "filepaths" },
          { name: "to", template: "filepaths" },
        ],
      },
      {
        // macOS only
        name: "brew-uninstall",
        options: [{ name: "--zap" }],
      },
      {
        name: "generate-ssh",
        description: "Generates an SSH configuration file",
        options: [
          {
            name: "--remote-host",
            description: "The remote host",
            args: { name: "remote_host" },
          },
          {
            name: "--remote-port",
            description: "The remote port",
            args: { name: "remote_port" },
          },
          {
            name: "--remote-username",
            description: "The remote username",
            args: { name: "remote_username" },
          },
        ],
      },
      {
        name: "inline-shell-completion",
        options: [
          {
            name: "--buffer",
            args: { name: "buffer" },
          },
        ],
      },
      {
        name: "inline-shell-completion-accept",
        options: [
          {
            name: "--buffer",
            args: { name: "buffer" },
          },
          {
            name: "--suggestion",
            args: { name: "suggestion" },
          },
        ],
      },
      {
        name: ["multiplexer", "mux"],
        options: [
          { name: "--websocket" },
          {
            name: "--port",
            args: { name: "port" },
          },
        ],
      },
    ],
  },
  {
    name: "launch",
    description: "Launch the desktop app",
  },
  {
    name: "quit",
    description: "Quit the desktop app",
  },
  {
    name: "restart",
    description: "Restart the desktop app",
    args: {
      name: "process",
      description: "The process to restart",
      isOptional: true,
      suggestions: ["app"],
    },
  },
  {
    name: ["integrations", "integration"],
    description: "Manage system integrations",
    subcommands: [
      integrationAction("install", [silentOption]),
      integrationAction("uninstall", [silentOption]),
      integrationAction("reinstall", [silentOption]),
      integrationAction("status", [formatOption("Format of the output")]),
    ],
  },
  {
    name: ["translate", "ai"],
    description: "Natural Language to Shell translation",
    options: [
      {
        name: ["-n", "--n"],
        description: "Number of completions to generate (must be <=5)",
        hidden: true,
        args: { name: "n" },
      },
    ],
    args: {
      name: "input",
      isVariadic: true,
      isOptional: true,
    },
  },
  {
    name: "telemetry",
    description: "Enable/disable telemetry",
    hidden: true,
    subcommands: [
      { name: "enable" },
      { name: "disable" },
      {
        name: "status",
        options: [formatOption("Format of the output")],
      },
    ],
  },
  {
    name: "version",
    description: "Version",
    hidden: true,
    options: [
      {
        name: "--changelog",
        description:
          "Show the changelog (use --changelog=all for all versions, or --changelog=x.x.x for a specific version)",
        args: { name: "changelog", isOptional: true },
      },
    ],
  },
  {
    name: "dashboard",
    description: "Open the dashboard",
  },
  {
    name: "chat",
    description: "AI assistant in your terminal",
    options: chatOptions,
    args: {
      name: "input",
      description: "The first question to ask",
      isOptional: true,
    },
  },
  {
    name: "mcp",
    description: "Model Context Protocol (MCP)",
    subcommands: [
      {
        name: "add",
        description: "Add or replace a configured server",
        options: [
          {
            name: "--name",
            description: "Name for the server",
            args: { name: "name" },
          },
          mcpScopeOption,
          {
            name: "--command",
            description: "The command used to launch the server",
            args: { name: "command" },
          },
          {
            name: "--args",
            description:
              "Arguments to pass to the command (repeat the flag, comma-separate the values, or pass a JSON array)",
            isRepeatable: true,
            args: { name: "args" },
          },
          {
            name: "--agent",
            description:
              "Where to add the server to. If an agent name is not supplied, the changes shall be made to the global mcp.json",
            args: { name: "agent" },
          },
          {
            name: "--env",
            description:
              "Environment variables to use when launching the server (NAME=VALUE, comma-separated)",
            isRepeatable: true,
            args: { name: "env" },
          },
          {
            name: "--timeout",
            description: "Server launch timeout, in milliseconds",
            args: { name: "timeout" },
          },
          {
            name: "--disabled",
            description: "Whether the server should be disabled (not loaded)",
          },
          {
            name: "--force",
            description: "Overwrite an existing server with the same name",
          },
        ],
      },
      {
        name: ["remove", "rm"],
        description: "Remove a server from the MCP configuration",
        options: [
          {
            name: "--name",
            args: { name: "name" },
          },
          mcpScopeOption,
          {
            name: "--agent",
            args: { name: "agent" },
          },
        ],
      },
      {
        name: "list",
        description: "List configured servers",
        args: {
          name: "scope",
          isOptional: true,
          suggestions: scopes,
        },
      },
      {
        name: "import",
        description: "Import a server configuration from another file",
        options: [
          {
            name: "--file",
            args: { name: "file", template: "filepaths" },
          },
          {
            name: "--force",
            description: "Overwrite an existing server with the same name",
          },
        ],
        args: {
          name: "scope",
          isOptional: true,
          suggestions: scopes,
        },
      },
      {
        name: "status",
        description: "Get the status of a configured server",
        options: [
          {
            name: "--name",
            args: { name: "name" },
          },
        ],
      },
    ],
  },
  {
    name: "inline",
    description: "Inline shell completions",
    subcommands: [
      {
        name: "enable",
        description: "Enables inline",
      },
      {
        name: "disable",
        description: "Disables inline",
      },
      {
        name: "status",
        description: "Shows the status of inline",
      },
      {
        name: "set-customization",
        description: "Select a customization if you have any available",
        args: {
          name: "arn",
          description: "The arn of the customization to use",
          isOptional: true,
        },
      },
      {
        name: "show-customizations",
        description: "Show the available customizations",
        options: [formatOption("Format of the output")],
      },
    ],
  },
  {
    name: "agent",
    description: "Agent root commands",
    subcommands: [
      {
        name: "list",
        description:
          "List the available agents. Note that local agents are only discovered if the command is invoked at a directory that contains them",
      },
      {
        name: "create",
        description:
          "Create an agent config. If path is not provided, Q CLI shall create this config in the global agent directory",
        options: [
          agentName("Name of the agent to be created"),
          {
            name: ["-d", "--directory"],
            description:
              "The directory where the agent will be saved. If not provided, the agent will be saved in the global agent directory",
            args: { name: "directory", template: "folders" },
          },
          {
            name: ["-f", "--from"],
            description:
              "The name of an agent that shall be used as the starting point for the agent creation",
            args: { name: "from" },
          },
        ],
      },
      {
        name: "edit",
        description: "Edit an existing agent config",
        options: [agentName("Name of the agent to edit")],
      },
      {
        name: "validate",
        description: "Validate a config with the given path",
        options: [
          {
            name: ["-p", "--path"],
            args: { name: "path", template: "filepaths" },
          },
        ],
      },
      {
        name: "migrate",
        description: "Migrate profiles to agent",
        options: [{ name: "--force" }],
      },
      {
        name: "set-default",
        description: "Define a default agent to use when q chat launches",
        options: [agentName()],
      },
    ],
  },
];

const completion: Fig.Spec = {
  name: "q",
  description: "The Amazon Q CLI",
  subcommands: [
    ...subcommands,
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
      subcommands: subcommands
        .filter(({ hidden }) => !hidden)
        .map(({ name, description }) => ({ name, description })),
    },
  ],
  options: [
    {
      name: ["-v", "--verbose"],
      description: "Increase logging verbosity",
      isRepeatable: true,
      isPersistent: true,
    },
    {
      name: "--help-all",
      description: "Print help for all subcommands",
    },
    {
      name: ["-h", "--help"],
      description: "Print help",
      isPersistent: true,
    },
    {
      name: ["-V", "--version"],
      description: "Print version",
    },
  ],
};

export default completion;
