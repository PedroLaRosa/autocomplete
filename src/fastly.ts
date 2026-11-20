// Fastly CLI v17.2.0 (git tag v17.2.0 of github.com/fastly/cli, 2026-11-19). Source: kingpin command and flag definitions in pkg/commands/** and pkg/app/run.go
// at tag v17.2.0 (released 2026-11-17 per CHANGELOG.md), plus go-fastly v19.3.1 enum constants, read statically with a script.
// The release binary was NOT run (execution was denied in this session), so the tree was not compared against `fastly help --format json` output.
// Previous spec was v3.1.0. Deprecated top-level aliases (acl, backend, logging, ...) are hidden commands that mirror their `service ...` replacements.

const jsonOption: Fig.Option = {
  name: ["-j", "--json"],
  description: "Render output as JSON",
};

const serviceNameOption: Fig.Option = {
  name: "--service-name",
  description: "The name of the service",
  args: {
    name: "service-name",
  },
};

const serviceIdOption: Fig.Option = {
  name: ["-s", "--service-id"],
  description: "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
  args: {
    name: "service-id",
  },
};

const versionOption: Fig.Option = {
  name: "--version",
  description:
    "'latest', 'active', 'staged', or the number of a specific Fastly service version",
  isRequired: true,
  args: {
    name: "version",
  },
};

const autocloneOption: Fig.Option = {
  name: "--autoclone",
  description:
    "If the selected service version is not editable, clone it and use the clone",
};

const formatOption: Fig.Option = {
  name: "--format",
  description:
    "Apache style log formatting. Your log must produce valid JSON. Can be a string or a file path to a file containing formatting",
  args: {
    name: "format",
  },
};

const formatVersionOption: Fig.Option = {
  name: "--format-version",
  description:
    "The version of the custom logging format used for the configured endpoint. Can be either 2 (the default, version 2 log format) or 1 (the version 1 log format). The logging call gets placed by default in vcl_log if format_version is set to 2 and in vcl_deliver if format_version is set to 1",
  args: {
    name: "format-version",
  },
};

const placementOption: Fig.Option = {
  name: "--placement",
  description:
    "Where in the generated VCL the logging call should be placed, overriding any format_version default. Can be none, which suppresses the logging call (the only valid value for Compute services). This field is not required and has no default value. When updating a Delivery service, pass an empty string to reset the endpoint back to automatic placement",
  args: {
    name: "placement",
  },
};

const responseConditionOption: Fig.Option = {
  name: "--response-condition",
  description:
    "The name of an existing condition in the configured endpoint, or leave blank to always execute",
  args: {
    name: "response-condition",
  },
};

const workspaceIdOption: Fig.Option = {
  name: "--workspace-id",
  description:
    "Alphanumeric string identifying the NGWAF Workspace (falls back to FASTLY_WORKSPACE_ID)",
  args: {
    name: "workspace-id",
  },
};

const messageTypeOption: Fig.Option = {
  name: "--message-type",
  description:
    "How the message should be formatted. One of: classic (default), loggly, logplex or blank",
  args: {
    name: "message-type",
  },
};

const periodOption: Fig.Option = {
  name: "--period",
  description:
    "How frequently log files are finalized so they can be available for reading (in seconds, default 3600)",
  args: {
    name: "period",
  },
};

const compressionCodecOption: Fig.Option = {
  name: "--compression-codec",
  description:
    'The codec used for compression of your logs. Valid values are zstd, snappy, and gzip. If the specified codec is "gzip", gzip_level will default to 3. To specify a different level, leave compression_codec blank and explicitly set the level using gzip_level. Specifying both compression_codec and gzip_level in the same API request will result in an error',
  args: {
    name: "compression-codec",
  },
};

const gzipLevelOption: Fig.Option = {
  name: "--gzip-level",
  description:
    "What level of GZIP encoding to have when dumping logs (default 0, no compression)",
  args: {
    name: "gzip-level",
  },
};

const timestampFormatOption: Fig.Option = {
  name: "--timestamp-format",
  description:
    'Strftime specified timestamp formatting (default "%Y-%m-%dT%H:%M:%S.000")',
  args: {
    name: "timestamp-format",
  },
};

const publicKeyOption: Fig.Option = {
  name: "--public-key",
  description:
    "A PGP public key that Fastly will use to encrypt your log files before writing them to disk",
  args: {
    name: "public-key",
  },
};

const listIdOption: Fig.Option = {
  name: "--list-id",
  description: "List ID",
  isRequired: true,
  args: {
    name: "list-id",
  },
};

const alertIdOption: Fig.Option = {
  name: "--alert-id",
  description: "Alphanumeric string identifying the alert",
  isRequired: true,
  args: {
    name: "alert-id",
  },
};

const pathOption: Fig.Option = {
  name: "--path",
  description: "The path to upload logs to",
  args: {
    name: "path",
  },
};

const storeIdOption: Fig.Option = {
  name: ["-s", "--store-id"],
  description: "Store ID",
  isRequired: true,
  args: {
    name: "store-id",
  },
};

const descriptionOption: Fig.Option = {
  name: "--description",
  description: "A description of the integration",
  args: {
    name: "description",
  },
};

const tlsCaCertOption: Fig.Option = {
  name: "--tls-ca-cert",
  description:
    "A secure certificate to authenticate the server with. Must be in PEM format",
  args: {
    name: "tls-ca-cert",
  },
};

const tlsClientCertOption: Fig.Option = {
  name: "--tls-client-cert",
  description:
    "The client certificate used to make authenticated requests. Must be in PEM format",
  args: {
    name: "tls-client-cert",
  },
};

const tlsClientKeyOption: Fig.Option = {
  name: "--tls-client-key",
  description:
    "The client private key used to make authenticated requests. Must be in PEM format",
  args: {
    name: "tls-client-key",
  },
};

const tlsHostnameOption: Fig.Option = {
  name: "--tls-hostname",
  description: "Used during the TLS handshake to validate the certificate",
  args: {
    name: "tls-hostname",
  },
};

const routingConfigIdOption: Fig.Option = {
  name: "--routing-config-id",
  description: "The Routing Config Identifier",
  isRequired: true,
  args: {
    name: "routing-config-id",
  },
};

const portOption: Fig.Option = {
  name: "--port",
  description: "The port number",
  args: {
    name: "port",
  },
};

const pageOption: Fig.Option = {
  name: "--page",
  description: "Page number of data set to fetch",
  args: {
    name: "page",
  },
};

const perPageOption: Fig.Option = {
  name: "--per-page",
  description: "Number of records per page",
  args: {
    name: "per-page",
  },
};

const accountNameOption: Fig.Option = {
  name: "--account-name",
  description:
    "The google account name used to obtain temporary credentials (default none)",
  args: {
    name: "account-name",
  },
};

const nameOption: Fig.Option = {
  name: ["-n", "--name"],
  description: "The name of the integration",
  isRequired: true,
  args: {
    name: "name",
  },
};

const aclIdOption: Fig.Option = {
  name: "--acl-id",
  description: "Alphanumeric string identifying a ACL",
  isRequired: true,
  args: {
    name: "acl-id",
  },
};

const commentOption: Fig.Option = {
  name: "--comment",
  description: "A descriptive note",
  args: {
    name: "comment",
  },
};

const dictionaryIdOption: Fig.Option = {
  name: "--dictionary-id",
  description: "Dictionary ID",
  isRequired: true,
  args: {
    name: "dictionary-id",
  },
};

const fileMaxBytesOption: Fig.Option = {
  name: "--file-max-bytes",
  description: "The maximum size of a log file in bytes",
  args: {
    name: "file-max-bytes",
  },
};

const entriesOption: Fig.Option = {
  name: "--entries",
  description:
    "Entries for the list. Can either be a comma separated list or a path to a file",
  isRequired: true,
  args: {
    name: "entries",
  },
};

const secretKeyOption: Fig.Option = {
  name: "--secret-key",
  description:
    "Your Google Cloud Platform account secret key. The private_key field in your service account authentication JSON",
  args: {
    name: "secret-key",
  },
};

const userOption: Fig.Option = {
  name: "--user",
  description:
    "Your Google Cloud Platform service account email address. The client_email field in your service account authentication JSON",
  args: {
    name: "user",
  },
};

const requestMaxBytesOption: Fig.Option = {
  name: "--request-max-bytes",
  description: "Maximum size of log batch, if non-zero. Defaults to 100MB",
  args: {
    name: "request-max-bytes",
  },
};

const requestMaxEntriesOption: Fig.Option = {
  name: "--request-max-entries",
  description:
    "Maximum number of logs to append to a batch, if non-zero. Defaults to 10k",
  args: {
    name: "request-max-entries",
  },
};

const useTlsOption: Fig.Option = {
  name: "--use-tls",
  description:
    "Whether to use TLS for secure logging. Can be either true or false",
};

const iamRoleOption: Fig.Option = {
  name: "--iam-role",
  description: "The IAM role ARN for logging",
  args: {
    name: "iam-role",
  },
};

const keyOption: Fig.Option = {
  name: "--key",
  description:
    "The Insert API key from the Account page of your New Relic account",
  args: {
    name: "key",
  },
};

const processingRegionOption: Fig.Option = {
  name: "--processing-region",
  description:
    "The region where logs will be processed before streaming to New Relic. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
  args: {
    name: "processing-region",
  },
};

const addressOption: Fig.Option = {
  name: "--address",
  description: "A hostname or IPv4 address",
  args: {
    name: "address",
  },
};

const urlOption: Fig.Option = {
  name: "--url",
  description: "The URL to POST to",
  args: {
    name: "url",
  },
};

const pathIdOption: Fig.Option = {
  name: "--path-id",
  description: "The Path Identifier",
  isRequired: true,
  args: {
    name: "path-id",
  },
};

const serviceAclSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description: "Create a new ACL attached to the specified service version",
    options: [
      autocloneOption,
      {
        name: "--name",
        description:
          "Name for the ACL. Must start with an alphanumeric character and contain only alphanumeric characters, underscores, and whitespace",
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description: "Delete an ACL from the specified service version",
    options: [
      autocloneOption,
      {
        name: "--name",
        description: "The name of the ACL to delete",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description: "Retrieve a single ACL by name for the version and service",
    options: [
      jsonOption,
      {
        name: "--name",
        description: "The name of the ACL",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List ACLs",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description: "Update an ACL for a particular service and version",
    options: [
      autocloneOption,
      {
        name: "--name",
        description: "The name of the ACL to update",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "The new name of the ACL",
        isRequired: true,
        args: {
          name: "new-name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
];

const serviceAclEntrySubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description: "Add an ACL entry to an ACL",
    options: [
      aclIdOption,
      {
        name: "--comment",
        description: "A freeform descriptive note",
        args: {
          name: "comment",
        },
      },
      {
        name: "--ip",
        description: "An IP address",
        args: {
          name: "ip",
        },
      },
      {
        name: "--negated",
        description: "Whether to negate the match",
      },
      serviceIdOption,
      serviceNameOption,
      {
        name: "--subnet",
        description:
          "Number of bits for the subnet mask applied to the IP address",
        args: {
          name: "subnet",
        },
      },
    ],
  },
  {
    name: ["delete", "remove"],
    description: "Delete an ACL entry from a specified ACL",
    options: [
      aclIdOption,
      {
        name: "--id",
        description: "Alphanumeric string identifying an ACL Entry",
        isRequired: true,
        args: {
          name: "id",
        },
      },
      serviceIdOption,
      serviceNameOption,
    ],
  },
  {
    name: ["describe", "get"],
    description: "Retrieve a single ACL entry",
    options: [
      aclIdOption,
      {
        name: "--id",
        description: "Alphanumeric string identifying an ACL Entry",
        isRequired: true,
        args: {
          name: "id",
        },
      },
      jsonOption,
      serviceIdOption,
      serviceNameOption,
    ],
  },
  {
    name: "list",
    description: "List ACLs",
    options: [
      aclIdOption,
      {
        name: "--direction",
        description: "Direction in which to sort results",
        args: {
          name: "direction",
          suggestions: ["ascend", "descend"],
        },
      },
      jsonOption,
      pageOption,
      perPageOption,
      serviceIdOption,
      serviceNameOption,
      {
        name: "--sort",
        description: "Field on which to sort",
        args: {
          name: "sort",
          default: "created",
        },
      },
    ],
  },
  {
    name: "update",
    description: "Update an ACL entry for a specified ACL",
    options: [
      aclIdOption,
      {
        name: "--comment",
        description: "A freeform descriptive note",
        args: {
          name: "comment",
        },
      },
      {
        name: "--file",
        description:
          "Batch update json passed as file path or content, e.g. $(< batch.json)",
        args: {
          name: "file",
          template: "filepaths",
        },
      },
      {
        name: "--id",
        description: "Alphanumeric string identifying an ACL Entry",
        args: {
          name: "id",
        },
      },
      {
        name: "--ip",
        description: "An IP address",
        args: {
          name: "ip",
        },
      },
      {
        name: "--negated",
        description: "Whether to negate the match",
      },
      serviceIdOption,
      serviceNameOption,
      {
        name: "--subnet",
        description:
          "Number of bits for the subnet mask applied to the IP address",
        args: {
          name: "subnet",
        },
      },
    ],
  },
];

const serviceAlertSubcommands: Fig.Subcommand[] = [
  {
    name: "create",
    description: "Create Alert",
    options: [
      {
        name: "--description",
        description:
          "Additional text that is included in the alert notification",
        isRequired: true,
        args: {
          name: "description",
        },
      },
      {
        name: "--dimensions",
        description: "Dimensions filters depending on the source type",
        isRepeatable: true,
        args: {
          name: "dimensions",
        },
      },
      {
        name: "--ignoreBelow",
        description:
          "IgnoreBelow is the threshold for the denominator value used in evaluations that calculate a rate or ratio. Usually used to filter out noise",
        args: {
          name: "ignoreBelow",
        },
      },
      {
        name: "--integrations",
        description:
          "Integrations are a list of integrations used to notify when alert fires",
        isRepeatable: true,
        args: {
          name: "integrations",
        },
      },
      jsonOption,
      {
        name: "--metric",
        description: "Metric name to alert on for a specific source",
        isRequired: true,
        args: {
          name: "metric",
        },
      },
      {
        name: "--name",
        description: "Name of the alert definition",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--period",
        description:
          "Period of time to evaluate whether the conditions have been met. The data is polled every minute",
        isRequired: true,
        args: {
          name: "period",
          suggestions: ["2m", "3m", "5m", "15m", "30m"],
        },
      },
      {
        name: "--service-id",
        description: "ServiceID of the definition",
        args: {
          name: "service-id",
        },
      },
      {
        name: "--source",
        description: "Source where the metric comes from",
        isRequired: true,
        args: {
          name: "source",
        },
      },
      {
        name: "--threshold",
        description: "Threshold used to alert",
        isRequired: true,
        args: {
          name: "threshold",
        },
      },
      {
        name: "--type",
        description: "Type of strategy to use to evaluate",
        isRequired: true,
        args: {
          name: "type",
          suggestions: [
            "above_threshold",
            "all_above_threshold",
            "below_threshold",
            "percent_absolute",
            "percent_decrease",
            "percent_increase",
          ],
        },
      },
    ],
  },
  {
    name: "delete",
    description: "Delete Alert",
    options: [
      {
        name: "--id",
        description: "Alphanumeric string identifying an Alert definition",
        isRequired: true,
        args: {
          name: "id",
        },
      },
      jsonOption,
    ],
  },
  {
    name: "describe",
    description: "Describe Alert",
    options: [
      {
        name: "--id",
        description: "Alphanumeric string identifying an Alert definition",
        isRequired: true,
        args: {
          name: "id",
        },
      },
      jsonOption,
    ],
  },
  {
    name: "history",
    description: "List history",
    options: [
      {
        name: "--after",
        description:
          "After filter history record that either started or ended after a specific date",
        args: {
          name: "after",
        },
      },
      {
        name: "--before",
        description:
          "Before filter history record that either started or ended before a specific date",
        args: {
          name: "before",
        },
      },
      {
        name: "--cursor",
        description:
          "Pagination cursor (Use 'next_cursor' value from list output)",
        args: {
          name: "cursor",
        },
      },
      {
        name: "--definition-id",
        description: "Unique identifier of the definition",
        args: {
          name: "definition-id",
        },
      },
      jsonOption,
      {
        name: "--limit",
        description: "Maximum number of items to list",
        args: {
          name: "limit",
        },
      },
      {
        name: "--order",
        description: "Sort by one of the following [asc, desc]",
        args: {
          name: "order",
        },
      },
      {
        name: "--service-id",
        description: "ServiceID of the definition",
        args: {
          name: "service-id",
        },
      },
      {
        name: "--sort",
        description: "Sort by one of the following [start]",
        args: {
          name: "sort",
        },
      },
      {
        name: "--status",
        description: "Status of the history record [active, resolved]",
        args: {
          name: "status",
        },
      },
    ],
  },
  {
    name: "list",
    description: "List Alerts",
    options: [
      {
        name: "--cursor",
        description:
          "Pagination cursor (Use 'next_cursor' value from list output)",
        args: {
          name: "cursor",
        },
      },
      jsonOption,
      {
        name: "--limit",
        description: "Maximum number of items to list",
        args: {
          name: "limit",
        },
      },
      {
        name: "--name",
        description: "Name of the definition",
        args: {
          name: "name",
        },
      },
      {
        name: "--order",
        description: "Sort by one of the following [asc, desc]",
        args: {
          name: "order",
        },
      },
      {
        name: "--service-id",
        description: "ServiceID of the definition",
        args: {
          name: "service-id",
        },
      },
      {
        name: "--sort",
        description:
          "Sort by one of the following [name, created_at, updated_at]",
        args: {
          name: "sort",
        },
      },
    ],
  },
  {
    name: "update",
    description: "Update Alert",
    options: [
      {
        name: "--description",
        description:
          "Additional text that is included in the alert notification",
        isRequired: true,
        args: {
          name: "description",
        },
      },
      {
        name: "--dimensions",
        description: "Dimensions filters depending on the source type",
        isRepeatable: true,
        args: {
          name: "dimensions",
        },
      },
      {
        name: "--id",
        description: "A unique identifier for a definition",
        isRequired: true,
        args: {
          name: "id",
        },
      },
      {
        name: "--ignoreBelow",
        description:
          "IgnoreBelow is the threshold for the denominator value used in evaluations that calculate a rate or ratio. Usually used to filter out noise",
        args: {
          name: "ignoreBelow",
        },
      },
      {
        name: "--integrations",
        description:
          "Integrations are a list of integrations used to notify when alert fires",
        isRepeatable: true,
        args: {
          name: "integrations",
        },
      },
      jsonOption,
      {
        name: "--metric",
        description: "Metric name to alert on for a specific source",
        isRequired: true,
        args: {
          name: "metric",
        },
      },
      {
        name: "--name",
        description: "Name of the alert definition",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--period",
        description:
          "Period of time to evaluate whether the conditions have been met. The data is polled every minute",
        isRequired: true,
        args: {
          name: "period",
          suggestions: ["2m", "3m", "5m", "15m", "30m"],
        },
      },
      {
        name: "--source",
        description: "Source where the metric comes from",
        isRequired: true,
        args: {
          name: "source",
        },
      },
      {
        name: "--threshold",
        description: "Threshold used to alert",
        isRequired: true,
        args: {
          name: "threshold",
        },
      },
      {
        name: "--type",
        description: "Type of strategy to use to evaluate",
        isRequired: true,
        args: {
          name: "type",
          suggestions: [
            "above_threshold",
            "all_above_threshold",
            "below_threshold",
            "percent_absolute",
            "percent_decrease",
            "percent_increase",
          ],
        },
      },
    ],
  },
];

const serviceBackendSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description: "Create a backend on a Fastly service version",
    options: [
      {
        name: "--address",
        description: "A hostname, IPv4, or IPv6 address for the backend",
        args: {
          name: "address",
        },
      },
      {
        name: "--auto-loadbalance",
        description:
          "Whether or not this backend should be automatically load balanced",
      },
      autocloneOption,
      {
        name: "--between-bytes-timeout",
        description: "How long to wait between bytes in milliseconds",
        args: {
          name: "between-bytes-timeout",
        },
      },
      commentOption,
      {
        name: "--connect-timeout",
        description: "How long to wait for a timeout in milliseconds",
        args: {
          name: "connect-timeout",
        },
      },
      {
        name: "--first-byte-timeout",
        description: "How long to wait for the first bytes in milliseconds",
        args: {
          name: "first-byte-timeout",
        },
      },
      {
        name: "--healthcheck",
        description: "The name of the healthcheck to use with this backend",
        args: {
          name: "healthcheck",
        },
      },
      {
        name: "--http-ka-time",
        description:
          "Configure how long to keep idle HTTP keepalive connections in the connection pool",
        args: {
          name: "http-ka-time",
        },
      },
      {
        name: "--iam-external-id",
        description:
          "If the backend is using IAM authentication and the IAM system policy requires a matching external identifier, it should match this value (your Fastly customer ID will be used if this is not set)",
        args: {
          name: "iam-external-id",
        },
      },
      {
        name: "--iam-product",
        description:
          "If the backend is using IAM authentication, the IAM signature will use this as the product element",
        args: {
          name: "iam-product",
        },
      },
      {
        name: "--iam-region",
        description:
          "If the backend is using IAM authentication, this region will be used for signing and access",
        args: {
          name: "iam-region",
        },
      },
      {
        name: "--iam-role",
        description:
          "If the backend is using IAM authentication, the fully qualified role string supplied by the storage vendor",
        args: {
          name: "iam-role",
        },
      },
      {
        name: "--iam-vendor",
        description:
          "A label that identifies the storage vendor. Providing a value enables IAM usage",
        args: {
          name: "iam-vendor",
        },
      },
      {
        name: "--max-conn",
        description: "Maximum number of connections",
        args: {
          name: "max-conn",
        },
      },
      {
        name: "--max-lifetime",
        description:
          "Maximum time from creation (in milliseconds) that a pooled HTTP keepalive connection will be eligible for reuse; 0 is treated as unlimited",
        args: {
          name: "max-lifetime",
        },
      },
      {
        name: "--max-tls-version",
        description:
          "Maximum allowed TLS version on SSL connections to this backend",
        args: {
          name: "max-tls-version",
        },
      },
      {
        name: "--max-use",
        description:
          "Maximum number of requests allowed over a single, pooled HTTP keepalive connection to this backend; 0 is treated as unlimited",
        args: {
          name: "max-use",
        },
      },
      {
        name: "--min-tls-version",
        description:
          "Minimum allowed TLS version on SSL connections to this backend",
        args: {
          name: "min-tls-version",
        },
      },
      {
        name: ["-n", "--name"],
        description: "Backend name",
        args: {
          name: "name",
        },
      },
      {
        name: "--no-ssl-check-cert",
        description: "Skip checking SSL certs",
      },
      {
        name: "--override-host",
        description: "The hostname to override the Host header",
        args: {
          name: "override-host",
        },
      },
      {
        name: "--port",
        description: "Port number of the address",
        args: {
          name: "port",
        },
      },
      {
        name: "--prefer-ipv6",
        description: "Prefer IPv6 connections [true, false]",
        args: {
          name: "prefer-ipv6",
        },
      },
      {
        name: "--request-condition",
        description:
          "Condition, which if met, will select this backend during a request",
        args: {
          name: "request-condition",
        },
      },
      serviceIdOption,
      serviceNameOption,
      {
        name: "--shield",
        description:
          "The shield POP designated to reduce inbound load on this origin by serving the cached data to the rest of the network",
        args: {
          name: "shield",
        },
      },
      {
        name: "--ssl-ca-cert",
        description: "CA certificate attached to origin",
        args: {
          name: "ssl-ca-cert",
        },
      },
      {
        name: "--ssl-cert-hostname",
        description:
          "Overrides ssl_hostname, but only for cert verification. Does not affect SNI at all",
        args: {
          name: "ssl-cert-hostname",
        },
      },
      {
        name: "--ssl-check-cert",
        description: "Be strict on checking SSL certs",
      },
      {
        name: "--ssl-ciphers",
        description:
          "List of OpenSSL ciphers (https://www.openssl.org/docs/man1.0.2/man1/ciphers)",
        args: {
          name: "ssl-ciphers",
        },
      },
      {
        name: "--ssl-client-cert",
        description: "Client certificate attached to origin",
        args: {
          name: "ssl-client-cert",
        },
      },
      {
        name: "--ssl-client-key",
        description: "Client key attached to origin",
        args: {
          name: "ssl-client-key",
        },
      },
      {
        name: "--ssl-sni-hostname",
        description:
          "Overrides ssl_hostname, but only for SNI in the handshake. Does not affect cert validation at all",
        args: {
          name: "ssl-sni-hostname",
        },
      },
      {
        name: "--tcp-ka-enabled",
        description: "Enable TCP keepalive probes [true, false]",
        args: {
          name: "tcp-ka-enabled",
        },
      },
      {
        name: "--tcp-ka-interval",
        description:
          "Configure how long to wait between sending each TCP keepalive probe",
        args: {
          name: "tcp-ka-interval",
        },
      },
      {
        name: "--tcp-ka-probes",
        description:
          "Configure how many unacknowledged TCP keepalive probes to send before considering the connection dead",
        args: {
          name: "tcp-ka-probes",
        },
      },
      {
        name: "--tcp-ka-time",
        description:
          "Configure how long to wait after the last sent data before sending TCP keepalive probes",
        args: {
          name: "tcp-ka-time",
        },
      },
      {
        name: "--use-ssl",
        description: "Whether or not to use SSL to reach the backend",
      },
      versionOption,
      {
        name: "--weight",
        description: "Weight used to load balance this backend against others",
        args: {
          name: "weight",
        },
      },
    ],
  },
  {
    name: ["delete", "remove"],
    description: "Delete a backend on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "Backend name",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about a backend on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "Name of backend",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List backends on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description: "Update a backend on a Fastly service version",
    options: [
      {
        name: "--address",
        description: "A hostname, IPv4, or IPv6 address for the backend",
        args: {
          name: "address",
        },
      },
      {
        name: "--auto-loadbalance",
        description:
          "Whether or not this backend should be automatically load balanced",
      },
      autocloneOption,
      {
        name: "--between-bytes-timeout",
        description: "How long to wait between bytes in milliseconds",
        args: {
          name: "between-bytes-timeout",
        },
      },
      commentOption,
      {
        name: "--connect-timeout",
        description: "How long to wait for a timeout in milliseconds",
        args: {
          name: "connect-timeout",
        },
      },
      {
        name: "--first-byte-timeout",
        description: "How long to wait for the first bytes in milliseconds",
        args: {
          name: "first-byte-timeout",
        },
      },
      {
        name: "--healthcheck",
        description: "The name of the healthcheck to use with this backend",
        args: {
          name: "healthcheck",
        },
      },
      {
        name: "--http-ka-time",
        description:
          "Configure how long to keep idle HTTP keepalive connections in the connection pool",
        args: {
          name: "http-ka-time",
        },
      },
      {
        name: "--iam-external-id",
        description:
          "If the backend is using IAM authentication and the IAM system policy requires a matching external identifier, it should match this value (your Fastly customer ID will be used if this is not set)",
        args: {
          name: "iam-external-id",
        },
      },
      {
        name: "--iam-product",
        description:
          "If the backend is using IAM authentication, the IAM signature will use this as the product element",
        args: {
          name: "iam-product",
        },
      },
      {
        name: "--iam-region",
        description:
          "If the backend is using IAM authentication, this region will be used for signing and access",
        args: {
          name: "iam-region",
        },
      },
      {
        name: "--iam-role",
        description:
          "If the backend is using IAM authentication, the fully qualified role string supplied by the storage vendor",
        args: {
          name: "iam-role",
        },
      },
      {
        name: "--iam-vendor",
        description:
          "A label that identifies the storage vendor. Providing a value enables IAM usage",
        args: {
          name: "iam-vendor",
        },
      },
      {
        name: "--max-conn",
        description: "Maximum number of connections",
        args: {
          name: "max-conn",
        },
      },
      {
        name: "--max-lifetime",
        description:
          "Maximum time from creation (in milliseconds) that a pooled HTTP keepalive connection will be eligible for reuse; 0 is treated as unlimited",
        args: {
          name: "max-lifetime",
        },
      },
      {
        name: "--max-tls-version",
        description:
          "Maximum allowed TLS version on SSL connections to this backend",
        args: {
          name: "max-tls-version",
        },
      },
      {
        name: "--max-use",
        description:
          "Maximum number of requests allowed over a single, pooled HTTP keepalive connection to this backend; 0 is treated as unlimited",
        args: {
          name: "max-use",
        },
      },
      {
        name: "--min-tls-version",
        description:
          "Minimum allowed TLS version on SSL connections to this backend",
        args: {
          name: "min-tls-version",
        },
      },
      {
        name: ["-n", "--name"],
        description: "Backend name",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New backend name",
        args: {
          name: "new-name",
        },
      },
      {
        name: "--no-ssl-check-cert",
        description: "Skip checking SSL certs",
      },
      {
        name: "--override-host",
        description: "The hostname to override the Host header",
        args: {
          name: "override-host",
        },
      },
      {
        name: "--port",
        description: "Port number of the address",
        args: {
          name: "port",
        },
      },
      {
        name: "--prefer-ipv6",
        description: "Prefer IPv6 connections",
        args: {
          name: "prefer-ipv6",
        },
      },
      {
        name: "--request-condition",
        description:
          "Condition, which if met, will select this backend during a request",
        args: {
          name: "request-condition",
        },
      },
      serviceIdOption,
      serviceNameOption,
      {
        name: "--shield",
        description:
          "The shield POP designated to reduce inbound load on this origin by serving the cached data to the rest of the network",
        args: {
          name: "shield",
        },
      },
      {
        name: "--ssl-ca-cert",
        description: "CA certificate attached to origin",
        args: {
          name: "ssl-ca-cert",
        },
      },
      {
        name: "--ssl-cert-hostname",
        description:
          "Overrides ssl_hostname, but only for cert verification. Does not affect SNI at all",
        args: {
          name: "ssl-cert-hostname",
        },
      },
      {
        name: "--ssl-check-cert",
        description: "Be strict on checking SSL certs",
      },
      {
        name: "--ssl-ciphers",
        description:
          "List of OpenSSL ciphers (https://www.openssl.org/docs/man1.0.2/man1/ciphers)",
        args: {
          name: "ssl-ciphers",
        },
      },
      {
        name: "--ssl-client-cert",
        description: "Client certificate attached to origin",
        args: {
          name: "ssl-client-cert",
        },
      },
      {
        name: "--ssl-client-key",
        description: "Client key attached to origin",
        args: {
          name: "ssl-client-key",
        },
      },
      {
        name: "--ssl-sni-hostname",
        description:
          "Overrides ssl_hostname, but only for SNI in the handshake. Does not affect cert validation at all",
        args: {
          name: "ssl-sni-hostname",
        },
      },
      {
        name: "--tcp-ka-enabled",
        description: "Enable TCP keepalive probes [true, false]",
        args: {
          name: "tcp-ka-enabled",
        },
      },
      {
        name: "--tcp-ka-interval",
        description:
          "Configure how long to wait between sending each TCP keepalive probe",
        args: {
          name: "tcp-ka-interval",
        },
      },
      {
        name: "--tcp-ka-probes",
        description:
          "Configure how many unacknowledged TCP keepalive probes to send before considering the connection dead",
        args: {
          name: "tcp-ka-probes",
        },
      },
      {
        name: "--tcp-ka-time",
        description:
          "Configure how long to wait after the last sent data before sending TCP keepalive probes",
        args: {
          name: "tcp-ka-time",
        },
      },
      {
        name: "--use-ssl",
        description: "Whether or not to use SSL to reach the backend",
      },
      versionOption,
      {
        name: "--weight",
        description: "Weight used to load balance this backend against others",
        args: {
          name: "weight",
        },
      },
    ],
  },
];

const serviceDictionarySubcommands: Fig.Subcommand[] = [
  {
    name: "create",
    description: "Create a Fastly edge dictionary on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "Name of Dictionary",
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
      {
        name: "--write-only",
        description: "Whether to mark this dictionary as write-only",
      },
    ],
  },
  {
    name: "delete",
    description:
      "Delete a Fastly edge dictionary from a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "Name of Dictionary",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description: "Show detailed information about a Fastly edge dictionary",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "Name of Dictionary",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List all dictionaries on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description: "Update name of dictionary on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "Old name of Dictionary",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of Dictionary",
        args: {
          name: "new-name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
      {
        name: "--write-only",
        description:
          "Whether to mark this dictionary as write-only. Can be true or false (defaults to false)",
        args: {
          name: "write-only",
        },
      },
    ],
  },
];

const serviceDictionaryEntrySubcommands: Fig.Subcommand[] = [
  {
    name: "create",
    description: "Create a new item on a Fastly edge dictionary",
    options: [
      dictionaryIdOption,
      {
        name: "--key",
        description: "Dictionary item key",
        isRequired: true,
        args: {
          name: "key",
        },
      },
      serviceIdOption,
      serviceNameOption,
      {
        name: "--value",
        description: "Dictionary item value",
        isRequired: true,
        args: {
          name: "value",
        },
      },
    ],
  },
  {
    name: "delete",
    description: "Delete an item from a Fastly edge dictionary",
    options: [
      dictionaryIdOption,
      {
        name: "--key",
        description: "Dictionary item key",
        isRequired: true,
        args: {
          name: "key",
        },
      },
      serviceIdOption,
      serviceNameOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about a Fastly edge dictionary item",
    options: [
      dictionaryIdOption,
      jsonOption,
      {
        name: "--key",
        description: "Dictionary item key",
        isRequired: true,
        args: {
          name: "key",
        },
      },
      serviceIdOption,
      serviceNameOption,
    ],
  },
  {
    name: "list",
    description: "List items in a Fastly edge dictionary",
    options: [
      dictionaryIdOption,
      {
        name: "--direction",
        description: "Direction in which to sort results",
        args: {
          name: "direction",
          suggestions: ["ascend", "descend"],
        },
      },
      jsonOption,
      pageOption,
      perPageOption,
      serviceIdOption,
      serviceNameOption,
      {
        name: "--sort",
        description: "Field on which to sort",
        args: {
          name: "sort",
          default: "created",
        },
      },
    ],
  },
  {
    name: "update",
    description: "Update or insert an item on a Fastly edge dictionary",
    options: [
      dictionaryIdOption,
      {
        name: "--file",
        description: "Batch update json file",
        args: {
          name: "file",
          template: "filepaths",
        },
      },
      {
        name: "--key",
        description: "Dictionary item key",
        args: {
          name: "key",
        },
      },
      serviceIdOption,
      serviceNameOption,
      {
        name: "--value",
        description: "Dictionary item value",
        args: {
          name: "value",
        },
      },
    ],
  },
];

const serviceHealthcheckSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description: "Create a healthcheck on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: "--check-interval",
        description: "How often to run the healthcheck in milliseconds",
        args: {
          name: "check-interval",
        },
      },
      commentOption,
      {
        name: "--expected-response",
        description: "The status code expected from the host",
        args: {
          name: "expected-response",
        },
      },
      {
        name: "--host",
        description: "Which host to check",
        args: {
          name: "host",
        },
      },
      {
        name: "--http-version",
        description: "Whether to use version 1.0 or 1.1 HTTP",
        args: {
          name: "http-version",
        },
      },
      {
        name: "--initial",
        description:
          "When loading a config, the initial number of probes to be seen as OK",
        args: {
          name: "initial",
        },
      },
      {
        name: "--method",
        description: "Which HTTP method to use",
        args: {
          name: "method",
        },
      },
      {
        name: ["-n", "--name"],
        description: "Healthcheck name",
        args: {
          name: "name",
        },
      },
      {
        name: "--path",
        description: "The path to check",
        args: {
          name: "path",
        },
      },
      serviceIdOption,
      serviceNameOption,
      {
        name: "--threshold",
        description:
          "How many healthchecks must succeed to be considered healthy",
        args: {
          name: "threshold",
        },
      },
      {
        name: "--timeout",
        description: "Timeout in milliseconds",
        args: {
          name: "timeout",
        },
      },
      versionOption,
      {
        name: "--window",
        description:
          "The number of most recent healthcheck queries to keep for this healthcheck",
        args: {
          name: "window",
        },
      },
    ],
  },
  {
    name: ["delete", "remove"],
    description: "Delete a healthcheck on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "Healthcheck name",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about a healthcheck on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "Name of healthcheck",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List healthchecks on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description: "Update a healthcheck on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: "--check-interval",
        description: "How often to run the healthcheck in milliseconds",
        args: {
          name: "check-interval",
        },
      },
      commentOption,
      {
        name: "--expected-response",
        description: "The status code expected from the host",
        args: {
          name: "expected-response",
        },
      },
      {
        name: "--host",
        description: "Which host to check",
        args: {
          name: "host",
        },
      },
      {
        name: "--http-version",
        description: "Whether to use version 1.0 or 1.1 HTTP",
        args: {
          name: "http-version",
        },
      },
      {
        name: "--initial",
        description:
          "When loading a config, the initial number of probes to be seen as OK",
        args: {
          name: "initial",
        },
      },
      {
        name: "--method",
        description: "Which HTTP method to use",
        args: {
          name: "method",
        },
      },
      {
        name: ["-n", "--name"],
        description: "Healthcheck name",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "Healthcheck name",
        args: {
          name: "new-name",
        },
      },
      {
        name: "--path",
        description: "The path to check",
        args: {
          name: "path",
        },
      },
      serviceIdOption,
      serviceNameOption,
      {
        name: "--threshold",
        description:
          "How many healthchecks must succeed to be considered healthy",
        args: {
          name: "threshold",
        },
      },
      {
        name: "--timeout",
        description: "Timeout in milliseconds",
        args: {
          name: "timeout",
        },
      },
      versionOption,
      {
        name: "--window",
        description:
          "The number of most recent healthcheck queries to keep for this healthcheck",
        args: {
          name: "window",
        },
      },
    ],
  },
];

const serviceImageoptimizerSubcommands: Fig.Subcommand[] = [
  {
    name: "get",
    description: "Retrieve the current Image Optimizer default settings",
    options: [
      jsonOption,
      {
        name: ["-s", "--service-id"],
        description:
          "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
        isRequired: true,
        args: {
          name: "service-id",
        },
      },
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "update",
    description: "Update Image Optimizer default settings for a service",
    options: [
      {
        name: "--allow-video",
        description:
          "Enables GIF to MP4 transformations on this service [true, false]",
        args: {
          name: "allow-video",
        },
      },
      {
        name: "--jpeg-quality",
        description: "The default quality to use with JPEG output (1-100)",
        args: {
          name: "jpeg-quality",
        },
      },
      {
        name: "--jpeg-type",
        description:
          "The default type of JPEG output to use (auto, baseline, progressive)",
        args: {
          name: "jpeg-type",
        },
      },
      jsonOption,
      {
        name: "--resize-filter",
        description:
          "The type of filter to use while resizing an image (lanczos3, lanczos2, bicubic, bilinear, nearest)",
        args: {
          name: "resize-filter",
        },
      },
      {
        name: ["-s", "--service-id"],
        description:
          "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
        isRequired: true,
        args: {
          name: "service-id",
        },
      },
      serviceNameOption,
      {
        name: "--upscale",
        description:
          "Whether or not we should allow output images to render at sizes larger than input [true, false]",
        args: {
          name: "upscale",
        },
      },
      versionOption,
      {
        name: "--webp",
        description:
          "Controls whether or not to default to WebP output when the client supports it [true, false]",
        args: {
          name: "webp",
        },
      },
      {
        name: "--webp-quality",
        description: "The default quality to use with WebP output (1-100)",
        args: {
          name: "webp-quality",
        },
      },
    ],
  },
];

const serviceLoggingAzureblobSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description:
      "Create an Azure Blob Storage logging endpoint on a Fastly service version",
    options: [
      {
        name: "--account-name",
        description:
          "The unique Azure Blob Storage namespace in which your data objects are stored",
        args: {
          name: "account-name",
        },
      },
      autocloneOption,
      compressionCodecOption,
      {
        name: "--container",
        description:
          "The name of the Azure Blob Storage container in which to store logs",
        args: {
          name: "container",
        },
      },
      fileMaxBytesOption,
      formatOption,
      formatVersionOption,
      gzipLevelOption,
      messageTypeOption,
      {
        name: ["-n", "--name"],
        description:
          "The name of the Azure Blob Storage logging object. Used as a primary key for API access",
        args: {
          name: "name",
        },
      },
      pathOption,
      periodOption,
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Azure Blob Storage. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      publicKeyOption,
      responseConditionOption,
      {
        name: "--sas-token",
        description:
          "The Azure shared access signature providing write access to the blob service objects. Be sure to update your token before it expires or the logging functionality will not work",
        args: {
          name: "sas-token",
        },
      },
      serviceIdOption,
      serviceNameOption,
      timestampFormatOption,
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description:
      "Delete an Azure Blob Storage logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Azure Blob Storage logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about an Azure Blob Storage logging endpoint on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Azure Blob Storage logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description:
      "List Azure Blob Storage logging endpoints on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description:
      "Update an Azure Blob Storage logging endpoint on a Fastly service version",
    options: [
      {
        name: "--account-name",
        description:
          "The unique Azure Blob Storage namespace in which your data objects are stored",
        args: {
          name: "account-name",
        },
      },
      autocloneOption,
      compressionCodecOption,
      {
        name: "--container",
        description:
          "The name of the Azure Blob Storage container in which to store logs",
        args: {
          name: "container",
        },
      },
      fileMaxBytesOption,
      formatOption,
      formatVersionOption,
      gzipLevelOption,
      messageTypeOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Azure Blob Storage logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of the Azure Blob Storage logging object",
        args: {
          name: "new-name",
        },
      },
      pathOption,
      periodOption,
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Azure Blob Storage. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      publicKeyOption,
      responseConditionOption,
      {
        name: "--sas-token",
        description:
          "The Azure shared access signature providing write access to the blob service objects. Be sure to update your token before it expires or the logging functionality will not work",
        args: {
          name: "sas-token",
        },
      },
      serviceIdOption,
      serviceNameOption,
      timestampFormatOption,
      versionOption,
    ],
  },
];

const serviceLoggingBigquerySubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description:
      "Create a BigQuery logging endpoint on a Fastly service version",
    options: [
      accountNameOption,
      autocloneOption,
      {
        name: "--dataset",
        description: "Your BigQuery dataset",
        args: {
          name: "dataset",
        },
      },
      formatOption,
      formatVersionOption,
      {
        name: ["-n", "--name"],
        description:
          "The name of the BigQuery logging object. Used as a primary key for API access",
        args: {
          name: "name",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to BigQuery. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      {
        name: "--project-id",
        description: "Your Google Cloud Platform project ID",
        args: {
          name: "project-id",
        },
      },
      responseConditionOption,
      secretKeyOption,
      serviceIdOption,
      serviceNameOption,
      {
        name: "--table",
        description: "Your BigQuery table",
        args: {
          name: "table",
        },
      },
      {
        name: "--template-suffix",
        description: "BigQuery table name suffix template",
        args: {
          name: "template-suffix",
        },
      },
      userOption,
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description:
      "Delete a BigQuery logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "The name of the BigQuery logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about a BigQuery logging endpoint on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "The name of the BigQuery logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List BigQuery endpoints on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description:
      "Update a BigQuery logging endpoint on a Fastly service version",
    options: [
      accountNameOption,
      autocloneOption,
      {
        name: "--dataset",
        description: "Your BigQuery dataset",
        args: {
          name: "dataset",
        },
      },
      formatOption,
      formatVersionOption,
      {
        name: ["-n", "--name"],
        description: "The name of the BigQuery logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of the BigQuery logging object",
        args: {
          name: "new-name",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to BigQuery. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      {
        name: "--project-id",
        description: "Your Google Cloud Platform project ID",
        args: {
          name: "project-id",
        },
      },
      responseConditionOption,
      secretKeyOption,
      serviceIdOption,
      serviceNameOption,
      {
        name: "--table",
        description: "Your BigQuery table",
        args: {
          name: "table",
        },
      },
      {
        name: "--template-suffix",
        description: "BigQuery table name suffix template",
        args: {
          name: "template-suffix",
        },
      },
      userOption,
      versionOption,
    ],
  },
];

const serviceLoggingCloudfilesSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description:
      "Create a Cloudfiles logging endpoint on a Fastly service version",
    options: [
      {
        name: "--access-key",
        description: "Your Cloudfile account access key",
        args: {
          name: "access-key",
        },
      },
      autocloneOption,
      {
        name: "--bucket",
        description: "The name of your Cloudfiles container",
        args: {
          name: "bucket",
        },
      },
      compressionCodecOption,
      formatOption,
      formatVersionOption,
      gzipLevelOption,
      messageTypeOption,
      {
        name: ["-n", "--name"],
        description:
          "The name of the Cloudfiles logging object. Used as a primary key for API access",
        args: {
          name: "name",
        },
      },
      pathOption,
      periodOption,
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Cloud Files. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      publicKeyOption,
      {
        name: "--region",
        description:
          "The region where logs are received and stored by Cloud Files. One of: DFW-Dallas, ORD-Chicago, IAD-Northern Virginia, LON-London, SYD-Sydney, HKG-Hong Kong",
        args: {
          name: "region",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      timestampFormatOption,
      {
        name: "--user",
        description: "The username for your Cloudfile account",
        args: {
          name: "user",
        },
      },
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description:
      "Delete a Cloudfiles logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Cloudfiles logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about a Cloudfiles logging endpoint on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Cloudfiles logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List Cloudfiles endpoints on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description:
      "Update a Cloudfiles logging endpoint on a Fastly service version",
    options: [
      {
        name: "--access-key",
        description: "Your Cloudfile account access key",
        args: {
          name: "access-key",
        },
      },
      autocloneOption,
      {
        name: "--bucket",
        description: "The name of your Cloudfiles container",
        args: {
          name: "bucket",
        },
      },
      compressionCodecOption,
      formatOption,
      formatVersionOption,
      gzipLevelOption,
      messageTypeOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Cloudfiles logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of the Cloudfiles logging object",
        args: {
          name: "new-name",
        },
      },
      pathOption,
      periodOption,
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Cloud Files. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      publicKeyOption,
      {
        name: "--region",
        description:
          "The region where logs are received and stored by Cloud Files. One of: DFW-Dallas, ORD-Chicago, IAD-Northern Virginia, LON-London, SYD-Sydney, HKG-Hong Kong",
        args: {
          name: "region",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      timestampFormatOption,
      {
        name: "--user",
        description: "The username for your Cloudfile account",
        args: {
          name: "user",
        },
      },
      versionOption,
    ],
  },
];

const serviceLoggingDatadogSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description:
      "Create a Datadog logging endpoint on a Fastly service version",
    options: [
      {
        name: "--auth-token",
        description: "The API key from your Datadog account",
        args: {
          name: "auth-token",
        },
      },
      autocloneOption,
      formatOption,
      formatVersionOption,
      {
        name: ["-n", "--name"],
        description:
          "The name of the Datadog logging object. Used as a primary key for API access",
        args: {
          name: "name",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Datadog. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      {
        name: "--region",
        description:
          "The region where logs are received and stored by Datadog. One of US, US3, US5, or EU. Defaults to US if undefined",
        args: {
          name: "region",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description:
      "Delete a Datadog logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Datadog logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about a Datadog logging endpoint on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Datadog logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List Datadog endpoints on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description:
      "Update a Datadog logging endpoint on a Fastly service version",
    options: [
      {
        name: "--auth-token",
        description: "The API key from your Datadog account",
        args: {
          name: "auth-token",
        },
      },
      autocloneOption,
      formatOption,
      formatVersionOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Datadog logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of the Datadog logging object",
        args: {
          name: "new-name",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Datadog. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      {
        name: "--region",
        description:
          "The region where logs are received and stored by Datadog. One of US, US3, US5, or EU. Defaults to US if undefined",
        args: {
          name: "region",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
];

const serviceLoggingDigitaloceanSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description:
      "Create a DigitalOcean Spaces logging endpoint on a Fastly service version",
    options: [
      {
        name: "--access-key",
        description: "Your DigitalOcean Spaces account access key",
        args: {
          name: "access-key",
        },
      },
      autocloneOption,
      {
        name: "--bucket",
        description: "The name of the DigitalOcean Space",
        args: {
          name: "bucket",
        },
      },
      compressionCodecOption,
      {
        name: "--domain",
        description:
          "The domain of the DigitalOcean Spaces endpoint (default 'nyc3.digitaloceanspaces.com')",
        args: {
          name: "domain",
        },
      },
      formatOption,
      formatVersionOption,
      gzipLevelOption,
      messageTypeOption,
      {
        name: ["-n", "--name"],
        description:
          "The name of the DigitalOcean Spaces logging object. Used as a primary key for API access",
        args: {
          name: "name",
        },
      },
      pathOption,
      periodOption,
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to DigitalOcean Spaces. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      publicKeyOption,
      responseConditionOption,
      {
        name: "--secret-key",
        description: "Your DigitalOcean Spaces account secret key",
        args: {
          name: "secret-key",
        },
      },
      serviceIdOption,
      serviceNameOption,
      timestampFormatOption,
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description:
      "Delete a DigitalOcean Spaces logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "The name of the DigitalOcean Spaces logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about a DigitalOcean Spaces logging endpoint on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "The name of the DigitalOcean Spaces logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description:
      "List DigitalOcean Spaces logging endpoints on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description:
      "Update a DigitalOcean Spaces logging endpoint on a Fastly service version",
    options: [
      {
        name: "--access-key",
        description: "Your DigitalOcean Spaces account access key",
        args: {
          name: "access-key",
        },
      },
      autocloneOption,
      {
        name: "--bucket",
        description: "The name of the DigitalOcean Space",
        args: {
          name: "bucket",
        },
      },
      compressionCodecOption,
      {
        name: "--domain",
        description:
          "The domain of the DigitalOcean Spaces endpoint (default 'nyc3.digitaloceanspaces.com')",
        args: {
          name: "domain",
        },
      },
      formatOption,
      formatVersionOption,
      gzipLevelOption,
      messageTypeOption,
      {
        name: ["-n", "--name"],
        description: "The name of the DigitalOcean Spaces logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of the DigitalOcean Spaces logging object",
        args: {
          name: "new-name",
        },
      },
      pathOption,
      periodOption,
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to DigitalOcean Spaces. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      publicKeyOption,
      responseConditionOption,
      {
        name: "--secret-key",
        description: "Your DigitalOcean Spaces account secret key",
        args: {
          name: "secret-key",
        },
      },
      serviceIdOption,
      serviceNameOption,
      timestampFormatOption,
      versionOption,
    ],
  },
];

const serviceLoggingElasticsearchSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description:
      "Create an Elasticsearch logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      formatOption,
      formatVersionOption,
      {
        name: "--index",
        description:
          "The name of the Elasticsearch index to send documents (logs) to. The index must follow the Elasticsearch index format rules (https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html). We support strftime (http://man7.org/linux/man-pages/man3/strftime.3.html) interpolated variables inside braces prefixed with a pound symbol. For example, #{%F} will interpolate as YYYY-MM-DD with today's date",
        args: {
          name: "index",
        },
      },
      {
        name: ["-n", "--name"],
        description:
          "The name of the Elasticsearch logging object. Used as a primary key for API access",
        args: {
          name: "name",
        },
      },
      {
        name: "--pipeline",
        description:
          "The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing. For example my_pipeline_id. Learn more about creating a pipeline in the Elasticsearch docs (https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html)",
        args: {
          name: "pipeline",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Elasticsearch. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      requestMaxBytesOption,
      requestMaxEntriesOption,
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      tlsCaCertOption,
      tlsClientCertOption,
      tlsClientKeyOption,
      tlsHostnameOption,
      {
        name: "--url",
        description: "The URL to stream logs to. Must use HTTPS",
        args: {
          name: "url",
        },
      },
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description:
      "Delete an Elasticsearch logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Elasticsearch logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about an Elasticsearch logging endpoint on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Elasticsearch logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List Elasticsearch endpoints on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description:
      "Update an Elasticsearch logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      formatOption,
      formatVersionOption,
      {
        name: "--index",
        description:
          "The name of the Elasticsearch index to send documents (logs) to. The index must follow the Elasticsearch index format rules (https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html). We support strftime (http://man7.org/linux/man-pages/man3/strftime.3.html) interpolated variables inside braces prefixed with a pound symbol. For example, #{%F} will interpolate as YYYY-MM-DD with today's date",
        args: {
          name: "index",
        },
      },
      {
        name: ["-n", "--name"],
        description: "The name of the Elasticsearch logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of the Elasticsearch logging object",
        args: {
          name: "new-name",
        },
      },
      {
        name: "--pipeline",
        description:
          "The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing. For example my_pipeline_id. Learn more about creating a pipeline in the Elasticsearch docs (https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html)",
        args: {
          name: "pipeline",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Elasticsearch. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      requestMaxBytesOption,
      requestMaxEntriesOption,
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      tlsCaCertOption,
      tlsClientCertOption,
      tlsClientKeyOption,
      tlsHostnameOption,
      {
        name: "--url",
        description: "The URL to stream logs to. Must use HTTPS",
        args: {
          name: "url",
        },
      },
      versionOption,
    ],
  },
];

const serviceLoggingFtpSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description: "Create an FTP logging endpoint on a Fastly service version",
    options: [
      {
        name: "--address",
        description: "An hostname or IPv4 address",
        args: {
          name: "address",
        },
      },
      autocloneOption,
      compressionCodecOption,
      formatOption,
      formatVersionOption,
      gzipLevelOption,
      {
        name: ["-n", "--name"],
        description:
          "The name of the FTP logging object. Used as a primary key for API access",
        args: {
          name: "name",
        },
      },
      {
        name: "--password",
        description:
          "The password for the server (for anonymous use an email address)",
        args: {
          name: "password",
        },
      },
      {
        name: "--path",
        description:
          "The path to upload log files to. If the path ends in / then it is treated as a directory",
        args: {
          name: "path",
        },
      },
      periodOption,
      placementOption,
      portOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to FTP. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      timestampFormatOption,
      {
        name: "--user",
        description: "The username for the server (can be anonymous)",
        args: {
          name: "user",
        },
      },
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description: "Delete an FTP logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "The name of the FTP logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about an FTP logging endpoint on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "The name of the FTP logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List FTP endpoints on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description: "Update an FTP logging endpoint on a Fastly service version",
    options: [
      {
        name: "--address",
        description: "An hostname or IPv4 address",
        args: {
          name: "address",
        },
      },
      autocloneOption,
      compressionCodecOption,
      formatOption,
      formatVersionOption,
      gzipLevelOption,
      {
        name: ["-n", "--name"],
        description: "The name of the FTP logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of the FTP logging object",
        args: {
          name: "new-name",
        },
      },
      {
        name: "--password",
        description:
          "The password for the server (for anonymous use an email address)",
        args: {
          name: "password",
        },
      },
      {
        name: "--path",
        description:
          "The path to upload log files to. If the path ends in / then it is treated as a directory",
        args: {
          name: "path",
        },
      },
      periodOption,
      placementOption,
      portOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to FTP. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      publicKeyOption,
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      timestampFormatOption,
      {
        name: "--username",
        description: "The username for the server (can be anonymous)",
        args: {
          name: "username",
        },
      },
      versionOption,
    ],
  },
];

const serviceLoggingGcsSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description: "Create a GCS logging endpoint on a Fastly service version",
    options: [
      accountNameOption,
      autocloneOption,
      {
        name: "--bucket",
        description: "The bucket of the GCS bucket",
        args: {
          name: "bucket",
        },
      },
      compressionCodecOption,
      formatOption,
      formatVersionOption,
      gzipLevelOption,
      messageTypeOption,
      {
        name: ["-n", "--name"],
        description:
          "The name of the GCS logging object. Used as a primary key for API access",
        args: {
          name: "name",
        },
      },
      pathOption,
      periodOption,
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to GCS. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      {
        name: "--project-id",
        description: "The google project ID",
        args: {
          name: "project-id",
        },
      },
      publicKeyOption,
      responseConditionOption,
      {
        name: "--secret-key",
        description:
          "Your GCS account secret key. The private_key field in your service account authentication JSON",
        args: {
          name: "secret-key",
        },
      },
      serviceIdOption,
      serviceNameOption,
      timestampFormatOption,
      {
        name: "--user",
        description:
          "Your GCS service account email address. The client_email field in your service account authentication JSON",
        args: {
          name: "user",
        },
      },
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description: "Delete a GCS logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "The name of the GCS logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about a GCS logging endpoint on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "The name of the GCS logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List GCS endpoints on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description: "Update a GCS logging endpoint on a Fastly service version",
    options: [
      accountNameOption,
      autocloneOption,
      {
        name: "--bucket",
        description: "The bucket of the GCS bucket",
        args: {
          name: "bucket",
        },
      },
      compressionCodecOption,
      formatOption,
      formatVersionOption,
      gzipLevelOption,
      messageTypeOption,
      {
        name: ["-n", "--name"],
        description: "The name of the GCS logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of the GCS logging object",
        args: {
          name: "new-name",
        },
      },
      {
        name: "--path",
        description: "The path to upload logs to (default '/')",
        args: {
          name: "path",
        },
      },
      periodOption,
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to GCS. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      {
        name: "--project-id",
        description: "The google project ID",
        args: {
          name: "project-id",
        },
      },
      publicKeyOption,
      responseConditionOption,
      {
        name: "--secret-key",
        description:
          "Your GCS account secret key. The private_key field in your service account authentication JSON",
        args: {
          name: "secret-key",
        },
      },
      serviceIdOption,
      serviceNameOption,
      timestampFormatOption,
      {
        name: "--user",
        description:
          "Your GCS service account email address. The client_email field in your service account authentication JSON",
        args: {
          name: "user",
        },
      },
      versionOption,
    ],
  },
];

const serviceLoggingGooglepubsubSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description:
      "Create a Google Cloud Pub/Sub logging endpoint on a Fastly service version",
    options: [
      accountNameOption,
      autocloneOption,
      formatOption,
      formatVersionOption,
      {
        name: ["-n", "--name"],
        description:
          "The name of the Google Cloud Pub/Sub logging object. Used as a primary key for API access",
        args: {
          name: "name",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Google Cloud Pub/Sub. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      {
        name: "--project-id",
        description: "The ID of your Google Cloud Platform project",
        args: {
          name: "project-id",
        },
      },
      responseConditionOption,
      secretKeyOption,
      serviceIdOption,
      serviceNameOption,
      {
        name: "--topic",
        description:
          "The Google Cloud Pub/Sub topic to which logs will be published",
        args: {
          name: "topic",
        },
      },
      userOption,
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description:
      "Delete a Google Cloud Pub/Sub logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Google Cloud Pub/Sub logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about a Google Cloud Pub/Sub logging endpoint on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Google Cloud Pub/Sub logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description:
      "List Google Cloud Pub/Sub endpoints on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description:
      "Update a Google Cloud Pub/Sub logging endpoint on a Fastly service version",
    options: [
      accountNameOption,
      autocloneOption,
      formatOption,
      formatVersionOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Google Cloud Pub/Sub logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of the Google Cloud Pub/Sub logging object",
        args: {
          name: "new-name",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Google Cloud Pub/Sub. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      {
        name: "--project-id",
        description: "The ID of your Google Cloud Platform project",
        args: {
          name: "project-id",
        },
      },
      responseConditionOption,
      secretKeyOption,
      serviceIdOption,
      serviceNameOption,
      {
        name: "--topic",
        description:
          "The Google Cloud Pub/Sub topic to which logs will be published",
        args: {
          name: "topic",
        },
      },
      userOption,
      versionOption,
    ],
  },
];

const serviceLoggingGrafanacloudlogsSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description:
      "Create a Grafana Cloud Logs logging endpoint on a Fastly service version",
    options: [
      {
        name: "--auth-token",
        description: "Your Grafana Access Policy Token",
        args: {
          name: "auth-token",
        },
      },
      autocloneOption,
      formatOption,
      formatVersionOption,
      {
        name: "--index",
        description: "The stream identifier",
        args: {
          name: "index",
        },
      },
      messageTypeOption,
      {
        name: ["-n", "--name"],
        description:
          "The name of the Grafana Cloud Logs logging endpoint. Used as a primary key for API access",
        args: {
          name: "name",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Grafana Cloud Logs. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      {
        name: "--url",
        description: "The URL of your Grafana instance",
        args: {
          name: "url",
        },
      },
      {
        name: "--user",
        description: "Your Grafana User ID",
        args: {
          name: "user",
        },
      },
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description:
      "Delete a GrafanaCloudLogs logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Grafana Cloud Logs logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about a Grafana Cloud Logs logging endpoint on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Grafana Cloud Logs logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description:
      "List Grafana Cloud Logs endpoints on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description:
      "Update a Grafana Cloud Logs logging endpoint on a Fastly service version",
    options: [
      {
        name: "--auth-token",
        description: "Your Grafana Access Policy Token",
        args: {
          name: "auth-token",
        },
      },
      autocloneOption,
      formatOption,
      formatVersionOption,
      {
        name: "--index",
        description: "Stream identifier",
        args: {
          name: "index",
        },
      },
      messageTypeOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Grafana Cloud Logs logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of the Grafana Cloud Logs logging object",
        args: {
          name: "new-name",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Grafana Cloud Logs. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      {
        name: "--url",
        description: "URL of your Grafana Instance",
        args: {
          name: "url",
        },
      },
      {
        name: "--user",
        description: "Your Grafana Cloud Logs User ID",
        args: {
          name: "user",
        },
      },
      versionOption,
    ],
  },
];

const serviceLoggingHerokuSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description: "Create a Heroku logging endpoint on a Fastly service version",
    options: [
      {
        name: "--auth-token",
        description:
          "The token to use for authentication (https://devcenter.heroku.com/articles/add-on-partner-log-integration)",
        args: {
          name: "auth-token",
        },
      },
      autocloneOption,
      formatOption,
      formatVersionOption,
      {
        name: ["-n", "--name"],
        description:
          "The name of the Heroku logging object. Used as a primary key for API access",
        args: {
          name: "name",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Heroku. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      {
        name: "--url",
        description: "The url to stream logs to",
        args: {
          name: "url",
        },
      },
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description: "Delete a Heroku logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Heroku logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about a Heroku logging endpoint on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Heroku logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List Heroku endpoints on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description: "Update a Heroku logging endpoint on a Fastly service version",
    options: [
      {
        name: "--auth-token",
        description:
          "The token to use for authentication (https://devcenter.heroku.com/articles/add-on-partner-log-integration)",
        args: {
          name: "auth-token",
        },
      },
      autocloneOption,
      formatOption,
      formatVersionOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Heroku logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of the Heroku logging object",
        args: {
          name: "new-name",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Heroku. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      {
        name: "--url",
        description: "The url to stream logs to",
        args: {
          name: "url",
        },
      },
      versionOption,
    ],
  },
];

const serviceLoggingHoneycombSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description:
      "Create a Honeycomb logging endpoint on a Fastly service version",
    options: [
      {
        name: "--auth-token",
        description:
          "The Write Key from the Account page of your Honeycomb account",
        args: {
          name: "auth-token",
        },
      },
      autocloneOption,
      {
        name: "--dataset",
        description: "The Honeycomb Dataset you want to log to",
        args: {
          name: "dataset",
        },
      },
      formatOption,
      formatVersionOption,
      {
        name: ["-n", "--name"],
        description:
          "The name of the Honeycomb logging object. Used as a primary key for API access",
        args: {
          name: "name",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Honeycomb. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description:
      "Delete a Honeycomb logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Honeycomb logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about a Honeycomb logging endpoint on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Honeycomb logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List Honeycomb endpoints on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description:
      "Update a Honeycomb logging endpoint on a Fastly service version",
    options: [
      {
        name: "--auth-token",
        description:
          "The Write Key from the Account page of your Honeycomb account",
        args: {
          name: "auth-token",
        },
      },
      autocloneOption,
      {
        name: "--dataset",
        description: "The Honeycomb Dataset you want to log to",
        args: {
          name: "dataset",
        },
      },
      formatOption,
      formatVersionOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Honeycomb logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of the Honeycomb logging object",
        args: {
          name: "new-name",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Honeycomb. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
];

const serviceLoggingHttpsSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description: "Create an HTTPS logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      compressionCodecOption,
      {
        name: "--content-type",
        description: "Content type of the header sent with the request",
        args: {
          name: "content-type",
        },
      },
      formatOption,
      formatVersionOption,
      gzipLevelOption,
      {
        name: "--header-name",
        description: "Name of the custom header sent with the request",
        args: {
          name: "header-name",
        },
      },
      {
        name: "--header-value",
        description: "Value of the custom header sent with the request",
        args: {
          name: "header-value",
        },
      },
      {
        name: "--json-format",
        description:
          "Enforces valid JSON formatting for log entries. Can be disabled 0, array of json (wraps JSON log batches in an array) 1, or newline delimited json (places each JSON log entry onto a new line in a batch) 2",
        args: {
          name: "json-format",
        },
      },
      messageTypeOption,
      {
        name: "--method",
        description:
          "HTTP method used for request. Can be POST or PUT. Defaults to POST if not specified",
        args: {
          name: "method",
        },
      },
      {
        name: ["-n", "--name"],
        description:
          "The name of the HTTPS logging object. Used as a primary key for API access",
        args: {
          name: "name",
        },
      },
      periodOption,
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to HTTPS. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      requestMaxBytesOption,
      requestMaxEntriesOption,
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      tlsCaCertOption,
      tlsClientCertOption,
      tlsClientKeyOption,
      tlsHostnameOption,
      {
        name: "--url",
        description:
          "URL that log data will be sent to. Must use the https protocol",
        args: {
          name: "url",
        },
      },
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description: "Delete an HTTPS logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "The name of the HTTPS logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about an HTTPS logging endpoint on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "The name of the HTTPS logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List HTTPS endpoints on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description: "Update an HTTPS logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: "--content-type",
        description: "Content type of the header sent with the request",
        args: {
          name: "content-type",
        },
      },
      formatOption,
      formatVersionOption,
      {
        name: "--header-name",
        description: "Name of the custom header sent with the request",
        args: {
          name: "header-name",
        },
      },
      {
        name: "--header-value",
        description: "Value of the custom header sent with the request",
        args: {
          name: "header-value",
        },
      },
      {
        name: "--json-format",
        description:
          "Enforces valid JSON formatting for log entries. Can be disabled 0, array of json (wraps JSON log batches in an array) 1, or newline delimited json (places each JSON log entry onto a new line in a batch) 2",
        args: {
          name: "json-format",
        },
      },
      messageTypeOption,
      {
        name: "--method",
        description:
          "HTTP method used for request. Can be POST or PUT. Defaults to POST if not specified",
        args: {
          name: "method",
        },
      },
      {
        name: ["-n", "--name"],
        description: "The name of the HTTPS logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of the HTTPS logging object",
        args: {
          name: "new-name",
        },
      },
      periodOption,
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to HTTPS. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      requestMaxBytesOption,
      requestMaxEntriesOption,
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      tlsCaCertOption,
      tlsClientCertOption,
      tlsClientKeyOption,
      tlsHostnameOption,
      {
        name: "--url",
        description:
          "URL that log data will be sent to. Must use the https protocol",
        args: {
          name: "url",
        },
      },
      versionOption,
    ],
  },
];

const serviceLoggingKafkaSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description: "Create a Kafka logging endpoint on a Fastly service version",
    options: [
      {
        name: "--auth-method",
        description:
          "SASL authentication method. Valid values are: plain, scram-sha-256, scram-sha-512",
        args: {
          name: "auth-method",
          suggestions: ["plain", "scram-sha-256", "scram-sha-512"],
        },
      },
      autocloneOption,
      {
        name: "--brokers",
        description:
          "A comma-separated list of IP addresses or hostnames of Kafka brokers",
        args: {
          name: "brokers",
        },
      },
      {
        name: "--compression-codec",
        description:
          "The codec used for compression of your logs. One of: gzip, snappy, lz4",
        args: {
          name: "compression-codec",
        },
      },
      formatOption,
      formatVersionOption,
      {
        name: "--max-batch-size",
        description: "The maximum size of the log batch in bytes",
        args: {
          name: "max-batch-size",
        },
      },
      {
        name: ["-n", "--name"],
        description:
          "The name of the Kafka logging object. Used as a primary key for API access",
        args: {
          name: "name",
        },
      },
      {
        name: "--parse-log-keyvals",
        description: "Parse key-value pairs within the log format",
      },
      {
        name: "--password",
        description:
          "SASL authentication password. Required if --auth-method is specified",
        args: {
          name: "password",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Kafka. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      {
        name: "--required-acks",
        description:
          "The Number of acknowledgements a leader must receive before a write is considered successful. One of: 1 (default) One server needs to respond. 0 No servers need to respond. -1 Wait for all in-sync replicas to respond",
        args: {
          name: "required-acks",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      tlsCaCertOption,
      tlsClientCertOption,
      tlsClientKeyOption,
      tlsHostnameOption,
      {
        name: "--topic",
        description: "The Kafka topic to send logs to",
        args: {
          name: "topic",
        },
      },
      {
        name: "--use-sasl",
        description:
          "Enable SASL authentication. Requires --auth-method, --username, and --password to be specified",
      },
      useTlsOption,
      {
        name: "--username",
        description:
          "SASL authentication username. Required if --auth-method is specified",
        args: {
          name: "username",
        },
      },
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description: "Delete a Kafka logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Kafka logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about a Kafka logging endpoint on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Kafka logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List Kafka endpoints on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description: "Update a Kafka logging endpoint on a Fastly service version",
    options: [
      {
        name: "--auth-method",
        description:
          "SASL authentication method. Valid values are: plain, scram-sha-256, scram-sha-512",
        args: {
          name: "auth-method",
          suggestions: ["plain", "scram-sha-256", "scram-sha-512"],
        },
      },
      autocloneOption,
      {
        name: "--brokers",
        description:
          "A comma-separated list of IP addresses or hostnames of Kafka brokers",
        args: {
          name: "brokers",
        },
      },
      {
        name: "--compression-codec",
        description:
          "The codec used for compression of your logs. One of: gzip, snappy, lz4",
        args: {
          name: "compression-codec",
        },
      },
      formatOption,
      formatVersionOption,
      {
        name: "--max-batch-size",
        description: "The maximum size of the log batch in bytes",
        args: {
          name: "max-batch-size",
        },
      },
      {
        name: ["-n", "--name"],
        description: "The name of the Kafka logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of the Kafka logging object",
        args: {
          name: "new-name",
        },
      },
      {
        name: "--no-parse-log-keyvals",
        description: "Do not parse key-value pairs within the log format",
        exclusiveOn: ["--parse-log-keyvals"],
      },
      {
        name: "--parse-log-keyvals",
        description: "Parse key-value pairs within the log format",
        exclusiveOn: ["--no-parse-log-keyvals"],
      },
      {
        name: "--password",
        description:
          "SASL authentication password. Required if --auth-method is specified",
        args: {
          name: "password",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Kafka. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      {
        name: "--required-acks",
        description:
          "The Number of acknowledgements a leader must receive before a write is considered successful. One of: 1 (default) One server needs to respond. 0 No servers need to respond. -1 Wait for all in-sync replicas to respond",
        args: {
          name: "required-acks",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      tlsCaCertOption,
      tlsClientCertOption,
      tlsClientKeyOption,
      tlsHostnameOption,
      {
        name: "--topic",
        description: "The Kafka topic to send logs to",
        args: {
          name: "topic",
        },
      },
      {
        name: "--use-sasl",
        description:
          "Enable SASL authentication. Requires --auth-method, --username, and --password to be specified",
      },
      useTlsOption,
      {
        name: "--username",
        description:
          "SASL authentication username. Required if --auth-method is specified",
        args: {
          name: "username",
        },
      },
      versionOption,
    ],
  },
];

const serviceLoggingKinesisSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description:
      "Create an Amazon Kinesis logging endpoint on a Fastly service version",
    options: [
      {
        name: "--access-key",
        description:
          "The access key associated with the target Amazon Kinesis stream",
        args: {
          name: "access-key",
        },
      },
      autocloneOption,
      formatOption,
      formatVersionOption,
      iamRoleOption,
      {
        name: ["-n", "--name"],
        description:
          "The name of the Kinesis logging object. Used as a primary key for API access",
        args: {
          name: "name",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Kinesis. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      {
        name: "--region",
        description: "The region where logs are received and stored by Kinesis",
        args: {
          name: "region",
        },
      },
      responseConditionOption,
      {
        name: "--secret-key",
        description:
          "The secret key associated with the target Amazon Kinesis stream",
        args: {
          name: "secret-key",
        },
      },
      serviceIdOption,
      serviceNameOption,
      {
        name: "--stream-name",
        description: "The Amazon Kinesis stream to send logs to",
        args: {
          name: "stream-name",
        },
      },
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description:
      "Delete a Kinesis logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Kinesis logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about a Kinesis logging endpoint on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Kinesis logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List Kinesis endpoints on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description:
      "Update a Kinesis logging endpoint on a Fastly service version",
    options: [
      {
        name: "--access-key",
        description: "Your Kinesis account access key",
        args: {
          name: "access-key",
        },
      },
      autocloneOption,
      formatOption,
      formatVersionOption,
      iamRoleOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Kinesis logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of the Kinesis logging object",
        args: {
          name: "new-name",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Kinesis. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      {
        name: "--region",
        description: "The region where logs are received and stored by Kinesis",
        args: {
          name: "region",
        },
      },
      responseConditionOption,
      {
        name: "--secret-key",
        description: "Your Kinesis account secret key",
        args: {
          name: "secret-key",
        },
      },
      serviceIdOption,
      serviceNameOption,
      {
        name: "--stream-name",
        description: "Your Kinesis stream name",
        args: {
          name: "stream-name",
        },
      },
      versionOption,
    ],
  },
];

const serviceLoggingLogglySubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description: "Create a Loggly logging endpoint on a Fastly service version",
    options: [
      {
        name: "--auth-token",
        description:
          "The token to use for authentication (https://www.loggly.com/docs/customer-token-authentication-token/)",
        args: {
          name: "auth-token",
        },
      },
      autocloneOption,
      formatOption,
      formatVersionOption,
      {
        name: ["-n", "--name"],
        description:
          "The name of the Loggly logging object. Used as a primary key for API access",
        args: {
          name: "name",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Loggly. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description: "Delete a Loggly logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Loggly logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about a Loggly logging endpoint on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Loggly logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List Loggly endpoints on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description: "Update a Loggly logging endpoint on a Fastly service version",
    options: [
      {
        name: "--auth-token",
        description:
          "The token to use for authentication (https://www.loggly.com/docs/customer-token-authentication-token/)",
        args: {
          name: "auth-token",
        },
      },
      autocloneOption,
      formatOption,
      formatVersionOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Loggly logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of the Loggly logging object",
        args: {
          name: "new-name",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Loggly. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
];

const serviceLoggingLogshuttleSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description:
      "Create a Logshuttle logging endpoint on a Fastly service version",
    options: [
      {
        name: "--auth-token",
        description:
          "The data authentication token associated with this endpoint",
        args: {
          name: "auth-token",
        },
      },
      autocloneOption,
      formatOption,
      formatVersionOption,
      {
        name: ["-n", "--name"],
        description:
          "The name of the Logshuttle logging object. Used as a primary key for API access",
        args: {
          name: "name",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Logshuttle. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      {
        name: "--url",
        description: "Your Logshuttle endpoint url",
        args: {
          name: "url",
        },
      },
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description:
      "Delete a Logshuttle logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Logshuttle logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about a Logshuttle logging endpoint on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Logshuttle logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List Logshuttle endpoints on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description:
      "Update a Logshuttle logging endpoint on a Fastly service version",
    options: [
      {
        name: "--auth-token",
        description:
          "The data authentication token associated with this endpoint",
        args: {
          name: "auth-token",
        },
      },
      autocloneOption,
      formatOption,
      formatVersionOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Logshuttle logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of the Logshuttle logging object",
        args: {
          name: "new-name",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Logshuttle. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      {
        name: "--url",
        description: "Your Logshuttle endpoint url",
        args: {
          name: "url",
        },
      },
      versionOption,
    ],
  },
];

const serviceLoggingNewrelicSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description:
      "Create an New Relic logging endpoint attached to the specified service version",
    options: [
      autocloneOption,
      formatOption,
      formatVersionOption,
      keyOption,
      {
        name: "--name",
        description: "The name for the real-time logging configuration",
        args: {
          name: "name",
        },
      },
      {
        name: "--placement",
        description:
          "Where in the generated VCL the logging call should be placed",
        args: {
          name: "placement",
        },
      },
      processingRegionOption,
      {
        name: "--region",
        description:
          "The region where logs are received and stored by New Relic",
        args: {
          name: "region",
        },
      },
      {
        name: "--response-condition",
        description:
          "The name of an existing condition in the configured endpoint",
        args: {
          name: "response-condition",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description:
      "Delete the New Relic Logs logging object for a particular service and version",
    options: [
      autocloneOption,
      {
        name: "--name",
        description:
          "The name for the real-time logging configuration to delete",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Get the details of a New Relic Logs logging object for a particular service and version",
    options: [
      jsonOption,
      {
        name: "--name",
        description: "The name for the real-time logging configuration",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description:
      "List all of the New Relic Logs logging objects for a particular service and version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description:
      "Update a New Relic Logs logging object for a particular service and version",
    options: [
      autocloneOption,
      formatOption,
      {
        name: "--format-version",
        description:
          "The version of the custom logging format used for the configured endpoint",
        args: {
          name: "format-version",
        },
      },
      keyOption,
      {
        name: "--name",
        description:
          "The name for the real-time logging configuration to update",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "The name for the real-time logging configuration",
        args: {
          name: "new-name",
        },
      },
      {
        name: "--placement",
        description:
          "Where in the generated VCL the logging call should be placed",
        args: {
          name: "placement",
        },
      },
      processingRegionOption,
      {
        name: "--region",
        description:
          "The region where logs are received and stored by New Relic",
        args: {
          name: "region",
        },
      },
      {
        name: "--response-condition",
        description:
          "The name of an existing condition in the configured endpoint",
        args: {
          name: "response-condition",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
];

const serviceLoggingNewrelicotlpSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description:
      "Create an New Relic logging endpoint attached to the specified service version",
    options: [
      autocloneOption,
      formatOption,
      formatVersionOption,
      keyOption,
      {
        name: "--name",
        description: "The name for the real-time logging configuration",
        args: {
          name: "name",
        },
      },
      {
        name: "--placement",
        description:
          "Where in the generated VCL the logging call should be placed",
        args: {
          name: "placement",
        },
      },
      processingRegionOption,
      {
        name: "--region",
        description: "The region to which to stream logs",
        args: {
          name: "region",
        },
      },
      {
        name: "--response-condition",
        description:
          "The name of an existing condition in the configured endpoint",
        args: {
          name: "response-condition",
        },
      },
      serviceIdOption,
      serviceNameOption,
      {
        name: "--url",
        description:
          "URL of the New Relic Trace Observer, if you are using New Relic Infinite Tracing",
        args: {
          name: "url",
        },
      },
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description:
      "Delete the New Relic OTLP Logs logging object for a particular service and version",
    options: [
      autocloneOption,
      {
        name: "--name",
        description:
          "The name for the real-time logging configuration to delete",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Get the details of a New Relic OTLP Logs logging object for a particular service and version",
    options: [
      jsonOption,
      {
        name: "--name",
        description: "The name for the real-time logging configuration",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description:
      "List all of the New Relic OTLP Logs logging objects for a particular service and version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description:
      "Update a New Relic Logs logging object for a particular service and version",
    options: [
      autocloneOption,
      formatOption,
      {
        name: "--format-version",
        description:
          "The version of the custom logging format used for the configured endpoint",
        args: {
          name: "format-version",
        },
      },
      keyOption,
      {
        name: "--name",
        description:
          "The name for the real-time logging configuration to update",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "The name for the real-time logging configuration",
        args: {
          name: "new-name",
        },
      },
      {
        name: "--placement",
        description:
          "Where in the generated VCL the logging call should be placed",
        args: {
          name: "placement",
        },
      },
      processingRegionOption,
      {
        name: "--region",
        description: "The region to which to stream logs",
        args: {
          name: "region",
        },
      },
      {
        name: "--response-condition",
        description:
          "The name of an existing condition in the configured endpoint",
        args: {
          name: "response-condition",
        },
      },
      serviceIdOption,
      serviceNameOption,
      {
        name: "--url",
        description:
          "URL of the New Relic Trace Observer, if you are using New Relic Infinite Tracing",
        args: {
          name: "url",
        },
      },
      versionOption,
    ],
  },
];

const serviceLoggingOpenstackSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description:
      "Create an OpenStack logging endpoint on a Fastly service version",
    options: [
      {
        name: "--access-key",
        description: "Your OpenStack account access key",
        args: {
          name: "access-key",
        },
      },
      autocloneOption,
      {
        name: "--bucket",
        description: "The name of your OpenStack container",
        args: {
          name: "bucket",
        },
      },
      compressionCodecOption,
      formatOption,
      formatVersionOption,
      gzipLevelOption,
      messageTypeOption,
      {
        name: ["-n", "--name"],
        description:
          "The name of the OpenStack logging object. Used as a primary key for API access",
        args: {
          name: "name",
        },
      },
      pathOption,
      periodOption,
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to OpenStack. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      publicKeyOption,
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      timestampFormatOption,
      {
        name: "--url",
        description: "Your OpenStack auth url",
        args: {
          name: "url",
        },
      },
      {
        name: "--user",
        description: "The username for your OpenStack account",
        args: {
          name: "user",
        },
      },
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description:
      "Delete an OpenStack logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "The name of the OpenStack logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about an OpenStack logging endpoint on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "The name of the OpenStack logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List OpenStack logging endpoints on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description:
      "Update an OpenStack logging endpoint on a Fastly service version",
    options: [
      {
        name: "--access-key",
        description: "Your OpenStack account access key",
        args: {
          name: "access-key",
        },
      },
      autocloneOption,
      {
        name: "--bucket",
        description: "The name of the Openstack Space",
        args: {
          name: "bucket",
        },
      },
      compressionCodecOption,
      formatOption,
      formatVersionOption,
      gzipLevelOption,
      messageTypeOption,
      {
        name: ["-n", "--name"],
        description: "The name of the OpenStack logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of the OpenStack logging object",
        args: {
          name: "new-name",
        },
      },
      pathOption,
      periodOption,
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to OpenStack. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      publicKeyOption,
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      timestampFormatOption,
      {
        name: "--url",
        description: "Your OpenStack auth url",
        args: {
          name: "url",
        },
      },
      {
        name: "--user",
        description: "The username for your OpenStack account",
        args: {
          name: "user",
        },
      },
      versionOption,
    ],
  },
];

const serviceLoggingPapertrailSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description:
      "Create a Papertrail logging endpoint on a Fastly service version",
    options: [
      addressOption,
      autocloneOption,
      formatOption,
      formatVersionOption,
      {
        name: ["-n", "--name"],
        description:
          "The name of the Papertrail logging object. Used as a primary key for API access",
        args: {
          name: "name",
        },
      },
      placementOption,
      portOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Papertrail. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description:
      "Delete a Papertrail logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Papertrail logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about a Papertrail logging endpoint on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Papertrail logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List Papertrail endpoints on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description:
      "Update a Papertrail logging endpoint on a Fastly service version",
    options: [
      addressOption,
      autocloneOption,
      formatOption,
      formatVersionOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Papertrail logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of the Papertrail logging object",
        args: {
          name: "new-name",
        },
      },
      placementOption,
      portOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Papertrail. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
];

const serviceLoggingS3Subcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description:
      "Create an Amazon S3 logging endpoint on a Fastly service version",
    options: [
      {
        name: "--access-key",
        description: "Your S3 account access key",
        args: {
          name: "access-key",
        },
      },
      autocloneOption,
      {
        name: "--bucket",
        description: "Your S3 bucket name",
        args: {
          name: "bucket",
        },
      },
      compressionCodecOption,
      {
        name: "--domain",
        description: "The domain of the S3 endpoint",
        args: {
          name: "domain",
        },
      },
      fileMaxBytesOption,
      formatOption,
      formatVersionOption,
      gzipLevelOption,
      iamRoleOption,
      messageTypeOption,
      {
        name: ["-n", "--name"],
        description:
          "The name of the S3 logging object. Used as a primary key for API access",
        args: {
          name: "name",
        },
      },
      pathOption,
      periodOption,
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to S3. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      publicKeyOption,
      {
        name: "--redundancy",
        description:
          "The S3 storage class. One of: standard, intelligent_tiering, standard_ia, onezone_ia, glacier, glacier_ir, deep_archive, or reduced_redundancy",
        args: {
          name: "redundancy",
          suggestions: [
            "standard",
            "intelligent_tiering",
            "standard_ia",
            "onezone_ia",
            "glacier",
            "glacier_ir",
            "deep_archive",
            "reduced_redundancy",
          ],
        },
      },
      responseConditionOption,
      {
        name: "--secret-key",
        description: "Your S3 account secret key",
        args: {
          name: "secret-key",
        },
      },
      {
        name: "--server-side-encryption",
        description:
          "Set to enable S3 Server Side Encryption. Can be either AES256 or aws:kms",
        args: {
          name: "server-side-encryption",
          suggestions: ["AES256", "aws:kms"],
        },
      },
      {
        name: "--server-side-encryption-kms-key-id",
        description:
          "Server-side KMS Key ID. Must be set if server-side-encryption is set to aws:kms",
        args: {
          name: "server-side-encryption-kms-key-id",
        },
      },
      serviceIdOption,
      serviceNameOption,
      timestampFormatOption,
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description: "Delete a S3 logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "The name of the S3 logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about a S3 logging endpoint on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "The name of the S3 logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List S3 endpoints on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description: "Update a S3 logging endpoint on a Fastly service version",
    options: [
      {
        name: "--access-key",
        description: "Your S3 account access key",
        args: {
          name: "access-key",
        },
      },
      autocloneOption,
      {
        name: "--bucket",
        description: "Your S3 bucket name",
        args: {
          name: "bucket",
        },
      },
      compressionCodecOption,
      {
        name: "--domain",
        description: "The domain of the S3 endpoint",
        args: {
          name: "domain",
        },
      },
      fileMaxBytesOption,
      formatOption,
      formatVersionOption,
      gzipLevelOption,
      iamRoleOption,
      messageTypeOption,
      {
        name: ["-n", "--name"],
        description: "The name of the S3 logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of the S3 logging object",
        args: {
          name: "new-name",
        },
      },
      pathOption,
      periodOption,
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to S3. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      publicKeyOption,
      {
        name: "--redundancy",
        description:
          "The S3 storage class. One of: standard, intelligent_tiering, standard_ia, onezone_ia, glacier, glacier_ir, deep_archive, or reduced_redundancy",
        args: {
          name: "redundancy",
          suggestions: [
            "standard",
            "intelligent_tiering",
            "standard_ia",
            "onezone_ia",
            "glacier",
            "glacier_ir",
            "deep_archive",
            "reduced_redundancy",
          ],
        },
      },
      responseConditionOption,
      {
        name: "--secret-key",
        description: "Your S3 account secret key",
        args: {
          name: "secret-key",
        },
      },
      {
        name: "--server-side-encryption",
        description:
          "Set to enable S3 Server Side Encryption. Can be either AES256 or aws:kms",
        args: {
          name: "server-side-encryption",
          suggestions: ["AES256", "aws:kms"],
        },
      },
      {
        name: "--server-side-encryption-kms-key-id",
        description:
          "Server-side KMS Key ID. Must be set if server-side-encryption is set to aws:kms",
        args: {
          name: "server-side-encryption-kms-key-id",
        },
      },
      serviceIdOption,
      serviceNameOption,
      timestampFormatOption,
      versionOption,
    ],
  },
];

const serviceLoggingScalyrSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description: "Create a Scalyr logging endpoint on a Fastly service version",
    options: [
      {
        name: "--auth-token",
        description:
          "The token to use for authentication (https://www.scalyr.com/keys)",
        args: {
          name: "auth-token",
        },
      },
      autocloneOption,
      formatOption,
      formatVersionOption,
      {
        name: ["-n", "--name"],
        description:
          "The name of the Scalyr logging object. Used as a primary key for API access",
        args: {
          name: "name",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Scalyr. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      {
        name: "--project-id",
        description: "The name of the logfile field sent to Scalyr",
        args: {
          name: "project-id",
        },
      },
      {
        name: "--region",
        description:
          "The region where logs are received and stored by Scalyr. Either US or EU. Defaults to US if undefined",
        args: {
          name: "region",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description: "Delete a Scalyr logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Scalyr logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about a Scalyr logging endpoint on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Scalyr logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List Scalyr endpoints on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description: "Update a Scalyr logging endpoint on a Fastly service version",
    options: [
      {
        name: "--auth-token",
        description:
          "The token to use for authentication (https://www.scalyr.com/keys)",
        args: {
          name: "auth-token",
        },
      },
      autocloneOption,
      formatOption,
      formatVersionOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Scalyr logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of the Scalyr logging object",
        args: {
          name: "new-name",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Scalyr. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      {
        name: "--project-id",
        description: "The name of the logfile field sent to Scalyr",
        args: {
          name: "project-id",
        },
      },
      {
        name: "--region",
        description:
          "The region where logs are received and stored by Scalyr. Either US or EU. Defaults to US if undefined",
        args: {
          name: "region",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
];

const serviceLoggingSftpSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description: "Create an SFTP logging endpoint on a Fastly service version",
    options: [
      {
        name: "--address",
        description: "The hostname or IPv4 address",
        args: {
          name: "address",
        },
      },
      autocloneOption,
      compressionCodecOption,
      formatOption,
      formatVersionOption,
      gzipLevelOption,
      messageTypeOption,
      {
        name: ["-n", "--name"],
        description:
          "The name of the SFTP logging object. Used as a primary key for API access",
        args: {
          name: "name",
        },
      },
      {
        name: "--password",
        description:
          "The password for the server. If both password and secret_key are passed, secret_key will be used in preference",
        args: {
          name: "password",
        },
      },
      {
        name: "--path",
        description:
          "The path to upload logs to. The directory must exist on the SFTP server before logs can be saved to it",
        args: {
          name: "path",
        },
      },
      periodOption,
      placementOption,
      portOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to SFTP. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      publicKeyOption,
      responseConditionOption,
      {
        name: "--secret-key",
        description:
          "The SSH private key for the server. If both password and secret_key are passed, secret_key will be used in preference",
        args: {
          name: "secret-key",
        },
      },
      serviceIdOption,
      serviceNameOption,
      {
        name: "--ssh-known-hosts",
        description:
          "A list of host keys for all hosts we can connect to over SFTP",
        args: {
          name: "ssh-known-hosts",
        },
      },
      timestampFormatOption,
      {
        name: "--user",
        description: "The username for the server",
        args: {
          name: "user",
        },
      },
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description: "Delete an SFTP logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "The name of the SFTP logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about an SFTP logging endpoint on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "The name of the SFTP logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List SFTP endpoints on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description: "Update an SFTP logging endpoint on a Fastly service version",
    options: [
      {
        name: "--address",
        description: "The hostname or IPv4 address",
        args: {
          name: "address",
        },
      },
      autocloneOption,
      compressionCodecOption,
      formatOption,
      formatVersionOption,
      gzipLevelOption,
      messageTypeOption,
      {
        name: ["-n", "--name"],
        description: "The name of the SFTP logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of the SFTP logging object",
        args: {
          name: "new-name",
        },
      },
      {
        name: "--password",
        description:
          "The password for the server. If both password and secret_key are passed, secret_key will be used in preference",
        args: {
          name: "password",
        },
      },
      {
        name: "--path",
        description:
          "The path to upload logs to. The directory must exist on the SFTP server before logs can be saved to it",
        args: {
          name: "path",
        },
      },
      periodOption,
      placementOption,
      portOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to SFTP. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      publicKeyOption,
      responseConditionOption,
      {
        name: "--secret-key",
        description:
          "The SSH private key for the server. If both password and secret_key are passed, secret_key will be used in preference",
        args: {
          name: "secret-key",
        },
      },
      serviceIdOption,
      serviceNameOption,
      {
        name: "--ssh-known-hosts",
        description:
          "A list of host keys for all hosts we can connect to over SFTP",
        args: {
          name: "ssh-known-hosts",
        },
      },
      timestampFormatOption,
      {
        name: "--user",
        description: "The username for the server",
        args: {
          name: "user",
        },
      },
      versionOption,
    ],
  },
];

const serviceLoggingSplunkSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description: "Create a Splunk logging endpoint on a Fastly service version",
    options: [
      {
        name: "--auth-token",
        description:
          "A Splunk token for use in posting logs over HTTP to your collector",
        args: {
          name: "auth-token",
        },
      },
      autocloneOption,
      formatOption,
      formatVersionOption,
      {
        name: ["-n", "--name"],
        description:
          "The name of the Splunk logging object. Used as a primary key for API access",
        args: {
          name: "name",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Splunk. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      tlsCaCertOption,
      tlsClientCertOption,
      tlsClientKeyOption,
      tlsHostnameOption,
      urlOption,
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description: "Delete a Splunk logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Splunk logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about a Splunk logging endpoint on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Splunk logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List Splunk endpoints on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description: "Update a Splunk logging endpoint on a Fastly service version",
    options: [
      {
        name: "--auth-token",
        args: {
          name: "auth-token",
        },
      },
      autocloneOption,
      formatOption,
      formatVersionOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Splunk logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of the Splunk logging object",
        args: {
          name: "new-name",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Splunk. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      tlsCaCertOption,
      tlsClientCertOption,
      tlsClientKeyOption,
      tlsHostnameOption,
      urlOption,
      versionOption,
    ],
  },
];

const serviceLoggingSumologicSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description:
      "Create a Sumologic logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      formatOption,
      formatVersionOption,
      messageTypeOption,
      {
        name: ["-n", "--name"],
        description:
          "The name of the Sumologic logging object. Used as a primary key for API access",
        args: {
          name: "name",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Sumologic. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      urlOption,
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description:
      "Delete a Sumologic logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Sumologic logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about a Sumologic logging endpoint on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Sumologic logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List Sumologic endpoints on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description:
      "Update a Sumologic logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      formatOption,
      formatVersionOption,
      messageTypeOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Sumologic logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of the Sumologic logging object",
        args: {
          name: "new-name",
        },
      },
      placementOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to Sumologic. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      urlOption,
      versionOption,
    ],
  },
];

const serviceLoggingSyslogSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description: "Create a Syslog logging endpoint on a Fastly service version",
    options: [
      addressOption,
      {
        name: "--auth-token",
        description: "Whether to prepend each message with a specific token",
        args: {
          name: "auth-token",
        },
      },
      autocloneOption,
      formatOption,
      formatVersionOption,
      messageTypeOption,
      {
        name: ["-n", "--name"],
        description:
          "The name of the Syslog logging object. Used as a primary key for API access",
        args: {
          name: "name",
        },
      },
      placementOption,
      portOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to syslog. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      tlsCaCertOption,
      tlsClientCertOption,
      tlsClientKeyOption,
      tlsHostnameOption,
      useTlsOption,
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description: "Delete a Syslog logging endpoint on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Syslog logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about a Syslog logging endpoint on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Syslog logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List Syslog endpoints on a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description: "Update a Syslog logging endpoint on a Fastly service version",
    options: [
      addressOption,
      {
        name: "--auth-token",
        description: "Whether to prepend each message with a specific token",
        args: {
          name: "auth-token",
        },
      },
      autocloneOption,
      formatOption,
      formatVersionOption,
      messageTypeOption,
      {
        name: ["-n", "--name"],
        description: "The name of the Syslog logging object",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name of the Syslog logging object",
        args: {
          name: "new-name",
        },
      },
      placementOption,
      portOption,
      {
        name: "--processing-region",
        description:
          "The region where logs will be processed before streaming to syslog. One of 'none', 'eu', or 'us'. Defaults to 'none' for no specific region",
        args: {
          name: "processing-region",
        },
      },
      responseConditionOption,
      serviceIdOption,
      serviceNameOption,
      tlsCaCertOption,
      tlsClientCertOption,
      tlsClientKeyOption,
      tlsHostnameOption,
      useTlsOption,
      versionOption,
    ],
  },
];

const serviceRateLimitSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description: "Create a rate limiter for a particular service and version",
    options: [
      {
        name: "--action",
        description:
          "The action to take when a rate limiter violation is detected",
        args: {
          name: "action",
          suggestions: ["log_only", "response", "response_object"],
        },
      },
      autocloneOption,
      {
        name: "--client-key",
        description:
          "Comma-separated list of VCL variable used to generate a counter key to identify a client",
        args: {
          name: "client-key",
        },
      },
      {
        name: "--feature-revision",
        description:
          "Revision number of the rate limiting feature implementation",
        args: {
          name: "feature-revision",
        },
      },
      {
        name: "--http-methods",
        description:
          "Comma-separated list of HTTP methods to apply rate limiting to",
        args: {
          name: "http-methods",
        },
      },
      jsonOption,
      {
        name: "--logger-type",
        description:
          "Name of the type of logging endpoint to be used when action is `log_only`",
        args: {
          name: "logger-type",
          suggestions: [
            "azureblob",
            "bigquery",
            "cloudfiles",
            "datadog",
            "digitalocean",
            "elasticsearch",
            "ftp",
            "gcs",
            "googleanalytics",
            "heroku",
            "honeycomb",
            "http",
            "https",
            "kafka",
            "kinesis",
            "logentries",
            "loggly",
            "logshuttle",
            "newrelic",
            "openstack",
            "papertrail",
            "pubsub",
            "s3",
            "scalyr",
            "sftp",
            "splunk",
            "stackdriver",
            "sumologic",
            "syslog",
          ],
        },
      },
      {
        name: "--name",
        description: "A human readable name for the rate limiting rule",
        args: {
          name: "name",
        },
      },
      {
        name: "--penalty-box-dur",
        description:
          "Length of time in minutes that the rate limiter is in effect after the initial violation is detected",
        args: {
          name: "penalty-box-dur",
        },
      },
      {
        name: "--response-content",
        description: "HTTP response body data",
        args: {
          name: "response-content",
        },
      },
      {
        name: "--response-content-type",
        description: "HTTP Content-Type (e.g. application/json)",
        args: {
          name: "response-content-type",
        },
      },
      {
        name: "--response-object-name",
        description:
          "Name of existing response object. Required if action is response_object",
        args: {
          name: "response-object-name",
        },
      },
      {
        name: "--response-status",
        description: "HTTP response status code (e.g. 429)",
        args: {
          name: "response-status",
        },
      },
      {
        name: "--rps-limit",
        description:
          "Upper limit of requests per second allowed by the rate limiter",
        args: {
          name: "rps-limit",
        },
      },
      serviceIdOption,
      serviceNameOption,
      {
        name: "--uri-dict-name",
        description: "The name of an Edge Dictionary containing URIs as keys",
        args: {
          name: "uri-dict-name",
        },
      },
      versionOption,
      {
        name: "--window-size",
        description:
          "Number of seconds during which the RPS limit must be exceeded in order to trigger a violation",
        args: {
          name: "window-size",
          suggestions: ["1", "10", "60"],
        },
      },
    ],
  },
  {
    name: ["delete", "remove"],
    description: "Delete a rate limiter by its ID",
    options: [
      {
        name: "--id",
        description: "Alphanumeric string identifying the rate limiter",
        isRequired: true,
        args: {
          name: "id",
        },
      },
    ],
  },
  {
    name: ["describe", "get"],
    description: "Get a rate limiter by its ID",
    options: [
      {
        name: "--id",
        description: "Alphanumeric string identifying the rate limiter",
        isRequired: true,
        args: {
          name: "id",
        },
      },
      jsonOption,
    ],
  },
  {
    name: "list",
    description: "List all rate limiters for a particular service and version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description: "Update a rate limiter by its ID",
    options: [
      {
        name: "--action",
        description:
          "The action to take when a rate limiter violation is detected",
        args: {
          name: "action",
          suggestions: ["log_only", "response", "response_object"],
        },
      },
      {
        name: "--client-key",
        description:
          "Comma-separated list of VCL variable used to generate a counter key to identify a client",
        args: {
          name: "client-key",
        },
      },
      {
        name: "--feature-revision",
        description:
          "Revision number of the rate limiting feature implementation",
        args: {
          name: "feature-revision",
        },
      },
      {
        name: "--http-methods",
        description:
          "Comma-separated list of HTTP methods to apply rate limiting to",
        args: {
          name: "http-methods",
        },
      },
      {
        name: "--id",
        description: "Alphanumeric string identifying the rate limiter",
        isRequired: true,
        args: {
          name: "id",
        },
      },
      jsonOption,
      {
        name: "--logger-type",
        description:
          "Name of the type of logging endpoint to be used when action is `log_only`",
        args: {
          name: "logger-type",
          suggestions: [
            "azureblob",
            "bigquery",
            "cloudfiles",
            "datadog",
            "digitalocean",
            "elasticsearch",
            "ftp",
            "gcs",
            "googleanalytics",
            "heroku",
            "honeycomb",
            "http",
            "https",
            "kafka",
            "kinesis",
            "logentries",
            "loggly",
            "logshuttle",
            "newrelic",
            "openstack",
            "papertrail",
            "pubsub",
            "s3",
            "scalyr",
            "sftp",
            "splunk",
            "stackdriver",
            "sumologic",
            "syslog",
          ],
        },
      },
      {
        name: "--name",
        description: "A human readable name for the rate limiting rule",
        args: {
          name: "name",
        },
      },
      {
        name: "--penalty-box-dur",
        description:
          "Length of time in minutes that the rate limiter is in effect after the initial violation is detected",
        args: {
          name: "penalty-box-dur",
        },
      },
      {
        name: "--response-content",
        description: "HTTP response body data",
        args: {
          name: "response-content",
        },
      },
      {
        name: "--response-content-type",
        description: "HTTP Content-Type (e.g. application/json)",
        args: {
          name: "response-content-type",
        },
      },
      {
        name: "--response-object-name",
        description:
          "Name of existing response object. Required if action is response_object",
        args: {
          name: "response-object-name",
        },
      },
      {
        name: "--response-status",
        description: "HTTP response status code (e.g. 429)",
        args: {
          name: "response-status",
        },
      },
      {
        name: "--rps-limit",
        description:
          "Upper limit of requests per second allowed by the rate limiter",
        args: {
          name: "rps-limit",
        },
      },
      {
        name: "--uri-dict-name",
        description: "The name of an Edge Dictionary containing URIs as keys",
        args: {
          name: "uri-dict-name",
        },
      },
      {
        name: "--window-size",
        description:
          "Number of seconds during which the RPS limit must be exceeded in order to trigger a violation",
        args: {
          name: "window-size",
          suggestions: ["1", "10", "60"],
        },
      },
    ],
  },
];

const serviceResourceLinkSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "link"],
    description: "Create a Fastly service resource link",
    options: [
      autocloneOption,
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "Resource link name (alias). Defaults to resource's name",
        args: {
          name: "name",
        },
      },
      {
        name: ["-r", "--resource-id"],
        description: "Resource ID",
        isRequired: true,
        args: {
          name: "resource-id",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description: "Delete a resource link for a Fastly service version",
    options: [
      autocloneOption,
      {
        name: "--id",
        description: "Resource link ID",
        isRequired: true,
        args: {
          name: "id",
        },
      },
      jsonOption,
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about a Fastly service resource link",
    options: [
      {
        name: "--id",
        description: "Resource link ID",
        isRequired: true,
        args: {
          name: "id",
        },
      },
      jsonOption,
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List all resource links for a Fastly service version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description: "Update a resource link for a Fastly service version",
    options: [
      autocloneOption,
      {
        name: "--id",
        description: "Resource link ID",
        isRequired: true,
        args: {
          name: "id",
        },
      },
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "Resource link name (alias). Defaults to resource's name",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
];

const serviceAuthSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description: "Create service authorization",
    options: [
      {
        name: ["-p", "--permission"],
        description:
          "The permission the user has in relation to the service (default: read_only)",
        args: {
          name: "permission",
          suggestions: ["full", "read_only", "purge_select", "purge_all"],
          default: "read_only",
        },
      },
      serviceIdOption,
      serviceNameOption,
      {
        name: ["-u", "--user-id"],
        description: "Alphanumeric string identifying the user",
        isRequired: true,
        args: {
          name: "user-id",
        },
      },
    ],
  },
  {
    name: ["delete", "remove"],
    description: "Delete service authorization",
    options: [
      {
        name: "--id",
        description: "ID of the service authorization to delete",
        isRequired: true,
        args: {
          name: "id",
        },
      },
    ],
  },
  {
    name: ["describe", "get"],
    description: "Show service authorization",
    options: [
      {
        name: "--id",
        description: "ID of the service authorization to retrieve",
        isRequired: true,
        args: {
          name: "id",
        },
      },
      jsonOption,
    ],
  },
  {
    name: "list",
    description: "List service authorizations",
    options: [jsonOption, pageOption, perPageOption],
  },
  {
    name: "update",
    description: "Update service authorization",
    options: [
      {
        name: "--id",
        description: "ID of the service authorization to delete",
        isRequired: true,
        args: {
          name: "id",
        },
      },
      {
        name: ["-p", "--permission"],
        description: "The permission the user has in relation to the service",
        isRequired: true,
        args: {
          name: "permission",
          suggestions: ["full", "read_only", "purge_select", "purge_all"],
        },
      },
    ],
  },
];

const serviceVclConditionSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description: "Create a condition on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "Condition name",
        args: {
          name: "name",
        },
      },
      {
        name: "--priority",
        description: "Condition priority",
        args: {
          name: "priority",
        },
      },
      serviceIdOption,
      serviceNameOption,
      {
        name: "--statement",
        description: "Condition statement",
        args: {
          name: "statement",
        },
      },
      {
        name: "--type",
        description: "Condition type",
        args: {
          name: "type",
          suggestions: ["REQUEST", "CACHE", "RESPONSE", "PREFETCH"],
        },
      },
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description: "Delete a condition on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: ["-n", "--name"],
        description: "Condition name",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Show detailed information about a condition on a Fastly service version",
    options: [
      jsonOption,
      {
        name: ["-n", "--name"],
        description: "Name of condition",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List condition on a Fastly service version",
    options: [serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description: "Update a condition on a Fastly service version",
    options: [
      autocloneOption,
      {
        name: "--comment",
        description: "Condition comment",
        args: {
          name: "comment",
        },
      },
      {
        name: ["-n", "--name"],
        description: "Domain name",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New condition name",
        args: {
          name: "new-name",
        },
      },
      {
        name: "--priority",
        description: "Condition priority",
        args: {
          name: "priority",
        },
      },
      serviceIdOption,
      serviceNameOption,
      {
        name: "--statement",
        description: "Condition statement",
        args: {
          name: "statement",
        },
      },
      {
        name: "--type",
        description: "Condition type",
        args: {
          name: "type",
        },
      },
      versionOption,
    ],
  },
];

const serviceVclCustomSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description: "Upload a VCL for a particular service and version",
    options: [
      autocloneOption,
      {
        name: "--content",
        description: "VCL passed as file path or content, e.g. $(< main.vcl)",
        args: {
          name: "content",
        },
      },
      {
        name: "--main",
        description: "Whether the VCL is the 'main' entrypoint",
      },
      {
        name: "--name",
        description: "The name of the VCL",
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description: "Delete the uploaded VCL for a particular service and version",
    options: [
      autocloneOption,
      {
        name: "--name",
        description: "The name of the VCL to delete",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description: "Get the uploaded VCL for a particular service and version",
    options: [
      jsonOption,
      {
        name: "--name",
        description: "The name of the VCL",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: "list",
    description: "List the uploaded VCLs for a particular service and version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description: "Update the uploaded VCL for a particular service and version",
    options: [
      autocloneOption,
      {
        name: "--content",
        description: "VCL passed as file path or content, e.g. $(< main.vcl)",
        args: {
          name: "content",
        },
      },
      {
        name: "--name",
        description: "The name of the VCL to update",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name for the VCL",
        args: {
          name: "new-name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
];

const serviceVclSnippetSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "add"],
    description: "Create a snippet for a particular service and version",
    options: [
      autocloneOption,
      {
        name: "--content",
        description:
          "VCL snippet passed as file path or content, e.g. $(< snippet.vcl)",
        args: {
          name: "content",
        },
      },
      {
        name: "--dynamic",
        description: "Whether the VCL snippet is dynamic or versioned",
      },
      {
        name: "--name",
        description: "The name of the VCL snippet",
        args: {
          name: "name",
        },
      },
      {
        name: ["-p", "--priority"],
        description:
          "Priority determines execution order. Lower numbers execute first",
        args: {
          name: "priority",
        },
      },
      serviceIdOption,
      serviceNameOption,
      {
        name: "--type",
        description:
          "The location in generated VCL where the snippet should be placed",
        args: {
          name: "type",
          suggestions: [
            "init",
            "recv",
            "hash",
            "hit",
            "miss",
            "pass",
            "fetch",
            "error",
            "deliver",
            "log",
            "none",
          ],
        },
      },
      versionOption,
    ],
  },
  {
    name: ["delete", "remove"],
    description:
      "Delete a specific snippet for a particular service and version",
    options: [
      autocloneOption,
      {
        name: "--name",
        description: "The name of the VCL snippet to delete",
        isRequired: true,
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      versionOption,
    ],
  },
  {
    name: ["describe", "get"],
    description:
      "Get the uploaded VCL snippet for a particular service and version",
    options: [
      {
        name: "--content",
        description: "Outputs the raw content of the identified snippet",
      },
      {
        name: "--dynamic",
        description: "Whether the VCL snippet is dynamic or versioned",
      },
      jsonOption,
      {
        name: "--name",
        description: "The name of the VCL snippet",
        args: {
          name: "name",
        },
      },
      serviceIdOption,
      serviceNameOption,
      {
        name: "--snippet-id",
        description: "Alphanumeric string identifying a VCL Snippet",
        args: {
          name: "snippet-id",
        },
      },
      versionOption,
    ],
  },
  {
    name: "list",
    description:
      "List the uploaded VCL snippets for a particular service and version",
    options: [jsonOption, serviceIdOption, serviceNameOption, versionOption],
  },
  {
    name: "update",
    description: "Update a VCL snippet for a particular service and version",
    options: [
      autocloneOption,
      {
        name: "--content",
        description:
          "VCL snippet passed as file path or content, e.g. $(< snippet.vcl)",
        args: {
          name: "content",
        },
      },
      {
        name: "--dynamic",
        description: "Whether the VCL snippet is dynamic or versioned",
      },
      {
        name: "--name",
        description: "The name of the VCL snippet to update",
        args: {
          name: "name",
        },
      },
      {
        name: "--new-name",
        description: "New name for the VCL snippet",
        args: {
          name: "new-name",
        },
      },
      {
        name: ["-p", "--priority"],
        description:
          "Priority determines execution order. Lower numbers execute first",
        args: {
          name: "priority",
        },
      },
      serviceIdOption,
      serviceNameOption,
      {
        name: "--snippet-id",
        description: "Alphanumeric string identifying a VCL Snippet",
        args: {
          name: "snippet-id",
        },
      },
      {
        name: "--type",
        description:
          "The location in generated VCL where the snippet should be placed",
        args: {
          name: "type",
          suggestions: [
            "init",
            "recv",
            "hash",
            "hit",
            "miss",
            "pass",
            "fetch",
            "error",
            "deliver",
            "log",
            "none",
          ],
        },
      },
      versionOption,
    ],
  },
];

const completionSpec: Fig.Spec = {
  name: "fastly",
  description: "A CLI for interacting with the Fastly platform",
  subcommands: [
    {
      name: "acl",
      description:
        "Manipulate Fastly ACLs (deprecated: use 'fastly service acl' instead)",
      hidden: true,
      deprecated: true,
      subcommands: serviceAclSubcommands,
    },
    {
      name: "aclentry",
      description:
        "Manipulate Fastly ACLs (deprecated: use 'fastly service acl-entry' instead)",
      hidden: true,
      deprecated: true,
      subcommands: serviceAclEntrySubcommands,
    },
    {
      name: "ai-runtime-control",
      description: "Manage AI Runtime Control",
      subcommands: [
        {
          name: "key",
          description: "Manage AI Runtime Control virtual keys",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create a virtual key",
              options: [
                {
                  name: "--expires-at",
                  description: "Expiration timestamp (RFC 3339 format)",
                  args: {
                    name: "expires-at",
                  },
                },
                jsonOption,
                {
                  name: "--model",
                  description:
                    'AI model identifier (e.g. "claude-sonnet-4-20250514")',
                  isRequired: true,
                  args: {
                    name: "model",
                  },
                },
                {
                  name: "--name",
                  description: "Human-readable name for the virtual key",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--provider",
                  description: 'AI model provider name (e.g. "Anthropic")',
                  isRequired: true,
                  args: {
                    name: "provider",
                  },
                },
              ],
            },
            {
              name: ["delete", "remove"],
              description:
                "Delete a virtual key and any associated security configuration",
              options: [
                jsonOption,
                {
                  name: "--key-id",
                  description:
                    "Alphanumeric string identifying the virtual key",
                  isRequired: true,
                  args: {
                    name: "key-id",
                  },
                },
              ],
            },
            {
              name: "get",
              description: "Get a virtual key",
              options: [
                jsonOption,
                {
                  name: "--key-id",
                  description:
                    "Alphanumeric string identifying the virtual key",
                  isRequired: true,
                  args: {
                    name: "key-id",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List virtual keys",
              options: [
                {
                  name: "--include-deleted",
                  description: "Include deleted virtual keys",
                },
                jsonOption,
                {
                  name: ["-l", "--limit"],
                  description: "Maximum number of items to list",
                  args: {
                    name: "limit",
                    default: "50",
                  },
                },
                {
                  name: "--model",
                  description: "Filter by AI model identifier",
                  args: {
                    name: "model",
                  },
                },
                {
                  name: "--provider",
                  description: "Filter by AI model provider",
                  args: {
                    name: "provider",
                  },
                },
                {
                  name: "--search",
                  description:
                    "Search virtual keys by substring match on key name",
                  args: {
                    name: "search",
                  },
                },
                {
                  name: "--sort",
                  description:
                    "Sort field. Prefix with '-' for descending order (e.g. \"-created_at\")",
                  args: {
                    name: "sort",
                    default: "created_at",
                  },
                },
              ],
            },
            {
              name: "rotate",
              description:
                "Rotate a virtual key, generating a new access token and invalidating the previous one",
              options: [
                {
                  name: "--expires-at",
                  description:
                    "Expiration timestamp for the rotated key (RFC 3339 format)",
                  isRequired: true,
                  args: {
                    name: "expires-at",
                  },
                },
                jsonOption,
                {
                  name: "--key-id",
                  description:
                    "Alphanumeric string identifying the virtual key",
                  isRequired: true,
                  args: {
                    name: "key-id",
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update a virtual key",
              options: [
                {
                  name: "--expires-at",
                  description:
                    "An updated expiration timestamp (RFC 3339 format)",
                  args: {
                    name: "expires-at",
                  },
                },
                jsonOption,
                {
                  name: "--key-id",
                  description:
                    "Alphanumeric string identifying the virtual key",
                  isRequired: true,
                  args: {
                    name: "key-id",
                  },
                },
                {
                  name: "--model",
                  description: "An updated AI model identifier",
                  args: {
                    name: "model",
                  },
                },
                {
                  name: "--name",
                  description:
                    "An updated human-readable name for the virtual key",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--provider",
                  description: "An updated AI model provider",
                  args: {
                    name: "provider",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "provider",
          description: "Manage AI Runtime Control providers",
          subcommands: [
            {
              name: "list",
              description: "List AI providers supported by AI Runtime Control",
              options: [jsonOption],
            },
            {
              name: "list-models",
              description: "List models available for a specific provider",
              options: [
                jsonOption,
                {
                  name: "--provider-id",
                  description:
                    'Alphanumeric string identifying the provider (e.g. "anthropic", "openai")',
                  isRequired: true,
                  args: {
                    name: "provider-id",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "provider-connection",
          description: "Manage AI Runtime Control provider connections",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create a provider connection",
              options: [
                {
                  name: "--api-key",
                  description: "Provider's secret key for authentication",
                  isRequired: true,
                  args: {
                    name: "api-key",
                  },
                },
                {
                  name: "--base-url",
                  description:
                    "Base URL for the provider's API. Must be an absolute http or https URL",
                  isRequired: true,
                  args: {
                    name: "base-url",
                  },
                },
                jsonOption,
                {
                  name: "--models",
                  description:
                    "Comma-separated list of allowed AI model identifiers",
                  isRequired: true,
                  isRepeatable: true,
                  args: {
                    name: "models",
                  },
                },
                {
                  name: "--name",
                  description: "Human-readable name of the provider connection",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: ["delete", "remove"],
              description:
                "Delete a provider connection. This is rejected if the connection is still referenced by a virtual key's failover policy",
              options: [
                {
                  name: "--id",
                  description:
                    "Alphanumeric string identifying the provider connection",
                  isRequired: true,
                  args: {
                    name: "id",
                  },
                },
                jsonOption,
              ],
            },
            {
              name: "get",
              description: "Get a provider connection",
              options: [
                {
                  name: "--id",
                  description:
                    "Alphanumeric string identifying the provider connection",
                  isRequired: true,
                  args: {
                    name: "id",
                  },
                },
                jsonOption,
              ],
            },
            {
              name: "list",
              description: "List provider connections",
              options: [
                jsonOption,
                {
                  name: "--sort",
                  description:
                    "Sort field. Prefix with '-' for descending order (e.g. \"-created_at\")",
                  args: {
                    name: "sort",
                    default: "created_at",
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update a provider connection",
              options: [
                {
                  name: "--api-key",
                  description:
                    "An updated provider secret key for authentication",
                  args: {
                    name: "api-key",
                  },
                },
                {
                  name: "--base-url",
                  description:
                    "An updated base URL for the provider's API. Must be an absolute http or https URL",
                  args: {
                    name: "base-url",
                  },
                },
                {
                  name: "--id",
                  description:
                    "Alphanumeric string identifying the provider connection",
                  isRequired: true,
                  args: {
                    name: "id",
                  },
                },
                jsonOption,
                {
                  name: "--models",
                  description:
                    "An updated comma-separated list of allowed AI model identifiers",
                  isRepeatable: true,
                  args: {
                    name: "models",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "session",
          description: "Manage AI Runtime Control session logs",
          subcommands: [
            {
              name: "list",
              description: "List session logs",
              options: [
                {
                  name: "--from",
                  description: "Start of the time range (RFC 3339 format)",
                  args: {
                    name: "from",
                  },
                },
                jsonOption,
                {
                  name: "--key",
                  description: "Filter by a specific virtual key ID",
                  args: {
                    name: "key",
                  },
                },
                {
                  name: ["-l", "--limit"],
                  description: "Maximum number of items to list",
                  args: {
                    name: "limit",
                    default: "50",
                  },
                },
                {
                  name: "--model",
                  description: "Filter by AI model identifier",
                  args: {
                    name: "model",
                  },
                },
                {
                  name: "--provider",
                  description: "Filter by provider connection ID",
                  args: {
                    name: "provider",
                  },
                },
                {
                  name: "--sort",
                  description:
                    "Sort field. Prefix with '-' for descending order (e.g. \"-created_at\")",
                  args: {
                    name: "sort",
                    default: "created_at",
                  },
                },
                {
                  name: "--to",
                  description:
                    "End of the time range (RFC 3339 format). Defaults to now",
                  args: {
                    name: "to",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "usage-metrics",
          description: "Manage AI Runtime Control usage metrics",
          subcommands: [
            {
              name: "export",
              description: "Export usage metrics as CSV",
              options: [
                {
                  name: "--from",
                  description: "Start of the time range (RFC 3339 format)",
                  args: {
                    name: "from",
                  },
                },
                {
                  name: "--key",
                  description: "Filter by a specific virtual key ID",
                  args: {
                    name: "key",
                  },
                },
                {
                  name: "--model",
                  description: "Filter by AI model identifier",
                  args: {
                    name: "model",
                  },
                },
                {
                  name: "--provider",
                  description: "Filter by provider connection ID",
                  args: {
                    name: "provider",
                  },
                },
                {
                  name: "--sort",
                  description:
                    "Sort field. Prefix with '-' for descending order (e.g. \"-date\")",
                  args: {
                    name: "sort",
                    default: "date",
                  },
                },
                {
                  name: "--to",
                  description:
                    "End of the time range (RFC 3339 format). Defaults to now",
                  args: {
                    name: "to",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List usage metrics",
              options: [
                {
                  name: "--from",
                  description: "Start of the time range (RFC 3339 format)",
                  args: {
                    name: "from",
                  },
                },
                jsonOption,
                {
                  name: "--key",
                  description: "Filter by a specific virtual key ID",
                  args: {
                    name: "key",
                  },
                },
                {
                  name: "--model",
                  description: "Filter by AI model identifier",
                  args: {
                    name: "model",
                  },
                },
                {
                  name: "--provider",
                  description: "Filter by provider connection ID",
                  args: {
                    name: "provider",
                  },
                },
                {
                  name: "--sort",
                  description:
                    "Sort field. Prefix with '-' for descending order (e.g. \"-date\")",
                  args: {
                    name: "sort",
                    default: "date",
                  },
                },
                {
                  name: "--to",
                  description:
                    "End of the time range (RFC 3339 format). Defaults to now",
                  args: {
                    name: "to",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "alerts",
      description:
        "Manipulate Fastly Alerts (deprecated: use 'fastly service alert' instead)",
      hidden: true,
      deprecated: true,
      subcommands: serviceAlertSubcommands,
    },
    {
      name: "apisecurity",
      description: "Manipulate Fastly API security operations",
      subcommands: [
        {
          name: "discovered-operations",
          description: "Retrieve and update discovered API operations",
          subcommands: [
            {
              name: "list",
              description: "List discovered operations",
              options: [
                {
                  name: "--domain",
                  description: "The domain for the operation",
                  args: {
                    name: "domain",
                  },
                },
                jsonOption,
                {
                  name: "--method",
                  description:
                    "Filters operations by HTTP method (e.g., GET, POST, PUT)",
                  args: {
                    name: "method",
                  },
                },
                {
                  name: "--path",
                  description: "Filters operations by path (exact match)",
                  args: {
                    name: "path",
                  },
                },
                {
                  name: ["-s", "--service-id"],
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  isRequired: true,
                  args: {
                    name: "service-id",
                  },
                },
                serviceNameOption,
                {
                  name: "--status",
                  description:
                    "Filters operations by status. Valid values are: discovered, saved, ignored",
                  args: {
                    name: "status",
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update the status of discovered operation(s)",
              options: [
                {
                  name: "--file",
                  description: "Update operations in bulk from a JSON file",
                  args: {
                    name: "file",
                    template: "filepaths",
                  },
                },
                jsonOption,
                {
                  name: "--operation-id",
                  description:
                    "The ID of the discovered operation (comma-separated for multiple)",
                  args: {
                    name: "operation-id",
                  },
                },
                {
                  name: ["-s", "--service-id"],
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  isRequired: true,
                  args: {
                    name: "service-id",
                  },
                },
                serviceNameOption,
                {
                  name: "--status",
                  description:
                    "The new status to apply. Valid values are: 'discovered', 'ignored'",
                  args: {
                    name: "status",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "operations",
          description: "Manage operations associated with services",
          subcommands: [
            {
              name: "add-tags",
              description: "Add tags to operation(s)",
              options: [
                {
                  name: "--file",
                  description:
                    "Add tags to operations in bulk from a JSON file",
                  args: {
                    name: "file",
                    template: "filepaths",
                  },
                },
                jsonOption,
                {
                  name: "--operation-ids",
                  description:
                    "Comma-separated list of operation IDs to add tags to",
                  isRepeatable: true,
                  args: {
                    name: "operation-ids",
                  },
                },
                {
                  name: ["-s", "--service-id"],
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  isRequired: true,
                  args: {
                    name: "service-id",
                  },
                },
                serviceNameOption,
                {
                  name: "--tag-ids",
                  description: "Comma-separated list of tag IDs to add",
                  isRequired: true,
                  isRepeatable: true,
                  args: {
                    name: "tag-ids",
                  },
                },
              ],
            },
            {
              name: ["create", "add"],
              description: "Create an operation",
              options: [
                {
                  name: "--description",
                  description: "Description of what the operation does",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--domain",
                  description: "Domain for the operation",
                  args: {
                    name: "domain",
                  },
                },
                {
                  name: "--file",
                  description: "Create operations in bulk from a JSON file",
                  args: {
                    name: "file",
                    template: "filepaths",
                  },
                },
                jsonOption,
                {
                  name: "--method",
                  description:
                    "The HTTP method for the operation (e.g., GET, POST, PUT)",
                  args: {
                    name: "method",
                  },
                },
                {
                  name: "--path",
                  description:
                    "The path for the operation, which may include path parameters.(e.g., /api/users)",
                  args: {
                    name: "path",
                  },
                },
                {
                  name: ["-s", "--service-id"],
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  isRequired: true,
                  args: {
                    name: "service-id",
                  },
                },
                serviceNameOption,
                {
                  name: "--tag-ids",
                  description:
                    "A comma-separated array of operation tag IDs associated with this operation",
                  isRepeatable: true,
                  args: {
                    name: "tag-ids",
                  },
                },
              ],
            },
            {
              name: ["delete", "remove"],
              description: "Delete an operation",
              options: [
                jsonOption,
                {
                  name: "--operation-id",
                  description: "The unique identifier of the operation",
                  isRequired: true,
                  args: {
                    name: "operation-id",
                  },
                },
                {
                  name: ["-s", "--service-id"],
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  isRequired: true,
                  args: {
                    name: "service-id",
                  },
                },
                serviceNameOption,
              ],
            },
            {
              name: ["describe", "get"],
              description: "Retrieve a single operation",
              options: [
                jsonOption,
                {
                  name: "--operation-id",
                  description: "The unique identifier of the operation",
                  isRequired: true,
                  args: {
                    name: "operation-id",
                  },
                },
                {
                  name: ["-s", "--service-id"],
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  isRequired: true,
                  args: {
                    name: "service-id",
                  },
                },
                serviceNameOption,
              ],
            },
            {
              name: "list",
              description: "List operations",
              options: [
                {
                  name: "--domain",
                  description: "Filters operations by domain (exact match)",
                  args: {
                    name: "domain",
                  },
                },
                jsonOption,
                {
                  name: "--method",
                  description:
                    "Filters operations by HTTP method (e.g., GET, POST, PUT)",
                  args: {
                    name: "method",
                  },
                },
                {
                  name: "--path",
                  description: "Filters operations by path (exact match)",
                  args: {
                    name: "path",
                  },
                },
                {
                  name: ["-s", "--service-id"],
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  isRequired: true,
                  args: {
                    name: "service-id",
                  },
                },
                serviceNameOption,
                {
                  name: "--tag-id",
                  description: "Filters operations by tag ID",
                  args: {
                    name: "tag-id",
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update an operation",
              options: [
                {
                  name: "--description",
                  description: "Updated description of what the operation does",
                  args: {
                    name: "description",
                  },
                },
                jsonOption,
                {
                  name: "--operation-id",
                  description: "The unique identifier of the operation",
                  isRequired: true,
                  args: {
                    name: "operation-id",
                  },
                },
                {
                  name: ["-s", "--service-id"],
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  isRequired: true,
                  args: {
                    name: "service-id",
                  },
                },
                serviceNameOption,
                {
                  name: "--tag-ids",
                  description:
                    "Comma-separated list of tag IDs to associate with the operation",
                  isRepeatable: true,
                  args: {
                    name: "tag-ids",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "tags",
          description: "Manipulate Fastly API Security operation tags",
          subcommands: [
            {
              name: "create",
              description: "Create an operation tag",
              options: [
                {
                  name: "--description",
                  description: "Description of the operation tag",
                  args: {
                    name: "description",
                  },
                },
                jsonOption,
                {
                  name: "--name",
                  description: "Name of the operation tag",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                serviceNameOption,
              ],
            },
            {
              name: "delete",
              description: "Delete an operation tag",
              options: [
                jsonOption,
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                serviceNameOption,
                {
                  name: "--tag-id",
                  description: "Tag ID",
                  isRequired: true,
                  args: {
                    name: "tag-id",
                  },
                },
              ],
            },
            {
              name: "get",
              description: "Get an operation tag",
              options: [
                jsonOption,
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                serviceNameOption,
                {
                  name: "--tag-id",
                  description: "Tag ID",
                  isRequired: true,
                  args: {
                    name: "tag-id",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List all operation tags",
              options: [
                jsonOption,
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                serviceNameOption,
              ],
            },
            {
              name: "update",
              description: "Update an operation tag",
              options: [
                {
                  name: "--description",
                  description: "Updated description of the operation tag",
                  isRequired: true,
                  args: {
                    name: "description",
                  },
                },
                jsonOption,
                {
                  name: "--name",
                  description: "Updated name of the operation tag",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--service-id",
                  description:
                    "Service ID (falls back to FASTLY_SERVICE_ID, then fastly.toml)",
                  args: {
                    name: "service-id",
                  },
                },
                serviceNameOption,
                {
                  name: "--tag-id",
                  description: "Tag ID",
                  isRequired: true,
                  args: {
                    name: "tag-id",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "audit-log",
      description: "Manage Fastly audit log configuration",
      subcommands: [
        {
          name: "event-mapping",
          description: "Manage Fastly audit log event mappings",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create an audit log event mapping",
              options: [
                {
                  name: "--description",
                  description: "A description of the mapping",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--event-type",
                  description:
                    "An audit event type that triggers a notification. Set flag multiple times, or provide a comma-separated list, to specify multiple event types",
                  isRequired: true,
                  isRepeatable: true,
                  args: {
                    name: "event-type",
                  },
                },
                {
                  name: "--integration-id",
                  description:
                    "The ID of an integration that should receive notifications. Set flag multiple times, or provide a comma-separated list, to specify multiple integrations",
                  isRequired: true,
                  isRepeatable: true,
                  args: {
                    name: "integration-id",
                  },
                },
                jsonOption,
                {
                  name: "--name",
                  description: "A descriptive name for the mapping",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--scope-id",
                  description:
                    "The ID of a service or workspace to scope the mapping to. Set flag multiple times, or provide a comma-separated list, to specify multiple scope IDs. Omit to apply the mapping to all resources of the given scope type",
                  isRepeatable: true,
                  args: {
                    name: "scope-id",
                  },
                },
                {
                  name: "--scope-type",
                  description:
                    "The category of Fastly resource the mapping applies to (account, vcl, wasm, ngwaf)",
                  isRequired: true,
                  args: {
                    name: "scope-type",
                    suggestions: ["account", "vcl", "wasm", "ngwaf"],
                  },
                },
              ],
            },
            {
              name: ["delete", "remove"],
              description: "Delete an audit log event mapping",
              options: [
                {
                  name: "--id",
                  description: "The unique identifier of the event mapping",
                  isRequired: true,
                  args: {
                    name: "id",
                  },
                },
                jsonOption,
              ],
            },
            {
              name: ["describe", "get"],
              description: "Retrieve a single audit log event mapping",
              options: [
                {
                  name: "--id",
                  description: "The unique identifier of the event mapping",
                  isRequired: true,
                  args: {
                    name: "id",
                  },
                },
                jsonOption,
              ],
            },
            {
              name: "list",
              description: "List audit log event mappings",
              options: [
                {
                  name: "--integration-id",
                  description:
                    "Filters results to mappings that reference the given integration ID",
                  args: {
                    name: "integration-id",
                  },
                },
                jsonOption,
                {
                  name: "--mapping-status",
                  description: "Filters results by mapping status",
                  args: {
                    name: "mapping-status",
                    suggestions: ["active", "inactive"],
                  },
                },
                {
                  name: "--name",
                  description:
                    "Filters results to mappings whose name contains the given string (case-insensitive)",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--scope-id",
                  description:
                    "Filters results to mappings that apply to the given service or workspace ID",
                  args: {
                    name: "scope-id",
                  },
                },
                {
                  name: "--scope-type",
                  description: "Filters results to the given scope type",
                  args: {
                    name: "scope-type",
                    suggestions: ["account", "vcl", "wasm", "ngwaf"],
                  },
                },
                {
                  name: "--sort",
                  description:
                    "The order in which to return results by creation date",
                  args: {
                    name: "sort",
                    suggestions: ["created_at", "-created_at"],
                  },
                },
              ],
            },
            {
              name: "list-event-types",
              description:
                "List the audit event types supported when creating an event mapping",
              options: [
                jsonOption,
                {
                  name: "--scope-type",
                  description:
                    "Filters results to event types compatible with the given scope type",
                  args: {
                    name: "scope-type",
                    suggestions: ["account", "vcl", "wasm", "ngwaf"],
                  },
                },
                {
                  name: "--sort",
                  description:
                    "The order in which to return results, alphabetically by event type",
                  args: {
                    name: "sort",
                    suggestions: ["event_type", "-event_type"],
                  },
                },
              ],
            },
            {
              name: "list-scope-types",
              description:
                "List the scope types supported when creating an event mapping",
              options: [
                jsonOption,
                {
                  name: "--sort",
                  description:
                    "The order in which to return results, alphabetically by scope type",
                  args: {
                    name: "sort",
                    suggestions: ["scope_type", "-scope_type"],
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update an audit log event mapping. This replaces the entire mapping, so all required fields must be provided",
              options: [
                {
                  name: "--description",
                  description: "A description of the mapping",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--event-type",
                  description:
                    "An audit event type that triggers a notification. Set flag multiple times, or provide a comma-separated list, to specify multiple event types",
                  isRequired: true,
                  isRepeatable: true,
                  args: {
                    name: "event-type",
                  },
                },
                {
                  name: "--id",
                  description: "The unique identifier of the event mapping",
                  isRequired: true,
                  args: {
                    name: "id",
                  },
                },
                {
                  name: "--integration-id",
                  description:
                    "The ID of an integration that should receive notifications. Set flag multiple times, or provide a comma-separated list, to specify multiple integrations",
                  isRequired: true,
                  isRepeatable: true,
                  args: {
                    name: "integration-id",
                  },
                },
                jsonOption,
                {
                  name: "--name",
                  description: "A descriptive name for the mapping",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--scope-id",
                  description:
                    "The ID of a service or workspace to scope the mapping to. Set flag multiple times, or provide a comma-separated list, to specify multiple scope IDs",
                  isRepeatable: true,
                  args: {
                    name: "scope-id",
                  },
                },
                {
                  name: "--scope-type",
                  description:
                    "The category of Fastly resource the mapping applies to (account, vcl, wasm, ngwaf)",
                  isRequired: true,
                  args: {
                    name: "scope-type",
                    suggestions: ["account", "vcl", "wasm", "ngwaf"],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "auth",
      description: "Manage stored Fastly API tokens and token policies",
      subcommands: [
        {
          name: "add",
          description: "Store a named token",
          options: [
            {
              name: "--api-token",
              description: "Fastly API token to store",
              isRequired: true,
              args: {
                name: "api-token",
              },
            },
          ],
          args: {
            name: "name",
            description:
              "Name for this token (pass to --token to use it later); if omitted, uses the API token's name",
            isOptional: true,
          },
        },
        {
          name: "delete",
          description: "Delete a stored token",
          args: {
            name: "name",
            description: "Name of the token to remove",
          },
        },
        {
          name: "list",
          description: "List stored tokens and show the default",
        },
        {
          name: "login",
          description:
            "Authenticate and store a default token (paste token or use --sso)",
          options: [
            {
              name: "--sso",
              description:
                "Authenticate via browser-based SSO (requires --token <name> to specify the stored token name)",
            },
          ],
        },
        {
          name: "revoke",
          description:
            "Revoke a token via the API and remove it from local config",
          options: [
            {
              name: "--current",
              description:
                "Revoke the token used to authenticate the current request",
            },
            {
              name: "--file",
              description:
                "Path to a newline-delimited file of token IDs to revoke in bulk",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: "--id",
              description: "Alphanumeric string identifying a token to revoke",
              args: {
                name: "id",
              },
            },
            {
              name: "--name",
              description: "Name of a locally stored token to revoke",
              args: {
                name: "name",
              },
            },
            {
              name: "--token-value",
              description:
                "Raw API token string to revoke (pass '-' to read from stdin)",
              args: {
                name: "token-value",
              },
            },
          ],
        },
        {
          name: "show",
          description: "Show details for a stored token",
          options: [
            {
              name: "--reveal",
              description: "Show the full token value (use with care)",
            },
          ],
          args: {
            name: "name",
            description:
              "Name of the token to show (defaults to the current token)",
            isOptional: true,
          },
        },
        {
          name: "token",
          description:
            "Output the active API token (for use in shell substitutions)",
        },
        {
          name: "use",
          description: "Set the default stored token for CLI commands",
          args: {
            name: "name",
            description: "Name of the token to use as default",
          },
        },
      ],
    },
    {
      name: "auth-token",
      description:
        "Manage API tokens (deprecated: use 'fastly auth' subcommands instead)",
      hidden: true,
      deprecated: true,
      subcommands: [
        {
          name: ["create", "add"],
          description:
            "Create an API token (deprecated: use the Fastly API directly)",
          options: [
            {
              name: "--expires",
              description: "Time-stamp (UTC) of when the token will expire",
              args: {
                name: "expires",
              },
            },
            {
              name: "--name",
              description: "Name of the token",
              args: {
                name: "name",
              },
            },
            {
              name: "--password",
              description:
                "User password corresponding with --token or $FASTLY_API_TOKEN",
              isRequired: true,
              args: {
                name: "password",
              },
            },
            {
              name: "--scope",
              description: "Authorization scope (repeat flag per scope)",
              isRepeatable: true,
              args: {
                name: "scope",
                suggestions: [
                  "global",
                  "purge_select",
                  "purge_all",
                  "global:read",
                ],
              },
            },
            {
              name: "--services",
              description:
                "A comma-separated list of alphanumeric strings identifying services (default: access to all services)",
              isRepeatable: true,
              args: {
                name: "services",
              },
            },
          ],
        },
        {
          name: ["delete", "remove"],
          description:
            "Revoke an API token (deprecated: use the Fastly API directly)",
          options: [
            {
              name: "--current",
              description: "Revoke the token used to authenticate the request",
            },
            {
              name: "--file",
              description:
                "Revoke tokens in bulk from a newline delimited list of tokens",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: "--id",
              description: "Alphanumeric string identifying a token",
              args: {
                name: "id",
              },
            },
          ],
        },
        {
          name: ["describe", "get"],
          description:
            "Get the current API token (deprecated: use the Fastly API directly)",
          options: [jsonOption],
        },
        {
          name: "list",
          description:
            "List API tokens (deprecated: use the Fastly API directly)",
          options: [
            {
              name: "--customer-id",
              description:
                "Alphanumeric string identifying the customer (falls back to FASTLY_CUSTOMER_ID)",
              args: {
                name: "customer-id",
              },
            },
            jsonOption,
          ],
        },
      ],
    },
    {
      name: "backend",
      description:
        "Manipulate Fastly service version backends (deprecated: use 'fastly service backend' instead)",
      hidden: true,
      deprecated: true,
      subcommands: serviceBackendSubcommands,
    },
    {
      name: "bot-management",
      description: "Configure ContentGuard Bot Management",
      subcommands: [
        {
          name: "bot",
          description: "Manage Bot Management bots within a workspace",
          subcommands: [
            {
              name: ["describe", "get"],
              description: "Show detailed information about a bot",
              options: [
                {
                  name: "--bot-id",
                  description: "Bot ID",
                  isRequired: true,
                  args: {
                    name: "bot-id",
                  },
                },
                {
                  name: "--category-id",
                  description: "Category ID",
                  isRequired: true,
                  args: {
                    name: "category-id",
                  },
                },
                jsonOption,
                {
                  name: "--workspace-id",
                  description: "Workspace ID",
                  isRequired: true,
                  args: {
                    name: "workspace-id",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List the bots in a Bot Management workspace",
              options: [
                {
                  name: "--category-id",
                  description: "Only list bots in this category",
                  args: {
                    name: "category-id",
                  },
                },
                jsonOption,
                {
                  name: "--workspace-id",
                  description: "Workspace ID",
                  isRequired: true,
                  args: {
                    name: "workspace-id",
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Set the action applied to requests from a bot",
              options: [
                {
                  name: "--action",
                  description:
                    "Action applied to requests from the bot ('inherit' applies the category's action)",
                  isRequired: true,
                  args: {
                    name: "action",
                    suggestions: ["allow", "block", "challenge", "inherit"],
                  },
                },
                {
                  name: "--bot-id",
                  description: "Bot ID",
                  isRequired: true,
                  args: {
                    name: "bot-id",
                  },
                },
                {
                  name: "--category-id",
                  description: "Category ID",
                  isRequired: true,
                  args: {
                    name: "category-id",
                  },
                },
                jsonOption,
                {
                  name: "--workspace-id",
                  description: "Workspace ID",
                  isRequired: true,
                  args: {
                    name: "workspace-id",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "category",
          description: "Manage Bot Management categories within a workspace",
          subcommands: [
            {
              name: ["describe", "get"],
              description: "Show detailed information about a bot category",
              options: [
                {
                  name: "--category-id",
                  description: "Category ID",
                  isRequired: true,
                  args: {
                    name: "category-id",
                  },
                },
                jsonOption,
                {
                  name: "--workspace-id",
                  description: "Workspace ID",
                  isRequired: true,
                  args: {
                    name: "workspace-id",
                  },
                },
              ],
            },
            {
              name: "list",
              description:
                "List the bot categories in a Bot Management workspace",
              options: [
                jsonOption,
                {
                  name: "--workspace-id",
                  description: "Workspace ID",
                  isRequired: true,
                  args: {
                    name: "workspace-id",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Set the action applied to bots in a category that are configured to inherit",
              options: [
                {
                  name: "--action",
                  description:
                    "Action applied to every bot in the category configured with the 'inherit' action",
                  isRequired: true,
                  args: {
                    name: "action",
                    suggestions: ["allow", "block", "challenge"],
                  },
                },
                {
                  name: "--category-id",
                  description: "Category ID",
                  isRequired: true,
                  args: {
                    name: "category-id",
                  },
                },
                {
                  name: "--clear-overrides",
                  description:
                    "Reset all bot actions in the category to 'inherit', removing individual overrides",
                },
                jsonOption,
                {
                  name: "--workspace-id",
                  description: "Workspace ID",
                  isRequired: true,
                  args: {
                    name: "workspace-id",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "workspace",
          description: "Manage Bot Management workspaces",
          subcommands: [
            {
              name: ["describe", "get"],
              description:
                "Show detailed information about a Bot Management workspace",
              options: [
                jsonOption,
                {
                  name: "--workspace-id",
                  description: "Workspace ID",
                  isRequired: true,
                  args: {
                    name: "workspace-id",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List Bot Management workspaces",
              options: [jsonOption],
            },
            {
              name: "update",
              description: "Update a Bot Management workspace",
              options: [jsonOption],
            },
          ],
        },
      ],
    },
    {
      name: "compute",
      description: "Manage Compute packages",
      subcommands: [
        {
          name: "acl",
          description: "Manipulate Fastly compute ACLs",
          subcommands: [
            {
              name: "create",
              description: "Create a compute ACL",
              options: [
                jsonOption,
                {
                  name: "--name",
                  description: "Name of the compute ACL",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a compute ACL",
              options: [
                {
                  name: "--acl-id",
                  description: "Compute ACL ID",
                  isRequired: true,
                  args: {
                    name: "acl-id",
                  },
                },
                jsonOption,
              ],
            },
            {
              name: "describe",
              description: "Describe a compute ACL",
              options: [
                {
                  name: "--acl-id",
                  description: "Compute ACL ID",
                  isRequired: true,
                  args: {
                    name: "acl-id",
                  },
                },
                jsonOption,
              ],
            },
            {
              name: "list-acls",
              description: "List all compute ACLs",
              options: [jsonOption],
            },
            {
              name: "list-entries",
              description: "List all entries of a compute ACL",
              options: [
                {
                  name: "--acl-id",
                  description: "Compute ACL ID",
                  isRequired: true,
                  args: {
                    name: "acl-id",
                  },
                },
                {
                  name: ["-c", "--cursor"],
                  description:
                    "Pagination cursor (Use 'next_cursor' value from list output)",
                  args: {
                    name: "cursor",
                  },
                },
                jsonOption,
                {
                  name: ["-l", "--limit"],
                  description: "Maximum number of items to list",
                  args: {
                    name: "limit",
                    default: "50",
                  },
                },
              ],
            },
            {
              name: "lookup",
              description: "Find a matching ACL entry for an IP address",
              options: [
                {
                  name: "--acl-id",
                  description: "Compute ACL ID",
                  isRequired: true,
                  args: {
                    name: "acl-id",
                  },
                },
                {
                  name: "--ip",
                  description: "Valid IPv4 or IPv6 address",
                  isRequired: true,
                  args: {
                    name: "ip",
                  },
                },
                jsonOption,
              ],
            },
            {
              name: "update",
              description: "Update a compute ACL",
              options: [
                {
                  name: "--acl-id",
                  description: "Alphanumeric string identifying a compute ACL",
                  isRequired: true,
                  args: {
                    name: "acl-id",
                  },
                },
                {
                  name: "--action",
                  description: "The action taken on the IP address",
                  args: {
                    name: "action",
                    suggestions: ["BLOCK", "ALLOW"],
                  },
                },
                {
                  name: "--file",
                  description:
                    "Batch update JSON file passed as file path or content, e.g. $(< batch.json)",
                  args: {
                    name: "file",
                    template: "filepaths",
                  },
                },
                {
                  name: "--operation",
                  description:
                    "Indicating that this entry is to be added to/updated in the ACL",
                  args: {
                    name: "operation",
                    suggestions: ["create", "update"],
                  },
                },
                {
                  name: "--prefix",
                  description:
                    "An IP prefix defined in Classless Inter-Domain Routing (CIDR) format, i.e. a valid IP address (v4 or v6) followed by a forward slash (/) and a prefix length (0-32 or 0-128, depending on address family)",
                  args: {
                    name: "prefix",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "build",
          description: "Build a Compute package locally",
          options: [
            {
              name: ["-C", "--dir"],
              description:
                "Project directory to build (default: current directory)",
              args: {
                name: "dir",
                template: "folders",
              },
            },
            {
              name: "--env",
              description:
                "The manifest environment config to use (e.g. 'stage' will attempt to read 'fastly.stage.toml')",
              args: {
                name: "env",
              },
            },
            {
              name: "--include-source",
              description: "Include source code in built package",
            },
            {
              name: "--language",
              description: "Language type",
              args: {
                name: "language",
              },
            },
            {
              name: "--metadata-disable",
              description: "Disable Wasm binary metadata annotations",
            },
            {
              name: "--metadata-filter-envvars",
              description:
                "Redact specified environment variables from [scripts.env_vars] using comma-separated list",
              args: {
                name: "metadata-filter-envvars",
              },
            },
            {
              name: "--metadata-show",
              description: "Inspect the Wasm binary metadata",
            },
            {
              name: "--package-name",
              description: "Package name",
              args: {
                name: "package-name",
              },
            },
            {
              name: "--timeout",
              description:
                "Timeout, in seconds, for the build compilation step",
              args: {
                name: "timeout",
              },
            },
          ],
        },
        {
          name: "deploy",
          description: "Deploy a package to a Fastly Compute service",
          options: [
            {
              name: "--comment",
              description: "Human-readable comment",
              args: {
                name: "comment",
              },
            },
            {
              name: ["-C", "--dir"],
              description: "Project directory (default: current directory)",
              args: {
                name: "dir",
                template: "folders",
              },
            },
            {
              name: "--domain",
              description: "The name of the domain associated to the package",
              args: {
                name: "domain",
              },
            },
            {
              name: "--env",
              description:
                "The manifest environment config to use (e.g. 'stage' will attempt to read 'fastly.stage.toml')",
              args: {
                name: "env",
              },
            },
            {
              name: "--no-default-domain",
              description: "Skip default domain creation",
            },
            {
              name: ["-p", "--package"],
              description: "Path to a package tar.gz",
              args: {
                name: "package",
                template: "filepaths",
              },
            },
            serviceIdOption,
            serviceNameOption,
            {
              name: "--status-check-code",
              description:
                "Set the expected status response for the service availability check",
              args: {
                name: "status-check-code",
              },
            },
            {
              name: "--status-check-off",
              description: "Disable the service availability check",
            },
            {
              name: "--status-check-path",
              description:
                "Specify the URL path for the service availability check",
              args: {
                name: "status-check-path",
                default: "/",
              },
            },
            {
              name: "--status-check-timeout",
              description:
                "Set a timeout (in seconds) for the service availability check",
              args: {
                name: "status-check-timeout",
                default: "120",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', 'staged', or the number of a specific Fastly service version (default: the active version, or the latest version if none is active)",
              args: {
                name: "version",
              },
            },
          ],
        },
        {
          name: "hash-files",
          description:
            "Generate a SHA512 digest from the contents of the Compute package",
          options: [
            {
              name: ["-C", "--dir"],
              description:
                "Project directory to build (default: current directory)",
              args: {
                name: "dir",
                template: "folders",
              },
            },
            {
              name: "--env",
              description:
                "The manifest environment config to use (e.g. 'stage' will attempt to read 'fastly.stage.toml')",
              args: {
                name: "env",
              },
            },
            {
              name: "--include-source",
              description: "Include source code in built package",
            },
            {
              name: "--language",
              description: "Language type",
              args: {
                name: "language",
              },
            },
            {
              name: "--metadata-disable",
              description: "Disable Wasm binary metadata annotations",
            },
            {
              name: "--metadata-filter-envvars",
              description:
                "Redact specified environment variables from [scripts.env_vars] using comma-separated list",
              args: {
                name: "metadata-filter-envvars",
              },
            },
            {
              name: "--metadata-show",
              description: "Inspect the Wasm binary metadata",
            },
            {
              name: ["-p", "--package"],
              description: "Path to a package tar.gz",
              args: {
                name: "package",
                template: "filepaths",
              },
            },
            {
              name: "--package-name",
              description: "Package name",
              args: {
                name: "package-name",
              },
            },
            {
              name: "--skip-build",
              description: "Skip the build step",
            },
            {
              name: "--timeout",
              description:
                "Timeout, in seconds, for the build compilation step",
              args: {
                name: "timeout",
              },
            },
          ],
        },
        {
          name: "init",
          description: "Initialize a new Compute package locally",
          options: [
            {
              name: ["-a", "--author"],
              description: "Author(s) of the package",
              isRepeatable: true,
              args: {
                name: "author",
              },
            },
            {
              name: "--branch",
              description:
                "Git branch name to clone from package template repository",
              hidden: true,
              args: {
                name: "branch",
              },
            },
            {
              name: ["-p", "--directory"],
              description:
                "Destination to write the new package, defaulting to the current directory",
              args: {
                name: "directory",
                template: "folders",
              },
            },
            {
              name: ["-f", "--from"],
              description:
                "One of: (a) a starter kit identifier (starter-kit/<lang>/<name>); (b) a local project directory, a Git repository URL, or a URL referencing a .zip/.tar.gz file containing a package template; or (c) the service ID of a service created from a starter kit",
              args: {
                name: "from",
              },
            },
            {
              name: ["-l", "--language"],
              description: "Language of the package",
              args: {
                name: "language",
                suggestions: [
                  "rust",
                  "javascript",
                  "go",
                  "cpp",
                  "python",
                  "other",
                ],
              },
            },
            {
              name: "--tag",
              description:
                "Git tag name to clone from package template repository",
              hidden: true,
              args: {
                name: "tag",
              },
            },
          ],
        },
        {
          name: "install-tools",
          description:
            "Download and install the tools used by `compute` subcommands (currently the Viceroy binary used by `compute serve`)",
        },
        {
          name: "metadata",
          description: "Control what metadata is collected",
          options: [
            {
              name: "--disable",
              description: "Disable all metadata",
            },
            {
              name: "--disable-build",
              description:
                "Disable metadata for information regarding the time taken for builds and compilation processes",
            },
            {
              name: "--disable-machine",
              description:
                "Disable metadata for general, non-identifying system specifications (CPU, RAM, operating system)",
            },
            {
              name: "--disable-package",
              description:
                "Disable metadata for packages and libraries utilized in your source code",
            },
            {
              name: "--disable-script",
              description:
                "Disable metadata for script info from the fastly.toml manifest (i.e. [scripts] section)",
            },
            {
              name: "--enable",
              description: "Enable all metadata",
            },
            {
              name: "--enable-build",
              description:
                "Enable metadata for information regarding the time taken for builds and compilation processes",
            },
            {
              name: "--enable-machine",
              description:
                "Enable metadata for general, non-identifying system specifications (CPU, RAM, operating system)",
            },
            {
              name: "--enable-package",
              description:
                "Enable metadata for packages and libraries utilized in your source code",
            },
            {
              name: "--enable-script",
              description:
                "Enable metadata for script info from the fastly.toml manifest (i.e. [scripts] section)",
            },
          ],
        },
        {
          name: "pack",
          description:
            "Package a pre-compiled Wasm binary for a Fastly Compute service",
          options: [
            {
              name: ["-w", "--wasm-binary"],
              description: "Path to a pre-compiled Wasm binary",
              isRequired: true,
              args: {
                name: "wasm-binary",
                template: "filepaths",
              },
            },
          ],
        },
        {
          name: "publish",
          description: "Build and deploy a Compute package to a Fastly service",
          options: [
            {
              name: "--comment",
              description: "Human-readable comment",
              args: {
                name: "comment",
              },
            },
            {
              name: ["-C", "--dir"],
              description:
                "Project directory to build (default: current directory)",
              args: {
                name: "dir",
                template: "folders",
              },
            },
            {
              name: "--domain",
              description: "The name of the domain associated to the package",
              args: {
                name: "domain",
              },
            },
            {
              name: "--env",
              description:
                "The manifest environment config to use (e.g. 'stage' will attempt to read 'fastly.stage.toml')",
              args: {
                name: "env",
              },
            },
            {
              name: "--include-source",
              description: "Include source code in built package",
            },
            {
              name: "--language",
              description: "Language type",
              args: {
                name: "language",
              },
            },
            {
              name: "--metadata-disable",
              description: "Disable Wasm binary metadata annotations",
            },
            {
              name: "--metadata-filter-envvars",
              description:
                "Redact specified environment variables from [scripts.env_vars] using comma-separated list",
              args: {
                name: "metadata-filter-envvars",
              },
            },
            {
              name: "--metadata-show",
              description: "Inspect the Wasm binary metadata",
            },
            {
              name: "--no-default-domain",
              description: "Skip default domain creation",
            },
            {
              name: ["-p", "--package"],
              description: "Path to a package tar.gz",
              args: {
                name: "package",
                template: "filepaths",
              },
            },
            {
              name: "--package-name",
              description: "Package name",
              args: {
                name: "package-name",
              },
            },
            serviceIdOption,
            serviceNameOption,
            {
              name: "--status-check-code",
              description:
                "Set the expected status response for the service availability check to the root path",
              args: {
                name: "status-check-code",
              },
            },
            {
              name: "--status-check-off",
              description: "Disable the service availability check",
            },
            {
              name: "--status-check-path",
              description:
                "Specify the URL path for the service availability check",
              args: {
                name: "status-check-path",
                default: "/",
              },
            },
            {
              name: "--status-check-timeout",
              description:
                "Set a timeout (in seconds) for the service availability check",
              args: {
                name: "status-check-timeout",
                default: "120",
              },
            },
            {
              name: "--timeout",
              description:
                "Timeout, in seconds, for the build compilation step",
              args: {
                name: "timeout",
              },
            },
            {
              name: "--version",
              description:
                "'latest', 'active', 'staged', or the number of a specific Fastly service version (default: the active version, or the latest version if none is active)",
              args: {
                name: "version",
              },
            },
          ],
        },
        {
          name: "serve",
          description: "Build and run a Compute package locally",
          options: [
            {
              name: "--addr",
              description: "The IPv4 address and port to listen on",
              args: {
                name: "addr",
                default: "127.0.0.1:7676",
              },
            },
            {
              name: "--debug",
              description: "Run the server in Debug Adapter mode",
              hidden: true,
            },
            {
              name: ["-C", "--dir"],
              description:
                "Project directory to build (default: current directory)",
              args: {
                name: "dir",
                template: "folders",
              },
            },
            {
              name: "--env",
              description:
                "The manifest environment config to use (e.g. 'stage' will attempt to read 'fastly.stage.toml')",
              args: {
                name: "env",
              },
            },
            {
              name: "--experimental-enable-pushpin",
              description:
                "Enable experimental Pushpin support for local testing of Fanout",
            },
            {
              name: "--experimental-websockets-passthrough",
              description:
                "Enable WebSocket passthrough support for local testing of WebSockets. Overrides 'local_server.websockets_passthrough.enable' from 'fastly.toml', and if not specified there, defaults to true",
            },
            {
              name: "--file",
              description:
                "The Wasm file to run (causes build process to be skipped)",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: "--include-source",
              description: "Include source code in built package",
            },
            {
              name: "--language",
              description: "Language type",
              args: {
                name: "language",
              },
            },
            {
              name: "--metadata-disable",
              description: "Disable Wasm binary metadata annotations",
            },
            {
              name: "--metadata-filter-envvars",
              description:
                "Redact specified environment variables from [scripts.env_vars] using comma-separated list",
              args: {
                name: "metadata-filter-envvars",
              },
            },
            {
              name: "--metadata-show",
              description: "Inspect the Wasm binary metadata",
            },
            {
              name: "--package-name",
              description: "Package name",
              args: {
                name: "package-name",
              },
            },
            {
              name: "--profile-guest",
              description:
                "Profile the Wasm guest under Viceroy (requires Viceroy 0.9.1 or higher). View profiles at https://profiler.firefox.com/",
            },
            {
              name: "--profile-guest-dir",
              description:
                "The directory where the per-request profiles are saved to. Defaults to guest-profiles",
              args: {
                name: "profile-guest-dir",
                template: "folders",
              },
            },
            {
              name: "--pushpin-path",
              description:
                "The path to a user installed version of the Pushpin runner binary",
              args: {
                name: "pushpin-path",
                template: "filepaths",
              },
            },
            {
              name: "--pushpin-proxy-port",
              description:
                "The port to run the Pushpin runner on. Overrides 'local_server.pushpin.proxy_port' from 'fastly.toml', and if not specified there, defaults to 7677",
              args: {
                name: "pushpin-proxy-port",
              },
            },
            {
              name: "--pushpin-publish-port",
              description:
                "The port to run the Pushpin publish handler on. Overrides 'local_server.pushpin.publish_port' from 'fastly.toml', and if not specified there, defaults to 5561",
              args: {
                name: "pushpin-publish-port",
              },
            },
            {
              name: "--skip-build",
              description: "Skip the build step",
            },
            {
              name: "--timeout",
              description:
                "Timeout, in seconds, for the build compilation step",
              args: {
                name: "timeout",
              },
            },
            {
              name: "--viceroy-args",
              description:
                "Additional arguments to pass to the Viceroy binary, separated by space",
              args: {
                name: "viceroy-args",
              },
            },
            {
              name: "--viceroy-check",
              description:
                "Force the CLI to check for a newer version of the Viceroy binary",
            },
            {
              name: "--viceroy-path",
              description:
                "The path to a user installed version of the Viceroy binary",
              args: {
                name: "viceroy-path",
                template: "filepaths",
              },
            },
            {
              name: "--watch",
              description:
                "Watch for file changes, then rebuild project and restart local server",
            },
            {
              name: "--watch-dir",
              description:
                "The directory to watch files from (can be relative or absolute). Defaults to current directory",
              args: {
                name: "watch-dir",
                template: "folders",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update a package on a Fastly Compute service version",
          options: [
            autocloneOption,
            {
              name: ["-p", "--package"],
              description: "Path to a package tar.gz",
              args: {
                name: "package",
                template: "filepaths",
              },
            },
            serviceIdOption,
            serviceNameOption,
            versionOption,
          ],
        },
        {
          name: "validate",
          description: "Validate a Compute package",
          options: [
            {
              name: "--env",
              description:
                "The manifest environment config to validate (e.g. 'stage' will attempt to read 'fastly.stage.toml' inside the package)",
              args: {
                name: "env",
              },
            },
            {
              name: ["-p", "--package"],
              description: "Path to a package tar.gz",
              args: {
                name: "package",
                template: "filepaths",
              },
            },
          ],
        },
      ],
    },
    {
      name: "config",
      description: "Display the Fastly CLI configuration",
      options: [
        {
          name: ["-l", "--location"],
          description: "Print the location of the CLI configuration file",
        },
        {
          name: ["-r", "--reset"],
          description:
            "Reset the config to a version compatible with the current CLI version",
        },
      ],
    },
    {
      name: "config-store",
      description: "Manipulate Fastly Config Stores",
      subcommands: [
        {
          name: "create",
          description: "Create a new config store",
          options: [
            jsonOption,
            {
              name: ["-n", "--name"],
              description: "Store name",
              isRequired: true,
              args: {
                name: "name",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a config store",
          options: [jsonOption, storeIdOption],
        },
        {
          name: ["describe", "get"],
          description: "Retrieve a single config store",
          options: [
            jsonOption,
            {
              name: ["-m", "--metadata"],
              description: "Include config store metadata",
            },
            storeIdOption,
          ],
        },
        {
          name: "list",
          description: "List config stores",
          options: [jsonOption],
        },
        {
          name: "list-services",
          description: "List config store's services",
          options: [jsonOption, storeIdOption],
        },
        {
          name: "update",
          description: "Update a config store",
          options: [
            jsonOption,
            {
              name: ["-n", "--name"],
              description: "New name for the config store",
              isRequired: true,
              args: {
                name: "name",
              },
            },
            storeIdOption,
          ],
        },
      ],
    },
    {
      name: "config-store-entry",
      description: "Manipulate Fastly Config Store items",
      subcommands: [
        {
          name: ["create", "insert"],
          description: "Create a new config store item",
          options: [
            jsonOption,
            {
              name: ["-k", "--key"],
              description: "Item name",
              isRequired: true,
              args: {
                name: "key",
              },
            },
            {
              name: "--stdin",
              description:
                "Read item value from STDIN. If set, --value will be ignored",
            },
            storeIdOption,
            {
              name: "--value",
              description: "Item value. Required unless --stdin is set",
              args: {
                name: "value",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a config store item",
          options: [
            {
              name: ["-a", "--all"],
              description: "Delete all entries within the store",
            },
            {
              name: ["-b", "--batch-size"],
              description:
                "Key batch processing size (ignored when set without the --all flag)",
              args: {
                name: "batch-size",
              },
            },
            {
              name: ["-c", "--concurrency"],
              description:
                "Control thread pool size (ignored when set without the --all flag)",
              args: {
                name: "concurrency",
              },
            },
            jsonOption,
            {
              name: ["-k", "--key"],
              description: "Item name",
              args: {
                name: "key",
              },
            },
            storeIdOption,
          ],
        },
        {
          name: ["describe", "get"],
          description: "Retrieve a single config store item",
          options: [
            jsonOption,
            {
              name: ["-k", "--key"],
              description: "Item name",
              isRequired: true,
              args: {
                name: "key",
              },
            },
            storeIdOption,
          ],
        },
        {
          name: "list",
          description: "List config store items",
          options: [jsonOption, storeIdOption],
        },
        {
          name: "update",
          description: "Update a config store item",
          options: [
            jsonOption,
            {
              name: ["-k", "--key"],
              description: "Item name",
              isRequired: true,
              args: {
                name: "key",
              },
            },
            {
              name: "--stdin",
              description:
                "Read item value from STDIN. If set, --value will be ignored",
            },
            storeIdOption,
            {
              name: ["-u", "--upsert"],
              description:
                "If true, insert or update an entry in a config store. Otherwise, only update",
            },
            {
              name: "--value",
              description: "Item value. Required unless --stdin is set",
              args: {
                name: "value",
              },
            },
          ],
        },
      ],
    },
    {
      name: "dashboard",
      description: "Manipulate Fastly Custom Dashboards",
      subcommands: [
        {
          name: ["create", "add"],
          description: "Create a custom dashboard",
          options: [
            {
              name: "--description",
              description: "A short description of the dashboard",
              args: {
                name: "description",
              },
            },
            jsonOption,
            {
              name: ["-n", "--name"],
              description: "A human-readable name for the dashboard",
              isRequired: true,
              args: {
                name: "name",
              },
            },
          ],
        },
        {
          name: ["delete", "remove"],
          description: "Delete a custom dashboard",
          options: [
            {
              name: "--id",
              description: "ID of the Dashboard to delete",
              isRequired: true,
              args: {
                name: "id",
              },
            },
            jsonOption,
          ],
        },
        {
          name: ["describe", "get"],
          description: "Show detailed information about a custom dashboard",
          options: [
            {
              name: "--id",
              description: "ID of the Dashboard to describe",
              isRequired: true,
              args: {
                name: "id",
              },
            },
            jsonOption,
          ],
        },
        {
          name: "item",
          description: "Manipulate Fastly Custom Dashboard Items",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create a custom dashboard item",
              options: [
                {
                  name: "--calculation-method",
                  description:
                    "The aggregation function to apply to the dataset",
                  args: {
                    name: "calculation-method",
                    suggestions: ["avg", "sum", "min", "max", "latest", "p95"],
                  },
                },
                {
                  name: "--dashboard-id",
                  description: "ID of the Dashboard to contain the item",
                  isRequired: true,
                  args: {
                    name: "dashboard-id",
                  },
                },
                {
                  name: "--format",
                  description: "The units to use to format the data",
                  args: {
                    name: "format",
                    suggestions: [
                      "number",
                      "bytes",
                      "percent",
                      "requests",
                      "responses",
                      "seconds",
                      "milliseconds",
                      "ratio",
                      "bitrate",
                    ],
                  },
                },
                jsonOption,
                {
                  name: "--metric",
                  description:
                    "The metrics to visualize. Valid options depend on the selected data source. Set flag multiple times to include multiple metrics",
                  isRequired: true,
                  isRepeatable: true,
                  args: {
                    name: "metric",
                  },
                },
                {
                  name: "--plot-type",
                  description: "The type of chart to display",
                  isRequired: true,
                  args: {
                    name: "plot-type",
                    suggestions: ["bar", "donut", "line", "single-metric"],
                  },
                },
                {
                  name: "--source-type",
                  description: "The source of the data to display",
                  isRequired: true,
                  args: {
                    name: "source-type",
                    suggestions: ["stats.domain", "stats.edge", "stats.origin"],
                  },
                },
                {
                  name: "--span",
                  description:
                    'The number of columns for the dashboard item to span. Dashboards are rendered on a 12-column grid on "desktop" screen sizes',
                  args: {
                    name: "span",
                    default: "4",
                  },
                },
                {
                  name: "--subtitle",
                  description:
                    "A human-readable subtitle for the dashboard item. Often a description of the visualization",
                  isRequired: true,
                  args: {
                    name: "subtitle",
                  },
                },
                {
                  name: "--title",
                  description: "A human-readable title for the dashboard item",
                  isRequired: true,
                  args: {
                    name: "title",
                  },
                },
                {
                  name: "--visualization-type",
                  description:
                    'The type of visualization to display. Currently, only "chart" is supported',
                  args: {
                    name: "visualization-type",
                    suggestions: ["chart"],
                    default: "chart",
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a custom dashboard item",
              options: [
                {
                  name: "--dashboard-id",
                  description: "ID of the Dashboard containing the item",
                  isRequired: true,
                  args: {
                    name: "dashboard-id",
                  },
                },
                {
                  name: "--item-id",
                  description: "ID of the Item to be deleted",
                  isRequired: true,
                  args: {
                    name: "item-id",
                  },
                },
                jsonOption,
              ],
            },
            {
              name: "describe",
              description: "Describe a custom dashboard item",
              options: [
                {
                  name: "--dashboard-id",
                  description: "ID of the Dashboard containing the item",
                  isRequired: true,
                  args: {
                    name: "dashboard-id",
                  },
                },
                {
                  name: "--item-id",
                  description: "ID of the Item to be described",
                  isRequired: true,
                  args: {
                    name: "item-id",
                  },
                },
                jsonOption,
              ],
            },
            {
              name: "update",
              description: "Update a custom dashboard item",
              options: [
                {
                  name: "--calculation-method",
                  description:
                    "The aggregation function to apply to the dataset",
                  args: {
                    name: "calculation-method",
                    suggestions: ["avg", "sum", "min", "max", "latest", "p95"],
                  },
                },
                {
                  name: "--dashboard-id",
                  description: "ID of the Dashboard containing the item",
                  isRequired: true,
                  args: {
                    name: "dashboard-id",
                  },
                },
                {
                  name: "--format",
                  description: "The units to use to format the data",
                  args: {
                    name: "format",
                    suggestions: [
                      "number",
                      "bytes",
                      "percent",
                      "requests",
                      "responses",
                      "seconds",
                      "milliseconds",
                      "ratio",
                      "bitrate",
                    ],
                  },
                },
                {
                  name: "--item-id",
                  description: "ID of the Item to be updated",
                  isRequired: true,
                  args: {
                    name: "item-id",
                  },
                },
                jsonOption,
                {
                  name: "--metric",
                  description:
                    "The metrics to visualize. Valid options depend on the selected data source. Set flag multiple times to include multiple metrics",
                  isRepeatable: true,
                  args: {
                    name: "metric",
                  },
                },
                {
                  name: "--plot-type",
                  description: "The type of chart to display",
                  args: {
                    name: "plot-type",
                    suggestions: ["bar", "donut", "line", "single-metric"],
                  },
                },
                {
                  name: "--source-type",
                  description: "The source of the data to display",
                  args: {
                    name: "source-type",
                    suggestions: ["stats.domain", "stats.edge", "stats.origin"],
                  },
                },
                {
                  name: "--span",
                  description:
                    'The number of columns for the dashboard item to span. Dashboards are rendered on a 12-column grid on "desktop" screen sizes',
                  args: {
                    name: "span",
                  },
                },
                {
                  name: "--subtitle",
                  description:
                    "A human-readable subtitle for the dashboard item. Often a description of the visualization",
                  args: {
                    name: "subtitle",
                  },
                },
                {
                  name: "--title",
                  description: "A human-readable title for the dashboard item",
                  args: {
                    name: "title",
                  },
                },
                {
                  name: "--visualization-type",
                  description:
                    'The type of visualization to display. Currently, only "chart" is supported',
                  args: {
                    name: "visualization-type",
                    suggestions: ["chart"],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "list",
          description: "List custom dashboards",
          options: [
            {
              name: "--cursor",
              description:
                "Pagination cursor (Use 'next_cursor' value from list output)",
              args: {
                name: "cursor",
              },
            },
            jsonOption,
            {
              name: "--limit",
              description: "Maximum number of items to list",
              args: {
                name: "limit",
              },
            },
            {
              name: "--order",
              description: "Sort by one of the following [asc, desc]",
              args: {
                name: "order",
              },
            },
            {
              name: "--sort",
              description:
                "Sort by one of the following [name, created_at, updated_at]",
              args: {
                name: "sort",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update a custom dashboard",
          options: [
            {
              name: "--description",
              description: "A short description of the dashboard",
              args: {
                name: "description",
              },
            },
            {
              name: "--id",
              description: "ID of the Dashboard to update",
              isRequired: true,
              args: {
                name: "id",
              },
            },
            jsonOption,
            {
              name: ["-n", "--name"],
              description: "A human-readable name for the dashboard",
              args: {
                name: "name",
              },
            },
          ],
        },
      ],
    },
    {
      name: "dictionary",
      description:
        "Manipulate FastlyService Dictionaries (deprecated: use 'fastly service dictionary' instead)",
      hidden: true,
      deprecated: true,
      subcommands: serviceDictionarySubcommands,
    },
    {
      name: "dictionary-entry",
      description:
        "Manipulate Fastly edge dictionary items (deprecated: use 'fastly service dictionary-entry' instead)",
      hidden: true,
      deprecated: true,
      subcommands: serviceDictionaryEntrySubcommands,
    },
    {
      name: "dns",
      description: "Manipulate Fastly DNS Zones and TSIG Keys",
      subcommands: [
        {
          name: "tsig-key",
          description: "Manipulate Fastly TSIG Keys",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create a TSIG key",
              options: [
                {
                  name: "--algorithm",
                  description:
                    "The algorithm of the TSIG key. Valid values are: hmac-sha224, hmac-sha256, hmac-sha384, hmac-sha512",
                  isRequired: true,
                  args: {
                    name: "algorithm",
                    suggestions: [
                      "hmac-sha224",
                      "hmac-sha256",
                      "hmac-sha384",
                      "hmac-sha512",
                    ],
                  },
                },
                {
                  name: "--description",
                  description: "A freeform descriptive note",
                  args: {
                    name: "description",
                  },
                },
                jsonOption,
                {
                  name: "--name",
                  description: "The name of the TSIG key",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--secret",
                  description: "The Base64 encoded secret key",
                  isRequired: true,
                  args: {
                    name: "secret",
                  },
                },
              ],
            },
            {
              name: ["delete", "remove"],
              description: "Delete a TSIG key",
              options: [
                jsonOption,
                {
                  name: "--tsig-key-id",
                  description: "The TSIG key ID to delete",
                  isRequired: true,
                  args: {
                    name: "tsig-key-id",
                  },
                },
              ],
            },
            {
              name: ["describe", "get"],
              description: "Describe a TSIG key",
              options: [
                jsonOption,
                {
                  name: "--tsig-key-id",
                  description: "The TSIG key ID to describe",
                  isRequired: true,
                  args: {
                    name: "tsig-key-id",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List TSIG keys",
              options: [
                jsonOption,
                {
                  name: "--name",
                  description:
                    "Filter TSIG keys to only those containing the provided name",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--sort",
                  description:
                    "Order in which to list results. Valid values are: name_asc, name_desc, created_at_asc, created_at_desc",
                  args: {
                    name: "sort",
                    suggestions: [
                      "name_asc",
                      "name_desc",
                      "created_at_asc",
                      "created_at_desc",
                    ],
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update a TSIG key",
              options: [
                {
                  name: "--algorithm",
                  description:
                    "The algorithm of the TSIG key. Valid values are: hmac-sha224, hmac-sha256, hmac-sha384, hmac-sha512",
                  args: {
                    name: "algorithm",
                    suggestions: [
                      "hmac-sha224",
                      "hmac-sha256",
                      "hmac-sha384",
                      "hmac-sha512",
                    ],
                  },
                },
                {
                  name: "--description",
                  description: "A freeform descriptive note",
                  args: {
                    name: "description",
                  },
                },
                jsonOption,
                {
                  name: "--name",
                  description: "The name of the TSIG key",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--secret",
                  description: "The Base64 encoded secret key",
                  args: {
                    name: "secret",
                  },
                },
                {
                  name: "--tsig-key-id",
                  description: "The TSIG key ID to update",
                  isRequired: true,
                  args: {
                    name: "tsig-key-id",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "zone",
          description: "Manipulate Fastly DNS Zones",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create a DNS Zone",
              options: [
                {
                  name: "--description",
                  description: "A freeform descriptive note",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--inbound-tsig-key-id",
                  description:
                    "The ID of the TSIG key used to secure inbound zone transfers",
                  args: {
                    name: "inbound-tsig-key-id",
                  },
                },
                jsonOption,
                {
                  name: "--name",
                  description:
                    "The domain name for your zone. Must be in FQDN format",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--primary-address",
                  description:
                    "An IPv4 address for the Primary DNS Server (repeatable)",
                  isRepeatable: true,
                  args: {
                    name: "primary-address",
                  },
                },
                {
                  name: "--primary-description",
                  description:
                    "A description of the Primary DNS server (requires --primary-address, repeatable)",
                  isRepeatable: true,
                  args: {
                    name: "primary-description",
                  },
                },
              ],
            },
            {
              name: ["delete", "remove"],
              description: "Delete a DNS Zone",
              options: [
                jsonOption,
                {
                  name: "--zone-id",
                  description: "The zone ID to delete",
                  isRequired: true,
                  args: {
                    name: "zone-id",
                  },
                },
              ],
            },
            {
              name: ["describe", "get"],
              description: "Describe a DNS Zone",
              options: [
                jsonOption,
                {
                  name: "--zone-id",
                  description: "The zone ID to describe",
                  isRequired: true,
                  args: {
                    name: "zone-id",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List DNS Zones",
              options: [
                jsonOption,
                {
                  name: "--name",
                  description:
                    "Filter zones to only those containing the provided name",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--sort",
                  description:
                    "Order in which to list results. Valid values are: name_asc, name_desc, created_at_asc, created_at_desc",
                  args: {
                    name: "sort",
                    suggestions: [
                      "name_asc",
                      "name_desc",
                      "created_at_asc",
                      "created_at_desc",
                    ],
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update a DNS Zone",
              options: [
                {
                  name: "--description",
                  description: "A freeform descriptive note",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--inbound-tsig-key-id",
                  description:
                    "The ID of the TSIG key used to secure inbound zone transfers. Pass 'nil' to dissociate key",
                  args: {
                    name: "inbound-tsig-key-id",
                  },
                },
                jsonOption,
                {
                  name: "--primary-address",
                  description:
                    "An IPv4 address for the Primary DNS Server (repeatable)",
                  isRepeatable: true,
                  args: {
                    name: "primary-address",
                  },
                },
                {
                  name: "--primary-description",
                  description:
                    "A description of the Primary DNS server (requires --primary-address, repeatable)",
                  isRepeatable: true,
                  args: {
                    name: "primary-description",
                  },
                },
                {
                  name: "--zone-id",
                  description: "The zone ID to update",
                  isRequired: true,
                  args: {
                    name: "zone-id",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "domain",
      description: "Manipulate Fastly domains",
      subcommands: [
        {
          name: ["create", "add"],
          description: "Create a domain",
          options: [
            {
              name: "--description",
              description: "The description for the domain",
              args: {
                name: "description",
              },
            },
            {
              name: "--fqdn",
              description: "The fully qualified domain name",
              isRequired: true,
              args: {
                name: "fqdn",
              },
            },
            {
              name: ["-s", "--service-id"],
              description: "The service_id associated with your domain",
              args: {
                name: "service-id",
              },
            },
          ],
        },
        {
          name: ["delete", "remove"],
          description: "Delete a domain",
          options: [
            {
              name: "--domain-id",
              description: "The Domain Identifier (UUID)",
              isRequired: true,
              args: {
                name: "domain-id",
              },
            },
          ],
        },
        {
          name: ["describe", "get"],
          description: "Show detailed information about a domain",
          options: [
            {
              name: "--domain-id",
              description: "The Domain Identifier (UUID)",
              isRequired: true,
              args: {
                name: "domain-id",
              },
            },
            jsonOption,
          ],
        },
        {
          name: "list",
          description: "List domains",
          options: [
            {
              name: "--cursor",
              description:
                "Cursor value from the next_cursor field of a previous response, used to retrieve the next page",
              args: {
                name: "cursor",
              },
            },
            {
              name: "--fqdn",
              description:
                "Filters results by the FQDN using a fuzzy/partial match",
              args: {
                name: "fqdn",
              },
            },
            jsonOption,
            {
              name: "--limit",
              description: "Limit how many results are returned",
              args: {
                name: "limit",
              },
            },
            {
              name: ["-s", "--service-id"],
              description: "Filter results based on a service_id",
              args: {
                name: "service-id",
              },
            },
            {
              name: "--sort",
              description: "The order in which to list the results",
              args: {
                name: "sort",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update a domain",
          options: [
            {
              name: "--description",
              description: "The description for the domain",
              args: {
                name: "description",
              },
            },
            {
              name: "--domain-id",
              description: "The Domain Identifier (UUID)",
              isRequired: true,
              args: {
                name: "domain-id",
              },
            },
            {
              name: "--routing-config-id",
              description:
                "The Routing Config Identifier to associate with the domain. Pass 'nil' to remove the association",
              args: {
                name: "routing-config-id",
              },
            },
            {
              name: "--service-id",
              description:
                "The service_id associated with your domain (omit to unset)",
              args: {
                name: "service-id",
              },
            },
          ],
        },
      ],
    },
    {
      name: "healthcheck",
      description:
        "Manipulate Fastly service version healthchecks (deprecated: use 'fastly service healthcheck' instead)",
      hidden: true,
      deprecated: true,
      subcommands: serviceHealthcheckSubcommands,
    },
    {
      name: "imageoptimizerdefaults",
      description:
        "Manipulate Fastly Image Optimizer Defaults (deprecated: use 'fastly service imageoptimizer' instead)",
      hidden: true,
      deprecated: true,
      subcommands: serviceImageoptimizerSubcommands,
    },
    {
      name: "install",
      description: "Install the specified version of the CLI",
      args: {
        name: "version",
        description: "CLI release version to install (e.g. 10.8.0)",
      },
    },
    {
      name: "integration",
      description: "Manage Fastly notification integrations",
      subcommands: [
        {
          name: "datadog",
          description: "Manage Datadog notification integrations",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create a Datadog notification integration",
              options: [
                {
                  name: "--api-key",
                  description: "Datadog API key",
                  isRequired: true,
                  args: {
                    name: "api-key",
                  },
                },
                descriptionOption,
                jsonOption,
                nameOption,
                {
                  name: "--site",
                  description:
                    'Datadog site, e.g. "datadoghq.eu" (defaults to the US site)',
                  args: {
                    name: "site",
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update a Datadog notification integration",
              options: [
                {
                  name: "--api-key",
                  description: "Datadog API key",
                  args: {
                    name: "api-key",
                  },
                },
                descriptionOption,
                jsonOption,
                {
                  name: ["-n", "--name"],
                  description: "The name of the integration",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--site",
                  description:
                    'Datadog site, e.g. "datadoghq.eu" (defaults to the US site)',
                  args: {
                    name: "site",
                  },
                },
              ],
              args: {
                name: "id",
                description: "Integration ID",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a notification integration",
          options: [jsonOption],
          args: {
            name: "id",
            description: "Integration ID",
          },
        },
        {
          name: ["describe", "get"],
          description: "Retrieve a single notification integration",
          options: [jsonOption],
          args: {
            name: "id",
            description: "Integration ID",
          },
        },
        {
          name: "jiraissue",
          description: "Manage Jira Issue notification integrations",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create a Jira Issue notification integration",
              options: [
                {
                  name: "--api-token",
                  description: "The Jira API token",
                  isRequired: true,
                  args: {
                    name: "api-token",
                  },
                },
                {
                  name: "--base-url",
                  description: "The base URL of the Jira instance",
                  isRequired: true,
                  args: {
                    name: "base-url",
                  },
                },
                descriptionOption,
                {
                  name: "--issue-type",
                  description: "The type of Jira issue to create",
                  isRequired: true,
                  args: {
                    name: "issue-type",
                  },
                },
                jsonOption,
                nameOption,
                {
                  name: "--project-key",
                  description:
                    "The key of the Jira project where issues will be created",
                  isRequired: true,
                  args: {
                    name: "project-key",
                  },
                },
                {
                  name: "--username",
                  description:
                    "The Jira username (email address) used to authenticate",
                  isRequired: true,
                  args: {
                    name: "username",
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update a Jira Issue notification integration",
              options: [
                {
                  name: "--api-token",
                  description: "The Jira API token",
                  args: {
                    name: "api-token",
                  },
                },
                {
                  name: "--base-url",
                  description: "The base URL of the Jira instance",
                  args: {
                    name: "base-url",
                  },
                },
                descriptionOption,
                {
                  name: "--issue-type",
                  description: "The type of Jira issue to create",
                  args: {
                    name: "issue-type",
                  },
                },
                jsonOption,
                {
                  name: ["-n", "--name"],
                  description: "The name of the integration",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--project-key",
                  description:
                    "The key of the Jira project where issues will be created",
                  args: {
                    name: "project-key",
                  },
                },
                {
                  name: "--username",
                  description:
                    "The Jira username (email address) used to authenticate",
                  args: {
                    name: "username",
                  },
                },
              ],
              args: {
                name: "id",
                description: "Integration ID",
              },
            },
          ],
        },
        {
          name: "jsm",
          description:
            "Manage Jira Service Management notification integrations",
          subcommands: [
            {
              name: ["create", "add"],
              description:
                "Create a Jira Service Management notification integration",
              options: [
                {
                  name: "--api-key",
                  description: "Jira Service Management API key",
                  isRequired: true,
                  args: {
                    name: "api-key",
                  },
                },
                descriptionOption,
                jsonOption,
                nameOption,
              ],
            },
            {
              name: "update",
              description:
                "Update a Jira Service Management notification integration",
              options: [
                {
                  name: "--api-key",
                  description: "Jira Service Management API key",
                  args: {
                    name: "api-key",
                  },
                },
                descriptionOption,
                jsonOption,
                {
                  name: ["-n", "--name"],
                  description: "The name of the integration",
                  args: {
                    name: "name",
                  },
                },
              ],
              args: {
                name: "id",
                description: "Integration ID",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List notification integrations",
          options: [
            {
              name: "--cursor",
              description: "Pagination cursor from a previous response's meta",
              args: {
                name: "cursor",
              },
            },
            jsonOption,
            {
              name: "--limit",
              description: "Maximum number of items to return",
              args: {
                name: "limit",
              },
            },
            {
              name: "--sort",
              description: "Field to sort results by",
              args: {
                name: "sort",
              },
            },
            {
              name: "--type",
              description: "Filter integrations by type",
              args: {
                name: "type",
                suggestions: [
                  "datadog",
                  "jiraissue",
                  "jsm",
                  "mail",
                  "msteams",
                  "newrelic",
                  "opsgenie",
                  "pagerduty",
                  "slack",
                  "splunkoncall",
                  "webhook",
                ],
              },
            },
          ],
        },
        {
          name: "list-types",
          description: "List supported notification integration types",
          options: [jsonOption],
        },
        {
          name: "mail",
          description: "Manage Mailing List notification integrations",
          subcommands: [
            {
              name: "confirm",
              description: "Send a mailing list confirmation email",
              options: [jsonOption],
              args: {
                name: "address",
                description:
                  "The mailing list address to send the confirmation email to",
              },
            },
            {
              name: ["create", "add"],
              description: "Create a Mailing List notification integration",
              options: [
                {
                  name: "--address",
                  description: "The mailing list address to notify",
                  isRequired: true,
                  args: {
                    name: "address",
                  },
                },
                descriptionOption,
                jsonOption,
                nameOption,
              ],
            },
            {
              name: "update",
              description: "Update a Mailing List notification integration",
              options: [
                {
                  name: "--address",
                  description: "The mailing list address to notify",
                  isRequired: true,
                  args: {
                    name: "address",
                  },
                },
                descriptionOption,
                jsonOption,
                {
                  name: ["-n", "--name"],
                  description: "The name of the integration",
                  args: {
                    name: "name",
                  },
                },
              ],
              args: {
                name: "id",
                description: "Integration ID",
              },
            },
          ],
        },
        {
          name: "msteams",
          description: "Manage Microsoft Teams notification integrations",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create a Microsoft Teams notification integration",
              options: [
                descriptionOption,
                jsonOption,
                nameOption,
                {
                  name: "--webhook",
                  description: "The Microsoft Teams incoming webhook URL",
                  isRequired: true,
                  args: {
                    name: "webhook",
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update a Microsoft Teams notification integration",
              options: [
                descriptionOption,
                jsonOption,
                {
                  name: ["-n", "--name"],
                  description: "The name of the integration",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--webhook",
                  description: "The Microsoft Teams incoming webhook URL",
                  isRequired: true,
                  args: {
                    name: "webhook",
                  },
                },
              ],
              args: {
                name: "id",
                description: "Integration ID",
              },
            },
          ],
        },
        {
          name: "newrelic",
          description: "Manage New Relic notification integrations",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create a New Relic notification integration",
              options: [
                {
                  name: "--account-id",
                  description: "The New Relic account ID",
                  isRequired: true,
                  args: {
                    name: "account-id",
                  },
                },
                {
                  name: "--api-key",
                  description: "The New Relic API key",
                  isRequired: true,
                  args: {
                    name: "api-key",
                  },
                },
                descriptionOption,
                jsonOption,
                nameOption,
              ],
            },
            {
              name: "update",
              description: "Update a New Relic notification integration",
              options: [
                {
                  name: "--account-id",
                  description: "The New Relic account ID",
                  isRequired: true,
                  args: {
                    name: "account-id",
                  },
                },
                {
                  name: "--api-key",
                  description: "The New Relic API key",
                  isRequired: true,
                  args: {
                    name: "api-key",
                  },
                },
                descriptionOption,
                jsonOption,
                {
                  name: ["-n", "--name"],
                  description: "The name of the integration",
                  args: {
                    name: "name",
                  },
                },
              ],
              args: {
                name: "id",
                description: "Integration ID",
              },
            },
          ],
        },
        {
          name: "opsgenie",
          description: "Manage OpsGenie notification integrations",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create an OpsGenie notification integration",
              options: [
                {
                  name: "--api-key",
                  description: "OpsGenie API key",
                  isRequired: true,
                  args: {
                    name: "api-key",
                  },
                },
                descriptionOption,
                jsonOption,
                nameOption,
              ],
            },
            {
              name: "update",
              description: "Update an OpsGenie notification integration",
              options: [
                {
                  name: "--api-key",
                  description: "OpsGenie API key",
                  args: {
                    name: "api-key",
                  },
                },
                descriptionOption,
                jsonOption,
                {
                  name: ["-n", "--name"],
                  description: "The name of the integration",
                  args: {
                    name: "name",
                  },
                },
              ],
              args: {
                name: "id",
                description: "Integration ID",
              },
            },
          ],
        },
        {
          name: "pagerduty",
          description: "Manage PagerDuty notification integrations",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create a PagerDuty notification integration",
              options: [
                descriptionOption,
                jsonOption,
                {
                  name: "--key",
                  description: "The PagerDuty integration key",
                  isRequired: true,
                  args: {
                    name: "key",
                  },
                },
                nameOption,
              ],
            },
            {
              name: "update",
              description: "Update a PagerDuty notification integration",
              options: [
                descriptionOption,
                jsonOption,
                {
                  name: "--key",
                  description: "The PagerDuty integration key",
                  isRequired: true,
                  args: {
                    name: "key",
                  },
                },
                {
                  name: ["-n", "--name"],
                  description: "The name of the integration",
                  args: {
                    name: "name",
                  },
                },
              ],
              args: {
                name: "id",
                description: "Integration ID",
              },
            },
          ],
        },
        {
          name: "slack",
          description: "Manage Slack notification integrations",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create a Slack notification integration",
              options: [
                descriptionOption,
                jsonOption,
                nameOption,
                {
                  name: "--webhook",
                  description: "The Slack incoming webhook URL",
                  isRequired: true,
                  args: {
                    name: "webhook",
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update a Slack notification integration",
              options: [
                descriptionOption,
                jsonOption,
                {
                  name: ["-n", "--name"],
                  description: "The name of the integration",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--webhook",
                  description: "The Slack incoming webhook URL",
                  isRequired: true,
                  args: {
                    name: "webhook",
                  },
                },
              ],
              args: {
                name: "id",
                description: "Integration ID",
              },
            },
          ],
        },
        {
          name: "splunkoncall",
          description: "Manage Splunk On-Call notification integrations",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create a Splunk On-Call notification integration",
              options: [
                descriptionOption,
                jsonOption,
                nameOption,
                {
                  name: "--url",
                  description: "The Splunk On-Call webhook URL",
                  isRequired: true,
                  args: {
                    name: "url",
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update a Splunk On-Call notification integration",
              options: [
                descriptionOption,
                jsonOption,
                {
                  name: ["-n", "--name"],
                  description: "The name of the integration",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--url",
                  description: "The Splunk On-Call webhook URL",
                  args: {
                    name: "url",
                  },
                },
              ],
              args: {
                name: "id",
                description: "Integration ID",
              },
            },
          ],
        },
        {
          name: "webhook",
          description: "Manage generic Webhook notification integrations",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create a Webhook notification integration",
              options: [
                descriptionOption,
                jsonOption,
                nameOption,
                {
                  name: "--webhook",
                  description: "The webhook URL to notify",
                  isRequired: true,
                  args: {
                    name: "webhook",
                  },
                },
              ],
            },
            {
              name: "get-signing-key",
              description:
                "Get the signing key for a Webhook notification integration",
              options: [jsonOption],
              args: {
                name: "id",
                description: "Integration ID",
              },
            },
            {
              name: "rotate-signing-key",
              description:
                "Rotate the signing key for a Webhook notification integration",
              options: [jsonOption],
              args: {
                name: "id",
                description: "Integration ID",
              },
            },
            {
              name: "update",
              description: "Update a Webhook notification integration",
              options: [
                descriptionOption,
                jsonOption,
                {
                  name: ["-n", "--name"],
                  description: "The name of the integration",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--webhook",
                  description: "The webhook URL to notify",
                  isRequired: true,
                  args: {
                    name: "webhook",
                  },
                },
              ],
              args: {
                name: "id",
                description: "Integration ID",
              },
            },
          ],
        },
      ],
    },
    {
      name: "ip-list",
      description: "List Fastly's public IPs",
    },
    {
      name: ["kv-store", "object-store"],
      description: "Manipulate Fastly KV Stores",
      subcommands: [
        {
          name: "create",
          description: "Create a KV Store",
          options: [
            jsonOption,
            {
              name: ["-l", "--location"],
              description: "Regional location of KV Store",
              args: {
                name: "location",
                suggestions: ["US", "EU", "ASIA", "AUS"],
              },
            },
            {
              name: ["-n", "--name"],
              description: "Name of KV Store",
              isRequired: true,
              args: {
                name: "name",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a KV Store",
          options: [
            {
              name: ["-a", "--all"],
              description: "Delete all entries within the store",
            },
            {
              name: ["-r", "--concurrency"],
              description:
                "The thread pool size (ignored when set without the --all flag)",
              args: {
                name: "concurrency",
              },
            },
            jsonOption,
            {
              name: ["-m", "--max-errors"],
              description:
                "The number of errors to accept before stopping (ignored when set without the --all flag)",
              args: {
                name: "max-errors",
              },
            },
            storeIdOption,
          ],
        },
        {
          name: ["describe", "get"],
          description: "Describe a KV Store",
          options: [jsonOption, storeIdOption],
        },
        {
          name: "list",
          description: "List KV Stores",
          options: [jsonOption],
        },
      ],
    },
    {
      name: "kv-store-entry",
      description: "Manipulate Fastly KV Store keys",
      subcommands: [
        {
          name: ["create", "insert"],
          description: "Insert a key-value pair",
          options: [
            {
              name: "--add",
              description:
                "Limit the operation to adding a new item. If an existing item with the specified key exists, the operation will fail (default: false)",
            },
            {
              name: "--append",
              description:
                "If an item with the specified key exists, the value provided in the operation is appended to the existing value instead of replacing it (default: false)",
            },
            {
              name: "--background-fetch",
              description:
                "If set to true, the new value for the item will not be immediately visible to other users of the KV store; they will receive the existing (stale) value while the platform updates cached copies. Setting this to true ensures that other users of the KV store will receive responses to 'get' operations for this item quickly, although they will be slightly out of date (default: false)",
            },
            {
              name: "--dir",
              description:
                "Path to a directory containing individual files where the filename is the key and the file contents is the value",
              args: {
                name: "dir",
                template: "folders",
              },
            },
            {
              name: "--dir-allow-hidden",
              description:
                "Allow hidden files (e.g. dot files) to be included (skipped by default)",
            },
            {
              name: "--dir-concurrency",
              description:
                "Limit the number of concurrent network resources allocated",
              args: {
                name: "dir-concurrency",
                default: "50",
              },
            },
            {
              name: "--file",
              description:
                'Path to a file containing individual JSON objects (e.g., {"key":"...","value":"base64_encoded_value"}) separated by new-line delimiter',
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: "--if-generation-match",
              description:
                "Value which must match the current generation marker in an item for an update operation to proceed",
              args: {
                name: "if-generation-match",
              },
            },
            jsonOption,
            {
              name: ["-k", "--key"],
              description: "Key name",
              args: {
                name: "key",
              },
            },
            {
              name: "--metadata",
              description:
                "An arbitrary data field which can contain up to 2000 bytes of data",
              args: {
                name: "metadata",
              },
            },
            {
              name: "--prepend",
              description:
                "If an item with the specified key exists, the value provided in the operation is prepended to the existing value instead of replacing it (Default: false)",
            },
            {
              name: "--stdin",
              description: "Read new-line separated JSON stream via STDIN",
            },
            storeIdOption,
            {
              name: "--value",
              description: "Value",
              args: {
                name: "value",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete one, multiple, or all keys",
          options: [
            {
              name: ["-a", "--all"],
              description: "Delete all entries within the store",
            },
            {
              name: ["-r", "--concurrency"],
              description:
                "The thread pool size (ignored when set without the --all flag)",
              args: {
                name: "concurrency",
              },
            },
            {
              name: "--force",
              description:
                "Return a successful result from a 'delete' operation even if the specified key was not found",
            },
            {
              name: "--if-generation-match",
              description:
                "Value which must match the current generation marker in an item for a delete operation to proceed",
              args: {
                name: "if-generation-match",
              },
            },
            jsonOption,
            {
              name: ["-k", "--key"],
              description: "Key name",
              args: {
                name: "key",
              },
            },
            {
              name: ["-m", "--max-errors"],
              description:
                "The number of errors to accept before stopping (ignored when set without the --all flag)",
              args: {
                name: "max-errors",
              },
            },
            {
              name: "--prefix",
              description: "Delete items whose keys match this prefix",
              args: {
                name: "prefix",
              },
            },
            storeIdOption,
          ],
        },
        {
          name: "describe",
          description: "Get the associated attributes of a key",
          options: [
            jsonOption,
            {
              name: ["-k", "--key"],
              description: "Key name",
              isRequired: true,
              args: {
                name: "key",
              },
            },
            storeIdOption,
          ],
        },
        {
          name: "get",
          description: "Get the value associated with a key",
          options: [
            {
              name: "--if-generation-match",
              description:
                "Compares if the provided generation marker matches that of the object",
              args: {
                name: "if-generation-match",
              },
            },
            jsonOption,
            {
              name: ["-k", "--key"],
              description: "Key name",
              isRequired: true,
              args: {
                name: "key",
              },
            },
            storeIdOption,
          ],
        },
        {
          name: "list",
          description: "List keys",
          options: [
            {
              name: "--consistency",
              description:
                "Determines accuracy of results. i.e. 'eventual' uses caching to improve performance",
              args: {
                name: "consistency",
                suggestions: ["eventual", "strong"],
                default: "strong",
              },
            },
            jsonOption,
            {
              name: "--prefix",
              description:
                "Restrict results to items whose keys match this prefix",
              args: {
                name: "prefix",
              },
            },
            storeIdOption,
          ],
        },
      ],
    },
    {
      name: "log-tail",
      description: "Tail Compute logs",
      options: [
        {
          name: "--from",
          description: "From time, in Unix seconds",
          args: {
            name: "from",
          },
        },
        {
          name: "--search-padding",
          description: "Time beyond from/to to consider in searches",
          args: {
            name: "search-padding",
            default: "2s",
          },
        },
        serviceIdOption,
        serviceNameOption,
        {
          name: "--sort-buffer",
          description: "Duration of sort buffer for received logs",
          args: {
            name: "sort-buffer",
            default: "1s",
          },
        },
        {
          name: "--stream",
          description: "Output: stdout, stderr, both (default)",
          args: {
            name: "stream",
          },
        },
        {
          name: "--timestamps",
          description: "Print timestamps with logs",
        },
        {
          name: "--to",
          description: "To time, in Unix seconds",
          args: {
            name: "to",
          },
        },
      ],
    },
    {
      name: "logging",
      description:
        "Manipulate Fastly service version logging endpoints (deprecated: use 'fastly service logging' instead)",
      hidden: true,
      deprecated: true,
      subcommands: [
        {
          name: "azureblob",
          description:
            "Manipulate Fastly service version Azure Blob Storage logging endpoints",
          subcommands: serviceLoggingAzureblobSubcommands,
        },
        {
          name: "bigquery",
          description:
            "Manipulate Fastly service version Google BigQuery logging endpoints",
          subcommands: serviceLoggingBigquerySubcommands,
        },
        {
          name: "cloudfiles",
          description:
            "Manipulate Fastly service version Rackspace Cloud Files logging endpoints",
          subcommands: serviceLoggingCloudfilesSubcommands,
        },
        {
          name: "datadog",
          description:
            "Manipulate Fastly service version Datadog logging endpoints",
          subcommands: serviceLoggingDatadogSubcommands,
        },
        {
          name: "digitalocean",
          description:
            "Manipulate Fastly service version DigitalOcean Spaces logging endpoints",
          subcommands: serviceLoggingDigitaloceanSubcommands,
        },
        {
          name: "elasticsearch",
          description:
            "Manipulate Fastly service version Elasticsearch logging endpoints",
          subcommands: serviceLoggingElasticsearchSubcommands,
        },
        {
          name: "ftp",
          description:
            "Manipulate Fastly service version FTP logging endpoints",
          subcommands: serviceLoggingFtpSubcommands,
        },
        {
          name: "gcs",
          description:
            "Manipulate Fastly service version Google Cloud Storage logging endpoints",
          subcommands: serviceLoggingGcsSubcommands,
        },
        {
          name: "googlepubsub",
          description:
            "Manipulate Fastly service version Google Cloud Pub/Sub logging endpoints",
          subcommands: serviceLoggingGooglepubsubSubcommands,
        },
        {
          name: "grafanacloudlogs",
          description:
            "Manipulate Fastly service version Grafana Cloud Logs logging endpoints",
          subcommands: serviceLoggingGrafanacloudlogsSubcommands,
        },
        {
          name: "heroku",
          description:
            "Manipulate Fastly service version Heroku logging endpoints",
          subcommands: serviceLoggingHerokuSubcommands,
        },
        {
          name: "honeycomb",
          description:
            "Manipulate Fastly service version Honeycomb logging endpoints",
          subcommands: serviceLoggingHoneycombSubcommands,
        },
        {
          name: "https",
          description:
            "Manipulate Fastly service version HTTPS logging endpoints",
          subcommands: serviceLoggingHttpsSubcommands,
        },
        {
          name: "kafka",
          description:
            "Manipulate Fastly service version Kafka logging endpoints",
          subcommands: serviceLoggingKafkaSubcommands,
        },
        {
          name: "kinesis",
          description:
            "Manipulate Fastly service version Amazon Kinesis logging endpoints",
          subcommands: serviceLoggingKinesisSubcommands,
        },
        {
          name: "loggly",
          description:
            "Manipulate Fastly service version Loggly logging endpoints",
          subcommands: serviceLoggingLogglySubcommands,
        },
        {
          name: "logshuttle",
          description:
            "Manipulate Fastly service version Log Shuttle logging endpoints",
          subcommands: serviceLoggingLogshuttleSubcommands,
        },
        {
          name: "newrelic",
          description:
            "Manipulate Fastly service version New Relic logging endpoints",
          subcommands: serviceLoggingNewrelicSubcommands,
        },
        {
          name: "newrelicotlp",
          description:
            "Manipulate Fastly service version New Relic OTLP logging endpoints",
          subcommands: serviceLoggingNewrelicotlpSubcommands,
        },
        {
          name: "openstack",
          description:
            "Manipulate Fastly service version OpenStack Swift logging endpoints",
          subcommands: serviceLoggingOpenstackSubcommands,
        },
        {
          name: "papertrail",
          description:
            "Manipulate Fastly service version Papertrail logging endpoints",
          subcommands: serviceLoggingPapertrailSubcommands,
        },
        {
          name: "s3",
          description:
            "Manipulate Fastly service version Amazon S3 logging endpoints",
          subcommands: serviceLoggingS3Subcommands,
        },
        {
          name: "scalyr",
          description:
            "Manipulate Fastly service version Scalyr logging endpoints",
          subcommands: serviceLoggingScalyrSubcommands,
        },
        {
          name: "sftp",
          description:
            "Manipulate Fastly service version SFTP logging endpoints",
          subcommands: serviceLoggingSftpSubcommands,
        },
        {
          name: "splunk",
          description:
            "Manipulate Fastly service version Splunk logging endpoints",
          subcommands: serviceLoggingSplunkSubcommands,
        },
        {
          name: "sumologic",
          description:
            "Manipulate Fastly service version Sumo Logic logging endpoints",
          subcommands: serviceLoggingSumologicSubcommands,
        },
        {
          name: "syslog",
          description:
            "Manipulate Fastly service version Syslog logging endpoints",
          subcommands: serviceLoggingSyslogSubcommands,
        },
      ],
    },
    {
      name: "ngwaf",
      description: "Manage NGWAF",
      subcommands: [
        {
          name: "country-list",
          description: "Manage NGWAF Account Country Lists",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create an account-level country list",
              options: [
                {
                  name: "--description",
                  description: "User submitted description of the list",
                  args: {
                    name: "description",
                  },
                },
                entriesOption,
                jsonOption,
                {
                  name: "--name",
                  description: "User submitted display name of a list",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an account country list",
              options: [jsonOption, listIdOption],
            },
            {
              name: "get",
              description: "Get an account-level country list",
              options: [jsonOption, listIdOption],
            },
            {
              name: "list",
              description: "List all country lists for your account",
              options: [jsonOption],
            },
            {
              name: "update",
              description: "Update an account-level country list",
              options: [
                {
                  name: "--description",
                  description: "User submitted description of the list",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--entries",
                  description:
                    "Entries for the list. Can either be a comma separated list or a path to a file",
                  args: {
                    name: "entries",
                  },
                },
                jsonOption,
                listIdOption,
              ],
            },
          ],
        },
        {
          name: "customsignal",
          description: "Manage NGWAF Account-Level Custom Signals",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create an account-level custom signal",
              options: [
                {
                  name: "--description",
                  description: "User submitted description of a custom signal",
                  args: {
                    name: "description",
                  },
                },
                jsonOption,
                {
                  name: "--name",
                  description:
                    "User submitted display name of a custom signal. Is immutable and must be between 3 and 25 characters",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an account-level custom signal",
              options: [
                jsonOption,
                {
                  name: "--signal-id",
                  description: "Custom Signal ID",
                  isRequired: true,
                  args: {
                    name: "signal-id",
                  },
                },
              ],
            },
            {
              name: "get",
              description: "Get a custom signal",
              options: [
                jsonOption,
                {
                  name: "--signal-id",
                  description: "Custom Signal ID",
                  isRequired: true,
                  args: {
                    name: "signal-id",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List all account-level custom signals",
              options: [jsonOption],
            },
            {
              name: "update",
              description: "Update a workspace",
              options: [
                {
                  name: "--description",
                  description: "User submitted description of a custom signal",
                  isRequired: true,
                  args: {
                    name: "description",
                  },
                },
                jsonOption,
                {
                  name: "--signal-id",
                  description: "Custom Signal ID",
                  isRequired: true,
                  args: {
                    name: "signal-id",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "ip-list",
          description: "Manage NGWAF Account IP Lists",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create an account-level ip list",
              options: [
                {
                  name: "--description",
                  description: "User submitted description of the list",
                  args: {
                    name: "description",
                  },
                },
                entriesOption,
                jsonOption,
                {
                  name: "--name",
                  description: "User submitted display name of a list",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an account ip list",
              options: [jsonOption, listIdOption],
            },
            {
              name: "get",
              description: "Get an account-level ip list",
              options: [jsonOption, listIdOption],
            },
            {
              name: "list",
              description: "List all ip lists for your account",
              options: [jsonOption],
            },
            {
              name: "update",
              description: "Update an account-level ip list",
              options: [
                {
                  name: "--description",
                  description: "User submitted description of the list",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--entries",
                  description:
                    "Entries for the list. Can either be a comma separated list or a path to a file",
                  args: {
                    name: "entries",
                  },
                },
                jsonOption,
                listIdOption,
              ],
            },
          ],
        },
        {
          name: "rule",
          description: "Manage NGWAF Account-Level Rules",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create an account-level rule",
              options: [
                jsonOption,
                {
                  name: "--path",
                  description:
                    "Path to a json file that contains the rule schema",
                  isRequired: true,
                  args: {
                    name: "path",
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an account-level rule",
              options: [
                jsonOption,
                {
                  name: "--rule-id",
                  description: "Rule ID",
                  isRequired: true,
                  args: {
                    name: "rule-id",
                  },
                },
              ],
            },
            {
              name: "get",
              description: "Get an account-level rule",
              options: [
                jsonOption,
                {
                  name: "--rule-id",
                  description: "Rule ID",
                  isRequired: true,
                  args: {
                    name: "rule-id",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List all account-level rules",
              options: [
                {
                  name: "--action",
                  description: "Filter rules based on action",
                  args: {
                    name: "action",
                  },
                },
                {
                  name: "--enabled",
                  description:
                    "Filter rules based on whether the rule is enabled",
                  args: {
                    name: "enabled",
                  },
                },
                jsonOption,
              ],
            },
            {
              name: "update",
              description: "Update a workspace",
              options: [
                jsonOption,
                {
                  name: "--path",
                  description:
                    "Path to a json file that contains the rule schema",
                  isRequired: true,
                  args: {
                    name: "path",
                  },
                },
                {
                  name: "--rule-id",
                  description: "Rule ID",
                  isRequired: true,
                  args: {
                    name: "rule-id",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "signal-list",
          description: "Manage NGWAF Account Signal Lists",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create an account-level signal list",
              options: [
                {
                  name: "--description",
                  description: "User submitted description of the list",
                  args: {
                    name: "description",
                  },
                },
                entriesOption,
                jsonOption,
                {
                  name: "--name",
                  description: "User submitted display name of a list",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an account signal list",
              options: [jsonOption, listIdOption],
            },
            {
              name: "get",
              description: "Get an account-level signal list",
              options: [jsonOption, listIdOption],
            },
            {
              name: "list",
              description: "List all signal lists for your account",
              options: [jsonOption],
            },
            {
              name: "update",
              description: "Update an account-level signal list",
              options: [
                {
                  name: "--description",
                  description: "User submitted description of the list",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--entries",
                  description:
                    "Entries for the list. Can either be a comma separated list or a path to a file",
                  args: {
                    name: "entries",
                  },
                },
                jsonOption,
                listIdOption,
              ],
            },
          ],
        },
        {
          name: "string-list",
          description: "Manage NGWAF Account String Lists",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create an account-level string list",
              options: [
                {
                  name: "--description",
                  description: "User submitted description of the list",
                  args: {
                    name: "description",
                  },
                },
                entriesOption,
                jsonOption,
                {
                  name: "--name",
                  description: "User submitted display name of a list",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an account string list",
              options: [jsonOption, listIdOption],
            },
            {
              name: "get",
              description: "Get an account-level string list",
              options: [jsonOption, listIdOption],
            },
            {
              name: "list",
              description: "List all string lists for your account",
              options: [jsonOption],
            },
            {
              name: "update",
              description: "Update an account-level string list",
              options: [
                {
                  name: "--description",
                  description: "User submitted description of the list",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--entries",
                  description:
                    "Entries for the list. Can either be a comma separated list or a path to a file",
                  args: {
                    name: "entries",
                  },
                },
                jsonOption,
                listIdOption,
              ],
            },
          ],
        },
        {
          name: "time-series",
          description: "Manage NGWAF",
          subcommands: [
            {
              name: "list",
              description: "List account-level time series metrics",
              options: [
                {
                  name: "--dimensions",
                  description:
                    "Comma separated list of grouping dimensions to be included in the timeseries. Allowed values are workspaces and time. (Default value is time)",
                  args: {
                    name: "dimensions",
                  },
                },
                {
                  name: "--from",
                  description:
                    "The start of a date-time range, expressed in RFC 3339 format",
                  isRequired: true,
                  args: {
                    name: "from",
                  },
                },
                {
                  name: "--granularity",
                  description:
                    "Level of detail of the sample size in seconds. (Default value is 86400)",
                  args: {
                    name: "granularity",
                  },
                },
                jsonOption,
                {
                  name: "--metrics",
                  description:
                    "Comma-separated list of metrics to be included in the timeseries. Metrics can be XSS, SQLI, HTTP404, requests_total, requests_attack, requests_total_blocked, or any custom metric",
                  isRequired: true,
                  args: {
                    name: "metrics",
                  },
                },
                {
                  name: "--to",
                  description:
                    "The end of a date-time range, expressed in RFC 3339 format",
                  args: {
                    name: "to",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "wildcard-list",
          description: "Manage NGWAF Account Wildcard Lists",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create an account-level wildcard list",
              options: [
                {
                  name: "--description",
                  description: "User submitted description of the list",
                  args: {
                    name: "description",
                  },
                },
                entriesOption,
                jsonOption,
                {
                  name: "--name",
                  description: "User submitted display name of a list",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an account wildcard list",
              options: [jsonOption, listIdOption],
            },
            {
              name: "get",
              description: "Get an account-level wildcard list",
              options: [jsonOption, listIdOption],
            },
            {
              name: "list",
              description: "List all wildcard lists for your account",
              options: [jsonOption],
            },
            {
              name: "update",
              description: "Update an account-level wildcard list",
              options: [
                {
                  name: "--description",
                  description: "User submitted description of the list",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--entries",
                  description:
                    "Entries for the list. Can either be a comma separated list or a path to a file",
                  args: {
                    name: "entries",
                  },
                },
                jsonOption,
                listIdOption,
              ],
            },
          ],
        },
        {
          name: "workspace",
          description: "Manage NGWAF Workspaces",
          subcommands: [
            {
              name: "alert",
              description: "Manage workspace alerts",
              subcommands: [
                {
                  name: "datadog",
                  description: "Manage Datadog workspace alerts",
                  subcommands: [
                    {
                      name: ["create", "add"],
                      description: "Create a Datadog alert",
                      options: [
                        {
                          name: "--description",
                          description: "An optional description for the alert",
                          args: {
                            name: "description",
                          },
                        },
                        jsonOption,
                        {
                          name: "--key",
                          description: "Datadog integration key",
                          isRequired: true,
                          args: {
                            name: "key",
                          },
                        },
                        {
                          name: "--site",
                          description: "Datadog site",
                          isRequired: true,
                          args: {
                            name: "site",
                          },
                        },
                        workspaceIdOption,
                      ],
                    },
                    {
                      name: "delete",
                      description: "Delete a Datadog alert",
                      options: [alertIdOption, jsonOption, workspaceIdOption],
                    },
                    {
                      name: "get",
                      description: "Get a Datadog alert",
                      options: [alertIdOption, jsonOption, workspaceIdOption],
                    },
                    {
                      name: "list",
                      description: "List Datadog alerts",
                      options: [jsonOption, workspaceIdOption],
                    },
                    {
                      name: "update",
                      description: "Update a Datadog alert",
                      options: [
                        alertIdOption,
                        jsonOption,
                        {
                          name: "--key",
                          description: "Datadog integration key",
                          isRequired: true,
                          args: {
                            name: "key",
                          },
                        },
                        {
                          name: "--site",
                          description: "Datadog site",
                          isRequired: true,
                          args: {
                            name: "site",
                          },
                        },
                        workspaceIdOption,
                      ],
                    },
                  ],
                },
                {
                  name: "jira",
                  description: "Manage Jira workspace alerts",
                  subcommands: [
                    {
                      name: ["create", "add"],
                      description: "Create a Jira alert",
                      options: [
                        {
                          name: "--description",
                          description: "An optional description for the alert",
                          args: {
                            name: "description",
                          },
                        },
                        {
                          name: "--host",
                          description: "Host name of the Jira instance",
                          isRequired: true,
                          args: {
                            name: "host",
                          },
                        },
                        {
                          name: "--issue-type",
                          description:
                            "An optional Jira issue type associated with the ticket. (Default Task)",
                          args: {
                            name: "issue-type",
                          },
                        },
                        jsonOption,
                        {
                          name: "--key",
                          description: "Jira API key",
                          isRequired: true,
                          args: {
                            name: "key",
                          },
                        },
                        {
                          name: "--project",
                          description:
                            "Specifies the Jira project where the issue will be created",
                          isRequired: true,
                          args: {
                            name: "project",
                          },
                        },
                        {
                          name: "--username",
                          description:
                            "Jira username of the user who created the ticket",
                          isRequired: true,
                          args: {
                            name: "username",
                          },
                        },
                        workspaceIdOption,
                      ],
                    },
                    {
                      name: "delete",
                      description: "Delete a Jira alert",
                      options: [alertIdOption, jsonOption, workspaceIdOption],
                    },
                    {
                      name: "get",
                      description: "Get a Jira alert",
                      options: [alertIdOption, jsonOption, workspaceIdOption],
                    },
                    {
                      name: "list",
                      description: "List Jira alerts",
                      options: [jsonOption, workspaceIdOption],
                    },
                    {
                      name: "update",
                      description: "Update a Jira alert",
                      options: [
                        alertIdOption,
                        {
                          name: "--host",
                          description: "Host name of the Jira instance",
                          isRequired: true,
                          args: {
                            name: "host",
                          },
                        },
                        {
                          name: "--issue-type",
                          description:
                            "An optional Jira issue type associated with the ticket. (Default Task)",
                          args: {
                            name: "issue-type",
                          },
                        },
                        jsonOption,
                        {
                          name: "--key",
                          description: "Jira API key",
                          isRequired: true,
                          args: {
                            name: "key",
                          },
                        },
                        {
                          name: "--project",
                          description:
                            "Specifies the Jira project where the issue will be created",
                          isRequired: true,
                          args: {
                            name: "project",
                          },
                        },
                        {
                          name: "--username",
                          description:
                            "Jira username of the user who created the ticket",
                          isRequired: true,
                          args: {
                            name: "username",
                          },
                        },
                        workspaceIdOption,
                      ],
                    },
                  ],
                },
                {
                  name: "mailinglist",
                  description: "Manage Mailing List workspace alerts",
                  subcommands: [
                    {
                      name: ["create", "add"],
                      description: "Create a Mailing List alert",
                      options: [
                        {
                          name: "--address",
                          description: "An email address",
                          isRequired: true,
                          args: {
                            name: "address",
                          },
                        },
                        {
                          name: "--description",
                          description: "An optional description for the alert",
                          args: {
                            name: "description",
                          },
                        },
                        jsonOption,
                        workspaceIdOption,
                      ],
                    },
                    {
                      name: "delete",
                      description: "Delete a Mailing List alert",
                      options: [alertIdOption, jsonOption, workspaceIdOption],
                    },
                    {
                      name: "get",
                      description: "Get a Mailing List alert",
                      options: [alertIdOption, jsonOption, workspaceIdOption],
                    },
                    {
                      name: "list",
                      description: "List Mailing List alerts",
                      options: [jsonOption, workspaceIdOption],
                    },
                    {
                      name: "update",
                      description: "Update a Mailing List alert",
                      options: [
                        {
                          name: "--address",
                          description: "An email address",
                          isRequired: true,
                          args: {
                            name: "address",
                          },
                        },
                        alertIdOption,
                        jsonOption,
                        workspaceIdOption,
                      ],
                    },
                  ],
                },
                {
                  name: "microsoftteams",
                  description: "Manage Microsoft Teams workspace alerts",
                  subcommands: [
                    {
                      name: ["create", "add"],
                      description: "Create a Microsoft Teams alert",
                      options: [
                        {
                          name: "--description",
                          description: "An optional description for the alert",
                          args: {
                            name: "description",
                          },
                        },
                        jsonOption,
                        {
                          name: "--webhook",
                          description: "Microsoft Teams webhook",
                          isRequired: true,
                          args: {
                            name: "webhook",
                          },
                        },
                        workspaceIdOption,
                      ],
                    },
                    {
                      name: "delete",
                      description: "Delete a Microsoft Teams alert",
                      options: [alertIdOption, jsonOption, workspaceIdOption],
                    },
                    {
                      name: "get",
                      description: "Get a Microsoft Teams alert",
                      options: [alertIdOption, jsonOption, workspaceIdOption],
                    },
                    {
                      name: "list",
                      description: "List Microsoft Teams alerts",
                      options: [jsonOption, workspaceIdOption],
                    },
                    {
                      name: "update",
                      description: "Update a Microsoft Teams alert",
                      options: [
                        alertIdOption,
                        jsonOption,
                        {
                          name: "--webhook",
                          description: "Microsoft Teams webhook",
                          isRequired: true,
                          args: {
                            name: "webhook",
                          },
                        },
                        workspaceIdOption,
                      ],
                    },
                  ],
                },
                {
                  name: "opsgenie",
                  description: "Manage Opsgenie workspace alerts",
                  subcommands: [
                    {
                      name: ["create", "add"],
                      description: "Create a Opsgenie alert",
                      options: [
                        {
                          name: "--description",
                          description: "An optional description for the alert",
                          args: {
                            name: "description",
                          },
                        },
                        jsonOption,
                        {
                          name: "--key",
                          description: "Opsgenie integration key",
                          isRequired: true,
                          args: {
                            name: "key",
                          },
                        },
                        workspaceIdOption,
                      ],
                    },
                    {
                      name: "delete",
                      description: "Delete a Opsgenie alert",
                      options: [alertIdOption, jsonOption, workspaceIdOption],
                    },
                    {
                      name: "get",
                      description: "Get a Opsgenie alert",
                      options: [alertIdOption, jsonOption, workspaceIdOption],
                    },
                    {
                      name: "list",
                      description: "List Opsgenie alerts",
                      options: [jsonOption, workspaceIdOption],
                    },
                    {
                      name: "update",
                      description: "Update a Opsgenie alert",
                      options: [
                        alertIdOption,
                        jsonOption,
                        {
                          name: "--key",
                          description: "Opsgenie integration key",
                          isRequired: true,
                          args: {
                            name: "key",
                          },
                        },
                        workspaceIdOption,
                      ],
                    },
                  ],
                },
                {
                  name: "pagerduty",
                  description: "Manage PagerDuty workspace alerts",
                  subcommands: [
                    {
                      name: ["create", "add"],
                      description: "Create a PagerDuty alert",
                      options: [
                        {
                          name: "--description",
                          description: "An optional description for the alert",
                          args: {
                            name: "description",
                          },
                        },
                        jsonOption,
                        {
                          name: "--key",
                          description: "PagerDuty integration key",
                          isRequired: true,
                          args: {
                            name: "key",
                          },
                        },
                        workspaceIdOption,
                      ],
                    },
                    {
                      name: "delete",
                      description: "Delete a PagerDuty alert",
                      options: [alertIdOption, jsonOption, workspaceIdOption],
                    },
                    {
                      name: "get",
                      description: "Get a PagerDuty alert",
                      options: [alertIdOption, jsonOption, workspaceIdOption],
                    },
                    {
                      name: "list",
                      description: "List PagerDuty alerts",
                      options: [jsonOption, workspaceIdOption],
                    },
                    {
                      name: "update",
                      description: "Update a PagerDuty alert",
                      options: [
                        alertIdOption,
                        jsonOption,
                        {
                          name: "--key",
                          description: "PagerDuty integration key",
                          isRequired: true,
                          args: {
                            name: "key",
                          },
                        },
                        workspaceIdOption,
                      ],
                    },
                  ],
                },
                {
                  name: "slack",
                  description: "Manage Slack workspace alerts",
                  subcommands: [
                    {
                      name: ["create", "add"],
                      description: "Create a Slack alert",
                      options: [
                        {
                          name: "--description",
                          description: "An optional description for the alert",
                          args: {
                            name: "description",
                          },
                        },
                        jsonOption,
                        {
                          name: "--webhook",
                          description: "Slack webhook",
                          isRequired: true,
                          args: {
                            name: "webhook",
                          },
                        },
                        workspaceIdOption,
                      ],
                    },
                    {
                      name: "delete",
                      description: "Delete a Slack alert",
                      options: [alertIdOption, jsonOption, workspaceIdOption],
                    },
                    {
                      name: "get",
                      description: "Get a Slack alert",
                      options: [alertIdOption, jsonOption, workspaceIdOption],
                    },
                    {
                      name: "list",
                      description: "List Slack alerts",
                      options: [jsonOption, workspaceIdOption],
                    },
                    {
                      name: "update",
                      description: "Update a Slack alert",
                      options: [
                        alertIdOption,
                        jsonOption,
                        {
                          name: "--webhook",
                          description: "Slack webhook",
                          isRequired: true,
                          args: {
                            name: "webhook",
                          },
                        },
                        workspaceIdOption,
                      ],
                    },
                  ],
                },
                {
                  name: "webhook",
                  description: "Manage Webhook workspace alerts",
                  subcommands: [
                    {
                      name: ["create", "add"],
                      description: "Create a Webhook alert",
                      options: [
                        {
                          name: "--description",
                          description: "An optional description for the alert",
                          args: {
                            name: "description",
                          },
                        },
                        jsonOption,
                        {
                          name: "--webhook",
                          description: "Webhook webhook",
                          isRequired: true,
                          args: {
                            name: "webhook",
                          },
                        },
                        workspaceIdOption,
                      ],
                    },
                    {
                      name: "delete",
                      description: "Delete a Webhook alert",
                      options: [alertIdOption, jsonOption, workspaceIdOption],
                    },
                    {
                      name: "get",
                      description: "Get a Webhook alert",
                      options: [alertIdOption, jsonOption, workspaceIdOption],
                    },
                    {
                      name: "get-signing-key",
                      description:
                        "Retrieves details of a webhook alert signing key",
                      options: [alertIdOption, jsonOption, workspaceIdOption],
                    },
                    {
                      name: "list",
                      description: "List Webhook alerts",
                      options: [jsonOption, workspaceIdOption],
                    },
                    {
                      name: "rotate-signing-key",
                      description: "Rotate webhook alert signing key",
                      options: [alertIdOption, jsonOption, workspaceIdOption],
                    },
                    {
                      name: "update",
                      description: "Update a Webhook alert",
                      options: [
                        alertIdOption,
                        jsonOption,
                        {
                          name: "--webhook",
                          description: "Webhook webhook",
                          isRequired: true,
                          args: {
                            name: "webhook",
                          },
                        },
                        workspaceIdOption,
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "country-list",
              description: "Manage NGWAF Workspace Country Lists",
              subcommands: [
                {
                  name: ["create", "add"],
                  description: "Create a workspace-level country list",
                  options: [
                    {
                      name: "--description",
                      description: "User submitted description of the list",
                      args: {
                        name: "description",
                      },
                    },
                    entriesOption,
                    jsonOption,
                    {
                      name: "--name",
                      description: "User submitted display name of a list",
                      isRequired: true,
                      args: {
                        name: "name",
                      },
                    },
                    workspaceIdOption,
                  ],
                },
                {
                  name: "delete",
                  description: "Delete a workspace country list",
                  options: [jsonOption, listIdOption, workspaceIdOption],
                },
                {
                  name: "get",
                  description: "Get a workspace-level country list",
                  options: [jsonOption, listIdOption, workspaceIdOption],
                },
                {
                  name: "list",
                  description: "List all country lists for your workspace",
                  options: [jsonOption, workspaceIdOption],
                },
                {
                  name: "update",
                  description: "Update an account-level country list",
                  options: [
                    {
                      name: "--description",
                      description: "User submitted description of the list",
                      args: {
                        name: "description",
                      },
                    },
                    {
                      name: "--entries",
                      description:
                        "Entries for the list. Can either be a comma separated list or a path to a file",
                      args: {
                        name: "entries",
                      },
                    },
                    jsonOption,
                    listIdOption,
                    workspaceIdOption,
                  ],
                },
              ],
            },
            {
              name: ["create", "add"],
              description: "Create a workspace",
              options: [
                {
                  name: "--attackThresholds",
                  description:
                    "Attack threshold parameters for system site alerts. Each threshold value is the number of attack signals per IP address that must be detected during the interval before the related IP address is flagged. Input accepted as colon separated string: Immediate:OneMinute:TenMinutes:OneHour",
                  args: {
                    name: "attackThresholds",
                  },
                },
                {
                  name: "--autoEnableNewVirtualPatches",
                  description:
                    "Automatically enable, in block mode, virtual patches released after this setting is enabled. Virtual patches released before it was enabled are not changed. Use --no-autoEnableNewVirtualPatches to disable",
                },
                {
                  name: "--blockingMode",
                  description: "User configured mode blocking mode",
                  isRequired: true,
                  args: {
                    name: "blockingMode",
                  },
                },
                {
                  name: "--clientIPHeaders",
                  description:
                    "Specify the request header containing the client IP address. Input accepted as colon separated string",
                  args: {
                    name: "clientIPHeaders",
                  },
                },
                {
                  name: "--defaultBlockingCode",
                  description:
                    "Default status code that is returned when a request to your web application is blocked",
                  args: {
                    name: "defaultBlockingCode",
                  },
                },
                {
                  name: "--defaultRedirectURL",
                  description:
                    "Redirect url to be used if code 301 or 302 is used",
                  args: {
                    name: "defaultRedirectURL",
                  },
                },
                {
                  name: "--description",
                  description: "User submitted description of a workspace",
                  isRequired: true,
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--ipAnonymization",
                  description:
                    "Agents will anonymize IP addresses according to the option selected",
                  args: {
                    name: "ipAnonymization",
                  },
                },
                jsonOption,
                {
                  name: "--name",
                  description: "User submitted display name of a workspace",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: "customsignal",
              description: "Manage NGWAF Workspace-Level Custom Signals",
              subcommands: [
                {
                  name: ["create", "add"],
                  description: "Create a workspace-level custom signal",
                  options: [
                    {
                      name: "--description",
                      description:
                        "User submitted description of a custom signal",
                      args: {
                        name: "description",
                      },
                    },
                    jsonOption,
                    {
                      name: "--name",
                      description:
                        "User submitted display name of a custom signal. Is immutable and must be between 3 and 25 characters",
                      isRequired: true,
                      args: {
                        name: "name",
                      },
                    },
                    {
                      name: "--workspace-id",
                      description:
                        "Alphanumeric string identifying the NGWAF Workspace (falls back to FASTLY_WORKSPACE_ID)",
                      isRequired: true,
                      args: {
                        name: "workspace-id",
                      },
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Delete a workspace-level custom signal",
                  options: [
                    jsonOption,
                    {
                      name: "--signal-id",
                      description: "Custom Signal ID",
                      isRequired: true,
                      args: {
                        name: "signal-id",
                      },
                    },
                    {
                      name: "--workspace-id",
                      description:
                        "Alphanumeric string identifying the NGWAF Workspace (falls back to FASTLY_WORKSPACE_ID)",
                      isRequired: true,
                      args: {
                        name: "workspace-id",
                      },
                    },
                  ],
                },
                {
                  name: "get",
                  description: "Get a custom signal",
                  options: [
                    jsonOption,
                    {
                      name: "--signal-id",
                      description: "Custom Signal ID",
                      isRequired: true,
                      args: {
                        name: "signal-id",
                      },
                    },
                    {
                      name: "--workspace-id",
                      description:
                        "Alphanumeric string identifying the NGWAF Workspace (falls back to FASTLY_WORKSPACE_ID)",
                      isRequired: true,
                      args: {
                        name: "workspace-id",
                      },
                    },
                  ],
                },
                {
                  name: "list",
                  description: "List all workspace-level custom signals",
                  options: [
                    jsonOption,
                    {
                      name: "--workspace-id",
                      description:
                        "Alphanumeric string identifying the NGWAF Workspace (falls back to FASTLY_WORKSPACE_ID)",
                      isRequired: true,
                      args: {
                        name: "workspace-id",
                      },
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Update a workspace",
                  options: [
                    {
                      name: "--description",
                      description:
                        "User submitted description of a custom signal",
                      isRequired: true,
                      args: {
                        name: "description",
                      },
                    },
                    jsonOption,
                    {
                      name: "--signal-id",
                      description: "Custom Signal ID",
                      isRequired: true,
                      args: {
                        name: "signal-id",
                      },
                    },
                    {
                      name: "--workspace-id",
                      description:
                        "Alphanumeric string identifying the NGWAF Workspace (falls back to FASTLY_WORKSPACE_ID)",
                      isRequired: true,
                      args: {
                        name: "workspace-id",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a workspace",
              options: [
                jsonOption,
                {
                  name: "--workspace-id",
                  description: "Workspace ID",
                  isRequired: true,
                  args: {
                    name: "workspace-id",
                  },
                },
              ],
            },
            {
              name: "get",
              description: "Get a workspace",
              options: [
                jsonOption,
                {
                  name: "--workspace-id",
                  description: "Workspace ID",
                  isRequired: true,
                  args: {
                    name: "workspace-id",
                  },
                },
              ],
            },
            {
              name: "ip-list",
              description: "Manage NGWAF Workspace IP Lists",
              subcommands: [
                {
                  name: ["create", "add"],
                  description: "Create a workspace-level ip list",
                  options: [
                    {
                      name: "--description",
                      description: "User submitted description of the list",
                      args: {
                        name: "description",
                      },
                    },
                    entriesOption,
                    jsonOption,
                    {
                      name: "--name",
                      description: "User submitted display name of a list",
                      isRequired: true,
                      args: {
                        name: "name",
                      },
                    },
                    workspaceIdOption,
                  ],
                },
                {
                  name: "delete",
                  description: "Delete an account ip list",
                  options: [jsonOption, listIdOption, workspaceIdOption],
                },
                {
                  name: "get",
                  description: "Get a workspace-level ip list",
                  options: [jsonOption, listIdOption, workspaceIdOption],
                },
                {
                  name: "list",
                  description: "List all ip lists for your workspace",
                  options: [jsonOption, workspaceIdOption],
                },
                {
                  name: "update",
                  description: "Update a workspace-level ip list",
                  options: [
                    {
                      name: "--description",
                      description: "User submitted description of the list",
                      args: {
                        name: "description",
                      },
                    },
                    {
                      name: "--entries",
                      description:
                        "Entries for the list. Can either be a comma separated list or a path to a file",
                      args: {
                        name: "entries",
                      },
                    },
                    jsonOption,
                    listIdOption,
                    workspaceIdOption,
                  ],
                },
              ],
            },
            {
              name: "list",
              description: "List all workspaces",
              options: [jsonOption],
            },
            {
              name: "redaction",
              description: "Manage NGWAF Redactions",
              subcommands: [
                {
                  name: ["create", "add"],
                  description: "Create a redaction",
                  options: [
                    {
                      name: "--field",
                      description:
                        "The name of the field that should be redacted",
                      isRequired: true,
                      args: {
                        name: "field",
                      },
                    },
                    jsonOption,
                    {
                      name: "--type",
                      description: "The type of field that is being redacted",
                      isRequired: true,
                      args: {
                        name: "type",
                      },
                    },
                    workspaceIdOption,
                  ],
                },
                {
                  name: "delete",
                  description: "Delete a redaction",
                  options: [
                    jsonOption,
                    {
                      name: "--redaction-id",
                      description: "Redaction ID",
                      isRequired: true,
                      args: {
                        name: "redaction-id",
                      },
                    },
                    workspaceIdOption,
                  ],
                },
                {
                  name: "list",
                  description: "List redactions in a workspace",
                  options: [
                    jsonOption,
                    {
                      name: "--limit",
                      description: "Limit how many results are returned",
                      args: {
                        name: "limit",
                      },
                    },
                    workspaceIdOption,
                  ],
                },
                {
                  name: ["retrieve", "get"],
                  description: "Retrieve a redaction",
                  options: [
                    jsonOption,
                    {
                      name: "--redaction-id",
                      description: "Redaction ID",
                      isRequired: true,
                      args: {
                        name: "redaction-id",
                      },
                    },
                    workspaceIdOption,
                  ],
                },
                {
                  name: "update",
                  description: "Update a redaction",
                  options: [
                    {
                      name: "--field",
                      description:
                        "The name of the field that should be redacted",
                      args: {
                        name: "field",
                      },
                    },
                    jsonOption,
                    {
                      name: "--redaction-id",
                      description:
                        "A base62-encoded representation of a UUID used to uniquely identify a redaction",
                      isRequired: true,
                      args: {
                        name: "redaction-id",
                      },
                    },
                    {
                      name: "--type",
                      description: "The type of field that is being redacted",
                      args: {
                        name: "type",
                      },
                    },
                    workspaceIdOption,
                  ],
                },
              ],
            },
            {
              name: "rule",
              description: "Manage NGWAF Account-Level Rules",
              subcommands: [
                {
                  name: ["create", "add"],
                  description: "Create a workspace-level rule",
                  options: [
                    jsonOption,
                    {
                      name: "--path",
                      description:
                        "Path to a json file that contains the rule schema",
                      isRequired: true,
                      args: {
                        name: "path",
                        template: "filepaths",
                      },
                    },
                    workspaceIdOption,
                  ],
                },
                {
                  name: "delete",
                  description: "Delete a workspace-level rule",
                  options: [
                    jsonOption,
                    {
                      name: "--rule-id",
                      description: "Rule ID",
                      isRequired: true,
                      args: {
                        name: "rule-id",
                      },
                    },
                    workspaceIdOption,
                  ],
                },
                {
                  name: "get",
                  description: "Get a workspace-level rule",
                  options: [
                    jsonOption,
                    {
                      name: "--rule-id",
                      description: "Rule ID",
                      isRequired: true,
                      args: {
                        name: "rule-id",
                      },
                    },
                    workspaceIdOption,
                  ],
                },
                {
                  name: "list",
                  description: "List all workspace-level rules",
                  options: [
                    {
                      name: "--action",
                      description: "Filter rules based on action",
                      args: {
                        name: "action",
                      },
                    },
                    {
                      name: "--enabled",
                      description:
                        "Filter rules based on whether the rule is enabled",
                      args: {
                        name: "enabled",
                      },
                    },
                    jsonOption,
                    workspaceIdOption,
                  ],
                },
                {
                  name: "update",
                  description: "Update a workspace",
                  options: [
                    jsonOption,
                    {
                      name: "--path",
                      description:
                        "Path to a json file that contains the rule schema",
                      isRequired: true,
                      args: {
                        name: "path",
                      },
                    },
                    {
                      name: "--rule-id",
                      description: "Rule ID",
                      isRequired: true,
                      args: {
                        name: "rule-id",
                      },
                    },
                    workspaceIdOption,
                  ],
                },
              ],
            },
            {
              name: "signal-list",
              description: "Manage NGWAF Workspace Signal Lists",
              subcommands: [
                {
                  name: ["create", "add"],
                  description: "Create a workspace-level signal list",
                  options: [
                    {
                      name: "--description",
                      description: "User submitted description of the list",
                      args: {
                        name: "description",
                      },
                    },
                    entriesOption,
                    jsonOption,
                    {
                      name: "--name",
                      description: "User submitted display name of a list",
                      isRequired: true,
                      args: {
                        name: "name",
                      },
                    },
                    workspaceIdOption,
                  ],
                },
                {
                  name: "delete",
                  description: "Delete a workspace signal list",
                  options: [jsonOption, listIdOption, workspaceIdOption],
                },
                {
                  name: "get",
                  description: "Get a workspace-level signal list",
                  options: [jsonOption, listIdOption, workspaceIdOption],
                },
                {
                  name: "list",
                  description: "List all signal lists for your workspace",
                  options: [jsonOption, workspaceIdOption],
                },
                {
                  name: "update",
                  description: "Update a workspace-level signal list",
                  options: [
                    {
                      name: "--description",
                      description: "User submitted description of the list",
                      args: {
                        name: "description",
                      },
                    },
                    {
                      name: "--entries",
                      description:
                        "Entries for the list. Can either be a comma separated list or a path to a file",
                      args: {
                        name: "entries",
                      },
                    },
                    jsonOption,
                    listIdOption,
                    workspaceIdOption,
                  ],
                },
              ],
            },
            {
              name: "string-list",
              description: "Manage NGWAF Workspace String Lists",
              subcommands: [
                {
                  name: ["create", "add"],
                  description: "Create a workspace-level string list",
                  options: [
                    {
                      name: "--description",
                      description: "User submitted description of the list",
                      args: {
                        name: "description",
                      },
                    },
                    entriesOption,
                    jsonOption,
                    {
                      name: "--name",
                      description: "User submitted display name of a list",
                      isRequired: true,
                      args: {
                        name: "name",
                      },
                    },
                    workspaceIdOption,
                  ],
                },
                {
                  name: "delete",
                  description: "Delete a workspace string list",
                  options: [jsonOption, listIdOption, workspaceIdOption],
                },
                {
                  name: "get",
                  description: "Get a workspace-level string list",
                  options: [jsonOption, listIdOption, workspaceIdOption],
                },
                {
                  name: "list",
                  description: "List all string lists for your workspace",
                  options: [jsonOption, workspaceIdOption],
                },
                {
                  name: "update",
                  description: "Update a workspace-level string list",
                  options: [
                    {
                      name: "--description",
                      description: "User submitted description of the list",
                      args: {
                        name: "description",
                      },
                    },
                    {
                      name: "--entries",
                      description:
                        "Entries for the list. Can either be a comma separated list or a path to a file",
                      args: {
                        name: "entries",
                      },
                    },
                    jsonOption,
                    listIdOption,
                    workspaceIdOption,
                  ],
                },
              ],
            },
            {
              name: "threshold",
              description: "Manage NGWAF Workspace Thresholds",
              subcommands: [
                {
                  name: ["create", "add"],
                  description: "Create a workspace threshold",
                  options: [
                    {
                      name: "--action",
                      description:
                        "The action to take when the threshold is exceeded. [block, log]",
                      isRequired: true,
                      args: {
                        name: "action",
                      },
                    },
                    {
                      name: "--do-not-notify",
                      description:
                        "Whether to silence notifications when action is taken. [true, false]",
                      isRequired: true,
                      args: {
                        name: "do-not-notify",
                      },
                    },
                    {
                      name: "--duration",
                      description:
                        "The duration the action is in place in seconds. Default duration is 86,400 seconds (1 day)",
                      isRequired: true,
                      args: {
                        name: "duration",
                      },
                    },
                    {
                      name: "--enabled",
                      description:
                        "Whether the threshold is active. [true, false]",
                      isRequired: true,
                      args: {
                        name: "enabled",
                      },
                    },
                    {
                      name: "--interval",
                      description:
                        "The threshold interval in seconds. The default interval is 3600 seconds (1 hour)",
                      isRequired: true,
                      args: {
                        name: "interval",
                      },
                    },
                    jsonOption,
                    {
                      name: "--limit",
                      description:
                        "The threshold limit. Input must be between 1 and 10000. Default limit is 10",
                      isRequired: true,
                      args: {
                        name: "limit",
                      },
                    },
                    {
                      name: "--name",
                      description:
                        "User submitted display name of a signal threshold. Input must be between 3 and 50 characters",
                      isRequired: true,
                      args: {
                        name: "name",
                      },
                    },
                    {
                      name: "--signal",
                      description:
                        "The name of the signal this threshold is acting on",
                      isRequired: true,
                      args: {
                        name: "signal",
                      },
                    },
                    workspaceIdOption,
                  ],
                },
                {
                  name: "delete",
                  description: "Deletes a workspace threshold",
                  options: [
                    jsonOption,
                    {
                      name: "--threshold-id",
                      description: "Threshold ID",
                      isRequired: true,
                      args: {
                        name: "threshold-id",
                      },
                    },
                    workspaceIdOption,
                  ],
                },
                {
                  name: "get",
                  description: "Retrieves a workspace threshold",
                  options: [
                    jsonOption,
                    {
                      name: "--threshold-id",
                      description: "Threshold ID",
                      isRequired: true,
                      args: {
                        name: "threshold-id",
                      },
                    },
                    workspaceIdOption,
                  ],
                },
                {
                  name: "list",
                  description: "List workspace thresholds",
                  options: [jsonOption, workspaceIdOption],
                },
                {
                  name: "update",
                  description: "Update a workspace threshold",
                  options: [
                    {
                      name: "--action",
                      description:
                        "The action to take when the threshold is exceeded. [block, log]",
                      args: {
                        name: "action",
                      },
                    },
                    {
                      name: "--do-not-notify",
                      description:
                        "Whether to silence notifications when action is taken. [true, false]",
                      args: {
                        name: "do-not-notify",
                      },
                    },
                    {
                      name: "--duration",
                      description:
                        "The duration the action is in place in seconds. Default duration is 86,400 seconds (1 day)",
                      args: {
                        name: "duration",
                      },
                    },
                    {
                      name: "--enabled",
                      description:
                        "Whether the threshold is active. [true, false]",
                      args: {
                        name: "enabled",
                      },
                    },
                    {
                      name: "--interval",
                      description:
                        "The threshold interval in seconds. The default interval is 3600 seconds (1 hour)",
                      args: {
                        name: "interval",
                      },
                    },
                    jsonOption,
                    {
                      name: "--limit",
                      description:
                        "The threshold limit. Input must be between 1 and 10000. Default limit is 10",
                      args: {
                        name: "limit",
                      },
                    },
                    {
                      name: "--name",
                      description:
                        "User submitted display name of a signal threshold. Input must be between 3 and 50 characters",
                      args: {
                        name: "name",
                      },
                    },
                    {
                      name: "--signal",
                      description:
                        "The name of the signal this threshold is acting on",
                      args: {
                        name: "signal",
                      },
                    },
                    {
                      name: "--threshold-id",
                      description: "Threshold ID",
                      isRequired: true,
                      args: {
                        name: "threshold-id",
                      },
                    },
                    workspaceIdOption,
                  ],
                },
              ],
            },
            {
              name: "time-series",
              description: "Manage workspace time series metrics",
              subcommands: [
                {
                  name: "get",
                  description: "Get workspace-level time series metrics",
                  options: [
                    {
                      name: "--from",
                      description:
                        "The start of a date-time range, expressed in RFC 3339 format",
                      isRequired: true,
                      args: {
                        name: "from",
                      },
                    },
                    {
                      name: "--granularity",
                      description:
                        "Level of detail of the sample size in seconds (Default value is 86400)",
                      args: {
                        name: "granularity",
                      },
                    },
                    jsonOption,
                    {
                      name: "--metrics",
                      description:
                        "Comma-separated list of metrics to be included in the timeseries. Metrics can be XSS, SQLI, HTTP404, requests_total, requests_attack, requests_total_blocked, or any custom metric",
                      isRequired: true,
                      args: {
                        name: "metrics",
                      },
                    },
                    {
                      name: "--to",
                      description:
                        "The end of a date-time range, expressed in RFC 3339 format",
                      args: {
                        name: "to",
                      },
                    },
                    workspaceIdOption,
                  ],
                },
              ],
            },
            {
              name: "update",
              description: "Update a workspace",
              options: [
                {
                  name: "--attackThresholds",
                  description:
                    "Attack threshold parameters for system site alerts. Each threshold value is the number of attack signals per IP address that must be detected during the interval before the related IP address is flagged. Input accepted as colon separated string: Immediate:OneMinute:TenMinutes:OneHour",
                  args: {
                    name: "attackThresholds",
                  },
                },
                {
                  name: "--autoEnableNewVirtualPatches",
                  description:
                    "Automatically enable, in block mode, virtual patches released after this setting is enabled. Virtual patches released before it was enabled are not changed. Use --no-autoEnableNewVirtualPatches to disable",
                },
                {
                  name: "--blockingMode",
                  description: "User configured mode blocking mode",
                  args: {
                    name: "blockingMode",
                  },
                },
                {
                  name: "--clientIPHeaders",
                  description:
                    "Specify the request header containing the client IP address. Input accepted as colon separated string",
                  args: {
                    name: "clientIPHeaders",
                  },
                },
                {
                  name: "--defaultBlockingCode",
                  description:
                    "Default status code that is returned when a request to your web application is blocked",
                  args: {
                    name: "defaultBlockingCode",
                  },
                },
                {
                  name: "--defaultRedirectURL",
                  description:
                    "Redirect url to be used if code 301 or 302 is used",
                  args: {
                    name: "defaultRedirectURL",
                  },
                },
                {
                  name: "--description",
                  description: "User submitted description of a workspace",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--ipAnonymization",
                  description:
                    "Agents will anonymize IP addresses according to the option selected",
                  args: {
                    name: "ipAnonymization",
                  },
                },
                jsonOption,
                {
                  name: "--name",
                  description: "User submitted display name of a workspace",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--workspace-id",
                  description: "Workspace ID",
                  isRequired: true,
                  args: {
                    name: "workspace-id",
                  },
                },
              ],
            },
            {
              name: "virtualpatch",
              description: "Manage NGWAF Virtual Patches",
              subcommands: [
                {
                  name: "list",
                  description: "List virtual patches in a workspace",
                  options: [
                    jsonOption,
                    {
                      name: "--workspace-id",
                      description: "Workspace ID",
                      isRequired: true,
                      args: {
                        name: "workspace-id",
                      },
                    },
                  ],
                },
                {
                  name: ["retrieve", "get"],
                  description: "Retrieve a virtual patch",
                  options: [
                    jsonOption,
                    {
                      name: "--virtual-patch-id",
                      description: "Virtual Patch ID",
                      isRequired: true,
                      args: {
                        name: "virtual-patch-id",
                      },
                    },
                    {
                      name: "--workspace-id",
                      description: "Workspace ID",
                      isRequired: true,
                      args: {
                        name: "workspace-id",
                      },
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Update a virtual patch",
                  options: [
                    {
                      name: "--enabled",
                      description:
                        "Specify the toggle status indicator of the virtual patch",
                      args: {
                        name: "enabled",
                      },
                    },
                    jsonOption,
                    {
                      name: "--mode",
                      description:
                        "Specify the action to take when a signal for virtual patch is detected",
                      args: {
                        name: "mode",
                      },
                    },
                    {
                      name: "--virtual-patch-id",
                      description: "Virtual Patch ID",
                      isRequired: true,
                      args: {
                        name: "virtual-patch-id",
                      },
                    },
                    {
                      name: "--workspace-id",
                      description: "Workspace ID",
                      isRequired: true,
                      args: {
                        name: "workspace-id",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "wildcard-list",
              description: "Manage NGWAF Account Wildcard Lists",
              subcommands: [
                {
                  name: ["create", "add"],
                  description: "Create a workspace-level wildcard list",
                  options: [
                    {
                      name: "--description",
                      description: "User submitted description of the list",
                      args: {
                        name: "description",
                      },
                    },
                    entriesOption,
                    jsonOption,
                    {
                      name: "--name",
                      description: "User submitted display name of a list",
                      isRequired: true,
                      args: {
                        name: "name",
                      },
                    },
                    workspaceIdOption,
                  ],
                },
                {
                  name: "delete",
                  description: "Delete a workspace wildcard list",
                  options: [jsonOption, listIdOption, workspaceIdOption],
                },
                {
                  name: "get",
                  description: "Get a workspace-level wildcard list",
                  options: [jsonOption, listIdOption, workspaceIdOption],
                },
                {
                  name: "list",
                  description: "List all wildcard lists for your workspace",
                  options: [jsonOption, workspaceIdOption],
                },
                {
                  name: "update",
                  description: "Update a workspace-level wildcard list",
                  options: [
                    {
                      name: "--description",
                      description: "User submitted description of the list",
                      args: {
                        name: "description",
                      },
                    },
                    {
                      name: "--entries",
                      description:
                        "Entries for the list. Can either be a comma separated list or a path to a file",
                      args: {
                        name: "entries",
                      },
                    },
                    jsonOption,
                    listIdOption,
                    workspaceIdOption,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "object-storage",
      description: "Manage object storage",
      subcommands: [
        {
          name: "access-keys",
          description: "Manipulate Fastly access keys",
          subcommands: [
            {
              name: "create",
              description: "Create an access key",
              options: [
                {
                  name: "--bucket",
                  description:
                    "Bucket to be associated with the access key. Set flag multiple times to include multiple buckets. If omitted, all buckets are associated",
                  isRepeatable: true,
                  args: {
                    name: "bucket",
                  },
                },
                {
                  name: "--description",
                  description: "Description of the access key",
                  isRequired: true,
                  args: {
                    name: "description",
                  },
                },
                jsonOption,
                {
                  name: "--permission",
                  description:
                    "Permissions to be given to the access key (read-write-admin, read-only-admin, read-write-objects, read-only-objects)",
                  isRequired: true,
                  args: {
                    name: "permission",
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an access key",
              options: [
                {
                  name: "--ak-id",
                  description: "Access key ID",
                  isRequired: true,
                  args: {
                    name: "ak-id",
                  },
                },
                jsonOption,
              ],
            },
            {
              name: "get",
              description: "Get an access key",
              options: [
                {
                  name: "--ak-id",
                  description: "Access key ID",
                  isRequired: true,
                  args: {
                    name: "ak-id",
                  },
                },
                jsonOption,
              ],
            },
            {
              name: ["list", "list-access-keys"],
              description: "List all access keys",
              options: [jsonOption],
            },
          ],
        },
      ],
    },
    {
      name: "pops",
      description: "List Fastly datacenters",
    },
    {
      name: "products",
      description:
        "Enable, disable, and check the enablement status of products",
      options: [
        {
          name: "--disable",
          description: "Disable product",
          args: {
            name: "disable",
            suggestions: [
              "api_discovery",
              "bot_management",
              "brotli_compression",
              "domain_inspector",
              "fanout",
              "image_optimizer",
              "log_explorer_insights",
              "origin_inspector",
              "websockets",
            ],
          },
        },
        {
          name: "--enable",
          description: "Enable product",
          args: {
            name: "enable",
            suggestions: [
              "api_discovery",
              "bot_management",
              "brotli_compression",
              "domain_inspector",
              "fanout",
              "image_optimizer",
              "log_explorer_insights",
              "origin_inspector",
              "websockets",
            ],
          },
        },
        jsonOption,
        serviceIdOption,
        serviceNameOption,
      ],
    },
    {
      name: "profile",
      description:
        "Manage user profiles (deprecated: use 'fastly auth' instead)",
      hidden: true,
      deprecated: true,
      subcommands: [
        {
          name: "create",
          description:
            "Create user profile (deprecated: use 'fastly auth login' or 'fastly auth add' instead)",
          options: [
            {
              name: "--sso",
              description: "Create an SSO-based token",
            },
          ],
          args: {
            name: "profile",
            description: "Profile to create (default 'user')",
            isOptional: true,
            default: "user",
          },
        },
        {
          name: "delete",
          description:
            "Delete user profile (deprecated: use 'fastly auth delete' instead)",
          args: {
            name: "profile",
            description: "Profile to delete",
          },
        },
        {
          name: "list",
          description:
            "List user profiles (deprecated: use 'fastly auth list' instead)",
          options: [jsonOption],
        },
        {
          name: "switch",
          description:
            "Switch user profile (deprecated: use 'fastly auth use' instead)",
          args: {
            name: "profile",
            description: "Profile to switch to",
          },
        },
        {
          name: "token",
          description:
            "Print API token (deprecated: use 'fastly auth show' instead)",
          options: [
            {
              name: "--ttl",
              description:
                "Amount of time for which the token must be valid (in seconds 's', minutes 'm', or hours 'h')",
              args: {
                name: "ttl",
              },
            },
          ],
          args: {
            name: "profile",
            description: "Print API token for the named profile",
            isOptional: true,
          },
        },
        {
          name: "update",
          description:
            "Update user profile (deprecated: use 'fastly auth login' or 'fastly auth add' instead)",
          options: [
            {
              name: "--sso",
              description: "Update profile to use an SSO-based token",
            },
          ],
          args: {
            name: "profile",
            description:
              "Profile to update (defaults to the currently active profile)",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "purge",
      description:
        "Invalidate objects in the Fastly cache (deprecated: use 'fastly service purge' instead)",
      hidden: true,
      deprecated: true,
      options: [
        {
          name: "--all",
          description: "Purge everything from a service",
        },
        {
          name: "--file",
          description:
            "Purge a service of a newline delimited list of Surrogate Keys",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--key",
          description: "Purge a service of objects tagged with a Surrogate Key",
          args: {
            name: "key",
          },
        },
        serviceIdOption,
        serviceNameOption,
        {
          name: "--soft",
          description:
            "A 'soft' purge marks affected objects as stale rather than making them inaccessible",
        },
        {
          name: "--url",
          description: "Purge an individual URL",
          args: {
            name: "url",
          },
        },
      ],
    },
    {
      name: "rate-limit",
      description:
        "Manipulate rate-limiters of the Fastly API and web interface (deprecated: use 'fastly service rate-limit' instead)",
      hidden: true,
      deprecated: true,
      subcommands: serviceRateLimitSubcommands,
    },
    {
      name: "resource-link",
      description:
        "Manipulate Fastly service resource links (deprecated: use 'fastly service resource-link' instead)",
      hidden: true,
      deprecated: true,
      subcommands: serviceResourceLinkSubcommands,
    },
    {
      name: "routing-config",
      description: "Manipulate Fastly routing configs",
      subcommands: [
        {
          name: ["create", "add"],
          description: "Create a routing config",
          options: [
            {
              name: "--name",
              description: "The name of the routing config",
              isRequired: true,
              args: {
                name: "name",
              },
            },
          ],
        },
        {
          name: "deactivate",
          description:
            "Deactivate a routing config, leaving it without an active version. This does not unlink the routing config from any domains it's associated with; unset those manually with 'fastly domain update --routing-config-id nil'",
          options: [routingConfigIdOption],
        },
        {
          name: ["delete", "remove"],
          description:
            "Delete a routing config. This is rejected if the routing config is still associated with any domain, regardless of --force; unset those associations first with 'fastly domain update --routing-config-id nil'",
          options: [
            {
              name: "--force",
              description:
                "Delete the routing config even if it has an active version, bypassing the active-version check. You still can't delete a routing config that's linked to a domain",
            },
            routingConfigIdOption,
          ],
        },
        {
          name: ["deploy", "activate"],
          description: "Activate the draft version of a routing config",
          options: [routingConfigIdOption],
        },
        {
          name: ["describe", "get"],
          description: "Show detailed information about a routing config",
          options: [jsonOption, routingConfigIdOption],
        },
        {
          name: "draft",
          description: "Manipulate a Fastly routing config's draft version",
          subcommands: [
            {
              name: ["delete", "discard"],
              description:
                "Discard a routing config's draft version, reverting it back to the active version",
              options: [routingConfigIdOption],
            },
            {
              name: "diff",
              description:
                "Show the differences between a routing config's active and draft versions",
              options: [jsonOption, routingConfigIdOption],
            },
            {
              name: "update",
              description:
                "Set the comment on a routing config's draft version",
              options: [
                {
                  name: "--comment",
                  description:
                    "A descriptive note about the changes made in the draft",
                  isRequired: true,
                  args: {
                    name: "comment",
                  },
                },
                routingConfigIdOption,
              ],
            },
          ],
        },
        {
          name: "list",
          description: "List routing configs",
          options: [
            jsonOption,
            {
              name: "--sort",
              description: "The order in which to list the results",
              args: {
                name: "sort",
              },
            },
            {
              name: "--state",
              description:
                "Filter results by lifecycle state. Set flag multiple times to filter by multiple states",
              isRepeatable: true,
              args: {
                name: "state",
              },
            },
          ],
        },
        {
          name: "path",
          description: "Manipulate paths within a Fastly routing config",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create a path within a routing config",
              options: [
                {
                  name: "--path",
                  description:
                    'The URL path pattern (max 2048 characters, starts with "/")',
                  isRequired: true,
                  args: {
                    name: "path",
                  },
                },
                routingConfigIdOption,
              ],
            },
            {
              name: ["delete", "remove"],
              description: "Delete a path",
              options: [pathIdOption, routingConfigIdOption],
            },
            {
              name: ["describe", "get"],
              description: "Show detailed information about a path",
              options: [jsonOption, pathIdOption, routingConfigIdOption],
            },
            {
              name: "list",
              description: "List paths within a routing config",
              options: [
                jsonOption,
                {
                  name: "--match",
                  description:
                    "Filters results using the given path pattern matching strategy",
                  args: {
                    name: "match",
                  },
                },
                {
                  name: "--path",
                  description: "Filters results by path pattern",
                  args: {
                    name: "path",
                  },
                },
                routingConfigIdOption,
                {
                  name: "--sort",
                  description: "The order in which to list the results",
                  args: {
                    name: "sort",
                  },
                },
              ],
            },
            {
              name: "rule",
              description:
                "Manipulate rules within a path of a Fastly routing config",
              subcommands: [
                {
                  name: ["create", "add"],
                  description: "Create a rule within a path",
                  options: [
                    {
                      name: "--file",
                      description:
                        'Path to a JSON file describing the rule, e.g. {"action": {"type": "service", "value": "..."}, "conditions": [...]}. Omit "conditions" to create the default (catch-all) rule for the path',
                      isRequired: true,
                      args: {
                        name: "file",
                        template: "filepaths",
                      },
                    },
                    pathIdOption,
                    routingConfigIdOption,
                  ],
                },
                {
                  name: ["delete", "remove"],
                  description: "Delete a rule",
                  options: [
                    pathIdOption,
                    routingConfigIdOption,
                    {
                      name: "--rule-id",
                      description: "The Rule Identifier",
                      isRequired: true,
                      args: {
                        name: "rule-id",
                      },
                    },
                  ],
                },
                {
                  name: ["describe", "get"],
                  description: "Show detailed information about a rule",
                  options: [
                    jsonOption,
                    pathIdOption,
                    routingConfigIdOption,
                    {
                      name: "--rule-id",
                      description: "The Rule Identifier",
                      isRequired: true,
                      args: {
                        name: "rule-id",
                      },
                    },
                  ],
                },
                {
                  name: "list",
                  description: "List rules within a path",
                  options: [
                    jsonOption,
                    pathIdOption,
                    routingConfigIdOption,
                    {
                      name: "--sort",
                      description: "The order in which to list the results",
                      args: {
                        name: "sort",
                      },
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Update a rule",
                  options: [
                    {
                      name: "--file",
                      description:
                        'Path to a JSON file describing the fields to update, e.g. {"action": {"type": "service", "value": "..."}, "conditions": [...]}. A field omitted from the JSON is left unchanged; set "conditions" to an empty array to turn the rule into the default (catch-all) rule for its path',
                      isRequired: true,
                      args: {
                        name: "file",
                        template: "filepaths",
                      },
                    },
                    pathIdOption,
                    routingConfigIdOption,
                    {
                      name: "--rule-id",
                      description: "The Rule Identifier",
                      isRequired: true,
                      args: {
                        name: "rule-id",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "update",
              description: "Update a path",
              options: [
                {
                  name: "--path",
                  description:
                    'The URL path pattern (max 2048 characters, starts with "/")',
                  args: {
                    name: "path",
                  },
                },
                pathIdOption,
                routingConfigIdOption,
              ],
            },
          ],
        },
        {
          name: "version",
          description:
            "Manipulate a Fastly routing config's historical versions",
          subcommands: [
            {
              name: "activate",
              description: "Reactivate a previous version of a routing config",
              options: [
                routingConfigIdOption,
                {
                  name: "--version-id",
                  description: "The identifier of the version to reactivate",
                  isRequired: true,
                  args: {
                    name: "version-id",
                  },
                },
              ],
            },
            {
              name: "delete-inactive",
              description:
                "Permanently delete all inactive versions of a routing config. This destroys rollback history and cannot be undone",
              options: [routingConfigIdOption],
            },
            {
              name: "list",
              description: "List a routing config's inactive versions",
              options: [
                jsonOption,
                routingConfigIdOption,
                {
                  name: "--sort",
                  description: "The order in which to list the results",
                  args: {
                    name: "sort",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "secret-store",
      description: "Manipulate Fastly Secret Stores",
      subcommands: [
        {
          name: "create",
          description: "Create a new secret store",
          options: [
            jsonOption,
            {
              name: ["-n", "--name"],
              description: "Store name",
              isRequired: true,
              args: {
                name: "name",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a secret store",
          options: [jsonOption, storeIdOption],
        },
        {
          name: ["describe", "get"],
          description: "Retrieve a single secret store",
          options: [jsonOption, storeIdOption],
        },
        {
          name: "list",
          description: "List secret stores",
          options: [
            {
              name: ["-c", "--cursor"],
              description:
                "Pagination cursor (Use 'next_cursor' value from list output)",
              args: {
                name: "cursor",
              },
            },
            jsonOption,
            {
              name: ["-l", "--limit"],
              description: "Maximum number of items to list",
              args: {
                name: "limit",
                default: "50",
              },
            },
          ],
        },
      ],
    },
    {
      name: "secret-store-entry",
      description: "Manipulate Fastly Secret Store secrets",
      subcommands: [
        {
          name: "create",
          description: "Create a new secret within specified store",
          options: [
            {
              name: ["-f", "--file"],
              description: "Read secret value from file instead of prompt",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            jsonOption,
            {
              name: ["-n", "--name"],
              description: "Secret name",
              isRequired: true,
              args: {
                name: "name",
              },
            },
            {
              name: "--recreate",
              description:
                "Recreate secret by name (errors if secret doesn't already exist)",
            },
            {
              name: "--recreate-allow",
              description: "Create or recreate secret by name",
            },
            {
              name: "--stdin",
              description: "Read secret value from STDIN instead of prompt",
            },
            storeIdOption,
          ],
        },
        {
          name: "delete",
          description: "Delete a secret",
          options: [
            jsonOption,
            {
              name: ["-n", "--name"],
              description: "Secret name",
              isRequired: true,
              args: {
                name: "name",
              },
            },
            storeIdOption,
          ],
        },
        {
          name: ["describe", "get"],
          description: "Retrieve a single secret",
          options: [
            jsonOption,
            {
              name: ["-n", "--name"],
              description: "Secret name",
              isRequired: true,
              args: {
                name: "name",
              },
            },
            storeIdOption,
          ],
        },
        {
          name: "list",
          description: "List secrets within a specified store",
          options: [
            {
              name: ["-c", "--cursor"],
              description:
                "Pagination cursor (Use 'next_cursor' value from list output)",
              args: {
                name: "cursor",
              },
            },
            jsonOption,
            {
              name: ["-l", "--limit"],
              description: "Maximum number of items to list",
              args: {
                name: "limit",
                default: "50",
              },
            },
            storeIdOption,
          ],
        },
      ],
    },
    {
      name: "service",
      description: "Manipulate Fastly services",
      subcommands: [
        {
          name: "acl",
          description: "Manipulate Fastly ACLs (Access Control Lists)",
          subcommands: serviceAclSubcommands,
        },
        {
          name: "acl-entry",
          description: "Manipulate Fastly ACL (Access Control List) entries",
          subcommands: serviceAclEntrySubcommands,
        },
        {
          name: "alert",
          description: "Manipulate Fastly Service Alerts",
          subcommands: serviceAlertSubcommands,
        },
        {
          name: "auth",
          description: "Allow users to access only specified services",
          subcommands: serviceAuthSubcommands,
        },
        {
          name: "backend",
          description: "Manipulate Fastly service version backends",
          subcommands: serviceBackendSubcommands,
        },
        {
          name: ["create", "add"],
          description: "Create a Fastly service",
          options: [
            {
              name: "--comment",
              description: "Human-readable comment",
              args: {
                name: "comment",
              },
            },
            {
              name: ["-n", "--name"],
              description: "Service name",
              args: {
                name: "name",
              },
            },
            {
              name: "--type",
              description:
                'Service type. Can be one of "wasm" or "vcl", defaults to "vcl"',
              args: {
                name: "type",
                suggestions: ["wasm", "vcl"],
                default: "vcl",
              },
            },
          ],
        },
        {
          name: ["delete", "remove"],
          description: "Delete a Fastly service",
          options: [
            {
              name: ["-f", "--force"],
              description: "Force deletion of an active service",
            },
            serviceIdOption,
            serviceNameOption,
          ],
        },
        {
          name: ["describe", "get"],
          description: "Show detailed information about a Fastly service",
          options: [jsonOption, serviceIdOption, serviceNameOption],
        },
        {
          name: "dictionary",
          description: "Manipulate Fastly edge dictionaries",
          subcommands: serviceDictionarySubcommands,
        },
        {
          name: "dictionary-entry",
          description: "Manipulate Fastly edge dictionary items",
          subcommands: serviceDictionaryEntrySubcommands,
        },
        {
          name: "domain",
          description: "Manipulate Fastly service version domains",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create a domain on a Fastly service version",
              options: [
                autocloneOption,
                commentOption,
                {
                  name: ["-n", "--name"],
                  description: "Domain name",
                  args: {
                    name: "name",
                  },
                },
                serviceIdOption,
                serviceNameOption,
                versionOption,
              ],
            },
            {
              name: ["delete", "remove"],
              description: "Delete a domain on a Fastly service version",
              options: [
                autocloneOption,
                {
                  name: ["-n", "--name"],
                  description: "Domain name",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
                serviceIdOption,
                serviceNameOption,
                versionOption,
              ],
            },
            {
              name: ["describe", "get"],
              description:
                "Show detailed information about a domain on a Fastly service version",
              options: [
                jsonOption,
                {
                  name: ["-n", "--name"],
                  description: "Name of domain",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
                serviceIdOption,
                serviceNameOption,
                versionOption,
              ],
            },
            {
              name: "list",
              description: "List domains on a Fastly service version",
              options: [
                jsonOption,
                serviceIdOption,
                serviceNameOption,
                versionOption,
              ],
            },
            {
              name: "update",
              description: "Update a domain on a Fastly service version",
              options: [
                autocloneOption,
                commentOption,
                {
                  name: ["-n", "--name"],
                  description: "Domain name",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--new-name",
                  description: "New domain name",
                  args: {
                    name: "new-name",
                  },
                },
                serviceIdOption,
                serviceNameOption,
                versionOption,
              ],
            },
            {
              name: "validate",
              description:
                "Checks the status of a specific domain's DNS record for a Service Version",
              options: [
                {
                  name: ["-a", "--all"],
                  description:
                    "Checks the status of all domains' DNS records for a Service Version",
                },
                {
                  name: ["-n", "--name"],
                  description:
                    "The name of the domain associated with this service",
                  args: {
                    name: "name",
                  },
                },
                serviceIdOption,
                serviceNameOption,
                versionOption,
              ],
            },
          ],
        },
        {
          name: "healthcheck",
          description: "Manipulate Fastly service version healthchecks",
          subcommands: serviceHealthcheckSubcommands,
        },
        {
          name: "imageoptimizer",
          description:
            "Manipulate Fastly service Image Optimizer default settings",
          subcommands: serviceImageoptimizerSubcommands,
        },
        {
          name: "list",
          description: "List Fastly services",
          options: [
            {
              name: "--direction",
              description: "Direction in which to sort results",
              args: {
                name: "direction",
                suggestions: ["ascend", "descend"],
              },
            },
            jsonOption,
            pageOption,
            perPageOption,
            {
              name: "--sort",
              description: "Field on which to sort",
              args: {
                name: "sort",
                default: "created",
              },
            },
          ],
        },
        {
          name: "logging",
          description: "Inspect and manage Fastly service logging",
          subcommands: [
            {
              name: "azureblob",
              description:
                "Manipulate Fastly service version Azure Blob Storage logging endpoints",
              subcommands: serviceLoggingAzureblobSubcommands,
            },
            {
              name: "bigquery",
              description:
                "Manipulate Fastly service version BigQuery logging endpoints",
              subcommands: serviceLoggingBigquerySubcommands,
            },
            {
              name: "cloudfiles",
              description:
                "Manipulate Fastly service version Cloudfiles logging endpoints",
              subcommands: serviceLoggingCloudfilesSubcommands,
            },
            {
              name: "datadog",
              description:
                "Manipulate Fastly service version Datadog logging endpoints",
              subcommands: serviceLoggingDatadogSubcommands,
            },
            {
              name: "debug",
              description: "Stream live logging endpoint errors",
              options: [
                {
                  name: "--filter",
                  description: "Filter errors by logging endpoint name",
                  args: {
                    name: "filter",
                  },
                },
                {
                  name: "--from",
                  description: "From time, in Unix seconds",
                  args: {
                    name: "from",
                  },
                },
                {
                  name: "--json",
                  description: "Output error stream as JSON",
                },
                serviceIdOption,
                serviceNameOption,
                {
                  name: "--timestamps",
                  description: "Print full timestamps instead of compact time",
                },
                {
                  name: "--to",
                  description: "To time, in Unix seconds",
                  args: {
                    name: "to",
                  },
                },
              ],
            },
            {
              name: "digitalocean",
              description:
                "Manipulate Fastly service version DigitalOcean Spaces logging endpoints",
              subcommands: serviceLoggingDigitaloceanSubcommands,
            },
            {
              name: "elasticsearch",
              description:
                "Manipulate Fastly service version Elasticsearch logging endpoints",
              subcommands: serviceLoggingElasticsearchSubcommands,
            },
            {
              name: "fos",
              description:
                "Manipulate Fastly service version Fastly Object Storage logging endpoints",
              subcommands: [
                {
                  name: ["create", "add"],
                  description:
                    "Create a Fastly Object Storage logging endpoint on a Fastly service version",
                  options: [
                    autocloneOption,
                    {
                      name: "--bucket",
                      description: "Your Fastly Object Storage bucket name",
                      args: {
                        name: "bucket",
                      },
                    },
                    compressionCodecOption,
                    fileMaxBytesOption,
                    formatOption,
                    formatVersionOption,
                    gzipLevelOption,
                    messageTypeOption,
                    {
                      name: ["-n", "--name"],
                      description:
                        "The name of the Fastly Object Storage logging object. Used as a primary key for API access",
                      args: {
                        name: "name",
                      },
                    },
                    pathOption,
                    periodOption,
                    placementOption,
                    publicKeyOption,
                    {
                      name: "--region",
                      description:
                        "The region of the Fastly Object Storage bucket",
                      args: {
                        name: "region",
                      },
                    },
                    responseConditionOption,
                    serviceIdOption,
                    serviceNameOption,
                    timestampFormatOption,
                    versionOption,
                  ],
                },
                {
                  name: ["delete", "remove"],
                  description:
                    "Delete a Fastly Object Storage logging endpoint on a Fastly service version",
                  options: [
                    autocloneOption,
                    {
                      name: ["-n", "--name"],
                      description:
                        "The name of the Fastly Object Storage logging object",
                      isRequired: true,
                      args: {
                        name: "name",
                      },
                    },
                    serviceIdOption,
                    serviceNameOption,
                    versionOption,
                  ],
                },
                {
                  name: ["describe", "get"],
                  description:
                    "Show detailed information about a Fastly Object Storage logging endpoint on a Fastly service version",
                  options: [
                    jsonOption,
                    {
                      name: ["-n", "--name"],
                      description:
                        "The name of the Fastly Object Storage logging object",
                      isRequired: true,
                      args: {
                        name: "name",
                      },
                    },
                    serviceIdOption,
                    serviceNameOption,
                    versionOption,
                  ],
                },
                {
                  name: "list",
                  description:
                    "List Fastly Object Storage endpoints on a Fastly service version",
                  options: [
                    jsonOption,
                    serviceIdOption,
                    serviceNameOption,
                    versionOption,
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update a Fastly Object Storage logging endpoint on a Fastly service version",
                  options: [
                    autocloneOption,
                    {
                      name: "--bucket",
                      description: "Your Fastly Object Storage bucket name",
                      args: {
                        name: "bucket",
                      },
                    },
                    compressionCodecOption,
                    fileMaxBytesOption,
                    formatOption,
                    formatVersionOption,
                    gzipLevelOption,
                    messageTypeOption,
                    {
                      name: ["-n", "--name"],
                      description:
                        "The name of the Fastly Object Storage logging object",
                      isRequired: true,
                      args: {
                        name: "name",
                      },
                    },
                    {
                      name: "--new-name",
                      description:
                        "New name of the Fastly Object Storage logging object",
                      args: {
                        name: "new-name",
                      },
                    },
                    pathOption,
                    periodOption,
                    placementOption,
                    publicKeyOption,
                    {
                      name: "--region",
                      description:
                        "The region of the Fastly Object Storage bucket",
                      args: {
                        name: "region",
                      },
                    },
                    responseConditionOption,
                    serviceIdOption,
                    serviceNameOption,
                    timestampFormatOption,
                    versionOption,
                  ],
                },
              ],
            },
            {
              name: "ftp",
              description:
                "Manipulate Fastly service version FTP logging endpoints",
              subcommands: serviceLoggingFtpSubcommands,
            },
            {
              name: "gcs",
              description:
                "Manipulate Fastly service version GCS logging endpoints",
              subcommands: serviceLoggingGcsSubcommands,
            },
            {
              name: "googlepubsub",
              description:
                "Manipulate Fastly service version Google Cloud Pub/Sub logging endpoints",
              subcommands: serviceLoggingGooglepubsubSubcommands,
            },
            {
              name: "grafanacloudlogs",
              description:
                "Manipulate Fastly service version Grafana Cloud Logs logging endpoints",
              subcommands: serviceLoggingGrafanacloudlogsSubcommands,
            },
            {
              name: "heroku",
              description:
                "Manipulate Fastly service version Heroku logging endpoints",
              subcommands: serviceLoggingHerokuSubcommands,
            },
            {
              name: "honeycomb",
              description:
                "Manipulate Fastly service version Honeycomb logging endpoints",
              subcommands: serviceLoggingHoneycombSubcommands,
            },
            {
              name: "https",
              description:
                "Manipulate Fastly service version HTTPS logging endpoints",
              subcommands: serviceLoggingHttpsSubcommands,
            },
            {
              name: "insights",
              description: "Retrieve statistics from sampled log records",
              options: [
                {
                  name: "--domain",
                  description: "Limit data to the specified request domain",
                  args: {
                    name: "domain",
                  },
                },
                {
                  name: "--domain-exact-match",
                  description: "Treat --domain as an exact match",
                },
                {
                  name: "--end",
                  description: "Exclusive end time in RFC3339 format",
                  isRequired: true,
                  args: {
                    name: "end",
                  },
                },
                jsonOption,
                {
                  name: "--limit",
                  description: "Maximum number of rows to return (up to 100)",
                  args: {
                    name: "limit",
                  },
                },
                {
                  name: "--pops",
                  description: "Comma-separated list of Fastly POP codes",
                  args: {
                    name: "pops",
                  },
                },
                serviceIdOption,
                serviceNameOption,
                {
                  name: "--start",
                  description: "Inclusive start time in RFC3339 format",
                  isRequired: true,
                  args: {
                    name: "start",
                  },
                },
                {
                  name: "--visualization",
                  description: "Log Insights visualization to retrieve",
                  isRequired: true,
                  args: {
                    name: "visualization",
                    suggestions: [
                      "top-url-by-bandwidth",
                      "bottom-url-by-cache-hit-ratio",
                      "top-url-by-cache-hit-ratio",
                      "country-statistics",
                      "top-url-by-duration-sum",
                      "top-4xx-urls",
                      "top-5xx-urls",
                      "top-url-by-misses",
                      "top-url-by-requests",
                      "top-browser-by-requests",
                      "top-content-type-by-requests",
                      "top-device-by-requests",
                      "top-os-by-requests",
                      "response-status-codes",
                      "top-503-responses",
                    ],
                  },
                },
              ],
            },
            {
              name: "kafka",
              description:
                "Manipulate Fastly service version Kafka logging endpoints",
              subcommands: serviceLoggingKafkaSubcommands,
            },
            {
              name: "kinesis",
              description:
                "Manipulate a Kinesis logging endpoint for a specific Fastly service version",
              subcommands: serviceLoggingKinesisSubcommands,
            },
            {
              name: "log-explorer",
              description: "Retrieve sampled log records",
              options: [
                {
                  name: "--end",
                  description: "Exclusive end time in RFC3339 format",
                  isRequired: true,
                  args: {
                    name: "end",
                  },
                },
                {
                  name: "--filter",
                  description:
                    "Filter in FIELD,OPERATOR,VALUE format (repeatable)",
                  isRepeatable: true,
                  args: {
                    name: "filter",
                  },
                },
                jsonOption,
                serviceIdOption,
                serviceNameOption,
                {
                  name: "--start",
                  description: "Inclusive start time in RFC3339 format",
                  isRequired: true,
                  args: {
                    name: "start",
                  },
                },
              ],
            },
            {
              name: "loggly",
              description:
                "Manipulate Fastly service version Loggly logging endpoints",
              subcommands: serviceLoggingLogglySubcommands,
            },
            {
              name: "logshuttle",
              description:
                "Manipulate Fastly service version Logshuttle logging endpoints",
              subcommands: serviceLoggingLogshuttleSubcommands,
            },
            {
              name: "newrelic",
              description:
                "Manipulate a NewRelic logging endpoint for a specific Fastly service version",
              subcommands: serviceLoggingNewrelicSubcommands,
            },
            {
              name: "newrelicotlp",
              description:
                "Manipulate a NewRelic OTLP logging endpoint for a specific Fastly service version",
              subcommands: serviceLoggingNewrelicotlpSubcommands,
            },
            {
              name: "openstack",
              description:
                "Manipulate Fastly service version OpenStack logging endpoints",
              subcommands: serviceLoggingOpenstackSubcommands,
            },
            {
              name: "papertrail",
              description:
                "Manipulate Fastly service version Papertrail logging endpoints",
              subcommands: serviceLoggingPapertrailSubcommands,
            },
            {
              name: "s3",
              description:
                "Manipulate Fastly service version S3 logging endpoints",
              subcommands: serviceLoggingS3Subcommands,
            },
            {
              name: "scalyr",
              description:
                "Manipulate Fastly service version Scalyr logging endpoints",
              subcommands: serviceLoggingScalyrSubcommands,
            },
            {
              name: "sftp",
              description:
                "Manipulate Fastly service version SFTP logging endpoints",
              subcommands: serviceLoggingSftpSubcommands,
            },
            {
              name: "splunk",
              description:
                "Manipulate Fastly service version Splunk logging endpoints",
              subcommands: serviceLoggingSplunkSubcommands,
            },
            {
              name: "sumologic",
              description:
                "Manipulate Fastly service version Sumologic logging endpoints",
              subcommands: serviceLoggingSumologicSubcommands,
            },
            {
              name: "syslog",
              description:
                "Manipulate Fastly service version Syslog logging endpoints",
              subcommands: serviceLoggingSyslogSubcommands,
            },
          ],
        },
        {
          name: "purge",
          description: "Invalidate objects in the Fastly cache",
          options: [
            {
              name: "--all",
              description: "Purge everything from a service",
            },
            {
              name: "--file",
              description:
                "Purge a service of a newline delimited list of Surrogate Keys",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: "--key",
              description:
                "Purge a service of objects tagged with a Surrogate Key",
              args: {
                name: "key",
              },
            },
            serviceIdOption,
            serviceNameOption,
            {
              name: "--soft",
              description:
                "A 'soft' purge marks affected objects as stale rather than making them inaccessible",
            },
            {
              name: "--url",
              description: "Purge an individual URL",
              args: {
                name: "url",
              },
            },
          ],
        },
        {
          name: "rate-limit",
          description:
            "Manipulate rate-limiters of the Fastly API and web interface",
          subcommands: serviceRateLimitSubcommands,
        },
        {
          name: "resource-link",
          description: "Manipulate Fastly service resource links",
          subcommands: serviceResourceLinkSubcommands,
        },
        {
          name: "search",
          description: "Search for a Fastly service by name",
          options: [
            jsonOption,
            {
              name: ["-n", "--name"],
              description: "Service name",
              isRequired: true,
              args: {
                name: "name",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update a Fastly service",
          options: [
            {
              name: "--comment",
              description: "Human-readable comment",
              args: {
                name: "comment",
              },
            },
            {
              name: ["-n", "--name"],
              description: "Service name",
              args: {
                name: "name",
              },
            },
            serviceIdOption,
            serviceNameOption,
          ],
        },
        {
          name: "vcl",
          description: "Manipulate Fastly service version VCL",
          subcommands: [
            {
              name: "condition",
              description: "Manipulate Fastly service version conditions",
              subcommands: serviceVclConditionSubcommands,
            },
            {
              name: "custom",
              description: "Manipulate Fastly service version custom VCL",
              subcommands: serviceVclCustomSubcommands,
            },
            {
              name: ["describe", "get"],
              description:
                "Get the generated VCL for a particular service and version",
              options: [
                jsonOption,
                serviceIdOption,
                serviceNameOption,
                versionOption,
              ],
            },
            {
              name: "snippet",
              description:
                "Manipulate Fastly VCL snippets (blocks of VCL logic inserted into your service's configuration that don't require custom VCL)",
              subcommands: serviceVclSnippetSubcommands,
            },
          ],
        },
        {
          name: "version",
          description: "Manipulate Fastly service versions",
          subcommands: [
            {
              name: "activate",
              description: "Activate a Fastly service version",
              options: [
                autocloneOption,
                serviceIdOption,
                serviceNameOption,
                versionOption,
              ],
            },
            {
              name: "clone",
              description: "Clone a Fastly service version",
              options: [
                jsonOption,
                serviceIdOption,
                serviceNameOption,
                versionOption,
              ],
            },
            {
              name: "deactivate",
              description: "Deactivate a Fastly service version",
              options: [serviceIdOption, serviceNameOption, versionOption],
            },
            {
              name: "list",
              description: "List Fastly service versions",
              options: [jsonOption, serviceIdOption, serviceNameOption],
            },
            {
              name: "lock",
              description: "Lock a Fastly service version",
              options: [serviceIdOption, serviceNameOption, versionOption],
            },
            {
              name: "stage",
              description: "Stage a Fastly service version",
              options: [
                autocloneOption,
                serviceIdOption,
                serviceNameOption,
                versionOption,
              ],
            },
            {
              name: "unstage",
              description: "Unstage a Fastly service version",
              options: [serviceIdOption, serviceNameOption, versionOption],
            },
            {
              name: "update",
              description: "Update a Fastly service version",
              options: [
                autocloneOption,
                {
                  name: "--comment",
                  description: "Human-readable comment",
                  args: {
                    name: "comment",
                  },
                },
                serviceIdOption,
                serviceNameOption,
                versionOption,
              ],
            },
            {
              name: "validate",
              description: "Validate a service version",
              options: [
                jsonOption,
                serviceIdOption,
                serviceNameOption,
                versionOption,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "service-auth",
      description:
        "Manipulate Fastly Service Authentication (deprecated: use 'fastly service auth' instead)",
      hidden: true,
      deprecated: true,
      subcommands: serviceAuthSubcommands,
    },
    {
      name: "service-version",
      description:
        "Manipulate Fastly service versions (deprecated: use 'fastly service version' instead)",
      hidden: true,
      deprecated: true,
      subcommands: [
        {
          name: "activate",
          description: "Activate a Fastly service version",
          options: [
            autocloneOption,
            serviceIdOption,
            serviceNameOption,
            versionOption,
          ],
        },
        {
          name: "clone",
          description: "Clone a Fastly service version",
          options: [
            jsonOption,
            serviceIdOption,
            serviceNameOption,
            versionOption,
          ],
        },
        {
          name: "deactivate",
          description: "Deactivate a Fastly service version",
          options: [serviceIdOption, serviceNameOption, versionOption],
        },
        {
          name: "list",
          description: "List Fastly service versions",
          options: [jsonOption, serviceIdOption, serviceNameOption],
        },
        {
          name: "lock",
          description: "Lock a Fastly service version",
          options: [serviceIdOption, serviceNameOption, versionOption],
        },
        {
          name: "stage",
          description: "Stage a Fastly service version",
          options: [
            autocloneOption,
            serviceIdOption,
            serviceNameOption,
            versionOption,
          ],
        },
        {
          name: "unstage",
          description: "Unstage a Fastly service version",
          options: [serviceIdOption, serviceNameOption, versionOption],
        },
        {
          name: "update",
          description: "Update a Fastly service version",
          options: [
            autocloneOption,
            {
              name: "--comment",
              description: "Human-readable comment",
              args: {
                name: "comment",
              },
            },
            serviceIdOption,
            serviceNameOption,
            versionOption,
          ],
        },
      ],
    },
    {
      name: "shellcomplete",
      description:
        "Hidden command used to prevent help output when using --completion-script-<T>",
      hidden: true,
    },
    {
      name: "sso",
      description:
        "Single Sign-On authentication (deprecated: use 'fastly auth login --sso --token <name>' instead)",
      hidden: true,
      deprecated: true,
      args: {
        name: "profile",
        description: "Profile to authenticate (i.e. create/update a token for)",
        isOptional: true,
      },
    },
    {
      name: "stats",
      description:
        "View statistics for Fastly services: historical, realtime, aggregate, usage, domain and origin inspection",
      subcommands: [
        {
          name: "aggregate",
          description: "View aggregated stats across all services",
          options: [
            {
              name: "--by",
              description: "Aggregation period (minute/hour/day)",
              args: {
                name: "by",
                suggestions: ["minute", "hour", "day"],
              },
            },
            {
              name: "--format",
              description: "Output format (json)",
              hidden: true,
              args: {
                name: "format",
                suggestions: ["json"],
              },
            },
            {
              name: "--from",
              description: "Start time",
              args: {
                name: "from",
              },
            },
            jsonOption,
            {
              name: "--region",
              description: "Filter by region ('stats regions' to list)",
              args: {
                name: "region",
              },
            },
            {
              name: "--to",
              description: "End time",
              args: {
                name: "to",
              },
            },
          ],
        },
        {
          name: "domain-inspector",
          description: "View domain metrics for a Fastly service",
          options: [
            {
              name: "--cursor",
              description: "Pagination cursor from a previous response",
              args: {
                name: "cursor",
              },
            },
            {
              name: "--datacenter",
              description: "Filter by POP (repeatable)",
              isRepeatable: true,
              args: {
                name: "datacenter",
              },
            },
            {
              name: "--domain",
              description: "Filter by domain (repeatable)",
              isRepeatable: true,
              args: {
                name: "domain",
              },
            },
            {
              name: "--downsample",
              description: "Sample window (minute/hour/day)",
              args: {
                name: "downsample",
                suggestions: ["minute", "hour", "day"],
              },
            },
            {
              name: "--format",
              description: "Output format (json)",
              hidden: true,
              args: {
                name: "format",
                suggestions: ["json"],
              },
            },
            {
              name: "--from",
              description: "Start time (RFC3339 or Unix timestamp)",
              args: {
                name: "from",
              },
            },
            {
              name: "--group-by",
              description: "Dimensions to group by (repeatable)",
              isRepeatable: true,
              args: {
                name: "group-by",
              },
            },
            jsonOption,
            {
              name: "--limit",
              description: "Max entries to return",
              args: {
                name: "limit",
              },
            },
            {
              name: "--metric",
              description: "Metrics to retrieve (repeatable, up to 10)",
              isRepeatable: true,
              args: {
                name: "metric",
              },
            },
            {
              name: "--region",
              description: "Filter by region (repeatable)",
              isRepeatable: true,
              args: {
                name: "region",
              },
            },
            serviceIdOption,
            serviceNameOption,
            {
              name: "--to",
              description: "End time (RFC3339 or Unix timestamp)",
              args: {
                name: "to",
              },
            },
          ],
        },
        {
          name: "historical",
          description: "View historical stats for a Fastly service",
          options: [
            {
              name: "--by",
              description: "Aggregation period (minute/hour/day)",
              args: {
                name: "by",
                suggestions: ["minute", "hour", "day"],
              },
            },
            {
              name: "--field",
              description:
                "Filter to a single stats field (e.g. bandwidth, requests)",
              args: {
                name: "field",
              },
            },
            {
              name: "--format",
              description: "Output format (json)",
              hidden: true,
              args: {
                name: "format",
                suggestions: ["json"],
              },
            },
            {
              name: "--from",
              description:
                "From time, accepted formats at https://fastly.dev/reference/api/metrics-stats/historical-stats",
              args: {
                name: "from",
              },
            },
            jsonOption,
            {
              name: "--region",
              description: "Filter by region ('stats regions' to list)",
              args: {
                name: "region",
              },
            },
            serviceIdOption,
            serviceNameOption,
            {
              name: "--to",
              description: "To time",
              args: {
                name: "to",
              },
            },
          ],
        },
        {
          name: "origin-inspector",
          description: "View origin metrics for a Fastly service",
          options: [
            {
              name: "--cursor",
              description: "Pagination cursor from a previous response",
              args: {
                name: "cursor",
              },
            },
            {
              name: "--datacenter",
              description: "Filter by POP (repeatable)",
              isRepeatable: true,
              args: {
                name: "datacenter",
              },
            },
            {
              name: "--downsample",
              description: "Sample window (minute/hour/day)",
              args: {
                name: "downsample",
                suggestions: ["minute", "hour", "day"],
              },
            },
            {
              name: "--format",
              description: "Output format (json)",
              hidden: true,
              args: {
                name: "format",
                suggestions: ["json"],
              },
            },
            {
              name: "--from",
              description: "Start time (RFC3339 or Unix timestamp)",
              args: {
                name: "from",
              },
            },
            {
              name: "--group-by",
              description: "Dimensions to group by (repeatable)",
              isRepeatable: true,
              args: {
                name: "group-by",
              },
            },
            {
              name: "--host",
              description: "Filter by origin host (repeatable)",
              isRepeatable: true,
              args: {
                name: "host",
              },
            },
            jsonOption,
            {
              name: "--limit",
              description: "Max entries to return",
              args: {
                name: "limit",
              },
            },
            {
              name: "--metric",
              description: "Metrics to retrieve (repeatable, up to 10)",
              isRepeatable: true,
              args: {
                name: "metric",
              },
            },
            {
              name: "--region",
              description: "Filter by region (repeatable)",
              isRepeatable: true,
              args: {
                name: "region",
              },
            },
            serviceIdOption,
            serviceNameOption,
            {
              name: "--to",
              description: "End time (RFC3339 or Unix timestamp)",
              args: {
                name: "to",
              },
            },
          ],
        },
        {
          name: "realtime",
          description: "View realtime stats for a Fastly service",
          options: [
            {
              name: "--format",
              description: "Output format (json)",
              hidden: true,
              args: {
                name: "format",
                suggestions: ["json"],
              },
            },
            jsonOption,
            serviceIdOption,
            serviceNameOption,
          ],
        },
        {
          name: "regions",
          description: "List stats regions",
        },
        {
          name: "usage",
          description: "View usage stats (bandwidth, requests)",
          options: [
            {
              name: "--by",
              description: "Aggregation period (minute/hour/day)",
              args: {
                name: "by",
                suggestions: ["minute", "hour", "day"],
              },
            },
            {
              name: "--by-service",
              description: "Break down usage by service",
            },
            {
              name: "--format",
              description: "Output format (json)",
              hidden: true,
              args: {
                name: "format",
                suggestions: ["json"],
              },
            },
            {
              name: "--from",
              description: "Start time",
              args: {
                name: "from",
              },
            },
            jsonOption,
            {
              name: "--region",
              description: "Filter by region ('stats regions' to list)",
              args: {
                name: "region",
              },
            },
            {
              name: "--to",
              description: "End time",
              args: {
                name: "to",
              },
            },
          ],
        },
      ],
    },
    {
      name: "tls-config",
      description: "Apply configuration options for each TLS enabled domain",
      subcommands: [
        {
          name: ["describe", "get"],
          description: "Show a TLS configuration",
          options: [
            {
              name: "--id",
              description:
                "Alphanumeric string identifying a TLS configuration",
              isRequired: true,
              args: {
                name: "id",
              },
            },
            {
              name: "--include",
              description: "Include related objects (comma-separated values)",
              args: {
                name: "include",
                suggestions: ["dns_records"],
              },
            },
            jsonOption,
          ],
        },
        {
          name: "list",
          description: "List all TLS configurations",
          options: [
            {
              name: "--filter-bulk",
              description: "Optionally filter by the bulk attribute",
            },
            {
              name: "--include",
              description: "Include related objects (comma-separated values)",
              args: {
                name: "include",
                suggestions: ["dns_records"],
              },
            },
            jsonOption,
            pageOption,
            perPageOption,
          ],
        },
        {
          name: "update",
          description: "Update a TLS configuration",
          options: [
            {
              name: "--id",
              description:
                "Alphanumeric string identifying a TLS configuration",
              isRequired: true,
              args: {
                name: "id",
              },
            },
            {
              name: "--name",
              description: "A custom name for your TLS configuration",
              isRequired: true,
              args: {
                name: "name",
              },
            },
          ],
        },
      ],
    },
    {
      name: "tls-custom",
      description: "Manage custom keys and certs used to enable TLS",
      subcommands: [
        {
          name: "activation",
          description: "Upload and manage TLS activations",
          subcommands: [
            {
              name: ["describe", "get"],
              description: "Show a TLS configuration",
              options: [
                {
                  name: "--id",
                  description:
                    "Alphanumeric string identifying a TLS activation",
                  isRequired: true,
                  args: {
                    name: "id",
                  },
                },
                {
                  name: "--include",
                  description:
                    "Include related objects (comma-separated values)",
                  args: {
                    name: "include",
                    suggestions: [
                      "tls_certificate",
                      "tls_configuration",
                      "tls_domain",
                    ],
                  },
                },
                jsonOption,
              ],
            },
            {
              name: ["disable", "remove"],
              description:
                "Disable TLS on the domain associated with this TLS activation",
              options: [
                {
                  name: "--id",
                  description:
                    "Alphanumeric string identifying a TLS activation",
                  isRequired: true,
                  args: {
                    name: "id",
                  },
                },
              ],
            },
            {
              name: ["enable", "add"],
              description:
                "Enable TLS for a particular TLS domain and certificate combination",
              options: [
                {
                  name: "--cert-id",
                  description:
                    "Alphanumeric string identifying a TLS certificate",
                  isRequired: true,
                  args: {
                    name: "cert-id",
                  },
                },
                {
                  name: "--tls-config-id",
                  description:
                    "Alphanumeric string identifying a TLS configuration",
                  isRequired: true,
                  args: {
                    name: "tls-config-id",
                  },
                },
                {
                  name: "--tls-domain",
                  description:
                    "The domain name associated with the TLS certificate",
                  isRequired: true,
                  args: {
                    name: "tls-domain",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List all TLS activations",
              options: [
                {
                  name: "--filter-cert",
                  description:
                    "Limit the returned activations to a specific certificate",
                  args: {
                    name: "filter-cert",
                  },
                },
                {
                  name: "--filter-config",
                  description:
                    "Limit the returned activations to a specific TLS configuration",
                  args: {
                    name: "filter-config",
                  },
                },
                {
                  name: "--filter-domain",
                  description:
                    "Limit the returned rules to a specific domain name",
                  args: {
                    name: "filter-domain",
                  },
                },
                {
                  name: "--include",
                  description:
                    "Include related objects (comma-separated values)",
                  args: {
                    name: "include",
                    suggestions: [
                      "tls_certificate",
                      "tls_configuration",
                      "tls_domain",
                    ],
                  },
                },
                jsonOption,
                pageOption,
                perPageOption,
              ],
            },
            {
              name: "update",
              description:
                "Update the certificate used to terminate TLS traffic for the domain associated with this TLS activation",
              options: [
                {
                  name: "--cert-id",
                  description:
                    "Alphanumeric string identifying a TLS certificate",
                  isRequired: true,
                  args: {
                    name: "cert-id",
                  },
                },
                {
                  name: "--id",
                  description:
                    "Alphanumeric string identifying a TLS activation",
                  isRequired: true,
                  args: {
                    name: "id",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "certificate",
          description: "Upload and manage TLS certificates",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create a TLS certificate",
              options: [
                {
                  name: "--cert-blob",
                  description:
                    "The PEM-formatted certificate blob, mutually exclusive with --cert-path",
                  args: {
                    name: "cert-blob",
                  },
                },
                {
                  name: "--cert-path",
                  description:
                    "Filepath to a PEM-formatted certificate, mutually exclusive with --cert-blob",
                  args: {
                    name: "cert-path",
                    template: "filepaths",
                  },
                },
                {
                  name: "--id",
                  description:
                    "Alphanumeric string identifying a TLS certificate",
                  args: {
                    name: "id",
                  },
                },
                {
                  name: "--name",
                  description:
                    "A customizable name for your certificate. Defaults to the certificate's Common Name or first Subject Alternative Names (SAN) entry",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: ["delete", "remove"],
              description:
                "Destroy a TLS certificate. TLS certificates already enabled for a domain cannot be destroyed",
              options: [
                {
                  name: "--id",
                  description:
                    "Alphanumeric string identifying a TLS certificate",
                  isRequired: true,
                  args: {
                    name: "id",
                  },
                },
              ],
            },
            {
              name: ["describe", "get"],
              description: "Show a TLS certificate",
              options: [
                {
                  name: "--id",
                  description:
                    "Alphanumeric string identifying a TLS certificate",
                  isRequired: true,
                  args: {
                    name: "id",
                  },
                },
                jsonOption,
              ],
            },
            {
              name: "list",
              description: "List all TLS certificates",
              options: [
                {
                  name: "--filter-domain",
                  description:
                    "Limit the returned certificates to those that include the specific domain",
                  args: {
                    name: "filter-domain",
                  },
                },
                {
                  name: "--filter-not-after",
                  description:
                    "Limit the returned certificates to those that expire prior to the specified date in UTC",
                  args: {
                    name: "filter-not-after",
                  },
                },
                {
                  name: "--include",
                  description:
                    "Include related objects (comma-separated values)",
                  args: {
                    name: "include",
                    suggestions: ["tls_activations"],
                  },
                },
                jsonOption,
                pageOption,
                perPageOption,
                {
                  name: "--sort",
                  description:
                    "The order in which to list the results by creation date",
                  args: {
                    name: "sort",
                  },
                },
              ],
            },
            {
              name: "update",
              description:
                "Replace a TLS certificate with a newly reissued TLS certificate, or update a TLS certificate's name",
              options: [
                {
                  name: "--cert-blob",
                  description:
                    "The PEM-formatted certificate blob, mutually exclusive with --cert-path",
                  args: {
                    name: "cert-blob",
                  },
                },
                {
                  name: "--cert-path",
                  description:
                    "Filepath to a PEM-formatted certificate, mutually exclusive with --cert-blob",
                  args: {
                    name: "cert-path",
                    template: "filepaths",
                  },
                },
                {
                  name: "--id",
                  description:
                    "Alphanumeric string identifying a TLS certificate",
                  isRequired: true,
                  args: {
                    name: "id",
                  },
                },
                {
                  name: "--name",
                  description:
                    "A customizable name for your certificate. Defaults to the certificate's Common Name or first Subject Alternative Names (SAN) entry",
                  args: {
                    name: "name",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "domain",
          description: "Manage TLS domains",
          subcommands: [
            {
              name: "list",
              description: "List all TLS domains",
              options: [
                {
                  name: "--filter-cert",
                  description:
                    "Limit the returned domains to those listed in the given TLS certificate's SAN list",
                  args: {
                    name: "filter-cert",
                  },
                },
                {
                  name: "--filter-in-use",
                  description:
                    "Limit the returned domains to those currently using Fastly to terminate TLS with SNI",
                },
                {
                  name: "--filter-subscription",
                  description:
                    "Limit the returned domains to those for a given TLS subscription",
                  args: {
                    name: "filter-subscription",
                  },
                },
                {
                  name: "--include",
                  description:
                    "Include related objects (comma-separated values)",
                  args: {
                    name: "include",
                    suggestions: ["tls_activations"],
                  },
                },
                jsonOption,
                pageOption,
                perPageOption,
                {
                  name: "--sort",
                  description:
                    "The order in which to list the results by creation date",
                  args: {
                    name: "sort",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "private-key",
          description:
            "Upload and manage private keys used to sign certificates",
          subcommands: [
            {
              name: ["create", "add"],
              description: "Create a TLS private key",
              options: [
                {
                  name: "--key",
                  description:
                    "The contents of the private key. Must be a PEM-formatted key, mutually exclusive with --key-path",
                  args: {
                    name: "key",
                  },
                },
                {
                  name: "--key-path",
                  description:
                    "Filepath to a PEM-formatted key, mutually exclusive with --key",
                  args: {
                    name: "key-path",
                    template: "filepaths",
                  },
                },
                {
                  name: "--name",
                  description: "A customizable name for your private key",
                  isRequired: true,
                  args: {
                    name: "name",
                  },
                },
              ],
            },
            {
              name: ["delete", "remove"],
              description:
                "Destroy a TLS private key. Only private keys not already matched to any certificates can be deleted",
              options: [
                {
                  name: "--id",
                  description: "Alphanumeric string identifying a private Key",
                  isRequired: true,
                  args: {
                    name: "id",
                  },
                },
              ],
            },
            {
              name: ["describe", "get"],
              description: "Show a TLS private key",
              options: [
                {
                  name: "--id",
                  description: "Alphanumeric string identifying a private Key",
                  isRequired: true,
                  args: {
                    name: "id",
                  },
                },
                jsonOption,
              ],
            },
            {
              name: "list",
              description: "List all TLS private keys",
              options: [
                {
                  name: "--filter-in-use",
                  description:
                    "Limit the returned keys to those without any matching TLS certificates",
                  args: {
                    name: "filter-in-use",
                    suggestions: ["false"],
                  },
                },
                jsonOption,
                pageOption,
                perPageOption,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "tls-platform",
      description: "Manage large numbers of TLS certificates",
      subcommands: [
        {
          name: ["delete", "remove"],
          description:
            "Destroy a certificate. This disables TLS for all domains listed as SAN entries",
          options: [
            {
              name: "--id",
              description:
                "Alphanumeric string identifying a TLS bulk certificate",
              isRequired: true,
              args: {
                name: "id",
              },
            },
          ],
        },
        {
          name: ["describe", "get"],
          description: "Retrieve a single certificate",
          options: [
            {
              name: "--id",
              description:
                "Alphanumeric string identifying a TLS bulk certificate",
              isRequired: true,
              args: {
                name: "id",
              },
            },
            jsonOption,
          ],
        },
        {
          name: "list",
          description: "List all certificates",
          options: [
            {
              name: "--filter-domain",
              description: "Optionally filter by the bulk attribute",
              args: {
                name: "filter-domain",
              },
            },
            jsonOption,
            pageOption,
            perPageOption,
            {
              name: "--sort",
              description:
                "The order in which to list the results by creation date",
              args: {
                name: "sort",
              },
            },
          ],
        },
        {
          name: "update",
          description:
            "Replace a certificate with a newly reissued certificate",
          options: [
            {
              name: "--allow-untrusted",
              description: "Allow certificates that chain to untrusted roots",
            },
            {
              name: "--cert-blob",
              description: "The PEM-formatted certificate blob",
              isRequired: true,
              args: {
                name: "cert-blob",
              },
            },
            {
              name: "--id",
              description:
                "Alphanumeric string identifying a TLS bulk certificate",
              isRequired: true,
              args: {
                name: "id",
              },
            },
            {
              name: "--intermediates-blob",
              description: "The PEM-formatted chain of intermediate blobs",
              isRequired: true,
              args: {
                name: "intermediates-blob",
              },
            },
          ],
        },
        {
          name: "upload",
          description: "Upload a new certificate",
          options: [
            {
              name: "--allow-untrusted",
              description: "Allow certificates that chain to untrusted roots",
            },
            {
              name: "--cert-blob",
              description: "The PEM-formatted certificate blob",
              isRequired: true,
              args: {
                name: "cert-blob",
              },
            },
            {
              name: "--config",
              description:
                "Alphanumeric string identifying a TLS configuration (set flag once per Configuration ID)",
              isRepeatable: true,
              args: {
                name: "config",
              },
            },
            {
              name: "--intermediates-blob",
              description: "The PEM-formatted chain of intermediate blobs",
              isRequired: true,
              args: {
                name: "intermediates-blob",
              },
            },
          ],
        },
      ],
    },
    {
      name: "tls-subscription",
      description: "Generate TLS certificates procured and renewed by Fastly",
      subcommands: [
        {
          name: ["create", "add"],
          description: "Create a new TLS subscription",
          options: [
            {
              name: "--cert-auth",
              description:
                "The entity that issues and certifies the TLS certificates for your subscription. Valid values are certainly, lets-encrypt, and globalsign",
              args: {
                name: "cert-auth",
                suggestions: ["certainly", "lets-encrypt", "globalsign"],
              },
            },
            {
              name: "--common-name",
              description:
                "The domain name associated with the subscription. Default to the first domain specified by --domain",
              args: {
                name: "common-name",
              },
            },
            {
              name: "--config",
              description:
                "Alphanumeric string identifying a TLS configuration",
              args: {
                name: "config",
              },
            },
            {
              name: "--domain",
              description:
                "Domain(s) to add to the TLS certificates generated for the subscription (set flag once per domain)",
              isRequired: true,
              isRepeatable: true,
              args: {
                name: "domain",
              },
            },
          ],
        },
        {
          name: ["delete", "remove"],
          description:
            "Destroy a TLS subscription. A subscription cannot be destroyed if there are domains in the TLS enabled state",
          options: [
            {
              name: "--force",
              description:
                "A flag that allows you to edit and delete a subscription with active domains",
            },
            {
              name: "--id",
              description: "Alphanumeric string identifying a TLS subscription",
              isRequired: true,
              args: {
                name: "id",
              },
            },
          ],
        },
        {
          name: ["describe", "get"],
          description: "Show a TLS subscription",
          options: [
            {
              name: "--id",
              description: "Alphanumeric string identifying a TLS subscription",
              isRequired: true,
              args: {
                name: "id",
              },
            },
            {
              name: "--include",
              description: "Include related objects (comma-separated values)",
              args: {
                name: "include",
                suggestions: [
                  "tls_authorizations",
                  "tls_authorizations.globalsign_email_challenge",
                ],
              },
            },
            jsonOption,
          ],
        },
        {
          name: "list",
          description: "List all TLS subscriptions",
          options: [
            {
              name: "--filter-active",
              description:
                "Limit the returned subscriptions to those that have currently active orders",
            },
            {
              name: "--filter-domain",
              description:
                "Limit the returned subscriptions to those that include the specific domain",
              args: {
                name: "filter-domain",
              },
            },
            {
              name: "--filter-state",
              description: "Limit the returned subscriptions by state",
              args: {
                name: "filter-state",
                suggestions: ["pending", "processing", "issued", "renewing"],
              },
            },
            {
              name: "--include",
              description: "Include related objects (comma-separated values)",
              args: {
                name: "include",
                suggestions: [
                  "tls_authorizations",
                  "tls_authorizations.globalsign_email_challenge",
                ],
              },
            },
            jsonOption,
            pageOption,
            perPageOption,
            {
              name: "--sort",
              description:
                "The order in which to list the results by creation date",
              args: {
                name: "sort",
              },
            },
          ],
        },
        {
          name: "update",
          description:
            "Change the TLS domains or common name associated with this subscription, or update the TLS configuration for this set of domains",
          options: [
            {
              name: "--common-name",
              description: "The domain name associated with the subscription",
              args: {
                name: "common-name",
              },
            },
            {
              name: "--config",
              description:
                "Alphanumeric string identifying a TLS configuration",
              args: {
                name: "config",
              },
            },
            {
              name: "--domain",
              description:
                "Domain(s) to add to the TLS certificates generated for the subscription (set flag once per domain)",
              isRepeatable: true,
              args: {
                name: "domain",
              },
            },
            {
              name: "--force",
              description:
                "A flag that allows you to edit and delete a subscription with active domains",
            },
            {
              name: "--id",
              description: "Alphanumeric string identifying a TLS subscription",
              isRequired: true,
              args: {
                name: "id",
              },
            },
          ],
        },
      ],
    },
    {
      name: "tools",
      description: "Tools for working with the Fastly platform",
      subcommands: [
        {
          name: "domain",
          description: "Domain Discovery API tools",
          subcommands: [
            {
              name: "status",
              description: "Check domain name availability",
              options: [
                jsonOption,
                {
                  name: "--scope",
                  description:
                    "Specify `--scope=estimate` to perform an “estimated” availability check, which checks the DNS and domain aftermarkets, not domain registries",
                  args: {
                    name: "scope",
                  },
                },
              ],
              args: {
                name: "domain",
                description: "Domain name to check",
              },
            },
            {
              name: "suggest",
              description: "Request domain search results for a given query",
              options: [
                {
                  name: "--defaults",
                  description:
                    "Comma-separated list of default zones to include in the search results response, e.g. `--defaults=uk,co.uk`",
                  args: {
                    name: "defaults",
                  },
                },
                jsonOption,
                {
                  name: "--keywords",
                  description:
                    "Comma-separated list of keywords for seeding the search results, e.g. `--keywords=dance,party`",
                  args: {
                    name: "keywords",
                  },
                },
                {
                  name: "--location",
                  description:
                    "Override IP geolocation with a two-character country code, e.g. `--location=in` to include Indian zones in the search results",
                  args: {
                    name: "location",
                  },
                },
                {
                  name: "--vendor",
                  description:
                    "The domain name of a specific registrar or vendor, to filter the search results to the list of zones they support",
                  args: {
                    name: "vendor",
                  },
                },
              ],
              args: {
                name: "query",
                description: "Search query, e.g. “acme coffee shop”",
                isVariadic: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: "update",
      description: "Update the CLI to the latest version",
    },
    {
      name: "user",
      description: "Manipulate users of the Fastly API and web interface",
      subcommands: [
        {
          name: ["create", "add"],
          description: "Create a user of the Fastly API and web interface",
          options: [
            {
              name: "--login",
              description:
                "The login associated with the user (typically, an email address)",
              args: {
                name: "login",
              },
            },
            {
              name: "--name",
              description: "The real life name of the user",
              args: {
                name: "name",
              },
            },
            {
              name: "--role",
              description:
                "The permissions role assigned to the user. Can be user, billing, engineer, or superuser",
              args: {
                name: "role",
                suggestions: ["user", "billing", "engineer", "superuser"],
              },
            },
          ],
        },
        {
          name: ["delete", "remove"],
          description: "Delete a user of the Fastly API and web interface",
          options: [
            {
              name: "--id",
              description: "Alphanumeric string identifying the user",
              isRequired: true,
              args: {
                name: "id",
              },
            },
          ],
        },
        {
          name: ["describe", "get"],
          description:
            "Get a specific user of the Fastly API and web interface",
          options: [
            {
              name: "--current",
              description: "Get the logged in user",
            },
            {
              name: "--id",
              description: "Alphanumeric string identifying the user",
              args: {
                name: "id",
              },
            },
            jsonOption,
          ],
        },
        {
          name: "list",
          description: "List all users from a specified customer id",
          options: [
            {
              name: "--customer-id",
              description:
                "Alphanumeric string identifying the customer (falls back to FASTLY_CUSTOMER_ID)",
              args: {
                name: "customer-id",
              },
            },
            jsonOption,
          ],
        },
        {
          name: "update",
          description: "Update a user of the Fastly API and web interface",
          options: [
            {
              name: "--id",
              description: "Alphanumeric string identifying the user",
              args: {
                name: "id",
              },
            },
            {
              name: "--login",
              description:
                "The login associated with the user (typically, an email address)",
              args: {
                name: "login",
              },
            },
            {
              name: "--name",
              description: "The real life name of the user",
              args: {
                name: "name",
              },
            },
            {
              name: "--password-reset",
              description: "Requests a password reset for the specified user",
            },
            {
              name: "--role",
              description:
                "The permissions role assigned to the user. Can be user, billing, engineer, or superuser",
              args: {
                name: "role",
                suggestions: ["user", "billing", "engineer", "superuser"],
              },
            },
          ],
        },
      ],
    },
    {
      name: "vcl",
      description:
        "Test VCL on real Fastly edge nodes before deploying, and manipulate service version VCL",
      subcommands: [
        {
          name: "check",
          description:
            "Check that VCL compiles, using the real Fastly VCL compiler (no service or API token needed)",
          options: [
            {
              name: "--deliver",
              description:
                "VCL file with the body of vcl_deliver (final response mutations (resp))",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--error",
              description:
                "VCL file with the body of vcl_error (synthetic and error responses)",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--fetch",
              description:
                "VCL file with the body of vcl_fetch (origin response handling (beresp))",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--hash",
              description:
                "VCL file with the body of vcl_hash (cache key composition)",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--hit",
              description: "VCL file with the body of vcl_hit (on cache hit)",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--init",
              description:
                "VCL file with the body of vcl_init (one-time setup: backends, ACLs, tables)",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            jsonOption,
            {
              name: "--log",
              description: "VCL file with the body of vcl_log (logging)",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--miss",
              description:
                "VCL file with the body of vcl_miss (on cache miss, before the origin fetch)",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--origin",
              description:
                "Origin server URL, including scheme (repeatable, up to 5). Origins become VCL backends F_origin_0, F_origin_1, ... in flag order, with the first as the default backend. Defaults to https://http-me.fastly.dev, a test origin that echoes requests back",
              isRepeatable: true,
              args: {
                name: "URL",
              },
            },
            {
              name: "--pass",
              description:
                "VCL file with the body of vcl_pass (on explicit pass)",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--recv",
              description:
                "VCL file with the body of vcl_recv (request inspection and routing)",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--sandbox-endpoint",
              description: "Base URL of the sandbox service",
              hidden: true,
              args: {
                name: "sandbox-endpoint",
                default: "https://fiddle.fastly.dev",
              },
            },
          ],
          args: {
            name: "file",
            description:
              "VCL files holding subroutine bodies, named after their subroutine (recv.vcl, fetch.vcl, ...)",
            isOptional: true,
            isVariadic: true,
            template: "filepaths",
          },
        },
        {
          name: "condition",
          description:
            "Manipulate Fastly VCL conditions (deprecated: use 'fastly service vcl condition' instead)",
          hidden: true,
          deprecated: true,
          subcommands: serviceVclConditionSubcommands,
        },
        {
          name: "custom",
          description:
            "Manipulate Fastly custom VCL files (deprecated: use 'fastly service vcl custom' instead)",
          hidden: true,
          deprecated: true,
          subcommands: serviceVclCustomSubcommands,
        },
        {
          name: ["describe", "get"],
          description:
            "Get the generated VCL for a particular service and version (deprecated: use 'fastly service vcl describe' instead)",
          hidden: true,
          deprecated: true,
          options: [
            jsonOption,
            serviceIdOption,
            serviceNameOption,
            versionOption,
          ],
        },
        {
          name: "run",
          description:
            "Run VCL on a real Fastly edge node by replaying a request through it (no service or API token needed)",
          options: [
            {
              name: "--body",
              description: "Request body; prefix with @ to read from a file",
              args: {
                name: "body",
              },
            },
            {
              name: "--client-from",
              description:
                "Where the client appears to connect from, for geolocation-dependent VCL: 'client' (your real vantage point), 'server', or a country: brazil, china, germany, japan, russia, south-africa, united-kingdom, united-states",
              args: {
                name: "client-from",
                suggestions: [
                  "client",
                  "server",
                  "brazil",
                  "china",
                  "germany",
                  "japan",
                  "russia",
                  "south-africa",
                  "united-kingdom",
                  "united-states",
                ],
                default: "client",
              },
            },
            {
              name: "--connection",
              description:
                "Protocol between client and edge: h2 (HTTP/2, default), h1 (HTTP/1.1 over TLS), or http (plain HTTP/1.1)",
              args: {
                name: "connection",
                suggestions: ["http", "h1", "h2"],
                default: "h2",
              },
            },
            {
              name: "--deliver",
              description:
                "VCL file with the body of vcl_deliver (final response mutations (resp))",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--error",
              description:
                "VCL file with the body of vcl_error (synthetic and error responses)",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--fetch",
              description:
                "VCL file with the body of vcl_fetch (origin response handling (beresp))",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--follow-redirects",
              description: "Follow 3xx responses instead of reporting them",
            },
            {
              name: "--fresh-cache",
              description:
                "Start from an empty cache instead of the cache state previous runs built up",
            },
            {
              name: "--hash",
              description:
                "VCL file with the body of vcl_hash (cache key composition)",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: ["-H", "--header"],
              description: "Request header as 'Name: value' (repeatable)",
              isRepeatable: true,
              args: {
                name: "HEADER",
              },
            },
            {
              name: "--hit",
              description: "VCL file with the body of vcl_hit (on cache hit)",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--init",
              description:
                "VCL file with the body of vcl_init (one-time setup: backends, ACLs, tables)",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            jsonOption,
            {
              name: "--log",
              description: "VCL file with the body of vcl_log (logging)",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--method",
              description:
                "HTTP method (GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS, PURGE, ...)",
              args: {
                name: "method",
                default: "GET",
              },
            },
            {
              name: "--miss",
              description:
                "VCL file with the body of vcl_miss (on cache miss, before the origin fetch)",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--no-cluster",
              description: "Disable request clustering within the POP",
            },
            {
              name: "--origin",
              description:
                "Origin server URL, including scheme (repeatable, up to 5). Origins become VCL backends F_origin_0, F_origin_1, ... in flag order, with the first as the default backend. Defaults to https://http-me.fastly.dev, a test origin that echoes requests back",
              isRepeatable: true,
              args: {
                name: "URL",
              },
            },
            {
              name: "--pass",
              description:
                "VCL file with the body of vcl_pass (on explicit pass)",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--path",
              description: "Request path, including any query string",
              args: {
                name: "path",
                default: "/",
              },
            },
            {
              name: "--recv",
              description:
                "VCL file with the body of vcl_recv (request inspection and routing)",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--sandbox-endpoint",
              description: "Base URL of the sandbox service",
              hidden: true,
              args: {
                name: "sandbox-endpoint",
                default: "https://fiddle.fastly.dev",
              },
            },
            {
              name: "--shield",
              description:
                "Enable shielding (a second cache layer, as when a shield POP is configured)",
            },
            {
              name: "--timeout",
              description: "How long to wait for the edge before giving up",
              args: {
                name: "timeout",
                default: "2m",
              },
            },
          ],
          args: {
            name: "file",
            description:
              "VCL files holding subroutine bodies, named after their subroutine (recv.vcl, fetch.vcl, ...)",
            isOptional: true,
            isVariadic: true,
            template: "filepaths",
          },
        },
        {
          name: "serve",
          description:
            "Run VCL as a local HTTP server backed by a real Fastly edge sandbox (no service or API token needed)",
          options: [
            {
              name: "--addr",
              description: "The local address to listen on",
              args: {
                name: "addr",
                default: "127.0.0.1:7676",
              },
            },
            {
              name: "--deliver",
              description:
                "VCL file with the body of vcl_deliver (final response mutations (resp))",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--error",
              description:
                "VCL file with the body of vcl_error (synthetic and error responses)",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--fetch",
              description:
                "VCL file with the body of vcl_fetch (origin response handling (beresp))",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--hash",
              description:
                "VCL file with the body of vcl_hash (cache key composition)",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--hit",
              description: "VCL file with the body of vcl_hit (on cache hit)",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--init",
              description:
                "VCL file with the body of vcl_init (one-time setup: backends, ACLs, tables)",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--log",
              description: "VCL file with the body of vcl_log (logging)",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--miss",
              description:
                "VCL file with the body of vcl_miss (on cache miss, before the origin fetch)",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--origin",
              description:
                "Origin server URL, including scheme (repeatable, up to 5). Origins become VCL backends F_origin_0, F_origin_1, ... in flag order, with the first as the default backend. Defaults to https://http-me.fastly.dev, a test origin that echoes requests back",
              isRepeatable: true,
              args: {
                name: "URL",
              },
            },
            {
              name: "--pass",
              description:
                "VCL file with the body of vcl_pass (on explicit pass)",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--recv",
              description:
                "VCL file with the body of vcl_recv (request inspection and routing)",
              args: {
                name: "FILE",
                template: "filepaths",
              },
            },
            {
              name: "--sandbox-endpoint",
              description: "Base URL of the sandbox service",
              hidden: true,
              args: {
                name: "sandbox-endpoint",
                default: "https://fiddle.fastly.dev",
              },
            },
            {
              name: "--timeout",
              description: "How long to wait for a deploy to reach the edge",
              args: {
                name: "timeout",
                default: "2m",
              },
            },
            {
              name: "--watch",
              description: "Redeploy the VCL when its files change",
            },
          ],
          args: {
            name: "file",
            description:
              "VCL files holding subroutine bodies, named after their subroutine (recv.vcl, fetch.vcl, ...)",
            isOptional: true,
            isVariadic: true,
            template: "filepaths",
          },
        },
        {
          name: "snippet",
          description:
            "Manipulate Fastly VCL snippets (deprecated: use 'fastly service vcl snippet' instead)",
          hidden: true,
          deprecated: true,
          subcommands: serviceVclSnippetSubcommands,
        },
      ],
    },
    {
      name: "version",
      description: "Display version information for the Fastly CLI",
    },
    {
      name: "whoami",
      description: "Get information about the currently authenticated account",
    },
  ],
  options: [
    {
      name: ["-d", "--accept-defaults"],
      description:
        "Accept default options for all interactive prompts apart from Yes/No confirmations",
      isPersistent: true,
    },
    {
      name: "--account",
      description: "Fastly Accounts endpoint",
      isPersistent: true,
      hidden: true,
      args: {
        name: "account",
      },
    },
    {
      name: "--api",
      description: "Fastly API endpoint",
      isPersistent: true,
      hidden: true,
      args: {
        name: "api",
      },
    },
    {
      name: ["-y", "--auto-yes"],
      description:
        "Answer yes automatically to all Yes/No confirmations. This may suppress security warnings",
      isPersistent: true,
    },
    {
      name: "--debug-mode",
      description:
        "Print API request and response details (NOTE: can disrupt the normal CLI flow output formatting)",
      isPersistent: true,
    },
    {
      name: "--enable-sso",
      description:
        "[DEPRECATED: use 'fastly auth login --sso --token <name>'] Enable SSO for current profile",
      isPersistent: true,
      hidden: true,
      deprecated: true,
    },
    {
      name: ["-h", "--help"],
      description: "Show context-sensitive help",
      isPersistent: true,
    },
    {
      name: ["-i", "--non-interactive"],
      description:
        "Do not prompt for user input - suitable for CI processes. Equivalent to --accept-defaults and --auto-yes",
      isPersistent: true,
    },
    {
      name: ["-o", "--profile"],
      description:
        "[DEPRECATED: use 'fastly auth use'] Switch account profile for single command execution",
      isPersistent: true,
      hidden: true,
      deprecated: true,
      args: {
        name: "profile",
      },
    },
    {
      name: ["-q", "--quiet"],
      description:
        "Silence all output except direct command output. This won't prevent interactive prompts (see: --accept-defaults, --auto-yes, --non-interactive)",
      isPersistent: true,
    },
    {
      name: ["-t", "--token"],
      description:
        "Fastly API token, or name of a stored auth token (use 'default' for the default token). Falls back to FASTLY_API_TOKEN env var",
      isPersistent: true,
      args: {
        name: "token",
      },
    },
    {
      name: ["-v", "--verbose"],
      description: "Verbose logging",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
