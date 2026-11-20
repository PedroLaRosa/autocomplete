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

const optActivationPolicy: Fig.Option = {
  name: "--activation-policy",
  description:
    "Activation policy for this instance. This specifies when the instance should be activated and is applicable only when the instance state is `RUNNABLE`. The default is `always`. More information on activation policies can be found here: https://cloud.google.com/sql/docs/mysql/start-stop-restart-instance#activation_policy. _ACTIVATION_POLICY_ must be one of: *always*, *never*",
  args: {
    name: "ACTIVATION_POLICY",
    suggestions: ["always", "never"],
  },
};

const optActiveDirectoryDnsServers: Fig.Option = {
  name: "--active-directory-dns-servers",
  description:
    "A comma-separated list of the DNS servers to be used for Active Directory. Only available for SQL Server instances. E.g: 10.0.0.1,10.0.0.2",
  args: {
    name: "DNS_SERVER_IP_ADDRESS",
    description: "List",
  },
};

const optActiveDirectoryDomain: Fig.Option = {
  name: "--active-directory-domain",
  description:
    "Managed Service for Microsoft Active Directory domain this instance is joined to. Only available for SQL Server instances",
  args: {
    name: "ACTIVE_DIRECTORY_DOMAIN",
    description: "String",
  },
};

const optActiveDirectoryMode: Fig.Option = {
  name: "--active-directory-mode",
  description:
    "Defines the Active Directory mode. Only available for SQL Server instances. _ACTIVE_DIRECTORY_MODE_ must be one of: *MANAGED_ACTIVE_DIRECTORY*, *CUSTOMER_MANAGED_ACTIVE_DIRECTORY*",
  args: {
    name: "ACTIVE_DIRECTORY_MODE",
    description: "String",
    suggestions: [
      "MANAGED_ACTIVE_DIRECTORY",
      "CUSTOMER_MANAGED_ACTIVE_DIRECTORY",
    ],
  },
};

const optActiveDirectoryOrganizationalUnit: Fig.Option = {
  name: "--active-directory-organizational-unit",
  description:
    "Defines the organizational unit to be used for Active Directory. Only available for SQL Server instances. E.g: OU=Cloud,DC=ad,DC=example,DC=com",
  args: {
    name: "ACTIVE_DIRECTORY_ORGANIZATIONAL_UNIT",
    description: "String",
  },
};

const optActiveDirectorySecretManagerKey: Fig.Option = {
  name: "--active-directory-secret-manager-key",
  description:
    "The secret manager key storing administrator credentials. Only available for SQL Server instances",
  args: {
    name: "ACTIVE_DIRECTORY_SECRET_MANAGER_KEY",
    description: "String",
  },
};

const optAllowedPscProjects: Fig.Option = {
  name: "--allowed-psc-projects",
  description:
    "A comma-separated list of projects. Each project in this list might be represented by a project number (numeric) or by a project ID (alphanumeric). This allows Private Service Connect connections to be established from specified consumer projects",
  args: {
    name: "PROJECT",
    description: "List",
  },
};

const optAssignIp: Fig.Option = {
  name: "--assign-ip",
  description:
    "Assign a public IP address to the instance. This is a public, externally available IPv4 address that you can use to connect to your instance when properly authorized. Use *--assign-ip* to enable and *--no-assign-ip* to disable",
};

const optAsync: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to complete",
};

const optAuditBucketPath: Fig.Option = {
  name: "--audit-bucket-path",
  description:
    "The location, as a Cloud Storage bucket, to which audit files are uploaded. The URI is in the form gs://bucketName/folderName. Only available for SQL Server instances",
  args: {
    name: "AUDIT_BUCKET_PATH",
    description: "String",
  },
};

const optAuditRetentionInterval: Fig.Option = {
  name: "--audit-retention-interval",
  description:
    "The number of days for audit log retention on disk, for example, 3dfor 3 days. Only available for SQL Server instances",
  args: {
    name: "AUDIT_RETENTION_INTERVAL",
  },
};

const optAuditUploadInterval: Fig.Option = {
  name: "--audit-upload-interval",
  description:
    "How often to upload audit logs (audit files), for example, 30mfor 30 minutes. Only available for SQL Server instances",
  args: {
    name: "AUDIT_UPLOAD_INTERVAL",
  },
};

const optAuthorizedNetworks: Fig.Option = {
  name: "--authorized-networks",
  description:
    "The list of external networks that are allowed to connect to the instance. Specified in CIDR notation, also known as 'slash' notation (e.g. 192.168.100.0/24)",
  args: {
    name: "NETWORK",
    description: "List",
  },
};

const optAvailabilityType: Fig.Option = {
  name: "--availability-type",
  description:
    "Specifies level of availability. _AVAILABILITY_TYPE_ must be one of:",
  args: {
    name: "AVAILABILITY_TYPE",
    suggestions: ["regional", "zonal"],
  },
};

const optBackup: Fig.Option = {
  name: "--backup",
  description:
    "Enables daily backup. Enabled by default, use *--no-backup* to disable",
};

const optBackupLocation: Fig.Option = {
  name: "--backup-location",
  description:
    "Choose where to store your backups. Backups are stored in the closest multi-region location to you by default. Only customize if needed",
  args: {
    name: "BACKUP_LOCATION",
    description: "String",
  },
};

