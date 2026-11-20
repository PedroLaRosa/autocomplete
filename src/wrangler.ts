// Wrangler v4.165.0 (npm latest dist-tag, 2026-11-20). Source: cloudflare/workers-sdk tag wrangler@4.165.0, packages/wrangler/src
// (commands registered in src/index.ts via createCommand/createNamespace/createAlias, plus the global flags defined there).
// Wrangler was NOT executed (downloaded code cannot be run in the sync sandbox): the command tree, args, choices and aliases were
// read statically from the TypeScript source with a script that evaluates the definitions without running them.
// The spec replaces the Wrangler v1 (Rust) command set (generate, kv:namespace, publish, preview, config, ...) that no longer exists.
// Command statuses other than stable are appended to descriptions as in `wrangler complete`; hidden commands and flags are marked hidden.
// Not covered: the hidden --temporary / --event-code flags (supported by many commands), yargs --no-<flag> negations and camelCase flag spellings.

const OPTION_EXPERIMENTAL_NEW_CONFIG: Fig.Option = {
  name: ["--experimental-new-config", "--x-new-config"],
  description: "[experimental] Use cloudflare.config.ts and wrangler.config.ts",
  hidden: true,
};

const OPTION_NAME: Fig.Option = {
  name: "--name",
  description: "Name of the Worker",
  args: {
    name: "name",
  },
};

const OPTION_COMPATIBILITY_DATE: Fig.Option = {
  name: "--compatibility-date",
  description: "Date to use for compatibility checks",
  args: {
    name: "compatibility-date",
  },
};

const OPTION_COMPATIBILITY_FLAGS: Fig.Option = {
  name: ["--compatibility-flags", "--compatibility-flag"],
  description: "Flags to use for compatibility checks",
  args: {
    name: "compatibility-flags",
  },
  isRepeatable: true,
};

const OPTION_ASSETS: Fig.Option = {
  name: "--assets",
  description: "Static assets to be served. Replaces Workers Sites",
  args: {
    name: "assets",
    template: "folders",
  },
};

const OPTION_ROUTES: Fig.Option = {
  name: ["--routes", "--route"],
  description: "Routes to upload",
  args: {
    name: "routes",
  },
  isRepeatable: true,
};

const OPTION_SITE: Fig.Option = {
  name: "--site",
  description: "Root folder of static assets for Workers Sites",
  args: {
    name: "site",
    template: "folders",
  },
  hidden: true,
  deprecated: true,
};

const OPTION_SITE_INCLUDE: Fig.Option = {
  name: "--site-include",
  description:
    "Array of .gitignore-style patterns that match file or directory names from the sites directory. Only matched items will be uploaded",
  args: {
    name: "site-include",
  },
  isRepeatable: true,
  hidden: true,
  deprecated: true,
};

const OPTION_SITE_EXCLUDE: Fig.Option = {
  name: "--site-exclude",
  description:
    "Array of .gitignore-style patterns that match file or directory names from the sites directory. Matched items will not be uploaded",
  args: {
    name: "site-exclude",
  },
  isRepeatable: true,
  hidden: true,
  deprecated: true,
};

const OPTION_VAR: Fig.Option = {
  name: "--var",
  description: "A key-value pair to be injected into the script as a variable",
  args: {
    name: "var",
  },
  isRepeatable: true,
};

const OPTION_DEFINE: Fig.Option = {
  name: "--define",
  description: "A key-value pair to be substituted in the script",
  args: {
    name: "define",
  },
  isRepeatable: true,
};

const OPTION_ALIAS: Fig.Option = {
  name: "--alias",
  description: "A module pair to be substituted in the script",
  args: {
    name: "alias",
  },
  isRepeatable: true,
};

const OPTION_JSX_FACTORY: Fig.Option = {
  name: "--jsx-factory",
  description: "The function that is called for each JSX element",
  args: {
    name: "jsx-factory",
  },
};

const OPTION_JSX_FRAGMENT: Fig.Option = {
  name: "--jsx-fragment",
  description: "The function that is called for each JSX fragment",
  args: {
    name: "jsx-fragment",
  },
};

const OPTION_TSCONFIG: Fig.Option = {
  name: "--tsconfig",
  description: "Path to a custom tsconfig.json file",
  args: {
    name: "tsconfig",
    template: "filepaths",
  },
};

const OPTION_NODE_COMPAT: Fig.Option = {
  name: "--node-compat",
  description: "Enable Node.js compatibility",
  hidden: true,
  deprecated: true,
};

const OPTION_OUTDIR: Fig.Option = {
  name: "--outdir",
  description: "Output directory for the bundled Worker",
  args: {
    name: "outdir",
    template: "folders",
  },
};

const OPTION_EXPERIMENTAL_DEPLOY_HELPERS: Fig.Option = {
  name: ["--experimental-deploy-helpers", "--x-deploy-helpers"],
  description: "Experimental: Gates refactored deploy/upload path",
  hidden: true,
};

const OPTION_DURABLE_OBJECTS_CODE_UPDATE_MODE: Fig.Option = {
  name: "--durable-objects-code-update-mode",
  description:
    "How to update Durable Object code: immediate, or deferred followed by a maximum delay (for example, deferred 30s)",
  args: {
    name: "durable-objects-code-update-mode",
  },
};

const OPTION_NAME_2: Fig.Option = {
  name: "--name",
  description: "Name of the Preview (defaults to current git branch)",
  args: {
    name: "name",
  },
};

const OPTION_TAG: Fig.Option = {
  name: "--tag",
  description: "A tag for this Preview deployment",
  args: {
    name: "tag",
  },
};

const OPTION_MESSAGE: Fig.Option = {
  name: "--message",
  description: "A descriptive message for this Preview deployment",
  args: {
    name: "message",
  },
};

const OPTION_JSON: Fig.Option = {
  name: "--json",
  description: "Return output as JSON",
};

const OPTION_WORKER_NAME: Fig.Option = {
  name: "--worker-name",
  description:
    "Name of the Worker to target (defaults to the name in your local config file)",
  args: {
    name: "worker-name",
  },
};

const OPTION_SKIP_CONFIRMATION: Fig.Option = {
  name: ["-y", "--skip-confirmation"],
  description: "Skip the confirmation prompt",
};

const OPTION_JSON_2: Fig.Option = {
  name: "--json",
  description: "Display output as JSON",
};

const OPTION_NAME_3: Fig.Option = {
  name: "--name",
  description: "Name of the worker",
  args: {
    name: "name",
  },
};

const OPTION_MESSAGE_2: Fig.Option = {
  name: "--message",
  description: "Description of this deployment",
  args: {
    name: "message",
  },
};

const OPTION_TAG_2: Fig.Option = {
  name: "--tag",
  description: "A tag for this version",
  args: {
    name: "tag",
  },
};

const OPTION_NAME_4: Fig.Option = {
  name: "--name",
  description:
    "Name of the Worker. If this is not specified, it will default to the name specified in your Wrangler config file",
  args: {
    name: "name",
  },
};

const OPTION_PREVIEW: Fig.Option = {
  name: "--preview",
  description: "Interact with a preview namespace",
};

const OPTION_USE_REMOTE: Fig.Option = {
  name: "--use-remote",
  description:
    "Use a remote binding when adding the newly created resource to your config",
};

const OPTION_UPDATE_CONFIG: Fig.Option = {
  name: "--update-config",
  description:
    "Automatically update your config file with the newly added resource",
};

const OPTION_BINDING: Fig.Option = {
  name: "--binding",
  description: "The binding name of this resource in your Worker",
  args: {
    name: "binding",
  },
};

const OPTION_BINDING_2: Fig.Option = {
  name: "--binding",
  description: "The binding name to the namespace to delete from",
  args: {
    name: "binding",
  },
};

const OPTION_SKIP_CONFIRMATION_2: Fig.Option = {
  name: ["-y", "--skip-confirmation"],
  description: "Skip confirmation",
};

const OPTION_LOCAL: Fig.Option = {
  name: "--local",
  description: "Interact with local storage",
  exclusiveOn: ["--remote"],
};

const OPTION_REMOTE: Fig.Option = {
  name: "--remote",
  description: "Interact with remote storage",
  exclusiveOn: ["--local"],
};

const OPTION_PERSIST_TO: Fig.Option = {
  name: "--persist-to",
  description: "Directory for local persistence",
  args: {
    name: "persist-to",
    template: "folders",
  },
};

const OPTION_NAMESPACE: Fig.Option = {
  name: "--namespace",
  description: "The Artifacts namespace name",
  args: {
    name: "namespace",
  },
  isRequired: true,
};

const OPTION_FORCE: Fig.Option = {
  name: ["-y", "--force"],
  description: "Skip confirmation",
};

const OPTION_BATCH_SIZE: Fig.Option = {
  name: "--batch-size",
  description: "Maximum number of messages per batch",
  args: {
    name: "batch-size",
  },
};

const OPTION_MESSAGE_RETRIES: Fig.Option = {
  name: "--message-retries",
  description: "Maximum number of retries for each message",
  args: {
    name: "message-retries",
  },
};

const OPTION_DEAD_LETTER_QUEUE: Fig.Option = {
  name: "--dead-letter-queue",
  description: "Queue to send messages that failed to be consumed",
  args: {
    name: "dead-letter-queue",
  },
};

const OPTION_RETRY_DELAY_SECS: Fig.Option = {
  name: "--retry-delay-secs",
  description: "The number of seconds to wait before retrying a message",
  args: {
    name: "retry-delay-secs",
  },
};

const OPTION_JSON_3: Fig.Option = {
  name: "--json",
  description: "Output in JSON format",
};

const OPTION_PAGE: Fig.Option = {
  name: "--page",
  description: "Page number for pagination",
  args: {
    name: "page",
    default: "1",
  },
};

const OPTION_FORCE_2: Fig.Option = {
  name: ["-y", "--force"],
  description: "Skip Basin Catalog validation prompt",
};

const OPTION_JURISDICTION: Fig.Option = {
  name: ["-J", "--jurisdiction"],
  description: "The jurisdiction where the bucket exists",
  args: {
    name: "jurisdiction",
  },
};

const OPTION_LOCAL_2: Fig.Option = {
  name: "--local",
  description: "Use the local flag store instead of the remote app",
};

const OPTION_REMOTE_2: Fig.Option = {
  name: "--remote",
  description: "Use the remote app instead of the local flag store",
};

const OPTION_PERSIST_TO_2: Fig.Option = {
  name: "--persist-to",
  description: "Specify directory to use for local persistence",
  args: {
    name: "persist-to",
    template: "folders",
  },
};

const OPTION_JSON_4: Fig.Option = {
  name: "--json",
  description: "Return output as clean JSON",
};

const OPTION_PAGE_2: Fig.Option = {
  name: "--page",
  description:
    'Page number of the results, can configure page size using "per-page"',
  args: {
    name: "page",
    default: "1",
  },
};

const OPTION_NAMESPACE_2: Fig.Option = {
  name: ["-n", "--namespace"],
  description: "The namespace the instance belongs to",
  args: {
    name: "namespace",
    default: "default",
  },
};

const OPTION_NAME_5: Fig.Option = {
  name: "--name",
  description: "The name for the certificate",
  args: {
    name: "name",
  },
};

const OPTION_PROJECT_NAME: Fig.Option = {
  name: ["--project-name", "--project"],
  description: "The name of your Pages project",
  args: {
    name: "project-name",
  },
};

const OPTION_PATH_TO_DOCKER: Fig.Option = {
  name: "--path-to-docker",
  description: "Path to your docker binary if it's not on $PATH",
  args: {
    name: "path-to-docker",
  },
};

const OPTION_JSON_5: Fig.Option = {
  name: "--json",
  description: "Format output as JSON",
};

const OPTION_REMOTE_3: Fig.Option = {
  name: "--remote",
  description: "Execute command against remote Secrets Store",
};

const OPTION_LOCAL_3: Fig.Option = {
  name: "--local",
  description: "Interact with local dev session",
};

const OPTION_PORT: Fig.Option = {
  name: "--port",
  description: "Port of the local dev session (default: 8787)",
  args: {
    name: "port",
    default: "8787",
  },
};

const OPTION_JSON_6: Fig.Option = {
  name: "--json",
  description: "Output the raw API response as JSON",
};

const OPTION_ZONE_ID: Fig.Option = {
  name: "--zone-id",
  description: "Zone ID (optional, skips zone lookup if provided)",
  args: {
    name: "zone-id",
  },
};

const SHARED_BASIN_SQL: Fig.Subcommand = {
  name: "sql",
  description: "Send queries and manage Basin SQL",
  subcommands: [
    {
      name: "query",
      description: "Execute SQL query against Basin Catalog",
      args: [
        {
          name: "warehouse",
          description: "Basin Catalog warehouse name",
        },
        {
          name: "query",
          description: "The SQL query to execute",
        },
      ],
    },
  ],
};

const SHARED_BASIN_CATALOG: Fig.Subcommand = {
  name: "catalog",
  description:
    "Manage Basin Catalog for your R2 buckets - provides an Iceberg REST interface for query engines like Spark and PyIceberg",
  subcommands: [
    {
      name: "enable",
      description: "Enable Basin Catalog on an R2 bucket",
      args: {
        name: "bucket",
        description: "The name of the bucket to enable",
      },
    },
    {
      name: "disable",
      description: "Disable Basin Catalog for an R2 bucket",
      args: {
        name: "bucket",
        description: "The name of the bucket to disable Basin Catalog for",
      },
    },
    {
      name: "get",
      description: "Get the status of Basin Catalog for an R2 bucket",
      args: {
        name: "bucket",
        description:
          "The name of the R2 bucket whose Basin Catalog status to retrieve",
      },
    },
    {
      name: "compaction",
      description:
        "Control settings for automatic file compaction maintenance jobs for Basin Catalog",
      subcommands: [
        {
          name: "enable",
          description:
            "Enable automatic file compaction for Basin Catalog or a specific table",
          args: [
            {
              name: "bucket",
              description: "The name of the bucket which contains the catalog",
            },
            {
              name: "namespace",
              description:
                "The namespace containing the table (optional, for table-level compaction)",
              isOptional: true,
            },
            {
              name: "table",
              description:
                "The name of the table (optional, for table-level compaction)",
              isOptional: true,
            },
          ],
          options: [
            {
              name: "--target-size",
              description:
                "The target size for compacted files in MB (allowed values: 64, 128, 256, 512)",
              args: {
                name: "target-size",
                default: "128",
              },
            },
            {
              name: "--token",
              description:
                "A cloudflare api token with access to R2 and Basin Catalog (required for catalog-level compaction settings only)",
              args: {
                name: "token",
              },
            },
          ],
        },
        {
          name: "disable",
          description:
            "Disable automatic file compaction for Basin Catalog or a specific table",
          args: [
            {
              name: "bucket",
              description: "The name of the bucket which contains the catalog",
            },
            {
              name: "namespace",
              description:
                "The namespace containing the table (optional, for table-level compaction)",
              isOptional: true,
            },
            {
              name: "table",
              description:
                "The name of the table (optional, for table-level compaction)",
              isOptional: true,
            },
          ],
        },
      ],
    },
    {
      name: "snapshot-expiration",
      description:
        "Control settings for automatic snapshot expiration maintenance jobs for Basin Catalog",
      subcommands: [
        {
          name: "enable",
          description:
            "Enable automatic snapshot expiration for Basin Catalog or a specific table",
          args: [
            {
              name: "bucket",
              description: "The name of the bucket which contains the catalog",
            },
            {
              name: "namespace",
              description:
                "The namespace containing the table (optional, for table-level snapshot expiration)",
              isOptional: true,
            },
            {
              name: "table",
              description:
                "The name of the table (optional, for table-level snapshot expiration)",
              isOptional: true,
            },
          ],
          options: [
            {
              name: "--older-than-days",
              description:
                "Delete snapshots older than this many days, defaults to 30",
              args: {
                name: "older-than-days",
              },
            },
            {
              name: "--retain-last",
              description:
                "The minimum number of snapshots to retain, defaults to 5",
              args: {
                name: "retain-last",
              },
            },
            {
              name: "--token",
              description:
                "A cloudflare api token with access to R2 and Basin Catalog (required for catalog-level snapshot expiration settings only)",
              args: {
                name: "token",
              },
            },
          ],
        },
        {
          name: "disable",
          description:
            "Disable automatic snapshot expiration for Basin Catalog or a specific table",
          args: [
            {
              name: "bucket",
              description: "The name of the bucket which contains the catalog",
            },
            {
              name: "namespace",
              description:
                "The namespace containing the table (optional, for table-level snapshot expiration)",
              isOptional: true,
            },
            {
              name: "table",
              description:
                "The name of the table (optional, for table-level snapshot expiration)",
              isOptional: true,
            },
          ],
          options: [
            {
              name: "--force",
              description: "Skip confirmation prompt",
            },
          ],
        },
      ],
    },
  ],
};

