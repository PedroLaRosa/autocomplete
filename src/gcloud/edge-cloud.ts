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

const optLocation: Fig.Option = {
  name: "--location",
  description: "Google Cloud location for the cluster",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation2: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description: "The Cloud location for the router",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation4: Fig.Option = {
  name: "--location",
  description: "The global location name",
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

const optLroTimeout: Fig.Option = {
  name: "--lro-timeout",
  description: "Overwrite the default LRO maximum timeout",
  args: {
    name: "LRO_TIMEOUT",
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

const optZone: Fig.Option = {
  name: "--zone",
  description: "ID of the zone or fully qualified identifier for the zone",
  priority: 100,
  args: {
    name: "ZONE",
    description: "String",
  },
};

const optZone2: Fig.Option = {
  name: "--zone",
  description: "The name of the Google Distributed Cloud Edge zone",
  args: {
    name: "ZONE",
    description: "String",
  },
};

const optZone3: Fig.Option = {
  name: "--zone",
  description: "The zone of the router",
  args: {
    name: "ZONE",
    description: "String",
  },
};

const completionSpec: Fig.Spec = {
  name: "edge-cloud",
  description: "Manage edge-cloud resources",
  subcommands: [
    {
      name: "container",
      description: "Manage Edge Container resources",
      subcommands: [
        {
          name: "clusters",
          description: "Manage Kubernetes Edge clusters",
          subcommands: [
            {
              name: "create",
              description: "Create an Edge Container cluster",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--admin-users",
                  description:
                    "Username (Google email address) of the user who should be granted cluster-admin initially. This currently supports exactly one admin. If not set, the account issuing the creation request will be used by default",
                  args: {
                    name: "ADMIN_USERS",
                    description: "String",
                  },
                },
                optAsync,
                optBillingProject,
                {
                  name: "--cluster-ipv4-cidr",
                  description:
                    "All pods in the cluster are assigned an RFC1918 IPv4 address from this block. This field cannot be changed after creation",
                  args: {
                    name: "CLUSTER_IPV4_CIDR",
                    description: "String",
                  },
                },
                optConfiguration,
                {
                  name: "--container-default-runtime-class",
                  description:
                    "Name of the default runtime class for containers. It supports two values RUNC and GVISOR",
                  args: {
                    name: "CONTAINER_DEFAULT_RUNTIME_CLASS",
                    description: "String",
                  },
                },
                {
                  name: "--control-plane-kms-key",
                  description:
                    "Google Cloud KMS key that will be used to secure persistent disks of the control plane VMs of a remote control plane cluster. The Edge Container service account for this project must have `roles/cloudkms.cryptoKeyEncrypterDecrypter` on the key",
                  args: {
                    name: "CONTROL_PLANE_KMS_KEY",
                    description: "String",
                  },
                },
                {
                  name: "--control-plane-machine-filter",
                  description:
                    'Only machines matching this filter will be allowed to host local control plane nodes. The filtering language accepts strings like "name=<name>", and is documented here: [AIP-160](https://google.aip.dev/160)',
                  args: {
                    name: "CONTROL_PLANE_MACHINE_FILTER",
                    description: "String",
                  },
                },
                {
                  name: "--control-plane-node-count",
                  description:
                    "The number of local control plane nodes in a cluster. Use one to create a single-node control plane or use three to create a high availability control plane. Any other numbers of nodes will not be accepted",
                  args: {
                    name: "CONTROL_PLANE_NODE_COUNT",
                    description: "String",
                  },
                },
                {
                  name: "--control-plane-node-location",
                  description:
                    "Google Edge Cloud zone where the local control plane nodes will be created",
                  args: {
                    name: "CONTROL_PLANE_NODE_LOCATION",
                    description: "String",
                  },
                },
                {
                  name: "--control-plane-node-storage-schema",
                  description:
                    "Name for the storage schema of control plane nodes",
                  args: {
                    name: "CONTROL_PLANE_NODE_STORAGE_SCHEMA",
                    description: "String",
                  },
                },
                {
                  name: "--control-plane-shared-deployment-policy",
                  description:
                    "Policy configuration about how user application is deployed for local control plane cluster. It supports two values, ALLOWED and DISALLOWED. ALLOWED means that user application can be deployed on control plane nodes. DISALLOWED means that user application can not be deployed on control plane nodes. Instead, it can only be deployed on worker nodes. By default, this value is DISALLOWED. The input is case insensitive",
                  args: {
                    name: "CONTROL_PLANE_SHARED_DEPLOYMENT_POLICY",
                    description: "String",
                  },
                },
                {
                  name: "--default-max-pods-per-node",
                  description: "The default maximum number of pods per node",
                  args: {
                    name: "DEFAULT_MAX_PODS_PER_NODE",
                    description: "String",
                  },
                },
                {
                  name: "--enable-google-group-authentication",
                  description:
                    "If set, the cluster will be configured to use Google Group authentication",
                },
                {
                  name: "--external-lb-ipv4-address-pools",
                  description:
                    'IPv4 address pools that are used for data plane load balancing of local control plane clusters. Existing pools cannot be updated after cluster creation; only adding new pools is allowed. Each address pool must be specified as one of the following two types of values: 1. A IPv4 address range, for example, "10.0.0.1-10.0.0.10". A range that contains a single IP (e.g. "10.0.0.1-10.0.0.1") is allowed. 2. A IPv4 CIDR block, for example, "10.0.0.1/24" Use comma when specifying multiple address pools, for example: --external-lb-ipv4-address-pools 10.0.0.1-10.0.0.10,10.0.0.1/24',
                  args: {
                    name: "EXTERNAL_LB_IPV4_ADDRESS",
                    description: "List",
                  },
                },
                optFlagsFile,
                optFlatten,
                {
                  name: "--fleet-project",
                  description:
                    "Name of the Fleet host project where the cluster is registered",
                  args: {
                    name: "FLEET_PROJECT",
                    description: "String",
                  },
                },
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLabels,
                optLocation,
                optLogHttp,
                optLroTimeout,
                {
                  name: "--maintenance-window-end",
                  description:
                    'End time of the recurring cluster maintenance window in the RFC 3339 (https://www.rfc-editor.org/rfc/rfc3339.txt) format. E.g. "2021-01-01T00:00:00Z" or "2021-01-01T00:00:00-05:00"',
                  args: {
                    name: "MAINTENANCE_WINDOW_END",
                    description: "String",
                  },
                },
                {
                  name: "--maintenance-window-recurrence",
                  description:
                    "An RFC 5545 (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) recurrence rule for how the cluster maintenance window recurs. They go on for the span of time between the start and the end time. E.g. FREQ=WEEKLY;BYDAY=SU",
                  args: {
                    name: "MAINTENANCE_WINDOW_RECURRENCE",
                    description: "String",
                  },
                },
                {
                  name: "--maintenance-window-start",
                  description:
                    'Start time of the recurring cluster maintenance window in the RFC 3339 (https://www.rfc-editor.org/rfc/rfc3339.txt) format. E.g. "2021-01-01T00:00:00Z" or "2021-01-01T00:00:00-05:00"',
                  args: {
                    name: "MAINTENANCE_WINDOW_START",
                    description: "String",
                  },
                },
                optNoAsync,
                {
                  name: "--no-enable-google-group-authentication",
                  description:
                    "If set, the cluster will be configured to use Google Group authentication",
                  hidden: true,
                },
                {
                  name: "--offline-reboot-ttl",
                  description:
                    'Specifies the maximum duration a node can reboot offline (without connection to Google) and then rejoin its cluster to resume its designated workloads. This duration is relative to the machine\'s most recent connection to Google. The maximum allowed duration is 7 days. To disallow offline reboot, set the duration to "PT0S". The parameter should be an ISO 8601 duration string, for example, "P1DT1H2M3S"',
                  args: {
                    name: "OFFLINE_REBOOT_TTL",
                  },
                },
                optProject,
                optQuiet,
                {
                  name: "--release-channel",
                  description:
                    "Release channel a cluster is subscribed to. It supports two values, NONE and REGULAR. NONE is used to opt out of any release channel. Clusters subscribed to the REGULAR channel will be automatically upgraded to versions that are considered GA quality, and cannot be manually upgraded. Additionally, if the REGULAR channel is used, a specific target version cannot be set with the 'version' flag. If left unspecified, the release channel will default to REGULAR",
                  args: {
                    name: "RELEASE_CHANNEL",
                    description: "String",
                  },
                },
                {
                  name: "--services-ipv4-cidr",
                  description:
                    "All services in the cluster are assigned an RFC1918 IPv4 address from this block. This field cannot be changed after creation",
                  args: {
                    name: "SERVICES_IPV4_CIDR",
                    description: "String",
                  },
                },
                {
                  name: "--system-addons-config",
                  description:
                    "If specified as a YAML/JSON file, customized configuration in this file will be applied to the system add-ons",
                  args: {
                    name: "SYSTEM_ADDONS_CONFIG",
                    template: "filepaths",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--zone-storage-kms-key",
                  description:
                    "Google Cloud KMS key that will be used to encrypt and decrypt the root key for zone storage encryption. The zone storage KMS key is only applicable to the storage infra cluster. The Edge Container service account for this project must have `roles/cloudkms.cryptoKeyEncrypterDecrypter` on the key",
                  args: {
                    name: "ZONE_STORAGE_KMS_KEY",
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
              description: "Delete an Edge Container cluster",
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
                optLocation4,
                optLogHttp,
                optNoAsync,
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
              description: "Show details about the cluster",
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
                optLocation4,
                optLogHttp,
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
              name: "get-credentials",
              description: "Get credentials of an edge-container cluster",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--auth-provider-cmd-path",
                  description:
                    "Path to the gcloud executable for the auth provider field in kubeconfig",
                  args: {
                    name: "AUTH_PROVIDER_CMD_PATH",
                    description: "String",
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
                optLocation,
                optLogHttp,
                {
                  name: "--no-offline-credential",
                  description:
                    "Once specified, an offline credential will be generated for the cluster",
                  hidden: true,
                },
                {
                  name: "--offline-credential",
                  description:
                    "Once specified, an offline credential will be generated for the cluster",
                },
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
              description: "List Edge Container clusters",
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
              name: "node-pools",
              description: "Manage Kubernetes Edge node pools",
              subcommands: [
                {
                  name: "create",
                  description: "Create an Edge Container node pool",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optAsync,
                    optBillingProject,
                    {
                      name: "--cluster",
                      description: "Cluster of the node pool",
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
                    optLabels,
                    {
                      name: "--local-disk-kms-key",
                      description:
                        "Google Cloud KMS key that will be used to secure local disks on nodes in this node pool. The Edge Container service account for this project must have `roles/cloudkms.cryptoKeyEncrypterDecrypter` on the key",
                      args: {
                        name: "LOCAL_DISK_KMS_KEY",
                        description: "String",
                      },
                    },
                    {
                      name: "--location",
                      description: "Google Cloud location for the node pool",
                      args: {
                        name: "LOCATION",
                        description: "String",
                      },
                    },
                    optLogHttp,
                    optLroTimeout,
                    {
                      name: "--machine-filter",
                      description:
                        'Only machines matching this filter will be allowed to join the node pool. The filtering language accepts strings like "name=<name>", and is documented in more detail at https://google.aip.dev/160',
                      args: {
                        name: "MACHINE_FILTER",
                        description: "String",
                      },
                    },
                    optNoAsync,
                    {
                      name: "--node-count",
                      description: "Default nodeCount used by this node pool",
                      priority: 100,
                      args: {
                        name: "NODE_COUNT",
                        description: "String",
                      },
                    },
                    {
                      name: "--node-labels",
                      description:
                        "Comma-delimited list of key-value pairs that comprise labels for the individual nodes in the node pool. This flag sets the Kubernetes labels, unlike `--labels` which sets the cloud resource labels",
                      args: {
                        name: "KEY=VALUE",
                        description: "Dict",
                      },
                    },
                    {
                      name: "--node-location",
                      description:
                        "Google Edge Cloud zone where nodes in this node pool will be created",
                      priority: 100,
                      args: {
                        name: "NODE_LOCATION",
                        description: "String",
                      },
                    },
                    {
                      name: "--node-storage-schema",
                      description:
                        "Name for the storage schema of worker nodes",
                      args: {
                        name: "NODE_STORAGE_SCHEMA",
                        description: "String",
                      },
                    },
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "NODE_POOL",
                    description:
                      "ID of the node pool or fully qualified identifier for the node pool",
                  },
                },
                {
                  name: "delete",
                  description: "Delete an Edge Container nodePool",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optAsync,
                    optBillingProject,
                    {
                      name: "--cluster",
                      description: "Kubernetes cluster",
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
                    optLocation4,
                    optLogHttp,
                    optNoAsync,
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "NODE_POOL",
                    description:
                      "ID of the node pool or fully qualified identifier for the node pool",
                  },
                },
                {
                  name: "describe",
                  description: "Show details about the nodePool",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    {
                      name: "--cluster",
                      description: "Kubernetes cluster",
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
                    optLocation4,
                    optLogHttp,
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "NODE_POOL",
                    description:
                      "ID of the node pool or fully qualified identifier for the node pool",
                  },
                },
                {
                  name: "list",
                  description: "List Edge Container nodePools",
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
                    optLocation4,
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
                  description: "Updates an Edge Container node pool",
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
                    {
                      name: "--cluster",
                      description: "Cluster of the node pool",
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
                    {
                      name: "--local-disk-kms-key",
                      description:
                        "Google Cloud KMS key that will be used to secure local disks on nodes in this node pool. The Edge Container service account for this project must have `roles/cloudkms.cryptoKeyEncrypterDecrypter` on the key",
                      args: {
                        name: "LOCAL_DISK_KMS_KEY",
                        description: "String",
                      },
                    },
                    {
                      name: "--location",
                      description: "Google Cloud location for the node pool",
                      args: {
                        name: "LOCATION",
                        description: "String",
                      },
                    },
                    optLogHttp,
                    optLroTimeout,
                    {
                      name: "--machine-filter",
                      description:
                        'Only machines matching this filter will be allowed to join the node pool. The filtering language accepts strings like "name=<name>", and is documented in more detail at https://google.aip.dev/160',
                      args: {
                        name: "MACHINE_FILTER",
                        description: "String",
                      },
                    },
                    optNoAsync,
                    {
                      name: "--no-clear-labels",
                      description:
                        "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
                      hidden: true,
                    },
                    {
                      name: "--no-use-google-managed-key",
                      description:
                        "Once specified, a Google-managed key will be used for the control plane disk encryption",
                      hidden: true,
                    },
                    {
                      name: "--node-count",
                      description: "Default nodeCount used by this node pool",
                      args: {
                        name: "NODE_COUNT",
                        description: "String",
                      },
                    },
                    {
                      name: "--node-labels",
                      description:
                        "Comma-delimited list of key-value pairs that comprise labels for the individual nodes in the node pool. This flag updates the Kubernetes labels, unlike `--update-labels`, `--remove-labels`, and `--clear-labels` which update the cloud resource labels",
                      args: {
                        name: "KEY=VALUE",
                        description: "Dict",
                      },
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
                    {
                      name: "--use-google-managed-key",
                      description:
                        "Once specified, a Google-managed key will be used for the control plane disk encryption",
                    },
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "NODE_POOL",
                    description:
                      "ID of the node pool or fully qualified identifier for the node pool",
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
              name: "print-access-token",
              description:
                "Generate an access token for an Edge Container cluster",
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
                optLocation,
                optLogHttp,
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
              description: "Update an Edge Container cluster",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--add-maintenance-exclusion-end",
                  description:
                    'End time of the maintenance exclusion window in the RFC 3339 (https://www.rfc-editor.org/rfc/rfc3339.txt) format. E.g. "2021-01-01T00:00:00Z" or "2021-01-01T00:00:00-05:00"',
                  args: {
                    name: "ADD_MAINTENANCE_EXCLUSION_END",
                    description: "String",
                  },
                },
                {
                  name: "--add-maintenance-exclusion-name",
                  description:
                    "Unique name (per cluster) of the maintenance exclusion window that can be used to remove it",
                  args: {
                    name: "ADD_MAINTENANCE_EXCLUSION_NAME",
                    description: "String",
                  },
                },
                {
                  name: "--add-maintenance-exclusion-start",
                  description:
                    'Start time of the maintenance exclusion window (can occur in the past) in the RFC 3339 (https://www.rfc-editor.org/rfc/rfc3339.txt) format. E.g. "2021-01-01T00:00:00Z" or "2021-01-01T00:00:00-05:00"',
                  args: {
                    name: "ADD_MAINTENANCE_EXCLUSION_START",
                    description: "String",
                  },
                },
                optAsync,
                optBillingProject,
                {
                  name: "--clear-maintenance-window",
                  description:
                    "If set, removes the maintenance window setting from the cluster. If any exclusion windows exist, they must be removed beforehand as a maintenance policy cannot exist without a maintenance window",
                },
                optConfiguration,
                {
                  name: "--container-default-runtime-class",
                  description:
                    "If set, use the specified default container runtime class for the cluster",
                  args: {
                    name: "CONTAINER_DEFAULT_RUNTIME_CLASS",
                    description: "String",
                  },
                },
                {
                  name: "--control-plane-kms-key",
                  description:
                    "If set, use the specified KMS key for the cluster control plane nodes encryption",
                  args: {
                    name: "CONTROL_PLANE_KMS_KEY",
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
                optLocation4,
                optLogHttp,
                {
                  name: "--maintenance-window-end",
                  description:
                    'End time of the recurring cluster maintenance window in the [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339.txt) format. E.g. "2021-01-01T00:00:00Z" or "2021-01-01T00:00:00-05:00"',
                  args: {
                    name: "MAINTENANCE_WINDOW_END",
                    description: "String",
                  },
                },
                {
                  name: "--maintenance-window-recurrence",
                  description:
                    "An [RFC 5545](https://tools.ietf.org/html/rfc5545#section-3.8.5.3) recurrence rule for how the cluster maintenance window recurs. They go on for the span of time between the start and the end time. E.g. FREQ=WEEKLY;BYDAY=SU",
                  args: {
                    name: "MAINTENANCE_WINDOW_RECURRENCE",
                    description: "String",
                  },
                },
                {
                  name: "--maintenance-window-start",
                  description:
                    'Start time of the recurring cluster maintenance window in the [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339.txt) format. E.g. "2021-01-01T00:00:00Z" or "2021-01-01T00:00:00-05:00"',
                  args: {
                    name: "MAINTENANCE_WINDOW_START",
                    description: "String",
                  },
                },
                optNoAsync,
                {
                  name: "--no-clear-maintenance-window",
                  description:
                    "If set, removes the maintenance window setting from the cluster. If any exclusion windows exist, they must be removed beforehand as a maintenance policy cannot exist without a maintenance window",
                  hidden: true,
                },
                {
                  name: "--no-use-google-managed-key",
                  description:
                    "If set, use Google managed key for the cluster control plane nodes encryption",
                  hidden: true,
                },
                {
                  name: "--no-use-google-managed-zone-key",
                  description:
                    "If set, use Google managed key for zone storage encryption",
                  hidden: true,
                },
                {
                  name: "--offline-reboot-ttl",
                  description:
                    'Specifies the maximum duration a node can reboot offline (without connection to Google) and then rejoin its cluster to resume its designated workloads. This duration is relative to the machine\'s most recent connection to Google. The maximum allowed duration is 7 days. If left unspecified, the default 0 means not allowed. The parameter should be an ISO 8601 duration string, for example, "P1DT1H2M3S"',
                  args: {
                    name: "OFFLINE_REBOOT_TTL",
                  },
                },
                optProject,
                optQuiet,
                {
                  name: "--release-channel",
                  description:
                    "Release channel a cluster is subscribed to. It supports two values, NONE and REGULAR. NONE is used to opt out of any release channel. Clusters subscribed to the REGULAR channel will be automatically upgraded to versions that are considered GA quality, and cannot be manually upgraded. _RELEASE_CHANNEL_ must be one of: *none*, *regular*, *release-channel-unspecified*",
                  args: {
                    name: "RELEASE_CHANNEL",
                    suggestions: [
                      "none",
                      "regular",
                      "release-channel-unspecified",
                    ],
                  },
                },
                {
                  name: "--remove-maintenance-exclusion-window",
                  description: "Name of the maintenance exclusion to remove",
                  args: {
                    name: "REMOVE_MAINTENANCE_EXCLUSION_WINDOW",
                    description: "String",
                  },
                },
                optTraceToken,
                {
                  name: "--use-google-managed-key",
                  description:
                    "If set, use Google managed key for the cluster control plane nodes encryption",
                },
                {
                  name: "--use-google-managed-zone-key",
                  description:
                    "If set, use Google managed key for zone storage encryption",
                },
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--zone-storage-kms-key",
                  description:
                    "If set, use the specified KMS key for zone storage encryption",
                  args: {
                    name: "ZONE_STORAGE_KMS_KEY",
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
              name: "upgrade",
              description: "Upgrade an Edge Container cluster",
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
                  name: "--schedule",
                  description:
                    "Schedule to upgrade a cluster after the request is acknowledged by Google. Support values: IMMEDIATELY",
                  priority: 100,
                  args: {
                    name: "SCHEDULE",
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
          name: "get-server-config",
          description: "Get server config",
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
        },
        {
          name: "machines",
          description: "Manage Kubernetes Edge machines",
          subcommands: [
            {
              name: "describe",
              description: "Show details about the machine",
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
                optLocation4,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "MACHINE",
                description:
                  "ID of the machine or fully qualified identifier for the machine",
              },
            },
            {
              name: "list",
              description: "List Edge Container machines",
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
          description:
            "Command group for working with Kubernetes Edge operations",
          subcommands: [
            {
              name: "describe",
              description:
                "Get description of a long-running edge container operation",
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
                optLocation4,
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
              name: "wait",
              description:
                "Poll long-running edge container operation until it completes",
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
                optLocation4,
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
          description: "Manages Edge Container regions",
          subcommands: [
            {
              name: "describe",
              description: "Describe an Edge Container region (location)",
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
                name: "LOCATION",
                description:
                  "ID of the location or fully qualified identifier for the location",
                isOptional: true,
              },
            },
            {
              name: "list",
              description: "List Edge Container regions",
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
          name: "vpn-connections",
          description:
            "Manage Edge VPN connections between an Edge Container cluster and a VPC network",
          subcommands: [
            {
              name: "create",
              description:
                "Create a VPN connection between an Edge Container cluster and a VPC network",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
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
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                {
                  name: "--high-availability",
                  description:
                    "Enables high availability on cluster side. This creates an additional VPN endpoint in cluster. Multiple Nodes/NodePools are required to enable this feature",
                },
                optImpersonateServiceAccount,
                optLabels,
                {
                  name: "--location",
                  description:
                    "For resources [cluster, vpn_connection], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                {
                  name: "--nat-gateway-ip",
                  description:
                    "The NAT gateway IP for the gateway floating IPs. Required if cluster sits behind NAT",
                  args: {
                    name: "NAT_GATEWAY_IP",
                    description: "String",
                  },
                },
                optNoAsync,
                {
                  name: "--no-high-availability",
                  description:
                    "Enables high availability on cluster side. This creates an additional VPN endpoint in cluster. Multiple Nodes/NodePools are required to enable this feature",
                  hidden: true,
                },
                optProject,
                optQuiet,
                {
                  name: "--router",
                  description:
                    "Name of the Cloud Router to use when creating the VPN connection. This Cloud Router must be in the same region as the cluster and connected to the provided VPC network. If not provided, a service-managed Cloud Router will either be created or reused to create the VPN connection",
                  args: {
                    name: "ROUTER",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--vpc-network",
                  description:
                    "The name of the VPC network to be connected. By default it is assumed to be under the same project as cluster. If this VPC network is under a different project, `vpc-project` is required",
                  priority: 100,
                  args: {
                    name: "VPC_NETWORK",
                    description: "String",
                  },
                },
                {
                  name: "--vpc-project",
                  description:
                    "The project of the VPC network. Required if the project of VPC network differs from the project of the cluster",
                  args: {
                    name: "VPC_PROJECT",
                    description: "String",
                  },
                },
              ],
              args: {
                name: "VPN_CONNECTION",
                description:
                  "ID of the vpn connection or fully qualified identifier for the vpn connection",
              },
            },
            {
              name: "delete",
              description:
                "Delete a VPN connection between an Edge Container cluster and a VPC network",
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
                optLocation4,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "VPN_CONNECTION",
                description:
                  "ID of the vpn connection or fully qualified identifier for the vpn connection",
              },
            },
            {
              name: "describe",
              description: "Show details about a VPN connection",
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
                optLocation4,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "VPN_CONNECTION",
                description:
                  "ID of the vpn connection or fully qualified identifier for the vpn connection",
              },
            },
            {
              name: "list",
              description: "List VPN connections",
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
          description: "Inspect Edge Container zones",
          subcommands: [
            {
              name: "describe",
              description: "Describe an Edge Container zone",
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
              description: "List Edge Container zones",
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
      name: "networking",
      description: "Manage Distributed Cloud Edge Network resources",
      subcommands: [
        {
          name: "interconnects",
          description: "Manage Distributed Cloud Edge Network interconnects",
          subcommands: [
            {
              name: "attachments",
              description:
                "Manage Distributed Cloud Edge Network interconnect attachments",
              subcommands: [
                {
                  name: "dedicated",
                  description:
                    "Manage Distributed Cloud Edge Network dedicated interconnect attachments",
                  subcommands: [
                    {
                      name: "create",
                      description:
                        "Create a Distributed Cloud Edge Network interconnect attachment",
                      options: [
                        optAccessTokenFile,
                        optAccount,
                        optAsync,
                        optBillingProject,
                        optConfiguration,
                        {
                          name: "--description",
                          description:
                            "An optional, textual description for the interconnect attachment",
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
                          name: "--interconnect",
                          description:
                            "The underlying interconnect object that this attachment's traffic will traverse through",
                          priority: 100,
                          args: {
                            name: "INTERCONNECT",
                            description: "String",
                          },
                        },
                        optLabels,
                        optLocation4,
                        optLogHttp,
                        {
                          name: "--mtu",
                          description:
                            "Maximum transmission unit (MTU) is the size of the largest IP packet that can be transmitted on this attachment. Default value is 1500 bytes, and the valid values are 1500 and 9000",
                          args: {
                            name: "MTU",
                            description: "Int",
                          },
                        },
                        {
                          name: "--network",
                          description: "The network to use for dynamic routing",
                          args: {
                            name: "NETWORK",
                            description: "String",
                          },
                        },
                        optNoAsync,
                        optProject,
                        optQuiet,
                        optTraceToken,
                        optUserOutputEnabled,
                        optVerbosity,
                        {
                          name: "--vlan-id",
                          description:
                            "The ID of the vlan to tag the subnetwork. Default value is 0",
                          args: {
                            name: "VLAN_ID",
                            description: "Int",
                          },
                        },
                        optZone2,
                      ],
                      args: {
                        name: "INTERCONNECT_ATTACHMENT",
                        description:
                          "ID of the interconnect attachment or fully qualified identifier for the interconnect attachment",
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
                  name: "delete",
                  description:
                    "Delete a Distributed Cloud Edge Network interconnect attachment",
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
                    optLocation4,
                    optLogHttp,
                    optNoAsync,
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optZone2,
                  ],
                  args: {
                    name: "INTERCONNECT_ATTACHMENT",
                    description:
                      "ID of the interconnect attachment or fully qualified identifier for the interconnect attachment",
                  },
                },
                {
                  name: "describe",
                  description:
                    "Show details about a Distributed Cloud Edge Network interconnect attachment",
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
                    optLocation4,
                    optLogHttp,
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optZone2,
                  ],
                  args: {
                    name: "INTERCONNECT_ATTACHMENT",
                    description:
                      "ID of the interconnect attachment or fully qualified identifier for the interconnect attachment",
                  },
                },
                {
                  name: "list",
                  description:
                    "List Distributed Cloud Edge Network interconnect attachments",
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
                    optLocation4,
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
                    optZone,
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
              name: "describe",
              description:
                "Show details about the Distributed Cloud Edge Network interconnect",
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
                optLocation4,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optZone2,
              ],
              args: {
                name: "INTERCONNECT",
                description:
                  "ID of the interconnect or fully qualified identifier for the interconnect",
              },
            },
            {
              name: "get-diagnostics",
              description:
                "Get the diagnostics of a specified Distributed Cloud Edge Network interconnect",
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
                  name: "--location",
                  description: "The Cloud location for the interconnect",
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--zone",
                  description: "The zone of the interconnect",
                  args: {
                    name: "ZONE",
                    description: "String",
                  },
                },
              ],
              args: {
                name: "INTERCONNECT",
                description:
                  "ID of the interconnect or fully qualified identifier for the interconnect",
              },
            },
            {
              name: "list",
              description: "List Distributed Cloud Edge Network interconnects",
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
                optLocation4,
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
                optZone,
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
          name: "networks",
          description: "Manage Distributed Cloud Edge Network networks",
          subcommands: [
            {
              name: "create",
              description: "Create a Distributed Cloud Edge Network network",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description:
                    "An optional, textual description for the network",
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
                optLabels,
                optLocation4,
                optLogHttp,
                {
                  name: "--mtu",
                  description:
                    "Maximum transmission unit (MTU) is the size of the largest IP packet that can be transmitted on this network. Default value is 1500 bytes, and the valid values are 1500 and 9000",
                  args: {
                    name: "MTU",
                    description: "Int",
                  },
                },
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optZone2,
              ],
              args: {
                name: "NETWORK",
                description:
                  "ID of the network or fully qualified identifier for the network",
              },
            },
            {
              name: "delete",
              description: "Delete a Distributed Cloud Edge Network network",
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
                optLocation4,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optZone2,
              ],
              args: {
                name: "NETWORK",
                description:
                  "ID of the network or fully qualified identifier for the network",
              },
            },
            {
              name: "describe",
              description:
                "Show details about the Distributed Cloud Edge Network network",
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
                optLocation4,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optZone2,
              ],
              args: {
                name: "NETWORK",
                description:
                  "ID of the network or fully qualified identifier for the network",
              },
            },
            {
              name: "get-status",
              description:
                "Get the status of a specified Distributed Cloud Edge Network network",
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
                  name: "--location",
                  description: "The Cloud location for the network",
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--zone",
                  description: "The zone of the network",
                  args: {
                    name: "ZONE",
                    description: "String",
                  },
                },
              ],
              args: {
                name: "NETWORK",
                description:
                  "ID of the network or fully qualified identifier for the network",
              },
            },
            {
              name: "list",
              description: "List Distributed Cloud Edge Network networks",
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
                optLocation4,
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
                optZone,
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
          description:
            "Command group for working with Distributed Cloud Edge Network operations",
          subcommands: [
            {
              name: "describe",
              description:
                "Get description of a long-running edge network operation",
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
                optLocation4,
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
              name: "wait",
              description:
                "Poll long-running edge network operation until it completes",
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
                optLocation4,
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
          name: "routers",
          description: "Manage Distributed Cloud Edge Network routers",
          subcommands: [
            {
              name: "add-bgp-peer",
              description:
                "Add a BGP peer to a Distributed Cloud Edge Network router",
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
                  name: "--interface",
                  description: "The name of the interface for this BGP peer",
                  priority: 100,
                  args: {
                    name: "INTERFACE",
                    description: "String",
                  },
                },
                optLocation3,
                optLogHttp,
                optNoAsync,
                {
                  name: "--peer-asn",
                  description:
                    "The BGP autonomous system number (ASN) for this BGP peer. Must be a 16-bit or 32-bit private ASN as defined in https://tools.ietf.org/html/rfc6996, for example `--asn=64512`",
                  priority: 100,
                  args: {
                    name: "PEER_ASN",
                    description: "Int",
                  },
                },
                {
                  name: "--peer-ipv4-range",
                  description:
                    "The IPv4 link-local address range of the peer router",
                  args: {
                    name: "PEER_IPV4_RANGE",
                    description: "String",
                  },
                },
                {
                  name: "--peer-name",
                  description: "The name of the new BGP peer being added",
                  priority: 100,
                  args: {
                    name: "PEER_NAME",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optZone3,
              ],
              args: {
                name: "ROUTER",
                description:
                  "ID of the router or fully qualified identifier for the router",
              },
            },
            {
              name: "add-interface",
              description:
                "Add an interface to a Distributed Cloud Edge Network router",
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
                  name: "--interconnect-attachment",
                  description:
                    "Interconnect attachment of the interface being added",
                  args: {
                    name: "INTERCONNECT_ATTACHMENT",
                    description: "String",
                  },
                },
                {
                  name: "--interface-name",
                  description: "The name of the interface being added",
                  priority: 100,
                  args: {
                    name: "INTERFACE_NAME",
                    description: "String",
                  },
                },
                {
                  name: "--ip-address",
                  description:
                    "Link-local address of the router for this interface",
                  args: {
                    name: "IP_ADDRESS",
                  },
                },
                {
                  name: "--ip-mask-length",
                  description:
                    "Subnet mask for the link-local IP range of the interface. The interface IP address and BGP peer IP address must be selected from the subnet defined by this link-local range",
                  args: {
                    name: "IP_MASK_LENGTH",
                  },
                },
                optLocation3,
                optLogHttp,
                {
                  name: "--loopback-ip-addresses",
                  description:
                    "The list of ip ranges for the loopback interface",
                  args: {
                    name: "LOOPBACK_IP_ADDRESSES",
                    description: "List",
                  },
                },
                optNoAsync,
                optProject,
                optQuiet,
                {
                  name: "--subnetwork",
                  description: "Subnetwork of the interface being added",
                  args: {
                    name: "SUBNETWORK",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optZone3,
              ],
              args: {
                name: "ROUTER",
                description:
                  "ID of the router or fully qualified identifier for the router",
              },
            },
            {
              name: "create",
              description: "Create a Distributed Cloud Edge Network router",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--asn",
                  description: "The locally assigned BGP ASN",
                  priority: 100,
                  args: {
                    name: "ASN",
                    description: "Int",
                  },
                },
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description:
                    "An optional, textual description for the router",
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
                  name: "--keepalive-interval-in-seconds",
                  description:
                    "The interval in seconds between BGP keepalive messages that are sent to the peer",
                  hidden: true,
                  args: {
                    name: "KEEPALIVE_INTERVAL_IN_SECONDS",
                    description: "Int",
                  },
                },
                optLabels,
                optLocation4,
                optLogHttp,
                {
                  name: "--network",
                  description: "The network that this subnetwork belongs to",
                  priority: 100,
                  args: {
                    name: "NETWORK",
                    description: "String",
                  },
                },
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optZone2,
              ],
              args: {
                name: "ROUTER",
                description:
                  "ID of the router or fully qualified identifier for the router",
              },
            },
            {
              name: "delete",
              description: "Delete a Distributed Cloud Edge Network router",
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
                optLocation4,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optZone2,
              ],
              args: {
                name: "ROUTER",
                description:
                  "ID of the router or fully qualified identifier for the router",
              },
            },
            {
              name: "describe",
              description:
                "Show details about the Distributed Cloud Edge Network router",
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
                optLocation4,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optZone2,
              ],
              args: {
                name: "ROUTER",
                description:
                  "ID of the router or fully qualified identifier for the router",
              },
            },
            {
              name: "get-status",
              description:
                "Get the status of a specified Distributed Cloud Edge Network router",
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
                optZone3,
              ],
              args: {
                name: "ROUTER",
                description:
                  "ID of the router or fully qualified identifier for the router",
              },
            },
            {
              name: "list",
              description: "List Distributed Cloud Edge Network routers",
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
                optLocation4,
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
                optZone,
              ],
            },
            {
              name: "remove-bgp-peer",
              description:
                "Remove a BGP peer from a Distributed Cloud Edge Network router",
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
                {
                  name: "--peer-name",
                  description: "The name of the BGP peer being removed",
                  args: {
                    name: "PEER_NAME",
                    description: "String",
                  },
                },
                {
                  name: "--peer-names",
                  description:
                    "The list of names for peers being removed. Only single value allowed currently",
                  args: {
                    name: "PEER_NAME",
                    description: "List",
                  },
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optZone3,
              ],
              args: {
                name: "ROUTER",
                description:
                  "ID of the router or fully qualified identifier for the router",
              },
            },
            {
              name: "remove-interface",
              description:
                "Remove an interface on a Distributed Cloud Edge Network router",
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
                  name: "--interface-name",
                  description: "The name of the interface being removed",
                  args: {
                    name: "INTERFACE_NAME",
                    description: "String",
                  },
                },
                {
                  name: "--interface-names",
                  description: "The list of names for interfaces being removed",
                  args: {
                    name: "INTERFACE_NAME",
                    description: "List",
                  },
                },
                optLocation3,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optZone3,
              ],
              args: {
                name: "ROUTER",
                description:
                  "ID of the router or fully qualified identifier for the router",
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
          name: "subnets",
          description: "Manage Distributed Cloud Edge Network subnets",
          subcommands: [
            {
              name: "create",
              description: "Create a Distributed Cloud Edge Network subnet",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description:
                    "An optional, textual description for the subnet",
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
                  name: "--ipv4-range",
                  description:
                    "The ranges of ipv4 addresses that are owned by this subnetwork in CIDR format",
                  args: {
                    name: "IPV4_RANGE",
                    description: "List",
                  },
                },
                {
                  name: "--ipv6-range",
                  description:
                    "The ranges of ipv6 addresses that are owned by this subnetwork in CIDR format",
                  args: {
                    name: "IPV6_RANGE",
                    description: "List",
                  },
                },
                optLabels,
                optLocation4,
                optLogHttp,
                {
                  name: "--network",
                  description: "The network that this subnetwork belongs to",
                  priority: 100,
                  args: {
                    name: "NETWORK",
                    description: "String",
                  },
                },
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--vlan-id",
                  description:
                    "The ID of the VLAN to tag the subnetwork. If not specified we assign one automatically",
                  args: {
                    name: "VLAN_ID",
                    description: "Int",
                  },
                },
                optZone2,
              ],
              args: {
                name: "SUBNET",
                description:
                  "ID of the subnet or fully qualified identifier for the subnet",
              },
            },
            {
              name: "delete",
              description: "Delete a Distributed Cloud Edge Network subnet",
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
                optLocation4,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optZone2,
              ],
              args: {
                name: "SUBNET",
                description:
                  "ID of the subnet or fully qualified identifier for the subnet",
              },
            },
            {
              name: "describe",
              description:
                "Show details about the Distributed Cloud Edge Network subnet",
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
                optLocation4,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optZone2,
              ],
              args: {
                name: "SUBNET",
                description:
                  "ID of the subnet or fully qualified identifier for the subnet",
              },
            },
            {
              name: "list",
              description: "List Distributed Cloud Edge Network subnets",
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
                optLocation4,
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
                optZone,
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
          description: "Manage Distributed Cloud Edge Network zones",
          subcommands: [
            {
              name: "init",
              description:
                "Initialize a specified Distributed Cloud Edge Network zone",
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
                  name: "--location",
                  description: "The Cloud location for the zone",
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
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
