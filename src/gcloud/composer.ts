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

const optDestination: Fig.Option = {
  name: "--destination",
  description:
    "The path to an existing local directory or a Cloud Storage bucket/directory into which to export files",
  priority: 100,
  args: {
    name: "DESTINATION",
    description: "String",
  },
};

const optEnvironment: Fig.Option = {
  name: "--environment",
  description:
    "ID of the environment or fully qualified identifier for the environment",
  priority: 100,
  args: {
    name: "ENVIRONMENT",
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
    "Region where Composer environment runs or in which to create the environment",
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
  name: "composer",
  description: "Create and manage Cloud Composer Environments",
  subcommands: [
    {
      name: "environments",
      description: "Create and manage Cloud Composer environments",
      subcommands: [
        {
          name: "check-upgrade",
          description:
            "Check that upgrading a Cloud Composer environment does not result in PyPI module conflicts",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--airflow-version",
              description:
                "Upgrade the environment to a later Apache Airflow version in-place",
              args: {
                name: "AIRFLOW_VERSION",
              },
            },
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
              name: "--image-version",
              description:
                "Upgrade the environment to a later version in-place",
              args: {
                name: "IMAGE_VERSION",
              },
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
          name: "create",
          description: "Create and initialize a Cloud Composer environment",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--airflow-configs",
              description:
                "A list of Airflow software configuration override KEY=VALUE pairs to set. For information on how to structure KEYs and VALUEs, run `$ {top_command} help composer environments update`",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--airflow-database-retention-days",
              description:
                "The number of days for the Airflow database retention period. If set to 0, the Airflow database retention mechanism will be disabled",
              args: {
                name: "AIRFLOW_DATABASE_RETENTION_DAYS",
                description: "Int",
              },
            },
            {
              name: "--airflow-version",
              description:
                "Version of Apache Airflow to run in the environment",
              args: {
                name: "AIRFLOW_VERSION",
              },
            },
            optAsync,
            optBillingProject,
            {
              name: "--cloud-sql-ipv4-cidr",
              description:
                "IPv4 CIDR range to use for the Cloud SQL network. This should have a size of the netmask not greater than 24",
              args: {
                name: "CLOUD_SQL_IPV4_CIDR",
              },
            },
            {
              name: "--cloud-sql-machine-type",
              description:
                "Cloud SQL machine type used by the Airflow database. The list of available machine types is available here: https://cloud.google.com/composer/pricing#db-machine-types",
              args: {
                name: "CLOUD_SQL_MACHINE_TYPE",
                description: "String",
              },
            },
            {
              name: "--cloud-sql-preferred-zone",
              description:
                "Select cloud sql preferred zone, supported for Composer 2 Environments",
              args: {
                name: "CLOUD_SQL_PREFERRED_ZONE",
                description: "String",
              },
            },
            {
              name: "--cluster-ipv4-cidr",
              description:
                "IP address range for the pods in this cluster in CIDR notation (e.g. 10.0.0.0/14)",
              args: {
                name: "CLUSTER_IPV4_CIDR",
              },
            },
            {
              name: "--cluster-secondary-range-name",
              description:
                "Secondary range to be used as the source for pod IPs. Alias ranges will be allocated from this secondary range. NAME must be the name of an existing secondary range in the cluster subnetwork",
              args: {
                name: "CLUSTER_SECONDARY_RANGE_NAME",
                description: "String",
              },
            },
            {
              name: "--composer-internal-ipv4-cidr-block",
              description:
                "The IP range in CIDR notation to use internally by Cloud Composer. This should have a netmask length of 20. Can be specified for Composer 3 or greater",
              args: {
                name: "COMPOSER_INTERNAL_IPV4_CIDR_BLOCK",
              },
            },
            {
              name: "--composer-network-ipv4-cidr",
              description:
                "IPv4 CIDR range to use for the Composer network. This must have a size of the netmask between 24 and 29",
              args: {
                name: "COMPOSER_NETWORK_IPV4_CIDR",
              },
            },
            optConfiguration,
            {
              name: "--connection-subnetwork",
              description:
                "Subnetwork from which an IP address for internal communications will be reserved. Needs to belong to the Compute network to which the environment is connected. Can be the same subnetwork as the one to which the environment is connected",
              args: {
                name: "CONNECTION_SUBNETWORK",
                description: "String",
              },
            },
            {
              name: "--connection-type",
              description:
                "Mode of internal communication within the Composer environment. Must be one of `VPC_PEERING` or `PRIVATE_SERVICE_CONNECT`",
              args: {
                name: "CONNECTION_TYPE",
                suggestions: [
                  "connection-type-unspecified",
                  "private-service-connect",
                  "vpc-peering",
                ],
              },
            },
            {
              name: "--dag-processor-count",
              description:
                "Number of dag processors, supported in Composer 3 environments or greater",
              args: {
                name: "DAG_PROCESSOR_COUNT",
                description: "Int",
              },
            },
            {
              name: "--dag-processor-cpu",
              description:
                "CPU allocated to Airflow dag processor, supported in Composer 3 environments or greater",
              args: {
                name: "DAG_PROCESSOR_CPU",
                description: "Float",
              },
            },
            {
              name: "--dag-processor-memory",
              description:
                "Memory allocated to Airflow dag processor, ex. 1GB, 3GB, 2. If units are not provided, defaults to GB, supported in Composer 3 environments or greater",
              args: {
                name: "DAG_PROCESSOR_MEMORY",
              },
            },
            {
              name: "--dag-processor-storage",
              description:
                "Storage allocated to Airflow dag processor, ex. 600MB, 3GB, 2. If units are not provided, defaults to GB, supported in Composer 3 environments or greater",
              args: {
                name: "DAG_PROCESSOR_STORAGE",
              },
            },
            {
              name: "--disable-cloud-data-lineage-integration",
              description:
                "Disable Cloud Data Lineage integration, supported for Composer 2 Environments",
            },
            {
              name: "--disable-logs-in-cloud-logging-only",
              description:
                "Disable logs in cloud logging only, supported for Composer 2 Environments",
            },
            {
              name: "--disable-private-builds-only",
              description:
                "Builds performed during operations that install Python packages have an access to the internet, supported in Composer 3 or greater",
            },
            {
              name: "--disable-private-environment",
              description:
                "Enables internet connection for Composer components",
            },
            {
              name: "--disk-size",
              description:
                "The disk size for each VM node in the environment. The minimum size is 20GB, and the maximum is 64TB. Specified value must be an integer multiple of gigabytes. Cannot be updated after the environment has been created. If units are not provided, defaults to GB",
              args: {
                name: "DISK_SIZE",
              },
            },
            {
              name: "--enable-cloud-data-lineage-integration",
              description:
                "Enable Cloud Data Lineage integration, supported for Composer 2 Environments",
            },
            {
              name: "--enable-high-resilience",
              description:
                "Enable high resilience, supported for Composer 2 Environments",
            },
            {
              name: "--enable-ip-alias",
              description:
                "Enable use of link:https://cloud.google.com/compute/docs/alias-ip[alias IPs] for Pod IPs. This will require at least two secondary ranges in the subnetwork, one for the pod IPs and another to reserve space for the services range",
            },
            {
              name: "--enable-ip-masq-agent",
              description:
                "When enabled, the link:https://cloud.google.com/composer/docs/enable-ip-masquerade-agent[IP Masquerade Agent] is deployed to your environment's cluster. It performs many-to-one IP address translations to hide a pod's IP address behind the cluster node's IP address. This is done when sending traffic to destinations outside the cluster's pod CIDR range",
            },
            {
              name: "--enable-logs-in-cloud-logging-only",
              description:
                "Enable logs in cloud logging only, supported for Composer 2 Environments",
            },
            {
              name: "--enable-master-authorized-networks",
              description:
                "Enable link:https://cloud.google.com/kubernetes-engine/docs/how-to/authorized-networks[Master Authorized Networks feature] in the Composer Environment's GKE cluster",
            },
            {
              name: "--enable-private-builds-only",
              description:
                "Builds performed during operations that install Python packages have only private connectivity to Google services, supported in Composer 3 or greater",
            },
            {
              name: "--enable-private-endpoint",
              description:
                "Environment cluster is managed using the private IP address of the master API endpoint. Therefore access to the master endpoint must be from internal IP addresses",
            },
            {
              name: "--enable-private-environment",
              description:
                "Disables internet connection from any Composer component",
            },
            {
              name: "--enable-privately-used-public-ips",
              description:
                "When enabled GKE pods and services may use public(non-RFC1918) IP ranges privately. The ranges are specified by '--cluster-ipv4-cidr' and `--services-ipv4-cidr` flags",
            },
            {
              name: "--enable-scheduled-snapshot-creation",
              description:
                "When specified, snapshots of the environment will be created according to a schedule. Can be specified for Composer 2.0.32 or greater",
              priority: 100,
            },
            {
              name: "--enable-triggerer",
              description:
                "(DEPRECATED) Enable use of a triggerer, supported in the Environments with Composer 2.0.31 and Airflow 2.2.5 and greater",
              deprecated: true,
            },
            {
              name: "--env-variables",
              description:
                "A comma-delimited list of environment variable `NAME=VALUE` pairs to provide to the Airflow scheduler, worker, and webserver processes. NAME may contain upper and lowercase letters, digits, and underscores, but they may not begin with a digit. To include commas as part of a `VALUE`, see `{top_command} topic escaping` for information about overriding the delimiter",
              args: {
                name: "NAME=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--environment-size",
              description:
                "Size of the environment. Unspecified means that the default option will be chosen. _ENVIRONMENT_SIZE_ must be one of: *extra-large*, *large*, *medium*, *small*, *unspecified*",
              args: {
                name: "ENVIRONMENT_SIZE",
                suggestions: [
                  "extra-large",
                  "large",
                  "medium",
                  "small",
                  "unspecified",
                ],
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
              name: "--image-version",
              description: "Version of the image to run in the environment",
              args: {
                name: "IMAGE_VERSION",
              },
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
            optLocation,
            optLogHttp,
            {
              name: "--machine-type",
              description:
                "The Compute Engine link:https://cloud.google.com/compute/docs/machine-types[machine type] to use for nodes. For example `--machine-type=n1-standard-1`",
              args: {
                name: "MACHINE_TYPE",
                description: "String",
              },
            },
            {
              name: "--maintenance-window-end",
              description:
                "End time of the mantenance window in the form of the full date. Only the time of the day is used as a reference for an ending time of the window with a provided recurrence. Specified date must take place after the one specified as a start date, the difference between will be used as a length of a single maintenance window. See $ gcloud topic datetimes for information on time formats",
              priority: 100,
              args: {
                name: "MAINTENANCE_WINDOW_END",
              },
            },
            {
              name: "--maintenance-window-recurrence",
              description:
                "An RFC 5545 RRULE, specifying how the maintenance window will recur. The minimum requirement for the length of the maintenance window is 12 hours a week. Only FREQ=DAILY and FREQ=WEEKLY rules are supported",
              priority: 100,
              args: {
                name: "MAINTENANCE_WINDOW_RECURRENCE",
                description: "String",
              },
            },
            {
              name: "--maintenance-window-start",
              description:
                "Start time of the mantenance window in the form of the full date. Only the time of the day is used as a reference for a starting time of the window with a provided recurrence. See $ gcloud topic datetimes for information on time formats",
              priority: 100,
              args: {
                name: "MAINTENANCE_WINDOW_START",
              },
            },
            {
              name: "--master-authorized-networks",
              description:
                "Comma separated Master Authorized Networks specified in CIDR notation",
              args: {
                name: "NETWORK",
                description: "List",
              },
            },
            {
              name: "--master-ipv4-cidr",
              description:
                "IPv4 CIDR range to use for the cluster master network. This should have a size of the netmask between 23 and 28",
              args: {
                name: "MASTER_IPV4_CIDR",
              },
            },
            {
              name: "--max-workers",
              description: "Maximum number of workers in the Environment",
              args: {
                name: "MAX_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--min-workers",
              description: "Minimum number of workers in the Environment",
              args: {
                name: "MIN_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--network",
              description:
                "The Compute Engine Network to which the environment will be connected. If a 'Custom Subnet Network' is provided, `--subnetwork` must be specified as well",
              priority: 100,
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            {
              name: "--network-attachment",
              description:
                "Cloud Composer Network Attachment, which provides connectivity with a user's VPC network, supported in Composer 3 environments or greater",
              args: {
                name: "NETWORK_ATTACHMENT",
                description: "String",
              },
            },
            optNoAsync,
            {
              name: "--no-disable-cloud-data-lineage-integration",
              description:
                "Disable Cloud Data Lineage integration, supported for Composer 2 Environments",
              hidden: true,
            },
            {
              name: "--no-disable-private-environment",
              description:
                "Enables internet connection for Composer components",
              hidden: true,
            },
            {
              name: "--no-enable-cloud-data-lineage-integration",
              description:
                "Enable Cloud Data Lineage integration, supported for Composer 2 Environments",
              hidden: true,
            },
            {
              name: "--no-enable-ip-alias",
              description:
                "Enable use of link:https://cloud.google.com/compute/docs/alias-ip[alias IPs] for Pod IPs. This will require at least two secondary ranges in the subnetwork, one for the pod IPs and another to reserve space for the services range",
              hidden: true,
            },
            {
              name: "--no-enable-ip-masq-agent",
              description:
                "When enabled, the link:https://cloud.google.com/composer/docs/enable-ip-masquerade-agent[IP Masquerade Agent] is deployed to your environment's cluster. It performs many-to-one IP address translations to hide a pod's IP address behind the cluster node's IP address. This is done when sending traffic to destinations outside the cluster's pod CIDR range",
              hidden: true,
            },
            {
              name: "--no-enable-master-authorized-networks",
              description:
                "Enable link:https://cloud.google.com/kubernetes-engine/docs/how-to/authorized-networks[Master Authorized Networks feature] in the Composer Environment's GKE cluster",
              hidden: true,
            },
            {
              name: "--no-enable-private-endpoint",
              description:
                "Environment cluster is managed using the private IP address of the master API endpoint. Therefore access to the master endpoint must be from internal IP addresses",
              hidden: true,
            },
            {
              name: "--no-enable-private-environment",
              description:
                "Disables internet connection from any Composer component",
              hidden: true,
            },
            {
              name: "--no-enable-privately-used-public-ips",
              description:
                "When enabled GKE pods and services may use public(non-RFC1918) IP ranges privately. The ranges are specified by '--cluster-ipv4-cidr' and `--services-ipv4-cidr` flags",
              hidden: true,
            },
            {
              name: "--no-support-web-server-plugins",
              description:
                "Enable the support for web server plugins, supported in Composer 3 or greater",
              hidden: true,
            },
            {
              name: "--no-web-server-allow-all",
              description:
                "Allows all IP addresses to access the Airflow web server",
              hidden: true,
            },
            {
              name: "--no-web-server-deny-all",
              description:
                "Denies all incoming traffic to the Airflow web server",
              hidden: true,
            },
            {
              name: "--node-count",
              description:
                "The number of nodes to create to run the environment",
              args: {
                name: "NODE_COUNT",
                description: "Int",
              },
            },
            {
              name: "--oauth-scopes",
              description:
                "The set of Google API scopes to be made available on all of the node VMs. Defaults to ['https://www.googleapis.com/auth/cloud-platform']. Cannot be updated",
              args: {
                name: "SCOPE",
                description: "List",
              },
            },
            optProject,
            {
              name: "--python-version",
              description:
                "The Python version to be used within the created environment. Supplied value should represent the desired major Python version. Cannot be updated. _PYTHON_VERSION_ must be one of:",
              args: {
                name: "PYTHON_VERSION",
                description: "String",
                suggestions: ["2", "3"],
              },
            },
            optQuiet,
            {
              name: "--scheduler-count",
              description:
                "Number of schedulers, supported in the Environments with Airflow 2.0.1 and later",
              args: {
                name: "SCHEDULER_COUNT",
                description: "Int",
              },
            },
            {
              name: "--scheduler-cpu",
              description: "CPU allocated to Airflow scheduler",
              args: {
                name: "SCHEDULER_CPU",
                description: "Float",
              },
            },
            {
              name: "--scheduler-memory",
              description:
                "Memory allocated to Airflow scheduler, ex. 600MB, 3GB, 2. If units are not provided, defaults to GB",
              args: {
                name: "SCHEDULER_MEMORY",
              },
            },
            {
              name: "--scheduler-storage",
              description:
                "Storage allocated to Airflow scheduler, ex. 600MB, 3GB, 2. If units are not provided, defaults to GB",
              args: {
                name: "SCHEDULER_STORAGE",
              },
            },
            {
              name: "--service-account",
              description:
                "The Google Cloud Platform service account to be used by the node VMs. You must explicitly specify a service account. Cannot be updated",
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
              },
            },
            {
              name: "--services-ipv4-cidr",
              description: "IP range for the services IPs",
              args: {
                name: "SERVICES_IPV4_CIDR",
              },
            },
            {
              name: "--services-secondary-range-name",
              description:
                "Secondary range to be used for services (e.g. ClusterIPs). NAME must be the name of an existing secondary range in the cluster subnetwork",
              args: {
                name: "SERVICES_SECONDARY_RANGE_NAME",
                description: "String",
              },
            },
            {
              name: "--snapshot-creation-schedule",
              description:
                "Cron expression specifying when snapshots of the environment should be created. Can be specified for Composer 2.0.32 or greater",
              priority: 100,
              args: {
                name: "SNAPSHOT_CREATION_SCHEDULE",
                description: "String",
              },
            },
            {
              name: "--snapshot-location",
              description:
                "The Cloud Storage location for storing automatically created snapshots. Can be specified for Composer 2.0.32 or greater",
              priority: 100,
              args: {
                name: "SNAPSHOT_LOCATION",
                description: "String",
              },
            },
            {
              name: "--snapshot-schedule-timezone",
              description:
                "Timezone that sets the context to interpret snapshot_creation_schedule. Can be specified for Composer 2.0.32 or greater",
              priority: 100,
              args: {
                name: "SNAPSHOT_SCHEDULE_TIMEZONE",
                description: "String",
              },
            },
            {
              name: "--storage-bucket",
              description:
                "Name of an exisiting Cloud Storage bucket to be used by the environment. Supported only for Composer 2.4.X and above",
              args: {
                name: "STORAGE_BUCKET",
                description: "String",
              },
            },
            {
              name: "--subnetwork",
              description:
                "The link:https://cloud.google.com/compute/docs/subnetworks[Compute Engine Subnetwork] to which the environment will be connected",
              args: {
                name: "SUBNETWORK",
                description: "String",
              },
            },
            {
              name: "--support-web-server-plugins",
              description:
                "Enable the support for web server plugins, supported in Composer 3 or greater",
            },
            {
              name: "--tags",
              description:
                "The set of instance tags applied to all node VMs. Tags are used to identify valid sources or targets for network firewalls. Each tag within the list must comply with RFC 1035. Cannot be updated",
              args: {
                name: "TAG",
                description: "List",
              },
            },
            optTraceToken,
            {
              name: "--triggerer-count",
              description:
                "Number of triggerers, supported in the Environments with Composer 2.0.31 and Airflow 2.2.5 and greater",
              args: {
                name: "TRIGGERER_COUNT",
                description: "Int",
              },
            },
            {
              name: "--triggerer-cpu",
              description:
                "CPU allocated to Airflow triggerer. Supported in the Environments with Composer 2.0.31 and Airflow 2.2.5 and greater",
              args: {
                name: "TRIGGERER_CPU",
                description: "Float",
              },
            },
            {
              name: "--triggerer-memory",
              description:
                "Memory allocated to Airflow triggerer, ex. 512MB, 3GB, 2. If units are not provided, defaults to GB. Supported in the Environments with Composer 2.0.31 and Airflow 2.2.5 and greater",
              args: {
                name: "TRIGGERER_MEMORY",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--web-server-allow-all",
              description:
                "Allows all IP addresses to access the Airflow web server",
            },
            {
              name: "--web-server-allow-ip",
              description:
                "Specifies a list of IPv4 or IPv6 ranges that will be allowed to access the Airflow web server. By default, all IPs are allowed to access the web server",
              isRepeatable: true,
              args: {
                name: "WEB_SERVER_ALLOW_IP",
                description: "Dict",
              },
            },
            {
              name: "--web-server-cpu",
              description: "CPU allocated to each Airflow web server",
              args: {
                name: "WEB_SERVER_CPU",
                description: "Float",
              },
            },
            {
              name: "--web-server-deny-all",
              description:
                "Denies all incoming traffic to the Airflow web server",
            },
            {
              name: "--web-server-ipv4-cidr",
              description:
                "IPv4 CIDR range to use for the Airflow web server network. This should have a size of the netmask between 24 and 29",
              args: {
                name: "WEB_SERVER_IPV4_CIDR",
              },
            },
            {
              name: "--web-server-machine-type",
              description:
                "Machine type used by the Airflow web server. The list of available machine types is available here: https://cloud.google.com/composer/pricing",
              args: {
                name: "WEB_SERVER_MACHINE_TYPE",
                description: "String",
              },
            },
            {
              name: "--web-server-memory",
              description:
                "Memory allocated to Airflow web server, ex. 600MB, 3GB, 2. If units are not provided, defaults to GB",
              args: {
                name: "WEB_SERVER_MEMORY",
              },
            },
            {
              name: "--web-server-storage",
              description:
                "Storage allocated to Airflow web server, ex. 600MB, 3GB, 2. If units are not provided, defaults to GB",
              args: {
                name: "WEB_SERVER_STORAGE",
              },
            },
            {
              name: "--worker-cpu",
              description: "CPU allocated to each Airflow worker",
              args: {
                name: "WORKER_CPU",
                description: "Float",
              },
            },
            {
              name: "--worker-memory",
              description:
                "Memory allocated to Airflow worker, ex. 600MB, 3GB, 2. If units are not provided, defaults to GB",
              args: {
                name: "WORKER_MEMORY",
              },
            },
            {
              name: "--worker-storage",
              description:
                "Storage allocated to Airflow worker, ex. 600MB, 3GB, 2. If units are not provided, defaults to GB",
              args: {
                name: "WORKER_STORAGE",
              },
            },
            {
              name: "--zone",
              description:
                "The Compute Engine zone in which the environment will be created. For example `--zone=us-central1-a`",
              args: {
                name: "ZONE",
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
          name: "database-failover",
          description: "Run a database failover operation",
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
          name: "delete",
          description: "Delete one or more Cloud Composer environments",
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
            name: "ENVIRONMENTS",
            description:
              "IDs of the environments or fully qualified identifiers for the environments",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Get details about a Cloud Composer environment",
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
          name: "fetch-database-properties",
          description: "Fetch database properties",
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
          description:
            "List the Cloud Composer environments under a project and location",
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
              name: "--locations",
              description:
                "IDs of the locations or fully qualified identifiers for the locations",
              priority: 100,
              args: {
                name: "LOCATIONS",
                description: "List",
              },
            },
            optLogHttp,
            {
              name: "--no-uri",
              description:
                "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
              hidden: true,
            },
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            {
              name: "--uri",
              description:
                "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "list-packages",
          description: "List all PyPI modules installed in an Airflow worker",
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
            {
              name: "--no-tree",
              description:
                'List PyPI packages, their versions and a dependency tree, as displayed by the "python -m pipdeptree --warn" command',
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            {
              name: "--tree",
              description:
                'List PyPI packages, their versions and a dependency tree, as displayed by the "python -m pipdeptree --warn" command',
            },
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
          name: "list-upgrades",
          description:
            "List the Cloud Composer image version upgrades for a specific environment",
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
          args: {
            name: "ENVIRONMENT",
            description:
              "ID of the environment or fully qualified identifier for the environment",
          },
        },
        {
          name: "list-workloads",
          description:
            "List Composer workloads, supported in Composer 3 environments or greater",
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
          name: "restart-web-server",
          description: "Restart web server for a Cloud Composer environment",
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
          name: "run",
          description:
            "Run an Airflow sub-command remotely in a Cloud Composer environment",
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
          args: [
            {
              name: "ENVIRONMENT",
              description:
                "ID of the environment or fully qualified identifier for the environment",
            },
            {
              name: "SUBCOMMAND",
              description:
                "The Airflow CLI subcommand to run. Available subcommands include (listed with Airflow versions that support): backfill [**, 2.0.0), clear [**, 2.0.0), connections [**, 3.2.0), dag_state [**, 2.0.0), dags [1.10.14, 3.2.0), db [2.3.0, 3.0.0), delete_dag [1.10.1, 2.0.0), kerberos [**, 3.2.0), kubernetes [2.1.4, 3.2.0), list-import-errors [**, 3.0.0), list_dag_runs [1.10.2, 2.0.0), list_dags [**, 2.0.0), list_tasks [**, 2.0.0), next_execution [1.10.2, 2.0.0), pause [**, 2.0.0), pool [**, 2.0.0), pools [1.10.14, 3.2.0), render [**, 2.0.0), roles [2.0.0, 3.2.0), run [**, 2.0.0), sync-perm [1.10.14, 3.2.0), sync_perm [1.10.2, 2.0.0), task_failed_deps [**, 2.0.0), task_state [**, 2.0.0), tasks [1.10.14, 3.2.0), test [**, 2.0.0), trigger_dag [**, 2.0.0), unpause [**, 2.0.0), upgrade_check [1.10.15, 2.0.0), users [1.10.14, 3.2.0), variables [**, 3.2.0), version [**, 3.2.0) (see https://airflow.apache.org/docs/apache-airflow/stable/cli-and-env-variables-ref.html for more info)",
            },
            {
              name: "SUBCOMMAND_NESTED",
              description:
                "Additional subcommand in case it is nested. The following is a list of allowed nested subcommands: - db: check, trim - all other subcommands: all nested subcommands are allowed",
              isOptional: true,
            },
            {
              name: "CMD_ARGS",
              description: "Command line arguments to the subcommand",
              isVariadic: true,
              isOptional: true,
            },
          ],
        },
        {
          name: "snapshots",
          description: "Save and load snapshots of environment",
          subcommands: [
            {
              name: "load",
              description: "Load a snapshot into the environment",
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
                  name: "--no-skip-airflow-overrides-setting",
                  description:
                    "When specified, skips setting Airflow overrides from the snapshot",
                  hidden: true,
                },
                {
                  name: "--no-skip-environment-variables-setting",
                  description:
                    "When specified, skips setting environment variables from the snapshot",
                  hidden: true,
                },
                {
                  name: "--no-skip-gcs-data-copying",
                  description:
                    "When specified, skips copying dags, plugins and data folders from the snapshot",
                  hidden: true,
                },
                {
                  name: "--no-skip-pypi-packages-installation",
                  description:
                    "When specified, skips the installation of custom PyPI packages from the snapshot",
                  hidden: true,
                },
                optProject,
                optQuiet,
                {
                  name: "--skip-airflow-overrides-setting",
                  description:
                    "When specified, skips setting Airflow overrides from the snapshot",
                },
                {
                  name: "--skip-environment-variables-setting",
                  description:
                    "When specified, skips setting environment variables from the snapshot",
                },
                {
                  name: "--skip-gcs-data-copying",
                  description:
                    "When specified, skips copying dags, plugins and data folders from the snapshot",
                },
                {
                  name: "--skip-pypi-packages-installation",
                  description:
                    "When specified, skips the installation of custom PyPI packages from the snapshot",
                },
                {
                  name: "--snapshot-path",
                  description:
                    "The Cloud Storage path to load the snapshot from. It must start with prefix gs:// and one needs to specify a single snapshot that should be loaded",
                  priority: 100,
                  args: {
                    name: "SNAPSHOT_PATH",
                    description: "String",
                  },
                },
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
              name: "save",
              description: "Save a snapshot of the environment",
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
                  name: "--snapshot-location",
                  description:
                    "The Cloud Storage location where to save the snapshot. It must start with the prefix gs://. Default value is /snapshots directory in the Cloud Storage bucket of the environment",
                  args: {
                    name: "SNAPSHOT_LOCATION",
                    description: "String",
                  },
                },
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
          name: "storage",
          description:
            "Manage Cloud Storage objects stored as part of Cloud Composer environments",
          subcommands: [
            {
              name: "dags",
              description: "Manage DAGs for Cloud Composer environments",
              subcommands: [
                {
                  name: "delete",
                  description:
                    "Delete DAG files from an Cloud Composer environment's Cloud Storage bucket",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optEnvironment,
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
                    name: "TARGET",
                    description:
                      "A relative path to a file or subdirectory to delete within the dags Cloud Storage subdirectory. If not specified, the entire contents of the dags subdirectory will be deleted",
                    isOptional: true,
                  },
                },
                {
                  name: "export",
                  description:
                    "Export DAGs from an environment into local storage or Cloud Storage",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optDestination,
                    optEnvironment,
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
                      name: "--source",
                      description:
                        "An optional relative path to a file or directory to be exported from the dags/ subdirectory in the environment's Cloud Storage bucket",
                      args: {
                        name: "SOURCE",
                        description: "String",
                      },
                    },
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                },
                {
                  name: "import",
                  description:
                    "Import DAGs from local storage or Cloud Storage into an environment",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    {
                      name: "--destination",
                      description:
                        "An optional subdirectory under the dags/ directory in the environment's Cloud Storage bucket into which to import files. May contain forward slashes to delimit multiple levels of subdirectory nesting, but should not contain leading or trailing slashes. If the DESTINATION does not exist, it will be created",
                      args: {
                        name: "DESTINATION",
                        description: "String",
                      },
                    },
                    optEnvironment,
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
                      name: "--source",
                      description:
                        "Path to a local directory/file or Cloud Storage bucket/object to be imported into the dags/ subdirectory in the environment's Cloud Storage bucket. Cloud Storage paths must begin with 'gs://'",
                      priority: 100,
                      args: {
                        name: "SOURCE",
                        description: "String",
                      },
                    },
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                },
                {
                  name: "list",
                  description:
                    "List the DAG files for a Cloud Composer environment",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optEnvironment,
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
              name: "data",
              description: "Manage data for Cloud Composer environments",
              subcommands: [
                {
                  name: "delete",
                  description:
                    "Delete data from an Cloud Composer environment's Cloud Storage bucket",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optEnvironment,
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
                    name: "TARGET",
                    description:
                      "A relative path to a file or subdirectory to delete within the data Cloud Storage subdirectory. If not specified, the entire contents of the data subdirectory will be deleted",
                    isOptional: true,
                  },
                },
                {
                  name: "export",
                  description:
                    "Export data from an environment into local storage or Cloud Storage",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optDestination,
                    optEnvironment,
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
                      name: "--source",
                      description:
                        "An optional relative path to a file or directory to be exported from the data/ subdirectory in the environment's Cloud Storage bucket",
                      args: {
                        name: "SOURCE",
                        description: "String",
                      },
                    },
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                },
                {
                  name: "import",
                  description:
                    "Import data from local storage or Cloud Storage into an environment",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    {
                      name: "--destination",
                      description:
                        "An optional subdirectory under the data/ directory in the environment's Cloud Storage bucket into which to import files. May contain forward slashes to delimit multiple levels of subdirectory nesting, but should not contain leading or trailing slashes. If the DESTINATION does not exist, it will be created",
                      args: {
                        name: "DESTINATION",
                        description: "String",
                      },
                    },
                    optEnvironment,
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
                      name: "--source",
                      description:
                        "Path to a local directory/file or Cloud Storage bucket/object to be imported into the data/ subdirectory in the environment's Cloud Storage bucket. Cloud Storage paths must begin with 'gs://'",
                      priority: 100,
                      args: {
                        name: "SOURCE",
                        description: "String",
                      },
                    },
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                },
                {
                  name: "list",
                  description: "List the data for a Cloud Composer environment",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optEnvironment,
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
              name: "plugins",
              description: "Manage plugins for Cloud Composer environments",
              subcommands: [
                {
                  name: "delete",
                  description:
                    "Delete plugins from an Cloud Composer environment's Cloud Storage bucket",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optEnvironment,
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
                    name: "TARGET",
                    description:
                      "A relative path to a file or subdirectory to delete within the plugins Cloud Storage subdirectory. If not specified, the entire contents of the plugins subdirectory will be deleted",
                    isOptional: true,
                  },
                },
                {
                  name: "export",
                  description:
                    "Export plugins from an environment into local storage or Cloud Storage",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optDestination,
                    optEnvironment,
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
                      name: "--source",
                      description:
                        "An optional relative path to a file or directory to be exported from the plugins/ subdirectory in the environment's Cloud Storage bucket",
                      args: {
                        name: "SOURCE",
                        description: "String",
                      },
                    },
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                },
                {
                  name: "import",
                  description:
                    "Import plugins from local storage or Cloud Storage into an environment",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    {
                      name: "--destination",
                      description:
                        "An optional subdirectory under the plugins/ directory in the environment's Cloud Storage bucket into which to import files. May contain forward slashes to delimit multiple levels of subdirectory nesting, but should not contain leading or trailing slashes. If the DESTINATION does not exist, it will be created",
                      args: {
                        name: "DESTINATION",
                        description: "String",
                      },
                    },
                    optEnvironment,
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
                      name: "--source",
                      description:
                        "Path to a local directory/file or Cloud Storage bucket/object to be imported into the plugins/ subdirectory in the environment's Cloud Storage bucket. Cloud Storage paths must begin with 'gs://'",
                      priority: 100,
                      args: {
                        name: "SOURCE",
                        description: "String",
                      },
                    },
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                },
                {
                  name: "list",
                  description:
                    "List the plugins for a Cloud Composer environment",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optEnvironment,
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
          name: "update",
          description: "Update properties of a Cloud Composer environment",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--airflow-database-retention-days",
              description:
                "The number of days for the Airflow database retention period. If set to 0, the Airflow database retention mechanism will be disabled",
              args: {
                name: "AIRFLOW_DATABASE_RETENTION_DAYS",
                description: "Int",
              },
            },
            {
              name: "--airflow-version",
              description:
                "Upgrade the environment to a later Apache Airflow version in-place",
              args: {
                name: "AIRFLOW_VERSION",
              },
            },
            optAsync,
            optBillingProject,
            {
              name: "--clear-airflow-configs",
              description:
                "Removes all Airflow config overrides from the environment",
            },
            {
              name: "--clear-env-variables",
              description:
                "Removes all environment variables from the environment",
            },
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
            },
            {
              name: "--clear-maintenance-window",
              description:
                "Clears the maintenance window settings. Can be specified for Composer 3 or greater",
            },
            {
              name: "--clear-pypi-packages",
              description: "Removes all PyPI packages from the environment",
            },
            {
              name: "--cloud-sql-machine-type",
              description:
                "Cloud SQL machine type used by the Airflow database. The list of available machine types is available here: https://cloud.google.com/composer/pricing#db-machine-types",
              args: {
                name: "CLOUD_SQL_MACHINE_TYPE",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--dag-processor-count",
              description:
                "Number of dag processors, supported in Composer 3 environments or greater",
              args: {
                name: "DAG_PROCESSOR_COUNT",
                description: "Int",
              },
            },
            {
              name: "--dag-processor-cpu",
              description:
                "CPU allocated to Airflow dag processor, supported in Composer 3 environments or greater",
              args: {
                name: "DAG_PROCESSOR_CPU",
                description: "Float",
              },
            },
            {
              name: "--dag-processor-memory",
              description:
                "Memory allocated to Airflow dag processor, ex. 1GB, 3GB, 2. If units are not provided, defaults to GB, supported in Composer 3 environments or greater",
              args: {
                name: "DAG_PROCESSOR_MEMORY",
              },
            },
            {
              name: "--dag-processor-storage",
              description:
                "Storage allocated to Airflow dag processor, ex. 600MB, 3GB, 2. If units are not provided, defaults to GB, supported in Composer 3 environments or greater",
              args: {
                name: "DAG_PROCESSOR_STORAGE",
              },
            },
            {
              name: "--disable-cloud-data-lineage-integration",
              description:
                "Disable Cloud Data Lineage integration, supported for Composer 2 Environments",
            },
            {
              name: "--disable-high-resilience",
              description:
                "Disable high resilience, supported for Composer 2 Environments",
            },
            {
              name: "--disable-logs-in-cloud-logging-only",
              description:
                "Disable logs in cloud logging only, supported for Composer 2 Environments",
            },
            {
              name: "--disable-master-authorized-networks",
              description:
                "Disable link:https://cloud.google.com/kubernetes-engine/docs/how-to/authorized-networks[Master Authorized Networks feature] in the Composer Environment's GKE cluster",
            },
            {
              name: "--disable-private-builds-only",
              description:
                "Builds performed during operations that install Python packages have an access to the internet, supported in Composer 3 or greater",
            },
            {
              name: "--disable-private-environment",
              description:
                "Enable internet connection from any Composer component, supported in Composer 3 environments or greater",
            },
            {
              name: "--disable-scheduled-snapshot-creation",
              description:
                "Disables automated snapshots creation. Can be specified for Composer 2.0.32 or greater",
            },
            {
              name: "--disable-triggerer",
              description:
                "(DEPRECATED) Disable a triggerer, supported in the Environments with Composer 2.0.31 and Airflow 2.2.5 and greater",
              deprecated: true,
            },
            {
              name: "--disable-vpc-connectivity",
              description:
                "Disable connectivity with a user's VPC network, supported in Composer 3 environments or greater",
            },
            {
              name: "--enable-cloud-data-lineage-integration",
              description:
                "Enable Cloud Data Lineage integration, supported for Composer 2 Environments",
            },
            {
              name: "--enable-high-resilience",
              description:
                "Enable high resilience, supported for Composer 2 Environments",
            },
            {
              name: "--enable-logs-in-cloud-logging-only",
              description:
                "Enable logs in cloud logging only, supported for Composer 2 Environments",
            },
            {
              name: "--enable-master-authorized-networks",
              description:
                "Enable link:https://cloud.google.com/kubernetes-engine/docs/how-to/authorized-networks[Master Authorized Networks feature] in the Composer Environment's GKE cluster",
            },
            {
              name: "--enable-private-builds-only",
              description:
                "Builds performed during operations that install Python packages have only private connectivity to Google services, supported in Composer 3 or greater",
            },
            {
              name: "--enable-private-environment",
              description:
                "Disable internet connection from any Composer component, supported in Composer 3 environments or greater",
            },
            {
              name: "--enable-scheduled-snapshot-creation",
              description:
                "When specified, snapshots of the environment will be created according to a schedule. Can be specified for Composer 2.0.32 or greater",
              priority: 100,
            },
            {
              name: "--enable-triggerer",
              description:
                "(DEPRECATED) Enable use of a triggerer, supported in the Environments with Composer 2.0.31 and Airflow 2.2.5 and greater",
              deprecated: true,
            },
            {
              name: "--environment-size",
              description:
                "Size of the environment. Unspecified means that the default option will be chosen. _ENVIRONMENT_SIZE_ must be one of: *extra-large*, *large*, *medium*, *small*, *unspecified*",
              args: {
                name: "ENVIRONMENT_SIZE",
                suggestions: [
                  "extra-large",
                  "large",
                  "medium",
                  "small",
                  "unspecified",
                ],
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
              name: "--image-version",
              description:
                "Upgrade the environment to a later version in-place",
              args: {
                name: "IMAGE_VERSION",
              },
            },
            optImpersonateServiceAccount,
            optLocation,
            optLogHttp,
            {
              name: "--maintenance-window-end",
              description:
                "End time of the mantenance window in the form of the full date. Only the time of the day is used as a reference for an ending time of the window with a provided recurrence. Specified date must take place after the one specified as a start date, the difference between will be used as a length of a single maintenance window. See $ gcloud topic datetimes for information on time formats",
              priority: 100,
              args: {
                name: "MAINTENANCE_WINDOW_END",
              },
            },
            {
              name: "--maintenance-window-recurrence",
              description:
                "An RFC 5545 RRULE, specifying how the maintenance window will recur. The minimum requirement for the length of the maintenance window is 12 hours a week. Only FREQ=DAILY and FREQ=WEEKLY rules are supported",
              priority: 100,
              args: {
                name: "MAINTENANCE_WINDOW_RECURRENCE",
                description: "String",
              },
            },
            {
              name: "--maintenance-window-start",
              description:
                "Start time of the mantenance window in the form of the full date. Only the time of the day is used as a reference for a starting time of the window with a provided recurrence. See $ gcloud topic datetimes for information on time formats",
              priority: 100,
              args: {
                name: "MAINTENANCE_WINDOW_START",
              },
            },
            {
              name: "--master-authorized-networks",
              description:
                "Comma separated Master Authorized Networks specified in CIDR notation",
              args: {
                name: "NETWORK",
                description: "List",
              },
            },
            {
              name: "--max-workers",
              description: "Maximum number of workers in the Environment",
              args: {
                name: "MAX_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--min-workers",
              description: "Minimum number of workers in the Environment",
              args: {
                name: "MIN_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--network",
              description:
                "The Compute Engine Network to which the environment will be connected. If a 'Custom Subnet Network' is provided, `--subnetwork` must be specified as well",
              priority: 100,
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            {
              name: "--network-attachment",
              description:
                "Cloud Composer Network Attachment, which provides connectivity with a user's VPC network, supported in Composer 3 environments or greater",
              args: {
                name: "NETWORK_ATTACHMENT",
                description: "String",
              },
            },
            optNoAsync,
            {
              name: "--no-clear-airflow-configs",
              description:
                "Removes all Airflow config overrides from the environment",
              hidden: true,
            },
            {
              name: "--no-clear-env-variables",
              description:
                "Removes all environment variables from the environment",
              hidden: true,
            },
            {
              name: "--no-clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
              hidden: true,
            },
            {
              name: "--no-clear-maintenance-window",
              description:
                "Clears the maintenance window settings. Can be specified for Composer 3 or greater",
              hidden: true,
            },
            {
              name: "--no-clear-pypi-packages",
              description: "Removes all PyPI packages from the environment",
              hidden: true,
            },
            {
              name: "--no-disable-cloud-data-lineage-integration",
              description:
                "Disable Cloud Data Lineage integration, supported for Composer 2 Environments",
              hidden: true,
            },
            {
              name: "--no-disable-master-authorized-networks",
              description:
                "Disable link:https://cloud.google.com/kubernetes-engine/docs/how-to/authorized-networks[Master Authorized Networks feature] in the Composer Environment's GKE cluster",
              hidden: true,
            },
            {
              name: "--no-disable-private-environment",
              description:
                "Enable internet connection from any Composer component, supported in Composer 3 environments or greater",
              hidden: true,
            },
            {
              name: "--no-enable-cloud-data-lineage-integration",
              description:
                "Enable Cloud Data Lineage integration, supported for Composer 2 Environments",
              hidden: true,
            },
            {
              name: "--no-enable-master-authorized-networks",
              description:
                "Enable link:https://cloud.google.com/kubernetes-engine/docs/how-to/authorized-networks[Master Authorized Networks feature] in the Composer Environment's GKE cluster",
              hidden: true,
            },
            {
              name: "--no-enable-private-environment",
              description:
                "Disable internet connection from any Composer component, supported in Composer 3 environments or greater",
              hidden: true,
            },
            {
              name: "--no-support-web-server-plugins",
              description:
                "Enable the support for web server plugins, supported in Composer 3 or greater",
              hidden: true,
            },
            {
              name: "--no-web-server-allow-all",
              description:
                "Allows all IP addresses to access the Airflow web server",
              hidden: true,
            },
            {
              name: "--no-web-server-deny-all",
              description:
                "Denies all incoming traffic to the Airflow web server",
              hidden: true,
            },
            {
              name: "--node-count",
              description:
                "The new number of nodes running the environment. Must be >= 3",
              args: {
                name: "NODE_COUNT",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--remove-airflow-configs",
              description: "A list of Airflow config override keys to remove",
              args: {
                name: "KEY",
                description: "List",
              },
            },
            {
              name: "--remove-env-variables",
              description: "A list of environment variables to remove",
              args: {
                name: "NAME",
                description: "List",
              },
            },
            {
              name: "--remove-labels",
              description:
                "List of label keys to remove. If a label does not exist it is silently ignored. If `--update-labels` is also specified then `--update-labels` is applied first",
              args: {
                name: "KEY",
                description: "List",
              },
            },
            {
              name: "--remove-pypi-packages",
              description: "A list of PyPI package names to remove",
              args: {
                name: "PACKAGE",
                description: "List",
              },
            },
            {
              name: "--scheduler-count",
              description:
                "Number of schedulers, supported in the Environments with Airflow 2.0.1 and later",
              args: {
                name: "SCHEDULER_COUNT",
                description: "Int",
              },
            },
            {
              name: "--scheduler-cpu",
              description: "CPU allocated to Airflow scheduler",
              args: {
                name: "SCHEDULER_CPU",
                description: "Float",
              },
            },
            {
              name: "--scheduler-memory",
              description:
                "Memory allocated to Airflow scheduler, ex. 600MB, 3GB, 2. If units are not provided, defaults to GB",
              args: {
                name: "SCHEDULER_MEMORY",
              },
            },
            {
              name: "--scheduler-storage",
              description:
                "Storage allocated to Airflow scheduler, ex. 600MB, 3GB, 2. If units are not provided, defaults to GB",
              args: {
                name: "SCHEDULER_STORAGE",
              },
            },
            {
              name: "--snapshot-creation-schedule",
              description:
                "Cron expression specifying when snapshots of the environment should be created. Can be specified for Composer 2.0.32 or greater",
              priority: 100,
              args: {
                name: "SNAPSHOT_CREATION_SCHEDULE",
                description: "String",
              },
            },
            {
              name: "--snapshot-location",
              description:
                "The Cloud Storage location for storing automatically created snapshots. Can be specified for Composer 2.0.32 or greater",
              priority: 100,
              args: {
                name: "SNAPSHOT_LOCATION",
                description: "String",
              },
            },
            {
              name: "--snapshot-schedule-timezone",
              description:
                "Timezone that sets the context to interpret snapshot_creation_schedule. Can be specified for Composer 2.0.32 or greater",
              priority: 100,
              args: {
                name: "SNAPSHOT_SCHEDULE_TIMEZONE",
                description: "String",
              },
            },
            {
              name: "--subnetwork",
              description:
                "The link:https://cloud.google.com/compute/docs/subnetworks[Compute Engine Subnetwork] to which the environment will be connected",
              args: {
                name: "SUBNETWORK",
                description: "String",
              },
            },
            {
              name: "--support-web-server-plugins",
              description:
                "Enable the support for web server plugins, supported in Composer 3 or greater",
            },
            optTraceToken,
            {
              name: "--triggerer-count",
              description:
                "Number of triggerers, supported in the Environments with Composer 2.0.31 and Airflow 2.2.5 and greater",
              args: {
                name: "TRIGGERER_COUNT",
                description: "Int",
              },
            },
            {
              name: "--triggerer-cpu",
              description:
                "CPU allocated to Airflow triggerer. Supported in the Environments with Composer 2.0.31 and Airflow 2.2.5 and greater",
              args: {
                name: "TRIGGERER_CPU",
                description: "Float",
              },
            },
            {
              name: "--triggerer-memory",
              description:
                "Memory allocated to Airflow triggerer, ex. 512MB, 3GB, 2. If units are not provided, defaults to GB. Supported in the Environments with Composer 2.0.31 and Airflow 2.2.5 and greater",
              args: {
                name: "TRIGGERER_MEMORY",
              },
            },
            {
              name: "--update-airflow-configs",
              description:
                "A list of Airflow config override KEY=VALUE pairs to set. If a config override exists, its value is updated; otherwise, a new config override is created",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--update-env-variables",
              description:
                "A list of environment variable NAME=VALUE pairs to set and provide to the Airflow scheduler, worker, and webserver processes. If an environment variable exists, its value is updated; otherwise, a new environment variable is created",
              args: {
                name: "NAME=VALUE",
                description: "Dict",
              },
            },
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
              name: "--update-pypi-package",
              description:
                "A PyPI package to add to the environment. If a package exists, its value is updated; otherwise, a new package is installed",
              isRepeatable: true,
              args: {
                name: "PACKAGEEXTRAS_LISTVERSION_SPECIFIER",
                description: "String",
              },
            },
            {
              name: "--update-pypi-packages-from-file",
              description:
                "The path to a file containing a list of PyPI packages to install in the environment. Each line in the file should contain a package specification in the format of the update-pypi-package argument defined above. The path can be a local file path or a Google Cloud Storage file path (Cloud Storage file path starts with 'gs://')",
              args: {
                name: "UPDATE_PYPI_PACKAGES_FROM_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--update-web-server-allow-ip",
              description:
                "Specifies a list of IPv4 or IPv6 ranges that will be allowed to access the Airflow web server. By default, all IPs are allowed to access the web server",
              args: {
                name: "UPDATE_WEB_SERVER_ALLOW_IP",
                description: "Dict",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--web-server-allow-all",
              description:
                "Allows all IP addresses to access the Airflow web server",
            },
            {
              name: "--web-server-cpu",
              description: "CPU allocated to each Airflow web server",
              args: {
                name: "WEB_SERVER_CPU",
                description: "Float",
              },
            },
            {
              name: "--web-server-deny-all",
              description:
                "Denies all incoming traffic to the Airflow web server",
            },
            {
              name: "--web-server-machine-type",
              description:
                "Machine type used by the Airflow web server. The list of available machine types is available here: https://cloud.google.com/composer/pricing",
              args: {
                name: "WEB_SERVER_MACHINE_TYPE",
                description: "String",
              },
            },
            {
              name: "--web-server-memory",
              description:
                "Memory allocated to Airflow web server, ex. 600MB, 3GB, 2. If units are not provided, defaults to GB",
              args: {
                name: "WEB_SERVER_MEMORY",
              },
            },
            {
              name: "--web-server-storage",
              description:
                "Storage allocated to Airflow web server, ex. 600MB, 3GB, 2. If units are not provided, defaults to GB",
              args: {
                name: "WEB_SERVER_STORAGE",
              },
            },
            {
              name: "--worker-cpu",
              description: "CPU allocated to each Airflow worker",
              args: {
                name: "WORKER_CPU",
                description: "Float",
              },
            },
            {
              name: "--worker-memory",
              description:
                "Memory allocated to Airflow worker, ex. 600MB, 3GB, 2. If units are not provided, defaults to GB",
              args: {
                name: "WORKER_MEMORY",
              },
            },
            {
              name: "--worker-storage",
              description:
                "Storage allocated to Airflow worker, ex. 600MB, 3GB, 2. If units are not provided, defaults to GB",
              args: {
                name: "WORKER_STORAGE",
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
          name: "user-workloads-config-maps",
          description:
            "Create and manage user workloads ConfigMaps of environment",
          subcommands: [
            {
              name: "create",
              description: "Create a user workloads ConfigMap",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--config-map-file-path",
                  description:
                    "Path to a local file with a single Kubernetes ConfigMap in YAML format",
                  priority: 100,
                  args: {
                    name: "CONFIG_MAP_FILE_PATH",
                    description: "String",
                    template: "filepaths",
                  },
                },
                optConfiguration,
                optEnvironment,
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
              name: "delete",
              description: "Delete a user workloads ConfigMap",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optEnvironment,
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
                name: "CONFIG_MAP_NAME",
                description: "Name of the ConfigMap",
                isOptional: true,
              },
            },
            {
              name: "describe",
              description: "Get details about a user workloads ConfigMap",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optEnvironment,
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
                name: "CONFIG_MAP_NAME",
                description: "Name of the ConfigMap",
                isOptional: true,
              },
            },
            {
              name: "list",
              description: "List user workloads ConfigMaps",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optEnvironment,
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
              name: "update",
              description: "Update a user workloads ConfigMap",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--config-map-file-path",
                  description:
                    "Path to a local file with a single Kubernetes ConfigMap in YAML format",
                  priority: 100,
                  args: {
                    name: "CONFIG_MAP_FILE_PATH",
                    description: "String",
                    template: "filepaths",
                  },
                },
                optConfiguration,
                optEnvironment,
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
          name: "user-workloads-secrets",
          description:
            "Create and manage user workloads Secrets of environment",
          subcommands: [
            {
              name: "create",
              description: "Create a user workloads Secret",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optEnvironment,
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
                  name: "--secret-file-path",
                  description:
                    "Path to a local file with a single Kubernetes Secret in YAML format",
                  priority: 100,
                  args: {
                    name: "SECRET_FILE_PATH",
                    description: "String",
                    template: "filepaths",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "delete",
              description: "Delete a user workloads Secret",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optEnvironment,
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
                name: "SECRET_NAME",
                description: "Name of the Secret",
                isOptional: true,
              },
            },
            {
              name: "describe",
              description: "Get details about a user workloads Secret",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optEnvironment,
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
                name: "SECRET_NAME",
                description: "Name of the Secret",
                isOptional: true,
              },
            },
            {
              name: "list",
              description: "List user workloads Secrets",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optEnvironment,
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
              name: "update",
              description: "Update a user workloads Secret",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optEnvironment,
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
                  name: "--secret-file-path",
                  description:
                    "Path to a local file with a single Kubernetes Secret in YAML format",
                  priority: 100,
                  args: {
                    name: "SECRET_FILE_PATH",
                    description: "String",
                    template: "filepaths",
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
      name: "operations",
      description: "Manage Cloud Composer operations",
      subcommands: [
        {
          name: "delete",
          description: "Delete one or more completed Cloud Composer operations",
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
                "Compute Engine region in which to create the operations",
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
            name: "OPERATIONS",
            description:
              "IDs of the operations or fully qualified identifiers for the operations",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Get details about an asynchronous operation",
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
                "Compute Engine region in which to create the operation",
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "list",
          description: "Lists environment operations",
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
              name: "--locations",
              description:
                "IDs of the locations or fully qualified identifiers for the locations",
              priority: 100,
              args: {
                name: "LOCATIONS",
                description: "List",
              },
            },
            optLogHttp,
            {
              name: "--no-uri",
              description:
                "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
              hidden: true,
            },
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            {
              name: "--uri",
              description:
                "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "wait",
          description: "Wait for asynchronous operation to complete",
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
                "Compute Engine region in which to create the operation",
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
