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

const optAllocatedIpRangeName: Fig.Option = {
  name: "--allocated-ip-range-name",
  description:
    'Name of the allocated IP range for the private IP AlloyDB cluster, for example: "google-managed-services-default". If set, the instance IPs for this cluster will be created in the allocated range. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?`',
  args: {
    name: "ALLOCATED_IP_RANGE_NAME",
    description: "String",
  },
};

const optAllowedPscProjects: Fig.Option = {
  name: "--allowed-psc-projects",
  description:
    "Comma-separated list of allowed consumer projects to create endpoints for Private Service Connect (PSC) connectivity for the instance. Only instances in PSC-enabled clusters are allowed to set this field.(e.g., `--allowed-psc-projects=project1,12345678,project2)",
  args: {
    name: "ALLOWED_PSC_PROJECTS",
    description: "List",
  },
};

const optAssignInboundPublicIp: Fig.Option = {
  name: "--assign-inbound-public-ip",
  description:
    "Specify to enable or disable public IP on an instance. ASSIGN_INBOUND_PUBLIC_IP must be one of: * *NO_PUBLIC_IP* ** This disables public IP on the instance. Updating an instance to disable public IP will clear the list of authorized networks. * *ASSIGN_IPV4* ** Assign an inbound public IPv4 address for the instance. Public IP is enabled",
  args: {
    name: "ASSIGN_INBOUND_PUBLIC_IP",
    description: "String",
  },
};

const optAsync: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to complete",
};

const optAuthorizedExternalNetworks: Fig.Option = {
  name: "--authorized-external-networks",
  description:
    "Comma-separated list of authorized external networks to set on the instance. Authorized networks should use CIDR notation (e.g. 1.2.3.4/30). This flag is only allowed to be set for instances with public IP enabled",
  args: {
    name: "AUTHORIZED_NETWORK",
    description: "List",
  },
};

const optAutomatedBackupEncryptionKey: Fig.Option = {
  name: "--automated-backup-encryption-key",
  description: "ID of the key or fully qualified identifier for the key",
  priority: 100,
  args: {
    name: "AUTOMATED_BACKUP_ENCRYPTION_KEY",
    description: "String",
  },
};

const optAutomatedBackupEncryptionKeyKeyring: Fig.Option = {
  name: "--automated-backup-encryption-key-keyring",
  description: "The KMS keyring of the key",
  args: {
    name: "AUTOMATED_BACKUP_ENCRYPTION_KEY_KEYRING",
    description: "String",
  },
};

const optAutomatedBackupEncryptionKeyLocation: Fig.Option = {
  name: "--automated-backup-encryption-key-location",
  description: "The Google Cloud location for the key",
  args: {
    name: "AUTOMATED_BACKUP_ENCRYPTION_KEY_LOCATION",
    description: "String",
  },
};

const optAutomatedBackupEncryptionKeyProject: Fig.Option = {
  name: "--automated-backup-encryption-key-project",
  description: "The Google Cloud project for the key",
  args: {
    name: "AUTOMATED_BACKUP_ENCRYPTION_KEY_PROJECT",
    description: "String",
  },
};

const optAutomatedBackupRetentionCount: Fig.Option = {
  name: "--automated-backup-retention-count",
  description: "Number of most recent successful backups retained",
  args: {
    name: "RETENTION_COUNT",
    description: "Int",
  },
};

const optAutomatedBackupRetentionPeriod: Fig.Option = {
  name: "--automated-backup-retention-period",
  description:
    "Retention period of the backup relative to creation time. See `$ gcloud topic datetimes` for information on duration formats",
  args: {
    name: "RETENTION_PERIOD",
  },
};

const optAutomatedBackupWindow: Fig.Option = {
  name: "--automated-backup-window",
  description:
    "Length of the time window beginning at start time during which a backup can be taken. If a backup does not succeed within this time window, it will be canceled and considered failed. The backup window must be at least 5 minutes long. There is no upper bound on the window. If not set, it will default to 1 hour",
  args: {
    name: "TIMEOUT_PERIOD",
  },
};

