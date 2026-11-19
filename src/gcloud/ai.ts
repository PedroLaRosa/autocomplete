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

const optClearLabels: Fig.Option = {
  name: "--clear-labels",
  description:
    "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
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

const optDeployedIndexId: Fig.Option = {
  name: "--deployed-index-id",
  description: "Id of the deployed index",
  priority: 100,
  args: {
    name: "DEPLOYED_INDEX_ID",
    description: "String",
  },
};

const optEnableAccessLogging: Fig.Option = {
  name: "--enable-access-logging",
  description:
    "If true, online prediction access logs are sent to Cloud Logging",
};

const optEncryptionKmsKeyName: Fig.Option = {
  name: "--encryption-kms-key-name",
  description:
    "The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. Has the form: projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key",
  args: {
    name: "ENCRYPTION_KMS_KEY_NAME",
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

const optJsonRequest: Fig.Option = {
  name: "--json-request",
  description: "Path to a local file containing the body of a JSON request",
  priority: 100,
  args: {
    name: "JSON_REQUEST",
    description: "String",
  },
};

const optKmsKey: Fig.Option = {
  name: "--kms-key",
  description: "ID of the key or fully qualified identifier for the key",
  priority: 100,
  args: {
    name: "KMS_KEY",
    description: "String",
  },
};

const optKmsKeyring: Fig.Option = {
  name: "--kms-keyring",
  description: "The KMS keyring of the key",
  args: {
    name: "KMS_KEYRING",
    description: "String",
  },
};

const optKmsLocation: Fig.Option = {
  name: "--kms-location",
  description: "The Google Cloud location for the key",
  args: {
    name: "KMS_LOCATION",
    description: "String",
  },
};

const optKmsProject: Fig.Option = {
  name: "--kms-project",
  description: "The Google Cloud project for the key",
  args: {
    name: "KMS_PROJECT",
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

const optMachineType: Fig.Option = {
  name: "--machine-type",
  description:
    "The machine resources to be used for each node of this deployment. For available machine types, see https://cloud.google.com/ai-platform-unified/docs/predictions/machine-types",
  args: {
    name: "MACHINE_TYPE",
    description: "String",
  },
};

const optNetwork: Fig.Option = {
  name: "--network",
  description:
    "Full name of the Google Compute Engine network to which the Job is peered with. Private services access must already have been configured. If unspecified, the Job is not peered with any network",
  args: {
    name: "NETWORK",
    description: "String",
  },
};

const optNoClearLabels: Fig.Option = {
  name: "--no-clear-labels",
  description:
    "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
  hidden: true,
};

const optNoEnableAccessLogging: Fig.Option = {
  name: "--no-enable-access-logging",
  description:
    "If true, online prediction access logs are sent to Cloud Logging",
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
  description: "Cloud region for the custom job",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion2: Fig.Option = {
  name: "--region",
  description: "Cloud region for the endpoint",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion3: Fig.Option = {
  name: "--region",
  description: "Cloud region for the hyperparameter tuning job",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion4: Fig.Option = {
  name: "--region",
  description: "Cloud region for the index",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion5: Fig.Option = {
  name: "--region",
  description: "Cloud region for the index_endpoint",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion6: Fig.Option = {
  name: "--region",
  description: "Cloud region for the model",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion7: Fig.Option = {
  name: "--region",
  description: "Cloud region for the monitoring_job",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion8: Fig.Option = {
  name: "--region",
  description: "Cloud region for the persistent resource",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion9: Fig.Option = {
  name: "--region",
  description: "Cloud region for the tensorboard",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion10: Fig.Option = {
  name: "--region",
  description: "ID of the region or fully qualified identifier for the region",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRemoveLabels: Fig.Option = {
  name: "--remove-labels",
  description:
    "List of label keys to remove. If a label does not exist it is silently ignored. If `--update-labels` is also specified then `--update-labels` is applied first",
  args: {
    name: "KEY",
    description: "List",
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

const optTrafficSplit: Fig.Option = {
  name: "--traffic-split",
  description:
    "List of pairs of deployed model id and value to set as traffic split",
  args: {
    name: "DEPLOYED_MODEL_ID=VALUE",
    description: "Dict",
  },
};

const optUpdateLabels: Fig.Option = {
  name: "--update-labels",
  description:
    "List of label KEY=VALUE pairs to update. If a label exists, its value is modified. Otherwise, a new label is created",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
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
  name: "ai",
  description: "Manage entities in Vertex AI",
  subcommands: [
    {
      name: "custom-jobs",
      description: "Manage Vertex AI custom jobs",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a running custom job",
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
            name: "CUSTOM_JOB",
            description:
              "ID of the custom job or fully qualified identifier for the custom job",
          },
        },
        {
          name: "create",
          description: "Create a new custom job",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--args",
              description:
                "Comma-separated arguments passed to containers or python tasks",
              args: {
                name: "ARG",
                description: "List",
              },
            },
            optBillingProject,
            {
              name: "--command",
              description:
                "Command to be invoked when containers are started. It overrides the entrypoint instruction in Dockerfile when provided",
              args: {
                name: "COMMAND",
                description: "List",
              },
            },
            {
              name: "--config",
              description:
                "Path to the job configuration file. This file should be a YAML document containing a [`CustomJobSpec`](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/CustomJobSpec). If an option is specified both in the configuration file **and** via command-line arguments, the command-line arguments override the configuration file. Note that keys with underscore are invalid",
              args: {
                name: "CONFIG",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--display-name",
              description: "Display name of the custom job to create",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--enable-dashboard-access",
              description:
                "Whether you want Vertex AI to enable dashboard built on the training containers. If set to ``true'', you can access the dashboard at the URIs given by CustomJob.web_access_uris or Trial.web_access_uris (within HyperparameterTuningJob.trials)",
            },
            {
              name: "--enable-web-access",
              description:
                "Whether you want Vertex AI to enable [interactive shell access](https://cloud.google.com/vertex-ai/docs/training/monitor-debug-interactive-shell) to training containers. If set to ``true'', you can access interactive shells at the URIs given by CustomJob.web_access_uris or Trial.web_access_uris (within HyperparameterTuningJob.trials)",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKmsKey,
            optKmsKeyring,
            optKmsLocation,
            optKmsProject,
            optLabels,
            optLogHttp,
            optNetwork,
            {
              name: "--no-enable-dashboard-access",
              description:
                "Whether you want Vertex AI to enable dashboard built on the training containers. If set to ``true'', you can access the dashboard at the URIs given by CustomJob.web_access_uris or Trial.web_access_uris (within HyperparameterTuningJob.trials)",
              hidden: true,
            },
            {
              name: "--no-enable-web-access",
              description:
                "Whether you want Vertex AI to enable [interactive shell access](https://cloud.google.com/vertex-ai/docs/training/monitor-debug-interactive-shell) to training containers. If set to ``true'', you can access interactive shells at the URIs given by CustomJob.web_access_uris or Trial.web_access_uris (within HyperparameterTuningJob.trials)",
              hidden: true,
            },
            {
              name: "--persistent-resource-id",
              description:
                "The name of the persistent resource from the same project and region on which to run this custom job",
              args: {
                name: "PERSISTENT_RESOURCE_ID",
                description: "String",
              },
            },
            optProject,
            {
              name: "--python-package-uris",
              description:
                "The common Python package URIs to be used for training with a pre-built container image. e.g. `--python-package-uri=path1,path2` If you are using multiple worker pools and want to specify a different Python packag fo reach pool, use `--config` instead",
              args: {
                name: "PYTHON_PACKAGE_URIS",
                description: "List",
              },
            },
            optQuiet,
            optRegion10,
            {
              name: "--service-account",
              description:
                "The email address of a service account to use when running the training appplication. You must have the `iam.serviceAccounts.actAs` permission for the specified service account",
              args: {
                name: "SERVICE_ACCOUNT",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--worker-pool-spec",
              description:
                "Define the worker pool configuration used by the custom job. You can specify multiple worker pool specs in order to create a custom job with multiple worker pools",
              args: {
                name: "WORKER_POOL_SPEC",
                description: "Dict",
              },
            },
          ],
        },
        {
          name: "describe",
          description:
            "Get detailed information about the custom job by given id",
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
            name: "CUSTOM_JOB",
            description:
              "ID of the custom job or fully qualified identifier for the custom job",
          },
        },
        {
          name: "list",
          description: "Lists the existing custom jobs",
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
            optRegion10,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "local-run",
          description: "Run a custom training locally",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--docker-run-options",
              description:
                "Custom Docker run options to pass to image during execution. For example, '--no-healthcheck, -a stdin'",
              hidden: true,
              args: {
                name: "DOCKER_RUN_OPTIONS",
                description: "List",
              },
            },
            {
              name: "--executor-image-uri",
              description:
                "URI or ID of the container image in either the Container Registry or local that will run the application. See https://cloud.google.com/vertex-ai/docs/training/pre-built-containers for available pre-built container images provided by Vertex AI for training",
              priority: 100,
              args: {
                name: "IMAGE_URI",
                description: "String",
              },
            },
            {
              name: "--extra-dirs",
              description:
                "Extra directories under the working directory to include, besides the one that contains the main executable",
              args: {
                name: "EXTRA_DIR",
                description: "List",
              },
            },
            {
              name: "--extra-packages",
              description:
                "Local paths to Python archives used as training dependencies in the image container. These can be absolute or relative paths. However, they have to be under the work_dir; Otherwise, this tool will not be able to access it",
              args: {
                name: "PACKAGE",
                description: "List",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gpu",
              description: "Enable to use GPU",
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--local-package-path",
              description:
                "Local path of the directory where the python-module or script exists. If not specified, it use the directory where you run the this command",
              args: {
                name: "LOCAL_PATH",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--no-gpu",
              description: "Enable to use GPU",
              hidden: true,
            },
            {
              name: "--output-image-uri",
              description:
                "Uri of the custom container image to be built with the your application packed in",
              args: {
                name: "OUTPUT_IMAGE",
                description: "String",
              },
            },
            optProject,
            {
              name: "--python-module",
              description:
                "Name of the python module to execute, in 'trainer.train' or 'train' format. Its path should be relative to the `work_dir`",
              args: {
                name: "PYTHON_MODULE",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--requirements",
              description:
                'Python dependencies from PyPI to be used when running the application. If this is not specified, and there is no "setup.py" or "requirements.txt" in the working directory, your application will only have access to what exists in the base image with on other dependencies',
              args: {
                name: "REQUIREMENTS",
                description: "List",
              },
            },
            {
              name: "--script",
              description:
                "The relative path of the file to execute. Accepets a Python file or an arbitrary bash script. This path should be relative to the `work_dir`",
              args: {
                name: "SCRIPT",
                description: "String",
              },
            },
            {
              name: "--service-account-key-file",
              description:
                "The JSON file of a Google Cloud service account private key. When specified, the corresponding service account will be used to authenticate the local container to access Google Cloud services. Note that the key file won't be copied to the container, it will be mounted during running time",
              args: {
                name: "ACCOUNT_KEY_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ARGS",
            description:
              "Additional user arguments to be forwarded to your application",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "stream-logs",
          description: "Show stream logs from a running custom job",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--allow-multiline-logs",
              description: "Output multiline log messages as single records",
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
              name: "--no-allow-multiline-logs",
              description: "Output multiline log messages as single records",
              hidden: true,
            },
            {
              name: "--polling-interval",
              description:
                "Number of seconds to wait between efforts to fetch the latest log messages",
              args: {
                name: "POLLING_INTERVAL",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
            optRegion,
            {
              name: "--task-name",
              description:
                "If set, display only the logs for this particular task",
              args: {
                name: "TASK_NAME",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CUSTOM_JOB",
            description:
              "ID of the custom job or fully qualified identifier for the custom job",
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
      name: "endpoints",
      description: "Manage Vertex AI endpoints",
      subcommands: [
        {
          name: "create",
          description: "Create a new Vertex AI endpoint",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the endpoint",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Display name of the endpoint",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optEncryptionKmsKeyName,
            {
              name: "--endpoint-id",
              description: "User-specified ID of the endpoint",
              args: {
                name: "ENDPOINT_ID",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gdce-zone",
              description:
                "The name of the GDCE zone. If set, the endpoint is in GDCE",
              hidden: true,
              args: {
                name: "GDCE_ZONE",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLabels,
            optLogHttp,
            {
              name: "--network",
              description:
                "The full name of the Google Compute Engine network to which the endpoint should be peered",
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optRegion10,
            {
              name: "--request-response-logging-rate",
              description:
                "Prediction request & response sampling rate for logging to BigQuery table",
              args: {
                name: "REQUEST_RESPONSE_LOGGING_RATE",
                description: "Float",
              },
            },
            {
              name: "--request-response-logging-table",
              description:
                "BigQuery table uri for prediction request & response logging",
              args: {
                name: "REQUEST_RESPONSE_LOGGING_TABLE",
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
          description: "Delete an existing Vertex AI endpoint",
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
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint",
          },
        },
        {
          name: "deploy-model",
          description: "Deploy a model to an existing Vertex AI endpoint",
          options: [
            {
              name: "--accelerator",
              description:
                "Manage the accelerator config for GPU serving. When deploying a model with Compute Engine Machine Types, a GPU accelerator may also be selected",
              args: {
                name: "ACCELERATOR",
                description: "Dict",
              },
            },
            optAccessTokenFile,
            optAccount,
            {
              name: "--autoscaling-metric-specs",
              description:
                "Metric specifications that control autoscaling behavior. At most one entry is allowed per metric",
              args: {
                name: "METRIC-NAME=TARGET",
                description: "Dict",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--deployed-model-id",
              description: "User-specified ID of the deployed-model",
              args: {
                name: "DEPLOYED_MODEL_ID",
                description: "String",
              },
            },
            {
              name: "--disable-container-logging",
              description:
                "For custom-trained Models and AutoML Tabular Models, the container of the deployed model instances will send `stderr` and `stdout` streams to Cloud Logging by default. Please note that the logs incur cost, which are subject to [Cloud Logging pricing](https://cloud.google.com/stackdriver/pricing)",
            },
            {
              name: "--display-name",
              description: "Display name of the deployed model",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optEnableAccessLogging,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gpu-partition-size",
              description:
                "The partition size of the GPU accelerator. This can be used to partition a single GPU into multiple smaller GPU instances. See https://cloud.google.com/kubernetes-engine/docs/how-to/gpus-multi#multi-instance_gpu_partitions for more details",
              args: {
                name: "GPU_PARTITION_SIZE",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optMachineType,
            {
              name: "--max-replica-count",
              description:
                "Maximum number of machine replicas for the deployment resources the model will be deployed on",
              args: {
                name: "MAX_REPLICA_COUNT",
              },
            },
            {
              name: "--min-replica-count",
              description:
                "Minimum number of machine replicas for the deployment resources the model will be deployed on. For normal deployments, the value must be equal to or larger than 1. If the value is 0, the deployment will be enrolled in the scale-to-zero feature. If not specified and the uploaded models use dedicated resources, the default value is 1",
              args: {
                name: "MIN_REPLICA_COUNT",
              },
            },
            {
              name: "--model",
              description: "ID of the uploaded model",
              priority: 100,
              args: {
                name: "MODEL",
                description: "String",
              },
            },
            {
              name: "--no-disable-container-logging",
              description:
                "For custom-trained Models and AutoML Tabular Models, the container of the deployed model instances will send `stderr` and `stdout` streams to Cloud Logging by default. Please note that the logs incur cost, which are subject to [Cloud Logging pricing](https://cloud.google.com/stackdriver/pricing)",
              hidden: true,
            },
            optNoEnableAccessLogging,
            {
              name: "--no-spot",
              description:
                "If true, schedule the deployment workload on Spot VMs",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion2,
            {
              name: "--required-replica-count",
              description:
                "Required number of machine replicas for the deployment resources the model will be considered successfully deployed. This value must be greater than or equal to 1 and less than or equal to min-replica-count",
              args: {
                name: "REQUIRED_REPLICA_COUNT",
              },
            },
            {
              name: "--reservation-affinity",
              description:
                "A ReservationAffinity can be used to configure a Vertex AI resource (e.g., a DeployedModel) to draw its Compute Engine resources from a Shared Reservation, or exclusively from on-demand capacity",
              args: {
                name: "RESERVATION_AFFINITY",
                description: "Dict",
              },
            },
            {
              name: "--service-account",
              description:
                "Service account that the deployed model's container runs as. Specify the email address of the service account. If this service account is not specified, the container runs as a service account that doesn't have access to the resource project",
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
              },
            },
            {
              name: "--spot",
              description:
                "If true, schedule the deployment workload on Spot VMs",
            },
            optTraceToken,
            optTrafficSplit,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint",
          },
        },
        {
          name: "describe",
          description: "Describe an existing Vertex AI endpoint",
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
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint",
          },
        },
        {
          name: "direct-predict",
          description: "Run Vertex AI online direct prediction",
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
            optJsonRequest,
            optLogHttp,
            optProject,
            optQuiet,
            optRegion2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint",
          },
        },
        {
          name: "direct-raw-predict",
          description: "Run Vertex AI online direct raw prediction",
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
            optJsonRequest,
            optLogHttp,
            optProject,
            optQuiet,
            optRegion2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint",
          },
        },
        {
          name: "explain",
          description:
            "Request an online explanation from an Vertex AI endpoint",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--deployed-model-id",
              description: "Id of the deployed model",
              args: {
                name: "DEPLOYED_MODEL_ID",
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
            optJsonRequest,
            optLogHttp,
            optProject,
            optQuiet,
            optRegion2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint",
          },
        },
        {
          name: "list",
          description: "List existing Vertex AI endpoints",
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
              name: "--list-model-garden-endpoints-only",
              description:
                "Whether to only list endpoints related to Model Garden",
            },
            optLogHttp,
            {
              name: "--no-list-model-garden-endpoints-only",
              description:
                "Whether to only list endpoints related to Model Garden",
              hidden: true,
            },
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optRegion10,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "predict",
          description: "Run Vertex AI online prediction",
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
            optJsonRequest,
            optLogHttp,
            optProject,
            optQuiet,
            optRegion2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint",
          },
        },
        {
          name: "raw-predict",
          description: "Run Vertex AI online raw prediction",
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
              name: "--http-headers",
              description:
                "List of header and value pairs to send as part of the request. For example, to set the *Content-Type* and *X-Header*:",
              args: {
                name: "HEADER=VALUE",
                description: "Dict",
              },
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optProject,
            optQuiet,
            optRegion2,
            {
              name: "--request",
              description: "The request to send to the endpoint",
              priority: 100,
              args: {
                name: "REQUEST",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint",
          },
        },
        {
          name: "stream-direct-predict",
          description: "Run Vertex AI online stream direct prediction",
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
            optJsonRequest,
            optLogHttp,
            optProject,
            optQuiet,
            optRegion2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint",
          },
        },
        {
          name: "stream-direct-raw-predict",
          description: "Run Vertex AI online stream direct raw prediction",
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
            optJsonRequest,
            optLogHttp,
            optProject,
            optQuiet,
            optRegion2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint",
          },
        },
        {
          name: "stream-raw-predict",
          description: "Run Vertex AI online stream raw prediction",
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
              name: "--http-headers",
              description:
                "List of header and value pairs to send as part of the request. For example, to set the *Content-Type* and *X-Header*:",
              args: {
                name: "HEADER=VALUE",
                description: "Dict",
              },
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optProject,
            optQuiet,
            optRegion2,
            {
              name: "--request",
              description: "The request to send to the endpoint",
              priority: 100,
              args: {
                name: "REQUEST",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint",
          },
        },
        {
          name: "undeploy-model",
          description: "Undeploy a model from an existing Vertex AI endpoint",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--deployed-model-id",
              description: "Id of the deployed model",
              priority: 100,
              args: {
                name: "DEPLOYED_MODEL_ID",
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
            optRegion2,
            optTraceToken,
            optTrafficSplit,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint",
          },
        },
        {
          name: "update",
          description: "Update an existing Vertex AI endpoint",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optClearLabels,
            {
              name: "--clear-traffic-split",
              description:
                "Clears the traffic split map. If the map is empty, the endpoint is to not accept any traffic at the moment",
            },
            optConfiguration,
            {
              name: "--description",
              description: "Description of the endpoint",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--disable-request-response-logging",
              description: "Disable prediction request & response logging",
            },
            {
              name: "--display-name",
              description: "Display name of the endpoint",
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
            optLogHttp,
            optNoClearLabels,
            {
              name: "--no-clear-traffic-split",
              description:
                "Clears the traffic split map. If the map is empty, the endpoint is to not accept any traffic at the moment",
              hidden: true,
            },
            {
              name: "--no-disable-request-response-logging",
              description: "Disable prediction request & response logging",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion2,
            optRemoveLabels,
            {
              name: "--request-response-logging-rate",
              description:
                "Prediction request & response sampling rate for logging to BigQuery table",
              args: {
                name: "REQUEST_RESPONSE_LOGGING_RATE",
                description: "Float",
              },
            },
            {
              name: "--request-response-logging-table",
              description:
                "BigQuery table uri for prediction request & response logging",
              args: {
                name: "REQUEST_RESPONSE_LOGGING_TABLE",
                description: "String",
              },
            },
            optTraceToken,
            optTrafficSplit,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint",
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
      name: "hp-tuning-jobs",
      description: "Manage Vertex AI hyperparameter tuning jobs",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a running hyperparameter tuning job",
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
            name: "HPTUNING_JOB",
            description:
              "ID of the hyperparameter tuning job or fully qualified identifier for the hyperparameter tuning job",
          },
        },
        {
          name: "create",
          description: "Create a hyperparameter tuning job",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--algorithm",
              description:
                "Search algorithm specified for the given study. _ALGORITHM_ must be one of: *algorithm-unspecified*, *grid-search*, *random-search*",
              args: {
                name: "ALGORITHM",
                suggestions: [
                  "algorithm-unspecified",
                  "grid-search",
                  "random-search",
                ],
              },
            },
            optBillingProject,
            {
              name: "--config",
              description:
                "Path to the job configuration file. This file should be a YAML document containing a HyperparameterTuningSpec. If an option is specified both in the configuration file **and** via command line arguments, the command line arguments override the configuration file",
              priority: 100,
              args: {
                name: "CONFIG",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--display-name",
              description:
                "Display name of the hyperparameter tuning job to create",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--enable-dashboard-access",
              description:
                "Whether you want Vertex AI to enable dashboard built on the training containers. If set to ``true'', you can access the dashboard at the URIs given by CustomJob.web_access_uris or Trial.web_access_uris (within HyperparameterTuningJob.trials)",
            },
            {
              name: "--enable-web-access",
              description:
                "Whether you want Vertex AI to enable [interactive shell access](https://cloud.google.com/vertex-ai/docs/training/monitor-debug-interactive-shell) to training containers. If set to ``true'', you can access interactive shells at the URIs given by CustomJob.web_access_uris or Trial.web_access_uris (within HyperparameterTuningJob.trials)",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKmsKey,
            optKmsKeyring,
            optKmsLocation,
            optKmsProject,
            optLabels,
            optLogHttp,
            {
              name: "--max-trial-count",
              description:
                "Desired total number of trials. The default value is 1",
              args: {
                name: "MAX_TRIAL_COUNT",
                description: "Int",
              },
            },
            optNetwork,
            {
              name: "--no-enable-dashboard-access",
              description:
                "Whether you want Vertex AI to enable dashboard built on the training containers. If set to ``true'', you can access the dashboard at the URIs given by CustomJob.web_access_uris or Trial.web_access_uris (within HyperparameterTuningJob.trials)",
              hidden: true,
            },
            {
              name: "--no-enable-web-access",
              description:
                "Whether you want Vertex AI to enable [interactive shell access](https://cloud.google.com/vertex-ai/docs/training/monitor-debug-interactive-shell) to training containers. If set to ``true'', you can access interactive shells at the URIs given by CustomJob.web_access_uris or Trial.web_access_uris (within HyperparameterTuningJob.trials)",
              hidden: true,
            },
            {
              name: "--parallel-trial-count",
              description:
                "Desired number of Trials to run in parallel. The default value is 1",
              args: {
                name: "PARALLEL_TRIAL_COUNT",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
            optRegion10,
            {
              name: "--service-account",
              description:
                "The email address of a service account to use when running the training appplication. You must have the `iam.serviceAccounts.actAs` permission for the specified service account",
              args: {
                name: "SERVICE_ACCOUNT",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "describe",
          description:
            "Get detail information about the hyperparameter tuning job by given id",
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
            name: "HPTUNING_JOB",
            description:
              "ID of the hyperparameter tuning job or fully qualified identifier for the hyperparameter tuning job",
          },
        },
        {
          name: "list",
          description: "List existing hyperparameter tuning jobs",
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
            optRegion10,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "stream-logs",
          description:
            "Stream logs from a running Vertex AI hyperparameter tuning job",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--allow-multiline-logs",
              description: "Output multiline log messages as single records",
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
              name: "--no-allow-multiline-logs",
              description: "Output multiline log messages as single records",
              hidden: true,
            },
            {
              name: "--polling-interval",
              description:
                "Number of seconds to wait between efforts to fetch the latest log messages",
              args: {
                name: "POLLING_INTERVAL",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
            optRegion3,
            {
              name: "--task-name",
              description:
                "If set, display only the logs for this particular task",
              args: {
                name: "TASK_NAME",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "HPTUNING_JOB",
            description:
              "ID of the hyperparameter tuning job or fully qualified identifier for the hyperparameter tuning job",
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
      name: "index-endpoints",
      description: "Manage Vertex AI index endpoints",
      subcommands: [
        {
          name: "create",
          description: "Create a new Vertex AI index endpoint",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the index endpoint",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Display name of the index endpoint",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--enable-private-service-connect",
              description:
                "If true, expose the index endpoint via private service connect",
            },
            optEncryptionKmsKeyName,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLabels,
            optLogHttp,
            {
              name: "--network",
              description:
                "The Google Compute Engine network name to which the IndexEndpoint should be peered",
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            {
              name: "--no-enable-private-service-connect",
              description:
                "If true, expose the index endpoint via private service connect",
              hidden: true,
            },
            {
              name: "--no-public-endpoint-enabled",
              description:
                "If true, the deployed index will be accessible through public endpoint",
              hidden: true,
            },
            optProject,
            {
              name: "--project-allowlist",
              description:
                "List of projects from which the forwarding rule will target the service attachment",
              args: {
                name: "PROJECTS",
                description: "List",
              },
            },
            {
              name: "--public-endpoint-enabled",
              description:
                "If true, the deployed index will be accessible through public endpoint",
            },
            optQuiet,
            optRegion10,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "delete",
          description: "Delete an existing Vertex AI index endpoint",
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
          args: {
            name: "INDEX_ENDPOINT",
            description:
              "ID of the index_endpoint or fully qualified identifier for the index_endpoint",
          },
        },
        {
          name: "deploy-index",
          description: "Deploy an index to a Vertex AI index endpoint",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--allowed-issuers",
              description: "List of allowed JWT issuers for a deployed index",
              args: {
                name: "ALLOWED_ISSUERS",
                description: "List",
              },
            },
            {
              name: "--audiences",
              description:
                "List of JWT audiences that are allowed to access a deployed index",
              args: {
                name: "AUDIENCES",
                description: "List",
              },
            },
            optBillingProject,
            optConfiguration,
            optDeployedIndexId,
            {
              name: "--deployment-group",
              description:
                "Deployment group can be no longer than 64 characters (eg:`test`, `prod`). If not set, we will use the `default` deployment group",
              args: {
                name: "DEPLOYMENT_GROUP",
                description: "String",
              },
            },
            {
              name: "--deployment-tier",
              description:
                "The deployment tier that the deployed index is deployed to. If not specified, a system-chosen default tier is used. _DEPLOYMENT_TIER_ must be (only one value is supported): *storage*",
              args: {
                name: "DEPLOYMENT_TIER",
                suggestions: ["storage"],
              },
            },
            {
              name: "--display-name",
              description: "Display name of the deployed index",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optEnableAccessLogging,
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
              description: "ID of the index",
              priority: 100,
              args: {
                name: "INDEX",
                description: "String",
              },
            },
            optLogHttp,
            optMachineType,
            {
              name: "--max-replica-count",
              description:
                "Maximum number of machine replicas the deployed index will be always deployed on",
              args: {
                name: "MAX_REPLICA_COUNT",
                description: "Int",
              },
            },
            {
              name: "--min-replica-count",
              description:
                "Minimum number of machine replicas the deployed index will be always deployed on. If specified, the value must be equal to or larger than 1",
              args: {
                name: "MIN_REPLICA_COUNT",
              },
            },
            optNoEnableAccessLogging,
            optProject,
            {
              name: "--psc-automation-configs",
              description:
                "A pair of `project-id` and `network` the PSC index will be deployed to. For example: `--psc-automation-configs=project-id=my-project,network=my-network`. For multiple networks, this flag can be repeated: `--psc-automation-configs=project-id=my-project,network=my-network --psc-automation-configs=project-id=my-project2,network=my-network2`",
              isRepeatable: true,
              args: {
                name: "PSC_AUTOMATION_CONFIGS",
                description: "Dict",
              },
            },
            optQuiet,
            optRegion5,
            {
              name: "--reserved-ip-ranges",
              description:
                "List of reserved IP ranges deployed index will be deployed to",
              args: {
                name: "RESERVED_IP_RANGES",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INDEX_ENDPOINT",
            description:
              "ID of the index_endpoint or fully qualified identifier for the index_endpoint",
          },
        },
        {
          name: "describe",
          description:
            "Gets detailed index endpoint information about the given index endpoint id",
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
          args: {
            name: "INDEX_ENDPOINT",
            description:
              "ID of the index_endpoint or fully qualified identifier for the index_endpoint",
          },
        },
        {
          name: "list",
          description:
            "Lists the index endpoints of the given project and region",
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
            optRegion10,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "mutate-deployed-index",
          description:
            "Mutate an existing deployed index from a Vertex AI index endpoint",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--allowed-issuers",
              description: "List of allowed JWT issuers for a deployed index",
              args: {
                name: "ALLOWED_ISSUERS",
                description: "List",
              },
            },
            {
              name: "--audiences",
              description:
                "List of JWT audiences that are allowed to access a deployed index",
              args: {
                name: "AUDIENCES",
                description: "List",
              },
            },
            optBillingProject,
            optConfiguration,
            optDeployedIndexId,
            {
              name: "--deployment-group",
              description:
                "Deployment group can be no longer than 64 characters (eg:`test`, `prod`). If not set, we will use the `default` deployment group",
              args: {
                name: "DEPLOYMENT_GROUP",
                description: "String",
              },
            },
            optEnableAccessLogging,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optMachineType,
            {
              name: "--max-replica-count",
              description:
                "Maximum number of machine replicas the deployed index will be always deployed on",
              args: {
                name: "MAX_REPLICA_COUNT",
                description: "Int",
              },
            },
            {
              name: "--min-replica-count",
              description:
                "Minimum number of machine replicas the deployed index will be always deployed on. If specified, the value must be equal to or larger than 1",
              args: {
                name: "MIN_REPLICA_COUNT",
              },
            },
            optNoEnableAccessLogging,
            optProject,
            optQuiet,
            optRegion5,
            {
              name: "--reserved-ip-ranges",
              description:
                "List of reserved IP ranges deployed index will be deployed to",
              args: {
                name: "RESERVED_IP_RANGES",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INDEX_ENDPOINT",
            description:
              "ID of the index_endpoint or fully qualified identifier for the index_endpoint",
          },
        },
        {
          name: "undeploy-index",
          description: "Undeploy an index from a Vertex AI index endpoint",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDeployedIndexId,
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
          args: {
            name: "INDEX_ENDPOINT",
            description:
              "ID of the index_endpoint or fully qualified identifier for the index_endpoint",
          },
        },
        {
          name: "update",
          description: "Update an Vertex AI index endpoint",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optClearLabels,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the index endpoint",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Display name of the index endpoint",
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
            optLogHttp,
            optNoClearLabels,
            optProject,
            optQuiet,
            optRegion5,
            optRemoveLabels,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INDEX_ENDPOINT",
            description:
              "ID of the index_endpoint or fully qualified identifier for the index_endpoint",
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
      name: "indexes",
      description: "Manage Vertex AI indexes",
      subcommands: [
        {
          name: "create",
          description: "Create a new Vertex AI index",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the index",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Display name of the index",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            optEncryptionKmsKeyName,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--index-update-method",
              description:
                "The update method to use with this index. Choose `stream-update` or `batch-update` (case insensitive). If not set, batch update will be used by default. _INDEX_UPDATE_METHOD_ must be one of:",
              args: {
                name: "INDEX_UPDATE_METHOD",
                suggestions: ["batch-update", "stream-update"],
              },
            },
            optLabels,
            optLogHttp,
            {
              name: "--metadata-file",
              description:
                "Path to a local JSON file that contains the additional metadata information about the index",
              priority: 100,
              args: {
                name: "METADATA_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--metadata-schema-uri",
              description:
                "Points to a YAML file stored on Google Cloud Storage describing additional information about index",
              args: {
                name: "METADATA_SCHEMA_URI",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optRegion10,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "delete",
          description: "Delete an existing Vertex AI index",
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
          args: {
            name: "INDEX",
            description:
              "ID of the index or fully qualified identifier for the index",
          },
        },
        {
          name: "describe",
          description:
            "Gets detailed index information about the given index id",
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
          args: {
            name: "INDEX",
            description:
              "ID of the index or fully qualified identifier for the index",
          },
        },
        {
          name: "list",
          description: "Lists the indexes of the given project and region",
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
            optRegion10,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "remove-datapoints",
          description: "Remove data points from the specified index",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--datapoint-ids",
              description:
                "List of index datapoint ids to be removed from the index",
              args: {
                name: "DATAPOINT_IDS",
                description: "List",
              },
            },
            {
              name: "--datapoints-from-file",
              description:
                "Path to a local JSON file that contains the data points that need to be added to the index",
              args: {
                name: "DATAPOINTS_FROM_FILE",
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
            optRegion4,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INDEX",
            description:
              "ID of the index or fully qualified identifier for the index",
          },
        },
        {
          name: "update",
          description: "Update an Vertex AI index",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optClearLabels,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the index",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Display name of the index",
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
            optLogHttp,
            {
              name: "--metadata-file",
              description:
                "Path to a local JSON file that contains the additional metadata information about the index",
              args: {
                name: "METADATA_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optNoClearLabels,
            optProject,
            optQuiet,
            optRegion4,
            optRemoveLabels,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INDEX",
            description:
              "ID of the index or fully qualified identifier for the index",
          },
        },
        {
          name: "upsert-datapoints",
          description: "Upsert data points into the specified index",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--datapoints-from-file",
              description:
                "Path to a local JSON file that contains the data points that need to be added to the index",
              priority: 100,
              args: {
                name: "DATAPOINTS_FROM_FILE",
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
            optRegion4,
            optTraceToken,
            {
              name: "--update-mask",
              description:
                "Update mask is used to specify the fields to be overwritten in the datapoints by the update. The fields specified in the update_mask are relative to each IndexDatapoint inside datapoints, not the full request",
              args: {
                name: "UPDATE_MASK_PATH",
                description: "List",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INDEX",
            description:
              "ID of the index or fully qualified identifier for the index",
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
      name: "model-garden",
      description: "Interact with and manage resources in Vertex Model Garden",
      subcommands: [
        {
          name: "models",
          description: "List and use Model Garden models",
          subcommands: [
            {
              name: "deploy",
              description:
                "Deploy a model in Model Garden to a Vertex AI endpoint",
              options: [
                {
                  name: "--accelerator-count",
                  description:
                    "The accelerator count to serve the model. Accelerator count should be non-negative",
                  args: {
                    name: "ACCELERATOR_COUNT",
                    description: "Int",
                  },
                },
                {
                  name: "--accelerator-type",
                  description:
                    "The accelerator type to serve the model. It should be a supported accelerator type from the verified deployment configurations of the model. Use `gcloud ai model-garden models list-deployment-config` to check the supported accelerator types",
                  args: {
                    name: "ACCELERATOR_TYPE",
                    description: "String",
                  },
                },
                {
                  name: "--accept-eula",
                  description:
                    "When set, the user accepts the End User License Agreement (EULA) of the model",
                },
                optAccessTokenFile,
                optAccount,
                {
                  name: "--asynchronous",
                  description:
                    "If set to true, the command will terminate immediately and not keep polling the operation status",
                },
                optBillingProject,
                optConfiguration,
                {
                  name: "--container-args",
                  description:
                    "Comma-separated arguments passed to the command run by the container image. If not specified and no `--command` is provided, the container image's default command is used",
                  args: {
                    name: "ARG",
                    description: "List",
                  },
                },
                {
                  name: "--container-command",
                  description:
                    "Entrypoint for the container image. If not specified, the container image's default entrypoint is run",
                  args: {
                    name: "COMMAND",
                    description: "List",
                  },
                },
                {
                  name: "--container-deployment-timeout-seconds",
                  description: "Deployment timeout in seconds",
                  args: {
                    name: "CONTAINER_DEPLOYMENT_TIMEOUT_SECONDS",
                    description: "Int",
                  },
                },
                {
                  name: "--container-env-vars",
                  description:
                    "List of key-value pairs to set as environment variables",
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                  },
                },
                {
                  name: "--container-grpc-ports",
                  description:
                    "Container ports to receive grpc requests at. Must be a number between 1 and 65535, inclusive",
                  args: {
                    name: "PORT",
                    description: "List",
                  },
                },
                {
                  name: "--container-health-probe-exec",
                  description:
                    'Exec specifies the action to take. Used by health probe. An example of this argument would be ["cat", "/tmp/healthy"]',
                  args: {
                    name: "HEALTH_PROBE_EXEC",
                    description: "List",
                  },
                },
                {
                  name: "--container-health-probe-period-seconds",
                  description:
                    "How often (in seconds) to perform the health probe. Default to 10 seconds. Minimum value is 1",
                  args: {
                    name: "CONTAINER_HEALTH_PROBE_PERIOD_SECONDS",
                    description: "Int",
                  },
                },
                {
                  name: "--container-health-probe-timeout-seconds",
                  description:
                    "Number of seconds after which the health probe times out. Defaults to 1 second. Minimum value is 1",
                  args: {
                    name: "CONTAINER_HEALTH_PROBE_TIMEOUT_SECONDS",
                    description: "Int",
                  },
                },
                {
                  name: "--container-health-route",
                  description:
                    "HTTP path to send health checks to inside the container",
                  args: {
                    name: "CONTAINER_HEALTH_ROUTE",
                    description: "String",
                  },
                },
                {
                  name: "--container-image-uri",
                  description:
                    "URI of the Model serving container file in the Container Registry (e.g. gcr.io/myproject/server:latest)",
                  args: {
                    name: "CONTAINER_IMAGE_URI",
                    description: "String",
                  },
                },
                {
                  name: "--container-ports",
                  description:
                    "Container ports to receive http requests at. Must be a number between 1 and 65535, inclusive",
                  args: {
                    name: "PORT",
                    description: "List",
                  },
                },
                {
                  name: "--container-predict-route",
                  description:
                    "HTTP path to send prediction requests to inside the container",
                  args: {
                    name: "CONTAINER_PREDICT_ROUTE",
                    description: "String",
                  },
                },
                {
                  name: "--container-shared-memory-size-mb",
                  description:
                    "The amount of the VM memory to reserve as the shared memory for the model in megabytes",
                  args: {
                    name: "CONTAINER_SHARED_MEMORY_SIZE_MB",
                    description: "Int",
                  },
                },
                {
                  name: "--container-startup-probe-exec",
                  description:
                    'Exec specifies the action to take. Used by startup probe. An example of this argument would be ["cat", "/tmp/healthy"]',
                  args: {
                    name: "STARTUP_PROBE_EXEC",
                    description: "List",
                  },
                },
                {
                  name: "--container-startup-probe-period-seconds",
                  description:
                    "How often (in seconds) to perform the startup probe. Default to 10 seconds. Minimum value is 1",
                  args: {
                    name: "CONTAINER_STARTUP_PROBE_PERIOD_SECONDS",
                    description: "Int",
                  },
                },
                {
                  name: "--container-startup-probe-timeout-seconds",
                  description:
                    "Number of seconds after which the startup probe times out. Defaults to 1 second. Minimum value is 1",
                  args: {
                    name: "CONTAINER_STARTUP_PROBE_TIMEOUT_SECONDS",
                    description: "Int",
                  },
                },
                {
                  name: "--disable-dedicated-endpoint",
                  description:
                    "If true, the dedicated endpoint will be disabled and the deployed model will be exposed through the shared DNS",
                },
                {
                  name: "--enable-fast-tryout",
                  description:
                    "If True, model will be deployed using faster deployment path. Useful for quick experiments. Not for production workloads. Only available for most popular models with certain machine types",
                },
                {
                  name: "--endpoint-display-name",
                  description:
                    "Display name of the endpoint with the deployed model",
                  args: {
                    name: "ENDPOINT_DISPLAY_NAME",
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
                {
                  name: "--hugging-face-access-token",
                  description:
                    "The access token from Hugging Face needed to read the model artifacts of gated models. It is only needed when the Hugging Face model to deploy is gated",
                  args: {
                    name: "HUGGING_FACE_ACCESS_TOKEN",
                    description: "String",
                  },
                },
                optImpersonateServiceAccount,
                optLogHttp,
                {
                  name: "--machine-type",
                  description:
                    "The machine type to deploy the model to. It should be a supported machine type from the deployment configurations of the model. Use `gcloud ai model-garden models list-deployment-config` to check the supported machine types",
                  args: {
                    name: "MACHINE_TYPE",
                    description: "String",
                  },
                },
                {
                  name: "--model",
                  description:
                    "The model to be deployed. If it is a Model Garden model, it should be in the format of `{publisher_name}/{model_name}@{model_version_name}, e.g. `google/gemma2@gemma-2-2b`. If it is a Hugging Face model, it should be in the convention of Hugging Face models, e.g. `meta-llama/Meta-Llama-3-8B`. If it is a Custom Weights model, it should be in the format of `gs://{gcs_bucket_uri}`, e.g. `gs://-model-garden-public-us/llama3.1/Meta-Llama-3.1-8B-Instruct`",
                  priority: 100,
                  args: {
                    name: "MODEL",
                    description: "String",
                  },
                },
                {
                  name: "--no-accept-eula",
                  description:
                    "When set, the user accepts the End User License Agreement (EULA) of the model",
                  hidden: true,
                },
                {
                  name: "--no-asynchronous",
                  description:
                    "If set to true, the command will terminate immediately and not keep polling the operation status",
                  hidden: true,
                },
                {
                  name: "--no-disable-dedicated-endpoint",
                  description:
                    "If true, the dedicated endpoint will be disabled and the deployed model will be exposed through the shared DNS",
                  hidden: true,
                },
                {
                  name: "--no-enable-fast-tryout",
                  description:
                    "If True, model will be deployed using faster deployment path. Useful for quick experiments. Not for production workloads. Only available for most popular models with certain machine types",
                  hidden: true,
                },
                {
                  name: "--no-spot",
                  description:
                    "If true, schedule the deployment workload on Spot VM",
                  hidden: true,
                },
                {
                  name: "--no-use-dedicated-endpoint",
                  description:
                    "If true, the endpoint will be exposed through a dedicated DNS. Your request to the dedicated DNS will be isolated from other users' traffic and will have better performance and reliability",
                  hidden: true,
                },
                optProject,
                optQuiet,
                optRegion10,
                {
                  name: "--reservation-affinity",
                  description:
                    "A ReservationAffinity can be used to configure a Vertex AI resource (e.g., a DeployedModel) to draw its Compute Engine resources from a Shared Reservation, or exclusively from on-demand capacity",
                  args: {
                    name: "RESERVATION_AFFINITY",
                    description: "Dict",
                  },
                },
                {
                  name: "--spot",
                  description:
                    "If true, schedule the deployment workload on Spot VM",
                },
                {
                  name: "--system-labels",
                  description: "System labels for Model Garden deployments",
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                  },
                },
                optTraceToken,
                {
                  name: "--use-dedicated-endpoint",
                  description:
                    "If true, the endpoint will be exposed through a dedicated DNS. Your request to the dedicated DNS will be isolated from other users' traffic and will have better performance and reliability",
                },
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "list",
              description: "List the publisher models in Model Garden",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--can-deploy-hugging-face-models",
                  description:
                    "Whether to only list Hugging Face models that can be deployed",
                },
                optConfiguration,
                optFilter,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--full-resource-name",
                  description:
                    "Whether to return the full resource name of the model",
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                {
                  name: "--limit",
                  description:
                    "Maximum number of resources to list. The default is *1000*. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
                  args: {
                    name: "LIMIT",
                    description: "Int",
                  },
                },
                optLogHttp,
                {
                  name: "--model-filter",
                  description:
                    "Filter to apply to the model names or the display names of the list of models",
                  args: {
                    name: "MODEL_FILTER",
                    description: "String",
                  },
                },
                {
                  name: "--no-can-deploy-hugging-face-models",
                  description:
                    "Whether to only list Hugging Face models that can be deployed",
                  hidden: true,
                },
                {
                  name: "--no-full-resource-name",
                  description:
                    "Whether to return the full resource name of the model",
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
            },
            {
              name: "list-deployment-config",
              description:
                "List the machine specifications supported by and verified for a model in Model Garden",
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
                {
                  name: "--hugging-face-access-token",
                  description:
                    "The access token from Hugging Face needed to read the model artifacts of gated models in order to generate the deployment configs. It is only needed when the Hugging Face model to deploy is gated and not verified by Model Garden. You can use the `gcloud ai alpha/beta model-garden models list` command to find out which ones are verified by Model Garden",
                  args: {
                    name: "HUGGING_FACE_ACCESS_TOKEN",
                    description: "String",
                  },
                },
                optImpersonateServiceAccount,
                optLogHttp,
                {
                  name: "--model",
                  description:
                    "The model to be deployed. If it is a Model Garden model, it should be in the format of `{publisher_name}/{model_name}@{model_version_name}, e.g. `google/gemma2@gemma-2-2b`. If it is a Hugging Face model, it should be in the convention of Hugging Face models, e.g. `meta-llama/Meta-Llama-3-8B`",
                  priority: 100,
                  args: {
                    name: "MODEL",
                    description: "String",
                  },
                },
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
      name: "model-monitoring-jobs",
      description: "Manage Vertex AI model monitoring jobs",
      subcommands: [
        {
          name: "create",
          description: "Create a new Vertex AI model monitoring job",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--analysis-instance-schema",
              description:
                "YAML schema file uri(Google Cloud Storage) describing the format of a single instance that you want Tensorflow Data Validation (TFDV) to analyze",
              args: {
                name: "ANALYSIS_INSTANCE_SCHEMA",
                description: "String",
              },
            },
            {
              name: "--anomaly-cloud-logging",
              description:
                "If true, anomaly will be sent to Cloud Logging. Use *--anomaly-cloud-logging* to enable and *--no-anomaly-cloud-logging* to disable",
            },
            {
              name: "--bigquery-uri",
              description:
                "BigQuery table of the unmanaged Dataset used to train this Model. For example: `bq://projectId.bqDatasetId.bqTableId`",
              args: {
                name: "BIGQUERY_URI",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--data-format",
              description:
                "Data format of the dataset, must be provided if the input is from Google Cloud Storage. The possible formats are: tf-record, csv",
              args: {
                name: "DATA_FORMAT",
                description: "String",
              },
            },
            {
              name: "--dataset",
              description: "Id of Vertex AI Dataset used to train this Model",
              args: {
                name: "DATASET",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description:
                "Display name of the model deployment monitoring job",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--emails",
              description:
                "Comma-separated email address list. e.g. --emails=a@gmail.com,b@gmail.com",
              priority: 100,
              args: {
                name: "EMAILS",
                description: "List",
              },
            },
            {
              name: "--endpoint",
              description: "Id of the endpoint",
              priority: 100,
              args: {
                name: "ENDPOINT",
                description: "String",
              },
            },
            {
              name: "--feature-attribution-thresholds",
              description:
                "List of feature-attribution score threshold value pairs(Apply for all the deployed models under the endpoint, if you want to specify different thresholds for different deployed model, please use flag --monitoring-config-from-file or call API directly). If only feature name is set, the default threshold value would be 0.3",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--feature-thresholds",
              description:
                "List of feature-threshold value pairs(Apply for all the deployed models under the endpoint, if you want to specify different thresholds for different deployed model, please use flag --monitoring-config-from-file or call API directly). If only feature name is set, the default threshold value would be 0.3",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gcs-uris",
              description:
                "Comma-separated Google Cloud Storage uris of the unmanaged Datasets used to train this Model",
              args: {
                name: "GCS_URIS",
                description: "List",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKmsKey,
            optKmsKeyring,
            optKmsLocation,
            optKmsProject,
            optLabels,
            optLogHttp,
            {
              name: "--log-ttl",
              description:
                "TTL of BigQuery tables in user projects which stores logs(Day-based unit)",
              args: {
                name: "LOG_TTL",
                description: "Int",
              },
            },
            {
              name: "--monitoring-config-from-file",
              description:
                "Path to the model monitoring objective config file. This file should be a YAML document containing a `ModelDeploymentMonitoringJob`(https://cloud.google.com/vertex-ai/docs/reference/rest/v1beta1/projects.locations.modelDeploymentMonitoringJobs#ModelDeploymentMonitoringJob), but only the ModelDeploymentMonitoringObjectiveConfig needs to be configured",
              args: {
                name: "MONITORING_CONFIG_FROM_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--monitoring-frequency",
              description: "Monitoring frequency, unit is 1 hour",
              args: {
                name: "MONITORING_FREQUENCY",
                description: "Int",
              },
            },
            {
              name: "--no-anomaly-cloud-logging",
              description: "If true, anomaly will be sent to Cloud Logging",
            },
            {
              name: "--notification-channels",
              description:
                "Comma-separated notification channel list. e.g. --notification-channels=projects/fake-project/notificationChannels/123,projects/fake-project/notificationChannels/456",
              args: {
                name: "NOTIFICATION_CHANNELS",
                description: "List",
              },
            },
            {
              name: "--predict-instance-schema",
              description:
                "YAML schema file uri(Google Cloud Storage) describing the format of a single instance, which are given to format this Endpoint's prediction. If not set, predict schema will be generated from collected predict requests",
              args: {
                name: "PREDICT_INSTANCE_SCHEMA",
                description: "String",
              },
            },
            {
              name: "--prediction-sampling-rate",
              description: "Prediction sampling rate",
              priority: 100,
              args: {
                name: "PREDICTION_SAMPLING_RATE",
                description: "Float",
              },
            },
            optProject,
            optQuiet,
            optRegion10,
            {
              name: "--sample-predict-request",
              description:
                "Path to a local file containing the body of a JSON object. Same format as [PredictRequest.instances][], this can be set as a replacement of predict-instance-schema. If not set, predict schema will be generated from collected predict requests",
              args: {
                name: "SAMPLE_PREDICT_REQUEST",
                description: "String",
              },
            },
            {
              name: "--target-field",
              description:
                "Target field name the model is to predict. Must be provided if you'd like to do training-prediction skew detection",
              args: {
                name: "TARGET_FIELD",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--training-sampling-rate",
              description: "Training Dataset sampling rate",
              args: {
                name: "TRAINING_SAMPLING_RATE",
                description: "Float",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "delete",
          description:
            "Delete an existing Vertex AI model deployment monitoring job",
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
            optRegion7,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MONITORING_JOB",
            description:
              "ID of the monitoring_job or fully qualified identifier for the monitoring_job",
          },
        },
        {
          name: "describe",
          description:
            "Get detailed model deployment monitoring job information about the given job id",
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
            optRegion7,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MONITORING_JOB",
            description:
              "ID of the monitoring_job or fully qualified identifier for the monitoring_job",
          },
        },
        {
          name: "list",
          description:
            "List the model deployment monitoring jobs of the given project and region",
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
            optRegion10,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "pause",
          description:
            "Pause a running Vertex AI model deployment monitoring job",
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
            optRegion7,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MONITORING_JOB",
            description:
              "ID of the monitoring_job or fully qualified identifier for the monitoring_job",
          },
        },
        {
          name: "resume",
          description:
            "Resume a paused Vertex AI model deployment monitoring job",
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
            optRegion7,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MONITORING_JOB",
            description:
              "ID of the monitoring_job or fully qualified identifier for the monitoring_job",
          },
        },
        {
          name: "update",
          description: "Update an Vertex AI model deployment monitoring job",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--analysis-instance-schema",
              description:
                "YAML schema file uri(Google Cloud Storage) describing the format of a single instance that you want Tensorflow Data Validation (TFDV) to analyze",
              args: {
                name: "ANALYSIS_INSTANCE_SCHEMA",
                description: "String",
              },
            },
            {
              name: "--anomaly-cloud-logging",
              description:
                "If true, anomaly will be sent to Cloud Logging. Use *--anomaly-cloud-logging* to enable and *--no-anomaly-cloud-logging* to disable",
            },
            optBillingProject,
            optClearLabels,
            optConfiguration,
            {
              name: "--display-name",
              description:
                "Display name of the model deployment monitoring job",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--emails",
              description:
                "Comma-separated email address list. e.g. --emails=a@gmail.com,b@gmail.com",
              args: {
                name: "EMAILS",
                description: "List",
              },
            },
            {
              name: "--feature-attribution-thresholds",
              description:
                "List of feature-attribution score threshold value pairs(Apply for all the deployed models under the endpoint, if you want to specify different thresholds for different deployed model, please use flag --monitoring-config-from-file or call API directly). If only feature name is set, the default threshold value would be 0.3",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--feature-thresholds",
              description:
                "List of feature-threshold value pairs(Apply for all the deployed models under the endpoint, if you want to specify different thresholds for different deployed model, please use flag --monitoring-config-from-file or call API directly). If only feature name is set, the default threshold value would be 0.3",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
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
              name: "--log-ttl",
              description:
                "TTL of BigQuery tables in user projects which stores logs(Day-based unit)",
              args: {
                name: "LOG_TTL",
                description: "Int",
              },
            },
            {
              name: "--monitoring-config-from-file",
              description:
                "Path to the model monitoring objective config file. This file should be a YAML document containing a `ModelDeploymentMonitoringJob`(https://cloud.google.com/vertex-ai/docs/reference/rest/v1beta1/projects.locations.modelDeploymentMonitoringJobs#ModelDeploymentMonitoringJob), but only the ModelDeploymentMonitoringObjectiveConfig needs to be configured",
              args: {
                name: "MONITORING_CONFIG_FROM_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--monitoring-frequency",
              description: "Monitoring frequency, unit is 1 hour",
              args: {
                name: "MONITORING_FREQUENCY",
                description: "Int",
              },
            },
            {
              name: "--no-anomaly-cloud-logging",
              description: "If true, anomaly will be sent to Cloud Logging",
            },
            optNoClearLabels,
            {
              name: "--notification-channels",
              description:
                "Comma-separated notification channel list. e.g. --notification-channels=projects/fake-project/notificationChannels/123,projects/fake-project/notificationChannels/456",
              args: {
                name: "NOTIFICATION_CHANNELS",
                description: "List",
              },
            },
            {
              name: "--prediction-sampling-rate",
              description: "Prediction sampling rate",
              args: {
                name: "PREDICTION_SAMPLING_RATE",
                description: "Float",
              },
            },
            optProject,
            optQuiet,
            optRegion7,
            optRemoveLabels,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MONITORING_JOB",
            description:
              "ID of the monitoring_job or fully qualified identifier for the monitoring_job",
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
      name: "models",
      description: "Manage Vertex AI models",
      subcommands: [
        {
          name: "copy",
          description: "Copy a model",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--destination-model-id",
              description:
                "Copy source_model into a new Model with this ID. The ID will become the final component of the model resource name. This value may be up to 63 characters, and valid characters are `[a-z0-9_-]`. The first character cannot be a number or hyphen",
              args: {
                name: "DESTINATION_MODEL_ID",
                description: "String",
              },
            },
            {
              name: "--destination-parent-model",
              description:
                "Specify this field to copy source_model into this existing Model as a new version. Format: `projects/{project}/locations/{location}/models/{model}`",
              args: {
                name: "DESTINATION_PARENT_MODEL",
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
                "The Cloud KMS resource identifier of the customer managed encryption key used to protect the resource. Has the form: `projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key`. The key needs to be in the same region as the destination region of the model to be copied",
              args: {
                name: "KMS_KEY_NAME",
                description: "String",
              },
            },
            optLogHttp,
            optProject,
            optQuiet,
            optRegion10,
            {
              name: "--source-model",
              description:
                "The resource name of the Model to copy. That Model must be in the same Project. Format: `projects/{project}/locations/{location}/models/{model}`",
              priority: 100,
              args: {
                name: "SOURCE_MODEL",
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
          description: "Delete an existing Vertex AI model",
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
            optRegion6,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MODEL",
            description:
              "ID of the model or fully qualified identifier for the model",
          },
        },
        {
          name: "delete-version",
          description: "Delete an existing Vertex AI model version",
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
            optRegion6,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MODEL_VERSION",
            description:
              "ID of the model or fully qualified identifier for the model",
          },
        },
        {
          name: "describe",
          description:
            "Get detailed model information about the given model id",
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
            optRegion6,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MODEL",
            description:
              "ID of the model or fully qualified identifier for the model",
          },
        },
        {
          name: "list",
          description: "List the models of the given project and region",
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
            optRegion10,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "list-version",
          description: "List the model versions of the given region and model",
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
            optRegion6,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MODEL",
            description:
              "ID of the model or fully qualified identifier for the model",
          },
        },
        {
          name: "upload",
          description: "Upload a new model",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--artifact-uri",
              description:
                "Path to the directory containing the Model artifact and any of its supporting files",
              args: {
                name: "ARTIFACT_URI",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--container-args",
              description:
                "Comma-separated arguments passed to the command run by the container image. If not specified and no `--command` is provided, the container image's default command is used",
              args: {
                name: "ARG",
                description: "List",
              },
            },
            {
              name: "--container-command",
              description:
                "Entrypoint for the container image. If not specified, the container image's default entrypoint is run",
              args: {
                name: "COMMAND",
                description: "List",
              },
            },
            {
              name: "--container-deployment-timeout-seconds",
              description: "Deployment timeout in seconds",
              args: {
                name: "CONTAINER_DEPLOYMENT_TIMEOUT_SECONDS",
                description: "Int",
              },
            },
            {
              name: "--container-env-vars",
              description:
                "List of key-value pairs to set as environment variables",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--container-grpc-ports",
              description:
                "Container ports to receive grpc requests at. Must be a number between 1 and 65535, inclusive",
              args: {
                name: "PORT",
                description: "List",
              },
            },
            {
              name: "--container-health-probe-exec",
              description:
                'Exec specifies the action to take. Used by health probe. An example of this argument would be ["cat", "/tmp/healthy"]',
              args: {
                name: "HEALTH_PROBE_EXEC",
                description: "List",
              },
            },
            {
              name: "--container-health-probe-period-seconds",
              description:
                "How often (in seconds) to perform the health probe. Default to 10 seconds. Minimum value is 1",
              args: {
                name: "CONTAINER_HEALTH_PROBE_PERIOD_SECONDS",
                description: "Int",
              },
            },
            {
              name: "--container-health-probe-timeout-seconds",
              description:
                "Number of seconds after which the health probe times out. Defaults to 1 second. Minimum value is 1",
              args: {
                name: "CONTAINER_HEALTH_PROBE_TIMEOUT_SECONDS",
                description: "Int",
              },
            },
            {
              name: "--container-health-route",
              description:
                "HTTP path to send health checks to inside the container",
              args: {
                name: "CONTAINER_HEALTH_ROUTE",
                description: "String",
              },
            },
            {
              name: "--container-image-uri",
              description:
                "URI of the Model serving container file in the Container Registry (e.g. gcr.io/myproject/server:latest)",
              priority: 100,
              args: {
                name: "CONTAINER_IMAGE_URI",
                description: "String",
              },
            },
            {
              name: "--container-ports",
              description:
                "Container ports to receive http requests at. Must be a number between 1 and 65535, inclusive",
              args: {
                name: "PORT",
                description: "List",
              },
            },
            {
              name: "--container-predict-route",
              description:
                "HTTP path to send prediction requests to inside the container",
              args: {
                name: "CONTAINER_PREDICT_ROUTE",
                description: "String",
              },
            },
            {
              name: "--container-shared-memory-size-mb",
              description:
                "The amount of the VM memory to reserve as the shared memory for the model in megabytes",
              args: {
                name: "CONTAINER_SHARED_MEMORY_SIZE_MB",
                description: "Int",
              },
            },
            {
              name: "--container-startup-probe-exec",
              description:
                'Exec specifies the action to take. Used by startup probe. An example of this argument would be ["cat", "/tmp/healthy"]',
              args: {
                name: "STARTUP_PROBE_EXEC",
                description: "List",
              },
            },
            {
              name: "--container-startup-probe-period-seconds",
              description:
                "How often (in seconds) to perform the startup probe. Default to 10 seconds. Minimum value is 1",
              args: {
                name: "CONTAINER_STARTUP_PROBE_PERIOD_SECONDS",
                description: "Int",
              },
            },
            {
              name: "--container-startup-probe-timeout-seconds",
              description:
                "Number of seconds after which the startup probe times out. Defaults to 1 second. Minimum value is 1",
              args: {
                name: "CONTAINER_STARTUP_PROBE_TIMEOUT_SECONDS",
                description: "Int",
              },
            },
            {
              name: "--description",
              description: "Description of the model",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Display name of the model",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--explanation-metadata-file",
              description:
                "Path to a local JSON file that contains the metadata describing the Model's input and output for explanation",
              args: {
                name: "EXPLANATION_METADATA_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--explanation-method",
              description:
                "Method used for explanation. Accepted values are `integrated-gradients`, `xrai` and `sampled-shapley`",
              args: {
                name: "EXPLANATION_METHOD",
                description: "String",
              },
            },
            {
              name: "--explanation-path-count",
              description:
                "Number of feature permutations to consider when approximating the Shapley values for explanation",
              args: {
                name: "EXPLANATION_PATH_COUNT",
                description: "Int",
              },
            },
            {
              name: "--explanation-step-count",
              description:
                "Number of steps to approximate the path integral for explanation",
              args: {
                name: "EXPLANATION_STEP_COUNT",
                description: "Int",
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
                "Labels with user-defined metadata to organize your Models",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optLogHttp,
            {
              name: "--model-id",
              description:
                "ID to use for the uploaded Model, which will become the final component of the model resource name",
              args: {
                name: "MODEL_ID",
                description: "String",
              },
            },
            {
              name: "--parent-model",
              description:
                "Resource name of the model into which to upload the version. Only specify this field when uploading a new version",
              args: {
                name: "PARENT_MODEL",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optRegion10,
            {
              name: "--smooth-grad-noise-sigma",
              description:
                "Single float value used to add noise to all the features for explanation. Only applicable to explanation method `integrated-gradients` or `xrai`",
              args: {
                name: "SMOOTH_GRAD_NOISE_SIGMA",
                description: "Float",
              },
            },
            {
              name: "--smooth-grad-noise-sigma-by-feature",
              description:
                "Noise sigma by features for explanation. Noise sigma represents the standard deviation of the gaussian kernel that will be used to add noise to interpolated inputs prior to computing gradients. Only applicable to explanation method `integrated-gradients` or `xrai`",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--smooth-grad-noisy-sample-count",
              description:
                "Number of gradient samples used for approximation at explanation. Only applicable to explanation method `integrated-gradients` or `xrai`",
              args: {
                name: "SMOOTH_GRAD_NOISY_SAMPLE_COUNT",
                description: "Int",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--version-aliases",
              description:
                "Aliases used to reference a model version instead of auto-generated version ID. The aliases mentioned in the flag will replace the aliases set in the model",
              args: {
                name: "VERSION_ALIASES",
                description: "List",
              },
            },
            {
              name: "--version-description",
              description: "Description of the model version",
              args: {
                name: "VERSION_DESCRIPTION",
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
      name: "operations",
      description: "Manage Vertex AI operations",
      subcommands: [
        {
          name: "describe",
          description:
            "Gets detailed index information about the given operation id",
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
              name: "--index",
              description:
                "ID of the index. Applies to operations belongs to an index resource. Do not set otherwise",
              args: {
                name: "INDEX",
                description: "String",
              },
            },
            {
              name: "--index-endpoint",
              description:
                "ID of the index endpoint. Applies to operations belongs to an index endpoint resource. Do not set otherwise",
              args: {
                name: "INDEX_ENDPOINT",
                description: "String",
              },
            },
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--region",
              description: "Cloud region for the operation",
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
      name: "persistent-resources",
      description: "Create and manage Vertex AI persistent resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new persistent resource",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--config",
              description:
                "Path to the Persistent Resource configuration file. This file should be a YAML document containing a list of `ResourcePool` If an option is specified both in the configuration file **and** via command-line arguments, the command-line arguments override the configuration file. Note that keys with underscore are invalid",
              args: {
                name: "CONFIG",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--display-name",
              description: "Display name of the Persistent Resource",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--enable-custom-service-account",
              description:
                "Whether or not to use a custom user-managed service account with this Persistent Resource",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKmsKey,
            optKmsKeyring,
            optKmsLocation,
            optKmsProject,
            optLabels,
            optLogHttp,
            optNetwork,
            {
              name: "--no-enable-custom-service-account",
              description:
                "Whether or not to use a custom user-managed service account with this Persistent Resource",
              hidden: true,
            },
            {
              name: "--persistent-resource-id",
              description: "User-specified ID of the Persistent Resource",
              priority: 100,
              args: {
                name: "PERSISTENT_RESOURCE_ID",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optRegion10,
            {
              name: "--resource-pool-spec",
              description:
                "Defines a resource pool to be created in the Persistent Resource. You can include multiple resource pool specs in order to create a Persistent Resource with multiple resource pools",
              args: {
                name: "RESOURCE_POOL_SPEC",
                description: "Dict",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "delete",
          description: "Delete an active Persistent Resource",
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
            name: "PERSISTENT_RESOURCE",
            description:
              "ID of the persistent resource or fully qualified identifier for the persistent resource",
          },
        },
        {
          name: "describe",
          description:
            "Get detailed information about a PersistentResource with a given id",
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
            name: "PERSISTENT_RESOURCE",
            description:
              "ID of the persistent resource or fully qualified identifier for the persistent resource",
          },
        },
        {
          name: "list",
          description: "Lists the active persistent resources",
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
            optRegion10,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "reboot",
          description: "Reboot a Persistent Resource",
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
            name: "PERSISTENT_RESOURCE",
            description:
              "ID of the persistent resource or fully qualified identifier for the persistent resource",
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
      name: "tensorboards",
      description: "Manage Vertex AI Tensorboards",
      subcommands: [
        {
          name: "create",
          description: "Create a new Vertex AI Tensorboard",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the tensorboard",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Display name of the tensorboard",
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
            optKmsKey,
            optKmsKeyring,
            optKmsLocation,
            optKmsProject,
            optLabels,
            optLogHttp,
            optProject,
            optQuiet,
            optRegion10,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "delete",
          description: "Delete an existing Vertex AI Tensorboard",
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
            optRegion9,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TENSORBOARD",
            description:
              "ID of the tensorboard or fully qualified identifier for the tensorboard",
          },
        },
        {
          name: "describe",
          description:
            "Gets detailed Tensorboard information about the given Tensorboard id",
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
            optRegion9,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TENSORBOARD",
            description:
              "ID of the tensorboard or fully qualified identifier for the tensorboard",
          },
        },
        {
          name: "list",
          description: "Lists the Tensorboards of the given project and region",
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
            optRegion10,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Update an existing Vertex AI Tensorboard",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optClearLabels,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the tensorboard",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Display name of the tensorboard",
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
            optLogHttp,
            optNoClearLabels,
            optProject,
            optQuiet,
            optRegion9,
            optRemoveLabels,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TENSORBOARD",
            description:
              "ID of the tensorboard or fully qualified identifier for the tensorboard",
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
