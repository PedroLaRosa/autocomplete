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
  description: "The billing account",
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
  name: "billing",
  description: "Manage billing accounts and associate them with projects",
  subcommands: [
    {
      name: "accounts",
      description: "Manage billing accounts",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add an IAM policy binding to a Cloud Billing account",
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
            name: "ACCOUNT",
            description:
              "ID of the account or fully qualified identifier for the account",
          },
        },
        {
          name: "describe",
          description: "Show metadata for a billing account",
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
            name: "ACCOUNT_ID",
            description:
              "Specify a billing account ID. Billing account IDs are of the form `0X0X0X-0X0X0X-0X0X0X`. To see available IDs, run `$ gcloud billing accounts list`",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Billing account",
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
            name: "ACCOUNT",
            description:
              "ID of the account or fully qualified identifier for the account",
          },
        },
        {
          name: "list",
          description: "List all active billing accounts",
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
            {
              name: "--no-uri",
              description:
                "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
              hidden: true,
            },
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
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
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding from a Cloud Billing account",
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
            name: "ACCOUNT",
            description:
              "ID of the account or fully qualified identifier for the account",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a Cloud Billing account",
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
          args: [
            {
              name: "ACCOUNT",
              description:
                "ID of the account or fully qualified identifier for the account",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy",
              template: "filepaths",
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
      name: "budgets",
      description: "Manage the budgets of your billing accounts",
      subcommands: [
        {
          name: "create",
          description: "Create a budget",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description:
                "ID of the billing-account or fully qualified identifier for the billing-account",
              priority: 100,
              args: {
                name: "BILLING_ACCOUNT",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--budget-amount",
              description:
                "Specify the amount of the budget. If a currency type is included, it must be the currency associated with the billing account. If excluded, the currency used will be the currency associated with the billing account",
              args: {
                name: "BUDGET_AMOUNT",
                description: "String",
              },
            },
            {
              name: "--calendar-period",
              description:
                "Specified to track usage over recurring calendar period. If you're creating a budget with a custom time period, omit this flag. _CALENDAR_PERIOD_ must be one of: *calendar-period-unspecified*, *month*, *quarter*, *year*",
              args: {
                name: "CALENDAR_PERIOD",
                suggestions: [
                  "calendar-period-unspecified",
                  "month",
                  "quarter",
                  "year",
                ],
              },
            },
            optConfiguration,
            {
              name: "--credit-types-treatment",
              description:
                "Whether to include all credit types when calculating the actual spend against the budget. If this is not specified, then all credit types are used in the calculation. If this is set to include-specified-credits, then --filter-credit-types must be specified with a nonempty list of credits. _CREDIT_TYPES_TREATMENT_ must be one of: *credit-types-treatment-unspecified*, *exclude-all-credits*, *include-all-credits*, *include-specified-credits*",
              args: {
                name: "CREDIT_TYPES_TREATMENT",
                suggestions: [
                  "credit-types-treatment-unspecified",
                  "exclude-all-credits",
                  "include-all-credits",
                  "include-specified-credits",
                ],
              },
            },
            {
              name: "--disable-default-iam-recipients",
              description:
                "When set to true, disables default notifications sent when a threshold is exceeded. Default notifications are sent to those with Billing Account Administrator and Billing Account User IAM roles for the target account",
            },
            {
              name: "--display-name",
              description:
                "User data for display name in UI. Must be less than or equal to 60 characters",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--end-date",
              description:
                "Specified to track usage before any end date. This time period is static, it does not recur. If specified, --start-date must also be specified",
              args: {
                name: "END_DATE",
                description: "String",
              },
            },
            {
              name: "--filter-credit-types",
              description:
                "Set of credit types, specifying that usage from only this set of credits should be included in the budget. If a nonempty list is specified, then --credit-types-treatment must be include-specified-credits",
              args: {
                name: "FILTER_CREDIT_TYPES",
                description: "List",
              },
            },
            {
              name: "--filter-labels",
              description:
                "Single label and value pair specifying that usage from only this set of labeled resources should be included in the budget. Currently, multiple entries or multiple values per entry are not allowed. If omitted, the report will include all labeled and unlabeled usage",
              args: {
                name: "KEY=VALUE",
              },
            },
            {
              name: "--filter-projects",
              description:
                "Set of projects in the form `projects/{project_id}`, specifying that usage from only this set of projects should be included in the budget. If omitted, all projects will be included",
              args: {
                name: "FILTER_PROJECTS",
                description: "List",
              },
            },
            {
              name: "--filter-resource-ancestors",
              description:
                "A set of folder and organization names of the form `folders/{folderId}` or `organizations/{organizationId}`, specifying that usage from only this set of folders and organizations should be included in the budget. If omitted, the budget includes all usage that the billing account pays for. If the folder or organization contains projects that are paid for by a different Cloud Billing account, the budget doesn't apply to those projects",
              args: {
                name: "FILTER_RESOURCE_ANCESTORS",
                description: "List",
              },
            },
            {
              name: "--filter-services",
              description:
                "Set of services of the form `services/{service_id}`, specifying that usage from only this set of services should be included in the budget. If omitted, the report will include usage for all services. The service names are available through the Catalog API: https://cloud.google.com/billing/v1/how-tos/catalog-api",
              args: {
                name: "FILTER_SERVICES",
                description: "List",
              },
            },
            {
              name: "--filter-subaccounts",
              description:
                "Set of subaccounts of the form `billingAccounts/{account_id}`, specifying that usage from only this set of subaccounts should be included in the budget. If a subaccount is set to the name of the parent account, usage from the parent account will be included. If omitted, the report will include usage from the parent account and all subaccounts, if they exist",
              args: {
                name: "FILTER_SUBACCOUNTS",
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
            {
              name: "--last-period-amount",
              description: "Use the amount of last period's budget",
            },
            optLogHttp,
            {
              name: "--no-disable-default-iam-recipients",
              description:
                "When set to true, disables default notifications sent when a threshold is exceeded. Default notifications are sent to those with Billing Account Administrator and Billing Account User IAM roles for the target account",
              hidden: true,
            },
            {
              name: "--no-last-period-amount",
              description: "Use the amount of last period's budget",
              hidden: true,
            },
            {
              name: "--notifications-rule-monitoring-notification-channels",
              description:
                "Targets to send notifications to when a threshold is exceeded. This is in addition to default recipients who have billing account IAM roles. The value is the full REST resource name of a monitoring notification channel in the form `projects/{project_id}/notificationChannels/{channel_id}`. A maximum of 5 channels is allowed. See https://cloud.google.com/billing/docs/how-to/budgets-notification-recipients for more details",
              args: {
                name: "NOTIFICATIONS_RULE_MONITORING_NOTIFICATION_CHANNELS",
                description: "List",
              },
            },
            {
              name: "--notifications-rule-pubsub-topic",
              description:
                "Name of the Cloud Pub/Sub topic where budget related messages will be published, in the form `projects/{project_id}/topics/{topic_id}`",
              args: {
                name: "NOTIFICATIONS_RULE_PUBSUB_TOPIC",
                description: "String",
              },
            },
            {
              name: "--ownership-scope",
              description:
                "Sets the ownership scope of the budget. The ownership scope and users' IAM permissions determine who has full access to the budget's data",
              args: {
                name: "OWNERSHIP_SCOPE",
                suggestions: [
                  "all-users",
                  "billing-account",
                  "ownership-scope-unspecified",
                ],
              },
            },
            optProject,
            optQuiet,
            {
              name: "--start-date",
              description:
                "Specified to track usage after any start date. This time period is static, it does not recur",
              priority: 100,
              args: {
                name: "START_DATE",
                description: "String",
              },
            },
            {
              name: "--threshold-rule",
              description:
                "Rule that triggers alerts (notifications of thresholds being crossed) when spend exceeds the specified percentages of the budget. This flag can be repeated to provide multiple thresholds above which an alert is sent",
              isRepeatable: true,
              args: {
                name: "THRESHOLD_RULE",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "delete",
          description: "Delete a budget",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingAccount,
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
            name: "BUDGET",
            description:
              "ID of the budget or fully qualified identifier for the budget",
          },
        },
        {
          name: "describe",
          description: "Describe a budget",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingAccount,
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
            name: "BUDGET",
            description:
              "ID of the budget or fully qualified identifier for the budget",
          },
        },
        {
          name: "list",
          description: "List budgets",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description:
                "ID of the billing-account or fully qualified identifier for the billing-account",
              priority: 100,
              args: {
                name: "BILLING_ACCOUNT",
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
        {
          name: "update",
          description: "Update a budget",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-threshold-rule",
              description:
                "Rule that triggers alerts (notifications of thresholds being crossed) when spend exceeds the specified percentages of the budget. This flag can be repeated to provide multiple thresholds above which an alert is sent",
              isRepeatable: true,
              args: {
                name: "ADD_THRESHOLD_RULE",
              },
            },
            optBillingAccount,
            optBillingProject,
            {
              name: "--budget-amount",
              description:
                "Specify the amount of the budget. If a currency type is included, it must be the existing currency associated with the budget",
              args: {
                name: "BUDGET_AMOUNT",
                description: "String",
              },
            },
            {
              name: "--calendar-period",
              description:
                "Specified to track usage over recurring calendar period. If you're creating a budget with a custom time period, omit this flag. _CALENDAR_PERIOD_ must be one of: *calendar-period-unspecified*, *month*, *quarter*, *year*",
              args: {
                name: "CALENDAR_PERIOD",
                suggestions: [
                  "calendar-period-unspecified",
                  "month",
                  "quarter",
                  "year",
                ],
              },
            },
            {
              name: "--clear-threshold-rules",
              description: "Removes all threshold rules from the budget",
            },
            optConfiguration,
            {
              name: "--credit-types-treatment",
              description:
                "Whether to include all credit types when calculating the actual spend against the budget. If this is not specified, then all credit types are used in the calculation. If this is set to include-specified-credits, then --filter-credit-types must be specified with a nonempty list of credits. _CREDIT_TYPES_TREATMENT_ must be one of: *credit-types-treatment-unspecified*, *exclude-all-credits*, *include-all-credits*, *include-specified-credits*",
              args: {
                name: "CREDIT_TYPES_TREATMENT",
                suggestions: [
                  "credit-types-treatment-unspecified",
                  "exclude-all-credits",
                  "include-all-credits",
                  "include-specified-credits",
                ],
              },
            },
            {
              name: "--disable-default-iam-recipients",
              description:
                "When set to true, disables default notifications sent when a threshold is exceeded. Default notifications are sent to those with Billing Account Administrator and Billing Account User IAM roles for the target account",
            },
            {
              name: "--display-name",
              description:
                "User data for display name in UI. Must be less than or equal to 60 characters",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--end-date",
              description:
                "Specified to track usage before any end date. This time period is static, it does not recur. If specified, --start-date must also be specified",
              args: {
                name: "END_DATE",
                description: "String",
              },
            },
            {
              name: "--filter-credit-types",
              description:
                "Set of credit types, specifying that usage from only this set of credits should be included in the budget. If a nonempty list is specified, then --credit-types-treatment must be include-specified-credits",
              args: {
                name: "FILTER_CREDIT_TYPES",
                description: "List",
              },
            },
            {
              name: "--filter-labels",
              description:
                "Single label and value pair specifying that usage from only this set of labeled resources should be included in the budget. Currently, multiple entries or multiple values per entry are not allowed. If omitted, the report will include all labeled and unlabeled usage",
              args: {
                name: "KEY=VALUE",
              },
            },
            {
              name: "--filter-projects",
              description:
                "Set of projects in the form `projects/{project_id}`, specifying that usage from only this set of projects should be included in the budget. If omitted, all projects will be included",
              args: {
                name: "FILTER_PROJECTS",
                description: "List",
              },
            },
            {
              name: "--filter-resource-ancestors",
              description:
                "A set of folder and organization names of the form `folders/{folderId}` or `organizations/{organizationId}`, specifying that usage from only this set of folders and organizations should be included in the budget. If omitted, the budget includes all usage that the billing account pays for. If the folder or organization contains projects that are paid for by a different Cloud Billing account, the budget doesn't apply to those projects",
              args: {
                name: "FILTER_RESOURCE_ANCESTORS",
                description: "List",
              },
            },
            {
              name: "--filter-services",
              description:
                "Set of services of the form `services/{service_id}`, specifying that usage from only this set of services should be included in the budget. If omitted, the report will include usage for all services. The service names are available through the Catalog API: https://cloud.google.com/billing/v1/how-tos/catalog-api",
              args: {
                name: "FILTER_SERVICES",
                description: "List",
              },
            },
            {
              name: "--filter-subaccounts",
              description:
                "Set of subaccounts of the form `billingAccounts/{account_id}`, specifying that usage from only this set of subaccounts should be included in the budget. If a subaccount is set to the name of the parent account, usage from the parent account will be included. If omitted, the report will include usage from the parent account and all subaccounts, if they exist",
              args: {
                name: "FILTER_SUBACCOUNTS",
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
            {
              name: "--last-period-amount",
              description: "Use the amount of last period's budget",
            },
            optLogHttp,
            {
              name: "--no-clear-threshold-rules",
              description: "Removes all threshold rules from the budget",
              hidden: true,
            },
            {
              name: "--no-disable-default-iam-recipients",
              description:
                "When set to true, disables default notifications sent when a threshold is exceeded. Default notifications are sent to those with Billing Account Administrator and Billing Account User IAM roles for the target account",
              hidden: true,
            },
            {
              name: "--no-last-period-amount",
              description: "Use the amount of last period's budget",
              hidden: true,
            },
            {
              name: "--notifications-rule-monitoring-notification-channels",
              description:
                "Targets to send notifications to when a threshold is exceeded. This is in addition to default recipients who have billing account roles. The value is the full REST resource name of a monitoring notification channel in the form `projects/{project_id}/notificationChannels/{channel_id}`. A maximum of 5 channels is allowed. See https://cloud.google.com/billing/docs/how-to/budgets-notification-recipients for more details",
              args: {
                name: "NOTIFICATIONS_RULE_MONITORING_NOTIFICATION_CHANNELS",
                description: "List",
              },
            },
            {
              name: "--notifications-rule-pubsub-topic",
              description:
                "Name of the Cloud Pub/Sub topic where budget related messages will be published, in the form `projects/{project_id}/topics/{topic_id}`",
              args: {
                name: "NOTIFICATIONS_RULE_PUBSUB_TOPIC",
                description: "String",
              },
            },
            {
              name: "--ownership-scope",
              description:
                "Sets the ownership scope of the budget. The ownership scope and users' IAM permissions determine who has full access to the budget's data",
              args: {
                name: "OWNERSHIP_SCOPE",
                suggestions: [
                  "all-users",
                  "billing-account",
                  "ownership-scope-unspecified",
                ],
              },
            },
            optProject,
            optQuiet,
            {
              name: "--start-date",
              description:
                "Specified to track usage after any start date. This time period is static, it does not recur",
              priority: 100,
              args: {
                name: "START_DATE",
                description: "String",
              },
            },
            {
              name: "--threshold-rules-from-file",
              description:
                "Import a file with the updated threshold rules. The threshold rules in the file will replace the rules in the budget. This can be used to add or remove specific threshold rules. Use a full or relative path to a local file containing the value of threshold_rules",
              args: {
                name: "THRESHOLD_RULES_FROM_FILE",
                template: "filepaths",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BUDGET",
            description:
              "ID of the budget or fully qualified identifier for the budget",
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
      name: "projects",
      description: "Manage the billing account configuration of your projects",
      subcommands: [
        {
          name: "describe",
          description: "Show detailed billing information for a project",
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
            name: "PROJECT_ID",
            description: "Specify a project id",
          },
        },
        {
          name: "link",
          description: "Link a project with a billing account",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description:
                "Specify a billing account ID. Billing account IDs are of the form `0X0X0X-0X0X0X-0X0X0X`. To see available IDs, run `$ gcloud billing accounts list`",
              priority: 100,
              args: {
                name: "ACCOUNT_ID",
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
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PROJECT_ID",
            description: "Specify a project id",
          },
        },
        {
          name: "list",
          description:
            "List all active projects associated with the specified billing account",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description:
                "Specify a billing account ID. Billing account IDs are of the form `0X0X0X-0X0X0X-0X0X0X`. To see available IDs, run `$ gcloud billing accounts list`",
              priority: 100,
              args: {
                name: "ACCOUNT_ID",
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
        {
          name: "unlink",
          description: "Unlink the account (if any) linked with a project",
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
            name: "PROJECT_ID",
            description: "Specify a project id",
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
