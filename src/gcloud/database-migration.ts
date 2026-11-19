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

const optAutoCommit: Fig.Option = {
  name: "--auto-commit",
  description: "Auto commits the conversion workspace",
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

const optCaCertificate: Fig.Option = {
  name: "--ca-certificate",
  description:
    "X509 PEM-encoded certificate of the CA that signed the database server's certificate. The value for this flag needs to be the content of the certificate file, not the path to the file. For example, on a Linux machine you can use command substitution: <code>--ca-certificate=$(</path/to/certificate_file.pem)</code>. Database Migration Service will use this certificate to verify it's connecting to the correct host. Database Migration Service encrypts the value when storing it",
  args: {
    name: "CA_CERTIFICATE",
    description: "String",
  },
};

const optClientCertificate: Fig.Option = {
  name: "--client-certificate",
  description:
    "X509 PEM-encoded certificate that will be used by the replica to authenticate against the database server. The value for this flag needs to be the content of the certificate file, not the path to the file. For example, on a Linux machine you can use command substitution: <code>--ca-certificate=$(</path/to/certificate_file.pem)</code>. Database Migration Service encrypts the value when storing it",
  args: {
    name: "CLIENT_CERTIFICATE",
    description: "String",
  },
};

const optCloudsqlInstance: Fig.Option = {
  name: "--cloudsql-instance",
  description:
    "If the source or destination is a Cloud SQL database, then use this field to provide the respective Cloud SQL instance ID",
  args: {
    name: "CLOUDSQL_INSTANCE",
    description: "String",
  },
};

const optCommitId: Fig.Option = {
  name: "--commit-id",
  description:
    "Request a specific commit id. If not specified, the entities from the latest commit are returned",
  args: {
    name: "COMMIT_ID",
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

const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A user-friendly name for the connection profile. The display name can include letters, numbers, spaces, and hyphens, and must start with a letter",
  args: {
    name: "DISPLAY_NAME",
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

const optFilter2: Fig.Option = {
  name: "--filter",
  description:
    'Filter the entities based on [AIP-160](https://google.aip.dev/160) standard. Example: to filter all tables whose name start with "Employee" and are present under schema "Company", use filter as "Company.Employee```*``` AND type=TABLE"',
  args: {
    name: "FILTER",
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

const optForwardSshHostname: Fig.Option = {
  name: "--forward-ssh-hostname",
  description: "Hostname for the SSH tunnel",
  priority: 100,
  args: {
    name: "FORWARD_SSH_HOSTNAME",
    description: "String",
  },
};

const optForwardSshPassword: Fig.Option = {
  name: "--forward-ssh-password",
  description: "SSH password",
  args: {
    name: "FORWARD_SSH_PASSWORD",
    description: "String",
  },
};

const optForwardSshPort: Fig.Option = {
  name: "--forward-ssh-port",
  description: "Port for the SSH tunnel, default value is 22",
  args: {
    name: "FORWARD_SSH_PORT",
    description: "Int",
  },
};

const optForwardSshPrivateKey: Fig.Option = {
  name: "--forward-ssh-private-key",
  description: "SSH private key",
  args: {
    name: "FORWARD_SSH_PRIVATE_KEY",
    description: "String",
  },
};

const optForwardSshUsername: Fig.Option = {
  name: "--forward-ssh-username",
  description: "Username for the SSH tunnel",
  priority: 100,
  args: {
    name: "FORWARD_SSH_USERNAME",
    description: "String",
  },
};

const optHost: Fig.Option = {
  name: "--host",
  description:
    "IP or hostname of the database. When `--psc-service-attachment` is also specified, this field value should be:",
  priority: 100,
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

const optLabels: Fig.Option = {
  name: "--labels",
  description: "List of label KEY=VALUE pairs to add",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
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
    "Waits for the operation in progress to complete before returning",
};

const optNoAutoCommit: Fig.Option = {
  name: "--no-auto-commit",
  description: "Auto commits the conversion workspace",
  hidden: true,
};

const optNoPromptForPassword: Fig.Option = {
  name: "--no-prompt-for-password",
  description: "Prompt for the password used to connect to the database",
  hidden: true,
};

const optNoStaticIpConnectivity: Fig.Option = {
  name: "--no-static-ip-connectivity",
  description: "Use static ip connectivity",
  hidden: true,
};

const optNoUncommitted: Fig.Option = {
  name: "--no-uncommitted",
  description:
    "Whether to retrieve the latest committed version of the entities or the latest version. This field is ignored if a specific commit_id is specified",
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
    "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is *100*. Paging may be applied before or after *--filter* and *--limit* depending on the service",
  args: {
    name: "PAGE_SIZE",
    description: "Int",
  },
};

const optPageSize2: Fig.Option = {
  name: "--page-size",
  description:
    "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is determined by the service if it supports paging, otherwise it is *unlimited* (no paging). Paging may be applied before or after *--filter* and *--limit* depending on the service",
  args: {
    name: "PAGE_SIZE",
  },
};

const optPassword: Fig.Option = {
  name: "--password",
  description:
    "Password for the user that Database Migration Service uses to connect to the database. Database Migration Service encrypts the value when storing it, and the field is not returned on request",
  args: {
    name: "PASSWORD",
    description: "String",
  },
};

const optPort: Fig.Option = {
  name: "--port",
  description: "Network port of the database",
  priority: 100,
  args: {
    name: "PORT",
    description: "Int",
  },
};

const optPrivateConnection: Fig.Option = {
  name: "--private-connection",
  description:
    "ID of the private_connection or fully qualified identifier for the private_connection",
  priority: 100,
  args: {
    name: "PRIVATE_CONNECTION",
    description: "String",
  },
};

const optPrivateKey: Fig.Option = {
  name: "--private-key",
  description:
    "Unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate. The value for this flag needs to be the content of the certificate file, not the path to the file. For example, on a Linux machine you can use command substitution: <code>--ca-certificate=$(</path/to/certificate_file.pem)</code>. Database Migration Service encrypts the value when storing it",
  args: {
    name: "PRIVATE_KEY",
    description: "String",
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

const optPromptForPassword: Fig.Option = {
  name: "--prompt-for-password",
  description: "Prompt for the password used to connect to the database",
};

const optQuiet: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input is required, defaults will be used, or an error will be raised",
};

const optRegion: Fig.Option = {
  name: "--region",
  description: "ID of the region or fully qualified identifier for the region",
  priority: 100,
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion2: Fig.Option = {
  name: "--region",
  description: "The Cloud region for the connection_profile",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion3: Fig.Option = {
  name: "--region",
  description: "The Cloud region for the conversion_workspace",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion4: Fig.Option = {
  name: "--region",
  description: "The Cloud region for the migration_job",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion5: Fig.Option = {
  name: "--region",
  description: "The name of the region",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRole: Fig.Option = {
  name: "--role",
  description:
    "The role of the connection profile. _ROLE_ must be one of: *SOURCE*, *DESTINATION*",
  args: {
    name: "ROLE",
    description: "String",
    suggestions: ["SOURCE", "DESTINATION"],
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

const optSslType: Fig.Option = {
  name: "--ssl-type",
  description:
    "The type of SSL configuration. _SSL_TYPE_ must be one of: *SERVER_ONLY*, *SERVER_CLIENT*, *REQUIRED*, *NONE*",
  args: {
    name: "SSL_TYPE",
    description: "String",
    suggestions: ["SERVER_ONLY", "SERVER_CLIENT", "REQUIRED", "NONE"],
  },
};

const optStaticIpConnectivity: Fig.Option = {
  name: "--static-ip-connectivity",
  description: "Use static ip connectivity",
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

const optUncommitted: Fig.Option = {
  name: "--uncommitted",
  description:
    "Whether to retrieve the latest committed version of the entities or the latest version. This field is ignored if a specific commit_id is specified",
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

const optUsername: Fig.Option = {
  name: "--username",
  description:
    "Username that Database Migration Service uses to connect to the database. Database Migration Service encrypts the value when storing it",
  priority: 100,
  args: {
    name: "USERNAME",
    description: "String",
  },
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
  name: "database-migration",
  description: "Manage Database Migration Service resources",
  subcommands: [
    {
      name: "connection-profiles",
      description: "Manage Database Migration Service connection profiles",
      subcommands: [
        {
          name: "create",
          description: "Create Database Migration Service connection profiles",
          subcommands: [
            {
              name: "alloydb",
              description:
                "Create a Database Migration Service connection profile for AlloyDB",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--authorized-network-cidr-ranges",
                  description:
                    "Comma-separated list of CIDR ranges that can connect to the AlloyDB instance",
                  args: {
                    name: "NETWORK",
                    description: "List",
                  },
                },
                optBillingProject,
                {
                  name: "--cluster-labels",
                  description:
                    'The resource labels for an AlloyDB cluster. An object containing a list of "key": "value" pairs',
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                  },
                },
                optConfiguration,
                {
                  name: "--cpu-count",
                  description:
                    "Whole number value indicating how many vCPUs the machine should contain. Each vCPU count corresponds to a N2 high-mem machine: (https://cloud.google.com/compute/docs/general-purpose-machines#n2_machines). _CPU_COUNT_ must be one of: *2*, *4*, *8*, *16*, *32*, *64*",
                  priority: 100,
                  args: {
                    name: "CPU_COUNT",
                    description: "Int",
                    suggestions: ["2", "4", "8", "16", "32", "64"],
                  },
                },
                {
                  name: "--database-flags",
                  description:
                    "Comma-separated list of database flags to set on the AlloyDB primary instance. Use an equals sign to separate the flag name and value. Flags without values, like skip_grant_tables, can be written out without a value, e.g., `skip_grant_tables=`. Use on/off values for booleans. View AlloyDB's documentation for allowed flags (e.g., `--database-flags max_allowed_packet=55555,skip_grant_tables=,log_output=1`)",
                  args: {
                    name: "FLAG=VALUE",
                    description: "Dict",
                  },
                },
                {
                  name: "--database-version",
                  description:
                    "Database engine major version. _DATABASE_VERSION_ must be one of: *POSTGRES_14*, *POSTGRES_15*, *POSTGRES_16*, *POSTGRES_17*",
                  args: {
                    name: "DATABASE_VERSION",
                    description: "String",
                    suggestions: [
                      "POSTGRES_14",
                      "POSTGRES_15",
                      "POSTGRES_16",
                      "POSTGRES_17",
                    ],
                  },
                },
                optDisplayName,
                {
                  name: "--enable-outbound-public-ip",
                  description:
                    "If true, Enables an outbound public IP address to support a database server sending requests out into the internet",
                },
                {
                  name: "--enable-public-ip",
                  description:
                    "If true, the AlloyDB instance will be accessible via public IP",
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
                    "ID of the kms-key or fully qualified identifier for the kms-key",
                  priority: 100,
                  args: {
                    name: "KMS_KEY",
                    description: "String",
                  },
                },
                {
                  name: "--kms-keyring",
                  description: "The CMEK keyring id of the kms-key",
                  args: {
                    name: "KMS_KEYRING",
                    description: "String",
                  },
                },
                {
                  name: "--kms-project",
                  description: "The Cloud project id for the kms-key",
                  args: {
                    name: "KMS_PROJECT",
                    description: "String",
                  },
                },
                optLabels,
                optLogHttp,
                {
                  name: "--network",
                  description:
                    "The VPC network from which the AlloyDB instance is accessible via private IP. For example, projects/myProject/global/networks/default. This setting cannot be updated after it is set",
                  args: {
                    name: "NETWORK",
                    description: "String",
                  },
                },
                optNoAsync,
                {
                  name: "--no-enable-outbound-public-ip",
                  description:
                    "If true, Enables an outbound public IP address to support a database server sending requests out into the internet",
                  hidden: true,
                },
                {
                  name: "--no-enable-public-ip",
                  description:
                    "If true, the AlloyDB instance will be accessible via public IP",
                  hidden: true,
                },
                {
                  name: "--password",
                  description: "Initial password for the 'postgres' user",
                  priority: 100,
                  args: {
                    name: "PASSWORD",
                    description: "String",
                  },
                },
                {
                  name: "--primary-id",
                  description:
                    "The ID of the primary instance for this AlloyDB cluster",
                  priority: 100,
                  args: {
                    name: "PRIMARY_ID",
                    description: "String",
                  },
                },
                {
                  name: "--primary-labels",
                  description:
                    'The resource labels for an AlloyDB primary instance. An object containing a list of "key": "value" pairs',
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                  },
                },
                optProject,
                optQuiet,
                optRegion2,
                optRole,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "CONNECTION_PROFILE",
                description:
                  "ID of the connection_profile or fully qualified identifier for the connection_profile",
              },
            },
            {
              name: "cloudsql",
              description:
                "Create a Database Migration Service connection profile for Cloud SQL",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--activation-policy",
                  description:
                    "Activation policy specifies when the instance is activated; it is applicable only when the instance state is 'RUNNABLE'. Valid values:",
                  args: {
                    name: "ACTIVATION_POLICY",
                    description: "String",
                    suggestions: ["ALWAYS", "NEVER"],
                  },
                },
                {
                  name: "--allocated-ip-range",
                  description:
                    "The name of the allocated IP range for the private IP Cloud SQL instance. This name refers to an already allocated IP range. If set, the instance IP will be created in the allocated range",
                  args: {
                    name: "ALLOCATED_IP_RANGE",
                    description: "String",
                  },
                },
                {
                  name: "--authorized-networks",
                  description:
                    "List of external networks that are allowed to connect to the instance. Specify values in CIDR notation, also known as 'slash' notation (e.g.192.168.100.0/24)",
                  args: {
                    name: "NETWORK",
                    description: "List",
                  },
                },
                {
                  name: "--auto-storage-increase",
                  description:
                    "If you enable this setting, Cloud SQL checks your available storage every 30 seconds. If the available storage falls below a threshold size, Cloud SQL automatically adds additional storage capacity. If the available storage repeatedly falls below the threshold size, Cloud SQL continues to add storage until it reaches the maximum of 64 TB. Default: ON. Enabled by default, use *--no-auto-storage-increase* to disable",
                },
                {
                  name: "--availability-type",
                  description:
                    "Cloud SQL availability type. _AVAILABILITY_TYPE_ must be one of: *REGIONAL*, *ZONAL*",
                  args: {
                    name: "AVAILABILITY_TYPE",
                    description: "String",
                    suggestions: ["REGIONAL", "ZONAL"],
                  },
                },
                optBillingProject,
                {
                  name: "--cmek-key",
                  description:
                    "ID of the cmek-key or fully qualified identifier for the cmek-key",
                  priority: 100,
                  args: {
                    name: "CMEK_KEY",
                    description: "String",
                  },
                },
                {
                  name: "--cmek-keyring",
                  description: "The CMEK keyring id of the cmek-key",
                  args: {
                    name: "CMEK_KEYRING",
                    description: "String",
                  },
                },
                {
                  name: "--cmek-project",
                  description: "The Cloud project id for the cmek-key",
                  args: {
                    name: "CMEK_PROJECT",
                    description: "String",
                  },
                },
                optConfiguration,
                {
                  name: "--data-disk-size",
                  description:
                    "Storage capacity available to the database, in GB. The minimum (and default) size is 10GB",
                  args: {
                    name: "DATA_DISK_SIZE",
                    description: "Int",
                  },
                },
                {
                  name: "--data-disk-type",
                  description:
                    "Type of storage. _DATA_DISK_TYPE_ must be one of: *PD_SSD*, *PD_HDD*",
                  args: {
                    name: "DATA_DISK_TYPE",
                    description: "String",
                    suggestions: ["PD_SSD", "PD_HDD"],
                  },
                },
                {
                  name: "--database-flags",
                  description:
                    "Comma-separated list of database flags to set on the instance. Use an equals sign to separate the flag name and value. Flags without values, like skip_grant_tables, can be written out without a value, e.g., `skip_grant_tables=`. Use on/off values for booleans. View the Instance Resource API for allowed flags. (e.g., `--database-flags max_allowed_packet=55555 skip_grant_tables=,log_output=1`)",
                  args: {
                    name: "FLAG=VALUE",
                    description: "Dict",
                  },
                },
                {
                  name: "--database-version",
                  description:
                    "Database engine type and version. _DATABASE_VERSION_ must be one of: *MYSQL_5_7*, *MYSQL_5_6*, *MYSQL_8_0*, *MYSQL_8_0_18*, *MYSQL_8_0_26*, *MYSQL_8_0_27*, *MYSQL_8_0_28*, *MYSQL_8_0_30*, *MYSQL_8_0_31*, *MYSQL_8_0_32*, *MYSQL_8_0_33*, *MYSQL_8_0_34*, *MYSQL_8_0_35*, *MYSQL_8_0_36*, *MYSQL_8_0_37*, *MYSQL_8_4*, *POSTGRES_9_6*, *POSTGRES_10*, *POSTGRES_11*, *POSTGRES_12*, *POSTGRES_13*, *POSTGRES_14*, *POSTGRES_15*, *POSTGRES_16*",
                  args: {
                    name: "DATABASE_VERSION",
                    description: "String",
                    suggestions: [
                      "MYSQL_5_7",
                      "MYSQL_5_6",
                      "MYSQL_8_0",
                      "MYSQL_8_0_18",
                      "MYSQL_8_0_26",
                      "MYSQL_8_0_27",
                      "MYSQL_8_0_28",
                      "MYSQL_8_0_30",
                      "MYSQL_8_0_31",
                      "MYSQL_8_0_32",
                      "MYSQL_8_0_33",
                      "MYSQL_8_0_34",
                      "MYSQL_8_0_35",
                      "MYSQL_8_0_36",
                      "MYSQL_8_0_37",
                      "MYSQL_8_4",
                      "POSTGRES_9_6",
                      "POSTGRES_10",
                      "POSTGRES_11",
                      "POSTGRES_12",
                      "POSTGRES_13",
                      "POSTGRES_14",
                      "POSTGRES_15",
                      "POSTGRES_16",
                    ],
                  },
                },
                {
                  name: "--database-version-name",
                  description: "Database version name (e.g. POSTGRES_15)",
                  args: {
                    name: "DATABASE_VERSION_NAME",
                    description: "String",
                  },
                },
                optDisplayName,
                {
                  name: "--edition",
                  description: "Specifies edition. _EDITION_ must be one of:",
                  args: {
                    name: "EDITION",
                    suggestions: ["enterprise", "enterprise-plus"],
                  },
                },
                {
                  name: "--enable-data-cache",
                  description:
                    "Enable use of data cache for accelerated read performance. This flag is only available for Enterprise Plus edition instances",
                  hidden: true,
                },
                {
                  name: "--enable-ip-v4",
                  description:
                    "Whether the instance should be assigned an IPv4 address or not. Enabled by default, use *--no-enable-ip-v4* to disable",
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLabels,
                optLogHttp,
                optNoAsync,
                {
                  name: "--no-auto-storage-increase",
                  description:
                    "If you enable this setting, Cloud SQL checks your available storage every 30 seconds. If the available storage falls below a threshold size, Cloud SQL automatically adds additional storage capacity. If the available storage repeatedly falls below the threshold size, Cloud SQL continues to add storage until it reaches the maximum of 64 TB. Default: ON",
                  hidden: true,
                },
                {
                  name: "--no-enable-data-cache",
                  description:
                    "Enable use of data cache for accelerated read performance. This flag is only available for Enterprise Plus edition instances",
                  hidden: true,
                },
                {
                  name: "--no-enable-ip-v4",
                  description:
                    "Whether the instance should be assigned an IPv4 address or not",
                  hidden: true,
                },
                {
                  name: "--no-require-ssl",
                  description:
                    "Whether SSL connections over IP should be enforced or not",
                  hidden: true,
                },
                {
                  name: "--private-network",
                  description:
                    "Resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, /projects/myProject/global/networks/default. This setting can be updated, but it cannot be removed after it is set",
                  args: {
                    name: "PRIVATE_NETWORK",
                    description: "String",
                  },
                },
                optProject,
                {
                  name: "--provider",
                  description:
                    "Database provider, for managed databases. _PROVIDER_ must be one of: *RDS*, *CLOUDSQL*",
                  args: {
                    name: "PROVIDER",
                    description: "String",
                    suggestions: ["RDS", "CLOUDSQL"],
                  },
                },
                optQuiet,
                optRegion2,
                {
                  name: "--require-ssl",
                  description:
                    "Whether SSL connections over IP should be enforced or not",
                },
                optRole,
                {
                  name: "--root-password",
                  description: "Root Cloud SQL user's password",
                  args: {
                    name: "ROOT_PASSWORD",
                    description: "String",
                  },
                },
                {
                  name: "--secondary-zone",
                  description:
                    "Google Cloud Platform zone where the failover Cloud SQL database instance is located. Used when the Cloud SQL database availability type is REGIONAL (i.e. multiple zones / highly available)",
                  args: {
                    name: "SECONDARY_ZONE",
                    description: "String",
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "ID of the connection_profile or fully qualified identifier for the connection_profile",
                  priority: 100,
                  args: {
                    name: "SOURCE_ID",
                    description: "String",
                  },
                },
                {
                  name: "--storage-auto-resize-limit",
                  description:
                    "Maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit",
                  args: {
                    name: "STORAGE_AUTO_RESIZE_LIMIT",
                    description: "Int",
                  },
                },
                {
                  name: "--tier",
                  description:
                    "Tier (or machine type) for this instance, for example: ``db-n1-standard-1'' (MySQL instances) or ``db-custom-1-3840'' (PostgreSQL instances). For more information, see [Cloud SQL Instance Settings](https://cloud.google.com/sql/docs/mysql/instance-settings)",
                  priority: 100,
                  args: {
                    name: "TIER",
                    description: "String",
                  },
                },
                optTraceToken,
                {
                  name: "--user-labels",
                  description:
                    'The resource labels for a Cloud SQL instance to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs',
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                  },
                },
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--zone",
                  description:
                    "Google Cloud Platform zone where your Cloud SQL database instance is located",
                  args: {
                    name: "ZONE",
                    description: "String",
                  },
                },
              ],
              args: {
                name: "CONNECTION_PROFILE",
                description:
                  "ID of the connection_profile or fully qualified identifier for the connection_profile",
              },
            },
            {
              name: "mysql",
              description:
                "Create a Database Migration Service connection profile for MySQL",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCaCertificate,
                optClientCertificate,
                optCloudsqlInstance,
                optConfiguration,
                optDisplayName,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optHost,
                optImpersonateServiceAccount,
                optLabels,
                optLogHttp,
                optNoAsync,
                optNoPromptForPassword,
                optPassword,
                optPort,
                optPrivateKey,
                optProject,
                optPromptForPassword,
                {
                  name: "--provider",
                  description:
                    "Database provider, for managed databases. _PROVIDER_ must be one of: *RDS*, *CLOUDSQL*",
                  args: {
                    name: "PROVIDER",
                    description: "String",
                    suggestions: ["RDS", "CLOUDSQL"],
                  },
                },
                optQuiet,
                optRegion2,
                optRole,
                optSslType,
                optTraceToken,
                optUserOutputEnabled,
                optUsername,
                optVerbosity,
              ],
              args: {
                name: "CONNECTION_PROFILE",
                description:
                  "ID of the connection_profile or fully qualified identifier for the connection_profile",
              },
            },
            {
              name: "oracle",
              description:
                "Create a Database Migration Service connection profile for Oracle",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--ca-certificate",
                  description:
                    "X509 PEM-encoded certificate of the CA that signed the database server's certificate. The value for this flag needs to be the content of the certificate file, not the path to the file. For example, on a Linux machine you can use command substitution: <code>--ca-certificate=$(</path/to/certificate_file.pem)</code>. Database Migration Service will use this certificate to verify it's connecting to the correct host. Database Migration Service encrypts the value when storing it",
                  priority: 100,
                  args: {
                    name: "CA_CERTIFICATE",
                    description: "String",
                  },
                },
                optConfiguration,
                {
                  name: "--database-service",
                  description:
                    "Database service for the oracle connection profile",
                  priority: 100,
                  args: {
                    name: "DATABASE_SERVICE",
                    description: "String",
                  },
                },
                optDisplayName,
                optFlagsFile,
                optFlatten,
                optFormat,
                optForwardSshHostname,
                optForwardSshPassword,
                optForwardSshPort,
                optForwardSshPrivateKey,
                optForwardSshUsername,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optHost,
                optImpersonateServiceAccount,
                optLabels,
                optLogHttp,
                optNoAsync,
                optNoPromptForPassword,
                optNoStaticIpConnectivity,
                optPassword,
                optPort,
                optPrivateConnection,
                optProject,
                optPromptForPassword,
                optQuiet,
                optRegion2,
                optRole,
                optStaticIpConnectivity,
                optTraceToken,
                optUserOutputEnabled,
                optUsername,
                optVerbosity,
              ],
              args: {
                name: "CONNECTION_PROFILE",
                description:
                  "ID of the connection_profile or fully qualified identifier for the connection_profile",
              },
            },
            {
              name: "postgresql",
              description:
                "Create a Database Migration Service connection profile for PostgreSQL",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--alloydb-cluster",
                  description:
                    "If the destination is an AlloyDB cluster, use this field to provide the AlloyDB cluster ID",
                  args: {
                    name: "ALLOYDB_CLUSTER",
                    description: "String",
                  },
                },
                optBillingProject,
                optCaCertificate,
                optClientCertificate,
                optCloudsqlInstance,
                optConfiguration,
                {
                  name: "--database",
                  description:
                    "The name of the specific database within the host. For Native Logical Postgres migrations, one of the replicating databases must be specified",
                  args: {
                    name: "DATABASE",
                    description: "String",
                  },
                },
                optDisplayName,
                {
                  name: "--enable-iam-authentication",
                  description:
                    "Use IAM database authentication to connect to the database. The username will be overridden by the DMS service agent principal. This flag is only supported for PostgreSQL Destinations",
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                optForwardSshHostname,
                optForwardSshPassword,
                optForwardSshPort,
                optForwardSshPrivateKey,
                optForwardSshUsername,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optHost,
                optImpersonateServiceAccount,
                optLabels,
                optLogHttp,
                optNoAsync,
                optNoPromptForPassword,
                optNoStaticIpConnectivity,
                optPassword,
                optPort,
                optPrivateConnection,
                optPrivateKey,
                optProject,
                optPromptForPassword,
                {
                  name: "--psc-service-attachment",
                  description:
                    "ID of the service_attachment or fully qualified identifier for the service_attachment",
                  priority: 100,
                  args: {
                    name: "PSC_SERVICE_ATTACHMENT",
                    description: "String",
                  },
                },
                optQuiet,
                optRegion2,
                optRole,
                optSslType,
                optStaticIpConnectivity,
                optTraceToken,
                optUserOutputEnabled,
                optUsername,
                optVerbosity,
              ],
              args: {
                name: "CONNECTION_PROFILE",
                description:
                  "ID of the connection_profile or fully qualified identifier for the connection_profile",
              },
            },
            {
              name: "sqlserver",
              description:
                "Create a Database Migration Service connection profile for SQL Server",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCaCertificate,
                optCloudsqlInstance,
                {
                  name: "--cloudsql-project-id",
                  description:
                    "The project id of the Cloud SQL instance. Only needed if the Cloud SQL instance is in a different project than the connection profile. This is only supported for source connection profiles for SQL Server",
                  args: {
                    name: "CLOUDSQL_PROJECT_ID",
                    description: "String",
                  },
                },
                optConfiguration,
                {
                  name: "--database",
                  description:
                    "The name of the specific database within the host",
                  args: {
                    name: "DATABASE",
                    description: "String",
                  },
                },
                {
                  name: "--dbm-port",
                  description: "The Database Mirroring (DBM) port",
                  hidden: true,
                  args: {
                    name: "DBM_PORT",
                    description: "Int",
                  },
                },
                optDisplayName,
                optFlagsFile,
                optFlatten,
                optFormat,
                optForwardSshHostname,
                optForwardSshPassword,
                optForwardSshPort,
                optForwardSshPrivateKey,
                optForwardSshUsername,
                {
                  name: "--gcs-bucket",
                  description:
                    "Cloud Storage bucket for the source SQL Server connection profile where the backups are stored. This flag is used only for SQL Server to Cloud SQL migrations",
                  priority: 100,
                  args: {
                    name: "GCS_BUCKET",
                    description: "String",
                  },
                },
                {
                  name: "--gcs-prefix",
                  description:
                    "Cloud Storage prefix path within the bucket for the source SQL Server connection profile where the backups are stored. This flag is used only for SQL Server to Cloud SQL migrations",
                  args: {
                    name: "GCS_PREFIX",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optHost,
                optImpersonateServiceAccount,
                optLabels,
                optLogHttp,
                optNoAsync,
                optNoPromptForPassword,
                optNoStaticIpConnectivity,
                optPassword,
                optPort,
                optPrivateConnection,
                optProject,
                optPromptForPassword,
                {
                  name: "--provider",
                  description:
                    "Database provider, for managed databases. _PROVIDER_ must be one of: *CLOUDSQL*, *RDS*",
                  args: {
                    name: "PROVIDER",
                    description: "String",
                    suggestions: ["CLOUDSQL", "RDS"],
                  },
                },
                {
                  name: "--psc-service-attachment",
                  description:
                    "ID of the service_attachment or fully qualified identifier for the service_attachment",
                  priority: 100,
                  args: {
                    name: "PSC_SERVICE_ATTACHMENT",
                    description: "String",
                  },
                },
                optQuiet,
                optRegion2,
                optRole,
                {
                  name: "--ssl-flags",
                  description:
                    "Comma-separated list of SSL flags used for establishing SSL connection to the database. Use an equals sign to separate the flag name and value. Example: `--ssl-flags ssl_mode=enable,server_certificate_hostname=server.com`",
                  args: {
                    name: "FLAG=VALUE",
                    description: "Dict",
                  },
                },
                {
                  name: "--ssl-type",
                  description:
                    "The type of SSL configuration. _SSL_TYPE_ must be one of: *SERVER_ONLY*, *REQUIRED*, *NONE*",
                  args: {
                    name: "SSL_TYPE",
                    description: "String",
                    suggestions: ["SERVER_ONLY", "REQUIRED", "NONE"],
                  },
                },
                optStaticIpConnectivity,
                optTraceToken,
                optUserOutputEnabled,
                {
                  name: "--username",
                  description:
                    "Username that Database Migration Service uses to connect to the database for metrics and observability. We highly recommend that you use the sqlserver user for this. Database Migration Service encrypts the value when storing it",
                  priority: 100,
                  args: {
                    name: "USERNAME",
                    description: "String",
                  },
                },
                optVerbosity,
              ],
              args: {
                name: "CONNECTION_PROFILE",
                description:
                  "ID of the connection_profile or fully qualified identifier for the connection_profile",
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
          description: "Delete a Database Migration Service connection profile",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--force",
              description:
                "Cloud SQL replica database is also deleted (only for Cloud SQL connection profiles)",
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            {
              name: "--no-force",
              description:
                "Cloud SQL replica database is also deleted (only for Cloud SQL connection profiles)",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion5,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONNECTION_PROFILE",
            description:
              "ID of the connection_profile or fully qualified identifier for the connection_profile",
          },
        },
        {
          name: "describe",
          description:
            "Show details about a Database Migration Service connection profile",
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
            name: "CONNECTION_PROFILE",
            description:
              "ID of the connection_profile or fully qualified identifier for the connection_profile",
          },
        },
        {
          name: "fetch-static-ips",
          description: "List IPs used for static IP connectivity method",
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
          description: "List Database Migration Service connection profiles",
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
            optPageSize2,
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
          name: "test",
          description: "Test a Database Migration Service connection profile",
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
            optNoAsync,
            optProject,
            optQuiet,
            optRegion2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONNECTION_PROFILE",
            description:
              "ID of the connection_profile or fully qualified identifier for the connection_profile",
          },
        },
        {
          name: "update",
          description: "Update a Database Migration Service connection profile",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--alloydb-cluster",
              description:
                "If the destination is an AlloyDB cluster, use this field to provide the AlloyDB cluster ID",
              args: {
                name: "ALLOYDB_CLUSTER",
                description: "String",
              },
            },
            optBillingProject,
            optCaCertificate,
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
            },
            optClientCertificate,
            optCloudsqlInstance,
            {
              name: "--cloudsql-project-id",
              description:
                "The project id of the Cloud SQL instance. Only needed if the Cloud SQL instance is in a different project than the connection profile. This is only supported for source connection profiles for SQL Server",
              args: {
                name: "CLOUDSQL_PROJECT_ID",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--database",
              description: "The name of the specific database within the host",
              args: {
                name: "DATABASE",
                description: "String",
              },
            },
            {
              name: "--database-service",
              description: "Database service for the oracle connection profile",
              args: {
                name: "DATABASE_SERVICE",
                description: "String",
              },
            },
            {
              name: "--dbm-port",
              description: "The Database Mirroring (DBM) port",
              hidden: true,
              args: {
                name: "DBM_PORT",
                description: "Int",
              },
            },
            {
              name: "--disable-iam-authentication",
              description:
                "Use IAM database authentication to connect to the database. The username will be overridden by the DMS service agent principal. This flag is only supported for PostgreSQL Destinations",
            },
            optDisplayName,
            {
              name: "--enable-iam-authentication",
              description:
                "Use IAM database authentication to connect to the database. The username will be overridden by the DMS service agent principal. This flag is only supported for PostgreSQL Destinations",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gcs-bucket",
              description:
                "Cloud Storage bucket for the source SQL Server connection profile where the backups are stored. This flag is used only for SQL Server to Cloud SQL migrations",
              priority: 100,
              args: {
                name: "GCS_BUCKET",
                description: "String",
              },
            },
            {
              name: "--gcs-prefix",
              description:
                "Cloud Storage prefix path within the bucket for the source SQL Server connection profile where the backups are stored. This flag is used only for SQL Server to Cloud SQL migrations",
              args: {
                name: "GCS_PREFIX",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--host",
              description:
                "IP or hostname of the database. When `--psc-service-attachment` is also specified, this field value should be:",
              args: {
                name: "HOST",
                description: "String",
              },
            },
            optImpersonateServiceAccount,
            optLogHttp,
            {
              name: "--no-clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
              hidden: true,
            },
            optNoPromptForPassword,
            optPassword,
            {
              name: "--port",
              description: "Network port of the database",
              args: {
                name: "PORT",
                description: "Int",
              },
            },
            optPrivateKey,
            optProject,
            optPromptForPassword,
            optQuiet,
            optRegion2,
            {
              name: "--remove-labels",
              description:
                "List of label keys to remove. If a label does not exist it is silently ignored. If `--update-labels` is also specified then `--update-labels` is applied first",
              args: {
                name: "KEY",
                description: "List",
              },
            },
            optSslType,
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
              name: "--username",
              description:
                "Username that Database Migration Service uses to connect to the database. Database Migration Service encrypts the value when storing it",
              args: {
                name: "USERNAME",
                description: "String",
              },
            },
            optVerbosity,
          ],
          args: {
            name: "CONNECTION_PROFILE",
            description:
              "ID of the connection_profile or fully qualified identifier for the connection_profile",
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
      name: "conversion-workspaces",
      description: "Manage Database Migration Service conversion workspaces",
      subcommands: [
        {
          name: "apply",
          description:
            "Apply a Database Migration Service conversion workspace",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--destination-connection-profile",
              description:
                "ID of the connection_profile or fully qualified identifier for the connection_profile",
              priority: 100,
              args: {
                name: "DESTINATION_CONNECTION_PROFILE",
                description: "String",
              },
            },
            optFilter2,
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
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace",
          },
        },
        {
          name: "commit",
          description:
            "Commit a Database Migration Service conversion workspace",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--commit-name",
              description:
                "A user-friendly name for the conversion workspace commit. The commit name can include letters, numbers, spaces, and hyphens, and must start with a letter",
              args: {
                name: "COMMIT_NAME",
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
            optRegion3,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace",
          },
        },
        {
          name: "convert",
          description:
            "Convert a Database Migration Service conversion workspace",
          options: [
            optAccessTokenFile,
            optAccount,
            optAutoCommit,
            optBillingProject,
            optConfiguration,
            optFilter2,
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
            optNoAutoCommit,
            optProject,
            optQuiet,
            optRegion3,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace",
          },
        },
        {
          name: "create",
          description:
            "Create a Database Migration Service conversion workspace",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--auto-conversion",
              description:
                "Whether to enable Gemini auto-conversion. Use *--auto-conversion* to enable and *--no-auto-conversion* to disable",
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--conversion-assistance",
              description:
                "Whether to enable Gemini conversion assistance. Use *--conversion-assistance* to enable and *--no-conversion-assistance* to disable",
            },
            {
              name: "--destination-database-engine",
              description:
                "Destination database engine type. _DESTINATION_DATABASE_ENGINE_ must be (only one value is supported): *POSTGRESQL*",
              priority: 100,
              args: {
                name: "DESTINATION_DATABASE_ENGINE",
                suggestions: ["POSTGRESQL"],
              },
            },
            {
              name: "--destination-database-provider",
              description:
                "Destination database provider. _DESTINATION_DATABASE_PROVIDER_ must be one of: *ALLOYDB*, *CLOUDSQL*",
              args: {
                name: "DESTINATION_DATABASE_PROVIDER",
                suggestions: ["ALLOYDB", "CLOUDSQL"],
              },
            },
            {
              name: "--destination-database-version",
              description:
                "Version number for the database engine. The version number must contain numbers and letters only. Example for PostgreSQL 17.0, version number will be 17.0",
              args: {
                name: "DESTINATION_DATABASE_VERSION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description:
                "A user-friendly name for the conversion workspace. The display name can include letters, numbers, spaces, and hyphens, and must start with a letter. The maximum length allowed is 60 characters",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--global-settings",
              description:
                'A generic list of settings for the workspace. The settings are database pair dependant and can indicate default behavior for the mapping rules engine or turn on or off specific features. An object containing a list of "key": "value" pairs',
              args: {
                name: "KEY=VALUE",
                description: "Dict",
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
              name: "--no-auto-conversion",
              description: "Whether to enable Gemini auto-conversion",
            },
            {
              name: "--no-conversion-assistance",
              description: "Whether to enable Gemini conversion assistance",
            },
            {
              name: "--no-pattern-matching",
              description: "Whether to enable Gemini pattern matching",
            },
            {
              name: "--no-quality-assessment",
              description: "Whether to enable Gemini quality assessment",
            },
            {
              name: "--pattern-matching",
              description:
                "Whether to enable Gemini pattern matching. Use *--pattern-matching* to enable and *--no-pattern-matching* to disable",
            },
            optProject,
            {
              name: "--quality-assessment",
              description:
                "Whether to enable Gemini quality assessment. Use *--quality-assessment* to enable and *--no-quality-assessment* to disable",
            },
            optQuiet,
            optRegion3,
            {
              name: "--source-database-engine",
              description:
                "Source database engine type. _SOURCE_DATABASE_ENGINE_ must be one of: *ORACLE*, *SQL_SERVER*",
              priority: 100,
              args: {
                name: "SOURCE_DATABASE_ENGINE",
                suggestions: ["ORACLE", "SQL_SERVER"],
              },
            },
            {
              name: "--source-database-provider",
              description:
                "Source database provider. _SOURCE_DATABASE_PROVIDER_ must be one of: *AMAZON_RDS*, *AZURE_MANAGED_INSTANCE*, *AZURE_SQL_DATABASE*, *CLOUDSQL*, *UNSPECIFIED*",
              args: {
                name: "SOURCE_DATABASE_PROVIDER",
                suggestions: [
                  "AMAZON_RDS",
                  "AZURE_MANAGED_INSTANCE",
                  "AZURE_SQL_DATABASE",
                  "CLOUDSQL",
                  "UNSPECIFIED",
                ],
              },
            },
            {
              name: "--source-database-version",
              description:
                "Version number for the database engine. The version number must contain numbers and letters only. Example for Oracle 21c, version number will be 21c",
              args: {
                name: "SOURCE_DATABASE_VERSION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace",
          },
        },
        {
          name: "delete",
          description: "Delete a Database Migration conversion workspace",
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
            optNoAsync,
            optProject,
            optQuiet,
            optRegion3,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace",
          },
        },
        {
          name: "describe",
          description:
            "Show details about a database migration conversion workspace",
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
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace",
          },
        },
        {
          name: "describe-ddls",
          description:
            "Describe DDLs in a Database Migration Service conversion workspace",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCommitId,
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
            optNoUncommitted,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optRegion3,
            optSortBy,
            optTraceToken,
            {
              name: "--tree-type",
              description:
                "Tree type for database entities. _TREE_TYPE_ must be one of: *SOURCE*, *DRAFT*",
              args: {
                name: "TREE_TYPE",
                description: "String",
                suggestions: ["SOURCE", "DRAFT"],
              },
            },
            optUncommitted,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace",
          },
        },
        {
          name: "describe-entities",
          description:
            "Describe database entities in a Database Migration conversion workspace",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCommitId,
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
            optNoUncommitted,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optRegion3,
            optSortBy,
            optTraceToken,
            {
              name: "--tree-type",
              description:
                "Tree type for database entities. _TREE_TYPE_ must be one of: *SOURCE*, *DRAFT*",
              priority: 100,
              args: {
                name: "TREE_TYPE",
                description: "String",
                suggestions: ["SOURCE", "DRAFT"],
              },
            },
            optUncommitted,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace",
          },
        },
        {
          name: "describe-issues",
          description:
            "Describe issues in a Database Migration Service conversion workspace",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCommitId,
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
            optNoUncommitted,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optRegion3,
            optSortBy,
            optTraceToken,
            optUncommitted,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace",
          },
        },
        {
          name: "import-rules",
          description:
            "Import mapping rules in a Database Migration Service conversion workspace",
          options: [
            optAccessTokenFile,
            optAccount,
            optAutoCommit,
            optBillingProject,
            {
              name: "--config-files",
              description:
                "A list of files to import rules from. Either provide a single file path or if multiple files are to be provided, each file should correspond to one schema. Provide file paths as a comma separated list",
              priority: 100,
              args: {
                name: "CONFIG_FILE",
                description: "List",
                template: "filepaths",
              },
            },
            optConfiguration,
            {
              name: "--file-format",
              description:
                "File format type to import rules from. _FILE_FORMAT_ must be (only one value is supported): *ORA2PG*",
              args: {
                name: "FILE_FORMAT",
                description: "String",
                suggestions: ["ORA2PG"],
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
            optNoAutoCommit,
            optProject,
            optQuiet,
            optRegion3,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace",
          },
        },
        {
          name: "list",
          description: "List conversion workspaces",
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
            optPageSize2,
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
          name: "list-background-jobs",
          description: "List background jobs in the conversion workspaces",
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
              name: "--max-size",
              description:
                "The maximum number of jobs to return. The service may return fewer than this value. If unspecified, at most 100 jobs will be returned. The maximum value is 100; values above 100 will be coerced to 100",
              args: {
                name: "MAX_SIZE",
                description: "Int",
              },
            },
            {
              name: "--most-recent-per-job-type",
              description: "Returns only the most recent job per job type",
            },
            {
              name: "--no-most-recent-per-job-type",
              description: "Returns only the most recent job per job type",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion5,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace",
          },
        },
        {
          name: "mapping-rules",
          description:
            "Manage Database Migration Service Conversion Workspace mapping rules",
          subcommands: [
            {
              name: "list",
              description: "List Mapping Rules",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--conversion-workspace",
                  description:
                    "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace",
                  priority: 100,
                  args: {
                    name: "CONVERSION_WORKSPACE",
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
                optLogHttp,
                optNoUri,
                optPageSize2,
                optProject,
                optQuiet,
                optRegion5,
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
          name: "rollback",
          description:
            "Rollback a Database Migration Service conversion workspace",
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
            optNoAsync,
            optProject,
            optQuiet,
            optRegion3,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace",
          },
        },
        {
          name: "seed",
          description: "Seed a Database Migration Service conversion workspace",
          options: [
            optAccessTokenFile,
            optAccount,
            optAutoCommit,
            optBillingProject,
            optConfiguration,
            {
              name: "--destination-connection-profile",
              description:
                "ID of the connection_profile or fully qualified identifier for the connection_profile",
              priority: 100,
              args: {
                name: "DESTINATION_CONNECTION_PROFILE",
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
            optNoAutoCommit,
            optProject,
            optQuiet,
            optRegion3,
            {
              name: "--source-connection-profile",
              description:
                "ID of the connection_profile or fully qualified identifier for the connection_profile",
              priority: 100,
              args: {
                name: "SOURCE_CONNECTION_PROFILE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace",
          },
        },
        {
          name: "update",
          description:
            "Update a Database Migration Service conversion workspace",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--auto-conversion",
              description:
                "Whether to enable Gemini auto-conversion. Use *--auto-conversion* to enable and *--no-auto-conversion* to disable",
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--conversion-assistance",
              description:
                "Whether to enable Gemini conversion assistance. Use *--conversion-assistance* to enable and *--no-conversion-assistance* to disable",
            },
            {
              name: "--display-name",
              description:
                "A user-friendly name for the conversion workspace. The display name can include letters, numbers, spaces, and hyphens, and must start with a letter. The maximum length allowed is 60 characters",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--global-filter",
              description:
                "Filter the source entities based on [AIP-160](https://google.aip.dev/160) standard. This filter will be applied to all subsequent operations on the source entities, such as convert and describe-entities",
              args: {
                name: "GLOBAL_FILTER",
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
              name: "--no-auto-conversion",
              description: "Whether to enable Gemini auto-conversion",
            },
            {
              name: "--no-conversion-assistance",
              description: "Whether to enable Gemini conversion assistance",
            },
            {
              name: "--no-pattern-matching",
              description: "Whether to enable Gemini pattern matching",
            },
            {
              name: "--no-quality-assessment",
              description: "Whether to enable Gemini quality assessment",
            },
            {
              name: "--pattern-matching",
              description:
                "Whether to enable Gemini pattern matching. Use *--pattern-matching* to enable and *--no-pattern-matching* to disable",
            },
            optProject,
            {
              name: "--quality-assessment",
              description:
                "Whether to enable Gemini quality assessment. Use *--quality-assessment* to enable and *--no-quality-assessment* to disable",
            },
            optQuiet,
            optRegion3,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace",
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
      name: "migration-jobs",
      description: "Manage Database Migration Service migration jobs",
      subcommands: [
        {
          name: "create",
          description: "Create a Database Migration Service migration job",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--all-databases",
              description:
                "Migrate all databases for the migration job. This flag is used only for Postgres to AlloyDB, and Postgres to Cloud SQL Postgres and MySQL to Cloud SQL MySQL migrations",
            },
            optBillingProject,
            {
              name: "--cmek-key",
              description:
                "ID of the cmek-key or fully qualified identifier for the cmek-key",
              priority: 100,
              args: {
                name: "CMEK_KEY",
                description: "String",
              },
            },
            {
              name: "--cmek-keyring",
              description: "The CMEK keyring id of the cmek-key",
              args: {
                name: "CMEK_KEYRING",
                description: "String",
              },
            },
            {
              name: "--cmek-project",
              description: "The Cloud project id for the cmek-key",
              args: {
                name: "CMEK_PROJECT",
                description: "String",
              },
            },
            {
              name: "--commit-id",
              description:
                "Commit id for the conversion workspace to use for creating the migration job. If not specified, the latest commit id will be used by default",
              args: {
                name: "COMMIT_ID",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--conversion-workspace",
              description:
                "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace",
              priority: 100,
              args: {
                name: "CONVERSION_WORKSPACE",
                description: "String",
              },
            },
            {
              name: "--databases-filter",
              description:
                "A list of databases to be migrated to the destination instance. Provide databases as a comma separated list. This flag is used only for Postgres to AlloyDB, and Postgres to Cloud SQL Postgres and MySQL to Cloud SQL MySQL migrations",
              args: {
                name: "databaseName",
                description: "List",
              },
            },
            {
              name: "--destination",
              description:
                "ID of the connection_profile or fully qualified identifier for the connection_profile",
              priority: 100,
              args: {
                name: "DESTINATION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description:
                "A user-friendly name for the migration job. The display name can include letters, numbers, spaces, and hyphens, and must start with a letter",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--dump-flags",
              description:
                'A list of dump flags. An object containing a list of "key": "value" pairs',
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--dump-parallel-level",
              description:
                "Parallelization level during initial dump of the migration job. If not specified, will be defaulted to OPTIMAL. _DUMP_PARALLEL_LEVEL_ must be one of: *MIN*, *OPTIMAL*, *MAX*",
              args: {
                name: "DUMP_PARALLEL_LEVEL",
                description: "String",
                suggestions: ["MIN", "OPTIMAL", "MAX"],
              },
            },
            {
              name: "--dump-path",
              description:
                "Path to the dump file in Google Cloud Storage, in the format: `gs://[BUCKET_NAME]/[OBJECT_NAME]`",
              args: {
                name: "DUMP_PATH",
                description: "String",
              },
            },
            {
              name: "--dump-type",
              description:
                "The type of the data dump. Currently applicable for MySQL to MySQL migrations only. _DUMP_TYPE_ must be one of: *LOGICAL*, *PHYSICAL*",
              args: {
                name: "DUMP_TYPE",
                description: "String",
                suggestions: ["LOGICAL", "PHYSICAL"],
              },
            },
            optFilter2,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLabels,
            optLogHttp,
            {
              name: "--max-concurrent-cdc-connections",
              description:
                "Maximum number of connections Database Migration Service will open to the source for CDC phase",
              args: {
                name: "MAX_CONCURRENT_CDC_CONNECTIONS",
                description: "Int",
              },
            },
            {
              name: "--max-concurrent-destination-connections",
              description:
                "Maximum number of concurrent connections Database Migration Service will open to the destination for data migration",
              args: {
                name: "MAX_CONCURRENT_DESTINATION_CONNECTIONS",
                description: "Int",
              },
            },
            {
              name: "--max-concurrent-full-dump-connections",
              description:
                "Maximum number of connections Database Migration Service will open to the source for full dump phase",
              args: {
                name: "MAX_CONCURRENT_FULL_DUMP_CONNECTIONS",
                description: "Int",
              },
            },
            {
              name: "--no-all-databases",
              description:
                "Migrate all databases for the migration job. This flag is used only for Postgres to AlloyDB, and Postgres to Cloud SQL Postgres and MySQL to Cloud SQL MySQL migrations",
              hidden: true,
            },
            optNoAsync,
            {
              name: "--no-skip-full-dump",
              description: "Whether to skip full dump or not",
              hidden: true,
            },
            {
              name: "--no-sqlserver-diff-backup",
              description:
                "Enable differential backups. If not specified, differential backups are disabled by default. Use --sqlserver-diff-backup to enable and --no-sqlserver-diff-backup to disable. This flag is used only for homogeneous SQL Server to Cloud SQL for SQL Server migrations",
              hidden: true,
            },
            {
              name: "--no-sqlserver-promote-when-ready",
              description:
                "Promote the database when it is ready. Use --sqlserver-promote-when-ready to enable and --no-sqlserver-promote-when-ready to disable. This flag is used only for homogeneous SQL Server to Cloud SQL for SQL Server migrations",
              hidden: true,
            },
            {
              name: "--no-static-ip",
              description:
                "Use the default IP allowlist method. This method creates a public IP that will be used with the destination Cloud SQL database. The method works by configuring the source database server to accept connections from the outgoing IP of the Cloud SQL instance",
              hidden: true,
            },
            {
              name: "--no-use-postgres-native",
              description:
                "Use native logical replication for PostgreSQL migration",
              hidden: true,
            },
            {
              name: "--oracle-cdc-start-position",
              description:
                "Oracle schema change number (SCN) to start CDC data migration from",
              args: {
                name: "ORACLE_CDC_START_POSITION",
                description: "Int",
              },
            },
            {
              name: "--original-migration-name",
              description:
                "ID of the migration_job or fully qualified identifier for the migration_job",
              priority: 100,
              args: {
                name: "ORIGINAL_MIGRATION_NAME",
                description: "String",
              },
            },
            {
              name: "--peer-vpc",
              description:
                "Name of the VPC network to peer with the Cloud SQL private network",
              args: {
                name: "PEER_VPC",
                description: "String",
              },
            },
            {
              name: "--postgres-max-additional-subscriptions",
              description:
                "Maximum number of additional subscriptions to use for the PostgreSQL migration job",
              args: {
                name: "POSTGRES_MAX_ADDITIONAL_SUBSCRIPTIONS",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
            optRegion4,
            {
              name: "--skip-full-dump",
              description: "Whether to skip full dump or not",
            },
            {
              name: "--source",
              description:
                "ID of the connection_profile or fully qualified identifier for the connection_profile",
              priority: 100,
              args: {
                name: "SOURCE",
                description: "String",
              },
            },
            {
              name: "--sqlserver-backup-file-pattern",
              description:
                "Pattern that describes the default backup naming strategy. The specified pattern should ensure lexicographical order of backups. The pattern should define the following capture group set epoch - unix timestamp Example: For backup files TestDB.1691448240.bak, TestDB.1691448254.trn, TestDB.1691448284.trn.final use pattern: .*\\.(<epoch>\\d*)\\.(trn|bak|trn\\.final) or .*\\.(<timestamp>\\d*)\\.(trn|bak|trn\\.final) This flag is used only for SQL Server to Cloud SQL migrations",
              hidden: true,
              args: {
                name: "SQLSERVER_BACKUP_FILE_PATTERN",
                description: "String",
              },
            },
            {
              name: "--sqlserver-cdc-start-position",
              description:
                "Sqlserver log squence number (LSN) to start CDC data migration from",
              args: {
                name: "SQLSERVER_CDC_START_POSITION",
                description: "String",
              },
            },
            {
              name: "--sqlserver-dag-linked-server",
              description:
                "The name of the linked server that points to the source SQL Server instance",
              hidden: true,
              priority: 100,
              args: {
                name: "SQLSERVER_DAG_LINKED_SERVER",
                description: "String",
              },
            },
            {
              name: "--sqlserver-dag-source-ag",
              description: "The name of the source availability group",
              hidden: true,
              priority: 100,
              args: {
                name: "SQLSERVER_DAG_SOURCE_AG",
                description: "String",
              },
            },
            {
              name: "--sqlserver-databases",
              description:
                "A list of databases to be migrated to the destination Cloud SQL instance. Provide databases as a comma separated list. This list should contain all encrypted and non-encrypted database names. This flag is used only for SQL Server to Cloud SQL migrations",
              priority: 100,
              args: {
                name: "databaseName",
                description: "List",
              },
            },
            {
              name: "--sqlserver-diff-backup",
              description:
                "Enable differential backups. If not specified, differential backups are disabled by default. Use --sqlserver-diff-backup to enable and --no-sqlserver-diff-backup to disable. This flag is used only for homogeneous SQL Server to Cloud SQL for SQL Server migrations",
            },
            {
              name: "--sqlserver-encrypted-databases",
              description:
                'A JSON/YAML file describing the encryption settings per database for all encrytped databases. Note: Path to the Certificate (.cer) and Private Key (.pvk) in Cloud Storage, should be in the form of `gs://bucketName/fileName`. The instance must have write permissions to the bucket and read access to the file. An example of a JSON request: [{ "database": "db1", "encryptionOptions": { "certPath": "Path to certificate 1", "pvkPath": "Path to certificate private key 1", "pvkPassword": "Private key password 1" } }, { "database": "db2", "encryptionOptions": { "certPath": "Path to certificate 2", "pvkPath": "Path to certificate private key 2", "pvkPassword": "Private key password 2" } }]',
              args: {
                name: "SQLSERVER_ENCRYPTED_DATABASES",
                template: "filepaths",
              },
            },
            {
              name: "--sqlserver-promote-when-ready",
              description:
                "Promote the database when it is ready. Use --sqlserver-promote-when-ready to enable and --no-sqlserver-promote-when-ready to disable. This flag is used only for homogeneous SQL Server to Cloud SQL for SQL Server migrations",
            },
            {
              name: "--static-ip",
              description:
                "Use the default IP allowlist method. This method creates a public IP that will be used with the destination Cloud SQL database. The method works by configuring the source database server to accept connections from the outgoing IP of the Cloud SQL instance",
            },
            optTraceToken,
            {
              name: "--transaction-timeout",
              description: "Timeout for data migration transactions",
              args: {
                name: "TRANSACTION_TIMEOUT",
              },
            },
            {
              name: "--type",
              description:
                "Type of the migration job. _TYPE_ must be one of: *ONE_TIME*, *CONTINUOUS*",
              priority: 100,
              args: {
                name: "TYPE",
                description: "String",
                suggestions: ["ONE_TIME", "CONTINUOUS"],
              },
            },
            {
              name: "--use-postgres-native",
              description:
                "Use native logical replication for PostgreSQL migration",
            },
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--vm",
              description: "Name of VM that will host the SSH tunnel bastion",
              args: {
                name: "VM",
                description: "String",
              },
            },
            {
              name: "--vm-ip",
              description: "Bastion Virtual Machine IP",
              priority: 100,
              args: {
                name: "VM_IP",
                description: "String",
              },
            },
            {
              name: "--vm-port",
              description: "Forwarding port for the SSH tunnel",
              priority: 100,
              args: {
                name: "VM_PORT",
                description: "Int",
              },
            },
            {
              name: "--vpc",
              description: "Name of the VPC network where the VM is hosted",
              priority: 100,
              args: {
                name: "VPC",
                description: "String",
              },
            },
          ],
          args: {
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job",
          },
        },
        {
          name: "delete",
          description: "Delete a Database Migration Service migration job",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--force",
              description:
                "The destination Cloud SQL connection profile is always deleted with the migration job. In case of force delete, the destination Cloud SQL replica database is also deleted",
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            {
              name: "--no-force",
              description:
                "The destination Cloud SQL connection profile is always deleted with the migration job. In case of force delete, the destination Cloud SQL replica database is also deleted",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion5,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job",
          },
        },
        {
          name: "demote-destination",
          description:
            "Demote a destination of a Database Migration Service migration job",
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
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job",
          },
        },
        {
          name: "describe",
          description:
            "Show details about a Database Migration Service migration job",
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
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job",
          },
        },
        {
          name: "fetch-source-objects",
          description:
            "Fetch objects for a Database Migration Service migration job by connection to the source",
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
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job",
          },
        },
        {
          name: "generate-ssh-script",
          description:
            "Generate a SSH script for a Database Migration Service migration job",
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
            {
              name: "--subnet",
              description: "Subnet to create the VM instance in",
              priority: 100,
              args: {
                name: "SUBNET",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--vm",
              description:
                "Bastion Compute Engine VM instance name to use or to create",
              priority: 100,
              args: {
                name: "VM",
                description: "String",
              },
            },
            {
              name: "--vm-machine-type",
              description:
                "Machine type for a new VM instance. To get a list of available machine types, run 'gcloud compute machine-types list'",
              priority: 100,
              args: {
                name: "VM_MACHINE_TYPE",
                description: "String",
              },
            },
            {
              name: "--vm-port",
              description: "Port that will be open on the bastion host",
              args: {
                name: "VM_PORT",
                description: "Int",
              },
            },
            {
              name: "--vm-zone",
              description:
                "Zone the existing bastion VM instance is located in",
              args: {
                name: "VM_ZONE",
                description: "String",
              },
            },
            {
              name: "--vm-zone-create",
              description: "Zone to create the VM instance in",
              args: {
                name: "VM_ZONE_CREATE",
                description: "String",
              },
            },
          ],
          args: {
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job",
          },
        },
        {
          name: "list",
          description: "List Database Migration Service migration jobs",
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
            optPageSize2,
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
          name: "promote",
          description: "Promote a Database Migration Service migration job",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--databases-filter",
              description:
                "A list of databases to be migrated to the destination instance. Provide databases as a comma separated list. This flag is used only for SQL Server to Cloud SQL SQL Server migrations",
              args: {
                name: "databaseName",
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
            optLogHttp,
            optProject,
            optQuiet,
            optRegion4,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job",
          },
        },
        {
          name: "restart",
          description: "Restart a Database Migration Service migration job",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--databases-filter",
              description:
                "A list of databases to be migrated to the destination instance. Provide databases as a comma separated list. This flag is used only for SQL Server to Cloud SQL SQL Server migrations",
              args: {
                name: "databaseName",
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
            optLogHttp,
            {
              name: "--no-restart-failed-objects",
              description:
                "Restart the failed objects in the migration job. This flag is used only for Postgres to AlloyDB, and Postgres to Cloud SQL Postgres and MySQL to Cloud SQL MySQL migrations",
              hidden: true,
            },
            {
              name: "--no-skip-validation",
              description:
                "Restart the migration job without running prior configuration verification",
              hidden: true,
            },
            {
              name: "--object-filter",
              description:
                "A list of schema and table names to be migrated to the destination instance. Usage: --object-filter schema=schema1,table=table1 --object-filter schema=schema2,table=table2 This flag is used only for heterogeneous migrations",
              hidden: true,
              args: {
                name: "OBJECT_FILTER",
                description: "Dict",
              },
            },
            optProject,
            optQuiet,
            optRegion4,
            {
              name: "--restart-failed-objects",
              description:
                "Restart the failed objects in the migration job. This flag is used only for Postgres to AlloyDB, and Postgres to Cloud SQL Postgres and MySQL to Cloud SQL MySQL migrations",
            },
            {
              name: "--skip-validation",
              description:
                "Restart the migration job without running prior configuration verification",
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job",
          },
        },
        {
          name: "resume",
          description: "Resume a Database Migration Service migration job",
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
              name: "--no-skip-validation",
              description:
                "Resume the migration job without running prior configuration verification",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion5,
            {
              name: "--skip-validation",
              description:
                "Resume the migration job without running prior configuration verification",
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job",
          },
        },
        {
          name: "start",
          description: "Start a Database Migration Service migration job",
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
              name: "--no-skip-validation",
              description:
                "Start the migration job without running prior configuration verification",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion5,
            {
              name: "--skip-validation",
              description:
                "Start the migration job without running prior configuration verification",
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job",
          },
        },
        {
          name: "stop",
          description: "Stop a Database Migration Service migration job",
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
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job",
          },
        },
        {
          name: "update",
          description: "Update a Database Migration Service migration job",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--all-databases",
              description:
                "Migrate all databases for the migration job. This flag is used only for Postgres to AlloyDB, and Postgres to Cloud SQL Postgres and MySQL to Cloud SQL MySQL migrations",
            },
            optBillingProject,
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
            },
            {
              name: "--commit-id",
              description:
                "Commit id for the conversion workspace to use for creating the migration job. If not specified, the latest commit id will be used by default",
              args: {
                name: "COMMIT_ID",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--databases-filter",
              description:
                "A list of databases to be migrated to the destination instance. Provide databases as a comma separated list. This flag is used only for Postgres to AlloyDB, and Postgres to Cloud SQL Postgres and MySQL to Cloud SQL MySQL migrations",
              args: {
                name: "databaseName",
                description: "List",
              },
            },
            {
              name: "--destination",
              description:
                "ID of the connection_profile or fully qualified identifier for the connection_profile",
              priority: 100,
              args: {
                name: "DESTINATION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description:
                "A user-friendly name for the migration job. The display name can include letters, numbers, spaces, and hyphens, and must start with a letter",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--dump-flags",
              description:
                'A list of dump flags. An object containing a list of "key": "value" pairs',
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--dump-parallel-level",
              description:
                "Parallelization level during initial dump of the migration job. If not specified, will be defaulted to OPTIMAL. _DUMP_PARALLEL_LEVEL_ must be one of: *MIN*, *OPTIMAL*, *MAX*",
              args: {
                name: "DUMP_PARALLEL_LEVEL",
                description: "String",
                suggestions: ["MIN", "OPTIMAL", "MAX"],
              },
            },
            {
              name: "--dump-path",
              description:
                "Path to the dump file in Google Cloud Storage, in the format: `gs://[BUCKET_NAME]/[OBJECT_NAME]`",
              args: {
                name: "DUMP_PATH",
                description: "String",
              },
            },
            {
              name: "--dump-type",
              description:
                "The type of the data dump. Currently applicable for MySQL to MySQL migrations only. _DUMP_TYPE_ must be one of: *LOGICAL*, *PHYSICAL*",
              args: {
                name: "DUMP_TYPE",
                description: "String",
                suggestions: ["LOGICAL", "PHYSICAL"],
              },
            },
            optFilter2,
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
              name: "--max-concurrent-cdc-connections",
              description:
                "Maximum number of connections Database Migration Service will open to the source for CDC phase",
              args: {
                name: "MAX_CONCURRENT_CDC_CONNECTIONS",
                description: "Int",
              },
            },
            {
              name: "--max-concurrent-destination-connections",
              description:
                "Maximum number of concurrent connections Database Migration Service will open to the destination for data migration",
              args: {
                name: "MAX_CONCURRENT_DESTINATION_CONNECTIONS",
                description: "Int",
              },
            },
            {
              name: "--max-concurrent-full-dump-connections",
              description:
                "Maximum number of connections Database Migration Service will open to the source for full dump phase",
              args: {
                name: "MAX_CONCURRENT_FULL_DUMP_CONNECTIONS",
                description: "Int",
              },
            },
            {
              name: "--no-all-databases",
              description:
                "Migrate all databases for the migration job. This flag is used only for Postgres to AlloyDB, and Postgres to Cloud SQL Postgres and MySQL to Cloud SQL MySQL migrations",
              hidden: true,
            },
            optNoAsync,
            {
              name: "--no-clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
              hidden: true,
            },
            {
              name: "--no-sqlserver-diff-backup",
              description:
                "Enable differential backups. If not specified, differential backups are disabled by default. Use --sqlserver-diff-backup to enable and --no-sqlserver-diff-backup to disable. This flag is used only for homogeneous SQL Server to Cloud SQL for SQL Server migrations",
              hidden: true,
            },
            {
              name: "--no-sqlserver-promote-when-ready",
              description:
                "Promote the database when it is ready. Use --sqlserver-promote-when-ready to enable and --no-sqlserver-promote-when-ready to disable. This flag is used only for homogeneous SQL Server to Cloud SQL for SQL Server migrations",
              hidden: true,
            },
            {
              name: "--no-static-ip",
              description:
                "Use the default IP allowlist method. This method creates a public IP that will be used with the destination Cloud SQL database. The method works by configuring the source database server to accept connections from the outgoing IP of the Cloud SQL instance",
              hidden: true,
            },
            {
              name: "--peer-vpc",
              description:
                "Name of the VPC network to peer with the Cloud SQL private network",
              args: {
                name: "PEER_VPC",
                description: "String",
              },
            },
            {
              name: "--postgres-max-additional-subscriptions",
              description:
                "Maximum number of additional subscriptions to use for the PostgreSQL migration job",
              args: {
                name: "POSTGRES_MAX_ADDITIONAL_SUBSCRIPTIONS",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
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
              name: "--source",
              description:
                "ID of the connection_profile or fully qualified identifier for the connection_profile",
              priority: 100,
              args: {
                name: "SOURCE",
                description: "String",
              },
            },
            {
              name: "--sqlserver-backup-file-pattern",
              description:
                "Pattern that describes the default backup naming strategy. The specified pattern should ensure lexicographical order of backups. The pattern should define the following capture group set epoch - unix timestamp Example: For backup files TestDB.1691448240.bak, TestDB.1691448254.trn, TestDB.1691448284.trn.final use pattern: .*\\.(<epoch>\\d*)\\.(trn|bak|trn\\.final) or .*\\.(<timestamp>\\d*)\\.(trn|bak|trn\\.final) This flag is used only for SQL Server to Cloud SQL migrations",
              hidden: true,
              args: {
                name: "SQLSERVER_BACKUP_FILE_PATTERN",
                description: "String",
              },
            },
            {
              name: "--sqlserver-dag-linked-server",
              description:
                "The name of the linked server that points to the source SQL Server instance",
              hidden: true,
              args: {
                name: "SQLSERVER_DAG_LINKED_SERVER",
                description: "String",
              },
            },
            {
              name: "--sqlserver-dag-source-ag",
              description: "The name of the source availability group",
              hidden: true,
              args: {
                name: "SQLSERVER_DAG_SOURCE_AG",
                description: "String",
              },
            },
            {
              name: "--sqlserver-databases",
              description:
                "A list of databases to be migrated to the destination Cloud SQL instance. Provide databases as a comma separated list. This list should contain all encrypted and non-encrypted database names. This flag is used only for SQL Server to Cloud SQL migrations",
              args: {
                name: "databaseName",
                description: "List",
              },
            },
            {
              name: "--sqlserver-diff-backup",
              description:
                "Enable differential backups. If not specified, differential backups are disabled by default. Use --sqlserver-diff-backup to enable and --no-sqlserver-diff-backup to disable. This flag is used only for homogeneous SQL Server to Cloud SQL for SQL Server migrations",
            },
            {
              name: "--sqlserver-encrypted-databases",
              description:
                'A JSON/YAML file describing the encryption settings per database for all encrytped databases. Note: Path to the Certificate (.cer) and Private Key (.pvk) in Cloud Storage, should be in the form of `gs://bucketName/fileName`. The instance must have write permissions to the bucket and read access to the file. An example of a JSON request: [{ "database": "db1", "encryptionOptions": { "certPath": "Path to certificate 1", "pvkPath": "Path to certificate private key 1", "pvkPassword": "Private key password 1" } }, { "database": "db2", "encryptionOptions": { "certPath": "Path to certificate 2", "pvkPath": "Path to certificate private key 2", "pvkPassword": "Private key password 2" } }]',
              args: {
                name: "SQLSERVER_ENCRYPTED_DATABASES",
                template: "filepaths",
              },
            },
            {
              name: "--sqlserver-promote-when-ready",
              description:
                "Promote the database when it is ready. Use --sqlserver-promote-when-ready to enable and --no-sqlserver-promote-when-ready to disable. This flag is used only for homogeneous SQL Server to Cloud SQL for SQL Server migrations",
            },
            {
              name: "--static-ip",
              description:
                "Use the default IP allowlist method. This method creates a public IP that will be used with the destination Cloud SQL database. The method works by configuring the source database server to accept connections from the outgoing IP of the Cloud SQL instance",
            },
            optTraceToken,
            {
              name: "--transaction-timeout",
              description: "Timeout for data migration transactions",
              args: {
                name: "TRANSACTION_TIMEOUT",
              },
            },
            {
              name: "--type",
              description:
                "Type of the migration job. _TYPE_ must be one of: *ONE_TIME*, *CONTINUOUS*",
              args: {
                name: "TYPE",
                description: "String",
                suggestions: ["ONE_TIME", "CONTINUOUS"],
              },
            },
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
            {
              name: "--vm",
              description: "Name of VM that will host the SSH tunnel bastion",
              args: {
                name: "VM",
                description: "String",
              },
            },
            {
              name: "--vm-ip",
              description: "Bastion Virtual Machine IP",
              args: {
                name: "VM_IP",
                description: "String",
              },
            },
            {
              name: "--vm-port",
              description: "Forwarding port for the SSH tunnel",
              args: {
                name: "VM_PORT",
                description: "Int",
              },
            },
            {
              name: "--vpc",
              description: "Name of the VPC network where the VM is hosted",
              args: {
                name: "VPC",
                description: "String",
              },
            },
          ],
          args: {
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job",
          },
        },
        {
          name: "verify",
          description: "Verify a Database Migration Service migration job",
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
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job",
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
      name: "objects",
      description: "Manage Database Migration Service migration job objects",
      subcommands: [
        {
          name: "list",
          description: "List a DMS migration job objects",
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
              name: "--migration-job",
              description:
                "ID of the migration_job or fully qualified identifier for the migration_job",
              priority: 100,
              args: {
                name: "MIGRATION_JOB",
                description: "String",
              },
            },
            optNoUri,
            optPageSize2,
            optProject,
            optQuiet,
            optRegion4,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "lookup",
          description: "Lookup a DMS migration job object",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--database",
              description: "The name of the database to lookup",
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
              name: "--migration-job",
              description:
                "ID of the migration_job or fully qualified identifier for the migration_job",
              priority: 100,
              args: {
                name: "MIGRATION_JOB",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optRegion4,
            {
              name: "--schema",
              description: "The name of the schema to lookup",
              args: {
                name: "SCHEMA",
                description: "String",
              },
            },
            {
              name: "--table",
              description: "The name of the table to lookup",
              args: {
                name: "TABLE",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--type",
              description:
                "The type of the object to lookup. If not provided, the default is DATABASE. _TYPE_ must be one of: *DATABASE*, *SCHEMA*, *TABLE*",
              args: {
                name: "TYPE",
                description: "String",
                suggestions: ["DATABASE", "SCHEMA", "TABLE"],
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
      name: "operations",
      description: "Manage Database Migration Service operations",
      subcommands: [
        {
          name: "delete",
          description: "Delete a Database Migration Service operation",
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "describe",
          description: "Show details about a operation",
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
            optLogHttp,
            optNoUri,
            optPageSize2,
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
      name: "private-connections",
      description: "Manage Database Migration Service private connections",
      subcommands: [
        {
          name: "create",
          description: "Create a Database Migration private connection",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--display-name",
              description:
                "A user-friendly name for the private connection. The display name can include letters, numbers, spaces, and hyphens, and must start with a letter. The maximum length allowed is 60 characters",
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
            optLabels,
            optLogHttp,
            {
              name: "--network-attachment",
              description:
                "Full URI of the network attachment that datastream will connect to.For example, this would be of the form:`network-attachment=projects/test-project/regions/us-central1/networkAttachments/my-na`",
              priority: 100,
              args: {
                name: "NETWORK_ATTACHMENT",
                description: "String",
              },
            },
            optNoAsync,
            {
              name: "--no-skip-validation",
              description:
                "Creates the private connection without running prior verifications",
              hidden: true,
            },
            {
              name: "--no-validate-only",
              description:
                "If set, the request will retrieve the project id to allow in the network attachment Datastream will connect to",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--region",
              description: "The Cloud region for the private_connection",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            {
              name: "--skip-validation",
              description:
                "Creates the private connection without running prior verifications",
            },
            {
              name: "--subnet",
              description: "A free subnet for peering. (CIDR of /29)",
              priority: 100,
              args: {
                name: "SUBNET",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            {
              name: "--validate-only",
              description:
                "If set, the request will retrieve the project id to allow in the network attachment Datastream will connect to",
            },
            optVerbosity,
            {
              name: "--vpc",
              description:
                "ID of the vpc or fully qualified identifier for the vpc",
              priority: 100,
              args: {
                name: "VPC",
                description: "String",
              },
            },
          ],
          args: {
            name: "PRIVATE_CONNECTION",
            description:
              "ID of the private_connection or fully qualified identifier for the private_connection",
          },
        },
        {
          name: "delete",
          description: "Delete a Database Migration private connection",
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
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--region",
              description: "The Cloud region for the private_connection",
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
            name: "PRIVATE_CONNECTION",
            description:
              "ID of the private_connection or fully qualified identifier for the private_connection",
          },
        },
        {
          name: "describe",
          description:
            "Show details about a database migration private connection",
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
            name: "PRIVATE_CONNECTION",
            description:
              "ID of the private_connection or fully qualified identifier for the private_connection",
          },
        },
        {
          name: "list",
          description: "List private connections",
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
            optPageSize2,
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
