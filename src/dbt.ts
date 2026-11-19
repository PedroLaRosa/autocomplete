// dbt-core v1.12.7 (PyPI "dbt-core" / GitHub latest release, 2026-11-12).
// Source: core/dbt/cli/main.py and core/dbt/cli/params.py at tag v1.12.7

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

const selectionArg: Fig.Arg = {
  name: "selector",
  isVariadic: true,
  suggestions: [
    "fqn:",
    "tag:",
    "group:",
    "access:",
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

const resourceTypes = [
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
];

const logFormats = ["text", "debug", "json", "default"];
const logLevels = ["debug", "info", "warn", "error", "none"];

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
  description: "Number of threads to use, overriding profiles.yml",
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

const show: Fig.Option = {
  name: "--show",
  description: "Show a sample of the loaded data in the terminal",
};

const storeFailures: Fig.Option = {
  name: "--store-failures",
  description: "Store test results (failing rows) in the database",
};

const compileOutput: Fig.Option = {
  name: "--output",
  description: "Output format",
  args: { name: "format", suggestions: ["json", "text"], default: "text" },
};

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
      name: "--output",
      description: "Output format: JSON or a newline-delimited list",
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
        show,
        storeFailures,
      ],
    },
    {
      name: "clean",
      description:
        "Delete all folders in the clean-targets list (usually dbt_packages and target)",
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
      options: [
        ...selection,
        ...empty,
        ...introspect,
        fullRefresh,
        compileOutput,
        inline,
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
              description: "Port number for the docs server",
              args: { name: "port", default: "8080" },
            },
          ],
        },
      ],
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
      ],
    },
    listCommand,
    { ...listCommand, name: "ls", hidden: true },
    {
      name: "parse",
      description: "Parse the project and provide information on performance",
      options: withThreads,
    },
    {
      name: "retry",
      description: "Retry the nodes that failed in the previous run",
      options: [...withThreads, fullRefresh],
    },
    {
      name: "run",
      description:
        "Compile SQL and execute against the current target database",
      options: [...selection, ...empty, ...eventTime, fullRefresh, sample],
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
      ],
    },
    {
      name: "seed",
      description: "Load data from csv files into your data warehouse",
      options: [...selection, ...empty, fullRefresh, show],
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
          name: "--limit",
          description: "Limit the number of results returned",
          args: { name: "limit", default: "5" },
        },
      ],
    },
    {
      name: "snapshot",
      description: "Execute snapshots defined in your project",
      options: [...selection, ...empty],
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
      name: "test",
      description: "Run tests on data in deployed models",
      options: [...selection, resourceType, excludeResourceType, storeFailures],
    },
  ],
  options: globalOptions,
};

export default completionSpec;
