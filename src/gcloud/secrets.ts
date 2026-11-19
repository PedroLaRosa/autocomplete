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

const optSecret: Fig.Option = {
  name: "--secret",
  description: "The secret of the version",
  args: {
    name: "SECRET",
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
  name: "secrets",
  description: "Manage secrets on Google Cloud",
  subcommands: [
    {
      name: "add-iam-policy-binding",
      description: "Add IAM policy binding to a secret",
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
        name: "SECRET",
        description:
          "ID of the secret or fully qualified identifier for the secret",
      },
    },
    {
      name: "create",
      description: "Create a new secret",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        {
          name: "--data-file",
          description:
            'File path from which to read secret data. Set this to "-" to read the secret data from stdin',
          args: {
            name: "PATH",
            description: "String",
          },
        },
        {
          name: "--expire-time",
          description: "Timestamp at which to automatically delete the secret",
          args: {
            name: "EXPIRE-TIME",
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
          name: "--kms-key-name",
          description:
            "Global KMS key with which to encrypt and decrypt the secret. Only valid for secrets with an automatic replication policy",
          args: {
            name: "KMS-KEY-NAME",
            description: "String",
          },
        },
        {
          name: "--labels",
          description: "List of label KEY=VALUE pairs to add",
          args: {
            name: "KEY=VALUE",
            description: "Dict",
          },
        },
        optLocation,
        {
          name: "--locations",
          description:
            "Comma-separated list of locations in which the secret should be replicated",
          args: {
            name: "LOCATION",
            description: "List",
          },
        },
        optLogHttp,
        {
          name: "--next-rotation-time",
          description: "Timestamp at which to send rotation notification",
          args: {
            name: "NEXT_ROTATION_TIME",
            description: "String",
          },
        },
        optProject,
        optQuiet,
        {
          name: "--regional-kms-key-name",
          description:
            "Regional KMS key with which to encrypt and decrypt the secret. Only valid for regional secrets",
          args: {
            name: "KMS-KEY-NAME",
            description: "String",
          },
        },
        {
          name: "--replication-policy",
          description:
            'The type of replication policy to apply to this secret. Allowed values are "automatic" and "user-managed". If user-managed then --locations must also be provided',
          args: {
            name: "POLICY",
            description: "String",
          },
        },
        {
          name: "--replication-policy-file",
          description:
            'JSON or YAML file to use to read the replication policy. The file must conform to https://cloud.google.com/secret-manager/docs/reference/rest/v1/projects.secrets#replication.Set this to "-" to read from stdin',
          args: {
            name: "REPLICATION-POLICY-FILE",
            description: "String",
            template: "filepaths",
          },
        },
        {
          name: "--rotation-period",
          description:
            "Duration of time (in seconds) between rotation notifications",
          args: {
            name: "ROTATION_PERIOD",
            description: "String",
          },
        },
        {
          name: "--set-annotations",
          description:
            "List of key-value pairs to set as Annotations. All existing Annotations will be removed first",
          args: {
            name: "KEY=VALUE",
            description: "Dict",
          },
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
        {
          name: "--topics",
          description: "List of Pub/Sub topics to configure on the secret",
          args: {
            name: "TOPICS",
            description: "List",
          },
        },
        optTraceToken,
        {
          name: "--ttl",
          description:
            "Duration of time (in seconds) from the running of the command until the secret is automatically deleted",
          args: {
            name: "TTL",
            description: "String",
          },
        },
        optUserOutputEnabled,
        optVerbosity,
        {
          name: "--version-destroy-ttl",
          description:
            "Secret Version Time To Live (TTL) after destruction request. For secret with TTL>0, version destruction does not happen immediately on calling destroy; instead, the version goes to a disabled state and destruction happens after the TTL expires. See `$ gcloud topic datetimes` for information on duration formats",
          args: {
            name: "VERSION-DESTROY-TTL",
          },
        },
      ],
      args: {
        name: "SECRET",
        description:
          "ID of the secret or fully qualified identifier for the secret",
      },
    },
    {
      name: "delete",
      description: "Delete a secret",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        {
          name: "--etag",
          description:
            "Current entity tag (ETag) of the secret. If specified, the secret is deleted only if the ETag provided matches the current secret's ETag",
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
        optLocation,
        optLogHttp,
        optProject,
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "SECRET",
        description:
          "ID of the secret or fully qualified identifier for the secret",
      },
    },
    {
      name: "describe",
      description: "Describe a secret's metadata",
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
        name: "SECRET",
        description:
          "ID of the secret or fully qualified identifier for the secret",
      },
    },
    {
      name: "get-iam-policy",
      description: "Get the IAM policy for the secret",
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
        optSortBy,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "SECRET",
        description:
          "ID of the secret or fully qualified identifier for the secret",
      },
    },
    {
      name: "list",
      description: "List all secret names",
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
        {
          name: "--page-size",
          description:
            "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is *100*. Paging may be applied before or after *--filter* and *--limit* depending on the service",
          args: {
            name: "PAGE_SIZE",
            description: "Int",
          },
        },
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
      name: "locations",
      description: "Manage locations of users' secrets",
      subcommands: [
        {
          name: "describe",
          description: "Describe a location",
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
            description:
              "ID of the location or fully qualified identifier for the location",
          },
        },
        {
          name: "list",
          description: "List all available locations",
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
      name: "remove-iam-policy-binding",
      description: "Remove IAM policy binding for a secret",
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
        name: "SECRET",
        description:
          "ID of the secret or fully qualified identifier for the secret",
      },
    },
    {
      name: "replication",
      description: "Manage secret replication",
      subcommands: [
        {
          name: "get",
          description: "Describe a secret's replication",
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
            name: "SECRET",
            description:
              "ID of the secret or fully qualified identifier for the secret",
          },
        },
        {
          name: "set",
          description: "Set a secret's replication",
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
              name: "--replication-policy-file",
              description:
                'JSON or YAML file to use to read the replication policy. The file must conform to https://cloud.google.com/secret-manager/docs/reference/rest/v1/projects.secrets#replication.Set this to "-" to read from stdin',
              priority: 100,
              args: {
                name: "REPLICATION-POLICY-FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SECRET",
            description:
              "ID of the secret or fully qualified identifier for the secret",
          },
        },
        {
          name: "update",
          description: "Update a secret replica's metadata",
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
                "Location of replica to update. For secrets with automatic replication policies, this can be omitted",
              args: {
                name: "REPLICA-LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--no-remove-cmek",
              description:
                "Remove customer managed encryption key so that future versions will be encrypted by a Google managed encryption key",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--remove-cmek",
              description:
                "Remove customer managed encryption key so that future versions will be encrypted by a Google managed encryption key",
            },
            {
              name: "--set-kms-key",
              description:
                "New KMS key with which to encrypt and decrypt future secret versions",
              args: {
                name: "SET-KMS-KEY",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SECRET",
            description:
              "ID of the secret or fully qualified identifier for the secret",
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
      name: "set-iam-policy",
      description: "Set the IAM policy binding for a secret",
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
          name: "SECRET",
          description:
            "ID of the secret or fully qualified identifier for the secret",
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
      description: "Update a secret's metadata",
      options: [
        optAccessTokenFile,
        optAccount,
        {
          name: "--add-topics",
          description: "List of Pub/Sub topics to add to the secret",
          args: {
            name: "ADD-TOPICS",
            description: "List",
          },
        },
        optBillingProject,
        {
          name: "--clear-annotations",
          description: "Remove all Annotations",
        },
        {
          name: "--clear-labels",
          description:
            "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
        },
        {
          name: "--clear-topics",
          description: "Clear all Pub/Sub topics from the secret",
        },
        {
          name: "--clear-version-aliases",
          description: "Remove all Version Aliases",
        },
        optConfiguration,
        {
          name: "--etag",
          description:
            "Current entity tag (ETag) of the secret. If specified, the secret is updated only if the ETag provided matches the current secret's ETag",
          args: {
            name: "ETAG",
            description: "String",
          },
        },
        {
          name: "--expire-time",
          description: "Timestamp at which to automatically delete the secret",
          args: {
            name: "EXPIRE-TIME",
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
        optLocation,
        optLogHttp,
        {
          name: "--next-rotation-time",
          description: "Timestamp at which to send rotation notification",
          args: {
            name: "NEXT_ROTATION_TIME",
            description: "String",
          },
        },
        {
          name: "--no-clear-annotations",
          description: "Remove all Annotations",
          hidden: true,
        },
        {
          name: "--no-clear-labels",
          description:
            "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
          hidden: true,
        },
        {
          name: "--no-clear-topics",
          description: "Clear all Pub/Sub topics from the secret",
          hidden: true,
        },
        {
          name: "--no-clear-version-aliases",
          description: "Remove all Version Aliases",
          hidden: true,
        },
        {
          name: "--no-remove-expiration",
          description:
            "If set, removes scheduled expiration from secret (if it had one)",
          hidden: true,
        },
        {
          name: "--no-remove-next-rotation-time",
          description:
            "Remove timestamp at which to send rotation notification",
          hidden: true,
        },
        {
          name: "--no-remove-regional-kms-key-name",
          description: "If set, removes the regional kms key",
          hidden: true,
        },
        {
          name: "--no-remove-rotation-period",
          description:
            "If set, removes the rotation period, cancelling all rotations except for the next one",
          hidden: true,
        },
        {
          name: "--no-remove-rotation-schedule",
          description: "If set, removes rotation policy from a secret",
          hidden: true,
        },
        {
          name: "--no-remove-version-destroy-ttl",
          description:
            "If set, removes the version destroy TTL from the secret",
          hidden: true,
        },
        optProject,
        optQuiet,
        {
          name: "--regional-kms-key-name",
          description: "Regional kms key name for regional secret",
          args: {
            name: "REGIONAL-KMS-KEY-NAME",
            description: "String",
          },
        },
        {
          name: "--remove-annotations",
          description: "List of Annotations to be removed",
          args: {
            name: "KEY",
            description: "List",
          },
        },
        {
          name: "--remove-expiration",
          description:
            "If set, removes scheduled expiration from secret (if it had one)",
        },
        {
          name: "--remove-labels",
          description:
            "List of label keys to remove. If a label does not exist it is silently ignored. If `--update-labels` is also specified then `--update-labels` is applied first",
          args: {
            name: "KEY",
            description: "List",
          },
        },
        {
          name: "--remove-next-rotation-time",
          description:
            "Remove timestamp at which to send rotation notification",
        },
        {
          name: "--remove-regional-kms-key-name",
          description: "If set, removes the regional kms key",
        },
        {
          name: "--remove-rotation-period",
          description:
            "If set, removes the rotation period, cancelling all rotations except for the next one",
        },
        {
          name: "--remove-rotation-schedule",
          description: "If set, removes rotation policy from a secret",
        },
        {
          name: "--remove-topics",
          description: "List of Pub/Sub topics to remove from the secret",
          args: {
            name: "REMOVE-TOPICS",
            description: "List",
          },
        },
        {
          name: "--remove-version-aliases",
          description: "List of Version Aliases to be removed",
          args: {
            name: "KEY",
            description: "List",
          },
        },
        {
          name: "--remove-version-destroy-ttl",
          description:
            "If set, removes the version destroy TTL from the secret",
        },
        {
          name: "--rotation-period",
          description:
            "Duration of time (in seconds) between rotation notifications",
          args: {
            name: "ROTATION_PERIOD",
            description: "String",
          },
        },
        optTraceToken,
        {
          name: "--ttl",
          description:
            "Duration of time (in seconds) from the running of the command until the secret is automatically deleted",
          args: {
            name: "TTL",
            description: "String",
          },
        },
        {
          name: "--update-annotations",
          description: "List of key-value pairs to set as Annotations",
          args: {
            name: "KEY=VALUE",
            description: "Dict",
          },
        },
        {
          name: "--update-labels",
          description:
            "List of label KEY=VALUE pairs to update. If a label exists, its value is modified. Otherwise, a new label is created",
          args: {
            name: "KEY=VALUE",
            description: "Dict",
          },
        },
        {
          name: "--update-version-aliases",
          description: "List of key-value pairs to set as Version Aliases",
          args: {
            name: "KEY=VALUE",
            description: "Dict",
          },
        },
        optUserOutputEnabled,
        optVerbosity,
        {
          name: "--version-destroy-ttl",
          description:
            "Secret Version TTL after destruction request. For secret with TTL>0, version destruction does not happen immediately on calling destroy; instead, the version goes to a disabled state and destruction happens after the TTL expires. See `$ gcloud topic datetimes` for information on duration formats",
          args: {
            name: "VERSION-DESTROY-TTL",
          },
        },
      ],
      args: {
        name: "SECRET",
        description:
          "ID of the secret or fully qualified identifier for the secret",
      },
    },
    {
      name: "versions",
      description: "Manage secret versions",
      subcommands: [
        {
          name: "access",
          description: "Access a secret version's data",
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
              name: "--out-file",
              description:
                "File path to which secret data is written. If this flag is not provided secret data will be written to stdout in UTF-8 format",
              args: {
                name: "OUT-FILE-PATH",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optSecret,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VERSION",
            description:
              "ID of the version or fully qualified identifier for the version",
          },
        },
        {
          name: "add",
          description: "Create a new version of an existing secret",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--data-file",
              description:
                'File path from which to read secret data. Set this to "-" to read the secret data from stdin',
              priority: 100,
              args: {
                name: "PATH",
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
            optLocation,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SECRET",
            description:
              "ID of the secret or fully qualified identifier for the secret",
          },
        },
        {
          name: "describe",
          description: "Describe metadata about the secret version",
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
            optSecret,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VERSION",
            description:
              "ID of the version or fully qualified identifier for the version",
          },
        },
        {
          name: "destroy",
          description: "Destroy a secret version's metadata and secret data",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--etag",
              description:
                "Current entity tag (ETag) of the secret version. If specified, the version is destroyed only if the ETag provided matches the current version's ETag",
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
            optLocation,
            optLogHttp,
            optProject,
            optQuiet,
            optSecret,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VERSION",
            description:
              "ID of the version or fully qualified identifier for the version",
          },
        },
        {
          name: "disable",
          description: "Disable the version of the provided secret",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--etag",
              description:
                "Current entity tag (ETag) of the secret version. If specified, the version is disabled only if the ETag provided matches the current version's ETag",
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
            optLocation,
            optLogHttp,
            optProject,
            optQuiet,
            optSecret,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VERSION",
            description:
              "ID of the version or fully qualified identifier for the version",
          },
        },
        {
          name: "enable",
          description: "Enable the version of the provided secret",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--etag",
              description:
                "Current entity tag (ETag) of the secret version. If specified, the version is enabled only if the ETag provided matches the current version's ETag",
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
            optLocation,
            optLogHttp,
            optProject,
            optQuiet,
            optSecret,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VERSION",
            description:
              "ID of the version or fully qualified identifier for the version",
          },
        },
        {
          name: "list",
          description: "List all versions for a secret",
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
            {
              name: "--page-size",
              description:
                "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is *100*. Paging may be applied before or after *--filter* and *--limit* depending on the service",
              args: {
                name: "PAGE_SIZE",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SECRET",
            description:
              "ID of the secret or fully qualified identifier for the secret",
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
