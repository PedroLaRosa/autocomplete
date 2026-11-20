// Apache Airflow v3.4.0 (PyPI "latest", released 2026-11-06; verified 2026-11-20).
// Source (read statically, not run): tag 3.4.0 of apache/airflow,
// airflow-core/src/airflow/cli/cli_config.py, plus the provider CLI definitions
// (providers/*/cli/definition.py) at each provider's latest PyPI release tag:
// celery 4.0.0, cncf.kubernetes 11.0.0, fab 3.11.0, edge3 5.1.1, amazon 9.40.0
// (aws-auth-manager) and keycloak 0.12.0 (keycloak-auth-manager). Those are the
// only providers with a `cli:` section in provider.yaml.
import { keyValueList, valueList } from "@tabsmith/autocomplete-generators";

const opt = (
  name: string | string[],
  description: string,
  args?: string | Fig.Arg
): Fig.Option => ({
  name,
  description,
  ...(args && { args: typeof args === "string" ? { name: args } : args }),
});

const file = (name: string): Fig.Arg => ({ name, template: "filepaths" });
const date: Fig.Arg = {
  name: "date",
  description: "YYYY-MM-DD or ISO 8601 datetime",
};

// Shared positionals
const dagId: Fig.Arg = { name: "dag_id", description: "The id of the dag" };
const taskId: Fig.Arg = { name: "task_id", description: "The id of the task" };
const dateOrRunId: Fig.Arg = {
  name: "logical_date_or_run_id",
  description: "The logical date of the DAG or run_id of the DAGRun",
};
const connId: Fig.Arg = { name: "conn_id", description: "Connection id" };
const poolName: Fig.Arg = { name: "NAME", description: "Pool name" };
const varKey: Fig.Arg = { name: "key", description: "Variable key" };
const teamName: Fig.Arg = { name: "name", description: "Team name" };
const dbManagerPath: Fig.Arg = {
  name: "import_path",
  description: "The import path of the database manager to use",
};

// Shared options
const verbose = opt(["-v", "--verbose"], "Make logging output more verbose");
const yes = opt(["-y", "--yes"], "Do not prompt to confirm. Use with care!");
const output = opt(["-o", "--output"], "Output format (default: table)", {
  name: "format",
  suggestions: ["table", "json", "yaml", "plain"],
});
const color = opt("--color", "Do emit colored output (default: auto)", {
  name: "color",
  suggestions: ["on", "off", "auto"],
});
const bundleName: Fig.Option = {
  ...opt(
    ["-B", "--bundle-name"],
    "The name of the DAG bundle to use; may be provided more than once",
    "bundle_name"
  ),
  isRepeatable: true,
};
const mapIndex = opt("--map-index", "Mapped task index", "map_index");
const startDate = opt(["-s", "--start-date"], "Override start_date", date);
const endDate = opt(["-e", "--end-date"], "Override end_date", date);
const onlyFailed = opt(["-f", "--only-failed"], "Only failed jobs");
const onlyRunning = opt(["-r", "--only-running"], "Only running jobs");
const conf = opt(
  ["-c", "--conf"],
  "JSON string that gets pickled into the DagRun's conf attribute",
  "conf"
);
const listLocal = opt(
  ["-l", "--local"],
  "Shows local parsed DAGs and their import errors, ignores content serialized in DB"
);
const save = opt(
  ["-s", "--save"],
  "Saves the result to the indicated file",
  file("filepath")
);
const imgcat = opt("--imgcat", "Displays graph using the imgcat tool");
const dev = opt(
  ["-d", "--dev"],
  "Start in development mode with hot-reload enabled"
);
const skipServeLogs = opt(
  ["-s", "--skip-serve-logs"],
  "Don't start the serve logs process along with the workers"
);
const numRuns = opt(
  ["-n", "--num-runs"],
  "Set the number of runs to execute before exiting",
  "num_runs"
);
const pid = opt("--pid", "PID file location", {
  ...file("pid"),
  isOptional: true,
});
const daemonOpts: Fig.Option[] = [
  pid,
  opt(["-D", "--daemon"], "Daemonize instead of running in the foreground"),
  opt("--stdout", "Redirect stdout to this file", file("stdout")),
  opt("--stderr", "Redirect stderr to this file", file("stderr")),
  opt(["-l", "--log-file"], "Location of the log file", file("log_file")),
];
const showValues = (what: string) =>
  opt("--show-values", `Show ${what} values. By default only names are listed`);
const hideSensitive = opt(
  "--hide-sensitive",
  "When used with --show-values, mask sensitive values"
);
const dryRun = opt("--dry-run", "Perform a dry run");

const dbTables = opt(
  ["-t", "--tables"],
  "Table names to perform maintenance on (comma-separated)",
  {
    name: "tables",
    generators: valueList({
      values: [
        "_xcom_archive",
        "asset_event",
        "callback",
        "celery_taskmeta",
        "celery_tasksetmeta",
        "connection_test_request",
        "dag",
        "dag_run",
        "dag_version",
        "deadline",
        "import_error",
        "job",
        "log",
        "partitioned_asset_key_log",
        "revoked_token",
        "session",
        "task_instance",
        "task_reschedule",
        "task_state_store",
        "trigger",
        "xcom_v1",
        "xcom_v2",
      ],
    }),
  }
);

// Migrations (db, db-manager, fab-db)
const sqlOnly = opt(
  ["-s", "--show-sql-only"],
  "Don't actually run migrations; just print out sql scripts for offline migration"
);
const fromRevision = opt(
  "--from-revision",
  "If generating sql, may supply a *from* Alembic revision",
  "revision"
);
const fromVersion = opt(
  "--from-version",
  "If generating sql, may supply a *from* version",
  "version"
);
const useMigrationFiles = opt(
  ["-m", "--use-migration-files"],
  "Use migration files to create the database instead of the ORM"
);
const migrateOpts: Fig.Option[] = [
  opt(
    ["-r", "--to-revision"],
    "Only run migrations up to and including this Alembic revision",
    "revision"
  ),
  opt(["-n", "--to-version"], "The airflow version to upgrade to", "version"),
  sqlOnly,
  fromRevision,
  fromVersion,
  useMigrationFiles,
  verbose,
];
const downgradeOpts: Fig.Option[] = [
  opt(
    ["-r", "--to-revision"],
    "The Alembic revision to downgrade to",
    "revision"
  ),
  opt(
    ["-n", "--to-version"],
    "Only run migrations up to this version",
    "version"
  ),
  sqlOnly,
  yes,
  fromRevision,
  fromVersion,
  verbose,
];
const resetOpts: Fig.Option[] = [
  yes,
  opt(["-s", "--skip-init"], "Only remove tables; do not perform db init"),
  useMigrationFiles,
  verbose,
];

