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

const optLabels: Fig.Option = {
  name: "--labels",
  description: "Labels or tags associated with the resource",
  args: {
    name: "LABELS",
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
  description: "The location id of the autonomousDatabase resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description: "The location id of the cloudExadataInfrastructure resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation4: Fig.Option = {
  name: "--location",
  description: "The location id of the exadbVmCluster resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation5: Fig.Option = {
  name: "--location",
  description: "The location id of the exascaleDbStorageVault resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation6: Fig.Option = {
  name: "--location",
  description: "The location id of the goldengateConnectionAssignment resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation7: Fig.Option = {
  name: "--location",
  description: "The location id of the goldengateDeployment resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation8: Fig.Option = {
  name: "--location",
  description: "The location id of the odbNetwork resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation9: Fig.Option = {
  name: "--location",
  description: "The location id of the odbSubnet resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation10: Fig.Option = {
  name: "--location",
  description: "The location id of the operation resource",
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

const optNetwork: Fig.Option = {
  name: "--network",
  description:
    "ID of the network or fully qualified identifier for the network",
  priority: 100,
  args: {
    name: "NETWORK",
    description: "String",
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

const optOdbNetwork: Fig.Option = {
  name: "--odb-network",
  description:
    "For resources [odb-network, odb-subnet], provides fallback value for resource odb-network attribute. When the resource's full URI path is not provided, odb-network will fallback to this flag value",
  args: {
    name: "ODB_NETWORK",
    description: "String",
  },
};

const optOdbNetwork2: Fig.Option = {
  name: "--odb-network",
  description: "The odbNetwork id of the odbSubnet resource",
  args: {
    name: "ODB_NETWORK",
    description: "String",
  },
};

const optOdbSubnet: Fig.Option = {
  name: "--odb-subnet",
  description:
    "ID of the odbSubnet or fully qualified identifier for the odbSubnet",
  priority: 100,
  args: {
    name: "ODB_SUBNET",
    description: "String",
  },
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
  description:
    "An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments",
  args: {
    name: "REQUEST_ID",
    description: "String",
  },
};

const optRequestId2: Fig.Option = {
  name: "--request-id",
  description:
    "An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request",
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

const optTimeZoneId: Fig.Option = {
  name: "--time-zone-id",
  description:
    'IANA Time Zone Database time zone. For example "America/New_York"',
  args: {
    name: "TIME_ZONE_ID",
    description: "String",
  },
};

const optTimeZoneVersion: Fig.Option = {
  name: "--time-zone-version",
  description: 'IANA Time Zone Database version number. For example "2019a"',
  args: {
    name: "TIME_ZONE_VERSION",
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
  name: "oracle-database",
  description: "Manage Oracle Database resources",
  subcommands: [
    {
      name: "autonomous-database-backups",
      description: "Manage Autonomous Database Backup resources",
      subcommands: [
        {
          name: "list",
          description: "List autonomous database backups",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--filter",
              description:
                "Apply a ADB filter in the format : --filter='autonomous_database_id=\"my-instance\"'",
              args: {
                name: "EXPRESSION",
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
      name: "autonomous-database-character-sets",
      description: "Manage Autonomous Database Character Set resources",
      subcommands: [
        {
          name: "list",
          description: "List all AutonomousDatabaseCharacterSets",
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
      name: "autonomous-databases",
      description: "Manage Autonomous Database resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new AutonomousDatabase",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--admin-password",
              description:
                "The password for the default ADMIN user. Note: Only one of `admin_password_secret_version` or `admin_password` can be populated",
              args: {
                name: "ADMIN_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--admin-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the database admin user's password. Format: projects/{project}/secrets/{secret}/versions/{version}. Note: Only one of `admin_password_secret_version` or `admin_password` can be populated",
              args: {
                name: "ADMIN_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            optAsync,
            optBillingProject,
            {
              name: "--cidr",
              description: "The subnet CIDR range for the Autonomous Database",
              args: {
                name: "CIDR",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--database",
              description:
                "The name of the Autonomous Database. The database name must be unique in the project. The name must begin with a letter and can contain a maximum of 30 alphanumeric characters",
              args: {
                name: "DATABASE",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description:
                "The display name for the Autonomous Database. The name does not have to be unique within your project",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--encryption-key-kms",
              description:
                "ID of the cryptoKey or fully qualified identifier for the cryptoKey",
              priority: 100,
              args: {
                name: "ENCRYPTION_KEY_KMS",
                description: "String",
              },
            },
            {
              name: "--encryption-key-provider",
              description:
                "The provider of the encryption key. _ENCRYPTION_KEY_PROVIDER_ must be one of:",
              args: {
                name: "ENCRYPTION_KEY_PROVIDER",
                suggestions: ["google-managed", "oracle-managed"],
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
              name: "--labels",
              description:
                "The labels or tags associated with the Autonomous Database",
              args: {
                name: "LABELS",
              },
            },
            {
              name: "--location",
              description:
                "For resources [autonomous_database, encryption-key-kms, odb-network, odb-subnet, source-config-autonomous-database], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optNetwork,
            optNoAsync,
            {
              name: "--no-properties-is-auto-scaling-enabled",
              description:
                "This field indicates if auto scaling is enabled for the Autonomous Database CPU core count",
              hidden: true,
            },
            {
              name: "--no-properties-is-storage-auto-scaling-enabled",
              description:
                "This field indicates if auto scaling is enabled for the Autonomous Database storage",
              hidden: true,
            },
            {
              name: "--no-properties-local-data-guard-enabled",
              description:
                "Indicates whether the Autonomous Database has a local (in-region) standby database. Not applicable to cross-region Data Guard or dedicated Exadata infrastructure",
              hidden: true,
            },
            {
              name: "--no-properties-mtls-connection-required",
              description:
                "This field specifies if the Autonomous Database requires mTLS connections",
              hidden: true,
            },
            {
              name: "--no-source-config-automatic-backups-replication-enabled",
              description:
                "This field specifies if the replication of automatic backups is enabled when creating a Data Guard",
              hidden: true,
            },
            optOdbNetwork,
            optOdbSubnet,
            optProject,
            {
              name: "--properties-allowlisted-ips",
              description:
                "The list of allowlisted IP addresses for the Autonomous Database",
              args: {
                name: "PROPERTIES_ALLOWLISTED_IPS",
                description: "List",
              },
            },
            {
              name: "--properties-backup-retention-period-days",
              description:
                "The retention period for the Autonomous Database. This field is specified in days, can range from 1 day to 60 days, and has a default value of 60 days",
              args: {
                name: "PROPERTIES_BACKUP_RETENTION_PERIOD_DAYS",
                description: "Int",
              },
            },
            {
              name: "--properties-character-set",
              description:
                "The character set for the Autonomous Database. The default is AL32UTF8",
              args: {
                name: "PROPERTIES_CHARACTER_SET",
                description: "String",
              },
            },
            {
              name: "--properties-compute-count",
              description:
                "The number of compute servers for the Autonomous Database",
              args: {
                name: "PROPERTIES_COMPUTE_COUNT",
                description: "Float",
              },
            },
            {
              name: "--properties-cpu-core-count",
              description:
                "The number of CPU cores to be made available to the database",
              args: {
                name: "PROPERTIES_CPU_CORE_COUNT",
                description: "Int",
              },
            },
            {
              name: "--properties-customer-contacts",
              description: "The list of customer contacts",
              args: {
                name: "PROPERTIES_CUSTOMER_CONTACTS",
              },
            },
            {
              name: "--properties-data-storage-size-gb",
              description:
                "The size of the data stored in the database, in gigabytes",
              args: {
                name: "PROPERTIES_DATA_STORAGE_SIZE_GB",
                description: "Int",
              },
            },
            {
              name: "--properties-data-storage-size-tb",
              description:
                "The size of the data stored in the database, in terabytes",
              args: {
                name: "PROPERTIES_DATA_STORAGE_SIZE_TB",
                description: "Int",
              },
            },
            {
              name: "--properties-db-edition",
              description:
                "The edition of the Autonomous Databases. _PROPERTIES_DB_EDITION_ must be one of:",
              args: {
                name: "PROPERTIES_DB_EDITION",
                suggestions: ["enterprise-edition", "standard-edition"],
              },
            },
            {
              name: "--properties-db-version",
              description:
                "The Oracle Database version for the Autonomous Database",
              args: {
                name: "PROPERTIES_DB_VERSION",
                description: "String",
              },
            },
            {
              name: "--properties-db-workload",
              description:
                "The workload type of the Autonomous Database. _PROPERTIES_DB_WORKLOAD_ must be one of:",
              priority: 100,
              args: {
                name: "PROPERTIES_DB_WORKLOAD",
                suggestions: ["ajd", "apex", "dw", "oltp"],
              },
            },
            {
              name: "--properties-is-auto-scaling-enabled",
              description:
                "This field indicates if auto scaling is enabled for the Autonomous Database CPU core count",
            },
            {
              name: "--properties-is-storage-auto-scaling-enabled",
              description:
                "This field indicates if auto scaling is enabled for the Autonomous Database storage",
            },
            {
              name: "--properties-license-type",
              description:
                "The license type used for the Autonomous Database. _PROPERTIES_LICENSE_TYPE_ must be one of:",
              priority: 100,
              args: {
                name: "PROPERTIES_LICENSE_TYPE",
                suggestions: ["bring-your-own-license", "license-included"],
              },
            },
            {
              name: "--properties-local-adg-auto-failover-max-data-loss-limit-duration",
              description:
                "This field indicates the maximum data loss limit for an Autonomous Database, in seconds",
              args: {
                name: "PROPERTIES_LOCAL_ADG_AUTO_FAILOVER_MAX_DATA_LOSS_LIMIT_DURATION",
                description: "Int",
              },
            },
            {
              name: "--properties-local-data-guard-enabled",
              description:
                "Indicates whether the Autonomous Database has a local (in-region) standby database. Not applicable to cross-region Data Guard or dedicated Exadata infrastructure",
            },
            {
              name: "--properties-maintenance-schedule-type",
              description:
                "The maintenance schedule of the Autonomous Database. _PROPERTIES_MAINTENANCE_SCHEDULE_TYPE_ must be one of:",
              args: {
                name: "PROPERTIES_MAINTENANCE_SCHEDULE_TYPE",
                suggestions: ["early", "regular"],
              },
            },
            {
              name: "--properties-mtls-connection-required",
              description:
                "This field specifies if the Autonomous Database requires mTLS connections",
            },
            {
              name: "--properties-n-character-set",
              description:
                "The national character set for the Autonomous Database. The default is AL16UTF16",
              args: {
                name: "PROPERTIES_N_CHARACTER_SET",
                description: "String",
              },
            },
            {
              name: "--properties-private-endpoint-ip",
              description:
                "The private endpoint IP address for the Autonomous Database",
              args: {
                name: "PROPERTIES_PRIVATE_ENDPOINT_IP",
                description: "String",
              },
            },
            {
              name: "--properties-private-endpoint-label",
              description:
                "The private endpoint label for the Autonomous Database",
              args: {
                name: "PROPERTIES_PRIVATE_ENDPOINT_LABEL",
                description: "String",
              },
            },
            {
              name: "--properties-secret-id",
              description:
                "The ID of the Oracle Cloud Infrastructure vault secret",
              args: {
                name: "PROPERTIES_SECRET_ID",
                description: "String",
              },
            },
            {
              name: "--properties-vault-id",
              description: "The ID of the Oracle Cloud Infrastructure vault",
              args: {
                name: "PROPERTIES_VAULT_ID",
                description: "String",
              },
            },
            optQuiet,
            optRequestId,
            {
              name: "--source-config-automatic-backups-replication-enabled",
              description:
                "This field specifies if the replication of automatic backups is enabled when creating a Data Guard",
            },
            {
              name: "--source-config-autonomous-database",
              description:
                "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase",
              priority: 100,
              args: {
                name: "SOURCE_CONFIG_AUTONOMOUS_DATABASE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTONOMOUS_DATABASE",
            description:
              "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase",
          },
        },
        {
          name: "delete",
          description: "Delete an AutonomousDatabase",
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
            optLocation2,
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
            name: "AUTONOMOUS_DATABASE",
            description:
              "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase",
          },
        },
        {
          name: "describe",
          description: "Get details of an AutonomousDatabase",
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
            name: "AUTONOMOUS_DATABASE",
            description:
              "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase",
          },
        },
        {
          name: "failover",
          description:
            "Failovers a standby AutonomousDatabase to a new primary",
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
              description:
                "For resources [autonomous_database, peer-autonomous-database], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optNoAsync,
            {
              name: "--peer-autonomous-database",
              description:
                "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase",
              priority: 100,
              args: {
                name: "PEER_AUTONOMOUS_DATABASE",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTONOMOUS_DATABASE",
            description:
              "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase",
          },
        },
        {
          name: "generate-wallet",
          description: "Generate wallet for an AutonomousDatabase",
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
              name: "--is-regional",
              description:
                "True when requesting regional connection strings in PDB connect info, applicable to cross-region Data Guard only",
            },
            optLocation2,
            optLogHttp,
            {
              name: "--no-is-regional",
              description:
                "True when requesting regional connection strings in PDB connect info, applicable to cross-region Data Guard only",
              hidden: true,
            },
            {
              name: "--password",
              description:
                "The password used to encrypt the keys inside the wallet. The password must be a minimum of 8 characters",
              priority: 100,
              args: {
                name: "PASSWORD",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            {
              name: "--type",
              description:
                "The type of wallet generation for the Autonomous Database. The default value is SINGLE. _TYPE_ must be one of:",
              args: {
                name: "TYPE",
                suggestions: ["all", "single"],
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTONOMOUS_DATABASE",
            description:
              "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase",
          },
        },
        {
          name: "list",
          description: "List all AutonomousDatabases",
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
          name: "restart",
          description: "Restarts an AutonomousDatabase",
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
            optLocation2,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTONOMOUS_DATABASE",
            description:
              "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase",
          },
        },
        {
          name: "restore",
          description: "Restore an AutonomousDatabase",
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
            optLocation2,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--restore-time",
              description: "The time and date to restore the database to",
              priority: 100,
              args: {
                name: "RESTORE_TIME",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTONOMOUS_DATABASE",
            description:
              "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase",
          },
        },
        {
          name: "start",
          description: "Starts an AutonomousDatabase",
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
            optLocation2,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTONOMOUS_DATABASE",
            description:
              "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase",
          },
        },
        {
          name: "stop",
          description: "Stops an AutonomousDatabase",
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
            optLocation2,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTONOMOUS_DATABASE",
            description:
              "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase",
          },
        },
        {
          name: "switchover",
          description: "Switchovers an AutonomousDatabase to a new primary",
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
              description:
                "For resources [autonomous_database, peer-autonomous-database], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optNoAsync,
            {
              name: "--peer-autonomous-database",
              description:
                "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase",
              priority: 100,
              args: {
                name: "PEER_AUTONOMOUS_DATABASE",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTONOMOUS_DATABASE",
            description:
              "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase",
          },
        },
        {
          name: "update",
          description: "Update an AutonomousDatabase",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--clear-encryption-key-kms",
              description: "Clear encryption_key_kms value and set to null",
            },
            {
              name: "--clear-labels",
              description: "Clear labels value and set to empty map",
            },
            {
              name: "--clear-properties",
              description:
                "Set autonomousDatabase.properties back to default value",
            },
            optConfiguration,
            {
              name: "--encryption-key-kms",
              description:
                "ID of the cryptoKey or fully qualified identifier for the cryptoKey",
              priority: 100,
              args: {
                name: "ENCRYPTION_KEY_KMS",
                description: "String",
              },
            },
            {
              name: "--encryption-key-provider",
              description:
                "The provider of the encryption key. _ENCRYPTION_KEY_PROVIDER_ must be one of:",
              args: {
                name: "ENCRYPTION_KEY_PROVIDER",
                suggestions: ["google-managed", "oracle-managed"],
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
              name: "--labels",
              description:
                "Set labels to new value. The labels or tags associated with the Autonomous Database",
              args: {
                name: "LABELS",
              },
            },
            {
              name: "--location",
              description:
                "For resources [autonomous_database, encryption-key-kms], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optNoAsync,
            {
              name: "--no-clear-encryption-key-kms",
              description: "Clear encryption_key_kms value and set to null",
              hidden: true,
            },
            {
              name: "--no-clear-labels",
              description: "Clear labels value and set to empty map",
              hidden: true,
            },
            {
              name: "--no-clear-properties",
              description:
                "Set autonomousDatabase.properties back to default value",
              hidden: true,
            },
            {
              name: "--no-properties-local-data-guard-enabled",
              description:
                "Indicates whether the Autonomous Database has a local (in-region) standby database. Not applicable to cross-region Data Guard or dedicated Exadata infrastructure",
            },
            optProject,
            {
              name: "--properties-local-adg-auto-failover-max-data-loss-limit-duration",
              description:
                "This field indicates the maximum data loss limit for an Autonomous Database, in seconds",
              args: {
                name: "PROPERTIES_LOCAL_ADG_AUTO_FAILOVER_MAX_DATA_LOSS_LIMIT_DURATION",
                description: "Int",
              },
            },
            {
              name: "--properties-local-data-guard-enabled",
              description:
                "Indicates whether the Autonomous Database has a local (in-region) standby database. Not applicable to cross-region Data Guard or dedicated Exadata infrastructure. Use *--properties-local-data-guard-enabled* to enable and *--no-properties-local-data-guard-enabled* to disable",
            },
            optQuiet,
            {
              name: "--remove-labels",
              description:
                "Remove existing value from map labels. Sets `remove_labels` value",
              args: {
                name: "REMOVE_LABELS",
                description: "Dict",
              },
            },
            optRequestId,
            optTraceToken,
            {
              name: "--update-labels",
              description:
                "Update labels value or add key value pair. The labels or tags associated with the Autonomous Database",
              args: {
                name: "UPDATE_LABELS",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTONOMOUS_DATABASE",
            description:
              "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase",
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
      name: "autonomous-db-versions",
      description: "Manage Autonomous Db Version resources",
      subcommands: [
        {
          name: "list",
          description: "List all AutonomousDbVersions",
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
      name: "cloud-exadata-infrastructures",
      description: "Manage Cloud Exadata Infrastructure resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new ExadataInfrastructure",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--display-name",
              description: "User friendly name for this resource",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gcp-oracle-zone",
              description:
                "The GCP Oracle zone where Oracle Exadata Infrastructure is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability",
              args: {
                name: "GCP_ORACLE_ZONE",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLabels,
            optLocation3,
            optLogHttp,
            {
              name: "--maintenance-window-custom-action-timeout-mins",
              description:
                "Determines the amount of time the system will wait before the start of each database server patching operation. Custom action timeout is in minutes and valid value is between 15 to 120 (inclusive)",
              args: {
                name: "MAINTENANCE_WINDOW_CUSTOM_ACTION_TIMEOUT_MINS",
                description: "Int",
              },
            },
            {
              name: "--maintenance-window-days-of-week",
              description:
                "Days during the week when maintenance should be performed. _MAINTENANCE_WINDOW_DAYS_OF_WEEK_ must be one of:",
              args: {
                name: "MAINTENANCE_WINDOW_DAYS_OF_WEEK",
                description: "List",
              },
            },
            {
              name: "--maintenance-window-hours-of-day",
              description:
                "The window of hours during the day when maintenance should be performed. The window is a 4 hour slot. Valid values are: 0 - represents time slot 0:00 - 3:59 UTC 4 - represents time slot 4:00 - 7:59 UTC 8 - represents time slot 8:00 - 11:59 UTC 12 - represents time slot 12:00 - 15:59 UTC 16 - represents time slot 16:00 - 19:59 UTC 20 - represents time slot 20:00 - 23:59 UTC",
              args: {
                name: "MAINTENANCE_WINDOW_HOURS_OF_DAY",
                description: "List",
              },
            },
            {
              name: "--maintenance-window-is-custom-action-timeout-enabled",
              description:
                "If true, enables the configuration of a custom action timeout (waiting period) between database server patching operations",
            },
            {
              name: "--maintenance-window-lead-time-week",
              description:
                "Lead time window allows user to set a lead time to prepare for a down time. The lead time is in weeks and valid value is between 1 to 4",
              args: {
                name: "MAINTENANCE_WINDOW_LEAD_TIME_WEEK",
                description: "Int",
              },
            },
            {
              name: "--maintenance-window-months",
              description:
                "Months during the year when maintenance should be performed. _MAINTENANCE_WINDOW_MONTHS_ must be one of:",
              args: {
                name: "MAINTENANCE_WINDOW_MONTHS",
                description: "List",
              },
            },
            {
              name: "--maintenance-window-patching-mode",
              description:
                'Cloud CloudExadataInfrastructure node patching method, either "ROLLING" or "NONROLLING". Default value is ROLLING. _MAINTENANCE_WINDOW_PATCHING_MODE_ must be one of:',
              args: {
                name: "MAINTENANCE_WINDOW_PATCHING_MODE",
                suggestions: ["non-rolling", "rolling"],
              },
            },
            {
              name: "--maintenance-window-preference",
              description:
                "The maintenance window scheduling preference. _MAINTENANCE_WINDOW_PREFERENCE_ must be one of:",
              args: {
                name: "MAINTENANCE_WINDOW_PREFERENCE",
                suggestions: ["custom-preference", "no-preference"],
              },
            },
            {
              name: "--maintenance-window-weeks-of-month",
              description:
                "Weeks during the month when maintenance should be performed. Weeks start on the 1st, 8th, 15th, and 22nd days of the month, and have a duration of 7 days. Weeks start and end based on calendar dates, not days of the week",
              args: {
                name: "MAINTENANCE_WINDOW_WEEKS_OF_MONTH",
                description: "List",
              },
            },
            optNoAsync,
            {
              name: "--no-maintenance-window-is-custom-action-timeout-enabled",
              description:
                "If true, enables the configuration of a custom action timeout (waiting period) between database server patching operations",
              hidden: true,
            },
            optProject,
            {
              name: "--properties-compute-count",
              description:
                "The number of compute servers for the Exadata Infrastructure",
              args: {
                name: "PROPERTIES_COMPUTE_COUNT",
                description: "Int",
              },
            },
            {
              name: "--properties-customer-contacts",
              description: "The list of customer contacts",
              args: {
                name: "PROPERTIES_CUSTOMER_CONTACTS",
              },
            },
            {
              name: "--properties-shape",
              description:
                "The shape of the Exadata Infrastructure. The shape determines the amount of CPU, storage, and memory resources allocated to the instance",
              priority: 100,
              args: {
                name: "PROPERTIES_SHAPE",
                description: "String",
              },
            },
            {
              name: "--properties-storage-count",
              description:
                "The number of Cloud Exadata storage servers for the Exadata Infrastructure",
              args: {
                name: "PROPERTIES_STORAGE_COUNT",
                description: "Int",
              },
            },
            {
              name: "--properties-total-storage-size-gb",
              description:
                "The total storage allocated to the Exadata Infrastructure resource, in gigabytes (GB)",
              args: {
                name: "PROPERTIES_TOTAL_STORAGE_SIZE_GB",
                description: "Int",
              },
            },
            optQuiet,
            optRequestId,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLOUD_EXADATA_INFRASTRUCTURE",
            description:
              "ID of the cloudExadataInfrastructure or fully qualified identifier for the cloudExadataInfrastructure",
          },
        },
        {
          name: "db-servers",
          description: "Manage Db Server resources",
          subcommands: [
            {
              name: "list",
              description: "List all DbServers",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--cloud-exadata-infrastructure",
                  description:
                    "ID of the cloudExadataInfrastructure or fully qualified identifier for the cloudExadataInfrastructure",
                  priority: 100,
                  args: {
                    name: "CLOUD_EXADATA_INFRASTRUCTURE",
                    description: "String",
                  },
                },
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
          name: "delete",
          description: "Delete an ExadataInfrastructure",
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
              description:
                "If set to true, all VM clusters for this Exadata Infrastructure will be deleted. An Exadata Infrastructure can only be deleted once all its VM clusters have been deleted",
            },
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
              name: "--no-force",
              description:
                "If set to true, all VM clusters for this Exadata Infrastructure will be deleted. An Exadata Infrastructure can only be deleted once all its VM clusters have been deleted",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRequestId,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLOUD_EXADATA_INFRASTRUCTURE",
            description:
              "ID of the cloudExadataInfrastructure or fully qualified identifier for the cloudExadataInfrastructure",
          },
        },
        {
          name: "describe",
          description: "Get details of a ExadataInfrastructure",
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
            name: "CLOUD_EXADATA_INFRASTRUCTURE",
            description:
              "ID of the cloudExadataInfrastructure or fully qualified identifier for the cloudExadataInfrastructure",
          },
        },
        {
          name: "list",
          description: "List all ExadataInfrastructures",
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
      name: "cloud-vm-clusters",
      description: "Manage Cloud Vm Cluster resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new CloudVmCluster",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--backup-odb-subnet",
              description:
                "ID of the odbSubnet or fully qualified identifier for the odbSubnet",
              priority: 100,
              args: {
                name: "BACKUP_ODB_SUBNET",
                description: "String",
              },
            },
            {
              name: "--backup-subnet-cidr",
              description: "CIDR range of the backup subnet",
              args: {
                name: "BACKUP_SUBNET_CIDR",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--cidr",
              description:
                "Network settings. CIDR to use for cluster IP allocation",
              args: {
                name: "CIDR",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--diagnostics-data-collection-options-events-enabled",
              description:
                "Indicates whether diagnostic collection is enabled for the VM cluster",
            },
            {
              name: "--diagnostics-data-collection-options-health-monitoring-enabled",
              description:
                "Indicates whether health monitoring is enabled for the VM cluster",
            },
            {
              name: "--diagnostics-data-collection-options-incident-logs-enabled",
              description:
                "Indicates whether incident logs and trace collection are enabled for the VM cluster",
            },
            {
              name: "--display-name",
              description: "User friendly name for this resource",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--exadata-infrastructure",
              description:
                "ID of the cloudExadataInfrastructure or fully qualified identifier for the cloudExadataInfrastructure",
              priority: 100,
              args: {
                name: "EXADATA_INFRASTRUCTURE",
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
              name: "--labels",
              description: "Labels or tags associated with the VM Cluster",
              args: {
                name: "LABELS",
              },
            },
            {
              name: "--location",
              description:
                "For resources [backup-odb-subnet, cloud_vm_cluster, exadata-infrastructure, odb-network, odb-subnet], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optNetwork,
            optNoAsync,
            {
              name: "--no-diagnostics-data-collection-options-events-enabled",
              description:
                "Indicates whether diagnostic collection is enabled for the VM cluster",
              hidden: true,
            },
            {
              name: "--no-diagnostics-data-collection-options-health-monitoring-enabled",
              description:
                "Indicates whether health monitoring is enabled for the VM cluster",
              hidden: true,
            },
            {
              name: "--no-diagnostics-data-collection-options-incident-logs-enabled",
              description:
                "Indicates whether incident logs and trace collection are enabled for the VM cluster",
              hidden: true,
            },
            {
              name: "--no-properties-local-backup-enabled",
              description: "Use local backup",
              hidden: true,
            },
            {
              name: "--no-properties-sparse-diskgroup-enabled",
              description: "Use exadata sparse snapshots",
              hidden: true,
            },
            {
              name: "--odb-network",
              description:
                "For resources [backup-odb-subnet, odb-network, odb-subnet], provides fallback value for resource odb-network attribute. When the resource's full URI path is not provided, odb-network will fallback to this flag value",
              args: {
                name: "ODB_NETWORK",
                description: "String",
              },
            },
            optOdbSubnet,
            optProject,
            {
              name: "--properties-cluster-name",
              description: "OCI Cluster name",
              args: {
                name: "PROPERTIES_CLUSTER_NAME",
                description: "String",
              },
            },
            {
              name: "--properties-cpu-core-count",
              description: "Number of enabled CPU cores",
              priority: 100,
              args: {
                name: "PROPERTIES_CPU_CORE_COUNT",
                description: "Int",
              },
            },
            {
              name: "--properties-data-storage-size-tb",
              description: "The data disk group size to be allocated in TBs",
              args: {
                name: "PROPERTIES_DATA_STORAGE_SIZE_TB",
                description: "Float",
              },
            },
            {
              name: "--properties-db-node-storage-size-gb",
              description: "Local storage per VM",
              args: {
                name: "PROPERTIES_DB_NODE_STORAGE_SIZE_GB",
                description: "Int",
              },
            },
            {
              name: "--properties-db-server-ocids",
              description: "OCID of database servers",
              args: {
                name: "PROPERTIES_DB_SERVER_OCIDS",
                description: "List",
              },
            },
            {
              name: "--properties-disk-redundancy",
              description:
                "The type of redundancy. _PROPERTIES_DISK_REDUNDANCY_ must be one of:",
              args: {
                name: "PROPERTIES_DISK_REDUNDANCY",
                suggestions: ["high", "normal"],
              },
            },
            {
              name: "--properties-gi-version",
              description: "Grid Infrastructure Version",
              args: {
                name: "PROPERTIES_GI_VERSION",
                description: "String",
              },
            },
            {
              name: "--properties-hostname-prefix",
              description: "Prefix for VM cluster host names",
              args: {
                name: "PROPERTIES_HOSTNAME_PREFIX",
                description: "String",
              },
            },
            {
              name: "--properties-license-type",
              description:
                "License type of VM Cluster. _PROPERTIES_LICENSE_TYPE_ must be one of:",
              priority: 100,
              args: {
                name: "PROPERTIES_LICENSE_TYPE",
                suggestions: ["bring-your-own-license", "license-included"],
              },
            },
            {
              name: "--properties-local-backup-enabled",
              description: "Use local backup",
            },
            {
              name: "--properties-memory-size-gb",
              description: "Memory allocated in GBs",
              args: {
                name: "PROPERTIES_MEMORY_SIZE_GB",
                description: "Int",
              },
            },
            {
              name: "--properties-node-count",
              description: "Number of database servers",
              args: {
                name: "PROPERTIES_NODE_COUNT",
                description: "Int",
              },
            },
            {
              name: "--properties-ocpu-count",
              description: "OCPU count per VM. Minimum is 0.1",
              args: {
                name: "PROPERTIES_OCPU_COUNT",
                description: "Float",
              },
            },
            {
              name: "--properties-sparse-diskgroup-enabled",
              description: "Use exadata sparse snapshots",
            },
            {
              name: "--properties-ssh-public-keys",
              description: "SSH public keys to be stored with cluster",
              args: {
                name: "PROPERTIES_SSH_PUBLIC_KEYS",
                description: "List",
              },
            },
            {
              name: "--properties-system-version",
              description: "Operating system version of the image",
              args: {
                name: "PROPERTIES_SYSTEM_VERSION",
                description: "String",
              },
            },
            optQuiet,
            optRequestId,
            optTimeZoneId,
            optTimeZoneVersion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLOUD_VM_CLUSTER",
            description:
              "ID of the cloudVmCluster or fully qualified identifier for the cloudVmCluster",
          },
        },
        {
          name: "db-nodes",
          description: "Manage Db Node resources",
          subcommands: [
            {
              name: "list",
              description: "List all DbNodes",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--cloud-vm-cluster",
                  description:
                    "ID of the cloudVmClusterOrExadbVmCluster or fully qualified identifier for the cloudVmClusterOrExadbVmCluster",
                  args: {
                    name: "CLOUD_VM_CLUSTER",
                    description: "String",
                  },
                },
                optConfiguration,
                {
                  name: "--exadb-vm-cluster",
                  description:
                    "ID of the cloudVmClusterOrExadbVmCluster or fully qualified identifier for the cloudVmClusterOrExadbVmCluster",
                  args: {
                    name: "EXADB_VM_CLUSTER",
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
                  description:
                    "The location id of the cloudVmClusterOrExadbVmCluster resource",
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
          name: "delete",
          description: "Delete a CloudVmCluster",
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
              description:
                "If set to true, all child resources for the VM Cluster will be deleted. A VM Cluster can only be deleted once all its child resources have been deleted",
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--location",
              description: "The location id of the cloudVmCluster resource",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optNoAsync,
            {
              name: "--no-force",
              description:
                "If set to true, all child resources for the VM Cluster will be deleted. A VM Cluster can only be deleted once all its child resources have been deleted",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRequestId,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLOUD_VM_CLUSTER",
            description:
              "ID of the cloudVmCluster or fully qualified identifier for the cloudVmCluster",
          },
        },
        {
          name: "describe",
          description: "Describe cloudVmClusters",
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
              description: "The location id of the cloudVmCluster resource",
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
            name: "CLOUD_VM_CLUSTER",
            description:
              "ID of the cloudVmCluster or fully qualified identifier for the cloudVmCluster",
          },
        },
        {
          name: "list",
          description: "List all CloudVmClusters",
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
      name: "database-character-sets",
      description: "Manage Database Character Set resources",
      subcommands: [
        {
          name: "list",
          description: "List all DatabaseCharacterSets",
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
      name: "databases",
      description: "Manage Database resources",
      subcommands: [
        {
          name: "describe",
          description: "Get details of a Database",
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
              description: "The location id of the database resource",
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
            name: "DATABASE",
            description:
              "ID of the database or fully qualified identifier for the database",
          },
        },
        {
          name: "list",
          description: "List databases",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--filter",
              description:
                "Apply a filter in the format : --filter='dbSystem=\"projects/my-project/locations/us-east4/dbSystems/my-db-system\"'",
              args: {
                name: "EXPRESSION",
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
      name: "db-system-initial-storage-sizes",
      description: "Manage Db System Initial Storage Size resources",
      subcommands: [
        {
          name: "list",
          description: "List all DbSystemInitialStorageSizes",
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
      name: "db-system-shapes",
      description: "Manage Db System Shape resources",
      subcommands: [
        {
          name: "list",
          description: "List all DbSystemShapes",
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
      name: "db-systems",
      description: "Manage Db System resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new DbSystem",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--data-collection-options-is-diagnostics-events-enabled",
              description:
                "Indicates whether to enable data collection for diagnostics",
            },
            {
              name: "--data-collection-options-is-incident-logs-enabled",
              description:
                "Indicates whether to enable incident logs and trace collection",
            },
            {
              name: "--database-admin-password",
              description:
                "The password for the default ADMIN user. Note: Only one of `admin_password_secret_version` or `admin_password` can be populated",
              args: {
                name: "DATABASE_ADMIN_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--database-admin-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the database admin user's password. Format: projects/{project}/secrets/{secret}/versions/{version}. Note: Only one of `admin_password_secret_version` or `admin_password` can be populated",
              args: {
                name: "DATABASE_ADMIN_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--database-character-set",
              description:
                "The character set for the database. The default is AL32UTF8",
              args: {
                name: "DATABASE_CHARACTER_SET",
                description: "String",
              },
            },
            {
              name: "--database-db-home-name",
              description:
                "The name of the DbHome resource associated with the Database",
              args: {
                name: "DATABASE_DB_HOME_NAME",
                description: "String",
              },
            },
            {
              name: "--database-db-name",
              description:
                "The database name. The name must begin with an alphabetic character and can contain a maximum of eight alphanumeric characters. Special characters are not permitted",
              args: {
                name: "DATABASE_DB_NAME",
                description: "String",
              },
            },
            {
              name: "--database-db-unique-name",
              description:
                "The DB_UNIQUE_NAME of the Oracle Database being backed up",
              args: {
                name: "DATABASE_DB_UNIQUE_NAME",
                description: "String",
              },
            },
            {
              name: "--database-id",
              description: "The database ID of the Database",
              args: {
                name: "DATABASE_ID",
                description: "String",
              },
            },
            {
              name: "--database-name",
              description:
                "Identifier. The name of the Database resource in the following format: projects/{project}/locations/{region}/databases/{database}",
              args: {
                name: "DATABASE_NAME",
                description: "String",
              },
            },
            {
              name: "--database-ncharacter-set",
              description:
                "The national character set for the database. The default is AL16UTF16",
              args: {
                name: "DATABASE_NCHARACTER_SET",
                description: "String",
              },
            },
            {
              name: "--database-pluggable-id",
              description:
                "The ID of the pluggable database associated with the Database. The ID must be unique within the project and location",
              args: {
                name: "DATABASE_PLUGGABLE_ID",
                description: "String",
              },
            },
            {
              name: "--database-pluggable-name",
              description:
                "The pluggable database associated with the Database. The name must begin with an alphabetic character and can contain a maximum of thirty alphanumeric characters",
              args: {
                name: "DATABASE_PLUGGABLE_NAME",
                description: "String",
              },
            },
            {
              name: "--database-tde-wallet-password",
              description:
                "The TDE wallet password for the database. Note: Only one of `tde_wallet_password_secret_version` or `tde_wallet_password` can be populated",
              args: {
                name: "DATABASE_TDE_WALLET_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--database-tde-wallet-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the TDE wallet password for the database. Format: projects/{project}/secrets/{secret}/versions/{version}. Note: Only one of `tde_wallet_password_secret_version` or `tde_wallet_password` can be populated",
              args: {
                name: "DATABASE_TDE_WALLET_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--db-backup-config-auto-enabled",
              description:
                "If set to true, enables automatic backups on the database",
            },
            {
              name: "--db-backup-config-auto-full-day",
              description:
                "The day of the week on which the full backup should be performed on the database. If no value is provided, it will default to Sunday. _DB_BACKUP_CONFIG_AUTO_FULL_DAY_ must be one of:",
              args: {
                name: "DB_BACKUP_CONFIG_AUTO_FULL_DAY",
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
              name: "--db-backup-config-auto-full-window",
              description:
                "The window in which the full backup should be performed on the database. If no value is provided, the default is anytime. _DB_BACKUP_CONFIG_AUTO_FULL_WINDOW_ must be one of:",
              args: {
                name: "DB_BACKUP_CONFIG_AUTO_FULL_WINDOW",
                suggestions: [
                  "slot-eight",
                  "slot-eleven",
                  "slot-five",
                  "slot-four",
                  "slot-nine",
                  "slot-one",
                  "slot-seven",
                  "slot-six",
                  "slot-ten",
                  "slot-three",
                  "slot-twelve",
                  "slot-two",
                ],
              },
            },
            {
              name: "--db-backup-config-auto-incremental-window",
              description:
                "The window in which the incremental backup should be performed on the database. If no value is provided, the default is anytime except the auto full backup day. _DB_BACKUP_CONFIG_AUTO_INCREMENTAL_WINDOW_ must be one of:",
              args: {
                name: "DB_BACKUP_CONFIG_AUTO_INCREMENTAL_WINDOW",
                suggestions: [
                  "slot-eight",
                  "slot-eleven",
                  "slot-five",
                  "slot-four",
                  "slot-nine",
                  "slot-one",
                  "slot-seven",
                  "slot-six",
                  "slot-ten",
                  "slot-three",
                  "slot-twelve",
                  "slot-two",
                ],
              },
            },
            {
              name: "--db-backup-config-deletion-policy",
              description:
                "This defines when the backups will be deleted after Database termination. _DB_BACKUP_CONFIG_DELETION_POLICY_ must be one of:",
              args: {
                name: "DB_BACKUP_CONFIG_DELETION_POLICY",
                suggestions: [
                  "delete-after-retention-period",
                  "delete-immediately",
                ],
              },
            },
            {
              name: "--db-backup-config-destination-details",
              description: "Details of the database backup destinations",
              args: {
                name: "DB_BACKUP_CONFIG_DESTINATION_DETAILS",
              },
            },
            {
              name: "--db-backup-config-retention-period-days",
              description:
                "The number of days an automatic backup is retained before being automatically deleted. This value determines the earliest point in time to which a database can be restored. Min: 1, Max: 60",
              args: {
                name: "DB_BACKUP_CONFIG_RETENTION_PERIOD_DAYS",
                description: "Int",
              },
            },
            {
              name: "--db-home-display-name",
              description:
                "The display name for the Database Home. The name does not have to be unique within your project",
              args: {
                name: "DB_HOME_DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--db-home-is-unified-auditing-enabled",
              description:
                "Whether unified auditing is enabled for the Database Home",
            },
            {
              name: "--db-home-version",
              description:
                "A valid Oracle Database version. For a list of supported versions, use the ListDbVersions operation",
              priority: 100,
              args: {
                name: "DB_HOME_VERSION",
                description: "String",
              },
            },
            {
              name: "--db-system-options-storage-management",
              description:
                "The storage option used in DB system. _DB_SYSTEM_OPTIONS_STORAGE_MANAGEMENT_ must be one of:",
              args: {
                name: "DB_SYSTEM_OPTIONS_STORAGE_MANAGEMENT",
                suggestions: ["asm", "lvm"],
              },
            },
            {
              name: "--display-name",
              description:
                "The display name for the System db. The name does not have to be unique within your project",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gcp-oracle-zone",
              description:
                "The GCP Oracle zone where Oracle DbSystem is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability",
              args: {
                name: "GCP_ORACLE_ZONE",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--labels",
              description: "The labels or tags associated with the DbSystem",
              args: {
                name: "LABELS",
              },
            },
            {
              name: "--location",
              description:
                "For resources [db_system, odb-network, odb-subnet], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optNoAsync,
            {
              name: "--no-data-collection-options-is-diagnostics-events-enabled",
              description:
                "Indicates whether to enable data collection for diagnostics",
              hidden: true,
            },
            {
              name: "--no-data-collection-options-is-incident-logs-enabled",
              description:
                "Indicates whether to enable incident logs and trace collection",
              hidden: true,
            },
            {
              name: "--no-db-backup-config-auto-enabled",
              description:
                "If set to true, enables automatic backups on the database",
              hidden: true,
            },
            {
              name: "--no-db-home-is-unified-auditing-enabled",
              description:
                "Whether unified auditing is enabled for the Database Home",
              hidden: true,
            },
            optOdbNetwork,
            optOdbSubnet,
            optProject,
            {
              name: "--properties-compute-count",
              description: "The number of CPU cores to enable for the DbSystem",
              priority: 100,
              args: {
                name: "PROPERTIES_COMPUTE_COUNT",
                description: "Int",
              },
            },
            {
              name: "--properties-compute-model",
              description:
                "The compute model of the DbSystem. _PROPERTIES_COMPUTE_MODEL_ must be one of:",
              args: {
                name: "PROPERTIES_COMPUTE_MODEL",
                suggestions: ["ecpu", "ocpu"],
              },
            },
            {
              name: "--properties-data-storage-size-gb",
              description:
                "The data storage size in GB that is currently available to DbSystems",
              args: {
                name: "PROPERTIES_DATA_STORAGE_SIZE_GB",
                description: "Int",
              },
            },
            {
              name: "--properties-database-edition",
              description:
                "The database edition of the DbSystem. _PROPERTIES_DATABASE_EDITION_ must be one of:",
              priority: 100,
              args: {
                name: "PROPERTIES_DATABASE_EDITION",
                suggestions: [
                  "enterprise-edition",
                  "enterprise-edition-high-performance",
                  "standard-edition",
                ],
              },
            },
            {
              name: "--properties-db-version",
              description: "The Oracle Database version",
              priority: 100,
              args: {
                name: "PROPERTIES_DB_VERSION",
                description: "String",
              },
            },
            {
              name: "--properties-domain",
              description: "The host domain name of the DbSystem",
              args: {
                name: "PROPERTIES_DOMAIN",
                description: "String",
              },
            },
            {
              name: "--properties-hostname-prefix",
              description: "Prefix for DB System host names",
              args: {
                name: "PROPERTIES_HOSTNAME_PREFIX",
                description: "String",
              },
            },
            {
              name: "--properties-initial-data-storage-size-gb",
              description: "The initial data storage size in GB",
              priority: 100,
              args: {
                name: "PROPERTIES_INITIAL_DATA_STORAGE_SIZE_GB",
                description: "Int",
              },
            },
            {
              name: "--properties-license-model",
              description:
                "The license model of the DbSystem. _PROPERTIES_LICENSE_MODEL_ must be one of:",
              priority: 100,
              args: {
                name: "PROPERTIES_LICENSE_MODEL",
                suggestions: ["bring-your-own-license", "license-included"],
              },
            },
            {
              name: "--properties-memory-size-gb",
              description: "The memory size in GB",
              args: {
                name: "PROPERTIES_MEMORY_SIZE_GB",
                description: "Int",
              },
            },
            {
              name: "--properties-node-count",
              description: "The number of nodes in the DbSystem",
              args: {
                name: "PROPERTIES_NODE_COUNT",
                description: "Int",
              },
            },
            {
              name: "--properties-private-ip",
              description: "The private IP address of the DbSystem",
              args: {
                name: "PROPERTIES_PRIVATE_IP",
                description: "String",
              },
            },
            {
              name: "--properties-reco-storage-size-gb",
              description: "The reco/redo storage size in GB",
              args: {
                name: "PROPERTIES_RECO_STORAGE_SIZE_GB",
                description: "Int",
              },
            },
            {
              name: "--properties-shape",
              description: "Shape of DB System",
              priority: 100,
              args: {
                name: "PROPERTIES_SHAPE",
                description: "String",
              },
            },
            {
              name: "--properties-ssh-public-keys",
              description: "SSH public keys to be stored with the DbSystem",
              priority: 100,
              args: {
                name: "PROPERTIES_SSH_PUBLIC_KEYS",
                description: "List",
              },
            },
            optQuiet,
            optRequestId2,
            optTimeZoneId,
            optTimeZoneVersion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DB_SYSTEM",
            description:
              "ID of the dbSystem or fully qualified identifier for the dbSystem",
          },
        },
        {
          name: "delete",
          description: "Delete a DbSystem",
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
              description: "The location id of the dbSystem resource",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
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
            name: "DB_SYSTEM",
            description:
              "ID of the dbSystem or fully qualified identifier for the dbSystem",
          },
        },
        {
          name: "describe",
          description: "Get details of a DbSystem",
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
              description: "The location id of the dbSystem resource",
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
            name: "DB_SYSTEM",
            description:
              "ID of the dbSystem or fully qualified identifier for the dbSystem",
          },
        },
        {
          name: "list",
          description: "List all DbSystems",
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
      name: "db-versions",
      description: "Manage Db Version resources",
      subcommands: [
        {
          name: "list",
          description: "List all DbVersions",
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
      name: "entitlements",
      description: "Manage Entitlement resources",
      subcommands: [
        {
          name: "list",
          description: "List all Entitlements",
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
      name: "exadb-vm-clusters",
      description: "Manage Exadb Vm Cluster resources",
      subcommands: [
        {
          name: "create",
          description: "Create exadbVmClusters",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--backup-odb-subnet",
              description:
                "ID of the odbSubnet or fully qualified identifier for the odbSubnet",
              priority: 100,
              args: {
                name: "BACKUP_ODB_SUBNET",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--data-collection-options-is-diagnostics-events-enabled",
              description:
                "Indicates whether to enable data collection for diagnostics",
            },
            {
              name: "--data-collection-options-is-health-monitoring-enabled",
              description: "Indicates whether to enable health monitoring",
            },
            {
              name: "--data-collection-options-is-incident-logs-enabled",
              description:
                "Indicates whether to enable incident logs and trace collection",
            },
            {
              name: "--display-name",
              description:
                "The display name for the ExadbVmCluster. The name does not have to be unique within your project. The name must be 1-255 characters long and can only contain alphanumeric characters",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
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
              name: "--labels",
              description:
                "The labels or tags associated with the ExadbVmCluster",
              args: {
                name: "LABELS",
              },
            },
            {
              name: "--location",
              description:
                "For resources [backup-odb-subnet, exadb_vm_cluster, odb-network, odb-subnet, properties-exascale-db-storage-vault], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optNoAsync,
            {
              name: "--no-data-collection-options-is-diagnostics-events-enabled",
              description:
                "Indicates whether to enable data collection for diagnostics",
              hidden: true,
            },
            {
              name: "--no-data-collection-options-is-health-monitoring-enabled",
              description: "Indicates whether to enable health monitoring",
              hidden: true,
            },
            {
              name: "--no-data-collection-options-is-incident-logs-enabled",
              description:
                "Indicates whether to enable incident logs and trace collection",
              hidden: true,
            },
            {
              name: "--odb-network",
              description:
                "For resources [backup-odb-subnet, odb-network, odb-subnet], provides fallback value for resource odb-network attribute. When the resource's full URI path is not provided, odb-network will fallback to this flag value",
              args: {
                name: "ODB_NETWORK",
                description: "String",
              },
            },
            optOdbSubnet,
            optProject,
            {
              name: "--properties-additional-ecpu-count-per-node",
              description:
                "The number of additional ECPUs per node for an Exadata VM cluster on exascale infrastructure",
              args: {
                name: "PROPERTIES_ADDITIONAL_ECPU_COUNT_PER_NODE",
                description: "Int",
              },
            },
            {
              name: "--properties-cluster-name",
              description:
                "The cluster name for Exascale vm cluster. The cluster name must begin with an alphabetic character and may contain hyphens(-) but can not contain underscores(_). It should be not more than 11 characters and is not case sensitive. OCI Cluster name",
              args: {
                name: "PROPERTIES_CLUSTER_NAME",
                description: "String",
              },
            },
            {
              name: "--properties-enabled-ecpu-count-per-node",
              description:
                "The number of ECPUs enabled per node for an exadata vm cluster on exascale infrastructure",
              priority: 100,
              args: {
                name: "PROPERTIES_ENABLED_ECPU_COUNT_PER_NODE",
                description: "Int",
              },
            },
            {
              name: "--properties-exascale-db-storage-vault",
              description:
                "ID of the exascaleDbStorageVault or fully qualified identifier for the exascaleDbStorageVault",
              priority: 100,
              args: {
                name: "PROPERTIES_EXASCALE_DB_STORAGE_VAULT",
                description: "String",
              },
            },
            {
              name: "--properties-grid-image-id",
              description: "Grid Infrastructure Version",
              priority: 100,
              args: {
                name: "PROPERTIES_GRID_IMAGE_ID",
                description: "String",
              },
            },
            {
              name: "--properties-hostname-prefix",
              description: "Prefix for VM cluster host names",
              priority: 100,
              args: {
                name: "PROPERTIES_HOSTNAME_PREFIX",
                description: "String",
              },
            },
            {
              name: "--properties-license-model",
              description:
                "The license type of the ExadbVmCluster. _PROPERTIES_LICENSE_MODEL_ must be one of:",
              args: {
                name: "PROPERTIES_LICENSE_MODEL",
                suggestions: ["bring-your-own-license", "license-included"],
              },
            },
            {
              name: "--properties-node-count",
              description: "The number of nodes/VMs in the ExadbVmCluster",
              priority: 100,
              args: {
                name: "PROPERTIES_NODE_COUNT",
                description: "Int",
              },
            },
            {
              name: "--properties-scan-listener-port-tcp",
              description: "SCAN listener port - TCP",
              args: {
                name: "PROPERTIES_SCAN_LISTENER_PORT_TCP",
                description: "Int",
              },
            },
            {
              name: "--properties-shape-attribute",
              description:
                "The shape attribute of the VM cluster. The type of Exascale storage used for Exadata VM cluster. The default is SMART_STORAGE which supports Oracle Database 23ai and later. _PROPERTIES_SHAPE_ATTRIBUTE_ must be one of:",
              priority: 100,
              args: {
                name: "PROPERTIES_SHAPE_ATTRIBUTE",
                suggestions: ["block-storage", "smart-storage"],
              },
            },
            {
              name: "--properties-ssh-public-keys",
              description: "The SSH public keys for the ExadbVmCluster",
              priority: 100,
              args: {
                name: "PROPERTIES_SSH_PUBLIC_KEYS",
                description: "List",
              },
            },
            optQuiet,
            optRequestId2,
            optTimeZoneId,
            optTimeZoneVersion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--vm-file-system-storage-size-in-gbs-per-node",
              description:
                "The storage allocation for the exadbvmcluster per node, in gigabytes (GB). This field is used to calculate the total storage allocation for the exadbvmcluster",
              priority: 100,
              args: {
                name: "VM_FILE_SYSTEM_STORAGE_SIZE_IN_GBS_PER_NODE",
                description: "Int",
              },
            },
          ],
          args: {
            name: "EXADB_VM_CLUSTER",
            description:
              "ID of the exadbVmCluster or fully qualified identifier for the exadbVmCluster",
          },
        },
        {
          name: "delete",
          description: "Delete exadbVmClusters",
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
            optRequestId,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "EXADB_VM_CLUSTER",
            description:
              "ID of the exadbVmCluster or fully qualified identifier for the exadbVmCluster",
          },
        },
        {
          name: "describe",
          description: "Describe exadbVmClusters",
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
            optLocation4,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "EXADB_VM_CLUSTER",
            description:
              "ID of the exadbVmCluster or fully qualified identifier for the exadbVmCluster",
          },
        },
        {
          name: "list",
          description: "List exadbVmClusters",
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
          name: "remove-virtual-machine",
          description: "Remove exadbVmClusters",
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
            {
              name: "--hostnames",
              description:
                "The list of host names of db nodes to be removed from the ExadbVmCluster",
              priority: 100,
              args: {
                name: "HOSTNAMES",
                description: "List",
              },
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
            name: "EXADB_VM_CLUSTER",
            description:
              "ID of the exadbVmCluster or fully qualified identifier for the exadbVmCluster",
          },
        },
        {
          name: "update",
          description: "Update exadbVmClusters",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--clear-labels",
              description: "Clear labels value and set to empty map",
            },
            {
              name: "--clear-properties",
              description:
                "Set exadbVmCluster.properties back to default value",
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
            {
              name: "--labels",
              description:
                "Set labels to new value. The labels or tags associated with the ExadbVmCluster",
              args: {
                name: "LABELS",
              },
            },
            optLocation4,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-clear-labels",
              description: "Clear labels value and set to empty map",
              hidden: true,
            },
            {
              name: "--no-clear-properties",
              description:
                "Set exadbVmCluster.properties back to default value",
              hidden: true,
            },
            optProject,
            {
              name: "--properties-node-count",
              description: "The number of nodes/VMs in the ExadbVmCluster",
              args: {
                name: "PROPERTIES_NODE_COUNT",
                description: "Int",
              },
            },
            optQuiet,
            {
              name: "--remove-labels",
              description:
                "Remove existing value from map labels. Sets `remove_labels` value",
              args: {
                name: "REMOVE_LABELS",
                description: "Dict",
              },
            },
            optRequestId,
            optTraceToken,
            {
              name: "--update-labels",
              description:
                "Update labels value or add key value pair. The labels or tags associated with the ExadbVmCluster",
              args: {
                name: "UPDATE_LABELS",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "EXADB_VM_CLUSTER",
            description:
              "ID of the exadbVmCluster or fully qualified identifier for the exadbVmCluster",
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
      name: "exascale-db-storage-vaults",
      description: "Manage Exascale Db Storage Vault resources",
      subcommands: [
        {
          name: "create",
          description: "Create exascaleDbStorageVaults",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--display-name",
              description:
                "The display name for the ExascaleDbStorageVault. The name does not have to be unique within your project. The name must be 1-255 characters long and can only contain alphanumeric characters",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--exascale-db-storage-details-total-size-gbs",
              description:
                "The total storage allocation for the ExascaleDbStorageVault, in gigabytes (GB)",
              priority: 100,
              args: {
                name: "EXASCALE_DB_STORAGE_DETAILS_TOTAL_SIZE_GBS",
                description: "Int",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gcp-oracle-zone",
              description:
                "The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability",
              args: {
                name: "GCP_ORACLE_ZONE",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--labels",
              description:
                "The labels or tags associated with the ExascaleDbStorageVault",
              args: {
                name: "LABELS",
              },
            },
            optLocation5,
            optLogHttp,
            optNoAsync,
            optProject,
            {
              name: "--properties-additional-flash-cache-percent",
              description:
                "The size of additional flash cache in percentage of high capacity database storage",
              args: {
                name: "PROPERTIES_ADDITIONAL_FLASH_CACHE_PERCENT",
                description: "Int",
              },
            },
            {
              name: "--properties-description",
              description: "The description of the ExascaleDbStorageVault",
              args: {
                name: "PROPERTIES_DESCRIPTION",
                description: "String",
              },
            },
            optQuiet,
            optRequestId2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "EXASCALE_DB_STORAGE_VAULT",
            description:
              "ID of the exascaleDbStorageVault or fully qualified identifier for the exascaleDbStorageVault",
          },
        },
        {
          name: "delete",
          description: "Delete exascaleDbStorageVaults",
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
            optRequestId,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "EXASCALE_DB_STORAGE_VAULT",
            description:
              "ID of the exascaleDbStorageVault or fully qualified identifier for the exascaleDbStorageVault",
          },
        },
        {
          name: "describe",
          description: "Describe exascaleDbStorageVaults",
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
            name: "EXASCALE_DB_STORAGE_VAULT",
            description:
              "ID of the exascaleDbStorageVault or fully qualified identifier for the exascaleDbStorageVault",
          },
        },
        {
          name: "list",
          description: "List exascaleDbStorageVaults",
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
      name: "gi-versions",
      description: "Manage Gi Version resources",
      subcommands: [
        {
          name: "list",
          description: "List Grid Infrastructure versions",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--filter",
              description:
                "Apply a filter in the format : --filter='gi_version=\"19.0.0.0\"'",
              args: {
                name: "EXPRESSION",
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
          name: "minor-versions",
          description: "Manage Minor Version resources",
          subcommands: [
            {
              name: "list",
              description: "List minor versions",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--filter",
                  description:
                    "Apply a filter in the format: --filter='shape_family=\"EXADATA.X9M\"'",
                  args: {
                    name: "EXPRESSION",
                    description: "String",
                  },
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--gi-version",
                  description:
                    "ID of the gi-version or fully qualified identifier for the gi-version",
                  priority: 100,
                  args: {
                    name: "GI_VERSION",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLimit,
                {
                  name: "--location",
                  description: "The Cloud location for the gi-version",
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
      name: "goldengate-connection-assignments",
      description: "Manage Goldengate Connection Assignment resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new GoldengateConnectionAssignment",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--display-name",
              description:
                "The display name for the GoldengateConnectionAssignment",
              args: {
                name: "DISPLAY_NAME",
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
              name: "--labels",
              description:
                "The labels or tags associated with the GoldengateConnectionAssignment",
              args: {
                name: "LABELS",
              },
            },
            {
              name: "--location",
              description:
                "For resources [goldengate_connection_assignment, properties-goldengate-connection, properties-goldengate-deployment], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optNoAsync,
            optProject,
            {
              name: "--properties-goldengate-connection",
              description:
                "ID of the goldengateConnection or fully qualified identifier for the goldengateConnection",
              priority: 100,
              args: {
                name: "PROPERTIES_GOLDENGATE_CONNECTION",
                description: "String",
              },
            },
            {
              name: "--properties-goldengate-deployment",
              description:
                "ID of the goldengateDeployment or fully qualified identifier for the goldengateDeployment",
              priority: 100,
              args: {
                name: "PROPERTIES_GOLDENGATE_DEPLOYMENT",
                description: "String",
              },
            },
            optQuiet,
            optRequestId2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "GOLDENGATE_CONNECTION_ASSIGNMENT",
            description:
              "ID of the goldengateConnectionAssignment or fully qualified identifier for the goldengateConnectionAssignment",
          },
        },
        {
          name: "delete",
          description: "Delete a GoldengateConnectionAssignment",
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
            optLocation6,
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
            name: "GOLDENGATE_CONNECTION_ASSIGNMENT",
            description:
              "ID of the goldengateConnectionAssignment or fully qualified identifier for the goldengateConnectionAssignment",
          },
        },
        {
          name: "describe",
          description: "Get details of a GoldengateConnectionAssignment",
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
            name: "GOLDENGATE_CONNECTION_ASSIGNMENT",
            description:
              "ID of the goldengateConnectionAssignment or fully qualified identifier for the goldengateConnectionAssignment",
          },
        },
        {
          name: "list",
          description: "List all GoldengateConnectionAssignments",
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
          name: "test",
          description: "Test a GoldengateConnectionAssignment",
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
            {
              name: "--type",
              description:
                "The type of the test of the assigned connection. The only type actually supported is DEFAULT. _TYPE_ must be (only one value is supported):",
              args: {
                name: "TYPE",
                suggestions: ["default"],
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "GOLDENGATE_CONNECTION_ASSIGNMENT",
            description:
              "ID of the goldengateConnectionAssignment or fully qualified identifier for the goldengateConnectionAssignment",
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
      name: "goldengate-connection-types",
      description: "Manage Goldengate Connection Type resources",
      subcommands: [
        {
          name: "describe",
          description: "Describe goldengateConnectionTypes",
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
              description:
                "The location id of the goldengateConnectionType resource",
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
            name: "GOLDENGATE_CONNECTION_TYPE",
            description:
              "ID of the goldengateConnectionType or fully qualified identifier for the goldengateConnectionType",
          },
        },
        {
          name: "list",
          description: "List all Goldengate connection types",
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
      name: "goldengate-connections",
      description: "Manage Goldengate Connection resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new GoldengateConnection",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--amazon-kinesis-connection-properties-access-key-id",
              description: "Access key ID to access the Amazon Kinesis",
              args: {
                name: "AMAZON_KINESIS_CONNECTION_PROPERTIES_ACCESS_KEY_ID",
                description: "String",
              },
            },
            {
              name: "--amazon-kinesis-connection-properties-aws-region",
              description:
                "The name of the AWS region. If not provided, Goldengate will default to 'us-west-1'",
              args: {
                name: "AMAZON_KINESIS_CONNECTION_PROPERTIES_AWS_REGION",
                description: "String",
              },
            },
            {
              name: "--amazon-kinesis-connection-properties-endpoint",
              description:
                "The endpoint URL of the Amazon Kinesis service. e.g.: 'https://kinesis.us-east-1.amazonaws.com' If not provided, Goldengate will default to 'https://kinesis.<region>.amazonaws.com'",
              args: {
                name: "AMAZON_KINESIS_CONNECTION_PROPERTIES_ENDPOINT",
                description: "String",
              },
            },
            {
              name: "--amazon-kinesis-connection-properties-secret-access-key",
              description: "Secret access key to access the Amazon Kinesis",
              args: {
                name: "AMAZON_KINESIS_CONNECTION_PROPERTIES_SECRET_ACCESS_KEY",
                description: "String",
              },
            },
            {
              name: "--amazon-kinesis-connection-properties-technology-type",
              description: "The technology type of AmazonKinesisConnection",
              args: {
                name: "AMAZON_KINESIS_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--amazon-redshift-connection-properties-password",
              description:
                "The password Oracle Goldengate uses for Amazon Redshift connection in plain text",
              args: {
                name: "AMAZON_REDSHIFT_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--amazon-redshift-connection-properties-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the password Oracle Goldengate uses for Amazon Redshift connection. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "AMAZON_REDSHIFT_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--amazon-redshift-connection-properties-technology-type",
              description: "The technology type of AmazonRedshiftConnection",
              args: {
                name: "AMAZON_REDSHIFT_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--amazon-redshift-connection-properties-url",
              description:
                "Connection URL. e.g.: 'jdbc:redshift://aws-redshift-instance.aaaaaaaaaaaa.us-east-2.redshift.amazonaws.com:5439/mydb'",
              args: {
                name: "AMAZON_REDSHIFT_CONNECTION_PROPERTIES_URL",
                description: "String",
              },
            },
            {
              name: "--amazon-redshift-connection-properties-username",
              description:
                "The username Oracle Goldengate uses to connect the associated system of the given technology",
              args: {
                name: "AMAZON_REDSHIFT_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
              },
            },
            {
              name: "--amazon-s3-connection-properties-access-key-id",
              description: "Access key ID to access the Amazon S3 bucket",
              args: {
                name: "AMAZON_S3_CONNECTION_PROPERTIES_ACCESS_KEY_ID",
                description: "String",
              },
            },
            {
              name: "--amazon-s3-connection-properties-endpoint",
              description: "The Amazon Endpoint for S3",
              args: {
                name: "AMAZON_S3_CONNECTION_PROPERTIES_ENDPOINT",
                description: "String",
              },
            },
            {
              name: "--amazon-s3-connection-properties-region",
              description:
                "The name of the AWS region where the bucket is created",
              args: {
                name: "AMAZON_S3_CONNECTION_PROPERTIES_REGION",
                description: "String",
              },
            },
            {
              name: "--amazon-s3-connection-properties-secret-access-key",
              description: "Secret access key to access the Amazon S3 bucket",
              args: {
                name: "AMAZON_S3_CONNECTION_PROPERTIES_SECRET_ACCESS_KEY",
                description: "String",
              },
            },
            {
              name: "--amazon-s3-connection-properties-technology-type",
              description: "The technology type of AmazonS3Connection",
              args: {
                name: "AMAZON_S3_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            optAsync,
            {
              name: "--azure-data-lake-storage-connection-properties-account",
              description: "Sets the Azure storage account name",
              args: {
                name: "AZURE_DATA_LAKE_STORAGE_CONNECTION_PROPERTIES_ACCOUNT",
                description: "String",
              },
            },
            {
              name: "--azure-data-lake-storage-connection-properties-account-key-secret",
              description:
                "Azure storage account key. This property is required when 'authentication_type' is set to 'SHARED_KEY'",
              args: {
                name: "AZURE_DATA_LAKE_STORAGE_CONNECTION_PROPERTIES_ACCOUNT_KEY_SECRET",
                description: "String",
              },
            },
            {
              name: "--azure-data-lake-storage-connection-properties-authentication-type",
              description:
                "Authentication mechanism to access Azure Data Lake Storage. _AZURE_DATA_LAKE_STORAGE_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE_ must be one of:",
              args: {
                name: "AZURE_DATA_LAKE_STORAGE_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE",
                suggestions: [
                  "azure-active-directory",
                  "shared-access-signature",
                  "shared-key",
                ],
              },
            },
            {
              name: "--azure-data-lake-storage-connection-properties-authority-host",
              description:
                "The endpoint used for authentication with Microsoft Entra ID (formerly Azure Active Directory). Default value: https://login.microsoftonline.com",
              args: {
                name: "AZURE_DATA_LAKE_STORAGE_CONNECTION_PROPERTIES_AUTHORITY_HOST",
                description: "String",
              },
            },
            {
              name: "--azure-data-lake-storage-connection-properties-client-id",
              description:
                "Azure client ID of the application. This property is required when 'authentication_type' is set to 'AZURE_ACTIVE_DIRECTORY'",
              args: {
                name: "AZURE_DATA_LAKE_STORAGE_CONNECTION_PROPERTIES_CLIENT_ID",
                description: "String",
              },
            },
            {
              name: "--azure-data-lake-storage-connection-properties-client-secret",
              description:
                "Azure client secret (aka application password) for authentication",
              args: {
                name: "AZURE_DATA_LAKE_STORAGE_CONNECTION_PROPERTIES_CLIENT_SECRET",
                description: "String",
              },
            },
            {
              name: "--azure-data-lake-storage-connection-properties-endpoint",
              description:
                "Azure Storage service endpoint. e.g: https://test.blob.core.windows.net",
              args: {
                name: "AZURE_DATA_LAKE_STORAGE_CONNECTION_PROPERTIES_ENDPOINT",
                description: "String",
              },
            },
            {
              name: "--azure-data-lake-storage-connection-properties-sas-token-secret",
              description:
                "Credential that uses a shared access signature (SAS) to authenticate to an Azure Service",
              args: {
                name: "AZURE_DATA_LAKE_STORAGE_CONNECTION_PROPERTIES_SAS_TOKEN_SECRET",
                description: "String",
              },
            },
            {
              name: "--azure-data-lake-storage-connection-properties-technology-type",
              description:
                "The technology type of AzureDataLakeStorageConnection",
              args: {
                name: "AZURE_DATA_LAKE_STORAGE_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--azure-data-lake-storage-connection-properties-tenant-id",
              description:
                "Azure tenant ID of the application. This property is required when 'authentication_type' is set to 'AZURE_ACTIVE_DIRECTORY'",
              args: {
                name: "AZURE_DATA_LAKE_STORAGE_CONNECTION_PROPERTIES_TENANT_ID",
                description: "String",
              },
            },
            {
              name: "--azure-synapse-analytics-connection-properties-password",
              description:
                "The password Oracle Goldengate uses for Azure Synapse Analytics connection in plain text",
              args: {
                name: "AZURE_SYNAPSE_ANALYTICS_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--azure-synapse-analytics-connection-properties-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the password Oracle Goldengate uses for Azure Synapse Analytics connection. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "AZURE_SYNAPSE_ANALYTICS_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--azure-synapse-analytics-connection-properties-string",
              description:
                "JDBC connection string. e.g.: 'jdbc:sqlserver://<synapse-workspace>.sql.azuresynapse.net:1433;database=<db-name>;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.sql.azuresynapse.net;loginTimeout=300;'",
              args: {
                name: "AZURE_SYNAPSE_ANALYTICS_CONNECTION_PROPERTIES_STRING",
                description: "String",
              },
            },
            {
              name: "--azure-synapse-analytics-connection-properties-technology-type",
              description:
                "The technology type of AzureSynapseAnalyticsConnection",
              args: {
                name: "AZURE_SYNAPSE_ANALYTICS_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--azure-synapse-analytics-connection-properties-username",
              description:
                "The username Oracle Goldengate uses to connect the associated system of the given technology",
              args: {
                name: "AZURE_SYNAPSE_ANALYTICS_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--databricks-connection-properties-authentication-type",
              description:
                "Authentication type for Databricks. _DATABRICKS_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE_ must be one of:",
              args: {
                name: "DATABRICKS_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE",
                suggestions: ["oauth-m2m", "personal-access-token"],
              },
            },
            {
              name: "--databricks-connection-properties-client-id",
              description:
                "OAuth client id, only applicable for authentication_type == OAUTH_M2M",
              args: {
                name: "DATABRICKS_CONNECTION_PROPERTIES_CLIENT_ID",
                description: "String",
              },
            },
            {
              name: "--databricks-connection-properties-client-secret",
              description:
                "OAuth client secret, only applicable for authentication_type == OAUTH_M2M",
              args: {
                name: "DATABRICKS_CONNECTION_PROPERTIES_CLIENT_SECRET",
                description: "String",
              },
            },
            {
              name: "--databricks-connection-properties-password",
              description:
                "The password used to connect to Databricks in plain text",
              args: {
                name: "DATABRICKS_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--databricks-connection-properties-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the password used to connect to Databricks. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "DATABRICKS_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--databricks-connection-properties-storage-credential",
              description:
                "External storage credential name to access files on object storage such as ADLS Gen2, S3 or Cloud Storage",
              args: {
                name: "DATABRICKS_CONNECTION_PROPERTIES_STORAGE_CREDENTIAL",
                description: "String",
              },
            },
            {
              name: "--databricks-connection-properties-technology-type",
              description: "The technology type of DatabricksConnection",
              args: {
                name: "DATABRICKS_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--databricks-connection-properties-url",
              description:
                "Connection URL. e.g.: 'jdbc:databricks://adb-33934.4.azuredatabricks.net:443/default;transportMode=http;ssl=1;httpPath=sql/protocolv1/o/3393########44/0##3-7-hlrb'",
              args: {
                name: "DATABRICKS_CONNECTION_PROPERTIES_URL",
                description: "String",
              },
            },
            {
              name: "--db2-connection-properties-additional-attributes",
              description:
                "An array of name-value pair attribute entries. Used as additional parameters in connection string",
              args: {
                name: "DB2_CONNECTION_PROPERTIES_ADDITIONAL_ATTRIBUTES",
              },
            },
            {
              name: "--db2-connection-properties-database",
              description: "The name of the database",
              args: {
                name: "DB2_CONNECTION_PROPERTIES_DATABASE",
                description: "String",
              },
            },
            {
              name: "--db2-connection-properties-host",
              description: "The name or address of a host",
              args: {
                name: "DB2_CONNECTION_PROPERTIES_HOST",
                description: "String",
              },
            },
            {
              name: "--db2-connection-properties-password",
              description:
                "The password Oracle Goldengate uses for Db2 connection in plain text",
              args: {
                name: "DB2_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--db2-connection-properties-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the password Oracle Goldengate uses for Db2 connection. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "DB2_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--db2-connection-properties-port",
              description:
                "The port of an endpoint usually specified for a connection",
              args: {
                name: "DB2_CONNECTION_PROPERTIES_PORT",
                description: "Int",
              },
            },
            {
              name: "--db2-connection-properties-security-protocol",
              description:
                "Security protocol for the DB2 database. _DB2_CONNECTION_PROPERTIES_SECURITY_PROTOCOL_ must be one of:",
              args: {
                name: "DB2_CONNECTION_PROPERTIES_SECURITY_PROTOCOL",
                suggestions: ["plain", "tls"],
              },
            },
            {
              name: "--db2-connection-properties-ssl-client-keystash-file",
              description:
                "The keystash file which contains the encrypted password to the key database file. Not supported for IBM Db2 for i",
              args: {
                name: "DB2_CONNECTION_PROPERTIES_SSL_CLIENT_KEYSTASH_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--db2-connection-properties-ssl-client-keystoredb-file",
              description:
                "The keystore file created at the client containing the server certificate / CA root certificate. Not supported for IBM Db2 for i",
              args: {
                name: "DB2_CONNECTION_PROPERTIES_SSL_CLIENT_KEYSTOREDB_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--db2-connection-properties-ssl-server-certificate-file",
              description:
                "The file which contains the self-signed server certificate / Certificate Authority (CA) certificate",
              args: {
                name: "DB2_CONNECTION_PROPERTIES_SSL_SERVER_CERTIFICATE_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--db2-connection-properties-technology-type",
              description: "The technology type of Db2Connection",
              args: {
                name: "DB2_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--db2-connection-properties-username",
              description:
                "The username Oracle Goldengate uses to connect to the DB2 database",
              args: {
                name: "DB2_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
              },
            },
            {
              name: "--elasticsearch-connection-properties-authentication-type",
              description:
                "Authentication type for Elasticsearch. _ELASTICSEARCH_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE_ must be one of:",
              args: {
                name: "ELASTICSEARCH_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE",
                suggestions: ["basic", "none"],
              },
            },
            {
              name: "--elasticsearch-connection-properties-fingerprint",
              description:
                "Fingerprint required by TLS security protocol. Eg.: '6152b2dfbff200f973c5074a5b91d06ab3b472c07c09a1ea57bb7fd406cdce9c'",
              args: {
                name: "ELASTICSEARCH_CONNECTION_PROPERTIES_FINGERPRINT",
                description: "String",
              },
            },
            {
              name: "--elasticsearch-connection-properties-password",
              description:
                "The password Oracle Goldengate uses for Elastic Search connection in plain text",
              args: {
                name: "ELASTICSEARCH_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--elasticsearch-connection-properties-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the password Oracle Goldengate uses for Elastic Search connection. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "ELASTICSEARCH_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--elasticsearch-connection-properties-security-protocol",
              description:
                "Security protocol for Elasticsearch. _ELASTICSEARCH_CONNECTION_PROPERTIES_SECURITY_PROTOCOL_ must be one of:",
              args: {
                name: "ELASTICSEARCH_CONNECTION_PROPERTIES_SECURITY_PROTOCOL",
                suggestions: ["plain", "tls"],
              },
            },
            {
              name: "--elasticsearch-connection-properties-servers",
              description:
                'Comma separated list of Elasticsearch server addresses, specified as host:port entries, where :port is optional. If port is not specified, it defaults to 9200. Example: "server1.example.com:4000,server2.example.com:4000"',
              args: {
                name: "ELASTICSEARCH_CONNECTION_PROPERTIES_SERVERS",
                description: "String",
              },
            },
            {
              name: "--elasticsearch-connection-properties-technology-type",
              description: "The technology type of ElasticsearchConnection",
              args: {
                name: "ELASTICSEARCH_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--elasticsearch-connection-properties-username",
              description:
                "The username Oracle Goldengate uses to connect the associated system of the given technology",
              args: {
                name: "ELASTICSEARCH_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gcp-oracle-zone",
              description:
                "The GCP Oracle zone where Oracle GoldengateConnection is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability",
              args: {
                name: "GCP_ORACLE_ZONE",
                description: "String",
              },
            },
            {
              name: "--generic-connection-properties-host",
              description: "The host of the GenericConnection",
              args: {
                name: "GENERIC_CONNECTION_PROPERTIES_HOST",
                description: "String",
              },
            },
            {
              name: "--generic-connection-properties-technology-type",
              description: "The technology type",
              args: {
                name: "GENERIC_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--goldengate-connection-properties-deployment-id",
              description:
                "ID of the goldengateDeployment or fully qualified identifier for the goldengateDeployment",
              priority: 100,
              args: {
                name: "GOLDENGATE_CONNECTION_PROPERTIES_DEPLOYMENT_ID",
                description: "String",
              },
            },
            {
              name: "--goldengate-connection-properties-host",
              description: "The host of the GoldengateConnection",
              args: {
                name: "GOLDENGATE_CONNECTION_PROPERTIES_HOST",
                description: "String",
              },
            },
            {
              name: "--goldengate-connection-properties-password",
              description:
                "The password used to connect to the Oracle Goldengate in plain text",
              args: {
                name: "GOLDENGATE_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--goldengate-connection-properties-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the password used to connect to the Oracle Goldengate. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "GOLDENGATE_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--goldengate-connection-properties-port",
              description: "The port of the GoldengateConnection",
              args: {
                name: "GOLDENGATE_CONNECTION_PROPERTIES_PORT",
                description: "Int",
              },
            },
            {
              name: "--goldengate-connection-properties-technology-type",
              description: "The technology type",
              args: {
                name: "GOLDENGATE_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--goldengate-connection-properties-username",
              description: "The username credential",
              args: {
                name: "GOLDENGATE_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
              },
            },
            {
              name: "--google-big-query-connection-properties-service-account-key-file",
              description:
                "The service account key file Cloud Storage containing the credentials required to use Google BigQuery",
              args: {
                name: "GOOGLE_BIG_QUERY_CONNECTION_PROPERTIES_SERVICE_ACCOUNT_KEY_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--google-big-query-connection-properties-technology-type",
              description: "The technology type",
              args: {
                name: "GOOGLE_BIG_QUERY_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--google-cloud-storage-connection-properties-service-account-key-file",
              description:
                "The service account key Cloud Storage file containing the credentials required to use Google Cloud Storage",
              args: {
                name: "GOOGLE_CLOUD_STORAGE_CONNECTION_PROPERTIES_SERVICE_ACCOUNT_KEY_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--google-cloud-storage-connection-properties-technology-type",
              description: "The technology type",
              args: {
                name: "GOOGLE_CLOUD_STORAGE_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--google-pubsub-connection-properties-service-account-key-file",
              description:
                "The content of the service account key file containing the credentials required to use Google Pub/Sub",
              args: {
                name: "GOOGLE_PUBSUB_CONNECTION_PROPERTIES_SERVICE_ACCOUNT_KEY_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--google-pubsub-connection-properties-technology-type",
              description: "The technology type of GooglePubsubConnection",
              args: {
                name: "GOOGLE_PUBSUB_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--hdfs-connection-properties-core-site-xml",
              description:
                "The content of the Hadoop Distributed File System configuration file (core-site.xml)",
              args: {
                name: "HDFS_CONNECTION_PROPERTIES_CORE_SITE_XML",
                description: "String",
              },
            },
            {
              name: "--hdfs-connection-properties-technology-type",
              description: "The technology type of HdfsConnection",
              args: {
                name: "HDFS_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--iceberg-connection-properties-amazon-s3-storage-access-key-id",
              description: "The access key ID of Amazon S3",
              priority: 100,
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_AMAZON_S3_STORAGE_ACCESS_KEY_ID",
                description: "String",
              },
            },
            {
              name: "--iceberg-connection-properties-amazon-s3-storage-bucket",
              description: "The bucket of Amazon S3",
              priority: 100,
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_AMAZON_S3_STORAGE_BUCKET",
                description: "String",
              },
            },
            {
              name: "--iceberg-connection-properties-amazon-s3-storage-endpoint",
              description: "The endpoint of Amazon S3",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_AMAZON_S3_STORAGE_ENDPOINT",
                description: "String",
              },
            },
            {
              name: "--iceberg-connection-properties-amazon-s3-storage-region",
              description: "The region of Amazon S3",
              priority: 100,
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_AMAZON_S3_STORAGE_REGION",
                description: "String",
              },
            },
            {
              name: "--iceberg-connection-properties-amazon-s3-storage-scheme-type",
              description:
                "The scheme type of Amazon S3. _ICEBERG_CONNECTION_PROPERTIES_AMAZON_S3_STORAGE_SCHEME_TYPE_ must be one of:",
              priority: 100,
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_AMAZON_S3_STORAGE_SCHEME_TYPE",
                suggestions: ["s3", "s3a"],
              },
            },
            {
              name: "--iceberg-connection-properties-amazon-s3-storage-secret-access-key",
              description: "The secret access key of Amazon S3",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_AMAZON_S3_STORAGE_SECRET_ACCESS_KEY",
                description: "String",
              },
            },
            {
              name: "--iceberg-connection-properties-azure-data-lake-storage-account",
              description: "The account of Azure Data Lake Storage",
              priority: 100,
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_AZURE_DATA_LAKE_STORAGE_ACCOUNT",
                description: "String",
              },
            },
            {
              name: "--iceberg-connection-properties-azure-data-lake-storage-account-key-secret",
              description: "The account key of Azure Data Lake Storage",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_AZURE_DATA_LAKE_STORAGE_ACCOUNT_KEY_SECRET",
                description: "String",
              },
            },
            {
              name: "--iceberg-connection-properties-azure-data-lake-storage-container",
              description: "The container of Azure Data Lake Storage",
              priority: 100,
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_AZURE_DATA_LAKE_STORAGE_CONTAINER",
                description: "String",
              },
            },
            {
              name: "--iceberg-connection-properties-azure-data-lake-storage-endpoint",
              description: "The endpoint of Azure Data Lake Storage",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_AZURE_DATA_LAKE_STORAGE_ENDPOINT",
                description: "String",
              },
            },
            {
              name: "--iceberg-connection-properties-catalog-type",
              description:
                "The type of Iceberg catalog. _ICEBERG_CONNECTION_PROPERTIES_CATALOG_TYPE_ must be one of:",
              priority: 100,
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_CATALOG_TYPE",
                suggestions: ["glue", "hadoop", "nessie", "polaris", "rest"],
              },
            },
            {
              name: "--iceberg-connection-properties-glue-catalog-id",
              description: "The catalog ID of Glue",
              priority: 100,
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_GLUE_CATALOG_ID",
                description: "String",
              },
            },
            {
              name: "--iceberg-connection-properties-google-cloud-storage-bucket",
              description: "The bucket of Google Cloud Storage",
              priority: 100,
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_GOOGLE_CLOUD_STORAGE_BUCKET",
                description: "String",
              },
            },
            {
              name: "--iceberg-connection-properties-google-cloud-storage-project-id",
              description: "The project ID of Google Cloud Storage",
              priority: 100,
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_GOOGLE_CLOUD_STORAGE_PROJECT_ID",
                description: "String",
              },
            },
            {
              name: "--iceberg-connection-properties-google-cloud-storage-service-account-key-file",
              description:
                "The service account key file of Google Cloud Storage",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_GOOGLE_CLOUD_STORAGE_SERVICE_ACCOUNT_KEY_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--iceberg-connection-properties-nessie-catalog-branch",
              description: "The Nessie branch",
              priority: 100,
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_NESSIE_CATALOG_BRANCH",
                description: "String",
              },
            },
            {
              name: "--iceberg-connection-properties-nessie-catalog-uri",
              description: "The Nessie uri",
              priority: 100,
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_NESSIE_CATALOG_URI",
                description: "String",
              },
            },
            {
              name: "--iceberg-connection-properties-polaris-catalog",
              description: "The catalog name within Polaris",
              priority: 100,
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_POLARIS_CATALOG",
                description: "String",
              },
            },
            {
              name: "--iceberg-connection-properties-polaris-catalog-client-id",
              description: "The Polaris client ID",
              priority: 100,
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_POLARIS_CATALOG_CLIENT_ID",
                description: "String",
              },
            },
            {
              name: "--iceberg-connection-properties-polaris-catalog-client-secret",
              description: "The Polaris client secret",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_POLARIS_CATALOG_CLIENT_SECRET",
                description: "String",
              },
            },
            {
              name: "--iceberg-connection-properties-polaris-catalog-principal-role",
              description: "The Polaris principal role",
              priority: 100,
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_POLARIS_CATALOG_PRINCIPAL_ROLE",
                description: "String",
              },
            },
            {
              name: "--iceberg-connection-properties-polaris-catalog-uri",
              description: "The Polaris uri",
              priority: 100,
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_POLARIS_CATALOG_URI",
                description: "String",
              },
            },
            {
              name: "--iceberg-connection-properties-rest-catalog",
              description:
                "The content of the configuration file containing additional properties for the REST catalog",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_REST_CATALOG",
                description: "String",
              },
            },
            {
              name: "--iceberg-connection-properties-rest-catalog-uri",
              description: "The REST uri",
              priority: 100,
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_REST_CATALOG_URI",
                description: "String",
              },
            },
            {
              name: "--iceberg-connection-properties-storage-type",
              description:
                "The type of Iceberg storage. _ICEBERG_CONNECTION_PROPERTIES_STORAGE_TYPE_ must be one of:",
              priority: 100,
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_STORAGE_TYPE",
                suggestions: [
                  "amazon-s3",
                  "azure-data-lake-storage",
                  "google-cloud-storage",
                ],
              },
            },
            {
              name: "--iceberg-connection-properties-technology-type",
              description: "The technology type of Iceberg connection",
              priority: 100,
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            optImpersonateServiceAccount,
            {
              name: "--java-message-service-connection-properties-authentication-type",
              description:
                "Authentication type for Java Message Service. _JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE_ must be one of:",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE",
                suggestions: ["basic", "none"],
              },
            },
            {
              name: "--java-message-service-connection-properties-factory",
              description:
                "The Java class implementing javax.jms.ConnectionFactory interface supplied by the JMS provider",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_FACTORY",
                description: "String",
              },
            },
            {
              name: "--java-message-service-connection-properties-jndi-factory",
              description:
                "The Connection Factory can be looked up using this name. e.g.: 'ConnectionFactory'",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_JNDI_FACTORY",
                description: "String",
              },
            },
            {
              name: "--java-message-service-connection-properties-jndi-initial-context-factory",
              description:
                "The implementation of javax.naming.spi.InitialContextFactory interface used to obtain initial naming context",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_JNDI_INITIAL_CONTEXT_FACTORY",
                description: "String",
              },
            },
            {
              name: "--java-message-service-connection-properties-jndi-provider-url",
              description:
                "The URL that Java Message Service will use to contact the JNDI provider. e.g.: 'tcp://myjms.host.domain:61616?jms.prefetchPolicy.all=1000'",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_JNDI_PROVIDER_URL",
                description: "String",
              },
            },
            {
              name: "--java-message-service-connection-properties-jndi-security-credentials-secret",
              description: "The password associated to the principal",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_JNDI_SECURITY_CREDENTIALS_SECRET",
                description: "String",
              },
            },
            {
              name: "--java-message-service-connection-properties-jndi-security-principal",
              description:
                "Specifies the identity of the principal (user) to be authenticated",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_JNDI_SECURITY_PRINCIPAL",
                description: "String",
              },
            },
            {
              name: "--java-message-service-connection-properties-key-store-file",
              description: "The content of the KeyStore file",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_KEY_STORE_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--java-message-service-connection-properties-key-store-password",
              description: "The KeyStore password in plain text",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_KEY_STORE_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--java-message-service-connection-properties-key-store-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the KeyStore password. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_KEY_STORE_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--java-message-service-connection-properties-password",
              description:
                "The password Oracle Goldengate uses to connect the Java Message Service in plain text",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--java-message-service-connection-properties-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the password Oracle Goldengate uses to connect the associated Java Message Service. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--java-message-service-connection-properties-security-protocol",
              description:
                "Security protocol for Java Message Service. _JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_SECURITY_PROTOCOL_ must be one of:",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_SECURITY_PROTOCOL",
                suggestions: ["mtls", "plain", "tls"],
              },
            },
            {
              name: "--java-message-service-connection-properties-ssl-key-password",
              description:
                "The password for the cert inside of the KeyStore in plain text",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_SSL_KEY_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--java-message-service-connection-properties-ssl-key-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the password for the cert inside of the KeyStore. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_SSL_KEY_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--java-message-service-connection-properties-technology-type",
              description:
                "The technology type of JavaMessageServiceConnection",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--java-message-service-connection-properties-trust-store-file",
              description: "The content of the TrustStore file",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_TRUST_STORE_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--java-message-service-connection-properties-trust-store-password",
              description: "The TrustStore password in plain text",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_TRUST_STORE_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--java-message-service-connection-properties-trust-store-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the TrustStore password. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_TRUST_STORE_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--java-message-service-connection-properties-url",
              description:
                "Connection URL of the Java Message Service, specifying the protocol, host, and port. e.g.: 'mq://myjms.host.domain:7676'",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_URL",
                description: "String",
              },
            },
            {
              name: "--java-message-service-connection-properties-use-jndi",
              description:
                "If set to true, Java Naming and Directory Interface (JNDI) properties should be provided",
            },
            {
              name: "--java-message-service-connection-properties-username",
              description:
                "The username Oracle Goldengate uses to connect to the Java Message Service",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
              },
            },
            {
              name: "--kafka-connection-properties-bootstrap-servers",
              description:
                'Kafka bootstrap. Equivalent of bootstrap.servers configuration property in Kafka: list of KafkaBootstrapServer objects specified by host/port. Used for establishing the initial connection to the Kafka cluster. Example: "server1.example.com:9092,server2.example.com:9092"',
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_BOOTSTRAP_SERVERS",
              },
            },
            {
              name: "--kafka-connection-properties-cluster-id",
              description:
                "The OCID of the Kafka cluster being referenced from OCI Streaming with Apache Kafka",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_CLUSTER_ID",
                description: "String",
              },
            },
            {
              name: "--kafka-connection-properties-consumer-file",
              description: "The content of the consumer.properties file",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_CONSUMER_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--kafka-connection-properties-key-store-file",
              description: "The content of the KeyStore file",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_KEY_STORE_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--kafka-connection-properties-key-store-password",
              description: "The KeyStore password in plain text",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_KEY_STORE_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--kafka-connection-properties-key-store-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the KeyStore password. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_KEY_STORE_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--kafka-connection-properties-password",
              description:
                "The password for Kafka basic/SASL auth in plain text",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--kafka-connection-properties-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the password for Kafka basic/SASL auth. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--kafka-connection-properties-producer-file",
              description: "The content of the producer.properties file",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_PRODUCER_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--kafka-connection-properties-security-protocol",
              description:
                "Security Type for Kafka. _KAFKA_CONNECTION_PROPERTIES_SECURITY_PROTOCOL_ must be one of:",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_SECURITY_PROTOCOL",
                suggestions: ["plaintext", "sasl-plaintext", "sasl-ssl", "ssl"],
              },
            },
            {
              name: "--kafka-connection-properties-ssl-key-password",
              description:
                "The password for the cert inside of the KeyStore in plain text",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_SSL_KEY_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--kafka-connection-properties-ssl-key-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the password for the cert inside of the KeyStore. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_SSL_KEY_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--kafka-connection-properties-stream-pool-id",
              description: "The OCID of the stream pool being referenced",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_STREAM_POOL_ID",
                description: "String",
              },
            },
            {
              name: "--kafka-connection-properties-technology-type",
              description: "The technology type of KafkaConnection",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--kafka-connection-properties-trust-store-file",
              description: "The content of the TrustStore file",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_TRUST_STORE_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--kafka-connection-properties-trust-store-password",
              description: "The TrustStore password in plain text",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_TRUST_STORE_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--kafka-connection-properties-trust-store-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the TrustStore password. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_TRUST_STORE_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--kafka-connection-properties-use-resource-principal",
              description:
                "Specifies that the user intends to authenticate to the instance using a resource principal. Applicable only for OCI Streaming connections",
            },
            {
              name: "--kafka-connection-properties-username",
              description:
                "The username Oracle Goldengate uses to connect the associated system of the given technology",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-authentication-type",
              description:
                "Used authentication mechanism to access Schema Registry. _KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE_ must be one of:",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE",
                suggestions: ["basic", "mutual", "none"],
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-key-store-file",
              description: "The content of the KeyStore file",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_KEY_STORE_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-key-store-password",
              description: "The KeyStore password in plain text",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_KEY_STORE_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-key-store-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the KeyStore password. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_KEY_STORE_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-password",
              description:
                "The password to access Schema Registry in plain text",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the password to access Schema Registry using basic authentication. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-ssl-key-password",
              description:
                "The password for the cert inside the KeyStore in plain text",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_SSL_KEY_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-ssl-key-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the password for the cert inside the KeyStore. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_SSL_KEY_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-technology-type",
              description:
                "The technology type of KafkaSchemaRegistryConnection",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-trust-store-file",
              description: "The content of the TrustStore file",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_TRUST_STORE_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-trust-store-password",
              description: "The TrustStore password in plain text",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_TRUST_STORE_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-trust-store-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the TrustStore password. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_TRUST_STORE_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-url",
              description:
                "Kafka Schema Registry URL. e.g.: 'https://server1.us.oracle.com:8081'",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_URL",
                description: "String",
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-username",
              description:
                "The username to access Schema Registry using basic authentication. This value is injected into 'schema.registry.basic.auth.user.info=user:password' configuration property",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
              },
            },
            {
              name: "--labels",
              description:
                "The labels or tags associated with the GoldengateConnection",
              args: {
                name: "LABELS",
              },
            },
            {
              name: "--location",
              description:
                "For resources [goldengate-connection-properties-deployment-id, goldengate_connection, odb-network, odb-subnet], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--microsoft-fabric-connection-properties-client-id",
              description: "Azure client ID of the application",
              args: {
                name: "MICROSOFT_FABRIC_CONNECTION_PROPERTIES_CLIENT_ID",
                description: "String",
              },
            },
            {
              name: "--microsoft-fabric-connection-properties-client-secret",
              description: "Client secret associated with the client id",
              args: {
                name: "MICROSOFT_FABRIC_CONNECTION_PROPERTIES_CLIENT_SECRET",
                description: "String",
              },
            },
            {
              name: "--microsoft-fabric-connection-properties-endpoint",
              description:
                "Optional Microsoft Fabric service endpoint. Default value: https://onelake.dfs.fabric.microsoft.com",
              args: {
                name: "MICROSOFT_FABRIC_CONNECTION_PROPERTIES_ENDPOINT",
                description: "String",
              },
            },
            {
              name: "--microsoft-fabric-connection-properties-technology-type",
              description: "The technology type of MicrosoftFabricConnection",
              args: {
                name: "MICROSOFT_FABRIC_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--microsoft-fabric-connection-properties-tenant-id",
              description: "Azure tenant ID of the application",
              args: {
                name: "MICROSOFT_FABRIC_CONNECTION_PROPERTIES_TENANT_ID",
                description: "String",
              },
            },
            {
              name: "--microsoft-sqlserver-connection-properties-additional-attributes",
              description:
                "An array of name-value pair attribute entries. Used as additional parameters in connection string",
              args: {
                name: "MICROSOFT_SQLSERVER_CONNECTION_PROPERTIES_ADDITIONAL_ATTRIBUTES",
              },
            },
            {
              name: "--microsoft-sqlserver-connection-properties-database",
              description: "The name of the database",
              args: {
                name: "MICROSOFT_SQLSERVER_CONNECTION_PROPERTIES_DATABASE",
                description: "String",
              },
            },
            {
              name: "--microsoft-sqlserver-connection-properties-host",
              description: "The name or address of a host",
              args: {
                name: "MICROSOFT_SQLSERVER_CONNECTION_PROPERTIES_HOST",
                description: "String",
              },
            },
            {
              name: "--microsoft-sqlserver-connection-properties-password",
              description:
                "The password Oracle Goldengate uses for Microsoft SQL Server connection in plain text",
              args: {
                name: "MICROSOFT_SQLSERVER_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--microsoft-sqlserver-connection-properties-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the password Oracle Goldengate uses for Microsoft SQL Server connection. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "MICROSOFT_SQLSERVER_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--microsoft-sqlserver-connection-properties-port",
              description:
                "The port of an endpoint usually specified for a connection",
              args: {
                name: "MICROSOFT_SQLSERVER_CONNECTION_PROPERTIES_PORT",
                description: "Int",
              },
            },
            {
              name: "--microsoft-sqlserver-connection-properties-security-protocol",
              description:
                "Security Type for Microsoft SQL Server. _MICROSOFT_SQLSERVER_CONNECTION_PROPERTIES_SECURITY_PROTOCOL_ must be one of:",
              args: {
                name: "MICROSOFT_SQLSERVER_CONNECTION_PROPERTIES_SECURITY_PROTOCOL",
                suggestions: ["plain", "tls"],
              },
            },
            {
              name: "--microsoft-sqlserver-connection-properties-server-certificate-validation-required",
              description:
                "If set to true, the driver validates the certificate that is sent by the database server",
            },
            {
              name: "--microsoft-sqlserver-connection-properties-ssl-ca-file",
              description:
                "Database Certificate - The content of a .pem or .crt file containing the server public key (for 1-way SSL)",
              args: {
                name: "MICROSOFT_SQLSERVER_CONNECTION_PROPERTIES_SSL_CA_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--microsoft-sqlserver-connection-properties-technology-type",
              description:
                "The technology type of MicrosoftSqlserverConnection",
              args: {
                name: "MICROSOFT_SQLSERVER_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--microsoft-sqlserver-connection-properties-username",
              description:
                "The username Oracle Goldengate uses to connect to the Microsoft SQL Server",
              args: {
                name: "MICROSOFT_SQLSERVER_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
              },
            },
            {
              name: "--mongodb-connection-properties-database-id",
              description: "The OCID of the Oracle Autonomous Json Database",
              args: {
                name: "MONGODB_CONNECTION_PROPERTIES_DATABASE_ID",
                description: "String",
              },
            },
            {
              name: "--mongodb-connection-properties-password",
              description:
                "The password Oracle Goldengate uses to connect the Mongodb connection in plain text",
              args: {
                name: "MONGODB_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--mongodb-connection-properties-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the password Oracle Goldengate uses to connect the Mongodb connection. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "MONGODB_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--mongodb-connection-properties-security-protocol",
              description:
                "Security Type for MongoDB. _MONGODB_CONNECTION_PROPERTIES_SECURITY_PROTOCOL_ must be one of:",
              args: {
                name: "MONGODB_CONNECTION_PROPERTIES_SECURITY_PROTOCOL",
                suggestions: ["mtls", "plain", "tls"],
              },
            },
            {
              name: "--mongodb-connection-properties-string",
              description:
                "MongoDB connection string. e.g.: 'mongodb://mongodb0.example.com:27017/recordsrecords'",
              args: {
                name: "MONGODB_CONNECTION_PROPERTIES_STRING",
                description: "String",
              },
            },
            {
              name: "--mongodb-connection-properties-technology-type",
              description: "The technology type of MongodbConnection",
              args: {
                name: "MONGODB_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--mongodb-connection-properties-tls-ca-file",
              description:
                "Database Certificate - The content of a .pem file, containing the server public key (for 1 and 2-way SSL)",
              args: {
                name: "MONGODB_CONNECTION_PROPERTIES_TLS_CA_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--mongodb-connection-properties-tls-certificate-key-file",
              description:
                "Client Certificate - The content of a .pem file, containing the client public key (for 2-way SSL)",
              args: {
                name: "MONGODB_CONNECTION_PROPERTIES_TLS_CERTIFICATE_KEY_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--mongodb-connection-properties-tls-certificate-key-file-password",
              description:
                "The Client Certificate key file password in plain text",
              args: {
                name: "MONGODB_CONNECTION_PROPERTIES_TLS_CERTIFICATE_KEY_FILE_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--mongodb-connection-properties-tls-certificate-key-file-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the Client Certificate key file password in Secret Manager. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "MONGODB_CONNECTION_PROPERTIES_TLS_CERTIFICATE_KEY_FILE_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--mongodb-connection-properties-username",
              description:
                "The username Oracle Goldengate uses to connect to the database",
              args: {
                name: "MONGODB_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
              },
            },
            {
              name: "--mysql-connection-properties-additional-attributes",
              description:
                "An array of name-value pair attribute entries. Used as additional parameters in connection string",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_ADDITIONAL_ATTRIBUTES",
              },
            },
            {
              name: "--mysql-connection-properties-database",
              description: "The name of the database",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_DATABASE",
                description: "String",
              },
            },
            {
              name: "--mysql-connection-properties-db-system-id",
              description: "The OCID of the database system being referenced",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_DB_SYSTEM_ID",
                description: "String",
              },
            },
            {
              name: "--mysql-connection-properties-host",
              description: "The name or address of a host",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_HOST",
                description: "String",
              },
            },
            {
              name: "--mysql-connection-properties-password",
              description:
                "The password Oracle Goldengate uses to connect to MySQL in plain text",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--mysql-connection-properties-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the password Oracle Goldengate uses to connect to MySQL. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--mysql-connection-properties-port",
              description:
                "The port of an endpoint usually specified for a connection",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_PORT",
                description: "Int",
              },
            },
            {
              name: "--mysql-connection-properties-security-protocol",
              description:
                "Security Type for MySQL. _MYSQL_CONNECTION_PROPERTIES_SECURITY_PROTOCOL_ must be one of:",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_SECURITY_PROTOCOL",
                suggestions: ["mtls", "plain", "tls"],
              },
            },
            {
              name: "--mysql-connection-properties-ssl-ca-file",
              description:
                "Database Certificate - The content of a .pem or .crt file containing the server public key (for 1 and 2-way SSL)",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_SSL_CA_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--mysql-connection-properties-ssl-cert-file",
              description:
                "Client Certificate - The content of a .pem or .crt file containing the client public key (for 2-way SSL)",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_SSL_CERT_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--mysql-connection-properties-ssl-crl-file",
              description:
                "The list of certificates revoked by the trusted certificate authorities (Trusted CA)",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_SSL_CRL_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--mysql-connection-properties-ssl-key-file",
              description:
                "Client Key - The content of a .pem or .crt file containing the client private key (for 2-way SSL)",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_SSL_KEY_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--mysql-connection-properties-ssl-mode",
              description:
                "SSL modes for MySQL. _MYSQL_CONNECTION_PROPERTIES_SSL_MODE_ must be one of:",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_SSL_MODE",
                suggestions: [
                  "disabled",
                  "preferred",
                  "required",
                  "verify-ca",
                  "verify-identity",
                ],
              },
            },
            {
              name: "--mysql-connection-properties-technology-type",
              description: "The technology type of MysqlConnection",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--mysql-connection-properties-username",
              description:
                "The username Oracle Goldengate uses to connect the associated system of the given technology",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
              },
            },
            optNoAsync,
            {
              name: "--no-java-message-service-connection-properties-use-jndi",
              description:
                "If set to true, Java Naming and Directory Interface (JNDI) properties should be provided",
              hidden: true,
            },
            {
              name: "--no-kafka-connection-properties-use-resource-principal",
              description:
                "Specifies that the user intends to authenticate to the instance using a resource principal. Applicable only for OCI Streaming connections",
              hidden: true,
            },
            {
              name: "--no-microsoft-sqlserver-connection-properties-server-certificate-validation-required",
              description:
                "If set to true, the driver validates the certificate that is sent by the database server",
              hidden: true,
            },
            {
              name: "--no-oci-object-storage-connection-properties-use-resource-principal",
              description:
                "Specifies that the user intends to authenticate to the instance using a resource principal",
              hidden: true,
            },
            {
              name: "--no-oracle-ai-data-platform-connection-properties-use-resource-principal",
              description:
                "Specifies that the user intends to authenticate to the instance using a resource principal",
              hidden: true,
            },
            {
              name: "--no-oracle-nosql-connection-properties-use-resource-principal",
              description:
                "Specifies that the user intends to authenticate to the instance using a resource principal",
              hidden: true,
            },
            {
              name: "--oci-object-storage-connection-properties-private-key-file",
              description:
                "The content of the private key file (PEM file) corresponding to the API key of the fingerprint",
              args: {
                name: "OCI_OBJECT_STORAGE_CONNECTION_PROPERTIES_PRIVATE_KEY_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--oci-object-storage-connection-properties-private-key-passphrase-secret",
              description: "The passphrase of the private key",
              args: {
                name: "OCI_OBJECT_STORAGE_CONNECTION_PROPERTIES_PRIVATE_KEY_PASSPHRASE_SECRET",
                description: "String",
              },
            },
            {
              name: "--oci-object-storage-connection-properties-public-key-fingerprint",
              description:
                "The fingerprint of the API Key of the user specified by the userId",
              args: {
                name: "OCI_OBJECT_STORAGE_CONNECTION_PROPERTIES_PUBLIC_KEY_FINGERPRINT",
                description: "String",
              },
            },
            {
              name: "--oci-object-storage-connection-properties-region",
              description:
                "The name of the region of OCI Object Storage. e.g.: us-ashburn-1 If the region is not provided, backend will default to the default region",
              args: {
                name: "OCI_OBJECT_STORAGE_CONNECTION_PROPERTIES_REGION",
                description: "String",
              },
            },
            {
              name: "--oci-object-storage-connection-properties-technology-type",
              description: "The technology type of OciObjectStorageConnection",
              args: {
                name: "OCI_OBJECT_STORAGE_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--oci-object-storage-connection-properties-tenancy-id",
              description: "The OCID of the related OCI tenancy",
              args: {
                name: "OCI_OBJECT_STORAGE_CONNECTION_PROPERTIES_TENANCY_ID",
                description: "String",
              },
            },
            {
              name: "--oci-object-storage-connection-properties-use-resource-principal",
              description:
                "Specifies that the user intends to authenticate to the instance using a resource principal",
            },
            {
              name: "--oci-object-storage-connection-properties-user-id",
              description:
                "The OCID of the OCI user who will access the Object Storage. The user must have write access to the bucket they want to connect to",
              args: {
                name: "OCI_OBJECT_STORAGE_CONNECTION_PROPERTIES_USER_ID",
                description: "String",
              },
            },
            optOdbNetwork,
            optOdbSubnet,
            {
              name: "--oracle-ai-data-platform-connection-properties-private-key-file",
              description:
                "The content of the private key file (PEM file) corresponding to the API key of the fingerprint",
              args: {
                name: "ORACLE_AI_DATA_PLATFORM_CONNECTION_PROPERTIES_PRIVATE_KEY_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--oracle-ai-data-platform-connection-properties-private-key-passphrase-secret",
              description: "The passphrase of the private key",
              args: {
                name: "ORACLE_AI_DATA_PLATFORM_CONNECTION_PROPERTIES_PRIVATE_KEY_PASSPHRASE_SECRET",
                description: "String",
              },
            },
            {
              name: "--oracle-ai-data-platform-connection-properties-public-key-fingerprint",
              description:
                "The fingerprint of the API Key of the user specified by the user_id",
              args: {
                name: "ORACLE_AI_DATA_PLATFORM_CONNECTION_PROPERTIES_PUBLIC_KEY_FINGERPRINT",
                description: "String",
              },
            },
            {
              name: "--oracle-ai-data-platform-connection-properties-region",
              description: "The name of the region. e.g.: us-ashburn-1",
              args: {
                name: "ORACLE_AI_DATA_PLATFORM_CONNECTION_PROPERTIES_REGION",
                description: "String",
              },
            },
            {
              name: "--oracle-ai-data-platform-connection-properties-technology-type",
              description:
                "The technology type of OracleAiDataPlatformConnection",
              args: {
                name: "ORACLE_AI_DATA_PLATFORM_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--oracle-ai-data-platform-connection-properties-tenancy-id",
              description: "The OCID of the related OCI tenancy",
              args: {
                name: "ORACLE_AI_DATA_PLATFORM_CONNECTION_PROPERTIES_TENANCY_ID",
                description: "String",
              },
            },
            {
              name: "--oracle-ai-data-platform-connection-properties-url",
              description: "Connection URL. It must start with 'jdbc:spark://'",
              args: {
                name: "ORACLE_AI_DATA_PLATFORM_CONNECTION_PROPERTIES_URL",
                description: "String",
              },
            },
            {
              name: "--oracle-ai-data-platform-connection-properties-use-resource-principal",
              description:
                "Specifies that the user intends to authenticate to the instance using a resource principal",
            },
            {
              name: "--oracle-ai-data-platform-connection-properties-user-id",
              description: "The OCID of the OCI user who will access",
              args: {
                name: "ORACLE_AI_DATA_PLATFORM_CONNECTION_PROPERTIES_USER_ID",
                description: "String",
              },
            },
            {
              name: "--oracle-connection-properties-authentication-mode",
              description:
                "Authentication mode. _ORACLE_CONNECTION_PROPERTIES_AUTHENTICATION_MODE_ must be one of:",
              args: {
                name: "ORACLE_CONNECTION_PROPERTIES_AUTHENTICATION_MODE",
                suggestions: ["mtls", "tls"],
              },
            },
            {
              name: "--oracle-connection-properties-gcp-database-id",
              description:
                "Database instance id of database in Oracle Database @ Google Cloud. If gcp_oracle_database_id is provided, connection_string must be empty",
              args: {
                name: "ORACLE_CONNECTION_PROPERTIES_GCP_DATABASE_ID",
                description: "String",
              },
            },
            {
              name: "--oracle-connection-properties-password",
              description: "The password Oracle Goldengate uses in plain text",
              args: {
                name: "ORACLE_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--oracle-connection-properties-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the password Oracle Goldengate uses. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "ORACLE_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--oracle-connection-properties-session-mode",
              description:
                "The mode of the database connection session to be established by the data client. _ORACLE_CONNECTION_PROPERTIES_SESSION_MODE_ must be one of:",
              args: {
                name: "ORACLE_CONNECTION_PROPERTIES_SESSION_MODE",
                suggestions: ["direct", "redirect"],
              },
            },
            {
              name: "--oracle-connection-properties-string",
              description:
                "Connect descriptor or Easy Connect Naming method used to connect to a database",
              args: {
                name: "ORACLE_CONNECTION_PROPERTIES_STRING",
                description: "String",
              },
            },
            {
              name: "--oracle-connection-properties-technology-type",
              description: "The technology type",
              args: {
                name: "ORACLE_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--oracle-connection-properties-username",
              description: "The username Oracle Goldengate uses to connect",
              args: {
                name: "ORACLE_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
              },
            },
            {
              name: "--oracle-connection-properties-wallet-file",
              description:
                "The wallet contents Oracle Goldengate uses to make connections to a database",
              args: {
                name: "ORACLE_CONNECTION_PROPERTIES_WALLET_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--oracle-nosql-connection-properties-private-key-file",
              description:
                "The content of the private key file (PEM file) corresponding to the API key of the fingerprint",
              args: {
                name: "ORACLE_NOSQL_CONNECTION_PROPERTIES_PRIVATE_KEY_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--oracle-nosql-connection-properties-private-key-passphrase-secret",
              description: "The passphrase of the private key",
              args: {
                name: "ORACLE_NOSQL_CONNECTION_PROPERTIES_PRIVATE_KEY_PASSPHRASE_SECRET",
                description: "String",
              },
            },
            {
              name: "--oracle-nosql-connection-properties-public-key-fingerprint",
              description:
                "The fingerprint of the API Key of the user specified by the userId",
              args: {
                name: "ORACLE_NOSQL_CONNECTION_PROPERTIES_PUBLIC_KEY_FINGERPRINT",
                description: "String",
              },
            },
            {
              name: "--oracle-nosql-connection-properties-region",
              description: "The name of the region. e.g.: us-ashburn-1",
              args: {
                name: "ORACLE_NOSQL_CONNECTION_PROPERTIES_REGION",
                description: "String",
              },
            },
            {
              name: "--oracle-nosql-connection-properties-technology-type",
              description: "The technology type of OracleNosqlConnection",
              args: {
                name: "ORACLE_NOSQL_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--oracle-nosql-connection-properties-tenancy-id",
              description: "The OCID of the OCI tenancy",
              args: {
                name: "ORACLE_NOSQL_CONNECTION_PROPERTIES_TENANCY_ID",
                description: "String",
              },
            },
            {
              name: "--oracle-nosql-connection-properties-use-resource-principal",
              description:
                "Specifies that the user intends to authenticate to the instance using a resource principal",
            },
            {
              name: "--oracle-nosql-connection-properties-user-id",
              description:
                "The OCID of the OCI user who will access the Oracle NoSQL database",
              args: {
                name: "ORACLE_NOSQL_CONNECTION_PROPERTIES_USER_ID",
                description: "String",
              },
            },
            {
              name: "--postgresql-connection-properties-additional-attributes",
              description:
                "An array of name-value pair attribute entries. Used as additional parameters in connection string",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_ADDITIONAL_ATTRIBUTES",
              },
            },
            {
              name: "--postgresql-connection-properties-database",
              description: "The name of the database",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_DATABASE",
                description: "String",
              },
            },
            {
              name: "--postgresql-connection-properties-db-system-id",
              description: "The OCID of the database system being referenced",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_DB_SYSTEM_ID",
                description: "String",
              },
            },
            {
              name: "--postgresql-connection-properties-host",
              description: "The name or address of a host",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_HOST",
                description: "String",
              },
            },
            {
              name: "--postgresql-connection-properties-password",
              description:
                "The password Oracle Goldengate uses for PostgreSQL connection in plain text",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--postgresql-connection-properties-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the password Oracle Goldengate uses for PostgreSQL connection. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--postgresql-connection-properties-port",
              description:
                "The port of an endpoint usually specified for a connection",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_PORT",
                description: "Int",
              },
            },
            {
              name: "--postgresql-connection-properties-security-protocol",
              description:
                "Security protocol for PostgreSQL. _POSTGRESQL_CONNECTION_PROPERTIES_SECURITY_PROTOCOL_ must be one of:",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_SECURITY_PROTOCOL",
                suggestions: ["mtls", "plain", "tls"],
              },
            },
            {
              name: "--postgresql-connection-properties-ssl-ca-file",
              description:
                "The certificate of the trusted certificate authorities (Trusted CA) for PostgreSQL",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_SSL_CA_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--postgresql-connection-properties-ssl-cert-file",
              description: "The certificate of the PostgreSQL server",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_SSL_CERT_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--postgresql-connection-properties-ssl-crl-file",
              description:
                "The list of certificates revoked by the trusted certificate authorities (Trusted CA)",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_SSL_CRL_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--postgresql-connection-properties-ssl-key-file",
              description: "The private key of the PostgreSQL server",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_SSL_KEY_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--postgresql-connection-properties-ssl-mode",
              description:
                "SSL modes for PostgreSQL. _POSTGRESQL_CONNECTION_PROPERTIES_SSL_MODE_ must be one of:",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_SSL_MODE",
                suggestions: ["prefer", "require", "verify-ca", "verify-full"],
              },
            },
            {
              name: "--postgresql-connection-properties-technology-type",
              description: "The technology type of PostgresqlConnection",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--postgresql-connection-properties-username",
              description:
                "The username Oracle Goldengate uses to connect the associated system of the given technology",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
              },
            },
            optProject,
            {
              name: "--properties-connection-type",
              description:
                "The connection type. _PROPERTIES_CONNECTION_TYPE_ must be one of:",
              priority: 100,
              args: {
                name: "PROPERTIES_CONNECTION_TYPE",
                suggestions: [
                  "amazon-kinesis",
                  "amazon-redshift",
                  "amazon-s3",
                  "azure-data-lake-storage",
                  "azure-synapse-analytics",
                  "databricks",
                  "db2",
                  "elasticsearch",
                  "generic",
                  "goldengate",
                  "google-bigquery",
                  "google-cloud-storage",
                  "google-pubsub",
                  "hdfs",
                  "iceberg",
                  "java-message-service",
                  "kafka",
                  "kafka-schema-registry",
                  "microsoft-fabric",
                  "microsoft-sqlserver",
                  "mongodb",
                  "mysql",
                  "oci-object-storage",
                  "oracle",
                  "oracle-ai-data-platform",
                  "oracle-nosql",
                  "postgresql",
                  "redis",
                  "snowflake",
                ],
              },
            },
            {
              name: "--properties-description",
              description: "Metadata about this specific object",
              args: {
                name: "PROPERTIES_DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--properties-display-name",
              description: "An object's Display Name",
              priority: 100,
              args: {
                name: "PROPERTIES_DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--properties-routing-method",
              description:
                "The routing method for the GoldengateConnection. _PROPERTIES_ROUTING_METHOD_ must be one of:",
              args: {
                name: "PROPERTIES_ROUTING_METHOD",
                suggestions: [
                  "dedicated-endpoint",
                  "shared-deployment-endpoint",
                ],
              },
            },
            optQuiet,
            {
              name: "--redis-connection-properties-authentication-type",
              description:
                "Authentication type for Redis. _REDIS_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE_ must be one of:",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE",
                suggestions: ["basic", "none"],
              },
            },
            {
              name: "--redis-connection-properties-cluster-id",
              description: "The OCID of the Redis cluster",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_CLUSTER_ID",
                description: "String",
              },
            },
            {
              name: "--redis-connection-properties-key-store-file",
              description: "The content of the KeyStore file",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_KEY_STORE_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--redis-connection-properties-key-store-password",
              description: "The KeyStore password in plain text",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_KEY_STORE_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--redis-connection-properties-key-store-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the KeyStore password. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_KEY_STORE_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--redis-connection-properties-password",
              description:
                "The password Oracle Goldengate uses for Redis connection in plain text",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--redis-connection-properties-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the password Oracle Goldengate uses for Redis connection. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--redis-connection-properties-security-protocol",
              description:
                "Security protocol for Redis. _REDIS_CONNECTION_PROPERTIES_SECURITY_PROTOCOL_ must be one of:",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_SECURITY_PROTOCOL",
                suggestions: ["mtls", "plain", "tls"],
              },
            },
            {
              name: "--redis-connection-properties-servers",
              description:
                'Comma separated list of Redis server addresses, specified as host:port entries, where :port is optional. If port is not specified, it defaults to 6379. Example: "server1.example.com:6379,server2.example.com:6379"',
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_SERVERS",
                description: "String",
              },
            },
            {
              name: "--redis-connection-properties-technology-type",
              description: "The technology type of RedisConnection",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--redis-connection-properties-trust-store-file",
              description: "The content of the TrustStore file",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_TRUST_STORE_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--redis-connection-properties-trust-store-password",
              description: "The TrustStore password in plain text",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_TRUST_STORE_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--redis-connection-properties-trust-store-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the TrustStore password. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_TRUST_STORE_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--redis-connection-properties-username",
              description:
                "The username Oracle Goldengate uses to connect the associated system of the given technology",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
              },
            },
            optRequestId2,
            {
              name: "--snowflake-connection-properties-authentication-type",
              description:
                "Used authentication mechanism to access Snowflake. _SNOWFLAKE_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE_ must be one of:",
              args: {
                name: "SNOWFLAKE_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE",
                suggestions: ["basic", "key-pair"],
              },
            },
            {
              name: "--snowflake-connection-properties-password",
              description:
                "The password Oracle Goldengate uses to connect to Snowflake platform in plain text",
              args: {
                name: "SNOWFLAKE_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--snowflake-connection-properties-password-secret-version",
              description:
                "The resource name of a secret version in Secret Manager which contains the password Oracle Goldengate uses to connect to Snowflake platform. Format: projects/{project}/secrets/{secret}/versions/{version}",
              args: {
                name: "SNOWFLAKE_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--snowflake-connection-properties-private-key-file",
              description: "The content of private key file in PEM format",
              args: {
                name: "SNOWFLAKE_CONNECTION_PROPERTIES_PRIVATE_KEY_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--snowflake-connection-properties-private-key-passphrase-secret",
              description: "Password if the private key file is encrypted",
              args: {
                name: "SNOWFLAKE_CONNECTION_PROPERTIES_PRIVATE_KEY_PASSPHRASE_SECRET",
                description: "String",
              },
            },
            {
              name: "--snowflake-connection-properties-technology-type",
              description: "The technology type of SnowflakeConnection",
              args: {
                name: "SNOWFLAKE_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
              },
            },
            {
              name: "--snowflake-connection-properties-url",
              description:
                "JDBC connection URL. e.g.: 'jdbc:snowflake://<account_name>.snowflakecomputing.com/?warehouse=<warehouse-name>&db=<db-name>'",
              args: {
                name: "SNOWFLAKE_CONNECTION_PROPERTIES_URL",
                description: "String",
              },
            },
            {
              name: "--snowflake-connection-properties-username",
              description:
                "The username Oracle Goldengate uses to connect to Snowflake",
              args: {
                name: "SNOWFLAKE_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "GOLDENGATE_CONNECTION",
            description:
              "ID of the goldengateConnection or fully qualified identifier for the goldengateConnection",
          },
        },
        {
          name: "delete",
          description: "Delete a GoldengateConnection",
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
              description:
                "The location id of the goldengateConnection resource",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
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
            name: "GOLDENGATE_CONNECTION",
            description:
              "ID of the goldengateConnection or fully qualified identifier for the goldengateConnection",
          },
        },
        {
          name: "describe",
          description: "Get details of a GoldengateConnection",
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
              description:
                "The location id of the goldengateConnection resource",
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
            name: "GOLDENGATE_CONNECTION",
            description:
              "ID of the goldengateConnection or fully qualified identifier for the goldengateConnection",
          },
        },
        {
          name: "list",
          description: "List all GoldengateConnections",
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
      name: "goldengate-deployment-environments",
      description: "Manage Goldengate Deployment Environment resources",
      subcommands: [
        {
          name: "describe",
          description: "Describe goldengateDeploymentEnvironments",
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
              description:
                "The location id of the goldengateDeploymentEnvironment resource",
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
            name: "GOLDENGATE_DEPLOYMENT_ENVIRONMENT",
            description:
              "ID of the goldengateDeploymentEnvironment or fully qualified identifier for the goldengateDeploymentEnvironment",
          },
        },
        {
          name: "list",
          description: "List all Goldengate deployment environments",
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
      name: "goldengate-deployment-types",
      description: "Manage Goldengate Deployment Type resources",
      subcommands: [
        {
          name: "describe",
          description: "Describe goldengateDeploymentTypes",
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
              description:
                "The location id of the goldengateDeploymentType resource",
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
            name: "GOLDENGATE_DEPLOYMENT_TYPE",
            description:
              "ID of the goldengateDeploymentType or fully qualified identifier for the goldengateDeploymentType",
          },
        },
        {
          name: "list",
          description: "List all Goldengate deployment types",
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
      name: "goldengate-deployment-versions",
      description: "Manage Goldengate Deployment Version resources",
      subcommands: [
        {
          name: "describe",
          description: "Describe goldengateDeploymentVersions",
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
              description:
                "The location id of the goldengateDeploymentVersion resource",
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
            name: "GOLDENGATE_DEPLOYMENT_VERSION",
            description:
              "ID of the goldengateDeploymentVersion or fully qualified identifier for the goldengateDeploymentVersion",
          },
        },
        {
          name: "list",
          description: "List all Goldengate deployment versions",
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
      name: "goldengate-deployments",
      description: "Manage Goldengate Deployment resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new GoldengateDeployment",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--display-name",
              description: "The display name for the GoldengateDeployment",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gcp-oracle-zone",
              description:
                "The GCP Oracle zone where Oracle GoldengateDeployment is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability",
              args: {
                name: "GCP_ORACLE_ZONE",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--labels",
              description:
                "The labels or tags associated with the GoldengateDeployment",
              args: {
                name: "LABELS",
              },
            },
            {
              name: "--location",
              description:
                "For resources [goldengate_deployment, odb-network, odb-subnet], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--maintenance-config-bundle-release-upgrade-period-days",
              description:
                "Defines auto upgrade period for bundle releases. Manually configured period cannot be longer than service defined period for bundle releases. This period must be shorter or equal to major release upgrade period. Not passing this field during create will equate to using the service default",
              args: {
                name: "MAINTENANCE_CONFIG_BUNDLE_RELEASE_UPGRADE_PERIOD_DAYS",
                description: "Int",
              },
            },
            {
              name: "--maintenance-config-interim-release-upgrade-period-days",
              description:
                "Defines auto upgrade period for interim releases. This period must be shorter or equal to bundle release upgrade period",
              args: {
                name: "MAINTENANCE_CONFIG_INTERIM_RELEASE_UPGRADE_PERIOD_DAYS",
                description: "Int",
              },
            },
            {
              name: "--maintenance-config-is-interim-release-auto-upgrade-enabled",
              description:
                "By default auto upgrade for interim releases are not enabled. If auto-upgrade is enabled for interim release, you have to specify interim_release_upgrade_period_days too",
            },
            {
              name: "--maintenance-config-major-release-upgrade-period-days",
              description:
                "Defines auto upgrade period for major releases. Manually configured period cannot be longer than service defined period for major releases. Not passing this field during create will equate to using the service default",
              args: {
                name: "MAINTENANCE_CONFIG_MAJOR_RELEASE_UPGRADE_PERIOD_DAYS",
                description: "Int",
              },
            },
            {
              name: "--maintenance-config-security-patch-upgrade-period-days",
              description:
                "Defines auto upgrade period for releases with security fix. Manually configured period cannot be longer than service defined period for security releases. Not passing this field during create will equate to using the service default",
              args: {
                name: "MAINTENANCE_CONFIG_SECURITY_PATCH_UPGRADE_PERIOD_DAYS",
                description: "Int",
              },
            },
            {
              name: "--maintenance-window-day",
              description:
                "Days of the week. _MAINTENANCE_WINDOW_DAY_ must be one of:",
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
              name: "--maintenance-window-start-hour",
              description: "Start hour for maintenance period. Hour is in UTC",
              priority: 100,
              args: {
                name: "MAINTENANCE_WINDOW_START_HOUR",
                description: "Int",
              },
            },
            optNoAsync,
            {
              name: "--no-maintenance-config-is-interim-release-auto-upgrade-enabled",
              description:
                "By default auto upgrade for interim releases are not enabled. If auto-upgrade is enabled for interim release, you have to specify interim_release_upgrade_period_days too",
              hidden: true,
            },
            {
              name: "--no-properties-is-auto-scaling-enabled",
              description:
                "Indicates if auto scaling is enabled for the Deployment's CPU core count",
              hidden: true,
            },
            optOdbNetwork,
            optOdbSubnet,
            {
              name: "--ogg-data-admin-password",
              description:
                "The Goldengate deployment console password in plain text",
              args: {
                name: "OGG_DATA_ADMIN_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--ogg-data-admin-password-secret-version",
              description:
                "The Goldengate deployment console password secret version",
              args: {
                name: "OGG_DATA_ADMIN_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--ogg-data-admin-username",
              description: "The Goldengate deployment console username",
              priority: 100,
              args: {
                name: "OGG_DATA_ADMIN_USERNAME",
                description: "String",
              },
            },
            {
              name: "--ogg-data-deployment",
              description:
                "The name given to the Goldengate service deployment. The name must be 1 to 32 characters long, must contain only alphanumeric characters and must start with a letter",
              priority: 100,
              args: {
                name: "OGG_DATA_DEPLOYMENT",
                description: "String",
              },
            },
            {
              name: "--ogg-data-version",
              description: "Version of OGG",
              args: {
                name: "OGG_DATA_VERSION",
                description: "String",
              },
            },
            optProject,
            {
              name: "--properties-cpu-core-count",
              description:
                "The Minimum number of OCPUs to be made available for this Deployment",
              args: {
                name: "PROPERTIES_CPU_CORE_COUNT",
                description: "Int",
              },
            },
            {
              name: "--properties-deployment-type",
              description:
                "A valid Goldengate Deployment type. For a list of supported types, use the `ListGoldengateDeploymentTypes` operation",
              priority: 100,
              args: {
                name: "PROPERTIES_DEPLOYMENT_TYPE",
                description: "String",
              },
            },
            {
              name: "--properties-description",
              description: "The description of the GoldengateDeployment",
              args: {
                name: "PROPERTIES_DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--properties-environment-type",
              description: "The environment type of the GoldengateDeployment",
              args: {
                name: "PROPERTIES_ENVIRONMENT_TYPE",
                description: "String",
              },
            },
            {
              name: "--properties-is-auto-scaling-enabled",
              description:
                "Indicates if auto scaling is enabled for the Deployment's CPU core count",
            },
            {
              name: "--properties-license-model",
              description:
                "The Oracle license model that applies to a Deployment. _PROPERTIES_LICENSE_MODEL_ must be one of:",
              args: {
                name: "PROPERTIES_LICENSE_MODEL",
                suggestions: ["bring-your-own-license", "license-included"],
              },
            },
            optQuiet,
            optRequestId2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "GOLDENGATE_DEPLOYMENT",
            description:
              "ID of the goldengateDeployment or fully qualified identifier for the goldengateDeployment",
          },
        },
        {
          name: "delete",
          description:
            "Delete a GoldengateDeployment. This also deletes any associated Assignments",
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
            optLocation7,
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
            name: "GOLDENGATE_DEPLOYMENT",
            description:
              "ID of the goldengateDeployment or fully qualified identifier for the goldengateDeployment",
          },
        },
        {
          name: "describe",
          description: "Get details of a GoldengateDeployment",
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
            optLocation7,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "GOLDENGATE_DEPLOYMENT",
            description:
              "ID of the goldengateDeployment or fully qualified identifier for the goldengateDeployment",
          },
        },
        {
          name: "list",
          description: "List all GoldengateDeployments",
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
          name: "start",
          description: "Start a GoldengateDeployment",
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
            name: "GOLDENGATE_DEPLOYMENT",
            description:
              "ID of the goldengateDeployment or fully qualified identifier for the goldengateDeployment",
          },
        },
        {
          name: "stop",
          description: "Stop a GoldengateDeployment",
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
            name: "GOLDENGATE_DEPLOYMENT",
            description:
              "ID of the goldengateDeployment or fully qualified identifier for the goldengateDeployment",
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
      name: "odb-networks",
      description: "Manage Odb Network resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new OdbNetwork",
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
              name: "--gcp-oracle-zone",
              description:
                "The GCP Oracle zone where OdbNetwork is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability",
              args: {
                name: "GCP_ORACLE_ZONE",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLabels,
            optLocation8,
            optLogHttp,
            optNetwork,
            optNoAsync,
            optProject,
            optQuiet,
            optRequestId,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ODB_NETWORK",
            description:
              "ID of the odbNetwork or fully qualified identifier for the odbNetwork",
          },
        },
        {
          name: "delete",
          description: "Delete an OdbNetwork",
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
            optLocation8,
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
            name: "ODB_NETWORK",
            description:
              "ID of the odbNetwork or fully qualified identifier for the odbNetwork",
          },
        },
        {
          name: "describe",
          description: "Get details of an OdbNetwork",
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
            optLocation8,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ODB_NETWORK",
            description:
              "ID of the odbNetwork or fully qualified identifier for the odbNetwork",
          },
        },
        {
          name: "list",
          description: "List all OdbNetworks",
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
          name: "odb-subnets",
          description: "Manage Odb Subnet resources",
          subcommands: [
            {
              name: "create",
              description: "Create a new OdbSubnet",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                {
                  name: "--cidr-range",
                  description: "The CIDR range of the subnet",
                  priority: 100,
                  args: {
                    name: "CIDR_RANGE",
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
                optLabels,
                optLocation9,
                optLogHttp,
                optNoAsync,
                optOdbNetwork2,
                optProject,
                {
                  name: "--purpose",
                  description:
                    "Purpose of the subnet. _PURPOSE_ must be one of:",
                  priority: 100,
                  args: {
                    name: "PURPOSE",
                    suggestions: ["backup-subnet", "client-subnet"],
                  },
                },
                optQuiet,
                optRequestId,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "ODB_SUBNET",
                description:
                  "ID of the odbSubnet or fully qualified identifier for the odbSubnet",
              },
            },
            {
              name: "delete",
              description: "Delete an OdbSubnet",
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
                optLocation9,
                optLogHttp,
                optNoAsync,
                optOdbNetwork2,
                optProject,
                optQuiet,
                optRequestId,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "ODB_SUBNET",
                description:
                  "ID of the odbSubnet or fully qualified identifier for the odbSubnet",
              },
            },
            {
              name: "describe",
              description: "Get details of an OdbSubnet",
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
                optLocation9,
                optLogHttp,
                optOdbNetwork2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "ODB_SUBNET",
                description:
                  "ID of the odbSubnet or fully qualified identifier for the odbSubnet",
              },
            },
            {
              name: "list",
              description: "List all OdbSubnets",
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
                optLocation8,
                optLogHttp,
                optNoUri,
                {
                  name: "--odb-network",
                  description:
                    "ID of the odbNetwork or fully qualified identifier for the odbNetwork",
                  priority: 100,
                  args: {
                    name: "ODB_NETWORK",
                    description: "String",
                  },
                },
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
    },
    {
      name: "operations",
      description: "Manage Operation resources",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel operations",
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
            optLocation10,
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
          description: "Delete operations",
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
            optLocation10,
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
          description: "Describe operations",
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
            optLocation10,
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
          description: "List operations",
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
          name: "wait",
          description: "Wait operations",
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
            optLocation10,
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
      name: "pluggable-databases",
      description: "Manage Pluggable Database resources",
      subcommands: [
        {
          name: "describe",
          description: "Get details of a PluggableDatabase",
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
              description: "The location id of the pluggableDatabase resource",
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
            name: "PLUGGABLE_DATABASE",
            description:
              "ID of the pluggableDatabase or fully qualified identifier for the pluggableDatabase",
          },
        },
        {
          name: "list",
          description: "List pluggable databases",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--filter",
              description:
                "Apply a filter in the format: --filter='database=\"projects/my-project/locations/us-east4/databases/my-instance\"'",
              args: {
                name: "EXPRESSION",
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
