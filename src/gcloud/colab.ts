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

const optRegion: Fig.Option = {
  name: "--region",
  description: "Cloud region for the runtime template",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion2: Fig.Option = {
  name: "--region",
  description: "Cloud region for the runtime",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion3: Fig.Option = {
  name: "--region",
  description: "Cloud region for the schedule",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion4: Fig.Option = {
  name: "--region",
  description: "ID of the region or fully qualified identifier for the region",
  args: {
    name: "REGION",
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
  name: "colab",
  description: "Manage Colab Enterprise resources",
  subcommands: [
    {
      name: "executions",
      description: "Manage Colab Enterprise notebook execution jobs",
      subcommands: [
        {
          name: "create",
          description: "Create an execution",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--commit-sha",
              description:
                "The commit SHA to read from the Dataform repository. If unset, the file will be read from HEAD",
              args: {
                name: "COMMIT_SHA",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--dataform-repository-name",
              description:
                "ID of the dataform repository or fully qualified identifier for the dataform repository",
              priority: 100,
              args: {
                name: "DATAFORM_REPOSITORY_NAME",
                description: "String",
              },
            },
            {
              name: "--direct-content",
              description:
                "The direct notebook content as IPYNB. This can be a local filepath to an .ipynb file or can be set to `-` to read content from stdin",
              args: {
                name: "DIRECT_CONTENT",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "The display name of the execution",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--execution-job-id",
              description:
                "The id to assign to the execution job. If not specified, a random id will be generated",
              hidden: true,
              args: {
                name: "EXECUTION_JOB_ID",
                description: "String",
              },
            },
            {
              name: "--execution-timeout",
              description:
                "The max running time of the execution job, as a duration. See '$ gcloud topic datetimes' for details on formatting the input duration",
              args: {
                name: "EXECUTION_TIMEOUT",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gcs-notebook-uri",
              description:
                "The Cloud Storage uri pointing to the notebook. Format: gs://bucket/notebook_file.ipynb",
              priority: 100,
              args: {
                name: "GCS_NOTEBOOK_URI",
                description: "String",
              },
            },
            {
              name: "--gcs-output-uri",
              description:
                "The Cloud Storage location to upload notebook execution results to. Format: gs://bucket-name",
              priority: 100,
              args: {
                name: "GCS_OUTPUT_URI",
                description: "String",
              },
            },
            {
              name: "--generation",
              description:
                "The version of the Cloud Storage object to read. If unset, the current version of the object will be used",
              args: {
                name: "GENERATION",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync,
            {
              name: "--notebook-runtime-template",
              description:
                "ID of the notebook runtime template or fully qualified identifier for the notebook runtime template",
              priority: 100,
              args: {
                name: "NOTEBOOK_RUNTIME_TEMPLATE",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optRegion4,
            {
              name: "--service-account",
              description: "The service account to run the execution as",
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--user-email",
              description:
                "The user email to run the execution as. This requires the provided runtime template to have end user credentials enabled",
              args: {
                name: "USER_EMAIL",
                description: "String",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "delete",
          description: "Delete an execution",
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
            {
              name: "--region",
              description: "Cloud region for the notebook execution job",
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
            name: "EXECUTION",
            description:
              "ID of the notebook execution job or fully qualified identifier for the notebook execution job",
          },
        },
        {
          name: "describe",
          description: "Describe an execution",
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
              description: "Cloud region for the notebook execution job",
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
            name: "EXECUTION",
            description:
              "ID of the notebook execution job or fully qualified identifier for the notebook execution job",
          },
        },
        {
          name: "list",
          description: "List your Colab Enterprise notebook execution jobs",
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
            optRegion4,
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
      name: "runtime-templates",
      description: "Manage Colab Enterprise runtime templates",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "Add an IAM policy binding to a Colab Enterprise runtime template",
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
            optRegion,
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
            name: "RUNTIME_TEMPLATE",
            description:
              "ID of the runtime template or fully qualified identifier for the runtime template",
          },
        },
        {
          name: "create",
          description: "Create a runtime template",
          options: [
            {
              name: "--accelerator-count",
              description: "The number of accelerators used by the runtime",
              args: {
                name: "ACCELERATOR_COUNT",
                description: "Int",
              },
            },
            {
              name: "--accelerator-type",
              description:
                "The type of hardware accelerator used by the runtime. If specified, --accelerator-count must also be specified. _ACCELERATOR_TYPE_ must be one of: *NVIDIA_TESLA_V100*, *NVIDIA_TESLA_T4*, *NVIDIA_TESLA_A100*, *NVIDIA_A100_80GB*, *NVIDIA_L4*",
              args: {
                name: "ACCELERATOR_TYPE",
                description: "String",
                suggestions: [
                  "NVIDIA_TESLA_V100",
                  "NVIDIA_TESLA_T4",
                  "NVIDIA_TESLA_A100",
                  "NVIDIA_A100_80GB",
                  "NVIDIA_L4",
                ],
              },
            },
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "The description of the runtime template",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--disk-size-gb",
              description:
                "The disk size of the runtime in GB. If specified, the --disk-type must also be specified. The minimum size is 10GB and the maximum is 65536GB",
              args: {
                name: "DISK_SIZE_GB",
                description: "Int",
              },
            },
            {
              name: "--disk-type",
              description:
                "The type of the persistent disk. _DISK_TYPE_ must be one of: *PD_STANDARD*, *PD_SSD*, *PD_BALANCED*, *PD_EXTREME*",
              args: {
                name: "DISK_TYPE",
                description: "String",
                suggestions: [
                  "PD_STANDARD",
                  "PD_SSD",
                  "PD_BALANCED",
                  "PD_EXTREME",
                ],
              },
            },
            {
              name: "--display-name",
              description: "The display name of the runtime template",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--enable-euc",
              description:
                "Enable end user credential access for the runtime. Enabled by default, use *--no-enable-euc* to disable",
            },
            {
              name: "--enable-internet-access",
              description:
                "Enable public internet access for the runtime. Enabled by default, use *--no-enable-internet-access* to disable",
            },
            {
              name: "--enable-secure-boot",
              description:
                "Enables secure boot for the runtime. Disabled by default",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--idle-shutdown-timeout",
              description:
                "The duration after which the runtime is automatically shut down. An input of 0s disables the idle shutdown feature, and a valid range is [10m, 24h]. See '$ gcloud topic datetimes' for details on formatting the input duration",
              args: {
                name: "IDLE_SHUTDOWN_TIMEOUT",
              },
            },
            optImpersonateServiceAccount,
            {
              name: "--kms-key",
              description:
                "ID of the key or fully qualified identifier for the key",
              priority: 100,
              args: {
                name: "KMS_KEY",
                description: "String",
              },
            },
            {
              name: "--kms-keyring",
              description: "KMS keyring id of the key",
              args: {
                name: "KMS_KEYRING",
                description: "String",
              },
            },
            {
              name: "--kms-location",
              description: "Cloud location for the key",
              args: {
                name: "KMS_LOCATION",
                description: "String",
              },
            },
            {
              name: "--kms-project",
              description: "Cloud project id for the key",
              args: {
                name: "KMS_PROJECT",
                description: "String",
              },
            },
            {
              name: "--labels",
              description:
                "Add labels to identify and group the runtime template",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optLogHttp,
            {
              name: "--machine-type",
              description:
                "The Compute Engine machine type selected for the runtime",
              args: {
                name: "MACHINE_TYPE",
                description: "String",
              },
            },
            {
              name: "--network",
              description:
                "ID of the network or fully qualified identifier for the network",
              priority: 100,
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            {
              name: "--network-tags",
              description:
                "Applies the given Compute Engine tags to the runtime",
              args: {
                name: "TAGS",
                description: "List",
              },
            },
            optNoAsync,
            {
              name: "--no-enable-euc",
              description: "Enable end user credential access for the runtime",
              hidden: true,
            },
            {
              name: "--no-enable-internet-access",
              description: "Enable public internet access for the runtime",
              hidden: true,
            },
            {
              name: "--no-enable-secure-boot",
              description:
                "Enables secure boot for the runtime. Disabled by default",
              hidden: true,
            },
            {
              name: "--post-startup-script",
              description:
                "Post startup script in raw string to execute on the runtime",
              hidden: true,
              args: {
                name: "POST_STARTUP_SCRIPT",
                description: "String",
              },
            },
            {
              name: "--post-startup-script-behavior",
              description:
                "The behavior of the post startup script. The default if passing a post-startup-script-url is RUN_ONCE",
              hidden: true,
              args: {
                name: "POST_STARTUP_SCRIPT_BEHAVIOR",
                description: "String",
                suggestions: [
                  "POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED",
                  "RUN_ONCE",
                  "RUN_EVERY_START",
                  "DOWNLOAD_AND_RUN_EVERY_START",
                ],
              },
            },
            {
              name: "--post-startup-script-url",
              description:
                "Post startup script URL to execute on the runtime. This can be a public or private Google Cloud Storage object. In the form of gs://bucket/object or https://storage.googleapis.com/bucket/object",
              hidden: true,
              args: {
                name: "POST_STARTUP_SCRIPT_URL",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optRegion4,
            {
              name: "--runtime-template-id",
              description:
                "The id of the runtime template. If not specified, a random id will be generated",
              args: {
                name: "RUNTIME_TEMPLATE_ID",
                description: "String",
              },
            },
            {
              name: "--set-env-vars",
              description: "Set environment variables used by the runtime",
              hidden: true,
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--subnetwork",
              description:
                "ID of the subnetwork or fully qualified identifier for the subnetwork",
              priority: 100,
              args: {
                name: "SUBNETWORK",
                description: "String",
              },
            },
            {
              name: "--subnetwork-region",
              description:
                "Google Cloud region of this subnetwork https://cloud.google.com/compute/docs/regions-zones/#locations",
              args: {
                name: "SUBNETWORK_REGION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "delete",
          description: "Delete a runtime template",
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
            optRegion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RUNTIME_TEMPLATE",
            description:
              "ID of the runtime template or fully qualified identifier for the runtime template",
          },
        },
        {
          name: "describe",
          description: "Describe a runtime template",
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
          args: {
            name: "RUNTIME_TEMPLATE",
            description:
              "ID of the runtime template or fully qualified identifier for the runtime template",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get IAM policy for a Colab Enterprise runtime template",
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
            optRegion,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RUNTIME_TEMPLATE",
            description:
              "ID of the runtime template or fully qualified identifier for the runtime template",
          },
        },
        {
          name: "list",
          description: "List your runtime templates",
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
            optRegion4,
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
            "Remove an IAM policy binding from a Colab Enterprise runtime template",
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
            optRegion,
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
            name: "RUNTIME_TEMPLATE",
            description:
              "ID of the runtime template or fully qualified identifier for the runtime template",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set IAM policy for a Colab Enterprise runtime template as defined in a JSON or YAML file",
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
          args: [
            {
              name: "RUNTIME_TEMPLATE",
              description:
                "ID of the runtime template or fully qualified identifier for the runtime template",
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
      name: "runtimes",
      description: "Manage Colab Enterprise runtimes",
      subcommands: [
        {
          name: "create",
          description: "Create a notebook runtime",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "The description",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "The display name of the runtime to create",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
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
                "Add labels to identify and group the runtime template",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRegion4,
            {
              name: "--runtime-id",
              description:
                "The id of the runtime to create. If not specified, a random id will be generated",
              args: {
                name: "RUNTIME_ID",
                description: "String",
              },
            },
            {
              name: "--runtime-template",
              description:
                "ID of the runtime template or fully qualified identifier for the runtime template",
              priority: 100,
              args: {
                name: "RUNTIME_TEMPLATE",
                description: "String",
              },
            },
            {
              name: "--runtime-user",
              description:
                "User email for the runtime owner. Runtimes can only be used by the owner. If a user is not provided, the gcloud user will be assumed to be the owner. The user cannot be a service account",
              args: {
                name: "RUNTIME_USER",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "delete",
          description: "Delete a runtime",
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
            name: "RUNTIME",
            description:
              "ID of the runtime or fully qualified identifier for the runtime",
          },
        },
        {
          name: "describe",
          description: "Describe a runtime",
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
            name: "RUNTIME",
            description:
              "ID of the runtime or fully qualified identifier for the runtime",
          },
        },
        {
          name: "list",
          description: "List your project's runtimes",
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
            optRegion4,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "start",
          description: "Start a stopped runtime",
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
            name: "RUNTIME",
            description:
              "ID of the runtime or fully qualified identifier for the runtime",
          },
        },
        {
          name: "stop",
          description: "Stop a runtime",
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
            name: "RUNTIME",
            description:
              "ID of the runtime or fully qualified identifier for the runtime",
          },
        },
        {
          name: "upgrade",
          description: "Upgrade a runtime",
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
            name: "RUNTIME",
            description:
              "ID of the runtime or fully qualified identifier for the runtime",
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
      name: "schedules",
      description: "Manage Colab Enterprise notebook execution schedules",
      subcommands: [
        {
          name: "create",
          description: "Create a schedule",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--commit-sha",
              description:
                "The commit SHA to read from the Dataform repository. If unset, the file will be read from HEAD",
              args: {
                name: "COMMIT_SHA",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--cron-schedule",
              description:
                'Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *"',
              priority: 100,
              args: {
                name: "CRON_SCHEDULE",
                description: "String",
              },
            },
            {
              name: "--dataform-repository-name",
              description:
                "ID of the dataform repository or fully qualified identifier for the dataform repository",
              priority: 100,
              args: {
                name: "DATAFORM_REPOSITORY_NAME",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "The display name of the schedule",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--enable-queueing",
              description:
                "Enables new scheduled runs to be queued when max_concurrent_runs limit is reached. If set to true, new runs will be queued instead of skipped",
            },
            {
              name: "--end-time",
              description:
                'Timestamp after which no new runs can be scheduled. If specified, the schedule will be completed when either end_time is reached or when scheduled_run_count >= max_run_count. If neither end time nor max_run_count is specified, new runs will keep getting scheduled until this Schedule is paused or deleted. Must be in the RFC 3339 (https://www.rfc-editor.org/rfc/rfc3339.txt) format. E.g. "2026-01-01T00:00:00Z" or "2026-01-01T00:00:00-05:00"',
              args: {
                name: "END_TIME",
              },
            },
            {
              name: "--execution-display-name",
              description: "The display name of the execution",
              priority: 100,
              args: {
                name: "EXECUTION_DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--execution-timeout",
              description:
                "The max running time of the execution job, as a duration. See '$ gcloud topic datetimes' for details on formatting the input duration",
              args: {
                name: "EXECUTION_TIMEOUT",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gcs-notebook-uri",
              description:
                "The Cloud Storage uri pointing to the notebook. Format: gs://bucket/notebook_file.ipynb",
              priority: 100,
              args: {
                name: "GCS_NOTEBOOK_URI",
                description: "String",
              },
            },
            {
              name: "--gcs-output-uri",
              description:
                "The Cloud Storage location to upload notebook execution results to. Format: gs://bucket-name",
              priority: 100,
              args: {
                name: "GCS_OUTPUT_URI",
                description: "String",
              },
            },
            {
              name: "--generation",
              description:
                "The version of the Cloud Storage object to read. If unset, the current version of the object will be used",
              args: {
                name: "GENERATION",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            {
              name: "--max-concurrent-runs",
              description:
                "Maximum number of runs that can be started concurrently for this Schedule. This is the limit for starting the scheduled requests and not the execution of the notebook execution jobs created by the requests",
              args: {
                name: "MAX_CONCURRENT_RUNS",
                description: "Int",
              },
            },
            {
              name: "--max-runs",
              description: "The max runs for the schedule",
              args: {
                name: "MAX_RUNS",
                description: "Int",
              },
            },
            {
              name: "--no-enable-queueing",
              description:
                "Enables new scheduled runs to be queued when max_concurrent_runs limit is reached. If set to true, new runs will be queued instead of skipped",
              hidden: true,
            },
            {
              name: "--notebook-runtime-template",
              description:
                "ID of the notebook runtime template or fully qualified identifier for the notebook runtime template",
              priority: 100,
              args: {
                name: "NOTEBOOK_RUNTIME_TEMPLATE",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optRegion4,
            {
              name: "--service-account",
              description: "The service account to run the execution as",
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
              },
            },
            {
              name: "--start-time",
              description:
                'The timestamp after which the first run can be scheduled. Defaults to the schedule creation time. Must be in the RFC 3339 (https://www.rfc-editor.org/rfc/rfc3339.txt) format. E.g. "2026-01-01T00:00:00Z" or "2026-01-01T00:00:00-05:00"',
              args: {
                name: "START_TIME",
              },
            },
            optTraceToken,
            {
              name: "--user-email",
              description:
                "The user email to run the execution as. This requires the provided runtime template to have end user credentials enabled",
              args: {
                name: "USER_EMAIL",
                description: "String",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "delete",
          description: "Delete a schedule",
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
            optRegion3,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SCHEDULE",
            description:
              "ID of the schedule or fully qualified identifier for the schedule",
          },
        },
        {
          name: "describe",
          description: "Describe a schedule",
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
          args: {
            name: "SCHEDULE",
            description:
              "ID of the schedule or fully qualified identifier for the schedule",
          },
        },
        {
          name: "list",
          description:
            "List your Colab Enterprise notebook execution schedules",
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
            optRegion4,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "pause",
          description: "Pause a schedule",
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
          args: {
            name: "SCHEDULE",
            description:
              "ID of the schedule or fully qualified identifier for the schedule",
          },
        },
        {
          name: "resume",
          description: "Resume a schedule",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--enable-catch-up",
              description:
                "Enables backfilling missed runs when the schedule is resumed from PAUSED state. If enabled, all missed runs will be scheduled and new runs will be scheduled after the backfill is complete",
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
              name: "--no-enable-catch-up",
              description:
                "Enables backfilling missed runs when the schedule is resumed from PAUSED state. If enabled, all missed runs will be scheduled and new runs will be scheduled after the backfill is complete",
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
            name: "SCHEDULE",
            description:
              "ID of the schedule or fully qualified identifier for the schedule",
          },
        },
        {
          name: "update",
          description: "Update a schedule",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--cron-schedule",
              description:
                'Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *"',
              args: {
                name: "CRON_SCHEDULE",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "The display name of the schedule",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--enable-queueing",
              description:
                "Enables new scheduled runs to be queued when max_concurrent_runs limit is reached. If set to true, new runs will be queued instead of skipped",
            },
            {
              name: "--end-time",
              description:
                'Timestamp after which no new runs can be scheduled. If specified, the schedule will be completed when either end_time is reached or when scheduled_run_count >= max_run_count. If neither end time nor max_run_count is specified, new runs will keep getting scheduled until this Schedule is paused or deleted. Must be in the RFC 3339 (https://www.rfc-editor.org/rfc/rfc3339.txt) format. E.g. "2026-01-01T00:00:00Z" or "2026-01-01T00:00:00-05:00"',
              args: {
                name: "END_TIME",
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
            {
              name: "--max-concurrent-runs",
              description:
                "Maximum number of runs that can be started concurrently for this Schedule. This is the limit for starting the scheduled requests and not the execution of the notebook execution jobs created by the requests",
              args: {
                name: "MAX_CONCURRENT_RUNS",
                description: "Int",
              },
            },
            {
              name: "--max-runs",
              description: "The max runs for the schedule",
              args: {
                name: "MAX_RUNS",
                description: "Int",
              },
            },
            {
              name: "--no-enable-queueing",
              description:
                "Enables new scheduled runs to be queued when max_concurrent_runs limit is reached. If set to true, new runs will be queued instead of skipped",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion3,
            {
              name: "--start-time",
              description:
                'The timestamp after which the first run can be scheduled. Defaults to the schedule creation time. Must be in the RFC 3339 (https://www.rfc-editor.org/rfc/rfc3339.txt) format. E.g. "2026-01-01T00:00:00Z" or "2026-01-01T00:00:00-05:00"',
              args: {
                name: "START_TIME",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SCHEDULE",
            description:
              "ID of the schedule or fully qualified identifier for the schedule",
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
