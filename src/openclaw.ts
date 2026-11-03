// OpenClaw CLI (npm: openclaw, repo: github.com/openclaw/openclaw).
// Generated from the commander registrations at tag v2026.10.10 (src/cli, src/commands and the
// bundled browser, canvas, file-transfer, mcp-relay, memory-core, memory-wiki, oc-path,
// onepassword, policy, reef, vault and workboard plugins).
// ponytail: channel names are a static list of known channel plugins. Installed third-party
// channels, per-channel `channels add` setup flags, `--auth-choice` values and API-key flags of
// non-bundled providers are resolved at runtime from plugin manifests, so they are omitted.

const channels: string[] = [
  "telegram",
  "whatsapp",
  "discord",
  "slack",
  "signal",
  "imessage",
  "irc",
  "googlechat",
  "msteams",
  "matrix",
  "mattermost",
  "line",
  "feishu",
  "nostr",
  "twitch",
  "zalo",
  "zalouser",
  "nextcloud-talk",
  "synology-chat",
  "tlon",
  "sms",
  "reef",
];

const onboardFlowOptions: Fig.Option[] = [
  { name: "--classic", description: "Use the classic multi-step setup wizard" },
  {
    name: "--tui",
    description: "Use the terminal hatch instead of the browser handoff",
  },
  {
    name: "--accept-risk",
    description:
      "Acknowledge that agents are powerful and full system access is risky (required for --non-interactive)",
  },
  {
    name: "--flow",
    description: "Onboard flow: quickstart|advanced|manual|import",
    args: {
      name: "flow",
      suggestions: ["quickstart", "advanced", "manual", "import"],
    },
  },
  {
    name: "--mode",
    description: "Onboard mode: local|remote",
    args: { name: "mode", suggestions: ["local", "remote"] },
  },
];

const onboardAuthOptions: Fig.Option[] = [
  { name: "--auth-choice", description: "Auth", args: { name: "choice" } },
  {
    name: "--token-provider",
    description:
      "Token provider id (non-interactive; used with --auth-choice token)",
    args: { name: "id" },
  },
  {
    name: "--token",
    description: "Token value (non-interactive; used with --auth-choice token)",
    args: { name: "token" },
  },
  {
    name: "--token-profile-id",
    description:
      "Auth profile id (non-interactive; default: <provider>:manual)",
    args: { name: "id" },
  },
  {
    name: "--token-expires-in",
    description: "Optional token expiry duration (e.g. 365d, 12h)",
    args: { name: "duration" },
  },
  {
    name: "--secret-input-mode",
    description:
      "Credential persistence mode: plaintext|ref (default: plaintext)",
    args: { name: "mode", suggestions: ["plaintext", "ref"] },
  },
  {
    name: "--cloudflare-ai-gateway-account-id",
    description: "Cloudflare Account ID",
    args: { name: "id" },
  },
  {
    name: "--cloudflare-ai-gateway-gateway-id",
    description: "Cloudflare AI Gateway ID",
    args: { name: "id" },
  },
  { name: "--fal-api-key", description: "Fal API key", args: { name: "key" } },
  {
    name: "--kie-api-key",
    description: "Kie AI API key",
    args: { name: "key" },
  },
  {
    name: "--runway-api-key",
    description: "Runway API key",
    args: { name: "key" },
  },
  {
    name: "--litellm-api-key",
    description: "LiteLLM API key",
    args: { name: "key" },
  },
  {
    name: "--alibaba-model-studio-api-key",
    description: "Alibaba Model Studio API key",
    args: { name: "key" },
  },
  {
    name: "--lmstudio-api-key",
    description: "LM Studio API key",
    args: { name: "key" },
  },
  {
    name: "--together-api-key",
    description: "Together AI API key",
    args: { name: "key" },
  },
  {
    name: "--minimax-api-key",
    description: "MiniMax API key",
    args: { name: "key" },
  },
  {
    name: "--nvidia-api-key",
    description: "NVIDIA API key",
    args: { name: "key" },
  },
  {
    name: "--huggingface-api-key",
    description: "Hugging Face API key (HF token)",
    args: { name: "key" },
  },
  {
    name: "--clawrouter-api-key",
    description: "ClawRouter proxy key",
    args: { name: "key" },
  },
  { name: "--xai-api-key", description: "XAI API key", args: { name: "key" } },
  {
    name: "--ollama-cloud-api-key",
    description: "Ollama Cloud API key",
    args: { name: "key" },
  },
  {
    name: "--openrouter-api-key",
    description: "OpenRouter API key",
    args: { name: "key" },
  },
  {
    name: "--opencode-go-api-key",
    description: "OpenCode API key (Go catalog)",
    args: { name: "key" },
  },
  {
    name: "--openai-api-key",
    description: "OpenAI API Key",
    args: { name: "key" },
  },
  {
    name: "--anthropic-api-key",
    description: "Anthropic API key",
    args: { name: "key" },
  },
  {
    name: "--gemini-api-key",
    description: "Gemini API key",
    args: { name: "key" },
  },
  {
    name: "--github-copilot-token",
    description: "GitHub Copilot OAuth token",
    args: { name: "token" },
  },
  {
    name: "--custom-base-url",
    description: "Custom provider base URL",
    args: { name: "url" },
  },
  {
    name: "--custom-api-key",
    description: "Custom provider API key (optional)",
    args: { name: "key" },
  },
  {
    name: "--custom-model-id",
    description: "Custom provider model ID",
    args: { name: "id" },
  },
  {
    name: "--custom-provider-id",
    description: "Custom provider ID (optional; auto-derived by default)",
    args: { name: "id" },
  },
  {
    name: "--custom-compatibility",
    description:
      "Custom provider API compatibility: openai|openai-responses|anthropic (default: openai)",
    args: {
      name: "mode",
      suggestions: ["openai", "openai-responses", "anthropic"],
    },
  },
  {
    name: "--custom-image-input",
    description: "Mark the custom provider model as image-capable",
  },
  {
    name: "--custom-text-input",
    description: "Mark the custom provider model as text-only",
  },
];

const onboardGatewayOptions: Fig.Option[] = [
  {
    name: "--gateway-port",
    description: "Gateway port",
    args: { name: "port" },
  },
  {
    name: "--gateway-bind",
    description: "Gateway bind: loopback|tailnet|lan|auto|custom",
    args: {
      name: "mode",
      suggestions: ["loopback", "tailnet", "lan", "auto", "custom"],
    },
  },
  {
    name: "--gateway-auth",
    description: "Gateway auth: token|password",
    args: { name: "mode", suggestions: ["token", "password"] },
  },
  {
    name: "--gateway-token",
    description: "Gateway token (token auth)",
    args: { name: "token" },
  },
  {
    name: "--gateway-token-ref-env",
    description:
      "Gateway token SecretRef env var name (token auth; e.g. OPENCLAW_GATEWAY_TOKEN)",
    args: { name: "name" },
  },
  {
    name: "--gateway-password",
    description: "Gateway password (password auth)",
    args: { name: "password" },
  },
];

const onboardRemoteOptions: Fig.Option[] = [
  {
    name: "--remote-url",
    description: "Remote Gateway WebSocket URL",
    args: { name: "url" },
  },
  {
    name: "--remote-token",
    description: "Remote Gateway token (optional)",
    args: { name: "token" },
  },
  {
    name: "--remote-password",
    description: "Remote Gateway password (optional)",
    args: { name: "password" },
  },
];

const gatewayClientOptions: Fig.Option[] = [
  {
    name: "--url",
    description:
      "Gateway WebSocket URL (defaults to gateway.remote.url when configured)",
    args: { name: "url" },
  },
  { name: "--port", description: "Local Gateway port", args: { name: "port" } },
  {
    name: "--token",
    description: "Gateway token (if required)",
    args: { name: "token" },
  },
  {
    name: "--password",
    description: "Gateway password (if required)",
    args: { name: "password" },
  },
  { name: "--timeout", description: "Timeout in ms", args: { name: "ms" } },
  { name: "--expect-final", description: "Wait for final response (agent)" },
];

const migrationSourceOptions: Fig.Option[] = [
  {
    name: "--from",
    description: "Source directory to migrate from",
    args: { name: "path", template: "folders" },
  },
  {
    name: "--agent",
    description: "Target agent (default: configured default agent)",
    args: { name: "id" },
  },
  {
    name: "--include-secrets",
    description: "Import supported credentials and secrets",
  },
  {
    name: "--no-auth-credentials",
    description: "Skip auth credential migration",
  },
  {
    name: "--overwrite",
    description: "Overwrite conflicting target files after item-level backups",
  },
];

const migrationSelectionOptions: Fig.Option[] = [
  {
    name: "--skill",
    description:
      "Select one skill to migrate by name or item id; repeat for multiple skills",
    args: { name: "name" },
    isRepeatable: true,
  },
  {
    name: "--plugin",
    description:
      "Select one Codex plugin to migrate by name or item id; repeat for multiple plugins",
    args: { name: "name" },
    isRepeatable: true,
  },
  {
    name: "--item",
    description:
      "Select one exact migration item id; repeat for multiple items",
    args: { name: "id" },
    isRepeatable: true,
  },
];

const messageRoleOptions: Fig.Option[] = [
  {
    name: "--guild-id",
    description: "Guild id",
    args: { name: "id" },
    isRequired: true,
  },
  {
    name: "--user-id",
    description: "User id",
    args: { name: "id" },
    isRequired: true,
  },
  {
    name: "--role-id",
    description: "Role id",
    args: { name: "id" },
    isRequired: true,
  },
];

const messageVoiceOptions: Fig.Option[] = [
  {
    name: "--guild-id",
    description: "Guild id",
    args: { name: "id" },
    isRequired: true,
  },
  {
    name: "--user-id",
    description: "User id",
    args: { name: "id" },
    isRequired: true,
  },
];

const sessionsListOptions: Fig.Option[] = [
  { name: "--json", description: "Output as JSON" },
  { name: "--verbose", description: "Verbose logging" },
  {
    name: "--store",
    description: "Legacy session store selector path",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--agent",
    description: "Agent id to inspect (required for multiple explicit agents)",
    args: { name: "id" },
  },
  {
    name: "--all-agents",
    description: "Aggregate sessions across all configured agents",
  },
  {
    name: "--active",
    description: "Only show sessions updated within the past N minutes",
    args: { name: "minutes" },
  },
  {
    name: "--limit",
    description:
      'Max sessions to show (default: 100; use "all" for full output)',
    args: { name: "count" },
  },
];

const sessionsGatewayOptions: Fig.Option[] = [
  {
    name: "--agent",
    description: "Agent id that owns the session (required for global keys)",
    args: { name: "id" },
  },
  {
    name: "--url",
    description:
      "Gateway WebSocket URL (defaults to gateway.remote.url when configured)",
    args: { name: "url" },
  },
  {
    name: "--token",
    description: "Gateway token (if required)",
    args: { name: "token" },
  },
  {
    name: "--password",
    description: "Gateway password (password auth)",
    args: { name: "password" },
  },
  {
    name: "--timeout",
    description: "RPC timeout in milliseconds",
    args: { name: "ms" },
  },
  { name: "--json", description: "Output JSON" },
];

const gatewayRunCommandOptions: Fig.Option[] = [
  {
    name: "--port",
    description: "Port for the gateway WebSocket",
    args: { name: "port" },
  },
  {
    name: "--bind",
    description:
      'Bind mode ("loopback"|"lan"|"tailnet"|"auto"|"custom"). Defaults to config gateway.bind (or loopback)',
    args: {
      name: "mode",
      suggestions: ["loopback", "lan", "tailnet", "auto", "custom"],
    },
  },
  {
    name: "--token",
    description:
      "Shared token required in connect.params.auth.token (default: OPENCLAW_GATEWAY_TOKEN env if set)",
    args: { name: "token" },
  },
  {
    name: "--auth",
    description:
      'Gateway auth mode ("none"|"token"|"password"|"trusted-proxy")',
    args: {
      name: "mode",
      suggestions: ["none", "token", "password", "trusted-proxy"],
    },
  },
  {
    name: "--password",
    description: "Password for auth mode=password",
    args: { name: "password" },
  },
  {
    name: "--password-file",
    description: "Read gateway password from file",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--tailscale",
    description: 'Tailscale exposure mode ("off"|"serve"|"funnel")',
    args: { name: "mode", suggestions: ["off", "serve", "funnel"] },
  },
  {
    name: "--allow-unconfigured",
    description:
      "Allow gateway start without enforcing gateway.mode=local in config (does not repair config)",
  },
  {
    name: "--dev",
    description: "Create a dev config + workspace if missing (no BOOTSTRAP.md)",
  },
  {
    name: "--ambient-channels",
    description:
      "Allow the gateway to auto-configure channels from ambient environment variables",
  },
  {
    name: "--dev-ambient-channels",
    description: "Deprecated alias for --ambient-channels",
  },
  {
    name: "--reset",
    description:
      "Reset dev config + credentials + sessions + workspace (requires --dev)",
  },
  {
    name: "--force",
    description:
      "Kill any existing listener on the target port before starting",
  },
  { name: "--verbose", description: "Verbose logging to stdout/stderr" },
  {
    name: "--cli-backend-logs",
    description:
      "Only show CLI backend logs in the console (includes stdout/stderr)",
  },
  {
    name: "--claude-cli-logs",
    description: "Deprecated alias for --cli-backend-logs",
  },
  {
    name: "--ws-log",
    description: 'WebSocket log style ("auto"|"full"|"compact")',
    args: { name: "style", suggestions: ["auto", "full", "compact"] },
  },
  { name: "--compact", description: 'Alias for "--ws-log compact"' },
  { name: "--raw-stream", description: "Log raw model stream events to jsonl" },
  {
    name: "--raw-stream-path",
    description: "Raw stream jsonl path",
    args: { name: "path", template: "filepaths" },
  },
];

const gatewayServiceCommandsOptions: Fig.Option[] = [
  {
    name: "--url",
    description: "Gateway WebSocket URL (defaults to config/remote/local)",
    args: { name: "url" },
  },
  { name: "--port", description: "Local Gateway port", args: { name: "port" } },
  {
    name: "--token",
    description: "Gateway token (if required)",
    args: { name: "token" },
  },
  {
    name: "--password",
    description: "Gateway password (password auth)",
    args: { name: "password" },
  },
  { name: "--timeout", description: "Timeout in ms", args: { name: "ms" } },
  { name: "--no-probe", description: "Skip RPC check" },
  {
    name: "--require-rpc",
    description: "Exit non-zero when the RPC check fails",
  },
  { name: "--deep", description: "Scan system-level services" },
  { name: "--json", description: "Output JSON" },
];

const gatewayInstallOptions: Fig.Option[] = [
  { name: "--port", description: "Gateway port", args: { name: "port" } },
  {
    name: "--runtime",
    description: "Daemon runtime (node|bun). Default: node",
    args: { name: "runtime", suggestions: ["node", "bun"] },
  },
  {
    name: "--runtime-path",
    description: "Pin an absolute Node/Bun executable path",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--token",
    description: "Gateway token (token auth)",
    args: { name: "token" },
  },
  {
    name: "--wrapper",
    description: "Executable wrapper for generated service ProgramArguments",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--allow-unconfigured",
    description: "Allow the service to start without gateway.mode=local",
  },
  {
    name: "--force",
    description:
      "Reinstall if already installed (may restart a running Gateway)",
  },
  { name: "--json", description: "Output JSON" },
];

const gatewayStopOptions: Fig.Option[] = [
  { name: "--force", description: "Allow stop from a non-interactive shell" },
  { name: "--json", description: "Output JSON" },
  {
    name: "--disable",
    description:
      "Persistently suppress KeepAlive/RunAtLoad so the gateway does not respawn until next start (launchd only)",
  },
];

const gatewayRestartOptions: Fig.Option[] = [
  {
    name: "--preserve-definition",
    description: "Keep the native service definition",
  },
  {
    name: "--force",
    description:
      "Begin restart now; drain admitted work within the shutdown budget",
  },
  {
    name: "--safe",
    description:
      "Request an OpenClaw-aware restart after active work drains (bounded wait; may force after the timeout expires)",
  },
  {
    name: "--skip-deferral",
    description:
      "Bypass the safe-restart active-work deferral gate; close-stage reply drain still applies; requires --safe",
  },
  {
    name: "--wait",
    description:
      "Wait duration before restart (ms, 10s, 5m; 0 waits indefinitely). For non-safe restarts (plain restart); not compatible with --force or --safe",
    args: { name: "duration" },
  },
  { name: "--json", description: "Output JSON" },
];

const accountOptions: Fig.Option[] = [
  {
    name: "--url",
    description: "Gateway WebSocket URL (defaults to the configured Gateway)",
    args: { name: "url" },
  },
  { name: "--port", description: "Local Gateway port", args: { name: "port" } },
  {
    name: "--token-file",
    description: "Read the Gateway token from a file",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--password-file",
    description: "Read the Gateway password from a file",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--timeout",
    description: "Gateway connection and request timeout in ms",
    args: { name: "ms" },
  },
  { name: "--json", description: "Output JSON" },
];

const modelsCliOptions: Fig.Option[] = [
  { name: "--json", description: "Output JSON" },
  { name: "--plain", description: "Plain output" },
];

const modelsAuthOrderSetOptions: Fig.Option[] = [
  {
    name: "--provider",
    description: "Provider id (e.g. anthropic)",
    args: { name: "name" },
    isRequired: true,
  },
  {
    name: "--agent",
    description: "Agent id (default: configured default agent)",
    args: { name: "id" },
  },
];

const localProvidersCommandOptions: Fig.Option[] = [
  {
    name: "--agent",
    description: "Agent whose provider state should be inspected",
    args: { name: "id" },
  },
  { name: "--json", description: "Output JSON" },
];

const transportTtsCommandOptions: Fig.Option[] = [
  { name: "--local", description: "Force local execution" },
  { name: "--gateway", description: "Force gateway execution" },
  { name: "--json", description: "Output JSON" },
];

const nodesCallOptions: Fig.Option[] = [
  {
    name: "--url",
    description:
      "Gateway WebSocket URL (defaults to gateway.remote.url when configured)",
    args: { name: "url" },
  },
  {
    name: "--token",
    description: "Gateway token (if required)",
    args: { name: "token" },
  },
  { name: "--timeout", description: "Timeout in ms", args: { name: "ms" } },
  { name: "--json", description: "Output JSON" },
];

const allowlistMutationCommandOptions: Fig.Option[] = [
  {
    name: "--node",
    description: "Target node id/name/IP",
    args: { name: "node" },
  },
  { name: "--gateway", description: "Force gateway approvals" },
  {
    name: "--agent",
    description: 'Agent id (defaults to "*")',
    args: { name: "id" },
  },
];

const nodesStatusCommandsOptions: Fig.Option[] = [
  { name: "--connected", description: "Only show connected nodes" },
  {
    name: "--last-connected",
    description: "Only show nodes connected within duration (e.g. 24h)",
    args: { name: "duration" },
  },
];

const nodesCanvasCommandsOptions: Fig.Option[] = [
  {
    name: "--node",
    description: "Node id, name, or IP",
    args: { name: "idOrNameOrIp" },
    isRequired: true,
  },
  {
    name: "--invoke-timeout",
    description: "Node invoke timeout in ms",
    args: { name: "ms" },
  },
];

const usersGatewayOptions: Fig.Option[] = [
  {
    name: "--url",
    description:
      "Gateway WebSocket URL (defaults to gateway.remote.url when configured)",
    args: { name: "url" },
  },
  {
    name: "--token",
    description: "Gateway token (if required)",
    args: { name: "token" },
  },
  { name: "--timeout", description: "Timeout in ms", args: { name: "ms" } },
  { name: "--json", description: "Output JSON" },
];

const nodeCommandOptions: Fig.Option[] = [
  {
    name: "--commands",
    description:
      "Advertise only these exact command ids (comma-separated; repeatable)",
    args: { name: "ids" },
    isRepeatable: true,
  },
  {
    name: "--all-commands",
    description:
      "Advertise the full default command surface and forget any saved --commands allowlist",
  },
];

const nodeGatewayOptions: Fig.Option[] = [
  { name: "--host", description: "Gateway host", args: { name: "host" } },
  { name: "--port", description: "Gateway port", args: { name: "port" } },
  {
    name: "--context-path",
    description: "Gateway WebSocket context path (e.g. /openclaw-gw)",
    args: { name: "path" },
  },
  { name: "--tls", description: "Use TLS for the gateway connection" },
  { name: "--no-tls", description: "Disable TLS for the gateway connection" },
  {
    name: "--tls-fingerprint",
    description: "Expected TLS certificate fingerprint (sha256)",
    args: { name: "sha256" },
  },
  {
    name: "--node-id",
    description: "Override the generated node instance id",
    args: { name: "id" },
  },
  {
    name: "--display-name",
    description: "Override node display name",
    args: { name: "name" },
  },
];

const tuiOptions: Fig.Option[] = [
  {
    name: "--url",
    description:
      "Gateway WebSocket URL (defaults to gateway.remote.url when configured)",
    args: { name: "url" },
  },
  {
    name: "--token",
    description: "Gateway token (if required)",
    args: { name: "token" },
  },
  {
    name: "--password",
    description: "Gateway password (if required)",
    args: { name: "password" },
  },
  {
    name: "--tls-fingerprint",
    description: "Expected Gateway TLS certificate fingerprint",
    args: { name: "sha256" },
  },
];

const proxyCliOptions: Fig.Option[] = [
  { name: "--host", description: "Bind host", args: { name: "host" } },
  { name: "--port", description: "Bind port", args: { name: "port" } },
];

const hooksCliOptions: Fig.Option[] = [
  { name: "--agent", description: "Agent id to inspect", args: { name: "id" } },
  { name: "--json", description: "Output as JSON" },
];

const gmailDeliveryOptions: Fig.Option[] = [
  {
    name: "--subscription",
    description: "Pub/Sub subscription name",
    args: { name: "name" },
  },
  {
    name: "--label",
    description: "Gmail label to watch",
    args: { name: "label" },
  },
  {
    name: "--hook-url",
    description: "OpenClaw hook URL",
    args: { name: "url" },
  },
  {
    name: "--hook-token",
    description: "OpenClaw hook token",
    args: { name: "token" },
  },
  {
    name: "--push-token",
    description: "Push token for gog watch serve",
    args: { name: "token" },
  },
  {
    name: "--bind",
    description: "Gog watch serve bind host",
    args: { name: "host" },
  },
  {
    name: "--port",
    description: "Gog watch serve port",
    args: { name: "port" },
  },
  {
    name: "--path",
    description: "Gog watch serve path",
    args: { name: "path" },
  },
  { name: "--include-body", description: "Include email body snippets" },
  {
    name: "--max-bytes",
    description: "Max bytes for body snippets",
    args: { name: "n" },
  },
  {
    name: "--renew-minutes",
    description: "Renew watch every N minutes",
    args: { name: "n" },
  },
  {
    name: "--tailscale",
    description: "Expose push endpoint via tailscale (funnel|serve|off)",
    args: { name: "mode", suggestions: ["funnel", "serve", "off"] },
  },
  {
    name: "--tailscale-path",
    description: "Path for tailscale serve/funnel",
    args: { name: "path" },
  },
  {
    name: "--tailscale-target",
    description: "Tailscale serve/funnel target (port, host:port, or URL)",
    args: { name: "target" },
  },
];

const qrCliOptions: Fig.Option[] = [
  {
    name: "--remote",
    description:
      "Use gateway.remote.url and gateway.remote token/password (ignores device-pair publicUrl)",
  },
  {
    name: "--url",
    description: "Override gateway URL used in the setup payload",
    args: { name: "url" },
  },
  {
    name: "--public-url",
    description: "Override gateway public URL used in the setup payload",
    args: { name: "url" },
  },
  {
    name: "--token",
    description: "Override gateway token for setup payload",
    args: { name: "token" },
  },
  {
    name: "--password",
    description: "Override gateway password for setup payload",
    args: { name: "password" },
  },
  {
    name: "--limited",
    description: "Pair with limited operator access (omit operator.admin)",
  },
  {
    name: "--voice-node",
    description: "Pair a voice node with node, read, and Talk access only",
  },
  { name: "--setup-code-only", description: "Print only the setup code" },
  { name: "--no-ascii", description: "Skip ASCII QR rendering" },
  { name: "--json", description: "Output JSON" },
];

const channelOptions: Fig.Option[] = [
  {
    name: "--channel",
    description: "Channel (auto when only one is configured)",
    args: { name: "name", suggestions: channels },
  },
  {
    name: "--account",
    description: "Account id (accountId)",
    args: { name: "id" },
  },
  { name: "--json", description: "Output JSON" },
];

const directoryCliOptions: Fig.Option[] = [
  {
    name: "--query",
    description: "Optional search query",
    args: { name: "text" },
  },
  { name: "--limit", description: "Limit results", args: { name: "n" } },
];

const skillsCliOptions: Fig.Option[] = [
  {
    name: "--agent",
    description:
      "Target agent workspace (defaults to cwd-inferred, then default agent)",
    args: { name: "id" },
  },
  { name: "--json", description: "Output as JSON" },
];

const wikiSearchConfigOptions: Fig.Option[] = [
  {
    name: "--backend",
    description: "Search backend (shared, local)",
    args: { name: "backend" },
  },
  {
    name: "--corpus",
    description: "Search corpus (wiki, memory, all)",
    args: { name: "corpus" },
  },
];

const wikiApplyMutationOptions: Fig.Option[] = [
  {
    name: "--source-id",
    description: "Source id",
    args: { name: "id" },
    isRepeatable: true,
  },
  {
    name: "--contradiction",
    description: "Contradiction note",
    args: { name: "text" },
    isRepeatable: true,
  },
  {
    name: "--question",
    description: "Open question",
    args: { name: "text" },
    isRepeatable: true,
  },
  {
    name: "--confidence",
    description: "Confidence score between 0 and 1",
    args: { name: "n" },
  },
  { name: "--status", description: "Page status", args: { name: "status" } },
];

const pathResolveOptions: Fig.Option[] = [
  { name: "--json", description: "Force JSON output" },
  { name: "--human", description: "Force human output" },
  {
    name: "--cwd",
    description: "Resolve file slot against this directory",
    args: { name: "dir", template: "folders" },
  },
  {
    name: "--file",
    description: "Override the file slot's resolved path",
    args: { name: "file", template: "filepaths" },
  },
];

const globalOptions: Fig.Option[] = [
  {
    name: "--container",
    description:
      "Run the CLI inside a running Podman/Docker container named <name> (default: env OPENCLAW_CONTAINER)",
    args: { name: "name" },
    isPersistent: true,
  },
  {
    name: "--dev",
    description:
      "Dev profile: isolate state under ~/.openclaw-dev, default gateway port 19001, and shift derived ports (browser/canvas)",
    isPersistent: true,
  },
  {
    name: "--profile",
    description:
      "Use a named profile (isolates OPENCLAW_STATE_DIR/OPENCLAW_CONFIG_PATH under ~/.openclaw-<name>)",
    args: { name: "name" },
    isPersistent: true,
  },
  {
    name: "--log-level",
    description: "Global log level override for file + console",
    args: {
      name: "level",
      suggestions: [
        "silent",
        "fatal",
        "error",
        "warn",
        "info",
        "debug",
        "trace",
      ],
    },
    isPersistent: true,
  },
  {
    name: "--no-color",
    description: "Disable ANSI colors",
    isPersistent: true,
  },
  {
    name: ["-h", "--help"],
    description: "Display help for command",
    isPersistent: true,
  },
  {
    name: ["-V", "--version"],
    description: "Output the version number",
  },
];

