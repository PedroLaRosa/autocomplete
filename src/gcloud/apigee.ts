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

const optOrganization: Fig.Option = {
  name: "--organization",
  description:
    "Apigee organization containing the API product. If unspecified, the Cloud Platform project's associated organization will be used",
  args: {
    name: "ORGANIZATION",
    description: "String",
  },
};

const optOrganization2: Fig.Option = {
  name: "--organization",
  description:
    "ID of the organization or fully qualified identifier for the organization",
  args: {
    name: "ORGANIZATION",
    description: "String",
  },
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
  name: "apigee",
  description: "Manage Apigee resources",
  subcommands: [
    {
      name: "apis",
      description: "Manage Apigee API proxies",
      subcommands: [
        {
          name: "deploy",
          description: "Deploy an API proxy to an environment",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--api",
              description:
                "API proxy to be deployed. To get a list of available API proxies, run `{parent_command} list`",
              args: {
                name: "API",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--environment",
              description:
                "Environment in which to deploy the API proxy. To get a list of available environments, run `{grandparent_command} environments list`",
              args: {
                name: "ENVIRONMENT",
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
              name: "--no-override",
              description:
                "Force the deployment of the new revision, overriding any currently deployed revision that would conflict with it",
              hidden: true,
            },
            {
              name: "--organization",
              description:
                "Apigee organization of the proxy and environment. If unspecified, the Cloud Platform project's associated organization will be used",
              args: {
                name: "ORGANIZATION",
                description: "String",
              },
            },
            {
              name: "--override",
              description:
                "Force the deployment of the new revision, overriding any currently deployed revision that would conflict with it",
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REVISION",
            description:
              "ID of the revision or fully qualified identifier for the revision",
            isOptional: true,
          },
        },
        {
          name: "describe",
          description: "Describe an Apigee API proxy",
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
              name: "--no-verbose",
              description: "Include proxy revision info in the description",
              hidden: true,
            },
            {
              name: "--organization",
              description:
                "Apigee organization containing the API proxy. If unspecified, the Cloud Platform project's associated organization will be used",
              args: {
                name: "ORGANIZATION",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            {
              name: "--verbose",
              description: "Include proxy revision info in the description",
            },
            optVerbosity,
          ],
          args: {
            name: "API",
            description:
              "ID of the API proxy or fully qualified identifier for the API proxy",
          },
        },
        {
          name: "list",
          description: "List Apigee API proxies",
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
            optOrganization2,
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
          name: "undeploy",
          description: "Undeploy an Apigee API proxy from an environment",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--api",
              description:
                "API proxy to be undeployed. Must currently be deployed. To get a list of available deployed proxies, run `{grandparent_command} deployments list --environment=ENV`",
              args: {
                name: "API",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--environment",
              description:
                "Environment from which to undeploy the API proxy. To get a list of available environments, run `{grandparent_command} environments list`",
              args: {
                name: "ENVIRONMENT",
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
              name: "--organization",
              description: "Apigee organization of the proxy and environment",
              args: {
                name: "ORGANIZATION",
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
            name: "REVISION",
            description:
              "ID of the revision or fully qualified identifier for the revision",
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
      name: "applications",
      description:
        "Manage third-party applications which call Apigee API proxies",
      subcommands: [
        {
          name: "describe",
          description: "Describe an Apigee application",
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
              name: "--organization",
              description:
                "Apigee organization containing the application. If unspecified, the Cloud Platform project's associated organization will be used",
              args: {
                name: "ORGANIZATION",
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
            name: "APPLICATION",
            description:
              "ID of the application or fully qualified identifier for the application",
          },
        },
        {
          name: "list",
          description: "List Apigee applications",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--developer",
              description:
                "ID of the developer or fully qualified identifier for the developer",
              args: {
                name: "DEVELOPER",
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
            {
              name: "--organization",
              description:
                "Apigee organization containing the developer. If unspecified, the Cloud Platform project's associated organization will be used",
              args: {
                name: "ORGANIZATION",
                description: "String",
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
      name: "deployments",
      description:
        "Manage deployments of Apigee API proxies in runtime environments",
      subcommands: [
        {
          name: "describe",
          description: "Describe an Apigee API proxy deployment",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--api",
              description: "Deployed API proxy",
              args: {
                name: "API",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--environment",
              description: "Environment in which the proxy was deployed",
              args: {
                name: "ENVIRONMENT",
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
              name: "--organization",
              description:
                "Apigee Organization of the proxy and environment. If unspecified, the Cloud Platform project's associated organization will be used",
              args: {
                name: "ORGANIZATION",
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
            name: "REVISION",
            description:
              "ID of the revision or fully qualified identifier for the revision",
            isOptional: true,
          },
        },
        {
          name: "list",
          description: "List Apigee API proxy deployments",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--api",
              description:
                "The API proxy whose deployments should be listed. If not provided, all proxies will be listed. To get a list of existing API proxies, run `{grandparent_command} apis list`",
              args: {
                name: "API",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--environment",
              description:
                "The environment whose deployments should be listed. If not provided, all environments will be listed. To get a list of available environments, run `{grandparent_command} environments list`",
              args: {
                name: "ENVIRONMENT",
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
            {
              name: "--organization",
              description:
                "The organization whose deployments should be listed.If unspecified, the Cloud Platform project's associated organization will be used",
              args: {
                name: "ORGANIZATION",
                description: "String",
              },
            },
            optPageSize,
            optProject,
            optQuiet,
            {
              name: "--revision",
              description:
                "ID of the revision or fully qualified identifier for the revision",
              args: {
                name: "REVISION",
                description: "String",
              },
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
      name: "developers",
      description: "Manage Apigee developers",
      subcommands: [
        {
          name: "describe",
          description: "Describe an Apigee developer",
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
              name: "--organization",
              description:
                "Apigee organization containing the developer. If unspecified, the Cloud Platform project's associated organization will be used",
              args: {
                name: "ORGANIZATION",
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
            name: "DEVELOPER",
            description:
              "ID of the developer or fully qualified identifier for the developer",
          },
        },
        {
          name: "list",
          description: "List Apigee developers by email address",
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
            optOrganization2,
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
      name: "environments",
      description: "Manage Apigee environments",
      subcommands: [
        {
          name: "list",
          description: "List Apigee deployment environments",
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
            optOrganization2,
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
      name: "organizations",
      description: "Manage Apigee organizations",
      subcommands: [
        {
          name: "list",
          description:
            "List Apigee organizations and their paired Cloud Platform projects",
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
      name: "products",
      description: "Manage Apigee API products",
      subcommands: [
        {
          name: "create",
          description: "Create an Apigee API product",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--all-environments",
              description:
                "Make all environments accessible through this API product",
            },
            {
              name: "--all-proxies",
              description:
                "Expose all available API proxies and their resources. Must be explicitly specified if neither `--apis` nor `--resources` is provided",
            },
            {
              name: "--apis",
              description:
                "Comma-separated names of API proxies to which this API product is bound. Only those API proxies will be accessible through the new API product",
              args: {
                name: "API",
                description: "List",
              },
            },
            {
              name: "--attributes",
              description:
                "Key-value attribute pairs that may be used to extend the default API product profile with customer-specific metadata. Up to 17 attributes can be specified",
              args: {
                name: "NAME=VALUE",
                description: "Dict",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description:
                "Overview of the API product. Include key information about the API product that is not captured by other fields",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description:
                "Name to be displayed in the UI or developer portal to developers registering for API access",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--environments",
              description:
                "Environments to which the API product is bound. Requests to environments that are not listed are rejected, preventing developers from accessing those resources through API Proxies deployed in another environment",
              args: {
                name: "ENVIRONMENT",
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
              name: "--internal-access",
              description: "Prevent external access to this API product",
            },
            optLogHttp,
            {
              name: "--manual-approval",
              description:
                'Require manual approval of developer requests to access this API product before their consumer keys can be used. If unset, the consumer key is generated in an "approved" state and can be used immediately',
            },
            {
              name: "--no-all-proxies",
              description:
                "Expose all available API proxies and their resources. Must be explicitly specified if neither `--apis` nor `--resources` is provided",
              hidden: true,
            },
            {
              name: "--no-manual-approval",
              description:
                'Require manual approval of developer requests to access this API product before their consumer keys can be used. If unset, the consumer key is generated in an "approved" state and can be used immediately',
              hidden: true,
            },
            {
              name: "--oauth-scopes",
              description:
                "Comma-separated list of OAuth scopes that are validated at runtime. Apigee validates that the scopes in any access token presented match the scopes defined in the OAuth policy assoicated with the API product",
              args: {
                name: "SCOPE",
                description: "List",
              },
            },
            {
              name: "--organization",
              description:
                "Apigee organization containing the API product. If unspecified, the Cloud Platform project's associated organization will be used",
              args: {
                name: "ORGANIZATION",
              },
            },
            {
              name: "--private-access",
              description:
                "Hide this API product in the developer portal but make it accessible by external developers",
            },
            optProject,
            {
              name: "--public-access",
              description:
                "Make this API product visible to developers in the Apigee developer portal",
            },
            optQuiet,
            {
              name: "--quota",
              description:
                "Number of request messages permitted per app by this API product for the specified `--quota-interval` and `--quota-unit`",
              args: {
                name: "QUOTA",
                description: "Int",
              },
            },
            {
              name: "--quota-interval",
              description:
                "Time interval over which the number of request messages is calculated",
              args: {
                name: "QUOTA_INTERVAL",
                description: "Int",
              },
            },
            {
              name: "--quota-unit",
              description: "Time unit for `--quota-interval`",
              args: {
                name: "QUOTA_UNIT",
                description: "String",
                suggestions: ["minute", "hour", "day", "month"],
              },
            },
            {
              name: "--resources",
              description:
                "API resources to be bundled in the API product, separated by `#` signs",
              args: {
                name: "RESOURCE",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INTERNAL_NAME",
            description:
              "ID of the API product or fully qualified identifier for the API product",
          },
        },
        {
          name: "delete",
          description: "Delete an Apigee API product",
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
            optOrganization,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PRODUCT",
            description:
              "ID of the API product or fully qualified identifier for the API product",
          },
        },
        {
          name: "describe",
          description: "Describe an Apigee API product",
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
            optOrganization,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PRODUCT",
            description:
              "ID of the API product or fully qualified identifier for the API product",
          },
        },
        {
          name: "list",
          description: "List Apigee API products",
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
            optOrganization2,
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
          description: "Update an existing Apigee API product",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-api",
              description: "Adds a new API to the set of APIs",
              args: {
                name: "API",
                description: "List",
              },
            },
            {
              name: "--add-attribute",
              description: "Adds a new attribute to the set of attributes",
              args: {
                name: "NAME=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--add-environment",
              description: "Adds a new environment to the set of environments",
              args: {
                name: "ENVIRONMENT",
                description: "List",
              },
            },
            {
              name: "--add-oauth-scope",
              description: "Adds a new OAuth scope to the set of OAuth scopes",
              args: {
                name: "OAUTH-SCOPE",
                description: "List",
              },
            },
            {
              name: "--add-resource",
              description: "Adds a new resource to the set of resources",
              args: {
                name: "RESOURCE",
                description: "List",
              },
            },
            {
              name: "--all-apis",
              description:
                "Include all deployed API proxies in the product, so long as they match the other parameters",
            },
            {
              name: "--all-environments",
              description:
                "Make all environments accessible through this API product",
            },
            {
              name: "--all-resources",
              description:
                "Include all deployed API resources in the product, so long as they match the other parameters",
            },
            {
              name: "--automatic-approval",
              description:
                "Allow developers to generate approved consumer keys without waiting for approval",
            },
            optBillingProject,
            {
              name: "--clear-attributes",
              description: "Removes all attributes",
            },
            {
              name: "--clear-description",
              description: "Remove the API product's description",
            },
            {
              name: "--clear-oauth-scopes",
              description: "Removes all OAuth scopes",
            },
            {
              name: "--clear-quota",
              description:
                "Remove any quota currently imposed on the API product",
            },
            optConfiguration,
            {
              name: "--description",
              description:
                "Overview of the API product. Include key information about the API product that is not captured by other fields",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description:
                "Name to be displayed in the UI or developer portal to developers registering for API access",
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
              name: "--internal-access",
              description: "Prevent external access to this API product",
            },
            optLogHttp,
            {
              name: "--manual-approval",
              description:
                "Require manual approval of developer requests to access this API product before their consumer keys can be used",
            },
            {
              name: "--no-all-apis",
              description:
                "Include all deployed API proxies in the product, so long as they match the other parameters",
              hidden: true,
            },
            {
              name: "--no-all-environments",
              description:
                "Make all environments accessible through this API product",
              hidden: true,
            },
            {
              name: "--no-all-resources",
              description:
                "Include all deployed API resources in the product, so long as they match the other parameters",
              hidden: true,
            },
            {
              name: "--no-clear-attributes",
              description: "Removes all attributes",
              hidden: true,
            },
            {
              name: "--no-clear-description",
              description: "Remove the API product's description",
              hidden: true,
            },
            {
              name: "--no-clear-oauth-scopes",
              description: "Removes all OAuth scopes",
              hidden: true,
            },
            {
              name: "--no-clear-quota",
              description:
                "Remove any quota currently imposed on the API product",
              hidden: true,
            },
            optOrganization,
            {
              name: "--private-access",
              description:
                "Hide this API product in the developer portal but make it accessible by external developers",
            },
            optProject,
            {
              name: "--public-access",
              description:
                "Make this API product visible to developers in the Apigee developer portal",
            },
            optQuiet,
            {
              name: "--quota",
              description:
                "Number of request messages permitted per app by this API product for the specified `--quota-interval` and `--quota-unit`",
              args: {
                name: "QUOTA",
                description: "Int",
              },
            },
            {
              name: "--quota-interval",
              description:
                "Time interval over which the number of request messages is calculated",
              args: {
                name: "QUOTA_INTERVAL",
                description: "Int",
              },
            },
            {
              name: "--quota-unit",
              description:
                "Time unit for `--quota-interval`. _QUOTA_UNIT_ must be one of: *minute*, *hour*, *day*, *month*",
              args: {
                name: "QUOTA_UNIT",
                description: "String",
                suggestions: ["minute", "hour", "day", "month"],
              },
            },
            {
              name: "--remove-api",
              description: "Removes an existing API from the set of APIs",
              args: {
                name: "API",
                description: "List",
              },
            },
            {
              name: "--remove-attribute",
              description:
                "Removes an existing attribute from the set of attributes",
              args: {
                name: "NAME",
                description: "List",
              },
            },
            {
              name: "--remove-environment",
              description:
                "Removes an existing environment from the set of environments",
              args: {
                name: "ENVIRONMENT",
                description: "List",
              },
            },
            {
              name: "--remove-oauth-scope",
              description:
                "Removes an existing OAuth scope from the set of OAuth scopes",
              args: {
                name: "OAUTH-SCOPE",
                description: "List",
              },
            },
            {
              name: "--remove-resource",
              description:
                "Removes an existing resource from the set of resources",
              args: {
                name: "RESOURCE",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PRODUCT",
            description:
              "ID of the API product or fully qualified identifier for the API product",
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
