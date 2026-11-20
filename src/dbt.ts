// dbt-core v1.12.7 (PyPI "dbt-core" latest stable) + dbt v2.0.11 (dbt-labs/dbt-core git tag v2.0.11), verified 2026-11-20.
// Source: v1 core/dbt/cli/{main,params}.py at v1.12.7; v2 crates/dbt-clap-core/src/{lib,commands}.rs, crates/dbt-features/src/cli.rs
// and crates/dbt-common/src/{io_args,node_selector}.rs at v2.0.11 (static source read, binaries not run).
// dbt v2 (Rust) is now the default `dbt` for new installs; its extra commands, flags and values say "(dbt v2)" / "Only in dbt v2".
// Unlabelled options exist in dbt Core v1 (many are also accepted by v2 as hidden compat flags). Hidden/internal flags omitted.
// Not covered: v2 `--host`/`--port` on non-docs commands, `internal`, and commands of the full proprietary dbt distribution.

const toggle = (
  flag: string,
  description: string,
  short?: string
): Fig.Option[] => [
  { name: short ? [short, `--${flag}`] : `--${flag}`, description },
  { name: `--no-${flag}`, description: `Negate --${flag}` },
];

const yamlArg = (name: string): Fig.Arg => ({
  name,
  description: "A short YAML string eg. '{my_variable: my_value}'",
});

const onlyV1 = (...names: string[]): Fig.Suggestion[] =>
  names.map((name) => ({ name, description: "Only in dbt Core v1" }));

const onlyV2 = (...names: string[]): Fig.Suggestion[] =>
  names.map((name) => ({ name, description: "Only in dbt v2" }));

const selectionArg: Fig.Arg = {
  name: "selector",
  isVariadic: true,
  suggestions: [
    "fqn:",
    "tag:",
    "group:",
    "access:",
    ...onlyV2("function:"),
    "source:",
    "path:",
    "file:",
    "package:",
    "config:",
    "test_name:",
    "test_type:",
    "resource_type:",
    "state:",
    "exposure:",
    "metric:",
    "result:",
    "source_status:",
    "version:",
    "semantic_model:",
    "saved_query:",
    "unit_test:",
    "selector:",
  ],
};

const resourceTypes: (string | Fig.Suggestion)[] = [
  "metric",
  "semantic_model",
  "saved_query",
  "source",
  "analysis",
  "function",
  "model",
  "test",
  "unit_test",
  "exposure",
  "snapshot",
  "seed",
  "default",
  ...onlyV2("check"),
];

const displayFormats = [
  "table",
  "csv",
  "tsv",
  "json",
  "ndjson",
  "yml",
  "selector",
  "name",
  "path",
];

const showOptions = [
  "progress",
  "progresshydrate",
  "progressparse",
  "progressrender",
  "progressanalyze",
  "progressrun",
  "completed",
  "inputfiles",
  "manifest",
  "schedule",
  "nodes",
  "instructions",
  "sourcedschemas",
  "schema",
  "data",
  "verdict",
  "stats",
  "lineage",
  "all",
  "none",
];

const logFormats: (string | Fig.Suggestion)[] = [
  "text",
  "json",
  "default",
  ...onlyV1("debug"),
  ...onlyV2("otel"),
];
const logLevels: (string | Fig.Suggestion)[] = [
  "debug",
  "info",
  "warn",
  "error",
  ...onlyV1("none"),
  ...onlyV2("off", "trace"),
];

const profilesDir: Fig.Option = {
  name: "--profiles-dir",
  description:
    "Which directory to look in for the profiles.yml file (default: current directory, then ~/.dbt/)",
  args: { name: "directory", template: "folders" },
};

const projectDir: Fig.Option = {
  name: "--project-dir",
  description: "Which directory to look in for the dbt_project.yml file",
  args: { name: "directory", template: "folders" },
};

const vars: Fig.Option = {
  name: "--vars",
  description: "Supply variables to the project, overriding dbt_project.yml",
  args: yamlArg("variables"),
};

const targetPath: Fig.Option = {
  name: "--target-path",
  description: "Configure the 'target-path' for the current run",
  args: { name: "path", template: "folders" },
};

const threads: Fig.Option = {
  name: "--threads",
  description:
    "Number of threads to use, overriding profiles.yml (0 uses all CPUs in dbt v2)",
  args: { name: "threads" },
};

