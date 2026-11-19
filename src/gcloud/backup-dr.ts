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
    "Return immediately, without waiting for the operation in progress to complete. The default is *True*. Enabled by default, use *--no-async* to disable",
};

const optBackupVault: Fig.Option = {
  name: "--backup-vault",
  description: "The ID of the Backup Vault",
  args: {
    name: "BACKUP_VAULT",
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

const optDataSource: Fig.Option = {
  name: "--data-source",
  description: "The ID of the Data Source",
  args: {
    name: "DATA_SOURCE",
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
  description:
    "ID of the location or fully qualified identifier for the location",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description: "Location ID of the resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation4: Fig.Option = {
  name: "--location",
  description: "The location of the Backup Plan Association",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation5: Fig.Option = {
  name: "--location",
  description: "The location of the Backup Plan",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation6: Fig.Option = {
  name: "--location",
  description: "The location of the Backup Vault",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation7: Fig.Option = {
  name: "--location",
  description: "The location of the Backup",
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

const optNoAsync2: Fig.Option = {
  name: "--no-async",
  description: "Wait for the operation in progress to complete",
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

const optWorkloadProject: Fig.Option = {
  name: "--workload-project",
  description: "Cloud project id for the Backup Plan Association",
  args: {
    name: "WORKLOAD_PROJECT",
    description: "String",
  },
};

const completionSpec: Fig.Spec = {
  name: "backup-dr",
  description: "Manage Backup and DR resources",
  subcommands: [
    {
      name: "backup-plan-associations",
      description: "Manage Backup and DR backup plan associations",
      subcommands: [
        {
          name: "create",
          description: "Create a new backup plan association",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--backup-plan",
              description:
                "ID of the Backup Plan or fully qualified identifier for the Backup Plan",
              priority: 100,
              args: {
                name: "BACKUP_PLAN",
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
            optLocation4,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--resource",
              description:
                "The resource to which the backup plan is to be applied. E.g., projects/sample-project/zones/us-central1-a/instances/sample-instance",
              priority: 100,
              args: {
                name: "RESOURCE",
                description: "String",
              },
            },
            {
              name: "--resource-type",
              description:
                "Type of resource to which the backup plan should be applied",
              priority: 100,
              args: {
                name: "RESOURCE_TYPE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optWorkloadProject,
          ],
          args: {
            name: "BACKUP_PLAN_ASSOCIATION",
            description:
              "ID of the Backup Plan Association or fully qualified identifier for the Backup Plan Association",
          },
        },
        {
          name: "delete",
          description: "Delete the specified backup plan association",
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
            optLocation4,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optWorkloadProject,
          ],
          args: {
            name: "BACKUP_PLAN_ASSOCIATION",
            description:
              "ID of the Backup Plan Association or fully qualified identifier for the Backup Plan Association",
          },
        },
        {
          name: "describe",
          description: "Show details of the backup plan association",
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
            name: "BACKUP_PLAN_ASSOCIATION",
            description:
              "ID of the backup_plan_association or fully qualified identifier for the backup_plan_association",
          },
        },
        {
          name: "fetch-for-resource-type",
          description:
            "Fetch Backup Plan Associations for a given resource type and location",
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
                "Location for which backup plan associations should be fetched",
              priority: 100,
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
          args: {
            name: "RESOURCE_TYPE",
            description:
              "Resource type for which backup plan associations should be fetched",
          },
        },
        {
          name: "list",
          description: "List Backup and DR backup plan associations",
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
            optLocation2,
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
          name: "trigger-backup",
          description: "Create an on-demand backup for a resource",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--backup-rule-id",
              description:
                "Name of an existing backup rule to use for creating an on-demand backup",
              args: {
                name: "BACKUP_RULE_ID",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--custom-retention-days",
              description: "Duration for which backup data will be retained",
              args: {
                name: "CUSTOM_RETENTION_DAYS",
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
              name: "--labels",
              description: "Labels to be applied to the backup",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optLocation4,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optWorkloadProject,
          ],
          args: {
            name: "BACKUP_PLAN_ASSOCIATION",
            description:
              "ID of the Backup Plan Association or fully qualified identifier for the Backup Plan Association",
          },
        },
        {
          name: "update",
          description:
            "Update a specific backup plan within a backup plan association",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--backup-plan",
              description:
                "ID of the Backup Plan or fully qualified identifier for the Backup Plan",
              priority: 100,
              args: {
                name: "BACKUP_PLAN",
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
            optLocation4,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optWorkloadProject,
          ],
          args: {
            name: "BACKUP_PLAN_ASSOCIATION",
            description:
              "ID of the Backup Plan Association or fully qualified identifier for the Backup Plan Association",
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
      name: "backup-plan-revisions",
      description: "View Backup and DR backup plan revisions",
      subcommands: [
        {
          name: "describe",
          description: "Show details of the backup plan revision",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: ["--backup-plan", "--backup_plan"],
              description: "The ID of the Backup Plan",
              args: {
                name: "BACKUP_PLAN",
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
            optLocation3,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP_PLAN_REVISION",
            description:
              "ID of the backup_plan_revision or fully qualified identifier for the backup_plan_revision",
          },
        },
        {
          name: "list",
          description: "List backup plan revisions",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--backup-plan",
              description:
                "ID of the backup_plan or fully qualified identifier for the backup_plan",
              args: {
                name: "BACKUP_PLAN",
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
            optLocation3,
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
      name: "backup-plans",
      description: "Manage Backup and DR backup plans",
      subcommands: [
        {
          name: "create",
          description: "Creates a new Backup Plan",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--backup-rule",
              description:
                "Backup rule that defines parameters for when and how a backup is created. This flag can be repeated to create more backup rules",
              isRepeatable: true,
              args: {
                name: "PROPERTY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--backup-vault",
              description:
                "ID of the Backup Vault or fully qualified identifier for the Backup Vault",
              priority: 100,
              args: {
                name: "BACKUP_VAULT",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--compute-instance-properties",
              description:
                "Workload-specific properties for Compute Engine instance backups generated by this plan",
              args: {
                name: "PROPERTY=VALUE",
                description: "Dict",
              },
            },
            optConfiguration,
            {
              name: "--description",
              description:
                "Provide a description of the backup plan, such as specific use cases and relevant details, in 2048 characters or less",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--disk-properties",
              description:
                "Workload-specific properties for disk backups generated by this plan",
              args: {
                name: "PROPERTY=VALUE",
                description: "Dict",
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
              name: "--labels",
              description:
                "If you have assigned labels to your resources for grouping, you can provide the label using this flag.A label is a key-value pair",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optLocation5,
            optLogHttp,
            {
              name: "--log-retention-days",
              description:
                'Configures how long logs will be stored. It is defined in "days". This value should be greater than or equal to minimum enforced log retention duration of the backup vault',
              hidden: true,
              args: {
                name: "LOG_RETENTION_DAYS",
                description: "Int",
              },
            },
            {
              name: "--max-custom-on-demand-retention-days",
              description:
                "Configure the maximum retention period for on-demand backups. The value must be greater than or equal to the minimum enforced retention period set on the backup vault",
              args: {
                name: "MAX_CUSTOM_ON_DEMAND_RETENTION_DAYS",
                description: "Int",
              },
            },
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--resource-type",
              description:
                "Type of resource to which the backup plan should be applied",
              priority: 100,
              args: {
                name: "RESOURCE_TYPE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP_PLAN",
            description:
              "ID of the Backup Plan or fully qualified identifier for the Backup Plan",
          },
        },
        {
          name: "delete",
          description: "Deletes a Backup Plan",
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
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP_PLAN",
            description:
              "ID of the Backup Plan or fully qualified identifier for the Backup Plan",
          },
        },
        {
          name: "describe",
          description: "Show details of the backup plan",
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
            name: "BACKUP_PLAN",
            description:
              "ID of the backup_plan or fully qualified identifier for the backup_plan",
          },
        },
        {
          name: "list",
          description: "List backup plans in the project",
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
            optLocation2,
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
          description: "Update a specific backup plan",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-backup-rule",
              description:
                "Parameters of backup rule to be added to the Backup Plan. This flag can be repeated to add more backup rules",
              isRepeatable: true,
              args: {
                name: "PROPERTY=VALUE",
                description: "Dict",
              },
            },
            optAsync,
            {
              name: "--backup-rule",
              description:
                "Full definition of an existing backup rule with updated values. The existing backup rule is replaced by this new set of values. This flag can be repeated to update multiple backup rules. It is not allowed to pass the same rule-id in this flag more than once in the same command",
              isRepeatable: true,
              args: {
                name: "PROPERTY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--backup-rules-from-file",
              description:
                "Path to a YAML or JSON file containing backup rules. Use a full or relative path to a local file containing the value of backup_rules",
              args: {
                name: "BACKUP_RULES_FROM_FILE",
                template: "filepaths",
              },
            },
            optBillingProject,
            {
              name: "--compute-instance-properties",
              description:
                "Workload-specific properties for Compute Engine instance backups generated by this plan",
              args: {
                name: "PROPERTY=VALUE",
                description: "Dict",
              },
            },
            optConfiguration,
            {
              name: "--description",
              description:
                "Provide a description of the backup plan, such as specific use cases and relevant details, in 2048 characters or less",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--disk-properties",
              description:
                "Workload-specific properties for disk backups generated by this plan",
              args: {
                name: "PROPERTY=VALUE",
                description: "Dict",
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
            optLocation5,
            optLogHttp,
            {
              name: "--log-retention-days",
              description:
                'Configures how long logs will be stored. It is defined in "days". This value should be greater than or equal to minimum enforced log retention duration of the backup vault',
              hidden: true,
              args: {
                name: "LOG_RETENTION_DAYS",
                description: "Int",
              },
            },
            {
              name: "--max-custom-on-demand-retention-days",
              description:
                "Configure the maximum retention period for on-demand backups. The value must be greater than or equal to the minimum enforced retention period set on the backup vault",
              args: {
                name: "MAX_CUSTOM_ON_DEMAND_RETENTION_DAYS",
                description: "Int",
              },
            },
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--remove-backup-rule",
              description:
                "Name of an existing backup rule to be removed from the Backup Plan. This flag can be repeated to remove more backup rules",
              isRepeatable: true,
              args: {
                name: "RULE-ID",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP_PLAN",
            description:
              "ID of the Backup Plan or fully qualified identifier for the Backup Plan",
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
      name: "backup-vaults",
      description: "Manage Backup and DR backup vaults",
      subcommands: [
        {
          name: "create",
          description: "Create a Backup and DR backup vault",
          options: [
            {
              name: "--access-restriction",
              description:
                "Authorize certain sources and destinations for data being sent into, or restored from, the backup vault being created. This choice determines the type of resources that can be stored. Restricting access to within your project or organization limits the resources to those managed through the Google Cloud console (e.g., Compute Engine VMs). Unrestricted access is required for resources managed through the management console (e.g., VMware Engine VMs, databases, and file systems). _ACCESS_RESTRICTION_ must be one of: *within-project*, *within-org*, *unrestricted*, *within-org-but-unrestricted-for-ba*",
              args: {
                name: "ACCESS_RESTRICTION",
                description: "String",
                suggestions: [
                  "within-project",
                  "within-org",
                  "unrestricted",
                  "within-org-but-unrestricted-for-ba",
                ],
              },
            },
            optAccessTokenFile,
            optAccount,
            {
              name: "--backup-min-enforced-retention",
              description:
                "Backups will be kept for this minimum period before they can be deleted. Once the effective time is reached, the enforced retention period cannot be decreased or removed. The value must be specified in relative time format (e.g. p1d, p1m, p1m1d)",
              priority: 100,
              args: {
                name: "BACKUP_MIN_ENFORCED_RETENTION",
              },
            },
            {
              name: "--backup-retention-inheritance",
              description:
                "The inheritance mode for enforced retention end time of the backup within this backup vault. Once set, the inheritance mode cannot be changed. Default is inherit-vault-retention. If set to inherit-vault-retention, the backup retention period will be inherited from the backup vault. If set to match-backup-expire-time, the backup retention period will be the same as the backup expiration time. _BACKUP_RETENTION_INHERITANCE_ must be one of: *inherit-vault-retention*, *match-backup-expire-time*",
              args: {
                name: "BACKUP_RETENTION_INHERITANCE",
                description: "String",
                suggestions: [
                  "inherit-vault-retention",
                  "match-backup-expire-time",
                ],
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description:
                "Optional description for the backup vault (2048 characters or less)",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--effective-time",
              description:
                "The time at which the enforced retention period becomes locked. This flag is mutually exclusive with --unlock-backup-min-enforced-retention",
              args: {
                name: "EFFECTIVE_TIME",
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
              name: "--kms-key",
              description:
                "The Cloud KMS key resource name to be used for encryption. Format: projects/{project}/locations/{location}/keyRings/{ring}/cryptoKeys/{key}",
              args: {
                name: "KMS_KEY",
                description: "String",
              },
            },
            {
              name: "--labels",
              description:
                "Optional resource labels to represent metadata provided by the user",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optLocation6,
            optLogHttp,
            optNoAsync2,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP_VAULT",
            description:
              "ID of the Backup Vault or fully qualified identifier for the Backup Vault",
          },
        },
        {
          name: "delete",
          description: "Delete the specified Backup Vault",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--allow-missing",
              description:
                "Allow idempotent deletion of backup vault. The request will still succeed in case the backup vault does not exist",
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
            {
              name: "--ignore-backup-plan-references",
              description:
                "If set, the following restrictions against deletion of the backup vault instance can be overridden: * deletion of a backup vault instance being actively referenced by a backup plan",
            },
            {
              name: "--ignore-inactive-datasources",
              description:
                "If set, the following restrictions against deletion of the backup vault instance can be overridden: * deletion of a backup vault instance containing no backups,but still contains empty datasources",
            },
            optImpersonateServiceAccount,
            optLocation6,
            optLogHttp,
            {
              name: "--no-allow-missing",
              description:
                "Allow idempotent deletion of backup vault. The request will still succeed in case the backup vault does not exist",
              hidden: true,
            },
            optNoAsync2,
            {
              name: "--no-ignore-backup-plan-references",
              description:
                "If set, the following restrictions against deletion of the backup vault instance can be overridden: * deletion of a backup vault instance being actively referenced by a backup plan",
              hidden: true,
            },
            {
              name: "--no-ignore-inactive-datasources",
              description:
                "If set, the following restrictions against deletion of the backup vault instance can be overridden: * deletion of a backup vault instance containing no backups,but still contains empty datasources",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP_VAULT",
            description:
              "ID of the Backup Vault or fully qualified identifier for the Backup Vault",
          },
        },
        {
          name: "describe",
          description: "Show the metadata for a Backup and DR backup vault",
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
            optLocation6,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP_VAULT",
            description:
              "ID of the Backup Vault or fully qualified identifier for the Backup Vault",
          },
        },
        {
          name: "list",
          description: "List Backup and DR backup vaults",
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
            optLocation2,
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
          description: "Update a Backup and DR backup vault",
          options: [
            {
              name: "--access-restriction",
              description:
                "Authorize certain sources and destinations for data being sent into, or restored from the current backup vault",
              args: {
                name: "ACCESS_RESTRICTION",
                description: "String",
                suggestions: [
                  "within-project",
                  "within-org",
                  "unrestricted",
                  "within-org-but-unrestricted-for-ba",
                ],
              },
            },
            optAccessTokenFile,
            optAccount,
            {
              name: "--backup-min-enforced-retention",
              description:
                "Backups will be kept for this minimum period before they can be deleted. Once the effective time is reached, the enforced retention period cannot be decreased or removed. The value must be specified in relative time format (e.g. p1d, p1m, p1m1d)",
              args: {
                name: "BACKUP_MIN_ENFORCED_RETENTION",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description:
                "Optional description for the backup vault (2048 characters or less)",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--effective-time",
              description:
                "The time at which the enforced retention period becomes locked. This flag is mutually exclusive with --unlock-backup-min-enforced-retention",
              args: {
                name: "EFFECTIVE_TIME",
              },
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--force-update",
              description:
                "If set, allow update to extend the minimum enforced retention for backup vault. This overrides the restriction against conflicting retention periods. This conflict may occur when the expiration schedule defined by the associated backup plan is shorter than the minimum retention set by the backup vault",
            },
            {
              name: "--force-update-access-restriction",
              description:
                "If set, the access restriction can be updated even if there are non-compliant data sources. Backups for those data sources will fail afterward",
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation6,
            optLogHttp,
            optNoAsync2,
            {
              name: "--no-force-update",
              description:
                "If set, allow update to extend the minimum enforced retention for backup vault. This overrides the restriction against conflicting retention periods. This conflict may occur when the expiration schedule defined by the associated backup plan is shorter than the minimum retention set by the backup vault",
              hidden: true,
            },
            {
              name: "--no-force-update-access-restriction",
              description:
                "If set, the access restriction can be updated even if there are non-compliant data sources. Backups for those data sources will fail afterward",
              hidden: true,
            },
            {
              name: "--no-unlock-backup-min-enforced-retention",
              description:
                "Removes the lock on the backup minimum enforced retention period, and resets the effective time. When unlocked, the enforced retention period can be changed at any time. This flag is mutually exclusive with --effective-time",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            {
              name: "--unlock-backup-min-enforced-retention",
              description:
                "Removes the lock on the backup minimum enforced retention period, and resets the effective time. When unlocked, the enforced retention period can be changed at any time. This flag is mutually exclusive with --effective-time",
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP_VAULT",
            description:
              "ID of the Backup Vault or fully qualified identifier for the Backup Vault",
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
      description: "Manage Backup and DR backups",
      subcommands: [
        {
          name: "delete",
          description: "Delete the specified Backup",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBackupVault,
            optBillingProject,
            optConfiguration,
            optDataSource,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation7,
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
              "ID of the Backup or fully qualified identifier for the Backup",
          },
        },
        {
          name: "describe",
          description: "Show details of the backup",
          options: [
            optAccessTokenFile,
            optAccount,
            optBackupVault,
            optBillingProject,
            optConfiguration,
            optDataSource,
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
            name: "BACKUP",
            description:
              "ID of the backup or fully qualified identifier for the backup",
          },
        },
        {
          name: "fetch-for-resource-type",
          description: "Fetch Backups for a given resource type and location",
          options: [
            optAccessTokenFile,
            optAccount,
            optBackupVault,
            optBillingProject,
            optConfiguration,
            {
              name: "--data-source",
              description:
                "ID of the Data Source or fully qualified identifier for the Data Source",
              priority: 100,
              args: {
                name: "DATA_SOURCE",
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
            optLimit,
            {
              name: "--location",
              description: "The location of the Data Source",
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
          args: {
            name: "RESOURCE_TYPE",
            description:
              "Resource type for which backup plan associations should be fetched",
          },
        },
        {
          name: "list",
          description: "List Backups",
          options: [
            optAccessTokenFile,
            optAccount,
            optBackupVault,
            optBillingProject,
            optConfiguration,
            {
              name: "--data-source",
              description:
                "ID of the dataSource or fully qualified identifier for the dataSource",
              args: {
                name: "DATA_SOURCE",
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
            optLimit,
            optLocation3,
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
          name: "restore",
          description: "Manage restore operations for resources",
          subcommands: [
            {
              name: "compute",
              description: "Restores a Compute Engine VM Backup",
              options: [
                {
                  name: "--accelerator",
                  description:
                    "Attaches accelerators (e.g. GPUs) to the instances",
                  args: {
                    name: "ACCELERATOR",
                    description: "Dict",
                  },
                },
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBackupVault,
                optBillingProject,
                {
                  name: "--can-ip-forward",
                  description:
                    "If provided, allows the restored instances to send and receive packets with non-matching destination or source IP addresses. Use *--can-ip-forward* to enable and *--no-can-ip-forward* to disable",
                },
                {
                  name: "--clear-encryption-key",
                  description:
                    "Clears the CMEK encryption of the restored disks and defaults to GMEK unless the kms-key is specified in the --create-disk flag",
                },
                {
                  name: "--confidential-compute",
                  description:
                    "The restored instance boots with Confidential Computing enabled. Confidential Computing is based on Secure Encrypted Virtualization (SEV), an AMD virtualization feature for running confidential instances",
                },
                optConfiguration,
                {
                  name: "--create-disk",
                  description:
                    "Creates and attaches persistent disks to the instances",
                  args: {
                    name: "PROPERTY=VALUE",
                    description: "Dict",
                  },
                },
                optDataSource,
                {
                  name: "--deletion-protection",
                  description:
                    "Enables deletion protection for the restored instance. Use *--deletion-protection* to enable and *--no-deletion-protection* to disable",
                },
                {
                  name: "--description",
                  description:
                    "Specifies a textual description of the restored instance",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--enable-display-device",
                  description:
                    "Enable a display device on the restored VM instances. Disabled by default. Use *--enable-display-device* to enable and *--no-enable-display-device* to disable",
                },
                {
                  name: "--enable-uefi-networking",
                  description:
                    "If set to true, enables UEFI networking for the instance creation. Use *--enable-uefi-networking* to enable and *--no-enable-uefi-networking* to disable",
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                {
                  name: "--hostname",
                  description:
                    "Specify the hostname of the restore instance to be created. The specified hostname must be RFC1035 compliant. If hostname is not specified, the default hostname is [INSTANCE_NAME].c.[TARGET_PROJECT_ID].internal when using the global DNS, and [INSTANCE_NAME].[ZONE].c.[TARGET_PROJECT_ID].internal when using zonal DNS",
                  args: {
                    name: "HOSTNAME",
                    description: "String",
                  },
                },
                optImpersonateServiceAccount,
                {
                  name: "--instance-kms-key",
                  description:
                    "The Cloud KMS (Key Management Service) cryptokey that will be used to protect the restored instance",
                  args: {
                    name: "INSTANCE_KMS_KEY",
                    description: "String",
                  },
                },
                {
                  name: "--instance-termination-action",
                  description:
                    "Specifies the termination action that will be taken upon VM preemption (--provisioning-model=SPOT) or automatic instance termination (--max-run-duration or --termination-time)",
                  args: {
                    name: "INSTANCE_TERMINATION_ACTION",
                    suggestions: ["DELETE", "STOP"],
                  },
                },
                {
                  name: "--key-revocation-action-type",
                  description:
                    "Specifies the behavior of the instance when the KMS key of one of its attached disks is revoked. The default is none. POLICY must be one of: * none No operation is performed. * stop The instance is stopped when the KMS key of one of its attached disks is revoked",
                  args: {
                    name: "POLICY",
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
                {
                  name: "--local-ssd-recovery-timeout",
                  description:
                    "Specifies the maximum amount of time a Local SSD VM should wait while recovery of the Local SSD state is attempted. Its value should be in between 0 and 168 hours with hour granularity and the default value being 1 hour",
                  args: {
                    name: "LOCAL_SSD_RECOVERY_TIMEOUT",
                  },
                },
                optLocation7,
                optLogHttp,
                {
                  name: "--machine-type",
                  description:
                    "Specifies the machine type used for the restored instance. To get a list of available machine types, run 'gcloud compute machine-types list'. If unspecified, the default type will be based on the source instance",
                  args: {
                    name: "MACHINE_TYPE",
                    description: "String",
                  },
                },
                {
                  name: "--maintenance-policy",
                  description:
                    "Specifies the behavior of the VMs when their host machines undergo maintenance. The default is MIGRATE. For more information, see https://cloud.google.com/compute/docs/instances/host-maintenance-options. _MAINTENANCE_POLICY_ must be one of:",
                  args: {
                    name: "MAINTENANCE_POLICY",
                    suggestions: ["MIGRATE", "TERMINATE"],
                  },
                },
                {
                  name: "--metadata",
                  description:
                    "Metadata to be made available to the guest operating system running on the instances. Each metadata entry is a key/value pair separated by an equals sign. Each metadata key must be unique and have a max of 128 bytes in length. Each value must have a max of 256 KB in length. Multiple arguments can be passed to this flag, e.g., ``--metadata key-1=value-1,key-2=value-2,key-3=value-3''. The combined total size for all metadata entries is 512 KB",
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                  },
                },
                {
                  name: "--min-cpu-platform",
                  description:
                    "When specified, the VM will be scheduled on host with specified CPU architecture or a newer one. To list available CPU platforms in given zone, run:",
                  args: {
                    name: "PLATFORM",
                    description: "String",
                  },
                },
                {
                  name: "--min-node-cpu",
                  description:
                    "Minimum number of virtual CPUs this instance will consume when running on a sole-tenant node",
                  args: {
                    name: "MIN_NODE_CPU",
                    description: "Int",
                  },
                },
                {
                  name: "--name",
                  description: "Name of the restored Compute Instance",
                  priority: 100,
                  args: {
                    name: "NAME",
                    description: "String",
                  },
                },
                {
                  name: "--network-interface",
                  description:
                    "Adds a network interface to the instance. This flag can be repeated to specify multiple network interfaces. The following keys are allowed: network, subnet, private-network-ip, internal-ipv6-address, internal-ipv6-prefix-length, address, external-ipv6-address, external-ipv6-prefix-length, network-tier, aliases, stack-type, queue-count, nic-type, network-attachment",
                  isRepeatable: true,
                  args: {
                    name: "PROPERTY=VALUE",
                    description: "Dict",
                  },
                },
                {
                  name: "--network-performance-configs",
                  description:
                    "Configures network performance settings for the restored instance. If this flag is not specified, the restored instance will be created with its source instance's network performance configuration",
                  args: {
                    name: "PROPERTY=VALUE",
                    description: "Dict",
                  },
                },
                optNoAsync,
                {
                  name: "--no-can-ip-forward",
                  description:
                    "If provided, allows the restored instances to send and receive packets with non-matching destination or source IP addresses",
                },
                {
                  name: "--no-clear-encryption-key",
                  description:
                    "Clears the CMEK encryption of the restored disks and defaults to GMEK unless the kms-key is specified in the --create-disk flag",
                  hidden: true,
                },
                {
                  name: "--no-confidential-compute",
                  description:
                    "The restored instance boots with Confidential Computing enabled. Confidential Computing is based on Secure Encrypted Virtualization (SEV), an AMD virtualization feature for running confidential instances",
                  hidden: true,
                },
                {
                  name: "--no-deletion-protection",
                  description:
                    "Enables deletion protection for the restored instance",
                },
                {
                  name: "--no-enable-display-device",
                  description:
                    "Enable a display device on the restored VM instances. Disabled by default",
                },
                {
                  name: "--no-enable-uefi-networking",
                  description:
                    "If set to true, enables UEFI networking for the instance creation",
                },
                {
                  name: "--no-preemptible",
                  description:
                    "If provided, instances will be preemptible and time-limited. Instances might be preempted to free up resources for standard VM instances, and will only be able to run for a limited amount of time. Preemptible instances can not be restarted and will not migrate",
                },
                {
                  name: "--no-restart-on-failure",
                  description:
                    "The instances will be restarted if they are terminated by Compute Engine. This does not affect terminations performed by the user",
                },
                {
                  name: "--no-scopes",
                  description: "Create the instance with no scopes",
                },
                {
                  name: "--no-use-project-service-account",
                  description:
                    "If set, the BackupDR Project Service Agent (P4SA) credentials will be used for the restore operation instead of the Backup Vault Service Account. This is only supported for same-project restores",
                  hidden: true,
                },
                {
                  name: "--node-affinity-file",
                  description:
                    "The JSON/YAML file containing the configuration of desired nodes onto which this instance could be scheduled. These rules filter the nodes according to their node affinity labels. A node's affinity labels come from the node template of the group the node is in",
                  hidden: true,
                  args: {
                    name: "NODE_AFFINITY_FILE",
                    template: "filepaths",
                  },
                },
                {
                  name: "--preemptible",
                  description:
                    "If provided, instances will be preemptible and time-limited. Instances might be preempted to free up resources for standard VM instances, and will only be able to run for a limited amount of time. Preemptible instances can not be restarted and will not migrate. Use *--preemptible* to enable and *--no-preemptible* to disable",
                },
                {
                  name: "--private-ipv6-google-access-type",
                  description:
                    "The private IPv6 Google access type for the restored VM. PRIVATE_IPV6_GOOGLE_ACCESS_TYPE must be one of: inherit-subnetwork, enable-bidirectional-access, enable-outbound-vm-access",
                  args: {
                    name: "PRIVATE_IPV6_GOOGLE_ACCESS_TYPE",
                  },
                },
                optProject,
                {
                  name: "--provisioning-model",
                  description:
                    "Specifies provisioning model, which determines price, obtainability, and runtime for the restored VM instance. _PROVISIONING_MODEL_ must be one of:",
                  args: {
                    name: "PROVISIONING_MODEL",
                    suggestions: ["SPOT", "STANDARD"],
                  },
                },
                optQuiet,
                {
                  name: "--reservation",
                  description:
                    "The name of the reservation, required when `--reservation-affinity=specific`",
                  args: {
                    name: "RESERVATION",
                    description: "String",
                  },
                },
                {
                  name: "--reservation-affinity",
                  description:
                    "Specifies the reservation affinity of the instance. _RESERVATION_AFFINITY_ must be one of:",
                  args: {
                    name: "RESERVATION_AFFINITY",
                    description: "String",
                    suggestions: ["any", "none", "specific"],
                  },
                },
                {
                  name: "--resource-manager-tags",
                  description:
                    "Specifies a list of resource manager tags to apply to the instance",
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                  },
                },
                {
                  name: "--resource-policies",
                  description:
                    "A list of resource policy names to be added to the instance. The policies must exist in the same region as the instance",
                  args: {
                    name: "RESOURCE_POLICY",
                    description: "List",
                  },
                },
                {
                  name: "--restart-on-failure",
                  description:
                    "The instances will be restarted if they are terminated by Compute Engine. This does not affect terminations performed by the user. Use *--restart-on-failure* to enable and *--no-restart-on-failure* to disable",
                },
                {
                  name: "--scopes",
                  description:
                    "If not provided, the instance will be assigned the default scopes, described below. However, if neither --scopes nor --no-scopes are specified and the project has no default service account, then the instance will be created with no scopes. Note that the level of access that a service account has is determined by a combination of access scopes and IAM roles so you must configure both access scopes and IAM roles for the service account to work properly. SCOPE can be either the full URI of the scope or an alias. Default scopes are assigned to all instances. Available aliases are: https://cloud.google.com/sdk/gcloud/reference/compute/instances/create#--scopes",
                  args: {
                    name: "SCOPE",
                    description: "List",
                  },
                },
                {
                  name: "--service-account",
                  description:
                    "A service account is an identity attached to the instance. Its access tokens can be accessed through the instance metadata server and are used to authenticate applications on the instance. The account can be set using an email address corresponding to the required service account. If not provided, the instance will use the project's default service account",
                  args: {
                    name: "SERVICE_ACCOUNT",
                    description: "String",
                  },
                },
                {
                  name: "--tags",
                  description:
                    "Specifies a list of tags to apply to the instance. These tags allow network firewall rules and routes to be applied to specified VM instances. See gcloud_compute_firewall-rules_create(1) for more details",
                  args: {
                    name: "TAG",
                    description: "List",
                  },
                },
                {
                  name: "--target-project",
                  description: "Project where the restore should happen",
                  priority: 100,
                  args: {
                    name: "TARGET_PROJECT",
                    description: "String",
                  },
                },
                {
                  name: "--target-zone",
                  description: "Zone where the target instance is restored",
                  priority: 100,
                  args: {
                    name: "TARGET_ZONE",
                    description: "String",
                  },
                },
                {
                  name: "--threads-per-core",
                  description:
                    "The number of visible threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. Valid values are: 1 or 2",
                  args: {
                    name: "THREADS_PER_CORE",
                    description: "Int",
                  },
                },
                optTraceToken,
                {
                  name: "--use-project-service-account",
                  description:
                    "If set, the BackupDR Project Service Agent (P4SA) credentials will be used for the restore operation instead of the Backup Vault Service Account. This is only supported for same-project restores",
                },
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--visible-core-count",
                  description:
                    "The number of physical cores to expose to the instance's guest operating system. The number of virtual CPUs visible to the instance's guest operating system is this number of cores multiplied by the instance's count of visible threads per physical core",
                  args: {
                    name: "VISIBLE_CORE_COUNT",
                    description: "Int",
                  },
                },
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the Backup or fully qualified identifier for the Backup",
              },
            },
            {
              name: "disk",
              description: "Restores a Compute Disk Backup",
              options: [
                {
                  name: "--access-mode",
                  description:
                    "Specifies how VMs attached to the disk can access the data on the disk. To grant read-only access to multiple VMs attached to the disk, set access-mode to READ_ONLY_MANY. To grant read-write access to only one VM attached to the disk, use READ_WRITE_SINGLE. READ_WRITE_SINGLE is used if omitted. ACCESS_MODE must be one of: READ_ONLY_MANY, READ_WRITE_MANY, READ_WRITE_SINGLE. _ACCESS_MODE_ must be one of:",
                  args: {
                    name: "ACCESS_MODE",
                    suggestions: [
                      "READ_ONLY_MANY",
                      "READ_WRITE_MANY",
                      "READ_WRITE_SINGLE",
                    ],
                  },
                },
                optAccessTokenFile,
                optAccount,
                {
                  name: "--architecture",
                  description:
                    "Specifies the architecture or processor type that this disk can support. For available processor types on Compute Engine, see https://cloud.google.com/compute/docs/cpu-platforms. ARCHITECTURE must be one of: ARM64, X86_64. _ARCHITECTURE_ must be one of:",
                  args: {
                    name: "ARCHITECTURE",
                    suggestions: ["ARM64", "X86_64"],
                  },
                },
                optAsync,
                optBackupVault,
                optBillingProject,
                {
                  name: "--clear-encryption-key",
                  description:
                    "The restored disk reverts to GMEK (CMEK is disabled)",
                },
                {
                  name: "--confidential-compute",
                  description:
                    "Creates the disk with confidential compute mode enabled. Encryption with a Cloud KMS key is required to enable this option",
                },
                optConfiguration,
                optDataSource,
                {
                  name: "--description",
                  description:
                    "Specifies a textual description of the restored disk",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--guest-os-features",
                  description:
                    "Enables one or more features for VM instances that use the image for their boot disks. See the descriptions of supported features at: https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features. GUEST_OS_FEATURE must be one of: VIRTIO_SCSI_MULTIQUEUE, WINDOWS, MULTI_IP_SUBNET, UEFI_COMPATIBLE, SEV_CAPABLE, SEV_LIVE_MIGRATABLE, SEV_LIVE_MIGRATABLE_V2, SEV_SNP_CAPABLE, GVNIC, IDPF, TDX_CAPABLE, SUSPEND_RESUME_COMPATIBLE",
                  args: {
                    name: "GUEST_OS_FEATURES",
                    description: "List",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                {
                  name: "--kms-key",
                  description:
                    "The Cloud KMS (Key Management Service) cryptokey that will be used to protect the disk Provide the full resource name of the cryptokey in the format: projects/<project>/locations/<location>/keyRings/<key-ring>/cryptoKeys/<key>",
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
                {
                  name: "--licenses",
                  description:
                    "A list of URIs to license resources. The provided licenses will be added onto the created disks to indicate the licensing and billing policies",
                  args: {
                    name: "LICENSE",
                    description: "List",
                  },
                },
                optLocation7,
                optLogHttp,
                {
                  name: "--name",
                  description: "Name of the restored Disk",
                  priority: 100,
                  args: {
                    name: "NAME",
                    description: "String",
                  },
                },
                optNoAsync,
                {
                  name: "--no-clear-encryption-key",
                  description:
                    "The restored disk reverts to GMEK (CMEK is disabled)",
                  hidden: true,
                },
                {
                  name: "--no-confidential-compute",
                  description:
                    "Creates the disk with confidential compute mode enabled. Encryption with a Cloud KMS key is required to enable this option",
                  hidden: true,
                },
                {
                  name: "--no-source-instance-boot-disk",
                  description:
                    "Whether to restore the boot disk of the instance",
                  hidden: true,
                },
                {
                  name: "--no-use-project-service-account",
                  description:
                    "If set, the BackupDR Project Service Agent (P4SA) credentials will be used for the restore operation instead of the Backup Vault Service Account. This is only supported for same-project restores",
                  hidden: true,
                },
                optProject,
                {
                  name: "--provisioned-iops",
                  description:
                    "Provisioned IOPS of disk to create. Only for use with disks of type pd-extreme and hyperdisk-extreme",
                  args: {
                    name: "PROVISIONED_IOPS",
                  },
                },
                {
                  name: "--provisioned-throughput",
                  description:
                    "Provisioned throughput of disk to create. The throughput unit is MB per sec. Only for use with disks of type hyperdisk-throughput",
                  args: {
                    name: "PROVISIONED_THROUGHPUT",
                  },
                },
                optQuiet,
                {
                  name: "--replica-zones",
                  description:
                    "A comma-separated list of exactly 2 URLs of the zones where the disk should be replicated to. Required when restoring to a regional disk. The zones must be in the same region as specified in the --target-region flag. See available zones with gcloud compute zones list",
                  args: {
                    name: "ZONE",
                    description: "List",
                  },
                },
                {
                  name: "--resource-policies",
                  description:
                    "A list of resource policy names to be added to the disk. The policies must exist in the same region as the disk",
                  args: {
                    name: "RESOURCE_POLICY",
                    description: "List",
                  },
                },
                {
                  name: "--size",
                  description:
                    "Size of the disk in GB. Disk size must be a multiple of 1 GB. If disk size is not specified, the default size of 500GB for pd-standard disks, 100GB for pd-balanced disks, 100GB for pd-ssd disks, and 1000GB for pd-extreme disks will be used. For details about disk size limits, refer to: https://cloud.google.com/compute/docs/disks",
                  args: {
                    name: "SIZE",
                  },
                },
                {
                  name: "--source-instance-boot-disk",
                  description:
                    "Whether to restore the boot disk of the instance",
                  hidden: true,
                },
                {
                  name: "--source-instance-disk-device-name",
                  description:
                    "The device name of the disk to be restored. This is the device name of the disk as specified in the original VM instance",
                  hidden: true,
                  args: {
                    name: "SOURCE_INSTANCE_DISK_DEVICE_NAME",
                    description: "String",
                  },
                },
                {
                  name: "--storage-pool",
                  description:
                    "Specifies the URI of the storage pool in which the disk is created",
                  args: {
                    name: "STORAGE_POOL",
                    description: "String",
                  },
                },
                {
                  name: "--target-project",
                  description: "Project where the restore should happen",
                  priority: 100,
                  args: {
                    name: "TARGET_PROJECT",
                    description: "String",
                  },
                },
                {
                  name: "--target-region",
                  description:
                    "Region where the target disk is restored. This flag is mutually exclusive with --target-zone",
                  args: {
                    name: "TARGET_REGION",
                    description: "String",
                  },
                },
                {
                  name: "--target-zone",
                  description:
                    "Zone where the target disk is restored. This flag is mutually exclusive with --target-region",
                  args: {
                    name: "TARGET_ZONE",
                    description: "String",
                  },
                },
                optTraceToken,
                {
                  name: "--type",
                  description:
                    "URL of the disk type describing which disk type to use to restore the disk. For example: projects/project/zones/zone/diskTypes/pd-ssd. To get a list of available disk types, run gcloud compute disk-types list. The default disk type is pd-standard",
                  args: {
                    name: "TYPE",
                    description: "String",
                  },
                },
                {
                  name: "--use-project-service-account",
                  description:
                    "If set, the BackupDR Project Service Agent (P4SA) credentials will be used for the restore operation instead of the Backup Vault Service Account. This is only supported for same-project restores",
                },
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the Backup or fully qualified identifier for the Backup",
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
          description: "Update the specified Backup",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBackupVault,
            optBillingProject,
            {
              name: "--clear-labels",
              description: "Remove all labels from the backup",
            },
            optConfiguration,
            optDataSource,
            {
              name: "--enforced-retention-end-time",
              description:
                'Backups cannot be deleted until this time or later. This period can be extended, but not shortened. It should be specified in the format of "YYYY-MM-DD"',
              args: {
                name: "ENFORCED_RETENTION_END_TIME",
              },
            },
            {
              name: "--expire-time",
              description:
                'The date when this backup is automatically expired. This date can be extended, but not shortened. It should be specified in the format of "YYYY-MM-DD"',
              args: {
                name: "EXPIRE_TIME",
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
            optLocation7,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-clear-labels",
              description: "Remove all labels from the backup",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--remove-labels",
              description: "A list of label keys to remove from the backup",
              args: {
                name: "KEY",
                description: "List",
              },
            },
            optTraceToken,
            {
              name: "--update-labels",
              description: "A list of labels to apply to the backup",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP",
            description:
              "ID of the Backup or fully qualified identifier for the Backup",
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
      name: "data-source-references",
      description: "Command group for Backup and DR Data Source References",
      subcommands: [
        {
          name: "describe",
          description: "Show details of the data source reference",
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
            name: "DATA_SOURCE_REFERENCE",
            description:
              "ID of the data_source_reference or fully qualified identifier for the data_source_reference",
          },
        },
        {
          name: "fetch-for-resource-type",
          description:
            "Fetch Data Source References for a given resource type and location",
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
                "Location for which data source references should be fetched",
              priority: 100,
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
          args: {
            name: "RESOURCE_TYPE",
            description:
              "Resource type for which data source references should be fetched",
          },
        },
        {
          name: "list",
          description: "List Backup and DR data source references",
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
            optLocation2,
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
      name: "data-sources",
      description: "View Backup and DR data sources",
      subcommands: [
        {
          name: "describe",
          description: "Show details of the data source",
          options: [
            optAccessTokenFile,
            optAccount,
            optBackupVault,
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
            name: "DATA_SOURCE",
            description:
              "ID of the data_source or fully qualified identifier for the data_source",
          },
        },
        {
          name: "list",
          description: "List Data Sources",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--backup-vault",
              description:
                "ID of the backup_vault or fully qualified identifier for the backup_vault",
              args: {
                name: "BACKUP_VAULT",
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
            optLocation3,
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
      name: "locations",
      description: "Manage Backup and DR locations",
      subcommands: [
        {
          name: "list",
          description: "List available Backup and DR locations",
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
      name: "management-servers",
      description: "Manage Backup and DR management server",
      subcommands: [
        {
          name: "create",
          description: "Create a new management server in the project",
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
            {
              name: "--location",
              description: "The location of the Management Server",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--network",
              description:
                "(DEPRECATED) Name of an existing VPC network with private service access configured in the format - projects/<project>/global/networks/<network>. This VPC network allows the management console to communicate with all backup/recovery appliances and requires a minimum IP range of /23. This value cannot be changed after you deploy the management server. If you don't have private service access, configure one. [Learn more] (https://cloud.google.com/vpc/docs/configure-private-services-access)",
              deprecated: true,
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MANAGEMENT_SERVER",
            description:
              "ID of the Management Server or fully qualified identifier for the Management Server",
          },
        },
        {
          name: "delete",
          description: "Delete the specified Management Server",
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
            {
              name: "--location",
              description: "The location of the Management Server",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MANAGEMENT_SERVER",
            description:
              "ID of the Management Server or fully qualified identifier for the Management Server",
          },
        },
        {
          name: "describe",
          description: "Show details of the management server",
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
            name: "MANAGEMENT_SERVER",
            description:
              "ID of the management_server or fully qualified identifier for the management_server",
          },
        },
        {
          name: "list",
          description: "List management servers in the project",
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
            optLocation2,
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
      description: "Manage Backup and DR operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe an operation",
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "list",
          description: "List all operations",
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
      name: "resource-backup-config",
      description:
        "Show protection summary for resources in a particular location and project",
      subcommands: [
        {
          name: "list",
          description:
            "Show backup configuration metadata associated with specified resources in a particular location for the project",
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
      name: "service-config",
      description: "Manage Backup and DR Service configuration",
      subcommands: [
        {
          name: "init",
          description: "Initialize a Backup and DR Service configuration",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--cloudsql-edition",
              description:
                'Cloud SQL Edition: (Required only for Cloud SQL instances, ignored otherwise). The edition of the Cloud SQL instance. Possible values: "ENTERPRISE" - Enterprise edition. "ENTERPRISE_PLUS" - Enterprise Plus edition',
              args: {
                name: "CLOUDSQL_EDITION",
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
            optLocation,
            optLogHttp,
            optNoAsync2,
            optProject,
            optQuiet,
            {
              name: "--resource-type",
              description:
                'The resource type to which the default service configuration will be applied. Examples include, "compute.<UNIVERSE_DOMAIN>.com/Instance"',
              priority: 100,
              args: {
                name: "RESOURCE_TYPE",
                description: "String",
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
};

export default completionSpec;
