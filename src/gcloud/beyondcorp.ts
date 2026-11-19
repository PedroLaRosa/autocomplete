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
    "The location id of the application resource. We support only global location",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation2: Fig.Option = {
  name: "--location",
  description:
    "The location id of the securityGateway resource. We support only global location",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description: "The location id. We support only global location",
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

const optRequestId: Fig.Option = {
  name: "--request-id",
  description:
    "An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request",
  args: {
    name: "REQUEST_ID",
    description: "String",
  },
};

const optSecurityGateway: Fig.Option = {
  name: "--security-gateway",
  description: "The securityGateway id of the application resource",
  args: {
    name: "SECURITY_GATEWAY",
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
  name: "beyondcorp",
  description: "Manage Beyondcorp resources",
  subcommands: [
    {
      name: "operations",
      description: "Manage Operation resources",
      subcommands: [
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
            {
              name: "--location",
              description: "The location id of the operation resource",
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
      name: "security-gateways",
      description: "Manage Security Gateway resources",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add an IAM policy binding to a security gateway",
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
            optLocation3,
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
            name: "SECURITY_GATEWAY",
            description:
              "ID of the security_gateway or fully qualified identifier for the security_gateway",
          },
        },
        {
          name: "applications",
          description: "Manage Application resources",
          subcommands: [
            {
              name: "add-iam-policy-binding",
              description:
                "Add an IAM policy binding to a security gateway application",
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
                optLocation3,
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
                {
                  name: "--security-gateway",
                  description: "The security gateway ID",
                  args: {
                    name: "SECURITY_GATEWAY",
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
              description: "Create applications",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--display-name",
                  description:
                    "An arbitrary user-provided name for the application resource. Cannot exceed 64 characters",
                  args: {
                    name: "DISPLAY_NAME",
                    description: "String",
                  },
                },
                {
                  name: "--endpoint-matchers",
                  description:
                    'An array of conditions to match the application\'s network endpoint. Each element in the array is an EndpointMatcher object, which defines a specific combination of a hostname pattern and one or more ports. The application is considered matched if at least one of the EndpointMatcher conditions in this array is met (the conditions are combined using OR logic). Each EndpointMatcher must contain a hostname pattern, such as "example.com", and one or more port numbers specified as a string, such as "443"',
                  args: {
                    name: "ENDPOINT_MATCHERS",
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
                optNoAsync,
                optProject,
                optQuiet,
                {
                  name: "--request-id",
                  description:
                    "An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request",
                  args: {
                    name: "REQUEST_ID",
                    description: "String",
                  },
                },
                {
                  name: "--schema",
                  description:
                    "Type of the external application. _SCHEMA_ must be one of:",
                  args: {
                    name: "SCHEMA",
                    suggestions: ["api-gateway", "proxy-gateway"],
                  },
                },
                optSecurityGateway,
                optTraceToken,
                {
                  name: "--upstreams",
                  description: "Which upstream resources to forward traffic to",
                  args: {
                    name: "UPSTREAMS",
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
              description: "Delete applications",
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
                optLocation,
                optLogHttp,
                optNoAsync,
                {
                  name: "--no-validate-only",
                  description:
                    "If set, validates request by executing a dry-run which would not alter the resource in any way",
                  hidden: true,
                },
                optProject,
                optQuiet,
                optRequestId,
                optSecurityGateway,
                optTraceToken,
                optUserOutputEnabled,
                {
                  name: "--validate-only",
                  description:
                    "If set, validates request by executing a dry-run which would not alter the resource in any way",
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
              name: "describe",
              description: "Describe applications",
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
                optSecurityGateway,
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
              description:
                "Get the IAM policy for a security gateway application",
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
                optPageSize,
                optProject,
                optQuiet,
                optSecurityGateway,
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
                optLocation2,
                optLogHttp,
                optNoUri,
                optPageSize,
                optProject,
                optQuiet,
                {
                  name: "--security-gateway",
                  description:
                    "ID of the securityGateway or fully qualified identifier for the securityGateway",
                  priority: 100,
                  args: {
                    name: "SECURITY_GATEWAY",
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
              name: "remove-iam-policy-binding",
              description:
                "Remove an IAM policy binding from a security gateway application",
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
                optLocation3,
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
                {
                  name: "--role",
                  description: "The role to remove the principal from",
                  priority: 100,
                  args: {
                    name: "ROLE",
                    description: "String",
                  },
                },
                {
                  name: "--security-gateway",
                  description: "The security gateway ID",
                  args: {
                    name: "SECURITY_GATEWAY",
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
              name: "set-iam-policy",
              description:
                "Set the IAM policy for a security gateway application",
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
                optSecurityGateway,
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
              description: "Update applications",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--add-endpoint-matchers",
                  description:
                    'Add new value to endpoint_matchers list. An array of conditions to match the application\'s network endpoint. Each element in the array is an EndpointMatcher object, which defines a specific combination of a hostname pattern and one or more ports. The application is considered matched if at least one of the EndpointMatcher conditions in this array is met (the conditions are combined using OR logic). Each EndpointMatcher must contain a hostname pattern, such as "example.com", and one or more port numbers specified as a string, such as "443"',
                  args: {
                    name: "ADD_ENDPOINT_MATCHERS",
                  },
                },
                {
                  name: "--add-upstreams",
                  description:
                    "Add new value to upstreams list. Which upstream resources to forward traffic to",
                  args: {
                    name: "ADD_UPSTREAMS",
                  },
                },
                optAsync,
                optBillingProject,
                {
                  name: "--clear-endpoint-matchers",
                  description:
                    "Clear endpoint_matchers value and set to empty list",
                },
                {
                  name: "--clear-upstreams",
                  description: "Clear upstreams value and set to empty list",
                },
                optConfiguration,
                {
                  name: "--display-name",
                  description:
                    "An arbitrary user-provided name for the application resource. Cannot exceed 64 characters",
                  args: {
                    name: "DISPLAY_NAME",
                    description: "String",
                  },
                },
                {
                  name: "--endpoint-matchers",
                  description:
                    'Set endpoint_matchers to new value. An array of conditions to match the application\'s network endpoint. Each element in the array is an EndpointMatcher object, which defines a specific combination of a hostname pattern and one or more ports. The application is considered matched if at least one of the EndpointMatcher conditions in this array is met (the conditions are combined using OR logic). Each EndpointMatcher must contain a hostname pattern, such as "example.com", and one or more port numbers specified as a string, such as "443"',
                  args: {
                    name: "ENDPOINT_MATCHERS",
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
                optNoAsync,
                {
                  name: "--no-clear-endpoint-matchers",
                  description:
                    "Clear endpoint_matchers value and set to empty list",
                  hidden: true,
                },
                {
                  name: "--no-clear-upstreams",
                  description: "Clear upstreams value and set to empty list",
                  hidden: true,
                },
                optProject,
                optQuiet,
                {
                  name: "--remove-endpoint-matchers",
                  description:
                    'Remove existing value from endpoint_matchers list. An array of conditions to match the application\'s network endpoint. Each element in the array is an EndpointMatcher object, which defines a specific combination of a hostname pattern and one or more ports. The application is considered matched if at least one of the EndpointMatcher conditions in this array is met (the conditions are combined using OR logic). Each EndpointMatcher must contain a hostname pattern, such as "example.com", and one or more port numbers specified as a string, such as "443"',
                  args: {
                    name: "REMOVE_ENDPOINT_MATCHERS",
                  },
                },
                {
                  name: "--remove-upstreams",
                  description:
                    "Remove existing value from upstreams list. Which upstream resources to forward traffic to",
                  args: {
                    name: "REMOVE_UPSTREAMS",
                  },
                },
                optRequestId,
                {
                  name: "--schema",
                  description:
                    "Type of the external application. _SCHEMA_ must be one of:",
                  args: {
                    name: "SCHEMA",
                    suggestions: ["api-gateway", "proxy-gateway"],
                  },
                },
                optSecurityGateway,
                optTraceToken,
                {
                  name: "--upstreams",
                  description:
                    "Set upstreams to new value. Which upstream resources to forward traffic to",
                  args: {
                    name: "UPSTREAMS",
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
          name: "create",
          description: "Create securityGateways",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--contextual-headers-output-type",
              description:
                "Default output type for all enabled headers. _CONTEXTUAL_HEADERS_OUTPUT_TYPE_ must be one of:",
              args: {
                name: "CONTEXTUAL_HEADERS_OUTPUT_TYPE",
                suggestions: ["json", "none", "protobuf"],
              },
            },
            {
              name: "--device-info-output-type",
              description:
                "The output type details for the delegated device. _DEVICE_INFO_OUTPUT_TYPE_ must be one of:",
              args: {
                name: "DEVICE_INFO_OUTPUT_TYPE",
                suggestions: ["json", "none", "protobuf"],
              },
            },
            {
              name: "--display-name",
              description:
                "An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--group-info-output-type",
              description:
                "The output type of the delegated group information. _GROUP_INFO_OUTPUT_TYPE_ must be one of:",
              args: {
                name: "GROUP_INFO_OUTPUT_TYPE",
                suggestions: ["json", "none", "protobuf"],
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--hubs",
              description:
                "Map of Hubs that represents regional data path deployment with Google Cloud Platform region as a key",
              args: {
                name: "HUBS",
              },
            },
            optImpersonateServiceAccount,
            optLocation2,
            optLogHttp,
            {
              name: "--logging",
              description: "Configuration for Cloud Logging",
              hidden: true,
              args: {
                name: "LOGGING",
              },
            },
            optNoAsync,
            {
              name: "--no-proxy-protocol-config-client-ip",
              description:
                "Client IP configuration. The client IP address is included if true",
              hidden: true,
            },
            optProject,
            {
              name: "--proxy-protocol-config-allowed-client-headers",
              description: "List of the allowed client header names",
              args: {
                name: "PROXY_PROTOCOL_CONFIG_ALLOWED_CLIENT_HEADERS",
                description: "List",
              },
            },
            {
              name: "--proxy-protocol-config-client-ip",
              description:
                "Client IP configuration. The client IP address is included if true",
            },
            {
              name: "--proxy-protocol-config-gateway-identity",
              description:
                "The security gateway identity configuration. _PROXY_PROTOCOL_CONFIG_GATEWAY_IDENTITY_ must be (only one value is supported):",
              args: {
                name: "PROXY_PROTOCOL_CONFIG_GATEWAY_IDENTITY",
                suggestions: ["resource-name"],
              },
            },
            {
              name: "--proxy-protocol-config-metadata-headers",
              description:
                "Custom resource specific headers along with the values. The names should conform to RFC 9110: >Field names can contain alphanumeric characters, hyphens, and periods, can contain only ASCII-printable characters and tabs, and must start with a letter",
              args: {
                name: "PROXY_PROTOCOL_CONFIG_METADATA_HEADERS",
              },
            },
            optQuiet,
            {
              name: "--request-id",
              description:
                "An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request",
              args: {
                name: "REQUEST_ID",
                description: "String",
              },
            },
            {
              name: "--resource-override-path",
              description:
                "Contains the URI path fragment where HTTP request is sent",
              args: {
                name: "RESOURCE_OVERRIDE_PATH",
                description: "String",
              },
            },
            {
              name: "--service-discovery",
              description: "Settings related to the Service Discovery",
              args: {
                name: "SERVICE_DISCOVERY",
              },
            },
            optTraceToken,
            {
              name: "--user-info-output-type",
              description:
                "The delegated user's information. _USER_INFO_OUTPUT_TYPE_ must be one of:",
              args: {
                name: "USER_INFO_OUTPUT_TYPE",
                suggestions: ["json", "none", "protobuf"],
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SECURITY_GATEWAY",
            description:
              "ID of the securityGateway or fully qualified identifier for the securityGateway",
          },
        },
        {
          name: "delete",
          description: "Delete securityGateways",
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
            {
              name: "--no-validate-only",
              description:
                "If set, validates request by executing a dry-run which would not alter the resource in any way",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRequestId,
            optTraceToken,
            optUserOutputEnabled,
            {
              name: "--validate-only",
              description:
                "If set, validates request by executing a dry-run which would not alter the resource in any way",
            },
            optVerbosity,
          ],
          args: {
            name: "SECURITY_GATEWAY",
            description:
              "ID of the securityGateway or fully qualified identifier for the securityGateway",
          },
        },
        {
          name: "describe",
          description: "Describe securityGateways",
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
            name: "SECURITY_GATEWAY",
            description:
              "ID of the securityGateway or fully qualified identifier for the securityGateway",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a security gateway",
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
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SECURITY_GATEWAY",
            description:
              "ID of the securityGateway or fully qualified identifier for the securityGateway",
          },
        },
        {
          name: "list",
          description: "List securityGateways",
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
          description: "Remove an IAM policy binding from a security gateway",
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
            optLocation3,
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
            name: "SECURITY_GATEWAY",
            description:
              "ID of the security_gateway or fully qualified identifier for the security_gateway",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a security gateway",
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
          args: [
            {
              name: "SECURITY_GATEWAY",
              description:
                "ID of the securityGateway or fully qualified identifier for the securityGateway",
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
          description: "Update securityGateways",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-proxy-protocol-config-allowed-client-headers",
              description:
                "Add new value to proxy_protocol_config_allowed_client_headers list",
              args: {
                name: "ADD_PROXY_PROTOCOL_CONFIG_ALLOWED_CLIENT_HEADERS",
              },
            },
            optAsync,
            optBillingProject,
            {
              name: "--clear-hubs",
              description: "Clear hubs value and set to empty map",
            },
            {
              name: "--clear-logging",
              description:
                "Set googleCloudBeyondcorpSecuritygatewaysV1SecurityGateway.logging back to default value",
              hidden: true,
            },
            {
              name: "--clear-proxy-protocol-config",
              description:
                "Set googleCloudBeyondcorpSecuritygatewaysV1SecurityGateway.proxyProtocolConfig back to default value",
            },
            {
              name: "--clear-proxy-protocol-config-allowed-client-headers",
              description:
                "Clear proxy_protocol_config_allowed_client_headers value and set to empty list",
            },
            {
              name: "--clear-proxy-protocol-config-metadata-headers",
              description:
                "Clear proxy_protocol_config_metadata_headers value and set to empty map",
            },
            {
              name: "--clear-service-discovery",
              description:
                "Set googleCloudBeyondcorpSecuritygatewaysV1SecurityGateway.serviceDiscovery back to default value",
            },
            optConfiguration,
            {
              name: "--contextual-headers-output-type",
              description:
                "Default output type for all enabled headers. _CONTEXTUAL_HEADERS_OUTPUT_TYPE_ must be one of:",
              args: {
                name: "CONTEXTUAL_HEADERS_OUTPUT_TYPE",
                suggestions: ["json", "none", "protobuf"],
              },
            },
            {
              name: "--device-info-output-type",
              description:
                "The output type details for the delegated device. _DEVICE_INFO_OUTPUT_TYPE_ must be one of:",
              args: {
                name: "DEVICE_INFO_OUTPUT_TYPE",
                suggestions: ["json", "none", "protobuf"],
              },
            },
            {
              name: "--display-name",
              description:
                "An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--group-info-output-type",
              description:
                "The output type of the delegated group information. _GROUP_INFO_OUTPUT_TYPE_ must be one of:",
              args: {
                name: "GROUP_INFO_OUTPUT_TYPE",
                suggestions: ["json", "none", "protobuf"],
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--hubs",
              description:
                "Set hubs to new value. Map of Hubs that represents regional data path deployment with Google Cloud Platform region as a key",
              args: {
                name: "HUBS",
              },
            },
            optImpersonateServiceAccount,
            optLocation2,
            optLogHttp,
            {
              name: "--logging",
              description: "Configuration for Cloud Logging",
              hidden: true,
              args: {
                name: "LOGGING",
              },
            },
            optNoAsync,
            {
              name: "--no-clear-hubs",
              description: "Clear hubs value and set to empty map",
              hidden: true,
            },
            {
              name: "--no-clear-logging",
              description:
                "Set googleCloudBeyondcorpSecuritygatewaysV1SecurityGateway.logging back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-proxy-protocol-config",
              description:
                "Set googleCloudBeyondcorpSecuritygatewaysV1SecurityGateway.proxyProtocolConfig back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-proxy-protocol-config-allowed-client-headers",
              description:
                "Clear proxy_protocol_config_allowed_client_headers value and set to empty list",
              hidden: true,
            },
            {
              name: "--no-clear-proxy-protocol-config-metadata-headers",
              description:
                "Clear proxy_protocol_config_metadata_headers value and set to empty map",
              hidden: true,
            },
            {
              name: "--no-clear-service-discovery",
              description:
                "Set googleCloudBeyondcorpSecuritygatewaysV1SecurityGateway.serviceDiscovery back to default value",
              hidden: true,
            },
            {
              name: "--no-proxy-protocol-config-client-ip",
              description:
                "Client IP configuration. The client IP address is included if true",
            },
            optProject,
            {
              name: "--proxy-protocol-config-allowed-client-headers",
              description:
                "Set proxy_protocol_config_allowed_client_headers to new value",
              args: {
                name: "PROXY_PROTOCOL_CONFIG_ALLOWED_CLIENT_HEADERS",
              },
            },
            {
              name: "--proxy-protocol-config-client-ip",
              description:
                "Client IP configuration. The client IP address is included if true. Use *--proxy-protocol-config-client-ip* to enable and *--no-proxy-protocol-config-client-ip* to disable",
            },
            {
              name: "--proxy-protocol-config-gateway-identity",
              description:
                "The security gateway identity configuration. _PROXY_PROTOCOL_CONFIG_GATEWAY_IDENTITY_ must be (only one value is supported):",
              args: {
                name: "PROXY_PROTOCOL_CONFIG_GATEWAY_IDENTITY",
                suggestions: ["resource-name"],
              },
            },
            {
              name: "--proxy-protocol-config-metadata-headers",
              description:
                "Set proxy_protocol_config_metadata_headers to new value. Custom resource specific headers along with the values. The names should conform to RFC 9110: >Field names can contain alphanumeric characters, hyphens, and periods, can contain only ASCII-printable characters and tabs, and must start with a letter",
              args: {
                name: "PROXY_PROTOCOL_CONFIG_METADATA_HEADERS",
              },
            },
            optQuiet,
            {
              name: "--remove-hubs",
              description:
                "Remove existing value from map hubs. Sets `remove_hubs` value",
              args: {
                name: "REMOVE_HUBS",
                description: "Dict",
              },
            },
            {
              name: "--remove-proxy-protocol-config-allowed-client-headers",
              description:
                "Remove existing value from proxy_protocol_config_allowed_client_headers list",
              args: {
                name: "REMOVE_PROXY_PROTOCOL_CONFIG_ALLOWED_CLIENT_HEADERS",
              },
            },
            {
              name: "--remove-proxy-protocol-config-metadata-headers",
              description:
                "Remove existing value from map proxy_protocol_config_metadata_headers. Sets `remove_proxy_protocol_config_metadata_headers` value",
              args: {
                name: "REMOVE_PROXY_PROTOCOL_CONFIG_METADATA_HEADERS",
                description: "Dict",
              },
            },
            optRequestId,
            {
              name: "--resource-override-path",
              description:
                "Contains the URI path fragment where HTTP request is sent",
              args: {
                name: "RESOURCE_OVERRIDE_PATH",
                description: "String",
              },
            },
            {
              name: "--service-discovery",
              description: "Settings related to the Service Discovery",
              args: {
                name: "SERVICE_DISCOVERY",
              },
            },
            optTraceToken,
            {
              name: "--update-hubs",
              description:
                "Update hubs value or add key value pair. Map of Hubs that represents regional data path deployment with Google Cloud Platform region as a key",
              args: {
                name: "UPDATE_HUBS",
              },
            },
            {
              name: "--update-proxy-protocol-config-metadata-headers",
              description:
                "Update proxy_protocol_config_metadata_headers value or add key value pair. Custom resource specific headers along with the values. The names should conform to RFC 9110: >Field names can contain alphanumeric characters, hyphens, and periods, can contain only ASCII-printable characters and tabs, and must start with a letter",
              args: {
                name: "UPDATE_PROXY_PROTOCOL_CONFIG_METADATA_HEADERS",
              },
            },
            {
              name: "--user-info-output-type",
              description:
                "The delegated user's information. _USER_INFO_OUTPUT_TYPE_ must be one of:",
              args: {
                name: "USER_INFO_OUTPUT_TYPE",
                suggestions: ["json", "none", "protobuf"],
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SECURITY_GATEWAY",
            description:
              "ID of the securityGateway or fully qualified identifier for the securityGateway",
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
