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
  description: "The backupCollection id of the backup resource",
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

const optLocation: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location",
  priority: 100,
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation2: Fig.Option = {
  name: "--location",
  description: "The location ID of the operation resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description: "The location id of the aclPolicy resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation4: Fig.Option = {
  name: "--location",
  description: "The location id of the backup resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation5: Fig.Option = {
  name: "--location",
  description: "The location id of the instance resource",
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

const optRequestId: Fig.Option = {
  name: "--request-id",
  description: "Idempotent request UUID",
  args: {
    name: "REQUEST_ID",
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
  name: "memorystore",
  description: "Manage Memorystore resources",
  subcommands: [
    {
      name: "acl-policies",
      description: "Manage Acl Policy resources",
      subcommands: [
        {
          name: "create",
          description: "Create aclPolicies",
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
            optLocation3,
            optLogHttp,
            optProject,
            optQuiet,
            optRequestId,
            {
              name: "--rules",
              description: "Required, The ACL rules within the ACL policy",
              priority: 100,
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
              "ID of the aclPolicy or fully qualified identifier for the aclPolicy",
          },
        },
        {
          name: "delete",
          description: "Delete aclPolicies",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--etag",
              description:
                "Etag of the ACL policy. If this is different from the server's etag, the request will fail with an ABORTED error",
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
            optLocation3,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRequestId,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ACL_POLICY",
            description:
              "ID of the aclPolicy or fully qualified identifier for the aclPolicy",
          },
        },
        {
          name: "describe",
          description: "Describe aclPolicies",
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
            optLocation3,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ACL_POLICY",
            description:
              "ID of the aclPolicy or fully qualified identifier for the aclPolicy",
          },
        },
        {
          name: "list",
          description: "List aclPolicies",
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
            optLocation,
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
            optLocation3,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-clear-rules",
              description: "Clear rules value and set to empty list",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--remove-rules",
              description:
                "Remove existing value from rules list. The ACL rules within the ACL policy",
              args: {
                name: "REMOVE_RULES",
              },
            },
            optRequestId,
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
              "ID of the aclPolicy or fully qualified identifier for the aclPolicy",
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
      name: "backup-collections",
      description: "Manage Backup Collection resources",
      subcommands: [
        {
          name: "backups",
          description: "Manage Backup resources",
          subcommands: [
            {
              name: "delete",
              description: "Delete backups",
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
                optLocation4,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optRequestId,
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
              description: "Describe backups",
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
                optLocation4,
                optLogHttp,
                optProject,
                optQuiet,
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
              description: "Export backups",
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
                  description: 'Google Cloud Storage bucket, like "my-bucket"',
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
                optLocation4,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
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
              description: "List backups",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--backup-collection",
                  description:
                    "ID of the backupCollection or fully qualified identifier for the backupCollection",
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
                {
                  name: "--location",
                  description:
                    "The location id of the backupCollection resource",
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
          name: "describe",
          description: "Describe backupCollections",
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
            {
              name: "--location",
              description: "The location id of the backupCollection resource",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP_COLLECTION",
            description:
              "ID of the backupCollection or fully qualified identifier for the backupCollection",
          },
        },
        {
          name: "list",
          description: "List backupCollections",
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
            optLocation,
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
      name: "instances",
      description: "Manage Instance resources",
      subcommands: [
        {
          name: "backup",
          description: "Backup instances",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--backup-id",
              description:
                "The id of the backup to be created. If not specified, the default value ([YYYYMMDDHHMMSS]_[Shortened Instance UID] is used",
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
            optLocation5,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            {
              name: "--ttl",
              description:
                "TTL for the backup to expire. Value range is 1 day to 100 years. If not specified, the default value is 100 years",
              args: {
                name: "TTL",
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
          name: "create",
          description: "Create a Memorystore instance",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--acl-policy",
              description:
                "ID of the aclPolicy or fully qualified identifier for the aclPolicy",
              priority: 100,
              args: {
                name: "ACL_POLICY",
                description: "String",
              },
            },
            {
              name: "--allow-fewer-zones-deployment",
              description:
                "Allows customers to specify if they are okay with deploying a multi-zone instance in less than 3 zones. Once set, if there is a zonal outage during the instance creation, the instance will only be deployed in 2 zones, and stay within the 2 zones for its lifecycle",
              hidden: true,
            },
            {
              name: "--aof-config-append-fsync",
              description:
                "The fsync mode. _AOF_CONFIG_APPEND_FSYNC_ must be one of:",
              args: {
                name: "AOF_CONFIG_APPEND_FSYNC",
                suggestions: ["always", "every-sec", "never"],
              },
            },
            optAsync,
            {
              name: "--async-instance-endpoints-deletion-enabled",
              description:
                "If true, instance endpoints that are created and registered by customers can be deleted asynchronously. That is, such an instance endpoint can be de-registered before the forwarding rules in the instance endpoint are deleted",
            },
            {
              name: "--authorization-mode",
              description:
                "Authorization mode of the instance. _AUTHORIZATION_MODE_ must be one of:",
              args: {
                name: "AUTHORIZATION_MODE",
                suggestions: ["auth-disabled", "iam-auth"],
              },
            },
            {
              name: "--automated-backup-config-mode",
              description:
                "The automated backup mode. If the mode is disabled, the other fields will be ignored. _AUTOMATED_BACKUP_CONFIG_MODE_ must be one of:",
              args: {
                name: "AUTOMATED_BACKUP_CONFIG_MODE",
                suggestions: ["disabled", "enabled"],
              },
            },
            {
              name: "--automated-backup-config-retention",
              description:
                "How long to keep automated backups before the backups are deleted. The value should be between 1 day and 365 days. If not specified, the default value is 35 days",
              args: {
                name: "AUTOMATED_BACKUP_CONFIG_RETENTION",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--cross-instance-replication-config-role",
              description:
                "The role of the instance in cross instance replication. _CROSS_INSTANCE_REPLICATION_CONFIG_ROLE_ must be one of:",
              priority: 100,
              args: {
                name: "CROSS_INSTANCE_REPLICATION_CONFIG_ROLE",
                suggestions: ["none", "primary", "secondary"],
              },
            },
            {
              name: "--cross-instance-replication-config-secondary-instances",
              description:
                "List of secondary instances that are replicating from this primary instance",
              args: {
                name: "CROSS_INSTANCE_REPLICATION_CONFIG_SECONDARY_INSTANCES",
              },
            },
            {
              name: "--deletion-protection-enabled",
              description: "If set to true deletion of the instance will fail",
            },
            {
              name: "--endpoints",
              description: "Endpoints for the instance",
              args: {
                name: "ENDPOINTS",
              },
            },
            {
              name: "--engine-configs",
              description:
                "User-provided engine configurations for the instance",
              args: {
                name: "ENGINE_CONFIGS",
              },
            },
            {
              name: "--engine-version",
              description: "Engine version of the instance",
              args: {
                name: "ENGINE_VERSION",
                description: "String",
              },
            },
            {
              name: "--fixed-frequency-schedule-start-time-hours",
              description:
                'Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time',
              args: {
                name: "FIXED_FREQUENCY_SCHEDULE_START_TIME_HOURS",
                description: "Int",
              },
            },
            {
              name: "--fixed-frequency-schedule-start-time-minutes",
              description:
                "Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59",
              args: {
                name: "FIXED_FREQUENCY_SCHEDULE_START_TIME_MINUTES",
                description: "Int",
              },
            },
            {
              name: "--fixed-frequency-schedule-start-time-nanos",
              description:
                "Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999",
              args: {
                name: "FIXED_FREQUENCY_SCHEDULE_START_TIME_NANOS",
                description: "Int",
              },
            },
            {
              name: "--fixed-frequency-schedule-start-time-seconds",
              description:
                "Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds",
              args: {
                name: "FIXED_FREQUENCY_SCHEDULE_START_TIME_SECONDS",
                description: "Int",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gcs-source-uris",
              description:
                "Example: gs://bucket1/object1, gs://bucket2/folder2/object2",
              args: {
                name: "GCS_SOURCE_URIS",
                description: "List",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--key-ring",
              description: "The keyRing id of the cryptoKey resource",
              args: {
                name: "KEY_RING",
                description: "String",
              },
            },
            {
              name: "--kms-key",
              description:
                "ID of the cryptoKey or fully qualified identifier for the cryptoKey",
              priority: 100,
              args: {
                name: "KMS_KEY",
                description: "String",
              },
            },
            {
              name: "--labels",
              description: "Labels to represent user-provided metadata",
              args: {
                name: "LABELS",
              },
            },
            {
              name: "--location",
              description:
                "For resources [instance, acl-policy, kms-key, primary-instance, server-ca-pool], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--maintenance-policy-weekly-window",
              description:
                "Maintenance window that is applied to resources covered by this policy. Minimum 1. For the current version, the maximum number of weekly_window is expected to be one",
              args: {
                name: "MAINTENANCE_POLICY_WEEKLY_WINDOW",
              },
            },
            {
              name: "--managed-backup-source",
              description:
                "Example: //memorystore.googleapis.com/projects/{project}/locations/{location}/backupCollections/{collection}/backups/{backup} A shorter version (without the prefix) of the backup name is also supported, like projects/{project}/locations/{location}/backupCollections/{collection}/backups/{backup_id} In this case, it assumes the backup is under memorystore.googleapis.com",
              args: {
                name: "MANAGED_BACKUP_SOURCE",
                description: "String",
              },
            },
            {
              name: "--mode",
              description:
                "The mode config for the instance. _MODE_ must be one of:",
              args: {
                name: "MODE",
                suggestions: ["cluster", "cluster-disabled", "standalone"],
              },
            },
            {
              name: "--no-allow-fewer-zones-deployment",
              description:
                "Allows customers to specify if they are okay with deploying a multi-zone instance in less than 3 zones. Once set, if there is a zonal outage during the instance creation, the instance will only be deployed in 2 zones, and stay within the 2 zones for its lifecycle",
              hidden: true,
            },
            optNoAsync,
            {
              name: "--no-async-instance-endpoints-deletion-enabled",
              description:
                "If true, instance endpoints that are created and registered by customers can be deleted asynchronously. That is, such an instance endpoint can be de-registered before the forwarding rules in the instance endpoint are deleted",
              hidden: true,
            },
            {
              name: "--no-deletion-protection-enabled",
              description: "If set to true deletion of the instance will fail",
              hidden: true,
            },
            {
              name: "--no-ondemand-maintenance",
              description: "Ondemand maintenance for the instance",
              hidden: true,
            },
            {
              name: "--no-rotate-server-certificate",
              description: "Rotate the server certificates",
              hidden: true,
            },
            {
              name: "--no-simulate-maintenance-event",
              description: "Simulate a maintenance event",
              hidden: true,
            },
            {
              name: "--node-type",
              description:
                "Machine type for individual nodes of the instance. _NODE_TYPE_ must be one of:",
              args: {
                name: "NODE_TYPE",
                suggestions: [
                  "custom-micro",
                  "custom-mini",
                  "custom-pico",
                  "highcpu-medium",
                  "highmem-2xlarge",
                  "highmem-medium",
                  "highmem-xlarge",
                  "shared-core-nano",
                  "standard-large",
                  "standard-small",
                ],
              },
            },
            {
              name: "--ondemand-maintenance",
              description: "Ondemand maintenance for the instance",
            },
            {
              name: "--persistence-config-mode",
              description:
                "Current persistence mode. _PERSISTENCE_CONFIG_MODE_ must be one of:",
              args: {
                name: "PERSISTENCE_CONFIG_MODE",
                suggestions: ["aof", "disabled", "rdb"],
              },
            },
            {
              name: "--primary-instance",
              description:
                "ID of the instance or fully qualified identifier for the instance",
              priority: 100,
              args: {
                name: "PRIMARY_INSTANCE",
                description: "String",
              },
            },
            optProject,
            {
              name: "--psc-auto-connections",
              description:
                "Deprecated: Use the endpoints.connections.psc_auto_connection value instead",
              deprecated: true,
              args: {
                name: "PSC_AUTO_CONNECTIONS",
              },
            },
            optQuiet,
            {
              name: "--rdb-config-snapshot-period",
              description:
                "Period between RDB snapshots. _RDB_CONFIG_SNAPSHOT_PERIOD_ must be one of:",
              args: {
                name: "RDB_CONFIG_SNAPSHOT_PERIOD",
                suggestions: [
                  "one-hour",
                  "six-hours",
                  "twelve-hours",
                  "twenty-four-hours",
                ],
              },
            },
            {
              name: "--rdb-config-snapshot-start-time",
              description:
                "Time that the first snapshot was/will be attempted, and to which future snapshots will be aligned. If not provided, the current time will be used",
              args: {
                name: "RDB_CONFIG_SNAPSHOT_START_TIME",
              },
            },
            {
              name: "--replica-count",
              description:
                "Number of replica nodes per shard. If omitted the default is 0 replicas",
              args: {
                name: "REPLICA_COUNT",
                description: "Int",
              },
            },
            {
              name: "--request-id",
              description:
                "An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request",
              args: {
                name: "REQUEST_ID",
                description: "String",
              },
            },
            {
              name: "--rotate-server-certificate",
              description: "Rotate the server certificates",
            },
            {
              name: "--server-ca-mode",
              description:
                "The Server CA mode for the instance. _SERVER_CA_MODE_ must be one of:",
              args: {
                name: "SERVER_CA_MODE",
                suggestions: [
                  "customer-managed-cas-ca",
                  "google-managed-per-instance-ca",
                  "google-managed-shared-ca",
                  "server-ca-mode-customer-managed-cas-ca",
                  "server-ca-mode-google-managed-per-instance-ca",
                  "server-ca-mode-google-managed-shared-ca",
                ],
              },
            },
            {
              name: "--server-ca-pool",
              description:
                "ID of the caPool or fully qualified identifier for the caPool",
              priority: 100,
              args: {
                name: "SERVER_CA_POOL",
                description: "String",
              },
            },
            {
              name: "--shard-count",
              description: "Number of shards for the instance",
              args: {
                name: "SHARD_COUNT",
                description: "Int",
              },
            },
            {
              name: "--simulate-maintenance-event",
              description: "Simulate a maintenance event",
            },
            optTraceToken,
            {
              name: "--transit-encryption-mode",
              description:
                "In-transit encryption mode of the instance. _TRANSIT_ENCRYPTION_MODE_ must be one of:",
              args: {
                name: "TRANSIT_ENCRYPTION_MODE",
                suggestions: [
                  "server-authentication",
                  "transit-encryption-disabled",
                ],
              },
            },
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--zone-distribution-config",
              description:
                "Defines zone where all resources will be allocated with SINGLE_ZONE mode. Ignored for MULTI_ZONE mode",
              args: {
                name: "ZONE_DISTRIBUTION_CONFIG",
                description: "String",
              },
            },
            {
              name: "--zone-distribution-config-mode",
              description:
                "Current zone distribution mode. Defaults to MULTI_ZONE. _ZONE_DISTRIBUTION_CONFIG_MODE_ must be one of:",
              args: {
                name: "ZONE_DISTRIBUTION_CONFIG_MODE",
                suggestions: ["multi-zone", "single-zone"],
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
          description: "Delete a Memorystore instance",
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
            optLocation5,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--request-id",
              description:
                "An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request",
              args: {
                name: "REQUEST_ID",
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
          name: "describe",
          description: "Get details of a Memorystore instance",
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
            optLocation5,
            optLogHttp,
            optProject,
            optQuiet,
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
          name: "get-certificate-authority",
          description:
            "Get certificate authority details of a Memorystore instance",
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
            {
              name: "--location",
              description: "The location ID of the instance resource",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optProject,
            optQuiet,
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
          name: "get-shared-regional-certificate-authority",
          description:
            "Get the shared regional CA certificate bundle for Memorystore",
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
          description:
            "List all Memorystore instances in a specified project and location",
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
            optLocation,
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
          name: "reschedule-maintenance",
          description: "Reschedule maintenance window for an instance",
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
            optLocation5,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--reschedule-type",
              description:
                "If reschedule type is SPECIFIC_TIME, schedule_time must be set. _RESCHEDULE_TYPE_ must be one of:",
              priority: 100,
              args: {
                name: "RESCHEDULE_TYPE",
                suggestions: ["immediate", "specific-time"],
              },
            },
            {
              name: "--schedule-time",
              description:
                "Timestamp when the maintenance shall be rescheduled to if reschedule_type=SPECIFIC_TIME, in RFC 3339 format. Example: `2012-11-15T16:19:00.094Z`",
              args: {
                name: "SCHEDULE_TIME",
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
          description: "Update the configuration of a Memorystore instance",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--acl-policy",
              description:
                "ID of the aclPolicy or fully qualified identifier for the aclPolicy",
              priority: 100,
              args: {
                name: "ACL_POLICY",
                description: "String",
              },
            },
            {
              name: "--add-cross-instance-replication-config-secondary-instances",
              description:
                "Add new value to cross_instance_replication_config_secondary_instances list. List of secondary instances that are replicating from this primary instance",
              args: {
                name: "ADD_CROSS_INSTANCE_REPLICATION_CONFIG_SECONDARY_INSTANCES",
              },
            },
            {
              name: "--add-endpoints",
              description:
                "Add new value to endpoints list. Endpoints for the instance",
              args: {
                name: "ADD_ENDPOINTS",
              },
            },
            {
              name: "--add-maintenance-policy-weekly-window",
              description:
                "Add new value to maintenance_policy_weekly_window list. Maintenance window that is applied to resources covered by this policy. Minimum 1. For the current version, the maximum number of weekly_window is expected to be one",
              args: {
                name: "ADD_MAINTENANCE_POLICY_WEEKLY_WINDOW",
              },
            },
            {
              name: "--aof-config-append-fsync",
              description:
                "The fsync mode. _AOF_CONFIG_APPEND_FSYNC_ must be one of:",
              args: {
                name: "AOF_CONFIG_APPEND_FSYNC",
                suggestions: ["always", "every-sec", "never"],
              },
            },
            optAsync,
            {
              name: "--async-instance-endpoints-deletion-enabled",
              description:
                "If true, instance endpoints that are created and registered by customers can be deleted asynchronously. That is, such an instance endpoint can be de-registered before the forwarding rules in the instance endpoint are deleted. Use *--async-instance-endpoints-deletion-enabled* to enable and *--no-async-instance-endpoints-deletion-enabled* to disable",
            },
            {
              name: "--automated-backup-config-mode",
              description:
                "The automated backup mode. If the mode is disabled, the other fields will be ignored. _AUTOMATED_BACKUP_CONFIG_MODE_ must be one of:",
              args: {
                name: "AUTOMATED_BACKUP_CONFIG_MODE",
                suggestions: ["disabled", "enabled"],
              },
            },
            {
              name: "--automated-backup-config-retention",
              description:
                "How long to keep automated backups before the backups are deleted. The value should be between 1 day and 365 days. If not specified, the default value is 35 days",
              args: {
                name: "AUTOMATED_BACKUP_CONFIG_RETENTION",
              },
            },
            optBillingProject,
            {
              name: "--clear-acl-policy",
              description: "Clear acl_policy value and set to null",
            },
            {
              name: "--clear-automated-backup-config",
              description:
                "Set instance.automatedBackupConfig back to default value",
            },
            {
              name: "--clear-cross-instance-replication-config",
              description:
                "Set instance.crossInstanceReplicationConfig back to default value",
            },
            {
              name: "--clear-cross-instance-replication-config-secondary-instances",
              description:
                "Clear cross_instance_replication_config_secondary_instances value and set to empty list",
            },
            {
              name: "--clear-endpoints",
              description: "Clear endpoints value and set to empty list",
            },
            {
              name: "--clear-engine-configs",
              description: "Clear engine_configs value and set to empty map",
            },
            {
              name: "--clear-kms-key",
              description: "Clear kms_key value and set to null",
            },
            {
              name: "--clear-labels",
              description: "Clear labels value and set to empty map",
            },
            {
              name: "--clear-maintenance-policy",
              description:
                "Set instance.maintenancePolicy back to default value",
            },
            {
              name: "--clear-maintenance-policy-weekly-window",
              description:
                "Clear maintenance_policy_weekly_window value and set to empty list",
            },
            {
              name: "--clear-persistence-config",
              description:
                "Set instance.persistenceConfig back to default value",
            },
            {
              name: "--clear-primary-instance",
              description: "Clear primary_instance value and set to null",
            },
            optConfiguration,
            {
              name: "--cross-instance-replication-config-role",
              description:
                "The role of the instance in cross instance replication. _CROSS_INSTANCE_REPLICATION_CONFIG_ROLE_ must be one of:",
              args: {
                name: "CROSS_INSTANCE_REPLICATION_CONFIG_ROLE",
                suggestions: ["none", "primary", "secondary"],
              },
            },
            {
              name: "--cross-instance-replication-config-secondary-instances",
              description:
                "Set cross_instance_replication_config_secondary_instances to new value. List of secondary instances that are replicating from this primary instance",
              args: {
                name: "CROSS_INSTANCE_REPLICATION_CONFIG_SECONDARY_INSTANCES",
              },
            },
            {
              name: "--deletion-protection-enabled",
              description:
                "If set to true deletion of the instance will fail. Use *--deletion-protection-enabled* to enable and *--no-deletion-protection-enabled* to disable",
            },
            {
              name: "--endpoints",
              description:
                "Set endpoints to new value. Endpoints for the instance",
              args: {
                name: "ENDPOINTS",
              },
            },
            {
              name: "--engine-configs",
              description:
                "Set engine_configs to new value. User-provided engine configurations for the instance",
              args: {
                name: "ENGINE_CONFIGS",
              },
            },
            {
              name: "--engine-version",
              description: "Engine version of the instance",
              args: {
                name: "ENGINE_VERSION",
                description: "String",
              },
            },
            {
              name: "--fixed-frequency-schedule-start-time-hours",
              description:
                'Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time',
              args: {
                name: "FIXED_FREQUENCY_SCHEDULE_START_TIME_HOURS",
                description: "Int",
              },
            },
            {
              name: "--fixed-frequency-schedule-start-time-minutes",
              description:
                "Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59",
              args: {
                name: "FIXED_FREQUENCY_SCHEDULE_START_TIME_MINUTES",
                description: "Int",
              },
            },
            {
              name: "--fixed-frequency-schedule-start-time-nanos",
              description:
                "Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999",
              args: {
                name: "FIXED_FREQUENCY_SCHEDULE_START_TIME_NANOS",
                description: "Int",
              },
            },
            {
              name: "--fixed-frequency-schedule-start-time-seconds",
              description:
                "Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds",
              args: {
                name: "FIXED_FREQUENCY_SCHEDULE_START_TIME_SECONDS",
                description: "Int",
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
            {
              name: "--key-ring",
              description: "The keyRing id of the cryptoKey resource",
              args: {
                name: "KEY_RING",
                description: "String",
              },
            },
            {
              name: "--kms-key",
              description:
                "ID of the cryptoKey or fully qualified identifier for the cryptoKey",
              priority: 100,
              args: {
                name: "KMS_KEY",
                description: "String",
              },
            },
            {
              name: "--labels",
              description:
                "Set labels to new value. Labels to represent user-provided metadata",
              args: {
                name: "LABELS",
              },
            },
            {
              name: "--location",
              description:
                "For resources [instance, acl-policy, kms-key, primary-instance], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--maintenance-policy-weekly-window",
              description:
                "Set maintenance_policy_weekly_window to new value. Maintenance window that is applied to resources covered by this policy. Minimum 1. For the current version, the maximum number of weekly_window is expected to be one",
              args: {
                name: "MAINTENANCE_POLICY_WEEKLY_WINDOW",
              },
            },
            {
              name: "--maintenance-version",
              description:
                "This field can be used to trigger self service update to indicate the desired maintenance version. The input to this field can be determined by the available_maintenance_versions field",
              args: {
                name: "MAINTENANCE_VERSION",
                description: "String",
              },
            },
            {
              name: "--mode",
              description:
                "The mode config for the instance. _MODE_ must be one of:",
              args: {
                name: "MODE",
                suggestions: ["cluster", "cluster-disabled", "standalone"],
              },
            },
            optNoAsync,
            {
              name: "--no-async-instance-endpoints-deletion-enabled",
              description:
                "If true, instance endpoints that are created and registered by customers can be deleted asynchronously. That is, such an instance endpoint can be de-registered before the forwarding rules in the instance endpoint are deleted",
            },
            {
              name: "--no-clear-acl-policy",
              description: "Clear acl_policy value and set to null",
              hidden: true,
            },
            {
              name: "--no-clear-automated-backup-config",
              description:
                "Set instance.automatedBackupConfig back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-cross-instance-replication-config",
              description:
                "Set instance.crossInstanceReplicationConfig back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-cross-instance-replication-config-secondary-instances",
              description:
                "Clear cross_instance_replication_config_secondary_instances value and set to empty list",
              hidden: true,
            },
            {
              name: "--no-clear-endpoints",
              description: "Clear endpoints value and set to empty list",
              hidden: true,
            },
            {
              name: "--no-clear-engine-configs",
              description: "Clear engine_configs value and set to empty map",
              hidden: true,
            },
            {
              name: "--no-clear-kms-key",
              description: "Clear kms_key value and set to null",
              hidden: true,
            },
            {
              name: "--no-clear-labels",
              description: "Clear labels value and set to empty map",
              hidden: true,
            },
            {
              name: "--no-clear-maintenance-policy",
              description:
                "Set instance.maintenancePolicy back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-maintenance-policy-weekly-window",
              description:
                "Clear maintenance_policy_weekly_window value and set to empty list",
              hidden: true,
            },
            {
              name: "--no-clear-persistence-config",
              description:
                "Set instance.persistenceConfig back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-primary-instance",
              description: "Clear primary_instance value and set to null",
              hidden: true,
            },
            {
              name: "--no-deletion-protection-enabled",
              description: "If set to true deletion of the instance will fail",
            },
            {
              name: "--no-ondemand-maintenance",
              description: "Ondemand maintenance for the instance",
            },
            {
              name: "--no-rotate-server-certificate",
              description: "Rotate the server certificates",
            },
            {
              name: "--no-simulate-maintenance-event",
              description: "Simulate a maintenance event",
            },
            {
              name: "--node-type",
              description:
                "Machine type for individual nodes of the instance. _NODE_TYPE_ must be one of:",
              args: {
                name: "NODE_TYPE",
                suggestions: [
                  "custom-micro",
                  "custom-mini",
                  "custom-pico",
                  "highcpu-medium",
                  "highmem-2xlarge",
                  "highmem-medium",
                  "highmem-xlarge",
                  "shared-core-nano",
                  "standard-large",
                  "standard-small",
                ],
              },
            },
            {
              name: "--ondemand-maintenance",
              description:
                "Ondemand maintenance for the instance. Use *--ondemand-maintenance* to enable and *--no-ondemand-maintenance* to disable",
            },
            {
              name: "--persistence-config-mode",
              description:
                "Current persistence mode. _PERSISTENCE_CONFIG_MODE_ must be one of:",
              args: {
                name: "PERSISTENCE_CONFIG_MODE",
                suggestions: ["aof", "disabled", "rdb"],
              },
            },
            {
              name: "--primary-instance",
              description:
                "ID of the instance or fully qualified identifier for the instance",
              priority: 100,
              args: {
                name: "PRIMARY_INSTANCE",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--rdb-config-snapshot-period",
              description:
                "Period between RDB snapshots. _RDB_CONFIG_SNAPSHOT_PERIOD_ must be one of:",
              args: {
                name: "RDB_CONFIG_SNAPSHOT_PERIOD",
                suggestions: [
                  "one-hour",
                  "six-hours",
                  "twelve-hours",
                  "twenty-four-hours",
                ],
              },
            },
            {
              name: "--rdb-config-snapshot-start-time",
              description:
                "Time that the first snapshot was/will be attempted, and to which future snapshots will be aligned. If not provided, the current time will be used",
              args: {
                name: "RDB_CONFIG_SNAPSHOT_START_TIME",
              },
            },
            {
              name: "--remove-cross-instance-replication-config-secondary-instances",
              description:
                "Remove existing value from cross_instance_replication_config_secondary_instances list. List of secondary instances that are replicating from this primary instance",
              args: {
                name: "REMOVE_CROSS_INSTANCE_REPLICATION_CONFIG_SECONDARY_INSTANCES",
              },
            },
            {
              name: "--remove-endpoints",
              description:
                "Remove existing value from endpoints list. Endpoints for the instance",
              args: {
                name: "REMOVE_ENDPOINTS",
              },
            },
            {
              name: "--remove-engine-configs",
              description:
                "Remove existing value from map engine_configs. Sets `remove_engine_configs` value",
              args: {
                name: "REMOVE_ENGINE_CONFIGS",
                description: "Dict",
              },
            },
            {
              name: "--remove-labels",
              description:
                "Remove existing value from map labels. Sets `remove_labels` value",
              args: {
                name: "REMOVE_LABELS",
                description: "Dict",
              },
            },
            {
              name: "--remove-maintenance-policy-weekly-window",
              description:
                "Remove existing value from maintenance_policy_weekly_window list. Maintenance window that is applied to resources covered by this policy. Minimum 1. For the current version, the maximum number of weekly_window is expected to be one",
              args: {
                name: "REMOVE_MAINTENANCE_POLICY_WEEKLY_WINDOW",
              },
            },
            {
              name: "--replica-count",
              description:
                "Number of replica nodes per shard. If omitted the default is 0 replicas",
              args: {
                name: "REPLICA_COUNT",
                description: "Int",
              },
            },
            {
              name: "--request-id",
              description:
                "An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request",
              args: {
                name: "REQUEST_ID",
                description: "String",
              },
            },
            {
              name: "--rotate-server-certificate",
              description:
                "Rotate the server certificates. Use *--rotate-server-certificate* to enable and *--no-rotate-server-certificate* to disable",
            },
            {
              name: "--shard-count",
              description: "Number of shards for the instance",
              args: {
                name: "SHARD_COUNT",
                description: "Int",
              },
            },
            {
              name: "--simulate-maintenance-event",
              description:
                "Simulate a maintenance event. Use *--simulate-maintenance-event* to enable and *--no-simulate-maintenance-event* to disable",
            },
            optTraceToken,
            {
              name: "--update-engine-configs",
              description:
                "Update engine_configs value or add key value pair. User-provided engine configurations for the instance",
              args: {
                name: "UPDATE_ENGINE_CONFIGS",
              },
            },
            {
              name: "--update-labels",
              description:
                "Update labels value or add key value pair. Labels to represent user-provided metadata",
              args: {
                name: "UPDATE_LABELS",
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
      description: "Manage Memorystore for Valkey locations",
      subcommands: [
        {
          name: "describe",
          description: "Show metadata for a Memorystore for Valkey location",
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
            name: "LOCATION",
            description:
              "ID of the location or fully qualified identifier for the location",
          },
        },
        {
          name: "list",
          description: "List Memorystore for Valkey locations",
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
      description: "Manage Memorystore operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a Memorystore operation",
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
            optLocation2,
            optLogHttp,
            optProject,
            optQuiet,
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
          name: "delete",
          description: "Delete a Memorystore operation",
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
            optLocation2,
            optLogHttp,
            optProject,
            optQuiet,
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
          description: "Describe a Memorystore operation",
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
            optLocation2,
            optLogHttp,
            optProject,
            optQuiet,
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
          description: "List Memorystore operations",
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
            optLocation,
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
