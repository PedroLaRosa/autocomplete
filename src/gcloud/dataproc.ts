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

const optArchives: Fig.Option = {
  name: "--archives",
  description:
    "Archives to be extracted into the working directory. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip",
  args: {
    name: "ARCHIVE",
    description: "List",
  },
};

const optArchives2: Fig.Option = {
  name: "--archives",
  description:
    "Comma separated list of archives to be extracted into the working directory of each executor. Must be one of the following file formats: .zip, .tar, .tar.gz, or .tgz",
  args: {
    name: "ARCHIVE",
    description: "List",
  },
};

const optAsync: Fig.Option = {
  name: "--async",
  description:
    "Return immediately without waiting for the operation in progress to complete",
};

const optAsync2: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to complete",
};

const optAutoscalingPolicy: Fig.Option = {
  name: "--autoscaling-policy",
  description:
    "ID of the autoscaling policy or fully qualified identifier for the autoscaling policy",
  priority: 100,
  args: {
    name: "AUTOSCALING_POLICY",
    description: "String",
  },
};

const optAutotuningCohort: Fig.Option = {
  name: "--autotuning-cohort",
  description:
    "Autotuning cohort identifier. Identifies families of the workloads having the similar structure and inputs, e.g. daily ETL jobs",
  hidden: true,
  args: {
    name: "AUTOTUNING_COHORT",
    description: "String",
  },
};

const optAutotuningScenarios: Fig.Option = {
  name: "--autotuning-scenarios",
  description: "Scenarios for which tunings are applied",
  hidden: true,
  args: {
    name: "SCENARIO",
    description: "List",
  },
};

