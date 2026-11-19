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

const optAll: Fig.Option = {
  name: "--all",
  description:
    "Remove all bindings with this role and principal, irrespective of any conditions",
};

const optAsync: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to complete",
};

const optAutoscalingHighPriorityCpuTarget: Fig.Option = {
  name: "--autoscaling-high-priority-cpu-target",
  description:
    "Specifies the target percentage of high-priority CPU the autoscaled instance can utilize",
  args: {
    name: "AUTOSCALING_HIGH_PRIORITY_CPU_TARGET",
    description: "Int",
  },
};

const optAutoscalingTotalCpuTarget: Fig.Option = {
  name: "--autoscaling-total-cpu-target",
  description:
    "Specifies the target percentage of total CPU the autoscaled instance can utilize",
  args: {
    name: "AUTOSCALING_TOTAL_CPU_TARGET",
    description: "Int",
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

const optCondition: Fig.Option = {
  name: "--condition",
  description:
    "A condition to include in the binding. When the condition is explicitly specified as `None` (`--condition=None`), a binding without a condition is added. When the condition is specified and is not `None`, `--role` cannot be a basic role. Basic roles are `roles/editor`, `roles/owner`, and `roles/viewer`. For more on conditions, refer to the conditions overview guide: https://cloud.google.com/iam/docs/conditions-overview",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
  },
};

const optCondition2: Fig.Option = {
  name: "--condition",
  description:
    "The condition of the binding that you want to remove. When the condition is explicitly specified as `None` (`--condition=None`), a binding without a condition is removed. Otherwise, only a binding with a condition that exactly matches the specified condition (including the optional description) is removed. For more on conditions, refer to the conditions overview guide: https://cloud.google.com/iam/docs/conditions-overview",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
  },
};