const select: Fig.Option = {
  name: ["-s", "--select", "-m", "--models", "--model"],
  description: "Specify the nodes to include",
  isRepeatable: true,
  args: selectionArg,
};

const exclude: Fig.Option = {
  name: "--exclude",
  description: "Specify the nodes to exclude",
  isRepeatable: true,
  args: selectionArg,
};

const selector: Fig.Option = {
  name: "--selector",
  description: "The selector name to use, as defined in selectors.yml",
  args: { name: "name" },
};

const resourceType: Fig.Option = {
  name: ["--resource-types", "--resource-type"],
  description: "Restricts the types of resources that dbt will include",
  isRepeatable: true,
  args: {
    name: "type",
    isVariadic: true,
    suggestions: [...resourceTypes, "all"],
  },
};

const excludeResourceType: Fig.Option = {
  name: ["--exclude-resource-types", "--exclude-resource-type"],
  description: "Specify the types of resources that dbt will exclude",
  isRepeatable: true,
  args: { name: "type", isVariadic: true, suggestions: resourceTypes },
};

const fullRefresh: Fig.Option = {
  name: ["-f", "--full-refresh"],
  description:
    "Drop incremental models and fully recalculate them from the model definition",
};

const empty = toggle("empty", "Limit input refs and sources to zero rows");

const eventTime: Fig.Option[] = [
  {
    name: "--event-time-start",
    description:
      "Start datetime used to filter microbatch model inputs (inclusive)",
    args: { name: "datetime" },
  },
  {
    name: "--event-time-end",
    description:
      "End datetime used to filter microbatch model inputs (exclusive)",
    args: { name: "datetime" },
  },
];

const sample: Fig.Option = {
  name: "--sample",
  description: "Run in sample mode, sampling ref/source calls by the window",
  args: { name: "window", description: "E.g. '3 days' or a YAML dict" },
};

const storeFailures: Fig.Option = {
  name: "--store-failures",
  description: "Store test results (failing rows) in the database",
};

const compileOutput: Fig.Option = {
  name: ["--output", "--format"],
  description:
    "Output format (default: text in dbt Core v1, table in dbt v2; --format is only in dbt v2)",
  args: {
    name: "format",
    suggestions: [
      "json",
      ...onlyV1("text"),
      ...onlyV2(...displayFormats.filter((format) => format !== "json")),
    ],
  },
};

const displayOutput: Fig.Option = {
  name: ["--output", "--format"],
  description: "Display rows in different formats (dbt v2)",
  args: { name: "format", suggestions: displayFormats, default: "table" },
};

const limit: Fig.Option = {
  name: "--limit",
  description: "Limit the number of shown rows, -1 removes the limit (dbt v2)",
  args: { name: "rows", default: "10" },
};

const staticAnalysis: Fig.Option = {
  name: "--static-analysis",
  description:
    "Enable or disable SQL analysis, or run SQL in unsafe mode (dbt v2)",
  args: {
    name: "mode",
    suggestions: ["off", "baseline", "strict"],
    default: "baseline",
  },
};

const forceNodeSelection: Fig.Option = {
  name: "--force-node-selection",
  description: "Force node selection (dbt v2)",
};

const stateMode: Fig.Option = {
  name: ["--state-mode", "--run-cache-mode"],
  description:
    "The mode to use for dbt State, not with --force-node-selection (dbt v2; --run-cache-mode is a deprecated alias)",
  args: {
    name: "mode",
    suggestions: ["noop", "read-write", "write-only"],
    default: "read-write",
  },
};

const sampling: Fig.Option[] = [
  {
    name: "--with-sample",
    description: "Use the samples as given in this YAML/JSON file (dbt v2)",
    args: {
      name: "default|FILE",
      suggestions: ["default"],
      template: "filepaths",
    },
  },
  {
    name: "--sampled",
    description:
      "Add source selectors to sample, e.g. source:raw.events (dbt v2)",
    isRepeatable: true,
    args: { name: "selector", isVariadic: true },
  },
];

const adapter: Fig.Option = {
  name: "--adapter",
  description:
    "Run against a non-default adapter the target declares, e.g. lakecompute (dbt v2)",
  args: { name: "adapter" },
};