const SHARED_BASIN_PIPELINES: Fig.Subcommand = {
  name: "pipelines",
  description: "Manage Cloudflare Pipelines",
  subcommands: [
    {
      name: "setup",
      description: "Interactive setup for a complete pipeline",
      options: [
        {
          name: "--name",
          description: "Pipeline name",
          args: {
            name: "name",
          },
        },
      ],
    },
    {
      name: "create",
      description: "Create a new pipeline",
      args: {
        name: "pipeline",
        description: "The name of the pipeline to create",
      },
      options: [
        {
          name: "--sql",
          description: "Inline SQL query for the pipeline",
          args: {
            name: "sql",
          },
          exclusiveOn: ["--sql-file"],
        },
        {
          name: "--sql-file",
          description: "Path to file containing SQL query for the pipeline",
          args: {
            name: "sql-file",
          },
          exclusiveOn: ["--sql"],
        },
      ],
    },
    {
      name: "list",
      description: "List all pipelines",
      options: [
        OPTION_PAGE,
        {
          name: "--per-page",
          description: "Number of pipelines per page",
          args: {
            name: "per-page",
            default: "20",
          },
        },
        OPTION_JSON_3,
      ],
    },
    {
      name: "get",
      description: "Get details about a specific pipeline",
      args: {
        name: "pipeline",
        description: "The ID or name of the pipeline to retrieve",
      },
      options: [OPTION_JSON_3],
    },
    {
      name: "update",
      description: "Update a pipeline configuration (legacy pipelines only)",
      args: {
        name: "pipeline",
        description: "The name of the legacy pipeline to update",
      },
      options: [
        {
          name: "--source",
          description:
            "Space separated list of allowed sources. Options are 'http' or 'worker'",
          args: {
            name: "source",
          },
          isRepeatable: true,
        },
        {
          name: "--require-http-auth",
          description:
            "Require Cloudflare API Token for HTTPS endpoint authentication",
        },
        {
          name: "--cors-origins",
          description:
            "CORS origin allowlist for HTTP endpoint (use * for any origin). Defaults to an empty array",
          args: {
            name: "cors-origins",
          },
          isRepeatable: true,
        },
        {
          name: "--batch-max-mb",
          description:
            "Maximum batch size in megabytes before flushing. Defaults to 100 MB if unset. Minimum: 1, Maximum: 100",
          args: {
            name: "batch-max-mb",
          },
        },
        {
          name: "--batch-max-rows",
          description:
            "Maximum number of rows per batch before flushing. Defaults to 10,000,000 if unset. Minimum: 100, Maximum: 10,000,000",
          args: {
            name: "batch-max-rows",
          },
        },
        {
          name: "--batch-max-seconds",
          description:
            "Maximum age of batch in seconds before flushing. Defaults to 300 if unset. Minimum: 1, Maximum: 300",
          args: {
            name: "batch-max-seconds",
          },
        },
        {
          name: "--r2-bucket",
          description: "Destination R2 bucket name",
          args: {
            name: "r2-bucket",
          },
        },
        {
          name: "--r2-access-key-id",
          description:
            "R2 service Access Key ID for authentication. Leave empty for OAuth confirmation",
          args: {
            name: "r2-access-key-id",
          },
        },
        {
          name: "--r2-secret-access-key",
          description:
            "R2 service Secret Access Key for authentication. Leave empty for OAuth confirmation",
          args: {
            name: "r2-secret-access-key",
          },
        },
        {
          name: "--r2-prefix",
          description:
            "Prefix for storing files in the destination bucket. Default is no prefix",
          args: {
            name: "r2-prefix",
          },
        },
        {
          name: "--compression",
          description: "Compression format for output files",
          args: {
            name: "compression",
            suggestions: ["none", "gzip", "deflate"],
          },
        },
        {
          name: "--shard-count",
          description:
            "Number of shards for the pipeline. More shards handle higher request volume; fewer shards produce larger output files. Defaults to 2 if unset. Minimum: 1, Maximum: 15",
          args: {
            name: "shard-count",
          },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a pipeline",
      args: {
        name: "pipeline",
        description: "The ID or name of the pipeline to delete",
      },
      options: [OPTION_FORCE],
    },
    {
      name: "streams",
      description: "Manage streams for pipelines",
      subcommands: [
        {
          name: "create",
          description: "Create a new stream",
          args: {
            name: "stream",
            description: "The name of the stream to create",
          },
          options: [
            {
              name: "--schema-file",
              description: "Path to JSON file containing stream schema",
              args: {
                name: "schema-file",
                template: "filepaths",
              },
            },
            {
              name: "--http-enabled",
              description: "Enable HTTP endpoint",
            },
            {
              name: "--http-auth",
              description: "Require authentication for HTTP endpoint",
            },
            {
              name: "--cors-origin",
              description: "CORS origin",
              args: {
                name: "cors-origin",
              },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "list",
          description: "List all streams",
          options: [
            OPTION_PAGE,
            {
              name: "--per-page",
              description: "Number of streams per page",
              args: {
                name: "per-page",
                default: "20",
              },
            },
            {
              name: "--pipeline-id",
              description: "Filter streams by pipeline ID",
              args: {
                name: "pipeline-id",
              },
            },
            OPTION_JSON_3,
          ],
        },
        {
          name: "get",
          description: "Get details about a specific stream",
          args: {
            name: "stream",
            description: "The ID or name of the stream to retrieve",
          },
          options: [OPTION_JSON_3],
        },
        {
          name: "delete",
          description: "Delete a stream",
          args: {
            name: "stream",
            description: "The ID or name of the stream to delete",
          },
          options: [OPTION_FORCE],
        },
      ],
    },
    {
      name: "sinks",
      description: "Manage sinks for pipelines",
      subcommands: [
        {
          name: "create",
          description: "Create a new sink",
          args: {
            name: "sink",
            description: "The name of the sink to create",
          },
          options: [
            {
              name: "--type",
              description: "The type of sink to create",
              args: {
                name: "type",
                suggestions: ["r2", "r2-data-catalog"],
              },
              isRequired: true,
            },
            {
              name: "--bucket",
              description: "R2 bucket name",
              args: {
                name: "bucket",
              },
              isRequired: true,
            },
            {
              name: "--format",
              description: "Output format",
              args: {
                name: "format",
                suggestions: ["json", "parquet"],
                default: "parquet",
              },
            },
            {
              name: "--compression",
              description:
                "Compression method (JSON supports uncompressed and gzip; Parquet defaults to zstd)",
              args: {
                name: "compression",
                suggestions: ["uncompressed", "snappy", "gzip", "zstd", "lz4"],
              },
            },
            {
              name: "--target-row-group-size",
              description: "Target row group size for parquet format",
              args: {
                name: "target-row-group-size",
              },
            },
            {
              name: "--path",
              description:
                "The base prefix in your bucket where data will be written",
              args: {
                name: "path",
                template: "filepaths",
              },
            },
            {
              name: "--partitioning",
              description: "Time partition pattern (r2 sinks only)",
              args: {
                name: "partitioning",
              },
            },
            {
              name: "--roll-size",
              description: "Roll file size in MB",
              args: {
                name: "roll-size",
              },
            },
            {
              name: "--roll-interval",
              description: "Roll file interval in seconds",
              args: {
                name: "roll-interval",
                default: "300",
              },
            },
            {
              name: "--access-key-id",
              description:
                "R2 access key ID (leave empty for R2 credentials to be automatically created)",
              args: {
                name: "access-key-id",
              },
            },
            {
              name: "--secret-access-key",
              description:
                "R2 secret access key (leave empty for R2 credentials to be automatically created)",
              args: {
                name: "secret-access-key",
              },
            },
            {
              name: "--namespace",
              description:
                "Basin Catalog namespace (required for r2-data-catalog)",
              args: {
                name: "namespace",
              },
            },
            {
              name: "--table",
              description:
                "Table name within namespace (required for r2-data-catalog)",
              args: {
                name: "table",
              },
            },
            {
              name: "--catalog-token",
              description:
                "Authentication token for Basin Catalog (required for r2-data-catalog)",
              args: {
                name: "catalog-token",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List all sinks",
          options: [
            OPTION_PAGE,
            {
              name: "--per-page",
              description: "Number of sinks per page",
              args: {
                name: "per-page",
                default: "20",
              },
            },
            {
              name: "--pipeline-id",
              description: "Filter sinks by pipeline ID",
              args: {
                name: "pipeline-id",
              },
            },
            OPTION_JSON_3,
          ],
        },
        {
          name: "get",
          description: "Get details about a specific sink",
          args: {
            name: "sink",
            description: "The ID or name of the sink to retrieve",
          },
          options: [OPTION_JSON_3],
        },
        {
          name: "delete",
          description: "Delete a sink",
          args: {
            name: "sink",
            description: "The ID or name of the sink to delete",
          },
          options: [OPTION_FORCE],
        },
      ],
    },
  ],
};

const SHARED_PAGES_DEPLOY: Fig.Subcommand = {
  name: "deploy",
  description: "Deploy a directory of static assets as a Pages deployment",
  args: {
    name: "directory",
    description: "The directory of static files to upload",
    isOptional: true,
    template: "folders",
  },
  options: [
    {
      name: "--project-name",
      description: "The name of the project you want to deploy to",
      args: {
        name: "project-name",
      },
    },
    {
      name: "--branch",
      description: "The name of the branch you want to deploy to",
      args: {
        name: "branch",
      },
    },
    {
      name: "--commit-hash",
      description: "The SHA to attach to this deployment",
      args: {
        name: "commit-hash",
      },
    },
    {
      name: "--commit-message",
      description: "The commit message to attach to this deployment",
      args: {
        name: "commit-message",
      },
    },
    {
      name: "--commit-dirty",
      description:
        "Whether or not the workspace should be considered dirty for this deployment",
    },
    {
      name: "--skip-caching",
      description: "Skip asset caching which speeds up builds",
    },
    {
      name: "--bundle",
      hidden: true,
    },
    {
      name: "--no-bundle",
      description: "Whether to run bundling on `_worker.js` before deploying",
    },
    {
      name: "--config",
      description:
        "Pages does not support custom Wrangler configuration file locations",
      args: {
        name: "config",
        template: "filepaths",
      },
      hidden: true,
    },
    {
      name: "--upload-source-maps",
      description:
        "Whether to upload any server-side sourcemaps with this deployment",
    },
    {
      name: "--force",
      description:
        "Deploy directly to Cloudflare Pages, bypassing the automatic delegation to Cloudflare Workers for new static projects",
      hidden: true,
    },
  ],
};

const SHARED_TELEMETRY: Fig.Subcommand = {
  name: "telemetry",
  description: "Configure whether Wrangler collects telemetry",
  hidden: true,
  subcommands: [
    {
      name: "disable",
      description: "Disable Wrangler telemetry collection",
    },
    {
      name: "enable",
      description: "Enable Wrangler telemetry collection",
    },
    {
      name: "status",
      description: "Check whether Wrangler telemetry collection is enabled",
    },
  ],
};

const completionSpec: Fig.Spec = {
  name: "wrangler",
  description: "Command-line interface for all things Cloudflare Workers",
  subcommands: [
    {
      name: "docs",
      description: "Open Wrangler's command documentation in your browser",
      args: {
        name: "search",
        description:
          "Enter search terms (e.g. the wrangler command) you want to know more about",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        {
          name: ["-y", "--yes"],
          description: "Takes you to the docs, even if search fails",
        },
      ],
    },
    {
      name: "complete",
      description: "Generate and handle shell completions",
      args: {
        name: "shell",
        description: "Shell type to generate completions for",
        isOptional: true,
        suggestions: ["bash", "fish", "powershell", "zsh"],
      },
    },
    {
      name: "init",
      description: "Initialize a basic Worker",
      args: {
        name: "name",
        description: "The name of your worker",
        isOptional: true,
      },
      options: [
        {
          name: ["-y", "--yes"],
          description: 'Answer "yes" to any prompts for new projects',
        },
        {
          name: "--from-dash",
          description:
            "The name of the Worker you wish to download from the Cloudflare dashboard for local development",
          args: {
            name: "from-dash",
          },
        },
        {
          name: ["--delegate-c3", "--c3"],
          description: "Delegate to Create Cloudflare CLI (C3)",
          hidden: true,
        },
      ],
    },
    {
      name: "dev",
      description: "Start a local server for developing your Worker",
      args: {
        name: "script",
        description: "The path to an entry point for your Worker",
        isOptional: true,
        template: "filepaths",
      },
      options: [
        OPTION_EXPERIMENTAL_NEW_CONFIG,
        OPTION_NAME,
        OPTION_COMPATIBILITY_DATE,
        OPTION_COMPATIBILITY_FLAGS,
        {
          name: "--latest",
          description: "Use the latest version of the Workers runtime",
        },
        OPTION_ASSETS,
        {
          name: "--bundle",
          description: "Run wrangler's compilation step before publishing",
          hidden: true,
        },
        {
          name: "--no-bundle",
          description: "Skip internal build steps and directly deploy script",
        },
        {
          name: "--ip",
          description: "IP address to listen on",
          args: {
            name: "ip",
          },
        },
        {
          name: "--port",
          description: "Port to listen on",
          args: {
            name: "port",
          },
        },
        {
          name: "--inspector-port",
          description: "Port for devtools to connect to",
          args: {
            name: "inspector-port",
          },
        },
        {
          name: "--inspector-ip",
          description: "IP address for devtools to connect to",
          args: {
            name: "inspector-ip",
          },
        },
        OPTION_ROUTES,
        {
          name: "--host",
          description:
            "Host to forward requests to, defaults to the zone of project",
          args: {
            name: "host",
          },
        },
        {
          name: "--local-protocol",
          description: "Protocol to listen to requests on, defaults to http",
          args: {
            name: "local-protocol",
            suggestions: ["http", "https"],
          },
        },
        {
          name: "--https-key-path",
          description: "Path to a custom certificate key",
          args: {
            name: "https-key-path",
            template: "filepaths",
          },
        },
        {
          name: "--https-cert-path",
          description: "Path to a custom certificate",
          args: {
            name: "https-cert-path",
            template: "filepaths",
          },
        },
        {
          name: "--local-upstream",
          description:
            "Host to act as origin in local mode, defaults to dev.host or route",
          args: {
            name: "local-upstream",
          },
        },
        {
          name: "--infer-origin-from-routes",
          description:
            "Use the first configured route to infer the origin (request.url and the Host header) seen by the Worker in local mode. Set to false to preserve the real local origin, e.g. localhost:8787. Has no effect in remote mode",
        },
        {
          name: "--enable-containers",
          description:
            "Whether to build and enable containers during development",
          hidden: true,
        },
        OPTION_SITE,
        OPTION_SITE_INCLUDE,
        OPTION_SITE_EXCLUDE,
        {
          name: "--upstream-protocol",
          description:
            "Protocol to forward requests to host on, defaults to https",
          args: {
            name: "upstream-protocol",
            suggestions: ["http", "https"],
          },
        },
        OPTION_VAR,
        OPTION_DEFINE,
        OPTION_ALIAS,
        OPTION_JSX_FACTORY,
        OPTION_JSX_FRAGMENT,
        OPTION_TSCONFIG,
        {
          name: ["-r", "--remote"],
          description:
            "Run on the global Cloudflare network with access to production resources",
        },
        {
          name: ["-l", "--local"],
          description: "Run locally with remote bindings disabled",
        },
        {
          name: "--minify",
          description: "Minify the script",
        },
        OPTION_NODE_COMPAT,
        {
          name: "--persist-to",
          description:
            "Specify directory to use for local persistence (defaults to .wrangler/state)",
          args: {
            name: "persist-to",
            template: "folders",
          },
        },
        {
          name: "--live-reload",
          description:
            "Auto reload HTML pages when change is detected in local mode",
        },
        {
          name: "--test-scheduled",
          description:
            "Test scheduled events by visiting /__scheduled in browser",
        },
        {
          name: "--log-level",
          description: "Specify logging level",
          args: {
            name: "log-level",
            suggestions: ["debug", "info", "log", "warn", "error", "none"],
          },
        },
        {
          name: "--show-interactive-dev-session",
          description:
            "Show interactive dev session (defaults to true if the terminal supports interactivity)",
        },
        {
          name: "--types",
          description: "Generate types from your Worker configuration",
        },
        {
          name: "--tunnel",
          description:
            "Expose your local dev server via a Cloudflare Tunnel. Use `--tunnel` for a Quick Tunnel and `--tunnel-name` with `--tunnel` for a named tunnel",
        },
        {
          name: "--tunnel-name",
          description:
            "Use an existing named Cloudflare Tunnel when `--tunnel` is enabled",
          args: {
            name: "tunnel-name",
          },
        },
        {
          name: "--tunnel-allowed-mail",
          description:
            "Require email authentication for a Quick Tunnel. Accepts an exact address or domain wildcard such as user@example.com or *@example.org. May be repeated or comma-separated",
          args: {
            name: "tunnel-allowed-mail",
          },
          isRepeatable: true,
        },
      ],
    },
    {
      name: "deploy",
      description: "Deploy a Worker to Cloudflare",
      args: {
        name: "path",
        description:
          "The path to an entry point for your Worker or a directory of static assets",
        isOptional: true,
        template: "filepaths",
      },
      options: [
        OPTION_EXPERIMENTAL_NEW_CONFIG,
        {
          name: "--script",
          description: "The path to an entry point for your Worker",
          args: {
            name: "script",
            template: "filepaths",
          },
          hidden: true,
          deprecated: true,
        },
        OPTION_NAME,
        {
          name: "--tag",
          description: "A tag for this Worker Version",
          args: {
            name: "tag",
          },
        },
        {
          name: "--message",
          description: "A descriptive message for this Worker Version",
          args: {
            name: "message",
          },
        },
        {
          name: "--bundle",
          description: "Run Wrangler's compilation step before publishing",
          hidden: true,
        },
        {
          name: "--no-bundle",
          description: "Skip internal build steps and directly upload Worker",
        },
        OPTION_OUTDIR,
        {
          name: "--outfile",
          description: "Output file for the bundled worker",
          args: {
            name: "outfile",
            template: "filepaths",
          },
        },
        OPTION_COMPATIBILITY_DATE,
        OPTION_COMPATIBILITY_FLAGS,
        {
          name: "--latest",
          description:
            "Use the latest compatibility date supported by this version of Wrangler",
        },
        OPTION_ASSETS,
        OPTION_SITE,
        OPTION_SITE_INCLUDE,
        OPTION_SITE_EXCLUDE,
        OPTION_VAR,
        OPTION_DEFINE,
        OPTION_ALIAS,
        OPTION_JSX_FACTORY,
        OPTION_JSX_FRAGMENT,
        OPTION_TSCONFIG,
        {
          name: "--minify",
          description: "Minify the Worker",
        },
        {
          name: "--upload-source-maps",
          description:
            "Include source maps when uploading this Worker (defaults to true)",
        },
        OPTION_NODE_COMPAT,
        {
          name: "--dry-run",
          description:
            "Compile a project and run checks without actually uploading the Worker",
        },
        {
          name: "--secrets-file",
          description:
            "Path to a file containing secrets to upload with the version (JSON or .env format). Dotenv values expand $VAR and ${VAR}; process environment values override file values. Only use trusted dotenv secrets files; they can read and upload any process environment value. Escape literal dollar signs with \\$ or use JSON. Applies additively with secrets from previous deployments - omitted secrets will not be deleted",
          args: {
            name: "secrets-file",
            template: "filepaths",
          },
        },
        {
          name: "--keep-vars",
          description:
            "When not used (or set to false), Wrangler will delete all vars before setting those found in the Wrangler configuration. When used (and set to true), the environment variables are not deleted before the deployment. If you set variables via the dashboard you probably want to use this flag. Note that secrets are never deleted by deployments",
        },
        {
          name: ["--experimental-auto-create", "--x-auto-create"],
          description:
            "Automatically provision draft bindings with new resources",
          hidden: true,
        },
        OPTION_EXPERIMENTAL_DEPLOY_HELPERS,
        {
          name: "--strict",
          description:
            "Enables strict mode, which prevents uploads when there are conflicting remote changes",
        },
        OPTION_DURABLE_OBJECTS_CODE_UPDATE_MODE,
        {
          name: ["--triggers", "--schedule", "--schedules"],
          description: "Cron schedules to attach",
          args: {
            name: "triggers",
          },
          isRepeatable: true,
        },
        OPTION_ROUTES,
        {
          name: ["--experimental-route-zones", "--x-route-zones"],
          description:
            "Experimental: Enable the --zone and --zone-id flags to attach a zone to the routes passed via --route",
        },
        {
          name: ["--zone", "--zones"],
          description:
            "Experimental (requires --x-route-zones): Zone name for the routes passed via --route. Pass one value to apply it to all routes, or one value per --route in the same order",
          args: {
            name: "zone",
          },
          isRepeatable: true,
        },
        {
          name: ["--zone-id", "--zone-ids"],
          description:
            "Experimental (requires --x-route-zones): Zone ID for the routes passed via --route. Pass one value to apply it to all routes, or one value per --route in the same order",
          args: {
            name: "zone-id",
          },
          isRepeatable: true,
        },
        {
          name: ["--domains", "--domain"],
          description: "Custom domains to deploy to",
          args: {
            name: "domains",
          },
          isRepeatable: true,
        },
        {
          name: "--metafile",
          description:
            "Path to output build metadata from esbuild. If flag is used without a path, defaults to 'bundle-meta.json' inside the directory specified by --outdir",
          args: {
            name: "metafile",
            template: "filepaths",
            isOptional: true,
          },
        },
        {
          name: "--logpush",
          description:
            "Send Trace Events from this Worker to Workers Logpush. This will not configure a corresponding Logpush job automatically",
        },
        {
          name: "--old-asset-ttl",
          description:
            "Expire old assets in given seconds rather than immediate deletion",
          args: {
            name: "old-asset-ttl",
          },
        },
        {
          name: "--dispatch-namespace",
          description:
            "Name of a dispatch namespace to deploy the Worker to (Workers for Platforms)",
          args: {
            name: "dispatch-namespace",
          },
        },
        {
          name: "--containers-rollout",
          description:
            "Rollout strategy for Containers changes. If set to immediate, it will override `rollout_percentage_steps` if configured and roll out to 100% of instances in one step. If set to none, the Worker will be deployed without building or updating any Containers",
          args: {
            name: "containers-rollout",
            suggestions: ["immediate", "gradual", "none"],
          },
        },
        {
          name: "--autoconfig",
          description:
            "Enables framework detection and automatic configuration when deploying",
        },
      ],
    },
    {
      name: "preview",
      description:
        "Create a Preview deployment of the current Worker [open beta]",
      args: {
        name: "script",
        description: "The path to an entry point for your Worker",
        isOptional: true,
        template: "filepaths",
      },
      options: [
        OPTION_NAME_2,
        OPTION_TAG,
        OPTION_MESSAGE,
        OPTION_JSON,
        {
          name: "--ignore-base-config",
          description:
            "Only use settings from your config file, ignoring the Preview base config configured in the Cloudflare dashboard",
        },
        OPTION_WORKER_NAME,
        OPTION_VAR,
        {
          name: "--secrets-file",
          description:
            "Path to a file containing secrets to upload with the Preview deployment (JSON or .env format). Dotenv values expand $VAR and ${VAR}; process environment values override file values. Only use trusted dotenv secrets files; they can read and upload any process environment value. Escape literal dollar signs with \\$ or use JSON",
          args: {
            name: "secrets-file",
            template: "filepaths",
          },
        },
      ],
      subcommands: [
        {
          name: "delete",
          description: "Delete a Preview and all its deployments [open beta]",
          options: [
            {
              name: "--name",
              description:
                "Name of the Preview to delete (defaults to current git branch)",
              args: {
                name: "name",
              },
            },
            OPTION_SKIP_CONFIRMATION,
            OPTION_WORKER_NAME,
          ],
        },
        {
          name: "secret",
          description: "Manage secrets for Worker Previews [open beta]",
          subcommands: [
            {
              name: "put",
              description:
                "Create or update a secret variable on a Worker Preview and create a new deployment [open beta]",
              args: {
                name: "key",
                description: "The secret name to be accessible in the Worker",
              },
              options: [
                OPTION_NAME_2,
                OPTION_MESSAGE,
                OPTION_TAG,
                OPTION_WORKER_NAME,
              ],
            },
            {
              name: "delete",
              description:
                "Delete a secret variable from a Worker Preview and create a new deployment [open beta]",
              args: {
                name: "key",
                description: "The secret name to delete",
              },
              options: [
                OPTION_NAME_2,
                OPTION_MESSAGE,
                OPTION_TAG,
                OPTION_SKIP_CONFIRMATION,
                OPTION_WORKER_NAME,
              ],
            },
            {
              name: "list",
              description:
                "List all secrets on a Worker Preview's latest deployment [open beta]",
              options: [OPTION_NAME_2, OPTION_JSON, OPTION_WORKER_NAME],
            },
            {
              name: "bulk",
              description:
                "Upload multiple secrets to a Worker Preview and create a new deployment [open beta]",
              args: {
                name: "file",
                description:
                  "The file of key-value pairs to upload, as JSON or .env format",
                isOptional: true,
                template: "filepaths",
              },
              options: [
                OPTION_NAME_2,
                OPTION_MESSAGE,
                OPTION_TAG,
                OPTION_WORKER_NAME,
              ],
            },
          ],
        },
        {
          name: "base-config",
          description:
            "Manage the Preview base config shared by Worker Previews [open beta]",
          subcommands: [
            {
              name: "secret",
              description:
                "Manage secrets on the Preview base config [open beta]",
              subcommands: [
                {
                  name: "put",
                  description:
                    "Create or update a secret variable on the Preview base config [open beta]",
                  args: {
                    name: "key",
                    description:
                      "The secret name to be accessible in the Worker",
                  },
                  options: [OPTION_WORKER_NAME],
                },
                {
                  name: "delete",
                  description:
                    "Delete a secret variable from the Preview base config [open beta]",
                  args: {
                    name: "key",
                    description: "The secret name to delete",
                  },
                  options: [OPTION_SKIP_CONFIRMATION, OPTION_WORKER_NAME],
                },
                {
                  name: "list",
                  description:
                    "List all secrets on the Preview base config [open beta]",
                  options: [OPTION_WORKER_NAME, OPTION_JSON],
                },
                {
                  name: "bulk",
                  description:
                    "Upload multiple secrets to the Preview base config [open beta]",
                  args: {
                    name: "file",
                    description:
                      "The file of key-value pairs to upload, as JSON or .env format",
                    isOptional: true,
                    template: "filepaths",
                  },
                  options: [OPTION_WORKER_NAME],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "setup",
      description: "Setup a project to work on Cloudflare",
      options: [
        {
          name: ["-y", "--yes"],
          description:
            'Answer "yes" to any prompts for configuring your project',
        },
        {
          name: "--build",
          description:
            "Run your project's build command once it has been configured",
        },
        {
          name: "--dry-run",
          description:
            "Runs the command without applying any filesystem modifications",
        },
        {
          name: "--completion-message",
          description:
            "Display a message with deployment details after `wrangler setup` is complete",
          hidden: true,
        },
        {
          name: "--install-wrangler",
          description: "Install Wrangler during project setup",
          hidden: true,
        },
      ],
    },
    {
      name: "deployments",
      description:
        "List and view the current and past deployments for your Worker",
      subcommands: [
        {
          name: "list",
          description: "Displays the 10 most recent deployments of your Worker",
          options: [OPTION_NAME, OPTION_JSON_2],
        },
        {
          name: "status",
          description: "View the current state of your production",
          options: [OPTION_NAME, OPTION_JSON_2],
        },
        {
          name: "view",
          description: "View a deployment of a Worker",
          hidden: true,
          args: {
            name: "deployment-id",
            description:
              "Deprecated. Deployment ID is now referred to as Version ID. Please use `wrangler versions view [version-id]` instead",
            isOptional: true,
          },
          options: [OPTION_NAME],
        },
      ],
    },
    {
      name: "rollback",
      description: "Rollback a deployment for a Worker",
      args: {
        name: "version-id",
        description: "The ID of the Worker Version to rollback to",
        isOptional: true,
      },
      options: [
        OPTION_DURABLE_OBJECTS_CODE_UPDATE_MODE,
        {
          name: "--name",
          description: "The name of your Worker",
          args: {
            name: "name",
          },
        },
        {
          name: ["-m", "--message"],
          description: "The reason for this rollback",
          args: {
            name: "message",
          },
        },
        {
          name: ["-y", "--yes"],
          description: "Automatically accept defaults to prompts",
        },
      ],
    },
    {
      name: "versions",
      description:
        "List, view, upload and deploy Versions of your Worker to Cloudflare",
      subcommands: [
        {
          name: "view",
          description: "View the details of a specific version of your Worker",
          args: {
            name: "version-id",
            description: "The Worker Version ID to view",
          },
          options: [OPTION_NAME_3, OPTION_JSON_2],
        },
        {
          name: "list",
          description: "List the 10 most recent Versions of your Worker",
          options: [OPTION_NAME, OPTION_JSON_2],
        },
        {
          name: "upload",
          description: "Uploads your Worker code and config as a new Version",
          args: {
            name: "path",
            description:
              "The path to an entry point for your Worker or a directory of static assets",
            isOptional: true,
            template: "filepaths",
          },
          options: [
            OPTION_EXPERIMENTAL_NEW_CONFIG,
            {
              name: "--script",
              description: "The path to an entry point for your Worker",
              args: {
                name: "script",
                template: "filepaths",
              },
              hidden: true,
              deprecated: true,
            },
            OPTION_NAME,
            {
              name: "--tag",
              description: "A tag for this Worker Version",
              args: {
                name: "tag",
              },
            },
            {
              name: "--message",
              description: "A descriptive message for this Worker Version",
              args: {
                name: "message",
              },
            },
            {
              name: "--bundle",
              description: "Run Wrangler's compilation step before publishing",
              hidden: true,
            },
            {
              name: "--no-bundle",
              description:
                "Skip internal build steps and directly upload Worker",
            },
            OPTION_OUTDIR,
            {
              name: "--outfile",
              description: "Output file for the bundled worker",
              args: {
                name: "outfile",
                template: "filepaths",
              },
            },
            OPTION_COMPATIBILITY_DATE,
            OPTION_COMPATIBILITY_FLAGS,
            {
              name: "--latest",
              description:
                "Use the latest compatibility date supported by this version of Wrangler",
            },
            OPTION_ASSETS,
            OPTION_SITE,
            OPTION_SITE_INCLUDE,
            OPTION_SITE_EXCLUDE,
            OPTION_VAR,
            OPTION_DEFINE,
            OPTION_ALIAS,
            OPTION_JSX_FACTORY,
            OPTION_JSX_FRAGMENT,
            OPTION_TSCONFIG,
            {
              name: "--minify",
              description: "Minify the Worker",
            },
            {
              name: "--upload-source-maps",
              description:
                "Include source maps when uploading this Worker (defaults to true)",
            },
            OPTION_NODE_COMPAT,
            {
              name: "--dry-run",
              description:
                "Compile a project and run checks without actually uploading the Worker",
            },
            {
              name: "--secrets-file",
              description:
                "Path to a file containing secrets to upload with the version (JSON or .env format). Dotenv values expand $VAR and ${VAR}; process environment values override file values. Only use trusted dotenv secrets files; they can read and upload any process environment value. Escape literal dollar signs with \\$ or use JSON. Applies additively with secrets from previous deployments - omitted secrets will not be deleted",
              args: {
                name: "secrets-file",
                template: "filepaths",
              },
            },
            {
              name: "--keep-vars",
              description:
                "When not used (or set to false), Wrangler will delete all vars before setting those found in the Wrangler configuration. When used (and set to true), the environment variables are not deleted before the deployment. If you set variables via the dashboard you probably want to use this flag. Note that secrets are never deleted by deployments",
            },
            {
              name: ["--experimental-auto-create", "--x-auto-create"],
              description:
                "Automatically provision draft bindings with new resources",
              hidden: true,
            },
            OPTION_EXPERIMENTAL_DEPLOY_HELPERS,
            {
              name: "--strict",
              description:
                "Enables strict mode, which prevents uploads when there are conflicting remote changes",
            },
            {
              name: "--preview-alias",
              description: "Name of an alias for this Worker version",
              args: {
                name: "preview-alias",
              },
            },
          ],
        },
        {
          name: "deploy",
          description:
            "Safely roll out new Versions of your Worker by splitting traffic between multiple Versions",
          args: {
            name: "version-specs",
            description:
              "Shorthand notation to deploy Worker Version(s) [<version-id>@<percentage>..]. Omitted percentages share the remaining traffic",
            isOptional: true,
            isVariadic: true,
          },
          options: [
            OPTION_EXPERIMENTAL_NEW_CONFIG,
            OPTION_DURABLE_OBJECTS_CODE_UPDATE_MODE,
            OPTION_NAME_3,
            {
              name: "--version-id",
              description: "Worker Version ID(s) to deploy",
              args: {
                name: "version-id",
              },
              isRepeatable: true,
            },
            {
              name: "--percentage",
              description:
                "Percentage of traffic to split between Worker Version(s) (0-100)",
              args: {
                name: "percentage",
              },
              isRepeatable: true,
            },
            {
              name: "--version-tag",
              description:
                "Worker Version tag(s) to deploy, resolved to a Version ID against the deployable versions. Supports the shorthand notation [<version-tag>@<percentage>..]",
              args: {
                name: "version-tag",
              },
              isRepeatable: true,
            },
            {
              name: "--message",
              description: "Description of this deployment (optional)",
              args: {
                name: "message",
              },
            },
            {
              name: ["-y", "--yes"],
              description: "Automatically accept defaults to prompts",
            },
            {
              name: "--dry-run",
              description: "Don't actually deploy",
            },
            {
              name: "--max-versions",
              description: "Maximum allowed versions to select",
              args: {
                name: "max-versions",
                default: "2",
              },
              hidden: true,
            },
          ],
        },
        {
          name: "secret",
          description: "Generate a secret that can be referenced in a Worker",
          subcommands: [
            {
              name: "put",
              description: "Create or update a secret variable for a Worker",
              args: {
                name: "key",
                description: "The variable name to be accessible in the Worker",
                isOptional: true,
              },
              options: [OPTION_NAME, OPTION_MESSAGE_2, OPTION_TAG_2],
            },
            {
              name: "bulk",
              description:
                "Create, update, or delete multiple secret variables for a Worker",
              args: {
                name: "file",
                description:
                  'The file of key-value pairs to create, update, or delete, as JSON in form {"key": "value", ...} or .env file in the form KEY=VALUE. Set a key to null in the JSON file to delete it. Deletion is not supported with .env files. If omitted, Wrangler expects to receive input from stdin rather than a file',
                isOptional: true,
                template: "filepaths",
              },
              options: [OPTION_NAME, OPTION_MESSAGE_2, OPTION_TAG_2],
            },
            {
              name: "delete",
              description: "Delete a secret variable from a Worker",
              args: {
                name: "key",
                description: "The variable name to be accessible in the Worker",
                isOptional: true,
              },
              options: [OPTION_NAME, OPTION_MESSAGE_2, OPTION_TAG_2],
            },
            {
              name: "list",
              description: "List the secrets currently deployed",
              options: [
                OPTION_NAME,
                {
                  name: "--latest-version",
                  description: "Only show the latest version",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "triggers",
      description:
        "Updates the triggers of your current deployment [experimental]",
      subcommands: [
        {
          name: "deploy",
          description:
            "Apply changes to triggers (Routes or domains and Cron Triggers) when using `wrangler versions upload` [experimental]",
          options: [
            OPTION_NAME_3,
            {
              name: ["--triggers", "--schedule", "--schedules"],
              description: "Cron schedules to attach",
              args: {
                name: "triggers",
              },
              isRepeatable: true,
            },
            OPTION_ROUTES,
            {
              name: ["--experimental-route-zones", "--x-route-zones"],
              description:
                "Experimental: Enable the --zone and --zone-id flags to attach a zone to the routes passed via --route",
            },
            {
              name: ["--zone", "--zones"],
              description:
                "Experimental (requires --x-route-zones): Zone name for the routes passed via --route. Pass one value to apply it to all routes, or one value per --route in the same order",
              args: {
                name: "zone",
              },
              isRepeatable: true,
            },
            {
              name: ["--zone-id", "--zone-ids"],
              description:
                "Experimental (requires --x-route-zones): Zone ID for the routes passed via --route. Pass one value to apply it to all routes, or one value per --route in the same order",
              args: {
                name: "zone-id",
              },
              isRepeatable: true,
            },
            {
              name: "--dry-run",
              description: "Don't actually deploy",
            },
            OPTION_EXPERIMENTAL_DEPLOY_HELPERS,
          ],
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a Worker from Cloudflare",
      args: {
        name: "name",
        description: "Name of the worker",
        isOptional: true,
      },
      options: [
        {
          name: "--script",
          description: "The path to an entry point for your worker",
          args: {
            name: "script",
            template: "filepaths",
          },
          hidden: true,
        },
        {
          name: "--dry-run",
          description: "Don't actually delete",
        },
        {
          name: "--force",
          description:
            "Delete even if doing so will break other Workers that depend on this one",
        },
      ],
    },
    {
      name: "tail",
      description: "Start a log tailing session for a Worker",
      args: {
        name: "worker",
        description: "Name or route of the worker to tail",
        isOptional: true,
      },
      options: [
        {
          name: "--format",
          description: "The format of log entries",
          args: {
            name: "format",
            suggestions: ["json", "pretty"],
          },
        },
        {
          name: "--status",
          description: "Filter by invocation status",
          args: {
            name: "status",
            suggestions: ["ok", "error", "canceled"],
          },
          isRepeatable: true,
        },
        {
          name: "--header",
          description: "Filter by HTTP header",
          args: {
            name: "header",
          },
        },
        {
          name: "--method",
          description: "Filter by HTTP method",
          args: {
            name: "method",
          },
          isRepeatable: true,
        },
        {
          name: "--sampling-rate",
          description: "Adds a percentage of requests to log sampling rate",
          args: {
            name: "sampling-rate",
          },
        },
        {
          name: "--search",
          description: "Filter by a text match in console.log messages",
          args: {
            name: "search",
          },
        },
        {
          name: "--ip",
          description:
            'Filter by the IP address the request originates from. Use "self" to filter for your own IP',
          args: {
            name: "ip",
          },
          isRepeatable: true,
        },
        {
          name: "--version-id",
          description: "Filter by Worker version",
          args: {
            name: "version-id",
          },
        },
        {
          name: "--debug",
          description:
            "If a log would have been filtered out, send it through anyway alongside the filter which would have blocked it",
          hidden: true,
        },
      ],
    },
    {
      name: "secret",
      description: "Generate a secret that can be referenced in a Worker",
      subcommands: [
        {
          name: "put",
          description: "Create or update a secret for a Worker",
          args: {
            name: "key",
            description: "The variable name to be accessible in the Worker",
          },
          options: [OPTION_NAME_4],
        },
        {
          name: "delete",
          description: "Delete a secret from a Worker",
          args: {
            name: "key",
            description: "The variable name to be accessible in the Worker",
          },
          options: [OPTION_NAME_4],
        },
        {
          name: "list",
          description: "List all secrets for a Worker",
          options: [
            OPTION_NAME_4,
            {
              name: "--format",
              description: "The format to print the secrets in",
              args: {
                name: "format",
                suggestions: ["json", "pretty"],
                default: "json",
              },
            },
          ],
        },
        {
          name: "bulk",
          description:
            "Create, update, or delete multiple secrets for a Worker in a single request, with up to 100 secrets per command",
          args: {
            name: "file",
            description:
              'The file of key-value pairs to create, update, or delete, as JSON in form {"key": "value", ...} or .env file in the form KEY=VALUE. Set a key to null in the JSON file to delete it. Deletion is not supported with .env files. If omitted, Wrangler expects to receive input from stdin rather than a file',
            isOptional: true,
            template: "filepaths",
          },
          options: [OPTION_NAME_4],
        },
      ],
    },
    {
      name: "types",
      description: "Generate types from your Worker configuration",
      args: {
        name: "path",
        description: "The path to the declaration file for the generated types",
        isOptional: true,
        template: "filepaths",
        default: "worker-configuration.d.ts",
      },
      options: [
        {
          name: "--env-interface",
          description: "The name of the generated environment interface",
          args: {
            name: "env-interface",
            default: "Env",
          },
        },
        {
          name: "--include-runtime",
          description: "Include runtime types in the generated types",
        },
        {
          name: "--include-env",
          description: "Include Env types in the generated types",
        },
        {
          name: "--strict-vars",
          description: "Generate literal and union types for variables",
        },
        {
          name: "--include-main-module",
          description:
            "Include the main module import used to infer ctx.exports types",
        },
        {
          name: ["--experimental-include-runtime", "--x-include-runtime"],
          description: "The path of the generated runtime types file",
          args: {
            name: "experimental-include-runtime",
          },
          hidden: true,
          deprecated: true,
        },
        {
          name: "--check",
          description:
            "Check if the types at the provided path are up to date without regenerating them",
        },
      ],
    },
    {
      name: "kv",
      description: "Manage Workers KV Namespaces",
      subcommands: [
        {
          name: "namespace",
          description: "Interact with your Workers KV Namespaces",
          subcommands: [
            {
              name: "create",
              description: "Create a new namespace",
              args: {
                name: "namespace",
                description: "The name of the new namespace",
              },
              options: [
                OPTION_PREVIEW,
                {
                  name: "--jurisdiction",
                  description:
                    'The jurisdiction where the new namespace will be created (e.g. "us", "eu", "fedramp")',
                  args: {
                    name: "jurisdiction",
                  },
                  exclusiveOn: ["--experimental-mode"],
                },
                {
                  name: ["--experimental-mode", "--x-mode"],
                  description:
                    "The storage mode for the new namespace. Instant mode offers lower-latency reads and faster global updates [private beta]. Cannot be combined with --jurisdiction",
                  args: {
                    name: "experimental-mode",
                    suggestions: ["instant"],
                  },
                  exclusiveOn: ["--jurisdiction"],
                },
                OPTION_USE_REMOTE,
                OPTION_UPDATE_CONFIG,
                OPTION_BINDING,
              ],
            },
            {
              name: "list",
              description:
                "Output a list of all KV namespaces associated with your account id",
            },
            {
              name: "delete",
              description: "Delete a given namespace",
              args: {
                name: "namespace",
                description: "The name of the namespace to delete",
                isOptional: true,
              },
              options: [
                OPTION_BINDING_2,
                {
                  name: "--namespace-id",
                  description: "The id of the namespace to delete",
                  args: {
                    name: "namespace-id",
                  },
                },
                OPTION_PREVIEW,
                OPTION_SKIP_CONFIRMATION_2,
              ],
            },
            {
              name: "rename",
              description: "Rename a KV namespace",
              args: {
                name: "old-name",
                description: "The current name of the namespace to rename",
                isOptional: true,
              },
              options: [
                {
                  name: "--namespace-id",
                  description: "The id of the namespace to rename",
                  args: {
                    name: "namespace-id",
                  },
                },
                {
                  name: "--new-name",
                  description: "The new name for the namespace",
                  args: {
                    name: "new-name",
                  },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "key",
          description: "Individually manage Workers KV key-value pairs",
          subcommands: [
            {
              name: "put",
              description:
                "Write a single key/value pair to the given namespace",
              args: [
                {
                  name: "key",
                  description: "The key to write to",
                },
                {
                  name: "value",
                  description: "The value to write",
                  isOptional: true,
                },
              ],
              options: [
                {
                  name: "--path",
                  description: "Read value from the file at a given path",
                  args: {
                    name: "path",
                    template: "filepaths",
                  },
                },
                {
                  name: "--binding",
                  description: "The binding name to the namespace to write to",
                  args: {
                    name: "binding",
                  },
                },
                {
                  name: "--namespace-id",
                  description: "The id of the namespace to write to",
                  args: {
                    name: "namespace-id",
                  },
                },
                OPTION_PREVIEW,
                {
                  name: "--ttl",
                  description: "Time for which the entries should be visible",
                  args: {
                    name: "ttl",
                  },
                },
                {
                  name: "--expiration",
                  description:
                    "Time since the UNIX epoch after which the entry expires",
                  args: {
                    name: "expiration",
                  },
                },
                {
                  name: "--metadata",
                  description: "Arbitrary JSON that is associated with a key",
                  args: {
                    name: "metadata",
                  },
                },
                OPTION_LOCAL,
                OPTION_REMOTE,
                OPTION_PERSIST_TO,
              ],
            },
            {
              name: "list",
              description: "Output a list of all keys in a given namespace",
              options: [
                {
                  name: "--binding",
                  description: "The binding name to the namespace to list",
                  args: {
                    name: "binding",
                  },
                },
                {
                  name: "--namespace-id",
                  description: "The id of the namespace to list",
                  args: {
                    name: "namespace-id",
                  },
                },
                OPTION_PREVIEW,
                {
                  name: "--prefix",
                  description: "A prefix to filter listed keys",
                  args: {
                    name: "prefix",
                  },
                },
                OPTION_LOCAL,
                OPTION_REMOTE,
                OPTION_PERSIST_TO,
              ],
            },
            {
              name: "get",
              description:
                "Read a single value by key from the given namespace",
              args: {
                name: "key",
                description: "The key value to get",
              },
              options: [
                {
                  name: "--text",
                  description: "Decode the returned value as a utf8 string",
                },
                {
                  name: "--binding",
                  description: "The binding name to the namespace to get from",
                  args: {
                    name: "binding",
                  },
                },
                {
                  name: "--namespace-id",
                  description: "The id of the namespace to get from",
                  args: {
                    name: "namespace-id",
                  },
                },
                OPTION_PREVIEW,
                OPTION_LOCAL,
                OPTION_REMOTE,
                OPTION_PERSIST_TO,
              ],
            },
            {
              name: "delete",
              description:
                "Remove a single key value pair from the given namespace",
              args: {
                name: "key",
                description: "The key value to delete",
              },
              options: [
                OPTION_BINDING_2,
                {
                  name: "--namespace-id",
                  description: "The id of the namespace to delete from",
                  args: {
                    name: "namespace-id",
                  },
                },
                OPTION_PREVIEW,
                OPTION_LOCAL,
                OPTION_REMOTE,
                OPTION_PERSIST_TO,
              ],
            },
          ],
        },
        {
          name: "bulk",
          description:
            "Interact with multiple Workers KV key-value pairs at once",
          subcommands: [
            {
              name: "get",
              description:
                "Gets multiple key-value pairs from a namespace [open beta]",
              args: {
                name: "filename",
                description: "The file containing the keys to get",
                template: "filepaths",
              },
              options: [
                {
                  name: "--binding",
                  description: "The binding name to the namespace to get from",
                  args: {
                    name: "binding",
                  },
                },
                {
                  name: "--namespace-id",
                  description: "The id of the namespace to get from",
                  args: {
                    name: "namespace-id",
                  },
                },
                OPTION_PREVIEW,
                OPTION_LOCAL,
                OPTION_REMOTE,
                OPTION_PERSIST_TO,
              ],
            },
            {
              name: "put",
              description: "Upload multiple key-value pairs to a namespace",
              args: {
                name: "filename",
                description: "The file containing the key/value pairs to write",
                template: "filepaths",
              },
              options: [
                {
                  name: "--binding",
                  description: "The binding name to the namespace to write to",
                  args: {
                    name: "binding",
                  },
                },
                {
                  name: "--namespace-id",
                  description: "The id of the namespace to write to",
                  args: {
                    name: "namespace-id",
                  },
                },
                OPTION_PREVIEW,
                {
                  name: "--ttl",
                  description: "Time for which the entries should be visible",
                  args: {
                    name: "ttl",
                  },
                },
                {
                  name: "--expiration",
                  description:
                    "Time since the UNIX epoch after which the entry expires",
                  args: {
                    name: "expiration",
                  },
                },
                {
                  name: "--metadata",
                  description: "Arbitrary JSON that is associated with a key",
                  args: {
                    name: "metadata",
                  },
                },
                OPTION_LOCAL,
                OPTION_REMOTE,
                OPTION_PERSIST_TO,
              ],
            },
            {
              name: "delete",
              description: "Delete multiple key-value pairs from a namespace",
              args: {
                name: "filename",
                description: "The file containing the keys to delete",
                template: "filepaths",
              },
              options: [
                {
                  name: ["-f", "--force"],
                  description: "Do not ask for confirmation before deleting",
                },
                OPTION_BINDING_2,
                {
                  name: "--namespace-id",
                  description: "The id of the namespace to delete from",
                  args: {
                    name: "namespace-id",
                  },
                },
                OPTION_PREVIEW,
                OPTION_LOCAL,
                OPTION_REMOTE,
                OPTION_PERSIST_TO,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "artifacts",
      description: "Manage Artifacts namespaces and repos [open beta]",
      subcommands: [
        {
          name: "namespaces",
          description: "Manage Artifacts namespaces [open beta]",
          subcommands: [
            {
              name: "list",
              description: "List Artifacts namespaces [open beta]",
              options: [OPTION_JSON],
            },
            {
              name: "get",
              description: "Get an Artifacts namespace [open beta]",
              args: {
                name: "name",
                description: "The Artifacts namespace name",
              },
              options: [OPTION_JSON],
            },
          ],
        },
        {
          name: "repos",
          description: "Manage Artifacts repositories [open beta]",
          subcommands: [
            {
              name: "create",
              description: "Create an Artifacts repository [open beta]",
              args: {
                name: "name",
                description: "The Artifacts repository name",
              },
              options: [
                OPTION_NAMESPACE,
                {
                  name: "--description",
                  description: "An optional description for the repository",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--default-branch",
                  description: "The default branch for the repository",
                  args: {
                    name: "default-branch",
                  },
                },
                {
                  name: "--read-only",
                  description: "Create the repository as read-only",
                },
                OPTION_JSON,
              ],
            },
            {
              name: "list",
              description:
                "List Artifacts repositories in a namespace [open beta]",
              options: [OPTION_NAMESPACE, OPTION_JSON],
            },
            {
              name: "get",
              description: "Get an Artifacts repository [open beta]",
              args: {
                name: "name",
                description: "The Artifacts repository name",
              },
              options: [OPTION_NAMESPACE, OPTION_JSON],
            },
            {
              name: "delete",
              description: "Delete an Artifacts repository [open beta]",
              args: {
                name: "name",
                description: "The Artifacts repository name",
              },
              options: [OPTION_NAMESPACE, OPTION_FORCE, OPTION_JSON],
            },
            {
              name: "issue-token",
              description: "Issue a repo-scoped Artifacts token [open beta]",
              args: {
                name: "repo",
                description: "The Artifacts repository name",
              },
              options: [
                OPTION_NAMESPACE,
                {
                  name: "--scope",
                  description: "The token scope",
                  args: {
                    name: "scope",
                    suggestions: ["read", "write"],
                  },
                },
                {
                  name: "--ttl",
                  description: "The token TTL in seconds",
                  args: {
                    name: "ttl",
                  },
                },
                OPTION_JSON,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "queues",
      description: "Manage Workers Queues",
      subcommands: [
        {
          name: "list",
          description: "List queues",
          options: [
            {
              name: "--page",
              description: "Page number for pagination",
              args: {
                name: "page",
              },
            },
          ],
        },
        {
          name: "create",
          description: "Create a queue",
          args: {
            name: "name",
            description: "The name of the queue",
          },
          options: [
            {
              name: "--jurisdiction",
              description: "The jurisdiction of the queue",
              args: {
                name: "jurisdiction",
                suggestions: ["eu", "us", "fedramp"],
              },
            },
            {
              name: "--delivery-delay-secs",
              description:
                "How long a published message should be delayed for, in seconds. Must be between 0 and 86400",
              args: {
                name: "delivery-delay-secs",
              },
            },
            {
              name: "--message-retention-period-secs",
              description:
                "How long to retain a message in the queue, in seconds. Must be between 60 and 86400 if on free tier, otherwise must be between 60 and 1209600",
              args: {
                name: "message-retention-period-secs",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update a queue",
          args: {
            name: "name",
            description: "The name of the queue",
          },
          options: [
            {
              name: "--delivery-delay-secs",
              description:
                "How long a published message should be delayed for, in seconds. Must be between 0 and 86400",
              args: {
                name: "delivery-delay-secs",
              },
            },
            {
              name: "--message-retention-period-secs",
              description:
                "How long to retain a message in the queue, in seconds. Must be between 60 and 86400 if on free tier, otherwise must be between 60 and 1209600",
              args: {
                name: "message-retention-period-secs",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a queue",
          args: {
            name: "name",
            description: "The name of the queue",
          },
        },
        {
          name: "info",
          description: "Get queue information",
          args: {
            name: "name",
            description: "The name of the queue",
          },
        },
        {
          name: "consumer",
          description: "Configure queue consumers",
          subcommands: [
            {
              name: "add",
              description: "Add a Queue Worker Consumer",
              args: [
                {
                  name: "queue-name",
                  description: "Name of the queue to configure",
                },
                {
                  name: "script-name",
                  description: "Name of the consumer script",
                },
              ],
              options: [
                OPTION_BATCH_SIZE,
                {
                  name: "--batch-timeout",
                  description:
                    "Maximum number of seconds to wait to fill a batch with messages",
                  args: {
                    name: "batch-timeout",
                  },
                },
                OPTION_MESSAGE_RETRIES,
                OPTION_DEAD_LETTER_QUEUE,
                {
                  name: "--max-concurrency",
                  description:
                    "The maximum number of concurrent consumer Worker invocations. Must be a positive integer",
                  args: {
                    name: "max-concurrency",
                  },
                },
                OPTION_RETRY_DELAY_SECS,
              ],
            },
            {
              name: "remove",
              description: "Remove a Queue Worker Consumer",
              args: [
                {
                  name: "queue-name",
                  description: "Name of the queue to configure",
                },
                {
                  name: "script-name",
                  description: "Name of the consumer script",
                },
              ],
            },
            {
              name: "list",
              description: "List consumers for a queue",
              args: {
                name: "queue-name",
                description: "Name of the queue",
              },
              options: [OPTION_JSON_3],
            },
            {
              name: "http",
              description: "Configure Queue HTTP Pull Consumers",
              subcommands: [
                {
                  name: "add",
                  description: "Add a Queue HTTP Pull Consumer",
                  args: {
                    name: "queue-name",
                    description: "Name of the queue for the consumer",
                  },
                  options: [
                    OPTION_BATCH_SIZE,
                    OPTION_MESSAGE_RETRIES,
                    OPTION_DEAD_LETTER_QUEUE,
                    {
                      name: "--visibility-timeout-secs",
                      description:
                        "The number of seconds a message will wait for an acknowledgement before being returned to the queue",
                      args: {
                        name: "visibility-timeout-secs",
                      },
                    },
                    OPTION_RETRY_DELAY_SECS,
                  ],
                },
                {
                  name: "remove",
                  description: "Remove a Queue HTTP Pull Consumer",
                  args: {
                    name: "queue-name",
                    description: "Name of the queue for the consumer",
                  },
                },
                {
                  name: "list",
                  description: "List HTTP pull consumers for a queue",
                  args: {
                    name: "queue-name",
                    description: "Name of the queue",
                  },
                  options: [OPTION_JSON_3],
                },
              ],
            },
            {
              name: "worker",
              description: "Configure Queue Worker Consumers",
              subcommands: [
                {
                  name: "add",
                  description: "Add a Queue Worker Consumer",
                  args: [
                    {
                      name: "queue-name",
                      description: "Name of the queue to configure",
                    },
                    {
                      name: "script-name",
                      description: "Name of the consumer script",
                    },
                  ],
                  options: [
                    OPTION_BATCH_SIZE,
                    {
                      name: "--batch-timeout",
                      description:
                        "Maximum number of seconds to wait to fill a batch with messages",
                      args: {
                        name: "batch-timeout",
                      },
                    },
                    OPTION_MESSAGE_RETRIES,
                    OPTION_DEAD_LETTER_QUEUE,
                    {
                      name: "--max-concurrency",
                      description:
                        "The maximum number of concurrent consumer Worker invocations. Must be a positive integer",
                      args: {
                        name: "max-concurrency",
                      },
                    },
                    OPTION_RETRY_DELAY_SECS,
                  ],
                },
                {
                  name: "remove",
                  description: "Remove a Queue Worker Consumer",
                  args: [
                    {
                      name: "queue-name",
                      description: "Name of the queue to configure",
                    },
                    {
                      name: "script-name",
                      description: "Name of the consumer script",
                    },
                  ],
                },
                {
                  name: "list",
                  description: "List worker consumers for a queue",
                  args: {
                    name: "queue-name",
                    description: "Name of the queue",
                  },
                  options: [OPTION_JSON_3],
                },
              ],
            },
          ],
        },
        {
          name: "pause-delivery",
          description: "Pause message delivery for a queue",
          args: {
            name: "name",
            description: "The name of the queue",
          },
        },
        {
          name: "resume-delivery",
          description: "Resume message delivery for a queue",
          args: {
            name: "name",
            description: "The name of the queue",
          },
        },
        {
          name: "purge",
          description: "Purge messages from a queue",
          args: {
            name: "name",
            description: "The name of the queue",
          },
          options: [
            {
              name: "--force",
              description:
                "Skip the confirmation dialog and forcefully purge the Queue",
            },
          ],
        },
        {
          name: "subscription",
          description: "Manage event subscriptions for a queue",
          subcommands: [
            {
              name: "create",
              description: "Create a new event subscription for a queue",
              args: {
                name: "queue",
                description:
                  "The name of the queue to create the subscription for",
              },
              options: [
                {
                  name: "--source",
                  description: "The event source type",
                  args: {
                    name: "source",
                    suggestions: [
                      "artifacts",
                      "artifacts.repo",
                      "browserRun",
                      "email.sending",
                      "images",
                      "kv",
                      "r2",
                      "superSlurper",
                      "vectorize",
                      "workersAi.model",
                      "workersBuilds.worker",
                      "workflows.workflow",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--events",
                  description:
                    "Comma-separated list of event types to subscribe to (for artifacts.repo, use pushed, not cf.artifacts.repo.pushed)",
                  args: {
                    name: "events",
                  },
                  isRequired: true,
                },
                {
                  name: "--name",
                  description:
                    "Name for the subscription (auto-generated if not provided)",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--enabled",
                  description: "Whether the subscription should be active",
                },
                {
                  name: "--model-name",
                  description:
                    "Workers AI model name (required for workersAi.model source)",
                  args: {
                    name: "model-name",
                  },
                },
                {
                  name: "--worker-name",
                  description:
                    "Worker name (required for workersBuilds.worker source)",
                  args: {
                    name: "worker-name",
                  },
                },
                {
                  name: "--workflow-name",
                  description:
                    "Workflow name (required for workflows.workflow source)",
                  args: {
                    name: "workflow-name",
                  },
                },
                {
                  name: "--zone-id",
                  description: "Zone ID (required for email.sending source)",
                  args: {
                    name: "zone-id",
                  },
                },
                {
                  name: "--domain",
                  description:
                    "Sending domain — zone apex or verified subdomain (required for email.sending source)",
                  args: {
                    name: "domain",
                  },
                },
                {
                  name: "--source-namespace",
                  description:
                    "Artifacts namespace (required for artifacts.repo source)",
                  args: {
                    name: "source-namespace",
                  },
                },
                {
                  name: "--source-repo-name",
                  description:
                    "Artifacts repository name (required for artifacts.repo source)",
                  args: {
                    name: "source-repo-name",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List event subscriptions for a queue",
              args: {
                name: "queue",
                description: "The name of the queue to list subscriptions for",
              },
              options: [
                OPTION_PAGE,
                {
                  name: "--per-page",
                  description: "Number of subscriptions per page",
                  args: {
                    name: "per-page",
                    default: "20",
                  },
                },
                OPTION_JSON_3,
              ],
            },
            {
              name: "get",
              description: "Get details about a specific event subscription",
              args: {
                name: "queue",
                description: "The name of the queue",
              },
              options: [
                {
                  name: "--id",
                  description: "The ID of the subscription to retrieve",
                  args: {
                    name: "id",
                  },
                  isRequired: true,
                },
                OPTION_JSON_3,
              ],
            },
            {
              name: "delete",
              description: "Delete an event subscription from a queue",
              args: {
                name: "queue",
                description: "The name of the queue",
              },
              options: [
                {
                  name: "--id",
                  description: "The ID of the subscription to delete",
                  args: {
                    name: "id",
                  },
                  isRequired: true,
                },
                OPTION_FORCE,
              ],
            },
            {
              name: "update",
              description: "Update an existing event subscription",
              args: {
                name: "queue",
                description: "The name of the queue",
              },
              options: [
                {
                  name: "--id",
                  description: "The ID of the subscription to update",
                  args: {
                    name: "id",
                  },
                  isRequired: true,
                },
                {
                  name: "--name",
                  description: "New name for the subscription",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--events",
                  description:
                    "Comma-separated list of event types to subscribe to",
                  args: {
                    name: "events",
                  },
                },
                {
                  name: "--enabled",
                  description: "Whether the subscription should be active",
                },
                OPTION_JSON_3,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "basin",
      description: "Manage Basin products",
      subcommands: [
        SHARED_BASIN_SQL,
        SHARED_BASIN_CATALOG,
        SHARED_BASIN_PIPELINES,
      ],
    },
    {
      name: "r2",
      description: "Manage R2 buckets & objects",
      subcommands: [
        {
          name: "object",
          description: "Manage R2 objects",
          subcommands: [
            {
              name: "get",
              description: "Fetch an object from an R2 bucket",
              args: {
                name: "objectPath",
                description:
                  "The source object path in the form of {bucket}/{key}",
              },
              options: [
                {
                  name: ["-f", "--file"],
                  description: "The destination file to create",
                  args: {
                    name: "file",
                    template: "filepaths",
                  },
                  exclusiveOn: ["--pipe"],
                },
                {
                  name: ["-p", "--pipe"],
                  description:
                    "Enables the file to be piped to a destination, rather than specified with the --file option",
                  exclusiveOn: ["--file"],
                },
                OPTION_LOCAL,
                OPTION_REMOTE,
                OPTION_PERSIST_TO,
                {
                  name: ["-J", "--jurisdiction"],
                  description: "The jurisdiction where the object exists",
                  args: {
                    name: "jurisdiction",
                  },
                },
              ],
            },
            {
              name: "put",
              description: "Create an object in an R2 bucket",
              args: {
                name: "objectPath",
                description:
                  "The destination object path in the form of {bucket}/{key}",
              },
              options: [
                {
                  name: ["--content-type", "--ct"],
                  description:
                    "A standard MIME type describing the format of the object data",
                  args: {
                    name: "content-type",
                  },
                },
                {
                  name: ["--content-disposition", "--cd"],
                  description:
                    "Specifies presentational information for the object",
                  args: {
                    name: "content-disposition",
                  },
                },
                {
                  name: ["--content-encoding", "--ce"],
                  description:
                    "Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field",
                  args: {
                    name: "content-encoding",
                  },
                },
                {
                  name: ["--content-language", "--cl"],
                  description: "The language the content is in",
                  args: {
                    name: "content-language",
                  },
                },
                {
                  name: ["--cache-control", "--cc"],
                  description:
                    "Specifies caching behavior along the request/reply chain",
                  args: {
                    name: "cache-control",
                  },
                },
                {
                  name: "--expires",
                  description:
                    "The date and time at which the object is no longer cacheable",
                  args: {
                    name: "expires",
                  },
                },
                OPTION_LOCAL,
                OPTION_REMOTE,
                OPTION_PERSIST_TO,
                {
                  name: ["-J", "--jurisdiction"],
                  description:
                    "The jurisdiction where the object will be created",
                  args: {
                    name: "jurisdiction",
                  },
                },
                {
                  name: ["-s", "--storage-class"],
                  description: "The storage class of the object to be created",
                  args: {
                    name: "storage-class",
                  },
                },
                OPTION_FORCE_2,
                {
                  name: ["-f", "--file"],
                  description: "The path of the file to upload",
                  args: {
                    name: "file",
                    template: "filepaths",
                  },
                  exclusiveOn: ["--pipe"],
                },
                {
                  name: ["-p", "--pipe"],
                  description:
                    "Enables the file to be piped in, rather than specified with the --file option",
                  exclusiveOn: ["--file"],
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an object in an R2 bucket",
              args: {
                name: "objectPath",
                description:
                  "The destination object path in the form of {bucket}/{key}",
              },
              options: [
                OPTION_LOCAL,
                OPTION_REMOTE,
                OPTION_PERSIST_TO,
                {
                  name: ["-J", "--jurisdiction"],
                  description: "The jurisdiction where the object exists",
                  args: {
                    name: "jurisdiction",
                  },
                },
                OPTION_FORCE_2,
              ],
            },
          ],
        },
        {
          name: "bucket",
          description: "Manage R2 buckets",
          subcommands: [
            {
              name: "create",
              description: "Create a new R2 bucket",
              args: {
                name: "name",
                description: "The name of the new bucket",
              },
              options: [
                {
                  name: "--location",
                  description:
                    "The optional location hint that determines geographic placement of the R2 bucket. Hints are only honored the first time a bucket name is created",
                  args: {
                    name: "location",
                    suggestions: ["weur", "eeur", "apac", "wnam", "enam", "oc"],
                  },
                },
                {
                  name: ["-s", "--storage-class"],
                  description:
                    "The default storage class for objects uploaded to this bucket",
                  args: {
                    name: "storage-class",
                  },
                },
                {
                  name: ["-J", "--jurisdiction"],
                  description:
                    "The jurisdiction where the new bucket will be created",
                  args: {
                    name: "jurisdiction",
                  },
                },
                OPTION_USE_REMOTE,
                OPTION_UPDATE_CONFIG,
                OPTION_BINDING,
              ],
            },
            {
              name: "update",
              description: "Update bucket state",
              subcommands: [
                {
                  name: "storage-class",
                  description:
                    "Update the default storage class of an existing R2 bucket",
                  args: {
                    name: "name",
                    description: "The name of the existing bucket",
                  },
                  options: [
                    {
                      name: ["-J", "--jurisdiction"],
                      description:
                        "The jurisdiction of the bucket to be updated",
                      args: {
                        name: "jurisdiction",
                      },
                    },
                    {
                      name: ["-s", "--storage-class"],
                      description:
                        "The new default storage class for this bucket",
                      args: {
                        name: "storage-class",
                      },
                      isRequired: true,
                    },
                  ],
                },
              ],
            },
            {
              name: "list",
              description: "List R2 buckets",
              options: [
                {
                  name: ["-J", "--jurisdiction"],
                  description: "The jurisdiction to list",
                  args: {
                    name: "jurisdiction",
                  },
                },
              ],
            },
            {
              name: "info",
              description: "Get information about an R2 bucket",
              args: {
                name: "bucket",
                description: "The name of the bucket to retrieve info for",
              },
              options: [
                OPTION_JURISDICTION,
                {
                  name: "--json",
                  description: "Return the bucket information as JSON",
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an R2 bucket",
              args: {
                name: "bucket",
                description: "The name of the bucket to delete",
              },
              options: [OPTION_JURISDICTION],
            },
            {
              name: "sippy",
              description: "Manage Sippy incremental migration on an R2 bucket",
              subcommands: [
                {
                  name: "enable",
                  description: "Enable Sippy on an R2 bucket",
                  args: {
                    name: "name",
                    description: "The name of the bucket",
                  },
                  options: [
                    OPTION_JURISDICTION,
                    {
                      name: "--provider",
                      args: {
                        name: "provider",
                        suggestions: ["AWS", "GCS"],
                      },
                    },
                    {
                      name: "--bucket",
                      description: "The name of the upstream bucket",
                      args: {
                        name: "bucket",
                      },
                    },
                    {
                      name: "--region",
                      description:
                        "(AWS provider only) The region of the upstream bucket",
                      args: {
                        name: "region",
                      },
                    },
                    {
                      name: "--access-key-id",
                      description:
                        "(AWS provider only) The secret access key id for the upstream bucket",
                      args: {
                        name: "access-key-id",
                      },
                    },
                    {
                      name: "--secret-access-key",
                      description:
                        "(AWS provider only) The secret access key for the upstream bucket",
                      args: {
                        name: "secret-access-key",
                      },
                    },
                    {
                      name: "--service-account-key-file",
                      description:
                        "(GCS provider only) The path to your Google Cloud service account key JSON file",
                      args: {
                        name: "service-account-key-file",
                        template: "filepaths",
                      },
                    },
                    {
                      name: "--client-email",
                      description:
                        "(GCS provider only) The client email for your Google Cloud service account key",
                      args: {
                        name: "client-email",
                      },
                    },
                    {
                      name: "--private-key",
                      description:
                        "(GCS provider only) The private key for your Google Cloud service account key",
                      args: {
                        name: "private-key",
                      },
                    },
                    {
                      name: "--r2-access-key-id",
                      description:
                        "The secret access key id for this R2 bucket",
                      args: {
                        name: "r2-access-key-id",
                      },
                    },
                    {
                      name: "--r2-secret-access-key",
                      description: "The secret access key for this R2 bucket",
                      args: {
                        name: "r2-secret-access-key",
                      },
                    },
                  ],
                },
                {
                  name: "disable",
                  description: "Disable Sippy on an R2 bucket",
                  args: {
                    name: "name",
                    description: "The name of the bucket",
                  },
                  options: [OPTION_JURISDICTION],
                },
                {
                  name: "get",
                  description: "Check the status of Sippy on an R2 bucket",
                  args: {
                    name: "name",
                    description: "The name of the bucket",
                  },
                  options: [OPTION_JURISDICTION],
                },
              ],
            },
            {
              ...SHARED_BASIN_CATALOG,
              name: "catalog",
              description:
                "Manage Basin Catalog for your R2 buckets - provides an Iceberg REST interface for query engines like Spark and PyIceberg",
              hidden: true,
            },
            {
              name: "notification",
              description: "Manage event notification rules for an R2 bucket",
              subcommands: [
                {
                  name: ["list", "get"],
                  description: "List event notification rules for an R2 bucket",
                  args: {
                    name: "bucket",
                    description:
                      "The name of the R2 bucket to get event notification rules for",
                  },
                  options: [OPTION_JURISDICTION],
                },
                {
                  name: "create",
                  description:
                    "Create an event notification rule for an R2 bucket",
                  args: {
                    name: "bucket",
                    description:
                      "The name of the R2 bucket to create an event notification rule for",
                  },
                  options: [
                    {
                      name: ["--event-types", "--event-type"],
                      description:
                        "The type of event(s) that will emit event notifications",
                      args: {
                        name: "event-types",
                        suggestions: ["object-create", "object-delete"],
                      },
                      isRepeatable: true,
                      isRequired: true,
                    },
                    {
                      name: "--prefix",
                      description:
                        "The prefix that an object must match to emit event notifications (note: regular expressions not supported)",
                      args: {
                        name: "prefix",
                      },
                    },
                    {
                      name: "--suffix",
                      description:
                        "The suffix that an object must match to emit event notifications (note: regular expressions not supported)",
                      args: {
                        name: "suffix",
                      },
                    },
                    {
                      name: "--queue",
                      description:
                        "The name of the queue that will receive event notification messages",
                      args: {
                        name: "queue",
                      },
                      isRequired: true,
                    },
                    OPTION_JURISDICTION,
                    {
                      name: "--description",
                      description:
                        "A description that can be used to identify the event notification rule after creation",
                      args: {
                        name: "description",
                      },
                    },
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete an event notification rule from an R2 bucket",
                  args: {
                    name: "bucket",
                    description:
                      "The name of the R2 bucket to delete an event notification rule for",
                  },
                  options: [
                    {
                      name: "--queue",
                      description:
                        "The name of the queue that corresponds to the event notification rule. If no rule is provided, all event notification rules associated with the bucket and queue will be deleted",
                      args: {
                        name: "queue",
                      },
                      isRequired: true,
                    },
                    {
                      name: "--rule",
                      description:
                        "The ID of the event notification rule to delete",
                      args: {
                        name: "rule",
                      },
                    },
                    OPTION_JURISDICTION,
                  ],
                },
              ],
            },
            {
              name: "domain",
              description: "Manage custom domains for an R2 bucket",
              subcommands: [
                {
                  name: "list",
                  description: "List custom domains for an R2 bucket",
                  args: {
                    name: "bucket",
                    description:
                      "The name of the R2 bucket whose connected custom domains will be listed",
                  },
                  options: [OPTION_JURISDICTION],
                },
                {
                  name: "get",
                  description: "Get custom domain connected to an R2 bucket",
                  args: {
                    name: "bucket",
                    description:
                      "The name of the R2 bucket whose custom domain to retrieve",
                  },
                  options: [
                    {
                      name: "--domain",
                      description: "The custom domain to get information for",
                      args: {
                        name: "domain",
                      },
                      isRequired: true,
                    },
                    OPTION_JURISDICTION,
                  ],
                },
                {
                  name: "add",
                  description: "Connect a custom domain to an R2 bucket",
                  args: {
                    name: "bucket",
                    description:
                      "The name of the R2 bucket to connect a custom domain to",
                  },
                  options: [
                    {
                      name: "--domain",
                      description:
                        "The custom domain to connect to the R2 bucket",
                      args: {
                        name: "domain",
                      },
                      isRequired: true,
                    },
                    {
                      name: "--zone-id",
                      description:
                        "The zone ID associated with the custom domain",
                      args: {
                        name: "zone-id",
                      },
                      isRequired: true,
                    },
                    {
                      name: "--min-tls",
                      description:
                        "Set the minimum TLS version for the custom domain (defaults to 1.0 if not set)",
                      args: {
                        name: "min-tls",
                        suggestions: ["1.0", "1.1", "1.2", "1.3"],
                      },
                    },
                    OPTION_JURISDICTION,
                    OPTION_FORCE,
                  ],
                },
                {
                  name: "remove",
                  description: "Remove a custom domain from an R2 bucket",
                  args: {
                    name: "bucket",
                    description:
                      "The name of the R2 bucket to remove the custom domain from",
                  },
                  options: [
                    {
                      name: "--domain",
                      description:
                        "The custom domain to remove from the R2 bucket",
                      args: {
                        name: "domain",
                      },
                      isRequired: true,
                    },
                    OPTION_JURISDICTION,
                    OPTION_FORCE,
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update settings for a custom domain connected to an R2 bucket",
                  args: {
                    name: "bucket",
                    description:
                      "The name of the R2 bucket associated with the custom domain to update",
                  },
                  options: [
                    {
                      name: "--domain",
                      description:
                        "The custom domain whose settings will be updated",
                      args: {
                        name: "domain",
                      },
                      isRequired: true,
                    },
                    {
                      name: "--min-tls",
                      description:
                        "Update the minimum TLS version for the custom domain",
                      args: {
                        name: "min-tls",
                        suggestions: ["1.0", "1.1", "1.2", "1.3"],
                      },
                    },
                    OPTION_JURISDICTION,
                  ],
                },
              ],
            },
            {
              name: "dev-url",
              description:
                "Manage public access via the r2.dev URL for an R2 bucket",
              subcommands: [
                {
                  name: "get",
                  description: "Get the r2.dev URL and status for an R2 bucket",
                  args: {
                    name: "bucket",
                    description:
                      "The name of the R2 bucket whose r2.dev URL status to retrieve",
                  },
                  options: [OPTION_JURISDICTION],
                },
                {
                  name: "enable",
                  description:
                    "Enable public access via the r2.dev URL for an R2 bucket",
                  args: {
                    name: "bucket",
                    description:
                      "The name of the R2 bucket to enable public access via its r2.dev URL",
                  },
                  options: [OPTION_JURISDICTION, OPTION_FORCE],
                },
                {
                  name: "disable",
                  description:
                    "Disable public access via the r2.dev URL for an R2 bucket",
                  args: {
                    name: "bucket",
                    description:
                      "The name of the R2 bucket to disable public access via its r2.dev URL",
                  },
                  options: [OPTION_JURISDICTION, OPTION_FORCE],
                },
              ],
            },
            {
              name: "local-uploads",
              description:
                "Manage local uploads configuration for an R2 bucket",
              subcommands: [
                {
                  name: "get",
                  description:
                    "Get the local uploads configuration for an R2 bucket",
                  args: {
                    name: "bucket",
                    description:
                      "The name of the R2 bucket whose local uploads configuration to retrieve",
                  },
                },
                {
                  name: "enable",
                  description: "Enable local uploads for an R2 bucket",
                  args: {
                    name: "bucket",
                    description:
                      "The name of the R2 bucket to enable local uploads",
                  },
                  options: [OPTION_FORCE],
                },
                {
                  name: "disable",
                  description: "Disable local uploads for an R2 bucket",
                  args: {
                    name: "bucket",
                    description:
                      "The name of the R2 bucket to disable local uploads",
                  },
                  options: [OPTION_FORCE],
                },
              ],
            },
            {
              name: "lifecycle",
              description: "Manage lifecycle rules for an R2 bucket",
              subcommands: [
                {
                  name: "list",
                  description: "List lifecycle rules for an R2 bucket",
                  args: {
                    name: "bucket",
                    description:
                      "The name of the R2 bucket to list lifecycle rules for",
                  },
                  options: [OPTION_JURISDICTION],
                },
                {
                  name: "add",
                  description: "Add a lifecycle rule to an R2 bucket",
                  args: [
                    {
                      name: "bucket",
                      description:
                        "The name of the R2 bucket to add a lifecycle rule to",
                    },
                    {
                      name: "name",
                      description:
                        "A unique name for the lifecycle rule, used to identify and manage it",
                      isOptional: true,
                    },
                    {
                      name: "prefix",
                      description:
                        "Prefix condition for the lifecycle rule (leave empty for all prefixes)",
                      isOptional: true,
                    },
                  ],
                  options: [
                    {
                      name: "--expire-days",
                      description: "Number of days after which objects expire",
                      args: {
                        name: "expire-days",
                      },
                    },
                    {
                      name: "--expire-date",
                      description:
                        "Date after which objects expire (YYYY-MM-DD)",
                      args: {
                        name: "expire-date",
                      },
                    },
                    {
                      name: "--ia-transition-days",
                      description:
                        "Number of days after which objects transition to Infrequent Access storage",
                      args: {
                        name: "ia-transition-days",
                      },
                    },
                    {
                      name: "--ia-transition-date",
                      description:
                        "Date after which objects transition to Infrequent Access storage (YYYY-MM-DD)",
                      args: {
                        name: "ia-transition-date",
                      },
                    },
                    {
                      name: "--abort-multipart-days",
                      description:
                        "Number of days after which incomplete multipart uploads are aborted",
                      args: {
                        name: "abort-multipart-days",
                      },
                    },
                    OPTION_JURISDICTION,
                    {
                      name: ["-y", "--force"],
                      description:
                        "Skip confirmation and Basin Catalog validation prompt",
                    },
                  ],
                },
                {
                  name: "remove",
                  description: "Remove a lifecycle rule from an R2 bucket",
                  args: {
                    name: "bucket",
                    description:
                      "The name of the R2 bucket to remove a lifecycle rule from",
                  },
                  options: [
                    {
                      name: ["--name", "--id"],
                      description:
                        "The unique name of the lifecycle rule to remove",
                      args: {
                        name: "name",
                      },
                      isRequired: true,
                    },
                    OPTION_JURISDICTION,
                  ],
                },
                {
                  name: "set",
                  description:
                    "Set the lifecycle configuration for an R2 bucket from a JSON file",
                  args: {
                    name: "bucket",
                    description:
                      "The name of the R2 bucket to set lifecycle configuration for",
                  },
                  options: [
                    {
                      name: "--file",
                      description:
                        "Path to the JSON file containing lifecycle configuration",
                      args: {
                        name: "file",
                        template: "filepaths",
                      },
                      isRequired: true,
                    },
                    OPTION_JURISDICTION,
                    {
                      name: ["-y", "--force"],
                      description:
                        "Skip confirmation and Basin Catalog validation prompt",
                    },
                  ],
                },
              ],
            },
            {
              name: "cors",
              description: "Manage CORS configuration for an R2 bucket",
              subcommands: [
                {
                  name: "delete",
                  description: "Clear the CORS configuration for an R2 bucket",
                  args: {
                    name: "bucket",
                    description:
                      "The name of the R2 bucket to delete the CORS configuration for",
                  },
                  options: [OPTION_JURISDICTION, OPTION_FORCE],
                },
                {
                  name: "list",
                  description: "List the CORS rules for an R2 bucket",
                  args: {
                    name: "bucket",
                    description:
                      "The name of the R2 bucket to list the CORS rules for",
                  },
                  options: [OPTION_JURISDICTION],
                },
                {
                  name: "set",
                  description:
                    "Set the CORS configuration for an R2 bucket from a JSON file",
                  args: {
                    name: "bucket",
                    description:
                      "The name of the R2 bucket to set the CORS configuration for",
                  },
                  options: [
                    {
                      name: "--file",
                      description:
                        "Path to the JSON file containing the CORS configuration",
                      args: {
                        name: "file",
                        template: "filepaths",
                      },
                      isRequired: true,
                    },
                    OPTION_JURISDICTION,
                    OPTION_FORCE,
                  ],
                },
              ],
            },
            {
              name: "lock",
              description: "Manage lock rules for an R2 bucket",
              subcommands: [
                {
                  name: "list",
                  description: "List lock rules for an R2 bucket",
                  args: {
                    name: "bucket",
                    description:
                      "The name of the R2 bucket to list lock rules for",
                  },
                  options: [OPTION_JURISDICTION],
                },
                {
                  name: "add",
                  description: "Add a lock rule to an R2 bucket",
                  args: [
                    {
                      name: "bucket",
                      description:
                        "The name of the R2 bucket to add a bucket lock rule to",
                    },
                    {
                      name: "name",
                      description:
                        "A unique name for the bucket lock rule, used to identify and manage it",
                      isOptional: true,
                    },
                    {
                      name: "prefix",
                      description:
                        'Prefix condition for the bucket lock rule (set to "" for all prefixes)',
                      isOptional: true,
                    },
                  ],
                  options: [
                    {
                      name: "--retention-days",
                      description:
                        "Number of days which objects will be retained for",
                      args: {
                        name: "retention-days",
                      },
                      exclusiveOn: [
                        "--retention-date",
                        "--retention-indefinite",
                      ],
                    },
                    {
                      name: "--retention-date",
                      description:
                        "Date after which objects will be retained until (YYYY-MM-DD)",
                      args: {
                        name: "retention-date",
                      },
                      exclusiveOn: [
                        "--retention-days",
                        "--retention-indefinite",
                      ],
                    },
                    {
                      name: "--retention-indefinite",
                      description: "Retain objects indefinitely",
                      exclusiveOn: ["--retention-days", "--retention-date"],
                    },
                    OPTION_JURISDICTION,
                    OPTION_FORCE,
                  ],
                },
                {
                  name: "remove",
                  description: "Remove a bucket lock rule from an R2 bucket",
                  args: {
                    name: "bucket",
                    description:
                      "The name of the R2 bucket to remove a bucket lock rule from",
                  },
                  options: [
                    {
                      name: ["--name", "--id"],
                      description:
                        "The unique name of the bucket lock rule to remove",
                      args: {
                        name: "name",
                      },
                      isRequired: true,
                    },
                    OPTION_JURISDICTION,
                  ],
                },
                {
                  name: "set",
                  description:
                    "Set the lock configuration for an R2 bucket from a JSON file",
                  args: {
                    name: "bucket",
                    description:
                      "The name of the R2 bucket to set lock configuration for",
                  },
                  options: [
                    {
                      name: "--file",
                      description:
                        "Path to the JSON file containing lock configuration",
                      args: {
                        name: "file",
                        template: "filepaths",
                      },
                      isRequired: true,
                    },
                    OPTION_JURISDICTION,
                    OPTION_FORCE,
                  ],
                },
              ],
            },
          ],
        },
        {
          ...SHARED_BASIN_SQL,
          name: "sql",
          description: "Send queries and manage Basin SQL",
          hidden: true,
        },
        {
          name: "bulk",
          description: "Interact with multiple R2 objects at once",
          hidden: true,
          subcommands: [
            {
              name: "put",
              description: "Create objects in an R2 bucket",
              hidden: true,
              args: {
                name: "bucket",
                description: "The name of the new bucket",
              },
              options: [
                {
                  name: ["--content-type", "--ct"],
                  description:
                    "A standard MIME type describing the format of the object data",
                  args: {
                    name: "content-type",
                  },
                },
                {
                  name: ["--content-disposition", "--cd"],
                  description:
                    "Specifies presentational information for the object",
                  args: {
                    name: "content-disposition",
                  },
                },
                {
                  name: ["--content-encoding", "--ce"],
                  description:
                    "Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field",
                  args: {
                    name: "content-encoding",
                  },
                },
                {
                  name: ["--content-language", "--cl"],
                  description: "The language the content is in",
                  args: {
                    name: "content-language",
                  },
                },
                {
                  name: ["--cache-control", "--cc"],
                  description:
                    "Specifies caching behavior along the request/reply chain",
                  args: {
                    name: "cache-control",
                  },
                },
                {
                  name: "--expires",
                  description:
                    "The date and time at which the object is no longer cacheable",
                  args: {
                    name: "expires",
                  },
                },
                OPTION_LOCAL,
                OPTION_REMOTE,
                OPTION_PERSIST_TO,
                {
                  name: ["-J", "--jurisdiction"],
                  description:
                    "The jurisdiction where the object will be created",
                  args: {
                    name: "jurisdiction",
                  },
                },
                {
                  name: ["-s", "--storage-class"],
                  description: "The storage class of the object to be created",
                  args: {
                    name: "storage-class",
                  },
                },
                OPTION_FORCE_2,
                {
                  name: ["-f", "--filename"],
                  description:
                    "The file containing the key/file pairs to write",
                  args: {
                    name: "filename",
                    template: "filepaths",
                  },
                },
                {
                  name: "--concurrency",
                  description: "The number of concurrent uploads to perform",
                  args: {
                    name: "concurrency",
                    default: "20",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "d1",
      description: "Manage Workers D1 databases",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new D1 database, and provides the binding and UUID that you will put in your config file",
          args: {
            name: "name",
            description: "The name of the new D1 database",
          },
          options: [
            {
              name: "--location",
              description:
                "A hint for the primary location of the new DB. Options: weur: Western Europe eeur: Eastern Europe apac: Asia Pacific oc: Oceania wnam: Western North America enam: Eastern North America",
              args: {
                name: "location",
                suggestions: ["weur", "eeur", "apac", "oc", "wnam", "enam"],
              },
            },
            {
              name: "--jurisdiction",
              description:
                "The location to restrict the D1 database to run and store data within to comply with local regulations. Note that if jurisdictions are set, the location hint is ignored. Options: eu: The European Union fedramp: FedRAMP-compliant data centers us: The United States",
              args: {
                name: "jurisdiction",
                suggestions: ["eu", "fedramp", "us"],
              },
            },
            OPTION_USE_REMOTE,
            OPTION_UPDATE_CONFIG,
            OPTION_BINDING,
          ],
        },
        {
          name: "info",
          description:
            "Get information about a D1 database, including the current database size and state",
          args: {
            name: "name",
            description: "The name of the DB",
          },
          options: [OPTION_JSON],
        },
        {
          name: "list",
          description: "List all D1 databases in your account",
          options: [OPTION_JSON],
        },
        {
          name: "delete",
          description: "Delete a D1 database",
          args: {
            name: "name",
            description: "The name or binding of the DB",
          },
          options: [OPTION_SKIP_CONFIRMATION_2],
        },
        {
          name: "execute",
          description: "Execute a command or SQL file",
          args: {
            name: "database",
            description: "The name or binding of the DB",
          },
          options: [
            {
              name: "--command",
              description:
                "The SQL query you wish to execute, or multiple queries separated by ';'",
              args: {
                name: "command",
              },
            },
            {
              name: "--file",
              description: "A .sql file to ingest",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: ["-y", "--yes"],
              description: 'Answer "yes" to any prompts',
            },
            {
              name: "--local",
              description:
                "Execute commands/files against a local DB for use with wrangler dev",
            },
            {
              name: "--remote",
              description:
                "Execute commands/files against a remote D1 database for use with remote bindings or your deployed Worker",
            },
            {
              name: "--persist-to",
              description:
                "Specify directory to use for local persistence (for use with --local)",
              args: {
                name: "persist-to",
                template: "folders",
              },
            },
            OPTION_JSON,
            {
              name: "--preview",
              description:
                "Execute commands/files against a preview D1 database",
            },
          ],
        },
        {
          name: "export",
          description:
            "Export the contents or schema of your database as a .sql file",
          args: {
            name: "name",
            description: "The name of the D1 database to export",
          },
          options: [
            {
              name: "--local",
              description:
                "Export from your local DB you use with wrangler dev",
              exclusiveOn: ["--remote"],
            },
            {
              name: "--remote",
              description: "Export from a remote D1 database",
              exclusiveOn: ["--local"],
            },
            OPTION_SKIP_CONFIRMATION_2,
            {
              name: "--output",
              description: "Path to the SQL file for your export",
              args: {
                name: "output",
                template: "filepaths",
              },
              isRequired: true,
            },
            {
              name: "--table",
              description: "Specify which tables to include in export",
              args: {
                name: "table",
              },
              isRepeatable: true,
            },
            {
              name: "--no-schema",
              description: "Only output table contents, not the DB schema",
              exclusiveOn: ["--no-data"],
            },
            {
              name: "--no-data",
              description:
                "Only output table schema, not the contents of the DBs themselves",
              exclusiveOn: ["--no-schema"],
            },
            {
              name: "--compatibility",
              description:
                "Dump format. sqlite3_cli_only matches the output of the sqlite3 .dump command, including virtual tables, but cannot be imported into D1",
              args: {
                name: "compatibility",
                suggestions: ["d1", "sqlite3_cli_only"],
              },
            },
            {
              name: "--schema",
              hidden: true,
            },
            {
              name: "--data",
              hidden: true,
            },
          ],
        },
        {
          name: "time-travel",
          description:
            "Use Time Travel to restore, fork or copy a database at a specific point-in-time",
          subcommands: [
            {
              name: "info",
              description:
                "Retrieve information about a database at a specific point-in-time using Time Travel",
              args: {
                name: "database",
                description: "The name or binding of the DB",
              },
              options: [
                {
                  name: "--timestamp",
                  description:
                    "Accepts a Unix (seconds from epoch) or RFC3339 timestamp (e.g. 2023-07-13T08:46:42.228Z) to retrieve a bookmark for",
                  args: {
                    name: "timestamp",
                  },
                },
                OPTION_JSON,
              ],
            },
            {
              name: "restore",
              description:
                "Restore a database back to a specific point-in-time",
              args: {
                name: "database",
                description: "The name or binding of the DB",
              },
              options: [
                {
                  name: "--bookmark",
                  description: "Bookmark to use for time travel",
                  args: {
                    name: "bookmark",
                  },
                },
                {
                  name: "--timestamp",
                  description:
                    "Accepts a Unix (seconds from epoch) or RFC3339 timestamp (e.g. 2023-07-13T08:46:42.228Z) to retrieve a bookmark for (within the last 30 days)",
                  args: {
                    name: "timestamp",
                  },
                },
                OPTION_JSON,
              ],
            },
          ],
        },
        {
          name: "migrations",
          description: "Interact with D1 migrations",
          subcommands: [
            {
              name: "create",
              description: "Create a new migration",
              args: [
                {
                  name: "database",
                  description: "The name or binding of the DB",
                },
                {
                  name: "message",
                  description: "The Migration message",
                },
              ],
            },
            {
              name: "list",
              description: "View a list of unapplied migration files",
              args: {
                name: "database",
                description: "The name or binding of the DB",
              },
              options: [
                {
                  name: "--local",
                  description:
                    "Check migrations against a local DB for use with wrangler dev",
                },
                {
                  name: "--remote",
                  description:
                    "Check migrations against a remote DB for use with wrangler dev --remote",
                },
                {
                  name: "--preview",
                  description: "Check migrations against a preview D1 DB",
                },
                {
                  name: "--persist-to",
                  description:
                    "Specify directory to use for local persistence (you must use --local with this flag)",
                  args: {
                    name: "persist-to",
                    template: "folders",
                  },
                },
              ],
            },
            {
              name: "apply",
              description: "Apply any unapplied D1 migrations",
              args: {
                name: "database",
                description: "The name or binding of the DB",
              },
              options: [
                {
                  name: "--local",
                  description:
                    "Execute commands/files against a local DB for use with wrangler dev",
                },
                {
                  name: "--remote",
                  description:
                    "Execute commands/files against a remote DB for use with wrangler dev --remote",
                },
                {
                  name: "--preview",
                  description: "Execute commands/files against a preview D1 DB",
                },
                {
                  name: "--persist-to",
                  description:
                    "Specify directory to use for local persistence (you must use --local with this flag)",
                  args: {
                    name: "persist-to",
                    template: "folders",
                  },
                },
                {
                  name: ["-y", "--force"],
                  description:
                    "Automatically apply all pending migrations without prompt",
                },
              ],
            },
          ],
        },
        {
          name: "insights",
          description:
            "Get information about the queries run on a D1 database, or on all D1 databases in the account [experimental]",
          args: {
            name: "name",
            description:
              "The name or binding of the DB. Omit to get insights for every D1 database in the account",
            isOptional: true,
          },
          options: [
            {
              name: "--time-period",
              description: "Fetch data from now to the provided time period",
              args: {
                name: "time-period",
                default: "1d",
              },
            },
            {
              name: "--sort-type",
              description: "Choose the operation you want to sort insights by",
              args: {
                name: "sort-type",
                suggestions: ["sum", "avg"],
                default: "sum",
              },
            },
            {
              name: "--sort-by",
              description: "Choose the field you want to sort insights by",
              args: {
                name: "sort-by",
                suggestions: ["time", "reads", "writes", "count"],
                default: "time",
              },
            },
            {
              name: "--sort-direction",
              description: "Choose a sort direction",
              args: {
                name: "sort-direction",
                suggestions: ["ASC", "DESC"],
                default: "DESC",
              },
            },
            {
              name: "--limit",
              description: "Fetch insights about the first X queries",
              args: {
                name: "limit",
                default: "5",
              },
            },
            {
              name: "--count",
              description: "Same as --limit",
              args: {
                name: "count",
                default: "5",
              },
              hidden: true,
              deprecated: true,
            },
            OPTION_JSON,
          ],
        },
      ],
    },
    {
      name: "vectorize",
      description: "Manage Vectorize indexes",
      subcommands: [
        {
          name: "create",
          description: "Create a Vectorize index",
          args: {
            name: "name",
            description:
              "The name of the Vectorize index to create (must be unique)",
          },
          options: [
            {
              name: "--dimensions",
              description:
                "The dimension size to configure this index for, based on the output dimensions of your ML model",
              args: {
                name: "dimensions",
              },
            },
            {
              name: "--metric",
              description:
                "The distance metric to use for searching within the index",
              args: {
                name: "metric",
                suggestions: ["euclidean", "cosine", "dot-product"],
              },
            },
            {
              name: "--preset",
              description:
                "The name of an preset representing an embeddings model: Vectorize will configure the dimensions and distance metric for you when provided",
              args: {
                name: "preset",
                suggestions: [
                  "@cf/baai/bge-small-en-v1.5",
                  "@cf/baai/bge-base-en-v1.5",
                  "@cf/baai/bge-large-en-v1.5",
                  "openai/text-embedding-ada-002",
                  "cohere/embed-multilingual-v2.0",
                ],
              },
            },
            {
              name: "--description",
              description: "An optional description for this index",
              args: {
                name: "description",
              },
            },
            OPTION_JSON,
            {
              name: "--deprecated-v1",
              description:
                "Create a deprecated Vectorize V1 index. This is not recommended and indexes created with this option need all other Vectorize operations to have this option enabled",
              deprecated: true,
            },
            OPTION_USE_REMOTE,
            OPTION_UPDATE_CONFIG,
            OPTION_BINDING,
          ],
        },
        {
          name: "delete",
          description: "Delete a Vectorize index",
          args: {
            name: "name",
            description: "The name of the Vectorize index",
          },
          options: [
            OPTION_FORCE,
            {
              name: "--deprecated-v1",
              description: "Delete a deprecated Vectorize V1 index",
            },
          ],
        },
        {
          name: "get",
          description: "Get a Vectorize index by name",
          args: {
            name: "name",
            description: "The name of the Vectorize index",
          },
          options: [
            OPTION_JSON,
            {
              name: "--deprecated-v1",
              description:
                "Fetch a deprecated V1 Vectorize index. This must be enabled if the index was created with V1 option",
            },
          ],
        },
        {
          name: "list",
          description: "List your Vectorize indexes",
          options: [
            OPTION_JSON,
            {
              name: "--deprecated-v1",
              description:
                "List deprecated Vectorize V1 indexes for your account",
            },
          ],
        },
        {
          name: "list-vectors",
          description: "List vector identifiers in a Vectorize index",
          args: {
            name: "name",
            description: "The name of the Vectorize index",
          },
          options: [
            {
              name: "--count",
              description: "Maximum number of vectors to return (1-1000)",
              args: {
                name: "count",
              },
            },
            {
              name: "--cursor",
              description:
                "Cursor for pagination to get the next page of results",
              args: {
                name: "cursor",
              },
            },
            OPTION_JSON,
          ],
        },
        {
          name: "query",
          description: "Query a Vectorize index",
          args: {
            name: "name",
            description: "The name of the Vectorize index",
          },
          options: [
            {
              name: "--vector",
              description: "Vector to query the Vectorize Index",
              args: {
                name: "vector",
              },
              isRepeatable: true,
            },
            {
              name: "--vector-id",
              description:
                "Identifier for a vector in the index against which the index should be queried",
              args: {
                name: "vector-id",
              },
            },
            {
              name: "--top-k",
              description:
                "The number of results (nearest neighbors) to return",
              args: {
                name: "top-k",
                default: "5",
              },
            },
            {
              name: "--return-values",
              description:
                "Specify if the vector values should be included in the results",
            },
            {
              name: "--return-metadata",
              description:
                "Specify if the vector metadata should be included in the results",
              args: {
                name: "return-metadata",
                suggestions: ["all", "indexed", "none"],
                default: "none",
              },
            },
            {
              name: "--namespace",
              description: "Filter the query results based on this namespace",
              args: {
                name: "namespace",
              },
            },
            {
              name: "--filter",
              description:
                "Filter the query results based on this metadata filter",
              args: {
                name: "filter",
              },
            },
          ],
        },
        {
          name: "insert",
          description: "Insert vectors into a Vectorize index",
          args: {
            name: "name",
            description: "The name of the Vectorize index",
          },
          options: [
            {
              name: "--file",
              description:
                "A file containing line separated json (ndjson) vector objects",
              args: {
                name: "file",
                template: "filepaths",
              },
              isRequired: true,
            },
            {
              name: "--batch-size",
              description:
                "Number of vector records to include when sending to the Cloudflare API",
              args: {
                name: "batch-size",
                default: "1000",
              },
            },
            OPTION_JSON,
            {
              name: "--deprecated-v1",
              description:
                "Insert into a deprecated V1 Vectorize index. This must be enabled if the index was created with the V1 option",
            },
          ],
        },
        {
          name: "upsert",
          description: "Upsert vectors into a Vectorize index",
          args: {
            name: "name",
            description: "The name of the Vectorize index",
          },
          options: [
            {
              name: "--file",
              description:
                "A file containing line separated json (ndjson) vector objects",
              args: {
                name: "file",
                template: "filepaths",
              },
              isRequired: true,
            },
            {
              name: "--batch-size",
              description:
                "Number of vector records to include in a single upsert batch when sending to the Cloudflare API",
              args: {
                name: "batch-size",
                default: "5000",
              },
            },
            OPTION_JSON,
          ],
        },
        {
          name: "get-vectors",
          description: "Get vectors from a Vectorize index",
          args: {
            name: "name",
            description: "The name of the Vectorize index",
          },
          options: [
            {
              name: "--ids",
              description:
                "Vector identifiers to be fetched from the Vectorize Index. Example: `--ids a 'b' 1 '2'`",
              args: {
                name: "ids",
              },
              isRepeatable: true,
              isRequired: true,
            },
          ],
        },
        {
          name: "delete-vectors",
          description: "Delete vectors in a Vectorize index",
          args: {
            name: "name",
            description: "The name of the Vectorize index",
          },
          options: [
            {
              name: "--ids",
              description:
                "Vector identifiers to be deleted from the Vectorize Index. Example: `--ids a 'b' 1 '2'`",
              args: {
                name: "ids",
              },
              isRepeatable: true,
              isRequired: true,
            },
          ],
        },
        {
          name: "info",
          description: "Get additional details about the index",
          args: {
            name: "name",
            description: "The name of the Vectorize index",
          },
          options: [OPTION_JSON],
        },
        {
          name: "create-metadata-index",
          description: "Enable metadata filtering on the specified property",
          args: {
            name: "name",
            description: "The name of the Vectorize index",
          },
          options: [
            {
              name: "--propertyName",
              description: "The name of the metadata property to index",
              args: {
                name: "propertyName",
              },
              isRequired: true,
            },
            {
              name: "--type",
              description:
                "The type of metadata property to index. Valid types are 'string', 'number' and 'boolean'",
              args: {
                name: "type",
                suggestions: ["string", "number", "boolean"],
              },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-metadata-index",
          description:
            "List metadata properties on which metadata filtering is enabled",
          args: {
            name: "name",
            description: "The name of the Vectorize index",
          },
          options: [OPTION_JSON],
        },
        {
          name: "delete-metadata-index",
          description: "Delete metadata indexes",
          args: {
            name: "name",
            description: "The name of the Vectorize index",
          },
          options: [
            {
              name: "--propertyName",
              description: "The name of the metadata property to index",
              args: {
                name: "propertyName",
              },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "hyperdrive",
      description: "Manage Hyperdrive databases",
      subcommands: [
        {
          name: "create",
          description: "Create a Hyperdrive config",
          args: {
            name: "name",
            description: "The name of the Hyperdrive config",
          },
          options: [
            {
              name: "--connection-string",
              description:
                "The connection string for the database you want Hyperdrive to connect to - ex: protocol://user:password@host:port/database",
              args: {
                name: "connection-string",
              },
              exclusiveOn: [
                "--service-id",
                "--origin-host",
                "--origin-port",
                "--database",
                "--origin-user",
                "--origin-password",
                "--access-client-id",
                "--access-client-secret",
              ],
            },
            {
              name: "--service-id",
              description: "The Workers VPC Service ID of the origin database",
              args: {
                name: "service-id",
              },
              exclusiveOn: [
                "--origin-host",
                "--origin-port",
                "--connection-string",
                "--access-client-id",
                "--access-client-secret",
              ],
            },
            {
              name: ["--origin-host", "--host"],
              description: "The host of the origin database",
              args: {
                name: "origin-host",
              },
              exclusiveOn: ["--service-id", "--connection-string"],
            },
            {
              name: ["--origin-port", "--port"],
              description: "The port number of the origin database",
              args: {
                name: "origin-port",
              },
              exclusiveOn: [
                "--service-id",
                "--connection-string",
                "--access-client-id",
                "--access-client-secret",
              ],
            },
            {
              name: ["--origin-scheme", "--scheme"],
              description: "The scheme used to connect to the origin database",
              args: {
                name: "origin-scheme",
                suggestions: ["postgres", "postgresql", "mysql"],
                default: "postgresql",
              },
            },
            {
              name: "--database",
              description:
                "The name of the database within the origin database",
              args: {
                name: "database",
              },
              exclusiveOn: ["--connection-string"],
            },
            {
              name: ["--origin-user", "--user"],
              description:
                "The username used to connect to the origin database",
              args: {
                name: "origin-user",
              },
              exclusiveOn: ["--connection-string"],
            },
            {
              name: ["--origin-password", "--password"],
              description:
                "The password used to connect to the origin database",
              args: {
                name: "origin-password",
              },
              exclusiveOn: ["--connection-string"],
            },
            {
              name: "--access-client-id",
              description:
                "The Client ID of the Access token to use when connecting to the origin database",
              args: {
                name: "access-client-id",
              },
              exclusiveOn: [
                "--service-id",
                "--origin-port",
                "--connection-string",
              ],
            },
            {
              name: "--access-client-secret",
              description:
                "The Client Secret of the Access token to use when connecting to the origin database",
              args: {
                name: "access-client-secret",
              },
              exclusiveOn: [
                "--service-id",
                "--origin-port",
                "--connection-string",
              ],
            },
            {
              name: "--caching-disabled",
              description: "Disables the caching of SQL responses",
            },
            {
              name: "--max-age",
              description:
                "Specifies max duration for which items should persist in the cache, cannot be set when caching is disabled",
              args: {
                name: "max-age",
              },
            },
            {
              name: "--swr",
              description:
                "Indicates the number of seconds cache may serve the response after it becomes stale, cannot be set when caching is disabled",
              args: {
                name: "swr",
              },
            },
            {
              name: ["--ca-certificate-id", "--ca-certificate-uuid"],
              description:
                "Sets custom CA certificate when connecting to origin database. Must be valid UUID of already uploaded CA certificate",
              args: {
                name: "ca-certificate-id",
              },
            },
            {
              name: ["--mtls-certificate-id", "--mtls-certificate-uuid"],
              description:
                "Sets custom mTLS client certificates when connecting to origin database. Must be valid UUID of already uploaded public/private key certificates",
              args: {
                name: "mtls-certificate-id",
              },
            },
            {
              name: "--sslmode",
              description:
                "Sets sslmode for connecting to database. For PostgreSQL: 'require, verify-ca, verify-full'. For MySQL: 'REQUIRED, VERIFY_CA, VERIFY_IDENTITY'",
              args: {
                name: "sslmode",
                suggestions: [
                  "require",
                  "verify-ca",
                  "verify-full",
                  "REQUIRED",
                  "VERIFY_CA",
                  "VERIFY_IDENTITY",
                ],
              },
            },
            {
              name: "--origin-connection-limit",
              description:
                "The (soft) maximum number of connections that Hyperdrive may establish to the origin database",
              args: {
                name: "origin-connection-limit",
              },
            },
            OPTION_BINDING,
            OPTION_UPDATE_CONFIG,
          ],
        },
        {
          name: "delete",
          description: "Delete a Hyperdrive config",
          args: {
            name: "id",
            description: "The ID of the Hyperdrive config",
          },
        },
        {
          name: "get",
          description: "Get a Hyperdrive config",
          args: {
            name: "id",
            description: "The ID of the Hyperdrive config",
          },
        },
        {
          name: "list",
          description: "List Hyperdrive configs",
        },
        {
          name: "planetscale",
          description:
            "Authorize Cloudflare-billed PlanetScale databases [experimental]",
          subcommands: [
            {
              name: "signature",
              description:
                "Generate a signed authorization for creating a Cloudflare-billed PlanetScale database [experimental]",
            },
          ],
        },
        {
          name: "update",
          description: "Update a Hyperdrive config",
          args: {
            name: "id",
            description: "The ID of the Hyperdrive config",
          },
          options: [
            {
              name: "--name",
              description: "Give your config a new name",
              args: {
                name: "name",
              },
            },
            {
              name: "--connection-string",
              description:
                "The connection string for the database you want Hyperdrive to connect to - ex: protocol://user:password@host:port/database",
              args: {
                name: "connection-string",
              },
              exclusiveOn: [
                "--service-id",
                "--origin-host",
                "--origin-port",
                "--database",
                "--origin-user",
                "--origin-password",
                "--access-client-id",
                "--access-client-secret",
              ],
            },
            {
              name: "--service-id",
              description: "The Workers VPC Service ID of the origin database",
              args: {
                name: "service-id",
              },
              exclusiveOn: [
                "--origin-host",
                "--origin-port",
                "--connection-string",
                "--access-client-id",
                "--access-client-secret",
              ],
            },
            {
              name: ["--origin-host", "--host"],
              description: "The host of the origin database",
              args: {
                name: "origin-host",
              },
              exclusiveOn: ["--service-id", "--connection-string"],
            },
            {
              name: ["--origin-port", "--port"],
              description: "The port number of the origin database",
              args: {
                name: "origin-port",
              },
              exclusiveOn: [
                "--service-id",
                "--connection-string",
                "--access-client-id",
                "--access-client-secret",
              ],
            },
            {
              name: ["--origin-scheme", "--scheme"],
              description: "The scheme used to connect to the origin database",
              args: {
                name: "origin-scheme",
                suggestions: ["postgres", "postgresql", "mysql"],
              },
            },
            {
              name: "--database",
              description:
                "The name of the database within the origin database",
              args: {
                name: "database",
              },
              exclusiveOn: ["--connection-string"],
            },
            {
              name: ["--origin-user", "--user"],
              description:
                "The username used to connect to the origin database",
              args: {
                name: "origin-user",
              },
              exclusiveOn: ["--connection-string"],
            },
            {
              name: ["--origin-password", "--password"],
              description:
                "The password used to connect to the origin database",
              args: {
                name: "origin-password",
              },
              exclusiveOn: ["--connection-string"],
            },
            {
              name: "--access-client-id",
              description:
                "The Client ID of the Access token to use when connecting to the origin database",
              args: {
                name: "access-client-id",
              },
              exclusiveOn: [
                "--service-id",
                "--origin-port",
                "--connection-string",
              ],
            },
            {
              name: "--access-client-secret",
              description:
                "The Client Secret of the Access token to use when connecting to the origin database",
              args: {
                name: "access-client-secret",
              },
              exclusiveOn: [
                "--service-id",
                "--origin-port",
                "--connection-string",
              ],
            },
            {
              name: "--caching-disabled",
              description: "Disables the caching of SQL responses",
            },
            {
              name: "--max-age",
              description:
                "Specifies max duration for which items should persist in the cache, cannot be set when caching is disabled",
              args: {
                name: "max-age",
              },
            },
            {
              name: "--swr",
              description:
                "Indicates the number of seconds cache may serve the response after it becomes stale, cannot be set when caching is disabled",
              args: {
                name: "swr",
              },
            },
            {
              name: ["--ca-certificate-id", "--ca-certificate-uuid"],
              description:
                "Sets custom CA certificate when connecting to origin database. Must be valid UUID of already uploaded CA certificate",
              args: {
                name: "ca-certificate-id",
              },
            },
            {
              name: ["--mtls-certificate-id", "--mtls-certificate-uuid"],
              description:
                "Sets custom mTLS client certificates when connecting to origin database. Must be valid UUID of already uploaded public/private key certificates",
              args: {
                name: "mtls-certificate-id",
              },
            },
            {
              name: "--sslmode",
              description:
                "Sets sslmode for connecting to database. For PostgreSQL: 'require, verify-ca, verify-full'. For MySQL: 'REQUIRED, VERIFY_CA, VERIFY_IDENTITY'",
              args: {
                name: "sslmode",
                suggestions: [
                  "require",
                  "verify-ca",
                  "verify-full",
                  "REQUIRED",
                  "VERIFY_CA",
                  "VERIFY_IDENTITY",
                ],
              },
            },
            {
              name: "--origin-connection-limit",
              description:
                "The (soft) maximum number of connections that Hyperdrive may establish to the origin database",
              args: {
                name: "origin-connection-limit",
              },
            },
          ],
        },
      ],
    },
    {
      name: "flagship",
      description: "Manage Flagship apps and feature flags [open beta]",
      subcommands: [
        {
          name: "apps",
          description: "Manage Flagship apps [open beta]",
          subcommands: [
            {
              name: "create",
              description: "Create a Flagship app [open beta]",
              args: {
                name: "name",
                description: "The name of the app",
              },
              options: [
                OPTION_JSON,
                OPTION_USE_REMOTE,
                OPTION_UPDATE_CONFIG,
                OPTION_BINDING,
              ],
            },
            {
              name: ["list", "ls"],
              description: "List Flagship apps [open beta]",
              options: [OPTION_JSON],
            },
            {
              name: "get",
              description: "Get a Flagship app [open beta]",
              args: {
                name: "app-id",
                description: "The ID of the app",
              },
              options: [OPTION_JSON],
            },
            {
              name: "update",
              description: "Update a Flagship app [open beta]",
              args: {
                name: "app-id",
                description: "The ID of the app",
              },
              options: [
                {
                  name: "--name",
                  description: "The new name of the app",
                  args: {
                    name: "name",
                  },
                  isRequired: true,
                },
                OPTION_JSON,
              ],
            },
            {
              name: ["delete", "rm"],
              description: "Delete a Flagship app [open beta]",
              args: {
                name: "app-id",
                description: "One or more app IDs to delete",
                isVariadic: true,
              },
              options: [
                {
                  name: ["-y", "--force"],
                  description: "Skip the confirmation prompt",
                },
                OPTION_JSON,
              ],
            },
          ],
        },
        {
          name: "flags",
          description: "Manage Flagship feature flags [open beta]",
          subcommands: [
            {
              name: "create",
              description:
                "Create a feature flag in a Flagship app [open beta]",
              args: [
                {
                  name: "app-id",
                  description: "The ID of the app",
                },
                {
                  name: "key",
                  description: "The key of the flag",
                },
              ],
              options: [
                {
                  name: ["-V", "--variation"],
                  description:
                    'A flag variation, in the form "name=value" (repeatable)',
                  args: {
                    name: "variation",
                  },
                  isRepeatable: true,
                },
                {
                  name: ["--default-variation", "--default"],
                  description:
                    "The name of the variation to serve by default (defaults to off for boolean flags, otherwise the first variation)",
                  args: {
                    name: "default-variation",
                  },
                },
                {
                  name: ["-t", "--type"],
                  description:
                    "The variation value type (inferred when omitted)",
                  args: {
                    name: "type",
                    suggestions: ["boolean", "string", "number", "json"],
                  },
                },
                {
                  name: ["-d", "--description"],
                  description: "A description of the flag",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--disabled",
                  description: "Create the flag in a disabled state",
                },
                {
                  name: "--rule",
                  description:
                    'A targeting rule, e.g. "serve=on; when=plan equals pro AND region in [US,CA]; rollout=30%@user_id". Conditions support AND/OR; priority is optional and defaults to declaration order (repeatable)',
                  args: {
                    name: "rule",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--rule-json",
                  description: "A targeting rule as a JSON object (repeatable)",
                  args: {
                    name: "rule-json",
                  },
                  isRepeatable: true,
                },
                OPTION_JSON,
                OPTION_LOCAL_2,
                OPTION_REMOTE_2,
                OPTION_PERSIST_TO_2,
              ],
            },
            {
              name: ["list", "ls"],
              description: "List feature flags in a Flagship app [open beta]",
              args: {
                name: "app-id",
                description: "The ID of the app",
              },
              options: [
                {
                  name: "--limit",
                  description: "The maximum number of flags to return (1-200)",
                  args: {
                    name: "limit",
                  },
                },
                {
                  name: "--cursor",
                  description:
                    "The pagination cursor from a previous list call",
                  args: {
                    name: "cursor",
                  },
                },
                {
                  name: "--all",
                  description:
                    "Fetch every flag, following pagination automatically",
                },
                OPTION_JSON,
                OPTION_LOCAL_2,
                OPTION_REMOTE_2,
                OPTION_PERSIST_TO_2,
              ],
            },
            {
              name: ["get", "inspect"],
              description: "Get a feature flag from a Flagship app [open beta]",
              args: [
                {
                  name: "app-id",
                  description: "The ID of the app",
                },
                {
                  name: "key",
                  description: "The key of the flag",
                },
              ],
              options: [
                OPTION_JSON,
                OPTION_LOCAL_2,
                OPTION_REMOTE_2,
                OPTION_PERSIST_TO_2,
              ],
            },
            {
              name: "pull",
              description:
                "Pull feature flags from a Flagship app into the local flag store [open beta]",
              args: {
                name: "app-id",
                description: "The ID of the app to pull flags from",
              },
              options: [OPTION_PERSIST_TO_2, OPTION_JSON],
            },
            {
              name: "update",
              description:
                "Update a feature flag in a Flagship app [open beta]",
              args: [
                {
                  name: "app-id",
                  description: "The ID of the app",
                },
                {
                  name: "key",
                  description: "The key of the flag",
                },
              ],
              options: [
                {
                  name: "--enable",
                  description: "Enable the flag",
                  exclusiveOn: ["--disable"],
                },
                {
                  name: "--disable",
                  description: "Disable the flag",
                  exclusiveOn: ["--enable"],
                },
                {
                  name: ["-d", "--description"],
                  description:
                    'A new description for the flag (pass "" to clear it)',
                  args: {
                    name: "description",
                  },
                },
                {
                  name: ["--default-variation", "--default"],
                  description: "The name of the variation to serve by default",
                  args: {
                    name: "default-variation",
                  },
                },
                {
                  name: ["-t", "--type"],
                  description:
                    "The value type used to coerce --set-variation values",
                  args: {
                    name: "type",
                    suggestions: ["boolean", "string", "number", "json"],
                  },
                },
                {
                  name: "--set-variation",
                  description:
                    'Add or replace a variation, in the form "name=value"',
                  args: {
                    name: "set-variation",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--remove-variation",
                  description: "Remove a variation by name",
                  args: {
                    name: "remove-variation",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--rule",
                  description:
                    "Replace the flag's targeting rules (repeatable)",
                  args: {
                    name: "rule",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--rule-json",
                  description:
                    "Replace the flag's targeting rules using JSON (repeatable)",
                  args: {
                    name: "rule-json",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--add-rule",
                  description:
                    "Append a targeting rule, keeping the existing rules (repeatable)",
                  args: {
                    name: "add-rule",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--add-rule-json",
                  description:
                    "Append a targeting rule using JSON, keeping the existing rules (repeatable)",
                  args: {
                    name: "add-rule-json",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--clear-rules",
                  description: "Remove all targeting rules",
                },
                OPTION_JSON,
                OPTION_LOCAL_2,
                OPTION_REMOTE_2,
                OPTION_PERSIST_TO_2,
              ],
            },
            {
              name: "set",
              description:
                "Set the default variation served by a feature flag [open beta]",
              args: [
                {
                  name: "app-id",
                  description: "The ID of the app",
                },
                {
                  name: "key",
                  description: "The key of the flag",
                },
              ],
              options: [
                {
                  name: ["-V", "--variation", "--variant"],
                  description: "The variation to serve by default",
                  args: {
                    name: "variation",
                  },
                  isRequired: true,
                },
                {
                  name: "--clear-rules",
                  description:
                    "Clear targeting rules so this variation is always served",
                },
                OPTION_JSON,
                OPTION_LOCAL_2,
                OPTION_REMOTE_2,
                OPTION_PERSIST_TO_2,
              ],
            },
            {
              name: "rules",
              description:
                "Manage targeting rules for a Flagship feature flag [open beta]",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List targeting rules for a feature flag [open beta]",
                  args: [
                    {
                      name: "app-id",
                      description: "The ID of the app",
                    },
                    {
                      name: "key",
                      description: "The key of the flag",
                    },
                  ],
                  options: [
                    OPTION_JSON,
                    OPTION_LOCAL_2,
                    OPTION_REMOTE_2,
                    OPTION_PERSIST_TO_2,
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update one targeting rule for a feature flag [open beta]",
                  args: [
                    {
                      name: "app-id",
                      description: "The ID of the app",
                    },
                    {
                      name: "key",
                      description: "The key of the flag",
                    },
                  ],
                  options: [
                    {
                      name: "--priority",
                      description: "The priority of the rule to update",
                      args: {
                        name: "priority",
                      },
                      isRequired: true,
                    },
                    {
                      name: "--serve",
                      description:
                        "The variation to serve when this rule matches",
                      args: {
                        name: "serve",
                      },
                    },
                    {
                      name: "--when",
                      description:
                        "The rule conditions, using the same syntax as --rule when=…",
                      args: {
                        name: "when",
                      },
                    },
                    {
                      name: "--clear-conditions",
                      description:
                        "Remove conditions so the rule matches all contexts",
                    },
                    {
                      name: "--rollout",
                      description:
                        'The rollout, in the form "percentage" or "percentage%@attribute"',
                      args: {
                        name: "rollout",
                      },
                    },
                    {
                      name: "--clear-rollout",
                      description: "Remove the rollout from this rule",
                    },
                    OPTION_JSON,
                    OPTION_LOCAL_2,
                    OPTION_REMOTE_2,
                    OPTION_PERSIST_TO_2,
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete one targeting rule from a feature flag [open beta]",
                  args: [
                    {
                      name: "app-id",
                      description: "The ID of the app",
                    },
                    {
                      name: "key",
                      description: "The key of the flag",
                    },
                  ],
                  options: [
                    {
                      name: "--priority",
                      description: "The priority of the rule to delete",
                      args: {
                        name: "priority",
                      },
                      isRequired: true,
                    },
                    OPTION_JSON,
                    OPTION_LOCAL_2,
                    OPTION_REMOTE_2,
                    OPTION_PERSIST_TO_2,
                  ],
                },
                {
                  name: "reorder",
                  description:
                    "Reorder targeting rules for a feature flag [open beta]",
                  args: [
                    {
                      name: "app-id",
                      description: "The ID of the app",
                    },
                    {
                      name: "key",
                      description: "The key of the flag",
                    },
                  ],
                  options: [
                    {
                      name: "--order",
                      description:
                        "Comma-separated existing rule priorities in their new order, for example 2,1,3",
                      args: {
                        name: "order",
                      },
                      isRequired: true,
                    },
                    OPTION_JSON,
                    OPTION_LOCAL_2,
                    OPTION_REMOTE_2,
                    OPTION_PERSIST_TO_2,
                  ],
                },
              ],
            },
            {
              name: "split",
              description:
                "Split traffic across variations by percentage [open beta]",
              args: [
                {
                  name: "app-id",
                  description: "The ID of the app",
                },
                {
                  name: "key",
                  description: "The key of the flag",
                },
              ],
              options: [
                {
                  name: ["-w", "--weight"],
                  description:
                    'A variation weight, in the form "variation=weight" (repeatable)',
                  args: {
                    name: "weight",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--by",
                  description: "Context attribute used for sticky bucketing",
                  args: {
                    name: "by",
                  },
                },
                {
                  name: ["--default-variation", "--default"],
                  description: "Fallback variation when bucketing cannot run",
                  args: {
                    name: "default-variation",
                  },
                },
                {
                  name: ["-y", "--force"],
                  description:
                    "Skip the confirmation prompt when this split replaces existing targeting rules",
                },
                OPTION_JSON,
                OPTION_LOCAL_2,
                OPTION_REMOTE_2,
                OPTION_PERSIST_TO_2,
              ],
            },
            {
              name: "rollout",
              description:
                "Roll out one variation to a percentage of traffic [open beta]",
              args: [
                {
                  name: "app-id",
                  description: "The ID of the app",
                },
                {
                  name: "key",
                  description: "The key of the flag",
                },
              ],
              options: [
                {
                  name: "--to",
                  description: "Variation to roll out",
                  args: {
                    name: "to",
                  },
                  isRequired: true,
                },
                {
                  name: "--percentage",
                  description:
                    "Percentage of traffic to serve the rollout variation (0-100)",
                  args: {
                    name: "percentage",
                  },
                  isRequired: true,
                },
                {
                  name: "--by",
                  description: "Context attribute used for sticky bucketing",
                  args: {
                    name: "by",
                  },
                },
                {
                  name: ["--from-variation", "--from"],
                  description: "Fallback variation for the remaining traffic",
                  args: {
                    name: "from-variation",
                  },
                },
                {
                  name: ["-y", "--force"],
                  description:
                    "Skip the confirmation prompt when this rollout replaces existing targeting rules",
                },
                OPTION_JSON,
                OPTION_LOCAL_2,
                OPTION_REMOTE_2,
                OPTION_PERSIST_TO_2,
              ],
            },
            {
              name: "enable",
              description: "Enable a feature flag [open beta]",
              args: [
                {
                  name: "app-id",
                  description: "The ID of the app",
                },
                {
                  name: "key",
                  description: "One or more flag keys to enable",
                  isVariadic: true,
                },
              ],
              options: [
                OPTION_JSON,
                OPTION_LOCAL_2,
                OPTION_REMOTE_2,
                OPTION_PERSIST_TO_2,
              ],
            },
            {
              name: "disable",
              description: "Disable a feature flag [open beta]",
              args: [
                {
                  name: "app-id",
                  description: "The ID of the app",
                },
                {
                  name: "key",
                  description: "One or more flag keys to disable",
                  isVariadic: true,
                },
              ],
              options: [
                OPTION_JSON,
                OPTION_LOCAL_2,
                OPTION_REMOTE_2,
                OPTION_PERSIST_TO_2,
              ],
            },
            {
              name: ["evaluate", "eval"],
              description:
                "Evaluate a feature flag with optional context [open beta]",
              args: [
                {
                  name: "app-id",
                  description: "The ID of the app",
                },
                {
                  name: "key",
                  description: "The key of the flag",
                },
              ],
              options: [
                {
                  name: ["-C", "--context", "--ctx"],
                  description:
                    'Evaluation context, in the form "name=value" (repeatable)',
                  args: {
                    name: "context",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--targeting-key",
                  description: "Stable bucketing key for percentage rollouts",
                  args: {
                    name: "targeting-key",
                  },
                },
                OPTION_JSON,
                OPTION_LOCAL_2,
                OPTION_REMOTE_2,
                OPTION_PERSIST_TO_2,
              ],
            },
            {
              name: ["delete", "rm"],
              description:
                "Delete a feature flag from a Flagship app [open beta]",
              args: [
                {
                  name: "app-id",
                  description: "The ID of the app",
                },
                {
                  name: "key",
                  description: "One or more flag keys to delete",
                  isVariadic: true,
                },
              ],
              options: [
                {
                  name: ["-y", "--force"],
                  description: "Skip the confirmation prompt",
                },
                OPTION_JSON,
                OPTION_LOCAL_2,
                OPTION_REMOTE_2,
                OPTION_PERSIST_TO_2,
              ],
            },
            {
              name: ["changelog", "history"],
              description: "Show the changelog for a feature flag [open beta]",
              args: [
                {
                  name: "app-id",
                  description: "The ID of the app",
                },
                {
                  name: "key",
                  description: "The key of the flag",
                },
              ],
              options: [
                {
                  name: "--limit",
                  description:
                    "The maximum number of entries to return (1-200)",
                  args: {
                    name: "limit",
                  },
                },
                {
                  name: "--cursor",
                  description:
                    "The pagination cursor from a previous changelog call",
                  args: {
                    name: "cursor",
                  },
                },
                {
                  name: "--all",
                  description:
                    "Fetch every entry, following pagination automatically",
                },
                OPTION_JSON,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "turnstile",
      description: "Manage Turnstile widgets [alpha]",
      subcommands: [
        {
          name: "widget",
          description: "Manage Turnstile widgets [alpha]",
          subcommands: [
            {
              name: "create",
              description: "Create a Turnstile widget [alpha]",
              args: {
                name: "name",
                description: "Human-readable widget name",
              },
              options: [
                {
                  name: ["--domain", "--domains"],
                  description:
                    "Allowed hostnames for this widget. Pass multiple times or comma-separate, e.g. --domain example.com --domain www.example.com",
                  args: {
                    name: "domain",
                  },
                  isRepeatable: true,
                  isRequired: true,
                },
                {
                  name: "--mode",
                  description: "Widget mode",
                  args: {
                    name: "mode",
                    suggestions: ["managed", "invisible", "non-interactive"],
                  },
                  isRequired: true,
                },
                {
                  name: "--clearance-level",
                  description:
                    "Challenge clearance level granted when this widget is embedded on a Cloudflare site",
                  args: {
                    name: "clearance-level",
                    suggestions: [
                      "no_clearance",
                      "jschallenge",
                      "managed",
                      "interactive",
                    ],
                  },
                },
                {
                  name: "--bot-fight-mode",
                  description:
                    "Issue computationally expensive challenges in response to malicious bots (Enterprise only)",
                },
                {
                  name: "--ephemeral-id",
                  description:
                    "Return the Ephemeral ID in /siteverify responses (Enterprise only)",
                },
                {
                  name: "--offlabel",
                  description:
                    "Do not show any Cloudflare branding on the widget (Enterprise only)",
                },
                {
                  name: "--region",
                  description:
                    "Region where this widget can be used. Cannot be changed after creation",
                  args: {
                    name: "region",
                    suggestions: ["world", "china"],
                  },
                },
                {
                  name: "--json",
                  description: "Print the created widget as JSON only",
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a Turnstile widget [alpha]",
              args: {
                name: "sitekey",
                description: "The sitekey of the widget",
              },
              options: [
                {
                  name: ["-y", "--skip-confirmation"],
                  description: "Skip confirmation prompt",
                },
                {
                  name: "--json",
                  description:
                    "Return output as JSON. Requires --skip-confirmation",
                },
              ],
            },
            {
              name: "get",
              description: "Get a Turnstile widget [alpha]",
              args: {
                name: "sitekey",
                description: "The sitekey of the widget",
              },
              options: [
                {
                  name: "--json",
                  description:
                    "Print the widget as JSON instead of a formatted view",
                },
              ],
            },
            {
              name: "list",
              description: "List Turnstile widgets [alpha]",
              options: [
                {
                  name: "--json",
                  description: "Print widgets as JSON instead of a table",
                },
              ],
            },
            {
              name: "update",
              description: "Update a Turnstile widget [alpha]",
              args: {
                name: "sitekey",
                description: "The sitekey of the widget",
              },
              options: [
                {
                  name: "--name",
                  description: "New human-readable name for the widget",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: ["--domain", "--domains"],
                  description:
                    "Allowed hostnames for this widget. Pass multiple times or comma-separate, e.g. --domain example.com --domain www.example.com",
                  args: {
                    name: "domain",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--mode",
                  description: "Widget mode",
                  args: {
                    name: "mode",
                    suggestions: ["managed", "invisible", "non-interactive"],
                  },
                },
                {
                  name: "--clearance-level",
                  description:
                    "Challenge clearance level granted when this widget is embedded on a Cloudflare site",
                  args: {
                    name: "clearance-level",
                    suggestions: [
                      "no_clearance",
                      "jschallenge",
                      "managed",
                      "interactive",
                    ],
                  },
                },
                {
                  name: "--bot-fight-mode",
                  description:
                    "Issue computationally expensive challenges in response to malicious bots (Enterprise only)",
                },
                {
                  name: "--ephemeral-id",
                  description:
                    "Return the Ephemeral ID in /siteverify responses (Enterprise only)",
                },
                {
                  name: "--offlabel",
                  description:
                    "Do not show any Cloudflare branding on the widget (Enterprise only)",
                },
                {
                  name: "--json",
                  description: "Print the updated widget as JSON only",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "tunnel",
      description: "Manage Cloudflare Tunnels [experimental]",
      subcommands: [
        {
          name: "create",
          description: "Create a new Cloudflare Tunnel [experimental]",
          args: {
            name: "name",
            description: "The name of the tunnel",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloudflare Tunnel [experimental]",
          args: {
            name: "tunnel",
            description: "The name or UUID of the tunnel",
          },
          options: [OPTION_FORCE],
        },
        {
          name: "info",
          description:
            "Display details about a Cloudflare Tunnel [experimental]",
          args: {
            name: "tunnel",
            description: "The name or UUID of the tunnel",
          },
        },
        {
          name: "list",
          description:
            "List all Cloudflare Tunnels in your account [experimental]",
        },
        {
          name: "run",
          description:
            "Run a Cloudflare Tunnel using cloudflared [experimental]",
          args: {
            name: "tunnel",
            description:
              "The name or UUID of the tunnel to run (required unless --token is provided)",
            isOptional: true,
          },
          options: [
            {
              name: "--token",
              description:
                "The tunnel token to use (skips API auth, useful for running on remote machines)",
              args: {
                name: "token",
              },
            },
            {
              name: "--log-level",
              description:
                "Log level for cloudflared (does not affect Wrangler logs, which are controlled by WRANGLER_LOG)",
              args: {
                name: "log-level",
                suggestions: ["debug", "info", "warn", "error", "fatal"],
                default: "info",
              },
            },
          ],
        },
        {
          name: "quick-start",
          description:
            "Start a free, temporary tunnel without an account (https://try.cloudflare.com) [experimental]",
          args: {
            name: "url",
            description:
              "The local URL to expose (e.g., http://localhost:3000)",
          },
          options: [
            {
              name: "--allowed-mail",
              description:
                "Require email authentication (cloudflared 2026.9.2 or later). Accepts an exact address or domain wildcard such as user@example.com or *@example.org. May be repeated or comma-separated",
              args: {
                name: "allowed-mail",
              },
              isRepeatable: true,
            },
            {
              name: "--log-level",
              description:
                "Log level for cloudflared (does not affect Wrangler logs, which are controlled by WRANGLER_LOG)",
              args: {
                name: "log-level",
                suggestions: ["debug", "info", "warn", "error", "fatal"],
                default: "info",
              },
            },
          ],
        },
      ],
    },
    {
      name: "ai-search",
      description: "Manage AI Search instances [open beta]",
      subcommands: [
        {
          name: "list",
          description: "List all AI Search instances [open beta]",
          options: [
            {
              name: ["-n", "--namespace"],
              description: "The namespace to list instances from",
              args: {
                name: "namespace",
                default: "default",
              },
            },
            OPTION_JSON_4,
            OPTION_PAGE_2,
            {
              name: "--per-page",
              description: "Number of instances to show per page",
              args: {
                name: "per-page",
              },
            },
          ],
        },
        {
          name: "create",
          description: "Create a new AI Search instance [open beta]",
          args: {
            name: "name",
            description:
              "The name of the AI Search instance to create (must be unique within its namespace)",
          },
          options: [
            {
              name: ["-n", "--namespace"],
              description: "The namespace to create the instance in",
              args: {
                name: "namespace",
              },
            },
            {
              name: "--source",
              description: "Data source identifier (R2 bucket name or web URL)",
              args: {
                name: "source",
              },
            },
            {
              name: "--type",
              description: "The source type for the instance",
              args: {
                name: "type",
                suggestions: ["builtin", "r2", "web-crawler"],
              },
            },
            {
              name: "--parse-type",
              description:
                "How website URLs are discovered (--type web-crawler only). 'sitemap' reads XML sitemaps; 'discover' follows links recursively. Defaults to 'sitemap'",
              args: {
                name: "parse-type",
                suggestions: ["sitemap", "discover"],
              },
            },
            {
              name: "--source-jurisdiction",
              description:
                "The R2 jurisdiction of the source bucket (e.g. eu, fedramp). Only valid with --type r2; omit for no specific jurisdiction",
              args: {
                name: "source-jurisdiction",
              },
            },
            {
              name: "--embedding-model",
              description: "Embedding model to use",
              args: {
                name: "embedding-model",
              },
            },
            {
              name: "--generation-model",
              description: "LLM model for chat completions",
              args: {
                name: "generation-model",
              },
            },
            {
              name: "--chunk-size",
              description: "Chunk size for document splitting (min: 64)",
              args: {
                name: "chunk-size",
              },
            },
            {
              name: "--chunk-overlap",
              description: "Overlap between document chunks",
              args: {
                name: "chunk-overlap",
              },
            },
            {
              name: "--max-num-results",
              description: "Maximum search results per query",
              args: {
                name: "max-num-results",
              },
            },
            {
              name: "--reranking",
              description: "Enable reranking of search results",
            },
            {
              name: "--reranking-model",
              description: "Model to use for reranking",
              args: {
                name: "reranking-model",
              },
            },
            {
              name: "--hybrid-search",
              description: "Enable hybrid (keyword + vector) search",
            },
            {
              name: "--cache",
              description: "Enable response caching",
            },
            {
              name: "--score-threshold",
              description: "Minimum relevance score threshold (0-1)",
              args: {
                name: "score-threshold",
              },
            },
            {
              name: "--prefix",
              description: "R2 key prefix to scope indexing",
              args: {
                name: "prefix",
              },
            },
            {
              name: "--include-items",
              description: "Glob patterns for items to include",
              args: {
                name: "include-items",
              },
              isRepeatable: true,
            },
            {
              name: "--exclude-items",
              description: "Glob patterns for items to exclude",
              args: {
                name: "exclude-items",
              },
              isRepeatable: true,
            },
            {
              name: "--custom-metadata",
              description:
                "Custom metadata fields, formatted as 'field_name:data_type'. data_type must be one of: text, number, boolean, datetime. Repeat the flag for multiple fields (e.g. --custom-metadata title:text --custom-metadata views:number)",
              args: {
                name: "custom-metadata",
              },
              isRepeatable: true,
              exclusiveOn: ["--custom-metadata-schema"],
            },
            {
              name: "--custom-metadata-schema",
              description:
                'Path to a JSON file describing custom metadata fields. The file must contain an array of { "field_name", "data_type" } objects. Mutually exclusive with --custom-metadata',
              args: {
                name: "custom-metadata-schema",
                template: "filepaths",
              },
              exclusiveOn: ["--custom-metadata"],
            },
            OPTION_JSON_4,
          ],
        },
        {
          name: "get",
          description: "Get details of an AI Search instance [open beta]",
          args: {
            name: "name",
            description: "The name of the AI Search instance",
          },
          options: [OPTION_NAMESPACE_2, OPTION_JSON_4],
        },
        {
          name: "update",
          description: "Update an AI Search instance configuration [open beta]",
          args: {
            name: "name",
            description: "The name of the AI Search instance to update",
          },
          options: [
            OPTION_NAMESPACE_2,
            {
              name: "--embedding-model",
              description: "Update the embedding model",
              args: {
                name: "embedding-model",
              },
            },
            {
              name: "--generation-model",
              description: "Update the LLM model for chat completions",
              args: {
                name: "generation-model",
              },
            },
            {
              name: "--chunk-size",
              description: "Update the chunk size",
              args: {
                name: "chunk-size",
              },
            },
            {
              name: "--chunk-overlap",
              description: "Update the chunk overlap",
              args: {
                name: "chunk-overlap",
              },
            },
            {
              name: "--max-num-results",
              description: "Update max search results per query",
              args: {
                name: "max-num-results",
              },
            },
            {
              name: "--reranking",
              description: "Enable or disable reranking",
            },
            {
              name: "--reranking-model",
              description: "Update the reranking model",
              args: {
                name: "reranking-model",
              },
            },
            {
              name: "--hybrid-search",
              description: "Enable or disable hybrid search",
            },
            {
              name: "--cache",
              description: "Enable or disable caching",
            },
            {
              name: "--score-threshold",
              description: "Update the minimum relevance score threshold (0-1)",
              args: {
                name: "score-threshold",
              },
            },
            {
              name: "--paused",
              description: "Pause or resume the instance",
            },
            OPTION_JSON_4,
          ],
        },
        {
          name: "delete",
          description: "Delete an AI Search instance [open beta]",
          args: {
            name: "name",
            description: "The name of the AI Search instance to delete",
          },
          options: [OPTION_NAMESPACE_2, OPTION_FORCE],
        },
        {
          name: "stats",
          description:
            "Get usage statistics for an AI Search instance [open beta]",
          args: {
            name: "name",
            description: "The name of the AI Search instance",
          },
          options: [OPTION_NAMESPACE_2, OPTION_JSON_4],
        },
        {
          name: "search",
          description:
            "Execute a semantic search query against an AI Search instance [open beta]",
          args: {
            name: "name",
            description: "The name of the AI Search instance",
          },
          options: [
            OPTION_NAMESPACE_2,
            {
              name: "--query",
              description: "The search query text",
              args: {
                name: "query",
              },
              isRequired: true,
            },
            {
              name: "--max-num-results",
              description: "Override maximum number of results",
              args: {
                name: "max-num-results",
              },
            },
            {
              name: "--score-threshold",
              description: "Override minimum relevance score (0-1)",
              args: {
                name: "score-threshold",
              },
            },
            {
              name: "--reranking",
              description: "Override reranking setting",
            },
            {
              name: "--filter",
              description:
                "Metadata filter as key=value (repeatable, e.g. --filter type=docs --filter lang=en)",
              args: {
                name: "filter",
              },
              isRepeatable: true,
            },
            OPTION_JSON_4,
          ],
        },
        {
          name: "namespace",
          description: "Manage AI Search namespaces [open beta]",
          subcommands: [
            {
              name: "list",
              description: "List all AI Search namespaces [open beta]",
              options: [
                OPTION_JSON_4,
                OPTION_PAGE_2,
                {
                  name: "--per-page",
                  description: "Number of namespaces to show per page",
                  args: {
                    name: "per-page",
                  },
                },
                {
                  name: "--search",
                  description:
                    "Filter namespaces whose name or description contains this string (case-insensitive)",
                  args: {
                    name: "search",
                  },
                },
              ],
            },
            {
              name: "create",
              description: "Create a new AI Search namespace [open beta]",
              args: {
                name: "name",
                description: "The name of the AI Search namespace to create",
              },
              options: [
                {
                  name: "--description",
                  description:
                    "Optional description for the namespace (max 256 chars)",
                  args: {
                    name: "description",
                  },
                },
                OPTION_JSON_4,
              ],
            },
            {
              name: "get",
              description: "Get details of an AI Search namespace [open beta]",
              args: {
                name: "name",
                description: "The name of the AI Search namespace",
              },
              options: [OPTION_JSON_4],
            },
            {
              name: "update",
              description: "Update an AI Search namespace [open beta]",
              args: {
                name: "name",
                description: "The name of the AI Search namespace to update",
              },
              options: [
                {
                  name: "--description",
                  description:
                    "Updated description for the namespace (max 256 chars)",
                  args: {
                    name: "description",
                  },
                },
                OPTION_JSON_4,
              ],
            },
            {
              name: "delete",
              description: "Delete an AI Search namespace [open beta]",
              args: {
                name: "name",
                description: "The name of the AI Search namespace to delete",
              },
              options: [OPTION_FORCE],
            },
          ],
        },
        {
          name: "jobs",
          description: "AI Search indexing jobs [open beta]",
          subcommands: [
            {
              name: "list",
              description:
                "List indexing jobs for an AI Search instance [open beta]",
              args: {
                name: "name",
                description: "The name of the AI Search instance",
              },
              options: [
                OPTION_NAMESPACE_2,
                OPTION_JSON_4,
                OPTION_PAGE_2,
                {
                  name: "--per-page",
                  description: "Number of jobs to show per page",
                  args: {
                    name: "per-page",
                  },
                },
              ],
            },
            {
              name: "create",
              description:
                "Trigger a new indexing job for an AI Search instance [open beta]",
              args: {
                name: "name",
                description: "The name of the AI Search instance",
              },
              options: [
                OPTION_NAMESPACE_2,
                {
                  name: "--description",
                  description: "Optional description for the indexing job",
                  args: {
                    name: "description",
                  },
                },
                OPTION_JSON_4,
              ],
            },
            {
              name: "get",
              description:
                "Get details of an AI Search indexing job [open beta]",
              args: [
                {
                  name: "name",
                  description: "The name of the AI Search instance",
                },
                {
                  name: "job-id",
                  description: "The ID of the indexing job",
                },
              ],
              options: [OPTION_NAMESPACE_2, OPTION_JSON_4],
            },
            {
              name: "cancel",
              description:
                "Cancel an in-progress AI Search indexing job [open beta]",
              args: [
                {
                  name: "name",
                  description: "The name of the AI Search instance",
                },
                {
                  name: "job-id",
                  description: "The ID of the indexing job to cancel",
                },
              ],
              options: [OPTION_NAMESPACE_2, OPTION_FORCE],
            },
            {
              name: "logs",
              description:
                "List log entries for an AI Search indexing job [open beta]",
              args: [
                {
                  name: "name",
                  description: "The name of the AI Search instance",
                },
                {
                  name: "job-id",
                  description: "The ID of the indexing job",
                },
              ],
              options: [
                OPTION_NAMESPACE_2,
                OPTION_JSON_4,
                OPTION_PAGE_2,
                {
                  name: "--per-page",
                  description: "Number of log entries to show per page",
                  args: {
                    name: "per-page",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "cert",
      description:
        "Manage client mTLS certificates and CA certificate chains used for secured connections [open beta]",
      subcommands: [
        {
          name: "upload",
          description: "Upload a new cert [open beta]",
          subcommands: [
            {
              name: "mtls-certificate",
              description: "Upload an mTLS certificate",
              options: [
                {
                  name: "--cert",
                  description:
                    "The path to a certificate file (.pem) containing a chain of certificates to upload",
                  args: {
                    name: "cert",
                    template: "filepaths",
                  },
                  isRequired: true,
                },
                {
                  name: "--key",
                  description:
                    "The path to a file containing the private key for your leaf certificate",
                  args: {
                    name: "key",
                    template: "filepaths",
                  },
                  isRequired: true,
                },
                OPTION_NAME_5,
              ],
            },
            {
              name: "certificate-authority",
              description: "Upload a CA certificate chain",
              options: [
                OPTION_NAME_5,
                {
                  name: "--ca-cert",
                  description:
                    "The path to a certificate file (.pem) containing a chain of CA certificates to upload",
                  args: {
                    name: "ca-cert",
                    template: "filepaths",
                  },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "list",
          description: "List uploaded mTLS certificates",
        },
        {
          name: "delete",
          description: "Delete an mTLS certificate",
          options: [
            {
              name: "--id",
              description: "The id of the mTLS certificate to delete",
              args: {
                name: "id",
              },
            },
            {
              name: "--name",
              description: "The name of the mTLS certificate record to delete",
              args: {
                name: "name",
              },
            },
          ],
        },
      ],
    },
    {
      name: "pages",
      description: "Configure Cloudflare Pages",
      subcommands: [
        {
          name: "dev",
          description: "Develop your full-stack Pages application locally",
          args: [
            {
              name: "directory",
              description: "The directory of static assets to serve",
              isOptional: true,
              template: "folders",
            },
            {
              name: "command",
              description: "The proxy command to run [deprecated]",
              isOptional: true,
            },
          ],
          options: [
            {
              name: "--local",
              description: "Run on my machine",
              hidden: true,
              deprecated: true,
            },
            OPTION_COMPATIBILITY_DATE,
            OPTION_COMPATIBILITY_FLAGS,
            {
              name: "--ip",
              description: "The IP address to listen on",
              args: {
                name: "ip",
              },
            },
            {
              name: "--port",
              description: "The port to listen on (serve from)",
              args: {
                name: "port",
              },
            },
            {
              name: "--inspector-port",
              description: "Port for devtools to connect to",
              args: {
                name: "inspector-port",
              },
            },
            {
              name: "--proxy",
              description:
                "The port to proxy (where the static assets are served)",
              args: {
                name: "proxy",
              },
              deprecated: true,
            },
            {
              name: "--script-path",
              description:
                "The location of the single Worker script if not using functions [default: _worker.js]",
              args: {
                name: "script-path",
                template: "filepaths",
              },
              deprecated: true,
            },
            {
              name: "--bundle",
              exclusiveOn: ["--no-bundle"],
              hidden: true,
            },
            {
              name: "--no-bundle",
              description: "Whether to run bundling on `_worker.js`",
              exclusiveOn: ["--bundle"],
            },
            {
              name: ["-b", "--binding"],
              description: "Bind variable/secret (KEY=VALUE)",
              args: {
                name: "binding",
              },
              isRepeatable: true,
            },
            {
              name: ["-k", "--kv"],
              description: "KV namespace to bind (--kv KV_BINDING)",
              args: {
                name: "kv",
              },
              isRepeatable: true,
            },
            {
              name: "--d1",
              description: "D1 database to bind (--d1 D1_BINDING)",
              args: {
                name: "d1",
              },
              isRepeatable: true,
            },
            {
              name: ["-o", "--do"],
              description:
                "Durable Object to bind (--do DO_BINDING=CLASS_NAME@SCRIPT_NAME)",
              args: {
                name: "do",
              },
              isRepeatable: true,
            },
            {
              name: "--r2",
              description: "R2 bucket to bind (--r2 R2_BINDING)",
              args: {
                name: "r2",
              },
              isRepeatable: true,
            },
            {
              name: "--ai",
              description: "AI to bind (--ai AI_BINDING)",
              args: {
                name: "ai",
              },
            },
            {
              name: "--version-metadata",
              description:
                "Worker Version metadata (--version-metadata VERSION_METADATA_BINDING)",
              args: {
                name: "version-metadata",
              },
            },
            {
              name: "--service",
              description: "Service to bind (--service SERVICE=SCRIPT_NAME)",
              args: {
                name: "service",
              },
              isRepeatable: true,
            },
            {
              name: "--live-reload",
              description: "Auto reload HTML pages when change is detected",
            },
            {
              name: "--local-protocol",
              description:
                "Protocol to listen to requests on, defaults to http",
              args: {
                name: "local-protocol",
                suggestions: ["http", "https"],
              },
            },
            {
              name: "--https-key-path",
              description: "Path to a custom certificate key",
              args: {
                name: "https-key-path",
                template: "filepaths",
              },
            },
            {
              name: "--https-cert-path",
              description: "Path to a custom certificate",
              args: {
                name: "https-cert-path",
                template: "filepaths",
              },
            },
            {
              name: "--persist-to",
              description:
                "Specify directory to use for local persistence (defaults to .wrangler/state)",
              args: {
                name: "persist-to",
                template: "folders",
              },
            },
            OPTION_NODE_COMPAT,
            {
              name: "--experimental-local",
              description:
                "Run on my machine using the Cloudflare Workers runtime",
              hidden: true,
              deprecated: true,
            },
            {
              name: "--log-level",
              description: "Specify logging level",
              args: {
                name: "log-level",
                suggestions: ["debug", "info", "log", "warn", "error", "none"],
              },
            },
            {
              name: "--show-interactive-dev-session",
              description:
                "Show interactive dev session (defaults to true if the terminal supports interactivity)",
            },
          ],
        },
        {
          name: "functions",
          description: "Helpers related to Pages Functions",
          subcommands: [
            {
              name: "build",
              description:
                "Compile a folder of Pages Functions into a single Worker",
              args: {
                name: "directory",
                description: "The directory of Pages Functions",
                isOptional: true,
                template: "folders",
                default: "functions",
              },
              options: [
                {
                  name: "--outfile",
                  description: "The location of the output Worker script",
                  args: {
                    name: "outfile",
                    template: "filepaths",
                  },
                  deprecated: true,
                },
                OPTION_OUTDIR,
                {
                  name: "--output-config-path",
                  description: "The location for the output config file",
                  args: {
                    name: "output-config-path",
                    template: "filepaths",
                  },
                },
                {
                  name: "--build-metadata-path",
                  description: "The location for the build metadata file",
                  args: {
                    name: "build-metadata-path",
                    template: "filepaths",
                  },
                },
                {
                  name: "--project-directory",
                  description: "The location of the Pages project",
                  args: {
                    name: "project-directory",
                    template: "folders",
                  },
                },
                {
                  name: "--output-routes-path",
                  description: "The location for the output _routes.json file",
                  args: {
                    name: "output-routes-path",
                    template: "filepaths",
                  },
                },
                {
                  name: "--minify",
                  description: "Minify the output Worker script",
                },
                {
                  name: "--sourcemap",
                  description:
                    "Generate a sourcemap for the output Worker script",
                },
                {
                  name: "--fallback-service",
                  description:
                    "The service to fallback to at the end of the `next` chain. Setting to '' will fallback to the global `fetch`",
                  args: {
                    name: "fallback-service",
                    default: "ASSETS",
                  },
                },
                {
                  name: "--watch",
                  description:
                    "Watch for changes to the functions and automatically rebuild the Worker script",
                },
                {
                  name: "--plugin",
                  description: "Build a plugin rather than a Worker script",
                },
                {
                  name: "--build-output-directory",
                  description: "The directory to output static assets to",
                  args: {
                    name: "build-output-directory",
                    template: "folders",
                  },
                },
                OPTION_NODE_COMPAT,
                OPTION_COMPATIBILITY_DATE,
                OPTION_COMPATIBILITY_FLAGS,
                {
                  name: "--bindings",
                  description:
                    "Bindings used in Functions (used to register beta product shims)",
                  args: {
                    name: "bindings",
                  },
                  hidden: true,
                  deprecated: true,
                },
                {
                  name: "--external",
                  description:
                    "A list of module imports to exclude from bundling",
                  args: {
                    name: "external",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--metafile",
                  description:
                    "Path to output build metadata from esbuild. If flag is used without a path, defaults to 'bundle-meta.json' inside the directory specified by --outdir",
                  args: {
                    name: "metafile",
                    template: "filepaths",
                    isOptional: true,
                  },
                },
              ],
            },
            {
              name: "build-env",
              description:
                "Render a list of environment variables from the config file",
              hidden: true,
              args: {
                name: "projectDir",
                description: "The location of the Pages project",
                isOptional: true,
                template: "folders",
              },
              options: [
                {
                  name: "--outfile",
                  description:
                    "The location to write the build environment file",
                  args: {
                    name: "outfile",
                    template: "filepaths",
                  },
                },
              ],
            },
            {
              name: "optimize-routes",
              description:
                "Consolidate and optimize route paths declared in _routes.json",
              hidden: true,
              options: [
                {
                  name: "--routesPath",
                  description: "The location of the _routes.json file",
                  args: {
                    name: "routesPath",
                    template: "filepaths",
                  },
                  isRequired: true,
                },
                {
                  name: "--outputRoutesPath",
                  description:
                    "The location of the optimized output routes file",
                  args: {
                    name: "outputRoutesPath",
                    template: "filepaths",
                  },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "project",
          description: "Interact with your Pages projects",
          subcommands: [
            {
              name: "list",
              description: "List your Cloudflare Pages projects",
              options: [OPTION_JSON],
            },
            {
              name: "create",
              description: "Create a new Cloudflare Pages project",
              args: {
                name: "project-name",
                description: "The name of your Pages project",
              },
              options: [
                {
                  name: "--production-branch",
                  description:
                    "The name of the production branch of your project",
                  args: {
                    name: "production-branch",
                  },
                },
                OPTION_COMPATIBILITY_FLAGS,
                OPTION_COMPATIBILITY_DATE,
                {
                  name: "--force",
                  description:
                    "Create a Cloudflare Pages project directly, bypassing the automatic delegation to Cloudflare Workers for new static projects",
                  hidden: true,
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a Cloudflare Pages project",
              args: {
                name: "project-name",
                description: "The name of your Pages project",
              },
              options: [
                {
                  name: ["-y", "--yes"],
                  description: 'Answer "yes" to confirm project deletion',
                },
              ],
            },
            {
              name: "upload",
              description: "Upload files to a project",
              hidden: true,
              args: {
                name: "directory",
                description: "The directory of static files to upload",
                template: "folders",
              },
              options: [
                {
                  name: "--output-manifest-path",
                  description: "The name of the project you want to deploy to",
                  args: {
                    name: "output-manifest-path",
                  },
                },
                {
                  name: "--skip-caching",
                  description: "Skip asset caching which speeds up builds",
                },
              ],
            },
            {
              name: "validate",
              description: "Validate a Pages project",
              hidden: true,
              args: {
                name: "directory",
                description: "The directory of static files to validate",
                template: "folders",
              },
            },
          ],
        },
        {
          name: "deployment",
          description: "Interact with the deployments of a project",
          subcommands: [
            {
              name: "list",
              description: "List deployments in your Cloudflare Pages project",
              options: [
                {
                  name: "--project-name",
                  description:
                    "The name of the project you would like to list deployments for",
                  args: {
                    name: "project-name",
                  },
                },
                {
                  name: "--environment",
                  description: "Environment type to list deployments for",
                  args: {
                    name: "environment",
                    suggestions: ["production", "preview"],
                  },
                },
                OPTION_JSON,
              ],
            },
            {
              ...SHARED_PAGES_DEPLOY,
              name: "create",
              description:
                "Deploy a directory of static assets as a Pages deployment",
            },
            {
              name: "tail",
              description:
                "Start a tailing session for a project's deployment and livestream logs from your Functions",
              args: {
                name: "deployment",
                description:
                  "(Optional) ID or URL of the deployment to tail. Specify by environment if deployment ID is unknown",
                isOptional: true,
              },
              options: [
                {
                  name: "--project-name",
                  description: "The name of the project you would like to tail",
                  args: {
                    name: "project-name",
                  },
                },
                {
                  name: "--environment",
                  description:
                    "When not providing a specific deployment ID, specifying environment will grab the latest production or preview deployment",
                  args: {
                    name: "environment",
                    suggestions: ["production", "preview"],
                    default: "production",
                  },
                },
                {
                  name: "--format",
                  description: "The format of log entries",
                  args: {
                    name: "format",
                    suggestions: ["json", "pretty"],
                  },
                },
                {
                  name: "--debug",
                  description:
                    "If a log would have been filtered out, send it through anyway alongside the filter which would have blocked it",
                  hidden: true,
                },
                {
                  name: "--status",
                  description: "Filter by invocation status",
                  args: {
                    name: "status",
                    suggestions: ["ok", "error", "canceled"],
                  },
                  isRepeatable: true,
                },
                {
                  name: "--header",
                  description: "Filter by HTTP header",
                  args: {
                    name: "header",
                  },
                },
                {
                  name: "--method",
                  description: "Filter by HTTP method",
                  args: {
                    name: "method",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--search",
                  description: "Filter by a text match in console.log messages",
                  args: {
                    name: "search",
                  },
                },
                {
                  name: "--sampling-rate",
                  description:
                    "Adds a percentage of requests to log sampling rate",
                  args: {
                    name: "sampling-rate",
                  },
                },
                {
                  name: "--ip",
                  description:
                    'Filter by the IP address the request originates from. Use "self" to filter for your own IP',
                  args: {
                    name: "ip",
                  },
                  isRepeatable: true,
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a deployment in your Cloudflare Pages project",
              args: {
                name: "deployment-id",
                description: "The ID of the deployment to delete",
              },
              options: [
                {
                  name: "--project-name",
                  description:
                    "The name of the project the deployment belongs to",
                  args: {
                    name: "project-name",
                  },
                },
                {
                  name: ["-f", "--force"],
                  description:
                    "Delete even if the deployment has an active alias",
                },
              ],
            },
          ],
        },
        SHARED_PAGES_DEPLOY,
        {
          ...SHARED_PAGES_DEPLOY,
          name: "publish",
          description:
            "Deploy a directory of static assets as a Pages deployment",
          hidden: true,
          deprecated: true,
        },
        {
          name: "secret",
          description:
            "Generate a secret that can be referenced in a Pages project",
          subcommands: [
            {
              name: "put",
              description:
                "Create or update a secret variable for a Pages project",
              args: {
                name: "key",
                description:
                  "The variable name to be accessible in the Pages project",
              },
              options: [OPTION_PROJECT_NAME],
            },
            {
              name: "bulk",
              description: "Bulk upload secrets for a Pages project",
              args: {
                name: "file",
                description:
                  'The file of key-value pairs to upload, as JSON in form {"key": value, ...} or .dev.vars file in the form KEY=VALUE',
                isOptional: true,
                template: "filepaths",
              },
              options: [OPTION_PROJECT_NAME],
            },
            {
              name: "delete",
              description: "Delete a secret variable from a Pages project",
              args: {
                name: "key",
                description:
                  "The variable name to be accessible in the Pages project",
              },
              options: [OPTION_PROJECT_NAME],
            },
            {
              name: "list",
              description: "List all secrets for a Pages project",
              options: [OPTION_PROJECT_NAME],
            },
          ],
        },
        {
          name: "download",
          description: "Download settings from your project",
          subcommands: [
            {
              name: "config",
              description:
                "Download your Pages project config as a Wrangler configuration file [experimental]",
              args: {
                name: "projectName",
                description: "The Pages project to download",
                isOptional: true,
              },
              options: [
                {
                  name: "--force",
                  description:
                    "Overwrite an existing Wrangler configuration file without prompting",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "mtls-certificate",
      description: "Manage certificates used for mTLS connections",
      subcommands: [
        {
          name: "upload",
          description: "Upload an mTLS certificate",
          options: [
            {
              name: "--cert",
              description:
                "The path to a certificate file (.pem) containing a chain of certificates to upload",
              args: {
                name: "cert",
                template: "filepaths",
              },
              isRequired: true,
            },
            {
              name: "--key",
              description:
                "The path to a file containing the private key for your leaf certificate",
              args: {
                name: "key",
                template: "filepaths",
              },
              isRequired: true,
            },
            OPTION_NAME_5,
          ],
        },
        {
          name: "list",
          description: "List uploaded mTLS certificates",
        },
        {
          name: "delete",
          description: "Delete an mTLS certificate",
          options: [
            {
              name: "--id",
              description: "The id of the mTLS certificate to delete",
              args: {
                name: "id",
              },
            },
            {
              name: "--name",
              description: "The name of the mTLS certificate record to delete",
              args: {
                name: "name",
              },
            },
          ],
        },
      ],
    },
    {
      name: "cloudchamber",
      description: "Manage Cloudchamber",
      hidden: true,
      subcommands: [
        {
          name: "list",
          description: "List and view status of deployments [alpha]",
          args: {
            name: "deploymentIdPrefix",
            description:
              "Optional deploymentId to filter deployments. This means that 'list' will only showcase deployments that contain this ID prefix",
            isOptional: true,
          },
          options: [
            {
              name: "--location",
              description: "Filter deployments by location",
              args: {
                name: "location",
              },
            },
            {
              name: "--image",
              description: "Filter deployments by image",
              args: {
                name: "image",
              },
            },
            {
              name: "--state",
              description: "Filter deployments by deployment state",
              args: {
                name: "state",
              },
            },
            {
              name: "--ipv4",
              description: "Filter deployments by ipv4 address",
              args: {
                name: "ipv4",
              },
            },
            {
              name: "--label",
              description: "Filter deployments by labels",
              args: {
                name: "label",
              },
              isRepeatable: true,
            },
          ],
        },
        {
          name: "create",
          description: "Create a new deployment [alpha]",
          options: [
            {
              name: "--image",
              description: "Image to use for your deployment",
              args: {
                name: "image",
              },
            },
            {
              name: "--location",
              description:
                "Location on Cloudflare's network where your deployment will run",
              args: {
                name: "location",
              },
            },
            {
              name: "--var",
              description: "Container environment variables",
              args: {
                name: "var",
              },
              isRepeatable: true,
            },
            {
              name: "--label",
              description: "Deployment labels",
              args: {
                name: "label",
              },
              isRepeatable: true,
            },
            {
              name: "--all-ssh-keys",
              description:
                "To add all SSH keys configured on your account to be added to this deployment, set this option to true",
            },
            {
              name: "--ssh-key-id",
              description: "ID of the SSH key to add to the deployment",
              args: {
                name: "ssh-key-id",
              },
              isRepeatable: true,
            },
            {
              name: "--instance-type",
              description: "Instance type to allocate to this deployment",
              args: {
                name: "instance-type",
                suggestions: [
                  "lite",
                  "basic",
                  "standard-1",
                  "standard-2",
                  "standard-3",
                  "standard-4",
                ],
              },
            },
            {
              name: "--vcpu",
              description: "Number of vCPUs to allocate to this deployment",
              args: {
                name: "vcpu",
              },
            },
            {
              name: "--memory",
              description:
                "Amount of memory (GiB, MiB...) to allocate to this deployment. Ex: 4GiB",
              args: {
                name: "memory",
              },
            },
            {
              name: "--ipv4",
              description: "Include an IPv4 in the deployment",
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete an existing deployment that is running in the Cloudflare edge [alpha]",
          args: {
            name: "deploymentId",
            description: "Deployment you want to delete",
            isOptional: true,
          },
        },
        {
          name: "modify",
          description: "Modify an existing deployment [alpha]",
          args: {
            name: "deploymentId",
            description: "The deployment you want to modify",
            isOptional: true,
          },
          options: [
            {
              name: "--var",
              description: "Container environment variables",
              args: {
                name: "var",
              },
              isRepeatable: true,
            },
            {
              name: "--label",
              description: "Deployment labels",
              args: {
                name: "label",
              },
              isRepeatable: true,
            },
            {
              name: "--ssh-public-key-id",
              description:
                "Public SSH key IDs to include in this container. You can add one to your account with `wrangler cloudchamber ssh create",
              args: {
                name: "ssh-public-key-id",
              },
              isRepeatable: true,
            },
            {
              name: "--image",
              description:
                "The new image that the deployment will have from now on",
              args: {
                name: "image",
              },
            },
            {
              name: "--location",
              description:
                "The new location that the deployment will have from now on",
              args: {
                name: "location",
              },
            },
            {
              name: "--instance-type",
              description:
                "The new instance type that the deployment will have from now on",
              args: {
                name: "instance-type",
                suggestions: ["dev", "basic", "standard"],
              },
            },
            {
              name: "--vcpu",
              description:
                "The new vcpu that the deployment will have from now on",
              args: {
                name: "vcpu",
              },
            },
            {
              name: "--memory",
              description:
                "The new memory that the deployment will have from now on",
              args: {
                name: "memory",
              },
            },
          ],
        },
        {
          name: "apply",
          description:
            "Apply the changes in the container applications to deploy",
          hidden: true,
          deprecated: true,
          options: [
            {
              name: "--skip-defaults",
              description: "Skips recommended defaults added by apply",
            },
          ],
        },
        {
          name: "curl",
          description:
            "Send a request to an arbitrary Cloudchamber endpoint [alpha]",
          args: {
            name: "path",
            template: "filepaths",
            default: "/",
          },
          options: [
            {
              name: ["-H", "--header"],
              description: "Add headers in the form of --header <name>:<value>",
              args: {
                name: "header",
              },
              isRepeatable: true,
            },
            {
              name: ["-d", "--data"],
              description: "Add a JSON body to the request",
              args: {
                name: "data",
              },
            },
            {
              name: ["-D", "--data-deprecated"],
              args: {
                name: "data-deprecated",
              },
              hidden: true,
            },
            {
              name: ["-X", "--method"],
              args: {
                name: "method",
                default: "GET",
              },
            },
            {
              name: ["-s", "--silent"],
              description: "Only output response",
            },
            {
              name: ["-v", "--verbose"],
              description: "Print everything, like request id, or headers",
            },
            {
              name: ["--use-stdin", "--stdin"],
              description: "Equivalent of using --data-binary @- in curl",
            },
          ],
        },
        {
          name: "build",
          description: "Build a container image [alpha]",
          args: {
            name: "PATH",
            description:
              "Path for the directory containing the Dockerfile to build",
            template: "folders",
          },
          options: [
            {
              name: ["-t", "--tag"],
              description: 'Name and optionally a tag (format: "name:tag")',
              args: {
                name: "tag",
              },
              isRequired: true,
            },
            OPTION_PATH_TO_DOCKER,
            {
              name: ["-p", "--push"],
              description:
                "Push the built image to Cloudflare's managed registry",
            },
            {
              name: "--platform",
              description:
                "Platform to build for. Defaults to the architecture support by Workers (linux/amd64)",
              args: {
                name: "platform",
                default: "linux/amd64",
              },
              hidden: true,
              deprecated: true,
            },
          ],
        },
        {
          name: "push",
          description:
            "Push a local image to the Cloudflare managed registry [alpha]",
          args: {
            name: "TAG",
            description: "The tag of the local image to push",
          },
          options: [OPTION_PATH_TO_DOCKER],
        },
        {
          name: "ssh",
          description: "Manage the ssh keys of your account [alpha]",
          subcommands: [
            {
              name: "list",
              description: "List the ssh keys added to your account [alpha]",
            },
            {
              name: "create",
              description: "Create an ssh key [alpha]",
              options: [
                {
                  name: "--name",
                  description:
                    "The alias to your ssh key, you can put a recognisable name for you here",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--public-key",
                  description:
                    "An SSH public key, you can specify either a path or the ssh key directly here",
                  args: {
                    name: "public-key",
                    template: "filepaths",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "registries",
          description: "Configure registries via Cloudchamber [alpha]",
          subcommands: [
            {
              name: "configure",
              description:
                "Configure Cloudchamber to pull from specific registries [alpha]",
              options: [
                {
                  name: "--domain",
                  description:
                    "Domain of your registry. Don't include the proto part of the URL, like 'http://'",
                  args: {
                    name: "domain",
                  },
                },
                {
                  name: "--public",
                  description:
                    "If the registry is public and you don't want credentials configured, set this to true",
                },
              ],
            },
            {
              name: "credentials",
              description:
                "Get a temporary password for a specific domain [alpha]",
              args: {
                name: "domain",
              },
              options: [
                {
                  name: "--expiration-minutes",
                  args: {
                    name: "expiration-minutes",
                    default: "15",
                  },
                },
                {
                  name: "--push",
                  description:
                    "If you want these credentials to be able to push",
                },
                {
                  name: "--pull",
                  description:
                    "If you want these credentials to be able to pull",
                },
              ],
            },
            {
              name: "remove",
              description: "Remove the registry at the given domain [alpha]",
              args: {
                name: "domain",
              },
            },
            {
              name: "list",
              description:
                "List registries configured for this account [alpha]",
            },
          ],
        },
        {
          name: "images",
          description:
            "Manage images in the Cloudflare managed registry [alpha]",
          subcommands: [
            {
              name: "list",
              description:
                "List images in the Cloudflare managed registry [alpha]",
              options: [
                {
                  name: "--filter",
                  description: "Regex to filter results",
                  args: {
                    name: "filter",
                  },
                },
                OPTION_JSON_5,
              ],
            },
            {
              name: "delete",
              description:
                "Remove an image from the Cloudflare managed registry [alpha]",
              args: {
                name: "image",
                description: "Image and tag to delete, of the form IMAGE:TAG",
              },
            },
          ],
        },
      ],
    },
    {
      name: "containers",
      description: "Manage Containers",
      subcommands: [
        {
          name: "list",
          description: "List containers",
          options: [
            {
              name: "--per-page",
              description: "Number of containers per page",
              args: {
                name: "per-page",
                default: "25",
              },
            },
            OPTION_JSON,
          ],
        },
        {
          name: "info",
          description: "Get information about a specific container",
          args: {
            name: "ID",
            description: "ID of the container to view",
          },
          options: [OPTION_JSON],
        },
        {
          name: "instances",
          description: "List container instances for an application",
          args: {
            name: "ID",
            description: "ID of the application to list instances for",
          },
          options: [
            {
              name: "--per-page",
              description: "Number of instances per page",
              args: {
                name: "per-page",
              },
            },
            {
              name: "--search",
              description:
                "Find instances matching an exact instance ID or name",
              args: {
                name: "search",
              },
              exclusiveOn: ["--page-token"],
            },
            {
              name: "--page-token",
              description:
                "Continuation token for explicitly paginated JSON output",
              args: {
                name: "page-token",
              },
              exclusiveOn: ["--search"],
            },
            OPTION_JSON,
          ],
        },
        {
          name: "delete",
          description: "Delete a container",
          args: {
            name: "ID",
            description: "ID of the container to delete",
          },
        },
        {
          name: "ssh",
          description: "SSH into a container",
          args: {
            name: "ID",
            description: "ID of the container instance",
          },
          options: [
            {
              name: "--cipher",
              description:
                "Sets `ssh -c`: Select the cipher specification for encrypting the session",
              args: {
                name: "cipher",
              },
              hidden: true,
              deprecated: true,
            },
            {
              name: "--log-file",
              description:
                "Sets `ssh -E`: Append debug logs to log_file instead of standard error",
              args: {
                name: "log-file",
                template: "filepaths",
              },
              hidden: true,
              deprecated: true,
            },
            {
              name: "--escape-char",
              description:
                "Sets `ssh -e`: Set the escape character for sessions with a pty (default: '~')",
              args: {
                name: "escape-char",
              },
              hidden: true,
              deprecated: true,
            },
            {
              name: ["-F", "--config-file"],
              description:
                "Sets `ssh -F`: Specify an alternative per-user ssh configuration file",
              args: {
                name: "config-file",
                template: "filepaths",
              },
              hidden: true,
              deprecated: true,
            },
            {
              name: "--pkcs11",
              description:
                "Sets `ssh -I`: Specify the PKCS#11 shared library ssh should use to communicate with a PKCS#11 token providing keys for user authentication",
              args: {
                name: "pkcs11",
              },
              hidden: true,
              deprecated: true,
            },
            {
              name: ["-i", "--identity-file"],
              description:
                "Sets `ssh -i`: Select a file from which the identity (private key) for public key authentication is read",
              args: {
                name: "identity-file",
                template: "filepaths",
              },
              hidden: true,
              deprecated: true,
            },
            {
              name: "--mac-spec",
              description:
                "Sets `ssh -m`: A comma-separated list of MAC (message authentication code) algorithms, specified in order of preference",
              args: {
                name: "mac-spec",
              },
              hidden: true,
              deprecated: true,
            },
            {
              name: ["-o", "--option"],
              description:
                "Sets `ssh -o`: Set options in the format used in the ssh configuration file. May be repeated",
              args: {
                name: "option",
              },
              hidden: true,
              deprecated: true,
            },
            {
              name: "--tag",
              description:
                "Sets `ssh -P`: Specify a tag name that may be used to select configuration in ssh_config",
              args: {
                name: "tag",
              },
              hidden: true,
              deprecated: true,
            },
            {
              name: "--stdio",
              description: "Proxy SSH traffic over stdin/stdout",
            },
            {
              name: ["-t", "--tty"],
              description:
                "Force pseudo-terminal allocation, e.g. for interactive commands like `-- bash`",
            },
          ],
        },
        {
          name: "build",
          description: "Build a container image",
          args: {
            name: "PATH",
            description:
              "Path for the directory containing the Dockerfile to build",
            template: "folders",
          },
          options: [
            {
              name: ["-t", "--tag"],
              description: 'Name and optionally a tag (format: "name:tag")',
              args: {
                name: "tag",
              },
              isRequired: true,
            },
            OPTION_PATH_TO_DOCKER,
            {
              name: ["-p", "--push"],
              description:
                "Push the built image to Cloudflare's managed registry",
            },
            {
              name: "--platform",
              description:
                "Platform to build for. Defaults to the architecture support by Workers (linux/amd64)",
              args: {
                name: "platform",
                default: "linux/amd64",
              },
              hidden: true,
              deprecated: true,
            },
          ],
        },
        {
          name: "push",
          description: "Push a local image to the Cloudflare managed registry",
          args: {
            name: "TAG",
            description: "The tag of the local image to push",
          },
          options: [OPTION_PATH_TO_DOCKER],
        },
        {
          name: "registries",
          description: "Configure and manage non-Cloudflare registries",
          subcommands: [
            {
              name: "configure",
              description:
                "Configure credentials for a non-Cloudflare container registry",
              args: {
                name: "DOMAIN",
                description: "Domain to configure for the registry",
              },
              options: [
                {
                  name: "--public-credential",
                  args: {
                    name: "public-credential",
                  },
                  exclusiveOn: [
                    "--aws-access-key-id",
                    "--dockerhub-username",
                    "--gar-email",
                  ],
                  hidden: true,
                  deprecated: true,
                },
                {
                  name: "--aws-access-key-id",
                  description:
                    "When configuring Amazon ECR, `AWS_ACCESS_KEY_ID`",
                  args: {
                    name: "aws-access-key-id",
                  },
                  exclusiveOn: ["--public-credential"],
                },
                {
                  name: "--dockerhub-username",
                  description:
                    "When configuring DockerHub, the DockerHub username",
                  args: {
                    name: "dockerhub-username",
                  },
                  exclusiveOn: ["--public-credential"],
                },
                {
                  name: "--gar-email",
                  description:
                    "When configuring Google Artifact Registry, the Google service account email. Must match the `client_email` in the service account key",
                  args: {
                    name: "gar-email",
                  },
                  exclusiveOn: ["--public-credential"],
                },
                {
                  name: "--secret-store-id",
                  description:
                    "The ID of the secret store to use to store the registry credentials",
                  args: {
                    name: "secret-store-id",
                  },
                  exclusiveOn: ["--disable-secrets-store"],
                },
                {
                  name: "--secret-name",
                  description:
                    "The name for the secret the private registry credentials should be stored under",
                  args: {
                    name: "secret-name",
                  },
                  exclusiveOn: ["--disable-secrets-store"],
                },
                {
                  name: "--disable-secrets-store",
                  description:
                    "Whether to disable secrets store integration. This should be set iff the compliance region is FedRAMP High",
                  exclusiveOn: ["--secret-store-id", "--secret-name"],
                },
                {
                  name: ["-y", "--skip-confirmation"],
                  description: "Skip confirmation prompts",
                },
              ],
            },
            {
              name: "list",
              description: "List all configured container registries",
              options: [OPTION_JSON_5],
            },
            {
              name: "delete",
              description: "Delete a configured container registry",
              args: {
                name: "DOMAIN",
                description: "Domain of the registry to delete",
              },
              options: [
                {
                  name: ["-y", "--skip-confirmation"],
                  description:
                    "Skip confirmation prompts for registry and secret deletion",
                },
              ],
            },
            {
              name: "credentials",
              description: "Get a temporary password for a specific domain",
              args: {
                name: "DOMAIN",
                description: "Domain to get credentials for",
                isOptional: true,
              },
              options: [
                {
                  name: "--expiration-minutes",
                  description:
                    "How long the credentials should be valid for (in minutes)",
                  args: {
                    name: "expiration-minutes",
                    default: "15",
                  },
                },
                {
                  name: "--push",
                  description:
                    "If you want these credentials to be able to push",
                },
                {
                  name: "--pull",
                  description:
                    "If you want these credentials to be able to pull",
                },
                {
                  name: "--library-push",
                  description:
                    "If you want these credentials to be able to push to the public library namespace",
                  hidden: true,
                },
                OPTION_JSON_5,
              ],
            },
          ],
        },
        {
          name: "images",
          description: "Manage images in the Cloudflare managed registry",
          subcommands: [
            {
              name: "list",
              description: "List images in the Cloudflare managed registry",
              options: [
                {
                  name: "--filter",
                  description: "Regex to filter results",
                  args: {
                    name: "filter",
                  },
                },
                OPTION_JSON_5,
              ],
            },
            {
              name: "delete",
              description:
                "Remove an image from the Cloudflare managed registry",
              args: {
                name: "image",
                description: "Image and tag to delete, of the form IMAGE:TAG",
              },
              options: [
                {
                  name: ["-y", "--skip-confirmation"],
                  description: "Skip confirmation prompt for deleting an image",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "dispatch-namespace",
      description: "Manage dispatch namespaces",
      subcommands: [
        {
          name: "list",
          description: "List all dispatch namespaces",
        },
        {
          name: "get",
          description: "Get information about a dispatch namespace",
          args: {
            name: "name",
            description: "Name of the dispatch namespace",
          },
        },
        {
          name: "create",
          description: "Create a dispatch namespace",
          args: {
            name: "name",
            description: "Name of the dispatch namespace",
          },
        },
        {
          name: "delete",
          description: "Delete a dispatch namespace",
          args: {
            name: "name",
            description: "Name of the dispatch namespace",
          },
        },
        {
          name: "rename",
          description: "Rename a dispatch namespace",
          args: [
            {
              name: "oldName",
              description: "Name of the dispatch namespace",
            },
            {
              name: "newName",
              description: "New name of the dispatch namespace",
            },
          ],
        },
      ],
    },
    {
      name: "ai",
      description: "Manage AI models",
      subcommands: [
        {
          name: "models",
          description: "Manage AI models",
          subcommands: [
            {
              name: "list",
              description: "List catalog models",
              options: [
                OPTION_JSON,
                {
                  name: "--search",
                  description: "Search models by name or description",
                  args: {
                    name: "search",
                  },
                },
                {
                  name: "--task",
                  description: "Filter by task name",
                  args: {
                    name: "task",
                  },
                },
                {
                  name: "--author",
                  description: "Filter by author",
                  args: {
                    name: "author",
                  },
                },
                {
                  name: "--source",
                  description: "Filter by source ID",
                  args: {
                    name: "source",
                  },
                },
                {
                  name: "--hide-experimental",
                  description: "Hide experimental models",
                },
              ],
            },
            {
              name: "schema",
              description: "Get model schema",
              args: {
                name: "model",
                description: "The model to fetch a schema for",
              },
            },
          ],
        },
        {
          name: "finetune",
          description: "Interact with finetune files",
          subcommands: [
            {
              name: "list",
              description: "List your finetune files",
              options: [OPTION_JSON],
            },
            {
              name: "create",
              description: "Create finetune and upload assets",
              args: [
                {
                  name: "model_name",
                  description: "The catalog model name",
                },
                {
                  name: "finetune_name",
                  description: "The finetune name",
                },
                {
                  name: "folder_path",
                  description: "The folder path containing the finetune assets",
                  template: "folders",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "browser",
      description: "Manage Browser Run sessions [open beta]",
      subcommands: [
        {
          name: "create",
          description: "Create a new Browser Run session [open beta]",
          options: [
            {
              name: "--lab",
              description:
                "Enable lab browser session with experimental Chrome features (e.g., WebMCP)",
            },
            {
              name: ["-k", "--keepAlive"],
              description: "Keep-alive duration in seconds (60-600)",
              args: {
                name: "keepAlive",
              },
            },
            {
              name: "--json",
              description: "Return session info as JSON",
            },
            {
              name: "--open",
              description:
                "Open DevTools in browser (default: true in interactive mode)",
            },
          ],
        },
        {
          name: "close",
          description: "Close a Browser Run session [open beta]",
          args: {
            name: "sessionId",
            description: "The session ID to close",
          },
          options: [
            {
              name: "--json",
              description: "Return result as JSON",
            },
          ],
        },
        {
          name: "list",
          description: "List active Browser Run sessions [open beta]",
          options: [OPTION_JSON],
        },
        {
          name: "view",
          description: "View a live browser session [open beta]",
          args: {
            name: "sessionId",
            description:
              "The session ID to inspect (optional if only one session exists)",
            isOptional: true,
          },
          options: [
            {
              name: "--target",
              description:
                "Target selector (matches id exactly, or url/title by substring)",
              args: {
                name: "target",
              },
            },
            {
              name: "--json",
              description: "Return live browser session URL(s) as JSON",
            },
            {
              name: "--open",
              description:
                "Open in browser (default: true in interactive mode)",
            },
          ],
        },
      ],
    },
    {
      name: "agent-memory",
      description: "Manage Agent Memory namespaces [private beta]",
      subcommands: [
        {
          name: "namespace",
          description: "Manage Agent Memory namespaces [private beta]",
          subcommands: [
            {
              name: "create",
              description: "Create a new Agent Memory namespace [private beta]",
              args: {
                name: "namespace",
                description:
                  "The name for the new namespace (max 32 characters, alphanumeric with embedded hyphens)",
              },
              options: [OPTION_JSON],
            },
            {
              name: "list",
              description:
                "List all Agent Memory namespaces associated with your account [private beta]",
              options: [OPTION_JSON],
            },
            {
              name: "get",
              description:
                "Get details for a given Agent Memory namespace [private beta]",
              args: {
                name: "namespace_name",
                description: "The name of the namespace to retrieve",
              },
              options: [OPTION_JSON],
            },
            {
              name: "delete",
              description:
                "Delete a given Agent Memory namespace [private beta]",
              args: {
                name: "namespace_name",
                description: "The name of the namespace to delete",
              },
              options: [OPTION_FORCE],
            },
          ],
        },
      ],
    },
    {
      name: "secrets-store",
      description: "Manage the Secrets Store [open beta]",
      subcommands: [
        {
          name: "store",
          description: "Manage Stores within the Secrets Store [open beta]",
          subcommands: [
            {
              name: "create",
              description: "Create a store within an account [open beta]",
              args: {
                name: "name",
                description: "Name of the store",
              },
              options: [OPTION_REMOTE_3],
            },
            {
              name: "delete",
              description: "Delete a store within an account [open beta]",
              args: {
                name: "store-id",
                description: "ID of the store",
              },
              options: [OPTION_REMOTE_3],
            },
            {
              name: "list",
              description: "List stores within an account [open beta]",
              options: [
                {
                  name: "--page",
                  description:
                    'Page number of stores listing results, can configure page size using "per-page"',
                  args: {
                    name: "page",
                    default: "1",
                  },
                },
                {
                  name: "--per-page",
                  description: "Number of stores to show per page",
                  args: {
                    name: "per-page",
                    default: "10",
                  },
                },
                OPTION_REMOTE_3,
              ],
            },
          ],
        },
        {
          name: "secret",
          description: "Manage Secrets within the Secrets Store [open beta]",
          subcommands: [
            {
              name: "create",
              description: "Create a secret within a store [open beta]",
              args: {
                name: "store-id",
                description: "ID of the store in which the secret resides",
              },
              options: [
                {
                  name: "--name",
                  description: "Name of the secret",
                  args: {
                    name: "name",
                  },
                  isRequired: true,
                },
                {
                  name: "--value",
                  description:
                    "Value of the secret (Note: Only for testing. Not secure as this will leave secret value in plain-text in terminal history, exclude this flag and use automatic prompt instead)",
                  args: {
                    name: "value",
                  },
                },
                {
                  name: "--scopes",
                  description:
                    'Scopes for the secret (comma-separated list of scopes eg:"workers")',
                  args: {
                    name: "scopes",
                  },
                  isRequired: true,
                },
                {
                  name: "--comment",
                  description: "Comment for the secret",
                  args: {
                    name: "comment",
                  },
                },
                OPTION_REMOTE_3,
                OPTION_PERSIST_TO,
              ],
            },
            {
              name: "list",
              description: "List secrets within a store [open beta]",
              args: {
                name: "store-id",
                description: "ID of the store in which to list secrets",
              },
              options: [
                {
                  name: "--page",
                  description:
                    'Page number of secrets listing results, can configure page size using "per-page"',
                  args: {
                    name: "page",
                    default: "1",
                  },
                },
                {
                  name: "--per-page",
                  description: "Number of secrets to show per page",
                  args: {
                    name: "per-page",
                    default: "10",
                  },
                },
                OPTION_REMOTE_3,
                OPTION_PERSIST_TO,
              ],
            },
            {
              name: "get",
              description: "Get a secret within a store [open beta]",
              args: {
                name: "store-id",
                description: "ID of the store in which the secret resides",
              },
              options: [
                {
                  name: "--secret-id",
                  description: "ID of the secret to retrieve",
                  args: {
                    name: "secret-id",
                  },
                  isRequired: true,
                },
                OPTION_REMOTE_3,
                OPTION_PERSIST_TO,
              ],
            },
            {
              name: "update",
              description: "Update a secret within a store [open beta]",
              args: {
                name: "store-id",
                description: "ID of the store in which the secret resides",
              },
              options: [
                {
                  name: "--secret-id",
                  description: "ID of the secret to update",
                  args: {
                    name: "secret-id",
                  },
                  isRequired: true,
                },
                {
                  name: "--value",
                  description:
                    "Updated value of the secret (Note: Only for testing. Not secure as this will leave secret value in plain-text in terminal history, exclude this flag and use automatic prompt instead)",
                  args: {
                    name: "value",
                  },
                },
                {
                  name: "--scopes",
                  description:
                    'Updated scopes for the secret (comma-separated list of scopes eg:"workers")',
                  args: {
                    name: "scopes",
                  },
                },
                {
                  name: "--comment",
                  description: "Updated comment for the secret",
                  args: {
                    name: "comment",
                  },
                },
                OPTION_REMOTE_3,
                OPTION_PERSIST_TO,
              ],
            },
            {
              name: "delete",
              description: "Delete a secret within a store [open beta]",
              args: {
                name: "store-id",
                description: "ID of the store in which the secret resides",
              },
              options: [
                {
                  name: "--secret-id",
                  description: "ID of the secret to delete",
                  args: {
                    name: "secret-id",
                  },
                  isRequired: true,
                },
                OPTION_REMOTE_3,
                OPTION_PERSIST_TO,
              ],
            },
            {
              name: "duplicate",
              description: "Duplicate a secret within a store [open beta]",
              args: {
                name: "store-id",
                description: "ID of the store in which the secret resides",
              },
              options: [
                {
                  name: "--secret-id",
                  description:
                    "ID of the secret to duplicate the secret value of",
                  args: {
                    name: "secret-id",
                  },
                  isRequired: true,
                },
                {
                  name: "--name",
                  description: "Name of the new secret",
                  args: {
                    name: "name",
                  },
                  isRequired: true,
                },
                {
                  name: "--scopes",
                  description: "Scopes for the new secret",
                  args: {
                    name: "scopes",
                  },
                  isRequired: true,
                },
                {
                  name: "--comment",
                  description: "Comment for the new secret",
                  args: {
                    name: "comment",
                  },
                },
                OPTION_REMOTE_3,
                OPTION_PERSIST_TO,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "workflows",
      description: "Manage Workflows",
      subcommands: [
        {
          name: "list",
          description: "List Workflows associated to account",
          options: [
            OPTION_LOCAL_3,
            OPTION_PORT,
            OPTION_JSON_6,
            {
              name: "--page",
              description:
                'Show a sepecific page from the listing, can configure page size using "per-page"',
              args: {
                name: "page",
                default: "1",
              },
            },
            {
              name: "--per-page",
              description:
                "Configure the maximum number of workflows to show per page",
              args: {
                name: "per-page",
              },
            },
          ],
        },
        {
          name: "describe",
          description: "Describe Workflow resource",
          args: {
            name: "name",
            description: "Name of the workflow",
          },
          options: [OPTION_LOCAL_3, OPTION_PORT, OPTION_JSON_6],
        },
        {
          name: "delete",
          description:
            "Delete workflow - when deleting a workflow, it will also delete it's own instances",
          args: {
            name: "name",
            description: "Name of the workflow",
          },
          options: [OPTION_LOCAL_3, OPTION_PORT, OPTION_JSON_6],
        },
        {
          name: "trigger",
          description:
            "Trigger a workflow, creating a new instance. Can optionally take a JSON string to pass a parameter into the workflow instance",
          args: [
            {
              name: "name",
              description: "Name of the workflow",
            },
            {
              name: "params",
              description:
                "Params for the workflow instance, encoded as a JSON string",
              isOptional: true,
            },
          ],
          options: [
            OPTION_LOCAL_3,
            OPTION_PORT,
            OPTION_JSON_6,
            {
              name: "--id",
              description:
                "Custom instance ID, if not provided it will default to a random UUIDv4",
              args: {
                name: "id",
              },
            },
          ],
        },
        {
          name: "instances",
          description: "Manage Workflow instances",
          subcommands: [
            {
              name: "list",
              description:
                "Instance related commands (list, describe, terminate, pause, resume)",
              args: {
                name: "name",
                description: "Name of the workflow",
              },
              options: [
                OPTION_LOCAL_3,
                OPTION_PORT,
                OPTION_JSON_6,
                {
                  name: "--reverse",
                  description: "Reverse order of the instances table",
                },
                {
                  name: "--status",
                  description:
                    "Filters list by instance status (can be one of: queued, running, paused, errored, terminated, complete)",
                  args: {
                    name: "status",
                  },
                },
                {
                  name: "--date-start",
                  description:
                    "Only list instances created at or after this date (ISO 8601, e.g. 2026-01-01 or 2026-01-01T13:00:00Z)",
                  args: {
                    name: "date-start",
                  },
                },
                {
                  name: "--date-end",
                  description:
                    "Only list instances created at or before this date (ISO 8601). A date without a time covers the whole UTC day, so 2026-01-31 includes everything up to 2026-01-31T23:59:59.999Z",
                  args: {
                    name: "date-end",
                  },
                },
                {
                  name: "--page",
                  description:
                    'Show a sepecific page from the listing, can configure page size using "per-page"',
                  args: {
                    name: "page",
                    default: "1",
                  },
                },
                {
                  name: "--per-page",
                  description:
                    "Configure the maximum number of instances to show per page",
                  args: {
                    name: "per-page",
                  },
                },
              ],
            },
            {
              name: "describe",
              description:
                "Describe a workflow instance - see its logs, retries and errors",
              args: [
                {
                  name: "name",
                  description: "Name of the workflow",
                },
                {
                  name: "id",
                  description:
                    "ID of the instance - instead of an UUID you can type 'latest' to get the latest instance and describe it",
                  isOptional: true,
                  default: "latest",
                },
              ],
              options: [
                OPTION_LOCAL_3,
                OPTION_PORT,
                OPTION_JSON_6,
                {
                  name: "--step-output",
                  description:
                    "Don't output the step output since it might clutter the terminal",
                },
                {
                  name: "--truncate-output-limit",
                  description: "Truncate step output after x characters",
                  args: {
                    name: "truncate-output-limit",
                    default: "5000",
                  },
                },
              ],
            },
            {
              name: "send-event",
              description: "Send an event to a workflow instance",
              args: [
                {
                  name: "name",
                  description: "Name of the workflow",
                },
                {
                  name: "id",
                  description:
                    "ID of the instance - instead of an UUID you can type 'latest' to get the latest instance and send an event to it",
                },
              ],
              options: [
                OPTION_LOCAL_3,
                OPTION_PORT,
                OPTION_JSON_6,
                {
                  name: "--type",
                  description: "Type of the workflow event",
                  args: {
                    name: "type",
                  },
                  isRequired: true,
                },
                {
                  name: "--payload",
                  description:
                    'JSON string for the workflow event (e.g., \'{"key": "value"}\')',
                  args: {
                    name: "payload",
                    default: "{}",
                  },
                },
              ],
            },
            {
              name: "terminate",
              description: "Terminate a workflow instance",
              args: [
                {
                  name: "name",
                  description: "Name of the workflow",
                },
                {
                  name: "id",
                  description:
                    "ID of the instance - instead of an UUID you can type 'latest' to get the latest instance and describe it",
                },
              ],
              options: [
                OPTION_LOCAL_3,
                OPTION_PORT,
                OPTION_JSON_6,
                {
                  name: "--rollback",
                  description:
                    "Run registered rollback handlers before terminating",
                },
              ],
            },
            {
              name: "restart",
              description: "Restart a workflow instance",
              args: [
                {
                  name: "name",
                  description: "Name of the workflow",
                },
                {
                  name: "id",
                  description:
                    "ID of the instance - instead of an UUID you can type 'latest' to get the latest instance and describe it",
                },
              ],
              options: [
                OPTION_LOCAL_3,
                OPTION_PORT,
                OPTION_JSON_6,
                {
                  name: "--from-step-name",
                  description: "Name of the step to restart from",
                  args: {
                    name: "from-step-name",
                  },
                },
                {
                  name: "--from-step-count",
                  description:
                    "1-based occurrence of the step name/type to restart from (defaults to 1)",
                  args: {
                    name: "from-step-count",
                  },
                },
                {
                  name: "--from-step-type",
                  description:
                    "Step type to restart from, used when the same name is shared across step types (defaults to do)",
                  args: {
                    name: "from-step-type",
                    suggestions: ["do", "sleep", "waitForEvent"],
                  },
                },
              ],
            },
            {
              name: "terminate-all",
              description: "Terminate all workflow instances",
              hidden: true,
              args: {
                name: "name",
                description: "Name of the workflow",
              },
              options: [
                OPTION_JSON_6,
                {
                  name: "--status",
                  description: "Filter instances to be terminated by status",
                  args: {
                    name: "status",
                  },
                },
              ],
            },
            {
              name: "pause",
              description: "Pause a workflow instance",
              args: [
                {
                  name: "name",
                  description: "Name of the workflow",
                },
                {
                  name: "id",
                  description:
                    "ID of the instance - instead of an UUID you can type 'latest' to get the latest instance and pause it",
                },
              ],
              options: [OPTION_LOCAL_3, OPTION_PORT, OPTION_JSON_6],
            },
            {
              name: "resume",
              description: "Resume a workflow instance",
              args: [
                {
                  name: "name",
                  description: "Name of the workflow",
                },
                {
                  name: "id",
                  description:
                    "ID of the instance - instead of an UUID you can type 'latest' to get the latest instance and resume it",
                },
              ],
              options: [OPTION_LOCAL_3, OPTION_PORT, OPTION_JSON_6],
            },
            {
              name: "delete",
              description: "Delete workflow instances",
              args: [
                {
                  name: "name",
                  description: "Name of the workflow",
                },
                {
                  name: "id",
                  description:
                    "IDs of the instances - you can type 'latest' to get the latest instance and delete it",
                  isOptional: true,
                  isVariadic: true,
                },
              ],
              options: [
                OPTION_LOCAL_3,
                OPTION_PORT,
                OPTION_JSON_6,
                {
                  name: "--filename",
                  description:
                    "Path to a JSON file containing an array of instance IDs",
                  args: {
                    name: "filename",
                    template: "filepaths",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      ...SHARED_BASIN_PIPELINES,
      name: "pipelines",
      description: "Manage Cloudflare Pipelines",
      hidden: true,
    },
    {
      name: "k2",
      description: "Manage K2 streams [open beta]",
      subcommands: [
        {
          name: "streams",
          description: "Create, inspect, and delete K2 streams [open beta]",
          subcommands: [
            {
              name: "create",
              description: "Create a K2 stream [open beta]",
              args: {
                name: "stream",
                description: "The name of the stream to create",
              },
              options: [
                {
                  name: "--retention-seconds",
                  description:
                    "Record retention in seconds (3600–2592000; defaults to the API default)",
                  args: {
                    name: "retention-seconds",
                  },
                },
                {
                  name: "--http-enabled",
                  description: "Enable HTTP ingestion",
                },
                {
                  name: "--http-auth",
                  description: "Require authentication for HTTP ingestion",
                },
                {
                  name: "--worker-binding-enabled",
                  description: "Allow Workers to bind to this stream",
                },
                {
                  name: "--cors-origin",
                  description:
                    "Allowed HTTP origin (repeatable; '*' must be used alone)",
                  args: {
                    name: "cors-origin",
                  },
                  isRepeatable: true,
                },
                OPTION_JSON_3,
              ],
            },
            {
              name: "get",
              description: "Get a K2 stream by ID [open beta]",
              args: {
                name: "stream",
                description: "The K2 stream ID",
              },
              options: [OPTION_JSON_3],
            },
            {
              name: "list",
              description: "List a page of K2 streams [open beta]",
              options: [
                {
                  name: "--page",
                  description: "Page number",
                  args: {
                    name: "page",
                    default: "1",
                  },
                },
                {
                  name: "--per-page",
                  description: "Streams per page (1–100)",
                  args: {
                    name: "per-page",
                    default: "25",
                  },
                },
                {
                  name: "--name",
                  description: "Filter by a case-insensitive name substring",
                  args: {
                    name: "name",
                  },
                },
                OPTION_JSON_3,
              ],
            },
            {
              name: "delete",
              description: "Delete a K2 stream by ID [open beta]",
              args: {
                name: "stream",
                description: "The K2 stream ID",
              },
              options: [OPTION_FORCE, OPTION_JSON_3],
            },
          ],
        },
      ],
    },
    {
      name: "vpc",
      description: "Manage VPC [open beta]",
      subcommands: [
        {
          name: "service",
          description: "Manage VPC services",
          subcommands: [
            {
              name: "create",
              description: "Create a new VPC service",
              args: {
                name: "name",
                description: "The name of the VPC service",
              },
              options: [
                {
                  name: "--type",
                  description: "The type of the VPC service",
                  args: {
                    name: "type",
                    suggestions: ["tcp", "http"],
                  },
                  isRequired: true,
                },
                {
                  name: "--tcp-port",
                  description: "TCP port number",
                  args: {
                    name: "tcp-port",
                  },
                  exclusiveOn: ["--http-port", "--https-port"],
                },
                {
                  name: "--app-protocol",
                  description: "Application protocol for the TCP service",
                  args: {
                    name: "app-protocol",
                    suggestions: ["postgresql", "mysql"],
                  },
                  exclusiveOn: ["--http-port", "--https-port"],
                },
                {
                  name: "--http-port",
                  description: "HTTP port (default: 80)",
                  args: {
                    name: "http-port",
                  },
                  exclusiveOn: ["--tcp-port", "--app-protocol"],
                },
                {
                  name: "--https-port",
                  description: "HTTPS port number (default: 443)",
                  args: {
                    name: "https-port",
                  },
                  exclusiveOn: ["--tcp-port", "--app-protocol"],
                },
                {
                  name: "--ipv4",
                  description:
                    "IPv4 address for the host [conflicts with --ipv6]",
                  args: {
                    name: "ipv4",
                  },
                  exclusiveOn: ["--hostname", "--resolver-ips", "--ipv6"],
                },
                {
                  name: "--ipv6",
                  description:
                    "IPv6 address for the host [conflicts with --ipv4]",
                  args: {
                    name: "ipv6",
                  },
                  exclusiveOn: ["--ipv4", "--hostname", "--resolver-ips"],
                },
                {
                  name: "--hostname",
                  description: "Hostname for the host",
                  args: {
                    name: "hostname",
                  },
                  exclusiveOn: ["--ipv4", "--ipv6"],
                },
                {
                  name: "--resolver-ips",
                  description: "Comma-separated list of resolver IPs",
                  args: {
                    name: "resolver-ips",
                  },
                  exclusiveOn: ["--ipv4", "--ipv6"],
                },
                {
                  name: "--tunnel-id",
                  description: "UUID of the Cloudflare tunnel",
                  args: {
                    name: "tunnel-id",
                  },
                  isRequired: true,
                },
                {
                  name: "--cert-verification-mode",
                  description:
                    "Origin verification: verify_full checks chain and hostname; verify_ca checks chain only; disabled skips verification and cannot be used with a custom CA. Required when providing certificates. On update, TLS options you omit are cleared",
                  args: {
                    name: "cert-verification-mode",
                    suggestions: ["verify_full", "verify_ca", "disabled"],
                  },
                },
                {
                  name: "--certificate-authority",
                  description:
                    "UUID returned by wrangler cert upload certificate-authority",
                  args: {
                    name: "certificate-authority",
                  },
                },
                {
                  name: "--client-certificate",
                  description:
                    "UUID returned by wrangler cert upload mtls-certificate",
                  args: {
                    name: "client-certificate",
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a VPC service",
              args: {
                name: "service-id",
                description: "The ID of the service to delete",
              },
            },
            {
              name: "get",
              description: "Get a VPC service",
              args: {
                name: "service-id",
                description: "The ID of the VPC service",
              },
            },
            {
              name: "list",
              description: "List VPC services",
            },
            {
              name: "update",
              description: "Update a VPC service",
              args: {
                name: "service-id",
                description: "The ID of the VPC service to update",
              },
              options: [
                {
                  name: "--name",
                  description: "The name of the VPC service",
                  args: {
                    name: "name",
                  },
                  isRequired: true,
                },
                {
                  name: "--type",
                  description: "The type of the VPC service",
                  args: {
                    name: "type",
                    suggestions: ["tcp", "http"],
                  },
                  isRequired: true,
                },
                {
                  name: "--tcp-port",
                  description: "TCP port number",
                  args: {
                    name: "tcp-port",
                  },
                  exclusiveOn: ["--http-port", "--https-port"],
                },
                {
                  name: "--app-protocol",
                  description: "Application protocol for the TCP service",
                  args: {
                    name: "app-protocol",
                    suggestions: ["postgresql", "mysql"],
                  },
                  exclusiveOn: ["--http-port", "--https-port"],
                },
                {
                  name: "--http-port",
                  description: "HTTP port (default: 80)",
                  args: {
                    name: "http-port",
                  },
                  exclusiveOn: ["--tcp-port", "--app-protocol"],
                },
                {
                  name: "--https-port",
                  description: "HTTPS port number (default: 443)",
                  args: {
                    name: "https-port",
                  },
                  exclusiveOn: ["--tcp-port", "--app-protocol"],
                },
                {
                  name: "--ipv4",
                  description:
                    "IPv4 address for the host [conflicts with --ipv6]",
                  args: {
                    name: "ipv4",
                  },
                  exclusiveOn: ["--hostname", "--resolver-ips", "--ipv6"],
                },
                {
                  name: "--ipv6",
                  description:
                    "IPv6 address for the host [conflicts with --ipv4]",
                  args: {
                    name: "ipv6",
                  },
                  exclusiveOn: ["--ipv4", "--hostname", "--resolver-ips"],
                },
                {
                  name: "--hostname",
                  description: "Hostname for the host",
                  args: {
                    name: "hostname",
                  },
                  exclusiveOn: ["--ipv4", "--ipv6"],
                },
                {
                  name: "--resolver-ips",
                  description: "Comma-separated list of resolver IPs",
                  args: {
                    name: "resolver-ips",
                  },
                  exclusiveOn: ["--ipv4", "--ipv6"],
                },
                {
                  name: "--tunnel-id",
                  description: "UUID of the Cloudflare tunnel",
                  args: {
                    name: "tunnel-id",
                  },
                  isRequired: true,
                },
                {
                  name: "--cert-verification-mode",
                  description:
                    "Origin verification: verify_full checks chain and hostname; verify_ca checks chain only; disabled skips verification and cannot be used with a custom CA. Required when providing certificates. On update, TLS options you omit are cleared",
                  args: {
                    name: "cert-verification-mode",
                    suggestions: ["verify_full", "verify_ca", "disabled"],
                  },
                },
                {
                  name: "--certificate-authority",
                  description:
                    "UUID returned by wrangler cert upload certificate-authority",
                  args: {
                    name: "certificate-authority",
                  },
                },
                {
                  name: "--client-certificate",
                  description:
                    "UUID returned by wrangler cert upload mtls-certificate",
                  args: {
                    name: "client-certificate",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "email",
      description: "Manage Cloudflare Email services [open beta]",
      subcommands: [
        {
          name: "routing",
          description: "Manage Email Routing [open beta]",
          subcommands: [
            {
              name: "list",
              description: "List zones with Email Routing [open beta]",
            },
            {
              name: "settings",
              description: "Get Email Routing settings for a zone [open beta]",
              args: {
                name: "domain",
                description: "Domain name (e.g. example.com)",
              },
              options: [OPTION_ZONE_ID],
            },
            {
              name: "enable",
              description: "Enable Email Routing for a zone [open beta]",
              args: {
                name: "domain",
                description: "Domain name (e.g. example.com)",
              },
              options: [OPTION_ZONE_ID],
            },
            {
              name: "disable",
              description: "Disable Email Routing for a zone [open beta]",
              args: {
                name: "domain",
                description: "Domain name (e.g. example.com)",
              },
              options: [OPTION_ZONE_ID, OPTION_FORCE],
            },
            {
              name: "dns",
              description: "Manage Email Routing DNS settings [open beta]",
              subcommands: [
                {
                  name: "get",
                  description:
                    "Show DNS records required for Email Routing [open beta]",
                  args: {
                    name: "domain",
                    description: "Domain name (e.g. example.com)",
                  },
                  options: [OPTION_ZONE_ID],
                },
                {
                  name: "unlock",
                  description:
                    "Unlock MX records for Email Routing [open beta]",
                  args: {
                    name: "domain",
                    description: "Domain name (e.g. example.com)",
                  },
                  options: [OPTION_ZONE_ID, OPTION_FORCE],
                },
              ],
            },
            {
              name: "rules",
              description: "Manage Email Routing rules [open beta]",
              subcommands: [
                {
                  name: "list",
                  description: "List Email Routing rules [open beta]",
                  args: {
                    name: "domain",
                    description: "Domain name (e.g. example.com)",
                  },
                  options: [OPTION_ZONE_ID],
                },
                {
                  name: "get",
                  description:
                    "Get a specific Email Routing rule (use 'catch-all' as the rule ID to get the catch-all rule) [open beta]",
                  args: [
                    {
                      name: "domain",
                      description: "Domain name (e.g. example.com)",
                    },
                    {
                      name: "rule-id",
                      description:
                        "The ID of the routing rule, or 'catch-all' for the catch-all rule",
                    },
                  ],
                  options: [OPTION_ZONE_ID],
                },
                {
                  name: "create",
                  description: "Create an Email Routing rule [open beta]",
                  args: {
                    name: "domain",
                    description: "Domain name (e.g. example.com)",
                  },
                  options: [
                    OPTION_ZONE_ID,
                    {
                      name: "--name",
                      description: "Rule name",
                      args: {
                        name: "name",
                      },
                    },
                    {
                      name: "--enabled",
                      description: "Whether the rule is enabled",
                    },
                    {
                      name: "--match-type",
                      description: "Matcher type (e.g. literal)",
                      args: {
                        name: "match-type",
                      },
                      isRequired: true,
                    },
                    {
                      name: "--match-field",
                      description: "Matcher field (e.g. to)",
                      args: {
                        name: "match-field",
                      },
                      isRequired: true,
                    },
                    {
                      name: "--match-value",
                      description: "Matcher value (e.g. user@example.com)",
                      args: {
                        name: "match-value",
                      },
                      isRequired: true,
                    },
                    {
                      name: "--action-type",
                      description: "Action type (forward, drop, or worker)",
                      args: {
                        name: "action-type",
                        suggestions: ["forward", "drop", "worker"],
                      },
                      isRequired: true,
                    },
                    {
                      name: "--action-value",
                      description:
                        "Action value(s) (e.g. destination email address). Required for forward/worker actions",
                      args: {
                        name: "action-value",
                      },
                      isRepeatable: true,
                    },
                    {
                      name: "--priority",
                      description: "Rule priority",
                      args: {
                        name: "priority",
                      },
                    },
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update an Email Routing rule (use 'catch-all' as the rule ID to update the catch-all rule) [open beta]",
                  args: [
                    {
                      name: "domain",
                      description: "Domain name (e.g. example.com)",
                    },
                    {
                      name: "rule-id",
                      description:
                        "The ID of the routing rule to update, or 'catch-all' for the catch-all rule",
                    },
                  ],
                  options: [
                    OPTION_ZONE_ID,
                    {
                      name: "--name",
                      description: "Rule name",
                      args: {
                        name: "name",
                      },
                    },
                    {
                      name: "--enabled",
                      description: "Whether the rule is enabled",
                    },
                    {
                      name: "--match-type",
                      description:
                        "Matcher type (e.g. literal). Required for regular rules, ignored for catch-all",
                      args: {
                        name: "match-type",
                      },
                    },
                    {
                      name: "--match-field",
                      description:
                        "Matcher field (e.g. to). Required for regular rules, ignored for catch-all",
                      args: {
                        name: "match-field",
                      },
                    },
                    {
                      name: "--match-value",
                      description:
                        "Matcher value (e.g. user@example.com). Required for regular rules, ignored for catch-all",
                      args: {
                        name: "match-value",
                      },
                    },
                    {
                      name: "--action-type",
                      description: "Action type (forward, drop, or worker)",
                      args: {
                        name: "action-type",
                        suggestions: ["forward", "drop", "worker"],
                      },
                      isRequired: true,
                    },
                    {
                      name: "--action-value",
                      description:
                        "Action value(s) (e.g. destination email address). Required for forward/worker actions",
                      args: {
                        name: "action-value",
                      },
                      isRepeatable: true,
                    },
                    {
                      name: "--priority",
                      description: "Rule priority (ignored for catch-all)",
                      args: {
                        name: "priority",
                      },
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Delete an Email Routing rule [open beta]",
                  args: [
                    {
                      name: "domain",
                      description: "Domain name (e.g. example.com)",
                    },
                    {
                      name: "rule-id",
                      description: "The ID of the routing rule to delete",
                    },
                  ],
                  options: [OPTION_ZONE_ID, OPTION_FORCE],
                },
              ],
            },
            {
              name: "addresses",
              description:
                "Manage Email Routing destination addresses [open beta]",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List Email Routing destination addresses [open beta]",
                },
                {
                  name: "get",
                  description:
                    "Get a specific Email Routing destination address [open beta]",
                  args: {
                    name: "address-id",
                    description: "The ID of the destination address",
                  },
                },
                {
                  name: "create",
                  description:
                    "Create an Email Routing destination address [open beta]",
                  args: {
                    name: "email",
                    description: "Destination email address",
                  },
                },
                {
                  name: "delete",
                  description:
                    "Delete an Email Routing destination address [open beta]",
                  args: {
                    name: "address-id",
                    description: "The ID of the destination address to delete",
                  },
                  options: [OPTION_FORCE],
                },
              ],
            },
          ],
        },
        {
          name: "sending",
          description: "Manage Email Sending [open beta]",
          subcommands: [
            {
              name: "list",
              description:
                "List Email Sending subdomains (all subdomains in the account when no domain is given) [open beta]",
              args: {
                name: "domain",
                description:
                  "Domain whose sending subdomains to list. Lists all subdomains in the account when omitted",
                isOptional: true,
              },
              options: [OPTION_ZONE_ID],
            },
            {
              name: "settings",
              description:
                "Get Email Sending settings for a domain [open beta]",
              args: {
                name: "domain",
                description:
                  "Domain to get sending settings for (e.g. example.com)",
              },
              options: [OPTION_ZONE_ID],
            },
            {
              name: "enable",
              description:
                "Enable Email Sending for a zone or subdomain [open beta]",
              args: {
                name: "domain",
                description:
                  "Domain to enable sending for (e.g. example.com or notifications.example.com)",
              },
              options: [OPTION_ZONE_ID],
            },
            {
              name: "disable",
              description:
                "Disable Email Sending for a zone or subdomain [open beta]",
              args: {
                name: "domain",
                description:
                  "Domain to disable sending for (e.g. example.com or notifications.example.com)",
              },
              options: [OPTION_ZONE_ID, OPTION_FORCE],
            },
            {
              name: "send",
              description:
                "Send an email using the Email Sending builder [open beta]",
              options: [
                {
                  name: "--from",
                  description: "Sender email address",
                  args: {
                    name: "from",
                  },
                  isRequired: true,
                },
                {
                  name: "--to",
                  description: "Recipient email address(es)",
                  args: {
                    name: "to",
                  },
                  isRepeatable: true,
                  isRequired: true,
                },
                {
                  name: "--subject",
                  description: "Email subject line",
                  args: {
                    name: "subject",
                  },
                  isRequired: true,
                },
                {
                  name: "--text",
                  description: "Plain text body of the email",
                  args: {
                    name: "text",
                  },
                },
                {
                  name: "--html",
                  description: "HTML body of the email",
                  args: {
                    name: "html",
                  },
                },
                {
                  name: "--cc",
                  description: "CC recipient email address(es)",
                  args: {
                    name: "cc",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--bcc",
                  description: "BCC recipient email address(es)",
                  args: {
                    name: "bcc",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--reply-to",
                  description: "Reply-to email address",
                  args: {
                    name: "reply-to",
                  },
                },
                {
                  name: "--from-name",
                  description: "Display name for the sender (used with --from)",
                  args: {
                    name: "from-name",
                  },
                },
                {
                  name: "--reply-to-name",
                  description: "Display name for the reply-to address",
                  args: {
                    name: "reply-to-name",
                  },
                },
                {
                  name: "--header",
                  description:
                    "Custom header in 'Key:Value' format. Can be specified multiple times",
                  args: {
                    name: "header",
                  },
                  isRepeatable: true,
                },
                {
                  name: "--attachment",
                  description:
                    "File path to attach. Can be specified multiple times",
                  args: {
                    name: "attachment",
                  },
                  isRepeatable: true,
                },
              ],
            },
            {
              name: "send-raw",
              description: "Send a raw MIME email message [open beta]",
              options: [
                {
                  name: "--from",
                  description: "Sender email address (SMTP envelope)",
                  args: {
                    name: "from",
                  },
                  isRequired: true,
                },
                {
                  name: "--to",
                  description: "Recipient email address(es) (SMTP envelope)",
                  args: {
                    name: "to",
                  },
                  isRepeatable: true,
                  isRequired: true,
                },
                {
                  name: "--mime",
                  description:
                    "Raw MIME message string. Provide either --mime or --mime-file, not both",
                  args: {
                    name: "mime",
                  },
                  exclusiveOn: ["--mime-file"],
                },
                {
                  name: "--mime-file",
                  description:
                    "Path to a file containing the raw MIME message. Provide either --mime or --mime-file, not both",
                  args: {
                    name: "mime-file",
                    template: "filepaths",
                  },
                  exclusiveOn: ["--mime"],
                },
              ],
            },
            {
              name: "dns",
              description: "Manage Email Sending DNS records [open beta]",
              subcommands: [
                {
                  name: "get",
                  description:
                    "Get DNS records for an Email Sending domain [open beta]",
                  args: {
                    name: "domain",
                    description:
                      "Domain to get DNS records for (e.g. example.com or notifications.example.com)",
                  },
                  options: [OPTION_ZONE_ID],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "hello-world",
      description: "Example local commands. DO NOT USE",
      hidden: true,
      subcommands: [
        {
          name: "get",
          description: "Example local command - Get a value from the account",
          hidden: true,
          options: [
            {
              name: "--remote",
              description: "Execute command against remote service",
            },
            OPTION_PERSIST_TO,
          ],
        },
        {
          name: "set",
          description: "Example local command - Set a value to the account",
          hidden: true,
          args: {
            name: "value",
            description: "Value to set in the account",
          },
          options: [
            {
              name: "--remote",
              description: "Execute command against remote service",
            },
            OPTION_PERSIST_TO,
          ],
        },
      ],
    },
    {
      name: "login",
      description: "Login to Cloudflare",
      options: [
        {
          name: "--browser",
          description: "Automatically open the OAuth link in a browser",
        },
        {
          name: "--scopes",
          description:
            "Pick the set of applicable OAuth scopes when logging in",
          args: {
            name: "scopes",
          },
          isRepeatable: true,
        },
        {
          name: "--callback-host",
          description:
            "Use the ip or host address for the temporary login callback server",
          args: {
            name: "callback-host",
            default: "localhost",
          },
        },
        {
          name: "--callback-port",
          description: "Use the port for the temporary login callback server",
          args: {
            name: "callback-port",
            default: "8976",
          },
        },
        {
          name: "--scopes-list",
          description: "List all the available OAuth scopes with descriptions",
        },
        {
          name: "--use-keyring",
          description:
            "Store OAuth credentials in the OS keychain instead of a plaintext file (persisted across invocations)",
        },
        {
          name: "--device",
          description:
            "Use the OAuth 2.0 Device Authorization Grant (RFC 8628) instead of the localhost callback flow. Useful in containers, remote SSH sessions, or other environments where localhost:8976 is unreachable from your browser",
        },
      ],
    },
    {
      name: "logout",
      description: "Logout from Cloudflare",
    },
    {
      name: "whoami",
      description: "Retrieve your user information",
      options: [
        {
          name: "--account",
          description:
            "Show membership information for the given account (id or name)",
          args: {
            name: "account",
          },
        },
        {
          name: "--json",
          description:
            "Return user information as JSON. Exits with a non-zero status if not authenticated",
        },
      ],
    },
    {
      name: "auth",
      description: "Manage authentication",
      subcommands: [
        {
          name: "token",
          description:
            "Retrieve the current authentication token or credentials",
          options: [
            {
              name: "--json",
              description: "Return output as JSON with token type information",
            },
          ],
        },
        {
          name: "keyring",
          description:
            "Configure whether OAuth credentials are stored in the OS keychain",
          args: {
            name: "action",
            description:
              "Whether to enable or disable keyring storage. Omit to show the current setting",
            isOptional: true,
            suggestions: ["enable", "disable"],
          },
        },
        {
          name: "create",
          description:
            "Create or re-authenticate a named auth profile [experimental]",
          args: {
            name: "name",
            description: "Name for the auth profile",
          },
          options: [
            {
              name: "--browser",
              description: "Automatically open the OAuth link in a browser",
            },
            {
              name: "--scopes",
              description:
                "Pick the set of applicable OAuth scopes when logging in",
              args: {
                name: "scopes",
              },
              isRepeatable: true,
            },
            {
              name: "--callback-host",
              description:
                "Use the ip or host address for the temporary login callback server",
              args: {
                name: "callback-host",
                default: "localhost",
              },
            },
            {
              name: "--callback-port",
              description:
                "Use the port for the temporary login callback server",
              args: {
                name: "callback-port",
                default: "8976",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a named auth profile [experimental]",
          args: {
            name: "name",
            description: "Name of the auth profile to delete",
          },
        },
        {
          name: "activate",
          description:
            "Bind a named auth profile to a directory [experimental]",
          args: [
            {
              name: "name",
              description: "Name of the auth profile to activate",
            },
            {
              name: "dir",
              description:
                "Directory to bind the profile to (defaults to current directory)",
              isOptional: true,
              template: "folders",
            },
          ],
        },
        {
          name: "deactivate",
          description:
            "Remove the auth profile binding from a directory [experimental]",
          args: {
            name: "dir",
            description:
              "Directory to unbind (defaults to current directory). Must be the exact directory the profile was bound to",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "list",
          description: "List all auth profiles [experimental]",
        },
      ],
    },
    SHARED_TELEMETRY,
    {
      ...SHARED_TELEMETRY,
      name: "metrics",
      description: "Configure whether Wrangler collects telemetry",
      hidden: true,
    },
    {
      name: "check",
      description: "Run checks on your Worker",
      hidden: true,
      subcommands: [
        {
          name: "startup",
          description: "Profile your Worker's startup performance",
          options: [
            {
              name: "--outfile",
              description: "Output file for startup phase cpuprofile",
              args: {
                name: "outfile",
                template: "filepaths",
                default: "worker-startup.cpuprofile",
              },
            },
            {
              name: ["--workerBundle", "--worker"],
              description:
                "Path to a prebuilt worker bundle i.e the output of `wrangler deploy --outfile worker.bundle",
              args: {
                name: "workerBundle",
              },
            },
            {
              name: "--pages",
              description:
                "Force this project to be treated as a Pages project",
            },
            {
              name: "--args",
              description:
                "Additional arguments passed to `wrangler deploy` or `wrangler pages functions build` e.g. `--no-bundle`",
              args: {
                name: "args",
              },
            },
          ],
        },
      ],
    },
    {
      name: "build",
      description: "Build a Worker",
      hidden: true,
      options: [
        OPTION_EXPERIMENTAL_NEW_CONFIG,
        {
          name: ["--experimental-cf-build-output", "--x-cf-build-output"],
          description:
            "[experimental] Emit a Build Output Specification directory under `.cloudflare/output/` (requires --experimental-new-config)",
          hidden: true,
        },
      ],
    },
  ],
  options: [
    {
      name: ["-c", "--config"],
      description: "Path to Wrangler configuration file",
      args: {
        name: "config",
        template: "filepaths",
      },
      isPersistent: true,
    },
    {
      name: "--cwd",
      description:
        "Run as if Wrangler was started in the specified directory instead of the current working directory",
      args: {
        name: "cwd",
      },
      isPersistent: true,
    },
    {
      name: ["-e", "--env"],
      description:
        "Environment to use for operations, and for selecting .env and .dev.vars files",
      args: {
        name: "env",
      },
      isPersistent: true,
    },
    {
      name: "--env-file",
      description:
        "Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files",
      args: {
        name: "env-file",
      },
      isRepeatable: true,
      isPersistent: true,
    },
    {
      name: "--install-skills",
      description:
        "Install Cloudflare skills for detected AI coding agents before running the command",
      isPersistent: true,
    },
    {
      name: "--profile",
      description: "Use a specific auth profile",
      args: {
        name: "profile",
      },
      isPersistent: true,
    },
    {
      name: ["--experimental-provision", "--x-provision"],
      description: "Experimental: Enable automatic resource provisioning",
      isPersistent: true,
      hidden: true,
    },
    {
      name: ["--experimental-auto-create", "--x-auto-create"],
      description: "Automatically provision draft bindings with new resources",
      isPersistent: true,
      hidden: true,
    },
    {
      name: ["-h", "--help"],
      description: "Show help",
      isPersistent: true,
    },
    {
      name: ["-v", "--version"],
      description: "Show version number",
    },
  ],
};

export default completionSpec;
