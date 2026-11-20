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

const optCollection: Fig.Option = {
  name: "--collection",
  description:
    "ID of the collection or fully qualified identifier for the collection",
  priority: 100,
  args: {
    name: "COLLECTION",
    description: "String",
  },
};

const optCollection2: Fig.Option = {
  name: "--collection",
  description: "The collection id of the dataObject resource",
  args: {
    name: "COLLECTION",
    description: "String",
  },
};

const optCollection3: Fig.Option = {
  name: "--collection",
  description: "The collection id of the index resource",
  args: {
    name: "COLLECTION",
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

const optLocation: Fig.Option = {
  name: "--location",
  description: "Location of the collection",
  priority: 100,
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation2: Fig.Option = {
  name: "--location",
  description: "The location id of the collection resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description: "The location id of the dataObject resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation4: Fig.Option = {
  name: "--location",
  description: "The location id of the index resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation5: Fig.Option = {
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

const optRequestId: Fig.Option = {
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
  name: "vector-search",
  description: "Manage Vector Search data objects",
  subcommands: [
    {
      name: "collections",
      description: "Manage Collection resources",
      subcommands: [
        {
          name: "create",
          description: "Create a collection",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--data-schema",
              description:
                "JSON Schema for data. Field names must contain only alphanumeric characters, underscores, and hyphens. The schema must be compliant with [JSON Schema Draft 7](https://json-schema.org/draft-07/schema)",
              args: {
                name: "DATA_SCHEMA",
              },
            },
            {
              name: "--description",
              description: "User-specified description of the collection",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "User-specified display name of the collection",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--encryption-spec-crypto-key-name",
              description:
                "Resource name of the Cloud KMS key used to protect the resource",
              priority: 100,
              args: {
                name: "ENCRYPTION_SPEC_CRYPTO_KEY_NAME",
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
              description: "Labels as key value pairs",
              args: {
                name: "LABELS",
              },
            },
            optLocation2,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRequestId,
            optTraceToken,
            optUserOutputEnabled,
            {
              name: "--vector-schema",
              description:
                "Schema for vector fields. Only vector fields in this schema will be searchable. Field names must contain only alphanumeric characters, underscores, and hyphens",
              args: {
                name: "VECTOR_SCHEMA",
              },
            },
            optVerbosity,
          ],
          args: {
            name: "COLLECTION",
            description:
              "ID of the collection or fully qualified identifier for the collection",
          },
        },
        {
          name: "data-objects",
          description: "Manage Vector Search data objects",
          subcommands: [
            {
              name: "aggregate",
              description: "Aggregate data objects",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--aggregation-method",
                  description:
                    "The aggregation method to apply to the query. _AGGREGATION_METHOD_ must be (only one value is supported):",
                  priority: 100,
                  args: {
                    name: "AGGREGATION_METHOD",
                    description: "String",
                    suggestions: ["count"],
                  },
                },
                optBillingProject,
                {
                  name: "--collection",
                  description: "The collection to aggregate data objects from",
                  priority: 100,
                  args: {
                    name: "COLLECTION",
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
                {
                  name: "--json-filter",
                  description:
                    'A filter expression in JSON format to apply to the aggregate, e.g. ```\'{"genre": {"$eq": "sci-fi"}}\'```',
                  args: {
                    name: "JSON_FILTER",
                    description: "String",
                  },
                },
                optLocation,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "batch-create",
              description: "Create a batch of data objects",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCollection,
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
                {
                  name: "--requests",
                  description:
                    "Required, The request message specifying the resources to create. A maximum of 1000 DataObjects can be created in a batch",
                  priority: 100,
                  args: {
                    name: "REQUESTS",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "batch-delete",
              description: "Delete a batch of data objects",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCollection,
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
                {
                  name: "--requests",
                  description:
                    "Required, The request message specifying the resources to delete. A maximum of 1000 DataObjects can be deleted in a batch",
                  priority: 100,
                  args: {
                    name: "REQUESTS",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "batch-search",
              description:
                "Batch search data objects from a Vector Search collection",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--collection",
                  description:
                    "The collection to batch search data objects from",
                  priority: 100,
                  args: {
                    name: "COLLECTION",
                    description: "String",
                  },
                },
                {
                  name: "--combine-output-data-fields",
                  description:
                    "List of data fields to include in combined output",
                  args: {
                    name: "DATA_OUTPUT_FIELD",
                    description: "List",
                  },
                },
                {
                  name: "--combine-output-metadata-fields",
                  description:
                    "List of metadata fields to include in combined output",
                  args: {
                    name: "METADATA_OUTPUT_FIELD",
                    description: "List",
                  },
                },
                {
                  name: "--combine-output-vector-fields",
                  description:
                    "List of vector fields to include in combined output",
                  args: {
                    name: "VECTOR_OUTPUT_FIELD",
                    description: "List",
                  },
                },
                {
                  name: "--combine-top-k",
                  description: "Top K results to return when combining results",
                  args: {
                    name: "COMBINE_TOP_K",
                    description: "Int",
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
                optProject,
                optQuiet,
                {
                  name: "--rrf-weights",
                  description: "RRF weights for combining results",
                  args: {
                    name: "WEIGHT",
                    description: "List",
                  },
                },
                {
                  name: "--searches-from-file",
                  description:
                    'Path to a JSON file containing a list of searches. Each element in list should be a JSON object representing a Search message, e.g., `{"semanticSearch": {"searchText": "...", "searchField": "..."}}`. Keys must be camelCase as in API definition. Example file content:',
                  priority: 100,
                  args: {
                    name: "SEARCHES_FROM_FILE",
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
              name: "batch-update",
              description: "Update a batch of data objects",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCollection,
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
                {
                  name: "--requests",
                  description:
                    "Required, The request message specifying the resources to update. A maximum of 1000 DataObjects can be updated in a batch",
                  priority: 100,
                  args: {
                    name: "REQUESTS",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "create",
              description: "Create a data object",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCollection2,
                optConfiguration,
                {
                  name: "--data",
                  description: "The data of the dataObject",
                  args: {
                    name: "DATA",
                  },
                },
                {
                  name: "--etag",
                  description: "The etag of the dataObject",
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
                optLocation3,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                {
                  name: "--vectors",
                  description: "The vectors of the dataObject",
                  args: {
                    name: "VECTORS",
                  },
                },
                optVerbosity,
              ],
              args: {
                name: "DATA_OBJECT",
                description:
                  "ID of the dataObject or fully qualified identifier for the dataObject",
              },
            },
            {
              name: "delete",
              description: "Delete a data object",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCollection2,
                optConfiguration,
                {
                  name: "--etag",
                  description:
                    "The current etag of the DataObject. If an etag is provided and does not match the current etag of the DataObject, deletion will be blocked and an ABORTED error will be returned",
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
                optLocation3,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "DATA_OBJECT",
                description:
                  "ID of the dataObject or fully qualified identifier for the dataObject",
              },
            },
            {
              name: "describe",
              description: "Describe a data object",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCollection2,
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
                name: "DATA_OBJECT",
                description:
                  "ID of the dataObject or fully qualified identifier for the dataObject",
              },
            },
            {
              name: "query",
              description: "Query data objects from a Vector Search collection",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--collection",
                  description: "The collection to query data objects from",
                  priority: 100,
                  args: {
                    name: "COLLECTION",
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
                {
                  name: "--json-filter",
                  description:
                    'A filter expression in JSON format to apply to the query, e.g. ```\'{"genre": {"$eq": "sci-fi"}}\'```',
                  args: {
                    name: "JSON_FILTER",
                    description: "String",
                  },
                },
                optLimit,
                optLocation,
                optLogHttp,
                optNoUri,
                {
                  name: "--output-data-fields",
                  description:
                    "List of data fields to include in the output. Use `*` to include all data fields",
                  args: {
                    name: "DATA_OUTPUT_FIELD",
                    description: "List",
                  },
                },
                {
                  name: "--output-metadata-fields",
                  description:
                    "List of metadata fields to include in the output. Use `*` to include all metadata fields",
                  args: {
                    name: "METADATA_OUTPUT_FIELD",
                    description: "List",
                  },
                },
                {
                  name: "--output-vector-fields",
                  description:
                    "List of vector fields to include in the output. Use `*` to include all vector fields",
                  args: {
                    name: "VECTOR_OUTPUT_FIELD",
                    description: "List",
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
            {
              name: "search",
              description:
                "Search data objects from a Vector Search collection",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--collection",
                  description: "The collection to search data objects from",
                  priority: 100,
                  args: {
                    name: "COLLECTION",
                    description: "String",
                  },
                },
                optConfiguration,
                {
                  name: "--distance-metric",
                  description:
                    "The distance metric to use for the KNN search. If not specified, dot-product will be used as the default. _DISTANCE_METRIC_ must be one of:",
                  args: {
                    name: "DISTANCE_METRIC",
                    description: "String",
                    suggestions: ["cosine-distance", "dot-product"],
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
                  name: "--json-filter",
                  description:
                    'A filter expression in JSON format to apply to the search, e.g. ```\'{"genre": {"$eq": "sci-fi"}}\'```',
                  args: {
                    name: "JSON_FILTER",
                    description: "String",
                  },
                },
                optLocation,
                optLogHttp,
                {
                  name: "--no-use-knn",
                  description:
                    "If set to true, the search will use the system's default K-Nearest Neighbor (KNN) index engine. This flag is compatible only with Semantic Search and Vector Search",
                  hidden: true,
                },
                {
                  name: "--output-data-fields",
                  description:
                    "List of data fields to include in the output. Use `*` to include all data fields",
                  args: {
                    name: "DATA_OUTPUT_FIELD",
                    description: "List",
                  },
                },
                {
                  name: "--output-metadata-fields",
                  description:
                    "List of metadata fields to include in the output. Use `*` to include all metadata fields",
                  args: {
                    name: "METADATA_OUTPUT_FIELD",
                    description: "List",
                  },
                },
                {
                  name: "--output-vector-fields",
                  description:
                    "List of vector fields to include in the output. Use `*` to include all vector fields",
                  args: {
                    name: "VECTOR_OUTPUT_FIELD",
                    description: "List",
                  },
                },
                optProject,
                optQuiet,
                {
                  name: "--semantic-search-field",
                  description: "The vector field to search",
                  priority: 100,
                  args: {
                    name: "SEMANTIC_SEARCH_FIELD",
                    description: "String",
                  },
                },
                {
                  name: "--semantic-search-text",
                  description: "The query text for semantic search",
                  priority: 100,
                  args: {
                    name: "SEMANTIC_SEARCH_TEXT",
                    description: "String",
                  },
                },
                {
                  name: "--semantic-task-type",
                  description:
                    "The task type of the query embedding for semantic search. _SEMANTIC_TASK_TYPE_ must be one of:",
                  priority: 100,
                  args: {
                    name: "SEMANTIC_TASK_TYPE",
                    description: "String",
                    suggestions: [
                      "classification",
                      "clustering",
                      "code-retrieval-query",
                      "fact-verification",
                      "question-answering",
                      "retrieval-document",
                      "retrieval-query",
                      "semantic-similarity",
                    ],
                  },
                },
                {
                  name: "--text-search-data-fields",
                  description: "The data field names to search",
                  priority: 100,
                  args: {
                    name: "DATA_FIELD_NAME",
                    description: "List",
                  },
                },
                {
                  name: "--text-search-text",
                  description: "The query text for text search",
                  priority: 100,
                  args: {
                    name: "TEXT_SEARCH_TEXT",
                    description: "String",
                  },
                },
                {
                  name: "--top-k",
                  description:
                    "The number of nearest neighbors to return. Default is 10",
                  args: {
                    name: "TOP_K",
                    description: "Int",
                  },
                },
                optTraceToken,
                {
                  name: "--use-index",
                  description:
                    "Full resource name or ID of the index to use for the search. This flag is compatible only with Semantic Search and Vector Search",
                  priority: 100,
                  args: {
                    name: "INDEX",
                    description: "String",
                  },
                },
                {
                  name: "--use-knn",
                  description:
                    "If set to true, the search will use the system's default K-Nearest Neighbor (KNN) index engine. This flag is compatible only with Semantic Search and Vector Search",
                },
                optUserOutputEnabled,
                {
                  name: "--vector-from-file",
                  description:
                    "Path to a JSON file containing dense or sparse vector to search with",
                  priority: 100,
                  args: {
                    name: "VECTOR_FROM_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                {
                  name: "--vector-search-field",
                  description: "The vector field to search",
                  priority: 100,
                  args: {
                    name: "VECTOR_SEARCH_FIELD",
                    description: "String",
                  },
                },
                optVerbosity,
              ],
            },
            {
              name: "update",
              description: "Update a data object",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--clear-vectors",
                  description: "Clear vectors value and set to empty map",
                },
                optCollection2,
                optConfiguration,
                {
                  name: "--data",
                  description: "The data of the dataObject",
                  args: {
                    name: "DATA",
                  },
                },
                {
                  name: "--etag",
                  description: "The etag of the dataObject",
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
                optLocation3,
                optLogHttp,
                {
                  name: "--no-clear-vectors",
                  description: "Clear vectors value and set to empty map",
                  hidden: true,
                },
                optProject,
                optQuiet,
                {
                  name: "--remove-vectors",
                  description:
                    "Remove existing value from map vectors. Sets `remove_vectors` value",
                  args: {
                    name: "REMOVE_VECTORS",
                    description: "Dict",
                  },
                },
                optTraceToken,
                {
                  name: "--update-vectors",
                  description:
                    "Update vectors value or add key value pair. The vectors of the dataObject",
                  args: {
                    name: "UPDATE_VECTORS",
                  },
                },
                optUserOutputEnabled,
                {
                  name: "--vectors",
                  description:
                    "Set vectors to new value. The vectors of the dataObject",
                  args: {
                    name: "VECTORS",
                  },
                },
                optVerbosity,
              ],
              args: {
                name: "DATA_OBJECT",
                description:
                  "ID of the dataObject or fully qualified identifier for the dataObject",
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
          description: "Delete a collection",
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
            name: "COLLECTION",
            description:
              "ID of the collection or fully qualified identifier for the collection",
          },
        },
        {
          name: "describe",
          description: "Describe a collection",
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
            name: "COLLECTION",
            description:
              "ID of the collection or fully qualified identifier for the collection",
          },
        },
        {
          name: "export-data-objects",
          description: "Export data objects from a collection",
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
              name: "--gcs-destination-export-uri",
              description:
                "URI prefix of the Cloud Storage where to export Data Objects. The bucket is required to be in the same region as the collection",
              priority: 100,
              args: {
                name: "GCS_DESTINATION_EXPORT_URI",
                description: "String",
              },
            },
            {
              name: "--gcs-destination-format",
              description:
                "The format of the exported Data Objects. _GCS_DESTINATION_FORMAT_ must be (only one value is supported):",
              priority: 100,
              args: {
                name: "GCS_DESTINATION_FORMAT",
                suggestions: ["jsonl"],
              },
            },
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
            name: "COLLECTION",
            description:
              "ID of the collection or fully qualified identifier for the collection",
          },
        },
        {
          name: "import-data-objects",
          description: "Import data objects into a collection",
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
              name: "--gcs-import-contents-uri",
              description:
                "URI prefix of the Cloud Storage DataObjects to import",
              priority: 100,
              args: {
                name: "GCS_IMPORT_CONTENTS_URI",
                description: "String",
              },
            },
            {
              name: "--gcs-import-error-uri",
              description:
                "URI prefix of the Cloud Storage location to write any errors encountered during the import",
              priority: 100,
              args: {
                name: "GCS_IMPORT_ERROR_URI",
                description: "String",
              },
            },
            {
              name: "--gcs-import-output-uri",
              description:
                "URI prefix of the Cloud Storage location to write DataObject `IDs` and `etags` of DataObjects that were successfully imported. The service will write the successfully imported DataObjects to sharded files under this prefix. If this field is empty, no output will be written",
              args: {
                name: "GCS_IMPORT_OUTPUT_URI",
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
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "COLLECTION",
            description:
              "ID of the collection or fully qualified identifier for the collection",
          },
        },
        {
          name: "indexes",
          description: "Manage Index resources",
          subcommands: [
            {
              name: "create",
              description: "Create an index",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optCollection3,
                optConfiguration,
                {
                  name: "--dedicated-infrastructure-autoscaling-spec-max-replica-count",
                  description:
                    "The maximum number of replicas. Must be >= `min_replica_count` and <= `1000`. For the v1beta version, if not set or set to `0`, defaults to the greater of `min_replica_count` and `5`. For all other versions, if not set or set to `0`, defaults to the greater of `min_replica_count` and `2`",
                  args: {
                    name: "DEDICATED_INFRASTRUCTURE_AUTOSCALING_SPEC_MAX_REPLICA_COUNT",
                    description: "Int",
                  },
                },
                {
                  name: "--dedicated-infrastructure-autoscaling-spec-min-replica-count",
                  description:
                    "The minimum number of replicas. If not set or set to `0`, defaults to `2`. Must be >= `1` and <= `1000`",
                  args: {
                    name: "DEDICATED_INFRASTRUCTURE_AUTOSCALING_SPEC_MIN_REPLICA_COUNT",
                    description: "Int",
                  },
                },
                {
                  name: "--dedicated-infrastructure-mode",
                  description:
                    "Mode of the dedicated infrastructure. _DEDICATED_INFRASTRUCTURE_MODE_ must be one of:",
                  args: {
                    name: "DEDICATED_INFRASTRUCTURE_MODE",
                    suggestions: ["performance-optimized", "storage-optimized"],
                  },
                },
                {
                  name: "--dense-scann-feature-norm-type",
                  description:
                    "Feature norm type. _DENSE_SCANN_FEATURE_NORM_TYPE_ must be one of:",
                  args: {
                    name: "DENSE_SCANN_FEATURE_NORM_TYPE",
                    suggestions: ["none", "unit-l2-norm"],
                  },
                },
                {
                  name: "--description",
                  description: "User-specified description of the index",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--display-name",
                  description: "User-specified display name of the index",
                  args: {
                    name: "DISPLAY_NAME",
                    description: "String",
                  },
                },
                {
                  name: "--distance-metric",
                  description:
                    "Distance metric used for indexing. If not specified, will default to DOT_PRODUCT. _DISTANCE_METRIC_ must be one of:",
                  args: {
                    name: "DISTANCE_METRIC",
                    suggestions: ["cosine-distance", "dot-product"],
                  },
                },
                {
                  name: "--filter-fields",
                  description:
                    "The fields to push into the index to enable fast ANN inline filtering",
                  args: {
                    name: "FILTER_FIELDS",
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
                  name: "--index-field",
                  description: "The collection schema field to index",
                  priority: 100,
                  args: {
                    name: "INDEX_FIELD",
                    description: "String",
                  },
                },
                {
                  name: "--labels",
                  description: "Labels as key value pairs",
                  args: {
                    name: "LABELS",
                  },
                },
                optLocation4,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optRequestId,
                {
                  name: "--store-fields",
                  description:
                    "The fields to push into the index to enable inline data retrieval",
                  args: {
                    name: "STORE_FIELDS",
                    description: "List",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "INDEX",
                description:
                  "ID of the index or fully qualified identifier for the index",
              },
            },
            {
              name: "delete",
              description: "Delete an index",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optCollection3,
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
                name: "INDEX",
                description:
                  "ID of the index or fully qualified identifier for the index",
              },
            },
            {
              name: "describe",
              description: "Describe an index",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCollection3,
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
                name: "INDEX",
                description:
                  "ID of the index or fully qualified identifier for the index",
              },
            },
            {
              name: "list",
              description: "List indexes",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCollection,
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
          name: "list",
          description: "List collections",
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
            {
              name: "--location",
              description:
                "ID of the location or fully qualified identifier for the location",
              priority: 100,
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
        {
          name: "update",
          description: "Update a collection",
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
              name: "--clear-vector-schema",
              description: "Clear vector_schema value and set to empty map",
            },
            optConfiguration,
            {
              name: "--data-schema",
              description:
                "JSON Schema for data. Field names must contain only alphanumeric characters, underscores, and hyphens. The schema must be compliant with [JSON Schema Draft 7](https://json-schema.org/draft-07/schema)",
              args: {
                name: "DATA_SCHEMA",
              },
            },
            {
              name: "--description",
              description: "User-specified description of the collection",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "User-specified display name of the collection",
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
              description: "Set labels to new value. Labels as key value pairs",
              args: {
                name: "LABELS",
              },
            },
            optLocation2,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-clear-labels",
              description: "Clear labels value and set to empty map",
              hidden: true,
            },
            {
              name: "--no-clear-vector-schema",
              description: "Clear vector_schema value and set to empty map",
              hidden: true,
            },
            optProject,
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
            {
              name: "--remove-vector-schema",
              description:
                "Remove existing value from map vector_schema. Sets `remove_vector_schema` value",
              args: {
                name: "REMOVE_VECTOR_SCHEMA",
                description: "Dict",
              },
            },
            optRequestId,
            optTraceToken,
            {
              name: "--update-labels",
              description:
                "Update labels value or add key value pair. Labels as key value pairs",
              args: {
                name: "UPDATE_LABELS",
              },
            },
            {
              name: "--update-vector-schema",
              description:
                "Update vector_schema value or add key value pair. Schema for vector fields. Only vector fields in this schema will be searchable. Field names must contain only alphanumeric characters, underscores, and hyphens",
              args: {
                name: "UPDATE_VECTOR_SCHEMA",
              },
            },
            optUserOutputEnabled,
            {
              name: "--vector-schema",
              description:
                "Set vector_schema to new value. Schema for vector fields. Only vector fields in this schema will be searchable. Field names must contain only alphanumeric characters, underscores, and hyphens",
              args: {
                name: "VECTOR_SCHEMA",
              },
            },
            optVerbosity,
          ],
          args: {
            name: "COLLECTION",
            description:
              "ID of the collection or fully qualified identifier for the collection",
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
      description: "Manage Operation resources",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel an operation",
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "delete",
          description: "Delete an operation",
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "describe",
          description: "Describe an operation",
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
            {
              name: "--location",
              description:
                "ID of the location or fully qualified identifier for the location",
              priority: 100,
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
        {
          name: "wait",
          description: "Wait for an operation to complete",
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
