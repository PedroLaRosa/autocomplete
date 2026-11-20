// OPA v1.22.4 (GitHub release, 2026-11-12). Source: cobra flag definitions in
// cmd/*.go at tag v1.22.4 of open-policy-agent/opa (binary not installed here)

const regoFiles: Fig.Arg = {
  name: "path",
  template: ["filepaths", "folders"],
  isVariadic: true,
};

const query: Fig.Arg = {
  name: "query",
  description: "Rego query (omit with --stdin)",
  isOptional: true,
};

const flag = (
  name: string | string[],
  description: string,
  args?: Fig.Arg
): Fig.Option => (args ? { name, description, args } : { name, description });

const enumFlag = (
  name: string | string[],
  description: string,
  values: string[],
  dflt: string
): Fig.Option =>
  flag(name, `${description} (default: ${dflt})`, {
    name: [name].flat()[0].replace(/^-+/, ""),
    suggestions: values,
    default: dflt,
  });

const format = (values: string[], dflt = values[0]): Fig.Option =>
  enumFlag(["-f", "--format"], "Set output format", values, dflt);

const target = (
  values: string[],
  description = "Set the runtime to exercise"
) => enumFlag(["-t", "--target"], description, values, "rego");

const explain = (values: string[]): Fig.Option =>
  enumFlag("--explain", "Enable query explanations", values, values[0]);

const count = (what: string): Fig.Option =>
  flag("--count", `Number of times to repeat each ${what} (default: 1)`, {
    name: "n",
  });

const timeout = (description: string): Fig.Option =>
  flag("--timeout", description, { name: "duration" });

const fileFlag = (name: string | string[], description: string): Fig.Option =>
  flag(name, description, { name: "path", template: "filepaths" });

const repeatable = (option: Fig.Option): Fig.Option => ({
  ...option,
  isRepeatable: true,
});

const bundlePaths = repeatable(
  flag(
    ["-b", "--bundle"],
    "Set bundle file(s) or directory path(s). This flag can be repeated",
    { name: "path", template: ["filepaths", "folders"] }
  )
);
const bundleMode = flag(
  ["-b", "--bundle"],
  "Load paths as bundle files or root directories"
);
const data = repeatable(
  fileFlag(
    ["-d", "--data"],
    "Set policy or data file(s). This flag can be repeated"
  )
);
const input = fileFlag(["-i", "--input"], "Set input file path");
const stdinInput = flag(
  ["-I", "--stdin-input"],
  "Read input document from stdin"
);
const ignore = repeatable(
  flag(
    "--ignore",
    "Set file and directory names to ignore during loading (e.g., '.*' excludes hidden files)",
    { name: "names" }
  )
);
const schema = fileFlag(
  ["-s", "--schema"],
  "Set schema file path or directory path"
);
const capabilities = flag(
  "--capabilities",
  "Set capabilities version or capabilities.json file path",
  { name: "version|path", template: "filepaths" }
);
const maxErrors = flag(
  ["-m", "--max-errors"],
  "Set the number of errors to allow before compilation fails early (default: 10)",
  { name: "n" }
);
const strict = flag(["-S", "--strict"], "Enable compiler strict mode");
const configFile = fileFlag(
  ["-c", "--config-file"],
  "Set path of configuration file"
);
const configOverrides = [
  repeatable(
    flag(
      "--set",
      "Override config values on the command line (use commas to specify multiple values)",
      { name: "key=value" }
    )
  ),
  repeatable(
    flag(
      "--set-file",
      "Override config values with files on the command line (use commas to specify multiple values)",
      { name: "key=path", template: "filepaths" }
    )
  ),
];
const optimizeStore = flag(
  "--optimize-store-for-read-speed",
  "Optimize default in-memory store for read speed. Has possible negative impact on memory footprint and write speed"
);
const optimize = flag(
  ["-O", "--optimize"],
  "Set optimization level (default: 0)",
  {
    name: "level",
    suggestions: ["0", "1", "2"],
  }
);
const entrypoint = repeatable(
  flag(["-e", "--entrypoint"], "Set slash separated entrypoint path", {
    name: "path",
  })
);
const coverageRuns = flag(
  "--coverage-runs",
  "Supplementary coverage passes that annotate not-covered ranges with a kind (requires --coverage); pass an empty list to disable",
  { name: "kinds", suggestions: ["index_excluded", "early_exit"] }
);
const failDefined = flag(
  "--fail-defined",
  "Exits with non-zero exit code on defined/non-empty result and errors"
);
const fail = flag(
  "--fail",
  "Exits with non-zero exit code on undefined/empty result and errors"
);
const benchmem = flag(
  "--benchmem",
  "Report memory allocations with benchmark results (default: true)"
);
const shutdownPeriods = (suffix = ""): Fig.Option[] => [
  flag(
    "--shutdown-grace-period",
    `Set the time (in seconds) that the server will wait to gracefully shut down${suffix} (default: 10)`,
    { name: "seconds" }
  ),
  flag(
    "--shutdown-wait-period",
    `Set the time (in seconds) that the server will wait before initiating shutdown${suffix} (default: 0)`,
    { name: "seconds" }
  ),
];
const logLevels = ["debug", "info", "error"];
const logFlags = (level: string): Fig.Option[] => [
  enumFlag(["-l", "--log-level"], "Set log level", logLevels, level),
  enumFlag(
    "--log-format",
    "Set log format",
    ["text", "json", "json-pretty"],
    "json"
  ),
  flag(
    "--log-timestamp-format",
    "Set log timestamp format (OPA_LOG_TIMESTAMP_FORMAT environment variable)",
    { name: "format" }
  ),
];

