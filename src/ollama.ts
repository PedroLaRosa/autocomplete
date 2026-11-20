// Ollama v0.40.16 (latest stable GitHub release, cross-checked with Homebrew formula, 2026-11-19). Source: cobra command definitions in cmd/cmd.go and cmd/launch/launch.go at tag v0.40.16 (read from source, binary not run).
const modelGenerator = (command: string): Fig.Generator => ({
  script: ["bash", "-c", `ollama ${command} | awk 'NR > 1 { print $1 }'`],
  postProcess: (out) =>
    out
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((model) => ({ name: model, icon: "fig://icon?type=package" })),
});

const ListModelGenerator = modelGenerator("ls");
const RunModelGenerator = modelGenerator("ps");

const insecureOption: Fig.Option = {
  name: "--insecure",
  description: "Use an insecure registry",
};

const verboseOption: Fig.Option = {
  name: "--verbose",
  description: "Show timings for response",
};

const noWordWrapOption: Fig.Option = {
  name: "--nowordwrap",
  description: "Don't wrap words to the next line automatically",
};

const subcommandNames = [
  "serve",
  "create",
  "show",
  "run",
  "stop",
  "pull",
  "push",
  "signin",
  "signout",
  "list",
  "ps",
  "cp",
  "rm",
  "launch",
];

const integrations: Fig.Suggestion[] = [
  { name: "claude", description: "Claude Code" },
  {
    name: "claude-desktop",
    description: "Claude Desktop (only --restore is supported)",
  },
  {
    name: ["chatgpt", "codex-app", "codex-desktop", "codex-gui"],
    description: "ChatGPT",
  },
  { name: "hermes", description: "Hermes Agent" },
  { name: ["openclaw", "clawdbot", "moltbot"], description: "OpenClaw" },
  { name: "opencode", description: "OpenCode" },
  { name: "codex", description: "Codex" },
  { name: "hermes-desktop", description: "Hermes Desktop" },
  { name: ["copilot", "copilot-cli"], description: "Copilot CLI" },
  { name: "omp", description: "OMP" },
  { name: "droid", description: "Droid" },
  { name: ["dsh", "deepseek-harness"], description: "DeepSeek Harness" },
  { name: "kimi", description: "Kimi Code CLI" },
  { name: ["muse", "muse-code"], description: "Muse Code" },
  { name: "pi", description: "Pi" },
  { name: "pool", description: "Pool" },
  { name: "cline", description: "Cline" },
  { name: "qwen", description: "Qwen Code" },
  { name: ["vscode", "code"], description: "VS Code" },
];

const showTypeOptions = [
  "--license",
  "--modelfile",
  "--parameters",
  "--template",
  "--system",
];

