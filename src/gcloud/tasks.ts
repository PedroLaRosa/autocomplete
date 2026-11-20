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
  description: "The location name",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation2: Fig.Option = {
  name: "--location",
  description:
    "The location where we want to manage the queue or task. If not specified, uses the location of the current project's App Engine app if there is an associated app",
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

const optQueue: Fig.Option = {
  name: "--queue",
  description: "The queue the task belongs to",
  priority: 100,
  args: {
    name: "QUEUE",
    description: "String",
  },
};

const optQueue2: Fig.Option = {
  name: "--queue",
  description: "The queue the task belongs to",
  args: {
    name: "QUEUE",
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
  name: "tasks",
  description: "Manage Cloud Tasks queues and tasks",
  subcommands: [
    {
      name: "buffer",
      description: "Buffers a task into a queue",
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
          description: "The location where the queue exists",
          priority: 100,
          args: {
            name: "LOCATION",
            description: "String",
          },
        },
        optLogHttp,
        optProject,
        optQueue,
        optQuiet,
        {
          name: "--task-id",
          description: "The task ID for the task being created",
          args: {
            name: "TASK_ID",
            description: "String",
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "cmek-config",
      description: "Get or change CMEK configuration for Cloud Tasks",
      subcommands: [
        {
          name: "describe",
          description:
            "Get CMEK configuration for Cloud Tasks in the specified location",
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
              description: "Google Cloud location for the KMS key",
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
        },
        {
          name: "update",
          description:
            "Enable, disable, or edit CMEK configuration for Cloud Tasks in the specified location",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--clear-kms-key",
              description:
                "Disables CMEK for Cloud Tasks in the specified location by clearing the Cloud KMS cryptokey from the Cloud Tasks project and CMEK configuration",
              priority: 100,
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
              name: "--kms-key-name",
              description:
                "Fully qualified identifier for the key or just the key ID. The latter requires that the --kms-keyring and --kms-project flags be provided too",
              priority: 100,
              args: {
                name: "KMS_KEY_NAME",
                description: "String",
              },
            },
            {
              name: "--kms-keyring",
              description: "KMS keyring of the KMS key",
              args: {
                name: "KMS_KEYRING",
                description: "String",
              },
            },
            {
              name: "--kms-project",
              description: "Google Cloud project for the KMS key",
              args: {
                name: "KMS_PROJECT",
                description: "String",
              },
            },
            {
              name: "--location",
              description: "Google Cloud location for the KMS key",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--no-clear-kms-key",
              description:
                "Disables CMEK for Cloud Tasks in the specified location by clearing the Cloud KMS cryptokey from the Cloud Tasks project and CMEK configuration",
              hidden: true,
              priority: 100,
            },
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
      name: "create-app-engine-task",
      description: "Create and add a task that targets App Engine",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        {
          name: "--body-content",
          description:
            "HTTP Body data sent to the task worker processing the task",
          args: {
            name: "BODY_CONTENT",
            description: "String",
          },
        },
        {
          name: "--body-file",
          description:
            "File containing HTTP body data sent to the task worker processing the task",
          args: {
            name: "BODY_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        optConfiguration,
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--header",
          description:
            "An HTTP request header. Header values can contain commas. This flag can be repeated. Repeated header fields will have their values overridden",
          isRepeatable: true,
          args: {
            name: "HEADER_FIELD: HEADER_VALUE",
          },
        },
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLocation2,
        optLogHttp,
        {
          name: "--method",
          description:
            'The HTTP method to use for the request. If not specified, "POST" will be used',
          args: {
            name: "METHOD",
            description: "String",
          },
        },
        optProject,
        optQueue,
        optQuiet,
        {
          name: "--relative-uri",
          description:
            'The relative URI of the request. Must begin with "/" and must be a valid HTTP relative URI. It can contain a path and query string arguments. If not specified, then the root path "/" will be used',
          args: {
            name: "RELATIVE_URI",
            description: "String",
          },
        },
        {
          name: "--routing",
          description:
            "The route to be used for this task. KEY must be at least one of: [service, version, instance]. Any missing keys will use the default",
          args: {
            name: "KEY:VALUE",
            description: "Dict",
          },
        },
        {
          name: "--schedule-time",
          description:
            'The time when the task is scheduled to be first attempted. Defaults to "now" if not specified',
          args: {
            name: "SCHEDULE_TIME",
            description: "String",
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "TASK_ID",
        description: "The task to create",
        isOptional: true,
      },
    },
    {
      name: "create-http-task",
      description: "Create and add a task that targets a HTTP endpoint",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        {
          name: "--body-content",
          description:
            "HTTP Body data sent to the task worker processing the task",
          args: {
            name: "BODY_CONTENT",
            description: "String",
          },
        },
        {
          name: "--body-file",
          description:
            "File containing HTTP body data sent to the task worker processing the task",
          args: {
            name: "BODY_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        optConfiguration,
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--header",
          description:
            "An HTTP request header. Header values can contain commas. This flag can be repeated. Repeated header fields will have their values overridden",
          isRepeatable: true,
          args: {
            name: "HEADER_FIELD: HEADER_VALUE",
          },
        },
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLocation2,
        optLogHttp,
        {
          name: "--method",
          description:
            'The HTTP method to use for the request. If not specified, "POST" will be used',
          args: {
            name: "METHOD",
            description: "String",
          },
        },
        {
          name: "--oauth-service-account-email",
          description:
            "The service account email to be used for generating an OAuth2 access token to be included in the request sent to the target when executing the task. The service account must be within the same project as the queue. The caller must have 'iam.serviceAccounts.actAs' permission for the service account",
          priority: 100,
          args: {
            name: "OAUTH_SERVICE_ACCOUNT_EMAIL",
            description: "String",
          },
        },
        {
          name: "--oauth-token-scope",
          description:
            "The scope to be used when generating an OAuth2 access token to be included in the request sent to the target when executing the task. If not specified, 'https://www.googleapis.com/auth/cloud-platform' will be used",
          args: {
            name: "OAUTH_TOKEN_SCOPE",
            description: "String",
          },
        },
        {
          name: "--oidc-service-account-email",
          description:
            "The service account email to be used for generating an OpenID Connect token to be included in the request sent to the target when executing the task. The service account must be within the same project as the queue. The caller must have 'iam.serviceAccounts.actAs' permission for the service account",
          priority: 100,
          args: {
            name: "OIDC_SERVICE_ACCOUNT_EMAIL",
            description: "String",
          },
        },
        {
          name: "--oidc-token-audience",
          description:
            "The audience to be used when generating an OpenID Connect token to be included in the request sent to the target when executing the task. If not specified, the URI specified in the target will be used",
          args: {
            name: "OIDC_TOKEN_AUDIENCE",
            description: "String",
          },
        },
        optProject,
        optQueue,
        optQuiet,
        {
          name: "--schedule-time",
          description:
            'The time when the task is scheduled to be first attempted. Defaults to "now" if not specified',
          args: {
            name: "SCHEDULE_TIME",
            description: "String",
          },
        },
        optTraceToken,
        {
          name: "--url",
          description:
            'The full URL path that the request will be sent to. This string must begin with either "http://" or "https://"',
          priority: 100,
          args: {
            name: "URL",
            description: "String",
          },
        },
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "TASK_ID",
        description: "The task to create",
        isOptional: true,
      },
    },
    {
      name: "delete",
      description: "Delete a task from a queue",
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
        optQueue2,
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "TASK",
        description: "The task to delete",
      },
    },
    {
      name: "describe",
      description: "Show details about a task",
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
        optQueue2,
        optQuiet,
        {
          name: "--response-view",
          description:
            "Task response view. _RESPONSE_VIEW_ must be one of: *basic*, *full*, *view-unspecified*",
          args: {
            name: "RESPONSE_VIEW",
            suggestions: ["basic", "full", "view-unspecified"],
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "TASK",
        description: "The task to describe",
      },
    },
    {
      name: "list",
      description: "List tasks",
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
        {
          name: "--page-size",
          description:
            "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is *25*. Paging may be applied before or after *--filter* and *--limit* depending on the service",
          args: {
            name: "PAGE_SIZE",
            description: "Int",
          },
        },
        optProject,
        {
          name: "--queue",
          description: "The queue the tasks belong to",
          priority: 100,
          args: {
            name: "QUEUE",
            description: "String",
          },
        },
        optQuiet,
        optSortBy,
        optTraceToken,
        optUri,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "locations",
      description: "Get information about Cloud Tasks locations",
      subcommands: [
        {
          name: "describe",
          description: "Show details about a location",
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
            name: "LOCATION",
            description: "The Cloud location to describe",
          },
        },
        {
          name: "list",
          description: "Lists the locations where Cloud Tasks is available",
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
      name: "queues",
      description: "Manage Cloud Tasks queues",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding for a tasks queue",
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
            name: "QUEUE",
            description:
              "ID of the queue or fully qualified identifier for the queue",
          },
        },
        {
          name: "create",
          description: "Create a Cloud Tasks queue",
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
            {
              name: "--http-header-override",
              description:
                "If provided, the specified HTTP headers override the existing headers for all tasks in the queue. If a task has a header with the same Key as a queue-level header override, then the value of the task header will be overriden with the value of the queue-level header. Otherwise, the queue-level header will be added to the task headers. Header values can contain commas. This flag can be repeated. Repeated header fields will have their values overridden",
              isRepeatable: true,
              args: {
                name: "HEADER_FIELD: HEADER_VALUE",
              },
            },
            {
              name: "--http-method-override",
              description:
                "If provided, the specified HTTP method type override is used for all tasks in the queue, no matter what is set at the task-level",
              args: {
                name: "HTTP_METHOD_OVERRIDE",
                description: "String",
              },
            },
            {
              name: "--http-oauth-service-account-email-override",
              description:
                "The service account email to be used for generating an OAuth2 access token to be included in the request sent to the target when executing the task. The service account must be within the same project as the queue. The caller must have 'iam.serviceAccounts.actAs' permission for the service account",
              priority: 100,
              args: {
                name: "HTTP_OAUTH_SERVICE_ACCOUNT_EMAIL_OVERRIDE",
                description: "String",
              },
            },
            {
              name: "--http-oauth-token-scope-override",
              description:
                "The scope to be used when generating an OAuth2 access token to be included in the request sent to the target when executing the task. If not specified, 'https://www.googleapis.com/auth/cloud-platform' will be used",
              args: {
                name: "HTTP_OAUTH_TOKEN_SCOPE_OVERRIDE",
                description: "String",
              },
            },
            {
              name: "--http-oidc-service-account-email-override",
              description:
                "The service account email to be used for generating an OpenID Connect token to be included in the request sent to the target when executing the task. The service account must be within the same project as the queue. The caller must have 'iam.serviceAccounts.actAs' permission for the service account",
              priority: 100,
              args: {
                name: "HTTP_OIDC_SERVICE_ACCOUNT_EMAIL_OVERRIDE",
                description: "String",
              },
            },
            {
              name: "--http-oidc-token-audience-override",
              description:
                "The audience to be used when generating an OpenID Connect token to be included in the request sent to the target when executing the task. If not specified, the URI specified in the target will be used",
              args: {
                name: "HTTP_OIDC_TOKEN_AUDIENCE_OVERRIDE",
                description: "String",
              },
            },
            {
              name: "--http-uri-override",
              description:
                "If provided, the specified HTTP target URI override is used for all tasks in the queue depending on what is set as the mode. Allowed values for mode are: ALWAYS, IF_NOT_EXISTS. If not set, mode defaults to ALWAYS",
              args: {
                name: "KEY:VALUE",
                description: "Dict",
              },
            },
            optImpersonateServiceAccount,
            optLocation2,
            optLogHttp,
            {
              name: "--log-sampling-ratio",
              description:
                "Specifies the fraction of operations to write to Cloud Logging. This field may contain any value between 0.0 and 1.0, inclusive. 0.0 is the default and means that no operations are logged",
              args: {
                name: "LOG_SAMPLING_RATIO",
                description: "Float",
              },
            },
            {
              name: "--max-attempts",
              description:
                "The maximum number of attempts per task in the queue",
              args: {
                name: "MAX_ATTEMPTS",
              },
            },
            {
              name: "--max-backoff",
              description:
                "The maximum amount of time to wait before retrying a task after it fails. Must be a string that ends in 's', such as \"5s\"",
              args: {
                name: "MAX_BACKOFF",
                description: "String",
              },
            },
            {
              name: "--max-concurrent-dispatches",
              description:
                "The maximum number of concurrent tasks that Cloud Tasks allows to be dispatched for this queue. After this threshold has been reached, Cloud Tasks stops dispatching tasks until the number of outstanding requests decreases",
              args: {
                name: "MAX_CONCURRENT_DISPATCHES",
                description: "Int",
              },
            },
            {
              name: "--max-dispatches-per-second",
              description:
                "The maximum rate at which tasks are dispatched from this queue",
              args: {
                name: "MAX_DISPATCHES_PER_SECOND",
                description: "Float",
              },
            },
            {
              name: "--max-doublings",
              description:
                "The time between retries will double maxDoublings times",
              args: {
                name: "MAX_DOUBLINGS",
                description: "Int",
              },
            },
            {
              name: "--max-retry-duration",
              description:
                "The time limit for retrying a failed task, measured from when the task was first run. Once the `--max-retry-duration` time has passed and the task has been attempted --max-attempts times, no further attempts will be made and the task will be deleted",
              args: {
                name: "MAX_RETRY_DURATION",
                description: "String",
              },
            },
            {
              name: "--min-backoff",
              description:
                "The minimum amount of time to wait before retrying a task after it fails. Must be a string that ends in 's', such as \"5s\"",
              args: {
                name: "MIN_BACKOFF",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--routing-override",
              description:
                "If provided, the specified App Engine route is used for all tasks in the queue, no matter what is set is at the task-level",
              args: {
                name: "KEY:VALUE",
                description: "Dict",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "QUEUE",
            description: "The queue to create",
          },
        },
        {
          name: "delete",
          description: "Delete a queue",
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
            name: "QUEUE",
            description: "The queue to delete",
          },
        },
        {
          name: "describe",
          description: "Show details about a queue",
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
            name: "QUEUE",
            description: "The queue to describe",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a queue",
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
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "QUEUE",
            description:
              "ID of the queue or fully qualified identifier for the queue",
          },
        },
        {
          name: "list",
          description: "List all queues",
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
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "pause",
          description: "Pause a queue",
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
            name: "QUEUE",
            description: "The queue to pause",
          },
        },
        {
          name: "purge",
          description: "Purge a queue by deleting all of its tasks",
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
            name: "QUEUE",
            description: "The queue to purge",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding of tasks queue",
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
            name: "QUEUE",
            description:
              "ID of the queue or fully qualified identifier for the queue",
          },
        },
        {
          name: "resume",
          description: "Request to resume a paused or disabled queue",
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
            name: "QUEUE",
            description: "The queue to resume",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a queue",
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
          args: [
            {
              name: "QUEUE",
              description:
                "ID of the queue or fully qualified identifier for the queue",
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
          description: "Update a Cloud Tasks queue",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--clear-http-header-override",
              description:
                "Clear the field corresponding to `--http-header-override`",
            },
            {
              name: "--clear-http-method-override",
              description:
                "Clear the field corresponding to `--http-method-override`",
            },
            {
              name: "--clear-http-oauth-service-account-email-override",
              description:
                "Clear the field corresponding to `--http-oauth-service-account-email-override`",
            },
            {
              name: "--clear-http-oauth-token-scope-override",
              description:
                "Clear the field corresponding to `--http-oauth-token-scope-override`",
            },
            {
              name: "--clear-http-oidc-service-account-email-override",
              description:
                "Clear the field corresponding to `--http-oidc-service-account-email-override`",
            },
            {
              name: "--clear-http-oidc-token-audience-override",
              description:
                "Clear the field corresponding to `--http-oidc-token-audience-override`",
            },
            {
              name: "--clear-http-uri-override",
              description:
                "Clear the field corresponding to `--http-uri-override`",
            },
            {
              name: "--clear-log-sampling-ratio",
              description:
                "Clear the field corresponding to `--log-sampling-ratio`",
            },
            {
              name: "--clear-max-attempts",
              description: "Clear the field corresponding to `--max-attempts`",
            },
            {
              name: "--clear-max-backoff",
              description: "Clear the field corresponding to `--max-backoff`",
            },
            {
              name: "--clear-max-concurrent-dispatches",
              description:
                "Clear the field corresponding to `--max-concurrent-dispatches`",
            },
            {
              name: "--clear-max-dispatches-per-second",
              description:
                "Clear the field corresponding to `--max-dispatches-per-second`",
            },
            {
              name: "--clear-max-doublings",
              description: "Clear the field corresponding to `--max-doublings`",
            },
            {
              name: "--clear-max-retry-duration",
              description:
                "Clear the field corresponding to `--max-retry-duration`",
            },
            {
              name: "--clear-min-backoff",
              description: "Clear the field corresponding to `--min-backoff`",
            },
            {
              name: "--clear-routing-override",
              description:
                "Clear the field corresponding to `--routing-override`",
            },
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--http-header-override",
              description:
                "If provided, the specified HTTP headers override the existing headers for all tasks in the queue. If a task has a header with the same Key as a queue-level header override, then the value of the task header will be overriden with the value of the queue-level header. Otherwise, the queue-level header will be added to the task headers. Header values can contain commas. This flag can be repeated. Repeated header fields will have their values overridden",
              isRepeatable: true,
              args: {
                name: "HEADER_FIELD: HEADER_VALUE",
              },
            },
            {
              name: "--http-method-override",
              description:
                "If provided, the specified HTTP method type override is used for all tasks in the queue, no matter what is set at the task-level",
              args: {
                name: "HTTP_METHOD_OVERRIDE",
                description: "String",
              },
            },
            {
              name: "--http-oauth-service-account-email-override",
              description:
                "The service account email to be used for generating an OAuth2 access token to be included in the request sent to the target when executing the task. The service account must be within the same project as the queue. The caller must have 'iam.serviceAccounts.actAs' permission for the service account",
              args: {
                name: "HTTP_OAUTH_SERVICE_ACCOUNT_EMAIL_OVERRIDE",
                description: "String",
              },
            },
            {
              name: "--http-oauth-token-scope-override",
              description:
                "The scope to be used when generating an OAuth2 access token to be included in the request sent to the target when executing the task. If not specified, 'https://www.googleapis.com/auth/cloud-platform' will be used",
              args: {
                name: "HTTP_OAUTH_TOKEN_SCOPE_OVERRIDE",
                description: "String",
              },
            },
            {
              name: "--http-oidc-service-account-email-override",
              description:
                "The service account email to be used for generating an OpenID Connect token to be included in the request sent to the target when executing the task. The service account must be within the same project as the queue. The caller must have 'iam.serviceAccounts.actAs' permission for the service account",
              args: {
                name: "HTTP_OIDC_SERVICE_ACCOUNT_EMAIL_OVERRIDE",
                description: "String",
              },
            },
            {
              name: "--http-oidc-token-audience-override",
              description:
                "The audience to be used when generating an OpenID Connect token to be included in the request sent to the target when executing the task. If not specified, the URI specified in the target will be used",
              args: {
                name: "HTTP_OIDC_TOKEN_AUDIENCE_OVERRIDE",
                description: "String",
              },
            },
            {
              name: "--http-uri-override",
              description:
                "If provided, the specified HTTP target URI override is used for all tasks in the queue depending on what is set as the mode. Allowed values for mode are: ALWAYS, IF_NOT_EXISTS. If not set, mode defaults to ALWAYS",
              args: {
                name: "KEY:VALUE",
                description: "Dict",
              },
            },
            optImpersonateServiceAccount,
            optLocation2,
            optLogHttp,
            {
              name: "--log-sampling-ratio",
              description:
                "Specifies the fraction of operations to write to Cloud Logging. This field may contain any value between 0.0 and 1.0, inclusive. 0.0 is the default and means that no operations are logged",
              args: {
                name: "LOG_SAMPLING_RATIO",
                description: "Float",
              },
            },
            {
              name: "--max-attempts",
              description:
                "The maximum number of attempts per task in the queue",
              args: {
                name: "MAX_ATTEMPTS",
              },
            },
            {
              name: "--max-backoff",
              description:
                "The maximum amount of time to wait before retrying a task after it fails. Must be a string that ends in 's', such as \"5s\"",
              args: {
                name: "MAX_BACKOFF",
                description: "String",
              },
            },
            {
              name: "--max-concurrent-dispatches",
              description:
                "The maximum number of concurrent tasks that Cloud Tasks allows to be dispatched for this queue. After this threshold has been reached, Cloud Tasks stops dispatching tasks until the number of outstanding requests decreases",
              args: {
                name: "MAX_CONCURRENT_DISPATCHES",
                description: "Int",
              },
            },
            {
              name: "--max-dispatches-per-second",
              description:
                "The maximum rate at which tasks are dispatched from this queue",
              args: {
                name: "MAX_DISPATCHES_PER_SECOND",
                description: "Float",
              },
            },
            {
              name: "--max-doublings",
              description:
                "The time between retries will double maxDoublings times",
              args: {
                name: "MAX_DOUBLINGS",
                description: "Int",
              },
            },
            {
              name: "--max-retry-duration",
              description:
                "The time limit for retrying a failed task, measured from when the task was first run. Once the `--max-retry-duration` time has passed and the task has been attempted --max-attempts times, no further attempts will be made and the task will be deleted",
              args: {
                name: "MAX_RETRY_DURATION",
                description: "String",
              },
            },
            {
              name: "--min-backoff",
              description:
                "The minimum amount of time to wait before retrying a task after it fails. Must be a string that ends in 's', such as \"5s\"",
              args: {
                name: "MIN_BACKOFF",
                description: "String",
              },
            },
            {
              name: "--no-clear-http-header-override",
              description:
                "Clear the field corresponding to `--http-header-override`",
              hidden: true,
            },
            {
              name: "--no-clear-http-method-override",
              description:
                "Clear the field corresponding to `--http-method-override`",
              hidden: true,
            },
            {
              name: "--no-clear-http-oauth-service-account-email-override",
              description:
                "Clear the field corresponding to `--http-oauth-service-account-email-override`",
              hidden: true,
            },
            {
              name: "--no-clear-http-oauth-token-scope-override",
              description:
                "Clear the field corresponding to `--http-oauth-token-scope-override`",
              hidden: true,
            },
            {
              name: "--no-clear-http-oidc-service-account-email-override",
              description:
                "Clear the field corresponding to `--http-oidc-service-account-email-override`",
              hidden: true,
            },
            {
              name: "--no-clear-http-oidc-token-audience-override",
              description:
                "Clear the field corresponding to `--http-oidc-token-audience-override`",
              hidden: true,
            },
            {
              name: "--no-clear-http-uri-override",
              description:
                "Clear the field corresponding to `--http-uri-override`",
              hidden: true,
            },
            {
              name: "--no-clear-log-sampling-ratio",
              description:
                "Clear the field corresponding to `--log-sampling-ratio`",
              hidden: true,
            },
            {
              name: "--no-clear-max-attempts",
              description: "Clear the field corresponding to `--max-attempts`",
              hidden: true,
            },
            {
              name: "--no-clear-max-backoff",
              description: "Clear the field corresponding to `--max-backoff`",
              hidden: true,
            },
            {
              name: "--no-clear-max-concurrent-dispatches",
              description:
                "Clear the field corresponding to `--max-concurrent-dispatches`",
              hidden: true,
            },
            {
              name: "--no-clear-max-dispatches-per-second",
              description:
                "Clear the field corresponding to `--max-dispatches-per-second`",
              hidden: true,
            },
            {
              name: "--no-clear-max-doublings",
              description: "Clear the field corresponding to `--max-doublings`",
              hidden: true,
            },
            {
              name: "--no-clear-max-retry-duration",
              description:
                "Clear the field corresponding to `--max-retry-duration`",
              hidden: true,
            },
            {
              name: "--no-clear-min-backoff",
              description: "Clear the field corresponding to `--min-backoff`",
              hidden: true,
            },
            {
              name: "--no-clear-routing-override",
              description:
                "Clear the field corresponding to `--routing-override`",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--routing-override",
              description:
                "If provided, the specified App Engine route is used for all tasks in the queue, no matter what is set is at the task-level",
              args: {
                name: "KEY:VALUE",
                description: "Dict",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "QUEUE",
            description: "The queue to update",
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
      name: "run",
      description: "Force a task to run now",
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
        optQueue2,
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "TASK",
        description: "The task to run",
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
