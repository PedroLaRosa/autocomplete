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

const optLocation: Fig.Option = {
  name: "--location",
  description:
    "The name of the Anthos Config Controller instance location. Currently, only `us-central1`, `us-east1`, `us-east4`, `us-east5`, `us-west2`, `northamerica-northeast1`, `northamerica-northeast2`, `europe-north1`, `europe-west1`, `europe-west3`, `europe-west6`, `australia-southeast1`, `australia-southeast2`, `asia-northeast1`, `asia-northeast2` and `asia-southeast1` are supported",
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

const optNoShowExecError: Fig.Option = {
  name: "--no-show-exec-error",
  description:
    "If true and command fails, print the underlying command that was executed and its exit status",
  hidden: true,
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

const optShowExecError: Fig.Option = {
  name: "--show-exec-error",
  description:
    "If true and command fails, print the underlying command that was executed and its exit status",
  hidden: true,
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
  name: "anthos",
  description: "Anthos command Group",
  subcommands: [
    {
      name: "auth",
      description: "Authenticate clusters using the Anthos client",
      subcommands: [
        {
          name: "login",
          description: "Authenticate clusters using the Anthos client",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--cluster",
              description:
                "Cluster to authenticate against. If no cluster is specified, the command will print a list of available options",
              args: {
                name: "CLUSTER",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--dry-run",
              description:
                "Print out the generated kubectl commands but do not execute them",
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
              name: "--kubeconfig",
              description:
                "Specifies the destination kubeconfig file where credentials will be stored",
              args: {
                name: "KUBECONFIG",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--login-config",
              description:
                "Specifies the configuration yaml file for login. Can be a file path or a URL",
              args: {
                name: "LOGIN_CONFIG",
                description: "String",
              },
            },
            {
              name: "--login-config-cert",
              description:
                "Specifies the CA certificate file to be added to trusted pool for making HTTPS connections to a `--login-config` URL",
              args: {
                name: "LOGIN_CONFIG_CERT",
              },
            },
            {
              name: "--no-browser",
              description:
                "Option to indicate login completion on a second device with browser.Used with `server` option",
            },
            {
              name: "--no-dry-run",
              description:
                "Print out the generated kubectl commands but do not execute them",
              hidden: true,
            },
            {
              name: "--no-set-preferred-auth",
              description:
                "If set, forces update of preferred authentication for given cluster",
              hidden: true,
            },
            optNoShowExecError,
            optProject,
            optQuiet,
            {
              name: "--remote-bootstrap",
              description:
                "Option to complete login that was started using `no-browser` optionon a remote device that does not have a browser",
              args: {
                name: "REMOTE_BOOTSTRAP",
                description: "String",
              },
            },
            {
              name: "--server",
              description:
                "Specifies the URL of API server of the cluster to authenticate against",
              args: {
                name: "SERVER",
                description: "String",
              },
            },
            {
              name: "--set-preferred-auth",
              description:
                "If set, forces update of preferred authentication for given cluster",
            },
            optShowExecError,
            optTraceToken,
            {
              name: "--user",
              description:
                "If configuring multiple user accounts in the same kubecconfig file, you can specify a user to differentiate between them",
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
          name: "token",
          description: "Creates a token for authentication",
          hidden: true,
          options: [
            {
              name: "--access-token",
              description:
                "Access Token received from identity provider after authorization flow",
              args: {
                name: "ACCESS_TOKEN",
                description: "String",
              },
            },
            {
              name: "--access-token-expiry",
              description:
                "Expiration time of access token received from identity provider after authorization flow. The expected format is the number of seconds elapsed since January 1, 1970 UTC",
              args: {
                name: "ACCESS_TOKEN_EXPIRY",
                description: "String",
              },
            },
            optAccessTokenFile,
            optAccount,
            {
              name: "--aws-sts-region",
              description: "Region for AWS STS endpoint",
              args: {
                name: "AWS_STS_REGION",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--client-id",
              description: "ClientID is the id for OIDC client application",
              args: {
                name: "CLIENT_ID",
                description: "String",
              },
            },
            {
              name: "--client-secret",
              description:
                "Client Secret is the shared secret between OIDC client application and OIDC provider",
              args: {
                name: "CLIENT_SECRET",
                description: "String",
              },
            },
            {
              name: "--cluster",
              description: "Name of the cluster for which token is created",
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
              name: "--id-token",
              description:
                "ID Token received from identity provider after authorization flow",
              args: {
                name: "ID_TOKEN",
                description: "String",
              },
            },
            {
              name: "--idp-certificate-authority-data",
              description:
                "PEM-encoded certificate authority certificate for OIDC provider",
              args: {
                name: "IDP_CERTIFICATE_AUTHORITY_DATA",
                description: "String",
              },
            },
            {
              name: "--idp-issuer-url",
              description:
                "URI for the OIDC provider. This URI should point to the level below .well-known/openid-configuration",
              args: {
                name: "IDP_ISSUER_URL",
                description: "String",
              },
            },
            optImpersonateServiceAccount,
            {
              name: "--kubeconfig-path",
              description:
                "Path to the kubeconfig path that would be updated with ID and access token on expiry",
              args: {
                name: "KUBECONFIG_PATH",
                description: "String",
              },
            },
            optLogHttp,
            optNoShowExecError,
            optProject,
            optQuiet,
            {
              name: "--refresh-token",
              description:
                "Refresh Token received from identity provider after authorization flow",
              args: {
                name: "REFRESH_TOKEN",
                description: "String",
              },
            },
            optShowExecError,
            optTraceToken,
            {
              name: "--type",
              description:
                "Type of token to be created. _TYPE_ must be one of: *aws*, *oidc*",
              priority: 100,
              args: {
                name: "TYPE",
                suggestions: ["aws", "oidc"],
              },
            },
            {
              name: "--user",
              description: "User used in kubeconfig",
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
          name: "version",
          description: "Get version info for the Anthos Auth client",
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
            optLogHttp,
            optNoShowExecError,
            optProject,
            optQuiet,
            optShowExecError,
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
      name: "config",
      description: "Anthos configuration command group",
      subcommands: [
        {
          name: "controller",
          description: "Manage Anthos Config Controller instances",
          subcommands: [
            {
              name: "create",
              description: "Create Anthos Config Controller instances",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--async",
                  description:
                    "Return immediately, without waiting for the operation in progress to complete",
                },
                optBillingProject,
                {
                  name: "--cluster-ipv4-cidr-block",
                  description:
                    "The IP address range for the cluster pod IPs. Can be specified as a netmask size (e.g. '/14') or as in CIDR notation (e.g. '10.100.0.0/20'). Defaults to '/20' if flag is not provided",
                  args: {
                    name: "CLUSTER_IPV4_CIDR_BLOCK",
                    description: "String",
                  },
                },
                {
                  name: "--cluster-named-range",
                  description:
                    "The name of the existing secondary range in the clusters subnetwork to use for pod IP addresses. Alternatively, `--cluster_cidr_block` can be used to automatically create a GKE-managed one",
                  args: {
                    name: "CLUSTER_NAMED_RANGE",
                    description: "String",
                  },
                },
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--full-management",
                  description: "Enable full cluster management type",
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                {
                  name: "--location",
                  description:
                    "The name of the Config Controller instance location. Currently, only ``us-central1'', ``us-east1'', ``us-east4'', ``us-east5'', ``us-west2'', ``northamerica-northeast1'', ``northamerica-northeast2'', ``europe-north1'', ``europe-west1'', ``europe-west3'', ``europe-west6'', ``australia-southeast1'', ``australia-southeast2'', ``asia-northeast1'', ``asia-northeast2'' and ``asia-southeast1'' are supported",
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                {
                  name: "--man-block",
                  description:
                    "(DEPRECATED) Master Authorized Network. Allows access to the Kubernetes control plane from this block. Defaults to `0.0.0.0/0` if flag is not provided",
                  deprecated: true,
                  args: {
                    name: "MAN_BLOCK",
                    description: "String",
                  },
                },
                {
                  name: "--man-blocks",
                  description:
                    "Master Authorized Network. Allows users to specify multiple blocks to access the Kubernetescontrol plane from this block. Defaults to `0.0.0.0/0` if flag is not provided",
                  args: {
                    name: "BLOCK",
                    description: "List",
                  },
                },
                {
                  name: "--master-ipv4-cidr-block",
                  description:
                    "The /28 network that the control plane will use. Defaults to '172.16.0.128/28' if flag is not provided",
                  args: {
                    name: "MASTER_IPV4_CIDR_BLOCK",
                    description: "String",
                  },
                },
                {
                  name: "--network",
                  description:
                    "Existing VPC Network to put the GKE cluster and nodes in. Defaults to 'default' if flag is not provided. If `--subnet=SUBNET` is also specified, subnet must be a subnetwork of the network specified by this `--network=NETWORK` flag",
                  args: {
                    name: "NETWORK",
                    description: "String",
                  },
                },
                {
                  name: "--no-async",
                  description:
                    "Return immediately, without waiting for the operation in progress to complete",
                  hidden: true,
                },
                {
                  name: "--no-use-private-endpoint",
                  description:
                    "Only allow access to the master's private endpoint IP",
                  hidden: true,
                },
                optProject,
                optQuiet,
                {
                  name: "--services-ipv4-cidr-block",
                  description:
                    "The IP address range for the cluster service IPs. Can be specified as a netmask size (e.g. '/14') or as in CIDR notation (e.g. '10.100.0.0/20'). Defaults to '/24' if flag is not provided",
                  args: {
                    name: "SERVICES_IPV4_CIDR_BLOCK",
                    description: "String",
                  },
                },
                {
                  name: "--services-named-range",
                  description:
                    "The name of the existing secondary range in the clusters subnetwork to use for service ClusterIPs. Alternatively, `--services_cidr_block` can be used to automatically create a GKE-managed one",
                  args: {
                    name: "SERVICES_NAMED_RANGE",
                    description: "String",
                  },
                },
                {
                  name: "--subnet",
                  description:
                    "Specifies the subnet that the VM instances are a part of. `--network=NETWORK` must also be specified, subnet must be a subnetwork of the network specified by the `--network=NETWORK` flag",
                  args: {
                    name: "SUBNET",
                    description: "String",
                  },
                },
                optTraceToken,
                {
                  name: "--use-private-endpoint",
                  description:
                    "Only allow access to the master's private endpoint IP",
                },
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "NAME",
                description:
                  "ID of the instance or fully qualified identifier for the instance",
              },
            },
            {
              name: "delete",
              description: "Delete Anthos Config Controller instances",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--async",
                  description:
                    "Return immediately, without waiting for the operation in progress to complete",
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
                  name: "--no-async",
                  description:
                    "Return immediately, without waiting for the operation in progress to complete",
                  hidden: true,
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "NAME",
                description:
                  "ID of the instance or fully qualified identifier for the instance",
              },
            },
            {
              name: "describe",
              description: "Describe Anthos Config Controller instances",
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
                name: "NAME",
                description:
                  "ID of the instance or fully qualified identifier for the instance",
              },
            },
            {
              name: "get-config-connector-identity",
              description: "Fetch default Config Connector identity",
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
                  description:
                    "The location (region) of the Anthos Config Controller",
                  priority: 100,
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
                name: "NAME",
                description: "Name of the Anthos Config Controller",
              },
            },
            {
              name: "get-credentials",
              description:
                "Fetch credentials for a running Anthos Config Controller",
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
                  description:
                    "The location (region) of the Anthos Config Controller",
                  priority: 100,
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
                name: "NAME",
                description: "Name of the Anthos Config Controller",
              },
            },
            {
              name: "list",
              description: "List Anthos Config Controller instances",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--filter",
                  description:
                    "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed. If the expression evaluates `True`, then that item is listed. For more details and examples of filter expressions, run $ gcloud topic filters. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
                  args: {
                    name: "EXPRESSION",
                    description: "String",
                  },
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--full-name",
                  description: "Print the fully specified name of the instance",
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                {
                  name: "--limit",
                  description:
                    "Maximum number of resources to list. The default is *unlimited*. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
                  args: {
                    name: "LIMIT",
                  },
                },
                {
                  name: "--location",
                  description:
                    "ID of the instance-list or fully qualified identifier for the instance-list",
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                {
                  name: "--no-full-name",
                  description: "Print the fully specified name of the instance",
                  hidden: true,
                },
                {
                  name: "--page-size",
                  description:
                    "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is determined by the service if it supports paging, otherwise it is *unlimited* (no paging). Paging may be applied before or after *--filter* and *--limit* depending on the service",
                  args: {
                    name: "PAGE_SIZE",
                  },
                },
                optProject,
                optQuiet,
                {
                  name: "--sort-by",
                  description:
                    "Comma-separated list of resource field key names to sort by. The default order is ascending. Prefix a field with ``~'' for descending order on that field. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
                  args: {
                    name: "FIELD",
                    description: "List",
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
          name: "operations",
          description:
            "Get and list operations for Anthos Config Controller instances",
          subcommands: [
            {
              name: "describe",
              description: "Describe Anthos Config Controller operations",
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
                name: "OPERATION",
                description:
                  "ID of the operation or fully qualified identifier for the operation",
              },
            },
            {
              name: "list",
              description: "List Anthos Config Controller operations",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--filter",
                  description:
                    "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed. If the expression evaluates `True`, then that item is listed. For more details and examples of filter expressions, run $ gcloud topic filters. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
                  args: {
                    name: "EXPRESSION",
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
                  name: "--limit",
                  description:
                    "Maximum number of resources to list. The default is *unlimited*. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
                  args: {
                    name: "LIMIT",
                  },
                },
                {
                  name: "--location",
                  description:
                    "ID of the operation-list or fully qualified identifier for the operation-list",
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                {
                  name: "--page-size",
                  description:
                    "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is determined by the service if it supports paging, otherwise it is *unlimited* (no paging). Paging may be applied before or after *--filter* and *--limit* depending on the service",
                  args: {
                    name: "PAGE_SIZE",
                  },
                },
                optProject,
                optQuiet,
                {
                  name: "--sort-by",
                  description:
                    "Comma-separated list of resource field key names to sort by. The default order is ascending. Prefix a field with ``~'' for descending order on that field. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
                  args: {
                    name: "FIELD",
                    description: "List",
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
      name: "create-login-config",
      description: "Generates a login configuration file",
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
          name: "--kubeconfig",
          description:
            "Specifies the input kubeconfig file to access user cluster for login configuration data",
          priority: 100,
          args: {
            name: "KUBECONFIG",
            description: "String",
          },
        },
        optLogHttp,
        {
          name: "--merge-from",
          description:
            "Specifies the file path of an existing login configuration file to merge with",
          args: {
            name: "MERGE_FROM",
            description: "String",
          },
        },
        optNoShowExecError,
        {
          name: "--output",
          description:
            'Destination to write login configuration file. Defaults to "kubectl-anthos-config.yaml"',
          args: {
            name: "OUTPUT",
          },
        },
        optProject,
        optQuiet,
        optShowExecError,
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
