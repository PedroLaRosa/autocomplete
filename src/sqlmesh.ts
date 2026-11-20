// SQLMesh v0.236.4 (PyPI latest, 2026-11-19). Source: sqlmesh/cli/main.py and
// sqlmesh/cli/options.py at tag v0.236.4 of github.com/SQLMesh/sqlmesh

// ponytail: static list of CONNECTION_CONFIG_TO_TYPE keys in v0.236.4
const engines = [
  "athena",
  "azuresql",
  "bigquery",
  "clickhouse",
  "databricks",
  "db2",
  "duckdb",
  "fabric",
  "gcp_postgres",
  "motherduck",
  "mssql",
  "mysql",
  "postgres",
  "redshift",
  "risingwave",
  "snowflake",
  "spark",
  "starrocks",
  "trino",
];

const startOption: Fig.Option = {
  name: ["-s", "--start"],
  description:
    "The start datetime of the interval for which this command will be applied",
  args: { name: "start" },
};

const endOption: Fig.Option = {
  name: ["-e", "--end"],
  description:
    "The end datetime of the interval for which this command will be applied",
  args: { name: "end" },
};

const executionTimeOption: Fig.Option = {
  name: "--execution-time",
  description: "The execution time (defaults to now)",
  args: { name: "time" },
};

const timeOptions = [startOption, endOption, executionTimeOption];

const verboseOption: Fig.Option = {
  name: ["-v", "--verbose"],
  description: "Verbose output. Use -vv for very verbose output",
  isRepeatable: 2,
};

const selectModelOption = (description: string): Fig.Option => ({
  name: "--select-model",
  description,
  args: { name: "model" },
  isRepeatable: true,
});

const localOption = (description: string): Fig.Option => ({
  name: "--local",
  description,
});

const formatOptions: Fig.Option[] = [
  {
    name: "--normalize",
    description: "Whether or not to normalize identifiers to lowercase",
  },
  {
    name: "--pad",
    description: "Determines the pad size in a formatted string",
    args: { name: "size" },
  },
  {
    name: "--indent",
    description: "Determines the indentation size in a formatted string",
    args: { name: "size" },
  },
  {
    name: "--normalize-functions",
    description: "Whether or not to normalize all function names",
    args: { name: "mode", suggestions: ["upper", "lower"] },
  },
  {
    name: "--leading-comma",
    description:
      "Determines whether or not the comma is leading or trailing in select expressions",
  },
  {
    name: "--max-text-width",
    description:
      "The max number of characters in a segment before creating new lines in pretty mode",
    args: { name: "width" },
  },
];