// ponytail: JWS algorithms OPA bundle signing accepts; upstream validates, not
// lists them
const signingAlg = enumFlag(
  "--signing-alg",
  "Name of the signing algorithm",
  [
    "RS256",
    "RS384",
    "RS512",
    "PS256",
    "PS384",
    "PS512",
    "ES256",
    "ES384",
    "ES512",
    "HS256",
    "HS384",
    "HS512",
  ],
  "RS256"
);
const signing: Fig.Option[] = [
  flag(
    "--signing-key",
    "Set the secret (HMAC) or path of the PEM file containing the private key (RSA and ECDSA)",
    { name: "key", template: "filepaths" }
  ),
  flag(
    "--signing-plugin",
    "Name of the plugin to use for signing/verification (see https://www.openpolicyagent.org/docs/latest/management-bundles/#signature-plugin)",
    { name: "plugin" }
  ),
  fileFlag(
    "--claims-file",
    "Set path of JSON file containing optional claims (see: https://www.openpolicyagent.org/docs/latest/management-bundles/#signature-format)"
  ),
];
const verification: Fig.Option[] = [
  flag(
    "--verification-key",
    "Set the secret (HMAC) or path of the PEM file containing the public key (RSA and ECDSA)",
    { name: "key", template: "filepaths" }
  ),
  flag(
    "--verification-key-id",
    "Name assigned to the verification key used for bundle verification (default: default)",
    { name: "id" }
  ),
  flag("--scope", "Scope to use for bundle signature verification", {
    name: "scope",
  }),
  repeatable(
    flag(
      "--exclude-files-verify",
      "Set file names to exclude during bundle verification",
      { name: "names" }
    )
  ),
];

const v0Compatible = flag(
  "--v0-compatible",
  "Opt-in to OPA features and behaviors prior to the OPA v1.0 release"
);
const v1Compatible: Fig.Option = {
  name: "--v1-compatible",
  description:
    "Opt-in to OPA features and behaviors that are enabled by default in OPA v1.0",
  hidden: true,
  deprecated: { description: "Default since OPA v1.0" },
};
const compat = [v0Compatible, v1Compatible];
const v0v1 = (description: string): Fig.Option[] => [
  flag("--v0-v1", description),
  {
    name: "--rego-v1",
    description,
    hidden: true,
    deprecated: { description: "Use --v0-v1" },
  },
];

