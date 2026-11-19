const optAccessTokenFile: Fig.Option = {
  name: "--access-token-file",
  description:
    "A file path to read the access token. Use this flag to authenticate `gcloud` with an access token. The credentials of the active account (if exists) will be ignored. The file should only contain an access token with no other information. Overrides the default *auth/access_token_file* property value for this command invocation",
  args: {
    name: "ACCESS_TOKEN_FILE",
    description: "String",
    template: "filepaths",
  },
};

const optAccount: Fig.Option = {
  name: "--account",
  description:
    "Google Cloud user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
  args: {
    name: "ACCOUNT",
    description: "String",
  },
};

const optAsync: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to complete",
};

const optBackupCollection: Fig.Option = {
  name: "--backup-collection",
  description: "The name of the Redis cluster backup collection",
  args: {
    name: "BACKUP_COLLECTION",
    description: "String",
  },
};

const optBillingProject: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for operations performed in `gcloud`. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
  args: {
    name: "BILLING_PROJECT",
    description: "String",
  },
};

const optConfiguration: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation. For more information on how to use configurations, run: `gcloud topic configurations`. You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment variable to set the equivalent of this flag for a terminal session",
  args: {
    name: "CONFIGURATION",
    description: "String",
  },
};

const optFilter: Fig.Option = {
  name: "--filter",
  description:
    "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed. If the expression evaluates `True`, then that item is listed. For more details and examples of filter expressions, run $ gcloud topic filters. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: {
    name: "EXPRESSION",
    description: "String",
  },
};

const optFlagsFile: Fig.Option = {
  name: "--flags-file",
  description:
    "A YAML or JSON file that specifies a *--flag*:*value* dictionary. Useful for specifying complex flag values with special characters that work with any command interpreter. Additionally, each *--flags-file* arg is replaced by its constituent flags. See $ gcloud topic flags-file for more information",
  args: {
    name: "YAML_FILE",
    description: "String",
    template: "filepaths",
  },
};

const optFlatten: Fig.Option = {
  name: "--flatten",
  description:
    "Flatten _name_[] output resource slices in _KEY_ into separate records for each item in each slice. Multiple keys and slices may be specified. This also flattens keys for *--format* and *--filter*. For example, *--flatten=abc.def* flattens *abc.def[].ghi* references to *abc.def.ghi*. A resource record containing *abc.def[]* with N elements will expand to N records in the flattened output. This allows us to specify what `resource-key` the `filter` will operate on. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: {
    name: "KEY",
    description: "List",
  },
};

const optFormat: Fig.Option = {
  name: "--format",
  description:
    "Sets the format for printing command output resources. The default is a command-specific human-friendly output format. If both `core/format` and `--format` are specified, `--format` takes precedence. `--format` and `core/format` both take precedence over `core/default_format`. The supported formats are limited to: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats. Run `$ gcloud config set --help` to see more information about `core/format`",
  args: {
    name: "FORMAT",
    description: "String",
  },
};

const optImpersonateServiceAccount: Fig.Option = {
  name: "--impersonate-service-account",
  description:
    "For this `gcloud` invocation, all API requests will be made as the given service account or target service account in an impersonation delegation chain instead of the currently selected account. You can specify either a single service account as the impersonator, or a comma-separated list of service accounts to create an impersonation delegation chain. The impersonation is done without needing to create, download, and activate a key for the service account or accounts",
  args: {
    name: "SERVICE_ACCOUNT_EMAILS",
    description: "String",
  },
};

const optLimit: Fig.Option = {
  name: "--limit",
  description:
    "Maximum number of resources to list. The default is *unlimited*. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: {
    name: "LIMIT",
  },
};

const optLogHttp: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};

const optNoAsync: Fig.Option = {
  name: "--no-async",
  description:
    "Return immediately, without waiting for the operation in progress to complete",
  hidden: true,
};

const optNoUri: Fig.Option = {
  name: "--no-uri",
  description:
    "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
  hidden: true,
};

const optPageSize: Fig.Option = {
  name: "--page-size",
  description:
    "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is determined by the service if it supports paging, otherwise it is *unlimited* (no paging). Paging may be applied before or after *--filter* and *--limit* depending on the service",
  args: {
    name: "PAGE_SIZE",
  },
};

const optProject: Fig.Option = {
  name: "--project",
  description:
    "The Google Cloud project ID to use for this invocation. If omitted, then the current project is assumed; the current project can be listed using `gcloud config list --format='text(core.project)'` and can be set using `gcloud config set project PROJECTID`",
  args: {
    name: "PROJECT_ID",
    description: "String",
  },
};

const optQuiet: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input is required, defaults will be used, or an error will be raised",
};

const optRdbSnapshotPeriod: Fig.Option = {
  name: "--rdb-snapshot-period",
  description:
    "Attempted period between RDB snapshots. _RDB_SNAPSHOT_PERIOD_ must be one of:",
  args: {
    name: "RDB_SNAPSHOT_PERIOD",
    suggestions: ["12h", "1h", "24h", "6h"],
  },
};

