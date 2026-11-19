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

const optAddCloudsqlInstances: Fig.Option = {
  name: "--add-cloudsql-instances",
  description: "Append the given values to the current Cloud SQL instances",
  args: {
    name: "CLOUDSQL-INSTANCES",
    description: "List",
  },
};

const optAddCustomAudiences: Fig.Option = {
  name: "--add-custom-audiences",
  description: "Append the given values to the current custom audiences",
  args: {
    name: "CUSTOM-AUDIENCES",
    description: "List",
  },
};

const optAddVolume: Fig.Option = {
  name: "--add-volume",
  description:
    "Adds a volume to the Cloud Run resource. To add more than one volume, specify this flag multiple times. Volumes must have a `type` key. Volumes must have a `name` key if `mount-path` is not specified. A `name` key is optional if `mount-path` is specified.Only certain values are supported for `type`. Depending on the provided type, other keys will be required. The following types are supported with the specified additional keys:",
  isRepeatable: true,
  args: {
    name: "KEY=VALUE",
    description: "Dict",
  },
};

const optAddVolumeMount: Fig.Option = {
  name: "--add-volume-mount",
  description:
    "Adds a mount to the current container. Must contain the keys `volume=NAME` and `mount-path=/PATH` where NAME is the name of a volume on this resource and PATH is the path within the container's filesystem to mount this volume",
  args: {
    name: "volume=NAME,mount-path=MOUNT_PATH",
    description: "Dict",
  },
};

const optArgs: Fig.Option = {
  name: "--args",
  description:
    "Comma-separated arguments passed to the command run by the container image. If not specified and no '--command' is provided, the container image's default Cmd is used. Otherwise, if not specified, no arguments are passed. To reset this field to its default, pass an empty string",
  args: {
    name: "ARG",
    description: "List",
  },
};

const optAsync: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to complete",
};

const optAsync2: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to complete. Defaults to --no-async. Use *--async* to enable and *--no-async* to disable",
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

const optBinaryAuthorization: Fig.Option = {
  name: "--binary-authorization",
  description:
    'Binary Authorization policy to check against. This must be set to "default"',
  args: {
    name: "POLICY",
    description: "String",
  },
};

const optBreakglass: Fig.Option = {
  name: "--breakglass",
  description:
    "Justification to bypass Binary Authorization policy constraints and allow the operation. See https://cloud.google.com/binary-authorization/docs/using-breakglass for more information. Next update or deploy command will automatically clear existing breakglass justification",
  args: {
    name: "JUSTIFICATION",
    description: "String",
  },
};

const optClearBinaryAuthorization: Fig.Option = {
  name: "--clear-binary-authorization",
  description: "Remove any previously set Binary Authorization policy",
};

const optClearCloudsqlInstances: Fig.Option = {
  name: "--clear-cloudsql-instances",
  description: "Empty the current Cloud SQL instances",
};

const optClearConfigMaps: Fig.Option = {
  name: "--clear-config-maps",
  description: "Remove all config-maps",
  hidden: true,
};

const optClearCustomAudiences: Fig.Option = {
  name: "--clear-custom-audiences",
  description: "Empty the current custom audiences",
};

const optClearEncryptionKeyShutdownHours: Fig.Option = {
  name: "--clear-encryption-key-shutdown-hours",
  description: "Remove any previously set CMEK key shutdown hours setting",
};

const optClearKey: Fig.Option = {
  name: "--clear-key",
  description: "Remove any previously set CMEK key reference",
};

const optClearLabels: Fig.Option = {
  name: "--clear-labels",
  description:
    "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
};

const optClearNetwork: Fig.Option = {
  name: "--clear-network",
  description:
    "Disconnect this Cloud Run service from the VPC network it is connected to",
};

const optClearNetworkTags: Fig.Option = {
  name: "--clear-network-tags",
  description: "Clears all existing network tags from the Cloud Run service",
};

const optClearPostKeyRevocationActionType: Fig.Option = {
  name: "--clear-post-key-revocation-action-type",
  description: "Remove any previously set post CMEK key revocation action type",
};

const optClearVolumeMounts: Fig.Option = {
  name: "--clear-volume-mounts",
  description: "Remove all existing mounts from the current container",
};

const optClearVolumes: Fig.Option = {
  name: "--clear-volumes",
  description:
    "Remove all existing volumes from the Cloud Run resource, including volumes mounted as secrets",
};

const optClearVpcConnector: Fig.Option = {
  name: "--clear-vpc-connector",
  description: "Remove the VPC connector for this resource",
};

const optClientName: Fig.Option = {
  name: "--client-name",
  description:
    "Name of the client handling the deployment. Defaults to ``global'' if this and --client-version are both unspecified",
  hidden: true,
  args: {
    name: "CLIENT_NAME",
    description: "String",
  },
};

const optClientVersion: Fig.Option = {
  name: "--client-version",
  description:
    "Version of the client handling the deployment. Defaults to the current gcloud version if this and --client-name are both unspecified",
  hidden: true,
  args: {
    name: "CLIENT_VERSION",
    description: "String",
  },
};

const optCluster: Fig.Option = {
  name: "--cluster",
  description:
    "ID of the cluster or fully qualified identifier for the cluster",
  hidden: true,
  args: {
    name: "CLUSTER",
    description: "String",
  },
};

const optClusterLocation: Fig.Option = {
  name: "--cluster-location",
  description:
    "Zone in which the cluster is located. Alternatively, set the property [run/cluster_location]",
  hidden: true,
  args: {
    name: "CLUSTER_LOCATION",
    description: "String",
  },
};

const optCommand: Fig.Option = {
  name: "--command",
  description:
    "Entrypoint for the container image. If not specified, the container image's default Entrypoint is run. To reset this field to its default, pass an empty string",
  args: {
    name: "COMMAND",
    description: "List",
  },
};

const optConcurrency: Fig.Option = {
  name: "--concurrency",
  description:
    "Set the maximum number of concurrent requests allowed per container instance. Leave concurrency unspecified or provide the special value 'default' to receive the server default value",
  args: {
    name: "CONCURRENCY",
  },
};