const completionSpec: Fig.Spec = {
  name: "sqlmesh",
  description: "SQLMesh command line tool",
  options: [
    {
      name: "--version",
      description: "Show the version and exit",
    },
    {
      name: ["-p", "--paths"],
      description: "Path(s) to the SQLMesh config/project",
      args: {
        name: "path",
        template: "folders",
      },
      isRepeatable: true,
    },
    {
      name: "--config",
      description:
        "Name of the config object. Only applicable to configuration defined using Python script",
      args: {
        name: "config",
      },
    },
    {
      name: "--gateway",
      description: "The name of the gateway",
      args: {
        name: "gateway",
      },
    },
    {
      name: "--ignore-warnings",
      description: "Ignore warnings",
    },
    {
      name: "--debug",
      description: "Enable debug mode",
    },
    {
      name: "--log-to-stdout",
      description: "Display logs in stdout",
    },
    {
      name: "--log-file-dir",
      description: "The directory to write log files to",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "--dotenv",
      description: "Path to a custom .env file to load environment variables",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
  ],
  subcommands: [
    {
      name: "init",
      description: "Create a new SQLMesh repository",
      options: [
        {
          name: ["-t", "--template"],
          description: "Project template",
          args: {
            name: "template",
            suggestions: ["default", "dbt", "dlt", "empty"],
          },
        },
        {
          name: "--dlt-pipeline",
          description:
            "DLT pipeline for which to generate a SQLMesh project. Use alongside template: dlt",
          args: {
            name: "pipeline",
          },
        },
        {
          name: "--dlt-path",
          description:
            "The DLT pipelines working directory (by default ~/.dlt/pipelines). Use alongside template: dlt",
          args: {
            name: "path",
            template: "folders",
          },
        },
      ],
      args: {
        name: "engine",
        suggestions: engines,
        isOptional: true,
      },
    },
    {
      name: "render",
      description:
        "Render a model's query, optionally expanding referenced models",
      options: [
        ...timeOptions,
        {
          name: "--expand",
          description: "Expand the named referenced model as a raw query",
          args: {
            name: "model",
          },
          isRepeatable: true,
        },
        {
          name: "--dialect",
          description: "The SQL dialect to render the query as",
          args: {
            name: "dialect",
          },
        },
        {
          name: "--no-format",
          description: "Disable fancy formatting of the query",
        },
        ...formatOptions,
      ],
      args: {
        name: "model",
      },
    },
    {
      name: "evaluate",
      description:
        "Evaluate a model and return a dataframe with a default limit of 1000",
      options: [
        ...timeOptions,
        {
          name: "--limit",
          description:
            "The number of rows which the query should be limited to",
          args: {
            name: "limit",
          },
        },
      ],
      args: {
        name: "model",
      },
    },
    {
      name: "format",
      description: "Format all SQL models and audits",
      options: [
        {
          name: ["-t", "--transpile"],
          description: "Transpile project models to the specified dialect",
          args: {
            name: "dialect",
          },
        },
        {
          name: "--check",
          description:
            "Whether or not to check formatting (but not actually format anything)",
        },
        {
          name: "--rewrite-casts",
          description: "Rewrite casts to use the :: syntax",
          exclusiveOn: ["--no-rewrite-casts"],
        },
        {
          name: "--no-rewrite-casts",
          description:
            "Preserve the existing casts, without rewriting them to use the :: syntax",
          exclusiveOn: ["--rewrite-casts"],
        },
        {
          name: "--append-newline",
          description: "Include a newline at the end of each file",
        },
        ...formatOptions,
      ],
      args: {
        name: "paths",
        template: "filepaths",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "diff",
      description:
        "Show the diff between the local state and the target environment",
      args: {
        name: "environment",
      },
    },
    {
      name: "plan",
      description: "Apply local changes to the target environment",
      options: [
        ...timeOptions,
        {
          name: "--create-from",
          description:
            "The environment to create the target environment from if it doesn't exist. Default: prod",
          args: {
            name: "environment",
          },
        },
        {
          name: "--skip-tests",
          description:
            "Skip tests prior to generating the plan if they are defined",
        },
        {
          name: "--test-changed-only",
          description:
            "Run unit tests only for models included in the plan instead of all tests",
        },
        {
          name: "--skip-linter",
          description:
            "Skip linting prior to generating the plan if the linter is enabled",
        },
        {
          name: ["-r", "--restate-model"],
          description:
            "Restate data for specified models and models downstream from the one specified",
          args: {
            name: "model",
          },
          isRepeatable: true,
        },
        {
          name: "--no-gaps",
          description:
            "Ensure that new snapshots have no data gaps when comparing to existing snapshots",
        },
        {
          name: ["--skip-backfill", "--dry-run"],
          description:
            "Skip the backfill step and only create a virtual update for the plan",
        },
        {
          name: "--empty-backfill",
          description:
            "Produce empty backfill; missing intervals are recorded as if they were backfilled",
        },
        {
          name: "--forward-only",
          description: "Create a plan for forward-only changes",
        },
        {
          name: "--allow-destructive-model",
          description:
            "Allow destructive forward-only changes to models whose names match the expression",
          args: {
            name: "model",
          },
          isRepeatable: true,
        },
        {
          name: "--allow-additive-model",
          description:
            "Allow additive forward-only changes to models whose names match the expression",
          args: {
            name: "model",
          },
          isRepeatable: true,
        },
        {
          name: "--effective-from",
          description:
            "The effective date from which to apply forward-only changes on production",
          args: {
            name: "date",
          },
        },
        {
          name: "--no-prompts",
          description:
            "Disable interactive prompts for the backfill time range",
        },
        {
          name: "--auto-apply",
          description: "Automatically apply the new plan after creation",
        },
        {
          name: "--no-auto-categorization",
          description: "Disable automatic change categorization",
        },
        {
          name: "--include-unmodified",
          description: "Include unmodified models in the target environment",
        },
        selectModelOption(
          "Select specific model changes that should be included in the plan"
        ),
        {
          name: "--backfill-model",
          description:
            "Backfill only the models whose names match the expression",
          args: {
            name: "model",
          },
          isRepeatable: true,
        },
        {
          name: "--no-diff",
          description: "Hide text differences for changed models",
        },
        {
          name: "--run",
          description:
            "Run latest intervals as part of the plan application (prod environment only)",
        },
        {
          name: "--enable-preview",
          description:
            "Enable preview for forward-only models when targeting a development environment",
        },
        {
          name: "--diff-rendered",
          description:
            "Output text differences for the rendered versions of the models and standalone audits",
        },
        {
          name: "--explain",
          description: "Explain the plan instead of applying it",
        },
        {
          name: "--ignore-cron",
          description:
            "Run all missing intervals, ignoring individual cron schedules. Only applies if --run is set",
          dependsOn: ["--run"],
        },
        {
          name: "--min-intervals",
          description:
            "For every model, ensure at least this many intervals are covered by a missing intervals check",
          args: {
            name: "count",
          },
        },
        verboseOption,
      ],
      args: {
        name: "environment",
        isOptional: true,
      },
    },
    {
      name: "run",
      description: "Evaluate missing intervals for the target environment",
      options: [
        startOption,
        endOption,
        {
          name: "--skip-janitor",
          description: "Skip the janitor task",
        },
        {
          name: "--ignore-cron",
          description:
            "Run for all missing intervals, ignoring individual cron schedules",
        },
        selectModelOption(
          "Select specific models to run. Note: this always includes upstream dependencies"
        ),
        {
          name: "--exit-on-env-update",
          description:
            "Exit with specified code if the run is interrupted by an update to the target environment",
          args: {
            name: "code",
          },
        },
        {
          name: "--no-auto-upstream",
          description:
            "Do not automatically include upstream models. Only applicable when --select-model is used",
          dependsOn: ["--select-model"],
        },
      ],
      args: {
        name: "environment",
        isOptional: true,
      },
    },
    {
      name: "invalidate",
      description:
        "Invalidate the target environment, forcing its removal during the next run of the janitor process",
      options: [
        {
          name: ["-s", "--sync"],
          description:
            "Wait for the environment to be deleted before returning",
        },
      ],
      args: {
        name: "environment",
      },
    },
    {
      name: "janitor",
      description: "Run the janitor process on-demand",
      options: [
        {
          name: "--ignore-ttl",
          description:
            "Cleanup snapshots that are not referenced in any environment, regardless of when they're set to expire",
        },
        {
          name: "--force-delete",
          description:
            "Delete expired environment and snapshot state records even when the physical table or view drops fail",
        },
        {
          name: ["-e", "--environment"],
          description: "Scope cleanup to a single expired environment",
          args: {
            name: "environment",
          },
        },
      ],
    },
    {
      name: "destroy",
      description:
        "Remove all project resources: engine-managed objects, state tables, the SQLMesh cache and build artifacts",
    },
    {
      name: "dag",
      description: "Render the DAG as an html file",
      options: [
        selectModelOption("Select specific models to include in the dag"),
      ],
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "create_test",
      description: "Generate a unit test fixture for a given model",
      options: [
        {
          name: ["-q", "--query"],
          description:
            "Queries that will be used to generate data for the model's dependencies",
          args: [
            {
              name: "name",
            },
            {
              name: "query",
            },
          ],
          isRepeatable: true,
        },
        {
          name: ["-o", "--overwrite"],
          description:
            "When true, the fixture file will be overwritten in case it already exists",
        },
        {
          name: ["-v", "--var"],
          description:
            "Key-value pairs that will define variables needed by the model",
          args: [
            {
              name: "key",
            },
            {
              name: "value",
            },
          ],
          isRepeatable: true,
        },
        {
          name: ["-p", "--path"],
          description:
            "The file path corresponding to the fixture, relative to the test directory",
          args: {
            name: "path",
          },
        },
        {
          name: ["-n", "--name"],
          description: "The name of the test that will be created",
          args: {
            name: "name",
          },
        },
        {
          name: "--include-ctes",
          description: "When true, CTE fixtures will also be generated",
        },
      ],
      args: {
        name: "model",
      },
    },
    {
      name: "test",
      description: "Run model unit tests",
      options: [
        {
          name: "-k",
          description: "Only run tests that match the pattern of substring",
          args: {
            name: "pattern",
          },
          isRepeatable: true,
        },
        verboseOption,
        {
          name: "--preserve-fixtures",
          description:
            "Preserve the fixture tables in the testing database, useful for debugging",
        },
        selectModelOption("Select specific models to run unit tests for"),
        localOption(
          "Run tests using only locally loaded project files without loading state"
        ),
      ],
      args: {
        name: "tests",
        description:
          "Test files, file.yaml::test_name selectors, or model files",
        template: "filepaths",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "audit",
      description: "Run audits for the target model(s)",
      options: [
        {
          name: "--model",
          description: "A model to audit",
          args: {
            name: "model",
          },
          isRepeatable: true,
        },
        ...timeOptions,
      ],
    },
    {
      name: "check_intervals",
      description:
        "Show missing intervals in an environment, respecting signals",
      options: [
        {
          name: "--no-signals",
          description: "Disable signal checks and only show missing intervals",
        },
        selectModelOption(
          "Select specific models to show missing intervals for"
        ),
        startOption,
        endOption,
      ],
      args: {
        name: "environment",
        isOptional: true,
      },
    },
    {
      name: "fetchdf",
      description: "Run a SQL query and display the results",
      args: {
        name: "sql",
      },
    },
    {
      name: "info",
      description:
        "Print information about a SQLMesh project, including model and macro counts and a connection test",
      options: [
        {
          name: "--skip-connection",
          description: "Skip the connection test",
        },
        verboseOption,
      ],
    },
    {
      name: "ui",
      description:
        "Start a browser-based SQLMesh UI (deprecated: use the SQLMesh VSCode extension)",
      deprecated: true,
      options: [
        {
          name: "--host",
          description: "Bind socket to this host",
          args: {
            name: "host",
            default: "127.0.0.1",
          },
        },
        {
          name: "--port",
          description: "Bind socket to this port",
          args: {
            name: "port",
            default: "8000",
          },
        },
        {
          name: "--mode",
          description: "Mode to start the UI in",
          args: {
            name: "mode",
            suggestions: ["ide", "catalog", "docs", "plan"],
            default: "ide",
          },
        },
      ],
    },
    {
      name: "migrate",
      description: "Migrate SQLMesh to the current running version",
    },
    {
      name: "rollback",
      description: "Rollback SQLMesh to the previous migration",
    },
    {
      name: "create_external_models",
      description: "Create a schema file containing external model schemas",
      options: [
        {
          name: "--strict",
          description:
            "Raise an error if the external model is missing in the database",
        },
      ],
    },
    {
      name: "table_diff",
      description:
        "Show the diff between two tables or a selection of models when they are specified",
      options: [
        {
          name: ["-o", "--on"],
          description:
            "The column to join on. The model grain will be used if not specified",
          args: {
            name: "column",
          },
          isRepeatable: true,
        },
        {
          name: ["-s", "--skip-columns"],
          description:
            "The column(s) to skip when comparing the source and target table",
          args: {
            name: "column",
          },
          isRepeatable: true,
        },
        {
          name: "--where",
          description: "An optional where statement to filter results",
          args: {
            name: "condition",
          },
        },
        {
          name: "--limit",
          description: "The limit of the sample dataframe",
          args: {
            name: "limit",
            default: "20",
          },
        },
        {
          name: "--show-sample",
          description: "Show a sample of the rows that differ",
        },
        {
          name: ["-d", "--decimals"],
          description:
            "The number of decimal places to keep when comparing floating point columns",
          args: {
            name: "decimals",
            default: "3",
          },
        },
        {
          name: "--skip-grain-check",
          description:
            "Disable the check for a primary key (grain) that is missing or is not unique",
        },
        {
          name: "--warn-grain-check",
          description:
            "Warn if any selected model is missing a grain, and compute diffs for the remaining models",
        },
        {
          name: "--temp-schema",
          description:
            "Schema used for temporary tables (CATALOG.SCHEMA or SCHEMA). Default: sqlmesh_temp",
          args: {
            name: "schema",
          },
        },
        {
          name: ["-m", "--select-model"],
          description:
            "Models to data diff; wildcards, 'model+' and 'git:branch' selectors are supported",
          args: {
            name: "model",
          },
          isRepeatable: true,
        },
        {
          name: "--schema-diff-ignore-case",
          description:
            "Ignore the case of column names when matching between the two schemas",
        },
      ],
      args: [
        {
          name: "source:target",
        },
        {
          name: "model",
          isOptional: true,
        },
      ],
    },
    {
      name: "rewrite",
      description:
        "Rewrite a SQL expression with semantic references into an executable query",
      options: [
        {
          name: "--read",
          description: "The input dialect of the sql string",
          args: {
            name: "dialect",
          },
        },
        {
          name: "--write",
          description: "The output dialect of the sql string",
          args: {
            name: "dialect",
          },
        },
      ],
      args: {
        name: "sql",
      },
    },
    {
      name: "clean",
      description: "Clears the SQLMesh cache and any build artifacts",
    },
    {
      name: "table_name",
      description: "Prints the name of the physical table for the given model",
      options: [
        {
          name: ["--environment", "--env"],
          description: "The environment to source the model version from",
          args: {
            name: "environment",
          },
        },
        {
          name: "--prod",
          description:
            "Return the name of the physical table that will be used in production for the model version promoted in the target environment",
        },
      ],
      args: {
        name: "model_name",
      },
    },
    {
      name: "dlt_refresh",
      description:
        "Attaches to a DLT pipeline with the option to update specific or all missing tables in the SQLMesh project",
      options: [
        {
          name: ["-t", "--table"],
          description:
            "The specific dlt tables to refresh in the SQLMesh models",
          args: {
            name: "table",
          },
          isRepeatable: true,
        },
        {
          name: ["-f", "--force"],
          description:
            "If set, existing models are overwritten with the new DLT tables",
        },
        {
          name: "--dlt-path",
          description:
            "The DLT pipelines working directory (by default ~/.dlt/pipelines)",
          args: {
            name: "path",
            template: "folders",
          },
        },
      ],
      args: {
        name: "pipeline",
      },
    },
    {
      name: "environments",
      description:
        "Prints the list of SQLMesh environments with its expiry datetime",
    },
    {
      name: "lint",
      description: "Run the linter for the target model(s)",
      options: [
        {
          name: ["--models", "--model"],
          description:
            "A model to lint. If no models are specified, every model will be linted",
          args: {
            name: "model",
          },
          isRepeatable: true,
        },
        {
          name: "--use-project-index",
          description:
            "Use the persistent project index; with --model, only the selected models and their upstream dependencies are loaded",
        },
        localOption(
          "Lint using only locally loaded project files without loading state"
        ),
      ],
    },
    {
      name: "state",
      description: "Commands for interacting with state",
      requiresSubcommand: true,
      subcommands: [
        {
          name: "export",
          description: "Export the state database to a file",
          options: [
            {
              name: ["-o", "--output-file"],
              description: "Path to write the state export to",
              args: {
                name: "file",
                template: "filepaths",
              },
              isRequired: true,
            },
            {
              name: "--environment",
              description: "Name of environment to export",
              args: {
                name: "environment",
              },
              isRepeatable: true,
              exclusiveOn: ["--local"],
            },
            {
              name: "--local",
              description:
                "Export local state only. Note that the resulting file will not be importable",
              exclusiveOn: ["--environment"],
            },
            {
              name: "--no-confirm",
              description:
                "Do not prompt for confirmation before exporting existing state",
            },
          ],
        },
        {
          name: "import",
          description:
            "Import a state export file back into the state database",
          options: [
            {
              name: ["-i", "--input-file"],
              description: "Path to the state file",
              args: {
                name: "file",
                template: "filepaths",
              },
              isRequired: true,
            },
            {
              name: "--replace",
              description:
                "Clear the remote state before loading the file. If omitted, a merge is performed instead",
            },
            {
              name: "--no-confirm",
              description:
                "Do not prompt for confirmation before updating existing state",
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