const optRegion: Fig.Option = {
  name: "--region",
  description: "ID of the region or fully qualified identifier for the region",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion2: Fig.Option = {
  name: "--region",
  description:
    "The name of the Redis region of the acl policy. Overrides the default redis/region property value for this command invocation",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion3: Fig.Option = {
  name: "--region",
  description:
    "The name of the Redis region of the backup. Overrides the default redis/region property value for this command invocation",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion4: Fig.Option = {
  name: "--region",
  description:
    "The name of the Redis region of the cluster. Overrides the default redis/region property value for this command invocation",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion5: Fig.Option = {
  name: "--region",
  description:
    "The name of the Redis region of the instance. Overrides the default redis/region property value for this command invocation",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optSortBy: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The default order is ascending. Prefix a field with ``~'' for descending order on that field. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: {
    name: "FIELD",
    description: "List",
  },
};

const optTraceToken: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: {
    name: "TRACE_TOKEN",
    description: "String",
  },
};

const optUri: Fig.Option = {
  name: "--uri",
  description:
    "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
};

const optUserOutputEnabled: Fig.Option = {
  name: "--user-output-enabled",
  description:
    "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
};

const optVerbosity: Fig.Option = {
  name: "--verbosity",
  description:
    "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
  args: {
    name: "VERBOSITY",
    description: "String",
    suggestions: ["debug", "info", "warning", "error", "critical", "none"],
  },
};

const completionSpec: Fig.Spec = {
  name: "redis",
  description: "Manage Cloud Memorystore Redis resources",
  subcommands: [
    {
      name: "acl-policies",
      description:
        "Manage ACL policies of Memorystore for Redis Cluster instances",
      subcommands: [
        {
          name: "create",
          description: "Create a Redis ACL Policy",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optProject,
            optQuiet,
            optRegion2,
            {
              name: "--request-id",
              description: "Idempotent request UUID",
              args: {
                name: "REQUEST_ID",
                description: "String",
              },
            },
            {
              name: "--rules",
              description:
                "Required, The ACL rules within the ACL policy. Specify this flag multiple times for multiple rules. Each rule consists of 'username' and 'rule'",
              priority: 100,
              isRepeatable: true,
              args: {
                name: "RULES",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ACL_POLICY",
            description:
              "ID of the acl policy or fully qualified identifier for the acl policy",
          },
        },
        {
          name: "delete",
          description: "Delete a Redis ACL Policy",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRegion2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ACL_POLICY",
            description:
              "ID of the acl policy or fully qualified identifier for the acl policy",
          },
        },
        {
          name: "describe",
          description:
            "Show metadata for a Memorystore for Redis Cluster ACL policy",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optProject,
            optQuiet,
            optRegion2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ACL_POLICY",
            description:
              "ID of the acl policy or fully qualified identifier for the acl policy",
          },
        },
        {
          name: "list",
          description: "List Redis ACL Policies",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLimit,
            optLogHttp,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optRegion,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Update aclPolicies",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-rules",
              description:
                "Add new value to rules list. The ACL rules within the ACL policy",
              args: {
                name: "ADD_RULES",
              },
            },
            optAsync,
            optBillingProject,
            {
              name: "--clear-rules",
              description: "Clear rules value and set to empty list",
            },
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-clear-rules",
              description: "Clear rules value and set to empty list",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion2,
            {
              name: "--remove-rules",
              description:
                "Remove existing value from rules list. The ACL rules within the ACL policy",
              args: {
                name: "REMOVE_RULES",
              },
            },
            {
              name: "--request-id",
              description: "Idempotent request UUID",
              args: {
                name: "REQUEST_ID",
                description: "String",
              },
            },
            {
              name: "--rules",
              description:
                "Set rules to new value. The ACL rules within the ACL policy",
              args: {
                name: "RULES",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ACL_POLICY",
            description:
              "ID of the acl policy or fully qualified identifier for the acl policy",
          },
        },
      ],
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        optProject,
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "clusters",
      description: "Manage Memorystore for Redis Cluster instances",
      subcommands: [
        {
          name: "add-cluster-endpoints",
          description: "Add more cluster endpoints",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--cluster-endpoint",
              description:
                "Required, Resource details of a redis cluster endpoint",
              priority: 100,
              args: {
                name: "CLUSTER_ENDPOINT",
              },
            },
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRegion4,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster",
          },
        },
        {
          name: "backup-collections",
          description:
            "Manage backup collections of Memorystore for Redis Cluster instances",
          subcommands: [
            {
              name: "describe",
              description: "Show metadata for a backup collection",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                optProject,
                optQuiet,
                {
                  name: "--region",
                  description:
                    "The name of the Redis region of the backup collection. Overrides the default redis/region property value for this command invocation",
                  args: {
                    name: "REGION",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "BACKUP_COLLECTION",
                description:
                  "ID of the backup collection or fully qualified identifier for the backup collection",
              },
            },
            {
              name: "list",
              description: "List backup collections in a region",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFilter,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLimit,
                optLogHttp,
                optNoUri,
                optPageSize,
                optProject,
                optQuiet,
                optRegion,
                optSortBy,
                optTraceToken,
                optUri,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
          ],
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "backups",
          description:
            "Manage backups of Memorystore for Redis Cluster instances",
          subcommands: [
            {
              name: "delete",
              description: "Delete a Memorystore for Redis Cluster backup",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBackupCollection,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optRegion3,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup",
              },
            },
            {
              name: "describe",
              description:
                "Show metadata for a Memorystore for Redis Cluster backup",
              options: [
                optAccessTokenFile,
                optAccount,
                optBackupCollection,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                optProject,
                optQuiet,
                optRegion3,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup",
              },
            },
            {
              name: "export",
              description:
                "Export a Redis cluster backup to a Google Cloud Storage bucket",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBackupCollection,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--gcs-bucket",
                  description:
                    "The name of the Google Cloud Storage bucket to export the backup to",
                  priority: 100,
                  args: {
                    name: "GCS_BUCKET",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optRegion3,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup",
              },
            },
            {
              name: "list",
              description: "List backups under a backup collection in a region",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--backup-collection",
                  description:
                    "ID of the backup collection or fully qualified identifier for the backup collection",
                  priority: 100,
                  args: {
                    name: "BACKUP_COLLECTION",
                    description: "String",
                  },
                },
                optBillingProject,
                optConfiguration,
                optFilter,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLimit,
                optLogHttp,
                optNoUri,
                optPageSize,
                optProject,
                optQuiet,
                {
                  name: "--region",
                  description:
                    "The name of the Redis region of the backup collection. Overrides the default redis/region property value for this command invocation",
                  args: {
                    name: "REGION",
                    description: "String",
                  },
                },
                optSortBy,
                optTraceToken,
                optUri,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
          ],
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "create",
          description: "Create a new Memorystore for Redis Cluster instance",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--acl-policy",
              description: "The ACL policy to use for the cluster",
              args: {
                name: "ACL_POLICY",
                description: "String",
              },
            },
            {
              name: "--aof-append-fsync",
              description:
                "Fsync configuration. _AOF_APPEND_FSYNC_ must be one of:",
              args: {
                name: "AOF_APPEND_FSYNC",
                suggestions: ["always", "everysec", "no"],
              },
            },
            optAsync,
            {
              name: "--auth-mode",
              description:
                "Available authorization mode of a Redis cluster. _AUTH_MODE_ must be one of:",
              args: {
                name: "AUTH_MODE",
                suggestions: ["disabled", "iam-auth"],
              },
            },
            {
              name: "--automated-backup-mode",
              description:
                "Automated backup mode. _AUTOMATED_BACKUP_MODE_ must be one of:",
              args: {
                name: "AUTOMATED_BACKUP_MODE",
                suggestions: ["disabled", "enabled"],
              },
            },
            {
              name: "--automated-backup-start-time",
              description:
                "One-hour window when you want automated-backup operations to start. Specify the time in the format HH:00 on a 24-hour cycle in UTC time",
              args: {
                name: "AUTOMATED_BACKUP_START_TIME",
                description: "String",
              },
            },
            {
              name: "--automated-backup-ttl",
              description:
                'Time to live for automated backups. A backup will be deleted automatically after the TTL is reached. It ranges from 1 day to 365 days. For example, "10d" for 10 days. If not specified, the default value is 35 days',
              args: {
                name: "AUTOMATED_BACKUP_TTL",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--cross-cluster-replication-role",
              description:
                "The role of the cluster in cross cluster replication. _CROSS_CLUSTER_REPLICATION_ROLE_ must be (only one value is supported):",
              args: {
                name: "CROSS_CLUSTER_REPLICATION_ROLE",
                suggestions: ["secondary"],
              },
            },
            {
              name: "--deletion-protection",
              description:
                "Enable deletion protection for the Redis Cluster. Use `--deletion-protection`/`--no-deletion-protection` to enable/disable it",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--import-gcs-object-uris",
              description:
                "URIs of Google Cloud Storage objects to import from. For example, `gs://bucket/folder/file1.rdb,gs://bucket/folder/file2.rdb`",
              args: {
                name: "IMPORT_GCS_OBJECT_URIS",
                description: "List",
              },
            },
            {
              name: "--import-managed-backup",
              description:
                "Managed backup to import from. For example, `projects/PROJECT_ID/locations/REGION/backupCollections/BACKUP_COLLECTION_ID/backups/BACKUP_ID`",
              args: {
                name: "IMPORT_MANAGED_BACKUP",
                description: "String",
              },
            },
            {
              name: "--kms-key",
              description:
                "The resource name of the customer-managed encryption key (CMEK) to use for the cluster. It must use this format: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/CRYPTO_KEY. The key must be in the same region as the cluster. Otherwise, the create operation fails",
              args: {
                name: "KMS_KEY",
                description: "String",
              },
            },
            {
              name: "--labels",
              description: "List of label KEY=VALUE pairs to add",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optLogHttp,
            {
              name: "--maintenance-window-day",
              description:
                "Day of week when the window starts, e.g. `sunday`. _MAINTENANCE_WINDOW_DAY_ must be one of: *friday*, *monday*, *saturday*, *sunday*, *thursday*, *tuesday*, *wednesday*",
              args: {
                name: "MAINTENANCE_WINDOW_DAY",
                suggestions: [
                  "friday",
                  "monday",
                  "saturday",
                  "sunday",
                  "thursday",
                  "tuesday",
                  "wednesday",
                ],
              },
            },
            {
              name: "--maintenance-window-hour",
              description:
                "Hour of day (`0` to `23`) for the start of maintenance window, in UTC time zone",
              args: {
                name: "MAINTENANCE_WINDOW_HOUR",
                description: "Int",
              },
            },
            {
              name: "--network",
              description:
                "The network used to create your instance. It must use the format: projects/NETWORK_PROJECT_ID/global/networks/NETWORK_ID. The network ID used here must match the network ID used by the service connection policy. Otherwise, the create operation fails",
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            optNoAsync,
            {
              name: "--no-deletion-protection",
              description:
                "Enable deletion protection for the Redis Cluster. Use `--deletion-protection`/`--no-deletion-protection` to enable/disable it",
              hidden: true,
            },
            {
              name: "--node-type",
              description:
                "Node Type of the redis cluster Node. _NODE_TYPE_ must be one of: *redis-highcpu-medium*, *redis-highmem-2xlarge*, *redis-highmem-medium*, *redis-highmem-xlarge*, *redis-shared-core-nano*, *redis-standard-large*, *redis-standard-small*",
              args: {
                name: "NODE_TYPE",
                suggestions: [
                  "redis-highcpu-medium",
                  "redis-highmem-2xlarge",
                  "redis-highmem-medium",
                  "redis-highmem-xlarge",
                  "redis-shared-core-nano",
                  "redis-standard-large",
                  "redis-standard-small",
                ],
              },
            },
            {
              name: "--persistence-mode",
              description:
                "Operation mode for persistence. _PERSISTENCE_MODE_ must be one of:",
              args: {
                name: "PERSISTENCE_MODE",
                suggestions: ["aof", "disabled", "rdb"],
              },
            },
            {
              name: "--primary-cluster",
              description:
                "The primary cluster that the secondary cluster will replicate from. It must use the format: projects/PROJECT_ID/locations/REGION/clusters/CLUSTER_ID. It must refer to an existing cluster. Otherwise, the create operation fails",
              args: {
                name: "PRIMARY_CLUSTER",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optRdbSnapshotPeriod,
            {
              name: "--rdb-snapshot-start-time",
              description:
                "Date and time of the first snapshot in the ISO 1801 format, and alignment time for future snapshots. For example, 2024-01-01T01:00:00Z. If not specified, the current time will be used",
              args: {
                name: "RDB_SNAPSHOT_START_TIME",
                description: "String",
              },
            },
            {
              name: "--redis-config",
              description:
                "A list of Redis config KEY=VALUE pairs to set on the Redis Cluster according to http://redis.io/topics/config. Currently the supported Redis configs are:",
              args: {
                name: "KEY=VALUE",
              },
            },
            optRegion4,
            {
              name: "--replica-count",
              description: "The replica count of each shard",
              args: {
                name: "REPLICA_COUNT",
                description: "Int",
              },
            },
            {
              name: "--server-ca-mode",
              description:
                "Server CA mode for the cluster. This field is immutable. _SERVER_CA_MODE_ must be one of:",
              args: {
                name: "SERVER_CA_MODE",
                suggestions: [
                  "customer-managed-cas-ca",
                  "google-managed-per-instance-ca",
                  "google-managed-shared-ca",
                ],
              },
            },
            {
              name: "--server-ca-pool",
              description:
                "The customer-managed Certificate Authority Service CA Pool resource name to use for issuing server certificates. Format: projects/{project}/locations/{region}/caPools/{ca_pool}. This is applicable only if --server-ca-mode is set to customer-managed-cas-ca. This field is immutable",
              args: {
                name: "SERVER_CA_POOL",
                description: "String",
              },
            },
            {
              name: "--shard-count",
              description: "The shard count of the cluster",
              args: {
                name: "SHARD_COUNT",
                description: "Int",
              },
            },
            optTraceToken,
            {
              name: "--transit-encryption-mode",
              description:
                "Transit encryption mode used for the Redis cluster. If not provided, encryption is disabled for the cluster. _TRANSIT_ENCRYPTION_MODE_ must be one of:",
              args: {
                name: "TRANSIT_ENCRYPTION_MODE",
                suggestions: ["disabled", "server-authentication"],
              },
            },
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--zone",
              description:
                "The zone used to allocate the cluster nodes. Applicable only if the zone-distribution-mode is set to single-zone",
              args: {
                name: "ZONE",
                description: "String",
              },
            },
            {
              name: "--zone-distribution-mode",
              description:
                "Determines how the cluster nodes are distributed across zones. _ZONE_DISTRIBUTION_MODE_ must be one of:",
              args: {
                name: "ZONE_DISTRIBUTION_MODE",
                suggestions: ["multi-zone", "single-zone"],
              },
            },
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster",
          },
        },
        {
          name: "create-backup",
          description: "Create a backup of a Redis cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--backup-id",
              description: "The ID of the backup",
              args: {
                name: "BACKUP_ID",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRegion4,
            optTraceToken,
            {
              name: "--ttl",
              description:
                'The time to live for the backup. The backup will be deleted automatically after the TTL is reached. For example, "10d" for 10 days. The minimum value is 1 day. If not specified, the default value is 100 years',
              args: {
                name: "TTL",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster",
          },
        },
        {
          name: "delete",
          description: "Delete a Memorystore for Redis Cluster instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRegion4,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster",
          },
        },
        {
          name: "describe",
          description:
            "Show metadata for a Memorystore for Redis Cluster instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optProject,
            optQuiet,
            optRegion4,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster",
          },
        },
        {
          name: "detach",
          description: "Detach a secondary cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRegion4,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster",
          },
        },
        {
          name: "detach-secondaries",
          description:
            "Detach one or more secondary clusters from the primary cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--clusters-to-detach",
              description:
                "Comma separated list of secondary clusters to detach from the primary cluster",
              priority: 100,
              args: {
                name: "CLUSTERS_TO_DETACH",
                description: "String",
              },
            },
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRegion4,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster",
          },
        },
        {
          name: "get-cluster-certificate-authority",
          description:
            "Get the certificate authority information for a Memorystore for Redis Cluster instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optProject,
            optQuiet,
            optRegion4,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster",
          },
        },
        {
          name: "get-shared-regional-certificate-authority",
          description:
            "Get the shared regional certificate authority certificates for Memorystore for Redis Cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optProject,
            optQuiet,
            optRegion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "list",
          description: "List Memorystore for Redis Cluster instances",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLimit,
            optLogHttp,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optRegion,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "remove-cluster-endpoints",
          description: "Remove existing Memorystore cluster endpoints",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--cluster-endpoint",
              description:
                "Required, Resource details of a redis cluster endpoint",
              priority: 100,
              args: {
                name: "CLUSTER_ENDPOINT",
              },
            },
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRegion4,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster",
          },
        },
        {
          name: "reschedule-maintenance",
          description:
            "Reschedule maintenance window for a Memorystore for Redis Cluster instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRegion4,
            {
              name: "--reschedule-type",
              description:
                "Reschedule type to use for the reschedule maintenance window. _RESCHEDULE_TYPE_ must be one of:",
              priority: 100,
              args: {
                name: "RESCHEDULE_TYPE",
                suggestions: ["immediate", "specific-time"],
              },
            },
            {
              name: "--schedule-time",
              description:
                "Time in RFC3339 format, for example: 2012-11-15T16:19:00.094Z",
              args: {
                name: "SCHEDULE_TIME",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster",
          },
        },
        {
          name: "switchover",
          description: "Switchover to a secondary cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRegion4,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster",
          },
        },
        {
          name: "update",
          description: "Update Memorystore Cluster for Redis instance",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--acl-policy",
              description: "The ACL policy to use for the cluster",
              args: {
                name: "ACL_POLICY",
                description: "String",
              },
            },
            {
              name: "--aof-append-fsync",
              description:
                "Fsync configuration. _AOF_APPEND_FSYNC_ must be one of:",
              args: {
                name: "AOF_APPEND_FSYNC",
                suggestions: ["always", "everysec", "no"],
              },
            },
            optAsync,
            {
              name: "--automated-backup-mode",
              description:
                "Automated backup mode. _AUTOMATED_BACKUP_MODE_ must be one of:",
              args: {
                name: "AUTOMATED_BACKUP_MODE",
                suggestions: ["disabled", "enabled"],
              },
            },
            {
              name: "--automated-backup-start-time",
              description:
                "One-hour window when you want automated-backup operations to start. Specify the time in the format HH:00 on a 24-hour cycle in UTC time",
              args: {
                name: "AUTOMATED_BACKUP_START_TIME",
                description: "String",
              },
            },
            {
              name: "--automated-backup-ttl",
              description:
                'Time to live for automated backups. A backup will be deleted automatically after the TTL is reached. It ranges from 1 day to 365 days. For example, "10d" for 10 days. If not specified, the default value is 35 days',
              args: {
                name: "AUTOMATED_BACKUP_TTL",
              },
            },
            optBillingProject,
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
            },
            optConfiguration,
            {
              name: "--deletion-protection",
              description:
                "Enable deletion protection for the Redis Cluster. Use `--deletion-protection`/`--no-deletion-protection` to enable/disable it",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            {
              name: "--maintenance-version",
              description: "The maintenance version of the cluster",
              args: {
                name: "MAINTENANCE_VERSION",
                description: "String",
              },
            },
            {
              name: "--maintenance-window-any",
              description: "Removes the user-specified maintenance window",
            },
            {
              name: "--maintenance-window-day",
              description:
                "The day of week when the window starts, e.g. `sunday`. _MAINTENANCE_WINDOW_DAY_ must be one of: *friday*, *monday*, *saturday*, *sunday*, *thursday*, *tuesday*, *wednesday*",
              args: {
                name: "MAINTENANCE_WINDOW_DAY",
                suggestions: [
                  "friday",
                  "monday",
                  "saturday",
                  "sunday",
                  "thursday",
                  "tuesday",
                  "wednesday",
                ],
              },
            },
            {
              name: "--maintenance-window-hour",
              description:
                "Hour of day (`0` to `23`) for the start of maintenance window, in UTC time zone",
              args: {
                name: "MAINTENANCE_WINDOW_HOUR",
                description: "Int",
              },
            },
            optNoAsync,
            {
              name: "--no-clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
              hidden: true,
            },
            {
              name: "--no-deletion-protection",
              description:
                "Enable deletion protection for the Redis Cluster. Use `--deletion-protection`/`--no-deletion-protection` to enable/disable it",
              hidden: true,
            },
            {
              name: "--no-maintenance-window-any",
              description: "Removes the user-specified maintenance window",
              hidden: true,
            },
            {
              name: "--no-rotate-server-certificate",
              description:
                "Rotate the server certificates for the cluster. This is allowed only for clusters using a customer-managed CA",
              hidden: true,
            },
            {
              name: "--no-simulate-maintenance-event",
              description: "Trigger a simulation for maintenance event",
              hidden: true,
            },
            {
              name: "--node-type",
              description:
                "Node Type of the redis cluster Node. _NODE_TYPE_ must be one of: *redis-highcpu-medium*, *redis-highmem-2xlarge*, *redis-highmem-medium*, *redis-highmem-xlarge*, *redis-shared-core-nano*, *redis-standard-large*, *redis-standard-small*",
              args: {
                name: "NODE_TYPE",
                suggestions: [
                  "redis-highcpu-medium",
                  "redis-highmem-2xlarge",
                  "redis-highmem-medium",
                  "redis-highmem-xlarge",
                  "redis-shared-core-nano",
                  "redis-standard-large",
                  "redis-standard-small",
                ],
              },
            },
            {
              name: "--persistence-mode",
              description:
                "Operation mode for persistence. _PERSISTENCE_MODE_ must be one of:",
              args: {
                name: "PERSISTENCE_MODE",
                suggestions: ["aof", "disabled", "rdb"],
              },
            },
            optProject,
            optQuiet,
            optRdbSnapshotPeriod,
            {
              name: "--rdb-snapshot-start-time",
              description:
                "Date and time of the first snapshot in the ISO 1801 format, and alignment time for future snapshots. For example, 2024-01-01T01:00:00Z. If not specified, the current time will be used",
              args: {
                name: "RDB_SNAPSHOT_START_TIME",
                description: "String",
              },
            },
            optRegion4,
            {
              name: "--remove-labels",
              description:
                "List of label keys to remove. If a label does not exist it is silently ignored. If `--update-labels` is also specified then `--update-labels` is applied first",
              args: {
                name: "KEY",
                description: "List",
              },
            },
            {
              name: "--remove-redis-config",
              description:
                "A list of Redis Cluster config parameters to remove. Removing a non-existent config parameter is silently ignored",
              args: {
                name: "KEY",
                description: "List",
              },
            },
            {
              name: "--replica-count",
              description: "The replica count of each shard",
              args: {
                name: "REPLICA_COUNT",
                description: "Int",
              },
            },
            {
              name: "--rotate-server-certificate",
              description:
                "Rotate the server certificates for the cluster. This is allowed only for clusters using a customer-managed CA",
            },
            {
              name: "--shard-count",
              description: "The shard count of the cluster",
              args: {
                name: "SHARD_COUNT",
                description: "Int",
              },
            },
            {
              name: "--simulate-maintenance-event",
              description: "Trigger a simulation for maintenance event",
            },
            optTraceToken,
            {
              name: "--update-labels",
              description:
                "List of label KEY=VALUE pairs to update. If a label exists, its value is modified. Otherwise, a new label is created",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--update-redis-config",
              description:
                "A list of Redis Cluster config KEY=VALUE pairs to update. If a config parameter is already set, its value is modified; otherwise a new Redis config parameter is added",
              args: {
                name: "KEY=VALUE",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster",
          },
        },
      ],
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        optProject,
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "instances",
      description: "Manage Cloud Memorystore Redis instances",
      subcommands: [
        {
          name: "create",
          description: "Create a Memorystore Redis instance",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--alternative-zone",
              description:
                "A secondary zone for the Redis instance. Only applicable to the standard tier. This protects the instance against zonal failures by provisioning it across two zones. If provided, alternative zone must be a different zone from the one provided through `--zone`",
              args: {
                name: "ALTERNATIVE_ZONE",
                description: "String",
              },
            },
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--connect-mode",
              description:
                "Network connection mode used by instances. _CONNECT_MODE_ must be one of: *connect-mode-unspecified*, *direct-peering*, *private-service-access*",
              args: {
                name: "CONNECT_MODE",
                suggestions: [
                  "connect-mode-unspecified",
                  "direct-peering",
                  "private-service-access",
                ],
              },
            },
            {
              name: "--customer-managed-key",
              description:
                "The KMS key reference that you want to use to encrypt the data at rest for this Redis instance. If this is provided, CMEK is enabled",
              args: {
                name: "CUSTOMER_MANAGED_KEY",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "A human-readable name for the instance",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--enable-auth",
              description:
                "Enables Redis AUTH for the instance. If omitted AUTH is disabled",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--labels",
              description: "List of label KEY=VALUE pairs to add",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optLogHttp,
            {
              name: "--maintenance-window-day",
              description:
                "Day of week for maintenance window, in UTC time zone. MAINTENANCE_WINDOW_DAY must be one of: SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY. _MAINTENANCE_WINDOW_DAY_ must be one of: *day-of-week-unspecified*, *friday*, *monday*, *saturday*, *sunday*, *thursday*, *tuesday*, *wednesday*",
              args: {
                name: "MAINTENANCE_WINDOW_DAY",
                suggestions: [
                  "day-of-week-unspecified",
                  "friday",
                  "monday",
                  "saturday",
                  "sunday",
                  "thursday",
                  "tuesday",
                  "wednesday",
                ],
              },
            },
            {
              name: "--maintenance-window-hour",
              description:
                "Hour of day (0 to 23) for maintenance window, in UTC time zone",
              args: {
                name: "MAINTENANCE_WINDOW_HOUR",
                description: "Int",
              },
            },
            {
              name: "--network",
              description:
                "The name of the Google Compute Engine network to which the instance will be connected. If left unspecified, the default network will be used",
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            optNoAsync,
            {
              name: "--no-enable-auth",
              description:
                "Enables Redis AUTH for the instance. If omitted AUTH is disabled",
              hidden: true,
            },
            {
              name: "--persistence-mode",
              description:
                "Operation mode for automated persistence. _PERSISTENCE_MODE_ must be one of:",
              args: {
                name: "PERSISTENCE_MODE",
                suggestions: ["disabled", "rdb"],
              },
            },
            optProject,
            optQuiet,
            optRdbSnapshotPeriod,
            {
              name: "--rdb-snapshot-start-time",
              description:
                "Date and time of the first snapshot in the ISO 1801 format, and alignment time for future snapshots. For example, 2022-11-02T03:00:00Z",
              args: {
                name: "RDB_SNAPSHOT_START_TIME",
                description: "String",
              },
            },
            {
              name: "--read-replicas-mode",
              description:
                "Read replicas mode used by the instance. Only works against standard tier instances with 5GB and above provisioned capacity. _READ_REPLICAS_MODE_ must be one of:",
              args: {
                name: "READ_REPLICAS_MODE",
                suggestions: [
                  "read-replicas-disabled",
                  "read-replicas-enabled",
                ],
              },
            },
            {
              name: "--redis-config",
              description:
                "A list of Redis config KEY=VALUE pairs to set on the instance according to http://redis.io/topics/config. Currently, the only supported parameters are:",
              args: {
                name: "KEY=VALUE",
              },
            },
            {
              name: "--redis-version",
              description:
                "The version of Redis software. _VERSION_ must be one of:",
              args: {
                name: "VERSION",
                description: "String",
                suggestions: [
                  "redis_3_2",
                  "redis_4_0",
                  "redis_5_0",
                  "redis_6_x",
                  "redis_7_0",
                  "redis_7_2",
                ],
              },
            },
            optRegion5,
            {
              name: "--replica-count",
              description: "The replica count of the instance",
              args: {
                name: "REPLICA_COUNT",
                description: "Int",
              },
            },
            {
              name: "--reserved-ip-range",
              description:
                "For DIRECT_PEERING mode, the CIDR range of internal addresses that are reserved for this instance. Range must be unique and non-overlapping with existing subnets in an authorized network. For PRIVATE_SERVICE_ACCESS mode, the name of an IP address range allocated for the private service access connection. If not provided, the service will choose an unused /29 block, for example, 10.0.0.0/29 or 192.168.0.0/29. If READ_REPLICAS_ENABLED is used for the --read-replicas-mode flag, then the block size required for this flag is /28",
              args: {
                name: "RESERVED_IP_RANGE",
                description: "String",
              },
            },
            {
              name: "--size",
              description:
                "The memory size of the instance in GiB. If not provided, size of 1 GiB will be used",
              args: {
                name: "SIZE",
                description: "Int",
              },
            },
            {
              name: "--tags",
              description: "List of tag KEY=VALUE pairs to add",
              hidden: true,
              args: {
                name: "KEY=VALUE",
              },
            },
            {
              name: "--tier",
              description:
                "The service tier of the instance. _TIER_ must be one of:",
              args: {
                name: "TIER",
                suggestions: ["basic", "standard"],
              },
            },
            optTraceToken,
            {
              name: "--transit-encryption-mode",
              description:
                "Transit encryption mode used by the instance. _TRANSIT_ENCRYPTION_MODE_ must be one of:",
              args: {
                name: "TRANSIT_ENCRYPTION_MODE",
                suggestions: ["disabled", "server-authentication"],
              },
            },
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--zone",
              description:
                "The zone of the Redis instance. If not provided the service will pick a random zone in the region. For the standard tier, instances will be created across two zones for protection against zonal failures. So if --alternative-zone is also provided, it must be different from --zone",
              args: {
                name: "ZONE",
                description: "String",
              },
            },
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "delete",
          description: "Delete a Redis instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRegion5,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "describe",
          description: "Show metadata for a Memorystore Redis instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optProject,
            optQuiet,
            optRegion5,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "export",
          description:
            "Export data from a Memorystore Redis instance to Google Cloud Storage",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRegion5,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "DESTINATION",
              description:
                "The Cloud Storage object path to export the instance to. Must have the redis DB file extension *.rdb*",
            },
            {
              name: "INSTANCE",
              description:
                "ID of the instance or fully qualified identifier for the instance",
            },
          ],
        },
        {
          name: "failover",
          description:
            "Failover a standard tier Cloud Memorystore for Redis instance from the master node to its replica",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--data-protection-mode",
              description:
                "Data protection mode to use for the failover. If not specified, defaults to 'limited-data-loss'. _DATA_PROTECTION_MODE_ must be one of:",
              args: {
                name: "DATA_PROTECTION_MODE",
                suggestions: ["force-data-loss", "limited-data-loss"],
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRegion5,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "get-auth-string",
          description: "Show AUTH string for a Memorystore Redis instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optProject,
            optQuiet,
            optRegion5,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "import",
          description:
            "Import data to a Memorystore Redis instance from Google Cloud Storage",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRegion5,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "SOURCE",
              description:
                "The Cloud Storage object path to import the instance from. Must have the redis DB file extension *.rdb*",
            },
            {
              name: "INSTANCE",
              description:
                "ID of the instance or fully qualified identifier for the instance",
            },
          ],
        },
        {
          name: "list",
          description: "List Memorystore Redis instances",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLimit,
            optLogHttp,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optRegion,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "reschedule-maintenance",
          description: "Reschedule maintenance window for a Redis instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRegion5,
            {
              name: "--reschedule-type",
              description:
                "Reschedule type to use for the reschedule maintenance window. Reschedule Type must be one of:IMMEDIATE, NEXT-AVAILABLE-WINDOW, or SPECIFIC-TIME. _RESCHEDULE_TYPE_ must be one of:",
              priority: 100,
              args: {
                name: "RESCHEDULE_TYPE",
                suggestions: [
                  "immediate",
                  "next-available-window",
                  "specific-time",
                ],
              },
            },
            {
              name: "--schedule-time",
              description:
                "Time in RFC3339 format, for example: 2012-11-15T16:19:00.094Z",
              args: {
                name: "SCHEDULE_TIME",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "update",
          description: "Update Memorystore Redis instances",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
            },
            optConfiguration,
            {
              name: "--display-name",
              description: "A human-readable name for the instance",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--enable-auth",
              description: "Enables Redis AUTH for the instance",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            {
              name: "--maintenance-version",
              description:
                "Specifies which maintenance version to apply to your instance during self-service maintenance. To view the available maintenance versions for your instance, run `gcloud redis instances describe [INSTANCE_ID]`. Acceptable values for this flag are either `current_default` or one of the specific versions listed by the describe command. If you pass the value `current_default`, the Memorystore updates to the most recent available maintenance version during self service maintenance",
              args: {
                name: "MAINTENANCE_VERSION",
                description: "String",
              },
            },
            {
              name: "--maintenance-window-any",
              description: "Removes the user-specified maintenance window",
            },
            {
              name: "--maintenance-window-day",
              description:
                "Day of week for maintenance window, in UTC time zone. MAINTENANCE_WINDOW_DAY must be one of: SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY. _MAINTENANCE_WINDOW_DAY_ must be one of: *day-of-week-unspecified*, *friday*, *monday*, *saturday*, *sunday*, *thursday*, *tuesday*, *wednesday*",
              args: {
                name: "MAINTENANCE_WINDOW_DAY",
                suggestions: [
                  "day-of-week-unspecified",
                  "friday",
                  "monday",
                  "saturday",
                  "sunday",
                  "thursday",
                  "tuesday",
                  "wednesday",
                ],
              },
            },
            {
              name: "--maintenance-window-hour",
              description:
                "Hour of day (0 to 23) for maintenance window, in UTC time zone",
              args: {
                name: "MAINTENANCE_WINDOW_HOUR",
                description: "Int",
              },
            },
            optNoAsync,
            {
              name: "--no-clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
              hidden: true,
            },
            {
              name: "--no-enable-auth",
              description: "Enables Redis AUTH for the instance",
              hidden: true,
            },
            {
              name: "--no-maintenance-window-any",
              description: "Removes the user-specified maintenance window",
              hidden: true,
            },
            {
              name: "--persistence-mode",
              description:
                "Operation mode for automated persistence. _PERSISTENCE_MODE_ must be one of:",
              args: {
                name: "PERSISTENCE_MODE",
                suggestions: ["disabled", "rdb"],
              },
            },
            optProject,
            optQuiet,
            {
              name: "--rdb-snapshot-period",
              description:
                "The attempted period between RDB snapshots. _RDB_SNAPSHOT_PERIOD_ must be one of:",
              args: {
                name: "RDB_SNAPSHOT_PERIOD",
                suggestions: ["12h", "1h", "24h", "6h"],
              },
            },
            {
              name: "--rdb-snapshot-start-time",
              description:
                "Date and time of the first snapshot in the ISO 1801 format, and alignment time for future snapshots. For example, 2022-11-02T03:00:00Z",
              args: {
                name: "RDB_SNAPSHOT_START_TIME",
                description: "String",
              },
            },
            {
              name: "--read-replicas-mode",
              description:
                "Read replicas mode used by the instance. Only works against standard tier instances with 5GB and above provisioned capacity and Redis version 5.0 and above. This is an irreversible update i.e. Read replicas can not be disabled for the instance once it is enabled. Also this update is exclusive and cannot be clubbed with other update operations. _READ_REPLICAS_MODE_ must be one of:",
              args: {
                name: "READ_REPLICAS_MODE",
                suggestions: [
                  "read-replicas-disabled",
                  "read-replicas-enabled",
                ],
              },
            },
            optRegion5,
            {
              name: "--remove-labels",
              description:
                "List of label keys to remove. If a label does not exist it is silently ignored. If `--update-labels` is also specified then `--update-labels` is applied first",
              args: {
                name: "KEY",
                description: "List",
              },
            },
            {
              name: "--remove-redis-config",
              description:
                "A list of Redis config parameters to remove. Removing a non-existent config parameter is silently ignored",
              args: {
                name: "KEY",
                description: "List",
              },
            },
            {
              name: "--replica-count",
              description:
                "The replica count of the instance. Valid from 0 to 5",
              args: {
                name: "REPLICA_COUNT",
                description: "Int",
              },
            },
            {
              name: "--secondary-ip-range",
              description:
                "Required only when read-replicas-mode is enabled on the instance. The CIDR range of internal addresses that are reserved for this instance. For example, 10.0.0.0/28 or 192.168.0.0/28. Range must be unique and non-overlapping with existing ranges in the network. If value 'auto' passed, the service will automatically pick an available range",
              args: {
                name: "SECONDARY_IP_RANGE",
                description: "String",
              },
            },
            {
              name: "--size",
              description: "The memory size of the instance in GiB",
              args: {
                name: "SIZE",
                description: "Int",
              },
            },
            optTraceToken,
            {
              name: "--update-labels",
              description:
                "List of label KEY=VALUE pairs to update. If a label exists, its value is modified. Otherwise, a new label is created",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--update-redis-config",
              description:
                "A list of Redis config KEY=VALUE pairs to update according to http://cloud.google.com/memorystore/docs/reference/redis-configs. If a config parameter is already set, its value is modified; otherwise a new Redis config parameter is added. Currently, the only supported parameters are:",
              args: {
                name: "KEY=VALUE",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "upgrade",
          description:
            "Upgrade a Memorystore for Redis instance to a specified Redis version",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--redis-version",
              description:
                "Target version of Redis software. _VERSION_ must be one of:",
              priority: 100,
              args: {
                name: "VERSION",
                description: "String",
                suggestions: [
                  "redis_4_0",
                  "redis_5_0",
                  "redis_6_x",
                  "redis_7_0",
                  "redis_7_2",
                ],
              },
            },
            optRegion5,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
      ],
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        optProject,
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "operations",
      description: "Manage Cloud Memorystore Redis operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a Memorystore Redis import or export operation",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--region",
              description:
                "The name of the Redis region of the operation. Overrides the default redis/region property value for this command invocation",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "describe",
          description: "Show metadata for a Memorystore Redis operation",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--region",
              description:
                "The name of the Redis region of the operation. Overrides the default redis/region property value for this command invocation",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "list",
          description: "List Memorystore Redis operations",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLimit,
            optLogHttp,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optRegion,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
      ],
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        optProject,
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "regions",
      description: "Manage Cloud Memorystore Redis regions",
      subcommands: [
        {
          name: "describe",
          description: "Show metadata for a Memorystore Redis region",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REGION",
            description:
              "ID of the region or fully qualified identifier for the region",
          },
        },
        {
          name: "list",
          description: "List Memorystore Redis regions",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLimit,
            optLogHttp,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
      ],
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        optProject,
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "zones",
      description: "Manage Cloud Memorystore Redis zones",
      subcommands: [
        {
          name: "list",
          description: "List Memorystore Redis zones",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLimit,
            optLogHttp,
            optPageSize,
            optProject,
            optQuiet,
            {
              name: "--region",
              description:
                'If provided, returns only resources from the given region. Use region ID only, not the full URI of the region. This flag is the equivalent of: `--filter="region:REGION"`. Run `gcloud topic filters` for more information',
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
      ],
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        optProject,
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
  ],
  options: [
    optAccessTokenFile,
    optAccount,
    optBillingProject,
    optConfiguration,
    optFlagsFile,
    optFlatten,
    optFormat,
    {
      name: "--help",
      description: "Display detailed help",
    },
    optImpersonateServiceAccount,
    optLogHttp,
    optProject,
    optQuiet,
    optTraceToken,
    optUserOutputEnabled,
    optVerbosity,
  ],
};

export default completionSpec;