const optConditionFromFile: Fig.Option = {
  name: "--condition-from-file",
  description:
    "Path to a local JSON or YAML file that defines the condition. To see available fields, see the help for `--condition`. Use a full or relative path to a local file containing the value of condition",
  args: {
    name: "CONDITION_FROM_FILE",
    template: "filepaths",
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

const optConnectivity: Fig.Option = {
  name: "--connectivity",
  description:
    "(DEPRECATED) Defaults to 'external'. If 'external', the service can be invoked through the internet, in addition to through the cluster network",
  hidden: true,
  deprecated: true,
  args: {
    name: "CONNECTIVITY",
    description: "String",
    suggestions: ["external", "internal"],
  },
};

const optContainer: Fig.Option = {
  name: "--container",
  description:
    "Specifies a container by name. Flags following --container will apply to the specified container",
  args: {
    name: "CONTAINER",
    description: "String",
  },
};

const optContext: Fig.Option = {
  name: "--context",
  description:
    "The name of the context in your kubectl config file to use for connecting",
  hidden: true,
  args: {
    name: "CONTEXT",
    description: "String",
  },
};

const optCpu: Fig.Option = {
  name: "--cpu",
  description: "Set a CPU limit in Kubernetes cpu units",
  args: {
    name: "CPU",
    description: "String",
  },
};

const optCpuBoost: Fig.Option = {
  name: "--cpu-boost",
  description:
    "Whether to allocate extra CPU to containers on startup to reduce the perceived latency of a cold start request. Enabled by default when unspecified on new services. Use *--cpu-boost* to enable and *--no-cpu-boost* to disable",
};

const optCpuThrottling: Fig.Option = {
  name: "--cpu-throttling",
  description:
    "Whether to throttle the CPU when the container is not actively serving requests. Use *--cpu-throttling* to enable and *--no-cpu-throttling* to disable",
};

const optDefaultUrl: Fig.Option = {
  name: "--default-url",
  description:
    "Toggles the default url for a run service. This is enabled by default if not specified. Use *--default-url* to enable and *--no-default-url* to disable",
};

const optDependsOn: Fig.Option = {
  name: "--depends-on",
  description: "List of container dependencies to add to the current container",
  args: {
    name: "CONTAINER",
    description: "List",
  },
};

const optDeployHealthCheck: Fig.Option = {
  name: "--deploy-health-check",
  description:
    "Schedules a single instance of the Revision and waits for it to pass its startup probe for the deployment to succeed. If disabled, the startup probe runs only when the revision is first started via invocation or by setting min-instances. This check is enabled by default when unspecified. Use *--deploy-health-check* to enable and *--no-deploy-health-check* to disable",
};

const optDescription: Fig.Option = {
  name: "--description",
  description:
    "Provides an optional, human-readable description of the service",
  args: {
    name: "DESCRIPTION",
    description: "String",
  },
};

const optDomain: Fig.Option = {
  name: "--domain",
  description:
    "ID of the DomainMapping or fully qualified identifier for the DomainMapping",
  priority: 100,
  args: {
    name: "DOMAIN",
    description: "String",
  },
};

const optDryRun: Fig.Option = {
  name: "--dry-run",
  description:
    "If set to true, only validates the configuration. The configuration will not be applied",
};

const optEncryptionKeyShutdownHours: Fig.Option = {
  name: "--encryption-key-shutdown-hours",
  description:
    "The number of hours to wait before an automatic shutdown server after CMEK key revocation is detected",
  args: {
    name: "ENCRYPTION_KEY_SHUTDOWN_HOURS",
    description: "String",
  },
};

const optEnvVarsFile: Fig.Option = {
  name: "--env-vars-file",
  description:
    "Path to a local YAML or ENV file with definitions for all environment variables. All existing environment variables will be removed before the new environment variables are added. Example YAML content:",
  args: {
    name: "FILE_PATH",
    template: "filepaths",
  },
};

const optExecuteNow: Fig.Option = {
  name: "--execute-now",
  description:
    "Execute the job immediately after the creation or update completes. gcloud exits once the job has started unless the `--wait` flag is set",
};

const optExecutionEnvironment: Fig.Option = {
  name: "--execution-environment",
  description:
    "Selects the execution environment where the application will run",
  hidden: true,
  args: {
    name: "EXECUTION_ENVIRONMENT",
    description: "String",
    suggestions: ["gen1", "gen2"],
  },
};

const optExecutionEnvironment2: Fig.Option = {
  name: "--execution-environment",
  description:
    "Selects the execution environment where the application will run. _EXECUTION_ENVIRONMENT_ must be one of:",
  args: {
    name: "EXECUTION_ENVIRONMENT",
    description: "String",
    suggestions: ["gen1", "gen2"],
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

const optFreshness: Fig.Option = {
  name: "--freshness",
  description:
    "Return entries that are not older than this value. Works only with DESC ordering and filters without a timestamp. See $ gcloud topic datetimes for information on duration formats",
  args: {
    name: "FRESHNESS",
  },
};

const optGpu: Fig.Option = {
  name: "--gpu",
  description:
    "Cloud Run supports values 0 or 1. 1 gpu also requires a minimum 4 `--cpu` value and a minimum 16Gi `--memory` value",
  args: {
    name: "GPU",
    description: "String",
  },
};

const optGpuType: Fig.Option = {
  name: "--gpu-type",
  description: "The GPU type to use",
  args: {
    name: "GPU_TYPE",
    description: "String",
  },
};

const optGpuZonalRedundancy: Fig.Option = {
  name: "--gpu-zonal-redundancy",
  description:
    "Set GPU zonal redundancy. Use *--gpu-zonal-redundancy* to enable and *--no-gpu-zonal-redundancy* to disable",
};

const optIap: Fig.Option = {
  name: "--iap",
  description:
    "Whether to enable IAP for the Service. Use *--iap* to enable and *--no-iap* to disable",
};

const optImage: Fig.Option = {
  name: "--image",
  description:
    "Name of the container image to deploy (e.g. `us-docker.pkg.dev/cloudrun/container/hello:latest`)",
  args: {
    name: "IMAGE",
    description: "String",
  },
};

const optImage2: Fig.Option = {
  name: "--image",
  description:
    "Name of the container image to deploy (e.g. `us-docker.pkg.dev/cloudrun/container/job:latest`)",
  args: {
    name: "IMAGE",
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

const optIngress: Fig.Option = {
  name: "--ingress",
  description:
    "Set the ingress traffic sources allowed to call the service. For Cloud Run the `--[no-]allow-unauthenticated` flag separately controls the identities allowed to call the service. _INGRESS_ must be one of:",
  args: {
    name: "INGRESS",
    description: "String",
    suggestions: ["all", "internal", "internal-and-cloud-load-balancing"],
  },
};

const optInvokerIamCheck: Fig.Option = {
  name: "--invoker-iam-check",
  description:
    "Optionally disable invoker IAM checks. More info at https://cloud.google.com/run/docs/securing/managing-access#invoker_check. Use *--invoker-iam-check* to enable and *--no-invoker-iam-check* to disable",
};

const optKey: Fig.Option = {
  name: "--key",
  description: "CMEK key reference to encrypt the container with",
  args: {
    name: "KEY",
    description: "String",
  },
};

const optKubeconfig: Fig.Option = {
  name: "--kubeconfig",
  description:
    "The absolute path to your kubectl config file. If not specified, the colon- or semicolon-delimited list of paths specified by $KUBECONFIG will be used. If $KUBECONFIG is unset, this defaults to `~/.kube/config`",
  hidden: true,
  args: {
    name: "KUBECONFIG",
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

const optLivenessProbe: Fig.Option = {
  name: "--liveness-probe",
  description:
    "Comma separated settings for liveness probe in the form KEY=VALUE. Each key stands for a field of the probe described in https://cloud.google.com/run/docs/reference/rest/v1/Container#Probe. Currently supported keys are: initialDelaySeconds, timeoutSeconds, periodSeconds, failureThreshold, httpGet.port, httpGet.path, grpc.port, grpc.service",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
  },
};

const optLogFilter: Fig.Option = {
  name: "--log-filter",
  description:
    "Filter expression that specifies the log entries to return. Detailed information about filters can be found at: https://cloud.google.com/logging/docs/view/logging-query-language",
  args: {
    name: "LOG_FILTER",
    description: "String",
  },
};

const optLogHttp: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};

const optMax: Fig.Option = {
  name: "--max",
  description:
    "The maximum number of container instances to run for this Service. This instance limit will be divided among all Revisions receiving a percentage of traffic and can be modified without deploying a new Revision",
  args: {
    name: "MAX",
  },
};

const optMaxInstances: Fig.Option = {
  name: "--max-instances",
  description:
    "The maximum number of container instances for this Revision to run or 'default' to remove. This setting is immutably set on each new Revision and modifying its value will deploy another Revision",
  args: {
    name: "MAX_INSTANCES",
  },
};

const optMaxRetries: Fig.Option = {
  name: "--max-retries",
  description:
    "Number of times a task is allowed to restart in case of failure before being failed permanently. This applies per-task, not per-job. If set to 0, tasks will only run once and never be retried on failure",
  args: {
    name: "MAX_RETRIES",
  },
};

const optMember: Fig.Option = {
  name: "--member",
  description:
    "The principal to add the binding for. Should be of the form `user|group|serviceAccount:email` or `domain:domain`",
  priority: 100,
  args: {
    name: "PRINCIPAL",
    description: "String",
  },
};

const optMember2: Fig.Option = {
  name: "--member",
  description:
    "The principal to remove the binding for. Should be of the form `user|group|serviceAccount:email` or `domain:domain`",
  priority: 100,
  args: {
    name: "PRINCIPAL",
    description: "String",
  },
};

const optMemory: Fig.Option = {
  name: "--memory",
  description: "Set a memory limit. Ex: 1024Mi, 4Gi",
  args: {
    name: "MEMORY",
    description: "String",
  },
};

const optMin: Fig.Option = {
  name: "--min",
  description:
    "The minimum number of container instances to run for this Service or 'default' to remove. These instances will be divided among all Revisions receiving a percentage of traffic and can be modified without deploying a new Revision",
  args: {
    name: "MIN",
  },
};

const optMinInstances: Fig.Option = {
  name: "--min-instances",
  description:
    "The minimum number of container instances to run for this Revision or 'default' to remove. This setting is immutably set on each new Revision and modifying its value will deploy a another Revision. Consider using --min to set the minimum number of instances across all revisions of the Service which may be modified dynamically",
  args: {
    name: "MIN_INSTANCES",
  },
};

const optNamespace: Fig.Option = {
  name: "--namespace",
  description:
    "ID of the namespace or fully qualified identifier for the namespace",
  hidden: true,
  args: {
    name: "NAMESPACE",
    description: "String",
  },
};

const optNamespace2: Fig.Option = {
  name: "--namespace",
  description:
    "Specific to Cloud Run for Anthos: Kubernetes namespace for the DomainMapping",
  args: {
    name: "NAMESPACE",
    description: "String",
  },
};

const optNamespace3: Fig.Option = {
  name: "--namespace",
  description:
    "Specific to Cloud Run for Anthos: Kubernetes namespace for the service",
  args: {
    name: "NAMESPACE",
    description: "String",
  },
};

const optNetwork: Fig.Option = {
  name: "--network",
  description:
    "The VPC network that the Cloud Run job will be able to send traffic to. If --subnet is also specified, subnet must be a subnetwork of the network specified by this --network flag. To clear existing VPC network settings, use --clear-network",
  args: {
    name: "NETWORK",
    description: "String",
  },
};

const optNetwork2: Fig.Option = {
  name: "--network",
  description:
    "The VPC network that the Cloud Run service will be able to send traffic to. If --subnet is also specified, subnet must be a subnetwork of the network specified by this --network flag. To clear existing VPC network settings, use --clear-network",
  args: {
    name: "NETWORK",
    description: "String",
  },
};

const optNetworkTags: Fig.Option = {
  name: "--network-tags",
  description:
    "Applies the given network tags (comma separated) to the Cloud Run job. To clear existing tags, use --clear-network-tags",
  args: {
    name: "TAG",
    description: "List",
  },
};

const optNetworkTags2: Fig.Option = {
  name: "--network-tags",
  description:
    "Applies the given network tags (comma separated) to the Cloud Run service. To clear existing tags, use --clear-network-tags",
  args: {
    name: "TAG",
    description: "List",
  },
};

const optNoAsync: Fig.Option = {
  name: "--no-async",
  description:
    "Return immediately, without waiting for the operation in progress to complete",
  hidden: true,
};

const optNoAsync2: Fig.Option = {
  name: "--no-async",
  description:
    "Return immediately, without waiting for the operation in progress to complete. Defaults to --no-async",
};

const optNoClearBinaryAuthorization: Fig.Option = {
  name: "--no-clear-binary-authorization",
  description: "Remove any previously set Binary Authorization policy",
  hidden: true,
};

const optNoClearCloudsqlInstances: Fig.Option = {
  name: "--no-clear-cloudsql-instances",
  description: "Empty the current Cloud SQL instances",
  hidden: true,
};

const optNoClearConfigMaps: Fig.Option = {
  name: "--no-clear-config-maps",
  description: "Remove all config-maps",
  hidden: true,
};

const optNoClearCustomAudiences: Fig.Option = {
  name: "--no-clear-custom-audiences",
  description: "Empty the current custom audiences",
  hidden: true,
};

const optNoClearEncryptionKeyShutdownHours: Fig.Option = {
  name: "--no-clear-encryption-key-shutdown-hours",
  description: "Remove any previously set CMEK key shutdown hours setting",
  hidden: true,
};

const optNoClearEnvVars: Fig.Option = {
  name: "--no-clear-env-vars",
  description: "Remove all environment variables",
  hidden: true,
};

const optNoClearKey: Fig.Option = {
  name: "--no-clear-key",
  description: "Remove any previously set CMEK key reference",
  hidden: true,
};

const optNoClearLabels: Fig.Option = {
  name: "--no-clear-labels",
  description:
    "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
  hidden: true,
};

const optNoClearNetwork: Fig.Option = {
  name: "--no-clear-network",
  description:
    "Disconnect this Cloud Run service from the VPC network it is connected to",
  hidden: true,
};

const optNoClearNetworkTags: Fig.Option = {
  name: "--no-clear-network-tags",
  description: "Clears all existing network tags from the Cloud Run service",
  hidden: true,
};

const optNoClearPostKeyRevocationActionType: Fig.Option = {
  name: "--no-clear-post-key-revocation-action-type",
  description: "Remove any previously set post CMEK key revocation action type",
  hidden: true,
};

const optNoClearSecrets: Fig.Option = {
  name: "--no-clear-secrets",
  description: "Remove all secrets",
  hidden: true,
};

const optNoClearVolumeMounts: Fig.Option = {
  name: "--no-clear-volume-mounts",
  description: "Remove all existing mounts from the current container",
  hidden: true,
};

const optNoClearVolumes: Fig.Option = {
  name: "--no-clear-volumes",
  description:
    "Remove all existing volumes from the Cloud Run resource, including volumes mounted as secrets",
  hidden: true,
};

const optNoClearVpcConnector: Fig.Option = {
  name: "--no-clear-vpc-connector",
  description: "Remove the VPC connector for this resource",
  hidden: true,
};

const optNoCpuBoost: Fig.Option = {
  name: "--no-cpu-boost",
  description:
    "Whether to allocate extra CPU to containers on startup to reduce the perceived latency of a cold start request. Enabled by default when unspecified on new services",
};

const optNoCpuThrottling: Fig.Option = {
  name: "--no-cpu-throttling",
  description:
    "Whether to throttle the CPU when the container is not actively serving requests",
};

const optNoDefaultUrl: Fig.Option = {
  name: "--no-default-url",
  description:
    "Toggles the default url for a run service. This is enabled by default if not specified",
};

const optNoDeployHealthCheck: Fig.Option = {
  name: "--no-deploy-health-check",
  description:
    "Schedules a single instance of the Revision and waits for it to pass its startup probe for the deployment to succeed. If disabled, the startup probe runs only when the revision is first started via invocation or by setting min-instances. This check is enabled by default when unspecified",
};

const optNoDryRun: Fig.Option = {
  name: "--no-dry-run",
  description:
    "If set to true, only validates the configuration. The configuration will not be applied",
  hidden: true,
};

const optNoExecuteNow: Fig.Option = {
  name: "--no-execute-now",
  description:
    "Execute the job immediately after the creation or update completes. gcloud exits once the job has started unless the `--wait` flag is set",
  hidden: true,
};

const optNoInvokerIamCheck: Fig.Option = {
  name: "--no-invoker-iam-check",
  description:
    "Optionally disable invoker IAM checks. More info at https://cloud.google.com/run/docs/securing/managing-access#invoker_check",
};

const optNoSessionAffinity: Fig.Option = {
  name: "--no-session-affinity",
  description:
    "Whether to enable session affinity for connections to the service",
};

const optNoShowExecError: Fig.Option = {
  name: "--no-show-exec-error",
  description:
    "If true and command fails, print the underlying command that was executed and its exit status",
  hidden: true,
};

const optNoTraffic: Fig.Option = {
  name: "--no-traffic",
  description:
    "True to avoid sending traffic to the revision being deployed. Setting this flag assigns any traffic assigned to the LATEST revision to the specific revision bound to LATEST before the deployment. The effect is that the revision being deployed will not receive traffic",
};

const optNoUri: Fig.Option = {
  name: "--no-uri",
  description:
    "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
  hidden: true,
};

const optNoUseHttp2: Fig.Option = {
  name: "--no-use-http2",
  description: "Whether to use HTTP/2 for connections to the service",
};

const optNoWait: Fig.Option = {
  name: "--no-wait",
  description:
    "Wait until the execution has completed running before exiting. If not set, gcloud exits successfully when the execution has started. Implies --execute-now",
  hidden: true,
};

const optOrder: Fig.Option = {
  name: "--order",
  description:
    "Ordering of returned log entries based on timestamp field. _ORDER_ must be one of: *desc*, *asc*",
  args: {
    name: "ORDER",
    suggestions: ["desc", "asc"],
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

const optParallelism: Fig.Option = {
  name: "--parallelism",
  description:
    "Number of tasks that may run concurrently. Must be less than or equal to the number of tasks. Set to 0 to unset",
  args: {
    name: "PARALLELISM",
  },
};

const optPlatform: Fig.Option = {
  name: "--platform",
  description:
    "Target platform for running commands. Alternatively, set the property [run/platform]",
  hidden: true,
  args: {
    name: "PLATFORM",
    description: "String",
    suggestions: ["gke", "kubernetes", "managed"],
  },
};

const optPort: Fig.Option = {
  name: "--port",
  description:
    'Container port to receive requests at. Also sets the $PORT environment variable. Must be a number between 1 and 65535, inclusive. To unset this field, pass the special value "default". If updating an existing service with a TCP startup probe pointing to the previous container port, this will also update the probe port',
  args: {
    name: "PORT",
  },
};

const optPostKeyRevocationActionType: Fig.Option = {
  name: "--post-key-revocation-action-type",
  description:
    "Action type after CMEK key revocation. _POST_KEY_REVOCATION_ACTION_TYPE_ must be one of:",
  args: {
    name: "POST_KEY_REVOCATION_ACTION_TYPE",
    description: "String",
    suggestions: ["prevent-new", "shut-down"],
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
  description:
    "Region in which the resource can be found. Alternatively, set the property [run/region]",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion2: Fig.Option = {
  name: "--region",
  description: "The Cloud Run region",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion3: Fig.Option = {
  name: "--region",
  description:
    "The Cloud region for the WorkerPool. Overrides the default `run/region` property value for this command invocation",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRemoveCloudsqlInstances: Fig.Option = {
  name: "--remove-cloudsql-instances",
  description: "Remove the given values from the current Cloud SQL instances",
  args: {
    name: "CLOUDSQL-INSTANCES",
    description: "List",
  },
};

const optRemoveConfigMaps: Fig.Option = {
  name: "--remove-config-maps",
  description: "List of config-maps to be removed",
  hidden: true,
  args: {
    name: "KEY",
    description: "List",
  },
};

const optRemoveContainers: Fig.Option = {
  name: "--remove-containers",
  description: "List of containers to remove",
  args: {
    name: "CONTAINER",
    description: "List",
  },
};

const optRemoveCustomAudiences: Fig.Option = {
  name: "--remove-custom-audiences",
  description: "Remove the given values from the current custom audiences",
  args: {
    name: "CUSTOM-AUDIENCES",
    description: "List",
  },
};

const optRemoveEnvVars: Fig.Option = {
  name: "--remove-env-vars",
  description: "List of environment variables to be removed",
  args: {
    name: "KEY",
    description: "List",
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

const optRemoveSecrets: Fig.Option = {
  name: "--remove-secrets",
  description: "List of secrets to be removed",
  args: {
    name: "KEY",
    description: "List",
  },
};

const optRemoveVolume: Fig.Option = {
  name: "--remove-volume",
  description: "Removes volumes from the Cloud Run resource",
  args: {
    name: "VOLUME",
    description: "List",
  },
};

const optRemoveVolumeMount: Fig.Option = {
  name: "--remove-volume-mount",
  description:
    "Removes the volume mounted at the specified path from the current container",
  args: {
    name: "MOUNT_PATH",
    description: "List",
  },
};

const optRevisionSuffix: Fig.Option = {
  name: "--revision-suffix",
  description:
    "Specify the suffix of the revision name. Revision names always start with the service name automatically. For example, specifying [--revision-suffix=v1] for a service named 'helloworld', would lead to a revision named 'helloworld-v1'. Set empty string to clear the suffix and resume server-assigned naming",
  args: {
    name: "REVISION_SUFFIX",
    description: "String",
  },
};

const optRole: Fig.Option = {
  name: "--role",
  description:
    "Role name to assign to the principal. The role name is the complete path of a predefined role, such as `roles/logging.viewer`, or the role ID for a custom role, such as `organizations/{ORGANIZATION_ID}/roles/logging.viewer`",
  priority: 100,
  args: {
    name: "ROLE",
    description: "String",
  },
};

const optRole2: Fig.Option = {
  name: "--role",
  description: "The role to remove the principal from",
  priority: 100,
  args: {
    name: "ROLE",
    description: "String",
  },
};

const optScaling: Fig.Option = {
  name: "--scaling",
  description:
    'The scaling mode to use for this service. Flag value could be either "auto" for automatic scaling, or a positive integer to configure manual scaling with the given integer as a fixed instance count',
  args: {
    name: "SCALING",
  },
};

const optServiceAccount: Fig.Option = {
  name: "--service-account",
  description:
    "The email address of an IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has",
  args: {
    name: "SERVICE_ACCOUNT",
    description: "String",
  },
};

const optServiceMaxInstances: Fig.Option = {
  name: "--service-max-instances",
  description:
    "The maximum number of container instances for this Service to run. This instance limit will be divided among all Revisions receiving a percentage of traffic",
  hidden: true,
  args: {
    name: "SERVICE_MAX_INSTANCES",
  },
};

const optServiceMinInstances: Fig.Option = {
  name: "--service-min-instances",
  description:
    "The minimum number of container instances to run for this Service or 'default' to remove. These instances will be divided among all Revisions receiving a percentage of traffic and can be modified without deploying a new Revision",
  hidden: true,
  args: {
    name: "SERVICE_MIN_INSTANCES",
  },
};

const optSessionAffinity: Fig.Option = {
  name: "--session-affinity",
  description:
    "Whether to enable session affinity for connections to the service. Use *--session-affinity* to enable and *--no-session-affinity* to disable",
};

const optSetCloudsqlInstances: Fig.Option = {
  name: "--set-cloudsql-instances",
  description:
    "Completely replace the current Cloud SQL instances with the given values",
  args: {
    name: "CLOUDSQL-INSTANCES",
    description: "List",
  },
};

const optSetConfigMaps: Fig.Option = {
  name: "--set-config-maps",
  description:
    "List of key-value pairs to set as config-maps. All existing config-maps will be removed first",
  hidden: true,
  args: {
    name: "KEY=VALUE",
    description: "Dict",
  },
};

const optSetCustomAudiences: Fig.Option = {
  name: "--set-custom-audiences",
  description:
    "Completely replace the current custom audiences with the given values",
  args: {
    name: "CUSTOM-AUDIENCES",
    description: "List",
  },
};

const optSetEnvVars: Fig.Option = {
  name: "--set-env-vars",
  description:
    "List of key-value pairs to set as environment variables. All existing environment variables will be removed first",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
  },
};

const optSetSecrets: Fig.Option = {
  name: "--set-secrets",
  description:
    "List of key-value pairs to set as secrets. All existing secrets will be removed first",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
  },
};

const optShowExecError: Fig.Option = {
  name: "--show-exec-error",
  description:
    "If true and command fails, print the underlying command that was executed and its exit status",
  hidden: true,
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

const optSource: Fig.Option = {
  name: "--source",
  description:
    "The location of the source to build. If a Dockerfile is present in the source code directory, it will be built using that Dockerfile, otherwise it will use Google Cloud buildpacks. See https://cloud.google.com/run/docs/deploying-source-code for more details. The location can be a directory on a local disk or a gzipped archive file (.tar.gz) in Google Cloud Storage. If the source is a local directory, this command skips the files specified in the `--ignore-file`. If `--ignore-file` is not specified, use `.gcloudignore` file. If a `.gcloudignore` file is absent and a `.gitignore` file is present in the local source directory, gcloud will use a generated Git-compatible `.gcloudignore` file that respects your .gitignored files. The global `.gitignore` is not respected. For more information on `.gcloudignore`, see `gcloud topic gcloudignore`",
  args: {
    name: "SOURCE",
    description: "String",
  },
};

const optStartupProbe: Fig.Option = {
  name: "--startup-probe",
  description:
    "Comma separated settings for startup probe in the form KEY=VALUE. Each key stands for a field of the probe described in https://cloud.google.com/run/docs/reference/rest/v1/Container#Probe. Currently supported keys are: initialDelaySeconds, timeoutSeconds, periodSeconds, failureThreshold, httpGet.port, httpGet.path, grpc.port, grpc.service, tcpSocket.port",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
  },
};

const optSubnet: Fig.Option = {
  name: "--subnet",
  description:
    "The VPC subnetwork that the Cloud Run job will get IPs from. The subnetwork must be `/26` or larger. If --network is also specified, subnet must be a subnetwork of the network specified by the --network flag. If --network is not specified, network will be looked up from this subnetwork. To clear existing VPC network settings, use --clear-network",
  args: {
    name: "SUBNET",
    description: "String",
  },
};

const optSubnet2: Fig.Option = {
  name: "--subnet",
  description:
    "The VPC subnetwork that the Cloud Run service will get IPs from. The subnetwork must be `/26` or larger. If --network is also specified, subnet must be a subnetwork of the network specified by the --network flag. If --network is not specified, network will be looked up from this subnetwork. To clear existing VPC network settings, use --clear-network",
  args: {
    name: "SUBNET",
    description: "String",
  },
};

const optTag: Fig.Option = {
  name: "--tag",
  description: "Traffic tag to assign to the newly created revision",
  args: {
    name: "TAG",
    description: "String",
  },
};

const optTaskTimeout: Fig.Option = {
  name: "--task-timeout",
  description:
    'Set the maximum time (deadline) a job task attempt can run for. In the case of retries, this deadline applies to each attempt of a task. If the task attempt does not complete within this time, it will be killed. It is specified as a duration; for example, "10m5s" is ten minutes, and five seconds. If you don\'t specify a unit, seconds is assumed. For example, "10" is 10 seconds',
  args: {
    name: "TASK_TIMEOUT",
  },
};

const optTasks: Fig.Option = {
  name: "--tasks",
  description:
    "Number of tasks that must run to completion for the execution to be considered done",
  args: {
    name: "TASKS",
    description: "Int",
  },
};

const optTimeout: Fig.Option = {
  name: "--timeout",
  description:
    'Set the maximum request execution time (timeout). It is specified as a duration; for example, "10m5s" is ten minutes, and five seconds. If you don\'t specify a unit, seconds is assumed. For example, "10" is 10 seconds',
  args: {
    name: "TIMEOUT",
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

const optUpdateAnnotations: Fig.Option = {
  name: "--update-annotations",
  description:
    "List of annotation KEY=VALUE pairs to update. If an annotation exists, its value is modified. Otherwise, a new annotation is created",
  hidden: true,
  args: {
    name: "KEY=VALUE",
    description: "Dict",
  },
};

const optUpdateConfigMaps: Fig.Option = {
  name: "--update-config-maps",
  description: "List of key-value pairs to set as config-maps",
  hidden: true,
  args: {
    name: "KEY=VALUE",
    description: "Dict",
  },
};

const optUpdateEnvVars: Fig.Option = {
  name: "--update-env-vars",
  description: "List of key-value pairs to set as environment variables",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
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

const optUpdateSecrets: Fig.Option = {
  name: "--update-secrets",
  description: "List of key-value pairs to set as secrets",
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

const optUseHttp2: Fig.Option = {
  name: "--use-http2",
  description:
    "Whether to use HTTP/2 for connections to the service. Use *--use-http2* to enable and *--no-use-http2* to disable",
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

const optVpcConnector: Fig.Option = {
  name: "--vpc-connector",
  description: "Set a VPC connector for this resource",
  args: {
    name: "VPC_CONNECTOR",
    description: "String",
  },
};

const optVpcEgress: Fig.Option = {
  name: "--vpc-egress",
  description:
    "Specify which of the outbound traffic to send through Direct VPC egress or the VPC connector for this resource. This resource must have Direct VPC egress enabled or a VPC connector to set this flag. _VPC_EGRESS_ must be one of:",
  args: {
    name: "VPC_EGRESS",
    description: "String",
    suggestions: ["all", "all-traffic", "private-ranges-only"],
  },
};

const optWait: Fig.Option = {
  name: "--wait",
  description:
    "Wait until the execution has completed running before exiting. If not set, gcloud exits successfully when the execution has started. Implies --execute-now",
};

const completionSpec: Fig.Spec = {
  name: "run",
  description: "Manage your Cloud Run applications",
  subcommands: [
    {
      name: "compose",
      description: "Support Docker Compose workflows on Cloud Run",
      subcommands: [
        {
          name: "up",
          description: "Deploy to Cloud Run from compose specification",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--allow-unauthenticated",
              description:
                "Whether to enable allowing unauthenticated access to the service. This may take a few moments to take effect. Use *--allow-unauthenticated* to enable and *--no-allow-unauthenticated* to disable",
            },
            optBillingProject,
            {
              name: "--build",
              description: "Force build of images",
            },
            optConfiguration,
            optDryRun,
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
              name: "--no-allow-unauthenticated",
              description:
                "Whether to enable allowing unauthenticated access to the service. This may take a few moments to take effect",
            },
            {
              name: "--no-build",
              description: "Skip building from source if applicable",
            },
            optNoDryRun,
            optNoShowExecError,
            optProject,
            optQuiet,
            optRegion,
            optShowExecError,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "COMPOSE_FILE",
            description:
              "The compose yaml file to deploy from a Compose directory to Cloud Run",
            isOptional: true,
            template: "filepaths",
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
      name: "configurations",
      description: "View and manage your Cloud Run configurations",
      hidden: true,
      subcommands: [
        {
          name: "describe",
          description: "Obtain details about a given configuration",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            optClusterLocation,
            optConfiguration,
            optContext,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLogHttp,
            {
              name: "--namespace",
              description:
                "Specific to Cloud Run for Anthos: Kubernetes namespace for the configuration",
              args: {
                name: "NAMESPACE",
                description: "String",
              },
            },
            optPlatform,
            optProject,
            optQuiet,
            optRegion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CONFIGURATION",
            description:
              "ID of the configuration or fully qualified identifier for the configuration",
          },
        },
        {
          name: "list",
          description: "List available Configurations",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            optClusterLocation,
            optConfiguration,
            optContext,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLimit,
            optLogHttp,
            optNamespace,
            optNoUri,
            optPageSize,
            optPlatform,
            optProject,
            optQuiet,
            optRegion,
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
        optCluster,
        optClusterLocation,
        optConfiguration,
        optContext,
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optKubeconfig,
        optLogHttp,
        optPlatform,
        optProject,
        optQuiet,
        optRegion,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "deploy",
      description: "Create or update a Cloud Run service",
      options: [
        optAccessTokenFile,
        optAccount,
        optAddCloudsqlInstances,
        optAddCustomAudiences,
        optAddVolume,
        optAddVolumeMount,
        {
          name: "--allow-unauthenticated",
          description:
            "Whether to enable allowing unauthenticated access to the service. This may take a few moments to take effect. Use *--allow-unauthenticated* to enable and *--no-allow-unauthenticated* to disable",
        },
        {
          name: "--allow-unencrypted-build",
          description:
            "(DEPRECATED) Whether to allow customer-managed encryption key (CMEK) deployments without encrypting the build process. This means that only the deployed container will be encrypted",
          hidden: true,
          deprecated: true,
        },
        optArgs,
        optAsync,
        {
          name: "--automatic-updates",
          description:
            "Indicates whether automatic base image updates should be enabled for an image built from source. Use *--automatic-updates* to enable and *--no-automatic-updates* to disable",
        },
        {
          name: "--base-image",
          description:
            "Specifies the base image to be used for automatic base image updates. When deploying from source using the Google Cloud buildpacks, this flag will also override the base image used for the application image. See https://cloud.google.com/run/docs/configuring/services/automatic-base-image-updates for more details",
          args: {
            name: "BASE_IMAGE",
            description: "String",
          },
        },
        optBillingProject,
        optBinaryAuthorization,
        optBreakglass,
        {
          name: "--build-env-vars-file",
          description:
            "Path to a local YAML file with definitions for all build environment variables. All existing build environment variables will be removed before the new build environment variables are added. Example YAML content:",
          args: {
            name: "FILE_PATH",
            template: "filepaths",
          },
        },
        {
          name: "--build-service-account",
          description:
            "Specifies the service account to use to execute the build. Applies only to source deploy builds using the Build API",
          args: {
            name: "BUILD_SERVICE_ACCOUNT",
          },
        },
        {
          name: "--build-worker-pool",
          description:
            "Name of the Cloud Build Custom Worker Pool that should be used to build the function. The format of this field is `projects/${PROJECT}/locations/${LOCATION}/workerPools/${WORKERPOOL}` where ${PROJECT} is the project id and ${LOCATION} is the location where the worker pool is defined and ${WORKERPOOL} is the short name of the worker pool",
          args: {
            name: "BUILD_WORKER_POOL",
            description: "String",
          },
        },
        {
          name: "--clear-base-image",
          description: "Opts out of automatic base image updates",
        },
        optClearBinaryAuthorization,
        {
          name: "--clear-build-env-vars",
          description: "Remove all build environment variables",
        },
        {
          name: "--clear-build-service-account",
          description: "Clears the Cloud Build service account field",
        },
        {
          name: "--clear-build-worker-pool",
          description: "Clears the Cloud Build Custom Worker Pool field",
        },
        optClearCloudsqlInstances,
        optClearConfigMaps,
        optClearCustomAudiences,
        optClearEncryptionKeyShutdownHours,
        {
          name: "--clear-env-vars",
          description: "Remove all environment variables",
        },
        optClearKey,
        optClearLabels,
        optClearNetwork,
        optClearNetworkTags,
        optClearPostKeyRevocationActionType,
        {
          name: "--clear-secrets",
          description: "Remove all secrets",
        },
        optClearVolumeMounts,
        optClearVolumes,
        optClearVpcConnector,
        optClientName,
        optClientVersion,
        optCluster,
        optClusterLocation,
        optCommand,
        optConcurrency,
        optConfiguration,
        optConnectivity,
        optContainer,
        optContext,
        optCpu,
        optCpuBoost,
        optCpuThrottling,
        optDefaultUrl,
        optDependsOn,
        optDeployHealthCheck,
        optDescription,
        optEncryptionKeyShutdownHours,
        optEnvVarsFile,
        optExecutionEnvironment2,
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--function",
          description:
            "Specifies that the deployed object is a function. If a value is provided, that value is used as the entrypoint",
          args: {
            name: "FUNCTION",
            description: "String",
          },
        },
        optGpu,
        optGpuType,
        optGpuZonalRedundancy,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optIap,
        {
          name: "--image",
          description:
            'Name of the container image to deploy (e.g. `us-docker.pkg.dev/cloudrun/container/hello:latest`). When used with --source, the image must be the URI of an Artifact Registry Docker repository in the Docker format ($REGION-docker.pkg.dev/$PROJECT/$REPOSITORY") or ($REGION-docker.pkg.dev/$PROJECT/$REPOSITORY/$IMAGE_NAME"). The image name must be the same as the name of the service',
          args: {
            name: "IMAGE",
            description: "String",
          },
        },
        optImpersonateServiceAccount,
        optIngress,
        optInvokerIamCheck,
        optKey,
        optKubeconfig,
        optLabels,
        optLivenessProbe,
        optLogHttp,
        optMax,
        optMaxInstances,
        optMemory,
        optMin,
        optMinInstances,
        optNamespace3,
        optNetwork2,
        optNetworkTags2,
        {
          name: "--no-allow-unauthenticated",
          description:
            "Whether to enable allowing unauthenticated access to the service. This may take a few moments to take effect",
        },
        {
          name: "--no-allow-unencrypted-build",
          description:
            "(DEPRECATED) Whether to allow customer-managed encryption key (CMEK) deployments without encrypting the build process. This means that only the deployed container will be encrypted",
          hidden: true,
          deprecated: true,
        },
        optNoAsync,
        {
          name: "--no-automatic-updates",
          description:
            "Indicates whether automatic base image updates should be enabled for an image built from source",
        },
        {
          name: "--no-clear-base-image",
          description: "Opts out of automatic base image updates",
          hidden: true,
        },
        optNoClearBinaryAuthorization,
        {
          name: "--no-clear-build-env-vars",
          description: "Remove all build environment variables",
          hidden: true,
        },
        {
          name: "--no-clear-build-service-account",
          description: "Clears the Cloud Build service account field",
          hidden: true,
        },
        {
          name: "--no-clear-build-worker-pool",
          description: "Clears the Cloud Build Custom Worker Pool field",
          hidden: true,
        },
        optNoClearCloudsqlInstances,
        optNoClearConfigMaps,
        optNoClearCustomAudiences,
        optNoClearEncryptionKeyShutdownHours,
        optNoClearEnvVars,
        optNoClearKey,
        optNoClearLabels,
        optNoClearNetwork,
        optNoClearNetworkTags,
        optNoClearPostKeyRevocationActionType,
        optNoClearSecrets,
        optNoClearVolumeMounts,
        optNoClearVolumes,
        optNoClearVpcConnector,
        optNoCpuBoost,
        optNoCpuThrottling,
        optNoDefaultUrl,
        optNoDeployHealthCheck,
        {
          name: "--no-gpu-zonal-redundancy",
          description: "Set GPU zonal redundancy",
        },
        {
          name: "--no-iap",
          description: "Whether to enable IAP for the Service",
        },
        optNoInvokerIamCheck,
        optNoSessionAffinity,
        optNoTraffic,
        optNoUseHttp2,
        optPlatform,
        optPort,
        optPostKeyRevocationActionType,
        optProject,
        optQuiet,
        optRegion,
        {
          name: "--regions",
          description:
            "Comma-separated list of regions in which the multi-region Service can be found",
          args: {
            name: "REGIONS",
            description: "String",
          },
        },
        {
          name: "--remove-build-env-vars",
          description: "List of build environment variables to be removed",
          args: {
            name: "KEY",
            description: "List",
          },
        },
        optRemoveCloudsqlInstances,
        optRemoveConfigMaps,
        optRemoveContainers,
        optRemoveCustomAudiences,
        optRemoveEnvVars,
        optRemoveLabels,
        optRemoveSecrets,
        optRemoveVolume,
        optRemoveVolumeMount,
        optRevisionSuffix,
        optScaling,
        optServiceAccount,
        optServiceMaxInstances,
        optServiceMinInstances,
        optSessionAffinity,
        {
          name: "--set-build-env-vars",
          description:
            "List of key-value pairs to set as build environment variables. All existing build environment variables will be removed first",
          args: {
            name: "KEY=VALUE",
            description: "Dict",
          },
        },
        optSetCloudsqlInstances,
        optSetConfigMaps,
        optSetCustomAudiences,
        optSetEnvVars,
        optSetSecrets,
        optSource,
        optStartupProbe,
        optSubnet2,
        optTag,
        optTimeout,
        optTraceToken,
        optUpdateAnnotations,
        {
          name: "--update-build-env-vars",
          description:
            "List of key-value pairs to set as build environment variables",
          args: {
            name: "KEY=VALUE",
            description: "Dict",
          },
        },
        optUpdateConfigMaps,
        optUpdateEnvVars,
        optUpdateLabels,
        optUpdateSecrets,
        optUseHttp2,
        optUserOutputEnabled,
        optVerbosity,
        optVpcConnector,
        optVpcEgress,
      ],
      args: {
        name: "SERVICE",
        description:
          "ID of the service or fully qualified identifier for the service",
        isOptional: true,
      },
    },
    {
      name: "domain-mappings",
      description: "View and manage your Cloud Run for Anthos domain mappings",
      subcommands: [
        {
          name: "create",
          description: "Create domain mappings for Cloud Run for Anthos",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            optClusterLocation,
            optConfiguration,
            optContext,
            optDomain,
            optFlagsFile,
            optFlatten,
            {
              name: "--force-override",
              description:
                "Map this domain even if it is already mapped to another service",
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLogHttp,
            optNamespace2,
            {
              name: "--no-force-override",
              description:
                "Map this domain even if it is already mapped to another service",
              hidden: true,
            },
            optPlatform,
            optProject,
            optQuiet,
            {
              name: "--service",
              description: "Create domain mapping for the given service",
              priority: 100,
              args: {
                name: "SERVICE",
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
          description: "Delete domain mappings for Cloud Run for Anthos",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync2,
            optBillingProject,
            optCluster,
            optClusterLocation,
            optConfiguration,
            optContext,
            optDomain,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLogHttp,
            optNamespace2,
            optNoAsync2,
            optPlatform,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "describe",
          description: "Describe domain mappings for Cloud Run for Anthos",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            optClusterLocation,
            optConfiguration,
            optContext,
            optDomain,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLogHttp,
            optNamespace2,
            optPlatform,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "list",
          description: "Lists domain mappings for Cloud Run for Anthos",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            optClusterLocation,
            optConfiguration,
            optContext,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLimit,
            optLogHttp,
            optNamespace,
            optNoUri,
            optPageSize,
            optPlatform,
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
        optCluster,
        optClusterLocation,
        optConfiguration,
        optContext,
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optKubeconfig,
        optLogHttp,
        optPlatform,
        optProject,
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "jobs",
      description: "View and manage your Cloud Run jobs",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Cloud Run job",
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
            optMember,
            optProject,
            optQuiet,
            optRegion,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "JOB",
            description:
              "ID of the job or fully qualified identifier for the job",
          },
        },
        {
          name: "create",
          description: "Create a Cloud Run job",
          options: [
            optAccessTokenFile,
            optAccount,
            optAddVolume,
            optAddVolumeMount,
            optArgs,
            optAsync,
            optBillingProject,
            optBinaryAuthorization,
            optBreakglass,
            {
              name: "--clear-env-vars",
              description: "Remove all environment variables",
            },
            {
              name: "--clear-secrets",
              description: "Remove all secrets",
            },
            optClearVolumeMounts,
            optClearVolumes,
            optClientName,
            optClientVersion,
            optCommand,
            optConfiguration,
            optContainer,
            optCpu,
            optDependsOn,
            optEnvVarsFile,
            optExecuteNow,
            optExecutionEnvironment,
            optFlagsFile,
            optFlatten,
            optFormat,
            optGpu,
            optGpuType,
            optGpuZonalRedundancy,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImage2,
            optImpersonateServiceAccount,
            optKey,
            optLabels,
            optLogHttp,
            optMaxRetries,
            optMemory,
            optNetwork,
            optNetworkTags,
            optNoAsync,
            optNoClearEnvVars,
            optNoClearSecrets,
            optNoClearVolumeMounts,
            optNoClearVolumes,
            optNoExecuteNow,
            {
              name: "--no-gpu-zonal-redundancy",
              description: "Set GPU zonal redundancy",
            },
            optNoWait,
            optParallelism,
            optProject,
            optQuiet,
            optRegion,
            optRemoveEnvVars,
            optRemoveSecrets,
            optRemoveVolume,
            optRemoveVolumeMount,
            optServiceAccount,
            {
              name: "--set-cloudsql-instances",
              description:
                "You can specify a name of a Cloud SQL instance if it's in the same project and region as your Cloud Run resource; otherwise specify <project>:<region>:<instance> for the instance",
              args: {
                name: "CLOUDSQL-INSTANCES",
                description: "List",
              },
            },
            optSetEnvVars,
            optSetSecrets,
            optStartupProbe,
            optSubnet,
            optTaskTimeout,
            optTasks,
            optTraceToken,
            optUpdateAnnotations,
            optUpdateEnvVars,
            optUpdateSecrets,
            optUserOutputEnabled,
            optVerbosity,
            optVpcConnector,
            optVpcEgress,
            optWait,
          ],
          args: {
            name: "JOB",
            description:
              "ID of the Job or fully qualified identifier for the Job",
            isOptional: true,
          },
        },
        {
          name: "delete",
          description: "Delete a job",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync2,
            optBillingProject,
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
            optNoAsync2,
            optProject,
            optQuiet,
            optRegion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "JOB",
            description:
              "ID of the Job or fully qualified identifier for the Job",
          },
        },
        {
          name: "deploy",
          description: "Create or update a Cloud Run job",
          options: [
            optAccessTokenFile,
            optAccount,
            optAddVolume,
            optAddVolumeMount,
            optArgs,
            optAsync,
            optBillingProject,
            optBinaryAuthorization,
            optBreakglass,
            {
              name: "--clear-env-vars",
              description: "Remove all environment variables",
            },
            {
              name: "--clear-network",
              description:
                "Disconnect this Cloud Run job from the VPC network it is connected to",
            },
            {
              name: "--clear-network-tags",
              description:
                "Clears all existing network tags from the Cloud Run job",
            },
            {
              name: "--clear-secrets",
              description: "Remove all secrets",
            },
            optClearVolumeMounts,
            optClearVolumes,
            optClientName,
            optClientVersion,
            optCommand,
            optConfiguration,
            optContainer,
            optCpu,
            optDependsOn,
            optEnvVarsFile,
            optExecuteNow,
            optExecutionEnvironment,
            optFlagsFile,
            optFlatten,
            optFormat,
            optGpu,
            optGpuType,
            optGpuZonalRedundancy,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImage2,
            optImpersonateServiceAccount,
            optKey,
            optLabels,
            optLogHttp,
            optMaxRetries,
            optMemory,
            optNetwork,
            optNetworkTags,
            optNoAsync,
            optNoClearEnvVars,
            {
              name: "--no-clear-network",
              description:
                "Disconnect this Cloud Run job from the VPC network it is connected to",
              hidden: true,
            },
            {
              name: "--no-clear-network-tags",
              description:
                "Clears all existing network tags from the Cloud Run job",
              hidden: true,
            },
            optNoClearSecrets,
            optNoClearVolumeMounts,
            optNoClearVolumes,
            optNoExecuteNow,
            {
              name: "--no-gpu-zonal-redundancy",
              description: "Set GPU zonal redundancy",
            },
            optNoWait,
            optParallelism,
            optProject,
            optQuiet,
            optRegion,
            optRemoveContainers,
            optRemoveEnvVars,
            optRemoveSecrets,
            optRemoveVolume,
            optRemoveVolumeMount,
            optServiceAccount,
            {
              name: "--set-cloudsql-instances",
              description:
                "You can specify a name of a Cloud SQL instance if it's in the same project and region as your Cloud Run resource; otherwise specify <project>:<region>:<instance> for the instance",
              args: {
                name: "CLOUDSQL-INSTANCES",
                description: "List",
              },
            },
            optSetEnvVars,
            optSetSecrets,
            optSource,
            optStartupProbe,
            optSubnet,
            optTaskTimeout,
            optTasks,
            optTraceToken,
            optUpdateAnnotations,
            optUpdateEnvVars,
            optUpdateSecrets,
            optUserOutputEnabled,
            optVerbosity,
            optVpcConnector,
            optVpcEgress,
            optWait,
          ],
          args: {
            name: "JOB",
            description:
              "ID of the Job or fully qualified identifier for the Job",
            isOptional: true,
          },
        },
        {
          name: "describe",
          description: "Obtain details about jobs",
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
            name: "JOB",
            description:
              "ID of the Job or fully qualified identifier for the Job",
          },
        },
        {
          name: "execute",
          description: "Execute a job",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--args",
              description:
                "Comma-separated arguments passed to the command run by the container image. If provided, an execution will be created with the input values. Otherwise, the existing arguments of the job are used",
              args: {
                name: "ARG",
                description: "List",
              },
            },
            optAsync,
            optBillingProject,
            optConfiguration,
            optContainer,
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
              name: "--no-wait",
              description:
                "Wait until the execution has completed running before exiting. If not set, gcloud exits successfully when the execution has started",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion,
            {
              name: "--task-timeout",
              description:
                'The existing maximum time (deadline) a job task attempt can run for. If provided, an execution will be created with this value. Otherwise existing maximum time of the job is used. In the case of retries, this deadline applies to each attempt of a task. If the task attempt does not complete within this time, it will be killed. It is specified as a duration; for example, "10m5s" is ten minutes, and five seconds. If you don\'t specify a unit, seconds is assumed. For example, "10" is 10 seconds',
              args: {
                name: "TASK_TIMEOUT",
              },
            },
            {
              name: "--tasks",
              description:
                "Number of tasks that must run to completion for the execution to be considered done. If provided, an execution will be created with this value. Otherwise the existing task count of the job is used",
              args: {
                name: "TASKS",
              },
            },
            optTraceToken,
            {
              name: "--update-env-vars",
              description:
                "List of key-value pairs to set as environment variables overrides for an execution of a job. If provided, an execution will be created with the merge result of the input values and the existing environment variables. New value overrides existing value if they have the same key. If not provided, existing environment variables are used",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--wait",
              description:
                "Wait until the execution has completed running before exiting. If not set, gcloud exits successfully when the execution has started",
            },
          ],
          args: {
            name: "JOB",
            description:
              "ID of the Job or fully qualified identifier for the Job",
            isOptional: true,
          },
        },
        {
          name: "executions",
          description: "View and manage your Cloud Run jobs executions",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel an execution",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync2,
                optBillingProject,
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
                optNoAsync2,
                optProject,
                optQuiet,
                optRegion,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "EXECUTION",
                description:
                  "ID of the Execution or fully qualified identifier for the Execution",
              },
            },
            {
              name: "delete",
              description: "Delete an execution",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync2,
                optBillingProject,
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
                optNoAsync2,
                optProject,
                optQuiet,
                optRegion,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "EXECUTION",
                description:
                  "ID of the Execution or fully qualified identifier for the Execution",
              },
            },
            {
              name: "describe",
              description: "Obtain details about executions",
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
                name: "EXECUTION",
                description:
                  "ID of the Execution or fully qualified identifier for the Execution",
              },
            },
            {
              name: "list",
              description: "List executions",
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
                {
                  name: "--job",
                  description: "Limit matched resources to the given job",
                  args: {
                    name: "JOB",
                    description: "String",
                  },
                },
                optLimit,
                optLogHttp,
                optNamespace,
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
              ],
            },
            {
              name: "tasks",
              description: "View and manage your Cloud Run jobs tasks",
              subcommands: [
                {
                  name: "describe",
                  description: "Obtain details about tasks",
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
                    name: "TASK",
                    description:
                      "ID of the Task or fully qualified identifier for the Task",
                  },
                },
                {
                  name: "list",
                  description: "List tasks",
                  options: [
                    {
                      name: "--abandoned",
                      description: "Include abandoned tasks",
                    },
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    {
                      name: "--cancelled",
                      description: "Include cancelled tasks",
                    },
                    {
                      name: "--completed",
                      description:
                        "Include succeeded, failed, and cancelled tasks",
                    },
                    optConfiguration,
                    {
                      name: "--execution",
                      description:
                        "ID of the Execution or fully qualified identifier for the Execution",
                      priority: 100,
                      args: {
                        name: "EXECUTION",
                        description: "String",
                      },
                    },
                    {
                      name: "--failed",
                      description: "Include failed tasks",
                    },
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
                    {
                      name: "--no-completed",
                      description: "Include running and pending tasks",
                    },
                    {
                      name: "--no-started",
                      description: "Include pending and abandoned tasks",
                    },
                    optNoUri,
                    optPageSize,
                    {
                      name: "--pending",
                      description: "Include pending tasks",
                    },
                    optProject,
                    optQuiet,
                    optRegion,
                    {
                      name: "--running",
                      description: "Include running tasks",
                    },
                    optSortBy,
                    {
                      name: "--started",
                      description:
                        "Include running, succeeded, failed, and cancelled tasks",
                    },
                    {
                      name: "--succeeded",
                      description: "Include succeeded tasks",
                    },
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
                optRegion,
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
            optRegion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Run job",
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
            optRegion,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "JOB",
            description:
              "ID of the job or fully qualified identifier for the job",
          },
        },
        {
          name: "list",
          description: "List jobs",
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
            optNamespace,
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
          ],
        },
        {
          name: "logs",
          description: "Read logs for Cloud Run jobs",
          subcommands: [
            {
              name: "read",
              description: "Read logs for Cloud Run jobs",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                optFreshness,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLimit,
                optLogFilter,
                optLogHttp,
                optOrder,
                optProject,
                optQuiet,
                optRegion,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "JOB",
                description: "Name for a Cloud Run job",
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
            optRegion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding of a Cloud Run job",
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
            optMember2,
            optProject,
            optQuiet,
            optRegion,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "JOB",
            description:
              "ID of the job or fully qualified identifier for the job",
          },
        },
        {
          name: "replace",
          description: "Create or replace a job from a YAML job specification",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optClientName,
            optClientVersion,
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
            name: "FILE",
            description:
              "The absolute path to the YAML file with a Cloud Run job definition for the job to update or create",
            template: "filepaths",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a job",
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
          args: [
            {
              name: "JOB",
              description:
                "ID of the job or fully qualified identifier for the job",
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
          description: "Update a Cloud Run Job",
          options: [
            optAccessTokenFile,
            optAccount,
            optAddCloudsqlInstances,
            optAddVolume,
            optAddVolumeMount,
            optArgs,
            optAsync,
            optBillingProject,
            optBinaryAuthorization,
            optBreakglass,
            optClearBinaryAuthorization,
            optClearCloudsqlInstances,
            {
              name: "--clear-env-vars",
              description: "Remove all environment variables",
            },
            optClearLabels,
            {
              name: "--clear-network",
              description:
                "Disconnect this Cloud Run job from the VPC network it is connected to",
            },
            {
              name: "--clear-network-tags",
              description:
                "Clears all existing network tags from the Cloud Run job",
            },
            {
              name: "--clear-secrets",
              description: "Remove all secrets",
            },
            optClearVolumeMounts,
            optClearVolumes,
            optClearVpcConnector,
            optClientName,
            optClientVersion,
            optCommand,
            optConfiguration,
            optContainer,
            optCpu,
            optDependsOn,
            optEnvVarsFile,
            optExecuteNow,
            optExecutionEnvironment,
            optFlagsFile,
            optFlatten,
            optFormat,
            optGpu,
            optGpuType,
            optGpuZonalRedundancy,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImage2,
            optImpersonateServiceAccount,
            optKey,
            optLabels,
            optLogHttp,
            optMaxRetries,
            optMemory,
            optNetwork,
            optNetworkTags,
            optNoAsync,
            optNoClearBinaryAuthorization,
            optNoClearCloudsqlInstances,
            optNoClearEnvVars,
            optNoClearLabels,
            {
              name: "--no-clear-network",
              description:
                "Disconnect this Cloud Run job from the VPC network it is connected to",
              hidden: true,
            },
            {
              name: "--no-clear-network-tags",
              description:
                "Clears all existing network tags from the Cloud Run job",
              hidden: true,
            },
            optNoClearSecrets,
            optNoClearVolumeMounts,
            optNoClearVolumes,
            optNoClearVpcConnector,
            optNoExecuteNow,
            {
              name: "--no-gpu-zonal-redundancy",
              description: "Set GPU zonal redundancy",
            },
            optNoWait,
            optParallelism,
            optProject,
            optQuiet,
            optRegion,
            optRemoveCloudsqlInstances,
            optRemoveContainers,
            optRemoveEnvVars,
            optRemoveLabels,
            optRemoveSecrets,
            optRemoveVolume,
            optRemoveVolumeMount,
            optServiceAccount,
            optSetCloudsqlInstances,
            optSetEnvVars,
            optSetSecrets,
            optStartupProbe,
            optSubnet,
            optTaskTimeout,
            optTasks,
            optTraceToken,
            optUpdateAnnotations,
            optUpdateEnvVars,
            optUpdateLabels,
            optUpdateSecrets,
            optUserOutputEnabled,
            optVerbosity,
            optVpcConnector,
            optVpcEgress,
            optWait,
          ],
          args: {
            name: "JOB",
            description:
              "ID of the Job or fully qualified identifier for the Job",
            isOptional: true,
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
        optRegion,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "multi-region-services",
      description: "Manage your Cloud Run multi-region services",
      subcommands: [
        {
          name: "delete",
          description: "Deletes a multi-region service",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync2,
            optBillingProject,
            optCluster,
            optClusterLocation,
            optConfiguration,
            optContext,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLogHttp,
            optNamespace3,
            optNoAsync2,
            optPlatform,
            optProject,
            optQuiet,
            optRegion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
          },
        },
        {
          name: "describe",
          description: "Command to describe a multi-region service",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            optClusterLocation,
            optConfiguration,
            optContext,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLogHttp,
            optNamespace3,
            optPlatform,
            optProject,
            optQuiet,
            optRegion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
          },
        },
        {
          name: "list",
          description: "List available multi-region services",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            optClusterLocation,
            optConfiguration,
            optContext,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLimit,
            optLogHttp,
            optNamespace,
            optNoUri,
            optPageSize,
            optPlatform,
            optProject,
            optQuiet,
            optRegion,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "replace",
          description: "Create or Update multi-region service from YAML",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-regions",
              description:
                "Additional regions to deploy the multi-region Service",
              hidden: true,
              args: {
                name: "ADD_REGIONS",
                description: "String",
              },
            },
            optAsync,
            optBillingProject,
            optClientName,
            optClientVersion,
            optCluster,
            optClusterLocation,
            optConfiguration,
            optContext,
            optDryRun,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLogHttp,
            optNamespace,
            optNoAsync,
            optNoDryRun,
            optPlatform,
            optProject,
            optQuiet,
            optRegion,
            {
              name: "--regions",
              description:
                "Comma-separated list of regions in which the multi-region Service can be found",
              args: {
                name: "REGIONS",
                description: "String",
              },
            },
            {
              name: "--remove-regions",
              description:
                "Existing egions to remove the multi-region Service from",
              hidden: true,
              args: {
                name: "REMOVE_REGIONS",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FILE",
            description:
              "The absolute path to the YAML file with a Knative service definition for the service to update or deploy",
            template: "filepaths",
          },
        },
        {
          name: "update",
          description:
            "Update environment variables, add/remove regions, and other configuration settings in Multi-Region Services",
          options: [
            optAccessTokenFile,
            optAccount,
            optAddCloudsqlInstances,
            optAddCustomAudiences,
            {
              name: "--add-regions",
              description:
                "Additional regions to deploy the multi-region Service",
              hidden: true,
              args: {
                name: "ADD_REGIONS",
                description: "String",
              },
            },
            optAddVolume,
            optAddVolumeMount,
            optArgs,
            optAsync,
            optBillingProject,
            optBinaryAuthorization,
            optBreakglass,
            optClearBinaryAuthorization,
            optClearCloudsqlInstances,
            optClearConfigMaps,
            optClearCustomAudiences,
            optClearEncryptionKeyShutdownHours,
            {
              name: "--clear-env-vars",
              description: "Remove all environment variables",
            },
            optClearKey,
            optClearLabels,
            optClearNetwork,
            optClearNetworkTags,
            optClearPostKeyRevocationActionType,
            {
              name: "--clear-secrets",
              description: "Remove all secrets",
            },
            optClearVolumeMounts,
            optClearVolumes,
            optClearVpcConnector,
            optClientName,
            optClientVersion,
            optCluster,
            optClusterLocation,
            optCommand,
            optConcurrency,
            optConfiguration,
            optConnectivity,
            optContainer,
            optContext,
            optCpu,
            optCpuBoost,
            optCpuThrottling,
            optDefaultUrl,
            optDependsOn,
            optDeployHealthCheck,
            optEncryptionKeyShutdownHours,
            optEnvVarsFile,
            optExecutionEnvironment2,
            optFlagsFile,
            optFlatten,
            optFormat,
            optGpu,
            optGpuType,
            optGpuZonalRedundancy,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optIap,
            optImage,
            optImpersonateServiceAccount,
            optIngress,
            optInvokerIamCheck,
            optKey,
            optKubeconfig,
            optLabels,
            optLivenessProbe,
            optLogHttp,
            optMax,
            optMaxInstances,
            optMemory,
            optMin,
            optMinInstances,
            optNamespace3,
            optNetwork2,
            optNetworkTags2,
            optNoAsync,
            optNoClearBinaryAuthorization,
            optNoClearCloudsqlInstances,
            optNoClearConfigMaps,
            optNoClearCustomAudiences,
            optNoClearEncryptionKeyShutdownHours,
            optNoClearEnvVars,
            optNoClearKey,
            optNoClearLabels,
            optNoClearNetwork,
            optNoClearNetworkTags,
            optNoClearPostKeyRevocationActionType,
            optNoClearSecrets,
            optNoClearVolumeMounts,
            optNoClearVolumes,
            optNoClearVpcConnector,
            optNoCpuBoost,
            optNoCpuThrottling,
            optNoDefaultUrl,
            optNoDeployHealthCheck,
            {
              name: "--no-gpu-zonal-redundancy",
              description: "Set GPU zonal redundancy",
            },
            {
              name: "--no-iap",
              description: "Whether to enable IAP for the Service",
            },
            optNoInvokerIamCheck,
            optNoSessionAffinity,
            optNoTraffic,
            optNoUseHttp2,
            optPlatform,
            optPort,
            optPostKeyRevocationActionType,
            optProject,
            optQuiet,
            optRegion,
            optRemoveCloudsqlInstances,
            optRemoveConfigMaps,
            optRemoveContainers,
            optRemoveCustomAudiences,
            optRemoveEnvVars,
            optRemoveLabels,
            {
              name: "--remove-regions",
              description:
                "Existing egions to remove the multi-region Service from",
              hidden: true,
              args: {
                name: "REMOVE_REGIONS",
                description: "String",
              },
            },
            optRemoveSecrets,
            optRemoveVolume,
            optRemoveVolumeMount,
            optRevisionSuffix,
            optScaling,
            optServiceAccount,
            optServiceMaxInstances,
            optServiceMinInstances,
            optSessionAffinity,
            optSetCloudsqlInstances,
            optSetConfigMaps,
            optSetCustomAudiences,
            optSetEnvVars,
            optSetSecrets,
            optStartupProbe,
            optSubnet2,
            optTag,
            optTimeout,
            optTraceToken,
            optUpdateAnnotations,
            optUpdateConfigMaps,
            optUpdateEnvVars,
            optUpdateLabels,
            optUpdateSecrets,
            optUseHttp2,
            optUserOutputEnabled,
            optVerbosity,
            optVpcConnector,
            optVpcEgress,
            {
              name: "--workdir",
              description:
                "Working directory of the container process. If not specified, the container image's default working directory is used. To reset this field to its default, pass an empty string",
              args: {
                name: "WORKDIR",
                description: "String",
              },
            },
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
            isOptional: true,
          },
        },
      ],
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optCluster,
        optClusterLocation,
        optConfiguration,
        optContext,
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optKubeconfig,
        optLogHttp,
        optPlatform,
        optProject,
        optQuiet,
        optRegion,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "regions",
      description: "View available Cloud Run (fully managed) regions",
      subcommands: [
        {
          name: "list",
          description: "List available Cloud Run (fully managed) regions",
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
            optPlatform,
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
        optPlatform,
        optProject,
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "revisions",
      description: "View and manage your Cloud Run revisions",
      subcommands: [
        {
          name: "delete",
          description: "Delete a revision",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync2,
            optBillingProject,
            optCluster,
            optClusterLocation,
            optConfiguration,
            optContext,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLogHttp,
            {
              name: "--namespace",
              description:
                "Specific to Cloud Run for Anthos: Kubernetes namespace for the revision",
              args: {
                name: "NAMESPACE",
                description: "String",
              },
            },
            optNoAsync2,
            optPlatform,
            optProject,
            optQuiet,
            optRegion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REVISION",
            description:
              "ID of the revision or fully qualified identifier for the revision",
          },
        },
        {
          name: "describe",
          description: "Obtain details about revisions",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            optClusterLocation,
            optConfiguration,
            optContext,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLogHttp,
            {
              name: "--namespace",
              description:
                "Specific to Cloud Run for Anthos: Kubernetes namespace for the revision",
              args: {
                name: "NAMESPACE",
                description: "String",
              },
            },
            optPlatform,
            optProject,
            optQuiet,
            optRegion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REVISION",
            description:
              "ID of the revision or fully qualified identifier for the revision",
          },
        },
        {
          name: "list",
          description: "List available revisions",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            optClusterLocation,
            optConfiguration,
            optContext,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLimit,
            optLogHttp,
            optNamespace,
            optNoUri,
            optPageSize,
            optPlatform,
            optProject,
            optQuiet,
            optRegion,
            {
              name: "--service",
              description: "Limit matched revisions to the given service",
              args: {
                name: "SERVICE",
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
      ],
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optCluster,
        optClusterLocation,
        optConfiguration,
        optContext,
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optKubeconfig,
        optLogHttp,
        optPlatform,
        optProject,
        optQuiet,
        optRegion,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "routes",
      description: "View your Cloud Run routes",
      hidden: true,
      subcommands: [
        {
          name: "describe",
          description: "Obtain details about a given route",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            optClusterLocation,
            optConfiguration,
            optContext,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLogHttp,
            {
              name: "--namespace",
              description:
                "Specific to Cloud Run for Anthos: Kubernetes namespace for the route",
              args: {
                name: "NAMESPACE",
                description: "String",
              },
            },
            optPlatform,
            optProject,
            optQuiet,
            optRegion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ROUTE",
            description:
              "ID of the route or fully qualified identifier for the route",
          },
        },
        {
          name: "list",
          description: "List available Routes",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            optClusterLocation,
            optConfiguration,
            optContext,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLimit,
            optLogHttp,
            optNamespace,
            optNoUri,
            optPageSize,
            optPlatform,
            optProject,
            optQuiet,
            optRegion,
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
        optCluster,
        optClusterLocation,
        optConfiguration,
        optContext,
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optKubeconfig,
        optLogHttp,
        optPlatform,
        optProject,
        optQuiet,
        optRegion,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "services",
      description: "View and manage your Cloud Run services",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Cloud Run service",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            optClusterLocation,
            {
              name: "--condition",
              description:
                "A condition to include in the binding. When the condition is explicitly specified as `None` (`--condition=None`), a binding without a condition is added. When the condition is specified and is not `None`, `--role` cannot be a basic role. Basic roles are `roles/editor`, `roles/owner`, and `roles/viewer`. For more on conditions, refer to the conditions overview guide: https://cloud.google.com/iam/docs/conditions-overview",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optConditionFromFile,
            optConfiguration,
            optContext,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLogHttp,
            optMember,
            optPlatform,
            optProject,
            optQuiet,
            optRegion,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
          },
        },
        {
          name: "delete",
          description: "Delete a service",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync2,
            optBillingProject,
            optCluster,
            optClusterLocation,
            optConfiguration,
            optContext,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLogHttp,
            optNamespace3,
            optNoAsync2,
            optPlatform,
            optProject,
            optQuiet,
            optRegion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
          },
        },
        {
          name: "describe",
          description: "Obtain details about a given service",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            optClusterLocation,
            optConfiguration,
            optContext,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLogHttp,
            optNamespace3,
            optPlatform,
            optProject,
            optQuiet,
            optRegion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Run service",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            optClusterLocation,
            optConfiguration,
            optContext,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLimit,
            optLogHttp,
            optPageSize,
            optPlatform,
            optProject,
            optQuiet,
            optRegion,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
          },
        },
        {
          name: "list",
          description: "List available services",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            optClusterLocation,
            optConfiguration,
            optContext,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLimit,
            optLogHttp,
            optNamespace,
            optNoUri,
            optPageSize,
            optPlatform,
            optProject,
            optQuiet,
            optRegion,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "logs",
          description: "Read logs for Cloud Run services",
          subcommands: [
            {
              name: "read",
              description: "Read logs for a Cloud Run service",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCluster,
                optClusterLocation,
                optConfiguration,
                optContext,
                optFlagsFile,
                optFlatten,
                optFormat,
                optFreshness,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optKubeconfig,
                optLimit,
                optLogFilter,
                optLogHttp,
                optOrder,
                optPlatform,
                optProject,
                optQuiet,
                optRegion,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SERVICE",
                description: "Name for a Cloud Run service",
              },
            },
          ],
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            optClusterLocation,
            optConfiguration,
            optContext,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLogHttp,
            optPlatform,
            optProject,
            optQuiet,
            optRegion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "proxy",
          description:
            "Proxy a service to localhost authenticating as the active account or with the specified token",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            optClusterLocation,
            optConfiguration,
            optContext,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLogHttp,
            optNamespace3,
            optNoShowExecError,
            optPlatform,
            {
              name: "--port",
              description:
                "Local port number to expose the proxied service. If not specified, it will be set to 8080",
              args: {
                name: "PORT",
              },
            },
            optProject,
            optQuiet,
            optRegion,
            optShowExecError,
            {
              name: "--tag",
              description:
                "Traffic tag of the service to expose via the proxy. If not specified, the default service URL will be proxied which may serve different revisions based on traffic-splits. Custom tags can be used to proxy specific revisions. Please see https://cloud.google.com/run/docs/rollouts-rollbacks-traffic-migration#tags",
              args: {
                name: "TAG",
                description: "String",
              },
            },
            {
              name: "--token",
              description:
                "The specific identity token to add to all requests of the proxied service. If not specified, the identity token of the currently active authenticated account will be used (e.g. gcloud auth print-identity-token)",
              args: {
                name: "TOKEN",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding of a Cloud Run service",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--all",
              description:
                "Remove all bindings with this role and principal, irrespective of any conditions",
            },
            optBillingProject,
            optCluster,
            optClusterLocation,
            {
              name: "--condition",
              description:
                "The condition of the binding that you want to remove. When the condition is explicitly specified as `None` (`--condition=None`), a binding without a condition is removed. Otherwise, only a binding with a condition that exactly matches the specified condition (including the optional description) is removed. For more on conditions, refer to the conditions overview guide: https://cloud.google.com/iam/docs/conditions-overview",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optConditionFromFile,
            optConfiguration,
            optContext,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLogHttp,
            optMember2,
            {
              name: "--no-all",
              description:
                "Remove all bindings with this role and principal, irrespective of any conditions",
              hidden: true,
            },
            optPlatform,
            optProject,
            optQuiet,
            optRegion,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
          },
        },
        {
          name: "replace",
          description:
            "Create or replace a service from a YAML service specification",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optClientName,
            optClientVersion,
            optCluster,
            optClusterLocation,
            optConfiguration,
            optContext,
            optDryRun,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLogHttp,
            optNamespace,
            optNoAsync,
            optNoDryRun,
            optPlatform,
            optProject,
            optQuiet,
            optRegion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FILE",
            description:
              "The absolute path to the YAML file with a Knative service definition for the service to update or deploy",
            template: "filepaths",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a service",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            optClusterLocation,
            optConfiguration,
            optContext,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLogHttp,
            optPlatform,
            optProject,
            optQuiet,
            optRegion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "SERVICE",
              description:
                "ID of the service or fully qualified identifier for the service",
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
          description:
            "Update Cloud Run environment variables and other configuration settings",
          options: [
            optAccessTokenFile,
            optAccount,
            optAddCloudsqlInstances,
            optAddCustomAudiences,
            optAddVolume,
            optAddVolumeMount,
            optArgs,
            optAsync,
            optBillingProject,
            optBinaryAuthorization,
            optBreakglass,
            optClearBinaryAuthorization,
            optClearCloudsqlInstances,
            optClearConfigMaps,
            optClearCustomAudiences,
            optClearEncryptionKeyShutdownHours,
            {
              name: "--clear-env-vars",
              description: "Remove all environment variables",
            },
            optClearKey,
            optClearLabels,
            optClearNetwork,
            optClearNetworkTags,
            optClearPostKeyRevocationActionType,
            {
              name: "--clear-secrets",
              description: "Remove all secrets",
            },
            optClearVolumeMounts,
            optClearVolumes,
            optClearVpcConnector,
            optClientName,
            optClientVersion,
            optCluster,
            optClusterLocation,
            optCommand,
            optConcurrency,
            optConfiguration,
            optConnectivity,
            optContainer,
            optContext,
            optCpu,
            optCpuBoost,
            optCpuThrottling,
            optDefaultUrl,
            optDependsOn,
            optDeployHealthCheck,
            optEncryptionKeyShutdownHours,
            optEnvVarsFile,
            optExecutionEnvironment2,
            optFlagsFile,
            optFlatten,
            optFormat,
            optGpu,
            optGpuType,
            optGpuZonalRedundancy,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optIap,
            optImage,
            optImpersonateServiceAccount,
            optIngress,
            optInvokerIamCheck,
            optKey,
            optKubeconfig,
            optLabels,
            optLivenessProbe,
            optLogHttp,
            optMax,
            optMaxInstances,
            optMemory,
            optMin,
            optMinInstances,
            optNamespace3,
            optNetwork2,
            optNetworkTags2,
            optNoAsync,
            optNoClearBinaryAuthorization,
            optNoClearCloudsqlInstances,
            optNoClearConfigMaps,
            optNoClearCustomAudiences,
            optNoClearEncryptionKeyShutdownHours,
            optNoClearEnvVars,
            optNoClearKey,
            optNoClearLabels,
            optNoClearNetwork,
            optNoClearNetworkTags,
            optNoClearPostKeyRevocationActionType,
            optNoClearSecrets,
            optNoClearVolumeMounts,
            optNoClearVolumes,
            optNoClearVpcConnector,
            optNoCpuBoost,
            optNoCpuThrottling,
            optNoDefaultUrl,
            optNoDeployHealthCheck,
            {
              name: "--no-gpu-zonal-redundancy",
              description: "Set GPU zonal redundancy",
            },
            {
              name: "--no-iap",
              description: "Whether to enable IAP for the Service",
            },
            optNoInvokerIamCheck,
            optNoSessionAffinity,
            optNoTraffic,
            optNoUseHttp2,
            optPlatform,
            optPort,
            optPostKeyRevocationActionType,
            optProject,
            optQuiet,
            optRegion,
            optRemoveCloudsqlInstances,
            optRemoveConfigMaps,
            optRemoveContainers,
            optRemoveCustomAudiences,
            optRemoveEnvVars,
            optRemoveLabels,
            optRemoveSecrets,
            optRemoveVolume,
            optRemoveVolumeMount,
            optRevisionSuffix,
            optScaling,
            optServiceAccount,
            optServiceMaxInstances,
            optServiceMinInstances,
            optSessionAffinity,
            optSetCloudsqlInstances,
            optSetConfigMaps,
            optSetCustomAudiences,
            optSetEnvVars,
            optSetSecrets,
            optStartupProbe,
            optSubnet2,
            optTag,
            optTimeout,
            optTraceToken,
            optUpdateAnnotations,
            optUpdateConfigMaps,
            optUpdateEnvVars,
            optUpdateLabels,
            optUpdateSecrets,
            optUseHttp2,
            optUserOutputEnabled,
            optVerbosity,
            optVpcConnector,
            optVpcEgress,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
            isOptional: true,
          },
        },
        {
          name: "update-traffic",
          description: "Adjust the traffic assignments for a Cloud Run service",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--clear-tags",
              description: "Remove all tags",
            },
            optCluster,
            optClusterLocation,
            optConfiguration,
            optContext,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKubeconfig,
            optLogHttp,
            optNamespace3,
            optNoAsync,
            {
              name: "--no-clear-tags",
              description: "Remove all tags",
              hidden: true,
            },
            {
              name: "--no-to-latest",
              description:
                "True to assign 100 percent of traffic to the 'latest' revision of this service. Note that when a new revision is created, it will become the 'latest' and traffic will be directed to it. Defaults to False. Synonymous with '--to-revisions=LATEST=100'",
              hidden: true,
            },
            optPlatform,
            optProject,
            optQuiet,
            optRegion,
            {
              name: "--remove-tags",
              description: "List of tags to be removed",
              args: {
                name: "TAG",
                description: "List",
              },
            },
            {
              name: "--set-tags",
              description:
                "List of key-value pairs to set as tags. All existing tags will be removed first",
              args: {
                name: "TAG=REVISION",
                description: "Dict",
              },
            },
            {
              name: "--to-latest",
              description:
                "True to assign 100 percent of traffic to the 'latest' revision of this service. Note that when a new revision is created, it will become the 'latest' and traffic will be directed to it. Defaults to False. Synonymous with '--to-revisions=LATEST=100'",
            },
            {
              name: "--to-revisions",
              description:
                "Comma separated list of traffic assignments in the form REVISION-NAME=PERCENTAGE. REVISION-NAME must be the name for a revision for the service as returned by 'gcloud beta run list revisions'. PERCENTAGE must be an integer percentage between 0 and 100 inclusive. Ex service-nw9hs=10,service-nw9hs=20 Up to 100 percent of traffic may be assigned. If 100 percent of traffic is assigned, the Service traffic is updated as specified. If under 100 percent of traffic is assigned, the Service traffic is updated as specified for revisions with assignments and traffic is scaled up or down down proportionally as needed for revision that are currently serving traffic but that do not have new assignments. For example assume revision-1 is serving 40 percent of traffic and revision-2 is serving 60 percent. If revision-1 is assigned 45 percent of traffic and no assignment is made for revision-2, the service is updated with revsion-1 assigned 45 percent of traffic and revision-2 scaled down to 55 percent. You can use \"LATEST\" as a special revision name to always put the given percentage of traffic on the latest ready revision",
              args: {
                name: "REVISION-NAME=PERCENTAGE",
                description: "Dict",
              },
            },
            {
              name: "--to-tags",
              description:
                "Comma separated list of traffic assignments in the form TAG=PERCENTAGE. TAG must match a traffic tag on a revision of the service. It may match a previously-set tag, or one assigned using the `--set-tags` or `--update-tags` flags on this command. PERCENTAGE must be an integer percentage between 0 and 100 inclusive. Up to 100 percent of traffic may be assigned. If 100 percent of traffic is assigned, the service traffic is updated as specified. If under 100 percent of traffic is assigned, the service traffic is updated as specified to the given tags, and other traffic is scaled up or down proportionally. For example, assume the revision tagged `next` is serving 40 percent of traffic and the revision tagged `current` is serving 60 percent. If `next` is assigned 45 percent of traffic and no assignment is made for `current`, the service is updated with `next` assigned 45 percent of traffic and `current` scaled down to 55 percent",
              args: {
                name: "TAG=PERCENTAGE",
                description: "Dict",
              },
            },
            optTraceToken,
            {
              name: "--update-tags",
              description: "List of key-value pairs to set as tags",
              args: {
                name: "TAG=REVISION",
                description: "Dict",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service",
            isOptional: true,
          },
        },
      ],
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optCluster,
        optClusterLocation,
        optConfiguration,
        optContext,
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optKubeconfig,
        optLogHttp,
        optPlatform,
        optProject,
        optQuiet,
        optRegion,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "worker-pools",
      description: "View and manage your Cloud Run worker pools",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Cloud Run worker pool",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--condition",
              description:
                "A condition to include in the binding. When the condition is explicitly specified as `None` (`--condition=None`), a binding without a condition is added. When the condition is specified and is not `None`, `--role` cannot be a basic role. Basic roles are `roles/editor`, `roles/owner`, and `roles/viewer`. For more on conditions, refer to the conditions overview guide: https://cloud.google.com/iam/docs/conditions-overview",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optConditionFromFile,
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
            optMember,
            optProject,
            optQuiet,
            optRegion2,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "WORKERPOOL",
            description:
              "ID of the workerpool or fully qualified identifier for the workerpool",
          },
        },
        {
          name: "delete",
          description: "Delete a worker-pool",
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
            optRegion3,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "WORKER_POOL",
            description:
              "ID of the WorkerPool or fully qualified identifier for the WorkerPool",
          },
        },
        {
          name: "deploy",
          description: "Create or update a Cloud Run worker-pool",
          options: [
            optAccessTokenFile,
            optAccount,
            optAddCloudsqlInstances,
            optAddVolume,
            optAddVolumeMount,
            optArgs,
            optAsync,
            optBillingProject,
            optBinaryAuthorization,
            optBreakglass,
            optClearBinaryAuthorization,
            optClearCloudsqlInstances,
            optClearEncryptionKeyShutdownHours,
            {
              name: "--clear-env-vars",
              description: "Remove all environment variables",
            },
            optClearKey,
            optClearLabels,
            {
              name: "--clear-network",
              description:
                "Disconnect this Cloud Run worker from the VPC network it is connected to",
            },
            {
              name: "--clear-network-tags",
              description:
                "Clears all existing network tags from the Cloud Run worker",
            },
            optClearPostKeyRevocationActionType,
            {
              name: "--clear-secrets",
              description: "Remove all secrets",
            },
            optClearVolumeMounts,
            optClearVolumes,
            optClientName,
            optClientVersion,
            optCommand,
            optConfiguration,
            optContainer,
            optCpu,
            optDependsOn,
            optDescription,
            optEncryptionKeyShutdownHours,
            optEnvVarsFile,
            optFlagsFile,
            optFlatten,
            optFormat,
            optGpu,
            optGpuType,
            optGpuZonalRedundancy,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImage,
            optImpersonateServiceAccount,
            {
              name: "--instances",
              description:
                "The number of instances to run for this WorkerPool. Flag value should be a positive integer to configure manual scaling with the given integer as a fixed instance count",
              args: {
                name: "INSTANCES",
              },
            },
            optKey,
            optLabels,
            optLogHttp,
            optMemory,
            {
              name: "--network",
              description:
                "The VPC network that the Cloud Run worker will be able to send traffic to. If --subnet is also specified, subnet must be a subnetwork of the network specified by this --network flag. To clear existing VPC network settings, use --clear-network",
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            {
              name: "--network-tags",
              description:
                "Applies the given network tags (comma separated) to the Cloud Run worker. To clear existing tags, use --clear-network-tags",
              args: {
                name: "TAG",
                description: "List",
              },
            },
            optNoAsync,
            optNoClearBinaryAuthorization,
            optNoClearCloudsqlInstances,
            optNoClearEncryptionKeyShutdownHours,
            optNoClearEnvVars,
            optNoClearKey,
            optNoClearLabels,
            {
              name: "--no-clear-network",
              description:
                "Disconnect this Cloud Run worker from the VPC network it is connected to",
              hidden: true,
            },
            {
              name: "--no-clear-network-tags",
              description:
                "Clears all existing network tags from the Cloud Run worker",
              hidden: true,
            },
            optNoClearPostKeyRevocationActionType,
            optNoClearSecrets,
            optNoClearVolumeMounts,
            optNoClearVolumes,
            {
              name: "--no-gpu-zonal-redundancy",
              description: "Set GPU zonal redundancy",
            },
            {
              name: "--no-promote",
              description:
                "True to avoid assign instances to the worker revision being deployed. Setting this flag assigns any instances assigned to the LATEST revision to the specific revision bound to LATEST before the deployment. The effect is that the revision being deployed will not receive instance split",
            },
            optPostKeyRevocationActionType,
            optProject,
            optQuiet,
            optRegion3,
            optRemoveCloudsqlInstances,
            optRemoveContainers,
            optRemoveEnvVars,
            optRemoveLabels,
            optRemoveSecrets,
            optRemoveVolume,
            optRemoveVolumeMount,
            optRevisionSuffix,
            {
              name: "--runtime",
              description:
                'The runtime to use. "wasm" for WebAssembly runtime, "default" for the default Linux runtime',
              hidden: true,
              args: {
                name: "RUNTIME",
                description: "String",
              },
            },
            {
              name: "--scaling",
              description:
                'The scaling mode to use for this service. Flag value could be either "auto" for automatic scaling, or a positive integer to configure manual scaling with the given integer as a fixed instance count',
              hidden: true,
              args: {
                name: "SCALING",
              },
            },
            optServiceAccount,
            optSetCloudsqlInstances,
            optSetEnvVars,
            optSetSecrets,
            optSource,
            {
              name: "--subnet",
              description:
                "The VPC subnetwork that the Cloud Run worker will get IPs from. The subnetwork must be `/26` or larger. If --network is also specified, subnet must be a subnetwork of the network specified by the --network flag. If --network is not specified, network will be looked up from this subnetwork. To clear existing VPC network settings, use --clear-network",
              args: {
                name: "SUBNET",
                description: "String",
              },
            },
            optTraceToken,
            optUpdateAnnotations,
            optUpdateEnvVars,
            optUpdateLabels,
            optUpdateSecrets,
            optUserOutputEnabled,
            optVerbosity,
            optVpcEgress,
          ],
          args: {
            name: "WORKER_POOL",
            description:
              "ID of the WorkerPool or fully qualified identifier for the WorkerPool",
            isOptional: true,
          },
        },
        {
          name: "describe",
          description: "Obtain details about a given worker-pool",
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
            name: "WORKER_POOL",
            description:
              "ID of the WorkerPool or fully qualified identifier for the WorkerPool",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Run worker pool",
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
            optRegion2,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "WORKERPOOL",
            description:
              "ID of the workerpool or fully qualified identifier for the workerpool",
          },
        },
        {
          name: "list",
          description: "List available worker-pools",
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
            optQuiet,
            optRegion,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "logs",
          description: "Read logs for Cloud Run worker pools",
          subcommands: [
            {
              name: "read",
              description: "Read logs for a Cloud Run worker pool",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                optFreshness,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLimit,
                optLogFilter,
                optLogHttp,
                optOrder,
                optProject,
                optQuiet,
                optRegion,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "WORKER_POOL",
                description: "Name for a Cloud Run worker pool",
              },
            },
            {
              name: "tail",
              description: "Tail logs for a Cloud Run worker pool",
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
                optLogFilter,
                optLogHttp,
                optNoShowExecError,
                optProject,
                optQuiet,
                optRegion,
                optShowExecError,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "WORKER_POOL",
                description: "Name for a Cloud Run worker pool",
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
            optRegion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding of a Cloud Run worker pool",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--all",
              description:
                "Remove all bindings with this role and principal, irrespective of any conditions",
            },
            optBillingProject,
            {
              name: "--condition",
              description:
                "The condition of the binding that you want to remove. When the condition is explicitly specified as `None` (`--condition=None`), a binding without a condition is removed. Otherwise, only a binding with a condition that exactly matches the specified condition (including the optional description) is removed. For more on conditions, refer to the conditions overview guide: https://cloud.google.com/iam/docs/conditions-overview",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optConditionFromFile,
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
            optMember2,
            {
              name: "--no-all",
              description:
                "Remove all bindings with this role and principal, irrespective of any conditions",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion2,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "WORKERPOOL",
            description:
              "ID of the workerpool or fully qualified identifier for the workerpool",
          },
        },
        {
          name: "replace",
          description:
            "Create or replace a worker-pool from a YAML worker-pool specification",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optClientName,
            optClientVersion,
            optConfiguration,
            optDryRun,
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
            optNoDryRun,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FILE",
            description:
              "The absolute path to the YAML file with a Cloud Run worker-pool definition for the worker-pool to update or create",
            template: "filepaths",
          },
        },
        {
          name: "revisions",
          description: "View and manage your Cloud Run WorkerPools revisions",
          subcommands: [
            {
              name: "delete",
              description: "Delete a worker pool revision",
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
                  description:
                    "The Cloud region for the WorkerPoolRevision. Overrides the default `run/region` property value for this command invocation",
                  args: {
                    name: "REGION",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--worker-pool",
                  description: "WorkerPool for the WorkerPoolRevision",
                  args: {
                    name: "WORKER_POOL",
                    description: "String",
                  },
                },
              ],
              args: {
                name: "WORKER_POOL_REVISION",
                description:
                  "ID of the WorkerPoolRevision or fully qualified identifier for the WorkerPoolRevision",
              },
            },
            {
              name: "describe",
              description: "Obtain details about a given worker pool revision",
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
                name: "WORKER_POOL_REVISION",
                description:
                  "ID of the revision or fully qualified identifier for the revision",
              },
            },
            {
              name: "list",
              description: "List available worker pool revisions",
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
                optNamespace,
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
                  name: "--worker-pool",
                  description: "Limit matched revisions to the given worker",
                  args: {
                    name: "WORKER_POOL",
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
          name: "set-iam-policy",
          description: "Set the IAM policy for a worker pool",
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
            optRegion2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "WORKERPOOL",
              description:
                "ID of the workerpool or fully qualified identifier for the workerpool",
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
          description:
            "Update Cloud Run environment variables and other configuration settings",
          options: [
            optAccessTokenFile,
            optAccount,
            optAddCloudsqlInstances,
            optAddVolume,
            optAddVolumeMount,
            optArgs,
            optAsync,
            optBillingProject,
            optBinaryAuthorization,
            optBreakglass,
            optClearBinaryAuthorization,
            optClearCloudsqlInstances,
            optClearEncryptionKeyShutdownHours,
            {
              name: "--clear-env-vars",
              description: "Remove all environment variables",
            },
            optClearKey,
            optClearLabels,
            {
              name: "--clear-network",
              description:
                "Disconnect this Cloud Run worker from the VPC network it is connected to",
            },
            {
              name: "--clear-network-tags",
              description:
                "Clears all existing network tags from the Cloud Run worker",
            },
            optClearPostKeyRevocationActionType,
            {
              name: "--clear-secrets",
              description: "Remove all secrets",
            },
            optClearVolumeMounts,
            optClearVolumes,
            optClientName,
            optClientVersion,
            optCommand,
            optConfiguration,
            optContainer,
            optCpu,
            optDependsOn,
            optDescription,
            optEncryptionKeyShutdownHours,
            optEnvVarsFile,
            optFlagsFile,
            optFlatten,
            optFormat,
            optGpu,
            optGpuType,
            optGpuZonalRedundancy,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImage,
            optImpersonateServiceAccount,
            {
              name: "--instances",
              description:
                "The number of instances to run for this WorkerPool. Flag value should be a positive integer to configure manual scaling with the given integer as a fixed instance count",
              args: {
                name: "INSTANCES",
              },
            },
            optKey,
            optLabels,
            optLogHttp,
            optMemory,
            {
              name: "--network",
              description:
                "The VPC network that the Cloud Run worker will be able to send traffic to. If --subnet is also specified, subnet must be a subnetwork of the network specified by this --network flag. To clear existing VPC network settings, use --clear-network",
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            {
              name: "--network-tags",
              description:
                "Applies the given network tags (comma separated) to the Cloud Run worker. To clear existing tags, use --clear-network-tags",
              args: {
                name: "TAG",
                description: "List",
              },
            },
            optNoAsync,
            optNoClearBinaryAuthorization,
            optNoClearCloudsqlInstances,
            optNoClearEncryptionKeyShutdownHours,
            optNoClearEnvVars,
            optNoClearKey,
            optNoClearLabels,
            {
              name: "--no-clear-network",
              description:
                "Disconnect this Cloud Run worker from the VPC network it is connected to",
              hidden: true,
            },
            {
              name: "--no-clear-network-tags",
              description:
                "Clears all existing network tags from the Cloud Run worker",
              hidden: true,
            },
            optNoClearPostKeyRevocationActionType,
            optNoClearSecrets,
            optNoClearVolumeMounts,
            optNoClearVolumes,
            {
              name: "--no-gpu-zonal-redundancy",
              description: "Set GPU zonal redundancy",
            },
            {
              name: "--no-promote",
              description:
                "True to avoid assign instances to the worker revision being deployed. Setting this flag assigns any instances assigned to the LATEST revision to the specific revision bound to LATEST before the deployment. The effect is that the revision being deployed will not receive instance split",
            },
            optPostKeyRevocationActionType,
            optProject,
            optQuiet,
            optRegion3,
            optRemoveCloudsqlInstances,
            optRemoveContainers,
            optRemoveEnvVars,
            optRemoveLabels,
            optRemoveSecrets,
            optRemoveVolume,
            optRemoveVolumeMount,
            optRevisionSuffix,
            {
              name: "--runtime",
              description:
                'The runtime to use. "wasm" for WebAssembly runtime, "default" for the default Linux runtime',
              hidden: true,
              args: {
                name: "RUNTIME",
                description: "String",
              },
            },
            {
              name: "--scaling",
              description:
                'The scaling mode to use for this service. Flag value could be either "auto" for automatic scaling, or a positive integer to configure manual scaling with the given integer as a fixed instance count',
              hidden: true,
              args: {
                name: "SCALING",
              },
            },
            optServiceAccount,
            optSetCloudsqlInstances,
            optSetEnvVars,
            optSetSecrets,
            {
              name: "--subnet",
              description:
                "The VPC subnetwork that the Cloud Run worker will get IPs from. The subnetwork must be `/26` or larger. If --network is also specified, subnet must be a subnetwork of the network specified by the --network flag. If --network is not specified, network will be looked up from this subnetwork. To clear existing VPC network settings, use --clear-network",
              args: {
                name: "SUBNET",
                description: "String",
              },
            },
            optTraceToken,
            optUpdateAnnotations,
            optUpdateEnvVars,
            optUpdateLabels,
            optUpdateSecrets,
            optUserOutputEnabled,
            optVerbosity,
            optVpcEgress,
          ],
          args: {
            name: "WORKER_POOL",
            description:
              "ID of the WorkerPool or fully qualified identifier for the WorkerPool",
            isOptional: true,
          },
        },
        {
          name: "update-instance-split",
          description:
            "Adjust the instance assignments for a Cloud Run worker-pool",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optBreakglass,
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
            {
              name: "--no-to-latest",
              description:
                "True to assign 100 percent of instances to the 'latest' revision of this service. Note that when a new revision is created, it will become the 'latest' and instances will be fully assigned to it unless configured otherwise using `--[no-]promote` flag. Defaults to False. Synonymous with '--to-revisions=LATEST=100'",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion3,
            {
              name: "--to-latest",
              description:
                "True to assign 100 percent of instances to the 'latest' revision of this service. Note that when a new revision is created, it will become the 'latest' and instances will be fully assigned to it unless configured otherwise using `--[no-]promote` flag. Defaults to False. Synonymous with '--to-revisions=LATEST=100'",
            },
            {
              name: "--to-revisions",
              description:
                "Comma separated list of instance assignments in the form REVISION-NAME=PERCENTAGE. REVISION-NAME must be the name for a revision for the worker as returned by 'gcloud run workers revisions list --worker=WORKER' . PERCENTAGE must be an integer percentage between 0 and 100 inclusive. Ex worker-nw9hs=10,worker-nw9hs=20 Up to 100 percent of instances may be assigned. If the total of 100 percent of instances is assigned, the Worker instance split is updated as specified. If under 100 percent of instance split is assigned, the Worker instance split is updated as specified for revisions with assignments and instance split is scaled up or down proportionally as needed for revision that are currently serving workload but that do not have new assignments. For example assume revision-1 is serving 40 percent of workload and revision-2 is serving 60 percent. If revision-1 is assigned 45 percent of instances and no assignment is made for revision-2, the worker is updated with revsion-1 assigned 45 percent of instances and revision-2 scaled down to 55 percent. You can use \"LATEST\" as a special revision name to always put the given percentage of instance split on the latest ready revision",
              args: {
                name: "REVISION-NAME=PERCENTAGE",
                description: "Dict",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "WORKER_POOL",
            description:
              "ID of the WorkerPool or fully qualified identifier for the WorkerPool",
            isOptional: true,
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
