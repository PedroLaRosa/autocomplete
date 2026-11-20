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
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation2: Fig.Option = {
  name: "--location",
  description: "The location of the Dataproc Metastore service",
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

const optService: Fig.Option = {
  name: "--service",
  description: "The identifier of the Dataproc Metastore service",
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
  name: "metastore",
  description: "Manage Dataproc Metastore resources",
  subcommands: [
    {
      name: "federations",
      description: "Manage Dataproc Metastore federations",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add an IAM policy binding to a federation",
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
            optMember,
            optProject,
            optQuiet,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FEDERATION",
            description:
              "ID of the federation or fully qualified identifier for the federation",
          },
        },
        {
          name: "create",
          description: "Create a Dataproc Metastore federation",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--backends",
              description:
                "Backends from which the federation service serves metadata at query time. The backends are specified as a comma-separated list of `RANK=BACKEND` pairs. For example: `1=dpms:dpms1,2=dpms:projects/my-project/locations/us-central1/services/dpms2`. `RANK` represents the rank of the backend metastore and is used to resolve database name collisions. `BACKEND` is specified as `METASTORE_TYPE:METASTORE_NAME` where `METASTORE_TYPE` is the type of backend metastore and `METASTORE_NAME` is the relative resource name of the metastore. If only the name of the metastore is specified (e.g. `dpms1`), project and location will be inferred from the project and location used to create the federation",
              priority: 100,
              args: {
                name: "RANK=BACKEND",
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
            {
              name: "--hive-metastore-version",
              description:
                "Hive metastore schema version of the Metastore federation. _HIVE_METASTORE_VERSION_ must be one of: *2.3.6*, *3.1.2*",
              args: {
                name: "HIVE_METASTORE_VERSION",
                description: "String",
                suggestions: ["2.3.6", "3.1.2"],
              },
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
            optLocation2,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--tags",
              description: "List of tag KEY=VALUE pairs to add",
              args: {
                name: "KEY=VALUE",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FEDERATION",
            description:
              "ID of the federation or fully qualified identifier for the federation",
          },
        },
        {
          name: "delete",
          description: "Delete one or more Dataproc Metastore federations",
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
            {
              name: "--location",
              description: "Location to which the federations belongs",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FEDERATIONS",
            description:
              "IDs of the federations or fully qualified identifiers for the federations",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Describe a Dataproc Metastore federation",
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
            name: "FEDERATION",
            description:
              "ID of the federation or fully qualified identifier for the federation",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for the federation",
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
            name: "FEDERATION",
            description:
              "ID of the federation or fully qualified identifier for the federation",
          },
        },
        {
          name: "list",
          description: "List Dataproc Metastore federations",
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
          description: "Remove an IAM policy binding from a federation",
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
            optMember2,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FEDERATION",
            description:
              "ID of the federation or fully qualified identifier for the federation",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for the federation",
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
              name: "FEDERATION",
              description:
                "ID of the federation or fully qualified identifier for the federation",
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
          description: "Update a Dataproc Metastore federation",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--clear-backends",
              description:
                "Clear existing metastore backends. `--clear-backends` must be used with `--update-backends`",
            },
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
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
            optLocation2,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-clear-backends",
              description:
                "Clear existing metastore backends. `--clear-backends` must be used with `--update-backends`",
              hidden: true,
            },
            {
              name: "--no-clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--remove-backends",
              description:
                "Comma-separated list of metastore backend keys to remove with the form `RANK1,RANK2`. The Key represents the rank of the backend metastore and is used to resolve database name collisions. If a `RANK` does not exist then it is sliently ignored. If `--update-backends` is also specified, then `--remove-backends` is applied first",
              args: {
                name: "RANK",
                description: "String",
              },
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
            optTraceToken,
            {
              name: "--update-backends",
              description:
                "Comma-separated list of metastore backends specified as a list of `RANK=BACKEND` pairs. For example: `1=dpms:dpms1,2=dpms:projects/my-project/locations/us-central1/services/dpms2`. `RANK` represents the rank of the backend metastore and is used to resolve database name collisions. `BACKEND` is specified as `METASTORE_TYPE:METASTORE_NAME` where `METASTORE_TYPE` is the type of backend metastore and `METASTORE_NAME` is the relative resource name of the metastore. If only the name of the metastore is specified (e.g. `dpms1`), project and location will be inferred from the project and location used to create the federation",
              args: {
                name: "RANK=BACKEND",
                description: "String",
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
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FEDERATION",
            description:
              "ID of the federation or fully qualified identifier for the federation",
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
      name: "locations",
      description: "Get information about Dataproc Metastore locations",
      subcommands: [
        {
          name: "describe",
          description: "Show metadata for a Dataproc Metastore location",
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
            isOptional: true,
          },
        },
        {
          name: "list",
          description: "List Dataproc Metastore locations",
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
      name: "operations",
      description: "Manage Dataproc Metastore operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a Dataproc Metastore operation",
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
              description: "Location to which the operation belongs",
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
          name: "delete",
          description:
            "Delete one or more completed Dataproc Metastore operations",
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
              description: "Location to which the operations belongs",
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
            name: "OPERATIONS",
            description:
              "IDs of the operations or fully qualified identifiers for the operations",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Show metadata for a Dataproc Metastore operation",
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "list",
          description: "List Dataproc Metastore operations",
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
          name: "wait",
          description:
            "Poll a long-running Dataproc Metastore operation until it completes",
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
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
      name: "services",
      description: "Manage Dataproc Metastore services",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add an IAM policy binding to a service",
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
            optMember,
            optProject,
            optQuiet,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
          },
        },
        {
          name: "alter-metadata-resource-location",
          description: "Alter metadata resource location",
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
            {
              name: ["--location-uri", "--location_uri"],
              description: "The new location URI for the metadata resource",
              priority: 100,
              args: {
                name: "LOCATION_URI",
                description: "String",
              },
            },
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: ["--resource-name", "--resource_name"],
              description:
                "The relative metadata resource name in the following format. `databases/{database_id}` or `databases/{database_id}/tables/{table_id}` or `databases/{database_id}/tables/{table_id}/partitions/{partition_id}`",
              priority: 100,
              args: {
                name: "RESOURCE_NAME",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
          },
        },
        {
          name: "alter-table-properties",
          description: "Alter metadata table properties",
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
            optProject,
            {
              name: "--properties",
              description:
                "A string where field names are separated by a comma. Describes the desired values to mutate. If update-mask is empty, the properties will not update. Otherwise, the properties only alter the values whose associated paths exist in the update mask",
              priority: 100,
              args: {
                name: "KEY=VALUE",
              },
            },
            optQuiet,
            {
              name: "--table-name",
              description:
                "The name of the table containing the properties you're altering in the following format",
              priority: 100,
              args: {
                name: "TABLE_NAME",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--update-mask",
              description:
                "A string where field names are separated by a comma. Specifies the metadata table properties fields that are overwritten by the update. Fields specified in the `update-mask` are relative to the resource (not to the full request). A field is overwritten if it is in the mask",
              priority: 100,
              args: {
                name: "UPDATE_MASK",
                description: "String",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
          },
        },
        {
          name: "backups",
          description: "Manage backups under Dataproc Metastore services",
          subcommands: [
            {
              name: "add-iam-policy-binding",
              description: "Add an IAM policy binding to a backup",
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
                optMember,
                optProject,
                optQuiet,
                optRole,
                optService,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup",
              },
            },
            {
              name: "create",
              description: "Backup a service",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description: "The description of this backup",
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
                optLocation2,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optService,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup",
              },
            },
            {
              name: "delete",
              description: "Delete a service backup",
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
                optProject,
                optQuiet,
                optService,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup",
              },
            },
            {
              name: "describe",
              description: "Describe a backup",
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
                optService,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup",
              },
            },
            {
              name: "get-iam-policy",
              description: "Get the IAM policy for the backup",
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
                optService,
                optSortBy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup",
              },
            },
            {
              name: "list",
              description: "List backups under a Dataproc Metastore service",
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
                  name: "--service",
                  description:
                    "ID of the service or fully qualified identifier for the service",
                  priority: 100,
                  args: {
                    name: "SERVICE",
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
              description: "Remove an IAM policy binding from a backup",
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
                optMember2,
                optProject,
                optQuiet,
                optRole2,
                optService,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup",
              },
            },
            {
              name: "set-iam-policy",
              description: "Set the IAM policy for a backup",
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
                optService,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: [
                {
                  name: "BACKUP",
                  description:
                    "ID of the backup or fully qualified identifier for the backup",
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
          name: "create",
          description: "Create a Dataproc Metastore service",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--autoscaling-enabled",
              description:
                "A boolean flag to determine whether Dataproc Metastore autoscaling should be enabled, false if unspecified",
            },
            {
              name: "--auxiliary-versions",
              description:
                "Comma-separated list of auxiliary Hive metastore versions to deploy. Auxiliary Hive metastore versions must be less than the primary Hive metastore service's version",
              args: {
                name: "AUXILIARY_VERSIONS",
                description: "List",
              },
            },
            {
              name: "--auxiliary-versions-from-file",
              description:
                "Path to a YAML file containing the auxiliary versions configuration for Dataproc Metastore instance. The file should contain a unique auxiliary service name and auxiliary version that is lower than the primary service version. The primary version's Hive metastore configs are applied to the auxiliary version. Additional Hive metastore configs can be specified for the auxiliary version using \"config_overrides\". If a specified config property has already been overridden in the primary Hive metastore version's configs, the auxiliary version's override takes precedence. The contents of the file should be structured as follows:",
              args: {
                name: "AUXILIARY_VERSIONS_FROM_FILE",
                template: "filepaths",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--consumer-subnetworks",
              description:
                "The list of subnetworks from which the service can be accessed. This can be the subnetwork's ID, fully-qualified URL, or relative name in the form `projects/{project_id}/regions/{region_id}/subnetworks/{subnetwork}`",
              args: {
                name: "CONSUMER_SUBNETWORKS",
                description: "List",
              },
            },
            {
              name: "--data-catalog-sync",
              description:
                "A boolean flag to determine whether Dataproc Metastore metadata sync to Data Catalog should be enabled, false if unspecified. Mutually exclusive with flag `--encryption-kms-key`",
            },
            {
              name: "--database-type",
              description:
                "The type of database the Dataproc Metastore service will store data in. _DATABASE_TYPE_ must be one of:",
              args: {
                name: "DATABASE_TYPE",
                suggestions: ["mysql", "spanner"],
              },
            },
            {
              name: "--deletion-protection",
              description:
                "Flag that enables delete protection on Dataproc Metastore instance to prevent accidental deletions of the instance. Use --deletion-protection to enable",
            },
            {
              name: "--enable-scheduled-backup",
              description:
                "Enable or disable scheduled backups for the Metastore service",
            },
            {
              name: "--encryption-kms-key",
              description:
                "The name of the Cloud KMS key to use for customer data encryption. Cannot be changed once the service is created. Mutually exclusive with flag `--data-catalog-sync`. This can be provided as a fully-qualified URL, or a relative name in the form `projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{crypto_key_id}`",
              args: {
                name: "ENCRYPTION_KMS_KEY",
                description: "String",
              },
            },
            {
              name: "--endpoint-protocol",
              description:
                "The protocol to use for the metastore service endpoint. If unspecified, defaults to `THRIFT`. _ENDPOINT_PROTOCOL_ must be one of:",
              args: {
                name: "ENDPOINT_PROTOCOL",
                suggestions: ["grpc", "thrift"],
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--hive-metastore-configs",
              description:
                "A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore",
              args: {
                name: "KEY=VALUE",
              },
            },
            {
              name: "--hive-metastore-configs-from-file",
              description:
                "Path to a XML file containing a mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore",
              args: {
                name: "HIVE_METASTORE_CONFIGS_FROM_FILE",
                template: "filepaths",
              },
            },
            {
              name: "--hive-metastore-version",
              description:
                "The Hive metastore schema version. The supported versions of a location are listed via:",
              args: {
                name: "HIVE_METASTORE_VERSION",
                description: "String",
              },
            },
            optImpersonateServiceAccount,
            {
              name: "--instance-size",
              description:
                "The instance size of the service. _INSTANCE_SIZE_ must be one of:",
              args: {
                name: "INSTANCE_SIZE",
                suggestions: [
                  "extra-large",
                  "extra-small",
                  "large",
                  "medium",
                  "small",
                ],
              },
            },
            {
              name: "--kerberos-principal",
              description:
                'A Kerberos principal that exists in the KDC to authenticate as. A typical principal is of the form "primary/instance@REALM", but there is no exact format',
              priority: 100,
              args: {
                name: "KERBEROS_PRINCIPAL",
                description: "String",
              },
            },
            {
              name: "--keytab",
              description:
                "A Kerberos keytab file that can be used to authenticate a service principal with a Kerberos Key Distribution Center. This is a Secret Manager secret version, and can be fully-qualified URL, or relative name in the form `projects/{project_id}/secrets/{secret_id}/versions/{version_id}`",
              priority: 100,
              args: {
                name: "KEYTAB",
                description: "String",
              },
            },
            {
              name: "--krb5-config",
              description:
                "A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/krb5.conf, although the file does not need to be named krb5.conf explicitly",
              priority: 100,
              args: {
                name: "KRB5_CONFIG",
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
            optLocation2,
            optLogHttp,
            {
              name: "--maintenance-window-day",
              description:
                "The day of week when the window starts, e.g., `sun`. _MAINTENANCE_WINDOW_DAY_ must be one of: *fri*, *mon*, *sat*, *sun*, *thu*, *tue*, *wed*",
              priority: 100,
              args: {
                name: "MAINTENANCE_WINDOW_DAY",
                suggestions: ["fri", "mon", "sat", "sun", "thu", "tue", "wed"],
              },
            },
            {
              name: "--maintenance-window-hour",
              description: "The hour of day (0-23) when the window starts",
              priority: 100,
              args: {
                name: "MAINTENANCE_WINDOW_HOUR",
                description: "Int",
              },
            },
            {
              name: "--max-scaling-factor",
              description:
                "The maximum scaling factor allowed by the autoscaler. Can be one of [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0]. The default value is 6.0",
              args: {
                name: "MAX_SCALING_FACTOR",
                description: "Float",
              },
            },
            {
              name: "--min-scaling-factor",
              description:
                "The minimum scaling factor allowed by the autoscaler. Can be one of [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0]. The default value is 0.1",
              args: {
                name: "MIN_SCALING_FACTOR",
                description: "Float",
              },
            },
            {
              name: "--network",
              description:
                'The name of the network on which the service can be accessed. This can be the network\'s ID, fully-qualified URL, or relative name in the form `projects/{project_id}/global/networks/{network}`. If "network", "consumer-subnetworks" and "network-config" are unspecified, the "default" network will be used',
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            {
              name: "--network-config-from-file",
              description:
                "Path to a YAML file containing the network configuration for Dataproc Metastore instance. The contents of the file should be structured as follows:",
              args: {
                name: "NETWORK_CONFIG_FROM_FILE",
                template: "filepaths",
              },
            },
            optNoAsync,
            {
              name: "--no-autoscaling-enabled",
              description:
                "A boolean flag to determine whether Dataproc Metastore autoscaling should be enabled, false if unspecified",
              hidden: true,
            },
            {
              name: "--no-data-catalog-sync",
              description:
                "A boolean flag to determine whether Dataproc Metastore metadata sync to Data Catalog should be enabled, false if unspecified. Mutually exclusive with flag `--encryption-kms-key`",
              hidden: true,
            },
            {
              name: "--no-deletion-protection",
              description:
                "Flag that enables delete protection on Dataproc Metastore instance to prevent accidental deletions of the instance. Use --deletion-protection to enable",
              hidden: true,
            },
            {
              name: "--no-enable-scheduled-backup",
              description:
                "Enable or disable scheduled backups for the Metastore service",
              hidden: true,
            },
            {
              name: "--port",
              description:
                "The TCP port on which the Metastore service will listen. If unspecified, the default port 9083 will be used",
              args: {
                name: "PORT",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--release-channel",
              description:
                "The release channel of the service. _RELEASE_CHANNEL_ must be one of:",
              args: {
                name: "RELEASE_CHANNEL",
                suggestions: ["canary", "stable"],
              },
            },
            {
              name: "--scaling-factor",
              description:
                "The scaling factor of the service. Can be one of [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0]",
              args: {
                name: "SCALING_FACTOR",
                description: "Float",
              },
            },
            {
              name: "--scheduled-backup-configs-from-file",
              description:
                "Path to a JSON file containing a mapping of scheduled backup configurations key-value pairs to apply to the scheduled backup",
              args: {
                name: "SCHEDULED_BACKUP_CONFIGS_FROM_FILE",
                template: "filepaths",
              },
            },
            {
              name: "--scheduled-backup-cron",
              description:
                "Specify the frequency of a scheduled backup of the metastore service",
              args: {
                name: "SCHEDULED_BACKUP_CRON",
                description: "String",
              },
            },
            {
              name: "--scheduled-backup-location",
              description:
                "Set the Cloud Storage URI to store the scheduled backups of the metastore service",
              args: {
                name: "SCHEDULED_BACKUP_LOCATION",
                description: "String",
              },
            },
            {
              name: "--tags",
              description: "List of tag KEY=VALUE pairs to add",
              args: {
                name: "KEY=VALUE",
              },
            },
            {
              name: "--tier",
              description: "The tier of the service. _TIER_ must be one of:",
              args: {
                name: "TIER",
                suggestions: ["developer", "enterprise"],
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
          },
        },
        {
          name: "delete",
          description: "Delete one or more Dataproc Metastore services",
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
            {
              name: "--location",
              description: "Location to which the services belongs",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICES",
            description:
              "IDs of the services or fully qualified identifiers for the services",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Describe a Dataproc Metastore service",
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
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
          },
        },
        {
          name: "export",
          description: "Export metadata from a Dataproc Metastore service",
          subcommands: [
            {
              name: "gcs",
              description:
                "Export metadata from a Dataproc Metastore service to Google Cloud Storage",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--destination-folder",
                  description:
                    "A Cloud Storage URI of a folder that metadata is exported to, in the format `gs://<bucket_name>/<path_inside_bukcet>`. A sub-folder containing exported files will be created below it",
                  priority: 100,
                  args: {
                    name: "DESTINATION_FOLDER",
                    description: "String",
                  },
                },
                {
                  name: "--dump-type",
                  description:
                    "The type of the database dump. If unspecified, defaults to `mysql`. _DUMP_TYPE_ must be one of:",
                  args: {
                    name: "DUMP_TYPE",
                    suggestions: ["avro", "mysql"],
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
                optLocation2,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SERVICE",
                description:
                  "ID of the service or fully qualified identifier for the service",
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
          name: "get-iam-policy",
          description: "Get the IAM policy for the service",
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
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
          },
        },
        {
          name: "import",
          description: "Import metadata into a Dataproc Metastore service",
          subcommands: [
            {
              name: "gcs",
              description:
                "Import metadata into a Dataproc Metastore service from Google Cloud Storage",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--database-dump",
                  description:
                    "A Cloud Storage object URI that specifies a database dump from which to import metadata. It must begin with `gs://`",
                  priority: 100,
                  args: {
                    name: "DATABASE_DUMP",
                    description: "String",
                  },
                },
                {
                  name: "--description",
                  description: "The description of this metadata import",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--dump-type",
                  description:
                    "The type of the database dump;. If unspecified, defaults to `mysql`. _DUMP_TYPE_ must be one of:",
                  args: {
                    name: "DUMP_TYPE",
                    suggestions: ["avro", "mysql"],
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
                  name: "--import-id",
                  description: "The ID of this metadata import",
                  priority: 100,
                  args: {
                    name: "IMPORT_ID",
                    description: "String",
                  },
                },
                optLocation2,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SERVICE",
                description:
                  "ID of the service or fully qualified identifier for the service",
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
          name: "list",
          description: "List Dataproc Metastore services",
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
          name: "move-table-to-database",
          description: "Move table to another database",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: ["--destination-db-name", "--destination_db_name"],
              description:
                "The name of the database where the table should be moved",
              priority: 100,
              args: {
                name: "DESTINATION_DB_NAME",
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
            optLocation2,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: ["--source-db-name", "--source_db_name"],
              description: "The name of the database where the table resides",
              priority: 100,
              args: {
                name: "SOURCE_DB_NAME",
                description: "String",
              },
            },
            {
              name: ["--table-name", "--table_name"],
              description: "The name of the table to be moved",
              priority: 100,
              args: {
                name: "TABLE_NAME",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
          },
        },
        {
          name: "query-metadata",
          description:
            "Execute a SQL query against a Dataproc Metastore Service's metadata",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--location",
              description: "Location to which the service belongs",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optProject,
            {
              name: "--query",
              description:
                'Use Google Standard SQL query for Cloud Spanner and MySQL query syntax for Cloud SQL. Cloud Spanner SQL is described at https://cloud.google.com/spanner/docs/query-syntax)"',
              priority: 100,
              args: {
                name: "QUERY",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove an IAM policy binding from a service",
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
            optMember2,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
          },
        },
        {
          name: "restore",
          description: "Restore a Dataproc Metastore service",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--backup",
              description:
                "The backup resource to restore from. This can be the backup's ID, fully-qualified URL, or relative name in the form `projects/{project_id}/locations/{location_id}/services/{service_id}/backups/{backup_id}`",
              args: {
                name: "BACKUP",
                description: "String",
              },
            },
            {
              name: "--backup-location",
              description:
                'The location of the backup artifacts to restore from. This should be a Cloud Storage URI, contains backup avro files under "avro/", backup_metastore.json and service.json, in the form `gs://<path_to_backup>`',
              args: {
                name: "BACKUP_LOCATION",
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
            optLocation2,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--restore-type",
              description:
                "The type of restore to perform. _RESTORE_TYPE_ must be one of:",
              args: {
                name: "RESTORE_TYPE",
                suggestions: ["full", "metadata-only"],
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for the service",
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
              name: "SERVICE",
              description:
                "ID of the service or fully qualified identifier for the service",
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
          description: "Update a Dataproc Metastore service",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-auxiliary-versions",
              description:
                "Comma-separated list of auxiliary Hive metastore versions to deploy. Auxiliary Hive metastore versions must be less than the primary Hive metastore service's version",
              args: {
                name: "ADD_AUXILIARY_VERSIONS",
                description: "List",
              },
            },
            optAsync,
            {
              name: "--autoscaling-enabled",
              description:
                "A boolean flag to determine whether Dataproc Metastore autoscaling should be enabled, false if unspecified",
            },
            optBillingProject,
            {
              name: "--clear-auxiliary-versions",
              description:
                "Clears the existing auxiliary services attached to the primary Hive metastore services. If --add-auxiliary-versions is also specified, --clear-auxiliary-versions is applied first",
            },
            {
              name: "--clear-hive-metastore-configs",
              description:
                "Clear existing Hive metastore configurations. If --update-hive-metastore-configs is also specified, then --clear-hive-metastore-configs is applied first",
            },
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
            },
            optConfiguration,
            {
              name: "--data-catalog-sync",
              description:
                "Boolean flag to determine whether or not Dataproc Metastore metadata sync to Data Catalog is enabled, false if unspecified. Mutually exclusive with flag `--encryption-kms-key`. Cannot be updated if the service uses customer-managed encryption keys",
            },
            {
              name: "--deletion-protection",
              description:
                "Flag that enables delete protection on Dataproc Metastore instance to prevent accidental deletions of the instance. Use --deletion-protection to enable and --no-deletion-protection to disable",
            },
            {
              name: "--enable-scheduled-backup",
              description:
                "Enable or disable scheduled backups for the Metastore service",
            },
            {
              name: "--endpoint-protocol",
              description:
                "The protocol to use for the metastore service endpoint. _ENDPOINT_PROTOCOL_ must be one of:",
              args: {
                name: "ENDPOINT_PROTOCOL",
                suggestions: ["grpc", "thrift"],
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
              name: "--instance-size",
              description:
                "The instance size of the service. _INSTANCE_SIZE_ must be one of:",
              args: {
                name: "INSTANCE_SIZE",
                suggestions: [
                  "extra-large",
                  "extra-small",
                  "large",
                  "medium",
                  "small",
                ],
              },
            },
            {
              name: "--kerberos-principal",
              description:
                'A Kerberos principal that exists in the KDC to authenticate as. A typical principal is of the form "primary/instance@REALM", but there is no exact format',
              args: {
                name: "KERBEROS_PRINCIPAL",
                description: "String",
              },
            },
            {
              name: "--keytab",
              description:
                "A Kerberos keytab file that can be used to authenticate a service principal with a Kerberos Key Distribution Center. This is a Secret Manager secret version, and can be fully-qualified URL, or relative name in the form `projects/{project_id}/secrets/{secret_id}/versions/{version_id}`",
              args: {
                name: "KEYTAB",
                description: "String",
              },
            },
            {
              name: "--krb5-config",
              description:
                "A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/krb5.conf, although the file does not need to be named krb5.conf explicitly",
              args: {
                name: "KRB5_CONFIG",
                description: "String",
              },
            },
            optLocation2,
            optLogHttp,
            {
              name: "--maintenance-window-day",
              description:
                "The day of week when the window starts, e.g., `sun`. _MAINTENANCE_WINDOW_DAY_ must be one of: *fri*, *mon*, *sat*, *sun*, *thu*, *tue*, *wed*",
              priority: 100,
              args: {
                name: "MAINTENANCE_WINDOW_DAY",
                suggestions: ["fri", "mon", "sat", "sun", "thu", "tue", "wed"],
              },
            },
            {
              name: "--maintenance-window-hour",
              description: "The hour of day (0-23) when the window starts",
              priority: 100,
              args: {
                name: "MAINTENANCE_WINDOW_HOUR",
                description: "Int",
              },
            },
            {
              name: "--max-scaling-factor",
              description:
                "The maximum scaling factor allowed by the autoscaler. Can be one of [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0]. The default value is 6.0",
              args: {
                name: "MAX_SCALING_FACTOR",
                description: "Float",
              },
            },
            {
              name: "--min-scaling-factor",
              description:
                "The minimum scaling factor allowed by the autoscaler. Can be one of [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0]. The default value is 0.1",
              args: {
                name: "MIN_SCALING_FACTOR",
                description: "Float",
              },
            },
            optNoAsync,
            {
              name: "--no-autoscaling-enabled",
              description:
                "A boolean flag to determine whether Dataproc Metastore autoscaling should be enabled, false if unspecified",
              hidden: true,
            },
            {
              name: "--no-clear-auxiliary-versions",
              description:
                "Clears the existing auxiliary services attached to the primary Hive metastore services. If --add-auxiliary-versions is also specified, --clear-auxiliary-versions is applied first",
              hidden: true,
            },
            {
              name: "--no-clear-hive-metastore-configs",
              description:
                "Clear existing Hive metastore configurations. If --update-hive-metastore-configs is also specified, then --clear-hive-metastore-configs is applied first",
              hidden: true,
            },
            {
              name: "--no-clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
              hidden: true,
            },
            {
              name: "--no-data-catalog-sync",
              description:
                "Boolean flag to determine whether or not Dataproc Metastore metadata sync to Data Catalog is enabled, false if unspecified. Mutually exclusive with flag `--encryption-kms-key`. Cannot be updated if the service uses customer-managed encryption keys",
              hidden: true,
            },
            {
              name: "--no-deletion-protection",
              description:
                "Flag that enables delete protection on Dataproc Metastore instance to prevent accidental deletions of the instance. Use --deletion-protection to enable and --no-deletion-protection to disable",
              hidden: true,
            },
            {
              name: "--no-enable-scheduled-backup",
              description:
                "Enable or disable scheduled backups for the Metastore service",
              hidden: true,
            },
            {
              name: "--port",
              description:
                "The TCP port on which the Metastore service will listen",
              args: {
                name: "PORT",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--remove-hive-metastore-configs",
              description:
                'Comma-separated list of configuration keys to remove with the form "KEY1, KEY2". If a label does not exist it is silently ignored. If --update-hive-metastore-configs is also specified, then --remove-hive-metastore-configs is applied first',
              args: {
                name: "REMOVE_HIVE_METASTORE_CONFIGS",
                description: "List",
              },
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
              name: "--scaling-factor",
              description:
                "The scaling factor of the service. Can be one of [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0]",
              args: {
                name: "SCALING_FACTOR",
                description: "Float",
              },
            },
            {
              name: "--scheduled-backup-configs-from-file",
              description:
                "Path to a JSON file containing a mapping of scheduled backup configurations key-value pairs to apply to the scheduled backup",
              args: {
                name: "SCHEDULED_BACKUP_CONFIGS_FROM_FILE",
                template: "filepaths",
              },
            },
            {
              name: "--scheduled-backup-cron",
              description:
                "Specify the frequency of a scheduled backup of the metastore service",
              args: {
                name: "SCHEDULED_BACKUP_CRON",
                description: "String",
              },
            },
            {
              name: "--scheduled-backup-location",
              description:
                "Set the Cloud Storage URI to store the scheduled backups of the metastore service",
              args: {
                name: "SCHEDULED_BACKUP_LOCATION",
                description: "String",
              },
            },
            {
              name: "--tier",
              description: "The tier of the service. _TIER_ must be one of:",
              args: {
                name: "TIER",
                suggestions: ["developer", "enterprise"],
              },
            },
            optTraceToken,
            {
              name: "--update-auxiliary-versions-from-file",
              description:
                "Path to a YAML file containing the auxiliary versions configuration for Dataproc Metastore instance. The file should contain a unique auxiliary service name and auxiliary version that is lower than the primary service version. The primary version's Hive metastore configs are applied to the auxiliary version. Additional Hive metastore configs can be specified for the auxiliary version using \"config_overrides\". If a specified config property has already been overridden in the primary Hive metastore version's configs, the auxiliary version's override takes precedence. The contents of the file should be structured as follows:",
              args: {
                name: "UPDATE_AUXILIARY_VERSIONS_FROM_FILE",
                template: "filepaths",
              },
            },
            {
              name: "--update-hive-metastore-configs",
              description:
                'Comma-separated list of Hive metastore configurations. Each configuration has the form "NAME=VALUE"',
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--update-hive-metastore-configs-from-file",
              description:
                "Path to a XML file containing a mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore",
              args: {
                name: "UPDATE_HIVE_METASTORE_CONFIGS_FROM_FILE",
                template: "filepaths",
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
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
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
