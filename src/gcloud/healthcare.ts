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

const optDataset: Fig.Option = {
  name: "--dataset",
  description: "Cloud Healthcare dataset",
  args: {
    name: "DATASET",
    description: "String",
  },
};

const optDataset2: Fig.Option = {
  name: "--dataset",
  description:
    "ID of the dataset or fully qualified identifier for the dataset",
  priority: 100,
  args: {
    name: "DATASET",
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
  description: "Google Cloud location",
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

const optPubsubTopic: Fig.Option = {
  name: "--pubsub-topic",
  description: "Google Cloud Pub/Sub topic to send updates to",
  args: {
    name: "PUBSUB_TOPIC",
    description: "String",
  },
};

const optQuiet: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input is required, defaults will be used, or an error will be raised",
};

const optRequestAttributes: Fig.Option = {
  name: "--request-attributes",
  description:
    'Comma-separated list of request attributes associated with this access request. Each attribute has the form "KEY=VALUE"',
  args: {
    name: "KEY=VALUE",
    description: "Dict",
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
  name: "healthcare",
  description: "Manage Cloud Healthcare resources",
  subcommands: [
    {
      name: "consent-stores",
      description: "Manage Cloud Healthcare API consent stores",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "Add an IAM policy binding to a Cloud Healthcare API consent store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCondition,
            optConditionFromFile,
            optConfiguration,
            optDataset,
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
            optMember,
            optProject,
            optQuiet,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONSENT_STORE",
            description:
              "ID of the consentStore or fully qualified identifier for the consentStore",
          },
        },
        {
          name: "check-data-access",
          description: "Check the consent for a particular data ID",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--data-id",
              description:
                "The unique identifier of the data to check access for",
              priority: 100,
              args: {
                name: "DATA_ID",
                description: "String",
              },
            },
            optDataset,
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
            optRequestAttributes,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONSENT_STORE",
            description:
              "ID of the consentStore or fully qualified identifier for the consentStore",
          },
        },
        {
          name: "create",
          description: "Create a Cloud Healthcare API consent store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
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
              description: "List of label KEY=VALUE pairs to add",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optLocation,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONSENT_STORE",
            description:
              "ID of the consentStore or fully qualified identifier for the consentStore",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Healthcare API consent store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
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
            name: "CONSENT_STORE",
            description:
              "ID of the consentStore or fully qualified identifier for the consentStore",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Healthcare API consent store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
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
            name: "CONSENT_STORE",
            description:
              "ID of the consentStore or fully qualified identifier for the consentStore",
          },
        },
        {
          name: "evaluate-user-consents",
          description: "Check the consents for a particular user's data",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--consent-list",
              description:
                "List of user consents to evaluate the access request against. They must have the same user_id as the data to check access for, exist in the current consent_store, and have a state of either ACTIVE or DRAFT. A maximum of 100 consents can be provided here",
              args: {
                name: "CONSENT_LIST",
                description: "List",
              },
            },
            optDataset,
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
              name: "--page-size",
              description:
                "Limit on the number of user data mappings to return in a single response. If zero the default page size of 100 is used",
              args: {
                name: "PAGE_SIZE",
                description: "Int",
              },
            },
            {
              name: "--page-token",
              description: "Token to retrieve the next page of results",
              args: {
                name: "PAGE_TOKEN",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optRequestAttributes,
            {
              name: "--resource-attributes",
              description:
                'Comma-separated list of resource attributes associated with this access request. Each attribute has the form "KEY=VALUE". If no values are specified, then all data types are queried',
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--response-view",
              description:
                "The requested view of information provided in the response (BASIC or FULL). _RESPONSE_VIEW_ must be one of: *basic*, *full*, *response-view-unspecified*",
              args: {
                name: "RESPONSE_VIEW",
                suggestions: ["basic", "full", "response-view-unspecified"],
              },
            },
            optTraceToken,
            {
              name: "--user-id",
              description:
                "The unique identifier of the user to evaluate consents for",
              priority: 100,
              args: {
                name: "USER_ID",
                description: "String",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONSENT_STORE",
            description:
              "ID of the consentStore or fully qualified identifier for the consentStore",
          },
        },
        {
          name: "get-iam-policy",
          description:
            "Retrieve the IAM policy for a Cloud Healthcare API consent store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
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
            name: "CONSENT_STORE",
            description:
              "ID of the consentStore or fully qualified identifier for the consentStore",
          },
        },
        {
          name: "list",
          description: "List Cloud Healthcare API consent stores",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset2,
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
          name: "query-accessible-data",
          description: "Queries all accessible data IDs",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optDataset,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gcs-uri",
              description:
                "The Cloud Storage destination for the result file. The Cloud Healthcare API service account must have the `roles/storage.objectAdmin` Cloud IAM role for this Cloud Storage location",
              priority: 100,
              args: {
                name: "GCS_URI",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRequestAttributes,
            {
              name: "--resource-attributes",
              description:
                'Comma-separated list of resources attributes associated with the type of data being requested. Each attribute has the form "KEY=VALUE". If no values are specified, then all data types are included in the output',
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
            name: "CONSENT_STORE",
            description:
              "ID of the consentStore or fully qualified identifier for the consentStore",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding from a Cloud Healthcare API consent store",
          options: [
            optAccessTokenFile,
            optAccount,
            optAll,
            optBillingProject,
            optCondition2,
            optConditionFromFile,
            optConfiguration,
            optDataset,
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
            optMember2,
            optNoAll,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONSENT_STORE",
            description:
              "ID of the consentStore or fully qualified identifier for the consentStore",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set the IAM policy for a Cloud Healthcare API consent store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
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
              name: "CONSENT_STORE",
              description:
                "ID of the consentStore or fully qualified identifier for the consentStore",
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
          description: "Update a Cloud Healthcare API consent store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
            },
            optConfiguration,
            optDataset,
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
              name: "--no-clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
              hidden: true,
            },
            optProject,
            optQuiet,
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
            name: "CONSENT_STORE",
            description:
              "ID of the consentStore or fully qualified identifier for the consentStore",
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
      name: "datasets",
      description: "Manage Cloud Healthcare API datasets",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "Add an IAM policy binding to a Cloud Healthcare API dataset",
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
            optLocation,
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
            name: "DATASET",
            description:
              "ID of the dataset or fully qualified identifier for the dataset",
          },
        },
        {
          name: "create",
          description: "Create a Cloud Healthcare API dataset",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--encryption-key",
              description:
                "KMS encryption key that is used to secure this dataset and its sub-resources. The key used for encryption and the dataset must be in the same location. If empty, the default Google encryption key will be used to secure this dataset. The format is projects/{projectId}/locations/{locationId}/keyRings/{keyRingId}/cryptoKeys/{keyId}",
              args: {
                name: "ENCRYPTION_KEY",
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
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--time-zone",
              description: "Default timezone used by this dataset",
              args: {
                name: "TIME_ZONE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DATASET",
            description:
              "ID of the dataset or fully qualified identifier for the dataset",
          },
        },
        {
          name: "deidentify",
          description:
            "Create a new Cloud Healthcare API dataset containing de-identified data from the source dataset",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--default-fhir-config",
              description: "Deidentify FHIR data with default configurations",
            },
            {
              name: "--destination-dataset",
              description:
                "The name of the dataset resource to which the redacted data should be written (e.g., projects/{projectId}/locations/{locationId}/datasets/{datasetId}). The new dataset must not exist, or the request will fail",
              priority: 100,
              args: {
                name: "DESTINATION_DATASET",
                description: "String",
              },
            },
            {
              name: "--dicom-filter-tags",
              description:
                'Tags to be filtered. Tags must be DICOM Data Elements, File Meta Elements, or Directory Structuring Elements, as defined at: http://dicom.nema.org/medical/dicom/current/output/html/part06.html#table_6-1,. They may be provided by "Keyword" or "Tag". For example "PatientID", "0010,0010"',
              args: {
                name: "DICOM_FILTER_TAGS",
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
            optLocation,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-default-fhir-config",
              description: "Deidentify FHIR data with default configurations",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--text-redaction-mode",
              description:
                "Determines how to redact text from image. _TEXT_REDACTION_MODE_ must be (only one value is supported):",
              args: {
                name: "TEXT_REDACTION_MODE",
                suggestions: ["all"],
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DATASET",
            description:
              "ID of the dataset or fully qualified identifier for the dataset",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Healthcare API dataset",
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
            name: "DATASET",
            description:
              "ID of the dataset or fully qualified identifier for the dataset",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Healthcare API dataset",
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
            name: "DATASET",
            description:
              "ID of the dataset or fully qualified identifier for the dataset",
          },
        },
        {
          name: "get-iam-policy",
          description:
            "Retrieve the IAM policy for a Cloud Healthcare API dataset",
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
            name: "DATASET",
            description:
              "ID of the dataset or fully qualified identifier for the dataset",
          },
        },
        {
          name: "list",
          description: "List Cloud Healthcare API datasets",
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
          description:
            "Remove an IAM policy binding to a Cloud Healthcare API dataset",
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
            optLocation,
            optLogHttp,
            optMember2,
            optNoAll,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DATASET",
            description:
              "ID of the dataset or fully qualified identifier for the dataset",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a Cloud Healthcare API dataset",
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
              name: "DATASET",
              description:
                "ID of the dataset or fully qualified identifier for the dataset",
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
          description: "Update a Cloud Healthcare API dataset",
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
              name: "--time-zone",
              description: "Default timezone used by this dataset",
              args: {
                name: "TIME_ZONE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DATASET",
            description:
              "ID of the dataset or fully qualified identifier for the dataset",
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
      name: "dicom-stores",
      description: "Manage Cloud Healthcare API DICOM stores",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "Add an IAM policy binding to a Cloud Healthcare API DICOM store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCondition,
            optConditionFromFile,
            optConfiguration,
            optDataset,
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
            optMember,
            optProject,
            optQuiet,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DICOM_STORE",
            description:
              "ID of the dicomStore or fully qualified identifier for the dicomStore",
          },
        },
        {
          name: "create",
          description: "Create a Cloud Healthcare API DICOM store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
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
              name: "--no-send-for-bulk-import",
              description:
                "Indicates whether or not to send Cloud Pub/Sub notifications on bulk import. Only supported for DICOM imports",
              hidden: true,
            },
            optProject,
            optPubsubTopic,
            optQuiet,
            {
              name: "--send-for-bulk-import",
              description:
                "Indicates whether or not to send Cloud Pub/Sub notifications on bulk import. Only supported for DICOM imports",
            },
            {
              name: "--stream-configs",
              description:
                "Configuration that indicates the BigQuery destinations for streaming instances of a DICOM store. To specify StreamConfigs, list all BigQuery destinations into one string separated by comma. (e.g., --stream-configs bq://{bigqueryProjectId1}.{bigqueryDatasetId1}.{bigqueryTableId1},bq://{bigqueryProjectId2}.{bigqueryDatasetId2}.{bigqueryTableId2})",
              args: {
                name: "STREAM_CONFIGS",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DICOM_STORE",
            description:
              "ID of the dicomStore or fully qualified identifier for the dicomStore",
          },
        },
        {
          name: "deidentify",
          description:
            "De-identify data from the source store and write it to the destination store",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optDataset,
            {
              name: "--destination-store",
              description:
                "The name of the DICOM store to which the redacted data should be written (e.g., projects/{projectId}/locations/{locationId}/datasets/{datasetId}/dicomStores/{dicomStoreId}). The destination DICOM store must already exist, or the request will fail",
              priority: 100,
              args: {
                name: "DESTINATION_STORE",
                description: "String",
              },
            },
            {
              name: "--dicom-filter-tags",
              description:
                'Tags to be filtered. Tags must be DICOM Data Elements, File Meta Elements, or Directory Structuring Elements, as defined at: http://dicom.nema.org/medical/dicom/current/output/html/part06.html#table_6-1,. They may be provided by "Keyword" or "Tag". For example "PatientID", "0010,0010"',
              args: {
                name: "DICOM_FILTER_TAGS",
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
            optLocation,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--text-redaction-mode",
              description:
                "Determines how to redact text from image. _TEXT_REDACTION_MODE_ must be (only one value is supported):",
              args: {
                name: "TEXT_REDACTION_MODE",
                suggestions: ["all"],
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DICOM_STORE",
            description:
              "ID of the dicomStore or fully qualified identifier for the dicomStore",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Healthcare API DICOM store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
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
            name: "DICOM_STORE",
            description:
              "ID of the dicomStore or fully qualified identifier for the dicomStore",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Healthcare API DICOM store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
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
            name: "DICOM_STORE",
            description:
              "ID of the dicomStore or fully qualified identifier for the dicomStore",
          },
        },
        {
          name: "export",
          description: "Manage Cloud Healthcare API DICOM store exports",
          subcommands: [
            {
              name: "bq",
              description:
                "Export a Cloud Healthcare API API DICOM store to BigQuery",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                {
                  name: "--bq-table",
                  description:
                    "The BigQuery table where the DICOM store should be written. If this table does not exist, a new table with the given name will be created",
                  priority: 100,
                  args: {
                    name: "BQ_TABLE",
                    description: "String",
                  },
                },
                optConfiguration,
                optDataset,
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
                optNoAsync,
                {
                  name: "--no-overwrite-table",
                  description:
                    "If the destination table already exists and this flag is `TRUE`, the table will be overwritten by the contents of the DICOM store. If the flag is not set and the destination table already exists, the export call returns an error",
                  hidden: true,
                },
                {
                  name: "--overwrite-table",
                  description:
                    "If the destination table already exists and this flag is `TRUE`, the table will be overwritten by the contents of the DICOM store. If the flag is not set and the destination table already exists, the export call returns an error",
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--write-disposition",
                  description:
                    "Determines whether the existing table in the destination is to be overwritten or appended to. _WRITE_DISPOSITION_ must be one of:",
                  args: {
                    name: "WRITE_DISPOSITION",
                    description: "String",
                    suggestions: [
                      "write-append",
                      "write-empty",
                      "write-truncate",
                    ],
                  },
                },
              ],
              args: {
                name: "DICOM_STORE",
                description:
                  "ID of the dicomStore or fully qualified identifier for the dicomStore",
              },
            },
            {
              name: "gcs",
              description:
                "Export a Cloud Healthcare API DICOM store to Google Cloud Storage",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optDataset,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--gcs-uri-prefix",
                  description:
                    "URI for a Google Cloud Storage directory to which result files should be written (for example, `gs://bucket-id/path/to/destination/dir`). If there is no trailing slash, the service will append one when composing the object path. The user is responsible for creating the Google Cloud Storage bucket referenced in `uri_prefix`",
                  priority: 100,
                  args: {
                    name: "GCS_URI_PREFIX",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLocation,
                optLogHttp,
                {
                  name: "--mime-type",
                  description:
                    "'MIME types supported by DICOM spec. Each file will be written in the following format: `.../{study_id}/{series_id}/{instance_id}[/{frame_number}].{extension}` The frame_number component will exist only for multi-frame instances. Refer to the DICOM conformance statement for permissible MIME types: https://cloud.google.com/healthcare/docs/dicom#wado-rs The following extensions will be used for output files: * application/dicom -> .dcm * image/jpeg -> .jpg * image/png -> .png",
                  args: {
                    name: "MIME_TYPE",
                    description: "String",
                  },
                },
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "DICOM_STORE",
                description:
                  "ID of the dicomStore or fully qualified identifier for the dicomStore",
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
          description:
            "Retrieve the IAM policy for a Cloud Healthcare API DICOM store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
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
            name: "DICOM_STORE",
            description:
              "ID of the dicomStore or fully qualified identifier for the dicomStore",
          },
        },
        {
          name: "import",
          description: "Manage Cloud Healthcare API DICOM store imports",
          subcommands: [
            {
              name: "gcs",
              description:
                "Import DICOM objects into a Cloud Healthcare API DICOM store",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optDataset,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--gcs-uri",
                  description:
                    "Google Cloud Storage URI containing DICOM object data. It must match individual DICOM files or use wildcards to import multiple files from one or more directories. * Use * to match 0 or more non-separator characters. For example, `gs://BUCKET/DIRECTORY/Example*.dcm` matches Example.dcm and Example22.dcm in DIRECTORY. * Use ** to match 0 or more characters (including separators). Must be used at the end of a path and with no other wildcards in the path. Can also be used with a filename extension (such as .dcm), which imports all files with the filename extension in the specified directory and its subdirectories. For example, gs://BUCKET/DIRECTORY/**.dcm imports all files with the .dcm filename extension in DIRECTORY and its subdirectories. * Use ? to match 1 character. For example, gs://BUCKET/DIRECTORY/Example?.dcm matches Example1.dcm but does not match Example.dcm or Example01.dcm",
                  priority: 100,
                  args: {
                    name: "GCS_URI",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLocation,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "DICOM_STORE",
                description:
                  "ID of the dicomStore or fully qualified identifier for the dicomStore",
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
          description: "List Cloud Healthcare API DICOM stores",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset2,
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
          name: "metrics",
          description: "Get the metrics for a Cloud Healthcare API DICOM store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
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
            name: "DICOM_STORE",
            description:
              "ID of the dicomStore or fully qualified identifier for the dicomStore",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding from a Cloud Healthcare API DICOM store",
          options: [
            optAccessTokenFile,
            optAccount,
            optAll,
            optBillingProject,
            optCondition2,
            optConditionFromFile,
            optConfiguration,
            optDataset,
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
            optMember2,
            optNoAll,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DICOM_STORE",
            description:
              "ID of the dicomStore or fully qualified identifier for the dicomStore",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set the IAM policy for a Cloud Healthcare API DICOM store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
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
              name: "DICOM_STORE",
              description:
                "ID of the dicomStore or fully qualified identifier for the dicomStore",
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
          description: "Update a Cloud Healthcare API DICOM store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
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
              name: "--no-send-for-bulk-import",
              description:
                "Indicates whether or not to send Cloud Pub/Sub notifications on bulk import. Only supported for DICOM imports",
              hidden: true,
            },
            optProject,
            optPubsubTopic,
            optQuiet,
            {
              name: "--send-for-bulk-import",
              description:
                "Indicates whether or not to send Cloud Pub/Sub notifications on bulk import. Only supported for DICOM imports",
            },
            {
              name: "--stream-configs",
              description:
                "Configuration that indicates the BigQuery destinations for streaming instances of a DICOM store. To specify StreamConfigs, list all BigQuery destinations into one string separated by comma. (e.g., --stream-configs bq://{bigqueryProjectId1}.{bigqueryDatasetId1}.{bigqueryTableId1},bq://{bigqueryProjectId2}.{bigqueryDatasetId2}.{bigqueryTableId2})",
              args: {
                name: "STREAM_CONFIGS",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DICOM_STORE",
            description:
              "ID of the dicomStore or fully qualified identifier for the dicomStore",
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
      name: "fhir-stores",
      description: "Manage Cloud Healthcare API FHIR stores",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "Add an IAM policy binding to a Cloud Healthcare API FHIR store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCondition,
            optConditionFromFile,
            optConfiguration,
            optDataset,
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
            optMember,
            optProject,
            optQuiet,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FHIR_STORE",
            description:
              "ID of the fhirStore or fully qualified identifier for the fhirStore",
          },
        },
        {
          name: "create",
          description: "Create a Cloud Healthcare API FHIR store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
            {
              name: "--disable-referential-integrity",
              description:
                "Whether to disable referential integrity in this FHIR store. Default value is false, meaning that the API will enforce referential integrity and fail the requests that will result in inconsistent state in the FHIR store. When this field is set to true, the API will skip referential integrity check. This field is immutable after store creation",
            },
            {
              name: "--disable-resource-versioning",
              description:
                "Whether to disable resource versioning for this FHIR store. If set to false, which is the default behavior, all write operations will cause historical versions to be recorded automatically. Historical versions can be fetched through the history APIs, but cannot be updated. This field is immutable after store creation",
            },
            {
              name: "--enable-update-create",
              description:
                "Whether this FHIR store has the [updateCreate] (https://www.hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.resource.updateCreate) capability. Determines if the client can use an Update operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through the Create operation and attempts to Update a non-existent resource will return errors",
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
              name: "--no-disable-referential-integrity",
              description:
                "Whether to disable referential integrity in this FHIR store. Default value is false, meaning that the API will enforce referential integrity and fail the requests that will result in inconsistent state in the FHIR store. When this field is set to true, the API will skip referential integrity check. This field is immutable after store creation",
              hidden: true,
            },
            {
              name: "--no-disable-resource-versioning",
              description:
                "Whether to disable resource versioning for this FHIR store. If set to false, which is the default behavior, all write operations will cause historical versions to be recorded automatically. Historical versions can be fetched through the history APIs, but cannot be updated. This field is immutable after store creation",
              hidden: true,
            },
            {
              name: "--no-enable-update-create",
              description:
                "Whether this FHIR store has the [updateCreate] (https://www.hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.resource.updateCreate) capability. Determines if the client can use an Update operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through the Create operation and attempts to Update a non-existent resource will return errors",
              hidden: true,
            },
            optProject,
            optPubsubTopic,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FHIR_STORE",
            description:
              "ID of the fhirStore or fully qualified identifier for the fhirStore",
          },
        },
        {
          name: "deidentify",
          description:
            "De-identify data from the source store and write it to the destination store",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optDataset,
            {
              name: "--destination-store",
              description:
                "The name of the FHIR store to which the redacted data should be written (e.g., projects/{projectId}/locations/{locationId}/datasets/{datasetId}/fhirStores/{fhirStoreId}). The destination FHIR store must already exist, or the request will fail",
              priority: 100,
              args: {
                name: "DESTINATION_STORE",
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
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FHIR_STORE",
            description:
              "ID of the fhirStore or fully qualified identifier for the fhirStore",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Healthcare API FHIR store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
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
            name: "FHIR_STORE",
            description:
              "ID of the fhirStore or fully qualified identifier for the fhirStore",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Healthcare API FHIR store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
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
            name: "FHIR_STORE",
            description:
              "ID of the fhirStore or fully qualified identifier for the fhirStore",
          },
        },
        {
          name: "export",
          description: "Manage Cloud Healthcare API FHIR store exports",
          subcommands: [
            {
              name: "bq",
              description:
                "Export Cloud Healthcare API FHIR resources to BigQuery",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                {
                  name: "--bq-dataset",
                  description:
                    "BigQuery dataset that houses the BigQuery tables",
                  priority: 100,
                  args: {
                    name: "BQ_DATASET",
                    description: "String",
                  },
                },
                optConfiguration,
                optDataset,
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
                optNoAsync,
                optProject,
                optQuiet,
                {
                  name: "--recursive-depth",
                  description:
                    "The depth for all recursive structures in the output analytics schema. For example, concept in the CodeSystem resource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called concept.concept but not concept.concept.concept. If not specified or set to 0, the server will use the default value 2",
                  args: {
                    name: "RECURSIVE_DEPTH",
                    description: "Int",
                  },
                },
                {
                  name: "--resource-type",
                  description:
                    "String of comma-delimited FHIR resource types. If provided, only resources of the specified resource type(s) are exported",
                  args: {
                    name: "RESOURCE_TYPE",
                    description: "String",
                  },
                },
                {
                  name: "--schema-type",
                  description:
                    "Specifies the output schema type. _SCHEMA_TYPE_ must be one of:",
                  priority: 100,
                  args: {
                    name: "SCHEMA_TYPE",
                    description: "String",
                    suggestions: ["analytics", "analytics_v2"],
                  },
                },
                {
                  name: "--since",
                  description:
                    "If provided, only resources updated after this time are exported. The time uses the format YYYY-MM-DDThh:mm:ss.sss+zz:zz. For example, `2015-02-07T13:28:17.239+02:00` or `2017-01-01T00:00:00Z`. The time must be specified to the second and include a time zone",
                  args: {
                    name: "SINCE",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--write-disposition",
                  description:
                    "Determines whether existing tables in the destination dataset are overwritten or appended to. _WRITE_DISPOSITION_ must be one of:",
                  args: {
                    name: "WRITE_DISPOSITION",
                    description: "String",
                    suggestions: [
                      "write-append",
                      "write-empty",
                      "write-truncate",
                    ],
                  },
                },
              ],
              args: {
                name: "FHIR_STORE",
                description:
                  "ID of the fhirStore or fully qualified identifier for the fhirStore",
              },
            },
            {
              name: "gcs",
              description:
                "Export Cloud Healthcare API FHIR resources to Google Cloud Storage",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optDataset,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--gcs-uri",
                  description:
                    "The Cloud Storage destination location. Specify a path to a Cloud Storage bucket or folder rather than a concrete object. The exported outputs are organized by FHIR resource types. The server will create one object per resource type. Each object contains newline delimited JSON, and each line is a FHIR resource",
                  priority: 100,
                  args: {
                    name: "GCS_URI",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLocation,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                {
                  name: "--resource-type",
                  description:
                    "String of comma-delimited FHIR resource types. If provided, only resources of the specified resource type(s) are exported",
                  args: {
                    name: "RESOURCE_TYPE",
                    description: "String",
                  },
                },
                {
                  name: "--since",
                  description:
                    "If provided, only resources updated after this time are exported. The time uses the format YYYY-MM-DDThh:mm:ss.sss+zz:zz. For example, 2015-02-07T13:28:17.239+02:00 or 2017-01-01T00:00:00Z. The time must be specified to the second and include a time zone",
                  args: {
                    name: "SINCE",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "FHIR_STORE",
                description:
                  "ID of the fhirStore or fully qualified identifier for the fhirStore",
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
          description:
            "Retrieve the IAM policy for a Cloud Healthcare API FHIR store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
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
            name: "FHIR_STORE",
            description:
              "ID of the fhirStore or fully qualified identifier for the fhirStore",
          },
        },
        {
          name: "import",
          description: "Manage Cloud Healthcare API FHIR store imports",
          subcommands: [
            {
              name: "gcs",
              description:
                "Import FHIR resources from Google Cloud Storage into a Cloud Healthcare API FHIR store",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--content-structure",
                  description:
                    "Content structure in the source location. The default is BUNDLE. _CONTENT_STRUCTURE_ must be one of:",
                  args: {
                    name: "CONTENT_STRUCTURE",
                    suggestions: [
                      "bundle",
                      "bundle-pretty",
                      "resource",
                      "resource-pretty",
                    ],
                  },
                },
                optDataset,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--gcs-uri",
                  description:
                    "Cloud Storage source data locations. Each Cloud Storage object should be a text file that contains newline-delimited JSON structures conforming to the FHIR standard. You can use wildcards to import multiple files from one or more directories. - Use * to match 0 or more non-separator characters. For example, gs://BUCKET/DIRECTORY/Example```*```.ndjson matches Example.ndjson and Example22.ndjson in DIRECTORY. - Use ** to match 0 or more characters (including separators). Must be used at the end of a path and with no other wildcards in the path. Can also be used with a filename extension (such as .ndjson), which imports all files with the filename extension in the specified directory and its subdirectories. For example, gs://BUCKET/DIRECTORY/**.ndjson imports all files with the .ndjson filename extension in DIRECTORY and its subdirectories. - Use ? to match 1 character. For example, gs://BUCKET/DIRECTORY/Example?.ndjson matches Example1.ndjson but does not match Example.ndjson or Example01.ndjson",
                  priority: 100,
                  args: {
                    name: "GCS_URI",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLocation,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "FHIR_STORE",
                description:
                  "ID of the fhirStore or fully qualified identifier for the fhirStore",
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
          description: "List Cloud Healthcare API FHIR stores",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset2,
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
          name: "metrics",
          description: "Gets the metrics for a Cloud Healthcare API FHIR store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
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
            name: "FHIR_STORE",
            description:
              "ID of the fhirStore or fully qualified identifier for the fhirStore",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding from a Cloud Healthcare API FHIR store",
          options: [
            optAccessTokenFile,
            optAccount,
            optAll,
            optBillingProject,
            optCondition2,
            optConditionFromFile,
            optConfiguration,
            optDataset,
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
            optMember2,
            optNoAll,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FHIR_STORE",
            description:
              "ID of the fhirStore or fully qualified identifier for the fhirStore",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set the IAM policy for a Cloud Healthcare API FHIR store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
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
              name: "FHIR_STORE",
              description:
                "ID of the fhirStore or fully qualified identifier for the fhirStore",
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
          description: "Update a Cloud Healthcare API FHIR store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
            {
              name: "--enable-update-create",
              description:
                "Whether this FHIR store has the [updateCreate] (https://www.hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.resource.updateCreate) capability. Determines if the client can use an Update operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through the Create operation and attempts to Update a non-existent resource will return errors",
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
              name: "--no-enable-update-create",
              description:
                "Whether this FHIR store has the [updateCreate] (https://www.hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.resource.updateCreate) capability. Determines if the client can use an Update operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through the Create operation and attempts to Update a non-existent resource will return errors",
              hidden: true,
            },
            optProject,
            optPubsubTopic,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FHIR_STORE",
            description:
              "ID of the fhirStore or fully qualified identifier for the fhirStore",
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
      name: "hl7v2-stores",
      description: "Manage Cloud Healthcare API HL7v2 stores",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "Add an IAM policy binding to a Cloud Healthcare API HL7v2 store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCondition,
            optConditionFromFile,
            optConfiguration,
            optDataset,
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
            optMember,
            optProject,
            optQuiet,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "HL7V2_STORE",
            description:
              "ID of the hl7v2Store or fully qualified identifier for the hl7v2Store",
          },
        },
        {
          name: "create",
          description: "Create a Cloud Healthcare API HL7v2 store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
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
              name: "--notification-config",
              description:
                "A list of notification configs. Each configuration uses a filter to determine whether to publish a message (both Ingest & Create) on the corresponding notification destination. Only the message name is sent as part of the notification. Supplied by the client",
              args: {
                name: "NOTIFICATION_CONFIG",
              },
            },
            {
              name: "--parser-version",
              description:
                "Immutable. Determines the version of both the default parser to be used when [schema](https://cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.hl7V2Stores#ParserConfig.FIELDS.schema) is not given, as well as the schematized parser used when [schema](https://cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.hl7V2Stores#ParserConfig.FIELDS.schema) is specified. This field is immutable after HL7v2 store creation. _PARSER_VERSION_ must be one of:",
              args: {
                name: "PARSER_VERSION",
                suggestions: ["v1", "v2", "v3"],
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "HL7V2_STORE",
            description:
              "ID of the hl7v2Store or fully qualified identifier for the hl7v2Store",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Healthcare API HL7v2 store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
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
            name: "HL7V2_STORE",
            description:
              "ID of the hl7v2Store or fully qualified identifier for the hl7v2Store",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Healthcare API HL7v2 store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
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
            name: "HL7V2_STORE",
            description:
              "ID of the hl7v2Store or fully qualified identifier for the hl7v2Store",
          },
        },
        {
          name: "export",
          description: "Manage Cloud Healthcare API HL7v2 store exports",
          subcommands: [
            {
              name: "gcs",
              description:
                "Export Cloud Healthcare API HL7v2 messages to Google Cloud Storage",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optDataset,
                {
                  name: "--end-time",
                  description:
                    "The end of the range in message send_time (MSH.7) to process. If not specified, the time when the export is scheduled is used",
                  args: {
                    name: "END_TIME",
                    description: "String",
                  },
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--gcs-uri",
                  description:
                    "The Cloud Storage destination location. Specify a path to a Cloud Storage bucket or folder rather than a concrete object. The exported messages are ordered by the message send_time (MSH.7) in ascending order. The server will create one or more objects. Each object contains newline delimited JSON, and each line is an HL7v2 message",
                  priority: 100,
                  args: {
                    name: "GCS_URI",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLocation,
                optLogHttp,
                {
                  name: "--message-view",
                  description:
                    "Specifies the parts of the Message resource to include in the export. The default is FULL. _MESSAGE_VIEW_ must be one of:",
                  args: {
                    name: "MESSAGE_VIEW",
                    suggestions: [
                      "basic",
                      "full",
                      "parsed-only",
                      "raw-only",
                      "schematized-only",
                    ],
                  },
                },
                optNoAsync,
                optProject,
                optQuiet,
                {
                  name: "--start-time",
                  description:
                    "The start of the range in message send_time (MSH.7) to process. If not specified, the UNIX epoch (1970-01-01T00:00:00Z) is used",
                  args: {
                    name: "START_TIME",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "HL7V2_STORE",
                description:
                  "ID of the hl7v2Store or fully qualified identifier for the hl7v2Store",
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
          description:
            "Retrieve the IAM policy for a Cloud Healthcare API HL7v2 store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
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
            name: "HL7V2_STORE",
            description:
              "ID of the hl7v2Store or fully qualified identifier for the hl7v2Store",
          },
        },
        {
          name: "import",
          description: "Manage Cloud Healthcare API HL7v2 store imports",
          subcommands: [
            {
              name: "gcs",
              description:
                "Import HL7v2 messages from Google Cloud Storage into a Cloud Healthcare API HL7v2 store",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optDataset,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--gcs-uri",
                  description:
                    "Cloud Storage source data locations. Each Cloud Storage object should be a text file that contains newline-delimited JSON objects. Each JSON object has a data field that contains a base64-encoded HL7v2 message",
                  priority: 100,
                  args: {
                    name: "GCS_URI",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLocation,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "HL7V2_STORE",
                description:
                  "ID of the hl7v2Store or fully qualified identifier for the hl7v2Store",
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
          description: "List Cloud Healthcare API HL7v2 stores",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset2,
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
          name: "metrics",
          description:
            "Gets the metrics for a Cloud Healthcare API HL7v2 store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
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
            name: "HL7V2_STORE",
            description:
              "ID of the hl7v2Store or fully qualified identifier for the hl7v2Store",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding from a Cloud Healthcare API HL7v2 store",
          options: [
            optAccessTokenFile,
            optAccount,
            optAll,
            optBillingProject,
            optCondition2,
            optConditionFromFile,
            optConfiguration,
            optDataset,
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
            optMember2,
            optNoAll,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "HL7V2_STORE",
            description:
              "ID of the hl7v2Store or fully qualified identifier for the hl7v2Store",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set the IAM policy for a Cloud Healthcare API HL7v2 store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
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
              name: "HL7V2_STORE",
              description:
                "ID of the hl7v2Store or fully qualified identifier for the hl7v2Store",
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
          description: "Update a Cloud Healthcare API HL7v2 store",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
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
              name: "--notification-config",
              description:
                "A list of notification configs. Each configuration uses a filter to determine whether to publish a message (both Ingest & Create) on the corresponding notification destination. Only the message name is sent as part of the notification. Supplied by the client",
              args: {
                name: "NOTIFICATION_CONFIG",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "HL7V2_STORE",
            description:
              "ID of the hl7v2Store or fully qualified identifier for the hl7v2Store",
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
      description: "Manage Cloud Healthcare API operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Cloud Healthcare API operation",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset,
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "list",
          description: "List Cloud Healthcare API operations",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDataset2,
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
