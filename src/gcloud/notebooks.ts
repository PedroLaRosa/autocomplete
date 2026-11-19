const optAcceleratorCoreCount: Fig.Option = {
  name: "--accelerator-core-count",
  description: "Count of cores of this accelerator",
  args: {
    name: "ACCELERATOR_CORE_COUNT",
    description: "Int",
  },
};

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
  description:
    "Google Cloud location of this runtime https://cloud.google.com/compute/docs/regions-zones/#locations",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description: "The location of the notebook instance",
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
  name: "notebooks",
  description: "Notebooks Command Group",
  subcommands: [
    {
      name: "environments",
      description: "Notebooks Environments Command Group",
      subcommands: [
        {
          name: "create",
          description: "Request for creating environments",
          options: [
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
              name: "--description",
              description: "A brief description of this environment",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Name to display on the UI",
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
            optLocation,
            optLogHttp,
            optNoAsync,
            {
              name: "--post-startup-script",
              description:
                "Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path(gs://`path-to-file/`file-name`)",
              args: {
                name: "POST_STARTUP_SCRIPT",
                description: "String",
              },
            },
            optProject,
            optQuiet,
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
                "The ID of the Google Cloud project that this VM image belongs to.Format: projects/`{project_id}`",
              args: {
                name: "VM_IMAGE_PROJECT",
                description: "String",
              },
            },
          ],
          args: {
            name: "ENVIRONMENT",
            description:
              "ID of the environment or fully qualified identifier for the environment",
          },
        },
        {
          name: "delete",
          description: "Request for deleting environments",
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
            name: "ENVIRONMENT",
            description:
              "ID of the environment or fully qualified identifier for the environment",
          },
        },
        {
          name: "describe",
          description: "Request for describing environments",
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
            name: "ENVIRONMENT",
            description:
              "ID of the environment or fully qualified identifier for the environment",
          },
        },
        {
          name: "list",
          description: "Request for listing environments",
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
                "Google Cloud location of this environment: https://cloud.google.com/compute/docs/regions-zones/#locations",
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
      description: "Notebooks Instances command group",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding for an instance",
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
            optLocation3,
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
          name: "create",
          description: "Request for creating an instance",
          options: [
            optAcceleratorCoreCount,
            {
              name: "--accelerator-type",
              description:
                "Type of this accelerator. _ACCELERATOR_TYPE_ must be one of: *NVIDIA_TESLA_A100*, *NVIDIA_TESLA_K80*, *NVIDIA_TESLA_P100*, *NVIDIA_TESLA_V100*, *NVIDIA_TESLA_P4*, *NVIDIA_TESLA_T4*, *NVIDIA_TESLA_T4_VWS*, *NVIDIA_TESLA_P100_VWS*, *NVIDIA_TESLA_P4_VWS*, *TPU_V2*, *TPU_V3*, *NVIDIA_L4*, *NVIDIA_H100_80GB*, *NVIDIA_H100_MEGA_80GB*",
              args: {
                name: "ACCELERATOR_TYPE",
                description: "String",
                suggestions: [
                  "NVIDIA_TESLA_A100",
                  "NVIDIA_TESLA_K80",
                  "NVIDIA_TESLA_P100",
                  "NVIDIA_TESLA_V100",
                  "NVIDIA_TESLA_P4",
                  "NVIDIA_TESLA_T4",
                  "NVIDIA_TESLA_T4_VWS",
                  "NVIDIA_TESLA_P100_VWS",
                  "NVIDIA_TESLA_P4_VWS",
                  "TPU_V2",
                  "TPU_V3",
                  "NVIDIA_L4",
                  "NVIDIA_H100_80GB",
                  "NVIDIA_H100_MEGA_80GB",
                ],
              },
            },
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
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
                "Type of boot disk attached to this instance, defaults to standard persistent disk (`PD_STANDARD`). _BOOT_DISK_TYPE_ must be one of: *PD_STANDARD*, *PD_SSD*, *PD_BALANCED*, *PD_EXTREME*",
              args: {
                name: "BOOT_DISK_TYPE",
                description: "String",
                suggestions: [
                  "PD_STANDARD",
                  "PD_SSD",
                  "PD_BALANCED",
                  "PD_EXTREME",
                ],
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
                "Type of data disk attached to this instance, defaults to standard persistent disk (`PD_STANDARD`). _DATA_DISK_TYPE_ must be one of: *PD_STANDARD*, *PD_SSD*, *PD_BALANCED*, *PD_EXTREME*",
              args: {
                name: "DATA_DISK_TYPE",
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
              name: "--disk-encryption",
              description:
                "Disk encryption method used on the boot disk, defaults to GMEK. _DISK_ENCRYPTION_ must be one of: *GMEK*, *CMEK*",
              args: {
                name: "DISK_ENCRYPTION",
                description: "String",
                suggestions: ["GMEK", "CMEK"],
              },
            },
            {
              name: "--environment",
              description:
                "ID of the environment or fully qualified identifier for the environment",
              priority: 100,
              args: {
                name: "ENVIRONMENT",
                description: "String",
              },
            },
            {
              name: "--environment-location",
              description:
                "Google Cloud location of this environment https://cloud.google.com/compute/docs/regions-zones/#locations",
              args: {
                name: "ENVIRONMENT_LOCATION",
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
              name: "--install-gpu-driver",
              description:
                "Whether the end user authorizes Google Cloud to install a GPU driver on this instance. If this field is empty or set to false, the GPU driver won't be installed. Only applicable to instances with GPUs",
            },
            {
              name: "--instance-owners",
              description:
                "The owners of this instance after creation. Format:`alias@example.com`. Currently supports one owner only.If not specified, all of the service account users of the VM instance's service account can use the instance",
              args: {
                name: "INSTANCE_OWNERS",
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
              name: "--network",
              description:
                "ID of the network or fully qualified identifier for the network",
              priority: 100,
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            optNoAsync,
            {
              name: "--no-install-gpu-driver",
              description:
                "Whether the end user authorizes Google Cloud to install a GPU driver on this instance. If this field is empty or set to false, the GPU driver won't be installed. Only applicable to instances with GPUs",
              hidden: true,
            },
            {
              name: "--no-proxy-access",
              description:
                "If true, the notebook instance will not register with the proxy",
            },
            {
              name: "--no-public-ip",
              description:
                "If specified, no public IP will be assigned to this instance",
            },
            {
              name: "--no-remove-data-disk",
              description:
                "If true, the data disk will not be auto deleted when deleting the instance",
            },
            {
              name: "--no-shielded-integrity-monitoring",
              description:
                "Enable monitoring of the boot integrity of the instance",
              hidden: true,
            },
            {
              name: "--no-shielded-secure-boot",
              description:
                "Boot instance with secure boot enabled. Disabled by default",
              hidden: true,
            },
            {
              name: "--no-shielded-vtpm",
              description:
                "Boot instance with TPM (Trusted Platform Module) enabled",
              hidden: true,
            },
            {
              name: "--post-startup-script",
              description:
                "Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path (gs://`path-to-file`/`file-name`)",
              args: {
                name: "POST_STARTUP_SCRIPT",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--reservation",
              description:
                "The name of the reservation, required when `--reservation-affinity=SPECIFIC_RESERVATION`",
              args: {
                name: "RESERVATION",
                description: "String",
              },
            },
            {
              name: "--reservation-affinity",
              description:
                "The type of reservation for the instance. _RESERVATION_AFFINITY_ must be one of: *TYPE_UNSPECIFIED*, *NO_RESERVATION*, *ANY_RESERVATION*, *SPECIFIC_RESERVATION*",
              args: {
                name: "RESERVATION_AFFINITY",
                description: "String",
                suggestions: [
                  "TYPE_UNSPECIFIED",
                  "NO_RESERVATION",
                  "ANY_RESERVATION",
                  "SPECIFIC_RESERVATION",
                ],
              },
            },
            {
              name: "--service-account",
              description:
                "The service account on this instance, giving access to other Google Cloud services. You can use any service account within the same project, but you must have the service account user permission to use the instance. If not specified, the [Compute Engine default service account](/compute/docs/access/service-accounts#default_service_account) is used",
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
              },
            },
            {
              name: "--shielded-integrity-monitoring",
              description:
                "Enable monitoring of the boot integrity of the instance. Enabled by default, use *--no-shielded-integrity-monitoring* to disable",
            },
            {
              name: "--shielded-secure-boot",
              description:
                "Boot instance with secure boot enabled. Disabled by default",
            },
            {
              name: "--shielded-vtpm",
              description:
                "Boot instance with TPM (Trusted Platform Module) enabled. Enabled by default, use *--no-shielded-vtpm* to disable",
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
          description: "Request for deleting instances",
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
          description: "Request for describing instances",
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
          description: "Request for diagnose instances",
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
            {
              name: "--timeout-minutes",
              description:
                "Maximum amount of time in minutes before the operation times out",
              args: {
                name: "TIMEOUT_MINUTES",
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
          name: "get-health",
          description: "Request for checking if a notebook instance is healthy",
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
          name: "get-iam-policy",
          description: "Get IAM policy for an instance",
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
            optLocation3,
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
          name: "is-upgradeable",
          description:
            "Request for checking if a notebook instance is upgradeable",
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
          name: "list",
          description: "Request for listing instances",
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
          name: "migrate",
          description: "Request for migrating instances",
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
            {
              name: "--post-startup-script-option",
              description:
                "// Specifies the behavior of post startup script during migration. _POST_STARTUP_SCRIPT_OPTION_ must be one of: *POST_STARTUP_SCRIPT_OPTION_UNSPECIFIED*, *POST_STARTUP_SCRIPT_OPTION_SKIP*, *POST_STARTUP_SCRIPT_OPTION_RERUN*",
              args: {
                name: "POST_STARTUP_SCRIPT_OPTION",
                description: "String",
                suggestions: [
                  "POST_STARTUP_SCRIPT_OPTION_UNSPECIFIED",
                  "POST_STARTUP_SCRIPT_OPTION_SKIP",
                  "POST_STARTUP_SCRIPT_OPTION_RERUN",
                ],
              },
            },
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
          name: "register",
          description: "Request for registering instances",
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
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding for an instance",
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
            optLocation3,
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
          description: "Request for resetting instances",
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
          name: "rollback",
          description: "Request for rolling back instances",
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
          description: "Set the IAM policy for an Instance",
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
            optLocation3,
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
          description: "Request for starting instances",
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
          description: "Request for stopping instances",
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
          description: "Request for updating instances",
          options: [
            optAcceleratorCoreCount,
            {
              name: "--accelerator-type",
              description:
                "Type of this accelerator. _ACCELERATOR_TYPE_ must be one of: *NVIDIA_TESLA_A100*, *NVIDIA_TESLA_K80*, *NVIDIA_TESLA_P100*, *NVIDIA_TESLA_V100*, *NVIDIA_TESLA_P4*, *NVIDIA_TESLA_T4*, *NVIDIA_TESLA_T4_VWS*, *NVIDIA_TESLA_P100_VWS*, *NVIDIA_TESLA_P4_VWS*, *TPU_V2*, *TPU_V3*, *NVIDIA_L4*, *NVIDIA_H100_80GB*, *NVIDIA_H100_MEGA_80GB*",
              args: {
                name: "ACCELERATOR_TYPE",
                description: "String",
                suggestions: [
                  "NVIDIA_TESLA_A100",
                  "NVIDIA_TESLA_K80",
                  "NVIDIA_TESLA_P100",
                  "NVIDIA_TESLA_V100",
                  "NVIDIA_TESLA_P4",
                  "NVIDIA_TESLA_T4",
                  "NVIDIA_TESLA_T4_VWS",
                  "NVIDIA_TESLA_P100_VWS",
                  "NVIDIA_TESLA_P4_VWS",
                  "TPU_V2",
                  "TPU_V3",
                  "NVIDIA_L4",
                  "NVIDIA_H100_80GB",
                  "NVIDIA_H100_MEGA_80GB",
                ],
              },
            },
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
                "The [Compute Engine machine type](/compute/docs/machine-types)",
              args: {
                name: "MACHINE_TYPE",
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "upgrade",
          description: "Request for upgrading instances",
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
      name: "locations",
      description: "View locations available for a project",
      subcommands: [
        {
          name: "list",
          description: "Request for listing locations",
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
      name: "runtimes",
      description: "Notebooks Runtimes command group",
      subcommands: [
        {
          name: "create",
          description: "Request for creating an runtime",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--custom-gpu-driver-path",
              description: "Custom gpu driver path",
              args: {
                name: "CUSTOM_GPU_DRIVER_PATH",
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
              name: "--idle-shutdown-timeout",
              description: "Idle shutdown timeout",
              args: {
                name: "IDLE_SHUTDOWN_TIMEOUT",
                description: "String",
              },
            },
            optImpersonateServiceAccount,
            {
              name: "--install-gpu-driver",
              description: "Install gpu driver",
              args: {
                name: "INSTALL_GPU_DRIVER",
                description: "String",
              },
            },
            {
              name: "--interface",
              description: "Runtime interface",
              args: {
                name: "INTERFACE",
                description: "String",
              },
            },
            optLocation2,
            optLogHttp,
            {
              name: "--machine-type",
              description: "Machine type",
              priority: 100,
              args: {
                name: "MACHINE_TYPE",
                description: "String",
              },
            },
            {
              name: "--mode",
              description: "Runtime mode",
              args: {
                name: "MODE",
                description: "String",
              },
            },
            optNoAsync,
            {
              name: "--post-startup-script",
              description: "Post startup script",
              args: {
                name: "POST_STARTUP_SCRIPT",
                description: "String",
              },
            },
            {
              name: "--post-startup-script-behavior",
              description: "Post startup script behavior",
              args: {
                name: "POST_STARTUP_SCRIPT_BEHAVIOR",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--runtime-access-type",
              description: "Access type",
              args: {
                name: "RUNTIME_ACCESS_TYPE",
                description: "String",
              },
            },
            {
              name: "--runtime-owner",
              description: "Runtime owner",
              args: {
                name: "RUNTIME_OWNER",
                description: "String",
              },
            },
            {
              name: "--runtime-type",
              description: "Runtime type",
              args: {
                name: "RUNTIME_TYPE",
                description: "String",
              },
            },
            {
              name: "--source",
              description: "Runtime source",
              args: {
                name: "SOURCE",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--type",
              description: "Runtime type",
              args: {
                name: "TYPE",
                description: "String",
              },
            },
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
          name: "delete",
          description: "Request for deleting runtimes",
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
          description: "Request for describing runtimes",
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
            name: "RUNTIME",
            description:
              "ID of the runtime or fully qualified identifier for the runtime",
          },
        },
        {
          name: "diagnose",
          description: "Request for diagnose runtimes",
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
                "Enables flag to capture packets from the runtime for 30 seconds",
            },
            {
              name: "--enable-repair",
              description: "Enables flag to repair service for runtime",
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
            optLocation2,
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
                "Enables flag to capture packets from the runtime for 30 seconds",
              hidden: true,
            },
            {
              name: "--no-enable-repair",
              description: "Enables flag to repair service for runtime",
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
            {
              name: "--timeout-minutes",
              description:
                "Maximum amount of time in minutes before the operation times out",
              args: {
                name: "TIMEOUT_MINUTES",
                description: "String",
              },
            },
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
          description: "Request for listing runtimes",
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
          name: "migrate",
          description: "Request for migrating runtimes",
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
            optNoAsync,
            {
              name: "--post-startup-script-option",
              description:
                "Specifies the behavior of post startup script during migration. _POST_STARTUP_SCRIPT_OPTION_ must be one of: *POST_STARTUP_SCRIPT_OPTION_UNSPECIFIED*, *POST_STARTUP_SCRIPT_OPTION_SKIP*, *POST_STARTUP_SCRIPT_OPTION_RERUN*",
              args: {
                name: "POST_STARTUP_SCRIPT_OPTION",
                description: "String",
                suggestions: [
                  "POST_STARTUP_SCRIPT_OPTION_UNSPECIFIED",
                  "POST_STARTUP_SCRIPT_OPTION_SKIP",
                  "POST_STARTUP_SCRIPT_OPTION_RERUN",
                ],
              },
            },
            optProject,
            optQuiet,
            {
              name: "--service-account",
              description:
                "The service account to be included in the Compute Engine instance of the new Workbench Instance when the Runtime uses single user only mode for permission. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used. When the Runtime uses service account mode for permission, it will reuse the same service account, and this field must be empty",
              args: {
                name: "SERVICE_ACCOUNT",
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
          name: "reset",
          description: "Request for resetting runtimes",
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
          name: "start",
          description: "Request for starting runtimes",
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
          description: "Request for stopping runtimes",
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
          name: "switch",
          description: "Request for switching runtimes",
          options: [
            optAcceleratorCoreCount,
            {
              name: "--accelerator-type",
              description:
                "Type of this accelerator. _ACCELERATOR_TYPE_ must be one of: *NVIDIA_TESLA_A100*, *NVIDIA_TESLA_K80*, *NVIDIA_TESLA_P100*, *NVIDIA_TESLA_V100*, *NVIDIA_TESLA_P4*, *NVIDIA_TESLA_T4*, *NVIDIA_TESLA_T4_VWS*, *NVIDIA_TESLA_P100_VWS*, *NVIDIA_TESLA_P4_VWS*, *TPU_V2*, *TPU_V3*",
              args: {
                name: "ACCELERATOR_TYPE",
                description: "String",
                suggestions: [
                  "NVIDIA_TESLA_A100",
                  "NVIDIA_TESLA_K80",
                  "NVIDIA_TESLA_P100",
                  "NVIDIA_TESLA_V100",
                  "NVIDIA_TESLA_P4",
                  "NVIDIA_TESLA_T4",
                  "NVIDIA_TESLA_T4_VWS",
                  "NVIDIA_TESLA_P100_VWS",
                  "NVIDIA_TESLA_P4_VWS",
                  "TPU_V2",
                  "TPU_V3",
                ],
              },
            },
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
            {
              name: "--machine-type",
              description: "Machine type",
              args: {
                name: "MACHINE_TYPE",
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
