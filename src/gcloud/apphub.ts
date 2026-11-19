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

const optApplication: Fig.Option = {
  name: "--application",
  description: "Name for the application",
  args: {
    name: "APPLICATION",
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

const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "Human-friendly display name",
  args: {
    name: "DISPLAY_NAME",
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
  description:
    "ID of the location or fully qualified identifier for the location",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description: "Location of the ServiceProjectAttachment",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation4: Fig.Option = {
  name: "--location",
  description: "The Cloud location for the application",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation5: Fig.Option = {
  name: "--location",
  description: "The Cloud location for the service",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation6: Fig.Option = {
  name: "--location",
  description: "The Cloud location for the workload",
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
  name: "apphub",
  description: "Manage App Hub resources",
  subcommands: [
    {
      name: "applications",
      description: "Manage App Hub Applications",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to an Apphub application",
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
            {
              name: "--member",
              description:
                "The principal to add the binding for. Should be of the form `user|group|serviceAccount:email` or `domain:domain`",
              priority: 100,
              args: {
                name: "PRINCIPAL",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--role",
              description:
                "Role name to assign to the principal. The role name is the complete path of a predefined role, such as `roles/logging.viewer`, or the role ID for a custom role, such as `organizations/{ORGANIZATION_ID}/roles/logging.viewer`",
              priority: 100,
              args: {
                name: "ROLE",
                description: "String",
              },
            },
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
          name: "create",
          description: "Create an Apphub application",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--business-owners",
              description: "Business owners of the application",
              args: {
                name: "BUSINESS_OWNERS",
                description: "Dict",
              },
            },
            optConfiguration,
            {
              name: "--criticality-type",
              description:
                "Criticality Type of the application. _CRITICALITY_TYPE_ must be one of:",
              args: {
                name: "CRITICALITY_TYPE",
                description: "String",
                suggestions: [
                  "HIGH",
                  "LOW",
                  "MEDIUM",
                  "MISSION_CRITICAL",
                  "TYPE_UNSPECIFIED",
                ],
              },
            },
            {
              name: "--description",
              description: "Description of the Application",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--developer-owners",
              description: "Developer owners of the application",
              args: {
                name: "DEVELOPER_OWNERS",
                description: "Dict",
              },
            },
            optDisplayName,
            {
              name: "--environment-type",
              description:
                "Environment Type of the application. _ENVIRONMENT_TYPE_ must be one of:",
              args: {
                name: "ENVIRONMENT_TYPE",
                description: "String",
                suggestions: [
                  "DEVELOPMENT",
                  "PRODUCTION",
                  "STAGING",
                  "TEST",
                  "TYPE_UNSPECIFIED",
                ],
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
            optLocation4,
            optLogHttp,
            optNoAsync,
            {
              name: "--operator-owners",
              description: "Operator owners of the application",
              args: {
                name: "OPERATOR_OWNERS",
                description: "Dict",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--scope-type",
              description:
                "Scope of the Application. _SCOPE_TYPE_ must be one of:",
              priority: 100,
              args: {
                name: "SCOPE_TYPE",
                description: "String",
                suggestions: ["GLOBAL", "REGIONAL"],
              },
            },
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
          name: "delete",
          description: "Delete an Apphub application",
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
            optLocation4,
            optLogHttp,
            optNoAsync,
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
          name: "describe",
          description: "Describe an Apphub application",
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
          name: "get-iam-policy",
          description: "Get the IAM policy for an Apphub application",
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
          description: "List Apphub applications",
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
          description: "Remove IAM policy binding from an Apphub application",
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
            {
              name: "--member",
              description:
                "The principal to remove the binding for. Should be of the form `user|group|serviceAccount:email` or `domain:domain`",
              priority: 100,
              args: {
                name: "PRINCIPAL",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--role",
              description: "The role to remove the principal from",
              priority: 100,
              args: {
                name: "ROLE",
                description: "String",
              },
            },
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
          name: "services",
          description: "Manage App Hub Application Services",
          subcommands: [
            {
              name: "create",
              description: "Create an Apphub application service",
              options: [
                optAccessTokenFile,
                optAccount,
                optApplication,
                optAsync,
                optBillingProject,
                {
                  name: "--business-owners",
                  description: "Business owners of the service",
                  args: {
                    name: "BUSINESS_OWNERS",
                    description: "Dict",
                  },
                },
                optConfiguration,
                {
                  name: "--criticality-type",
                  description:
                    "Criticality Type of the service. _CRITICALITY_TYPE_ must be one of:",
                  args: {
                    name: "CRITICALITY_TYPE",
                    description: "String",
                    suggestions: [
                      "HIGH",
                      "LOW",
                      "MEDIUM",
                      "MISSION_CRITICAL",
                      "TYPE_UNSPECIFIED",
                    ],
                  },
                },
                {
                  name: "--description",
                  description: "Description of the service",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--developer-owners",
                  description: "Developer owners of the service",
                  args: {
                    name: "DEVELOPER_OWNERS",
                    description: "Dict",
                  },
                },
                {
                  name: "--discovered-service",
                  description:
                    "ID of the discoveredService or fully qualified identifier for the discoveredService",
                  priority: 100,
                  args: {
                    name: "DISCOVERED_SERVICE",
                    description: "String",
                  },
                },
                optDisplayName,
                {
                  name: "--environment-type",
                  description:
                    "Environment Type of the service. _ENVIRONMENT_TYPE_ must be one of:",
                  args: {
                    name: "ENVIRONMENT_TYPE",
                    description: "String",
                    suggestions: [
                      "DEVELOPMENT",
                      "PRODUCTION",
                      "STAGING",
                      "TEST",
                      "TYPE_UNSPECIFIED",
                    ],
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
                optNoAsync,
                {
                  name: "--operator-owners",
                  description: "Operator owners of the service",
                  args: {
                    name: "OPERATOR_OWNERS",
                    description: "Dict",
                  },
                },
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
              name: "delete",
              description: "Delete an Apphub application service",
              options: [
                optAccessTokenFile,
                optAccount,
                optApplication,
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
                optLocation5,
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
              description: "Describe an Apphub application service",
              options: [
                optAccessTokenFile,
                optAccount,
                optApplication,
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
                name: "SERVICE",
                description:
                  "ID of the service or fully qualified identifier for the service",
              },
            },
            {
              name: "list",
              description: "List Apphub application services",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--application",
                  description:
                    "ID of the application or fully qualified identifier for the application",
                  priority: 100,
                  args: {
                    name: "APPLICATION",
                    description: "String",
                  },
                },
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
              description: "Update an Apphub application service",
              options: [
                optAccessTokenFile,
                optAccount,
                optApplication,
                optAsync,
                optBillingProject,
                {
                  name: "--business-owners",
                  description: "Business owners of the service",
                  args: {
                    name: "BUSINESS_OWNERS",
                    description: "Dict",
                  },
                },
                optConfiguration,
                {
                  name: "--criticality-type",
                  description:
                    "Criticality Type of the service. _CRITICALITY_TYPE_ must be one of:",
                  args: {
                    name: "CRITICALITY_TYPE",
                    description: "String",
                    suggestions: [
                      "HIGH",
                      "LOW",
                      "MEDIUM",
                      "MISSION_CRITICAL",
                      "TYPE_UNSPECIFIED",
                    ],
                  },
                },
                {
                  name: "--description",
                  description: "Description of the service",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--developer-owners",
                  description: "Developer owners of the service",
                  args: {
                    name: "DEVELOPER_OWNERS",
                    description: "Dict",
                  },
                },
                optDisplayName,
                {
                  name: "--environment-type",
                  description:
                    "Environment Type of the service. _ENVIRONMENT_TYPE_ must be one of:",
                  args: {
                    name: "ENVIRONMENT_TYPE",
                    description: "String",
                    suggestions: [
                      "DEVELOPMENT",
                      "PRODUCTION",
                      "STAGING",
                      "TEST",
                      "TYPE_UNSPECIFIED",
                    ],
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
                optNoAsync,
                {
                  name: "--operator-owners",
                  description: "Operator owners of the service",
                  args: {
                    name: "OPERATOR_OWNERS",
                    description: "Dict",
                  },
                },
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
          name: "set-iam-policy",
          description:
            "Set the IAM policy for an Apphub application as defined in a JSON/YAML file",
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
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "APPLICATION",
              description:
                "ID of the application or fully qualified identifier for the application",
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
          description: "Update an Apphub application",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--business-owners",
              description: "Business owners of the application",
              args: {
                name: "BUSINESS_OWNERS",
                description: "Dict",
              },
            },
            optConfiguration,
            {
              name: "--criticality-type",
              description:
                "Criticality Type of the application. _CRITICALITY_TYPE_ must be one of:",
              args: {
                name: "CRITICALITY_TYPE",
                description: "String",
                suggestions: [
                  "HIGH",
                  "LOW",
                  "MEDIUM",
                  "MISSION_CRITICAL",
                  "TYPE_UNSPECIFIED",
                ],
              },
            },
            {
              name: "--description",
              description: "Description of the Application",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--developer-owners",
              description: "Developer owners of the application",
              args: {
                name: "DEVELOPER_OWNERS",
                description: "Dict",
              },
            },
            optDisplayName,
            {
              name: "--environment-type",
              description:
                "Environment Type of the application. _ENVIRONMENT_TYPE_ must be one of:",
              args: {
                name: "ENVIRONMENT_TYPE",
                description: "String",
                suggestions: [
                  "DEVELOPMENT",
                  "PRODUCTION",
                  "STAGING",
                  "TEST",
                  "TYPE_UNSPECIFIED",
                ],
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
            optLocation4,
            optLogHttp,
            optNoAsync,
            {
              name: "--operator-owners",
              description: "Operator owners of the application",
              args: {
                name: "OPERATOR_OWNERS",
                description: "Dict",
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
          name: "workloads",
          description: "Manage App Hub Application Workloads",
          subcommands: [
            {
              name: "create",
              description: "Create an Apphub application workload",
              options: [
                optAccessTokenFile,
                optAccount,
                optApplication,
                optAsync,
                optBillingProject,
                {
                  name: "--business-owners",
                  description: "Business owners of the workload",
                  args: {
                    name: "BUSINESS_OWNERS",
                    description: "Dict",
                  },
                },
                optConfiguration,
                {
                  name: "--criticality-type",
                  description:
                    "Criticality Type of the workload. _CRITICALITY_TYPE_ must be one of:",
                  args: {
                    name: "CRITICALITY_TYPE",
                    description: "String",
                    suggestions: [
                      "HIGH",
                      "LOW",
                      "MEDIUM",
                      "MISSION_CRITICAL",
                      "TYPE_UNSPECIFIED",
                    ],
                  },
                },
                {
                  name: "--description",
                  description: "Description of the Workload",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--developer-owners",
                  description: "Developer owners of the workload",
                  args: {
                    name: "DEVELOPER_OWNERS",
                    description: "Dict",
                  },
                },
                {
                  name: "--discovered-workload",
                  description:
                    "ID of the discoveredWorkload or fully qualified identifier for the discoveredWorkload",
                  priority: 100,
                  args: {
                    name: "DISCOVERED_WORKLOAD",
                    description: "String",
                  },
                },
                optDisplayName,
                {
                  name: "--environment-type",
                  description:
                    "Environment Type of the workload. _ENVIRONMENT_TYPE_ must be one of:",
                  args: {
                    name: "ENVIRONMENT_TYPE",
                    description: "String",
                    suggestions: [
                      "DEVELOPMENT",
                      "PRODUCTION",
                      "STAGING",
                      "TEST",
                      "TYPE_UNSPECIFIED",
                    ],
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
                optNoAsync,
                {
                  name: "--operator-owners",
                  description: "Operator owners of the workload",
                  args: {
                    name: "OPERATOR_OWNERS",
                    description: "Dict",
                  },
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "WORKLOAD",
                description:
                  "ID of the workload or fully qualified identifier for the workload",
              },
            },
            {
              name: "delete",
              description: "Delete an Apphub application workload",
              options: [
                optAccessTokenFile,
                optAccount,
                optApplication,
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
                optLocation6,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "WORKLOAD",
                description:
                  "ID of the workload or fully qualified identifier for the workload",
              },
            },
            {
              name: "describe",
              description: "Describe an Apphub application workload",
              options: [
                optAccessTokenFile,
                optAccount,
                optApplication,
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
                name: "WORKLOAD",
                description:
                  "ID of the workload or fully qualified identifier for the workload",
              },
            },
            {
              name: "list",
              description: "List Apphub application workloads",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--application",
                  description:
                    "ID of the application or fully qualified identifier for the application",
                  priority: 100,
                  args: {
                    name: "APPLICATION",
                    description: "String",
                  },
                },
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
              description: "Update an Apphub application workload",
              options: [
                optAccessTokenFile,
                optAccount,
                optApplication,
                optAsync,
                optBillingProject,
                {
                  name: "--business-owners",
                  description: "Business owners of the workload",
                  args: {
                    name: "BUSINESS_OWNERS",
                    description: "Dict",
                  },
                },
                optConfiguration,
                {
                  name: "--criticality-type",
                  description:
                    "Criticality Type of the workload. _CRITICALITY_TYPE_ must be one of:",
                  args: {
                    name: "CRITICALITY_TYPE",
                    description: "String",
                    suggestions: [
                      "HIGH",
                      "LOW",
                      "MEDIUM",
                      "MISSION_CRITICAL",
                      "TYPE_UNSPECIFIED",
                    ],
                  },
                },
                {
                  name: "--description",
                  description: "Description of the Workload",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--developer-owners",
                  description: "Developer owners of the workload",
                  args: {
                    name: "DEVELOPER_OWNERS",
                    description: "Dict",
                  },
                },
                optDisplayName,
                {
                  name: "--environment-type",
                  description:
                    "Environment Type of the workload. _ENVIRONMENT_TYPE_ must be one of:",
                  args: {
                    name: "ENVIRONMENT_TYPE",
                    description: "String",
                    suggestions: [
                      "DEVELOPMENT",
                      "PRODUCTION",
                      "STAGING",
                      "TEST",
                      "TYPE_UNSPECIFIED",
                    ],
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
                optNoAsync,
                {
                  name: "--operator-owners",
                  description: "Operator owners of the workload",
                  args: {
                    name: "OPERATOR_OWNERS",
                    description: "Dict",
                  },
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "WORKLOAD",
                description:
                  "ID of the workload or fully qualified identifier for the workload",
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
    {
      name: "boundary",
      description: "Manage App Hub boundaries",
      subcommands: [
        {
          name: "describe",
          description: "Show metadata for an App Hub boundary",
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
        },
        {
          name: "update",
          description: "Update an App Hub boundary",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--crm-node",
              description: "The CRM node to associate with the boundary",
              args: {
                name: "CRM_NODE",
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
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--request-id",
              description: "An optional request ID to identify requests",
              args: {
                name: "REQUEST_ID",
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
      name: "discovered-services",
      description: "Manage App Hub Discovered Services",
      subcommands: [
        {
          name: "describe",
          description: "Describe an Apphub discovered service",
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
              name: "--location",
              description: "The Cloud location for the discoveredService",
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
            name: "DISCOVERED_SERVICE",
            description:
              "ID of the discoveredService or fully qualified identifier for the discoveredService",
          },
        },
        {
          name: "list",
          description: "List Apphub discovered services",
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
          name: "lookup",
          description: "Lookup an Apphub discovered service with URI",
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
            {
              name: "--uri",
              description:
                "Google Cloud Platform resource URI to look up service for",
              priority: 100,
              args: {
                name: "URI",
                description: "String",
              },
            },
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
      name: "discovered-workloads",
      description: "Manage App Hub Discovered Workloads",
      subcommands: [
        {
          name: "describe",
          description: "Describe an Apphub discovered workload",
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
              name: "--location",
              description: "The Cloud location for the discoveredWorkload",
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
            name: "DISCOVERED_WORKLOAD",
            description:
              "ID of the discoveredWorkload or fully qualified identifier for the discoveredWorkload",
          },
        },
        {
          name: "list",
          description:
            "List Apphub discovered workloads that could be added to an application",
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
          name: "lookup",
          description: "Lookup an Apphub discovered workload with URI",
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
            {
              name: "--uri",
              description:
                "Google Cloud Platform resource URI to look up workload for",
              priority: 100,
              args: {
                name: "URI",
                description: "String",
              },
            },
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
      name: "locations",
      description: "Manage App Hub Locations",
      subcommands: [
        {
          name: "describe",
          description: "Describe an Apphub location",
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
          description: "List Apphub locations",
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
      name: "operations",
      description: "Manage App Hub Operations (long-running operations)",
      subcommands: [
        {
          name: "describe",
          description: "Describe an Apphub operation (long-running operation)",
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
              name: "--location",
              description: "The Cloud location for the operation",
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "list",
          description: "List Apphub operations (long-running operations)",
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
      name: "service-projects",
      description: "Manage App Hub Service Projects",
      subcommands: [
        {
          name: "add",
          description: "Add an Apphub service project",
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
            optLocation3,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE_PROJECT",
            description:
              "ID of the ServiceProjectAttachment or fully qualified identifier for the ServiceProjectAttachment",
          },
        },
        {
          name: "describe",
          description: "Describe an Apphub service project",
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
            name: "SERVICE_PROJECT",
            description:
              "ID of the ServiceProjectAttachment or fully qualified identifier for the ServiceProjectAttachment",
          },
        },
        {
          name: "detach",
          description: "Detach an Apphub service project",
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
          description: "List Apphub service projects",
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
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "lookup",
          description: "Lookup an Apphub service project",
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
          name: "remove",
          description: "Remove an Apphub service project",
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
            optLocation3,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE_PROJECT",
            description:
              "ID of the ServiceProjectAttachment or fully qualified identifier for the ServiceProjectAttachment",
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
