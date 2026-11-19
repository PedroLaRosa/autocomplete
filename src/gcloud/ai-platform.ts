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

const optModel: Fig.Option = {
  name: "--model",
  description: "Name of the model",
  priority: 100,
  args: {
    name: "MODEL",
    description: "String",
  },
};

const optNoClearLabels: Fig.Option = {
  name: "--no-clear-labels",
  description:
    "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
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
  description:
    "Google Cloud region of the regional endpoint to use for this command. If unspecified, the command uses the global endpoint of the AI Platform Training and Prediction API",
  args: {
    name: "REGION",
    description: "String",
    suggestions: [
      "asia-east1",
      "asia-northeast1",
      "asia-southeast1",
      "australia-southeast1",
      "europe-west1",
      "europe-west2",
      "europe-west3",
      "europe-west4",
      "northamerica-northeast1",
      "us-central1",
      "us-east1",
      "us-east4",
      "us-west1",
    ],
  },
};

const optRegion2: Fig.Option = {
  name: "--region",
  description:
    "Google Cloud region of the regional endpoint to use for this command. For the global endpoint, the region needs to be specified as `global`",
  args: {
    name: "REGION",
    description: "String",
    suggestions: [
      "global",
      "asia-east1",
      "asia-northeast1",
      "asia-southeast1",
      "australia-southeast1",
      "europe-west1",
      "europe-west2",
      "europe-west3",
      "europe-west4",
      "northamerica-northeast1",
      "us-central1",
      "us-east1",
      "us-east4",
      "us-west1",
    ],
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

const optRuntimeVersion: Fig.Option = {
  name: "--runtime-version",
  description:
    "AI Platform runtime version for this job. Must be specified unless --master-image-uri is specified instead. It is defined in documentation along with the list of supported versions: https://cloud.google.com/ai-platform/prediction/docs/runtime-version-list",
  args: {
    name: "RUNTIME_VERSION",
    description: "String",
  },
};

const optSignatureName: Fig.Option = {
  name: "--signature-name",
  description:
    'Name of the signature defined in the SavedModel to use for this job. Defaults to DEFAULT_SERVING_SIGNATURE_DEF_KEY in https://www.tensorflow.org/api_docs/python/tf/compat/v1/saved_model/signature_constants, which is "serving_default". Only applies to TensorFlow models',
  args: {
    name: "SIGNATURE_NAME",
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
  name: "ai-platform",
  description: "Manage AI Platform jobs and models",
  subcommands: [
    {
      name: "jobs",
      description: "AI Platform Jobs commands",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a running AI Platform job",
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
            name: "JOB",
            description: "Name of the job",
          },
        },
        {
          name: "describe",
          description: "Describe an AI Platform job",
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
              name: "--no-summarize",
              description:
                "Summarize job output in a set of human readable tables instead of rendering the entire resource as json or yaml. The tables currently rendered are:",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--summarize",
              description:
                "Summarize job output in a set of human readable tables instead of rendering the entire resource as json or yaml. The tables currently rendered are:",
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "JOB",
            description: "Name of the job",
          },
        },
        {
          name: "list",
          description: "List existing AI Platform jobs",
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
        {
          name: "stream-logs",
          description: "Show logs from a running AI Platform job",
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
                "Number of seconds to wait between efforts to fetch the latest log messages. Overrides the default *ml_engine/polling_interval* property value for this command invocation",
              args: {
                name: "POLLING_INTERVAL",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
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
            name: "JOB",
            description: "Name of the job",
          },
        },
        {
          name: "submit",
          description: "AI Platform Jobs submit commands",
          subcommands: [
            {
              name: "prediction",
              description: "Start an AI Platform batch prediction job",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--batch-size",
                  description:
                    "The number of records per batch. The service will buffer batch_size number of records in memory before invoking TensorFlow. Defaults to 64 if not specified",
                  args: {
                    name: "BATCH_SIZE",
                    description: "Int",
                  },
                },
                optBillingProject,
                optConfiguration,
                {
                  name: "--data-format",
                  description:
                    "Data format of the input files. _DATA_FORMAT_ must be one of:",
                  priority: 100,
                  args: {
                    name: "DATA_FORMAT",
                    suggestions: ["text", "tf-record", "tf-record-gzip"],
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
                  name: "--input-paths",
                  description:
                    "Cloud Storage paths to the instances to run prediction on",
                  priority: 100,
                  args: {
                    name: "INPUT_PATH",
                    description: "List",
                  },
                },
                optLabels,
                optLogHttp,
                {
                  name: "--max-worker-count",
                  description:
                    "The maximum number of workers to be used for parallel processing. Defaults to 10 if not specified",
                  args: {
                    name: "MAX_WORKER_COUNT",
                    description: "Int",
                  },
                },
                {
                  name: "--model",
                  description: "Name of the model to use for prediction",
                  args: {
                    name: "MODEL",
                    description: "String",
                  },
                },
                {
                  name: "--model-dir",
                  description:
                    "Cloud Storage location where the model files are located",
                  args: {
                    name: "MODEL_DIR",
                    description: "String",
                  },
                },
                {
                  name: "--output-path",
                  description:
                    "Cloud Storage path to which to save the output. Example: gs://my-bucket/output",
                  priority: 100,
                  args: {
                    name: "OUTPUT_PATH",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                {
                  name: "--region",
                  description: "The Compute Engine region to run the job in",
                  priority: 100,
                  args: {
                    name: "REGION",
                    description: "String",
                  },
                },
                optRuntimeVersion,
                optSignatureName,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "JOB",
                description: "Name of the batch prediction job",
              },
            },
            {
              name: "training",
              description: "Submit an AI Platform training job",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--async",
                  description:
                    "(DEPRECATED) Display information about the operation in progress without waiting for the operation to complete. Enabled by default and can be omitted; use `--stream-logs` to run synchronously",
                  deprecated: true,
                },
                optBillingProject,
                {
                  name: "--config",
                  description:
                    "Path to the job configuration file. This file should be a YAML document (JSON also accepted) containing a Job resource as defined in the API (all fields are optional): https://cloud.google.com/ml/reference/rest/v1/projects.jobs",
                  args: {
                    name: "CONFIG",
                    description: "String",
                  },
                },
                optConfiguration,
                {
                  name: "--enable-web-access",
                  description:
                    "Whether you want AI Platform Training to enable [interactive shell access] (https://cloud.google.com/ai-platform/training/docs/monitor-debug-interactive-shell) to training containers. If set to `true`, you can access interactive shells at the URIs given by TrainingOutput.web_access_uris or HyperparameterOutput.web_access_uris (within TrainingOutput.trials)",
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
                  name: "--job-dir",
                  description:
                    "Cloud Storage path in which to store training outputs and other data needed for training",
                  args: {
                    name: "JOB_DIR",
                  },
                },
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
                optLabels,
                optLogHttp,
                {
                  name: "--master-accelerator",
                  description:
                    "Hardware accelerator config for the master worker. Must specify both the accelerator type (TYPE) for each server and the number of accelerators to attach to each server (COUNT)",
                  args: {
                    name: "MASTER_ACCELERATOR",
                    description: "Dict",
                  },
                },
                {
                  name: "--master-image-uri",
                  description:
                    "Docker image to run on each master worker. This image must be in Container Registry. Only one of `--master-image-uri` and `--runtime-version` must be specified",
                  args: {
                    name: "MASTER_IMAGE_URI",
                    description: "String",
                  },
                },
                {
                  name: "--master-machine-type",
                  description:
                    "Specifies the type of virtual machine to use for training job's master worker",
                  args: {
                    name: "MASTER_MACHINE_TYPE",
                    description: "String",
                  },
                },
                {
                  name: "--module-name",
                  description: "Name of the module to run",
                  args: {
                    name: "MODULE_NAME",
                    description: "String",
                  },
                },
                {
                  name: "--no-async",
                  description:
                    "(DEPRECATED) Display information about the operation in progress without waiting for the operation to complete. Enabled by default and can be omitted; use `--stream-logs` to run synchronously",
                  hidden: true,
                  deprecated: true,
                },
                {
                  name: "--no-enable-web-access",
                  description:
                    "Whether you want AI Platform Training to enable [interactive shell access] (https://cloud.google.com/ai-platform/training/docs/monitor-debug-interactive-shell) to training containers. If set to `true`, you can access interactive shells at the URIs given by TrainingOutput.web_access_uris or HyperparameterOutput.web_access_uris (within TrainingOutput.trials)",
                  hidden: true,
                },
                {
                  name: "--no-stream-logs",
                  description:
                    "Block until job completion and stream the logs while the job runs",
                  hidden: true,
                },
                {
                  name: "--package-path",
                  description:
                    "Path to a Python package to build. This should point to a *local* directory containing the Python source for the job. It will be built using *setuptools* (which must be installed) using its *parent* directory as context. If the parent directory contains a `setup.py` file, the build will use that; otherwise, it will use a simple built-in one",
                  args: {
                    name: "PACKAGE_PATH",
                    description: "String",
                  },
                },
                {
                  name: "--packages",
                  description:
                    "Path to Python archives used for training. These can be local paths (absolute or relative), in which case they will be uploaded to the Cloud Storage bucket given by `--staging-bucket`, or Cloud Storage URLs ('gs://bucket-name/path/to/package.tar.gz')",
                  args: {
                    name: "PACKAGE",
                    description: "List",
                  },
                },
                {
                  name: "--parameter-server-accelerator",
                  description:
                    "Hardware accelerator config for the parameter servers. Must specify both the accelerator type (TYPE) for each server and the number of accelerators to attach to each server (COUNT)",
                  args: {
                    name: "PARAMETER_SERVER_ACCELERATOR",
                    description: "Dict",
                  },
                },
                {
                  name: "--parameter-server-count",
                  description:
                    "Number of parameter servers to use for the training job",
                  priority: 100,
                  args: {
                    name: "PARAMETER_SERVER_COUNT",
                  },
                },
                {
                  name: "--parameter-server-image-uri",
                  description:
                    "Docker image to run on each parameter server. This image must be in Container Registry. If not specified, the value of `--master-image-uri` is used",
                  args: {
                    name: "PARAMETER_SERVER_IMAGE_URI",
                    description: "String",
                  },
                },
                {
                  name: "--parameter-server-machine-type",
                  description:
                    "Type of virtual machine to use for training job's parameter servers. This flag must be specified if any of the other arguments in this group are specified machine to use for training job's parameter servers",
                  priority: 100,
                  args: {
                    name: "PARAMETER_SERVER_MACHINE_TYPE",
                    description: "String",
                  },
                },
                optProject,
                {
                  name: "--python-version",
                  description:
                    "Version of Python used during training. Choices are 3.7, 3.5, and 2.7. However, this value must be compatible with the chosen runtime version for the job",
                  args: {
                    name: "PYTHON_VERSION",
                    description: "String",
                  },
                },
                optQuiet,
                {
                  name: "--region",
                  description:
                    "Region of the machine learning training job to submit. If not specified, you might be prompted to select a region (interactive mode only)",
                  args: {
                    name: "REGION",
                    description: "String",
                  },
                },
                optRuntimeVersion,
                {
                  name: "--scale-tier",
                  description:
                    "Specify the machine types, the number of replicas for workers, and parameter servers. _SCALE_TIER_ must be one of:",
                  args: {
                    name: "SCALE_TIER",
                    suggestions: [
                      "basic",
                      "basic-gpu",
                      "basic-tpu",
                      "custom",
                      "premium-1",
                      "standard-1",
                    ],
                  },
                },
                {
                  name: "--service-account",
                  description:
                    "The email address of a service account to use when running the training appplication. You must have the `iam.serviceAccounts.actAs` permission for the specified service account. In addition, the AI Platform Training Google-managed service account must have the `roles/iam.serviceAccountAdmin` role for the specified service account. [Learn more about configuring a service account.](https://cloud.google.com/ai-platform/training/docs/custom-service-account) If not specified, the AI Platform Training Google-managed service account is used by default",
                  args: {
                    name: "SERVICE_ACCOUNT",
                  },
                },
                {
                  name: "--staging-bucket",
                  description: "Bucket in which to stage training archives",
                  args: {
                    name: "STAGING_BUCKET",
                  },
                },
                {
                  name: "--stream-logs",
                  description:
                    "Block until job completion and stream the logs while the job runs",
                },
                optTraceToken,
                {
                  name: "--use-chief-in-tf-config",
                  description:
                    'Use "chief" role in the cluster instead of "master". This is required for TensorFlow 2.0 and newer versions. Unlike "master" node, "chief" node does not run evaluation',
                  args: {
                    name: "USE_CHIEF_IN_TF_CONFIG",
                  },
                },
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--worker-accelerator",
                  description:
                    "Hardware accelerator config for the worker nodes. Must specify both the accelerator type (TYPE) for each server and the number of accelerators to attach to each server (COUNT)",
                  args: {
                    name: "WORKER_ACCELERATOR",
                    description: "Dict",
                  },
                },
                {
                  name: "--worker-count",
                  description:
                    "Number of worker nodes to use for the training job",
                  priority: 100,
                  args: {
                    name: "WORKER_COUNT",
                  },
                },
                {
                  name: "--worker-image-uri",
                  description:
                    "Docker image to run on each worker node. This image must be in Container Registry. If not specified, the value of `--master-image-uri` is used",
                  args: {
                    name: "WORKER_IMAGE_URI",
                    description: "String",
                  },
                },
                {
                  name: "--worker-machine-type",
                  description:
                    "Type of virtual machine to use for training job's worker nodes",
                  priority: 100,
                  args: {
                    name: "WORKER_MACHINE_TYPE",
                    description: "String",
                  },
                },
              ],
              args: [
                {
                  name: "JOB",
                  description: "Name of the job",
                },
                {
                  name: "USER_ARGS",
                  description:
                    "Additional user arguments to be forwarded to user code",
                  isVariadic: true,
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
          name: "update",
          description: "Update an AI Platform job",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optClearLabels,
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
            optNoClearLabels,
            optProject,
            optQuiet,
            optRemoveLabels,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "JOB",
            description: "Name of the job",
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
      name: "local",
      description: "AI Platform Local commands",
      subcommands: [
        {
          name: "predict",
          description: "Run prediction locally",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--framework",
              description:
                "ML framework used to train this version of the model. If not specified, defaults to 'tensorflow'. _FRAMEWORK_ must be one of: *scikit-learn*, *tensorflow*, *xgboost*",
              args: {
                name: "FRAMEWORK",
                suggestions: ["scikit-learn", "tensorflow", "xgboost"],
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--json-instances",
              description:
                "Path to a local file from which instances are read. Instances are in JSON format; newline delimited",
              args: {
                name: "JSON_INSTANCES",
                description: "String",
              },
            },
            {
              name: "--json-request",
              description:
                "Path to a local file containing the body of JSON request",
              args: {
                name: "JSON_REQUEST",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--model-dir",
              description: "Path to the model",
              priority: 100,
              args: {
                name: "MODEL_DIR",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optSignatureName,
            {
              name: "--text-instances",
              description:
                "Path to a local file from which instances are read. Instances are in UTF-8 encoded text format; newline delimited",
              args: {
                name: "TEXT_INSTANCES",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "train",
          description: "Run an AI Platform training job locally",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--distributed",
              description:
                "Runs the provided code in distributed mode by providing cluster configurations as environment variables to subprocesses",
            },
            {
              name: "--evaluator-count",
              description:
                "Number of evaluators with which to run. Ignored if --distributed is not specified. Default: 0",
              args: {
                name: "EVALUATOR_COUNT",
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
              name: "--job-dir",
              description:
                "Cloud Storage path or local_directory in which to store training outputs and other data needed for training",
              args: {
                name: "JOB_DIR",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--module-name",
              description: "Name of the module to run",
              priority: 100,
              args: {
                name: "MODULE_NAME",
                description: "String",
              },
            },
            {
              name: "--no-distributed",
              description:
                "Runs the provided code in distributed mode by providing cluster configurations as environment variables to subprocesses",
              hidden: true,
            },
            {
              name: "--package-path",
              description:
                "Path to a Python package to build. This should point to a *local* directory containing the Python source for the job. It will be built using *setuptools* (which must be installed) using its *parent* directory as context. If the parent directory contains a `setup.py` file, the build will use that; otherwise, it will use a simple built-in one",
              args: {
                name: "PACKAGE_PATH",
                description: "String",
              },
            },
            {
              name: "--parameter-server-count",
              description:
                "Number of parameter servers with which to run. Ignored if --distributed is not specified. Default: 2",
              args: {
                name: "PARAMETER_SERVER_COUNT",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--start-port",
              description:
                "Start of the range of ports reserved by the local cluster. This command will use a contiguous block of ports equal to parameter-server-count + worker-count + 1",
              args: {
                name: "START_PORT",
                description: "Int",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--worker-count",
              description:
                "Number of workers with which to run. Ignored if --distributed is not specified. Default: 2",
              args: {
                name: "WORKER_COUNT",
                description: "Int",
              },
            },
          ],
          args: {
            name: "USER_ARGS",
            description:
              "Additional user arguments to be forwarded to user code. Any relative paths will be relative to the *parent* directory of `--package-path`",
            isVariadic: true,
            isOptional: true,
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
      description: "AI Platform Models commands",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding for a model",
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
            optRegion2,
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
            name: "MODEL",
            description: "Name of the model",
          },
        },
        {
          name: "create",
          description: "Create a new AI Platform model",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the model",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--enable-logging",
              description:
                "If set, enables StackDriver Logging for online prediction. These logs are like standard server access logs, containing information such as timestamps and latency for each request",
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
            optLogHttp,
            {
              name: "--no-enable-logging",
              description:
                "If set, enables StackDriver Logging for online prediction. These logs are like standard server access logs, containing information such as timestamps and latency for each request",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--region",
              description:
                "Google Cloud region of the regional endpoint to use for this command",
              args: {
                name: "REGION",
                description: "String",
                suggestions: [
                  "global",
                  "asia-east1",
                  "asia-northeast1",
                  "asia-southeast1",
                  "australia-southeast1",
                  "europe-west1",
                  "europe-west2",
                  "europe-west3",
                  "europe-west4",
                  "northamerica-northeast1",
                  "us-central1",
                  "us-east1",
                  "us-east4",
                  "us-west1",
                ],
              },
            },
            {
              name: "--regions",
              description:
                "The Google Cloud region where the model will be deployed (currently only a single region is supported) against the global endpoint",
              args: {
                name: "REGION",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MODEL",
            description: "Name of the model",
          },
        },
        {
          name: "delete",
          description: "Delete an existing AI Platform model",
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
            name: "MODEL",
            description: "Name of the model",
          },
        },
        {
          name: "describe",
          description: "Describe an existing AI Platform model",
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
            name: "MODEL",
            description: "Name of the model",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a model",
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
            optRegion2,
            optSortBy,
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
          description: "List existing AI Platform models",
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
            optRegion2,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding for a model",
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
            optRegion2,
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
            name: "MODEL",
            description:
              "ID of the model or fully qualified identifier for the model",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a model",
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
          args: [
            {
              name: "MODEL",
              description:
                "ID of the model or fully qualified identifier for the model",
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
          description: "Update an existing AI Platform model",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optClearLabels,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the model",
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
            optNoClearLabels,
            optProject,
            optQuiet,
            optRegion2,
            optRemoveLabels,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MODEL",
            description: "Name of the model",
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
      description: "Manage AI Platform operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel an AI Platform operation",
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
            name: "OPERATION",
            description: "Name of the operation",
          },
        },
        {
          name: "describe",
          description: "Describe an AI Platform operation",
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
            name: "OPERATION",
            description: "Name of the operation",
          },
        },
        {
          name: "list",
          description: "List existing AI Platform jobs",
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
            optRegion,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "wait",
          description: "Wait for an AI Platform operation to complete",
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
            name: "OPERATION",
            description: "Name of the operation",
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
      name: "predict",
      description: "Run AI Platform online prediction",
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
          name: "--json-instances",
          description:
            "Path to a local file from which instances are read. Instances are in JSON format; newline delimited",
          args: {
            name: "JSON_INSTANCES",
            description: "String",
          },
        },
        {
          name: "--json-request",
          description:
            "Path to a local file containing the body of JSON request",
          args: {
            name: "JSON_REQUEST",
            description: "String",
          },
        },
        optLogHttp,
        optModel,
        optProject,
        optQuiet,
        optRegion2,
        optSignatureName,
        {
          name: "--text-instances",
          description:
            "Path to a local file from which instances are read. Instances are in UTF-8 encoded text format; newline delimited",
          args: {
            name: "TEXT_INSTANCES",
            description: "String",
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "versions",
      description: "AI Platform Versions commands",
      subcommands: [
        {
          name: "create",
          description: "Create a new AI Platform version",
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
              name: "--async",
              description:
                "Return immediately, without waiting for the operation in progress to complete",
            },
            optBillingProject,
            {
              name: "--config",
              description:
                "Path to a YAML configuration file containing configuration parameters for the [Version](https://cloud.google.com/ai-platform/prediction/docs/reference/rest/v1/projects.models.versions) to create",
              args: {
                name: "CONFIG",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--description",
              description: "Description of the version",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--framework",
              description:
                "ML framework used to train this version of the model. If not specified, defaults to 'tensorflow'. _FRAMEWORK_ must be one of: *scikit-learn*, *tensorflow*, *xgboost*",
              args: {
                name: "FRAMEWORK",
                suggestions: ["scikit-learn", "tensorflow", "xgboost"],
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
              name: "--machine-type",
              description:
                "Type of machine on which to serve the model. Currently only applies to online prediction. For available machine types, see https://cloud.google.com/ai-platform/prediction/docs/machine-types-online-prediction#available_machine_types",
              args: {
                name: "MACHINE_TYPE",
                description: "String",
              },
            },
            {
              name: "--max-nodes",
              description:
                "The maximum number of nodes to scale this model under load",
              args: {
                name: "MAX_NODES",
                description: "Int",
              },
            },
            {
              name: "--metric-targets",
              description:
                "List of key-value pairs to set as metrics' target for autoscaling. Autoscaling could be based on CPU usage or GPU duty cycle, valid key could be cpu-usage or gpu-duty-cycle",
              args: {
                name: "METRIC-NAME=TARGET",
                description: "Dict",
              },
            },
            {
              name: "--min-nodes",
              description:
                "The minimum number of nodes to scale this model under load",
              args: {
                name: "MIN_NODES",
                description: "Int",
              },
            },
            optModel,
            {
              name: "--no-async",
              description:
                "Return immediately, without waiting for the operation in progress to complete",
              hidden: true,
            },
            {
              name: "--origin",
              description:
                'Location of ```model/``` "directory" (see https://cloud.google.com/ai-platform/prediction/docs/deploying-models#upload-model)',
              args: {
                name: "ORIGIN",
                description: "String",
              },
            },
            optProject,
            {
              name: "--python-version",
              description:
                "Version of Python used when creating the version. Choices are 3.7, 3.5, and 2.7. However, this value must be compatible with the chosen runtime version for the job",
              args: {
                name: "PYTHON_VERSION",
                description: "String",
              },
            },
            optQuiet,
            optRegion2,
            optRuntimeVersion,
            {
              name: "--staging-bucket",
              description: "Bucket in which to stage training archives",
              args: {
                name: "STAGING_BUCKET",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VERSION",
            description: "Name of the model version",
          },
        },
        {
          name: "delete",
          description: "Delete an existing AI Platform version",
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
            optModel,
            optProject,
            optQuiet,
            optRegion2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VERSION",
            description: "Name of the model version",
          },
        },
        {
          name: "describe",
          description: "Describe an existing AI Platform version",
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
            optModel,
            optProject,
            optQuiet,
            optRegion2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VERSION",
            description: "Name of the model version",
          },
        },
        {
          name: "list",
          description: "List existing AI Platform versions",
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
            optModel,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optRegion2,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "set-default",
          description:
            "Sets an existing AI Platform version as the default for its model",
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
            optModel,
            optProject,
            optQuiet,
            optRegion2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VERSION",
            description: "Name of the model version",
          },
        },
        {
          name: "update",
          description: "Update an AI Platform version",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optClearLabels,
            {
              name: "--config",
              description:
                "Path to a YAML configuration file containing configuration parameters for the [version](https://cloud.google.com/ml/reference/rest/v1/projects.models.versions) to create",
              args: {
                name: "YAML_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optConfiguration,
            {
              name: "--description",
              description: "Description of the version",
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
            {
              name: "--model",
              description: "Model for the version",
              args: {
                name: "MODEL",
                description: "String",
              },
            },
            optNoClearLabels,
            optProject,
            optQuiet,
            optRegion2,
            optRemoveLabels,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VERSION",
            description:
              "ID of the version or fully qualified identifier for the version",
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
