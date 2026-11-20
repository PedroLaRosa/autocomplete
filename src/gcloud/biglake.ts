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

const optCatalog: Fig.Option = {
  name: "--catalog",
  description: "The Iceberg Catalog for the resource",
  args: {
    name: "CATALOG",
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

const optNamespace: Fig.Option = {
  name: "--namespace",
  description: "The Iceberg Namespace for the resource",
  args: {
    name: "NAMESPACE",
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
  name: "biglake",
  description: "Create and manage Google Cloud BigLake resources",
  subcommands: [
    {
      name: "iceberg",
      description: "Biglake Iceberg REST Catalogs",
      subcommands: [
        {
          name: "catalogs",
          description: "Manage BigLake Iceberg REST catalogs",
          subcommands: [
            {
              name: "create",
              description: "Create a BigLake Iceberg REST catalog",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--catalog-type",
                  description:
                    "Catalog type to create the catalog with. _CATALOG_TYPE_ must be (only one value is supported):",
                  priority: 100,
                  args: {
                    name: "CATALOG_TYPE",
                    suggestions: ["biglake", "federated", "gcs-bucket"],
                  },
                },
                optConfiguration,
                {
                  name: "--credential-mode",
                  description:
                    "Credential mode to create the catalog with. _CREDENTIAL_MODE_ must be one of:",
                  args: {
                    name: "CREDENTIAL_MODE",
                    suggestions: ["end-user", "vended-credentials"],
                  },
                },
                {
                  name: "--description",
                  description: "Description of the resource",
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
                optLogHttp,
                {
                  name: "--primary-location",
                  description:
                    "Primary location for mirroring the remote catalog metadata. It must be a BigLake-supported location, and it should be proximate to the remote catalog's location for better performance and lower cost",
                  args: {
                    name: "PRIMARY_LOCATION",
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
                name: "CATALOG",
                description:
                  "ID of the catalog or fully qualified identifier for the catalog",
              },
            },
            {
              name: "delete",
              description: "Delete a BigLake Iceberg REST catalog",
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
                name: "CATALOG",
                description:
                  "ID of the catalog or fully qualified identifier for the catalog",
              },
            },
            {
              name: "describe",
              description: "Describe a BigLake Iceberg REST catalog",
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
                name: "CATALOG",
                description:
                  "ID of the catalog or fully qualified identifier for the catalog",
              },
            },
            {
              name: "failover",
              description: "Failover a BigLake Iceberg REST catalog",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--conditional-failover-replication-time",
                  description:
                    'If not specified, wait for all data from the source region to replicate to the new primary region before completing the failover, with no data loss. If specified, the failover will be executed immediately, accepting data loss of any data commited after the specified timestamp. This timestamp must be in UTC format, e.g. "2025-10-09T01:13:34.038262Z". See `$ gcloud topic datetimes` for more information',
                  args: {
                    name: "CONDITIONAL_FAILOVER_REPLICATION_TIME",
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
                {
                  name: "--no-validate-only",
                  description:
                    "If true, the failover will be validated but not executed",
                  hidden: true,
                },
                {
                  name: "--primary-replica",
                  description: "The primary replica region to failover to",
                  priority: 100,
                  args: {
                    name: "PRIMARY_REPLICA",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                {
                  name: "--validate-only",
                  description:
                    "If true, the failover will be validated but not executed",
                },
                optVerbosity,
              ],
              args: {
                name: "CATALOG",
                description:
                  "ID of the catalog or fully qualified identifier for the catalog",
              },
            },
            {
              name: "get-iam-policy",
              description:
                "Get the IAM policy for a BigLake Iceberg REST catalog",
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
                optPageSize,
                optProject,
                optQuiet,
                optSortBy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "CATALOG",
                description:
                  "ID of the catalog or fully qualified identifier for the catalog",
              },
            },
            {
              name: "list",
              description: "List BigLake Iceberg REST catalogs",
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
            {
              name: "set-iam-policy",
              description:
                "Set the IAM policy for a BigLake Iceberg REST catalog",
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
              args: [
                {
                  name: "CATALOG",
                  description:
                    "ID of the catalog or fully qualified identifier for the catalog",
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
              description: "Update a BigLake Iceberg REST catalog",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--credential-mode",
                  description:
                    "Credential mode to create the catalog with. _CREDENTIAL_MODE_ must be one of:",
                  args: {
                    name: "CREDENTIAL_MODE",
                    suggestions: ["end-user", "vended-credentials"],
                  },
                },
                {
                  name: "--description",
                  description: "Description of the resource",
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
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "CATALOG",
                description:
                  "ID of the catalog or fully qualified identifier for the catalog",
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
          name: "namespaces",
          description: "Manage BigLake Iceberg REST catalog namespaces",
          subcommands: [
            {
              name: "create",
              description: "Create a BigLake Iceberg REST namespace",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCatalog,
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
                {
                  name: "--properties",
                  description: "Properties associated with the namespace",
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                  },
                },
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "NAMESPACE",
                description:
                  "ID of the namespace or fully qualified identifier for the namespace",
              },
            },
            {
              name: "delete",
              description: "Delete a BigLake Iceberg REST namespace",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCatalog,
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
                name: "NAMESPACE",
                description:
                  "ID of the namespace or fully qualified identifier for the namespace",
              },
            },
            {
              name: "describe",
              description: "Describe a BigLake Iceberg REST namespace",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCatalog,
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
                name: "NAMESPACE",
                description:
                  "ID of the namespace or fully qualified identifier for the namespace",
              },
            },
            {
              name: "get-iam-policy",
              description:
                "Get the IAM policy for a BigLake Iceberg REST catalog namespace",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCatalog,
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
                optPageSize,
                optProject,
                optQuiet,
                optSortBy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "NAMESPACE",
                description:
                  "ID of the namespace or fully qualified identifier for the namespace",
              },
            },
            {
              name: "list",
              description: "List BigLake Iceberg REST namespaces",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--catalog",
                  description:
                    "ID of the catalog or fully qualified identifier for the catalog",
                  priority: 100,
                  args: {
                    name: "CATALOG",
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
                optSortBy,
                optTraceToken,
                optUri,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "set-iam-policy",
              description:
                "Set the IAM policy for a BigLake Iceberg REST catalog namespace",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCatalog,
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
              args: [
                {
                  name: "NAMESPACE",
                  description:
                    "ID of the namespace or fully qualified identifier for the namespace",
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
              description: "Update a BigLake Iceberg REST namespace",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCatalog,
                {
                  name: "--clear-properties",
                  description: "Clear all properties from the namespace",
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
                {
                  name: "--no-clear-properties",
                  description: "Clear all properties from the namespace",
                  hidden: true,
                },
                optProject,
                optQuiet,
                {
                  name: "--remove-properties",
                  description: "List of properties to remove",
                  args: {
                    name: "KEY",
                    description: "List",
                  },
                },
                optTraceToken,
                {
                  name: "--update-properties",
                  description: "List of properties to update or add",
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                  },
                },
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "NAMESPACE",
                description:
                  "ID of the namespace or fully qualified identifier for the namespace",
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
          name: "tables",
          description: "Manage BigLake Iceberg REST catalog tables",
          subcommands: [
            {
              name: "create",
              description: "Create a BigLake Iceberg table",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCatalog,
                optConfiguration,
                {
                  name: "--create-from-file",
                  description:
                    "Path to a JSON file containing the table creation request. The format must follow the Apache Iceberg REST Catalog Open API specification for `CreateTableRequest`. The fields `name` and `schema` must be specified",
                  priority: 100,
                  args: {
                    name: "CREATE_FROM_FILE",
                    description: "String",
                    template: "filepaths",
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
                  name: "--namespace",
                  description:
                    "ID of the namespace or fully qualified identifier for the namespace",
                  priority: 100,
                  args: {
                    name: "NAMESPACE",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "delete",
              description: "Delete a BigLake Iceberg table",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCatalog,
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
                optNamespace,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "TABLE",
                description:
                  "ID of the table or fully qualified identifier for the table",
              },
            },
            {
              name: "describe",
              description: "Describe a BigLake Iceberg table",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCatalog,
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
                optNamespace,
                optProject,
                optQuiet,
                {
                  name: "--snapshots",
                  description: "Snapshot to get",
                  args: {
                    name: "SNAPSHOTS",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "TABLE",
                description:
                  "ID of the table or fully qualified identifier for the table",
              },
            },
            {
              name: "get-iam-policy",
              description:
                "Get the IAM policy for a BigLake Iceberg REST catalog table",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCatalog,
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
                optNamespace,
                optPageSize,
                optProject,
                optQuiet,
                optSortBy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "TABLE",
                description:
                  "ID of the table or fully qualified identifier for the table",
              },
            },
            {
              name: "list",
              description: "List BigLake Iceberg REST tables",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCatalog,
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
                  name: "--namespace",
                  description:
                    "ID of the namespace or fully qualified identifier for the namespace",
                  priority: 100,
                  args: {
                    name: "NAMESPACE",
                    description: "String",
                  },
                },
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
              name: "register",
              description: "Register a BigLake Iceberg table",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCatalog,
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
                  name: "--metadata-location",
                  description: "Metadata location of the table",
                  priority: 100,
                  args: {
                    name: "METADATA_LOCATION",
                    description: "String",
                  },
                },
                optNamespace,
                {
                  name: "--no-overwrite",
                  description: "Overwrite the table if it already exists",
                  hidden: true,
                },
                {
                  name: "--overwrite",
                  description: "Overwrite the table if it already exists",
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "TABLE",
                description:
                  "ID of the table or fully qualified identifier for the table",
              },
            },
            {
              name: "set-iam-policy",
              description:
                "Set the IAM policy for a BigLake Iceberg REST catalog table",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCatalog,
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
                optNamespace,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: [
                {
                  name: "TABLE",
                  description:
                    "ID of the table or fully qualified identifier for the table",
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
              description: "Update a BigLake Iceberg table",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCatalog,
                {
                  name: "--clear-properties",
                  description: "Clear all properties from the namespace",
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
                optNamespace,
                {
                  name: "--no-clear-properties",
                  description: "Clear all properties from the namespace",
                  hidden: true,
                },
                optProject,
                optQuiet,
                {
                  name: "--remove-properties",
                  description: "List of properties to remove",
                  args: {
                    name: "KEY",
                    description: "List",
                  },
                },
                optTraceToken,
                {
                  name: "--update-properties",
                  description: "List of properties to update or add",
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                  },
                },
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "TABLE",
                description:
                  "ID of the table or fully qualified identifier for the table",
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