const outputVerbose: Fig.Option[] = [output, verbose];
const providerList = (name: string, description: string): Fig.Subcommand => ({
  name,
  description,
  options: outputVerbose,
});

// Config lint/update
const configFilter = (verb: string): Fig.Option[] => [
  opt("--section", `The section name(s) to ${verb}`, "sections"),
  opt("--option", `The option name(s) to ${verb}`, "options"),
  opt("--ignore-section", "The section name(s) to ignore", "sections"),
  opt("--ignore-option", "The option name(s) to ignore", "options"),
  verbose,
];

// Celery provider
const celeryHostname: Fig.Option = {
  ...opt(
    ["-H", "--celery-hostname"],
    "Specify the full celery hostname, e.g. celery@hostname",
    "hostname"
  ),
  isRequired: true,
};
const requiredQueues: Fig.Option = {
  ...opt(
    ["-q", "--queues"],
    "Comma delimited list of queues to serve",
    "queues"
  ),
  isRequired: true,
};

// Kubernetes provider
const kubernetesTeam = opt(
  "--team",
  "Team name for multi-team configuration",
  "team"
);

// Edge provider
const edgeHostname = opt(
  ["-H", "--edge-hostname"],
  "Set the hostname of worker if you have multiple workers on a single machine",
  "hostname"
);
const requiredEdgeHostname: Fig.Option = {
  ...edgeHostname,
  isRequired: true,
};
const requiredEdgeConcurrency: Fig.Option = {
  ...opt(
    ["-c", "--concurrency"],
    "The number of worker processes. Must be a positive integer",
    "concurrency"
  ),
  isRequired: true,
};
const requiredEdgeComments: Fig.Option = {
  ...opt(
    ["-c", "--comments"],
    "Maintenance comments to report reason",
    "comments"
  ),
  isRequired: true,
};
const requiredEdgeQueues: Fig.Option = {
  ...opt(
    ["-q", "--queues"],
    "Comma delimited list of queues to add or remove",
    "queues"
  ),
  isRequired: true,
};

// Keycloak provider
const keycloakAuth: Fig.Option[] = [
  opt(
    "--username",
    "Username associated to the user used to create resources",
    "username"
  ),
  opt(
    "--password",
    "Password associated to the user used to create resources. If not provided, you will be prompted to enter it",
    { name: "password", isOptional: true }
  ),
  opt(
    "--user-realm",
    "Realm name where the user used to create resources is (default: master)",
    "realm"
  ),
  opt(
    "--client-id",
    "ID of the client used to create resources (default: admin-cli)",
    "client_id"
  ),
];
const keycloakTeams = opt(
  "--teams",
  "Comma-separated list of team names",
  "teams"
);
const keycloakDryRun = opt(
  "--dry-run",
  "Perform a dry run without creating any resources"
);
const keycloakTeam: Fig.Arg = { name: "team", description: "Team name" };

// FAB provider
const username = opt(["-u", "--username"], "Username of the user", "username");
const email = opt(["-e", "--email"], "Email of the user", "email");
const role: Fig.Option = {
  ...opt(["-r", "--role"], "Role of the user", {
    name: "role",
    suggestions: ["Admin", "User", "Op", "Viewer", "Public"],
  }),
  isRequired: true,
};
const password = opt(
  ["-p", "--password"],
  "Password of the user, required to create a user without --use-random-password",
  "password"
);
const randomPassword = opt(
  "--use-random-password",
  "Do not prompt for password. Use random string instead"
);
const roleNames: Fig.Arg = {
  name: "role",
  description: "The name of a role",
  isVariadic: true,
  isOptional: true,
};
const permResource: Fig.Option = {
  ...opt(["-r", "--resource"], "The name of permissions", {
    name: "resource",
    isVariadic: true,
  }),
  isRequired: true,
};
const permAction = opt(["-a", "--action"], "The action of permissions", {
  name: "action",
  isVariadic: true,
});

