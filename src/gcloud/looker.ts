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

const optRegion: Fig.Option = {
  name: "--region",
  description:
    "The name of the Looker region of the instance. Overrides the default looker/region property value for this command invocation",
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
  name: "looker",
  description: "Manage Looker resources",
  subcommands: [
    {
      name: "backups",
      description: "Manage Looker instances",
      subcommands: [
        {
          name: "create",
          description: "Create a backup of a Looker instance",
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
              name: "--instance",
              description:
                "ID of the instance or fully qualified identifier for the instance. To set the instance attribute:",
              priority: 100,
              args: {
                name: "INSTANCE",
                description: "String",
              },
            },
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--region",
              description:
                "The name of the Looker region of the instance. Overrides the default looker/region property value for this command invocation",
              priority: 100,
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "delete",
          description: "Delete a backup of a Looker instance",
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
              name: "--instance",
              description: "The name of the Looker instance",
              args: {
                name: "INSTANCE",
                description: "String",
              },
            },
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--region",
              description:
                "The name of the Looker region of the backup. Overrides the default looker/region property value for this command invocation",
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
            name: "BACKUP",
            description:
              "ID of the backup or fully qualified identifier for the backup",
          },
        },
        {
          name: "describe",
          description: "Show metadata of a backup for a Looker instance",
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
              name: "--instance",
              description: "The name of the Looker instance",
              args: {
                name: "INSTANCE",
                description: "String",
              },
            },
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--region",
              description:
                "The name of the Looker region of the backup. Overrides the default looker/region property value for this command invocation",
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
            name: "BACKUP",
            description:
              "ID of the backup or fully qualified identifier for the backup",
          },
        },
        {
          name: "list",
          description: "List backups of a Looker instance",
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
              name: "--instance",
              description:
                "ID of the instance or fully qualified identifier for the instance",
              priority: 100,
              args: {
                name: "INSTANCE",
                description: "String",
              },
            },
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
      name: "instances",
      description: "Manage Looker instances",
      subcommands: [
        {
          name: "create",
          description: "Create a Looker instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--catalog-integration-opt-out",
              description:
                "If specified, catalog integration will be disabled, otherwise it will be enabled by default",
            },
            {
              name: "--class-type",
              description:
                "The class type of the Looker instance. _CLASS_TYPE_ must be one of: *p1*, *r1*",
              args: {
                name: "CLASS_TYPE",
                suggestions: ["p1", "r1"],
              },
            },
            optConfiguration,
            {
              name: "--consumer-network",
              description:
                "The network name within the consumer project. This MUST be delared if enabling private IP",
              priority: 100,
              args: {
                name: "CONSUMER_NETWORK",
                description: "String",
              },
            },
            {
              name: "--deny-maintenance-period-end-date",
              description:
                "End date of the deny maintenance period in format: YYYY-MM-DD",
              priority: 100,
              args: {
                name: "DENY_MAINTENANCE_PERIOD_END_DATE",
                description: "String",
              },
            },
            {
              name: "--deny-maintenance-period-start-date",
              description:
                "Start date of the deny maintenance period in format: YYYY-MM-DD",
              priority: 100,
              args: {
                name: "DENY_MAINTENANCE_PERIOD_START_DATE",
                description: "String",
              },
            },
            {
              name: "--deny-maintenance-period-time",
              description:
                "Time in UTC when the period starts and ends. A valid time of day must be specified in 24hr format (ex: 13:00, 17:30, 23:45)",
              priority: 100,
              args: {
                name: "DENY_MAINTENANCE_PERIOD_TIME",
                description: "String",
              },
            },
            {
              name: "--edition",
              description:
                "The edition of the Looker instance. _EDITION_ must be one of:",
              priority: 100,
              args: {
                name: "EDITION",
                suggestions: [
                  "core-embed-annual",
                  "core-enterprise-annual",
                  "core-standard",
                  "core-standard-annual",
                  "core-trial",
                  "core-trial-embed",
                  "core-trial-enterprise",
                  "core-trial-standard",
                  "nonprod-core-embed-annual",
                  "nonprod-core-enterprise-annual",
                  "nonprod-core-standard-annual",
                ],
              },
            },
            {
              name: "--fips-enabled",
              description:
                "This specifies whether FIPS is enabled on the Looker instance",
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
                "ID of the key or fully qualified identifier for the key. To set the *kms-key* attribute: * provide the argument *--kms-key* on the command line",
              args: {
                name: "KMS_KEY",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--maintenance-window-day",
              description:
                "Day of week for maintenance window, in UTC time zone. _MAINTENANCE_WINDOW_DAY_ must be one of: *friday*, *monday*, *saturday*, *sunday*, *thursday*, *tuesday*, *wednesday*",
              priority: 100,
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
              name: "--maintenance-window-time",
              description:
                "Hour of day for maintenance window, in UTC time zone. A valid time of day must be specified in 24hr format (ex: 13:00, 17:30, 23:45). Maintenance will be scheduled within 60 minutes",
              priority: 100,
              args: {
                name: "MAINTENANCE_WINDOW_TIME",
                description: "String",
              },
            },
            optNoAsync,
            {
              name: "--no-catalog-integration-opt-out",
              description:
                "If specified, catalog integration will be disabled, otherwise it will be enabled by default",
              hidden: true,
            },
            {
              name: "--no-fips-enabled",
              description:
                "This specifies whether FIPS is enabled on the Looker instance",
              hidden: true,
            },
            {
              name: "--no-private-ip-enabled",
              description:
                "This specifies whether private IP (PSA) is enabled on the Looker instance. This flag is for creating a PSA (Private Service Access) instance",
              hidden: true,
              priority: 100,
            },
            {
              name: "--no-psc-enabled",
              description:
                "This specifies whether Private Service Connect (PSC) is enabled on the Looker instance",
              hidden: true,
              priority: 100,
            },
            {
              name: "--no-public-ip-enabled",
              description:
                "This specifies whether public IP is enabled on the Looker instance",
              hidden: true,
            },
            {
              name: "--oauth-client-id",
              description: "The client ID from an external OAuth application",
              priority: 100,
              args: {
                name: "OAUTH_CLIENT_ID",
                description: "String",
              },
            },
            {
              name: "--oauth-client-secret",
              description:
                "The client secret from an external OAuth application",
              priority: 100,
              args: {
                name: "OAUTH_CLIENT_SECRET",
                description: "String",
              },
            },
            {
              name: "--private-ip-enabled",
              description:
                "This specifies whether private IP (PSA) is enabled on the Looker instance. This flag is for creating a PSA (Private Service Access) instance",
              priority: 100,
            },
            optProject,
            {
              name: "--psc-allowed-vpcs",
              description:
                "List of VPCs that are allowed ingress into the Looker instance",
              args: {
                name: "PSC_ALLOWED_VPCS",
                description: "List",
              },
            },
            {
              name: "--psc-enabled",
              description:
                "This specifies whether Private Service Connect (PSC) is enabled on the Looker instance",
              priority: 100,
            },
            {
              name: "--public-ip-enabled",
              description:
                "This specifies whether public IP is enabled on the Looker instance. Enabled by default, use *--no-public-ip-enabled* to disable",
            },
            optQuiet,
            optRegion,
            {
              name: "--reserved-range",
              description:
                "The name of a reserved IP address range within the consumer network to be used for private service access connection",
              args: {
                name: "RESERVED_RANGE",
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
          name: "delete",
          description: "Delete a Looker instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--force",
              description: "Force delete an instance",
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-force",
              description: "Force delete an instance",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion,
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
          description: "Show metadata for a Looker instance",
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
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "export",
          description: "Export a Looker instance",
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
              name: "--kms-key",
              description: "Fully qualified identifier (name) for the key",
              priority: 100,
              args: {
                name: "KMS_KEY",
                description: "String",
              },
            },
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--region",
              description: "The region of the instance",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            {
              name: "--target-gcs-uri",
              description:
                "The path to the folder in Google Cloud Storage where the export will be stored. The URI is in the form `gs://bucketName/folderName`. The Looker Service Agent should have the role Storage Object Creator",
              args: {
                name: "TARGET_GCS_URI",
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
          name: "import",
          description: "Import a Looker instance",
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
              description: "The region of the instance",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            {
              name: "--source-gcs-uri",
              description:
                "The path to the folder in Google Cloud Storage where the import will be retrieved from. The URI is in the form `gs://bucketName/folderName`",
              args: {
                name: "SOURCE_GCS_URI",
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
          name: "list",
          description: "List Looker instances",
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
            {
              name: "--region",
              description:
                "ID of the region or fully qualified identifier for the region",
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
        {
          name: "restart",
          description: "Restart a Looker instance",
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
            optRegion,
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
          name: "restore",
          description: "Restore a Looker instance from a backup",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--backup",
              description:
                "The ID of the backup instance in the format projects/{project}/locations/{location}/instances/{instance}/backups/{backup}",
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
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRegion,
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
          description: "Update a Looker instance",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-developer-users",
              description:
                "Number of additional Developer Users to allocate to the Looker Instance",
              args: {
                name: "ADD_DEVELOPER_USERS",
                description: "Int",
              },
            },
            {
              name: "--add-standard-users",
              description:
                "Number of additional Standard Users to allocate to the Looker Instance",
              args: {
                name: "ADD_STANDARD_USERS",
                description: "Int",
              },
            },
            {
              name: "--add-viewer-users",
              description:
                "Number of additional Viewer Users to allocate to the Looker Instance",
              args: {
                name: "ADD_VIEWER_USERS",
                description: "Int",
              },
            },
            {
              name: "--allowed-email-domains",
              description:
                "This specifies the entire allowed email domain list",
              priority: 100,
              args: {
                name: "ALLOWED_EMAIL_DOMAINS",
                description: "List",
              },
            },
            optAsync,
            optBillingProject,
            {
              name: "--catalog-integration-opt-out",
              description:
                "If specified, catalog integration will be disabled. Use `--no-catalog-integration-opt-out` to re-enable it",
            },
            {
              name: "--class-type",
              description:
                "The class type of the Looker instance. _CLASS_TYPE_ must be one of: *p1*, *r1*",
              args: {
                name: "CLASS_TYPE",
                suggestions: ["p1", "r1"],
              },
            },
            {
              name: "--clear-periodic-export-config",
              description:
                "Clears all periodic export configuration from the instance",
            },
            {
              name: "--clear-psc-allowed-vpcs",
              description:
                "Remove all service attachments from the PSC config of the instance",
            },
            {
              name: "--clear-psc-service-attachments",
              description:
                "Remove all allowed VPCs from the PSC config of the instance",
            },
            optConfiguration,
            {
              name: "--custom-domain",
              description: "Domain name wanted to serve the Looker instance",
              args: {
                name: "CUSTOM_DOMAIN",
                description: "String",
              },
            },
            {
              name: "--deny-maintenance-period-end-date",
              description:
                "End date of the deny maintenance period in format: YYYY-MM-DD",
              priority: 100,
              args: {
                name: "DENY_MAINTENANCE_PERIOD_END_DATE",
                description: "String",
              },
            },
            {
              name: "--deny-maintenance-period-start-date",
              description:
                "Start date of the deny maintenance period in format: YYYY-MM-DD",
              priority: 100,
              args: {
                name: "DENY_MAINTENANCE_PERIOD_START_DATE",
                description: "String",
              },
            },
            {
              name: "--deny-maintenance-period-time",
              description:
                "Time in UTC when the period starts and ends. A valid time of day must be specified in 24hr format (ex: 13:00, 17:30, 23:45)",
              priority: 100,
              args: {
                name: "DENY_MAINTENANCE_PERIOD_TIME",
                description: "String",
              },
            },
            {
              name: "--egress-enabled",
              description:
                "This specifies whether controlled egress is enabled on the Looker instance. To disable controlled egress, use the `--no-egress-enabled` flag",
            },
            {
              name: "--egress-fqdns",
              description:
                'List of FQDNs that are allowed to egress from the Looker instance. Example: `--egress-fqdns="github.com,my.salesforce.com"`. To clear all egress FQDNs, use `--egress-fqdns=""`',
              args: {
                name: "EGRESS_FQDNS",
                description: "List",
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
              name: "--linked-lsp-project-number",
              description: "The Looker Studio Pro project number to be linked",
              args: {
                name: "LINKED_LSP_PROJECT_NUMBER",
                description: "Int",
              },
            },
            optLogHttp,
            {
              name: "--maintenance-window-day",
              description:
                "Day of the week for the maintenance window, in UTC time zone. _MAINTENANCE_WINDOW_DAY_ must be one of: *friday*, *monday*, *saturday*, *sunday*, *thursday*, *tuesday*, *wednesday*",
              priority: 100,
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
              name: "--maintenance-window-time",
              description:
                "Hour of day for maintenance window, in UTC time zone. A valid time of day must be specified in 24hr format (ex: 13:00, 17:30, 23:45). Maintenance will be scheduled within 60 minutes. To set the maintenance-window-time* attribute: * provide the argument *--maintenance-window-time* on the command line",
              priority: 100,
              args: {
                name: "MAINTENANCE_WINDOW_TIME",
                description: "String",
              },
            },
            {
              name: "--marketplace-enabled",
              description:
                "This specifies whether marketplace is enabled for controlled egress on the Looker instance. To disable marketplace for controlled egress, use the `--no-marketplace-enabled` flag",
            },
            optNoAsync,
            {
              name: "--no-catalog-integration-opt-out",
              description:
                "If specified, catalog integration will be disabled. Use `--no-catalog-integration-opt-out` to re-enable it",
              hidden: true,
            },
            {
              name: "--no-clear-periodic-export-config",
              description:
                "Clears all periodic export configuration from the instance",
              hidden: true,
            },
            {
              name: "--no-clear-psc-allowed-vpcs",
              description:
                "Remove all service attachments from the PSC config of the instance",
              hidden: true,
            },
            {
              name: "--no-clear-psc-service-attachments",
              description:
                "Remove all allowed VPCs from the PSC config of the instance",
              hidden: true,
            },
            {
              name: "--no-egress-enabled",
              description:
                "This specifies whether controlled egress is enabled on the Looker instance. To disable controlled egress, use the `--no-egress-enabled` flag",
              hidden: true,
            },
            {
              name: "--no-marketplace-enabled",
              description:
                "This specifies whether marketplace is enabled for controlled egress on the Looker instance. To disable marketplace for controlled egress, use the `--no-marketplace-enabled` flag",
              hidden: true,
            },
            {
              name: "--no-public-ip-enabled",
              description:
                "This specifies whether public IP is enabled on the Looker instance",
              hidden: true,
            },
            {
              name: "--oauth-client-id",
              description: "The client ID from an external OAuth application",
              priority: 100,
              args: {
                name: "OAUTH_CLIENT_ID",
                description: "String",
              },
            },
            {
              name: "--oauth-client-secret",
              description:
                "The client secret from an external OAuth application",
              priority: 100,
              args: {
                name: "OAUTH_CLIENT_SECRET",
                description: "String",
              },
            },
            {
              name: "--periodic-export-gcs-uri",
              description:
                "Cloud Storage bucket URI for periodic export. Format: gs://{bucket_name}",
              args: {
                name: "PERIODIC_EXPORT_GCS_URI",
                description: "String",
              },
            },
            {
              name: "--periodic-export-kms-key",
              description:
                "Name of the CMEK key in KMS. Format: projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}",
              args: {
                name: "PERIODIC_EXPORT_KMS_KEY",
                description: "String",
              },
            },
            {
              name: "--periodic-export-start-time",
              description:
                "Time in UTC when the periodic export job starts. A valid time of day must be specified in 24hr format (ex: 13:00, 17:30, 23:45)",
              args: {
                name: "PERIODIC_EXPORT_START_TIME",
                description: "String",
              },
            },
            optProject,
            {
              name: "--psc-allowed-vpcs",
              description:
                "List of VPCs that are allowed ingress into the Looker instance",
              args: {
                name: "PSC_ALLOWED_VPCS",
                description: "List",
              },
            },
            {
              name: "--psc-service-attachment",
              description:
                'Service attachments representing egress connections for the Looker instance. This flag can be repeated. (Example: --psc-service-attachment domain="mydomain.com",attachment="projects/my-project/regions/us-east1/serviceAttachments/sa" --psc-service-attachments domain="mydomain2.com",attachment="projects/my-project/regions/us-east1/serviceAttachments/sa2")',
              isRepeatable: true,
              args: {
                name: "PSC_SERVICE_ATTACHMENT",
              },
            },
            {
              name: "--public-ip-enabled",
              description:
                "This specifies whether public IP is enabled on the Looker instance",
            },
            optQuiet,
            optRegion,
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
      description: "Manage Looker operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a Looker import or export operation",
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
                "The name of the Looker region of the operation. Overrides the default looker/region property value for this command invocation",
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
          description: "Show metadata for a Looker operation",
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
                "The name of the Looker region of the operation. Overrides the default looker/region property value for this command invocation",
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
          description: "List Looker operations",
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
            {
              name: "--region",
              description:
                "ID of the region or fully qualified identifier for the region",
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
      name: "regions",
      description: "Manage Looker regions",
      subcommands: [
        {
          name: "list",
          description: "List Looker regions",
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
