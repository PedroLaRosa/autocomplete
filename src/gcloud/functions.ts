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

const optGen2: Fig.Option = {
  name: "--gen2",
  description:
    "If enabled, this command will use Cloud Functions (Second generation). If disabled with `--no-gen2`, Cloud Functions (First generation) will be used. If not specified, the value of this flag will be taken from the `functions/gen2` configuration property. If the `functions/gen2` configuration property is not set, defaults to looking up the given function and using its generation",
  hidden: true,
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

const optNoGen2: Fig.Option = {
  name: "--no-gen2",
  description:
    "If enabled, this command will use Cloud Functions (Second generation). If disabled with `--no-gen2`, Cloud Functions (First generation) will be used. If not specified, the value of this flag will be taken from the `functions/gen2` configuration property. If the `functions/gen2` configuration property is not set, defaults to looking up the given function and using its generation",
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
  description:
    "The Cloud region for the function. Overrides the default `functions/region` property value for this command invocation",
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
  name: "functions",
  description: "Manage Google Cloud Functions",
  subcommands: [
    {
      name: "add-iam-policy-binding",
      description: "Adds an IAM policy binding for a Google Cloud Function",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        optFlagsFile,
        optFlatten,
        optFormat,
        optGen2,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        {
          name: "--member",
          description:
            "The principal to add the binding for. Should be of the form `user|group|serviceAccount:email` or `domain:domain`",
          priority: 100,
          args: {
            name: "PRINCIPAL",
            description: "String",
          },
        },
        optNoGen2,
        optProject,
        optQuiet,
        optRegion,
        {
          name: "--role",
          description:
            "Role name to assign to the principal. The role name is the complete path of a predefined role, such as `roles/logging.viewer`, or the role ID for a custom role, such as `organizations/{ORGANIZATION_ID}/roles/logging.viewer`",
          priority: 100,
          args: {
            name: "ROLE",
            description: "String",
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "NAME",
        description:
          "ID of the function or fully qualified identifier for the function",
      },
    },
    {
      name: "add-invoker-policy-binding",
      description:
        "Adds an invoker binding to the IAM policy of a Google Cloud Function",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        optFlagsFile,
        optFlatten,
        optFormat,
        optGen2,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        {
          name: "--member",
          description:
            "The principal to add to the IAM policy. Should be of the form `user|group|serviceAccount:email` or `domain:domain`",
          priority: 100,
          args: {
            name: "PRINCIPAL",
            description: "String",
          },
        },
        optNoGen2,
        optProject,
        optQuiet,
        optRegion,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "NAME",
        description:
          "ID of the function or fully qualified identifier for the function",
      },
    },
    {
      name: "call",
      description: "Triggers execution of a Google Cloud Function",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        {
          name: "--cloud-event",
          description:
            "JSON encoded string with a CloudEvent in structured content mode",
          args: {
            name: "CLOUD_EVENT",
          },
        },
        optConfiguration,
        {
          name: "--data",
          description:
            "JSON string with data that will be passed to the function",
          args: {
            name: "DATA",
          },
        },
        optFlagsFile,
        optFlatten,
        optFormat,
        optGen2,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        optNoGen2,
        optProject,
        optQuiet,
        optRegion,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "NAME",
        description:
          "ID of the function or fully qualified identifier for the function",
      },
    },
    {
      name: "delete",
      description: "Delete a Google Cloud Function",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        optFlagsFile,
        optFlatten,
        optFormat,
        optGen2,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        optNoGen2,
        optProject,
        optQuiet,
        optRegion,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "NAME",
        description:
          "ID of the function or fully qualified identifier for the function",
      },
    },
    {
      name: "deploy",
      description: "Create or update a Google Cloud Function",
      options: [
        optAccessTokenFile,
        optAccount,
        {
          name: "--allow-unauthenticated",
          description:
            "If set, makes this a public function. This will allow all callers, without checking authentication. Use *--allow-unauthenticated* to enable and *--no-allow-unauthenticated* to disable",
        },
        optBillingProject,
        {
          name: "--binary-authorization",
          description:
            "Name of the Binary Authorization policy that the function image should be checked against when deploying to Cloud Run",
          args: {
            name: "BINARY_AUTHORIZATION",
            description: "String",
          },
        },
        {
          name: "--build-env-vars-file",
          description:
            "Path to a local YAML file with definitions for all build environment variables. All existing build environment variables will be removed before the new build environment variables are added",
          args: {
            name: "FILE_PATH",
            template: "filepaths",
          },
        },
        {
          name: "--build-service-account",
          description:
            "IAM service account whose credentials will be used for the build step. Must be of the format projects/${PROJECT_ID}/serviceAccounts/${ACCOUNT_EMAIL_ADDRESS}",
          args: {
            name: "BUILD_SERVICE_ACCOUNT",
            description: "String",
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
          name: "--clear-binary-authorization",
          description: "Clears the Binary Authorization policy field",
        },
        {
          name: "--clear-build-env-vars",
          description: "Remove all build environment variables",
        },
        {
          name: "--clear-build-service-account",
          description: "Clears the build service account field",
        },
        {
          name: "--clear-build-worker-pool",
          description: "Clears the Cloud Build Custom Worker Pool field",
        },
        {
          name: "--clear-docker-repository",
          description:
            "Clears the Docker repository configuration of the function",
        },
        {
          name: "--clear-env-vars",
          description: "Remove all environment variables",
        },
        {
          name: "--clear-kms-key",
          description: "Clears the KMS crypto key used to encrypt the function",
        },
        {
          name: "--clear-labels",
          description:
            "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
        },
        {
          name: "--clear-max-instances",
          description: "Clears the maximum instances setting for the function",
        },
        {
          name: "--clear-min-instances",
          description: "Clears the minimum instances setting for the function",
        },
        {
          name: "--clear-network",
          description:
            "Disconnect this Cloud Function from the Direct VPC network it is connected to",
        },
        {
          name: "--clear-network-tags",
          description:
            "Clears all existing network tags from the Cloud Function",
        },
        {
          name: "--clear-secrets",
          description: "Remove all secret environment variables and volumes",
        },
        {
          name: "--clear-vpc-connector",
          description: "Clears the VPC connector field",
        },
        {
          name: "--concurrency",
          description:
            "Set the maximum number of concurrent requests allowed per container instance. Leave concurrency unspecified to receive the server default value",
          args: {
            name: "CONCURRENCY",
          },
        },
        optConfiguration,
        {
          name: "--cpu",
          description:
            "The number of available CPUs to set. Only valid when `--memory=MEMORY` is specified",
          args: {
            name: "CPU",
            description: "String",
          },
        },
        {
          name: "--direct-vpc-egress",
          description:
            "Specify which of the outbound traffic to send through Direct VPC egress. Configuring Direct VPC network is required to use this flag. _DIRECT_VPC_EGRESS_ must be one of: *private-ranges-only*, *all*",
          args: {
            name: "DIRECT_VPC_EGRESS",
            suggestions: ["private-ranges-only", "all"],
          },
        },
        {
          name: "--docker-registry",
          description:
            "(DEPRECATED) Docker Registry to use for storing the function's Docker images. The option `artifact-registry` is used by default",
          deprecated: true,
          args: {
            name: "DOCKER_REGISTRY",
            suggestions: ["artifact-registry", "container-registry"],
          },
        },
        {
          name: "--docker-repository",
          description:
            "Sets the Docker repository to be used for storing the Cloud Function's Docker images while the function is being deployed. `DOCKER_REPOSITORY` must be an Artifact Registry Docker repository present in the `same` project and location as the Cloud Function",
          args: {
            name: "DOCKER_REPOSITORY",
          },
        },
        {
          name: "--egress-settings",
          description:
            "Egress settings controls what traffic is diverted through the VPC Access Connector resource. By default `private-ranges-only` will be used. _EGRESS_SETTINGS_ must be one of: *private-ranges-only*, *all*",
          args: {
            name: "EGRESS_SETTINGS",
            suggestions: ["private-ranges-only", "all"],
          },
        },
        {
          name: "--entry-point",
          description:
            "Name of a Google Cloud Function (as defined in source code) that will be executed. Defaults to the resource name suffix (ID of the function), if not specified",
          args: {
            name: "ENTRY_POINT",
            description: "String",
          },
        },
        {
          name: "--env-vars-file",
          description:
            "Path to a local YAML file with definitions for all environment variables. All existing environment variables will be removed before the new environment variables are added",
          args: {
            name: "FILE_PATH",
            template: "filepaths",
          },
        },
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--gen2",
          description:
            "If enabled, this command will use Cloud Functions (Second generation). If disabled with `--no-gen2`, Cloud Functions (First generation) will be used. If not specified, the value of this flag will be taken from the `functions/gen2` configuration property. If the `functions/gen2` configuration property is not set, defaults to looking up the given function and using its generation",
        },
        {
          name: "--help",
          description: "Display detailed help",
        },
        {
          name: "--ignore-file",
          description:
            "Override the .gcloudignore file in the source directory and use the specified file instead. By default, the source directory is your current directory. Note that it could be changed by the --source flag, in which case your .gcloudignore file will be searched in the overridden directory. For example, `--ignore-file=.mygcloudignore` combined with `--source=./mydir` would point to `./mydir/.mygcloudignore`",
          args: {
            name: "IGNORE_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        optImpersonateServiceAccount,
        {
          name: "--ingress-settings",
          description:
            "Ingress settings controls what traffic can reach the function. By default `all` will be used. _INGRESS_SETTINGS_ must be one of: *all*, *internal-only*, *internal-and-gclb*",
          args: {
            name: "INGRESS_SETTINGS",
            suggestions: ["all", "internal-only", "internal-and-gclb"],
          },
        },
        {
          name: "--kms-key",
          description:
            "Sets the user managed KMS crypto key used to encrypt the Cloud Function and its resources",
          args: {
            name: "KMS_KEY",
          },
        },
        optLogHttp,
        {
          name: "--max-instances",
          description:
            "Sets the maximum number of instances for the function. A function execution that would exceed max-instances times out",
          args: {
            name: "MAX_INSTANCES",
          },
        },
        {
          name: "--memory",
          description: "Limit on the amount of memory the function can use",
          priority: 100,
          args: {
            name: "MEMORY",
            description: "String",
          },
        },
        {
          name: "--min-instances",
          description:
            "Sets the minimum number of instances for the function. This is helpful for reducing cold start times. Defaults to zero",
          args: {
            name: "MIN_INSTANCES",
          },
        },
        {
          name: "--network",
          description:
            "The VPC network that the Cloud Function will be able to send traffic to. If --subnet is also specified, subnet must be a subnetwork of the network specified by this --network flag. To clear existing VPC network settings, use --clear-network",
          args: {
            name: "NETWORK",
            description: "String",
          },
        },
        {
          name: "--network-tags",
          description:
            "Applies the given network tags (comma separated) to the Cloud Function. To clear existing tags, use --clear-network-tags",
          args: {
            name: "TAGS",
            description: "List",
          },
        },
        {
          name: "--no-allow-unauthenticated",
          description:
            "If set, makes this a public function. This will allow all callers, without checking authentication",
        },
        {
          name: "--no-clear-binary-authorization",
          description: "Clears the Binary Authorization policy field",
          hidden: true,
        },
        {
          name: "--no-clear-build-env-vars",
          description: "Remove all build environment variables",
          hidden: true,
        },
        {
          name: "--no-clear-build-service-account",
          description: "Clears the build service account field",
          hidden: true,
        },
        {
          name: "--no-clear-build-worker-pool",
          description: "Clears the Cloud Build Custom Worker Pool field",
          hidden: true,
        },
        {
          name: "--no-clear-docker-repository",
          description:
            "Clears the Docker repository configuration of the function",
          hidden: true,
        },
        {
          name: "--no-clear-env-vars",
          description: "Remove all environment variables",
          hidden: true,
        },
        {
          name: "--no-clear-kms-key",
          description: "Clears the KMS crypto key used to encrypt the function",
          hidden: true,
        },
        {
          name: "--no-clear-labels",
          description:
            "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
          hidden: true,
        },
        {
          name: "--no-clear-max-instances",
          description: "Clears the maximum instances setting for the function",
          hidden: true,
        },
        {
          name: "--no-clear-min-instances",
          description: "Clears the minimum instances setting for the function",
          hidden: true,
        },
        {
          name: "--no-clear-network",
          description:
            "Disconnect this Cloud Function from the Direct VPC network it is connected to",
          hidden: true,
        },
        {
          name: "--no-clear-network-tags",
          description:
            "Clears all existing network tags from the Cloud Function",
          hidden: true,
        },
        {
          name: "--no-clear-secrets",
          description: "Remove all secret environment variables and volumes",
          hidden: true,
        },
        {
          name: "--no-clear-vpc-connector",
          description: "Clears the VPC connector field",
          hidden: true,
        },
        optNoGen2,
        {
          name: "--no-retry",
          description:
            "If specified, then the function will be retried in case of a failure",
          hidden: true,
        },
        {
          name: "--no-serve-all-traffic-latest-revision",
          description:
            "If specified, latest function revision will be served all traffic",
          hidden: true,
        },
        {
          name: "--no-trigger-http",
          description:
            "Function will be assigned an endpoint, which you can view by using the `describe` command. Any HTTP request (of a supported type) to the endpoint will trigger function execution. Supported HTTP request types are: POST, PUT, GET, DELETE, and OPTIONS",
          hidden: true,
        },
        optProject,
        optQuiet,
        optRegion,
        {
          name: "--remove-build-env-vars",
          description: "List of build environment variables to be removed",
          args: {
            name: "KEY",
            description: "List",
          },
        },
        {
          name: "--remove-env-vars",
          description: "List of environment variables to be removed",
          args: {
            name: "KEY",
            description: "List",
          },
        },
        {
          name: "--remove-labels",
          description:
            "List of label keys to remove. If a label does not exist it is silently ignored. If `--update-labels` is also specified then `--update-labels` is applied first.Label keys starting with `deployment` are reserved for use by deployment tools and cannot be specified manually",
          args: {
            name: "KEY",
            description: "List",
          },
        },
        {
          name: "--remove-secrets",
          description:
            "List of secret environment variable names and secret paths to remove",
          args: {
            name: "SECRET_ENV_VAR,/secret_path,/mount_path:/secret_file_path",
            description: "List",
          },
        },
        {
          name: "--retry",
          description:
            "If specified, then the function will be retried in case of a failure",
        },
        {
          name: "--run-service-account",
          description:
            "The email address of the IAM service account associated with the Cloud Run service for the function. The service account represents the identity of the running function, and determines what permissions the function has",
          args: {
            name: "RUN_SERVICE_ACCOUNT",
            description: "String",
          },
        },
        {
          name: "--runtime",
          description: "Runtime in which to run the function",
          args: {
            name: "RUNTIME",
            description: "String",
          },
        },
        {
          name: "--runtime-update-policy",
          description:
            "Runtime update policy for the function being deployed. The option `automatic` is used by default. _RUNTIME_UPDATE_POLICY_ must be one of: *automatic*, *on-deploy*",
          args: {
            name: "RUNTIME_UPDATE_POLICY",
            description: "String",
            suggestions: ["automatic", "on-deploy"],
          },
        },
        {
          name: "--security-level",
          description:
            "Security level controls whether a function's URL supports HTTPS only or both HTTP and HTTPS. By default, `secure-always` will be used, meaning only HTTPS is supported. _SECURITY_LEVEL_ must be one of: *secure-always*, *secure-optional*",
          args: {
            name: "SECURITY_LEVEL",
            suggestions: ["secure-always", "secure-optional"],
          },
        },
        {
          name: "--serve-all-traffic-latest-revision",
          description:
            "If specified, latest function revision will be served all traffic",
        },
        {
          name: "--service-account",
          description:
            "The email address of the IAM service account associated with the function at runtime. The service account represents the identity of the running function, and determines what permissions the function has",
          args: {
            name: "SERVICE_ACCOUNT",
            description: "String",
          },
        },
        {
          name: "--set-build-env-vars",
          description:
            "List of key-value pairs to set as build environment variables. All existing build environment variables will be removed first",
          args: {
            name: "KEY=VALUE",
            description: "Dict",
          },
        },
        {
          name: "--set-env-vars",
          description:
            "List of key-value pairs to set as environment variables. All existing environment variables will be removed first",
          args: {
            name: "KEY=VALUE",
            description: "Dict",
          },
        },
        {
          name: "--set-secrets",
          description:
            "List of secret environment variables and secret volumes to configure. Existing secrets configuration will be overwritten",
          args: {
            name: "SECRET_ENV_VAR=SECRET_VALUE_REF,/secret_path=SECRET_VALUE_REF,/mount_path:/secret_file_path=SECRET_VALUE_REF",
            description: "Dict",
          },
        },
        {
          name: "--source",
          description: "Location of source code to deploy",
          args: {
            name: "SOURCE",
            description: "String",
          },
        },
        {
          name: "--stage-bucket",
          description:
            "When deploying a function from a local directory, this flag's value is the name of the Google Cloud Storage bucket in which source code will be stored. Note that if you set the `--stage-bucket` flag when deploying a function, you will need to specify `--source` or `--stage-bucket` in subsequent deployments to update your source code. To use this flag successfully, the account in use must have permissions to write to this bucket. For help granting access, refer to this guide: https://cloud.google.com/storage/docs/access-control/",
          args: {
            name: "STAGE_BUCKET",
          },
        },
        {
          name: "--subnet",
          description:
            "The VPC subnetwork that the Cloud Function will get IPs from. The subnetwork must be `/26` or larger. If --network is also specified, subnet must be a subnetwork of the network specified by the --network flag. If --network is not specified, network will be looked up from this subnetwork. To clear existing VPC network settings, use --clear-network",
          args: {
            name: "SUBNET",
            description: "String",
          },
        },
        {
          name: "--timeout",
          description:
            "The function execution timeout, e.g. 30s for 30 seconds. Defaults to original value for existing function or 60 seconds for new functions",
          args: {
            name: "TIMEOUT",
          },
        },
        optTraceToken,
        {
          name: "--trigger-bucket",
          description:
            "Google Cloud Storage bucket name. Trigger the function when an object is created or overwritten in the specified Cloud Storage bucket",
          args: {
            name: "TRIGGER_BUCKET",
          },
        },
        {
          name: "--trigger-channel",
          description:
            "ID of the channel or fully qualified identifier for the channel",
          hidden: true,
          args: {
            name: "TRIGGER_CHANNEL",
            description: "String",
          },
        },
        {
          name: "--trigger-event",
          description:
            "Specifies which action should trigger the function. For a list of acceptable values, call `gcloud functions event-types list`",
          args: {
            name: "EVENT_TYPE",
            description: "String",
          },
        },
        {
          name: "--trigger-event-filters",
          description:
            "The Eventarc matching criteria for the trigger. The criteria can be specified either as a single comma-separated argument or as multiple arguments. The filters must include the ``type'' attribute, as well as any other attributes that are expected for the chosen type",
          args: {
            name: "ATTRIBUTE=VALUE",
            description: "Dict",
          },
        },
        {
          name: "--trigger-event-filters-path-pattern",
          description:
            "The Eventarc matching criteria for the trigger in path pattern format. The criteria can be specified as a single comma-separated argument or as multiple arguments",
          args: {
            name: "ATTRIBUTE=PATH_PATTERN",
            description: "Dict",
          },
        },
        {
          name: "--trigger-http",
          description:
            "Function will be assigned an endpoint, which you can view by using the `describe` command. Any HTTP request (of a supported type) to the endpoint will trigger function execution. Supported HTTP request types are: POST, PUT, GET, DELETE, and OPTIONS",
        },
        {
          name: "--trigger-location",
          description:
            "The location of the trigger, which must be a region or multi-region where the relevant events originate",
          args: {
            name: "TRIGGER_LOCATION",
            description: "String",
          },
        },
        {
          name: "--trigger-resource",
          description:
            "Specifies which resource from `--trigger-event` is being observed. E.g. if `--trigger-event` is `providers/cloud.storage/eventTypes/object.change`, `--trigger-resource` must be a bucket name. For a list of expected resources, call `gcloud functions event-types list`",
          args: {
            name: "RESOURCE",
            description: "String",
          },
        },
        {
          name: "--trigger-service-account",
          description:
            "The email address of the IAM service account associated with the Eventarc trigger for the function. This is used for authenticated invocation",
          args: {
            name: "TRIGGER_SERVICE_ACCOUNT",
            description: "String",
          },
        },
        {
          name: "--trigger-topic",
          description:
            "Name of Pub/Sub topic. Every message published in this topic will trigger function execution with message contents passed as input data. Note that this flag does not accept the format of projects/PROJECT_ID/topics/TOPIC_ID. Use this flag to specify the final element TOPIC_ID. The PROJECT_ID will be read from the active configuration",
          args: {
            name: "TRIGGER_TOPIC",
          },
        },
        {
          name: "--update-build-env-vars",
          description:
            "List of key-value pairs to set as build environment variables",
          args: {
            name: "KEY=VALUE",
            description: "Dict",
          },
        },
        {
          name: "--update-env-vars",
          description:
            "List of key-value pairs to set as environment variables",
          args: {
            name: "KEY=VALUE",
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
          name: "--update-secrets",
          description:
            "List of secret environment variables and secret volumes to update. Existing secrets configuration not specified in this list will be preserved",
          args: {
            name: "SECRET_ENV_VAR=SECRET_VALUE_REF,/secret_path=SECRET_VALUE_REF,/mount_path:/secret_file_path=SECRET_VALUE_REF",
            description: "Dict",
          },
        },
        optUserOutputEnabled,
        optVerbosity,
        {
          name: "--vpc-connector",
          description:
            "ID of the connector or fully qualified identifier for the connector",
          priority: 100,
          args: {
            name: "VPC_CONNECTOR",
            description: "String",
          },
        },
      ],
      args: {
        name: "NAME",
        description:
          "ID of the function or fully qualified identifier for the function",
      },
    },
    {
      name: "describe",
      description: "Display details of a Google Cloud Function",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--gen2",
          description:
            "If enabled, this command will use Cloud Functions (Second generation). If disabled with `--no-gen2`, Cloud Functions (First generation) will be used. If not specified, the value of this flag will be taken from the `functions/gen2` configuration property. If the `functions/gen2` configuration property is not set, defaults to looking up the given function and using its generation. This command could conflict with `--v2`. If specified `--gen2` with `--no-v2`, or `--no-gen2` with `--v2`, Second generation will be used",
          hidden: true,
        },
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        {
          name: "--no-gen2",
          description:
            "If enabled, this command will use Cloud Functions (Second generation). If disabled with `--no-gen2`, Cloud Functions (First generation) will be used. If not specified, the value of this flag will be taken from the `functions/gen2` configuration property. If the `functions/gen2` configuration property is not set, defaults to looking up the given function and using its generation. This command could conflict with `--v2`. If specified `--gen2` with `--no-v2`, or `--no-gen2` with `--v2`, Second generation will be used",
          hidden: true,
        },
        {
          name: "--no-v2",
          description:
            "If specified, this command will use Cloud Functions v2 APIs and return the result in the v2 format (See https://cloud.google.com/functions/docs/reference/rest/v2/projects.locations.functions#Function). If not specified, 1st gen and 2nd gen functions will use v1 and v2 APIs respectively and return the result in the corresponding format (For v1 format, see https://cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions#resource:-cloudfunction). This command conflicts with `--no-gen2`. If specified with this combination, v2 APIs will be used",
          hidden: true,
        },
        optProject,
        optQuiet,
        optRegion,
        optTraceToken,
        optUserOutputEnabled,
        {
          name: "--v2",
          description:
            "If specified, this command will use Cloud Functions v2 APIs and return the result in the v2 format (See https://cloud.google.com/functions/docs/reference/rest/v2/projects.locations.functions#Function). If not specified, 1st gen and 2nd gen functions will use v1 and v2 APIs respectively and return the result in the corresponding format (For v1 format, see https://cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions#resource:-cloudfunction). This command conflicts with `--no-gen2`. If specified with this combination, v2 APIs will be used",
        },
        optVerbosity,
      ],
      args: {
        name: "NAME",
        description:
          "ID of the function or fully qualified identifier for the function",
      },
    },
    {
      name: "detach",
      description:
        "Detach a Cloud Functions v2 function from its existing environment and make it a native Cloud Run function",
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
        name: "NAME",
        description:
          "ID of the function or fully qualified identifier for the function",
      },
    },
    {
      name: "event-types",
      description:
        "List types of events that can be a trigger for a Google Cloud Function",
      subcommands: [
        {
          name: "list",
          description:
            "List types of events that can be a trigger for a Google Cloud Function",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gen2",
              description:
                "If enabled, this command will use Cloud Functions (Second generation). If disabled with `--no-gen2`, Cloud Functions (First generation) will be used. If not specified, the value of this flag will be taken from the `functions/gen2` configuration property",
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            {
              name: "--no-gen2",
              description:
                "If enabled, this command will use Cloud Functions (Second generation). If disabled with `--no-gen2`, Cloud Functions (First generation) will be used. If not specified, the value of this flag will be taken from the `functions/gen2` configuration property",
              hidden: true,
            },
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
      name: "get-iam-policy",
      description: "Get IAM policy for a Google Cloud Function",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        optFilter,
        optFlagsFile,
        optFlatten,
        optFormat,
        optGen2,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLimit,
        optLogHttp,
        optNoGen2,
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
      args: {
        name: "NAME",
        description:
          "ID of the function or fully qualified identifier for the function",
      },
    },
    {
      name: "list",
      description: "List Google Cloud Functions",
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
          name: "--no-v2",
          description:
            "If specified, this command will use Cloud Functions v2 APIs and return the result in the v2 format (See https://cloud.google.com/functions/docs/reference/rest/v2/projects.locations.functions#Function). If not specified, 1st gen and 2nd gen functions will use v1 and v2 APIs respectively and return the result in the corresponding format (For v1 format, see https://cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions#resource:-cloudfunction). This command conflicts with `--no-gen2`. If specified with this combination, v2 APIs will be used",
          hidden: true,
        },
        optPageSize,
        optProject,
        optQuiet,
        {
          name: "--regions",
          description:
            "Regions containing functions to list. By default, functions from the region configured in [functions/region] property are listed",
          args: {
            name: "REGION",
            description: "List",
          },
        },
        optSortBy,
        optTraceToken,
        optUserOutputEnabled,
        {
          name: "--v2",
          description:
            "If specified, this command will use Cloud Functions v2 APIs and return the result in the v2 format (See https://cloud.google.com/functions/docs/reference/rest/v2/projects.locations.functions#Function). If not specified, 1st gen and 2nd gen functions will use v1 and v2 APIs respectively and return the result in the corresponding format (For v1 format, see https://cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions#resource:-cloudfunction). This command conflicts with `--no-gen2`. If specified with this combination, v2 APIs will be used",
        },
        optVerbosity,
      ],
    },
    {
      name: "logs",
      description: "Display log entries produced by Google Cloud Functions",
      subcommands: [
        {
          name: "read",
          description: "Display log entries produced by Google Cloud Functions",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--end-time",
              description:
                "Return only log entries which timestamps are not later than the specified time. If *--end-time* is specified but *--start-time* is not, the command returns *--limit* latest log entries which appeared before --end-time. See *$ gcloud topic datetimes* for information on time formats",
              args: {
                name: "END_TIME",
              },
            },
            {
              name: "--execution-id",
              description: "Execution ID for which logs are to be displayed",
              args: {
                name: "EXECUTION_ID",
                description: "String",
              },
            },
            optFilter,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gen2",
              description:
                "If enabled, this command will use Cloud Functions (Second generation). If disabled with `--no-gen2`, Cloud Functions (First generation) will be used. If not specified, the value of this flag will be taken from the `functions/gen2` configuration property. If the `functions/gen2` configuration property is not set, defaults to looking up the given function and using its generation",
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--limit",
              description:
                "Number of log entries to be fetched; must not be greater than 1000. Note that the most recent entries in the specified time range are returned, rather than the earliest",
              args: {
                name: "LIMIT",
                description: "Int",
              },
            },
            optLogHttp,
            {
              name: "--min-log-level",
              description:
                "Minimum level of logs to be fetched. _MIN_LOG_LEVEL_ must be one of: *debug*, *info*, *error*",
              args: {
                name: "MIN_LOG_LEVEL",
                suggestions: ["debug", "info", "error"],
              },
            },
            optNoGen2,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            {
              name: "--region",
              description:
                "Only show logs generated by functions in the region. Overrides the default *functions/region* property value for this command invocation",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optSortBy,
            {
              name: "--start-time",
              description:
                "Return only log entries in which timestamps are not earlier than the specified time. If *--start-time* is not specified, a default start time of 1 week ago is assumed. See $ gcloud topic datetimes for information on time formats",
              args: {
                name: "START_TIME",
              },
            },
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "NAME",
            description:
              "Name of the function which logs are to be displayed. If no name is specified, logs from all functions are displayed",
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
    {
      name: "regions",
      description: "List regions available to Google Cloud Functions",
      subcommands: [
        {
          name: "list",
          description: "List regions available to Google Cloud Functions",
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
              name: "--gen2",
              description:
                "If enabled, this command will use Cloud Functions (Second generation). If disabled with `--no-gen2`, Cloud Functions (First generation) will be used. If not specified, the value of this flag will be taken from the `functions/gen2` configuration property",
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLimit,
            optLogHttp,
            {
              name: "--no-gen2",
              description:
                "If enabled, this command will use Cloud Functions (Second generation). If disabled with `--no-gen2`, Cloud Functions (First generation) will be used. If not specified, the value of this flag will be taken from the `functions/gen2` configuration property",
              hidden: true,
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
      name: "remove-iam-policy-binding",
      description: "Removes an IAM policy binding from a Google Cloud Function",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        optFlagsFile,
        optFlatten,
        optFormat,
        optGen2,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        {
          name: "--member",
          description:
            "The principal to remove the binding for. Should be of the form `user|group|serviceAccount:email` or `domain:domain`",
          priority: 100,
          args: {
            name: "PRINCIPAL",
            description: "String",
          },
        },
        optNoGen2,
        optProject,
        optQuiet,
        optRegion,
        {
          name: "--role",
          description: "The role to remove the principal from",
          priority: 100,
          args: {
            name: "ROLE",
            description: "String",
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "NAME",
        description:
          "ID of the function or fully qualified identifier for the function",
      },
    },
    {
      name: "remove-invoker-policy-binding",
      description:
        "Removes an invoker binding from the IAM policy of a Google Cloud Function",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        optFlagsFile,
        optFlatten,
        optFormat,
        optGen2,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        {
          name: "--member",
          description:
            "The principal to remove from the IAM policy. Should be of the form `user|group|serviceAccount:email` or `domain:domain`",
          priority: 100,
          args: {
            name: "PRINCIPAL",
            description: "String",
          },
        },
        optNoGen2,
        optProject,
        optQuiet,
        optRegion,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "NAME",
        description:
          "ID of the function or fully qualified identifier for the function",
      },
    },
    {
      name: "runtimes",
      description: "List runtimes available to Google Cloud Functions",
      subcommands: [
        {
          name: "list",
          description: "List runtimes available to Google Cloud Functions",
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
                "Only show runtimes within the region. Overrides the default *functions/region* property value for this command invocation",
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
      description: "Sets IAM policy for a Google Cloud Function",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        optFlagsFile,
        optFlatten,
        optFormat,
        optGen2,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        optNoGen2,
        optProject,
        optQuiet,
        optRegion,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: [
        {
          name: "NAME",
          description:
            "ID of the function or fully qualified identifier for the function",
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
};

export default completionSpec;
