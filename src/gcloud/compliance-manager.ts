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
  description: "The location id of the cloudControl resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description: "The location id of the framework resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation4: Fig.Option = {
  name: "--location",
  description: "The location id of the frameworkDeployment resource",
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

const optNoUri: Fig.Option = {
  name: "--no-uri",
  description:
    "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
  hidden: true,
};

const optOrganization: Fig.Option = {
  name: "--organization",
  description: "The organization id of the cloudControl resource",
  args: {
    name: "ORGANIZATION",
    description: "String",
  },
};

const optOrganization2: Fig.Option = {
  name: "--organization",
  description: "The organization id of the framework resource",
  args: {
    name: "ORGANIZATION",
    description: "String",
  },
};

const optOrganization3: Fig.Option = {
  name: "--organization",
  description: "The organization id of the frameworkDeployment resource",
  args: {
    name: "ORGANIZATION",
    description: "String",
  },
};

const optOrganization4: Fig.Option = {
  name: "--organization",
  description: "The organization id of the location resource",
  args: {
    name: "ORGANIZATION",
    description: "String",
  },
};

const optOrganization5: Fig.Option = {
  name: "--organization",
  description: "The organization id of the operation resource",
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
  name: "compliance-manager",
  description: "Manage Compliance Manager resources",
  subcommands: [
    {
      name: "cloud-control-deployments",
      description: "Manage Cloud Control Deployment resources",
      subcommands: [
        {
          name: "describe",
          description: "Get a cloud control deployment",
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
                "The location id of the cloudControlDeployment resource",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--organization",
              description:
                "The organization id of the cloudControlDeployment resource",
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
            name: "CLOUD_CONTROL_DEPLOYMENT",
            description:
              "ID of the cloudControlDeployment or fully qualified identifier for the cloudControlDeployment",
          },
        },
        {
          name: "list",
          description: "List Cloud Control Deployments",
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
            optOrganization4,
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
      name: "cloud-controls",
      description: "Manage Cloud Control resources",
      subcommands: [
        {
          name: "create",
          description: "Create a cloud control",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--categories",
              description:
                "The categories for the cloud control. _CATEGORIES_ must be one of:",
              args: {
                name: "CATEGORIES",
                description: "List",
              },
            },
            optConfiguration,
            {
              name: "--description",
              description:
                "A description of the cloud control. The maximum length is 2000 characters",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description:
                "The friendly name of the cloud control. The maximum length is 200 characters",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--finding-category",
              description:
                "The finding category for the cloud control findings. The maximum length is 255 characters",
              args: {
                name: "FINDING_CATEGORY",
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
            optOrganization,
            {
              name: "--parameter-spec",
              description: "The parameter specifications for the cloud control",
              args: {
                name: "PARAMETER_SPEC",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--remediation-steps",
              description:
                "The remediation steps for the cloud control findings. The maximum length is 400 characters",
              args: {
                name: "REMEDIATION_STEPS",
                description: "String",
              },
            },
            {
              name: "--rules",
              description:
                "The rules that you can enforce to meet your security or compliance intent",
              args: {
                name: "RULES",
              },
            },
            {
              name: "--severity",
              description:
                "The severity of the findings that are generated by the cloud control. _SEVERITY_ must be one of:",
              args: {
                name: "SEVERITY",
                suggestions: ["critical", "high", "low", "medium"],
              },
            },
            {
              name: "--supported-cloud-providers",
              description:
                "The supported cloud providers. _SUPPORTED_CLOUD_PROVIDERS_ must be one of:",
              args: {
                name: "SUPPORTED_CLOUD_PROVIDERS",
                description: "List",
              },
            },
            {
              name: "--supported-target-resource-types",
              description:
                "The target resource types that are supported by the cloud control. _SUPPORTED_TARGET_RESOURCE_TYPES_ must be one of:",
              args: {
                name: "SUPPORTED_TARGET_RESOURCE_TYPES",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLOUD_CONTROL",
            description:
              "ID of the cloudControl or fully qualified identifier for the cloudControl",
          },
        },
        {
          name: "delete",
          description: "Delete a cloud control",
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
            optOrganization,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLOUD_CONTROL",
            description:
              "ID of the cloudControl or fully qualified identifier for the cloudControl",
          },
        },
        {
          name: "describe",
          description: "Get a cloud control",
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
            {
              name: "--major-revision-id",
              description:
                "The major version of the cloud control to retrieve. If not specified, the most recently updated `revision_id` is retrieved",
              args: {
                name: "MAJOR_REVISION_ID",
                description: "Int",
              },
            },
            optOrganization,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLOUD_CONTROL",
            description:
              "ID of the cloudControl or fully qualified identifier for the cloudControl",
          },
        },
        {
          name: "list",
          description: "List cloud controls",
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
            optOrganization4,
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
          description: "Update a cloud control",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-categories",
              description:
                "Add new value to categories list. _ADD_CATEGORIES_ must be one of:",
              args: {
                name: "ADD_CATEGORIES",
              },
            },
            {
              name: "--add-parameter-spec",
              description:
                "Add new value to parameter_spec list. The parameter specifications for the cloud control",
              args: {
                name: "ADD_PARAMETER_SPEC",
              },
            },
            {
              name: "--add-rules",
              description:
                "Add new value to rules list. The rules that you can enforce to meet your security or compliance intent",
              args: {
                name: "ADD_RULES",
              },
            },
            {
              name: "--add-supported-cloud-providers",
              description:
                "Add new value to supported_cloud_providers list. _ADD_SUPPORTED_CLOUD_PROVIDERS_ must be one of:",
              args: {
                name: "ADD_SUPPORTED_CLOUD_PROVIDERS",
              },
            },
            {
              name: "--add-supported-target-resource-types",
              description:
                "Add new value to supported_target_resource_types list. _ADD_SUPPORTED_TARGET_RESOURCE_TYPES_ must be one of:",
              args: {
                name: "ADD_SUPPORTED_TARGET_RESOURCE_TYPES",
              },
            },
            optBillingProject,
            {
              name: "--categories",
              description:
                "Set categories to new value. _CATEGORIES_ must be one of:",
              args: {
                name: "CATEGORIES",
              },
            },
            {
              name: "--clear-categories",
              description: "Clear categories value and set to empty list",
            },
            {
              name: "--clear-parameter-spec",
              description: "Clear parameter_spec value and set to empty list",
            },
            {
              name: "--clear-rules",
              description: "Clear rules value and set to empty list",
            },
            {
              name: "--clear-supported-cloud-providers",
              description:
                "Clear supported_cloud_providers value and set to empty list",
            },
            {
              name: "--clear-supported-target-resource-types",
              description:
                "Clear supported_target_resource_types value and set to empty list",
            },
            optConfiguration,
            {
              name: "--description",
              description:
                "A description of the cloud control. The maximum length is 2000 characters",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description:
                "The friendly name of the cloud control. The maximum length is 200 characters",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--finding-category",
              description:
                "The finding category for the cloud control findings. The maximum length is 255 characters",
              args: {
                name: "FINDING_CATEGORY",
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
            {
              name: "--no-clear-categories",
              description: "Clear categories value and set to empty list",
              hidden: true,
            },
            {
              name: "--no-clear-parameter-spec",
              description: "Clear parameter_spec value and set to empty list",
              hidden: true,
            },
            {
              name: "--no-clear-rules",
              description: "Clear rules value and set to empty list",
              hidden: true,
            },
            {
              name: "--no-clear-supported-cloud-providers",
              description:
                "Clear supported_cloud_providers value and set to empty list",
              hidden: true,
            },
            {
              name: "--no-clear-supported-target-resource-types",
              description:
                "Clear supported_target_resource_types value and set to empty list",
              hidden: true,
            },
            optOrganization,
            {
              name: "--parameter-spec",
              description:
                "Set parameter_spec to new value. The parameter specifications for the cloud control",
              args: {
                name: "PARAMETER_SPEC",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--remediation-steps",
              description:
                "The remediation steps for the cloud control findings. The maximum length is 400 characters",
              args: {
                name: "REMEDIATION_STEPS",
                description: "String",
              },
            },
            {
              name: "--remove-categories",
              description:
                "Remove existing value from categories list. _REMOVE_CATEGORIES_ must be one of:",
              args: {
                name: "REMOVE_CATEGORIES",
              },
            },
            {
              name: "--remove-parameter-spec",
              description:
                "Remove existing value from parameter_spec list. The parameter specifications for the cloud control",
              args: {
                name: "REMOVE_PARAMETER_SPEC",
              },
            },
            {
              name: "--remove-rules",
              description:
                "Remove existing value from rules list. The rules that you can enforce to meet your security or compliance intent",
              args: {
                name: "REMOVE_RULES",
              },
            },
            {
              name: "--remove-supported-cloud-providers",
              description:
                "Remove existing value from supported_cloud_providers list. _REMOVE_SUPPORTED_CLOUD_PROVIDERS_ must be one of:",
              args: {
                name: "REMOVE_SUPPORTED_CLOUD_PROVIDERS",
              },
            },
            {
              name: "--remove-supported-target-resource-types",
              description:
                "Remove existing value from supported_target_resource_types list. _REMOVE_SUPPORTED_TARGET_RESOURCE_TYPES_ must be one of:",
              args: {
                name: "REMOVE_SUPPORTED_TARGET_RESOURCE_TYPES",
              },
            },
            {
              name: "--rules",
              description:
                "Set rules to new value. The rules that you can enforce to meet your security or compliance intent",
              args: {
                name: "RULES",
              },
            },
            {
              name: "--severity",
              description:
                "The severity of the findings that are generated by the cloud control. _SEVERITY_ must be one of:",
              args: {
                name: "SEVERITY",
                suggestions: ["critical", "high", "low", "medium"],
              },
            },
            {
              name: "--supported-cloud-providers",
              description:
                "Set supported_cloud_providers to new value. _SUPPORTED_CLOUD_PROVIDERS_ must be one of:",
              args: {
                name: "SUPPORTED_CLOUD_PROVIDERS",
              },
            },
            {
              name: "--supported-target-resource-types",
              description:
                "Set supported_target_resource_types to new value. _SUPPORTED_TARGET_RESOURCE_TYPES_ must be one of:",
              args: {
                name: "SUPPORTED_TARGET_RESOURCE_TYPES",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CLOUD_CONTROL",
            description:
              "ID of the cloudControl or fully qualified identifier for the cloudControl",
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
      name: "framework-deployments",
      description: "Manage Framework Deployment resources",
      subcommands: [
        {
          name: "create",
          description: "Create a framework deployment",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--async",
              description:
                "Return immediately, without waiting for the operation in progress to complete",
            },
            optBillingProject,
            {
              name: "--cloud-control-metadata",
              description:
                "Required, The deployment mode and parameters for each of the cloud controls in the framework. Every cloud control in the framework includes metadata",
              priority: 100,
              args: {
                name: "CLOUD_CONTROL_METADATA",
              },
            },
            optConfiguration,
            {
              name: "--description",
              description:
                "A user-provided description of the framework deployment",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--etag",
              description:
                "To prevent concurrent updates from overwriting each other, always provide the `etag` when you update a framework deployment. You can also provide the `etag` when you delete a framework deployment, to help ensure that you're deleting the intended version of the framework deployment",
              args: {
                name: "ETAG",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--framework",
              description:
                "The major version of the framework. If not specified, the version corresponds to the latest version of the framework",
              priority: 100,
              args: {
                name: "FRAMEWORK",
                description: "String",
              },
            },
            {
              name: "--framework-major-revision-id",
              description:
                "The major version of the framework. If not specified, the version corresponds to the latest version of the framework",
              args: {
                name: "FRAMEWORK_MAJOR_REVISION_ID",
                description: "Int",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation4,
            optLogHttp,
            {
              name: "--no-async",
              description:
                "Return immediately, without waiting for the operation in progress to complete",
              hidden: true,
            },
            optOrganization3,
            optProject,
            optQuiet,
            {
              name: "--target-resource-config-existing",
              description:
                "The resource hierarchy node, in one of the following formats:",
              args: {
                name: "TARGET_RESOURCE_CONFIG_EXISTING",
                description: "String",
              },
            },
            {
              name: "--target-resource-creation-config-folder-display-name",
              description: "The display name of the folder",
              priority: 100,
              args: {
                name: "TARGET_RESOURCE_CREATION_CONFIG_FOLDER_DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--target-resource-creation-config-folder-parent",
              description:
                "The parent of the folder, in the format `organizations/{organizationID}` or `folders/{folderID}`",
              priority: 100,
              args: {
                name: "TARGET_RESOURCE_CREATION_CONFIG_FOLDER_PARENT",
                description: "String",
              },
            },
            {
              name: "--target-resource-creation-config-project-billing-account-id",
              description: "The billing account ID for the project",
              priority: 100,
              args: {
                name: "TARGET_RESOURCE_CREATION_CONFIG_PROJECT_BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            {
              name: "--target-resource-creation-config-project-display-name",
              description: "The display name of the project",
              priority: 100,
              args: {
                name: "TARGET_RESOURCE_CREATION_CONFIG_PROJECT_DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--target-resource-creation-config-project-parent",
              description:
                "The parent of the project, in the format `organizations/{organizationID}` or `folders/{folderID}`",
              priority: 100,
              args: {
                name: "TARGET_RESOURCE_CREATION_CONFIG_PROJECT_PARENT",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FRAMEWORK_DEPLOYMENT",
            description:
              "ID of the frameworkDeployment or fully qualified identifier for the frameworkDeployment",
          },
        },
        {
          name: "delete",
          description: "Delete a framework deployment",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--async",
              description:
                "Return immediately, without waiting for the operation in progress to complete",
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--etag",
              description:
                "An opaque identifier for the current version of the resource",
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
            optLocation4,
            optLogHttp,
            {
              name: "--no-async",
              description:
                "Return immediately, without waiting for the operation in progress to complete",
              hidden: true,
            },
            optOrganization3,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FRAMEWORK_DEPLOYMENT",
            description:
              "ID of the frameworkDeployment or fully qualified identifier for the frameworkDeployment",
          },
        },
        {
          name: "describe",
          description: "Get a framework deployment",
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
            optOrganization3,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FRAMEWORK_DEPLOYMENT",
            description:
              "ID of the frameworkDeployment or fully qualified identifier for the frameworkDeployment",
          },
        },
        {
          name: "list",
          description: "List framework deployments",
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
            optOrganization4,
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
      name: "frameworks",
      description: "Manage Framework resources",
      subcommands: [
        {
          name: "create",
          description: "Create a framework",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--category",
              description:
                "The category of the framework. _CATEGORY_ must be one of:",
              args: {
                name: "CATEGORY",
                description: "List",
              },
            },
            {
              name: "--cloud-control-details",
              description:
                "The cloud control details that are directly added without any grouping in the framework",
              args: {
                name: "CLOUD_CONTROL_DETAILS",
              },
            },
            optConfiguration,
            {
              name: "--description",
              description:
                "The description of the framework. The maximum length is 2000 characters",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description:
                "The friendly name of the framework. The maximum length is 200 characters",
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
            optLocation3,
            optLogHttp,
            optOrganization2,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FRAMEWORK",
            description:
              "ID of the framework or fully qualified identifier for the framework",
          },
        },
        {
          name: "delete",
          description: "Delete a framework",
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
            optOrganization2,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FRAMEWORK",
            description:
              "ID of the framework or fully qualified identifier for the framework",
          },
        },
        {
          name: "describe",
          description: "Get a framework",
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
              name: "--major-revision-id",
              description:
                "The framework major version to retrieve. If not specified, the most recently updated `revision_id` is retrieved",
              args: {
                name: "MAJOR_REVISION_ID",
                description: "Int",
              },
            },
            optOrganization2,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FRAMEWORK",
            description:
              "ID of the framework or fully qualified identifier for the framework",
          },
        },
        {
          name: "list",
          description: "List frameworks",
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
            optOrganization4,
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
          description: "Update a framework",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-category",
              description:
                "Add new value to category list. _ADD_CATEGORY_ must be one of:",
              args: {
                name: "ADD_CATEGORY",
              },
            },
            {
              name: "--add-cloud-control-details",
              description:
                "Add new value to cloud_control_details list. The cloud control details that are directly added without any grouping in the framework",
              args: {
                name: "ADD_CLOUD_CONTROL_DETAILS",
              },
            },
            optBillingProject,
            {
              name: "--category",
              description:
                "Set category to new value. _CATEGORY_ must be one of:",
              args: {
                name: "CATEGORY",
              },
            },
            {
              name: "--clear-category",
              description: "Clear category value and set to empty list",
            },
            {
              name: "--clear-cloud-control-details",
              description:
                "Clear cloud_control_details value and set to empty list",
            },
            {
              name: "--cloud-control-details",
              description:
                "Set cloud_control_details to new value. The cloud control details that are directly added without any grouping in the framework",
              args: {
                name: "CLOUD_CONTROL_DETAILS",
              },
            },
            optConfiguration,
            {
              name: "--description",
              description:
                "The description of the framework. The maximum length is 2000 characters",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description:
                "The friendly name of the framework. The maximum length is 200 characters",
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
            optLocation3,
            optLogHttp,
            {
              name: "--major-revision-id",
              description: "The major version ID of the framework to update",
              args: {
                name: "MAJOR_REVISION_ID",
                description: "Int",
              },
            },
            {
              name: "--no-clear-category",
              description: "Clear category value and set to empty list",
              hidden: true,
            },
            {
              name: "--no-clear-cloud-control-details",
              description:
                "Clear cloud_control_details value and set to empty list",
              hidden: true,
            },
            optOrganization2,
            optProject,
            optQuiet,
            {
              name: "--remove-category",
              description:
                "Remove existing value from category list. _REMOVE_CATEGORY_ must be one of:",
              args: {
                name: "REMOVE_CATEGORY",
              },
            },
            {
              name: "--remove-cloud-control-details",
              description:
                "Remove existing value from cloud_control_details list. The cloud control details that are directly added without any grouping in the framework",
              args: {
                name: "REMOVE_CLOUD_CONTROL_DETAILS",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FRAMEWORK",
            description:
              "ID of the framework or fully qualified identifier for the framework",
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
            optLocation5,
            optLogHttp,
            optOrganization5,
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
            optLocation5,
            optLogHttp,
            optOrganization5,
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
            optLocation5,
            optLogHttp,
            optOrganization5,
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
            optOrganization4,
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
            optLocation5,
            optLogHttp,
            optOrganization5,
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
