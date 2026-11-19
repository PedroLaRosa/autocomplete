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

const optBackupSchedule: Fig.Option = {
  name: "--backup-schedule",
  description: "The backup schedule to operate on",
  priority: 100,
  args: {
    name: "BACKUP_SCHEDULE",
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

const optCollectionGroup: Fig.Option = {
  name: "--collection-group",
  description: "Collection group of the field",
  args: {
    name: "COLLECTION_GROUP",
    description: "String",
  },
};

const optCollectionIds: Fig.Option = {
  name: "--collection-ids",
  description:
    "List specifying which collection groups will be included in the operation. When omitted, all collection groups are included",
  args: {
    name: "COLLECTION_GROUP_IDS",
    description: "List",
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

const optDatabase: Fig.Option = {
  name: "--database",
  description: "Database of the collection group",
  args: {
    name: "DATABASE",
    description: "String",
  },
};

const optDatabase2: Fig.Option = {
  name: "--database",
  description: "Database of the field",
  args: {
    name: "DATABASE",
    description: "String",
  },
};

const optDatabase3: Fig.Option = {
  name: "--database",
  description: "The database to operate on",
  priority: 100,
  args: {
    name: "DATABASE",
    description: "String",
  },
};

const optDatabase4: Fig.Option = {
  name: "--database",
  description: "The database to operate on. The default value is `(default)`",
  args: {
    name: "DATABASE",
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

const optKmsKeyName: Fig.Option = {
  name: "--kms-key-name",
  description:
    "The resource ID of a Cloud KMS key. If set, the database created will be a Customer-Managed Encryption Key (CMEK) database encrypted with this key. This feature is allowlist only in initial launch",
  args: {
    name: "KMS_KEY_NAME",
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

const optLocation: Fig.Option = {
  name: "--location",
  description:
    "The location to operate on. Available locations are listed at https://cloud.google.com/firestore/docs/locations",
  priority: 100,
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLogHttp: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};

const optNamespaceIds: Fig.Option = {
  name: "--namespace-ids",
  description:
    "List specifying which namespaces will be included in the operation. When omitted, all namespaces are included",
  args: {
    name: "NAMESPACE_IDS",
    description: "List",
  },
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

const optSortBy: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The default order is ascending. Prefix a field with ``~'' for descending order on that field. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: {
    name: "FIELD",
    description: "List",
  },
};

const optTags: Fig.Option = {
  name: "--tags",
  description:
    "Tags to attach to the destination database. Example: --tags=key1=value1,key2=value2",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
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
  name: "firestore",
  description: "Manage your Cloud Firestore resources",
  subcommands: [
    {
      name: "backups",
      description: "The set of commands to manage backups for Cloud Firestore",
      subcommands: [
        {
          name: "delete",
          description: "Deletes a Cloud Firestore backup",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--backup",
              description: "The backup to operate on",
              priority: 100,
              args: {
                name: "BACKUP",
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
            optLocation,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "describe",
          description: "Retrieves information about a Cloud Firestore backup",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--backup",
              description: "The backup to operate on",
              priority: 100,
              args: {
                name: "BACKUP",
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
            optLocation,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "list",
          description: "List backups available to Cloud Firestore",
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
            {
              name: "--location",
              description:
                "The location to operate on. Available locations are listed at https://cloud.google.com/firestore/docs/locations",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
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
        {
          name: "schedules",
          description:
            "Manage the backup schedules for a Cloud Firestore Database",
          subcommands: [
            {
              name: "create",
              description: "Creates a Cloud Firestore backup schedule",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optDatabase3,
                {
                  name: "--day-of-week",
                  description:
                    "The day of week (UTC time zone) of when backups are created",
                  args: {
                    name: "DAY_OF_WEEK",
                    suggestions: [
                      "SUN",
                      "MON",
                      "TUE",
                      "WED",
                      "THU",
                      "FRI",
                      "SAT",
                    ],
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
                optProject,
                optQuiet,
                {
                  name: "--recurrence",
                  description: "The recurrence settings of a backup schedule",
                  priority: 100,
                  args: {
                    name: "RECURRENCE",
                    description: "String",
                  },
                },
                {
                  name: "--retention",
                  description:
                    "The rention of the backup. At what relative time in the future, compared to the creation time of the backup should the backup be deleted, i.e. keep backups for 7 days",
                  priority: 100,
                  args: {
                    name: "RETENTION",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "delete",
              description: "Deletes a Cloud Firestore backup schedule",
              options: [
                optAccessTokenFile,
                optAccount,
                optBackupSchedule,
                optBillingProject,
                optConfiguration,
                optDatabase3,
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
              name: "describe",
              description: "Describes a Cloud Firestore backup schedule",
              options: [
                optAccessTokenFile,
                optAccount,
                optBackupSchedule,
                optBillingProject,
                optConfiguration,
                optDatabase3,
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
              name: "list",
              description:
                "Lists backup schedules under a Cloud Firestore database",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optDatabase3,
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
            {
              name: "update",
              description: "Updates a Cloud Firestore backup schedule",
              options: [
                optAccessTokenFile,
                optAccount,
                optBackupSchedule,
                optBillingProject,
                optConfiguration,
                optDatabase3,
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
                  name: "--retention",
                  description:
                    "The rention of the backup. At what relative time in the future, compared to the creation time of the backup should the backup be deleted, i.e. keep backups for 7 days",
                  args: {
                    name: "RETENTION",
                  },
                },
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
    },
    {
      name: "bulk-delete",
      description: "Bulk delete Cloud Firestore documents",
      options: [
        optAccessTokenFile,
        optAccount,
        optAsync,
        optBillingProject,
        optCollectionIds,
        optConfiguration,
        optDatabase4,
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        optNamespaceIds,
        optNoAsync,
        optProject,
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "databases",
      description: "Manage Creation of Cloud Firestore in Native mode Database",
      subcommands: [
        {
          name: "clone",
          description: "Clone a Google Cloud Firestore database from another",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--destination-database",
              description:
                "Destination database to clone to. Destination database will be created in the same location as the source database",
              priority: 100,
              args: {
                name: "DESTINATION_DATABASE",
                description: "String",
              },
            },
            {
              name: "--encryption-type",
              description:
                "The encryption type of the destination database. _ENCRYPTION_TYPE_ must be one of: *use-source-encryption*, *customer-managed-encryption*, *google-default-encryption*",
              priority: 100,
              args: {
                name: "ENCRYPTION_TYPE",
                description: "String",
                suggestions: [
                  "use-source-encryption",
                  "customer-managed-encryption",
                  "google-default-encryption",
                ],
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
            optKmsKeyName,
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--snapshot-time",
              description:
                "Snapshot time at which to clone. This must be a whole minute, in the past, and not earlier than the source database's earliest_version_time. Additionally, if older than one hour in the past, PITR must be enabled on the source database",
              priority: 100,
              args: {
                name: "SNAPSHOT_TIME",
                description: "String",
              },
            },
            {
              name: "--source-database",
              description: "The source database to clone from",
              priority: 100,
              args: {
                name: "SOURCE_DATABASE",
                description: "String",
              },
            },
            optTags,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "connection-string",
          description:
            "Prints the mongo connection string for the given Firestore database",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--auth",
              description: "The auth configuration for the connection string",
              args: {
                name: "AUTH",
                description: "String",
                suggestions: [
                  "none",
                  "gce-vm",
                  "access-token",
                  "scram-sha-256",
                ],
              },
            },
            optBillingProject,
            optConfiguration,
            optDatabase3,
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
            {
              name: "--validate",
              description:
                "Validate the specified connection string for the current database. This command checks that the connection string is well formed, contains the required parameters, and specifies correct configuration values for the current database",
              args: {
                name: "VALIDATE",
                description: "String",
              },
            },
            optVerbosity,
          ],
        },
        {
          name: "create",
          description:
            "Create a Google Cloud Firestore database via Firestore API",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--concurrency-mode",
              description:
                "The concurrency control mode to use for this database",
              args: {
                name: "CONCURRENCY_MODE",
                description: "String",
                suggestions: ["optimistic", "pessimistic"],
              },
            },
            optConfiguration,
            {
              name: "--database",
              description:
                "The ID to use for the database, which will become the final component of the database's resource name. If database ID is not provided, (default) will be used as database ID",
              args: {
                name: "DATABASE",
                description: "String",
              },
            },
            {
              name: "--delete-protection",
              description:
                "Whether to enable delete protection on the created database",
            },
            {
              name: "--edition",
              description:
                "The edition of the database. _EDITION_ must be one of: *standard*, *enterprise*",
              args: {
                name: "EDITION",
                description: "String",
                suggestions: ["standard", "enterprise"],
              },
            },
            {
              name: "--enable-firestore-data-access",
              description:
                "Whether to enable Firestore API Data Access on the created database",
            },
            {
              name: "--enable-mongodb-compatible-data-access",
              description:
                "Whether to enable MongoDB Compatible API Data Access on the created database",
            },
            {
              name: "--enable-pitr",
              description:
                "Whether to enable Point In Time Recovery (PITR) on the created database",
            },
            {
              name: "--enable-realtime-updates",
              description:
                "Whether to enable Realtime Updates feature on the created database",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKmsKeyName,
            optLocation,
            optLogHttp,
            {
              name: "--no-delete-protection",
              description:
                "Whether to enable delete protection on the created database",
              hidden: true,
            },
            {
              name: "--no-enable-firestore-data-access",
              description:
                "Whether to enable Firestore API Data Access on the created database",
              hidden: true,
            },
            {
              name: "--no-enable-mongodb-compatible-data-access",
              description:
                "Whether to enable MongoDB Compatible API Data Access on the created database",
              hidden: true,
            },
            {
              name: "--no-enable-pitr",
              description:
                "Whether to enable Point In Time Recovery (PITR) on the created database",
              hidden: true,
            },
            {
              name: "--no-enable-realtime-updates",
              description:
                "Whether to enable Realtime Updates feature on the created database",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTags,
            optTraceToken,
            {
              name: "--type",
              description:
                "The type of the database. _TYPE_ must be one of: *firestore-native*, *datastore-mode*",
              args: {
                name: "TYPE",
                description: "String",
                suggestions: ["firestore-native", "datastore-mode"],
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "delete",
          description: "Delete a Google Cloud Firestore database",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDatabase3,
            {
              name: "--etag",
              description:
                "The current etag of the Database. If an etag is provided and does not match the current etag of the database, deletion will be blocked and a FAILED_PRECONDITION error will be returned",
              args: {
                name: "ETAG",
                description: "String",
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
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "describe",
          description: "Describes information about a Cloud Firestore database",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDatabase4,
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
          name: "list",
          description: "Lists all Firestore databases under the project",
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
            {
              name: "--no-show-deleted",
              description: "Show the deleted databases",
              hidden: true,
            },
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            {
              name: "--show-deleted",
              description: "Show the deleted databases",
            },
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "ping",
          description:
            "Times the connection and ping time for a Firestore with MongoDB compatibility database",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDatabase3,
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
          name: "restore",
          description: "Restores a Cloud Firestore database from a backup",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--destination-database",
              description:
                "Destination database to restore to. Destination database will be created in the same location as the source backup",
              priority: 100,
              args: {
                name: "DESTINATION_DATABASE",
                description: "String",
              },
            },
            {
              name: "--encryption-type",
              description:
                "The encryption type of the destination database. _ENCRYPTION_TYPE_ must be one of: *use-source-encryption*, *customer-managed-encryption*, *google-default-encryption*",
              priority: 100,
              args: {
                name: "ENCRYPTION_TYPE",
                description: "String",
                suggestions: [
                  "use-source-encryption",
                  "customer-managed-encryption",
                  "google-default-encryption",
                ],
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
            optKmsKeyName,
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--source-backup",
              description: "The source backup to restore from",
              priority: 100,
              args: {
                name: "SOURCE_BACKUP",
                description: "String",
              },
            },
            optTags,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description:
            "Update the database configuration of a Cloud Firestore database",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--concurrency-mode",
              description:
                "The concurrency control mode to use for this database. _CONCURRENCY_MODE_ must be one of: *optimistic*, *pessimistic*",
              args: {
                name: "CONCURRENCY_MODE",
                suggestions: ["optimistic", "pessimistic"],
              },
            },
            optConfiguration,
            {
              name: "--database",
              description:
                "ID of the database or fully qualified identifier for the database",
              args: {
                name: "DATABASE",
                description: "String",
              },
            },
            {
              name: "--delete-protection",
              description:
                "If set to true, the Firestore database will be updated to have database delete protection enabled. A database with delete protection enabled cannot be deleted. You can disable the delete protection via --no-delete-protection",
            },
            {
              name: "--enable-pitr",
              description:
                "If set to true, the Firestore database will be updated to enable Point In Time Recovery. You can disable the this feature via --no-enable-pitr",
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
            {
              name: "--no-delete-protection",
              description:
                "If set to true, the Firestore database will be updated to have database delete protection enabled. A database with delete protection enabled cannot be deleted. You can disable the delete protection via --no-delete-protection",
              hidden: true,
            },
            {
              name: "--no-enable-pitr",
              description:
                "If set to true, the Firestore database will be updated to enable Point In Time Recovery. You can disable the this feature via --no-enable-pitr",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            {
              name: "--type",
              description:
                "The database type. _TYPE_ must be one of: *datastore-mode*, *firestore-native*",
              args: {
                name: "TYPE",
                suggestions: ["datastore-mode", "firestore-native"],
              },
            },
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
      name: "export",
      description: "Export Cloud Firestore documents to Google Cloud Storage",
      options: [
        optAccessTokenFile,
        optAccount,
        optAsync,
        optBillingProject,
        optCollectionIds,
        optConfiguration,
        optDatabase4,
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        optNamespaceIds,
        optNoAsync,
        optProject,
        optQuiet,
        {
          name: "--snapshot-time",
          description: "The version of the database to export",
          args: {
            name: "SNAPSHOT_TIME",
            description: "String",
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "OUTPUT_URI_PREFIX",
        description:
          "Location where the export files will be stored. Must be a valid Google Cloud Storage bucket with an optional path prefix",
      },
    },
    {
      name: "fields",
      description: "Manage field metadata for Cloud Firestore",
      subcommands: [
        {
          name: "ttls",
          description: "Manage Time-to-live metadata for Cloud Firestore",
          subcommands: [
            {
              name: "list",
              description:
                "List all fields used as a Time To Live expiration setting",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--collection-group",
                  description:
                    "ID of the collection group or fully qualified identifier for the collection group",
                  args: {
                    name: "COLLECTION_GROUP",
                    description: "String",
                  },
                },
                optConfiguration,
                optDatabase,
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
            {
              name: "update",
              description: "Update the TTL configuration of the given field",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optCollectionGroup,
                optConfiguration,
                optDatabase2,
                {
                  name: "--disable-ttl",
                  description:
                    "Set to make this field no longer the TTL for its collection group",
                },
                {
                  name: "--enable-ttl",
                  description:
                    "Set to enable this field as the TTL for its collection group",
                  priority: 100,
                },
                {
                  name: "--expiration-offset",
                  description:
                    "The offset, relative to the timestamp value from the TTL-enabled field, used to determine the document's expiration time. If unset, defaults to 0",
                  args: {
                    name: "EXPIRATION_OFFSET",
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
                {
                  name: "--no-disable-ttl",
                  description:
                    "Set to make this field no longer the TTL for its collection group",
                  hidden: true,
                },
                {
                  name: "--no-enable-ttl",
                  description:
                    "Set to enable this field as the TTL for its collection group",
                  hidden: true,
                  priority: 100,
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "FIELD",
                description:
                  "ID of the field or fully qualified identifier for the field",
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
      name: "import",
      description: "Import Cloud Firestore documents from Google Cloud Storage",
      options: [
        optAccessTokenFile,
        optAccount,
        optAsync,
        optBillingProject,
        optCollectionIds,
        optConfiguration,
        optDatabase4,
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        optNamespaceIds,
        optNoAsync,
        optProject,
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "INPUT_URI_PREFIX",
        description: "Location of the import files",
      },
    },
    {
      name: "indexes",
      description: "Manage indexes for Cloud Firestore",
      subcommands: [
        {
          name: "composite",
          description: "Manage composite indexes for Cloud Firestore",
          subcommands: [
            {
              name: "create",
              description: "Create a new composite index",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--api-scope",
                  description:
                    "Api scope the index applies to. _API_SCOPE_ must be one of: *any-api*, *datastore-mode-api*, *mongodb-compatible-api*",
                  args: {
                    name: "API_SCOPE",
                    suggestions: [
                      "any-api",
                      "datastore-mode-api",
                      "mongodb-compatible-api",
                    ],
                  },
                },
                optAsync,
                optBillingProject,
                {
                  name: "--collection-group",
                  description:
                    "ID of the collection group or fully qualified identifier for the collection group",
                  priority: 100,
                  args: {
                    name: "COLLECTION_GROUP",
                    description: "String",
                  },
                },
                optConfiguration,
                optDatabase,
                {
                  name: "--density",
                  description:
                    "Density of the index. _DENSITY_ must be one of: *dense*, *density-unspecified*, *sparse-all*, *sparse-any*",
                  args: {
                    name: "DENSITY",
                    suggestions: [
                      "dense",
                      "density-unspecified",
                      "sparse-all",
                      "sparse-any",
                    ],
                  },
                },
                {
                  name: "--field-config",
                  description: "Required, Configuration for an index field",
                  priority: 100,
                  args: {
                    name: "FIELD_CONFIG",
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
                {
                  name: "--multikey",
                  description:
                    "Optional. Whether the index is multikey. By default, the index is not multikey. For non-multikey indexes, none of the paths in the index definition reach or traverse an array, except via an explicit array index. For multikey indexes, at most one of the paths in the index definition reach or traverse an array, except via an explicit array index. Violations will result in errors. Note this field only applies to index with 'MONGODB_COMPATIBLE_API' ApiScope",
                },
                optNoAsync,
                {
                  name: "--no-multikey",
                  description:
                    "Optional. Whether the index is multikey. By default, the index is not multikey. For non-multikey indexes, none of the paths in the index definition reach or traverse an array, except via an explicit array index. For multikey indexes, at most one of the paths in the index definition reach or traverse an array, except via an explicit array index. Violations will result in errors. Note this field only applies to index with 'MONGODB_COMPATIBLE_API' ApiScope",
                  hidden: true,
                },
                {
                  name: "--no-unique",
                  description:
                    "Optional. Whether it is an unique index. Unique index ensures all values for the indexed field(s) are unique across documents",
                  hidden: true,
                },
                optProject,
                {
                  name: "--query-scope",
                  description:
                    "Query scope the index applies to. _QUERY_SCOPE_ must be one of: *collection*, *collection-group*, *collection-recursive*",
                  args: {
                    name: "QUERY_SCOPE",
                    suggestions: [
                      "collection",
                      "collection-group",
                      "collection-recursive",
                    ],
                  },
                },
                optQuiet,
                optTraceToken,
                {
                  name: "--unique",
                  description:
                    "Optional. Whether it is an unique index. Unique index ensures all values for the indexed field(s) are unique across documents",
                },
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "delete",
              description: "Delete the given composite index",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--database",
                  description: "Database of the composite index",
                  args: {
                    name: "DATABASE",
                    description: "String",
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
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "INDEX",
                description:
                  "ID of the composite index or fully qualified identifier for the composite index",
              },
            },
            {
              name: "describe",
              description: "Describe the given composite index",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--database",
                  description: "Database of the composite index",
                  args: {
                    name: "DATABASE",
                    description: "String",
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
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "INDEX",
                description:
                  "ID of the composite index or fully qualified identifier for the composite index",
              },
            },
            {
              name: "list",
              description: "List composite indexes",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optDatabase,
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
          name: "fields",
          description: "Manage single-field indexes for Cloud Firestore",
          subcommands: [
            {
              name: "describe",
              description:
                "Describe the index configuration of the given field",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCollectionGroup,
                optConfiguration,
                optDatabase2,
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
                name: "FIELD",
                description:
                  "ID of the field or fully qualified identifier for the field",
                isOptional: true,
              },
            },
            {
              name: "list",
              description: "List fields with non-default index settings",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--collection-group",
                  description:
                    "ID of the collection group or fully qualified identifier for the collection group",
                  args: {
                    name: "COLLECTION_GROUP",
                    description: "String",
                  },
                },
                optConfiguration,
                optDatabase,
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
            {
              name: "update",
              description: "Update the index configuration of the given field",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                {
                  name: "--clear-exemption",
                  description:
                    "If provided, the field's current index configuration will be reverted to inherit from its ancestor index configurations",
                },
                optCollectionGroup,
                optConfiguration,
                optDatabase2,
                {
                  name: "--disable-indexes",
                  description:
                    "If provided, the field will no longer be indexed at all",
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
                  name: "--index",
                  description: "An index for the field",
                  isRepeatable: true,
                  args: {
                    name: "KEY=VALUE",
                  },
                },
                optLogHttp,
                optNoAsync,
                {
                  name: "--no-clear-exemption",
                  description:
                    "If provided, the field's current index configuration will be reverted to inherit from its ancestor index configurations",
                  hidden: true,
                },
                {
                  name: "--no-disable-indexes",
                  description:
                    "If provided, the field will no longer be indexed at all",
                  hidden: true,
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "FIELD",
                description:
                  "ID of the field or fully qualified identifier for the field",
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
      name: "locations",
      description:
        "The set of commands to manage Locations for Cloud Firestore",
      subcommands: [
        {
          name: "list",
          description: "List locations available to Google Cloud Firestore",
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
      name: "operations",
      description: "Manage Long Running Operations for Cloud Firestore",
      subcommands: [
        {
          name: "cancel",
          description:
            "Cancel a currently-running Cloud Firestore admin operation",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDatabase4,
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
            name: "NAME",
            description:
              "The unique name of the Operation to cancel, formatted as either the full or relative resource path:",
          },
        },
        {
          name: "delete",
          description: "Delete a completed Cloud Firestore admin operation",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDatabase4,
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
            name: "NAME",
            description:
              "The unique name of the operation to delete, formatted as either the full or relative resource path:",
          },
        },
        {
          name: "describe",
          description:
            "Retrieves information about a Cloud Firestore admin operation",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDatabase4,
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
            name: "NAME",
            description:
              "The unique name of the Operation to retrieve, formatted as either the full or relative resource path:",
          },
        },
        {
          name: "list",
          description:
            "List pending Cloud Firestore admin operations and their status",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDatabase4,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--limit",
              description:
                "Maximum number of resources to list. The default is *100*. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
              args: {
                name: "LIMIT",
                description: "Int",
              },
            },
            optLogHttp,
            optNoUri,
            {
              name: "--page-size",
              description:
                "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is *100*. Paging may be applied before or after *--filter* and *--limit* depending on the service",
              args: {
                name: "PAGE_SIZE",
                description: "Int",
              },
            },
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
      name: "user-creds",
      description: "Manage the user creds for a Cloud Firestore Database",
      subcommands: [
        {
          name: "create",
          description: "Creates a Cloud Firestore user creds",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDatabase3,
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
            name: "USER_CREDS",
            description: "The user creds to operate on",
          },
        },
        {
          name: "delete",
          description: "Deletes a Cloud Firestore user creds",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDatabase3,
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
            name: "USER_CREDS",
            description: "The user creds to operate on",
          },
        },
        {
          name: "describe",
          description: "Describes a Cloud Firestore user creds",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDatabase3,
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
            name: "USER_CREDS",
            description: "The user creds to operate on",
          },
        },
        {
          name: "disable",
          description: "Disables a Cloud Firestore user creds",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDatabase3,
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
            name: "USER_CREDS",
            description: "The user creds to operate on",
          },
        },
        {
          name: "enable",
          description: "Enables a Cloud Firestore user creds",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDatabase3,
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
            name: "USER_CREDS",
            description: "The user creds to operate on",
          },
        },
        {
          name: "list",
          description: "Lists user creds under a Cloud Firestore database",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDatabase3,
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
        {
          name: "reset-password",
          description: "Resets a Cloud Firestore user creds",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDatabase3,
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
            name: "USER_CREDS",
            description: "The user creds to operate on",
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
