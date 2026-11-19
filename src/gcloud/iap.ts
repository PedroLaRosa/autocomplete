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

const optBrand: Fig.Option = {
  name: "--brand",
  description: "The name of the OAuth brand",
  args: {
    name: "BRAND",
    description: "String",
  },
};

const optConditionFromFile: Fig.Option = {
  name: "--condition-from-file",
  description:
    "Path to a local JSON or YAML file that defines the condition. To see available fields, see the help for `--condition`. Use a full or relative path to a local file containing the value of condition",
  args: {
    name: "CONDITION_FROM_FILE",
    template: "filepaths",
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

const optDestGroup: Fig.Option = {
  name: "--dest-group",
  description: "Name of the Destination Group",
  priority: 100,
  args: {
    name: "DEST_GROUP",
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

const optRegion: Fig.Option = {
  name: "--region",
  description:
    "Region name. Not applicable for `resource-type=app-engine`. Required when `resource-type=backend-services` and regional scoped. Not applicable for global backend-services. Required when `resource-type=cloud-run`",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion2: Fig.Option = {
  name: "--region",
  description: "Region of the Destination Group",
  priority: 100,
  args: {
    name: "REGION",
    description: "String",
  },
};

const optResourceType: Fig.Option = {
  name: "--resource-type",
  description:
    "Resource type of the IAP resource. _RESOURCE_TYPE_ must be one of: *app-engine*, *backend-services*, *forwarding-rule*, *cloud-run*",
  args: {
    name: "RESOURCE_TYPE",
    description: "String",
    suggestions: [
      "app-engine",
      "backend-services",
      "forwarding-rule",
      "cloud-run",
    ],
  },
};

const optService: Fig.Option = {
  name: "--service",
  description: "Service name",
  args: {
    name: "SERVICE",
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
  name: "iap",
  description: "Manage IAP policies",
  subcommands: [
    {
      name: "oauth-brands",
      description: "*(DEPRECATED)* Manage IAP OAuth brands",
      deprecated: true,
      subcommands: [
        {
          name: "create",
          description:
            "*(DEPRECATED)* Create a Cloud OAuth brand for the project",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: ["--application-title", "--application_title"],
              description:
                "Application name displayed on the OAuth consent screen",
              priority: 100,
              args: {
                name: "APPLICATION_TITLE",
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
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: ["--support-email", "--support_email"],
              description:
                "Support email displayed on the OAuth consent screen",
              priority: 100,
              args: {
                name: "SUPPORT_EMAIL",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "describe",
          description: "*(DEPRECATED)* Describe a Cloud OAuth brand",
          deprecated: true,
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
            name: "NAME",
            description:
              "ID of the brand or fully qualified identifier for the brand",
          },
        },
        {
          name: "list",
          description: "*(DEPRECATED)* List Cloud OAuth brands in the project",
          deprecated: true,
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
      name: "oauth-clients",
      description: "*(DEPRECATED)* Manage IAP OAuth clients",
      deprecated: true,
      subcommands: [
        {
          name: "create",
          description:
            "*(DEPRECATED)* Create a Cloud IAP OAuth client in the project",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: ["--display-name", "--display_name"],
              description: "User friendly name for the Cloud IAP OAuth client",
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
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BRAND",
            description:
              "ID of the brand or fully qualified identifier for the brand",
          },
        },
        {
          name: "delete",
          description: "*(DEPRECATED)* Delete a Cloud IAP OAuth client",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optBrand,
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
            name: "NAME",
            description:
              "ID of the proxy client or fully qualified identifier for the proxy client",
          },
        },
        {
          name: "describe",
          description: "*(DEPRECATED)* Describe a Cloud IAP OAuth client",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optBrand,
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
            name: "NAME",
            description:
              "ID of the proxy client or fully qualified identifier for the proxy client",
          },
        },
        {
          name: "list",
          description:
            "*(DEPRECATED)* List Cloud IAP OAuth clients in the Cloud OAuth brand",
          deprecated: true,
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
            name: "NAME",
            description:
              "ID of the brand or fully qualified identifier for the brand",
          },
        },
        {
          name: "reset-secret",
          description: "*(DEPRECATED)* Reset a Cloud IAP OAuth client secret",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optBrand,
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
            name: "NAME",
            description:
              "ID of the proxy client or fully qualified identifier for the proxy client",
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
      name: "settings",
      description: "Manage IAP settings",
      subcommands: [
        {
          name: "get",
          description: "Get the setting for an IAP resource",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder ID",
              args: {
                name: "FOLDER",
                description: "String",
              },
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            {
              name: "--organization",
              description: "Organization ID",
              args: {
                name: "ORGANIZATION",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--region",
              description:
                "Region name. Not applicable for `app-engine`. Required when `resource-type=compute` and regional scoped. Not applicable for global scoped compute. Required when `resource-type=cloud-run`",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            {
              name: "--resource-type",
              description:
                "Resource type of the IAP resource. For Backend Services, you can use both `compute` and `backend-services` as resource type. _RESOURCE_TYPE_ must be one of: *app-engine*, *iap_web*, *compute*, *organization*, *folder*, *backend-services*, *forwarding-rule*, *cloud-run*",
              args: {
                name: "RESOURCE_TYPE",
                description: "String",
                suggestions: [
                  "app-engine",
                  "iap_web",
                  "compute",
                  "organization",
                  "folder",
                  "backend-services",
                  "forwarding-rule",
                  "cloud-run",
                ],
              },
            },
            {
              name: "--service",
              description:
                "Service name. Optional when `resource-type` is `compute` or `app-engine`",
              args: {
                name: "SERVICE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "set",
          description: "Set the setting for an IAP resource",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder ID",
              args: {
                name: "FOLDER",
                description: "String",
              },
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            {
              name: "--organization",
              description: "Organization ID",
              args: {
                name: "ORGANIZATION",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--region",
              description:
                "Region name. Not applicable for `app-engine`. Required when `resource-type=compute` and regional scoped. Not applicable for global scoped compute. Required when `resource-type=cloud-run`",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            {
              name: "--resource-type",
              description:
                "Resource type of the IAP resource. For Backend Services, you can use both `compute` and `backend-services` as resource type. _RESOURCE_TYPE_ must be one of: *app-engine*, *iap_web*, *compute*, *organization*, *folder*, *backend-services*, *forwarding-rule*, *cloud-run*",
              args: {
                name: "RESOURCE_TYPE",
                description: "String",
                suggestions: [
                  "app-engine",
                  "iap_web",
                  "compute",
                  "organization",
                  "folder",
                  "backend-services",
                  "forwarding-rule",
                  "cloud-run",
                ],
              },
            },
            {
              name: "--service",
              description:
                "Service name. Optional when `resource-type` is `compute` or `app-engine`",
              args: {
                name: "SERVICE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SETTING_FILE",
            description:
              "JSON or YAML file containing the IAP resource settings",
            template: "filepaths",
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
      name: "tcp",
      description: "Manage IAP TCP resources",
      subcommands: [
        {
          name: "dest-groups",
          description: "Manage IAP TCP Destination Group resources",
          subcommands: [
            {
              name: "add-iam-policy-binding",
              description:
                "Add IAM policy binding to an IAP TCP Tunnel Destination Group resource",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--condition",
                  description:
                    "A condition to include in the binding. When the condition is explicitly specified as `None` (`--condition=None`), a binding without a condition is added. When the condition is specified and is not `None`, `--role` cannot be a basic role. Basic roles are `roles/editor`, `roles/owner`, and `roles/viewer`. For more on conditions, refer to the conditions overview guide: https://cloud.google.com/iam/docs/conditions-overview",
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                  },
                },
                optConditionFromFile,
                optConfiguration,
                optDestGroup,
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
                optRegion2,
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
            },
            {
              name: "create",
              description: "Create the IAP TCP Destination Group resource",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--fqdn-list",
                  description: "List of FQDNs in the Destination Group",
                  args: {
                    name: "FQDN_LIST",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                {
                  name: "--ip-range-list",
                  description: "List of ip-ranges in the Destination Group",
                  args: {
                    name: "IP_RANGE_LIST",
                    description: "String",
                  },
                },
                optLogHttp,
                optProject,
                optQuiet,
                optRegion2,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "GROUP_NAME",
                description: "Name of the Destination Group",
              },
            },
            {
              name: "delete",
              description: "Delete the IAP TCP Destination Group resource",
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
                optRegion2,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "GROUP_NAME",
                description: "Name of the Destination Group",
              },
            },
            {
              name: "describe",
              description: "Describe the IAP TCP Destination Group resource",
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
                optRegion2,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "GROUP_NAME",
                description: "Name of the Destination Group",
              },
            },
            {
              name: "get-iam-policy",
              description:
                "Get IAM policy for an IAP TCP Destination Group resource",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optDestGroup,
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
                optRegion2,
                optSortBy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "list",
              description: "Lists the IAP TCP Destination Group resource",
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
                {
                  name: "--region",
                  description:
                    "Region of the Destination Group, will list all regions by default",
                  args: {
                    name: "REGION",
                    description: "String",
                  },
                },
                optSortBy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "remove-iam-policy-binding",
              description:
                "Remove IAM policy binding from an IAP TCP Destination Group resource",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--all",
                  description:
                    "Remove all bindings with this role and principal, irrespective of any conditions",
                },
                optBillingProject,
                {
                  name: "--condition",
                  description:
                    "The condition of the binding that you want to remove. When the condition is explicitly specified as `None` (`--condition=None`), a binding without a condition is removed. Otherwise, only a binding with a condition that exactly matches the specified condition (including the optional description) is removed. For more on conditions, refer to the conditions overview guide: https://cloud.google.com/iam/docs/conditions-overview",
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                  },
                },
                optConditionFromFile,
                optConfiguration,
                optDestGroup,
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
                  name: "--member",
                  description:
                    "The principal to remove the binding for. Should be of the form `user|group|serviceAccount:email` or `domain:domain`",
                  priority: 100,
                  args: {
                    name: "PRINCIPAL",
                    description: "String",
                  },
                },
                {
                  name: "--no-all",
                  description:
                    "Remove all bindings with this role and principal, irrespective of any conditions",
                  hidden: true,
                },
                optProject,
                optQuiet,
                optRegion2,
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
            },
            {
              name: "set-iam-policy",
              description:
                "Set the IAM policy for an IAP TCP Destination Group resource",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optDestGroup,
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
                optRegion2,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "POLICY_FILE",
                description: "JSON or YAML file containing the IAM policy",
                template: "filepaths",
              },
            },
            {
              name: "update",
              description: "Update the IAP TCP Destination Group resource",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--fqdn-list",
                  description: "List of FQDNs in the Destination Group",
                  args: {
                    name: "FQDN_LIST",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                {
                  name: "--ip-range-list",
                  description: "List of ip-ranges in the Destination Group",
                  args: {
                    name: "IP_RANGE_LIST",
                    description: "String",
                  },
                },
                optLogHttp,
                optProject,
                optQuiet,
                optRegion2,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "GROUP_NAME",
                description: "Name of the Destination Group",
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
      name: "web",
      description: "Manage IAP web policies",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to an IAP IAM resource",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--condition",
              description:
                "A condition to include in the binding. When the condition is explicitly specified as `None` (`--condition=None`), a binding without a condition is added. When the condition is specified and is not `None`, `--role` cannot be a basic role. Basic roles are `roles/editor`, `roles/owner`, and `roles/viewer`. For more on conditions, refer to the conditions overview guide: https://cloud.google.com/iam/docs/conditions-overview",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optConditionFromFile,
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
            optRegion,
            optResourceType,
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
            optService,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "disable",
          description:
            "Disable Cloud Identity-Aware Proxy (Cloud IAP) on an IAP resource",
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
              name: "--region",
              description:
                "Region name. Not applicable for ``app-engine''. Optional when ``resource-type'' is ``compute''",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            {
              name: "--resource-type",
              description:
                "Resource type of the IAP resource. _RESOURCE_TYPE_ must be one of: *app-engine*, *backend-services*",
              priority: 100,
              args: {
                name: "RESOURCE_TYPE",
                description: "String",
                suggestions: ["app-engine", "backend-services"],
              },
            },
            {
              name: "--service",
              description:
                "Service name. Required with `--resource-type=backend-services`",
              args: {
                name: "SERVICE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "enable",
          description:
            "Enable Cloud Identity-Aware Proxy (Cloud IAP) on an IAP resource",
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
              name: "--oauth2-client-id",
              description: "OAuth 2.0 client ID to use",
              priority: 100,
              args: {
                name: "OAUTH2_CLIENT_ID",
                description: "String",
              },
            },
            {
              name: "--oauth2-client-secret",
              description: "OAuth 2.0 client secret to use",
              priority: 100,
              args: {
                name: "OAUTH2_CLIENT_SECRET",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--region",
              description:
                "Region name. Not applicable for ``app-engine''. Optional when ``resource-type'' is ``compute''",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            {
              name: "--resource-type",
              description:
                "Resource type of the IAP resource. _RESOURCE_TYPE_ must be one of: *app-engine*, *backend-services*",
              priority: 100,
              args: {
                name: "RESOURCE_TYPE",
                description: "String",
                suggestions: ["app-engine", "backend-services"],
              },
            },
            {
              name: "--service",
              description:
                "Service name. Required with `--resource-type=backend-services`",
              args: {
                name: "SERVICE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "get-iam-policy",
          description: "Get IAM policy for an IAP IAM resource",
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
            optRegion,
            optResourceType,
            optService,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding from an IAP IAM resource",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--all",
              description:
                "Remove all bindings with this role and principal, irrespective of any conditions",
            },
            optBillingProject,
            {
              name: "--condition",
              description:
                "The condition of the binding that you want to remove. When the condition is explicitly specified as `None` (`--condition=None`), a binding without a condition is removed. Otherwise, only a binding with a condition that exactly matches the specified condition (including the optional description) is removed. For more on conditions, refer to the conditions overview guide: https://cloud.google.com/iam/docs/conditions-overview",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optConditionFromFile,
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
              name: "--member",
              description:
                "The principal to remove the binding for. Should be of the form `user|group|serviceAccount:email` or `domain:domain`",
              priority: 100,
              args: {
                name: "PRINCIPAL",
                description: "String",
              },
            },
            {
              name: "--no-all",
              description:
                "Remove all bindings with this role and principal, irrespective of any conditions",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion,
            optResourceType,
            {
              name: "--role",
              description: "The role to remove the principal from",
              priority: 100,
              args: {
                name: "ROLE",
                description: "String",
              },
            },
            optService,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for an IAP IAM resource",
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
            optRegion,
            optResourceType,
            optService,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "POLICY_FILE",
            description: "JSON or YAML file containing the IAM policy",
            template: "filepaths",
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