const completionSpec: Fig.Spec = {
  name: "openclaw",
  description: "OpenClaw personal AI assistant CLI",
  subcommands: [
    {
      name: "setup",
      description: "Chat with OpenClaw; onboard when setup is incomplete",
      options: [
        {
          name: "--workspace",
          description:
            "Workspace proposal for guided setup; persisted by baseline/classic/non-interactive setup",
          args: { name: "dir", template: "folders" },
        },
        {
          name: "--agent-name",
          description: "Name for the first agent (or team coordinator)",
          args: { name: "name" },
        },
        {
          name: "--team",
          description:
            "Create a coordinator with researcher, writer, and reviewer specialists",
        },
        { name: "--wizard", description: "Run interactive onboarding" },
        {
          name: "--baseline",
          description:
            "Create baseline config/workspace/session folders without onboarding",
        },
        {
          name: "--reset",
          description:
            "Reset config + credentials + sessions before running onboarding (workspace only with --reset-scope full)",
        },
        {
          name: "--reset-scope",
          description: "Reset scope: config|config+creds+sessions|full",
          args: { name: "scope" },
        },
        {
          name: "--non-interactive",
          description: "Run onboarding without prompts",
        },
        ...onboardFlowOptions,
        ...onboardAuthOptions,
        ...onboardGatewayOptions,
        {
          name: "--tailscale",
          description: "Tailscale: off|serve|funnel",
          args: { name: "mode", suggestions: ["off", "serve", "funnel"] },
        },
        { name: "--install-daemon", description: "Install gateway service" },
        {
          name: "--no-install-daemon",
          description: "Skip gateway service install",
        },
        { name: "--skip-daemon", description: "Skip gateway service install" },
        {
          name: "--daemon-runtime",
          description: "Daemon runtime: node|bun (default: node)",
          args: { name: "runtime", suggestions: ["node", "bun"] },
        },
        { name: "--skip-channels", description: "Skip channel setup" },
        { name: "--skip-skills", description: "Skip skills setup" },
        {
          name: "--skip-bootstrap",
          description: "Skip creating default agent workspace files",
        },
        { name: "--skip-search", description: "Skip search provider setup" },
        { name: "--skip-health", description: "Skip health check" },
        { name: "--skip-ui", description: "Skip Control UI/TUI launch" },
        {
          name: "--suppress-gateway-token-output",
          description: "Disable the guided Control UI handoff",
        },
        {
          name: "--skip-hooks",
          description:
            "Accepted for onboard compatibility; hooks setup is skipped",
        },
        {
          name: "--node-manager",
          description: "Node manager for skills: npm|pnpm|bun",
          args: { name: "name", suggestions: ["npm", "pnpm", "bun"] },
        },
        {
          name: "--import-from",
          description: "Migration provider to run during onboarding",
          args: { name: "provider" },
        },
        {
          name: "--import-source",
          description: "Source agent home for --import-from",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--import-secrets",
          description: "Import supported secrets during onboarding migration",
        },
        ...onboardRemoteOptions,
        {
          name: ["-m", "--message"],
          description: "Run one OpenClaw request",
          args: { name: "text" },
        },
        {
          name: "--yes",
          description:
            "Approve persistent config writes for one --message request",
        },
        {
          name: "--json",
          description: "Output system overview or onboarding summary as JSON",
        },
      ],
    },
    {
      name: "onboard",
      description:
        "Guided setup for auth, models, Gateway, workspace, channels, and skills",
      subcommands: [
        {
          name: "recommendations",
          description: "Read the app recommendations stored during onboarding",
          subcommands: [
            {
              name: "acknowledge",
              description:
                "Mark the stored onboarding recommendation offer as answered",
              options: [
                {
                  name: "--agent",
                  description:
                    "Agent whose onboarding recommendations should be used",
                  args: { name: "id" },
                },
                {
                  name: "--retry",
                  description:
                    "Leave failed recommendation IDs pending for a later run",
                  args: { name: "id", isVariadic: true },
                },
              ],
            },
            {
              name: "refresh",
              description:
                "Clear stored app recommendations so the next onboarding run rescans",
              options: [
                {
                  name: "--agent",
                  description:
                    "Agent whose onboarding recommendations should be used",
                  args: { name: "id" },
                },
              ],
            },
          ],
          options: [
            {
              name: "--agent",
              description:
                "Agent whose onboarding recommendations should be used",
              args: { name: "id" },
            },
            {
              name: "--json",
              description: "Output stored recommendation matches as JSON",
            },
          ],
        },
      ],
      options: [
        {
          name: "--workspace",
          description:
            "Workspace proposal for guided setup; persisted by classic/non-interactive setup",
          args: { name: "dir", template: "folders" },
        },
        {
          name: "--agent-name",
          description: "Name for the first agent (or team coordinator)",
          args: { name: "name" },
        },
        {
          name: "--team",
          description:
            "Create a coordinator with researcher, writer, and reviewer specialists",
        },
        {
          name: "--reset",
          description:
            "Reset config + credentials + sessions before running onboard (workspace only with --reset-scope full)",
        },
        {
          name: "--reset-scope",
          description: "Reset scope: config|config+creds+sessions|full",
          args: { name: "scope" },
        },
        { name: "--non-interactive", description: "Run without prompts" },
        {
          name: "--modern",
          description: "Open inference-gated OpenClaw (kept for compatibility)",
        },
        ...onboardFlowOptions,
        ...onboardAuthOptions,
        ...onboardGatewayOptions,
        ...onboardRemoteOptions,
        {
          name: "--tailscale",
          description: "Tailscale: off|serve|funnel",
          args: { name: "mode", suggestions: ["off", "serve", "funnel"] },
        },
        { name: "--install-daemon", description: "Install gateway service" },
        {
          name: "--no-install-daemon",
          description: "Skip gateway service install",
        },
        { name: "--skip-daemon", description: "Skip gateway service install" },
        {
          name: "--daemon-runtime",
          description: "Daemon runtime: node|bun (default: node)",
          args: { name: "runtime", suggestions: ["node", "bun"] },
        },
        { name: "--skip-channels", description: "Skip channel setup" },
        { name: "--skip-skills", description: "Skip skills setup" },
        {
          name: "--skip-bootstrap",
          description: "Skip creating default agent workspace files",
        },
        { name: "--skip-search", description: "Skip search provider setup" },
        { name: "--skip-health", description: "Skip health check" },
        { name: "--skip-ui", description: "Skip Control UI/TUI prompts" },
        {
          name: "--suppress-gateway-token-output",
          description: "Disable the guided Control UI handoff",
        },
        { name: "--skip-hooks", description: "Skip hook setup" },
        {
          name: "--node-manager",
          description: "Node manager for skills: npm|pnpm|bun",
          args: { name: "name", suggestions: ["npm", "pnpm", "bun"] },
        },
        {
          name: "--import-from",
          description: "Migration provider to run during onboarding",
          args: { name: "provider" },
        },
        {
          name: "--import-source",
          description: "Source agent home for --import-from",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--import-secrets",
          description: "Import supported secrets during onboarding migration",
        },
        { name: "--json", description: "Output JSON summary" },
      ],
    },
    {
      name: "configure",
      description:
        "Interactive configuration for credentials, channels, gateway, and agent defaults",
      options: [
        {
          name: "--section",
          description:
            "Configuration sections (repeatable). Options: workspace, model, memory, web, gateway, daemon, channels, plugins, skills, health",
          args: { name: "section" },
          isRepeatable: true,
        },
      ],
    },
    {
      name: "config",
      description:
        "Non-interactive config helpers (get/set/patch/unset/file/schema/validate). Run without subcommand for guided setup",
      subcommands: [
        {
          name: "get",
          description: "Get a config value by dot path",
          options: [{ name: "--json", description: "Output JSON" }],
          args: {
            name: "path",
            description: "Config path (dot or bracket notation)",
          },
        },
        {
          name: "set",
          description:
            "Set config values by path (value mode, ref/provider builder mode, or batch JSON mode)",
          options: [
            {
              name: "--strict-json",
              description:
                "Strict JSON parsing (error instead of raw string fallback)",
            },
            { name: "--json", description: "Legacy alias for --strict-json" },
            {
              name: "--expect-current-absent",
              description: "Write only when the authored path is absent",
            },
            {
              name: "--expect-current-json",
              description:
                "Write only when the authored path exactly matches this strict JSON value",
              args: { name: "json" },
            },
            {
              name: "--dry-run",
              description:
                "Validate changes without writing openclaw.json (checks run in builder/json/batch modes; exec SecretRefs are skipped unless --allow-exec is set)",
            },
            {
              name: "--allow-exec",
              description:
                "Dry-run only: allow exec SecretRef resolvability checks (may execute provider commands)",
            },
            {
              name: "--merge",
              description:
                "Merge object/map values instead of replacing the target path",
            },
            {
              name: "--replace",
              description:
                "Allow full replacement of protected map/list paths such as agents.defaults.models",
            },
            {
              name: "--ref-provider",
              description: "SecretRef builder: provider alias",
              args: { name: "alias" },
            },
            {
              name: "--ref-source",
              description: "SecretRef builder: source (env|file|exec|store)",
              args: {
                name: "source",
                suggestions: ["env", "file", "exec", "store"],
              },
            },
            {
              name: "--ref-id",
              description: "SecretRef builder: ref id",
              args: { name: "id" },
            },
            {
              name: "--provider-source",
              description: "Provider builder: source (env|file|exec|store)",
              args: {
                name: "source",
                suggestions: ["env", "file", "exec", "store"],
              },
            },
            {
              name: "--provider-allowlist",
              description:
                "Provider builder (env): allowlist entry (repeatable)",
              args: { name: "envVar" },
              isRepeatable: true,
            },
            {
              name: "--provider-path",
              description: "Provider builder (file): path",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--provider-mode",
              description: "Provider builder (file): mode (singleValue|json)",
              args: { name: "mode", suggestions: ["singleValue", "json"] },
            },
            {
              name: "--provider-timeout-ms",
              description: "Provider builder (file|exec): timeout ms",
              args: { name: "ms" },
            },
            {
              name: "--provider-max-bytes",
              description: "Provider builder (file): max bytes",
              args: { name: "bytes" },
            },
            {
              name: "--provider-command",
              description: "Provider builder (exec): absolute command path",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--provider-arg",
              description: "Provider builder (exec): command arg (repeatable)",
              args: { name: "arg" },
              isRepeatable: true,
            },
            {
              name: "--provider-no-output-timeout-ms",
              description: "Provider builder (exec): no-output timeout ms",
              args: { name: "ms" },
            },
            {
              name: "--provider-max-output-bytes",
              description: "Provider builder (exec): max output bytes",
              args: { name: "bytes" },
            },
            {
              name: "--provider-json-only",
              description: "Provider builder (exec): require JSON output",
            },
            {
              name: "--provider-env",
              description:
                "Provider builder (exec): env assignment (repeatable)",
              args: { name: "key=value" },
              isRepeatable: true,
            },
            {
              name: "--provider-pass-env",
              description:
                "Provider builder (exec): pass host env var (repeatable)",
              args: { name: "envVar" },
              isRepeatable: true,
            },
            {
              name: "--provider-trusted-dir",
              description:
                "Provider builder (exec): trusted directory (repeatable)",
              args: { name: "path", template: "folders" },
              isRepeatable: true,
            },
            {
              name: "--batch-json",
              description: "Batch mode: JSON array of set operations",
              args: { name: "json" },
            },
            {
              name: "--batch-file",
              description:
                "Batch mode: read JSON array of set operations from file",
              args: { name: "path", template: "filepaths" },
            },
          ],
          args: [
            {
              name: "path",
              description: "Config path (dot or bracket notation)",
              isOptional: true,
            },
            {
              name: "value",
              description: "Value (JSON/JSON5 or raw string)",
              isOptional: true,
            },
          ],
        },
        {
          name: "patch",
          description:
            "Patch config from a JSON5 object in one validated write",
          options: [
            {
              name: "--file",
              description: "Read a JSON5 config patch object from file",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--stdin",
              description: "Read a JSON5 config patch object from stdin",
            },
            {
              name: "--dry-run",
              description:
                "Validate changes without writing openclaw.json (checks schema and SecretRef resolvability; exec SecretRefs are skipped unless --allow-exec is set)",
            },
            {
              name: "--allow-exec",
              description:
                "Dry-run only: allow exec SecretRef resolvability checks (may execute provider commands)",
            },
            { name: "--json", description: "Output dry-run result as JSON" },
            {
              name: "--replace-path",
              description:
                "Replace the object or array at this dot/bracket path instead of recursively applying it (repeatable)",
              args: { name: "path" },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "unset",
          description: "Remove a config value by dot path",
          options: [
            {
              name: "--dry-run",
              description:
                "Validate the removal without writing the config file",
            },
            {
              name: "--allow-exec",
              description: "Allow exec SecretRef providers during --dry-run",
            },
            { name: "--json", description: "Print dry-run result as JSON" },
          ],
          args: {
            name: "path",
            description: "Config path (dot or bracket notation)",
          },
        },
        {
          name: "file",
          description: "Print the active config file path",
          options: [{ name: "--json", description: "Output JSON" }],
        },
        {
          name: "schema",
          description: "Print the JSON schema for openclaw.json",
          options: [{ name: "--json", description: "Output JSON" }],
        },
        {
          name: "validate",
          description:
            "Validate the current config against the schema without starting the gateway",
          options: [
            { name: "--json", description: "Output validation result as JSON" },
          ],
        },
      ],
      options: [
        {
          name: "--section",
          description:
            "Configuration sections for guided setup (repeatable). Use with no subcommand",
          args: { name: "section" },
          isRepeatable: true,
        },
      ],
    },
    {
      name: "backup",
      description:
        "Create, verify, and restore backup archives and SQLite snapshots",
      subcommands: [
        {
          name: "create",
          description:
            "Write a backup archive for config, credentials, sessions, and workspaces",
          options: [
            {
              name: "--output",
              description: "Archive path or destination directory",
              args: { name: "path", template: "folders" },
            },
            {
              name: "--to",
              description: "Upload the verified archive to a storage location",
              args: { name: "location" },
            },
            {
              name: "--claim-namespace",
              description:
                "Deliberately take over the backup namespace for this installation",
            },
            {
              name: "--namespace",
              description: "Backup namespace (default: sanitized hostname)",
              args: { name: "name" },
            },
            {
              name: "--keep-daily",
              description: "Retain the newest backup in N daily UTC buckets",
              args: { name: "n" },
            },
            {
              name: "--keep-weekly",
              description: "Retain the newest backup in N weekly UTC buckets",
              args: { name: "n" },
            },
            {
              name: "--keep-monthly",
              description: "Retain the newest backup in N monthly UTC buckets",
              args: { name: "n" },
            },
            { name: "--json", description: "Output JSON" },
            {
              name: "--dry-run",
              description: "Print the backup plan without writing the archive",
            },
            {
              name: "--verify",
              description: "Verify the archive after writing it",
            },
            {
              name: "--only-config",
              description: "Back up only the active JSON config file",
            },
            {
              name: "--no-include-workspace",
              description: "Exclude workspace directories from the backup",
            },
          ],
        },
        {
          name: "verify",
          description: "Validate a backup archive and its embedded manifest",
          options: [
            {
              name: "--from",
              description:
                "Read a backup key or latest from a storage location",
              args: { name: "location" },
            },
            {
              name: "--namespace",
              description: "Backup namespace (default: sanitized hostname)",
              args: { name: "name" },
            },
            { name: "--json", description: "Output JSON" },
          ],
          args: { name: "archive", template: "filepaths" },
        },
        {
          name: "restore",
          description:
            "Restore a verified backup archive to a fresh staging directory",
          options: [
            {
              name: "--from",
              description:
                "Read a backup key or latest from a storage location",
              args: { name: "location" },
            },
            {
              name: "--namespace",
              description: "Backup namespace (default: sanitized hostname)",
              args: { name: "name" },
            },
            {
              name: "--target",
              description:
                "Fresh target directory; non-empty directories are refused",
              args: { name: "dir", template: "folders" },
              isRequired: true,
            },
            { name: "--json", description: "Output JSON" },
          ],
          args: { name: "archive", template: "filepaths" },
        },
        {
          name: "list",
          description: "List archives in a storage location",
          options: [
            {
              name: "--from",
              description: "Storage location name",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description: "Backup namespace (default: sanitized hostname)",
              args: { name: "name" },
            },
            { name: "--json", description: "Output JSON" },
          ],
        },
        {
          name: "record",
          description: "Record an external backup job outcome",
          options: [
            {
              name: "--status",
              description: "Ok or failed",
              args: { name: "status" },
              isRequired: true,
            },
            {
              name: "--target",
              description: "External backup target label",
              args: { name: "label" },
              isRequired: true,
            },
            {
              name: "--bytes",
              description: "Backup size in bytes",
              args: { name: "n" },
            },
            {
              name: "--error",
              description: "Failure details",
              args: { name: "text" },
            },
            { name: "--json", description: "Output JSON" },
          ],
        },
        {
          name: "sqlite",
          description: "Create, list, verify, and restore SQLite snapshots",
          subcommands: [
            {
              name: "create",
              description:
                "Create a compact, verified snapshot of an OpenClaw SQLite database",
              options: [
                {
                  name: "--global",
                  description: "Snapshot the shared OpenClaw state database",
                },
                {
                  name: "--agent",
                  description: "Snapshot one per-agent OpenClaw database",
                  args: { name: "id" },
                },
                {
                  name: "--repository",
                  description: "Snapshot repository directory",
                  args: { name: "path", template: "folders" },
                  isRequired: true,
                },
                { name: "--json", description: "Output JSON" },
              ],
            },
            {
              name: "list",
              description: "List committed snapshots in a repository",
              options: [
                {
                  name: "--repository",
                  description: "Snapshot repository directory",
                  args: { name: "path", template: "folders" },
                  isRequired: true,
                },
                { name: "--json", description: "Output JSON" },
              ],
            },
            {
              name: "verify",
              description:
                "Verify a snapshot manifest, artifact hash, SQLite integrity, and database owner",
              options: [
                {
                  name: "--scratch",
                  description:
                    "Existing private directory for verification copies",
                  args: { name: "path", template: "folders" },
                },
                { name: "--json", description: "Output JSON" },
              ],
              args: { name: "snapshot", template: "filepaths" },
            },
            {
              name: "restore",
              description:
                "Restore a verified snapshot to a new SQLite database path",
              options: [
                {
                  name: "--target",
                  description:
                    "Fresh target path; existing files and sidecars are refused",
                  args: { name: "path", template: "filepaths" },
                  isRequired: true,
                },
                { name: "--json", description: "Output JSON" },
              ],
              args: { name: "snapshot", template: "filepaths" },
            },
          ],
        },
        {
          name: "git",
          description:
            "Create and restore reproducible versioned SQLite dumps in Git",
          subcommands: [
            {
              name: "init",
              description:
                "Initialize or adopt an operator-owned Git backup repository",
              options: [
                {
                  name: "--repository",
                  description: "Git backup repository directory",
                  args: { name: "path", template: "folders" },
                  isRequired: true,
                },
                {
                  name: "--remote",
                  description: "Add the remote as origin",
                  args: { name: "url" },
                },
                { name: "--json", description: "Output JSON" },
              ],
            },
            {
              name: "create",
              description:
                "Dump selected OpenClaw databases and commit one Git revision",
              options: [
                {
                  name: "--repository",
                  description: "Git backup repository directory",
                  args: { name: "path", template: "folders" },
                  isRequired: true,
                },
                {
                  name: "--all",
                  description:
                    "Back up the shared database and every registered agent database",
                },
                {
                  name: "--global",
                  description: "Back up the shared OpenClaw state database",
                },
                {
                  name: "--agent",
                  description: "Back up an agent database (repeatable)",
                  args: { name: "id" },
                  isRepeatable: true,
                },
                {
                  name: "--push",
                  description: "Push the current branch to origin",
                },
                {
                  name: "--exclude-secrets",
                  description: "Omit credential-bearing database tables",
                },
                { name: "--json", description: "Output JSON" },
              ],
            },
            {
              name: "log",
              description: "Show Git backup commits",
              options: [
                {
                  name: "--repository",
                  description: "Git backup repository directory",
                  args: { name: "path", template: "folders" },
                  isRequired: true,
                },
                {
                  name: "--limit",
                  description: "Maximum commits to show",
                  args: { name: "n" },
                },
                { name: "--json", description: "Output JSON" },
              ],
            },
            {
              name: "verify",
              description:
                "Restore and verify one database snapshot from a Git ref",
              options: [
                {
                  name: "--repository",
                  description: "Git backup repository directory",
                  args: { name: "path", template: "folders" },
                  isRequired: true,
                },
                {
                  name: "--ref",
                  description: "Commit or ref to verify",
                  args: { name: "commit" },
                },
                {
                  name: "--global",
                  description: "Verify the shared state database",
                },
                {
                  name: "--agent",
                  description: "Verify one agent database",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output JSON" },
              ],
            },
            {
              name: "restore",
              description:
                "Restore one database snapshot from a Git ref to a fresh SQLite file",
              options: [
                {
                  name: "--repository",
                  description: "Git backup repository directory",
                  args: { name: "path", template: "folders" },
                  isRequired: true,
                },
                {
                  name: "--target",
                  description:
                    "Fresh target path; existing files and sidecars are refused",
                  args: { name: "path", template: "filepaths" },
                  isRequired: true,
                },
                {
                  name: "--ref",
                  description: "Commit or ref to restore",
                  args: { name: "commit" },
                },
                {
                  name: "--global",
                  description: "Restore the shared state database",
                },
                {
                  name: "--agent",
                  description: "Restore one agent database",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output JSON" },
              ],
            },
          ],
        },
        {
          name: "enable",
          description:
            "Provision a Gateway automation for offsite or Git backups",
          options: [
            {
              name: "--repository",
              description: "Git backup repository directory",
              args: { name: "path", template: "folders" },
            },
            {
              name: "--to",
              description: "Storage location for offsite archive backups",
              args: { name: "location" },
            },
            {
              name: "--claim-namespace",
              description:
                "Deliberately take over the backup namespace on each scheduled run",
            },
            {
              name: "--namespace",
              description: "Backup namespace (default: sanitized hostname)",
              args: { name: "name" },
            },
            {
              name: "--no-include-workspace",
              description:
                "Exclude workspace directories from offsite archives",
            },
            {
              name: "--keep-daily",
              description: "Retain the newest backup in N daily UTC buckets",
              args: { name: "n" },
            },
            {
              name: "--keep-weekly",
              description: "Retain the newest backup in N weekly UTC buckets",
              args: { name: "n" },
            },
            {
              name: "--keep-monthly",
              description: "Retain the newest backup in N monthly UTC buckets",
              args: { name: "n" },
            },
            {
              name: "--every",
              description: "Backup interval",
              args: { name: "duration" },
            },
            {
              name: "--push",
              description:
                "Push the current branch to origin after each backup",
            },
            {
              name: "--exclude-secrets",
              description: "Omit credential-bearing database tables",
            },
            {
              name: "--include-secrets",
              description:
                "Keep credential-bearing tables in pushed scheduled backups",
            },
            {
              name: "--global-only",
              description: "Back up only the shared state database",
            },
            {
              name: "--agent",
              description: "Back up only one agent database",
              args: { name: "id" },
            },
            ...gatewayClientOptions,
          ],
        },
        {
          name: "disable",
          description:
            "Remove both scheduled backup modes, or the selected mode",
          options: [
            {
              name: "--offsite",
              description: "Disable only offsite archive backups",
            },
            { name: "--git", description: "Disable only Git backups" },
            ...gatewayClientOptions,
          ],
        },
      ],
    },
    {
      name: "database",
      description:
        "Inspect database compatibility, manage ownership, and port workboard stores",
      subcommands: [
        {
          name: "port",
          description:
            "Port all existing workboard stores offline between SQLite and PostgreSQL",
          options: [
            {
              name: "--to",
              description: "Destination engine",
              args: {
                name: "postgres|sqlite",
                suggestions: ["postgres", "sqlite"],
              },
            },
            {
              name: "--dry-run",
              description:
                "Inspect prerequisites without creating port artifacts",
            },
            { name: "--json", description: "Emit machine-readable JSON" },
            {
              name: "--resume",
              description: "Resume an interrupted port",
              args: { name: "manifest", template: "filepaths" },
            },
            {
              name: "--rollback",
              description:
                "Restore an interrupted port's complete original set",
              args: { name: "manifest", template: "filepaths" },
            },
          ],
        },
        {
          name: "restore-migration-backup",
          description:
            "Restore a scoped migration backup's tables and schema version while offline",
          options: [
            { name: "--json", description: "Emit machine-readable JSON" },
          ],
          args: [
            {
              name: "backup",
              description: "Table-scoped pre-migration SQLite backup",
              template: "filepaths",
            },
            {
              name: "database",
              description:
                "Original SQLite database; undeclared tables are preserved",
              template: "filepaths",
            },
          ],
        },
        {
          name: "preflight",
          description:
            "Compare one copied SQLite file with this release's state schema",
          options: [
            { name: "--json", description: "Emit machine-readable JSON" },
          ],
          args: {
            name: "path",
            description: "Explicit copied SQLite database path",
            template: "filepaths",
          },
        },
        {
          name: "preflight-agent",
          description:
            "Compare one copied agent SQLite file with this release's agent schema and owner",
          options: [
            {
              name: "--agent-id",
              description: "Exact agent owner ID",
              args: { name: "id" },
              isRequired: true,
            },
            { name: "--json", description: "Emit machine-readable JSON" },
          ],
          args: {
            name: "path",
            description: "Explicit copied agent SQLite database path",
            template: "filepaths",
          },
        },
        {
          name: "verify-preservation",
          description:
            "Compare retained recovery captures without changing state or authorizing activation",
          options: [
            {
              name: "--original-sha256",
              description: "Original manifest digest recorded before migration",
              args: { name: "digest" },
              isRequired: true,
            },
            {
              name: "--candidate-sha256",
              description: "Candidate manifest digest",
              args: { name: "digest" },
              isRequired: true,
            },
            { name: "--json", description: "Emit machine-readable JSON" },
          ],
          args: [
            {
              name: "original-manifest",
              description: "Sealed original recovery manifest",
              template: "filepaths",
            },
            {
              name: "candidate-manifest",
              description: "Sealed capture after migration",
              template: "filepaths",
            },
          ],
        },
        {
          name: "ownership",
          description: "Inspect or claim write ownership",
          subcommands: [
            {
              name: "status",
              description: "Show durable shared-state write ownership",
              options: [
                { name: "--json", description: "Emit machine-readable JSON" },
              ],
            },
            {
              name: "claim",
              description:
                "Claim shared-state writes for the active external supervisor",
              options: [
                {
                  name: "--manager",
                  description: "Stable external manager identifier",
                  args: { name: "id" },
                  isRequired: true,
                },
                { name: "--json", description: "Emit machine-readable JSON" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "migrate",
      description: "Import state from another agent system",
      subcommands: [
        {
          name: "list",
          description: "List migration providers",
          options: [{ name: "--json", description: "Output JSON" }],
        },
        {
          name: "plan",
          description: "Preview a migration without changing OpenClaw state",
          options: [
            ...migrationSourceOptions,
            { name: "--json", description: "Output JSON" },
            ...migrationSelectionOptions,
            {
              name: "--verify-plugin-apps",
              description:
                "Codex only: verify source plugin app accessibility with app/installed before planning native plugin activation",
            },
          ],
          args: { name: "provider" },
        },
        {
          name: "apply",
          description: "Apply a migration after a verified backup",
          options: [
            ...migrationSourceOptions,
            { name: "--json", description: "Output JSON" },
            ...migrationSelectionOptions,
            {
              name: "--verify-plugin-apps",
              description:
                "Codex only: verify source plugin app accessibility with app/installed before planning native plugin activation",
            },
            { name: "--yes", description: "Apply without prompting" },
            {
              name: "--backup-output",
              description: "Pre-migration backup archive path or directory",
              args: { name: "path", template: "folders" },
            },
            {
              name: "--no-backup",
              description: "Skip the pre-migration OpenClaw backup",
            },
            {
              name: "--force",
              description: "Allow dangerous options such as --no-backup",
            },
          ],
          args: { name: "provider" },
        },
      ],
      options: [
        ...migrationSourceOptions,
        {
          name: "--dry-run",
          description: "Preview only; do not apply changes",
        },
        { name: "--yes", description: "Apply without prompting after preview" },
        ...migrationSelectionOptions,
        {
          name: "--backup-output",
          description: "Pre-migration backup archive path or directory",
          args: { name: "path", template: "folders" },
        },
        {
          name: "--no-backup",
          description: "Skip the pre-migration OpenClaw backup",
        },
        {
          name: "--force",
          description: "Allow dangerous options such as --no-backup",
        },
        { name: "--json", description: "Output JSON" },
        {
          name: "--verify-plugin-apps",
          description:
            "Codex only: verify source plugin app accessibility with app/installed before planning native plugin activation",
        },
      ],
      args: {
        name: "provider",
        description: "Migration provider id, for example hermes",
        isOptional: true,
      },
    },
    {
      name: "storage",
      description: "List, initialize, and test configured storage locations",
      subcommands: [
        {
          name: "list",
          description: "List storage locations and check their availability",
          options: [{ name: "--json", description: "Output JSON" }],
        },
        {
          name: "init",
          description:
            "Initialize a new location or verify its existing marker and encryption key",
          options: [{ name: "--json", description: "Output JSON" }],
          args: { name: "name" },
        },
        {
          name: "test",
          description:
            "Write, read, verify, and delete a temporary check object",
          options: [{ name: "--json", description: "Output JSON" }],
          args: { name: "name" },
        },
      ],
      options: [{ name: "--json", description: "Output JSON" }],
    },
    {
      name: "audit",
      description: "Inspect activity records and exact-run identity context",
      options: [
        {
          name: "--agent",
          description: "Filter by agent id",
          args: { name: "id" },
        },
        {
          name: "--session",
          description: "Filter by exact session key",
          args: { name: "key" },
        },
        {
          name: "--run",
          description: "Filter by run id",
          args: { name: "id" },
        },
        {
          name: "--execution",
          description: "Inspect one exact execution id",
          args: { name: "id" },
        },
        {
          name: "--kind",
          description: "Filter by kind (, or)",
          args: {
            name: "kind",
            suggestions: ["agent_run", "tool_action", "message"],
          },
        },
        {
          name: "--status",
          description: "Filter by status (, or)",
          args: {
            name: "status",
            suggestions: [
              "started",
              "succeeded",
              "failed",
              "cancelled",
              "timed_out",
              "blocked",
              "unknown",
            ],
          },
        },
        {
          name: "--direction",
          description: "Filter message direction (, or)",
          args: { name: "direction", suggestions: ["inbound", "outbound"] },
        },
        {
          name: "--channel",
          description: "Filter message channel",
          args: { name: "channel", suggestions: channels },
        },
        {
          name: "--after",
          description: "Include records at/after ISO time or Unix milliseconds",
          args: { name: "timestamp" },
        },
        {
          name: "--before",
          description:
            "Include records at/before ISO time or Unix milliseconds",
          args: { name: "timestamp" },
        },
        {
          name: "--cursor",
          description: "Continue from a previous result cursor",
          args: { name: "sequence" },
        },
        {
          name: "--limit",
          description: "Maximum records (1-500; decisions 1-100)",
          args: { name: "count" },
        },
        {
          name: "--explain",
          description: "Inspect execution identity and run-admission reasoning",
        },
        { name: "--json", description: "Output a bounded JSON page" },
      ],
    },
    {
      name: "doctor",
      description: "Health checks + quick fixes for the gateway and channels",
      options: [
        {
          name: "--no-workspace-suggestions",
          description: "Disable workspace memory system suggestions",
        },
        { name: "--yes", description: "Accept defaults without prompting" },
        {
          name: "--repair",
          description: "Apply recommended repairs without prompting",
        },
        {
          name: "--fix",
          description: "Apply recommended repairs (alias for --repair)",
        },
        {
          name: "--force",
          description:
            "Allow aggressive repair choices (with --fix, preserves service definitions)",
        },
        {
          name: "--non-interactive",
          description: "Run without prompts (safe migrations only)",
        },
        {
          name: "--generate-gateway-token",
          description: "Generate and configure a gateway token",
        },
        {
          name: "--allow-exec",
          description:
            "Allow doctor to execute exec SecretRefs while verifying configured secrets",
        },
        {
          name: "--deep",
          description: "Scan system services for extra gateway installs",
        },
        {
          name: "--lint",
          description: "Run read-only health checks and report findings",
        },
        {
          name: "--post-upgrade",
          description:
            "Emit plugin-compat findings only (machine-readable with --json)",
        },
        {
          name: "--session-sqlite",
          description:
            "Run session SQLite migration mode (dry-run|import|validate|inspect|compact|restore|recover)",
          args: {
            name: "mode",
            suggestions: [
              "dry-run",
              "import",
              "validate",
              "inspect",
              "compact",
              "restore",
              "recover",
            ],
          },
        },
        {
          name: "--state-sqlite",
          description: "Run shared state SQLite maintenance mode (compact)",
          args: { name: "mode" },
        },
        {
          name: "--session-sqlite-store",
          description: "With --session-sqlite: inspect one session store",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--session-sqlite-agent",
          description: "With --session-sqlite: inspect one agent",
          args: { name: "id" },
        },
        {
          name: "--session-sqlite-all-agents",
          description:
            "With --session-sqlite: inspect configured and discovered agent stores",
        },
        {
          name: "--github-issue",
          description:
            "With --session-sqlite recover: prepare and optionally create an openclaw/openclaw issue",
        },
        {
          name: "--json",
          description:
            "Emit JSON; bare --json runs advisory read-only health checks",
        },
        {
          name: "--severity-min",
          description:
            "With --lint: drop findings below this severity (info|warning|error)",
          args: { name: "level", suggestions: ["info", "warning", "error"] },
        },
        {
          name: "--all",
          description:
            "With --lint: run all registered checks, including opt-in checks",
        },
        {
          name: "--skip",
          description: "With --lint: skip a specific check id (repeatable)",
          args: { name: "id" },
          isRepeatable: true,
        },
        {
          name: "--only",
          description:
            "With --lint: run only the specified check id (repeatable)",
          args: { name: "id" },
          isRepeatable: true,
        },
      ],
    },
    {
      name: "triage",
      description:
        "Collect sanitized diagnostics and open a local coding agent for repair",
      options: [
        {
          name: "--json",
          description:
            "Output sanitized handoff paths, finding counts, and commands as JSON",
        },
        {
          name: "--no-export",
          description: "Skip the sanitized diagnostics archive",
        },
        {
          name: "--agent",
          description:
            "Select a coding agent (codex|claude|pi|opencode|muse|grok|cursor|kimi|qwen|agy)",
          args: {
            name: "name",
            suggestions: [
              "codex",
              "claude",
              "pi",
              "opencode",
              "muse",
              "grok",
              "cursor",
              "kimi",
              "qwen",
              "agy",
            ],
          },
        },
        {
          name: "--run",
          description:
            "Run one embedded agent turn after verifying model inference",
        },
        {
          name: "--non-interactive",
          description:
            "Prepare diagnostics without prompting or starting an agent",
        },
        {
          name: "--update-result",
          description:
            "Include update-failure diagnostics from this JSON artifact",
          args: { name: "path", template: "filepaths" },
        },
      ],
    },
    {
      name: "dashboard",
      description: "Open the Control UI with your current token",
      options: [
        {
          name: "--no-open",
          description: "Print URL but do not launch a browser",
        },
        {
          name: "--json",
          description: "Output dashboard connection details as JSON",
        },
        {
          name: "--yes",
          description:
            "Start/install the gateway without prompting when needed",
        },
      ],
    },
    {
      name: "reset",
      description: "Reset local config/state (keeps the CLI installed)",
      options: [
        {
          name: "--scope",
          description:
            "Config|config+creds+sessions|full (default: interactive prompt)",
          args: { name: "scope" },
        },
        { name: "--yes", description: "Skip confirmation prompts" },
        {
          name: "--non-interactive",
          description: "Disable prompts (requires --scope + --yes)",
        },
        {
          name: "--dry-run",
          description: "Print actions without removing files",
        },
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall the gateway service + local data",
      options: [
        { name: "--service", description: "Remove the gateway service" },
        { name: "--state", description: "Remove state + config" },
        { name: "--workspace", description: "Remove workspace dirs" },
        { name: "--app", description: "Remove the macOS app" },
        {
          name: "--all",
          description: "Remove service + state + workspace + app",
        },
        { name: "--yes", description: "Skip confirmation prompts" },
        {
          name: "--non-interactive",
          description: "Disable prompts (requires --yes)",
        },
        {
          name: "--dry-run",
          description: "Print actions without removing files",
        },
      ],
    },
    {
      name: "message",
      description: "Send, read, and manage messages and channel actions",
      subcommands: [
        {
          name: "send",
          description: "Send a message",
          options: [
            {
              name: ["-m", "--message"],
              description:
                "Message body (required unless --media or --presentation is set)",
              args: { name: "text" },
            },
            {
              name: ["-t", "--target"],
              description:
                "Recipient/channel: E.164 for WhatsApp/Signal, Telegram chat id/@username, Discord/Slack/Mattermost <channelId|user:ID|channel:ID>, or iMessage handle/chat_id",
              args: { name: "dest" },
              isRequired: true,
            },
            {
              name: "--media",
              description:
                "Attach media (image/audio/video/document). Accepts local paths or URLs. Repeat to attach multiple files",
              args: { name: "path-or-url" },
              isRepeatable: true,
            },
            {
              name: "--presentation",
              description:
                "Shared presentation payload as JSON (text, context, dividers, charts, tables, buttons, selects)",
              args: { name: "json" },
            },
            {
              name: "--delivery",
              description: "Shared delivery preferences as JSON",
              args: { name: "json" },
            },
            {
              name: "--pin",
              description:
                "Request that the delivered message be pinned when supported",
            },
            {
              name: "--reply-to",
              description: "Reply-to message id",
              args: { name: "id" },
            },
            {
              name: "--thread-id",
              description: "Thread id (Telegram forum thread)",
              args: { name: "id" },
            },
            {
              name: "--gif-playback",
              description: "Treat video media as GIF playback (WhatsApp only)",
            },
            {
              name: "--force-document",
              description:
                "Preserve original image bytes on Slack, or send images, GIFs, and videos as documents on Telegram and WhatsApp, to avoid channel compression",
            },
            {
              name: "--silent",
              description:
                "Send message silently without notification (Telegram + Discord)",
            },
            {
              name: "--channel",
              description: "Channel",
              args: { name: "channel", suggestions: channels },
            },
            {
              name: "--account",
              description: "Channel account id (accountId)",
              args: { name: "id" },
            },
            { name: "--json", description: "Output result as JSON" },
            {
              name: "--dry-run",
              description: "Print payload and skip sending",
            },
            { name: "--verbose", description: "Verbose logging" },
          ],
        },
        {
          name: "broadcast",
          description: "Broadcast a message to multiple targets",
          options: [
            {
              name: "--channel",
              description: "Channel",
              args: { name: "channel", suggestions: channels },
            },
            {
              name: "--account",
              description: "Channel account id (accountId)",
              args: { name: "id" },
            },
            { name: "--json", description: "Output result as JSON" },
            {
              name: "--dry-run",
              description: "Print payload and skip sending",
            },
            { name: "--verbose", description: "Verbose logging" },
            {
              name: "--targets",
              description:
                "Recipient/channel targets (same format as --target); accepts ids or names when the directory is available",
              args: { name: "target", isVariadic: true },
              isRequired: true,
            },
            {
              name: "--message",
              description: "Message to send",
              args: { name: "text" },
            },
            {
              name: "--media",
              description: "Media URL",
              args: { name: "url" },
            },
          ],
        },
        {
          name: "poll",
          description: "Send a poll",
          options: [
            {
              name: ["-t", "--target"],
              description:
                "Recipient/channel: E.164 for WhatsApp/Signal, Telegram chat id/@username, Discord/Slack/Mattermost <channelId|user:ID|channel:ID>, or iMessage handle/chat_id",
              args: { name: "dest" },
              isRequired: true,
            },
            {
              name: "--channel",
              description: "Channel",
              args: { name: "channel", suggestions: channels },
            },
            {
              name: "--account",
              description: "Channel account id (accountId)",
              args: { name: "id" },
            },
            { name: "--json", description: "Output result as JSON" },
            {
              name: "--dry-run",
              description: "Print payload and skip sending",
            },
            { name: "--verbose", description: "Verbose logging" },
            {
              name: "--poll-question",
              description: "Poll question",
              args: { name: "text" },
              isRequired: true,
            },
            {
              name: "--poll-option",
              description: "Poll option (repeat 2-12 times)",
              args: { name: "choice" },
              isRepeatable: true,
            },
            { name: "--poll-multi", description: "Allow multiple selections" },
            {
              name: "--poll-duration-hours",
              description: "Poll duration in hours (Discord)",
              args: { name: "n" },
            },
            {
              name: "--poll-duration-seconds",
              description: "Poll duration in seconds (Telegram; 5-604800)",
              args: { name: "n" },
            },
            {
              name: "--poll-anonymous",
              description: "Send an anonymous poll (Telegram)",
            },
            {
              name: "--poll-public",
              description: "Send a non-anonymous poll (Telegram)",
            },
            {
              name: ["-m", "--message"],
              description: "Optional message body",
              args: { name: "text" },
            },
            {
              name: "--silent",
              description:
                "Send poll silently without notification (Telegram + Discord where supported)",
            },
            {
              name: "--thread-id",
              description: "Thread id (Telegram forum topic / Slack thread ts)",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "react",
          description: "Add or remove a reaction",
          options: [
            {
              name: ["-t", "--target"],
              description:
                "Recipient/channel: E.164 for WhatsApp/Signal, Telegram chat id/@username, Discord/Slack/Mattermost <channelId|user:ID|channel:ID>, or iMessage handle/chat_id",
              args: { name: "dest" },
              isRequired: true,
            },
            {
              name: "--channel",
              description: "Channel",
              args: { name: "channel", suggestions: channels },
            },
            {
              name: "--account",
              description: "Channel account id (accountId)",
              args: { name: "id" },
            },
            { name: "--json", description: "Output result as JSON" },
            {
              name: "--dry-run",
              description: "Print payload and skip sending",
            },
            { name: "--verbose", description: "Verbose logging" },
            {
              name: "--message-id",
              description: "Message id",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: "--emoji",
              description: "Emoji for reactions",
              args: { name: "emoji" },
            },
            { name: "--remove", description: "Remove reaction" },
            {
              name: "--participant",
              description: "WhatsApp reaction participant",
              args: { name: "id" },
            },
            { name: "--from-me", description: "WhatsApp reaction fromMe" },
            {
              name: "--target-author",
              description: "Signal reaction target author (uuid or phone)",
              args: { name: "id" },
            },
            {
              name: "--target-author-uuid",
              description: "Signal reaction target author uuid",
              args: { name: "uuid" },
            },
          ],
        },
        {
          name: "reactions",
          description: "List reactions on a message",
          options: [
            {
              name: ["-t", "--target"],
              description:
                "Recipient/channel: E.164 for WhatsApp/Signal, Telegram chat id/@username, Discord/Slack/Mattermost <channelId|user:ID|channel:ID>, or iMessage handle/chat_id",
              args: { name: "dest" },
              isRequired: true,
            },
            {
              name: "--channel",
              description: "Channel",
              args: { name: "channel", suggestions: channels },
            },
            {
              name: "--account",
              description: "Channel account id (accountId)",
              args: { name: "id" },
            },
            { name: "--json", description: "Output result as JSON" },
            {
              name: "--dry-run",
              description: "Print payload and skip sending",
            },
            { name: "--verbose", description: "Verbose logging" },
            {
              name: "--message-id",
              description: "Message id",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: "--limit",
              description: "Result limit",
              args: { name: "n" },
            },
          ],
        },
        {
          name: "read",
          description: "Read recent messages",
          options: [
            {
              name: ["-t", "--target"],
              description:
                "Recipient/channel: E.164 for WhatsApp/Signal, Telegram chat id/@username, Discord/Slack/Mattermost <channelId|user:ID|channel:ID>, or iMessage handle/chat_id",
              args: { name: "dest" },
              isRequired: true,
            },
            {
              name: "--channel",
              description: "Channel",
              args: { name: "channel", suggestions: channels },
            },
            {
              name: "--account",
              description: "Channel account id (accountId)",
              args: { name: "id" },
            },
            { name: "--json", description: "Output result as JSON" },
            {
              name: "--dry-run",
              description: "Print payload and skip sending",
            },
            { name: "--verbose", description: "Verbose logging" },
            {
              name: "--limit",
              description: "Result limit",
              args: { name: "n" },
            },
            {
              name: "--message-id",
              description: "Read a specific message id",
              args: { name: "id" },
            },
            {
              name: "--before",
              description: "Read/search before id",
              args: { name: "id" },
            },
            {
              name: "--after",
              description: "Read/search after id",
              args: { name: "id" },
            },
            {
              name: "--around",
              description: "Read around id",
              args: { name: "id" },
            },
            {
              name: "--thread-id",
              description: "Thread id (Slack thread timestamp)",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "edit",
          description: "Edit a message",
          options: [
            {
              name: "--message-id",
              description: "Message id",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: ["-m", "--message"],
              description: "Message body",
              args: { name: "text" },
              isRequired: true,
            },
            {
              name: ["-t", "--target"],
              description:
                "Recipient/channel: E.164 for WhatsApp/Signal, Telegram chat id/@username, Discord/Slack/Mattermost <channelId|user:ID|channel:ID>, or iMessage handle/chat_id",
              args: { name: "dest" },
              isRequired: true,
            },
            {
              name: "--channel",
              description: "Channel",
              args: { name: "channel", suggestions: channels },
            },
            {
              name: "--account",
              description: "Channel account id (accountId)",
              args: { name: "id" },
            },
            { name: "--json", description: "Output result as JSON" },
            {
              name: "--dry-run",
              description: "Print payload and skip sending",
            },
            { name: "--verbose", description: "Verbose logging" },
            {
              name: "--thread-id",
              description: "Thread id (Telegram forum thread)",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a message",
          options: [
            {
              name: "--message-id",
              description: "Message id",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: ["-t", "--target"],
              description:
                "Recipient/channel: E.164 for WhatsApp/Signal, Telegram chat id/@username, Discord/Slack/Mattermost <channelId|user:ID|channel:ID>, or iMessage handle/chat_id",
              args: { name: "dest" },
              isRequired: true,
            },
            {
              name: "--channel",
              description: "Channel",
              args: { name: "channel", suggestions: channels },
            },
            {
              name: "--account",
              description: "Channel account id (accountId)",
              args: { name: "id" },
            },
            { name: "--json", description: "Output result as JSON" },
            {
              name: "--dry-run",
              description: "Print payload and skip sending",
            },
            { name: "--verbose", description: "Verbose logging" },
          ],
        },
        {
          name: "pin",
          description: "Pin a message",
          options: [
            {
              name: ["-t", "--target"],
              description:
                "Recipient/channel: E.164 for WhatsApp/Signal, Telegram chat id/@username, Discord/Slack/Mattermost <channelId|user:ID|channel:ID>, or iMessage handle/chat_id",
              args: { name: "dest" },
              isRequired: true,
            },
            {
              name: "--channel",
              description: "Channel",
              args: { name: "channel", suggestions: channels },
            },
            {
              name: "--account",
              description: "Channel account id (accountId)",
              args: { name: "id" },
            },
            { name: "--json", description: "Output result as JSON" },
            {
              name: "--dry-run",
              description: "Print payload and skip sending",
            },
            { name: "--verbose", description: "Verbose logging" },
            {
              name: "--message-id",
              description: "Message id",
              args: { name: "id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "unpin",
          description: "Unpin a message",
          options: [
            {
              name: ["-t", "--target"],
              description:
                "Recipient/channel: E.164 for WhatsApp/Signal, Telegram chat id/@username, Discord/Slack/Mattermost <channelId|user:ID|channel:ID>, or iMessage handle/chat_id",
              args: { name: "dest" },
              isRequired: true,
            },
            {
              name: "--channel",
              description: "Channel",
              args: { name: "channel", suggestions: channels },
            },
            {
              name: "--account",
              description: "Channel account id (accountId)",
              args: { name: "id" },
            },
            { name: "--json", description: "Output result as JSON" },
            {
              name: "--dry-run",
              description: "Print payload and skip sending",
            },
            { name: "--verbose", description: "Verbose logging" },
            {
              name: "--message-id",
              description:
                "Message id (or pinned message resource id for MSTeams)",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: "--pinned-message-id",
              description:
                "Pinned message resource id (MSTeams: from pin or list-pins, not the chat message id)",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "pins",
          description: "List pinned messages",
          options: [
            {
              name: ["-t", "--target"],
              description:
                "Recipient/channel: E.164 for WhatsApp/Signal, Telegram chat id/@username, Discord/Slack/Mattermost <channelId|user:ID|channel:ID>, or iMessage handle/chat_id",
              args: { name: "dest" },
              isRequired: true,
            },
            {
              name: "--channel",
              description: "Channel",
              args: { name: "channel", suggestions: channels },
            },
            {
              name: "--account",
              description: "Channel account id (accountId)",
              args: { name: "id" },
            },
            { name: "--json", description: "Output result as JSON" },
            {
              name: "--dry-run",
              description: "Print payload and skip sending",
            },
            { name: "--verbose", description: "Verbose logging" },
            {
              name: "--limit",
              description: "Result limit",
              args: { name: "n" },
            },
          ],
        },
        {
          name: "permissions",
          description: "Fetch channel permissions",
          options: [
            {
              name: ["-t", "--target"],
              description:
                "Recipient/channel: E.164 for WhatsApp/Signal, Telegram chat id/@username, Discord/Slack/Mattermost <channelId|user:ID|channel:ID>, or iMessage handle/chat_id",
              args: { name: "dest" },
              isRequired: true,
            },
            {
              name: "--channel",
              description: "Channel",
              args: { name: "channel", suggestions: channels },
            },
            {
              name: "--account",
              description: "Channel account id (accountId)",
              args: { name: "id" },
            },
            { name: "--json", description: "Output result as JSON" },
            {
              name: "--dry-run",
              description: "Print payload and skip sending",
            },
            { name: "--verbose", description: "Verbose logging" },
          ],
        },
        {
          name: "search",
          description: "Search messages",
          options: [
            {
              name: "--channel",
              description: "Channel",
              args: { name: "channel", suggestions: channels },
            },
            {
              name: "--account",
              description: "Channel account id (accountId)",
              args: { name: "id" },
            },
            { name: "--json", description: "Output result as JSON" },
            {
              name: "--dry-run",
              description: "Print payload and skip sending",
            },
            { name: "--verbose", description: "Verbose logging" },
            {
              name: "--query",
              description: "Search query",
              args: { name: "text" },
              isRequired: true,
            },
            {
              name: "--guild-id",
              description: "Guild id (Discord)",
              args: { name: "id" },
            },
            {
              name: "--channel-id",
              description:
                "Channel id (Discord) or Graph team-id/channel-id (Microsoft Teams)",
              args: { name: "id" },
            },
            {
              name: "--channel-ids",
              description: "Channel id (repeat)",
              args: { name: "id" },
              isRepeatable: true,
            },
            {
              name: "--author-id",
              description: "Author id",
              args: { name: "id" },
            },
            {
              name: "--author-ids",
              description: "Author id (repeat)",
              args: { name: "id" },
              isRepeatable: true,
            },
            {
              name: "--limit",
              description: "Result limit",
              args: { name: "n" },
            },
          ],
        },
        {
          name: "thread",
          description: "Thread actions",
          subcommands: [
            {
              name: "create",
              description: "Create a thread",
              options: [
                {
                  name: "--thread-name",
                  description: "Thread name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["-t", "--target"],
                  description:
                    "Recipient/channel: E.164 for WhatsApp/Signal, Telegram chat id/@username, Discord/Slack/Mattermost <channelId|user:ID|channel:ID>, or iMessage handle/chat_id",
                  args: { name: "dest" },
                  isRequired: true,
                },
                {
                  name: "--channel",
                  description: "Channel",
                  args: { name: "channel", suggestions: channels },
                },
                {
                  name: "--account",
                  description: "Channel account id (accountId)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output result as JSON" },
                {
                  name: "--dry-run",
                  description: "Print payload and skip sending",
                },
                { name: "--verbose", description: "Verbose logging" },
                {
                  name: "--message-id",
                  description: "Message id (optional)",
                  args: { name: "id" },
                },
                {
                  name: ["-m", "--message"],
                  description: "Initial thread message text",
                  args: { name: "text" },
                },
                {
                  name: "--auto-archive-min",
                  description: "Thread auto-archive minutes",
                  args: { name: "n" },
                },
              ],
            },
            {
              name: "list",
              description: "List threads",
              options: [
                {
                  name: "--guild-id",
                  description: "Guild id",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--channel",
                  description: "Channel",
                  args: { name: "channel", suggestions: channels },
                },
                {
                  name: "--account",
                  description: "Channel account id (accountId)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output result as JSON" },
                {
                  name: "--dry-run",
                  description: "Print payload and skip sending",
                },
                { name: "--verbose", description: "Verbose logging" },
                {
                  name: "--channel-id",
                  description: "Channel id",
                  args: { name: "id" },
                },
                {
                  name: "--include-archived",
                  description: "Include archived threads",
                },
                {
                  name: "--before",
                  description: "Read/search before id",
                  args: { name: "id" },
                },
                {
                  name: "--limit",
                  description: "Result limit",
                  args: { name: "n" },
                },
              ],
            },
            {
              name: "reply",
              description: "Reply in a thread",
              options: [
                {
                  name: ["-m", "--message"],
                  description: "Message body",
                  args: { name: "text" },
                  isRequired: true,
                },
                {
                  name: ["-t", "--target"],
                  description:
                    "Recipient/channel: E.164 for WhatsApp/Signal, Telegram chat id/@username, Discord/Slack/Mattermost <channelId|user:ID|channel:ID>, or iMessage handle/chat_id",
                  args: { name: "dest" },
                  isRequired: true,
                },
                {
                  name: "--channel",
                  description: "Channel",
                  args: { name: "channel", suggestions: channels },
                },
                {
                  name: "--account",
                  description: "Channel account id (accountId)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output result as JSON" },
                {
                  name: "--dry-run",
                  description: "Print payload and skip sending",
                },
                { name: "--verbose", description: "Verbose logging" },
                {
                  name: "--media",
                  description:
                    "Attach media (image/audio/video/document). Accepts local paths or URLs",
                  args: { name: "path-or-url" },
                },
                {
                  name: "--reply-to",
                  description: "Reply-to message id",
                  args: { name: "id" },
                },
              ],
            },
          ],
        },
        {
          name: "emoji",
          description: "Emoji actions",
          subcommands: [
            {
              name: "list",
              description: "List emojis",
              options: [
                {
                  name: "--channel",
                  description: "Channel",
                  args: { name: "channel", suggestions: channels },
                },
                {
                  name: "--account",
                  description: "Channel account id (accountId)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output result as JSON" },
                {
                  name: "--dry-run",
                  description: "Print payload and skip sending",
                },
                { name: "--verbose", description: "Verbose logging" },
                {
                  name: "--guild-id",
                  description: "Guild id (Discord)",
                  args: { name: "id" },
                },
              ],
            },
            {
              name: "upload",
              description: "Upload an emoji",
              options: [
                {
                  name: "--guild-id",
                  description: "Guild id",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--channel",
                  description: "Channel",
                  args: { name: "channel", suggestions: channels },
                },
                {
                  name: "--account",
                  description: "Channel account id (accountId)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output result as JSON" },
                {
                  name: "--dry-run",
                  description: "Print payload and skip sending",
                },
                { name: "--verbose", description: "Verbose logging" },
                {
                  name: "--emoji-name",
                  description: "Emoji name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--media",
                  description: "Emoji media (path or URL)",
                  args: { name: "path-or-url" },
                  isRequired: true,
                },
                {
                  name: "--role-ids",
                  description: "Role id (repeat)",
                  args: { name: "id" },
                  isRepeatable: true,
                },
              ],
            },
          ],
        },
        {
          name: "sticker",
          description: "Sticker actions",
          subcommands: [
            {
              name: "send",
              description: "Send stickers",
              options: [
                {
                  name: ["-t", "--target"],
                  description:
                    "Recipient/channel: E.164 for WhatsApp/Signal, Telegram chat id/@username, Discord/Slack/Mattermost <channelId|user:ID|channel:ID>, or iMessage handle/chat_id",
                  args: { name: "dest" },
                  isRequired: true,
                },
                {
                  name: "--channel",
                  description: "Channel",
                  args: { name: "channel", suggestions: channels },
                },
                {
                  name: "--account",
                  description: "Channel account id (accountId)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output result as JSON" },
                {
                  name: "--dry-run",
                  description: "Print payload and skip sending",
                },
                { name: "--verbose", description: "Verbose logging" },
                {
                  name: "--sticker-id",
                  description: "Sticker id (repeat)",
                  args: { name: "id" },
                  isRepeatable: true,
                  isRequired: true,
                },
                {
                  name: ["-m", "--message"],
                  description: "Optional message body",
                  args: { name: "text" },
                },
              ],
            },
            {
              name: "upload",
              description: "Upload a sticker",
              options: [
                {
                  name: "--guild-id",
                  description: "Guild id",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--channel",
                  description: "Channel",
                  args: { name: "channel", suggestions: channels },
                },
                {
                  name: "--account",
                  description: "Channel account id (accountId)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output result as JSON" },
                {
                  name: "--dry-run",
                  description: "Print payload and skip sending",
                },
                { name: "--verbose", description: "Verbose logging" },
                {
                  name: "--sticker-name",
                  description: "Sticker name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--sticker-desc",
                  description: "Sticker description",
                  args: { name: "text" },
                  isRequired: true,
                },
                {
                  name: "--sticker-tags",
                  description: "Sticker tags",
                  args: { name: "tags" },
                  isRequired: true,
                },
                {
                  name: "--media",
                  description: "Sticker media (path or URL)",
                  args: { name: "path-or-url" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "role",
          description: "Role actions",
          subcommands: [
            {
              name: "info",
              description: "List roles",
              options: [
                {
                  name: "--guild-id",
                  description: "Guild id",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--channel",
                  description: "Channel",
                  args: { name: "channel", suggestions: channels },
                },
                {
                  name: "--account",
                  description: "Channel account id (accountId)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output result as JSON" },
                {
                  name: "--dry-run",
                  description: "Print payload and skip sending",
                },
                { name: "--verbose", description: "Verbose logging" },
              ],
            },
            {
              name: "add",
              description: "Add role to a member",
              options: [
                ...messageRoleOptions,
                {
                  name: "--channel",
                  description: "Channel",
                  args: { name: "channel", suggestions: channels },
                },
                {
                  name: "--account",
                  description: "Channel account id (accountId)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output result as JSON" },
                {
                  name: "--dry-run",
                  description: "Print payload and skip sending",
                },
                { name: "--verbose", description: "Verbose logging" },
              ],
            },
            {
              name: "remove",
              description: "Remove role from a member",
              options: [
                ...messageRoleOptions,
                {
                  name: "--channel",
                  description: "Channel",
                  args: { name: "channel", suggestions: channels },
                },
                {
                  name: "--account",
                  description: "Channel account id (accountId)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output result as JSON" },
                {
                  name: "--dry-run",
                  description: "Print payload and skip sending",
                },
                { name: "--verbose", description: "Verbose logging" },
              ],
            },
          ],
        },
        {
          name: "channel",
          description: "Channel actions",
          subcommands: [
            {
              name: "info",
              description: "Fetch channel info",
              options: [
                {
                  name: ["-t", "--target"],
                  description:
                    "Recipient/channel: E.164 for WhatsApp/Signal, Telegram chat id/@username, Discord/Slack/Mattermost <channelId|user:ID|channel:ID>, or iMessage handle/chat_id",
                  args: { name: "dest" },
                  isRequired: true,
                },
                {
                  name: "--channel",
                  description: "Channel",
                  args: { name: "channel", suggestions: channels },
                },
                {
                  name: "--account",
                  description: "Channel account id (accountId)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output result as JSON" },
                {
                  name: "--dry-run",
                  description: "Print payload and skip sending",
                },
                { name: "--verbose", description: "Verbose logging" },
              ],
            },
            {
              name: "list",
              description: "List channels",
              options: [
                {
                  name: "--guild-id",
                  description: "Guild id",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--channel",
                  description: "Channel",
                  args: { name: "channel", suggestions: channels },
                },
                {
                  name: "--account",
                  description: "Channel account id (accountId)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output result as JSON" },
                {
                  name: "--dry-run",
                  description: "Print payload and skip sending",
                },
                { name: "--verbose", description: "Verbose logging" },
              ],
            },
          ],
        },
        {
          name: "member",
          description: "Member actions",
          subcommands: [
            {
              name: "info",
              description: "Fetch member info",
              options: [
                {
                  name: "--user-id",
                  description: "User id",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--channel",
                  description: "Channel",
                  args: { name: "channel", suggestions: channels },
                },
                {
                  name: "--account",
                  description: "Channel account id (accountId)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output result as JSON" },
                {
                  name: "--dry-run",
                  description: "Print payload and skip sending",
                },
                { name: "--verbose", description: "Verbose logging" },
                {
                  name: "--guild-id",
                  description: "Guild id (Discord)",
                  args: { name: "id" },
                },
                {
                  name: "--channel-id",
                  description:
                    "Room id (Matrix) or Graph team-id/channel-id (Microsoft Teams)",
                  args: { name: "id" },
                },
              ],
            },
          ],
        },
        {
          name: "voice",
          description: "Voice actions",
          subcommands: [
            {
              name: "status",
              description: "Fetch voice status",
              options: [
                ...messageVoiceOptions,
                {
                  name: "--channel",
                  description: "Channel",
                  args: { name: "channel", suggestions: channels },
                },
                {
                  name: "--account",
                  description: "Channel account id (accountId)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output result as JSON" },
                {
                  name: "--dry-run",
                  description: "Print payload and skip sending",
                },
                { name: "--verbose", description: "Verbose logging" },
              ],
            },
          ],
        },
        {
          name: "event",
          description: "Event actions",
          subcommands: [
            {
              name: "list",
              description: "List scheduled events",
              options: [
                {
                  name: "--guild-id",
                  description: "Guild id",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--channel",
                  description: "Channel",
                  args: { name: "channel", suggestions: channels },
                },
                {
                  name: "--account",
                  description: "Channel account id (accountId)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output result as JSON" },
                {
                  name: "--dry-run",
                  description: "Print payload and skip sending",
                },
                { name: "--verbose", description: "Verbose logging" },
              ],
            },
            {
              name: "create",
              description: "Create a scheduled event",
              options: [
                {
                  name: "--guild-id",
                  description: "Guild id",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--event-name",
                  description: "Event name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--start-time",
                  description: "Event start time",
                  args: { name: "iso" },
                  isRequired: true,
                },
                {
                  name: "--channel",
                  description: "Channel",
                  args: { name: "channel", suggestions: channels },
                },
                {
                  name: "--account",
                  description: "Channel account id (accountId)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output result as JSON" },
                {
                  name: "--dry-run",
                  description: "Print payload and skip sending",
                },
                { name: "--verbose", description: "Verbose logging" },
                {
                  name: "--end-time",
                  description: "Event end time",
                  args: { name: "iso" },
                },
                {
                  name: "--desc",
                  description: "Event description",
                  args: { name: "text" },
                },
                {
                  name: "--channel-id",
                  description: "Channel id",
                  args: { name: "id" },
                },
                {
                  name: "--location",
                  description: "Event location",
                  args: { name: "text" },
                },
                {
                  name: "--event-type",
                  description: "Event type",
                  args: {
                    name: "stage|external|voice",
                    suggestions: ["stage", "external", "voice"],
                  },
                },
                {
                  name: "--image",
                  description: "Cover image URL or local file path",
                  args: { name: "url" },
                },
              ],
            },
          ],
        },
        {
          name: "timeout",
          description: "Timeout a member",
          options: [
            ...messageVoiceOptions,
            {
              name: "--channel",
              description: "Channel",
              args: { name: "channel", suggestions: channels },
            },
            {
              name: "--account",
              description: "Channel account id (accountId)",
              args: { name: "id" },
            },
            { name: "--json", description: "Output result as JSON" },
            {
              name: "--dry-run",
              description: "Print payload and skip sending",
            },
            { name: "--verbose", description: "Verbose logging" },
            {
              name: "--duration-min",
              description: "Timeout duration minutes",
              args: { name: "n" },
            },
            {
              name: "--until",
              description: "Timeout until",
              args: { name: "iso" },
            },
            {
              name: "--reason",
              description: "Moderation reason",
              args: { name: "text" },
            },
          ],
        },
        {
          name: "kick",
          description: "Kick a member",
          options: [
            ...messageVoiceOptions,
            {
              name: "--channel",
              description: "Channel",
              args: { name: "channel", suggestions: channels },
            },
            {
              name: "--account",
              description: "Channel account id (accountId)",
              args: { name: "id" },
            },
            { name: "--json", description: "Output result as JSON" },
            {
              name: "--dry-run",
              description: "Print payload and skip sending",
            },
            { name: "--verbose", description: "Verbose logging" },
            {
              name: "--reason",
              description: "Moderation reason",
              args: { name: "text" },
            },
          ],
        },
        {
          name: "ban",
          description: "Ban a member",
          options: [
            ...messageVoiceOptions,
            {
              name: "--channel",
              description: "Channel",
              args: { name: "channel", suggestions: channels },
            },
            {
              name: "--account",
              description: "Channel account id (accountId)",
              args: { name: "id" },
            },
            { name: "--json", description: "Output result as JSON" },
            {
              name: "--dry-run",
              description: "Print payload and skip sending",
            },
            { name: "--verbose", description: "Verbose logging" },
            {
              name: "--reason",
              description: "Moderation reason",
              args: { name: "text" },
            },
            {
              name: "--delete-days",
              description: "Ban delete message days",
              args: { name: "n" },
            },
          ],
        },
      ],
    },
    {
      name: "mcp",
      description: "Manage OpenClaw mcp.servers config and channel bridge",
      subcommands: [
        {
          name: "serve",
          description: "Expose OpenClaw channels over MCP stdio",
          options: [
            {
              name: "--url",
              description:
                "Gateway WebSocket URL (defaults to gateway.remote.url when configured)",
              args: { name: "url" },
            },
            {
              name: "--token",
              description: "Gateway token (if required)",
              args: { name: "token" },
            },
            {
              name: "--token-file",
              description: "Read gateway token from file",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--password",
              description: "Gateway password (if required)",
              args: { name: "password" },
            },
            {
              name: "--password-file",
              description: "Read gateway password from file",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--claude-channel-mode",
              description: "Claude channel notification mode: auto, on, or off",
              args: { name: "mode" },
            },
            {
              name: ["-v", "--verbose"],
              description: "Verbose logging to stderr",
            },
          ],
        },
        {
          name: "list",
          description: "List OpenClaw-managed MCP servers from mcp.servers",
          options: [{ name: "--json", description: "Print JSON" }],
        },
        {
          name: "show",
          description:
            "Show one OpenClaw-managed MCP server or the full mcp.servers config",
          options: [{ name: "--json", description: "Print JSON" }],
          args: {
            name: "name",
            description: "MCP server name",
            isOptional: true,
          },
        },
        {
          name: "status",
          description:
            "Show configured MCP server transport status without connecting",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Show transport, auth, timeout, and filter details",
            },
            { name: "--json", description: "Print JSON" },
          ],
        },
        {
          name: "probe",
          description:
            "Connect to configured MCP servers and list available capabilities",
          options: [{ name: "--json", description: "Print JSON" }],
          args: {
            name: "name",
            description: "MCP server name",
            isOptional: true,
          },
        },
        {
          name: "doctor",
          description: "Check configured MCP servers for static setup problems",
          options: [
            {
              name: "--probe",
              description: "Also connect to each checked server",
            },
            { name: "--json", description: "Print JSON" },
          ],
          args: {
            name: "name",
            description: "MCP server name",
            isOptional: true,
          },
        },
        {
          name: "add",
          description:
            "Add one MCP server from flags and check it before saving",
          options: [
            {
              name: "--command",
              description: "Stdio command to spawn",
              args: { name: "command" },
            },
            {
              name: "--arg",
              description: "Repeatable stdio argument",
              args: { name: "value" },
              isRepeatable: true,
            },
            {
              name: "--env",
              description: "Repeatable stdio environment entry",
              args: { name: "key=value" },
              isRepeatable: true,
            },
            {
              name: "--cwd",
              description: "Working directory for stdio server",
              args: { name: "path", template: "folders" },
            },
            {
              name: "--url",
              description: "HTTP MCP server URL",
              args: { name: "url" },
            },
            {
              name: "--transport",
              description: "HTTP transport: streamable-http or sse",
              args: { name: "type" },
            },
            {
              name: "--header",
              description: "Repeatable HTTP header",
              args: { name: "key=value" },
              isRepeatable: true,
            },
            {
              name: "--auth",
              description: "HTTP auth mode: oauth",
              args: { name: "mode" },
            },
            {
              name: "--oauth-scope",
              description: "OAuth scope",
              args: { name: "scope" },
            },
            {
              name: "--oauth-redirect-url",
              description: "OAuth redirect URL",
              args: { name: "url" },
            },
            {
              name: "--oauth-client-metadata-url",
              description: "OAuth client metadata URL",
              args: { name: "url" },
            },
            {
              name: "--include",
              description:
                "Comma-separated MCP tool names or '*' globs to expose",
              args: { name: "csv" },
            },
            {
              name: "--exclude",
              description:
                "Comma-separated MCP tool names or '*' globs to hide",
              args: { name: "csv" },
            },
            {
              name: "--timeout",
              description: "Per-request timeout in seconds",
              args: { name: "seconds" },
            },
            {
              name: "--connect-timeout",
              description: "Connection timeout in seconds",
              args: { name: "seconds" },
            },
            {
              name: "--parallel",
              description: "Mark this server safe for concurrent tool calls",
            },
            {
              name: "--approval",
              description:
                "Codex MCP tool approval mode: auto, prompt, or approve",
              args: { name: "mode" },
            },
            { name: "--disabled", description: "Save the server disabled" },
            {
              name: "--ssl-verify",
              description: "Verify HTTPS certificates: true or false",
              args: { name: "boolean" },
            },
            {
              name: "--client-cert",
              description: "HTTP mutual TLS client certificate path",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--client-key",
              description: "HTTP mutual TLS client key path",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--no-probe",
              description: "Save without connecting first",
            },
          ],
          args: { name: "name", description: "MCP server name" },
        },
        {
          name: "set",
          description: "Set one OpenClaw-managed MCP server from a JSON object",
          args: [
            { name: "name", description: "MCP server name" },
            {
              name: "value",
              description:
                'JSON object, for example {"command":"uvx","args":["context7-mcp"]}',
            },
          ],
        },
        {
          name: "tools",
          description: "Update per-server MCP tool include/exclude filters",
          options: [
            {
              name: "--include",
              description:
                "Comma-separated MCP tool names or '*' globs to expose",
              args: { name: "csv" },
            },
            {
              name: "--exclude",
              description:
                "Comma-separated MCP tool names or '*' globs to hide",
              args: { name: "csv" },
            },
            {
              name: "--clear",
              description: "Clear this server's MCP tool filter",
            },
          ],
          args: { name: "name", description: "MCP server name" },
        },
        {
          name: "configure",
          description:
            "Update MCP server operator controls without replacing the server",
          options: [
            { name: "--enable", description: "Enable this saved server" },
            { name: "--disable", description: "Disable this saved server" },
            {
              name: "--include",
              description:
                "Comma-separated MCP tool names or '*' globs to expose",
              args: { name: "csv" },
            },
            {
              name: "--exclude",
              description:
                "Comma-separated MCP tool names or '*' globs to hide",
              args: { name: "csv" },
            },
            {
              name: "--clear-tools",
              description: "Clear this server's MCP tool filter",
            },
            {
              name: "--timeout",
              description: "Per-request timeout in seconds",
              args: { name: "seconds" },
            },
            {
              name: "--connect-timeout",
              description: "Connection timeout in seconds",
              args: { name: "seconds" },
            },
            {
              name: "--clear-timeouts",
              description: "Clear request and connection timeout overrides",
            },
            {
              name: "--parallel",
              description: "Mark this server safe for concurrent tool calls",
            },
            {
              name: "--no-parallel",
              description: "Clear the concurrent tool-call marker",
            },
            {
              name: "--approval",
              description:
                "Codex MCP tool approval mode: auto, prompt, or approve",
              args: { name: "mode" },
            },
            {
              name: "--auth",
              description: "HTTP auth mode: oauth",
              args: { name: "mode" },
            },
            {
              name: "--clear-auth",
              description: "Clear auth and OAuth metadata",
            },
            {
              name: "--oauth-scope",
              description: "OAuth scope",
              args: { name: "scope" },
            },
            {
              name: "--oauth-redirect-url",
              description: "OAuth redirect URL",
              args: { name: "url" },
            },
            {
              name: "--oauth-client-metadata-url",
              description: "OAuth client metadata URL",
              args: { name: "url" },
            },
            {
              name: "--ssl-verify",
              description: "Verify HTTPS certificates: true or false",
              args: { name: "boolean" },
            },
            {
              name: "--client-cert",
              description: "HTTP mutual TLS client certificate path",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--client-key",
              description: "HTTP mutual TLS client key path",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--clear-tls",
              description: "Clear TLS verification and mTLS overrides",
            },
            {
              name: "--probe",
              description: "Check the updated server before saving",
            },
          ],
          args: { name: "name", description: "MCP server name" },
        },
        {
          name: "login",
          description: "Authorize an OAuth MCP server",
          options: [
            {
              name: "--code",
              description: "Authorization code from the OAuth redirect",
              args: { name: "code" },
            },
          ],
          args: { name: "name", description: "MCP server name" },
        },
        {
          name: "logout",
          description: "Clear stored OAuth credentials for an MCP server",
          args: { name: "name", description: "MCP server name" },
        },
        {
          name: "reload",
          description:
            "Dispose cached MCP runtimes so new config is used on the next turn",
        },
        {
          name: "unset",
          description: "Remove one OpenClaw-managed MCP server",
          args: { name: "name", description: "MCP server name" },
        },
      ],
    },
    {
      name: "transcripts",
      description: "Inspect stored transcripts",
      subcommands: [
        {
          name: "list",
          description: "List stored transcript sessions",
          options: [{ name: "--json", description: "Print JSON" }],
        },
        {
          name: "show",
          description: "Print and materialize a transcript summary",
          options: [{ name: "--json", description: "Print JSON" }],
          args: {
            name: "session",
            description:
              "Transcripts session id or YYYY-MM-DD/session selector",
          },
        },
        {
          name: "path",
          description:
            "Materialize and print a stored transcripts artifact path",
          options: [
            {
              name: "--dir",
              description:
                "Materialize all artifacts and print the session directory",
            },
            {
              name: "--metadata",
              description: "Materialize and print metadata.json",
            },
            {
              name: "--transcript",
              description: "Materialize and print transcript.jsonl",
            },
            { name: "--json", description: "Print JSON" },
          ],
          args: {
            name: "session",
            description:
              "Transcripts session id or YYYY-MM-DD/session selector",
          },
        },
      ],
    },
    {
      name: "agent",
      description:
        "Run an agent turn via the Gateway (use --local for embedded)",
      subcommands: [
        {
          name: "exec",
          description: "Run one isolated headless embedded agent turn",
          options: [
            {
              name: "--message-file",
              description: "Read the UTF-8 prompt from a file; use - for stdin",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--cwd",
              description:
                "Set both the agent workspace and tool working directory",
              args: { name: "dir", template: "folders" },
            },
            {
              name: "--state-dir",
              description:
                "Use an existing state directory without deleting it",
              args: { name: "dir", template: "folders" },
            },
            {
              name: "--config",
              description:
                "Run against this config file instead of the ambient config (pins a reproducible run)",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--isolated",
              description:
                "Ignore the ambient config and run against exec defaults only",
            },
            {
              name: "--model",
              description: "Use an explicit primary model for this run",
              args: { name: "provider/model" },
            },
            {
              name: "--code-mode",
              description: "Tool mode: direct | auto | code",
              args: { name: "mode", suggestions: ["direct", "auto", "code"] },
            },
            {
              name: "--local-model-lean",
              description: "Use the reduced local-model tool surface",
            },
            {
              name: "--thinking",
              description:
                "Thinking level: off|minimal|low|medium|high|xhigh|adaptive|max|ultra where supported",
              args: {
                name: "level",
                suggestions: [
                  "off",
                  "minimal",
                  "low",
                  "medium",
                  "high",
                  "xhigh",
                  "adaptive",
                  "max",
                  "ultra",
                ],
              },
            },
            {
              name: "--fallback",
              description:
                "Add an ordered fallback model (repeatable; requires --model)",
              args: { name: "provider/model" },
              isRepeatable: true,
            },
            {
              name: "--auth-env-only",
              description:
                "Use provider credentials from environment variables only",
            },
            {
              name: "--no-auth-env-only",
              description: "Allow stored and external CLI credential discovery",
            },
            {
              name: "--timeout",
              description: "Agent deadline in seconds",
              args: { name: "seconds" },
            },
            {
              name: "--json",
              description: "Emit the stable agent-exec JSON envelope",
            },
          ],
          args: { name: "message", isOptional: true },
        },
      ],
      options: [
        {
          name: ["-m", "--message"],
          description: "Message body for the agent",
          args: { name: "text" },
        },
        {
          name: "--message-file",
          description:
            "Read the agent message body from a UTF-8 file (max 4 MiB)",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: ["-t", "--to"],
          description:
            "Recipient number in E.164 used to derive the session key",
          args: { name: "number" },
        },
        {
          name: "--session-key",
          description:
            "Explicit session key (agent:<id>:<key>, or scoped to --agent)",
          args: { name: "key" },
        },
        {
          name: "--session-id",
          description: "Use an explicit session id",
          args: { name: "id" },
        },
        {
          name: "--agent",
          description: "Agent id (overrides routing bindings)",
          args: { name: "id" },
        },
        {
          name: "--model",
          description:
            "Model override for this run (provider/model or model id)",
          args: { name: "id" },
        },
        {
          name: "--thinking",
          description:
            "Thinking level: off|minimal|low|medium|high|xhigh|adaptive|max|ultra where supported",
          args: {
            name: "level",
            suggestions: [
              "off",
              "minimal",
              "low",
              "medium",
              "high",
              "xhigh",
              "adaptive",
              "max",
              "ultra",
            ],
          },
        },
        {
          name: "--verbose",
          description: "Persist agent verbose level for the session",
          args: { name: "on|off", suggestions: ["on", "off"] },
        },
        {
          name: "--channel",
          description:
            "Delivery channel (omit to use the main session channel)",
          args: { name: "channel", suggestions: channels },
        },
        {
          name: "--reply-to",
          description:
            "Delivery target override (separate from session routing)",
          args: { name: "target" },
        },
        {
          name: "--reply-channel",
          description: "Delivery channel override (separate from routing)",
          args: { name: "channel", suggestions: channels },
        },
        {
          name: "--reply-account",
          description: "Delivery account id override",
          args: { name: "id" },
        },
        {
          name: "--local",
          description:
            "Run the embedded agent locally using configured provider credentials or local CLI logins",
        },
        {
          name: "--deliver",
          description: "Send the agent's reply back to the selected channel",
        },
        { name: "--json", description: "Output result as JSON" },
        {
          name: "--timeout",
          description:
            "Override agent command timeout (seconds, default 600 or config value)",
          args: { name: "seconds" },
        },
      ],
    },
    {
      name: "agents",
      description: "Manage isolated agents (workspaces + auth + routing)",
      subcommands: [
        {
          name: "list",
          description: "List configured agents",
          options: [
            { name: "--json", description: "Output JSON instead of text" },
            { name: "--bindings", description: "Include routing bindings" },
            { name: "--tree", description: "Render agent creation hierarchy" },
          ],
        },
        {
          name: "bindings",
          description: "List routing bindings",
          options: [
            {
              name: "--agent",
              description: "Filter by agent id",
              args: { name: "id" },
            },
            { name: "--json", description: "Output JSON instead of text" },
          ],
        },
        {
          name: "bind",
          description: "Add routing bindings for an agent",
          options: [
            {
              name: "--agent",
              description: "Agent id (defaults to current default agent)",
              args: { name: "id" },
            },
            {
              name: "--bind",
              description:
                "Binding to add (repeatable). If omitted, accountId is resolved by channel defaults/hooks",
              args: { name: "channel[:accountId]" },
              isRepeatable: true,
            },
            { name: "--json", description: "Output JSON summary" },
          ],
        },
        {
          name: "unbind",
          description: "Remove routing bindings for an agent",
          options: [
            {
              name: "--agent",
              description: "Agent id (defaults to current default agent)",
              args: { name: "id" },
            },
            {
              name: "--bind",
              description: "Binding to remove (repeatable)",
              args: { name: "channel[:accountId]" },
              isRepeatable: true,
            },
            {
              name: "--all",
              description: "Remove all bindings for this agent",
            },
            { name: "--json", description: "Output JSON summary" },
          ],
        },
        {
          name: "add",
          description: "Add a new isolated agent",
          options: [
            {
              name: "--workspace",
              description: "Workspace directory for the new agent",
              args: { name: "dir", template: "folders" },
            },
            {
              name: "--role",
              description:
                "Seed a role: coordinator, researcher, writer, reviewer",
              args: { name: "role" },
            },
            {
              name: "--model",
              description: "Model id for this agent",
              args: { name: "id" },
            },
            {
              name: "--agent-dir",
              description: "Agent state directory for this agent",
              args: { name: "dir", template: "folders" },
            },
            {
              name: "--bind",
              description: "Route channel binding (repeatable)",
              args: { name: "channel[:accountId]" },
              isRepeatable: true,
            },
            {
              name: "--non-interactive",
              description:
                "Disable prompts; requires --workspace unless --role is set",
            },
            { name: "--json", description: "Output JSON summary" },
          ],
          args: { name: "name", isOptional: true },
        },
        {
          name: "team",
          description: "Create a coordinated team of agents",
          subcommands: [
            {
              name: "create",
              description:
                "Create a coordinator and specialists from a bundled preset",
              options: [
                {
                  name: "--preset",
                  description: "Team preset (team)",
                  args: { name: "name" },
                },
                {
                  name: "--coordinator",
                  description: "Coordinator agent id",
                  args: { name: "id" },
                },
                {
                  name: "--prefix",
                  description: "Prefix every team agent id with <p>-",
                  args: { name: "p" },
                },
                {
                  name: "--workspace-root",
                  description: "Parent directory for separate team workspaces",
                  args: { name: "dir", template: "folders" },
                },
                { name: "--non-interactive", description: "Disable prompts" },
                { name: "--json", description: "Output JSON summary" },
              ],
            },
          ],
        },
        {
          name: "set-identity",
          description: "Update an agent identity (name/theme/emoji/avatar)",
          options: [
            {
              name: "--agent",
              description: "Agent id to update",
              args: { name: "id" },
            },
            {
              name: "--workspace",
              description:
                "Locate the agent and IDENTITY.md; does not change the stored workspace",
              args: { name: "dir", template: "folders" },
            },
            {
              name: "--identity-file",
              description: "Explicit IDENTITY.md path to read",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--from-identity",
              description: "Read values from IDENTITY.md",
            },
            {
              name: "--name",
              description: "Identity name",
              args: { name: "name" },
            },
            {
              name: "--theme",
              description: "Identity theme",
              args: { name: "theme" },
            },
            {
              name: "--emoji",
              description: "Identity emoji",
              args: { name: "emoji" },
            },
            {
              name: "--avatar",
              description:
                "Identity avatar (workspace path, http(s) URL, or data URI)",
              args: { name: "value" },
            },
            { name: "--json", description: "Output JSON summary" },
          ],
        },
        {
          name: "delete",
          description: "Delete an agent and prune workspace/state",
          options: [
            { name: "--force", description: "Skip confirmation" },
            { name: "--json", description: "Output JSON summary" },
          ],
          args: { name: "id" },
        },
      ],
    },
    {
      name: "status",
      description: "Show channel health and recent session recipients",
      options: [
        { name: "--json", description: "Output JSON instead of text" },
        { name: "--all", description: "Full diagnosis (read-only, pasteable)" },
        {
          name: "--usage",
          description: "Show model provider usage/quota snapshots",
        },
        {
          name: "--agent",
          description: "Agent id for --usage auth scope",
          args: { name: "id" },
        },
        {
          name: "--deep",
          description:
            "Check channels (WhatsApp Web + Telegram + Discord + Slack + Signal)",
        },
        {
          name: "--timeout",
          description: "Check timeout in milliseconds",
          args: { name: "ms" },
        },
        { name: "--verbose", description: "Verbose logging" },
        { name: "--debug", description: "Alias for --verbose" },
      ],
    },
    {
      name: "health",
      description: "Fetch health from the running gateway",
      options: [
        { name: "--json", description: "Output JSON instead of text" },
        {
          name: "--timeout",
          description: "Connection timeout in milliseconds",
          args: { name: "ms" },
        },
        { name: "--verbose", description: "Verbose logging" },
        { name: "--debug", description: "Alias for --verbose" },
      ],
    },
    {
      name: "sessions",
      description: "List stored conversation sessions",
      subcommands: [
        {
          name: "list",
          description: "List stored conversation sessions",
          options: sessionsListOptions,
        },
        {
          name: "cleanup",
          description:
            "Run session-store maintenance (local destructive cleanup requires offline ownership)",
          options: [
            {
              name: "--store",
              description:
                "Local store selector (destructive cleanup refuses live owners)",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--agent",
              description:
                "Agent id to maintain (required for multiple explicit agents)",
              args: { name: "id" },
            },
            {
              name: "--all-agents",
              description: "Run maintenance across all configured agents",
            },
            {
              name: "--dry-run",
              description: "Preview maintenance actions without writing",
            },
            {
              name: "--enforce",
              description:
                "Apply maintenance even when configured mode is warn",
            },
            {
              name: "--fix-missing",
              description:
                "Remove store entries whose transcript files are missing (bypasses age/count retention)",
            },
            {
              name: "--fix-dm-scope",
              description:
                "Retire stale direct-DM session rows that no longer match session.dmScope=main",
            },
            {
              name: "--active-key",
              description: "Protect this session key from budget-eviction",
              args: { name: "key" },
            },
            { name: "--json", description: "Output JSON" },
          ],
        },
        {
          name: "tail",
          description: "Tail human-readable session trajectory progress",
          options: [
            {
              name: "--session-key",
              description:
                "Session key to tail (default: Gateway running sessions or latest activity)",
              args: { name: "key" },
            },
            {
              name: "--tail",
              description: "Number of existing trajectory events to show",
              args: { name: "count" },
            },
            {
              name: "--follow",
              description: "Continue following for new trajectory events",
            },
            {
              name: "--store",
              description:
                "Session store selector path (orders by activity without Gateway lookup)",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--agent",
              description:
                "Agent id to inspect (required for multiple explicit agents)",
              args: { name: "id" },
            },
            {
              name: "--all-agents",
              description: "Aggregate sessions across all configured agents",
            },
          ],
        },
        {
          name: "export-trajectory",
          description:
            "Export a redacted trajectory bundle for a stored session",
          options: [
            {
              name: "--session-key",
              description: "Session key to export",
              args: { name: "key" },
            },
            {
              name: "--output",
              description:
                "Output directory name inside .openclaw/trajectory-exports",
              args: { name: "path", template: "folders" },
            },
            {
              name: "--workspace",
              description:
                "Workspace root for the export (default: current directory)",
              args: { name: "path", template: "folders" },
            },
            {
              name: "--store",
              description: "Legacy session store selector path",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--agent",
              description: "Agent id for resolving the default session store",
              args: { name: "id" },
            },
            {
              name: "--request-json-base64",
              description: "Base64url-encoded export request",
              args: { name: "payload" },
            },
            { name: "--json", description: "Output JSON" },
          ],
        },
        {
          name: "archive",
          description: "Archive stored sessions via the running gateway",
          options: [
            {
              name: "--dry-run",
              description: "Preview archive actions without writing",
            },
            ...sessionsGatewayOptions,
          ],
          args: { name: "keys", isVariadic: true },
        },
        {
          name: "delete",
          description:
            "Delete stored sessions and their live artifacts via the running gateway. Retained archives can remain searchable",
          options: [
            {
              name: "--dry-run",
              description: "Preview delete actions without writing",
            },
            {
              name: "--yes",
              description: "Skip the destructive confirmation prompt",
            },
            ...sessionsGatewayOptions,
          ],
          args: { name: "keys", isVariadic: true },
        },
        {
          name: "import",
          description:
            "Preserve native catalog transcripts in ordinary OpenClaw sessions",
          options: [
            ...sessionsGatewayOptions,
            {
              name: "--all",
              description:
                "Import every visible catalog session, paging each source",
            },
            {
              name: "--catalog",
              description:
                "Catalog to import with --all (for example: claude or codex)",
              args: { name: "id" },
            },
            {
              name: "--host",
              description:
                "Source host (single transcript default: discover the Gateway host)",
              args: { name: "hostId" },
            },
            {
              name: "--source-home",
              description: "Source home for a single transcript",
              args: { name: "id" },
            },
            {
              name: "--limit",
              description: "Maximum number of sessions to import with --all",
              args: { name: "n" },
            },
            {
              name: "--dry-run",
              description:
                "List the transcripts that would be imported without writing",
            },
          ],
          args: [
            { name: "catalogId", isOptional: true },
            { name: "threadId", isOptional: true },
          ],
        },
        {
          name: "compact",
          description:
            "Compact a stored session transcript via the running gateway",
          options: [
            ...sessionsGatewayOptions,
            {
              name: "--max-lines",
              description:
                "Truncate to the last N transcript lines instead of LLM summarization",
              args: { name: "count" },
            },
          ],
          args: { name: "key" },
        },
      ],
      options: sessionsListOptions,
    },
    {
      name: "acp",
      description: "Run an ACP bridge backed by the Gateway",
      subcommands: [
        {
          name: "client",
          description:
            "Run an interactive ACP client against the local ACP bridge",
          options: [
            {
              name: "--cwd",
              description: "Working directory for the ACP session",
              args: { name: "dir", template: "folders" },
            },
            {
              name: "--server",
              description: "ACP server command (default: openclaw)",
              args: { name: "command" },
            },
            {
              name: "--server-args",
              description: "Extra arguments for the ACP server",
              args: { name: "args", isVariadic: true },
            },
            {
              name: "--server-verbose",
              description: "Enable verbose logging on the ACP server",
            },
            {
              name: ["-v", "--verbose"],
              description: "Verbose client logging",
            },
          ],
        },
      ],
      options: [
        {
          name: "--url",
          description:
            "Gateway WebSocket URL (defaults to gateway.remote.url when configured)",
          args: { name: "url" },
        },
        {
          name: "--token",
          description: "Gateway token (if required)",
          args: { name: "token" },
        },
        {
          name: "--token-file",
          description: "Read gateway token from file",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--password",
          description: "Gateway password (if required)",
          args: { name: "password" },
        },
        {
          name: "--password-file",
          description: "Read gateway password from file",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--session",
          description: "Default session key (e.g. agent:main:main)",
          args: { name: "key" },
        },
        {
          name: "--session-label",
          description: "Default session label to resolve",
          args: { name: "label" },
        },
        {
          name: "--require-existing",
          description: "Fail if the session key/label does not exist",
        },
        {
          name: "--reset-session",
          description: "Reset the session key before first use",
        },
        {
          name: "--no-prefix-cwd",
          description: "Do not prefix prompts with the working directory",
        },
        {
          name: "--provenance",
          description: "ACP provenance mode: off, meta, or meta+receipt",
          args: { name: "mode" },
        },
        { name: ["-v", "--verbose"], description: "Verbose logging to stderr" },
      ],
    },
    {
      name: "gateway",
      description: "Run, inspect, and query the WebSocket Gateway",
      subcommands: [
        {
          name: "run",
          description: "Run the WebSocket Gateway (foreground)",
          options: gatewayRunCommandOptions,
        },
        {
          name: "status",
          description:
            "Show gateway service status + check connectivity/capability",
          options: gatewayServiceCommandsOptions,
        },
        {
          name: "install",
          description:
            "Install and start the Gateway service (launchd/systemd/schtasks)",
          options: gatewayInstallOptions,
        },
        {
          name: "uninstall",
          description:
            "Uninstall the Gateway service (launchd/systemd/schtasks)",
          options: [{ name: "--json", description: "Output JSON" }],
        },
        {
          name: "start",
          description: "Start the Gateway service (launchd/systemd/schtasks)",
          options: [{ name: "--json", description: "Output JSON" }],
        },
        {
          name: "stop",
          description: "Stop the Gateway service (launchd/systemd/schtasks)",
          options: gatewayStopOptions,
        },
        {
          name: "restart",
          description: "Restart the Gateway service (launchd/systemd/schtasks)",
          options: gatewayRestartOptions,
        },
        {
          name: "auth-token",
          description: "Reveal the configured shared Gateway token",
          options: [
            {
              name: "--show",
              description: "Print the token to an interactive terminal",
            },
          ],
        },
        {
          name: "call",
          description: "Call a Gateway method",
          options: [
            {
              name: "--expect-url",
              description:
                "Fail if the resolved Gateway URL differs; preserves configured authentication",
              args: { name: "url" },
            },
            {
              name: "--params",
              description: "JSON object string for params",
              args: { name: "json" },
            },
            ...gatewayClientOptions,
            { name: "--json", description: "Output JSON" },
          ],
          args: {
            name: "method",
            description: "Method name (health/status/system-presence/cron.*)",
          },
        },
        {
          name: "suspend",
          description: "Prepare the Gateway for cooperative host suspension",
          options: [
            {
              name: "--request-id",
              description: "Stable suspension request id",
              args: { name: "id" },
            },
            {
              name: "--wait",
              description:
                "Wait up to this many seconds for active work to drain",
              args: { name: "seconds" },
            },
            ...gatewayClientOptions,
            { name: "--json", description: "Output JSON" },
          ],
        },
        {
          name: "resume",
          description: "Release a cooperative Gateway suspension",
          options: [
            ...gatewayClientOptions,
            { name: "--json", description: "Output JSON" },
          ],
          args: {
            name: "suspensionId",
            description: "Suspension id returned by gateway suspend",
          },
        },
        {
          name: "usage-cost",
          description: "Fetch usage cost summary from session logs",
          options: [
            {
              name: "--days",
              description: "Number of days to include",
              args: { name: "days" },
            },
            {
              name: "--agent",
              description: "Scope the cost summary to a specific agent id",
              args: { name: "id" },
            },
            {
              name: "--all-agents",
              description: "Aggregate the cost summary across all agents",
            },
            ...gatewayClientOptions,
            { name: "--json", description: "Output JSON" },
          ],
        },
        {
          name: "health",
          description: "Fetch Gateway health",
          options: [
            ...gatewayClientOptions,
            { name: "--json", description: "Output JSON" },
          ],
        },
        {
          name: "stability",
          description: "Fetch payload-free Gateway stability diagnostics",
          options: [
            {
              name: "--limit",
              description: "Maximum number of recent events",
              args: { name: "limit" },
            },
            {
              name: "--type",
              description: "Filter by diagnostic event type",
              args: { name: "type" },
            },
            {
              name: "--since-seq",
              description: "Only include events after this sequence",
              args: { name: "seq" },
            },
            {
              name: "--bundle",
              description:
                'Read a persisted stability bundle instead of calling Gateway; pass "latest" for newest',
              args: { name: "path", isOptional: true, template: "filepaths" },
            },
            {
              name: "--export",
              description: "Write a shareable support diagnostics export",
            },
            {
              name: "--output",
              description: "Diagnostics export output .zip path",
              args: { name: "path", template: "filepaths" },
            },
            ...gatewayClientOptions,
            { name: "--json", description: "Output JSON" },
          ],
        },
        {
          name: "diagnostics",
          description: "Export local support diagnostics",
          subcommands: [
            {
              name: "export",
              description: "Write a shareable, payload-free diagnostics .zip",
              options: [
                {
                  name: "--output",
                  description: "Output .zip path",
                  args: { name: "path", template: "filepaths" },
                },
                {
                  name: "--log-lines",
                  description: "Maximum sanitized log lines to include",
                  args: { name: "count" },
                },
                {
                  name: "--log-bytes",
                  description: "Maximum log bytes to inspect",
                  args: { name: "bytes" },
                },
                {
                  name: "--url",
                  description: "Gateway WebSocket URL for health snapshot",
                  args: { name: "url" },
                },
                {
                  name: "--token",
                  description: "Gateway token for health snapshot",
                  args: { name: "token" },
                },
                {
                  name: "--password",
                  description: "Gateway password for health snapshot",
                  args: { name: "password" },
                },
                {
                  name: "--timeout",
                  description: "Status/health snapshot timeout in ms",
                  args: { name: "ms" },
                },
                {
                  name: "--no-stability-bundle",
                  description: "Skip persisted stability bundle lookup",
                },
                { name: "--json", description: "Output JSON" },
              ],
            },
          ],
        },
        {
          name: "probe",
          description:
            "Show gateway reachability, auth capability, and read-check summary (local + remote)",
          options: [
            {
              name: "--url",
              description:
                "Explicit Gateway WebSocket URL (still checks localhost)",
              args: { name: "url" },
            },
            {
              name: "--port",
              description: "Local Gateway port",
              args: { name: "port" },
            },
            {
              name: "--ssh",
              description:
                "SSH target for remote gateway tunnel (user@host or user@host:port)",
              args: { name: "target" },
            },
            {
              name: "--ssh-identity",
              description: "SSH identity file path",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--ssh-auto",
              description: "Try to derive an SSH target from Bonjour discovery",
            },
            {
              name: "--token",
              description: "Gateway token (applies to all checks)",
              args: { name: "token" },
            },
            {
              name: "--password",
              description: "Gateway password (applies to all checks)",
              args: { name: "password" },
            },
            {
              name: "--timeout",
              description: "Overall check budget in ms",
              args: { name: "ms" },
            },
            { name: "--json", description: "Output JSON" },
          ],
        },
        {
          name: "discover",
          description:
            "Discover gateways via Bonjour (local + wide-area if configured)",
          options: [
            {
              name: "--timeout",
              description: "Per-command timeout in ms",
              args: { name: "ms" },
            },
            { name: "--json", description: "Output JSON" },
          ],
        },
      ],
      options: gatewayRunCommandOptions,
    },
    {
      name: "daemon",
      description: "Manage the Gateway service (launchd/systemd/schtasks)",
      subcommands: [
        {
          name: "status",
          description:
            "Show service install status + check connectivity/capability",
          options: gatewayServiceCommandsOptions,
        },
        {
          name: "install",
          description:
            "Install and start the Gateway service (launchd/systemd/schtasks)",
          options: gatewayInstallOptions,
        },
        {
          name: "uninstall",
          description:
            "Uninstall the Gateway service (launchd/systemd/schtasks)",
          options: [{ name: "--json", description: "Output JSON" }],
        },
        {
          name: "start",
          description: "Start the Gateway service (launchd/systemd/schtasks)",
          options: [{ name: "--json", description: "Output JSON" }],
        },
        {
          name: "stop",
          description: "Stop the Gateway service (launchd/systemd/schtasks)",
          options: gatewayStopOptions,
        },
        {
          name: "restart",
          description: "Restart the Gateway service (launchd/systemd/schtasks)",
          options: gatewayRestartOptions,
        },
      ],
      options: [{ name: "--json", description: "Output JSON" }],
    },
    {
      name: "logs",
      description: "Tail gateway file logs via RPC",
      options: [
        {
          name: "--limit",
          description: "Max lines to return",
          args: { name: "n" },
        },
        {
          name: "--max-bytes",
          description: "Max bytes to read",
          args: { name: "n" },
        },
        { name: "--follow", description: "Follow log output" },
        {
          name: "--interval",
          description: "Polling interval in ms",
          args: { name: "ms" },
        },
        { name: "--json", description: "Emit JSON log lines" },
        { name: "--plain", description: "Plain text output (no ANSI styling)" },
        { name: "--no-color", description: "Disable ANSI colors" },
        {
          name: "--local-time",
          description: "Display timestamps in local timezone (default)",
        },
        { name: "--utc", description: "Display timestamps in UTC" },
        ...gatewayClientOptions,
      ],
    },
    {
      name: "system",
      description: "System tools (events, heartbeat, presence)",
      subcommands: [
        {
          name: "event",
          description:
            "Enqueue a system event and optionally trigger a heartbeat",
          options: [
            {
              name: "--text",
              description: "System event text",
              args: { name: "text" },
              isRequired: true,
            },
            {
              name: "--mode",
              description: "Wake mode (now|next-heartbeat)",
              args: { name: "mode", suggestions: ["now", "next-heartbeat"] },
            },
            {
              name: "--session-key",
              description:
                "Target a specific session for the event (defaults to the agent's main session)",
              args: { name: "sessionKey" },
            },
            { name: "--json", description: "Output JSON" },
            ...gatewayClientOptions,
          ],
        },
        {
          name: "heartbeat",
          description: "Heartbeat controls",
          subcommands: [
            {
              name: "last",
              description: "Show the last heartbeat event",
              options: [
                { name: "--json", description: "Output JSON" },
                ...gatewayClientOptions,
              ],
            },
            {
              name: "enable",
              description: "Enable heartbeats",
              options: [
                { name: "--json", description: "Output JSON" },
                ...gatewayClientOptions,
              ],
            },
            {
              name: "disable",
              description: "Disable heartbeats",
              options: [
                { name: "--json", description: "Output JSON" },
                ...gatewayClientOptions,
              ],
            },
          ],
        },
        {
          name: "presence",
          description: "List system presence entries",
          options: [
            { name: "--json", description: "Output JSON" },
            ...gatewayClientOptions,
          ],
        },
      ],
    },
    {
      name: "models",
      description: "Model discovery, scanning, and configuration",
      subcommands: [
        {
          name: "accounts",
          description: "Manage your personal model accounts on the Gateway",
          subcommands: [
            {
              name: "list",
              description: "List one page of your saved accounts",
              options: [
                ...accountOptions,
                {
                  name: "--cursor",
                  description: "Continue from nextCursor in the previous page",
                  args: { name: "cursor" },
                },
              ],
            },
            {
              name: "login",
              description:
                "Add a personal account using this Gateway's provider and sign-in methods",
              options: [
                ...accountOptions,
                {
                  name: "--method",
                  description: "Choose a sign-in method instead of prompting",
                  args: { name: "id" },
                },
              ],
              args: { name: "provider", isOptional: true },
            },
            {
              name: "use",
              description: "Select one of your accounts for new sessions",
              options: accountOptions,
              args: { name: "account-id" },
            },
            {
              name: "clear-default",
              description:
                "Clear a personal default without deleting credentials or changing existing sessions",
              options: accountOptions,
              args: { name: "provider" },
            },
          ],
          options: accountOptions,
        },
        {
          name: "list",
          description: "List models (configured by default)",
          options: [
            {
              name: "--refresh",
              description: "Refresh provider discovery before listing",
            },
            { name: "--all", description: "Show full model catalog" },
            { name: "--local", description: "Filter to local models" },
            {
              name: "--provider",
              description: "Filter by provider id",
              args: { name: "id" },
            },
            {
              name: "--agent",
              description: "Agent id to inspect (overrides OPENCLAW_AGENT_DIR)",
              args: { name: "id" },
            },
            { name: "--json", description: "Output JSON" },
            { name: "--plain", description: "Plain line output" },
          ],
        },
        {
          name: "status",
          description: "Show configured model state",
          options: [
            { name: "--json", description: "Output JSON" },
            { name: "--plain", description: "Plain output" },
            {
              name: "--check",
              description:
                "Check auth/runtime readiness (1=missing/expired/unavailable/incompatible/indeterminate, 2=expiring)",
            },
            {
              name: "--probe",
              description: "Check configured provider auth (live)",
            },
            {
              name: "--probe-provider",
              description: "Only check a single provider",
              args: { name: "name" },
            },
            {
              name: "--probe-profile",
              description:
                "Only check specific auth profile ids (repeat or comma-separated)",
              args: { name: "id" },
            },
            {
              name: "--probe-timeout",
              description: "Timeout per check in ms",
              args: { name: "ms" },
            },
            {
              name: "--probe-concurrency",
              description: "Concurrent checks",
              args: { name: "n" },
            },
            {
              name: "--probe-max-tokens",
              description: "Maximum tokens per check (best-effort)",
              args: { name: "n" },
            },
            {
              name: "--agent",
              description: "Agent id to inspect (overrides OPENCLAW_AGENT_DIR)",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "refresh",
          description: "Refresh the hosted model catalog",
          options: [{ name: "--json", description: "Output JSON" }],
        },
        {
          name: "set",
          description: "Set the default model",
          args: { name: "model", description: "Model id or alias" },
        },
        {
          name: "set-image",
          description: "Set the image model",
          args: { name: "model", description: "Model id or alias" },
        },
        {
          name: "aliases",
          description: "Manage model aliases",
          subcommands: [
            {
              name: "list",
              description: "List model aliases",
              options: modelsCliOptions,
            },
            {
              name: "add",
              description: "Add or update a model alias",
              args: [
                { name: "alias", description: "Alias name" },
                { name: "model", description: "Model id or alias" },
              ],
            },
            {
              name: "remove",
              description: "Remove a model alias",
              args: { name: "alias", description: "Alias name" },
            },
          ],
        },
        {
          name: "fallbacks",
          description: "Manage model fallback list",
          subcommands: [
            {
              name: "list",
              description: "List fallback models",
              options: modelsCliOptions,
            },
            {
              name: "add",
              description: "Add a fallback model",
              args: { name: "model", description: "Model id or alias" },
            },
            {
              name: "remove",
              description: "Remove a fallback model",
              args: { name: "model", description: "Model id or alias" },
            },
            { name: "clear", description: "Clear all fallback models" },
          ],
        },
        {
          name: "image-fallbacks",
          description: "Manage image model fallback list",
          subcommands: [
            {
              name: "list",
              description: "List image fallback models",
              options: modelsCliOptions,
            },
            {
              name: "add",
              description: "Add an image fallback model",
              args: { name: "model", description: "Model id or alias" },
            },
            {
              name: "remove",
              description: "Remove an image fallback model",
              args: { name: "model", description: "Model id or alias" },
            },
            { name: "clear", description: "Clear all image fallback models" },
          ],
        },
        {
          name: "scan",
          description: "Scan OpenRouter free models for tools + images",
          options: [
            {
              name: "--min-params",
              description: "Minimum parameter size (billions)",
              args: { name: "b" },
            },
            {
              name: "--max-age-days",
              description: "Skip models older than N days",
              args: { name: "days" },
            },
            {
              name: "--provider",
              description: "Filter by provider prefix",
              args: { name: "name" },
            },
            {
              name: "--max-candidates",
              description: "Max fallback candidates",
              args: { name: "n" },
            },
            {
              name: "--timeout",
              description: "Timeout per check in ms",
              args: { name: "ms" },
            },
            {
              name: "--concurrency",
              description: "Check concurrency",
              args: { name: "n" },
            },
            {
              name: "--no-probe",
              description:
                "Skip live checks; list free candidates only (writes no config)",
            },
            { name: "--yes", description: "Accept defaults without prompting" },
            {
              name: "--no-input",
              description: "Disable prompts (use defaults)",
            },
            {
              name: "--set-default",
              description:
                "Also set agents.defaults.model primary to the first selection (fallbacks are replaced either way)",
            },
            {
              name: "--set-image",
              description:
                "Also set agents.defaults.imageModel primary to the first image selection",
            },
            { name: "--json", description: "Output JSON" },
          ],
        },
        {
          name: "auth",
          description: "Manage system/agent credentials on this machine",
          subcommands: [
            {
              name: "list",
              description: "List saved auth profiles",
              options: [
                {
                  name: "--provider",
                  description: "Filter by provider id",
                  args: { name: "id" },
                },
                {
                  name: "--agent",
                  description: "Agent id (default: configured system agent)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output JSON" },
              ],
            },
            {
              name: "add",
              description:
                "Interactive auth helper (provider auth or paste token)",
              options: [
                {
                  name: "--agent",
                  description: "Agent id (default: configured default agent)",
                  args: { name: "id" },
                },
              ],
            },
            {
              name: "activate",
              description: "Test a saved sign-in and use it for this agent",
              options: [
                {
                  name: "--agent",
                  description: "Agent id (default: the only configured agent)",
                  args: { name: "id" },
                },
              ],
              args: {
                name: "profileId",
                description: "Saved sign-in id from models auth list",
              },
            },
            {
              name: "logout",
              description:
                "Remove a saved auth profile (see `models auth list` for ids)",
              options: [
                {
                  name: "--agent",
                  description: "Agent id (default: configured default agent)",
                  args: { name: "id" },
                },
                { name: "--yes", description: "Skip the confirmation prompt" },
              ],
              args: {
                name: "profileId",
                description: "Auth profile id (e.g. openai:manual)",
              },
            },
            {
              name: "login",
              description:
                "Sign in for system/agent use on this machine (OAuth/API key)",
              options: [
                {
                  name: "--agent",
                  description: "Agent id (default: configured default agent)",
                  args: { name: "id" },
                },
                {
                  name: "--provider",
                  description: "Provider id registered by a plugin",
                  args: { name: "id" },
                },
                {
                  name: "--method",
                  description: "Provider auth method id",
                  args: { name: "id" },
                },
                {
                  name: "--device-code",
                  description: "Use the provider device-code auth method",
                },
                {
                  name: "--profile-id",
                  description:
                    "Auth profile id override for single-profile login methods",
                  args: { name: "id" },
                },
                {
                  name: "--set-default",
                  description:
                    "Apply the provider's default model recommendation",
                },
                {
                  name: "--force",
                  description:
                    "Remove existing profiles for the provider before logging in (use when a cached OAuth profile is stuck or you want to switch accounts)",
                },
              ],
            },
            {
              name: "setup-token",
              description:
                "Run a provider CLI to create/sync a token (TTY required)",
              options: [
                {
                  name: "--agent",
                  description: "Agent id (default: configured default agent)",
                  args: { name: "id" },
                },
                {
                  name: "--provider",
                  description: "Provider id",
                  args: { name: "name" },
                },
                { name: "--yes", description: "Skip confirmation" },
              ],
            },
            {
              name: "paste-token",
              description: "Save a token in an auth profile and update config",
              options: [
                {
                  name: "--agent",
                  description: "Agent id (default: configured default agent)",
                  args: { name: "id" },
                },
                {
                  name: "--provider",
                  description: "Provider id (e.g. anthropic)",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--profile-id",
                  description: "Auth profile id (default: <provider>:manual)",
                  args: { name: "id" },
                },
                {
                  name: "--expires-in",
                  description:
                    "Optional expiry duration (e.g. 365d, 12h). Stored as absolute expiresAt",
                  args: { name: "duration" },
                },
              ],
            },
            {
              name: "paste-api-key",
              description:
                "Save an API key in an auth profile and update config",
              options: [
                {
                  name: "--agent",
                  description: "Agent id (default: configured default agent)",
                  args: { name: "id" },
                },
                {
                  name: "--provider",
                  description: "Provider id (e.g. openai)",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--profile-id",
                  description: "Auth profile id (default: <provider>:manual)",
                  args: { name: "id" },
                },
              ],
            },
            {
              name: "login-github-copilot",
              description:
                "Login to GitHub Copilot via GitHub device flow (TTY required)",
              options: [
                {
                  name: "--agent",
                  description: "Agent id (default: configured default agent)",
                  args: { name: "id" },
                },
                {
                  name: "--yes",
                  description: "Overwrite existing profile without prompting",
                },
              ],
            },
            {
              name: "order",
              description: "Manage per-agent auth profile order overrides",
              subcommands: [
                {
                  name: "get",
                  description: "Show per-agent auth profile order override",
                  options: [
                    {
                      name: "--provider",
                      description: "Provider id (e.g. anthropic)",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--agent",
                      description:
                        "Agent id (default: configured system agent)",
                      args: { name: "id" },
                    },
                    { name: "--json", description: "Output JSON" },
                  ],
                },
                {
                  name: "set",
                  description: "Set per-agent auth profile order override",
                  options: modelsAuthOrderSetOptions,
                  args: {
                    name: "profileIds",
                    description: "Auth profile ids (e.g. anthropic:default)",
                    isVariadic: true,
                  },
                },
                {
                  name: "clear",
                  description: "Clear per-agent auth profile order override",
                  options: modelsAuthOrderSetOptions,
                },
              ],
            },
          ],
          options: [
            {
              name: "--agent",
              description: "Agent id for auth commands",
              args: { name: "id" },
            },
          ],
        },
      ],
      options: [
        {
          name: "--json",
          description: "Output JSON (alias for `models status --json`)",
        },
        {
          name: "--status-json",
          description: "Output JSON (alias for `models status --json`)",
        },
        {
          name: "--status-plain",
          description: "Plain output (alias for `models status --plain`)",
        },
        {
          name: "--agent",
          description: "Agent id to inspect (overrides OPENCLAW_AGENT_DIR)",
          args: { name: "id" },
        },
      ],
    },
    {
      name: "promos",
      description: "Discover and claim promotional model offers from ClawHub",
      subcommands: [
        {
          name: "list",
          description: "List active promotions",
          options: [{ name: "--json", description: "Output JSON" }],
        },
        {
          name: "claim",
          description:
            "Claim a promotion: set up provider auth and register its models",
          options: [
            {
              name: "--api-key",
              description: "Provider API key for non-interactive setup",
              args: { name: "key" },
            },
            {
              name: "--set-default",
              description:
                "Set the promotion's suggested model as default without asking",
            },
          ],
          args: {
            name: "slug",
            description: "Promotion slug from `openclaw promos list`",
          },
        },
      ],
    },
    {
      name: "telemetry",
      description: "Inspect and manage anonymous usage telemetry",
      subcommands: [
        {
          name: "show",
          description: "Preview the daily update request from this CLI process",
          options: [
            {
              name: "--json",
              description: "Print the request and payload as JSON",
            },
          ],
        },
        { name: "on", description: "Enable anonymous feature statistics" },
        { name: "off", description: "Disable anonymous feature statistics" },
      ],
    },
    {
      name: ["infer", "capability"],
      description:
        "Run provider-backed inference commands through a stable CLI surface",
      subcommands: [
        {
          name: "list",
          description: "List capability IDs and supported transports",
          options: [{ name: "--json", description: "Output JSON" }],
        },
        {
          name: "inspect",
          description: "Inspect one capability ID",
          options: [
            {
              name: "--name",
              description: "Capability id",
              args: { name: "capability" },
              isRequired: true,
            },
            { name: "--json", description: "Output JSON" },
          ],
        },
        {
          name: "model",
          description: "Text inference and model catalog commands",
          subcommands: [
            {
              name: "run",
              description: "Run a one-shot model turn",
              options: [
                {
                  name: "--prompt",
                  description: "Prompt text",
                  args: { name: "text" },
                  isRequired: true,
                },
                {
                  name: "--file",
                  description: "Image file",
                  args: { name: "path", template: "filepaths" },
                  isRepeatable: true,
                },
                {
                  name: "--model",
                  description: "Model override",
                  args: { name: "provider/model" },
                },
                {
                  name: "--thinking",
                  description: "Thinking level override",
                  args: {
                    name: "level",
                    suggestions: [
                      "off",
                      "minimal",
                      "low",
                      "medium",
                      "high",
                      "xhigh",
                      "adaptive",
                      "max",
                      "ultra",
                    ],
                  },
                },
                { name: "--local", description: "Force local execution" },
                { name: "--gateway", description: "Force gateway execution" },
                {
                  name: "--agent",
                  description:
                    "Agent whose model and credentials own the run (default: agents.defaults.systemAgent.agentId, then the sole agent)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output JSON" },
              ],
            },
            {
              name: "list",
              description: "List known models",
              options: [{ name: "--json", description: "Output JSON" }],
            },
            {
              name: "inspect",
              description: "Inspect one model catalog entry",
              options: [
                {
                  name: "--model",
                  description: "Model id",
                  args: { name: "provider/model" },
                  isRequired: true,
                },
                { name: "--json", description: "Output JSON" },
              ],
            },
            {
              name: "providers",
              description: "List model providers from the catalog",
              options: localProvidersCommandOptions,
            },
            {
              name: "auth",
              description: "Provider auth helpers",
              subcommands: [
                {
                  name: "login",
                  description: "Run provider auth login",
                  options: [
                    {
                      name: "--provider",
                      description: "Provider id",
                      args: { name: "id" },
                      isRequired: true,
                    },
                    {
                      name: "--method",
                      description: "Provider auth method id",
                      args: { name: "id" },
                    },
                    {
                      name: "--agent",
                      description:
                        "Agent id (default: configured default agent)",
                      args: { name: "id" },
                    },
                  ],
                },
                {
                  name: "logout",
                  description: "Remove saved auth profiles for one provider",
                  options: [
                    {
                      name: "--provider",
                      description: "Provider id",
                      args: { name: "id" },
                      isRequired: true,
                    },
                    {
                      name: "--agent",
                      description:
                        "Agent id (default: agents.defaults.systemAgent.agentId, then the sole agent)",
                      args: { name: "id" },
                    },
                    { name: "--json", description: "Output JSON" },
                  ],
                },
                {
                  name: "status",
                  description: "Show configured auth state",
                  options: [
                    {
                      name: "--agent",
                      description:
                        "Agent id (default: configured default agent)",
                      args: { name: "id" },
                    },
                    { name: "--json", description: "Output JSON" },
                  ],
                },
              ],
              options: [
                {
                  name: "--agent",
                  description: "Agent id (default: configured default agent)",
                  args: { name: "id" },
                },
              ],
            },
          ],
          options: [
            {
              name: "--agent",
              description: "Agent whose model and auth state should be used",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "image",
          description: "Image generation and description",
          subcommands: [
            {
              name: "generate",
              description: "Generate images",
              options: [
                {
                  name: "--prompt",
                  description: "Prompt text",
                  args: { name: "text" },
                  isRequired: true,
                },
                {
                  name: "--model",
                  description: "Model override",
                  args: { name: "provider/model" },
                },
                {
                  name: "--count",
                  description: "Number of images",
                  args: { name: "n" },
                },
                {
                  name: "--size",
                  description: "Size hint like 1024x1024",
                  args: { name: "size" },
                },
                {
                  name: "--aspect-ratio",
                  description: "Aspect ratio hint like 16:9",
                  args: { name: "ratio" },
                },
                {
                  name: "--resolution",
                  description: "Resolution hint: 1K, 2K, or 4K",
                  args: { name: "value" },
                },
                {
                  name: "--output-format",
                  description: "Output format hint: png, jpeg, or webp",
                  args: { name: "format" },
                },
                {
                  name: "--background",
                  description: "Background hint: transparent, opaque, or auto",
                  args: { name: "value" },
                },
                {
                  name: "--openai-background",
                  description:
                    "OpenAI background hint: transparent, opaque, or auto",
                  args: { name: "value" },
                },
                {
                  name: "--openai-moderation",
                  description: "OpenAI moderation hint: low or auto",
                  args: { name: "value" },
                },
                {
                  name: "--quality",
                  description:
                    "Quality hint: low, medium, high, xhigh, max, or auto",
                  args: { name: "value" },
                },
                {
                  name: "--timeout-ms",
                  description: "Provider request timeout in milliseconds",
                  args: { name: "ms" },
                },
                {
                  name: "--output",
                  description: "Output path",
                  args: { name: "path", template: "filepaths" },
                },
                {
                  name: "--agent",
                  description:
                    "Agent whose saved provider auth is used (default: agents.defaults.systemAgent.agentId, then the sole agent)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output JSON" },
              ],
            },
            {
              name: "edit",
              description: "Edit images with one or more input files",
              options: [
                {
                  name: "--file",
                  description: "Input file",
                  args: { name: "path", template: "filepaths" },
                  isRepeatable: true,
                  isRequired: true,
                },
                {
                  name: "--prompt",
                  description: "Prompt text",
                  args: { name: "text" },
                  isRequired: true,
                },
                {
                  name: "--model",
                  description: "Model override",
                  args: { name: "provider/model" },
                },
                {
                  name: "--count",
                  description: "Number of images",
                  args: { name: "n" },
                },
                {
                  name: "--size",
                  description: "Size hint like 1024x1024",
                  args: { name: "size" },
                },
                {
                  name: "--aspect-ratio",
                  description: "Aspect ratio hint like 16:9",
                  args: { name: "ratio" },
                },
                {
                  name: "--resolution",
                  description: "Resolution hint: 1K, 2K, or 4K",
                  args: { name: "value" },
                },
                {
                  name: "--output-format",
                  description: "Output format hint: png, jpeg, or webp",
                  args: { name: "format" },
                },
                {
                  name: "--background",
                  description: "Background hint: transparent, opaque, or auto",
                  args: { name: "value" },
                },
                {
                  name: "--openai-background",
                  description:
                    "OpenAI background hint: transparent, opaque, or auto",
                  args: { name: "value" },
                },
                {
                  name: "--openai-moderation",
                  description: "OpenAI moderation hint: low or auto",
                  args: { name: "value" },
                },
                {
                  name: "--quality",
                  description:
                    "Quality hint: low, medium, high, xhigh, max, or auto",
                  args: { name: "value" },
                },
                {
                  name: "--timeout-ms",
                  description: "Provider request timeout in milliseconds",
                  args: { name: "ms" },
                },
                {
                  name: "--output",
                  description: "Output path",
                  args: { name: "path", template: "filepaths" },
                },
                {
                  name: "--agent",
                  description:
                    "Agent whose saved provider auth is used (default: agents.defaults.systemAgent.agentId, then the sole agent)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output JSON" },
              ],
            },
            {
              name: "describe",
              description: "Describe one image file",
              options: [
                {
                  name: "--file",
                  description: "Image file",
                  args: { name: "path", template: "filepaths" },
                  isRequired: true,
                },
                {
                  name: "--prompt",
                  description: "Prompt hint",
                  args: { name: "text" },
                },
                {
                  name: "--model",
                  description: "Model override",
                  args: { name: "provider/model" },
                },
                {
                  name: "--timeout-ms",
                  description: "Provider request timeout in milliseconds",
                  args: { name: "ms" },
                },
                {
                  name: "--agent",
                  description:
                    "Agent whose saved provider auth is used (default: agents.defaults.systemAgent.agentId, then the sole agent)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output JSON" },
              ],
            },
            {
              name: "describe-many",
              description: "Describe multiple image files",
              options: [
                {
                  name: "--file",
                  description: "Image file",
                  args: { name: "path", template: "filepaths" },
                  isRepeatable: true,
                  isRequired: true,
                },
                {
                  name: "--prompt",
                  description: "Prompt hint",
                  args: { name: "text" },
                },
                {
                  name: "--model",
                  description: "Model override",
                  args: { name: "provider/model" },
                },
                {
                  name: "--timeout-ms",
                  description: "Provider request timeout in milliseconds",
                  args: { name: "ms" },
                },
                {
                  name: "--agent",
                  description:
                    "Agent whose saved provider auth is used (default: agents.defaults.systemAgent.agentId, then the sole agent)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output JSON" },
              ],
            },
            {
              name: "providers",
              description: "List image generation providers",
              options: localProvidersCommandOptions,
            },
          ],
          options: [
            {
              name: "--agent",
              description: "Agent whose model and auth state should be used",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "audio",
          description: "Audio transcription",
          subcommands: [
            {
              name: "transcribe",
              description: "Transcribe one audio file",
              options: [
                {
                  name: "--file",
                  description: "Audio file",
                  args: { name: "path", template: "filepaths" },
                  isRequired: true,
                },
                {
                  name: "--agent",
                  description:
                    "Agent whose model and auth state should be used",
                  args: { name: "id" },
                },
                {
                  name: "--language",
                  description: "Language hint",
                  args: { name: "code" },
                },
                {
                  name: "--prompt",
                  description: "Prompt hint",
                  args: { name: "text" },
                },
                {
                  name: "--model",
                  description: "Model override",
                  args: { name: "provider/model" },
                },
                { name: "--json", description: "Output JSON" },
              ],
            },
            {
              name: "providers",
              description: "List audio transcription providers",
              options: localProvidersCommandOptions,
            },
          ],
          options: [
            {
              name: "--agent",
              description: "Agent whose model and auth state should be used",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "tts",
          description: "Text to speech",
          subcommands: [
            {
              name: "convert",
              description: "Convert text to speech",
              options: [
                {
                  name: "--text",
                  description: "Input text",
                  args: { name: "text" },
                  isRequired: true,
                },
                {
                  name: "--channel",
                  description: "Channel hint",
                  args: { name: "id", suggestions: channels },
                },
                {
                  name: "--voice",
                  description: "Voice hint",
                  args: { name: "id" },
                },
                {
                  name: "--provider",
                  description: "Speech provider id",
                  args: { name: "id" },
                },
                {
                  name: "--model",
                  description: "Model override",
                  args: { name: "provider/model" },
                },
                {
                  name: "--output",
                  description: "Output path",
                  args: { name: "path", template: "filepaths" },
                },
                ...transportTtsCommandOptions,
              ],
            },
            {
              name: "voices",
              description: "List voices for a TTS provider",
              options: [
                {
                  name: "--provider",
                  description: "Speech provider id",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output JSON" },
              ],
            },
            {
              name: "providers",
              description: "List speech providers",
              options: [
                {
                  name: "--agent",
                  description: "Agent whose provider state should be inspected",
                  args: { name: "id" },
                },
                ...transportTtsCommandOptions,
              ],
            },
            {
              name: "personas",
              description: "List TTS personas",
              options: transportTtsCommandOptions,
            },
            {
              name: "status",
              description: "Show TTS status",
              options: [
                { name: "--gateway", description: "Force gateway execution" },
                { name: "--json", description: "Output JSON" },
              ],
            },
            {
              name: "enable",
              description: "Enable TTS",
              options: transportTtsCommandOptions,
            },
            {
              name: "disable",
              description: "Disable TTS",
              options: transportTtsCommandOptions,
            },
            {
              name: "set-provider",
              description: "Set the active TTS provider",
              options: [
                {
                  name: "--provider",
                  description: "Speech provider id",
                  args: { name: "id" },
                  isRequired: true,
                },
                ...transportTtsCommandOptions,
              ],
            },
            {
              name: "set-persona",
              description: "Set the active TTS persona",
              options: [
                {
                  name: "--persona",
                  description: "TTS persona id",
                  args: { name: "id" },
                },
                {
                  name: "--off",
                  description: "Disable the active TTS persona",
                },
                ...transportTtsCommandOptions,
              ],
            },
          ],
        },
        {
          name: "video",
          description: "Video generation and description",
          subcommands: [
            {
              name: "generate",
              description: "Generate video",
              options: [
                {
                  name: "--prompt",
                  description: "Prompt text",
                  args: { name: "text" },
                  isRequired: true,
                },
                {
                  name: "--model",
                  description: "Model override",
                  args: { name: "provider/model" },
                },
                {
                  name: "--size",
                  description: "Size hint like 1280x720",
                  args: { name: "size" },
                },
                {
                  name: "--aspect-ratio",
                  description: "Aspect ratio hint like 16:9",
                  args: { name: "ratio" },
                },
                {
                  name: "--resolution",
                  description:
                    "Resolution hint: 360P, 480P, 540P, 720P, 768P, or 1080P",
                  args: { name: "value" },
                },
                {
                  name: "--duration",
                  description: "Target duration in seconds",
                  args: { name: "seconds" },
                },
                {
                  name: "--audio",
                  description: "Enable generated audio when supported",
                },
                {
                  name: "--watermark",
                  description: "Request provider watermark when supported",
                },
                {
                  name: "--timeout-ms",
                  description: "Provider request timeout in milliseconds",
                  args: { name: "ms" },
                },
                {
                  name: "--output",
                  description: "Output path",
                  args: { name: "path", template: "filepaths" },
                },
                {
                  name: "--agent",
                  description:
                    "Agent whose saved provider auth is used (default: agents.defaults.systemAgent.agentId, then the sole agent)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output JSON" },
              ],
            },
            {
              name: "describe",
              description: "Describe one video file",
              options: [
                {
                  name: "--file",
                  description: "Video file",
                  args: { name: "path", template: "filepaths" },
                  isRequired: true,
                },
                {
                  name: "--agent",
                  description:
                    "Agent whose model and auth state should be used",
                  args: { name: "id" },
                },
                {
                  name: "--model",
                  description: "Model override",
                  args: { name: "provider/model" },
                },
                { name: "--json", description: "Output JSON" },
              ],
            },
            {
              name: "providers",
              description: "List video generation and description providers",
              options: localProvidersCommandOptions,
            },
          ],
          options: [
            {
              name: "--agent",
              description: "Agent whose model and auth state should be used",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "web",
          description: "Web capabilities",
          subcommands: [
            {
              name: "search",
              description: "Run web search",
              options: [
                {
                  name: "--query",
                  description: "Search query",
                  args: { name: "text" },
                  isRequired: true,
                },
                {
                  name: "--provider",
                  description: "Provider id",
                  args: { name: "id" },
                },
                {
                  name: "--limit",
                  description: "Result limit",
                  args: { name: "n" },
                },
                { name: "--json", description: "Output JSON" },
              ],
            },
            {
              name: "fetch",
              description: "Fetch one URL",
              options: [
                {
                  name: "--url",
                  description: "URL",
                  args: { name: "url" },
                  isRequired: true,
                },
                {
                  name: "--provider",
                  description: "Provider id",
                  args: { name: "id" },
                },
                {
                  name: "--format",
                  description: "Format hint",
                  args: { name: "format" },
                },
                { name: "--json", description: "Output JSON" },
              ],
            },
            {
              name: "providers",
              description: "List web providers",
              options: localProvidersCommandOptions,
            },
          ],
        },
        {
          name: "embedding",
          description: "Embedding providers",
          subcommands: [
            {
              name: "create",
              description: "Create embeddings",
              options: [
                {
                  name: "--text",
                  description: "Input text",
                  args: { name: "text" },
                  isRepeatable: true,
                  isRequired: true,
                },
                {
                  name: "--provider",
                  description: "Provider id",
                  args: { name: "id" },
                },
                {
                  name: "--model",
                  description: "Model override",
                  args: { name: "provider/model" },
                },
                {
                  name: "--agent",
                  description:
                    "Agent whose saved provider auth is used (default: agents.defaults.systemAgent.agentId, then the sole agent)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output JSON" },
              ],
            },
            {
              name: "providers",
              description: "List embedding providers",
              options: localProvidersCommandOptions,
            },
          ],
          options: [
            {
              name: "--agent",
              description: "Agent whose model and auth state should be used",
              args: { name: "id" },
            },
          ],
        },
      ],
    },
    {
      name: ["approvals", "exec-approvals"],
      description: "Manage approval policy and pending requests",
      subcommands: [
        {
          name: "pending",
          description: "List pending exec, plugin, and system-agent approvals",
          options: nodesCallOptions,
        },
        {
          name: "resolve",
          description: "Resolve a pending approval",
          options: [
            {
              name: "--reason",
              description: "Add a local note to the CLI confirmation",
              args: { name: "text" },
            },
            {
              name: "--expires-in-days",
              description:
                "Allow-always on an automation approval: freeze this grant lifetime instead of the configured default",
              args: { name: "days" },
            },
            ...nodesCallOptions,
          ],
          args: [
            { name: "id" },
            {
              name: "decision",
              suggestions: ["allow-once", "allow-always", "deny"],
            },
          ],
        },
        {
          name: "grants",
          description:
            "Standing grants minted by allow-always on automation approvals",
          subcommands: [
            {
              name: "list",
              description: "List standing grants, newest first",
              options: [
                {
                  name: "--limit",
                  description: "Maximum rows to return (default 200)",
                  args: { name: "n" },
                },
                ...nodesCallOptions,
              ],
            },
            {
              name: "revoke",
              description:
                "Revoke a standing grant; the next occurrence prompts again",
              options: nodesCallOptions,
              args: { name: "grantId" },
            },
          ],
        },
        {
          name: "get",
          description: "Fetch exec approvals snapshot",
          options: [
            {
              name: "--node",
              description: "Target node id/name/IP",
              args: { name: "node" },
            },
            { name: "--gateway", description: "Force gateway approvals" },
            ...nodesCallOptions,
          ],
        },
        {
          name: "set",
          description: "Replace exec approvals with a JSON file",
          options: [
            {
              name: "--node",
              description: "Target node id/name/IP",
              args: { name: "node" },
            },
            { name: "--gateway", description: "Force gateway approvals" },
            {
              name: "--file",
              description: "Path to JSON file to upload",
              args: { name: "path", template: "filepaths" },
            },
            { name: "--stdin", description: "Read JSON from stdin" },
            ...nodesCallOptions,
          ],
        },
        {
          name: "allowlist",
          description: "Edit the per-agent allowlist",
          subcommands: [
            {
              name: "add",
              description: "Add a glob pattern to an allowlist",
              options: [
                ...allowlistMutationCommandOptions,
                ...nodesCallOptions,
              ],
              args: { name: "pattern" },
            },
            {
              name: "remove",
              description: "Remove a glob pattern from an allowlist",
              options: [
                ...allowlistMutationCommandOptions,
                ...nodesCallOptions,
              ],
              args: { name: "pattern" },
            },
          ],
        },
      ],
    },
    {
      name: "exec-policy",
      description:
        "Show or synchronize requested exec policy with host approvals",
      subcommands: [
        {
          name: "show",
          description:
            "Explain terminal tool access and command approvals (offline unless --session)",
          options: [
            {
              name: "--agent",
              description:
                "Agent whose terminal tools to inspect (automatic for one agent)",
              args: { name: "id" },
            },
            {
              name: "--session",
              description:
                "Fetch an existing session's tool preview from saved settings",
              args: { name: "key" },
            },
            {
              name: "--verbose",
              description:
                "Include policy sources and all command approval scopes",
            },
            { name: "--json", description: "Output as JSON" },
            ...gatewayClientOptions,
          ],
        },
        {
          name: "preset",
          description:
            'Apply a synchronized preset: "yolo", "cautious", or "deny-all"',
          options: [{ name: "--json", description: "Output as JSON" }],
          args: { name: "name", suggestions: ["yolo", "cautious", "deny-all"] },
        },
        {
          name: "set",
          description:
            "Synchronize local config and host approvals using explicit values",
          options: [
            {
              name: "--host",
              description: "Exec host target: auto|sandbox|gateway|node",
              args: {
                name: "host",
                suggestions: ["auto", "sandbox", "gateway", "node"],
              },
            },
            {
              name: "--security",
              description: "Exec security: deny|allowlist|full",
              args: {
                name: "mode",
                suggestions: ["deny", "allowlist", "full"],
              },
            },
            {
              name: "--ask",
              description: "Exec ask mode: off|on-miss|always",
              args: { name: "mode", suggestions: ["off", "on-miss", "always"] },
            },
            {
              name: "--ask-fallback",
              description: "Host approvals fallback: deny|allowlist|full",
              args: {
                name: "mode",
                suggestions: ["deny", "allowlist", "full"],
              },
            },
            { name: "--json", description: "Output as JSON" },
          ],
        },
      ],
    },
    {
      name: "nodes",
      description:
        "Manage gateway-owned nodes (pairing, status, invoke, and media)",
      subcommands: [
        {
          name: "status",
          description:
            "List known nodes with connection status and capabilities",
          options: [...nodesStatusCommandsOptions, ...nodesCallOptions],
        },
        {
          name: "describe",
          description:
            "Describe a node (capabilities + supported invoke commands)",
          options: [
            {
              name: "--node",
              description: "Node id, name, or IP",
              args: { name: "idOrNameOrIp" },
              isRequired: true,
            },
            ...nodesCallOptions,
          ],
        },
        {
          name: "list",
          description: "List pending and paired nodes",
          options: [...nodesStatusCommandsOptions, ...nodesCallOptions],
        },
        {
          name: "pending",
          description: "List pending pairing requests",
          options: nodesCallOptions,
        },
        {
          name: "approve",
          description: "Approve a pending pairing request",
          options: nodesCallOptions,
          args: { name: "requestId", description: "Pending request id" },
        },
        {
          name: "reject",
          description: "Reject a pending pairing request",
          options: nodesCallOptions,
          args: { name: "requestId", description: "Pending request id" },
        },
        {
          name: "remove",
          description: "Remove a paired node entry",
          options: [
            {
              name: "--node",
              description: "Node id, name, or IP",
              args: { name: "idOrNameOrIp" },
              isRequired: true,
            },
            ...nodesCallOptions,
          ],
        },
        {
          name: "rename",
          description: "Rename a paired node (display name override)",
          options: [
            {
              name: "--node",
              description: "Node id, name, or IP",
              args: { name: "idOrNameOrIp" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "New display name",
              args: { name: "displayName" },
              isRequired: true,
            },
            ...nodesCallOptions,
          ],
        },
        {
          name: "invoke",
          description: "Invoke a command on a paired node",
          options: [
            {
              name: "--node",
              description: "Node id, name, or IP",
              args: { name: "idOrNameOrIp" },
              isRequired: true,
            },
            {
              name: "--command",
              description: "Command (e.g. canvas.navigate)",
              args: { name: "command" },
              isRequired: true,
            },
            {
              name: "--params",
              description: "JSON object string for params",
              args: { name: "json" },
            },
            {
              name: "--invoke-timeout",
              description: "Node invoke timeout in ms (default 15000)",
              args: { name: "ms" },
            },
            {
              name: "--idempotency-key",
              description: "Key to avoid duplicate requests (optional)",
              args: { name: "key" },
            },
            ...nodesCallOptions,
          ],
        },
        {
          name: "notify",
          description: "Send a local notification on a node",
          options: [
            {
              name: "--node",
              description: "Node id, name, or IP",
              args: { name: "idOrNameOrIp" },
              isRequired: true,
            },
            {
              name: "--title",
              description: "Notification title",
              args: { name: "text" },
            },
            {
              name: "--body",
              description: "Notification body",
              args: { name: "text" },
            },
            {
              name: "--sound",
              description: "Notification sound",
              args: { name: "name" },
            },
            {
              name: "--priority",
              description: "Notification priority",
              args: {
                name: "passive|active|timeSensitive",
                suggestions: ["passive", "active", "timeSensitive"],
              },
            },
            {
              name: "--delivery",
              description: "Delivery mode",
              args: {
                name: "system|overlay|auto",
                suggestions: ["system", "overlay", "auto"],
              },
            },
            {
              name: "--invoke-timeout",
              description: "Node invoke timeout in ms (default 15000)",
              args: { name: "ms" },
            },
            ...nodesCallOptions,
          ],
        },
        {
          name: "push",
          description: "Send an APNs test push to an iOS node",
          options: [
            {
              name: "--node",
              description: "Node id, name, or IP",
              args: { name: "idOrNameOrIp" },
              isRequired: true,
            },
            {
              name: "--title",
              description: "Push title",
              args: { name: "text" },
            },
            {
              name: "--body",
              description: "Push body",
              args: { name: "text" },
            },
            {
              name: "--environment",
              description: "Override APNs environment",
              args: {
                name: "sandbox|production",
                suggestions: ["sandbox", "production"],
              },
            },
            ...nodesCallOptions,
          ],
        },
        {
          name: "camera",
          description: "Capture camera media from a paired node",
          subcommands: [
            {
              name: "list",
              description: "List available cameras on a node",
              options: [
                {
                  name: "--node",
                  description: "Node id, name, or IP",
                  args: { name: "idOrNameOrIp" },
                  isRequired: true,
                },
                ...nodesCallOptions,
              ],
            },
            {
              name: "snap",
              description:
                "Capture a photo from a node camera (prints the saved path)",
              options: [
                {
                  name: "--node",
                  description: "Node id, name, or IP",
                  args: { name: "idOrNameOrIp" },
                  isRequired: true,
                },
                {
                  name: "--facing",
                  description: "Camera facing",
                  args: {
                    name: "front|back|both",
                    suggestions: ["front", "back", "both"],
                  },
                },
                {
                  name: "--device-id",
                  description: "Camera device id (from nodes camera list)",
                  args: { name: "id" },
                },
                {
                  name: "--max-width",
                  description: "Max width in px (optional)",
                  args: { name: "px" },
                },
                {
                  name: "--quality",
                  description:
                    "JPEG quality (optional; platform-specific default)",
                  args: { name: "0-1" },
                },
                {
                  name: "--delay-ms",
                  description:
                    "Delay before capture in ms (optional; platform-specific default)",
                  args: { name: "ms" },
                },
                {
                  name: "--invoke-timeout",
                  description: "Node invoke timeout in ms (default 20000)",
                  args: { name: "ms" },
                },
                ...nodesCallOptions,
              ],
            },
            {
              name: "clip",
              description:
                "Capture a short video clip from a node camera (prints the saved path)",
              options: [
                {
                  name: "--node",
                  description: "Node id, name, or IP",
                  args: { name: "idOrNameOrIp" },
                  isRequired: true,
                },
                {
                  name: "--facing",
                  description: "Camera facing",
                  args: { name: "front|back", suggestions: ["front", "back"] },
                },
                {
                  name: "--device-id",
                  description: "Camera device id (from nodes camera list)",
                  args: { name: "id" },
                },
                {
                  name: "--duration",
                  description:
                    "Duration (default 3000ms; supports ms/s/m, e.g. 10s)",
                  args: { name: "ms|10s|1m" },
                },
                { name: "--no-audio", description: "Disable audio capture" },
                {
                  name: "--invoke-timeout",
                  description: "Node invoke timeout in ms (default 90000)",
                  args: { name: "ms" },
                },
                ...nodesCallOptions,
              ],
            },
          ],
        },
        {
          name: "screen",
          description: "Capture screen recordings from a paired node",
          subcommands: [
            {
              name: "record",
              description:
                "Capture a short screen recording from a node (prints the saved path)",
              options: [
                {
                  name: "--node",
                  description: "Node id, name, or IP",
                  args: { name: "idOrNameOrIp" },
                  isRequired: true,
                },
                {
                  name: "--screen",
                  description: "Screen index (0 = primary)",
                  args: { name: "index" },
                },
                {
                  name: "--duration",
                  description: "Clip duration (ms or 10s)",
                  args: { name: "ms|10s" },
                },
                {
                  name: "--fps",
                  description: "Frames per second",
                  args: { name: "fps" },
                },
                {
                  name: "--no-audio",
                  description: "Disable microphone audio capture",
                },
                {
                  name: "--out",
                  description: "Output path",
                  args: { name: "path", template: "filepaths" },
                },
                {
                  name: "--invoke-timeout",
                  description: "Node invoke timeout in ms (default 120000)",
                  args: { name: "ms" },
                },
                ...nodesCallOptions,
              ],
            },
          ],
        },
        {
          name: "location",
          description: "Fetch location from a paired node",
          subcommands: [
            {
              name: "get",
              description: "Fetch the current location from a node",
              options: [
                {
                  name: "--node",
                  description: "Node id, name, or IP",
                  args: { name: "idOrNameOrIp" },
                  isRequired: true,
                },
                {
                  name: "--max-age",
                  description: "Use cached location newer than this (ms)",
                  args: { name: "ms" },
                },
                {
                  name: "--accuracy",
                  description:
                    "Desired accuracy (default: balanced/precise depending on node setting)",
                  args: {
                    name: "coarse|balanced|precise",
                    suggestions: ["coarse", "balanced", "precise"],
                  },
                },
                {
                  name: "--location-timeout",
                  description: "Location fix timeout (ms)",
                  args: { name: "ms" },
                },
                {
                  name: "--invoke-timeout",
                  description: "Node invoke timeout in ms (default 20000)",
                  args: { name: "ms" },
                },
                ...nodesCallOptions,
              ],
            },
          ],
        },
        {
          name: "canvas",
          description: "Present widget documents on a paired macOS panel",
          subcommands: [
            {
              name: "present",
              description:
                "Show the canvas (optionally with a target URL/path)",
              options: [
                {
                  name: "--node",
                  description: "Node id, name, or IP",
                  args: { name: "idOrNameOrIp" },
                  isRequired: true,
                },
                {
                  name: "--target",
                  description: "Target URL/path (optional)",
                  args: { name: "urlOrPath" },
                },
                {
                  name: "--x",
                  description: "Placement x coordinate",
                  args: { name: "px" },
                },
                {
                  name: "--y",
                  description: "Placement y coordinate",
                  args: { name: "px" },
                },
                {
                  name: "--width",
                  description: "Placement width",
                  args: { name: "px" },
                },
                {
                  name: "--height",
                  description: "Placement height",
                  args: { name: "px" },
                },
                {
                  name: "--invoke-timeout",
                  description: "Node invoke timeout in ms",
                  args: { name: "ms" },
                },
                ...nodesCallOptions,
              ],
            },
            {
              name: "hide",
              description: "Hide the canvas",
              options: [...nodesCanvasCommandsOptions, ...nodesCallOptions],
            },
            {
              name: "navigate",
              description: "Navigate the canvas to a URL",
              options: [...nodesCanvasCommandsOptions, ...nodesCallOptions],
              args: { name: "url", description: "Target URL/path" },
            },
          ],
        },
      ],
    },
    {
      name: "devices",
      description:
        "Device pairing and auth tokens (for mobile app setup codes, use `openclaw qr` instead)",
      subcommands: [
        { name: "list", description: "List pending and paired devices" },
        {
          name: "join-code",
          description:
            "Mint a single-use node onboarding URL (not a mobile app setup code; use `openclaw qr` for that)",
        },
        {
          name: "remove",
          description: "Remove a paired device entry",
          args: { name: "deviceId", description: "Paired device id" },
        },
        {
          name: "clear",
          description: "Clear paired devices from the gateway table",
          options: [
            {
              name: "--pending",
              description: "Also reject all pending pairing requests",
            },
            { name: "--yes", description: "Confirm destructive clear" },
          ],
        },
        {
          name: "approve",
          description: "Approve a pending device pairing request",
          options: [
            {
              name: "--latest",
              description:
                "Show the most recent pending request to approve explicitly",
            },
          ],
          args: {
            name: "requestId",
            description: "Pending request id",
            isOptional: true,
          },
        },
        {
          name: "reject",
          description: "Reject a pending device pairing request",
          args: { name: "requestId", description: "Pending request id" },
        },
        {
          name: "rename",
          description: "Assign an operator label to a paired device",
          options: [
            {
              name: "--device",
              description: "Device id",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Operator-assigned label (max 64 characters)",
              args: { name: "label" },
              isRequired: true,
            },
          ],
        },
        {
          name: "rotate",
          description: "Rotate a device token for a role",
          options: [
            {
              name: "--device",
              description: "Device id",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: "--role",
              description: "Role name",
              args: { name: "role" },
              isRequired: true,
            },
            {
              name: "--scope",
              description: "Scopes to attach to the token (repeatable)",
              args: { name: "scope", isVariadic: true },
              isRepeatable: true,
            },
            {
              name: "--no-scopes",
              description: "Rotate with an empty scope set",
            },
          ],
        },
        {
          name: "revoke",
          description: "Revoke a device token for a role",
          options: [
            {
              name: "--device",
              description: "Device id",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: "--role",
              description: "Role name",
              args: { name: "role" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "users",
      description: "Manage durable user profiles and email aliases",
      subcommands: [
        {
          name: "list",
          description: "List durable user profiles",
          options: usersGatewayOptions,
        },
        {
          name: "link-email",
          description: "Link an email alias to a user profile",
          options: [
            {
              name: "--to",
              description: "Target profile id",
              args: { name: "profileId" },
              isRequired: true,
            },
            ...usersGatewayOptions,
          ],
          args: { name: "email" },
        },
        {
          name: "merge",
          description:
            "Merge a duplicate user profile into a surviving profile",
          options: [
            {
              name: "--into",
              description: "Surviving profile id",
              args: { name: "targetProfileId" },
              isRequired: true,
            },
            ...usersGatewayOptions,
          ],
          args: { name: "sourceProfileId" },
        },
      ],
    },
    {
      name: "node",
      description: "Run and manage the headless node host service",
      subcommands: [
        {
          name: "run",
          description: "Run the headless node host (foreground)",
          options: [
            ...nodeCommandOptions,
            {
              name: "--pair",
              description:
                "Pair with a setup code or oc-pair URL; explicit gateway flags take precedence",
              args: { name: "code-or-url" },
            },
            {
              name: "--pair-if-needed",
              description:
                "Use the saved device token when available; otherwise pair with this setup code",
              args: { name: "code-or-url" },
            },
            ...nodeGatewayOptions,
            {
              name: "--session-host",
              description: "Host worker sessions for this foreground process",
            },
            {
              name: "--auth-from-env",
              description:
                "Use environment Gateway credentials instead of the paired device token",
            },
            {
              name: "--share-installed-apps",
              description:
                "Share installed macOS applications with the Gateway",
            },
            {
              name: "--no-share-installed-apps",
              description: "Disable installed application sharing",
            },
          ],
        },
        {
          name: "status",
          description: "Show node host status",
          options: [{ name: "--json", description: "Output JSON" }],
        },
        {
          name: "identity",
          description:
            "Print the node host device identity (device id + public key)",
          options: [{ name: "--json", description: "Output JSON" }],
        },
        {
          name: "install",
          description:
            "Install the node host service (launchd/systemd/schtasks)",
          options: [
            ...nodeCommandOptions,
            ...nodeGatewayOptions,
            {
              name: "--share-installed-apps",
              description:
                "Share installed macOS applications with the Gateway",
            },
            {
              name: "--no-share-installed-apps",
              description: "Disable installed application sharing",
            },
            {
              name: "--runtime",
              description: "Service runtime (node|bun). Default: node",
              args: { name: "runtime", suggestions: ["node", "bun"] },
            },
            {
              name: "--runtime-path",
              description: "Pin an absolute Node/Bun executable path",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--auth-from-env",
              description:
                "Persist environment Gateway credentials instead of the paired device token",
            },
            {
              name: "--force",
              description: "Reinstall/overwrite if already installed",
            },
            { name: "--json", description: "Output JSON" },
          ],
        },
        {
          name: "uninstall",
          description:
            "Uninstall the node host service (launchd/systemd/schtasks)",
          options: [{ name: "--json", description: "Output JSON" }],
        },
        {
          name: "stop",
          description: "Stop the node host service (launchd/systemd/schtasks)",
          options: [{ name: "--json", description: "Output JSON" }],
        },
        {
          name: "start",
          description: "Start the node host service (launchd/systemd/schtasks)",
          options: [{ name: "--json", description: "Output JSON" }],
        },
        {
          name: "restart",
          description:
            "Restart the node host service (launchd/systemd/schtasks)",
          options: [{ name: "--json", description: "Output JSON" }],
        },
      ],
      options: nodeCommandOptions,
    },
    {
      name: "connect",
      description: "Connect this machine to an OpenClaw Gateway as a node",
      options: [
        ...nodeCommandOptions,
        {
          name: "--service",
          description: "Install and run the node host as an OS service",
        },
        {
          name: "--ephemeral",
          description: "Run as an environment-managed disposable session host",
        },
        {
          name: "--session-host",
          description:
            "Host worker sessions (process-scoped unless installed as a service)",
        },
        {
          name: "--target-file",
          description:
            "Read the connect target from a private file and remove it",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--display-name",
          description: "Override the node display name",
          args: { name: "name" },
        },
      ],
      args: {
        name: "target",
        description: "Oc-pair URL, setup code, or HTTPS Gateway join URL",
        isOptional: true,
      },
    },
    { name: "worker", description: "Run the restricted cloud worker runtime" },
    {
      name: "sandbox",
      description: "Manage sandbox containers (Docker-based agent isolation)",
      subcommands: [
        {
          name: "list",
          description: "List sandbox containers and their status",
          options: [
            { name: "--json", description: "Output result as JSON" },
            { name: "--browser", description: "List browser containers only" },
          ],
        },
        {
          name: "recreate",
          description:
            "Remove containers to force recreation with updated config",
          options: [
            { name: "--all", description: "Recreate all sandbox containers" },
            {
              name: "--session",
              description: "Recreate container for specific session",
              args: { name: "key" },
            },
            {
              name: "--agent",
              description: "Recreate containers for specific agent",
              args: { name: "id" },
            },
            {
              name: "--browser",
              description: "Only recreate browser containers",
            },
            { name: "--force", description: "Skip confirmation prompt" },
          ],
        },
        {
          name: "explain",
          description:
            "Explain effective sandbox/tool policy for a session/agent",
          options: [
            {
              name: "--session",
              description: "Session key to inspect (defaults to agent main)",
              args: { name: "key" },
            },
            {
              name: "--agent",
              description: "Agent id to inspect (defaults to derived agent)",
              args: { name: "id" },
            },
            { name: "--json", description: "Output result as JSON" },
          ],
        },
      ],
    },
    {
      name: "worktrees",
      description: "Create, inspect, restore, and clean up managed worktrees",
      subcommands: [
        {
          name: "list",
          description: "List active and restorable managed worktrees",
          options: [{ name: "--json", description: "Output JSON" }],
        },
        {
          name: "create",
          description: "Create a managed worktree",
          options: [
            {
              name: "--name",
              description: "Managed worktree name",
              args: { name: "name" },
            },
            {
              name: "--base-ref",
              description: "Git ref to branch from",
              args: { name: "ref" },
            },
            {
              name: "--source-profile",
              description:
                "Repository source profile; repeat to combine (default: full source)",
              args: { name: "name" },
              isRepeatable: true,
            },
            { name: "--json", description: "Output JSON" },
          ],
          args: {
            name: "repoRoot",
            description: "Source git checkout",
            template: "folders",
          },
        },
        {
          name: "remove",
          description: "Snapshot and remove a managed worktree",
          options: [
            {
              name: "--force",
              description: "Remove even if snapshot creation fails",
            },
            {
              name: "--if-lossless",
              description: "Remove without force only when clean and published",
            },
            {
              name: "--exact-state",
              description:
                "Retire detached checkout using an owner-fenced exact-state JSON request",
              args: { name: "file", template: "filepaths" },
            },
            { name: "--json", description: "Output JSON" },
          ],
          args: { name: "id", description: "Managed worktree id" },
        },
        {
          name: "retire-snapshot",
          description:
            "Retire one removed snapshot whose source is retained elsewhere",
          options: [
            {
              name: "--expected-ref",
              description: "Exact snapshot ref",
              args: { name: "ref" },
              isRequired: true,
            },
            {
              name: "--expected-oid",
              description: "Exact snapshot commit",
              args: { name: "oid" },
              isRequired: true,
            },
            {
              name: "--removed-at",
              description: "Exact recorded removal time",
              args: { name: "milliseconds" },
              isRequired: true,
            },
            {
              name: "--retained-ref",
              description: "Retained branch or remote-tracking source ref",
              args: { name: "ref" },
              isRequired: true,
            },
            {
              name: "--retained-oid",
              description: "Exact retained source commit",
              args: { name: "oid" },
              isRequired: true,
            },
            { name: "--json", description: "Output JSON" },
          ],
          args: { name: "id", description: "Removed managed worktree id" },
        },
        {
          name: "recover-removal",
          description:
            "Resume interrupted removal from its original clean snapshot",
          options: [
            {
              name: "--snapshot",
              description: "Expected pending snapshot commit",
              args: { name: "oid", template: "filepaths" },
              isRequired: true,
            },
            { name: "--json", description: "Output JSON" },
          ],
          args: { name: "id", description: "Managed worktree id" },
        },
        {
          name: "restore",
          description: "Restore a managed worktree from its snapshot",
          options: [
            {
              name: "--recover-exact-state",
              description:
                "Reconcile a completed but unfinalized exact-state retirement using its original JSON request",
              args: { name: "file", template: "filepaths" },
            },
            { name: "--json", description: "Output JSON" },
          ],
          args: { name: "id", description: "Managed worktree id" },
        },
        {
          name: "gc",
          description:
            "Queue background managed worktree cleanup or inspect its progress",
          options: [
            {
              name: "--job",
              description: "Show progress for a previously queued cleanup job",
              args: { name: "id" },
            },
            {
              name: "--retry-deferred",
              description:
                "Reinspect deferred checkouts and retry Git maintenance",
            },
            { name: "--json", description: "Output JSON" },
          ],
        },
      ],
    },
    {
      name: "attach",
      description:
        "Attach Claude Code to a gateway session with scoped MCP tools",
      options: [
        {
          name: "--session",
          description: "Gateway session key to bind (default: main session)",
          args: { name: "key" },
        },
        {
          name: "--url",
          description: "Gateway WebSocket URL",
          args: { name: "url" },
        },
        {
          name: "--token",
          description: "Gateway token (if required)",
          args: { name: "token" },
        },
        {
          name: "--password",
          description: "Gateway password (if required)",
          args: { name: "password" },
        },
        {
          name: "--tls-fingerprint",
          description: "Expected Gateway TLS certificate fingerprint",
          args: { name: "sha256" },
        },
        {
          name: "--ttl",
          description:
            "Grant TTL in positive base-10 integer milliseconds (default: gateway policy)",
          args: { name: "ms" },
        },
        {
          name: "--bin",
          description: "Claude Code binary to spawn",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--print-config",
          description:
            "Mint the grant + write the .mcp.json, print how to launch it, and exit without spawning",
        },
      ],
      args: {
        name: "target",
        description:
          "Control UI URL, host/agent/ref, short ref, or agent:... key",
        isOptional: true,
      },
    },
    {
      name: ["tui", "terminal", "chat"],
      description: "Open a terminal UI connected to the Gateway",
      options: [
        {
          name: "--local",
          description: "Run against the local embedded agent runtime",
        },
        ...tuiOptions,
        {
          name: "--session",
          description:
            'Session key (default: "main", or "global" when scope is global)',
          args: { name: "key" },
        },
        { name: "--deliver", description: "Deliver assistant replies" },
        {
          name: "--thinking",
          description: "Thinking level override",
          args: {
            name: "level",
            suggestions: [
              "off",
              "minimal",
              "low",
              "medium",
              "high",
              "xhigh",
              "adaptive",
              "max",
              "ultra",
            ],
          },
        },
        {
          name: "--message",
          description: "Send an initial message after connecting",
          args: { name: "text" },
        },
        {
          name: "--timeout-ms",
          description:
            "Agent timeout in ms (defaults to agents.defaults.timeoutSeconds)",
          args: { name: "ms" },
        },
        {
          name: "--history-limit",
          description: "History entries to load",
          args: { name: "n" },
        },
      ],
      args: {
        name: "target",
        description:
          "Control UI URL, host/agent/ref, short ref, or agent:... key",
        isOptional: true,
      },
    },
    {
      name: "resume",
      description: "Resume a recent Gateway session in the TUI",
      options: [
        {
          name: "--handoff",
          description: "Opaque session handoff copied from the Control UI",
          args: { name: "payload" },
        },
        ...tuiOptions,
      ],
      args: {
        name: "query",
        description: "Session key, display name, or label",
        isOptional: true,
      },
    },
    {
      name: ["cron", "automations"],
      description: "Manage automations (via Gateway)",
      subcommands: [
        {
          name: "status",
          description: "Show automations scheduler status",
          options: [
            {
              name: "--json",
              description:
                "Explicit machine-output spelling (command results are JSON by default)",
            },
            ...gatewayClientOptions,
          ],
        },
        {
          name: "list",
          description: "List automations",
          options: [
            { name: "--all", description: "Include disabled jobs" },
            {
              name: "--agent",
              description: "Filter by agent id",
              args: { name: "id" },
            },
            {
              name: "--query",
              description: "Filter automations by search text",
              args: { name: "text" },
            },
            { name: "--json", description: "Output JSON" },
            ...gatewayClientOptions,
          ],
        },
        {
          name: ["add", "create"],
          description: "Add an automation",
          options: [
            {
              name: "--json",
              description:
                "Explicit machine-output spelling (command results are JSON by default)",
            },
            { name: "--name", description: "Job name", args: { name: "name" } },
            {
              name: "--display-name",
              description: "Human-readable job label",
              args: { name: "name" },
            },
            {
              name: "--description",
              description: "Job description",
              args: { name: "text" },
            },
            {
              name: "--delete-after-run",
              description:
                "Delete one-shot after successful completion (confirmed/no delivery, intentional silence, or best effort); failed/unknown required delivery retains it disabled",
            },
            {
              name: "--keep-after-run",
              description: "Keep one-shot job after it succeeds",
            },
            {
              name: "--agent",
              description: "Agent id for this job",
              args: { name: "id" },
            },
            {
              name: "--session",
              description:
                "Session target (main|isolated|current|session:<id>)",
              args: {
                name: "target",
                suggestions: ["main", "isolated", "current"],
              },
            },
            {
              name: "--session-key",
              description: "Session key for job routing",
              args: { name: "key" },
            },
            {
              name: "--wake",
              description: "Wake mode (now|next-heartbeat)",
              args: { name: "mode", suggestions: ["now", "next-heartbeat"] },
            },
            {
              name: "--at",
              description:
                "One-shot time (ISO, offset-less uses --tz) or duration like 20m",
              args: { name: "when" },
            },
            {
              name: "--every",
              description: "Interval duration (e.g. 10m, 1h)",
              args: { name: "duration" },
            },
            {
              name: "--pacing-min",
              description: "Minimum delay for a dynamic next check",
              args: { name: "duration" },
            },
            {
              name: "--pacing-max",
              description: "Maximum delay for a dynamic next check",
              args: { name: "duration" },
            },
            {
              name: "--cron",
              description: "Cron expression (5-field or 6-field with seconds)",
              args: { name: "expr" },
            },
            {
              name: "--on-exit",
              description: "Fire once when the watched command exits",
              args: { name: "shell" },
            },
            {
              name: "--on-exit-cwd",
              description:
                "Working directory for the --on-exit watched command",
              args: { name: "path", template: "folders" },
            },
            {
              name: "--stream-command",
              description: "Stream source argv as a JSON array of strings",
              args: { name: "json" },
            },
            {
              name: "--stream-cwd",
              description: "Working directory for the stream source",
              args: { name: "path", template: "folders" },
            },
            {
              name: "--stream-mode",
              description: "Stream line selection mode (line|match)",
              args: { name: "mode", suggestions: ["line", "match"] },
            },
            {
              name: "--stream-match",
              description: "Regex source required for stream match mode",
              args: { name: "regex" },
            },
            {
              name: "--stream-batch-ms",
              description: "Quiet-window batch delay in milliseconds",
              args: { name: "n" },
            },
            {
              name: "--stream-max-batch-bytes",
              description: "Maximum UTF-8 bytes per stream batch",
              args: { name: "n" },
            },
            {
              name: "--tz",
              description:
                "Timezone for cron expressions (IANA; cron default: Gateway host local timezone)",
              args: { name: "iana" },
            },
            {
              name: "--stagger",
              description: "Cron stagger window (e.g. 30s, 5m)",
              args: { name: "duration" },
            },
            {
              name: "--exact",
              description: "Disable cron staggering (set stagger to 0)",
            },
            {
              name: "--trigger-script",
              description: "Condition script file, or - for stdin",
              args: { name: "path|-", template: "filepaths" },
            },
            {
              name: "--trigger-once",
              description: "Disable after the first successful triggered run",
            },
            {
              name: "--system-event",
              description: "System event payload (main session)",
              args: { name: "text" },
            },
            {
              name: "--message",
              description: "Agent message payload",
              args: { name: "text" },
            },
            {
              name: "--script",
              description: "Headless script payload file, or - for stdin",
              args: { name: "file|-", template: "filepaths" },
            },
            {
              name: "--script-timeout-seconds",
              description: "Script wall-clock timeout seconds",
              args: { name: "n" },
            },
            {
              name: "--script-tool-budget",
              description: "Maximum script tool calls",
              args: { name: "n" },
            },
            {
              name: "--command",
              description:
                "Command payload run as sh -lc <shell> on the Gateway",
              args: { name: "shell" },
            },
            {
              name: "--command-argv",
              description: "Command payload argv as JSON array of strings",
              args: { name: "json" },
            },
            {
              name: "--command-cwd",
              description: "Working directory for command payloads",
              args: { name: "path", template: "folders" },
            },
            {
              name: "--command-env",
              description:
                "Environment override for command payloads (repeatable)",
              args: { name: "KEY=VALUE" },
              isRepeatable: true,
            },
            {
              name: "--command-input",
              description: "Stdin for command payloads",
              args: { name: "text" },
            },
            {
              name: "--thinking",
              description:
                "Thinking level for agent jobs (off|minimal|low|medium|high|xhigh|adaptive|max|ultra)",
              args: {
                name: "level",
                suggestions: [
                  "off",
                  "minimal",
                  "low",
                  "medium",
                  "high",
                  "xhigh",
                  "adaptive",
                  "max",
                  "ultra",
                ],
              },
            },
            {
              name: "--model",
              description:
                "Model override for agent jobs (provider/model or alias)",
              args: { name: "model" },
            },
            {
              name: "--fallbacks",
              description: "Fallback model list for agent jobs",
              args: { name: "list" },
            },
            {
              name: "--timeout-seconds",
              description:
                "Timeout seconds for agent or command jobs (non-negative integer; 0 disables scheduler timeout)",
              args: { name: "n" },
            },
            {
              name: "--no-output-timeout-seconds",
              description: "No-output timeout seconds for command jobs",
              args: { name: "n" },
            },
            {
              name: "--output-max-bytes",
              description:
                "Maximum captured stdout/stderr bytes for command jobs",
              args: { name: "n" },
            },
            {
              name: "--light-context",
              description: "Use lightweight bootstrap context for agent jobs",
            },
            {
              name: "--tools",
              description:
                'Tool allow-list (e.g. exec,read or exec read; "" disables all tools)',
              args: { name: "list" },
            },
            {
              name: "--announce",
              description: "Fallback-deliver final text to a chat",
            },
            {
              name: "--deliver",
              description:
                "Deprecated (use --announce). Fallback-delivers final text to a chat",
            },
            {
              name: "--no-deliver",
              description: "Disable runner fallback delivery",
            },
            {
              name: "--webhook",
              description: "POST the finished payload to a webhook URL",
              args: { name: "url" },
            },
            {
              name: "--channel",
              description: "Delivery channel (last)",
              args: { name: "channel", suggestions: channels },
            },
            {
              name: "--to",
              description:
                "Delivery destination (E.164, Telegram chatId, or Discord channel/user)",
              args: { name: "dest" },
            },
            {
              name: "--thread-id",
              description: "Telegram forum topic thread id",
              args: { name: "id" },
            },
            {
              name: "--account",
              description:
                "Channel account id for delivery (multi-account setups)",
              args: { name: "id" },
            },
            {
              name: "--best-effort-deliver",
              description: "Do not fail the job if delivery fails",
            },
            {
              name: "--declaration-key",
              description: "Key to avoid duplicate declarations",
              args: { name: "key" },
            },
            { name: "--disabled", description: "Create job disabled" },
            ...gatewayClientOptions,
          ],
          args: [
            {
              name: "scheduleOrName",
              description:
                "Schedule string, or job name when using --at/--every/--cron",
              isOptional: true,
            },
            {
              name: "message",
              description: "Agent message when using a positional schedule",
              isOptional: true,
            },
          ],
        },
        {
          name: ["rm", "remove", "delete"],
          description: "Remove an automation",
          options: [
            {
              name: "--json",
              description:
                "Explicit machine-output spelling (command results are JSON by default)",
            },
            ...gatewayClientOptions,
          ],
          args: { name: "id", description: "Job id" },
        },
        {
          name: "enable",
          description: "Enable an automation",
          options: [
            {
              name: "--json",
              description:
                "Explicit machine-output spelling (command results are JSON by default)",
            },
            ...gatewayClientOptions,
          ],
          args: { name: "id", description: "Job id" },
        },
        {
          name: "disable",
          description: "Disable an automation",
          options: [
            {
              name: "--json",
              description:
                "Explicit machine-output spelling (command results are JSON by default)",
            },
            ...gatewayClientOptions,
          ],
          args: { name: "id", description: "Job id" },
        },
        {
          name: "get",
          description: "Get an automation as JSON",
          options: [
            {
              name: "--json",
              description:
                "Explicit machine-output spelling (command results are JSON by default)",
            },
            ...gatewayClientOptions,
          ],
          args: { name: "id", description: "Job id" },
        },
        {
          name: "show",
          description: "Show an automation",
          options: [
            { name: "--json", description: "Output JSON" },
            ...gatewayClientOptions,
          ],
          args: { name: "id", description: "Job id or exact name" },
        },
        {
          name: "runs",
          description: "Show automation run history",
          options: [
            {
              name: "--json",
              description:
                "Explicit machine-output spelling (command results are JSON by default)",
            },
            {
              name: "--id",
              description: "Job id (alternative to positional argument)",
              args: { name: "id" },
            },
            {
              name: "--all",
              description: "Show run history across all visible automations",
            },
            {
              name: "--run-id",
              description: "Filter by cron run id",
              args: { name: "runId" },
            },
            {
              name: "--status",
              description: "Filter by run status",
              args: {
                name: "status",
                suggestions: ["all", "ok", "error", "skipped"],
              },
            },
            {
              name: "--delivery-status",
              description: "Filter by delivery status",
              args: {
                name: "status",
                suggestions: [
                  "delivered",
                  "not-delivered",
                  "unknown",
                  "not-requested",
                ],
              },
            },
            {
              name: "--query",
              description: "Filter by run summary or error text",
              args: { name: "text" },
            },
            {
              name: "--offset",
              description: "Entries to skip before returning results",
              args: { name: "n" },
            },
            {
              name: "--sort",
              description: "Sort by run time",
              args: { name: "direction", suggestions: ["asc", "desc"] },
            },
            {
              name: "--limit",
              description: "Max entries (default 50)",
              args: { name: "n" },
            },
            ...gatewayClientOptions,
          ],
          args: { name: "id", description: "Job id", isOptional: true },
        },
        {
          name: "run",
          description: "Run an automation now (debug)",
          options: [
            {
              name: "--json",
              description:
                "Explicit machine-output spelling (command results are JSON by default)",
            },
            {
              name: "--due",
              description:
                "Run only when due (default behavior in older versions)",
            },
            {
              name: "--wait",
              description: "Wait for the queued run to finish",
            },
            {
              name: "--wait-timeout",
              description: "Maximum time to wait for --wait",
              args: { name: "duration" },
            },
            {
              name: "--poll-interval",
              description: "Polling interval for --wait",
              args: { name: "duration" },
            },
            ...gatewayClientOptions,
          ],
          args: { name: "id", description: "Job id" },
        },
        {
          name: "scratch",
          description: "Read or replace an automation's private scratch",
          options: [
            {
              name: "--json",
              description:
                "Output scratch plus revision metadata as JSON; writes return JSON by default",
            },
            {
              name: "--set",
              description: "Replace scratch with exact text",
              args: { name: "text" },
            },
            {
              name: "--file",
              description: "Replace scratch from a file, or - for stdin",
              args: { name: "path", template: "filepaths" },
            },
            { name: "--unset", description: "Remove the scratch row" },
            {
              name: "--expected-revision",
              description: "Require the current scratch revision",
              args: { name: "n" },
            },
            ...gatewayClientOptions,
          ],
          args: { name: "id", description: "Job id" },
        },
        {
          name: "edit",
          description: "Edit an automation (patch fields)",
          options: [
            {
              name: "--json",
              description:
                "Explicit machine-output spelling (command results are JSON by default)",
            },
            { name: "--name", description: "Job name", args: { name: "name" } },
            {
              name: "--display-name",
              description: "Human-readable job label",
              args: { name: "name" },
            },
            {
              name: "--description",
              description: "Job description",
              args: { name: "text" },
            },
            {
              name: "--delete-after-run",
              description:
                "Delete one-shot after successful completion (confirmed/no delivery, intentional silence, or best effort); failed/unknown required delivery retains it disabled",
            },
            {
              name: "--keep-after-run",
              description: "Keep one-shot job after it succeeds",
            },
            {
              name: "--agent",
              description: "Agent id for this job",
              args: { name: "id" },
            },
            {
              name: "--session",
              description:
                "Session target (main|isolated|current|session:<id>)",
              args: {
                name: "target",
                suggestions: ["main", "isolated", "current"],
              },
            },
            {
              name: "--session-key",
              description: "Session key for job routing",
              args: { name: "key" },
            },
            {
              name: "--wake",
              description: "Wake mode (now|next-heartbeat)",
              args: { name: "mode", suggestions: ["now", "next-heartbeat"] },
            },
            {
              name: "--at",
              description:
                "One-shot time (ISO, offset-less uses --tz) or duration like 20m",
              args: { name: "when" },
            },
            {
              name: "--every",
              description: "Interval duration (e.g. 10m, 1h)",
              args: { name: "duration" },
            },
            {
              name: "--pacing-min",
              description: "Minimum delay for a dynamic next check",
              args: { name: "duration" },
            },
            {
              name: "--pacing-max",
              description: "Maximum delay for a dynamic next check",
              args: { name: "duration" },
            },
            {
              name: "--cron",
              description: "Cron expression (5-field or 6-field with seconds)",
              args: { name: "expr" },
            },
            {
              name: "--on-exit",
              description: "Fire once when the watched command exits",
              args: { name: "shell" },
            },
            {
              name: "--on-exit-cwd",
              description:
                "Working directory for the --on-exit watched command",
              args: { name: "path", template: "folders" },
            },
            {
              name: "--stream-command",
              description: "Stream source argv as a JSON array of strings",
              args: { name: "json" },
            },
            {
              name: "--stream-cwd",
              description: "Working directory for the stream source",
              args: { name: "path", template: "folders" },
            },
            {
              name: "--stream-mode",
              description: "Stream line selection mode (line|match)",
              args: { name: "mode", suggestions: ["line", "match"] },
            },
            {
              name: "--stream-match",
              description: "Regex source required for stream match mode",
              args: { name: "regex" },
            },
            {
              name: "--stream-batch-ms",
              description: "Quiet-window batch delay in milliseconds",
              args: { name: "n" },
            },
            {
              name: "--stream-max-batch-bytes",
              description: "Maximum UTF-8 bytes per stream batch",
              args: { name: "n" },
            },
            {
              name: "--tz",
              description:
                "Timezone for cron expressions (IANA; cron default: Gateway host local timezone)",
              args: { name: "iana" },
            },
            {
              name: "--stagger",
              description: "Cron stagger window (e.g. 30s, 5m)",
              args: { name: "duration" },
            },
            {
              name: "--exact",
              description: "Disable cron staggering (set stagger to 0)",
            },
            {
              name: "--trigger-script",
              description: "Condition script file, or - for stdin",
              args: { name: "path|-", template: "filepaths" },
            },
            {
              name: "--trigger-once",
              description: "Disable after the first successful triggered run",
            },
            {
              name: "--system-event",
              description: "System event payload (main session)",
              args: { name: "text" },
            },
            {
              name: "--message",
              description: "Agent message payload",
              args: { name: "text" },
            },
            {
              name: "--script",
              description: "Headless script payload file, or - for stdin",
              args: { name: "file|-", template: "filepaths" },
            },
            {
              name: "--script-timeout-seconds",
              description: "Script wall-clock timeout seconds",
              args: { name: "n" },
            },
            {
              name: "--script-tool-budget",
              description: "Maximum script tool calls",
              args: { name: "n" },
            },
            {
              name: "--command",
              description:
                "Command payload run as sh -lc <shell> on the Gateway",
              args: { name: "shell" },
            },
            {
              name: "--command-argv",
              description: "Command payload argv as JSON array of strings",
              args: { name: "json" },
            },
            {
              name: "--command-cwd",
              description: "Working directory for command payloads",
              args: { name: "path", template: "folders" },
            },
            {
              name: "--command-env",
              description:
                "Environment override for command payloads (repeatable)",
              args: { name: "KEY=VALUE" },
              isRepeatable: true,
            },
            {
              name: "--command-input",
              description: "Stdin for command payloads",
              args: { name: "text" },
            },
            {
              name: "--thinking",
              description:
                "Thinking level for agent jobs (off|minimal|low|medium|high|xhigh|adaptive|max|ultra)",
              args: {
                name: "level",
                suggestions: [
                  "off",
                  "minimal",
                  "low",
                  "medium",
                  "high",
                  "xhigh",
                  "adaptive",
                  "max",
                  "ultra",
                ],
              },
            },
            {
              name: "--model",
              description:
                "Model override for agent jobs (provider/model or alias)",
              args: { name: "model" },
            },
            {
              name: "--fallbacks",
              description: "Fallback model list for agent jobs",
              args: { name: "list" },
            },
            {
              name: "--timeout-seconds",
              description:
                "Timeout seconds for agent or command jobs (non-negative integer; 0 disables scheduler timeout)",
              args: { name: "n" },
            },
            {
              name: "--no-output-timeout-seconds",
              description: "No-output timeout seconds for command jobs",
              args: { name: "n" },
            },
            {
              name: "--output-max-bytes",
              description:
                "Maximum captured stdout/stderr bytes for command jobs",
              args: { name: "n" },
            },
            {
              name: "--light-context",
              description: "Use lightweight bootstrap context for agent jobs",
            },
            {
              name: "--tools",
              description:
                'Tool allow-list (e.g. exec,read or exec read; "" disables all tools)',
              args: { name: "list" },
            },
            {
              name: "--announce",
              description: "Fallback-deliver final text to a chat",
            },
            {
              name: "--deliver",
              description:
                "Deprecated (use --announce). Fallback-delivers final text to a chat",
            },
            {
              name: "--no-deliver",
              description: "Disable runner fallback delivery",
            },
            {
              name: "--webhook",
              description: "POST the finished payload to a webhook URL",
              args: { name: "url" },
            },
            {
              name: "--channel",
              description: "Delivery channel (last)",
              args: { name: "channel", suggestions: channels },
            },
            {
              name: "--to",
              description:
                "Delivery destination (E.164, Telegram chatId, or Discord channel/user)",
              args: { name: "dest" },
            },
            {
              name: "--thread-id",
              description: "Telegram forum topic thread id",
              args: { name: "id" },
            },
            {
              name: "--account",
              description:
                "Channel account id for delivery (multi-account setups)",
              args: { name: "id" },
            },
            {
              name: "--best-effort-deliver",
              description:
                "Do not fail job if delivery fails (also implies --announce when used alone)",
            },
            {
              name: "--clear-display-name",
              description: "Restore the stable name in list and detail views",
            },
            { name: "--enable", description: "Enable job" },
            { name: "--disable", description: "Disable job" },
            {
              name: "--clear-agent",
              description: "Unset agent and use default",
            },
            { name: "--clear-session-key", description: "Unset session key" },
            {
              name: "--clear-pacing",
              description: "Remove dynamic-cadence bounds",
            },
            {
              name: "--clear-trigger",
              description: "Remove the condition trigger",
            },
            {
              name: "--clear-thinking",
              description:
                "Remove the per-job thinking override (restore normal cron thinking precedence)",
            },
            {
              name: "--clear-fallbacks",
              description: "Remove per-job fallback override",
            },
            {
              name: "--clear-model",
              description:
                "Remove the per-job model override (restore normal cron model precedence)",
            },
            {
              name: "--no-light-context",
              description:
                "Disable lightweight bootstrap context for agent jobs",
            },
            {
              name: "--clear-tools",
              description: "Remove tool allow-list (use all tools)",
            },
            {
              name: "--clear-channel",
              description: "Unset the delivery channel",
            },
            {
              name: "--clear-to",
              description: "Unset the delivery destination",
            },
            {
              name: "--clear-thread-id",
              description: "Unset the Telegram forum topic thread id",
            },
            {
              name: "--clear-account",
              description: "Unset the per-job delivery account override",
            },
            {
              name: "--no-best-effort-deliver",
              description: "Fail job when delivery fails",
            },
            {
              name: "--failure-alert",
              description: "Enable failure alerts for this job",
            },
            {
              name: "--no-failure-alert",
              description: "Disable failure alerts for this job",
            },
            {
              name: "--failure-alert-after",
              description: "Alert after N consecutive job errors",
              args: { name: "n" },
            },
            {
              name: "--failure-alert-channel",
              description: "Failure alert channel (last)",
              args: { name: "channel", suggestions: channels },
            },
            {
              name: "--failure-alert-to",
              description: "Failure alert destination",
              args: { name: "dest" },
            },
            {
              name: "--failure-alert-cooldown",
              description: "Minimum time between alerts (e.g. 1h, 30m)",
              args: { name: "duration" },
            },
            {
              name: "--failure-alert-include-skipped",
              description: "Count consecutive skipped runs toward alerts",
            },
            {
              name: "--failure-alert-exclude-skipped",
              description: "Exclude skips except local-provider outages",
            },
            {
              name: "--failure-alert-mode",
              description: "Failure alert delivery mode (announce or webhook)",
              args: { name: "mode" },
            },
            {
              name: "--failure-alert-account-id",
              description:
                "Account ID for failure alert channel (multi-account setups)",
              args: { name: "id" },
            },
            ...gatewayClientOptions,
          ],
          args: { name: "id", description: "Job id" },
        },
      ],
      options: gatewayClientOptions,
    },
    {
      name: "dns",
      description: "DNS helpers for wide-area discovery (Tailscale + CoreDNS)",
      subcommands: [
        {
          name: "setup",
          description:
            "Set up CoreDNS to serve your discovery domain for unicast DNS-SD (Wide-Area Bonjour)",
          options: [
            {
              name: "--domain",
              description:
                "Wide-area discovery domain (e.g. openclaw.internal)",
              args: { name: "domain" },
            },
            {
              name: "--apply",
              description:
                "Install/update CoreDNS config and (re)start the service (requires sudo)",
            },
          ],
        },
      ],
    },
    {
      name: "docs",
      description: "Search the live OpenClaw docs",
      options: [
        { name: "--json", description: "Output JSON" },
        {
          name: "--limit",
          description: "Maximum results to return",
          args: { name: "count" },
        },
      ],
      args: {
        name: "query",
        description: "Search query",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "proxy",
      description: "Run the OpenClaw debug proxy and inspect captured traffic",
      subcommands: [
        {
          name: "start",
          description: "Start the local explicit debug proxy",
          options: proxyCliOptions,
        },
        {
          name: "run",
          description:
            "Run a child command with OpenClaw debug proxy capture enabled",
          options: proxyCliOptions,
          args: {
            name: "cmd",
            description: "Command to run after --",
            isOptional: true,
            isVariadic: true,
            isCommand: true,
          },
        },
        {
          name: "validate",
          description: "Validate the operator-managed network proxy",
          options: [
            { name: "--json", description: "Print machine-readable JSON" },
            {
              name: "--proxy-url",
              description: "Proxy URL to validate instead of config/env",
              args: { name: "url" },
            },
            {
              name: "--proxy-ca-file",
              description:
                "CA bundle file for verifying an HTTPS proxy endpoint",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--allowed-url",
              description: "Destination expected to succeed through the proxy",
              args: { name: "url" },
              isRepeatable: true,
            },
            {
              name: "--denied-url",
              description: "Destination expected to be blocked by the proxy",
              args: { name: "url" },
              isRepeatable: true,
            },
            {
              name: "--apns-reachable",
              description:
                "Also verify sandbox APNs HTTP/2 is reachable through the proxy",
            },
            {
              name: "--apns-authority",
              description: "APNs authority to check with --apns-reachable",
              args: { name: "url" },
            },
            {
              name: "--timeout-ms",
              description: "Per-request timeout in milliseconds",
              args: { name: "ms" },
            },
          ],
        },
        {
          name: "coverage",
          description:
            "Report current debug proxy transport coverage and remaining gaps",
          options: [
            { name: "--json", description: "Print machine-readable JSON" },
          ],
        },
        {
          name: "sessions",
          description: "List recent capture sessions",
          options: [
            { name: "--json", description: "Print machine-readable JSON" },
            {
              name: "--limit",
              description: "Maximum sessions to show",
              args: { name: "count" },
            },
          ],
        },
        {
          name: "query",
          description: "Run a built-in query preset against captured traffic",
          options: [
            {
              name: "--preset",
              description:
                "Query preset: double-sends, retry-storms, cache-busting, ws-duplicate-frames, missing-ack, error-bursts",
              args: { name: "name" },
              isRequired: true,
            },
            { name: "--json", description: "Print machine-readable JSON" },
            {
              name: "--session",
              description: "Restrict to a capture session id",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "blob",
          description: "Read a captured payload blob by id",
          options: [
            {
              name: "--id",
              description: "Blob id",
              args: { name: "blobId" },
              isRequired: true,
            },
          ],
        },
        {
          name: "purge",
          description: "Delete all captured traffic metadata and blobs",
        },
      ],
    },
    {
      name: "hooks",
      description: "Manage internal agent hooks",
      subcommands: [
        {
          name: "list",
          description: "List all hooks",
          options: [
            {
              name: "--agent",
              description: "Agent id to inspect",
              args: { name: "id" },
            },
            { name: "--eligible", description: "Show only eligible hooks" },
            { name: "--json", description: "Output as JSON" },
            {
              name: ["-v", "--verbose"],
              description: "Show more details including missing requirements",
            },
          ],
        },
        {
          name: "info",
          description: "Show detailed information about a hook",
          options: hooksCliOptions,
          args: { name: "name" },
        },
        {
          name: "check",
          description: "Check hooks eligibility status",
          options: hooksCliOptions,
        },
        {
          name: "enable",
          description: "Enable a hook",
          options: [
            {
              name: "--agent",
              description: "Agent id whose workspace to inspect",
              args: { name: "id" },
            },
          ],
          args: { name: "name" },
        },
        {
          name: "disable",
          description: "Disable a hook",
          options: [
            {
              name: "--agent",
              description: "Agent id whose workspace to inspect",
              args: { name: "id" },
            },
          ],
          args: { name: "name" },
        },
        {
          name: "install",
          description:
            "Deprecated: install a hook pack via `openclaw plugins install`",
          options: [
            {
              name: ["-l", "--link"],
              description: "Link a local path instead of copying",
            },
            {
              name: "--pin",
              description:
                "Record npm installs as exact resolved <name>@<version>",
            },
            {
              name: "--force",
              description:
                "Confirm non-ClawHub sources and overwrite an existing hook pack",
            },
            {
              name: "--acknowledge-install-policy-warning",
              description:
                "Acknowledge security.installPolicy warnings without prompting; blocks and failures remain terminal",
            },
          ],
          args: {
            name: "path-or-spec",
            description: "Path to a hook pack or npm package spec",
          },
        },
        {
          name: "update",
          description:
            "Deprecated: update hook packs via `openclaw plugins update`",
          options: [
            { name: "--all", description: "Update all tracked hooks" },
            {
              name: "--dry-run",
              description: "Show what would change without writing",
            },
            {
              name: "--acknowledge-install-policy-warning",
              description:
                "Acknowledge security.installPolicy warnings without prompting; blocks and failures remain terminal",
            },
          ],
          args: {
            name: "id",
            description: "Hook pack id (omit with --all)",
            isOptional: true,
          },
        },
      ],
      options: hooksCliOptions,
    },
    {
      name: "webhooks",
      description: "Webhook helpers and integrations",
      subcommands: [
        {
          name: "gmail",
          description: "Gmail Pub/Sub hooks (via gogcli)",
          subcommands: [
            {
              name: "setup",
              description: "Configure Gmail watch + Pub/Sub + OpenClaw hooks",
              options: [
                {
                  name: "--account",
                  description: "Gmail account to watch",
                  args: { name: "email" },
                  isRequired: true,
                },
                {
                  name: "--project",
                  description: "GCP project id (OAuth client owner)",
                  args: { name: "id" },
                },
                {
                  name: "--topic",
                  description: "Pub/Sub topic name",
                  args: { name: "name" },
                },
                ...gmailDeliveryOptions,
                {
                  name: "--push-endpoint",
                  description: "Explicit Pub/Sub push endpoint",
                  args: { name: "url" },
                },
                { name: "--json", description: "Output JSON summary" },
              ],
            },
            {
              name: "run",
              description: "Run gog watch serve + auto-renew loop",
              options: [
                {
                  name: "--account",
                  description: "Gmail account to watch",
                  args: { name: "email" },
                },
                {
                  name: "--topic",
                  description: "Pub/Sub topic path (projects/.../topics/..)",
                  args: { name: "topic" },
                },
                ...gmailDeliveryOptions,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "qr",
      description: "Generate a mobile pairing QR code and setup code",
      options: qrCliOptions,
    },
    {
      name: "clawbot",
      description: "Legacy clawbot command aliases",
      subcommands: [
        {
          name: "qr",
          description: "Generate a mobile pairing QR code and setup code",
          options: qrCliOptions,
        },
      ],
    },
    {
      name: "pairing",
      description: "Secure DM pairing (approve inbound requests)",
      subcommands: [
        {
          name: "list",
          description: "List pending pairing requests",
          options: [
            {
              name: "--channel",
              description: "Channel (none configured)",
              args: { name: "channel", suggestions: channels },
            },
            {
              name: "--account",
              description: "Account id (for multi-account channels)",
              args: { name: "accountId" },
            },
            { name: "--json", description: "Print JSON" },
          ],
          args: {
            name: "channel",
            description: "Channel (none configured)",
            isOptional: true,
            suggestions: channels,
          },
        },
        {
          name: "approve",
          description: "Approve a pairing code and allow that sender",
          options: [
            {
              name: "--channel",
              description: "Channel (none configured)",
              args: { name: "channel", suggestions: channels },
            },
            {
              name: "--account",
              description: "Account id (for multi-account channels)",
              args: { name: "accountId" },
            },
            {
              name: "--notify",
              description: "Notify the requester on the same channel",
            },
          ],
          args: [
            {
              name: "codeOrChannel",
              description: "Pairing code (or channel when using 2 args)",
            },
            {
              name: "code",
              description:
                "Pairing code (when channel is passed as the 1st arg)",
              isOptional: true,
            },
          ],
        },
      ],
    },
    {
      name: "plugins",
      description: "Manage OpenClaw plugins and extensions",
      subcommands: [
        {
          name: "list",
          description: "List discovered plugins",
          options: [
            { name: "--json", description: "Print JSON" },
            { name: "--enabled", description: "Only show enabled plugins" },
            { name: "--verbose", description: "Show detailed entries" },
          ],
        },
        {
          name: "search",
          description: "Search ClawHub plugin packages",
          options: [
            {
              name: "--limit",
              description: "Max results",
              args: { name: "n" },
            },
            { name: "--json", description: "Print JSON" },
          ],
          args: {
            name: "query",
            description: "Search query",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: ["inspect", "info"],
          description: "Inspect plugin details",
          options: [
            { name: "--all", description: "Inspect all plugins" },
            {
              name: "--runtime",
              description: "Load plugin runtime for hooks/tools/diagnostics",
            },
            { name: "--json", description: "Print JSON" },
          ],
          args: { name: "id", description: "Plugin id", isOptional: true },
        },
        {
          name: "enable",
          description: "Enable one or more plugins in config",
          options: [
            {
              name: "--accept-capabilities",
              description: "Accept each plugin's declared capabilities",
            },
          ],
          args: { name: "ids", description: "Plugin ids", isVariadic: true },
        },
        {
          name: "disable",
          description: "Disable one or more plugins in config",
          args: { name: "ids", description: "Plugin ids", isVariadic: true },
        },
        {
          name: "reload",
          description: "Reload one or more plugins in the running Gateway",
          options: [
            {
              name: "--accept-capabilities",
              description: "Accept changed declared capabilities",
            },
            {
              name: "--wait",
              description:
                "Wait for admitted work without a deadline; Ctrl-C cancels the wait",
            },
            {
              name: "--json",
              description: "Print the applied runtime generation",
            },
          ],
          args: { name: "ids", description: "Plugin ids", isVariadic: true },
        },
        {
          name: "uninstall",
          description: "Uninstall one or more plugin packages",
          options: [
            {
              name: "--keep-files",
              description: "Keep installed files on disk",
            },
            {
              name: "--keep-config",
              description: "Deprecated alias for --keep-files",
            },
            { name: "--force", description: "Skip confirmation prompt" },
            {
              name: "--dry-run",
              description: "Show what would be removed without making changes",
            },
          ],
          args: { name: "ids", description: "Plugin ids", isVariadic: true },
        },
        {
          name: "install",
          description:
            "Install a plugin or hook pack (path, archive, npm spec, git repo, clawhub:package, or marketplace entry)",
          options: [
            {
              name: ["-l", "--link"],
              description: "Link a local path instead of copying",
            },
            {
              name: "--force",
              description:
                "Confirm non-ClawHub sources and overwrite an existing plugin or hook pack",
            },
            {
              name: "--pin",
              description:
                "Record npm installs as exact resolved <name>@<version>",
            },
            {
              name: "--no-enable",
              description:
                "Preserve existing plugin enablement, allowlists, and denylists",
            },
            {
              name: "--accept-capabilities",
              description: "Accept the plugin's declared capabilities",
            },
            {
              name: "--dangerously-force-unsafe-install",
              description:
                "Deprecated no-op; security.installPolicy may still block",
            },
            {
              name: "--acknowledge-install-policy-warning",
              description:
                "Acknowledge security.installPolicy warnings without prompting; blocks and failures remain terminal",
            },
            {
              name: "--marketplace",
              description:
                "Install a Claude marketplace plugin from a local repo/path or git/GitHub source",
              args: { name: "source" },
            },
          ],
          args: {
            name: "path-or-spec-or-plugin",
            description:
              "Path (.ts/.js/.zip/.tgz/.tar.gz), npm package spec, or marketplace plugin name",
          },
        },
        {
          name: "update",
          description: "Update installed plugins and tracked hook packs",
          options: [
            {
              name: "--all",
              description: "Update all tracked plugins and hook packs",
            },
            {
              name: "--dry-run",
              description: "Show what would change without writing",
            },
            {
              name: "--accept-capabilities",
              description: "Accept widened plugin capabilities",
            },
            {
              name: "--dangerously-force-unsafe-install",
              description:
                "Deprecated no-op; security.installPolicy may still block",
            },
            {
              name: "--acknowledge-install-policy-warning",
              description:
                "Acknowledge security.installPolicy warnings without prompting; blocks and failures remain terminal",
            },
          ],
          args: {
            name: "ids",
            description:
              "Plugin or hook-pack ids or npm specs (omit with --all)",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "registry",
          description: "Inspect or rebuild the persisted plugin registry",
          options: [
            { name: "--json", description: "Print JSON" },
            {
              name: "--refresh",
              description:
                "Rebuild the persisted registry from current plugin manifests",
            },
          ],
        },
        {
          name: "doctor",
          description: "Report plugin load issues",
          options: [{ name: "--json", description: "Print JSON" }],
        },
        {
          name: "build",
          description: "Build plugin metadata and native Control UI assets",
          options: [
            {
              name: "--root",
              description: "Plugin package root",
              args: { name: "path", template: "folders" },
            },
            {
              name: "--entry",
              description: "Plugin entry module relative to --root",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--check",
              description: "Fail if generated metadata is out of date",
            },
          ],
        },
        {
          name: "validate",
          description: "Validate plugin metadata and native Control UI assets",
          options: [
            {
              name: "--root",
              description: "Plugin package root",
              args: { name: "path", template: "folders" },
            },
            {
              name: "--entry",
              description: "Plugin entry module relative to --root",
              args: { name: "path", template: "filepaths" },
            },
            { name: "--json", description: "Print JSON" },
          ],
        },
        {
          name: "pack",
          description:
            "Bundle a built plugin into an exact artifact for activation approval",
          options: [
            {
              name: "--root",
              description: "Plugin package root",
              args: { name: "path", template: "folders" },
            },
            {
              name: "--out",
              description: "Output .tgz file (must not exist)",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--json",
              description:
                "Print the artifact path, SHA256, and activation request",
            },
          ],
        },
        {
          name: "init",
          description: "Create a plugin project",
          options: [
            {
              name: "--directory",
              description: "Output directory",
              args: { name: "path", template: "folders" },
            },
            {
              name: "--name",
              description: "Display name",
              args: { name: "name" },
            },
            {
              name: "--type",
              description: "Scaffold type (tool, provider, or feature)",
              args: { name: "type" },
            },
            {
              name: "--force",
              description: "Overwrite an existing output directory",
            },
          ],
          args: { name: "id", description: "Plugin id" },
        },
        {
          name: "marketplace",
          description: "Inspect Claude-compatible plugin marketplaces",
          subcommands: [
            {
              name: "entries",
              description:
                "List entries from the configured OpenClaw marketplace feed",
              options: [
                {
                  name: "--feed-profile",
                  description: "Configured marketplace feed profile to list",
                  args: { name: "name" },
                },
                {
                  name: "--feed-url",
                  description: "Explicit hosted marketplace feed URL",
                  args: { name: "url" },
                },
                {
                  name: "--offline",
                  description:
                    "Read the latest accepted snapshot without fetching the feed",
                },
                { name: "--json", description: "Print JSON" },
              ],
            },
            {
              name: "refresh",
              description:
                "Refresh the configured OpenClaw marketplace feed snapshot",
              options: [
                {
                  name: "--feed-profile",
                  description: "Configured marketplace feed profile to refresh",
                  args: { name: "name" },
                },
                {
                  name: "--feed-url",
                  description: "Explicit hosted marketplace feed URL",
                  args: { name: "url" },
                },
                {
                  name: "--expected-sha256",
                  description: "Expected hosted feed SHA-256 payload checksum",
                  args: { name: "hash" },
                },
                { name: "--json", description: "Print JSON" },
              ],
            },
            {
              name: "list",
              description: "List plugins published by a marketplace source",
              options: [{ name: "--json", description: "Print JSON" }],
              args: {
                name: "source",
                description: "Local marketplace path/repo or git/GitHub source",
              },
            },
          ],
        },
      ],
    },
    {
      name: "channels",
      description: "Manage connected chat channels and accounts",
      subcommands: [
        {
          name: "list",
          description:
            "List chat channels (configured by default; pass --all for installable catalog)",
          options: [
            {
              name: "--all",
              description: "Include bundled and installable catalog channels",
            },
            { name: "--json", description: "Output JSON" },
          ],
        },
        {
          name: "status",
          description:
            "Show channel status (use openclaw status --deep for a full connection check)",
          options: [
            {
              name: "--channel",
              description: "Only show one channel (all)",
              args: { name: "name", suggestions: channels },
            },
            { name: "--probe", description: "Check channel credentials" },
            {
              name: "--timeout",
              description: "Timeout in ms",
              args: { name: "ms" },
            },
            { name: "--json", description: "Output JSON" },
          ],
        },
        {
          name: "capabilities",
          description:
            "Show provider capabilities (intents/scopes + supported features)",
          options: [
            {
              name: "--agent",
              description: "Agent owner for channel discovery",
              args: { name: "id" },
            },
            {
              name: "--channel",
              description: "Channel (all)",
              args: { name: "name", suggestions: channels },
            },
            {
              name: "--account",
              description: "Account id (only with --channel)",
              args: { name: "id" },
            },
            {
              name: "--target",
              description:
                "Channel target for permission audit (Discord channel:<id>)",
              args: { name: "dest" },
            },
            {
              name: "--timeout",
              description: "Timeout in ms",
              args: { name: "ms" },
            },
            { name: "--json", description: "Output JSON" },
          ],
        },
        {
          name: "resolve",
          description: "Resolve channel/user names to IDs",
          options: [
            {
              name: "--channel",
              description: "Channel (channel)",
              args: { name: "name", suggestions: channels },
            },
            {
              name: "--account",
              description: "Account id (accountId)",
              args: { name: "id" },
            },
            {
              name: "--agent",
              description: "Agent owner for channel resolution",
              args: { name: "id" },
            },
            {
              name: "--kind",
              description: "Target kind (auto|user|group|channel)",
              args: {
                name: "kind",
                suggestions: ["auto", "user", "group", "channel"],
              },
            },
            { name: "--json", description: "Output JSON" },
          ],
          args: {
            name: "entries",
            description: "Entries to resolve (names or ids)",
            isVariadic: true,
          },
        },
        {
          name: "logs",
          description: "Show recent channel logs from the gateway log file",
          options: [
            {
              name: "--channel",
              description: "Channel (all; default: all)",
              args: { name: "name", suggestions: channels },
            },
            {
              name: "--lines",
              description: "Number of lines (default: 200)",
              args: { name: "n" },
            },
            { name: "--json", description: "Output JSON" },
          ],
        },
        {
          name: "dead-letters",
          description: "Inspect and resubmit failed inbound channel events",
          subcommands: [
            {
              name: "list",
              description: "List failed inbound events for one channel account",
              options: [
                {
                  name: "--channel",
                  description: "Channel id",
                  args: { name: "name", suggestions: channels },
                  isRequired: true,
                },
                {
                  name: "--account",
                  description: "Account id",
                  args: { name: "id" },
                },
                {
                  name: "--limit",
                  description: "Maximum entries",
                  args: { name: "n" },
                },
                { name: "--json", description: "Output JSON" },
              ],
            },
            {
              name: "resubmit",
              description: "Re-enqueue one failed inbound event",
              options: [
                {
                  name: "--channel",
                  description: "Channel id",
                  args: { name: "name", suggestions: channels },
                  isRequired: true,
                },
                {
                  name: "--account",
                  description: "Account id",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output JSON" },
              ],
              args: { name: "event-id", description: "Ingress event id" },
            },
          ],
          options: [
            {
              name: "--account",
              description: "Account id",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "add",
          description: "Add or update a channel account",
          options: [
            {
              name: "--channel",
              description: "Channel (channel)",
              args: { name: "name", suggestions: channels },
            },
            {
              name: "--agent",
              description: "Agent owner for channel setup",
              args: { name: "id" },
            },
            {
              name: "--account",
              description: "Account id (default when omitted)",
              args: { name: "id" },
            },
            {
              name: "--name",
              description: "Display name for this account",
              args: { name: "name" },
            },
            {
              name: "--token",
              description: "Channel token or credential payload",
              args: { name: "token" },
              isRequired: true,
            },
            {
              name: "--token-file",
              description: "Read channel token or credential payload from file",
              args: { name: "path", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--secret",
              description: "Channel shared secret",
              args: { name: "secret" },
              isRequired: true,
            },
            {
              name: "--bot-token",
              description: "Bot token",
              args: { name: "token" },
              isRequired: true,
            },
            {
              name: "--app-token",
              description: "App token",
              args: { name: "token" },
              isRequired: true,
            },
            {
              name: "--password",
              description: "Channel password or login secret",
              args: { name: "password" },
              isRequired: true,
            },
            {
              name: "--cli-path",
              description: "Channel CLI path",
              args: { name: "path", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--url",
              description: "Channel setup URL",
              args: { name: "url" },
              isRequired: true,
            },
            {
              name: "--base-url",
              description: "Channel base URL",
              args: { name: "url" },
              isRequired: true,
            },
            {
              name: "--http-url",
              description: "Channel HTTP service URL",
              args: { name: "url" },
              isRequired: true,
            },
            {
              name: "--auth-dir",
              description: "Channel auth directory override",
              args: { name: "path", template: "folders" },
              isRequired: true,
            },
            {
              name: "--use-env",
              description: "Use env-backed credentials when supported",
              isRequired: true,
            },
          ],
          args: {
            name: "channel",
            description: "Channel id",
            isOptional: true,
            suggestions: channels,
          },
        },
        {
          name: "remove",
          description: "Disable or delete a channel account",
          options: [
            {
              name: "--agent",
              description: "Agent owner for channel discovery",
              args: { name: "id" },
            },
            {
              name: "--channel",
              description: "Channel (channel)",
              args: { name: "name", suggestions: channels },
            },
            {
              name: "--account",
              description: "Account id (default when omitted)",
              args: { name: "id" },
            },
            {
              name: "--delete",
              description: "Delete config entries (no prompt)",
            },
          ],
        },
        {
          name: "login",
          description: "Link a channel account (if supported)",
          options: [
            {
              name: "--agent",
              description: "Agent owner for channel discovery",
              args: { name: "id" },
            },
            {
              name: "--channel",
              description: "Channel alias (auto when only one is configured)",
              args: { name: "channel", suggestions: channels },
            },
            {
              name: "--account",
              description: "Account id (accountId)",
              args: { name: "id" },
            },
            { name: "--verbose", description: "Verbose connection logs" },
          ],
        },
        {
          name: "logout",
          description: "Log out of a channel session (if supported)",
          options: [
            {
              name: "--agent",
              description: "Agent owner for channel discovery",
              args: { name: "id" },
            },
            {
              name: "--channel",
              description: "Channel alias (auto when only one is configured)",
              args: { name: "channel", suggestions: channels },
            },
            {
              name: "--account",
              description: "Account id (accountId)",
              args: { name: "id" },
            },
          ],
        },
      ],
      options: [
        {
          name: "--agent",
          description:
            "Agent owner for channel commands that require workspace context",
          args: { name: "id" },
        },
      ],
    },
    {
      name: "directory",
      description:
        "Lookup contact and group IDs (self, peers, groups) for supported chat channels",
      subcommands: [
        {
          name: "self",
          description: "Show the current account user",
          options: channelOptions,
        },
        {
          name: "peers",
          description: "Peer directory (contacts/users)",
          subcommands: [
            {
              name: "list",
              description: "List peers",
              options: [...channelOptions, ...directoryCliOptions],
            },
          ],
        },
        {
          name: "groups",
          description: "Group directory",
          subcommands: [
            {
              name: "list",
              description: "List groups",
              options: [...channelOptions, ...directoryCliOptions],
            },
            {
              name: "members",
              description: "List group members",
              options: [
                {
                  name: "--group-id",
                  description: "Group id",
                  args: { name: "id" },
                  isRequired: true,
                },
                ...channelOptions,
                {
                  name: "--limit",
                  description: "Limit results",
                  args: { name: "n" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "security",
      description: "Audit local config and state for common security foot-guns",
      subcommands: [
        {
          name: "audit",
          description:
            "Audit config + local state for common security foot-guns",
          options: [
            {
              name: "--deep",
              description:
                "Attempt live Gateway checks and plugin-owned collector checks",
            },
            {
              name: "--auth",
              description:
                'Runtime gateway auth mode ("none"|"token"|"password"|"trusted-proxy")',
              args: {
                name: "mode",
                suggestions: ["none", "token", "password", "trusted-proxy"],
              },
            },
            {
              name: "--token",
              description: "Use explicit gateway token for deep check auth",
              args: { name: "token" },
            },
            {
              name: "--password",
              description: "Use explicit gateway password for deep check auth",
              args: { name: "password" },
            },
            {
              name: "--fix",
              description:
                "Apply safe fixes (tighten defaults + chmod state/config)",
            },
            { name: "--json", description: "Print JSON" },
          ],
        },
      ],
    },
    {
      name: "secrets",
      description: "Secrets runtime controls",
      subcommands: [
        {
          name: "store",
          description:
            "Manage the team-scoped SQLite secret and environment store",
          subcommands: [
            {
              name: "list",
              description: "List stored names and non-secret metadata",
              options: [
                {
                  name: "--scope",
                  description: "Store scope",
                  args: { name: "team" },
                },
                { name: "--json", description: "Output JSON" },
                { name: "--plain", description: "Output tab-separated rows" },
              ],
            },
            {
              name: "set",
              description: "Create or update one store entry",
              options: [
                {
                  name: "--value",
                  description: "Literal value (env kind only)",
                  args: { name: "value" },
                },
                {
                  name: "--value-file",
                  description: "Read value from a file; use - for stdin",
                  args: { name: "path", template: "filepaths" },
                },
                {
                  name: "--kind",
                  description:
                    "Entry kind (defaults to existing kind, then NAME)",
                  args: { name: "secret|env", suggestions: ["secret", "env"] },
                },
                {
                  name: "--allow-host",
                  description:
                    "Allow substitution only for this exact host (repeatable)",
                  args: { name: "host" },
                  isRepeatable: true,
                },
                {
                  name: "--clear-allowed-hosts",
                  description: "Remove all allowed hosts",
                },
                {
                  name: "--scope",
                  description: "Store scope",
                  args: { name: "team" },
                },
                { name: "--dry-run", description: "Validate without writing" },
              ],
              args: { name: "NAME" },
            },
            {
              name: "get",
              description:
                "Read an env-kind value; secret-kind values are write-only",
              options: [
                {
                  name: "--scope",
                  description: "Store scope",
                  args: { name: "team" },
                },
                { name: "--json", description: "Output JSON" },
                { name: "--plain", description: "Output only the env value" },
              ],
              args: { name: "NAME" },
            },
            {
              name: "rm",
              description: "Soft-delete one or more entries",
              options: [
                {
                  name: "--scope",
                  description: "Store scope",
                  args: { name: "team" },
                },
                {
                  name: "--dry-run",
                  description: "Show what would be removed",
                },
                { name: "--yes", description: "Skip confirmation" },
              ],
              args: { name: "NAME", isVariadic: true },
            },
            {
              name: "import",
              description:
                "Import dotenv-formatted entries from a file or stdin",
              options: [
                {
                  name: "--from",
                  description: "Dotenv file; use - or omit for stdin",
                  args: { name: "file" },
                },
                {
                  name: "--kind",
                  description: "Override the detected kind for all entries",
                  args: { name: "secret|env", suggestions: ["secret", "env"] },
                },
                {
                  name: "--scope",
                  description: "Store scope",
                  args: { name: "team" },
                },
                { name: "--dry-run", description: "Validate without writing" },
                { name: "--yes", description: "Skip confirmation" },
              ],
            },
          ],
        },
        {
          name: "reload",
          description:
            "Re-resolve secret references and atomically swap runtime snapshot",
          options: [
            { name: "--json", description: "Output JSON" },
            ...gatewayClientOptions,
          ],
        },
        {
          name: "audit",
          description:
            "Audit plaintext secrets, unresolved refs, and precedence drift",
          options: [
            {
              name: "--check",
              description: "Exit non-zero when findings are present",
            },
            {
              name: "--allow-exec",
              description:
                "Allow exec SecretRef resolution during audit (may execute provider commands)",
            },
            { name: "--json", description: "Output JSON" },
          ],
        },
        {
          name: "configure",
          description:
            "Interactive secrets helper (provider setup + SecretRef mapping + preflight)",
          options: [
            {
              name: "--apply",
              description: "Apply changes immediately after preflight",
            },
            { name: "--yes", description: "Skip apply confirmation prompt" },
            {
              name: "--providers-only",
              description:
                "Configure secrets.providers only, skip credential mapping",
            },
            {
              name: "--skip-provider-setup",
              description:
                "Skip provider setup and only map credential fields to existing providers",
            },
            {
              name: "--agent",
              description:
                "Agent id for auth-profiles targets (default: configured default agent)",
              args: { name: "id" },
            },
            {
              name: "--allow-exec",
              description:
                "Allow exec SecretRef preflight checks (may execute provider commands)",
            },
            {
              name: "--plan-out",
              description: "Write generated plan JSON to a file (max 16 MiB)",
              args: { name: "path", template: "filepaths" },
            },
            { name: "--json", description: "Output JSON" },
          ],
        },
        {
          name: "apply",
          description: "Apply a previously generated secrets plan",
          options: [
            {
              name: "--from",
              description: "Path to plan JSON (max 16 MiB)",
              args: { name: "path", template: "filepaths" },
              isRequired: true,
            },
            { name: "--dry-run", description: "Validate/preflight only" },
            {
              name: "--allow-exec",
              description:
                "Allow exec SecretRef checks (may execute provider commands)",
            },
            { name: "--json", description: "Output JSON" },
          ],
        },
      ],
    },
    {
      name: "skills",
      description: "List and inspect available skills",
      subcommands: [
        {
          name: "library",
          description: "Manage authenticated personal and team skill libraries",
          subcommands: [
            {
              name: "list",
              description: "List your own and visible shared skills",
              options: [
                ...gatewayClientOptions,
                { name: "--json", description: "Output as JSON" },
                {
                  name: "--scope",
                  description: "Library scope",
                  args: { name: "scope", suggestions: ["mine", "team", "all"] },
                },
                {
                  name: "--session",
                  description:
                    "Include this session’s selected revisions and attachable skills",
                  args: { name: "key" },
                },
              ],
            },
            {
              name: "read",
              description:
                "Read the complete SKILL.md, supporting files, and revision history",
              options: [
                ...gatewayClientOptions,
                { name: "--json", description: "Output as JSON" },
                {
                  name: "--revision",
                  description: "Read a retained revision",
                  args: { name: "hash" },
                },
                {
                  name: "--session",
                  description:
                    "Read an exact session pin (requires --revision)",
                  args: { name: "key" },
                },
              ],
              args: {
                name: "skill-id",
                description: "Stable library skill ID",
              },
            },
            {
              name: "create",
              description:
                "Save a private skill from SKILL.md or a complete local directory",
              options: [
                ...gatewayClientOptions,
                { name: "--json", description: "Output as JSON" },
                {
                  name: "--slug",
                  description:
                    "Library name (lowercase letters, digits, hyphens)",
                  args: { name: "slug" },
                  isRequired: true,
                },
              ],
              args: {
                name: "path",
                description: "Local SKILL.md or skill directory",
                template: "folders",
              },
            },
            {
              name: "update",
              description:
                "Save a revision; a single SKILL.md preserves supporting files, a directory replaces the bundle",
              options: [
                ...gatewayClientOptions,
                { name: "--json", description: "Output as JSON" },
                {
                  name: "--expected-revision",
                  description:
                    "Current revision from library read; conflicts never overwrite",
                  args: { name: "hash" },
                  isRequired: true,
                },
                {
                  name: "--slug",
                  description: "Change the library name",
                  args: { name: "slug" },
                },
                {
                  name: "--delete-file",
                  description:
                    "Explicitly remove a supporting file (repeatable)",
                  args: { name: "path", template: "filepaths" },
                  isRepeatable: true,
                },
              ],
              args: [
                { name: "skill-id", description: "Stable library skill ID" },
                {
                  name: "path",
                  description:
                    "Local SKILL.md or complete replacement directory",
                  template: "folders",
                },
              ],
            },
            {
              name: "import",
              description:
                "Privately import a local bundle, ZIP, or ClawHub skill",
              options: [
                ...gatewayClientOptions,
                { name: "--json", description: "Output as JSON" },
                {
                  name: "--slug",
                  description: "Destination name in your personal library",
                  args: { name: "slug" },
                  isRequired: true,
                },
                {
                  name: "--clawhub",
                  description:
                    "Read source from ClawHub; never publishes your files",
                },
                {
                  name: "--version",
                  description: "ClawHub version",
                  args: { name: "version" },
                },
              ],
              args: {
                name: "source",
                description: "Local path or ClawHub reference with --clawhub",
              },
            },
            {
              name: "remove",
              description: "Remove a managed skill",
              options: [
                ...gatewayClientOptions,
                { name: "--json", description: "Output as JSON" },
                {
                  name: "--expected-revision",
                  description: "Current revision from library read",
                  args: { name: "hash" },
                  isRequired: true,
                },
              ],
              args: {
                name: "skill-id",
                description: "Stable library skill ID",
              },
            },
            {
              name: "share",
              description: "Share a managed skill",
              options: [
                ...gatewayClientOptions,
                { name: "--json", description: "Output as JSON" },
                {
                  name: "--expected-revision",
                  description: "Current revision from library read",
                  args: { name: "hash" },
                  isRequired: true,
                },
              ],
              args: {
                name: "skill-id",
                description: "Stable library skill ID",
              },
            },
            {
              name: "unshare",
              description: "Unshare a managed skill",
              options: [
                ...gatewayClientOptions,
                { name: "--json", description: "Output as JSON" },
                {
                  name: "--expected-revision",
                  description: "Current revision from library read",
                  args: { name: "hash" },
                  isRequired: true,
                },
              ],
              args: {
                name: "skill-id",
                description: "Stable library skill ID",
              },
            },
            {
              name: "transfer",
              description:
                "Transfer ownership to the team (administrator only)",
              options: [
                ...gatewayClientOptions,
                { name: "--json", description: "Output as JSON" },
                {
                  name: "--expected-revision",
                  description: "Current revision from library read",
                  args: { name: "hash" },
                  isRequired: true,
                },
              ],
              args: {
                name: "skill-id",
                description: "Stable library skill ID",
              },
            },
            {
              name: "enable",
              description: "Enable a managed skill",
              options: [
                ...gatewayClientOptions,
                { name: "--json", description: "Output as JSON" },
                {
                  name: "--expected-revision",
                  description: "Current revision from library read",
                  args: { name: "hash" },
                  isRequired: true,
                },
              ],
              args: {
                name: "skill-id",
                description: "Stable library skill ID",
              },
            },
            {
              name: "disable",
              description: "Disable a managed skill",
              options: [
                ...gatewayClientOptions,
                { name: "--json", description: "Output as JSON" },
                {
                  name: "--expected-revision",
                  description: "Current revision from library read",
                  args: { name: "hash" },
                  isRequired: true,
                },
              ],
              args: {
                name: "skill-id",
                description: "Stable library skill ID",
              },
            },
            {
              name: "rollback",
              description: "Rollback a managed skill",
              options: [
                ...gatewayClientOptions,
                { name: "--json", description: "Output as JSON" },
                {
                  name: "--expected-revision",
                  description: "Current revision from library read",
                  args: { name: "hash" },
                  isRequired: true,
                },
                {
                  name: "--revision",
                  description: "Retained revision to restore",
                  args: { name: "hash" },
                  isRequired: true,
                },
              ],
              args: {
                name: "skill-id",
                description: "Stable library skill ID",
              },
            },
            {
              name: "attach",
              description:
                "Attach managed selections explicitly for the next session turn",
              options: [
                ...gatewayClientOptions,
                { name: "--json", description: "Output as JSON" },
                {
                  name: "--session",
                  description: "Exact target session key",
                  args: { name: "key" },
                  isRequired: true,
                },
                {
                  name: "--skill-id",
                  description: "Stable library skill ID",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--revision",
                  description: "Retained revision to select",
                  args: { name: "hash" },
                },
              ],
            },
            {
              name: "detach",
              description:
                "Detach managed selections explicitly for the next session turn",
              options: [
                ...gatewayClientOptions,
                { name: "--json", description: "Output as JSON" },
                {
                  name: "--session",
                  description: "Exact target session key",
                  args: { name: "key" },
                  isRequired: true,
                },
                {
                  name: "--skill-id",
                  description: "Stable library skill ID",
                  args: { name: "id" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "refresh",
              description:
                "Refresh managed selections explicitly for the next session turn",
              options: [
                ...gatewayClientOptions,
                { name: "--json", description: "Output as JSON" },
                {
                  name: "--session",
                  description: "Exact target session key",
                  args: { name: "key" },
                  isRequired: true,
                },
                {
                  name: "--skill-id",
                  description:
                    "Refresh only this selected skill; omit to refresh all",
                  args: { name: "id" },
                },
              ],
            },
          ],
          options: [
            ...gatewayClientOptions,
            { name: "--json", description: "Output as JSON" },
          ],
        },
        {
          name: "search",
          description: "Search ClawHub skills",
          options: [
            {
              name: "--limit",
              description: "Max results",
              args: { name: "n" },
            },
            { name: "--json", description: "Output as JSON" },
          ],
          args: {
            name: "query",
            description: "Optional search query",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "install",
          description:
            "Install a skill from ClawHub, git, or a local directory",
          options: [
            {
              name: "--version",
              description: "Install a specific version",
              args: { name: "version" },
            },
            {
              name: "--force",
              description: "Overwrite an existing workspace skill",
            },
            {
              name: "--force-install",
              description:
                "Install a pending GitHub-backed skill before ClawHub scan completes",
            },
            {
              name: "--acknowledge-install-policy-warning",
              description:
                "Acknowledge security.installPolicy warnings without prompting; blocks and failures remain terminal",
            },
            {
              name: "--global",
              description: "Install into the shared managed skills directory",
            },
            {
              name: "--agent",
              description:
                "Target agent workspace (defaults to cwd-inferred, then default agent)",
              args: { name: "id" },
            },
            {
              name: "--as",
              description: "Install a git/local skill under this slug",
              args: { name: "slug" },
            },
          ],
          args: {
            name: "skill-ref",
            description:
              "ClawHub skill ref (@owner/slug or skills-sh:owner/repo/slug), git:<repo>, or local skill directory",
          },
        },
        {
          name: "update",
          description:
            "Update ClawHub-installed skills in the active or shared managed directory",
          options: [
            { name: "--all", description: "Update all tracked ClawHub skills" },
            {
              name: "--force",
              description:
                "Replace installed skills even when they have local changes",
            },
            {
              name: "--force-install",
              description:
                "Install a pending GitHub-backed skill before ClawHub scan completes",
            },
            {
              name: "--acknowledge-install-policy-warning",
              description:
                "Acknowledge security.installPolicy warnings without prompting; blocks and failures remain terminal",
            },
            {
              name: "--global",
              description:
                "Update skills in the shared managed skills directory",
            },
            {
              name: "--agent",
              description:
                "Target agent workspace (defaults to cwd-inferred, then default agent)",
              args: { name: "id" },
            },
          ],
          args: {
            name: "skill-ref",
            description: "Single ClawHub skill ref (@owner/slug)",
            isOptional: true,
          },
        },
        {
          name: "verify",
          description: "Verify a ClawHub skill with ClawHub",
          options: [
            {
              name: "--version",
              description: "Verify a specific version",
              args: { name: "version" },
            },
            {
              name: "--tag",
              description: "Verify a dist tag",
              args: { name: "tag" },
            },
            {
              name: "--card",
              description: "Print the generated Skill Card Markdown",
            },
            { name: "--json", description: "Output as JSON" },
            {
              name: "--global",
              description:
                "Resolve installed skill metadata from the shared managed skills directory",
            },
            {
              name: "--agent",
              description:
                "Target agent workspace (defaults to cwd-inferred, then default agent)",
              args: { name: "id" },
            },
          ],
          args: {
            name: "skill-ref",
            description: "ClawHub skill ref (@owner/slug)",
          },
        },
        {
          name: "workshop",
          description: "Inspect, archive, and restore learned Workshop skills",
          subcommands: [
            {
              name: "list",
              description: "List learned skills and archived skills",
              options: [{ name: "--json", description: "Output as JSON" }],
            },
            {
              name: "changes",
              description: "Show recent learned-skill changes",
              options: [
                {
                  name: "--limit",
                  description: "Max changes",
                  args: { name: "n" },
                },
                { name: "--json", description: "Output as JSON" },
              ],
            },
            {
              name: "show",
              description: "Print a learned skill file",
              options: [
                {
                  name: "--file",
                  description: "Skill file to print (default SKILL.md)",
                  args: { name: "path", template: "filepaths" },
                },
                {
                  name: "--version",
                  description:
                    "Print a saved version instead of the live skill",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output as JSON" },
              ],
              args: { name: "name", description: "Skill name" },
            },
            {
              name: "archive",
              description:
                "Archive a learned skill so its agent no longer sees it",
              options: [
                {
                  name: "--reason",
                  description: "Why the skill is archived",
                  args: { name: "text" },
                },
                { name: "--json", description: "Output as JSON" },
              ],
              args: { name: "name", description: "Skill name" },
            },
            {
              name: "restore",
              description: "Restore an archived skill or a saved version",
              options: [
                {
                  name: "--version",
                  description: "Version to restore (default newest)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Output as JSON" },
              ],
              args: { name: "name", description: "Skill name" },
            },
          ],
          options: [
            {
              name: "--agent",
              description:
                "Target agent (defaults to cwd-inferred, then default agent)",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "list",
          description: "List all available skills",
          options: [
            { name: "--json", description: "Output as JSON" },
            {
              name: "--eligible",
              description: "Show only eligible (ready to use) skills",
            },
            {
              name: ["-v", "--verbose"],
              description: "Show more details including missing requirements",
            },
            {
              name: "--agent",
              description:
                "Target agent workspace (defaults to cwd-inferred, then default agent)",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "info",
          description: "Show detailed information about a skill",
          options: [
            { name: "--json", description: "Output as JSON" },
            {
              name: "--agent",
              description:
                "Target agent workspace (defaults to cwd-inferred, then default agent)",
              args: { name: "id" },
            },
          ],
          args: { name: "name", description: "Skill name" },
        },
        {
          name: "check",
          description:
            "Check which skills are ready, visible, or missing requirements",
          options: skillsCliOptions,
        },
      ],
      options: skillsCliOptions,
    },
    {
      name: "update",
      description: "Update OpenClaw and inspect update channel status",
      subcommands: [
        {
          name: "adopt-immutable",
          description:
            "Explicitly record ownership of an existing sealed release installation",
          options: [
            {
              name: "--root",
              description:
                "Stable installation root containing current and releases",
              args: { name: "path", template: "folders" },
              isRequired: true,
            },
            {
              name: "--service",
              description: "Existing system-scope systemd service unit",
              args: { name: "unit" },
              isRequired: true,
            },
            {
              name: "--account",
              description: "Existing Gateway service account",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--state-dir",
              description: "Existing Gateway state directory",
              args: { name: "path", template: "folders" },
              isRequired: true,
            },
            {
              name: "--config",
              description: "Existing Gateway configuration file",
              args: { name: "path", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--runtime",
              description: "Pinned external Node executable",
              args: { name: "path", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--profile",
              description: "Existing Gateway profile",
              args: { name: "name" },
            },
            {
              name: "--enable-activation",
              description:
                "Enable native activation and recovery in the adoption record",
            },
            {
              name: "--inspect-release-retention",
              description:
                "Record inspect-only release retention after installing a compatible bridge",
            },
            {
              name: "--previous-updater-stopped",
              description:
                "Confirm the previous updater has settled and stopped scheduling",
            },
            { name: "--json", description: "Output result as JSON" },
          ],
        },
        {
          name: "recover",
          description:
            "Resume a retained immutable activation without restarting a healthy Gateway",
          options: [
            {
              name: "--root",
              description: "Stable adopted installation root",
              args: { name: "path", template: "folders" },
              isRequired: true,
            },
            {
              name: "--timeout",
              description: "Bound readiness verification in seconds",
              args: { name: "seconds" },
            },
            {
              name: "--drain-timeout",
              description:
                "Set the drain budget if recovery must stop an unhealthy service",
              args: { name: "seconds" },
            },
            { name: "--json", description: "Output result as JSON" },
          ],
        },
        {
          name: "cleanup",
          description:
            "Retire verified update recovery originals after acknowledging rollback loss",
          options: [
            {
              name: "--dry-run",
              description: "Inspect recovery metadata without writes",
            },
            {
              name: "--json",
              description: "Output one JSON result; never implies consent",
            },
            {
              name: "--yes",
              description:
                "Acknowledge permanent loss of the selected rollback originals",
            },
          ],
        },
        {
          name: "repair",
          description:
            "Reconcile abandoned updates or repair post-update doctor and plugin convergence",
          options: [
            { name: "--json", description: "Output result as JSON" },
            {
              name: "--channel",
              description: "Persist update channel before repair",
              args: {
                name: "stable|extended-stable|beta|dev",
                suggestions: ["stable", "extended-stable", "beta", "dev"],
              },
            },
            {
              name: "--timeout",
              description: "Override per-phase repair deadlines in seconds",
              args: { name: "seconds" },
            },
            {
              name: "--yes",
              description: "Skip confirmation prompts (non-interactive)",
            },
            {
              name: "--accept-capabilities",
              description: "Accept widened plugin capabilities",
            },
            {
              name: "--no-restart",
              description:
                "Skip updater restart (package Gateways may restart themselves)",
            },
          ],
        },
        {
          name: "wizard",
          description: "Interactive update wizard",
          options: [
            {
              name: "--accept-capabilities",
              description: "Accept widened plugin capabilities",
            },
            {
              name: "--timeout",
              description: "Set an overall update budget in seconds",
              args: { name: "seconds" },
            },
          ],
        },
        {
          name: "status",
          description: "Show update channel and version status",
          options: [
            { name: "--json", description: "Output result as JSON" },
            {
              name: "--timeout",
              description: "Timeout for update checks in seconds (default: 3)",
              args: { name: "seconds" },
            },
          ],
        },
      ],
      options: [
        { name: "--json", description: "Output result as JSON" },
        {
          name: "--no-restart",
          description:
            "Skip updater restart (package Gateways may restart themselves)",
        },
        {
          name: "--dry-run",
          description: "Preview update actions without making changes",
        },
        {
          name: "--admission",
          description:
            "Select candidate or installed admission checks (default: auto)",
          args: { name: "auto|installed", suggestions: ["auto", "installed"] },
        },
        {
          name: "--channel",
          description: "Persist update channel (git + npm)",
          args: {
            name: "stable|extended-stable|beta|dev",
            suggestions: ["stable", "extended-stable", "beta", "dev"],
          },
        },
        {
          name: "--tag",
          description:
            "Override the package target for this update (dist-tag, version, or package spec)",
          args: { name: "dist-tag|version|spec" },
        },
        {
          name: "--timeout",
          description: "Set a per-step deadline in seconds",
          args: { name: "seconds" },
        },
        {
          name: "--drain-timeout",
          description:
            "Set the immutable activation drain budget before interruption",
          args: { name: "seconds" },
        },
        {
          name: "--sha",
          description:
            "Prepare an exact official commit for an adopted immutable installation",
          args: { name: "commit" },
        },
        {
          name: "--yes",
          description: "Skip confirmation prompts (non-interactive)",
        },
        {
          name: "--reapply-local-overrides",
          description:
            "Replay trusted packaged dist edits when the target baseline is unchanged",
        },
        {
          name: "--accept-capabilities",
          description: "Accept widened plugin capabilities",
        },
      ],
    },
    {
      name: "completion",
      description: "Generate shell completion script",
      options: [
        {
          name: ["-s", "--shell"],
          description: "Shell to generate completion for (default: detected)",
          args: {
            name: "shell",
            suggestions: ["zsh", "bash", "powershell", "fish"],
          },
        },
        {
          name: ["-i", "--install"],
          description: "Install completion script to shell profile",
        },
        {
          name: "--write-state",
          description:
            "Write completion scripts to $OPENCLAW_STATE_DIR/completions (no stdout)",
        },
        {
          name: ["-y", "--yes"],
          description: "Skip confirmation (non-interactive)",
        },
      ],
    },
    {
      name: "browser",
      description: "Manage OpenClaw's dedicated browser (Chrome/Chromium)",
      subcommands: [
        { name: "status", description: "Show browser status" },
        {
          name: "doctor",
          description: "Check browser plugin readiness",
          options: [
            { name: "--deep", description: "Run a live snapshot check" },
          ],
        },
        {
          name: "start",
          description: "Start the browser (no-op if already running)",
          options: [
            {
              name: "--headless",
              description:
                "Launch a local managed browser headless for this start",
            },
          ],
        },
        { name: "stop", description: "Stop the browser (best-effort)" },
        {
          name: "reset-profile",
          description: "Reset browser profile (moves it to Trash)",
        },
        { name: "tabs", description: "List open tabs" },
        {
          name: "tab",
          description: "Tab shortcuts (index-based)",
          subcommands: [
            {
              name: "new",
              description: "Open a new tab (about:blank)",
              options: [
                {
                  name: "--label",
                  description: "Assign a friendly tab label",
                  args: { name: "label" },
                },
              ],
            },
            {
              name: "label",
              description: "Assign a friendly label to a tab",
              args: [
                {
                  name: "targetId",
                  description:
                    "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
                },
                { name: "label", description: "Friendly label" },
              ],
            },
            {
              name: "select",
              description: "Focus tab by index (1-based)",
              args: { name: "index", description: "Tab index (1-based)" },
            },
            {
              name: "close",
              description: "Close tab by index (1-based); default: first tab",
              args: {
                name: "index",
                description: "Tab index (1-based)",
                isOptional: true,
              },
            },
          ],
        },
        {
          name: "open",
          description: "Open a URL in a new tab",
          options: [
            {
              name: "--label",
              description: "Assign a friendly tab label",
              args: { name: "label" },
            },
          ],
          args: { name: "url", description: "URL to open" },
        },
        {
          name: "focus",
          description: "Focus a tab by tab reference",
          args: {
            name: "targetId",
            description:
              "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
          },
        },
        {
          name: "close",
          description: "Close a tab (tab reference optional)",
          args: {
            name: "targetId",
            description:
              "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix (optional)",
            isOptional: true,
          },
        },
        { name: "profiles", description: "List all browser profiles" },
        {
          name: "system-profiles",
          description:
            "List Chrome-family profiles available for cookie import",
          options: [
            {
              name: "--browser",
              description:
                "System browser (chrome|brave|edge|chromium); omit to list all",
              args: {
                name: "browser",
                suggestions: ["chrome", "brave", "edge", "chromium"],
              },
            },
          ],
        },
        {
          name: "import-profile",
          description: "Import cookies from a macOS Chrome-family profile",
          options: [
            {
              name: "--browser",
              description: "System browser (chrome|brave|edge|chromium)",
              args: {
                name: "browser",
                suggestions: ["chrome", "brave", "edge", "chromium"],
              },
            },
            {
              name: "--system",
              description: "System profile directory",
              args: { name: "profile" },
            },
            {
              name: "--into",
              description: "Managed target profile",
              args: { name: "profile" },
            },
            {
              name: "--domains",
              description: "Comma-separated domain filter",
              args: { name: "domains" },
            },
          ],
        },
        {
          name: "create-profile",
          description: "Create a new browser profile",
          options: [
            {
              name: "--name",
              description: "Profile name (lowercase, numbers, hyphens)",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--color",
              description: "Profile color (hex format, e.g. #0066CC)",
              args: { name: "hex" },
            },
            {
              name: "--cdp-url",
              description: "DevTools endpoint URL (http/https/ws/wss)",
              args: { name: "url" },
            },
            {
              name: "--user-data-dir",
              description: "User data dir for existing-session Chromium attach",
              args: { name: "path", template: "folders" },
            },
            {
              name: "--driver",
              description:
                "Profile driver (openclaw|existing-session). Default: openclaw",
              args: {
                name: "driver",
                suggestions: ["openclaw", "existing-session"],
              },
            },
          ],
        },
        {
          name: "delete-profile",
          description: "Delete a browser profile",
          options: [
            {
              name: "--name",
              description: "Profile name to delete",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "cookie-sync",
          description:
            "Sync allowlisted macOS Chrome-family cookies into a managed profile",
          options: [
            {
              name: "--domains",
              description: "Required comma-separated domain allowlist",
              args: { name: "list" },
            },
            {
              name: "--into",
              description: "Target managed Browser profile",
              args: { name: "profile" },
            },
            {
              name: "--browser",
              description: "System browser: chrome, brave, edge, or chromium",
              args: { name: "browser" },
            },
            {
              name: "--system",
              description: "System browser profile directory",
              args: { name: "id" },
            },
            {
              name: "--watch",
              description:
                "Watch the source Cookies database and re-sync changes",
            },
          ],
        },
        {
          name: "screenshot",
          description: "Capture a screenshot (prints the saved path)",
          options: [
            {
              name: "--full-page",
              description: "Capture full scrollable page",
            },
            {
              name: "--ref",
              description: "ARIA ref from ai snapshot",
              args: { name: "ref" },
            },
            {
              name: "--element",
              description: "CSS selector for element screenshot",
              args: { name: "selector" },
            },
            {
              name: "--labels",
              description:
                "Overlay role refs on the screenshot (works with --full-page, --ref, and --element)",
            },
            {
              name: "--type",
              description: "Output type (default: png)",
              args: { name: "png|jpeg", suggestions: ["png", "jpeg"] },
            },
            {
              name: "--timeout",
              description: "Timeout in ms",
              args: { name: "ms" },
            },
          ],
          args: {
            name: "targetId",
            description:
              "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
            isOptional: true,
          },
        },
        {
          name: "snapshot",
          description:
            "Capture a snapshot (default: ai; aria is the accessibility tree)",
          options: [
            {
              name: "--format",
              description: "Snapshot format (default: ai)",
              args: { name: "aria|ai", suggestions: ["aria", "ai"] },
            },
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
            {
              name: "--limit",
              description: "Max nodes (default: 500/800)",
              args: { name: "n" },
            },
            {
              name: "--mode",
              description: "Snapshot preset (efficient)",
              args: { name: "efficient" },
            },
            {
              name: "--efficient",
              description: "Use the efficient snapshot preset",
            },
            {
              name: "--interactive",
              description: "Role snapshot: interactive elements only",
            },
            { name: "--compact", description: "Role snapshot: compact output" },
            {
              name: "--depth",
              description: "Role snapshot: max depth",
              args: { name: "n" },
            },
            {
              name: "--selector",
              description: "Role snapshot: scope to CSS selector",
              args: { name: "sel" },
            },
            {
              name: "--frame",
              description: "Role snapshot: scope to an iframe selector",
              args: { name: "sel" },
            },
            {
              name: "--labels",
              description: "Include label overlay screenshot with annotations",
            },
            {
              name: "--urls",
              description: "Append discovered link URLs to AI snapshots",
            },
            {
              name: "--out",
              description: "Write snapshot to a file",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--timeout",
              description: "Timeout in ms",
              args: { name: "ms" },
            },
          ],
        },
        {
          name: "navigate",
          description: "Navigate the current tab to a URL",
          options: [
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
          ],
          args: { name: "url", description: "URL to navigate to" },
        },
        {
          name: "resize",
          description: "Resize the viewport",
          options: [
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
          ],
          args: [
            { name: "width", description: "Viewport width" },
            { name: "height", description: "Viewport height" },
          ],
        },
        {
          name: "click",
          description: "Click an element by ref from snapshot",
          options: [
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
            { name: "--double", description: "Double click" },
            {
              name: "--button",
              description: "Mouse button to use",
              args: {
                name: "left|right|middle",
                suggestions: ["left", "right", "middle"],
              },
            },
            {
              name: "--modifiers",
              description: "Comma-separated modifiers (Shift,Alt,Meta)",
              args: { name: "list" },
            },
          ],
          args: { name: "ref", description: "Ref id from snapshot" },
        },
        {
          name: "click-coords",
          description: "Click viewport coordinates",
          options: [
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
            { name: "--double", description: "Double click" },
            {
              name: "--button",
              description: "Mouse button to use",
              args: {
                name: "left|right|middle",
                suggestions: ["left", "right", "middle"],
              },
            },
            {
              name: "--delay-ms",
              description: "Delay between mouse down/up",
              args: { name: "ms" },
            },
          ],
          args: [
            { name: "x", description: "Viewport x coordinate" },
            { name: "y", description: "Viewport y coordinate" },
          ],
        },
        {
          name: "type",
          description: "Type into an element by ref from snapshot",
          options: [
            { name: "--submit", description: "Press Enter after typing" },
            { name: "--slowly", description: "Type slowly (human-like)" },
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
          ],
          args: [
            { name: "ref", description: "Ref id from snapshot" },
            { name: "text", description: "Text to type" },
          ],
        },
        {
          name: "press",
          description: "Press a key",
          options: [
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
          ],
          args: { name: "key", description: "Key to press (e.g. Enter)" },
        },
        {
          name: "hover",
          description: "Hover an element by ai ref",
          options: [
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
          ],
          args: { name: "ref", description: "Ref id from snapshot" },
        },
        {
          name: "scrollintoview",
          description: "Scroll an element into view by ref from snapshot",
          options: [
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
            {
              name: "--timeout-ms",
              description: "How long to wait for scroll (default: 20000)",
              args: { name: "ms" },
            },
          ],
          args: { name: "ref", description: "Ref id from snapshot" },
        },
        {
          name: "drag",
          description: "Drag from one ref to another",
          options: [
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
          ],
          args: [
            { name: "startRef", description: "Start ref id" },
            { name: "endRef", description: "End ref id" },
          ],
        },
        {
          name: "select",
          description: "Select option(s) in a select element",
          options: [
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
          ],
          args: [
            { name: "ref", description: "Ref id from snapshot" },
            {
              name: "values",
              description: "Option values to select",
              isVariadic: true,
            },
          ],
        },
        {
          name: "upload",
          description: "Arm file upload for the next file chooser",
          options: [
            {
              name: "--ref",
              description: "Ref id from snapshot to click after arming",
              args: { name: "ref" },
            },
            {
              name: "--input-ref",
              description: "Ref id for <input type=file> to set directly",
              args: { name: "ref" },
            },
            {
              name: "--element",
              description: "CSS selector for <input type=file>",
              args: { name: "selector" },
            },
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
            {
              name: "--timeout-ms",
              description:
                "How long to wait for the next file chooser (default: 120000)",
              args: { name: "ms" },
            },
          ],
          args: {
            name: "paths",
            description:
              "File paths to upload from OpenClaw temp uploads or managed inbound media (e.g. /tmp/openclaw/uploads/file.pdf or media://inbound/<id>)",
            isVariadic: true,
            template: "filepaths",
          },
        },
        {
          name: "waitfordownload",
          description: "Wait for the next download (and save it)",
          options: [
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
            {
              name: "--timeout-ms",
              description:
                "How long to wait for the next download (default: 120000)",
              args: { name: "ms" },
            },
          ],
          args: {
            name: "path",
            description:
              "Save path within openclaw temp downloads dir (default: /tmp/openclaw/downloads/...; fallback: os.tmpdir()/openclaw/downloads/...)",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "download",
          description: "Click a ref and save the resulting download",
          options: [
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
            {
              name: "--timeout-ms",
              description:
                "How long to wait for the download to start (default: 120000)",
              args: { name: "ms" },
            },
          ],
          args: [
            { name: "ref", description: "Ref id from snapshot to click" },
            {
              name: "path",
              description:
                "Save path within openclaw temp downloads dir (e.g. report.pdf or /tmp/openclaw/downloads/report.pdf)",
              template: "filepaths",
            },
          ],
        },
        {
          name: "dialog",
          description: "Arm the next modal dialog (alert/confirm/prompt)",
          options: [
            { name: "--accept", description: "Accept the dialog" },
            { name: "--dismiss", description: "Dismiss the dialog" },
            {
              name: "--prompt",
              description: "Prompt response text",
              args: { name: "text" },
            },
            {
              name: "--dialog-id",
              description: "Pending dialog id from snapshot/browser state",
              args: { name: "id" },
            },
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
            {
              name: "--timeout-ms",
              description:
                "How long to wait for the next dialog (default: 120000)",
              args: { name: "ms" },
            },
          ],
        },
        {
          name: "fill",
          description: "Fill a form with JSON field descriptors",
          options: [
            {
              name: "--fields",
              description: "JSON array of field objects",
              args: { name: "json" },
            },
            {
              name: "--fields-file",
              description: "Read JSON array from a file",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Wait for time, selector, URL, load state, or JS conditions",
          options: [
            {
              name: "--time",
              description: "Wait for N milliseconds",
              args: { name: "ms" },
            },
            {
              name: "--text",
              description: "Wait for text to appear",
              args: { name: "value" },
            },
            {
              name: "--text-gone",
              description: "Wait for text to disappear",
              args: { name: "value" },
            },
            {
              name: "--url",
              description: "Wait for URL (supports globs like **/dash)",
              args: { name: "pattern" },
            },
            {
              name: "--load",
              description: "Wait for load state",
              args: {
                name: "load|domcontentloaded|networkidle",
                suggestions: ["load", "domcontentloaded", "networkidle"],
              },
            },
            {
              name: "--fn",
              description: "Wait for JS condition (passed to waitForFunction)",
              args: { name: "js" },
            },
            {
              name: "--timeout-ms",
              description:
                "How long to wait for each condition (default: 20000)",
              args: { name: "ms" },
            },
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
          ],
          args: {
            name: "selector",
            description: "CSS selector to wait for (visible)",
            isOptional: true,
          },
        },
        {
          name: "evaluate",
          description: "Evaluate JavaScript against the page or a ref",
          options: [
            {
              name: "--fn",
              description:
                "Function source, expression, or statement body, e.g. const text = el.textContent; return text;",
              args: { name: "code" },
            },
            {
              name: "--ref",
              description: "Ref from snapshot",
              args: { name: "id" },
            },
            {
              name: "--timeout-ms",
              description:
                "How long to allow the evaluate function to run (default: 20000)",
              args: { name: "ms" },
            },
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "batch",
          description:
            "Run a batch of browser actions in one call (default: stop on first error)",
          options: [
            {
              name: "--actions",
              description: "JSON array of act requests",
              args: { name: "json" },
            },
            {
              name: "--actions-file",
              description: "Read JSON array from a file (- for stdin)",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--continue",
              description:
                "Continue through all actions instead of stopping on first error",
            },
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "console",
          description: "Get recent console messages",
          options: [
            {
              name: "--level",
              description: "Filter by level (error, warn, info)",
              args: { name: "level" },
            },
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "pdf",
          description: "Save page as PDF",
          options: [
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "responsebody",
          description: "Wait for a network response and return its body",
          options: [
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
            {
              name: "--timeout-ms",
              description:
                "How long to wait for the complete response body (default: 20000)",
              args: { name: "ms" },
            },
            {
              name: "--max-chars",
              description: "Max body chars to return (default: 200000)",
              args: { name: "n" },
            },
          ],
          args: {
            name: "url",
            description: "URL (exact, substring, or glob like **/api)",
          },
        },
        {
          name: "highlight",
          description: "Highlight an element by ref",
          options: [
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
          ],
          args: { name: "ref", description: "Ref id from snapshot" },
        },
        {
          name: "errors",
          description: "Get recent page errors",
          options: [
            {
              name: "--clear",
              description: "Clear stored errors after reading",
            },
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "requests",
          description: "Get recent network requests (best-effort)",
          options: [
            {
              name: "--filter",
              description: "Only show URLs that contain this substring",
              args: { name: "text" },
            },
            {
              name: "--clear",
              description: "Clear stored requests after reading",
            },
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "trace",
          description: "Record a Playwright trace",
          subcommands: [
            {
              name: "start",
              description: "Start trace recording",
              options: [
                {
                  name: "--target-id",
                  description:
                    "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
                  args: { name: "id" },
                },
                {
                  name: "--no-screenshots",
                  description: "Disable screenshots",
                },
                { name: "--no-snapshots", description: "Disable snapshots" },
                {
                  name: "--sources",
                  description: "Include sources (bigger traces)",
                },
              ],
            },
            {
              name: "stop",
              description: "Stop trace recording and write a .zip",
              options: [
                {
                  name: "--out",
                  description:
                    "Output path within openclaw temp dir (e.g. trace.zip or /tmp/openclaw/trace.zip)",
                  args: { name: "path", template: "filepaths" },
                },
                {
                  name: "--target-id",
                  description:
                    "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
                  args: { name: "id" },
                },
              ],
            },
          ],
        },
        {
          name: "cookies",
          description: "Read/write cookies",
          subcommands: [
            {
              name: "set",
              description: "Set a cookie (requires --url or domain+path)",
              options: [
                {
                  name: "--url",
                  description: "Cookie URL scope (recommended)",
                  args: { name: "url" },
                },
                {
                  name: "--target-id",
                  description:
                    "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
                  args: { name: "id" },
                },
              ],
              args: [
                { name: "name", description: "Cookie name" },
                { name: "value", description: "Cookie value" },
              ],
            },
            {
              name: "clear",
              description: "Clear all cookies",
              options: [
                {
                  name: "--target-id",
                  description:
                    "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
                  args: { name: "id" },
                },
              ],
            },
          ],
          options: [
            {
              name: "--target-id",
              description:
                "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
              args: { name: "id" },
            },
          ],
        },
        {
          name: "storage",
          description: "Read/write localStorage/sessionStorage",
          subcommands: [
            {
              name: "local",
              description: "LocalStorage commands",
              subcommands: [
                {
                  name: "get",
                  description: "Get localStorage (all keys or one key)",
                  options: [
                    {
                      name: "--target-id",
                      description:
                        "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
                      args: { name: "id" },
                    },
                  ],
                  args: {
                    name: "key",
                    description: "Key (optional)",
                    isOptional: true,
                  },
                },
                {
                  name: "set",
                  description: "Set a localStorage key",
                  options: [
                    {
                      name: "--target-id",
                      description:
                        "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
                      args: { name: "id" },
                    },
                  ],
                  args: [{ name: "key" }, { name: "value" }],
                },
                {
                  name: "clear",
                  description: "Clear all localStorage keys",
                  options: [
                    {
                      name: "--target-id",
                      description:
                        "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
                      args: { name: "id" },
                    },
                  ],
                },
              ],
            },
            {
              name: "session",
              description: "SessionStorage commands",
              subcommands: [
                {
                  name: "get",
                  description: "Get sessionStorage (all keys or one key)",
                  options: [
                    {
                      name: "--target-id",
                      description:
                        "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
                      args: { name: "id" },
                    },
                  ],
                  args: {
                    name: "key",
                    description: "Key (optional)",
                    isOptional: true,
                  },
                },
                {
                  name: "set",
                  description: "Set a sessionStorage key",
                  options: [
                    {
                      name: "--target-id",
                      description:
                        "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
                      args: { name: "id" },
                    },
                  ],
                  args: [{ name: "key" }, { name: "value" }],
                },
                {
                  name: "clear",
                  description: "Clear all sessionStorage keys",
                  options: [
                    {
                      name: "--target-id",
                      description:
                        "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
                      args: { name: "id" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "set",
          description: "Browser environment settings",
          subcommands: [
            {
              name: "viewport",
              description: "Set viewport size (alias for resize)",
              options: [
                {
                  name: "--target-id",
                  description:
                    "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
                  args: { name: "id" },
                },
              ],
              args: [
                { name: "width", description: "Viewport width" },
                { name: "height", description: "Viewport height" },
              ],
            },
            {
              name: "offline",
              description: "Toggle offline mode",
              options: [
                {
                  name: "--target-id",
                  description:
                    "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
                  args: { name: "id" },
                },
              ],
              args: { name: "on|off", suggestions: ["on", "off"] },
            },
            {
              name: "headers",
              description: "Set extra HTTP headers (JSON object)",
              options: [
                {
                  name: "--headers-json",
                  description: "JSON object of headers",
                  args: { name: "json" },
                },
                {
                  name: "--target-id",
                  description:
                    "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
                  args: { name: "id" },
                },
              ],
              args: {
                name: "headersJson",
                description:
                  "JSON object of headers (alternative to --headers-json)",
                isOptional: true,
              },
            },
            {
              name: "credentials",
              description: "Set HTTP basic auth credentials",
              options: [
                { name: "--clear", description: "Clear credentials" },
                {
                  name: "--target-id",
                  description:
                    "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
                  args: { name: "id" },
                },
              ],
              args: [
                { name: "username", isOptional: true },
                { name: "password", isOptional: true },
              ],
            },
            {
              name: "geo",
              description: "Set geolocation (and grant permission)",
              options: [
                {
                  name: "--clear",
                  description: "Clear geolocation + permissions",
                },
                {
                  name: "--accuracy",
                  description: "Accuracy in meters",
                  args: { name: "m" },
                },
                {
                  name: "--origin",
                  description: "Origin to grant permissions for",
                  args: { name: "origin" },
                },
                {
                  name: "--target-id",
                  description:
                    "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
                  args: { name: "id" },
                },
              ],
              args: [
                { name: "latitude", isOptional: true },
                { name: "longitude", isOptional: true },
              ],
            },
            {
              name: "media",
              description: "Emulate prefers-color-scheme",
              options: [
                {
                  name: "--target-id",
                  description:
                    "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
                  args: { name: "id" },
                },
              ],
              args: {
                name: "dark|light|no-preference|none",
                suggestions: ["dark", "light", "no-preference", "none"],
              },
            },
            {
              name: "timezone",
              description: "Override timezone (CDP)",
              options: [
                {
                  name: "--target-id",
                  description:
                    "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
                  args: { name: "id" },
                },
              ],
              args: {
                name: "timezoneId",
                description: "Timezone ID (e.g. America/New_York)",
              },
            },
            {
              name: "locale",
              description: "Override locale (CDP)",
              options: [
                {
                  name: "--target-id",
                  description:
                    "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
                  args: { name: "id" },
                },
              ],
              args: { name: "locale", description: "Locale (e.g. en-US)" },
            },
            {
              name: "device",
              description:
                'Apply a Playwright device descriptor (e.g. "iPhone 14")',
              options: [
                {
                  name: "--target-id",
                  description:
                    "Tab reference: suggested target id, tab id, label, raw target id, or unique raw prefix",
                  args: { name: "id" },
                },
              ],
              args: {
                name: "name",
                description: "Device name (Playwright devices)",
              },
            },
          ],
        },
        {
          name: "extension",
          description:
            "Install and inspect the OpenClaw Chrome extension bootstrap",
          subcommands: [
            {
              name: "setup",
              description:
                "Inspect, prepare, or verify automatic Chrome setup on this host",
              options: [
                {
                  name: "--action",
                  description: "Inspect, install, or verify",
                  args: { name: "action" },
                },
                {
                  name: "--native-host-executable",
                  description:
                    "Local self-contained Windows bootstrap executable",
                  args: { name: "path", template: "filepaths" },
                },
                {
                  name: "--browser-profile",
                  description: "Local extension profile",
                  args: { name: "name" },
                },
                {
                  name: "--wait-ms",
                  description: "Bounded Chrome discovery wait",
                  args: { name: "ms" },
                },
                {
                  name: "--json",
                  description: "Print the redacted setup result",
                },
              ],
            },
            {
              name: "path",
              description:
                "Print the unpacked Chrome extension directory (Load unpacked)",
            },
            {
              name: "install",
              description:
                "Set up the Chrome extension and request supported Store installation",
              options: [
                {
                  name: "--browser-profile",
                  description:
                    "Local extension profile; repair preserves an owned selector",
                  args: { name: "name" },
                },
                {
                  name: "--native-host-executable",
                  description:
                    "Local self-contained Windows bootstrap executable",
                  args: { name: "path", template: "filepaths" },
                },
                {
                  name: "--no-store",
                  description:
                    "Prepare native bootstrap and development files without requesting Store installation",
                },
                {
                  name: "--json",
                  description: "Print a machine-readable status report",
                },
                {
                  name: "--wait-ms",
                  description:
                    "How long to wait after pre-registration for Chrome to verify the extension",
                  args: { name: "ms" },
                },
              ],
            },
            {
              name: "repair",
              description:
                "Inspect or repair existing native hosts without browser profile discovery",
              options: [
                {
                  name: "--from",
                  description:
                    "Repair only registrations referencing this exact absolute entrypoint",
                  args: { name: "entrypoint" },
                },
                {
                  name: "--dry-run",
                  description:
                    "Inspect registered targets without changing files",
                },
                {
                  name: "--json",
                  description: "Print a machine-readable repair report",
                },
              ],
            },
            {
              name: "status",
              description:
                "Inspect extension copies, Chrome IDs, and native-host registrations",
              options: [
                {
                  name: "--native-host-executable",
                  description:
                    "Local self-contained Windows bootstrap executable",
                  args: { name: "path", template: "filepaths" },
                },
                {
                  name: "--browser-profile",
                  description: "Local extension profile",
                  args: { name: "name" },
                },
                {
                  name: "--json",
                  description: "Print a machine-readable status report",
                },
              ],
            },
            {
              name: "uninstall-store",
              description:
                "Remove OpenClaw-owned Store install requests; Chrome may remove the extension on restart",
              options: [
                {
                  name: "--json",
                  description: "Print a machine-readable removal report",
                },
              ],
            },
            {
              name: "uninstall-host",
              description:
                "Remove only OpenClaw-owned Chrome native-host registrations",
              options: [
                {
                  name: "--native-host-executable",
                  description:
                    "Local self-contained Windows bootstrap executable",
                  args: { name: "path", template: "filepaths" },
                },
                {
                  name: "--browser-profile",
                  description: "Local extension profile",
                  args: { name: "name" },
                },
                {
                  name: "--remove-store",
                  description:
                    "Remove owned Windows Store requests before native registration",
                },
                {
                  name: "--json",
                  description: "Print a machine-readable removal report",
                },
              ],
            },
            {
              name: "pair",
              description: "Print an advanced manual pairing string",
              options: [
                {
                  name: "--json",
                  description: "Print the pairing string as JSON",
                },
                {
                  name: "--local-gateway",
                  description:
                    "Pair through this host’s local Gateway for desktop native helpers",
                },
                {
                  name: "--gateway-url",
                  description:
                    "Print a remote pairing string for a Chrome on another machine (e.g. wss://gateway.example.com)",
                  args: { name: "url" },
                },
              ],
            },
            {
              name: "cdp",
              description:
                "Print non-secret Browser Relay Authentication v2 CDP metadata",
              options: [
                { name: "--json", description: "Print the endpoint as JSON" },
                {
                  name: "--legacy-bearer",
                  description:
                    "Print the legacy Bearer header while browser.extensionRelay.allowLegacyAuth is enabled",
                },
              ],
            },
          ],
        },
      ],
      options: [
        {
          name: "--browser-profile",
          description: "Browser profile name (default from config)",
          args: { name: "name" },
        },
        { name: "--json", description: "Output machine-readable JSON" },
        ...gatewayClientOptions,
      ],
    },
    {
      name: "memory",
      description: "Search, inspect, and reindex memory files",
      subcommands: [
        {
          name: "status",
          description: "Show memory search index status",
          options: [
            {
              name: "--agent",
              description: "Agent id (default: all configured agents)",
              args: { name: "id" },
            },
            { name: "--json", description: "Print JSON" },
            {
              name: "--deep",
              description: "Check embedding provider availability",
            },
            {
              name: "--index",
              description: "Reindex if dirty (implies --deep)",
            },
            {
              name: "--fix",
              description:
                "Repair stale recall locks and normalize promotion metadata",
            },
            { name: "--verbose", description: "Verbose logging" },
          ],
        },
        {
          name: "index",
          description: "Reindex memory files",
          options: [
            {
              name: "--agent",
              description: "Agent id (default: all configured agents)",
              args: { name: "id" },
            },
            { name: "--force", description: "Force full reindex" },
            { name: "--verbose", description: "Verbose logging" },
          ],
        },
        {
          name: "reset",
          description:
            "Clear the derived memory index and embedding cache without deleting sessions",
          options: [
            {
              name: "--agent",
              description: "Agent id (default: all configured agents)",
              args: { name: "id" },
            },
            { name: "--yes", description: "Skip confirmation" },
          ],
        },
        {
          name: "search",
          description: "Search memory files",
          options: [
            {
              name: "--query",
              description: "Search query (alternative to positional argument)",
              args: { name: "text" },
            },
            {
              name: "--agent",
              description: "Agent id (default: default agent)",
              args: { name: "id" },
            },
            {
              name: "--max-results",
              description: "Max results",
              args: { name: "n" },
            },
            {
              name: "--min-score",
              description: "Minimum score",
              args: { name: "n" },
            },
            { name: "--json", description: "Print JSON" },
          ],
          args: {
            name: "query",
            description: "Search query",
            isOptional: true,
          },
        },
        {
          name: "forget",
          description:
            "Delete memories and derived artifacts from selected sessions",
          options: [
            {
              name: "--agent",
              description: "Agent id (default: default agent)",
              args: { name: "id" },
            },
            {
              name: "--session",
              description: "Source session ID or key (repeatable)",
              args: { name: "id-or-key" },
              isRepeatable: true,
            },
            {
              name: "--hook-source",
              description: "External-content hook source (repeatable)",
              args: { name: "source" },
              isRepeatable: true,
            },
            {
              name: "--participant",
              description: "Session participant actor ID (repeatable)",
              args: { name: "actor-id" },
              isRepeatable: true,
            },
            {
              name: "--since",
              description:
                "Only include sessions observed on or after this date",
              args: { name: "date" },
            },
            {
              name: "--dry-run",
              description:
                "Report everything that would be deleted without writing",
            },
            {
              name: "--json",
              description:
                "Print the complete machine-readable deletion report",
            },
          ],
        },
        {
          name: "promote",
          description:
            "Rank short-term recalls and optionally append top entries to MEMORY.md",
          options: [
            {
              name: "--agent",
              description: "Agent id (default: default agent)",
              args: { name: "id" },
            },
            {
              name: "--limit",
              description: "Max candidates",
              args: { name: "n" },
            },
            {
              name: "--min-score",
              description: "Minimum weighted score (default: 0.75)",
              args: { name: "n" },
            },
            {
              name: "--min-recall-count",
              description: "Minimum recall count (default: 3)",
              args: { name: "n" },
            },
            {
              name: "--min-unique-queries",
              description: "Minimum distinct query count (default: 3)",
              args: { name: "n" },
            },
            {
              name: "--apply",
              description: "Append selected candidates to MEMORY.md",
            },
            {
              name: "--include-promoted",
              description: "Include already promoted candidates",
            },
            { name: "--json", description: "Print JSON" },
          ],
        },
        {
          name: "promote-explain",
          description:
            "Explain a specific promotion candidate and its score breakdown",
          options: [
            {
              name: "--agent",
              description: "Agent id (default: default agent)",
              args: { name: "id" },
            },
            {
              name: "--include-promoted",
              description: "Include already promoted candidates",
            },
            { name: "--json", description: "Print JSON" },
          ],
          args: {
            name: "selector",
            description: "Candidate key, path fragment, or snippet fragment",
          },
        },
        {
          name: "rem-harness",
          description:
            "Preview REM reflections, candidate truths, and deep promotions without writing",
          options: [
            {
              name: "--agent",
              description: "Agent id (default: default agent)",
              args: { name: "id" },
            },
            {
              name: "--path",
              description:
                "Seed the harness from historical daily memory file(s)",
              args: { name: "file-or-dir", template: "filepaths" },
            },
            {
              name: "--grounded",
              description: "Also render a grounded day-level REM preview",
            },
            {
              name: "--include-promoted",
              description: "Include already promoted deep candidates",
            },
            { name: "--json", description: "Print JSON" },
          ],
        },
        {
          name: "rem-backfill",
          description:
            "Write grounded historical REM summaries into DREAMS.md for UI review",
          options: [
            {
              name: "--agent",
              description: "Agent id (default: default agent)",
              args: { name: "id" },
            },
            {
              name: "--path",
              description: "Historical daily memory file(s) or directory",
              args: { name: "file-or-dir", template: "filepaths" },
            },
            {
              name: "--rollback",
              description:
                "Remove previously written grounded REM backfill entries",
            },
            {
              name: "--stage-short-term",
              description:
                "Also seed grounded durable candidates into the short-term promotion store",
            },
            {
              name: "--rollback-short-term",
              description:
                "Remove previously seeded grounded short-term candidates",
            },
            { name: "--json", description: "Print JSON" },
          ],
        },
        {
          name: "session-backfill",
          description:
            "Distill retained session history into staged memory candidates",
          options: [
            {
              name: "--agent",
              description: "Agent id (default: default agent)",
              args: { name: "id" },
            },
            {
              name: "--from",
              description: "Oldest transcript day to include",
              args: { name: "YYYY-MM-DD" },
            },
            {
              name: "--to",
              description: "Newest transcript day to include",
              args: { name: "YYYY-MM-DD" },
            },
            {
              name: "--limit-days",
              description: "Maximum unprocessed days (default: 92)",
              args: { name: "n" },
            },
            {
              name: "--rem",
              description: "Write grounded per-day REM previews to DREAMS.md",
            },
            {
              name: "--apply",
              description: "Stage candidates and write DREAMS.md diary entries",
            },
            {
              name: "--rollback",
              description:
                "Remove all grounded backfill candidates and shared backfill diary entries",
            },
            {
              name: "--archive-files",
              description:
                "Also inspect foreign transcript archive files conservatively",
              args: { name: "path", isVariadic: true, template: "filepaths" },
            },
            { name: "--json", description: "Print JSON" },
          ],
        },
      ],
    },
    {
      name: "wiki",
      description: "Inspect and initialize the memory wiki vault",
      subcommands: [
        {
          name: "status",
          description: "Show wiki vault status",
          options: [
            {
              name: "--agent",
              description: "Agent id (default: configured default agent)",
              args: { name: "id" },
            },
            { name: "--json", description: "Print JSON" },
          ],
        },
        {
          name: "doctor",
          description: "Audit wiki vault setup and report actionable fixes",
          options: [
            {
              name: "--agent",
              description: "Agent id (default: configured default agent)",
              args: { name: "id" },
            },
            { name: "--json", description: "Print JSON" },
          ],
        },
        {
          name: "init",
          description: "Initialize the wiki vault layout",
          options: [
            {
              name: "--agent",
              description: "Agent id (default: configured default agent)",
              args: { name: "id" },
            },
            { name: "--json", description: "Print JSON" },
          ],
        },
        {
          name: "compile",
          description: "Refresh generated wiki indexes",
          options: [
            {
              name: "--agent",
              description: "Agent id (default: configured default agent)",
              args: { name: "id" },
            },
            { name: "--json", description: "Print JSON" },
          ],
        },
        {
          name: "lint",
          description: "Lint the wiki vault and write a report",
          options: [
            {
              name: "--agent",
              description: "Agent id (default: configured default agent)",
              args: { name: "id" },
            },
            { name: "--json", description: "Print JSON" },
          ],
        },
        {
          name: "ingest",
          description: "Ingest a local file into the wiki sources folder",
          options: [
            {
              name: "--agent",
              description: "Agent id (default: configured default agent)",
              args: { name: "id" },
            },
            {
              name: "--title",
              description: "Override the source title",
              args: { name: "title" },
            },
            { name: "--json", description: "Print JSON" },
          ],
          args: {
            name: "path",
            description: "Local file path to ingest",
            template: "filepaths",
          },
        },
        {
          name: "okf",
          description: "Import Open Knowledge Format bundles",
          subcommands: [
            {
              name: "import",
              description:
                "Import an unpacked OKF bundle into wiki concept pages",
              options: [
                {
                  name: "--agent",
                  description: "Agent id (default: configured default agent)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Print JSON" },
              ],
              args: {
                name: "path",
                description: "OKF bundle directory",
                template: "folders",
              },
            },
          ],
        },
        {
          name: "search",
          description:
            "Search wiki pages and, when configured, the active memory corpus",
          options: [
            {
              name: "--agent",
              description: "Agent id (default: configured default agent)",
              args: { name: "id" },
            },
            {
              name: "--max-results",
              description: "Maximum results",
              args: { name: "n" },
            },
            {
              name: "--mode",
              description:
                "Search mode (auto, find-person, route-question, source-evidence, raw-claim)",
              args: { name: "mode" },
            },
            ...wikiSearchConfigOptions,
            { name: "--json", description: "Print JSON" },
          ],
          args: { name: "query", description: "Search query" },
        },
        {
          name: "get",
          description:
            "Read a wiki page by id or relative path, with optional active-memory fallback",
          options: [
            {
              name: "--agent",
              description: "Agent id (default: configured default agent)",
              args: { name: "id" },
            },
            { name: "--from", description: "Start line", args: { name: "n" } },
            {
              name: "--lines",
              description: "Number of lines",
              args: { name: "n" },
            },
            ...wikiSearchConfigOptions,
            { name: "--json", description: "Print JSON" },
          ],
          args: { name: "lookup", description: "Relative path or page id" },
        },
        {
          name: "apply",
          description: "Apply narrow wiki mutations",
          subcommands: [
            {
              name: "synthesis",
              description:
                "Create or refresh a synthesis page with managed summary content",
              options: [
                {
                  name: "--agent",
                  description: "Agent id (default: configured default agent)",
                  args: { name: "id" },
                },
                {
                  name: "--body",
                  description: "Summary body text",
                  args: { name: "text" },
                },
                {
                  name: "--body-file",
                  description: "Read summary body text from a file",
                  args: { name: "path", template: "filepaths" },
                },
                ...wikiApplyMutationOptions,
                { name: "--json", description: "Print JSON" },
              ],
              args: { name: "title", description: "Synthesis title" },
            },
            {
              name: "metadata",
              description: "Update metadata on an existing page",
              options: [
                {
                  name: "--agent",
                  description: "Agent id (default: configured default agent)",
                  args: { name: "id" },
                },
                ...wikiApplyMutationOptions,
                {
                  name: "--clear-confidence",
                  description: "Remove any stored confidence value",
                },
                { name: "--json", description: "Print JSON" },
              ],
              args: { name: "lookup", description: "Relative path or page id" },
            },
          ],
        },
        {
          name: "bridge",
          description: "Import public memory artifacts into the wiki vault",
          subcommands: [
            {
              name: "import",
              description:
                "Sync bridge-backed memory artifacts into wiki source pages",
              options: [
                {
                  name: "--agent",
                  description: "Agent id (default: configured default agent)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Print JSON" },
              ],
            },
          ],
        },
        {
          name: "unsafe-local",
          description:
            "Import explicitly configured private local paths into wiki source pages",
          subcommands: [
            {
              name: "import",
              description:
                "Sync unsafe-local configured paths into wiki source pages",
              options: [{ name: "--json", description: "Print JSON" }],
            },
          ],
        },
        {
          name: "chatgpt",
          description: "Import ChatGPT export history into wiki source pages",
          subcommands: [
            {
              name: "import",
              description:
                "Import a ChatGPT export into draft wiki source pages",
              options: [
                {
                  name: "--export",
                  description:
                    "ChatGPT export directory or conversations.json path",
                  args: { name: "path", template: "folders" },
                  isRequired: true,
                },
                {
                  name: "--agent",
                  description: "Agent id (default: configured default agent)",
                  args: { name: "id" },
                },
                {
                  name: "--dry-run",
                  description: "Preview changes without writing",
                },
                { name: "--json", description: "Print JSON" },
              ],
            },
            {
              name: "rollback",
              description: "Roll back a previously applied ChatGPT import run",
              options: [
                {
                  name: "--agent",
                  description: "Agent id (default: configured default agent)",
                  args: { name: "id" },
                },
                { name: "--json", description: "Print JSON" },
              ],
              args: { name: "run-id", description: "Import run id" },
            },
          ],
        },
        {
          name: "obsidian",
          description: "Run official Obsidian CLI helpers",
          subcommands: [
            {
              name: "status",
              description: "Check the Obsidian CLI",
              options: [{ name: "--json", description: "Print JSON" }],
            },
            {
              name: "search",
              description: "Search the current Obsidian vault",
              options: [{ name: "--json", description: "Print JSON" }],
              args: { name: "query", description: "Search query" },
            },
            {
              name: "open",
              description: "Open a file in Obsidian by vault-relative path",
              options: [{ name: "--json", description: "Print JSON" }],
              args: {
                name: "path",
                description: "Vault-relative path",
                template: "filepaths",
              },
            },
            {
              name: "command",
              description: "Execute an Obsidian command palette command by id",
              options: [{ name: "--json", description: "Print JSON" }],
              args: { name: "id", description: "Obsidian command id" },
            },
            {
              name: "daily",
              description: "Open today's daily note in Obsidian",
              options: [{ name: "--json", description: "Print JSON" }],
            },
          ],
        },
      ],
      options: [
        {
          name: "--agent",
          description: "Agent id for agent-scoped wiki vaults",
          args: { name: "id" },
        },
      ],
    },
    {
      name: "path",
      description:
        "Inspect and edit workspace files via the oc:// addressing scheme",
      subcommands: [
        {
          name: "resolve",
          description: "Print the match at an oc:// path",
          options: pathResolveOptions,
          args: { name: "oc-path", description: "Oc:// path to resolve" },
        },
        {
          name: "find",
          description:
            "Enumerate matches for a wildcard / predicate oc:// pattern",
          options: pathResolveOptions,
          args: { name: "pattern", description: "Oc:// pattern" },
        },
        {
          name: "set",
          description: "Write a leaf value at an oc:// path",
          options: [
            {
              name: "--value-json",
              description:
                "Parse <value> as JSON for JSON/JSONC/JSONL leaf replacement",
            },
            { name: "--dry-run", description: "Print bytes without writing" },
            {
              name: "--diff",
              description:
                "With --dry-run, print a unified diff instead of full bytes",
            },
            ...pathResolveOptions,
          ],
          args: [
            { name: "oc-path", description: "Oc:// path to write" },
            { name: "value", description: "String value to write" },
          ],
        },
        {
          name: "validate",
          description: "Parse an oc:// path and print its slot structure",
          options: [
            { name: "--json", description: "Force JSON output" },
            { name: "--human", description: "Force human output" },
          ],
          args: { name: "oc-path", description: "Oc:// path to validate" },
        },
        {
          name: "emit",
          description: "Round-trip a file through parse + emit",
          options: pathResolveOptions,
          args: {
            name: "file",
            description: "Path to a workspace file",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "policy",
      description: "Verify workspace policy conformance",
      subcommands: [
        {
          name: "compare",
          description:
            "Compare policy.jsonc against an authored baseline policy file",
          options: [
            {
              name: "--baseline",
              description: "Baseline policy file to compare against",
              args: { name: "path", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--policy",
              description:
                "Policy file to check; defaults to configured policy path",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--agent",
              description: "Agent id for relative policy workspace paths",
              args: { name: "id" },
            },
            { name: "--json", description: "Emit JSON output" },
          ],
        },
        {
          name: "check",
          description:
            "Check policy requirements and emit an audit attestation",
          options: [
            {
              name: "--agent",
              description:
                "Agent id (required when multiple agents are configured)",
              args: { name: "id" },
            },
            { name: "--json", description: "Emit JSON output" },
            {
              name: "--severity-min",
              description: "Minimum severity: info, warning, or error",
              args: { name: "severity" },
            },
          ],
        },
        {
          name: "watch",
          description:
            "Watch policy evidence and report accepted-attestation drift",
          options: [
            {
              name: "--agent",
              description:
                "Agent id (required when multiple agents are configured)",
              args: { name: "id" },
            },
            { name: "--json", description: "Emit JSON output" },
            {
              name: "--severity-min",
              description: "Minimum severity: info, warning, or error",
              args: { name: "severity" },
            },
            {
              name: "--interval-ms",
              description: "Polling interval in milliseconds",
              args: { name: "ms" },
            },
            {
              name: "--once",
              description: "Run one watch evaluation and exit",
            },
          ],
        },
      ],
    },
    {
      name: "reef",
      description:
        "Register on a Reef relay and manage guarded claw-to-claw friendships",
      subcommands: [
        {
          name: "register",
          description:
            "Claim a handle and configure the Reef channel without the wizard",
          options: [
            {
              name: "--email",
              description: "Owner email registered with the relay",
              args: { name: "email" },
              isRequired: true,
            },
            {
              name: "--handle",
              description: "Unlisted handle for this claw",
              args: { name: "handle" },
            },
            {
              name: "--session",
              description: "Setup session from the relay welcome page",
              args: { name: "session" },
            },
            {
              name: "--token",
              description: "Magic-link token to exchange for a session",
              args: { name: "token" },
            },
            {
              name: "--relay",
              description: "Relay origin URL",
              args: { name: "url" },
            },
            {
              name: "--policy",
              description: "Inbound friend-request policy",
              args: { name: "policy" },
            },
            {
              name: "--state-dir",
              description: "Legacy Reef file directory for Doctor import",
              args: { name: "dir", template: "folders" },
            },
            {
              name: "--guard-provider",
              description: "Guard provider (anthropic|openai)",
              args: { name: "provider", suggestions: ["anthropic", "openai"] },
            },
            {
              name: "--guard-model",
              description:
                "Immutable guard model id (default depends on provider)",
              args: { name: "model" },
            },
            {
              name: "--guard-env",
              description:
                "Env var holding the guard API key (default depends on provider)",
              args: { name: "name" },
            },
            {
              name: "--guard-policy",
              description: "Guard policy version",
              args: { name: "version" },
            },
            { name: "--json", description: "Emit JSON" },
          ],
        },
        {
          name: "status",
          description: "Show Reef configuration and relay-side friendships",
          options: [{ name: "--json", description: "Emit JSON" }],
        },
        {
          name: "friend",
          description: "Manage Reef friendships",
          subcommands: [
            {
              name: "code",
              description:
                "Mint a short-lived code a friend can use to request pairing",
              options: [{ name: "--json", description: "Emit JSON" }],
            },
            {
              name: "autonomy",
              description: "Set a trusted friend's autonomy tier",
              options: [{ name: "--json", description: "Emit JSON" }],
              args: [
                { name: "handle" },
                {
                  name: "tier",
                  suggestions: ["notify-only", "bounded", "extended"],
                },
              ],
            },
            {
              name: "request",
              description:
                "Request a friendship (adopted automatically once accepted)",
              options: [
                {
                  name: "--code",
                  description: "Friend code minted by the recipient",
                  args: { name: "code" },
                },
                { name: "--json", description: "Emit JSON" },
              ],
              args: { name: "handle" },
            },
            {
              name: "list",
              description: "List relay-side friendships with local autonomy",
              options: [{ name: "--json", description: "Emit JSON" }],
            },
            {
              name: "remove",
              description: "Remove or block a friendship",
              options: [{ name: "--json", description: "Emit JSON" }],
              args: { name: "handle" },
            },
          ],
        },
      ],
    },
    {
      name: "file-transfer",
      description: "Review file-transfer standing approvals",
      subcommands: [
        {
          name: "approvals",
          description: "Manage standing approvals",
          subcommands: [
            {
              name: "migrate",
              description: "Review and migrate older file-transfer permissions",
              options: [
                {
                  name: "--dry-run",
                  description: "Review choices without changing config",
                },
                {
                  name: "--json",
                  description: "Report unresolved legacy permissions as JSON",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "workboard",
      description: "Manage Workboard cards and worker dispatch",
      subcommands: [
        {
          name: "list",
          description: "List Workboard cards",
          options: [
            { name: "--board", description: "Board id", args: { name: "id" } },
            {
              name: "--status",
              description: "Filter by status",
              args: { name: "status" },
            },
            {
              name: "--include-archived",
              description: "Include archived cards (default false)",
            },
            { name: "--json", description: "Print JSON" },
          ],
        },
        {
          name: "create",
          description: "Create a Workboard card",
          options: [
            {
              name: "--notes",
              description: "Card notes",
              args: { name: "text" },
            },
            {
              name: "--status",
              description: "Initial status",
              args: { name: "status" },
            },
            {
              name: "--priority",
              description: "Priority",
              args: { name: "priority" },
            },
            {
              name: "--agent",
              description: "Assigned agent id",
              args: { name: "id" },
            },
            { name: "--board", description: "Board id", args: { name: "id" } },
            {
              name: "--labels",
              description: "Comma-separated labels",
              args: { name: "items" },
            },
            { name: "--json", description: "Print JSON" },
          ],
          args: { name: "title", description: "Card title", isVariadic: true },
        },
        {
          name: "show",
          description: "Show one Workboard card",
          options: [{ name: "--json", description: "Print JSON" }],
          args: { name: "id", description: "Card id or prefix" },
        },
        {
          name: "move",
          description: "Move a Workboard card to another status",
          options: [
            {
              name: "--status",
              description: "Target status",
              args: { name: "status" },
              isRequired: true,
            },
            { name: "--json", description: "Print JSON" },
          ],
          args: { name: "id", description: "Card id or prefix" },
        },
        {
          name: "dispatch",
          description:
            "Promote ready cards and start worker runs through the Gateway",
          options: [
            {
              name: "--board",
              description: "Dispatch a single board",
              args: { name: "id" },
            },
            {
              name: "--max-starts",
              description:
                "Maximum new worker runs to start in this pass (default 3)",
              args: { name: "count" },
            },
            {
              name: "--admin",
              description: "Request full-host workspace access",
            },
            { name: "--json", description: "Print JSON" },
            ...gatewayClientOptions,
          ],
        },
      ],
    },
    {
      name: "mcp-relay",
      description: "Inspect the MCP relay connection and manage client grants",
      subcommands: [
        {
          name: "status",
          description:
            "Show the running Gateway's relay connection and grant count",
        },
        {
          name: "pair",
          description:
            "Issue a single-use pairing code for a remote MCP client",
        },
        {
          name: "grants",
          description: "List the running Gateway's MCP client grants",
        },
        {
          name: "revoke",
          description: "Revoke a client grant locally and notify the relay",
          args: { name: "grantId" },
        },
      ],
    },
    {
      name: "onepassword",
      description: "Inspect the 1Password broker",
      subcommands: [
        {
          name: "status",
          description: "Show broker readiness without secret values",
        },
        {
          name: "audit",
          description: "Show recent 1Password access audit rows",
          options: [
            {
              name: "--limit",
              description: "Maximum rows to print",
              args: { name: "number" },
            },
          ],
        },
        {
          name: "secretref",
          description: "Manage 1Password SecretRefs",
          subcommands: [
            {
              name: "status",
              description: "Show 1Password SecretRef provider status",
              options: [
                { name: "--json", description: "Print JSON status" },
                {
                  name: "--provider-alias",
                  description: "Secret provider alias to inspect",
                  args: { name: "alias" },
                },
              ],
            },
            {
              name: "setup",
              description: "Create a 1Password SecretRef setup plan",
              options: [
                {
                  name: "--plan-out",
                  description:
                    "Write the generated secrets apply plan to a path",
                  args: { name: "path", template: "filepaths" },
                },
                {
                  name: "--provider-alias",
                  description: "Secret provider alias to configure",
                  args: { name: "alias" },
                },
                {
                  name: "--openai-id",
                  description:
                    "1Password SecretRef id for models.providers.openai.apiKey",
                  args: { name: "id" },
                },
                {
                  name: "--anthropic-id",
                  description:
                    "1Password SecretRef id for models.providers.anthropic.apiKey",
                  args: { name: "id" },
                },
                {
                  name: "--openrouter-id",
                  description:
                    "1Password SecretRef id for models.providers.openrouter.apiKey",
                  args: { name: "id" },
                },
                {
                  name: "--provider-key",
                  description:
                    "1Password SecretRef id for any models.providers.<provider>.apiKey target",
                  args: { name: "provider=id" },
                  isRepeatable: true,
                },
                {
                  name: "--target",
                  description:
                    "1Password SecretRef id for any known SecretRef target path",
                  args: { name: "path=id" },
                  isRepeatable: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "vault",
      description: "Manage Vault SecretRefs",
      subcommands: [
        {
          name: "status",
          description: "Show Vault SecretRef provider status",
          options: [
            { name: "--json", description: "Print JSON status" },
            {
              name: "--provider-alias",
              description: "Secret provider alias to inspect",
              args: { name: "alias" },
            },
          ],
        },
        {
          name: "setup",
          description: "Create a Vault SecretRef setup plan",
          options: [
            {
              name: "--plan-out",
              description: "Write the generated secrets apply plan to a path",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--provider-alias",
              description: "Secret provider alias to configure",
              args: { name: "alias" },
            },
            {
              name: "--openai-id",
              description: "Vault secret id for models.providers.openai.apiKey",
              args: { name: "id" },
            },
            {
              name: "--anthropic-id",
              description:
                "Vault secret id for models.providers.anthropic.apiKey",
              args: { name: "id" },
            },
            {
              name: "--openrouter-id",
              description:
                "Vault secret id for models.providers.openrouter.apiKey",
              args: { name: "id" },
            },
            {
              name: "--provider-key",
              description:
                "Vault secret id for any models.providers.<provider>.apiKey target",
              args: { name: "provider=id" },
              isRepeatable: true,
            },
            {
              name: "--target",
              description:
                "Vault secret id for any known SecretRef target path",
              args: { name: "path=id" },
              isRepeatable: true,
            },
          ],
        },
      ],
    },
    {
      name: "help",
      description: "Display help for command",
      args: { name: "command", isOptional: true },
    },
  ],
  options: globalOptions,
};

export default completionSpec;
