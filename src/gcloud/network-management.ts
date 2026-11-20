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
    "ID of the location or fully qualified identifier for the location",
  priority: 100,
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation2: Fig.Option = {
  name: "--location",
  description: "The location id of the networkMonitoringProvider resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description: "The location id of the vpcFlowLogsConfig resource",
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

const optNetworkMonitoringProvider: Fig.Option = {
  name: "--network-monitoring-provider",
  description:
    "ID of the networkMonitoringProvider or fully qualified identifier for the networkMonitoringProvider",
  priority: 100,
  args: {
    name: "NETWORK_MONITORING_PROVIDER",
    description: "String",
  },
};

const optNetworkMonitoringProvider2: Fig.Option = {
  name: "--network-monitoring-provider",
  description: "The ID of the Network Monitoring Provider",
  priority: 100,
  args: {
    name: "NETWORK_MONITORING_PROVIDER",
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

const optOrganization: Fig.Option = {
  name: "--organization",
  description: "The organization id of the vpcFlowLogsConfig resource",
  args: {
    name: "ORGANIZATION",
    description: "String",
  },
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
  name: "network-management",
  description: "Manage Network Management resources",
  subcommands: [
    {
      name: "connectivity-tests",
      description: "Manage Network Management ConnectivityTests",
      subcommands: [
        {
          name: "create",
          description: "Create a new connectivity test",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--bypass-firewall-checks",
              description:
                "This boolean controls whether to skip firewall checking",
            },
            optConfiguration,
            {
              name: "--description",
              description: "The description of the connectivity test",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--destination-cloud-sql-instance",
              description:
                "A Cloud SQL instance URI as the destination endpoint",
              args: {
                name: "DESTINATION_CLOUD_SQL_INSTANCE",
                description: "String",
              },
            },
            {
              name: "--destination-forwarding-rule",
              description: "A forwarding rule URI as the destination endpoint",
              args: {
                name: "DESTINATION_FORWARDING_RULE",
                description: "String",
              },
            },
            {
              name: "--destination-fqdn",
              description:
                "A hostname as the destination endpoint. Only applicable for Google Kubernetes Engine",
              args: {
                name: "DESTINATION_FQDN",
                description: "String",
              },
            },
            {
              name: "--destination-gke-master-cluster",
              description:
                "A cluster URI for Google Kubernetes Engine master as the destination endpoint",
              args: {
                name: "DESTINATION_GKE_MASTER_CLUSTER",
                description: "String",
              },
            },
            {
              name: "--destination-gke-pod",
              description: "A GKE Pod URI as the destination endpoint",
              args: {
                name: "DESTINATION_GKE_POD",
                description: "String",
              },
            },
            {
              name: "--destination-instance",
              description:
                "A Compute Engine instance URI as the destination endpoint",
              args: {
                name: "DESTINATION_INSTANCE",
                description: "String",
              },
            },
            {
              name: "--destination-ip-address",
              description:
                "The IP address of the destination which can be an external or internal IP",
              args: {
                name: "DESTINATION_IP_ADDRESS",
                description: "String",
              },
            },
            {
              name: "--destination-network",
              description:
                "A VPC network URI for the destination endpoint. Used only when the source is an external IP address endpoint, and the destination is an internal IP address endpoint",
              args: {
                name: "DESTINATION_NETWORK",
                description: "String",
              },
            },
            {
              name: "--destination-port",
              description:
                "The IP protocol port of the destination. Only applicable when protocol is TCP or UDP",
              args: {
                name: "DESTINATION_PORT",
                description: "Int",
              },
            },
            {
              name: "--destination-project",
              description: "Project ID of the destination endpoint",
              args: {
                name: "DESTINATION_PROJECT",
                description: "String",
              },
            },
            {
              name: "--destination-redis-cluster",
              description: "A Redis cluster URI as the destination endpoint",
              args: {
                name: "DESTINATION_REDIS_CLUSTER",
                description: "String",
              },
            },
            {
              name: "--destination-redis-instance",
              description: "A Redis instance URI as the destination endpoint",
              args: {
                name: "DESTINATION_REDIS_INSTANCE",
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
              name: "--labels",
              description: "List of label KEY=VALUE pairs to add",
              args: {
                name: "KEY=VALUE",
              },
            },
            optLogHttp,
            optNoAsync,
            {
              name: "--no-bypass-firewall-checks",
              description:
                "This boolean controls whether to skip firewall checking",
              hidden: true,
            },
            {
              name: "--no-round-trip",
              description:
                "This boolean controls whether return traces (from the destination to the source) will be additionally calculated if packet successfully reaches the destination from the source",
              hidden: true,
            },
            {
              name: "--other-projects",
              description:
                "IDs of other projects involved in the connectivity test, besides the source and destination project",
              args: {
                name: "OTHER_PROJECTS",
                description: "List",
              },
            },
            optProject,
            {
              name: "--protocol",
              description:
                'Type of protocol for the test. When not provided, "TCP" is assumed',
              args: {
                name: "PROTOCOL",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--round-trip",
              description:
                "This boolean controls whether return traces (from the destination to the source) will be additionally calculated if packet successfully reaches the destination from the source",
            },
            {
              name: "--source-app-engine-version",
              description: "App Engine version URI as the source endpoint",
              args: {
                name: "SOURCE_APP_ENGINE_VERSION",
                description: "String",
              },
            },
            {
              name: "--source-cloud-function",
              description: "A Cloud function URI as the source endpoint",
              args: {
                name: "SOURCE_CLOUD_FUNCTION",
                description: "String",
              },
            },
            {
              name: "--source-cloud-run-revision",
              description: "Cloud Run revision URI as the source endpoint",
              args: {
                name: "SOURCE_CLOUD_RUN_REVISION",
                description: "String",
              },
            },
            {
              name: "--source-cloud-sql-instance",
              description: "A Cloud SQL instance URI as the source endpoint",
              args: {
                name: "SOURCE_CLOUD_SQL_INSTANCE",
                description: "String",
              },
            },
            {
              name: "--source-gke-master-cluster",
              description:
                "A cluster URI for Google Kubernetes Engine master as the source endpoint",
              args: {
                name: "SOURCE_GKE_MASTER_CLUSTER",
                description: "String",
              },
            },
            {
              name: "--source-gke-pod",
              description: "A GKE Pod URI as the source endpoint",
              args: {
                name: "SOURCE_GKE_POD",
                description: "String",
              },
            },
            {
              name: "--source-instance",
              description:
                "A Compute Engine instance URI as the source endpoint",
              args: {
                name: "SOURCE_INSTANCE",
                description: "String",
              },
            },
            {
              name: "--source-ip-address",
              description:
                "The IP address of the source which can be an external or internal IP",
              args: {
                name: "SOURCE_IP_ADDRESS",
                description: "String",
              },
            },
            {
              name: "--source-network",
              description:
                "A VPC network URI for the source endpoint. Used according to the `source-network-type` flag",
              args: {
                name: "SOURCE_NETWORK",
                description: "String",
              },
            },
            {
              name: "--source-network-type",
              description:
                "Type of the network where the source is located. _SOURCE_NETWORK_TYPE_ must be one of:",
              args: {
                name: "SOURCE_NETWORK_TYPE",
                suggestions: [
                  "gcp-network",
                  "internet",
                  "non-gcp-network",
                  "unspecified",
                ],
              },
            },
            {
              name: "--source-project",
              description: "Project ID of the source endpoint",
              args: {
                name: "SOURCE_PROJECT",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONNECTIVITY_TEST",
            description:
              "ID of the connectivity test or fully qualified identifier for the connectivity test",
          },
        },
        {
          name: "delete",
          description: "Delete a connectivity test",
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
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONNECTIVITY_TEST",
            description:
              "ID of the connectivity test or fully qualified identifier for the connectivity test",
          },
        },
        {
          name: "describe",
          description: "Describe a connectivity test",
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
            name: "CONNECTIVITY_TEST",
            description:
              "ID of the connectivity test or fully qualified identifier for the connectivity test",
          },
        },
        {
          name: "list",
          description: "List connectivity tests",
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
        {
          name: "rerun",
          description: "Rerun a connectivity test",
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
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONNECTIVITY_TEST",
            description:
              "ID of the connectivity test or fully qualified identifier for the connectivity test",
          },
        },
        {
          name: "update",
          description: "Update an existing connectivity test",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--bypass-firewall-checks",
              description:
                "This boolean controls whether to skip firewall checking. Use --no-bypass-firewall-checks to disable",
            },
            {
              name: "--clear-destination-cloud-sql-instance",
              description: "Clear existing destination Cloud SQL instance",
            },
            {
              name: "--clear-destination-forwarding-rule",
              description: "Clear existing destination forwarding rule",
            },
            {
              name: "--clear-destination-gke-master-cluster",
              description:
                "Clear existing destination cluster for Google Kubernetes Engine master",
            },
            {
              name: "--clear-destination-gke-pod",
              description: "Clear existing destination GKE Pod",
            },
            {
              name: "--clear-destination-instance",
              description: "Clear existing destination instance",
            },
            {
              name: "--clear-destination-ip-address",
              description: "Clear existing destination IP address",
            },
            {
              name: "--clear-destination-redis-cluster",
              description: "Clear existing destination Redis Cluster",
            },
            {
              name: "--clear-destination-redis-instance",
              description: "Clear existing destination Redis Instance",
            },
            {
              name: "--clear-source-app-engine-version",
              description: "Clear existing source App Engine version",
            },
            {
              name: "--clear-source-cloud-function",
              description: "Clear existing source Cloud function",
            },
            {
              name: "--clear-source-cloud-run-revision",
              description: "Clear existing source Cloud Run revision",
            },
            {
              name: "--clear-source-cloud-sql-instance",
              description: "Clear existing source Cloud SQL instance",
            },
            {
              name: "--clear-source-gke-master-cluster",
              description:
                "Clear existing source cluster for Google Kubernetes Engine master",
            },
            {
              name: "--clear-source-gke-pod",
              description: "Clear existing source GKE Pod",
            },
            {
              name: "--clear-source-instance",
              description: "Clear existing source instance",
            },
            {
              name: "--clear-source-ip-address",
              description: "Clear existing source IP address",
            },
            optConfiguration,
            {
              name: "--description",
              description: "The description of the connectivity test",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--destination-cloud-sql-instance",
              description:
                "A Cloud SQL instance URI as the destination endpoint",
              args: {
                name: "DESTINATION_CLOUD_SQL_INSTANCE",
                description: "String",
              },
            },
            {
              name: "--destination-forwarding-rule",
              description: "A forwarding rule URI as the destination endpoint",
              args: {
                name: "DESTINATION_FORWARDING_RULE",
                description: "String",
              },
            },
            {
              name: "--destination-fqdn",
              description:
                "A hostname as the destination endpoint. Only applicable for Google Kubernetes Engine",
              args: {
                name: "DESTINATION_FQDN",
                description: "String",
              },
            },
            {
              name: "--destination-gke-master-cluster",
              description:
                "A cluster URI for Google Kubernetes Engine master as the destination endpoint",
              args: {
                name: "DESTINATION_GKE_MASTER_CLUSTER",
                description: "String",
              },
            },
            {
              name: "--destination-gke-pod",
              description: "A GKE Pod URI as the destination endpoint",
              args: {
                name: "DESTINATION_GKE_POD",
                description: "String",
              },
            },
            {
              name: "--destination-instance",
              description:
                "A Compute Engine instance URI as the destination endpoint",
              args: {
                name: "DESTINATION_INSTANCE",
                description: "String",
              },
            },
            {
              name: "--destination-ip-address",
              description:
                "The IP address of the destination which can be an external or internal IP",
              args: {
                name: "DESTINATION_IP_ADDRESS",
                description: "String",
              },
            },
            {
              name: "--destination-network",
              description:
                "A VPC network URI for the destination endpoint. Used only when the source is an external IP address endpoint, and the destination is an internal IP address endpoint",
              args: {
                name: "DESTINATION_NETWORK",
                description: "String",
              },
            },
            {
              name: "--destination-port",
              description:
                "The IP protocol port of the destination. Only applicable when protocol is TCP or UDP",
              args: {
                name: "DESTINATION_PORT",
                description: "Int",
              },
            },
            {
              name: "--destination-project",
              description: "Project ID of the destination endpoint",
              args: {
                name: "DESTINATION_PROJECT",
                description: "String",
              },
            },
            {
              name: "--destination-redis-cluster",
              description: "A Redis cluster URI as the destination endpoint",
              args: {
                name: "DESTINATION_REDIS_CLUSTER",
                description: "String",
              },
            },
            {
              name: "--destination-redis-instance",
              description: "A Redis instance URI as the destination endpoint",
              args: {
                name: "DESTINATION_REDIS_INSTANCE",
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
              name: "--labels",
              description: "List of label KEY=VALUE pairs to add",
              args: {
                name: "KEY=VALUE",
              },
            },
            optLogHttp,
            optNoAsync,
            {
              name: "--no-bypass-firewall-checks",
              description:
                "This boolean controls whether to skip firewall checking. Use --no-bypass-firewall-checks to disable",
              hidden: true,
            },
            {
              name: "--no-clear-destination-cloud-sql-instance",
              description: "Clear existing destination Cloud SQL instance",
              hidden: true,
            },
            {
              name: "--no-clear-destination-forwarding-rule",
              description: "Clear existing destination forwarding rule",
              hidden: true,
            },
            {
              name: "--no-clear-destination-gke-master-cluster",
              description:
                "Clear existing destination cluster for Google Kubernetes Engine master",
              hidden: true,
            },
            {
              name: "--no-clear-destination-gke-pod",
              description: "Clear existing destination GKE Pod",
              hidden: true,
            },
            {
              name: "--no-clear-destination-instance",
              description: "Clear existing destination instance",
              hidden: true,
            },
            {
              name: "--no-clear-destination-ip-address",
              description: "Clear existing destination IP address",
              hidden: true,
            },
            {
              name: "--no-clear-destination-redis-cluster",
              description: "Clear existing destination Redis Cluster",
              hidden: true,
            },
            {
              name: "--no-clear-destination-redis-instance",
              description: "Clear existing destination Redis Instance",
              hidden: true,
            },
            {
              name: "--no-clear-source-app-engine-version",
              description: "Clear existing source App Engine version",
              hidden: true,
            },
            {
              name: "--no-clear-source-cloud-function",
              description: "Clear existing source Cloud function",
              hidden: true,
            },
            {
              name: "--no-clear-source-cloud-run-revision",
              description: "Clear existing source Cloud Run revision",
              hidden: true,
            },
            {
              name: "--no-clear-source-cloud-sql-instance",
              description: "Clear existing source Cloud SQL instance",
              hidden: true,
            },
            {
              name: "--no-clear-source-gke-master-cluster",
              description:
                "Clear existing source cluster for Google Kubernetes Engine master",
              hidden: true,
            },
            {
              name: "--no-clear-source-gke-pod",
              description: "Clear existing source GKE Pod",
              hidden: true,
            },
            {
              name: "--no-clear-source-instance",
              description: "Clear existing source instance",
              hidden: true,
            },
            {
              name: "--no-clear-source-ip-address",
              description: "Clear existing source IP address",
              hidden: true,
            },
            {
              name: "--no-round-trip",
              description:
                "This boolean controls whether return traces (from the destination to the source) will be additionally calculated if packet successfully reaches the destination from the source. Use --no-round-trip to disable",
              hidden: true,
            },
            {
              name: "--other-projects",
              description:
                "IDs of other projects involved in the connectivity test, besides the source and destination project",
              args: {
                name: "OTHER_PROJECTS",
                description: "List",
              },
            },
            optProject,
            {
              name: "--protocol",
              description:
                'Type of protocol for the test. When not provided, "TCP" is assumed',
              args: {
                name: "PROTOCOL",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--round-trip",
              description:
                "This boolean controls whether return traces (from the destination to the source) will be additionally calculated if packet successfully reaches the destination from the source. Use --no-round-trip to disable",
            },
            {
              name: "--source-app-engine-version",
              description: "App Engine version URI as the source endpoint",
              args: {
                name: "SOURCE_APP_ENGINE_VERSION",
                description: "String",
              },
            },
            {
              name: "--source-cloud-function",
              description: "A Cloud function URI as the source endpoint",
              args: {
                name: "SOURCE_CLOUD_FUNCTION",
                description: "String",
              },
            },
            {
              name: "--source-cloud-run-revision",
              description: "Cloud Run revision URI as the source endpoint",
              args: {
                name: "SOURCE_CLOUD_RUN_REVISION",
                description: "String",
              },
            },
            {
              name: "--source-cloud-sql-instance",
              description: "A Cloud SQL instance URI as the source endpoint",
              args: {
                name: "SOURCE_CLOUD_SQL_INSTANCE",
                description: "String",
              },
            },
            {
              name: "--source-gke-master-cluster",
              description:
                "A cluster URI for Google Kubernetes Engine master as the source endpoint",
              args: {
                name: "SOURCE_GKE_MASTER_CLUSTER",
                description: "String",
              },
            },
            {
              name: "--source-gke-pod",
              description: "A GKE Pod URI as the source endpoint",
              args: {
                name: "SOURCE_GKE_POD",
                description: "String",
              },
            },
            {
              name: "--source-instance",
              description:
                "A Compute Engine instance URI as the source endpoint",
              args: {
                name: "SOURCE_INSTANCE",
                description: "String",
              },
            },
            {
              name: "--source-ip-address",
              description:
                "The IP address of the source which can be an external or internal IP",
              args: {
                name: "SOURCE_IP_ADDRESS",
                description: "String",
              },
            },
            {
              name: "--source-network",
              description:
                "A VPC network URI for the source endpoint. Used according to the `source-network-type` flag",
              args: {
                name: "SOURCE_NETWORK",
                description: "String",
              },
            },
            {
              name: "--source-network-type",
              description:
                "Type of the network where the source is located. _SOURCE_NETWORK_TYPE_ must be one of:",
              args: {
                name: "SOURCE_NETWORK_TYPE",
                suggestions: [
                  "gcp-network",
                  "internet",
                  "non-gcp-network",
                  "unspecified",
                ],
              },
            },
            {
              name: "--source-project",
              description: "Project ID of the source endpoint",
              args: {
                name: "SOURCE_PROJECT",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONNECTIVITY_TEST",
            description:
              "ID of the connectivity test or fully qualified identifier for the connectivity test",
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
      name: "network-monitoring-providers",
      description:
        "A Network Monitoring Provider manages the enablement state of the Network Insights service",
      subcommands: [
        {
          name: "create",
          description: "Create a Network Monitoring Provider",
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
            {
              name: "--provider-type",
              description:
                "Type of the NetworkMonitoringProvider. _PROVIDER_TYPE_ must be (only one value is supported):",
              priority: 100,
              args: {
                name: "PROVIDER_TYPE",
                suggestions: ["external"],
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "NETWORK_MONITORING_PROVIDER",
            description:
              "ID of the networkMonitoringProvider or fully qualified identifier for the networkMonitoringProvider",
          },
        },
        {
          name: "delete",
          description: "Delete a Network Monitoring Provider",
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
                "If set to true, any nested [MonitoringPoints][google.cloud.networkmanagement.v1.MonitoringPoint], [NetworkPaths][google.cloud.networkmanagement.v1.NetworkPath] and [WebPaths][google.cloud.networkmanagement.v1.WebPath] resources from this [NetworkMonitoringProvider][google.cloud.networkmanagement.v1.NetworkMonitoringProvider] will also be deleted. Otherwise, the request will only work if there are no nested resources",
            },
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
              name: "--no-force",
              description:
                "If set to true, any nested [MonitoringPoints][google.cloud.networkmanagement.v1.MonitoringPoint], [NetworkPaths][google.cloud.networkmanagement.v1.NetworkPath] and [WebPaths][google.cloud.networkmanagement.v1.WebPath] resources from this [NetworkMonitoringProvider][google.cloud.networkmanagement.v1.NetworkMonitoringProvider] will also be deleted. Otherwise, the request will only work if there are no nested resources",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "NETWORK_MONITORING_PROVIDER",
            description:
              "ID of the networkMonitoringProvider or fully qualified identifier for the networkMonitoringProvider",
          },
        },
        {
          name: "describe",
          description: "Describe a Network Monitoring Provider",
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
            name: "NETWORK_MONITORING_PROVIDER",
            description:
              "ID of the networkMonitoringProvider or fully qualified identifier for the networkMonitoringProvider",
          },
        },
        {
          name: "generate-monitoring-point-config",
          description: "Generate a monitoring point config",
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
            name: "NETWORK_MONITORING_PROVIDER",
            description:
              "ID of the networkMonitoringProvider or fully qualified identifier for the networkMonitoringProvider",
          },
        },
        {
          name: "generate-provider-access-token",
          description: "Generate a provider access token",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gcp-access-token",
              description: "Google Cloud access token",
              priority: 100,
              args: {
                name: "GCP_ACCESS_TOKEN",
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
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "NETWORK_MONITORING_PROVIDER",
            description:
              "ID of the networkMonitoringProvider or fully qualified identifier for the networkMonitoringProvider",
          },
        },
        {
          name: "list",
          description: "List Network Monitoring Providers",
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
          name: "monitoring-points",
          description:
            "A Monitoring Point is an agent within your network or application infrastructure that sends probes and reports the results to AppNeta",
          subcommands: [
            {
              name: "describe",
              description: "Describe a Monitoring Point",
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
                    "The location id of the monitoringPoint resource",
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                {
                  name: "--network-monitoring-provider",
                  description:
                    "The networkMonitoringProvider id of the monitoringPoint resource",
                  args: {
                    name: "NETWORK_MONITORING_PROVIDER",
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
                name: "MONITORING_POINT",
                description:
                  "ID of the monitoringPoint or fully qualified identifier for the monitoringPoint",
              },
            },
            {
              name: "download-install-script",
              description:
                "Download an installation script for a Monitoring Point",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--dns-server-address",
                  description:
                    "Primary DNS server address. Required if `--static-ip-address` is specified",
                  args: {
                    name: "DNS_SERVER_ADDRESS",
                    description: "String",
                  },
                },
                {
                  name: "--dns-server-secondary-address",
                  description:
                    "Secondary DNS server address. Used with `--static-ip-address`",
                  args: {
                    name: "DNS_SERVER_SECONDARY_ADDRESS",
                    description: "String",
                  },
                },
                {
                  name: "--domain",
                  description:
                    "Domain name of the Monitoring Point. Used with `--static-ip-address`",
                  args: {
                    name: "DOMAIN",
                    description: "String",
                  },
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--gateway-address",
                  description:
                    "Gateway IP address. Required if `--static-ip-address` is specified",
                  args: {
                    name: "GATEWAY_ADDRESS",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                {
                  name: "--hostname",
                  description:
                    "The hostname of the Monitoring Point (example: `test-vm`)",
                  priority: 100,
                  args: {
                    name: "HOSTNAME",
                    description: "String",
                  },
                },
                optImpersonateServiceAccount,
                {
                  name: "--location",
                  description:
                    "The location of the Network Monitoring Provider (example:, `global`)",
                  priority: 100,
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                {
                  name: "--monitoring-point-type",
                  description:
                    "The type of the Monitoring Point. _MONITORING_POINT_TYPE_ must be one of: *container*, *gce-vm*, *helm*, *kvm*, *vmware*",
                  priority: 100,
                  args: {
                    name: "MONITORING_POINT_TYPE",
                    description: "String",
                    suggestions: [
                      "container",
                      "gce-vm",
                      "helm",
                      "kvm",
                      "vmware",
                    ],
                  },
                },
                {
                  name: "--netmask",
                  description:
                    'Network mask (example: "255.255.255.0"). Used with `--static-ip-address`',
                  args: {
                    name: "NETMASK",
                    description: "String",
                  },
                },
                optNetworkMonitoringProvider2,
                {
                  name: "--no-use-dhcp",
                  description:
                    "Whether to use DHCP for IP address configuration. Allowed for types KVM and VMWARE only",
                  hidden: true,
                },
                {
                  name: "--ntp-server-address",
                  description:
                    "Primary NTP server address (IP address or FQDN). Allowed for types KVM and VMWARE only",
                  args: {
                    name: "NTP_SERVER_ADDRESS",
                    description: "String",
                  },
                },
                {
                  name: "--ntp-server-secondary-address",
                  description:
                    "Secondary NTP server address (IP address or FQDN). Allowed for types KVM and VMWARE only",
                  args: {
                    name: "NTP_SERVER_SECONDARY_ADDRESS",
                    description: "String",
                  },
                },
                {
                  name: "--output-file",
                  description: "The path to save the downloaded install script",
                  priority: 100,
                  args: {
                    name: "OUTPUT_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                {
                  name: "--password",
                  description:
                    "Password for logging into the Monitoring Point. Required for types KVM and VMWARE, not allowed for CONTAINER",
                  args: {
                    name: "PASSWORD",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                {
                  name: "--static-ip-address",
                  description:
                    "Static IP address of the Monitoring Point. If specified, `--gateway-address` and `--dns-server-address` are required",
                  args: {
                    name: "STATIC_IP_ADDRESS",
                    description: "String",
                  },
                },
                {
                  name: "--time-zone",
                  description:
                    "Time zone ID for the Monitoring Point (example: `America/Los_Angeles`). Required for types KVM and VMWARE, not allowed for CONTAINER",
                  args: {
                    name: "TIME_ZONE",
                    description: "String",
                  },
                },
                optTraceToken,
                {
                  name: "--use-dhcp",
                  description:
                    "Whether to use DHCP for IP address configuration. Allowed for types KVM and VMWARE only",
                },
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "download-recreate-install-script",
              description:
                "Download an installation script for recreating a Monitoring Point",
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
                  name: "--hostname",
                  description:
                    'The hostname of the Monitoring Point, e.g. "test-vm"',
                  args: {
                    name: "HOSTNAME",
                    description: "String",
                  },
                },
                optImpersonateServiceAccount,
                {
                  name: "--location",
                  description:
                    "The location of the Network Monitoring Provider (example: `global`)",
                  priority: 100,
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                {
                  name: "--monitoring-point",
                  description: "The ID of the Monitoring Point",
                  priority: 100,
                  args: {
                    name: "MONITORING_POINT",
                    description: "String",
                  },
                },
                optNetworkMonitoringProvider2,
                {
                  name: "--output-file",
                  description: "The path to save the downloaded install script",
                  priority: 100,
                  args: {
                    name: "OUTPUT_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "download-server-connect-config",
              description: "Download the server connect configuration",
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
                    "The location of the Network Monitoring Provider (example: `global`)",
                  priority: 100,
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                optNetworkMonitoringProvider2,
                {
                  name: "--output-file",
                  description:
                    "The path to save the downloaded server connect configuration",
                  priority: 100,
                  args: {
                    name: "OUTPUT_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "list",
              description: "List Monitoring Points",
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
                optNetworkMonitoringProvider,
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
          name: "network-paths",
          description:
            "A Network Path represents the hop-by-hop route and active network delivery quality between a Monitoring Point (source) and a target destination",
          subcommands: [
            {
              name: "describe",
              description: "Describe a Network Path",
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
                  description: "The location id of the networkPath resource",
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                {
                  name: "--network-monitoring-provider",
                  description:
                    "The networkMonitoringProvider id of the networkPath resource",
                  args: {
                    name: "NETWORK_MONITORING_PROVIDER",
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
                name: "NETWORK_PATH",
                description:
                  "ID of the networkPath or fully qualified identifier for the networkPath",
              },
            },
            {
              name: "list",
              description: "List Network Paths",
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
                optNetworkMonitoringProvider,
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
          name: "web-paths",
          description:
            "A Web Path represents a monitored web application or URL, assessed from a monitoring point to measure performance and availability",
          subcommands: [
            {
              name: "describe",
              description: "Describe a Web Path",
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
                  description: "The location id of the webPath resource",
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                {
                  name: "--network-monitoring-provider",
                  description:
                    "The networkMonitoringProvider id of the webPath resource",
                  args: {
                    name: "NETWORK_MONITORING_PROVIDER",
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
                name: "WEB_PATH",
                description:
                  "ID of the webPath or fully qualified identifier for the webPath",
              },
            },
            {
              name: "list",
              description: "List Web Paths",
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
                optNetworkMonitoringProvider,
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
    {
      name: "operations",
      description: "Manage Network Management operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Network Management operation",
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "list",
          description: "List Network Management operations",
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
    {
      name: "vpc-flow-logs-configs",
      description: "Manage the VPC Flow Logs configurations",
      subcommands: [
        {
          name: "create",
          description: "Creates a new VPC Flow Logs configuration",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--aggregation-interval",
              description:
                "The aggregation interval for the logs. Default value is INTERVAL_5_SEC. _AGGREGATION_INTERVAL_ must be one of:",
              args: {
                name: "AGGREGATION_INTERVAL",
                suggestions: [
                  "interval-1-min",
                  "interval-10-min",
                  "interval-15-min",
                  "interval-30-sec",
                  "interval-5-min",
                  "interval-5-sec",
                ],
              },
            },
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--cross-project-metadata",
              description:
                "Determines whether to include cross project annotations in the logs. This field is available only for organization configurations. If not specified in org configs will be set to CROSS_PROJECT_METADATA_ENABLED. _CROSS_PROJECT_METADATA_ must be one of:",
              args: {
                name: "CROSS_PROJECT_METADATA",
                suggestions: [
                  "cross-project-metadata-disabled",
                  "cross-project-metadata-enabled",
                ],
              },
            },
            {
              name: "--description",
              description:
                "The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--filter-expr",
              description:
                "Export filter used to define which VPC Flow Logs should be logged",
              args: {
                name: "FILTER_EXPR",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--flow-sampling",
              description:
                "The value of the field must be in (0, 1]. The sampling rate of VPC Flow Logs where 1.0 means all collected logs are reported. Setting the sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs, use the state field instead. Default value is 1.0",
              args: {
                name: "FLOW_SAMPLING",
                description: "Float",
              },
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--interconnect-attachment",
              description:
                "Traffic will be logged from the Interconnect Attachment. Format: projects/{project_id}/regions/{region}/interconnectAttachments/{name}",
              args: {
                name: "INTERCONNECT_ATTACHMENT",
                description: "String",
              },
            },
            {
              name: "--labels",
              description:
                "Resource labels to represent user-provided metadata",
              args: {
                name: "LABELS",
              },
            },
            optLocation3,
            optLogHttp,
            {
              name: "--metadata",
              description:
                "Configures whether all, none or a subset of metadata fields should be added to the reported VPC flow logs. Default value is INCLUDE_ALL_METADATA. _METADATA_ must be one of:",
              args: {
                name: "METADATA",
                suggestions: [
                  "custom-metadata",
                  "exclude-all-metadata",
                  "include-all-metadata",
                ],
              },
            },
            {
              name: "--metadata-fields",
              description:
                'Custom metadata fields to include in the reported VPC flow logs. Can only be specified if "metadata" was set to CUSTOM_METADATA',
              args: {
                name: "METADATA_FIELDS",
                description: "List",
              },
            },
            {
              name: "--network",
              description:
                "Traffic will be logged from VMs, VPN tunnels and Interconnect Attachments within the network. Format: projects/{project_id}/global/networks/{name}",
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            optNoAsync,
            optOrganization,
            optProject,
            optQuiet,
            {
              name: "--state",
              description:
                "The state of the VPC Flow Log configuration. Default value is ENABLED. When creating a new configuration, it must be enabled. Setting state=DISABLED will pause the log generation for this config. _STATE_ must be one of:",
              args: {
                name: "STATE",
                suggestions: ["disabled", "enabled"],
              },
            },
            {
              name: "--subnet",
              description:
                "Traffic will be logged from VMs within the subnetwork. Format: projects/{project_id}/regions/{region}/subnetworks/{name}",
              args: {
                name: "SUBNET",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--vpn-tunnel",
              description:
                "Traffic will be logged from the VPN Tunnel. Format: projects/{project_id}/regions/{region}/vpnTunnels/{name}",
              args: {
                name: "VPN_TUNNEL",
                description: "String",
              },
            },
          ],
          args: {
            name: "VPC_FLOW_LOGS_CONFIG",
            description:
              "ID of the vpcFlowLogsConfig or fully qualified identifier for the vpcFlowLogsConfig",
          },
        },
        {
          name: "delete",
          description: "Deletes the specified VPC Flow Logs configuration",
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
            optOrganization,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VPC_FLOW_LOGS_CONFIG",
            description:
              "ID of the vpcFlowLogsConfig or fully qualified identifier for the vpcFlowLogsConfig",
          },
        },
        {
          name: "describe",
          description:
            "Describe the details of a specific VPC Flow Logs configuration",
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
            optOrganization,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VPC_FLOW_LOGS_CONFIG",
            description:
              "ID of the vpcFlowLogsConfig or fully qualified identifier for the vpcFlowLogsConfig",
          },
        },
        {
          name: "list",
          description: "List all VPC Flow Logs configurations",
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
            {
              name: "--organization",
              description: "The organization id of the location resource",
              args: {
                name: "ORGANIZATION",
                description: "String",
              },
            },
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
          name: "query-org-vpc-flow-logs-configs",
          description:
            "Fetch all organization-level VPC Flow Logs configurations associated with the project",
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
          name: "show-effective-flow-logs-configs",
          description:
            "Show all effective VPC Flow Logs configurations for a resource",
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
            optPageSize,
            optProject,
            optQuiet,
            {
              name: "--resource",
              description:
                "The resource to get the effective VPC Flow Logs configuration for. The resource must belong to the same project as the parent. The resource must be a network, subnetwork, interconnect attachment, VPN tunnel, or a project",
              priority: 100,
              args: {
                name: "RESOURCE",
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
          description:
            "Updates one or more fields in an existing VPC Flow Logs configuration",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-metadata-fields",
              description: "Add new value to metadata_fields list",
              args: {
                name: "ADD_METADATA_FIELDS",
              },
            },
            {
              name: "--aggregation-interval",
              description:
                "The aggregation interval for the logs. Default value is INTERVAL_5_SEC. _AGGREGATION_INTERVAL_ must be one of:",
              args: {
                name: "AGGREGATION_INTERVAL",
                suggestions: [
                  "interval-1-min",
                  "interval-10-min",
                  "interval-15-min",
                  "interval-30-sec",
                  "interval-5-min",
                  "interval-5-sec",
                ],
              },
            },
            optAsync,
            optBillingProject,
            {
              name: "--clear-labels",
              description: "Clear labels value and set to empty map",
            },
            {
              name: "--clear-metadata-fields",
              description: "Clear metadata_fields value and set to empty list",
            },
            optConfiguration,
            {
              name: "--cross-project-metadata",
              description:
                "Determines whether to include cross project annotations in the logs. This field is available only for organization configurations. If not specified in org configs will be set to CROSS_PROJECT_METADATA_ENABLED. _CROSS_PROJECT_METADATA_ must be one of:",
              args: {
                name: "CROSS_PROJECT_METADATA",
                suggestions: [
                  "cross-project-metadata-disabled",
                  "cross-project-metadata-enabled",
                ],
              },
            },
            {
              name: "--description",
              description:
                "The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--filter-expr",
              description:
                "Export filter used to define which VPC Flow Logs should be logged",
              args: {
                name: "FILTER_EXPR",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--flow-sampling",
              description:
                "The value of the field must be in (0, 1]. The sampling rate of VPC Flow Logs where 1.0 means all collected logs are reported. Setting the sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs, use the state field instead. Default value is 1.0",
              args: {
                name: "FLOW_SAMPLING",
                description: "Float",
              },
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--interconnect-attachment",
              description:
                "Traffic will be logged from the Interconnect Attachment. Format: projects/{project_id}/regions/{region}/interconnectAttachments/{name}",
              args: {
                name: "INTERCONNECT_ATTACHMENT",
                description: "String",
              },
            },
            {
              name: "--labels",
              description:
                "Set labels to new value. Resource labels to represent user-provided metadata",
              args: {
                name: "LABELS",
              },
            },
            optLocation3,
            optLogHttp,
            {
              name: "--metadata",
              description:
                "Configures whether all, none or a subset of metadata fields should be added to the reported VPC flow logs. Default value is INCLUDE_ALL_METADATA. _METADATA_ must be one of:",
              args: {
                name: "METADATA",
                suggestions: [
                  "custom-metadata",
                  "exclude-all-metadata",
                  "include-all-metadata",
                ],
              },
            },
            {
              name: "--metadata-fields",
              description: "Set metadata_fields to new value",
              args: {
                name: "METADATA_FIELDS",
              },
            },
            {
              name: "--network",
              description:
                "Traffic will be logged from VMs, VPN tunnels and Interconnect Attachments within the network. Format: projects/{project_id}/global/networks/{name}",
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            optNoAsync,
            {
              name: "--no-clear-labels",
              description: "Clear labels value and set to empty map",
              hidden: true,
            },
            {
              name: "--no-clear-metadata-fields",
              description: "Clear metadata_fields value and set to empty list",
              hidden: true,
            },
            optOrganization,
            optProject,
            optQuiet,
            {
              name: "--remove-labels",
              description:
                "Remove existing value from map labels. Sets `remove_labels` value",
              args: {
                name: "REMOVE_LABELS",
                description: "Dict",
              },
            },
            {
              name: "--remove-metadata-fields",
              description: "Remove existing value from metadata_fields list",
              args: {
                name: "REMOVE_METADATA_FIELDS",
              },
            },
            {
              name: "--state",
              description:
                "The state of the VPC Flow Log configuration. Default value is ENABLED. When creating a new configuration, it must be enabled. Setting state=DISABLED will pause the log generation for this config. _STATE_ must be one of:",
              args: {
                name: "STATE",
                suggestions: ["disabled", "enabled"],
              },
            },
            {
              name: "--subnet",
              description:
                "Traffic will be logged from VMs within the subnetwork. Format: projects/{project_id}/regions/{region}/subnetworks/{name}",
              args: {
                name: "SUBNET",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--update-labels",
              description:
                "Update labels value or add key value pair. Resource labels to represent user-provided metadata",
              args: {
                name: "UPDATE_LABELS",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--vpn-tunnel",
              description:
                "Traffic will be logged from the VPN Tunnel. Format: projects/{project_id}/regions/{region}/vpnTunnels/{name}",
              args: {
                name: "VPN_TUNNEL",
                description: "String",
              },
            },
          ],
          args: {
            name: "VPC_FLOW_LOGS_CONFIG",
            description:
              "ID of the vpcFlowLogsConfig or fully qualified identifier for the vpcFlowLogsConfig",
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