const optConditionFromFile: Fig.Option = {
  name: "--condition-from-file",
  description:
    "Path to a local JSON or YAML file that defines the condition. To see available fields, see the help for `--condition`. Use a full or relative path to a local file containing the value of condition",
  args: {
    name: "CONDITION_FROM_FILE",
    template: "filepaths",
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
  description:
    "ID of the database or fully qualified identifier for the database",
  priority: 100,
  args: {
    name: "DATABASE",
    description: "String",
  },
};

const optDatabase2: Fig.Option = {
  name: "--database",
  description: "The Cloud Spanner database for the backup-schedule",
  args: {
    name: "DATABASE",
    description: "String",
  },
};

const optDatabase3: Fig.Option = {
  name: "--database",
  description: "The name of the Cloud Spanner database",
  args: {
    name: "DATABASE",
    description: "String",
  },
};

const optEncryptionType: Fig.Option = {
  name: "--encryption-type",
  description:
    "The encryption type of the backup. _ENCRYPTION_TYPE_ must be one of:",
  args: {
    name: "ENCRYPTION_TYPE",
    suggestions: [
      "customer-managed-encryption",
      "google-default-encryption",
      "use-database-encryption",
    ],
  },
};

const optEtag: Fig.Option = {
  name: "--etag",
  description: "Used for optimistic concurrency control",
  args: {
    name: "ETAG",
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

const optInstance: Fig.Option = {
  name: "--instance",
  description:
    "ID of the instance or fully qualified identifier for the instance",
  args: {
    name: "INSTANCE",
    description: "String",
  },
};

const optInstance2: Fig.Option = {
  name: "--instance",
  description: "The Cloud Spanner instance for the backup-schedule",
  args: {
    name: "INSTANCE",
    description: "String",
  },
};

const optInstance3: Fig.Option = {
  name: "--instance",
  description: "The Cloud Spanner instance for the database",
  args: {
    name: "INSTANCE",
    description: "String",
  },
};

const optInstance4: Fig.Option = {
  name: "--instance",
  description: "The Cloud Spanner instance for the instance partition",
  args: {
    name: "INSTANCE",
    description: "String",
  },
};

const optInstance5: Fig.Option = {
  name: "--instance",
  description: "The ID of the instance the operation is executing on",
  args: {
    name: "INSTANCE",
    description: "String",
  },
};

const optInstance6: Fig.Option = {
  name: "--instance",
  description: "The name of the Cloud Spanner instance",
  args: {
    name: "INSTANCE",
    description: "String",
  },
};

const optInstanceConfig: Fig.Option = {
  name: "--instance-config",
  description:
    "The ID of the instance configuration the operation is executing on",
  args: {
    name: "INSTANCE_CONFIG",
    description: "String",
  },
};

const optInstanceId: Fig.Option = {
  name: "--instance-id",
  description: "The Cloud Spanner instance ID for the sample app",
  priority: 100,
  args: {
    name: "INSTANCE_ID",
    description: "String",
  },
};

const optKmsKey: Fig.Option = {
  name: "--kms-key",
  description: "ID of the key or fully qualified identifier for the key",
  priority: 100,
  args: {
    name: "KMS_KEY",
    description: "String",
  },
};

const optKmsKeyring: Fig.Option = {
  name: "--kms-keyring",
  description: "KMS keyring id of the key",
  args: {
    name: "KMS_KEYRING",
    description: "String",
  },
};

const optKmsKeys: Fig.Option = {
  name: "--kms-keys",
  description: "IDs of the keys or fully qualified identifiers for the keys",
  priority: 100,
  args: {
    name: "KMS_KEYS",
    description: "List",
  },
};

const optKmsLocation: Fig.Option = {
  name: "--kms-location",
  description: "Cloud location for the key",
  args: {
    name: "KMS_LOCATION",
    description: "String",
  },
};

const optKmsProject: Fig.Option = {
  name: "--kms-project",
  description: "Cloud project id for the key",
  args: {
    name: "KMS_PROJECT",
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

const optMember: Fig.Option = {
  name: "--member",
  description:
    "The principal to add the binding for. Should be of the form `user|group|serviceAccount:email` or `domain:domain`",
  priority: 100,
  args: {
    name: "PRINCIPAL",
    description: "String",
  },
};

const optMember2: Fig.Option = {
  name: "--member",
  description:
    "The principal to remove the binding for. Should be of the form `user|group|serviceAccount:email` or `domain:domain`",
  priority: 100,
  args: {
    name: "PRINCIPAL",
    description: "String",
  },
};

const optNoAll: Fig.Option = {
  name: "--no-all",
  description:
    "Remove all bindings with this role and principal, irrespective of any conditions",
  hidden: true,
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

const optRole: Fig.Option = {
  name: "--role",
  description:
    "Role name to assign to the principal. The role name is the complete path of a predefined role, such as `roles/logging.viewer`, or the role ID for a custom role, such as `organizations/{ORGANIZATION_ID}/roles/logging.viewer`",
  priority: 100,
  args: {
    name: "ROLE",
    description: "String",
  },
};

const optRole2: Fig.Option = {
  name: "--role",
  description: "The role to remove the principal from",
  priority: 100,
  args: {
    name: "ROLE",
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

const optTable: Fig.Option = {
  name: "--table",
  description: "The Cloud Spanner table name",
  priority: 100,
  args: {
    name: "TABLE",
    description: "String",
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
  name: "spanner",
  description: "Command groups for Cloud Spanner",
  subcommands: [
    {
      name: "backup-schedules",
      description: "Manage Cloud Spanner backup schedules",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "Add IAM policy binding to a Cloud Spanner backup schedule",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCondition,
            optConditionFromFile,
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
            optInstance6,
            optLogHttp,
            optMember,
            optProject,
            optQuiet,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP_SCHEDULE",
            description:
              "ID of the backupSchedule or fully qualified identifier for the backupSchedule",
          },
        },
        {
          name: "create",
          description: "Create a Cloud Spanner backup schedule",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--backup-type",
              description: "Type of backups created by this schedule",
              priority: 100,
              args: {
                name: "BACKUP_TYPE",
                description: "List",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--cron",
              description:
                "Textual representation of the crontab. User can customize the backup frequency and the backup version time using the cron expression. The version time must be in UTC timzeone. The backup will contain an externally consistent copy of the database at the version time. Allowed frequencies are 12 hour, 1 day, 1 week and 1 month. Examples of valid cron specifications: * `0 2/12 * * * ` : every 12 hours at (2, 14) hours past midnight in UTC. * `0 2,14 * * * ` : every 12 hours at (2,14) hours past midnight in UTC. * `0 2 * * * ` : once a day at 2 past midnight in UTC. * `0 2 * * 0 ` : once a week every Sunday at 2 past midnight in UTC. * `0 2 8 * * ` : once a month on 8th day at 2 past midnight in UTC",
              priority: 100,
              args: {
                name: "CRON",
                description: "String",
              },
            },
            optDatabase2,
            optEncryptionType,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance2,
            optKmsKey,
            optKmsKeyring,
            optKmsKeys,
            optKmsLocation,
            optKmsProject,
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--retention-duration",
              description:
                "The retention duration of a backup that must be at least 6 hours and at most 366 days. The backup is eligible to be automatically deleted once the retention period has elapsed",
              priority: 100,
              args: {
                name: "RETENTION_DURATION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP_SCHEDULE",
            description:
              "ID of the backup-schedule or fully qualified identifier for the backup-schedule",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Spanner backup schedule",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            optInstance2,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP_SCHEDULE",
            description:
              "ID of the backup-schedule or fully qualified identifier for the backup-schedule",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Spanner backup schedule",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            optInstance2,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP_SCHEDULE",
            description:
              "ID of the backup-schedule or fully qualified identifier for the backup-schedule",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Spanner backup schedule",
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
            optInstance6,
            optLimit,
            optLogHttp,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP_SCHEDULE",
            description:
              "ID of the backupSchedule or fully qualified identifier for the backupSchedule",
          },
        },
        {
          name: "list",
          description: "List Cloud Spanner backup schedules",
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
            optInstance3,
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
          name: "remove-iam-policy-binding",
          description:
            "Remove IAM policy binding of a Cloud Spanner backup schedule",
          options: [
            optAccessTokenFile,
            optAccount,
            optAll,
            optBillingProject,
            optCondition2,
            optConditionFromFile,
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
            optInstance6,
            optLogHttp,
            optMember2,
            optNoAll,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP_SCHEDULE",
            description:
              "ID of the backupSchedule or fully qualified identifier for the backupSchedule",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a Cloud Spanner backup schedule",
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
            optInstance6,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "BACKUP_SCHEDULE",
              description:
                "ID of the backupSchedule or fully qualified identifier for the backupSchedule",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy",
              template: "filepaths",
            },
          ],
        },
        {
          name: "update",
          description: "Update a Cloud Spanner backup schedule",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--cron",
              description:
                "Textual representation of the crontab. User can customize the backup frequency and the backup version time using the cron expression. The version time must be in UTC timzeone. The backup will contain an externally consistent copy of the database at the version time. Allowed frequencies are 12 hour, 1 day, 1 week and 1 month. Examples of valid cron specifications: * `0 2/12 * * * ` : every 12 hours at (2, 14) hours past midnight in UTC. * `0 2,14 * * * ` : every 12 hours at (2,14) hours past midnight in UTC. * `0 2 * * * ` : once a day at 2 past midnight in UTC. * `0 2 * * 0 ` : once a week every Sunday at 2 past midnight in UTC. * `0 2 8 * * ` : once a month on 8th day at 2 past midnight in UTC",
              args: {
                name: "CRON",
                description: "String",
              },
            },
            optDatabase2,
            optEncryptionType,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance2,
            optKmsKey,
            optKmsKeyring,
            optKmsKeys,
            optKmsLocation,
            optKmsProject,
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--retention-duration",
              description:
                "The retention duration of a backup that must be at least 6 hours and at most 366 days. The backup is eligible to be automatically deleted once the retention period has elapsed",
              args: {
                name: "RETENTION_DURATION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP_SCHEDULE",
            description:
              "ID of the backup-schedule or fully qualified identifier for the backup-schedule",
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
      name: "backups",
      description: "Manage Cloud Spanner backups",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Cloud Spanner backup",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCondition,
            optConditionFromFile,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance6,
            optLogHttp,
            optMember,
            optProject,
            optQuiet,
            optRole,
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
          name: "copy",
          description: "Copies a backup of a Cloud Spanner database",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--destination-backup",
              description:
                "ID of the backup or fully qualified identifier for the backup",
              priority: 100,
              args: {
                name: "DESTINATION_BACKUP",
                description: "String",
              },
            },
            {
              name: "--destination-instance",
              description: "The Cloud Spanner instance for the backup",
              args: {
                name: "DESTINATION_INSTANCE",
                description: "String",
              },
            },
            {
              name: "--encryption-type",
              description:
                "The encryption type of the copied backup. _ENCRYPTION_TYPE_ must be one of:",
              args: {
                name: "ENCRYPTION_TYPE",
                suggestions: [
                  "customer-managed-encryption",
                  "google-default-encryption",
                  "use-config-default-or-backup-encryption",
                ],
              },
            },
            {
              name: "--expiration-date",
              description:
                "Expiration time of the backup, must be at least 6 hours and at most 366 days from the time when the source backup is created. See `$ gcloud topic datetimes` for information on date/time formats",
              args: {
                name: "EXPIRATION_DATE",
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
            optKmsKey,
            optKmsKeyring,
            optKmsKeys,
            optKmsLocation,
            optKmsProject,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--retention-period",
              description:
                "Retention period of the backup relative from now, must be at least 6 hours and at most 366 days from the time when the source backup is created. See `$ gcloud topic datetimes` for information on duration formats",
              args: {
                name: "RETENTION_PERIOD",
                description: "String",
              },
            },
            {
              name: "--source-backup",
              description:
                "ID of the backup or fully qualified identifier for the backup",
              priority: 100,
              args: {
                name: "SOURCE_BACKUP",
                description: "String",
              },
            },
            {
              name: "--source-instance",
              description: "The Cloud Spanner instance for the backup",
              args: {
                name: "SOURCE_INSTANCE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "create",
          description: "Creates a backup of a Cloud Spanner database",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--database",
              description:
                "ID of the database from which the backup will be created",
              priority: 100,
              args: {
                name: "DATABASE",
                description: "String",
              },
            },
            optEncryptionType,
            {
              name: "--expiration-date",
              description:
                "Expiration time of the backup, must be at least 6 hours and at most 30 days from the time the request is received. See `$ gcloud topic datetimes` for information on date/time formats",
              args: {
                name: "EXPIRATION_DATE",
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
            {
              name: "--instance",
              description: "The Cloud Spanner instance for the backup",
              args: {
                name: "INSTANCE",
                description: "String",
              },
            },
            optKmsKey,
            optKmsKeyring,
            optKmsKeys,
            optKmsLocation,
            optKmsProject,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--retention-period",
              description:
                "Retention period of the backup relative from now, must be at least 6 hours and at most 30 days. See `$ gcloud topic datetimes` for information on duration formats",
              args: {
                name: "RETENTION_PERIOD",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--version-time",
              description:
                "The backup will contain an externally consistent copy of the database at the timestamp specified by `--version-time`. If `--version-time` is not specified, the system will use the creation time of the backup",
              args: {
                name: "TIMESTAMP",
                description: "String",
              },
            },
          ],
          args: {
            name: "BACKUP",
            description:
              "ID of the backup or fully qualified identifier for the backup",
          },
        },
        {
          name: "delete",
          description: "Delete an existing backup",
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
            optInstance6,
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
          name: "describe",
          description: "Retrieves information about a backup",
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
            optInstance6,
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
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Spanner backup",
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
            optInstance6,
            optLimit,
            optLogHttp,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
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
          description: "List existing Cloud Spanner Cloud Spanner backups",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--database",
              description:
                "ID of the source database. The database flag will take precedence over filters added for database",
              args: {
                name: "DATABASE",
                description: "String",
              },
            },
            optFilter,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance,
            optLimit,
            optLogHttp,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding of a Cloud Spanner backup",
          options: [
            optAccessTokenFile,
            optAccount,
            optAll,
            optBillingProject,
            optCondition2,
            optConditionFromFile,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance6,
            optLogHttp,
            optMember2,
            optNoAll,
            optProject,
            optQuiet,
            optRole2,
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
          name: "set-iam-policy",
          description: "Set the IAM policy for a Cloud Spanner backup",
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
            optInstance6,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "BACKUP",
              description:
                "ID of the backup or fully qualified identifier for the backup",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy",
              template: "filepaths",
            },
          ],
        },
        {
          name: "update-metadata",
          description: "Updates the metadata of a Cloud Spanner a backup",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--expiration-date",
              description:
                "Expiration time of the backup, must be at least 6 hours and at most 366 days from the time of creation. See `$ gcloud topic datetimes` for information on date/time formats",
              args: {
                name: "EXPIRATION_DATE",
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
            optInstance6,
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--retention-period",
              description:
                "Retention period of the backup relative from now, must be at least 6 hours and at most a year from the time of creation. See `$ gcloud topic datetimes` for information on duration formats",
              args: {
                name: "RETENTION_PERIOD",
                description: "String",
              },
            },
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
      name: "cli",
      description: "An interactive shell for Spanner",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        {
          name: "--database-role",
          description: "Database role user used to access the database",
          args: {
            name: "DATABASE_ROLE",
            description: "String",
          },
        },
        {
          name: "--delimiter",
          description: "Set the statement delimiter",
          args: {
            name: "DELIMITER",
            description: "String",
          },
        },
        {
          name: "--directed-read",
          description:
            "Enables directed reads to provide the flexibility to route read-only transactions and single reads to a specific replica type or region (replica_location:replica_type). The replica_type is optional and can be either READ_ONLY or READ_WRITE",
          args: {
            name: "DIRECTED_READ",
            description: "String",
          },
        },
        {
          name: "--execute",
          description: "Execute the statement and then exits",
          args: {
            name: "EXECUTE",
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
        {
          name: "--host",
          description: "Host on which Spanner server is located",
          args: {
            name: "HOST",
            description: "String",
          },
        },
        {
          name: "--html",
          description: "Show output in HTML format",
        },
        {
          name: "--idle-transaction-timeout",
          description:
            "Set the idle transaction timeout. The default timeout is 60 seconds",
          args: {
            name: "IDLE_TRANSACTION_TIMEOUT",
            description: "Int",
          },
        },
        optImpersonateServiceAccount,
        {
          name: "--init-command",
          description: "SQL statement to execute after startup",
          args: {
            name: "INIT_COMMAND",
            description: "String",
          },
        },
        {
          name: "--init-command-add",
          description: "Additional SQL statement to execute after startup",
          args: {
            name: "INIT_COMMAND_ADD",
            description: "String",
          },
        },
        optInstance3,
        optLogHttp,
        {
          name: "--no-html",
          description: "Show output in HTML format",
          hidden: true,
        },
        {
          name: "--no-show-exec-error",
          description:
            "If true and command fails, print the underlying command that was executed and its exit status",
          hidden: true,
        },
        {
          name: "--no-skip-column-names",
          description: "Do not show column names in output",
          hidden: true,
        },
        {
          name: "--no-skip-system-command",
          description: "Do not allow system command",
          hidden: true,
        },
        {
          name: "--no-table",
          description: "Show output in table format",
          hidden: true,
        },
        {
          name: "--no-xml",
          description: "Show output in XML format",
          hidden: true,
        },
        {
          name: "--port",
          description: "Port number that gcloud uses to connect to Spanner",
          args: {
            name: "PORT",
          },
        },
        optProject,
        {
          name: "--prompt",
          description: "Set the prompt to the specified format",
          args: {
            name: "PROMPT",
            description: "String",
          },
        },
        {
          name: "--proto-descriptor-file",
          description:
            "Path of a file that contains a protobuf-serialized google.protobuf.FileDescriptorSet message to use in this invocation",
          args: {
            name: "PROTO_DESCRIPTOR_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        optQuiet,
        {
          name: "--show-exec-error",
          description:
            "If true and command fails, print the underlying command that was executed and its exit status",
          hidden: true,
        },
        {
          name: "--skip-column-names",
          description: "Do not show column names in output",
        },
        {
          name: "--skip-system-command",
          description: "Do not allow system command",
        },
        {
          name: "--source",
          description: "Execute the statement from a file and then exits",
          args: {
            name: "SOURCE",
            description: "String",
          },
        },
        {
          name: "--system-command",
          description:
            "Enable or disable system commands. Default: ON. _SYSTEM_COMMAND_ must be one of: *ON*, *OFF*",
          args: {
            name: "SYSTEM_COMMAND",
            suggestions: ["ON", "OFF"],
          },
        },
        {
          name: "--table",
          description: "Show output in table format",
        },
        {
          name: "--tee",
          description: "Append a copy of the output to a named file",
          args: {
            name: "TEE",
            description: "String",
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
        {
          name: "--xml",
          description: "Show output in XML format",
        },
      ],
      args: {
        name: "DATABASE",
        description:
          "ID of the database or fully qualified identifier for the database",
      },
    },
    {
      name: "databases",
      description: "Manage Cloud Spanner databases",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Cloud Spanner database",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCondition,
            optConditionFromFile,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance6,
            optLogHttp,
            optMember,
            optProject,
            optQuiet,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DATABASE",
            description:
              "ID of the database or fully qualified identifier for the database",
          },
        },
        {
          name: "change-quorum",
          description: "Change quorum of a Cloud Spanner database",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--dual-region",
              description: "Switch to dual-region quorum type",
              priority: 100,
            },
            optEtag,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance3,
            optLogHttp,
            {
              name: "--no-dual-region",
              description: "Switch to dual-region quorum type",
              hidden: true,
              priority: 100,
            },
            {
              name: "--no-single-region",
              description: "Switch to single-region quorum type",
              hidden: true,
              priority: 100,
            },
            optProject,
            optQuiet,
            {
              name: "--serving-location",
              description: "The cloud Spanner location",
              priority: 100,
              args: {
                name: "SERVING_LOCATION",
                description: "String",
              },
            },
            {
              name: "--single-region",
              description: "Switch to single-region quorum type",
              priority: 100,
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DATABASE",
            description:
              "ID of the database or fully qualified identifier for the database",
          },
        },
        {
          name: "create",
          description: "Create a Cloud Spanner database",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--database-dialect",
              description:
                "The SQL dialect of the Cloud Spanner Database. GOOGLE_STANDARD_SQL is the default. _DATABASE_DIALECT_ must be one of: *POSTGRESQL*, *GOOGLE_STANDARD_SQL*",
              args: {
                name: "DATABASE_DIALECT",
                description: "String",
                suggestions: ["POSTGRESQL", "GOOGLE_STANDARD_SQL"],
              },
            },
            {
              name: "--ddl",
              description:
                "Semi-colon separated DDL (data definition language) statements to run inside the newly created database. If there is an error in any statement, the database is not created. This option is not supported for the PostgreSQL dialect. Full DDL specification is at https://cloud.google.com/spanner/docs/data-definition-language",
              args: {
                name: "DDL",
                description: "String",
              },
            },
            {
              name: "--ddl-file",
              description:
                "Path of a file that contains semi-colon separated DDL (data definition language) statements to run inside the newly created database. If there is an error in any statement, the database is not created. This option is not supported for the PostgreSQL dialect. Full DDL specification is at https://cloud.google.com/spanner/docs/data-definition-language. If --ddl_file is set, --ddl is ignored. One line comments starting with -- are ignored",
              args: {
                name: "DDL_FILE",
                description: "String",
                template: "filepaths",
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
            optInstance3,
            optKmsKey,
            optKmsKeyring,
            optKmsKeys,
            optKmsLocation,
            optKmsProject,
            optLogHttp,
            optNoAsync,
            optProject,
            {
              name: "--proto-descriptors-file",
              description:
                "Path of a file that contains a protobuf-serialized google.protobuf.FileDescriptorSet message. To generate it, install and run `protoc` with --include_imports and --descriptor_set_out",
              args: {
                name: "PROTO_DESCRIPTORS_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DATABASE",
            description:
              "ID of the database or fully qualified identifier for the database",
          },
        },
        {
          name: "ddl",
          description: "Manage the DDL for Cloud Spanner databases",
          subcommands: [
            {
              name: "describe",
              description: "Describe the DDL for a Cloud Spanner database",
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
                {
                  name: "--include-proto-descriptors",
                  description:
                    "Include debug string of proto bundle descriptors in the output. The output is information only and not meant to be parsed",
                },
                optInstance3,
                optLimit,
                optLogHttp,
                {
                  name: "--no-include-proto-descriptors",
                  description:
                    "Include debug string of proto bundle descriptors in the output. The output is information only and not meant to be parsed",
                  hidden: true,
                },
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
              args: {
                name: "DATABASE",
                description:
                  "ID of the database or fully qualified identifier for the database",
              },
            },
            {
              name: "update",
              description: "Update the DDL for a Cloud Spanner database",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--ddl",
                  description:
                    "Semi-colon separated DDL (data definition language) statements to run inside the database. If a statement fails, all subsequent statements in the batch are automatically cancelled",
                  args: {
                    name: "DDL",
                    description: "String",
                  },
                },
                {
                  name: "--ddl-file",
                  description:
                    "Path of a file containing semi-colon separated DDL (data definition language) statements to run inside the database. If a statement fails, all subsequent statements in the batch are automatically cancelled. If --ddl_file is set, --ddl is ignored. One line comments starting with -- are ignored",
                  args: {
                    name: "DDL_FILE",
                    description: "String",
                    template: "filepaths",
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
                optInstance3,
                optLogHttp,
                optNoAsync,
                optProject,
                {
                  name: "--proto-descriptors-file",
                  description:
                    "Path of a file that contains a protobuf-serialized google.protobuf.FileDescriptorSet message. To generate it, install and run `protoc` with --include_imports and --descriptor_set_out",
                  args: {
                    name: "PROTO_DESCRIPTORS_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "DATABASE",
                description:
                  "ID of the database or fully qualified identifier for the database",
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
          name: "delete",
          description: "Delete a Cloud Spanner database",
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
            optInstance3,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DATABASE",
            description:
              "ID of the database or fully qualified identifier for the database",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Spanner database",
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
            optInstance3,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DATABASE",
            description:
              "ID of the database or fully qualified identifier for the database",
          },
        },
        {
          name: "execute-sql",
          description: "Executes a SQL query against a Cloud Spanner database",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--database-role",
              description:
                "Database role user assumes while accessing the database",
              args: {
                name: "DATABASE_ROLE",
                description: "String",
              },
            },
            {
              name: "--enable-partitioned-dml",
              description: "Execute DML statement using Partitioned DML",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance3,
            optLogHttp,
            {
              name: "--no-enable-partitioned-dml",
              description: "Execute DML statement using Partitioned DML",
              hidden: true,
            },
            {
              name: "--no-strong",
              description: "Perform a strong query",
              hidden: true,
            },
            {
              name: "--priority",
              description:
                "The priority for the execute SQL request. _PRIORITY_ must be one of: *high*, *low*, *medium*, *unspecified*",
              args: {
                name: "PRIORITY",
                suggestions: ["high", "low", "medium", "unspecified"],
              },
            },
            optProject,
            {
              name: "--query-mode",
              description:
                "Mode in which the query must be processed. _QUERY_MODE_ must be one of:",
              args: {
                name: "QUERY_MODE",
                description: "String",
                suggestions: [
                  "NORMAL",
                  "PLAN",
                  "PROFILE",
                  "WITH_PLAN_AND_STATS",
                  "WITH_STATS",
                ],
              },
            },
            optQuiet,
            {
              name: "--read-timestamp",
              description: "Perform a query at the given timestamp",
              args: {
                name: "TIMESTAMP",
                description: "String",
              },
            },
            {
              name: "--sql",
              description:
                "The SQL query to issue to the database. Cloud Spanner SQL is described at https://cloud.google.com/spanner/docs/query-syntax",
              priority: 100,
              args: {
                name: "SQL",
                description: "String",
              },
            },
            {
              name: "--strong",
              description: "Perform a strong query",
            },
            {
              name: "--timeout",
              description:
                "Maximum time to wait for the SQL query to complete. See $ gcloud topic datetimes for information on duration formats",
              args: {
                name: "TIMEOUT",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DATABASE",
            description:
              "ID of the database or fully qualified identifier for the database",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Spanner database",
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
            optInstance3,
            optLimit,
            optLogHttp,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DATABASE",
            description:
              "ID of the database or fully qualified identifier for the database",
          },
        },
        {
          name: "list",
          description:
            "List the Cloud Spanner databases contained within the given instance",
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
            optInstance,
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
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding of a Cloud Spanner database",
          options: [
            optAccessTokenFile,
            optAccount,
            optAll,
            optBillingProject,
            optCondition2,
            optConditionFromFile,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance6,
            optLogHttp,
            optMember2,
            optNoAll,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DATABASE",
            description:
              "ID of the database or fully qualified identifier for the database",
          },
        },
        {
          name: "restore",
          description: "Restore a Cloud Spanner database",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--destination-database",
              description:
                "ID of the database or fully qualified identifier for the database",
              priority: 100,
              args: {
                name: "DESTINATION_DATABASE",
                description: "String",
              },
            },
            {
              name: "--destination-instance",
              description: "The Cloud Spanner instance for the database",
              args: {
                name: "DESTINATION_INSTANCE",
                description: "String",
              },
            },
            {
              name: "--encryption-type",
              description:
                "The encryption type of the restored database. _ENCRYPTION_TYPE_ must be one of:",
              args: {
                name: "ENCRYPTION_TYPE",
                suggestions: [
                  "customer-managed-encryption",
                  "google-default-encryption",
                  "use-config-default-or-backup-encryption",
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
            optKmsKey,
            optKmsKeyring,
            optKmsKeys,
            optKmsLocation,
            optKmsProject,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--source-backup",
              description:
                "ID of the backup or fully qualified identifier for the backup",
              priority: 100,
              args: {
                name: "SOURCE_BACKUP",
                description: "String",
              },
            },
            {
              name: "--source-instance",
              description: "The Cloud Spanner instance for the backup",
              args: {
                name: "SOURCE_INSTANCE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "roles",
          description: "Manage Cloud Spanner database roles",
          subcommands: [
            {
              name: "list",
              description:
                "List the Cloud Spanner database roles defined in the given database",
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
                optInstance3,
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
          name: "sessions",
          description: "Manage the sessions for Cloud Spanner databases",
          subcommands: [
            {
              name: "delete",
              description: "Delete a Cloud Spanner session",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--database",
                  description: "The Cloud Spanner database for the session",
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
                {
                  name: "--instance",
                  description: "The Cloud Spanner instance for the session",
                  args: {
                    name: "INSTANCE",
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
                name: "SESSION",
                description:
                  "ID of the session or fully qualified identifier for the session",
              },
            },
            {
              name: "list",
              description:
                "List the Cloud Spanner sessions contained within the given database",
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
                optInstance3,
                optLimit,
                optLogHttp,
                optNoUri,
                optPageSize,
                optProject,
                optQuiet,
                {
                  name: "--server-filter",
                  description:
                    "An expression for filtering the results of the request on the server. Filter rules are case insensitive. The fields eligible for filtering are: * labels.key where key is the name of a label",
                  args: {
                    name: "SERVER_FILTER",
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
          name: "set-iam-policy",
          description: "Set the IAM policy for a Cloud Spanner database",
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
            optInstance3,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "DATABASE",
              description:
                "ID of the database or fully qualified identifier for the database",
            },
            {
              name: "POLICY_FILE",
              description: "Name of JSON or YAML file with the IAM policy",
              template: "filepaths",
            },
          ],
        },
        {
          name: "splits",
          description: "Manage the split points for Spanner databases",
          subcommands: [
            {
              name: "add",
              description: "Add split points to a Spanner database",
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
                  name: "--initiator",
                  description:
                    "The tag to identify the initiator of the split points",
                  args: {
                    name: "INITIATOR",
                    description: "String",
                  },
                },
                optInstance3,
                optLogHttp,
                optProject,
                optQuiet,
                {
                  name: "--split-expiration-date",
                  description:
                    "The date when the split points become system managed and becomes eligible for merging. The default is 10 days from the date of creation. The maximum is 30 days from the date of creation",
                  args: {
                    name: "SPLIT_EXPIRATION_DATE",
                    description: "String",
                  },
                },
                {
                  name: "--splits-file",
                  description:
                    "The path of a file containing split points to add to the database. Separate split points in the file with a new line. The file format is <ObjectType>[space]<ObjectName>[space]<Split Value>, where the ObjectType is one of TABLE or INDEX and the Split Value is the split point key. For index, the split point key is the index key with or without a full table key prefix",
                  priority: 100,
                  args: {
                    name: "SPLITS_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "DATABASE",
                description:
                  "ID of the database or fully qualified identifier for the database",
              },
            },
            {
              name: "list",
              description:
                "List split points that are added by a user to a Spanner database",
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
                optInstance3,
                optLimit,
                optLogHttp,
                optPageSize,
                optProject,
                optQuiet,
                optSortBy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "DATABASE",
                description:
                  "ID of the database or fully qualified identifier for the database",
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
          name: "update",
          description: "Update a Cloud Spanner database",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--clear-kms-keys",
              description:
                "Removes all KMS key references and reverts the database to Google-managed encryption",
            },
            optConfiguration,
            {
              name: "--enable-drop-protection",
              description:
                "Enable database deletion protection on this database. Use *--enable-drop-protection* to enable and *--no-enable-drop-protection* to disable",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance3,
            {
              name: "--kms-keys",
              description:
                "Update KMS key references for this database. Users should always provide the full set of required KMS key references",
              args: {
                name: "KMS_KEY",
                description: "List",
              },
            },
            optLogHttp,
            optNoAsync,
            {
              name: "--no-clear-kms-keys",
              description:
                "Removes all KMS key references and reverts the database to Google-managed encryption",
              hidden: true,
            },
            {
              name: "--no-enable-drop-protection",
              description:
                "Enable database deletion protection on this database",
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DATABASE",
            description:
              "ID of the database or fully qualified identifier for the database",
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
      name: "instance-configs",
      description: "Manage Cloud Spanner instance configs",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud Spanner instance configuration",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-replicas",
              description:
                "Add new replicas while cloning from the source config",
              args: {
                name: "location=LOCATION,type=TYPE",
                description: "List",
              },
            },
            optAsync,
            {
              name: "--base-config",
              description:
                "The name of the Google-managed instance configuration, based on which your custom configuration is created",
              priority: 100,
              args: {
                name: "BASE_CONFIG",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--clone-config",
              description:
                'The ID of the instance config, based on which this configuration is created. The clone is an independent copy of this config. Available configurations can be found by running "gcloud spanner instance-configs list"',
              priority: 100,
              args: {
                name: "INSTANCE_CONFIG",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--display-name",
              description:
                "The name of this instance configuration as it appears in UIs. Must specify this option if creating an instance-config with --replicas",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optEtag,
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
            optNoAsync,
            {
              name: "--no-validate-only",
              description:
                "If specified, validate that the creation will succeed without creating the instance configuration",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--replicas",
              description:
                "The geographic placement of nodes in this instance configuration and their replication types",
              priority: 100,
              args: {
                name: "location=LOCATION,type=TYPE",
                description: "List",
              },
            },
            {
              name: "--skip-replicas",
              description:
                "Skip replicas from the source config while cloning. Each replica in the list must exist in the source config replicas list",
              args: {
                name: "location=LOCATION,type=TYPE",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            {
              name: "--validate-only",
              description:
                "If specified, validate that the creation will succeed without creating the instance configuration",
            },
            optVerbosity,
          ],
          args: {
            name: "INSTANCE_CONFIG",
            description:
              "Cloud Spanner instance configuration. The 'custom-' prefix is required to avoid name conflicts with Google-managed configurations",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Spanner instance configuration",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--etag",
              description:
                "Used for optimistic concurrency control as a way to help prevent simultaneous deletes of an instance config from overwriting each other",
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
            {
              name: "--no-validate-only",
              description:
                "If specified, validate that the deletion will succeed without deleting the instance config",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            {
              name: "--validate-only",
              description:
                "If specified, validate that the deletion will succeed without deleting the instance config",
            },
            optVerbosity,
          ],
          args: {
            name: "INSTANCE_CONFIG",
            description: "Cloud Spanner instance config",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Spanner instance configuration",
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
            name: "INSTANCE_CONFIG",
            description: "Cloud Spanner instance config",
          },
        },
        {
          name: "list",
          description:
            "List the available Cloud Spanner instance configurations",
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
        {
          name: "update",
          description: "Update a Cloud Spanner instance configuration",
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
              description:
                "The name of this instance configuration as it appears in UIs",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optEtag,
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
              name: "--no-clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
              hidden: true,
            },
            {
              name: "--no-validate-only",
              description:
                "Use this flag to validate that the request will succeed before executing it",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--remove-labels",
              description:
                "List of label keys to remove. If a label does not exist it is silently ignored. If `--update-labels` is also specified then `--update-labels` is applied first",
              args: {
                name: "KEY",
                description: "List",
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
            optUserOutputEnabled,
            {
              name: "--validate-only",
              description:
                "Use this flag to validate that the request will succeed before executing it",
            },
            optVerbosity,
          ],
          args: {
            name: "INSTANCE_CONFIG",
            description:
              "Cloud Spanner instance config. The 'custom-' prefix is required to avoid name conflicts with Google-managed configurations",
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
      name: "instance-partitions",
      description: "Manage Spanner instance partitions",
      subcommands: [
        {
          name: "create",
          description: "Create a Spanner instance partition",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optAutoscalingHighPriorityCpuTarget,
            {
              name: "--autoscaling-max-nodes",
              description:
                "Maximum number of nodes for the autoscaled instance",
              priority: 100,
              args: {
                name: "AUTOSCALING_MAX_NODES",
                description: "Int",
              },
            },
            {
              name: "--autoscaling-max-processing-units",
              description:
                "Maximum number of processing units for the autoscaled instance",
              priority: 100,
              args: {
                name: "AUTOSCALING_MAX_PROCESSING_UNITS",
                description: "Int",
              },
            },
            {
              name: "--autoscaling-min-nodes",
              description:
                "Minimum number of nodes for the autoscaled instance",
              priority: 100,
              args: {
                name: "AUTOSCALING_MIN_NODES",
                description: "Int",
              },
            },
            {
              name: "--autoscaling-min-processing-units",
              description:
                "Minimum number of processing units for the autoscaled instance",
              priority: 100,
              args: {
                name: "AUTOSCALING_MIN_PROCESSING_UNITS",
                description: "Int",
              },
            },
            {
              name: "--autoscaling-storage-target",
              description:
                "Specifies the target percentage of storage the autoscaled instance can utilize",
              priority: 100,
              args: {
                name: "AUTOSCALING_STORAGE_TARGET",
                description: "Int",
              },
            },
            optAutoscalingTotalCpuTarget,
            optBillingProject,
            {
              name: "--config",
              description:
                'Instance configuration defines the geographic placement and replication used by the instance partition. Available configurations can be found by running "gcloud spanner instance-configs list"',
              priority: 100,
              args: {
                name: "CONFIG",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--description",
              description: "Description of the instance partition",
              priority: 100,
              args: {
                name: "DESCRIPTION",
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
            optInstance4,
            optLogHttp,
            optNoAsync,
            {
              name: "--nodes",
              description: "Number of nodes for the instance partition",
              args: {
                name: "NODES",
                description: "Int",
              },
            },
            {
              name: "--processing-units",
              description:
                "Number of processing units for the instance partition",
              args: {
                name: "PROCESSING_UNITS",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE_PARTITION",
            description:
              "ID of the instance partition or fully qualified identifier for the instance partition",
          },
        },
        {
          name: "delete",
          description:
            "Delete a Spanner instance partition. You can't delete the default instance partition using this command",
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
            optInstance4,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE_PARTITION",
            description:
              "ID of the instance partition or fully qualified identifier for the instance partition",
          },
        },
        {
          name: "describe",
          description: "Describe a Spanner instance partition",
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
            optInstance4,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE_PARTITION",
            description:
              "ID of the instance partition or fully qualified identifier for the instance partition",
          },
        },
        {
          name: "list",
          description:
            "List the Spanner instance partitions contained within the given instance",
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
            optInstance,
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
          description:
            "Update a Spanner instance partition. You can't update the default instance partition using this command",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optAutoscalingHighPriorityCpuTarget,
            {
              name: "--autoscaling-max-nodes",
              description:
                "Maximum number of nodes for the autoscaled instance",
              args: {
                name: "AUTOSCALING_MAX_NODES",
                description: "Int",
              },
            },
            {
              name: "--autoscaling-max-processing-units",
              description:
                "Maximum number of processing units for the autoscaled instance",
              args: {
                name: "AUTOSCALING_MAX_PROCESSING_UNITS",
                description: "Int",
              },
            },
            {
              name: "--autoscaling-min-nodes",
              description:
                "Minimum number of nodes for the autoscaled instance",
              args: {
                name: "AUTOSCALING_MIN_NODES",
                description: "Int",
              },
            },
            {
              name: "--autoscaling-min-processing-units",
              description:
                "Minimum number of processing units for the autoscaled instance",
              args: {
                name: "AUTOSCALING_MIN_PROCESSING_UNITS",
                description: "Int",
              },
            },
            {
              name: "--autoscaling-storage-target",
              description:
                "Specifies the target percentage of storage the autoscaled instance can utilize",
              args: {
                name: "AUTOSCALING_STORAGE_TARGET",
                description: "Int",
              },
            },
            optAutoscalingTotalCpuTarget,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the instance partition",
              args: {
                name: "DESCRIPTION",
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
            optInstance4,
            optLogHttp,
            optNoAsync,
            {
              name: "--nodes",
              description: "Number of nodes for the instance partition",
              args: {
                name: "NODES",
                description: "Int",
              },
            },
            {
              name: "--processing-units",
              description:
                "Number of processing units for the instance partition",
              args: {
                name: "PROCESSING_UNITS",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE_PARTITION",
            description:
              "ID of the instance partition or fully qualified identifier for the instance partition",
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
      description: "Manage Cloud Spanner instances",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Cloud Spanner instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCondition,
            optConditionFromFile,
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
            optMember,
            optProject,
            optQuiet,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
            isOptional: true,
          },
        },
        {
          name: "create",
          description: "Create a Cloud Spanner instance",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--asymmetric-autoscaling-option",
              description:
                "Specifies the asymmetric autoscaling option for the instance",
              args: {
                name: "ASYMMETRIC_AUTOSCALING_OPTION",
                description: "Dict",
              },
            },
            optAsync,
            optAutoscalingHighPriorityCpuTarget,
            {
              name: "--autoscaling-max-nodes",
              description:
                "Maximum number of nodes for the autoscaled instance",
              priority: 100,
              args: {
                name: "AUTOSCALING_MAX_NODES",
                description: "Int",
              },
            },
            {
              name: "--autoscaling-max-processing-units",
              description:
                "Maximum number of processing units for the autoscaled instance",
              priority: 100,
              args: {
                name: "AUTOSCALING_MAX_PROCESSING_UNITS",
                description: "Int",
              },
            },
            {
              name: "--autoscaling-min-nodes",
              description:
                "Minimum number of nodes for the autoscaled instance",
              priority: 100,
              args: {
                name: "AUTOSCALING_MIN_NODES",
                description: "Int",
              },
            },
            {
              name: "--autoscaling-min-processing-units",
              description:
                "Minimum number of processing units for the autoscaled instance",
              priority: 100,
              args: {
                name: "AUTOSCALING_MIN_PROCESSING_UNITS",
                description: "Int",
              },
            },
            {
              name: "--autoscaling-storage-target",
              description:
                "Specifies the target percentage of storage the autoscaled instance can utilize",
              priority: 100,
              args: {
                name: "AUTOSCALING_STORAGE_TARGET",
                description: "Int",
              },
            },
            optAutoscalingTotalCpuTarget,
            optBillingProject,
            {
              name: "--config",
              description:
                'Instance configuration defines the geographic placement and replication of the databases in that instance. Available configurations can be found by running "gcloud spanner instance-configs list"',
              priority: 100,
              args: {
                name: "CONFIG",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--default-backup-schedule-type",
              description:
                "The default backup schedule type that is used in the instance. _DEFAULT_BACKUP_SCHEDULE_TYPE_ must be one of:",
              args: {
                name: "DEFAULT_BACKUP_SCHEDULE_TYPE",
                description: "String",
                suggestions: [
                  "AUTOMATIC",
                  "DEFAULT_BACKUP_SCHEDULE_TYPE_UNSPECIFIED",
                  "NONE",
                ],
              },
            },
            {
              name: "--description",
              description: "Description of the instance",
              priority: 100,
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--disable-downscaling",
              description:
                "Set the flag to disable downscaling for the autoscaled instance. Use *--disable-downscaling* to enable and *--no-disable-downscaling* to disable",
            },
            {
              name: "--edition",
              description: "Spanner edition. _EDITION_ must be one of:",
              args: {
                name: "EDITION",
                description: "String",
                suggestions: [
                  "EDITION_UNSPECIFIED",
                  "ENTERPRISE",
                  "ENTERPRISE_PLUS",
                  "STANDARD",
                ],
              },
            },
            {
              name: "--expire-behavior",
              description:
                "The expire behavior of a free trial instance. _EXPIRE_BEHAVIOR_ must be one of:",
              args: {
                name: "EXPIRE_BEHAVIOR",
                suggestions: [
                  "free-to-provisioned",
                  "remove-after-grace-period",
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
            {
              name: "--instance-type",
              description:
                "Specifies the type for this instance. _INSTANCE_TYPE_ must be one of:",
              args: {
                name: "INSTANCE_TYPE",
                suggestions: ["free-instance", "provisioned"],
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
            optNoAsync,
            {
              name: "--no-disable-downscaling",
              description:
                "Set the flag to disable downscaling for the autoscaled instance",
            },
            {
              name: "--nodes",
              description: "Number of nodes for the instance",
              args: {
                name: "NODES",
                description: "Int",
              },
            },
            {
              name: "--processing-units",
              description: "Number of processing units for the instance",
              args: {
                name: "PROCESSING_UNITS",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--tags",
              description:
                "List of tags KEY=VALUE pairs to bind. Each item must be expressed as either ID: `<tag-key-id>=<tag-value-id>` or",
              hidden: true,
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description: "Cloud Spanner instance ID",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Spanner instance",
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
            name: "INSTANCE",
            description: "Cloud Spanner instance ID",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Spanner instance",
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
            name: "INSTANCE",
            description: "Cloud Spanner instance ID",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Spanner instance",
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
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
            isOptional: true,
          },
        },
        {
          name: "get-locations",
          description:
            "Get the location of every replica in a Cloud Spanner instance",
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
            {
              name: "--no-verbose",
              description:
                "Indicates that both regions and types of replicas be returned",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            {
              name: "--verbose",
              description:
                "Indicates that both regions and types of replicas be returned",
            },
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description: "Cloud Spanner instance ID",
          },
        },
        {
          name: "list",
          description: "List the Cloud Spanner instances in this project",
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
        {
          name: "move",
          description:
            "Move the Cloud Spanner instance to the specified instance configuration",
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
              name: "--target-config",
              description:
                "Target Instance configuration to move the instances",
              priority: 100,
              args: {
                name: "TARGET_CONFIG",
                description: "String",
              },
            },
            {
              name: "--target-database-move-configs",
              description:
                "Database level configurations for each database to be moved. Currently only used for CMEK-enabled databases to specificy the target database KMS keys. Sets `target_database_move_configs` value",
              args: {
                name: "^:^database-id=DATABASE_ID:kms-key-names=KEY1,KEY2",
                description: "Dict",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description: "Cloud Spanner instance ID",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding of a Cloud Spanner instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAll,
            optBillingProject,
            optCondition2,
            optConditionFromFile,
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
            optMember2,
            optNoAll,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
            isOptional: true,
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a Cloud Spanner instance",
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
          args: [
            {
              name: "INSTANCE",
              description:
                "ID of the instance or fully qualified identifier for the instance",
              isOptional: true,
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy",
              template: "filepaths",
            },
          ],
        },
        {
          name: "update",
          description: "Update a Cloud Spanner instance",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--asymmetric-autoscaling-option",
              description:
                "Specifies the asymmetric autoscaling option for the instance",
              args: {
                name: "ASYMMETRIC_AUTOSCALING_OPTION",
                description: "Dict",
              },
            },
            optAsync,
            optAutoscalingHighPriorityCpuTarget,
            {
              name: "--autoscaling-max-nodes",
              description:
                "Maximum number of nodes for the autoscaled instance",
              args: {
                name: "AUTOSCALING_MAX_NODES",
                description: "Int",
              },
            },
            {
              name: "--autoscaling-max-processing-units",
              description:
                "Maximum number of processing units for the autoscaled instance",
              args: {
                name: "AUTOSCALING_MAX_PROCESSING_UNITS",
                description: "Int",
              },
            },
            {
              name: "--autoscaling-min-nodes",
              description:
                "Minimum number of nodes for the autoscaled instance",
              args: {
                name: "AUTOSCALING_MIN_NODES",
                description: "Int",
              },
            },
            {
              name: "--autoscaling-min-processing-units",
              description:
                "Minimum number of processing units for the autoscaled instance",
              args: {
                name: "AUTOSCALING_MIN_PROCESSING_UNITS",
                description: "Int",
              },
            },
            {
              name: "--autoscaling-storage-target",
              description:
                "Specifies the target percentage of storage the autoscaled instance can utilize",
              args: {
                name: "AUTOSCALING_STORAGE_TARGET",
                description: "Int",
              },
            },
            optAutoscalingTotalCpuTarget,
            optBillingProject,
            {
              name: "--clear-asymmetric-autoscaling-option",
              description:
                "Specify a comma separated list of locations from which to remove asymmetric autoscaling options",
              args: {
                name: "LOCATION",
                description: "List",
              },
            },
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
            },
            optConfiguration,
            {
              name: "--default-backup-schedule-type",
              description:
                "The default backup schedule type that is used in the instance. _DEFAULT_BACKUP_SCHEDULE_TYPE_ must be one of:",
              args: {
                name: "DEFAULT_BACKUP_SCHEDULE_TYPE",
                description: "String",
                suggestions: [
                  "AUTOMATIC",
                  "DEFAULT_BACKUP_SCHEDULE_TYPE_UNSPECIFIED",
                  "NONE",
                ],
              },
            },
            {
              name: "--description",
              description: "Description of the instance",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--disable-downscaling",
              description:
                "Set the flag to disable downscaling for the autoscaled instance. Use *--disable-downscaling* to enable and *--no-disable-downscaling* to disable",
            },
            {
              name: "--edition",
              description:
                "Spanner edition. You can upgrade your Standard edition instance to the `ENTERPRISE` edition or `ENTERPRISE_PLUS` edition. You can also upgrade your Enterprise edition instance to the `ENTERPRISE_PLUS` edition. You can downgrade your `ENTERPRISE_PLUS` edition instance to the `ENTERPRISE` or `STANDARD` edition. You can also downgrade your `ENTERPRISE` edition instance to the `STANDARD` edition. You must stop using the higher-tier edition features in order to downgrade. Otherwise, downgrade fails. For more information, see [Spanner editions overview](https://cloud.google.com/spanner/docs/editions-overview)",
              args: {
                name: "EDITION",
                description: "String",
              },
            },
            {
              name: "--expire-behavior",
              description:
                "The expire behavior of a free trial instance. _EXPIRE_BEHAVIOR_ must be one of:",
              args: {
                name: "EXPIRE_BEHAVIOR",
                suggestions: [
                  "free-to-provisioned",
                  "remove-after-grace-period",
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
            {
              name: "--instance-type",
              description:
                "Specifies the type for this instance. _INSTANCE_TYPE_ must be one of:",
              args: {
                name: "INSTANCE_TYPE",
                suggestions: ["free-instance", "provisioned"],
              },
            },
            optLogHttp,
            optNoAsync,
            {
              name: "--no-clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
              hidden: true,
            },
            {
              name: "--no-disable-downscaling",
              description:
                "Set the flag to disable downscaling for the autoscaled instance",
            },
            {
              name: "--nodes",
              description: "Number of nodes for the instance",
              args: {
                name: "NODES",
                description: "Int",
              },
            },
            {
              name: "--processing-units",
              description: "Number of processing units for the instance",
              args: {
                name: "PROCESSING_UNITS",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--remove-labels",
              description:
                "List of label keys to remove. If a label does not exist it is silently ignored. If `--update-labels` is also specified then `--update-labels` is applied first",
              args: {
                name: "KEY",
                description: "List",
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
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description: "Cloud Spanner instance ID",
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
      description: "Manage Cloud Spanner operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a Cloud Spanner operation",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--backup",
              description:
                "For a backup operation, the name of the backup the operation is executing on",
              args: {
                name: "BACKUP",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--database",
              description:
                "For a database operation, the name of the database the operation is executing on",
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
            optInstance5,
            optInstanceConfig,
            {
              name: "--instance-partition",
              description:
                "For an instance partition operation, the name of the instance partition the operation is executing on",
              args: {
                name: "INSTANCE_PARTITION",
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
            name: "OPERATION-ID",
            description: "ID of the operation",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Spanner operation",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--backup",
              description:
                "For a backup operation, the name of the backup the operation is executing on",
              args: {
                name: "BACKUP",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--database",
              description:
                "For a database operation, the name of the database the operation is executing on",
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
            optInstance5,
            optInstanceConfig,
            {
              name: "--instance-partition",
              description:
                "For an instance partition operation, the name of the instance partition the operation is executing on",
              args: {
                name: "INSTANCE_PARTITION",
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
            name: "OPERATION-ID",
            description: "ID of the operation",
          },
        },
        {
          name: "list",
          description: "List the Cloud Spanner operations",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--backup",
              description:
                "For backup operations, the name of the backup the operations are executing on",
              args: {
                name: "BACKUP",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--database",
              description:
                "For database operations, the name of the database the operations are executing on",
              args: {
                name: "DATABASE",
                description: "String",
              },
            },
            optFilter,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance5,
            optInstanceConfig,
            {
              name: "--instance-partition",
              description:
                "For instance partition operations, the name of the instance partition the operation is executing on",
              args: {
                name: "INSTANCE_PARTITION",
                description: "String",
              },
            },
            optLimit,
            optLogHttp,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            {
              name: "--type",
              description:
                "(optional) List only the operations of the given type. _TYPE_ must be one of:",
              args: {
                name: "TYPE",
                suggestions: [
                  "BACKUP",
                  "DATABASE",
                  "DATABASE_CHANGE_QUORUM",
                  "DATABASE_CREATE",
                  "DATABASE_RESTORE",
                  "DATABASE_UPDATE_DDL",
                  "INSTANCE",
                  "INSTANCE_CONFIG_CREATE",
                  "INSTANCE_CONFIG_UPDATE",
                  "INSTANCE_PARTITION",
                ],
              },
            },
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
      name: "rows",
      description: "Manage the rows in Cloud Spanner databases",
      subcommands: [
        {
          name: "delete",
          description: "Delete a row in a Cloud Spanner database",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDatabase,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance3,
            {
              name: "--keys",
              description: "The primary key values of the row to delete",
              priority: 100,
              args: {
                name: "KEY",
                description: "List",
              },
            },
            optLogHttp,
            optProject,
            optQuiet,
            optTable,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "insert",
          description: "Insert a row in a Cloud Spanner database",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--data",
              description:
                "The column names and values for the row being added. For complicated input values, such as arrays, use the `--flags-file` flag. See $ gcloud topic flags-file for more information",
              priority: 100,
              args: {
                name: "COLUMN_NAME=VALUE",
                description: "Dict",
              },
            },
            optDatabase,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance3,
            optLogHttp,
            optProject,
            optQuiet,
            optTable,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Update a row in a Cloud Spanner database",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--data",
              description:
                "The column names and values for the row being updated. For complicated input values, such as arrays, use the `--flags-file` flag. See $ gcloud topic flags-file for more information",
              priority: 100,
              args: {
                name: "COLUMN_NAME=VALUE",
                description: "Dict",
              },
            },
            optDatabase,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance3,
            optLogHttp,
            optProject,
            optQuiet,
            optTable,
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
      name: "samples",
      description: "Cloud Spanner sample apps",
      subcommands: [
        {
          name: "backend",
          description:
            "Run the backend gRPC service for the given Cloud Spanner sample app",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--database-id",
              description: "The Cloud Spanner database ID for the sample app",
              args: {
                name: "DATABASE_ID",
                description: "String",
              },
            },
            {
              name: "--duration",
              description:
                "Duration of time allowed to run before stopping the service",
              args: {
                name: "DURATION",
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
            optInstanceId,
            optLogHttp,
            {
              name: "--port",
              description: "Port on which to receive gRPC requests",
              args: {
                name: "PORT",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "APPNAME",
            description: 'The sample app name, e.g. "finance"',
          },
        },
        {
          name: "init",
          description: "Initialize a Cloud Spanner sample app",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--database-id",
              description:
                "ID of the new Cloud Spanner database to create for the sample app",
              args: {
                name: "DATABASE_ID",
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
            optInstanceId,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "APPNAME",
            description: 'The sample app name, e.g. "finance", "finance-graph"',
          },
        },
        {
          name: "list",
          description: "List available sample applications",
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
        {
          name: "run",
          description: "Run the given Cloud Spanner sample app",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--cleanup",
              description:
                "Delete the instance after running the sample app. Enabled by default, use *--no-cleanup* to disable",
            },
            optConfiguration,
            {
              name: "--database-id",
              description:
                "ID of the new Cloud Spanner database to create for the sample app",
              args: {
                name: "DATABASE_ID",
                description: "String",
              },
            },
            {
              name: "--duration",
              description:
                "Duration of time allowed to run the sample app before stopping the service",
              args: {
                name: "DURATION",
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
            optInstanceId,
            optLogHttp,
            {
              name: "--no-cleanup",
              description: "Delete the instance after running the sample app",
              hidden: true,
            },
            {
              name: "--no-skip-init",
              description:
                "Use an existing database instead of creating a new one",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--skip-init",
              description:
                "Use an existing database instead of creating a new one",
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "APPNAME",
            description: 'The sample app name, e.g. "finance"',
          },
        },
        {
          name: "workload",
          description:
            "Generate gRPC traffic for a given sample app's backend service",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--duration",
              description:
                "Duration of time allowed to run before stopping the workload",
              args: {
                name: "DURATION",
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
              name: "--port",
              description: "Port of the running backend service",
              args: {
                name: "PORT",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--target-qps",
              description: "Target requests per second",
              args: {
                name: "TARGET_QPS",
                description: "Int",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "APPNAME",
            description: 'The sample app name, e.g. "finance"',
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
