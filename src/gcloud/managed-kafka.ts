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

const optCluster: Fig.Option = {
  name: "--cluster",
  description: "The cluster name",
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

const optConnectCluster: Fig.Option = {
  name: "--connect-cluster",
  description: "The connect cluster name",
  args: {
    name: "CONNECT_CLUSTER",
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
  description:
    "List of label KEY=VALUE pairs to add. Keys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
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
    "ID of the location of the Managed Service for Apache Kafka resource. See https://cloud.google.com/managed-service-for-apache-kafka/docs/locations for a list of supported locations",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation2: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location",
  priority: 100,
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
  name: "managed-kafka",
  description:
    "Administer Managed Service for Apache Kafka clusters, topics, and consumer groups",
  subcommands: [
    {
      name: "acls",
      description: "Administer Managed Service for Apache Kafka acls",
      subcommands: [
        {
          name: "add-acl-entry",
          description:
            "Add an acl entry to a Managed Service for Apache Kafka acl",
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
            {
              name: "--host",
              description:
                'The host. Must be set to "```*```" for Managed Service for Apache Kafka',
              args: {
                name: "HOST",
                description: "String",
              },
            },
            optImpersonateServiceAccount,
            optLocation,
            optLogHttp,
            {
              name: "--operation",
              description:
                "The operation type. Allowed values are: ALL, READ, WRITE, CREATE, DELETE, ALTER, DESCRIBE, CLUSTER_ACTION, DESCRIBE_CONFIGS, ALTER_CONFIGS, IDEMPOTENT_WRITE",
              priority: 100,
              args: {
                name: "OPERATION",
                description: "String",
              },
            },
            {
              name: "--permission-type",
              description:
                "The permission type. Allowed values are: ALLOW, DENY",
              args: {
                name: "PERMISSION_TYPE",
                description: "String",
              },
            },
            {
              name: "--principal",
              description:
                'The principal. Specified as Google Cloud account, with the Kafka StandardAuthorizer prefix "User:". For example: "User:admin@project.iam.gserviceaccount.com". Can be the wildcard "User:```*```" to refer to all users',
              priority: 100,
              args: {
                name: "PRINCIPAL",
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
            name: "ACL",
            description:
              "ID of the acl or fully qualified identifier for the acl",
          },
        },
        {
          name: "create",
          description: "Create a Managed Service for Apache Kafka acl",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--acl-entries-from-file",
              description:
                "Path to a JSON or YAML file containing the acl entries to use in the acl. Use a full or relative path to a local file containing the value of acl_entries",
              args: {
                name: "ACL_ENTRIES_FROM_FILE",
                template: "filepaths",
              },
            },
            {
              name: "--acl-entry",
              description:
                "An acl entry that configures access for a principal, for a specific operation on the acl's resource pattern. This flag can be repeated",
              isRepeatable: true,
              args: {
                name: "ACL_ENTRY",
              },
            },
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
            optLocation,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ACL",
            description:
              "ID of the acl or fully qualified identifier for the acl",
          },
        },
        {
          name: "delete",
          description: "Delete a Managed Service for Apache Kafka ACL",
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
            optLocation,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ACL",
            description:
              "ID of the acl or fully qualified identifier for the acl",
          },
        },
        {
          name: "describe",
          description: "Describe a Managed Service for Apache Kafka acl",
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
            optLocation,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ACL",
            description:
              "ID of the acl or fully qualified identifier for the acl",
          },
        },
        {
          name: "list",
          description:
            "List all Managed Service for Apache Kafka acls in a given cluster",
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
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster",
          },
        },
        {
          name: "remove-acl-entry",
          description:
            "Remove an acl entry from a Managed Service for Apache Kafka acl",
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
            {
              name: "--host",
              description:
                'The host. Must be set to "```*```" for Managed Service for Apache Kafka',
              args: {
                name: "HOST",
                description: "String",
              },
            },
            optImpersonateServiceAccount,
            optLocation,
            optLogHttp,
            {
              name: "--operation",
              description:
                "The operation type. Allowed values are: ALL, READ, WRITE, CREATE, DELETE, ALTER, DESCRIBE, CLUSTER_ACTION, DESCRIBE_CONFIGS, ALTER_CONFIGS, IDEMPOTENT_WRITE",
              priority: 100,
              args: {
                name: "OPERATION",
                description: "String",
              },
            },
            {
              name: "--permission-type",
              description:
                "The permission type. Allowed values are: ALLOW, DENY",
              args: {
                name: "PERMISSION_TYPE",
                description: "String",
              },
            },
            {
              name: "--principal",
              description:
                'The principal. Specified as Google Cloud account, with the Kafka StandardAuthorizer prefix "User:". For example: "User:admin@project.iam.gserviceaccount.com". Can be the wildcard "User:```*```" to refer to all users',
              priority: 100,
              args: {
                name: "PRINCIPAL",
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
            name: "ACL",
            description:
              "ID of the acl or fully qualified identifier for the acl",
          },
        },
        {
          name: "update",
          description: "Update a Managed Service for Apache Kafka acl",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--acl-entries-from-file",
              description:
                "Path to a JSON or YAML file containing the acl entries to use in the acl. Use a full or relative path to a local file containing the value of acl_entries",
              args: {
                name: "ACL_ENTRIES_FROM_FILE",
                template: "filepaths",
              },
            },
            {
              name: "--acl-entry",
              description:
                "An acl entry that configures access for a principal, for a specific operation on the acl's resource pattern. This flag can be repeated",
              isRepeatable: true,
              args: {
                name: "ACL_ENTRY",
              },
            },
            optBillingProject,
            optCluster,
            optConfiguration,
            {
              name: "--etag",
              description:
                "Etag returned in the response to a previous create or describe command. The etag is used for concurrency control, to ensure that the client and server agree on the current set of acl entries in the Kafka cluster, before full replacement in the update command",
              priority: 100,
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
            optLocation,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ACL",
            description:
              "ID of the acl or fully qualified identifier for the acl",
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
      name: "clusters",
      description: "Administer Managed Service for Apache Kafka clusters",
      subcommands: [
        {
          name: "create",
          description: "Create a Managed Service for Apache Kafka cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--auto-rebalance",
              description:
                "Whether the automatic rebalancing is enabled. If automatic rebalancing is enabled, topic partitions are rebalanced among brokers when the number of CPUs in the cluster changes. Automatic rebalancing is enabled by default. Use --no-auto-rebalance to disable this flag. Enabled by default, use *--no-auto-rebalance* to disable",
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--cpu",
              description:
                "The number of vCPUs to provision for the cluster. The minimum is 3",
              priority: 100,
              args: {
                name: "CPU",
                description: "Int",
              },
            },
            {
              name: "--encryption-key",
              description:
                "The relative resource path of the Cloud KMS key to use for encryption in the form: projects/``PROJECT_ID''/locations/``LOCATION''/keyRings/``KEY_RING''/cryptoKeys/``KEY''. The key must be located in the same region as the cluster. The key cannot be changed once set",
              args: {
                name: "ENCRYPTION_KEY",
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
            optLocation,
            optLogHttp,
            {
              name: "--memory",
              description:
                "The memory to provision for the cluster in bytes. The value must be between 1 GiB and 8 GiB per vCPU. Ex. 1024Mi, 4Gi",
              priority: 100,
              args: {
                name: "MEMORY",
              },
            },
            {
              name: "--mtls-ca-pools",
              description:
                "A comma-separated list of CA pools from the Google Cloud Certificate Authority Service. The root certificates of these CA pools will be installed in the truststore of each broker in the cluster for use with mTLS. A maximum of 10 CA pools can be specified. CA pools can be in a different project and region than the cluster. This command overwrites the entire set of pools currently configured on the cluster. If you want to add a new pool to an existing configuration, you must provide the full list of both the old and new CA pools in the command. Each CA pool must be in the format projects/``PROJECT_ID''/locations/``LOCATION''/caPools/``CA_POOL''. Clear the CA pools using the `--clear-mtls-ca-pools` flag",
              args: {
                name: "MTLS_CA_POOLS",
                description: "List",
              },
            },
            optNoAsync,
            {
              name: "--no-auto-rebalance",
              description:
                "Whether the automatic rebalancing is enabled. If automatic rebalancing is enabled, topic partitions are rebalanced among brokers when the number of CPUs in the cluster changes. Automatic rebalancing is enabled by default. Use --no-auto-rebalance to disable this flag",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--ssl-principal-mapping-rules",
              description:
                'The rules for mapping mTLS certificate Distinguished Names (DNs) to shortened principal names for Kafka ACLs. This flag corresponds exactly to the `ssl.principal.mapping.rules` broker config and matches the format and syntax defined in the Apache Kafka documentation. Setting or modifying this field will trigger a rolling restart of the Kafka brokers to apply the change. An empty string means that the default Kafka behavior is used. Example: "RULE:^CN=(.*?),OU=ServiceUsers.*$/$1@example.com/,DEFAULT"',
              args: {
                name: "SSL_PRINCIPAL_MAPPING_RULES",
                description: "String",
              },
            },
            {
              name: "--subnets",
              description:
                "A comma-separated list of VPC subnets from which the cluster is accessible. Both broker and bootstrap server IP addresses and DNS entries are automatically created in each subnet. Only one subnet per network is allowed, and the subnet must be located in the same region as the cluster. The project may differ. A minimum of 1 subnet is required. A maximum of 10 subnets can be specified. Use commas to separate multiple subnets. The name of the subnet must be in the format projects/``PROJECT_ID''/regions/``REGION''/subnetworks/``SUBNET''",
              priority: 100,
              args: {
                name: "SUBNETS",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster",
          },
        },
        {
          name: "delete",
          description: "Delete a Managed Service for Apache Kafka cluster",
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
            optLocation,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster",
          },
        },
        {
          name: "describe",
          description: "Describe a Managed Service for Apache Kafka cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--full",
              description:
                "Show detailed information about individual brokers, such as broker id and zone, as well as the Kafka version running on the cluster",
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation,
            optLogHttp,
            {
              name: "--no-full",
              description:
                "Show detailed information about individual brokers, such as broker id and zone, as well as the Kafka version running on the cluster",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster",
          },
        },
        {
          name: "list",
          description:
            "List all Managed Service for Apache Kafka clusters in a given location",
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
          name: "update",
          description: "Update a Managed Service for Apache Kafka cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--allow-broker-downscale-on-cluster-upscale",
              description:
                "If enabled, this setting allows an update operation that could significantly decrease the per-broker vCPU and/or memory allocation, which can lead to reduced performance and availability. By default, an update operation will fail if it results in a reduction of 10% or more to the brokers' vCPU or memory allocation",
            },
            optAsync,
            {
              name: "--auto-rebalance",
              description:
                "Whether the automatic rebalancing is enabled. If automatic rebalancing is enabled, topic partitions are rebalanced among brokers when the number of CPUs in the cluster changes. Automatic rebalancing is enabled by default. Use --no-auto-rebalance to disable this flag",
            },
            optBillingProject,
            {
              name: "--clear-mtls-ca-pools",
              description:
                "Remove all the CA pools from the cluster. This will remove all root certificates from the truststore of each broker in the cluster",
            },
            optConfiguration,
            {
              name: "--cpu",
              description:
                "The number of vCPUs to provision for the cluster. The minimum is 3",
              args: {
                name: "CPU",
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
            optLabels,
            optLocation,
            optLogHttp,
            {
              name: "--memory",
              description:
                "The memory to provision for the cluster in bytes. The value must be between 1 GiB and 8 GiB per vCPU. Ex. 1024Mi, 4Gi",
              args: {
                name: "MEMORY",
              },
            },
            {
              name: "--mtls-ca-pools",
              description:
                "A comma-separated list of CA pools from the Google Cloud Certificate Authority Service. The root certificates of these CA pools will be installed in the truststore of each broker in the cluster for use with mTLS. A maximum of 10 CA pools can be specified. CA pools can be in a different project and region than the cluster. This command overwrites the entire set of pools currently configured on the cluster. If you want to add a new pool to an existing configuration, you must provide the full list of both the old and new CA pools in the command. Each CA pool must be in the format projects/``PROJECT_ID''/locations/``LOCATION''/caPools/``CA_POOL''. Clear the CA pools using the `--clear-mtls-ca-pools` flag",
              args: {
                name: "MTLS_CA_POOLS",
                description: "List",
              },
            },
            {
              name: "--no-allow-broker-downscale-on-cluster-upscale",
              description:
                "If enabled, this setting allows an update operation that could significantly decrease the per-broker vCPU and/or memory allocation, which can lead to reduced performance and availability. By default, an update operation will fail if it results in a reduction of 10% or more to the brokers' vCPU or memory allocation",
              hidden: true,
            },
            optNoAsync,
            {
              name: "--no-auto-rebalance",
              description:
                "Whether the automatic rebalancing is enabled. If automatic rebalancing is enabled, topic partitions are rebalanced among brokers when the number of CPUs in the cluster changes. Automatic rebalancing is enabled by default. Use --no-auto-rebalance to disable this flag",
              hidden: true,
            },
            {
              name: "--no-clear-mtls-ca-pools",
              description:
                "Remove all the CA pools from the cluster. This will remove all root certificates from the truststore of each broker in the cluster",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--ssl-principal-mapping-rules",
              description:
                'The rules for mapping mTLS certificate Distinguished Names (DNs) to shortened principal names for Kafka ACLs. This flag corresponds exactly to the `ssl.principal.mapping.rules` broker config and matches the format and syntax defined in the Apache Kafka documentation. Setting or modifying this field will trigger a rolling restart of the Kafka brokers to apply the change. An empty string means that the default Kafka behavior is used. Example: "RULE:^CN=(.*?),OU=ServiceUsers.*$/$1@example.com/,DEFAULT"',
              args: {
                name: "SSL_PRINCIPAL_MAPPING_RULES",
                description: "String",
              },
            },
            {
              name: "--subnets",
              description:
                "A comma-separated list of VPC subnets from which the cluster is accessible. Both broker and bootstrap server IP addresses and DNS entries are automatically created in each subnet. Only one subnet per network is allowed, and the subnet must be located in the same region as the cluster. The project may differ. A minimum of 1 subnet is required. A maximum of 10 subnets can be specified. Use commas to separate multiple subnets. The name of the subnet must be in the format projects/``PROJECT_ID''/regions/``REGION''/subnetworks/``SUBNET''",
              args: {
                name: "SUBNETS",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster",
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
      name: "connect-clusters",
      description:
        "Administer Managed Service for Apache Kafka connect-clusters",
      subcommands: [
        {
          name: "create",
          description:
            "Create a Managed Service for Apache Kafka connect cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--additional-subnet",
              description:
                "(DEPRECATED) Additional subnet to make available to the Kafka Connect cluster. Structured like: projects/{project}/regions/{region}/subnetworks/{subnet_id}",
              deprecated: true,
              args: {
                name: "ADDITIONAL_SUBNET",
                description: "String",
              },
            },
            optAsync,
            optBillingProject,
            {
              name: "--config-file",
              description:
                "The path to the JSON or YAML file containing the configuration that are overridden from the cluster or connector defaults. This also supports inline JSON or YAML. Sets `config_file` value",
              args: {
                name: "JSON|YAML|FILE",
                description: "Dict",
              },
            },
            {
              name: "--configs",
              description:
                "Configuration for the connect cluster that are overridden from the cluster defaults. The key of the map is a Kafka topic property name, for example: `cleanup.policy=compact`,`compression.type=producer`",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optConfiguration,
            {
              name: "--cpu",
              description:
                "The number of vCPUs to provision for the cluster. The minimum is 3",
              priority: 100,
              args: {
                name: "CPU",
                description: "Int",
              },
            },
            {
              name: "--dns-name",
              description:
                "DNS domain name from the subnet's network to be made visible to the Connect Cluster",
              args: {
                name: "DNS_NAME",
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
              name: "--kafka-cluster",
              description:
                "The resource path of the Kafka cluster to connect to, or the name of the Kafka cluster to connect to if the cluster is in the same project as the Connect cluster",
              priority: 100,
              args: {
                name: "KAFKA_CLUSTER",
                description: "String",
              },
            },
            optLabels,
            optLocation,
            optLogHttp,
            {
              name: "--memory",
              description:
                "The memory to provision for the cluster in bytes. The value must be between 1 GiB and 8 GiB per vCPU. Ex. 1024Mi, 4Gi",
              priority: 100,
              args: {
                name: "MEMORY",
              },
            },
            optNoAsync,
            {
              name: "--primary-subnet",
              description:
                "VPC subnet to make available to the Kafka Connect cluster. Structured like: projects/{project}/regions/{region}/subnetworks/{subnet_id}. The primary subnet is used to create a Private Service Connect (PSC) interface for the Kafka Connect workers. It must be located in the same region as the Connect cluster",
              priority: 100,
              args: {
                name: "PRIMARY_SUBNET",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--secret",
              description:
                "Secrets to load into workers. Exact SecretVersions from Secret Manager must be provided -- aliases are not supported. Up to 32 secrets may be loaded into one cluster. Format: projects/<project-id>/secrets/<secret-name>/versions/<version-id>",
              args: {
                name: "SECRET",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONNECT_CLUSTER",
            description:
              "ID of the connect_cluster or fully qualified identifier for the connect_cluster",
          },
        },
        {
          name: "delete",
          description:
            "Delete a Managed Service for Apache Kafka connect cluster",
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
            optLocation,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONNECT_CLUSTER",
            description:
              "ID of the connect_cluster or fully qualified identifier for the connect_cluster",
          },
        },
        {
          name: "describe",
          description:
            "Describe a Managed Service for Apache Kafka connect cluster",
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
          args: {
            name: "CONNECT_CLUSTER",
            description:
              "ID of the connect_cluster or fully qualified identifier for the connect_cluster",
          },
        },
        {
          name: "list",
          description:
            "List all Managed Service for Apache Kafka connect clusters in a given location",
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
          name: "update",
          description:
            "Update a Managed Service for Apache Kafka for BigQuery connect cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--additional-subnet",
              description:
                "(DEPRECATED) Additional subnet to make available to the Kafka Connect cluster. Structured like: projects/{project}/regions/{region}/subnetworks/{subnet_id}",
              deprecated: true,
              args: {
                name: "ADDITIONAL_SUBNET",
                description: "String",
              },
            },
            optAsync,
            optBillingProject,
            {
              name: "--clear-configs",
              description: "Remove all the configurations for the topic",
            },
            {
              name: "--clear-dns-names",
              description:
                "Remove all the DNS domain names for the connect cluster",
            },
            {
              name: "--clear-labels",
              description: "Remove all the labels from the connect cluster",
            },
            {
              name: "--clear-secrets",
              description: "Remove all the secrets from the connect cluster",
            },
            {
              name: "--config-file",
              description:
                "The path to the JSON or YAML file containing the configuration that are overridden from the cluster or connector defaults. This also supports inline JSON or YAML. Sets `config_file` value",
              args: {
                name: "JSON|YAML|FILE",
                description: "Dict",
              },
            },
            {
              name: "--configs",
              description:
                "Configuration for the connect cluster that are overridden from the cluster defaults. The key of the map is a Kafka topic property name, for example: `cleanup.policy=compact`,`compression.type=producer`",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optConfiguration,
            {
              name: "--cpu",
              description:
                "The number of vCPUs to provision for the cluster. The minimum is 3",
              args: {
                name: "CPU",
                description: "Int",
              },
            },
            {
              name: "--dns-name",
              description:
                "DNS domain name from the subnet's network to be made visible to the Connect Cluster",
              args: {
                name: "DNS_NAME",
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
            optLocation,
            optLogHttp,
            {
              name: "--memory",
              description:
                "The memory to provision for the cluster in bytes. The value must be between 1 GiB and 8 GiB per vCPU. Ex. 1024Mi, 4Gi",
              args: {
                name: "MEMORY",
              },
            },
            optNoAsync,
            {
              name: "--no-clear-configs",
              description: "Remove all the configurations for the topic",
              hidden: true,
            },
            {
              name: "--no-clear-dns-names",
              description:
                "Remove all the DNS domain names for the connect cluster",
              hidden: true,
            },
            {
              name: "--no-clear-labels",
              description: "Remove all the labels from the connect cluster",
              hidden: true,
            },
            {
              name: "--no-clear-secrets",
              description: "Remove all the secrets from the connect cluster",
              hidden: true,
            },
            {
              name: "--primary-subnet",
              description:
                "VPC subnet to make available to the Kafka Connect cluster. Structured like: projects/{project}/regions/{region}/subnetworks/{subnet_id}. The primary subnet is used to create a Private Service Connect (PSC) interface for the Kafka Connect workers. It must be located in the same region as the Connect cluster",
              priority: 100,
              args: {
                name: "PRIMARY_SUBNET",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--secret",
              description:
                "Secrets to load into workers. Exact SecretVersions from Secret Manager must be provided -- aliases are not supported. Up to 32 secrets may be loaded into one cluster. Format: projects/<project-id>/secrets/<secret-name>/versions/<version-id>",
              args: {
                name: "SECRET",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONNECT_CLUSTER",
            description:
              "ID of the connect_cluster or fully qualified identifier for the connect_cluster",
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
      name: "connectors",
      description: "Administer Managed Service for Apache Kafka connectors",
      subcommands: [
        {
          name: "create",
          description: "Create a Managed Service for Apache Kafka connector",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--config-file",
              description:
                "The path to the JSON or YAML file containing the configuration that are overridden from the connector defaults. This also supports inline JSON or YAML. Sets `config_file` value",
              args: {
                name: "JSON|YAML|FILE",
                description: "Dict",
              },
            },
            {
              name: "--configs",
              description:
                "Configuration for the connector that are overridden from the connector defaults. The key of the map is a Kafka topic property name, for example: `cleanup.policy=compact`,`compression.type=producer`",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optConfiguration,
            optConnectCluster,
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
            {
              name: "--no-task-retry-disabled",
              description: "Disable default task retry policy",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--task-restart-max-backoff",
              description:
                "The maximum amount of time to wait before retrying a failed task in seconds. This sets an upper bound for the backoff delay. The default value is 1800s (30 minutes). See $ gcloud topic datetimes for information on duration formats",
              priority: 100,
              args: {
                name: "TASK_RESTART_MAX_BACKOFF",
              },
            },
            {
              name: "--task-restart-min-backoff",
              description:
                "The minimum amount of time to wait before retrying a failed task in seconds. This sets a lower bound for the backoff delay. The default value is 60s. See $ gcloud topic datetimes for information on duration formats",
              priority: 100,
              args: {
                name: "TASK_RESTART_MIN_BACKOFF",
              },
            },
            {
              name: "--task-retry-disabled",
              description: "Disable default task retry policy",
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONNECTOR",
            description:
              "ID of the connector or fully qualified identifier for the connector",
          },
        },
        {
          name: "delete",
          description: "Delete a Managed Service for Apache Kafka connector",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optConnectCluster,
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
          args: {
            name: "CONNECTOR",
            description:
              "ID of the connector or fully qualified identifier for the connector",
          },
        },
        {
          name: "describe",
          description: "Describe a Managed Service for Apache Kafka connector",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optConnectCluster,
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
          args: {
            name: "CONNECTOR",
            description:
              "ID of the connector or fully qualified identifier for the connector",
          },
        },
        {
          name: "list",
          description:
            "List all Managed Service for Apache Kafka connectors for a given connect cluster",
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
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONNECT_CLUSTER",
            description:
              "ID of the connect_cluster or fully qualified identifier for the connect_cluster",
          },
        },
        {
          name: "pause",
          description:
            "Pauses operation of a Managed Service for Apache Kafka connector",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optConnectCluster,
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
          args: {
            name: "CONNECTOR",
            description:
              "ID of the connector or fully qualified identifier for the connector",
          },
        },
        {
          name: "restart",
          description: "Restarts a Managed Service for Apache Kafka connector",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optConnectCluster,
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
          args: {
            name: "CONNECTOR",
            description:
              "ID of the connector or fully qualified identifier for the connector",
          },
        },
        {
          name: "resume",
          description:
            "Resumes operation of a stopped Managed Service for Apache Kafka connector",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optConnectCluster,
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
          args: {
            name: "CONNECTOR",
            description:
              "ID of the connector or fully qualified identifier for the connector",
          },
        },
        {
          name: "stop",
          description:
            "Stops operation of a Managed Service for Apache Kafka connector",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optConnectCluster,
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
          args: {
            name: "CONNECTOR",
            description:
              "ID of the connector or fully qualified identifier for the connector",
          },
        },
        {
          name: "update",
          description: "Update a Managed Service for Apache Kafka connector",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--config-file",
              description:
                "The path to the JSON or YAML file containing the configuration that are overridden from the connector defaults. This also supports inline JSON or YAML. Sets `config_file` value",
              args: {
                name: "JSON|YAML|FILE",
                description: "Dict",
              },
            },
            {
              name: "--configs",
              description:
                "Configuration for the connector that are overridden from the connector defaults. The key of the map is a Kafka topic property name, for example: `cleanup.policy=compact`,`compression.type=producer`",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optConfiguration,
            optConnectCluster,
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
            {
              name: "--no-task-retry-disabled",
              description: "Disable default task retry policy",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--task-restart-max-backoff",
              description:
                "The maximum amount of time to wait before retrying a failed task in seconds. This sets an upper bound for the backoff delay. The default value is 1800s (30 minutes). See $ gcloud topic datetimes for information on duration formats",
              priority: 100,
              args: {
                name: "TASK_RESTART_MAX_BACKOFF",
              },
            },
            {
              name: "--task-restart-min-backoff",
              description:
                "The minimum amount of time to wait before retrying a failed task in seconds. This sets a lower bound for the backoff delay. The default value is 60s. See $ gcloud topic datetimes for information on duration formats",
              priority: 100,
              args: {
                name: "TASK_RESTART_MIN_BACKOFF",
              },
            },
            {
              name: "--task-retry-disabled",
              description: "Disable default task retry policy",
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONNECTOR",
            description:
              "ID of the connector or fully qualified identifier for the connector",
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
      name: "consumer-groups",
      description:
        "Administer Managed Service for Apache Kafka consumer groups",
      subcommands: [
        {
          name: "delete",
          description:
            "Delete a Managed Service for Apache Kafka consumer group",
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
            optLocation,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONSUMER_GROUP",
            description:
              "ID of the consumer_group or fully qualified identifier for the consumer_group",
          },
        },
        {
          name: "describe",
          description:
            "Describe a Managed Service for Apache Kafka consumer group",
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
            optLocation,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONSUMER_GROUP",
            description:
              "ID of the consumer_group or fully qualified identifier for the consumer_group",
          },
        },
        {
          name: "list",
          description:
            "List all Managed Service for Apache Kafka consumer groups in a given cluster and location",
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
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--view",
              description:
                "The level of detail to return for consumer groups. _VIEW_ must be one of:",
              args: {
                name: "VIEW",
                suggestions: ["basic", "full"],
              },
            },
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster",
          },
        },
        {
          name: "update",
          description:
            "Update a Managed Service for Apache Kafka consumer group",
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
            optLocation,
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--topics-file",
              description:
                "The path to the JSON or YAML file containing the configuration of the topics to be updated for the consumer group. This also supports inline JSON or YAML. Required, sets `topics_file` value",
              priority: 100,
              args: {
                name: "JSON|YAML|FILE",
                description: "Dict",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONSUMER_GROUP",
            description:
              "ID of the consumer_group or fully qualified identifier for the consumer_group",
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
      description: "View Managed Service for Apache Kafka operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Managed Service for Apache Kafka operation",
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
          args: {
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "list",
          description:
            "List all Managed Service for Apache Kafka operations in a given location",
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
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
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
      name: "topics",
      description: "Administer Managed Service for Apache Kafka topics",
      subcommands: [
        {
          name: "create",
          description: "Create a Managed Service for Apache Kafka topic",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            {
              name: "--configs",
              description:
                "Configuration for the topic that are overridden from the cluster defaults. The key of the map is a Kafka topic property name, for example: `cleanup.policy=compact`,`compression.type=producer`. If you provide a map with a key that already exists, only that configuration is updated. If the map contains a key that does not exist, the entry is appended to the topic configuration",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
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
            {
              name: "--partitions",
              description:
                "The number of partitions in a topic. You can increase the partition count for a topic, but you cannot decrease it. Increasing partitions for a topic that uses a key might change how messages are distributed",
              priority: 100,
              args: {
                name: "PARTITIONS",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--replication-factor",
              description:
                "The number of replicas of each partition. A replication factor of 3 is recommended for high availability",
              priority: 100,
              args: {
                name: "REPLICATION_FACTOR",
                description: "Int",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic",
          },
        },
        {
          name: "delete",
          description: "Delete a Managed Service for Apache Kafka topic",
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
            optLocation,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic",
          },
        },
        {
          name: "describe",
          description: "Describe a Managed Service for Apache Kafka topic",
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
            optLocation,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic",
          },
        },
        {
          name: "list",
          description:
            "List all Managed Service for Apache Kafka topics in a given cluster",
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
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster",
          },
        },
        {
          name: "update",
          description: "Update a Managed Service for Apache Kafka topic",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--clear-configs",
              description: "Remove all the configurations for the topic",
            },
            optCluster,
            {
              name: "--configs",
              description:
                "Configuration for the topic that are overridden from the cluster defaults. The key of the map is a Kafka topic property name, for example: `cleanup.policy=compact`,`compression.type=producer`. If you provide a map with a key that already exists, only that configuration is updated. If the map contains a key that does not exist, the entry is appended to the topic configuration",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
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
            {
              name: "--no-clear-configs",
              description: "Remove all the configurations for the topic",
              hidden: true,
            },
            {
              name: "--partitions",
              description:
                "The number of partitions in a topic. You can increase the partition count for a topic, but you cannot decrease it. Increasing partitions for a topic that uses a key might change how messages are distributed",
              args: {
                name: "PARTITIONS",
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
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic",
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
