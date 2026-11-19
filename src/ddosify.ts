// Ddosify v2.4.0 (GitHub tag ddosify/ddosify v2.4.0, 2026-11-06; checked 2026-11-19). Source: ddosify_engine/cli/*.go
// (cobra command and flag definitions) at the v2.4.0 tag, read statically; the binary was not run. v2 split the v1
// flat flags into subcommands: the v1 flags now live on `run`, -h is --help (the header flag is -H), -p/--protocol is gone.
const completionSpec: Fig.Spec = {
  name: "ddosify",
  description:
    "Load test HTTP and streaming (SSE) APIs, LLM endpoints included",
  subcommands: [
    {
      name: "run",
      description: "Run a load test from a config file or from flags",
      options: [
        {
          name: ["-f", "--config"],
          description:
            "JSON config file; flags and DDOSIFY_* variables override it",
          priority: 90,
          args: {
            name: "config",
            template: "filepaths",
          },
        },
        {
          name: ["-t", "--target"],
          description: "Target URL, when there is no config file",
          priority: 90,
          args: {
            name: "url",
          },
        },
        {
          name: ["-n", "--iterations"],
          priority: 80,
          description: "Total iterations. Default: 100",
          args: {
            name: "iterations",
            default: "100",
          },
        },
        {
          name: ["-d", "--duration"],
          priority: 80,
          description: "Test duration in seconds. Default: 10",
          args: {
            name: "seconds",
            default: "10",
          },
        },
        {
          name: "--stage",
          description:
            "A manual_load stage, DURATION:COUNT[:NAME[:warmup]], or c=CONCURRENCY:COUNT[:NAME[:warmup]] for a closed-loop stage. The stages replace the config's manual_load",
          isRepeatable: true,
          exclusiveOn: ["--concurrency"],
          args: {
            name: "stage",
          },
        },
        {
          name: "--concurrency",
          description:
            "Closed-loop stages, one per level, such as 1,2,4,8: at most that many iterations in flight. They replace the config's manual_load",
          exclusiveOn: ["--stage"],
          args: {
            name: "levels",
          },
        },
        {
          name: "--per-level",
          description:
            "Iterations of each level; 0 is max(10 x level, 20). Used with --concurrency",
          dependsOn: ["--concurrency"],
          args: {
            name: "iterations",
          },
        },
        {
          name: "--warmup-iterations",
          description:
            "A warm-up stage of this many iterations at the first level, left out of the results. Used with --concurrency",
          dependsOn: ["--concurrency"],
          args: {
            name: "iterations",
          },
        },
        {
          name: ["-l", "--load-type"],
          priority: 70,
          description: "Type of the load. Default: linear",
          args: {
            name: "type",
            default: "linear",
            suggestions: ["linear", "incremental", "waved"],
          },
        },
        {
          name: "--load-spread",
          description: "Where in a second or stage iterations start",
          args: {
            name: "spread",
            suggestions: ["front", "even", "poisson"],
          },
        },
        {
          name: "--seed",
          description:
            "Seeds the poisson arrivals and the random data rows; the same seed repeats a run. Default: 1",
          args: {
            name: "seed",
            default: "1",
          },
        },
        {
          name: "--engine-mode",
          description: "How the engine treats users. Default: ddosify",
          args: {
            name: "mode",
            default: "ddosify",
            suggestions: ["ddosify", "distinct-user", "repeated-user"],
          },
        },
        {
          name: ["-m", "--method"],
          description: "Request method. Default: GET",
          args: {
            name: "method",
            default: "GET",
            suggestions: [
              "GET",
              "POST",
              "PUT",
              "DELETE",
              "HEAD",
              "PATCH",
              "OPTIONS",
            ],
          },
        },
        {
          name: ["-b", "--body"],
          description: "Request body",
          insertValue: "-b '{cursor}'",
          args: {
            name: "body",
          },
        },
        {
          name: ["-a", "--auth"],
          description: "Basic authentication, username:password",
          args: {
            name: "auth",
            suggestions: [{ name: "username:password" }],
          },
        },
        {
          name: ["-H", "--header"],
          description:
            'Request header, "Name: value". With a config it is added to every step',
          insertValue: "-H '{cursor}'",
          isRepeatable: true,
          args: {
            name: "header",
            suggestions: [{ name: "Content-Type: application/json" }],
          },
        },
        {
          name: ["-T", "--timeout"],
          description:
            "Request timeout in seconds; for a stream it covers the whole stream. Default: 5",
          args: {
            name: "seconds",
            default: "5",
          },
        },
        {
          name: ["-P", "--proxy"],
          description: "Proxy, protocol://username:password@host:port",
          args: {
            name: "proxy",
            suggestions: [{ name: "http://user:pass@proxy_host.com:port" }],
          },
        },
        {
          name: ["-o", "--output"],
          description: "Report format. Default: stdout",
          args: {
            name: "format",
            default: "stdout",
            suggestions: ["stdout", "stdout-json"],
          },
        },
        {
          name: "--json",
          description:
            "Print the report as JSON on stdout, the same as -o stdout-json",
        },
        {
          name: "--debug",
          description: "Run one iteration and print every request and response",
        },
        {
          name: "--cert-path",
          description: "Client certificate file (cert.pem)",
          args: {
            name: "cert",
            template: "filepaths",
          },
        },
        {
          name: "--cert-key-path",
          description: "Client certificate key file (key.pem)",
          args: {
            name: "key",
            template: "filepaths",
          },
        },
        {
          name: "--insecure",
          description:
            "Do not verify the target's TLS certificate, for a self-signed one",
        },
        {
          name: "--preset",
          description: "Apply a config preset",
          isRepeatable: true,
          args: {
            name: "preset",
            suggestions: ["openai"],
          },
        },
        {
          name: "--html",
          description: "Also write an HTML report to this file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--observer",
          description: "Add a live observer, name or name=arg",
          isRepeatable: true,
          args: {
            name: "observer",
            suggestions: ["ndjson", "status", "status=10s", "tui"],
          },
        },
        {
          name: "--ui",
          description:
            "The live view: the TUI on a terminal, ndjson snapshots in a pipe or with --json. Default: auto",
          args: {
            name: "ui",
            default: "auto",
            suggestions: ["auto", "tui", "ndjson", "plain"],
          },
        },
        {
          name: "--no-color",
          description: "No colors; NO_COLOR and TERM=dumb do the same",
        },
        {
          name: "--drain",
          description:
            "After an interrupt, how long iterations in flight may finish; a second interrupt cuts them. Default: 30s",
          args: {
            name: "duration",
            default: "30s",
          },
        },
        {
          name: "--tokenizer",
          description:
            "Hugging Face tokenizer.json to count the streamed answers' tokens",
          args: {
            name: "tokenizer",
            template: "filepaths",
          },
        },
        {
          name: "--url",
          description:
            "With --preset openai: the chat completions URL, such as http://localhost:8000/v1/chat/completions",
          args: {
            name: "url",
          },
        },
        {
          name: "--model",
          description: "With --preset openai: the model",
          args: {
            name: "model",
          },
        },
        {
          name: "--dataset",
          description:
            "With --preset openai: prompts, a .jsonl, .csv or .txt file",
          args: {
            name: "dataset",
            template: "filepaths",
          },
        },
        {
          name: "--api-key",
          description:
            "With --preset openai: sent as Authorization: Bearer; DDOSIFY_API_KEY keeps it off the command line",
          args: {
            name: "key",
          },
        },
        {
          name: "--max-tokens",
          description: "With --preset openai: max_tokens of every request",
          args: {
            name: "tokens",
          },
        },
        {
          name: "--input-tokens",
          description:
            "With --preset openai: every prompt is exactly this many tokens of the dataset's text (needs --tokenizer)",
          args: {
            name: "tokens",
          },
        },
        {
          name: "--ignore-eos",
          description:
            "With --preset openai: send ignore_eos, so every answer runs to --max-tokens",
        },
        {
          name: "--gpus",
          description:
            "GPUs serving the model, to give the HTML report's throughput per GPU (the config's capacity.gpus)",
          args: {
            name: "gpus",
          },
        },
      ],
      args: {
        name: "target_url",
        description: "Target URL, the same as --target",
        isOptional: true,
      },
    },
    {
      name: "report",
      description:
        "Write the HTML report of a finished run, or compare runs, from their --json output",
      options: [
        {
          name: ["-o", "--output"],
          description:
            "The HTML file to write, or - for stdout. Default: report.html",
          args: {
            name: "file",
            default: "report.html",
            template: "filepaths",
          },
        },
        {
          name: "--title",
          description: "The report's title",
          args: {
            name: "title",
          },
        },
        {
          name: "--label",
          description:
            "A run's name in a comparison, one for each log, in their order",
          isRepeatable: true,
          args: {
            name: "label",
          },
        },
        {
          name: "--gpus",
          description:
            "GPUs that served each run, for throughput per GPU; over the runs' capacity.gpus",
          args: {
            name: "gpus",
          },
        },
        {
          name: "--tier",
          description:
            "An SLO tier, NAME:TTFT_MS:TPOT_MS (a limit of 0 is not checked). The tiers replace the defaults (MLPerf's conversational and interactive)",
          isRepeatable: true,
          args: {
            name: "tier",
          },
        },
      ],
      args: {
        name: "log",
        description:
          "Output of ddosify run --json; - or no argument reads stdin. Two or more compare the runs",
        isOptional: true,
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "version",
      description: "Print the version, commit, build date and Go version",
      options: [
        {
          name: "--json",
          description: "Print as JSON",
        },
      ],
    },
    {
      name: "docs",
      description:
        "Generate the man pages or the Markdown reference of every command",
      subcommands: [
        {
          name: "man",
          description: "Write man pages to --dir",
          options: [
            {
              name: "--dir",
              description:
                "Directory to write to, which must exist. Default is the current directory",
              args: {
                name: "dir",
                default: ".",
                template: "folders",
              },
            },
          ],
        },
        {
          name: "markdown",
          description: "Write the Markdown reference to --dir",
          options: [
            {
              name: "--dir",
              description:
                "Directory to write to, which must exist. Default is the current directory",
              args: {
                name: "dir",
                default: ".",
                template: "folders",
              },
            },
          ],
        },
      ],
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: ["bash", "zsh", "fish", "powershell"].map((shell) => ({
        name: shell,
        description: `Generate the autocompletion script for ${shell}`,
        options: [
          {
            name: "--no-descriptions",
            description: "Disable completion descriptions",
          },
        ],
      })),
    },
    {
      name: "help",
      description: "Help about any command",
      args: {
        name: "command",
        isOptional: true,
      },
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Help for ddosify or the command",
      isPersistent: true,
    },
    {
      name: ["-v", "--version"],
      description: "Print the version",
    },
  ],
};
export default completionSpec;
