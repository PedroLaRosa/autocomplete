// CodeBurn v0.9.27 (npm "latest", 2026-11-07). Source: `--help` on every
// subcommand, provider ids from `codeburn doctor --json`, plan ids from
// https://github.com/getagentseal/codeburn/blob/main/docs/plans-and-quota.md

const periods = ["today", "week", "30days", "month", "all", "lifetime"];

// ponytail: static list (43 providers in v0.9.27); `codeburn doctor --json`
// probes the disk and is too slow for a generator.
const providers: Fig.Suggestion[] = [
  { name: "all", description: "Every provider" },
  ...[
    ["amp", "Amp"],
    ["antigravity", "Antigravity"],
    ["claude", "Claude"],
    ["cline", "Cline"],
    ["cline-cli", "Cline CLI"],
    ["codewhale", "CodeWhale"],
    ["codebuff", "Codebuff"],
    ["codex", "Codex"],
    ["command-code", "Command Code"],
    ["copilot", "Copilot"],
    ["crush", "Crush"],
    ["cursor", "Cursor"],
    ["cursor-agent", "Cursor Agent"],
    ["dsh", "DeepSeek Harness"],
    ["devin", "Devin"],
    ["droid", "Droid"],
    ["forge", "Forge"],
    ["gemini", "Gemini"],
    ["goose", "Goose"],
    ["grokbot", "Grok Bot"],
    ["grok", "Grok Build"],
    ["hermes", "Hermes Agent"],
    ["ibm-bob", "IBM Bob"],
    ["kilo-code", "KiloCode"],
    ["kimi", "Kimi"],
    ["kimicode", "Kimi Code"],
    ["kiro", "Kiro"],
    ["lingtai-tui", "LingTai TUI"],
    ["mistral-vibe", "Mistral Vibe"],
    ["mux", "Mux"],
    ["omp", "OMP"],
    ["open-design", "Open Design"],
    ["openclaude", "OpenClaude"],
    ["openclaw", "OpenClaw"],
    ["opencode", "OpenCode"],
    ["pi", "Pi"],
    ["quickdesk", "Quick Desktop"],
    ["qwen", "Qwen"],
    ["vercel-gateway", "Vercel AI Gateway"],
    ["warp", "Warp"],
    ["zcode", "ZCode"],
    ["zed", "Zed"],
    ["zerostack", "Zerostack"],
  ].map(([name, description]) => ({ name, description })),
];

const period = (dflt: string, description = "Period"): Fig.Option => ({
  name: ["-p", "--period"],
  description: `${description} (default: ${dflt})`,
  args: { name: "period", suggestions: periods },
});

const date = (name: string, description: string): Fig.Option => ({
  name,
  description,
  args: { name: "date", description: "YYYY-MM-DD" },
});

const fromTo: Fig.Option[] = [
  date("--from", "Start date"),
  date("--to", "End date"),
];

const provider: Fig.Option = {
  name: "--provider",
  description: "Filter by provider (default: all)",
  args: { name: "provider", suggestions: providers },
};

const projectFilters: Fig.Option[] = [
  {
    name: "--project",
    description: "Show only projects matching name",
    isRepeatable: true,
    args: { name: "name" },
  },
  {
    name: "--exclude",
    description: "Exclude projects matching name",
    isRepeatable: true,
    args: { name: "name" },
  },
];

const format = (choices: string[], name = "--format"): Fig.Option => ({
  name,
  description: `Output format (default: ${choices[0]})`,
  args: { name: "format", suggestions: choices },
});

const json: Fig.Option = { name: "--json", description: "Output as JSON" };
const noColor: Fig.Option = {
  name: "--no-color",
  description: "Disable ANSI colors",
};

const billingFilters: Fig.Option[] = [
  {
    name: "--route",
    description: "Filter by billing route (direct includes unknown)",
    args: {
      name: "route",
      suggestions: ["direct", "bedrock", "openrouter", "vertex"],
    },
  },
  {
    name: "--billing",
    description: "Filter by billing mode",
    args: { name: "mode", suggestions: ["metered", "subscription"] },
  },
];

const refresh: Fig.Option = {
  name: "--refresh",
  description: "Auto-refresh interval in seconds (minimum 60; 0 to disable)",
  args: { name: "seconds", default: "60" },
};

const dashboard = (name: string, description: string): Fig.Subcommand => ({
  name,
  description,
  options: [provider, format(["tui", "json"]), ...projectFilters, refresh],
});