const optAvailabilityType: Fig.Option = {
  name: "--availability-type",
  description:
    "Specifies level of availability. _AVAILABILITY_TYPE_ must be one of:",
  args: {
    name: "AVAILABILITY_TYPE",
    description: "String",
    suggestions: ["REGIONAL", "ZONAL"],
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

const optCluster: Fig.Option = {
  name: "--cluster",
  description: "AlloyDB cluster ID",
  priority: 100,
  args: {
    name: "CLUSTER",
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

const optConnectionPoolingClientConnectionIdleTimeout: Fig.Option = {
  name: "--connection-pooling-client-connection-idle-timeout",
  description:
    "The maximum number of seconds a client is allowed to be idle before it is disconnected",
  args: {
    name: "CONNECTION_POOLING_CLIENT_CONNECTION_IDLE_TIMEOUT",
    description: "String",
  },
};

const optConnectionPoolingIgnoreStartupParameters: Fig.Option = {
  name: "--connection-pooling-ignore-startup-parameters",
  description:
    "Comma-separated list of startup parameters that should be ignored by the connection pool",
  args: {
    name: "STARTUP_PARAMETERS",
    description: "List",
  },
};

const optConnectionPoolingMaxClientConnections: Fig.Option = {
  name: "--connection-pooling-max-client-connections",
  description: "The max client connections for managed connection pooling",
  args: {
    name: "CONNECTION_POOLING_MAX_CLIENT_CONNECTIONS",
    description: "String",
  },
};

const optConnectionPoolingMaxPoolSize: Fig.Option = {
  name: "--connection-pooling-max-pool-size",
  description: "The max pool size for managed connection pooling",
  args: {
    name: "CONNECTION_POOLING_MAX_POOL_SIZE",
    description: "String",
  },
};

const optConnectionPoolingMaxPreparedStatements: Fig.Option = {
  name: "--connection-pooling-max-prepared-statements",
  description: "The maximum number of prepared statements allowed",
  args: {
    name: "CONNECTION_POOLING_MAX_PREPARED_STATEMENTS",
  },
};

const optConnectionPoolingMinPoolSize: Fig.Option = {
  name: "--connection-pooling-min-pool-size",
  description: "The min pool size for managed connection pooling",
  args: {
    name: "CONNECTION_POOLING_MIN_POOL_SIZE",
    description: "String",
  },
};

const optConnectionPoolingPoolMode: Fig.Option = {
  name: "--connection-pooling-pool-mode",
  description:
    "The pool mode for managed connection pooling. _CONNECTION_POOLING_POOL_MODE_ must be one of:",
  args: {
    name: "CONNECTION_POOLING_POOL_MODE",
    description: "String",
    suggestions: ["SESSION", "TRANSACTION"],
  },
};

const optConnectionPoolingQueryWaitTimeout: Fig.Option = {
  name: "--connection-pooling-query-wait-timeout",
  description: "The query wait timeout for managed connection pooling",
  args: {
    name: "CONNECTION_POOLING_QUERY_WAIT_TIMEOUT",
    description: "String",
  },
};

const optConnectionPoolingServerIdleTimeout: Fig.Option = {
  name: "--connection-pooling-server-idle-timeout",
  description: "The server idle timeout for managed connection pooling",
  args: {
    name: "CONNECTION_POOLING_SERVER_IDLE_TIMEOUT",
    description: "String",
  },
};

const optConnectionPoolingServerLifetime: Fig.Option = {
  name: "--connection-pooling-server-lifetime",
  description:
    "The lifetime of a server connection in seconds. The pooler will close an unused (not currently linked to any client connection) server connection that has been connected longer than this. Setting it to 0 means the connection is to be used only once, then closed",
  args: {
    name: "CONNECTION_POOLING_SERVER_LIFETIME",
    description: "String",
  },
};

const optConnectionPoolingStatsUsers: Fig.Option = {
  name: "--connection-pooling-stats-users",
  description:
    "Comma-separated list of database users to access connection pooling stats",
  args: {
    name: "STATS_USERS",
    description: "List",
  },
};

const optContinuousBackupEncryptionKey: Fig.Option = {
  name: "--continuous-backup-encryption-key",
  description: "ID of the key or fully qualified identifier for the key",
  priority: 100,
  args: {
    name: "CONTINUOUS_BACKUP_ENCRYPTION_KEY",
    description: "String",
  },
};

const optContinuousBackupEncryptionKeyKeyring: Fig.Option = {
  name: "--continuous-backup-encryption-key-keyring",
  description: "The KMS keyring of the key",
  args: {
    name: "CONTINUOUS_BACKUP_ENCRYPTION_KEY_KEYRING",
    description: "String",
  },
};

const optContinuousBackupEncryptionKeyLocation: Fig.Option = {
  name: "--continuous-backup-encryption-key-location",
  description: "The Google Cloud location for the key",
  args: {
    name: "CONTINUOUS_BACKUP_ENCRYPTION_KEY_LOCATION",
    description: "String",
  },
};

const optContinuousBackupEncryptionKeyProject: Fig.Option = {
  name: "--continuous-backup-encryption-key-project",
  description: "The Google Cloud project for the key",
  args: {
    name: "CONTINUOUS_BACKUP_ENCRYPTION_KEY_PROJECT",
    description: "String",
  },
};

const optContinuousBackupRecoveryWindowDays: Fig.Option = {
  name: "--continuous-backup-recovery-window-days",
  description:
    "Recovery window of the log files and backups saved to support Continuous Backups",
  args: {
    name: "RECOVERY_PERIOD",
    description: "Int",
  },
};

const optDatabaseFlags: Fig.Option = {
  name: "--database-flags",
  description:
    "Comma-separated list of database flags to set on the instance. Use an equals sign to separate flag name and value. Flags without values, like skip_grant_tables, can be written out without a value after, e.g., `skip_grant_tables=`. Use on/off for booleans. View the Instance Resource API for allowed flags. (e.g., `--database-flags max_allowed_packet=55555,skip_grant_tables=,log_output=1`)",
  args: {
    name: "FLAG=VALUE",
    description: "Dict",
  },
};

const optDenyMaintenancePeriodEndDate: Fig.Option = {
  name: "--deny-maintenance-period-end-date",
  description:
    "Date when the deny maintenance period ends, that is 2020-11-01 or 11-01 for recurring",
  priority: 100,
  args: {
    name: "DENY_MAINTENANCE_PERIOD_END_DATE",
  },
};

const optDenyMaintenancePeriodStartDate: Fig.Option = {
  name: "--deny-maintenance-period-start-date",
  description:
    "Date when the deny maintenance period begins, that is 2020-11-01 or 11-01 for recurring",
  priority: 100,
  args: {
    name: "DENY_MAINTENANCE_PERIOD_START_DATE",
  },
};

const optDenyMaintenancePeriodTime: Fig.Option = {
  name: "--deny-maintenance-period-time",
  description:
    "Time when the deny maintenance period starts and ends, for example 05:00, in UTC time zone",
  priority: 100,
  args: {
    name: "DENY_MAINTENANCE_PERIOD_TIME",
  },
};

const optDisableAutomatedBackup: Fig.Option = {
  name: "--disable-automated-backup",
  description: "Disables automated backups on the cluster",
};

const optEnableConnectionPooling: Fig.Option = {
  name: "--enable-connection-pooling",
  description:
    "Enable connection pooling for the instance. Use *--enable-connection-pooling* to enable and *--no-enable-connection-pooling* to disable",
};

const optEnableContinuousBackup: Fig.Option = {
  name: "--enable-continuous-backup",
  description: "Enables Continuous Backups on the cluster",
};

const optEnableDataplexIntegration: Fig.Option = {
  name: "--enable-dataplex-integration",
  description:
    "Enable or disable Dataplex integration for this cluster (Enabled by default). Use *--enable-dataplex-integration* to enable and *--no-enable-dataplex-integration* to disable",
};

const optEnablePrivateServiceConnect: Fig.Option = {
  name: "--enable-private-service-connect",
  description:
    "Enable Private Service Connect (PSC) connectivity for the cluster",
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
  description: "The KMS keyring of the key",
  args: {
    name: "KMS_KEYRING",
    description: "String",
  },
};

const optKmsLocation: Fig.Option = {
  name: "--kms-location",
  description: "The Google Cloud location for the key",
  args: {
    name: "KMS_LOCATION",
    description: "String",
  },
};

const optKmsProject: Fig.Option = {
  name: "--kms-project",
  description: "The Google Cloud project for the key",
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

const optMaintenanceWindowDay: Fig.Option = {
  name: "--maintenance-window-day",
  description:
    "Day of week for maintenance window, in UTC time zone. _MAINTENANCE_WINDOW_DAY_ must be one of: *MONDAY*, *TUESDAY*, *WEDNESDAY*, *THURSDAY*, *FRIDAY*, *SATURDAY*, *SUNDAY*",
  priority: 100,
  args: {
    name: "MAINTENANCE_WINDOW_DAY",
    suggestions: [
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
      "SUNDAY",
    ],
  },
};

const optMaintenanceWindowHour: Fig.Option = {
  name: "--maintenance-window-hour",
  description: "Hour of day for maintenance window, in UTC time zone",
  priority: 100,
  args: {
    name: "MAINTENANCE_WINDOW_HOUR",
  },
};

const optNetwork: Fig.Option = {
  name: "--network",
  description:
    "Network in the current project that the instance will be part of. To specify using a network with a shared VPC, use the full URL of the network. For an example host project, `testproject`, and shared network, `testsharednetwork`, this would be of the form:`--network=projects/testproject/global/networks/testsharednetwork`",
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

const optNoDisableAutomatedBackup: Fig.Option = {
  name: "--no-disable-automated-backup",
  description: "Disables automated backups on the cluster",
  hidden: true,
};

const optNoEnableConnectionPooling: Fig.Option = {
  name: "--no-enable-connection-pooling",
  description: "Enable connection pooling for the instance",
};

const optNoEnableContinuousBackup: Fig.Option = {
  name: "--no-enable-continuous-backup",
  description: "Enables Continuous Backups on the cluster",
  hidden: true,
};

const optNoEnableDataplexIntegration: Fig.Option = {
  name: "--no-enable-dataplex-integration",
  description:
    "Enable or disable Dataplex integration for this cluster (Enabled by default)",
};

const optNoEnablePrivateServiceConnect: Fig.Option = {
  name: "--no-enable-private-service-connect",
  description:
    "Enable Private Service Connect (PSC) connectivity for the cluster",
  hidden: true,
};

const optNoOutboundPublicIp: Fig.Option = {
  name: "--no-outbound-public-ip",
  description: "Add outbound Public IP connectivity to an AlloyDB instance",
};

const optNoRequireConnectors: Fig.Option = {
  name: "--no-require-connectors",
  description:
    "Enable or disable enforcing connectors only (ex: AuthProxy) connections to the database",
};

const optNoUri: Fig.Option = {
  name: "--no-uri",
  description:
    "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
  hidden: true,
};

const optOutboundPublicIp: Fig.Option = {
  name: "--outbound-public-ip",
  description:
    "Add outbound Public IP connectivity to an AlloyDB instance. Use *--outbound-public-ip* to enable and *--no-outbound-public-ip* to disable",
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

const optPscAutoConnections: Fig.Option = {
  name: "--psc-auto-connections",
  description:
    "Comma-separated list of consumer project and consumer network pairs to create endpoints for Private Service Connect (PSC) connectivity for the instance. Only instances in PSC-enabled clusters are allowed to set this field. Both project and network must be specified. (e.g., `--psc-auto-connections=project=project1,network=projects/vpc-host-project1/global/networks/network1` `--psc-auto-connections=project=project2,network=projects/vpc-host-project2/global/networks/network2`). Sets `psc_auto_connections` value",
  args: {
    name: "PSC_AUTO_CONNECTIONS",
    description: "Dict",
  },
};

const optPscNetworkAttachmentUri: Fig.Option = {
  name: "--psc-network-attachment-uri",
  description:
    "Full URI of the network attachment that is configured to support outbound connectivity from an AlloyDB instance which uses Private Service Connect (PSC). For example, this would be of the form:`psc-network-attachment-uri=projects/test-project/regions/us-central1/networkAttachments/my-na`",
  args: {
    name: "PSC_NETWORK_ATTACHMENT_URI",
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
    "Regional location (e.g. `asia-east1`, `us-east1`). See the full list of regions at https://cloud.google.com/sql/docs/instance-locations",
  priority: 100,
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRequireConnectors: Fig.Option = {
  name: "--require-connectors",
  description:
    "Enable or disable enforcing connectors only (ex: AuthProxy) connections to the database. Use *--require-connectors* to enable and *--no-require-connectors* to disable",
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

const optSubscriptionType: Fig.Option = {
  name: "--subscription-type",
  description:
    "Subscription type of the cluster. _SUBSCRIPTION_TYPE_ must be one of: *STANDARD*, *TRIAL*",
  args: {
    name: "SUBSCRIPTION_TYPE",
    suggestions: ["STANDARD", "TRIAL"],
  },
};

const optTags: Fig.Option = {
  name: "--tags",
  description:
    "List of tags KEY=VALUE pairs to bind. Each item must be expressed as `<tag-key-namespaced-name>=<tag-value-short-name>`",
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
  name: "alloydb",
  description: "Create and manage AlloyDB databases",
  subcommands: [
    {
      name: "backups",
      description: "Provide commands for managing AlloyDB backups",
      subcommands: [
        {
          name: "create",
          description: "Creates a new AlloyDB backup within a given project",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optCluster,
            optConfiguration,
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
            optKmsLocation,
            optKmsProject,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--region",
              description: "The region of the cluster to backup",
              priority: 100,
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optTags,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP",
            description:
              "The AlloyDB backup to create. This must either be the backup ID (myBackup) or the full backup path (projects/myProject/locations/us-central1/backups/myBackup). In the first case, the project and location are assumed to be the same as the cluster being backed up. The second form can be used to create cross-region and cross-project backups",
          },
        },
        {
          name: "delete",
          description: "Deletes an AlloyDB backup within a given project",
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
            name: "BACKUP",
            description: "AlloyDB backup ID",
          },
        },
        {
          name: "describe",
          description:
            "Describes an AlloyDB backup in a given project and region",
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
            name: "BACKUP",
            description: "AlloyDB backup ID",
          },
        },
        {
          name: "list",
          description: "Lists AlloyDB backups in a given project",
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
                "Regional location (e.g. asia-east1, us-east1). See the full list of regions at https://cloud.google.com/sql/docs/instance-locations. Default: list clusters in all regions",
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
      name: "clusters",
      description: "Provide commands for managing AlloyDB clusters",
      subcommands: [
        {
          name: "create",
          description: "Create a new AlloyDB cluster within a given project",
          options: [
            optAccessTokenFile,
            optAccount,
            optAllocatedIpRangeName,
            optAsync,
            {
              name: "--automated-backup-days-of-week",
              description:
                "Comma-separated list of days of the week to perform a backup. At least one day of the week must be provided. (e.g., --automated-backup-days-of-week=MONDAY,WEDNESDAY,SUNDAY). _DAYS_OF_WEEK_ must be one of: *MONDAY*, *TUESDAY*, *WEDNESDAY*, *THURSDAY*, *FRIDAY*, *SATURDAY*, *SUNDAY*",
              priority: 100,
              args: {
                name: "DAYS_OF_WEEK",
                description: "List",
              },
            },
            optAutomatedBackupEncryptionKey,
            optAutomatedBackupEncryptionKeyKeyring,
            optAutomatedBackupEncryptionKeyLocation,
            optAutomatedBackupEncryptionKeyProject,
            optAutomatedBackupRetentionCount,
            optAutomatedBackupRetentionPeriod,
            {
              name: "--automated-backup-start-times",
              description:
                "Comma-separated list of times during the day to start a backup. At least one start time must be provided. The start times are assumed to be in UTC and required to be an exact hour in the format HH:00. (e.g., `--automated-backup-start-times=01:00,13:00`)",
              priority: 100,
              args: {
                name: "START_TIMES",
                description: "List",
              },
            },
            optAutomatedBackupWindow,
            {
              name: "--backupdr-backup-plan",
              description:
                "The resource name of the BackupDR backup plan to associate with the cluster. The format should be projects/{project}/locations/{location}/backupPlans/{backupPlanId}. This flag cannot be used with the --async flag",
              args: {
                name: "BACKUPDR_BACKUP_PLAN",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            optContinuousBackupEncryptionKey,
            optContinuousBackupEncryptionKeyKeyring,
            optContinuousBackupEncryptionKeyLocation,
            optContinuousBackupEncryptionKeyProject,
            optContinuousBackupRecoveryWindowDays,
            {
              name: "--database-version",
              description:
                "Database version of the cluster. _DATABASE_VERSION_ must be one of: *POSTGRES_14*, *POSTGRES_15*, *POSTGRES_16*, *POSTGRES_17*, *POSTGRES_18*",
              args: {
                name: "DATABASE_VERSION",
                suggestions: [
                  "POSTGRES_14",
                  "POSTGRES_15",
                  "POSTGRES_16",
                  "POSTGRES_17",
                  "POSTGRES_18",
                ],
              },
            },
            optDenyMaintenancePeriodEndDate,
            optDenyMaintenancePeriodStartDate,
            optDenyMaintenancePeriodTime,
            optDisableAutomatedBackup,
            optEnableContinuousBackup,
            optEnableDataplexIntegration,
            optEnablePrivateServiceConnect,
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
            optKmsLocation,
            optKmsProject,
            optLogHttp,
            optMaintenanceWindowDay,
            optMaintenanceWindowHour,
            optNetwork,
            optNoAsync,
            optNoDisableAutomatedBackup,
            optNoEnableContinuousBackup,
            optNoEnableDataplexIntegration,
            optNoEnablePrivateServiceConnect,
            {
              name: "--password",
              description:
                "Initial postgres user password to set up during cluster creation",
              priority: 100,
              args: {
                name: "PASSWORD",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optRegion,
            optSubscriptionType,
            optTags,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLUSTER",
            description: "AlloyDB cluster ID",
          },
        },
        {
          name: "create-secondary",
          description:
            "Create a new AlloyDB SECONDARY cluster within a given project",
          options: [
            optAccessTokenFile,
            optAccount,
            optAllocatedIpRangeName,
            optAsync,
            {
              name: "--automated-backup-days-of-week",
              description:
                "Comma-separated list of days of the week to perform a backup. At least one day of the week must be provided. (e.g., --automated-backup-days-of-week=MONDAY,WEDNESDAY,SUNDAY). _DAYS_OF_WEEK_ must be one of: *MONDAY*, *TUESDAY*, *WEDNESDAY*, *THURSDAY*, *FRIDAY*, *SATURDAY*, *SUNDAY*",
              args: {
                name: "DAYS_OF_WEEK",
                description: "List",
              },
            },
            optAutomatedBackupEncryptionKey,
            optAutomatedBackupEncryptionKeyKeyring,
            optAutomatedBackupEncryptionKeyLocation,
            optAutomatedBackupEncryptionKeyProject,
            optAutomatedBackupRetentionCount,
            optAutomatedBackupRetentionPeriod,
            {
              name: "--automated-backup-start-times",
              description:
                "Comma-separated list of times during the day to start a backup. At least one start time must be provided. The start times are assumed to be in UTC and required to be an exact hour in the format HH:00. (e.g., `--automated-backup-start-times=01:00,13:00`)",
              args: {
                name: "START_TIMES",
                description: "List",
              },
            },
            {
              name: "--automated-backup-window",
              description:
                "The length of the time window beginning at start time during which a backup can be taken. If a backup does not succeed within this time window, it will be canceled and considered failed. The backup window must be at least 5 minutes long. There is no upper bound on the window. If not set, it will default to 1 hour",
              args: {
                name: "TIMEOUT_PERIOD",
              },
            },
            optBillingProject,
            optConfiguration,
            optContinuousBackupEncryptionKey,
            optContinuousBackupEncryptionKeyKeyring,
            optContinuousBackupEncryptionKeyLocation,
            optContinuousBackupEncryptionKeyProject,
            optContinuousBackupRecoveryWindowDays,
            {
              name: "--enable-automated-backup",
              description: "Enables Automated Backups on the cluster",
            },
            optEnableContinuousBackup,
            optEnableDataplexIntegration,
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
            optKmsLocation,
            optKmsProject,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-enable-automated-backup",
              description: "Enables Automated Backups on the cluster",
              hidden: true,
            },
            optNoEnableContinuousBackup,
            optNoEnableDataplexIntegration,
            {
              name: "--primary-cluster",
              description: "AlloyDB primary cluster ID",
              priority: 100,
              args: {
                name: "PRIMARY_CLUSTER",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optRegion,
            optTags,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLUSTER",
            description: "AlloyDB cluster ID",
          },
        },
        {
          name: "delete",
          description: "Delete an AlloyDB cluster in a given region",
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
              description: "Default value is false",
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
              description: "Default value is false",
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
            name: "CLUSTER",
            description: "AlloyDB cluster ID",
          },
        },
        {
          name: "describe",
          description:
            "Describe an AlloyDB cluster in a given project and region",
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
            name: "CLUSTER",
            description: "AlloyDB cluster ID",
          },
        },
        {
          name: "export",
          description:
            "Export data from an AlloyDB cluster to Google Cloud Storage",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--clean-target-objects",
              description:
                "If true, output commands to DROP all the dumped database objects prior to outputting the commands for creating them",
              priority: 100,
            },
            optConfiguration,
            {
              name: "--csv",
              description: "Specifies destination file type",
              priority: 100,
            },
            {
              name: "--database",
              description: "Database name",
              priority: 100,
              args: {
                name: "DATABASE",
                description: "String",
              },
            },
            {
              name: "--escape-character",
              description: "Escape character to be used for export",
              args: {
                name: "ESCAPE_CHARACTER",
                description: "String",
              },
            },
            {
              name: "--field-delimiter",
              description: "Field delimiter to be used for export",
              args: {
                name: "FIELD_DELIMITER",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gcs-uri",
              description:
                "Path to the Google Cloud Storage file to which export has to be done",
              args: {
                name: "GCS_URI",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--if-exist-target-objects",
              description:
                "If true, use DROP ... IF EXISTS commands to check for the object's existence before dropping it in clean_target_objects mode",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-clean-target-objects",
              description:
                "If true, output commands to DROP all the dumped database objects prior to outputting the commands for creating them",
              hidden: true,
              priority: 100,
            },
            {
              name: "--no-csv",
              description: "Specifies destination file type",
              hidden: true,
              priority: 100,
            },
            {
              name: "--no-if-exist-target-objects",
              description:
                "If true, use DROP ... IF EXISTS commands to check for the object's existence before dropping it in clean_target_objects mode",
              hidden: true,
            },
            {
              name: "--no-schema-only",
              description: "Export only schema of the database",
              hidden: true,
            },
            {
              name: "--no-sql",
              description: "Specifies destination file type",
              hidden: true,
              priority: 100,
            },
            optProject,
            optQuiet,
            {
              name: "--quote-character",
              description: "Quote character to be used for export",
              args: {
                name: "QUOTE_CHARACTER",
                description: "String",
              },
            },
            optRegion,
            {
              name: "--schema-only",
              description: "Export only schema of the database",
            },
            {
              name: "--select-query",
              description: "Select query to be used for export",
              priority: 100,
              args: {
                name: "SELECT_QUERY",
                description: "String",
              },
            },
            {
              name: "--sql",
              description: "Specifies destination file type",
              priority: 100,
            },
            {
              name: "--tables",
              description:
                "Comma-separated list of table names which need to be exported",
              args: {
                name: "TABLES",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLUSTER",
            description: "AlloyDB cluster ID",
          },
        },
        {
          name: "import",
          description:
            "Import data into an AlloyDB cluster from Google Cloud Storage",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--columns",
              description:
                "Comma-separated list of column names to be used for import",
              args: {
                name: "COLUMNS",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--csv",
              description: "Specify source file type",
              priority: 100,
            },
            {
              name: "--database",
              description: "Database name",
              args: {
                name: "DATABASE",
                description: "String",
              },
            },
            {
              name: "--escape-character",
              description: "Escape character in the source file",
              args: {
                name: "ESCAPE_CHARACTER",
                description: "String",
              },
            },
            {
              name: "--field-delimiter",
              description: "Field delimiter in the source file",
              args: {
                name: "FIELD_DELIMITER",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gcs-uri",
              description:
                "Path to the Google Cloud Storage file from which import has to be done",
              args: {
                name: "GCS_URI",
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
            {
              name: "--no-csv",
              description: "Specify source file type",
              hidden: true,
              priority: 100,
            },
            {
              name: "--no-sql",
              description: "Specify source file type",
              hidden: true,
              priority: 100,
            },
            optProject,
            optQuiet,
            {
              name: "--quote-character",
              description: "Quote character in the source file",
              args: {
                name: "QUOTE_CHARACTER",
                description: "String",
              },
            },
            optRegion,
            {
              name: "--sql",
              description: "Specify source file type",
              priority: 100,
            },
            {
              name: "--table",
              description: "Table name to which the data has to be imported",
              priority: 100,
              args: {
                name: "TABLE",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--user",
              description: "Database user for the import",
              args: {
                name: "USER",
                description: "String",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLUSTER",
            description: "AlloyDB cluster ID",
          },
        },
        {
          name: "list",
          description: "List AlloyDB clusters in a given project and region",
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
                "Regional location (e.g. asia-east1, us-east1). See the full list of regions at https://cloud.google.com/sql/docs/instance-locations. Default: list clusters in all regions",
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
          name: "migrate-cloud-sql",
          description:
            "Migrate Cloud SQL instance to an AlloyDB cluster using an existing Cloud SQL backup",
          options: [
            optAccessTokenFile,
            optAccount,
            optAllocatedIpRangeName,
            optAsync,
            {
              name: "--automated-backup-days-of-week",
              description:
                "Comma-separated list of days of the week to perform a backup. At least one day of the week must be provided. (e.g., --automated-backup-days-of-week=MONDAY,WEDNESDAY,SUNDAY). _DAYS_OF_WEEK_ must be one of: *MONDAY*, *TUESDAY*, *WEDNESDAY*, *THURSDAY*, *FRIDAY*, *SATURDAY*, *SUNDAY*",
              priority: 100,
              args: {
                name: "DAYS_OF_WEEK",
                description: "List",
              },
            },
            optAutomatedBackupEncryptionKey,
            optAutomatedBackupEncryptionKeyKeyring,
            optAutomatedBackupEncryptionKeyLocation,
            optAutomatedBackupEncryptionKeyProject,
            optAutomatedBackupRetentionCount,
            optAutomatedBackupRetentionPeriod,
            {
              name: "--automated-backup-start-times",
              description:
                "Comma-separated list of times during the day to start a backup. At least one start time must be provided. The start times are assumed to be in UTC and required to be an exact hour in the format HH:00. (e.g., `--automated-backup-start-times=01:00,13:00`)",
              priority: 100,
              args: {
                name: "START_TIMES",
                description: "List",
              },
            },
            optAutomatedBackupWindow,
            optBillingProject,
            {
              name: "--cloud-sql-backup-id",
              description:
                "CloudSQL backup ID to migrate from. This must be the backup ID (myBackup)",
              priority: 100,
              args: {
                name: "CLOUD_SQL_BACKUP_ID",
                description: "Int",
              },
            },
            {
              name: "--cloud-sql-instance-id",
              description:
                "CloudSQL instance ID to migrate from. This must be the instance ID (myInstance)",
              priority: 100,
              args: {
                name: "CLOUD_SQL_INSTANCE_ID",
                description: "String",
              },
            },
            {
              name: "--cloud-sql-project-id",
              description:
                "CloudSQL project to migrate from. This must be the project ID (myProject)",
              priority: 100,
              args: {
                name: "CLOUD_SQL_PROJECT_ID",
                description: "String",
              },
            },
            optConfiguration,
            optContinuousBackupEncryptionKey,
            optContinuousBackupEncryptionKeyKeyring,
            optContinuousBackupEncryptionKeyLocation,
            optContinuousBackupEncryptionKeyProject,
            optContinuousBackupRecoveryWindowDays,
            {
              name: "--database-version",
              description:
                "Database version of the cluster. _DATABASE_VERSION_ must be one of: *POSTGRES_14*, *POSTGRES_15*, *POSTGRES_16*, *POSTGRES_17*, *POSTGRES_18*",
              args: {
                name: "DATABASE_VERSION",
                suggestions: [
                  "POSTGRES_14",
                  "POSTGRES_15",
                  "POSTGRES_16",
                  "POSTGRES_17",
                  "POSTGRES_18",
                ],
              },
            },
            optDenyMaintenancePeriodEndDate,
            optDenyMaintenancePeriodStartDate,
            optDenyMaintenancePeriodTime,
            optDisableAutomatedBackup,
            optEnableContinuousBackup,
            optEnableDataplexIntegration,
            optEnablePrivateServiceConnect,
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
            optKmsLocation,
            optKmsProject,
            optLogHttp,
            optMaintenanceWindowDay,
            optMaintenanceWindowHour,
            optNetwork,
            optNoAsync,
            optNoDisableAutomatedBackup,
            optNoEnableContinuousBackup,
            optNoEnableDataplexIntegration,
            optNoEnablePrivateServiceConnect,
            {
              name: "--password",
              description:
                "Initial postgres user password to set up during cluster creation",
              priority: 100,
              args: {
                name: "PASSWORD",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optRegion,
            optSubscriptionType,
            optTags,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLUSTER",
            description: "AlloyDB cluster ID",
          },
        },
        {
          name: "promote",
          description:
            "Promote an AlloyDB SECONDARY cluster in a given project and region",
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
            name: "CLUSTER",
            description: "AlloyDB cluster ID",
          },
        },
        {
          name: "restore",
          description:
            "Restore an AlloyDB cluster from a given backup or a source cluster and a timestamp",
          options: [
            optAccessTokenFile,
            optAccount,
            optAllocatedIpRangeName,
            optAsync,
            {
              name: "--backup",
              description:
                "AlloyDB backup to restore from. This must either be the full backup name (projects/myProject/locations/us-central1/backups/myBackup) or the backup ID (myBackup). In the second case, the project and location are assumed to be the same as the restored cluster that is being created",
              args: {
                name: "BACKUP",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            optEnableDataplexIntegration,
            optEnablePrivateServiceConnect,
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
            optKmsLocation,
            optKmsProject,
            optLogHttp,
            optNetwork,
            optNoAsync,
            optNoEnableDataplexIntegration,
            optNoEnablePrivateServiceConnect,
            {
              name: "--point-in-time",
              description:
                "Point in time to restore to, in RFC 3339 format. For example, 2012-11-15T16:19:00.094Z",
              priority: 100,
              args: {
                name: "POINT_IN_TIME",
              },
            },
            optProject,
            optQuiet,
            optRegion,
            {
              name: "--source-cluster",
              description:
                "AlloyDB source cluster to restore from. This must either be the full cluster name (projects/myProject/locations/us-central1/backups/myCluster) or the cluster ID (myCluster). In the second case, the project and location are assumed to be the same as the restored cluster that is being created",
              args: {
                name: "SOURCE_CLUSTER",
                description: "String",
              },
            },
            optTags,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLUSTER",
            description: "AlloyDB cluster ID",
          },
        },
        {
          name: "switchover",
          description:
            "Switchover an AlloyDB SECONDARY cluster in a given project and region",
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
            name: "CLUSTER",
            description: "AlloyDB cluster ID",
          },
        },
        {
          name: "update",
          description:
            "Update an AlloyDB cluster within a given project and region",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--automated-backup-days-of-week",
              description:
                "Comma-separated list of days of the week to perform a backup. At least one day of the week must be provided. (e.g., --automated-backup-days-of-week=MONDAY,WEDNESDAY,SUNDAY). _DAYS_OF_WEEK_ must be one of: *MONDAY*, *TUESDAY*, *WEDNESDAY*, *THURSDAY*, *FRIDAY*, *SATURDAY*, *SUNDAY*",
              args: {
                name: "DAYS_OF_WEEK",
                description: "List",
              },
            },
            optAutomatedBackupEncryptionKey,
            optAutomatedBackupEncryptionKeyKeyring,
            optAutomatedBackupEncryptionKeyLocation,
            optAutomatedBackupEncryptionKeyProject,
            optAutomatedBackupRetentionCount,
            optAutomatedBackupRetentionPeriod,
            {
              name: "--automated-backup-start-times",
              description:
                "Comma-separated list of times during the day to start a backup. At least one start time must be provided. The start times are assumed to be in UTC and required to be an exact hour in the format HH:00. (e.g., `--automated-backup-start-times=01:00,13:00`)",
              args: {
                name: "START_TIMES",
                description: "List",
              },
            },
            optAutomatedBackupWindow,
            optBillingProject,
            {
              name: "--clear-automated-backup",
              description:
                "Clears the automated backup policy on the cluster. The default automated backup policy will be used",
            },
            {
              name: "--clear-continuous-backup-encryption-key",
              description:
                "Clears the encryption configuration for Continuous Backups. Google default encryption will be used for future Continuous Backups",
            },
            optConfiguration,
            optContinuousBackupEncryptionKey,
            optContinuousBackupEncryptionKeyKeyring,
            optContinuousBackupEncryptionKeyLocation,
            optContinuousBackupEncryptionKeyProject,
            optContinuousBackupRecoveryWindowDays,
            optDenyMaintenancePeriodEndDate,
            optDenyMaintenancePeriodStartDate,
            optDenyMaintenancePeriodTime,
            optDisableAutomatedBackup,
            optEnableContinuousBackup,
            optEnableDataplexIntegration,
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
                "Maintenance version to update the cluster to. Use `latest` to apply the latest available maintenance version",
              args: {
                name: "MAINTENANCE_VERSION",
                description: "String",
              },
            },
            {
              name: "--maintenance-window-any",
              description: "Remove the user-specified maintenance window",
            },
            optMaintenanceWindowDay,
            optMaintenanceWindowHour,
            optNoAsync,
            {
              name: "--no-clear-automated-backup",
              description:
                "Clears the automated backup policy on the cluster. The default automated backup policy will be used",
              hidden: true,
            },
            {
              name: "--no-clear-continuous-backup-encryption-key",
              description:
                "Clears the encryption configuration for Continuous Backups. Google default encryption will be used for future Continuous Backups",
              hidden: true,
            },
            optNoDisableAutomatedBackup,
            optNoEnableContinuousBackup,
            optNoEnableDataplexIntegration,
            {
              name: "--no-maintenance-window-any",
              description: "Remove the user-specified maintenance window",
              hidden: true,
            },
            {
              name: "--no-remove-deny-maintenance-period",
              description: "Remove the deny maintenance period",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion,
            {
              name: "--remove-deny-maintenance-period",
              description: "Remove the deny maintenance period",
            },
            optSubscriptionType,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLUSTER",
            description: "AlloyDB cluster ID",
          },
        },
        {
          name: "upgrade",
          description:
            "Upgrade an AlloyDB cluster within a given project and region",
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
            name: "CLUSTER",
            description: "AlloyDB cluster ID",
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
      description: "Provide commands for managing AlloyDB instances",
      subcommands: [
        {
          name: "create",
          description: "Creates a new AlloyDB instance within a given cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--allocated-ip-range-override",
              description:
                'Name of the allocated IP range for the private IP AlloyDB instance, for example: "google-managed-services-default". If set, the instance IPs will be created from this allocated range and will override the IP range used by the parent cluster. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?`',
              args: {
                name: "ALLOCATED_IP_RANGE_OVERRIDE",
                description: "String",
              },
            },
            optAllowedPscProjects,
            optAssignInboundPublicIp,
            optAsync,
            optAuthorizedExternalNetworks,
            optAvailabilityType,
            optBillingProject,
            optCluster,
            optConfiguration,
            optConnectionPoolingClientConnectionIdleTimeout,
            optConnectionPoolingIgnoreStartupParameters,
            optConnectionPoolingMaxClientConnections,
            optConnectionPoolingMaxPoolSize,
            optConnectionPoolingMaxPreparedStatements,
            optConnectionPoolingMinPoolSize,
            optConnectionPoolingPoolMode,
            optConnectionPoolingQueryWaitTimeout,
            optConnectionPoolingServerIdleTimeout,
            optConnectionPoolingServerLifetime,
            optConnectionPoolingStatsUsers,
            {
              name: "--cpu-count",
              description:
                "Whole number value indicating how many vCPUs the machine should contain. If the instance does not have a machine-type, the vCPU count will be used to determine the machine type where each vCPU corresponds to an N2 high-mem machine: (https://cloud.google.com/compute/docs/general-purpose-machines#n2_machine_types). where CPU_COUNT can be one of: 2, 4, 8, 16, 32, 64, 96, 128. If the instance has a machine-type, cpu-count must have the same value as the vCPU count in the machine-type. Eg: if machine-type is c4a-highmem-4-lssd, cpu-count must be 4. _CPU_COUNT_ must be one of: *1*, *2*, *4*, *8*, *14*, *16*, *22*, *32*, *44*, *48*, *64*, *72*, *88*, *96*, *128*, *144*, *192*, *288*",
              args: {
                name: "CPU_COUNT",
                description: "Int",
                suggestions: [
                  "1",
                  "2",
                  "4",
                  "8",
                  "14",
                  "16",
                  "22",
                  "32",
                  "44",
                  "48",
                  "64",
                  "72",
                  "88",
                  "96",
                  "128",
                  "144",
                  "192",
                  "288",
                ],
              },
            },
            optDatabaseFlags,
            optEnableConnectionPooling,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--insights-config-query-plans-per-minute",
              description:
                "Number of query plans to sample every minute. Default value is 5. Allowed range: 0 to 20",
              args: {
                name: "INSIGHTS_CONFIG_QUERY_PLANS_PER_MINUTE",
              },
            },
            {
              name: "--insights-config-query-string-length",
              description:
                "Query string length in bytes to be stored by the query insights feature. Default length is 1024 bytes. Allowed range: 256 to 4500 bytes",
              args: {
                name: "INSIGHTS_CONFIG_QUERY_STRING_LENGTH",
              },
            },
            {
              name: "--insights-config-record-application-tags",
              description:
                "Allow application tags to be recorded by the query insights feature",
            },
            {
              name: "--insights-config-record-client-address",
              description:
                "Allow the client address to be recorded by the query insights feature",
            },
            {
              name: "--instance-type",
              description:
                "Specifies instance type. _INSTANCE_TYPE_ must be one of:",
              priority: 100,
              args: {
                name: "INSTANCE_TYPE",
                description: "String",
                suggestions: ["PRIMARY", "READ_POOL"],
              },
            },
            optLogHttp,
            {
              name: "--machine-type",
              description:
                "Specifies machine type for the instance. _MACHINE_TYPE_ must be one of: *n2-highmem-2*, *n2-highmem-4*, *n2-highmem-8*, *n2-highmem-16*, *n2-highmem-32*, *n2-highmem-64*, *n2-highmem-96*, *n2-highmem-128*, *c4a-highmem-1*, *c4a-highmem-2-lssd*, *c4a-highmem-4-lssd*, *c4a-highmem-8-lssd*, *c4a-highmem-16-lssd*, *c4a-highmem-32-lssd*, *c4a-highmem-48-lssd*, *c4a-highmem-64-lssd*, *c4a-highmem-72-lssd*, *c4-highmem-4-lssd*, *c4-highmem-8-lssd*, *c4-highmem-16-lssd*, *c4-highmem-24-lssd*, *c4-highmem-32-lssd*, *c4-highmem-48-lssd*, *c4-highmem-96-lssd*, *c4-highmem-144-lssd*, *c4-highmem-192-lssd*, *c4-highmem-288-lssd*, *z3-highmem-14-standardlssd*, *z3-highmem-22-standardlssd*, *z3-highmem-44-standardlssd*, *z3-highmem-88-standardlssd*, *z3-highmem-8-highlssd*, *z3-highmem-16-highlssd*, *z3-highmem-22-highlssd*, *z3-highmem-32-highlssd*, *z3-highmem-44-highlssd*",
              args: {
                name: "MACHINE_TYPE",
                description: "String",
                suggestions: [
                  "n2-highmem-2",
                  "n2-highmem-4",
                  "n2-highmem-8",
                  "n2-highmem-16",
                  "n2-highmem-32",
                  "n2-highmem-64",
                  "n2-highmem-96",
                  "n2-highmem-128",
                  "c4a-highmem-1",
                  "c4a-highmem-2-lssd",
                  "c4a-highmem-4-lssd",
                  "c4a-highmem-8-lssd",
                  "c4a-highmem-16-lssd",
                  "c4a-highmem-32-lssd",
                  "c4a-highmem-48-lssd",
                  "c4a-highmem-64-lssd",
                  "c4a-highmem-72-lssd",
                  "c4-highmem-4-lssd",
                  "c4-highmem-8-lssd",
                  "c4-highmem-16-lssd",
                  "c4-highmem-24-lssd",
                  "c4-highmem-32-lssd",
                  "c4-highmem-48-lssd",
                  "c4-highmem-96-lssd",
                  "c4-highmem-144-lssd",
                  "c4-highmem-192-lssd",
                  "c4-highmem-288-lssd",
                  "z3-highmem-14-standardlssd",
                  "z3-highmem-22-standardlssd",
                  "z3-highmem-44-standardlssd",
                  "z3-highmem-88-standardlssd",
                  "z3-highmem-8-highlssd",
                  "z3-highmem-16-highlssd",
                  "z3-highmem-22-highlssd",
                  "z3-highmem-32-highlssd",
                  "z3-highmem-44-highlssd",
                ],
              },
            },
            optNoAsync,
            optNoEnableConnectionPooling,
            {
              name: "--no-insights-config-record-application-tags",
              description:
                "Allow application tags to be recorded by the query insights feature",
            },
            {
              name: "--no-insights-config-record-client-address",
              description:
                "Allow the client address to be recorded by the query insights feature",
            },
            {
              name: "--no-observability-config-enabled",
              description: "Enable enhanced query insights feature",
            },
            {
              name: "--no-observability-config-preserve-comments",
              description:
                "Allow preservation of comments in query string recorded by the enhanced query insights feature",
            },
            {
              name: "--no-observability-config-record-application-tags",
              description:
                "Allow application tags to be recorded by the enhanced query insights feature",
            },
            {
              name: "--no-observability-config-track-active-queries",
              description: "Track actively running queries",
            },
            {
              name: "--no-observability-config-track-wait-events",
              description: "Track wait events during query execution",
              hidden: true,
            },
            optNoOutboundPublicIp,
            optNoRequireConnectors,
            {
              name: "--observability-config-enabled",
              description:
                "Enable enhanced query insights feature. Use *--observability-config-enabled* to enable and *--no-observability-config-enabled* to disable",
            },
            {
              name: "--observability-config-max-query-string-length",
              description:
                "Query string length in bytes to be stored by the enhanced query insights feature. Default length is 10k bytes",
              args: {
                name: "OBSERVABILITY_CONFIG_MAX_QUERY_STRING_LENGTH",
              },
            },
            {
              name: "--observability-config-preserve-comments",
              description:
                "Allow preservation of comments in query string recorded by the enhanced query insights feature",
            },
            {
              name: "--observability-config-query-plans-per-minute",
              description:
                "Number of query plans to sample every minute. Default value is 20. Allowed range: 0 to 200",
              args: {
                name: "OBSERVABILITY_CONFIG_QUERY_PLANS_PER_MINUTE",
              },
            },
            {
              name: "--observability-config-record-application-tags",
              description:
                "Allow application tags to be recorded by the enhanced query insights feature",
            },
            {
              name: "--observability-config-track-active-queries",
              description:
                "Track actively running queries. Use *--observability-config-track-active-queries* to enable and *--no-observability-config-track-active-queries* to disable",
            },
            {
              name: "--observability-config-track-wait-events",
              description: "Track wait events during query execution",
            },
            optOutboundPublicIp,
            optProject,
            optPscAutoConnections,
            optPscNetworkAttachmentUri,
            optQuiet,
            {
              name: "--read-pool-node-count",
              description:
                "Read capacity, i.e. number of nodes in a read pool instance",
              args: {
                name: "READ_POOL_NODE_COUNT",
                description: "Int",
              },
            },
            optRegion,
            optRequireConnectors,
            {
              name: "--ssl-mode",
              description:
                "Specify the SSL mode to use when the instance connects to the database. Default SSL mode is ENCRYPTED_ONLY. _SSL_MODE_ must be one of:",
              args: {
                name: "SSL_MODE",
                description: "String",
                suggestions: [
                  "ALLOW_UNENCRYPTED_AND_ENCRYPTED",
                  "ENCRYPTED_ONLY",
                ],
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description: "AlloyDB instance ID",
          },
        },
        {
          name: "create-secondary",
          description:
            "Creates a new AlloyDB SECONDARY instance within a given cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--allocated-ip-range-override",
              description:
                'Name of the allocated IP range for the private IP AlloyDB instance, for example: "google-managed-services-default". If set, the instance IPs will be created from this allocated range and will override the IP range used by the parent cluster. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?`',
              args: {
                name: "ALLOCATED_IP_RANGE_OVERRIDE",
                description: "String",
              },
            },
            optAllowedPscProjects,
            optAssignInboundPublicIp,
            optAsync,
            optAuthorizedExternalNetworks,
            optAvailabilityType,
            optBillingProject,
            optCluster,
            optConfiguration,
            optConnectionPoolingClientConnectionIdleTimeout,
            optConnectionPoolingIgnoreStartupParameters,
            optConnectionPoolingMaxClientConnections,
            optConnectionPoolingMaxPoolSize,
            optConnectionPoolingMaxPreparedStatements,
            optConnectionPoolingMinPoolSize,
            optConnectionPoolingPoolMode,
            optConnectionPoolingQueryWaitTimeout,
            optConnectionPoolingServerIdleTimeout,
            optConnectionPoolingServerLifetime,
            optConnectionPoolingStatsUsers,
            optDatabaseFlags,
            optEnableConnectionPooling,
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
            optNoEnableConnectionPooling,
            optNoOutboundPublicIp,
            optNoRequireConnectors,
            optOutboundPublicIp,
            optProject,
            optPscAutoConnections,
            optPscNetworkAttachmentUri,
            optQuiet,
            optRegion,
            optRequireConnectors,
            {
              name: "--ssl-mode",
              description:
                "Specify the SSL mode to use when the instance connects to the database. Default SSL mode will match what is set on the primary instance. _SSL_MODE_ must be one of:",
              args: {
                name: "SSL_MODE",
                description: "String",
                suggestions: [
                  "ALLOW_UNENCRYPTED_AND_ENCRYPTED",
                  "ENCRYPTED_ONLY",
                ],
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description: "AlloyDB instance ID",
          },
        },
        {
          name: "delete",
          description: "Deletes an AlloyDB instance within a given cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optCluster,
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
            description: "AlloyDB instance ID",
          },
        },
        {
          name: "describe",
          description: "Describes an AlloyDB instance within a given cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
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
            {
              name: "--view",
              description:
                "View of the instance to return. _VIEW_ must be one of: *basic*, *full*",
              args: {
                name: "VIEW",
                suggestions: ["basic", "full"],
              },
            },
          ],
          args: {
            name: "INSTANCE",
            description: "AlloyDB instance ID",
          },
        },
        {
          name: "failover",
          description: "Failover an AlloyDB instance within a given cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optCluster,
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
            description: "AlloyDB instance ID",
          },
        },
        {
          name: "inject-fault",
          description:
            "Inject fault on an AlloyDB instance within a given cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optCluster,
            optConfiguration,
            {
              name: "--fault-type",
              description:
                "Specifies fault type. _FAULT_TYPE_ must be (only one value is supported):",
              priority: 100,
              args: {
                name: "FAULT_TYPE",
                description: "String",
                suggestions: ["stop-vm"],
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
            optRegion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description: "AlloyDB instance ID",
          },
        },
        {
          name: "list",
          description: "Lists AlloyDB instances in a given cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
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
                "Regional location (e.g. asia-east1, us-east1) of CLUSTER. See the full list of regions at https://cloud.google.com/sql/docs/instance-locations. Default: list clusters in all regions",
              priority: 100,
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
          description: "Restarts an AlloyDB instance within a given cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optCluster,
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
              name: "--node-ids",
              description:
                "Comma-separated list of node IDs. Only supported for read pool instances. (e.g., `--node-ids=node-1,node-2,node-3`)",
              args: {
                name: "NODE_IDS",
                description: "List",
              },
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
            description: "AlloyDB instance ID",
          },
        },
        {
          name: "update",
          description: "Updates an AlloyDB instance within a given cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--activation-policy",
              description:
                "Activation Policy for the instance. Required to START or STOP an instance. ALWAYS - The instance is up and running. NEVER - The instance is stopped. _ACTIVATION_POLICY_ must be one of: *ALWAYS*, *NEVER*",
              args: {
                name: "ACTIVATION_POLICY",
                suggestions: ["ALWAYS", "NEVER"],
              },
            },
            optAllowedPscProjects,
            optAssignInboundPublicIp,
            {
              name: "--async",
              description:
                "Return immediately, without waiting for the operation in progress to complete. The default is *True*. Enabled by default, use *--no-async* to disable",
            },
            optAuthorizedExternalNetworks,
            optAvailabilityType,
            optBillingProject,
            {
              name: "--clear-psc-auto-connections",
              description:
                "Remove all PSC auto connections for an AlloyDB instance",
            },
            {
              name: "--clear-psc-network-attachment-uri",
              description:
                "Disable outbound connectivity from an AlloyDB instance which uses Private Service Connect (PSC)",
            },
            optCluster,
            optConfiguration,
            optConnectionPoolingClientConnectionIdleTimeout,
            optConnectionPoolingIgnoreStartupParameters,
            optConnectionPoolingMaxClientConnections,
            optConnectionPoolingMaxPoolSize,
            optConnectionPoolingMaxPreparedStatements,
            optConnectionPoolingMinPoolSize,
            optConnectionPoolingPoolMode,
            optConnectionPoolingQueryWaitTimeout,
            optConnectionPoolingServerIdleTimeout,
            optConnectionPoolingServerLifetime,
            optConnectionPoolingStatsUsers,
            {
              name: "--cpu-count",
              description:
                "Whole number value indicating how many vCPUs the machine should contain. If the instance does not have a machine-type, the vCPU count will be used to determine the machine type where each vCPU corresponds to an N2 high-mem machine: (https://cloud.google.com/compute/docs/general-purpose-machines#n2_machine_types). where CPU_COUNT can be one of: 2, 4, 8, 16, 32, 64, 96, 128. If the instance has a machine-type, cpu-count must have the same value as the vCPU count in the machine-type. Eg: if machine-type is c4a-highmem-4-lssd, cpu-count must be 4. _CPU_COUNT_ must be one of: *1*, *2*, *4*, *8*, *14*, *16*, *22*, *32*, *44*, *48*, *64*, *72*, *88*, *96*, *128*, *144*, *192*, *288*",
              args: {
                name: "CPU_COUNT",
                description: "Int",
                suggestions: [
                  "1",
                  "2",
                  "4",
                  "8",
                  "14",
                  "16",
                  "22",
                  "32",
                  "44",
                  "48",
                  "64",
                  "72",
                  "88",
                  "96",
                  "128",
                  "144",
                  "192",
                  "288",
                ],
              },
            },
            optDatabaseFlags,
            optEnableConnectionPooling,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--insights-config-query-plans-per-minute",
              description:
                "Number of query plans to sample every minute. Default value is 5. Allowed range: 0 to 20",
              args: {
                name: "INSIGHTS_CONFIG_QUERY_PLANS_PER_MINUTE",
              },
            },
            {
              name: "--insights-config-query-string-length",
              description:
                "Query string length in bytes to be stored by the query insights feature. Default length is 1024 bytes. Allowed range: 256 to 4500 bytes",
              args: {
                name: "INSIGHTS_CONFIG_QUERY_STRING_LENGTH",
              },
            },
            {
              name: "--insights-config-record-application-tags",
              description:
                "Allow application tags to be recorded by the query insights feature",
            },
            {
              name: "--insights-config-record-client-address",
              description:
                "Allow the client address to be recorded by the query insights feature",
            },
            optLogHttp,
            {
              name: "--machine-type",
              description:
                "Specifies machine type for the instance. _MACHINE_TYPE_ must be one of: *n2-highmem-2*, *n2-highmem-4*, *n2-highmem-8*, *n2-highmem-16*, *n2-highmem-32*, *n2-highmem-64*, *n2-highmem-96*, *n2-highmem-128*, *c4a-highmem-1*, *c4a-highmem-2-lssd*, *c4a-highmem-4-lssd*, *c4a-highmem-8-lssd*, *c4a-highmem-16-lssd*, *c4a-highmem-32-lssd*, *c4a-highmem-48-lssd*, *c4a-highmem-64-lssd*, *c4a-highmem-72-lssd*, *c4-highmem-4-lssd*, *c4-highmem-8-lssd*, *c4-highmem-16-lssd*, *c4-highmem-24-lssd*, *c4-highmem-32-lssd*, *c4-highmem-48-lssd*, *c4-highmem-96-lssd*, *c4-highmem-144-lssd*, *c4-highmem-192-lssd*, *c4-highmem-288-lssd*, *z3-highmem-14-standardlssd*, *z3-highmem-22-standardlssd*, *z3-highmem-44-standardlssd*, *z3-highmem-88-standardlssd*, *z3-highmem-8-highlssd*, *z3-highmem-16-highlssd*, *z3-highmem-22-highlssd*, *z3-highmem-32-highlssd*, *z3-highmem-44-highlssd*",
              args: {
                name: "MACHINE_TYPE",
                description: "String",
                suggestions: [
                  "n2-highmem-2",
                  "n2-highmem-4",
                  "n2-highmem-8",
                  "n2-highmem-16",
                  "n2-highmem-32",
                  "n2-highmem-64",
                  "n2-highmem-96",
                  "n2-highmem-128",
                  "c4a-highmem-1",
                  "c4a-highmem-2-lssd",
                  "c4a-highmem-4-lssd",
                  "c4a-highmem-8-lssd",
                  "c4a-highmem-16-lssd",
                  "c4a-highmem-32-lssd",
                  "c4a-highmem-48-lssd",
                  "c4a-highmem-64-lssd",
                  "c4a-highmem-72-lssd",
                  "c4-highmem-4-lssd",
                  "c4-highmem-8-lssd",
                  "c4-highmem-16-lssd",
                  "c4-highmem-24-lssd",
                  "c4-highmem-32-lssd",
                  "c4-highmem-48-lssd",
                  "c4-highmem-96-lssd",
                  "c4-highmem-144-lssd",
                  "c4-highmem-192-lssd",
                  "c4-highmem-288-lssd",
                  "z3-highmem-14-standardlssd",
                  "z3-highmem-22-standardlssd",
                  "z3-highmem-44-standardlssd",
                  "z3-highmem-88-standardlssd",
                  "z3-highmem-8-highlssd",
                  "z3-highmem-16-highlssd",
                  "z3-highmem-22-highlssd",
                  "z3-highmem-32-highlssd",
                  "z3-highmem-44-highlssd",
                ],
              },
            },
            optNoAsync,
            {
              name: "--no-clear-psc-auto-connections",
              description:
                "Remove all PSC auto connections for an AlloyDB instance",
              hidden: true,
            },
            {
              name: "--no-clear-psc-network-attachment-uri",
              description:
                "Disable outbound connectivity from an AlloyDB instance which uses Private Service Connect (PSC)",
              hidden: true,
            },
            optNoEnableConnectionPooling,
            {
              name: "--no-insights-config-record-application-tags",
              description:
                "Allow application tags to be recorded by the query insights feature",
            },
            {
              name: "--no-insights-config-record-client-address",
              description:
                "Allow the client address to be recorded by the query insights feature",
            },
            {
              name: "--no-observability-config-enabled",
              description: "Enable enhanced query insights feature",
            },
            {
              name: "--no-observability-config-preserve-comments",
              description:
                "Allow preservation of comments in query string recorded by the enhanced query insights feature",
            },
            {
              name: "--no-observability-config-record-application-tags",
              description:
                "Allow application tags to be recorded by the enhanced query insights feature",
            },
            {
              name: "--no-observability-config-track-active-queries",
              description: "Track actively running queries",
            },
            {
              name: "--no-observability-config-track-wait-events",
              description: "Track wait events during query execution",
              hidden: true,
            },
            optNoOutboundPublicIp,
            optNoRequireConnectors,
            {
              name: "--observability-config-enabled",
              description:
                "Enable enhanced query insights feature. Use *--observability-config-enabled* to enable and *--no-observability-config-enabled* to disable",
            },
            {
              name: "--observability-config-max-query-string-length",
              description:
                "Query string length in bytes to be stored by the enhanced query insights feature. Default length is 10k bytes",
              args: {
                name: "OBSERVABILITY_CONFIG_MAX_QUERY_STRING_LENGTH",
              },
            },
            {
              name: "--observability-config-preserve-comments",
              description:
                "Allow preservation of comments in query string recorded by the enhanced query insights feature",
            },
            {
              name: "--observability-config-query-plans-per-minute",
              description:
                "Number of query plans to sample every minute. Default value is 20. Allowed range: 0 to 200",
              args: {
                name: "OBSERVABILITY_CONFIG_QUERY_PLANS_PER_MINUTE",
              },
            },
            {
              name: "--observability-config-record-application-tags",
              description:
                "Allow application tags to be recorded by the enhanced query insights feature",
            },
            {
              name: "--observability-config-track-active-queries",
              description:
                "Track actively running queries. Use *--observability-config-track-active-queries* to enable and *--no-observability-config-track-active-queries* to disable",
            },
            {
              name: "--observability-config-track-wait-events",
              description: "Track wait events during query execution",
            },
            optOutboundPublicIp,
            optProject,
            optPscAutoConnections,
            optPscNetworkAttachmentUri,
            optQuiet,
            {
              name: "--read-pool-node-count",
              description:
                "Read capacity, i.e. number of nodes in a read pool instance",
              args: {
                name: "READ_POOL_NODE_COUNT",
                description: "Int",
              },
            },
            optRegion,
            optRequireConnectors,
            {
              name: "--ssl-mode",
              description:
                "Specify the SSL mode to use when the instance connects to the database. _SSL_MODE_ must be one of:",
              args: {
                name: "SSL_MODE",
                description: "String",
                suggestions: [
                  "ALLOW_UNENCRYPTED_AND_ENCRYPTED",
                  "ENCRYPTED_ONLY",
                ],
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description: "AlloyDB instance ID",
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
      description: "Provide commands for managing AlloyDB operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels an AlloyDB operation",
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
            name: "OPERATION",
            description: "AlloyDB operation ID",
          },
        },
        {
          name: "delete",
          description: "Deletes an AlloyDB operation",
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
            name: "OPERATION",
            description: "AlloyDB operation ID",
          },
        },
        {
          name: "describe",
          description: "Describes an AlloyDB operation",
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
            name: "OPERATION",
            description: "AlloyDB operation ID",
          },
        },
        {
          name: "list",
          description: "Lists AlloyDB operations",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--cluster",
              description: "AlloyDB cluster ID",
              args: {
                name: "CLUSTER",
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
            optLogHttp,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            {
              name: "--region",
              description:
                "Regional location (e.g. asia-east1, us-east1). See the full list of regions at https://cloud.google.com/sql/docs/instance-locations. Default: list operations in all regions",
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
      name: "users",
      description: "Provide commands for managing AlloyDB users",
      subcommands: [
        {
          name: "create",
          description: "Creates a user in a given cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            optConfiguration,
            {
              name: "--db-roles",
              description:
                "Comma separated list of database roles this new user will be granted upon creation",
              args: {
                name: "ROLE",
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
              name: "--keep-extra-roles",
              description:
                "If the user already exists and has extra roles, keep them",
              args: {
                name: "KEEP_EXTRA_ROLES",
                description: "Int",
              },
            },
            optLogHttp,
            {
              name: "--password",
              description: "Password for this database user",
              args: {
                name: "PASSWORD",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optRegion,
            {
              name: "--superuser",
              description:
                "If true, new user will have AlloyDB superuser privileges. Default value is false",
              args: {
                name: "SUPERUSER",
                description: "Int",
              },
            },
            optTraceToken,
            {
              name: "--type",
              description:
                "Type corresponds to the user type. _TYPE_ must be one of:",
              args: {
                name: "TYPE",
                description: "String",
                suggestions: ["BUILT_IN", "IAM_BASED", "IAM_GROUP"],
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "USERNAME",
            description: "AlloyDB username",
          },
        },
        {
          name: "delete",
          description: "Deletes an AlloyDB user in a given cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
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
            name: "USERNAME",
            description: "AlloyDB username",
          },
        },
        {
          name: "list",
          description: "Lists AlloyDB users in a given cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
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
          name: "set-password",
          description:
            "Update an AlloyDB user's password within a given cluster and region",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
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
              name: "--password",
              description: "Password for this database user",
              priority: 100,
              args: {
                name: "PASSWORD",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optRegion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "USERNAME",
            description: "AlloyDB username",
          },
        },
        {
          name: "set-roles",
          description:
            "Update an AlloyDB user's database roles within a given cluster and region",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            optConfiguration,
            {
              name: "--db-roles",
              description:
                "Comma separated list of database roles this new user will be granted upon creation",
              priority: 100,
              args: {
                name: "ROLE",
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
              name: "--keep-extra-roles",
              description:
                "If the user already exists and has extra roles, keep them",
              args: {
                name: "KEEP_EXTRA_ROLES",
                description: "Int",
              },
            },
            optLogHttp,
            optProject,
            optQuiet,
            optRegion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "USERNAME",
            description: "AlloyDB username",
          },
        },
        {
          name: "set-superuser",
          description:
            "Update an AlloyDB user's superuser role within a given cluster and region",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
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
            {
              name: "--superuser",
              description:
                "If true, user will have AlloyDB superuser privileges",
              priority: 100,
              args: {
                name: "SUPERUSER",
                description: "Int",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "USERNAME",
            description: "AlloyDB username",
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