const optBackupStartTime: Fig.Option = {
  name: "--backup-start-time",
  description:
    "Start time of daily backups, specified in the HH:MM format, in the UTC timezone",
  args: {
    name: "BACKUP_START_TIME",
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

const optClearActiveDirectory: Fig.Option = {
  name: "--clear-active-directory",
  description: "Clears the Active Directory configuration",
};

const optClearActiveDirectoryDnsServers: Fig.Option = {
  name: "--clear-active-directory-dns-servers",
  description:
    "Removes the list of DNS Servers from the Active Directory Config",
};

const optCollation: Fig.Option = {
  name: "--collation",
  description:
    "Cloud SQL server-level collation setting, which specifies the set of rules for comparing characters in a character set",
  args: {
    name: "COLLATION",
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

const optConnectorEnforcement: Fig.Option = {
  name: "--connector-enforcement",
  description:
    "Cloud SQL Connector enforcement mode. It determines how Cloud SQL Connectors are used in the connection. See the list of modes [here](https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances#connectorenforcement). _CONNECTOR_ENFORCEMENT_ must be one of:",
  args: {
    name: "CONNECTOR_ENFORCEMENT",
    description: "String",
    suggestions: [
      "CONNECTOR_ENFORCEMENT_UNSPECIFIED",
      "NOT_REQUIRED",
      "REQUIRED",
    ],
  },
};

const optCpu: Fig.Option = {
  name: "--cpu",
  description:
    "Whole number value indicating how many cores are desired in the machine. Both --cpu and --memory must be specified if a custom machine type is desired, and the --tier flag must be omitted.--cpu and --memory flags are not compatible with the Enterprise Plus edition. These flags should not be used when creating an Enterprise Plus edition, as the machine configuration is determined by the --tier flag instead",
  args: {
    name: "CPU",
    description: "Int",
  },
};

const optDatabase: Fig.Option = {
  name: ["--database", "-d"],
  description:
    "Database(s) from which the export is made. Information on requirements can be found here: https://cloud.google.com/sql/docs/mysql/admin-api/v1beta4/instances/export#exportContext.databases",
  args: {
    name: "DATABASE",
    description: "List",
  },
};

const optDeletionProtection: Fig.Option = {
  name: "--deletion-protection",
  description:
    "Enable deletion protection on a Cloud SQL instance. Use *--deletion-protection* to enable and *--no-deletion-protection* to disable",
};

const optDenyMaintenancePeriodEndDate: Fig.Option = {
  name: "--deny-maintenance-period-end-date",
  description:
    "Date when the deny maintenance period ends, that is ``2021-01-10''",
  args: {
    name: "DENY_MAINTENANCE_PERIOD_END_DATE",
    description: "String",
  },
};

const optDenyMaintenancePeriodStartDate: Fig.Option = {
  name: "--deny-maintenance-period-start-date",
  description:
    "Date when the deny maintenance period begins, that is ``2020-11-01''",
  args: {
    name: "DENY_MAINTENANCE_PERIOD_START_DATE",
    description: "String",
  },
};

const optDenyMaintenancePeriodTime: Fig.Option = {
  name: "--deny-maintenance-period-time",
  description:
    "Time when the deny maintenance period starts or ends, that is ``05:00:00''",
  args: {
    name: "DENY_MAINTENANCE_PERIOD_TIME",
    description: "String",
  },
};

const optDiskEncryptionKey: Fig.Option = {
  name: "--disk-encryption-key",
  description: "ID of the key or fully qualified identifier for the key",
  priority: 100,
  args: {
    name: "DISK_ENCRYPTION_KEY",
    description: "String",
  },
};

const optDiskEncryptionKeyKeyring: Fig.Option = {
  name: "--disk-encryption-key-keyring",
  description: "The KMS keyring of the key",
  args: {
    name: "DISK_ENCRYPTION_KEY_KEYRING",
    description: "String",
  },
};

const optDiskEncryptionKeyLocation: Fig.Option = {
  name: "--disk-encryption-key-location",
  description: "The Google Cloud location for the key",
  args: {
    name: "DISK_ENCRYPTION_KEY_LOCATION",
    description: "String",
  },
};

const optDiskEncryptionKeyProject: Fig.Option = {
  name: "--disk-encryption-key-project",
  description: "The Google Cloud project for the key",
  args: {
    name: "DISK_ENCRYPTION_KEY_PROJECT",
    description: "String",
  },
};

const optEdition: Fig.Option = {
  name: "--edition",
  description:
    "Specifies the edition of Cloud SQL instance. _EDITION_ must be one of: *enterprise*, *enterprise-plus*",
  args: {
    name: "EDITION",
    suggestions: ["enterprise", "enterprise-plus"],
  },
};

const optEnableBinLog: Fig.Option = {
  name: "--enable-bin-log",
  description:
    "Allows for data recovery from a specific point in time, down to a fraction of a second. Must have automatic backups enabled to use. Make sure storage can support at least 7 days of logs",
};

const optEnableGooglePrivatePath: Fig.Option = {
  name: "--enable-google-private-path",
  description:
    "Enable a private path for Google Cloud services. This flag specifies whether the instance is accessible to internal Google Cloud services such as BigQuery. This is only applicable to MySQL and PostgreSQL instances that don't use public IP. Currently, SQL Server isn't supported",
};

const optEnablePointInTimeRecovery: Fig.Option = {
  name: "--enable-point-in-time-recovery",
  description:
    "Allows for data recovery from a specific point in time, down to a fraction of a second, using write-ahead logs. Must have automatic backups enabled to use. Make sure storage can support at least 7 days of logs",
};

const optEnablePrivateServiceConnect: Fig.Option = {
  name: "--enable-private-service-connect",
  description:
    "Enable connecting to the Cloud SQL instance with Private Service Connect",
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

const optFinalBackup: Fig.Option = {
  name: "--final-backup",
  description:
    "Enables the final backup to be taken at the time of instance deletion. Use *--final-backup* to enable and *--no-final-backup* to disable",
};

const optFinalBackupRetentionDays: Fig.Option = {
  name: "--final-backup-retention-days",
  description:
    "Specifies number of days to retain final backup. The valid range is between 1 and 365. For instances managed by BackupDR, the valid range is between 1 day and 10 years (3653 days). Default value is 30 days",
  args: {
    name: "FINAL_BACKUP_RETENTION_DAYS",
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

const optGceZone: Fig.Option = {
  name: "--gce-zone",
  description:
    "(DEPRECATED) Preferred Compute Engine zone (e.g. us-central1-a, us-central1-b, etc.)",
  deprecated: true,
  args: {
    name: "GCE_ZONE",
    description: "String",
  },
};

const optHost: Fig.Option = {
  name: "--host",
  description:
    "Cloud SQL user's hostname expressed as a specific IP address or address range. `%` denotes an unrestricted hostname. Applicable flag for MySQL instances; ignored for all other engines. Note, if you connect to your instance using IP addresses, you must add your client IP address as an authorized address, even if your hostname is unrestricted. For more information, see [Configure IP](https://cloud.google.com/sql/docs/mysql/configure-ip)",
  args: {
    name: "HOST",
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

const optInsightsConfigEnhancedQueryInsightsEnabled: Fig.Option = {
  name: "--insights-config-enhanced-query-insights-enabled",
  description:
    "Enable enhanced query insights for Enterprise Plus edition to provide more detailed query analytics",
};

const optInsightsConfigQueryInsightsEnabled: Fig.Option = {
  name: "--insights-config-query-insights-enabled",
  description:
    "Enable query insights feature to provide query and query plan analytics",
};

const optInsightsConfigQueryPlansPerMinute: Fig.Option = {
  name: "--insights-config-query-plans-per-minute",
  description:
    "Number of query plans to sample every minute. Default value is 5. Allowed range: 0 to 20",
  args: {
    name: "INSIGHTS_CONFIG_QUERY_PLANS_PER_MINUTE",
  },
};

const optInsightsConfigQueryStringLength: Fig.Option = {
  name: "--insights-config-query-string-length",
  description:
    "Sets the default query length limit. For Cloud SQL Enterprise edition, the range is from 256 to 4500 (in bytes) and the default query length is 1024 bytes. For Cloud SQL Enterprise Plus edition, the range is from 1024 to 100,000 (in bytes) and the default query length is 10,000 bytes",
  args: {
    name: "INSIGHTS_CONFIG_QUERY_STRING_LENGTH",
  },
};

const optInsightsConfigRecordApplicationTags: Fig.Option = {
  name: "--insights-config-record-application-tags",
  description:
    "Allow application tags to be recorded by the query insights feature",
};

const optInsightsConfigRecordClientAddress: Fig.Option = {
  name: "--insights-config-record-client-address",
  description:
    "Allow the client address to be recorded by the query insights feature",
};

const optInstance: Fig.Option = {
  name: ["--instance", "-i"],
  description: "Cloud SQL instance ID",
  priority: 100,
  args: {
    name: "INSTANCE",
    description: "String",
  },
};

const optInstance2: Fig.Option = {
  name: ["--instance", "-i"],
  description: "Cloud SQL instance ID",
  args: {
    name: "INSTANCE",
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

const optMaintenanceReleaseChannel: Fig.Option = {
  name: "--maintenance-release-channel",
  description:
    "Which channel's updates to apply during the maintenance window. If not specified, Cloud SQL chooses the timing of updates to your instance. _MAINTENANCE_RELEASE_CHANNEL_ must be one of:",
  args: {
    name: "MAINTENANCE_RELEASE_CHANNEL",
    suggestions: ["preview", "production", "week5"],
  },
};

const optMaintenanceWindowDay: Fig.Option = {
  name: "--maintenance-window-day",
  description:
    "Day of week for maintenance window, in UTC time zone. _MAINTENANCE_WINDOW_DAY_ must be one of: *SUN*, *MON*, *TUE*, *WED*, *THU*, *FRI*, *SAT*",
  args: {
    name: "MAINTENANCE_WINDOW_DAY",
    suggestions: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
  },
};

const optMaintenanceWindowHour: Fig.Option = {
  name: "--maintenance-window-hour",
  description: "Hour of day for maintenance window, in UTC time zone",
  args: {
    name: "MAINTENANCE_WINDOW_HOUR",
  },
};

const optMemory: Fig.Option = {
  name: "--memory",
  description:
    "Whole number value indicating how much memory is desired in the machine. A size unit should be provided (eg. 3072MiB or 9GiB) - if no units are specified, GiB is assumed. Both --cpu and --memory must be specified if a custom machine type is desired, and the --tier flag must be omitted. --cpu and --memory flags are not compatible with the Enterprise Plus edition. These flags should not be used when creating an Enterprise Plus edition, as the machine configuration is determined by the --tier flag instead",
  args: {
    name: "MEMORY",
  },
};

const optNetwork: Fig.Option = {
  name: "--network",
  description:
    "Network in the current project that the instance will be part of. To specify using a network with a shared VPC, use the full URL of the network. For an example host project, 'testproject', and shared network, 'testsharednetwork', this would use the form: `--network`=`projects/testproject/global/networks/testsharednetwork`",
  args: {
    name: "NETWORK",
    description: "String",
  },
};

const optNoAssignIp: Fig.Option = {
  name: "--no-assign-ip",
  description:
    "Assign a public IP address to the instance. This is a public, externally available IPv4 address that you can use to connect to your instance when properly authorized",
};

const optNoAsync: Fig.Option = {
  name: "--no-async",
  description:
    "Return immediately, without waiting for the operation in progress to complete",
  hidden: true,
};

const optNoClearActiveDirectory: Fig.Option = {
  name: "--no-clear-active-directory",
  description: "Clears the Active Directory configuration",
  hidden: true,
};

const optNoClearActiveDirectoryDnsServers: Fig.Option = {
  name: "--no-clear-active-directory-dns-servers",
  description:
    "Removes the list of DNS Servers from the Active Directory Config",
  hidden: true,
};

const optNoDeletionProtection: Fig.Option = {
  name: "--no-deletion-protection",
  description: "Enable deletion protection on a Cloud SQL instance",
};

const optNoEnableBinLog: Fig.Option = {
  name: "--no-enable-bin-log",
  description:
    "Allows for data recovery from a specific point in time, down to a fraction of a second. Must have automatic backups enabled to use. Make sure storage can support at least 7 days of logs",
  hidden: true,
};

const optNoEnableGooglePrivatePath: Fig.Option = {
  name: "--no-enable-google-private-path",
  description:
    "Enable a private path for Google Cloud services. This flag specifies whether the instance is accessible to internal Google Cloud services such as BigQuery. This is only applicable to MySQL and PostgreSQL instances that don't use public IP. Currently, SQL Server isn't supported",
  hidden: true,
};

const optNoEnablePointInTimeRecovery: Fig.Option = {
  name: "--no-enable-point-in-time-recovery",
  description:
    "Allows for data recovery from a specific point in time, down to a fraction of a second, using write-ahead logs. Must have automatic backups enabled to use. Make sure storage can support at least 7 days of logs",
  hidden: true,
};

const optNoEnablePrivateServiceConnect: Fig.Option = {
  name: "--no-enable-private-service-connect",
  description:
    "Enable connecting to the Cloud SQL instance with Private Service Connect",
  hidden: true,
};

const optNoFinalBackup: Fig.Option = {
  name: "--no-final-backup",
  description:
    "Enables the final backup to be taken at the time of instance deletion",
};

const optNoRequireSsl: Fig.Option = {
  name: "--no-require-ssl",
  description: "Specified if users connecting over IP must use SSL",
  hidden: true,
};

const optNoStorageAutoIncrease: Fig.Option = {
  name: "--no-storage-auto-increase",
  description:
    "Storage size can be increased, but it cannot be decreased; storage increases are permanent for the life of the instance. With this setting enabled, a spike in storage requirements can result in permanently increased storage costs for your instance. However, if an instance runs out of available space, it can result in the instance going offline, dropping existing connections. This setting is enabled by default",
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
    "Regional location (e.g. asia-east1, us-east1). See the full list of regions at https://cloud.google.com/sql/docs/instance-locations",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRequireSsl: Fig.Option = {
  name: "--require-ssl",
  description: "Specified if users connecting over IP must use SSL",
};

const optRetainedBackupsCount: Fig.Option = {
  name: "--retained-backups-count",
  description:
    "How many backups to keep. The valid range is between 1 and 365. Default value is 7 for Enterprise edition instances. For Enterprise_Plus, default value is 15. Applicable only if --no-backups is not specified",
  args: {
    name: "RETAINED_BACKUPS_COUNT",
  },
};

const optRetainedTransactionLogDays: Fig.Option = {
  name: "--retained-transaction-log-days",
  description:
    "How many days of transaction logs to keep. The valid range is between 1 and 35. Only use this option when point-in-time recovery is enabled. If logs are stored on disk, storage size for transaction logs could increase when the number of days for log retention increases. For Enterprise, default and max retention values are 7 and 7 respectively. For Enterprise_Plus, default and max retention values are 14 and 35",
  args: {
    name: "RETAINED_TRANSACTION_LOG_DAYS",
  },
};

const optSecondaryZone: Fig.Option = {
  name: "--secondary-zone",
  description:
    "Preferred secondary Compute Engine zone (e.g. us-central1-a, us-central1-b, etc.)",
  args: {
    name: "SECONDARY_ZONE",
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

const optSslMode: Fig.Option = {
  name: "--ssl-mode",
  description: "Set the SSL mode of the instance. _SSL_MODE_ must be one of:",
  args: {
    name: "SSL_MODE",
    description: "String",
    suggestions: [
      "ALLOW_UNENCRYPTED_AND_ENCRYPTED",
      "ENCRYPTED_ONLY",
      "TRUSTED_CLIENT_CERTIFICATE_REQUIRED",
    ],
  },
};

const optStorageAutoIncrease: Fig.Option = {
  name: "--storage-auto-increase",
  description:
    "Storage size can be increased, but it cannot be decreased; storage increases are permanent for the life of the instance. With this setting enabled, a spike in storage requirements can result in permanently increased storage costs for your instance. However, if an instance runs out of available space, it can result in the instance going offline, dropping existing connections. This setting is enabled by default. Use *--storage-auto-increase* to enable and *--no-storage-auto-increase* to disable",
};

const optStorageProvisionedIops: Fig.Option = {
  name: "--storage-provisioned-iops",
  description:
    "Indicates how many IOPS to provision for the data disk. This sets the number of I/O operations per second that the disk can handle",
  args: {
    name: "STORAGE_PROVISIONED_IOPS",
  },
};

const optStorageProvisionedThroughput: Fig.Option = {
  name: "--storage-provisioned-throughput",
  description:
    "Indicates how much throughput to provision for the data disk. This sets the throughput in MB per second that the disk can handle",
  args: {
    name: "STORAGE_PROVISIONED_THROUGHPUT",
  },
};

const optStorageSize: Fig.Option = {
  name: "--storage-size",
  description:
    "Amount of storage allocated to the instance. Must be an integer number of GB. The default is 10GB. Information on storage limits can be found here: https://cloud.google.com/sql/docs/quotas#storage_limits",
  args: {
    name: "STORAGE_SIZE",
  },
};

const optStorageType: Fig.Option = {
  name: "--storage-type",
  description:
    "The storage type for the instance, determined by the selected machine type. _STORAGE_TYPE_ must be one of: *SSD*, *HDD*, *HYPERDISK_BALANCED*",
  args: {
    name: "STORAGE_TYPE",
    description: "String",
    suggestions: ["SSD", "HDD", "HYPERDISK_BALANCED"],
  },
};

const optTier: Fig.Option = {
  name: ["--tier", "-t"],
  description:
    "Machine type for a shared-core instance e.g. ``db-g1-small''. For all other instances, instead of using tiers, customize your instance by specifying its CPU and memory. You can do so with the `--cpu` and `--memory` flags. Learn more about how CPU and memory affects pricing: https://cloud.google.com/sql/pricing",
  args: {
    name: "TIER",
    description: "String",
  },
};

const optTimeZone: Fig.Option = {
  name: "--time-zone",
  description:
    "Set a non-default time zone. Only available for SQL Server instances",
  args: {
    name: "TIME_ZONE",
    description: "String",
  },
};

const optTimeout: Fig.Option = {
  name: "--timeout",
  description:
    "Time to synchronously wait for the operation to complete, after which the operation continues asynchronously. Ignored if --async flag is specified. By default, set to 3600s. To wait indefinitely, set to *unlimited*",
  args: {
    name: "TIMEOUT",
    description: "Int",
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

const optZone: Fig.Option = {
  name: "--zone",
  description:
    "Preferred Compute Engine zone (e.g. us-central1-a, us-central1-b, etc.)",
  args: {
    name: "ZONE",
    description: "String",
  },
};

const completionSpec: Fig.Spec = {
  name: "sql",
  description: "Create and manage Google Cloud SQL databases",
  subcommands: [
    {
      name: "backups",
      description:
        "Provide commands for working with backups of Cloud SQL instances",
      subcommands: [
        {
          name: "create",
          description: "Creates a backup of a Cloud SQL instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "A friendly description of the backup",
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
            optInstance,
            {
              name: "--location",
              description:
                "Choose where to store your backup. Backups are stored in the closest multi-region location to you by default. Only customize if needed",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optNoAsync,
            {
              name: "--no-project-level",
              description:
                "If true, then invoke project level backup endpoint. Use 'Name' as the value for backup ID. You can find the 'Name' by running $ gcloud sql backups list",
              hidden: true,
            },
            optProject,
            {
              name: "--project-level",
              description:
                "If true, then invoke project level backup endpoint. Use 'Name' as the value for backup ID. You can find the 'Name' by running $ gcloud sql backups list",
              hidden: true,
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "delete",
          description: "Delete a backup of a Cloud SQL instance",
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
            optInstance2,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ID",
            description:
              "The ID of the backup run. To find the ID, run the following command: $ gcloud sql backups list -i {instance}.Or, the NAME of the backup. To find the NAME, run the following command: $ gcloud sql backups list --filter=instance:{instance}",
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
            optInstance2,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ID",
            description:
              "The ID of the backup run. To find the ID, run the following command: $ gcloud sql backups list -i {instance}.Or, the NAME of the backup. To find the NAME, run the following command: $ gcloud sql backups list --filter=instance:{instance}",
          },
        },
        {
          name: "list",
          description:
            "Lists all backups associated with the project or a given instance",
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
              name: ["--instance", "-i"],
              description: 'Cloud SQL instance ID or "-" for all instances',
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
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "patch",
          description: "Update the Final backup of a Cloud SQL project",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--backup-description",
              description:
                "Provides description for the backup going to be taken",
              args: {
                name: "BACKUP_DESCRIPTION",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--expiry-time",
              description:
                "Specifies when the final backup expires. The Maximum time allowed is 365 days from now. Format: YYYY-MM-DDTHH:MM:SS. Provide either ttl-days or expiry-time",
              args: {
                name: "EXPIRY_TIME",
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
            {
              name: "--ttl-days",
              description:
                "Specifies the number of days to retain the final backup. The valid range is between 1 and 365. The Default value is 30 days. Provide either ttl-days or expiry-time",
              args: {
                name: "TTL_DAYS",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "NAME",
            description:
              "The NAME of the backup. To find the NAME, run the following command: $ gcloud sql backups list --filter=type:FINAL instance:{instance}",
          },
        },
        {
          name: "restore",
          description: "Restores a backup of a Cloud SQL instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optActivationPolicy,
            optActiveDirectoryDnsServers,
            optActiveDirectoryDomain,
            optActiveDirectoryMode,
            optActiveDirectoryOrganizationalUnit,
            optActiveDirectorySecretManagerKey,
            optAllowedPscProjects,
            optAssignIp,
            optAsync,
            optAuditBucketPath,
            optAuditRetentionInterval,
            optAuditUploadInterval,
            optAuthorizedNetworks,
            {
              name: "--auto-scale-disable-scale-in",
              description:
                "Disables automatic read pool scale-in. When disabled, read pool auto scaling only supports increasing the read pool node count. By default, both automatic read pool scale-in and scale-out are enabled",
              hidden: true,
            },
            {
              name: "--auto-scale-enabled",
              description:
                "Enables read pool auto scaling. Supports automatically increasing and decreasing the read pool's node count based on need",
              hidden: true,
            },
            {
              name: "--auto-scale-in-cooldown-seconds",
              description:
                "The cooldown period for automatic read pool scale-in. Minimum time between scale-in events. Must be an integer value. For example, if the value is 60, then a scale-in event will not be triggered within 60 seconds of the last scale-in event",
              hidden: true,
              args: {
                name: "AUTO_SCALE_IN_COOLDOWN_SECONDS",
              },
            },
            {
              name: "--auto-scale-max-node-count",
              description: "Maximum number of read pool nodes to be maintained",
              hidden: true,
              args: {
                name: "AUTO_SCALE_MAX_NODE_COUNT",
              },
            },
            {
              name: "--auto-scale-min-node-count",
              description: "Minimum number of read pool nodes to be maintained",
              hidden: true,
              args: {
                name: "AUTO_SCALE_MIN_NODE_COUNT",
              },
            },
            {
              name: "--auto-scale-out-cooldown-seconds",
              description:
                "The cooldown period for automatic read pool scale-out. Minimum time between scale-out events. Must be an integer value. For example, if the value is 60, then a scale-out event will not be triggered within 60 seconds of the last scale-out event",
              hidden: true,
              args: {
                name: "AUTO_SCALE_OUT_COOLDOWN_SECONDS",
              },
            },
            {
              name: "--auto-scale-target-metrics",
              description:
                "Target metrics for read pool auto scaling. Options are: AVERAGE_CPU_UTILIZATION and AVERAGE_DB_CONNECTIONS. Example: --auto-scale-target-metrics=AVERAGE_CPU_UTILIZATION=0.8",
              hidden: true,
              args: {
                name: "METRIC=VALUE",
                description: "Dict",
              },
            },
            optAvailabilityType,
            optBackup,
            {
              name: "--backup-instance",
              description:
                "The ID of the instance that the backup was taken from. This argument must be specified when the backup instance is different from the restore instance. If it is not specified, the backup instance is considered the same as the restore instance. This flag is not supported when restore happens from backup name, only supported when restore happens from backup ID in timestamp format",
              args: {
                name: "BACKUP_INSTANCE",
                description: "String",
              },
            },
            optBackupLocation,
            {
              name: "--backup-project",
              description:
                "The project of the instance to which the backup belongs. If it isn't specified, backup and restore instances are in the same project. This flag is not supported when restore happens from backup name, only supported when restore happens from backup ID in timestamp format",
              args: {
                name: "BACKUP_PROJECT",
                description: "String",
              },
            },
            optBackupStartTime,
            optBillingProject,
            optClearActiveDirectory,
            optClearActiveDirectoryDnsServers,
            {
              name: "--clear-disk-encryption",
              description: "Disables CMEK in the restored instance",
              args: {
                name: "CLEAR_DISK_ENCRYPTION",
                description: "String",
              },
            },
            {
              name: "--clear-network",
              description:
                "Clears the network setting. This is useful to restore a backup to a different project or region where the original network configuration isn't available",
            },
            optCollation,
            optConfiguration,
            optConnectorEnforcement,
            optCpu,
            {
              name: "--database-version",
              description:
                "The database engine type and versions. If left unspecified, no changes occur. See the list of database versions at https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/SqlDatabaseVersion. Note for restore to new instance major version upgrades are not supported. Only minor version upgrades are allowed",
              args: {
                name: "DATABASE_VERSION",
                description: "String",
              },
            },
            optDeletionProtection,
            optDenyMaintenancePeriodEndDate,
            optDenyMaintenancePeriodStartDate,
            optDenyMaintenancePeriodTime,
            optDiskEncryptionKey,
            optDiskEncryptionKeyKeyring,
            optDiskEncryptionKeyLocation,
            optDiskEncryptionKeyProject,
            optEdition,
            optEnableBinLog,
            {
              name: "--enable-data-cache",
              description:
                "Enable use of data cache for accelerated read performance. This flag is only available for Enterprise_Plus edition instances",
              hidden: true,
            },
            {
              name: "--enable-dataplex-integration",
              description: "Enable Dataplex integration for Google Cloud SQL",
              hidden: true,
            },
            {
              name: "--enable-google-ml-integration",
              description:
                "Enable Vertex AI integration for Google Cloud SQL. You can integrate Vertex AI with Cloud SQL for MySQL and Cloud SQL for PostgreSQL instances only",
              hidden: true,
            },
            optEnableGooglePrivatePath,
            optEnablePointInTimeRecovery,
            optEnablePrivateServiceConnect,
            optFinalBackup,
            optFinalBackupRetentionDays,
            optFlagsFile,
            optFlatten,
            optFormat,
            optGceZone,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInsightsConfigEnhancedQueryInsightsEnabled,
            optInsightsConfigQueryInsightsEnabled,
            optInsightsConfigQueryPlansPerMinute,
            optInsightsConfigQueryStringLength,
            optInsightsConfigRecordApplicationTags,
            optInsightsConfigRecordClientAddress,
            optLogHttp,
            optMaintenanceReleaseChannel,
            optMaintenanceWindowDay,
            optMaintenanceWindowHour,
            optMemory,
            optNetwork,
            optNoAssignIp,
            optNoAsync,
            {
              name: "--no-auto-scale-disable-scale-in",
              description:
                "Disables automatic read pool scale-in. When disabled, read pool auto scaling only supports increasing the read pool node count. By default, both automatic read pool scale-in and scale-out are enabled",
              hidden: true,
            },
            {
              name: "--no-auto-scale-enabled",
              description:
                "Enables read pool auto scaling. Supports automatically increasing and decreasing the read pool's node count based on need",
              hidden: true,
            },
            {
              name: "--no-backup",
              description: "Enables daily backup",
              hidden: true,
            },
            optNoClearActiveDirectory,
            optNoClearActiveDirectoryDnsServers,
            {
              name: "--no-clear-network",
              description:
                "Clears the network setting. This is useful to restore a backup to a different project or region where the original network configuration isn't available",
              hidden: true,
            },
            optNoDeletionProtection,
            optNoEnableBinLog,
            {
              name: "--no-enable-data-cache",
              description:
                "Enable use of data cache for accelerated read performance. This flag is only available for Enterprise_Plus edition instances",
              hidden: true,
            },
            {
              name: "--no-enable-dataplex-integration",
              description: "Enable Dataplex integration for Google Cloud SQL",
              hidden: true,
            },
            {
              name: "--no-enable-google-ml-integration",
              description:
                "Enable Vertex AI integration for Google Cloud SQL. You can integrate Vertex AI with Cloud SQL for MySQL and Cloud SQL for PostgreSQL instances only",
              hidden: true,
            },
            optNoEnableGooglePrivatePath,
            optNoEnablePointInTimeRecovery,
            optNoEnablePrivateServiceConnect,
            optNoFinalBackup,
            {
              name: "--no-insights-config-enhanced-query-insights-enabled",
              description:
                "Enable enhanced query insights for Enterprise Plus edition to provide more detailed query analytics",
              hidden: true,
            },
            {
              name: "--no-insights-config-query-insights-enabled",
              description:
                "Enable query insights feature to provide query and query plan analytics",
              hidden: true,
            },
            {
              name: "--no-insights-config-record-application-tags",
              description:
                "Allow application tags to be recorded by the query insights feature",
              hidden: true,
            },
            {
              name: "--no-insights-config-record-client-address",
              description:
                "Allow the client address to be recorded by the query insights feature",
              hidden: true,
            },
            optNoRequireSsl,
            {
              name: "--no-retain-backups-on-delete",
              description:
                "Retain automated/ondemand backups of the instance after the instance is deleted",
              hidden: true,
            },
            optNoStorageAutoIncrease,
            optProject,
            {
              name: "--psc-auto-connections",
              description:
                'A comma-separated list of networks or network-project pairs. Each project is represented by a project number (numeric) or by a project ID (alphanumeric). This allows Private Service Connect connections to be created automatically for the specified networks. For example, this connection uses "the form `psc-auto-connections`=`network=projects/testproject1/global/networks/testnetwork1`" or "the form `psc-auto-connections`=`project=testproject1,network=projects/testproject1/global/networks/testnetwork1`"',
              hidden: true,
              args: {
                name: "PSC_AUTO_CONNECTIONS",
                description: "Dict",
              },
            },
            optQuiet,
            optRegion,
            optRequireSsl,
            {
              name: "--restore-instance",
              description:
                "The ID of the target Cloud SQL instance that the backup is restored to",
              priority: 100,
              args: {
                name: "RESTORE_INSTANCE",
                description: "String",
              },
            },
            {
              name: "--retain-backups-on-delete",
              description:
                "Retain automated/ondemand backups of the instance after the instance is deleted",
              hidden: true,
            },
            optRetainedBackupsCount,
            optRetainedTransactionLogDays,
            optSecondaryZone,
            {
              name: "--server-ca-mode",
              description: "Set the server CA mode of the instance",
              hidden: true,
              args: {
                name: "SERVER_CA_MODE",
                description: "String",
                suggestions: [
                  "CUSTOMER_MANAGED_CAS_CA",
                  "GOOGLE_MANAGED_CAS_CA",
                  "GOOGLE_MANAGED_INTERNAL_CA",
                ],
              },
            },
            optSslMode,
            optStorageAutoIncrease,
            optStorageProvisionedIops,
            optStorageProvisionedThroughput,
            optStorageSize,
            optStorageType,
            {
              name: "--tags",
              description:
                "Comma-separated list of tags to set on the instance. Use an equals signto separate tag name and value.(e.g., `--tags tag1:value1,tag2=value2`)",
              hidden: true,
              args: {
                name: "TAG=VALUE",
                description: "Dict",
              },
            },
            optTier,
            optTimeZone,
            optTimeout,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optZone,
          ],
          args: {
            name: "ID",
            description:
              "The ID of the backup run to restore from or the backup NAME for restore to existing/new instance. To find the NAME, run the following command: $ gcloud sql backups list --filter=instance:{instance}",
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
      name: "connect",
      description: "Connects to a Cloud SQL instance",
      options: [
        optAccessTokenFile,
        optAccount,
        {
          name: "--auto-iam-authn",
          description:
            "Enables IAM database authentication for connections to MySQL and Postgres instances",
        },
        {
          name: "--auto-ip",
          description:
            "Connect to the Cloud SQL instance with auto IP detection",
        },
        optBillingProject,
        optConfiguration,
        {
          name: ["--database", "-d"],
          description: "The PostgreSQL or SQL Server database to connect to",
          args: {
            name: "DATABASE",
            description: "String",
          },
        },
        {
          name: "--debug-logs",
          description: "Enable verbose debug logs for Cloud SQL Proxy",
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
          name: "--no-auto-iam-authn",
          description:
            "Enables IAM database authentication for connections to MySQL and Postgres instances",
          hidden: true,
        },
        {
          name: "--no-auto-ip",
          description:
            "Connect to the Cloud SQL instance with auto IP detection",
          hidden: true,
        },
        {
          name: "--no-debug-logs",
          description: "Enable verbose debug logs for Cloud SQL Proxy",
          hidden: true,
        },
        {
          name: "--no-private-ip",
          description: "Connect to the Cloud SQL instance using private IP",
          hidden: true,
        },
        {
          name: "--no-psc",
          description:
            "Connect to the Cloud SQL instance using Private Service Connect",
          hidden: true,
        },
        {
          name: "--no-run-connection-test",
          description: "Run connection test for Cloud SQL Proxy",
          hidden: true,
        },
        {
          name: "--no-skip-ssl",
          description: "Skip SSL certificate verification for MySQL instances",
          hidden: true,
        },
        {
          name: "--port",
          description:
            "Port number that gcloud will use to connect to the Cloud SQL Proxy through localhost",
          args: {
            name: "PORT",
            description: "Int",
          },
        },
        {
          name: "--private-ip",
          description: "Connect to the Cloud SQL instance using private IP",
        },
        optProject,
        {
          name: "--psc",
          description:
            "Connect to the Cloud SQL instance using Private Service Connect",
        },
        optQuiet,
        {
          name: "--run-connection-test",
          description: "Run connection test for Cloud SQL Proxy",
        },
        {
          name: "--skip-ssl",
          description: "Skip SSL certificate verification for MySQL instances",
        },
        optTraceToken,
        {
          name: ["--user", "-u"],
          description: "Cloud SQL instance user to connect as",
          args: {
            name: "USER",
            description: "String",
          },
        },
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "INSTANCE",
        description: "Cloud SQL instance ID",
      },
    },
    {
      name: "databases",
      description:
        "Provide commands for managing databases of Cloud SQL instances",
      subcommands: [
        {
          name: "create",
          description: "Creates a database for a Cloud SQL instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--charset",
              description:
                "Cloud SQL database charset setting, which specifies the set of symbols and encodings used to store the data in your database. Each database version may support a different set of charsets",
              args: {
                name: "CHARSET",
                description: "String",
              },
            },
            {
              name: "--collation",
              description:
                "Cloud SQL database collation setting, which specifies the set of rules for comparing characters in a character set. Each database version may support a different set of collations. For PostgreSQL database versions, this may only be set to the collation of the template database",
              args: {
                name: "COLLATION",
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
            optInstance,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DATABASE",
            description: "Cloud SQL database name",
          },
        },
        {
          name: "delete",
          description: "Deletes a Cloud SQL database",
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
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DATABASE",
            description: "Cloud SQL database name",
          },
        },
        {
          name: "describe",
          description:
            "Displays configuration and metadata about a Cloud SQL database",
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
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DATABASE",
            description: "Cloud SQL database name",
          },
        },
        {
          name: "list",
          description: "Lists databases for a Cloud SQL instance",
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
          name: "patch",
          description: "Patches the settings of a Cloud SQL database",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--charset",
              description:
                "Cloud SQL database charset setting, which specifies the set of symbols and encodings used to store the data in your database. Each database version may support a different set of charsets",
              args: {
                name: "CHARSET",
                description: "String",
              },
            },
            {
              name: "--collation",
              description:
                "Cloud SQL database collation setting, which specifies the set of rules for comparing characters in a character set. Each database version may support a different set of collations. This flag can't be used with PostgreSQL instances",
              args: {
                name: "COLLATION",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--diff",
              description: "Show what changed as a result of the patch",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance,
            optLogHttp,
            {
              name: "--no-diff",
              description: "Show what changed as a result of the patch",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DATABASE",
            description: "Cloud SQL database name",
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
      name: "export",
      description: "Provide commands to export Cloud SQL instances",
      subcommands: [
        {
          name: "bak",
          description: "Export data from a Cloud SQL instance to a BAK file",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--bak-type",
              description:
                "Type of bak file that will be exported, FULL or DIFF. SQL Server only. _BAK_TYPE_ must be one of: *FULL*, *DIFF*, *TLOG*",
              args: {
                name: "BAK_TYPE",
                description: "String",
                suggestions: ["FULL", "DIFF", "TLOG"],
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: ["--database", "-d"],
              description:
                "Database from which the export is made. Information on requirements can be found here: https://cloud.google.com/sql/docs/sqlserver/admin-api/v1beta4/instances/export#exportContext.databases",
              args: {
                name: "DATABASE",
                description: "List",
              },
            },
            {
              name: "--differential-base",
              description:
                "Whether the bak file export can be used as differential base for future differential backup. SQL Server only",
            },
            {
              name: "--export-log-end-time",
              description:
                "Optional flag. The end time of the transaction log files that are included in the export file. Use this flag to export transaction logs for Cloud SQL for SQL Server only. Format: YYYY-MM-DDTHH:MM:SSZ, UTC timezone only",
              args: {
                name: "EXPORT_LOG_END_TIME",
              },
            },
            {
              name: "--export-log-start-time",
              description:
                "Optional flag. The start time of the transaction log files that are included in the export file. Use this flag to export transaction logs for Cloud SQL for SQL Server only. Format: YYYY-MM-DDTHH:MM:SSZ, UTC timezone only",
              args: {
                name: "EXPORT_LOG_START_TIME",
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
              name: "--no-differential-base",
              description:
                "Whether the bak file export can be used as differential base for future differential backup. SQL Server only",
              hidden: true,
            },
            {
              name: "--no-striped",
              description: "Whether SQL Server export should be striped",
            },
            optProject,
            optQuiet,
            {
              name: ["--stripe-count", "--stripe_count"],
              description:
                "Specifies the number of stripes to use for SQL Server exports",
              args: {
                name: "STRIPE_COUNT",
                description: "Int",
              },
            },
            {
              name: "--striped",
              description:
                "Whether SQL Server export should be striped. Use *--striped* to enable and *--no-striped* to disable",
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "INSTANCE",
              description: "Cloud SQL instance ID",
            },
            {
              name: "URI",
              description:
                "The path to the file in Google Cloud Storage where the export will be stored. The URI is in the form gs://bucketName/fileName. If the file already exists, the operation fails",
            },
          ],
        },
        {
          name: "csv",
          description: "Exports data from a Cloud SQL instance to a CSV file",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optDatabase,
            {
              name: "--escape",
              description:
                'Specifies the character that should appear before a data character that needs to be escaped. The value of this argument has to be a character in Hex ASCII Code. For example, "22" represents double quotes. This flag is only available for MySQL and Postgres. If this flag is not provided, double quotes character will be used as the default value',
              args: {
                name: "ESCAPE",
                description: "String",
              },
            },
            {
              name: "--fields-terminated-by",
              description:
                'Specifies the character that splits column values. The value of this argument has to be a character in Hex ASCII Code. For example, "2C" represents a comma. This flag is only available for MySQL and Postgres. If this flag is not provided, a comma character will be used as the default value',
              args: {
                name: "FIELDS_TERMINATED_BY",
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
              name: "--lines-terminated-by",
              description:
                'Specifies the character that split line records. The value of this argument has to be a character in Hex ASCII Code. For example, "0A" represents a new line. This flag is only available for MySQL. If this flag is not provided, a new line character will be used as the default value',
              args: {
                name: "LINES_TERMINATED_BY",
                description: "String",
              },
            },
            optLogHttp,
            optNoAsync,
            {
              name: "--no-offload",
              description:
                "Offload an export to a temporary instance. Doing so reduces strain on source instances and allows other operations to be performed while the export is in progress",
              hidden: true,
            },
            {
              name: "--offload",
              description:
                "Offload an export to a temporary instance. Doing so reduces strain on source instances and allows other operations to be performed while the export is in progress",
            },
            optProject,
            {
              name: "--query",
              description:
                "A SQL SELECT query (e.g., SELECT * FROM table) that specifies the data to export. WARNING: While in-transit, the query might be processed in intermediate locations other than the location of the target instance",
              priority: 100,
              args: {
                name: "QUERY",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--quote",
              description:
                'Specifies the character that encloses values from columns that have string data type. The value of this argument has to be a character in Hex ASCII Code. For example, "22" represents double quotes. This flag is only available for MySQL and Postgres. If this flag is not provided, double quotes character will be used as the default value',
              args: {
                name: "QUOTE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "INSTANCE",
              description: "Cloud SQL instance ID",
            },
            {
              name: "URI",
              description:
                "The path to the file in Google Cloud Storage where the export will be stored. The URI is in the form gs://bucketName/fileName. If the file already exists, the operation fails. If the filename ends with .gz, the contents are compressed",
            },
          ],
        },
        {
          name: "sql",
          description: "Exports data from a Cloud SQL instance to a SQL file",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--clean",
              description:
                "Include SQL statements (DROP <object>) required to drop database objects prior to import; corresponds to the clean flag for pg_dump. Only applies to PostgreSQL non-parallel exports",
            },
            optConfiguration,
            optDatabase,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--if-exists",
              description:
                "Include an SQL statement (IF EXISTS) with each drop statement produced by the clean flag; corresponds to the if-exists flag for pg_dump. Only applies to PostgreSQL non-parallel exports",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-clean",
              description:
                "Include SQL statements (DROP <object>) required to drop database objects prior to import; corresponds to the clean flag for pg_dump. Only applies to PostgreSQL non-parallel exports",
              hidden: true,
            },
            {
              name: "--no-if-exists",
              description:
                "Include an SQL statement (IF EXISTS) with each drop statement produced by the clean flag; corresponds to the if-exists flag for pg_dump. Only applies to PostgreSQL non-parallel exports",
              hidden: true,
            },
            {
              name: "--no-offload",
              description:
                "Offload an export to a temporary instance. Doing so reduces strain on source instances and allows other operations to be performed while the export is in progress",
              hidden: true,
            },
            {
              name: "--no-parallel",
              description:
                "Perform a parallel export. This flag is only applicable to MySQL and Postgres. When this flag is used, the URI specifies a folder in the Cloud Storage bucket. After the parallel export completes, you will have multiple files in that folder",
              hidden: true,
            },
            {
              name: "--offload",
              description:
                "Offload an export to a temporary instance. Doing so reduces strain on source instances and allows other operations to be performed while the export is in progress",
            },
            {
              name: "--parallel",
              description:
                "Perform a parallel export. This flag is only applicable to MySQL and Postgres. When this flag is used, the URI specifies a folder in the Cloud Storage bucket. After the parallel export completes, you will have multiple files in that folder",
            },
            optProject,
            optQuiet,
            {
              name: ["--table", "-t"],
              description:
                "Tables to export from the specified database. If you specify tables, specify one and only one database. For PostgreSQL instances, only one table can be exported at a time",
              args: {
                name: "TABLE",
                description: "List",
              },
            },
            {
              name: "--threads",
              description:
                "Specifies the number of threads to use for the parallel export. If `--parallel` is specified and this flag is not provided, Cloud SQL uses a default thread count to optimize performance",
              args: {
                name: "THREADS",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "INSTANCE",
              description: "Cloud SQL instance ID",
            },
            {
              name: "URI",
              description:
                "The path to the file in Google Cloud Storage where the export will be stored. The URI is in the form gs://bucketName/fileName. If the file already exists, the operation fails. If the filename ends with .gz, the contents are compressed",
            },
          ],
        },
        {
          name: "tde",
          description:
            "Export a TDE certificate from a Cloud SQL for SQL Server instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--cert-path",
              description:
                "Path to the encryption certificate file in Google Cloud Storage. The URI is in the form `gs://bucketName/fileName`",
              priority: 100,
              args: {
                name: "CERT_PATH",
                description: "String",
              },
            },
            {
              name: "--certificate",
              description: "Name of the encryption certificate",
              priority: 100,
              args: {
                name: "CERTIFICATE",
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
            {
              name: "--no-prompt-for-pvk-password",
              description:
                "Prompt for the private key password associated with the certificate file with character echo disabled. The password is all typed characters up to but not including the RETURN or ENTER key",
              hidden: true,
            },
            optProject,
            {
              name: "--prompt-for-pvk-password",
              description:
                "Prompt for the private key password associated with the certificate file with character echo disabled. The password is all typed characters up to but not including the RETURN or ENTER key",
            },
            {
              name: "--pvk-password",
              description:
                "The private key password associated with the certificate file",
              args: {
                name: "PVK_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--pvk-path",
              description:
                "Path to the encryption private key file in Google Cloud Storage. The URI is in the form `gs://bucketName/fileName`",
              priority: 100,
              args: {
                name: "PVK_PATH",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description: "Cloud SQL instance ID",
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
      name: "flags",
      description: "Provide a command to list flags",
      subcommands: [
        {
          name: "list",
          description: "List customizable flags for Google Cloud SQL instances",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--database-version",
              description:
                "The database engine type and versions. If left unspecified, MYSQL_8_0 is used. See the list of database versions at https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/SqlDatabaseVersion. Apart from listed major versions, DATABASE_VERSION also accepts supported minor versions. _DATABASE_VERSION_ must be one of: *MYSQL_5_6*, *MYSQL_5_7*, *MYSQL_8_0*, *MYSQL_8_4*, *MYSQL_9_7*, *POSTGRES_9_6*, *POSTGRES_10*, *POSTGRES_11*, *POSTGRES_12*, *POSTGRES_13*, *POSTGRES_14*, *POSTGRES_15*, *POSTGRES_16*, *POSTGRES_17*, *POSTGRES_18*, *SQLSERVER_2017_EXPRESS*, *SQLSERVER_2017_WEB*, *SQLSERVER_2017_STANDARD*, *SQLSERVER_2017_ENTERPRISE*, *SQLSERVER_2019_EXPRESS*, *SQLSERVER_2019_WEB*, *SQLSERVER_2019_STANDARD*, *SQLSERVER_2019_ENTERPRISE*, *SQLSERVER_2022_EXPRESS*, *SQLSERVER_2022_WEB*, *SQLSERVER_2022_STANDARD*, *SQLSERVER_2022_ENTERPRISE*, *SQLSERVER_2025_EXPRESS*, *SQLSERVER_2025_STANDARD*, *SQLSERVER_2025_ENTERPRISE*",
              args: {
                name: "DATABASE_VERSION",
                description: "String",
                suggestions: [
                  "MYSQL_5_6",
                  "MYSQL_5_7",
                  "MYSQL_8_0",
                  "MYSQL_8_4",
                  "MYSQL_9_7",
                  "POSTGRES_9_6",
                  "POSTGRES_10",
                  "POSTGRES_11",
                  "POSTGRES_12",
                  "POSTGRES_13",
                  "POSTGRES_14",
                  "POSTGRES_15",
                  "POSTGRES_16",
                  "POSTGRES_17",
                  "POSTGRES_18",
                  "SQLSERVER_2017_EXPRESS",
                  "SQLSERVER_2017_WEB",
                  "SQLSERVER_2017_STANDARD",
                  "SQLSERVER_2017_ENTERPRISE",
                  "SQLSERVER_2019_EXPRESS",
                  "SQLSERVER_2019_WEB",
                  "SQLSERVER_2019_STANDARD",
                  "SQLSERVER_2019_ENTERPRISE",
                  "SQLSERVER_2022_EXPRESS",
                  "SQLSERVER_2022_WEB",
                  "SQLSERVER_2022_STANDARD",
                  "SQLSERVER_2022_ENTERPRISE",
                  "SQLSERVER_2025_EXPRESS",
                  "SQLSERVER_2025_STANDARD",
                  "SQLSERVER_2025_ENTERPRISE",
                ],
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
      name: "generate-login-token",
      description: "Generate an IAM login token for Cloud SQL",
      options: [
        optAccessTokenFile,
        optAccount,
        {
          name: "--application-default-credential",
          description:
            "Use application default credentials to generate the login token",
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
        optInstance2,
        optLogHttp,
        {
          name: "--no-application-default-credential",
          description:
            "Use application default credentials to generate the login token",
          hidden: true,
        },
        optProject,
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "import",
      description: "Provides commands to import Cloud SQL instances",
      subcommands: [
        {
          name: "bak",
          description: "Import data into a Cloud SQL instance from a BAK file",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--bak-type",
              description:
                "Type of bak file that will be imported. Applicable to SQL Server only. _BAK_TYPE_ must be one of: *FULL*, *DIFF*, *TLOG*",
              args: {
                name: "BAK_TYPE",
                description: "String",
                suggestions: ["FULL", "DIFF", "TLOG"],
              },
            },
            optBillingProject,
            {
              name: "--cert-path",
              description:
                "Path to the encryption certificate file in Google Cloud Storage associated with the BAK file. The URI is in the form `gs://bucketName/fileName`",
              priority: 100,
              args: {
                name: "CERT_PATH",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: ["--database", "-d"],
              description: "A new database into which the import is made",
              priority: 100,
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
              name: "--keep-encrypted",
              description:
                "Whether or not to decrypt the imported encrypted BAK file",
            },
            optLogHttp,
            optNoAsync,
            {
              name: "--no-keep-encrypted",
              description:
                "Whether or not to decrypt the imported encrypted BAK file",
              hidden: true,
            },
            {
              name: "--no-prompt-for-pvk-password",
              description:
                "Prompt for the private key password associated with the BAK file with character echo disabled. The password is all typed characters up to but not including the RETURN or ENTER key",
              hidden: true,
            },
            {
              name: "--no-recovery",
              description:
                "Whether or not the SQL Server import is executed with NORECOVERY keyword",
            },
            {
              name: "--no-recovery-only",
              description:
                "Whether or not the SQL Server import skip download and bring database online",
              hidden: true,
            },
            {
              name: "--no-striped",
              description: "Whether SQL Server import should be striped",
            },
            optProject,
            {
              name: "--prompt-for-pvk-password",
              description:
                "Prompt for the private key password associated with the BAK file with character echo disabled. The password is all typed characters up to but not including the RETURN or ENTER key",
            },
            {
              name: "--pvk-password",
              description:
                "The private key password associated with the BAK file",
              args: {
                name: "PVK_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--pvk-path",
              description:
                "Path to the encryption private key file in Google Cloud Storage associated with the BAK file. The URI is in the form `gs://bucketName/fileName`",
              priority: 100,
              args: {
                name: "PVK_PATH",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--recovery-only",
              description:
                "Whether or not the SQL Server import skip download and bring database online",
            },
            {
              name: "--stop-at",
              description:
                "Equivalent to SQL Server STOPAT keyword. Used in transaction log import only. Transaction log import stop at this timestamp. Format: YYYY-MM-DDTHH:MM:SS",
              args: {
                name: "STOP_AT",
              },
            },
            {
              name: "--stop-at-mark",
              description:
                "Equivalent to SQL Server STOPATMARK keyword. Used in transaction log import only. Transaction log import stop at the given mark. To stop at given LSN, use --stop-at-mark=lsn:xxx",
              args: {
                name: "STOP_AT_MARK",
                description: "String",
              },
            },
            {
              name: "--striped",
              description:
                "Whether SQL Server import should be striped. Use *--striped* to enable and *--no-striped* to disable",
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "INSTANCE",
              description: "Cloud SQL instance ID",
            },
            {
              name: "URI",
              description:
                "Path to the BAK file file in Google Cloud Storage from which the import is made. The URI is in the form `gs://bucketName/fileName`",
              isOptional: true,
            },
          ],
        },
        {
          name: "csv",
          description: "Imports data into a Cloud SQL instance from a CSV file",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--columns",
              description:
                "The columns to import from csv file. These correspond to actual database columns to import. If not set, all columns from csv file are imported to corresponding database columns",
              args: {
                name: "COLUMNS",
                description: "List",
              },
            },
            optConfiguration,
            {
              name: ["--database", "-d"],
              description:
                "The database (for example, guestbook) to which the import is made",
              priority: 100,
              args: {
                name: "DATABASE",
                description: "String",
              },
            },
            {
              name: "--escape",
              description:
                'Specifies the character that should appear before a data character that needs to be escaped. The value of this argument has to be a character in Hex ASCII Code. For example, "22" represents double quotes. This flag is only available for MySQL and Postgres. If this flag is not provided, double quotes character will be used as the default value',
              args: {
                name: "ESCAPE",
                description: "String",
              },
            },
            {
              name: "--fields-terminated-by",
              description:
                'Specifies the character that splits column values. The value of this argument has to be a character in Hex ASCII Code. For example, "2C" represents a comma. This flag is only available for MySQL and Postgres. If this flag is not provided, a comma character will be used as the default value',
              args: {
                name: "FIELDS_TERMINATED_BY",
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
              name: "--lines-terminated-by",
              description:
                'Specifies the character that split line records. The value of this argument has to be a character in Hex ASCII Code. For example, "0A" represents a new line. This flag is only available for MySQL. If this flag is not provided, a new line character will be used as the default value',
              args: {
                name: "LINES_TERMINATED_BY",
                description: "String",
              },
            },
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--quote",
              description:
                'Specifies the character that encloses values from columns that have string data type. The value of this argument has to be a character in Hex ASCII Code. For example, "22" represents double quotes. This flag is only available for MySQL and Postgres. If this flag is not provided, double quotes character will be used as the default value',
              args: {
                name: "QUOTE",
                description: "String",
              },
            },
            {
              name: "--table",
              description: "The database table to import csv file into",
              priority: 100,
              args: {
                name: "TABLE",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--user",
              description: "PostgreSQL user for this import operation",
              args: {
                name: "USER",
                description: "String",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "INSTANCE",
              description: "Cloud SQL instance ID",
            },
            {
              name: "URI",
              description:
                "Path to the CSV file in Google Cloud Storage from which the import is made. The URI is in the form `gs://bucketName/fileName`. Compressed gzip files (.gz) are also supported",
            },
          ],
        },
        {
          name: "sql",
          description:
            "Imports data into a Cloud SQL instance from a SQL dump file",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--clean",
              description:
                "Option to clean (DROP) database objects before recreating them. corresponds to the clean flag for pg_restore. Only applies if --parallel is set. PostgreSQL only",
            },
            optConfiguration,
            {
              name: ["--database", "-d"],
              description:
                "Database to which the import is made. The database needs to be created before importing. If not set, it is assumed that the database is specified in the file to be imported. If your SQL dump file includes a database statement, it will override the database set in this flag",
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
            {
              name: "--if-exists",
              description:
                "Include an SQL statement (IF EXISTS) with each DROP statement produced by --clean; corresponds to the if-exists flag for pg_restore. Only applies if --parallel is set. PostgreSQL only",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-clean",
              description:
                "Option to clean (DROP) database objects before recreating them. corresponds to the clean flag for pg_restore. Only applies if --parallel is set. PostgreSQL only",
              hidden: true,
            },
            {
              name: "--no-if-exists",
              description:
                "Include an SQL statement (IF EXISTS) with each DROP statement produced by --clean; corresponds to the if-exists flag for pg_restore. Only applies if --parallel is set. PostgreSQL only",
              hidden: true,
            },
            {
              name: "--no-parallel",
              description:
                "Perform a parallel import. This flag is only applicable to MySQL and Postgres. When this flag is used, the URI specifies a folder in the Cloud Storage bucket where the multiple files to be imported are located",
              hidden: true,
            },
            {
              name: "--parallel",
              description:
                "Perform a parallel import. This flag is only applicable to MySQL and Postgres. When this flag is used, the URI specifies a folder in the Cloud Storage bucket where the multiple files to be imported are located",
            },
            optProject,
            optQuiet,
            {
              name: "--threads",
              description:
                "Specifies the number of threads to use for the parallel import. If `--parallel` is specified and this flag is not provided, Cloud SQL uses a default thread count to optimize performance",
              args: {
                name: "THREADS",
              },
            },
            optTraceToken,
            {
              name: "--user",
              description: "PostgreSQL user for this import operation",
              args: {
                name: "USER",
                description: "String",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "INSTANCE",
              description: "Cloud SQL instance ID",
            },
            {
              name: "URI",
              description:
                "Path to the MySQL dump file in Google Cloud Storage from which the import is made. The URI is in the form `gs://bucketName/fileName`. Compressed gzip files (.gz) are also supported",
            },
          ],
        },
        {
          name: "tde",
          description:
            "Import TDE certificate into a Cloud SQL for SQL Server instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--cert-path",
              description:
                "Path to the encryption certificate file in Google Cloud Storage. The URI is in the form `gs://bucketName/fileName`",
              priority: 100,
              args: {
                name: "CERT_PATH",
                description: "String",
              },
            },
            {
              name: "--certificate",
              description: "Name of the encryption certificate",
              priority: 100,
              args: {
                name: "CERTIFICATE",
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
            {
              name: "--no-prompt-for-pvk-password",
              description:
                "Prompt for the private key password associated with the certificate file with character echo disabled. The password is all typed characters up to but not including the RETURN or ENTER key",
              hidden: true,
            },
            optProject,
            {
              name: "--prompt-for-pvk-password",
              description:
                "Prompt for the private key password associated with the certificate file with character echo disabled. The password is all typed characters up to but not including the RETURN or ENTER key",
            },
            {
              name: "--pvk-password",
              description:
                "The private key password associated with the certificate file",
              args: {
                name: "PVK_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--pvk-path",
              description:
                "Path to the encryption private key file in Google Cloud Storage. The URI is in the form `gs://bucketName/fileName`",
              priority: 100,
              args: {
                name: "PVK_PATH",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description: "Cloud SQL instance ID",
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
      description: "Provide commands for managing Cloud SQL instances",
      subcommands: [
        {
          name: "acquire-ssrs-lease",
          description:
            "Acquires a SQL Server Reporting Services lease on a Cloud SQL instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--duration",
              description:
                "Time duration, in hours, that the lease will be active to allow SSRS setup. Default lease duration is 5 hours if this flag is not specified",
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
            optProject,
            optQuiet,
            {
              name: "--report-database",
              description:
                "Existing or new report database name in the Cloud SQL for SQL Server instance that is used for SSRS setup",
              priority: 100,
              args: {
                name: "REPORT_DATABASE",
                description: "String",
              },
            },
            {
              name: "--service-login",
              description:
                "Existing login in the Cloud SQL for SQL Server instance that is used as the service login for SSRS setup",
              priority: 100,
              args: {
                name: "SERVICE_LOGIN",
                description: "String",
              },
            },
            {
              name: "--setup-login",
              description:
                "Existing login in the Cloud SQL for SQL Server instance that is used as the setup login for SSRS setup",
              priority: 100,
              args: {
                name: "SETUP_LOGIN",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description: "Cloud SQL instance ID",
          },
        },
        {
          name: "clone",
          description: "Clones a Cloud SQL instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--bin-log-file-name",
              description:
                "The name of the binary log file. Enable point-in-time recovery on the source instance to create a binary log file. If specified with <--bin-log-position> to form a valid binary log coordinate, it defines an earlier point in time to clone a source instance from. For example, mysql-bin.000001",
              priority: 100,
              args: {
                name: "BIN_LOG_FILE_NAME",
                description: "String",
              },
            },
            {
              name: "--bin-log-position",
              description:
                "Represents the state of an instance at any given point in time inside a binary log file. If specified along with <--bin-log-file-name> to form a valid binary log coordinate, it defines an earlier point in time to clone a source instance from. For example, 123 (a numeric value)",
              priority: 100,
              args: {
                name: "BIN_LOG_POSITION",
                description: "Int",
              },
            },
            optConfiguration,
            {
              name: "--destination-network",
              description:
                "The fully qualified URI of the VPC network to which the cloned instance will be connected via Private Services Access for private IP. For example: `projects/my-network-project/global/networks/my-network`. This field is required only for cross-project cloning",
              hidden: true,
              args: {
                name: "DESTINATION_NETWORK",
                description: "String",
              },
            },
            {
              name: "--destination-project",
              description:
                "The project ID of the destination project where the cloned instance will be created. To perform a cross-project clone, this field is required. If not specified, the clone is created in the same project as the source instance",
              hidden: true,
              args: {
                name: "DESTINATION_PROJECT",
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
            optNoAsync,
            {
              name: "--point-in-time",
              description:
                "Represents the state of an instance at any given point in time inside a transaction log file. For MySQL, the binary log file is used for transaction logs. For PostgreSQL, the write-ahead log file is used for transaction logs. For SQL Server, the log backup file is used for such purpose. To create a transaction log, enable point-in-time recovery on the source instance. Instance should have transaction logs accumulated up to the point in time they want to restore up to. Uses RFC 3339 format in UTC timezone. If specified, defines a past state of the instance to clone. For example, '2012-11-15T16:19:00.094Z'",
              priority: 100,
              args: {
                name: "POINT_IN_TIME",
              },
            },
            {
              name: "--preferred-secondary-zone",
              description:
                "The preferred secondary zone for the cloned regional instance. If you specify a value for this flag, then the destination instance uses the value as the secondary zone. The secondary zone can't be the same as the primary zone",
              args: {
                name: "PREFERRED_SECONDARY_ZONE",
                description: "String",
              },
            },
            {
              name: "--preferred-zone",
              description:
                "The preferred zone for the cloned instance. If you specify a value for this flag, then the destination instance uses the value as the primary zone",
              args: {
                name: "PREFERRED_ZONE",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--restore-database-name",
              description:
                "The name of the database to be restored for a point-in-time restore. If set, the destination instance will only restore the specified database",
              args: {
                name: "RESTORE_DATABASE_NAME",
                description: "String",
              },
            },
            {
              name: "--source-instance-deletion-time",
              description:
                "The time the source instance was deleted. This is required if cloning from a deleted instance",
              args: {
                name: "SOURCE_INSTANCE_DELETION_TIME",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "SOURCE",
              description: "Cloud SQL instance ID of the source",
            },
            {
              name: "DESTINATION",
              description: "Cloud SQL instance ID of the clone",
            },
          ],
        },
        {
          name: "create",
          description: "Creates a new Cloud SQL instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optActivationPolicy,
            optActiveDirectoryDnsServers,
            optActiveDirectoryDomain,
            optActiveDirectoryMode,
            optActiveDirectoryOrganizationalUnit,
            optActiveDirectorySecretManagerKey,
            optAllowedPscProjects,
            optAssignIp,
            optAsync,
            optAuditBucketPath,
            optAuditRetentionInterval,
            optAuditUploadInterval,
            optAuthorizedNetworks,
            {
              name: "--auto-scale-disable-scale-in",
              description:
                "Disables automatic read pool scale-in. When disabled, read pool auto scaling only supports increasing the read pool node count. By default, both automatic read pool scale-in and scale-out are enabled. Use *--auto-scale-disable-scale-in* to enable and *--no-auto-scale-disable-scale-in* to disable",
            },
            {
              name: "--auto-scale-enabled",
              description:
                "Enables read pool auto scaling. Supports automatically increasing and decreasing the read pool's node count based on need. Use *--auto-scale-enabled* to enable and *--no-auto-scale-enabled* to disable",
            },
            {
              name: "--auto-scale-in-cooldown-seconds",
              description:
                "The cooldown period for automatic read pool scale-in. Minimum time between scale-in events. Must be an integer value. For example, if the value is 60, then a scale-in event will not be triggered within 60 seconds of the last scale-in event",
              args: {
                name: "AUTO_SCALE_IN_COOLDOWN_SECONDS",
              },
            },
            {
              name: "--auto-scale-max-node-count",
              description: "Maximum number of read pool nodes to be maintained",
              args: {
                name: "AUTO_SCALE_MAX_NODE_COUNT",
              },
            },
            {
              name: "--auto-scale-min-node-count",
              description: "Minimum number of read pool nodes to be maintained",
              args: {
                name: "AUTO_SCALE_MIN_NODE_COUNT",
              },
            },
            {
              name: "--auto-scale-out-cooldown-seconds",
              description:
                "The cooldown period for automatic read pool scale-out. Minimum time between scale-out events. Must be an integer value. For example, if the value is 60, then a scale-out event will not be triggered within 60 seconds of the last scale-out event",
              args: {
                name: "AUTO_SCALE_OUT_COOLDOWN_SECONDS",
              },
            },
            {
              name: "--auto-scale-target-metrics",
              description:
                "Target metrics for read pool auto scaling. Options are: AVERAGE_CPU_UTILIZATION and AVERAGE_DB_CONNECTIONS. Example: --auto-scale-target-metrics=AVERAGE_CPU_UTILIZATION=0.8",
              args: {
                name: "METRIC=VALUE",
                description: "Dict",
              },
            },
            optAvailabilityType,
            optBackup,
            optBackupLocation,
            optBackupStartTime,
            optBillingProject,
            {
              name: "--cascadable-replica",
              description:
                "Specifies whether a SQL Server replica is a cascadable replica. A cascadable replica is a SQL Server cross-region replica that supports replica(s) under it. This flag only takes effect when the `--master-instance-name` flag is set, and the replica under creation is in a different region than the primary instance",
            },
            optClearActiveDirectoryDnsServers,
            optCollation,
            optConfiguration,
            {
              name: "--connection-pool-flags",
              description:
                "Comma-separated list of connection pool flags to set on the instance connection pool. Use an equals sign to separate flag name and value. More information on available flags can be found here: https://cloud.google.com/sql/docs/mysql/managed-connection-pooling#configuration-options for MySQL and https://cloud.google.com/sql/docs/postgres/managed-connection-pooling#configuration-options for PostgreSQL. (e.g., `--connection-pool-flags max_pool_size=1000,max_client_connections=20`)",
              args: {
                name: "FLAG=VALUE",
                description: "Dict",
              },
            },
            optConnectorEnforcement,
            optCpu,
            {
              name: "--custom-subject-alternative-names",
              description:
                "A comma-separated list of DNS names to add to the instance's SSL certificate. A custom SAN is a structured way to add additional DNS names (host names) that are not managed by Cloud SQL to an instance. It allows for hostname verification during establishment of a database connection using the DNS name over SSL/TLS. When you create and/or update an instance, you can add a comma-separated list of up to three DNS names to the server certificate of your instance",
              args: {
                name: "DNS",
                description: "List",
              },
            },
            {
              name: "--data-api-access",
              description:
                "Controls connectivity to the instance using ExecuteSql API. _DATA_API_ACCESS_ must be one of:",
              args: {
                name: "DATA_API_ACCESS",
                description: "String",
                suggestions: [
                  "ALLOW_DATA_API",
                  "DATA_API_ACCESS_UNSPECIFIED",
                  "DISALLOW_DATA_API",
                ],
              },
            },
            {
              name: "--database-flags",
              description:
                "Comma-separated list of database flags to set on the instance. Use an equals sign to separate flag name and value. Flags without values, like skip_grant_tables, can be written out without a value after, e.g., `skip_grant_tables=`. Use on/off for booleans. View the Instance Resource API for allowed flags. (e.g., `--database-flags max_allowed_packet=55555,skip_grant_tables=,log_output=1`)",
              args: {
                name: "FLAG=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--database-version",
              description:
                "The database engine type and versions. If left unspecified, MYSQL_8_0 is used. See the list of database versions at https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/SqlDatabaseVersion. Apart from listed major versions, DATABASE_VERSION also accepts supported minor versions. _DATABASE_VERSION_ must be one of: *MYSQL_5_6*, *MYSQL_5_7*, *MYSQL_8_0*, *MYSQL_8_4*, *MYSQL_9_7*, *POSTGRES_9_6*, *POSTGRES_10*, *POSTGRES_11*, *POSTGRES_12*, *POSTGRES_13*, *POSTGRES_14*, *POSTGRES_15*, *POSTGRES_16*, *POSTGRES_17*, *POSTGRES_18*, *SQLSERVER_2017_EXPRESS*, *SQLSERVER_2017_WEB*, *SQLSERVER_2017_STANDARD*, *SQLSERVER_2017_ENTERPRISE*, *SQLSERVER_2019_EXPRESS*, *SQLSERVER_2019_WEB*, *SQLSERVER_2019_STANDARD*, *SQLSERVER_2019_ENTERPRISE*, *SQLSERVER_2022_EXPRESS*, *SQLSERVER_2022_WEB*, *SQLSERVER_2022_STANDARD*, *SQLSERVER_2022_ENTERPRISE*, *SQLSERVER_2025_EXPRESS*, *SQLSERVER_2025_STANDARD*, *SQLSERVER_2025_ENTERPRISE*",
              args: {
                name: "DATABASE_VERSION",
                description: "String",
                suggestions: [
                  "MYSQL_5_6",
                  "MYSQL_5_7",
                  "MYSQL_8_0",
                  "MYSQL_8_4",
                  "MYSQL_9_7",
                  "POSTGRES_9_6",
                  "POSTGRES_10",
                  "POSTGRES_11",
                  "POSTGRES_12",
                  "POSTGRES_13",
                  "POSTGRES_14",
                  "POSTGRES_15",
                  "POSTGRES_16",
                  "POSTGRES_17",
                  "POSTGRES_18",
                  "SQLSERVER_2017_EXPRESS",
                  "SQLSERVER_2017_WEB",
                  "SQLSERVER_2017_STANDARD",
                  "SQLSERVER_2017_ENTERPRISE",
                  "SQLSERVER_2019_EXPRESS",
                  "SQLSERVER_2019_WEB",
                  "SQLSERVER_2019_STANDARD",
                  "SQLSERVER_2019_ENTERPRISE",
                  "SQLSERVER_2022_EXPRESS",
                  "SQLSERVER_2022_WEB",
                  "SQLSERVER_2022_STANDARD",
                  "SQLSERVER_2022_ENTERPRISE",
                  "SQLSERVER_2025_EXPRESS",
                  "SQLSERVER_2025_STANDARD",
                  "SQLSERVER_2025_ENTERPRISE",
                ],
              },
            },
            optDeletionProtection,
            optDenyMaintenancePeriodEndDate,
            optDenyMaintenancePeriodStartDate,
            optDenyMaintenancePeriodTime,
            optDiskEncryptionKey,
            optDiskEncryptionKeyKeyring,
            optDiskEncryptionKeyLocation,
            optDiskEncryptionKeyProject,
            optEdition,
            {
              name: "--enable-auto-upgrade-minor-version",
              description:
                "Enables auto-upgrade for MySQL 8.0 minor versions. The MySQL version must be 8.0.35 or higher",
            },
            optEnableBinLog,
            {
              name: "--enable-connection-pooling",
              description:
                "Enable connection pooling for the instance. Use *--enable-connection-pooling* to enable and *--no-enable-connection-pooling* to disable",
            },
            {
              name: "--enable-data-cache",
              description:
                "Enable use of data cache for accelerated read performance. This flag is only available for Enterprise_Plus edition instances. Use *--enable-data-cache* to enable and *--no-enable-data-cache* to disable",
            },
            {
              name: "--enable-dataplex-integration",
              description:
                "Enable Dataplex integration for Google Cloud SQL. Use *--enable-dataplex-integration* to enable and *--no-enable-dataplex-integration* to disable",
            },
            {
              name: "--enable-google-ml-integration",
              description:
                "Enable Vertex AI integration for Google Cloud SQL. You can integrate Vertex AI with Cloud SQL for MySQL and Cloud SQL for PostgreSQL instances only. Use *--enable-google-ml-integration* to enable and *--no-enable-google-ml-integration* to disable",
            },
            optEnableGooglePrivatePath,
            {
              name: "--enable-password-policy",
              description:
                "Enable the password policy, which enforces user password management with the policies configured for the instance. This flag is only available for Postgres",
            },
            optEnablePointInTimeRecovery,
            optEnablePrivateServiceConnect,
            {
              name: "--enforce-new-sql-network-architecture",
              description:
                "Force the instance to use the new network architecture",
            },
            {
              name: "--entra-id-application-id",
              description: "Set the Entraid application ID",
              priority: 100,
              args: {
                name: "ENTRA_ID_APPLICATION_ID",
                description: "String",
              },
            },
            {
              name: "--entra-id-tenant-id",
              description: "Set the Entraid tenant ID",
              priority: 100,
              args: {
                name: "ENTRA_ID_TENANT_ID",
                description: "String",
              },
            },
            {
              name: "--failover-replica-name",
              description:
                "Also create a failover replica with the specified name",
              args: {
                name: "FAILOVER_REPLICA_NAME",
                description: "String",
              },
            },
            optFinalBackup,
            optFinalBackupRetentionDays,
            optFlagsFile,
            optFlatten,
            optFormat,
            optGceZone,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInsightsConfigEnhancedQueryInsightsEnabled,
            optInsightsConfigQueryInsightsEnabled,
            optInsightsConfigQueryPlansPerMinute,
            optInsightsConfigQueryStringLength,
            optInsightsConfigRecordApplicationTags,
            optInsightsConfigRecordClientAddress,
            {
              name: "--instance-type",
              description:
                "The type of the instance. _INSTANCE_TYPE_ must be one of:",
              args: {
                name: "INSTANCE_TYPE",
                description: "String",
                suggestions: [
                  "CLOUD_SQL_INSTANCE",
                  "READ_POOL_INSTANCE",
                  "READ_REPLICA_INSTANCE",
                ],
              },
            },
            optLogHttp,
            optMaintenanceReleaseChannel,
            optMaintenanceWindowDay,
            optMaintenanceWindowHour,
            {
              name: "--master-instance-name",
              description:
                "Name of the instance which will act as master in the replication setup. The newly created instance will be a read replica of the specified master instance",
              args: {
                name: "MASTER_INSTANCE_NAME",
                description: "String",
              },
            },
            optMemory,
            optNetwork,
            optNoAssignIp,
            optNoAsync,
            {
              name: "--no-auto-scale-disable-scale-in",
              description:
                "Disables automatic read pool scale-in. When disabled, read pool auto scaling only supports increasing the read pool node count. By default, both automatic read pool scale-in and scale-out are enabled",
            },
            {
              name: "--no-auto-scale-enabled",
              description:
                "Enables read pool auto scaling. Supports automatically increasing and decreasing the read pool's node count based on need",
            },
            {
              name: "--no-backup",
              description: "Enables daily backup",
              hidden: true,
            },
            {
              name: "--no-cascadable-replica",
              description:
                "Specifies whether a SQL Server replica is a cascadable replica. A cascadable replica is a SQL Server cross-region replica that supports replica(s) under it. This flag only takes effect when the `--master-instance-name` flag is set, and the replica under creation is in a different region than the primary instance",
              hidden: true,
            },
            optNoClearActiveDirectoryDnsServers,
            optNoDeletionProtection,
            {
              name: "--no-enable-auto-upgrade-minor-version",
              description:
                "Enables auto-upgrade for MySQL 8.0 minor versions. The MySQL version must be 8.0.35 or higher",
              hidden: true,
            },
            optNoEnableBinLog,
            {
              name: "--no-enable-connection-pooling",
              description: "Enable connection pooling for the instance",
            },
            {
              name: "--no-enable-data-cache",
              description:
                "Enable use of data cache for accelerated read performance. This flag is only available for Enterprise_Plus edition instances",
            },
            {
              name: "--no-enable-dataplex-integration",
              description: "Enable Dataplex integration for Google Cloud SQL",
            },
            {
              name: "--no-enable-google-ml-integration",
              description:
                "Enable Vertex AI integration for Google Cloud SQL. You can integrate Vertex AI with Cloud SQL for MySQL and Cloud SQL for PostgreSQL instances only",
            },
            optNoEnableGooglePrivatePath,
            {
              name: "--no-enable-password-policy",
              description:
                "Enable the password policy, which enforces user password management with the policies configured for the instance. This flag is only available for Postgres",
              hidden: true,
            },
            optNoEnablePointInTimeRecovery,
            optNoEnablePrivateServiceConnect,
            {
              name: "--no-enforce-new-sql-network-architecture",
              description:
                "Force the instance to use the new network architecture",
              hidden: true,
            },
            optNoFinalBackup,
            {
              name: "--no-insights-config-enhanced-query-insights-enabled",
              description:
                "Enable enhanced query insights for Enterprise Plus edition to provide more detailed query analytics",
            },
            {
              name: "--no-insights-config-query-insights-enabled",
              description:
                "Enable query insights feature to provide query and query plan analytics",
            },
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
              name: "--no-password-policy-disallow-username-substring",
              description: "Disallow username as a part of the password",
            },
            {
              name: "--no-recreate-replicas-on-primary-crash",
              description:
                "Allow/Disallow replica recreation when a primary MySQL instance operating in reduced durability mode crashes. Not recreating the replicas might lead to data inconsistencies between the primary and its replicas. This setting is only applicable for MySQL instances and is enabled by default",
            },
            optNoRequireSsl,
            {
              name: "--no-retain-backups-on-delete",
              description:
                "Retain automated/ondemand backups of the instance after the instance is deleted",
            },
            optNoStorageAutoIncrease,
            {
              name: "--node-count",
              description:
                "The number of nodes in the pool. This option is only available for read pools",
              args: {
                name: "NODE_COUNT",
              },
            },
            {
              name: "--password-policy-complexity",
              description:
                "The complexity of the password. This flag is available only for PostgreSQL. _PASSWORD_POLICY_COMPLEXITY_ must be one of:",
              args: {
                name: "PASSWORD_POLICY_COMPLEXITY",
                description: "String",
                suggestions: ["COMPLEXITY_DEFAULT", "COMPLEXITY_UNSPECIFIED"],
              },
            },
            {
              name: "--password-policy-disallow-username-substring",
              description:
                "Disallow username as a part of the password. Use *--password-policy-disallow-username-substring* to enable and *--no-password-policy-disallow-username-substring* to disable",
            },
            {
              name: "--password-policy-min-length",
              description:
                "Minimum number of characters allowed in the password",
              args: {
                name: "PASSWORD_POLICY_MIN_LENGTH",
                description: "Int",
              },
            },
            {
              name: "--password-policy-password-change-interval",
              description:
                'Minimum interval after which the password can be changed, for example, 2m for 2 minutes. See <a href="/sdk/gcloud/reference/topic/datetimes"> $ gcloud topic datetimes</a> for information on duration formats. This flag is available only for PostgreSQL',
              args: {
                name: "PASSWORD_POLICY_PASSWORD_CHANGE_INTERVAL",
              },
            },
            {
              name: "--password-policy-reuse-interval",
              description:
                "Number of previous passwords that cannot be reused. The valid range is 0 to 100",
              args: {
                name: "PASSWORD_POLICY_REUSE_INTERVAL",
              },
            },
            {
              name: "--performance-capture-config",
              description:
                "A comma-separated list of performance capture settings to add to the MySQL instance. The input should be in a format of key=value. Available case-sensitive keys are: enabled (boolean), probing-interval-seconds (integer), probe-threshold (integer), running-threads-threshold (integer), seconds-behind-source-threshold (integer), transaction-duration-threshold (integer), cpu-utilization-threshold-percent (integer), memory-usage-threshold-percent (integer), transaction-lock-wait-threshold-count (integer), semaphore-wait-threshold-count (integer), history-list-length-threshold-count (integer), transaction-kill-threshold-seconds (integer), transaction-kill-type (string), transaction-kill-excluded-user-hosts (string, semicolon-separated list) Example: --performance-capture-config enabled=true,probe-threshold=5, cpu-utilization-threshold-percent=80, transaction-kill-excluded-user-hosts=user1@host1;user2@%, transaction-kill-type=READ_ONLY_TRANSACTIONS",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optProject,
            {
              name: "--psc-auto-connections",
              description:
                'A comma-separated list of networks or network-project pairs. Each project is represented by a project number (numeric) or by a project ID (alphanumeric). This allows Private Service Connect connections to be created automatically for the specified networks. For example, this connection uses "the form `psc-auto-connections`=`network=projects/testproject1/global/networks/testnetwork1`" or "the form `psc-auto-connections`=`project=testproject1,network=projects/testproject1/global/networks/testnetwork1`". Sets `psc_auto_connections` value',
              args: {
                name: "PSC_AUTO_CONNECTIONS",
                description: "Dict",
              },
            },
            optQuiet,
            {
              name: "--recreate-replicas-on-primary-crash",
              description:
                "Allow/Disallow replica recreation when a primary MySQL instance operating in reduced durability mode crashes. Not recreating the replicas might lead to data inconsistencies between the primary and its replicas. This setting is only applicable for MySQL instances and is enabled by default. Use *--recreate-replicas-on-primary-crash* to enable and *--no-recreate-replicas-on-primary-crash* to disable",
            },
            optRegion,
            {
              name: "--replica-type",
              description:
                "The type of replica to create. _REPLICA_TYPE_ must be one of: *READ*, *FAILOVER*",
              args: {
                name: "REPLICA_TYPE",
                description: "String",
                suggestions: ["READ", "FAILOVER"],
              },
            },
            {
              name: "--replication",
              description:
                "Type of replication this instance uses. The default is synchronous. _REPLICATION_ must be one of: *synchronous*, *asynchronous*",
              args: {
                name: "REPLICATION",
                suggestions: ["synchronous", "asynchronous"],
              },
            },
            optRequireSsl,
            {
              name: "--retain-backups-on-delete",
              description:
                "Retain automated/ondemand backups of the instance after the instance is deleted. Use *--retain-backups-on-delete* to enable and *--no-retain-backups-on-delete* to disable",
            },
            optRetainedBackupsCount,
            optRetainedTransactionLogDays,
            {
              name: "--root-password",
              description: "Root Cloud SQL user's password",
              args: {
                name: "ROOT_PASSWORD",
                description: "String",
              },
            },
            optSecondaryZone,
            {
              name: "--server-ca-mode",
              description:
                "Set the server CA mode of the instance. _SERVER_CA_MODE_ must be one of:",
              args: {
                name: "SERVER_CA_MODE",
                description: "String",
                suggestions: [
                  "CUSTOMER_MANAGED_CAS_CA",
                  "GOOGLE_MANAGED_CAS_CA",
                  "GOOGLE_MANAGED_INTERNAL_CA",
                ],
              },
            },
            {
              name: "--server-ca-pool",
              description: "Set the server CA pool of the instance",
              args: {
                name: "SERVER_CA_POOL",
                description: "String",
              },
            },
            {
              name: "--server-certificate-rotation-mode",
              description:
                "Set the server certificate rotation mode of the instance. _SERVER_CERTIFICATE_ROTATION_MODE_ must be one of:",
              args: {
                name: "SERVER_CERTIFICATE_ROTATION_MODE",
                description: "String",
                suggestions: [
                  "AUTOMATIC_ROTATION_DURING_MAINTENANCE",
                  "NO_AUTOMATIC_ROTATION",
                ],
              },
            },
            optSslMode,
            optStorageAutoIncrease,
            optStorageProvisionedIops,
            optStorageProvisionedThroughput,
            optStorageSize,
            optStorageType,
            {
              name: "--tags",
              description:
                "Comma-separated list of tags to set on the instance. Use an equals signto separate tag name and value.(e.g., `--tags tag1:value1,tag2=value2`)",
              args: {
                name: "TAG=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--threads-per-core",
              description:
                "The number of threads per core. The value of this flag can be 1 or 2. To disable SMT, set this flag to 1. Only available in Cloud SQL for SQL Server instances",
              args: {
                name: "THREADS_PER_CORE",
                description: "Int",
              },
            },
            optTier,
            optTimeZone,
            optTimeout,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optZone,
          ],
          args: {
            name: "INSTANCE",
            description: "Cloud SQL instance ID",
          },
        },
        {
          name: "delete",
          description: "Deletes a Cloud SQL instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--enable-final-backup",
              description:
                "Enables the final backup to be taken at the time of instance deletion",
            },
            {
              name: "--final-backup-description",
              description:
                "Provides description for the final backup going to be taken",
              args: {
                name: "FINAL_BACKUP_DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--final-backup-expiry-time",
              description:
                "Specifies the time at which the final backup will expire. Maximum time allowed is 365 days. For instances managed by BackupDR, the maximum time allowed is 10 years (3653 days). Format: YYYY-MM-DDTHH:MM:SS",
              args: {
                name: "FINAL_BACKUP_EXPIRY_TIME",
              },
            },
            optFinalBackupRetentionDays,
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
              name: "--no-enable-final-backup",
              description:
                "Enables the final backup to be taken at the time of instance deletion",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description: "Cloud SQL instance ID",
          },
        },
        {
          name: "describe",
          description:
            "Displays configuration and metadata about a Cloud SQL instance",
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
            description: "Cloud SQL instance ID",
          },
        },
        {
          name: "execute-sql",
          description: "Executes a statement on a Cloud SQL instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: ["--database", "-d"],
              description: "Database on which the statement is executed",
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
            {
              name: ["--partial-result-mode", "--partial_result_mode"],
              description:
                "Controls how the API responds when the SQL execution result is incomplete due to size limit or other reasons. The default mode is to return an error instead of returning a partial result. _PARTIAL_RESULT_MODE_ must be one of:",
              args: {
                name: "PARTIAL_RESULT_MODE",
                description: "String",
                suggestions: [
                  "ALLOW_PARTIAL_RESULT",
                  "FAIL_PARTIAL_RESULT",
                  "PARTIAL_RESULT_MODE_UNSPECIFIED",
                ],
              },
            },
            optProject,
            optQuiet,
            {
              name: ["--row-limit", "--row_limit"],
              description:
                "Maximum number of rows to return. The default is unlimited",
              args: {
                name: "ROW_LIMIT",
                description: "Int",
              },
            },
            {
              name: "--sql",
              description:
                "SQL statement(s) to execute. It supports multiple statements as well. When it starts with the character '@', the rest should be a filepath to read the SQL statement(s) from. For example, --sql=@my_script.sql",
              priority: 100,
              args: {
                name: "SQL",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description: "Cloud SQL instance ID",
          },
        },
        {
          name: "export",
          description: "*(DEPRECATED)* Exports data from a Cloud SQL instance",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
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
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: ["--table", "-t"],
              description:
                "Tables to export from the specified database. If you specify tables, specify one and only one database. For Postgres instances, only one table can be exported at a time",
              args: {
                name: "TABLE",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "INSTANCE",
              description: "Cloud SQL instance ID",
            },
            {
              name: "URI",
              description:
                "The path to the file in Google Cloud Storage where the export will be stored. The URI is in the form gs://bucketName/fileName. If the file already exists, the operation fails. If the filename ends with .gz, the contents are compressed",
            },
          ],
        },
        {
          name: "failover",
          description:
            "Causes a high-availability Cloud SQL instance to failover",
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
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description: "Cloud SQL instance ID",
          },
        },
        {
          name: "get-latest-recovery-time",
          description:
            "Displays the latest recovery time to which a Cloud SQL instance can be restored to",
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
              name: "--source-instance-deletion-time",
              description:
                "The deletion time of the source instance. This is used to identify the instance if it has been deleted",
              args: {
                name: "SOURCE_INSTANCE_DELETION_TIME",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description: "Cloud SQL instance ID",
          },
        },
        {
          name: "get-storage-shrink-config",
          description:
            "Displays the minimum storage size to which a Cloud SQL instance can be decreased",
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
            description: "Cloud SQL instance ID",
          },
        },
        {
          name: "import",
          description:
            "*(DEPRECATED)* Imports data into a Cloud SQL instance from Google Cloud Storage",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: ["--database", "-d"],
              description:
                "Database to which the import is made. The database needs to be created before importing. If not set, it is assumed that the database is specified in the file to be imported. If your SQL dump file includes a database statement, it will override the database set in this flag",
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
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "INSTANCE",
              description: "Cloud SQL instance ID",
            },
            {
              name: "URI",
              description:
                "Path to the MySQL dump file in Google Cloud Storage from which the import is made. The URI is in the form gs://bucketName/fileName. Compressed gzip files (.gz) are also supported",
            },
          ],
        },
        {
          name: "list",
          description: "Lists Cloud SQL instances in a given project",
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
              name: "--no-show-edition",
              description: "Show the edition field",
              hidden: true,
            },
            {
              name: "--no-show-sql-network-architecture",
              description:
                "Show the instance's current SqlNetworkArchitecture backend in addition to the default output list. An instance could use either the old or new network architecture. The new network architecture offers better isolation, reliability, and faster new feature adoption",
              hidden: true,
            },
            {
              name: "--no-show-transactional-log-storage-state",
              description:
                "Show the storage location of the transactional logs used for point-in-time recovery (PITR) by the instance",
              hidden: true,
            },
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            {
              name: "--show-edition",
              description: "Show the edition field",
            },
            {
              name: "--show-sql-network-architecture",
              description:
                "Show the instance's current SqlNetworkArchitecture backend in addition to the default output list. An instance could use either the old or new network architecture. The new network architecture offers better isolation, reliability, and faster new feature adoption",
            },
            {
              name: "--show-transactional-log-storage-state",
              description:
                "Show the storage location of the transactional logs used for point-in-time recovery (PITR) by the instance",
            },
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "patch",
          description: "Updates the settings of a Cloud SQL instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optActivationPolicy,
            optActiveDirectoryDnsServers,
            optActiveDirectoryDomain,
            optActiveDirectoryMode,
            optActiveDirectoryOrganizationalUnit,
            optActiveDirectorySecretManagerKey,
            optAllowedPscProjects,
            optAssignIp,
            optAsync,
            optAuditBucketPath,
            optAuditRetentionInterval,
            optAuditUploadInterval,
            {
              name: "--authorized-gae-apps",
              description:
                "First Generation instances only. List of project IDs for App Engine applications running in the Standard environment that can access this instance",
              args: {
                name: "APP",
                description: "List",
              },
            },
            optAuthorizedNetworks,
            {
              name: "--auto-scale-disable-scale-in",
              description:
                "Disables automatic read pool scale-in. When disabled, read pool auto scaling only supports increasing the read pool node count. By default, both automatic read pool scale-in and scale-out are enabled. Use *--auto-scale-disable-scale-in* to enable and *--no-auto-scale-disable-scale-in* to disable",
            },
            {
              name: "--auto-scale-enabled",
              description:
                "Enables read pool auto scaling. Supports automatically increasing and decreasing the read pool's node count based on need. Use *--auto-scale-enabled* to enable and *--no-auto-scale-enabled* to disable",
            },
            {
              name: "--auto-scale-in-cooldown-seconds",
              description:
                "The cooldown period for automatic read pool scale-in. Minimum time between scale-in events. Must be an integer value. For example, if the value is 60, then a scale-in event will not be triggered within 60 seconds of the last scale-in event",
              args: {
                name: "AUTO_SCALE_IN_COOLDOWN_SECONDS",
              },
            },
            {
              name: "--auto-scale-max-node-count",
              description: "Maximum number of read pool nodes to be maintained",
              args: {
                name: "AUTO_SCALE_MAX_NODE_COUNT",
              },
            },
            {
              name: "--auto-scale-min-node-count",
              description: "Minimum number of read pool nodes to be maintained",
              args: {
                name: "AUTO_SCALE_MIN_NODE_COUNT",
              },
            },
            {
              name: "--auto-scale-out-cooldown-seconds",
              description:
                "The cooldown period for automatic read pool scale-out. Minimum time between scale-out events. Must be an integer value. For example, if the value is 60, then a scale-out event will not be triggered within 60 seconds of the last scale-out event",
              args: {
                name: "AUTO_SCALE_OUT_COOLDOWN_SECONDS",
              },
            },
            {
              name: "--auto-scale-target-metrics",
              description:
                "Target metrics for read pool auto scaling. Options are: AVERAGE_CPU_UTILIZATION and AVERAGE_DB_CONNECTIONS. Example: --auto-scale-target-metrics=AVERAGE_CPU_UTILIZATION=0.8",
              args: {
                name: "METRIC=VALUE",
                description: "Dict",
              },
            },
            optAvailabilityType,
            {
              name: "--backup-location",
              description:
                "Choose where to store your backups. Backups are stored in the closest multi-region location to you by default. Only customize if needed. Specify empty string to revert to default",
              args: {
                name: "BACKUP_LOCATION",
                description: "String",
              },
            },
            optBackupStartTime,
            optBillingProject,
            optClearActiveDirectory,
            optClearActiveDirectoryDnsServers,
            {
              name: "--clear-allowed-psc-projects",
              description:
                "This will clear the project allowlist of Private Service Connect, disallowing all projects from creating new Private Service Connect bindings to the instance",
            },
            {
              name: "--clear-authorized-networks",
              description:
                "Clear the list of external networks that are allowed to connect to the instance",
            },
            {
              name: "--clear-connection-pool-flags",
              description:
                "This will clear the connection pool flags set on the instance",
            },
            {
              name: "--clear-custom-subject-alternative-names",
              description: "This clears the customer specified DNS names",
            },
            {
              name: "--clear-database-flags",
              description:
                "Clear the database flags set on the instance. WARNING: Instance will be restarted",
            },
            {
              name: "--clear-entra-id-config",
              description:
                "Clears the Entra ID config for the SQL Server instance",
            },
            {
              name: "--clear-failover-dr-replica-name",
              description:
                "Clear the DR replica setting for the primary instance. Flag is only available for MySQL and PostgreSQL database instances",
            },
            {
              name: "--clear-gae-apps",
              description:
                "Specified to clear the list of App Engine apps that can access this instance",
            },
            {
              name: "--clear-password-policy",
              description:
                "Clear the existing password policy. This flag is only available for Postgres",
            },
            {
              name: "--clear-psc-auto-connections",
              description:
                "This removes all automatically created connections. Cloud SQL uses these connections to connect to an instance using Private Service Connect",
            },
            {
              name: "--clear-psc-network-attachment-uri",
              description:
                "Disable outbound connectivity from a Cloud SQL instance which uses Private Service Connect (PSC)",
            },
            optConfiguration,
            {
              name: "--connection-pool-flags",
              description:
                "Comma-separated list of connection pool flags to set on the instance connection pool. Use an equals sign to separate flag name and value. More information on available flags can be found here: https://cloud.google.com/sql/docs/mysql/managed-connection-pooling#configuration-options for MySQL and https://cloud.google.com/sql/docs/postgres/managed-connection-pooling#configuration-options for PostgreSQL. (e.g., `--connection-pool-flags max_pool_size=1000,max_client_connections=20`)",
              args: {
                name: "FLAG=VALUE",
                description: "Dict",
              },
            },
            optConnectorEnforcement,
            optCpu,
            {
              name: "--custom-subject-alternative-names",
              description:
                "A comma-separated list of DNS names to add to the instance's SSL certificate. A custom SAN is a structured way to add additional DNS names (host names) that are not managed by Cloud SQL to an instance. It allows for hostname verification during establishment of a database connection using the DNS name over SSL/TLS. When you create and/or update an instance, you can add a comma-separated list of up to three DNS names to the server certificate of your instance",
              args: {
                name: "DNS",
                description: "List",
              },
            },
            {
              name: "--data-api-access",
              description:
                "Controls connectivity to the instance using ExecuteSql API. _DATA_API_ACCESS_ must be one of:",
              args: {
                name: "DATA_API_ACCESS",
                description: "String",
                suggestions: [
                  "ALLOW_DATA_API",
                  "DATA_API_ACCESS_UNSPECIFIED",
                  "DISALLOW_DATA_API",
                ],
              },
            },
            {
              name: "--database-flags",
              description:
                "Comma-separated list of database flags to set on the instance. Use an equals sign to separate flag name and value. Flags without values, like skip_grant_tables, can be written out without a value after, e.g., `skip_grant_tables=`. Use on/off for booleans. View the Instance Resource API for allowed flags. (e.g., `--database-flags max_allowed_packet=55555,skip_grant_tables=,log_output=1`)",
              args: {
                name: "FLAG=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--database-version",
              description:
                "The database engine type and versions. If left unspecified, no changes occur. See the list of database versions at https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/SqlDatabaseVersion. Apart from listed major versions, DATABASE_VERSION also accepts supported minor versions. _DATABASE_VERSION_ must be one of: *MYSQL_5_6*, *MYSQL_5_7*, *MYSQL_8_0*, *MYSQL_8_4*, *MYSQL_9_7*, *POSTGRES_9_6*, *POSTGRES_10*, *POSTGRES_11*, *POSTGRES_12*, *POSTGRES_13*, *POSTGRES_14*, *POSTGRES_15*, *POSTGRES_16*, *POSTGRES_17*, *POSTGRES_18*, *SQLSERVER_2017_EXPRESS*, *SQLSERVER_2017_WEB*, *SQLSERVER_2017_STANDARD*, *SQLSERVER_2017_ENTERPRISE*, *SQLSERVER_2019_EXPRESS*, *SQLSERVER_2019_WEB*, *SQLSERVER_2019_STANDARD*, *SQLSERVER_2019_ENTERPRISE*, *SQLSERVER_2022_EXPRESS*, *SQLSERVER_2022_WEB*, *SQLSERVER_2022_STANDARD*, *SQLSERVER_2022_ENTERPRISE*, *SQLSERVER_2025_EXPRESS*, *SQLSERVER_2025_STANDARD*, *SQLSERVER_2025_ENTERPRISE*",
              args: {
                name: "DATABASE_VERSION",
                description: "String",
                suggestions: [
                  "MYSQL_5_6",
                  "MYSQL_5_7",
                  "MYSQL_8_0",
                  "MYSQL_8_4",
                  "MYSQL_9_7",
                  "POSTGRES_9_6",
                  "POSTGRES_10",
                  "POSTGRES_11",
                  "POSTGRES_12",
                  "POSTGRES_13",
                  "POSTGRES_14",
                  "POSTGRES_15",
                  "POSTGRES_16",
                  "POSTGRES_17",
                  "POSTGRES_18",
                  "SQLSERVER_2017_EXPRESS",
                  "SQLSERVER_2017_WEB",
                  "SQLSERVER_2017_STANDARD",
                  "SQLSERVER_2017_ENTERPRISE",
                  "SQLSERVER_2019_EXPRESS",
                  "SQLSERVER_2019_WEB",
                  "SQLSERVER_2019_STANDARD",
                  "SQLSERVER_2019_ENTERPRISE",
                  "SQLSERVER_2022_EXPRESS",
                  "SQLSERVER_2022_WEB",
                  "SQLSERVER_2022_STANDARD",
                  "SQLSERVER_2022_ENTERPRISE",
                  "SQLSERVER_2025_EXPRESS",
                  "SQLSERVER_2025_STANDARD",
                  "SQLSERVER_2025_ENTERPRISE",
                ],
              },
            },
            optDeletionProtection,
            optDenyMaintenancePeriodEndDate,
            optDenyMaintenancePeriodStartDate,
            optDenyMaintenancePeriodTime,
            {
              name: "--diff",
              description: "Show what changed as a result of the update",
            },
            optEdition,
            {
              name: "--enable-auto-upgrade-minor-version",
              description:
                "Enables auto-upgrade for MySQL 8.0 minor versions. The MySQL version must be 8.0.35 or higher",
            },
            {
              name: "--enable-bin-log",
              description:
                "Allows for data recovery from a specific point in time, down to a fraction of a second. Must have automatic backups enabled to use. Make sure storage can support at least 7 days of logs. Use *--enable-bin-log* to enable and *--no-enable-bin-log* to disable",
            },
            {
              name: "--enable-connection-pooling",
              description:
                "Enable connection pooling for the instance. Use *--enable-connection-pooling* to enable and *--no-enable-connection-pooling* to disable",
            },
            {
              name: "--enable-data-cache",
              description:
                "Enable use of data cache for accelerated read performance. This flag is only available for Enterprise_Plus edition instances. Use *--enable-data-cache* to enable and *--no-enable-data-cache* to disable",
            },
            {
              name: "--enable-database-replication",
              description:
                "Enable database replication. Applicable only for read replica instance(s). WARNING: Instance will be restarted. Use *--enable-database-replication* to enable and *--no-enable-database-replication* to disable",
            },
            {
              name: "--enable-dataplex-integration",
              description:
                "Enable Dataplex integration for Google Cloud SQL. Use *--enable-dataplex-integration* to enable and *--no-enable-dataplex-integration* to disable",
            },
            {
              name: "--enable-google-ml-integration",
              description:
                "Enable Vertex AI integration for Google Cloud SQL. You can integrate Vertex AI with Cloud SQL for MySQL and Cloud SQL for PostgreSQL instances only. Use *--enable-google-ml-integration* to enable and *--no-enable-google-ml-integration* to disable",
            },
            {
              name: "--enable-google-private-path",
              description:
                "Enable a private path for Google Cloud services. This flag specifies whether the instance is accessible to internal Google Cloud services such as BigQuery. This is only applicable to MySQL and PostgreSQL instances that don't use public IP. Currently, SQL Server isn't supported. Use *--enable-google-private-path* to enable and *--no-enable-google-private-path* to disable",
            },
            {
              name: "--enable-password-policy",
              description:
                "Enable the password policy, which enforces user password management with the policies configured for the instance. This flag is only available for Postgres",
            },
            {
              name: "--enable-point-in-time-recovery",
              description:
                "Allows for data recovery from a specific point in time, down to a fraction of a second, using write-ahead logs. Must have automatic backups enabled to use. Make sure storage can support at least 7 days of logs. Use *--enable-point-in-time-recovery* to enable and *--no-enable-point-in-time-recovery* to disable",
            },
            {
              name: "--enable-private-service-connect",
              description:
                "Enable connecting to the Cloud SQL instance with Private Service Connect. Use *--enable-private-service-connect* to enable and *--no-enable-private-service-connect* to disable",
            },
            {
              name: "--enforce-new-sql-network-architecture",
              description:
                "Force the instance to use the new network architecture",
            },
            {
              name: "--entra-id-application-id",
              description: "Set the Entraid application ID",
              priority: 100,
              args: {
                name: "ENTRA_ID_APPLICATION_ID",
                description: "String",
              },
            },
            {
              name: "--entra-id-tenant-id",
              description: "Set the Entraid tenant ID",
              priority: 100,
              args: {
                name: "ENTRA_ID_TENANT_ID",
                description: "String",
              },
            },
            {
              name: "--failover-dr-replica-name",
              description:
                "Set a Disaster Recovery (DR) replica with the specified name for the primary instance. This must be one of the existing cross region replicas of the primary instance. Flag is only available for MySQL and PostgreSQL database instances",
              args: {
                name: "FAILOVER_DR_REPLICA_NAME",
                description: "String",
              },
            },
            optFinalBackup,
            optFinalBackupRetentionDays,
            optFlagsFile,
            optFlatten,
            {
              name: "--follow-gae-app",
              description:
                "First Generation instances only. The App Engine app this instance should follow. It must be in the same region as the instance. WARNING: Instance may be restarted",
              args: {
                name: "FOLLOW_GAE_APP",
                description: "String",
              },
            },
            optFormat,
            {
              name: "--gce-zone",
              description:
                "(DEPRECATED) Preferred Compute Engine zone (e.g. us-central1-a, us-central1-b, etc.). WARNING: Instance may be restarted",
              deprecated: true,
              args: {
                name: "GCE_ZONE",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--include-replicas-for-major-version-upgrade",
              description:
                "Enable the major version upgrade of replicas when the in-place major version upgrade of a primary instance is initated with `--database-version`. Use `--include-replicas-for-major-version-upgrade` to enable and `--no-include-replicas-for-major--version-upgrade` to disable. Use *--include-replicas-for-major-version-upgrade* to enable and *--no-include-replicas-for-major-version-upgrade* to disable",
            },
            optInsightsConfigEnhancedQueryInsightsEnabled,
            optInsightsConfigQueryInsightsEnabled,
            optInsightsConfigQueryPlansPerMinute,
            optInsightsConfigQueryStringLength,
            optInsightsConfigRecordApplicationTags,
            optInsightsConfigRecordClientAddress,
            {
              name: "--instance-type",
              description:
                "The type of the instance. _INSTANCE_TYPE_ must be one of:",
              args: {
                name: "INSTANCE_TYPE",
                description: "String",
                suggestions: [
                  "CLOUD_SQL_INSTANCE",
                  "READ_POOL_INSTANCE",
                  "READ_REPLICA_INSTANCE",
                ],
              },
            },
            optLogHttp,
            optMaintenanceReleaseChannel,
            {
              name: "--maintenance-version",
              description: "The desired maintenance version of the instance",
              args: {
                name: "MAINTENANCE_VERSION",
                description: "String",
              },
            },
            {
              name: "--maintenance-window-any",
              description: "Removes the user-specified maintenance window",
            },
            optMaintenanceWindowDay,
            optMaintenanceWindowHour,
            optMemory,
            optNetwork,
            optNoAssignIp,
            optNoAsync,
            {
              name: "--no-auto-scale-disable-scale-in",
              description:
                "Disables automatic read pool scale-in. When disabled, read pool auto scaling only supports increasing the read pool node count. By default, both automatic read pool scale-in and scale-out are enabled",
            },
            {
              name: "--no-auto-scale-enabled",
              description:
                "Enables read pool auto scaling. Supports automatically increasing and decreasing the read pool's node count based on need",
            },
            {
              name: "--no-backup",
              description: "Specified if daily backup should be disabled",
            },
            optNoClearActiveDirectory,
            optNoClearActiveDirectoryDnsServers,
            {
              name: "--no-clear-allowed-psc-projects",
              description:
                "This will clear the project allowlist of Private Service Connect, disallowing all projects from creating new Private Service Connect bindings to the instance",
              hidden: true,
            },
            {
              name: "--no-clear-authorized-networks",
              description:
                "Clear the list of external networks that are allowed to connect to the instance",
              hidden: true,
            },
            {
              name: "--no-clear-connection-pool-flags",
              description:
                "This will clear the connection pool flags set on the instance",
              hidden: true,
            },
            {
              name: "--no-clear-custom-subject-alternative-names",
              description: "This clears the customer specified DNS names",
              hidden: true,
            },
            {
              name: "--no-clear-database-flags",
              description:
                "Clear the database flags set on the instance. WARNING: Instance will be restarted",
              hidden: true,
            },
            {
              name: "--no-clear-entra-id-config",
              description:
                "Clears the Entra ID config for the SQL Server instance",
              hidden: true,
            },
            {
              name: "--no-clear-failover-dr-replica-name",
              description:
                "Clear the DR replica setting for the primary instance. Flag is only available for MySQL and PostgreSQL database instances",
              hidden: true,
            },
            {
              name: "--no-clear-gae-apps",
              description:
                "Specified to clear the list of App Engine apps that can access this instance",
              hidden: true,
            },
            {
              name: "--no-clear-password-policy",
              description:
                "Clear the existing password policy. This flag is only available for Postgres",
              hidden: true,
            },
            {
              name: "--no-clear-psc-auto-connections",
              description:
                "This removes all automatically created connections. Cloud SQL uses these connections to connect to an instance using Private Service Connect",
              hidden: true,
            },
            {
              name: "--no-clear-psc-network-attachment-uri",
              description:
                "Disable outbound connectivity from a Cloud SQL instance which uses Private Service Connect (PSC)",
              hidden: true,
            },
            optNoDeletionProtection,
            {
              name: "--no-diff",
              description: "Show what changed as a result of the update",
              hidden: true,
            },
            {
              name: "--no-enable-auto-upgrade-minor-version",
              description:
                "Enables auto-upgrade for MySQL 8.0 minor versions. The MySQL version must be 8.0.35 or higher",
              hidden: true,
            },
            {
              name: "--no-enable-bin-log",
              description:
                "Allows for data recovery from a specific point in time, down to a fraction of a second. Must have automatic backups enabled to use. Make sure storage can support at least 7 days of logs",
            },
            {
              name: "--no-enable-connection-pooling",
              description: "Enable connection pooling for the instance",
            },
            {
              name: "--no-enable-data-cache",
              description:
                "Enable use of data cache for accelerated read performance. This flag is only available for Enterprise_Plus edition instances",
            },
            {
              name: "--no-enable-database-replication",
              description:
                "Enable database replication. Applicable only for read replica instance(s). WARNING: Instance will be restarted",
            },
            {
              name: "--no-enable-dataplex-integration",
              description: "Enable Dataplex integration for Google Cloud SQL",
            },
            {
              name: "--no-enable-google-ml-integration",
              description:
                "Enable Vertex AI integration for Google Cloud SQL. You can integrate Vertex AI with Cloud SQL for MySQL and Cloud SQL for PostgreSQL instances only",
            },
            {
              name: "--no-enable-google-private-path",
              description:
                "Enable a private path for Google Cloud services. This flag specifies whether the instance is accessible to internal Google Cloud services such as BigQuery. This is only applicable to MySQL and PostgreSQL instances that don't use public IP. Currently, SQL Server isn't supported",
            },
            {
              name: "--no-enable-password-policy",
              description:
                "Enable the password policy, which enforces user password management with the policies configured for the instance. This flag is only available for Postgres",
              hidden: true,
            },
            {
              name: "--no-enable-point-in-time-recovery",
              description:
                "Allows for data recovery from a specific point in time, down to a fraction of a second, using write-ahead logs. Must have automatic backups enabled to use. Make sure storage can support at least 7 days of logs",
            },
            {
              name: "--no-enable-private-service-connect",
              description:
                "Enable connecting to the Cloud SQL instance with Private Service Connect",
            },
            {
              name: "--no-enforce-new-sql-network-architecture",
              description:
                "Force the instance to use the new network architecture",
              hidden: true,
            },
            optNoFinalBackup,
            {
              name: "--no-include-replicas-for-major-version-upgrade",
              description:
                "Enable the major version upgrade of replicas when the in-place major version upgrade of a primary instance is initated with `--database-version`. Use `--include-replicas-for-major-version-upgrade` to enable and `--no-include-replicas-for-major--version-upgrade` to disable",
            },
            {
              name: "--no-insights-config-enhanced-query-insights-enabled",
              description:
                "Enable enhanced query insights for Enterprise Plus edition to provide more detailed query analytics",
            },
            {
              name: "--no-insights-config-query-insights-enabled",
              description:
                "Enable query insights feature to provide query and query plan analytics",
            },
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
              name: "--no-maintenance-window-any",
              description: "Removes the user-specified maintenance window",
              hidden: true,
            },
            {
              name: "--no-password-policy-disallow-username-substring",
              description: "Disallow username as a part of the password",
            },
            {
              name: "--no-reconcile-psa-networking",
              description:
                "Reconciles the instance's PSA networking configuration. If the instance is already on a PSA network, the DNS zone and records associated with the PSA write endpoint are either added if missing or updated if incorrect",
              hidden: true,
            },
            {
              name: "--no-recreate-replicas-on-primary-crash",
              description:
                "Allow/Disallow replica recreation when a primary MySQL instance operating in reduced durability mode crashes. Not recreating the replicas might lead to data inconsistencies between the primary and its replicas. This setting is only applicable for MySQL instances and is enabled by default",
            },
            {
              name: "--no-remove-deny-maintenance-period",
              description: "Removes the user-specified deny maintenance period",
              hidden: true,
            },
            {
              name: "--no-require-ssl",
              description:
                "Mysqld should default to 'REQUIRE X509' for users connecting over IP",
            },
            {
              name: "--no-retain-backups-on-delete",
              description:
                "Retain automated/ondemand backups of the instance after the instance is deleted",
            },
            {
              name: "--no-simulate-maintenance-event",
              description:
                "Simulate a maintenance event without changing the version. Only applicable to instances that support near-zero downtime planned maintenance",
              hidden: true,
            },
            optNoStorageAutoIncrease,
            {
              name: "--no-switch-transaction-logs-to-cloud-storage",
              description:
                "Switches the location of the transaction logs used for PITR from disk to Cloud Storage",
              hidden: true,
            },
            {
              name: "--no-upgrade-sql-network-architecture",
              description:
                "Upgrade from old network architecture to new network architecture. The new network architecture offers better isolation, reliability, and faster new feature adoption",
              hidden: true,
            },
            {
              name: "--node-count",
              description:
                "The number of nodes in the pool. This option is only available for read pools",
              args: {
                name: "NODE_COUNT",
              },
            },
            {
              name: "--password-policy-complexity",
              description:
                "The complexity of the password. This flag is available only for PostgreSQL. _PASSWORD_POLICY_COMPLEXITY_ must be one of:",
              args: {
                name: "PASSWORD_POLICY_COMPLEXITY",
                description: "String",
                suggestions: ["COMPLEXITY_DEFAULT", "COMPLEXITY_UNSPECIFIED"],
              },
            },
            {
              name: "--password-policy-disallow-username-substring",
              description:
                "Disallow username as a part of the password. Use *--password-policy-disallow-username-substring* to enable and *--no-password-policy-disallow-username-substring* to disable",
            },
            {
              name: "--password-policy-min-length",
              description:
                "Minimum number of characters allowed in the password",
              args: {
                name: "PASSWORD_POLICY_MIN_LENGTH",
                description: "Int",
              },
            },
            {
              name: "--password-policy-password-change-interval",
              description:
                'Minimum interval after which the password can be changed, for example, 2m for 2 minutes. See <a href="/sdk/gcloud/reference/topic/datetimes"> $ gcloud topic datetimes</a> for information on duration formats. This flag is available only for PostgreSQL',
              args: {
                name: "PASSWORD_POLICY_PASSWORD_CHANGE_INTERVAL",
              },
            },
            {
              name: "--password-policy-reuse-interval",
              description:
                "Number of previous passwords that cannot be reused. The valid range is 0 to 100",
              args: {
                name: "PASSWORD_POLICY_REUSE_INTERVAL",
              },
            },
            {
              name: "--performance-capture-config",
              description:
                "A comma-separated list of performance capture settings to add to the MySQL instance. The input should be in a format of key=value. Available case-sensitive keys are: enabled (boolean), probing-interval-seconds (integer), probe-threshold (integer), running-threads-threshold (integer), seconds-behind-source-threshold (integer), transaction-duration-threshold (integer), cpu-utilization-threshold-percent (integer), memory-usage-threshold-percent (integer), transaction-lock-wait-threshold-count (integer), semaphore-wait-threshold-count (integer), history-list-length-threshold-count (integer), transaction-kill-threshold-seconds (integer), transaction-kill-type (string), transaction-kill-excluded-user-hosts (string, semicolon-separated list) Example: --performance-capture-config enabled=true,probe-threshold=5, cpu-utilization-threshold-percent=80, transaction-kill-excluded-user-hosts=user1@host1;user2@%, transaction-kill-type=READ_ONLY_TRANSACTIONS",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: ["--pricing-plan", "-p"],
              description:
                "First Generation instances only. The pricing plan for this instance. _PRICING_PLAN_ must be one of: *PER_USE*, *PACKAGE*",
              args: {
                name: "PRICING_PLAN",
                description: "String",
                suggestions: ["PER_USE", "PACKAGE"],
              },
            },
            optProject,
            {
              name: "--psc-auto-connections",
              description:
                'A comma-separated list of networks or network-project pairs. Each project is represented by a project number (numeric) or by a project ID (alphanumeric). This allows Private Service Connect connections to be created automatically for the specified networks. For example, this connection uses "the form `psc-auto-connections`=`network=projects/testproject1/global/networks/testnetwork1`" or "the form `psc-auto-connections`=`project=testproject1,network=projects/testproject1/global/networks/testnetwork1`". Sets `psc_auto_connections` value',
              args: {
                name: "PSC_AUTO_CONNECTIONS",
                description: "Dict",
              },
            },
            {
              name: "--psc-network-attachment-uri",
              description:
                "Full URI of the network attachment that is configured to support outbound connectivity from a Cloud SQL instance which uses Private Service Connect (PSC). For example, this would be of the form:`--psc-network-attachment-uri=projects/test-project/regions/us-central1/networkAttachments/my-na`",
              args: {
                name: "PSC_NETWORK_ATTACHMENT_URI",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--reconcile-psa-networking",
              description:
                "Reconciles the instance's PSA networking configuration. If the instance is already on a PSA network, the DNS zone and records associated with the PSA write endpoint are either added if missing or updated if incorrect",
            },
            {
              name: "--recreate-replicas-on-primary-crash",
              description:
                "Allow/Disallow replica recreation when a primary MySQL instance operating in reduced durability mode crashes. Not recreating the replicas might lead to data inconsistencies between the primary and its replicas. This setting is only applicable for MySQL instances and is enabled by default. Use *--recreate-replicas-on-primary-crash* to enable and *--no-recreate-replicas-on-primary-crash* to disable",
            },
            {
              name: "--remove-deny-maintenance-period",
              description: "Removes the user-specified deny maintenance period",
            },
            {
              name: "--replication",
              description:
                "Type of replication this instance uses. The default is synchronous. _REPLICATION_ must be one of: *synchronous*, *asynchronous*",
              args: {
                name: "REPLICATION",
                suggestions: ["synchronous", "asynchronous"],
              },
            },
            {
              name: "--require-ssl",
              description:
                "Mysqld should default to 'REQUIRE X509' for users connecting over IP. Use *--require-ssl* to enable and *--no-require-ssl* to disable",
            },
            {
              name: "--retain-backups-on-delete",
              description:
                "Retain automated/ondemand backups of the instance after the instance is deleted. Use *--retain-backups-on-delete* to enable and *--no-retain-backups-on-delete* to disable",
            },
            optRetainedBackupsCount,
            optRetainedTransactionLogDays,
            optSecondaryZone,
            {
              name: "--server-ca-mode",
              description:
                "Set the server CA mode of the instance. _SERVER_CA_MODE_ must be one of:",
              args: {
                name: "SERVER_CA_MODE",
                description: "String",
                suggestions: [
                  "CUSTOMER_MANAGED_CAS_CA",
                  "GOOGLE_MANAGED_CAS_CA",
                  "GOOGLE_MANAGED_INTERNAL_CA",
                ],
              },
            },
            {
              name: "--server-ca-pool",
              description: "Set the server CA pool of the instance",
              args: {
                name: "SERVER_CA_POOL",
                description: "String",
              },
            },
            {
              name: "--server-certificate-rotation-mode",
              description:
                "Set the server certificate rotation mode of the instance. _SERVER_CERTIFICATE_ROTATION_MODE_ must be one of:",
              args: {
                name: "SERVER_CERTIFICATE_ROTATION_MODE",
                description: "String",
                suggestions: [
                  "AUTOMATIC_ROTATION_DURING_MAINTENANCE",
                  "NO_AUTOMATIC_ROTATION",
                ],
              },
            },
            {
              name: "--simulate-maintenance-event",
              description:
                "Simulate a maintenance event without changing the version. Only applicable to instances that support near-zero downtime planned maintenance",
            },
            optSslMode,
            optStorageAutoIncrease,
            optStorageProvisionedIops,
            optStorageProvisionedThroughput,
            optStorageSize,
            optStorageType,
            {
              name: "--switch-transaction-logs-to-cloud-storage",
              description:
                "Switches the location of the transaction logs used for PITR from disk to Cloud Storage",
            },
            {
              name: "--threads-per-core",
              description:
                "The number of threads per core. The value of this flag can be 1 or 2. To disable SMT, set this flag to 1. Only available in Cloud SQL for SQL Server instances",
              args: {
                name: "THREADS_PER_CORE",
                description: "Int",
              },
            },
            {
              name: ["--tier", "-t"],
              description:
                "Machine type for a shared-core instance e.g. ``db-g1-small''. For all other instances, instead of using tiers, customize your instance by specifying its CPU and memory. You can do so with the `--cpu` and `--memory` flags. Learn more about how CPU and memory affects pricing: https://cloud.google.com/sql/pricing. WARNING: Instance will be restarted",
              args: {
                name: "TIER",
                description: "String",
              },
            },
            optTimeZone,
            optTraceToken,
            {
              name: "--upgrade-sql-network-architecture",
              description:
                "Upgrade from old network architecture to new network architecture. The new network architecture offers better isolation, reliability, and faster new feature adoption",
            },
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--zone",
              description:
                "Preferred Compute Engine zone (e.g. us-central1-a, us-central1-b, etc.). WARNING: Instance may be restarted",
              args: {
                name: "ZONE",
                description: "String",
              },
            },
          ],
          args: {
            name: "INSTANCE",
            description: "Cloud SQL instance ID",
          },
        },
        {
          name: "perform-storage-shrink",
          description:
            "Performs a storage size decrease of a Cloud SQL instance",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--async",
              description:
                "Return immediately, without waiting for the operation in progress to complete. The default is *True*. Enabled by default, use *--no-async* to disable",
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
            {
              name: "--storage-size",
              description:
                "The target storage size must be an integer that represents the number of GB. For example, --storage-size=10GB. Only supported for primary or standalone instances. You can't set a target storage size for a replica instance",
              args: {
                name: "STORAGE_SIZE",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description: "Cloud SQL instance ID",
          },
        },
        {
          name: "point-in-time-restore",
          description:
            "Performs a point in time restore for a Cloud SQL instance managed by Google Cloud Backup and Disaster Recovery (DR) Service",
          options: [
            optAccessTokenFile,
            optAccount,
            optActivationPolicy,
            optActiveDirectoryDnsServers,
            optActiveDirectoryDomain,
            optActiveDirectoryMode,
            optActiveDirectoryOrganizationalUnit,
            optActiveDirectorySecretManagerKey,
            {
              name: "--allocated-ip-range-name",
              description:
                "The name of the IP range allocated for the target instance with private network connectivity. For example: 'google-managed-services-default'. If set, the target instance IP is created in the allocated range represented by this name. Reserved for future use",
              args: {
                name: "ALLOCATED_IP_RANGE_NAME",
                description: "String",
              },
            },
            optAllowedPscProjects,
            optAssignIp,
            optAsync,
            optAuditBucketPath,
            optAuditRetentionInterval,
            optAuditUploadInterval,
            optAuthorizedNetworks,
            {
              name: "--auto-scale-disable-scale-in",
              description:
                "Disables automatic read pool scale-in. When disabled, read pool auto scaling only supports increasing the read pool node count. By default, both automatic read pool scale-in and scale-out are enabled",
              hidden: true,
            },
            {
              name: "--auto-scale-enabled",
              description:
                "Enables read pool auto scaling. Supports automatically increasing and decreasing the read pool's node count based on need",
              hidden: true,
            },
            {
              name: "--auto-scale-in-cooldown-seconds",
              description:
                "The cooldown period for automatic read pool scale-in. Minimum time between scale-in events. Must be an integer value. For example, if the value is 60, then a scale-in event will not be triggered within 60 seconds of the last scale-in event",
              hidden: true,
              args: {
                name: "AUTO_SCALE_IN_COOLDOWN_SECONDS",
              },
            },
            {
              name: "--auto-scale-max-node-count",
              description: "Maximum number of read pool nodes to be maintained",
              hidden: true,
              args: {
                name: "AUTO_SCALE_MAX_NODE_COUNT",
              },
            },
            {
              name: "--auto-scale-min-node-count",
              description: "Minimum number of read pool nodes to be maintained",
              hidden: true,
              args: {
                name: "AUTO_SCALE_MIN_NODE_COUNT",
              },
            },
            {
              name: "--auto-scale-out-cooldown-seconds",
              description:
                "The cooldown period for automatic read pool scale-out. Minimum time between scale-out events. Must be an integer value. For example, if the value is 60, then a scale-out event will not be triggered within 60 seconds of the last scale-out event",
              hidden: true,
              args: {
                name: "AUTO_SCALE_OUT_COOLDOWN_SECONDS",
              },
            },
            {
              name: "--auto-scale-target-metrics",
              description:
                "Target metrics for read pool auto scaling. Options are: AVERAGE_CPU_UTILIZATION and AVERAGE_DB_CONNECTIONS. Example: --auto-scale-target-metrics=AVERAGE_CPU_UTILIZATION=0.8",
              hidden: true,
              args: {
                name: "METRIC=VALUE",
                description: "Dict",
              },
            },
            optAvailabilityType,
            optBackup,
            optBackupLocation,
            optBackupStartTime,
            optBillingProject,
            optClearActiveDirectory,
            optClearActiveDirectoryDnsServers,
            {
              name: "--clear-disk-encryption",
              description: "Disables CMEK in the restored instance",
              args: {
                name: "CLEAR_DISK_ENCRYPTION",
                description: "String",
              },
            },
            {
              name: "--clear-network",
              description:
                "Clears the network setting. This is useful to restore a backup to a different project or region where the original network configuration isn't available",
            },
            optCollation,
            optConfiguration,
            optConnectorEnforcement,
            optCpu,
            {
              name: "--database-version",
              description:
                "The database engine type and versions. If left unspecified, no changes occur. See the list of database versions at https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/SqlDatabaseVersion. Note for restore to new instance major version upgrades are not supported. Only minor version upgrades are allowed",
              args: {
                name: "DATABASE_VERSION",
                description: "String",
              },
            },
            optDeletionProtection,
            optDenyMaintenancePeriodEndDate,
            optDenyMaintenancePeriodStartDate,
            optDenyMaintenancePeriodTime,
            optDiskEncryptionKey,
            optDiskEncryptionKeyKeyring,
            optDiskEncryptionKeyLocation,
            optDiskEncryptionKeyProject,
            optEdition,
            optEnableBinLog,
            {
              name: "--enable-data-cache",
              description:
                "Enable use of data cache for accelerated read performance. This flag is only available for Enterprise_Plus edition instances",
              hidden: true,
            },
            {
              name: "--enable-dataplex-integration",
              description: "Enable Dataplex integration for Google Cloud SQL",
              hidden: true,
            },
            {
              name: "--enable-google-ml-integration",
              description:
                "Enable Vertex AI integration for Google Cloud SQL. You can integrate Vertex AI with Cloud SQL for MySQL and Cloud SQL for PostgreSQL instances only",
              hidden: true,
            },
            optEnableGooglePrivatePath,
            optEnablePointInTimeRecovery,
            optEnablePrivateServiceConnect,
            optFinalBackup,
            optFinalBackupRetentionDays,
            optFlagsFile,
            optFlatten,
            optFormat,
            optGceZone,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInsightsConfigEnhancedQueryInsightsEnabled,
            optInsightsConfigQueryInsightsEnabled,
            optInsightsConfigQueryPlansPerMinute,
            optInsightsConfigQueryStringLength,
            optInsightsConfigRecordApplicationTags,
            optInsightsConfigRecordClientAddress,
            optLogHttp,
            optMaintenanceReleaseChannel,
            optMaintenanceWindowDay,
            optMaintenanceWindowHour,
            optMemory,
            optNetwork,
            optNoAssignIp,
            optNoAsync,
            {
              name: "--no-auto-scale-disable-scale-in",
              description:
                "Disables automatic read pool scale-in. When disabled, read pool auto scaling only supports increasing the read pool node count. By default, both automatic read pool scale-in and scale-out are enabled",
              hidden: true,
            },
            {
              name: "--no-auto-scale-enabled",
              description:
                "Enables read pool auto scaling. Supports automatically increasing and decreasing the read pool's node count based on need",
              hidden: true,
            },
            {
              name: "--no-backup",
              description: "Enables daily backup",
              hidden: true,
            },
            optNoClearActiveDirectory,
            optNoClearActiveDirectoryDnsServers,
            {
              name: "--no-clear-network",
              description:
                "Clears the network setting. This is useful to restore a backup to a different project or region where the original network configuration isn't available",
              hidden: true,
            },
            optNoDeletionProtection,
            optNoEnableBinLog,
            {
              name: "--no-enable-data-cache",
              description:
                "Enable use of data cache for accelerated read performance. This flag is only available for Enterprise_Plus edition instances",
              hidden: true,
            },
            {
              name: "--no-enable-dataplex-integration",
              description: "Enable Dataplex integration for Google Cloud SQL",
              hidden: true,
            },
            {
              name: "--no-enable-google-ml-integration",
              description:
                "Enable Vertex AI integration for Google Cloud SQL. You can integrate Vertex AI with Cloud SQL for MySQL and Cloud SQL for PostgreSQL instances only",
              hidden: true,
            },
            optNoEnableGooglePrivatePath,
            optNoEnablePointInTimeRecovery,
            optNoEnablePrivateServiceConnect,
            optNoFinalBackup,
            {
              name: "--no-insights-config-enhanced-query-insights-enabled",
              description:
                "Enable enhanced query insights for Enterprise Plus edition to provide more detailed query analytics",
              hidden: true,
            },
            {
              name: "--no-insights-config-query-insights-enabled",
              description:
                "Enable query insights feature to provide query and query plan analytics",
              hidden: true,
            },
            {
              name: "--no-insights-config-record-application-tags",
              description:
                "Allow application tags to be recorded by the query insights feature",
              hidden: true,
            },
            {
              name: "--no-insights-config-record-client-address",
              description:
                "Allow the client address to be recorded by the query insights feature",
              hidden: true,
            },
            optNoRequireSsl,
            {
              name: "--no-retain-backups-on-delete",
              description:
                "Retain automated/ondemand backups of the instance after the instance is deleted",
              hidden: true,
            },
            optNoStorageAutoIncrease,
            {
              name: "--preferred-secondary-zone",
              description:
                "The preferred secondary zone for the cloned regional instance. If you specify a value for this flag, then the target instance uses the value as the secondary zone. The secondary zone can't be the same as the primary zone",
              args: {
                name: "PREFERRED_SECONDARY_ZONE",
                description: "String",
              },
            },
            {
              name: "--preferred-zone",
              description:
                "The preferred zone for the target instance. If you specify a value for this flag, then the target instance uses the value as the primary zone",
              args: {
                name: "PREFERRED_ZONE",
                description: "String",
              },
            },
            {
              name: "--private-network",
              description:
                "The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, '/projects/myProject/global/networks/default'",
              args: {
                name: "PRIVATE_NETWORK",
                description: "String",
              },
            },
            optProject,
            {
              name: "--psc-auto-connections",
              description:
                'A comma-separated list of networks or network-project pairs. Each project is represented by a project number (numeric) or by a project ID (alphanumeric). This allows Private Service Connect connections to be created automatically for the specified networks. For example, this connection uses "the form `psc-auto-connections`=`network=projects/testproject1/global/networks/testnetwork1`" or "the form `psc-auto-connections`=`project=testproject1,network=projects/testproject1/global/networks/testnetwork1`"',
              hidden: true,
              args: {
                name: "PSC_AUTO_CONNECTIONS",
                description: "Dict",
              },
            },
            optQuiet,
            optRegion,
            optRequireSsl,
            {
              name: "--restore-database-names",
              description:
                "The name of the databases to be restored for a point-in-time restore. If set, the destination instance will only restore the specified databases",
              args: {
                name: "RESTORE_DATABASE_NAMES",
                description: "String",
              },
            },
            {
              name: "--retain-backups-on-delete",
              description:
                "Retain automated/ondemand backups of the instance after the instance is deleted",
              hidden: true,
            },
            optRetainedBackupsCount,
            optRetainedTransactionLogDays,
            optSecondaryZone,
            {
              name: "--server-ca-mode",
              description: "Set the server CA mode of the instance",
              hidden: true,
              args: {
                name: "SERVER_CA_MODE",
                description: "String",
                suggestions: [
                  "CUSTOMER_MANAGED_CAS_CA",
                  "GOOGLE_MANAGED_CAS_CA",
                  "GOOGLE_MANAGED_INTERNAL_CA",
                ],
              },
            },
            optSslMode,
            optStorageAutoIncrease,
            optStorageProvisionedIops,
            optStorageProvisionedThroughput,
            optStorageSize,
            optStorageType,
            {
              name: "--tags",
              description:
                "Comma-separated list of tags to set on the instance. Use an equals signto separate tag name and value.(e.g., `--tags tag1:value1,tag2=value2`)",
              hidden: true,
              args: {
                name: "TAG=VALUE",
                description: "Dict",
              },
            },
            optTier,
            optTimeZone,
            optTimeout,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optZone,
          ],
          args: [
            {
              name: "DATASOURCE",
              description:
                "The Google Cloud Backup and Disaster Recovery (DR) Service Datasource URI, of the form projects/{project}/locations/{region}/backupVaults/ {backupvault}/dataSources/{datasource}",
            },
            {
              name: "TARGET",
              description: "Cloud SQL instance ID of the target instance",
            },
            {
              name: "POINT_IN_TIME",
              description:
                "The point in time in which to restore the instance to. Uses RFC 3339 format in UTC timezone. For example, '2012-11-15T16:19:00.094Z'",
            },
          ],
        },
        {
          name: "pre-check-major-version-upgrade",
          description:
            "Performs pre-checks for a major version upgrade of a Cloud SQL instance",
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
              name: "--target-database-version",
              description: "Target database version for the upgrade",
              priority: 100,
              args: {
                name: "TARGET_DATABASE_VERSION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description: "Cloud SQL instance ID",
          },
        },
        {
          name: "promote-replica",
          description:
            "Promotes Cloud SQL read replica to a stand-alone instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--failover",
              description:
                "Whether the promote operation is a failover. Use *--failover* to enable and *--no-failover* to disable",
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
              name: "--no-failover",
              description: "Whether the promote operation is a failover",
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REPLICA",
            description: "Cloud SQL read replica ID",
          },
        },
        {
          name: "reencrypt",
          description: "Reencrypts a Cloud SQL CMEK instance",
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
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description: "Cloud SQL instance ID",
          },
        },
        {
          name: "release-ssrs-lease",
          description:
            "Releases a SQL Server Reporting Services lease on a Cloud SQL instance",
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
            description: "Cloud SQL instance ID",
          },
        },
        {
          name: "reset-ssl-config",
          description: "Reset SSL materials according to the reset SSL mode",
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
            {
              name: "--mode",
              description:
                "Selectively refresh the SSL materials. _MODE_ must be one of:",
              args: {
                name: "MODE",
                description: "String",
                suggestions: ["ALL", "SYNC_FROM_PRIMARY"],
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
            name: "INSTANCE",
            description: "Cloud SQL instance ID",
          },
        },
        {
          name: "restart",
          description: "Restarts a Cloud SQL instance",
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
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description: "Cloud SQL instance ID",
          },
        },
        {
          name: "restore-backup",
          description: "Restores a backup of a Cloud SQL instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--backup-id",
              description: "The ID of the backup run to restore from",
              args: {
                name: "BACKUP_ID",
                description: "Int",
              },
            },
            {
              name: "--backup-instance",
              description:
                "The ID of the instance that the backup was taken from",
              args: {
                name: "BACKUP_INSTANCE",
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
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description: "Cloud SQL instance ID that will be restored",
          },
        },
        {
          name: "switchover",
          description:
            "Switches over a Cloud SQL instance to one of its replicas",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--db-timeout",
              description:
                "(MySQL and PostgreSQL only) Cloud SQL instance operations timeout, which is the sum of all database operations. Default value is 10 minutes and can be modified to a maximum value of 24h",
              args: {
                name: "DB_TIMEOUT",
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
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REPLICA",
            description: "Cloud SQL replica ID",
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
      description:
        "Provide commands for working with Cloud SQL instance operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels a Cloud SQL instance operation",
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
            name: "OPERATION",
            description: "Name that uniquely identifies the operation",
          },
        },
        {
          name: "describe",
          description:
            "Retrieves information about a Cloud SQL instance operation",
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
            name: "OPERATION",
            description: "Name that uniquely identifies the operation",
          },
        },
        {
          name: "list",
          description:
            "Lists all instance operations for the given Cloud SQL instance",
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
          name: "wait",
          description: "Waits for one or more operations to complete",
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
              name: "--timeout",
              description:
                "Maximum number of seconds to wait for an operation to complete. By default, wait for 300s. Set to *unlimited* to wait indefinitely",
              args: {
                name: "TIMEOUT",
                description: "Int",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "OPERATION",
            description: "An identifier that uniquely identifies the operation",
            isVariadic: true,
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
      name: "reschedule-maintenance",
      description: "Reschedule a Cloud SQL instance's maintenance",
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
          name: "--reschedule-type",
          description:
            "The type of reschedule operation to perform. _RESCHEDULE_TYPE_ must be one of: *IMMEDIATE*, *NEXT_AVAILABLE_WINDOW*, *SPECIFIC_TIME*",
          priority: 100,
          args: {
            name: "RESCHEDULE_TYPE",
            description: "String",
            suggestions: [
              "IMMEDIATE",
              "NEXT_AVAILABLE_WINDOW",
              "SPECIFIC_TIME",
            ],
          },
        },
        {
          name: "--schedule-time",
          description:
            "When specifying SPECIFIC_TIME, the date and time at which to schedule the maintenance in ISO 8601 format",
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
        description: "Cloud SQL instance ID",
      },
    },
    {
      name: "ssl",
      description:
        "Provide commands for managing SSL certificates of Cloud SQL instances",
      subcommands: [
        {
          name: "client-certs",
          description:
            "Provide commands for managing client certificates of Cloud SQL instances",
          subcommands: [
            {
              name: "create",
              description:
                "Create a client certificate for a Cloud SQL instance",
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
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: [
                {
                  name: "COMMON_NAME",
                  description:
                    "User supplied name. Constrained to ```[a-zA-Z.-_ ]+```",
                },
                {
                  name: "CERT_FILE",
                  description:
                    "Location of file which the private key of the created ssl-cert will be written to",
                  template: "filepaths",
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a client certificate for a Cloud SQL instance",
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
                optInstance,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "COMMON_NAME",
                description:
                  "User supplied name. Constrained to ```[a-zA-Z.-_ ]+```",
              },
            },
            {
              name: "describe",
              description:
                "Retrieve information about a client cert for a Cloud SQL instance",
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
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "COMMON_NAME",
                description:
                  "User supplied name. Constrained to ```[a-zA-Z.-_ ]+```",
              },
            },
            {
              name: "list",
              description: "List all client certs for a Cloud SQL instance",
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
          name: "entraid-certs",
          description:
            "Provide commands for managing Entra ID certificates of Cloud SQL instances",
          subcommands: [
            {
              name: "create",
              description:
                "Create an Entra ID certificate for a Cloud SQL instance",
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
                optInstance,
                optLogHttp,
                optNoAsync,
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
                "List all Entra ID certificates for a Cloud SQL instance",
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
              name: "rollback",
              description:
                "Roll back to the previous Entra ID certificate for a Cloud SQL instance",
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
                optInstance,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "rotate",
              description:
                "Rotate in the upcoming Entra ID certificate for a Cloud SQL instance",
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
                optInstance,
                optLogHttp,
                optNoAsync,
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
          name: "server-ca-certs",
          description:
            "Provide commands for managing server CA certs of Cloud SQL instances",
          subcommands: [
            {
              name: "create",
              description: "Create a server CA cert for a Cloud SQL instance",
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
                optInstance,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "list",
              description: "List all server CA certs for a Cloud SQL instance",
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
              name: "rollback",
              description:
                "Roll back to the previous server CA cert for a Cloud SQL instance",
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
                optInstance,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "rotate",
              description:
                "Rotate in the upcoming server CA cert for a Cloud SQL instance",
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
                optInstance,
                optLogHttp,
                optNoAsync,
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
          name: "server-certs",
          description:
            "Provide commands for managing server certificates of Cloud SQL instances",
          subcommands: [
            {
              name: "create",
              description:
                "Create a server certificate for a Cloud SQL instance",
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
                optInstance,
                optLogHttp,
                optNoAsync,
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
                "List all server certificates for a Cloud SQL instance",
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
              name: "rollback",
              description:
                "Roll back to the previous server certificate for a Cloud SQL instance",
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
                optInstance,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "rotate",
              description:
                "Rotate in the upcoming server certificate for a Cloud SQL instance",
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
                optInstance,
                optLogHttp,
                optNoAsync,
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
      name: "ssl-certs",
      description:
        "*(DEPRECATED)* Provide commands for managing SSL certificates of Cloud SQL instances",
      deprecated: true,
      subcommands: [
        {
          name: "create",
          description:
            "*(DEPRECATED)* Creates an SSL certificate for a Cloud SQL instance",
          deprecated: true,
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
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "COMMON_NAME",
              description:
                "User supplied name. Constrained to ```[a-zA-Z.-_ ]+```",
            },
            {
              name: "CERT_FILE",
              description:
                "Location of file which the private key of the created ssl-cert will be written to",
              template: "filepaths",
            },
          ],
        },
        {
          name: "delete",
          description:
            "*(DEPRECATED)* Deletes an SSL certificate for a Cloud SQL instance",
          deprecated: true,
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
            optInstance,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "COMMON_NAME",
            description:
              "User supplied name. Constrained to ```[a-zA-Z.-_ ]+```",
          },
        },
        {
          name: "describe",
          description:
            "*(DEPRECATED)* Retrieves information about an SSL cert for a Cloud SQL instance",
          deprecated: true,
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
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "COMMON_NAME",
            description:
              "User supplied name. Constrained to ```[a-zA-Z.-_ ]+```",
          },
        },
        {
          name: "list",
          description:
            "*(DEPRECATED)* Lists all SSL certs for a Cloud SQL instance",
          deprecated: true,
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
      name: "tiers",
      description: "Provide a command to list tiers",
      subcommands: [
        {
          name: "list",
          description: "Lists all available service tiers for Google Cloud SQL",
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
              name: "--no-show-edition",
              description: "Show the edition field",
              hidden: true,
            },
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            {
              name: "--show-edition",
              description: "Show the edition field",
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
      description: "Provide commands for managing Cloud SQL users",
      subcommands: [
        {
          name: "assign-roles",
          description: "Updates a user's database roles in a given instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--database-roles",
              description:
                "A comma-separated list of database roles to be assigned to the user. This option is only available for MySQL and PostgreSQL instances. You can include predefined Cloud SQL roles, like cloudsqlsuperuser, or your own custom roles. Custom roles must be created in the database before you can assign them. You can create roles using the CREATE ROLE statement for both MySQL and PostgreSQL",
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
            optHost,
            optImpersonateServiceAccount,
            optInstance,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-revoke-existing-roles",
              description:
                "A boolean flag for revoking existing database roles from the user. This option is only available for MySQL and PostgreSQL instances",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--revoke-existing-roles",
              description:
                "A boolean flag for revoking existing database roles from the user. This option is only available for MySQL and PostgreSQL instances",
            },
            optTraceToken,
            {
              name: "--type",
              description:
                "Cloud SQL user's type. It determines the method to authenticate the user during login. See the list of user types at https://cloud.google.com/sql/docs/postgres/admin-api/rest/v1beta4/SqlUserType",
              priority: 100,
              args: {
                name: "TYPE",
                description: "String",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "USERNAME",
            description: "Cloud SQL username",
          },
        },
        {
          name: "create",
          description: "Creates a user in a given instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--database-roles",
              description:
                "A comma-separated list of database roles to be assigned to the user. This option is only available for MySQL and PostgreSQL instances. You can include predefined Cloud SQL roles, like cloudsqlsuperuser, or your own custom roles. Custom roles must be created in the database before you can assign them. You can create roles using the CREATE ROLE statement for both MySQL and PostgreSQL",
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
            optHost,
            optImpersonateServiceAccount,
            optInstance,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-password-policy-enable-failed-attempts-check",
              description:
                "Enables the failed login attempts check if set to true",
            },
            {
              name: "--no-password-policy-enable-password-verification",
              description:
                "The current password must be specified when altering the password",
            },
            {
              name: "--password",
              description: "Cloud SQL user's password",
              args: {
                name: "PASSWORD",
                description: "String",
              },
            },
            {
              name: "--password-policy-allowed-failed-attempts",
              description:
                "Number of failed login attempts allowed before a user is locked out",
              args: {
                name: "PASSWORD_POLICY_ALLOWED_FAILED_ATTEMPTS",
                description: "Int",
              },
            },
            {
              name: "--password-policy-enable-failed-attempts-check",
              description:
                "Enables the failed login attempts check if set to true. Use *--password-policy-enable-failed-attempts-check* to enable and *--no-password-policy-enable-failed-attempts-check* to disable",
            },
            {
              name: "--password-policy-enable-password-verification",
              description:
                "The current password must be specified when altering the password. Use *--password-policy-enable-password-verification* to enable and *--no-password-policy-enable-password-verification* to disable",
            },
            {
              name: "--password-policy-password-expiration-duration",
              description:
                "Expiration duration after a password is updated, for example, 2d for 2 days. See `gcloud topic datetimes` for information on duration formats",
              args: {
                name: "PASSWORD_POLICY_PASSWORD_EXPIRATION_DURATION",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            {
              name: "--type",
              description:
                "Cloud SQL user's type. It determines the method to authenticate the user during login. See the list of user types at https://cloud.google.com/sql/docs/postgres/admin-api/rest/v1beta4/SqlUserType",
              args: {
                name: "TYPE",
                description: "String",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "USERNAME",
            description: "Cloud SQL username",
          },
        },
        {
          name: "delete",
          description: "Deletes a Cloud SQL user in a given instance",
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
            optHost,
            optImpersonateServiceAccount,
            optInstance,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "USERNAME",
            description: "Cloud SQL username",
          },
        },
        {
          name: "describe",
          description:
            "Retrieves information about a Cloud SQL user in a given instance",
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
            optHost,
            optImpersonateServiceAccount,
            optInstance,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "USERNAME",
            description: "Cloud SQL username",
          },
        },
        {
          name: "list",
          description: "Lists Cloud SQL users in a given instance",
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
          name: "set-password",
          description: "Changes a user's password in a given instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--discard-dual-password",
              description:
                "Discard the user's secondary password. Cannot set password and set this flag. This flag is only available for MySQL 8.0",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optHost,
            optImpersonateServiceAccount,
            optInstance,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-discard-dual-password",
              description:
                "Discard the user's secondary password. Cannot set password and set this flag. This flag is only available for MySQL 8.0",
              hidden: true,
            },
            {
              name: "--no-prompt-for-password",
              description:
                "Prompt for the Cloud SQL user's password with character echo disabled. The password is all typed characters up to but not including the RETURN or ENTER key",
              hidden: true,
            },
            {
              name: "--no-retain-password",
              description:
                "Retain the old password when changing to the new password. Must set password with this flag. This flag is only available for MySQL 8.0",
              hidden: true,
            },
            {
              name: "--password",
              description: "Cloud SQL user's password",
              args: {
                name: "PASSWORD",
                description: "String",
              },
            },
            optProject,
            {
              name: "--prompt-for-password",
              description:
                "Prompt for the Cloud SQL user's password with character echo disabled. The password is all typed characters up to but not including the RETURN or ENTER key",
            },
            optQuiet,
            {
              name: "--retain-password",
              description:
                "Retain the old password when changing to the new password. Must set password with this flag. This flag is only available for MySQL 8.0",
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "USERNAME",
            description: "Cloud SQL username",
          },
        },
        {
          name: "set-password-policy",
          description: "Replaces a user's password policy in a given instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--clear-password-policy",
              description:
                "Clear the existing password policy. This flag is only available for Postgres",
            },
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optHost,
            optImpersonateServiceAccount,
            optInstance,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-clear-password-policy",
              description:
                "Clear the existing password policy. This flag is only available for Postgres",
              hidden: true,
            },
            {
              name: "--no-password-policy-enable-failed-attempts-check",
              description:
                "Enables the failed login attempts check if set to true",
            },
            {
              name: "--no-password-policy-enable-password-verification",
              description:
                "The current password must be specified when altering the password",
            },
            {
              name: "--password-policy-allowed-failed-attempts",
              description:
                "Number of failed login attempts allowed before a user is locked out",
              args: {
                name: "PASSWORD_POLICY_ALLOWED_FAILED_ATTEMPTS",
                description: "Int",
              },
            },
            {
              name: "--password-policy-enable-failed-attempts-check",
              description:
                "Enables the failed login attempts check if set to true. Use *--password-policy-enable-failed-attempts-check* to enable and *--no-password-policy-enable-failed-attempts-check* to disable",
            },
            {
              name: "--password-policy-enable-password-verification",
              description:
                "The current password must be specified when altering the password. Use *--password-policy-enable-password-verification* to enable and *--no-password-policy-enable-password-verification* to disable",
            },
            {
              name: "--password-policy-password-expiration-duration",
              description:
                "Expiration duration after a password is updated, for example, 2d for 2 days. See `gcloud topic datetimes` for information on duration formats",
              args: {
                name: "PASSWORD_POLICY_PASSWORD_EXPIRATION_DURATION",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "USERNAME",
            description: "Cloud SQL username",
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