const schemaOption = (name: string, form: "pre" | "post"): Fig.Option => ({
  name,
  description: `Show the ${form}-Jinja-transformation form of the JSON schema for the specified types (dbt v2)`,
  isRepeatable: true,
  args: {
    name: "type",
    isOptional: true,
    isVariadic: true,
    suggestions: [
      "selector",
      "schema",
      "project",
      "profile",
      "dbt_cloud",
      "packages",
      "dependencies",
      "telemetry",
      "catalogs",
    ],
  },
});

const nodeTargets = (description: string): Fig.Arg => ({
  name: "node",
  description,
  isOptional: true,
  isVariadic: true,
  template: "filepaths",
});

const inline: Fig.Option = {
  name: "--inline",
  description: "Pass SQL inline",
  args: { name: "sql" },
};

const introspect = toggle(
  "introspect",
  "Scaffold introspective queries as part of compilation"
);

// Option groups shared across subcommands
const base = [profilesDir, projectDir, vars];
const project = [...base, targetPath];
const withThreads = [...project, threads];
const selection = [...withThreads, select, exclude, selector];

const globalOptions: Fig.Option[] = (
  [
    { name: ["-h", "--help"], description: "Show help" },
    {
      name: ["-v", "-V", "--version"],
      description: "Show version information",
    },
    ...toggle(
      "cache-selected-only",
      "Populate the relational cache only for schemas containing selected nodes"
    ),
    ...toggle("debug", "Display debug logging during dbt execution", "-d"),
    ...toggle(
      "defer",
      "Resolve unselected nodes by deferring to the manifest in --state"
    ),
    {
      name: "--defer-state",
      description: "Override the state directory for deferral only",
      args: { name: "directory", template: "folders" },
    },
    ...toggle("fail-fast", "Stop execution on first failure", "-x"),
    ...toggle(
      "favor-state",
      "Defer to --state for unselected nodes even if they exist in the current environment"
    ),
    ...toggle(
      "hints-enabled",
      "Surface occasional hints for speeding up or improving the project"
    ),
    {
      name: "--indirect-selection",
      description:
        "Choose which tests to select that are adjacent to selected resources",
      args: {
        name: "mode",
        suggestions: ["eager", "cautious", "buildable", "empty"],
        default: "eager",
      },
    },
    ...toggle(
      "log-cache-events",
      "Enable verbose logging for relational cache events"
    ),
    {
      name: "--log-format",
      description: "Format of logging to the console and the log file",
      args: { name: "format", suggestions: logFormats, default: "default" },
    },
    {
      name: "--log-format-file",
      description: "Format of logging to the log file",
      args: { name: "format", suggestions: logFormats, default: "debug" },
    },
    {
      name: "--log-level",
      description:
        "Minimum severity of events logged to the console and the log file",
      args: { name: "level", suggestions: logLevels, default: "info" },
    },
    {
      name: "--log-level-file",
      description: "Minimum severity of events logged to the log file",
      args: { name: "level", suggestions: logLevels, default: "debug" },
    },
    {
      name: "--log-path",
      description: "Configure the 'log-path' for the current run",
      args: { name: "path", template: "folders" },
    },
    {
      name: "--maximum-seed-size-mib",
      description:
        "Max size (MiB) of seed files hashed for state comparison, 0 for no limit",
      args: { name: "mib", default: "1" },
    },
    ...toggle(
      "partial-parse",
      "Allow partial parsing using the target directory pickle file"
    ),
    ...toggle(
      "populate-cache",
      "Populate the relational cache at the start of the run"
    ),
    ...toggle("print", "Output all {{ print() }} macro calls"),
    {
      name: "--printer-width",
      description: "Sets the width of terminal output",
      args: { name: "width", default: "80" },
    },
    {
      name: "--profile",
      description: "Which existing profile to load, overriding dbt_project.yml",
      args: { name: "name", suggestions: ["default"] },
    },
    ...toggle("quiet", "Suppress all non-error logging to stdout", "-q"),
    {
      name: ["-r", "--record-timing-info"],
      description: "Output low-level timing stats to the specified file",
      args: { name: "file", template: "filepaths" },
    },
    ...toggle(
      "send-anonymous-usage-stats",
      "Send anonymous usage stats to dbt Labs"
    ),
    ...toggle(
      "snowflake-projects-otel",
      "Enable OpenTelemetry span instrumentation for node and hook execution"
    ),
    ...toggle(
      "show-all-deprecations",
      "Show every deprecation warning instance instead of one per type"
    ),
    {
      name: "--state",
      description: "State directory for both state comparison and deferral",
      args: { name: "directory", template: "folders" },
    },
    ...toggle("static-parser", "Use the static parser"),
    {
      name: ["-t", "--target"],
      description: "Which target to load for the given profile",
      args: { name: "target", suggestions: ["dev", "prod"] },
    },
    ...toggle(
      "use-colors",
      "Colorize log output in the console and the log file"
    ),
    ...toggle("use-colors-file", "Colorize log file output"),
    ...toggle(
      "use-experimental-parser",
      "Enable experimental parsing features"
    ),
    ...toggle(
      "use-v2-parser",
      "Delegate parsing to the v2 parser instead of dbt-core's own parser"
    ),
    ...toggle(
      "version-check",
      "Ensure the installed dbt version matches require-dbt-version"
    ),
    {
      name: "--warn-error",
      description: "If dbt would normally warn, raise an exception instead",
    },
    {
      name: "--warn-error-options",
      description:
        "Raise or warn per event, as a YAML dict with 'error' or 'warn' keys",
      args: {
        name: "options",
        description: `E.g. '{"error": "all", "warn": ["NoNodesForSelectionCriteria"]}'`,
      },
    },
    ...toggle(
      "write-json",
      "Write manifest.json and run_results.json to the target directory"
    ),
    ...toggle(
      "upload-to-artifacts-ingest-api",
      "Upload the artifacts to the dbt Cloud API"
    ),
    {
      name: "--show",
      description:
        "Show a sample of the loaded data in the terminal (dbt Core v1), or choose the artifacts to show (dbt v2)",
      args: {
        name: "options",
        isOptional: true,
        isVariadic: true,
        suggestions: showOptions,
      },
    },
    {
      name: "--packages-install-path",
      description: "The directory to install packages (dbt v2)",
      args: { name: "directory", template: "folders" },
    },
    {
      name: "--ai-provider",
      description:
        "The AI coding agents to install package skills for, as a comma-separated list (dbt v2)",
      args: { name: "providers", suggestions: ["claude"] },
    },
    {
      name: "--compute",
      description: "Execution backend to use (dbt v2)",
      args: {
        name: "backend",
        suggestions: [
          { name: "remote", description: "Execute on the remote warehouse" },
          { name: "inline", description: "Run computations in-process" },
          {
            name: "sidecar",
            description: "Run computations in a separate, ephemeral worker",
          },
          {
            name: "service",
            description: "Run via the remote compute service",
          },
        ],
        default: "remote",
      },
    },
    {
      name: "--write-catalog",
      description: "Write a catalog.json file to the target directory (dbt v2)",
    },
    {
      name: "--metadata-dir",
      description: "Directory for metadata parquet output (dbt v2)",
      args: { name: "directory", template: "folders" },
    },
    {
      name: "--generate-info-schema",
      description:
        "Write the dbt information schema to target/info_schema/ (dbt v2)",
    },
    {
      name: "--info-schema-dir",
      description: "Directory for information schema parquet output (dbt v2)",
      args: { name: "directory", template: "folders" },
    },
    {
      name: "--dirty",
      description:
        "Select only nodes whose source files changed since the last partial parse, plus their dependents (dbt v2)",
    },
    {
      name: "--feature",
      description:
        "Turn on an unstable feature flag, NAME or NAME=true|false (dbt v2)",
      isRepeatable: true,
      args: { name: "feature" },
    },
    ...toggle(
      "manage-state",
      "Enable service-backed dbt State without legacy task-cache coordination (dbt v2)"
    ),
    {
      name: "--invocation-id",
      description:
        "Override the invocation ID with a UUID string or integer (dbt v2)",
      args: { name: "id" },
    },
    {
      name: "--parent-span-id",
      description:
        "Set the parent span ID for trace correlation, 16-character hex or u64 (dbt v2)",
      args: { name: "id" },
    },
    {
      name: "--otel-file-name",
      description:
        "File name for OTEL telemetry written under the log path (dbt v2)",
      args: { name: "file" },
    },
    {
      name: "--otel-parquet-file-name",
      description:
        "File name for OTEL telemetry written as Parquet under the target path (dbt v2)",
      args: { name: "file" },
    },
    {
      name: "--use-v2-compatible-package-downloads",
      description:
        "Use v2-compatible downloads when installing packages from Package Hub (dbt v2)",
    },
    {
      name: "--require-hub-verified-downloads",
      description:
        "Require and verify a Hub-provided sha1 checksum when installing packages from Package Hub (dbt v2)",
    },
  ] satisfies Fig.Option[]
).map((option) => ({ ...option, isPersistent: true }));

