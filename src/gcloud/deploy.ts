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

const optAll: Fig.Option = {
  name: "--all",
  description:
    "Remove all bindings with this role and principal, irrespective of any conditions",
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

const optCondition: Fig.Option = {
  name: "--condition",
  description:
    "A condition to include in the binding. When the condition is explicitly specified as `None` (`--condition=None`), a binding without a condition is added. When the condition is specified and is not `None`, `--role` cannot be a basic role. Basic roles are `roles/editor`, `roles/owner`, and `roles/viewer`. For more on conditions, refer to the conditions overview guide: https://cloud.google.com/iam/docs/conditions-overview",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
  },
};

const optCondition2: Fig.Option = {
  name: "--condition",
  description:
    "The condition of the binding that you want to remove. When the condition is explicitly specified as `None` (`--condition=None`), a binding without a condition is removed. Otherwise, only a binding with a condition that exactly matches the specified condition (including the optional description) is removed. For more on conditions, refer to the conditions overview guide: https://cloud.google.com/iam/docs/conditions-overview",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
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

const optDeliveryPipeline: Fig.Option = {
  name: "--delivery-pipeline",
  description:
    "ID of the delivery_pipeline or fully qualified identifier for the delivery_pipeline",
  args: {
    name: "DELIVERY_PIPELINE",
    description: "String",
  },
};

const optDeliveryPipeline2: Fig.Option = {
  name: "--delivery-pipeline",
  description:
    "The delivery pipeline associated with the release. Alternatively, set the property [deploy/delivery-pipeline]",
  args: {
    name: "DELIVERY_PIPELINE",
    description: "String",
  },
};

const optDeliveryPipeline3: Fig.Option = {
  name: "--delivery-pipeline",
  description:
    "The delivery pipeline associated with the rollout. Alternatively, set the property [deploy/delivery-pipeline]",
  args: {
    name: "DELIVERY_PIPELINE",
    description: "String",
  },
};

const optDeliveryPipeline4: Fig.Option = {
  name: "--delivery-pipeline",
  description: "The name of the Cloud Deploy delivery pipeline",
  args: {
    name: "DELIVERY_PIPELINE",
    description: "String",
  },
};

const optDestination: Fig.Option = {
  name: "--destination",
  description:
    "Path to a YAML file where the configuration will be exported. Alternatively, you may omit this flag to write to standard output",
  args: {
    name: "DESTINATION",
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

const optMember: Fig.Option = {
  name: "--member",
  description:
    "The principal to add the binding for. Should be of the form `user|group|serviceAccount:email` or `domain:domain`",
  priority: 100,
  args: {
    name: "PRINCIPAL",
    description: "String",
  },
};

const optMember2: Fig.Option = {
  name: "--member",
  description:
    "The principal to remove the binding for. Should be of the form `user|group|serviceAccount:email` or `domain:domain`",
  priority: 100,
  args: {
    name: "PRINCIPAL",
    description: "String",
  },
};

const optNoAll: Fig.Option = {
  name: "--no-all",
  description:
    "Remove all bindings with this role and principal, irrespective of any conditions",
  hidden: true,
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

const optOverrideDeployPolicies: Fig.Option = {
  name: "--override-deploy-policies",
  description: "Deploy policies to override",
  args: {
    name: "POLICY",
    description: "List",
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

const optRegion: Fig.Option = {
  name: "--region",
  description:
    "ID of the location or fully qualified identifier for the location",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion2: Fig.Option = {
  name: "--region",
  description: "Location of the custom target type",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion3: Fig.Option = {
  name: "--region",
  description: "Location of the delivery_pipeline",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion4: Fig.Option = {
  name: "--region",
  description: "Location of the deploy policy",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion5: Fig.Option = {
  name: "--region",
  description: "Location of the target",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion6: Fig.Option = {
  name: "--region",
  description:
    "The Cloud region for the release. Alternatively, set the property [deploy/region]",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion7: Fig.Option = {
  name: "--region",
  description:
    "The Cloud region for the rollout. Alternatively, set the property [deploy/region]",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion8: Fig.Option = {
  name: "--region",
  description:
    "The Cloud region for the target. Alternatively, set the property [deploy/region]",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRelease: Fig.Option = {
  name: "--release",
  description: "The name of the Cloud Deploy release",
  args: {
    name: "RELEASE",
    description: "String",
  },
};

const optRelease2: Fig.Option = {
  name: "--release",
  description: "The release associated with the rollout",
  args: {
    name: "RELEASE",
    description: "String",
  },
};

const optRole: Fig.Option = {
  name: "--role",
  description:
    "Role name to assign to the principal. The role name is the complete path of a predefined role, such as `roles/logging.viewer`, or the role ID for a custom role, such as `organizations/{ORGANIZATION_ID}/roles/logging.viewer`",
  priority: 100,
  args: {
    name: "ROLE",
    description: "String",
  },
};

const optRole2: Fig.Option = {
  name: "--role",
  description: "The role to remove the principal from",
  priority: 100,
  args: {
    name: "ROLE",
    description: "String",
  },
};

const optRolloutId: Fig.Option = {
  name: "--rollout-id",
  description: "ID to assign to the generated rollout for promotion",
  args: {
    name: "ROLLOUT_ID",
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

const optStartingPhaseId: Fig.Option = {
  name: "--starting-phase-id",
  description: "If set, starts the created rollout at the specified phase",
  args: {
    name: "STARTING_PHASE_ID",
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
  name: "deploy",
  description: "Create and manage Cloud Deploy resources",
  subcommands: [
    {
      name: "apply",
      description:
        "Applies a yaml configuration containing Delivery Pipeline(s), Target(s), Custom Target Type(s), Deploy Policy(ies), and Automation(s) declarative definitions",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        {
          name: "--file",
          description:
            "Path to yaml file containing Delivery Pipeline(s), Target(s) declarative definitions",
          priority: 100,
          args: {
            name: "FILE",
            description: "String",
            template: "filepaths",
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
        optRegion,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "automation-runs",
      description: "Manages AutomationRuns resources for Cloud Deploy",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels a Cloud Deploy Automation Run",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--delivery-pipeline",
              description:
                "The delivery pipeline associated with the automation_run. Alternatively, set the property [deploy/delivery-pipeline]",
              args: {
                name: "DELIVERY_PIPELINE",
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
            {
              name: "--region",
              description:
                "The Cloud region for the automation_run. Alternatively, set the property [deploy/region]",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTOMATION_RUN",
            description:
              "ID of the automation_run or fully qualified identifier for the automation_run",
          },
        },
        {
          name: "describe",
          description: "Show details for an Automation Run",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDeliveryPipeline4,
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
              description: "Location of the automation run",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTOMATION_RUN",
            description:
              "ID of the automation run or fully qualified identifier for the automation run",
          },
        },
        {
          name: "list",
          description: "List the Automation Runs",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDeliveryPipeline,
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
            optRegion3,
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
      name: "automations",
      description: "Manages Automations resources for Cloud Deploy",
      subcommands: [
        {
          name: "delete",
          description: "Deletes a Cloud Deploy Automation",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--delivery-pipeline",
              description:
                "The delivery pipeline associated with the automation. Alternatively, set the property [deploy/delivery-pipeline]",
              args: {
                name: "DELIVERY_PIPELINE",
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
            {
              name: "--region",
              description:
                "The Cloud region for the automation. Alternatively, set the property [deploy/region]",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTOMATION",
            description:
              "ID of the automation or fully qualified identifier for the automation",
          },
        },
        {
          name: "describe",
          description: "Show details for an Automation",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDeliveryPipeline4,
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
              description: "Location of the automation",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTOMATION",
            description:
              "ID of the automation or fully qualified identifier for the automation",
          },
        },
        {
          name: "export",
          description:
            "Returns the YAML definition of the specified Automation",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--delivery-pipeline",
              description:
                "The delivery pipeline associated with the automation. Alternatively, set the property [deploy/delivery-pipeline]",
              args: {
                name: "DELIVERY_PIPELINE",
                description: "String",
              },
            },
            optDestination,
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
                "The Cloud region for the automation. Alternatively, set the property [deploy/region]",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTOMATION",
            description:
              "ID of the automation or fully qualified identifier for the automation",
          },
        },
        {
          name: "list",
          description: "List the Automations",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDeliveryPipeline,
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
            optRegion3,
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
      name: "custom-target-types",
      description:
        "Create and manage Custom Target Type resources for Cloud Deploy",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "Add IAM policy binding for a Cloud Deploy Custom Target Type",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCondition,
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
            optMember,
            optProject,
            optQuiet,
            optRegion2,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CUSTOM_TARGET_TYPE",
            description:
              "ID of the custom target type or fully qualified identifier for the custom target type",
          },
        },
        {
          name: "delete",
          description: "Delete a custom target type",
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
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRegion2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CUSTOM_TARGET_TYPE",
            description:
              "ID of the custom target type or fully qualified identifier for the custom target type",
          },
        },
        {
          name: "describe",
          description: "Show details for a custom target type",
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
            name: "CUSTOM_TARGET_TYPE",
            description:
              "ID of the custom target type or fully qualified identifier for the custom target type",
          },
        },
        {
          name: "export",
          description:
            "Returns the .yaml definition of the specified custom target type",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDestination,
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
                "The Cloud region for the custom_target_type. Alternatively, set the property [deploy/region]",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CUSTOM_TARGET_TYPE",
            description:
              "ID of the custom_target_type or fully qualified identifier for the custom_target_type",
          },
        },
        {
          name: "get-iam-policy",
          description:
            "Get the IAM policy for a Cloud Deploy Custom Target Type",
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
            optRegion2,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CUSTOM_TARGET_TYPE",
            description:
              "ID of the custom target type or fully qualified identifier for the custom target type",
          },
        },
        {
          name: "list",
          description: "List the custom target types",
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
            optRegion,
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
            "Remove an IAM policy binding for a Cloud Deploy Custom Target Type",
          options: [
            optAccessTokenFile,
            optAccount,
            optAll,
            optBillingProject,
            optCondition2,
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
            optMember2,
            optNoAll,
            optProject,
            optQuiet,
            optRegion2,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CUSTOM_TARGET_TYPE",
            description:
              "ID of the custom target type or fully qualified identifier for the custom target type",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set the IAM policy for a Cloud Deploy Custom Target Type",
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
          args: [
            {
              name: "CUSTOM_TARGET_TYPE",
              description:
                "ID of the custom target type or fully qualified identifier for the custom target type",
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
      name: "delete",
      description:
        "Deletes Delivery Pipeline(s), Target(s), Custom Target Type(s), and Automation(s) in a yaml configuration",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        {
          name: "--file",
          description:
            "Path to yaml file containing Delivery Pipeline(s), Target(s) declarative definitions",
          priority: 100,
          args: {
            name: "FILE",
            description: "String",
            template: "filepaths",
          },
        },
        optFlagsFile,
        optFlatten,
        {
          name: "--force",
          description:
            "If true, the delivery pipeline and its sub-resources (releases and rollouts) are deleted",
        },
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        {
          name: "--no-force",
          description:
            "If true, the delivery pipeline and its sub-resources (releases and rollouts) are deleted",
          hidden: true,
        },
        optProject,
        optQuiet,
        optRegion,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "delivery-pipelines",
      description:
        "Create and manage Delivery Pipeline resources for Cloud Deploy",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "Add IAM policy binding for a Cloud Deploy delivery pipeline",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCondition,
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
            optMember,
            optProject,
            optQuiet,
            optRegion3,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DELIVERY_PIPELINE",
            description:
              "ID of the delivery_pipeline or fully qualified identifier for the delivery_pipeline",
            isOptional: true,
          },
        },
        {
          name: "delete",
          description: "Delete a delivery pipeline",
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
                "If true, the delivery pipeline with sub-resources will be deleted and its sub-resources will also be deleted",
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-force",
              description:
                "If true, the delivery pipeline with sub-resources will be deleted and its sub-resources will also be deleted",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion3,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DELIVERY_PIPELINE",
            description:
              "ID of the delivery_pipeline or fully qualified identifier for the delivery_pipeline",
            isOptional: true,
          },
        },
        {
          name: "describe",
          description: "Show details about a delivery pipeline",
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
                "The Cloud region for the delivery_pipeline. Alternatively, set the property [deploy/region]",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DELIVERY_PIPELINE",
            description:
              "ID of the delivery_pipeline or fully qualified identifier for the delivery_pipeline",
            isOptional: true,
          },
        },
        {
          name: "export",
          description:
            "Returns the .yaml definition of the specified delivery pipeline",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDestination,
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
                "The Cloud region for the delivery_pipeline. Alternatively, set the property [deploy/region]",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DELIVERY_PIPELINE",
            description:
              "ID of the delivery_pipeline or fully qualified identifier for the delivery_pipeline",
            isOptional: true,
          },
        },
        {
          name: "get-iam-policy",
          description:
            "Get the IAM policy for a Cloud Deploy delivery pipeline",
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
            optRegion3,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DELIVERY_PIPELINE",
            description:
              "ID of the delivery_pipeline or fully qualified identifier for the delivery_pipeline",
            isOptional: true,
          },
        },
        {
          name: "list",
          description: "List Cloud Deploy delivery pipelines",
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
            optRegion,
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
            "Remove an IAM policy binding for a Cloud Deploy delivery pipeline",
          options: [
            optAccessTokenFile,
            optAccount,
            optAll,
            optBillingProject,
            optCondition2,
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
            optMember2,
            optNoAll,
            optProject,
            optQuiet,
            optRegion3,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DELIVERY_PIPELINE",
            description:
              "ID of the delivery_pipeline or fully qualified identifier for the delivery_pipeline",
            isOptional: true,
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set the IAM policy for a Cloud Deploy delivery pipeline",
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
            optRegion3,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "DELIVERY_PIPELINE",
              description:
                "ID of the delivery_pipeline or fully qualified identifier for the delivery_pipeline",
              isOptional: true,
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
      name: "deploy-policies",
      description:
        "Create and manage Deploy Policy resources for Google Cloud Deploy",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding for a Cloud Deploy Policy",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCondition,
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
            optMember,
            optProject,
            optQuiet,
            optRegion4,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DEPLOY_POLICY",
            description:
              "ID of the deploy policy or fully qualified identifier for the deploy policy",
          },
        },
        {
          name: "delete",
          description: "Delete a deploy policy",
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
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRegion4,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DEPLOY_POLICY",
            description:
              "ID of the deploy policy or fully qualified identifier for the deploy policy",
          },
        },
        {
          name: "describe",
          description: "Show details about a deploy policy",
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
                "The Cloud region for the deploy policy. Alternatively, set the property [deploy/region]",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DEPLOY_POLICY",
            description:
              "ID of the deploy policy or fully qualified identifier for the deploy policy",
          },
        },
        {
          name: "export",
          description:
            "Returns the .yaml definition of the specified deploy policy",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDestination,
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
                "The Cloud region for the deploy policy. Alternatively, set the property [deploy/region]",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DEPLOY_POLICY",
            description:
              "ID of the deploy policy or fully qualified identifier for the deploy policy",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Deploy Policy",
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
            optRegion4,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DEPLOY_POLICY",
            description:
              "ID of the deploy policy or fully qualified identifier for the deploy policy",
          },
        },
        {
          name: "list",
          description: "List the deploy policies",
          hidden: true,
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
            optRegion,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove an IAM policy binding for a Cloud Deploy Policy",
          options: [
            optAccessTokenFile,
            optAccount,
            optAll,
            optBillingProject,
            optCondition2,
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
            optMember2,
            optNoAll,
            optProject,
            optQuiet,
            optRegion4,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DEPLOY_POLICY",
            description:
              "ID of the deploy policy or fully qualified identifier for the deploy policy",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a Cloud Deploy Policy",
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
            optRegion4,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "DEPLOY_POLICY",
              description:
                "ID of the deploy policy or fully qualified identifier for the deploy policy",
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
      name: "get-config",
      description:
        "Get the Cloud Deploy config for the provided region and project",
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
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "job-runs",
      description: "Manages job runs resources for Cloud Deploy",
      subcommands: [
        {
          name: "describe",
          description: "Show details for a job run",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDeliveryPipeline4,
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
              description: "Location of the job run",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optRelease,
            {
              name: "--rollout",
              description: "The name of the Cloud Deploy rollout",
              args: {
                name: "ROLLOUT",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "JOB_RUN",
            description:
              "ID of the job run or fully qualified identifier for the job run",
          },
        },
        {
          name: "list",
          description: "List the job runs",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDeliveryPipeline4,
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
            {
              name: "--region",
              description: "Location of the rollout",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optRelease,
            {
              name: "--rollout",
              description:
                "ID of the rollout or fully qualified identifier for the rollout",
              priority: 100,
              args: {
                name: "ROLLOUT",
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
          name: "terminate",
          description: "Terminates a Cloud Deploy job run",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--delivery-pipeline",
              description:
                "The delivery pipeline associated with the job_run. Alternatively, set the property [deploy/delivery-pipeline]",
              args: {
                name: "DELIVERY_PIPELINE",
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
            optOverrideDeployPolicies,
            optProject,
            optQuiet,
            {
              name: "--region",
              description:
                "The Cloud region for the job_run. Alternatively, set the property [deploy/region]",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            {
              name: "--release",
              description: "The release associated with the job_run",
              args: {
                name: "RELEASE",
                description: "String",
              },
            },
            {
              name: "--rollout",
              description: "The rollout associated with the job_run",
              args: {
                name: "ROLLOUT",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "JOB_RUN",
            description:
              "ID of the job_run or fully qualified identifier for the job_run",
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
      name: "releases",
      description: "Create and manage Release resources for Cloud Deploy",
      subcommands: [
        {
          name: "abandon",
          description: "Abandons a release",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDeliveryPipeline2,
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
            optRegion6,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RELEASE",
            description:
              "ID of the release or fully qualified identifier for the release",
          },
        },
        {
          name: "create",
          description: "Creates a new release, delivery pipeline qualified",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--annotations",
              description:
                "Annotations to apply to the release. Annotations take the form of key/value string pairs",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optBillingProject,
            {
              name: "--build-artifacts",
              description:
                "Reference to a Skaffold build artifacts output file from skaffold build --file-output=BUILD_ARTIFACTS. If you aren't using Skaffold, use the --images flag below to specify the image-names-to-tagged-image references",
              args: {
                name: "BUILD_ARTIFACTS",
                description: "String",
              },
            },
            {
              name: "--config-file",
              description:
                "Path to yaml file containing Release declarative definitions",
              hidden: true,
              args: {
                name: "CONFIG_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optConfiguration,
            optDeliveryPipeline2,
            {
              name: "--deploy-parameters",
              description:
                "Deployment parameters to apply to the release. Deployment parameters take the form of key/value string pairs",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--description",
              description: "Description of the release",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--disable-initial-rollout",
              description:
                "Skips creating a rollout in the first target defined in the delivery pipeline",
            },
            {
              name: "--docker-version",
              description: "Version of the Docker binary",
              args: {
                name: "DOCKER_VERSION",
                description: "String",
              },
            },
            {
              name: "--enable-initial-rollout",
              description:
                "Creates a rollout in the first target defined in the delivery pipeline. This is the default behavior",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--from-k8s-manifest",
              description:
                "The path to a Kubernetes manifest, which Cloud Deploy will use to generate a skaffold.yaml file for you (for example, foo/bar/k8.yaml). The generated Skaffold file will be available in the Google Cloud Storage source staging directory (see --gcs-source-staging-dir flag) after the release is complete",
              args: {
                name: "FROM_K8S_MANIFEST",
                description: "String",
              },
            },
            {
              name: "--from-run-manifest",
              description:
                "The path to a Cloud Run manifest, which Cloud Deploy will use to generate a skaffold.yaml file for you (for example, foo/bar/service.yaml). The generated Skaffold file will be available in the Google Cloud Storage source staging directory (see --gcs-source-staging-dir flag) after the release is complete",
              args: {
                name: "FROM_RUN_MANIFEST",
                description: "String",
              },
            },
            {
              name: "--gcs-source",
              description:
                "The URL of a Google Cloud Storage object containing the source code. The object must be a gzipped archive file (.tar.gz). If gcs-source, local-source, or source are omitted and config file path is not specified, gcloud checks for the presence of skaffold.yaml and then release.yaml to create the appropriate release type",
              hidden: true,
              args: {
                name: "GCS_SOURCE",
                description: "String",
              },
            },
            {
              name: "--gcs-source-staging-dir",
              description:
                "A directory in Google Cloud Storage to copy the source used for staging the build. If the specified bucket does not exist, Cloud Deploy will create one. If you don't set this field, ```gs://[DELIVERY_PIPELINE_ID]_clouddeploy/source``` is used",
              args: {
                name: "GCS_SOURCE_STAGING_DIR",
                description: "String",
              },
            },
            {
              name: "--helm-version",
              description: "Version of the Helm binary",
              args: {
                name: "HELM_VERSION",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--ignore-file",
              description:
                "Override the `.gcloudignore` file and use the specified file instead",
              args: {
                name: "IGNORE_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--images",
              description:
                "Reference to a collection of individual image name to image full path replacements",
              args: {
                name: "NAME=TAG",
                description: "Dict",
              },
            },
            optImpersonateServiceAccount,
            {
              name: "--initial-rollout-annotations",
              description:
                "Annotations to apply to the initial rollout when creating the release. Annotations take the form of key/value string pairs",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--initial-rollout-labels",
              description:
                "Labels to apply to the initial rollout when creating the release. Labels take the form of key/value string pairs",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--initial-rollout-phase-id",
              description:
                "The phase to start the initial rollout at when creating the release. The phase ID must be a valid phase on the rollout. If not specified, then the rollout will start at the first phase",
              args: {
                name: "INITIAL_ROLLOUT_PHASE_ID",
                description: "String",
              },
            },
            {
              name: "--kpt-version",
              description: "Version of the Kpt binary",
              args: {
                name: "KPT_VERSION",
                description: "String",
              },
            },
            {
              name: "--kubectl-version",
              description: "Version of the Kubectl binary",
              args: {
                name: "KUBECTL_VERSION",
                description: "String",
              },
            },
            {
              name: "--kustomize-version",
              description: "Version of the Kustomize binary",
              args: {
                name: "KUSTOMIZE_VERSION",
                description: "String",
              },
            },
            {
              name: "--labels",
              description:
                "Labels to apply to the release. Labels take the form of key/value string pairs",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--local-source",
              description:
                "The location of the source that contains the configuration files. The location must be a directory on a local disk. If the source is a local directory, this command skips the files specified in the --ignore-file. If --ignore-file is not specified, use.gcloudignore file. If a .gcloudignore file is absent and a .gitignore file is present in the local source directory, gcloud will use a generated Git-compatible .gcloudignore file that respects your .gitignored files. The global .gitignore is not respected. For more information on .gcloudignore, see gcloud topic gcloudignore. If gcs-source, local-source, or source are omitted and config file path is not specified, gcloud checks for the presence of skaffold.yaml and then release.yaml to create the appropriate release type",
              hidden: true,
              args: {
                name: "LOCAL_SOURCE",
                description: "String",
              },
            },
            optLogHttp,
            optOverrideDeployPolicies,
            optProject,
            optQuiet,
            optRegion6,
            {
              name: "--skaffold-file",
              description:
                "Path of the skaffold file absolute or relative to the source directory",
              args: {
                name: "SKAFFOLD_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--skaffold-version",
              description: "Version of the Skaffold binary",
              args: {
                name: "SKAFFOLD_VERSION",
                description: "String",
              },
            },
            {
              name: "--source",
              description:
                "The location of the source that contains skaffold.yaml. The location can be a directory on a local disk or a gzipped archive file (.tar.gz) in Google Cloud Storage. If the source is a local directory, this command skips the files specified in the --ignore-file. If --ignore-file is not specified, use.gcloudignore file. If a .gcloudignore file is absent and a .gitignore file is present in the local source directory, gcloud will use a generated Git-compatible .gcloudignore file that respects your .gitignored files. The global .gitignore is not respected. For more information on .gcloudignore, see gcloud topic gcloudignore",
              args: {
                name: "SOURCE",
                description: "String",
              },
            },
            {
              name: "--to-target",
              description:
                "Specifies a target to deliver into upon release creation",
              args: {
                name: "TO_TARGET",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RELEASE",
            description:
              "ID of the release or fully qualified identifier for the release",
          },
        },
        {
          name: "describe",
          description: "Show details about a release",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDeliveryPipeline4,
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
              description: "Location of the release",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RELEASE",
            description:
              "ID of the release or fully qualified identifier for the release",
          },
        },
        {
          name: "list",
          description: "List releases",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDeliveryPipeline,
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
            optRegion3,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "promote",
          description:
            "Promotes a release from one target (source), to another (destination)",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--annotations",
              description:
                "Annotations to apply to the rollout. Annotations take the form of key/value string pairs",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optBillingProject,
            optConfiguration,
            optDeliveryPipeline2,
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
                "Labels to apply to the rollout. Labels take the form of key/value string pairs",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optLogHttp,
            optOverrideDeployPolicies,
            optProject,
            optQuiet,
            optRegion6,
            {
              name: "--release",
              description:
                "ID of the release or fully qualified identifier for the release",
              priority: 100,
              args: {
                name: "RELEASE",
                description: "String",
              },
            },
            optRolloutId,
            optStartingPhaseId,
            {
              name: "--to-target",
              description: "Destination target to promote into",
              args: {
                name: "TO_TARGET",
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
      name: "rollouts",
      description: "Create and manage Rollout resources for Cloud Deploy",
      subcommands: [
        {
          name: "advance",
          description: "Advances a rollout",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDeliveryPipeline3,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optOverrideDeployPolicies,
            {
              name: "--phase-id",
              description: "Phase ID on a rollout resource",
              args: {
                name: "PHASE_ID",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optRegion7,
            optRelease2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ROLLOUT",
            description:
              "ID of the rollout or fully qualified identifier for the rollout",
          },
        },
        {
          name: "approve",
          description:
            'Approves a rollout having an Approval state of "Required"',
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDeliveryPipeline3,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optOverrideDeployPolicies,
            optProject,
            optQuiet,
            optRegion7,
            optRelease2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ROLLOUT",
            description:
              "ID of the rollout or fully qualified identifier for the rollout",
          },
        },
        {
          name: "cancel",
          description: "Cancel a Rollout",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDeliveryPipeline3,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optOverrideDeployPolicies,
            optProject,
            optQuiet,
            optRegion7,
            optRelease2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ROLLOUT",
            description:
              "ID of the rollout or fully qualified identifier for the rollout",
          },
        },
        {
          name: "describe",
          description: "Show details for a rollout",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDeliveryPipeline4,
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
              description: "Location of the rollout",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optRelease,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ROLLOUT",
            description:
              "ID of the rollout or fully qualified identifier for the rollout",
          },
        },
        {
          name: "ignore-job",
          description:
            "Ignores a specified job and phase combination on a rollout",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDeliveryPipeline3,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--job-id",
              description: "Job ID on a rollout resource",
              priority: 100,
              args: {
                name: "JOB_ID",
                description: "String",
              },
            },
            optLogHttp,
            optOverrideDeployPolicies,
            {
              name: "--phase-id",
              description: "Phase ID on a rollout resource",
              priority: 100,
              args: {
                name: "PHASE_ID",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optRegion7,
            optRelease2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ROLLOUT",
            description:
              "ID of the rollout or fully qualified identifier for the rollout",
          },
        },
        {
          name: "list",
          description: "List the rollouts",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDeliveryPipeline4,
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
            {
              name: "--region",
              description: "Location of the release",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            {
              name: "--release",
              description:
                "ID of the release or fully qualified identifier for the release",
              priority: 100,
              args: {
                name: "RELEASE",
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
          name: "reject",
          description:
            'Rejects a rollout having an Approval state of "Required"',
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDeliveryPipeline3,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optOverrideDeployPolicies,
            optProject,
            optQuiet,
            optRegion7,
            optRelease2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ROLLOUT",
            description:
              "ID of the rollout or fully qualified identifier for the rollout",
          },
        },
        {
          name: "retry-job",
          description:
            "Retries a specified job, phase combination on a rollout",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDeliveryPipeline3,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--job-id",
              description: "Job ID on a rollout resource",
              priority: 100,
              args: {
                name: "JOB_ID",
                description: "String",
              },
            },
            optLogHttp,
            optOverrideDeployPolicies,
            {
              name: "--phase-id",
              description: "Phase ID on a rollout resource",
              priority: 100,
              args: {
                name: "PHASE_ID",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optRegion7,
            optRelease2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ROLLOUT",
            description:
              "ID of the rollout or fully qualified identifier for the rollout",
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
      name: "targets",
      description: "Create and manage Target resources for Cloud Deploy",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding for a Cloud Deploy target",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCondition,
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
            optMember,
            optProject,
            optQuiet,
            optRegion5,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TARGET",
            description:
              "ID of the target or fully qualified identifier for the target",
          },
        },
        {
          name: "delete",
          description: "Deletes a Cloud Deploy target",
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
            optRegion8,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TARGET",
            description:
              "ID of the target or fully qualified identifier for the target",
          },
        },
        {
          name: "describe",
          description:
            "Describes details specific to the individual target, delivery pipeline qualified",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDeliveryPipeline4,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--list-all-pipelines",
              description:
                "List all Delivery Pipelines associated with a target",
            },
            optLogHttp,
            {
              name: "--no-list-all-pipelines",
              description:
                "List all Delivery Pipelines associated with a target",
              hidden: true,
            },
            {
              name: "--no-skip-pipeline-lookup",
              description:
                "If set, skip fetching details of associated pipelines when describing a target",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion8,
            {
              name: "--skip-pipeline-lookup",
              description:
                "If set, skip fetching details of associated pipelines when describing a target",
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TARGET",
            description:
              "ID of the target or fully qualified identifier for the target",
          },
        },
        {
          name: "export",
          description: "Returns the .yaml definition of the specified target",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDestination,
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
            optRegion8,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TARGET",
            description:
              "ID of the target or fully qualified identifier for the target",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Deploy target",
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
            optRegion5,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TARGET",
            description:
              "ID of the target or fully qualified identifier for the target",
          },
        },
        {
          name: "list",
          description: "List Cloud Deploy targets",
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
            optRegion,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "redeploy",
          description: "Redeploy the last release to a target",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--annotations",
              description:
                "Annotations to apply to the rollout. Annotations take the form of key/value string pairs",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--delivery-pipeline",
              description: "The name of the Cloud Deploy delivery pipeline",
              priority: 100,
              args: {
                name: "DELIVERY_PIPELINE",
                description: "String",
              },
            },
            {
              name: "--description",
              description: "Description of rollout created during a rollback",
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
                "Labels to apply to the rollout. Labels take the form of key/value string pairs",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optLogHttp,
            optOverrideDeployPolicies,
            optProject,
            optQuiet,
            optRegion8,
            optRolloutId,
            optStartingPhaseId,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TARGET",
            description:
              "ID of the target or fully qualified identifier for the target",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove an IAM policy binding for a Cloud Deploy target",
          options: [
            optAccessTokenFile,
            optAccount,
            optAll,
            optBillingProject,
            optCondition2,
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
            optMember2,
            optNoAll,
            optProject,
            optQuiet,
            optRegion5,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TARGET",
            description:
              "ID of the target or fully qualified identifier for the target",
          },
        },
        {
          name: "rollback",
          description: "Rollbacks a target to a prior rollout",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--annotations",
              description:
                "Annotations to apply to the rollback. Annotations take the form of key/value string pairs",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--delivery-pipeline",
              description: "The name of the Cloud Deploy delivery pipeline",
              priority: 100,
              args: {
                name: "DELIVERY_PIPELINE",
                description: "String",
              },
            },
            {
              name: "--description",
              description: "Description of rollout created during a rollback",
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
                "Labels to apply to the rollback. Labels take the form of key/value string pairs",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optLogHttp,
            optOverrideDeployPolicies,
            optProject,
            optQuiet,
            optRegion8,
            {
              name: "--release",
              description: "Name of the release to rollback to",
              args: {
                name: "RELEASE",
                description: "String",
              },
            },
            optRolloutId,
            optStartingPhaseId,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TARGET",
            description:
              "ID of the target or fully qualified identifier for the target",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a Cloud Deploy target",
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
            optRegion5,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "TARGET",
              description:
                "ID of the target or fully qualified identifier for the target",
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
