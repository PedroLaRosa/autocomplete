// Tinybird CLI (tb) v5.0.3 (PyPI `tinybird` latest stable, released 2026-10-23; checked 2026-11-20).
// Source: static read of the click command definitions in the published
// wheel (tinybird/tb/modules/*.py), not executed. Covers the Tinybird Forward
// CLI. The separate Tinybird Classic CLI (PyPI `tinybird-cli` 6.5.5, also
// installs `tb`) has other commands (push, pull, check, diff, materialize...)
// and is not covered; check/diff/push/tag/auth/environment/create/mock remain
// here only as hidden stubs that print a deprecation notice.

const toggle = (
  on: string | string[],
  off: string | string[],
  description: string,
  offDescription = description
): Fig.Option[] => [
  {
    name: on,
    description,
    exclusiveOn: [Array.isArray(off) ? off[off.length - 1] : off],
  },
  {
    name: off,
    description: offDescription,
    exclusiveOn: [Array.isArray(on) ? on[on.length - 1] : on],
  },
];

const lastPartitionOption: Fig.Option = {
  name: "--last-partition",
  description:
    "Attach the last modified partition from the current workspace to the new branch",
};

const ignoreDatasourceOption: Fig.Option = {
  name: ["-i", "--ignore-datasource"],
  description: "Ignore specified data source partitions",
  isRepeatable: true,
  args: { name: "datasource" },
};

const yesOption: Fig.Option = {
  name: "--yes",
  description: "Do not ask for confirmation",
};

const connectionNameOption: Fig.Option = {
  name: "--connection-name",
  description: "The name of the connection to identify it in Tinybird",
  args: { name: "name" },
};

const matchOption: Fig.Option = {
  name: "--match",
  description:
    "Retrieve any resource matching the pattern. For example, --match _test",
  args: { name: "pattern" },
};

const formatOption: Fig.Option = {
  name: "--format",
  description: "Force a type of the output",
  args: { name: "format", suggestions: ["json"] },
};

const templateOption: Fig.Option = {
  name: "--template",
  description:
    "URL of the template to use for the deployment. Example: https://github.com/tinybirdco/web-analytics-starter-kit/tree/main/tinybird",
  args: { name: "url" },
};

const verboseOption: Fig.Option = {
  name: ["-v", "--verbose"],
  description: "Show verbose output. Disabled by default",
};

const regionNameOption: Fig.Option = {
  name: "--name",
  description: "Name for identifying the self-managed region in Tinybird",
  args: { name: "name" },
};

const regionHostOption: Fig.Option = {
  name: "--host",
  description: "Host for the self-managed region",
  args: { name: "host" },
};

const regionOrganizationIdOption: Fig.Option = {
  name: "--organization-id",
  description: "Organization ID for the self-managed region",
  args: { name: "id" },
};

const useAwsCredsOption: Fig.Option = {
  name: "--use-aws-creds",
  description:
    "Use local AWS credentials from your environment and pass them to the Tinybird docker container",
};

const volumesPathOption: Fig.Option = {
  name: "--volumes-path",
  description:
    "Path to the volumes directory. If not provided, the container data won't be persisted",
  args: { name: "path", template: "folders" },
};

const skipNewVersionOption: Fig.Option = {
  name: "--skip-new-version",
  description:
    "Skip pulling the latest Tinybird Local image. Use directly your current local image",
};

const userTokenOption: Fig.Option = {
  name: "--user_token",
  description: "Override local session with this authentication token",
  args: { name: "token" },
};

