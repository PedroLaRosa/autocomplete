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
  name: "source",
  description: "Cloud git repository commands",
  subcommands: [
    {
      name: "project-configs",
      description:
        "Manage Cloud Source Repositories configuration of a project",
      subcommands: [
        {
          name: "describe",
          description: "Show details about the configuration of a project",
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
          name: "update",
          description:
            "Update the Cloud Source Repositories configuration of the current project",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-topic",
              description:
                "ID of the topic or fully qualified identifier for the topic",
              priority: 100,
              args: {
                name: "ADD_TOPIC",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--disable-pushblock",
              description:
                "Disable PushBlock for all repositories under current project. PushBlock allows repository owners to block git push transactions containing private key data",
            },
            {
              name: "--enable-pushblock",
              description:
                "Enable PushBlock for all repositories under current project. PushBlock allows repository owners to block git push transactions containing private key data",
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
              name: "--message-format",
              description:
                "The format of the message to publish to the topic. _MESSAGE_FORMAT_ must be one of: *json*, *protobuf*",
              args: {
                name: "MESSAGE_FORMAT",
                description: "String",
                suggestions: ["json", "protobuf"],
              },
            },
            {
              name: "--no-disable-pushblock",
              description:
                "Disable PushBlock for all repositories under current project. PushBlock allows repository owners to block git push transactions containing private key data",
              hidden: true,
            },
            {
              name: "--no-enable-pushblock",
              description:
                "Enable PushBlock for all repositories under current project. PushBlock allows repository owners to block git push transactions containing private key data",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--remove-topic",
              description:
                "ID of the topic or fully qualified identifier for the topic",
              priority: 100,
              args: {
                name: "REMOVE_TOPIC",
                description: "String",
              },
            },
            {
              name: "--service-account",
              description:
                "Email address of the service account used for publishing Cloud Pub/Sub messages. This service account needs to be in the same project as the project. When added, the caller needs to have iam.serviceAccounts.actAs permission on this service account. If unspecified, it defaults to the Compute Engine default service account",
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
              },
            },
            {
              name: "--topic-project",
              description:
                "Cloud project for the topic. If not set, the currently set project will be used",
              args: {
                name: "TOPIC_PROJECT",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--update-topic",
              description:
                "ID of the topic or fully qualified identifier for the topic",
              priority: 100,
              args: {
                name: "UPDATE_TOPIC",
                description: "String",
              },
            },
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
      name: "repos",
      description: "Manage cloud source repositories",
      subcommands: [
        {
          name: "clone",
          description: "Clone a cloud source repository",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--dry-run",
              description:
                "If provided, prints the command that would be run to standard out instead of executing it",
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
              name: "--no-dry-run",
              description:
                "If provided, prints the command that would be run to standard out instead of executing it",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "REPOSITORY_NAME",
              description: "Name of the repository",
            },
            {
              name: "DIRECTORY_NAME",
              description:
                "Directory name for the cloned repo. Defaults to the repository name",
              isOptional: true,
            },
          ],
        },
        {
          name: "create",
          description: "Create a cloud source repository",
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
            name: "REPOSITORY_NAME",
            description:
              "Name of the repository. May contain between 3 and 63 (inclusive) lowercase letters, digits, and hyphens. Must start with a letter, and may not end with a hyphen",
          },
        },
        {
          name: "delete",
          description: "Delete a cloud source repository",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--force",
              description:
                "(REMOVED) If provided, skip the delete confirmation prompt",
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
                "(REMOVED) If provided, skip the delete confirmation prompt",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REPOSITORY_NAME",
            description: "Name of the repository",
          },
        },
        {
          name: "describe",
          description: "Describe a cloud source repository",
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
            name: "REPOSITORY_NAME",
            description: "Name of the repository",
          },
        },
        {
          name: "get-iam-policy",
          description:
            "Get the IAM policy for the named cloud source repository",
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
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REPOSITORY_NAME",
            description: "Name of the repository",
          },
        },
        {
          name: "list",
          description: "List the repositories the currently active project",
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
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for the named repository",
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
              name: "REPOSITORY_NAME",
              description: "Name of the repository",
            },
            {
              name: "POLICY_FILE",
              description:
                "JSON or YAML file with IAM policy. See https://cloud.google.com/resource-manager/reference/rest/Shared.Types/Policy",
              template: "filepaths",
            },
          ],
        },
        {
          name: "update",
          description: "Update the configuration of a Cloud Source Repository",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-topic",
              description:
                "ID of the topic or fully qualified identifier for the topic",
              priority: 100,
              args: {
                name: "ADD_TOPIC",
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
            {
              name: "--message-format",
              description:
                "The format of the message to publish to the topic. _MESSAGE_FORMAT_ must be one of: *json*, *protobuf*",
              args: {
                name: "MESSAGE_FORMAT",
                description: "String",
                suggestions: ["json", "protobuf"],
              },
            },
            optProject,
            optQuiet,
            {
              name: "--remove-topic",
              description:
                "ID of the topic or fully qualified identifier for the topic",
              priority: 100,
              args: {
                name: "REMOVE_TOPIC",
                description: "String",
              },
            },
            {
              name: "--service-account",
              description:
                "Email address of the service account used for publishing Cloud Pub/Sub messages. This service account needs to be in the same project as the repo. When added, the caller needs to have iam.serviceAccounts.actAs permission on this service account. If unspecified, it defaults to the Compute Engine default service account",
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
              },
            },
            {
              name: "--topic-project",
              description:
                "Cloud project for the topic. If not set, the currently set project will be used",
              args: {
                name: "TOPIC_PROJECT",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--update-topic",
              description:
                "ID of the topic or fully qualified identifier for the topic",
              priority: 100,
              args: {
                name: "UPDATE_TOPIC",
                description: "String",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REPO",
            description:
              "ID of the repo or fully qualified identifier for the repo",
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
