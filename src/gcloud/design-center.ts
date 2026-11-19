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

const optApplicationTemplate: Fig.Option = {
  name: "--application-template",
  description:
    "ID of the applicationTemplate or fully qualified identifier for the applicationTemplate",
  priority: 100,
  args: {
    name: "APPLICATION_TEMPLATE",
    description: "String",
  },
};

const optApplicationTemplate2: Fig.Option = {
  name: "--application-template",
  description: "The applicationTemplate id of the component resource",
  args: {
    name: "APPLICATION_TEMPLATE",
    description: "String",
  },
};

const optApplicationTemplate3: Fig.Option = {
  name: "--application-template",
  description: "The applicationTemplate id of the policy resource",
  args: {
    name: "APPLICATION_TEMPLATE",
    description: "String",
  },
};

const optApplicationTemplate4: Fig.Option = {
  name: "--application-template",
  description: "The applicationTemplate id of the revision resource",
  args: {
    name: "APPLICATION_TEMPLATE",
    description: "String",
  },
};

const optArtifactLocationGcsUri: Fig.Option = {
  name: "--artifact-location-gcs-uri",
  description: "The Cloud Storage URI for storing the generated IaC",
  args: {
    name: "ARTIFACT_LOCATION_GCS_URI",
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

const optCatalog: Fig.Option = {
  name: "--catalog",
  description: "The catalog id of the share resource",
  args: {
    name: "CATALOG",
    description: "String",
  },
};

const optCatalog2: Fig.Option = {
  name: "--catalog",
  description: "The catalog id of the template resource",
  args: {
    name: "CATALOG",
    description: "String",
  },
};

const optComponent: Fig.Option = {
  name: "--component",
  description: "The component id of the connection resource",
  args: {
    name: "COMPONENT",
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

const optConnection: Fig.Option = {
  name: "--connection",
  description: "The connection id of the gitRepositoryLink resource",
  args: {
    name: "CONNECTION",
    description: "String",
  },
};

const optCriticalityLevel: Fig.Option = {
  name: "--criticality-level",
  description:
    "Criticality level. Can contain only lowercase letters, numeric characters, underscores, and dashes. Can have a maximum length of 63 characters. Deprecated: Please refer to type instead",
  args: {
    name: "CRITICALITY_LEVEL",
    description: "String",
  },
};

const optDeveloperConnectExportConfigBranch: Fig.Option = {
  name: "--developer-connect-export-config-branch",
  description:
    "The branch in repo to which the content such as Infrastructure as Code (IaC) should be written to. If empty, ADC will create a branch and push the changes",
  args: {
    name: "DEVELOPER_CONNECT_EXPORT_CONFIG_BRANCH",
    description: "String",
  },
};

const optDeveloperConnectExportConfigDir: Fig.Option = {
  name: "--developer-connect-export-config-dir",
  description:
    "Directory, relative to the source repo, where content such as Infrastructure as Code (IaC) will be stored. This must be a relative path.To specify the root directory, use '/'. If the path or any subdirectories do not exist, they will be created",
  priority: 100,
  args: {
    name: "DEVELOPER_CONNECT_EXPORT_CONFIG_DIR",
    description: "String",
  },
};

const optDeveloperConnectExportConfigRepoUri: Fig.Option = {
  name: "--developer-connect-export-config-repo-uri",
  description:
    "ID of the gitRepositoryLink or fully qualified identifier for the gitRepositoryLink",
  priority: 100,
  args: {
    name: "DEVELOPER_CONNECT_EXPORT_CONFIG_REPO_URI",
    description: "String",
  },
};

const optEnvironment: Fig.Option = {
  name: "--environment",
  description:
    "Environment name. Can contain only lowercase letters, numeric characters, underscores, and dashes. Can have a maximum length of 63 characters. Deprecated: Please refer to type instead",
  args: {
    name: "ENVIRONMENT",
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

const optIacFormat: Fig.Option = {
  name: "--iac-format",
  description: "The IaC format to generate. _IAC_FORMAT_ must be one of:",
  args: {
    name: "IAC_FORMAT",
    suggestions: ["helm", "terraform"],
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
  description: "The Cloud location for the application",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description: "The Cloud location for the space",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation4: Fig.Option = {
  name: "--location",
  description: "The location id of the application resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation5: Fig.Option = {
  name: "--location",
  description: "The location id of the applicationTemplate resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation6: Fig.Option = {
  name: "--location",
  description: "The location id of the catalog resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation7: Fig.Option = {
  name: "--location",
  description: "The location id of the component resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation8: Fig.Option = {
  name: "--location",
  description: "The location id of the operation resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation9: Fig.Option = {
  name: "--location",
  description: "The location id of the policy resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation10: Fig.Option = {
  name: "--location",
  description: "The location id of the revision resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation11: Fig.Option = {
  name: "--location",
  description: "The location id of the share resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation12: Fig.Option = {
  name: "--location",
  description: "The location id of the space resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation13: Fig.Option = {
  name: "--location",
  description: "The location id of the template resource",
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

const optSpace: Fig.Option = {
  name: "--space",
  description: "ID of the space or fully qualified identifier for the space",
  priority: 100,
  args: {
    name: "SPACE",
    description: "String",
  },
};

const optSpace2: Fig.Option = {
  name: "--space",
  description: "The ID of the space",
  args: {
    name: "SPACE",
    description: "String",
  },
};

const optSpace3: Fig.Option = {
  name: "--space",
  description: "The space id of the application resource",
  args: {
    name: "SPACE",
    description: "String",
  },
};

const optSpace4: Fig.Option = {
  name: "--space",
  description: "The space id of the applicationTemplate resource",
  args: {
    name: "SPACE",
    description: "String",
  },
};

const optSpace5: Fig.Option = {
  name: "--space",
  description: "The space id of the catalog resource",
  args: {
    name: "SPACE",
    description: "String",
  },
};

const optSpace6: Fig.Option = {
  name: "--space",
  description: "The space id of the component resource",
  args: {
    name: "SPACE",
    description: "String",
  },
};

const optSpace7: Fig.Option = {
  name: "--space",
  description: "The space id of the policy resource",
  args: {
    name: "SPACE",
    description: "String",
  },
};

const optSpace8: Fig.Option = {
  name: "--space",
  description: "The space id of the revision resource",
  args: {
    name: "SPACE",
    description: "String",
  },
};

const optSpace9: Fig.Option = {
  name: "--space",
  description: "The space id of the share resource",
  args: {
    name: "SPACE",
    description: "String",
  },
};

const optSpace10: Fig.Option = {
  name: "--space",
  description: "The space id of the template resource",
  args: {
    name: "SPACE",
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
  name: "design-center",
  description: "Manage Application Design Center resources",
  subcommands: [
    {
      name: "locations",
      description: "Manage Design Center Locations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Design Center location",
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
          name: "fetch-frameworks",
          description: "Fetch frameworks available for assessment",
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
            {
              name: "--projects",
              description:
                "The list of projects to fetch frameworks for. Each entry can be a simple project ID or the full resource name projects/my-project. Note that this is separate from the global --project flag which identifies the project owning the Design Center resource",
              args: {
                name: "PROJECTS",
                description: "List",
              },
            },
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
          description: "List Design Center locations",
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
      description: "Manage Operation resources",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel operations",
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
            optLocation8,
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
          description: "Delete operations",
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
            optLocation8,
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
          description: "Describe operations",
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
            optLocation8,
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
            optLocation8,
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
    {
      name: "spaces",
      description: "Manage space resources",
      subcommands: [
        {
          name: "application-templates",
          description: "Manage application template resources",
          subcommands: [
            {
              name: "commit",
              description: "Commit an application template",
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
                optSpace4,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "APPLICATION_TEMPLATE",
                description:
                  "ID of the applicationTemplate or fully qualified identifier for the applicationTemplate",
              },
            },
            {
              name: "components",
              description: "Manage component resources",
              subcommands: [
                {
                  name: "connections",
                  description: "Manage connection resources",
                  subcommands: [
                    {
                      name: "create",
                      description: "Create a connection",
                      options: [
                        optAccessTokenFile,
                        optAccount,
                        {
                          name: "--application-template",
                          description:
                            "For resources [connection, destination-component-uri], provides fallback value for resource application-template attribute. When the resource's full URI path is not provided, application-template will fallback to this flag value",
                          args: {
                            name: "APPLICATION_TEMPLATE",
                            description: "String",
                          },
                        },
                        optBillingProject,
                        optComponent,
                        optConfiguration,
                        {
                          name: "--destination-component-parameters",
                          description:
                            "The parameters of the connection associated with the destination component",
                          args: {
                            name: "DESTINATION_COMPONENT_PARAMETERS",
                          },
                        },
                        {
                          name: "--destination-component-uri",
                          description:
                            "ID of the component or fully qualified identifier for the component",
                          priority: 100,
                          args: {
                            name: "DESTINATION_COMPONENT_URI",
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
                          description:
                            "For resources [connection, destination-component-uri], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
                          args: {
                            name: "LOCATION",
                            description: "String",
                          },
                        },
                        optLogHttp,
                        optProject,
                        optQuiet,
                        {
                          name: "--source-component-parameters",
                          description:
                            "The parameters of the connection associated with the source component",
                          args: {
                            name: "SOURCE_COMPONENT_PARAMETERS",
                          },
                        },
                        {
                          name: "--space",
                          description:
                            "For resources [connection, destination-component-uri], provides fallback value for resource space attribute. When the resource's full URI path is not provided, space will fallback to this flag value",
                          args: {
                            name: "SPACE",
                            description: "String",
                          },
                        },
                        optTraceToken,
                        optUserOutputEnabled,
                        optVerbosity,
                      ],
                      args: {
                        name: "CONNECTION",
                        description:
                          "ID of the connection or fully qualified identifier for the connection",
                      },
                    },
                    {
                      name: "delete",
                      description: "Delete a connection",
                      options: [
                        optAccessTokenFile,
                        optAccount,
                        {
                          name: "--application-template",
                          description:
                            "The applicationTemplate id of the connection resource",
                          args: {
                            name: "APPLICATION_TEMPLATE",
                            description: "String",
                          },
                        },
                        optBillingProject,
                        optComponent,
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
                          description:
                            "The location id of the connection resource",
                          args: {
                            name: "LOCATION",
                            description: "String",
                          },
                        },
                        optLogHttp,
                        optProject,
                        optQuiet,
                        {
                          name: "--space",
                          description:
                            "The space id of the connection resource",
                          args: {
                            name: "SPACE",
                            description: "String",
                          },
                        },
                        optTraceToken,
                        optUserOutputEnabled,
                        optVerbosity,
                      ],
                      args: {
                        name: "CONNECTION",
                        description:
                          "ID of the connection or fully qualified identifier for the connection",
                      },
                    },
                    {
                      name: "describe",
                      description: "Describe a connection",
                      options: [
                        optAccessTokenFile,
                        optAccount,
                        {
                          name: "--application-template",
                          description:
                            "The applicationTemplate id of the connection resource",
                          args: {
                            name: "APPLICATION_TEMPLATE",
                            description: "String",
                          },
                        },
                        optBillingProject,
                        optComponent,
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
                          description:
                            "The location id of the connection resource",
                          args: {
                            name: "LOCATION",
                            description: "String",
                          },
                        },
                        optLogHttp,
                        optProject,
                        optQuiet,
                        {
                          name: "--space",
                          description:
                            "The space id of the connection resource",
                          args: {
                            name: "SPACE",
                            description: "String",
                          },
                        },
                        optTraceToken,
                        optUserOutputEnabled,
                        optVerbosity,
                      ],
                      args: {
                        name: "CONNECTION",
                        description:
                          "ID of the connection or fully qualified identifier for the connection",
                      },
                    },
                    {
                      name: "list",
                      description: "List connections",
                      options: [
                        optAccessTokenFile,
                        optAccount,
                        optApplicationTemplate2,
                        optBillingProject,
                        {
                          name: "--component",
                          description:
                            "ID of the component or fully qualified identifier for the component",
                          priority: 100,
                          args: {
                            name: "COMPONENT",
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
                        optLocation7,
                        optLogHttp,
                        optNoUri,
                        optPageSize,
                        optProject,
                        optQuiet,
                        optSortBy,
                        optSpace6,
                        optTraceToken,
                        optUri,
                        optUserOutputEnabled,
                        optVerbosity,
                      ],
                    },
                    {
                      name: "update",
                      description: "Update a connection",
                      options: [
                        optAccessTokenFile,
                        optAccount,
                        {
                          name: "--add-destination-component-parameters",
                          description:
                            "Add new value to destination_component_parameters list. The parameters of the connection associated with the destination component",
                          args: {
                            name: "ADD_DESTINATION_COMPONENT_PARAMETERS",
                          },
                        },
                        {
                          name: "--add-source-component-parameters",
                          description:
                            "Add new value to source_component_parameters list. The parameters of the connection associated with the source component",
                          args: {
                            name: "ADD_SOURCE_COMPONENT_PARAMETERS",
                          },
                        },
                        {
                          name: "--application-template",
                          description:
                            "For resources [connection, destination-component-uri], provides fallback value for resource application-template attribute. When the resource's full URI path is not provided, application-template will fallback to this flag value",
                          args: {
                            name: "APPLICATION_TEMPLATE",
                            description: "String",
                          },
                        },
                        optBillingProject,
                        {
                          name: "--clear-destination-component-parameters",
                          description:
                            "Clear destination_component_parameters value and set to empty list",
                        },
                        {
                          name: "--clear-source-component-parameters",
                          description:
                            "Clear source_component_parameters value and set to empty list",
                        },
                        optComponent,
                        optConfiguration,
                        {
                          name: "--destination-component-parameters",
                          description:
                            "Set destination_component_parameters to new value. The parameters of the connection associated with the destination component",
                          args: {
                            name: "DESTINATION_COMPONENT_PARAMETERS",
                          },
                        },
                        {
                          name: "--destination-component-uri",
                          description:
                            "ID of the component or fully qualified identifier for the component",
                          priority: 100,
                          args: {
                            name: "DESTINATION_COMPONENT_URI",
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
                          description:
                            "For resources [connection, destination-component-uri], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
                          args: {
                            name: "LOCATION",
                            description: "String",
                          },
                        },
                        optLogHttp,
                        {
                          name: "--no-clear-destination-component-parameters",
                          description:
                            "Clear destination_component_parameters value and set to empty list",
                          hidden: true,
                        },
                        {
                          name: "--no-clear-source-component-parameters",
                          description:
                            "Clear source_component_parameters value and set to empty list",
                          hidden: true,
                        },
                        optProject,
                        optQuiet,
                        {
                          name: "--remove-destination-component-parameters",
                          description:
                            "Remove existing value from destination_component_parameters list. The parameters of the connection associated with the destination component",
                          args: {
                            name: "REMOVE_DESTINATION_COMPONENT_PARAMETERS",
                          },
                        },
                        {
                          name: "--remove-source-component-parameters",
                          description:
                            "Remove existing value from source_component_parameters list. The parameters of the connection associated with the source component",
                          args: {
                            name: "REMOVE_SOURCE_COMPONENT_PARAMETERS",
                          },
                        },
                        {
                          name: "--source-component-parameters",
                          description:
                            "Set source_component_parameters to new value. The parameters of the connection associated with the source component",
                          args: {
                            name: "SOURCE_COMPONENT_PARAMETERS",
                          },
                        },
                        {
                          name: "--space",
                          description:
                            "For resources [connection, destination-component-uri], provides fallback value for resource space attribute. When the resource's full URI path is not provided, space will fallback to this flag value",
                          args: {
                            name: "SPACE",
                            description: "String",
                          },
                        },
                        optTraceToken,
                        optUserOutputEnabled,
                        optVerbosity,
                      ],
                      args: {
                        name: "CONNECTION",
                        description:
                          "ID of the connection or fully qualified identifier for the connection",
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
                  name: "create",
                  description: "Create a component",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    {
                      name: "--application-info-apphub-id",
                      description:
                        "The application ID of the apphub application. The ID must be 1-63 characters long and should match the regular expression `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`",
                      priority: 100,
                      args: {
                        name: "APPLICATION_INFO_APPHUB_ID",
                        description: "String",
                      },
                    },
                    {
                      name: "--application-info-deployment-region",
                      description:
                        "Deployment region for the component. If the scope is set to REGIONAL, then the apphub application is created in this region, e.g. `us-central1`",
                      args: {
                        name: "APPLICATION_INFO_DEPLOYMENT_REGION",
                        description: "String",
                      },
                    },
                    {
                      name: "--application-info-display-name",
                      description:
                        "Display name for the application. The number of characters should be less than 64 characters",
                      args: {
                        name: "APPLICATION_INFO_DISPLAY_NAME",
                        description: "String",
                      },
                    },
                    optApplicationTemplate2,
                    {
                      name: "--attributes-business-owners",
                      description:
                        "Business team that ensures user needs are met and value is delivered",
                      args: {
                        name: "ATTRIBUTES_BUSINESS_OWNERS",
                      },
                    },
                    {
                      name: "--attributes-developer-owners",
                      description:
                        "Developer team that owns development and coding",
                      args: {
                        name: "ATTRIBUTES_DEVELOPER_OWNERS",
                      },
                    },
                    {
                      name: "--attributes-operator-owners",
                      description:
                        "Operator team that ensures runtime and operations",
                      args: {
                        name: "ATTRIBUTES_OPERATOR_OWNERS",
                      },
                    },
                    optBillingProject,
                    optConfiguration,
                    optCriticalityLevel,
                    {
                      name: "--criticality-mission-critical",
                      description:
                        "Indicates mission-critical Application, Service, or Workload. Deprecated: Please refer to type instead",
                    },
                    {
                      name: "--criticality-type",
                      description:
                        "Criticality Type. _CRITICALITY_TYPE_ must be one of:",
                      priority: 100,
                      args: {
                        name: "CRITICALITY_TYPE",
                        suggestions: [
                          "high",
                          "low",
                          "medium",
                          "mission-critical",
                        ],
                      },
                    },
                    {
                      name: "--display-name",
                      description: "The component display name",
                      args: {
                        name: "DISPLAY_NAME",
                        description: "String",
                      },
                    },
                    optEnvironment,
                    {
                      name: "--environment-type",
                      description:
                        "Environment Type. _ENVIRONMENT_TYPE_ must be one of:",
                      priority: 100,
                      args: {
                        name: "ENVIRONMENT_TYPE",
                        suggestions: [
                          "development",
                          "production",
                          "staging",
                          "test",
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
                    optLocation7,
                    optLogHttp,
                    {
                      name: "--no-criticality-mission-critical",
                      description:
                        "Indicates mission-critical Application, Service, or Workload. Deprecated: Please refer to type instead",
                      hidden: true,
                    },
                    {
                      name: "--parameters",
                      description: "The component parameters",
                      args: {
                        name: "PARAMETERS",
                      },
                    },
                    optProject,
                    optQuiet,
                    {
                      name: "--scope-type",
                      description: "Scope Type. _SCOPE_TYPE_ must be one of:",
                      priority: 100,
                      args: {
                        name: "SCOPE_TYPE",
                        suggestions: ["global", "regional"],
                      },
                    },
                    {
                      name: "--shared-template-revision-uri",
                      description:
                        "The shared template used to generate the component",
                      priority: 100,
                      args: {
                        name: "SHARED_TEMPLATE_REVISION_URI",
                        description: "String",
                      },
                    },
                    optSpace6,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "COMPONENT",
                    description:
                      "ID of the component or fully qualified identifier for the component",
                  },
                },
                {
                  name: "delete",
                  description: "Delete a component",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optApplicationTemplate2,
                    optBillingProject,
                    optConfiguration,
                    optFlagsFile,
                    optFlatten,
                    {
                      name: "--force",
                      description:
                        "If set to true, the component's children are also deleted. If false, the component is only deleted if it has no children",
                    },
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLocation7,
                    optLogHttp,
                    {
                      name: "--no-force",
                      description:
                        "If set to true, the component's children are also deleted. If false, the component is only deleted if it has no children",
                      hidden: true,
                    },
                    optProject,
                    optQuiet,
                    optSpace6,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "COMPONENT",
                    description:
                      "ID of the component or fully qualified identifier for the component",
                  },
                },
                {
                  name: "describe",
                  description: "Describe a component",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optApplicationTemplate2,
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
                    optSpace6,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "COMPONENT",
                    description:
                      "ID of the component or fully qualified identifier for the component",
                  },
                },
                {
                  name: "list",
                  description: "List components",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optApplicationTemplate,
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
                    optLocation5,
                    optLogHttp,
                    optNoUri,
                    optPageSize,
                    optProject,
                    optQuiet,
                    optSortBy,
                    optSpace4,
                    optTraceToken,
                    optUri,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                },
                {
                  name: "update",
                  description: "Update a component",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    {
                      name: "--add-attributes-business-owners",
                      description:
                        "Add new value to attributes_business_owners list. Business team that ensures user needs are met and value is delivered",
                      args: {
                        name: "ADD_ATTRIBUTES_BUSINESS_OWNERS",
                      },
                    },
                    {
                      name: "--add-attributes-developer-owners",
                      description:
                        "Add new value to attributes_developer_owners list. Developer team that owns development and coding",
                      args: {
                        name: "ADD_ATTRIBUTES_DEVELOPER_OWNERS",
                      },
                    },
                    {
                      name: "--add-attributes-operator-owners",
                      description:
                        "Add new value to attributes_operator_owners list. Operator team that ensures runtime and operations",
                      args: {
                        name: "ADD_ATTRIBUTES_OPERATOR_OWNERS",
                      },
                    },
                    {
                      name: "--add-parameters",
                      description:
                        "Add new value to parameters list. The component parameters",
                      args: {
                        name: "ADD_PARAMETERS",
                      },
                    },
                    {
                      name: "--application-info-apphub-id",
                      description:
                        "The application ID of the apphub application. The ID must be 1-63 characters long and should match the regular expression `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`",
                      args: {
                        name: "APPLICATION_INFO_APPHUB_ID",
                        description: "String",
                      },
                    },
                    {
                      name: "--application-info-deployment-region",
                      description:
                        "Deployment region for the component. If the scope is set to REGIONAL, then the apphub application is created in this region, e.g. `us-central1`",
                      args: {
                        name: "APPLICATION_INFO_DEPLOYMENT_REGION",
                        description: "String",
                      },
                    },
                    {
                      name: "--application-info-display-name",
                      description:
                        "Display name for the application. The number of characters should be less than 64 characters",
                      args: {
                        name: "APPLICATION_INFO_DISPLAY_NAME",
                        description: "String",
                      },
                    },
                    optApplicationTemplate2,
                    {
                      name: "--attributes-business-owners",
                      description:
                        "Set attributes_business_owners to new value. Business team that ensures user needs are met and value is delivered",
                      args: {
                        name: "ATTRIBUTES_BUSINESS_OWNERS",
                      },
                    },
                    {
                      name: "--attributes-developer-owners",
                      description:
                        "Set attributes_developer_owners to new value. Developer team that owns development and coding",
                      args: {
                        name: "ATTRIBUTES_DEVELOPER_OWNERS",
                      },
                    },
                    {
                      name: "--attributes-operator-owners",
                      description:
                        "Set attributes_operator_owners to new value. Operator team that ensures runtime and operations",
                      args: {
                        name: "ATTRIBUTES_OPERATOR_OWNERS",
                      },
                    },
                    optBillingProject,
                    {
                      name: "--clear-application-info",
                      description:
                        "Set component.applicationInfo back to default value",
                    },
                    {
                      name: "--clear-attributes-business-owners",
                      description:
                        "Clear attributes_business_owners value and set to empty list",
                    },
                    {
                      name: "--clear-attributes-developer-owners",
                      description:
                        "Clear attributes_developer_owners value and set to empty list",
                    },
                    {
                      name: "--clear-attributes-operator-owners",
                      description:
                        "Clear attributes_operator_owners value and set to empty list",
                    },
                    {
                      name: "--clear-parameters",
                      description:
                        "Clear parameters value and set to empty list",
                    },
                    optConfiguration,
                    optCriticalityLevel,
                    {
                      name: "--criticality-mission-critical",
                      description:
                        "Indicates mission-critical Application, Service, or Workload. Deprecated: Please refer to type instead. Use *--criticality-mission-critical* to enable and *--no-criticality-mission-critical* to disable",
                    },
                    {
                      name: "--criticality-type",
                      description:
                        "Criticality Type. _CRITICALITY_TYPE_ must be one of:",
                      args: {
                        name: "CRITICALITY_TYPE",
                        suggestions: [
                          "high",
                          "low",
                          "medium",
                          "mission-critical",
                        ],
                      },
                    },
                    {
                      name: "--display-name",
                      description: "The component display name",
                      args: {
                        name: "DISPLAY_NAME",
                        description: "String",
                      },
                    },
                    optEnvironment,
                    {
                      name: "--environment-type",
                      description:
                        "Environment Type. _ENVIRONMENT_TYPE_ must be one of:",
                      args: {
                        name: "ENVIRONMENT_TYPE",
                        suggestions: [
                          "development",
                          "production",
                          "staging",
                          "test",
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
                    optLocation7,
                    optLogHttp,
                    {
                      name: "--no-clear-application-info",
                      description:
                        "Set component.applicationInfo back to default value",
                      hidden: true,
                    },
                    {
                      name: "--no-clear-attributes-business-owners",
                      description:
                        "Clear attributes_business_owners value and set to empty list",
                      hidden: true,
                    },
                    {
                      name: "--no-clear-attributes-developer-owners",
                      description:
                        "Clear attributes_developer_owners value and set to empty list",
                      hidden: true,
                    },
                    {
                      name: "--no-clear-attributes-operator-owners",
                      description:
                        "Clear attributes_operator_owners value and set to empty list",
                      hidden: true,
                    },
                    {
                      name: "--no-clear-parameters",
                      description:
                        "Clear parameters value and set to empty list",
                      hidden: true,
                    },
                    {
                      name: "--no-criticality-mission-critical",
                      description:
                        "Indicates mission-critical Application, Service, or Workload. Deprecated: Please refer to type instead",
                    },
                    {
                      name: "--parameters",
                      description:
                        "Set parameters to new value. The component parameters",
                      args: {
                        name: "PARAMETERS",
                      },
                    },
                    optProject,
                    optQuiet,
                    {
                      name: "--remove-attributes-business-owners",
                      description:
                        "Remove existing value from attributes_business_owners list. Business team that ensures user needs are met and value is delivered",
                      args: {
                        name: "REMOVE_ATTRIBUTES_BUSINESS_OWNERS",
                      },
                    },
                    {
                      name: "--remove-attributes-developer-owners",
                      description:
                        "Remove existing value from attributes_developer_owners list. Developer team that owns development and coding",
                      args: {
                        name: "REMOVE_ATTRIBUTES_DEVELOPER_OWNERS",
                      },
                    },
                    {
                      name: "--remove-attributes-operator-owners",
                      description:
                        "Remove existing value from attributes_operator_owners list. Operator team that ensures runtime and operations",
                      args: {
                        name: "REMOVE_ATTRIBUTES_OPERATOR_OWNERS",
                      },
                    },
                    {
                      name: "--remove-parameters",
                      description:
                        "Remove existing value from parameters list. The component parameters",
                      args: {
                        name: "REMOVE_PARAMETERS",
                      },
                    },
                    {
                      name: "--scope-type",
                      description: "Scope Type. _SCOPE_TYPE_ must be one of:",
                      args: {
                        name: "SCOPE_TYPE",
                        suggestions: ["global", "regional"],
                      },
                    },
                    optSpace6,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "COMPONENT",
                    description:
                      "ID of the component or fully qualified identifier for the component",
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
              name: "create",
              description: "Create an application template",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--application-parameters",
                  description:
                    "Parameters to apply to all components in an application. You can specify projectID and region",
                  args: {
                    name: "APPLICATION_PARAMETERS",
                  },
                },
                optBillingProject,
                {
                  name: "--composition-type",
                  description:
                    "The composition type of the applicationTemplate: STANDARD OR COMPOSITE. This is a create time only param. In future, we may support conversion from STANDARD to COMPOSITE. _COMPOSITION_TYPE_ must be one of:",
                  args: {
                    name: "COMPOSITION_TYPE",
                    suggestions: ["composite", "standard"],
                  },
                },
                optConfiguration,
                {
                  name: "--description",
                  description: "Application template description",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--display-name",
                  description: "Application template display name",
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
                {
                  name: "--root-input-variables",
                  description:
                    "Root level input variables of the application template",
                  args: {
                    name: "ROOT_INPUT_VARIABLES",
                  },
                },
                {
                  name: "--root-output-variables",
                  description:
                    "Root level output variables of the application template",
                  args: {
                    name: "ROOT_OUTPUT_VARIABLES",
                  },
                },
                {
                  name: "--saas-runtime-context-names",
                  description:
                    "The SaaS names. Format for each SaaS: projects/{project}/locations/{location}/saas/{saas}",
                  args: {
                    name: "SAAS_RUNTIME_CONTEXT_NAMES",
                    description: "List",
                  },
                },
                optSpace4,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "APPLICATION_TEMPLATE",
                description:
                  "ID of the applicationTemplate or fully qualified identifier for the applicationTemplate",
              },
            },
            {
              name: "delete",
              description: "Delete an application template",
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
                    "If set to true, the application template's children are also deleted. If false, the application template is only deleted if it has no children",
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
                    "If set to true, the application template's children are also deleted. If false, the application template is only deleted if it has no children",
                  hidden: true,
                },
                optProject,
                optQuiet,
                optSpace4,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "APPLICATION_TEMPLATE",
                description:
                  "ID of the applicationTemplate or fully qualified identifier for the applicationTemplate",
              },
            },
            {
              name: "describe",
              description: "Describe an application template",
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
                optSpace4,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "APPLICATION_TEMPLATE",
                description:
                  "ID of the applicationTemplate or fully qualified identifier for the applicationTemplate",
              },
            },
            {
              name: "generate",
              description: "Generate IaC for an application template",
              options: [
                optAccessTokenFile,
                optAccount,
                optArtifactLocationGcsUri,
                optBillingProject,
                optConfiguration,
                optConnection,
                optDeveloperConnectExportConfigBranch,
                optDeveloperConnectExportConfigDir,
                optDeveloperConnectExportConfigRepoUri,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--gcs-uri",
                  description:
                    "The Cloud Storage URI to write the generated IaC to",
                  args: {
                    name: "GCS_URI",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optIacFormat,
                optImpersonateServiceAccount,
                {
                  name: "--location",
                  description:
                    "For resources [application_template, developer-connect-export-config-repo-uri], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                optProject,
                optQuiet,
                optSpace4,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "APPLICATION_TEMPLATE",
                description:
                  "ID of the applicationTemplate or fully qualified identifier for the applicationTemplate",
              },
            },
            {
              name: "generate-assessment-report",
              description:
                "Generate a best practice assessment report generator for an application template",
              hidden: true,
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
                {
                  name: "--location",
                  description:
                    "The Cloud location for the application_template",
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                {
                  name: "--service-account",
                  description:
                    "The full resource name of the service account to use for this assessment report generation operation",
                  args: {
                    name: "SERVICE_ACCOUNT",
                    description: "String",
                  },
                },
                optSpace2,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "APPLICATION_TEMPLATE",
                description:
                  "ID of the application_template or fully qualified identifier for the application_template",
              },
            },
            {
              name: "import",
              description: "Import to an application template",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--application-template",
                  description:
                    "For resources [application-template-revision-uri, application_template], provides fallback value for resource application-template attribute. When the resource's full URI path is not provided, application-template will fallback to this flag value",
                  args: {
                    name: "APPLICATION_TEMPLATE",
                    description: "String",
                  },
                },
                {
                  name: "--application-template-revision-uri",
                  description:
                    "ID of the revision or fully qualified identifier for the revision",
                  priority: 100,
                  args: {
                    name: "APPLICATION_TEMPLATE_REVISION_URI",
                    description: "String",
                  },
                },
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
                  description:
                    "For resources [application-template-revision-uri, application_template, shared-template-revision-uri], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                optProject,
                optQuiet,
                {
                  name: "--shared-template",
                  description: "The sharedTemplate id of the revision resource",
                  args: {
                    name: "SHARED_TEMPLATE",
                    description: "String",
                  },
                },
                {
                  name: "--shared-template-revision-uri",
                  description:
                    "ID of the revision or fully qualified identifier for the revision",
                  priority: 100,
                  args: {
                    name: "SHARED_TEMPLATE_REVISION_URI",
                    description: "String",
                  },
                },
                {
                  name: "--space",
                  description:
                    "For resources [application-template-revision-uri, application_template, shared-template-revision-uri], provides fallback value for resource space attribute. When the resource's full URI path is not provided, space will fallback to this flag value",
                  args: {
                    name: "SPACE",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "import-iac",
              description:
                "Import Infrastructure as Code (IaC) for an Application Template",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--allow-partial-import",
                  description:
                    "If set, partially import valid IaC changes and ignore invalid ones",
                },
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--gcs-uri",
                  description:
                    "The Cloud Storage URI of the Terraform code (e.g., gs://my-bucket/iac)",
                  args: {
                    name: "GCS_URI",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                {
                  name: "--iac-module-from-file",
                  description:
                    "Path to a local YAML or JSON file containing the IaC module definition. Use a full or relative path to a local file containing the value of iac_module",
                  args: {
                    name: "IAC_MODULE_FROM_FILE",
                    template: "filepaths",
                  },
                },
                optImpersonateServiceAccount,
                {
                  name: "--location",
                  description:
                    "The Cloud location for the application_template",
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                {
                  name: "--no-allow-partial-import",
                  description:
                    "If set, partially import valid IaC changes and ignore invalid ones",
                  hidden: true,
                },
                {
                  name: "--no-validate-iac",
                  description: "Validate the IaC without performing the import",
                  hidden: true,
                },
                optProject,
                optQuiet,
                optSpace2,
                optTraceToken,
                optUserOutputEnabled,
                {
                  name: "--validate-iac",
                  description: "Validate the IaC without performing the import",
                },
                optVerbosity,
              ],
              args: {
                name: "APPLICATION_TEMPLATE",
                description:
                  "ID of the application_template or fully qualified identifier for the application_template",
              },
            },
            {
              name: "list",
              description: "List application templates",
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
                optLocation12,
                optLogHttp,
                optNoUri,
                optPageSize,
                optProject,
                optQuiet,
                optSortBy,
                optSpace,
                optTraceToken,
                optUri,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "policies",
              description: "The policies command group",
              hidden: true,
              subcommands: [
                {
                  name: "create",
                  description: "Create a policy",
                  hidden: true,
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optApplicationTemplate3,
                    {
                      name: "--apply-conditions",
                      description:
                        "Conditions for applying the policy. Condition accepts AppTemplate parameters like criticality, environment only",
                      args: {
                        name: "APPLY_CONDITIONS",
                      },
                    },
                    optBillingProject,
                    optConfiguration,
                    {
                      name: "--description",
                      description: "The policy description",
                      args: {
                        name: "DESCRIPTION",
                        description: "String",
                      },
                    },
                    {
                      name: "--display-name",
                      description: "The policy display name",
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
                    optLocation9,
                    optLogHttp,
                    {
                      name: "--policy-revision-uri",
                      description: "URI of the policy revision",
                      args: {
                        name: "POLICY_REVISION_URI",
                        description: "String",
                      },
                    },
                    {
                      name: "--policy-type",
                      description:
                        "The policy type. Policy type will be used to determine the domain of the policy. _POLICY_TYPE_ must be (only one value is supported):",
                      priority: 100,
                      args: {
                        name: "POLICY_TYPE",
                        suggestions: ["compliance-framework"],
                      },
                    },
                    {
                      name: "--policy-uri",
                      description: "URI of the policy",
                      args: {
                        name: "POLICY_URI",
                        description: "String",
                      },
                    },
                    optProject,
                    optQuiet,
                    optSpace7,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "POLICY",
                    description:
                      "ID of the policy or fully qualified identifier for the policy",
                  },
                },
                {
                  name: "delete",
                  description: "Delete a policy",
                  hidden: true,
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optApplicationTemplate3,
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
                    optLocation9,
                    optLogHttp,
                    optProject,
                    optQuiet,
                    optSpace7,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "POLICY",
                    description:
                      "ID of the policy or fully qualified identifier for the policy",
                  },
                },
                {
                  name: "describe",
                  description: "Describe a policy",
                  hidden: true,
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optApplicationTemplate3,
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
                    optLocation9,
                    optLogHttp,
                    optProject,
                    optQuiet,
                    optSpace7,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "POLICY",
                    description:
                      "ID of the policy or fully qualified identifier for the policy",
                  },
                },
                {
                  name: "list",
                  description: "List policies",
                  hidden: true,
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optApplicationTemplate,
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
                    optLocation5,
                    optLogHttp,
                    optNoUri,
                    optPageSize,
                    optProject,
                    optQuiet,
                    optSortBy,
                    optSpace4,
                    optTraceToken,
                    optUri,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                },
                {
                  name: "update",
                  description: "Update a policy",
                  hidden: true,
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    {
                      name: "--add-apply-conditions",
                      description:
                        "Add new value to apply_conditions list. Conditions for applying the policy. Condition accepts AppTemplate parameters like criticality, environment only",
                      args: {
                        name: "ADD_APPLY_CONDITIONS",
                      },
                    },
                    optApplicationTemplate3,
                    {
                      name: "--apply-conditions",
                      description:
                        "Set apply_conditions to new value. Conditions for applying the policy. Condition accepts AppTemplate parameters like criticality, environment only",
                      args: {
                        name: "APPLY_CONDITIONS",
                      },
                    },
                    optBillingProject,
                    {
                      name: "--clear-apply-conditions",
                      description:
                        "Clear apply_conditions value and set to empty list",
                    },
                    optConfiguration,
                    {
                      name: "--description",
                      description: "The policy description",
                      args: {
                        name: "DESCRIPTION",
                        description: "String",
                      },
                    },
                    {
                      name: "--display-name",
                      description: "The policy display name",
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
                    optLocation9,
                    optLogHttp,
                    {
                      name: "--no-clear-apply-conditions",
                      description:
                        "Clear apply_conditions value and set to empty list",
                      hidden: true,
                    },
                    {
                      name: "--policy-revision-uri",
                      description: "URI of the policy revision",
                      args: {
                        name: "POLICY_REVISION_URI",
                        description: "String",
                      },
                    },
                    {
                      name: "--policy-type",
                      description:
                        "The policy type. Policy type will be used to determine the domain of the policy. _POLICY_TYPE_ must be (only one value is supported):",
                      args: {
                        name: "POLICY_TYPE",
                        suggestions: ["compliance-framework"],
                      },
                    },
                    {
                      name: "--policy-uri",
                      description: "URI of the policy",
                      args: {
                        name: "POLICY_URI",
                        description: "String",
                      },
                    },
                    optProject,
                    optQuiet,
                    {
                      name: "--remove-apply-conditions",
                      description:
                        "Remove existing value from apply_conditions list. Conditions for applying the policy. Condition accepts AppTemplate parameters like criticality, environment only",
                      args: {
                        name: "REMOVE_APPLY_CONDITIONS",
                      },
                    },
                    optSpace7,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "POLICY",
                    description:
                      "ID of the policy or fully qualified identifier for the policy",
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
              name: "revisions",
              description: "Manage application template revision resources",
              subcommands: [
                {
                  name: "delete",
                  description: "Delete an application template revision",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optApplicationTemplate4,
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
                    optLocation10,
                    optLogHttp,
                    optProject,
                    optQuiet,
                    optSpace8,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "REVISION",
                    description:
                      "ID of the revision or fully qualified identifier for the revision",
                  },
                },
                {
                  name: "describe",
                  description: "Describe an application template revision",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optApplicationTemplate4,
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
                    optLocation10,
                    optLogHttp,
                    optProject,
                    optQuiet,
                    optSpace8,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "REVISION",
                    description:
                      "ID of the revision or fully qualified identifier for the revision",
                  },
                },
                {
                  name: "generate",
                  description:
                    "Generate IaC for an application template revision",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optApplicationTemplate4,
                    optArtifactLocationGcsUri,
                    optBillingProject,
                    optConfiguration,
                    optConnection,
                    optDeveloperConnectExportConfigBranch,
                    optDeveloperConnectExportConfigDir,
                    optDeveloperConnectExportConfigRepoUri,
                    optFlagsFile,
                    optFlatten,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optIacFormat,
                    optImpersonateServiceAccount,
                    {
                      name: "--location",
                      description:
                        "For resources [revision, developer-connect-export-config-repo-uri], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
                      args: {
                        name: "LOCATION",
                        description: "String",
                      },
                    },
                    optLogHttp,
                    optProject,
                    optQuiet,
                    optSpace8,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "REVISION",
                    description:
                      "ID of the revision or fully qualified identifier for the revision",
                  },
                },
                {
                  name: "list",
                  description: "List application template revisions",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optApplicationTemplate,
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
                    optLocation5,
                    optLogHttp,
                    optNoUri,
                    optPageSize,
                    optProject,
                    optQuiet,
                    optSortBy,
                    optSpace4,
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
              name: "update",
              description: "Update an application template",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--add-application-parameters",
                  description:
                    "Add new value to application_parameters list. Parameters to apply to all components in an application. You can specify projectID and region",
                  args: {
                    name: "ADD_APPLICATION_PARAMETERS",
                  },
                },
                {
                  name: "--add-root-input-variables",
                  description:
                    "Add new value to root_input_variables list. Root level input variables of the application template",
                  args: {
                    name: "ADD_ROOT_INPUT_VARIABLES",
                  },
                },
                {
                  name: "--add-root-output-variables",
                  description:
                    "Add new value to root_output_variables list. Root level output variables of the application template",
                  args: {
                    name: "ADD_ROOT_OUTPUT_VARIABLES",
                  },
                },
                {
                  name: "--add-saas-runtime-context-names",
                  description:
                    "Add new value to saas_runtime_context_names list",
                  args: {
                    name: "ADD_SAAS_RUNTIME_CONTEXT_NAMES",
                  },
                },
                {
                  name: "--application-parameters",
                  description:
                    "Set application_parameters to new value. Parameters to apply to all components in an application. You can specify projectID and region",
                  args: {
                    name: "APPLICATION_PARAMETERS",
                  },
                },
                optBillingProject,
                {
                  name: "--clear-application-parameters",
                  description:
                    "Clear application_parameters value and set to empty list",
                },
                {
                  name: "--clear-root-input-variables",
                  description:
                    "Clear root_input_variables value and set to empty list",
                },
                {
                  name: "--clear-root-output-variables",
                  description:
                    "Clear root_output_variables value and set to empty list",
                },
                {
                  name: "--clear-saas-runtime-context",
                  description:
                    "Set applicationTemplate.saasRuntimeContext back to default value",
                },
                {
                  name: "--clear-saas-runtime-context-names",
                  description:
                    "Clear saas_runtime_context_names value and set to empty list",
                },
                optConfiguration,
                {
                  name: "--description",
                  description: "Application template description",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--display-name",
                  description: "Application template display name",
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
                {
                  name: "--no-clear-application-parameters",
                  description:
                    "Clear application_parameters value and set to empty list",
                  hidden: true,
                },
                {
                  name: "--no-clear-root-input-variables",
                  description:
                    "Clear root_input_variables value and set to empty list",
                  hidden: true,
                },
                {
                  name: "--no-clear-root-output-variables",
                  description:
                    "Clear root_output_variables value and set to empty list",
                  hidden: true,
                },
                {
                  name: "--no-clear-saas-runtime-context",
                  description:
                    "Set applicationTemplate.saasRuntimeContext back to default value",
                  hidden: true,
                },
                {
                  name: "--no-clear-saas-runtime-context-names",
                  description:
                    "Clear saas_runtime_context_names value and set to empty list",
                  hidden: true,
                },
                optProject,
                optQuiet,
                {
                  name: "--remove-application-parameters",
                  description:
                    "Remove existing value from application_parameters list. Parameters to apply to all components in an application. You can specify projectID and region",
                  args: {
                    name: "REMOVE_APPLICATION_PARAMETERS",
                  },
                },
                {
                  name: "--remove-root-input-variables",
                  description:
                    "Remove existing value from root_input_variables list. Root level input variables of the application template",
                  args: {
                    name: "REMOVE_ROOT_INPUT_VARIABLES",
                  },
                },
                {
                  name: "--remove-root-output-variables",
                  description:
                    "Remove existing value from root_output_variables list. Root level output variables of the application template",
                  args: {
                    name: "REMOVE_ROOT_OUTPUT_VARIABLES",
                  },
                },
                {
                  name: "--remove-saas-runtime-context-names",
                  description:
                    "Remove existing value from saas_runtime_context_names list",
                  args: {
                    name: "REMOVE_SAAS_RUNTIME_CONTEXT_NAMES",
                  },
                },
                {
                  name: "--root-input-variables",
                  description:
                    "Set root_input_variables to new value. Root level input variables of the application template",
                  args: {
                    name: "ROOT_INPUT_VARIABLES",
                  },
                },
                {
                  name: "--root-output-variables",
                  description:
                    "Set root_output_variables to new value. Root level output variables of the application template",
                  args: {
                    name: "ROOT_OUTPUT_VARIABLES",
                  },
                },
                {
                  name: "--saas-runtime-context-names",
                  description: "Set saas_runtime_context_names to new value",
                  args: {
                    name: "SAAS_RUNTIME_CONTEXT_NAMES",
                  },
                },
                optSpace4,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "APPLICATION_TEMPLATE",
                description:
                  "ID of the applicationTemplate or fully qualified identifier for the applicationTemplate",
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
          description: "Manage application resources",
          subcommands: [
            {
              name: "create",
              description: "Create an application",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--app-parameters",
                  description:
                    "A list of parameters to attach to the deployment source object, which is a catalog entry or application template snapshot",
                  args: {
                    name: "APP_PARAMETERS",
                  },
                },
                {
                  name: "--attributes-business-owners",
                  description:
                    "Business team that ensures user needs are met and value is delivered",
                  args: {
                    name: "ATTRIBUTES_BUSINESS_OWNERS",
                  },
                },
                {
                  name: "--attributes-developer-owners",
                  description:
                    "Developer team that owns development and coding",
                  args: {
                    name: "ATTRIBUTES_DEVELOPER_OWNERS",
                  },
                },
                {
                  name: "--attributes-operator-owners",
                  description:
                    "Operator team that ensures runtime and operations",
                  args: {
                    name: "ATTRIBUTES_OPERATOR_OWNERS",
                  },
                },
                optBillingProject,
                {
                  name: "--component-parameters",
                  description:
                    "A list of component parameters to associate with the application",
                  args: {
                    name: "COMPONENT_PARAMETERS",
                  },
                },
                {
                  name: "--composite-application-parameters-service-account-map",
                  description:
                    "A map from a component's URI to the deployment service account for composite application. key format: projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/components/{component} value format: projects/{project}/serviceAccounts/{email_address}",
                  args: {
                    name: "COMPOSITE_APPLICATION_PARAMETERS_SERVICE_ACCOUNT_MAP",
                  },
                },
                optConfiguration,
                {
                  name: "--connection-configs",
                  description: "Connection configuration for the application",
                  args: {
                    name: "CONNECTION_CONFIGS",
                  },
                },
                optCriticalityLevel,
                {
                  name: "--criticality-mission-critical",
                  description:
                    "Indicates mission-critical Application, Service, or Workload. Deprecated: Please refer to type instead",
                },
                {
                  name: "--criticality-type",
                  description:
                    "Criticality Type. _CRITICALITY_TYPE_ must be one of:",
                  priority: 100,
                  args: {
                    name: "CRITICALITY_TYPE",
                    suggestions: ["high", "low", "medium", "mission-critical"],
                  },
                },
                {
                  name: "--deployment-project",
                  description: "Deployment project of the application",
                  args: {
                    name: "DEPLOYMENT_PROJECT",
                    description: "String",
                  },
                },
                {
                  name: "--deployment-region",
                  description: "The region where the application is deployed",
                  args: {
                    name: "DEPLOYMENT_REGION",
                    description: "String",
                  },
                },
                {
                  name: "--description",
                  description: "Description of the application",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--display-name",
                  description: "Display name of the application",
                  args: {
                    name: "DISPLAY_NAME",
                    description: "String",
                  },
                },
                optEnvironment,
                {
                  name: "--environment-type",
                  description:
                    "Environment Type. _ENVIRONMENT_TYPE_ must be one of:",
                  priority: 100,
                  args: {
                    name: "ENVIRONMENT_TYPE",
                    suggestions: [
                      "development",
                      "production",
                      "staging",
                      "test",
                    ],
                  },
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--gke-deployment-target-cluster-self-link",
                  description:
                    "The self link of the cluster where GKE based application is deployed",
                  priority: 100,
                  args: {
                    name: "GKE_DEPLOYMENT_TARGET_CLUSTER_SELF_LINK",
                    description: "String",
                  },
                },
                {
                  name: "--gke-deployment-target-kubernetes-service-account",
                  description:
                    "The kubernetes service account that is created within the namespace provided above. Example: default or node-sa",
                  priority: 100,
                  args: {
                    name: "GKE_DEPLOYMENT_TARGET_KUBERNETES_SERVICE_ACCOUNT",
                    description: "String",
                  },
                },
                {
                  name: "--gke-deployment-target-kubernetes-service-account-creation",
                  description:
                    "Whether to create the provided KSA. If true, the KSA will be created in the namespace provided above. If false, the KSA is expected to already exist in the namespace provided above",
                },
                {
                  name: "--gke-deployment-target-namespace",
                  description:
                    "The namespace where the application is deployed",
                  priority: 100,
                  args: {
                    name: "GKE_DEPLOYMENT_TARGET_NAMESPACE",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                {
                  name: "--import-existing-resources",
                  description: "Import existing resources into the application",
                },
                optLocation4,
                optLogHttp,
                {
                  name: "--no-criticality-mission-critical",
                  description:
                    "Indicates mission-critical Application, Service, or Workload. Deprecated: Please refer to type instead",
                  hidden: true,
                },
                {
                  name: "--no-gke-deployment-target-kubernetes-service-account-creation",
                  description:
                    "Whether to create the provided KSA. If true, the KSA will be created in the namespace provided above. If false, the KSA is expected to already exist in the namespace provided above",
                  hidden: true,
                },
                {
                  name: "--no-import-existing-resources",
                  description: "Import existing resources into the application",
                  hidden: true,
                },
                {
                  name: "--params-update-strategy",
                  description:
                    "Specifies the strategy to use when updating the application parameters while updating the application template revision. _PARAMS_UPDATE_STRATEGY_ must be (only one value is supported):",
                  args: {
                    name: "PARAMS_UPDATE_STRATEGY",
                    suggestions: ["replace"],
                  },
                },
                optProject,
                optQuiet,
                {
                  name: "--scope-type",
                  description: "Scope Type. _SCOPE_TYPE_ must be one of:",
                  priority: 100,
                  args: {
                    name: "SCOPE_TYPE",
                    suggestions: ["global", "regional"],
                  },
                },
                {
                  name: "--service-account",
                  description:
                    "Your own service account that you use to deploy an application",
                  args: {
                    name: "SERVICE_ACCOUNT",
                    description: "String",
                  },
                },
                {
                  name: "--source-application-template-revision",
                  description: "Application template revision URI",
                  args: {
                    name: "SOURCE_APPLICATION_TEMPLATE_REVISION",
                    description: "String",
                  },
                },
                {
                  name: "--source-shared-template-revision-uri",
                  description: "Shared template revision URI",
                  args: {
                    name: "SOURCE_SHARED_TEMPLATE_REVISION_URI",
                    description: "String",
                  },
                },
                optSpace3,
                optTraceToken,
                {
                  name: "--type",
                  description:
                    "The type of the application. _TYPE_ must be one of:",
                  args: {
                    name: "TYPE",
                    suggestions: ["helm-app", "terraform-app"],
                  },
                },
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
              description: "Delete an application",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                {
                  name: "--force",
                  description:
                    "If set to true, the application's children are also deleted. If false, the application is only deleted if it has no children",
                },
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
                  name: "--no-force",
                  description:
                    "If set to true, the application's children are also deleted. If false, the application is only deleted if it has no children",
                  hidden: true,
                },
                optProject,
                optQuiet,
                optSpace3,
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
              name: "deploy",
              description: "Deploy an application",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--create-sa",
                  description:
                    "Create a new service account for the deployment",
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
                {
                  name: "--no-create-sa",
                  description:
                    "Create a new service account for the deployment",
                  hidden: true,
                },
                {
                  name: "--no-replace",
                  description:
                    "Flag to update the existing deployment. If not set or false, deploy will fail if application state is in the DEPLOYED state",
                  hidden: true,
                },
                optProject,
                optQuiet,
                {
                  name: "--replace",
                  description:
                    "Flag to update the existing deployment. If not set or false, deploy will fail if application state is in the DEPLOYED state",
                },
                {
                  name: "--service-account",
                  description: "The service account to use for this deployment",
                  args: {
                    name: "SERVICE_ACCOUNT",
                    description: "String",
                  },
                },
                optSpace2,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--worker-pool",
                  description:
                    "The user-specified Worker Pool resource in which the Cloud Build job will execute. Format: projects/{project}/locations/{location}/workerPools/{workerPoolId} If this flag is omitted, the worker pool already defined on the application will be used. If no worker pool is defined on the application, the default Cloud Build worker pool is used. The worker pool must exist in the same region as the application",
                  args: {
                    name: "WORKER_POOL",
                  },
                },
              ],
              args: {
                name: "APPLICATION",
                description:
                  "ID of the application or fully qualified identifier for the application",
              },
            },
            {
              name: "describe",
              description: "Describe an application",
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
                optSpace3,
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
              name: "generate",
              description: "Generate IaC for an application",
              options: [
                optAccessTokenFile,
                optAccount,
                optArtifactLocationGcsUri,
                optBillingProject,
                optConfiguration,
                optConnection,
                optDeveloperConnectExportConfigBranch,
                optDeveloperConnectExportConfigDir,
                optDeveloperConnectExportConfigRepoUri,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--gcs-uri",
                  description:
                    "The Cloud Storage URI to write the generated IaC to",
                  args: {
                    name: "GCS_URI",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optIacFormat,
                optImpersonateServiceAccount,
                {
                  name: "--location",
                  description:
                    "For resources [application, developer-connect-export-config-repo-uri], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                optProject,
                optQuiet,
                optSpace3,
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
              name: "generate-assessment-report",
              description:
                "Generate an assessment report for a Design Center application",
              hidden: true,
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
                optSpace2,
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
              name: "import-iac",
              description:
                "Import Infrastructure as Code (IaC) for an Application",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--allow-partial-import",
                  description:
                    "If set, partially import valid IaC changes and ignore invalid ones",
                },
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--gcs-uri",
                  description:
                    "The Cloud Storage URI of the Terraform code (e.g., gs://my-bucket/iac)",
                  args: {
                    name: "GCS_URI",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                {
                  name: "--iac-module-from-file",
                  description:
                    "Path to a local YAML or JSON file containing the IaC module definition. Use a full or relative path to a local file containing the value of iac_module",
                  args: {
                    name: "IAC_MODULE_FROM_FILE",
                    template: "filepaths",
                  },
                },
                optImpersonateServiceAccount,
                optLocation2,
                optLogHttp,
                {
                  name: "--no-allow-partial-import",
                  description:
                    "If set, partially import valid IaC changes and ignore invalid ones",
                  hidden: true,
                },
                {
                  name: "--no-validate-iac",
                  description: "Validate the IaC without performing the import",
                  hidden: true,
                },
                optProject,
                optQuiet,
                optSpace2,
                optTraceToken,
                optUserOutputEnabled,
                {
                  name: "--validate-iac",
                  description: "Validate the IaC without performing the import",
                },
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
              description: "List applications",
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
                optLocation12,
                optLogHttp,
                optNoUri,
                optPageSize,
                optProject,
                optQuiet,
                optSortBy,
                optSpace,
                optTraceToken,
                optUri,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "preview",
              description: "Preview a Design Center application",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--create-sa",
                  description: "Create a new service account for the preview",
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
                {
                  name: "--no-create-sa",
                  description: "Create a new service account for the preview",
                  hidden: true,
                },
                optProject,
                optQuiet,
                {
                  name: "--service-account",
                  description: "The service account to use for this preview",
                  args: {
                    name: "SERVICE_ACCOUNT",
                    description: "String",
                  },
                },
                optSpace2,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--worker-pool",
                  description:
                    "The user-specified Worker Pool resource in which the Cloud Build job will execute. Format: projects/{project}/locations/{location}/workerPools/{workerPoolId} If this flag is omitted, the worker pool already defined on the application will be used. If no worker pool is defined on the application, the default Cloud Build worker pool is used. The worker pool must exist in the same region as the application",
                  args: {
                    name: "WORKER_POOL",
                  },
                },
              ],
              args: {
                name: "APPLICATION",
                description:
                  "ID of the application or fully qualified identifier for the application",
              },
            },
            {
              name: "update",
              description: "Update an application",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--add-app-parameters",
                  description:
                    "Add new value to app_parameters list. A list of parameters to attach to the deployment source object, which is a catalog entry or application template snapshot",
                  args: {
                    name: "ADD_APP_PARAMETERS",
                  },
                },
                {
                  name: "--add-attributes-business-owners",
                  description:
                    "Add new value to attributes_business_owners list. Business team that ensures user needs are met and value is delivered",
                  args: {
                    name: "ADD_ATTRIBUTES_BUSINESS_OWNERS",
                  },
                },
                {
                  name: "--add-attributes-developer-owners",
                  description:
                    "Add new value to attributes_developer_owners list. Developer team that owns development and coding",
                  args: {
                    name: "ADD_ATTRIBUTES_DEVELOPER_OWNERS",
                  },
                },
                {
                  name: "--add-attributes-operator-owners",
                  description:
                    "Add new value to attributes_operator_owners list. Operator team that ensures runtime and operations",
                  args: {
                    name: "ADD_ATTRIBUTES_OPERATOR_OWNERS",
                  },
                },
                {
                  name: "--add-component-parameters",
                  description:
                    "Add new value to component_parameters list. A list of component parameters to associate with the application",
                  args: {
                    name: "ADD_COMPONENT_PARAMETERS",
                  },
                },
                {
                  name: "--add-connection-configs",
                  description:
                    "Add new value to connection_configs list. Connection configuration for the application",
                  args: {
                    name: "ADD_CONNECTION_CONFIGS",
                  },
                },
                {
                  name: "--app-parameters",
                  description:
                    "Set app_parameters to new value. A list of parameters to attach to the deployment source object, which is a catalog entry or application template snapshot",
                  args: {
                    name: "APP_PARAMETERS",
                  },
                },
                {
                  name: "--attributes-business-owners",
                  description:
                    "Set attributes_business_owners to new value. Business team that ensures user needs are met and value is delivered",
                  args: {
                    name: "ATTRIBUTES_BUSINESS_OWNERS",
                  },
                },
                {
                  name: "--attributes-developer-owners",
                  description:
                    "Set attributes_developer_owners to new value. Developer team that owns development and coding",
                  args: {
                    name: "ATTRIBUTES_DEVELOPER_OWNERS",
                  },
                },
                {
                  name: "--attributes-operator-owners",
                  description:
                    "Set attributes_operator_owners to new value. Operator team that ensures runtime and operations",
                  args: {
                    name: "ATTRIBUTES_OPERATOR_OWNERS",
                  },
                },
                optBillingProject,
                {
                  name: "--clear-app-parameters",
                  description:
                    "Clear app_parameters value and set to empty list",
                },
                {
                  name: "--clear-attributes",
                  description:
                    "Set application.attributes back to default value",
                },
                {
                  name: "--clear-attributes-business-owners",
                  description:
                    "Clear attributes_business_owners value and set to empty list",
                },
                {
                  name: "--clear-attributes-developer-owners",
                  description:
                    "Clear attributes_developer_owners value and set to empty list",
                },
                {
                  name: "--clear-attributes-operator-owners",
                  description:
                    "Clear attributes_operator_owners value and set to empty list",
                },
                {
                  name: "--clear-component-parameters",
                  description:
                    "Clear component_parameters value and set to empty list",
                },
                {
                  name: "--clear-composite-application-parameters",
                  description:
                    "Set application.compositeApplicationParameters back to default value",
                },
                {
                  name: "--clear-composite-application-parameters-service-account-map",
                  description:
                    "Clear composite_application_parameters_service_account_map value and set to empty map",
                },
                {
                  name: "--clear-connection-configs",
                  description:
                    "Clear connection_configs value and set to empty list",
                },
                {
                  name: "--clear-deployment-target",
                  description:
                    "Set application.deploymentTarget back to default value",
                },
                {
                  name: "--clear-scope",
                  description: "Set application.scope back to default value",
                },
                {
                  name: "--clear-source",
                  description: "Set application.source back to default value",
                },
                {
                  name: "--component-parameters",
                  description:
                    "Set component_parameters to new value. A list of component parameters to associate with the application",
                  args: {
                    name: "COMPONENT_PARAMETERS",
                  },
                },
                {
                  name: "--composite-application-parameters-service-account-map",
                  description:
                    "Set composite_application_parameters_service_account_map to new value. A map from a component's URI to the deployment service account for composite application. key format: projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/components/{component} value format: projects/{project}/serviceAccounts/{email_address}",
                  args: {
                    name: "COMPOSITE_APPLICATION_PARAMETERS_SERVICE_ACCOUNT_MAP",
                  },
                },
                optConfiguration,
                {
                  name: "--connection-configs",
                  description:
                    "Set connection_configs to new value. Connection configuration for the application",
                  args: {
                    name: "CONNECTION_CONFIGS",
                  },
                },
                optCriticalityLevel,
                {
                  name: "--criticality-mission-critical",
                  description:
                    "Indicates mission-critical Application, Service, or Workload. Deprecated: Please refer to type instead. Use *--criticality-mission-critical* to enable and *--no-criticality-mission-critical* to disable",
                },
                {
                  name: "--criticality-type",
                  description:
                    "Criticality Type. _CRITICALITY_TYPE_ must be one of:",
                  args: {
                    name: "CRITICALITY_TYPE",
                    suggestions: ["high", "low", "medium", "mission-critical"],
                  },
                },
                {
                  name: "--deployment-project",
                  description: "Deployment project of the application",
                  args: {
                    name: "DEPLOYMENT_PROJECT",
                    description: "String",
                  },
                },
                {
                  name: "--deployment-region",
                  description: "The region where the application is deployed",
                  args: {
                    name: "DEPLOYMENT_REGION",
                    description: "String",
                  },
                },
                {
                  name: "--description",
                  description: "Description of the application",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--display-name",
                  description: "Display name of the application",
                  args: {
                    name: "DISPLAY_NAME",
                    description: "String",
                  },
                },
                optEnvironment,
                {
                  name: "--environment-type",
                  description:
                    "Environment Type. _ENVIRONMENT_TYPE_ must be one of:",
                  args: {
                    name: "ENVIRONMENT_TYPE",
                    suggestions: [
                      "development",
                      "production",
                      "staging",
                      "test",
                    ],
                  },
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--gke-deployment-target-cluster-self-link",
                  description:
                    "The self link of the cluster where GKE based application is deployed",
                  args: {
                    name: "GKE_DEPLOYMENT_TARGET_CLUSTER_SELF_LINK",
                    description: "String",
                  },
                },
                {
                  name: "--gke-deployment-target-kubernetes-service-account",
                  description:
                    "The kubernetes service account that is created within the namespace provided above. Example: default or node-sa",
                  args: {
                    name: "GKE_DEPLOYMENT_TARGET_KUBERNETES_SERVICE_ACCOUNT",
                    description: "String",
                  },
                },
                {
                  name: "--gke-deployment-target-kubernetes-service-account-creation",
                  description:
                    "Whether to create the provided KSA. If true, the KSA will be created in the namespace provided above. If false, the KSA is expected to already exist in the namespace provided above. Use *--gke-deployment-target-kubernetes-service-account-creation* to enable and *--no-gke-deployment-target-kubernetes-service-account-creation* to disable",
                },
                {
                  name: "--gke-deployment-target-namespace",
                  description:
                    "The namespace where the application is deployed",
                  args: {
                    name: "GKE_DEPLOYMENT_TARGET_NAMESPACE",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                {
                  name: "--import-existing-resources",
                  description:
                    "Import existing resources into the application. Use *--import-existing-resources* to enable and *--no-import-existing-resources* to disable",
                },
                optLocation4,
                optLogHttp,
                {
                  name: "--no-clear-app-parameters",
                  description:
                    "Clear app_parameters value and set to empty list",
                  hidden: true,
                },
                {
                  name: "--no-clear-attributes",
                  description:
                    "Set application.attributes back to default value",
                  hidden: true,
                },
                {
                  name: "--no-clear-attributes-business-owners",
                  description:
                    "Clear attributes_business_owners value and set to empty list",
                  hidden: true,
                },
                {
                  name: "--no-clear-attributes-developer-owners",
                  description:
                    "Clear attributes_developer_owners value and set to empty list",
                  hidden: true,
                },
                {
                  name: "--no-clear-attributes-operator-owners",
                  description:
                    "Clear attributes_operator_owners value and set to empty list",
                  hidden: true,
                },
                {
                  name: "--no-clear-component-parameters",
                  description:
                    "Clear component_parameters value and set to empty list",
                  hidden: true,
                },
                {
                  name: "--no-clear-composite-application-parameters",
                  description:
                    "Set application.compositeApplicationParameters back to default value",
                  hidden: true,
                },
                {
                  name: "--no-clear-composite-application-parameters-service-account-map",
                  description:
                    "Clear composite_application_parameters_service_account_map value and set to empty map",
                  hidden: true,
                },
                {
                  name: "--no-clear-connection-configs",
                  description:
                    "Clear connection_configs value and set to empty list",
                  hidden: true,
                },
                {
                  name: "--no-clear-deployment-target",
                  description:
                    "Set application.deploymentTarget back to default value",
                  hidden: true,
                },
                {
                  name: "--no-clear-scope",
                  description: "Set application.scope back to default value",
                  hidden: true,
                },
                {
                  name: "--no-clear-source",
                  description: "Set application.source back to default value",
                  hidden: true,
                },
                {
                  name: "--no-criticality-mission-critical",
                  description:
                    "Indicates mission-critical Application, Service, or Workload. Deprecated: Please refer to type instead",
                },
                {
                  name: "--no-gke-deployment-target-kubernetes-service-account-creation",
                  description:
                    "Whether to create the provided KSA. If true, the KSA will be created in the namespace provided above. If false, the KSA is expected to already exist in the namespace provided above",
                },
                {
                  name: "--no-import-existing-resources",
                  description: "Import existing resources into the application",
                },
                {
                  name: "--params-update-strategy",
                  description:
                    "Specifies the strategy to use when updating the application parameters while updating the application template revision. _PARAMS_UPDATE_STRATEGY_ must be (only one value is supported):",
                  args: {
                    name: "PARAMS_UPDATE_STRATEGY",
                    suggestions: ["replace"],
                  },
                },
                optProject,
                optQuiet,
                {
                  name: "--remove-app-parameters",
                  description:
                    "Remove existing value from app_parameters list. A list of parameters to attach to the deployment source object, which is a catalog entry or application template snapshot",
                  args: {
                    name: "REMOVE_APP_PARAMETERS",
                  },
                },
                {
                  name: "--remove-attributes-business-owners",
                  description:
                    "Remove existing value from attributes_business_owners list. Business team that ensures user needs are met and value is delivered",
                  args: {
                    name: "REMOVE_ATTRIBUTES_BUSINESS_OWNERS",
                  },
                },
                {
                  name: "--remove-attributes-developer-owners",
                  description:
                    "Remove existing value from attributes_developer_owners list. Developer team that owns development and coding",
                  args: {
                    name: "REMOVE_ATTRIBUTES_DEVELOPER_OWNERS",
                  },
                },
                {
                  name: "--remove-attributes-operator-owners",
                  description:
                    "Remove existing value from attributes_operator_owners list. Operator team that ensures runtime and operations",
                  args: {
                    name: "REMOVE_ATTRIBUTES_OPERATOR_OWNERS",
                  },
                },
                {
                  name: "--remove-component-parameters",
                  description:
                    "Remove existing value from component_parameters list. A list of component parameters to associate with the application",
                  args: {
                    name: "REMOVE_COMPONENT_PARAMETERS",
                  },
                },
                {
                  name: "--remove-composite-application-parameters-service-account-map",
                  description:
                    "Remove existing value from map composite_application_parameters_service_account_map. Sets `remove_composite_application_parameters_service_account_map` value",
                  args: {
                    name: "REMOVE_COMPOSITE_APPLICATION_PARAMETERS_SERVICE_ACCOUNT_MAP",
                    description: "Dict",
                  },
                },
                {
                  name: "--remove-connection-configs",
                  description:
                    "Remove existing value from connection_configs list. Connection configuration for the application",
                  args: {
                    name: "REMOVE_CONNECTION_CONFIGS",
                  },
                },
                {
                  name: "--scope-type",
                  description: "Scope Type. _SCOPE_TYPE_ must be one of:",
                  args: {
                    name: "SCOPE_TYPE",
                    suggestions: ["global", "regional"],
                  },
                },
                {
                  name: "--service-account",
                  description:
                    "Your own service account that you use to deploy an application",
                  args: {
                    name: "SERVICE_ACCOUNT",
                    description: "String",
                  },
                },
                {
                  name: "--source-application-template-revision",
                  description: "Application template revision URI",
                  args: {
                    name: "SOURCE_APPLICATION_TEMPLATE_REVISION",
                    description: "String",
                  },
                },
                {
                  name: "--source-shared-template-revision-uri",
                  description: "Shared template revision URI",
                  args: {
                    name: "SOURCE_SHARED_TEMPLATE_REVISION_URI",
                    description: "String",
                  },
                },
                optSpace3,
                optTraceToken,
                {
                  name: "--type",
                  description:
                    "The type of the application. _TYPE_ must be one of:",
                  args: {
                    name: "TYPE",
                    suggestions: ["helm-app", "terraform-app"],
                  },
                },
                {
                  name: "--update-composite-application-parameters-service-account-map",
                  description:
                    "Update composite_application_parameters_service_account_map value or add key value pair. A map from a component's URI to the deployment service account for composite application. key format: projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/components/{component} value format: projects/{project}/serviceAccounts/{email_address}",
                  args: {
                    name: "UPDATE_COMPOSITE_APPLICATION_PARAMETERS_SERVICE_ACCOUNT_MAP",
                  },
                },
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "APPLICATION",
                description:
                  "ID of the application or fully qualified identifier for the application",
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
          name: "catalogs",
          description: "Manage catalog resources",
          subcommands: [
            {
              name: "create",
              description: "Create a catalog",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description: "The catalog description",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--display-name",
                  description: "The catalog display name",
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
                optSpace5,
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
              description: "Delete a catalog",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                {
                  name: "--force",
                  description:
                    "If set to true, the catalog's children are also deleted. If false, the catalog is only deleted if it has no children",
                },
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
                  name: "--no-force",
                  description:
                    "If set to true, the catalog's children are also deleted. If false, the catalog is only deleted if it has no children",
                  hidden: true,
                },
                optProject,
                optQuiet,
                optSpace5,
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
              description: "Describe a catalog",
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
                optSpace5,
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
              description: "List catalogs",
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
                optLocation12,
                optLogHttp,
                optNoUri,
                optPageSize,
                optProject,
                optQuiet,
                optSortBy,
                optSpace,
                optTraceToken,
                optUri,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "shares",
              description: "Manage share resources",
              subcommands: [
                {
                  name: "create",
                  description: "Create a share",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optAsync,
                    optBillingProject,
                    optCatalog,
                    optConfiguration,
                    {
                      name: "--destination-space",
                      description:
                        "ID of the space or fully qualified identifier for the space",
                      priority: 100,
                      args: {
                        name: "DESTINATION_SPACE",
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
                      description:
                        "For resources [share, destination-space], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
                      args: {
                        name: "LOCATION",
                        description: "String",
                      },
                    },
                    optLogHttp,
                    optNoAsync,
                    optProject,
                    optQuiet,
                    optSpace9,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "SHARE",
                    description:
                      "ID of the share or fully qualified identifier for the share",
                  },
                },
                {
                  name: "delete",
                  description: "Delete a share",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optAsync,
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
                    optLocation11,
                    optLogHttp,
                    optNoAsync,
                    optProject,
                    optQuiet,
                    optSpace9,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "SHARE",
                    description:
                      "ID of the share or fully qualified identifier for the share",
                  },
                },
                {
                  name: "describe",
                  description: "Describe a share",
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
                    optLocation11,
                    optLogHttp,
                    optProject,
                    optQuiet,
                    optSpace9,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "SHARE",
                    description:
                      "ID of the share or fully qualified identifier for the share",
                  },
                },
                {
                  name: "list",
                  description: "List shares",
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
                    optLocation6,
                    optLogHttp,
                    optNoUri,
                    optPageSize,
                    optProject,
                    optQuiet,
                    optSortBy,
                    optSpace5,
                    optTraceToken,
                    optUri,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                },
                {
                  name: "sync",
                  description: "Sync a share",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optAsync,
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
                    optLocation11,
                    optLogHttp,
                    optNoAsync,
                    optProject,
                    optQuiet,
                    optSpace9,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "SHARE",
                    description:
                      "ID of the share or fully qualified identifier for the share",
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
              name: "templates",
              description: "Manage catalog template resources",
              subcommands: [
                {
                  name: "create",
                  description: "Create a catalog template",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optCatalog2,
                    optConfiguration,
                    {
                      name: "--description",
                      description: "The catalog template description",
                      args: {
                        name: "DESCRIPTION",
                        description: "String",
                      },
                    },
                    {
                      name: "--display-name",
                      description: "The display name of a catalog template",
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
                    optLocation13,
                    optLogHttp,
                    optProject,
                    optQuiet,
                    optSpace10,
                    {
                      name: "--template-category",
                      description:
                        "The category of the ADC template. _TEMPLATE_CATEGORY_ must be one of:",
                      priority: 100,
                      args: {
                        name: "TEMPLATE_CATEGORY",
                        suggestions: [
                          "application-template",
                          "component-template",
                          "composite-solution-template",
                          "instance-template",
                        ],
                      },
                    },
                    optTraceToken,
                    {
                      name: "--type",
                      description:
                        "The Application Design Center assembly template type. _TYPE_ must be one of:",
                      args: {
                        name: "TYPE",
                        suggestions: [
                          "application",
                          "asset",
                          "composite-application-template",
                          "helm-application",
                          "helm-chart",
                          "jss-solution",
                          "service",
                          "service-data-source",
                          "standard-application-template",
                          "workload",
                        ],
                      },
                    },
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "TEMPLATE",
                    description:
                      "ID of the template or fully qualified identifier for the template",
                  },
                },
                {
                  name: "delete",
                  description: "Delete a catalog template",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optAsync,
                    optBillingProject,
                    optCatalog2,
                    optConfiguration,
                    optFlagsFile,
                    optFlatten,
                    {
                      name: "--force",
                      description:
                        "If set to true, the catalog template's children are also deleted. If false, the catalog template is only deleted if it has no children",
                    },
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLocation13,
                    optLogHttp,
                    optNoAsync,
                    {
                      name: "--no-force",
                      description:
                        "If set to true, the catalog template's children are also deleted. If false, the catalog template is only deleted if it has no children",
                      hidden: true,
                    },
                    optProject,
                    optQuiet,
                    optSpace10,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "TEMPLATE",
                    description:
                      "ID of the template or fully qualified identifier for the template",
                  },
                },
                {
                  name: "describe",
                  description: "Describe a catalog template",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optCatalog2,
                    optConfiguration,
                    optFlagsFile,
                    optFlatten,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLocation13,
                    optLogHttp,
                    optProject,
                    optQuiet,
                    optSpace10,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "TEMPLATE",
                    description:
                      "ID of the template or fully qualified identifier for the template",
                  },
                },
                {
                  name: "list",
                  description: "List catalog templates",
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
                    optLocation6,
                    optLogHttp,
                    optNoUri,
                    optPageSize,
                    optProject,
                    optQuiet,
                    optSortBy,
                    optSpace5,
                    optTraceToken,
                    optUri,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                },
                {
                  name: "revisions",
                  description: "Manage catalog template revision resources",
                  subcommands: [
                    {
                      name: "create",
                      description: "Create a new catalog template revision",
                      options: [
                        optAccessTokenFile,
                        optAccount,
                        {
                          name: "--application-template-revision-source",
                          description:
                            "Application template revision to use as source. Example: `projects/my-project/locations/us-central1/spaces/my-space/catalogs/my-catalog/templates/my-template/revisions/r1`",
                          args: {
                            name: "APPLICATION_TEMPLATE_REVISION_SOURCE",
                            description: "String",
                          },
                        },
                        optAsync,
                        optBillingProject,
                        {
                          name: "--catalog",
                          description: "The ID of the catalog",
                          args: {
                            name: "CATALOG",
                            description: "String",
                          },
                        },
                        optConfiguration,
                        {
                          name: "--description",
                          description: "A description for the revision",
                          args: {
                            name: "DESCRIPTION",
                            description: "String",
                          },
                        },
                        {
                          name: "--developer-connect-repo",
                          description:
                            "The Developer Connect repository to use as a source. Example: `projects/my-project/locations/us-central1/connections/my-connection/gitRepositoryLinks/my-repo`",
                          priority: 100,
                          args: {
                            name: "DEVELOPER_CONNECT_REPO",
                            description: "String",
                          },
                        },
                        {
                          name: "--developer-connect-repo-dir",
                          description:
                            'The directory within the repository to use. Example: `"modules/my-product"`',
                          priority: 100,
                          args: {
                            name: "DEVELOPER_CONNECT_REPO_DIR",
                            description: "String",
                          },
                        },
                        {
                          name: "--developer-connect-repo-ref",
                          description:
                            'The Git ref (branch or tag) within the repository to use. Example: `"refs/tags/v1.0.0"` or `"refs/heads/main"` or `"refs/commits/269b518b99d06b31ff938a2d182e75f5e41941c7"`',
                          priority: 100,
                          args: {
                            name: "DEVELOPER_CONNECT_REPO_REF",
                            description: "String",
                          },
                        },
                        optFlagsFile,
                        optFlatten,
                        optFormat,
                        {
                          name: "--gcs-source-uri",
                          description:
                            "Google Cloud Storage URI for source. Example: `gs://my-bucket/my-template`",
                          args: {
                            name: "GCS_SOURCE_URI",
                            description: "String",
                          },
                        },
                        {
                          name: "--git-source-dir",
                          description:
                            'Git directory for Git source. Example: `"modules/my-product"`. This field is optional',
                          args: {
                            name: "GIT_SOURCE_DIR",
                            description: "String",
                          },
                        },
                        {
                          name: "--git-source-ref-tag",
                          description:
                            'Git reference tag for Git source. Example: `"v1.0.0"`',
                          priority: 100,
                          args: {
                            name: "GIT_SOURCE_REF_TAG",
                            description: "String",
                          },
                        },
                        {
                          name: "--git-source-repo",
                          description:
                            "Git repository for Git source. Example: `GoogleCloudPlatform/terraform-google-cloud-run`",
                          priority: 100,
                          args: {
                            name: "GIT_SOURCE_REPO",
                            description: "String",
                          },
                        },
                        {
                          name: "--help",
                          description: "Display detailed help",
                        },
                        optImpersonateServiceAccount,
                        {
                          name: "--location",
                          description: "The Cloud location for the revision",
                          args: {
                            name: "LOCATION",
                            description: "String",
                          },
                        },
                        optLogHttp,
                        {
                          name: "--metadata",
                          description:
                            'Path to a local YAML file containing the template metadata. Example: `"path/to/metadata.yaml"`',
                          args: {
                            name: "METADATA",
                            template: "filepaths",
                          },
                        },
                        optNoAsync,
                        {
                          name: "--oci-repo-uri",
                          description:
                            "OCI Repo URI for OCI Repo source. Example: `oci://us-west1-docker.pkg.dev/my-project/my-repo/my-chart`",
                          priority: 100,
                          args: {
                            name: "OCI_REPO_URI",
                            description: "String",
                          },
                        },
                        {
                          name: "--oci-repo-version",
                          description:
                            'OCI Repo version for OCI Repo source. Example: `"1.0.0"`. This field is optional',
                          args: {
                            name: "OCI_REPO_VERSION",
                            description: "String",
                          },
                        },
                        optProject,
                        optQuiet,
                        optSpace2,
                        {
                          name: "--template",
                          description: "The ID of the template",
                          args: {
                            name: "TEMPLATE",
                            description: "String",
                          },
                        },
                        optTraceToken,
                        optUserOutputEnabled,
                        optVerbosity,
                      ],
                      args: {
                        name: "REVISION",
                        description:
                          "ID of the revision or fully qualified identifier for the revision",
                      },
                    },
                    {
                      name: "delete",
                      description: "Delete a catalog template revision",
                      options: [
                        optAccessTokenFile,
                        optAccount,
                        optAsync,
                        optBillingProject,
                        {
                          name: "--catalog",
                          description:
                            "The catalog id of the revision resource",
                          args: {
                            name: "CATALOG",
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
                        optLocation10,
                        optLogHttp,
                        optNoAsync,
                        optProject,
                        optQuiet,
                        optSpace8,
                        {
                          name: "--template",
                          description:
                            "The template id of the revision resource",
                          args: {
                            name: "TEMPLATE",
                            description: "String",
                          },
                        },
                        optTraceToken,
                        optUserOutputEnabled,
                        optVerbosity,
                      ],
                      args: {
                        name: "REVISION",
                        description:
                          "ID of the revision or fully qualified identifier for the revision",
                      },
                    },
                    {
                      name: "describe",
                      description: "Describe a catalog template revision",
                      options: [
                        optAccessTokenFile,
                        optAccount,
                        optBillingProject,
                        {
                          name: "--catalog",
                          description:
                            "The catalog id of the revision resource",
                          args: {
                            name: "CATALOG",
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
                        optLocation10,
                        optLogHttp,
                        optProject,
                        optQuiet,
                        optSpace8,
                        {
                          name: "--template",
                          description:
                            "The template id of the revision resource",
                          args: {
                            name: "TEMPLATE",
                            description: "String",
                          },
                        },
                        optTraceToken,
                        optUserOutputEnabled,
                        optVerbosity,
                      ],
                      args: {
                        name: "REVISION",
                        description:
                          "ID of the revision or fully qualified identifier for the revision",
                      },
                    },
                    {
                      name: "list",
                      description: "List catalog template revisions",
                      options: [
                        optAccessTokenFile,
                        optAccount,
                        optBillingProject,
                        optCatalog2,
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
                        optLocation13,
                        optLogHttp,
                        optNoUri,
                        optPageSize,
                        optProject,
                        optQuiet,
                        optSortBy,
                        optSpace10,
                        {
                          name: "--template",
                          description:
                            "ID of the template or fully qualified identifier for the template",
                          priority: 100,
                          args: {
                            name: "TEMPLATE",
                            description: "String",
                          },
                        },
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
                  name: "update",
                  description: "Update a catalog template",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optCatalog2,
                    optConfiguration,
                    {
                      name: "--description",
                      description: "The catalog template description",
                      args: {
                        name: "DESCRIPTION",
                        description: "String",
                      },
                    },
                    {
                      name: "--display-name",
                      description: "The display name of a catalog template",
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
                    optLocation13,
                    optLogHttp,
                    optProject,
                    optQuiet,
                    optSpace10,
                    {
                      name: "--template-category",
                      description:
                        "The category of the ADC template. _TEMPLATE_CATEGORY_ must be one of:",
                      args: {
                        name: "TEMPLATE_CATEGORY",
                        suggestions: [
                          "application-template",
                          "component-template",
                          "composite-solution-template",
                          "instance-template",
                        ],
                      },
                    },
                    optTraceToken,
                    {
                      name: "--type",
                      description:
                        "The Application Design Center assembly template type. _TYPE_ must be one of:",
                      args: {
                        name: "TYPE",
                        suggestions: [
                          "application",
                          "asset",
                          "composite-application-template",
                          "helm-application",
                          "helm-chart",
                          "jss-solution",
                          "service",
                          "service-data-source",
                          "standard-application-template",
                          "workload",
                        ],
                      },
                    },
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "TEMPLATE",
                    description:
                      "ID of the template or fully qualified identifier for the template",
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
              name: "update",
              description: "Update a catalog",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description: "The catalog description",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--display-name",
                  description: "The catalog display name",
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
                optSpace5,
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
          name: "create",
          description: "Create a space",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Description for the space",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Display name for the space",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--enable-gcp-shared-templates",
              description: "Flag to enable Google opinionated shared templates",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gcs-bucket",
              description:
                "An existing Google Cloud Storage bucket that you want to use instead of creating a new bucket during ADC setup. If not provided, a default bucket is created during setup. The bucket must exist in the same project as the space. If the bucket name does not exist in the same project as the space, the request fails with an INVALID_ARGUMENT error. If you do not have access to the bucket, the request fails with a PERMISSION_DENIED error. Format: {$bucket_name} For example, if the Cloud Storage bucket URI is gs:\\/\\/{$bucket_name}, the format is {$bucket_name}",
              args: {
                name: "GCS_BUCKET",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation12,
            optLogHttp,
            {
              name: "--no-enable-gcp-shared-templates",
              description: "Flag to enable Google opinionated shared templates",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--tags",
              description:
                'Tags are key/values bound to space resource. Example: `"123/environment": "production" "123/costCenter": "marketing"`. For more information on tag creation and management, see https://cloud.google.com/resource-manager/docs/tags/tags-overview',
              args: {
                name: "TAGS",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SPACE",
            description:
              "ID of the space or fully qualified identifier for the space",
          },
        },
        {
          name: "delete",
          description: "Delete a space",
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
                "If set to true, the space's children are also deleted. If false, the space is only deleted if it has no children",
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation12,
            optLogHttp,
            {
              name: "--no-force",
              description:
                "If set to true, the space's children are also deleted. If false, the space is only deleted if it has no children",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SPACE",
            description:
              "ID of the space or fully qualified identifier for the space",
          },
        },
        {
          name: "describe",
          description: "Describe a space",
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
            optLocation12,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SPACE",
            description:
              "ID of the space or fully qualified identifier for the space",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Design Center space",
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
            optLocation3,
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
            name: "SPACE",
            description:
              "ID of the space or fully qualified identifier for the space",
          },
        },
        {
          name: "list",
          description: "List spaces",
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
          name: "register-app-hub-application-resources",
          description: "Registration of App Hub application resources",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--apphub-application",
              description:
                "The name of the AppHub Application. Format: `projects/{project}/locations/{location}/applications/{application}`",
              priority: 100,
              args: {
                name: "APPHUB_APPLICATION",
                description: "String",
              },
            },
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
            {
              name: "--tfstate-content",
              description:
                "The Terraform state (tfstate) content as a raw string. For large state files exceeding 10MB, use the `tfstate-signed-gcs-uri` field instead",
              args: {
                name: "TFSTATE_CONTENT",
                description: "String",
              },
            },
            {
              name: "--tfstate-signed-gcs-uri",
              description:
                "A securely signed Cloud Storage URI pointing to the tfstate file. The URI must be signed to grant the service temporary read access to the state file. ADC imposes a limit on the maximum size of the state file accessed via this URI",
              args: {
                name: "TFSTATE_SIGNED_GCS_URI",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "set-iam-policy",
          description:
            "Set the IAM policy for a Design Center space as defined in a JSON/YAML file",
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
          args: [
            {
              name: "SPACE",
              description:
                "ID of the space or fully qualified identifier for the space",
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
          name: "shared-templates",
          description: "Manage shared template resources",
          subcommands: [
            {
              name: "describe",
              description: "Describe a shared template",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--google-catalog",
                  description:
                    'If provided, describes a shared template from the Google Catalog. This sets the project to "gcpdesigncenter" and space to "googlespace"',
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                {
                  name: "--location",
                  description: "The location id of the sharedTemplate resource",
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                {
                  name: "--no-google-catalog",
                  description:
                    'If provided, describes a shared template from the Google Catalog. This sets the project to "gcpdesigncenter" and space to "googlespace"',
                  hidden: true,
                },
                optQuiet,
                {
                  name: "--space",
                  description: "The space id of the sharedTemplate resource",
                  args: {
                    name: "SPACE",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SHARED_TEMPLATE",
                description:
                  "ID of the sharedTemplate or fully qualified identifier for the sharedTemplate. Format: projects/$project/locations/$location/spaces/$space/sharedTemplates/$sharedTemplate To set the shared_template attribute: * provide the fully qualified identifier `shared_template` on the command line; * provide the argument `shared_template` which represents the shared template id and the other arguments `--location`, `--project`, `--space` or `--google-catalog` on the command line",
              },
            },
            {
              name: "list",
              description: "List shared templates",
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
                  name: "--google-catalog",
                  description:
                    'If provided, lists all shared template from the Google Catalog. This sets the project to "gcpdesigncenter" and space to "googlespace"',
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLimit,
                optLocation12,
                optLogHttp,
                {
                  name: "--no-google-catalog",
                  description:
                    'If provided, lists all shared template from the Google Catalog. This sets the project to "gcpdesigncenter" and space to "googlespace"',
                  hidden: true,
                },
                optNoUri,
                optPageSize,
                optQuiet,
                optSortBy,
                optSpace,
                optTraceToken,
                optUri,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "revisions",
              description: "Manage shared template revision resources",
              subcommands: [
                {
                  name: "describe",
                  description: "Describe a shared template revision",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFlagsFile,
                    optFlatten,
                    optFormat,
                    {
                      name: "--google-catalog",
                      description:
                        'If provided, describes a shared template revision from the Google Catalog. This sets the project to "gcpdesigncenter" and space to "googlespace"',
                    },
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLocation10,
                    optLogHttp,
                    {
                      name: "--no-google-catalog",
                      description:
                        'If provided, describes a shared template revision from the Google Catalog. This sets the project to "gcpdesigncenter" and space to "googlespace"',
                      hidden: true,
                    },
                    optQuiet,
                    {
                      name: "--shared-template",
                      description:
                        "The sharedTemplate id of the revision resource",
                      args: {
                        name: "SHARED_TEMPLATE",
                        description: "String",
                      },
                    },
                    optSpace8,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "REVISION",
                    description:
                      "ID of the revision or fully qualified identifier for the sharedTemplateRevision. Format: projects/$project/locations/$location/spaces/$space/sharedTemplates/$sharedTemplate/revisions/$revision To set the revision attribute: * provide the fully qualified identifier `revision` on the command line; * provide the argument `revision` which represents the revision id and the other arguments `--shared-template`, `--location`, `--project`, `--space` or `--google-catalog` on the command line",
                  },
                },
                {
                  name: "list",
                  description: "List shared template revisions",
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
                      name: "--google-catalog",
                      description:
                        'If provided, lists revisions for a shared template from the Google Catalog. This sets the project to "gcpdesigncenter" and space to "googlespace"',
                    },
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLimit,
                    {
                      name: "--location",
                      description:
                        "The location id of the sharedTemplate resource",
                      args: {
                        name: "LOCATION",
                        description: "String",
                      },
                    },
                    optLogHttp,
                    {
                      name: "--no-google-catalog",
                      description:
                        'If provided, lists revisions for a shared template from the Google Catalog. This sets the project to "gcpdesigncenter" and space to "googlespace"',
                      hidden: true,
                    },
                    optNoUri,
                    optPageSize,
                    optQuiet,
                    {
                      name: "--shared-template",
                      description:
                        "ID of the sharedTemplate or fully qualified identifier for the sharedTemplate",
                      priority: 100,
                      args: {
                        name: "SHARED_TEMPLATE",
                        description: "String",
                      },
                    },
                    optSortBy,
                    {
                      name: "--space",
                      description:
                        "The space id of the sharedTemplate resource",
                      args: {
                        name: "SPACE",
                        description: "String",
                      },
                    },
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
          name: "test-iam-permissions",
          description: "Test IAM permissions for a Design Center space",
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
            {
              name: "--permissions",
              description: "The set of permissions to check for the resource",
              priority: 100,
              args: {
                name: "PERMISSION",
                description: "List",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SPACE",
            description:
              "ID of the space or fully qualified identifier for the space",
          },
        },
        {
          name: "update",
          description: "Update a space",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Description for the space",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Display name for the space",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--enable-gcp-shared-templates",
              description:
                "Flag to enable Google opinionated shared templates. Use *--enable-gcp-shared-templates* to enable and *--no-enable-gcp-shared-templates* to disable",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gcs-bucket",
              description:
                "An existing Google Cloud Storage bucket that you want to use instead of creating a new bucket during ADC setup. If not provided, a default bucket is created during setup. The bucket must exist in the same project as the space. If the bucket name does not exist in the same project as the space, the request fails with an INVALID_ARGUMENT error. If you do not have access to the bucket, the request fails with a PERMISSION_DENIED error. Format: {$bucket_name} For example, if the Cloud Storage bucket URI is gs:\\/\\/{$bucket_name}, the format is {$bucket_name}",
              args: {
                name: "GCS_BUCKET",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation12,
            optLogHttp,
            {
              name: "--no-enable-gcp-shared-templates",
              description: "Flag to enable Google opinionated shared templates",
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SPACE",
            description:
              "ID of the space or fully qualified identifier for the space",
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
