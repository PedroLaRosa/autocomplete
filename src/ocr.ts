// OpenCodeReview v1.14.4 (GitHub release v1.14.4 / npm @alibaba-group/open-code-review, 2026-11-26).
// Source: `ocr help <cmd>` on every subcommand, provider ids from `ocr llm providers`

// ponytail: static list (30 built-ins in v1.14.4); `ocr llm providers` has no
// --json output to parse. Custom providers from config are not listed.
const providers: Fig.Suggestion[] = [
  "anthropic",
  "baidu-qianfan",
  "bedrock",
  "chatgpt",
  "dashscope",
  "dashscope-tokenplan",
  "deepseek",
  "edenai",
  "gemini",
  "hy-tokenplan",
  "iflytek",
  "kimi",
  "kimi-global",
  "litellm",
  "mimo",
  "minimax",
  "minimax-cn",
  "mistral",
  "novita",
  "ollama-cloud",
  "openai",
  "openai-responses",
  "openrouter",
  "siliconflow",
  "siliconflow-cn",
  "tencent-tokenhub",
  "volcengine",
  "xai",
  "z-ai",
  "z-ai-coding",
].map((name) => ({ name, icon: "fig://icon?type=box" }));

// ponytail: lists sessions of the repo in the cwd only (default --limit 20)
const sessions: Fig.Generator = {
  script: ["ocr", "session", "list", "--json"],
  postProcess: (output) => {
    try {
      return JSON.parse(output).map((s) => ({
        name: s.session_id,
        description: [s.review_mode, s.git_branch, s.start_time]
          .filter(Boolean)
          .join(" · "),
      }));
    } catch (error) {
      return [];
    }
  },
};

const sessionArg = (name = "session-id"): Fig.Arg => ({
  name,
  generators: sessions,
});

const repo = (
  description = "Root directory of the git repository (default: current dir)"
): Fig.Option => ({
  name: "--repo",
  description,
  args: { name: "dir", template: "folders" },
});

const json = (description: string): Fig.Option => ({
  name: "--json",
  description,
});

const output: Fig.Option = {
  name: ["-o", "--output"],
  description:
    "Write results to a UTF-8 file (default: stdout; '-' also means stdout)",
  args: { name: "file", template: "filepaths" },
};

const format = (formats: string[], description: string): Fig.Option => ({
  name: ["-f", "--format"],
  description,
  args: { name: "format", suggestions: formats, default: "text" },
});

const diffOptions: Fig.Option[] = [
  {
    name: ["-c", "--commit"],
    description: "Single commit hash or tag to review (vs its parent)",
    args: { name: "commit" },
    exclusiveOn: ["--from", "--to"],
  },
  {
    name: "--from",
    description: "Source ref to start diff from (e.g. 'main')",
    args: { name: "ref" },
    exclusiveOn: ["-c", "--commit"],
  },
  {
    name: "--to",
    description:
      "Target ref to end diff at (defaults to HEAD when --from is given)",
    args: { name: "ref" },
    exclusiveOn: ["-c", "--commit"],
  },
];

const background = (what = "review"): Fig.Option => ({
  name: ["-b", "--background"],
  description: `Optional requirement/business context for the ${what}`,
  args: { name: "text" },
});

const backgroundFile: Fig.Option = {
  name: ["-B", "--background-file"],
  description:
    "Path to a background file (takes precedence over --background; relative to the repository root)",
  args: { name: "file", template: "filepaths" },
};

const sharedRunOptions: Fig.Option[] = [
  {
    name: "--exclude",
    description:
      "Comma-separated gitignore-style patterns to exclude; merged with rule.json excludes",
    args: { name: "patterns" },
  },
  {
    name: "--max-git-procs",
    description: "Max concurrent git subprocesses (default 16)",
    args: { name: "int" },
  },
  repo(),
  {
    name: "--rule",
    description: "Path to JSON file with system review rules",
    args: { name: "file", template: "filepaths" },
  },
];

const llmRunOptions = (what: "review" | "scan"): Fig.Option[] => [
  {
    name: "--audience",
    description:
      "Output audience: human (show progress) or agent (summary only)",
    args: {
      name: "audience",
      suggestions: ["human", "agent"],
      default: "human",
    },
  },
  {
    name: "--concurrency",
    description: "Max concurrent subtasks (default 8)",
    args: { name: "int" },
  },
  format(
    ["text", "json", "sarif"],
    "Output format (sarif is not supported with --preview)"
  ),
  {
    name: "--max-tokens",
    description: `Per-${what === "review" ? "group" : "file"} prompt token ceiling (0 = configured or template default)`,
    args: { name: "int" },
  },
  {
    name: "--max-tokens-budget",
    description: "Cap total token usage (input+output) (0 = unlimited)",
    args: { name: "int" },
  },
  {
    name: "--max-tools",
    description: "Max tool call rounds per subtask (0 = template default)",
    args: { name: "int" },
  },
  {
    name: "--model",
    description: "Override LLM model for this run (e.g. claude-opus-4-6)",
    args: { name: "model" },
  },
  output,
  {
    name: ["-p", "--preview"],
    description: `Preview which files will be ${what === "review" ? "reviewed" : "scanned"} without running the LLM`,
  },
  {
    name: "--provider",
    description: "Override configured LLM provider for this run",
    args: { name: "provider", suggestions: providers },
  },
  {
    name: "--resume",
    description: `Resume from a previous ${what} session id`,
    args: sessionArg(),
  },
  {
    name: "--timeout",
    description:
      "Concurrent task budget in minutes, multiplied by effort rounds (0 = unlimited, default 15)",
    args: { name: "minutes" },
  },
  ...sharedRunOptions,
];

