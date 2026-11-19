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
  description: "The api id of the operation resource",
  args: {
    name: "API",
    description: "String",
  },
};

const optApi2: Fig.Option = {
  name: "--api",
  description: "The api id of the spec resource",
  args: {
    name: "API",
    description: "String",
  },
};

const optApi3: Fig.Option = {
  name: "--api",
  description: "The api id of the version resource",
  args: {
    name: "API",
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

const optClearAttributes: Fig.Option = {
  name: "--clear-attributes",
  description: "Clear attributes value and set to empty map",
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

const optDocumentationExternalUri: Fig.Option = {
  name: "--documentation-external-uri",
  description: "The uri of the externally hosted documentation",
  args: {
    name: "DOCUMENTATION_EXTERNAL_URI",
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
  description: "The location id of the api resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description: "The location id of the apiHubInstance resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation4: Fig.Option = {
  name: "--location",
  description: "The location id of the attribute resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation5: Fig.Option = {
  name: "--location",
  description: "The location id of the curation resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation6: Fig.Option = {
  name: "--location",
  description: "The location id of the dependency resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation7: Fig.Option = {
  name: "--location",
  description: "The location id of the deployment resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation8: Fig.Option = {
  name: "--location",
  description: "The location id of the externalApi resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation9: Fig.Option = {
  name: "--location",
  description: "The location id of the instance resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation10: Fig.Option = {
  name: "--location",
  description: "The location id of the operation resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation11: Fig.Option = {
  name: "--location",
  description: "The location id of the plugin resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation12: Fig.Option = {
  name: "--location",
  description: "The location id of the runtimeProjectAttachment resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation13: Fig.Option = {
  name: "--location",
  description: "The location id of the spec resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation14: Fig.Option = {
  name: "--location",
  description: "The location id of the version resource",
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

const optNoClearAttributes: Fig.Option = {
  name: "--no-clear-attributes",
  description: "Clear attributes value and set to empty map",
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

const optPlugin: Fig.Option = {
  name: "--plugin",
  description: "The plugin id of the instance resource",
  args: {
    name: "PLUGIN",
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

const optRemoveAttributes: Fig.Option = {
  name: "--remove-attributes",
  description:
    "Remove existing value from map attributes. Sets `remove_attributes` value",
  args: {
    name: "REMOVE_ATTRIBUTES",
    description: "Dict",
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
  name: "apihub",
  description: "Manage Apihub resources",
  subcommands: [
    {
      name: "addons",
      description: "Manage Addon resources",
      subcommands: [
        {
          name: "describe",
          description: "Describe an Addon",
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
              description: "The location id of the addon resource",
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
            name: "ADDON",
            description:
              "ID of the addon or fully qualified identifier for the addon",
          },
        },
        {
          name: "list",
          description: "List Addons",
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
          name: "manage-config",
          description: "Manage the Config of an Addon",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--all-data-addon-config-enabled",
              description:
                "If true, the addon is enabled for all data in the API hub. Use *--all-data-addon-config-enabled* to enable and *--no-all-data-addon-config-enabled* to disable",
              priority: 100,
            },
            optAsync,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gateway-plugin-addon-config-configs",
              description:
                "Required, The list of gateway plugin configs for which the addon is enabled. Each gateway plugin config should have a unique plugin instance",
              priority: 100,
              args: {
                name: "GATEWAY_PLUGIN_ADDON_CONFIG_CONFIGS",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--location",
              description: "The location id of the addon resource",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--no-all-data-addon-config-enabled",
              description:
                "If true, the addon is enabled for all data in the API hub",
              priority: 100,
            },
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ADDON",
            description:
              "ID of the addon or fully qualified identifier for the addon",
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
      name: "api-hub-instances",
      description: "Manage Api Hub Instance resources",
      subcommands: [
        {
          name: "create",
          description: "Create an Api Hub Instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--config-cmek-key-name",
              description:
                "The Customer Managed Encryption Key (CMEK) used for data encryption. The CMEK name should follow the format of `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`, where the location must match the instance location. If the CMEK is not provided, a GMEK will be created for the instance",
              args: {
                name: "CONFIG_CMEK_KEY_NAME",
                description: "String",
              },
            },
            {
              name: "--config-disable-search",
              description:
                "If true, the search will be disabled for the instance. The default value is false",
            },
            {
              name: "--config-encryption-type",
              description:
                "Encryption type for the region. If the encryption type is CMEK, the cmek_key_name must be provided. If no encryption type is provided, GMEK will be used. _CONFIG_ENCRYPTION_TYPE_ must be one of:",
              args: {
                name: "CONFIG_ENCRYPTION_TYPE",
                suggestions: ["cmek", "gmek"],
              },
            },
            {
              name: "--config-vertex-location",
              description:
                "The name of the Vertex AI location where the data store is stored",
              args: {
                name: "CONFIG_VERTEX_LOCATION",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--description",
              description: "Description of the ApiHub instance",
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
            {
              name: "--labels",
              description:
                "Instance labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources",
              args: {
                name: "LABELS",
              },
            },
            optLocation3,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-config-disable-search",
              description:
                "If true, the search will be disabled for the instance. The default value is false",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "API_HUB_INSTANCE",
            description:
              "ID of the apiHubInstance or fully qualified identifier for the apiHubInstance",
          },
        },
        {
          name: "delete",
          description: "Delete an Api Hub Instance",
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
            name: "API_HUB_INSTANCE",
            description:
              "ID of the apiHubInstance or fully qualified identifier for the apiHubInstance",
          },
        },
        {
          name: "describe",
          description: "Describe an Api Hub Instance",
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
            name: "API_HUB_INSTANCE",
            description:
              "ID of the apiHubInstance or fully qualified identifier for the apiHubInstance",
          },
        },
        {
          name: "lookup",
          description: "Lookup apiHubInstances",
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
      name: "apis",
      description: "Manage Api resources",
      subcommands: [
        {
          name: "create",
          description: "Create apis",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--api",
              description:
                "For resources [api, selected-version], provides fallback value for resource api attribute. When the resource's full URI path is not provided, api will fallback to this flag value",
              args: {
                name: "API",
                description: "String",
              },
            },
            {
              name: "--api-functional-requirements-enum-values",
              description:
                "Required, The attribute values in case attribute data type is enum",
              priority: 100,
              args: {
                name: "API_FUNCTIONAL_REQUIREMENTS_ENUM_VALUES",
              },
            },
            {
              name: "--api-functional-requirements-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "API_FUNCTIONAL_REQUIREMENTS_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--api-functional-requirements-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "API_FUNCTIONAL_REQUIREMENTS_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--api-functional-requirements-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "API_FUNCTIONAL_REQUIREMENTS_URI_VALUES",
                description: "List",
              },
            },
            {
              name: "--api-requirements-enum-values",
              description:
                "Required, The attribute values in case attribute data type is enum",
              priority: 100,
              args: {
                name: "API_REQUIREMENTS_ENUM_VALUES",
              },
            },
            {
              name: "--api-requirements-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "API_REQUIREMENTS_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--api-requirements-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "API_REQUIREMENTS_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--api-requirements-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "API_REQUIREMENTS_URI_VALUES",
                description: "List",
              },
            },
            {
              name: "--api-style-enum-values",
              description:
                "Required, The attribute values in case attribute data type is enum",
              priority: 100,
              args: {
                name: "API_STYLE_ENUM_VALUES",
              },
            },
            {
              name: "--api-style-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "API_STYLE_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--api-style-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "API_STYLE_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--api-style-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "API_STYLE_URI_VALUES",
                description: "List",
              },
            },
            {
              name: "--api-technical-requirements-enum-values",
              description:
                "Required, The attribute values in case attribute data type is enum",
              priority: 100,
              args: {
                name: "API_TECHNICAL_REQUIREMENTS_ENUM_VALUES",
              },
            },
            {
              name: "--api-technical-requirements-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "API_TECHNICAL_REQUIREMENTS_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--api-technical-requirements-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "API_TECHNICAL_REQUIREMENTS_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--api-technical-requirements-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "API_TECHNICAL_REQUIREMENTS_URI_VALUES",
                description: "List",
              },
            },
            {
              name: "--attributes",
              description:
                "The list of user defined attributes associated with the API resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource",
              args: {
                name: "ATTRIBUTES",
              },
            },
            optBillingProject,
            {
              name: "--business-unit-enum-values",
              description:
                "Required, The attribute values in case attribute data type is enum",
              priority: 100,
              args: {
                name: "BUSINESS_UNIT_ENUM_VALUES",
              },
            },
            {
              name: "--business-unit-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "BUSINESS_UNIT_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--business-unit-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "BUSINESS_UNIT_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--business-unit-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "BUSINESS_UNIT_URI_VALUES",
                description: "List",
              },
            },
            optConfiguration,
            {
              name: "--description",
              description: "The description of the API resource",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "The display name of the API resource",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optDocumentationExternalUri,
            {
              name: "--fingerprint",
              description:
                "Fingerprint of the API resource. This must be unique for each API resource. It can neither be unset nor be updated to an existing fingerprint of another API resource",
              args: {
                name: "FINGERPRINT",
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
                "For resources [api, selected-version], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--maturity-level-enum-values",
              description:
                "Required, The attribute values in case attribute data type is enum",
              priority: 100,
              args: {
                name: "MATURITY_LEVEL_ENUM_VALUES",
              },
            },
            {
              name: "--maturity-level-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "MATURITY_LEVEL_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--maturity-level-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "MATURITY_LEVEL_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--maturity-level-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "MATURITY_LEVEL_URI_VALUES",
                description: "List",
              },
            },
            {
              name: "--owner-display-name",
              description: "The name of the owner",
              args: {
                name: "OWNER_DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--owner-email",
              description: "The email of the owner",
              priority: 100,
              args: {
                name: "OWNER_EMAIL",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--selected-version",
              description:
                "ID of the version or fully qualified identifier for the version",
              priority: 100,
              args: {
                name: "SELECTED_VERSION",
                description: "String",
              },
            },
            {
              name: "--target-user-enum-values",
              description:
                "Required, The attribute values in case attribute data type is enum",
              priority: 100,
              args: {
                name: "TARGET_USER_ENUM_VALUES",
              },
            },
            {
              name: "--target-user-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "TARGET_USER_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--target-user-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "TARGET_USER_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--target-user-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "TARGET_USER_URI_VALUES",
                description: "List",
              },
            },
            {
              name: "--team-enum-values",
              description:
                "Required, The attribute values in case attribute data type is enum",
              priority: 100,
              args: {
                name: "TEAM_ENUM_VALUES",
              },
            },
            {
              name: "--team-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "TEAM_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--team-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "TEAM_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--team-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "TEAM_URI_VALUES",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "delete",
          description: "Delete an Api",
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
                "If set to true, any versions from this API will also be deleted. Otherwise, the request will only work if the API has no versions",
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation2,
            optLogHttp,
            {
              name: "--no-force",
              description:
                "If set to true, any versions from this API will also be deleted. Otherwise, the request will only work if the API has no versions",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "API",
            description:
              "ID of the api or fully qualified identifier for the api",
          },
        },
        {
          name: "describe",
          description: "Describe an Api",
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
            name: "API",
            description:
              "ID of the api or fully qualified identifier for the api",
          },
        },
        {
          name: "list",
          description: "List Apis",
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
          name: "update",
          description: "Update apis",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-api-functional-requirements-enum-values",
              description:
                "Add new value to api_functional_requirements_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "ADD_API_FUNCTIONAL_REQUIREMENTS_ENUM_VALUES",
              },
            },
            {
              name: "--add-api-requirements-enum-values",
              description:
                "Add new value to api_requirements_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "ADD_API_REQUIREMENTS_ENUM_VALUES",
              },
            },
            {
              name: "--add-api-style-enum-values",
              description:
                "Add new value to api_style_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "ADD_API_STYLE_ENUM_VALUES",
              },
            },
            {
              name: "--add-api-technical-requirements-enum-values",
              description:
                "Add new value to api_technical_requirements_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "ADD_API_TECHNICAL_REQUIREMENTS_ENUM_VALUES",
              },
            },
            {
              name: "--add-business-unit-enum-values",
              description:
                "Add new value to business_unit_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "ADD_BUSINESS_UNIT_ENUM_VALUES",
              },
            },
            {
              name: "--add-maturity-level-enum-values",
              description:
                "Add new value to maturity_level_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "ADD_MATURITY_LEVEL_ENUM_VALUES",
              },
            },
            {
              name: "--add-target-user-enum-values",
              description:
                "Add new value to target_user_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "ADD_TARGET_USER_ENUM_VALUES",
              },
            },
            {
              name: "--add-team-enum-values",
              description:
                "Add new value to team_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "ADD_TEAM_ENUM_VALUES",
              },
            },
            {
              name: "--api",
              description:
                "For resources [api, selected-version], provides fallback value for resource api attribute. When the resource's full URI path is not provided, api will fallback to this flag value",
              args: {
                name: "API",
                description: "String",
              },
            },
            {
              name: "--api-functional-requirements-enum-values",
              description:
                "Set api_functional_requirements_enum_values to new value. The attribute values in case attribute data type is enum",
              args: {
                name: "API_FUNCTIONAL_REQUIREMENTS_ENUM_VALUES",
              },
            },
            {
              name: "--api-functional-requirements-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_FUNCTIONAL_REQUIREMENTS_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--api-functional-requirements-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_FUNCTIONAL_REQUIREMENTS_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--api-functional-requirements-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_FUNCTIONAL_REQUIREMENTS_URI_VALUES",
                description: "List",
              },
            },
            {
              name: "--api-requirements-enum-values",
              description:
                "Set api_requirements_enum_values to new value. The attribute values in case attribute data type is enum",
              args: {
                name: "API_REQUIREMENTS_ENUM_VALUES",
              },
            },
            {
              name: "--api-requirements-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_REQUIREMENTS_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--api-requirements-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_REQUIREMENTS_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--api-requirements-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_REQUIREMENTS_URI_VALUES",
                description: "List",
              },
            },
            {
              name: "--api-style-enum-values",
              description:
                "Set api_style_enum_values to new value. The attribute values in case attribute data type is enum",
              args: {
                name: "API_STYLE_ENUM_VALUES",
              },
            },
            {
              name: "--api-style-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_STYLE_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--api-style-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_STYLE_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--api-style-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_STYLE_URI_VALUES",
                description: "List",
              },
            },
            {
              name: "--api-technical-requirements-enum-values",
              description:
                "Set api_technical_requirements_enum_values to new value. The attribute values in case attribute data type is enum",
              args: {
                name: "API_TECHNICAL_REQUIREMENTS_ENUM_VALUES",
              },
            },
            {
              name: "--api-technical-requirements-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_TECHNICAL_REQUIREMENTS_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--api-technical-requirements-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_TECHNICAL_REQUIREMENTS_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--api-technical-requirements-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_TECHNICAL_REQUIREMENTS_URI_VALUES",
                description: "List",
              },
            },
            {
              name: "--attributes",
              description:
                "Set attributes to new value. The list of user defined attributes associated with the API resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource",
              args: {
                name: "ATTRIBUTES",
              },
            },
            optBillingProject,
            {
              name: "--business-unit-enum-values",
              description:
                "Set business_unit_enum_values to new value. The attribute values in case attribute data type is enum",
              args: {
                name: "BUSINESS_UNIT_ENUM_VALUES",
              },
            },
            {
              name: "--business-unit-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "BUSINESS_UNIT_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--business-unit-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "BUSINESS_UNIT_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--business-unit-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "BUSINESS_UNIT_URI_VALUES",
                description: "List",
              },
            },
            {
              name: "--clear-api-functional-requirements",
              description:
                "Set googleCloudApihubV1Api.apiFunctionalRequirements back to default value",
            },
            {
              name: "--clear-api-functional-requirements-enum-values",
              description:
                "Clear api_functional_requirements_enum_values value and set to empty list",
            },
            {
              name: "--clear-api-requirements",
              description:
                "Set googleCloudApihubV1Api.apiRequirements back to default value",
            },
            {
              name: "--clear-api-requirements-enum-values",
              description:
                "Clear api_requirements_enum_values value and set to empty list",
            },
            {
              name: "--clear-api-style",
              description:
                "Set googleCloudApihubV1Api.apiStyle back to default value",
            },
            {
              name: "--clear-api-style-enum-values",
              description:
                "Clear api_style_enum_values value and set to empty list",
            },
            {
              name: "--clear-api-technical-requirements",
              description:
                "Set googleCloudApihubV1Api.apiTechnicalRequirements back to default value",
            },
            {
              name: "--clear-api-technical-requirements-enum-values",
              description:
                "Clear api_technical_requirements_enum_values value and set to empty list",
            },
            optClearAttributes,
            {
              name: "--clear-business-unit",
              description:
                "Set googleCloudApihubV1Api.businessUnit back to default value",
            },
            {
              name: "--clear-business-unit-enum-values",
              description:
                "Clear business_unit_enum_values value and set to empty list",
            },
            {
              name: "--clear-documentation",
              description:
                "Set googleCloudApihubV1Api.documentation back to default value",
            },
            {
              name: "--clear-maturity-level",
              description:
                "Set googleCloudApihubV1Api.maturityLevel back to default value",
            },
            {
              name: "--clear-maturity-level-enum-values",
              description:
                "Clear maturity_level_enum_values value and set to empty list",
            },
            {
              name: "--clear-owner",
              description:
                "Set googleCloudApihubV1Api.owner back to default value",
            },
            {
              name: "--clear-selected-version",
              description: "Clear selected_version value and set to null",
            },
            {
              name: "--clear-target-user",
              description:
                "Set googleCloudApihubV1Api.targetUser back to default value",
            },
            {
              name: "--clear-target-user-enum-values",
              description:
                "Clear target_user_enum_values value and set to empty list",
            },
            {
              name: "--clear-team",
              description:
                "Set googleCloudApihubV1Api.team back to default value",
            },
            {
              name: "--clear-team-enum-values",
              description: "Clear team_enum_values value and set to empty list",
            },
            optConfiguration,
            {
              name: "--description",
              description: "The description of the API resource",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "The display name of the API resource",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optDocumentationExternalUri,
            {
              name: "--fingerprint",
              description:
                "Fingerprint of the API resource. This must be unique for each API resource. It can neither be unset nor be updated to an existing fingerprint of another API resource",
              args: {
                name: "FINGERPRINT",
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
                "For resources [api, selected-version], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--maturity-level-enum-values",
              description:
                "Set maturity_level_enum_values to new value. The attribute values in case attribute data type is enum",
              args: {
                name: "MATURITY_LEVEL_ENUM_VALUES",
              },
            },
            {
              name: "--maturity-level-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "MATURITY_LEVEL_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--maturity-level-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "MATURITY_LEVEL_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--maturity-level-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "MATURITY_LEVEL_URI_VALUES",
                description: "List",
              },
            },
            {
              name: "--no-clear-api-functional-requirements",
              description:
                "Set googleCloudApihubV1Api.apiFunctionalRequirements back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-api-functional-requirements-enum-values",
              description:
                "Clear api_functional_requirements_enum_values value and set to empty list",
              hidden: true,
            },
            {
              name: "--no-clear-api-requirements",
              description:
                "Set googleCloudApihubV1Api.apiRequirements back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-api-requirements-enum-values",
              description:
                "Clear api_requirements_enum_values value and set to empty list",
              hidden: true,
            },
            {
              name: "--no-clear-api-style",
              description:
                "Set googleCloudApihubV1Api.apiStyle back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-api-style-enum-values",
              description:
                "Clear api_style_enum_values value and set to empty list",
              hidden: true,
            },
            {
              name: "--no-clear-api-technical-requirements",
              description:
                "Set googleCloudApihubV1Api.apiTechnicalRequirements back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-api-technical-requirements-enum-values",
              description:
                "Clear api_technical_requirements_enum_values value and set to empty list",
              hidden: true,
            },
            optNoClearAttributes,
            {
              name: "--no-clear-business-unit",
              description:
                "Set googleCloudApihubV1Api.businessUnit back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-business-unit-enum-values",
              description:
                "Clear business_unit_enum_values value and set to empty list",
              hidden: true,
            },
            {
              name: "--no-clear-documentation",
              description:
                "Set googleCloudApihubV1Api.documentation back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-maturity-level",
              description:
                "Set googleCloudApihubV1Api.maturityLevel back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-maturity-level-enum-values",
              description:
                "Clear maturity_level_enum_values value and set to empty list",
              hidden: true,
            },
            {
              name: "--no-clear-owner",
              description:
                "Set googleCloudApihubV1Api.owner back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-selected-version",
              description: "Clear selected_version value and set to null",
              hidden: true,
            },
            {
              name: "--no-clear-target-user",
              description:
                "Set googleCloudApihubV1Api.targetUser back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-target-user-enum-values",
              description:
                "Clear target_user_enum_values value and set to empty list",
              hidden: true,
            },
            {
              name: "--no-clear-team",
              description:
                "Set googleCloudApihubV1Api.team back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-team-enum-values",
              description: "Clear team_enum_values value and set to empty list",
              hidden: true,
            },
            {
              name: "--owner-display-name",
              description: "The name of the owner",
              args: {
                name: "OWNER_DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--owner-email",
              description: "The email of the owner",
              args: {
                name: "OWNER_EMAIL",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--remove-api-functional-requirements-enum-values",
              description:
                "Remove existing value from api_functional_requirements_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "REMOVE_API_FUNCTIONAL_REQUIREMENTS_ENUM_VALUES",
              },
            },
            {
              name: "--remove-api-requirements-enum-values",
              description:
                "Remove existing value from api_requirements_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "REMOVE_API_REQUIREMENTS_ENUM_VALUES",
              },
            },
            {
              name: "--remove-api-style-enum-values",
              description:
                "Remove existing value from api_style_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "REMOVE_API_STYLE_ENUM_VALUES",
              },
            },
            {
              name: "--remove-api-technical-requirements-enum-values",
              description:
                "Remove existing value from api_technical_requirements_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "REMOVE_API_TECHNICAL_REQUIREMENTS_ENUM_VALUES",
              },
            },
            optRemoveAttributes,
            {
              name: "--remove-business-unit-enum-values",
              description:
                "Remove existing value from business_unit_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "REMOVE_BUSINESS_UNIT_ENUM_VALUES",
              },
            },
            {
              name: "--remove-maturity-level-enum-values",
              description:
                "Remove existing value from maturity_level_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "REMOVE_MATURITY_LEVEL_ENUM_VALUES",
              },
            },
            {
              name: "--remove-target-user-enum-values",
              description:
                "Remove existing value from target_user_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "REMOVE_TARGET_USER_ENUM_VALUES",
              },
            },
            {
              name: "--remove-team-enum-values",
              description:
                "Remove existing value from team_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "REMOVE_TEAM_ENUM_VALUES",
              },
            },
            {
              name: "--selected-version",
              description:
                "ID of the version or fully qualified identifier for the version",
              priority: 100,
              args: {
                name: "SELECTED_VERSION",
                description: "String",
              },
            },
            {
              name: "--target-user-enum-values",
              description:
                "Set target_user_enum_values to new value. The attribute values in case attribute data type is enum",
              args: {
                name: "TARGET_USER_ENUM_VALUES",
              },
            },
            {
              name: "--target-user-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "TARGET_USER_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--target-user-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "TARGET_USER_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--target-user-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "TARGET_USER_URI_VALUES",
                description: "List",
              },
            },
            {
              name: "--team-enum-values",
              description:
                "Set team_enum_values to new value. The attribute values in case attribute data type is enum",
              args: {
                name: "TEAM_ENUM_VALUES",
              },
            },
            {
              name: "--team-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "TEAM_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--team-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "TEAM_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--team-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "TEAM_URI_VALUES",
                description: "List",
              },
            },
            optTraceToken,
            {
              name: "--update-attributes",
              description:
                "Update attributes value or add key value pair. The list of user defined attributes associated with the API resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource",
              args: {
                name: "UPDATE_ATTRIBUTES",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "versions",
          description: "Manage Version resources",
          subcommands: [
            {
              name: "create",
              description: "Create a Version",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--accreditation-enum-values",
                  description:
                    "Required, The attribute values in case attribute data type is enum",
                  priority: 100,
                  args: {
                    name: "ACCREDITATION_ENUM_VALUES",
                  },
                },
                {
                  name: "--accreditation-json-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  priority: 100,
                  args: {
                    name: "ACCREDITATION_JSON_VALUES",
                    description: "List",
                  },
                },
                {
                  name: "--accreditation-string-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  priority: 100,
                  args: {
                    name: "ACCREDITATION_STRING_VALUES",
                    description: "List",
                  },
                },
                {
                  name: "--accreditation-uri-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  priority: 100,
                  args: {
                    name: "ACCREDITATION_URI_VALUES",
                    description: "List",
                  },
                },
                optApi3,
                {
                  name: "--attributes",
                  description:
                    "The list of user defined attributes associated with the Version resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource",
                  args: {
                    name: "ATTRIBUTES",
                  },
                },
                optBillingProject,
                {
                  name: "--compliance-enum-values",
                  description:
                    "Required, The attribute values in case attribute data type is enum",
                  priority: 100,
                  args: {
                    name: "COMPLIANCE_ENUM_VALUES",
                  },
                },
                {
                  name: "--compliance-json-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  priority: 100,
                  args: {
                    name: "COMPLIANCE_JSON_VALUES",
                    description: "List",
                  },
                },
                {
                  name: "--compliance-string-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  priority: 100,
                  args: {
                    name: "COMPLIANCE_STRING_VALUES",
                    description: "List",
                  },
                },
                {
                  name: "--compliance-uri-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  priority: 100,
                  args: {
                    name: "COMPLIANCE_URI_VALUES",
                    description: "List",
                  },
                },
                optConfiguration,
                {
                  name: "--deployments",
                  description:
                    "IDs of the deployments or fully qualified identifiers for the deployments",
                  priority: 100,
                  args: {
                    name: "DEPLOYMENTS",
                    description: "List",
                  },
                },
                {
                  name: "--description",
                  description: "The description of the version",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--display-name",
                  description: "The display name of the version",
                  priority: 100,
                  args: {
                    name: "DISPLAY_NAME",
                    description: "String",
                  },
                },
                optDocumentationExternalUri,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                {
                  name: "--lifecycle-enum-values",
                  description:
                    "Required, The attribute values in case attribute data type is enum",
                  priority: 100,
                  args: {
                    name: "LIFECYCLE_ENUM_VALUES",
                  },
                },
                {
                  name: "--lifecycle-json-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  priority: 100,
                  args: {
                    name: "LIFECYCLE_JSON_VALUES",
                    description: "List",
                  },
                },
                {
                  name: "--lifecycle-string-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  priority: 100,
                  args: {
                    name: "LIFECYCLE_STRING_VALUES",
                    description: "List",
                  },
                },
                {
                  name: "--lifecycle-uri-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  priority: 100,
                  args: {
                    name: "LIFECYCLE_URI_VALUES",
                    description: "List",
                  },
                },
                {
                  name: "--location",
                  description:
                    "For resources [version, deployments, selected-deployment], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                optProject,
                optQuiet,
                {
                  name: "--selected-deployment",
                  description:
                    "ID of the deployment or fully qualified identifier for the deployment",
                  priority: 100,
                  args: {
                    name: "SELECTED_DEPLOYMENT",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "VERSION",
                description:
                  "ID of the version or fully qualified identifier for the version",
              },
            },
            {
              name: "delete",
              description: "Delete a Version",
              options: [
                optAccessTokenFile,
                optAccount,
                optApi3,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                {
                  name: "--force",
                  description:
                    "If set to true, any specs from this version will also be deleted. Otherwise, the request will only work if the version has no specs",
                },
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLocation14,
                optLogHttp,
                {
                  name: "--no-force",
                  description:
                    "If set to true, any specs from this version will also be deleted. Otherwise, the request will only work if the version has no specs",
                  hidden: true,
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "VERSION",
                description:
                  "ID of the version or fully qualified identifier for the version",
              },
            },
            {
              name: "describe",
              description: "Describe a Version",
              options: [
                optAccessTokenFile,
                optAccount,
                optApi3,
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
                optLocation14,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "VERSION",
                description:
                  "ID of the version or fully qualified identifier for the version",
              },
            },
            {
              name: "list",
              description: "List Versions",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--api",
                  description:
                    "ID of the api or fully qualified identifier for the api",
                  priority: 100,
                  args: {
                    name: "API",
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
              name: "operations",
              description: "Manage Api Operation resources",
              subcommands: [
                {
                  name: "create",
                  description: "Create apiOperations",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optApi,
                    {
                      name: "--attributes",
                      description:
                        "The list of user defined attributes associated with the API operation resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource",
                      args: {
                        name: "ATTRIBUTES",
                      },
                    },
                    optBillingProject,
                    optConfiguration,
                    {
                      name: "--details-deprecated",
                      description:
                        "For OpenAPI spec, this will be set if `operation.deprecated`is marked as `true` in the spec",
                    },
                    {
                      name: "--details-description",
                      description:
                        "Description of the operation behavior. For OpenAPI spec, this will map to `operation.description` in the spec, in case description is empty, `operation.summary` will be used",
                      args: {
                        name: "DETAILS_DESCRIPTION",
                        description: "String",
                      },
                    },
                    optDocumentationExternalUri,
                    optFlagsFile,
                    optFlatten,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    {
                      name: "--http-operation-method",
                      description:
                        "Operation method Note: Even though this field is optional, it is required for [CreateApiOperation][google.cloud.apihub.v1.ApiHub.CreateApiOperation] API and we will fail the request if not provided. _HTTP_OPERATION_METHOD_ must be one of:",
                      args: {
                        name: "HTTP_OPERATION_METHOD",
                        suggestions: [
                          "delete",
                          "get",
                          "head",
                          "options",
                          "patch",
                          "post",
                          "put",
                          "trace",
                        ],
                      },
                    },
                    {
                      name: "--http-operation-path",
                      description:
                        "Complete path relative to server endpoint. Note: Even though this field is optional, it is required for [CreateApiOperation][google.cloud.apihub.v1.ApiHub.CreateApiOperation] API and we will fail the request if not provided",
                      args: {
                        name: "HTTP_OPERATION_PATH",
                        description: "String",
                      },
                    },
                    {
                      name: "--http-operation-path-description",
                      description:
                        "A short description for the path applicable to all operations",
                      args: {
                        name: "HTTP_OPERATION_PATH_DESCRIPTION",
                        description: "String",
                      },
                    },
                    optImpersonateServiceAccount,
                    optLocation10,
                    optLogHttp,
                    {
                      name: "--mcp-tool-annotations-additional-hints",
                      description:
                        "Additional hints which may help tools and not covered in defaults",
                      args: {
                        name: "MCP_TOOL_ANNOTATIONS_ADDITIONAL_HINTS",
                      },
                    },
                    {
                      name: "--mcp-tool-annotations-destructive-hint",
                      description:
                        "Hint indicating if the tool may have destructive side effects",
                    },
                    {
                      name: "--mcp-tool-annotations-idempotent-hint",
                      description: "Hint indicating if the tool is idempotent",
                    },
                    {
                      name: "--mcp-tool-annotations-open-world-hint",
                      description:
                        "Hint indicating if the tool interacts with the open world (e.g., internet)",
                    },
                    {
                      name: "--mcp-tool-annotations-read-only-hint",
                      description: "Hint indicating if the tool is read-only",
                    },
                    {
                      name: "--mcp-tool-annotations-title",
                      description:
                        "A human-readable title for the tool (if different from Tool.title)",
                      args: {
                        name: "MCP_TOOL_ANNOTATIONS_TITLE",
                        description: "String",
                      },
                    },
                    {
                      name: "--mcp-tool-description",
                      description: "Description of what the tool does",
                      args: {
                        name: "MCP_TOOL_DESCRIPTION",
                        description: "String",
                      },
                    },
                    {
                      name: "--mcp-tool-input-schema-json",
                      description:
                        "The JSON schema. Only valid JSON is accepted but semantic validation of schema is not supported right now",
                      args: {
                        name: "MCP_TOOL_INPUT_SCHEMA_JSON",
                      },
                    },
                    {
                      name: "--mcp-tool-name",
                      description:
                        "The name of the tool, unique within its parent scope (version)",
                      priority: 100,
                      args: {
                        name: "MCP_TOOL_NAME",
                        description: "String",
                      },
                    },
                    {
                      name: "--mcp-tool-output-schema-json",
                      description:
                        "The JSON schema. Only valid JSON is accepted but semantic validation of schema is not supported right now",
                      args: {
                        name: "MCP_TOOL_OUTPUT_SCHEMA_JSON",
                      },
                    },
                    {
                      name: "--mcp-tool-title",
                      description: "Optional title for the tool",
                      args: {
                        name: "MCP_TOOL_TITLE",
                        description: "String",
                      },
                    },
                    {
                      name: "--no-details-deprecated",
                      description:
                        "For OpenAPI spec, this will be set if `operation.deprecated`is marked as `true` in the spec",
                      hidden: true,
                    },
                    {
                      name: "--no-mcp-tool-annotations-destructive-hint",
                      description:
                        "Hint indicating if the tool may have destructive side effects",
                      hidden: true,
                    },
                    {
                      name: "--no-mcp-tool-annotations-idempotent-hint",
                      description: "Hint indicating if the tool is idempotent",
                      hidden: true,
                    },
                    {
                      name: "--no-mcp-tool-annotations-open-world-hint",
                      description:
                        "Hint indicating if the tool interacts with the open world (e.g., internet)",
                      hidden: true,
                    },
                    {
                      name: "--no-mcp-tool-annotations-read-only-hint",
                      description: "Hint indicating if the tool is read-only",
                      hidden: true,
                    },
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
                  description: "Delete apiOperations",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optApi,
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
                    name: "OPERATION",
                    description:
                      "ID of the operation or fully qualified identifier for the operation",
                  },
                },
                {
                  name: "describe",
                  description: "Describe apiOperations",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optApi,
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
                    name: "OPERATION",
                    description:
                      "ID of the operation or fully qualified identifier for the operation",
                  },
                },
                {
                  name: "list",
                  description: "List apiOperations",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optApi3,
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
                    optLocation14,
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
                  description: "Update apiOperations",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optApi,
                    {
                      name: "--attributes",
                      description:
                        "Set attributes to new value. The list of user defined attributes associated with the API operation resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource",
                      args: {
                        name: "ATTRIBUTES",
                      },
                    },
                    optBillingProject,
                    optClearAttributes,
                    {
                      name: "--clear-details",
                      description:
                        "Set googleCloudApihubV1ApiOperation.details back to default value",
                    },
                    {
                      name: "--clear-mcp-tool-annotations-additional-hints",
                      description:
                        "Clear mcp_tool_annotations_additional_hints value and set to empty map",
                    },
                    optConfiguration,
                    {
                      name: "--details-deprecated",
                      description:
                        "For OpenAPI spec, this will be set if `operation.deprecated`is marked as `true` in the spec. Use *--details-deprecated* to enable and *--no-details-deprecated* to disable",
                    },
                    {
                      name: "--details-description",
                      description:
                        "Description of the operation behavior. For OpenAPI spec, this will map to `operation.description` in the spec, in case description is empty, `operation.summary` will be used",
                      args: {
                        name: "DETAILS_DESCRIPTION",
                        description: "String",
                      },
                    },
                    optDocumentationExternalUri,
                    optFlagsFile,
                    optFlatten,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    {
                      name: "--http-operation-method",
                      description:
                        "Operation method Note: Even though this field is optional, it is required for [CreateApiOperation][google.cloud.apihub.v1.ApiHub.CreateApiOperation] API and we will fail the request if not provided. _HTTP_OPERATION_METHOD_ must be one of:",
                      args: {
                        name: "HTTP_OPERATION_METHOD",
                        suggestions: [
                          "delete",
                          "get",
                          "head",
                          "options",
                          "patch",
                          "post",
                          "put",
                          "trace",
                        ],
                      },
                    },
                    {
                      name: "--http-operation-path",
                      description:
                        "Complete path relative to server endpoint. Note: Even though this field is optional, it is required for [CreateApiOperation][google.cloud.apihub.v1.ApiHub.CreateApiOperation] API and we will fail the request if not provided",
                      args: {
                        name: "HTTP_OPERATION_PATH",
                        description: "String",
                      },
                    },
                    {
                      name: "--http-operation-path-description",
                      description:
                        "A short description for the path applicable to all operations",
                      args: {
                        name: "HTTP_OPERATION_PATH_DESCRIPTION",
                        description: "String",
                      },
                    },
                    optImpersonateServiceAccount,
                    optLocation10,
                    optLogHttp,
                    {
                      name: "--mcp-tool-annotations-additional-hints",
                      description:
                        "Set mcp_tool_annotations_additional_hints to new value. Additional hints which may help tools and not covered in defaults",
                      args: {
                        name: "MCP_TOOL_ANNOTATIONS_ADDITIONAL_HINTS",
                      },
                    },
                    {
                      name: "--mcp-tool-annotations-destructive-hint",
                      description:
                        "Hint indicating if the tool may have destructive side effects. Use *--mcp-tool-annotations-destructive-hint* to enable and *--no-mcp-tool-annotations-destructive-hint* to disable",
                    },
                    {
                      name: "--mcp-tool-annotations-idempotent-hint",
                      description:
                        "Hint indicating if the tool is idempotent. Use *--mcp-tool-annotations-idempotent-hint* to enable and *--no-mcp-tool-annotations-idempotent-hint* to disable",
                    },
                    {
                      name: "--mcp-tool-annotations-open-world-hint",
                      description:
                        "Hint indicating if the tool interacts with the open world (e.g., internet). Use *--mcp-tool-annotations-open-world-hint* to enable and *--no-mcp-tool-annotations-open-world-hint* to disable",
                    },
                    {
                      name: "--mcp-tool-annotations-read-only-hint",
                      description:
                        "Hint indicating if the tool is read-only. Use *--mcp-tool-annotations-read-only-hint* to enable and *--no-mcp-tool-annotations-read-only-hint* to disable",
                    },
                    {
                      name: "--mcp-tool-annotations-title",
                      description:
                        "A human-readable title for the tool (if different from Tool.title)",
                      args: {
                        name: "MCP_TOOL_ANNOTATIONS_TITLE",
                        description: "String",
                      },
                    },
                    {
                      name: "--mcp-tool-description",
                      description: "Description of what the tool does",
                      args: {
                        name: "MCP_TOOL_DESCRIPTION",
                        description: "String",
                      },
                    },
                    {
                      name: "--mcp-tool-input-schema-json",
                      description:
                        "The JSON schema. Only valid JSON is accepted but semantic validation of schema is not supported right now",
                      args: {
                        name: "MCP_TOOL_INPUT_SCHEMA_JSON",
                      },
                    },
                    {
                      name: "--mcp-tool-name",
                      description:
                        "The name of the tool, unique within its parent scope (version)",
                      args: {
                        name: "MCP_TOOL_NAME",
                        description: "String",
                      },
                    },
                    {
                      name: "--mcp-tool-output-schema-json",
                      description:
                        "The JSON schema. Only valid JSON is accepted but semantic validation of schema is not supported right now",
                      args: {
                        name: "MCP_TOOL_OUTPUT_SCHEMA_JSON",
                      },
                    },
                    {
                      name: "--mcp-tool-title",
                      description: "Optional title for the tool",
                      args: {
                        name: "MCP_TOOL_TITLE",
                        description: "String",
                      },
                    },
                    optNoClearAttributes,
                    {
                      name: "--no-clear-details",
                      description:
                        "Set googleCloudApihubV1ApiOperation.details back to default value",
                      hidden: true,
                    },
                    {
                      name: "--no-clear-mcp-tool-annotations-additional-hints",
                      description:
                        "Clear mcp_tool_annotations_additional_hints value and set to empty map",
                      hidden: true,
                    },
                    {
                      name: "--no-details-deprecated",
                      description:
                        "For OpenAPI spec, this will be set if `operation.deprecated`is marked as `true` in the spec",
                    },
                    {
                      name: "--no-mcp-tool-annotations-destructive-hint",
                      description:
                        "Hint indicating if the tool may have destructive side effects",
                    },
                    {
                      name: "--no-mcp-tool-annotations-idempotent-hint",
                      description: "Hint indicating if the tool is idempotent",
                    },
                    {
                      name: "--no-mcp-tool-annotations-open-world-hint",
                      description:
                        "Hint indicating if the tool interacts with the open world (e.g., internet)",
                    },
                    {
                      name: "--no-mcp-tool-annotations-read-only-hint",
                      description: "Hint indicating if the tool is read-only",
                    },
                    optProject,
                    optQuiet,
                    optRemoveAttributes,
                    {
                      name: "--remove-mcp-tool-annotations-additional-hints",
                      description:
                        "Remove existing value from map mcp_tool_annotations_additional_hints. Sets `remove_mcp_tool_annotations_additional_hints` value",
                      args: {
                        name: "REMOVE_MCP_TOOL_ANNOTATIONS_ADDITIONAL_HINTS",
                        description: "Dict",
                      },
                    },
                    optTraceToken,
                    {
                      name: "--update-attributes",
                      description:
                        "Update attributes value or add key value pair. The list of user defined attributes associated with the API operation resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource",
                      args: {
                        name: "UPDATE_ATTRIBUTES",
                      },
                    },
                    {
                      name: "--update-mcp-tool-annotations-additional-hints",
                      description:
                        "Update mcp_tool_annotations_additional_hints value or add key value pair. Additional hints which may help tools and not covered in defaults",
                      args: {
                        name: "UPDATE_MCP_TOOL_ANNOTATIONS_ADDITIONAL_HINTS",
                      },
                    },
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
              name: "specs",
              description: "Manage Spec resources",
              subcommands: [
                {
                  name: "create",
                  description: "Create a Spec",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optApi2,
                    {
                      name: "--attributes",
                      description:
                        "The list of user defined attributes associated with the spec. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource",
                      args: {
                        name: "ATTRIBUTES",
                      },
                    },
                    optBillingProject,
                    optConfiguration,
                    {
                      name: "--contents",
                      description: "The contents of the spec",
                      priority: 100,
                      args: {
                        name: "CONTENTS",
                      },
                    },
                    {
                      name: "--contents-mime-type",
                      description:
                        "The mime type of the content for example application/json, application/yaml, application/wsdl etc",
                      priority: 100,
                      args: {
                        name: "CONTENTS_MIME_TYPE",
                        description: "String",
                      },
                    },
                    {
                      name: "--display-name",
                      description:
                        "The display name of the spec. This can contain the file name of the spec",
                      priority: 100,
                      args: {
                        name: "DISPLAY_NAME",
                        description: "String",
                      },
                    },
                    optDocumentationExternalUri,
                    optFlagsFile,
                    optFlatten,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    {
                      name: "--lint-response-create-time",
                      description:
                        "Timestamp when the linting response was generated",
                      priority: 100,
                      args: {
                        name: "LINT_RESPONSE_CREATE_TIME",
                      },
                    },
                    {
                      name: "--lint-response-issues",
                      description:
                        "Array of issues found in the analyzed document",
                      args: {
                        name: "LINT_RESPONSE_ISSUES",
                      },
                    },
                    {
                      name: "--lint-response-linter",
                      description:
                        "Name of the linter used. _LINT_RESPONSE_LINTER_ must be one of:",
                      priority: 100,
                      args: {
                        name: "LINT_RESPONSE_LINTER",
                        suggestions: ["other", "spectral"],
                      },
                    },
                    {
                      name: "--lint-response-source",
                      description: "Name of the linting application",
                      priority: 100,
                      args: {
                        name: "LINT_RESPONSE_SOURCE",
                        description: "String",
                      },
                    },
                    {
                      name: "--lint-response-state",
                      description:
                        "Lint state represents success or failure for linting. _LINT_RESPONSE_STATE_ must be one of:",
                      priority: 100,
                      args: {
                        name: "LINT_RESPONSE_STATE",
                        suggestions: ["lint-state-error", "lint-state-success"],
                      },
                    },
                    {
                      name: "--lint-response-summary",
                      description:
                        "Summary of all issue types and counts for each severity level",
                      args: {
                        name: "LINT_RESPONSE_SUMMARY",
                      },
                    },
                    optLocation13,
                    optLogHttp,
                    {
                      name: "--parsing-mode",
                      description:
                        "Enum specifying the parsing mode for OpenAPI Specification (OAS) parsing. _PARSING_MODE_ must be one of:",
                      args: {
                        name: "PARSING_MODE",
                        suggestions: ["relaxed", "strict"],
                      },
                    },
                    optProject,
                    optQuiet,
                    {
                      name: "--source-uri",
                      description:
                        "The URI of the spec source in case file is uploaded from an external version control system",
                      args: {
                        name: "SOURCE_URI",
                        description: "String",
                      },
                    },
                    {
                      name: "--spec-type-enum-values",
                      description:
                        "Required, The attribute values in case attribute data type is enum",
                      priority: 100,
                      args: {
                        name: "SPEC_TYPE_ENUM_VALUES",
                      },
                    },
                    {
                      name: "--spec-type-json-values",
                      description:
                        "The attribute values in case attribute data type is string or JSON",
                      priority: 100,
                      args: {
                        name: "SPEC_TYPE_JSON_VALUES",
                        description: "List",
                      },
                    },
                    {
                      name: "--spec-type-string-values",
                      description:
                        "The attribute values in case attribute data type is string or JSON",
                      priority: 100,
                      args: {
                        name: "SPEC_TYPE_STRING_VALUES",
                        description: "List",
                      },
                    },
                    {
                      name: "--spec-type-uri-values",
                      description:
                        "The attribute values in case attribute data type is string or JSON",
                      priority: 100,
                      args: {
                        name: "SPEC_TYPE_URI_VALUES",
                        description: "List",
                      },
                    },
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "SPEC",
                    description:
                      "ID of the spec or fully qualified identifier for the spec",
                  },
                },
                {
                  name: "delete",
                  description: "Delete a Spec",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optApi2,
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
                    optLocation13,
                    optLogHttp,
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "SPEC",
                    description:
                      "ID of the spec or fully qualified identifier for the spec",
                  },
                },
                {
                  name: "describe",
                  description: "Describe a Spec",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optApi2,
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
                    optLocation13,
                    optLogHttp,
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "SPEC",
                    description:
                      "ID of the spec or fully qualified identifier for the spec",
                  },
                },
                {
                  name: "get-contents",
                  description: "Get the contents of a spec",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    {
                      name: "--api",
                      description: "The API ID",
                      priority: 100,
                      args: {
                        name: "API",
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
                      description: "The location ID",
                      priority: 100,
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
                    name: "SPEC",
                    description: "The spec ID",
                  },
                },
                {
                  name: "lint",
                  description: "Lint a Spec",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optApi2,
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
                    optLocation13,
                    optLogHttp,
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "SPEC",
                    description:
                      "ID of the spec or fully qualified identifier for the spec",
                  },
                },
                {
                  name: "list",
                  description: "List Specs",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optApi3,
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
                    optLocation14,
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
                  description: "Update specs",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    {
                      name: "--add-lint-response-issues",
                      description:
                        "Add new value to lint_response_issues list. Array of issues found in the analyzed document",
                      args: {
                        name: "ADD_LINT_RESPONSE_ISSUES",
                      },
                    },
                    {
                      name: "--add-lint-response-summary",
                      description:
                        "Add new value to lint_response_summary list. Summary of all issue types and counts for each severity level",
                      args: {
                        name: "ADD_LINT_RESPONSE_SUMMARY",
                      },
                    },
                    {
                      name: "--add-spec-type-enum-values",
                      description:
                        "Add new value to spec_type_enum_values list. The attribute values in case attribute data type is enum",
                      args: {
                        name: "ADD_SPEC_TYPE_ENUM_VALUES",
                      },
                    },
                    optApi2,
                    {
                      name: "--attributes",
                      description:
                        "Set attributes to new value. The list of user defined attributes associated with the spec. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource",
                      args: {
                        name: "ATTRIBUTES",
                      },
                    },
                    optBillingProject,
                    optClearAttributes,
                    {
                      name: "--clear-contents",
                      description:
                        "Set googleCloudApihubV1Spec.contents back to default value",
                    },
                    {
                      name: "--clear-documentation",
                      description:
                        "Set googleCloudApihubV1Spec.documentation back to default value",
                    },
                    {
                      name: "--clear-lint-response",
                      description:
                        "Set googleCloudApihubV1Spec.lintResponse back to default value",
                    },
                    {
                      name: "--clear-lint-response-issues",
                      description:
                        "Clear lint_response_issues value and set to empty list",
                    },
                    {
                      name: "--clear-lint-response-summary",
                      description:
                        "Clear lint_response_summary value and set to empty list",
                    },
                    {
                      name: "--clear-spec-type",
                      description:
                        "Set googleCloudApihubV1Spec.specType back to default value",
                    },
                    {
                      name: "--clear-spec-type-enum-values",
                      description:
                        "Clear spec_type_enum_values value and set to empty list",
                    },
                    optConfiguration,
                    {
                      name: "--contents",
                      description: "The contents of the spec",
                      args: {
                        name: "CONTENTS",
                      },
                    },
                    {
                      name: "--contents-mime-type",
                      description:
                        "The mime type of the content for example application/json, application/yaml, application/wsdl etc",
                      args: {
                        name: "CONTENTS_MIME_TYPE",
                        description: "String",
                      },
                    },
                    {
                      name: "--display-name",
                      description:
                        "The display name of the spec. This can contain the file name of the spec",
                      args: {
                        name: "DISPLAY_NAME",
                        description: "String",
                      },
                    },
                    optDocumentationExternalUri,
                    optFlagsFile,
                    optFlatten,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    {
                      name: "--lint-response-create-time",
                      description:
                        "Timestamp when the linting response was generated",
                      args: {
                        name: "LINT_RESPONSE_CREATE_TIME",
                      },
                    },
                    {
                      name: "--lint-response-issues",
                      description:
                        "Set lint_response_issues to new value. Array of issues found in the analyzed document",
                      args: {
                        name: "LINT_RESPONSE_ISSUES",
                      },
                    },
                    {
                      name: "--lint-response-linter",
                      description:
                        "Name of the linter used. _LINT_RESPONSE_LINTER_ must be one of:",
                      args: {
                        name: "LINT_RESPONSE_LINTER",
                        suggestions: ["other", "spectral"],
                      },
                    },
                    {
                      name: "--lint-response-source",
                      description: "Name of the linting application",
                      args: {
                        name: "LINT_RESPONSE_SOURCE",
                        description: "String",
                      },
                    },
                    {
                      name: "--lint-response-state",
                      description:
                        "Lint state represents success or failure for linting. _LINT_RESPONSE_STATE_ must be one of:",
                      args: {
                        name: "LINT_RESPONSE_STATE",
                        suggestions: ["lint-state-error", "lint-state-success"],
                      },
                    },
                    {
                      name: "--lint-response-summary",
                      description:
                        "Set lint_response_summary to new value. Summary of all issue types and counts for each severity level",
                      args: {
                        name: "LINT_RESPONSE_SUMMARY",
                      },
                    },
                    optLocation13,
                    optLogHttp,
                    optNoClearAttributes,
                    {
                      name: "--no-clear-contents",
                      description:
                        "Set googleCloudApihubV1Spec.contents back to default value",
                      hidden: true,
                    },
                    {
                      name: "--no-clear-documentation",
                      description:
                        "Set googleCloudApihubV1Spec.documentation back to default value",
                      hidden: true,
                    },
                    {
                      name: "--no-clear-lint-response",
                      description:
                        "Set googleCloudApihubV1Spec.lintResponse back to default value",
                      hidden: true,
                    },
                    {
                      name: "--no-clear-lint-response-issues",
                      description:
                        "Clear lint_response_issues value and set to empty list",
                      hidden: true,
                    },
                    {
                      name: "--no-clear-lint-response-summary",
                      description:
                        "Clear lint_response_summary value and set to empty list",
                      hidden: true,
                    },
                    {
                      name: "--no-clear-spec-type",
                      description:
                        "Set googleCloudApihubV1Spec.specType back to default value",
                      hidden: true,
                    },
                    {
                      name: "--no-clear-spec-type-enum-values",
                      description:
                        "Clear spec_type_enum_values value and set to empty list",
                      hidden: true,
                    },
                    {
                      name: "--parsing-mode",
                      description:
                        "Enum specifying the parsing mode for OpenAPI Specification (OAS) parsing. _PARSING_MODE_ must be one of:",
                      args: {
                        name: "PARSING_MODE",
                        suggestions: ["relaxed", "strict"],
                      },
                    },
                    optProject,
                    optQuiet,
                    optRemoveAttributes,
                    {
                      name: "--remove-lint-response-issues",
                      description:
                        "Remove existing value from lint_response_issues list. Array of issues found in the analyzed document",
                      args: {
                        name: "REMOVE_LINT_RESPONSE_ISSUES",
                      },
                    },
                    {
                      name: "--remove-lint-response-summary",
                      description:
                        "Remove existing value from lint_response_summary list. Summary of all issue types and counts for each severity level",
                      args: {
                        name: "REMOVE_LINT_RESPONSE_SUMMARY",
                      },
                    },
                    {
                      name: "--remove-spec-type-enum-values",
                      description:
                        "Remove existing value from spec_type_enum_values list. The attribute values in case attribute data type is enum",
                      args: {
                        name: "REMOVE_SPEC_TYPE_ENUM_VALUES",
                      },
                    },
                    {
                      name: "--source-uri",
                      description:
                        "The URI of the spec source in case file is uploaded from an external version control system",
                      args: {
                        name: "SOURCE_URI",
                        description: "String",
                      },
                    },
                    {
                      name: "--spec-type-enum-values",
                      description:
                        "Set spec_type_enum_values to new value. The attribute values in case attribute data type is enum",
                      args: {
                        name: "SPEC_TYPE_ENUM_VALUES",
                      },
                    },
                    {
                      name: "--spec-type-json-values",
                      description:
                        "The attribute values in case attribute data type is string or JSON",
                      args: {
                        name: "SPEC_TYPE_JSON_VALUES",
                        description: "List",
                      },
                    },
                    {
                      name: "--spec-type-string-values",
                      description:
                        "The attribute values in case attribute data type is string or JSON",
                      args: {
                        name: "SPEC_TYPE_STRING_VALUES",
                        description: "List",
                      },
                    },
                    {
                      name: "--spec-type-uri-values",
                      description:
                        "The attribute values in case attribute data type is string or JSON",
                      args: {
                        name: "SPEC_TYPE_URI_VALUES",
                        description: "List",
                      },
                    },
                    optTraceToken,
                    {
                      name: "--update-attributes",
                      description:
                        "Update attributes value or add key value pair. The list of user defined attributes associated with the spec. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource",
                      args: {
                        name: "UPDATE_ATTRIBUTES",
                      },
                    },
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "SPEC",
                    description:
                      "ID of the spec or fully qualified identifier for the spec",
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
              description: "Update versions",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--accreditation-enum-values",
                  description:
                    "Set accreditation_enum_values to new value. The attribute values in case attribute data type is enum",
                  args: {
                    name: "ACCREDITATION_ENUM_VALUES",
                  },
                },
                {
                  name: "--accreditation-json-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "ACCREDITATION_JSON_VALUES",
                    description: "List",
                  },
                },
                {
                  name: "--accreditation-string-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "ACCREDITATION_STRING_VALUES",
                    description: "List",
                  },
                },
                {
                  name: "--accreditation-uri-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "ACCREDITATION_URI_VALUES",
                    description: "List",
                  },
                },
                {
                  name: "--add-accreditation-enum-values",
                  description:
                    "Add new value to accreditation_enum_values list. The attribute values in case attribute data type is enum",
                  args: {
                    name: "ADD_ACCREDITATION_ENUM_VALUES",
                  },
                },
                {
                  name: "--add-compliance-enum-values",
                  description:
                    "Add new value to compliance_enum_values list. The attribute values in case attribute data type is enum",
                  args: {
                    name: "ADD_COMPLIANCE_ENUM_VALUES",
                  },
                },
                {
                  name: "--add-deployments",
                  description:
                    "IDs of the deployments or fully qualified identifiers for the deployments",
                  priority: 100,
                  args: {
                    name: "ADD_DEPLOYMENTS",
                    description: "List",
                  },
                },
                {
                  name: "--add-lifecycle-enum-values",
                  description:
                    "Add new value to lifecycle_enum_values list. The attribute values in case attribute data type is enum",
                  args: {
                    name: "ADD_LIFECYCLE_ENUM_VALUES",
                  },
                },
                optApi3,
                {
                  name: "--attributes",
                  description:
                    "Set attributes to new value. The list of user defined attributes associated with the Version resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource",
                  args: {
                    name: "ATTRIBUTES",
                  },
                },
                optBillingProject,
                {
                  name: "--clear-accreditation",
                  description:
                    "Set googleCloudApihubV1Version.accreditation back to default value",
                },
                {
                  name: "--clear-accreditation-enum-values",
                  description:
                    "Clear accreditation_enum_values value and set to empty list",
                },
                optClearAttributes,
                {
                  name: "--clear-compliance",
                  description:
                    "Set googleCloudApihubV1Version.compliance back to default value",
                },
                {
                  name: "--clear-compliance-enum-values",
                  description:
                    "Clear compliance_enum_values value and set to empty list",
                },
                {
                  name: "--clear-deployments",
                  description: "Clear deployments value and set to empty list",
                },
                {
                  name: "--clear-documentation",
                  description:
                    "Set googleCloudApihubV1Version.documentation back to default value",
                },
                {
                  name: "--clear-lifecycle",
                  description:
                    "Set googleCloudApihubV1Version.lifecycle back to default value",
                },
                {
                  name: "--clear-lifecycle-enum-values",
                  description:
                    "Clear lifecycle_enum_values value and set to empty list",
                },
                {
                  name: "--clear-selected-deployment",
                  description:
                    "Clear selected_deployment value and set to null",
                },
                {
                  name: "--compliance-enum-values",
                  description:
                    "Set compliance_enum_values to new value. The attribute values in case attribute data type is enum",
                  args: {
                    name: "COMPLIANCE_ENUM_VALUES",
                  },
                },
                {
                  name: "--compliance-json-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "COMPLIANCE_JSON_VALUES",
                    description: "List",
                  },
                },
                {
                  name: "--compliance-string-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "COMPLIANCE_STRING_VALUES",
                    description: "List",
                  },
                },
                {
                  name: "--compliance-uri-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "COMPLIANCE_URI_VALUES",
                    description: "List",
                  },
                },
                optConfiguration,
                {
                  name: "--deployments",
                  description:
                    "IDs of the deployments or fully qualified identifiers for the deployments",
                  priority: 100,
                  args: {
                    name: "DEPLOYMENTS",
                    description: "List",
                  },
                },
                {
                  name: "--description",
                  description: "The description of the version",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--display-name",
                  description: "The display name of the version",
                  args: {
                    name: "DISPLAY_NAME",
                    description: "String",
                  },
                },
                optDocumentationExternalUri,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                {
                  name: "--lifecycle-enum-values",
                  description:
                    "Set lifecycle_enum_values to new value. The attribute values in case attribute data type is enum",
                  args: {
                    name: "LIFECYCLE_ENUM_VALUES",
                  },
                },
                {
                  name: "--lifecycle-json-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "LIFECYCLE_JSON_VALUES",
                    description: "List",
                  },
                },
                {
                  name: "--lifecycle-string-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "LIFECYCLE_STRING_VALUES",
                    description: "List",
                  },
                },
                {
                  name: "--lifecycle-uri-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "LIFECYCLE_URI_VALUES",
                    description: "List",
                  },
                },
                {
                  name: "--location",
                  description:
                    "For resources [version, deployments, selected-deployment], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                {
                  name: "--no-clear-accreditation",
                  description:
                    "Set googleCloudApihubV1Version.accreditation back to default value",
                  hidden: true,
                },
                {
                  name: "--no-clear-accreditation-enum-values",
                  description:
                    "Clear accreditation_enum_values value and set to empty list",
                  hidden: true,
                },
                optNoClearAttributes,
                {
                  name: "--no-clear-compliance",
                  description:
                    "Set googleCloudApihubV1Version.compliance back to default value",
                  hidden: true,
                },
                {
                  name: "--no-clear-compliance-enum-values",
                  description:
                    "Clear compliance_enum_values value and set to empty list",
                  hidden: true,
                },
                {
                  name: "--no-clear-deployments",
                  description: "Clear deployments value and set to empty list",
                  hidden: true,
                },
                {
                  name: "--no-clear-documentation",
                  description:
                    "Set googleCloudApihubV1Version.documentation back to default value",
                  hidden: true,
                },
                {
                  name: "--no-clear-lifecycle",
                  description:
                    "Set googleCloudApihubV1Version.lifecycle back to default value",
                  hidden: true,
                },
                {
                  name: "--no-clear-lifecycle-enum-values",
                  description:
                    "Clear lifecycle_enum_values value and set to empty list",
                  hidden: true,
                },
                {
                  name: "--no-clear-selected-deployment",
                  description:
                    "Clear selected_deployment value and set to null",
                  hidden: true,
                },
                optProject,
                optQuiet,
                {
                  name: "--remove-accreditation-enum-values",
                  description:
                    "Remove existing value from accreditation_enum_values list. The attribute values in case attribute data type is enum",
                  args: {
                    name: "REMOVE_ACCREDITATION_ENUM_VALUES",
                  },
                },
                optRemoveAttributes,
                {
                  name: "--remove-compliance-enum-values",
                  description:
                    "Remove existing value from compliance_enum_values list. The attribute values in case attribute data type is enum",
                  args: {
                    name: "REMOVE_COMPLIANCE_ENUM_VALUES",
                  },
                },
                {
                  name: "--remove-deployments",
                  description:
                    "IDs of the deployments or fully qualified identifiers for the deployments",
                  priority: 100,
                  args: {
                    name: "REMOVE_DEPLOYMENTS",
                    description: "List",
                  },
                },
                {
                  name: "--remove-lifecycle-enum-values",
                  description:
                    "Remove existing value from lifecycle_enum_values list. The attribute values in case attribute data type is enum",
                  args: {
                    name: "REMOVE_LIFECYCLE_ENUM_VALUES",
                  },
                },
                {
                  name: "--selected-deployment",
                  description:
                    "ID of the deployment or fully qualified identifier for the deployment",
                  priority: 100,
                  args: {
                    name: "SELECTED_DEPLOYMENT",
                    description: "String",
                  },
                },
                optTraceToken,
                {
                  name: "--update-attributes",
                  description:
                    "Update attributes value or add key value pair. The list of user defined attributes associated with the Version resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource",
                  args: {
                    name: "UPDATE_ATTRIBUTES",
                  },
                },
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "VERSION",
                description:
                  "ID of the version or fully qualified identifier for the version",
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
      name: "attributes",
      description: "Manage Attribute resources",
      subcommands: [
        {
          name: "create",
          description: "Create an Attribute",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--allowed-values",
              description:
                "The list of allowed values when the attribute value is of type enum. This is required when the data_type of the attribute is ENUM. The maximum number of allowed values of an attribute will be 1000",
              args: {
                name: "ALLOWED_VALUES",
              },
            },
            optBillingProject,
            {
              name: "--cardinality",
              description:
                "The maximum number of values that the attribute can have when associated with an API Hub resource. Cardinality 1 would represent a single-valued attribute. It must not be less than 1 or greater than 20. If not specified, the cardinality would be set to 1 by default and represent a single-valued attribute",
              args: {
                name: "CARDINALITY",
                description: "Int",
              },
            },
            optConfiguration,
            {
              name: "--data-type",
              description:
                "The type of the data of the attribute. _DATA_TYPE_ must be one of:",
              priority: 100,
              args: {
                name: "DATA_TYPE",
                suggestions: ["enum", "json", "string", "uri"],
              },
            },
            {
              name: "--description",
              description: "The description of the attribute",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "The display name of the attribute",
              priority: 100,
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
            optLocation4,
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--scope",
              description:
                "The scope of the attribute. It represents the resource in the API Hub to which the attribute can be linked. _SCOPE_ must be one of:",
              priority: 100,
              args: {
                name: "SCOPE",
                suggestions: [
                  "api",
                  "api-operation",
                  "definition",
                  "dependency",
                  "deployment",
                  "external-api",
                  "plugin",
                  "spec",
                  "version",
                ],
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ATTRIBUTE",
            description:
              "ID of the attribute or fully qualified identifier for the attribute",
          },
        },
        {
          name: "delete",
          description: "Delete an Attribute",
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
            name: "ATTRIBUTE",
            description:
              "ID of the attribute or fully qualified identifier for the attribute",
          },
        },
        {
          name: "describe",
          description: "Describe an Attribute",
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
            name: "ATTRIBUTE",
            description:
              "ID of the attribute or fully qualified identifier for the attribute",
          },
        },
        {
          name: "list",
          description: "List Attributes",
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
          name: "update",
          description: "Update an Attribute",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-allowed-values",
              description:
                "Add new value to allowed_values list. The list of allowed values when the attribute value is of type enum. This is required when the data_type of the attribute is ENUM. The maximum number of allowed values of an attribute will be 1000",
              args: {
                name: "ADD_ALLOWED_VALUES",
              },
            },
            {
              name: "--allowed-values",
              description:
                "Set allowed_values to new value. The list of allowed values when the attribute value is of type enum. This is required when the data_type of the attribute is ENUM. The maximum number of allowed values of an attribute will be 1000",
              args: {
                name: "ALLOWED_VALUES",
              },
            },
            optBillingProject,
            {
              name: "--cardinality",
              description:
                "The maximum number of values that the attribute can have when associated with an API Hub resource. Cardinality 1 would represent a single-valued attribute. It must not be less than 1 or greater than 20. If not specified, the cardinality would be set to 1 by default and represent a single-valued attribute",
              args: {
                name: "CARDINALITY",
                description: "Int",
              },
            },
            {
              name: "--clear-allowed-values",
              description: "Clear allowed_values value and set to empty list",
            },
            optConfiguration,
            {
              name: "--data-type",
              description:
                "The type of the data of the attribute. _DATA_TYPE_ must be one of:",
              args: {
                name: "DATA_TYPE",
                suggestions: ["enum", "json", "string", "uri"],
              },
            },
            {
              name: "--description",
              description: "The description of the attribute",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "The display name of the attribute",
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
            optLocation4,
            optLogHttp,
            {
              name: "--no-clear-allowed-values",
              description: "Clear allowed_values value and set to empty list",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--remove-allowed-values",
              description:
                "Remove existing value from allowed_values list. The list of allowed values when the attribute value is of type enum. This is required when the data_type of the attribute is ENUM. The maximum number of allowed values of an attribute will be 1000",
              args: {
                name: "REMOVE_ALLOWED_VALUES",
              },
            },
            {
              name: "--scope",
              description:
                "The scope of the attribute. It represents the resource in the API Hub to which the attribute can be linked. _SCOPE_ must be one of:",
              args: {
                name: "SCOPE",
                suggestions: [
                  "api",
                  "api-operation",
                  "definition",
                  "dependency",
                  "deployment",
                  "external-api",
                  "plugin",
                  "spec",
                  "version",
                ],
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ATTRIBUTE",
            description:
              "ID of the attribute or fully qualified identifier for the attribute",
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
      name: "curations",
      description: "Manage Curation resources",
      subcommands: [
        {
          name: "create",
          description: "Create a Curation",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--application-integration-endpoint-details-trigger-id",
              description:
                "The API trigger ID of the Application Integration workflow",
              priority: 100,
              args: {
                name: "APPLICATION_INTEGRATION_ENDPOINT_DETAILS_TRIGGER_ID",
                description: "String",
              },
            },
            {
              name: "--application-integration-endpoint-details-uri",
              description:
                "The endpoint URI should be a valid REST URI for triggering an Application Integration. Format: `https://integrations.googleapis.com/v1/{name=projects/*/locations/*/integrations/*}:execute` or `https://{location}-integrations.googleapis.com/v1/{name=projects/*/locations/*/integrations/*}:execute`",
              priority: 100,
              args: {
                name: "APPLICATION_INTEGRATION_ENDPOINT_DETAILS_URI",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "The description of the curation",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "The display name of the curation",
              priority: 100,
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
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CURATION",
            description:
              "ID of the curation or fully qualified identifier for the curation",
          },
        },
        {
          name: "delete",
          description: "Delete a Curation",
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
            name: "CURATION",
            description:
              "ID of the curation or fully qualified identifier for the curation",
          },
        },
        {
          name: "describe",
          description: "Describe a Curation",
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
            name: "CURATION",
            description:
              "ID of the curation or fully qualified identifier for the curation",
          },
        },
        {
          name: "list",
          description: "List Curations",
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
          name: "update",
          description: "Update a Curation",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--application-integration-endpoint-details-trigger-id",
              description:
                "The API trigger ID of the Application Integration workflow",
              args: {
                name: "APPLICATION_INTEGRATION_ENDPOINT_DETAILS_TRIGGER_ID",
                description: "String",
              },
            },
            {
              name: "--application-integration-endpoint-details-uri",
              description:
                "The endpoint URI should be a valid REST URI for triggering an Application Integration. Format: `https://integrations.googleapis.com/v1/{name=projects/*/locations/*/integrations/*}:execute` or `https://{location}-integrations.googleapis.com/v1/{name=projects/*/locations/*/integrations/*}:execute`",
              args: {
                name: "APPLICATION_INTEGRATION_ENDPOINT_DETAILS_URI",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--clear-endpoint",
              description:
                "Set googleCloudApihubV1Curation.endpoint back to default value",
            },
            optConfiguration,
            {
              name: "--description",
              description: "The description of the curation",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "The display name of the curation",
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
              name: "--no-clear-endpoint",
              description:
                "Set googleCloudApihubV1Curation.endpoint back to default value",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CURATION",
            description:
              "ID of the curation or fully qualified identifier for the curation",
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
      name: "dependencies",
      description: "Manage Dependency resources",
      subcommands: [
        {
          name: "create",
          description: "Create a Dependency",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--attributes",
              description:
                "The list of user defined attributes associated with the dependency resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource",
              args: {
                name: "ATTRIBUTES",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--consumer-external-api-resource-name",
              description:
                "The resource name of an external API in the API Hub",
              args: {
                name: "CONSUMER_EXTERNAL_API_RESOURCE_NAME",
                description: "String",
              },
            },
            {
              name: "--consumer-operation-resource-name",
              description: "The resource name of an operation in the API Hub",
              args: {
                name: "CONSUMER_OPERATION_RESOURCE_NAME",
                description: "String",
              },
            },
            {
              name: "--description",
              description:
                "Human readable description corresponding of the dependency",
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
            optLocation6,
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--supplier-external-api-resource-name",
              description:
                "The resource name of an external API in the API Hub",
              args: {
                name: "SUPPLIER_EXTERNAL_API_RESOURCE_NAME",
                description: "String",
              },
            },
            {
              name: "--supplier-operation-resource-name",
              description: "The resource name of an operation in the API Hub",
              args: {
                name: "SUPPLIER_OPERATION_RESOURCE_NAME",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DEPENDENCY",
            description:
              "ID of the dependency or fully qualified identifier for the dependency",
          },
        },
        {
          name: "delete",
          description: "Delete a Dependency",
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
            name: "DEPENDENCY",
            description:
              "ID of the dependency or fully qualified identifier for the dependency",
          },
        },
        {
          name: "describe",
          description: "Describe a Dependency",
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
            name: "DEPENDENCY",
            description:
              "ID of the dependency or fully qualified identifier for the dependency",
          },
        },
        {
          name: "list",
          description: "List Dependencies",
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
          name: "update",
          description: "Update a Dependency",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--attributes",
              description:
                "Set attributes to new value. The list of user defined attributes associated with the dependency resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource",
              args: {
                name: "ATTRIBUTES",
              },
            },
            optBillingProject,
            optClearAttributes,
            optConfiguration,
            {
              name: "--description",
              description:
                "Human readable description corresponding of the dependency",
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
            optLocation6,
            optLogHttp,
            optNoClearAttributes,
            optProject,
            optQuiet,
            optRemoveAttributes,
            optTraceToken,
            {
              name: "--update-attributes",
              description:
                "Update attributes value or add key value pair. The list of user defined attributes associated with the dependency resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource",
              args: {
                name: "UPDATE_ATTRIBUTES",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DEPENDENCY",
            description:
              "ID of the dependency or fully qualified identifier for the dependency",
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
      name: "deployments",
      description: "Manage Deployment resources",
      subcommands: [
        {
          name: "create",
          description: "Create a Deployment",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--attributes",
              description:
                "The list of user defined attributes associated with the deployment resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource",
              args: {
                name: "ATTRIBUTES",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--deployment-type-enum-values",
              description:
                "Required, The attribute values in case attribute data type is enum",
              priority: 100,
              args: {
                name: "DEPLOYMENT_TYPE_ENUM_VALUES",
              },
            },
            {
              name: "--deployment-type-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "DEPLOYMENT_TYPE_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--deployment-type-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "DEPLOYMENT_TYPE_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--deployment-type-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "DEPLOYMENT_TYPE_URI_VALUES",
                description: "List",
              },
            },
            {
              name: "--description",
              description: "The description of the deployment",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "The display name of the deployment",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optDocumentationExternalUri,
            {
              name: "--endpoints",
              description:
                "The endpoints at which this deployment resource is listening for API requests. This could be a list of complete URIs, hostnames or an IP addresses",
              priority: 100,
              args: {
                name: "ENDPOINTS",
                description: "List",
              },
            },
            {
              name: "--environment-enum-values",
              description:
                "Required, The attribute values in case attribute data type is enum",
              priority: 100,
              args: {
                name: "ENVIRONMENT_ENUM_VALUES",
              },
            },
            {
              name: "--environment-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "ENVIRONMENT_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--environment-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "ENVIRONMENT_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--environment-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "ENVIRONMENT_URI_VALUES",
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
            optLocation7,
            optLogHttp,
            {
              name: "--management-url-enum-values",
              description:
                "Required, The attribute values in case attribute data type is enum",
              priority: 100,
              args: {
                name: "MANAGEMENT_URL_ENUM_VALUES",
              },
            },
            {
              name: "--management-url-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "MANAGEMENT_URL_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--management-url-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "MANAGEMENT_URL_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--management-url-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "MANAGEMENT_URL_URI_VALUES",
                description: "List",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--resource-uri",
              description:
                "The resource URI identifies the deployment within its gateway. For Apigee gateways, its recommended to use the format: organizations/{org}/environments/{env}/apis/{api}. For ex: if a proxy with name `orders` is deployed in `staging` environment of `cymbal` organization, the resource URI would be: `organizations/cymbal/environments/staging/apis/orders`",
              priority: 100,
              args: {
                name: "RESOURCE_URI",
                description: "String",
              },
            },
            {
              name: "--slo-enum-values",
              description:
                "Required, The attribute values in case attribute data type is enum",
              priority: 100,
              args: {
                name: "SLO_ENUM_VALUES",
              },
            },
            {
              name: "--slo-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "SLO_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--slo-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "SLO_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--slo-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "SLO_URI_VALUES",
                description: "List",
              },
            },
            {
              name: "--source-environment",
              description:
                "The environment at source for the deployment. For example: prod, dev, staging, etc",
              args: {
                name: "SOURCE_ENVIRONMENT",
                description: "String",
              },
            },
            {
              name: "--source-project",
              description:
                "The project to which the deployment belongs. For Google Cloud gateways, this will refer to the project identifier. For others like Edge/OPDK, this will refer to the org identifier",
              args: {
                name: "SOURCE_PROJECT",
                description: "String",
              },
            },
            {
              name: "--source-uri-enum-values",
              description:
                "Required, The attribute values in case attribute data type is enum",
              priority: 100,
              args: {
                name: "SOURCE_URI_ENUM_VALUES",
              },
            },
            {
              name: "--source-uri-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "SOURCE_URI_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--source-uri-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "SOURCE_URI_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--source-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "SOURCE_URI_VALUES",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DEPLOYMENT",
            description:
              "ID of the deployment or fully qualified identifier for the deployment",
          },
        },
        {
          name: "delete",
          description: "Delete a Deployment",
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
            name: "DEPLOYMENT",
            description:
              "ID of the deployment or fully qualified identifier for the deployment",
          },
        },
        {
          name: "describe",
          description: "Describe a Deployment",
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
            name: "DEPLOYMENT",
            description:
              "ID of the deployment or fully qualified identifier for the deployment",
          },
        },
        {
          name: "list",
          description: "List Deployments",
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
          name: "update",
          description: "Update deployments",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-deployment-type-enum-values",
              description:
                "Add new value to deployment_type_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "ADD_DEPLOYMENT_TYPE_ENUM_VALUES",
              },
            },
            {
              name: "--add-environment-enum-values",
              description:
                "Add new value to environment_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "ADD_ENVIRONMENT_ENUM_VALUES",
              },
            },
            {
              name: "--add-management-url-enum-values",
              description:
                "Add new value to management_url_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "ADD_MANAGEMENT_URL_ENUM_VALUES",
              },
            },
            {
              name: "--add-slo-enum-values",
              description:
                "Add new value to slo_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "ADD_SLO_ENUM_VALUES",
              },
            },
            {
              name: "--add-source-uri-enum-values",
              description:
                "Add new value to source_uri_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "ADD_SOURCE_URI_ENUM_VALUES",
              },
            },
            {
              name: "--attributes",
              description:
                "Set attributes to new value. The list of user defined attributes associated with the deployment resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource",
              args: {
                name: "ATTRIBUTES",
              },
            },
            optBillingProject,
            optClearAttributes,
            {
              name: "--clear-deployment-type",
              description:
                "Set googleCloudApihubV1Deployment.deploymentType back to default value",
            },
            {
              name: "--clear-deployment-type-enum-values",
              description:
                "Clear deployment_type_enum_values value and set to empty list",
            },
            {
              name: "--clear-documentation",
              description:
                "Set googleCloudApihubV1Deployment.documentation back to default value",
            },
            {
              name: "--clear-environment",
              description:
                "Set googleCloudApihubV1Deployment.environment back to default value",
            },
            {
              name: "--clear-environment-enum-values",
              description:
                "Clear environment_enum_values value and set to empty list",
            },
            {
              name: "--clear-management-url",
              description:
                "Set googleCloudApihubV1Deployment.managementUrl back to default value",
            },
            {
              name: "--clear-management-url-enum-values",
              description:
                "Clear management_url_enum_values value and set to empty list",
            },
            {
              name: "--clear-slo",
              description:
                "Set googleCloudApihubV1Deployment.slo back to default value",
            },
            {
              name: "--clear-slo-enum-values",
              description: "Clear slo_enum_values value and set to empty list",
            },
            {
              name: "--clear-source-uri",
              description:
                "Set googleCloudApihubV1Deployment.sourceUri back to default value",
            },
            {
              name: "--clear-source-uri-enum-values",
              description:
                "Clear source_uri_enum_values value and set to empty list",
            },
            optConfiguration,
            {
              name: "--deployment-type-enum-values",
              description:
                "Set deployment_type_enum_values to new value. The attribute values in case attribute data type is enum",
              args: {
                name: "DEPLOYMENT_TYPE_ENUM_VALUES",
              },
            },
            {
              name: "--deployment-type-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "DEPLOYMENT_TYPE_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--deployment-type-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "DEPLOYMENT_TYPE_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--deployment-type-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "DEPLOYMENT_TYPE_URI_VALUES",
                description: "List",
              },
            },
            {
              name: "--description",
              description: "The description of the deployment",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "The display name of the deployment",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optDocumentationExternalUri,
            {
              name: "--endpoints",
              description:
                "The endpoints at which this deployment resource is listening for API requests. This could be a list of complete URIs, hostnames or an IP addresses",
              args: {
                name: "ENDPOINTS",
                description: "List",
              },
            },
            {
              name: "--environment-enum-values",
              description:
                "Set environment_enum_values to new value. The attribute values in case attribute data type is enum",
              args: {
                name: "ENVIRONMENT_ENUM_VALUES",
              },
            },
            {
              name: "--environment-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "ENVIRONMENT_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--environment-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "ENVIRONMENT_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--environment-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "ENVIRONMENT_URI_VALUES",
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
            optLocation7,
            optLogHttp,
            {
              name: "--management-url-enum-values",
              description:
                "Set management_url_enum_values to new value. The attribute values in case attribute data type is enum",
              args: {
                name: "MANAGEMENT_URL_ENUM_VALUES",
              },
            },
            {
              name: "--management-url-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "MANAGEMENT_URL_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--management-url-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "MANAGEMENT_URL_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--management-url-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "MANAGEMENT_URL_URI_VALUES",
                description: "List",
              },
            },
            optNoClearAttributes,
            {
              name: "--no-clear-deployment-type",
              description:
                "Set googleCloudApihubV1Deployment.deploymentType back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-deployment-type-enum-values",
              description:
                "Clear deployment_type_enum_values value and set to empty list",
              hidden: true,
            },
            {
              name: "--no-clear-documentation",
              description:
                "Set googleCloudApihubV1Deployment.documentation back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-environment",
              description:
                "Set googleCloudApihubV1Deployment.environment back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-environment-enum-values",
              description:
                "Clear environment_enum_values value and set to empty list",
              hidden: true,
            },
            {
              name: "--no-clear-management-url",
              description:
                "Set googleCloudApihubV1Deployment.managementUrl back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-management-url-enum-values",
              description:
                "Clear management_url_enum_values value and set to empty list",
              hidden: true,
            },
            {
              name: "--no-clear-slo",
              description:
                "Set googleCloudApihubV1Deployment.slo back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-slo-enum-values",
              description: "Clear slo_enum_values value and set to empty list",
              hidden: true,
            },
            {
              name: "--no-clear-source-uri",
              description:
                "Set googleCloudApihubV1Deployment.sourceUri back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-source-uri-enum-values",
              description:
                "Clear source_uri_enum_values value and set to empty list",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRemoveAttributes,
            {
              name: "--remove-deployment-type-enum-values",
              description:
                "Remove existing value from deployment_type_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "REMOVE_DEPLOYMENT_TYPE_ENUM_VALUES",
              },
            },
            {
              name: "--remove-environment-enum-values",
              description:
                "Remove existing value from environment_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "REMOVE_ENVIRONMENT_ENUM_VALUES",
              },
            },
            {
              name: "--remove-management-url-enum-values",
              description:
                "Remove existing value from management_url_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "REMOVE_MANAGEMENT_URL_ENUM_VALUES",
              },
            },
            {
              name: "--remove-slo-enum-values",
              description:
                "Remove existing value from slo_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "REMOVE_SLO_ENUM_VALUES",
              },
            },
            {
              name: "--remove-source-uri-enum-values",
              description:
                "Remove existing value from source_uri_enum_values list. The attribute values in case attribute data type is enum",
              args: {
                name: "REMOVE_SOURCE_URI_ENUM_VALUES",
              },
            },
            {
              name: "--resource-uri",
              description:
                "The resource URI identifies the deployment within its gateway. For Apigee gateways, its recommended to use the format: organizations/{org}/environments/{env}/apis/{api}. For ex: if a proxy with name `orders` is deployed in `staging` environment of `cymbal` organization, the resource URI would be: `organizations/cymbal/environments/staging/apis/orders`",
              args: {
                name: "RESOURCE_URI",
                description: "String",
              },
            },
            {
              name: "--slo-enum-values",
              description:
                "Set slo_enum_values to new value. The attribute values in case attribute data type is enum",
              args: {
                name: "SLO_ENUM_VALUES",
              },
            },
            {
              name: "--slo-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "SLO_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--slo-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "SLO_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--slo-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "SLO_URI_VALUES",
                description: "List",
              },
            },
            {
              name: "--source-environment",
              description:
                "The environment at source for the deployment. For example: prod, dev, staging, etc",
              args: {
                name: "SOURCE_ENVIRONMENT",
                description: "String",
              },
            },
            {
              name: "--source-project",
              description:
                "The project to which the deployment belongs. For Google Cloud gateways, this will refer to the project identifier. For others like Edge/OPDK, this will refer to the org identifier",
              args: {
                name: "SOURCE_PROJECT",
                description: "String",
              },
            },
            {
              name: "--source-uri-enum-values",
              description:
                "Set source_uri_enum_values to new value. The attribute values in case attribute data type is enum",
              args: {
                name: "SOURCE_URI_ENUM_VALUES",
              },
            },
            {
              name: "--source-uri-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "SOURCE_URI_JSON_VALUES",
                description: "List",
              },
            },
            {
              name: "--source-uri-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "SOURCE_URI_STRING_VALUES",
                description: "List",
              },
            },
            {
              name: "--source-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "SOURCE_URI_VALUES",
                description: "List",
              },
            },
            optTraceToken,
            {
              name: "--update-attributes",
              description:
                "Update attributes value or add key value pair. The list of user defined attributes associated with the deployment resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource",
              args: {
                name: "UPDATE_ATTRIBUTES",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DEPLOYMENT",
            description:
              "ID of the deployment or fully qualified identifier for the deployment",
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
      name: "discovered-api-observations",
      description: "Manage Discovered Api Observation resources",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Discovered Api Observation",
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
              description:
                "The location id of the discoveredApiObservation resource",
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
            name: "DISCOVERED_API_OBSERVATION",
            description:
              "ID of the discoveredApiObservation or fully qualified identifier for the discoveredApiObservation",
          },
        },
        {
          name: "discovered-api-operations",
          description: "Manage Discovered Api Operation resources",
          subcommands: [
            {
              name: "describe",
              description: "Describe a Discovered Api Operation",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--discovered-api-observation",
                  description:
                    "The discoveredApiObservation id of the discoveredApiOperation resource",
                  args: {
                    name: "DISCOVERED_API_OBSERVATION",
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
                    "The location id of the discoveredApiOperation resource",
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
                name: "DISCOVERED_API_OPERATION",
                description:
                  "ID of the discoveredApiOperation or fully qualified identifier for the discoveredApiOperation",
              },
            },
            {
              name: "list",
              description: "List Discovered Api Operations",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--discovered-api-observation",
                  description:
                    "ID of the discoveredApiObservation or fully qualified identifier for the discoveredApiObservation",
                  priority: 100,
                  args: {
                    name: "DISCOVERED_API_OBSERVATION",
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
                {
                  name: "--location",
                  description:
                    "The location id of the discoveredApiObservation resource",
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
          description: "List Discovered Api Observations",
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
      name: "external-apis",
      description: "Manage External Api resources",
      subcommands: [
        {
          name: "create",
          description: "Create an External Api",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--attributes",
              description:
                "The list of user defined attributes associated with the Version resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource",
              args: {
                name: "ATTRIBUTES",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description:
                "Description of the external API. Max length is 2000 characters (Unicode Code Points)",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description:
                "Display name of the external API. Max length is 63 characters (Unicode Code Points)",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optDocumentationExternalUri,
            {
              name: "--endpoints",
              description: "List of endpoints on which this API is accessible",
              args: {
                name: "ENDPOINTS",
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
            optLocation8,
            optLogHttp,
            {
              name: "--paths",
              description: "List of paths served by this API",
              args: {
                name: "PATHS",
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
            name: "EXTERNAL_API",
            description:
              "ID of the externalApi or fully qualified identifier for the externalApi",
          },
        },
        {
          name: "delete",
          description: "Delete an External Api",
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
            name: "EXTERNAL_API",
            description:
              "ID of the externalApi or fully qualified identifier for the externalApi",
          },
        },
        {
          name: "describe",
          description: "Describe an External Api",
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
            name: "EXTERNAL_API",
            description:
              "ID of the externalApi or fully qualified identifier for the externalApi",
          },
        },
        {
          name: "list",
          description: "List External Apis",
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
          name: "update",
          description: "Update an External Api",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-endpoints",
              description: "Add new value to endpoints list",
              args: {
                name: "ADD_ENDPOINTS",
              },
            },
            {
              name: "--add-paths",
              description: "Add new value to paths list",
              args: {
                name: "ADD_PATHS",
              },
            },
            {
              name: "--attributes",
              description:
                "Set attributes to new value. The list of user defined attributes associated with the Version resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource",
              args: {
                name: "ATTRIBUTES",
              },
            },
            optBillingProject,
            optClearAttributes,
            {
              name: "--clear-documentation",
              description:
                "Set googleCloudApihubV1ExternalApi.documentation back to default value",
            },
            {
              name: "--clear-endpoints",
              description: "Clear endpoints value and set to empty list",
            },
            {
              name: "--clear-paths",
              description: "Clear paths value and set to empty list",
            },
            optConfiguration,
            {
              name: "--description",
              description:
                "Description of the external API. Max length is 2000 characters (Unicode Code Points)",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description:
                "Display name of the external API. Max length is 63 characters (Unicode Code Points)",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optDocumentationExternalUri,
            {
              name: "--endpoints",
              description: "Set endpoints to new value",
              args: {
                name: "ENDPOINTS",
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
            optLocation8,
            optLogHttp,
            optNoClearAttributes,
            {
              name: "--no-clear-documentation",
              description:
                "Set googleCloudApihubV1ExternalApi.documentation back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-endpoints",
              description: "Clear endpoints value and set to empty list",
              hidden: true,
            },
            {
              name: "--no-clear-paths",
              description: "Clear paths value and set to empty list",
              hidden: true,
            },
            {
              name: "--paths",
              description: "Set paths to new value",
              args: {
                name: "PATHS",
              },
            },
            optProject,
            optQuiet,
            optRemoveAttributes,
            {
              name: "--remove-endpoints",
              description: "Remove existing value from endpoints list",
              args: {
                name: "REMOVE_ENDPOINTS",
              },
            },
            {
              name: "--remove-paths",
              description: "Remove existing value from paths list",
              args: {
                name: "REMOVE_PATHS",
              },
            },
            optTraceToken,
            {
              name: "--update-attributes",
              description:
                "Update attributes value or add key value pair. The list of user defined attributes associated with the Version resource. The key is the attribute name. It will be of the format: `projects/{project}/locations/{location}/attributes/{attribute}`. The value is the attribute values associated with the resource",
              args: {
                name: "UPDATE_ATTRIBUTES",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "EXTERNAL_API",
            description:
              "ID of the externalApi or fully qualified identifier for the externalApi",
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
      name: "host-project-registrations",
      description: "Manage Host Project Registration resources",
      subcommands: [
        {
          name: "create",
          description: "Create a Host Project Registration",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gcp-project",
              description:
                'Google cloud project name in the format: "projects/abc" or "projects/123". As input, project name with either project id or number are accepted. As output, this field will contain project number',
              priority: 100,
              args: {
                name: "GCP_PROJECT",
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
              description:
                "The location id of the hostProjectRegistration resource",
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
            name: "HOST_PROJECT_REGISTRATION",
            description:
              "ID of the hostProjectRegistration or fully qualified identifier for the hostProjectRegistration",
          },
        },
        {
          name: "describe",
          description: "Describe a Host Project Registration",
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
              description:
                "The location id of the hostProjectRegistration resource",
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
            name: "HOST_PROJECT_REGISTRATION",
            description:
              "ID of the hostProjectRegistration or fully qualified identifier for the hostProjectRegistration",
          },
        },
        {
          name: "list",
          description: "List Host Project Registrations",
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
            optLocation10,
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
            optLocation10,
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
            optLocation10,
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
            optLocation10,
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
      name: "plugins",
      description: "Manage Plugin resources",
      subcommands: [
        {
          name: "create",
          description: "Create a Plugin",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--actions-config",
              description:
                "The configuration of actions supported by the plugin. **REQUIRED**: This field must be provided when creating or updating a Plugin. The server will reject requests if this field is missing",
              args: {
                name: "ACTIONS_CONFIG",
              },
            },
            {
              name: "--auth-config-template-supported-types",
              description:
                "The list of authentication types supported by the plugin. _AUTH_CONFIG_TEMPLATE_SUPPORTED_TYPES_ must be one of:",
              priority: 100,
              args: {
                name: "AUTH_CONFIG_TEMPLATE_SUPPORTED_TYPES",
                description: "List",
              },
            },
            optBillingProject,
            {
              name: "--config-template-additional",
              description:
                "The list of additional configuration variables for the plugin's configuration",
              args: {
                name: "CONFIG_TEMPLATE_ADDITIONAL",
              },
            },
            optConfiguration,
            {
              name: "--description",
              description:
                "The plugin description. Max length is 2000 characters (Unicode code points)",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description:
                "The display name of the plugin. Max length is 50 characters (Unicode code points)",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optDocumentationExternalUri,
            {
              name: "--enum-values",
              description:
                "Required, The attribute values in case attribute data type is enum",
              priority: 100,
              args: {
                name: "ENUM_VALUES",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gateway-type",
              description:
                "The type of the gateway. _GATEWAY_TYPE_ must be one of:",
              args: {
                name: "GATEWAY_TYPE",
                suggestions: [
                  "api-discovery",
                  "apigee-edge-private-cloud",
                  "apigee-edge-public-cloud",
                  "apigee-x-and-hybrid",
                  "cloud-api-gateway",
                  "cloud-endpoints",
                  "others",
                ],
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--hosting-service-uri",
              description:
                "The URI of the service implemented by the plugin developer, used to invoke the plugin's functionality. This information is only required for user defined plugins",
              args: {
                name: "HOSTING_SERVICE_URI",
                description: "String",
              },
            },
            optImpersonateServiceAccount,
            {
              name: "--json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "JSON_VALUES",
                description: "List",
              },
            },
            optLocation11,
            optLogHttp,
            {
              name: "--plugin-category",
              description:
                "The category of the plugin, identifying its primary category or purpose. This field is required for all plugins. _PLUGIN_CATEGORY_ must be one of:",
              args: {
                name: "PLUGIN_CATEGORY",
                suggestions: ["api-gateway", "api-producer"],
              },
            },
            optProject,
            optQuiet,
            {
              name: "--string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "STRING_VALUES",
                description: "List",
              },
            },
            optTraceToken,
            {
              name: "--uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              priority: 100,
              args: {
                name: "URI_VALUES",
                description: "List",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PLUGIN",
            description:
              "ID of the plugin or fully qualified identifier for the plugin",
          },
        },
        {
          name: "delete",
          description: "Delete a Plugin",
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
            optLocation11,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PLUGIN",
            description:
              "ID of the plugin or fully qualified identifier for the plugin",
          },
        },
        {
          name: "describe",
          description: "Describe a Plugin",
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
            optLocation11,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PLUGIN",
            description:
              "ID of the plugin or fully qualified identifier for the plugin",
          },
        },
        {
          name: "disable",
          description: "Disable a Plugin",
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
            optLocation11,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PLUGIN",
            description:
              "ID of the plugin or fully qualified identifier for the plugin",
          },
        },
        {
          name: "enable",
          description: "Enable a Plugin",
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
            optLocation11,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PLUGIN",
            description:
              "ID of the plugin or fully qualified identifier for the plugin",
          },
        },
        {
          name: "instances",
          description: "Manage Plugin Instance resources",
          subcommands: [
            {
              name: "create",
              description: "Create a Plugin Instance",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--actions",
                  description:
                    "Required, The action status for the plugin instance",
                  priority: 100,
                  args: {
                    name: "ACTIONS",
                  },
                },
                {
                  name: "--additional-config",
                  description:
                    "The additional information for this plugin instance corresponding to the additional config template of the plugin. This information will be sent to plugin hosting service on each call to plugin hosted service. The key will be the config_variable_template.display_name to uniquely identify the config variable",
                  args: {
                    name: "ADDITIONAL_CONFIG",
                  },
                },
                {
                  name: "--api-key-config-http-element-location",
                  description:
                    "The location of the API key. The default value is QUERY. _API_KEY_CONFIG_HTTP_ELEMENT_LOCATION_ must be one of:",
                  priority: 100,
                  args: {
                    name: "API_KEY_CONFIG_HTTP_ELEMENT_LOCATION",
                    suggestions: ["body", "cookie", "header", "path", "query"],
                  },
                },
                {
                  name: "--api-key-config-name",
                  description:
                    'The parameter name of the API key. E.g. If the API request is "https://example.com/act?api_key=<API KEY>", "api_key" would be the parameter name',
                  priority: 100,
                  args: {
                    name: "API_KEY_CONFIG_NAME",
                    description: "String",
                  },
                },
                {
                  name: "--api-key-config-secret-version",
                  description:
                    "The resource name of the secret version in the format, format as: `projects/*/secrets/*/versions/*`",
                  priority: 100,
                  args: {
                    name: "API_KEY_CONFIG_SECRET_VERSION",
                    description: "String",
                  },
                },
                optAsync,
                {
                  name: "--auth-config-type",
                  description:
                    "The authentication type. _AUTH_CONFIG_TYPE_ must be one of:",
                  priority: 100,
                  args: {
                    name: "AUTH_CONFIG_TYPE",
                    suggestions: [
                      "api-key",
                      "google-service-account",
                      "no-auth",
                      "oauth2-client-credentials",
                      "user-password",
                    ],
                  },
                },
                optBillingProject,
                optConfiguration,
                {
                  name: "--display-name",
                  description:
                    "The display name for this plugin instance. Max length is 255 characters",
                  priority: 100,
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
                optNoAsync,
                {
                  name: "--oauth2-client-credentials-config-id",
                  description: "The client identifier",
                  priority: 100,
                  args: {
                    name: "OAUTH2_CLIENT_CREDENTIALS_CONFIG_ID",
                    description: "String",
                  },
                },
                {
                  name: "--oauth2-client-credentials-config-secret-version",
                  description:
                    "The resource name of the secret version in the format, format as: `projects/*/secrets/*/versions/*`",
                  priority: 100,
                  args: {
                    name: "OAUTH2_CLIENT_CREDENTIALS_CONFIG_SECRET_VERSION",
                    description: "String",
                  },
                },
                optPlugin,
                optProject,
                optQuiet,
                {
                  name: "--source-environments-config",
                  description:
                    "The source environment's config present in the gateway instance linked to the plugin instance. The key is the `source_environment` name from the SourceEnvironment message",
                  args: {
                    name: "SOURCE_ENVIRONMENTS_CONFIG",
                  },
                },
                {
                  name: "--source-project-id",
                  description:
                    "The source project id of the plugin instance. This will be the id of runtime project in case of Google Cloud based plugins and org id in case of non-Google Cloud based plugins. This field will be a required field for Google provided on-ramp plugins",
                  args: {
                    name: "SOURCE_PROJECT_ID",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                {
                  name: "--user-password-config-secret-version",
                  description:
                    "The resource name of the secret version in the format, format as: `projects/*/secrets/*/versions/*`",
                  priority: 100,
                  args: {
                    name: "USER_PASSWORD_CONFIG_SECRET_VERSION",
                    description: "String",
                  },
                },
                {
                  name: "--user-password-config-username",
                  description: "Username",
                  priority: 100,
                  args: {
                    name: "USER_PASSWORD_CONFIG_USERNAME",
                    description: "String",
                  },
                },
                optVerbosity,
              ],
              args: {
                name: "INSTANCE",
                description:
                  "ID of the instance or fully qualified identifier for the instance",
              },
            },
            {
              name: "delete",
              description: "Delete a Plugin Instance",
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
                optLocation9,
                optLogHttp,
                optNoAsync,
                optPlugin,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "INSTANCE",
                description:
                  "ID of the instance or fully qualified identifier for the instance",
              },
            },
            {
              name: "describe",
              description: "Describe a Plugin Instance",
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
                optPlugin,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "INSTANCE",
                description:
                  "ID of the instance or fully qualified identifier for the instance",
              },
            },
            {
              name: "list",
              description: "List Plugin Instances",
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
                optLocation11,
                optLogHttp,
                optNoUri,
                optPageSize,
                {
                  name: "--plugin",
                  description:
                    "ID of the plugin or fully qualified identifier for the plugin",
                  priority: 100,
                  args: {
                    name: "PLUGIN",
                    description: "String",
                  },
                },
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
              name: "manage-source-data",
              description: "Manage pluginInstances",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--action",
                  description:
                    "Action to be performed. _ACTION_ must be one of:",
                  priority: 100,
                  args: {
                    name: "ACTION",
                    suggestions: ["delete", "upload"],
                  },
                },
                optBillingProject,
                optConfiguration,
                {
                  name: "--data",
                  description: "Data to be managed",
                  priority: 100,
                  args: {
                    name: "DATA",
                  },
                },
                {
                  name: "--data-type",
                  description:
                    "Type of data to be managed. _DATA_TYPE_ must be one of:",
                  priority: 100,
                  args: {
                    name: "DATA_TYPE",
                    suggestions: [
                      "environment-manifest",
                      "proxy-bundle",
                      "proxy-deployment-manifest",
                      "shared-flow-bundle",
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
                optLocation9,
                optLogHttp,
                optPlugin,
                optProject,
                optQuiet,
                {
                  name: "--relative-path",
                  description:
                    "Relative path of data being managed for a given plugin instance",
                  priority: 100,
                  args: {
                    name: "RELATIVE_PATH",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "INSTANCE",
                description:
                  "ID of the instance or fully qualified identifier for the instance",
              },
            },
            {
              name: "update",
              description: "Update a Plugin Instance",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--actions",
                  description:
                    "Set actions to new value. The action status for the plugin instance",
                  args: {
                    name: "ACTIONS",
                  },
                },
                {
                  name: "--add-actions",
                  description:
                    "Add new value to actions list. The action status for the plugin instance",
                  args: {
                    name: "ADD_ACTIONS",
                  },
                },
                {
                  name: "--additional-config",
                  description:
                    "Set additional_config to new value. The additional information for this plugin instance corresponding to the additional config template of the plugin. This information will be sent to plugin hosting service on each call to plugin hosted service. The key will be the config_variable_template.display_name to uniquely identify the config variable",
                  args: {
                    name: "ADDITIONAL_CONFIG",
                  },
                },
                {
                  name: "--api-key-config-http-element-location",
                  description:
                    "The location of the API key. The default value is QUERY. _API_KEY_CONFIG_HTTP_ELEMENT_LOCATION_ must be one of:",
                  args: {
                    name: "API_KEY_CONFIG_HTTP_ELEMENT_LOCATION",
                    suggestions: ["body", "cookie", "header", "path", "query"],
                  },
                },
                {
                  name: "--api-key-config-name",
                  description:
                    'The parameter name of the API key. E.g. If the API request is "https://example.com/act?api_key=<API KEY>", "api_key" would be the parameter name',
                  args: {
                    name: "API_KEY_CONFIG_NAME",
                    description: "String",
                  },
                },
                {
                  name: "--api-key-config-secret-version",
                  description:
                    "The resource name of the secret version in the format, format as: `projects/*/secrets/*/versions/*`",
                  args: {
                    name: "API_KEY_CONFIG_SECRET_VERSION",
                    description: "String",
                  },
                },
                {
                  name: "--auth-config-type",
                  description:
                    "The authentication type. _AUTH_CONFIG_TYPE_ must be one of:",
                  args: {
                    name: "AUTH_CONFIG_TYPE",
                    suggestions: [
                      "api-key",
                      "google-service-account",
                      "no-auth",
                      "oauth2-client-credentials",
                      "user-password",
                    ],
                  },
                },
                optBillingProject,
                {
                  name: "--clear-actions",
                  description: "Clear actions value and set to empty list",
                },
                {
                  name: "--clear-additional-config",
                  description:
                    "Clear additional_config value and set to empty map",
                },
                {
                  name: "--clear-auth-config",
                  description:
                    "Set googleCloudApihubV1PluginInstance.authConfig back to default value",
                },
                {
                  name: "--clear-source-environments-config",
                  description:
                    "Clear source_environments_config value and set to empty map",
                },
                optConfiguration,
                {
                  name: "--display-name",
                  description:
                    "The display name for this plugin instance. Max length is 255 characters",
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
                  name: "--no-clear-actions",
                  description: "Clear actions value and set to empty list",
                  hidden: true,
                },
                {
                  name: "--no-clear-additional-config",
                  description:
                    "Clear additional_config value and set to empty map",
                  hidden: true,
                },
                {
                  name: "--no-clear-auth-config",
                  description:
                    "Set googleCloudApihubV1PluginInstance.authConfig back to default value",
                  hidden: true,
                },
                {
                  name: "--no-clear-source-environments-config",
                  description:
                    "Clear source_environments_config value and set to empty map",
                  hidden: true,
                },
                {
                  name: "--oauth2-client-credentials-config-id",
                  description: "The client identifier",
                  args: {
                    name: "OAUTH2_CLIENT_CREDENTIALS_CONFIG_ID",
                    description: "String",
                  },
                },
                {
                  name: "--oauth2-client-credentials-config-secret-version",
                  description:
                    "The resource name of the secret version in the format, format as: `projects/*/secrets/*/versions/*`",
                  args: {
                    name: "OAUTH2_CLIENT_CREDENTIALS_CONFIG_SECRET_VERSION",
                    description: "String",
                  },
                },
                optPlugin,
                optProject,
                optQuiet,
                {
                  name: "--remove-actions",
                  description:
                    "Remove existing value from actions list. The action status for the plugin instance",
                  args: {
                    name: "REMOVE_ACTIONS",
                  },
                },
                {
                  name: "--remove-additional-config",
                  description:
                    "Remove existing value from map additional_config. Sets `remove_additional_config` value",
                  args: {
                    name: "REMOVE_ADDITIONAL_CONFIG",
                    description: "Dict",
                  },
                },
                {
                  name: "--remove-source-environments-config",
                  description:
                    "Remove existing value from map source_environments_config. Sets `remove_source_environments_config` value",
                  args: {
                    name: "REMOVE_SOURCE_ENVIRONMENTS_CONFIG",
                    description: "Dict",
                  },
                },
                {
                  name: "--source-environments-config",
                  description:
                    "Set source_environments_config to new value. The source environment's config present in the gateway instance linked to the plugin instance. The key is the `source_environment` name from the SourceEnvironment message",
                  args: {
                    name: "SOURCE_ENVIRONMENTS_CONFIG",
                  },
                },
                {
                  name: "--source-project-id",
                  description:
                    "The source project id of the plugin instance. This will be the id of runtime project in case of Google Cloud based plugins and org id in case of non-Google Cloud based plugins. This field will be a required field for Google provided on-ramp plugins",
                  args: {
                    name: "SOURCE_PROJECT_ID",
                    description: "String",
                  },
                },
                optTraceToken,
                {
                  name: "--update-additional-config",
                  description:
                    "Update additional_config value or add key value pair. The additional information for this plugin instance corresponding to the additional config template of the plugin. This information will be sent to plugin hosting service on each call to plugin hosted service. The key will be the config_variable_template.display_name to uniquely identify the config variable",
                  args: {
                    name: "UPDATE_ADDITIONAL_CONFIG",
                  },
                },
                {
                  name: "--update-source-environments-config",
                  description:
                    "Update source_environments_config value or add key value pair. The source environment's config present in the gateway instance linked to the plugin instance. The key is the `source_environment` name from the SourceEnvironment message",
                  args: {
                    name: "UPDATE_SOURCE_ENVIRONMENTS_CONFIG",
                  },
                },
                optUserOutputEnabled,
                {
                  name: "--user-password-config-secret-version",
                  description:
                    "The resource name of the secret version in the format, format as: `projects/*/secrets/*/versions/*`",
                  args: {
                    name: "USER_PASSWORD_CONFIG_SECRET_VERSION",
                    description: "String",
                  },
                },
                {
                  name: "--user-password-config-username",
                  description: "Username",
                  args: {
                    name: "USER_PASSWORD_CONFIG_USERNAME",
                    description: "String",
                  },
                },
                optVerbosity,
              ],
              args: {
                name: "INSTANCE",
                description:
                  "ID of the instance or fully qualified identifier for the instance",
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
          name: "list",
          description: "List Plugins",
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
      name: "runtime-project-attachments",
      description: "Manage Runtime Project Attachment resources",
      subcommands: [
        {
          name: "create",
          description: "Create a Runtime Project Attachment",
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
            {
              name: "--runtime-project",
              description:
                'Google cloud project name in the format: "projects/abc" or "projects/123". As input, project name with either project id or number are accepted. As output, this field will contain project number',
              priority: 100,
              args: {
                name: "RUNTIME_PROJECT",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RUNTIME_PROJECT_ATTACHMENT",
            description:
              "ID of the runtimeProjectAttachment or fully qualified identifier for the runtimeProjectAttachment",
          },
        },
        {
          name: "delete",
          description: "Delete a Runtime Project Attachment",
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
            name: "RUNTIME_PROJECT_ATTACHMENT",
            description:
              "ID of the runtimeProjectAttachment or fully qualified identifier for the runtimeProjectAttachment",
          },
        },
        {
          name: "describe",
          description: "Describe a Runtime Project Attachment",
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
            name: "RUNTIME_PROJECT_ATTACHMENT",
            description:
              "ID of the runtimeProjectAttachment or fully qualified identifier for the runtimeProjectAttachment",
          },
        },
        {
          name: "list",
          description: "List Runtime Project Attachments",
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
          description: "Lookup a runtime project attachment",
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
              description: "The location of the runtime project attachment",
              priority: 100,
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--service-project",
              description: "The service project ID to lookup attachment for",
              priority: 100,
              args: {
                name: "SERVICE_PROJECT",
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
