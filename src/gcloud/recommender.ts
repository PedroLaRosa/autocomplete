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

const optBillingAccount: Fig.Option = {
  name: "--billing-account",
  description:
    "The Google Cloud Platform billing account ID to use for this invocation",
  args: {
    name: "BILLING_ACCOUNT",
    description: "String",
  },
};

const optBillingAccount2: Fig.Option = {
  name: "--billing-account",
  description: "The Google Cloud billing account ID to use for this invocation",
  args: {
    name: "BILLING_ACCOUNT",
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

const optEtag: Fig.Option = {
  name: "--etag",
  description: "Etag of a recommendation",
  priority: 100,
  args: {
    name: "ETAG",
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

const optFolder: Fig.Option = {
  name: "--folder",
  description: "The Google Cloud Platform folder ID to use for this invocation",
  args: {
    name: "FOLDER_ID",
    description: "String",
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

const optLocation: Fig.Option = {
  name: "--location",
  description: "Location to use for this invocation",
  priority: 100,
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation2: Fig.Option = {
  name: "--location",
  description: "Location",
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

const optOrganization: Fig.Option = {
  name: "--organization",
  description:
    "The Google Cloud Platform organization ID to use for this invocation",
  args: {
    name: "ORGANIZATION_ID",
    description: "String",
  },
};

const optOrganization2: Fig.Option = {
  name: "--organization",
  description: "The Google Cloud organization ID to use for this invocation",
  args: {
    name: "ORGANIZATION_ID",
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

const optRecommender: Fig.Option = {
  name: "--recommender",
  description: "Recommender of recommendation",
  priority: 100,
  args: {
    name: "RECOMMENDER",
    description: "String",
  },
};

const optStateMetadata: Fig.Option = {
  name: "--state-metadata",
  description:
    "State metadata for recommendation, in format of --state-metadata=key1=value1,key2=value2",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
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
  name: "recommender",
  description: "Manage Cloud recommendations and recommendation rules",
  subcommands: [
    {
      name: "insight-type-config",
      description: "Manage Cloud resource insight type configuration",
      subcommands: [
        {
          name: "describe",
          description: "Describe an insight type configuration",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingAccount2,
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
            optOrganization2,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSIGHT_TYPE",
            description: "Insight type to use for this invocation",
          },
        },
        {
          name: "update",
          description: "Update an insight type configuration",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--annotations",
              description:
                "Store small amounts of arbitrary data on the insight type configuration",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optBillingAccount2,
            optBillingProject,
            {
              name: "--config-file",
              description:
                "Generation configuration file for the insight type configuration",
              args: {
                name: "CONFIG_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optConfiguration,
            {
              name: "--display-name",
              description: "Display name of the insight type configuration",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--etag",
              description: "Etag of the insight type configuration",
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
            {
              name: "--no-validate-only",
              description:
                "If true, validate the request and preview the change, but do not actually update it",
              hidden: true,
            },
            optOrganization2,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            {
              name: "--validate-only",
              description:
                "If true, validate the request and preview the change, but do not actually update it",
            },
            optVerbosity,
          ],
          args: {
            name: "INSIGHT_TYPE",
            description: "Insight type to use for this invocation",
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
      name: "insights",
      description: "Manage Cloud resource insights",
      subcommands: [
        {
          name: "describe",
          description: "Describe an insight",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFolder,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--insight-type",
              description: "Insight type to describe insights",
              priority: 100,
              args: {
                name: "INSIGHT_TYPE",
                description: "String",
              },
            },
            optLocation2,
            optLogHttp,
            optOrganization,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSIGHT",
            description: "Insight to describe",
          },
        },
        {
          name: "list",
          description: "List insights for a Google Cloud entity",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--filter",
              description:
                "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed. If the expression evaluates `True`, then that item is listed. For more details and examples of filter expressions, run $ gcloud topic filters. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
              args: {
                name: "EXPRESSION",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFolder,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--insight-type",
              description:
                "Insight type to list insights for. Supported insight-types can be found here: https://cloud.google.com/recommender/docs/insights/insight-types",
              priority: 100,
              args: {
                name: "INSIGHT_TYPE",
                description: "String",
              },
            },
            {
              name: "--limit",
              description:
                "Maximum number of resources to list. The default is *unlimited*. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
              args: {
                name: "LIMIT",
              },
            },
            {
              name: "--location",
              description: "Location to list insights for",
              priority: 100,
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--no-uri",
              description:
                "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
              hidden: true,
            },
            optOrganization,
            {
              name: "--page-size",
              description:
                "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is determined by the service if it supports paging, otherwise it is *unlimited* (no paging). Paging may be applied before or after *--filter* and *--limit* depending on the service",
              args: {
                name: "PAGE_SIZE",
              },
            },
            optQuiet,
            {
              name: "--sort-by",
              description:
                "Comma-separated list of resource field key names to sort by. The default order is ascending. Prefix a field with ``~'' for descending order on that field. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
              args: {
                name: "FIELD",
                description: "List",
              },
            },
            optTraceToken,
            {
              name: "--uri",
              description:
                "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "mark-accepted",
          description: "Mark an insight's state as ACCEPTED",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--etag",
              description: "Etag of a insight",
              priority: 100,
              args: {
                name: "etag",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFolder,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--insight-type",
              description: "Insight Type of the insights",
              priority: 100,
              args: {
                name: "INSIGHT_TYPE",
                description: "String",
              },
            },
            optLocation2,
            optLogHttp,
            optOrganization,
            optQuiet,
            optStateMetadata,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSIGHT",
            description: "Insight id which will be marked as accepted",
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
      name: "recommendations",
      description: "Manage Cloud resource recommendations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a recommendation for a Cloud project",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFolder,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation2,
            optLogHttp,
            optOrganization,
            optQuiet,
            {
              name: "--recommender",
              description: "Recommender of the recommendations",
              priority: 100,
              args: {
                name: "RECOMMENDER",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RECOMMENDATION",
            description: "Recommendation to describe",
          },
        },
        {
          name: "list",
          description: "List operations for a recommendation",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--filter",
              description:
                "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed. If the expression evaluates `True`, then that item is listed. For more details and examples of filter expressions, run $ gcloud topic filters. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
              args: {
                name: "EXPRESSION",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFolder,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--limit",
              description:
                "Maximum number of resources to list. The default is *unlimited*. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
              args: {
                name: "LIMIT",
              },
            },
            {
              name: "--location",
              description: "Location to list recommendations for",
              priority: 100,
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--no-uri",
              description:
                "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
              hidden: true,
            },
            optOrganization,
            {
              name: "--page-size",
              description:
                "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is determined by the service if it supports paging, otherwise it is *unlimited* (no paging). Paging may be applied before or after *--filter* and *--limit* depending on the service",
              args: {
                name: "PAGE_SIZE",
              },
            },
            optQuiet,
            {
              name: "--recommender",
              description:
                "Recommender to list recommendations for. Supported recommenders can be found here: https://cloud.google.com/recommender/docs/recommenders",
              priority: 100,
              args: {
                name: "RECOMMENDER",
                description: "String",
              },
            },
            {
              name: "--sort-by",
              description:
                "Comma-separated list of resource field key names to sort by. The default order is ascending. Prefix a field with ``~'' for descending order on that field. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
              args: {
                name: "FIELD",
                description: "List",
              },
            },
            optTraceToken,
            {
              name: "--uri",
              description:
                "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "mark-claimed",
          description: "Mark a recommendation's state as CLAIMED",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingAccount,
            optBillingProject,
            optConfiguration,
            optEtag,
            optFlagsFile,
            optFlatten,
            optFolder,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation2,
            optLogHttp,
            optOrganization,
            optQuiet,
            optRecommender,
            optStateMetadata,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RECOMMENDATION",
            description: "Recommendation id which will be marked as claimed",
          },
        },
        {
          name: "mark-dismissed",
          description: "Mark recommendation's state as DISMISSED",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingAccount,
            optBillingProject,
            optConfiguration,
            optEtag,
            optFlagsFile,
            optFlatten,
            optFolder,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation2,
            optLogHttp,
            optOrganization,
            optQuiet,
            {
              name: "--recommender",
              description: "Recommender of the recommendations",
              priority: 100,
              args: {
                name: "RECOMMENDER",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RECOMMENDATION",
            description: "Recommendation ID which will be marked as dismissed",
          },
        },
        {
          name: "mark-failed",
          description: "Mark a recommendation's state as FAILED",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingAccount,
            optBillingProject,
            optConfiguration,
            optEtag,
            optFlagsFile,
            optFlatten,
            optFolder,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation2,
            optLogHttp,
            optOrganization,
            optQuiet,
            optRecommender,
            optStateMetadata,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RECOMMENDATION",
            description: "Recommendation id which will be marked as FAILED",
          },
        },
        {
          name: "mark-succeeded",
          description: "Mark a recommendation's state as SUCCEEDED",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingAccount,
            optBillingProject,
            optConfiguration,
            optEtag,
            optFlagsFile,
            optFlatten,
            optFolder,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation2,
            optLogHttp,
            optOrganization,
            optQuiet,
            optRecommender,
            optStateMetadata,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RECOMMENDATION",
            description: "Recommendation id which will be marked as succeeded",
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
      name: "recommender-config",
      description: "Manage Cloud resource recommender configuration",
      subcommands: [
        {
          name: "describe",
          description: "Describe a recommender configuration",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingAccount2,
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
            optOrganization2,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RECOMMENDER",
            description: "Recommender to use for this invocation",
          },
        },
        {
          name: "update",
          description: "Update a recommender configuration",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--annotations",
              description:
                "Store small amounts of arbitrary data on the recommender configuration",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optBillingAccount2,
            optBillingProject,
            {
              name: "--config-file",
              description:
                "Generation configuration file for the recommender configuration",
              args: {
                name: "CONFIG_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optConfiguration,
            {
              name: "--display-name",
              description: "Display name of the recommender configuration",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--etag",
              description: "Etag of the recommender configuration",
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
            {
              name: "--no-validate-only",
              description:
                "If true, validate the request and preview the change, but do not actually update it",
              hidden: true,
            },
            optOrganization2,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            {
              name: "--validate-only",
              description:
                "If true, validate the request and preview the change, but do not actually update it",
            },
            optVerbosity,
          ],
          args: {
            name: "RECOMMENDER",
            description: "Recommender to use for this invocation",
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