const optBatch: Fig.Option = {
  name: "--batch",
  description:
    "The ID of the batch job to submit. The ID must contain only lowercase letters (a-z), numbers (0-9) and hyphens (-). The length of the name must be between 4 and 63 characters. If this argument is not provided, a random generated UUID will be used",
  args: {
    name: "BATCH",
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

const optBucket: Fig.Option = {
  name: "--bucket",
  description:
    "The Cloud Storage bucket to stage files in. Defaults to the cluster's configured bucket",
  args: {
    name: "BUCKET",
    description: "String",
  },
};

const optClass: Fig.Option = {
  name: "--class",
  description:
    "The class containing the main method of the driver. Must be in a provided jar or jar that is already on the classpath",
  args: {
    name: "CLASS",
    description: "String",
  },
};

const optCluster: Fig.Option = {
  name: "--cluster",
  description: "The Dataproc cluster to submit the job to",
  args: {
    name: "CLUSTER",
    description: "String",
  },
};

const optClusterLabels: Fig.Option = {
  name: "--cluster-labels",
  description: "List of label KEY=VALUE pairs to add",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
  },
};

const optCohort: Fig.Option = {
  name: "--cohort",
  description:
    "Cohort identifier. Identifies families of the workloads having the similar structure and inputs, e.g. daily ETL jobs",
  hidden: true,
  args: {
    name: "COHORT",
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

const optContainerImage: Fig.Option = {
  name: "--container-image",
  description:
    "Optional custom container image to use for the batch/session runtime environment. If not specified, a default container image will be used. The value should follow the container image naming format: {registry}/{repository}/{name}:{tag}, for example, gcr.io/my-project/my-image:1.2.3",
  args: {
    name: "CONTAINER_IMAGE",
    description: "String",
  },
};

const optContinueOnFailure: Fig.Option = {
  name: "--continue-on-failure",
  description: "Whether to continue if a query fails",
};

const optContinueOnFailure2: Fig.Option = {
  name: "--continue-on-failure",
  description: "Whether to continue if a single query fails",
};

const optDepsBucket: Fig.Option = {
  name: "--deps-bucket",
  description: "A Cloud Storage bucket to upload workload dependencies",
  args: {
    name: "DEPS_BUCKET",
    description: "String",
  },
};

const optDestination: Fig.Option = {
  name: "--destination",
  description:
    "Path to a YAML file where the configuration will be exported. Alternatively, you may omit this flag to write to standard output",
  args: {
    name: "DESTINATION",
    description: "String",
  },
};

const optDriverLogLevels: Fig.Option = {
  name: "--driver-log-levels",
  description:
    "A list of package to log4j log level pairs to configure driver logging. For example: root=FATAL,com.example=INFO",
  args: {
    name: "PACKAGE=LEVEL",
    description: "Dict",
  },
};

const optDriverLogLevels2: Fig.Option = {
  name: "--driver-log-levels",
  description:
    "A list of package-to-log4j log level pairs to configure driver logging. For example: root=FATAL,com.example=INFO",
  args: {
    name: "PACKAGE=LEVEL",
    description: "Dict",
  },
};

const optDriverLogLevels3: Fig.Option = {
  name: "--driver-log-levels",
  description:
    "List of key value pairs to configure driver logging, where key is a package and value is the log4j log level. For example: root=FATAL,com.example=INFO",
  args: {
    name: "PACKAGE=LEVEL",
    description: "Dict",
  },
};

const optDriverLogLevels4: Fig.Option = {
  name: "--driver-log-levels",
  description:
    "List of package to log4j log level pairs to configure driver logging. For example: root=FATAL,com.example=INFO",
  args: {
    name: "PACKAGE=LEVEL",
    description: "Dict",
  },
};

const optDriverRequiredMemoryMb: Fig.Option = {
  name: "--driver-required-memory-mb",
  description:
    "The memory allocation requested by the job driver in megabytes (MB) for execution on the driver node group (it is used only by clusters with a driver node group)",
  args: {
    name: "DRIVER_REQUIRED_MEMORY_MB",
    description: "Int",
  },
};

const optDriverRequiredVcores: Fig.Option = {
  name: "--driver-required-vcores",
  description:
    "The vCPU allocation requested by the job driver for execution on the driver node group (it is used only by clusters with a driver node group)",
  args: {
    name: "DRIVER_REQUIRED_VCORES",
    description: "Int",
  },
};

const optEnableAutotuning: Fig.Option = {
  name: "--enable-autotuning",
  description: "Enable autotuning got the workload",
  hidden: true,
};

const optFiles: Fig.Option = {
  name: "--files",
  description:
    "Comma separated list of files to be placed in the working directory of both the app driver and executors",
  args: {
    name: "FILE",
    description: "List",
    template: "filepaths",
  },
};

const optFiles2: Fig.Option = {
  name: "--files",
  description: "Files to be placed in the working directory",
  args: {
    name: "FILE",
    description: "List",
    template: "filepaths",
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

const optHistoryServerCluster: Fig.Option = {
  name: "--history-server-cluster",
  description:
    'Spark History Server configuration for the batch/session job. Resource name of an existing Dataproc cluster to act as a Spark History Server for the workload in the format: "projects/{project_id}/regions/{region}/clusters/{cluster_name}"',
  args: {
    name: "HISTORY_SERVER_CLUSTER",
    description: "String",
  },
};

const optId: Fig.Option = {
  name: "--id",
  description: "Set the ID of the job, which is usually autogenerated",
  hidden: true,
  args: {
    name: "ID",
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

const optJar: Fig.Option = {
  name: "--jar",
  description: "The HCFS URI of jar file containing the driver jar",
  args: {
    name: "JAR",
    description: "String",
  },
};

const optJars: Fig.Option = {
  name: "--jars",
  description:
    "Comma separated list of jar files to be provided to the executor and driver classpaths",
  args: {
    name: "JAR",
    description: "List",
  },
};

const optJars2: Fig.Option = {
  name: "--jars",
  description:
    "Comma-separated list of jar files to be provided to the classpaths",
  args: {
    name: "JAR",
    description: "List",
  },
};

const optKmsKey: Fig.Option = {
  name: "--kms-key",
  description: "Cloud KMS key to use for encryption",
  args: {
    name: "KMS_KEY",
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

const optLogHttp: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};

const optMaxFailuresPerHour: Fig.Option = {
  name: "--max-failures-per-hour",
  description:
    "Specifies the maximum number of times a job can be restarted per hour in event of failure. Default is 0 (no retries after job failure)",
  args: {
    name: "MAX_FAILURES_PER_HOUR",
    description: "Int",
  },
};

const optMaxFailuresTotal: Fig.Option = {
  name: "--max-failures-total",
  description:
    "Specifies the maximum total number of times a job can be restarted after the job fails. Default is 0 (no retries after job failure)",
  args: {
    name: "MAX_FAILURES_TOTAL",
    description: "Int",
  },
};

const optMetastoreService: Fig.Option = {
  name: "--metastore-service",
  description:
    'Name of a Dataproc Metastore service to be used as an external metastore in the format: "projects/{project-id}/locations/{region}/services/{service-name}"',
  args: {
    name: "METASTORE_SERVICE",
    description: "String",
  },
};

const optNetwork: Fig.Option = {
  name: "--network",
  description: "Network URI to connect network to",
  args: {
    name: "NETWORK",
    description: "String",
  },
};

const optNoAsync: Fig.Option = {
  name: "--no-async",
  description:
    "Return immediately without waiting for the operation in progress to complete",
  hidden: true,
};

const optNoAsync2: Fig.Option = {
  name: "--no-async",
  description:
    "Return immediately, without waiting for the operation in progress to complete",
  hidden: true,
};

const optNoContinueOnFailure: Fig.Option = {
  name: "--no-continue-on-failure",
  description: "Whether to continue if a query fails",
  hidden: true,
};

const optNoContinueOnFailure2: Fig.Option = {
  name: "--no-continue-on-failure",
  description: "Whether to continue if a single query fails",
  hidden: true,
};

const optNoEnableAutotuning: Fig.Option = {
  name: "--no-enable-autotuning",
  description: "Enable autotuning got the workload",
  hidden: true,
};

const optPageSize: Fig.Option = {
  name: "--page-size",
  description:
    "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is *100*. Paging may be applied before or after *--filter* and *--limit* depending on the service",
  args: {
    name: "PAGE_SIZE",
    description: "Int",
  },
};

const optPageSize2: Fig.Option = {
  name: "--page-size",
  description:
    "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is determined by the service if it supports paging, otherwise it is *unlimited* (no paging). Paging may be applied before or after *--filter* and *--limit* depending on the service",
  args: {
    name: "PAGE_SIZE",
  },
};

const optParams: Fig.Option = {
  name: "--params",
  description: "A list of key value pairs to set variables in the Hive queries",
  args: {
    name: "PARAM=VALUE",
    description: "Dict",
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

const optProperties: Fig.Option = {
  name: "--properties",
  description: "A list of key value pairs to configure Hive",
  args: {
    name: "PROPERTY=VALUE",
    description: "Dict",
  },
};

const optProperties2: Fig.Option = {
  name: "--properties",
  description:
    "Specifies configuration properties for the workload. See [Dataproc Serverless for Spark documentation](https://cloud.google.com/dataproc-serverless/docs/concepts/properties) for the list of supported properties",
  args: {
    name: "PROPERTY=VALUE",
    description: "Dict",
  },
};

const optPropertiesFile: Fig.Option = {
  name: "--properties-file",
  description:
    "Path to a local file or a file in a Cloud Storage bucket containing configuration properties for the job. The client machine running this command must have read permission to the file",
  args: {
    name: "PROPERTIES_FILE",
    description: "String",
    template: "filepaths",
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
    "Dataproc region for the autoscaling policy. Each Dataproc region constitutes an independent resource namespace constrained to deploying instances into Compute Engine zones inside the region. Overrides the default `dataproc/region` property value for this command invocation",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion2: Fig.Option = {
  name: "--region",
  description:
    "Dataproc region for the batch. Each Dataproc region constitutes an independent resource namespace constrained to deploying instances into Compute Engine zones inside the region. Overrides the default `dataproc/region` property value for this command invocation",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion3: Fig.Option = {
  name: "--region",
  description:
    "Dataproc region for the cluster. Each Dataproc region constitutes an independent resource namespace constrained to deploying instances into Compute Engine zones inside the region. Overrides the default `dataproc/region` property value for this command invocation",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion4: Fig.Option = {
  name: "--region",
  description:
    "Dataproc region for the job. Each Dataproc region constitutes an independent resource namespace constrained to deploying instances into Compute Engine zones inside the region. Overrides the default `dataproc/region` property value for this command invocation",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion5: Fig.Option = {
  name: "--region",
  description:
    "Dataproc region for the operation. Each Dataproc region constitutes an independent resource namespace constrained to deploying instances into Compute Engine zones inside the region. Overrides the default `dataproc/region` property value for this command invocation",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion6: Fig.Option = {
  name: "--region",
  description:
    "Dataproc region for the template. Each Dataproc region constitutes an independent resource namespace constrained to deploying instances into Compute Engine zones inside the region. Overrides the default `dataproc/region` property value for this command invocation",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion7: Fig.Option = {
  name: "--region",
  description:
    "Dataproc region to use. Each Dataproc region constitutes an independent resource namespace constrained to deploying instances into Compute Engine zones inside the region. Overrides the default *dataproc/region* property value for this command invocation",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion8: Fig.Option = {
  name: "--region",
  description: "ID of the region or fully qualified identifier for the region",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRequestId: Fig.Option = {
  name: "--request-id",
  description:
    "A unique ID that identifies the request. If the service receives two batch create requests with the same request_id, the second request is ignored and the operation that corresponds to the first batch created and stored in the backend is returned. Recommendation: Always set this value to a UUID. The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters",
  args: {
    name: "REQUEST_ID",
  },
};

const optResourceManagerTag: Fig.Option = {
  name: "--resource-manager-tag",
  description:
    "Resource Manager Tags to be associated with the compute resources created for the workload. Only one key-value pair can be specified per flag. Repeat the flag to specify multiple tags",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
  },
};

const optServiceAccount: Fig.Option = {
  name: "--service-account",
  description: "The IAM service account to be used for a batch/session job",
  args: {
    name: "SERVICE_ACCOUNT",
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

const optSource: Fig.Option = {
  name: "--source",
  description:
    "Path to a YAML file containing configuration export data. Alternatively, you may omit this flag to read from standard input",
  args: {
    name: "SOURCE",
    description: "String",
  },
};

const optStagingBucket: Fig.Option = {
  name: "--staging-bucket",
  description:
    "The Cloud Storage bucket to use to store job dependencies, config files, and job driver console output. If not specified, the default [staging bucket] (https://cloud.google.com/dataproc-serverless/docs/concepts/buckets) is used",
  args: {
    name: "STAGING_BUCKET",
    description: "String",
  },
};

const optStartAfter: Fig.Option = {
  name: "--start-after",
  description: "(Optional) List of step IDs to start this job after",
  args: {
    name: "STEP_ID",
    description: "List",
  },
};

const optStepId: Fig.Option = {
  name: "--step-id",
  description: "The step ID of the job in the workflow template",
  priority: 100,
  args: {
    name: "STEP_ID",
    description: "String",
  },
};

const optSubnet: Fig.Option = {
  name: "--subnet",
  description:
    "Subnetwork URI to connect network to. Subnet must have Private Google Access enabled",
  args: {
    name: "SUBNET",
    description: "String",
  },
};

const optTags: Fig.Option = {
  name: "--tags",
  description: "Network tags for traffic control",
  args: {
    name: "TAGS",
    description: "List",
  },
};

const optTimeout: Fig.Option = {
  name: "--timeout",
  description:
    "Client side timeout on how long to wait for Dataproc operations. See $ gcloud topic datetimes for information on duration formats",
  hidden: true,
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

const optTtl: Fig.Option = {
  name: "--ttl",
  description:
    "The duration after the workload will be unconditionally terminated, for example, '20m' or '1h'. Run [gcloud topic datetimes](https://cloud.google.com/sdk/gcloud/reference/topic/datetimes) for information on duration formats",
  args: {
    name: "TTL",
  },
};

const optTtl2: Fig.Option = {
  name: "--ttl",
  description:
    "The maximum duration this job is allowed to run before being killed automatically. Specified using a s, m, h, or d (seconds, minutes, hours, or days) suffix. The minimum value is 10 minutes (10m), and the maximum value is 14 days (14d) Run [gcloud topic datetimes] (https://cloud.google.com/sdk/gcloud/reference/topic/datetimes) for information on duration formats",
  hidden: true,
  args: {
    name: "TTL",
  },
};

const optUserOutputEnabled: Fig.Option = {
  name: "--user-output-enabled",
  description:
    "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
};

const optUserWorkloadAuthenticationType: Fig.Option = {
  name: "--user-workload-authentication-type",
  description:
    "Whether to use END_USER_CREDENTIALS or SERVICE_ACCOUNT to run the workload",
  args: {
    name: "USER_WORKLOAD_AUTHENTICATION_TYPE",
    description: "String",
  },
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

const optVersion: Fig.Option = {
  name: "--version",
  description:
    "Optional runtime version. If not specified, a default version will be used",
  args: {
    name: "VERSION",
    description: "String",
  },
};

const optWorkflowTemplate: Fig.Option = {
  name: "--workflow-template",
  description:
    "ID of the template or fully qualified identifier for the template",
  priority: 100,
  args: {
    name: "WORKFLOW_TEMPLATE",
    description: "String",
  },
};

const completionSpec: Fig.Spec = {
  name: "dataproc",
  description: "Create and manage Google Cloud Dataproc clusters and jobs",
  subcommands: [
    {
      name: "autoscaling-policies",
      description: "Create and manage Dataproc autoscaling policies",
      subcommands: [
        {
          name: "delete",
          description: "Delete an autoscaling policy",
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
            name: "AUTOSCALING_POLICY",
            description:
              "ID of the autoscaling policy or fully qualified identifier for the autoscaling policy",
          },
        },
        {
          name: "describe",
          description: "Describe an autoscaling policy",
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
            name: "AUTOSCALING_POLICY",
            description:
              "ID of the autoscaling policy or fully qualified identifier for the autoscaling policy",
          },
        },
        {
          name: "export",
          description: "Export an autoscaling policy",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDestination,
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
            name: "AUTOSCALING_POLICY",
            description:
              "ID of the autoscaling policy or fully qualified identifier for the autoscaling policy",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get IAM policy for an autoscaling policy",
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
            name: "AUTOSCALING_POLICY",
            description:
              "ID of the autoscaling policy or fully qualified identifier for the autoscaling policy",
          },
        },
        {
          name: "import",
          description: "Import an autoscaling policy",
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
            optSource,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTOSCALING_POLICY",
            description:
              "ID of the autoscaling policy or fully qualified identifier for the autoscaling policy",
          },
        },
        {
          name: "list",
          description: "List autoscaling policies",
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
            {
              name: "--no-uri",
              description:
                "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
              hidden: true,
            },
            optPageSize,
            optProject,
            optQuiet,
            optRegion7,
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
          name: "set-iam-policy",
          description: "Set IAM policy for an autoscaling policy",
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
              name: "AUTOSCALING_POLICY",
              description:
                "ID of the autoscaling policy or fully qualified identifier for the autoscaling policy",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy",
              template: "filepaths",
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
      name: "batches",
      description: "Submit Dataproc batch jobs",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a batch job without removing batch resources",
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
          args: {
            name: "BATCH",
            description:
              "ID of the batch or fully qualified identifier for the batch",
          },
        },
        {
          name: "delete",
          description: "Delete a batch job",
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
            optRegion2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BATCH",
            description:
              "ID of the batch or fully qualified identifier for the batch",
          },
        },
        {
          name: "describe",
          description: "Describe a batch job",
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
          args: {
            name: "BATCH",
            description:
              "ID of the batch or fully qualified identifier for the batch",
          },
        },
        {
          name: "list",
          description: "List batch jobs in a project",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--filter",
              description:
                "Apply a Boolean filter EXPRESSION to each resource item to be listed (the '=' equality operator is the only supported operator). If the expression evaluates true for an item, the item is listed. This flag interacts with other flags, which are applied in the following order: *--flatten*, *--sort-by*, *--filter*, *--limit*. For more information, run 'gcloud topic filters'",
              hidden: true,
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
            optLimit,
            optLogHttp,
            optPageSize,
            optProject,
            optQuiet,
            optRegion7,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "submit",
          description: "Submit a Dataproc batch job",
          subcommands: [
            {
              name: "pyspark",
              description: "Submit a PySpark batch job",
              options: [
                optAccessTokenFile,
                optAccount,
                optArchives,
                optAsync,
                optAutotuningCohort,
                optAutotuningScenarios,
                optBatch,
                optBillingProject,
                optCohort,
                optConfiguration,
                optContainerImage,
                optDepsBucket,
                optEnableAutotuning,
                optFiles2,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optHistoryServerCluster,
                optImpersonateServiceAccount,
                optJars2,
                optKmsKey,
                optLabels,
                optLogHttp,
                optMetastoreService,
                optNetwork,
                optNoAsync,
                optNoEnableAutotuning,
                optProject,
                optProperties2,
                {
                  name: "--py-files",
                  description:
                    "Comma-separated list of Python scripts to be passed to the PySpark framework. Supported file types: ``.py'', ``.egg'' and ``.zip.''",
                  args: {
                    name: "PY",
                    description: "List",
                  },
                },
                optQuiet,
                optRegion8,
                optRequestId,
                optResourceManagerTag,
                optServiceAccount,
                optStagingBucket,
                optSubnet,
                optTags,
                optTraceToken,
                optTtl,
                optUserOutputEnabled,
                optUserWorkloadAuthenticationType,
                optVerbosity,
                optVersion,
              ],
              args: [
                {
                  name: "MAIN_PYTHON_FILE",
                  description:
                    "URI of the main Python file to use as the Spark driver. Must be a ``.py'' file",
                  template: "filepaths",
                },
                {
                  name: "JOB_ARG",
                  description: "Arguments to pass to the driver",
                  isVariadic: true,
                  isOptional: true,
                },
              ],
            },
            {
              name: "ray",
              description: "Submit a Ray batch job",
              hidden: true,
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optAutotuningCohort,
                optAutotuningScenarios,
                optBatch,
                optBillingProject,
                optCohort,
                optConfiguration,
                optContainerImage,
                optDepsBucket,
                optEnableAutotuning,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optHistoryServerCluster,
                optImpersonateServiceAccount,
                optKmsKey,
                optLabels,
                {
                  name: "--location",
                  description:
                    "Dataproc location to use. Each Dataproc location constitutes an independent resource namespace constrained to deploying instances into Compute Engine zones inside the location. Overrides the default *dataproc/location* property value for this command invocation",
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                optMetastoreService,
                optNetwork,
                optNoAsync,
                optNoEnableAutotuning,
                optProject,
                optProperties2,
                optQuiet,
                optRegion8,
                optRequestId,
                optResourceManagerTag,
                optServiceAccount,
                optStagingBucket,
                optSubnet,
                optTags,
                optTraceToken,
                optTtl,
                optUserOutputEnabled,
                optUserWorkloadAuthenticationType,
                optVerbosity,
                optVersion,
              ],
              args: [
                {
                  name: "MAIN_PYTHON_FILE",
                  description:
                    "URI of the main Python file to use as the Spark driver. Must be a ``.py'' file",
                  template: "filepaths",
                },
                {
                  name: "JOB_ARG",
                  description: "Arguments to pass to the driver",
                  isVariadic: true,
                  isOptional: true,
                },
              ],
            },
            {
              name: "spark",
              description: "Submit a Spark batch job",
              options: [
                optAccessTokenFile,
                optAccount,
                optArchives,
                optAsync,
                optAutotuningCohort,
                optAutotuningScenarios,
                optBatch,
                optBillingProject,
                {
                  name: "--class",
                  description:
                    "Class contains the main method of the job. The jar file that contains the class must be in the classpath or specified in `jar_files`",
                  args: {
                    name: "CLASS",
                    description: "String",
                  },
                },
                optCohort,
                optConfiguration,
                optContainerImage,
                optDepsBucket,
                optEnableAutotuning,
                optFiles2,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optHistoryServerCluster,
                optImpersonateServiceAccount,
                {
                  name: "--jar",
                  description: "URI of the main jar file",
                  args: {
                    name: "JAR",
                    description: "String",
                  },
                },
                optJars2,
                optKmsKey,
                optLabels,
                optLogHttp,
                optMetastoreService,
                optNetwork,
                optNoAsync,
                optNoEnableAutotuning,
                optProject,
                optProperties2,
                optQuiet,
                optRegion8,
                optRequestId,
                optResourceManagerTag,
                optServiceAccount,
                optStagingBucket,
                optSubnet,
                optTags,
                optTraceToken,
                optTtl,
                optUserOutputEnabled,
                optUserWorkloadAuthenticationType,
                optVerbosity,
                optVersion,
              ],
              args: {
                name: "JOB_ARG",
                description: "Arguments to pass to the driver",
                isVariadic: true,
                isOptional: true,
              },
            },
            {
              name: "spark-r",
              description: "Submit a Spark R batch job",
              options: [
                optAccessTokenFile,
                optAccount,
                optArchives,
                optAsync,
                optAutotuningCohort,
                optAutotuningScenarios,
                optBatch,
                optBillingProject,
                optCohort,
                optConfiguration,
                optContainerImage,
                optDepsBucket,
                optEnableAutotuning,
                optFiles2,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optHistoryServerCluster,
                optImpersonateServiceAccount,
                optKmsKey,
                optLabels,
                optLogHttp,
                optMetastoreService,
                optNetwork,
                optNoAsync,
                optNoEnableAutotuning,
                optProject,
                optProperties2,
                optQuiet,
                optRegion8,
                optRequestId,
                optResourceManagerTag,
                optServiceAccount,
                optStagingBucket,
                optSubnet,
                optTags,
                optTraceToken,
                optTtl,
                optUserOutputEnabled,
                optUserWorkloadAuthenticationType,
                optVerbosity,
                optVersion,
              ],
              args: [
                {
                  name: "MAIN_R_FILE",
                  description:
                    "URI of the main R file to use as the driver. Must be a ``.R'' or ``.r'' file",
                  template: "filepaths",
                },
                {
                  name: "JOB_ARG",
                  description: "Arguments to pass to the driver",
                  isVariadic: true,
                  isOptional: true,
                },
              ],
            },
            {
              name: "spark-sql",
              description: "Submit a Spark SQL batch job",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optAutotuningCohort,
                optAutotuningScenarios,
                optBatch,
                optBillingProject,
                optCohort,
                optConfiguration,
                optContainerImage,
                optDepsBucket,
                optEnableAutotuning,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optHistoryServerCluster,
                optImpersonateServiceAccount,
                optJars2,
                optKmsKey,
                optLabels,
                optLogHttp,
                optMetastoreService,
                optNetwork,
                optNoAsync,
                optNoEnableAutotuning,
                optProject,
                optProperties2,
                optQuiet,
                optRegion8,
                optRequestId,
                optResourceManagerTag,
                optServiceAccount,
                optStagingBucket,
                optSubnet,
                optTags,
                optTraceToken,
                optTtl,
                optUserOutputEnabled,
                optUserWorkloadAuthenticationType,
                {
                  name: "--vars",
                  description:
                    'Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";)',
                  args: {
                    name: "NAME=VALUE",
                    description: "Dict",
                  },
                },
                optVerbosity,
                optVersion,
              ],
              args: {
                name: "SQL_SCRIPT",
                description:
                  "URI of the script that contains Spark SQL queries to execute",
              },
            },
          ],
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optAutotuningCohort,
            optAutotuningScenarios,
            optBatch,
            optBillingProject,
            optCohort,
            optConfiguration,
            optContainerImage,
            optEnableAutotuning,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optHistoryServerCluster,
            optImpersonateServiceAccount,
            optKmsKey,
            optLabels,
            optLogHttp,
            optMetastoreService,
            optNetwork,
            optNoAsync,
            optNoEnableAutotuning,
            optProject,
            optProperties2,
            optQuiet,
            optRegion8,
            optRequestId,
            optResourceManagerTag,
            optServiceAccount,
            optStagingBucket,
            optSubnet,
            optTags,
            optTraceToken,
            optTtl,
            optUserOutputEnabled,
            optUserWorkloadAuthenticationType,
            optVerbosity,
          ],
        },
        {
          name: "wait",
          description:
            "View the output of a batch as it runs or after it completes",
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
          args: {
            name: "BATCH",
            description:
              "ID of the batch or fully qualified identifier for the batch",
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
      name: "clusters",
      description: "Create and manage Dataproc clusters",
      subcommands: [
        {
          name: "create",
          description: "Create a cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--action-on-failed-primary-workers",
              description:
                "Failure action to take when primary workers fail during cluster creation. _ACTION_ON_FAILED_PRIMARY_WORKERS_ must be one of:",
              args: {
                name: "ACTION_ON_FAILED_PRIMARY_WORKERS",
                suggestions: [
                  "DELETE",
                  "FAILURE_ACTION_UNSPECIFIED",
                  "NO_ACTION",
                ],
              },
            },
            optAsync2,
            {
              name: "--auto-zone-exclude-zones",
              description:
                "A comma-separated list of compute zones (such as `us-central1-a`) to exclude when [Dataproc Auto Zone placement](https://docs.cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone) picks the zone for the cluster",
              args: {
                name: "ZONE",
                description: "List",
              },
            },
            optAutoscalingPolicy,
            optBillingProject,
            {
              name: "--bucket",
              description:
                "The Google Cloud Storage bucket to use by default to stage job dependencies, miscellaneous config files, and job driver console output when using this cluster",
              args: {
                name: "BUCKET",
                description: "String",
              },
            },
            {
              name: "--cluster-type",
              description:
                "The type of cluster. _TYPE_ must be one of: *standard*, *single-node*, *zero-scale*",
              args: {
                name: "TYPE",
                description: "String",
                suggestions: ["standard", "single-node", "zero-scale"],
              },
            },
            {
              name: "--confidential-compute",
              description:
                "Enables Confidential VM. See https://cloud.google.com/compute/confidential-vm/docs for more information. Note that Confidential VM can only be enabled when the machine types are N2D (https://cloud.google.com/compute/docs/machine-types#n2d_machine_types) and the image is SEV Compatible",
            },
            optConfiguration,
            {
              name: "--dataproc-metastore",
              description:
                'Specify the name of a Dataproc Metastore service to be used as an external metastore in the format: "projects/{project-id}/locations/{region}/services/{service-name}"',
              args: {
                name: "DATAPROC_METASTORE",
                description: "String",
              },
            },
            {
              name: "--delete-expiration-time",
              description:
                'The time when the cluster will be auto-deleted, such as "2017-08-29T18:52:51.142Z." See $ gcloud topic datetimes for information on time formats',
              args: {
                name: "DELETE_EXPIRATION_TIME",
              },
            },
            {
              name: "--delete-max-age",
              description:
                'The lifespan of the cluster, with auto-deletion upon completion, such as "2h" or "1d". See $ gcloud topic datetimes for information on duration formats',
              args: {
                name: "DELETE_MAX_AGE",
              },
            },
            {
              name: "--delete-max-idle",
              description:
                'The duration after the last job completes to auto-delete the cluster, such as "2h" or "1d". See $ gcloud topic datetimes for information on duration formats',
              args: {
                name: "DELETE_MAX_IDLE",
              },
            },
            {
              name: "--driver-pool-accelerator",
              description:
                "Attaches accelerators, such as GPUs, to the driver-pool instance(s)",
              args: {
                name: "type=TYPE,count=COUNT",
                description: "Dict",
              },
            },
            {
              name: "--driver-pool-boot-disk-size",
              description:
                "The size of the boot disk. The value must be a whole number followed by a size unit of ``KB'' for kilobyte, ``MB'' for megabyte, ``GB'' for gigabyte, or ``TB'' for terabyte. For example, ``10GB'' will produce a 10 gigabyte disk. The minimum size a boot disk can have is 10 GB. Disk size must be a multiple of 1 GB",
              args: {
                name: "DRIVER_POOL_BOOT_DISK_SIZE",
              },
            },
            {
              name: "--driver-pool-boot-disk-type",
              description:
                "The type of the boot disk. The value must be `pd-balanced`, `pd-ssd`, or `pd-standard`",
              args: {
                name: "DRIVER_POOL_BOOT_DISK_TYPE",
                description: "String",
              },
            },
            {
              name: "--driver-pool-id",
              description:
                "Custom identifier for the DRIVER Node Group being created. If not provided, a random string is generated",
              args: {
                name: "DRIVER_POOL_ID",
                description: "String",
              },
            },
            {
              name: "--driver-pool-local-ssd-interface",
              description:
                "Interface to use to attach local SSDs to cluster driver pool node(s)",
              args: {
                name: "DRIVER_POOL_LOCAL_SSD_INTERFACE",
                description: "String",
              },
            },
            {
              name: "--driver-pool-machine-type",
              description:
                "The type of machine to use for the cluster driver pool nodes. Defaults to server-specified",
              args: {
                name: "DRIVER_POOL_MACHINE_TYPE",
                description: "String",
              },
            },
            {
              name: "--driver-pool-min-cpu-platform",
              description:
                "When specified, the VM is scheduled on the host with a specified CPU architecture or a more recent CPU platform that's available in that zone. To list available CPU platforms in a zone, run:",
              args: {
                name: "PLATFORM",
                description: "String",
              },
            },
            {
              name: "--driver-pool-size",
              description: "The size of the cluster driver pool",
              args: {
                name: "DRIVER_POOL_SIZE",
                description: "Int",
              },
            },
            {
              name: "--enable-component-gateway",
              description:
                "Enable access to the web UIs of selected components on the cluster through the component gateway",
            },
            {
              name: "--enable-kerberos",
              description: "Enable Kerberos on the cluster",
            },
            {
              name: "--enable-node-groups",
              description:
                "Create cluster nodes using Dataproc NodeGroups. All the required VMs will be created using GCE MIG",
              hidden: true,
              args: {
                name: "ENABLE_NODE_GROUPS",
                description: "String",
              },
            },
            {
              name: "--enable-ssh",
              description: "Enable SSH access for the cluster",
              hidden: true,
            },
            {
              name: "--engine",
              description:
                "Cluster engine. _ENGINE_ must be one of: *default*, *lightning*",
              args: {
                name: "ENGINE",
                description: "String",
                suggestions: ["default", "lightning"],
              },
            },
            {
              name: "--expiration-time",
              description:
                'The time when the cluster will be auto-deleted, such as "2017-08-29T18:52:51.142Z." See $ gcloud topic datetimes for information on time formats',
              hidden: true,
              args: {
                name: "EXPIRATION_TIME",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gce-pd-kms-key",
              description:
                "ID of the key or fully qualified identifier for the key",
              priority: 100,
              args: {
                name: "GCE_PD_KMS_KEY",
                description: "String",
              },
            },
            {
              name: "--gce-pd-kms-key-keyring",
              description: "The KMS keyring of the key",
              args: {
                name: "GCE_PD_KMS_KEY_KEYRING",
                description: "String",
              },
            },
            {
              name: "--gce-pd-kms-key-location",
              description: "The Google Cloud location for the key",
              args: {
                name: "GCE_PD_KMS_KEY_LOCATION",
                description: "String",
              },
            },
            {
              name: "--gce-pd-kms-key-project",
              description: "The Google Cloud project for the key",
              args: {
                name: "GCE_PD_KMS_KEY_PROJECT",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--identity-config-file",
              description:
                "Path to a YAML (or JSON) file containing the configuration for Secure Multi-Tenancy on the cluster. The path can be a Cloud Storage URL (Example: 'gs://path/to/file') or a local file system path. If you pass \"-\" as the value of the flag the file content will be read from stdin",
              args: {
                name: "IDENTITY_CONFIG_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--image",
              description:
                "The custom image used to create the cluster. It can be the image name, the image URI, or the image family URI, which selects the latest image from the family",
              args: {
                name: "IMAGE",
                description: "String",
              },
            },
            {
              name: "--image-version",
              description:
                "The image version to use for the cluster. Defaults to the latest version",
              args: {
                name: "VERSION",
                description: "String",
              },
            },
            optImpersonateServiceAccount,
            {
              name: "--initialization-action-timeout",
              description:
                "The maximum duration of each initialization action. See $ gcloud topic datetimes for information on duration formats",
              args: {
                name: "TIMEOUT",
              },
            },
            {
              name: "--initialization-actions",
              description:
                "A list of Google Cloud Storage URIs of executables to run on each node in the cluster",
              args: {
                name: "CLOUD_STORAGE_URI",
                description: "List",
              },
            },
            {
              name: "--kerberos-config-file",
              description:
                "Path to a YAML (or JSON) file containing the configuration for Kerberos on the cluster. If you pass `-` as the value of the flag the file content will be read from stdin",
              args: {
                name: "KERBEROS_CONFIG_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--kerberos-kms-key",
              description:
                "ID of the key or fully qualified identifier for the key",
              priority: 100,
              args: {
                name: "KERBEROS_KMS_KEY",
                description: "String",
              },
            },
            {
              name: "--kerberos-kms-key-keyring",
              description: "The KMS keyring of the key",
              args: {
                name: "KERBEROS_KMS_KEY_KEYRING",
                description: "String",
              },
            },
            {
              name: "--kerberos-kms-key-location",
              description: "The Google Cloud location for the key",
              args: {
                name: "KERBEROS_KMS_KEY_LOCATION",
                description: "String",
              },
            },
            {
              name: "--kerberos-kms-key-project",
              description: "The Google Cloud project for the key",
              args: {
                name: "KERBEROS_KMS_KEY_PROJECT",
                description: "String",
              },
            },
            {
              name: "--kerberos-root-principal-password-uri",
              description:
                "Google Cloud Storage URI of a KMS encrypted file containing the root principal password. Must be a Cloud Storage URL beginning with 'gs://'",
              args: {
                name: "KERBEROS_ROOT_PRINCIPAL_PASSWORD_URI",
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
            optLabels,
            optLogHttp,
            {
              name: "--master-accelerator",
              description:
                "Attaches accelerators, such as GPUs, to the master instance(s)",
              args: {
                name: "type=TYPE,count=COUNT",
                description: "Dict",
              },
            },
            {
              name: "--master-attached-disks",
              description:
                "A list of disk configurations to attach to each instance in this group. Disk configurations are separated by semicolons. Each disk configuration is a comma-separated list of the following parameters",
              args: {
                name: "MASTER_ATTACHED_DISKS",
              },
            },
            {
              name: "--master-boot-disk-provisioned-iops",
              description:
                "Indicates the [IOPS](https://cloud.google.com/compute/docs/disks/hyperdisks#iops) to provision for the disk. This sets the limit for disk I/O operations per second. This is only supported if the bootdisk type is [hyperdisk-balanced](https://cloud.google.com/compute/docs/disks/hyperdisks)",
              args: {
                name: "MASTER_BOOT_DISK_PROVISIONED_IOPS",
                description: "Int",
              },
            },
            {
              name: "--master-boot-disk-provisioned-throughput",
              description:
                "Indicates the [throughput](https://cloud.google.com/compute/docs/disks/hyperdisks#throughput) to provision for the disk. This sets the limit for throughput in MiB per second. This is only supported if the bootdisk type is [hyperdisk-balanced](https://cloud.google.com/compute/docs/disks/hyperdisks)",
              args: {
                name: "MASTER_BOOT_DISK_PROVISIONED_THROUGHPUT",
                description: "Int",
              },
            },
            {
              name: "--master-boot-disk-size",
              description:
                "The size of the boot disk. The value must be a whole number followed by a size unit of ``KB'' for kilobyte, ``MB'' for megabyte, ``GB'' for gigabyte, or ``TB'' for terabyte. For example, ``10GB'' will produce a 10 gigabyte disk. The minimum size a boot disk can have is 10 GB. Disk size must be a multiple of 1 GB",
              args: {
                name: "MASTER_BOOT_DISK_SIZE",
              },
            },
            {
              name: "--master-boot-disk-size-gb",
              description:
                '(DEPRECATED) Use `--master-boot-disk-size` flag with "GB" after value',
              hidden: true,
              deprecated: true,
              args: {
                name: "MASTER_BOOT_DISK_SIZE_GB",
                description: "Int",
              },
            },
            {
              name: "--master-boot-disk-type",
              description:
                "The type of the boot disk. The value must be `pd-balanced`, `pd-ssd`, or `pd-standard`",
              args: {
                name: "MASTER_BOOT_DISK_TYPE",
                description: "String",
              },
            },
            {
              name: "--master-local-ssd-interface",
              description:
                "Interface to use to attach local SSDs to master node(s) in a cluster",
              args: {
                name: "MASTER_LOCAL_SSD_INTERFACE",
                description: "String",
              },
            },
            {
              name: "--master-machine-type",
              description:
                "The type of machine to use for the master. Defaults to server-specified",
              args: {
                name: "MASTER_MACHINE_TYPE",
                description: "String",
              },
            },
            {
              name: "--master-machine-types",
              description:
                'Types of machines with optional rank for master nodes to use. Defaults to server-specified.eg. --master-machine-types="type=e2-standard-8,type=t2d-standard-8,rank=0"',
              hidden: true,
              args: {
                name: "type=MACHINE_TYPE,type=MACHINE_TYPE...,rank=RANK",
              },
            },
            {
              name: "--master-min-cpu-platform",
              description:
                "When specified, the VM is scheduled on the host with a specified CPU architecture or a more recent CPU platform that's available in that zone. To list available CPU platforms in a zone, run:",
              args: {
                name: "PLATFORM",
                description: "String",
              },
            },
            {
              name: "--max-age",
              description:
                'The lifespan of the cluster, with auto-deletion upon completion, such as "2h" or "1d". See $ gcloud topic datetimes for information on duration formats',
              hidden: true,
              args: {
                name: "MAX_AGE",
              },
            },
            {
              name: "--max-idle",
              description:
                'The duration after the last job completes to autto-delete the cluster, such as "2h" or "1d". See $ gcloud topic datetimes for information on duration formats',
              hidden: true,
              args: {
                name: "MAX_IDLE",
              },
            },
            {
              name: "--metadata",
              description:
                "Metadata to be made available to the guest operating system running on the instances",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--metric-overrides",
              description:
                "List of metrics that override the default metrics enabled for the metric sources. Any of the [available OSS metrics](https://cloud.google.com/dataproc/docs/guides/monitoring#available_oss_metrics) and all Spark metrics, can be listed for collection as a metric override. Override metric values are case sensitive, and must be provided, if appropriate, in CamelCase format, for example:",
              args: {
                name: "METRIC_SOURCE:INSTANCE:GROUP:METRIC",
                description: "List",
              },
            },
            {
              name: "--metric-overrides-file",
              description:
                "Path to a file containing list of Metrics that override the default metrics enabled for the metric sources. The path can be a Cloud Storage URL (example: `gs://path/to/file`) or a local file system path",
              args: {
                name: "METRIC_OVERRIDES_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--metric-sources",
              description:
                "Specifies a list of cluster [Metric Sources](https://cloud.google.com/dataproc/docs/guides/monitoring#available_oss_metrics) to collect custom metrics. _METRIC_SOURCE_ must be one of: *FLINK*, *HDFS*, *HIVEMETASTORE*, *HIVESERVER2*, *MONITORING_AGENT_DEFAULTS*, *SPARK*, *SPARK_HISTORY_SERVER*, *YARN*",
              priority: 100,
              args: {
                name: "METRIC_SOURCE",
                description: "List",
              },
            },
            {
              name: "--min-num-workers",
              description:
                "Minimum number of primary worker nodes to provision for cluster creation to succeed",
              args: {
                name: "MIN_NUM_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--min-secondary-worker-fraction",
              description:
                "Minimum fraction of secondary worker nodes required to create the cluster. If it is not met, cluster creation will fail. Must be a decimal value between 0 and 1. The number of required secondary workers is calculated by ceil(min-secondary-worker-fraction * num_secondary_workers). Defaults to 0.0001",
              args: {
                name: "MIN_SECONDARY_WORKER_FRACTION",
                description: "Float",
              },
            },
            {
              name: "--min-worker-fraction",
              description:
                "Minimum fraction of worker nodes required to create the cluster. If it is not met, cluster creation will fail. Must be a decimal value between 0 and 1. The number of required workers will be calculated by ceil(min-worker-fraction * num_workers)",
              hidden: true,
              args: {
                name: "0-1",
                description: "Float",
              },
            },
            {
              name: "--network",
              description:
                'The Compute Engine network that the VM instances of the cluster will be part of. This is mutually exclusive with --subnet. If neither is specified, this defaults to the "default" network',
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            {
              name: "--no-address",
              description:
                "If provided, the instances in the cluster will not be assigned external IP addresses",
            },
            optNoAsync2,
            {
              name: "--no-confidential-compute",
              description:
                "Enables Confidential VM. See https://cloud.google.com/compute/confidential-vm/docs for more information. Note that Confidential VM can only be enabled when the machine types are N2D (https://cloud.google.com/compute/docs/machine-types#n2d_machine_types) and the image is SEV Compatible",
              hidden: true,
            },
            {
              name: "--no-enable-component-gateway",
              description:
                "Enable access to the web UIs of selected components on the cluster through the component gateway",
              hidden: true,
            },
            {
              name: "--no-enable-kerberos",
              description: "Enable Kerberos on the cluster",
              hidden: true,
            },
            {
              name: "--no-enable-ssh",
              description: "Enable SSH access for the cluster",
              hidden: true,
            },
            {
              name: "--no-public-ip-address",
              description:
                "If provided, cluster instances are assigned external IP addresses",
              hidden: true,
            },
            {
              name: "--no-shielded-integrity-monitoring",
              description:
                "Enables monitoring and attestation of the boot integrity of the cluster's VMs. vTPM (virtual Trusted Platform Module) must also be enabled. A TPM is a hardware module that can be used for different security operations, such as remote attestation, encryption, and sealing of keys",
              hidden: true,
            },
            {
              name: "--no-shielded-secure-boot",
              description:
                "The cluster's VMs will boot with secure boot enabled",
              hidden: true,
            },
            {
              name: "--no-shielded-vtpm",
              description:
                "The cluster's VMs will boot with the TPM (Trusted Platform Module) enabled. A TPM is a hardware module that can be used for different security operations, such as remote attestation, encryption, and sealing of keys",
              hidden: true,
            },
            {
              name: "--no-single-node",
              description: "Create a single node cluster",
              hidden: true,
            },
            {
              name: "--node-group",
              description:
                'The name of the sole-tenant node group to create the cluster on. Can be a short name ("node-group-name") or in the format "projects/{project-id}/zones/{zone}/nodeGroups/{node-group-name}"',
              args: {
                name: "NODE_GROUP",
                description: "String",
              },
            },
            {
              name: "--num-driver-pool-local-ssds",
              description:
                "The number of local SSDs to attach to each cluster driver pool node",
              args: {
                name: "NUM_DRIVER_POOL_LOCAL_SSDS",
                description: "Int",
              },
            },
            {
              name: "--num-master-local-ssds",
              description:
                "The number of local SSDs to attach to the master in a cluster",
              args: {
                name: "NUM_MASTER_LOCAL_SSDS",
                description: "Int",
              },
            },
            {
              name: "--num-masters",
              description: "The number of master nodes in the cluster",
              args: {
                name: "NUM_MASTERS",
              },
            },
            {
              name: "--num-preemptible-worker-local-ssds",
              description:
                "(DEPRECATED) The number of local SSDs to attach to each secondary worker in a cluster",
              hidden: true,
              deprecated: true,
              args: {
                name: "NUM_PREEMPTIBLE_WORKER_LOCAL_SSDS",
                description: "Int",
              },
            },
            {
              name: "--num-preemptible-workers",
              description:
                "(DEPRECATED) The number of preemptible worker nodes in the cluster",
              hidden: true,
              deprecated: true,
              args: {
                name: "NUM_PREEMPTIBLE_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--num-secondary-worker-local-ssds",
              description:
                "The number of local SSDs to attach to each preemptible worker in a cluster",
              args: {
                name: "NUM_SECONDARY_WORKER_LOCAL_SSDS",
                description: "Int",
              },
            },
            {
              name: "--num-secondary-workers",
              description:
                "The number of secondary worker nodes in the cluster",
              args: {
                name: "NUM_SECONDARY_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--num-worker-local-ssds",
              description:
                "The number of local SSDs to attach to each worker in a cluster",
              args: {
                name: "NUM_WORKER_LOCAL_SSDS",
                description: "Int",
              },
            },
            {
              name: "--num-workers",
              description:
                "The number of worker nodes in the cluster. Defaults to server-specified",
              args: {
                name: "NUM_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--optional-components",
              description:
                "List of optional components to be installed on cluster machines",
              args: {
                name: "COMPONENT",
                description: "List",
              },
            },
            {
              name: "--preemptible-worker-accelerator",
              description:
                "(DEPRECATED) Attaches accelerators, such as GPUs, to the preemptible-worker instance(s)",
              hidden: true,
              deprecated: true,
              args: {
                name: "type=TYPE,count=COUNT",
                description: "Dict",
              },
            },
            {
              name: "--preemptible-worker-boot-disk-size",
              description:
                "(DEPRECATED) The size of the boot disk. The value must be a whole number followed by a size unit of ``KB'' for kilobyte, ``MB'' for megabyte, ``GB'' for gigabyte, or ``TB'' for terabyte. For example, ``10GB'' will produce a 10 gigabyte disk. The minimum size a boot disk can have is 10 GB. Disk size must be a multiple of 1 GB",
              hidden: true,
              deprecated: true,
              args: {
                name: "PREEMPTIBLE_WORKER_BOOT_DISK_SIZE",
              },
            },
            {
              name: "--preemptible-worker-boot-disk-type",
              description:
                "(DEPRECATED) The type of the boot disk. The value must be `pd-balanced`, `pd-ssd`, or `pd-standard`",
              hidden: true,
              deprecated: true,
              args: {
                name: "PREEMPTIBLE_WORKER_BOOT_DISK_TYPE",
                description: "String",
              },
            },
            {
              name: "--private-ipv6-google-access-type",
              description:
                "The private IPv6 Google access type for the cluster. _PRIVATE_IPV6_GOOGLE_ACCESS_TYPE_ must be one of: *inherit-subnetwork*, *outbound*, *bidirectional*",
              args: {
                name: "PRIVATE_IPV6_GOOGLE_ACCESS_TYPE",
                description: "String",
                suggestions: [
                  "inherit-subnetwork",
                  "outbound",
                  "bidirectional",
                ],
              },
            },
            optProject,
            {
              name: "--properties",
              description:
                "Specifies configuration properties for installed packages, such as Hadoop and Spark",
              args: {
                name: "PREFIX:PROPERTY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--public-ip-address",
              description:
                "If provided, cluster instances are assigned external IP addresses",
            },
            optQuiet,
            optRegion3,
            {
              name: "--reservation",
              description:
                "The name of the reservation, required when `--reservation-affinity=specific`",
              args: {
                name: "RESERVATION",
                description: "String",
              },
            },
            {
              name: "--reservation-affinity",
              description:
                "The type of reservation for the instance. _RESERVATION_AFFINITY_ must be one of: *any*, *none*, *specific*",
              args: {
                name: "RESERVATION_AFFINITY",
                description: "String",
                suggestions: ["any", "none", "specific"],
              },
            },
            {
              name: "--resource-manager-tags",
              description:
                "Specifies a list of resource manager tags to apply to each cluster node (master and worker nodes)",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--scopes",
              description:
                "Specifies scopes for the node instances. Multiple SCOPEs can be specified, separated by commas. Examples:",
              args: {
                name: "SCOPE",
                description: "List",
              },
            },
            {
              name: "--secondary-worker-accelerator",
              description:
                "Attaches accelerators, such as GPUs, to the secondary-worker instance(s)",
              args: {
                name: "type=TYPE,count=COUNT",
                description: "Dict",
              },
            },
            {
              name: "--secondary-worker-attached-disks",
              description:
                "A list of disk configurations to attach to each instance in this group. Disk configurations are separated by semicolons. Each disk configuration is a comma-separated list of the following parameters",
              args: {
                name: "SECONDARY_WORKER_ATTACHED_DISKS",
              },
            },
            {
              name: "--secondary-worker-boot-disk-provisioned-iops",
              description:
                "Indicates the [IOPS](https://cloud.google.com/compute/docs/disks/hyperdisks#iops) to provision for the disk. This sets the limit for disk I/O operations per second. This is only supported if the bootdisk type is [hyperdisk-balanced](https://cloud.google.com/compute/docs/disks/hyperdisks)",
              hidden: true,
              args: {
                name: "SECONDARY_WORKER_BOOT_DISK_PROVISIONED_IOPS",
                description: "Int",
              },
            },
            {
              name: "--secondary-worker-boot-disk-provisioned-throughput",
              description:
                "Indicates the [throughput](https://cloud.google.com/compute/docs/disks/hyperdisks#throughput) to provision for the disk. This sets the limit for throughput in MiB per second. This is only supported if the bootdisk type is [hyperdisk-balanced](https://cloud.google.com/compute/docs/disks/hyperdisks)",
              hidden: true,
              args: {
                name: "SECONDARY_WORKER_BOOT_DISK_PROVISIONED_THROUGHPUT",
                description: "Int",
              },
            },
            {
              name: "--secondary-worker-boot-disk-size",
              description:
                "The size of the boot disk. The value must be a whole number followed by a size unit of ``KB'' for kilobyte, ``MB'' for megabyte, ``GB'' for gigabyte, or ``TB'' for terabyte. For example, ``10GB'' will produce a 10 gigabyte disk. The minimum size a boot disk can have is 10 GB. Disk size must be a multiple of 1 GB",
              args: {
                name: "SECONDARY_WORKER_BOOT_DISK_SIZE",
              },
            },
            {
              name: "--secondary-worker-boot-disk-type",
              description:
                "The type of the boot disk. The value must be `pd-balanced`, `pd-ssd`, or `pd-standard`",
              args: {
                name: "SECONDARY_WORKER_BOOT_DISK_TYPE",
                description: "String",
              },
            },
            {
              name: "--secondary-worker-local-ssd-interface",
              description:
                "Interface to use to attach local SSDs to each secondary worker in a cluster",
              args: {
                name: "SECONDARY_WORKER_LOCAL_SSD_INTERFACE",
                description: "String",
              },
            },
            {
              name: "--secondary-worker-machine-types",
              description:
                'Types of machines with optional rank for secondary workers to use. Defaults to server-specified.eg. --secondary-worker-machine-types="type=e2-standard-8,type=t2d-standard-8,rank=0"',
              args: {
                name: "type=MACHINE_TYPE,type=MACHINE_TYPE...,rank=RANK",
              },
            },
            {
              name: "--secondary-worker-standard-capacity-base",
              description:
                "This flag sets the base number of Standard VMs to use for [secondary workers](https://cloud.google.com/dataproc/docs/concepts/compute/secondary-vms#preemptible_and_non-preemptible_secondary_workers). Dataproc will create only standard VMs until it reaches this number, then it will mix Spot and Standard VMs according to ``SECONDARY_WORKER_STANDARD_CAPACITY_PERCENT_ABOVE_BASE''",
              args: {
                name: "SECONDARY_WORKER_STANDARD_CAPACITY_BASE",
                description: "Int",
              },
            },
            {
              name: "--secondary-worker-standard-capacity-percent-above-base",
              description:
                "When combining Standard and Spot VMs for [secondary-workers](https://cloud.google.com/dataproc/docs/concepts/compute/secondary-vms#preemptible_and_non-preemptible_secondary_workers) once the number of Standard VMs specified by ``SECONDARY_WORKER_STANDARD_CAPACITY_BASE'' has been used, this flag specifies the percentage of the total number of additional Standard VMs secondary workers will use. Spot VMs will be used for the remaining percentage",
              args: {
                name: "SECONDARY_WORKER_STANDARD_CAPACITY_PERCENT_ABOVE_BASE",
                description: "Int",
              },
            },
            {
              name: "--secondary-worker-type",
              description:
                "The type of the secondary worker group. _TYPE_ must be one of: *preemptible*, *non-preemptible*, *spot*",
              args: {
                name: "TYPE",
                description: "String",
                suggestions: ["preemptible", "non-preemptible", "spot"],
              },
            },
            {
              name: "--secure-multi-tenancy-user-mapping",
              description:
                'A string of user-to-service-account mappings. Mappings are separated by commas, and each mapping takes the form of "user-account:service-account". Example: "bob@company.com:service-account-bob@project.iam.gserviceaccount.com,alice@company.com:service-account-alice@project.iam.gserviceaccount.com"',
              args: {
                name: "SECURE_MULTI_TENANCY_USER_MAPPING",
                description: "String",
              },
            },
            {
              name: "--service-account",
              description:
                "The Google Cloud IAM service account to be authenticated as",
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
              },
            },
            {
              name: "--shielded-integrity-monitoring",
              description:
                "Enables monitoring and attestation of the boot integrity of the cluster's VMs. vTPM (virtual Trusted Platform Module) must also be enabled. A TPM is a hardware module that can be used for different security operations, such as remote attestation, encryption, and sealing of keys",
            },
            {
              name: "--shielded-secure-boot",
              description:
                "The cluster's VMs will boot with secure boot enabled",
            },
            {
              name: "--shielded-vtpm",
              description:
                "The cluster's VMs will boot with the TPM (Trusted Platform Module) enabled. A TPM is a hardware module that can be used for different security operations, such as remote attestation, encryption, and sealing of keys",
            },
            {
              name: "--single-node",
              description: "Create a single node cluster",
            },
            {
              name: "--stop-expiration-time",
              description:
                'The time when the cluster will be auto-stopped, such as "2017-08-29T18:52:51.142Z." See $ gcloud topic datetimes for information on time formats',
              args: {
                name: "STOP_EXPIRATION_TIME",
              },
            },
            {
              name: "--stop-max-age",
              description:
                'The lifespan of the cluster, with auto-stop upon completion, such as "2h" or "1d". See $ gcloud topic datetimes for information on duration formats',
              args: {
                name: "STOP_MAX_AGE",
              },
            },
            {
              name: "--stop-max-idle",
              description:
                'The duration after the last job completes to auto-stop the cluster, such as "2h" or "1d". See $ gcloud topic datetimes for information on duration formats',
              args: {
                name: "STOP_MAX_IDLE",
              },
            },
            {
              name: "--subnet",
              description:
                "Specifies the subnet that the cluster will be part of. This is mutally exclusive with --network",
              args: {
                name: "SUBNET",
                description: "String",
              },
            },
            {
              name: "--tags",
              description:
                "Specifies a list of tags to apply to the instance. These tags allow network firewall rules and routes to be applied to specified VM instances. See gcloud_compute_firewall-rules_create(1) for more details",
              args: {
                name: "TAG",
                description: "List",
              },
            },
            {
              name: "--temp-bucket",
              description:
                "The Google Cloud Storage bucket to use by default to store ephemeral cluster and jobs data, such as Spark and MapReduce history files",
              args: {
                name: "TEMP_BUCKET",
                description: "String",
              },
            },
            {
              name: "--tier",
              description: "(DEPRECATED) Cluster tier",
              hidden: true,
              deprecated: true,
              args: {
                name: "TIER",
                description: "String",
                suggestions: ["premium", "standard"],
              },
            },
            optTimeout,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--worker-accelerator",
              description:
                "Attaches accelerators, such as GPUs, to the worker instance(s)",
              args: {
                name: "type=TYPE,count=COUNT",
                description: "Dict",
              },
            },
            {
              name: "--worker-attached-disks",
              description:
                "A list of disk configurations to attach to each instance in this group. Disk configurations are separated by semicolons. Each disk configuration is a comma-separated list of the following parameters",
              args: {
                name: "WORKER_ATTACHED_DISKS",
              },
            },
            {
              name: "--worker-boot-disk-provisioned-iops",
              description:
                "Indicates the [IOPS](https://cloud.google.com/compute/docs/disks/hyperdisks#iops) to provision for the disk. This sets the limit for disk I/O operations per second. This is only supported if the bootdisk type is [hyperdisk-balanced](https://cloud.google.com/compute/docs/disks/hyperdisks)",
              args: {
                name: "WORKER_BOOT_DISK_PROVISIONED_IOPS",
                description: "Int",
              },
            },
            {
              name: "--worker-boot-disk-provisioned-throughput",
              description:
                "Indicates the [throughput](https://cloud.google.com/compute/docs/disks/hyperdisks#throughput) to provision for the disk. This sets the limit for throughput in MiB per second. This is only supported if the bootdisk type is [hyperdisk-balanced](https://cloud.google.com/compute/docs/disks/hyperdisks)",
              args: {
                name: "WORKER_BOOT_DISK_PROVISIONED_THROUGHPUT",
                description: "Int",
              },
            },
            {
              name: "--worker-boot-disk-size",
              description:
                "The size of the boot disk. The value must be a whole number followed by a size unit of ``KB'' for kilobyte, ``MB'' for megabyte, ``GB'' for gigabyte, or ``TB'' for terabyte. For example, ``10GB'' will produce a 10 gigabyte disk. The minimum size a boot disk can have is 10 GB. Disk size must be a multiple of 1 GB",
              args: {
                name: "WORKER_BOOT_DISK_SIZE",
              },
            },
            {
              name: "--worker-boot-disk-size-gb",
              description:
                '(DEPRECATED) Use `--worker-boot-disk-size` flag with "GB" after value',
              hidden: true,
              deprecated: true,
              args: {
                name: "WORKER_BOOT_DISK_SIZE_GB",
                description: "Int",
              },
            },
            {
              name: "--worker-boot-disk-type",
              description:
                "The type of the boot disk. The value must be `pd-balanced`, `pd-ssd`, or `pd-standard`",
              args: {
                name: "WORKER_BOOT_DISK_TYPE",
                description: "String",
              },
            },
            {
              name: "--worker-local-ssd-interface",
              description:
                "Interface to use to attach local SSDs to each worker in a cluster",
              args: {
                name: "WORKER_LOCAL_SSD_INTERFACE",
                description: "String",
              },
            },
            {
              name: "--worker-machine-type",
              description:
                "The type of machine to use for primary workers. Defaults to server-specified",
              args: {
                name: "WORKER_MACHINE_TYPE",
                description: "String",
              },
            },
            {
              name: "--worker-machine-types",
              description:
                '[Machine types](https://cloud.google.com/dataproc/docs/concepts/compute/supported-machine-types) for primary worker nodes to use with optional rank. A lower rank number is given higher preference. Based on availablilty, Dataproc tries to create primary worker VMs using the worker machine type with the lowest rank, and then tries to use machine types with higher ranks as necessary. Machine types with the same rank are given the same preference. Example use: --worker-machine-types="type=e2-standard-8,type=n2-standard-8,rank=0". For more information, see [Dataproc Flexible VMs](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/flexible-vms)',
              args: {
                name: "type=MACHINE_TYPE,type=MACHINE_TYPE...,rank=RANK",
              },
            },
            {
              name: "--worker-min-cpu-platform",
              description:
                "When specified, the VM is scheduled on the host with a specified CPU architecture or a more recent CPU platform that's available in that zone. To list available CPU platforms in a zone, run:",
              args: {
                name: "PLATFORM",
                description: "String",
              },
            },
            {
              name: ["--zone", "-z"],
              description:
                "The compute zone (such as `us-central1-a`) for the cluster. If empty and --region is set to a value other than global, [Dataproc Auto Zone placement](https://docs.cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone) will pick a zone in the region. Overrides the default compute/zone property value for this command invocation",
              args: {
                name: "ZONE",
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
          description: "Delete a cluster",
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
            optRegion3,
            optTimeout,
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
          description: "View the details of a cluster",
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
            optRegion3,
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
          name: "diagnose",
          description: "Run a detailed diagnostic on a cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--end-time",
              description:
                "Time instant to stop the diagnosis at (in %Y-%m-%dT%H:%M:%S.%fZ format)",
              args: {
                name: "END_TIME",
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
              name: "--job-id",
              description:
                "(DEPRECATED) The job on which to perform the diagnosis",
              hidden: true,
              deprecated: true,
              args: {
                name: "JOB_ID",
                description: "String",
              },
            },
            {
              name: "--job-ids",
              description: "A list of jobs on which to perform the diagnosis",
              args: {
                name: "JOB_IDS",
                description: "String",
              },
            },
            optLogHttp,
            optProject,
            optQuiet,
            optRegion3,
            {
              name: "--start-time",
              description:
                "Time instant to start the diagnosis from (in %Y-%m-%dT%H:%M:%S.%fZ format)",
              args: {
                name: "START_TIME",
                description: "String",
              },
            },
            {
              name: "--tarball-access",
              description:
                "Target access privileges for diagnostic tarball. _TARBALL_ACCESS_ must be one of: *GOOGLE_CLOUD_SUPPORT*, *GOOGLE_DATAPROC_DIAGNOSE*",
              args: {
                name: "TARBALL_ACCESS",
                suggestions: [
                  "GOOGLE_CLOUD_SUPPORT",
                  "GOOGLE_DATAPROC_DIAGNOSE",
                ],
              },
            },
            {
              name: "--tarball-gcs-dir",
              description:
                "The output Cloud Storage directory for the diagnostic tarball. If not specified, a task-specific directory in the cluster's staging bucket will be used",
              args: {
                name: "TARBALL_GCS_DIR",
                description: "String",
              },
            },
            optTimeout,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--workers",
              description:
                "A list of workers in the cluster to run the diagnostic script on",
              hidden: true,
              args: {
                name: "WORKERS",
                description: "String",
              },
            },
            {
              name: "--yarn-application-id",
              description:
                "(DEPRECATED) The yarn application on which to perform the diagnosis",
              hidden: true,
              deprecated: true,
              args: {
                name: "YARN_APPLICATION_ID",
                description: "String",
              },
            },
            {
              name: "--yarn-application-ids",
              description:
                "A list of yarn applications on which to perform the diagnosis",
              args: {
                name: "YARN_APPLICATION_IDS",
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
          name: "enable-personal-auth-session",
          description: "Enable a personal auth session on a cluster",
          hidden: true,
          options: [
            {
              name: "--access-boundary",
              description:
                "The path to a JSON file specifying the credential access boundary for the personal auth session",
              args: {
                name: "ACCESS_BOUNDARY",
                description: "String",
              },
            },
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
            {
              name: "--no-refresh-credentials",
              description:
                "Keep the command running to periodically refresh credentials",
              hidden: true,
            },
            {
              name: "--openssl-command",
              description:
                "The full path to the command used to invoke the OpenSSL tool on this machine",
              hidden: true,
              args: {
                name: "OPENSSL_COMMAND",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--refresh-credentials",
              description:
                "Keep the command running to periodically refresh credentials",
              hidden: true,
            },
            optRegion3,
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
          name: "export",
          description: "Export a cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDestination,
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
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get IAM policy for a cluster",
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
            optPageSize2,
            optProject,
            optQuiet,
            optRegion3,
            optSortBy,
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
          name: "gke",
          description: "Create Dataproc GKE-based virtual clusters",
          subcommands: [
            {
              name: "create",
              description: "Create a GKE-based virtual cluster",
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
                  name: "--gke-cluster",
                  description:
                    "ID of the gke-cluster or fully qualified identifier for the gke-cluster",
                  priority: 100,
                  args: {
                    name: "GKE_CLUSTER",
                    description: "String",
                  },
                },
                {
                  name: "--gke-cluster-location",
                  description: "GKE region for the gke-cluster",
                  args: {
                    name: "GKE_CLUSTER_LOCATION",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                {
                  name: "--history-server-cluster",
                  description:
                    "ID of the history-server-cluster or fully qualified identifier for the history-server-cluster",
                  priority: 100,
                  args: {
                    name: "HISTORY_SERVER_CLUSTER",
                    description: "String",
                  },
                },
                {
                  name: "--history-server-cluster-region",
                  description:
                    "Compute Engine region for the history-server-cluster. It must be the same region as the Dataproc cluster that is being created",
                  args: {
                    name: "HISTORY_SERVER_CLUSTER_REGION",
                    description: "String",
                  },
                },
                optImpersonateServiceAccount,
                optLogHttp,
                {
                  name: "--metastore-service",
                  description:
                    "ID of the metastore-service or fully qualified identifier for the metastore-service",
                  priority: 100,
                  args: {
                    name: "METASTORE_SERVICE",
                    description: "String",
                  },
                },
                {
                  name: "--metastore-service-location",
                  description:
                    "Dataproc Metastore location for the metastore-service",
                  args: {
                    name: "METASTORE_SERVICE_LOCATION",
                    description: "String",
                  },
                },
                {
                  name: "--namespace",
                  description:
                    "The name of the Kubernetes namespace to deploy Dataproc system components in. This namespace does not need to exist",
                  args: {
                    name: "NAMESPACE",
                    description: "String",
                  },
                },
                optNoAsync2,
                {
                  name: "--no-setup-workload-identity",
                  description:
                    "Sets up the GKE Workload Identity for your Dataproc on GKE cluster. Note that running this requires elevated permissions as it will manipulate IAM policies on the Google Service Accounts that will be used by your Dataproc on GKE cluster",
                  hidden: true,
                },
                {
                  name: "--pools",
                  description:
                    "Each `--pools` flag represents a GKE node pool associated with the virtual cluster. It is comprised of a CSV in the form `KEY=VALUE[;VALUE]`, where certain keys may have multiple values",
                  args: {
                    name: "KEY=VALUE;VALUE",
                    description: "Dict",
                  },
                },
                optProject,
                {
                  name: "--properties",
                  description:
                    'Specifies configuration properties for installed packages, such as Spark. Properties are mapped to configuration files by specifying a prefix, such as "core:io.serializations"',
                  args: {
                    name: "PREFIX:PROPERTY=VALUE",
                    description: "Dict",
                  },
                },
                optQuiet,
                optRegion3,
                {
                  name: "--setup-workload-identity",
                  description:
                    "Sets up the GKE Workload Identity for your Dataproc on GKE cluster. Note that running this requires elevated permissions as it will manipulate IAM policies on the Google Service Accounts that will be used by your Dataproc on GKE cluster",
                },
                {
                  name: "--spark-engine-version",
                  description:
                    "The version of the Spark engine to run on this cluster",
                  priority: 100,
                  args: {
                    name: "SPARK_ENGINE_VERSION",
                    description: "String",
                  },
                },
                {
                  name: "--staging-bucket",
                  description:
                    "The Cloud Storage bucket to use to stage job dependencies, miscellaneous config files, and job driver console output when using this cluster",
                  args: {
                    name: "STAGING_BUCKET",
                    description: "String",
                  },
                },
                optTimeout,
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
          name: "import",
          description: "Import a cluster",
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
            optRegion3,
            optSource,
            optTimeout,
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
          description: "View a list of clusters in a project",
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
            optRegion7,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "repair",
          description: "Repair a cluster",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync2,
            optBillingProject,
            {
              name: "--cluster-repair-action",
              description:
                "`--cluster-repair-action` flag indicates the repair operation is at the cluster level. `--node-pool` flag should not be specified with this flag. Valid values : ['REPAIR_ERROR_DUE_TO_UPDATE_CLUSTER']",
              args: {
                name: "CLUSTER_REPAIR_ACTION",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--dataproc-super-user",
              description:
                "Whether to use Dataproc superuser permissions. If true, IAM checks for `dataproc.googleapis.com/clusters.repair` permission, otherwise `dataproc.googleapis.com/clusters.update`",
              hidden: true,
              args: {
                name: "DATAPROC_SUPER_USER",
                description: "Int",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--graceful-decommission-timeout",
              description:
                "The graceful decommission timeout for decommissioning Node Managers in the cluster, used when removing nodes. Graceful decommissioning allows removing nodes from the cluster without interrupting jobs in progress. Timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes (and potentially interrupting jobs). Timeout defaults to 0 if not set (for forceful decommission), and the maximum allowed timeout is 1 day. See $ gcloud topic datetimes for information on duration formats",
              args: {
                name: "GRACEFUL_DECOMMISSION_TIMEOUT",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync2,
            {
              name: "--node-pool",
              description:
                "Each `--node-pool` flag represents either the primary or secondary worker pool associated with the cluster and an action on specified nodes. *id:*::: Valid values : ['PRIMARY_WORKER_POOL', 'SECONDARY_WORKER_POOL']. *repair-action:*::: Valid values : ['DELETE']",
              args: {
                name: 'id=ID,repair-action=REPAIR_ACTION,instance-names="INSTANCE_NAME1;INSTANCE_NAME2"',
                description: "Dict",
              },
            },
            optProject,
            optQuiet,
            optRegion3,
            optTimeout,
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
          name: "set-iam-policy",
          description: "Set IAM policy for a cluster",
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
            optRegion3,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "CLUSTER",
              description:
                "ID of the cluster or fully qualified identifier for the cluster",
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
          description: "Start a cluster",
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
            optRegion3,
            optTimeout,
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
          name: "stop",
          description: "Stop a cluster",
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
            optRegion3,
            optTimeout,
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
          description:
            "Update labels and/or the number of worker nodes in a cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-user-mappings",
              description:
                "List of user-to-service-account mappings to add to current mappings. If a mapping exists, its value is modified; otherwise, the new mapping is added",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optAsync2,
            optAutoscalingPolicy,
            optBillingProject,
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
            },
            optConfiguration,
            {
              name: "--delete-expiration-time",
              description:
                'The time when the cluster will be auto-deleted, such as "2017-08-29T18:52:51.142Z". See $ gcloud topic datetimes for information on time formats',
              args: {
                name: "DELETE_EXPIRATION_TIME",
              },
            },
            {
              name: "--delete-max-age",
              description:
                'The lifespan of the cluster with auto-deletion upon completion, such as "2h" or "1d". See $ gcloud topic datetimes for information on duration formats',
              args: {
                name: "DELETE_MAX_AGE",
              },
            },
            {
              name: "--delete-max-idle",
              description:
                'The duration after the last job completes to auto-delete the cluster, such as "2h" or "1d". See $ gcloud topic datetimes for information on duration formats',
              args: {
                name: "DELETE_MAX_IDLE",
              },
            },
            {
              name: "--disable-autoscaling",
              description:
                "Disable autoscaling, if it is enabled. This is an alias for passing the empty string to --autoscaling-policy'",
            },
            {
              name: "--expiration-time",
              description:
                'The time when the cluster will be auto-deleted, such as "2017-08-29T18:52:51.142Z". See $ gcloud topic datetimes for information on time formats',
              hidden: true,
              args: {
                name: "EXPIRATION_TIME",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--graceful-decommission-timeout",
              description:
                "The graceful decommission timeout for decommissioning Node Managers in the cluster, used when removing nodes. Graceful decommissioning allows removing nodes from the cluster without interrupting jobs in progress. Timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes (and potentially interrupting jobs). Timeout defaults to 0 if not set (for forceful decommission), and the maximum allowed timeout is 1 day. See $ gcloud topic datetimes for information on duration formats",
              args: {
                name: "GRACEFUL_DECOMMISSION_TIMEOUT",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--identity-config-file",
              description:
                "Path to a YAML (or JSON) file that contains the configuration for [Secure Multi-Tenancy](/dataproc/docs/concepts/iam/sa-multi-tenancy) on the cluster. The path can be a Cloud Storage URL (example: 'gs://path/to/file') or a local filesystem path. The mappings provided in the file will overwrite existing mappings",
              args: {
                name: "IDENTITY_CONFIG_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optImpersonateServiceAccount,
            optLogHttp,
            {
              name: "--max-age",
              description:
                'The lifespan of the cluster, with auto-deletion upon completion, "2h" or "1d". See $ gcloud topic datetimes for information on duration formats',
              hidden: true,
              args: {
                name: "MAX_AGE",
              },
            },
            {
              name: "--max-idle",
              description:
                'The duration after the last job completes to auto-delete the cluster, such as "2h" or "1d". See $ gcloud topic datetimes for information on duration formats',
              hidden: true,
              args: {
                name: "MAX_IDLE",
              },
            },
            {
              name: "--min-secondary-worker-fraction",
              description:
                "Minimum fraction of new secondary worker nodes added in a scale up update operation, required to update the cluster. If it is not met, cluster updation will rollback the addition of secondary workers. Must be a decimal value between 0 and 1. Defaults to 0.0001",
              args: {
                name: "MIN_SECONDARY_WORKER_FRACTION",
                description: "Float",
              },
            },
            optNoAsync2,
            {
              name: "--no-clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
              hidden: true,
            },
            {
              name: "--no-delete-max-age",
              description:
                "Cancels the cluster auto-deletion by maximum cluster age (configured by --delete-max-age or --delete-expiration-time flags)",
            },
            {
              name: "--no-delete-max-idle",
              description:
                "Cancels the cluster auto-deletion by cluster idle duration (configured by --delete-max-idle flag)",
            },
            {
              name: "--no-disable-autoscaling",
              description:
                "Disable autoscaling, if it is enabled. This is an alias for passing the empty string to --autoscaling-policy'",
              hidden: true,
            },
            {
              name: "--no-max-age",
              description:
                "Cancels the cluster auto-deletion by maximum cluster age (configured by --max-age or --expiration-time flags)",
              hidden: true,
            },
            {
              name: "--no-max-idle",
              description:
                "Cancels the cluster auto-deletion by cluster idle duration (configured by --max-idle flag)",
              hidden: true,
            },
            {
              name: "--no-stop-max-age",
              description:
                "Cancels the cluster auto-stop by maximum cluster age (configured by --stop-max-age or --stop-expiration-time flags)",
            },
            {
              name: "--no-stop-max-idle",
              description:
                "Cancels the cluster auto-stop by cluster idle duration (configured by --stop-max-idle flag)",
            },
            {
              name: "--num-preemptible-workers",
              description:
                "(DEPRECATED) The new number of preemptible worker nodes in the cluster",
              hidden: true,
              deprecated: true,
              args: {
                name: "NUM_PREEMPTIBLE_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--num-secondary-workers",
              description:
                "The new number of secondary worker nodes in the cluster",
              args: {
                name: "NUM_SECONDARY_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--num-workers",
              description: "The new number of worker nodes in the cluster",
              args: {
                name: "NUM_WORKERS",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
            optRegion3,
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
              name: "--remove-user-mappings",
              description:
                "List of user-to-service-account mappings to remove from the current mappings. If a mapping does not exist, it is ignored",
              args: {
                name: "KEY",
                description: "List",
              },
            },
            {
              name: "--stop-expiration-time",
              description:
                'The time when the cluster will be auto-stopped, such as "2017-08-29T18:52:51.142Z". See $ gcloud topic datetimes for information on time formats',
              args: {
                name: "STOP_EXPIRATION_TIME",
              },
            },
            {
              name: "--stop-max-age",
              description:
                'The lifespan of the cluster, with auto-stop upon completion, such as "2h" or "1d". See $ gcloud topic datetimes for information on duration formats',
              args: {
                name: "STOP_MAX_AGE",
              },
            },
            {
              name: "--stop-max-idle",
              description:
                'The duration after the last job completes to auto-stop the cluster, such as "2h" or "1d". See $ gcloud topic datetimes for information on duration formats',
              args: {
                name: "STOP_MAX_IDLE",
              },
            },
            optTimeout,
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
      name: "jobs",
      description: "Submit and manage Dataproc jobs",
      subcommands: [
        {
          name: "delete",
          description: "Delete the record of an inactive job",
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
            optRegion4,
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
          name: "describe",
          description: "View the details of a job",
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
            optRegion4,
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
          name: "get-iam-policy",
          description: "Get IAM policy for a job",
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
            optPageSize2,
            optProject,
            optQuiet,
            optRegion4,
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
          name: "kill",
          description: "Kill an active job",
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
            optRegion4,
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
          description: "List jobs in a project",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--cluster",
              description: "Restrict to the jobs of this Dataproc cluster",
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
            optRegion7,
            optSortBy,
            {
              name: "--state-filter",
              description:
                "Filter by job state. _STATE_FILTER_ must be one of: *active*, *inactive*",
              args: {
                name: "STATE_FILTER",
                description: "String",
                suggestions: ["active", "inactive"],
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "set-iam-policy",
          description: "Set IAM policy for a job",
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
            optRegion4,
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
          name: "submit",
          description: "Submit Dataproc jobs to execute on a cluster",
          subcommands: [
            {
              name: "flink",
              description: "Submit a Flink job to a cluster",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync2,
                optBillingProject,
                optBucket,
                optClass,
                optCluster,
                optClusterLabels,
                optConfiguration,
                optDriverLogLevels4,
                optDriverRequiredMemoryMb,
                optDriverRequiredVcores,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optId,
                optImpersonateServiceAccount,
                optJar,
                {
                  name: "--jars",
                  description:
                    "Comma-separated list of jar files to provide to the task manager classpaths",
                  args: {
                    name: "JAR",
                    description: "List",
                  },
                },
                optLabels,
                optLogHttp,
                optMaxFailuresPerHour,
                optMaxFailuresTotal,
                optNoAsync2,
                optProject,
                {
                  name: "--properties",
                  description:
                    "List of key=value pairs to configure Flink. For a list of available properties, see: https://nightlies.apache.org/flink/flink-docs-master/docs/deployment/config/",
                  args: {
                    name: "PROPERTY=VALUE",
                    description: "Dict",
                  },
                },
                optPropertiesFile,
                optQuiet,
                optRegion7,
                {
                  name: "--savepoint",
                  description:
                    "HCFS URI of the savepoint that is used to refer to the state of the previously stopped job. The new job will resume previous state from there",
                  args: {
                    name: "SAVEPOINT",
                    description: "String",
                  },
                },
                optTraceToken,
                optTtl2,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "JOB_ARGS",
                description: "The job arguments to pass",
                isVariadic: true,
                isOptional: true,
              },
            },
            {
              name: "hadoop",
              description: "Submit a Hadoop job to a cluster",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--archives",
                  description:
                    "Comma separated list of archives to be provided to the job. must be one of the following file formats: .zip, .tar, .tar.gz, or .tgz",
                  args: {
                    name: "ARCHIVE",
                    description: "List",
                  },
                },
                optAsync2,
                optBillingProject,
                optBucket,
                optClass,
                optCluster,
                optClusterLabels,
                optConfiguration,
                optDriverLogLevels,
                optDriverRequiredMemoryMb,
                optDriverRequiredVcores,
                {
                  name: "--files",
                  description:
                    "Comma separated list of file paths to be provided to the job. A file path can either be a path to a local file or a path to a file already in a Cloud Storage bucket",
                  args: {
                    name: "FILE",
                    description: "List",
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
                optId,
                optImpersonateServiceAccount,
                optJar,
                {
                  name: "--jars",
                  description:
                    "Comma separated list of jar files to be provided to the MR and driver classpaths",
                  args: {
                    name: "JAR",
                    description: "List",
                  },
                },
                optLabels,
                optLogHttp,
                optMaxFailuresPerHour,
                optMaxFailuresTotal,
                optNoAsync2,
                optProject,
                {
                  name: "--properties",
                  description: "A list of key value pairs to configure Hadoop",
                  args: {
                    name: "PROPERTY=VALUE",
                    description: "Dict",
                  },
                },
                optPropertiesFile,
                optQuiet,
                optRegion7,
                optTraceToken,
                optTtl2,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "JOB_ARGS",
                description: "The arguments to pass to the driver",
                isVariadic: true,
                isOptional: true,
              },
            },
            {
              name: "hive",
              description: "Submit a Hive job to a cluster",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync2,
                optBillingProject,
                optBucket,
                optCluster,
                optClusterLabels,
                optConfiguration,
                optContinueOnFailure2,
                optDriverRequiredMemoryMb,
                optDriverRequiredVcores,
                {
                  name: ["--execute", "-e"],
                  description: "A Hive query to execute as part of the job",
                  args: {
                    name: "QUERY",
                    description: "String",
                  },
                },
                {
                  name: ["--file", "-f"],
                  description:
                    "HCFS URI of file containing Hive script to execute as the job",
                  args: {
                    name: "FILE",
                    description: "String",
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
                optId,
                optImpersonateServiceAccount,
                {
                  name: "--jars",
                  description:
                    "Comma separated list of jar files to be provided to the Hive and MR. May contain UDFs",
                  args: {
                    name: "JAR",
                    description: "List",
                  },
                },
                optLabels,
                optLogHttp,
                optMaxFailuresPerHour,
                optMaxFailuresTotal,
                optNoAsync2,
                optNoContinueOnFailure2,
                optParams,
                optProject,
                optProperties,
                optPropertiesFile,
                optQuiet,
                optRegion7,
                optTraceToken,
                optTtl2,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "pig",
              description: "Submit a Pig job to a cluster",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync2,
                optBillingProject,
                optBucket,
                optCluster,
                optClusterLabels,
                optConfiguration,
                optContinueOnFailure2,
                optDriverLogLevels,
                optDriverRequiredMemoryMb,
                optDriverRequiredVcores,
                {
                  name: ["--execute", "-e"],
                  description: "A Pig query to execute as part of the job",
                  args: {
                    name: "QUERY",
                    description: "String",
                  },
                },
                {
                  name: ["--file", "-f"],
                  description:
                    "HCFS URI of file containing Pig script to execute as the job",
                  args: {
                    name: "FILE",
                    description: "String",
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
                optId,
                optImpersonateServiceAccount,
                {
                  name: "--jars",
                  description:
                    "Comma separated list of jar files to be provided to Pig and MR. May contain UDFs",
                  args: {
                    name: "JAR",
                    description: "List",
                  },
                },
                optLabels,
                optLogHttp,
                optMaxFailuresPerHour,
                optMaxFailuresTotal,
                optNoAsync2,
                optNoContinueOnFailure2,
                {
                  name: "--params",
                  description:
                    "A list of key value pairs to set variables in the Pig queries",
                  args: {
                    name: "PARAM=VALUE",
                    description: "Dict",
                  },
                },
                optProject,
                {
                  name: "--properties",
                  description: "A list of key value pairs to configure Pig",
                  args: {
                    name: "PROPERTY=VALUE",
                    description: "Dict",
                  },
                },
                optPropertiesFile,
                optQuiet,
                optRegion7,
                optTraceToken,
                optTtl2,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "presto",
              description: "Submit a Presto job to a cluster",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync2,
                optBillingProject,
                optBucket,
                {
                  name: "--client-tags",
                  description:
                    "A list of Presto client tags to attach to this query",
                  args: {
                    name: "CLIENT_TAG",
                    description: "List",
                  },
                },
                optCluster,
                optClusterLabels,
                optConfiguration,
                optContinueOnFailure,
                optDriverLogLevels2,
                optDriverRequiredMemoryMb,
                optDriverRequiredVcores,
                {
                  name: ["--execute", "-e"],
                  description: "A Presto query to execute",
                  args: {
                    name: "QUERY",
                    description: "String",
                  },
                },
                {
                  name: ["--file", "-f"],
                  description:
                    "HCFS URI of file containing the Presto script to execute",
                  args: {
                    name: "FILE",
                    description: "String",
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
                optId,
                optImpersonateServiceAccount,
                optLabels,
                optLogHttp,
                optMaxFailuresPerHour,
                optMaxFailuresTotal,
                optNoAsync2,
                optNoContinueOnFailure,
                optProject,
                {
                  name: "--properties",
                  description:
                    "A list of key value pairs to set Presto session properties",
                  args: {
                    name: "PARAM=VALUE",
                    description: "Dict",
                  },
                },
                optPropertiesFile,
                {
                  name: "--query-output-format",
                  description:
                    "The query output display format. See the Presto documentation for supported output formats",
                  args: {
                    name: "QUERY_OUTPUT_FORMAT",
                    description: "String",
                  },
                },
                optQuiet,
                optRegion7,
                optTraceToken,
                optTtl2,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "pyflink",
              description: "Submit a PyFlink job to a cluster",
              hidden: true,
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--archives",
                  description:
                    "Comma-separated list of archives to be extracted into the working directory of the python UDF worker. Must be one of the following file formats: .zip, .tar, .tar.gz, or .tgz",
                  args: {
                    name: "ARCHIVE",
                    description: "List",
                  },
                },
                optAsync2,
                optBillingProject,
                optBucket,
                optCluster,
                optClusterLabels,
                optConfiguration,
                {
                  name: "--driver-log-levels",
                  description:
                    "List of key=value pairs to configure driver logging, where the key is a package and the value is the log4j log level. For example: root=FATAL,com.example=INFO",
                  args: {
                    name: "PACKAGE=LEVEL",
                    description: "Dict",
                  },
                },
                optDriverRequiredMemoryMb,
                optDriverRequiredVcores,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optId,
                optImpersonateServiceAccount,
                {
                  name: "--jars",
                  description:
                    "Comma-separated list of jar files to provide to the task manager classpaths",
                  args: {
                    name: "JAR",
                    description: "List",
                  },
                },
                optLabels,
                optLogHttp,
                optMaxFailuresPerHour,
                optMaxFailuresTotal,
                optNoAsync2,
                optProject,
                {
                  name: "--properties",
                  description:
                    "List of key=value pairs to configure PyFlink. For a list of available properties, see: https://nightlies.apache.org/flink/flink-docs-master/docs/deployment/config/",
                  args: {
                    name: "PROPERTY=VALUE",
                    description: "Dict",
                  },
                },
                optPropertiesFile,
                {
                  name: "--py-files",
                  description:
                    "Comma-separated list of custom Python files to provide to the job. Supports standard resource file suffixes, such as .py, .egg, .zip and .whl. This also supports passing a directory",
                  args: {
                    name: "PY_FILE",
                    description: "List",
                    template: "filepaths",
                  },
                },
                {
                  name: "--py-module",
                  description:
                    "Python module with program entry point. This option should be used with --pyFiles",
                  args: {
                    name: "PY_MODULE",
                    description: "String",
                  },
                },
                {
                  name: "--py-requirements",
                  description:
                    "A requirements.txt file that defines third-party dependencies. These dependencies are installed and added to the PYTHONPATH of the python UDF worker",
                  args: {
                    name: "PY_REQUIREMENTS",
                    description: "String",
                  },
                },
                optQuiet,
                optRegion7,
                {
                  name: "--savepoint",
                  description:
                    "HCFS URI of the savepoint that contains the saved job progress",
                  args: {
                    name: "SAVEPOINT",
                    description: "String",
                  },
                },
                optTraceToken,
                optTtl2,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: [
                {
                  name: "PY_FILE",
                  description: "HCFS URI of the main Python file",
                  template: "filepaths",
                },
                {
                  name: "JOB_ARGS",
                  description: "The job arguments to pass",
                  isVariadic: true,
                  isOptional: true,
                },
              ],
            },
            {
              name: "pyspark",
              description: "Submit a PySpark job to a cluster",
              options: [
                optAccessTokenFile,
                optAccount,
                optArchives2,
                optAsync2,
                optBillingProject,
                optBucket,
                optCluster,
                optClusterLabels,
                optConfiguration,
                optDriverLogLevels3,
                optDriverRequiredMemoryMb,
                optDriverRequiredVcores,
                optFiles,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optId,
                optImpersonateServiceAccount,
                optJars,
                optLabels,
                optLogHttp,
                optMaxFailuresPerHour,
                optMaxFailuresTotal,
                optNoAsync2,
                optProject,
                {
                  name: "--properties",
                  description:
                    "List of key value pairs to configure PySpark. For a list of available properties, see: https://spark.apache.org/docs/latest/configuration.html#available-properties",
                  args: {
                    name: "PROPERTY=VALUE",
                    description: "Dict",
                  },
                },
                optPropertiesFile,
                {
                  name: "--py-files",
                  description:
                    'Comma separated list of Python files to be provided to the job. Must be one of the following file formats ".py, .zip, or .egg"',
                  args: {
                    name: "PY_FILE",
                    description: "List",
                    template: "filepaths",
                  },
                },
                optQuiet,
                optRegion7,
                optTraceToken,
                optTtl2,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: [
                {
                  name: "PY_FILE",
                  description: "Main .py file to run as the driver",
                  template: "filepaths",
                },
                {
                  name: "JOB_ARGS",
                  description: "Arguments to pass to the driver",
                  isVariadic: true,
                  isOptional: true,
                },
              ],
            },
            {
              name: "spark",
              description: "Submit a Spark job to a cluster",
              options: [
                optAccessTokenFile,
                optAccount,
                optArchives2,
                optAsync2,
                optBillingProject,
                optBucket,
                optClass,
                optCluster,
                optClusterLabels,
                optConfiguration,
                optDriverLogLevels4,
                optDriverRequiredMemoryMb,
                optDriverRequiredVcores,
                optFiles,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optId,
                optImpersonateServiceAccount,
                optJar,
                optJars,
                optLabels,
                optLogHttp,
                optMaxFailuresPerHour,
                optMaxFailuresTotal,
                optNoAsync2,
                optProject,
                {
                  name: "--properties",
                  description:
                    "List of key value pairs to configure Spark. For a list of available properties, see: https://spark.apache.org/docs/latest/configuration.html#available-properties",
                  args: {
                    name: "PROPERTY=VALUE",
                    description: "Dict",
                  },
                },
                optPropertiesFile,
                optQuiet,
                optRegion7,
                optTraceToken,
                optTtl2,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "JOB_ARGS",
                description: "Arguments to pass to the driver",
                isVariadic: true,
                isOptional: true,
              },
            },
            {
              name: "spark-r",
              description: "Submit a SparkR job to a cluster",
              options: [
                optAccessTokenFile,
                optAccount,
                optArchives2,
                optAsync2,
                optBillingProject,
                optBucket,
                optCluster,
                optClusterLabels,
                optConfiguration,
                optDriverLogLevels3,
                optDriverRequiredMemoryMb,
                optDriverRequiredVcores,
                optFiles,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optId,
                optImpersonateServiceAccount,
                optLabels,
                optLogHttp,
                optMaxFailuresPerHour,
                optMaxFailuresTotal,
                optNoAsync2,
                optProject,
                {
                  name: "--properties",
                  description:
                    "List of key value pairs to configure SparkR. For a list of available properties, see: https://spark.apache.org/docs/latest/configuration.html#available-properties",
                  args: {
                    name: "PROPERTY=VALUE",
                    description: "Dict",
                  },
                },
                optPropertiesFile,
                optQuiet,
                optRegion7,
                optTraceToken,
                optTtl2,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: [
                {
                  name: "R_FILE",
                  description: "Main .R file to run as the driver",
                  template: "filepaths",
                },
                {
                  name: "JOB_ARGS",
                  description: "Arguments to pass to the driver",
                  isVariadic: true,
                  isOptional: true,
                },
              ],
            },
            {
              name: "spark-sql",
              description: "Submit a Spark SQL job to a cluster",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync2,
                optBillingProject,
                optBucket,
                optCluster,
                optClusterLabels,
                optConfiguration,
                optDriverLogLevels,
                optDriverRequiredMemoryMb,
                optDriverRequiredVcores,
                {
                  name: ["--execute", "-e"],
                  description:
                    "A Spark SQL query to execute as part of the job",
                  args: {
                    name: "QUERY",
                    description: "String",
                  },
                },
                {
                  name: ["--file", "-f"],
                  description:
                    "HCFS URI of file containing Spark SQL script to execute as the job",
                  args: {
                    name: "FILE",
                    description: "String",
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
                optId,
                optImpersonateServiceAccount,
                {
                  name: "--jars",
                  description:
                    "Comma separated list of jar files to be provided to the executor and driver classpaths. May contain UDFs",
                  args: {
                    name: "JAR",
                    description: "List",
                  },
                },
                optLabels,
                optLogHttp,
                optMaxFailuresPerHour,
                optMaxFailuresTotal,
                optNoAsync2,
                optParams,
                optProject,
                optProperties,
                optPropertiesFile,
                optQuiet,
                optRegion7,
                optTraceToken,
                optTtl2,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "trino",
              description: "Submit a Trino job to a cluster",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync2,
                optBillingProject,
                optBucket,
                {
                  name: "--client-tags",
                  description:
                    "A list of Trino client tags to attach to this query",
                  args: {
                    name: "CLIENT_TAG",
                    description: "List",
                  },
                },
                optCluster,
                optClusterLabels,
                optConfiguration,
                optContinueOnFailure,
                optDriverLogLevels2,
                optDriverRequiredMemoryMb,
                optDriverRequiredVcores,
                {
                  name: ["--execute", "-e"],
                  description: "A Trino query to execute",
                  args: {
                    name: "QUERY",
                    description: "String",
                  },
                },
                {
                  name: ["--file", "-f"],
                  description:
                    "HCFS URI of file containing the Trino script to execute",
                  args: {
                    name: "FILE",
                    description: "String",
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
                optId,
                optImpersonateServiceAccount,
                optLabels,
                optLogHttp,
                optMaxFailuresPerHour,
                optMaxFailuresTotal,
                optNoAsync2,
                optNoContinueOnFailure,
                optProject,
                {
                  name: "--properties",
                  description:
                    "A list of key value pairs to set Trino session properties",
                  args: {
                    name: "PARAM=VALUE",
                    description: "Dict",
                  },
                },
                optPropertiesFile,
                {
                  name: "--query-output-format",
                  description:
                    "The query output display format. See the Trino documentation for supported output formats",
                  args: {
                    name: "QUERY_OUTPUT_FORMAT",
                    description: "String",
                  },
                },
                optQuiet,
                optRegion7,
                optTraceToken,
                optTtl2,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
          ],
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync2,
            optBillingProject,
            optBucket,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optId,
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync2,
            optProject,
            optQuiet,
            optRegion7,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Update the labels for a job",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
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
            optLogHttp,
            {
              name: "--no-clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion4,
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
          ],
          args: {
            name: "JOB",
            description:
              "ID of the job or fully qualified identifier for the job",
          },
        },
        {
          name: "wait",
          description:
            "View the output of a job as it runs or after it completes",
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
            optRegion4,
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
      name: "node-groups",
      description: "Manage Dataproc node groups",
      subcommands: [
        {
          name: "describe",
          description: "Describe the node group",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--cluster",
              description: "The Cluster name",
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
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--region",
              description:
                "Dataproc region for the node_group. Each Dataproc region constitutes an independent resource namespace constrained to deploying instances into Compute Engine zones inside the region. Overrides the default `dataproc/region` property value for this command invocation",
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
            name: "NODE_GROUP",
            description:
              "ID of the node_group or fully qualified identifier for the node_group",
          },
        },
        {
          name: "resize",
          description: "Resize the number of nodes in the node group",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--cluster",
              description: "The Cluster name",
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
              name: "--graceful-decommission-timeout",
              description:
                "Graceful decommission timeout for a node group scale-down resize",
              args: {
                name: "GRACEFUL_DECOMMISSION_TIMEOUT",
                description: "String",
              },
            },
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
              description:
                "Dataproc region for the node_group. Each Dataproc region constitutes an independent resource namespace constrained to deploying instances into Compute Engine zones inside the region. Overrides the default `dataproc/region` property value for this command invocation",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            {
              name: "--size",
              description: "New size for a node group",
              priority: 100,
              args: {
                name: "SIZE",
                description: "Int",
              },
            },
            optTimeout,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "NODE_GROUP",
            description:
              "ID of the node_group or fully qualified identifier for the node_group",
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
      name: "operations",
      description: "View and manage Dataproc operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel an active operation",
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
            optRegion5,
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
          name: "delete",
          description: "Delete the record of an inactive operation",
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
            optRegion5,
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
          name: "describe",
          description: "View the details of an operation",
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
            optRegion5,
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
          name: "get-iam-policy",
          description: "Get IAM policy for an operation",
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
            optPageSize2,
            optProject,
            optQuiet,
            optRegion5,
            optSortBy,
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
          description: "View the list of all operations",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--cluster",
              description:
                "Restrict to the operations of this Dataproc cluster. This flag is ignored when --filter is specified. The equivalent term in a --filter expression is: `clusterName = myclustername`",
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
            optRegion7,
            optSortBy,
            {
              name: "--state-filter",
              description:
                "Filter by cluster state. This flag is ignored when --filter is specified. The equivalent term in a --filter expression is: `status.state = ACTIVE`. _STATE_FILTER_ must be one of: *active*, *inactive*",
              args: {
                name: "STATE_FILTER",
                description: "String",
                suggestions: ["active", "inactive"],
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "set-iam-policy",
          description: "Set IAM policy for an operation",
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
            optRegion5,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "OPERATION",
              description:
                "ID of the operation or fully qualified identifier for the operation",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy",
              template: "filepaths",
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
      name: "workflow-templates",
      description: "Create and manage Dataproc workflow templates",
      subcommands: [
        {
          name: "add-job",
          description: "Add Dataproc jobs to workflow template",
          subcommands: [
            {
              name: "hadoop",
              description: "Add a hadoop job to the workflow template",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--archives",
                  description:
                    "Comma separated list of archives to be provided to the job. must be one of the following file formats: .zip, .tar, .tar.gz, or .tgz",
                  args: {
                    name: "ARCHIVE",
                    description: "List",
                  },
                },
                optBillingProject,
                optClass,
                optConfiguration,
                optDriverLogLevels,
                {
                  name: "--files",
                  description:
                    "Comma separated list of file paths to be provided to the job. A file path can either be a path to a local file or a path to a file already in a Cloud Storage bucket",
                  args: {
                    name: "FILE",
                    description: "List",
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
                optImpersonateServiceAccount,
                optJar,
                {
                  name: "--jars",
                  description:
                    "Comma separated list of jar files to be provided to the MR and driver classpaths",
                  args: {
                    name: "JAR",
                    description: "List",
                  },
                },
                optLabels,
                optLogHttp,
                optProject,
                {
                  name: "--properties",
                  description: "A list of key value pairs to configure Hadoop",
                  args: {
                    name: "PROPERTY=VALUE",
                    description: "Dict",
                  },
                },
                optPropertiesFile,
                optQuiet,
                optRegion6,
                optStartAfter,
                optStepId,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkflowTemplate,
              ],
              args: {
                name: "JOB_ARGS",
                description: "The arguments to pass to the driver",
                isVariadic: true,
                isOptional: true,
              },
            },
            {
              name: "hive",
              description: "Add a Hive job to the workflow template",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optContinueOnFailure2,
                {
                  name: ["--execute", "-e"],
                  description: "A Hive query to execute as part of the job",
                  args: {
                    name: "QUERY",
                    description: "String",
                  },
                },
                {
                  name: ["--file", "-f"],
                  description:
                    "HCFS URI of file containing Hive script to execute as the job",
                  args: {
                    name: "FILE",
                    description: "String",
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
                optImpersonateServiceAccount,
                {
                  name: "--jars",
                  description:
                    "Comma separated list of jar files to be provided to the Hive and MR. May contain UDFs",
                  args: {
                    name: "JAR",
                    description: "List",
                  },
                },
                optLabels,
                optLogHttp,
                optNoContinueOnFailure2,
                optParams,
                optProject,
                optProperties,
                optPropertiesFile,
                optQuiet,
                optRegion6,
                optStartAfter,
                optStepId,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkflowTemplate,
              ],
            },
            {
              name: "pig",
              description: "Add a Pig job to the workflow template",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optContinueOnFailure2,
                optDriverLogLevels,
                {
                  name: ["--execute", "-e"],
                  description: "A Pig query to execute as part of the job",
                  args: {
                    name: "QUERY",
                    description: "String",
                  },
                },
                {
                  name: ["--file", "-f"],
                  description:
                    "HCFS URI of file containing Pig script to execute as the job",
                  args: {
                    name: "FILE",
                    description: "String",
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
                optImpersonateServiceAccount,
                {
                  name: "--jars",
                  description:
                    "Comma separated list of jar files to be provided to Pig and MR. May contain UDFs",
                  args: {
                    name: "JAR",
                    description: "List",
                  },
                },
                optLabels,
                optLogHttp,
                optNoContinueOnFailure2,
                {
                  name: "--params",
                  description:
                    "A list of key value pairs to set variables in the Pig queries",
                  args: {
                    name: "PARAM=VALUE",
                    description: "Dict",
                  },
                },
                optProject,
                {
                  name: "--properties",
                  description: "A list of key value pairs to configure Pig",
                  args: {
                    name: "PROPERTY=VALUE",
                    description: "Dict",
                  },
                },
                optPropertiesFile,
                optQuiet,
                optRegion6,
                optStartAfter,
                optStepId,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkflowTemplate,
              ],
            },
            {
              name: "presto",
              description: "Add a Presto job to the workflow template",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--client-tags",
                  description:
                    "A list of Presto client tags to attach to this query",
                  args: {
                    name: "CLIENT_TAG",
                    description: "List",
                  },
                },
                optConfiguration,
                optContinueOnFailure,
                optDriverLogLevels2,
                {
                  name: ["--execute", "-e"],
                  description: "A Presto query to execute",
                  args: {
                    name: "QUERY",
                    description: "String",
                  },
                },
                {
                  name: ["--file", "-f"],
                  description:
                    "HCFS URI of file containing the Presto script to execute",
                  args: {
                    name: "FILE",
                    description: "String",
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
                optImpersonateServiceAccount,
                optLabels,
                optLogHttp,
                optNoContinueOnFailure,
                optProject,
                {
                  name: "--properties",
                  description:
                    "A list of key value pairs to set Presto session properties",
                  args: {
                    name: "PARAM=VALUE",
                    description: "Dict",
                  },
                },
                optPropertiesFile,
                {
                  name: "--query-output-format",
                  description:
                    "The query output display format. See the Presto documentation for supported output formats",
                  args: {
                    name: "QUERY_OUTPUT_FORMAT",
                    description: "String",
                  },
                },
                optQuiet,
                optRegion6,
                optStartAfter,
                optStepId,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkflowTemplate,
              ],
            },
            {
              name: "pyspark",
              description: "Add a PySpark job to the workflow template",
              options: [
                optAccessTokenFile,
                optAccount,
                optArchives2,
                optBillingProject,
                optConfiguration,
                optDriverLogLevels3,
                optFiles,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optJars,
                optLabels,
                optLogHttp,
                optProject,
                {
                  name: "--properties",
                  description:
                    "List of key value pairs to configure PySpark. For a list of available properties, see: https://spark.apache.org/docs/latest/configuration.html#available-properties",
                  args: {
                    name: "PROPERTY=VALUE",
                    description: "Dict",
                  },
                },
                optPropertiesFile,
                {
                  name: "--py-files",
                  description:
                    'Comma separated list of Python files to be provided to the job. Must be one of the following file formats ".py, .zip, or .egg"',
                  args: {
                    name: "PY_FILE",
                    description: "List",
                    template: "filepaths",
                  },
                },
                optQuiet,
                optRegion6,
                optStartAfter,
                optStepId,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkflowTemplate,
              ],
              args: [
                {
                  name: "PY_FILE",
                  description: "Main .py file to run as the driver",
                  template: "filepaths",
                },
                {
                  name: "JOB_ARGS",
                  description: "Arguments to pass to the driver",
                  isVariadic: true,
                  isOptional: true,
                },
              ],
            },
            {
              name: "spark",
              description: "Add a Spark job to the workflow template",
              options: [
                optAccessTokenFile,
                optAccount,
                optArchives2,
                optBillingProject,
                optClass,
                optConfiguration,
                optDriverLogLevels4,
                optFiles,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optJar,
                optJars,
                optLabels,
                optLogHttp,
                optProject,
                {
                  name: "--properties",
                  description:
                    "List of key value pairs to configure Spark. For a list of available properties, see: https://spark.apache.org/docs/latest/configuration.html#available-properties",
                  args: {
                    name: "PROPERTY=VALUE",
                    description: "Dict",
                  },
                },
                optPropertiesFile,
                optQuiet,
                optRegion6,
                optStartAfter,
                optStepId,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkflowTemplate,
              ],
              args: {
                name: "JOB_ARGS",
                description: "Arguments to pass to the driver",
                isVariadic: true,
                isOptional: true,
              },
            },
            {
              name: "spark-r",
              description: "Add a SparkR job to the workflow template",
              options: [
                optAccessTokenFile,
                optAccount,
                optArchives2,
                optBillingProject,
                optConfiguration,
                optDriverLogLevels3,
                optFiles,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLabels,
                optLogHttp,
                optProject,
                {
                  name: "--properties",
                  description:
                    "List of key value pairs to configure SparkR. For a list of available properties, see: https://spark.apache.org/docs/latest/configuration.html#available-properties",
                  args: {
                    name: "PROPERTY=VALUE",
                    description: "Dict",
                  },
                },
                optPropertiesFile,
                optQuiet,
                optRegion6,
                optStartAfter,
                optStepId,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkflowTemplate,
              ],
              args: [
                {
                  name: "R_FILE",
                  description: "Main .R file to run as the driver",
                  template: "filepaths",
                },
                {
                  name: "JOB_ARGS",
                  description: "Arguments to pass to the driver",
                  isVariadic: true,
                  isOptional: true,
                },
              ],
            },
            {
              name: "spark-sql",
              description: "Add a SparkSql job to the workflow template",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optDriverLogLevels,
                {
                  name: ["--execute", "-e"],
                  description:
                    "A Spark SQL query to execute as part of the job",
                  args: {
                    name: "QUERY",
                    description: "String",
                  },
                },
                {
                  name: ["--file", "-f"],
                  description:
                    "HCFS URI of file containing Spark SQL script to execute as the job",
                  args: {
                    name: "FILE",
                    description: "String",
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
                optImpersonateServiceAccount,
                {
                  name: "--jars",
                  description:
                    "Comma separated list of jar files to be provided to the executor and driver classpaths. May contain UDFs",
                  args: {
                    name: "JAR",
                    description: "List",
                  },
                },
                optLabels,
                optLogHttp,
                optParams,
                optProject,
                optProperties,
                optPropertiesFile,
                optQuiet,
                optRegion6,
                optStartAfter,
                optStepId,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkflowTemplate,
              ],
            },
            {
              name: "trino",
              description: "Add a Trino job to the workflow template",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--client-tags",
                  description:
                    "A list of Trino client tags to attach to this query",
                  args: {
                    name: "CLIENT_TAG",
                    description: "List",
                  },
                },
                optConfiguration,
                optContinueOnFailure,
                optDriverLogLevels2,
                {
                  name: ["--execute", "-e"],
                  description: "A Trino query to execute",
                  args: {
                    name: "QUERY",
                    description: "String",
                  },
                },
                {
                  name: ["--file", "-f"],
                  description:
                    "HCFS URI of file containing the Trino script to execute",
                  args: {
                    name: "FILE",
                    description: "String",
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
                optImpersonateServiceAccount,
                optLabels,
                optLogHttp,
                optNoContinueOnFailure,
                optProject,
                {
                  name: "--properties",
                  description:
                    "A list of key value pairs to set Trino session properties",
                  args: {
                    name: "PARAM=VALUE",
                    description: "Dict",
                  },
                },
                optPropertiesFile,
                {
                  name: "--query-output-format",
                  description:
                    "The query output display format. See the Trino documentation for supported output formats",
                  args: {
                    name: "QUERY_OUTPUT_FORMAT",
                    description: "String",
                  },
                },
                optQuiet,
                optRegion6,
                optStartAfter,
                optStepId,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkflowTemplate,
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
          name: "create",
          description: "Create a workflow template",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--dag-timeout",
              description:
                'The duration for which a DAG of jobs can run before being auto-cancelled, such as "10m" or "16h". See $ gcloud topic datetimes for information on duration formats',
              args: {
                name: "DAG_TIMEOUT",
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
                "The KMS key used to encrypt sensitive data in the workflow template",
              args: {
                name: "KMS_KEY",
                description: "String",
              },
            },
            optLabels,
            optLogHttp,
            optProject,
            optQuiet,
            optRegion6,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template",
          },
        },
        {
          name: "delete",
          description: "Delete a workflow template",
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
            optRegion6,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template",
          },
        },
        {
          name: "describe",
          description: "Describe a workflow template",
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
            optRegion6,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template",
          },
        },
        {
          name: "export",
          description: "Export a workflow template",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDestination,
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
            optRegion6,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get IAM policy for a workflow template",
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
            optRegion6,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template",
          },
        },
        {
          name: "import",
          description: "Import a workflow template",
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
            optRegion6,
            optSource,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template",
          },
        },
        {
          name: "instantiate",
          description: "Instantiate a workflow template",
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
            {
              name: "--parameters",
              description:
                "A map from parameter names to values that should be used for those parameters. A value must be provided for every configured parameter. Parameters can be configured when creating or updating a workflow template",
              args: {
                name: "PARAM=VALUE",
                description: "Dict",
              },
            },
            optProject,
            optQuiet,
            optRegion6,
            optTimeout,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template",
          },
        },
        {
          name: "instantiate-from-file",
          description: "Instantiate a workflow template from a file",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync2,
            optBillingProject,
            optConfiguration,
            {
              name: "--file",
              description:
                "The YAML file containing the workflow template to run",
              priority: 100,
              args: {
                name: "FILE",
                description: "String",
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
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync2,
            optProject,
            optQuiet,
            optRegion7,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "list",
          description: "List workflow templates",
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
            optRegion7,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "remove-dag-timeout",
          description: "Remove DAG timeout from a workflow template",
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
            optRegion6,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template",
          },
        },
        {
          name: "remove-job",
          description: "Remove a job from workflow template",
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
            optRegion6,
            {
              name: "--step-id",
              description:
                "The step ID of the job in the workflow template to remove",
              args: {
                name: "STEP_ID",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template",
          },
        },
        {
          name: "set-cluster-selector",
          description: "Set cluster selector for the workflow template",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--cluster-labels",
              description: "A list of label KEY=VALUE pairs to add",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
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
            optLogHttp,
            optProject,
            optQuiet,
            optRegion6,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template",
          },
        },
        {
          name: "set-dag-timeout",
          description: "Set DAG timeout on a workflow template",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--dag-timeout",
              description:
                'The duration for which a DAG of jobs can run before being auto-cancelled, such as "10m" or "16h". See $ gcloud topic datetimes for information on duration formats',
              priority: 100,
              args: {
                name: "DAG_TIMEOUT",
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
            optProject,
            optQuiet,
            optRegion6,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set IAM policy for a template",
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
            optRegion6,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "TEMPLATE",
              description:
                "ID of the template or fully qualified identifier for the template",
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
          name: "set-managed-cluster",
          description: "Set a managed cluster for the workflow template",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--auto-zone-exclude-zones",
              description:
                "A comma-separated list of compute zones (such as `us-central1-a`) to exclude when [Dataproc Auto Zone placement](https://docs.cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone) picks the zone for the cluster",
              args: {
                name: "ZONE",
                description: "List",
              },
            },
            optAutoscalingPolicy,
            optBillingProject,
            {
              name: "--bucket",
              description:
                "The Google Cloud Storage bucket to use by default to stage job dependencies, miscellaneous config files, and job driver console output when using this cluster",
              args: {
                name: "BUCKET",
                description: "String",
              },
            },
            {
              name: "--cluster-name",
              description:
                "The name of the managed dataproc cluster. If unspecified, the workflow template ID will be used",
              args: {
                name: "CLUSTER_NAME",
                description: "String",
              },
            },
            {
              name: "--cluster-type",
              description:
                "The type of cluster. _TYPE_ must be one of: *standard*, *single-node*, *zero-scale*",
              args: {
                name: "TYPE",
                description: "String",
                suggestions: ["standard", "single-node", "zero-scale"],
              },
            },
            {
              name: "--confidential-compute",
              description:
                "Enables Confidential VM. See https://cloud.google.com/compute/confidential-vm/docs for more information. Note that Confidential VM can only be enabled when the machine types are N2D (https://cloud.google.com/compute/docs/machine-types#n2d_machine_types) and the image is SEV Compatible",
            },
            optConfiguration,
            {
              name: "--dataproc-metastore",
              description:
                'Specify the name of a Dataproc Metastore service to be used as an external metastore in the format: "projects/{project-id}/locations/{region}/services/{service-name}"',
              args: {
                name: "DATAPROC_METASTORE",
                description: "String",
              },
            },
            {
              name: "--enable-component-gateway",
              description:
                "Enable access to the web UIs of selected components on the cluster through the component gateway",
            },
            {
              name: "--enable-kerberos",
              description: "Enable Kerberos on the cluster",
            },
            {
              name: "--enable-node-groups",
              description:
                "Create cluster nodes using Dataproc NodeGroups. All the required VMs will be created using GCE MIG",
              hidden: true,
              args: {
                name: "ENABLE_NODE_GROUPS",
                description: "String",
              },
            },
            {
              name: "--enable-ssh",
              description: "Enable SSH access for the cluster",
              hidden: true,
            },
            {
              name: "--engine",
              description:
                "Cluster engine. _ENGINE_ must be one of: *default*, *lightning*",
              args: {
                name: "ENGINE",
                description: "String",
                suggestions: ["default", "lightning"],
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
              name: "--identity-config-file",
              description:
                "Path to a YAML (or JSON) file containing the configuration for Secure Multi-Tenancy on the cluster. The path can be a Cloud Storage URL (Example: 'gs://path/to/file') or a local file system path. If you pass \"-\" as the value of the flag the file content will be read from stdin",
              args: {
                name: "IDENTITY_CONFIG_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--image",
              description:
                "The custom image used to create the cluster. It can be the image name, the image URI, or the image family URI, which selects the latest image from the family",
              args: {
                name: "IMAGE",
                description: "String",
              },
            },
            {
              name: "--image-version",
              description:
                "The image version to use for the cluster. Defaults to the latest version",
              args: {
                name: "VERSION",
                description: "String",
              },
            },
            optImpersonateServiceAccount,
            {
              name: "--initialization-action-timeout",
              description:
                "The maximum duration of each initialization action. See $ gcloud topic datetimes for information on duration formats",
              args: {
                name: "TIMEOUT",
              },
            },
            {
              name: "--initialization-actions",
              description:
                "A list of Google Cloud Storage URIs of executables to run on each node in the cluster",
              args: {
                name: "CLOUD_STORAGE_URI",
                description: "List",
              },
            },
            {
              name: "--kerberos-config-file",
              description:
                "Path to a YAML (or JSON) file containing the configuration for Kerberos on the cluster. If you pass `-` as the value of the flag the file content will be read from stdin",
              args: {
                name: "KERBEROS_CONFIG_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--kerberos-kms-key",
              description:
                "ID of the key or fully qualified identifier for the key",
              priority: 100,
              args: {
                name: "KERBEROS_KMS_KEY",
                description: "String",
              },
            },
            {
              name: "--kerberos-kms-key-keyring",
              description: "The KMS keyring of the key",
              args: {
                name: "KERBEROS_KMS_KEY_KEYRING",
                description: "String",
              },
            },
            {
              name: "--kerberos-kms-key-location",
              description: "The Google Cloud location for the key",
              args: {
                name: "KERBEROS_KMS_KEY_LOCATION",
                description: "String",
              },
            },
            {
              name: "--kerberos-kms-key-project",
              description: "The Google Cloud project for the key",
              args: {
                name: "KERBEROS_KMS_KEY_PROJECT",
                description: "String",
              },
            },
            {
              name: "--kerberos-root-principal-password-uri",
              description:
                "Google Cloud Storage URI of a KMS encrypted file containing the root principal password. Must be a Cloud Storage URL beginning with 'gs://'",
              args: {
                name: "KERBEROS_ROOT_PRINCIPAL_PASSWORD_URI",
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
            optLabels,
            optLogHttp,
            {
              name: "--master-accelerator",
              description:
                "Attaches accelerators, such as GPUs, to the master instance(s)",
              args: {
                name: "type=TYPE,count=COUNT",
                description: "Dict",
              },
            },
            {
              name: "--master-attached-disks",
              description:
                "A list of disk configurations to attach to each instance in this group. Disk configurations are separated by semicolons. Each disk configuration is a comma-separated list of the following parameters",
              args: {
                name: "MASTER_ATTACHED_DISKS",
              },
            },
            {
              name: "--master-boot-disk-provisioned-iops",
              description:
                "Indicates the [IOPS](https://cloud.google.com/compute/docs/disks/hyperdisks#iops) to provision for the disk. This sets the limit for disk I/O operations per second. This is only supported if the bootdisk type is [hyperdisk-balanced](https://cloud.google.com/compute/docs/disks/hyperdisks)",
              args: {
                name: "MASTER_BOOT_DISK_PROVISIONED_IOPS",
                description: "Int",
              },
            },
            {
              name: "--master-boot-disk-provisioned-throughput",
              description:
                "Indicates the [throughput](https://cloud.google.com/compute/docs/disks/hyperdisks#throughput) to provision for the disk. This sets the limit for throughput in MiB per second. This is only supported if the bootdisk type is [hyperdisk-balanced](https://cloud.google.com/compute/docs/disks/hyperdisks)",
              args: {
                name: "MASTER_BOOT_DISK_PROVISIONED_THROUGHPUT",
                description: "Int",
              },
            },
            {
              name: "--master-boot-disk-size",
              description:
                "The size of the boot disk. The value must be a whole number followed by a size unit of ``KB'' for kilobyte, ``MB'' for megabyte, ``GB'' for gigabyte, or ``TB'' for terabyte. For example, `10GB` will produce a 10 gigabyte disk. The minimum boot disk size is 10 GB. Boot disk size must be a multiple of 1 GB",
              args: {
                name: "MASTER_BOOT_DISK_SIZE",
              },
            },
            {
              name: "--master-boot-disk-type",
              description:
                "The type of the boot disk. The value must be `pd-balanced`, `pd-ssd`, or `pd-standard`",
              args: {
                name: "MASTER_BOOT_DISK_TYPE",
                description: "String",
              },
            },
            {
              name: "--master-local-ssd-interface",
              description:
                "Interface to use to attach local SSDs to master node(s) in a cluster",
              args: {
                name: "MASTER_LOCAL_SSD_INTERFACE",
                description: "String",
              },
            },
            {
              name: "--master-machine-type",
              description:
                "The type of machine to use for the master. Defaults to server-specified",
              args: {
                name: "MASTER_MACHINE_TYPE",
                description: "String",
              },
            },
            {
              name: "--master-machine-types",
              description:
                'Types of machines with optional rank for master nodes to use. Defaults to server-specified.eg. --master-machine-types="type=e2-standard-8,type=t2d-standard-8,rank=0"',
              hidden: true,
              args: {
                name: "type=MACHINE_TYPE,type=MACHINE_TYPE...,rank=RANK",
              },
            },
            {
              name: "--master-min-cpu-platform",
              description:
                "When specified, the VM is scheduled on the host with a specified CPU architecture or a more recent CPU platform that's available in that zone. To list available CPU platforms in a zone, run:",
              args: {
                name: "PLATFORM",
                description: "String",
              },
            },
            {
              name: "--metadata",
              description:
                "Metadata to be made available to the guest operating system running on the instances",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--metric-overrides",
              description:
                "List of metrics that override the default metrics enabled for the metric sources. Any of the [available OSS metrics](https://cloud.google.com/dataproc/docs/guides/monitoring#available_oss_metrics) and all Spark metrics, can be listed for collection as a metric override. Override metric values are case sensitive, and must be provided, if appropriate, in CamelCase format, for example:",
              args: {
                name: "METRIC_SOURCE:INSTANCE:GROUP:METRIC",
                description: "List",
              },
            },
            {
              name: "--metric-overrides-file",
              description:
                "Path to a file containing list of Metrics that override the default metrics enabled for the metric sources. The path can be a Cloud Storage URL (example: `gs://path/to/file`) or a local file system path",
              args: {
                name: "METRIC_OVERRIDES_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--metric-sources",
              description:
                "Specifies a list of cluster [Metric Sources](https://cloud.google.com/dataproc/docs/guides/monitoring#available_oss_metrics) to collect custom metrics. _METRIC_SOURCE_ must be one of: *FLINK*, *HDFS*, *HIVEMETASTORE*, *HIVESERVER2*, *MONITORING_AGENT_DEFAULTS*, *SPARK*, *SPARK_HISTORY_SERVER*, *YARN*",
              priority: 100,
              args: {
                name: "METRIC_SOURCE",
                description: "List",
              },
            },
            {
              name: "--min-num-workers",
              description:
                "Minimum number of primary worker nodes to provision for cluster creation to succeed",
              args: {
                name: "MIN_NUM_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--min-secondary-worker-fraction",
              description:
                "Minimum fraction of secondary worker nodes required to create the cluster. If it is not met, cluster creation will fail. Must be a decimal value between 0 and 1. The number of required secondary workers is calculated by ceil(min-secondary-worker-fraction * num_secondary_workers). Defaults to 0.0001",
              args: {
                name: "MIN_SECONDARY_WORKER_FRACTION",
                description: "Float",
              },
            },
            {
              name: "--min-worker-fraction",
              description:
                "Minimum fraction of worker nodes required to create the cluster. If it is not met, cluster creation will fail. Must be a decimal value between 0 and 1. The number of required workers will be calculated by ceil(min-worker-fraction * num_workers)",
              hidden: true,
              args: {
                name: "0-1",
                description: "Float",
              },
            },
            {
              name: "--network",
              description:
                'The Compute Engine network that the VM instances of the cluster will be part of. This is mutually exclusive with --subnet. If neither is specified, this defaults to the "default" network',
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            {
              name: "--no-address",
              description:
                "If provided, the instances in the cluster will not be assigned external IP addresses",
            },
            {
              name: "--no-confidential-compute",
              description:
                "Enables Confidential VM. See https://cloud.google.com/compute/confidential-vm/docs for more information. Note that Confidential VM can only be enabled when the machine types are N2D (https://cloud.google.com/compute/docs/machine-types#n2d_machine_types) and the image is SEV Compatible",
              hidden: true,
            },
            {
              name: "--no-enable-component-gateway",
              description:
                "Enable access to the web UIs of selected components on the cluster through the component gateway",
              hidden: true,
            },
            {
              name: "--no-enable-kerberos",
              description: "Enable Kerberos on the cluster",
              hidden: true,
            },
            {
              name: "--no-enable-ssh",
              description: "Enable SSH access for the cluster",
              hidden: true,
            },
            {
              name: "--no-public-ip-address",
              description:
                "If provided, cluster instances are assigned external IP addresses",
              hidden: true,
            },
            {
              name: "--no-shielded-integrity-monitoring",
              description:
                "Enables monitoring and attestation of the boot integrity of the cluster's VMs. vTPM (virtual Trusted Platform Module) must also be enabled. A TPM is a hardware module that can be used for different security operations, such as remote attestation, encryption, and sealing of keys",
              hidden: true,
            },
            {
              name: "--no-shielded-secure-boot",
              description:
                "The cluster's VMs will boot with secure boot enabled",
              hidden: true,
            },
            {
              name: "--no-shielded-vtpm",
              description:
                "The cluster's VMs will boot with the TPM (Trusted Platform Module) enabled. A TPM is a hardware module that can be used for different security operations, such as remote attestation, encryption, and sealing of keys",
              hidden: true,
            },
            {
              name: "--no-single-node",
              description: "Create a single node cluster",
              hidden: true,
            },
            {
              name: "--node-group",
              description:
                'The name of the sole-tenant node group to create the cluster on. Can be a short name ("node-group-name") or in the format "projects/{project-id}/zones/{zone}/nodeGroups/{node-group-name}"',
              args: {
                name: "NODE_GROUP",
                description: "String",
              },
            },
            {
              name: "--num-master-local-ssds",
              description:
                "The number of local SSDs to attach to the master in a cluster",
              args: {
                name: "NUM_MASTER_LOCAL_SSDS",
                description: "Int",
              },
            },
            {
              name: "--num-masters",
              description: "The number of master nodes in the cluster",
              args: {
                name: "NUM_MASTERS",
              },
            },
            {
              name: "--num-preemptible-worker-local-ssds",
              description:
                "(DEPRECATED) The number of local SSDs to attach to each secondary worker in a cluster",
              hidden: true,
              deprecated: true,
              args: {
                name: "NUM_PREEMPTIBLE_WORKER_LOCAL_SSDS",
                description: "Int",
              },
            },
            {
              name: "--num-preemptible-workers",
              description:
                "(DEPRECATED) The number of preemptible worker nodes in the cluster",
              hidden: true,
              deprecated: true,
              args: {
                name: "NUM_PREEMPTIBLE_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--num-secondary-worker-local-ssds",
              description:
                "The number of local SSDs to attach to each preemptible worker in a cluster",
              args: {
                name: "NUM_SECONDARY_WORKER_LOCAL_SSDS",
                description: "Int",
              },
            },
            {
              name: "--num-secondary-workers",
              description:
                "The number of secondary worker nodes in the cluster",
              args: {
                name: "NUM_SECONDARY_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--num-worker-local-ssds",
              description:
                "The number of local SSDs to attach to each worker in a cluster",
              args: {
                name: "NUM_WORKER_LOCAL_SSDS",
                description: "Int",
              },
            },
            {
              name: "--num-workers",
              description:
                "The number of worker nodes in the cluster. Defaults to server-specified",
              args: {
                name: "NUM_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--optional-components",
              description:
                "List of optional components to be installed on cluster machines",
              args: {
                name: "COMPONENT",
                description: "List",
              },
            },
            {
              name: "--preemptible-worker-accelerator",
              description:
                "(DEPRECATED) Attaches accelerators, such as GPUs, to the preemptible-worker instance(s)",
              hidden: true,
              deprecated: true,
              args: {
                name: "type=TYPE,count=COUNT",
                description: "Dict",
              },
            },
            {
              name: "--preemptible-worker-boot-disk-size",
              description:
                "(DEPRECATED) The size of the boot disk. The value must be a whole number followed by a size unit of ``KB'' for kilobyte, ``MB'' for megabyte, ``GB'' for gigabyte, or ``TB'' for terabyte. For example, `10GB` will produce a 10 gigabyte disk. The minimum boot disk size is 10 GB. Boot disk size must be a multiple of 1 GB",
              hidden: true,
              deprecated: true,
              args: {
                name: "PREEMPTIBLE_WORKER_BOOT_DISK_SIZE",
              },
            },
            {
              name: "--preemptible-worker-boot-disk-type",
              description:
                "(DEPRECATED) The type of the boot disk. The value must be `pd-balanced`, `pd-ssd`, or `pd-standard`",
              hidden: true,
              deprecated: true,
              args: {
                name: "PREEMPTIBLE_WORKER_BOOT_DISK_TYPE",
                description: "String",
              },
            },
            {
              name: "--private-ipv6-google-access-type",
              description:
                "The private IPv6 Google access type for the cluster. _PRIVATE_IPV6_GOOGLE_ACCESS_TYPE_ must be one of: *inherit-subnetwork*, *outbound*, *bidirectional*",
              args: {
                name: "PRIVATE_IPV6_GOOGLE_ACCESS_TYPE",
                description: "String",
                suggestions: [
                  "inherit-subnetwork",
                  "outbound",
                  "bidirectional",
                ],
              },
            },
            optProject,
            {
              name: "--properties",
              description:
                "Specifies configuration properties for installed packages, such as Hadoop and Spark",
              args: {
                name: "PREFIX:PROPERTY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--public-ip-address",
              description:
                "If provided, cluster instances are assigned external IP addresses",
            },
            optQuiet,
            optRegion6,
            {
              name: "--reservation",
              description:
                "The name of the reservation, required when `--reservation-affinity=specific`",
              args: {
                name: "RESERVATION",
                description: "String",
              },
            },
            {
              name: "--reservation-affinity",
              description:
                "The type of reservation for the instance. _RESERVATION_AFFINITY_ must be one of: *any*, *none*, *specific*",
              args: {
                name: "RESERVATION_AFFINITY",
                description: "String",
                suggestions: ["any", "none", "specific"],
              },
            },
            {
              name: "--resource-manager-tags",
              description:
                "Specifies a list of resource manager tags to apply to each cluster node (master and worker nodes)",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--scopes",
              description:
                "Specifies scopes for the node instances. Multiple SCOPEs can be specified, separated by commas. Examples:",
              args: {
                name: "SCOPE",
                description: "List",
              },
            },
            {
              name: "--secondary-worker-accelerator",
              description:
                "Attaches accelerators, such as GPUs, to the secondary-worker instance(s)",
              args: {
                name: "type=TYPE,count=COUNT",
                description: "Dict",
              },
            },
            {
              name: "--secondary-worker-attached-disks",
              description:
                "A list of disk configurations to attach to each instance in this group. Disk configurations are separated by semicolons. Each disk configuration is a comma-separated list of the following parameters",
              args: {
                name: "SECONDARY_WORKER_ATTACHED_DISKS",
              },
            },
            {
              name: "--secondary-worker-boot-disk-provisioned-iops",
              description:
                "Indicates the [IOPS](https://cloud.google.com/compute/docs/disks/hyperdisks#iops) to provision for the disk. This sets the limit for disk I/O operations per second. This is only supported if the bootdisk type is [hyperdisk-balanced](https://cloud.google.com/compute/docs/disks/hyperdisks)",
              hidden: true,
              args: {
                name: "SECONDARY_WORKER_BOOT_DISK_PROVISIONED_IOPS",
                description: "Int",
              },
            },
            {
              name: "--secondary-worker-boot-disk-provisioned-throughput",
              description:
                "Indicates the [throughput](https://cloud.google.com/compute/docs/disks/hyperdisks#throughput) to provision for the disk. This sets the limit for throughput in MiB per second. This is only supported if the bootdisk type is [hyperdisk-balanced](https://cloud.google.com/compute/docs/disks/hyperdisks)",
              hidden: true,
              args: {
                name: "SECONDARY_WORKER_BOOT_DISK_PROVISIONED_THROUGHPUT",
                description: "Int",
              },
            },
            {
              name: "--secondary-worker-boot-disk-size",
              description:
                "The size of the boot disk. The value must be a whole number followed by a size unit of ``KB'' for kilobyte, ``MB'' for megabyte, ``GB'' for gigabyte, or ``TB'' for terabyte. For example, `10GB` will produce a 10 gigabyte disk. The minimum boot disk size is 10 GB. Boot disk size must be a multiple of 1 GB",
              args: {
                name: "SECONDARY_WORKER_BOOT_DISK_SIZE",
              },
            },
            {
              name: "--secondary-worker-boot-disk-type",
              description:
                "The type of the boot disk. The value must be `pd-balanced`, `pd-ssd`, or `pd-standard`",
              args: {
                name: "SECONDARY_WORKER_BOOT_DISK_TYPE",
                description: "String",
              },
            },
            {
              name: "--secondary-worker-local-ssd-interface",
              description:
                "Interface to use to attach local SSDs to each secondary worker in a cluster",
              args: {
                name: "SECONDARY_WORKER_LOCAL_SSD_INTERFACE",
                description: "String",
              },
            },
            {
              name: "--secondary-worker-machine-types",
              description:
                'Types of machines with optional rank for secondary workers to use. Defaults to server-specified.eg. --secondary-worker-machine-types="type=e2-standard-8,type=t2d-standard-8,rank=0"',
              args: {
                name: "type=MACHINE_TYPE,type=MACHINE_TYPE...,rank=RANK",
              },
            },
            {
              name: "--secondary-worker-standard-capacity-base",
              description:
                "This flag sets the base number of Standard VMs to use for [secondary workers](https://cloud.google.com/dataproc/docs/concepts/compute/secondary-vms#preemptible_and_non-preemptible_secondary_workers). Dataproc will create only standard VMs until it reaches this number, then it will mix Spot and Standard VMs according to ``SECONDARY_WORKER_STANDARD_CAPACITY_PERCENT_ABOVE_BASE''",
              args: {
                name: "SECONDARY_WORKER_STANDARD_CAPACITY_BASE",
                description: "Int",
              },
            },
            {
              name: "--secondary-worker-standard-capacity-percent-above-base",
              description:
                "When combining Standard and Spot VMs for [secondary-workers](https://cloud.google.com/dataproc/docs/concepts/compute/secondary-vms#preemptible_and_non-preemptible_secondary_workers) once the number of Standard VMs specified by ``SECONDARY_WORKER_STANDARD_CAPACITY_BASE'' has been used, this flag specifies the percentage of the total number of additional Standard VMs secondary workers will use. Spot VMs will be used for the remaining percentage",
              args: {
                name: "SECONDARY_WORKER_STANDARD_CAPACITY_PERCENT_ABOVE_BASE",
                description: "Int",
              },
            },
            {
              name: "--secondary-worker-type",
              description:
                "The type of the secondary worker group. _TYPE_ must be one of: *preemptible*, *non-preemptible*, *spot*",
              args: {
                name: "TYPE",
                description: "String",
                suggestions: ["preemptible", "non-preemptible", "spot"],
              },
            },
            {
              name: "--secure-multi-tenancy-user-mapping",
              description:
                'A string of user-to-service-account mappings. Mappings are separated by commas, and each mapping takes the form of "user-account:service-account". Example: "bob@company.com:service-account-bob@project.iam.gserviceaccount.com,alice@company.com:service-account-alice@project.iam.gserviceaccount.com"',
              args: {
                name: "SECURE_MULTI_TENANCY_USER_MAPPING",
                description: "String",
              },
            },
            {
              name: "--service-account",
              description:
                "The Google Cloud IAM service account to be authenticated as",
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
              },
            },
            {
              name: "--shielded-integrity-monitoring",
              description:
                "Enables monitoring and attestation of the boot integrity of the cluster's VMs. vTPM (virtual Trusted Platform Module) must also be enabled. A TPM is a hardware module that can be used for different security operations, such as remote attestation, encryption, and sealing of keys",
            },
            {
              name: "--shielded-secure-boot",
              description:
                "The cluster's VMs will boot with secure boot enabled",
            },
            {
              name: "--shielded-vtpm",
              description:
                "The cluster's VMs will boot with the TPM (Trusted Platform Module) enabled. A TPM is a hardware module that can be used for different security operations, such as remote attestation, encryption, and sealing of keys",
            },
            {
              name: "--single-node",
              description: "Create a single node cluster",
            },
            {
              name: "--subnet",
              description:
                "Specifies the subnet that the cluster will be part of. This is mutally exclusive with --network",
              args: {
                name: "SUBNET",
                description: "String",
              },
            },
            {
              name: "--tags",
              description:
                "Specifies a list of tags to apply to the instance. These tags allow network firewall rules and routes to be applied to specified VM instances. See gcloud_compute_firewall-rules_create(1) for more details",
              args: {
                name: "TAG",
                description: "List",
              },
            },
            {
              name: "--temp-bucket",
              description:
                "The Google Cloud Storage bucket to use by default to store ephemeral cluster and jobs data, such as Spark and MapReduce history files",
              args: {
                name: "TEMP_BUCKET",
                description: "String",
              },
            },
            {
              name: "--tier",
              description: "(DEPRECATED) Cluster tier",
              hidden: true,
              deprecated: true,
              args: {
                name: "TIER",
                description: "String",
                suggestions: ["premium", "standard"],
              },
            },
            optTimeout,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--worker-accelerator",
              description:
                "Attaches accelerators, such as GPUs, to the worker instance(s)",
              args: {
                name: "type=TYPE,count=COUNT",
                description: "Dict",
              },
            },
            {
              name: "--worker-attached-disks",
              description:
                "A list of disk configurations to attach to each instance in this group. Disk configurations are separated by semicolons. Each disk configuration is a comma-separated list of the following parameters",
              args: {
                name: "WORKER_ATTACHED_DISKS",
              },
            },
            {
              name: "--worker-boot-disk-provisioned-iops",
              description:
                "Indicates the [IOPS](https://cloud.google.com/compute/docs/disks/hyperdisks#iops) to provision for the disk. This sets the limit for disk I/O operations per second. This is only supported if the bootdisk type is [hyperdisk-balanced](https://cloud.google.com/compute/docs/disks/hyperdisks)",
              args: {
                name: "WORKER_BOOT_DISK_PROVISIONED_IOPS",
                description: "Int",
              },
            },
            {
              name: "--worker-boot-disk-provisioned-throughput",
              description:
                "Indicates the [throughput](https://cloud.google.com/compute/docs/disks/hyperdisks#throughput) to provision for the disk. This sets the limit for throughput in MiB per second. This is only supported if the bootdisk type is [hyperdisk-balanced](https://cloud.google.com/compute/docs/disks/hyperdisks)",
              args: {
                name: "WORKER_BOOT_DISK_PROVISIONED_THROUGHPUT",
                description: "Int",
              },
            },
            {
              name: "--worker-boot-disk-size",
              description:
                "The size of the boot disk. The value must be a whole number followed by a size unit of ``KB'' for kilobyte, ``MB'' for megabyte, ``GB'' for gigabyte, or ``TB'' for terabyte. For example, `10GB` will produce a 10 gigabyte disk. The minimum boot disk size is 10 GB. Boot disk size must be a multiple of 1 GB",
              args: {
                name: "WORKER_BOOT_DISK_SIZE",
              },
            },
            {
              name: "--worker-boot-disk-type",
              description:
                "The type of the boot disk. The value must be `pd-balanced`, `pd-ssd`, or `pd-standard`",
              args: {
                name: "WORKER_BOOT_DISK_TYPE",
                description: "String",
              },
            },
            {
              name: "--worker-local-ssd-interface",
              description:
                "Interface to use to attach local SSDs to each worker in a cluster",
              args: {
                name: "WORKER_LOCAL_SSD_INTERFACE",
                description: "String",
              },
            },
            {
              name: "--worker-machine-type",
              description:
                "The type of machine to use for primary workers. Defaults to server-specified",
              args: {
                name: "WORKER_MACHINE_TYPE",
                description: "String",
              },
            },
            {
              name: "--worker-machine-types",
              description:
                '[Machine types](https://cloud.google.com/dataproc/docs/concepts/compute/supported-machine-types) for primary worker nodes to use with optional rank. A lower rank number is given higher preference. Based on availablilty, Dataproc tries to create primary worker VMs using the worker machine type with the lowest rank, and then tries to use machine types with higher ranks as necessary. Machine types with the same rank are given the same preference. Example use: --worker-machine-types="type=e2-standard-8,type=n2-standard-8,rank=0". For more information, see [Dataproc Flexible VMs](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/flexible-vms)',
              args: {
                name: "type=MACHINE_TYPE,type=MACHINE_TYPE...,rank=RANK",
              },
            },
            {
              name: "--worker-min-cpu-platform",
              description:
                "When specified, the VM is scheduled on the host with a specified CPU architecture or a more recent CPU platform that's available in that zone. To list available CPU platforms in a zone, run:",
              args: {
                name: "PLATFORM",
                description: "String",
              },
            },
            {
              name: "--zone",
              description:
                "The compute zone (such as `us-central1-a`) for the cluster. If empty and --region is set to a value other than global, [Dataproc Auto Zone placement](https://docs.cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone) will pick a zone in the region. Overrides the default compute/zone property value for this command invocation",
              args: {
                name: "ZONE",
                description: "String",
              },
            },
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template",
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
