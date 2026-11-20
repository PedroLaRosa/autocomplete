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

const optInstance: Fig.Option = {
  name: "--instance",
  description: "Name of the Filestore instance the snapshot belongs to",
  priority: 100,
  args: {
    name: "INSTANCE",
    description: "String",
  },
};

const optInstanceLocation: Fig.Option = {
  name: "--instance-location",
  description: "Location of the Filestore instance",
  args: {
    name: "INSTANCE_LOCATION",
    description: "String",
  },
};

const optInstanceRegion: Fig.Option = {
  name: "--instance-region",
  description: "Region of the Filestore instance",
  args: {
    name: "INSTANCE_REGION",
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
  description: "Location of the Cloud Filestore instance/operation",
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
  description: "Region of the Cloud Filestore instance",
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

const optZone: Fig.Option = {
  name: "--zone",
  description: "The zone of the Filestore instance",
  args: {
    name: "ZONE",
    description: "String",
  },
};

const optZone2: Fig.Option = {
  name: "--zone",
  description: "The zone of the instance",
  args: {
    name: "ZONE",
    description: "String",
  },
};

const completionSpec: Fig.Spec = {
  name: "filestore",
  description: "Create and manipulate Filestore resources",
  subcommands: [
    {
      name: "backups",
      description: "Create and manage Filestore backups",
      subcommands: [
        {
          name: "create",
          description: "Create a Filestore backup",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Description for the backup. Limit: 2048 characters",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--file-share",
              description:
                "File share name on the Filestore instance to backup",
              priority: 100,
              args: {
                name: "FILE_SHARE",
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
              name: "--instance",
              description:
                "Share name of the Filestore instance you want to backup",
              priority: 100,
              args: {
                name: "INSTANCE",
                description: "String",
              },
            },
            {
              name: "--instance-location",
              description: "Region of the Filestore instance",
              args: {
                name: "INSTANCE_LOCATION",
                description: "String",
              },
            },
            {
              name: "--instance-zone",
              description: "Zone of the Filestore instance",
              args: {
                name: "INSTANCE_ZONE",
                description: "String",
              },
            },
            {
              name: "--kms-key",
              description:
                "CMEK for backup in the form of `projects/{project}/locations/{location}/keyRings/{key-ring}/cryptoKeys/{crypto-key}`",
              args: {
                name: "KMS_KEY",
                description: "String",
              },
            },
            {
              name: "--labels",
              description: "List of label KEY=VALUE pairs to add",
              args: {
                name: "KEY=VALUE",
              },
            },
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--region",
              description: "Region (e.g. us-central1) for the backup",
              priority: 100,
              args: {
                name: "REGION",
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
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP",
            description:
              "Arguments and flags that specify the Filestore backup you want to create",
          },
        },
        {
          name: "delete",
          description: "Delete a Filestore backup",
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
              description: "Compute region (e.g. us-central1) for the backup",
              priority: 100,
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
            name: "BACKUP",
            description:
              "Arguments and flags that specify the Filestore backup you want to delete",
          },
        },
        {
          name: "describe",
          description: "Describe a Filestore backup",
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
              description: "Region (e.g. us-central1) for the backup",
              priority: 100,
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
            name: "BACKUP",
            description:
              "Arguments and flags that specify the Filestore backup you want to create",
          },
        },
        {
          name: "list",
          description: "List Filestore backups",
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
            {
              name: "--region",
              description:
                "The region of the Backups to display. If unspecified, all backups will be listed",
              args: {
                name: "REGION",
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
          name: "update",
          description: "Update a Filestore backup",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optClearLabels,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the backup",
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
            optNoAsync,
            optNoClearLabels,
            optProject,
            optQuiet,
            {
              name: "--region",
              description: "Compute region (e.g. us-central1) for the backup",
              priority: 100,
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optRemoveLabels,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP",
            description:
              "Arguments and flags that specify the Filestore backup you want to update",
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
      name: "instances",
      description: "Create and manage Filestore instances",
      subcommands: [
        {
          name: "create",
          description: "Create a Filestore instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--deletion-protection",
              description: "Enables deletion protection for the instance",
              priority: 100,
            },
            {
              name: "--deletion-protection-reason",
              description:
                "The reason for enabling deletion protection for the instance",
              args: {
                name: "DELETION_PROTECTION_REASON",
                description: "String",
              },
            },
            {
              name: "--description",
              description: "A description of the Cloud Filestore instance",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--file-share",
              description:
                "File share configuration for an instance. Specifying both `name` and `capacity` is required",
              priority: 100,
              args: {
                name: "FILE_SHARE",
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
              description: "List of label KEY=VALUE pairs to add",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--ldap",
              description:
                "LDAP configuration for an instance. Specifies the domain name, servers, users-ou, and groups-ou to be created by the filestore instance. users-ou and groups-ou are optional",
              hidden: true,
              args: {
                name: "^:^domain=DOMAIN:servers=SERVER1,SERVER2:users-ou=USERSOU:groups-ou=GROUPSOU",
                description: "Dict",
              },
            },
            optLocation,
            optLogHttp,
            {
              name: "--network",
              description:
                "Network configuration for a Cloud Filestore instance. Specifying `reserved-ip-range`, `address-mode` and `connect-mode` is optional. *name*::: The name of the Google Compute Engine [VPC network](/compute/docs/networks-and-firewalls#networks) to which the instance is connected. *reserved-ip-range*::: The `reserved-ip-range` can have one of the following two types of values: a CIDR range value when using DIRECT_PEERING connect mode or an allocated IP address range (https://cloud.google.com/compute/docs/ip-addresses/reserve-static-internal-ip-address) when using PRIVATE_SERVICE_ACCESS connect mode. When the name of an allocated IP address range is specified, it must be one of the ranges associated with the private service access connection. When specified as a direct CIDR value, it must be a /29 CIDR block for Basic tier or a /24 CIDR block for High Scale, Zonal, Enterprise or Regional tier in one of the internal IP address ranges (https://www.arin.net/knowledge/address_filters.html) that identifies the range of IP addresses reserved for this instance. For example, 10.0.0.0/29 or 192.168.0.0/24. The range you specify can't overlap with either existing subnets or assigned IP address ranges for other Cloud Filestore instances in the selected VPC network. *connect-mode*::: Network connection mode used by instances. CONNECT_MODE must be one of: DIRECT_PEERING, PRIVATE_SERVICE_ACCESS or PRIVATE_SERVICE_CONNECT. *address-mode*::: Internet protocol version for which the instance has IP address assigned. *psc-endpoint-project*::: Consumer service project in which the psc endpoint would be set up. This is optional, and only relevant in case the network is a shared VPC. If this is not specified, the psc endpoint would be setup in the VPC host project",
              priority: 100,
              args: {
                name: "NETWORK",
                description: "Dict",
              },
            },
            optNoAsync,
            {
              name: "--no-deletion-protection",
              description: "Enables deletion protection for the instance",
              hidden: true,
              priority: 100,
            },
            {
              name: "--performance",
              description:
                "Performance configuration for the instance. This flag is used to configure the read IOPS provisioned for the instance. The instance's write IOPS and read/write throughputs will be derived from the configured read IOPS. For more information about the derived performance limits and default performance see: https://cloud.google.com/filestore/docs/performance. Must be one of:",
              args: {
                name: "PERFORMANCE",
                description: "Dict",
              },
            },
            optProject,
            {
              name: "--protocol",
              description:
                "The service protocol for the Cloud Filestore instance. _PROTOCOL_ must be one of:",
              args: {
                name: "PROTOCOL",
                suggestions: ["nfs-v3", "nfs-v4-1"],
              },
            },
            optQuiet,
            optRegion,
            {
              name: "--source-instance",
              description:
                "The replication source instance of the Cloud Filestore instance",
              args: {
                name: "SOURCE_INSTANCE",
                description: "String",
              },
            },
            {
              name: "--tags",
              description:
                "List of tags KEY=VALUE pairs to bind. Each item must be expressed as `<tag-key-namespaced-name>=<tag-value-short-name>`",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--tier",
              description:
                "The service tier for the Cloud Filestore instance. For more details, see: https://cloud.google.com/filestore/docs/instance-tiers",
              args: {
                name: "TIER",
                suggestions: [
                  "basic-hdd",
                  "basic-ssd",
                  "enterprise",
                  "high-scale-ssd",
                  "premium",
                  "regional",
                  "standard",
                  "zonal",
                ],
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optZone2,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "delete",
          description: "Delete a Filestore instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--force",
              description:
                "Forces the deletion of an instance and its child resources, such as snapshots",
            },
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
              name: "--no-force",
              description:
                "Forces the deletion of an instance and its child resources, such as snapshots",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optZone2,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "describe",
          description: "Show metadata for a Filestore instance",
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
            optRegion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optZone2,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "list",
          description: "List Filestore instances",
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
            optRegion,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--zone",
              description:
                "ID of the zone or fully qualified identifier for the zone",
              args: {
                name: "ZONE",
                description: "String",
              },
            },
          ],
        },
        {
          name: "pause-replica",
          description: "Pause a Filestore replica instance",
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
              description: "Location of the Filestore instance to pause",
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
            optZone,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "promote-replica",
          description: "Promote a Filestore standby replication instance",
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
              description: "Location of the Filestore instance to promote",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optNoAsync,
            {
              name: "--peer-instance",
              description: "The name of the standby peer instance to promote",
              args: {
                name: "PEER_INSTANCE",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optZone,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "restore",
          description: "Restore a Filestore instance from a backup",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--file-share",
              description: "File share to restore from the backup",
              priority: 100,
              args: {
                name: "FILE_SHARE",
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
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--source-backup",
              description: "Name of the Filestore backup to restore from",
              priority: 100,
              args: {
                name: "SOURCE_BACKUP",
                description: "String",
              },
            },
            {
              name: "--source-backup-region",
              description: "Region of the Filestore backup to restore from",
              priority: 100,
              args: {
                name: "SOURCE_BACKUP_REGION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optZone,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "resume-replica",
          description: "Resume a Filestore replica instance",
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
              description: "Location of the Filestore instance to resume",
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
            optZone,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "revert",
          description: "Revert a Filestore instance",
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
              description: "The location of the Filestore instance",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--target-snapshot",
              description: "Name of the Filestore snapshot to revert to",
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
          name: "snapshots",
          description: "Create and manage Filestore snapshots",
          subcommands: [
            {
              name: "create",
              description: "Create a Filestore snapshot",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description:
                    "Description of the snapshot. Limit: 2048 characters",
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
                  name: "--instance",
                  description:
                    "Name of the Filestore instance that you want to create a snapshot of",
                  priority: 100,
                  args: {
                    name: "INSTANCE",
                    description: "String",
                  },
                },
                optInstanceLocation,
                optInstanceRegion,
                {
                  name: "--labels",
                  description: "List of label KEY=VALUE pairs to add",
                  args: {
                    name: "KEY=VALUE",
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
                name: "SNAPSHOT",
                description: "Name of the Filestore snapshot to be created",
              },
            },
            {
              name: "delete",
              description: "Delete a Filestore snapshot",
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
                optInstance,
                optInstanceLocation,
                optInstanceRegion,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SNAPSHOT",
                description: "Name of the Filestore snapshot to be deleted",
              },
            },
            {
              name: "describe",
              description: "Display information about a Filestore snapshot",
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
                optInstance,
                optInstanceLocation,
                optInstanceRegion,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SNAPSHOT",
                description:
                  "Name of the Filestore snapshot to display information about",
              },
            },
            {
              name: "list",
              description: "List Filestore snapshots",
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
                optInstance,
                optInstanceLocation,
                optInstanceRegion,
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
              name: "update",
              description:
                "Update the description or labels of a Filestore snapshot",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optClearLabels,
                optConfiguration,
                {
                  name: "--description",
                  description: "Description of the snapshot",
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
                optInstance,
                optInstanceLocation,
                optInstanceRegion,
                optLogHttp,
                optNoAsync,
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
                name: "SNAPSHOT",
                description: "Name of the Filestore snapshot to be updated",
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
          name: "update",
          description: "Update a Filestore instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optClearLabels,
            {
              name: "--clear-nfs-export-options",
              description:
                "Clears the NfsExportOptions. Must specify `--file-share` flag if --clear-nfs-export-options is specified",
            },
            optConfiguration,
            {
              name: "--deletion-protection",
              description:
                "Enables deletion protection for the instance. Use *--deletion-protection* to enable and *--no-deletion-protection* to disable",
            },
            {
              name: "--deletion-protection-reason",
              description:
                "The reason for enabling deletion protection for the instance",
              args: {
                name: "DELETION_PROTECTION_REASON",
                description: "String",
              },
            },
            {
              name: "--description",
              description: "A description of the Cloud Filestore instance",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--disconnect-ldap",
              description: "Disconnect the instance from LDAP",
              hidden: true,
            },
            {
              name: "--file-share",
              description:
                "File share configuration for an instance. Specifying both `name` and `capacity` is required",
              priority: 100,
              args: {
                name: "FILE_SHARE",
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
              name: "--ldap",
              description:
                "LDAP configuration for an instance. Specifies the domain name, servers, users-ou, and groups-ou to be created by the filestore instance. users-ou and groups-ou are optional",
              hidden: true,
              args: {
                name: "^:^domain=DOMAIN:servers=SERVER1,SERVER2:users-ou=USERSOU:groups-ou=GROUPSOU",
                description: "Dict",
              },
            },
            optLocation,
            optLogHttp,
            optNoAsync,
            optNoClearLabels,
            {
              name: "--no-clear-nfs-export-options",
              description:
                "Clears the NfsExportOptions. Must specify `--file-share` flag if --clear-nfs-export-options is specified",
              hidden: true,
            },
            {
              name: "--no-deletion-protection",
              description: "Enables deletion protection for the instance",
            },
            {
              name: "--no-disconnect-ldap",
              description: "Disconnect the instance from LDAP",
              hidden: true,
            },
            {
              name: "--performance",
              description:
                "Performance configuration for the instance. This flag is used to configure the read IOPS provisioned for the instance. The instance's write IOPS and read/write throughputs will be derived from the configured read IOPS. For more information about the derived performance limits and default performance see: https://cloud.google.com/filestore/docs/performance. Must be one of:",
              args: {
                name: "PERFORMANCE",
                description: "Dict",
              },
            },
            optProject,
            optQuiet,
            optRegion,
            optRemoveLabels,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
            optZone2,
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
      description: "List locations where Filestore is available",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Filestore location",
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
            name: "ZONE",
            description:
              "ID of the zone or fully qualified identifier for the zone",
          },
        },
        {
          name: "list",
          description: "List all Filestore locations",
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
      description: "Read and manipulate Filestore operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a Filestore operation",
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
            {
              name: "--zone",
              description: "The zone of the operation",
              args: {
                name: "ZONE",
                description: "String",
              },
            },
          ],
          args: {
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "describe",
          description: "Describe a Filestore operation",
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
            {
              name: "--zone",
              description: "The zone of the operation",
              args: {
                name: "ZONE",
                description: "String",
              },
            },
          ],
          args: {
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "list",
          description: "List all Filestore operations",
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
            {
              name: "--zone",
              description:
                "ID of the zone or fully qualified identifier for the zone",
              args: {
                name: "ZONE",
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
      name: "regions",
      description: "List regions where Filestore is available",
      subcommands: [
        {
          name: "list",
          description: "List all Filestore regions",
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
      name: "zones",
      description: "List zones where Filestore is available",
      subcommands: [
        {
          name: "list",
          description: "List all Filestore zones",
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
};

export default completionSpec;