// Flags `eval` and `bench` share
const evalCommon: Fig.Option[] = [
  flag(["-p", "--partial"], "Perform partial evaluation"),
  repeatable(
    flag(
      ["-u", "--unknowns"],
      "Set paths to treat as unknown during partial evaluation (default: [input])",
      { name: "path" }
    )
  ),
  data,
  bundlePaths,
  input,
  repeatable(
    flag("--import", "Set query import(s). This flag can be repeated", {
      name: "import",
    })
  ),
  flag("--package", "Set query package", { name: "package" }),
  flag("--stdin", "Read query from stdin"),
  stdinInput,
  ignore,
  schema,
  target(["rego", "wasm"]),
  optimizeStore,
  ...compat,
];

const completionShell = (shell: string): Fig.Subcommand => ({
  name: shell,
  description: `Generate the autocompletion script for ${shell}`,
  options: [flag("--no-descriptions", "Disable completion descriptions")],
});

const completionSpec: Fig.Spec = {
  name: "opa",
  description: "Open Policy Agent (OPA)",
  subcommands: [
    {
      name: "bench",
      description: "Benchmark a Rego query",
      args: query,
      options: [
        ...evalCommon,
        flag(
          "--fail",
          "Exits with non-zero exit code on undefined/empty result and errors (default: true)"
        ),
        flag("--metrics", "Report query performance metrics (default: true)"),
        format(["pretty", "json", "gobench"]),
        count("benchmark"),
        benchmem,
        flag("--e2e", "Run benchmarks against a running OPA server"),
        configFile,
        ...shutdownPeriods(". This flag is valid in 'e2e' mode only"),
      ],
    },
    {
      name: "build",
      description: "Build an OPA bundle",
      args: regoFiles,
      options: [
        target(["rego", "wasm", "plan"], "Set the output bundle target type"),
        enumFlag(
          "--format",
          "Set the plan output format (only applies when --target=plan)",
          ["json", "proto"],
          "json"
        ),
        flag("--prune-unused", "Exclude dependents of entrypoints"),
        flag("--debug", "Enable debug output"),
        optimize,
        entrypoint,
        flag(["-r", "--revision"], "Set output bundle revision", {
          name: "revision",
        }),
        flag(
          ["-o", "--output"],
          "Set the output filename (default: bundle.tar.gz)",
          { name: "path", template: "filepaths" }
        ),
        flag(
          "--partial-namespace",
          "Set the namespace to use for partially evaluated files in an optimized bundle (default: partial)",
          { name: "namespace" }
        ),
        flag(
          "--follow-symlinks",
          "Follow symlinks in the input set of paths when building the bundle"
        ),
        flag(
          "--wasm-include-print",
          "Enable print statements inside of WebAssembly modules compiled by the compiler"
        ),
        repeatable(
          flag(
            "--plan-addons",
            "Include optional extra data in the plan (requires --target=plan)",
            { name: "addon", suggestions: ["unplanned_rules"] }
          )
        ),
        bundleMode,
        ignore,
        capabilities,
        ...verification,
        signingAlg,
        ...signing,
        ...compat,
      ],
    },
    {
      name: "capabilities",
      description: "Print the capabilities of OPA",
      options: [
        flag("--current", "Print current capabilities"),
        flag("--version", "Print capabilities of a specific version", {
          name: "version",
        }),
        fileFlag("--file", "Print capabilities defined by a file"),
        v0Compatible,
      ],
    },
    {
      name: "check",
      description: "Check Rego source files",
      args: regoFiles,
      options: [
        maxErrors,
        ignore,
        format(["pretty", "json"]),
        bundleMode,
        capabilities,
        schema,
        strict,
        ...v0v1(
          "Check for Rego v0 and v1 compatibility (policies must be compatible with both Rego versions)"
        ),
        ...compat,
      ],
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: ["bash", "fish", "powershell", "zsh"].map(completionShell),
    },
    {
      name: "deps",
      description: "Analyze Rego query dependencies",
      args: { name: "query" },
      options: [
        ignore,
        data,
        bundlePaths,
        format(["pretty", "json"]),
        v1Compatible,
      ],
    },
    {
      name: "eval",
      description: "Evaluate a Rego query",
      args: query,
      options: [
        ...evalCommon,
        fail,
        flag("--metrics", "Report query performance metrics"),
        format([
          "json",
          "values",
          "bindings",
          "pretty",
          "source",
          "raw",
          "discard",
        ]),
        flag("--coverage", "Report coverage"),
        coverageRuns,
        repeatable(
          flag(
            "--disable-inlining",
            "Set paths of documents to exclude from inlining",
            { name: "path" }
          )
        ),
        flag(
          "--shallow-inlining",
          "Disable inlining of rules that depend on unknowns"
        ),
        // ponytail: upstream misspells this flag; the typo is the real name
        flag(
          "--nondeterminstic-builtins",
          "Evaluate nondeterministic builtins (if all arguments are known) during partial eval"
        ),
        flag("--disable-indexing", "Disable indexing optimizations"),
        flag("--disable-early-exit", "Disable 'early exit' optimizations"),
        flag(
          "--strict-builtin-errors",
          "Treat the first built-in function error encountered as fatal"
        ),
        flag(
          "--show-builtin-errors",
          "Collect and return all encountered built-in errors, built in errors are not fatal"
        ),
        flag(
          "--instrument",
          "Enable query instrumentation metrics (implies --metrics)"
        ),
        flag("--profile", "Perform expression profiling"),
        repeatable(
          flag(
            "--profile-sort",
            "Set sort order of expression profiler results. This flag can be repeated",
            {
              name: "criteria",
              suggestions: [
                "total_time_ns",
                "num_eval",
                "num_redo",
                "num_gen_expr",
                "file",
                "line",
              ],
            }
          )
        ),
        flag(
          "--profile-limit",
          "Set number of profiling results to show (default: 10)",
          { name: "n" }
        ),
        flag(
          "--pretty-limit",
          "Set limit after which pretty output gets truncated (default: 80)",
          { name: "n" }
        ),
        failDefined,
        timeout("Set eval timeout (default unlimited)"),
        optimize,
        entrypoint,
        flag(
          "--var-values",
          "Show local variable values in pretty trace output"
        ),
        capabilities,
        explain(["off", "full", "notes", "fails", "debug"]),
        count("benchmark"),
        strict,
      ],
    },
    {
      name: "exec",
      description: "Execute against input files",
      args: regoFiles,
      options: [
        bundlePaths,
        format(["json"]),
        configFile,
        ...configOverrides,
        flag("--decision", "Set decision to evaluate", { name: "path" }),
        failDefined,
        fail,
        flag(
          "--fail-non-empty",
          "Exits with non-zero exit code on non-empty result and errors"
        ),
        ...logFlags("error"),
        flag(
          ["-I", "--stdin-input"],
          "Read input document from stdin rather than a static file"
        ),
        timeout(
          "Set exec timeout with a Go-style duration, such as '5m 30s' (default unlimited)"
        ),
        ...compat,
      ],
    },
    {
      name: "fmt",
      description: "Format Rego source files",
      args: { ...regoFiles, isOptional: true },
      options: [
        flag(["-w", "--write"], "Overwrite the original source file"),
        flag(
          ["-l", "--list"],
          "List all files who would change when formatted"
        ),
        flag(["-d", "--diff"], "Only display a diff of the changes"),
        flag("--fail", "Non zero exit code on reformat"),
        ...v0v1("Format module(s) to be compatible with both Rego v0 and v1"),
        ...compat,
        flag(
          "--check-result",
          "Assert that the formatted code is valid and can be successfully parsed (default: true)"
        ),
        flag(
          "--drop-v0-imports",
          "Drop v0 imports from the formatted code, such as 'rego.v1' and 'future.keywords'"
        ),
        capabilities,
      ],
    },
    {
      name: "inspect",
      description: "Inspect OPA bundle(s)",
      args: regoFiles,
      options: [
        format(["pretty", "json"]),
        flag(["-a", "--annotations"], "List annotations"),
        ...compat,
      ],
    },
    {
      name: "oracle",
      description: "Answer questions about Rego",
      hidden: true,
      subcommands: [
        {
          name: "find-definition",
          description: "Find the location of a definition",
          args: { name: "filename:offset", template: "filepaths" },
          options: [
            flag("--stdin-buffer", "Read buffer from stdin"),
            bundlePaths,
            capabilities,
            ...compat,
          ],
        },
      ],
    },
    {
      name: "parse",
      description: "Parse Rego source file",
      args: { name: "path", template: "filepaths" },
      options: [
        format(["pretty", "json"]),
        flag(
          "--json-include",
          "Include or exclude optional elements. By default comments are included",
          {
            name: "elements",
            suggestions: ["locations", "comments", "-locations", "-comments"],
          }
        ),
        ...compat,
      ],
    },
    {
      name: "refactor",
      description: "Refactor Rego file(s)",
      hidden: true,
      subcommands: [
        {
          name: "move",
          description: "Rename packages and their references in Rego file(s)",
          args: { ...regoFiles, isOptional: true },
          options: [
            repeatable(
              flag(
                ["-p", "--path"],
                "Set the mapping that defines how references should be rewritten. This flag can be repeated",
                { name: "from:to" }
              )
            ),
            flag(["-w", "--write"], "Overwrite the original source file"),
            ignore,
            ...compat,
          ],
        },
      ],
    },
    {
      name: "run",
      description: "Start OPA in interactive or server mode",
      args: { ...regoFiles, isOptional: true },
      options: [
        configFile,
        flag(["-s", "--server"], "Start the runtime in server mode"),
        flag(
          "--ready-timeout",
          "Wait (in seconds) for configured plugins before starting server (value <= 0 disables ready check)",
          { name: "seconds" }
        ),
        fileFlag(
          ["-H", "--history"],
          "Set path of history file (default: $HOME/.opa_history)"
        ),
        repeatable(
          flag(
            ["-a", "--addr"],
            "Set listening address of the server (e.g., [ip]:<port> for TCP, unix://<path> for UNIX domain socket) (default: localhost:8181)",
            { name: "addr" }
          )
        ),
        repeatable(
          flag(
            "--diagnostic-addr",
            "Set read-only diagnostic listening address of the server for /health and /metric APIs (e.g., [ip]:<port> for TCP, unix://<path> for UNIX domain socket)",
            { name: "addr" }
          )
        ),
        flag(
          "--unix-socket-perm",
          "Specify the permissions for the Unix domain socket if used to listen for incoming connections (default: 755)",
          { name: "mode" }
        ),
        flag("--h2c", "Enable H2C for HTTP listeners"),
        enumFlag(
          ["-f", "--format"],
          "Set shell output format",
          ["pretty", "json"],
          "pretty"
        ),
        flag(["-w", "--watch"], "Watch command line files for changes"),
        flag(
          "--watch-config",
          "Watch the configuration file for changes and restart to apply them"
        ),
        ...compat,
        maxErrors,
        flag("--pprof", "Enables pprof endpoints"),
        fileFlag("--tls-cert-file", "Set path of TLS certificate file"),
        fileFlag("--tls-private-key-file", "Set path of TLS private key file"),
        fileFlag("--tls-ca-cert-file", "Set path of TLS CA cert file"),
        flag("--tls-cert-refresh-period", "Set certificate refresh period", {
          name: "duration",
        }),
        enumFlag(
          "--authentication",
          "Set authentication scheme",
          ["token", "tls", "off"],
          "off"
        ),
        enumFlag(
          "--authorization",
          "Set authorization scheme",
          ["basic", "off"],
          "off"
        ),
        enumFlag(
          "--min-tls-version",
          "Set minimum TLS version to be used by OPA's server",
          ["1.0", "1.1", "1.2", "1.3"],
          "1.2"
        ),
        ...logFlags("info"),
        enumFlag(
          "--log-level-request",
          "Set log level for HTTP request/response access logs",
          logLevels,
          "info"
        ),
        ...shutdownPeriods(),
        flag(
          "--skip-known-schema-check",
          "Disables type checking on known input schemas"
        ),
        repeatable(
          flag(
            "--tls-cipher-suites",
            "Set list of enabled TLS 1.0–1.2 cipher suites (IANA)",
            { name: "suites" }
          )
        ),
        ...configOverrides,
        bundleMode,
        optimizeStore,
        flag(
          "--skip-version-check",
          "Disables version check against GitHub releases (see: https://www.openpolicyagent.org/docs/privacy)"
        ),
        {
          name: "--disable-telemetry",
          description: "Disables version check against GitHub releases",
          hidden: true,
          deprecated: { description: "Use --skip-version-check" },
        },
        ignore,
        ...verification,
        signingAlg,
        flag("--skip-verify", "Disables bundle signature verification"),
      ],
    },
    {
      name: "sign",
      description: "Generate an OPA bundle signature",
      args: regoFiles,
      options: [
        bundleMode,
        signingAlg,
        ...signing,
        flag(
          ["-o", "--output-file-path"],
          "Set the location for the .signatures.json file (default: .)",
          { name: "path", template: "folders" }
        ),
      ],
    },
    {
      name: "test",
      description: "Execute Rego test cases",
      args: regoFiles,
      options: [
        enumFlag(
          "--sort",
          "Sort the JSON formatted test output",
          ["none", "duration"],
          "none"
        ),
        flag(["-z", "--exit-zero-on-skipped"], "Skipped tests return status 0"),
        flag(["-v", "--verbose"], "Set verbose reporting mode"),
        timeout("Set test timeout (default 5s, 30s when benchmarking)"),
        flag(["-c", "--coverage"], "Report coverage (overrides debug tracing)"),
        coverageRuns,
        flag(
          "--threshold",
          "Set coverage threshold and exit with non-zero status if coverage is less than threshold % (default: 0)",
          { name: "percent" }
        ),
        flag("--bench", "Benchmark the unit tests"),
        flag(
          ["-r", "--run"],
          "Run only test cases matching the regular expression",
          { name: "regex" }
        ),
        flag(["-w", "--watch"], "Watch command line files for changes"),
        flag("--var-values", "Show local variable values in test output"),
        flag(
          ["-p", "--parallel"],
          "The number of tests that can run in parallel, defaulting to the number of CPUs (explicitly set with 0). Benchmarks are always run sequentially",
          { name: "n" }
        ),
        flag(
          "--fail-on-empty",
          "Whether to fail the test when no test was run"
        ),
        format(["pretty", "json", "gobench"]),
        bundleMode,
        benchmem,
        count("test"),
        maxErrors,
        ignore,
        explain(["fails", "full", "notes", "debug"]),
        target(["rego", "wasm"]),
        capabilities,
        schema,
        ...compat,
      ],
    },
    {
      name: "version",
      description: "Print the version of OPA",
      options: [flag(["-c", "--check"], "Check for latest OPA release")],
    },
    {
      name: "help",
      description: "Help about any command",
      args: {
        name: "command",
        isOptional: true,
        template: "help",
      },
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help for the command",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