// Analysis commands share period/range/provider/project filters.
const analysis = (dflt: string): Fig.Option[] => [
  period(dflt, "Analysis period"),
  ...fromTo,
  provider,
];

const listRemove = (arg: string, what: string): Fig.Option[] => [
  {
    name: "--remove",
    description: `Remove ${what}`,
    args: { name: arg },
  },
  { name: "--list", description: `List configured ${what}s` },
];

const pluginDir: Fig.Option = {
  name: "--dir",
  description:
    "Override the plugins directory (default: ~/.config/codeburn/plugins)",
  args: { name: "path", template: "folders" },
};

const scopeOptions: Fig.Option[] = [
  {
    name: "--global",
    description: "Use ~/.claude/settings.json instead of the project",
  },
  {
    name: "--project",
    description: "Use <path>/.claude/settings.json",
    args: { name: "path", template: "folders" },
  },
];

const completionSpec: Fig.Spec = {
  name: "codeburn",
  description:
    "See where your AI coding tokens go - by task, tool, model, and project",
  subcommands: [
    {
      name: "report",
      description: "Interactive usage dashboard",
      options: [
        period("week", "Starting period"),
        date("--day", "Single day to review (YYYY-MM-DD, today, or yesterday)"),
        ...fromTo,
        provider,
        format(["tui", "json"]),
        ...projectFilters,
        refresh,
      ],
    },
    {
      name: "share",
      description: "Securely share this device's usage with your other devices",
      args: { name: "action", isOptional: true, suggestions: ["status"] },
      options: [
        {
          name: "--port",
          description: "Port to listen on (default: 7777)",
          args: { name: "number" },
        },
        {
          name: "--pair",
          description: "Open a pairing window and print a PIN to add a device",
        },
        {
          name: "--always",
          description:
            "Keep sharing until stopped (default: stop after 10 min idle)",
        },
        format(["text", "json"]),
      ],
    },
    {
      name: "devices",
      description: "Combined usage across your devices",
      args: [
        {
          name: "action",
          isOptional: true,
          suggestions: [
            { name: "scan", description: "Find nearby devices" },
            {
              name: "add",
              description: "Pair a nearby device, or <host> --pin",
            },
            { name: "rm", description: "Remove a device by name" },
          ],
        },
        {
          name: "target",
          isOptional: true,
          description: "Host or device name",
        },
      ],
      options: [
        {
          name: "--pin",
          description: "Pairing PIN shown on the device you are adding",
          args: { name: "pin" },
        },
        period("month"),
        {
          name: "--port",
          description: "Default port when adding a device (default: 7777)",
          args: { name: "number" },
        },
        format(["text", "json"]),
      ],
    },
    {
      name: "identity",
      description: "Show this device identity for sharing",
      options: [format(["text", "json"])],
    },
    {
      name: "overview",
      description: "Plain-text usage overview, copy-pasteable",
      options: [
        period("month"),
        ...fromTo,
        provider,
        ...projectFilters,
        noColor,
      ],
    },
    {
      name: "budget",
      description: "Set spend budgets and check current spend against them",
      options: [
        ...["daily", "weekly", "monthly"].map((p) => ({
          name: `--${p}`,
          description: `Set ${p} spend budget in the active display currency`,
          args: { name: "amount" },
        })),
        { name: "--list", description: "List configured spend budgets" },
        {
          name: "--remove",
          description: "Remove one budget",
          args: { name: "period", suggestions: ["daily", "weekly", "monthly"] },
        },
        {
          name: "--check",
          description: "Check current spend and exit 1 if any budget is over",
        },
      ],
    },
    {
      name: "web",
      description: "Open the local web dashboard in your browser",
      options: [
        period("today", "Initial period"),
        ...fromTo,
        provider,
        ...projectFilters,
        {
          name: "--port",
          description: "Port to listen on (default: 4747, falls back if taken)",
          args: { name: "number" },
        },
        { name: "--no-open", description: "Do not open the browser" },
      ],
    },
    {
      name: "status",
      description: "Compact status output (today + month)",
      options: [
        format(["terminal", "menubar-json", "json"]),
        {
          name: "--scope",
          description: "Usage scope for menubar-json (default: local)",
          args: { name: "scope", suggestions: ["local", "combined"] },
        },
        {
          name: "--combined-details",
          description: "Include per-device payloads in combined menubar-json",
        },
        provider,
        ...projectFilters,
        {
          name: "--period",
          description: "Primary period for menubar-json (default: today)",
          args: { name: "period", suggestions: periods },
        },
        date(
          "--day",
          "Single day for menubar-json (YYYY-MM-DD, today, yesterday)"
        ),
        ...fromTo,
        {
          name: "--days",
          description:
            "Comma-separated dates (YYYY-MM-DD) for multi-day selection",
          args: { name: "dates" },
        },
        {
          name: "--no-optimize",
          description: "Skip optimize findings (faster)",
        },
        {
          name: "--no-timeline",
          description: "Skip the granular timeline (faster)",
        },
      ],
    },
    dashboard("today", "Today's usage dashboard"),
    dashboard("month", "This month's usage dashboard"),
    {
      name: "export",
      description: "Export usage data to CSV or JSON",
      options: [
        { ...format(["csv", "json"]), name: ["-f", "--format"] },
        {
          name: ["-o", "--output"],
          description: "Output file path",
          args: { name: "path", template: "filepaths" },
        },
        ...fromTo,
        provider,
        ...billingFilters,
        ...projectFilters,
      ],
    },
    {
      name: "menubar",
      description: "Install and launch the menubar app on macOS and Windows",
      options: [
        { name: "--force", description: "Reinstall even if already installed" },
        {
          name: "--staged-msi",
          description: "Windows: install the staged CodeBurn.Menubar .msi",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--uninstall",
          description: "Windows: remove CodeBurn Menubar",
        },
      ],
    },
    {
      name: "update",
      description: "Update the global CLI, the menubar app and the desktop app",
      options: [
        {
          name: "--check",
          description: "Report what is out of date; change nothing",
        },
        { name: "--cli", description: "The global codeburn command" },
        { name: "--menubar", description: "The macOS menubar app" },
        {
          name: "--desktop",
          description: "The desktop app, via its own updater",
        },
        { name: "--all", description: "Every component (the default)" },
        { name: "--local", description: "With --check: no network" },
        { name: "--json", description: "One JSON object per line on stdout" },
      ],
    },
    {
      name: "currency",
      description: "Set display currency",
      args: {
        name: "code",
        isOptional: true,
        suggestions: ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "INR", "CNY"],
      },
      options: [
        {
          name: "--symbol",
          description: "Override the currency symbol",
          args: { name: "symbol" },
        },
        { name: "--reset", description: "Reset to USD" },
      ],
    },
    {
      name: "import",
      description: "Replace local estimates with usage a tool exported itself",
      args: [
        { name: "tool", suggestions: ["cursor"] },
        { name: "file", isOptional: true, template: "filepaths" },
      ],
      options: [
        date(
          "--from",
          "Start of the exported range (date, ISO time or epoch ms)"
        ),
        date("--to", "End of the exported range (date, ISO time or epoch ms)"),
        { name: "--remove", description: "Delete the imported usage" },
        {
          name: "--sync",
          description:
            "Download the export from cursor.com with the app's login",
        },
      ],
    },
    {
      name: "model-alias",
      description: "Map a provider model name to a canonical one for pricing",
      args: [
        { name: "from", isOptional: true },
        { name: "to", isOptional: true },
      ],
      options: [...listRemove("from", "alias"), format(["text", "json"])],
    },
    {
      name: "price-override",
      description: "Override or add local model pricing (USD per 1M tokens)",
      args: { name: "model", isOptional: true },
      options: [
        ...["input", "output", "cache-read", "cache-creation"].map((kind) => ({
          name: `--${kind}`,
          description: `Price for ${kind} tokens, in USD per 1,000,000 tokens`,
          args: { name: "usd-per-1M" },
        })),
        ...listRemove("model", "price override"),
        format(["text", "json"]),
      ],
    },
    {
      name: "model-savings",
      description: "Track a local model as savings against a paid baseline",
      args: [
        { name: "local", isOptional: true },
        { name: "baseline", isOptional: true },
      ],
      options: listRemove("local", "savings mapping"),
    },
    {
      name: "model-flat-rate",
      description: "Mark a model as subscription / flat-rate billed",
      args: { name: "model", isOptional: true },
      options: listRemove("model", "flat-rate model"),
    },
    {
      name: "proxy-path",
      description:
        "Mark a project directory as routed through a subscription proxy",
      args: { name: "path", isOptional: true, template: "folders" },
      options: [...listRemove("path", "proxy path"), format(["text", "json"])],
    },
    {
      name: "project",
      description:
        "Put a folder (and everything under it) in a repository project",
      args: [
        {
          name: "action",
          isOptional: true,
          suggestions: [
            {
              name: "link",
              description: "Link a folder: link <folder> <project>",
            },
            { name: "unlink", description: "Unlink a folder: unlink <folder>" },
            { name: "links", description: "List folder links" },
          ],
        },
        { name: "folder", isOptional: true, template: "folders" },
        { name: "project", isOptional: true },
      ],
      options: [format(["text", "json"])],
    },
    {
      name: "gateway-totals",
      description:
        "Include or exclude Vercel AI Gateway spend in headline totals",
      args: {
        name: "mode",
        isOptional: true,
        suggestions: ["include", "exclude"],
      },
      options: [format(["text", "json"])],
    },
    {
      name: "plan",
      description: "Show or configure a subscription plan for overage tracking",
      args: [
        {
          name: "action",
          isOptional: true,
          suggestions: [
            { name: "set", description: "Set the plan you pay for" },
            {
              name: "reset",
              description: "Remove plan config (or one --provider)",
            },
          ],
        },
        {
          name: "id",
          isOptional: true,
          suggestions: [
            "claude-max",
            "claude-pro",
            "cursor-pro",
            "copilot-pro",
            "google-ai-pro",
            "custom",
            "none",
          ],
        },
      ],
      options: [
        format(["text", "json"]),
        {
          name: "--monthly-usd",
          description: "Monthly plan price in USD (for custom)",
          args: { name: "n" },
        },
        {
          name: "--credits",
          description: "Monthly AI credits (copilot custom plans)",
          args: { name: "n" },
        },
        {
          name: "--provider",
          description: "Provider scope",
          args: {
            name: "name",
            suggestions: [
              "all",
              "claude",
              "codex",
              "cursor",
              "grok",
              "copilot",
              "antigravity",
            ],
          },
        },
        {
          name: "--reset-day",
          description: "Day of month plan resets, 1-28 (default: 1)",
          args: { name: "n" },
        },
      ],
    },
    {
      name: "optimize",
      description: "Find token waste and get exact fixes",
      options: [
        ...analysis("30days"),
        format(["text", "json"]),
        { name: "--json", description: "Alias for --format json" },
        {
          name: "--apply",
          description: "Interactively apply config-class fixes (undoable)",
        },
        {
          name: "--yes",
          description: "With --apply: apply every fix without prompting",
        },
        {
          name: "--dry-run",
          description: "With --apply: print the plan and exit",
        },
        {
          name: "--only",
          description: "With --apply: comma-separated finding ids",
          args: { name: "ids" },
        },
        {
          name: "--auto-revert",
          description: "Undo applied fixes that measured no reduction",
        },
        ...projectFilters,
      ],
    },
    {
      name: "context",
      description: "Context token breakdown per session (experimental)",
      args: { name: "session", isOptional: true },
      options: [
        { name: "--list", description: "List recent sessions to pick from" },
        {
          name: "--full",
          description:
            "Cover the whole history, not the post-compaction window",
        },
        json,
        {
          name: "--provider",
          description: "Session source (default: claude)",
          args: { name: "provider", suggestions: ["claude", "codex"] },
        },
      ],
    },
    {
      name: "codex-tps",
      description: "Retrospective Codex generated-tokens/sec estimate",
      args: { name: "session", isOptional: true },
      options: [
        json,
        {
          name: "--limit",
          description: "Number of recent checkpoints to scan (default: 10)",
          args: { name: "n" },
        },
        {
          name: "--watch",
          description: "Refresh continuously while Codex writes checkpoints",
          args: { name: "seconds" },
        },
      ],
    },
    {
      name: "compare",
      description: "Compare two AI models side-by-side",
      options: [
        ...analysis("all"),
        format(["tui", "json", "cohort-json"]),
        {
          name: "--model-a",
          description: "First model",
          args: { name: "model" },
        },
        {
          name: "--model-b",
          description: "Second model",
          args: { name: "model" },
        },
        ...projectFilters,
        {
          name: "--category",
          description: "With cohort-json: one activity category",
          args: { name: "category" },
        },
        {
          name: "--project-id",
          description: "With cohort-json: exact canonical project identity",
          isRepeatable: true,
          args: { name: "id" },
        },
      ],
    },
    {
      name: "compare-periods",
      description: "Compare usage and cost between two periods (B minus A)",
      options: [
        date("--from-a", "Reference period A start"),
        date("--to-a", "Reference period A end"),
        date("--from-b", "Analyzed period B start"),
        date("--to-b", "Analyzed period B end"),
        provider,
        format(["json", "sessions"]),
        {
          name: "--dimension",
          description: "Drill-down dimension for --format sessions",
          args: { name: "dimension", suggestions: ["project", "model"] },
        },
        {
          name: "--key",
          description:
            "Contribution key for --format sessions (project path or model id)",
          args: { name: "key" },
        },
        ...projectFilters,
        {
          name: "--no-with-history",
          description: "Skip the durable daily-history cross-check",
        },
      ],
    },
    {
      name: "audit",
      description:
        "Token audit: raw provider fields vs displayed totals and cost",
      options: [
        ...analysis("30days"),
        ...billingFilters,
        format(["table", "json"]),
        ...projectFilters,
      ],
    },
    {
      name: "models",
      description: "Per-model token + cost table",
      options: [
        ...analysis("30days"),
        ...billingFilters,
        {
          name: "--task",
          description: "Filter to one task type",
          args: {
            name: "category",
            suggestions: ["feature", "debugging", "refactoring"],
          },
        },
        {
          name: "--by-task",
          description: "One row per (provider, model, task)",
        },
        {
          name: "--by-agent",
          description: "One row per (provider, model, agent)",
        },
        {
          name: "--top",
          description: "Show only the top N rows",
          args: { name: "n" },
        },
        {
          name: "--min-cost",
          description: "Hide rows below this cost threshold",
          args: { name: "usd" },
        },
        {
          name: "--unpriced",
          description: "Show only models that price at $0",
        },
        { name: "--no-totals", description: "Suppress the footer totals row" },
        format(["table", "markdown", "json", "csv"]),
        ...projectFilters,
      ],
    },
    {
      name: "sessions",
      description: "Full per-session usage report",
      options: [
        ...analysis("30days"),
        ...billingFilters,
        format(["table", "json"]),
        {
          name: "--by-pr",
          description: "Group spend by referenced pull requests",
        },
        {
          name: "--by-work-unit",
          description: "Group sessions into provider-recorded work units",
        },
        {
          name: "--contributions",
          description: "JSON only: attach per-session contribution segments",
        },
        {
          name: "--id",
          description: "With --why: the Claude Code session to explain",
          args: { name: "id" },
        },
        {
          name: "--why",
          description: "Explain why one session cost what it did (needs --id)",
          dependsOn: ["--id"],
        },
        {
          name: "--no-pager",
          description: "Print the table instead of the browser",
        },
        ...projectFilters,
      ],
    },
    {
      name: "yield",
      description: "Track which AI spend shipped vs reverted (experimental)",
      options: [
        period("week", "Analysis period"),
        provider,
        format(["text", "json"]),
        ...projectFilters,
      ],
    },
    {
      name: "spend",
      description: "Emit model x project spend flow data",
      options: [
        ...analysis("30days"),
        format(["flow-json", "branch-json"]),
        ...projectFilters,
      ],
    },
    {
      name: "antigravity-hook",
      description: "Install or remove exact Antigravity CLI usage capture",
      args: { name: "action", suggestions: ["install", "uninstall"] },
      options: [
        {
          name: "--force",
          description:
            "Replace an existing custom Antigravity statusLine command",
        },
      ],
    },
    {
      name: "mcp",
      description:
        "Run an MCP server (stdio) exposing usage + savings to agents",
    },
    {
      name: "doctor",
      description: "Per-provider detection status and parse health",
      options: [provider, json, noColor],
    },
    {
      name: "quota",
      description: "Live provider capacity for each signed-in coding tool",
      options: [
        format(["table", "json"]),
        {
          name: "--claude-profiles",
          description: "Read each Claude config directory's own quota",
        },
        noColor,
      ],
    },
    {
      name: "act",
      description: "Review and undo changes codeburn has applied",
      subcommands: [
        {
          name: "list",
          description: "List applied actions, newest first",
          options: [json],
        },
        {
          name: "undo",
          description: "Undo an action by id (8-char prefix), or --last",
          args: { name: "id", isOptional: true },
          options: [
            { name: "--last", description: "Undo the most recent action" },
            {
              name: "--force",
              description: "Undo even if target files changed",
            },
          ],
        },
        {
          name: "apply-model",
          description: "Apply the model default recommendation for a project",
          args: { name: "project" },
        },
        {
          name: "report",
          description:
            "Realized vs estimated savings for actions older than 3 days",
          options: [json],
        },
      ],
    },
    {
      name: "guard",
      description: "Opt-in, removable session-time hooks for Claude Code",
      subcommands: [
        {
          name: "install",
          description: "Install the guard hooks (default: this project)",
          options: [
            ...scopeOptions,
            {
              name: "--statusline",
              description: "Also configure the guard statusline",
            },
          ],
        },
        {
          name: "uninstall",
          description: "Remove the guard hooks, leaving user hooks untouched",
          options: scopeOptions,
        },
        {
          name: "status",
          description: "Show resolved guard config and install locations",
        },
        {
          name: "refresh",
          description: "Recompute the session-opener flag list",
        },
        {
          name: "allow",
          description:
            "Lift the hard budget cap for the current (or given) session",
          args: { name: "sessionId", isOptional: true },
        },
        {
          name: "hook",
          description: "Internal: Claude Code hook entry point",
          hidden: true,
          args: { name: "event" },
        },
        {
          name: "statusline",
          description: "Internal: Claude Code statusline command",
          hidden: true,
        },
      ],
    },
    {
      name: "sync",
      description: "Sync AI usage telemetry to a remote OTLP endpoint",
      subcommands: [
        {
          name: "setup",
          description: "Configure sync with a remote endpoint (one-time)",
          args: { name: "url" },
        },
        {
          name: "status",
          description: "Show sync configuration and auth status",
        },
        {
          name: "logout",
          description: "Remove stored credentials and revoke token",
        },
        {
          name: "reset",
          description: "Clear the sent-ledger",
          options: [
            { name: "--confirm", description: "Required to confirm reset" },
          ],
        },
        {
          name: "push",
          description: "Push unsent telemetry data to the configured endpoint",
          options: [
            {
              name: "--since",
              description: "Time window (default: 7d, max 6 months)",
              args: {
                name: "period",
                suggestions: ["today", "7d", "30d", "month", "all"],
              },
            },
            { name: "--dry-run", description: "Show what would be sent" },
            {
              name: "--attribution",
              description: "Also push git attribution spans",
            },
          ],
        },
        {
          name: "auto",
          description: "Manage automatic scheduled pushes",
          subcommands: [
            {
              name: "enable",
              description: "Enable automatic scheduled pushes",
              options: [
                {
                  name: "--cadence",
                  description: "Schedule frequency (default: daily)",
                  args: { name: "cadence", suggestions: ["daily", "hourly"] },
                },
                {
                  name: "--attribution",
                  description: "Also send work-matching data",
                },
                {
                  name: "--accept",
                  description: "Accept the disclosure and enable",
                },
              ],
            },
            {
              name: "disable",
              description: "Disable automatic pushes (kill switch)",
            },
            {
              name: "status",
              description: "Show automatic sync status and recent receipts",
              options: [json],
            },
            {
              name: "run",
              description: "Run automatic push (invoked by scheduler)",
            },
          ],
        },
      ],
    },
    {
      name: "plugin",
      description: "Inspect the plugin socket",
      subcommands: [
        {
          name: "list",
          description: "List every plugin the loader found, with status",
          options: [pluginDir, json],
        },
        {
          name: "info",
          description: "Print the full manifest of a loaded plugin",
          args: { name: "name" },
          options: [pluginDir, json],
        },
        {
          name: "verify",
          description: "Re-run the verification hook for a plugin",
          args: { name: "name" },
          options: [pluginDir],
        },
        {
          name: "add",
          description: "Install a plugin from a local path or the org receiver",
          args: { name: "source", template: "folders" },
          options: [pluginDir],
        },
        {
          name: "remove",
          description: "Remove an installed plugin",
          args: { name: "name" },
          options: [
            pluginDir,
            { name: "--confirm", description: "Confirm removal" },
          ],
        },
      ],
    },
    {
      name: "serve",
      description: "Run a resident query server over stdio (desktop app)",
      options: [
        { name: "--stdio", description: "Serve JSON over stdin/stdout" },
      ],
    },
  ],
  options: [
    {
      name: ["-V", "--version"],
      description: "Output the version number",
    },
    {
      name: ["-h", "--help"],
      description: "Display help for command",
      isPersistent: true,
    },
    {
      name: "--verbose",
      description:
        "Print warnings to stderr on read failures and skipped files",
      isPersistent: true,
    },
    {
      name: "--timezone",
      description: "IANA timezone for date grouping",
      isPersistent: true,
      args: {
        name: "zone",
        suggestions: ["UTC", "America/New_York", "Europe/London", "Asia/Tokyo"],
      },
    },
    {
      name: "--exact-project",
      description: "A --project/--exclude path matches that folder only",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