const completionSpec: Fig.Spec = {
  name: "ollama",
  description: "Large language model runner",
  subcommands: [
    {
      name: "serve",
      description: "Start Ollama",
      icon: "fig://icon?type=gear",
    },
    {
      name: "start",
      description: "Start Ollama (alias of serve)",
      hidden: true,
    },
    {
      name: "create",
      description: "Create a model",
      args: {
        name: "model",
        description: "Name of the model to create",
      },
      options: [
        {
          name: ["-f", "--file"],
          description: 'Name of the Modelfile (default "Modelfile")',
          args: {
            name: "filename",
            template: "filepaths",
          },
        },
        {
          name: ["-q", "--quantize"],
          description: "Quantize safetensors model to this level (e.g. nvfp4)",
          args: {
            name: "level",
          },
        },
        {
          name: "--combine",
          description:
            "Create a manifest list from comma-separated local models",
          args: {
            name: "models",
          },
        },
        {
          name: "--draft-quantize",
          description: "Quantize safetensors draft model to this level",
          args: {
            name: "level",
          },
        },
        {
          name: "--force",
          description: "Continue local creation when MLX validation fails",
        },
        {
          name: "--experimental",
          description: "Deprecated no-op",
          deprecated: true,
          hidden: true,
        },
      ],
    },
    {
      name: "show",
      description: "Show information for a model",
      args: {
        name: "model",
        generators: ListModelGenerator,
      },
      options: [
        {
          name: "--license",
          description: "Show license of a model",
          exclusiveOn: showTypeOptions.filter((o) => o !== "--license"),
        },
        {
          name: "--modelfile",
          description: "Show Modelfile of a model",
          exclusiveOn: showTypeOptions.filter((o) => o !== "--modelfile"),
        },
        {
          name: "--parameters",
          description: "Show parameters of a model",
          exclusiveOn: showTypeOptions.filter((o) => o !== "--parameters"),
        },
        {
          name: "--template",
          description: "Show template of a model",
          exclusiveOn: showTypeOptions.filter((o) => o !== "--template"),
        },
        {
          name: "--system",
          description: "Show system message of a model",
          exclusiveOn: showTypeOptions.filter((o) => o !== "--system"),
        },
        {
          name: ["-v", "--verbose"],
          description: "Show detailed model information",
        },
      ],
    },
    {
      name: "run",
      description: "Run a model",
      args: [
        {
          name: "model",
          generators: ListModelGenerator,
        },
        {
          name: "prompt",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--keepalive",
          description: "Duration to keep a model loaded (e.g. 5m)",
          args: {
            name: "duration",
          },
        },
        verboseOption,
        insecureOption,
        noWordWrapOption,
        {
          name: "--format",
          description: "Response format (e.g. json)",
          args: {
            name: "format",
            suggestions: ["json"],
          },
        },
        {
          name: "--runner",
          description:
            "Runner to use for manifest list selection (mlx, ggml, llamacpp)",
          hidden: true,
          args: {
            name: "runner",
            suggestions: ["mlx", "ggml", "llamacpp"],
          },
        },
        {
          name: "--think",
          description:
            "Enable thinking mode: true/false or high/medium/low for supported models",
          requiresSeparator: true,
          args: {
            name: "level",
            isOptional: true,
            suggestions: ["true", "false", "high", "medium", "low"],
          },
        },
        {
          name: "--hidethinking",
          description: "Hide thinking output (if provided)",
        },
        {
          name: "--truncate",
          description:
            "For embedding models: truncate inputs exceeding context length (default: true). Set --truncate=false to error instead",
        },
        {
          name: "--dimensions",
          description:
            "Truncate output embeddings to specified dimension (embedding models only)",
          args: {
            name: "dimensions",
          },
        },
        {
          name: "--voice",
          description: "Voice to speak with (speech models only)",
          args: {
            name: "voice",
          },
        },
        {
          name: "--ask",
          description:
            "Ask a decision model a question, answered yes or no unless --choice or --level follow",
          isRepeatable: true,
          args: {
            name: "question",
          },
        },
        {
          name: "--choice",
          description:
            'Add a label for the preceding --ask to choose from, e.g. billing="Payments and refunds"',
          isRepeatable: true,
          args: {
            name: "label=description",
          },
        },
        {
          name: "--level",
          description:
            "Add a level to score the preceding --ask on, from lowest to highest",
          isRepeatable: true,
          args: {
            name: "level",
          },
        },
      ],
    },
    {
      name: "stop",
      description: "Stop a running model",
      args: {
        name: "model",
        generators: RunModelGenerator,
      },
    },
    {
      name: "pull",
      description: "Pull a model from a registry",
      args: {
        name: "model",
      },
      options: [
        insecureOption,
        {
          name: "--runner",
          description:
            "Runner to use for manifest list selection (mlx, ggml, llamacpp)",
          hidden: true,
          args: {
            name: "runner",
            suggestions: ["mlx", "ggml", "llamacpp"],
          },
        },
      ],
    },
    {
      name: "push",
      description: "Push a model to a registry",
      args: {
        name: "model",
        generators: ListModelGenerator,
      },
      options: [insecureOption],
    },
    {
      name: "signin",
      description: "Sign in to ollama.com",
    },
    {
      name: "login",
      description: "Sign in to ollama.com (alias of signin)",
      hidden: true,
    },
    {
      name: "signout",
      description: "Sign out from ollama.com",
    },
    {
      name: "logout",
      description: "Sign out from ollama.com (alias of signout)",
      hidden: true,
    },
    {
      name: ["list", "ls"],
      description: "List models",
    },
    {
      name: "ps",
      description: "List running models",
    },
    {
      name: "cp",
      description: "Copy a model",
      args: [
        {
          name: "source",
          generators: ListModelGenerator,
        },
        {
          name: "destination",
        },
      ],
    },
    {
      name: "rm",
      description: "Remove a model",
      args: {
        name: "model",
        generators: ListModelGenerator,
        isVariadic: true,
      },
    },
    {
      name: "launch",
      description: "Launch the Ollama menu or an integration",
      args: {
        name: "integration",
        description:
          "Integration to launch; extra arguments can be passed after --",
        isOptional: true,
        suggestions: integrations,
      },
      options: [
        {
          name: ["-m", "--model"],
          description: "Model to use",
          args: {
            name: "model",
            generators: ListModelGenerator,
          },
        },
        {
          name: "--config",
          description: "Configure without launching",
        },
        {
          name: "--restore",
          description: "Restore an integration to its default profile",
        },
        {
          name: ["-y", "--yes"],
          description: "Automatically answer yes to confirmation prompts",
        },
      ],
    },
    {
      name: "runner",
      description: "Run the MLX model runner (internal)",
      hidden: true,
    },
    {
      name: "gpu-discover",
      description: "Probe GPUs for the given runtime libraries (internal)",
      hidden: true,
      options: [
        {
          name: "--lib-dir",
          description: "Ollama runtime library directory",
          isRepeatable: true,
          args: {
            name: "directory",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      args: {
        name: "command",
        isOptional: true,
        suggestions: subcommandNames,
      },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for ollama",
      isPersistent: true,
    },
    {
      name: ["--version", "-v"],
      description: "Show version information",
    },
    verboseOption,
    noWordWrapOption,
  ],
};

export default completionSpec;
