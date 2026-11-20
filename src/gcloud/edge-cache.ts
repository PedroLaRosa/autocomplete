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

const optDescription: Fig.Option = {
  name: "--description",
  description: "Human-readable description of the resource",
  args: {
    name: "DESCRIPTION",
    description: "String",
  },
};

const optDestination: Fig.Option = {
  name: "--destination",
  description:
    "Path to a YAML file where the configuration will be exported. The exported data will not contain any output-only fields. Alternatively, you may omit this flag to write to standard output. For a schema describing the export/import format, see $CLOUDSDKROOT/lib/googlecloudsdk/schemas/",
  args: {
    name: "DESTINATION",
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
  description: "List of KEY=VALUE labels to attach to this resource",
  args: {
    name: "KEY=VALUE",
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
  description: "The location Id",
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

const optSortBy: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The default order is ascending. Prefix a field with ``~'' for descending order on that field. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: {
    name: "FIELD",
    description: "List",
  },
};

const optSource: Fig.Option = {
  name: "--source",
  description:
    "Path to a YAML file containing the configuration export data. The YAML file must not contain any output-only fields. Alternatively, you may omit this flag to read from standard input. For a schema describing the export/import format, see: $CLOUDSDKROOT/lib/googlecloudsdk/schemas/",
  args: {
    name: "SOURCE",
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
  name: "edge-cache",
  description: "Manage Media CDN resources",
  subcommands: [
    {
      name: "keysets",
      description: "Interact with and manage EdgeCacheKeyset resources",
      subcommands: [
        {
          name: "create",
          description: "Create an EdgeCacheKeyset resource",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optDescription,
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
            optNoAsync,
            optProject,
            {
              name: "--public-key",
              description:
                "Set of public keys to use for validating signed requests, when associated with a route. This flag can be repeated to create a Keyset with multiple public keys",
              isRepeatable: true,
              args: {
                name: "PUBLIC_KEY",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            {
              name: "--validation-shared-key",
              description:
                "An ordered list of shared keys to use for validating signed requests",
              args: {
                name: "VALIDATION_SHARED_KEY",
              },
            },
            optVerbosity,
          ],
          args: {
            name: "KEYSET",
            description:
              "ID of the keyset or fully qualified identifier for the keyset",
          },
        },
        {
          name: "delete",
          description: "Delete an EdgeCacheKeyset resource",
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
            name: "KEYSET",
            description:
              "ID of the keyset or fully qualified identifier for the keyset",
          },
        },
        {
          name: "describe",
          description: "Show details about an EdgeCacheKeyset resource",
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
            name: "KEYSET",
            description:
              "ID of the keyset or fully qualified identifier for the keyset",
          },
        },
        {
          name: "export",
          description: "Export an EdgeCacheKeyset resource",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDestination,
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
            name: "KEYSET",
            description:
              "ID of the keyset or fully qualified identifier for the keyset",
          },
        },
        {
          name: "import",
          description: "Import an EdgeCacheKeyset resource",
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
            optSource,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "KEYSET",
            description:
              "ID of the keyset or fully qualified identifier for the keyset",
          },
        },
        {
          name: "list",
          description: "List EdgeCacheKeyset resources",
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
          name: "update",
          description: "Update an EdgeCacheKeyset resource",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optDescription,
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
            optNoAsync,
            optProject,
            {
              name: "--public-key",
              description:
                "Set of public keys to use for validating signed requests, when associated with a route. This flag can be repeated to create a Keyset with multiple public keys",
              isRepeatable: true,
              args: {
                name: "PUBLIC_KEY",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            {
              name: "--validation-shared-key",
              description:
                "An ordered list of shared keys to use for validating signed requests",
              args: {
                name: "VALIDATION_SHARED_KEY",
              },
            },
            optVerbosity,
          ],
          args: {
            name: "KEYSET",
            description:
              "ID of the keyset or fully qualified identifier for the keyset",
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
      description: "Manage EdgeCache operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a long-running operation",
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
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "list",
          description: "List long-running operations",
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
      name: "origins",
      description: "Interact with and manage EdgeCacheOrigin resources",
      subcommands: [
        {
          name: "create",
          description: "Create an EdgeCacheOrigin resource",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optDescription,
            {
              name: "--failover-origin",
              description:
                "Origin resource to try when the current origin cannot be reached. After maxAttempts is reached, the configured failoverOrigin will be used to fulfil the request",
              args: {
                name: "FAILOVER_ORIGIN",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--flex-shielding",
              description:
                "Whenever possible, content will be fetched from origin and cached in or near the specified region. Best effort",
              args: {
                name: "FLEX_SHIELDING",
                description: "String",
                suggestions: ["", "africa_south1", "me_central1", "us_east5"],
              },
            },
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
              name: "--max-attempts",
              description:
                "Maximum number of attempts to cache fill from this origin. Another attempt is made when a cache fill fails with one of the retry_conditions",
              args: {
                name: "MAX_ATTEMPTS",
                description: "Int",
              },
            },
            optNoAsync,
            {
              name: "--origin-address",
              description:
                "A fully qualified domain name (FQDN) or IP address reachable over the public Internet, or the address of a Google Cloud Storage bucket",
              priority: 100,
              args: {
                name: "ORIGIN_ADDRESS",
                description: "String",
              },
            },
            {
              name: "--port",
              description:
                "Port to connect to the origin on. Defaults to port 443 for HTTP2 and HTTPS protocols, and port 80 for HTTP",
              args: {
                name: "PORT",
                description: "Int",
              },
            },
            optProject,
            {
              name: "--protocol",
              description:
                "Protocol to use to connect to the configured origin. Defaults to HTTP2, and it is strongly recommended that users use HTTP2 for both security & performance",
              args: {
                name: "PROTOCOL",
                suggestions: ["http", "http2", "https"],
              },
            },
            optQuiet,
            {
              name: "--response-timeout",
              description:
                "Maximum duration to wait for data to arrive when reading from the HTTP connection/stream",
              args: {
                name: "RESPONSE_TIMEOUT",
              },
            },
            {
              name: "--retry-conditions",
              description:
                "Specifies one or more retry conditions for the configured origin",
              args: {
                name: "RETRY_CONDITIONS",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ORIGIN",
            description:
              "ID of the origin or fully qualified identifier for the origin",
          },
        },
        {
          name: "delete",
          description: "Delete an EdgeCacheOrigin resource",
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
            name: "ORIGIN",
            description:
              "ID of the origin or fully qualified identifier for the origin",
          },
        },
        {
          name: "describe",
          description: "Show details about an EdgeCacheOrigin resource",
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
            name: "ORIGIN",
            description:
              "ID of the origin or fully qualified identifier for the origin",
          },
        },
        {
          name: "export",
          description: "Export an EdgeCacheOrigin resource",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDestination,
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
            name: "ORIGIN",
            description:
              "ID of the origin or fully qualified identifier for the origin",
          },
        },
        {
          name: "import",
          description: "Import an EdgeCacheOrigin resource",
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
            optSource,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ORIGIN",
            description:
              "ID of the origin or fully qualified identifier for the origin",
          },
        },
        {
          name: "list",
          description: "List all EdgeCacheOrigin resources in a project",
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
          name: "update",
          description: "Update an EdgeCacheOrigin resource",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optDescription,
            {
              name: "--failover-origin",
              description:
                "Origin resource to try when the current origin cannot be reached. After maxAttempts is reached, the configured failoverOrigin will be used to fulfil the request",
              args: {
                name: "FAILOVER_ORIGIN",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--flex-shielding",
              description:
                "Whenever possible, content will be fetched from origin and cached in or near the specified region. Best effort",
              args: {
                name: "FLEX_SHIELDING",
                description: "String",
                suggestions: ["", "africa_south1", "me_central1", "us_east5"],
              },
            },
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
              name: "--max-attempts",
              description:
                "Maximum number of attempts to cache fill from this origin. Another attempt is made when a cache fill fails with one of the retry_conditions",
              args: {
                name: "MAX_ATTEMPTS",
                description: "Int",
              },
            },
            optNoAsync,
            {
              name: "--origin-address",
              description:
                "A fully qualified domain name (FQDN) or IP address reachable over the public Internet, or the address of a Google Cloud Storage bucket",
              args: {
                name: "ORIGIN_ADDRESS",
                description: "String",
              },
            },
            {
              name: "--port",
              description:
                "Port to connect to the origin on. Defaults to port 443 for HTTP2 and HTTPS protocols, and port 80 for HTTP",
              args: {
                name: "PORT",
                description: "Int",
              },
            },
            optProject,
            {
              name: "--protocol",
              description:
                "Protocol to use to connect to the configured origin. Defaults to HTTP2, and it is strongly recommended that users use HTTP2 for both security & performance",
              args: {
                name: "PROTOCOL",
                suggestions: ["http", "http2", "https"],
              },
            },
            optQuiet,
            {
              name: "--response-timeout",
              description:
                "Maximum duration to wait for data to arrive when reading from the HTTP connection/stream",
              args: {
                name: "RESPONSE_TIMEOUT",
              },
            },
            {
              name: "--retry-conditions",
              description:
                "Specifies one or more retry conditions for the configured origin",
              args: {
                name: "RETRY_CONDITIONS",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ORIGIN",
            description:
              "ID of the origin or fully qualified identifier for the origin",
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
      name: "services",
      description: "Interact with and manage EdgeCacheService resources",
      subcommands: [
        {
          name: "delete",
          description: "Delete an EdgeCacheService resource",
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
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
          },
        },
        {
          name: "describe",
          description: "Show details about an EdgeCacheService resource",
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
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
          },
        },
        {
          name: "export",
          description: "Export an EdgeCacheService resource",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDestination,
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
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
          },
        },
        {
          name: "import",
          description: "Import an EdgeCacheService resource",
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
            optSource,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
          },
        },
        {
          name: "invalidate-cache",
          description: "Invalidate the cache for an EdgeCacheService resource",
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
            {
              name: "--host",
              description:
                'The hostname to invalidate against. You can specify an exact or wildcard host - e.g. "video.example.com" or "*.example.com" - based on host component',
              args: {
                name: "HOST",
                description: "String",
              },
            },
            optImpersonateServiceAccount,
            optLocation,
            optLogHttp,
            {
              name: "--path",
              description:
                'The path to invalidate against. You can specify an exact or wildcard host - e.g. "/videos/hls/139123.mp4" or "/manifests/*" - based on path component',
              args: {
                name: "PATH",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--tags",
              description:
                "A list of cache tags used to identify cached objects",
              args: {
                name: "TAGS",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
          },
        },
        {
          name: "list",
          description: "List all EdgeCacheService resources in a project",
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
          name: "update",
          description: "Update an EdgeCacheService resource",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optDescription,
            {
              name: "--edge-security-policy",
              description:
                "Resource URL that points at the Cloud Armor edge security policy that is applied on each request against the EdgeCacheService",
              args: {
                name: "EDGE_SECURITY_POLICY",
                description: "String",
              },
            },
            {
              name: "--edge-ssl-certificate",
              description:
                "URLs to sslCertificate resources that are used to authenticate connections between users and the EdgeCacheService",
              args: {
                name: "EDGE_SSL_CERTIFICATE",
                description: "List",
              },
            },
            {
              name: "--enable-logging",
              description:
                "Specifies whether to enable logging for traffic served by this service",
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
              name: "--logging-sample-rate",
              description:
                "Configures the sampling rate of requests, where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported. The default value is 1.0, and the value of the field must be in [0, 1]",
              args: {
                name: "LOGGING_SAMPLE_RATE",
                description: "Float",
              },
            },
            optNoAsync,
            {
              name: "--no-enable-logging",
              description:
                "Specifies whether to enable logging for traffic served by this service",
              hidden: true,
            },
            {
              name: "--no-require-tls",
              description:
                "Require TLS (HTTPS) for all clients connecting to this service",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--require-tls",
              description:
                "Require TLS (HTTPS) for all clients connecting to this service",
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
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
