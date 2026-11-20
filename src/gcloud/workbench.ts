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
    "Google Cloud location of this environment https://cloud.google.com/compute/docs/regions-zones/#locations",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation2: Fig.Option = {
  name: "--location",
  description: "The location of the workbench instance",
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

const optNetwork: Fig.Option = {
  name: "--network",
  description:
    "ID of the network or fully qualified identifier for the network",
  priority: 100,
  args: {
    name: "NETWORK",
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

const optRegion: Fig.Option = {
  name: "--region",
  description: "Cloud region for the schedule",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion2: Fig.Option = {
  name: "--region",
  description: "ID of the region or fully qualified identifier for the region",
  priority: 100,
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
  name: "workbench",
  description: "Workbench Command Group",
  subcommands: [
    {
      name: "executions",
      description: "Workbench executions command group",
      subcommands: [
        {
          name: "create",
          description: "Create a Workbench execution",
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
              name: "--direct-content",
              description:
                "The direct notebook content as IPYNB. This can be a local filepath to an .ipynb file or can be set to `-` to read content from stdin",
              args: {
                name: "DIRECT_CONTENT",
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
              description: "The display name of the execution",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--enable-internet-access",
              description:
                "Enable public internet access for the runtime. Enabled by default, use *--no-enable-internet-access* to disable",
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
            {
              name: "--kernel-name",
              description: "The kernel name to use for the execution",
              args: {
                name: "KERNEL_NAME",
                description: "String",
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
            optNetwork,
            optNoAsync,
            {
              name: "--no-enable-internet-access",
              description: "Enable public internet access for the runtime",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion2,
            {
              name: "--service-account",
              description: "The service account to run the execution as",
              priority: 100,
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
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
          description: "List your notebook execution jobs",
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
      name: "instances",
      description: "Workbench Instances command group",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Adds IAM policy binding for a workbench instance",
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "check-instance-upgradability",
          description: "Checks if a workbench instance is upgradeable",
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "create",
          description: "Creates a workbench instance",
          options: [
            {
              name: "--accelerator-core-count",
              description: "Count of cores of this accelerator",
              args: {
                name: "ACCELERATOR_CORE_COUNT",
                description: "Int",
              },
            },
            {
              name: "--accelerator-type",
              description:
                "Type of this accelerator. _ACCELERATOR_TYPE_ must be one of: *NVIDIA_TESLA_K80*, *NVIDIA_TESLA_P100*, *NVIDIA_TESLA_V100*, *NVIDIA_TESLA_P4*, *NVIDIA_TESLA_T4*, *NVIDIA_TESLA_A100*, *NVIDIA_A100_80GB*, *NVIDIA_TESLA_T4_VWS*, *NVIDIA_TESLA_P100_VWS*, *NVIDIA_TESLA_P4_VWS*, *NVIDIA_L4*, *NVIDIA_H100_80GB*, *NVIDIA_H100_MEGA_80GB*, *NVIDIA_H200_141GB*, *NVIDIA_B200*",
              args: {
                name: "ACCELERATOR_TYPE",
                description: "String",
                suggestions: [
                  "NVIDIA_TESLA_K80",
                  "NVIDIA_TESLA_P100",
                  "NVIDIA_TESLA_V100",
                  "NVIDIA_TESLA_P4",
                  "NVIDIA_TESLA_T4",
                  "NVIDIA_TESLA_A100",
                  "NVIDIA_A100_80GB",
                  "NVIDIA_TESLA_T4_VWS",
                  "NVIDIA_TESLA_P100_VWS",
                  "NVIDIA_TESLA_P4_VWS",
                  "NVIDIA_L4",
                  "NVIDIA_H100_80GB",
                  "NVIDIA_H100_MEGA_80GB",
                  "NVIDIA_H200_141GB",
                  "NVIDIA_B200",
                ],
              },
            },
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--boot-disk-encryption",
              description:
                "Disk encryption method used on the boot disk, defaults to GMEK. _BOOT_DISK_ENCRYPTION_ must be one of: *GMEK*, *CMEK*",
              args: {
                name: "BOOT_DISK_ENCRYPTION",
                description: "String",
                suggestions: ["GMEK", "CMEK"],
              },
            },
            {
              name: "--boot-disk-encryption-key-keyring",
              description: "The KMS keyring of the key",
              args: {
                name: "BOOT_DISK_ENCRYPTION_KEY_KEYRING",
                description: "String",
              },
            },
            {
              name: "--boot-disk-encryption-key-location",
              description: "The Google Cloud location for the key",
              args: {
                name: "BOOT_DISK_ENCRYPTION_KEY_LOCATION",
                description: "String",
              },
            },
            {
              name: "--boot-disk-encryption-key-project",
              description: "The Google Cloud project for the key",
              args: {
                name: "BOOT_DISK_ENCRYPTION_KEY_PROJECT",
                description: "String",
              },
            },
            {
              name: "--boot-disk-kms-key",
              description:
                "ID of the key or fully qualified identifier for the key",
              priority: 100,
              args: {
                name: "BOOT_DISK_KMS_KEY",
                description: "String",
              },
            },
            {
              name: "--boot-disk-size",
              description:
                "Size of boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). The minimum recommended value is 100 GB. If not specified, this defaults to 100",
              args: {
                name: "BOOT_DISK_SIZE",
                description: "Int",
              },
            },
            {
              name: "--boot-disk-type",
              description:
                "Type of boot disk attached to this instance. Defaults to standard persistent disk (`PD_STANDARD`) on machine types that support Persistent Disk, and to `HYPERDISK_BALANCED` on Hyperdisk-only machine series (e.g. N4, C4, C4A, M4). _BOOT_DISK_TYPE_ must be one of: *PD_STANDARD*, *PD_SSD*, *PD_BALANCED*, *PD_EXTREME*, *HYPERDISK_BALANCED*, *HYPERDISK_BALANCED_HIGH_AVAILABILITY*, *HYPERDISK_ML*",
              args: {
                name: "BOOT_DISK_TYPE",
                description: "String",
                suggestions: [
                  "PD_STANDARD",
                  "PD_SSD",
                  "PD_BALANCED",
                  "PD_EXTREME",
                  "HYPERDISK_BALANCED",
                  "HYPERDISK_BALANCED_HIGH_AVAILABILITY",
                  "HYPERDISK_ML",
                ],
              },
            },
            {
              name: "--confidential-compute-type",
              description:
                "String. VM instance with CC (Confidential Compute) of type. Supported values: `SEV`",
              args: {
                name: "CONFIDENTIAL_COMPUTE_TYPE",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--container-repository",
              description:
                "The path to the container image repository. For example: gcr.io/`{project_id}`/`{image_name}`",
              priority: 100,
              args: {
                name: "CONTAINER_REPOSITORY",
                description: "String",
              },
            },
            {
              name: "--container-tag",
              description:
                "The tag of the container image. If not specified, this defaults to the latest tag",
              args: {
                name: "CONTAINER_TAG",
                description: "String",
              },
            },
            {
              name: "--custom-gpu-driver-path",
              description:
                "Specify a custom Cloud Storage path where the GPU driver is stored. If not specified, we'll automatically choose from official GPU drivers",
              args: {
                name: "CUSTOM_GPU_DRIVER_PATH",
                description: "String",
              },
            },
            {
              name: "--data-disk-encryption",
              description:
                "Disk encryption method used on the data disk, defaults to GMEK. _DATA_DISK_ENCRYPTION_ must be one of: *GMEK*, *CMEK*",
              args: {
                name: "DATA_DISK_ENCRYPTION",
                description: "String",
                suggestions: ["GMEK", "CMEK"],
              },
            },
            {
              name: "--data-disk-encryption-key-keyring",
              description: "The KMS keyring of the key",
              args: {
                name: "DATA_DISK_ENCRYPTION_KEY_KEYRING",
                description: "String",
              },
            },
            {
              name: "--data-disk-encryption-key-location",
              description: "The Google Cloud location for the key",
              args: {
                name: "DATA_DISK_ENCRYPTION_KEY_LOCATION",
                description: "String",
              },
            },
            {
              name: "--data-disk-encryption-key-project",
              description: "The Google Cloud project for the key",
              args: {
                name: "DATA_DISK_ENCRYPTION_KEY_PROJECT",
                description: "String",
              },
            },
            {
              name: "--data-disk-kms-key",
              description:
                "ID of the key or fully qualified identifier for the key",
              priority: 100,
              args: {
                name: "DATA_DISK_KMS_KEY",
                description: "String",
              },
            },
            {
              name: "--data-disk-resource-policies",
              description:
                "Resource policies to apply to the data disk. Format: `projects/{project}/regions/{region}/resourcePolicies/{policy}`",
              args: {
                name: "RESOURCE_POLICIES",
                description: "List",
              },
            },
            {
              name: "--data-disk-size",
              description:
                "Size of data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). The minimum recommended value is 100 GB. If not specified, this defaults to 100",
              args: {
                name: "DATA_DISK_SIZE",
                description: "Int",
              },
            },
            {
              name: "--data-disk-type",
              description:
                "Type of data disk attached to this instance. Defaults to standard persistent disk (`PD_STANDARD`) on machine types that support Persistent Disk, and to `HYPERDISK_BALANCED` on Hyperdisk-only machine series (e.g. N4, C4, C4A, M4). _DATA_DISK_TYPE_ must be one of: *PD_STANDARD*, *PD_SSD*, *PD_BALANCED*, *PD_EXTREME*, *HYPERDISK_BALANCED*, *HYPERDISK_BALANCED_HIGH_AVAILABILITY*, *HYPERDISK_ML*, *HYPERDISK_EXTREME*, *HYPERDISK_THROUGHPUT*",
              args: {
                name: "DATA_DISK_TYPE",
                description: "String",
                suggestions: [
                  "PD_STANDARD",
                  "PD_SSD",
                  "PD_BALANCED",
                  "PD_EXTREME",
                  "HYPERDISK_BALANCED",
                  "HYPERDISK_BALANCED_HIGH_AVAILABILITY",
                  "HYPERDISK_ML",
                  "HYPERDISK_EXTREME",
                  "HYPERDISK_THROUGHPUT",
                ],
              },
            },
            {
              name: "--disable-proxy-access",
              description:
                "If true, the notebook instance will not register with the proxy",
            },
            {
              name: "--disable-public-ip",
              description:
                "If specified, no public IP will be assigned to this instance",
            },
            {
              name: "--enable-ip-forwarding",
              description:
                "If specified, IP forwarding will be enabled for this instance",
            },
            {
              name: "--enable-managed-euc",
              description:
                "If true, the notebook instance will be created with managed end user credentials enabled",
            },
            {
              name: "--enable-third-party-identity",
              description:
                "If true, the notebook instance provide a proxy endpoint which allows for third party identity",
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
              name: "--install-gpu-driver",
              description:
                "Whether the end user authorizes Google Cloud to install a GPU driver on this instance. If this field is empty or set to false, the GPU driver won't be installed. Only applicable to instances with GPUs",
            },
            {
              name: "--instance-owners",
              description:
                "The owners of this instance after creation. Format: `alias@example.com`. Currently supports one owner only. If not specified, all of the service account users of the VM instance's service account can use the instance",
              args: {
                name: "INSTANCE_OWNERS",
                description: "String",
              },
            },
            {
              name: "--labels",
              description:
                "Labels to apply to this instance. These can be later modified by the setLabels method",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optLocation,
            optLogHttp,
            {
              name: "--machine-type",
              description:
                "The [Compute Engine machine type](https://cloud.google.com/sdk/gcloud/reference/compute/machine-types) of this instance",
              args: {
                name: "MACHINE_TYPE",
                description: "String",
              },
            },
            {
              name: "--metadata",
              description: "Custom metadata to apply to this instance",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--min-cpu-platform",
              description:
                "The minimum CPU platform to use for this instance. The list of valid values can be found in https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform#availablezones",
              args: {
                name: "MIN_CPU_PLATFORM",
                description: "String",
              },
            },
            optNetwork,
            {
              name: "--nic-type",
              description:
                "Type of the network interface card. _NIC_TYPE_ must be one of: *VIRTIGO_NET*, *GVNIC*",
              args: {
                name: "NIC_TYPE",
                description: "String",
                suggestions: ["VIRTIGO_NET", "GVNIC"],
              },
            },
            optNoAsync,
            {
              name: "--no-disable-proxy-access",
              description:
                "If true, the notebook instance will not register with the proxy",
              hidden: true,
            },
            {
              name: "--no-disable-public-ip",
              description:
                "If specified, no public IP will be assigned to this instance",
              hidden: true,
            },
            {
              name: "--no-enable-ip-forwarding",
              description:
                "If specified, IP forwarding will be enabled for this instance",
              hidden: true,
            },
            {
              name: "--no-enable-managed-euc",
              description:
                "If true, the notebook instance will be created with managed end user credentials enabled",
              hidden: true,
            },
            {
              name: "--no-enable-third-party-identity",
              description:
                "If true, the notebook instance provide a proxy endpoint which allows for third party identity",
              hidden: true,
            },
            {
              name: "--no-install-gpu-driver",
              description:
                "Whether the end user authorizes Google Cloud to install a GPU driver on this instance. If this field is empty or set to false, the GPU driver won't be installed. Only applicable to instances with GPUs",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--reservation-key",
              description:
                "The label key of a reservation resource. To target a specific reservation by name, use compute.googleapis.com/reservation-name as the key and specify the name of your reservation as its value",
              args: {
                name: "RESERVATION_KEY",
                description: "String",
              },
            },
            {
              name: "--reservation-type",
              description:
                "Type of the reservation. _RESERVATION_TYPE_ must be one of: *none*, *any*, *specific*",
              args: {
                name: "RESERVATION_TYPE",
                description: "String",
                suggestions: ["none", "any", "specific"],
              },
            },
            {
              name: "--reservation-values",
              description:
                "The label value of a reservation resource. To target a specific reservation by name, use compute.googleapis.com/reservation-name as the key and specify the name of your reservation as its value",
              args: {
                name: "VALUES",
                description: "List",
              },
            },
            {
              name: "--service-account-email",
              description:
                "The service account on this instance, giving access to other Google Cloud services. You can use any service account within the same project, but you must grant the service account user permission to use the instance. If not specified, the [Compute Engine default service account](/compute/docs/access/service-accounts#default_service_account) is used",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "String",
              },
            },
            {
              name: "--shielded-integrity-monitoring",
              description:
                "Boolean. Enable monitoring of the boot integrity of the instance. Supported values: `true`, `false`",
              args: {
                name: "SHIELDED_INTEGRITY_MONITORING",
                description: "String",
              },
            },
            {
              name: "--shielded-secure-boot",
              description:
                "Boolean. Boot instance with secure boot enabled. Supported values: `true`, `false`",
              args: {
                name: "SHIELDED_SECURE_BOOT",
                description: "String",
              },
            },
            {
              name: "--shielded-vtpm",
              description:
                "Boolean. Boot instance with TPM (Trusted Platform Module) enabled. Supported values: `true`, `false`",
              args: {
                name: "SHIELDED_VTPM",
                description: "String",
              },
            },
            {
              name: "--subnet",
              description:
                "ID of the subnetwork or fully qualified identifier for the subnetwork",
              priority: 100,
              args: {
                name: "SUBNET",
                description: "String",
              },
            },
            {
              name: "--subnet-region",
              description:
                "Google Cloud region of this subnetwork https://cloud.google.com/compute/docs/regions-zones/#locations",
              args: {
                name: "SUBNET_REGION",
                description: "String",
              },
            },
            {
              name: "--tags",
              description: "Tags to apply to this instance",
              args: {
                name: "TAGS",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--vm-image-family",
              description:
                "Use this VM image family to find the image; the newest image in this family will be used",
              args: {
                name: "VM_IMAGE_FAMILY",
                description: "String",
              },
            },
            {
              name: "--vm-image-name",
              description: "Use this VM image name to find the image",
              args: {
                name: "VM_IMAGE_NAME",
                description: "String",
              },
            },
            {
              name: "--vm-image-project",
              description:
                "The ID of the Google Cloud project that this VM image belongs to. Format: projects/`{project_id}`",
              args: {
                name: "VM_IMAGE_PROJECT",
                description: "String",
              },
            },
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "delete",
          description: "Deletes a workbench instance",
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "describe",
          description: "Describes a workbench instance",
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "diagnose",
          description: "Diagnoses a workbench instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--enable-copy-home-files",
              description:
                "Enables flag to copy all `/home/jupyter` folder contents",
            },
            {
              name: "--enable-packet-capture",
              description:
                "Enables flag to capture packets from the instance for 30 seconds",
            },
            {
              name: "--enable-repair",
              description: "Enables flag to repair service for instance",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gcs-bucket",
              description:
                "The Cloud Storage bucket where the log files generated from the diagnose command will be stored. storage.buckets.writer permissions must be given to project's service account or user credential. Format: gs://`{gcs_bucket}`",
              priority: 100,
              args: {
                name: "GCS_BUCKET",
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
            {
              name: "--no-enable-copy-home-files",
              description:
                "Enables flag to copy all `/home/jupyter` folder contents",
              hidden: true,
            },
            {
              name: "--no-enable-packet-capture",
              description:
                "Enables flag to capture packets from the instance for 30 seconds",
              hidden: true,
            },
            {
              name: "--no-enable-repair",
              description: "Enables flag to repair service for instance",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--relative-path",
              description:
                "Defines the relative storage path in the Cloud Storage bucket where the diagnostic logs will be written. Default path will be the root directory of the Cloud Storage bucketFormat of full path: gs://`{gcs_bucket}`/`{relative_path}`/",
              args: {
                name: "RELATIVE_PATH",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "get-config",
          description:
            "Describes the valid configurations for workbench instances",
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
        },
        {
          name: "get-iam-policy",
          description: "Gets IAM policy for a workbench instance",
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "list",
          description: "Lists workbench instances",
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
          description: "Removes IAM policy binding for a workbench instance",
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "reset",
          description: "Resets a workbench instance",
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "resize-disk",
          description: "Resizes the workbench instance's disk",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--boot-disk-size",
              description:
                "Size of boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB)",
              args: {
                name: "BOOT_DISK_SIZE",
                description: "Int",
              },
            },
            optConfiguration,
            {
              name: "--data-disk-size",
              description:
                "Size of data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB)",
              args: {
                name: "DATA_DISK_SIZE",
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "restore",
          description: "Restores the workbench instance to a snapshot state",
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
            optLocation,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--snapshot",
              description: "The snapshot name to be restored from",
              priority: 100,
              args: {
                name: "SNAPSHOT",
                description: "String",
              },
            },
            {
              name: "--snapshot-project",
              description: "The project id of the snapshot to be restored from",
              priority: 100,
              args: {
                name: "SNAPSHOT_PROJECT",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "rollback",
          description: "Rolls back a workbench instance",
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
            optLocation,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--target-snapshot",
              description: "The saved snapshot to rollback to",
              priority: 100,
              args: {
                name: "TARGET_SNAPSHOT",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "set-iam-policy",
          description: "Sets the IAM policy for a workbench instance",
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
              name: "INSTANCE",
              description:
                "ID of the instance or fully qualified identifier for the instance",
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
          name: "start",
          description: "Starts a workbench instance",
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "stop",
          description: "Stops a workbench instance",
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "update",
          description: "Updates a workbench instance",
          options: [
            {
              name: "--accelerator-core-count",
              description: "Count of cores of this accelerator",
              args: {
                name: "ACCELERATOR_CORE_COUNT",
                description: "Int",
              },
            },
            {
              name: "--accelerator-type",
              description:
                "Type of this accelerator. _ACCELERATOR_TYPE_ must be one of: *NVIDIA_TESLA_K80*, *NVIDIA_TESLA_P100*, *NVIDIA_TESLA_V100*, *NVIDIA_TESLA_P4*, *NVIDIA_TESLA_T4*, *NVIDIA_TESLA_A100*, *NVIDIA_A100_80GB*, *NVIDIA_TESLA_T4_VWS*, *NVIDIA_TESLA_P100_VWS*, *NVIDIA_TESLA_P4_VWS*, *NVIDIA_L4*, *NVIDIA_H100_80GB*, *NVIDIA_H100_MEGA_80GB*, *NVIDIA_H200_141GB*, *NVIDIA_B200*",
              args: {
                name: "ACCELERATOR_TYPE",
                description: "String",
                suggestions: [
                  "NVIDIA_TESLA_K80",
                  "NVIDIA_TESLA_P100",
                  "NVIDIA_TESLA_V100",
                  "NVIDIA_TESLA_P4",
                  "NVIDIA_TESLA_T4",
                  "NVIDIA_TESLA_A100",
                  "NVIDIA_A100_80GB",
                  "NVIDIA_TESLA_T4_VWS",
                  "NVIDIA_TESLA_P100_VWS",
                  "NVIDIA_TESLA_P4_VWS",
                  "NVIDIA_L4",
                  "NVIDIA_H100_80GB",
                  "NVIDIA_H100_MEGA_80GB",
                  "NVIDIA_H200_141GB",
                  "NVIDIA_B200",
                ],
              },
            },
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--container-repository",
              description:
                "The path to the container image repository. For example: gcr.io/`{project_id}`/`{image_name}`",
              priority: 100,
              args: {
                name: "CONTAINER_REPOSITORY",
                description: "String",
              },
            },
            {
              name: "--container-tag",
              description:
                "The tag of the container image. If not specified, this defaults to the latest tag",
              args: {
                name: "CONTAINER_TAG",
                description: "String",
              },
            },
            {
              name: "--custom-gpu-driver-path",
              description: "Custom gpu driver path",
              args: {
                name: "CUSTOM_GPU_DRIVER_PATH",
                description: "String",
              },
            },
            {
              name: "--data-disk-resource-policies",
              description:
                "Resource policies to apply to the data disk. Format: `projects/{project}/regions/{region}/resourcePolicies/{policy}`",
              args: {
                name: "RESOURCE_POLICIES",
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
            {
              name: "--install-gpu-driver",
              description: "Install gpu driver",
            },
            {
              name: "--labels",
              description:
                "Labels to apply to this instance. These can be later modified by the setLabels method",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optLocation,
            optLogHttp,
            {
              name: "--machine-type",
              description:
                "The [Compute Engine machine type](https://cloud.google.com/sdk/gcloud/reference/compute/machine-types) of this instance",
              args: {
                name: "MACHINE_TYPE",
                description: "String",
              },
            },
            {
              name: "--metadata",
              description: "Custom metadata to apply to this instance",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optNoAsync,
            {
              name: "--no-install-gpu-driver",
              description: "Install gpu driver",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--shielded-integrity-monitoring",
              description:
                "Boolean. Enable monitoring of the boot integrity of the instance. Supported values: `true`, `false`",
              args: {
                name: "SHIELDED_INTEGRITY_MONITORING",
                description: "String",
              },
            },
            {
              name: "--shielded-secure-boot",
              description:
                "Boolean. Boot instance with secure boot enabled. Supported values: `true`, `false`",
              args: {
                name: "SHIELDED_SECURE_BOOT",
                description: "String",
              },
            },
            {
              name: "--shielded-vtpm",
              description:
                "Boolean. Boot instance with TPM (Trusted Platform Module) enabled. Supported values: `true`, `false`",
              args: {
                name: "SHIELDED_VTPM",
                description: "String",
              },
            },
            {
              name: "--tags",
              description: "Tags to apply to this instance",
              args: {
                name: "TAGS",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "upgrade",
          description: "Upgrades a workbench instance",
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
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
      description: "Workbench schedules command group",
      subcommands: [
        {
          name: "create",
          description: "Create a schedule",
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
            optBillingProject,
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
              description: "The display name of the schedule",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--enable-internet-access",
              description:
                "Enable public internet access for the runtime. Enabled by default, use *--no-enable-internet-access* to disable",
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
            {
              name: "--kernel-name",
              description: "The kernel name to use for the execution",
              args: {
                name: "KERNEL_NAME",
                description: "String",
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
            optNetwork,
            {
              name: "--no-enable-internet-access",
              description: "Enable public internet access for the runtime",
              hidden: true,
            },
            {
              name: "--no-enable-queueing",
              description:
                "Enables new scheduled runs to be queued when max_concurrent_runs limit is reached. If set to true, new runs will be queued instead of skipped",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion2,
            {
              name: "--service-account",
              description: "The service account to run the execution as",
              priority: 100,
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
            optRegion,
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
            optRegion,
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
          description: "List your Workbench notebook execution schedules",
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
            optRegion,
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
            optRegion,
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
            optRegion,
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
