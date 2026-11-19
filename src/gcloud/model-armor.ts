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

const optLocation: Fig.Option = {
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
    "An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server stores the request ID for 60 minutes after the first request",
  args: {
    name: "REQUEST_ID",
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
  name: "model-armor",
  description:
    "Model Armor is a service offering LLM-agnostic security and AI safety measures to mitigate risks associated with large language models (LLMs)",
  subcommands: [
    {
      name: "floorsettings",
      description: "Manage FloorSettings resources",
      subcommands: [
        {
          name: "describe",
          description: "Describe the FloorSetting resource",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--full-uri",
              description: "Full uri of the floor setting",
              args: {
                name: "FULL_URI",
                description: "String",
              },
            },
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
          description: "Update a Model Armor floor setting",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-google-mcp-server-apis",
              description:
                "Appends the given APIs to the list of Google MCP server APIs",
              args: {
                name: "API",
                description: "List",
              },
            },
            {
              name: "--add-integrated-services",
              description:
                "Set the list of integrated services for the floor setting. This can be used to enable project-wide Model Armor sanitization for the respective services. This flag can be repeated to specify multiple services, or a comma-separated list can be provided",
              isRepeatable: true,
              args: {
                name: "INTEGRATED_SERVICE",
                description: "List",
              },
            },
            {
              name: "--add-rai-settings-filters",
              description:
                "Add rai filter settings. Sets `add_rai_settings_filters` value",
              args: {
                name: "confidenceLevel=CONFIDENCELEVEL,filterType=FILTERTYPE",
                description: "Dict",
              },
            },
            {
              name: "--advanced-config-deidentify-template",
              description:
                "The sdp filter settings enforcement. The value has to be a valid template name. e.g. `projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}`",
              args: {
                name: "ADVANCED_CONFIG_DEIDENTIFY_TEMPLATE",
                description: "String",
              },
            },
            {
              name: "--advanced-config-inspect-template",
              description:
                "The sdp filter settings enforcement. The value has to be a valid template name. e.g. `projects/{project}/locations/{location}/inspectTemplates/{inspect_template}`",
              args: {
                name: "ADVANCED_CONFIG_INSPECT_TEMPLATE",
                description: "String",
              },
            },
            {
              name: "--basic-config-filter-enforcement",
              description:
                "The sdp filter settings enforcement. The value can be either `ENABLED` or `DISABLED`",
              args: {
                name: "BASIC_CONFIG_FILTER_ENFORCEMENT",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--clear-google-mcp-server-apis",
              description:
                "Removes all APIs from the list of Google MCP server APIs. Empty list indicates that the floor setting is applicable to all Google MCP servers",
            },
            {
              name: "--clear-integrated-services",
              description:
                "Clear all integrated services from the floor setting",
            },
            {
              name: "--clear-rai-settings-filters",
              description: "Clear all rai filter settings",
            },
            optConfiguration,
            {
              name: "--enable-floor-setting-enforcement",
              description:
                'Enable or disable the floor setting enforcement. Set the value to "TRUE" to enable the floor setting enforcement, "FALSE" to disable it',
              args: {
                name: "ENABLE_FLOOR_SETTING_ENFORCEMENT",
                description: "String",
              },
            },
            {
              name: "--enable-google-mcp-server-cloud-logging",
              description:
                "Enable Cloud Logging for Google MCP server sanitization to log Model Armor sanitization results. Use *--enable-google-mcp-server-cloud-logging* to enable and *--no-enable-google-mcp-server-cloud-logging* to disable",
            },
            {
              name: "--enable-multi-language-detection",
              description:
                "Enable multi-language detection for floor setting, allowing Model Armor to process content in multiple languages. Use *--enable-multi-language-detection* to enable and *--no-enable-multi-language-detection* to disable",
            },
            {
              name: "--enable-vertex-ai-cloud-logging",
              description:
                "Enable Cloud Logging for Vertex AI sanitization to log Model Armor sanitization results. Use *--enable-vertex-ai-cloud-logging* to enable and *--no-enable-vertex-ai-cloud-logging* to disable",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--full-uri",
              description: "Full uri of the floor setting",
              priority: 100,
              args: {
                name: "FULL_URI",
                description: "String",
              },
            },
            {
              name: "--google-mcp-server-apis",
              description:
                "Replaces the current list of Google MCP server APIs with the provided list",
              args: {
                name: "API",
                description: "List",
              },
            },
            {
              name: "--google-mcp-server-enforcement-type",
              description:
                'Specifies the enforcement mode for Google MCP server sanitization, such as "INSPECT_ONLY" or "INSPECT_AND_BLOCK". Default is "INSPECT_ONLY"',
              args: {
                name: "GOOGLE_MCP_SERVER_ENFORCEMENT_TYPE",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            {
              name: "--malicious-uri-filter-settings-enforcement",
              description: "Malicious URI filter settings",
              args: {
                name: "MALICIOUS_URI_FILTER_SETTINGS_ENFORCEMENT",
                description: "String",
              },
            },
            {
              name: "--no-clear-google-mcp-server-apis",
              description:
                "Removes all APIs from the list of Google MCP server APIs. Empty list indicates that the floor setting is applicable to all Google MCP servers",
              hidden: true,
            },
            {
              name: "--no-clear-integrated-services",
              description:
                "Clear all integrated services from the floor setting",
              hidden: true,
            },
            {
              name: "--no-clear-rai-settings-filters",
              description: "Clear all rai filter settings",
              hidden: true,
            },
            {
              name: "--no-enable-google-mcp-server-cloud-logging",
              description:
                "Enable Cloud Logging for Google MCP server sanitization to log Model Armor sanitization results",
            },
            {
              name: "--no-enable-multi-language-detection",
              description:
                "Enable multi-language detection for floor setting, allowing Model Armor to process content in multiple languages",
            },
            {
              name: "--no-enable-vertex-ai-cloud-logging",
              description:
                "Enable Cloud Logging for Vertex AI sanitization to log Model Armor sanitization results",
            },
            {
              name: "--pi-and-jailbreak-filter-settings-confidence-level",
              description:
                'The pi and jailbreak filter settings confidence level. The value can be either "high", "medium-and-above" or "low-and-above"',
              args: {
                name: "PI_AND_JAILBREAK_FILTER_SETTINGS_CONFIDENCE_LEVEL",
                description: "String",
              },
            },
            {
              name: "--pi-and-jailbreak-filter-settings-enforcement",
              description:
                'The pi and jailbreak filter settings enforcement. The value can be either "enable" or "disable"',
              args: {
                name: "PI_AND_JAILBREAK_FILTER_SETTINGS_ENFORCEMENT",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--rai-settings-filters",
              description:
                "Set rai_settings_filters to new value. List of Responsible AI filters enabled for floor setting. Sets `rai_settings_filters` value",
              args: {
                name: "confidenceLevel=CONFIDENCELEVEL,filterType=FILTERTYPE",
                description: "Dict",
              },
            },
            {
              name: "--remove-google-mcp-server-apis",
              description:
                "Removes the given APIs from the list of Google MCP server APIs",
              args: {
                name: "API",
                description: "List",
              },
            },
            {
              name: "--remove-integrated-services",
              description:
                "Remove specified service(s) from the list of integrated services. This flag can be repeated to specify multiple services, or a comma-separated list can be provided",
              isRepeatable: true,
              args: {
                name: "INTEGRATED_SERVICE",
                description: "List",
              },
            },
            {
              name: "--remove-rai-settings-filters",
              description:
                "Remove rai filter settings. Sets `remove_rai_settings_filters` value",
              args: {
                name: "confidenceLevel=CONFIDENCELEVEL,filterType=FILTERTYPE",
                description: "Dict",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--vertex-ai-enforcement-type",
              description:
                'Specifies the enforcement mode for Vertex AI sanitization, such as "INSPECT_ONLY" or "INSPECT_AND_BLOCK". Default is "INSPECT_ONLY"',
              args: {
                name: "VERTEX_AI_ENFORCEMENT_TYPE",
                description: "String",
              },
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
    },
    {
      name: "templates",
      description: "Manage Template resources",
      subcommands: [
        {
          name: "create",
          description: "Create Model Armor Template",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--advanced-config-deidentify-template",
              description:
                "Optional Sensitive Data Protection Deidentify template resource name",
              args: {
                name: "ADVANCED_CONFIG_DEIDENTIFY_TEMPLATE",
                description: "String",
              },
            },
            {
              name: "--advanced-config-inspect-template",
              description:
                "Sensitive Data Protection inspect template resource name",
              args: {
                name: "ADVANCED_CONFIG_INSPECT_TEMPLATE",
                description: "String",
              },
            },
            {
              name: "--basic-config-filter-enforcement",
              description:
                "Tells whether the Sensitive Data Protection basic config is enabled or disabled. _BASIC_CONFIG_FILTER_ENFORCEMENT_ must be one of:",
              args: {
                name: "BASIC_CONFIG_FILTER_ENFORCEMENT",
                suggestions: ["disabled", "enabled"],
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
              name: "--labels",
              description: "Labels as key value pairs",
              args: {
                name: "LABELS",
              },
            },
            optLocation,
            optLogHttp,
            {
              name: "--malicious-uri-filter-settings-enforcement",
              description:
                "Tells whether the Malicious URI filter is enabled or disabled. _MALICIOUS_URI_FILTER_SETTINGS_ENFORCEMENT_ must be one of:",
              args: {
                name: "MALICIOUS_URI_FILTER_SETTINGS_ENFORCEMENT",
                suggestions: ["disabled", "enabled"],
              },
            },
            {
              name: "--no-template-metadata-ignore-partial-invocation-failures",
              description:
                "If true, partial detector failures should be ignored",
              hidden: true,
            },
            {
              name: "--no-template-metadata-log-operations",
              description: "If true, log template crud operations",
              hidden: true,
            },
            {
              name: "--no-template-metadata-log-sanitize-operations",
              description: "If true, log sanitize operations",
              hidden: true,
            },
            {
              name: "--pi-and-jailbreak-filter-settings-confidence-level",
              description:
                "Confidence level for this filter. Confidence level is used to determine the threshold for the filter. If detection confidence is equal to or greater than the specified level, a positive match is reported. Confidence level will only be used if the filter is enabled. _PI_AND_JAILBREAK_FILTER_SETTINGS_CONFIDENCE_LEVEL_ must be one of:",
              args: {
                name: "PI_AND_JAILBREAK_FILTER_SETTINGS_CONFIDENCE_LEVEL",
                suggestions: ["high", "low-and-above", "medium-and-above"],
              },
            },
            {
              name: "--pi-and-jailbreak-filter-settings-enforcement",
              description:
                "Tells whether Prompt injection and Jailbreak filter is enabled or disabled. _PI_AND_JAILBREAK_FILTER_SETTINGS_ENFORCEMENT_ must be one of:",
              args: {
                name: "PI_AND_JAILBREAK_FILTER_SETTINGS_ENFORCEMENT",
                suggestions: ["disabled", "enabled"],
              },
            },
            optProject,
            optQuiet,
            {
              name: "--rai-settings-filters",
              description:
                "Required, List of Responsible AI filters enabled for template",
              priority: 100,
              args: {
                name: "RAI_SETTINGS_FILTERS",
              },
            },
            optRequestId,
            {
              name: "--template-metadata-custom-llm-response-safety-error-code",
              description:
                "Indicates the custom error code set by the user to be returned to the end user if the LLM response trips Model Armor filters",
              args: {
                name: "TEMPLATE_METADATA_CUSTOM_LLM_RESPONSE_SAFETY_ERROR_CODE",
                description: "Int",
              },
            },
            {
              name: "--template-metadata-custom-llm-response-safety-error-message",
              description:
                "Indicates the custom error message set by the user to be returned to the end user if the LLM response trips Model Armor filters",
              args: {
                name: "TEMPLATE_METADATA_CUSTOM_LLM_RESPONSE_SAFETY_ERROR_MESSAGE",
                description: "String",
              },
            },
            {
              name: "--template-metadata-custom-prompt-safety-error-code",
              description:
                "Indicates the custom error code set by the user to be returned to the end user by the service extension if the prompt trips Model Armor filters",
              args: {
                name: "TEMPLATE_METADATA_CUSTOM_PROMPT_SAFETY_ERROR_CODE",
                description: "Int",
              },
            },
            {
              name: "--template-metadata-custom-prompt-safety-error-message",
              description:
                "Indicates the custom error message set by the user to be returned to the end user if the prompt trips Model Armor filters",
              args: {
                name: "TEMPLATE_METADATA_CUSTOM_PROMPT_SAFETY_ERROR_MESSAGE",
                description: "String",
              },
            },
            {
              name: "--template-metadata-ignore-partial-invocation-failures",
              description:
                "If true, partial detector failures should be ignored",
            },
            {
              name: "--template-metadata-log-operations",
              description: "If true, log template crud operations",
            },
            {
              name: "--template-metadata-log-sanitize-operations",
              description: "If true, log sanitize operations",
            },
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
          name: "delete",
          description: "Delete Model Armor Template",
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
            optRequestId,
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
          description: "Get Model Armor Template",
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
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template",
          },
        },
        {
          name: "list",
          description: "List Model Armor Templates",
          options: [
            optAccessTokenFile,
            optAccount,
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
              description:
                "ID of the location or fully qualified identifier for the location",
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
            {
              name: "--page-size",
              description:
                "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is determined by the service if it supports paging, otherwise it is *unlimited* (no paging). Paging may be applied before or after *--filter* and *--limit* depending on the service",
              args: {
                name: "PAGE_SIZE",
              },
            },
            optProject,
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
          name: "sanitize-model-response",
          description: "Sanitize Model Response",
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
            {
              name: "--model-response-data-byte-item-from-file",
              description:
                "Bytes Data. Use a full or relative path to a local file containing the value of model_response_data_byte_item",
              priority: 100,
              args: {
                name: "MODEL_RESPONSE_DATA_BYTE_ITEM_FROM_FILE",
                template: "filepaths",
              },
            },
            {
              name: "--model-response-data-byte-item-type",
              description:
                "The type of byte data. _MODEL_RESPONSE_DATA_BYTE_ITEM_TYPE_ must be one of:",
              priority: 100,
              args: {
                name: "MODEL_RESPONSE_DATA_BYTE_ITEM_TYPE",
                suggestions: ["pdf", "plaintext-utf8"],
              },
            },
            {
              name: "--model-response-data-text",
              description: "Plaintext string data for sanitization",
              args: {
                name: "MODEL_RESPONSE_DATA_TEXT",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            {
              name: "--user-prompt",
              description: "User Prompt associated with Model response",
              args: {
                name: "USER_PROMPT",
                description: "String",
              },
            },
            optVerbosity,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template",
          },
        },
        {
          name: "sanitize-user-prompt",
          description: "Sanitize User Prompt",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--byte-item-data-from-file",
              description:
                "Bytes Data. Use a full or relative path to a local file containing the value of byte_item_data",
              priority: 100,
              args: {
                name: "BYTE_ITEM_DATA_FROM_FILE",
                template: "filepaths",
              },
            },
            {
              name: "--byte-item-data-type",
              description:
                "The type of byte data. _BYTE_ITEM_DATA_TYPE_ must be one of:",
              priority: 100,
              args: {
                name: "BYTE_ITEM_DATA_TYPE",
                suggestions: ["pdf", "plaintext-utf8"],
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
            optTraceToken,
            optUserOutputEnabled,
            {
              name: "--user-prompt-data-text",
              description: "Plaintext string data for sanitization",
              args: {
                name: "USER_PROMPT_DATA_TEXT",
                description: "String",
              },
            },
            optVerbosity,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template",
          },
        },
        {
          name: "update",
          description: "Update Model Armor Template",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-rai-settings-filters",
              description:
                "Add new value to rai_settings_filters list. List of Responsible AI filters enabled for template",
              args: {
                name: "ADD_RAI_SETTINGS_FILTERS",
              },
            },
            {
              name: "--advanced-config-deidentify-template",
              description:
                "Optional Sensitive Data Protection Deidentify template resource name",
              args: {
                name: "ADVANCED_CONFIG_DEIDENTIFY_TEMPLATE",
                description: "String",
              },
            },
            {
              name: "--advanced-config-inspect-template",
              description:
                "Sensitive Data Protection inspect template resource name",
              args: {
                name: "ADVANCED_CONFIG_INSPECT_TEMPLATE",
                description: "String",
              },
            },
            {
              name: "--basic-config-filter-enforcement",
              description:
                "Tells whether the Sensitive Data Protection basic config is enabled or disabled. _BASIC_CONFIG_FILTER_ENFORCEMENT_ must be one of:",
              args: {
                name: "BASIC_CONFIG_FILTER_ENFORCEMENT",
                suggestions: ["disabled", "enabled"],
              },
            },
            optBillingProject,
            {
              name: "--clear-filter-config",
              description: "Set template.filterConfig back to default value",
            },
            {
              name: "--clear-labels",
              description: "Clear labels value and set to empty map",
            },
            {
              name: "--clear-rai-settings-filters",
              description:
                "Clear rai_settings_filters value and set to empty list",
            },
            {
              name: "--clear-template-metadata",
              description:
                "Set template.templateMetadata back to default value",
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
              name: "--labels",
              description: "Set labels to new value. Labels as key value pairs",
              args: {
                name: "LABELS",
              },
            },
            optLocation,
            optLogHttp,
            {
              name: "--malicious-uri-filter-settings-enforcement",
              description:
                "Tells whether the Malicious URI filter is enabled or disabled. _MALICIOUS_URI_FILTER_SETTINGS_ENFORCEMENT_ must be one of:",
              args: {
                name: "MALICIOUS_URI_FILTER_SETTINGS_ENFORCEMENT",
                suggestions: ["disabled", "enabled"],
              },
            },
            {
              name: "--no-clear-filter-config",
              description: "Set template.filterConfig back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-labels",
              description: "Clear labels value and set to empty map",
              hidden: true,
            },
            {
              name: "--no-clear-rai-settings-filters",
              description:
                "Clear rai_settings_filters value and set to empty list",
              hidden: true,
            },
            {
              name: "--no-clear-template-metadata",
              description:
                "Set template.templateMetadata back to default value",
              hidden: true,
            },
            {
              name: "--no-template-metadata-ignore-partial-invocation-failures",
              description:
                "If true, partial detector failures should be ignored",
            },
            {
              name: "--no-template-metadata-log-operations",
              description: "If true, log template crud operations",
            },
            {
              name: "--no-template-metadata-log-sanitize-operations",
              description: "If true, log sanitize operations",
            },
            {
              name: "--pi-and-jailbreak-filter-settings-confidence-level",
              description:
                "Confidence level for this filter. Confidence level is used to determine the threshold for the filter. If detection confidence is equal to or greater than the specified level, a positive match is reported. Confidence level will only be used if the filter is enabled. _PI_AND_JAILBREAK_FILTER_SETTINGS_CONFIDENCE_LEVEL_ must be one of:",
              args: {
                name: "PI_AND_JAILBREAK_FILTER_SETTINGS_CONFIDENCE_LEVEL",
                suggestions: ["high", "low-and-above", "medium-and-above"],
              },
            },
            {
              name: "--pi-and-jailbreak-filter-settings-enforcement",
              description:
                "Tells whether Prompt injection and Jailbreak filter is enabled or disabled. _PI_AND_JAILBREAK_FILTER_SETTINGS_ENFORCEMENT_ must be one of:",
              args: {
                name: "PI_AND_JAILBREAK_FILTER_SETTINGS_ENFORCEMENT",
                suggestions: ["disabled", "enabled"],
              },
            },
            optProject,
            optQuiet,
            {
              name: "--rai-settings-filters",
              description:
                "Set rai_settings_filters to new value. List of Responsible AI filters enabled for template",
              args: {
                name: "RAI_SETTINGS_FILTERS",
              },
            },
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
              name: "--remove-rai-settings-filters",
              description:
                "Remove existing value from rai_settings_filters list. List of Responsible AI filters enabled for template",
              args: {
                name: "REMOVE_RAI_SETTINGS_FILTERS",
              },
            },
            optRequestId,
            {
              name: "--template-metadata-custom-llm-response-safety-error-code",
              description:
                "Indicates the custom error code set by the user to be returned to the end user if the LLM response trips Model Armor filters",
              args: {
                name: "TEMPLATE_METADATA_CUSTOM_LLM_RESPONSE_SAFETY_ERROR_CODE",
                description: "Int",
              },
            },
            {
              name: "--template-metadata-custom-llm-response-safety-error-message",
              description:
                "Indicates the custom error message set by the user to be returned to the end user if the LLM response trips Model Armor filters",
              args: {
                name: "TEMPLATE_METADATA_CUSTOM_LLM_RESPONSE_SAFETY_ERROR_MESSAGE",
                description: "String",
              },
            },
            {
              name: "--template-metadata-custom-prompt-safety-error-code",
              description:
                "Indicates the custom error code set by the user to be returned to the end user by the service extension if the prompt trips Model Armor filters",
              args: {
                name: "TEMPLATE_METADATA_CUSTOM_PROMPT_SAFETY_ERROR_CODE",
                description: "Int",
              },
            },
            {
              name: "--template-metadata-custom-prompt-safety-error-message",
              description:
                "Indicates the custom error message set by the user to be returned to the end user if the prompt trips Model Armor filters",
              args: {
                name: "TEMPLATE_METADATA_CUSTOM_PROMPT_SAFETY_ERROR_MESSAGE",
                description: "String",
              },
            },
            {
              name: "--template-metadata-ignore-partial-invocation-failures",
              description:
                "If true, partial detector failures should be ignored. Use *--template-metadata-ignore-partial-invocation-failures* to enable and *--no-template-metadata-ignore-partial-invocation-failures* to disable",
            },
            {
              name: "--template-metadata-log-operations",
              description:
                "If true, log template crud operations. Use *--template-metadata-log-operations* to enable and *--no-template-metadata-log-operations* to disable",
            },
            {
              name: "--template-metadata-log-sanitize-operations",
              description:
                "If true, log sanitize operations. Use *--template-metadata-log-sanitize-operations* to enable and *--no-template-metadata-log-sanitize-operations* to disable",
            },
            optTraceToken,
            {
              name: "--update-labels",
              description:
                "Update labels value or add key value pair. Labels as key value pairs",
              args: {
                name: "UPDATE_LABELS",
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
