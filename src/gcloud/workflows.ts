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

const optLabels: Fig.Option = {
  name: "--labels",
  description: "List of label KEY=VALUE pairs to add",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
  },
};

const optLocation: Fig.Option = {
  name: "--location",
  description:
    "The Cloud location for the workflow. Alternatively, set the property [workflows/location]",
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
  name: "workflows",
  description: "Manage your Cloud Workflows resources",
  subcommands: [
    {
      name: "delete",
      description: "Delete a workflow",
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
          name: "--no-async",
          description:
            "Return immediately, without waiting for the operation in progress to complete",
          hidden: true,
        },
        optProject,
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "WORKFLOW",
        description:
          "ID of the workflow or fully qualified identifier for the workflow",
      },
    },
    {
      name: "deploy",
      description: "Create or update a workflow",
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
          name: "--call-log-level",
          description:
            "Level of call logging to apply by default for the workflow. _CALL_LOG_LEVEL_ must be one of:",
          args: {
            name: "CALL_LOG_LEVEL",
            suggestions: [
              "log-all-calls",
              "log-errors-only",
              "log-none",
              "none",
            ],
          },
        },
        {
          name: "--clear-env-vars",
          description:
            "Clears all user-defined environment variables previously set for the workflow",
        },
        {
          name: "--clear-kms-key",
          description:
            "Creates the new Workflow Revision and its associated Executions without the KMS key specified on the previous revision",
          hidden: true,
        },
        optConfiguration,
        {
          name: "--description",
          description: "The description of the workflow to deploy",
          args: {
            name: "DESCRIPTION",
            description: "String",
          },
        },
        {
          name: "--env-vars-file",
          description:
            "Sets environment variables for the workflow to those stored in a local YAML file at the given path. All existing environment variables are removed before the new environment variables are added",
          args: {
            name: "FILE_PATH",
            template: "filepaths",
          },
        },
        {
          name: "--execution-history-level",
          description:
            "Level of execution history to apply for the workflow. _EXECUTION_HISTORY_LEVEL_ must be one of:",
          args: {
            name: "EXECUTION_HISTORY_LEVEL",
            suggestions: [
              "execution-history-basic",
              "execution-history-detailed",
              "none",
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
        {
          name: "--kms-key",
          description:
            "Sets the user managed KMS crypto key used to encrypt the new Workflow Revision and the Executions associated with it",
          hidden: true,
          args: {
            name: "KMS_KEY",
          },
        },
        optLabels,
        {
          name: "--location",
          description:
            "Cloud location for the workflow. Alternatively, set the property [workflows/location]",
          args: {
            name: "LOCATION",
            description: "String",
          },
        },
        optLogHttp,
        {
          name: "--no-async",
          description:
            "Return immediately, without waiting for the operation in progress to complete",
          hidden: true,
        },
        {
          name: "--no-clear-env-vars",
          description:
            "Clears all user-defined environment variables previously set for the workflow",
          hidden: true,
        },
        {
          name: "--no-clear-kms-key",
          description:
            "Creates the new Workflow Revision and its associated Executions without the KMS key specified on the previous revision",
          hidden: true,
        },
        optProject,
        optQuiet,
        {
          name: "--remove-env-vars",
          description:
            "Removes user-defined environment variables from a workflow based on a list of environment variable keys to be removed",
          args: {
            name: "KEY",
            description: "List",
          },
        },
        {
          name: "--service-account",
          description:
            'The service account that should be used as the workflow identity. "projects/PROJECT_ID/serviceAccounts/" prefix may be skipped from the full resource name, in that case "projects/-/serviceAccounts/" is prepended to the service account ID',
          args: {
            name: "SERVICE_ACCOUNT",
            description: "String",
          },
        },
        {
          name: "--set-env-vars",
          description:
            "Sets environment variables for the workflow based on a comma-separated list of key-value pairs. Will overwrite a workflow's existing environment variables",
          args: {
            name: "KEY=VALUE",
            description: "Dict",
          },
        },
        {
          name: "--source",
          description:
            "Location of a workflow source code to deploy. Required on first deployment. Location needs to be defined as a path to a local file with the source code",
          args: {
            name: "SOURCE",
            description: "String",
          },
        },
        {
          name: "--tags",
          description:
            'List of tags KEY=VALUE pairs to bind. Each item must be expressed as "<tag-key-namespaced-name>=<tag-value-short-name>"',
          args: {
            name: "KEY=VALUE",
            description: "Dict",
          },
        },
        optTraceToken,
        {
          name: "--update-env-vars",
          description:
            "Updates existing or adds new user-defined environment variables based on a comma-separated list of key-value pairs",
          args: {
            name: "KEY=VALUE",
            description: "Dict",
          },
        },
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "WORKFLOW",
        description:
          "ID of the workflow or fully qualified identifier for the workflow",
      },
    },
    {
      name: "describe",
      description: "Show metadata for a workflow",
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
        {
          name: "--revision-id",
          description: "The revision ID of the workflow to describe",
          args: {
            name: "REVISION_ID",
            description: "String",
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "WORKFLOW",
        description:
          "ID of the workflow or fully qualified identifier for the workflow",
      },
    },
    {
      name: "execute",
      description: "Execute a workflow",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        {
          name: "--call-log-level",
          description:
            "Level of call logging to apply during execution. _CALL_LOG_LEVEL_ must be one of:",
          args: {
            name: "CALL_LOG_LEVEL",
            suggestions: [
              "log-all-calls",
              "log-errors-only",
              "log-none",
              "none",
            ],
          },
        },
        optConfiguration,
        {
          name: "--data",
          description:
            "JSON string with data that will be passed to the workflow as an argument",
          args: {
            name: "DATA",
            description: "String",
          },
        },
        {
          name: "--disable-concurrency-quota-overflow-buffering",
          description:
            "If set, the execution will not be backlogged when the concurrency quota is exhausted. Backlogged executions start when the concurrency quota becomes available",
        },
        {
          name: "--execution-history-level",
          description:
            "Level of execution history to apply during execution. _EXECUTION_HISTORY_LEVEL_ must be one of:",
          args: {
            name: "EXECUTION_HISTORY_LEVEL",
            suggestions: [
              "execution-history-basic",
              "execution-history-detailed",
              "none",
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
        optLabels,
        optLocation,
        optLogHttp,
        {
          name: "--no-disable-concurrency-quota-overflow-buffering",
          description:
            "If set, the execution will not be backlogged when the concurrency quota is exhausted. Backlogged executions start when the concurrency quota becomes available",
          hidden: true,
        },
        optProject,
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "WORKFLOW",
        description:
          "ID of the workflow or fully qualified identifier for the workflow",
      },
    },
    {
      name: "executions",
      description: "Manage your Cloud Workflow execution resources",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a workflow execution",
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
                "The Cloud location for the execution. Alternatively, set the property [workflows/location]",
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
            {
              name: "--workflow",
              description: "The Cloud Workflow for the execution",
              args: {
                name: "WORKFLOW",
                description: "String",
              },
            },
          ],
          args: {
            name: "EXECUTION",
            description:
              "ID of the execution or fully qualified identifier for the execution",
          },
        },
        {
          name: "describe",
          description: "Show metadata for a workflow execution",
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
                "The Cloud location for the execution. Alternatively, set the property [workflows/location]",
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
            {
              name: "--workflow",
              description: "The Cloud Workflow for the execution",
              args: {
                name: "WORKFLOW",
                description: "String",
              },
            },
          ],
          args: {
            name: "EXECUTION",
            description:
              "ID of the execution or fully qualified identifier for the execution",
          },
        },
        {
          name: "describe-last",
          description: "Show metadata for the last cached workflow execution",
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
          description: "List workflow executions",
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
            optLocation,
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
          args: {
            name: "WORKFLOW",
            description:
              "ID of the workflow or fully qualified identifier for the workflow",
          },
        },
        {
          name: "wait",
          description: "Wait for an execution to complete",
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
                "Cloud location for the execution. Alternatively, set the property [workflows/location]",
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
            {
              name: "--workflow",
              description: "Workflow for the execution",
              args: {
                name: "WORKFLOW",
                description: "String",
              },
            },
          ],
          args: {
            name: "EXECUTION",
            description:
              "ID of the execution or fully qualified identifier for the execution",
          },
        },
        {
          name: "wait-last",
          description:
            "Wait for the last cached workflow execution to complete",
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
      name: "list",
      description: "List workflows",
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
      name: "run",
      description: "Execute a workflow and wait for the execution to complete",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        {
          name: "--call-log-level",
          description:
            "Level of call logging to apply during execution. _CALL_LOG_LEVEL_ must be one of:",
          args: {
            name: "CALL_LOG_LEVEL",
            suggestions: [
              "log-all-calls",
              "log-errors-only",
              "log-none",
              "none",
            ],
          },
        },
        optConfiguration,
        {
          name: "--data",
          description:
            "JSON string with data that will be passed to the workflow as an argument",
          args: {
            name: "DATA",
            description: "String",
          },
        },
        {
          name: "--disable-concurrency-quota-overflow-buffering",
          description:
            "If set, the execution will not be backlogged when the concurrency quota is exhausted. Backlogged executions start when the concurrency quota becomes available",
        },
        {
          name: "--execution-history-level",
          description:
            "Level of execution history to apply during execution. _EXECUTION_HISTORY_LEVEL_ must be one of:",
          args: {
            name: "EXECUTION_HISTORY_LEVEL",
            suggestions: [
              "execution-history-basic",
              "execution-history-detailed",
              "none",
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
        optLabels,
        {
          name: "--location",
          description:
            "Cloud location for the workflow. Alternatively, set the property [workflows/location]",
          args: {
            name: "LOCATION",
            description: "String",
          },
        },
        optLogHttp,
        {
          name: "--no-disable-concurrency-quota-overflow-buffering",
          description:
            "If set, the execution will not be backlogged when the concurrency quota is exhausted. Backlogged executions start when the concurrency quota becomes available",
          hidden: true,
        },
        optProject,
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "WORKFLOW",
        description:
          "ID of the workflow or fully qualified identifier for the workflow",
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
};

export default completionSpec;