const listCommand: Fig.Subcommand = {
  name: "list",
  description: "List the resources in your project",
  options: [
    ...project,
    { ...select, name: ["-s", "--select"] },
    { ...select, name: ["-m", "--models", "--model"] },
    exclude,
    selector,
    resourceType,
    excludeResourceType,
    {
      name: ["--output", "--format"],
      description:
        "Output format: JSON or a newline-delimited list (--format is only in dbt v2)",
      args: {
        name: "format",
        suggestions: ["json", "name", "path", "selector"],
        default: "selector",
      },
    },
    {
      name: "--output-keys",
      description: "Node properties to include as keys in JSON output",
      isRepeatable: true,
      args: { name: "key", isVariadic: true },
    },
  ],
};

const freshnessCommand: Fig.Subcommand = {
  name: "freshness",
  description: "Check the current freshness of the project's sources",
  options: [
    ...selection,
    {
      name: ["-o", "--output"],
      description:
        "Output path for the JSON report (default: target/sources.json)",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--check-all",
      description: "Check freshness of all sources (dbt v2)",
    },
  ],
};

const completionSpec: Fig.Spec = {
  name: "dbt",
  description:
    "An ELT tool for managing your SQL transformations and data models",
  subcommands: [
    {
      name: "build",
      description: "Run all seeds, models, snapshots, and tests in DAG order",
      options: [
        ...selection,
        ...empty,
        ...eventTime,
        fullRefresh,
        resourceType,
        excludeResourceType,
        sample,
        storeFailures,
        forceNodeSelection,
        stateMode,
        staticAnalysis,
        displayOutput,
        limit,
        {
          name: "--skip-checks",
          description:
            "Skip parse-time project quality checks, models still compile and run (dbt v2)",
        },
        ...sampling,
      ],
    },
    {
      name: "check",
      description:
        "Run project quality checks against the dbt metadata index (dbt v2)",
      args: {
        name: "check",
        description:
          "Names of specific checks to run (the file stem, without .sql), all discovered checks if omitted",
        isOptional: true,
        isVariadic: true,
      },
      options: [...selection, staticAnalysis],
    },
    {
      name: "clean",
      description:
        "Delete all folders in the clean-targets list (usually dbt_packages and target)",
      args: {
        name: "file",
        description: "Clean the target directory specified by file (dbt v2)",
        isOptional: true,
        isVariadic: true,
        template: ["filepaths", "folders"],
      },
      options: [
        ...project,
        ...toggle(
          "clean-project-files-only",
          "Only delete clean-paths inside the dbt project"
        ),
      ],
    },
    {
      name: "clone",
      description:
        "Create clones of selected nodes based on their location in the --state manifest",
      options: [...selection, fullRefresh, resourceType, excludeResourceType],
    },
    {
      name: "compile",
      description:
        "Generate executable SQL from source, model, test, and analysis files",
      args: nodeTargets(
        "Compile the given nodes, identified by paths, and all their upstreams (dbt v2)"
      ),
      options: [
        ...selection,
        ...empty,
        ...introspect,
        fullRefresh,
        compileOutput,
        inline,
        resourceType,
        excludeResourceType,
        limit,
        staticAnalysis,
        ...sampling,
      ],
    },
    {
      name: "debug",
      description:
        "Show the dbt environment, check dependencies and test the database connection",
      options: [
        ...base,
        {
          name: "--connection",
          description: "Test the connection to the target database only",
        },
        {
          name: "--config-dir",
          description:
            "Print the command to access the directory searched for profiles.yml, then exit",
        },
      ],
    },
    {
      name: "deps",
      description: "Install the dbt packages specified",
      options: [
        ...base,
        {
          name: "--source",
          description: "Source to download the package from",
          args: {
            name: "source",
            suggestions: ["hub", "git", "local"],
            default: "hub",
          },
        },
        {
          name: "--lock",
          description:
            "Generate the package-lock.yml file without installing the packages",
        },
        {
          name: "--upgrade",
          description: "Upgrade packages to the latest version",
        },
        {
          name: "--add-package",
          description: "Add a package to the current package spec",
          args: { name: "package@version" },
        },
      ],
    },
    {
      name: "docs",
      description:
        "Generate or serve the documentation website for your project",
      subcommands: [
        {
          name: "generate",
          description: "Generate the documentation website for your project",
          options: [
            ...selection,
            ...toggle(
              "compile",
              "Run 'dbt compile' as part of docs generation"
            ),
            {
              name: "--empty-catalog",
              description: "Generate an empty catalog.json file",
            },
            {
              name: "--static",
              description:
                "Generate an additional static_index.html with manifest and catalog built in",
            },
            {
              name: "--output-dir",
              description:
                "Directory to write the static docs site to (dbt v2)",
              args: { name: "directory", template: "folders" },
            },
            {
              name: "--duckdb-cdn-base",
              description:
                "Base URL the browser loads DuckDB-WASM from at runtime (dbt v2)",
              args: { name: "url" },
            },
          ],
        },
        {
          name: "serve",
          description: "Serve the documentation website for your project",
          options: [
            ...project,
            ...toggle(
              "browser",
              "Open a local web browser after starting the server"
            ),
            {
              name: "--host",
              description: "Host to serve dbt docs on",
              args: { name: "host", default: "127.0.0.1" },
            },
            {
              name: "--port",
              description:
                "Port number for the docs server (default: 8080 in dbt Core v1, 8580 in dbt v2)",
              args: { name: "port" },
            },
            {
              name: "--no-open",
              description: "Do not open a browser tab on startup (dbt v2)",
            },
          ],
        },
      ],
    },
    {
      name: "freshness",
      description: "Check freshness of resources (dbt v2)",
      options: [...selection, resourceType, excludeResourceType],
    },
    {
      name: "init",
      description: "Initialize a new dbt project",
      args: { name: "project_name", isOptional: true },
      options: [
        ...base,
        {
          name: ["-s", "--skip-profile-setup"],
          description: "Skip interactive profile setup",
        },
        {
          name: "--skip-debug",
          description: "Skip running dbt debug after project initialization",
        },
        {
          name: "--project-name",
          description: "The name of the project to create (dbt v2)",
          args: { name: "name", default: "jaffle_shop" },
        },
        {
          name: "--v2-upgrade",
          description: "Run the dbt v2 onboarding and upgrade flow (dbt v2)",
        },
        {
          name: "--sample",
          description: "The sample project to initialize with (dbt v2)",
          args: {
            name: "template",
            suggestions: ["jaffle-shop", "moms-flower-shop"],
            default: "jaffle-shop",
          },
        },
      ],
    },
    {
      name: "lint",
      description: "Lint models (dbt v2, requires the full dbt distribution)",
    },
    listCommand,
    { ...listCommand, name: "ls", hidden: true },
    {
      name: "login",
      description: "Authenticate with dbt platform (dbt v2)",
      subcommands: [
        {
          name: "status",
          description: "Show current authentication status",
        },
      ],
    },
    {
      name: "man",
      description: "Create reference documentation (dbt v2)",
      options: [
        schemaOption("--schema", "post"),
        schemaOption("--pre-schema", "pre"),
      ],
    },
    {
      name: "parse",
      description: "Parse the project and provide information on performance",
      options: withThreads,
    },
    {
      name: "retry",
      description: "Retry the nodes that failed in the previous run",
      options: [...withThreads, fullRefresh, staticAnalysis],
    },
    {
      name: "run",
      description:
        "Compile SQL and execute against the current target database",
      options: [
        ...selection,
        ...empty,
        ...eventTime,
        fullRefresh,
        sample,
        forceNodeSelection,
        stateMode,
        staticAnalysis,
        displayOutput,
        limit,
        ...sampling,
      ],
    },
    {
      name: "run-operation",
      description: "Run the named macro with any supplied arguments",
      args: { name: "macro", isOptional: true },
      options: [
        ...withThreads,
        {
          name: "--args",
          description: "Keyword arguments for the macro",
          args: yamlArg("args"),
        },
        {
          name: "--sql",
          description: "Execute ad-hoc SQL/Jinja directly, without a macro",
          args: { name: "sql" },
        },
        adapter,
      ],
    },
    {
      name: "seed",
      description: "Load data from csv files into your data warehouse",
      options: [
        ...selection,
        ...empty,
        fullRefresh,
        forceNodeSelection,
        stateMode,
        staticAnalysis,
      ],
    },
    {
      name: "show",
      description:
        "Run SQL for a named resource or inline query and preview the results",
      options: [
        ...selection,
        ...introspect,
        fullRefresh,
        compileOutput,
        inline,
        {
          ...limit,
          description:
            "Limit the number of results returned (default: 5 in dbt Core v1, 10 in dbt v2; -1 removes the limit in dbt v2)",
          args: { name: "limit" },
        },
        resourceType,
        excludeResourceType,
        staticAnalysis,
        {
          name: "--info",
          description:
            "Query a dbt information schema view, e.g. models or dag_nodes, instead of the warehouse (dbt v2)",
          args: { name: "view" },
        },
        {
          name: "--query-id",
          description:
            "Fetch the result of a previously completed LakeCompute query by query id (dbt v2)",
          args: { name: "id" },
        },
        {
          name: "--unchecked",
          description:
            "Skip local type checking of the show target, now the default (dbt v2)",
          deprecated: true,
        },
        adapter,
        ...sampling,
      ],
    },
    {
      name: "snapshot",
      description: "Execute snapshots defined in your project",
      args: nodeTargets(
        "Snapshot the given nodes, same as --select node_1 ... node_n (dbt v2)"
      ),
      options: [
        ...selection,
        ...empty,
        forceNodeSelection,
        stateMode,
        staticAnalysis,
      ],
    },
    {
      name: "source",
      description: "Manage your project's sources",
      subcommands: [
        freshnessCommand,
        { ...freshnessCommand, name: "snapshot-freshness", hidden: true },
      ],
    },
    {
      name: "state",
      description: "Utilities for dbt State (dbt v2)",
      subcommands: [
        {
          name: "explain",
          description: "Explain dbt State (dbt v2)",
          options: [
            {
              name: ["-v", "--verbose"],
              description: "Enable more detailed output",
            },
            {
              name: ["-l", "--log-file"],
              description: "Log file path",
              args: { name: "file", template: "filepaths" },
            },
          ],
        },
      ],
    },
    {
      name: "system",
      description: "System management subcommands (dbt v2)",
      subcommands: [
        {
          name: "install-drivers",
          description:
            "Preinstall all supported database drivers into the local cache",
        },
        {
          name: "upgrade-distribution",
          description:
            "Upgrade a dbt v2 OSS installation to dbt v2 proprietary",
          options: [
            {
              name: ["-y", "--yes"],
              description:
                "Skip the confirmation prompt and proceed automatically",
            },
            {
              name: "--package-manager",
              description:
                "Python package manager to sync the rewritten manifest with, overriding automatic detection",
              args: {
                name: "manager",
                suggestions: [
                  "uv",
                  "poetry",
                  "pdm",
                  "pipenv",
                  "conda",
                  "hatch",
                  "pip",
                  "pipx",
                  "rye",
                  "asdf",
                  "mise",
                  "pyenv",
                ],
              },
            },
          ],
        },
        {
          name: "update",
          description: "Informative-only update command for dbt v2 OSS",
          hidden: true,
        },
        {
          name: "uninstall",
          description: "Informative-only uninstall command for dbt v2 OSS",
          hidden: true,
        },
      ],
    },
    {
      name: "test",
      description: "Run tests on data in deployed models",
      args: nodeTargets(
        "Test the given nodes, same as --select node_1 ... node_n (dbt v2)"
      ),
      options: [
        ...selection,
        resourceType,
        excludeResourceType,
        storeFailures,
        forceNodeSelection,
        stateMode,
        staticAnalysis,
        displayOutput,
        limit,
        ...sampling,
      ],
    },
    {
      name: "completions",
      description: "Generate shell completion scripts (dbt v2)",
      hidden: true,
      args: {
        name: "shell",
        suggestions: ["bash", "elvish", "fish", "powershell", "zsh"],
      },
    },
  ],
  options: globalOptions,
};

export default completionSpec;
