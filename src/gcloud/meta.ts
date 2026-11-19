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

const optApi: Fig.Option = {
  name: "--api",
  description: "The name of the API to get the attributes for",
  priority: 100,
  args: {
    name: "API",
    description: "String",
  },
};

const optApiVersion: Fig.Option = {
  name: "--api-version",
  description:
    "The version of the given API to use. If not provided, the default version of the API will be used",
  args: {
    name: "API_VERSION",
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

const optCache: Fig.Option = {
  name: "--cache",
  description:
    'The cache name to operate on. May be prefixed by "resource://" for resource cache names. If only the prefix is specified then the default cache name for that prefix is used',
  args: {
    name: "CACHE_NAME",
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
  name: "meta",
  description: "Cloud meta introspection commands",
  hidden: true,
  subcommands: [
    {
      name: "apis",
      description: "Inspect the APIs registered in gcloud",
      hidden: true,
      subcommands: [
        {
          name: "collections",
          description: "Inspect the API collections registered in gcloud",
          hidden: true,
          subcommands: [
            {
              name: "describe",
              description: "Describe the details of a collection for an API",
              hidden: true,
              options: [
                optAccessTokenFile,
                optAccount,
                optApiVersion,
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
                name: "COLLECTION",
                description: "The name of the collection to get the details of",
              },
            },
            {
              name: "lint",
              description:
                "Show which collections have non-compliant list API methods",
              hidden: true,
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--api",
                  description: "The name of the API to get the collections for",
                  args: {
                    name: "API",
                    description: "String",
                  },
                },
                optApiVersion,
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
                optProject,
                optQuiet,
                optSortBy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "list",
              description: "List the resource collections for an API",
              hidden: true,
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--api",
                  description: "The name of the API to get the collections for",
                  args: {
                    name: "API",
                    description: "String",
                  },
                },
                optApiVersion,
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
          name: "describe",
          description: "Describe the details of an API registered in gcloud",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optApiVersion,
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
            name: "API_NAME",
            description: "The name of the API to show the details of",
          },
        },
        {
          name: "discovery",
          description:
            "Inspect the Google Cloud Platform APIs through the discovery service",
          hidden: true,
          subcommands: [
            {
              name: "describe",
              description:
                "Describe the details of an API in discovery service",
              hidden: true,
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
                name: "API",
                description: "The api_name/api_version to show the details of",
              },
            },
            {
              name: "list",
              description: "List the APIs available via discovery service",
              hidden: true,
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
          description: "List the APIs registered in gcloud",
          hidden: true,
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
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "messages",
          description: "Inspect the API messages in an API",
          hidden: true,
          subcommands: [
            {
              name: "describe",
              description: "Describe the details of a proto message in an API",
              hidden: true,
              options: [
                optAccessTokenFile,
                optAccount,
                optApi,
                optApiVersion,
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
                name: "MESSAGE",
                description: "The name of the message you want to describe",
              },
            },
            {
              name: "generate-export-schemas",
              description:
                "Generate YAML export schemas for a message in a given API",
              hidden: true,
              options: [
                optAccessTokenFile,
                optAccount,
                optApi,
                optApiVersion,
                optBillingProject,
                optConfiguration,
                {
                  name: "--directory",
                  description:
                    "The path name of the directory to create the YAML export schema files in. If not specified then the files are created in the current directory",
                  args: {
                    name: "DIRECTORY",
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
                name: "MESSAGE",
                description:
                  "The name of the message to generate the YAML export schemas for",
              },
            },
            {
              name: "list",
              description: "List the proto messages for an API",
              hidden: true,
              options: [
                optAccessTokenFile,
                optAccount,
                optApi,
                optApiVersion,
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
          name: "methods",
          description:
            "Inspect the methods for an API collection registered in gcloud",
          hidden: true,
          subcommands: [
            {
              name: "call",
              description: "Calls an API method with specific parameters",
              hidden: true,
              options: [
                optAccessTokenFile,
                optAccount,
                optApiVersion,
                optBillingProject,
                {
                  name: "--collection",
                  description:
                    "The name of the collection to specify the method for",
                  priority: 100,
                  args: {
                    name: "COLLECTION",
                    description: "String",
                  },
                },
                optConfiguration,
                {
                  name: "--enforce-collection",
                  description:
                    "Fail unless resource belongs to specified collection. This is applicable only if method being called is GET or DELETE and resource identifier is URL. Enabled by default, use *--no-enforce-collection* to disable",
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
                  name: "--no-enforce-collection",
                  description:
                    "Fail unless resource belongs to specified collection. This is applicable only if method being called is GET or DELETE and resource identifier is URL",
                  hidden: true,
                },
                {
                  name: "--no-raw",
                  description:
                    "For list commands, the response is flattened to return the items as a list rather than returning the list response verbatim. Use this flag to disable this behavior and return the raw response",
                  hidden: true,
                },
                optProject,
                optQuiet,
                {
                  name: "--raw",
                  description:
                    "For list commands, the response is flattened to return the items as a list rather than returning the list response verbatim. Use this flag to disable this behavior and return the raw response",
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "METHOD",
                description: "The name of the API method to invoke",
                isVariadic: true,
              },
            },
            {
              name: "describe",
              description: "Describe the details of a collection for an API",
              hidden: true,
              options: [
                optAccessTokenFile,
                optAccount,
                optApiVersion,
                optBillingProject,
                {
                  name: "--collection",
                  description:
                    "The name of the collection to specify the method for",
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
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "METHOD",
                description: "The name of the method to get the details of",
              },
            },
            {
              name: "list",
              description:
                "List the methods of a resource collection for an API",
              hidden: true,
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--api",
                  description:
                    "The name of the API to get the methods for. If `--api-version` is also supplied, then returns methods from specified version, otherwise returns methods from all versions of this API",
                  args: {
                    name: "API",
                    description: "String",
                  },
                },
                optApiVersion,
                optBillingProject,
                {
                  name: "--collection",
                  description:
                    "The name of the collection for which to list methods. If left blank, returns methods from all collections. Valid example: `compute.instances`",
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
                optLimit,
                optLogHttp,
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
          name: "regen",
          description: "Regenerate given API(s) in gcloud",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--api-discovery-doc",
              description:
                "Path to json file describing the api. If not specified, an existing discovery doc will be used",
              args: {
                name: "API_DISCOVERY_DOC",
                description: "String",
              },
            },
            {
              name: "--base-dir",
              description:
                "Directory where generated code will be written. By default googlecloudsdk/generated_clients/apis",
              args: {
                name: "BASE_DIR",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--config",
              description:
                "Regeneration config yaml filename. If not specified canonical config will be used",
              args: {
                name: "CONFIG",
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
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "API",
            description:
              "The APIs to regenerate in api_name/api_version format. These can be filename glob expressions to regenerate multiple apis. For example */* to regegenerate all apis and versions, or */*beta* to only regenerate existing beta apis. Note that if discovery doc is supplied this cannot contain any wildcards",
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
      name: "cache",
      description: "Cloud SDK persistent cache commands",
      hidden: true,
      subcommands: [
        {
          name: "completers",
          description: "Cloud SDK resource completer cache commands",
          hidden: true,
          subcommands: [
            {
              name: "list",
              description:
                "List all Cloud SDK command argument completer objects",
              hidden: true,
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
              name: "run",
              description: "Cloud SDK completer module tester",
              hidden: true,
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--attribute",
                  description:
                    "The name of the resource attribute for a resource argument auto-generated completer",
                  args: {
                    name: "ATTRIBUTE",
                    description: "String",
                  },
                },
                optBillingProject,
                optCache,
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
                  name: "--kwargs",
                  description:
                    "Keyword arg dict passed to the completer constructor. For example, use this to set the resource collection and list command for `DeprecatedListCommandCompleter`:",
                  args: {
                    name: "NAME=VALUE",
                    description: "Dict",
                  },
                },
                optLogHttp,
                {
                  name: "--no-stack-trace",
                  description:
                    "Enable all exception stack traces, including Cloud SDK core exceptions",
                  hidden: true,
                },
                optProject,
                {
                  name: "--qualify",
                  description:
                    "A list of resource parameter names that must always be qualified. This is a manual setting for testing. The CLI sets this automatically",
                  args: {
                    name: "NAME",
                    description: "List",
                  },
                },
                optQuiet,
                {
                  name: "--resource-presentation-kwargs",
                  description:
                    "Dict of kwargs to be passed to the presentation spec for the resource argument for which a completer is being tested, such as name, prefixes, plural, flag name overrides (format as a list of semicolon-separated key:value pairs). Prefixes is False by default. Name is the resource spec name by default",
                  args: {
                    name: "RESOURCE_PRESENTATION_KWARGS",
                    description: "Dict",
                  },
                },
                {
                  name: "--resource-spec-path",
                  description:
                    "The resource spec path for a resource argument auto-generated completer",
                  args: {
                    name: "RESOURCE_SPEC_PATH",
                    description: "String",
                  },
                },
                {
                  name: "--stack-trace",
                  description:
                    "Enable all exception stack traces, including Cloud SDK core exceptions. Enabled by default, use *--no-stack-trace* to disable",
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "MODULE_PATH",
                description:
                  "The completer module path. Run $ gcloud meta completers list` to list the module paths of the available completers. A completer module may declare additional flags. Specify `--help` after _MODULE_PATH_ for details on the module specific flags",
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
          name: "delete",
          description: "Delete a persistent cache or tables in the cache",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCache,
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
            name: "TABLES",
            description:
              "The table names or name patterns to delete, where `?` matches any character and ```*``` matches any string of zero or more characters. If omitted then the entired cache is deleted",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "list",
          description:
            "List the tables or table contents in a persistent cache",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCache,
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
          args: {
            name: "TABLES",
            description:
              "The table names or name patterns to list, where `?` matches any character and ```*``` matches any string of zero or more characters. If omitted then a table of all tables is displayed",
            isVariadic: true,
            isOptional: true,
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
      name: "check-import",
      description: "Check if modules are importable",
      hidden: true,
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
        name: "MODULES",
        description: "The list of modules to check, separated with spaces",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "cli-trees",
      description: "CLI trees manager",
      hidden: true,
      subcommands: [
        {
          name: "list",
          description: "List the installed gcloud interactive CLI trees",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--directory",
              description:
                "Insert this directory into the list of directories to search",
              args: {
                name: "DIRECTORY",
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
        },
        {
          name: "update",
          description:
            "Updates gcloud CLI command trees in the installation directory",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--commands",
              description: "Update only the commands in this list",
              args: {
                name: "COMMAND",
                description: "List",
              },
            },
            optConfiguration,
            {
              name: "--directory",
              description:
                "Update this directory instead of the default installation directory",
              args: {
                name: "DIRECTORY",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--force",
              description:
                "Force existing CLI trees to be out of date. This causes them to be regenerated",
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
                "Force existing CLI trees to be out of date. This causes them to be regenerated",
              hidden: true,
            },
            {
              name: "--no-skip-completions",
              description: "Skip updating the static completion CLI tree",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--skip-completions",
              description: "Skip updating the static completion CLI tree",
            },
            {
              name: "--tarball",
              description:
                "For packaging CLI trees. --commands specifies one command that is a relative path in this tarball. The tarball is extracted to a temporary directory and the command path is adjusted to point to the temporary directory",
              args: {
                name: "TARBALL",
                description: "String",
              },
            },
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
      name: "daemon",
      description:
        "(DEBUG MODE) Precomputes gcloud CLI and runs a single-request server",
      hidden: true,
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
      name: "debug",
      description:
        "Run an interactive debug console with the Cloud SDK libraries loaded",
      hidden: true,
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
          name: "--mode",
          description:
            "The debug console mode to run in. _MODE_ must be one of: *ipdb*, *pdb*, *pudb*, *python*",
          args: {
            name: "MODE",
            description: "String",
            suggestions: ["ipdb", "pdb", "pudb", "python"],
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
      name: "generate-config-commands",
      description:
        "Generate declarative config commands with surface specs and tests",
      hidden: true,
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        {
          name: "--collections",
          description: "List of apitools collections to generate commands for",
          args: {
            name: "COLLECTION",
            description: "List",
          },
        },
        optConfiguration,
        {
          name: "--enable-overwrites",
          description:
            "When enabled, allows overwriting of existing commands, surface specs, and test files",
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
          name: "--no-enable-overwrites",
          description:
            "When enabled, allows overwriting of existing commands, surface specs, and test files",
          hidden: true,
        },
        {
          name: "--output-root",
          description:
            "Root of the directory within which to generate config config export commands",
          priority: 100,
          args: {
            name: "DIRECTORY",
            description: "String",
          },
        },
        optProject,
        optQuiet,
        {
          name: "--release-tracks",
          description:
            "List of release tracks to generate commands for. E.g. `ALPHA,BETA,GA`",
          args: {
            name: "TRACK",
            description: "List",
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "generate-help-docs",
      description: "Generate and/or update help document directories",
      hidden: true,
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        {
          name: "--devsite-dir",
          description:
            "The directory where the generated DevSite reference document subtree will be written. If not specified then DevSite documents will not be generated",
          args: {
            name: "DIRECTORY",
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
          name: "--help-text-dir",
          description:
            "The directory where the generated help text reference document subtree will be written. If not specified then help text documents will not be generated. The --hidden flag is implied for --help-text-dir",
          args: {
            name: "DIRECTORY",
            description: "String",
          },
        },
        {
          name: "--hidden",
          description: "Include documents for hidden commands and groups",
        },
        {
          name: "--html-dir",
          description:
            "The directory where the standalone manpage HTML files will be generated. index.html contains manpage tree navigation in the left pane. The active command branch and its immediate children are visible and clickable. Hover to navigate the tree. Run `python -m http.server 8888 &` in DIRECTORY and point your browser at [](http://localhost:8888) to view the manpage tree. If not specified then the HTML manpage site will not be generated",
          args: {
            name: "DIRECTORY",
            description: "String",
          },
        },
        optImpersonateServiceAccount,
        {
          name: "--linter-dir",
          description:
            "The directory where the generated documentation linter errors for the help text reference document subtree will be written. If not specified then documentation linter documents will not be generated",
          args: {
            name: "DIRECTORY",
            description: "String",
          },
        },
        optLogHttp,
        {
          name: "--manpage-dir",
          description:
            "The directory where the generated manpage document subtree will be written. The manpage hierarchy is flat with all command documents in the manN/ subdirectory. If not specified then manpage documents will not be generated",
          args: {
            name: "DIRECTORY",
            description: "String",
          },
        },
        {
          name: "--no-hidden",
          description: "Include documents for hidden commands and groups",
          hidden: true,
        },
        {
          name: "--no-test",
          description:
            "Show but do not apply --update actions. Exit with non-zero exit status if any help document file must be updated",
          hidden: true,
        },
        {
          name: "--no-update",
          description:
            "Update destination directories to match the current CLI. Documents for commands not present in the current CLI will be deleted. Use this flag to update the help text golden files after the help_text_test test fails",
          hidden: true,
        },
        optProject,
        optQuiet,
        {
          name: "--test",
          description:
            "Show but do not apply --update actions. Exit with non-zero exit status if any help document file must be updated",
        },
        optTraceToken,
        {
          name: "--update",
          description:
            "Update destination directories to match the current CLI. Documents for commands not present in the current CLI will be deleted. Use this flag to update the help text golden files after the help_text_test test fails",
        },
        {
          name: "--update-help-text-dir",
          description:
            "Deprecated. Use --update --help-text-dir=DIRECTORY instead",
          hidden: true,
          deprecated: true,
          args: {
            name: "DIRECTORY",
            description: "String",
          },
        },
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "COMMAND/GROUP",
        description:
          "Restrict document generation to these dotted command paths. For example:",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "lint",
      description: "Validate gcloud flags according to Cloud SDK CLI Style",
      hidden: true,
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
        name: "CHECKS",
        description:
          "A list of checks to apply to gcloud groups and commands. If omitted will run all available checks. Available Checks: BadLists Verifies all flags implement lists properly. AllowlistedNameCheck Verifies that every command is allowlisted",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "lint-gcloud-commands",
      description: "Generate YAML file to implement given command",
      hidden: true,
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        {
          name: "--command-string",
          description: "Gcloud command to statically validate",
          args: {
            name: "COMMAND_STRING",
            description: "String",
          },
        },
        {
          name: "--commands-file",
          description:
            "JSON file containing list of gcloud commands to validate",
          args: {
            name: "COMMANDS_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        {
          name: "--commands-text-file",
          description:
            "Raw text containing gcloud command(s) to validate. For example, the commands could be in fenced code blocks or indented code blocks",
          args: {
            name: "COMMANDS_TEXT_FILE",
            description: "String",
            template: "filepaths",
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
          name: "--no-serialize",
          description:
            "Output results in a dictionary serialized by reference id",
          hidden: true,
        },
        optProject,
        optQuiet,
        {
          name: "--serialize",
          description:
            "Output results in a dictionary serialized by reference id",
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "list-commands",
      description: "List all possible gcloud commands excluding flags",
      hidden: true,
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        {
          name: "--completions",
          description:
            "Write the static TAB completion data on the standard output. The data is a shell script containing variable definitons of the form ```_SC_{COMMAND.PATH}``` for each dotted command path",
        },
        optConfiguration,
        {
          name: "--flag-values",
          description:
            "Include the non-global flags and flag values/types for each command/group. Flags with fixed choice values will be listed as --flag=choice1,..., and flags with typed values will be listed as --flag=:type:",
        },
        {
          name: "--flags",
          description: "Include the non-global flags for each command/group",
        },
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        {
          name: "--hidden",
          description: "Include hidden commands and groups",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        {
          name: "--no-completions",
          description:
            "Write the static TAB completion data on the standard output. The data is a shell script containing variable definitons of the form ```_SC_{COMMAND.PATH}``` for each dotted command path",
          hidden: true,
        },
        {
          name: "--no-flag-values",
          description:
            "Include the non-global flags and flag values/types for each command/group. Flags with fixed choice values will be listed as --flag=choice1,..., and flags with typed values will be listed as --flag=:type:",
          hidden: true,
        },
        {
          name: "--no-flags",
          description: "Include the non-global flags for each command/group",
          hidden: true,
        },
        {
          name: "--no-hidden",
          description: "Include hidden commands and groups",
          hidden: true,
        },
        {
          name: "--no-universe-compatible-commands",
          description: "Exclusively show universe compatible commands",
          hidden: true,
        },
        optProject,
        optQuiet,
        optTraceToken,
        {
          name: "--universe-compatible-commands",
          description: "Exclusively show universe compatible commands",
          hidden: true,
        },
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "COMMAND/GROUP",
        description:
          "Restrict the listing to these dotted command paths. For example: gcloud.alpha gcloud.beta.test",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "list-files-for-upload",
      description: "List files for upload",
      hidden: true,
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
        name: "DIRECTORY",
        description:
          "The directory in which to show what files would be uploaded",
        isOptional: true,
      },
    },
    {
      name: "list-from-json",
      description: "Read JSON data and list it on the standard output",
      hidden: true,
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
        name: "JSON-FILE",
        description:
          "A file containing JSON data for a single resource or a list of resources of the same type. If omitted then the standard input is read",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "list-gcloud",
      description:
        "List the gcloud CLI command tree with flag, positional and help details",
      hidden: true,
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        {
          name: "--branch",
          description:
            'The branch of the CLI subtree to generate as a dotted command path. Mainly used to generate test data. For example, for the `gcloud compute instances` branch use "compute.instances"',
          args: {
            name: "COMMAND_PATH",
            description: "String",
          },
        },
        {
          name: "--completions",
          description:
            "List the static completion CLI tree. This is a stripped down variant of the CLI tree that only contains the subcommand and flag name dictionaries. The tree is written as a Python source file (~1MiB) that loads fast (~30ms) as a .pyc file",
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
          name: "--no-completions",
          description:
            "List the static completion CLI tree. This is a stripped down variant of the CLI tree that only contains the subcommand and flag name dictionaries. The tree is written as a Python source file (~1MiB) that loads fast (~30ms) as a .pyc file",
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
      name: "render-markdown",
      description:
        "Uses gcloud's markdown renderer to render the given markdown file",
      hidden: true,
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
          name: "--style",
          description:
            "The renderer output format. _STYLE_ must be one of: *devsite*, *html*, *linter*, *man*, *markdown*, *text*",
          args: {
            name: "STYLE",
            description: "String",
            suggestions: [
              "devsite",
              "html",
              "linter",
              "man",
              "markdown",
              "text",
            ],
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "MD_FILE",
        description:
          "The path to a file containing markdown to render, or `-` to read from stdin",
        template: "filepaths",
      },
    },
    {
      name: "resource-maps",
      description: "Command group for resource map related commands",
      hidden: true,
      subcommands: [
        {
          name: "update-resource-map",
          description: "Command used for updating resource maps",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--all",
              description: "Update all resource maps",
            },
            {
              name: "--base",
              description: "Update the base resource map",
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--declarative",
              description: "Update the declarative resource map",
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
              name: "--no-all",
              description: "Update all resource maps",
              hidden: true,
            },
            {
              name: "--no-base",
              description: "Update the base resource map",
              hidden: true,
            },
            {
              name: "--no-declarative",
              description: "Update the declarative resource map",
              hidden: true,
            },
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
      name: "resources",
      description: "Cloud SDK resource parser test commands",
      hidden: true,
      subcommands: [
        {
          name: "generate",
          description: "Cloud SDK resource test URI generator",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--api-version",
              description:
                "The resource collection API version. The collection default is used if not specified",
              args: {
                name: "VERSION",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--collection",
              description:
                "The resource collection name of the resource to parse",
              priority: 100,
              args: {
                name: "NAME",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--count",
              description: "The number of test resource URIs to generate",
              args: {
                name: "COUNT",
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
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "parse",
          description: "Cloud SDK resource parser module tester",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--api-version",
              description:
                "The resource collection API version. The collection default is used if not specified",
              args: {
                name: "VERSION",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--collection",
              description:
                "The resource collection name of the resource to parse",
              args: {
                name: "NAME",
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
            {
              name: "--no-stack-trace",
              description:
                "Enable all exception stack traces, including Cloud SDK core exceptions",
              hidden: true,
            },
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            {
              name: "--stack-trace",
              description:
                "Enable all exception stack traces, including Cloud SDK core exceptions. Enabled by default, use *--no-stack-trace* to disable",
            },
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RESOURCES_TO_PARSE",
            description:
              "The list of resource URLs to parse. If not specified then *{command}* enters an interactive loop, prompting for URLs to parse",
            isVariadic: true,
            isOptional: true,
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
      name: "test",
      description: "Run miscellaneous gcloud command and CLI test scenarios",
      hidden: true,
      options: [
        optAccessTokenFile,
        optAccount,
        {
          name: "--arg-dict",
          description: "ArgDict flag value test",
          args: {
            name: "ATTRIBUTES",
            description: "Dict",
          },
        },
        {
          name: "--arg-list",
          description: "ArgList flag value test",
          args: {
            name: "ITEMS",
            description: "List",
          },
        },
        {
          name: "--argumenterror-outside-argparse",
          description:
            "Trigger a calliope.parser_errors.ArgumentError exception outside of argparse",
        },
        optBillingProject,
        optConfiguration,
        {
          name: "--core-exception",
          description: "Trigger a core exception",
        },
        {
          name: "--exec-file",
          description: "Runs `bash SCRIPT_FILE`",
          args: {
            name: "SCRIPT_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        {
          name: "--feature-flag",
          description: "Print the value of a feature flag",
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
          name: "--interrupt",
          description: "Kill the command with SIGINT",
        },
        {
          name: "--is-interactive",
          description:
            "Call console_io.IsInteractive(heuristic=True) and exit 0 if the return value is True, 1 if False",
        },
        optLogHttp,
        {
          name: "--no-argumenterror-outside-argparse",
          description:
            "Trigger a calliope.parser_errors.ArgumentError exception outside of argparse",
          hidden: true,
        },
        {
          name: "--no-core-exception",
          description: "Trigger a core exception",
          hidden: true,
        },
        {
          name: "--no-feature-flag",
          description: "Print the value of a feature flag",
          hidden: true,
        },
        {
          name: "--no-interrupt",
          description: "Kill the command with SIGINT",
          hidden: true,
        },
        {
          name: "--no-is-interactive",
          description:
            "Call console_io.IsInteractive(heuristic=True) and exit 0 if the return value is True, 1 if False",
          hidden: true,
        },
        {
          name: "--no-staged-progress-tracker",
          description: "Run example staged progress tracker",
          hidden: true,
        },
        {
          name: "--no-uncaught-exception",
          description: "Trigger an exception that is not caught",
          hidden: true,
        },
        {
          name: "--progress-tracker",
          description: "Run the progress tracker for SECONDS seconds and exit",
          args: {
            name: "SECONDS",
            description: "Float",
          },
        },
        optProject,
        {
          name: "--prompt-completer",
          description:
            "Call console_io.PromptResponse() with a MODULE_PATH completer and print the response on the standard output",
          args: {
            name: "MODULE_PATH",
            description: "String",
          },
        },
        optQuiet,
        {
          name: "--sleep",
          description: "Sleep for SECONDS seconds and exit",
          args: {
            name: "SECONDS",
            description: "Float",
          },
        },
        {
          name: "--staged-progress-tracker",
          description: "Run example staged progress tracker",
        },
        optTraceToken,
        {
          name: "--uncaught-exception",
          description: "Trigger an exception that is not caught",
        },
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "NAME",
        description: "Command_lib.compute.TestCompleter instance name test",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "validate-yaml",
      description: "Validate a YAML file against a JSON Schema",
      hidden: true,
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
          name: "SCHEMA_FILE",
          description: "The path to a file containing the JSON Schema",
          template: "filepaths",
        },
        {
          name: "YAML_FILE",
          description:
            "The path to a file containing YAML / JSON data. Use `-` for the standard input",
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
};

export default completionSpec;
