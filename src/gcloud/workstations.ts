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

const optCluster: Fig.Option = {
  name: "--cluster",
  description: "The cluster for the config",
  args: {
    name: "CLUSTER",
    description: "String",
  },
};

const optCluster2: Fig.Option = {
  name: "--cluster",
  description: "The cluster for the workstation",
  args: {
    name: "CLUSTER",
    description: "String",
  },
};

const optCluster3: Fig.Option = {
  name: "--cluster",
  description: "The name of the cluster containing the config",
  args: {
    name: "CLUSTER",
    description: "String",
  },
};

const optCluster4: Fig.Option = {
  name: "--cluster",
  description: "The name of the cluster containing the workstation",
  args: {
    name: "CLUSTER",
    description: "String",
  },
};

const optConfig: Fig.Option = {
  name: "--config",
  description: "The config for the workstation",
  args: {
    name: "CONFIG",
    description: "String",
  },
};

const optConfig2: Fig.Option = {
  name: "--config",
  description: "The name of the config containing the workstation",
  args: {
    name: "CONFIG",
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
  description: "The name of the region of the cluster",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion2: Fig.Option = {
  name: "--region",
  description: "The name of the region of the config",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion3: Fig.Option = {
  name: "--region",
  description: "The name of the region of the workstation",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion4: Fig.Option = {
  name: "--region",
  description: "The region for the config",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion5: Fig.Option = {
  name: "--region",
  description: "The region for the workstation",
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
  name: "workstations",
  description: "Manage Cloud Workstations resources",
  subcommands: [
    {
      name: "clusters",
      description: "Manage Cloud Workstations cluster resources",
      subcommands: [
        {
          name: "create",
          description: "Create a workstation cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--domain",
              description: "Domain used by Workstations for HTTP ingress",
              args: {
                name: "DOMAIN",
                description: "String",
              },
            },
            {
              name: "--enable-http2",
              description:
                "Whether HTTP/2 is enabled for the workstation cluster",
            },
            {
              name: "--enable-private-endpoint",
              description:
                "Default is false. If specified, the cluster will be assigned an internal IP address to the Cluster Gateway. This isolates the cluster's workstations from public networks, but requires additional configuration. Learn more: https://cloud.google.com/workstations/docs",
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
                "Labels that are applied to the cluster and propagated to the underlying Compute Engine resources",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optLogHttp,
            {
              name: "--network",
              description:
                "Fully specified network path for instances created in this cluster",
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            optNoAsync,
            {
              name: "--no-enable-http2",
              description:
                "Whether HTTP/2 is enabled for the workstation cluster",
              hidden: true,
            },
            {
              name: "--no-enable-private-endpoint",
              description:
                "Default is false. If specified, the cluster will be assigned an internal IP address to the Cluster Gateway. This isolates the cluster's workstations from public networks, but requires additional configuration. Learn more: https://cloud.google.com/workstations/docs",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion,
            {
              name: "--subnetwork",
              description:
                "Fully specified subnetwork path for instances created in this cluster",
              args: {
                name: "SUBNETWORK",
                description: "String",
              },
            },
            {
              name: "--tags",
              description:
                'Resource manager tags to be bound to this cluster. For example: "123/environment=production" "123/costCenter=marketing"',
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--workstation-authorization-url",
              description:
                "The redirect URL for unauthorized requests. Redirects to this endpoint send a base64 encoded 'state' query param with the workstation name and original request hostname",
              args: {
                name: "WORKSTATION_AUTHORIZATION_URL",
                description: "String",
              },
            },
            {
              name: "--workstation-launch-url",
              description:
                "The launch URL for workstations. Requests sent to unstarted workstations will be redirected to this URL with 'workstation' and 'project' query params",
              args: {
                name: "WORKSTATION_LAUNCH_URL",
                description: "String",
              },
            },
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster",
          },
        },
        {
          name: "delete",
          description: "Delete a workstation cluster",
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
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster",
          },
        },
        {
          name: "describe",
          description: "Describe a cluster",
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
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster",
          },
        },
        {
          name: "list",
          description: "List workstation clusters",
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
            {
              name: "--region",
              description:
                "ID of the region or fully qualified identifier for the region",
              args: {
                name: "REGION",
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
          description: "Update a workstation cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
            },
            optConfiguration,
            {
              name: "--display-name",
              description: "Human-readable name for this workstation cluster",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--enable-http2",
              description:
                "Enable or disable HTTP/2 for the workstation cluster",
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
            optNoAsync,
            {
              name: "--no-clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
              hidden: true,
            },
            {
              name: "--no-enable-http2",
              description:
                "Enable or disable HTTP/2 for the workstation cluster",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion,
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
            {
              name: "--workstation-authorization-url",
              description: "The redirect URL for unauthorized requests",
              args: {
                name: "WORKSTATION_AUTHORIZATION_URL",
                description: "String",
              },
            },
            {
              name: "--workstation-launch-url",
              description: "The launch URL for workstations",
              args: {
                name: "WORKSTATION_LAUNCH_URL",
                description: "String",
              },
            },
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster",
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
      name: "configs",
      description: "Manage Cloud Workstations configuration resources",
      subcommands: [
        {
          name: "create",
          description: "Create a workstation configuration",
          options: [
            {
              name: "--accelerator-count",
              description:
                "The number of accelerator cards exposed to the instance",
              priority: 100,
              args: {
                name: "ACCELERATOR_COUNT",
                description: "Int",
              },
            },
            {
              name: "--accelerator-type",
              description:
                'The type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100"',
              args: {
                name: "ACCELERATOR_TYPE",
                description: "String",
              },
            },
            optAccessTokenFile,
            optAccount,
            {
              name: "--allowed-ports",
              description:
                "A Single or Range of ports externally accessible in the workstation. If not specified defaults to ports 22, 80 and ports 1024-65535",
              args: {
                name: "ALLOWED_PORTS",
                description: "Dict",
              },
            },
            optAsync,
            optBillingProject,
            {
              name: "--boot-disk-size",
              description: "Size of the boot disk in GB",
              args: {
                name: "BOOT_DISK_SIZE",
                description: "Int",
              },
            },
            optCluster,
            optConfiguration,
            {
              name: "--container-args",
              description: "Arguments passed to the entrypoint",
              args: {
                name: "CONTAINER_ARGS",
                description: "List",
              },
            },
            {
              name: "--container-command",
              description:
                "If set, overrides the default ENTRYPOINT specified by the image",
              args: {
                name: "CONTAINER_COMMAND",
                description: "List",
              },
            },
            {
              name: "--container-custom-image",
              description:
                "A docker image for the workstation. This image must be accessible by the service account configured in this configuration (--service-account). If no service account is defined, this image must be public",
              args: {
                name: "CONTAINER_CUSTOM_IMAGE",
                description: "String",
              },
            },
            {
              name: "--container-env",
              description: "Environment variables passed to the container",
              args: {
                name: "CONTAINER_ENV",
                description: "Dict",
              },
            },
            {
              name: "--container-predefined-image",
              description:
                "Code editor on base images. _CONTAINER_PREDEFINED_IMAGE_ must be one of:",
              args: {
                name: "CONTAINER_PREDEFINED_IMAGE",
                description: "String",
                suggestions: [
                  "base-image",
                  "clion",
                  "codeoss",
                  "codeoss-cuda",
                  "goland",
                  "intellij",
                  "phpstorm",
                  "pycharm",
                  "rider",
                  "rubymine",
                  "webstorm",
                ],
              },
            },
            {
              name: "--container-run-as-user",
              description:
                "If set, overrides the USER specified in the image with the given uid",
              args: {
                name: "CONTAINER_RUN_AS_USER",
                description: "Int",
              },
            },
            {
              name: "--container-working-dir",
              description:
                "If set, overrides the default DIR specified by the image",
              args: {
                name: "CONTAINER_WORKING_DIR",
                description: "String",
              },
            },
            {
              name: "--disable-public-ip-addresses",
              description:
                "Default value is false. If set, instances will have no public IP address",
            },
            {
              name: "--disable-ssh-to-vm",
              description:
                "(DEPRECATED) Default value is False. If set, workstations disable SSH connections to the root VM",
              deprecated: true,
            },
            {
              name: "--disable-tcp-connections",
              description:
                "Default value is false. If set, workstations don't allow plain TCP connections",
            },
            {
              name: "--disk-archive-timeout",
              description:
                "Number of seconds to wait after initially creating or subsequently shutting down the workstation before converting its disk into a snapshot to save costs. A value of 0 indicates that the disk will never be archived",
              args: {
                name: "DISK_ARCHIVE_TIMEOUT",
                description: "Int",
              },
            },
            {
              name: "--disk-reclaim-policy",
              description:
                "What should happen to the disk after the Workstation is deleted. _DISK_RECLAIM_POLICY_ must be one of:",
              args: {
                name: "DISK_RECLAIM_POLICY",
                description: "String",
                suggestions: ["delete", "retain"],
              },
            },
            {
              name: "--disk-size",
              description:
                "Size of the persistent directory in GB. _DISK_SIZE_ must be one of: *10*, *50*, *100*, *200*, *500*, *1000*",
              args: {
                name: "DISK_SIZE",
                description: "Int",
                suggestions: ["10", "50", "100", "200", "500", "1000"],
              },
            },
            {
              name: "--disk-source-snapshot",
              description:
                "Name of the snapshot to use as the source for the home disk",
              args: {
                name: "DISK_SOURCE_SNAPSHOT",
                description: "String",
              },
            },
            {
              name: "--disk-type",
              description:
                "Type of the persistent directory. _DISK_TYPE_ must be one of: *pd-standard*, *pd-balanced*, *pd-ssd*, *hyperdisk-balanced-ha*",
              args: {
                name: "DISK_TYPE",
                description: "String",
                suggestions: [
                  "pd-standard",
                  "pd-balanced",
                  "pd-ssd",
                  "hyperdisk-balanced-ha",
                ],
              },
            },
            {
              name: "--enable-audit-agent",
              description:
                "Whether to enable Linux `auditd` logging on the workstation. When enabled, a service account must also be specified that has `logging.buckets.write` permission on the project",
            },
            {
              name: "--enable-confidential-compute",
              description:
                "Default value is false. If set, instances will have confidential compute enabled",
            },
            {
              name: "--enable-nested-virtualization",
              description:
                "Default value is false. If set, instances will have nested virtualization enabled",
            },
            {
              name: "--enable-ssh-to-vm",
              description:
                "Default value is False. If set, workstations enable SSH connections to the root VM",
            },
            {
              name: "--ephemeral-directory",
              description:
                "Ephemeral directory which won't persist across workstation sessions. An ephemeral directory is backed by a Compute Engine persistent disk whose mount-path, source-snapshot, source-image, and read-only are configurable",
              args: {
                name: "PROPERTY=VALUE",
                description: "Dict",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--grant-workstation-admin-role-on-create",
              description:
                "Default value is false. If set, creator of a workstation will get `roles/workstations.policyAdmin` role along with `roles/workstations.user` role on the workstation created by them",
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--idle-timeout",
              description:
                "How long (in seconds) to wait before automatically stopping an instance that hasn't received any user traffic. A value of 0 indicates that this instance should never time out due to idleness",
              args: {
                name: "IDLE_TIMEOUT",
                description: "Int",
              },
            },
            optImpersonateServiceAccount,
            {
              name: "--instance-metadata",
              description:
                "Custom metadata to apply to Compute Engine instances",
              args: {
                name: "INSTANCE_METADATA",
                description: "Dict",
              },
            },
            {
              name: "--kms-key",
              description:
                "The customer-managed encryption key to use for this config. If not specified, a Google-managed encryption key is used",
              priority: 100,
              args: {
                name: "KMS_KEY",
                description: "String",
              },
            },
            {
              name: "--kms-key-service-account",
              description:
                "The service account associated with the provided customer-managed encryption key",
              args: {
                name: "KMS_KEY_SERVICE_ACCOUNT",
                description: "String",
              },
            },
            {
              name: "--labels",
              description:
                "Labels that are applied to the configuration and propagated to the underlying Compute Engine resources",
              args: {
                name: "LABELS",
                description: "Dict",
              },
            },
            optLogHttp,
            {
              name: "--machine-type",
              description:
                "Machine type determines the specifications of the Compute Engine machines that the workstations created under this configuration will run on",
              args: {
                name: "MACHINE_TYPE",
                description: "String",
              },
            },
            {
              name: "--max-usable-workstations-count",
              description:
                "Maximum number of workstations under this configuration a user can have `workstations.workstation.use` permission on",
              args: {
                name: "MAX_USABLE_WORKSTATIONS_COUNT",
                description: "Int",
              },
            },
            {
              name: "--network-tags",
              description:
                "Network tags to add to the Google Compute Engine machines backing the Workstations",
              args: {
                name: "NETWORK_TAGS",
                description: "List",
              },
            },
            optNoAsync,
            {
              name: "--no-disable-public-ip-addresses",
              description:
                "Default value is false. If set, instances will have no public IP address",
              hidden: true,
            },
            {
              name: "--no-disable-ssh-to-vm",
              description:
                "(DEPRECATED) Default value is False. If set, workstations disable SSH connections to the root VM",
              hidden: true,
              deprecated: true,
            },
            {
              name: "--no-disable-tcp-connections",
              description:
                "Default value is false. If set, workstations don't allow plain TCP connections",
              hidden: true,
            },
            {
              name: "--no-enable-audit-agent",
              description:
                "Whether to enable Linux `auditd` logging on the workstation. When enabled, a service account must also be specified that has `logging.buckets.write` permission on the project",
              hidden: true,
            },
            {
              name: "--no-enable-confidential-compute",
              description:
                "Default value is false. If set, instances will have confidential compute enabled",
              hidden: true,
            },
            {
              name: "--no-enable-nested-virtualization",
              description:
                "Default value is false. If set, instances will have nested virtualization enabled",
              hidden: true,
            },
            {
              name: "--no-enable-ssh-to-vm",
              description:
                "Default value is False. If set, workstations enable SSH connections to the root VM",
              hidden: true,
            },
            {
              name: "--no-grant-workstation-admin-role-on-create",
              description:
                "Default value is false. If set, creator of a workstation will get `roles/workstations.policyAdmin` role along with `roles/workstations.user` role on the workstation created by them",
              hidden: true,
            },
            {
              name: "--no-persistent-storage",
              description:
                "If set, workstations under this configuration will not have a persistent directory",
            },
            {
              name: "--no-shielded-integrity-monitoring",
              description:
                "Default value is false. If set, instances will have integrity monitoring enabled",
              hidden: true,
            },
            {
              name: "--no-shielded-secure-boot",
              description:
                "Default value is false. If set, instances will have Secure Boot enabled",
              hidden: true,
            },
            {
              name: "--no-shielded-vtpm",
              description:
                "Default value is false. If set, instances will have vTPM enabled",
              hidden: true,
            },
            {
              name: "--pd-disk-size",
              description:
                "Size of the persistent directory in GB. _PD_DISK_SIZE_ must be one of: *10*, *50*, *100*, *200*, *500*, *1000*",
              args: {
                name: "PD_DISK_SIZE",
                description: "Int",
                suggestions: ["10", "50", "100", "200", "500", "1000"],
              },
            },
            {
              name: "--pd-disk-type",
              description:
                "Type of the persistent directory. _PD_DISK_TYPE_ must be one of: *pd-standard*, *pd-balanced*, *pd-ssd*",
              args: {
                name: "PD_DISK_TYPE",
                description: "String",
                suggestions: ["pd-standard", "pd-balanced", "pd-ssd"],
              },
            },
            {
              name: "--pd-reclaim-policy",
              description:
                "What should happen to the disk after the Workstation is deleted. _PD_RECLAIM_POLICY_ must be one of:",
              args: {
                name: "PD_RECLAIM_POLICY",
                description: "String",
                suggestions: ["delete", "retain"],
              },
            },
            {
              name: "--pd-source-snapshot",
              description:
                "Name of the snapshot to use as the source for the home disk",
              args: {
                name: "PD_SOURCE_SNAPSHOT",
                description: "String",
              },
            },
            {
              name: "--pool-size",
              description:
                "Number of instances to pool for faster Workstation startup",
              args: {
                name: "POOL_SIZE",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
            optRegion4,
            {
              name: "--replica-zones",
              description:
                "Specifies the zones the VM and disk resources will be replicated within the region. If set, exactly two zones within the workstation cluster's region must be specified",
              args: {
                name: "REPLICA_ZONES",
                description: "List",
              },
            },
            {
              name: "--running-timeout",
              description:
                "How long (in seconds) to wait before automatically stopping a workstation after it started. A value of 0 indicates that workstations using this config should never time out",
              args: {
                name: "RUNNING_TIMEOUT",
                description: "Int",
              },
            },
            {
              name: "--service-account",
              description:
                "Email address of the service account that will be used on VM instances used to support this config. This service account must have permission to pull the specified container image. If not set, VMs will run without a service account, in which case the image must be publicly accessible",
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
              },
            },
            {
              name: "--service-account-scopes",
              description:
                "Scopes to grant to the service_account. Various scopes are automatically added based on feature usage. When specified, users of workstations under this configuration must have iam.serviceAccounts.actAs` on the service account",
              args: {
                name: "SERVICE_ACCOUNT_SCOPES",
                description: "List",
              },
            },
            {
              name: "--shielded-integrity-monitoring",
              description:
                "Default value is false. If set, instances will have integrity monitoring enabled",
            },
            {
              name: "--shielded-secure-boot",
              description:
                "Default value is false. If set, instances will have Secure Boot enabled",
            },
            {
              name: "--shielded-vtpm",
              description:
                "Default value is false. If set, instances will have vTPM enabled",
            },
            {
              name: "--startup-script-uri",
              description:
                "Link to the startup script stored in Cloud Storage. The script is executed on the workstation VM after it is booted",
              args: {
                name: "STARTUP_SCRIPT_URI",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--vm-tags",
              description:
                "Resource manager tags to be bound to the instance. Tag keys and values have the same definition as https://cloud.google.com/resource-manager/docs/tags/tags-overview",
              args: {
                name: "VM_TAGS",
                description: "Dict",
              },
            },
          ],
          args: {
            name: "CONFIG",
            description:
              "ID of the config or fully qualified identifier for the config",
          },
        },
        {
          name: "delete",
          description: "Delete a workstation configuration",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optCluster3,
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
            name: "CONFIG",
            description:
              "ID of the config or fully qualified identifier for the config",
          },
        },
        {
          name: "describe",
          description: "Describe a config",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster3,
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
            name: "CONFIG",
            description:
              "ID of the config or fully qualified identifier for the config",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a configuration",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster3,
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
            name: "CONFIG",
            description:
              "ID of the config or fully qualified identifier for the config",
          },
        },
        {
          name: "list",
          description: "List workstation configurations",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--cluster",
              description:
                "ID of the cluster or fully qualified identifier for the cluster",
              args: {
                name: "CLUSTER",
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
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a configuration",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster3,
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
              name: "CONFIG",
              description:
                "ID of the config or fully qualified identifier for the config",
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
          description: "Updates a workstation configuration",
          options: [
            {
              name: "--accelerator-count",
              description:
                "The number of accelerator cards exposed to the instance",
              priority: 100,
              args: {
                name: "ACCELERATOR_COUNT",
                description: "Int",
              },
            },
            {
              name: "--accelerator-type",
              description:
                'The type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100"',
              args: {
                name: "ACCELERATOR_TYPE",
                description: "String",
              },
            },
            optAccessTokenFile,
            optAccount,
            {
              name: "--allowed-ports",
              description:
                "A Single or Range of ports externally accessible in the workstation. If not specified defaults to ports 22, 80 and ports 1024-65535",
              args: {
                name: "ALLOWED_PORTS",
                description: "Dict",
              },
            },
            optAsync,
            optBillingProject,
            {
              name: "--boot-disk-size",
              description: "Size of the boot disk in GB",
              args: {
                name: "BOOT_DISK_SIZE",
                description: "Int",
              },
            },
            optCluster,
            optConfiguration,
            {
              name: "--container-args",
              description: "Arguments passed to the entrypoint",
              args: {
                name: "CONTAINER_ARGS",
                description: "List",
              },
            },
            {
              name: "--container-command",
              description:
                "If set, overrides the default ENTRYPOINT specified by the image",
              args: {
                name: "CONTAINER_COMMAND",
                description: "List",
              },
            },
            {
              name: "--container-custom-image",
              description:
                "A docker image for the workstation. This image must be accessible by the service account configured in this configuration (--service-account). If no service account is defined, this image must be public",
              args: {
                name: "CONTAINER_CUSTOM_IMAGE",
                description: "String",
              },
            },
            {
              name: "--container-env",
              description: "Environment variables passed to the container",
              args: {
                name: "CONTAINER_ENV",
                description: "Dict",
              },
            },
            {
              name: "--container-predefined-image",
              description:
                "Code editor on base images. _CONTAINER_PREDEFINED_IMAGE_ must be one of:",
              args: {
                name: "CONTAINER_PREDEFINED_IMAGE",
                description: "String",
                suggestions: [
                  "base-image",
                  "clion",
                  "codeoss",
                  "codeoss-cuda",
                  "goland",
                  "intellij",
                  "phpstorm",
                  "pycharm",
                  "rider",
                  "rubymine",
                  "webstorm",
                ],
              },
            },
            {
              name: "--container-run-as-user",
              description:
                "If set, overrides the USER specified in the image with the given uid",
              args: {
                name: "CONTAINER_RUN_AS_USER",
                description: "Int",
              },
            },
            {
              name: "--container-working-dir",
              description:
                "If set, overrides the default DIR specified by the image",
              args: {
                name: "CONTAINER_WORKING_DIR",
                description: "String",
              },
            },
            {
              name: "--disable-public-ip-addresses",
              description:
                "Default value is false. If set, instances will have no public IP address",
            },
            {
              name: "--disable-ssh-to-vm",
              description:
                "If set, workstations disable SSH connections to the root VM",
            },
            {
              name: "--disable-tcp-connections",
              description:
                "If set, workstations don't allow plain TCP connections",
            },
            {
              name: "--disk-archive-timeout",
              description:
                "Number of seconds to wait after initially creating or subsequently shutting down the workstation before converting its disk into a snapshot to save costs. A value of 0 indicates that the disk will never be archived",
              args: {
                name: "DISK_ARCHIVE_TIMEOUT",
                description: "Int",
              },
            },
            {
              name: "--disk-size",
              description:
                "Size of the persistent directory in GB. _DISK_SIZE_ must be one of: *10*, *50*, *100*, *200*, *500*, *1000*",
              args: {
                name: "DISK_SIZE",
                description: "Int",
                suggestions: ["10", "50", "100", "200", "500", "1000"],
              },
            },
            {
              name: "--disk-source-snapshot",
              description:
                "Name of the snapshot to use as the source for the home disk",
              args: {
                name: "DISK_SOURCE_SNAPSHOT",
                description: "String",
              },
            },
            {
              name: "--disk-type",
              description:
                "Type of the persistent directory. _DISK_TYPE_ must be one of: *pd-standard*, *pd-balanced*, *pd-ssd*, *hyperdisk-balanced-ha*",
              args: {
                name: "DISK_TYPE",
                description: "String",
                suggestions: [
                  "pd-standard",
                  "pd-balanced",
                  "pd-ssd",
                  "hyperdisk-balanced-ha",
                ],
              },
            },
            {
              name: "--enable-audit-agent",
              description:
                "Whether to enable Linux `auditd` logging on the workstation. When enabled, a service account must also be specified that has `logging.buckets.write` permission on the project",
            },
            {
              name: "--enable-confidential-compute",
              description:
                "Default value is false. If set, instances will have confidential compute enabled",
            },
            {
              name: "--enable-nested-virtualization",
              description:
                "Default value is false. If set, instances will have nested virtualization enabled",
            },
            {
              name: "--enable-ssh-to-vm",
              description:
                "If set, workstations enable SSH connections to the root VM",
            },
            {
              name: "--enable-tcp-connections",
              description: "If set, workstations allow plain TCP connections",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--grant-workstation-admin-role-on-create",
              description:
                "Default value is false. If set, creator of a workstation will get `roles/workstations.policyAdmin` role along with `roles/workstations.user` role on the workstation created by them",
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--idle-timeout",
              description:
                "How long (in seconds) to wait before automatically stopping an instance that hasn't received any user traffic. A value of 0 indicates that this instance should never time out due to idleness",
              args: {
                name: "IDLE_TIMEOUT",
                description: "Int",
              },
            },
            optImpersonateServiceAccount,
            {
              name: "--instance-metadata",
              description:
                "Custom metadata to apply to Compute Engine instances",
              args: {
                name: "INSTANCE_METADATA",
                description: "Dict",
              },
            },
            {
              name: "--labels",
              description:
                "Labels that are applied to the configuration and propagated to the underlying Compute Engine resources",
              args: {
                name: "LABELS",
                description: "Dict",
              },
            },
            optLogHttp,
            {
              name: "--machine-type",
              description:
                "Machine type determines the specifications of the Compute Engine machines that the workstations created under this configuration will run on",
              args: {
                name: "MACHINE_TYPE",
                description: "String",
              },
            },
            {
              name: "--max-usable-workstations-count",
              description:
                "Maximum number of workstations under this configuration a user can have `workstations.workstation.use` permission on",
              args: {
                name: "MAX_USABLE_WORKSTATIONS_COUNT",
                description: "Int",
              },
            },
            {
              name: "--network-tags",
              description:
                "Network tags to add to the Google Compute Engine machines backing the Workstations",
              args: {
                name: "NETWORK_TAGS",
                description: "List",
              },
            },
            optNoAsync,
            {
              name: "--no-disable-public-ip-addresses",
              description:
                "Default value is false. If set, instances will have no public IP address",
              hidden: true,
            },
            {
              name: "--no-disable-ssh-to-vm",
              description:
                "If set, workstations disable SSH connections to the root VM",
              hidden: true,
            },
            {
              name: "--no-disable-tcp-connections",
              description:
                "If set, workstations don't allow plain TCP connections",
              hidden: true,
            },
            {
              name: "--no-enable-audit-agent",
              description:
                "Whether to enable Linux `auditd` logging on the workstation. When enabled, a service account must also be specified that has `logging.buckets.write` permission on the project",
              hidden: true,
            },
            {
              name: "--no-enable-confidential-compute",
              description:
                "Default value is false. If set, instances will have confidential compute enabled",
              hidden: true,
            },
            {
              name: "--no-enable-nested-virtualization",
              description:
                "Default value is false. If set, instances will have nested virtualization enabled",
              hidden: true,
            },
            {
              name: "--no-enable-ssh-to-vm",
              description:
                "If set, workstations enable SSH connections to the root VM",
              hidden: true,
            },
            {
              name: "--no-enable-tcp-connections",
              description: "If set, workstations allow plain TCP connections",
              hidden: true,
            },
            {
              name: "--no-grant-workstation-admin-role-on-create",
              description:
                "Default value is false. If set, creator of a workstation will get `roles/workstations.policyAdmin` role along with `roles/workstations.user` role on the workstation created by them",
              hidden: true,
            },
            {
              name: "--no-shielded-integrity-monitoring",
              description:
                "Default value is false. If set, instances will have integrity monitoring enabled",
              hidden: true,
            },
            {
              name: "--no-shielded-secure-boot",
              description:
                "Default value is false. If set, instances will have Secure Boot enabled",
              hidden: true,
            },
            {
              name: "--no-shielded-vtpm",
              description:
                "Default value is false. If set, instances will have vTPM enabled",
              hidden: true,
            },
            {
              name: "--pd-disk-size",
              description:
                "Size of the persistent directory in GB. _PD_DISK_SIZE_ must be one of: *10*, *50*, *100*, *200*, *500*, *1000*",
              args: {
                name: "PD_DISK_SIZE",
                description: "Int",
                suggestions: ["10", "50", "100", "200", "500", "1000"],
              },
            },
            {
              name: "--pd-disk-type",
              description:
                "Type of the persistent directory. _PD_DISK_TYPE_ must be one of: *pd-standard*, *pd-balanced*, *pd-ssd*",
              args: {
                name: "PD_DISK_TYPE",
                description: "String",
                suggestions: ["pd-standard", "pd-balanced", "pd-ssd"],
              },
            },
            {
              name: "--pd-source-snapshot",
              description:
                "Name of the snapshot to use as the source for the persistent directory",
              args: {
                name: "PD_SOURCE_SNAPSHOT",
                description: "String",
              },
            },
            {
              name: "--pool-size",
              description:
                "Number of instances to pool for faster Workstation startup",
              args: {
                name: "POOL_SIZE",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
            optRegion4,
            {
              name: "--running-timeout",
              description:
                "How long (in seconds) to wait before automatically stopping a workstation after it started. A value of 0 indicates that workstations using this config should never time out",
              args: {
                name: "RUNNING_TIMEOUT",
                description: "Int",
              },
            },
            {
              name: "--service-account",
              description:
                "Email address of the service account that will be used on VM instances used to support this config. This service account must have permission to pull the specified container image. If not set, VMs will run without a service account, in which case the image must be publicly accessible",
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
              },
            },
            {
              name: "--service-account-scopes",
              description:
                "Scopes to grant to the service_account. Various scopes are automatically added based on feature usage. When specified, users of workstations under this configuration must have iam.serviceAccounts.actAs` on the service account",
              args: {
                name: "SERVICE_ACCOUNT_SCOPES",
                description: "List",
              },
            },
            {
              name: "--shielded-integrity-monitoring",
              description:
                "Default value is false. If set, instances will have integrity monitoring enabled",
            },
            {
              name: "--shielded-secure-boot",
              description:
                "Default value is false. If set, instances will have Secure Boot enabled",
            },
            {
              name: "--shielded-vtpm",
              description:
                "Default value is false. If set, instances will have vTPM enabled",
            },
            {
              name: "--startup-script-uri",
              description:
                "Link to the startup script stored in Cloud Storage. The script is executed on the workstation VM after it is booted",
              args: {
                name: "STARTUP_SCRIPT_URI",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--vm-tags",
              description:
                "Resource manager tags to be bound to the instance. Tag keys and values have the same definition as https://cloud.google.com/resource-manager/docs/tags/tags-overview",
              args: {
                name: "VM_TAGS",
                description: "Dict",
              },
            },
          ],
          args: {
            name: "CONFIG",
            description:
              "ID of the config or fully qualified identifier for the config",
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
      name: "create",
      description: "Create a workstation",
      options: [
        optAccessTokenFile,
        optAccount,
        optAsync,
        optBillingProject,
        optCluster4,
        optConfig2,
        optConfiguration,
        {
          name: "--env",
          description: "Environment variables passed to the Workstation",
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
        {
          name: "--labels",
          description:
            "Labels that are applied to the workstation and propagated to the underlying Compute Engine resources",
          args: {
            name: "KEY=VALUE",
            description: "Dict",
          },
        },
        optLogHttp,
        optNoAsync,
        optProject,
        optQuiet,
        optRegion3,
        {
          name: "--source-workstation",
          description:
            "Source workstation from which this workstations persistent directories are cloned on creation. When specified, the workstations service agent must have `compute.disks.createSnapshot` and `compute.snapshots.useReadOnly` permissions on the source workstation's host project",
          args: {
            name: "SOURCE_WORKSTATION",
            description: "String",
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "WORKSTATION",
        description:
          "ID of the workstation or fully qualified identifier for the workstation",
      },
    },
    {
      name: "delete",
      description: "Delete a workstation",
      options: [
        optAccessTokenFile,
        optAccount,
        optAsync,
        optBillingProject,
        optCluster4,
        optConfig2,
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
        name: "WORKSTATION",
        description:
          "ID of the workstation or fully qualified identifier for the workstation",
      },
    },
    {
      name: "describe",
      description: "Describe a workstation",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optCluster4,
        optConfig2,
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
        name: "WORKSTATION",
        description:
          "ID of the workstation or fully qualified identifier for the workstation",
      },
    },
    {
      name: "get-iam-policy",
      description: "Get the IAM policy for a workstation",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optCluster4,
        optConfig2,
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
        optRegion3,
        optSortBy,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "WORKSTATION",
        description:
          "ID of the workstation or fully qualified identifier for the workstation",
      },
    },
    {
      name: "list",
      description: "List workstations",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optCluster3,
        {
          name: "--config",
          description:
            "ID of the config or fully qualified identifier for the config",
          args: {
            name: "CONFIG",
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
    },
    {
      name: "list-usable",
      description: "List usable workstations",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optCluster,
        {
          name: "--config",
          description:
            "ID of the config or fully qualified identifier for the config",
          args: {
            name: "CONFIG",
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
        optLogHttp,
        optPageSize,
        optProject,
        optQuiet,
        optRegion4,
        optSortBy,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "set-iam-policy",
      description: "Set the IAM policy for a workstation",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optCluster4,
        optConfig2,
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
      args: [
        {
          name: "WORKSTATION",
          description:
            "ID of the workstation or fully qualified identifier for the workstation",
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
      name: "ssh",
      description: "SSH into a running workstation",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optCluster2,
        {
          name: "--command",
          description: "A command to run on the workstation",
          args: {
            name: "COMMAND",
            description: "String",
          },
        },
        optConfig,
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
          name: "--local-host-port",
          description:
            "`LOCAL_HOST:LOCAL_PORT` on which gcloud should bind and listen for connections that should be tunneled",
          args: {
            name: "LOCAL_HOST_PORT",
          },
        },
        optLogHttp,
        {
          name: "--no-start-workstation",
          description:
            "If set, automatically starts the workstation if it is currently stopped",
          hidden: true,
        },
        {
          name: "--port",
          description:
            "The port on the workstation to which traffic should be sent",
          args: {
            name: "PORT",
            description: "Int",
          },
        },
        optProject,
        optQuiet,
        optRegion5,
        {
          name: "--ssh-flag",
          description:
            "Additional flags to be passed to *ssh(1)*. It is recommended that flags be passed using an assignment operator and quotes. Example:",
          args: {
            name: "SSH_FLAG",
            description: "String",
          },
        },
        {
          name: "--start-workstation",
          description:
            "If set, automatically starts the workstation if it is currently stopped",
        },
        optTraceToken,
        {
          name: "--user",
          description: "The username with which to SSH",
          args: {
            name: "USER",
            description: "String",
          },
        },
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: [
        {
          name: "WORKSTATION",
          description:
            "ID of the workstation or fully qualified identifier for the workstation",
        },
        {
          name: "SSH_ARGS",
          description:
            "Flags and positionals passed to the underlying ssh implementation",
          isVariadic: true,
          isOptional: true,
        },
      ],
    },
    {
      name: "start",
      description: "Start a workstation",
      options: [
        optAccessTokenFile,
        optAccount,
        optAsync,
        optBillingProject,
        optCluster2,
        optConfig,
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
        optRegion5,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "WORKSTATION",
        description:
          "ID of the workstation or fully qualified identifier for the workstation",
      },
    },
    {
      name: "start-tcp-tunnel",
      description:
        "Start a tunnel through which a local process can forward TCP traffic to the workstation",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optCluster2,
        optConfig,
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
          name: "--local-host-port",
          description:
            "`LOCAL_HOST:LOCAL_PORT` on which gcloud should bind and listen for connections that should be tunneled",
          args: {
            name: "LOCAL_HOST_PORT",
          },
        },
        optLogHttp,
        {
          name: "--no-start-workstation",
          description:
            "If set, automatically starts the workstation if it is currently stopped",
          hidden: true,
        },
        optProject,
        optQuiet,
        optRegion5,
        {
          name: "--start-workstation",
          description:
            "If set, automatically starts the workstation if it is currently stopped",
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: [
        {
          name: "WORKSTATION",
          description:
            "ID of the workstation or fully qualified identifier for the workstation",
        },
        {
          name: "WORKSTATION_PORT",
          description:
            "The port on the workstation to which traffic should be sent",
        },
      ],
    },
    {
      name: "stop",
      description: "Stop a workstation",
      options: [
        optAccessTokenFile,
        optAccount,
        optAsync,
        optBillingProject,
        optCluster2,
        optConfig,
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
        optRegion5,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "WORKSTATION",
        description:
          "ID of the workstation or fully qualified identifier for the workstation",
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
};

export default completionSpec;
