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

const optEntryGroup: Fig.Option = {
  name: "--entry-group",
  description: "Entry group of the entry",
  args: {
    name: "ENTRY_GROUP",
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
  description: "Location of the entry group",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description: "Location of the entry",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation4: Fig.Option = {
  name: "--location",
  description: "Location of the policy tag",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation5: Fig.Option = {
  name: "--location",
  description: "Location of the tag template field",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation6: Fig.Option = {
  name: "--location",
  description: "Location of the tag template",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation7: Fig.Option = {
  name: "--location",
  description: "Location of the taxonomy",
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

const optTagTemplate: Fig.Option = {
  name: "--tag-template",
  description: "Tag template of the tag template field",
  args: {
    name: "TAG_TEMPLATE",
    description: "String",
  },
};

const optTaxonomy: Fig.Option = {
  name: "--taxonomy",
  description: "Taxonomy of the policy tag",
  args: {
    name: "TAXONOMY",
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
  name: "data-catalog",
  description: "Manage Data Catalog resources",
  subcommands: [
    {
      name: "entries",
      description: "Manage entries in Data Catalog",
      subcommands: [
        {
          name: "create",
          description: "*(DEPRECATED)* Create a Data Catalog entry",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Textual description of the entry",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Human-readable name for the entry",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optEntryGroup,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--fully-qualified-name",
              description: "Fully qualified name of the resource",
              args: {
                name: "FULLY_QUALIFIED_NAME",
                description: "String",
              },
            },
            {
              name: "--gcs-file-patterns",
              description:
                "Patterns to identify a set of files in Google Cloud Storage. A star (```*```) may be used at the end of a pattern to match arbitrary files beginning with that pattern",
              args: {
                name: "GCS_FILE_PATTERNS",
                description: "List",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--kafka-cluster",
              description:
                "Name of the entry representing Kafka cluster this topic is a part of",
              hidden: true,
              priority: 100,
              args: {
                name: "KAFKA_CLUSTER",
                description: "String",
              },
            },
            {
              name: "--kafka-cluster-bootstrap-servers",
              description:
                "A comma-separated list of host and port pairs that are the addresses of the Kafka brokers",
              hidden: true,
              priority: 100,
              args: {
                name: "KAFKA_CLUSTER_BOOTSTRAP_SERVERS",
                description: "String",
              },
            },
            {
              name: "--kafka-topic",
              description: "Name of the Kafka topic this Entry represents",
              hidden: true,
              priority: 100,
              args: {
                name: "KAFKA_TOPIC",
                description: "String",
              },
            },
            {
              name: "--linked-resource",
              description:
                "Link to the resource in external system. If `--type` is not used, then `--linked-resource` may be provided",
              args: {
                name: "LINKED_RESOURCE",
                description: "String",
              },
            },
            optLocation3,
            optLogHttp,
            {
              name: "--physical-schema-file",
              description: "File contents with physical schema",
              hidden: true,
              args: {
                name: "PHYSICAL_SCHEMA_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--physical-schema-type",
              description:
                "Type of physical schema. Accepted values are avro, thrift, protobuf, parquet, orc",
              hidden: true,
              priority: 100,
              args: {
                name: "PHYSICAL_SCHEMA_TYPE",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--schema",
              description:
                "Inline schema for the entry. When specifying a schema via this argument, only column names and types should be provided. Column modes will default to NULLABLE, and column descriptions and nested subcolumns are not supported",
              args: {
                name: "COLUMN_NAME=COLUMN_TYPE",
              },
            },
            {
              name: "--schema-from-file",
              description:
                "Path to a JSON or YAML file containing the schema for the entry. This can be used to specify schemas with column descriptions, column modes other than NULLABLE, and nested subcolumns. Use a full or relative path to a local file containing the value of schema",
              args: {
                name: "SCHEMA_FROM_FILE",
                template: "filepaths",
              },
            },
            {
              name: "--source-system-create-time",
              description:
                "Creation timestamp of the resource in the external system. If `--type` is not used, then `--source-system-create-time` may be provided",
              args: {
                name: "SOURCE_SYSTEM_CREATE_TIME",
              },
            },
            {
              name: "--source-system-update-time",
              description:
                "Update timestamp of the resource in the external system. If `--type` is not used, then `--source-system-update-time` may be provided",
              args: {
                name: "SOURCE_SYSTEM_UPDATE_TIME",
              },
            },
            optTraceToken,
            {
              name: "--type",
              description:
                "Type of the entry. _TYPE_ must be one of: *cluster*, *dashboard*, *database*, *database-schema*, *data-source-connection*, *data-stream*, *edge*, *entry-type-unspecified*, *explore*, *feature-group*, *feature-online-store*, *feature-view*, *fileset*, *graph*, *lake*, *look*, *model*, *node*, *routine*, *service*, *table*, *zone*",
              priority: 100,
              args: {
                name: "TYPE",
                suggestions: [
                  "cluster",
                  "dashboard",
                  "database",
                  "database-schema",
                  "data-source-connection",
                  "data-stream",
                  "edge",
                  "entry-type-unspecified",
                  "explore",
                  "feature-group",
                  "feature-online-store",
                  "feature-view",
                  "fileset",
                  "graph",
                  "lake",
                  "look",
                  "model",
                  "node",
                  "routine",
                  "service",
                  "table",
                  "zone",
                ],
              },
            },
            optUserOutputEnabled,
            {
              name: "--user-specified-system",
              description:
                "External system from which the entry is fed. If `--type` is not used, then `--user-specified-system` must be provided",
              priority: 100,
              args: {
                name: "USER_SPECIFIED_SYSTEM",
                description: "String",
              },
            },
            {
              name: "--user-specified-type",
              description:
                "Type of the entry coming from external system. If `--type` is not used, then `--user-specified-type` must be provided",
              priority: 100,
              args: {
                name: "USER_SPECIFIED_TYPE",
                description: "String",
              },
            },
            optVerbosity,
          ],
          args: {
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry",
          },
        },
        {
          name: "delete",
          description: "*(DEPRECATED)* Delete a Data Catalog entry",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optEntryGroup,
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
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry",
          },
        },
        {
          name: "describe",
          description: "*(DEPRECATED)* Describe a Data Catalog entry",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optEntryGroup,
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
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry",
          },
        },
        {
          name: "list",
          description:
            "*(DEPRECATED)* List all entries in a Data Catalog entry group",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--entry-group",
              description:
                "ID of the entry group or fully qualified identifier for the entry group",
              priority: 100,
              args: {
                name: "ENTRY_GROUP",
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
          name: "lookup",
          description:
            "*(DEPRECATED)* Lookup a Data Catalog entry by its target name",
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
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RESOURCE",
            description:
              "The name of the target resource to lookup. This can be either the Google Cloud Platform resource name or the SQL name of a Google Cloud Platform resource. SQL names follow Standard SQL lexical structure: https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical",
          },
        },
        {
          name: "star",
          description: "*(DEPRECATED)* Star a Data Catalog entry",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optEntryGroup,
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
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry",
          },
        },
        {
          name: "unstar",
          description: "*(DEPRECATED)* Unstar a Data Catalog entry",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optEntryGroup,
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
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry",
          },
        },
        {
          name: "update",
          description: "*(DEPRECATED)* Update a Data Catalog entry",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-file-patterns",
              description: "A list of file patterns to add to the current list",
              args: {
                name: "PATTERN",
                description: "List",
              },
            },
            optBillingProject,
            {
              name: "--clear-file-patterns",
              description:
                "If specified, clear the current list of file patterns",
            },
            optConfiguration,
            {
              name: "--description",
              description: "Textual description of the entry",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Human-readable name for the entry",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optEntryGroup,
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
                "Name of the entry representing Kafka cluster this topic is a part of",
              hidden: true,
              args: {
                name: "KAFKA_CLUSTER",
                description: "String",
              },
            },
            {
              name: "--kafka-cluster-bootstrap-servers",
              description:
                "A comma-separated list of host and port pairs that are the addresses of the Kafka brokers",
              hidden: true,
              args: {
                name: "KAFKA_CLUSTER_BOOTSTRAP_SERVERS",
                description: "String",
              },
            },
            {
              name: "--kafka-topic",
              description: "Name of the Kafka topic this Entry represents",
              hidden: true,
              args: {
                name: "KAFKA_TOPIC",
                description: "String",
              },
            },
            {
              name: "--linked-resource",
              description:
                "Link to the resource in external system. If `--type` is not used, then `--linked-resource` may be provided",
              args: {
                name: "LINKED_RESOURCE",
                description: "String",
              },
            },
            optLocation3,
            optLogHttp,
            {
              name: "--lookup-entry",
              description:
                "The name of the target resource whose entry to update. This can be either the Google Cloud Platform resource name or the SQL name of a Google Cloud Platform resource. This flag allows one to update the entry corresponding to the lookup of the given resource, without needing to specify the entry directly",
              args: {
                name: "RESOURCE",
                description: "String",
              },
            },
            {
              name: "--no-clear-file-patterns",
              description:
                "If specified, clear the current list of file patterns",
              hidden: true,
            },
            {
              name: "--physical-schema-file",
              description: "File contents with physical schema",
              hidden: true,
              args: {
                name: "PHYSICAL_SCHEMA_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--physical-schema-type",
              description:
                "Type of physical schema. Accepted values are avro, thrift, protobuf, parquet, orc",
              hidden: true,
              priority: 100,
              args: {
                name: "PHYSICAL_SCHEMA_TYPE",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--remove-file-patterns",
              description:
                "A list of file patterns to remove from the current list",
              args: {
                name: "PATTERN",
                description: "List",
              },
            },
            {
              name: "--schema",
              description:
                "Inline schema for the entry. When specifying a schema via this argument, only column names and types should be provided. Column modes will default to NULLABLE, and column descriptions and nested subcolumns are not supported",
              args: {
                name: "COLUMN_NAME=COLUMN_TYPE",
              },
            },
            {
              name: "--schema-from-file",
              description:
                "Path to a JSON or YAML file containing the schema for the entry. This can be used to specify schemas with column descriptions, column modes other than NULLABLE, and nested subcolumns. Use a full or relative path to a local file containing the value of schema",
              args: {
                name: "SCHEMA_FROM_FILE",
                template: "filepaths",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            {
              name: "--user-specified-system",
              description:
                "External system from which the entry is fed. This can be updated for on prem entries",
              args: {
                name: "USER_SPECIFIED_SYSTEM",
                description: "String",
              },
            },
            {
              name: "--user-specified-type",
              description:
                "Type of the entry coming from external system. This can be updated for on prem entries",
              args: {
                name: "USER_SPECIFIED_TYPE",
                description: "String",
              },
            },
            optVerbosity,
          ],
          args: {
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry",
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
      name: "entry-groups",
      description: "*(DEPRECATED)* Manage entry groups in Data Catalog",
      deprecated: true,
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "*(DEPRECATED)* Add an IAM policy binding to a Data Catalog entry group",
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
            optLocation2,
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
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group",
          },
        },
        {
          name: "create",
          description: "*(DEPRECATED)* Create a Data Catalog entry group",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the entry group",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Human-readable name of the entry group",
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
            optLocation2,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group",
          },
        },
        {
          name: "delete",
          description: "*(DEPRECATED)* Delete a Data Catalog entry group",
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
            optLocation2,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group",
          },
        },
        {
          name: "describe",
          description: "*(DEPRECATED)* Describe a Data Catalog entry group",
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
            optLocation2,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group",
          },
        },
        {
          name: "get-iam-policy",
          description:
            "*(DEPRECATED)* Get the IAM policy for a Data Catalog entry group",
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
          args: {
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group",
          },
        },
        {
          name: "list",
          description:
            "*(DEPRECATED)* List all entry groups in a Data Catalog location",
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
          name: "remove-iam-policy-binding",
          description:
            "*(DEPRECATED)* Remove an IAM policy binding from a Data Catalog entry group",
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
            optLocation2,
            optLogHttp,
            optMember2,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "*(DEPRECATED)* Set the IAM policy for a Data Catalog entry group",
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
            optLocation2,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "ENTRY_GROUP",
              description:
                "ID of the entry group or fully qualified identifier for the entry group",
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
          description: "*(DEPRECATED)* Update a Data Catalog entry group",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the entry group",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Human-readable name of the entry group",
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
            optLocation2,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group",
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
      name: "search",
      description:
        "*(DEPRECATED)* Search Data Catalog for resources that match a query",
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
        {
          name: "--include-gcp-public-datasets",
          description:
            "If True, include Google Cloud Platform public datasets in the search results",
        },
        {
          name: "--include-organization-ids",
          description:
            "List of Cloud Organization IDs to include in the search",
          args: {
            name: "ORGANIZATION",
            description: "List",
          },
        },
        {
          name: "--include-project-ids",
          description: "List of Cloud Project IDs to include in the search",
          args: {
            name: "PROJECT",
            description: "List",
          },
        },
        {
          name: "--limit",
          description:
            "Maximum number of resources to list. The default is *unlimited*",
          args: {
            name: "LIMIT",
          },
        },
        optLogHttp,
        {
          name: "--no-include-gcp-public-datasets",
          description:
            "If True, include Google Cloud Platform public datasets in the search results",
          hidden: true,
        },
        {
          name: "--order-by",
          description:
            "Specifies the ordering of results. Defaults to 'relevance'",
          args: {
            name: "ORDER_BY",
            description: "String",
          },
        },
        {
          name: "--page-size",
          description:
            "Some services group resource list output into pages. This flag specifies the maximum number of resources per page",
          args: {
            name: "PAGE_SIZE",
          },
        },
        optProject,
        optQuiet,
        {
          name: "--restricted-locations",
          description: "List of locations to search within",
          args: {
            name: "LOCATION",
            description: "List",
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "QUERY",
        description:
          "Query string in search query syntax in Data Catalog. For more information, see: https://cloud.google.com/data-catalog/docs/how-to/search-reference",
      },
    },
    {
      name: "tag-templates",
      description: "*(DEPRECATED)* Manage tag templates in Data Catalog",
      deprecated: true,
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "*(DEPRECATED)* Add IAM policy binding to a Data Catalog tag template",
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
            optLocation6,
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
            name: "TAG_TEMPLATE",
            description:
              "ID of the tag template or fully qualified identifier for the tag template",
          },
        },
        {
          name: "create",
          description: "*(DEPRECATED)* Create a Data Catalog tag template",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--display-name",
              description: "Human-readable name for the tag template",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--field",
              description:
                "Specification for a tag template field. This flag can be repeated to specify multiple fields. The following keys are allowed:",
              priority: 100,
              isRepeatable: true,
              args: {
                name: "id=ID,type=TYPE,display-name=DISPLAY_NAME,required=REQUIRED",
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
            optLocation6,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TAG_TEMPLATE",
            description:
              "ID of the tag template or fully qualified identifier for the tag template",
          },
        },
        {
          name: "delete",
          description: "*(DEPRECATED)* Delete a Data Catalog tag template",
          deprecated: true,
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
                "If True, any tags with this tag template will be deleted",
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation6,
            optLogHttp,
            {
              name: "--no-force",
              description:
                "If True, any tags with this tag template will be deleted",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TAG_TEMPLATE",
            description:
              "ID of the tag template or fully qualified identifier for the tag template",
          },
        },
        {
          name: "describe",
          description: "*(DEPRECATED)* Describe a Data Catalog tag template",
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
            optLocation6,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TAG_TEMPLATE",
            description:
              "ID of the tag template or fully qualified identifier for the tag template",
          },
        },
        {
          name: "fields",
          description:
            "*(DEPRECATED)* Manage tag template fields in Data Catalog",
          deprecated: true,
          subcommands: [
            {
              name: "create",
              description:
                "*(DEPRECATED)* Create a Data Catalog tag template field",
              deprecated: true,
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--display-name",
                  description: "Display name of the tag template field",
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
                optLocation5,
                optLogHttp,
                optProject,
                optQuiet,
                optTagTemplate,
                optTraceToken,
                {
                  name: "--type",
                  description:
                    "Type of the tag template field. Choices are double, string, bool, timestamp, and enum",
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
                name: "FIELD",
                description:
                  "ID of the tag template field or fully qualified identifier for the tag template field",
              },
            },
            {
              name: "delete",
              description:
                "*(DEPRECATED)* Delete a Data Catalog tag template field",
              deprecated: true,
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
                    "If True, this tag template field will be deleted from any existing tags",
                },
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLocation5,
                optLogHttp,
                {
                  name: "--no-force",
                  description:
                    "If True, this tag template field will be deleted from any existing tags",
                  hidden: true,
                },
                optProject,
                optQuiet,
                optTagTemplate,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "FIELD",
                description:
                  "ID of the tag template field or fully qualified identifier for the tag template field",
              },
            },
            {
              name: "enum-values",
              description:
                "*(DEPRECATED)* Manage tag template enum values in Data Catalog",
              deprecated: true,
              subcommands: [
                {
                  name: "rename",
                  description:
                    "*(DEPRECATED)* Rename an enum value in Data Catalog tag template enum field",
                  deprecated: true,
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    {
                      name: "--field",
                      description:
                        "Tag template field that contains enum value",
                      args: {
                        name: "FIELD",
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
                      name: "--location",
                      description: "Location of the enum value",
                      args: {
                        name: "LOCATION",
                        description: "String",
                      },
                    },
                    optLogHttp,
                    {
                      name: "--new-id",
                      description: "New display name of the enum value",
                      priority: 100,
                      args: {
                        name: "NEW_ID",
                        description: "String",
                      },
                    },
                    optProject,
                    optQuiet,
                    {
                      name: "--tag-template",
                      description: "Tag template that contains enum value",
                      args: {
                        name: "TAG_TEMPLATE",
                        description: "String",
                      },
                    },
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "ENUM_VALUE",
                    description:
                      "ID of the enum value or fully qualified identifier for the enum value",
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
              name: "rename",
              description:
                "*(DEPRECATED)* Rename a Data Catalog tag template field",
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
                optLocation5,
                optLogHttp,
                {
                  name: "--new-id",
                  description: "New ID of the tag template field",
                  priority: 100,
                  args: {
                    name: "NEW_ID",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                optTagTemplate,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "FIELD",
                description:
                  "ID of the tag template field or fully qualified identifier for the tag template field",
              },
            },
            {
              name: "update",
              description:
                "*(DEPRECATED)* Update a Data Catalog tag template field",
              deprecated: true,
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--display-name",
                  description: "Display name of the tag template field",
                  args: {
                    name: "DISPLAY_NAME",
                    description: "String",
                  },
                },
                {
                  name: "--enum-values",
                  description:
                    "Comma-separated list of enum values. The list of enum values passed with this flag replaces the existing one in tag template enum field. That means: - the enum values passed to the flag and not present in tag template enum field get created - the enum values present in tag template enum field and missing in the list get removed - the order of the items on the list is preserved",
                  args: {
                    name: "ENUM_VALUES",
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
                optLocation5,
                optLogHttp,
                {
                  name: "--no-required",
                  description:
                    "Indicates if the tag template field is required. Updating from FALSE (optional) to TRUE (required) is NOT allowed",
                  hidden: true,
                },
                optProject,
                optQuiet,
                {
                  name: "--required",
                  description:
                    "Indicates if the tag template field is required. Updating from FALSE (optional) to TRUE (required) is NOT allowed",
                },
                optTagTemplate,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "FIELD",
                description:
                  "ID of the tag template field or fully qualified identifier for the tag template field",
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
          name: "get-iam-policy",
          description:
            "*(DEPRECATED)* Get the IAM policy for a Data Catalog tag template",
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
            optLimit,
            optLocation6,
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
            name: "TAG_TEMPLATE",
            description:
              "ID of the tag template or fully qualified identifier for the tag template",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description:
            "*(DEPRECATED)* Remove IAM policy binding from a Data Catalog tag template",
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
            optLocation6,
            optLogHttp,
            optMember2,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TAG_TEMPLATE",
            description:
              "ID of the tag template or fully qualified identifier for the tag template",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "*(DEPRECATED)* Set the IAM policy for a Data Catalog tag template",
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
            optLocation6,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "TAG_TEMPLATE",
              description:
                "ID of the tag template or fully qualified identifier for the tag template",
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
          description: "*(DEPRECATED)* Update a Data Catalog tag template",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--display-name",
              description: "New human-readable name for the tag template",
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
            optLocation6,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TAG_TEMPLATE",
            description:
              "ID of the tag template or fully qualified identifier for the tag template",
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
      name: "tags",
      description: "*(DEPRECATED)* Manage tags in Data Catalog",
      deprecated: true,
      subcommands: [
        {
          name: "create",
          description: "*(DEPRECATED)* Create a Data Catalog entry tag",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--entry",
              description:
                "ID of the entry or fully qualified identifier for the entry",
              priority: 100,
              args: {
                name: "ENTRY",
                description: "String",
              },
            },
            optEntryGroup,
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
            {
              name: "--scope",
              description:
                "Scope within the parent resource that the tag is attached to. Scopes allow users to attach tags to individual columns based on the parent resource's schema. To attach a tag to a nested column, use '.' to separate the column names: 'outer_column.inner_column'",
              args: {
                name: "SCOPE",
                description: "String",
              },
            },
            {
              name: "--tag-file",
              description: "Path to a JSON or YAML file containing the tag",
              priority: 100,
              args: {
                name: "TAG_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--tag-template",
              description:
                "ID of the tag template or fully qualified identifier for the tag template",
              priority: 100,
              args: {
                name: "TAG_TEMPLATE",
                description: "String",
              },
            },
            {
              name: "--tag-template-location",
              description: "Location of the tag template",
              args: {
                name: "TAG_TEMPLATE_LOCATION",
                description: "String",
              },
            },
            {
              name: "--tag-template-project",
              description: "Project of the tag template",
              args: {
                name: "TAG_TEMPLATE_PROJECT",
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
          description: "*(DEPRECATED)* Delete a Data Catalog entry tag",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--entry",
              description: "Entry of the tag",
              args: {
                name: "ENTRY",
                description: "String",
              },
            },
            {
              name: "--entry-group",
              description: "Entry group of the tag",
              args: {
                name: "ENTRY_GROUP",
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
              name: "--location",
              description: "Location of the tag",
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
            name: "TAG",
            description:
              "ID of the tag or fully qualified identifier for the tag",
          },
        },
        {
          name: "list",
          description: "*(DEPRECATED)* List Data Catalog entry tags",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--entry",
              description:
                "ID of the entry or fully qualified identifier for the entry",
              priority: 100,
              args: {
                name: "ENTRY",
                description: "String",
              },
            },
            optEntryGroup,
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
          name: "update",
          description: "*(DEPRECATED)* Update a Data Catalog entry tag",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--entry",
              description: "Entry of the tag",
              args: {
                name: "ENTRY",
                description: "String",
              },
            },
            {
              name: "--entry-group",
              description: "Entry group of the tag",
              args: {
                name: "ENTRY_GROUP",
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
              name: "--location",
              description: "Location of the tag",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--tag-file",
              description: "Path to a JSON or YAML file containing the tag",
              priority: 100,
              args: {
                name: "TAG_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--tag-template",
              description:
                "ID of the tag template or fully qualified identifier for the tag template",
              priority: 100,
              args: {
                name: "TAG_TEMPLATE",
                description: "String",
              },
            },
            {
              name: "--tag-template-location",
              description: "Location of the tag template",
              args: {
                name: "TAG_TEMPLATE_LOCATION",
                description: "String",
              },
            },
            {
              name: "--tag-template-project",
              description: "Project of the tag template",
              args: {
                name: "TAG_TEMPLATE_PROJECT",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TAG",
            description:
              "ID of the tag or fully qualified identifier for the tag",
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
      name: "taxonomies",
      description: "Manage taxonomies in Data Catalog",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add an IAM policy binding to a Policy Tag Taxonomy",
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
            optMember,
            optProject,
            optQuiet,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TAXONOMY",
            description:
              "ID of the taxonomy or fully qualified identifier for the taxonomy",
          },
        },
        {
          name: "describe",
          description: "Describe a Policy Tag Taxonomy",
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
            name: "TAXONOMY",
            description:
              "ID of the taxonomy or fully qualified identifier for the taxonomy",
          },
        },
        {
          name: "export",
          description: "Export a list of taxonomies from a certain project",
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
            name: "TAXONOMIES",
            description: "List of taxonomies to bring",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Policy Tag Taxonomy",
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
            optLocation7,
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
            name: "TAXONOMY",
            description:
              "ID of the taxonomy or fully qualified identifier for the taxonomy",
          },
        },
        {
          name: "import",
          description:
            "Export a file with serialized taxonomies to a certain project",
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
            name: "TAXONOMIES",
            description: "File containing serialized taxonomy",
          },
        },
        {
          name: "list",
          description: "List Cloud Policy Tag Taxonomies",
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
          name: "policy-tags",
          description: "Manage policy tags in Data Catalog",
          subcommands: [
            {
              name: "add-iam-policy-binding",
              description:
                "Add an IAM policy binding to a Data Catalog policy tag",
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
                optMember,
                optProject,
                optQuiet,
                optRole,
                optTaxonomy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "POLICY_TAG",
                description:
                  "ID of the policy tag or fully qualified identifier for the policy tag",
              },
            },
            {
              name: "describe",
              description: "Describe a Policy Tag Manager Policy tag",
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
                optTaxonomy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "POLICY_TAG",
                description:
                  "ID of the policy tag or fully qualified identifier for the policy tag",
              },
            },
            {
              name: "get-iam-policy",
              description: "Get the IAM policy for a Data Catalog Policy Tag",
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
                optLocation4,
                optLogHttp,
                optPageSize,
                optProject,
                optQuiet,
                optSortBy,
                optTaxonomy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "POLICY_TAG",
                description:
                  "ID of the policy tag or fully qualified identifier for the policy tag",
              },
            },
            {
              name: "list",
              description: "List Cloud Policy Tag Manager policy tags",
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
                optLocation7,
                optLogHttp,
                optNoUri,
                optPageSize,
                optProject,
                optQuiet,
                optSortBy,
                {
                  name: "--taxonomy",
                  description:
                    "ID of the taxonomy or fully qualified identifier for the taxonomy",
                  priority: 100,
                  args: {
                    name: "TAXONOMY",
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
              name: "remove-iam-policy-binding",
              description:
                "Remove an IAM policy binding from a Data Catalog policy tag",
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
                optMember2,
                optProject,
                optQuiet,
                optRole2,
                optTaxonomy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "POLICY_TAG",
                description:
                  "ID of the policy tag or fully qualified identifier for the policy tag",
              },
            },
            {
              name: "set-iam-policy",
              description: "Set the IAM policy for a Data Catalog Policy Tag",
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
                optTaxonomy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: [
                {
                  name: "POLICY_TAG",
                  description:
                    "ID of the policy tag or fully qualified identifier for the policy tag",
                },
                {
                  name: "POLICY_FILE",
                  description:
                    "Path to a local JSON or YAML formatted file containing a valid policy",
                  template: "filepaths",
                },
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
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding from a policy tag taxonomy",
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
            optMember2,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TAXONOMY",
            description:
              "ID of the taxonomy or fully qualified identifier for the taxonomy",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a Policy Tag taxonomy",
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
          args: [
            {
              name: "TAXONOMY",
              description:
                "ID of the taxonomy or fully qualified identifier for the taxonomy",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy",
              template: "filepaths",
            },
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
