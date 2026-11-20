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
  description: "The Cloud location for the stream",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description: "The location of the resources",
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

const optStream: Fig.Option = {
  name: "--stream",
  description: "The stream name",
  args: {
    name: "STREAM",
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
  name: "datastream",
  description: "Manage Cloud Datastream resources",
  subcommands: [
    {
      name: "connection-profiles",
      description: "Manage Datastream connection profiles",
      subcommands: [
        {
          name: "create",
          description: "Create a Datastream connection profile",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--bucket",
              description:
                "The full project and resource path for Cloud Storage bucket including the name",
              priority: 100,
              args: {
                name: "BUCKET",
                description: "String",
              },
            },
            {
              name: "--ca-certificate",
              description:
                "X509 PEM-encoded certificate of the CA that signed the source database server's certificate. The replica will use this certificate to verify it's connecting to the right host",
              priority: 100,
              args: {
                name: "CA_CERTIFICATE",
                description: "String",
              },
            },
            {
              name: "--client-certificate",
              description:
                "X509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server",
              priority: 100,
              args: {
                name: "CLIENT_CERTIFICATE",
                description: "String",
              },
            },
            {
              name: "--client-key",
              description:
                "Unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate",
              priority: 100,
              args: {
                name: "CLIENT_KEY",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--database-service",
              description: "Database service for the Oracle connection",
              priority: 100,
              args: {
                name: "DATABASE_SERVICE",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Friendly name for the connection profile",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--force",
              description:
                "Create the connection profile without validating it",
            },
            optFormat,
            {
              name: "--forward-ssh-hostname",
              description: "Hostname for the SSH tunnel",
              priority: 100,
              args: {
                name: "FORWARD_SSH_HOSTNAME",
                description: "String",
              },
            },
            {
              name: "--forward-ssh-password",
              description: "SSH password",
              args: {
                name: "FORWARD_SSH_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--forward-ssh-port",
              description: "Port for the SSH tunnel, default value is 22",
              args: {
                name: "FORWARD_SSH_PORT",
                description: "Int",
              },
            },
            {
              name: "--forward-ssh-private-key",
              description: "SSH private key",
              args: {
                name: "FORWARD_SSH_PRIVATE_KEY",
                description: "String",
              },
            },
            {
              name: "--forward-ssh-username",
              description: "Username for the SSH tunnel",
              priority: 100,
              args: {
                name: "FORWARD_SSH_USERNAME",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLabels,
            {
              name: "--location",
              description: "The Cloud location for the connection_profile",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--mongodb-additional-options",
              description:
                "Specifies additional options for the MongoDB connection",
              args: {
                name: "MONGODB_PROFILE_ADDITIONAL_OPTIONS",
                description: "Dict",
              },
            },
            {
              name: "--mongodb-ca-certificate",
              description:
                "X509 PEM-encoded certificate of the CA that signed the source database server's certificate. The replica will use this certificate to verify it's connecting to the right host",
              args: {
                name: "MONGODB_CA_CERTIFICATE",
                description: "String",
              },
            },
            {
              name: "--mongodb-direct-connection",
              description:
                "Connect to the mongodb hosts directly and do not try to resolve any of the replicas from the replica set",
            },
            {
              name: "--mongodb-host-addresses",
              description:
                "IP or hostname and port of the MongoDB source database",
              priority: 100,
              args: {
                name: "IPv4_ADDRESS_OR_HOSTNAME:PORT",
                description: "List",
              },
            },
            {
              name: "--mongodb-password",
              description:
                "Password for the user that Datastream will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Datastream",
              args: {
                name: "MONGODB_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--mongodb-prompt-for-password",
              description:
                "Prompt for the password used to connect to the database",
            },
            {
              name: "--mongodb-replica-set",
              description: "Replica set of the MongoDB source database",
              args: {
                name: "MONGODB_REPLICA_SET",
                description: "String",
              },
            },
            {
              name: "--mongodb-secret-manager-stored-password",
              description:
                "Path to secret manager, storing the password for the user used to connect to the database",
              args: {
                name: "MONGODB_SECRET_MANAGER_STORED_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--mongodb-srv-connection-format",
              description:
                "SRV Connection format for the MongoDB source database",
            },
            {
              name: "--mongodb-standard-connection-format",
              description:
                "Standard connection format for the MongoDB source database",
            },
            {
              name: "--mongodb-tls",
              description:
                "Enable Transport Layer Security for the monogodb connection",
            },
            {
              name: "--mongodb-username",
              description:
                "Username Datastream will use to connect to the database",
              priority: 100,
              args: {
                name: "MONGODB_USERNAME",
                description: "String",
              },
            },
            {
              name: "--mysql-hostname",
              description: "IP or hostname of the MySQL source database",
              priority: 100,
              args: {
                name: "MYSQL_HOSTNAME",
                description: "String",
              },
            },
            {
              name: "--mysql-password",
              description:
                "Password for the user that Datastream will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Datastream",
              args: {
                name: "MYSQL_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--mysql-port",
              description: "Network port of the MySQL source database",
              priority: 100,
              args: {
                name: "MYSQL_PORT",
                description: "Int",
              },
            },
            {
              name: "--mysql-prompt-for-password",
              description:
                "Prompt for the password used to connect to the database",
            },
            {
              name: "--mysql-secret-manager-stored-password",
              description:
                "Path to secret manager, storing the password for the user used to connect to the database",
              args: {
                name: "MYSQL_SECRET_MANAGER_STORED_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--mysql-username",
              description:
                "Username Datastream will use to connect to the database",
              priority: 100,
              args: {
                name: "MYSQL_USERNAME",
                description: "String",
              },
            },
            {
              name: "--no-force",
              description:
                "Create the connection profile without validating it",
              hidden: true,
            },
            {
              name: "--no-mongodb-direct-connection",
              description:
                "Connect to the mongodb hosts directly and do not try to resolve any of the replicas from the replica set",
              hidden: true,
            },
            {
              name: "--no-mongodb-prompt-for-password",
              description:
                "Prompt for the password used to connect to the database",
              hidden: true,
            },
            {
              name: "--no-mongodb-srv-connection-format",
              description:
                "SRV Connection format for the MongoDB source database",
              hidden: true,
            },
            {
              name: "--no-mongodb-standard-connection-format",
              description:
                "Standard connection format for the MongoDB source database",
              hidden: true,
            },
            {
              name: "--no-mongodb-tls",
              description:
                "Enable Transport Layer Security for the monogodb connection",
              hidden: true,
            },
            {
              name: "--no-mysql-prompt-for-password",
              description:
                "Prompt for the password used to connect to the database",
              hidden: true,
            },
            {
              name: "--no-oracle-prompt-for-password",
              description:
                "Prompt for the password used to connect to the database",
              hidden: true,
            },
            {
              name: "--no-postgresql-prompt-for-password",
              description:
                "Prompt for the password used to connect to the database",
              hidden: true,
            },
            {
              name: "--no-salesforce-prompt-for-oauth2-client-secret",
              description:
                "Prompt for the OAuth 2.0 Client secret used to connect to Salesforce",
              hidden: true,
            },
            {
              name: "--no-salesforce-prompt-for-password",
              description:
                "Prompt for the password used to connect to Salesforce",
              hidden: true,
            },
            {
              name: "--no-salesforce-prompt-for-security-token",
              description:
                "Prompt for the security token used to connect to Salesforce",
              hidden: true,
            },
            {
              name: "--no-sqlserver-prompt-for-password",
              description:
                "Prompt for the password used to connect to the database",
              hidden: true,
            },
            {
              name: "--no-static-ip-connectivity",
              description: "Use static ip connectivity",
              hidden: true,
            },
            {
              name: "--oracle-ca-certificate",
              description:
                "PEM-encoded certificate of the CA that signed the source database server's certificate",
              args: {
                name: "ORACLE_CA_CERTIFICATE",
                description: "String",
              },
            },
            {
              name: "--oracle-hostname",
              description: "IP or hostname of the oracle source database",
              priority: 100,
              args: {
                name: "ORACLE_HOSTNAME",
                description: "String",
              },
            },
            {
              name: "--oracle-password",
              description:
                "Password for the user that Datastream will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Datastream",
              args: {
                name: "ORACLE_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--oracle-port",
              description: "Network port of the oracle source database",
              priority: 100,
              args: {
                name: "ORACLE_PORT",
                description: "Int",
              },
            },
            {
              name: "--oracle-prompt-for-password",
              description:
                "Prompt for the password used to connect to the database",
            },
            {
              name: "--oracle-secret-manager-stored-password",
              description:
                "Path to secret manager, storing the password for the user used to connect to the database",
              args: {
                name: "ORACLE_SECRET_MANAGER_STORED_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--oracle-server-certificate-distinguished-name",
              description:
                "The distinguished name (DN) mentioned in the server certificate. This corresponds to the SSL_SERVER_CERT_DN sqlnet parameter. If this field is not provided, the DN matching is not enforced",
              args: {
                name: "ORACLE_SERVER_CERTIFICATE_DISTINGUISHED_NAME",
                description: "String",
              },
            },
            {
              name: "--oracle-username",
              description:
                "Username Datastream will use to connect to the database",
              priority: 100,
              args: {
                name: "ORACLE_USERNAME",
                description: "String",
              },
            },
            {
              name: "--postgresql-ca-certificate",
              description:
                "X509 PEM-encoded certificate of the CA that signed the source database server's certificate. The replica will use this certificate to verify it's connecting to the right host",
              priority: 100,
              args: {
                name: "POSTGRESQL_CA_CERTIFICATE",
                description: "String",
              },
            },
            {
              name: "--postgresql-client-certificate",
              description:
                "X509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server",
              priority: 100,
              args: {
                name: "POSTGRESQL_CLIENT_CERTIFICATE",
                description: "String",
              },
            },
            {
              name: "--postgresql-client-key",
              description:
                "Unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate",
              priority: 100,
              args: {
                name: "POSTGRESQL_CLIENT_KEY",
                description: "String",
              },
            },
            {
              name: "--postgresql-database",
              description: "Database service for the PostgreSQL connection",
              priority: 100,
              args: {
                name: "POSTGRESQL_DATABASE",
                description: "String",
              },
            },
            {
              name: "--postgresql-hostname",
              description: "IP or hostname of the PostgreSQL source database",
              priority: 100,
              args: {
                name: "POSTGRESQL_HOSTNAME",
                description: "String",
              },
            },
            {
              name: "--postgresql-password",
              description:
                "Password for the user that Datastream will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Datastream",
              args: {
                name: "POSTGRESQL_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--postgresql-port",
              description: "Network port of the PostgreSQL source database",
              priority: 100,
              args: {
                name: "POSTGRESQL_PORT",
                description: "Int",
              },
            },
            {
              name: "--postgresql-prompt-for-password",
              description:
                "Prompt for the password used to connect to the database",
            },
            {
              name: "--postgresql-secret-manager-stored-password",
              description:
                "Path to secret manager, storing the password for the user used to connect to the database",
              args: {
                name: "POSTGRESQL_SECRET_MANAGER_STORED_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--postgresql-server-certificate-hostname",
              description:
                "The hostname mentioned in the Subject or SAN extension of the server certificate. If this field is not provided, the hostname in the server certificate is not validated",
              args: {
                name: "POSTGRESQL_SERVER_CERTIFICATE_HOSTNAME",
                description: "String",
              },
            },
            {
              name: "--postgresql-username",
              description:
                "Username Datastream will use to connect to the database",
              priority: 100,
              args: {
                name: "POSTGRESQL_USERNAME",
                description: "String",
              },
            },
            optPrivateConnection,
            optProject,
            optQuiet,
            {
              name: "--root-path",
              description: "The root path inside the Cloud Storage bucket",
              args: {
                name: "ROOT_PATH",
                description: "String",
              },
            },
            {
              name: "--salesforce-domain",
              description:
                "Domain of the Salesforce organization. For example, 'myorg.my.salesforce.com'",
              priority: 100,
              args: {
                name: "SALESFORCE_DOMAIN",
                description: "String",
              },
            },
            {
              name: "--salesforce-oauth2-client-id",
              description: "OAuth 2.0 Client ID used to connect to Salesforce",
              priority: 100,
              args: {
                name: "SALESFORCE_OAUTH2_CLIENT_ID",
                description: "String",
              },
            },
            {
              name: "--salesforce-oauth2-client-secret",
              description:
                "OAuth 2.0 Client secret used to connect to Salesforce",
              args: {
                name: "SALESFORCE_OAUTH2_CLIENT_SECRET",
                description: "String",
              },
            },
            {
              name: "--salesforce-password",
              description:
                "Password for the user that Datastream will be using to connect to Salesforce. This field is not returned on request, and the value is encrypted when stored in Datastream",
              args: {
                name: "SALESFORCE_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--salesforce-prompt-for-oauth2-client-secret",
              description:
                "Prompt for the OAuth 2.0 Client secret used to connect to Salesforce",
            },
            {
              name: "--salesforce-prompt-for-password",
              description:
                "Prompt for the password used to connect to Salesforce",
            },
            {
              name: "--salesforce-prompt-for-security-token",
              description:
                "Prompt for the security token used to connect to Salesforce",
            },
            {
              name: "--salesforce-secret-manager-stored-oauth2-client-secret",
              description:
                "Path to secret manager, storing the OAuth 2.0 Client secret used to connect to Salesforce",
              args: {
                name: "SALESFORCE_SECRET_MANAGER_STORED_OAUTH2_CLIENT_SECRET",
                description: "String",
              },
            },
            {
              name: "--salesforce-secret-manager-stored-password",
              description:
                "Path to secret manager, storing the password for the user used to connect to Salesforce",
              args: {
                name: "SALESFORCE_SECRET_MANAGER_STORED_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--salesforce-secret-manager-stored-security-token",
              description:
                "Path to secret manager, storing the security token used to connect to Salesforce",
              args: {
                name: "SALESFORCE_SECRET_MANAGER_STORED_SECURITY_TOKEN",
                description: "String",
              },
            },
            {
              name: "--salesforce-security-token",
              description:
                "Security token for the user that Datastream will be using to connect to Salesforce",
              args: {
                name: "SALESFORCE_SECURITY_TOKEN",
                description: "String",
              },
            },
            {
              name: "--salesforce-username",
              description:
                "Username Datastream will use to connect to the database",
              priority: 100,
              args: {
                name: "SALESFORCE_USERNAME",
                description: "String",
              },
            },
            {
              name: "--spanner-database",
              description:
                "The full project and resource path for Spanner database. Format: projects/{project}/instances/{instance}/databases/{database}",
              priority: 100,
              args: {
                name: "SPANNER_DATABASE",
                description: "String",
              },
            },
            {
              name: "--spanner-host",
              description:
                "The regional Spanner endpoint. Format: https://spanner.{region}.rep.googleapis.com",
              args: {
                name: "SPANNER_HOST",
                description: "String",
              },
            },
            {
              name: "--sqlserver-database",
              description: "Database service for the SQL Server connection",
              priority: 100,
              args: {
                name: "SQLSERVER_DATABASE",
                description: "String",
              },
            },
            {
              name: "--sqlserver-hostname",
              description: "IP or hostname of the SQL Server source database",
              priority: 100,
              args: {
                name: "SQLSERVER_HOSTNAME",
                description: "String",
              },
            },
            {
              name: "--sqlserver-password",
              description:
                "Password for the user that Datastream will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Datastream",
              args: {
                name: "SQLSERVER_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--sqlserver-port",
              description: "Network port of the SQL Server source database",
              priority: 100,
              args: {
                name: "SQLSERVER_PORT",
                description: "Int",
              },
            },
            {
              name: "--sqlserver-prompt-for-password",
              description:
                "Prompt for the password used to connect to the database",
            },
            {
              name: "--sqlserver-secret-manager-stored-password",
              description:
                "Path to secret manager, storing the password for the user used to connect to the database",
              args: {
                name: "SQLSERVER_SECRET_MANAGER_STORED_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--sqlserver-username",
              description:
                "Username Datastream will use to connect to the database",
              priority: 100,
              args: {
                name: "SQLSERVER_USERNAME",
                description: "String",
              },
            },
            {
              name: "--static-ip-connectivity",
              description: "Use static ip connectivity",
            },
            optTraceToken,
            {
              name: "--type",
              description:
                "Type can be MYSQL, ORACLE, POSTGRESQL, SQLSERVER, SALESFORCE, GOOGLE-CLOUD-STORAGE or BIGQUERY",
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
            name: "CONNECTION_PROFILE",
            description:
              "ID of the connection_profile or fully qualified identifier for the connection_profile",
          },
        },
        {
          name: "delete",
          description: "Delete a Datastream connection profile",
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
            name: "CONNECTION_PROFILE",
            description:
              "ID of the connection_profile or fully qualified identifier for the connection_profile",
          },
        },
        {
          name: "describe",
          description: "Show details about a Datastream connection profile",
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
            name: "CONNECTION_PROFILE",
            description:
              "ID of the connection_profile or fully qualified identifier for the connection_profile",
          },
        },
        {
          name: "discover",
          description: "Discover a Datastream connection profile",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--connection-profile-name",
              description:
                "ID of the connection_profile or fully qualified identifier for the connection_profile",
              priority: 100,
              args: {
                name: "CONNECTION_PROFILE_NAME",
                description: "String",
              },
            },
            {
              name: "--connection-profile-object-file",
              description:
                "Path to a YAML (or JSON) file containing the configuration for a connection profile object. If you pass - as the value of the flag the file content will be read from stdin",
              args: {
                name: "CONNECTION_PROFILE_OBJECT_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--full-hierarchy",
              description:
                "Whether to retrieve the full hierarchy of data objects (TRUE) or only the current level (FALSE)",
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--hierarchy-depth",
              description:
                "The number of hierarchy levels below the current level to be retrieved",
              args: {
                name: "HIERARCHY_DEPTH",
                description: "String",
              },
            },
            optImpersonateServiceAccount,
            optLocation,
            optLogHttp,
            {
              name: "--mysql-rdbms-file",
              description:
                "Path to a YAML (or JSON) file containing the MySQL RDBMS to enrich with child data objects and metadata. If you pass - as the value of the flag the file content will be read from stdin",
              args: {
                name: "MYSQL_RDBMS_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--no-full-hierarchy",
              description:
                "Whether to retrieve the full hierarchy of data objects (TRUE) or only the current level (FALSE)",
              hidden: true,
            },
            {
              name: "--no-recursive",
              description:
                "(DEPRECATED) Whether to retrieve the full hierarchy of data objects (TRUE) or only the current level (FALSE)",
              hidden: true,
              deprecated: true,
            },
            {
              name: "--oracle-rdbms-file",
              description:
                "Path to a YAML (or JSON) file containing the Oracle RDBMS to enrich with child data objects and metadata. If you pass - as the value of the flag the file content will be read from stdin",
              args: {
                name: "ORACLE_RDBMS_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--postgresql-rdbms-file",
              description:
                "Path to a YAML (or JSON) file containing the PostgreSQL RDBMS to enrich with child data objects and metadata. If you pass - as the value of the flag the file content will be read from stdin",
              args: {
                name: "POSTGRESQL_RDBMS_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--recursive",
              description:
                "(DEPRECATED) Whether to retrieve the full hierarchy of data objects (TRUE) or only the current level (FALSE)",
              deprecated: true,
            },
            {
              name: "--recursive-depth",
              description:
                "(DEPRECATED) The number of hierarchy levels below the current level to be retrieved",
              deprecated: true,
              args: {
                name: "RECURSIVE_DEPTH",
                description: "String",
              },
            },
            {
              name: "--sqlserver-rdbms-file",
              description:
                "Path to a YAML (or JSON) file containing the SQL Server RDBMS to enrich with child data objects and metadata. If you pass - as the value of the flag the file content will be read from stdin",
              args: {
                name: "SQLSERVER_RDBMS_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "list",
          description: "List Datastream connection profiles",
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
          description: "Update a Datastream connection profile",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--bucket",
              description:
                "The full project and resource path for Cloud Storage bucket including the name",
              args: {
                name: "BUCKET",
                description: "String",
              },
            },
            {
              name: "--ca-certificate",
              description:
                "X509 PEM-encoded certificate of the CA that signed the source database server's certificate. The replica will use this certificate to verify it's connecting to the right host",
              args: {
                name: "CA_CERTIFICATE",
                description: "String",
              },
            },
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
            },
            {
              name: "--client-certificate",
              description:
                "X509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server",
              args: {
                name: "CLIENT_CERTIFICATE",
                description: "String",
              },
            },
            {
              name: "--client-key",
              description:
                "Unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate",
              args: {
                name: "CLIENT_KEY",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--database-service",
              description: "Database service for the Oracle connection",
              args: {
                name: "DATABASE_SERVICE",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Friendly name for the connection profile",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--force",
              description:
                "Update the connection profile without validating it",
            },
            optFormat,
            {
              name: "--forward-ssh-hostname",
              description: "Hostname for the SSH tunnel",
              args: {
                name: "FORWARD_SSH_HOSTNAME",
                description: "String",
              },
            },
            {
              name: "--forward-ssh-password",
              description: "SSH password",
              args: {
                name: "FORWARD_SSH_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--forward-ssh-port",
              description: "Port for the SSH tunnel, default value is 22",
              args: {
                name: "FORWARD_SSH_PORT",
                description: "Int",
              },
            },
            {
              name: "--forward-ssh-private-key",
              description: "SSH private key",
              args: {
                name: "FORWARD_SSH_PRIVATE_KEY",
                description: "String",
              },
            },
            {
              name: "--forward-ssh-username",
              description: "Username for the SSH tunnel",
              args: {
                name: "FORWARD_SSH_USERNAME",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--location",
              description: "The Cloud location for the connection_profile",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--mongodb-additional-options",
              description:
                "Specifies additional options for the MongoDB connection",
              args: {
                name: "MONGODB_PROFILE_ADDITIONAL_OPTIONS",
                description: "Dict",
              },
            },
            {
              name: "--mongodb-ca-certificate",
              description:
                "X509 PEM-encoded certificate of the CA that signed the source database server's certificate. The replica will use this certificate to verify it's connecting to the right host",
              args: {
                name: "MONGODB_CA_CERTIFICATE",
                description: "String",
              },
            },
            {
              name: "--mongodb-direct-connection",
              description:
                "Connect to the mongodb hosts directly and do not try to resolve any of the replicas from the replica set",
            },
            {
              name: "--mongodb-host-addresses",
              description:
                "IP or hostname and port of the MongoDB source database",
              args: {
                name: "IPv4_ADDRESS_OR_HOSTNAME:PORT",
                description: "List",
              },
            },
            {
              name: "--mongodb-password",
              description:
                "Password for the user that Datastream will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Datastream",
              args: {
                name: "MONGODB_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--mongodb-prompt-for-password",
              description:
                "Prompt for the password used to connect to the database",
            },
            {
              name: "--mongodb-replica-set",
              description: "Replica set of the MongoDB source database",
              args: {
                name: "MONGODB_REPLICA_SET",
                description: "String",
              },
            },
            {
              name: "--mongodb-secret-manager-stored-password",
              description:
                "Path to secret manager, storing the password for the user used to connect to the database",
              args: {
                name: "MONGODB_SECRET_MANAGER_STORED_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--mongodb-srv-connection-format",
              description:
                "SRV Connection format for the MongoDB source database",
            },
            {
              name: "--mongodb-standard-connection-format",
              description:
                "Standard connection format for the MongoDB source database",
            },
            {
              name: "--mongodb-tls",
              description:
                "Enable Transport Layer Security for the monogodb connection",
            },
            {
              name: "--mongodb-username",
              description:
                "Username Datastream will use to connect to the database",
              args: {
                name: "MONGODB_USERNAME",
                description: "String",
              },
            },
            {
              name: "--mysql-hostname",
              description: "IP or hostname of the MySQL source database",
              args: {
                name: "MYSQL_HOSTNAME",
                description: "String",
              },
            },
            {
              name: "--mysql-password",
              description:
                "Password for the user that Datastream will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Datastream",
              args: {
                name: "MYSQL_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--mysql-port",
              description: "Network port of the MySQL source database",
              args: {
                name: "MYSQL_PORT",
                description: "Int",
              },
            },
            {
              name: "--mysql-prompt-for-password",
              description:
                "Prompt for the password used to connect to the database",
            },
            {
              name: "--mysql-secret-manager-stored-password",
              description:
                "Path to secret manager, storing the password for the user used to connect to the database",
              args: {
                name: "MYSQL_SECRET_MANAGER_STORED_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--mysql-username",
              description:
                "Username Datastream will use to connect to the database",
              args: {
                name: "MYSQL_USERNAME",
                description: "String",
              },
            },
            {
              name: "--no-clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
              hidden: true,
            },
            {
              name: "--no-force",
              description:
                "Update the connection profile without validating it",
              hidden: true,
            },
            {
              name: "--no-mongodb-direct-connection",
              description:
                "Connect to the mongodb hosts directly and do not try to resolve any of the replicas from the replica set",
              hidden: true,
            },
            {
              name: "--no-mongodb-prompt-for-password",
              description:
                "Prompt for the password used to connect to the database",
              hidden: true,
            },
            {
              name: "--no-mongodb-srv-connection-format",
              description:
                "SRV Connection format for the MongoDB source database",
              hidden: true,
            },
            {
              name: "--no-mongodb-standard-connection-format",
              description:
                "Standard connection format for the MongoDB source database",
              hidden: true,
            },
            {
              name: "--no-mongodb-tls",
              description:
                "Enable Transport Layer Security for the monogodb connection",
              hidden: true,
            },
            {
              name: "--no-mysql-prompt-for-password",
              description:
                "Prompt for the password used to connect to the database",
              hidden: true,
            },
            {
              name: "--no-oracle-prompt-for-password",
              description:
                "Prompt for the password used to connect to the database",
              hidden: true,
            },
            {
              name: "--no-postgresql-prompt-for-password",
              description:
                "Prompt for the password used to connect to the database",
              hidden: true,
            },
            {
              name: "--no-salesforce-prompt-for-oauth2-client-secret",
              description:
                "Prompt for the OAuth 2.0 Client secret used to connect to Salesforce",
              hidden: true,
            },
            {
              name: "--no-salesforce-prompt-for-password",
              description:
                "Prompt for the password used to connect to Salesforce",
              hidden: true,
            },
            {
              name: "--no-salesforce-prompt-for-security-token",
              description:
                "Prompt for the security token used to connect to Salesforce",
              hidden: true,
            },
            {
              name: "--no-sqlserver-prompt-for-password",
              description:
                "Prompt for the password used to connect to the database",
              hidden: true,
            },
            {
              name: "--no-static-ip-connectivity",
              description: "Use static ip connectivity",
              hidden: true,
            },
            {
              name: "--oracle-ca-certificate",
              description:
                "PEM-encoded certificate of the CA that signed the source database server's certificate",
              args: {
                name: "ORACLE_CA_CERTIFICATE",
                description: "String",
              },
            },
            {
              name: "--oracle-hostname",
              description: "IP or hostname of the oracle source database",
              args: {
                name: "ORACLE_HOSTNAME",
                description: "String",
              },
            },
            {
              name: "--oracle-password",
              description:
                "Password for the user that Datastream will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Datastream",
              args: {
                name: "ORACLE_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--oracle-port",
              description: "Network port of the oracle source database",
              args: {
                name: "ORACLE_PORT",
                description: "Int",
              },
            },
            {
              name: "--oracle-prompt-for-password",
              description:
                "Prompt for the password used to connect to the database",
            },
            {
              name: "--oracle-secret-manager-stored-password",
              description:
                "Path to secret manager, storing the password for the user used to connect to the database",
              args: {
                name: "ORACLE_SECRET_MANAGER_STORED_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--oracle-server-certificate-distinguished-name",
              description:
                "The distinguished name (DN) mentioned in the server certificate. This corresponds to the SSL_SERVER_CERT_DN sqlnet parameter. If this field is not provided, the DN matching is not enforced",
              args: {
                name: "ORACLE_SERVER_CERTIFICATE_DISTINGUISHED_NAME",
                description: "String",
              },
            },
            {
              name: "--oracle-username",
              description:
                "Username Datastream will use to connect to the database",
              args: {
                name: "ORACLE_USERNAME",
                description: "String",
              },
            },
            {
              name: "--postgresql-ca-certificate",
              description:
                "X509 PEM-encoded certificate of the CA that signed the source database server's certificate. The replica will use this certificate to verify it's connecting to the right host",
              args: {
                name: "POSTGRESQL_CA_CERTIFICATE",
                description: "String",
              },
            },
            {
              name: "--postgresql-client-certificate",
              description:
                "X509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server",
              args: {
                name: "POSTGRESQL_CLIENT_CERTIFICATE",
                description: "String",
              },
            },
            {
              name: "--postgresql-client-key",
              description:
                "Unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate",
              args: {
                name: "POSTGRESQL_CLIENT_KEY",
                description: "String",
              },
            },
            {
              name: "--postgresql-database",
              description: "Database service for the PostgreSQL connection",
              args: {
                name: "POSTGRESQL_DATABASE",
                description: "String",
              },
            },
            {
              name: "--postgresql-hostname",
              description: "IP or hostname of the PostgreSQL source database",
              args: {
                name: "POSTGRESQL_HOSTNAME",
                description: "String",
              },
            },
            {
              name: "--postgresql-password",
              description:
                "Password for the user that Datastream will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Datastream",
              args: {
                name: "POSTGRESQL_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--postgresql-port",
              description: "Network port of the PostgreSQL source database",
              args: {
                name: "POSTGRESQL_PORT",
                description: "Int",
              },
            },
            {
              name: "--postgresql-prompt-for-password",
              description:
                "Prompt for the password used to connect to the database",
            },
            {
              name: "--postgresql-secret-manager-stored-password",
              description:
                "Path to secret manager, storing the password for the user used to connect to the database",
              args: {
                name: "POSTGRESQL_SECRET_MANAGER_STORED_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--postgresql-server-certificate-hostname",
              description:
                "The hostname mentioned in the Subject or SAN extension of the server certificate. If this field is not provided, the hostname in the server certificate is not validated",
              args: {
                name: "POSTGRESQL_SERVER_CERTIFICATE_HOSTNAME",
                description: "String",
              },
            },
            {
              name: "--postgresql-username",
              description:
                "Username Datastream will use to connect to the database",
              args: {
                name: "POSTGRESQL_USERNAME",
                description: "String",
              },
            },
            optPrivateConnection,
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
            {
              name: "--root-path",
              description: "The root path inside the Cloud Storage bucket",
              args: {
                name: "ROOT_PATH",
                description: "String",
              },
            },
            {
              name: "--salesforce-domain",
              description:
                "Domain of the Salesforce organization. For example, 'myorg.my.salesforce.com'",
              args: {
                name: "SALESFORCE_DOMAIN",
                description: "String",
              },
            },
            {
              name: "--salesforce-oauth2-client-id",
              description: "OAuth 2.0 Client ID used to connect to Salesforce",
              args: {
                name: "SALESFORCE_OAUTH2_CLIENT_ID",
                description: "String",
              },
            },
            {
              name: "--salesforce-oauth2-client-secret",
              description:
                "OAuth 2.0 Client secret used to connect to Salesforce",
              args: {
                name: "SALESFORCE_OAUTH2_CLIENT_SECRET",
                description: "String",
              },
            },
            {
              name: "--salesforce-password",
              description:
                "Password for the user that Datastream will be using to connect to Salesforce. This field is not returned on request, and the value is encrypted when stored in Datastream",
              args: {
                name: "SALESFORCE_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--salesforce-prompt-for-oauth2-client-secret",
              description:
                "Prompt for the OAuth 2.0 Client secret used to connect to Salesforce",
            },
            {
              name: "--salesforce-prompt-for-password",
              description:
                "Prompt for the password used to connect to Salesforce",
            },
            {
              name: "--salesforce-prompt-for-security-token",
              description:
                "Prompt for the security token used to connect to Salesforce",
            },
            {
              name: "--salesforce-secret-manager-stored-oauth2-client-secret",
              description:
                "Path to secret manager, storing the OAuth 2.0 Client secret used to connect to Salesforce",
              args: {
                name: "SALESFORCE_SECRET_MANAGER_STORED_OAUTH2_CLIENT_SECRET",
                description: "String",
              },
            },
            {
              name: "--salesforce-secret-manager-stored-password",
              description:
                "Path to secret manager, storing the password for the user used to connect to Salesforce",
              args: {
                name: "SALESFORCE_SECRET_MANAGER_STORED_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--salesforce-secret-manager-stored-security-token",
              description:
                "Path to secret manager, storing the security token used to connect to Salesforce",
              args: {
                name: "SALESFORCE_SECRET_MANAGER_STORED_SECURITY_TOKEN",
                description: "String",
              },
            },
            {
              name: "--salesforce-security-token",
              description:
                "Security token for the user that Datastream will be using to connect to Salesforce",
              args: {
                name: "SALESFORCE_SECURITY_TOKEN",
                description: "String",
              },
            },
            {
              name: "--salesforce-username",
              description:
                "Username Datastream will use to connect to the database",
              args: {
                name: "SALESFORCE_USERNAME",
                description: "String",
              },
            },
            {
              name: "--spanner-host",
              description:
                "The regional Spanner endpoint. Format: https://spanner.{region}.rep.googleapis.com",
              args: {
                name: "SPANNER_HOST",
                description: "String",
              },
            },
            {
              name: "--sqlserver-database",
              description: "Database service for the SQL Server connection",
              args: {
                name: "SQLSERVER_DATABASE",
                description: "String",
              },
            },
            {
              name: "--sqlserver-hostname",
              description: "IP or hostname of the SQL Server source database",
              args: {
                name: "SQLSERVER_HOSTNAME",
                description: "String",
              },
            },
            {
              name: "--sqlserver-password",
              description:
                "Password for the user that Datastream will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Datastream",
              args: {
                name: "SQLSERVER_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--sqlserver-port",
              description: "Network port of the SQL Server source database",
              args: {
                name: "SQLSERVER_PORT",
                description: "Int",
              },
            },
            {
              name: "--sqlserver-prompt-for-password",
              description:
                "Prompt for the password used to connect to the database",
            },
            {
              name: "--sqlserver-secret-manager-stored-password",
              description:
                "Path to secret manager, storing the password for the user used to connect to the database",
              args: {
                name: "SQLSERVER_SECRET_MANAGER_STORED_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--sqlserver-username",
              description:
                "Username Datastream will use to connect to the database",
              args: {
                name: "SQLSERVER_USERNAME",
                description: "String",
              },
            },
            {
              name: "--static-ip-connectivity",
              description: "Use static ip connectivity",
            },
            optTraceToken,
            {
              name: "--type",
              description:
                "Type can be MYSQL, ORACLE, POSTGRESQL, SQLSERVER, SALESFORCE, GOOGLE-CLOUD-STORAGE or BIGQUERY",
              priority: 100,
              args: {
                name: "TYPE",
                description: "String",
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
      name: "locations",
      description: "Manage Datastream location resources",
      subcommands: [
        {
          name: "describe",
          description: "Show details about the location",
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
          name: "fetch-static-ips",
          description: "List Datastream static ips per location",
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
          description: "List Datastream locations",
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
      name: "objects",
      description: "Manage Datastream stream objects",
      subcommands: [
        {
          name: "describe",
          description: "Show details about a Stream object",
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
            optStream,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "OBJECT",
            description:
              "ID of the stream_object or fully qualified identifier for the stream_object",
          },
        },
        {
          name: "list",
          description: "List a Datastream stream objects",
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
            {
              name: "--stream",
              description:
                "ID of the stream or fully qualified identifier for the stream",
              priority: 100,
              args: {
                name: "STREAM",
                description: "String",
              },
            },
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "lookup",
          description: "Lookup a Datastream stream object",
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
            {
              name: "--mysql-database",
              description: "Mysql database for the object",
              priority: 100,
              args: {
                name: "MYSQL_DATABASE",
                description: "String",
              },
            },
            {
              name: "--mysql-table",
              description: "Mysql table for the object",
              priority: 100,
              args: {
                name: "MYSQL_TABLE",
                description: "String",
              },
            },
            {
              name: "--oracle-schema",
              description: "Oracle schema for the object",
              priority: 100,
              args: {
                name: "ORACLE_SCHEMA",
                description: "String",
              },
            },
            {
              name: "--oracle-table",
              description: "Oracle table for the object",
              priority: 100,
              args: {
                name: "ORACLE_TABLE",
                description: "String",
              },
            },
            {
              name: "--postgresql-schema",
              description: "PostgreSQL schema for the object",
              priority: 100,
              args: {
                name: "POSTGRESQL_SCHEMA",
                description: "String",
              },
            },
            {
              name: "--postgresql-table",
              description: "PostgreSQL table for the object",
              priority: 100,
              args: {
                name: "POSTGRESQL_TABLE",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--salesforce-object-name",
              description: "Salesforce object name",
              priority: 100,
              args: {
                name: "SALESFORCE_OBJECT_NAME",
                description: "String",
              },
            },
            {
              name: "--spanner-schema",
              description: "Spanner schema name",
              args: {
                name: "SPANNER_SCHEMA",
                description: "String",
              },
            },
            {
              name: "--spanner-table",
              description: "Spanner table name",
              priority: 100,
              args: {
                name: "SPANNER_TABLE",
                description: "String",
              },
            },
            {
              name: "--sqlserver-schema",
              description: "SQL Server schema for the object",
              priority: 100,
              args: {
                name: "SQLSERVER_SCHEMA",
                description: "String",
              },
            },
            {
              name: "--sqlserver-table",
              description: "SQL Server table for the object",
              priority: 100,
              args: {
                name: "SQLSERVER_TABLE",
                description: "String",
              },
            },
            {
              name: "--stream",
              description:
                "ID of the stream or fully qualified identifier for the stream",
              priority: 100,
              args: {
                name: "STREAM",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "start-backfill",
          description: "Start a backfill job for a Stream object",
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
            optStream,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "OBJECT",
            description:
              "ID of the stream_object or fully qualified identifier for the stream_object",
          },
        },
        {
          name: "stop-backfill",
          description: "Stop a backfill job for a Stream object",
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
            optStream,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "OBJECT",
            description:
              "ID of the stream_object or fully qualified identifier for the stream_object",
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
      description: "Manage Datastream operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a Datastream operation",
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
          name: "delete",
          description: "Delete a Datastream operation",
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
      description: "Manage Datastream private connections",
      subcommands: [
        {
          name: "create",
          description: "Create a Datastream private connection",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--display-name",
              description: "Friendly name for the private connection",
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
            {
              name: "--location",
              description: "The Cloud location for the private_connection",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
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
            {
              name: "--no-validate-only",
              description:
                "If set, the request will retrieve the project id to allow in the network attachment Datastream will connect to",
              hidden: true,
            },
            optProject,
            optQuiet,
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
          description: "Delete a Datastream private connection",
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
                "You must set the force to ensure that the private connectivity configuration is deleted properly",
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation3,
            optLogHttp,
            {
              name: "--no-force",
              description:
                "You must set the force to ensure that the private connectivity configuration is deleted properly",
              hidden: true,
            },
            optProject,
            optQuiet,
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
          description: "Show details about a Datastream private connection",
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
      name: "routes",
      description: "Manage Datastream routes",
      subcommands: [
        {
          name: "create",
          description: "Create a Datastream private connection route",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--destination-address",
              description: "Destination address for connection",
              priority: 100,
              args: {
                name: "DESTINATION_ADDRESS",
                description: "String",
              },
            },
            {
              name: "--destination-port",
              description: "Destination port for connection",
              args: {
                name: "DESTINATION_PORT",
                description: "Int",
              },
            },
            {
              name: "--display-name",
              description: "Friendly name for the route",
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
            {
              name: "--location",
              description: "The Cloud location for the route",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--private-connection",
              description: "The private connection of the route",
              args: {
                name: "PRIVATE_CONNECTION",
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
            name: "ROUTE",
            description:
              "ID of the route or fully qualified identifier for the route",
          },
        },
        {
          name: "delete",
          description: "Delete a Datastream private connection route",
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
            {
              name: "--private-connection",
              description: "The private connection name",
              args: {
                name: "PRIVATE_CONNECTION",
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
            name: "ROUTE",
            description:
              "ID of the route or fully qualified identifier for the route",
          },
        },
        {
          name: "describe",
          description: "Show details about the route",
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
            {
              name: "--private-connection",
              description: "The private connection name",
              args: {
                name: "PRIVATE_CONNECTION",
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
            name: "ROUTE",
            description:
              "ID of the route or fully qualified identifier for the route",
          },
        },
        {
          name: "list",
          description: "List Datastream routes",
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
            optLocation3,
            optLogHttp,
            optNoUri,
            optPageSize,
            optPrivateConnection,
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
      name: "streams",
      description: "Manage Datastream stream resources",
      subcommands: [
        {
          name: "create",
          description: "Create a Datastream stream",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--backfill-all",
              description:
                "Automatically backfill objects included in the stream source configuration. Specific objects can be excluded. This flag is equivalent to selecting the Automatic backfill type in the Google Cloud console",
            },
            {
              name: "--backfill-none",
              description:
                "Do not automatically backfill any objects. This flag is equivalent to selecting the Manual backfill type in the Google Cloud console",
            },
            {
              name: "--bigquery-destination-config",
              description:
                "Path to a YAML (or JSON) file containing the configuration for Google BigQuery Destination Config",
              args: {
                name: "BIGQUERY_DESTINATION_CONFIG",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
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
              description: "Friendly name for the stream",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--force",
              description: "Create the stream without validating it",
            },
            optFormat,
            {
              name: "--gcs-destination-config",
              description:
                "Path to a YAML (or JSON) file containing the configuration for Google Cloud Storage Destination Config",
              args: {
                name: "GCS_DESTINATION_CONFIG",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLabels,
            optLocation2,
            optLogHttp,
            {
              name: "--mongodb-excluded-objects",
              description:
                "Path to a YAML (or JSON) file containing the MongoDB data sources to avoid backfilling",
              args: {
                name: "MONGODB_EXCLUDED_OBJECTS",
                description: "String",
              },
            },
            {
              name: "--mongodb-source-config",
              description:
                "Path to a YAML (or JSON) file containing the configuration for MongoDB Source Config",
              args: {
                name: "MONGODB_SOURCE_CONFIG",
                description: "String",
              },
            },
            {
              name: "--mysql-excluded-objects",
              description:
                "Path to a YAML (or JSON) file containing the MySQL data sources to avoid backfilling",
              args: {
                name: "MYSQL_EXCLUDED_OBJECTS",
                description: "String",
              },
            },
            {
              name: "--mysql-source-config",
              description:
                "Path to a YAML (or JSON) file containing the configuration for MySQL Source Config",
              args: {
                name: "MYSQL_SOURCE_CONFIG",
                description: "String",
              },
            },
            {
              name: "--no-backfill-all",
              description:
                "Automatically backfill objects included in the stream source configuration. Specific objects can be excluded. This flag is equivalent to selecting the Automatic backfill type in the Google Cloud console",
              hidden: true,
            },
            {
              name: "--no-backfill-none",
              description:
                "Do not automatically backfill any objects. This flag is equivalent to selecting the Manual backfill type in the Google Cloud console",
              hidden: true,
            },
            {
              name: "--no-force",
              description: "Create the stream without validating it",
              hidden: true,
            },
            {
              name: "--no-validate-only",
              description:
                "Only validate the stream, but do not create any resources. The default is false",
              hidden: true,
            },
            {
              name: "--oracle-excluded-objects",
              description:
                "Path to a YAML (or JSON) file containing the Oracle data sources to avoid backfilling",
              args: {
                name: "ORACLE_EXCLUDED_OBJECTS",
                description: "String",
              },
            },
            {
              name: "--oracle-source-config",
              description:
                "Path to a YAML (or JSON) file containing the configuration for Oracle Source Config",
              args: {
                name: "ORACLE_SOURCE_CONFIG",
                description: "String",
              },
            },
            {
              name: "--postgresql-excluded-objects",
              description:
                "Path to a YAML (or JSON) file containing the PostgreSQL data sources to avoid backfilling",
              args: {
                name: "POSTGRESQL_EXCLUDED_OBJECTS",
                description: "String",
              },
            },
            {
              name: "--postgresql-source-config",
              description:
                "Path to a YAML (or JSON) file containing the configuration for PostgreSQL Source Config",
              args: {
                name: "POSTGRESQL_SOURCE_CONFIG",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--rule-sets",
              description:
                "Path to a JSON file containing a list of rule sets to be applied to the stream",
              args: {
                name: "RULE_SETS",
                description: "String",
              },
            },
            {
              name: "--salesforce-excluded-objects",
              description:
                "Path to a YAML (or JSON) file containing the Salesforce data sources to avoid backfilling",
              args: {
                name: "SALESFORCE_EXCLUDED_OBJECTS",
                description: "String",
              },
            },
            {
              name: "--salesforce-source-config",
              description:
                "Path to a YAML (or JSON) file containing the configuration for Salesforce Source Config",
              args: {
                name: "SALESFORCE_SOURCE_CONFIG",
                description: "String",
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
              name: "--spanner-excluded-objects",
              description:
                "Path to a YAML (or JSON) file containing the Spanner data sources to avoid backfilling",
              args: {
                name: "SPANNER_EXCLUDED_OBJECTS",
                description: "String",
              },
            },
            {
              name: "--spanner-source-config",
              description:
                "Path to a YAML (or JSON) file containing the configuration for Spanner Source Config",
              args: {
                name: "SPANNER_SOURCE_CONFIG",
                description: "String",
              },
            },
            {
              name: "--sqlserver-excluded-objects",
              description:
                "Path to a YAML (or JSON) file containing the SQL Server data sources to avoid backfilling",
              args: {
                name: "SQLSERVER_EXCLUDED_OBJECTS",
                description: "String",
              },
            },
            {
              name: "--sqlserver-source-config",
              description:
                "Path to a YAML (or JSON) file containing the configuration for SQL Server Source Config",
              args: {
                name: "SQLSERVER_SOURCE_CONFIG",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            {
              name: "--validate-only",
              description:
                "Only validate the stream, but do not create any resources. The default is false",
            },
            optVerbosity,
          ],
          args: {
            name: "STREAM",
            description:
              "ID of the stream or fully qualified identifier for the stream",
          },
        },
        {
          name: "delete",
          description: "Delete a Datastream stream",
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
            name: "STREAM",
            description:
              "ID of the stream or fully qualified identifier for the stream",
          },
        },
        {
          name: "describe",
          description: "Show details about a Datastream stream resource",
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
            name: "STREAM",
            description:
              "ID of the stream or fully qualified identifier for the stream",
          },
        },
        {
          name: "list",
          description: "List Datastream stream resources",
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
          description: "Updates a Datastream stream",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--backfill-all",
              description:
                "Automatically backfill objects included in the stream source configuration. Specific objects can be excluded. This flag is equivalent to selecting the Automatic backfill type in the Google Cloud console",
            },
            {
              name: "--backfill-none",
              description:
                "Do not automatically backfill any objects. This flag is equivalent to selecting the Manual backfill type in the Google Cloud console",
            },
            {
              name: "--bigquery-destination-config",
              description:
                "Path to a YAML (or JSON) file containing the configuration for Google BigQuery Destination Config",
              args: {
                name: "BIGQUERY_DESTINATION_CONFIG",
                description: "String",
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
              description: "Friendly name for the stream",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--force",
              description: "Update the stream without validating it",
            },
            optFormat,
            {
              name: "--gcs-destination-config",
              description:
                "Path to a YAML (or JSON) file containing the configuration for Google Cloud Storage Destination Config",
              args: {
                name: "GCS_DESTINATION_CONFIG",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation2,
            optLogHttp,
            {
              name: "--mongodb-excluded-objects",
              description:
                "Path to a YAML (or JSON) file containing the MongoDB data sources to avoid backfilling",
              args: {
                name: "MONGODB_EXCLUDED_OBJECTS",
                description: "String",
              },
            },
            {
              name: "--mongodb-source-config",
              description:
                "Path to a YAML (or JSON) file containing the configuration for MongoDB Source Config",
              args: {
                name: "MONGODB_SOURCE_CONFIG",
                description: "String",
              },
            },
            {
              name: "--mysql-excluded-objects",
              description:
                "Path to a YAML (or JSON) file containing the MySQL data sources to avoid backfilling",
              args: {
                name: "MYSQL_EXCLUDED_OBJECTS",
                description: "String",
              },
            },
            {
              name: "--mysql-source-config",
              description:
                "Path to a YAML (or JSON) file containing the configuration for MySQL Source Config",
              args: {
                name: "MYSQL_SOURCE_CONFIG",
                description: "String",
              },
            },
            {
              name: "--no-backfill-all",
              description:
                "Automatically backfill objects included in the stream source configuration. Specific objects can be excluded. This flag is equivalent to selecting the Automatic backfill type in the Google Cloud console",
              hidden: true,
            },
            {
              name: "--no-backfill-none",
              description:
                "Do not automatically backfill any objects. This flag is equivalent to selecting the Manual backfill type in the Google Cloud console",
              hidden: true,
            },
            {
              name: "--no-clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
              hidden: true,
            },
            {
              name: "--no-force",
              description: "Update the stream without validating it",
              hidden: true,
            },
            {
              name: "--no-validate-only",
              description:
                "Only validate the stream, but do not update any resources. The default is false",
              hidden: true,
            },
            {
              name: "--oracle-excluded-objects",
              description:
                "Path to a YAML (or JSON) file containing the Oracle data sources to avoid backfilling",
              args: {
                name: "ORACLE_EXCLUDED_OBJECTS",
                description: "String",
              },
            },
            {
              name: "--oracle-source-config",
              description:
                "Path to a YAML (or JSON) file containing the configuration for Oracle Source Config",
              args: {
                name: "ORACLE_SOURCE_CONFIG",
                description: "String",
              },
            },
            {
              name: "--postgresql-excluded-objects",
              description:
                "Path to a YAML (or JSON) file containing the PostgreSQL data sources to avoid backfilling",
              args: {
                name: "POSTGRESQL_EXCLUDED_OBJECTS",
                description: "String",
              },
            },
            {
              name: "--postgresql-source-config",
              description:
                "Path to a YAML (or JSON) file containing the configuration for PostgreSQL Source Config",
              args: {
                name: "POSTGRESQL_SOURCE_CONFIG",
                description: "String",
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
            {
              name: "--rule-sets",
              description:
                "Path to a JSON file containing a list of rule sets to be applied to the stream",
              args: {
                name: "RULE_SETS",
                description: "String",
              },
            },
            {
              name: "--salesforce-excluded-objects",
              description:
                "Path to a YAML (or JSON) file containing the Salesforce data sources to avoid backfilling",
              args: {
                name: "SALESFORCE_EXCLUDED_OBJECTS",
                description: "String",
              },
            },
            {
              name: "--salesforce-source-config",
              description:
                "Path to a YAML (or JSON) file containing the configuration for Salesforce Source Config",
              args: {
                name: "SALESFORCE_SOURCE_CONFIG",
                description: "String",
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
              name: "--spanner-excluded-objects",
              description:
                "Path to a YAML (or JSON) file containing the Spanner data sources to avoid backfilling",
              args: {
                name: "SPANNER_EXCLUDED_OBJECTS",
                description: "String",
              },
            },
            {
              name: "--spanner-source-config",
              description:
                "Path to a YAML (or JSON) file containing the configuration for Spanner Source Config",
              args: {
                name: "SPANNER_SOURCE_CONFIG",
                description: "String",
              },
            },
            {
              name: "--sqlserver-excluded-objects",
              description:
                "Path to a YAML (or JSON) file containing the SQL Server data sources to avoid backfilling",
              args: {
                name: "SQLSERVER_EXCLUDED_OBJECTS",
                description: "String",
              },
            },
            {
              name: "--sqlserver-source-config",
              description:
                "Path to a YAML (or JSON) file containing the configuration for SQL Server Source Config",
              args: {
                name: "SQLSERVER_SOURCE_CONFIG",
                description: "String",
              },
            },
            {
              name: "--state",
              description: 'Stream state, can be set to: "RUNNING" or "PAUSED"',
              args: {
                name: "STATE",
                description: "String",
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
              name: "--update-mask",
              description:
                'Used to specify the fields to be overwritten in the stream resource by the update. If the update mask is used, then a field will be overwritten only if it is in the mask. If the user does not provide a mask then all fields will be overwritten. This is a comma-separated list of fully qualified names of fields, written as snake_case or camelCase. Example: "display_name, source_config.oracle_source_config"',
              args: {
                name: "UPDATE_MASK",
                description: "String",
              },
            },
            optUserOutputEnabled,
            {
              name: "--validate-only",
              description:
                "Only validate the stream, but do not update any resources. The default is false",
            },
            optVerbosity,
          ],
          args: {
            name: "STREAM",
            description:
              "ID of the stream or fully qualified identifier for the stream",
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