const completionSpec: Fig.Spec = {
  name: "airflow",
  description: "Apache Airflow command-line interface",
  subcommands: [
    {
      name: "api-server",
      description: "Start an Airflow API server instance",
      options: [
        opt(
          ["-p", "--port"],
          "The port on which to run the API server",
          "port"
        ),
        opt(
          ["-w", "--workers"],
          "Number of workers to run on the API server",
          "workers"
        ),
        opt(
          ["-t", "--worker-timeout"],
          "The timeout for waiting on API server workers",
          "seconds"
        ),
        opt(
          ["-H", "--host"],
          "Set the host on which to run the API server",
          "host"
        ),
        ...daemonOpts,
        opt(
          "--log-config",
          "Path to the logging configuration file for the uvicorn server",
          file("log_config")
        ),
        opt("--apps", "Applications to run (comma-separated, default: all)", {
          name: "apps",
          generators: valueList({ values: ["core", "execution", "all"] }),
        }),
        opt(
          "--ssl-cert",
          "Path to the SSL certificate for the webserver",
          file("ssl_cert")
        ),
        opt(
          "--ssl-key",
          "Path to the key to use with the SSL certificate",
          file("ssl_key")
        ),
        opt("--ssl-ca-file", "Path to the SSL CA file", file("ssl_ca_file")),
        opt("--ssl-cert-reqs", "Set certificate verification options", {
          name: "reqs",
          suggestions: ["none", "optional", "required"],
        }),
        opt(
          "--ssl-ciphers",
          "OpenSSL cipher list to use when SSL is enabled",
          "ciphers"
        ),
        dev,
        opt(
          "--proxy-headers",
          "Enable X-Forwarded-Proto, X-Forwarded-For, X-Forwarded-Port to populate remote address info"
        ),
      ],
    },
    {
      name: "assets",
      description: "Manage assets",
      subcommands: [
        {
          name: "list",
          description: "List assets",
          options: [
            opt("--alias", "Show asset alias"),
            ...outputVerbose,
            opt("--columns", "List of columns to render", {
              name: "columns",
              generators: valueList({
                values: ["name", "uri", "group", "extra"],
              }),
            }),
          ],
        },
        {
          name: "details",
          description: "Show asset details",
          options: [
            opt("--alias", "Show asset alias"),
            opt("--name", "Asset name", "name"),
            opt("--uri", "Asset URI", "uri"),
            ...outputVerbose,
          ],
        },
        {
          name: "materialize",
          description: "Materialize an asset",
          options: [
            opt("--name", "Asset name", "name"),
            opt("--uri", "Asset URI", "uri"),
            ...outputVerbose,
          ],
        },
      ],
    },
    {
      name: "aws-auth-manager",
      description:
        "Manage resources used by AWS auth manager (Amazon provider only)",
      subcommands: [
        {
          name: "init-avp",
          description:
            "Initialize Amazon Verified resources to be used by AWS manager",
          options: [
            opt(
              "--policy-store-description",
              "Policy store description (default: Airflow)",
              "description"
            ),
            dryRun,
          ],
        },
        {
          name: "update-avp-schema",
          description:
            "Update Amazon Verified permissions policy store schema to the latest version",
          options: [
            opt("--policy-store-id", "Policy store ID", "policy_store_id"),
            dryRun,
          ],
        },
      ],
    },
    {
      name: "backfill",
      description: "Manage backfills",
      subcommands: [
        {
          name: "create",
          description: "Create a backfill for a dag",
          options: [
            {
              ...opt("--dag-id", "The dag to backfill", "dag_id"),
              isRequired: true,
            },
            {
              ...opt("--from-date", "Backfill window start (inclusive)", date),
              isRequired: true,
            },
            {
              ...opt("--to-date", "Backfill window end (inclusive)", date),
              isRequired: true,
            },
            opt("--dag-run-conf", "JSON dag run configuration", "json"),
            opt(
              "--run-backwards",
              "Run tasks from the most recent logical date first"
            ),
            opt(
              "--max-active-runs",
              "Max active runs for this backfill",
              "count"
            ),
            opt(
              "--reprocess-behavior",
              "Which Dag runs to create (default: none)",
              {
                name: "behavior",
                suggestions: [
                  { name: "none", description: "Missing runs" },
                  { name: "failed", description: "Missing and errored runs" },
                  { name: "completed", description: "All runs" },
                ],
              }
            ),
            {
              ...opt(
                "--run-on-latest-version",
                "Run tasks using the latest bundle version (experimental)"
              ),
              exclusiveOn: ["--no-run-on-latest-version"],
            },
            {
              ...opt(
                "--no-run-on-latest-version",
                "Run tasks using the bundle version of the original Dag run"
              ),
              exclusiveOn: ["--run-on-latest-version"],
            },
            dryRun,
          ],
        },
      ],
    },
    {
      name: "celery",
      description: "Celery components (CeleryExecutor only)",
      subcommands: [
        {
          name: "worker",
          description: "Start a Celery worker node",
          options: [
            opt(
              ["-q", "--queues"],
              "Comma delimited list of queues to serve",
              "queues"
            ),
            opt(
              ["-c", "--concurrency"],
              "The number of worker processes",
              "concurrency"
            ),
            opt(
              ["-H", "--celery-hostname"],
              "Set the hostname of celery worker if you have multiple workers on a single machine",
              "hostname"
            ),
            opt(
              ["-t", "--team"],
              "Team name for team-specific multi-team configuration",
              "team"
            ),
            ...daemonOpts,
            opt(
              ["-u", "--umask"],
              "Set the umask of celery worker in daemon mode",
              "umask"
            ),
            opt(
              ["-a", "--autoscale"],
              "Minimum and Maximum number of worker to autoscale",
              "max,min"
            ),
            skipServeLogs,
            opt(
              "--without-mingle",
              "Don't synchronize with other workers at start-up"
            ),
            opt("--without-gossip", "Don't subscribe to other workers events"),
            verbose,
          ],
        },
        {
          name: "flower",
          description: "Start a Celery Flower",
          options: [
            opt(
              ["-H", "--hostname"],
              "Set the hostname on which to run the server",
              "hostname"
            ),
            opt(
              ["-p", "--port"],
              "The port on which to run the server",
              "port"
            ),
            opt(
              ["-c", "--flower-conf"],
              "Configuration file for flower",
              file("flower_conf")
            ),
            opt(["-u", "--url-prefix"], "URL prefix for Flower", "url_prefix"),
            opt(
              ["-A", "--basic-auth"],
              "Securing Flower with Basic Authentication. Accepts user:password pairs separated by a comma",
              {
                name: "basic_auth",
                generators: keyValueList({
                  separator: ":",
                  keys: ["user"],
                  values: ["password"],
                  cache: true,
                }),
              }
            ),
            opt(["-a", "--broker-api"], "Broker API", "broker_api"),
            ...daemonOpts,
            verbose,
          ],
        },
        {
          name: "stop",
          description: "Stop the Celery worker gracefully",
          options: [pid, verbose],
        },
        {
          name: "list-workers",
          description: "List active celery workers",
          options: [output],
        },
        {
          name: "shutdown-worker",
          description: "Request graceful shutdown of celery workers",
          options: [celeryHostname],
        },
        {
          name: "shutdown-all-workers",
          description: "Request graceful shutdown of all active celery workers",
          options: [yes],
        },
        {
          name: "add-queue",
          description: "Subscribe Celery worker to specified queues",
          options: [requiredQueues, celeryHostname],
        },
        {
          name: "remove-queue",
          description: "Unsubscribe Celery worker from specified queues",
          options: [requiredQueues, celeryHostname],
        },
        {
          name: "remove-all-queues",
          description: "Unsubscribe Celery worker from all its active queues",
          options: [celeryHostname],
        },
      ],
    },
    {
      name: "cheat-sheet",
      description: "Display cheat sheet",
      options: [verbose],
    },
    {
      name: "config",
      description: "View configuration",
      subcommands: [
        {
          name: "get-value",
          description: "Print the value of the configuration",
          args: [
            { name: "section", description: "The section name" },
            { name: "option", description: "The option name" },
          ],
          options: [verbose],
        },
        {
          name: "list",
          description: "List options for the configuration",
          options: [
            opt("--section", "The section name", "section"),
            color,
            opt(
              ["-d", "--include-descriptions"],
              "Show descriptions for the configuration variables"
            ),
            opt(
              ["-e", "--include-examples"],
              "Show examples for the configuration variables"
            ),
            opt(
              ["-s", "--include-sources"],
              "Show source of the configuration variable"
            ),
            opt(
              ["-V", "--include-env-vars"],
              "Show environment variable for each option"
            ),
            opt(
              ["-c", "--comment-out-everything"],
              "Comment out all configuration options"
            ),
            opt(
              ["-p", "--exclude-providers"],
              "Exclude provider configuration (they are included by default)"
            ),
            opt(
              ["-a", "--defaults"],
              "Show only defaults, commented out, without local configuration"
            ),
            verbose,
            {
              ...opt(
                "--hide-sensitive",
                "When used with --show-values, hide sensitive values"
              ),
              dependsOn: ["--show-values"],
            },
            showValues("configuration"),
          ],
        },
        {
          name: "lint",
          description:
            "Lint options for the configuration changes while migrating from Airflow 2.x to 3.0",
          options: configFilter("lint"),
        },
        {
          name: "update",
          description:
            "Update options for the configuration changes while migrating from Airflow 2.x to 3.0",
          options: [
            ...configFilter("update"),
            opt(
              "--fix",
              "Apply the configuration changes instead of performing a dry run"
            ),
            opt(
              "--all-recommendations",
              "Include non-breaking (recommended) changes along with breaking ones"
            ),
          ],
        },
      ],
    },
    {
      name: "connections",
      description: "Manage connections",
      subcommands: [
        {
          name: "add",
          description: "Add a connection",
          args: connId,
          options: [
            opt(
              "--conn-uri",
              "Connection URI, required to add a connection without conn_type",
              "uri"
            ),
            opt(
              "--conn-json",
              "Connection JSON, required to add a connection using JSON representation",
              "json"
            ),
            opt("--conn-extra", "Connection `Extra` field", "extra"),
            opt(
              "--conn-type",
              "Connection type, required to add a connection without conn_uri",
              "type"
            ),
            opt("--conn-description", "Connection description", "description"),
            opt("--conn-host", "Connection host", "host"),
            opt("--conn-login", "Connection login", "login"),
            opt("--conn-password", "Connection password", "password"),
            opt("--conn-schema", "Connection schema", "schema"),
            opt("--conn-port", "Connection port", "port"),
          ],
        },
        {
          name: "create-default-connections",
          description:
            "Creates all the default connections from all the providers",
          options: [verbose],
        },
        {
          name: "delete",
          description: "Delete a connection",
          args: connId,
          options: [color, verbose],
        },
        {
          name: "export",
          description: "Export all connections",
          args: { ...file("file"), suggestions: ["-"] },
          options: [
            {
              ...opt("--format", "File format to use for the export", {
                name: "format",
                suggestions: ["json", "yaml", "env"],
              }),
              deprecated: { description: "Use --file-format instead" },
            },
            opt("--file-format", "File format for the export", {
              name: "format",
              suggestions: ["json", "yaml", "env"],
            }),
            opt(
              "--serialization-format",
              "How connections are serialized in .env exports (default: uri)",
              { name: "format", suggestions: ["json", "uri"] }
            ),
            verbose,
          ],
        },
        {
          name: "get",
          description: "Get a connection",
          args: connId,
          options: [color, output, verbose],
        },
        {
          name: "import",
          description: "Import connections from a json, yaml or env file",
          args: file("file"),
          options: [
            opt(
              "--overwrite",
              "Overwrite existing entries if a conflict occurs"
            ),
            verbose,
          ],
        },
        {
          name: "list",
          description: "List connections",
          options: [
            output,
            showValues("connection"),
            { ...hideSensitive, dependsOn: ["--show-values"] },
            verbose,
          ],
        },
        {
          name: "test",
          description: "Test a connection",
          args: connId,
          options: [verbose],
        },
      ],
    },
    {
      name: "dag-processor",
      description: "Start a dag processor instance",
      options: [...daemonOpts, bundleName, numRuns, verbose, dev],
    },
    {
      name: "dags",
      description: "Manage DAGs",
      subcommands: [
        {
          name: "clear",
          description:
            "Clear Dag runs selected by run_id, partition_key, or a partition_date window",
          args: dagId,
          options: [
            {
              ...opt(
                "--run-id",
                "Clear the Dag run with this run_id",
                "run_id"
              ),
              exclusiveOn: [
                "--partition-key",
                "--partition-date-start",
                "--partition-date-end",
              ],
            },
            {
              ...opt(
                "--partition-key",
                "Clear all Dag runs whose partition_key matches this exact value",
                "key"
              ),
              exclusiveOn: [
                "--run-id",
                "--partition-date-start",
                "--partition-date-end",
              ],
            },
            opt(
              "--partition-date-start",
              "Inclusive lower bound of the partition_date window",
              date
            ),
            opt(
              "--partition-date-end",
              "Inclusive upper bound of the partition_date window",
              date
            ),
            onlyFailed,
            onlyRunning,
            yes,
            verbose,
          ],
        },
        {
          name: "delete",
          description: "Delete all DB records related to the specified DAG",
          args: dagId,
          options: [yes, verbose],
        },
        {
          name: "details",
          description: "Get DAG details given a DAG id",
          args: dagId,
          options: outputVerbose,
        },
        {
          name: "list",
          description: "List all the DAGs",
          options: [
            ...outputVerbose,
            opt("--columns", "List of columns to render", {
              name: "columns",
              generators: valueList({
                values: [
                  "dag_id",
                  "fileloc",
                  "owners",
                  "is_paused",
                  "bundle_name",
                  "bundle_version",
                ],
              }),
            }),
            bundleName,
            listLocal,
          ],
        },
        {
          name: "list-import-errors",
          description: "List all the DAGs that have import errors",
          options: [bundleName, ...outputVerbose, listLocal],
        },
        {
          name: "list-jobs",
          description: "List the jobs",
          options: [
            opt(["-d", "--dag-id"], "The id of the dag", "dag_id"),
            opt("--state", "Only list the jobs corresponding to the state", {
              name: "state",
              suggestions: ["running", "success", "restarting", "failed"],
            }),
            opt("--limit", "Return a limited number of records", "limit"),
            ...outputVerbose,
          ],
        },
        {
          name: "list-runs",
          description: "List DAG runs given a DAG id",
          args: dagId,
          options: [
            opt("--no-backfill", "Filter out all the backfill dagruns"),
            opt(
              "--state",
              "Only list the DAG runs corresponding to the state",
              {
                name: "state",
                suggestions: ["queued", "running", "success", "failed"],
              }
            ),
            opt(
              "--limit",
              "Return a limited number of Dag runs, most recent first",
              "limit"
            ),
            ...outputVerbose,
            startDate,
            endDate,
          ],
        },
        {
          name: "next-execution",
          description: "Get the next logical datetimes of a DAG",
          args: dagId,
          options: [
            opt("--table", "Show a table of attributes of next executions"),
            opt("--field", "Show given attribute of next executions", {
              name: "field",
              suggestions: [
                "logical_date",
                "data_interval.start",
                "data_interval.end",
                "partition_key",
                "partition_date",
                "run_after",
              ],
            }),
            opt(
              ["-n", "--num-executions"],
              "The number of next executions to show",
              "count"
            ),
            verbose,
          ],
        },
        {
          name: "pause",
          description: "Pause DAG(s)",
          args: dagId,
          options: [
            opt(
              "--treat-dag-id-as-regex",
              "Treat dag_id as regex instead of an exact string"
            ),
            yes,
            ...outputVerbose,
          ],
        },
        {
          name: "report",
          description: "Show DagBag loading report",
          options: [bundleName, ...outputVerbose],
        },
        {
          name: "reserialize",
          description: "Reserialize DAGs by parsing the DagBag files",
          options: [bundleName, verbose],
        },
        {
          name: "show",
          description: "Displays DAG's tasks with their dependencies",
          args: dagId,
          options: [save, imgcat, verbose],
        },
        {
          name: "show-dependencies",
          description: "Displays DAGs with their dependencies",
          options: [save, imgcat, verbose],
        },
        {
          name: "state",
          description: "Get the status of a dag run",
          args: [dagId, dateOrRunId],
          options: [verbose],
        },
        {
          name: "test",
          description: "Execute one single DagRun",
          args: [
            dagId,
            {
              name: "logical_date",
              description: "The logical date of the DAG",
              isOptional: true,
            },
          ],
          options: [
            bundleName,
            opt(
              ["-f", "--dagfile-path"],
              "Path to the dag file",
              file("dagfile_path")
            ),
            conf,
            opt("--show-dagrun", "Show the diagram for the DAG Run (DOT)"),
            opt(
              "--imgcat-dagrun",
              "Print a diagram for the DAG Run using the imgcat tool"
            ),
            opt(
              "--save-dagrun",
              "Save the diagram for the DAG Run to the indicated file",
              file("filepath")
            ),
            opt(
              "--use-executor",
              "Use the configured executor to test the DAG"
            ),
            verbose,
            opt(
              "--mark-success-pattern",
              "Don't run task_ids matching the regex, mark them as successful instead",
              "regex"
            ),
          ],
        },
        {
          name: "trigger",
          description: "Trigger a new DAG run",
          args: dagId,
          options: [
            opt(["-r", "--run-id"], "Helps to identify this run", "run_id"),
            conf,
            opt(["-l", "--logical-date"], "The logical date of the DAG", date),
            verbose,
            opt(
              "--no-replace-microseconds",
              "Don't zero the microseconds of the logical date"
            ),
            output,
          ],
        },
        {
          name: "unpause",
          description: "Resume paused DAG(s)",
          args: dagId,
          options: [
            opt(
              "--treat-dag-id-as-regex",
              "Treat dag_id as regex instead of an exact string"
            ),
            yes,
            ...outputVerbose,
          ],
        },
      ],
    },
    {
      name: "db",
      description: "Database operations",
      subcommands: [
        {
          name: "check",
          description: "Check if the database can be reached",
          options: [
            verbose,
            opt("--retry", "Retry database check upon failure", "count"),
            opt(
              "--retry-delay",
              "Wait time between retries in seconds",
              "seconds"
            ),
          ],
        },
        {
          name: "check-migrations",
          description: "Check if migrations have finished",
          options: [
            opt(
              ["-t", "--migration-wait-timeout"],
              "Timeout to wait for db to migrate",
              "seconds"
            ),
            verbose,
          ],
        },
        {
          name: "clean",
          description: "Purge old records in metastore tables",
          options: [
            dbTables,
            dryRun,
            {
              ...opt(
                "--clean-before-timestamp",
                "The date or timestamp before which data should be purged",
                "timestamp"
              ),
              isRequired: true,
            },
            verbose,
            yes,
            opt(
              "--skip-archive",
              "Don't preserve purged records in an archive table"
            ),
            opt(
              "--batch-size",
              "Maximum number of rows to delete or archive in a single transaction",
              "size"
            ),
            opt(
              "--asset-ids",
              "Only clean events for these comma-separated asset IDs; requires --tables asset_event",
              "ids"
            ),
            opt(
              "--dag-ids",
              "Only cleanup data related to the given dag_ids",
              "dag_ids"
            ),
            opt(
              "--exclude-dag-ids",
              "Avoid cleaning up data related to the given dag_ids",
              "dag_ids"
            ),
            opt(
              "--error-on-cleanup-failure",
              "Exit with a non-zero code if any table cleanup failed"
            ),
          ],
        },
        {
          name: "downgrade",
          description: "Downgrade the schema of the metadata database",
          options: downgradeOpts,
        },
        {
          name: "drop-archived",
          description:
            "Drop archived tables created through the db clean command",
          options: [dbTables, yes],
        },
        {
          name: "export-archived",
          description: "Export archived data from the archive tables",
          options: [
            opt(
              "--export-format",
              "The file format to export the cleaned data",
              {
                name: "format",
                suggestions: ["csv"],
              }
            ),
            {
              ...opt(
                "--output-path",
                "The path to the output directory to export the cleaned data",
                { name: "dirpath", template: "folders" }
              ),
              isRequired: true,
            },
            opt(
              "--drop-archives",
              "Drop the archive tables after exporting. Use with caution"
            ),
            dbTables,
            yes,
          ],
        },
        {
          name: "migrate",
          description: "Migrates the metadata database to the latest version",
          options: migrateOpts,
        },
        {
          name: "reset",
          description: "Burn down and rebuild the metadata database",
          options: resetOpts,
        },
        {
          name: "shell",
          description: "Runs a shell to access the database",
          options: [verbose],
        },
      ],
    },
    {
      name: "db-manager",
      description: "Manage externally connected database managers",
      subcommands: [
        {
          name: "downgrade",
          description: "Downgrade the schema of the external metadata database",
          args: dbManagerPath,
          options: downgradeOpts,
        },
        {
          name: "migrate",
          description:
            "Migrates the specified external database to the latest version",
          args: dbManagerPath,
          options: migrateOpts,
        },
        {
          name: "reset",
          description: "Burn down and rebuild the specified external database",
          args: dbManagerPath,
          options: resetOpts,
        },
      ],
    },
    {
      name: "edge",
      description: "Edge Worker components (EdgeExecutor only)",
      subcommands: [
        {
          name: "add-worker-queues",
          description: "Add queues to an edge worker",
          options: [requiredEdgeHostname, requiredEdgeQueues],
        },
        {
          name: "list-workers",
          description: "Query the db to list all registered edge workers",
          options: [
            output,
            opt(["-s", "--state"], "State of the edge worker", {
              name: "state",
              isVariadic: true,
            }),
            opt(
              "--worker-name-pattern",
              "Optional glob pattern to filter workers by name, e.g. 'prod-*'. Lists all workers if omitted",
              "PATTERN"
            ),
            opt(
              ["-q", "--queues"],
              "Comma delimited list of queues to serve, serve all queues if not provided",
              "queues"
            ),
          ],
        },
        {
          name: "maintenance",
          description: "Set or Unset maintenance mode of local edge worker",
          args: {
            name: "maintenance",
            description: "Desired maintenance state",
            suggestions: ["on", "off"],
          },
          options: [
            opt(
              ["-c", "--comments"],
              "Maintenance comments to report reason. Required if maintenance is turned on",
              "comments"
            ),
            opt(
              ["-w", "--wait"],
              "Wait until edge worker has reached desired state"
            ),
            pid,
            verbose,
          ],
        },
        {
          name: "remote-edge-worker-exit-maintenance",
          description: "Remove remote edge worker from maintenance",
          options: [requiredEdgeHostname],
        },
        {
          name: "remote-edge-worker-request-maintenance",
          description: "Put remote edge worker on maintenance",
          options: [requiredEdgeHostname, requiredEdgeComments],
        },
        {
          name: "remote-edge-worker-update-maintenance-comment",
          description: "Update maintenance comments of the remote edge worker",
          options: [requiredEdgeHostname, requiredEdgeComments],
        },
        {
          name: "remove-remote-edge-worker",
          description: "Remove remote edge worker entry from db",
          options: [requiredEdgeHostname],
        },
        {
          name: "remove-worker-queues",
          description: "Remove queues from an edge worker",
          options: [requiredEdgeHostname, requiredEdgeQueues],
        },
        {
          name: "set-worker-concurrency",
          description: "Set the concurrency of a remote edge worker",
          options: [requiredEdgeHostname, requiredEdgeConcurrency],
        },
        {
          name: "shutdown-all-workers",
          description: "Request graceful shutdown of all edge workers",
          options: [
            opt(
              ["-y", "--yes"],
              "Skip confirmation prompt and proceed with shutdown"
            ),
          ],
        },
        {
          name: "shutdown-remote-edge-worker",
          description: "Initiate the shutdown of the remote edge worker",
          options: [requiredEdgeHostname],
        },
        {
          name: "status",
          description: "Check for Airflow Local Edge Worker status",
          options: [pid, verbose],
        },
        {
          name: "stop",
          description: "Stop a running local Airflow Edge Worker",
          options: [
            opt(["-w", "--wait"], "Wait until edge worker is shut down"),
            pid,
            verbose,
          ],
        },
        {
          name: "worker",
          description: "Start Airflow Edge Worker",
          options: [
            opt(
              ["-c", "--concurrency"],
              "The number of worker processes",
              "concurrency"
            ),
            opt(
              ["-q", "--queues"],
              "Comma delimited list of queues to serve, serve all queues if not provided",
              "queues"
            ),
            opt(
              ["-t", "--team-name"],
              "Team name for the experimental multi-team feature. If omitted, the worker operates as a default-team worker",
              "team"
            ),
            edgeHostname,
            ...daemonOpts,
            opt(
              ["-u", "--umask"],
              "Set the umask of edge worker in daemon mode",
              "umask"
            ),
            verbose,
          ],
        },
      ],
    },
    {
      name: "fab-db",
      description: "Manage FAB (FAB auth manager only)",
      subcommands: [
        {
          name: "downgrade",
          description: "Downgrade the schema of the FAB metadata database",
          options: downgradeOpts,
        },
        {
          name: "migrate",
          description:
            "Migrates the FAB metadata database to the latest version",
          options: migrateOpts,
        },
        {
          name: "reset",
          description: "Burn down and rebuild the FAB metadata database",
          options: resetOpts,
        },
      ],
    },
    {
      name: "info",
      description: "Show information about current Airflow and environment",
      options: [
        opt(
          "--anonymize",
          "Minimize any personal identifiable information. Use it when sharing output with others"
        ),
        ...outputVerbose,
      ],
    },
    {
      name: "jobs",
      description: "Manage jobs",
      subcommands: [
        {
          name: "check",
          description: "Checks if job(s) are still alive",
          options: [
            opt("--job-type", "The type of job(s) that will be checked", {
              name: "job_type",
              suggestions: ["SchedulerJob", "TriggererJob", "DagProcessorJob"],
            }),
            opt(
              "--hostname",
              "The hostname of job(s) that will be checked",
              "hostname"
            ),
            opt("--local", "Only show jobs from the local host"),
            opt(
              "--limit",
              "The number of recent jobs that will be checked. To disable limit, set 0",
              "limit"
            ),
            opt(
              "--allow-multiple",
              "Succeed even if multiple matching alive jobs are found"
            ),
            verbose,
          ],
        },
      ],
    },
    {
      name: "kerberos",
      description: "Start a kerberos ticket renewer",
      args: {
        name: "principal",
        description: "Kerberos principal",
        isOptional: true,
      },
      options: [
        opt(["-k", "--keytab"], "Keytab", {
          ...file("keytab"),
          isOptional: true,
        }),
        ...daemonOpts,
        opt(
          ["-o", "--one-time"],
          "Run airflow kerberos one time instead of forever"
        ),
        verbose,
      ],
    },
    {
      name: "keycloak-auth-manager",
      description:
        "Manage resources used by Keycloak auth manager (Keycloak auth manager only)",
      subcommands: [
        {
          name: "add-user-to-team",
          description: "Add a Keycloak user to a team group",
          args: [
            {
              name: "target_username",
              description: "Username to add to the team",
            },
            keycloakTeam,
          ],
          options: keycloakAuth,
        },
        {
          name: "create-all",
          description:
            "Create all entities (scopes, resources and permissions) in Keycloak",
          options: [...keycloakAuth, keycloakTeams, keycloakDryRun],
        },
        {
          name: "create-permissions",
          description: "Create permissions in Keycloak",
          options: [...keycloakAuth, keycloakTeams, keycloakDryRun],
        },
        {
          name: "create-resources",
          description: "Create resources in Keycloak",
          options: [...keycloakAuth, keycloakTeams, keycloakDryRun],
        },
        {
          name: "create-scopes",
          description: "Create scopes in Keycloak",
          options: [...keycloakAuth, keycloakDryRun],
        },
        {
          name: "create-team",
          description: "Create Keycloak team group, resources, and permissions",
          args: keycloakTeam,
          options: [...keycloakAuth, keycloakDryRun],
        },
      ],
    },
    {
      name: "kubernetes",
      description: "Tools to help run the KubernetesExecutor",
      subcommands: [
        {
          name: "cleanup-pods",
          description:
            "Clean up Kubernetes pods in evicted/failed/succeeded/pending states",
          options: [
            opt(
              "--namespace",
              "Kubernetes Namespace (default: `[kubernetes_executor] namespace` in configuration, the team's with --team)",
              "namespace"
            ),
            opt(
              "--min-pending-minutes",
              "Clean up pending pods older than this many minutes (default: 30)",
              "minutes"
            ),
            opt(
              "--min-completed-minutes",
              "Minimum age in minutes of a completed pod before it is deleted (default: 1)",
              "minutes"
            ),
            kubernetesTeam,
            opt(
              "--executor",
              "With --team, the team's executor whose pods to clean up, by alias, module path or class name",
              "executor"
            ),
            opt(
              "--allow-shared-namespace",
              "With --team, clean up even if another team's or a global KubernetesExecutor uses the same namespace"
            ),
            verbose,
          ],
        },
        {
          name: "generate-dag-yaml",
          description: "Generate YAML files for all tasks in DAG",
          args: dagId,
          options: [
            opt(["-l", "--logical-date"], "The logical date of the DAG", date),
            bundleName,
            opt(
              ["-o", "--output-path"],
              "The output for generated yaml files",
              { name: "output_path", template: "folders" }
            ),
            kubernetesTeam,
            verbose,
          ],
        },
      ],
    },
    {
      name: "partitions",
      description: "Manage Dag run partition metadata",
      subcommands: [
        {
          name: "clear",
          description:
            "Clear the partition_key and partition_date of one or more DagRuns",
          options: [
            {
              ...opt(
                ["-d", "--dag-id"],
                "The id of the Dag whose DagRun partition fields should be cleared",
                "dag_id"
              ),
              isRequired: true,
            },
            opt(["-r", "--run-id"], "Helps to identify this run", "run_id"),
            {
              ...opt(
                ["-s", "--start-date"],
                "Inclusive lower bound of the partition_date window",
                date
              ),
              exclusiveOn: ["--date"],
            },
            {
              ...opt(
                ["-e", "--end-date"],
                "Inclusive upper bound of the partition_date window",
                date
              ),
              exclusiveOn: ["--date"],
            },
            opt(
              ["-k", "--partition-key"],
              "Only clear DagRuns whose partition_key equals this exact value",
              "key"
            ),
            {
              ...opt("--date", "Range expressed as 'a~b'", "range"),
              exclusiveOn: ["-s", "--start-date", "-e", "--end-date"],
            },
            opt(
              "--clear-task-instances",
              "Also clear the matching DagRuns' task instances"
            ),
            opt(
              "--dry-run",
              "Show which DagRuns would be cleared without modifying the database"
            ),
            verbose,
          ],
        },
      ],
    },
    {
      name: "permissions-cleanup",
      description:
        "Clean up DAG permissions in Flask-AppBuilder tables (FAB auth manager only)",
      options: [
        opt(
          ["-d", "--dag-id"],
          "Clean up permissions for specific DAG ID only",
          "dag_id"
        ),
        opt(
          "--dry-run",
          "Show what would be cleaned up without making any changes"
        ),
        yes,
        verbose,
      ],
    },
    {
      name: "plugins",
      description: "Dump information about loaded plugins",
      options: outputVerbose,
    },
    {
      name: "pools",
      description: "Manage pools",
      subcommands: [
        {
          name: "delete",
          description: "Delete pool",
          args: poolName,
          options: [verbose],
        },
        {
          name: "export",
          description: "Export all pools",
          args: file("FILEPATH"),
          options: [verbose],
        },
        {
          name: "get",
          description: "Get pool size",
          args: poolName,
          options: outputVerbose,
        },
        {
          name: "import",
          description: "Import pools",
          args: file("FILEPATH"),
          options: [verbose],
        },
        {
          name: "list",
          description: "List pools",
          options: outputVerbose,
        },
        {
          name: "set",
          description: "Configure pool",
          args: [
            poolName,
            { name: "slots", description: "Pool slots" },
            { name: "description", description: "Pool description" },
          ],
          options: [
            opt(
              "--include-deferred",
              "Include deferred tasks in calculations for Pool"
            ),
            opt(
              "--team-name",
              "Team name to assign the pool to (requires multi_team mode)",
              "team"
            ),
            verbose,
          ],
        },
      ],
    },
    {
      name: "providers",
      description: "Display providers",
      subcommands: [
        providerList(
          "auth-managers",
          "Get information about auth managers provided"
        ),
        providerList(
          "behaviours",
          "Get information about registered connection types with custom behaviours"
        ),
        providerList("configs", "Get information about provider configuration"),
        providerList("executors", "Get information about executors provided"),
        {
          name: "get",
          description: "Get detailed information about a provider",
          args: { name: "provider_name", description: "Provider name" },
          options: [
            ...outputVerbose,
            opt(
              ["-f", "--full"],
              "Full information about the provider, including documentation information"
            ),
            color,
          ],
        },
        providerList("hooks", "List registered provider hooks"),
        {
          name: "lazy-loaded",
          description: "Checks that provider configuration is lazy loaded",
          options: [verbose],
        },
        providerList("links", "List extra links registered by the providers"),
        providerList("list", "List installed providers"),
        providerList(
          "logging",
          "Get information about task logging handlers provided"
        ),
        providerList(
          "notifications",
          "Get information about notifications provided"
        ),
        providerList("queues", "Get information about queues provided"),
        providerList(
          "secrets",
          "Get information about secrets backends provided"
        ),
        providerList("triggers", "List registered provider triggers"),
        providerList(
          "widgets",
          "Get information about registered connection form widgets"
        ),
      ],
    },
    {
      name: "roles",
      description: "Manage roles (FAB auth manager only)",
      subcommands: [
        {
          name: "add-perms",
          description: "Add roles permissions",
          args: roleNames,
          options: [permResource, { ...permAction, isRequired: true }, verbose],
        },
        {
          name: "create",
          description: "Create role",
          args: roleNames,
          options: [verbose],
        },
        {
          name: "del-perms",
          description: "Delete roles permissions",
          args: roleNames,
          options: [permResource, permAction, verbose],
        },
        {
          name: "delete",
          description: "Delete role",
          args: roleNames,
          options: [verbose],
        },
        {
          name: "export",
          description:
            "Export roles (without permissions) from db to JSON file",
          args: file("file"),
          options: [
            opt(
              ["-p", "--pretty"],
              "Format output JSON file by sorting role names and indenting by 4 spaces"
            ),
            verbose,
          ],
        },
        {
          name: "import",
          description:
            "Import roles (without permissions) from JSON file to db",
          args: file("file"),
          options: [verbose],
        },
        {
          name: "list",
          description: "List roles",
          options: [
            opt(["-p", "--permission"], "Show role permissions"),
            ...outputVerbose,
          ],
        },
      ],
    },
    {
      name: "rotate-fernet-key",
      description: "Rotate encrypted connection credentials and variables",
    },
    {
      name: "scheduler",
      description: "Start a scheduler instance",
      options: [
        numRuns,
        opt(
          ["-i", "--only-idle"],
          "Only count runs after the scheduler becomes idle"
        ),
        ...daemonOpts,
        skipServeLogs,
        verbose,
        dev,
      ],
    },
    {
      name: "standalone",
      description: "Run an all-in-one copy of Airflow",
    },
    {
      name: "state-store",
      description: "Manage task and asset state storage",
      subcommands: [
        {
          name: "clean",
          description:
            "Remove expired task state store rows (metastore backend only)",
          options: [dryRun, verbose],
        },
      ],
    },
    {
      name: "sync-perm",
      description:
        "Update permissions for existing roles and optionally DAGs (FAB auth manager only)",
      options: [
        opt("--include-dags", "Also sync DAG specific permissions"),
        verbose,
      ],
    },
    {
      name: "tasks",
      description: "Manage tasks",
      subcommands: [
        {
          name: "clear",
          description: "Clear a set of task instance, as if they never ran",
          args: dagId,
          options: [
            opt(
              ["-t", "--task-regex"],
              "The regex to filter specific task_ids",
              "regex"
            ),
            startDate,
            endDate,
            bundleName,
            opt(["-u", "--upstream"], "Include upstream tasks"),
            opt(["-d", "--downstream"], "Include downstream tasks"),
            yes,
            onlyFailed,
            onlyRunning,
            opt(
              ["-R", "--dag-regex"],
              "Search dag_id as regex instead of exact string"
            ),
            verbose,
          ],
        },
        {
          name: "failed-deps",
          description: "Returns the unmet dependencies for a task instance",
          args: [dagId, taskId, dateOrRunId],
          options: [bundleName, mapIndex, verbose],
        },
        {
          name: "list",
          description: "List the tasks within a DAG",
          args: dagId,
          options: [bundleName, verbose],
        },
        {
          name: "render",
          description: "Render a task instance's template(s)",
          args: [dagId, taskId, dateOrRunId],
          options: [bundleName, verbose, mapIndex],
        },
        {
          name: "state",
          description: "Get the status of a task instance",
          args: [dagId, taskId, dateOrRunId],
          options: [bundleName, verbose, mapIndex],
        },
        {
          name: "states-for-dag-run",
          description: "Get the status of all task instances in a dag run",
          args: [dagId, dateOrRunId],
          options: outputVerbose,
        },
        {
          name: "test",
          description: "Test a task instance",
          args: [dagId, taskId, { ...dateOrRunId, isOptional: true }],
          options: [
            bundleName,
            opt(
              ["-t", "--task-params"],
              "Sends a JSON params dict to the task",
              "json"
            ),
            opt(["-m", "--post-mortem"], "Open debugger on uncaught exception"),
            opt(
              "--env-vars",
              "Set env vars in both parsing time and runtime from a JSON dict",
              "json"
            ),
            mapIndex,
            verbose,
          ],
        },
      ],
    },
    {
      name: "teams",
      description: "Manage teams",
      subcommands: [
        {
          name: "create",
          description: "Create a team",
          args: teamName,
          options: [verbose],
        },
        {
          name: "delete",
          description: "Delete a team",
          args: teamName,
          options: [yes, verbose],
        },
        {
          name: "inspect",
          description: "Inspect a team",
          args: teamName,
          options: outputVerbose,
        },
        {
          name: "list",
          description: "List teams",
          options: outputVerbose,
        },
        {
          name: "sync",
          description:
            "Sync missing teams from the dag bundle config into the database",
          options: [
            opt(
              "--dry-run",
              "Show what would be synchronized without making changes"
            ),
            verbose,
          ],
        },
        {
          name: "verify",
          description: "Verify multi-team configuration",
          options: [verbose],
        },
      ],
    },
    {
      name: "triggerer",
      description: "Start a triggerer instance",
      options: [
        ...daemonOpts,
        opt(
          "--capacity",
          "The maximum number of triggers that a Triggerer will run at one time",
          "capacity"
        ),
        verbose,
        skipServeLogs,
        dev,
        opt(
          "--queues",
          "Comma-separated list of task queues which the triggerer should consume from",
          "queues"
        ),
        opt(
          "--team-name",
          "Team name to scope this triggerer to (requires core.multi_team)",
          "team"
        ),
      ],
    },
    {
      name: "users",
      description: "Manage users (FAB auth manager only)",
      subcommands: [
        {
          name: "add-role",
          description: "Add role to a user",
          options: [username, email, role, verbose],
        },
        {
          name: "create",
          description: "Create a user",
          options: [
            role,
            { ...username, isRequired: true },
            { ...email, isRequired: true },
            {
              ...opt(["-f", "--firstname"], "First name of the user", "name"),
              isRequired: true,
            },
            {
              ...opt(["-l", "--lastname"], "Last name of the user", "name"),
              isRequired: true,
            },
            password,
            randomPassword,
            verbose,
          ],
        },
        {
          name: "delete",
          description: "Delete a user",
          options: [username, email, verbose],
        },
        {
          name: "export",
          description: "Export all users",
          args: file("FILEPATH"),
          options: [verbose],
        },
        {
          name: "import",
          description: "Import users",
          args: file("FILEPATH"),
          options: [verbose],
        },
        {
          name: "list",
          description: "List users",
          options: outputVerbose,
        },
        {
          name: "remove-role",
          description: "Remove role from a user",
          options: [username, email, role, verbose],
        },
        {
          name: "reset-password",
          description: "Reset a user's password",
          options: [username, email, password, randomPassword, verbose],
        },
      ],
    },
    {
      name: "variables",
      description: "Manage variables",
      subcommands: [
        {
          name: "delete",
          description: "Delete variable",
          args: varKey,
          options: [verbose],
        },
        {
          name: "export",
          description: "Export all variables",
          args: { ...file("file"), suggestions: ["-"] },
          options: [verbose],
        },
        {
          name: "get",
          description: "Get variable",
          args: varKey,
          options: [
            opt(["-j", "--json"], "Deserialize JSON variable"),
            opt(
              ["-d", "--default"],
              "Default value returned if variable does not exist",
              "VAL"
            ),
            verbose,
          ],
        },
        {
          name: "import",
          description: "Import variables from .env, .json, .yaml or .yml file",
          args: file("file"),
          options: [
            opt(
              ["-a", "--action-on-existing-key"],
              "Action to take if a variable key already exists (default: overwrite)",
              {
                name: "action",
                suggestions: ["overwrite", "fail", "skip"],
              }
            ),
            verbose,
          ],
        },
        {
          name: "list",
          description: "List variables",
          options: [
            output,
            showValues("variable"),
            { ...hideSensitive, dependsOn: ["--show-values"] },
            verbose,
          ],
        },
        {
          name: "set",
          description: "Set variable",
          args: [varKey, { name: "VALUE", description: "Variable value" }],
          options: [
            opt("--description", "Variable description", "description"),
            opt(["-j", "--json"], "Serialize JSON variable"),
            verbose,
          ],
        },
      ],
    },
    {
      name: "version",
      description: "Show the version",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show this help message and exit",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
