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

const optIf: Fig.Option = {
  name: "--if",
  description:
    'One of "absent", "< THRESHOLD", "> THRESHOLD" where "THRESHOLD" is an integer or float',
  args: {
    name: "IF",
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

const optPageSize: Fig.Option = {
  name: "--page-size",
  description:
    "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is determined by the service if it supports paging, otherwise it is *unlimited* (no paging). Paging may be applied before or after *--filter* and *--limit* depending on the service",
  args: {
    name: "PAGE_SIZE",
  },
};

const optPolicy: Fig.Option = {
  name: "--policy",
  description: "Name of the alerting policy",
  args: {
    name: "POLICY",
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

const optTriggerCount: Fig.Option = {
  name: "--trigger-count",
  description:
    "The absolute number of time series that must fail the predicate for the condition to be triggered",
  args: {
    name: "TRIGGER_COUNT",
    description: "Int",
  },
};

const optTriggerPercent: Fig.Option = {
  name: "--trigger-percent",
  description:
    "The percentage of time series that must fail the predicate for the condition to be triggered",
  args: {
    name: "TRIGGER_PERCENT",
    description: "Float",
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
  name: "monitoring",
  description: "Manage Cloud Monitoring dashboards",
  subcommands: [
    {
      name: "dashboards",
      description: "Manage Cloud Monitoring dashboards",
      subcommands: [
        {
          name: "create",
          description: "Create a new Cloud Monitoring dashboard",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--config",
              description:
                "Dashboard configuration, in either JSON or YAML format, as a string",
              args: {
                name: "CONFIG",
                description: "String",
              },
            },
            {
              name: "--config-from-file",
              description:
                "Path to a JSON or YAML file containing the dashboard configuration. Use a full or relative path to a local file containing the value of config",
              args: {
                name: "CONFIG_FROM_FILE",
                template: "filepaths",
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
            optLogHttp,
            {
              name: "--no-validate-only",
              description:
                "When set, validate the dashboard but do not save it",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            {
              name: "--validate-only",
              description:
                "When set, validate the dashboard but do not save it",
            },
            optVerbosity,
          ],
        },
        {
          name: "delete",
          description: "Delete a Cloud Monitoring dashboard",
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
            name: "DASHBOARD",
            description:
              "ID of the dashboard or fully qualified identifier for the dashboard",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Monitoring dashboard",
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
            name: "DASHBOARD",
            description:
              "ID of the dashboard or fully qualified identifier for the dashboard",
          },
        },
        {
          name: "list",
          description: "List Cloud Monitoring dashboards",
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
        {
          name: "update",
          description: "Update a Cloud Monitoring dashboard",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--config",
              description:
                "Dashboard configuration, in either JSON or YAML format, as a string",
              args: {
                name: "CONFIG",
                description: "String",
              },
            },
            {
              name: "--config-from-file",
              description:
                "Path to a JSON or YAML file containing the dashboard configuration. Use a full or relative path to a local file containing the value of config",
              args: {
                name: "CONFIG_FROM_FILE",
                template: "filepaths",
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
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DASHBOARD",
            description:
              "ID of the dashboard or fully qualified identifier for the dashboard",
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
      name: "policies",
      description: "Manage Cloud Monitoring alerting policies",
      subcommands: [
        {
          name: "conditions",
          description: "Manage Cloud Monitoring alerting policy conditions",
          subcommands: [
            {
              name: "create",
              description: "Create a condition in an alerting policy",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--aggregation",
                  description:
                    "Specifies an Aggregation message as a JSON/YAML value to be applied to the condition. For more information about the format: https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.alertPolicies",
                  args: {
                    name: "AGGREGATION",
                    description: "String",
                  },
                },
                optBillingProject,
                {
                  name: "--condition",
                  description:
                    "The condition as a string. In either JSON or YAML format",
                  args: {
                    name: "CONDITION",
                    description: "String",
                  },
                },
                {
                  name: "--condition-display-name",
                  description: "The display name for the condition",
                  args: {
                    name: "CONDITION_DISPLAY_NAME",
                    description: "String",
                  },
                },
                {
                  name: "--condition-filter",
                  description:
                    'Specifies the "filter" in a metric absence or metric threshold condition',
                  args: {
                    name: "CONDITION_FILTER",
                    description: "String",
                  },
                },
                {
                  name: "--condition-from-file",
                  description:
                    "The path to a JSON or YAML file containing the condition. Use a full or relative path to a local file containing the value of condition",
                  args: {
                    name: "CONDITION_FROM_FILE",
                    template: "filepaths",
                  },
                },
                optConfiguration,
                {
                  name: "--duration",
                  description:
                    'The duration (e.g. "60s", "2min", etc.) that the condition must hold in order to trigger as true',
                  args: {
                    name: "DURATION",
                  },
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optIf,
                optImpersonateServiceAccount,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optTriggerCount,
                optTriggerPercent,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "ALERT_POLICY",
                description:
                  "ID of the Alert Policy or fully qualified identifier for the Alert Policy",
              },
            },
            {
              name: "delete",
              description: "Delete a condition in an alerting policy",
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
                optPolicy,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "CONDITION",
                description:
                  "ID of the condition or fully qualified identifier for the condition",
              },
            },
            {
              name: "describe",
              description:
                "Describe a condition in a Cloud Monitoring alerting policy",
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
                optPolicy,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "CONDITION",
                description:
                  "ID of the condition or fully qualified identifier for the condition",
              },
            },
            {
              name: "update",
              description: "Update a condition in an alerting policy",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--display-name",
                  description: "The display name for the Condition",
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
                optIf,
                optImpersonateServiceAccount,
                optLogHttp,
                optPolicy,
                optProject,
                optQuiet,
                optTraceToken,
                optTriggerCount,
                optTriggerPercent,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "CONDITION",
                description:
                  "ID of the condition or fully qualified identifier for the condition",
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
          description: "Create a new alerting policy",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--aggregation",
              description:
                "Specifies an Aggregation message as a JSON/YAML value to be applied to the condition. For more information about the format: https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.alertPolicies",
              args: {
                name: "AGGREGATION",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--combiner",
              description:
                "The combiner for the Alert Policy. _COMBINER_ must be one of:",
              args: {
                name: "COMBINER",
                description: "String",
                suggestions: [
                  "AND",
                  "AND_WITH_MATCHING_RESOURCE",
                  "COMBINE_UNSPECIFIED",
                  "OR",
                ],
              },
            },
            {
              name: "--condition-display-name",
              description: "The display name for the condition",
              args: {
                name: "CONDITION_DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--condition-filter",
              description:
                'Specifies the "filter" in a metric absence or metric threshold condition',
              args: {
                name: "CONDITION_FILTER",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--display-name",
              description: "The display name for the Alert Policy",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--documentation",
              description: "The documentation to be included with the policy",
              args: {
                name: "DOCUMENTATION",
                description: "String",
              },
            },
            {
              name: "--documentation-format",
              description:
                'The MIME type that should be used with `--documentation` or `--documentation-from-file`. Currently, only "text/markdown" is supported',
              args: {
                name: "DOCUMENTATION_FORMAT",
                description: "String",
              },
            },
            {
              name: "--documentation-from-file",
              description:
                "The path to a file containing the documentation to be included with the policy. Use a full or relative path to a local file containing the value of documentation",
              args: {
                name: "DOCUMENTATION_FROM_FILE",
                template: "filepaths",
              },
            },
            {
              name: "--duration",
              description:
                'The duration (e.g. "60s", "2min", etc.) that the condition must hold in order to trigger as true',
              args: {
                name: "DURATION",
              },
            },
            {
              name: "--enabled",
              description:
                "If the policy is enabled. Enabled by default, use *--no-enabled* to disable",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optIf,
            optImpersonateServiceAccount,
            optLogHttp,
            {
              name: "--no-enabled",
              description: "If the policy is enabled",
              hidden: true,
            },
            {
              name: "--notification-channels",
              description:
                "IDs of the Notification Channels or fully qualified identifiers for the Notification Channels",
              priority: 100,
              args: {
                name: "NOTIFICATION_CHANNELS",
                description: "List",
              },
            },
            {
              name: "--policy",
              description:
                "The policy as a string. In either JSON or YAML format",
              args: {
                name: "POLICY",
                description: "String",
              },
            },
            {
              name: "--policy-from-file",
              description:
                "The path to a JSON or YAML file containing the policy. Use a full or relative path to a local file containing the value of policy",
              args: {
                name: "POLICY_FROM_FILE",
                template: "filepaths",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optTriggerCount,
            optTriggerPercent,
            {
              name: "--user-labels",
              description: "List of label KEY=VALUE pairs to add",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "delete",
          description: "Delete a Cloud Monitoring alerting policy",
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
            name: "POLICY",
            description:
              "ID of the policy or fully qualified identifier for the policy",
          },
        },
        {
          name: "describe",
          description: "Describe an alerting policy",
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
            name: "POLICY",
            description:
              "ID of the policy or fully qualified identifier for the policy",
          },
        },
        {
          name: "list",
          description: "List alerting policies",
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
        {
          name: "migrate",
          description:
            "Migrate a Prometheus configuration file to Cloud Monitoring",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--channels-from-prometheus-alertmanager-yaml",
              description:
                "Prometheus alert manager YAML file to be converted to Cloud Monitoring notification channels. Specifying this flag with the --policies-from-prometheus-alert-rules-yaml flag puts the newly created notification channels into the translated Alert Policies' definition. Use a full or relative path to a local file containing the value of channels_from_prometheus_alertmanager_yaml",
              args: {
                name: "PROMETHEUS_ALERT_MANAGER_FILE_PATH",
                template: "filepaths",
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
            optLogHttp,
            {
              name: "--policies-from-prometheus-alert-rules-yaml",
              description:
                "One or more Prometheus alert rule YAML files (separated by commas if multiple) to be converted to Cloud Alerting Policies. Example: --policies-from-prometheus-alert-rules-yaml=rules_1.yaml,rules_2.yaml",
              args: {
                name: "PROMETHEUS_ALERT_RULE_FILE_PATHS",
                description: "List",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Updates an alerting policy",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-notification-channels",
              description:
                "Append the given values to the current Notification Channels",
              args: {
                name: "NOTIFICATION-CHANNELS",
                description: "List",
              },
            },
            optBillingProject,
            {
              name: "--clear-notification-channels",
              description: "Empty the current Notification Channels",
            },
            {
              name: "--clear-user-labels",
              description:
                "Remove all labels. If `--update-user-labels` is also specified then `--clear-user-labels` is applied first",
            },
            {
              name: "--combiner",
              description:
                "The combiner for the Alert Policy. _COMBINER_ must be one of:",
              args: {
                name: "COMBINER",
                description: "String",
                suggestions: [
                  "AND",
                  "AND_WITH_MATCHING_RESOURCE",
                  "COMBINE_UNSPECIFIED",
                  "OR",
                ],
              },
            },
            optConfiguration,
            {
              name: "--display-name",
              description: "The display name for the Alert Policy",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--documentation",
              description: "The documentation to be included with the policy",
              args: {
                name: "DOCUMENTATION",
                description: "String",
              },
            },
            {
              name: "--documentation-format",
              description:
                'The MIME type that should be used with `--documentation` or `--documentation-from-file`. Currently, only "text/markdown" is supported',
              args: {
                name: "DOCUMENTATION_FORMAT",
                description: "String",
              },
            },
            {
              name: "--documentation-from-file",
              description:
                "The path to a file containing the documentation to be included with the policy. Use a full or relative path to a local file containing the value of documentation",
              args: {
                name: "DOCUMENTATION_FROM_FILE",
                template: "filepaths",
              },
            },
            {
              name: "--enabled",
              description:
                "If the policy is enabled. Use *--enabled* to enable and *--no-enabled* to disable",
            },
            {
              name: "--fields",
              description:
                "The list of fields to update. Must specify `--policy` or `--policy-from-file` if using this flag. _field_ must be one of: *disabled*, *notificationChannels*",
              args: {
                name: "field",
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
            optLogHttp,
            {
              name: "--no-clear-notification-channels",
              description: "Empty the current Notification Channels",
              hidden: true,
            },
            {
              name: "--no-clear-user-labels",
              description:
                "Remove all labels. If `--update-user-labels` is also specified then `--clear-user-labels` is applied first",
              hidden: true,
            },
            {
              name: "--no-enabled",
              description: "If the policy is enabled",
            },
            {
              name: "--policy",
              description:
                "The policy as a string. In either JSON or YAML format",
              args: {
                name: "POLICY",
                description: "String",
              },
            },
            {
              name: "--policy-from-file",
              description:
                "The path to a JSON or YAML file containing the policy. Use a full or relative path to a local file containing the value of policy",
              args: {
                name: "POLICY_FROM_FILE",
                template: "filepaths",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--remove-notification-channels",
              description:
                "Remove the given values from the current Notification Channels",
              args: {
                name: "NOTIFICATION-CHANNELS",
                description: "List",
              },
            },
            {
              name: "--remove-user-labels",
              description:
                "List of label keys to remove. If a label does not exist it is silently ignored. If `--update-user-labels` is also specified then `--update-user-labels` is applied first",
              args: {
                name: "KEY",
                description: "List",
              },
            },
            {
              name: "--set-notification-channels",
              description:
                "Completely replace the current Notification Channels with the given values",
              args: {
                name: "NOTIFICATION-CHANNELS",
                description: "List",
              },
            },
            optTraceToken,
            {
              name: "--update-user-labels",
              description:
                "List of label KEY=VALUE pairs to update. If a label exists, its value is modified. Otherwise, a new label is created",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ALERT_POLICY",
            description:
              "ID of the Alert Policy or fully qualified identifier for the Alert Policy",
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
      name: "snoozes",
      description: "Manage Cloud Monitoring snoozes",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels a snooze",
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
            name: "SNOOZE",
            description:
              "ID of the Snooze or fully qualified identifier for the Snooze",
          },
        },
        {
          name: "create",
          description: "Create a new snooze",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--criteria-filter",
              description:
                'Optional. When you define a Snooze, you can also define a filter for that snooze. The filter is a string containing one or more key-value pairs. The string uses the standard https://google.aip.dev/160 filter syntax. If you define a filter for a snooze, then the snooze can only apply to one alert policy. When the snooze is active, incidents won\'t be created when the incident would have key-value pairs (labels) that match those specified by the filter in the snooze. Snooze filters support resource, metric, and metadata labels. If multiple labels are used, then they must be connected with an AND operator. For example: resource.labels.instance_id="1234567890" AND resource.labels.zone="us-central1-a" AND metric.labels.instance_name="test_group" AND metadata.user_labels.foo="bar" AND metadata.system_labels.region="us-central1"',
              args: {
                name: "CRITERIA_FILTER",
                description: "String",
              },
            },
            {
              name: "--criteria-policies",
              description:
                "The policies that the Snooze applies to. Exactly 1 alert policy is required if `criteria-filter` is specified at the same time",
              args: {
                name: "CRITERIA_POLICIES",
                description: "List",
              },
            },
            {
              name: "--display-name",
              description: "The display name for the Snooze",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--end-time",
              description: "The end time for the Snooze",
              args: {
                name: "END_TIME",
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
            {
              name: "--snooze-from-file",
              description:
                "The path to a JSON or YAML file containing the snooze. Use a full or relative path to a local file containing the value of snooze",
              args: {
                name: "SNOOZE_FROM_FILE",
                template: "filepaths",
              },
            },
            {
              name: "--start-time",
              description: "The start time for the Snooze",
              args: {
                name: "START_TIME",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "describe",
          description: "Describe a snooze",
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
            name: "SNOOZE",
            description:
              "ID of the Snooze or fully qualified identifier for the Snooze",
          },
        },
        {
          name: "list",
          description: "List snoozes",
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
        {
          name: "update",
          description: "Updates a snooze",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--display-name",
              description: "The display name for the Snooze",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--end-time",
              description: "The end time for the Snooze",
              args: {
                name: "END_TIME",
              },
            },
            {
              name: "--fields",
              description:
                "The list of fields to update. Must specify `--snooze-from-file` if using this flag",
              args: {
                name: "field",
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
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--snooze-from-file",
              description:
                "The path to a JSON or YAML file containing the snooze. Use a full or relative path to a local file containing the value of snooze",
              args: {
                name: "SNOOZE_FROM_FILE",
                template: "filepaths",
              },
            },
            {
              name: "--start-time",
              description: "The start time for the Snooze",
              args: {
                name: "START_TIME",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SNOOZE",
            description:
              "ID of the Snooze or fully qualified identifier for the Snooze",
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
      name: "uptime",
      description:
        "Manage Cloud Monitoring uptime checks and synthetic monitors",
      subcommands: [
        {
          name: "create",
          description: "Create a new uptime check or synthetic monitor",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--body",
              description:
                "The request body associated with the HTTP POST request. Can only be set if `--protocol` is `http` or `https`",
              args: {
                name: "BODY",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--content-type",
              description:
                "The content type header to use for the check, defaults to `unspecified`. Can only be set if `--protocol` is `http` or `https`",
              args: {
                name: "CONTENT_TYPE",
                description: "String",
                suggestions: ["unspecified", "url-encoded", "user-provided"],
              },
            },
            {
              name: "--custom-content-type",
              description:
                "A user-provided content type header to use for the check. Can only be set if `--protocol` is `http` or `https`",
              args: {
                name: "CUSTOM_CONTENT_TYPE",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--group-id",
              description: "The group of resources being monitored",
              priority: 100,
              args: {
                name: "GROUP_ID",
                description: "String",
              },
            },
            {
              name: "--group-type",
              description:
                "The resource type of the group members, defaults to `gce-instance`. _GROUP_TYPE_ must be one of:",
              args: {
                name: "GROUP_TYPE",
                description: "String",
                suggestions: ["aws-elb-load-balancer", "gce-instance"],
              },
            },
            {
              name: "--headers",
              description:
                "The list of headers to send as part of the uptime check request. Can only be set if `--protocol` is `http` or `https`",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--json-path",
              description:
                "JSONPath within the response output pointing to the expected content to match. Only used if `--matcher-type` is `matches-json-path` or `not-matches-json-path`",
              priority: 100,
              args: {
                name: "JSON_PATH",
                description: "String",
              },
            },
            {
              name: "--json-path-matcher-type",
              description:
                "The type of JSONPath match that is applied to the JSON output, defaults to `exact-match`. Only used if `--matcher-type` is `matches-json-path` or `not-matches-json-path`",
              args: {
                name: "JSON_PATH_MATCHER_TYPE",
                description: "String",
                suggestions: ["exact-match", "regex-match"],
              },
            },
            optLogHttp,
            {
              name: "--mask-headers",
              description:
                "Whether to encrypt the header information, defaults to `false`. Can only be set if `--protocol` is `http` or `https`",
              args: {
                name: "MASK_HEADERS",
                description: "String",
              },
            },
            {
              name: "--matcher-content",
              description: "String, regex or JSON content to match",
              priority: 100,
              args: {
                name: "MATCHER_CONTENT",
                description: "String",
              },
            },
            {
              name: "--matcher-type",
              description:
                "The type of content matcher that is applied to the server output, defaults to `contains-string`",
              args: {
                name: "MATCHER_TYPE",
                description: "String",
                suggestions: [
                  "contains-string",
                  "matches-json-path",
                  "matches-regex",
                  "not-contains-string",
                  "not-matches-json-path",
                  "not-matches-regex",
                ],
              },
            },
            {
              name: "--password",
              description:
                "The password to use when authenticating with the HTTP server. Can only be set if `--protocol` is `http` or `https`",
              args: {
                name: "PASSWORD",
                description: "String",
              },
            },
            {
              name: "--path",
              description:
                "The path to the page against which to run the check, defaults to `/`. Can only be set if `--protocol` is `http` or `https`",
              args: {
                name: "PATH",
                description: "String",
              },
            },
            {
              name: "--period",
              description:
                "The time between uptime check or synthetic monitor executions in minutes, defaults to `1`. Can be set for synthetic monitors",
              args: {
                name: "PERIOD",
                description: "String",
                suggestions: ["1", "10", "15", "5"],
              },
            },
            {
              name: "--pings-count",
              description: "Number of ICMP pings to send alongside the request",
              args: {
                name: "PINGS_COUNT",
              },
            },
            {
              name: "--port",
              description:
                "The port on the server against which to run the check. Defaults to `80` when `--protocol` is `http`. Defaults to `443` when `--protocol` is `https`. Required if `--protocol` is `tcp`",
              args: {
                name: "PORT",
              },
            },
            optProject,
            {
              name: "--protocol",
              description:
                "The protocol of the request, defaults to `http`. _PROTOCOL_ must be one of:",
              args: {
                name: "PROTOCOL",
                description: "String",
                suggestions: ["http", "https", "tcp"],
              },
            },
            optQuiet,
            {
              name: "--regions",
              description:
                "The list of regions from which the check is run. At least 3 regions must be selected. Defaults to all available regions",
              args: {
                name: "field",
                description: "List",
              },
            },
            {
              name: "--request-method",
              description:
                "The HTTP request method to use, defaults to `get`. Can only be set if `--protocol` is `http` or `https`",
              args: {
                name: "REQUEST_METHOD",
                description: "String",
                suggestions: ["get", "post"],
              },
            },
            {
              name: "--resource-labels",
              description:
                "Values for all of the labels listed in the associated monitored resource descriptor. See https://cloud.google.com/monitoring/api/resources for more information and allowed keys",
              priority: 100,
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--resource-type",
              description:
                "Type of monitored resource, defaults to `uptime-url`. _RESOURCE_TYPE_ must be one of:",
              args: {
                name: "RESOURCE_TYPE",
                description: "String",
                suggestions: [
                  "aws-ec2-instance",
                  "aws-elb-load-balancer",
                  "cloud-run-revision",
                  "gae-app",
                  "gce-instance",
                  "servicedirectory-service",
                  "uptime-url",
                ],
              },
            },
            {
              name: "--service-agent-auth",
              description:
                "The type of authentication to use for the HTTP request. Can only be set if `--protocol` is `https`",
              args: {
                name: "SERVICE_AGENT_AUTH",
                description: "String",
                suggestions: ["oidc-token"],
              },
            },
            {
              name: "--status-classes",
              description:
                "List of HTTP status classes. The uptime check only passes when the response code is contained in this list. Defaults to `2xx`. Can only be set if `--protocol` is `http` or `https`",
              args: {
                name: "status-class",
                description: "List",
              },
            },
            {
              name: "--status-codes",
              description:
                "List of HTTP Status Codes. The uptime check will only pass if the response code is present in this list. Can only be set if `--protocol` is `http` or `https`",
              args: {
                name: "status-code",
                description: "List",
              },
            },
            {
              name: "--synthetic-target",
              description:
                "The target of the Synthetic Monitor. This is the fully qualified GCFv2 resource name",
              args: {
                name: "SYNTHETIC_TARGET",
                description: "String",
              },
            },
            {
              name: "--timeout",
              description:
                "The maximum amount of time in seconds to wait for the request to complete, defaults to `60`. Can be set for synthetic monitors",
              args: {
                name: "TIMEOUT",
              },
            },
            optTraceToken,
            {
              name: "--user-labels",
              description: "List of label KEY=VALUE pairs to add",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optUserOutputEnabled,
            {
              name: "--username",
              description:
                "The username to use when authenticating with the HTTP server. Can only be set if `--protocol` is `http` or `https`",
              args: {
                name: "USERNAME",
                description: "String",
              },
            },
            {
              name: "--validate-ssl",
              description:
                "Whether to include SSL certificate validation as a part of the uptime check, defaults to `false`. Can only be set if `--protocol` is `http` or `https`",
              args: {
                name: "VALIDATE_SSL",
                description: "String",
              },
            },
            optVerbosity,
          ],
          args: {
            name: "DISPLAY_NAME",
            description:
              "Display name for the uptime check or synthetic monitor",
          },
        },
        {
          name: "delete",
          description: "Delete an uptime check or synthetic monitor",
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
            name: "CHECK_ID",
            description:
              "ID of the uptime check or synthetic monitor or fully qualified identifier for the uptime check or synthetic monitor",
          },
        },
        {
          name: "describe",
          description: "Describe an uptime check or synthetic monitor",
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
            name: "CHECK_ID",
            description:
              "ID of the uptime check or synthetic monitor or fully qualified identifier for the uptime check or synthetic monitor",
          },
        },
        {
          name: "list-configs",
          description: "List uptime checks and synthetic monitors",
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
        {
          name: "list-ips",
          description: "List uptime check server ips",
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
        {
          name: "update",
          description: "Update an existing uptime check or synthetic monitor",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-regions",
              description:
                "The list of regions to add to the uptime check. _region_ must be one of:",
              args: {
                name: "region",
                description: "List",
              },
            },
            {
              name: "--add-status-classes",
              description:
                "The list of HTTP status classes to add to the uptime check. _status-class_ must be one of:",
              args: {
                name: "status-class",
                description: "List",
              },
            },
            {
              name: "--add-status-codes",
              description:
                "The list of HTTP status codes to add to the uptime check",
              args: {
                name: "status-code",
                description: "List",
              },
            },
            optBillingProject,
            {
              name: "--body",
              description:
                "The request body associated with the HTTP POST request. Can only be set if `--protocol` is `http` or `https`",
              args: {
                name: "BODY",
                description: "String",
              },
            },
            {
              name: "--clear-headers",
              description: "Clear all headers on the uptime check",
              args: {
                name: "CLEAR_HEADERS",
                description: "String",
              },
            },
            {
              name: "--clear-regions",
              description:
                "Clear all regions on the uptime check. This setting acts the same as if all available regions were selected",
              args: {
                name: "CLEAR_REGIONS",
                description: "String",
              },
            },
            {
              name: "--clear-status-classes",
              description:
                "Clear all HTTP status classes on the uptime check. Setting this flag is the same as selecting only the `2xx` status class",
              args: {
                name: "CLEAR_STATUS_CLASSES",
                description: "String",
              },
            },
            {
              name: "--clear-status-codes",
              description:
                "Clear all HTTP status codes on the uptime check. Setting this flag is the same as selecting only the `2xx` status class",
              args: {
                name: "CLEAR_STATUS_CODES",
                description: "String",
              },
            },
            {
              name: "--clear-user-labels",
              description:
                "Remove all labels. If `--update-user-labels` is also specified then `--clear-user-labels` is applied first",
            },
            optConfiguration,
            {
              name: "--content-type",
              description:
                "The content type header to use for the check, defaults to `unspecified`. Can only be set if `--protocol` is `http` or `https`",
              args: {
                name: "CONTENT_TYPE",
                description: "String",
                suggestions: ["unspecified", "url-encoded", "user-provided"],
              },
            },
            {
              name: "--custom-content-type",
              description:
                "A user-provided content type header to use for the check. Can only be set if `--protocol` is `http` or `https`",
              args: {
                name: "CUSTOM_CONTENT_TYPE",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description:
                "The display name for the uptime check or synthetic monitor",
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
              name: "--json-path",
              description:
                "JSONPath within the response output pointing to the expected content to match. Only used if `--matcher-type` is `matches-json-path` or `not-matches-json-path`",
              priority: 100,
              args: {
                name: "JSON_PATH",
                description: "String",
              },
            },
            {
              name: "--json-path-matcher-type",
              description:
                "The type of JSONPath match that is applied to the JSON output, defaults to `exact-match`. Only used if `--matcher-type` is `matches-json-path` or `not-matches-json-path`",
              args: {
                name: "JSON_PATH_MATCHER_TYPE",
                description: "String",
                suggestions: ["exact-match", "regex-match"],
              },
            },
            optLogHttp,
            {
              name: "--mask-headers",
              description:
                "Whether to encrypt the header information, defaults to `false`. Can only be set if `--protocol` is `http` or `https`",
              args: {
                name: "MASK_HEADERS",
                description: "String",
              },
            },
            {
              name: "--matcher-content",
              description: "String, regex or JSON content to match",
              priority: 100,
              args: {
                name: "MATCHER_CONTENT",
                description: "String",
              },
            },
            {
              name: "--matcher-type",
              description:
                "The type of content matcher that is applied to the server output, defaults to `contains-string`",
              args: {
                name: "MATCHER_TYPE",
                description: "String",
                suggestions: [
                  "contains-string",
                  "matches-json-path",
                  "matches-regex",
                  "not-contains-string",
                  "not-matches-json-path",
                  "not-matches-regex",
                ],
              },
            },
            {
              name: "--no-clear-user-labels",
              description:
                "Remove all labels. If `--update-user-labels` is also specified then `--clear-user-labels` is applied first",
              hidden: true,
            },
            {
              name: "--password",
              description:
                "The password to use when authenticating with the HTTP server. Can only be set if `--protocol` is `http` or `https`",
              args: {
                name: "PASSWORD",
                description: "String",
              },
            },
            {
              name: "--path",
              description:
                "The path to the page against which to run the check, defaults to `/`. Can only be set if `--protocol` is `http` or `https`",
              args: {
                name: "PATH",
                description: "String",
              },
            },
            {
              name: "--period",
              description:
                "The time between uptime check or synthetic monitor executions in minutes, defaults to `1`. Can be set for synthetic monitors",
              args: {
                name: "PERIOD",
                description: "String",
                suggestions: ["1", "10", "15", "5"],
              },
            },
            {
              name: "--pings-count",
              description: "Number of ICMP pings to send alongside the request",
              args: {
                name: "PINGS_COUNT",
              },
            },
            {
              name: "--port",
              description:
                "The port on the server against which to run the check. Defaults to `80` when `--protocol` is `http`. Defaults to `443` when `--protocol` is `https`. Required if `--protocol` is `tcp`",
              args: {
                name: "PORT",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--remove-headers",
              description:
                "The list of header keys to remove from the uptime check",
              args: {
                name: "KEY",
                description: "List",
              },
            },
            {
              name: "--remove-regions",
              description:
                "The list of regions to remove from the uptime check. _region_ must be one of:",
              args: {
                name: "region",
                description: "List",
              },
            },
            {
              name: "--remove-status-classes",
              description:
                "The list of HTTP status classes to remove from the uptime check. _status-class_ must be one of:",
              args: {
                name: "status-class",
                description: "List",
              },
            },
            {
              name: "--remove-status-codes",
              description:
                "The list of HTTP status codes to remove from the uptime check",
              args: {
                name: "status-code",
                description: "List",
              },
            },
            {
              name: "--remove-user-labels",
              description:
                "List of label keys to remove. If a label does not exist it is silently ignored. If `--update-user-labels` is also specified then `--update-user-labels` is applied first",
              args: {
                name: "KEY",
                description: "List",
              },
            },
            {
              name: "--request-method",
              description:
                "The HTTP request method to use, defaults to `get`. Can only be set if `--protocol` is `http` or `https`",
              args: {
                name: "REQUEST_METHOD",
                description: "String",
                suggestions: ["get", "post"],
              },
            },
            {
              name: "--service-agent-auth",
              description:
                "The type of authentication to use for the HTTP request. Can only be set if `--protocol` is `https`",
              args: {
                name: "SERVICE_AGENT_AUTH",
                description: "String",
                suggestions: ["oidc-token"],
              },
            },
            {
              name: "--set-regions",
              description:
                "The list of regions from which the check is run. At least 3 regions must be selected",
              args: {
                name: "region",
                description: "List",
              },
            },
            {
              name: "--set-status-classes",
              description:
                "List of HTTP status classes. The uptime check will only pass if the response code is contained in this list",
              args: {
                name: "status-class",
                description: "List",
              },
            },
            {
              name: "--set-status-codes",
              description:
                "List of HTTP status codes. The uptime check will only pass if the response code is present in this list",
              args: {
                name: "status-code",
                description: "List",
              },
            },
            {
              name: "--timeout",
              description:
                "The maximum amount of time in seconds to wait for the request to complete, defaults to `60`. Can be set for synthetic monitors",
              args: {
                name: "TIMEOUT",
              },
            },
            optTraceToken,
            {
              name: "--update-headers",
              description:
                'The list of headers to add to the uptime check. Any existing headers with matching "key" are overridden by the provided values',
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--update-user-labels",
              description:
                "List of label KEY=VALUE pairs to update. If a label exists, its value is modified. Otherwise, a new label is created",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optUserOutputEnabled,
            {
              name: "--username",
              description:
                "The username to use when authenticating with the HTTP server. Can only be set if `--protocol` is `http` or `https`",
              args: {
                name: "USERNAME",
                description: "String",
              },
            },
            {
              name: "--validate-ssl",
              description:
                "Whether to include SSL certificate validation as a part of the uptime check, defaults to `false`. Can only be set if `--protocol` is `http` or `https`",
              args: {
                name: "VALIDATE_SSL",
                description: "String",
              },
            },
            optVerbosity,
          ],
          args: {
            name: "CHECK_ID",
            description:
              "ID of the uptime check or synthetic monitor or fully qualified identifier for the uptime check or synthetic monitor",
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
