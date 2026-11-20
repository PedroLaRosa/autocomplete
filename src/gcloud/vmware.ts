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
    "Return immediately, without waiting for the operation in progress to complete. The default is *True*. Enabled by default, use *--no-async* to disable",
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
    "ID of the location or fully qualified identifier for the location",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation2: Fig.Option = {
  name: "--location",
  description: "Location of the private cloud or cluster",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description: "The resource name of the location",
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

const optNetworkPolicy: Fig.Option = {
  name: "--network-policy",
  description: "VMware Engine network policy",
  args: {
    name: "NETWORK_POLICY",
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

const optPrivateCloud: Fig.Option = {
  name: "--private-cloud",
  description:
    "ID of the private cloud or fully qualified identifier for the private cloud",
  priority: 100,
  args: {
    name: "PRIVATE_CLOUD",
    description: "String",
  },
};

const optPrivateCloud2: Fig.Option = {
  name: "--private-cloud",
  description: "VMware Engine private cloud",
  args: {
    name: "PRIVATE_CLOUD",
    description: "String",
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
  name: "vmware",
  description: "Manage Google Cloud VMware Engine resources",
  subcommands: [
    {
      name: "announcements",
      description: "Manage announcements in Google Cloud VMware Engine",
      subcommands: [
        {
          name: "list",
          description: "List announcements in a Google Cloud VMware Engine",
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
            {
              name: "--type",
              description:
                "The type of announcement to list. _TYPE_ must be (only one value is supported): *maintenance*",
              priority: 100,
              args: {
                name: "TYPE",
                description: "String",
                suggestions: ["maintenance"],
              },
            },
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
      name: "datastores",
      description:
        "Manage VMware Engine datastores in Google Cloud VMware Engine",
      subcommands: [
        {
          name: "create",
          description: "Create a datastore",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Text describing the datastore",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--filestore",
              description: "Google Filestore instance to be used as datastore",
              args: {
                name: "FILESTORE",
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
            optLocation2,
            optLogHttp,
            {
              name: "--netapp",
              description: "Google NetApp volume to be used as datastore",
              args: {
                name: "NETAPP",
                description: "String",
              },
            },
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--third-party-nfs-file-share",
              description: "Mount folder name of NFS",
              priority: 100,
              args: {
                name: "THIRD_PARTY_NFS_FILE_SHARE",
                description: "String",
              },
            },
            {
              name: "--third-party-nfs-network",
              description: "Network name of NFS's VPC",
              priority: 100,
              args: {
                name: "THIRD_PARTY_NFS_NETWORK",
                description: "String",
              },
            },
            {
              name: "--third-party-nfs-servers",
              description:
                "Comma-separated list of server IP addresses of the NFS file service",
              priority: 100,
              args: {
                name: "SERVER",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DATASTORE",
            description:
              "ID of the datastore or fully qualified identifier for the datastore",
          },
        },
        {
          name: "delete",
          description: "Delete a datastore",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--etag",
              description: "Etag of the datastore",
              args: {
                name: "ETAG",
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
            name: "DATASTORE",
            description:
              "ID of the datastore or fully qualified identifier for the datastore",
          },
        },
        {
          name: "describe",
          description: "Describe a datastore",
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
            name: "DATASTORE",
            description:
              "ID of the datastore or fully qualified identifier for the datastore",
          },
        },
        {
          name: "list",
          description: "List datastores",
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
          name: "update",
          description: "Update a datastore",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "New description for the datastore",
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
            name: "DATASTORE",
            description:
              "ID of the datastore or fully qualified identifier for the datastore",
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
      name: "dns-bind-permission",
      description:
        "Manage DNS binding permission in Google Cloud VMware Engine",
      subcommands: [
        {
          name: "describe",
          description:
            "Get all users and service accounts having bind permission",
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
          name: "grant",
          description: "Grants a DNS Bind Permission",
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
              name: "--service-account",
              description:
                "The consumer provided service account which needs to be granted permission to bind with the intranet VPC corresponding to the consumer project. If this field is not provided then the user should be provided",
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--user",
              description:
                "The consumer provided user which needs to be granted permission to bind with the intranet VPC corresponding to the consumer project. If this field is not provided then the service-account should be provided",
              args: {
                name: "USER",
                description: "String",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "revoke",
          description: "Revokes a DNS Bind Permission",
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
              name: "--service-account",
              description:
                "The consumer provided service account whose permission needs to be revoked on the intranet VPC corresponding to the consumer project. If this field is not provided then the user should be provided",
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--user",
              description:
                "The consumer provided user whose permission needs to be revoked on the intranet VPC corresponding to the consumer project. If this field is not provided then the service-account should be provided",
              args: {
                name: "USER",
                description: "String",
              },
            },
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
      description: "List locations in Google Cloud VMware Engine",
      subcommands: [
        {
          name: "list",
          description: "List Google Cloud VMware Engine locations",
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
      name: "network-peerings",
      description:
        "Manage VMware Engine VPC peering using Google Cloud VMware Engine",
      subcommands: [
        {
          name: "create",
          description: "Create a VMware Engine VPC network peering",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description:
                "User-provided description of the VPC network peering",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--exchange-subnet-routes",
              description:
                "True if full-mesh connectivity is created and managed automatically between peered VPC networks; false otherwise. This field is always true because Google Compute Engine automatically creates and manages subnetwork routes between two VPC networks when the peering state is ACTIVE. Enabled by default, use *--no-exchange-subnet-routes* to disable",
            },
            {
              name: "--export-custom-routes",
              description:
                "True if custom routes are exported to the peered VPC network; false otherwise. The default value is true. Enabled by default, use *--no-export-custom-routes* to disable",
            },
            {
              name: "--export-custom-routes-with-public-ip",
              description:
                "True if all subnet routes with public IP address range are exported; false otherwise. The default value is true. Enabled by default, use *--no-export-custom-routes-with-public-ip* to disable",
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
              name: "--import-custom-routes",
              description:
                "True if custom routes are imported to the peered VPC network; false otherwise. The default value is true. Enabled by default, use *--no-import-custom-routes* to disable",
            },
            {
              name: "--import-custom-routes-with-public-ip",
              description:
                "True if all subnet routes with public IP address range are imported; false otherwise. The default value is true. Enabled by default, use *--no-import-custom-routes-with-public-ip* to disable",
            },
            optLocation3,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-exchange-subnet-routes",
              description:
                "True if full-mesh connectivity is created and managed automatically between peered VPC networks; false otherwise. This field is always true because Google Compute Engine automatically creates and manages subnetwork routes between two VPC networks when the peering state is ACTIVE",
              hidden: true,
            },
            {
              name: "--no-export-custom-routes",
              description:
                "True if custom routes are exported to the peered VPC network; false otherwise. The default value is true",
              hidden: true,
            },
            {
              name: "--no-export-custom-routes-with-public-ip",
              description:
                "True if all subnet routes with public IP address range are exported; false otherwise. The default value is true",
              hidden: true,
            },
            {
              name: "--no-import-custom-routes",
              description:
                "True if custom routes are imported to the peered VPC network; false otherwise. The default value is true",
              hidden: true,
            },
            {
              name: "--no-import-custom-routes-with-public-ip",
              description:
                "True if all subnet routes with public IP address range are imported; false otherwise. The default value is true",
              hidden: true,
            },
            {
              name: "--peer-mtu",
              description: "Maximum transmission unit (MTU) in bytes",
              args: {
                name: "PEER_MTU",
              },
            },
            {
              name: "--peer-network",
              description:
                "ID of the network to peer with the VMware Engine network. The peer network can be a consumer VPC network or another VMware Engine network",
              priority: 100,
              args: {
                name: "PEER_NETWORK",
                description: "String",
              },
            },
            {
              name: "--peer-network-type",
              description:
                "Type of the VPC network to peer with the VMware Engine network. PEER_NETWORK_TYPE must be one of the following: * STANDARD: Peering connection used for connecting to another VPC network established by the same user. For example, a peering connection to another VPC network in the same project or to an on-premises network. * VMWARE_ENGINE_NETWORK: Peering connection used for connecting to another VMware Engine network. * PRIVATE_SERVICES_ACCESS: Peering connection used for establishing private services access. * NETAPP_CLOUD_VOLUMES: Peering connection used for connecting to NetApp Cloud Volumes. * THIRD_PARTY_SERVICE: Peering connection used for connecting to third-party services. Most third-party services require manual setup of reverse peering on the VPC network associated with the third-party service. * DELL_POWERSCALE: Peering connection used for connecting to Dell PowerScale Filers. * GOOGLE_CLOUD_NETAPP_VOLUMES: Peering connection used for connecting to Google Cloud NetApp Volumes. _PEER_NETWORK_TYPE_ must be one of: *PEER_NETWORK_TYPE_UNSPECIFIED*, *STANDARD*, *VMWARE_ENGINE_NETWORK*, *PRIVATE_SERVICES_ACCESS*, *NETAPP_CLOUD_VOLUMES*, *THIRD_PARTY_SERVICE*, *DELL_POWERSCALE*, *GOOGLE_CLOUD_NETAPP_VOLUMES*",
              priority: 100,
              args: {
                name: "PEER_NETWORK_TYPE",
                description: "String",
                suggestions: [
                  "PEER_NETWORK_TYPE_UNSPECIFIED",
                  "STANDARD",
                  "VMWARE_ENGINE_NETWORK",
                  "PRIVATE_SERVICES_ACCESS",
                  "NETAPP_CLOUD_VOLUMES",
                  "THIRD_PARTY_SERVICE",
                  "DELL_POWERSCALE",
                  "GOOGLE_CLOUD_NETAPP_VOLUMES",
                ],
              },
            },
            {
              name: "--peer-project",
              description:
                "Project ID or project number of the peer network. Use this flag when the peer network is in another project",
              args: {
                name: "PEER_PROJECT",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--vmware-engine-network",
              description:
                "ID of the VMware Engine network to attach the new peering to",
              priority: 100,
              args: {
                name: "VMWARE_ENGINE_NETWORK",
                description: "String",
              },
            },
            {
              name: "--vmware-engine-network-project",
              description:
                "Project of the VMware Engine network to attach the new peering to. Use this flag when the VMware Engine network is in another project",
              args: {
                name: "VMWARE_ENGINE_NETWORK_PROJECT",
                description: "String",
              },
            },
          ],
          args: {
            name: "NETWORK_PEERING",
            description:
              "ID of the VMware Engine VPC network peering or fully qualified identifier for the VMware Engine VPC network peering",
          },
        },
        {
          name: "delete",
          description:
            "Delete a Google Cloud VMware Engine VPC network peering",
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
            optLocation3,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "NETWORK_PEERING",
            description:
              "ID of the VMware Engine VPC network peering or fully qualified identifier for the VMware Engine VPC network peering",
          },
        },
        {
          name: "describe",
          description:
            "Describe a Google Cloud VMware Engine VPC network peering",
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
          args: {
            name: "NETWORK_PEERING",
            description:
              "ID of the VMware Engine VPC network peering or fully qualified identifier for the VMware Engine VPC network peering",
          },
        },
        {
          name: "list",
          description: "List Google Cloud VMware Engine VPC network peerings",
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
          name: "routes",
          description:
            "Manage VMware Engine VPC peering routes using Google Cloud VMware Engine",
          subcommands: [
            {
              name: "list",
              description:
                "List Google Cloud VMware Engine VPC network peering routes",
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
                {
                  name: "--network-peering",
                  description:
                    "ID of the VMware Engine VPC network peering or fully qualified identifier for the VMware Engine VPC network peering",
                  priority: 100,
                  args: {
                    name: "NETWORK_PEERING",
                    description: "String",
                  },
                },
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
          name: "update",
          description:
            "Update a Google Cloud VMware Engine VPC network peering",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Updated description for this VPC network peering",
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
            optLocation3,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "NETWORK_PEERING",
            description:
              "ID of the VMware Engine VPC network peering or fully qualified identifier for the VMware Engine VPC network peering",
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
      name: "network-policies",
      description:
        "Manage VMware Engine network policies in Google Cloud VMware Engine",
      subcommands: [
        {
          name: "create",
          description: "Create a VMware Engine network policy",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "User-provided description of the network policy",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--edge-services-cidr",
              description:
                'IP address range to use for internet access and external IP access gateways, in CIDR notation. An RFC 1918 CIDR block with a "/26" prefix is required',
              priority: 100,
              args: {
                name: "EDGE_SERVICES_CIDR",
                description: "String",
              },
            },
            {
              name: "--external-ip-access",
              description:
                "Enable or disable network service that allows external IP addresses to be assigned to VMware workloads. To enable this service, `internet-access` must also be enabled. Use `--no-external-ip-access` to disable. If the flag is not provided, access to VMware workloads through external IP addresses is disabled",
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
              name: "--internet-access",
              description:
                "Enable or disable network service that allows VMware workloads to access the internet. Use `--no-internet-access` to disable. If the flag is not provided, internet access is disabled",
            },
            optLocation3,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-external-ip-access",
              description:
                "Enable or disable network service that allows external IP addresses to be assigned to VMware workloads. To enable this service, `internet-access` must also be enabled. Use `--no-external-ip-access` to disable. If the flag is not provided, access to VMware workloads through external IP addresses is disabled",
              hidden: true,
            },
            {
              name: "--no-internet-access",
              description:
                "Enable or disable network service that allows VMware workloads to access the internet. Use `--no-internet-access` to disable. If the flag is not provided, internet access is disabled",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--vmware-engine-network",
              description:
                "Resource ID of the VMware Engine network to attach the new policy to",
              priority: 100,
              args: {
                name: "VMWARE_ENGINE_NETWORK",
                description: "String",
              },
            },
          ],
          args: {
            name: "NETWORK_POLICY",
            description:
              "ID of the VMware Engine Network Policy or fully qualified identifier for the VMware Engine Network Policy",
          },
        },
        {
          name: "delete",
          description: "Delete a VMware Engine network policy",
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
            optLocation3,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "NETWORK_POLICY",
            description:
              "ID of the VMware Engine Network Policy or fully qualified identifier for the VMware Engine Network Policy",
          },
        },
        {
          name: "describe",
          description: "Describe a VMware Engine network policy",
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
          args: {
            name: "NETWORK_POLICY",
            description:
              "ID of the VMware Engine Network Policy or fully qualified identifier for the VMware Engine Network Policy",
          },
        },
        {
          name: "external-access-rules",
          description:
            "Manage VMware Engine external access firewall rules in Google Cloud VMware Engine",
          subcommands: [
            {
              name: "create",
              description:
                "Create a VMware Engine external access firewall rule",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--action",
                  description:
                    "Whether the firewall rule allows or denies traffic based on a successful rule match. By default, the action is ALLOW. _ACTION_ must be one of: *ALLOW*, *DENY*",
                  args: {
                    name: "ACTION",
                    description: "String",
                    suggestions: ["ALLOW", "DENY"],
                  },
                },
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description:
                    "User-provided description of the external access rule",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--destination-ports",
                  description:
                    "List of allowed destination ports. Each entry must be either an integer or a range",
                  args: {
                    name: "DESTINATION_PORTS",
                    description: "List",
                  },
                },
                {
                  name: "--destination-ranges",
                  description:
                    "A list of destination IP addresses that the rule applies to. Each entry in the list can be an ExternalAddress resource name or `0.0.0.0/0`. When the value is set to `0.0.0.0/0`, all IP addresses are allowed",
                  priority: 100,
                  args: {
                    name: "DESTINATION_IP_RANGES",
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
                  name: "--ip-protocol",
                  description:
                    "Internet protocol covered by the rule. Valid values are TCP, UDP, and ICMP. _IP_PROTOCOL_ must be one of: *TCP*, *UDP*, *ICMP*",
                  priority: 100,
                  args: {
                    name: "IP_PROTOCOL",
                    description: "String",
                    suggestions: ["TCP", "UDP", "ICMP"],
                  },
                },
                optLocation3,
                optLogHttp,
                optNetworkPolicy,
                optNoAsync,
                {
                  name: "--priority",
                  description:
                    "Priority of this external access rule. Valid values are numbers between 100 and 4096, with 100 being the highest priority. Firewall rules are processed from highest to lowest priority",
                  priority: 100,
                  args: {
                    name: "PRIORITY",
                  },
                },
                optProject,
                optQuiet,
                {
                  name: "--source-ports",
                  description:
                    "List of allowed source ports. Each entry must be either an integer or a range",
                  args: {
                    name: "SOURCE_PORTS",
                    description: "List",
                  },
                },
                {
                  name: "--source-ranges",
                  description:
                    "A list of source IP addresses that the rule applies to. Each entry in the list can be a CIDR notation or a single IP address. When the value is set to `0.0.0.0/0`, all IP addresses are allowed",
                  priority: 100,
                  args: {
                    name: "SOURCE_IP_RANGES",
                    description: "List",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "EXTERNAL_ACCESS_RULE",
                description:
                  "ID of the VMware Engine External Access Rule or fully qualified identifier for the VMware Engine External Access Rule",
              },
            },
            {
              name: "delete",
              description: "Delete a VMware Engine external access rule",
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
                optLocation3,
                optLogHttp,
                optNetworkPolicy,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "EXTERNAL_ACCESS_RULE",
                description:
                  "ID of the VMware Engine External Access Rule or fully qualified identifier for the VMware Engine External Access Rule",
              },
            },
            {
              name: "describe",
              description: "Describe a VMware Engine external access rule",
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
                optNetworkPolicy,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "EXTERNAL_ACCESS_RULE",
                description:
                  "ID of the VMware Engine External Access Rule or fully qualified identifier for the VMware Engine External Access Rule",
              },
            },
            {
              name: "list",
              description: "List VMware Engine external access rules",
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
                {
                  name: "--network-policy",
                  description:
                    "ID of the VMware Engine Network Policy or fully qualified identifier for the VMware Engine Network Policy",
                  priority: 100,
                  args: {
                    name: "NETWORK_POLICY",
                    description: "String",
                  },
                },
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
              description: "Update a VMware Engine network policy",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--action",
                  description:
                    "Whether the firewall rule allows or denies traffic based on a successful rule match. _ACTION_ must be one of: *ALLOW*, *DENY*",
                  args: {
                    name: "ACTION",
                    description: "String",
                    suggestions: ["ALLOW", "DENY"],
                  },
                },
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description:
                    "User-provided description of the external access rule",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--destination-ports",
                  description:
                    "List of allowed destination ports. Each entry must be either an integer or a range",
                  args: {
                    name: "DESTINATION_PORTS",
                    description: "List",
                  },
                },
                {
                  name: "--destination-ranges",
                  description:
                    "A list of destination IP addresses that the rule applies to. Each entry in the list be an ExternalAddress resource name or `0.0.0.0/0`. When the value is set to `0.0.0.0/0`, all IP addresses are allowed",
                  args: {
                    name: "DESTINATION_IP_RANGES",
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
                  name: "--ip-protocol",
                  description:
                    "Internet protocol covered by the rule. Valid values are TCP, UDP, and ICMP. _IP_PROTOCOL_ must be one of: *TCP*, *UDP*, *ICMP*",
                  args: {
                    name: "IP_PROTOCOL",
                    description: "String",
                    suggestions: ["TCP", "UDP", "ICMP"],
                  },
                },
                optLocation3,
                optLogHttp,
                optNetworkPolicy,
                optNoAsync,
                {
                  name: "--priority",
                  description:
                    "Priority of this external access rule. Valid values are numbers between 100 and 4096, with 100 being the highest priority. Firewall rules are processed from highest to lowest priority",
                  args: {
                    name: "PRIORITY",
                  },
                },
                optProject,
                optQuiet,
                {
                  name: "--source-ports",
                  description:
                    "List of allowed source ports. Each entry must be either an integer or a range",
                  args: {
                    name: "SOURCE_PORTS",
                    description: "List",
                  },
                },
                {
                  name: "--source-ranges",
                  description:
                    "A list of source IP addresses that the rule applies to. Each entry in the list can be a CIDR notation or a single IP address. When the value is set to `0.0.0.0/0`, all IP addresses are allowed",
                  args: {
                    name: "SOURCE_IP_RANGES",
                    description: "List",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "EXTERNAL_ACCESS_RULE",
                description:
                  "ID of the VMware Engine External Access Rule or fully qualified identifier for the VMware Engine External Access Rule",
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
          description: "List VMware Engine network policies",
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
          name: "update",
          description: "Update a VMware Engine network policy",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Updated description for the network policy",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--edge-services-cidr",
              description:
                "Updated IP address range to use for internet access and external IP access gateways, in CIDR notation",
              args: {
                name: "EDGE_SERVICES_CIDR",
                description: "String",
              },
            },
            {
              name: "--external-ip-access",
              description:
                "Enable or disable network service that allows external IP addresses to be assigned to VMware workloads. To enable this service, `internet-access` must also be enabled. Use `--no-external-ip-access` to disable",
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
              name: "--internet-access",
              description:
                "Enable or disable network service that allows VMware workloads to access the internet. Use `--no-internet-access` to disable",
            },
            optLocation3,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-external-ip-access",
              description:
                "Enable or disable network service that allows external IP addresses to be assigned to VMware workloads. To enable this service, `internet-access` must also be enabled. Use `--no-external-ip-access` to disable",
              hidden: true,
            },
            {
              name: "--no-internet-access",
              description:
                "Enable or disable network service that allows VMware workloads to access the internet. Use `--no-internet-access` to disable",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "NETWORK_POLICY",
            description:
              "ID of the VMware Engine Network Policy or fully qualified identifier for the VMware Engine Network Policy",
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
      name: "networks",
      description:
        "Manage VMware Engine networks in Google Cloud VMware Engine",
      subcommands: [
        {
          name: "create",
          description: "Create a Google Cloud VMware Engine network",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Text describing the VMware Engine network",
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
            optLocation3,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            {
              name: "--type",
              description:
                "Type of the VMware Engine network. _TYPE_ must be one of:",
              priority: 100,
              args: {
                name: "TYPE",
                description: "String",
                suggestions: ["LEGACY", "STANDARD"],
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VMWARE_ENGINE_NETWORK",
            description:
              "ID of the VMware Engine network or fully qualified identifier for the VMware Engine network",
          },
        },
        {
          name: "delete",
          description: "Delete a Google Cloud VMware Engine network",
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
            optLocation3,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VMWARE_ENGINE_NETWORK",
            description:
              "ID of the VMware Engine network or fully qualified identifier for the VMware Engine network",
          },
        },
        {
          name: "describe",
          description: "Describe a Google Cloud VMware Engine network",
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
          args: {
            name: "VMWARE_ENGINE_NETWORK",
            description:
              "ID of the VMware Engine network or fully qualified identifier for the VMware Engine network",
          },
        },
        {
          name: "list",
          description: "List Google Cloud VMware Engine networks",
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
          name: "update",
          description: "Update a Google Cloud VMware Engine network",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Text describing the VMware Engine network",
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
            optLocation3,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VMWARE_ENGINE_NETWORK",
            description:
              "ID of the VMware Engine network or fully qualified identifier for the VMware Engine network",
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
      name: "node-types",
      description: "Show node types in Google Cloud VMware Engine",
      subcommands: [
        {
          name: "describe",
          description:
            "Display data associated with a Google Cloud VMware Engine node type",
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
            name: "NODE_TYPE",
            description:
              "ID of the node type or fully qualified identifier for the node type",
          },
        },
        {
          name: "list",
          description: "List supported Google Cloud VMware Engine node types",
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
      description: "List and describe operations in Google Cloud VMware Engine",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Google Cloud VMware Engine operation",
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "list",
          description: "List Google Cloud VMware Engine operations",
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
      name: "private-clouds",
      description: "Manage private clouds in Google Cloud VMware Engine",
      subcommands: [
        {
          name: "clusters",
          description: "Manage clusters in Google Cloud VMware Engine",
          subcommands: [
            {
              name: "create",
              description: "Create a Google Cloud VMware Engine cluster",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                {
                  name: "--autoscaling-cool-down-period",
                  description:
                    "Cool down period (in minutes) between consecutive cluster expansions/contractions",
                  hidden: true,
                  args: {
                    name: "AUTOSCALING_COOL_DOWN_PERIOD",
                    description: "String",
                  },
                },
                {
                  name: "--autoscaling-max-cluster-node-count",
                  description: "Maximum number of nodes in the cluster",
                  hidden: true,
                  args: {
                    name: "AUTOSCALING_MAX_CLUSTER_NODE_COUNT",
                    description: "Int",
                  },
                },
                {
                  name: "--autoscaling-min-cluster-node-count",
                  description: "Minimum number of nodes in the cluster",
                  hidden: true,
                  args: {
                    name: "AUTOSCALING_MIN_CLUSTER_NODE_COUNT",
                    description: "Int",
                  },
                },
                {
                  name: "--autoscaling-policy",
                  description:
                    "Autoscaling policy to be applied to the cluster",
                  hidden: true,
                  args: {
                    name: "AUTOSCALING_POLICY",
                    description: "Dict",
                  },
                },
                {
                  name: "--autoscaling-settings-from-file",
                  description:
                    "A YAML file containing the autoscaling settings to be applied to the cluster",
                  hidden: true,
                  args: {
                    name: "AUTOSCALING_SETTINGS_FROM_FILE",
                    template: "filepaths",
                  },
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
                optLocation2,
                optLogHttp,
                optNoAsync,
                {
                  name: "--node-type-config",
                  description:
                    "Information about the type and number of nodes associated with the cluster",
                  priority: 100,
                  args: {
                    name: "NODE_TYPE_CONFIG",
                    description: "Dict",
                  },
                },
                optPrivateCloud2,
                optProject,
                optQuiet,
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
              name: "delete",
              description: "Delete a Google Cloud VMware Engine cluster",
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
                optPrivateCloud2,
                optProject,
                optQuiet,
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
              description: "Describe a Google Cloud VMware Engine cluster",
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
                optPrivateCloud2,
                optProject,
                optQuiet,
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
              description:
                "List clusters in a Google Cloud VMware Engine private cloud",
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
                optNoUri,
                optPageSize,
                optPrivateCloud,
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
              name: "mount-datastore",
              description:
                "Mount a datastore to a Google Cloud VMware Engine cluster",
              options: [
                {
                  name: "--access-mode",
                  description:
                    "Access mode for the datastore. _ACCESS_MODE_ must be one of: *READ_WRITE*, *READ_ONLY*",
                  args: {
                    name: "ACCESS_MODE",
                    description: "String",
                    suggestions: ["READ_WRITE", "READ_ONLY"],
                  },
                },
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--connection-count",
                  description:
                    "Connection count for inlined datastore network configuration",
                  args: {
                    name: "CONNECTION_COUNT",
                    description: "Int",
                  },
                },
                {
                  name: "--datastore",
                  description: "The datastore resource name to mount",
                  priority: 100,
                  args: {
                    name: "DATASTORE",
                    description: "String",
                  },
                },
                {
                  name: "--datastore-network",
                  description:
                    "Path to a JSON file containing the datastore network configuration. Use a full or relative path to a local file containing the value of datastore_network",
                  args: {
                    name: "DATASTORE_NETWORK",
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
                {
                  name: "--ignore-colocation",
                  description: "If set, ignore colocation checks",
                },
                optImpersonateServiceAccount,
                optLocation2,
                optLogHttp,
                {
                  name: "--mtu",
                  description:
                    "MTU for inlined datastore network configuration",
                  args: {
                    name: "MTU",
                    description: "Int",
                  },
                },
                {
                  name: "--nfs-version",
                  description:
                    "NFS version for the datastore. _NFS_VERSION_ must be one of: *NFS_V3*, *NFS_V4*",
                  args: {
                    name: "NFS_VERSION",
                    description: "String",
                    suggestions: ["NFS_V3", "NFS_V4"],
                  },
                },
                optNoAsync,
                {
                  name: "--no-ignore-colocation",
                  description: "If set, ignore colocation checks",
                  hidden: true,
                },
                optPrivateCloud2,
                optProject,
                optQuiet,
                {
                  name: "--subnet",
                  description:
                    "Subnet to use for inlined datastore network configuration",
                  priority: 100,
                  args: {
                    name: "SUBNET",
                    description: "String",
                  },
                },
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
              name: "nodes",
              description: "Manage nodes in Google Cloud VMware Engine",
              subcommands: [
                {
                  name: "describe",
                  description: "Describe a Google Cloud VMware Engine node",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    {
                      name: "--cluster",
                      description: "Resource ID of the cluster",
                      args: {
                        name: "CLUSTER",
                        description: "String",
                      },
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
                    optLocation2,
                    optLogHttp,
                    optPrivateCloud2,
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "NODE",
                    description:
                      "ID of the node or fully qualified identifier for the node",
                  },
                },
                {
                  name: "list",
                  description:
                    "List nodes in a Google Cloud VMware Engine private cloud's cluster",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    {
                      name: "--cluster",
                      description:
                        "ID of the cluster or fully qualified identifier for the cluster",
                      priority: 100,
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
                    optLocation2,
                    optLogHttp,
                    optNoUri,
                    optPageSize,
                    optPrivateCloud2,
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
              name: "unmount-datastore",
              description:
                "Unmount a datastore from a Google Cloud VMware Engine cluster",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--datastore",
                  description: "The datastore resource name to unmount",
                  priority: 100,
                  args: {
                    name: "DATASTORE",
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
                optLocation2,
                optLogHttp,
                optNoAsync,
                optPrivateCloud2,
                optProject,
                optQuiet,
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
              name: "update",
              description: "Update a Google Cloud VMware Engine cluster",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                {
                  name: "--autoscaling-cool-down-period",
                  description:
                    "Cool down period (in minutes) between consecutive cluster expansions/contractions",
                  args: {
                    name: "AUTOSCALING_COOL_DOWN_PERIOD",
                    description: "String",
                  },
                },
                {
                  name: "--autoscaling-max-cluster-node-count",
                  description: "Maximum number of nodes in the cluster",
                  args: {
                    name: "AUTOSCALING_MAX_CLUSTER_NODE_COUNT",
                    description: "Int",
                  },
                },
                {
                  name: "--autoscaling-min-cluster-node-count",
                  description: "Minimum number of nodes in the cluster",
                  args: {
                    name: "AUTOSCALING_MIN_CLUSTER_NODE_COUNT",
                    description: "Int",
                  },
                },
                {
                  name: "--autoscaling-settings-from-file",
                  description:
                    "A YAML file containing the autoscaling settings to be applied to the cluster",
                  args: {
                    name: "AUTOSCALING_SETTINGS_FROM_FILE",
                    template: "filepaths",
                  },
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
                optLocation2,
                optLogHttp,
                optNoAsync,
                {
                  name: "--node-type-config",
                  description:
                    "(DEPRECATED) Information about the type and number of nodes associated with the cluster",
                  deprecated: true,
                  args: {
                    name: "count=COUNT,type=TYPE",
                    description: "Dict",
                  },
                },
                optPrivateCloud2,
                optProject,
                optQuiet,
                {
                  name: "--remove-autoscaling-policy",
                  description:
                    "Names of autoscaling policies that should be removed from the cluster",
                  args: {
                    name: "NAME",
                    description: "String",
                  },
                },
                {
                  name: "--remove-nodes-config",
                  description:
                    "Type of node that should be removed from the cluster",
                  args: {
                    name: "TYPE",
                    description: "String",
                  },
                },
                optTraceToken,
                {
                  name: "--update-autoscaling-policy",
                  description:
                    "Autoscaling policy to be applied to the cluster",
                  args: {
                    name: "UPDATE_AUTOSCALING_POLICY",
                    description: "Dict",
                  },
                },
                {
                  name: "--update-nodes-config",
                  description:
                    "Information about the type and number of nodes associated with the cluster",
                  args: {
                    name: "UPDATE_NODES_CONFIG",
                    description: "Dict",
                  },
                },
                optUserOutputEnabled,
                optVerbosity,
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
          name: "create",
          description: "Create a VMware Engine private cloud",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--autoscaling-cool-down-period",
              description:
                "Cool down period (in minutes) between consecutive cluster expansions/contractions",
              hidden: true,
              args: {
                name: "AUTOSCALING_COOL_DOWN_PERIOD",
                description: "String",
              },
            },
            {
              name: "--autoscaling-max-cluster-node-count",
              description: "Maximum number of nodes in the cluster",
              hidden: true,
              args: {
                name: "AUTOSCALING_MAX_CLUSTER_NODE_COUNT",
                description: "Int",
              },
            },
            {
              name: "--autoscaling-min-cluster-node-count",
              description: "Minimum number of nodes in the cluster",
              hidden: true,
              args: {
                name: "AUTOSCALING_MIN_CLUSTER_NODE_COUNT",
                description: "Int",
              },
            },
            {
              name: "--autoscaling-policy",
              description: "Autoscaling policy to be applied to the cluster",
              hidden: true,
              args: {
                name: "AUTOSCALING_POLICY",
                description: "Dict",
              },
            },
            {
              name: "--autoscaling-settings-from-file",
              description:
                "A YAML file containing the autoscaling settings to be applied to the cluster",
              hidden: true,
              args: {
                name: "AUTOSCALING_SETTINGS_FROM_FILE",
                template: "filepaths",
              },
            },
            optBillingProject,
            {
              name: "--cluster",
              description:
                "ID of the cluster or fully qualified identifier for the cluster",
              priority: 100,
              args: {
                name: "CLUSTER",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--description",
              description: "Text describing the private cloud",
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
              name: "--kms-key",
              description:
                "The KMS key to use for encryption of the private cloud. Format: projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}",
              hidden: true,
              args: {
                name: "KMS_KEY",
                description: "String",
              },
            },
            optLocation2,
            optLogHttp,
            {
              name: "--management-range",
              description:
                "IP address range in the private cloud to use for management appliances, in CIDR format. Use an IP address range that meets the [VMware Engine networking requirements](https://cloud.google.com/vmware-engine/docs/quickstart-networking-requirements)",
              priority: 100,
              args: {
                name: "MANAGEMENT_RANGE",
                description: "String",
              },
            },
            optNoAsync,
            {
              name: "--node-type-config",
              description:
                "Information about the type and number of nodes associated with the cluster",
              priority: 100,
              args: {
                name: "NODE_TYPE_CONFIG",
                description: "Dict",
              },
            },
            {
              name: "--preferred-zone",
              description:
                "Zone that will remain operational when connection between the two zones is lost. Specify the resource name of a zone that belongs to the region of the private cloud",
              args: {
                name: "PREFERRED_ZONE",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--secondary-zone",
              description:
                "Additional zone for a higher level of availability and load balancing. Specify the resource name of a zone that belongs to the region of the private cloud",
              args: {
                name: "SECONDARY_ZONE",
                description: "String",
              },
            },
            {
              name: "--service-subnet",
              description:
                "A non-overlapping CIDR range and prefix length for the service subnets. The service subnets are used for appliance or service deployment, such as storage, backup, disaster recovery, and media streaming",
              hidden: true,
              args: {
                name: "SERVICE_SUBNET",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--type",
              description: "Type of the private cloud. _TYPE_ must be one of:",
              args: {
                name: "TYPE",
                description: "String",
                suggestions: ["STANDARD", "STRETCHED", "TIME_LIMITED"],
              },
            },
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--vmware-engine-network",
              description:
                "Resource ID of the VMware Engine network attached to the private cloud",
              priority: 100,
              args: {
                name: "VMWARE_ENGINE_NETWORK",
                description: "String",
              },
            },
          ],
          args: {
            name: "PRIVATE_CLOUD",
            description:
              "ID of the private cloud or fully qualified identifier for the private cloud",
          },
        },
        {
          name: "delete",
          description: "Delete a Google Cloud VMware Engine private cloud",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--delay-hours",
              description:
                "Number of hours to wait before deleting the private cloud. Specifying a value of `0` for this field begins the deletion process immediately. _DELAY_HOURS_ must be one of: *0*, *1*, *2*, *3*, *4*, *5*, *6*, *7*, *8*",
              args: {
                name: "DELAY_HOURS",
                description: "Int",
                suggestions: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
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
            name: "PRIVATE_CLOUD",
            description:
              "ID of the private cloud or fully qualified identifier for the private cloud",
          },
        },
        {
          name: "delete-now",
          description:
            "Permanent deletion of a Google Cloud VMware Engine private cloud currently in soft-deleted state",
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
            name: "PRIVATE_CLOUD",
            description:
              "ID of the private cloud or fully qualified identifier for the private cloud",
          },
        },
        {
          name: "describe",
          description: "Describe a Google Cloud VMware Engine private cloud",
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
            name: "PRIVATE_CLOUD",
            description:
              "ID of the private cloud or fully qualified identifier for the private cloud",
          },
        },
        {
          name: "dns-forwarding",
          description: "Manage dns-forwarding in Google Cloud VMware Engine",
          subcommands: [
            {
              name: "describe",
              description:
                "Describe a Google Cloud VMware Engine dns-forwarding",
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
                optPrivateCloud,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "update",
              description: "Update a Google Cloud VMware Engine dns-forwarding",
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
                optPrivateCloud,
                optProject,
                optQuiet,
                {
                  name: "--rule",
                  description:
                    "Domain name and the name servers used to resolve DNS requests for this domain",
                  args: {
                    name: 'domain=DOMAIN,name-servers="NAME_SERVER1;NAME_SERVER2;NAME_SERVER3"',
                    description: "Dict",
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
          name: "external-addresses",
          description:
            "Manage external IP addresses in Google Cloud VMware Engine",
          subcommands: [
            {
              name: "create",
              description: "Create an external IP address",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description: "Text describing the external address",
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
                  name: "--internal-ip",
                  description:
                    "Internal ip address to which external address will be linked",
                  priority: 100,
                  args: {
                    name: "INTERNAL_IP",
                    description: "String",
                  },
                },
                optLocation2,
                optLogHttp,
                optNoAsync,
                optPrivateCloud2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "EXTERNAL_ADDRESS",
                description:
                  "ID of the external address or fully qualified identifier for the external address",
              },
            },
            {
              name: "delete",
              description:
                "Delete external IP address from a VMware Engine private cloud",
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
                optPrivateCloud2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "EXTERNAL_ADDRESS",
                description:
                  "ID of the external address or fully qualified identifier for the external address",
              },
            },
            {
              name: "describe",
              description:
                "Describe an external IP address in a VMware Engine private cloud",
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
                optPrivateCloud2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "EXTERNAL_ADDRESS",
                description:
                  "ID of the external address or fully qualified identifier for the external address",
              },
            },
            {
              name: "list",
              description:
                "List external IP addresses in a VMware Engine private cloud",
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
                optNoUri,
                optPageSize,
                optPrivateCloud,
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
                "Update an external IP address in a VMware Engine private cloud",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description: "Updated description for this external address",
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
                  name: "--internal-ip",
                  description:
                    "Updated internal ip address for this external address",
                  args: {
                    name: "INTERNAL_IP",
                    description: "String",
                  },
                },
                optLocation2,
                optLogHttp,
                optNoAsync,
                optPrivateCloud2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "EXTERNAL_ADDRESS",
                description:
                  "ID of the external address or fully qualified identifier for the external address",
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
          name: "hcx",
          description: "Manage HCX using Google Cloud VMware Engine",
          subcommands: [
            {
              name: "activationkeys",
              description:
                "Manage VMware HCX activation keys using Google Cloud VMware Engine",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a Google Cloud VMware HCX activation key",
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
                    optPrivateCloud2,
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "HCX_ACTIVATION_KEY",
                    description:
                      "ID of the HCX activation key or fully qualified identifier for the HCX activation key",
                  },
                },
                {
                  name: "describe",
                  description:
                    "Describe a Google Cloud VMware HCX activation key",
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
                    optPrivateCloud2,
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "HCX_ACTIVATION_KEY",
                    description:
                      "ID of the HCX activation key or fully qualified identifier for the HCX activation key",
                  },
                },
                {
                  name: "list",
                  description:
                    "List HCX activation keys in a Google Cloud VMware Engine private cloud",
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
                    optNoUri,
                    optPageSize,
                    optPrivateCloud,
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
        {
          name: "identity-sources",
          description: "Manage identity sources in Google Cloud VMware Engine",
          hidden: true,
          subcommands: [
            {
              name: "create",
              description:
                "Create a Google Cloud VMware Engine identity source",
              hidden: true,
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                {
                  name: "--base-groups-dn",
                  description: "The base distinguished name for groups",
                  priority: 100,
                  args: {
                    name: "BASE_GROUPS_DN",
                    description: "String",
                  },
                },
                {
                  name: "--base-users-dn",
                  description: "The base distinguished name for users",
                  priority: 100,
                  args: {
                    name: "BASE_USERS_DN",
                    description: "String",
                  },
                },
                optBillingProject,
                optConfiguration,
                {
                  name: "--domain",
                  description: "The domain name of the identity source",
                  priority: 100,
                  args: {
                    name: "DOMAIN",
                    description: "String",
                  },
                },
                {
                  name: "--domain-alias",
                  description: "The domain alias of the identity source",
                  args: {
                    name: "DOMAIN_ALIAS",
                    description: "String",
                  },
                },
                {
                  name: "--domain-password",
                  description:
                    "Password of the user in the domain who has a minimum of read-only access to the base distinguished names of users and groups",
                  priority: 100,
                  args: {
                    name: "DOMAIN_PASSWORD",
                    description: "String",
                  },
                },
                {
                  name: "--domain-user",
                  description:
                    "ID of a user in the domain who has a minimum of read-only access to the base distinguished names of users and groups",
                  priority: 100,
                  args: {
                    name: "DOMAIN_USER",
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
                optLocation2,
                optLogHttp,
                optNoAsync,
                {
                  name: "--primary-server",
                  description:
                    "Primary domain controller LDAP server for the domain. Format `ldap://hostname:port` or `ldaps://hostname:port`",
                  priority: 100,
                  args: {
                    name: "PRIMARY_SERVER",
                    description: "String",
                  },
                },
                optPrivateCloud2,
                optProject,
                {
                  name: "--protocol",
                  description:
                    "The LDAP server connection protocol. _PROTOCOL_ must be one of: *LDAP*, *LDAPS*",
                  priority: 100,
                  args: {
                    name: "PROTOCOL",
                    description: "String",
                    suggestions: ["LDAP", "LDAPS"],
                  },
                },
                optQuiet,
                {
                  name: "--secondary-server",
                  description:
                    "Secondary domain controller LDAP server for the domain. Format `ldap://hostname:port` or `ldaps://hostname:port`",
                  args: {
                    name: "SECONDARY_SERVER",
                    description: "String",
                  },
                },
                {
                  name: "--ssl-certificate-from-file",
                  description:
                    "Path to the root CA certificate files in CER format for the LDAPS server. Can be passed multiple times",
                  args: {
                    name: "SSL_CERTIFICATE_FROM_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "IDENTITY_SOURCE",
                description:
                  "ID of the Identity Source or fully qualified identifier for the Identity Source",
              },
            },
            {
              name: "delete",
              description:
                "Delete a Google Cloud VMware Engine identity source",
              hidden: true,
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
                optPrivateCloud2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "IDENTITY_SOURCE",
                description:
                  "ID of the Identity Source or fully qualified identifier for the Identity Source",
              },
            },
            {
              name: "describe",
              description:
                "Describe a Google Cloud VMware Engine identity source",
              hidden: true,
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
                optPrivateCloud2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "IDENTITY_SOURCE",
                description:
                  "ID of the Identity Source or fully qualified identifier for the Identity Source",
              },
            },
            {
              name: "list",
              description:
                "List Google Cloud VMware Engine identity sources in a given private cloud",
              hidden: true,
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
                optNoUri,
                optPageSize,
                optPrivateCloud,
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
                "Update a Google Cloud VMware Engine identity source",
              hidden: true,
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                {
                  name: "--base-groups-dn",
                  description: "The base distinguished name for groups",
                  args: {
                    name: "BASE_GROUPS_DN",
                    description: "String",
                  },
                },
                {
                  name: "--base-users-dn",
                  description: "The base distinguished name for users",
                  args: {
                    name: "BASE_USERS_DN",
                    description: "String",
                  },
                },
                optBillingProject,
                optConfiguration,
                {
                  name: "--domain-password",
                  description:
                    "Password of the user in the domain who has a minimum of read-only access to the base distinguished names of users and groups",
                  args: {
                    name: "DOMAIN_PASSWORD",
                    description: "String",
                  },
                },
                {
                  name: "--domain-user",
                  description:
                    "ID of a user in the domain who has a minimum of read-only access to the base distinguished names of users and groups",
                  args: {
                    name: "DOMAIN_USER",
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
                optLocation2,
                optLogHttp,
                optNoAsync,
                optPrivateCloud2,
                optProject,
                optQuiet,
                {
                  name: "--ssl-certificate-from-file",
                  description:
                    "Path to the root CA certificate files in CER format for the LDAPS server. Can be passed multiple times",
                  args: {
                    name: "SSL_CERTIFICATE_FROM_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "IDENTITY_SOURCE",
                description:
                  "ID of the Identity Source or fully qualified identifier for the Identity Source",
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
          description: "List Google Cloud VMware Engine private clouds",
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
          name: "logging-servers",
          description: "Manage logging-server in Google Cloud VMware Engine",
          subcommands: [
            {
              name: "create",
              description: "Create a Google Cloud VMware Engine logging-server",
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
                {
                  name: "--hostname",
                  description:
                    "Fully-qualified domain name (FQDN) or IP Address of the logging server",
                  priority: 100,
                  args: {
                    name: "HOSTNAME",
                    description: "String",
                  },
                },
                optImpersonateServiceAccount,
                optLocation2,
                optLogHttp,
                optNoAsync,
                {
                  name: "--port",
                  description:
                    "Port number at which the logging server receives logs",
                  priority: 100,
                  args: {
                    name: "PORT",
                  },
                },
                optPrivateCloud2,
                optProject,
                {
                  name: "--protocol",
                  description:
                    "Defines possible protocols used to send logs to a logging server. _PROTOCOL_ must be one of: *UDP*, *TCP*, *TLS*, *SSL*, *RELP*",
                  priority: 100,
                  args: {
                    name: "PROTOCOL",
                    description: "String",
                    suggestions: ["UDP", "TCP", "TLS", "SSL", "RELP"],
                  },
                },
                optQuiet,
                {
                  name: "--source-type",
                  description:
                    "The type of component that produces logs that will be forwarded to this logging server. _SOURCE_TYPE_ must be one of: *VCSA*, *ESXI*",
                  priority: 100,
                  args: {
                    name: "SOURCE_TYPE",
                    description: "String",
                    suggestions: ["VCSA", "ESXI"],
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "LOGGING_SERVER",
                description:
                  "ID of the Logging Server or fully qualified identifier for the Logging Server",
              },
            },
            {
              name: "delete",
              description:
                "Delete logging-server from a VMware Engine private cloud",
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
                optPrivateCloud2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "LOGGING_SERVER",
                description:
                  "ID of the Logging Server or fully qualified identifier for the Logging Server",
              },
            },
            {
              name: "describe",
              description:
                "Describe a Google Cloud VMware Engine logging-server",
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
                optPrivateCloud2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "LOGGING_SERVER",
                description:
                  "ID of the Logging Server or fully qualified identifier for the Logging Server",
              },
            },
            {
              name: "list",
              description:
                "List logging-server in a Google Cloud VMware Engine private cloud",
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
                optNoUri,
                optPageSize,
                optPrivateCloud,
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
              description: "Update a Google Cloud VMware Engine logging-server",
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
                {
                  name: "--hostname",
                  description:
                    "Fully-qualified domain name (FQDN) or IP Address of the logging server",
                  args: {
                    name: "HOSTNAME",
                    description: "String",
                  },
                },
                optImpersonateServiceAccount,
                optLocation2,
                optLogHttp,
                optNoAsync,
                {
                  name: "--port",
                  description:
                    "Port number at which the logging server receives logs",
                  args: {
                    name: "PORT",
                  },
                },
                optPrivateCloud2,
                optProject,
                {
                  name: "--protocol",
                  description:
                    "Defines possible protocols used to send logs to a logging server. _PROTOCOL_ must be one of: *UDP*, *TCP*, *TLS*, *RELP*, *SSL*",
                  args: {
                    name: "PROTOCOL",
                    description: "String",
                    suggestions: ["UDP", "TCP", "TLS", "RELP", "SSL"],
                  },
                },
                optQuiet,
                {
                  name: "--source-type",
                  description:
                    "The type of component that produces logs that will be forwarded to this logging server. _SOURCE_TYPE_ must be one of: *VCSA*, *ESXI*",
                  args: {
                    name: "SOURCE_TYPE",
                    description: "String",
                    suggestions: ["VCSA", "ESXI"],
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "LOGGING_SERVER",
                description:
                  "ID of the Logging Server or fully qualified identifier for the Logging Server",
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
          name: "management-dns-zone-bindings",
          description:
            "Manage Management DNS zone bindings in Google Cloud VMware Engine",
          subcommands: [
            {
              name: "create",
              description: "Create a management DNS zone binding",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description:
                    "Text describing the binding resource that represents the network getting bound to the management DNS zone",
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
                optLocation2,
                optLogHttp,
                optNoAsync,
                optPrivateCloud2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--vmware-engine-network",
                  description:
                    "Resource name of VMware Engine network to bind to the management DNS zone of the private cloud",
                  args: {
                    name: "VMWARE_ENGINE_NETWORK",
                    description: "String",
                  },
                },
                {
                  name: "--vpc-network",
                  description:
                    "Resource name of the Google Cloud VPC network to bind to the management DNS zone of the private cloud",
                  args: {
                    name: "VPC_NETWORK",
                    description: "String",
                  },
                },
              ],
              args: {
                name: "MANAGEMENT_DNS_ZONE_BINDING",
                description:
                  "ID of the management DNS zone binding or fully qualified identifier for the management DNS zone binding",
              },
            },
            {
              name: "delete",
              description: "Delete a management DNS zone binding",
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
                optPrivateCloud2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "MANAGEMENT_DNS_ZONE_BINDING",
                description:
                  "ID of the management DNS zone binding or fully qualified identifier for the management DNS zone binding",
              },
            },
            {
              name: "describe",
              description: "Describe a management DNS zone binding",
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
                optPrivateCloud2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "MANAGEMENT_DNS_ZONE_BINDING",
                description:
                  "ID of the management DNS zone binding or fully qualified identifier for the management DNS zone binding",
              },
            },
            {
              name: "list",
              description:
                "List management DNS zone bindings in a VMware Engine private cloud",
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
                optNoUri,
                optPageSize,
                optPrivateCloud,
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
              name: "repair",
              description: "Repair a management DNS zone binding",
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
                optPrivateCloud2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "MANAGEMENT_DNS_ZONE_BINDING",
                description:
                  "ID of the management DNS zone binding or fully qualified identifier for the management DNS zone binding",
              },
            },
            {
              name: "update",
              description: "Update a management DNS zone binding",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description:
                    "Text describing the binding resource that represents the network getting bound to the management DNS zone",
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
                optLocation2,
                optLogHttp,
                optNoAsync,
                optPrivateCloud2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "MANAGEMENT_DNS_ZONE_BINDING",
                description:
                  "ID of the management DNS zone binding or fully qualified identifier for the management DNS zone binding",
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
          name: "migrate-management-vms",
          description:
            "Migrate the management VMs of a private cloud to a workload cluster",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--cluster",
              description:
                "The ID of the cluster to migrate the management VMs to",
              priority: 100,
              args: {
                name: "CLUSTER",
                description: "String",
              },
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
            name: "PRIVATE_CLOUD",
            description:
              "ID of the private cloud or fully qualified identifier for the private cloud",
          },
        },
        {
          name: "nsx",
          description: "Manage NSX using Google Cloud VMware Engine",
          subcommands: [
            {
              name: "credentials",
              description:
                "Manage VMware NSX credentials using Google Cloud VMware Engine",
              subcommands: [
                {
                  name: "describe",
                  description:
                    "Retrieve VMware NSX sign-in credentials associated with a Google Cloud VMware Engine private cloud",
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
                    optPrivateCloud,
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                },
                {
                  name: "reset",
                  description:
                    "Reset VMware NSX sign-in credentials associated with a Google Cloud VMware Engine private cloud",
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
                    optPrivateCloud,
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
        },
        {
          name: "subnets",
          description: "Manage vmware subnets in Google Cloud VMware Engine",
          subcommands: [
            {
              name: "describe",
              description: "Describe a subnet in a VMware Engine private cloud",
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
                optPrivateCloud2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SUBNET",
                description:
                  "ID of the subnet or fully qualified identifier for the subnet",
              },
            },
            {
              name: "list",
              description: "List subnets in a VMware Engine private cloud",
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
                optNoUri,
                optPageSize,
                optPrivateCloud,
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
              description: "Update a subnet",
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
                  name: "--ip-cidr-range",
                  description: "Updated IP CIDR range for this subnet",
                  priority: 100,
                  args: {
                    name: "IP_CIDR_RANGE",
                    description: "String",
                  },
                },
                optLocation2,
                optLogHttp,
                optPrivateCloud2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SUBNET",
                description:
                  "ID of the subnet or fully qualified identifier for the subnet",
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
          name: "undelete",
          description:
            "Cancel deletion of a Google Cloud VMware Engine private cloud",
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
            name: "PRIVATE_CLOUD",
            description:
              "ID of the private cloud or fully qualified identifier for the private cloud",
          },
        },
        {
          name: "update",
          description: "Update a Google Cloud VMware Engine private cloud",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Text describing the private cloud",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--encryption-type",
              description:
                "The encryption type to use for the private cloud. CMEK requires --kms-key to be set",
              hidden: true,
              args: {
                name: "ENCRYPTION_TYPE",
                description: "String",
                suggestions: ["CMEK", "GMEK"],
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
                "The Cloud KMS key resource name to use for encryption. Format: projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key} Required and only applicable when --encryption-type is CMEK",
              hidden: true,
              args: {
                name: "KMS_KEY",
                description: "String",
              },
            },
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
            name: "PRIVATE_CLOUD",
            description:
              "ID of the private cloud or fully qualified identifier for the private cloud",
          },
        },
        {
          name: "upgrades",
          description: "Manage upgrades in Google Cloud VMware Engine",
          subcommands: [
            {
              name: "describe",
              description: "Describe a Google Cloud VMware Engine upgrades",
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
                optPrivateCloud2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "UPGRADE",
                description:
                  "ID of the upgrade or fully qualified identifier for the upgrade",
              },
            },
            {
              name: "list",
              description:
                "List upgrades for a Google Cloud VMware Engine private cloud",
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
                optNoUri,
                optPageSize,
                optPrivateCloud,
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
          name: "vcenter",
          description: "Manage vCenter resources in Google Cloud VMware Engine",
          subcommands: [
            {
              name: "credentials",
              description:
                "Manage VMware vCenter credentials using Google Cloud VMware Engine",
              subcommands: [
                {
                  name: "describe",
                  description:
                    "Describe Google Cloud VMware Engine vCenter credentials",
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
                    optPrivateCloud,
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    {
                      name: "--username",
                      description:
                        "The username of the user to be queried for credentials",
                      hidden: true,
                      args: {
                        name: "USERNAME",
                        description: "String",
                      },
                    },
                    optVerbosity,
                  ],
                },
                {
                  name: "reset",
                  description:
                    "Reset VMware vCenter sign-in credentials associated with a Google Cloud VMware Engine private cloud",
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
                    optPrivateCloud,
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    {
                      name: "--username",
                      description:
                        "The username of the user to reset the credentials",
                      hidden: true,
                      args: {
                        name: "USERNAME",
                        description: "String",
                      },
                    },
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
    },
    {
      name: "private-connections",
      description: "Manage Private Connections in Google Cloud VMware Engine",
      subcommands: [
        {
          name: "create",
          description: "Create a Google Cloud Private Connection",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Text describing the private connection",
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
            optLocation3,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--routing-mode",
              description:
                "Type of the routing mode. Default value is set to GLOBAL. For type=PRIVATE_SERVICE_ACCESS, this field can be set to GLOBAL or REGIONAL, for other types only GLOBAL is supported. _ROUTING_MODE_ must be one of: *GLOBAL*, *REGIONAL*",
              args: {
                name: "ROUTING_MODE",
                description: "String",
                suggestions: ["GLOBAL", "REGIONAL"],
              },
            },
            {
              name: "--service-network",
              description:
                "Resource ID of the service network to connect with the VMware Engine network to create a private connection. * For type=PRIVATE_SERVICE_ACCESS, this field represents service networking VPC. In this case the field value will be automatically set to `servicenetworking` and cannot be changed. * For type=NETAPP_CLOUD_VOLUME, this field represents NetApp service VPC. In this case the field value will be automatically set to `netapp-tenant-vpc` and cannot be changed. * For type=DELL_POWERSCALE, this field represents Dell service VPC. In this case the field value will be automatically set to `dell-tenant-vpc` and cannot be changed. * For type=THIRD_PARTY_SERVICE, this field could represent a consumer VPC or any other producer VPC to which the VMware Engine Network needs to be connected. service-network field is required for this type",
              args: {
                name: "SERVICE_NETWORK",
                description: "String",
              },
            },
            {
              name: "--service-project",
              description:
                "Project ID or project number of the service network",
              priority: 100,
              args: {
                name: "SERVICE_PROJECT",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--type",
              description: "Type of private connection. _TYPE_ must be one of:",
              priority: 100,
              args: {
                name: "TYPE",
                description: "String",
                suggestions: [
                  "DELL_POWERSCALE",
                  "NETAPP_CLOUD_VOLUMES",
                  "PRIVATE_SERVICE_ACCESS",
                  "THIRD_PARTY_SERVICE",
                ],
              },
            },
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--vmware-engine-network",
              description:
                "Resource ID of the legacy VMware Engine network. Provide the {vmware_engine_network_id}, which will be in the form of {location}-default. The {location} is the same as the location specified in the private connection resource",
              priority: 100,
              args: {
                name: "VMWARE_ENGINE_NETWORK",
                description: "String",
              },
            },
          ],
          args: {
            name: "PRIVATE_CONNECTION",
            description:
              "ID of the Private Connection or fully qualified identifier for the Private Connection",
          },
        },
        {
          name: "delete",
          description: "Delete a Google Cloud Private Connection",
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
            optLocation3,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PRIVATE_CONNECTION",
            description:
              "ID of the Private Connection or fully qualified identifier for the Private Connection",
          },
        },
        {
          name: "describe",
          description: "Describe a Google Cloud Private Connection",
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
          args: {
            name: "PRIVATE_CONNECTION",
            description:
              "ID of the Private Connection or fully qualified identifier for the Private Connection",
          },
        },
        {
          name: "list",
          description: "List Google Cloud Private Connections",
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
                "ID of the regional location or fully qualified identifier for the regional location",
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
          name: "routes",
          description:
            "Manage private connection peering routes in Google Cloud VMware Engine",
          subcommands: [
            {
              name: "list",
              description:
                "List Google Cloud private connection peering routes",
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
                optNoUri,
                optPageSize,
                {
                  name: "--private-connection",
                  description:
                    "ID of the Private Connection or fully qualified identifier for the Private Connection",
                  priority: 100,
                  args: {
                    name: "PRIVATE_CONNECTION",
                    description: "String",
                  },
                },
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
          name: "update",
          description: "Update a Google Cloud Private Connection",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Updated description for this Private Connection",
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
            optLocation3,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--routing-mode",
              description:
                "Updated routing mode for this Private Connection. _ROUTING_MODE_ must be one of: *GLOBAL*, *REGIONAL*",
              args: {
                name: "ROUTING_MODE",
                description: "String",
                suggestions: ["GLOBAL", "REGIONAL"],
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PRIVATE_CONNECTION",
            description:
              "ID of the Private Connection or fully qualified identifier for the Private Connection",
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
