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
  name: "projects",
  description: "Create and manage project access policies",
  subcommands: [
    {
      name: "add-iam-policy-binding",
      description: "Add IAM policy binding for a project",
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
        {
          name: "--condition-from-file",
          description:
            "Path to a local JSON or YAML file that defines the condition. To see available fields, see the help for `--condition`. Use a full or relative path to a local file containing the value of condition",
          args: {
            name: "CONDITION_FROM_FILE",
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
        name: "PROJECT_ID",
        description:
          "ID of the project or fully qualified identifier for the project",
      },
    },
    {
      name: "create",
      description: "Create a new project",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        {
          name: "--enable-cloud-apis",
          description:
            "Enable `cloudapis.googleapis.com` during creation. Enabled by default, use *--no-enable-cloud-apis* to disable",
        },
        optFlagsFile,
        optFlatten,
        {
          name: "--folder",
          description: "ID for the folder to use as a parent",
          args: {
            name: "FOLDER_ID",
            description: "String",
          },
        },
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        {
          name: "--labels",
          description: "List of label KEY=VALUE pairs to add",
          args: {
            name: "KEY=VALUE",
            description: "Dict",
          },
        },
        optLogHttp,
        {
          name: "--name",
          description:
            "Name for the project you want to create. If not specified, will use project id as name",
          args: {
            name: "NAME",
            description: "String",
          },
        },
        {
          name: "--no-enable-cloud-apis",
          description: "Enable `cloudapis.googleapis.com` during creation",
          hidden: true,
        },
        {
          name: "--no-set-as-default",
          description: "Set newly created project as [core/project] property",
          hidden: true,
        },
        {
          name: "--organization",
          description: "ID for the organization to use as a parent",
          args: {
            name: "ORGANIZATION_ID",
            description: "String",
          },
        },
        optProject,
        optQuiet,
        {
          name: "--set-as-default",
          description: "Set newly created project as [core/project] property",
        },
        {
          name: "--tags",
          description:
            "List of tags KEY=VALUE pairs to bind. Each item must be expressed as `<tag-key-namespaced-name>=<tag-value-short-name>`",
          args: {
            name: "KEY=VALUE",
            description: "Dict",
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "PROJECT_ID",
        description: "ID for the project you want to create",
        isOptional: true,
      },
    },
    {
      name: "delete",
      description: "Delete a project",
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
        name: "PROJECT_ID_OR_NUMBER",
        description: "ID or number for the project you want to delete",
      },
    },
    {
      name: "describe",
      description: "Show metadata for a project",
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
        name: "PROJECT_ID_OR_NUMBER",
        description: "ID or number for the project you want to describe",
      },
    },
    {
      name: "get-ancestors",
      description: "Get the ancestors for a project",
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
        description:
          "ID of the project or fully qualified identifier for the project",
      },
    },
    {
      name: "get-ancestors-iam-policy",
      description: "Get IAM policies for a project and its ancestors",
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
        {
          name: "--include-deny",
          description:
            "Include deny policies on the project and its ancestors in the result",
        },
        optLimit,
        optLogHttp,
        {
          name: "--no-include-deny",
          description:
            "Include deny policies on the project and its ancestors in the result",
          hidden: true,
        },
        optPageSize,
        optProject,
        optQuiet,
        optSortBy,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "PROJECT_ID",
        description:
          "ID of the project or fully qualified identifier for the project",
      },
    },
    {
      name: "get-iam-policy",
      description: "Get IAM policy for a project",
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
        name: "PROJECT_ID_OR_NUMBER",
        description:
          "ID or number for the project you want to get IAM policy for",
      },
    },
    {
      name: "list",
      description: "List projects accessible by the active account",
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
      description: "Remove IAM policy binding for a project",
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
        {
          name: "--condition-from-file",
          description:
            "Path to a local JSON or YAML file that defines the condition. To see available fields, see the help for `--condition`. Use a full or relative path to a local file containing the value of condition",
          args: {
            name: "CONDITION_FROM_FILE",
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
        name: "PROJECT_ID",
        description:
          "ID of the project or fully qualified identifier for the project",
      },
    },
    {
      name: "set-iam-policy",
      description: "Set IAM policy for a project",
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
          name: "PROJECT_ID_OR_NUMBER",
          description:
            "ID or number for the project you want to set IAM policy for",
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
      name: "undelete",
      description: "Undelete a project",
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
        name: "PROJECT_ID_OR_NUMBER",
        description: "ID or number for the project you want to undelete",
      },
    },
    {
      name: "update",
      description: "Update the name of a project",
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
          name: "--name",
          description: "New name for the project",
          priority: 100,
          args: {
            name: "NAME",
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
        name: "PROJECT_ID",
        description: "ID for the project you want to update",
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
