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
  description: "Resource location",
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
  name: "migration",
  description: "The root group for various Cloud Migration teams",
  subcommands: [
    {
      name: "vms",
      description:
        "Provides Migrate to Virtual Machines (VM migration) service functionality",
      subcommands: [
        {
          name: "image-imports",
          description:
            "Imports images to Google Compute Engine from Google Cloud Storage",
          subcommands: [
            {
              name: "create",
              description:
                "Import Virtual Disk images to Google Compute Engine",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--adaptation-modifiers",
                  description:
                    "A map of flags to pass to the OS adaptation process. The actual value depends on the modifier and can also be empty. e.g. --adaptation-modifiers=flag1=value1,flag2",
                  args: {
                    name: "ADAPTATION_MODIFIERS",
                    description: "String",
                  },
                },
                {
                  name: "--additional-licenses",
                  description:
                    "Comma-separated list of the additional licenses to assign to the image",
                  args: {
                    name: "ADDITIONAL_LICENSES",
                    description: "List",
                  },
                },
                optBillingProject,
                {
                  name: "--boot-conversion",
                  description:
                    "This property will trigger an internal process which will convert the image from using the existing boot option to another. The size of the boot disk might be increased to allow the conversion. Currently only support BIOS_TO_EFI",
                  args: {
                    name: "BOOT_CONVERSION",
                    suggestions: [
                      "bios-to-efi",
                      "boot-conversion-unspecified",
                      "none",
                    ],
                  },
                },
                optConfiguration,
                {
                  name: "--description",
                  description: "A description of the image",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--family-name",
                  description:
                    "The name of the image family to which the new image belongs",
                  args: {
                    name: "FAMILY_NAME",
                    description: "String",
                  },
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--generalize",
                  description:
                    "If true, generalize the imported image. Default false. The generalization process enables co-existence of multiple VMs created from the same image. For Windows, generalizing the image removes computer-specific information such as installed drivers and the computer security identifier (SID)",
                },
                {
                  name: "--guest-os-features",
                  description:
                    "Guest OS features to enable on the imported image. This field does not change the OS of the image; it only marks the image with the specified features, so ensure they are compatible with the OS. If specified, --skip-os-adaptation must be specified",
                  args: {
                    name: "GUEST_OS_FEATURES",
                    description: "List",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                {
                  name: "--image-name",
                  description:
                    "The name of the image that will be imported to Google Compute Engine. Default is the Image Import name",
                  args: {
                    name: "IMAGE_NAME",
                    description: "String",
                  },
                },
                optImpersonateServiceAccount,
                {
                  name: "--kms-key",
                  description:
                    "Fully qualified identifier for the Cloud KMS (Key Management Service) cryptokey that will be used to protect the image",
                  args: {
                    name: "KMS_KEY",
                    description: "String",
                  },
                },
                {
                  name: "--labels",
                  description: "A map of labels to associate with the image",
                  args: {
                    name: "KEY=VALUE",
                  },
                },
                {
                  name: "--license-type",
                  description:
                    "The license to use post migration. _LICENSE_TYPE_ must be one of: *compute-engine-license-type-byol*, *compute-engine-license-type-default*, *compute-engine-license-type-payg*",
                  args: {
                    name: "LICENSE_TYPE",
                    suggestions: [
                      "compute-engine-license-type-byol",
                      "compute-engine-license-type-default",
                      "compute-engine-license-type-payg",
                    ],
                  },
                },
                optLocation,
                optLogHttp,
                {
                  name: "--no-generalize",
                  description:
                    "If true, generalize the imported image. Default false. The generalization process enables co-existence of multiple VMs created from the same image. For Windows, generalizing the image removes computer-specific information such as installed drivers and the computer security identifier (SID)",
                  hidden: true,
                },
                {
                  name: "--no-single-region-storage",
                  description:
                    "If true, the location of the imported image will be the region of the import job. Otherwise the closest multi-region is selected. Default is false",
                  hidden: true,
                },
                {
                  name: "--no-skip-os-adaptation",
                  description: "If true, skip OS adaptation. Default false",
                  hidden: true,
                },
                optProject,
                optQuiet,
                {
                  name: "--rootfs-uuid",
                  description: "Identifies the file system to adapt",
                  args: {
                    name: "ROOTFS_UUID",
                    description: "String",
                  },
                },
                {
                  name: "--single-region-storage",
                  description:
                    "If true, the location of the imported image will be the region of the import job. Otherwise the closest multi-region is selected. Default is false",
                },
                {
                  name: "--skip-os-adaptation",
                  description: "If true, skip OS adaptation. Default false",
                },
                {
                  name: "--source-file",
                  description:
                    "The path to the Google Cloud Storage file from which the image should be imported",
                  priority: 100,
                  args: {
                    name: "SOURCE_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                {
                  name: "--target-project",
                  description:
                    "The target project resource path to which the image will be imported. Default is the customer project. To get a list of the target projects run the gcloud alpha migration vms target-projects list command",
                  args: {
                    name: "TARGET_PROJECT",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "IMAGE_IMPORT_NAME",
                description:
                  "ID of the image_import or fully qualified identifier for the image_import",
              },
            },
            {
              name: "delete",
              description: "Delete an Image Import resource",
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
                name: "IMAGE_IMPORT_NAME",
                description:
                  "ID of the image_import or fully qualified identifier for the image_import",
              },
            },
            {
              name: "describe",
              description: "Describe an Image Import",
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
                name: "IMAGE_IMPORT_NAME",
                description:
                  "ID of the image_import or fully qualified identifier for the image_import",
              },
            },
            {
              name: "list",
              description: "List Image Imports",
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
          name: "machine-image-imports",
          description:
            "Imports machine images to Google Compute Engine from Google Cloud Storage",
          subcommands: [
            {
              name: "create",
              description: "Import machine images to Google Compute Engine",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--adaptation-modifiers",
                  description:
                    "A map of flags to pass to the OS adaptation process. The actual value depends on the modifier and can also be empty. e.g. --adaptation-modifiers=flag1=value1,flag2",
                  args: {
                    name: "ADAPTATION_MODIFIERS",
                    description: "String",
                  },
                },
                {
                  name: "--additional-licenses",
                  description:
                    "Comma-separated list of the additional licenses to assign to the machine image",
                  args: {
                    name: "ADDITIONAL_LICENSES",
                    description: "List",
                  },
                },
                optBillingProject,
                {
                  name: "--boot-conversion",
                  description:
                    "This property will trigger an internal process which will convert the image from using the existing boot option to another. The size of the boot disk might be increased to allow the conversion. Currently only support BIOS_TO_EFI. _BOOT_CONVERSION_ must be one of: *bios-to-efi*, *boot-conversion-unspecified*, *none*",
                  args: {
                    name: "BOOT_CONVERSION",
                    suggestions: [
                      "bios-to-efi",
                      "boot-conversion-unspecified",
                      "none",
                    ],
                  },
                },
                optConfiguration,
                {
                  name: "--description",
                  description: "A description of the machine image",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--enable-integrity-monitoring",
                  description:
                    "Defines whether the instance created by the machine image has integrity monitoring enabled. This can be set to true only if the image boot option is EFI, and vTPM is enabled",
                },
                {
                  name: "--enable-vtpm",
                  description:
                    "Defines whether the instance created by the machine image has vTPM enabled. This can be set to true only if the image boot option is EFI",
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--generalize",
                  description:
                    "If true, generalize the imported machine image. Default false. The generalization process enables co-existence of multiple VMs created from the same machine image. For Windows, generalizing the machine image removes computer-specific information such as installed drivers and the computer security identifier (SID)",
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                {
                  name: "--kms-key",
                  description:
                    "Fully qualified identifier for the Cloud KMS (Key Management Service) cryptokey that will be used to protect the image",
                  args: {
                    name: "KMS_KEY",
                    description: "String",
                  },
                },
                {
                  name: "--labels",
                  description:
                    "A map of labels to associate with the machine image",
                  args: {
                    name: "KEY=VALUE",
                  },
                },
                {
                  name: "--license-type",
                  description:
                    "The license to use post migration. _LICENSE_TYPE_ must be one of: *compute-engine-license-type-byol*, *compute-engine-license-type-default*, *compute-engine-license-type-payg*",
                  args: {
                    name: "LICENSE_TYPE",
                    suggestions: [
                      "compute-engine-license-type-byol",
                      "compute-engine-license-type-default",
                      "compute-engine-license-type-payg",
                    ],
                  },
                },
                optLocation,
                optLogHttp,
                {
                  name: "--machine-image-name",
                  description:
                    "The name of the machine image that will be imported to Google Compute Engine. Default is the Image Import name",
                  args: {
                    name: "MACHINE_IMAGE_NAME",
                    description: "String",
                  },
                },
                {
                  name: "--machine-type",
                  description:
                    "The machine type to create the machine image with. If not provided, the service will choose a relevant machine type series based on the information from the source image",
                  args: {
                    name: "MACHINE_TYPE",
                    description: "String",
                  },
                },
                {
                  name: "--network-interface",
                  description:
                    "The network interface to use for the instance created by the machine image. This is a dicionary with the following keys: - network: The network to use for this network interface. - subnetwork: The subnetwork to use for this network interface. - network-tier: The network tier to use for this network interface. This argument can be specified multiple times in case of multiple nics",
                  isRepeatable: true,
                  args: {
                    name: "NETWORK_INTERFACE",
                  },
                },
                {
                  name: "--no-enable-integrity-monitoring",
                  description:
                    "Defines whether the instance created by the machine image has integrity monitoring enabled. This can be set to true only if the image boot option is EFI, and vTPM is enabled",
                  hidden: true,
                },
                {
                  name: "--no-enable-vtpm",
                  description:
                    "Defines whether the instance created by the machine image has vTPM enabled. This can be set to true only if the image boot option is EFI",
                  hidden: true,
                },
                {
                  name: "--no-generalize",
                  description:
                    "If true, generalize the imported machine image. Default false. The generalization process enables co-existence of multiple VMs created from the same machine image. For Windows, generalizing the machine image removes computer-specific information such as installed drivers and the computer security identifier (SID)",
                  hidden: true,
                },
                {
                  name: "--no-single-region-storage",
                  description:
                    "If true, the location of the imported machine image will be the region of the import job. Otherwise the closest multi-region is selected. Default is false",
                  hidden: true,
                },
                {
                  name: "--no-skip-os-adaptation",
                  description: "If true, skip OS adaptation. Default false",
                  hidden: true,
                },
                optProject,
                optQuiet,
                {
                  name: "--rootfs-uuid",
                  description: "Identifies the file system to adapt",
                  args: {
                    name: "ROOTFS_UUID",
                    description: "String",
                  },
                },
                {
                  name: "--scopes",
                  description:
                    "The list of scopes to be made available for the service account",
                  args: {
                    name: "SCOPES",
                    description: "List",
                  },
                },
                {
                  name: "--secure-boot",
                  description:
                    "Defines whether the instance created by the machine image has Secure Boot enabled. This can be set to true only if the image boot option is EFI. If not specified we will use the configuration of the source. _SECURE_BOOT_ must be one of: *false*, *secure-boot-unspecified*, *true*",
                  args: {
                    name: "SECURE_BOOT",
                    suggestions: ["false", "secure-boot-unspecified", "true"],
                  },
                },
                {
                  name: "--service-account",
                  description: "The email address of the service account",
                  args: {
                    name: "SERVICE_ACCOUNT",
                    description: "String",
                  },
                },
                {
                  name: "--single-region-storage",
                  description:
                    "If true, the location of the imported machine image will be the region of the import job. Otherwise the closest multi-region is selected. Default is false",
                },
                {
                  name: "--skip-os-adaptation",
                  description: "If true, skip OS adaptation. Default false",
                },
                {
                  name: "--source-file",
                  description:
                    "The path to the Google Cloud Storage file from which the image should be imported",
                  priority: 100,
                  args: {
                    name: "SOURCE_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                {
                  name: "--tags",
                  description:
                    "The tags to apply to the instance created by the machine image",
                  args: {
                    name: "TAGS",
                    description: "List",
                  },
                },
                {
                  name: "--target-project",
                  description:
                    "The target project resource path to which the machine image will be imported. Default is the host project. To get a list of the target projects run the gcloud alpha migration vms target-projects list command",
                  args: {
                    name: "TARGET_PROJECT",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "IMAGE_IMPORT_NAME",
                description:
                  "ID of the image_import or fully qualified identifier for the image_import",
              },
            },
            {
              name: "delete",
              description: "Delete an Image Import resource",
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
                name: "IMAGE_IMPORT_NAME",
                description:
                  "ID of the image_import or fully qualified identifier for the image_import",
              },
            },
            {
              name: "describe",
              description: "Describe an Image Import",
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
                name: "IMAGE_IMPORT_NAME",
                description:
                  "ID of the image_import or fully qualified identifier for the image_import",
              },
            },
            {
              name: "list",
              description: "List Image Imports",
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
          name: "target-projects",
          description: "Manage Target Projects",
          subcommands: [
            {
              name: "list",
              description: "List Target Projects",
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