const delegateOptions: Fig.Option[] = [
  background(),
  backgroundFile,
  ...diffOptions,
  format(["text", "json"], "Output format"),
  ...sharedRunOptions,
];

const configKeys: Fig.Suggestion[] = [
  "provider",
  "model",
  "max_tokens",
  "effort",
  "language",
  "llm.url",
  "llm.auth_token",
  "llm.auth_token_cmd",
  "llm.auth_header",
  "llm.model",
  "llm.timeout_sec",
  "llm.protocol",
  "llm.use_anthropic",
  "llm.extra_body",
  "llm.extra_headers",
  "llm.retry_codes",
  "telemetry.enabled",
  "telemetry.exporter",
  "telemetry.otlp_endpoint",
  "telemetry.content_logging",
  "providers.",
  "custom_providers.",
  "mcp_servers.",
].map((name) => ({ name }));

const completionSpec: Fig.Spec = {
  name: "ocr",
  description: "OpenCodeReview - AI-powered code review CLI",
  subcommands: [
    {
      name: "auth",
      description: "Manage Sign in with ChatGPT authentication",
      options: [
        {
          name: "--account",
          description:
            "ChatGPT registration client ID (default: active account)",
          args: { name: "client-id" },
          isPersistent: true,
        },
        {
          name: "--provider",
          description: "Authentication provider",
          args: {
            name: "provider",
            suggestions: ["chatgpt"],
            default: "chatgpt",
          },
          isPersistent: true,
        },
      ],
      subcommands: [
        {
          name: "login",
          description: "Sign in with ChatGPT",
          options: [
            {
              name: "--device",
              description:
                "Unsupported in the ChatGPT preview; use the local browser loopback flow",
              hidden: true,
            },
            {
              name: "--enable-plan",
              description:
                "Request consent for plan usage on a retained ChatGPT registration",
            },
            {
              name: "--new-account",
              description: "Register a separate ChatGPT account or workspace",
            },
            {
              name: "--no-browser",
              description:
                "Print a one-time local URL instead of opening a browser",
            },
          ],
        },
        {
          name: "logout",
          description: "Revoke the ChatGPT session and clear local tokens",
        },
        {
          name: "select",
          description: "Select a saved ChatGPT registration",
          args: { name: "client-id" },
        },
        {
          name: "status",
          description:
            "Show saved ChatGPT registrations and authentication status",
        },
      ],
    },
    {
      name: "completion",
      description: "Generate shell completion scripts",
      args: {
        name: "shell",
        suggestions: ["bash", "zsh", "fish", "powershell"],
      },
    },
    {
      name: "config",
      description: "Manage configuration settings",
      subcommands: [
        { name: "model", description: "Interactive model selection" },
        { name: "provider", description: "Interactive provider setup" },
        {
          name: "set",
          description: "Set a configuration value",
          args: [{ name: "key", suggestions: configKeys }, { name: "value" }],
        },
        {
          name: "unset",
          description:
            "Remove a provider, custom_providers.<name> or mcp_servers.<name>; reset max_tokens or effort",
          args: {
            name: "key",
            suggestions: [
              "provider",
              "max_tokens",
              "effort",
              "custom_providers.",
              "mcp_servers.",
            ],
          },
        },
      ],
    },
    {
      name: ["delegate", "d"],
      description:
        "Output review spec for host-agent delegation (no LLM required)",
      subcommands: [
        {
          name: "preview",
          description: "Preview reviewable files with mode/ref metadata",
          options: delegateOptions,
        },
        {
          name: "rule",
          description: "Output resolved review rules grouped by content",
          options: delegateOptions,
          args: { name: "path", template: "filepaths", isVariadic: true },
        },
      ],
    },
    {
      name: "llm",
      description: "LLM utility commands",
      subcommands: [
        {
          name: "models",
          description: "List current account-specific ChatGPT models",
        },
        { name: "providers", description: "List all built-in LLM providers" },
        {
          name: "test",
          description: "Send a test conversation to the configured LLM model",
        },
      ],
    },
    {
      name: ["review", "r"],
      description: "Start a diff-based code review",
      options: [
        {
          name: "--analysis",
          description:
            "Include Behavior, Impact and maintainer decisions (commit or range only; text/json)",
        },
        {
          name: "--analysis-max-tokens-budget",
          description:
            "Cap total input and output tokens for Analysis only (0 = unlimited)",
          args: { name: "int" },
          dependsOn: ["--analysis"],
        },
        background(),
        backgroundFile,
        ...diffOptions,
        {
          name: "--effort",
          description: "Review effort preset (default: configured or medium)",
          args: { name: "effort", suggestions: ["low", "medium", "high"] },
        },
        {
          name: "--no-filter",
          description: "Keep all review comments without LLM post-filtering",
        },
        ...llmRunOptions("review"),
      ],
    },
    {
      name: "rules",
      description: "Inspect and debug review rules",
      subcommands: [
        {
          name: "check",
          description: "Show which review rule applies to a given file path",
          args: { name: "file-path", template: "filepaths" },
          options: [
            repo(),
            {
              name: "--rule",
              description: "Path to a custom rule JSON file",
              args: { name: "file", template: "filepaths" },
            },
          ],
        },
      ],
    },
    {
      name: ["scan", "s"],
      description: "Scan entire files (no diff required)",
      options: [
        background("scan"),
        {
          name: "--batch",
          description: "Override BATCH_STRATEGY",
          args: {
            name: "strategy",
            suggestions: ["none", "by-language", "by-directory"],
          },
        },
        { name: "--no-dedup", description: "Skip the per-batch DEDUP_TASK" },
        {
          name: "--no-plan",
          description: "Skip the per-file PLAN_TASK pre-pass",
        },
        {
          name: "--no-summary",
          description: "Skip the post-run PROJECT_SUMMARY_TASK",
        },
        {
          name: "--path",
          description:
            "Comma-separated repo-relative directories or files to scan (default: whole repo)",
          args: { name: "paths", template: "filepaths" },
        },
        ...llmRunOptions("scan"),
      ],
    },
    {
      name: ["session", "sessions"],
      description: "List and inspect saved review sessions",
      subcommands: [
        {
          name: "comments",
          description: "Show the review comments recorded in one session",
          args: sessionArg(),
          options: [
            {
              name: "--category",
              description:
                "Comma-separated categories to include (e.g. bug, security)",
              args: { name: "categories" },
            },
            json("Emit the comments as a JSON array"),
            repo(),
            {
              name: "--severity",
              description: "Comma-separated severities to include",
              args: {
                name: "severities",
                suggestions: ["critical", "high", "medium", "low"],
              },
            },
          ],
        },
        {
          name: ["compare", "diff"],
          description: "Compare the findings of two sessions",
          args: [
            sessionArg("before-session-id"),
            sessionArg("after-session-id"),
          ],
          options: [json("Emit the comparison as JSON"), repo()],
        },
        {
          name: "export",
          description: "Export one session as a self-contained HTML file",
          args: { ...sessionArg(), isOptional: true },
          options: [output, repo()],
        },
        {
          name: ["list", "ls"],
          description: "List recent review sessions for the current repo",
          options: [
            {
              name: "--branch",
              description: "Only list sessions recorded on this branch",
              args: { name: "branch" },
            },
            json("Emit JSON instead of a table"),
            {
              name: "--limit",
              description:
                "Cap the number of listed sessions (0 = unlimited, default 20)",
              args: { name: "int" },
            },
            repo(),
          ],
        },
        {
          name: ["rm", "delete", "remove"],
          description: "Delete one saved review session",
          args: sessionArg(),
          options: [
            repo(
              "Only look for the session under this repository (default: every repository)"
            ),
            {
              name: ["-y", "--yes"],
              description: "Delete without asking for confirmation",
            },
          ],
        },
        {
          name: "show",
          description: "Show one session's metadata and per-file items",
          args: sessionArg(),
          options: [
            json("Emit JSON instead of a table"),
            repo(
              "Only look for the session under this repository (default: every repository)"
            ),
          ],
        },
      ],
    },
    { name: "version", description: "Show version information" },
    {
      name: ["viewer", "v"],
      description: "Start the WebUI session viewer",
      options: [
        {
          name: "--addr",
          description: "Listen address (default localhost:5483)",
          args: { name: "addr" },
        },
        {
          name: "--open",
          description: "When to open the browser",
          args: {
            name: "when",
            suggestions: ["auto", "always", "never"],
            default: "auto",
          },
        },
      ],
    },
  ],
  options: [
    {
      name: "--color",
      description: "When to emit ANSI color",
      args: {
        name: "when",
        suggestions: ["auto", "always", "never"],
        default: "auto",
      },
      isPersistent: true,
    },
    {
      name: ["-h", "--help"],
      description: "Help for ocr",
      isPersistent: true,
    },
    { name: ["-V", "--version"], description: "Version for ocr" },
  ],
};

export default completionSpec;
