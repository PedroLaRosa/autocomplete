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

const optBucket: Fig.Option = {
  name: "--bucket",
  description: "ID of bucket",
  priority: 100,
  args: {
    name: "BUCKET",
  },
};

const optBucket2: Fig.Option = {
  name: "--bucket",
  description: "ID of the bucket that contains the view",
  priority: 100,
  args: {
    name: "BUCKET",
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
  description: "Location of the bucket that contains the view",
  priority: 100,
  args: {
    name: "LOCATION",
  },
};

const optLocation2: Fig.Option = {
  name: "--location",
  description: "Location of the bucket",
  priority: 100,
  args: {
    name: "LOCATION",
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
  name: "logging",
  description: "Manage Cloud Logging",
  subcommands: [
    {
      name: "buckets",
      description: "Manage Cloud Logging buckets",
      subcommands: [
        {
          name: "create",
          description: "Create a bucket",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--cmek-kms-key-name",
              description:
                "A valid `kms_key_name` will enable CMEK for the bucket",
              args: {
                name: "CMEK_KMS_KEY_NAME",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--description",
              description: "A textual description for the bucket",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--enable-analytics",
              description:
                "Whether to opt the bucket into Log Analytics. Once opted in, the bucket cannot be opted out of Log Analytics",
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
              name: "--index",
              description:
                "Specify an index to be added to the log bucket. This flag can be repeated. The ``fieldPath'' and ``type'' attributes are required. For example: --index=fieldPath=jsonPayload.foo,type=INDEX_TYPE_STRING. The following keys are accepted:",
              isRepeatable: true,
              args: {
                name: "KEY=VALUE, ...",
                description: "Dict",
              },
            },
            {
              name: "--location",
              description:
                "Location in which to create the bucket. Once the bucket is created, the location cannot be changed",
              priority: 100,
              args: {
                name: "LOCATION",
              },
            },
            optLogHttp,
            optNoAsync,
            {
              name: "--no-enable-analytics",
              description:
                "Whether to opt the bucket into Log Analytics. Once opted in, the bucket cannot be opted out of Log Analytics",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--restricted-fields",
              description:
                "Comma-separated list of field paths that require permission checks in this bucket. The following fields and their children are eligible: textPayload, jsonPayload, protoPayload, httpRequest, labels, sourceLocation",
              args: {
                name: "RESTRICTED_FIELD",
                description: "List",
              },
            },
            {
              name: "--retention-days",
              description:
                "The period logs will be retained, after which logs will automatically be deleted. The default is 30 days",
              args: {
                name: "RETENTION_DAYS",
                description: "Int",
              },
            },
            {
              name: "--tags",
              description:
                "List of tags KEY=VALUE pairs to bind. Each item must be expressed as `<tag-key-namespaced-name>=<tag-value-short-name>`",
              hidden: true,
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
            name: "BUCKET_ID",
            description: "ID of the bucket to create",
          },
        },
        {
          name: "delete",
          description: "Delete a bucket",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the bucket to delete",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the bucket to delete",
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
            optLocation2,
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the bucket to delete",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BUCKET_ID",
            description: "ID of the bucket to delete",
          },
        },
        {
          name: "describe",
          description: "Display information about a bucket",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the bucket to describe",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the bucket to describe",
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
            optLocation2,
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the bucket to describe",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BUCKET_ID",
            description: "The id of the bucket to describe",
          },
        },
        {
          name: "list",
          description: "List the defined buckets",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the buckets to list",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the buckets to list",
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
            optLimit,
            {
              name: "--location",
              description:
                "Location from which to list buckets. By default, buckets in all locations will be listed",
              args: {
                name: "LOCATION",
              },
            },
            optLogHttp,
            optNoUri,
            {
              name: "--organization",
              description: "Organization of the buckets to list",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optPageSize,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "move",
          description: "Move a bucket",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the bucket to move",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the bucket to move",
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
            optLocation2,
            optLogHttp,
            {
              name: "--new-location",
              description: "New location to move the bucket to",
              priority: 100,
              args: {
                name: "NEW_LOCATION",
                description: "String",
              },
            },
            {
              name: "--organization",
              description: "Organization of the bucket to move",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BUCKET_ID",
            description: "ID of the bucket to move",
          },
        },
        {
          name: "undelete",
          description: "Undelete a bucket",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the bucket to undelete",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the bucket to undelete",
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
            optLocation2,
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the bucket to undelete",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BUCKET_ID",
            description: "ID of the bucket to undelete",
          },
        },
        {
          name: "update",
          description: "Update a bucket",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-index",
              description:
                "Add an index to be added to the log bucket. This flag can be repeated. The ``fieldPath'' and ``type'' attributes are required. For example: --index=fieldPath=jsonPayload.foo,type=INDEX_TYPE_STRING. The following keys are accepted:",
              isRepeatable: true,
              args: {
                name: "KEY=VALUE, ...",
                description: "Dict",
              },
            },
            optAsync,
            {
              name: "--billing-account",
              description: "Billing account of the bucket to update",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--clear-indexes",
              description: "Remove all logging indexes from the bucket",
            },
            {
              name: "--cmek-kms-key-name",
              description:
                "A valid `kms_key_name` will enable CMEK for the bucket",
              args: {
                name: "CMEK_KMS_KEY_NAME",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--description",
              description: "A new description for the bucket",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--enable-analytics",
              description:
                "Whether to opt the bucket into Log Analytics. Once opted in, the bucket cannot be opted out of Log Analytics",
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the bucket to update",
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
            optLocation2,
            {
              name: "--locked",
              description:
                "Lock the bucket and prevent it from being modified or deleted (unless it is empty)",
            },
            optLogHttp,
            optNoAsync,
            {
              name: "--no-clear-indexes",
              description: "Remove all logging indexes from the bucket",
              hidden: true,
            },
            {
              name: "--no-enable-analytics",
              description:
                "Whether to opt the bucket into Log Analytics. Once opted in, the bucket cannot be opted out of Log Analytics",
              hidden: true,
            },
            {
              name: "--no-locked",
              description:
                "Lock the bucket and prevent it from being modified or deleted (unless it is empty)",
              hidden: true,
            },
            {
              name: "--organization",
              description: "Organization of the bucket to update",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--remove-indexes",
              description:
                "Specify the field path of the logging index(es) to delete",
              args: {
                name: "FIELD PATH",
                description: "List",
              },
            },
            {
              name: "--restricted-fields",
              description: "A new set of restricted fields for the bucket",
              args: {
                name: "RESTRICTED_FIELD",
                description: "List",
              },
            },
            {
              name: "--retention-days",
              description: "A new retention period for the bucket",
              args: {
                name: "RETENTION_DAYS",
                description: "Int",
              },
            },
            optTraceToken,
            {
              name: "--update-index",
              description:
                "Update an index to be added to the log bucket. This will update the type of the index, and also update its createTime to the new update time. This flag can be repeated. The ``fieldPath'' and ``type'' attributes are required. For example: --index=fieldPath=jsonPayload.foo,type=INDEX_TYPE_STRING. The following keys are accepted:",
              isRepeatable: true,
              args: {
                name: "KEY=VALUE, ...",
                description: "Dict",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BUCKET_ID",
            description: "The id of the bucket to update",
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
      name: "cmek-settings",
      description:
        "Manages the customer-managed encryption key (CMEK) settings for the Cloud Logging Logs Router",
      hidden: true,
      subcommands: [
        {
          name: "describe",
          description:
            "Display the CMEK settings for the Cloud Logging Logs Router",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the CMEK settings to describe",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the CMEK settings to describe",
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
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the CMEK settings to describe",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description:
            "Update the CMEK settings for the Cloud Logging Logs Router",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--clear-kms-key",
              description:
                "Disable CMEK for the Logs Router by clearing out Cloud KMS cryptokey in the organization's CMEK settings",
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
                "ID of the key or fully qualified identifier for the key",
              priority: 100,
              args: {
                name: "KMS_KEY_NAME",
                description: "String",
              },
            },
            {
              name: "--kms-keyring",
              description: "The KMS keyring of the key",
              args: {
                name: "KMS_KEYRING",
                description: "String",
              },
            },
            {
              name: "--kms-location",
              description: "The Google Cloud location for the key",
              args: {
                name: "KMS_LOCATION",
                description: "String",
              },
            },
            {
              name: "--kms-project",
              description: "The Google Cloud project for the key",
              args: {
                name: "KMS_PROJECT",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--no-clear-kms-key",
              description:
                "Disable CMEK for the Logs Router by clearing out Cloud KMS cryptokey in the organization's CMEK settings",
              hidden: true,
            },
            {
              name: "--organization",
              description:
                "Organization to update Logs Router CMEK settings for",
              priority: 100,
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
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
      name: "copy",
      description: "Copy log entries",
      options: [
        optAccessTokenFile,
        optAccount,
        {
          name: "--billing-account",
          description: "Billing account of the log entries to copy",
          args: {
            name: "BILLING_ACCOUNT_ID",
            description: "String",
          },
        },
        optBillingProject,
        optConfiguration,
        optFlagsFile,
        optFlatten,
        {
          name: "--folder",
          description: "Folder of the log entries to copy",
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
          name: "--location",
          description: "Location of the log bucket",
          priority: 100,
          args: {
            name: "LOCATION",
            description: "String",
          },
        },
        {
          name: "--log-filter",
          description:
            "A filter specifying which log entries to copy. The filter must be no more than 20k characters. An empty filter matches all log entries",
          args: {
            name: "LOG_FILTER",
            description: "String",
          },
        },
        optLogHttp,
        {
          name: "--organization",
          description: "Organization of the log entries to copy",
          args: {
            name: "ORGANIZATION_ID",
            description: "String",
          },
        },
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: [
        {
          name: "BUCKET_ID",
          description:
            "Id of the log bucket to copy logs from. Example: my-bucket",
        },
        {
          name: "DESTINATION",
          description:
            "Destination to copy logs to. Example: Cloud Storage bucket: storage.googleapis.com/my-cloud-storage-bucket",
        },
      ],
    },
    {
      name: "links",
      description: "Manage linked datasets",
      subcommands: [
        {
          name: "create",
          description: "Create a linked dataset on an analytics log bucket",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--billing-account",
              description: "Billing account of the linked dataset to create",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--bucket",
              description: "ID of the bucket that will hold the linked dataset",
              priority: 100,
              args: {
                name: "BUCKET",
              },
            },
            optConfiguration,
            {
              name: "--description",
              description: "A textual description for the linked dataset",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the linked dataset to create",
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
              name: "--location",
              description:
                "Location of the bucket that will hold the linked datasert",
              priority: 100,
              args: {
                name: "LOCATION",
              },
            },
            optLogHttp,
            optNoAsync,
            {
              name: "--organization",
              description: "Organization of the linked dataset to create",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "LINK_ID",
            description: "ID of the linked dataset to create",
          },
        },
        {
          name: "delete",
          description: "Delete a linked dataset",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--billing-account",
              description: "Billing account of the linked dataset to delete",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optBucket,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the linked dataset to delete",
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
            optLocation2,
            optLogHttp,
            optNoAsync,
            {
              name: "--organization",
              description: "Organization of the linked dataset to delete",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "LINK_ID",
            description: "ID of the linked dataset to delete",
          },
        },
        {
          name: "describe",
          description: "Display information about a linked dataset",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the linked dataset to describe",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optBucket,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the linked dataset to describe",
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
            optLocation2,
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the linked dataset to describe",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "LINK_ID",
            description: "Id of the linked dataset to describe",
          },
        },
        {
          name: "list",
          description: "List created linked datasets on the specified bucket",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the linked datasets to list",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optBucket,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the linked datasets to list",
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
            optLimit,
            {
              name: "--location",
              description: "Location of the specified bucket",
              priority: 100,
              args: {
                name: "LOCATION",
              },
            },
            optLogHttp,
            optNoUri,
            {
              name: "--organization",
              description: "Organization of the linked datasets to list",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optPageSize,
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
      name: "locations",
      description: "Query Cloud Logging locations",
      subcommands: [
        {
          name: "describe",
          description: "Display information about a location",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the location to describe",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the location to describe",
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
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the location to describe",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "LOCATION_ID",
            description: "Id of the location to describe",
          },
        },
        {
          name: "list",
          description: "List the availables location",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the locations to list",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the locations to list",
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
            optLimit,
            optLogHttp,
            optNoUri,
            {
              name: "--organization",
              description: "Organization of the locations to list",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optPageSize,
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
      name: "logs",
      description: "Manages your project's logs",
      subcommands: [
        {
          name: "delete",
          description:
            "Delete all entries from a log in the global ```_Default``` log bucket",
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
            name: "LOG_NAME",
            description: "Log name",
          },
        },
        {
          name: "list",
          description: "List your project's logs",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--bucket",
              description: "Id of the log bucket",
              priority: 100,
              args: {
                name: "BUCKET",
                description: "String",
              },
            },
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
              description: "Location of the log bucket",
              priority: 100,
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--view",
              description: "Id of the view",
              priority: 100,
              args: {
                name: "VIEW",
                description: "String",
              },
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
      name: "metrics",
      description: "Manages logs-based metrics",
      subcommands: [
        {
          name: "create",
          description: "Create a logs-based metric",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--bucket-name",
              description:
                "The Log Bucket name which owns the log-based metric",
              args: {
                name: "BUCKET_NAME",
                description: "String",
              },
            },
            {
              name: "--config-from-file",
              description:
                "A path to a YAML or JSON file specifying the logs-based metric to create. Use a full or relative path to a local file containing the value of config",
              args: {
                name: "CONFIG_FROM_FILE",
                template: "filepaths",
              },
            },
            optConfiguration,
            {
              name: "--description",
              description: "The metric's description",
              priority: 100,
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
              name: "--log-filter",
              description: "The metric's filter expression",
              priority: 100,
              args: {
                name: "LOG_FILTER",
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
            name: "METRIC_NAME",
            description: "The name of the new metric",
          },
        },
        {
          name: "delete",
          description: "Delete a logs-based metric",
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
            name: "METRIC_NAME",
            description: "The name of the metric to delete",
          },
        },
        {
          name: "describe",
          description: "Display the definition of a logs-based metric",
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
            name: "METRIC_NAME",
            description: "The name of the metric",
          },
        },
        {
          name: "list",
          description: "Display all logs-based metrics",
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
          description: "Update the definition of a logs-based metric",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--bucket-name",
              description:
                "The Log Bucket name which owns the log-based metric",
              args: {
                name: "BUCKET_NAME",
                description: "String",
              },
            },
            {
              name: "--config-from-file",
              description:
                "A path to a YAML file specifying the updates to be made to the logs-based metric. Use a full or relative path to a local file containing the value of config",
              args: {
                name: "CONFIG_FROM_FILE",
                template: "filepaths",
              },
            },
            optConfiguration,
            {
              name: "--description",
              description:
                "A new description for the metric. If omitted, the description is not changed",
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
              name: "--log-filter",
              description:
                "A new filter string for the metric. If omitted, the filter is not changed",
              args: {
                name: "LOG_FILTER",
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
            name: "METRIC_NAME",
            description: "The name of the log-based metric to update",
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
      name: "operations",
      description: "Manage long running operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a long running operation",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the operation to cancel",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the operation to cancel",
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
              name: "--location",
              description: "Location of the operation",
              priority: 100,
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the operation to cancel",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "OPERATION_ID",
            description: "The Id of the operation",
          },
        },
        {
          name: "describe",
          description: "Display the information about a long running operation",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the operation to describe",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the operation to describe",
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
              name: "--location",
              description: "Location of the operation",
              priority: 100,
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the operation to describe",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "OPERATION_ID",
            description: "The Id of the operation",
          },
        },
        {
          name: "list",
          description: "List long running operations",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the operations to list",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the operations to list",
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
            optLimit,
            {
              name: "--location",
              description: "Location of the operations",
              priority: 100,
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--operation-filter",
              description:
                "Filter expression that specifies the operations to return",
              priority: 100,
              args: {
                name: "OPERATION_FILTER",
                description: "String",
              },
            },
            {
              name: "--organization",
              description: "Organization of the operations to list",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optPageSize,
            {
              name: "--page-token",
              description:
                "The next_page_token value returned from a previous List request, if any",
              args: {
                name: "PAGE_TOKEN",
                description: "String",
              },
            },
            optQuiet,
            optSortBy,
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
      name: "read",
      description: "Read log entries",
      options: [
        optAccessTokenFile,
        optAccount,
        {
          name: "--billing-account",
          description: "Billing account of the log entries to read",
          args: {
            name: "BILLING_ACCOUNT_ID",
            description: "String",
          },
        },
        optBillingProject,
        {
          name: "--bucket",
          description:
            "Id of the log bucket. If this argument is provided then `--location` and `--view` must also be specified",
          priority: 100,
          args: {
            name: "BUCKET",
            description: "String",
          },
        },
        optConfiguration,
        optFlagsFile,
        optFlatten,
        {
          name: "--folder",
          description: "Folder of the log entries to read",
          args: {
            name: "FOLDER_ID",
            description: "String",
          },
        },
        optFormat,
        {
          name: "--freshness",
          description:
            "Return entries that are not older than this value. Works only with DESC ordering and filters without a timestamp. See $ gcloud topic datetimes for information on duration formats",
          args: {
            name: "FRESHNESS",
          },
        },
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLimit,
        {
          name: "--location",
          description:
            "Location of the log bucket. If this argument is provided then `--bucket` and `--view` must also be specified",
          priority: 100,
          args: {
            name: "LOCATION",
            description: "String",
          },
        },
        optLogHttp,
        {
          name: "--order",
          description:
            "Ordering of returned log entries based on timestamp field. _ORDER_ must be one of: *desc*, *asc*",
          args: {
            name: "ORDER",
            suggestions: ["desc", "asc"],
          },
        },
        {
          name: "--organization",
          description: "Organization of the log entries to read",
          args: {
            name: "ORGANIZATION_ID",
            description: "String",
          },
        },
        optQuiet,
        {
          name: "--resource-names",
          description:
            'Resource name(s) to read logs from. A resource can either be an top-level resource (e.g., "projects/my-project") or a full log view resource path (e.g., "projects/my-project/locations/my-location/buckets/my-bucket/views/my-view"). Multiple resources can be specified, separated by a comma',
          args: {
            name: "RESOURCE",
            description: "List",
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
        {
          name: "--view",
          description:
            "Id of the view. If this argument is provided then `--location` and `--bucket` must also be specified",
          priority: 100,
          args: {
            name: "VIEW",
            description: "String",
          },
        },
      ],
      args: {
        name: "LOG_FILTER",
        description:
          "Filter expression that specifies the log entries to return. Detailed information about filters can be found at: https://cloud.google.com/logging/docs/view/logging-query-language",
        isOptional: true,
      },
    },
    {
      name: "recent-queries",
      description: "Manage Cloud Logging recent queries",
      subcommands: [
        {
          name: "list",
          description: "List Logging recent queries",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description:
                "Billing account of the parent resource for recent queries to list",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description:
                "Folder of the parent resource for recent queries to list",
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
            optLimit,
            {
              name: "--location",
              description: "Location of the recent queries to list",
              priority: 100,
              args: {
                name: "LOCATION",
              },
            },
            optLogHttp,
            optNoUri,
            {
              name: "--organization",
              description:
                "Organization of the parent resource for recent queries to list",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optPageSize,
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
      name: "redact",
      description: "Redact log entries",
      hidden: true,
      options: [
        optAccessTokenFile,
        optAccount,
        {
          name: "--billing-account",
          description: "Billing account of the log entries to redact",
          args: {
            name: "BILLING_ACCOUNT_ID",
            description: "String",
          },
        },
        optBillingProject,
        optConfiguration,
        optFlagsFile,
        optFlatten,
        {
          name: "--folder",
          description: "Folder of the log entries to redact",
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
          name: "--location",
          description: "Location of the bucket",
          priority: 100,
          args: {
            name: "LOCATION",
            description: "String",
          },
        },
        {
          name: "--log-filter",
          description:
            "A filter specifying which log entries to Redact. The filter must be no more than 20k characters. An empty filter matches all log entries",
          args: {
            name: "LOG_FILTER",
            description: "String",
          },
        },
        optLogHttp,
        {
          name: "--organization",
          description: "Organization of the log entries to redact",
          args: {
            name: "ORGANIZATION_ID",
            description: "String",
          },
        },
        optQuiet,
        {
          name: "--reason",
          description:
            "The reason for the redaction. This field will be recorded in redacted log entries and should omit sensitive information. Required to be less than 1024 characters",
          priority: 100,
          args: {
            name: "REASON",
            description: "String",
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "BUCKET_ID",
        description: "Log bucket from which to redact log entries",
      },
    },
    {
      name: "resource-descriptors",
      description: "Get information about resource descriptors",
      subcommands: [
        {
          name: "list",
          description: "List all available resource descriptors",
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
            optProject,
            optQuiet,
            optSortBy,
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
      name: "saved-queries",
      description: "Manage Cloud Logging saved queries",
      subcommands: [
        {
          name: "create",
          description: "Create a Logging saved query",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the saved query to create",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "A textual description for the saved query",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Display name for the saved query",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the saved query to create",
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
            {
              name: "--id",
              description: "ID of the saved query to create",
              args: {
                name: "ID",
                description: "String",
              },
            },
            optImpersonateServiceAccount,
            {
              name: "--location",
              description: "Location to create the saved query in",
              priority: 100,
              args: {
                name: "LOCATION",
              },
            },
            {
              name: "--log-filter",
              description: "Filter expression for the log-based query",
              args: {
                name: "LOG_FILTER",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the saved query to create",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--sql-query-text",
              description: "SQL query text",
              args: {
                name: "SQL_QUERY_TEXT",
                description: "String",
              },
            },
            {
              name: "--summary-field-end",
              description:
                "Setting for number of characters to display for each summary field: characters will be counted from the end of the string. Requires the --summary-fields flag to be specified as well",
              args: {
                name: "SUMMARY_FIELD_END",
                description: "Int",
              },
            },
            {
              name: "--summary-field-start",
              description:
                "Setting for number of characters to display for each summary field: characters will be counted from the start of the string. Requires the --summary-fields flag to be specified as well",
              args: {
                name: "SUMMARY_FIELD_START",
                description: "Int",
              },
            },
            {
              name: "--summary-fields",
              description:
                "Comma-separated list of fields to include in the summary. This flag must be specified if --summary-field-start or --summary-field-end are provided",
              args: {
                name: "SUMMARY_FIELDS",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--visibility",
              description:
                "Visibility of the saved query. _VISIBILITY_ must be one of: *private*, *shared*",
              priority: 100,
              args: {
                name: "VISIBILITY",
                description: "String",
                suggestions: ["private", "shared"],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Logging saved query",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the saved query to delete",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the saved query to delete",
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
              name: "--location",
              description: "Location of the saved query to delete",
              priority: 100,
              args: {
                name: "LOCATION",
              },
            },
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the saved query to delete",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ID",
            description: "ID of the saved query to delete",
          },
        },
        {
          name: "describe",
          description: "A command that describes a Logging saved query",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the saved query to describe",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the saved query to describe",
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
              name: "--location",
              description: "Location of the saved query to describe",
              priority: 100,
              args: {
                name: "LOCATION",
              },
            },
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the saved query to describe",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ID",
            description: "ID of the saved query to describe",
          },
        },
        {
          name: "list",
          description: "List Logging saved queries",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description:
                "Billing account of the parent resource for saved queries to list",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description:
                "Folder of the parent resource for saved queries to list",
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
            optLimit,
            {
              name: "--location",
              description: "Location of the saved queries to list",
              priority: 100,
              args: {
                name: "LOCATION",
              },
            },
            optLogHttp,
            optNoUri,
            {
              name: "--organization",
              description:
                "Organization of the parent resource for saved queries to list",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optPageSize,
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
          description: "Update Logging saved queries",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-summary-field",
              description: "Add a summary field",
              args: {
                name: "ADD_SUMMARY_FIELD",
                description: "String",
              },
            },
            {
              name: "--billing-account",
              description: "Billing account of the saved query to update",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--clear-summary-fields",
              description: "Clear all summary fields",
            },
            optConfiguration,
            {
              name: "--description",
              description: "The description of the saved query",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "The display name of the saved query",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the saved query to update",
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
              name: "--location",
              description: "Location of the saved query",
              args: {
                name: "LOCATION",
              },
            },
            {
              name: "--log-filter",
              description:
                "The logging filter. If this argument is specified, --sql-query-text may not be specified",
              args: {
                name: "LOG_FILTER",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--name",
              description: "The resource name of the saved query",
              args: {
                name: "NAME",
                description: "String",
              },
            },
            {
              name: "--no-clear-summary-fields",
              description: "Clear all summary fields",
              hidden: true,
            },
            {
              name: "--organization",
              description: "Organization of the saved query to update",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--remove-summary-field",
              description: "Remove a summary field",
              args: {
                name: "REMOVE_SUMMARY_FIELD",
                description: "String",
              },
            },
            {
              name: "--sql-query-text",
              description:
                "The SQL query text. If this argument is specified, no LoggingQuery arguments (--log-filter, --add-summary-field, etc.) may be specified",
              args: {
                name: "SQL_QUERY_TEXT",
                description: "String",
              },
            },
            {
              name: "--summary-field-end",
              description: "Summary field end",
              args: {
                name: "SUMMARY_FIELD_END",
                description: "Int",
              },
            },
            {
              name: "--summary-field-start",
              description: "Summary field start",
              args: {
                name: "SUMMARY_FIELD_START",
                description: "Int",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--visibility",
              description: "The visibility of the saved query",
              args: {
                name: "VISIBILITY",
                description: "String",
              },
            },
          ],
          args: {
            name: "SAVED_QUERY_ID",
            description: "ID of the saved query to update",
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
      name: "scopes",
      description: "Manages Cloud Logging log scopes",
      subcommands: [
        {
          name: "create",
          description: "Create a log scope",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "A textual description for the log scope",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the log scope to create",
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
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the log scope to create",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--resource-names",
              description:
                "Comma-separated list of resource names in this log scope. It could be one or more parent resources or one or more views. A log scope can include a maximum of 50 projects and a maximum of 100 resources in total. For example, projects/[PROJECT_ID], projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`",
              priority: 100,
              args: {
                name: "RESOURCE_NAMES",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "LOG_SCOPE_ID",
            description: "ID of the log scope to create",
          },
        },
        {
          name: "delete",
          description: "Delete a log scope",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the log scope to delete",
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
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the log scope to delete",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "LOG_SCOPE_ID",
            description: "ID of the log scope to delete",
          },
        },
        {
          name: "describe",
          description: "Display information about a log scope",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the log scope to describe",
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
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the log scope to describe",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "LOG_SCOPE_ID",
            description: "The ID of the log scope to describe",
          },
        },
        {
          name: "list",
          description: "List the defined log scopes",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the log scopes to list",
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
            optLimit,
            optLogHttp,
            optNoUri,
            {
              name: "--organization",
              description: "Organization of the log scopes to list",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optPageSize,
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
          description: "Update a log scope",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "A new description for the log scope",
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
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--resource-names",
              description: "A new set of resource names for the log scope",
              args: {
                name: "RESOURCE_NAMES",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "LOG_SCOPE_ID",
            description: "The ID of the log scope to update",
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
      name: "settings",
      description: "Manages the org settings for the Cloud Logging Logs Router",
      subcommands: [
        {
          name: "describe",
          description: "Display the settings for the Cloud Logging Logs Router",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the settings to describe",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the settings to describe",
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
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the settings to describe",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Update the settings for the Cloud Logging Logs Router",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--analytics-mode",
              description:
                "Update the analytics mode for newly-created project buckets. Changing this setting does not modify any existing buckets",
              hidden: true,
              args: {
                name: "ANALYTICS_MODE",
                description: "String",
                suggestions: ["required", "optional", "unspecified"],
              },
            },
            optBillingProject,
            {
              name: "--clear-kms-key",
              description:
                "Disable CMEK for the Logs Router by clearing out Cloud KMS cryptokey in the organization's CMEK settings",
            },
            optConfiguration,
            {
              name: "--disable-default-sink",
              description:
                "Enable or disable ```_Default``` sink for the ```_Default``` bucket. Specify --no-disable-default-sink to enable a disabled ```_Default``` sink. Note: It only applies to the newly created projects and will not affect the projects created before",
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder to update Logs Router settings for",
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
              name: "--kms-key-name",
              description:
                "ID of the key or fully qualified identifier for the key",
              priority: 100,
              args: {
                name: "KMS_KEY_NAME",
                description: "String",
              },
            },
            {
              name: "--kms-keyring",
              description: "The KMS keyring of the key",
              args: {
                name: "KMS_KEYRING",
                description: "String",
              },
            },
            {
              name: "--kms-location",
              description: "The Google Cloud location for the key",
              args: {
                name: "KMS_LOCATION",
                description: "String",
              },
            },
            {
              name: "--kms-project",
              description: "The Google Cloud project for the key",
              args: {
                name: "KMS_PROJECT",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--no-clear-kms-key",
              description:
                "Disable CMEK for the Logs Router by clearing out Cloud KMS cryptokey in the organization's CMEK settings",
              hidden: true,
            },
            {
              name: "--no-disable-default-sink",
              description:
                "Enable or disable ```_Default``` sink for the ```_Default``` bucket. Specify --no-disable-default-sink to enable a disabled ```_Default``` sink. Note: It only applies to the newly created projects and will not affect the projects created before",
              hidden: true,
            },
            {
              name: "--organization",
              description: "Organization to update Logs Router settings for",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--storage-location",
              description:
                "Update the storage location for ```_Default``` bucket and ```_Required``` bucket. Note: It only applies to the newly created projects and will not affect the projects created before",
              args: {
                name: "STORAGE_LOCATION",
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
      name: "sinks",
      description:
        "Manages sinks used to route logs to storage or export destinations",
      subcommands: [
        {
          name: "create",
          description: "Create a log sink",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the sink to create",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--custom-writer-identity",
              description:
                "Writer identity for the sink. This flag can only be used if the destination is a log bucket in a different project. The writer identity is automatically generated when it is not provided for a sink",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "String",
              },
            },
            {
              name: "--description",
              description: "Description of the sink",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--disabled",
              description:
                "Sink will be disabled. Disabled sinks do not export logs",
            },
            {
              name: "--exclusion",
              description:
                "Specify an exclusion filter for a log entry that is not to be exported. This flag can be repeated",
              isRepeatable: true,
              args: {
                name: "EXCLUSION",
                description: "Dict",
              },
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the sink to create",
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
              name: "--include-children",
              description:
                "Whether to export logs from all child projects and folders. Only applies to sinks for organizations and folders",
            },
            {
              name: "--intercept-children",
              description:
                "Whether to intercept logs from all child projects and folders. Only applies to sinks for organizations and folders",
            },
            {
              name: "--log-filter",
              description:
                "A filter expression for the sink. If present, the filter specifies which log entries to export",
              args: {
                name: "LOG_FILTER",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--no-disabled",
              description:
                "Sink will be disabled. Disabled sinks do not export logs",
              hidden: true,
            },
            {
              name: "--no-include-children",
              description:
                "Whether to export logs from all child projects and folders. Only applies to sinks for organizations and folders",
              hidden: true,
            },
            {
              name: "--no-intercept-children",
              description:
                "Whether to intercept logs from all child projects and folders. Only applies to sinks for organizations and folders",
              hidden: true,
            },
            {
              name: "--no-use-partitioned-tables",
              description:
                "If specified, use BigQuery's partitioned tables. By default, Logging creates dated tables based on the log entries' timestamps, e.g. 'syslog_20170523'. Partitioned tables remove the suffix and special query syntax (https://cloud.google.com/bigquery/docs/querying-partitioned-tables) must be used",
              hidden: true,
            },
            {
              name: "--organization",
              description: "Organization of the sink to create",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            {
              name: "--use-partitioned-tables",
              description:
                "If specified, use BigQuery's partitioned tables. By default, Logging creates dated tables based on the log entries' timestamps, e.g. 'syslog_20170523'. Partitioned tables remove the suffix and special query syntax (https://cloud.google.com/bigquery/docs/querying-partitioned-tables) must be used",
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "SINK_NAME",
              description: "The name for the sink",
            },
            {
              name: "DESTINATION",
              description: "The destination for the sink",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a sink",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the sink to delete",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the sink to delete",
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
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the sink to delete",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SINK_NAME",
            description: "The name of the sink to delete",
          },
        },
        {
          name: "describe",
          description: "Display information about a sink",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the sink to describe",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the sink to describe",
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
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the sink to describe",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SINK_NAME",
            description: "The name of the sink to describe",
          },
        },
        {
          name: "list",
          description: "List the defined sinks",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the sinks to list",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the sinks to list",
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
            optLimit,
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the sinks to list",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--sink-filter",
              description:
                "A filter expression passed to the Logging API to constrain the sinks returned. For information on accepted values, see https://cloud.google.com/logging/docs/reference/v2/rpc/google.logging.v2#listsinksrequest",
              args: {
                name: "SINK_FILTER",
                description: "String",
              },
            },
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Update a sink",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-exclusion",
              description:
                "Add an exclusion filter for log entries that are not to be routed to the sink' destination. This flag can be repeated",
              isRepeatable: true,
              args: {
                name: "ADD_EXCLUSION",
                description: "Dict",
              },
            },
            {
              name: "--billing-account",
              description: "Billing account of the sink to update",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--clear-exclusions",
              description: "Remove all logging exclusions from the sink",
            },
            optConfiguration,
            {
              name: "--custom-writer-identity",
              description:
                "Writer identity for the sink. This flag can only be used if the destination is a log bucket in a different project. The writer identity is automatically generated when it is not provided for a sink",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "String",
              },
            },
            {
              name: "--description",
              description: "Description of the sink",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--disabled",
              description:
                "Disable the sink. Disabled sinks do not route logs to the sink destination. Specify --no-disabled to enable a disabled sink. If this flag is not specified, the value will not be updated",
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the sink to update",
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
              name: "--include-children",
              description:
                "Whether to export logs from all child projects and folders. Only applies to sinks for organizations and folders",
            },
            {
              name: "--intercept-children",
              description:
                "Whether to intercept logs from all child projects and folders. Only applies to sinks for organizations and folders",
            },
            {
              name: "--log-filter",
              description:
                "A new filter expression for the sink. If omitted, the sink's existing filter (if any) is unchanged",
              args: {
                name: "LOG_FILTER",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--no-clear-exclusions",
              description: "Remove all logging exclusions from the sink",
              hidden: true,
            },
            {
              name: "--no-disabled",
              description:
                "Disable the sink. Disabled sinks do not route logs to the sink destination. Specify --no-disabled to enable a disabled sink. If this flag is not specified, the value will not be updated",
              hidden: true,
            },
            {
              name: "--no-include-children",
              description:
                "Whether to export logs from all child projects and folders. Only applies to sinks for organizations and folders",
              hidden: true,
            },
            {
              name: "--no-intercept-children",
              description:
                "Whether to intercept logs from all child projects and folders. Only applies to sinks for organizations and folders",
              hidden: true,
            },
            {
              name: "--no-use-partitioned-tables",
              description:
                "If specified, use BigQuery's partitioned tables. By default, Logging creates dated tables based on the log entries' timestamps, e.g. 'syslog_20170523'. Partitioned tables remove the suffix and special query syntax (https://cloud.google.com/bigquery/docs/querying-partitioned-tables) must be used",
              hidden: true,
            },
            {
              name: "--organization",
              description: "Organization of the sink to update",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--remove-exclusions",
              description:
                "Specify the name of the Logging exclusion(s) to delete",
              args: {
                name: "EXCLUSION ID",
                description: "List",
              },
            },
            optTraceToken,
            {
              name: "--update-exclusion",
              description:
                "Update an exclusion filter for a log entry that is not to be exported. This flag can be repeated",
              isRepeatable: true,
              args: {
                name: "UPDATE_EXCLUSION",
                description: "Dict",
              },
            },
            {
              name: "--use-partitioned-tables",
              description:
                "If specified, use BigQuery's partitioned tables. By default, Logging creates dated tables based on the log entries' timestamps, e.g. 'syslog_20170523'. Partitioned tables remove the suffix and special query syntax (https://cloud.google.com/bigquery/docs/querying-partitioned-tables) must be used",
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "SINK_NAME",
              description: "The name of the sink to update",
            },
            {
              name: "DESTINATION",
              description:
                "A new destination for the sink. If omitted, the sink's existing destination is unchanged",
              isOptional: true,
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
      name: "views",
      description: "Manage log views",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a log view",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description:
                "Billing account of the view that contains the IAM policy",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optBucket2,
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
            {
              name: "--folder",
              description: "Folder of the view that contains the IAM policy",
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
            {
              name: "--organization",
              description:
                "Organization of the view that contains the IAM policy",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
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
            name: "VIEW_ID",
            description: "ID of the view that contains the IAM policy",
          },
        },
        {
          name: "create",
          description: "Create a log view on a log bucket",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the view to create",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--bucket",
              description: "ID of the bucket that will hold the view",
              priority: 100,
              args: {
                name: "BUCKET",
              },
            },
            optConfiguration,
            {
              name: "--description",
              description: "A textual description for the view",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the view to create",
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
              name: "--location",
              description: "Location of the bucket that will hold the view",
              priority: 100,
              args: {
                name: "LOCATION",
              },
            },
            {
              name: "--log-filter",
              description: "A filter for the view",
              args: {
                name: "LOG_FILTER",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the view to create",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VIEW_ID",
            description: "ID of the view to create",
          },
        },
        {
          name: "delete",
          description: "Delete a view",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the view to delete",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optBucket,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the view to delete",
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
            optLocation2,
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the view to delete",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VIEW_ID",
            description: "ID of the view to delete",
          },
        },
        {
          name: "describe",
          description: "Display information about a view",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the view to describe",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optBucket,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the view to describe",
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
            optLocation2,
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the view to describe",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VIEW_ID",
            description: "Id of the view to describe",
          },
        },
        {
          name: "get-iam-policy",
          description: "Display the IAM policy for a view",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the view to fetch IAM policy",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--bucket",
              description: "ID of the bucket that holds the view",
              priority: 100,
              args: {
                name: "BUCKET",
              },
            },
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the view to fetch IAM policy",
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
            optLocation,
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the view to fetch IAM policy",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VIEW_ID",
            description: "ID of the view to fetch IAM policy",
          },
        },
        {
          name: "list",
          description: "List the defined views",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the views to list",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optBucket,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the views to list",
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
            optLimit,
            {
              name: "--location",
              description: "Location of the specified bucket",
              priority: 100,
              args: {
                name: "LOCATION",
              },
            },
            optLogHttp,
            optNoUri,
            {
              name: "--organization",
              description: "Organization of the views to list",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optPageSize,
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
          description: "Remove IAM policy binding to a log view",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--all",
              description:
                "Remove all bindings with this role and principal, irrespective of any conditions",
            },
            {
              name: "--billing-account",
              description:
                "Billing account of the view that contains the IAM policy",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optBucket2,
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
            {
              name: "--folder",
              description: "Folder of the view that contains the IAM policy",
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
            {
              name: "--organization",
              description:
                "Organization of the view that contains the IAM policy",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
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
            name: "VIEW_ID",
            description: "ID of the view that contains the IAM policy",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set IAM policy for a view",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the view to set IAM policy",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            optBucket2,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the view to set IAM policy",
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
            optLocation,
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the view to set IAM policy",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "VIEW_ID",
              description: "ID of the view to set IAM policy",
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
          description: "Update a view",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description: "Billing account of the view to update",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--bucket",
              description: "ID of the bucket that holds the view",
              priority: 100,
              args: {
                name: "BUCKET",
              },
            },
            optConfiguration,
            {
              name: "--description",
              description: "New description for the view",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description: "Folder of the view to update",
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
            optLocation,
            {
              name: "--log-filter",
              description: "New filter for the view",
              args: {
                name: "LOG_FILTER",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the view to update",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VIEW_ID",
            description: "Id of the view to update",
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
      name: "write",
      description: "Write a log entry",
      options: [
        optAccessTokenFile,
        optAccount,
        {
          name: "--billing-account",
          description: "Billing account of the log entries to write",
          args: {
            name: "BILLING_ACCOUNT_ID",
            description: "String",
          },
        },
        optBillingProject,
        optConfiguration,
        optFlagsFile,
        optFlatten,
        {
          name: "--folder",
          description: "Folder of the log entries to write",
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
        optLogHttp,
        {
          name: "--monitored-resource-labels",
          description: "Monitored Resource labels to add to the payload",
          args: {
            name: "KEY=VALUE, ...",
            description: "Dict",
          },
        },
        {
          name: "--monitored-resource-type",
          description: "Monitored Resource type to add to the payload",
          args: {
            name: "MONITORED_RESOURCE_TYPE",
            description: "String",
          },
        },
        {
          name: "--organization",
          description: "Organization of the log entries to write",
          args: {
            name: "ORGANIZATION_ID",
            description: "String",
          },
        },
        {
          name: "--payload-type",
          description:
            "Type of the log entry payload. _PAYLOAD_TYPE_ must be one of: *text*, *json*",
          args: {
            name: "PAYLOAD_TYPE",
            description: "String",
            suggestions: ["text", "json"],
          },
        },
        optQuiet,
        {
          name: "--severity",
          description:
            "Severity level of the log entry. _SEVERITY_ must be one of: *DEFAULT*, *DEBUG*, *INFO*, *NOTICE*, *WARNING*, *ERROR*, *CRITICAL*, *ALERT*, *EMERGENCY*",
          args: {
            name: "SEVERITY",
            description: "String",
            suggestions: [
              "DEFAULT",
              "DEBUG",
              "INFO",
              "NOTICE",
              "WARNING",
              "ERROR",
              "CRITICAL",
              "ALERT",
              "EMERGENCY",
            ],
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: [
        {
          name: "LOG_NAME",
          description: "Name of the log where the log entry will be written",
        },
        {
          name: "MESSAGE",
          description:
            "Message to put in the log entry. It can be JSON if you include `--payload-type=json`",
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
};

export default completionSpec;