const completionSpec: Fig.Spec = {
  name: "tb",
  description: "Tinybird Forward CLI",
  options: [
    ...toggle(
      "--debug",
      "--no-debug",
      "Prints internal representation, can be combined with any command to get more information"
    ),
    {
      name: "--token",
      description:
        "Use auth token, defaults to TB_TOKEN envvar, then to the .tinyb file",
      args: { name: "token" },
    },
    {
      name: "--user-token",
      description:
        "Use user token, defaults to TB_USER_TOKEN envvar, then to the .tinyb file",
      args: { name: "token" },
    },
    {
      name: "--host",
      description:
        "Use custom host, defaults to TB_HOST envvar, then to https://api.tinybird.co",
      args: { name: "host" },
    },
    ...toggle(
      "--version-warning",
      "--no-version-warning",
      "Don't print version warning message if there's a new available version. You can use TB_VERSION_WARNING envar"
    ),
    { name: "--show-tokens", description: "Enable the output of tokens" },
    ...toggle("--cloud", "--local", "Run against cloud or local"),
    {
      name: "--branch",
      description: "Run against a branch",
      args: { name: "branch" },
    },
    { name: "--staging", description: "Run against a staging deployment" },
    {
      name: "--output",
      description: "Output format",
      args: {
        name: "format",
        default: "human",
        suggestions: ["human", "json", "csv"],
      },
    },
    {
      name: "--max-depth",
      description: "Maximum depth of the project files",
      args: { name: "depth", default: "3" },
    },
    {
      name: ["-h", "--help"],
      description: "Show this message and exit",
      isPersistent: true,
    },
    { name: "--version", description: "Show the version and exit" },
  ],
  subcommands: [
    {
      name: "auth",
      description: "Deprecated. Use tb login instead",
      hidden: true,
    },
    {
      name: "branch",
      description:
        "Manage branches. Custom branches is an experimental feature in beta",
      subcommands: [
        {
          name: "clear",
          description: "Clear a branch by deleting and recreating it",
          options: [
            lastPartitionOption,
            ignoreDatasourceOption,
            ...toggle(
              "--wait",
              "--no-wait",
              "Wait for data branch jobs to finish, showing a progress bar. Disabled by default"
            ),
            yesOption,
          ],
          args: { name: "branch_name_or_id", isOptional: true },
        },
        {
          name: "create",
          description: "Create a new branch in the current workspace",
          options: [
            lastPartitionOption,
            ignoreDatasourceOption,
            ...toggle(
              "--wait",
              "--no-wait",
              "Wait for data branch jobs to finish, showing a progress bar. Disabled by default"
            ),
          ],
          args: { name: "branch_name", isOptional: true },
        },
        {
          name: "ls",
          description:
            "List all the branches available in the current workspace",
          options: [
            ...toggle("--sort", "--no-sort", "Sort the table rows by name"),
          ],
        },
        {
          name: "rm",
          description:
            "Remove a branch from the workspace. It can't be recovered",
          options: [yesOption],
          args: { name: "branch_name_or_id" },
        },
      ],
    },
    {
      name: "build",
      description: "Validate and build the project server side",
      options: [
        {
          name: "--watch",
          description: "Watch for changes and rebuild automatically",
        },
        {
          name: "--with-connections",
          description:
            "Create data linkers for connection datasources (S3, Kafka, GCS) during build",
        },
      ],
    },
    {
      name: "ch",
      description: "Run a query against ClickHouse native HTTP interface",
      options: [
        {
          name: "--query",
          description: "The query to run against ClickHouse",
          args: { name: "query" },
        },
        {
          name: "--user",
          description:
            "User field is not used for authentication but helps identify the connection",
          args: { name: "user" },
        },
        {
          name: "--password",
          description:
            "Your Tinybird Auth Token. If not provided, the token will be your current workspace token",
          args: { name: "token" },
        },
        {
          name: ["-m", "--multiline"],
          description:
            "Enable multiline mode - read the query from multiple lines until a semicolon",
        },
      ],
      args: { name: "query", isOptional: true },
    },
    {
      name: "check",
      description: "Deprecated. Removed in Tinybird Forward",
      hidden: true,
    },
    {
      name: "connection",
      description: "Connection commands",
      subcommands: [
        {
          name: "create",
          description: "Create a connection",
          subcommands: [
            {
              name: "dynamodb",
              description:
                "Create an AWS DynamoDB connection using IAM role authentication",
              options: [
                connectionNameOption,
                {
                  name: "--table-arn",
                  description:
                    "Optional. Validate the connection against this DynamoDB table ARN",
                  args: { name: "arn" },
                },
              ],
            },
            {
              name: "gcs",
              description: "Create a Google Cloud Storage connection",
            },
            {
              name: "kafka",
              description: "Create a Kafka connection",
              options: [
                connectionNameOption,
                {
                  name: "--bootstrap-servers",
                  description:
                    "Kafka Bootstrap Server in form mykafka.mycloud.com:9092",
                  args: { name: "servers" },
                },
                {
                  name: "--key",
                  description: "Key/User",
                  args: { name: "key" },
                },
                {
                  name: "--secret",
                  description: "Secret/Password",
                  args: { name: "secret" },
                },
                {
                  name: "--auto-offset-reset",
                  description:
                    "Offset reset, can be 'latest' or 'earliest'. Defaults to 'latest'",
                  args: { name: "offset", suggestions: ["latest", "earliest"] },
                },
                {
                  name: "--schema-registry-url",
                  description: "Avro Confluent Schema Registry URL",
                  args: { name: "url" },
                },
                {
                  name: "--sasl-mechanism",
                  description:
                    "Authentication method for connection-based protocols. Defaults to 'PLAIN'",
                  args: {
                    name: "mechanism",
                    suggestions: [
                      "PLAIN",
                      "SCRAM-SHA-256",
                      "SCRAM-SHA-512",
                      "OAUTHBEARER",
                    ],
                  },
                },
                {
                  name: "--security-protocol",
                  description:
                    "Security protocol for connection-based protocols. Defaults to 'SASL_SSL'",
                  args: {
                    name: "protocol",
                    suggestions: ["SASL_SSL", "SASL_PLAINTEXT", "PLAINTEXT"],
                  },
                },
                {
                  name: "--ssl-ca-pem",
                  description:
                    "Path or content of the CA Certificate file in PEM format",
                  args: { name: "pem", template: "filepaths" },
                },
                {
                  name: "--oauthbearer-aws-external-id",
                  description:
                    "Pre-shared external_id for the AWS assume-role call (OAUTHBEARER+AWS only). If omitted, the wizard prompts for one and falls back to a Tinybird-generated value",
                  args: { name: "external_id" },
                },
              ],
            },
            { name: "s3", description: "Create an AWS S3 connection" },
          ],
        },
        {
          name: "data",
          description: "Preview data from an existing connection",
          options: [
            {
              name: "--kafka-topic",
              description: "The Kafka topic to preview",
              args: { name: "topic" },
            },
            {
              name: "--kafka-group-id",
              description: "The Kafka group ID to use for preview",
              args: { name: "group_id" },
            },
            {
              name: "--s3-bucket-uri",
              description:
                "The S3 bucket URI to preview (e.g., s3://my-bucket/*.csv)",
              args: { name: "uri" },
            },
            {
              name: "--s3-sample-file-uri",
              description:
                "The S3 sample file URI to preview (e.g., s3://my-bucket/sample.csv)",
              args: { name: "uri" },
            },
          ],
          args: { name: "connection_name", isOptional: true },
        },
        {
          name: "ls",
          description: "List connections",
          options: [
            {
              name: "--service",
              description: "Filter by service",
              args: {
                name: "service",
                suggestions: ["kafka", "s3", "gcs", "dynamodb"],
              },
            },
          ],
        },
      ],
    },
    {
      name: "copy",
      description: "Copy pipe commands",
      subcommands: [
        {
          name: "ls",
          description: "List copy pipes",
          options: [matchOption, formatOption],
        },
        {
          name: "pause",
          description: "Pause a running copy pipe",
          args: { name: "pipe_name_or_id" },
        },
        {
          name: "resume",
          description: "Resume a paused copy pipe",
          args: { name: "pipe_name_or_id" },
        },
        {
          name: "run",
          description: "Run a copy pipe on demand",
          options: [
            { name: "--wait", description: "Wait for the copy job to finish" },
            {
              name: "--mode",
              description: "Copy strategy",
              args: { name: "mode", suggestions: ["append", "replace"] },
            },
            {
              name: "--param",
              description:
                "Key and value of the params you want the Copy pipe to be called with. For example: tb copy run <my_copy_pipe> --param foo=bar",
              isRepeatable: true,
              args: { name: "key=value" },
            },
            {
              name: "--on-demand-compute",
              description: "Use on-demand compute instances for the copy job",
            },
            yesOption,
          ],
          args: { name: "pipe_name_or_id" },
        },
      ],
    },
    {
      name: "create",
      description: "Deprecated. Use tb init instead",
      hidden: true,
    },
    {
      name: "datasource",
      description: "Data source commands",
      subcommands: [
        {
          name: "analyze",
          description:
            "Analyze a URL or a file before creating a new data source",
          args: { name: "url_or_file", template: "filepaths" },
        },
        {
          name: "append",
          description:
            "Append data to an existing data source from a URL, a local file or events",
          options: [
            {
              name: "--url",
              description: "URL to append data from",
              args: { name: "url" },
            },
            {
              name: "--file",
              description: "Local file to append data from",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--events",
              description: "Events to append data from",
              args: { name: "events" },
            },
            {
              name: "--concurrency",
              description: "How many files to submit concurrently",
              hidden: true,
              args: { name: "count", default: "1" },
            },
            ...toggle(
              "--wait",
              "--no-wait",
              "Wait for the import to finish (default); use --no-wait to only queue it"
            ),
          ],
          args: [
            { name: "datasource_name", isOptional: true },
            { name: "data", isOptional: true, template: "filepaths" },
          ],
        },
        {
          name: "create",
          description: "Create a new data source file in the project",
          options: [
            {
              name: "--name",
              description: "Name of the data source",
              args: { name: "name" },
            },
            { name: "--blank", description: "Create a blank data source" },
            {
              name: "--file",
              description: "Create a data source from a local file",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--url",
              description: "Create a data source from a remote URL",
              args: { name: "url" },
            },
            {
              name: "--connection-name",
              description: "Create a data source from a connection",
              args: { name: "name" },
            },
            {
              name: "--s3",
              description: "Create a data source from a S3 connection",
            },
            {
              name: "--gcs",
              description: "Create a data source from a GCS connection",
            },
            {
              name: "--kafka",
              description: "Create a data source from a Kafka connection",
            },
            {
              name: "--dynamodb",
              description: "Create a data source from a DynamoDB connection",
            },
            {
              name: "--kafka-topic",
              description: "Kafka topic",
              args: { name: "topic" },
            },
            {
              name: "--kafka-group-id",
              description: "Kafka group ID",
              args: { name: "group_id" },
            },
            {
              name: "--kafka-auto-offset-reset",
              description: "Kafka auto offset reset",
              args: { name: "offset", suggestions: ["latest", "earliest"] },
            },
            {
              name: "--s3-bucket-uri",
              description: "S3 bucket URI (e.g., s3://my-bucket/*.csv)",
              args: { name: "uri" },
            },
            {
              name: "--s3-sample-file",
              description: "S3 sample file for schema inference",
              args: { name: "file" },
            },
            {
              name: "--s3-schedule",
              description:
                "S3 import schedule (@auto for automatic ingestion, @once for on-demand)",
              args: { name: "schedule", suggestions: ["@auto", "@once"] },
            },
            {
              name: "--s3-format",
              description:
                "S3 import format (default: auto-detected from file extension)",
              args: {
                name: "format",
                suggestions: ["csv", "ndjson", "parquet"],
              },
            },
            {
              name: "--dynamodb-table-arn",
              description: "DynamoDB table ARN",
              args: { name: "arn" },
            },
            {
              name: "--dynamodb-export-bucket",
              description: "S3 export bucket",
              args: { name: "bucket" },
            },
            yesOption,
          ],
        },
        {
          name: "data",
          description: "Print rows from a data source",
          options: [
            {
              name: "--limit",
              description: "Limit the number of rows to return",
              args: { name: "limit", default: "5" },
            },
          ],
          args: { name: "datasource" },
        },
        {
          name: "delete",
          description: "Delete rows from a data source",
          options: [
            {
              name: "--sql-condition",
              description: "SQL WHERE condition to remove rows",
              isRequired: true,
              args: { name: "condition" },
            },
            yesOption,
            ...toggle(
              "--wait",
              "--no-wait",
              "Wait for the delete to finish. Defaults to true with --lightweight-delete (sync request), false otherwise (returns a job id)"
            ),
            {
              name: "--dry-run",
              description: "Run the command without deleting anything",
            },
            {
              name: "--lightweight-delete",
              description:
                "Use ClickHouse lightweight DELETE. Defaults to waiting inline and returning rows_affected; pass --no-wait to enqueue a job instead. Not compatible with --dry-run",
            },
            {
              name: "--partition",
              description:
                "Restrict the lightweight delete to a single partition expression. Only valid with --lightweight-delete",
              args: { name: "partition" },
            },
            {
              name: "--projection-mode",
              description:
                "How ClickHouse should handle table projections when running the lightweight DELETE. throw: fail the DELETE if the table has any projection defined (ClickHouse default). drop: drop the affected projections so the DELETE can proceed; they will need to be recreated. rebuild: rebuild the affected projections after the DELETE finishes. Only valid with --lightweight-delete",
              args: { name: "mode", suggestions: ["throw", "drop", "rebuild"] },
            },
          ],
          args: { name: "datasource_name" },
        },
        {
          name: "export",
          description:
            "Export data from a data source to a file in CSV or NDJSON format",
          options: [
            {
              name: "--format",
              description: "Output format (csv or ndjson)",
              args: {
                name: "format",
                default: "ndjson",
                suggestions: ["csv", "ndjson"],
              },
            },
            {
              name: "--rows",
              description: "Number of rows to export (default: 100)",
              args: { name: "rows", default: "100" },
            },
            {
              name: "--where",
              description: "Condition to filter data",
              args: { name: "condition" },
            },
            {
              name: "--target",
              description:
                "Target file path (default: datasource_name.{format})",
              args: { name: "path", template: "filepaths" },
            },
          ],
          args: { name: "datasource" },
        },
        {
          name: "ls",
          description: "List data sources",
          options: [matchOption, formatOption],
        },
        {
          name: "replace",
          description:
            "Replace the data in a data source from a URL or a local file",
          options: [
            {
              name: "--sql-condition",
              description: "SQL WHERE condition to replace data",
              args: { name: "condition" },
            },
            { name: "--skip-incompatible-partition-key", hidden: true },
            ...toggle(
              "--wait",
              "--no-wait",
              "Wait for the import to finish (default); use --no-wait to only queue it"
            ),
          ],
          args: [
            { name: "datasource_name" },
            { name: "url_or_file", isVariadic: true, template: "filepaths" },
          ],
        },
        {
          name: "sample",
          description:
            "Import sample data from a data source connected to S3, GCS or DynamoDB",
          options: [
            {
              name: "--max-files",
              description:
                "Maximum number of files to import (default 1, max 10)",
              args: { name: "count", default: "1" },
            },
            {
              name: "--wait",
              description: "Wait for the import job to finish",
            },
            {
              name: "--rows",
              description:
                "For DynamoDB, the maximum number of rows to scan and import (default 1500; mutually exclusive with --max-bytes)",
              args: { name: "rows" },
            },
            {
              name: "--max-bytes",
              description:
                "For DynamoDB, the maximum approximate JSONEachRow bytes to import, e.g. 500MB (capped at 10GB by default; mutually exclusive with --rows)",
              args: { name: "size" },
            },
            {
              name: "--full-export",
              description:
                "For DynamoDB, trigger a full PITR export instead of a bounded sample (mutually exclusive with --rows and --max-bytes)",
            },
          ],
          args: { name: "datasource_name" },
        },
        {
          name: "start",
          description: "Start Kafka ingestion for a data source",
          args: { name: "datasource_name" },
        },
        {
          name: "stop",
          description: "Stop Kafka ingestion for a data source",
          args: { name: "datasource_name" },
        },
        {
          name: "sync",
          description:
            "Sync from a GCS or S3 connection defined in .datasource file",
          options: [yesOption],
          args: { name: "datasource_name" },
        },
        {
          name: "truncate",
          description: "Truncate a data source",
          options: [
            yesOption,
            {
              name: "--cascade",
              description:
                "Truncate dependent DS attached in cascade to the given DS",
            },
          ],
          args: { name: "datasource_name" },
        },
      ],
    },
    {
      name: "deploy",
      description:
        "Deploy your project to your workspace. Equivalent to tb deployment create --auto --wait",
      options: [
        ...toggle(
          "--wait",
          "--no-wait",
          "Wait for deploy to finish. Enabled by default"
        ),
        ...toggle(
          "--auto",
          "--no-auto",
          "Auto-promote the deployment when it's ready. Enabled by default"
        ),
        {
          name: "--check",
          description:
            "Validate the deployment before creating it. Disabled by default",
        },
        ...toggle(
          "--allow-destructive-operations",
          "--no-allow-destructive-operations",
          "Allow removing datasources. Disabled by default"
        ),
        templateOption,
        verboseOption,
      ],
    },
    {
      name: "deployment",
      description: "Deployment commands",
      subcommands: [
        {
          name: "create",
          description: "Deploy your project to your workspace",
          options: [
            ...toggle(
              "--wait",
              "--no-wait",
              "Wait for deploy to finish. Disabled by default"
            ),
            ...toggle(
              "--auto",
              "--no-auto",
              "Auto-promote the deployment when it's ready. Disabled by default"
            ),
            ...toggle(
              "--check",
              "--no-check",
              "Validate the deployment before creating it. Disabled by default"
            ),
            ...toggle(
              "--allow-destructive-operations",
              "--no-allow-destructive-operations",
              "Allow removing datasources. Disabled by default"
            ),
            templateOption,
            verboseOption,
          ],
        },
        {
          name: "discard",
          description: "Discard the current deployment",
          options: [
            ...toggle(
              "--wait",
              "--no-wait",
              "Wait for deploy to finish. Disabled by default"
            ),
          ],
        },
        {
          name: "ls",
          description: "List all the deployments you have in the project",
          options: [
            {
              name: "--include-deleted",
              description: "Include deleted deployments. Disabled by default",
            },
          ],
        },
        {
          name: "promote",
          description: "Promote last deploy to ready and remove old one",
          options: [
            ...toggle(
              "--wait",
              "--no-wait",
              "Wait for deploy to finish. Disabled by default"
            ),
          ],
        },
      ],
    },
    {
      name: "dev",
      description: "Build the project server side and watch for changes",
      options: [
        ...toggle(
          "--with-connections",
          "--no-connections",
          "Create data linkers for connection datasources (S3, Kafka, GCS). Defaults to true for branches"
        ),
      ],
    },
    {
      name: "diff",
      description: "Deprecated. Removed in Tinybird Forward",
      hidden: true,
    },
    {
      name: "endpoint",
      description: "Endpoint commands",
      subcommands: [
        {
          name: "data",
          description: "Print data returned by an endpoint",
          options: [
            {
              name: "--query",
              description: "Run SQL over endpoint results",
              args: { name: "query" },
            },
            {
              name: "--format",
              description: "Return format (CSV, JSON)",
              args: { name: "format", suggestions: ["json", "csv"] },
            },
          ],
          args: { name: "pipe" },
        },
        {
          name: "ls",
          description: "List endpoints",
          options: [matchOption, formatOption],
        },
        {
          name: "stats",
          description: "Print endpoint stats for the last 7 days",
          options: [
            {
              name: "--format",
              description:
                "Force a type of the output. To parse the output, keep in mind to use `tb --no-version-warning endpoint stats` option",
              args: { name: "format", suggestions: ["json"] },
            },
          ],
          args: { name: "pipes", isOptional: true, isVariadic: true },
        },
        {
          name: "token",
          description: "Retrieve a token to read an endpoint",
          args: { name: "pipe_name" },
        },
        {
          name: "url",
          description: "Print the URL of an endpoint",
          options: [
            {
              name: "--language",
              description:
                "Language used for sending the request. Options: http, python, curl, javascript, rust, go",
              args: {
                name: "language",
                default: "http",
                suggestions: [
                  "http",
                  "python",
                  "curl",
                  "javascript",
                  "rust",
                  "go",
                ],
              },
            },
          ],
          args: { name: "pipe" },
        },
      ],
    },
    {
      name: "environment",
      description: "Deprecated. Renamed to tb branch",
      hidden: true,
    },
    {
      name: "fmt",
      description: "Format a .datasource, .pipe or .connection file",
      options: [
        {
          name: "--line-length",
          description:
            "A number indicating the maximum characters per line in the node SQL, lines will be splitted based on the SQL syntax and the number of characters passed as a parameter",
          args: { name: "length", default: "100" },
        },
        {
          name: "--dry-run",
          description: "Don't ask to override the local file",
        },
        {
          name: "--yes",
          description:
            "Do not ask for confirmation to overwrite the local file",
        },
        {
          name: "--diff",
          description:
            "Formats local file, prints the diff and exits 1 if different, 0 if equal",
        },
        { name: "--no-color", description: "Don't colorize diff" },
      ],
      args: { name: "filenames", isVariadic: true, template: "filepaths" },
    },
    {
      name: "info",
      description:
        "Get information about the project that is currently being used",
      options: [{ name: "--skip-local", description: "Skip local info" }],
    },
    {
      name: "infra",
      description: "Infra commands",
      subcommands: [
        {
          name: "add",
          description:
            "Create a new self-managed region from an existing infrastructure URL",
          options: [
            regionNameOption,
            regionHostOption,
            regionOrganizationIdOption,
          ],
        },
        {
          name: "init",
          description: "Initialize a self-managed infrastructure",
          options: [
            regionNameOption,
            {
              name: "--cloud-provider",
              description:
                "Infrastructure provider. Possible values are: aws, gcp, azure",
              args: { name: "provider", suggestions: ["aws", "gcp", "azure"] },
            },
            {
              name: "--cloud-region",
              description: "AWS region, when using aws as the provider",
              args: { name: "region" },
            },
            {
              name: "--dns-zone-name",
              description: "DNS zone name",
              args: { name: "zone" },
            },
            {
              name: "--dns-record",
              description:
                "DNS record name to create, without domain. For example, 'tinybird'",
              args: { name: "record" },
            },
            {
              name: "--kubernetes-namespace",
              description: "Kubernetes namespace for the deployment",
              args: { name: "namespace" },
            },
            {
              name: "--kubernetes-storage-class",
              description: "Storage class for the k8s StatefulSet",
              args: { name: "class" },
            },
            {
              name: "--auto-apply",
              description:
                "Automatically apply Terraform and kubectl configuration without prompting",
            },
            {
              name: "--skip-apply",
              description:
                "Skip Terraform and kubectl configuration and application",
            },
            regionOrganizationIdOption,
          ],
        },
        { name: "ls", description: "List self-managed infrastructures" },
        {
          name: "rm",
          description: "Delete an infrastructure from Tinybird",
          args: { name: "name" },
        },
        {
          name: "update",
          description: "Update the URL of an existing self-managed region",
          options: [regionNameOption, regionHostOption],
          args: { name: "infra_name" },
        },
      ],
    },
    {
      name: "init",
      description: "Initialize a new project",
      options: [
        {
          name: "--type",
          description: "Project type: typescript, python, or cli",
          args: { name: "type", suggestions: ["typescript", "python", "cli"] },
        },
        {
          name: "--dev-mode",
          description: "Development mode: branch, local, or manual",
          args: { name: "mode", suggestions: ["branch", "local", "manual"] },
        },
        {
          name: "--folder",
          description: "Project folder. Default: tinybird",
          args: { name: "folder", template: "folders" },
        },
        {
          name: "--cicd",
          description: "Generate CI/CD templates for github, gitlab, or skip",
          args: { name: "provider", suggestions: ["github", "gitlab", "skip"] },
        },
        { name: "--skip-login", description: "Authenticate after init" },
      ],
    },
    {
      name: "job",
      description: "Jobs commands",
      subcommands: [
        {
          name: "cancel",
          description: "Try to cancel a job",
          args: { name: "job_id" },
        },
        {
          name: "details",
          description: "Get details for any job created in the last 48h",
          args: { name: "job_id" },
        },
        {
          name: "ls",
          description: "List jobs, up to 100",
          options: [
            {
              name: ["-s", "--status"],
              description: "Show only jobs with this status",
              isRepeatable: true,
              args: {
                name: "status",
                suggestions: [
                  "waiting",
                  "working",
                  "done",
                  "error",
                  "cancelling",
                  "cancelled",
                ],
              },
            },
            {
              name: ["-k", "--kind"],
              description: "Show only jobs of this kind",
              isRepeatable: true,
              args: { name: "kind" },
            },
          ],
        },
        {
          name: "retry",
          description:
            "Retry an import or sync job that ended in error or cancelled status",
          args: { name: "job_id" },
        },
      ],
    },
    {
      name: "local",
      description: "Manage the local Tinybird instance",
      subcommands: [
        {
          name: "clear",
          description:
            "Clear all resources and deployments inside the current Tinybird Local workspace",
          options: [yesOption],
        },
        {
          name: "generate-tokens",
          description: "Generate static tokens for initializing Tinybird Local",
        },
        {
          name: "ls",
          description: "List all Tinybird Local workspaces you have access to",
        },
        { name: "remove", description: "Remove Tinybird Local" },
        {
          name: "restart",
          description: "Restart Tinybird Local",
          options: [
            useAwsCredsOption,
            volumesPathOption,
            skipNewVersionOption,
            {
              name: "--yes",
              description:
                "Skip the confirmation prompt. If provided, the container will be restarted without asking for confirmation",
            },
          ],
        },
        {
          name: "start",
          description: "Start Tinybird Local",
          options: [
            useAwsCredsOption,
            volumesPathOption,
            skipNewVersionOption,
            {
              name: "--user-token",
              description: "User token to use for the Tinybird Local container",
              args: { name: "token" },
            },
            {
              name: "--workspace-token",
              description:
                "Workspace token to use for the Tinybird Local container",
              args: { name: "token" },
            },
            ...toggle(
              ["-d", "--daemon"],
              ["-w", "--watch"],
              "Run Tinybird Local in the background",
              "Stream logs and monitor Tinybird Local until stopped (default)"
            ),
          ],
        },
        { name: "status", description: "Check status of Tinybird Local" },
        { name: "stop", description: "Stop Tinybird Local" },
        { name: "version", description: "Show Tinybird Local version" },
      ],
    },
    {
      name: "login",
      description: "Authenticate using the browser",
      options: [
        {
          name: "--host",
          description:
            "Set the API host to authenticate to. See https://www.tinybird.co/docs/api-reference#regions-and-endpoints for the available list of regions",
          args: { name: "host" },
        },
        {
          name: "--auth-host",
          description:
            "Set the auth host to authenticate to. If unset, the default host will be used",
          hidden: true,
          args: { name: "host", default: "https://cloud.tinybird.co" },
        },
        {
          name: "--workspace",
          description:
            "Set the workspace to authenticate to. If unset, the default workspace will be used",
          args: { name: "workspace" },
        },
        {
          name: ["-i", "--interactive"],
          description:
            "Show available regions and select where to authenticate to",
        },
        {
          name: "--method",
          description: "Set the authentication method to use. Default: browser",
          args: {
            name: "method",
            default: "browser",
            suggestions: ["browser", "code"],
          },
        },
      ],
    },
    { name: "logout", description: "Remove authentication from Tinybird" },
    {
      name: "logs",
      description: "Query Tinybird real-time service logs",
      options: [
        {
          name: ["-s", "--start"],
          description: "Start time (relative: -1h, -30m, -1d, -7d or ISO 8601)",
          args: { name: "start", default: "-1h" },
        },
        {
          name: ["-e", "--end"],
          description: "End time (relative or ISO 8601)",
          args: { name: "end" },
        },
        {
          name: "--source",
          description:
            "Comma-separated or repeated list of sources. Use '*' for all",
          isRepeatable: true,
          args: {
            name: "source",
            suggestions: [
              "tinybird.pipe_stats_rt",
              "tinybird.block_log",
              "tinybird.datasources_ops_log",
              "tinybird.endpoint_errors",
              "tinybird.kafka_ops_log",
              "tinybird.sinks_ops_log",
              "tinybird.jobs_log",
              "tinybird.llm_usage",
            ],
          },
        },
        {
          name: ["-n", "--limit"],
          description: "Maximum rows to return",
          args: { name: "limit", default: "100" },
        },
        {
          name: ["-x", "--expand"],
          description: "Show full details without truncation",
        },
        {
          name: ["-v", "--verbose"],
          description: "Show all fields in details with property names",
        },
      ],
    },
    {
      name: "materialization",
      description: "Materialization commands",
      subcommands: [
        {
          name: "ls",
          description: "List materializations",
          options: [matchOption, formatOption],
        },
        {
          name: "populate",
          description:
            "Populate the result of a materialized node into the target materialized view",
          hidden: true,
          options: [
            {
              name: "--node",
              description: "Name of the materialized node",
              args: { name: "node" },
            },
            {
              name: "--sql-condition",
              description:
                "Populate with a SQL condition applied to the trigger data source of the materialized view, for example --sql-condition='date == toYYYYMM(now())'",
              args: { name: "condition" },
            },
            {
              name: "--truncate",
              description:
                "Truncates the materialized data source before populating it",
            },
            {
              name: "--wait",
              description:
                "Waits for populate jobs to finish, showing a progress bar. Disabled by default",
            },
            {
              name: "--on-demand-compute",
              description:
                "Use on-demand compute instances for the populate job",
            },
          ],
          args: { name: "pipe_name" },
        },
      ],
    },
    {
      name: "migrate-to-forward",
      description:
        "Migrate a Tinybird Classic cloud workspace to Tinybird Forward",
      options: [
        ...toggle(
          "--allow-destructive-operations",
          "--no-allow-destructive-operations",
          "Allow destructive operations in deployments (for example replacing a Pipe with a Data Source)"
        ),
      ],
    },
    {
      name: "mock",
      description:
        "Removed. Create fixture files manually under the fixtures folder",
      hidden: true,
    },
    {
      name: "open",
      description: "Open workspace in the browser",
      options: [
        {
          name: "--workspace",
          description:
            "Set the workspace you want to open. If unset, your current workspace will be used",
          args: { name: "workspace" },
        },
      ],
    },
    {
      name: "pipe",
      description: "Pipe commands",
      subcommands: [
        {
          name: "ls",
          description: "List pipes",
          options: [matchOption, formatOption],
        },
      ],
    },
    {
      name: "preview",
      description: "Create a preview environment and deploy project resources",
      options: [
        {
          name: "--dry-run",
          description:
            "Generate preview target and exit without creating/deploying",
        },
        {
          name: "--check",
          description: "Validate deploy with Tinybird API without applying",
        },
        {
          name: "--name",
          description: "Override preview branch/workspace name",
          args: { name: "name" },
        },
      ],
    },
    {
      name: "project",
      description: "Project commands",
      hidden: true,
      subcommands: [
        {
          name: "archive",
          description:
            "Create a tar.gz archive of all datafiles for support purposes",
          options: [
            {
              name: ["-o", "--output"],
              description: "Output file path",
              args: { name: "path", template: "filepaths" },
            },
          ],
        },
      ],
    },
    {
      name: "pull",
      description:
        "Retrieve latest versions for project files from Tinybird. Deprecated alias kept for compatibility",
      hidden: true,
      options: [
        { name: "--only-vendored", description: "Only update vendored files" },
        { name: ["-f", "--force"], description: "Override existing files" },
        { name: "--fmt", description: "Format files before saving" },
      ],
    },
    {
      name: "push",
      description: "Deprecated. Use tb deploy instead",
      hidden: true,
    },
    {
      name: "secret",
      description: "Secret commands",
      subcommands: [
        {
          name: "ls",
          description: "List secrets",
          options: [
            {
              name: "--match",
              description:
                "Retrieve any secrets matching the pattern. For example, --match _test",
              args: { name: "pattern" },
            },
          ],
        },
        { name: "rm", description: "Delete a secret", args: { name: "name" } },
        {
          name: "set",
          description: "Create or update a secret",
          options: [
            {
              name: "--multiline",
              description: "Whether to use multiline input",
            },
          ],
          args: [{ name: "name" }, { name: "value", isOptional: true }],
        },
      ],
    },
    {
      name: "sink",
      description: "Sink pipe commands",
      subcommands: [
        {
          name: "ls",
          description: "List sink pipes",
          options: [matchOption, formatOption],
        },
        {
          name: "run",
          description: "Run a sink pipe on demand",
          options: [
            { name: "--wait", description: "Wait for the sink job to finish" },
            {
              name: "--mode",
              description: "Sink strategy",
              args: { name: "mode", suggestions: ["append", "replace"] },
            },
            {
              name: "--param",
              description:
                "Key and value of the params you want the Sink pipe to be called with. For example: tb sink run <my_sink_pipe> --param foo=bar",
              isRepeatable: true,
              args: { name: "key=value" },
            },
          ],
          args: { name: "pipe_name_or_id" },
        },
      ],
    },
    {
      name: "sql",
      description: "Run SQL query over data sources and pipes",
      options: [
        {
          name: "--rows-limit",
          description: "Max number of rows retrieved",
          args: { name: "rows", default: "100" },
        },
        {
          name: "--pipeline",
          description: "The name of the pipe to run the SQL Query",
          args: { name: "pipe" },
        },
        {
          name: "--pipe",
          description:
            "The path to the .pipe file to run the SQL Query of a specific NODE",
          args: { name: "pipe", template: "filepaths" },
        },
        {
          name: "--node",
          description: "The NODE name",
          args: { name: "node" },
        },
        ...toggle("--stats", "--no-stats", "Show query stats"),
      ],
      args: { name: "query", isOptional: true },
    },
    {
      name: "tag",
      description: "Deprecated. Removed in Tinybird Forward",
      hidden: true,
    },
    {
      name: "test",
      description: "Test commands",
      subcommands: [
        {
          name: "run",
          description: "Run the test suite, a file or a test",
          args: {
            name: "name",
            isOptional: true,
            isVariadic: true,
            template: "filepaths",
          },
        },
        {
          name: "update",
          description: "Update the test expectations for a file or a test",
          args: { name: "pipe", template: "filepaths" },
        },
      ],
    },
    {
      name: "token",
      description: "Token commands",
      subcommands: [
        {
          name: "copy",
          description: "Copy a Static Token",
          args: { name: "token_id" },
        },
        {
          name: "create",
          description: "Create a static or a JWT token",
          subcommands: [
            {
              name: "jwt",
              description: "Create a JWT token with a TTL",
              options: [
                {
                  name: "--ttl",
                  description: "Time to live (e.g., '1h', '30min', '1d')",
                  isRequired: true,
                  args: { name: "ttl" },
                },
                {
                  name: "--scope",
                  description:
                    "Scope of the token (only PIPES:READ and DATASOURCES:READ are allowed for JWT tokens)",
                  isRequired: true,
                  isRepeatable: true,
                  args: {
                    name: "scope",
                    suggestions: ["PIPES:READ", "DATASOURCES:READ"],
                  },
                },
                {
                  name: "--resource",
                  description: "Resource associated with the scope",
                  isRequired: true,
                  isRepeatable: true,
                  args: { name: "resource" },
                },
                {
                  name: "--fixed-params",
                  description:
                    "Fixed parameters in key=value format, multiple values separated by commas",
                  isRepeatable: true,
                  args: { name: "key=value" },
                },
                {
                  name: "--filter",
                  description:
                    "SQL filter to apply when reading a datasource (only applicable for DATASOURCES:READ scope)",
                  isRepeatable: true,
                  args: { name: "filter" },
                },
              ],
              args: { name: "name" },
            },
            {
              name: "static",
              description: "Create a static token",
              options: [
                {
                  name: "--scope",
                  description:
                    "Scope for the token. It can be followed by its own --resource and --filter",
                  isRequired: true,
                  isRepeatable: true,
                  args: {
                    name: "scope",
                    suggestions: [
                      "ADMIN",
                      "TOKENS",
                      "WORKSPACE:READ_ALL",
                      "WORKSPACE:DEPLOY",
                      "ORG_DATASOURCES:READ",
                    ],
                  },
                },
                {
                  name: "--resource",
                  description: "Resource you want to associate the scope with",
                  isRepeatable: true,
                  args: { name: "resource" },
                },
                {
                  name: "--filter",
                  description:
                    "SQL filter to apply to the preceding scope and resource",
                  isRepeatable: true,
                  args: { name: "filter" },
                },
              ],
              args: { name: "name" },
            },
          ],
        },
        {
          name: "ls",
          description: "List Static Tokens",
          options: [
            {
              name: "--match",
              description:
                "Retrieve any token matching the pattern. For example, --match _test",
              args: { name: "pattern" },
            },
          ],
        },
        {
          name: "refresh",
          description: "Refresh a Static Token",
          options: [yesOption],
          args: { name: "token_id" },
        },
        {
          name: "rm",
          description: "Remove a static token",
          options: [yesOption],
          args: { name: "token_id" },
        },
        {
          name: "scopes",
          description: "List Static Token scopes",
          args: { name: "token_id" },
        },
      ],
    },
    {
      name: "update",
      description: "Update Tinybird CLI to the latest version",
    },
    {
      name: "upgrade",
      description: "Update Tinybird CLI to the latest version",
      hidden: true,
    },
    {
      name: "workspace",
      description: "Workspace commands",
      subcommands: [
        {
          name: "clear",
          description: "Deprecated. Use tb branch clear instead",
          hidden: true,
          options: [yesOption],
        },
        {
          name: "create",
          description: "Create a new workspace for your Tinybird user",
          options: [
            {
              name: "--organization-id",
              description:
                "When passed, the workspace will be created in the specified organization",
              args: { name: "id" },
            },
          ],
          args: { name: "workspace_name", isOptional: true },
        },
        {
          name: "current",
          description: "Show the workspace you're currently authenticated to",
        },
        {
          name: "delete",
          description: "Delete a workspace where you are an admin",
          options: [
            {
              name: "--confirm_hard_delete",
              description:
                "Enter the name of the workspace to confirm you want to run a hard delete over the workspace",
              hidden: true,
              args: { name: "name" },
            },
            yesOption,
          ],
          args: { name: "workspace_name_or_id" },
        },
        {
          name: "ls",
          description: "List all the workspaces you have access to",
        },
        {
          name: "members",
          description: "Workspace members management commands",
          subcommands: [
            {
              name: "add",
              description: "Add members to the current workspace",
              options: [
                {
                  name: "--role",
                  description: "Role for the members being added",
                  args: { name: "role", suggestions: ["viewer", "admin"] },
                },
                userTokenOption,
              ],
              args: { name: "emails" },
            },
            {
              name: "ls",
              description: "List members in the current workspace",
            },
            {
              name: "rm",
              description: "Remove members from the current workspace",
              options: [userTokenOption],
              args: { name: "emails" },
            },
            {
              name: "set-role",
              description: "Set the role for existing workspace members",
              options: [userTokenOption],
              args: [
                { name: "role", suggestions: ["viewer", "admin"] },
                { name: "emails" },
              ],
            },
          ],
        },
        {
          name: "use",
          description: "Switch to another workspace",
          args: { name: "workspace_name_or_id" },
        },
      ],
    },
  ],
};

export default completionSpec;
