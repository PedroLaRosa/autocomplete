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

const optClearLabels: Fig.Option = {
  name: "--clear-labels",
  description: "Clear labels value and set to empty map",
};

const optCodeRepositoryIndex: Fig.Option = {
  name: "--code-repository-index",
  description: "The codeRepositoryIndex id of the repositoryGroup resource",
  args: {
    name: "CODE_REPOSITORY_INDEX",
    description: "String",
  },
};

const optCodeToolsSetting: Fig.Option = {
  name: "--code-tools-setting",
  description: "The codeToolsSetting id of the settingBinding resource",
  args: {
    name: "CODE_TOOLS_SETTING",
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

const optDataSharingWithGoogleSetting: Fig.Option = {
  name: "--data-sharing-with-google-setting",
  description:
    "The dataSharingWithGoogleSetting id of the settingBinding resource",
  args: {
    name: "DATA_SHARING_WITH_GOOGLE_SETTING",
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

const optGdaObservabilitySetting: Fig.Option = {
  name: "--gda-observability-setting",
  description: "The gdaObservabilitySetting id of the settingBinding resource",
  args: {
    name: "GDA_OBSERVABILITY_SETTING",
    description: "String",
  },
};

const optGeminiGcpEnablementSetting: Fig.Option = {
  name: "--gemini-gcp-enablement-setting",
  description:
    "The geminiGcpEnablementSetting id of the settingBinding resource",
  args: {
    name: "GEMINI_GCP_ENABLEMENT_SETTING",
    description: "String",
  },
};

const optGibqObservabilitySetting: Fig.Option = {
  name: "--gibq-observability-setting",
  description: "The gibqObservabilitySetting id of the settingBinding resource",
  args: {
    name: "GIBQ_OBSERVABILITY_SETTING",
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
  description: "Labels as key value pairs",
  args: {
    name: "LABELS",
  },
};

const optLabels2: Fig.Option = {
  name: "--labels",
  description: "Set labels to new value. Labels as key value pairs",
  args: {
    name: "LABELS",
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
  description: "The location id of the codeRepositoryIndex resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description: "The location id of the codeToolsSetting resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation4: Fig.Option = {
  name: "--location",
  description: "The location id of the dataSharingWithGoogleSetting resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation5: Fig.Option = {
  name: "--location",
  description: "The location id of the gdaObservabilitySetting resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation6: Fig.Option = {
  name: "--location",
  description: "The location id of the geminiGcpEnablementSetting resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation7: Fig.Option = {
  name: "--location",
  description: "The location id of the gibqObservabilitySetting resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation8: Fig.Option = {
  name: "--location",
  description: "The location id of the loggingSetting resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation9: Fig.Option = {
  name: "--location",
  description: "The location id of the operation resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation10: Fig.Option = {
  name: "--location",
  description: "The location id of the releaseChannelSetting resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation11: Fig.Option = {
  name: "--location",
  description: "The location id of the repositoryGroup resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation12: Fig.Option = {
  name: "--location",
  description: "The location id of the settingBinding resource",
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

const optLoggingSetting: Fig.Option = {
  name: "--logging-setting",
  description: "The loggingSetting id of the settingBinding resource",
  args: {
    name: "LOGGING_SETTING",
    description: "String",
  },
};

const optNoAsync: Fig.Option = {
  name: "--no-async",
  description:
    "Return immediately, without waiting for the operation in progress to complete",
  hidden: true,
};

const optNoClearLabels: Fig.Option = {
  name: "--no-clear-labels",
  description: "Clear labels value and set to empty map",
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

const optProduct: Fig.Option = {
  name: "--product",
  description: "Product type of the setting binding. _PRODUCT_ must be one of:",
  args: {
    name: "PRODUCT",
    suggestions: [
      "gemini-cloud-assist",
      "gemini-code-assist",
      "gemini-in-bigquery",
      "gemini-in-looker",
    ],
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

const optReleaseChannelSetting: Fig.Option = {
  name: "--release-channel-setting",
  description: "The releaseChannelSetting id of the settingBinding resource",
  args: {
    name: "RELEASE_CHANNEL_SETTING",
    description: "String",
  },
};

const optRemoveLabels: Fig.Option = {
  name: "--remove-labels",
  description:
    "Remove existing value from map labels. Sets `remove_labels` value",
  args: {
    name: "REMOVE_LABELS",
    description: "Dict",
  },
};

const optRequestId: Fig.Option = {
  name: "--request-id",
  description:
    "An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request",
  args: {
    name: "REQUEST_ID",
    description: "String",
  },
};

const optRequestId2: Fig.Option = {
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

const optTarget: Fig.Option = {
  name: "--target",
  description: "Target of the binding",
  priority: 100,
  args: {
    name: "TARGET",
    description: "String",
  },
};

const optTarget2: Fig.Option = {
  name: "--target",
  description: "Target of the binding",
  args: {
    name: "TARGET",
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

const optUpdateLabels: Fig.Option = {
  name: "--update-labels",
  description:
    "Update labels value or add key value pair. Labels as key value pairs",
  args: {
    name: "UPDATE_LABELS",
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
  name: "gemini",
  description:
    "Manage resources associated with Gemini Code Assist and Gemini Cloud Assist",
  subcommands: [
    {
      name: "code-repository-indexes",
      description: "Manage Code Repository Index resources",
      subcommands: [
        {
          name: "create",
          description: "Create a code repository index instance",
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
              name: "--kms-key",
              description:
                "Customer-managed encryption key name, in the format projects/*/locations/*/keyRings/*/cryptoKeys/*",
              args: {
                name: "KMS_KEY",
                description: "String",
              },
            },
            optLabels,
            optLocation2,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRequestId2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CODE_REPOSITORY_INDEX",
            description:
              "ID of the codeRepositoryIndex or fully qualified identifier for the codeRepositoryIndex",
          },
        },
        {
          name: "delete",
          description: "Delete a code repository index instance",
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
                "If set to true, any RepositoryGroups from this CodeRepositoryIndex will also be deleted. (Otherwise, the request will only work if the CodeRepositoryIndex has no RepositoryGroups.)",
            },
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
              name: "--no-force",
              description:
                "If set to true, any RepositoryGroups from this CodeRepositoryIndex will also be deleted. (Otherwise, the request will only work if the CodeRepositoryIndex has no RepositoryGroups.)",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRequestId,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CODE_REPOSITORY_INDEX",
            description:
              "ID of the codeRepositoryIndex or fully qualified identifier for the codeRepositoryIndex",
          },
        },
        {
          name: "describe",
          description: "Get details of a code repository index instance",
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
            name: "CODE_REPOSITORY_INDEX",
            description:
              "ID of the codeRepositoryIndex or fully qualified identifier for the codeRepositoryIndex",
          },
        },
        {
          name: "list",
          description:
            "List all code repository index instances in a specified project and location",
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
          name: "repository-groups",
          description: "Manage Repository Group resources",
          subcommands: [
            {
              name: "create",
              description:
                "Create a repository group for a given code repository index instance",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optCodeRepositoryIndex,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLabels,
                optLocation11,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                {
                  name: "--repositories",
                  description: "List of repositories to group",
                  args: {
                    name: "REPOSITORIES",
                  },
                },
                optRequestId2,
                {
                  name: "--resources",
                  description: "List of third party connection resources",
                  args: {
                    name: "RESOURCES",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "REPOSITORY_GROUP",
                description:
                  "ID of the repositoryGroup or fully qualified identifier for the repositoryGroup",
              },
            },
            {
              name: "delete",
              description:
                "Delete a repository group from a given code repository index instance",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optCodeRepositoryIndex,
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
                optRequestId,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "REPOSITORY_GROUP",
                description:
                  "ID of the repositoryGroup or fully qualified identifier for the repositoryGroup",
              },
            },
            {
              name: "describe",
              description: "Get details of a code repository index instance",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCodeRepositoryIndex,
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
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "REPOSITORY_GROUP",
                description:
                  "ID of the repositoryGroup or fully qualified identifier for the repositoryGroup",
              },
            },
            {
              name: "get-iam-policy",
              description:
                "Get the IAM policy for a code repository index repository group",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--code-repository-index",
                  description: "ID of the code repository index resource",
                  args: {
                    name: "CODE_REPOSITORY_INDEX",
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
                {
                  name: "--location",
                  description: "Location of the Gemini resource",
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
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
                name: "REPOSITORY_GROUP",
                description:
                  "ID of the repository_group or fully qualified identifier for the repository_group",
              },
            },
            {
              name: "list",
              description:
                "List all repository group for a given code repository index instance",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--code-repository-index",
                  description:
                    "ID of the codeRepositoryIndex or fully qualified identifier for the codeRepositoryIndex",
                  priority: 100,
                  args: {
                    name: "CODE_REPOSITORY_INDEX",
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
              name: "set-iam-policy",
              description:
                "Get the IAM policy for a code repository index repository group",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--code-repository-index",
                  description: "ID of the code repository index resource",
                  args: {
                    name: "CODE_REPOSITORY_INDEX",
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
                  name: "--location",
                  description: "Location of the Gemini resource",
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
              args: [
                {
                  name: "REPOSITORY_GROUP",
                  description:
                    "ID of the repository_group or fully qualified identifier for the repository_group",
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
              description: "Update the configuration of a repository group",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--add-repositories",
                  description:
                    "Add new value to repositories list. List of repositories to group",
                  args: {
                    name: "ADD_REPOSITORIES",
                  },
                },
                {
                  name: "--add-resources",
                  description:
                    "Add new value to resources list. List of third party connection resources",
                  args: {
                    name: "ADD_RESOURCES",
                  },
                },
                optAsync,
                optBillingProject,
                optClearLabels,
                {
                  name: "--clear-repositories",
                  description: "Clear repositories value and set to empty list",
                },
                {
                  name: "--clear-resources",
                  description: "Clear resources value and set to empty list",
                },
                optCodeRepositoryIndex,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLabels2,
                optLocation11,
                optLogHttp,
                optNoAsync,
                optNoClearLabels,
                {
                  name: "--no-clear-repositories",
                  description: "Clear repositories value and set to empty list",
                  hidden: true,
                },
                {
                  name: "--no-clear-resources",
                  description: "Clear resources value and set to empty list",
                  hidden: true,
                },
                optProject,
                optQuiet,
                optRemoveLabels,
                {
                  name: "--remove-repositories",
                  description:
                    "Remove existing value from repositories list. List of repositories to group",
                  args: {
                    name: "REMOVE_REPOSITORIES",
                  },
                },
                {
                  name: "--remove-resources",
                  description:
                    "Remove existing value from resources list. List of third party connection resources",
                  args: {
                    name: "REMOVE_RESOURCES",
                  },
                },
                {
                  name: "--repositories",
                  description:
                    "Set repositories to new value. List of repositories to group",
                  args: {
                    name: "REPOSITORIES",
                  },
                },
                optRequestId2,
                {
                  name: "--resources",
                  description:
                    "Set resources to new value. List of third party connection resources",
                  args: {
                    name: "RESOURCES",
                  },
                },
                optTraceToken,
                optUpdateLabels,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "REPOSITORY_GROUP",
                description:
                  "ID of the repositoryGroup or fully qualified identifier for the repositoryGroup",
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
          description:
            "Update the configuration of a code repository index instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optClearLabels,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLabels2,
            optLocation2,
            optLogHttp,
            optNoAsync,
            optNoClearLabels,
            optProject,
            optQuiet,
            optRemoveLabels,
            optRequestId2,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CODE_REPOSITORY_INDEX",
            description:
              "ID of the codeRepositoryIndex or fully qualified identifier for the codeRepositoryIndex",
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
      name: "code-tools-settings",
      description: "Manage Code Tools Setting resources",
      subcommands: [
        {
          name: "create",
          description: "Create codeToolsSettings",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--enabled-tool",
              description: "Required, Represents the full set of enabled tools",
              priority: 100,
              args: {
                name: "ENABLED_TOOL",
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
            optLocation3,
            optLogHttp,
            optProject,
            optQuiet,
            optRequestId2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CODE_TOOLS_SETTING",
            description:
              "ID of the codeToolsSetting or fully qualified identifier for the codeToolsSetting",
          },
        },
        {
          name: "delete",
          description: "Delete codeToolsSettings",
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
                "If set to true, any code tools settings from this publisher will also be deleted. (Otherwise, the request will only work if the publisher has no books.)",
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation3,
            optLogHttp,
            {
              name: "--no-force",
              description:
                "If set to true, any code tools settings from this publisher will also be deleted. (Otherwise, the request will only work if the publisher has no books.)",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRequestId,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CODE_TOOLS_SETTING",
            description:
              "ID of the codeToolsSetting or fully qualified identifier for the codeToolsSetting",
          },
        },
        {
          name: "describe",
          description: "Describe codeToolsSettings",
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
            name: "CODE_TOOLS_SETTING",
            description:
              "ID of the codeToolsSetting or fully qualified identifier for the codeToolsSetting",
          },
        },
        {
          name: "list",
          description: "List codeToolsSettings",
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
          name: "setting-bindings",
          description: "Manage Setting Binding resources",
          subcommands: [
            {
              name: "create",
              description: "Create settingBindings",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optCodeToolsSetting,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLabels,
                optLocation12,
                optLogHttp,
                optNoAsync,
                optProduct,
                optProject,
                optQuiet,
                optRequestId2,
                optTarget,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
              },
            },
            {
              name: "delete",
              description: "Delete settingBindings",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optCodeToolsSetting,
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
                optNoAsync,
                optProject,
                optQuiet,
                optRequestId,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
              },
            },
            {
              name: "describe",
              description: "Describe settingBindings",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCodeToolsSetting,
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
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
              },
            },
            {
              name: "list",
              description: "List settingBindings",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--code-tools-setting",
                  description:
                    "ID of the codeToolsSetting or fully qualified identifier for the codeToolsSetting",
                  priority: 100,
                  args: {
                    name: "CODE_TOOLS_SETTING",
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
              description: "Update settingBindings",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optClearLabels,
                optCodeToolsSetting,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLabels2,
                optLocation12,
                optLogHttp,
                optNoAsync,
                optNoClearLabels,
                optProduct,
                optProject,
                optQuiet,
                optRemoveLabels,
                optRequestId2,
                optTarget2,
                optTraceToken,
                optUpdateLabels,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
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
          description: "Update codeToolsSettings",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-enabled-tool",
              description:
                "Add new value to enabled_tool list. Represents the full set of enabled tools",
              args: {
                name: "ADD_ENABLED_TOOL",
              },
            },
            optBillingProject,
            {
              name: "--clear-enabled-tool",
              description: "Clear enabled_tool value and set to empty list",
            },
            optClearLabels,
            optConfiguration,
            {
              name: "--enabled-tool",
              description:
                "Set enabled_tool to new value. Represents the full set of enabled tools",
              args: {
                name: "ENABLED_TOOL",
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
            optLabels2,
            optLocation3,
            optLogHttp,
            {
              name: "--no-clear-enabled-tool",
              description: "Clear enabled_tool value and set to empty list",
              hidden: true,
            },
            optNoClearLabels,
            optProject,
            optQuiet,
            {
              name: "--remove-enabled-tool",
              description:
                "Remove existing value from enabled_tool list. Represents the full set of enabled tools",
              args: {
                name: "REMOVE_ENABLED_TOOL",
              },
            },
            optRemoveLabels,
            optRequestId2,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CODE_TOOLS_SETTING",
            description:
              "ID of the codeToolsSetting or fully qualified identifier for the codeToolsSetting",
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
      name: "data-sharing-with-google-settings",
      description: "Manage Data Sharing With Google Setting resources",
      subcommands: [
        {
          name: "create",
          description: "Create dataSharingWithGoogleSettings",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--enable-data-sharing",
              description:
                "Whether data sharing should be enabled in GA products",
            },
            {
              name: "--enable-preview-data-sharing",
              description:
                "Whether data sharing should be enabled in Preview products",
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
            optLocation4,
            optLogHttp,
            {
              name: "--no-enable-data-sharing",
              description:
                "Whether data sharing should be enabled in GA products",
              hidden: true,
            },
            {
              name: "--no-enable-preview-data-sharing",
              description:
                "Whether data sharing should be enabled in Preview products",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRequestId2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DATA_SHARING_WITH_GOOGLE_SETTING",
            description:
              "ID of the dataSharingWithGoogleSetting or fully qualified identifier for the dataSharingWithGoogleSetting",
          },
        },
        {
          name: "delete",
          description: "Delete dataSharingWithGoogleSettings",
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
            optRequestId,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DATA_SHARING_WITH_GOOGLE_SETTING",
            description:
              "ID of the dataSharingWithGoogleSetting or fully qualified identifier for the dataSharingWithGoogleSetting",
          },
        },
        {
          name: "describe",
          description: "Describe dataSharingWithGoogleSettings",
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
            name: "DATA_SHARING_WITH_GOOGLE_SETTING",
            description:
              "ID of the dataSharingWithGoogleSetting or fully qualified identifier for the dataSharingWithGoogleSetting",
          },
        },
        {
          name: "list",
          description: "List dataSharingWithGoogleSettings",
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
          name: "setting-bindings",
          description: "Manage Setting Binding resources",
          subcommands: [
            {
              name: "create",
              description: "Create settingBindings",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optDataSharingWithGoogleSetting,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLabels,
                optLocation12,
                optLogHttp,
                optNoAsync,
                optProduct,
                optProject,
                optQuiet,
                optRequestId2,
                optTarget,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
              },
            },
            {
              name: "delete",
              description: "Delete settingBindings",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optDataSharingWithGoogleSetting,
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
                optNoAsync,
                optProject,
                optQuiet,
                optRequestId,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
              },
            },
            {
              name: "describe",
              description: "Describe settingBindings",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optDataSharingWithGoogleSetting,
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
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
              },
            },
            {
              name: "list",
              description: "List settingBindings",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--data-sharing-with-google-setting",
                  description:
                    "ID of the dataSharingWithGoogleSetting or fully qualified identifier for the dataSharingWithGoogleSetting",
                  priority: 100,
                  args: {
                    name: "DATA_SHARING_WITH_GOOGLE_SETTING",
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
              description: "Update settingBindings",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optClearLabels,
                optConfiguration,
                optDataSharingWithGoogleSetting,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLabels2,
                optLocation12,
                optLogHttp,
                optNoAsync,
                optNoClearLabels,
                optProduct,
                optProject,
                optQuiet,
                optRemoveLabels,
                optRequestId2,
                optTarget2,
                optTraceToken,
                optUpdateLabels,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
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
          description: "Update dataSharingWithGoogleSettings",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optClearLabels,
            optConfiguration,
            {
              name: "--enable-data-sharing",
              description:
                "Whether data sharing should be enabled in GA products. Use *--enable-data-sharing* to enable and *--no-enable-data-sharing* to disable",
            },
            {
              name: "--enable-preview-data-sharing",
              description:
                "Whether data sharing should be enabled in Preview products. Use *--enable-preview-data-sharing* to enable and *--no-enable-preview-data-sharing* to disable",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLabels2,
            optLocation4,
            optLogHttp,
            optNoClearLabels,
            {
              name: "--no-enable-data-sharing",
              description:
                "Whether data sharing should be enabled in GA products",
            },
            {
              name: "--no-enable-preview-data-sharing",
              description:
                "Whether data sharing should be enabled in Preview products",
            },
            optProject,
            optQuiet,
            optRemoveLabels,
            optRequestId2,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DATA_SHARING_WITH_GOOGLE_SETTING",
            description:
              "ID of the dataSharingWithGoogleSetting or fully qualified identifier for the dataSharingWithGoogleSetting",
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
      name: "gda-observability-settings",
      description: "Manage Gda Observability Setting resources",
      subcommands: [
        {
          name: "create",
          description: "Create gdaObservabilitySettings",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--conversational-analytics-setting-feedback-enabled",
              description: "Whether to enable feedback",
            },
            {
              name: "--conversational-analytics-setting-logging-enabled",
              description: "Whether to enable logging",
            },
            {
              name: "--conversational-analytics-setting-metrics-enabled",
              description: "Whether to enable metrics",
            },
            {
              name: "--conversational-analytics-setting-traces-enabled",
              description: "Whether to enable traces",
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
            optLocation5,
            optLogHttp,
            {
              name: "--no-conversational-analytics-setting-feedback-enabled",
              description: "Whether to enable feedback",
              hidden: true,
            },
            {
              name: "--no-conversational-analytics-setting-logging-enabled",
              description: "Whether to enable logging",
              hidden: true,
            },
            {
              name: "--no-conversational-analytics-setting-metrics-enabled",
              description: "Whether to enable metrics",
              hidden: true,
            },
            {
              name: "--no-conversational-analytics-setting-traces-enabled",
              description: "Whether to enable traces",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRequestId2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "GDA_OBSERVABILITY_SETTING",
            description:
              "ID of the gdaObservabilitySetting or fully qualified identifier for the gdaObservabilitySetting",
          },
        },
        {
          name: "delete",
          description: "Delete gdaObservabilitySettings",
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
            optRequestId,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "GDA_OBSERVABILITY_SETTING",
            description:
              "ID of the gdaObservabilitySetting or fully qualified identifier for the gdaObservabilitySetting",
          },
        },
        {
          name: "describe",
          description: "Describe gdaObservabilitySettings",
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
            name: "GDA_OBSERVABILITY_SETTING",
            description:
              "ID of the gdaObservabilitySetting or fully qualified identifier for the gdaObservabilitySetting",
          },
        },
        {
          name: "list",
          description: "List gdaObservabilitySettings",
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
          name: "setting-bindings",
          description: "Manage Setting Binding resources",
          subcommands: [
            {
              name: "create",
              description: "Create settingBindings",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGdaObservabilitySetting,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLabels,
                optLocation12,
                optLogHttp,
                optNoAsync,
                optProduct,
                optProject,
                optQuiet,
                optRequestId2,
                optTarget,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
              },
            },
            {
              name: "delete",
              description: "Delete settingBindings",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGdaObservabilitySetting,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLocation12,
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
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
              },
            },
            {
              name: "describe",
              description: "Describe settingBindings",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGdaObservabilitySetting,
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
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
              },
            },
            {
              name: "list",
              description: "List settingBindings",
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
                  name: "--gda-observability-setting",
                  description:
                    "ID of the gdaObservabilitySetting or fully qualified identifier for the gdaObservabilitySetting",
                  priority: 100,
                  args: {
                    name: "GDA_OBSERVABILITY_SETTING",
                    description: "String",
                  },
                },
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
                optTraceToken,
                optUri,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "update",
              description: "Update settingBindings",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optClearLabels,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGdaObservabilitySetting,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLabels2,
                optLocation12,
                optLogHttp,
                optNoAsync,
                optNoClearLabels,
                optProduct,
                optProject,
                optQuiet,
                optRemoveLabels,
                optRequestId2,
                optTarget2,
                optTraceToken,
                optUpdateLabels,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
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
          description: "Update gdaObservabilitySettings",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--clear-conversational-analytics-setting",
              description:
                "Set gdaObservabilitySetting.conversationalAnalyticsSetting back to default value",
            },
            optClearLabels,
            optConfiguration,
            {
              name: "--conversational-analytics-setting-feedback-enabled",
              description:
                "Whether to enable feedback. Use *--conversational-analytics-setting-feedback-enabled* to enable and *--no-conversational-analytics-setting-feedback-enabled* to disable",
            },
            {
              name: "--conversational-analytics-setting-logging-enabled",
              description:
                "Whether to enable logging. Use *--conversational-analytics-setting-logging-enabled* to enable and *--no-conversational-analytics-setting-logging-enabled* to disable",
            },
            {
              name: "--conversational-analytics-setting-metrics-enabled",
              description:
                "Whether to enable metrics. Use *--conversational-analytics-setting-metrics-enabled* to enable and *--no-conversational-analytics-setting-metrics-enabled* to disable",
            },
            {
              name: "--conversational-analytics-setting-traces-enabled",
              description:
                "Whether to enable traces. Use *--conversational-analytics-setting-traces-enabled* to enable and *--no-conversational-analytics-setting-traces-enabled* to disable",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLabels2,
            optLocation5,
            optLogHttp,
            {
              name: "--no-clear-conversational-analytics-setting",
              description:
                "Set gdaObservabilitySetting.conversationalAnalyticsSetting back to default value",
              hidden: true,
            },
            optNoClearLabels,
            {
              name: "--no-conversational-analytics-setting-feedback-enabled",
              description: "Whether to enable feedback",
            },
            {
              name: "--no-conversational-analytics-setting-logging-enabled",
              description: "Whether to enable logging",
            },
            {
              name: "--no-conversational-analytics-setting-metrics-enabled",
              description: "Whether to enable metrics",
            },
            {
              name: "--no-conversational-analytics-setting-traces-enabled",
              description: "Whether to enable traces",
            },
            optProject,
            optQuiet,
            optRemoveLabels,
            optRequestId2,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "GDA_OBSERVABILITY_SETTING",
            description:
              "ID of the gdaObservabilitySetting or fully qualified identifier for the gdaObservabilitySetting",
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
      name: "gemini-gcp-enablement-settings",
      description: "Manage Gemini Gcp Enablement Setting resources",
      subcommands: [
        {
          name: "create",
          description: "Create geminiGcpEnablementSettings",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--custom-instructions",
              description:
                "Contains custom instructions to be applied to the GCA agent",
              args: {
                name: "CUSTOM_INSTRUCTIONS",
                description: "String",
              },
            },
            {
              name: "--disable-web-grounding",
              description:
                "Whether web grounding should be disabled. DEPRECATED: Use web_grounding_type instead",
            },
            {
              name: "--enable-customer-data-sharing",
              description: "Not implemented",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gemini-enterprise-project",
              description:
                "The Gemini enterprise project for this setting. Format: projects/{project} The `{project}` segment can be the project ID or project number",
              args: {
                name: "GEMINI_ENTERPRISE_PROJECT",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLabels,
            optLocation6,
            optLogHttp,
            {
              name: "--mutations-enabled",
              description:
                "Indicates whether resource mutations are enabled. If not set, resource mutations are disabled",
            },
            {
              name: "--no-disable-web-grounding",
              description:
                "Whether web grounding should be disabled. DEPRECATED: Use web_grounding_type instead",
              hidden: true,
            },
            {
              name: "--no-enable-customer-data-sharing",
              description: "Not implemented",
              hidden: true,
            },
            {
              name: "--no-mutations-enabled",
              description:
                "Indicates whether resource mutations are enabled. If not set, resource mutations are disabled",
              hidden: true,
            },
            {
              name: "--no-proactive-agents-enabled",
              description:
                "Indicates whether proactive agents are enabled. If not set, proactive agents are disabled",
              hidden: true,
            },
            {
              name: "--proactive-agents-enabled",
              description:
                "Indicates whether proactive agents are enabled. If not set, proactive agents are disabled",
            },
            optProject,
            optQuiet,
            {
              name: "--release-channel",
              description:
                "Specifies the release channel for Gemini features. The release channel determines which set of features are available to the user. _RELEASE_CHANNEL_ must be one of:",
              args: {
                name: "RELEASE_CHANNEL",
                suggestions: ["experimental", "stable"],
              },
            },
            optRequestId2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--web-grounding-type",
              description:
                "Web grounding type. _WEB_GROUNDING_TYPE_ must be one of:",
              args: {
                name: "WEB_GROUNDING_TYPE",
                suggestions: [
                  "grounding-with-google-search",
                  "web-grounding-for-enterprise",
                ],
              },
            },
          ],
          args: {
            name: "GEMINI_GCP_ENABLEMENT_SETTING",
            description:
              "ID of the geminiGcpEnablementSetting or fully qualified identifier for the geminiGcpEnablementSetting",
          },
        },
        {
          name: "delete",
          description: "Delete geminiGcpEnablementSettings",
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
            optRequestId,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "GEMINI_GCP_ENABLEMENT_SETTING",
            description:
              "ID of the geminiGcpEnablementSetting or fully qualified identifier for the geminiGcpEnablementSetting",
          },
        },
        {
          name: "describe",
          description: "Describe geminiGcpEnablementSettings",
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
            name: "GEMINI_GCP_ENABLEMENT_SETTING",
            description:
              "ID of the geminiGcpEnablementSetting or fully qualified identifier for the geminiGcpEnablementSetting",
          },
        },
        {
          name: "list",
          description: "List geminiGcpEnablementSettings",
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
          name: "setting-bindings",
          description: "Manage Setting Binding resources",
          subcommands: [
            {
              name: "create",
              description: "Create settingBindings",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGeminiGcpEnablementSetting,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLabels,
                optLocation12,
                optLogHttp,
                optNoAsync,
                optProduct,
                optProject,
                optQuiet,
                optRequestId2,
                optTarget,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
              },
            },
            {
              name: "delete",
              description: "Delete settingBindings",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGeminiGcpEnablementSetting,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLocation12,
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
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
              },
            },
            {
              name: "describe",
              description: "Describe settingBindings",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGeminiGcpEnablementSetting,
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
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
              },
            },
            {
              name: "list",
              description: "List settingBindings",
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
                  name: "--gemini-gcp-enablement-setting",
                  description:
                    "ID of the geminiGcpEnablementSetting or fully qualified identifier for the geminiGcpEnablementSetting",
                  priority: 100,
                  args: {
                    name: "GEMINI_GCP_ENABLEMENT_SETTING",
                    description: "String",
                  },
                },
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
                optTraceToken,
                optUri,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "update",
              description: "Update settingBindings",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optClearLabels,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGeminiGcpEnablementSetting,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLabels2,
                optLocation12,
                optLogHttp,
                optNoAsync,
                optNoClearLabels,
                optProduct,
                optProject,
                optQuiet,
                optRemoveLabels,
                optRequestId2,
                optTarget2,
                optTraceToken,
                optUpdateLabels,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
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
          description: "Update geminiGcpEnablementSettings",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optClearLabels,
            optConfiguration,
            {
              name: "--custom-instructions",
              description:
                "Contains custom instructions to be applied to the GCA agent",
              args: {
                name: "CUSTOM_INSTRUCTIONS",
                description: "String",
              },
            },
            {
              name: "--disable-web-grounding",
              description:
                "Whether web grounding should be disabled. DEPRECATED: Use web_grounding_type instead. Use *--disable-web-grounding* to enable and *--no-disable-web-grounding* to disable",
            },
            {
              name: "--enable-customer-data-sharing",
              description:
                "Not implemented. Use *--enable-customer-data-sharing* to enable and *--no-enable-customer-data-sharing* to disable",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gemini-enterprise-project",
              description:
                "The Gemini enterprise project for this setting. Format: projects/{project} The `{project}` segment can be the project ID or project number",
              args: {
                name: "GEMINI_ENTERPRISE_PROJECT",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLabels2,
            optLocation6,
            optLogHttp,
            {
              name: "--mutations-enabled",
              description:
                "Indicates whether resource mutations are enabled. If not set, resource mutations are disabled. Use *--mutations-enabled* to enable and *--no-mutations-enabled* to disable",
            },
            optNoClearLabels,
            {
              name: "--no-disable-web-grounding",
              description:
                "Whether web grounding should be disabled. DEPRECATED: Use web_grounding_type instead",
            },
            {
              name: "--no-enable-customer-data-sharing",
              description: "Not implemented",
            },
            {
              name: "--no-mutations-enabled",
              description:
                "Indicates whether resource mutations are enabled. If not set, resource mutations are disabled",
            },
            {
              name: "--no-proactive-agents-enabled",
              description:
                "Indicates whether proactive agents are enabled. If not set, proactive agents are disabled",
            },
            {
              name: "--proactive-agents-enabled",
              description:
                "Indicates whether proactive agents are enabled. If not set, proactive agents are disabled. Use *--proactive-agents-enabled* to enable and *--no-proactive-agents-enabled* to disable",
            },
            optProject,
            optQuiet,
            {
              name: "--release-channel",
              description:
                "Specifies the release channel for Gemini features. The release channel determines which set of features are available to the user. _RELEASE_CHANNEL_ must be one of:",
              args: {
                name: "RELEASE_CHANNEL",
                suggestions: ["experimental", "stable"],
              },
            },
            optRemoveLabels,
            optRequestId2,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--web-grounding-type",
              description:
                "Web grounding type. _WEB_GROUNDING_TYPE_ must be one of:",
              args: {
                name: "WEB_GROUNDING_TYPE",
                suggestions: [
                  "grounding-with-google-search",
                  "web-grounding-for-enterprise",
                ],
              },
            },
          ],
          args: {
            name: "GEMINI_GCP_ENABLEMENT_SETTING",
            description:
              "ID of the geminiGcpEnablementSetting or fully qualified identifier for the geminiGcpEnablementSetting",
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
      name: "gibq-observability-settings",
      description: "Manage Gibq Observability Setting resources",
      subcommands: [
        {
          name: "create",
          description: "Create gibqObservabilitySettings",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--conversational-analytics-setting-feedback-enabled",
              description: "Whether to enable feedback",
            },
            {
              name: "--conversational-analytics-setting-logging-enabled",
              description: "Whether to enable logging",
            },
            {
              name: "--conversational-analytics-setting-metrics-enabled",
              description: "Whether to enable metrics",
            },
            {
              name: "--conversational-analytics-setting-traces-enabled",
              description: "Whether to enable traces",
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
            optLocation7,
            optLogHttp,
            {
              name: "--no-conversational-analytics-setting-feedback-enabled",
              description: "Whether to enable feedback",
              hidden: true,
            },
            {
              name: "--no-conversational-analytics-setting-logging-enabled",
              description: "Whether to enable logging",
              hidden: true,
            },
            {
              name: "--no-conversational-analytics-setting-metrics-enabled",
              description: "Whether to enable metrics",
              hidden: true,
            },
            {
              name: "--no-conversational-analytics-setting-traces-enabled",
              description: "Whether to enable traces",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRequestId2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "GIBQ_OBSERVABILITY_SETTING",
            description:
              "ID of the gibqObservabilitySetting or fully qualified identifier for the gibqObservabilitySetting",
          },
        },
        {
          name: "delete",
          description: "Delete gibqObservabilitySettings",
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
            optRequestId,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "GIBQ_OBSERVABILITY_SETTING",
            description:
              "ID of the gibqObservabilitySetting or fully qualified identifier for the gibqObservabilitySetting",
          },
        },
        {
          name: "describe",
          description: "Describe gibqObservabilitySettings",
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
            name: "GIBQ_OBSERVABILITY_SETTING",
            description:
              "ID of the gibqObservabilitySetting or fully qualified identifier for the gibqObservabilitySetting",
          },
        },
        {
          name: "list",
          description: "List gibqObservabilitySettings",
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
          name: "setting-bindings",
          description: "Manage Setting Binding resources",
          subcommands: [
            {
              name: "create",
              description: "Create settingBindings",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGibqObservabilitySetting,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLabels,
                optLocation12,
                optLogHttp,
                optNoAsync,
                optProduct,
                optProject,
                optQuiet,
                optRequestId2,
                optTarget,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
              },
            },
            {
              name: "delete",
              description: "Delete settingBindings",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGibqObservabilitySetting,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLocation12,
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
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
              },
            },
            {
              name: "describe",
              description: "Describe settingBindings",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGibqObservabilitySetting,
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
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
              },
            },
            {
              name: "list",
              description: "List settingBindings",
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
                  name: "--gibq-observability-setting",
                  description:
                    "ID of the gibqObservabilitySetting or fully qualified identifier for the gibqObservabilitySetting",
                  priority: 100,
                  args: {
                    name: "GIBQ_OBSERVABILITY_SETTING",
                    description: "String",
                  },
                },
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
                optTraceToken,
                optUri,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "update",
              description: "Update settingBindings",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optClearLabels,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGibqObservabilitySetting,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLabels2,
                optLocation12,
                optLogHttp,
                optNoAsync,
                optNoClearLabels,
                optProduct,
                optProject,
                optQuiet,
                optRemoveLabels,
                optRequestId2,
                optTarget2,
                optTraceToken,
                optUpdateLabels,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
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
          description: "Update gibqObservabilitySettings",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--clear-conversational-analytics-setting",
              description:
                "Set gibqObservabilitySetting.conversationalAnalyticsSetting back to default value",
            },
            optClearLabels,
            optConfiguration,
            {
              name: "--conversational-analytics-setting-feedback-enabled",
              description:
                "Whether to enable feedback. Use *--conversational-analytics-setting-feedback-enabled* to enable and *--no-conversational-analytics-setting-feedback-enabled* to disable",
            },
            {
              name: "--conversational-analytics-setting-logging-enabled",
              description:
                "Whether to enable logging. Use *--conversational-analytics-setting-logging-enabled* to enable and *--no-conversational-analytics-setting-logging-enabled* to disable",
            },
            {
              name: "--conversational-analytics-setting-metrics-enabled",
              description:
                "Whether to enable metrics. Use *--conversational-analytics-setting-metrics-enabled* to enable and *--no-conversational-analytics-setting-metrics-enabled* to disable",
            },
            {
              name: "--conversational-analytics-setting-traces-enabled",
              description:
                "Whether to enable traces. Use *--conversational-analytics-setting-traces-enabled* to enable and *--no-conversational-analytics-setting-traces-enabled* to disable",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLabels2,
            optLocation7,
            optLogHttp,
            {
              name: "--no-clear-conversational-analytics-setting",
              description:
                "Set gibqObservabilitySetting.conversationalAnalyticsSetting back to default value",
              hidden: true,
            },
            optNoClearLabels,
            {
              name: "--no-conversational-analytics-setting-feedback-enabled",
              description: "Whether to enable feedback",
            },
            {
              name: "--no-conversational-analytics-setting-logging-enabled",
              description: "Whether to enable logging",
            },
            {
              name: "--no-conversational-analytics-setting-metrics-enabled",
              description: "Whether to enable metrics",
            },
            {
              name: "--no-conversational-analytics-setting-traces-enabled",
              description: "Whether to enable traces",
            },
            optProject,
            optQuiet,
            optRemoveLabels,
            optRequestId2,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "GIBQ_OBSERVABILITY_SETTING",
            description:
              "ID of the gibqObservabilitySetting or fully qualified identifier for the gibqObservabilitySetting",
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
      name: "logging-settings",
      description: "Manage Logging Setting resources",
      subcommands: [
        {
          name: "create",
          description: "Create loggingSettings",
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
            optLabels,
            optLocation8,
            optLogHttp,
            {
              name: "--log-metadata",
              description: "Whether to log metadata",
            },
            {
              name: "--log-prompts-and-responses",
              description: "Whether to log prompts and responses",
            },
            {
              name: "--no-log-metadata",
              description: "Whether to log metadata",
              hidden: true,
            },
            {
              name: "--no-log-prompts-and-responses",
              description: "Whether to log prompts and responses",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRequestId2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "LOGGING_SETTING",
            description:
              "ID of the loggingSetting or fully qualified identifier for the loggingSetting",
          },
        },
        {
          name: "delete",
          description: "Delete loggingSettings",
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
            optRequestId,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "LOGGING_SETTING",
            description:
              "ID of the loggingSetting or fully qualified identifier for the loggingSetting",
          },
        },
        {
          name: "describe",
          description: "Describe loggingSettings",
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
            name: "LOGGING_SETTING",
            description:
              "ID of the loggingSetting or fully qualified identifier for the loggingSetting",
          },
        },
        {
          name: "list",
          description: "List loggingSettings",
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
          name: "setting-bindings",
          description: "Manage Setting Binding resources",
          subcommands: [
            {
              name: "create",
              description: "Create settingBindings",
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
                optLabels,
                optLocation12,
                optLogHttp,
                optLoggingSetting,
                optNoAsync,
                optProduct,
                optProject,
                optQuiet,
                optRequestId2,
                optTarget,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
              },
            },
            {
              name: "delete",
              description: "Delete settingBindings",
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
                optLocation12,
                optLogHttp,
                optLoggingSetting,
                optNoAsync,
                optProject,
                optQuiet,
                optRequestId,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
              },
            },
            {
              name: "describe",
              description: "Describe settingBindings",
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
                optLoggingSetting,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
              },
            },
            {
              name: "list",
              description: "List settingBindings",
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
                optLocation8,
                optLogHttp,
                {
                  name: "--logging-setting",
                  description:
                    "ID of the loggingSetting or fully qualified identifier for the loggingSetting",
                  priority: 100,
                  args: {
                    name: "LOGGING_SETTING",
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
              name: "update",
              description: "Update settingBindings",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optClearLabels,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLabels2,
                optLocation12,
                optLogHttp,
                optLoggingSetting,
                optNoAsync,
                optNoClearLabels,
                optProduct,
                optProject,
                optQuiet,
                optRemoveLabels,
                optRequestId2,
                optTarget2,
                optTraceToken,
                optUpdateLabels,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
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
          description: "Update loggingSettings",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optClearLabels,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLabels2,
            optLocation8,
            optLogHttp,
            {
              name: "--log-metadata",
              description:
                "Whether to log metadata. Use *--log-metadata* to enable and *--no-log-metadata* to disable",
            },
            {
              name: "--log-prompts-and-responses",
              description:
                "Whether to log prompts and responses. Use *--log-prompts-and-responses* to enable and *--no-log-prompts-and-responses* to disable",
            },
            optNoClearLabels,
            {
              name: "--no-log-metadata",
              description: "Whether to log metadata",
            },
            {
              name: "--no-log-prompts-and-responses",
              description: "Whether to log prompts and responses",
            },
            optProject,
            optQuiet,
            optRemoveLabels,
            optRequestId2,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "LOGGING_SETTING",
            description:
              "ID of the loggingSetting or fully qualified identifier for the loggingSetting",
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
            optLocation9,
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
            optLocation9,
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
            optLocation9,
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
          description: "Wait operations",
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
            optLocation9,
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
      name: "release-channel-settings",
      description: "Manage Release Channel Setting resources",
      subcommands: [
        {
          name: "create",
          description: "Create releaseChannelSettings",
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
            optLabels,
            optLocation10,
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--release-channel",
              description:
                "Release channel to be used. _RELEASE_CHANNEL_ must be one of:",
              args: {
                name: "RELEASE_CHANNEL",
                suggestions: ["experimental", "stable"],
              },
            },
            optRequestId2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RELEASE_CHANNEL_SETTING",
            description:
              "ID of the releaseChannelSetting or fully qualified identifier for the releaseChannelSetting",
          },
        },
        {
          name: "delete",
          description: "Delete releaseChannelSettings",
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
            optLocation10,
            optLogHttp,
            optProject,
            optQuiet,
            optRequestId,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RELEASE_CHANNEL_SETTING",
            description:
              "ID of the releaseChannelSetting or fully qualified identifier for the releaseChannelSetting",
          },
        },
        {
          name: "describe",
          description: "Describe releaseChannelSettings",
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
            optLocation10,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RELEASE_CHANNEL_SETTING",
            description:
              "ID of the releaseChannelSetting or fully qualified identifier for the releaseChannelSetting",
          },
        },
        {
          name: "list",
          description: "List releaseChannelSettings",
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
          name: "setting-bindings",
          description: "Manage Setting Binding resources",
          subcommands: [
            {
              name: "create",
              description: "Create settingBindings",
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
                optLabels,
                optLocation12,
                optLogHttp,
                optNoAsync,
                optProduct,
                optProject,
                optQuiet,
                optReleaseChannelSetting,
                optRequestId2,
                optTarget,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
              },
            },
            {
              name: "delete",
              description: "Delete settingBindings",
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
                optLocation12,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optReleaseChannelSetting,
                optRequestId,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
              },
            },
            {
              name: "describe",
              description: "Describe settingBindings",
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
                optReleaseChannelSetting,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
              },
            },
            {
              name: "list",
              description: "List settingBindings",
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
                optLocation10,
                optLogHttp,
                optNoUri,
                optPageSize,
                optProject,
                optQuiet,
                {
                  name: "--release-channel-setting",
                  description:
                    "ID of the releaseChannelSetting or fully qualified identifier for the releaseChannelSetting",
                  priority: 100,
                  args: {
                    name: "RELEASE_CHANNEL_SETTING",
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
            {
              name: "update",
              description: "Update settingBindings",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optClearLabels,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLabels2,
                optLocation12,
                optLogHttp,
                optNoAsync,
                optNoClearLabels,
                optProduct,
                optProject,
                optQuiet,
                optReleaseChannelSetting,
                optRemoveLabels,
                optRequestId2,
                optTarget2,
                optTraceToken,
                optUpdateLabels,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding",
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
          description: "Update releaseChannelSettings",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optClearLabels,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLabels2,
            optLocation10,
            optLogHttp,
            optNoClearLabels,
            optProject,
            optQuiet,
            {
              name: "--release-channel",
              description:
                "Release channel to be used. _RELEASE_CHANNEL_ must be one of:",
              args: {
                name: "RELEASE_CHANNEL",
                suggestions: ["experimental", "stable"],
              },
            },
            optRemoveLabels,
            optRequestId2,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RELEASE_CHANNEL_SETTING",
            description:
              "ID of the releaseChannelSetting or fully qualified identifier for the releaseChannelSetting",
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
