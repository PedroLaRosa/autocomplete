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

const optAdditionalUserLabels: Fig.Option = {
  name: "--additional-user-labels",
  description:
    "Additional user labels to pass to the job. Example: --additional-user-labels='key1=value1,key2=value2'",
  args: {
    name: "ADDITIONAL_USER_LABELS",
    description: "Dict",
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

const optLogHttp: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
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
    "Region ID of the job's regional endpoint. Defaults to 'us-central1'",
  args: {
    name: "REGION_ID",
    description: "String",
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

const optTransformNameMappings: Fig.Option = {
  name: "--transform-name-mappings",
  description: "Transform name mappings for the streaming update job",
  args: {
    name: "TRANSFORM_NAME_MAPPINGS",
    description: "Dict",
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
  name: "dataflow",
  description: "Manage Google Cloud Dataflow resources",
  subcommands: [
    {
      name: "flex-template",
      description:
        "A group of subcommands for working with Dataflow flex template",
      subcommands: [
        {
          name: "build",
          description:
            "Builds a flex template file from the specified parameters",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--additional-experiments",
              description: "Default experiments to pass to the job",
              args: {
                name: "ADDITIONAL_EXPERIMENTS",
                description: "List",
              },
            },
            {
              name: "--additional-user-labels",
              description:
                'Default user labels to pass to the job. Example: --additional-user-labels=\'{"key1":"value1"}\'',
              args: {
                name: "ADDITIONAL_USER_LABELS",
                description: "Dict",
              },
            },
            optBillingProject,
            {
              name: "--cloud-build-service-account",
              description:
                "Service account to run the Cloud Build in the format projects/{project}/serviceAccounts/{service_account}. Ensure that the account you are using to run 'gcloud dataflow flex-template build' has 'ServiceAccountUser' role on the specified Cloud Build service account you provide with the --cloud-build-service-account flag. The specified service account must have required permissions to build the image. If the specified service account is in a project that is different from the project where you are starting builds, see https://cloud.google.com/build/docs/securing-builds/configure-user-specified-service-accounts#cross-project_set_up to grant the necessary access",
              args: {
                name: "CLOUD_BUILD_SERVICE_ACCOUNT",
              },
            },
            optConfiguration,
            {
              name: "--dataflow-kms-key",
              description: "Default Cloud KMS key to protect the job resources",
              args: {
                name: "DATAFLOW_KMS_KEY",
                description: "String",
              },
            },
            {
              name: "--disable-public-ips",
              description:
                "Cloud Dataflow workers must not use public IP addresses. Overrides the default *dataflow/disable_public_ips* property value for this command invocation",
            },
            {
              name: "--enable-streaming-engine",
              description:
                "Enable Streaming Engine for the streaming job by default. Overrides the default *dataflow/enable_streaming_engine* property value for this command invocation",
            },
            {
              name: "--env",
              description:
                'Environment variables to create for the Dockerfile. You can pass them as a comma separated list or repeat individually with --env flag. Ex: --env="A=B,C=D" or --env A=B, --env C=D.When you reference files/dir in env variables, please specify relative path to the paths passed via --py-path.Ex: if you pass. --py-path="path/pipleline/" then set FLEX_TEMPLATE_PYTHON_PY_FILE="pipeline/pipeline.py" You can find the list of supported environment variables in this link. https://cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates#setting_required_dockerfile_environment_variables',
              priority: 100,
              args: {
                name: "ENV",
                description: "Dict",
              },
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--flex-template-base-image",
              description:
                "Flex template base image to be used while building the container image. Allowed choices are allowed labels (JAVA11/17/21/25, PYTHON3, GO), supported distroless images (JAVA11/17/21/25_DISTROLESS, GO_DISTROLESS), or full gcr.io path of the specific version of the base image. For labels, we use the latest base image version to build the container. You can also provide a specific version from this link https://gcr.io/dataflow-templates-base/",
              priority: 100,
              args: {
                name: "FLEX_TEMPLATE_BASE_IMAGE",
              },
            },
            optFormat,
            {
              name: "--gcs-log-dir",
              description:
                "Google Cloud Storage directory to save build logs.(Must be a URL beginning with 'gs://'.)",
              args: {
                name: "GCS_LOG_DIR",
              },
            },
            {
              name: "--go-binary-path",
              description:
                "Local path to your compiled dataflow pipeline Go binary. The binary should be compiled to run on the target worker architecture (usually linux-amd64). See https://beam.apache.org/documentation/sdks/go-cross-compilation/ for more information",
              args: {
                name: "GO_BINARY_PATH",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--image",
              description:
                "Path to the any image registry location of the prebuilt flex template image",
              args: {
                name: "IMAGE",
                description: "String",
              },
            },
            {
              name: "--image-gcr-path",
              description:
                "The Google Container Registry or Google Artifact Registry location to store the flex template image to be built",
              priority: 100,
              args: {
                name: "IMAGE_GCR_PATH",
              },
            },
            {
              name: "--image-repository-cert-path",
              description:
                "The full URL to self-signed certificate of private registry in Cloud Storage. For example, gs://mybucket/mycerts/selfsigned.crt. The certificate provided in Cloud Storage must be DER-encoded and may be supplied in binary or printable (Base64) encoding. If the certificate is provided in Base64 encoding, it must be bounded at the beginning by -----BEGIN CERTIFICATE-----, and must be bounded at the end by -----END CERTIFICATE-----. If this parameter is provided, the docker daemon in the template launcher will be instructed to trust that certificate",
              args: {
                name: "IMAGE_REPOSITORY_CERT_PATH",
              },
            },
            {
              name: "--image-repository-password-secret-id",
              description:
                "Secret Manager secret id for the password to authenticate to private registry. Should be in the format projects/{project}/secrets/{secret}/versions/{secret_version} or projects/{project}/secrets/{secret}. If the version is not provided latest version will be used",
              args: {
                name: "IMAGE_REPOSITORY_PASSWORD_SECRET_ID",
              },
            },
            {
              name: "--image-repository-username-secret-id",
              description:
                "Secret Manager secret id for the username to authenticate to private registry. Should be in the format projects/{project}/secrets/{secret}/versions/{secret_version} or projects/{project}/secrets/{secret}. If the version is not provided latest version will be used",
              args: {
                name: "IMAGE_REPOSITORY_USERNAME_SECRET_ID",
              },
            },
            optImpersonateServiceAccount,
            {
              name: "--jar",
              description:
                'Local path to your dataflow pipeline jar file and all their dependent jar files required for the flex template classpath. You can pass them as a comma separated list or repeat individually with --jar flag. Ex: --jar="code.jar,dep.jar" or --jar code.jar, --jar dep.jar',
              args: {
                name: "JAR",
                description: "List",
              },
            },
            optLogHttp,
            {
              name: "--max-workers",
              description: "Default maximum number of workers to run",
              args: {
                name: "MAX_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--metadata-file",
              description:
                "Local path to the metadata json file for the flex template. Use a full or relative path to a local file containing the value of metadata_file",
              args: {
                name: "METADATA_FILE",
                template: "filepaths",
              },
            },
            {
              name: "--network",
              description:
                "Default Compute Engine network for launching instances to run your pipeline",
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            {
              name: "--no-disable-public-ips",
              description:
                "Cloud Dataflow workers must not use public IP addresses",
              hidden: true,
            },
            {
              name: "--no-enable-streaming-engine",
              description:
                "Enable Streaming Engine for the streaming job by default",
              hidden: true,
            },
            {
              name: "--no-print-only",
              description:
                "Prints the container spec to stdout. Does not save in Google Cloud Storage",
              hidden: true,
            },
            {
              name: "--num-workers",
              description: "Initial number of workers to use by default",
              args: {
                name: "NUM_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--print-only",
              description:
                "Prints the container spec to stdout. Does not save in Google Cloud Storage. Overrides the default *dataflow/print_only* property value for this command invocation",
            },
            optProject,
            {
              name: "--py-path",
              description:
                'Local path to your dataflow pipeline python files and all their dependent files required for the flex template classpath. You can pass them as a comma separated list or repeat individually with --py-path flag. Ex: --py-path="path/pipleline/,path/dependency/" or --py-path path/pipleline/, --py-path path/dependency/',
              args: {
                name: "PY_PATH",
                description: "List",
              },
            },
            optQuiet,
            {
              name: "--sdk-language",
              description:
                "SDK language of the flex template job. _SDK_LANGUAGE_ must be one of: *JAVA*, *PYTHON*, *GO*, *YAML*",
              priority: 100,
              args: {
                name: "SDK_LANGUAGE",
                description: "String",
                suggestions: ["JAVA", "PYTHON", "GO", "YAML"],
              },
            },
            {
              name: "--service-account-email",
              description: "Default service account to run the workers as",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
              },
            },
            {
              name: "--staging-location",
              description:
                "Default Google Cloud Storage location to stage local files.(Must be a URL beginning with 'gs://'.)",
              args: {
                name: "STAGING_LOCATION",
              },
            },
            {
              name: "--subnetwork",
              description:
                "Default Compute Engine subnetwork for launching instances to run your pipeline",
              args: {
                name: "SUBNETWORK",
                description: "String",
              },
            },
            {
              name: "--temp-location",
              description:
                "Default Google Cloud Storage location to stage temporary files. If not set, defaults to the value for --staging-location.(Must be a URL beginning with 'gs://'.)",
              args: {
                name: "TEMP_LOCATION",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--worker-machine-type",
              description:
                "Default type of machine to use for workers. Defaults to server-specified",
              args: {
                name: "WORKER_MACHINE_TYPE",
                description: "String",
              },
            },
            {
              name: "--worker-region",
              description: "Default region to run the workers in",
              args: {
                name: "WORKER_REGION",
                description: "String",
              },
            },
            {
              name: "--worker-zone",
              description: "Default zone to run the workers in",
              args: {
                name: "WORKER_ZONE",
                description: "String",
              },
            },
            {
              name: "--yaml-image",
              description:
                "Path to the any image registry location of the prebuilt yaml template image",
              args: {
                name: "YAML_IMAGE",
                description: "String",
              },
            },
            {
              name: "--yaml-pipeline-path",
              description:
                "Local path to your YAML pipeline file. Use a full or relative path to a local file containing the value of yaml_pipeline_path",
              priority: 100,
              args: {
                name: "YAML_PIPELINE_PATH",
                template: "filepaths",
              },
            },
          ],
          args: {
            name: "TEMPLATE_FILE_GCS_PATH",
            description:
              "The Google Cloud Storage location of the flex template file.Overrides if file already exists",
          },
        },
        {
          name: "run",
          description: "Runs a job from the specified path",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--additional-experiments",
              description:
                "Additional experiments to pass to the job. Example: --additional-experiments=experiment1,experiment2=value2",
              args: {
                name: "ADDITIONAL_EXPERIMENTS",
                description: "List",
              },
            },
            {
              name: "--additional-pipeline-options",
              description:
                "Additional pipeline options to pass to the job. Example: --additional-pipeline-options=option1=value1,option2=value2",
              args: {
                name: "ADDITIONAL_PIPELINE_OPTIONS",
                description: "List",
              },
            },
            optAdditionalUserLabels,
            optBillingProject,
            optConfiguration,
            {
              name: "--dataflow-kms-key",
              description: "Cloud KMS key to protect the job resources",
              args: {
                name: "DATAFLOW_KMS_KEY",
                description: "String",
              },
            },
            {
              name: "--disable-public-ips",
              description:
                "Cloud Dataflow workers must not use public IP addresses. Overrides the default *dataflow/disable_public_ips* property value for this command invocation",
            },
            {
              name: "--enable-streaming-engine",
              description:
                "Enabling Streaming Engine for the streaming job. Overrides the default *dataflow/enable_streaming_engine* property value for this command invocation",
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--flexrs-goal",
              description:
                "FlexRS goal for the flex template job. _FLEXRS_GOAL_ must be one of: *COST_OPTIMIZED*, *SPEED_OPTIMIZED*",
              args: {
                name: "FLEXRS_GOAL",
                description: "String",
                suggestions: ["COST_OPTIMIZED", "SPEED_OPTIMIZED"],
              },
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--launcher-machine-type",
              description:
                "The machine type to use for launching the job. If not set, Dataflow will select a default machine type",
              args: {
                name: "LAUNCHER_MACHINE_TYPE",
                description: "String",
              },
            },
            {
              name: "--launcher-vm-timeout-secs",
              description:
                "The timeout in seconds for the launcher VM. If not set, Dataflow uses a default timeout",
              args: {
                name: "LAUNCHER_VM_TIMEOUT_SECS",
                description: "Int",
              },
            },
            optLogHttp,
            {
              name: "--max-workers",
              description: "Maximum number of workers to run",
              args: {
                name: "MAX_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--network",
              description:
                "Compute Engine network for launching instances to run your pipeline",
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            {
              name: "--no-disable-public-ips",
              description:
                "Cloud Dataflow workers must not use public IP addresses",
              hidden: true,
            },
            {
              name: "--no-enable-streaming-engine",
              description: "Enabling Streaming Engine for the streaming job",
              hidden: true,
            },
            {
              name: "--no-update",
              description: "Set this to true for streaming update jobs",
              priority: 100,
            },
            {
              name: "--num-workers",
              description: "Initial number of workers to use",
              args: {
                name: "NUM_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--parameters",
              description: "Parameters to pass to the job",
              args: {
                name: "PARAMETERS",
                description: "Dict",
              },
            },
            optProject,
            optQuiet,
            optRegion,
            {
              name: "--service-account-email",
              description: "Service account to run the workers as",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
              },
            },
            {
              name: "--staging-location",
              description:
                "Default Google Cloud Storage location to stage local files.(Must be a URL beginning with 'gs://'.)",
              args: {
                name: "STAGING_LOCATION",
              },
            },
            {
              name: "--subnetwork",
              description:
                "Compute Engine subnetwork for launching instances to run your pipeline",
              args: {
                name: "SUBNETWORK",
                description: "String",
              },
            },
            {
              name: "--temp-location",
              description:
                "Default Google Cloud Storage location to stage temporary files. If not set, defaults to the value for --staging-location.(Must be a URL beginning with 'gs://'.)",
              args: {
                name: "TEMP_LOCATION",
              },
            },
            {
              name: "--template-file-gcs-location",
              description:
                "Google Cloud Storage location of the flex template to run. (Must be a URL beginning with 'gs://'.)",
              priority: 100,
              args: {
                name: "TEMPLATE_FILE_GCS_LOCATION",
              },
            },
            optTraceToken,
            optTransformNameMappings,
            {
              name: "--update",
              description:
                "Set this to true for streaming update jobs. Use *--update* to enable and *--no-update* to disable",
              priority: 100,
            },
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--worker-machine-type",
              description:
                "Type of machine to use for workers. Defaults to server-specified",
              args: {
                name: "WORKER_MACHINE_TYPE",
                description: "String",
              },
            },
            {
              name: "--worker-region",
              description: "Region to run the workers in",
              args: {
                name: "WORKER_REGION",
                description: "String",
              },
            },
            {
              name: "--worker-zone",
              description: "Zone to run the workers in",
              args: {
                name: "WORKER_ZONE",
                description: "String",
              },
            },
          ],
          args: {
            name: "JOB_NAME",
            description: "Unique name to assign to the job",
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
      description: "A group of subcommands for working with Dataflow jobs",
      subcommands: [
        {
          name: "archive",
          description: "Archives a job",
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
            name: "JOB_ID",
            description: "Job ID to operate on",
          },
        },
        {
          name: "cancel",
          description: "Cancels all jobs that match the command line arguments",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--force",
              description:
                "Forcibly cancels a Dataflow job. Regular cancel must have been attempted at least 30 minutes prior for a job to be force cancelled",
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            {
              name: "--no-force",
              description:
                "Forcibly cancels a Dataflow job. Regular cancel must have been attempted at least 30 minutes prior for a job to be force cancelled",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--region",
              description:
                "Region ID of the jobs' regional endpoint. Defaults to 'us-central1'",
              args: {
                name: "REGION_ID",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "JOB_ID",
            description: "Job IDs to operate on",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Outputs the Job object resulting from the Get API",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--full",
              description: "Retrieve the full Job rather than the summary view",
            },
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
            name: "JOB_ID",
            description: "Job ID to operate on",
          },
        },
        {
          name: "drain",
          description: "Drains all jobs that match the command line arguments",
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
              description:
                "Region ID of the jobs' regional endpoint. Defaults to 'us-central1'",
              args: {
                name: "REGION_ID",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "JOB_ID",
            description: "Job IDs to operate on",
            isVariadic: true,
          },
        },
        {
          name: "list",
          description:
            "Lists all jobs in a particular project, optionally filtered by region",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--created-after",
              description:
                "Filter the jobs to those created after the given time. See $ gcloud topic datetimes for information on time formats. For example, `2018-01-01` is the first day of the year, and `-P2W` is 2 weeks ago",
              args: {
                name: "CREATED_AFTER",
              },
            },
            {
              name: "--created-before",
              description:
                "Filter the jobs to those created before the given time. See $ gcloud topic datetimes for information on time formats",
              args: {
                name: "CREATED_BEFORE",
              },
            },
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
                "Maximum number of resources to list. The default is *100*. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
              args: {
                name: "LIMIT",
                description: "Int",
              },
            },
            optLogHttp,
            {
              name: "--no-uri",
              description:
                "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
              hidden: true,
            },
            {
              name: "--page-size",
              description:
                "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is *20*. Paging may be applied before or after *--filter* and *--limit* depending on the service",
              args: {
                name: "PAGE_SIZE",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--region",
              description:
                "Only resources from the given region are queried. If not provided, an attempt will be made to query from all available regions. In the event of an outage, jobs from certain regions may not be available",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            {
              name: "--sort-by",
              description:
                "Comma-separated list of resource field key names to sort by. The default order is ascending. Prefix a field with ``~'' for descending order on that field. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
              args: {
                name: "FIELD",
                description: "List",
              },
            },
            {
              name: "--status",
              description:
                "Filter the jobs to those with the selected status. _STATUS_ must be one of:",
              args: {
                name: "STATUS",
                description: "String",
                suggestions: ["active", "all", "terminated"],
              },
            },
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
          name: "run",
          description: "Runs a job from the specified path",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--additional-experiments",
              description:
                "Additional experiments to pass to the job. These experiments are appended to any experiments already set by the template",
              args: {
                name: "ADDITIONAL_EXPERIMENTS",
                description: "List",
              },
            },
            optAdditionalUserLabels,
            optBillingProject,
            optConfiguration,
            {
              name: "--dataflow-kms-key",
              description: "The Cloud KMS key to protect the job resources",
              args: {
                name: "DATAFLOW_KMS_KEY",
                description: "String",
              },
            },
            {
              name: "--disable-public-ips",
              description:
                "The Cloud Dataflow workers must not use public IP addresses. Overrides the default *dataflow/disable_public_ips* property value for this command invocation",
            },
            {
              name: "--enable-streaming-engine",
              description:
                "Enabling Streaming Engine for the streaming job. Overrides the default *dataflow/enable_streaming_engine* property value for this command invocation",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gcs-location",
              description:
                "The Google Cloud Storage location of the job template to run. (Must be a URL beginning with 'gs://'.)",
              priority: 100,
              args: {
                name: "GCS_LOCATION",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            {
              name: "--max-workers",
              description: "The maximum number of workers to run",
              args: {
                name: "MAX_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--network",
              description:
                "The Compute Engine network for launching instances to run your pipeline",
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            {
              name: "--no-disable-public-ips",
              description:
                "The Cloud Dataflow workers must not use public IP addresses",
              hidden: true,
            },
            {
              name: "--no-enable-streaming-engine",
              description: "Enabling Streaming Engine for the streaming job",
              hidden: true,
            },
            {
              name: "--no-update",
              description: "Set this to true for streaming update jobs",
              priority: 100,
            },
            {
              name: "--num-workers",
              description: "The initial number of workers to use",
              args: {
                name: "NUM_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--parameters",
              description: "The parameters to pass to the job",
              args: {
                name: "PARAMETERS",
                description: "Dict",
              },
            },
            optProject,
            optQuiet,
            optRegion,
            {
              name: "--service-account-email",
              description: "The service account to run the workers as",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
              },
            },
            {
              name: "--staging-location",
              description:
                "The Google Cloud Storage location to stage temporary files. (Must be a URL beginning with 'gs://'.)",
              args: {
                name: "STAGING_LOCATION",
              },
            },
            {
              name: "--subnetwork",
              description:
                "The Compute Engine subnetwork for launching instances to run your pipeline",
              args: {
                name: "SUBNETWORK",
                description: "String",
              },
            },
            optTraceToken,
            optTransformNameMappings,
            {
              name: "--update",
              description:
                "Set this to true for streaming update jobs. Use *--update* to enable and *--no-update* to disable",
              priority: 100,
            },
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--worker-machine-type",
              description:
                "The type of machine to use for workers. Defaults to server-specified",
              args: {
                name: "WORKER_MACHINE_TYPE",
                description: "String",
              },
            },
            {
              name: "--worker-region",
              description: "The region to run the workers in",
              args: {
                name: "WORKER_REGION",
              },
            },
            {
              name: "--worker-zone",
              description: "The zone to run the workers in",
              args: {
                name: "WORKER_ZONE",
              },
            },
            {
              name: "--zone",
              description: "(DEPRECATED) The zone to run the workers in",
              deprecated: true,
              args: {
                name: "ZONE",
              },
            },
          ],
          args: {
            name: "JOB_NAME",
            description: "The unique name to assign to the job",
          },
        },
        {
          name: "show",
          description: "Shows a short description of the given job",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--environment",
              description: "If present, the environment will be listed",
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
            {
              name: "--no-environment",
              description: "If present, the environment will be listed",
              hidden: true,
            },
            {
              name: "--no-steps",
              description: "If present, the steps will be listed",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion,
            {
              name: "--steps",
              description: "If present, the steps will be listed",
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "JOB_ID",
            description: "Job ID to operate on",
          },
        },
        {
          name: "update-options",
          description:
            "Update pipeline options on-the-fly for running Dataflow jobs",
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
            {
              name: "--max-num-workers",
              description:
                "Upper-bound for autoscaling, between 1-1000. Only supported for streaming-engine jobs",
              args: {
                name: "MAX_NUM_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--min-num-workers",
              description:
                "Lower-bound for autoscaling, between 1-1000. Only supported for streaming-engine jobs",
              args: {
                name: "MIN_NUM_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--no-unset-worker-utilization-hint",
              description:
                "Unset --worker-utilization-hint. This causes the job autoscaling to fall back to internal tunings if they exist, or otherwise use the default hint value",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion,
            optTraceToken,
            {
              name: "--unset-worker-utilization-hint",
              description:
                "Unset --worker-utilization-hint. This causes the job autoscaling to fall back to internal tunings if they exist, or otherwise use the default hint value",
            },
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--worker-utilization-hint",
              description:
                "Target CPU utilization for autoscaling, ranging from 0.1 to 0.9. Only supported for streaming-engine jobs with autoscaling enabled",
              args: {
                name: "WORKER_UTILIZATION_HINT",
                description: "Float",
              },
            },
          ],
          args: {
            name: "JOB_ID",
            description: "Job ID to operate on",
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
      name: "snapshots",
      description:
        "A group of subcommands for working with Cloud Dataflow snapshots",
      subcommands: [
        {
          name: "create",
          description: "Creates a snapshot for a Cloud Dataflow job",
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
              name: "--job-id",
              description: "The job ID to snapshot",
              priority: 100,
              args: {
                name: "JOB_ID",
                description: "String",
              },
            },
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--region",
              description:
                "The region ID of the snapshot and job's regional endpoint",
              priority: 100,
              args: {
                name: "REGION_ID",
                description: "String",
              },
            },
            {
              name: "--snapshot-sources",
              description:
                "If true, snapshots will also be created for the Cloud Pub/Sub sources of the Cloud Dataflow job",
              args: {
                name: "SNAPSHOT_SOURCES",
                description: "Int",
              },
            },
            {
              name: "--snapshot-ttl",
              description: "Time to live for the snapshot",
              args: {
                name: "DURATION",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "delete",
          description: "Delete a Cloud Dataflow snapshot",
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
              description: "Region ID of the snapshot regional endpoint",
              priority: 100,
              args: {
                name: "REGION_ID",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SNAPSHOT_ID",
            description: "ID of the Cloud Dataflow snapshot",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Dataflow snapshot",
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
              description: "Region ID of the snapshot regional endpoint",
              priority: 100,
              args: {
                name: "REGION_ID",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SNAPSHOT_ID",
            description: "ID of the Cloud Dataflow snapshot",
          },
        },
        {
          name: "list",
          description:
            "List all Cloud Dataflow snapshots in a project in the specified region, optionally filtered by job ID",
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
              name: "--job-id",
              description: "The job ID to use to filter the snapshots list",
              args: {
                name: "JOB_ID",
                description: "String",
              },
            },
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--region",
              description:
                "The region ID of the snapshot and job's regional endpoint",
              priority: 100,
              args: {
                name: "REGION_ID",
                description: "String",
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
      name: "sql",
      description:
        "*(REMOVED)* A group of subcommands for working with Dataflow SQL",
      hidden: true,
      subcommands: [
        {
          name: "query",
          description:
            "*(REMOVED)* Execute the user-specified SQL query on Dataflow",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--bigquery-dataset",
              description: "The BigQuery dataset ID",
              args: {
                name: "BIGQUERY_DATASET",
                description: "String",
              },
            },
            {
              name: "--bigquery-project",
              description: "The BigQuery project ID",
              args: {
                name: "BIGQUERY_PROJECT",
                description: "String",
              },
            },
            {
              name: "--bigquery-table",
              description:
                "ID of the BigQuery table or fully qualified identifier for the BigQuery table",
              priority: 100,
              args: {
                name: "BIGQUERY_TABLE",
                description: "String",
              },
            },
            {
              name: "--bigquery-write-disposition",
              description:
                "The behavior of the BigQuery write operation. _BIGQUERY_WRITE_DISPOSITION_ must be one of: *write-empty*, *write-truncate*, *write-append*",
              args: {
                name: "BIGQUERY_WRITE_DISPOSITION",
                description: "String",
                suggestions: ["write-empty", "write-truncate", "write-append"],
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--dataflow-kms-key",
              description: "The Cloud KMS key to protect the job resources",
              args: {
                name: "DATAFLOW_KMS_KEY",
                description: "String",
              },
            },
            {
              name: "--disable-public-ips",
              description:
                "The Cloud Dataflow workers must not use public IP addresses. Overrides the default *dataflow/disable_public_ips* property value for this command invocation",
            },
            {
              name: "--dry-run",
              description:
                "Construct but do not run the SQL pipeline, for smoke testing",
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
              name: "--job-name",
              description:
                "The unique name to assign to the Cloud Dataflow job",
              priority: 100,
              args: {
                name: "JOB_NAME",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--max-workers",
              description: "The maximum number of workers to run",
              args: {
                name: "MAX_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--network",
              description:
                "The Compute Engine network for launching instances to run your pipeline",
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            {
              name: "--no-disable-public-ips",
              description:
                "The Cloud Dataflow workers must not use public IP addresses",
              hidden: true,
            },
            {
              name: "--no-dry-run",
              description:
                "Construct but do not run the SQL pipeline, for smoke testing",
              hidden: true,
            },
            {
              name: "--num-workers",
              description: "The initial number of workers to use",
              args: {
                name: "NUM_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--parameter",
              description:
                "Parameters to pass to a query. Parameters must use the format name:type:value, for example min_word_count:INT64:250",
              args: {
                name: "PARAMETER",
                description: "String",
              },
            },
            {
              name: "--parameters-file",
              description:
                'Path to a file containing query parameters in JSON format. e.g. [{"parameterType": {"type": "STRING"}, "parameterValue": {"value": "foo"}, "name": "x"}, {"parameterType": {"type": "FLOAT64"}, "parameterValue": {"value": "1.0"}, "name": "y"}]',
              args: {
                name: "PARAMETERS_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optProject,
            {
              name: "--pubsub-create-disposition",
              description:
                "The behavior of the Pub/Sub create operation. _PUBSUB_CREATE_DISPOSITION_ must be one of: *create-if-not-found*, *fail-if-not-found*",
              args: {
                name: "PUBSUB_CREATE_DISPOSITION",
                description: "String",
                suggestions: ["create-if-not-found", "fail-if-not-found"],
              },
            },
            {
              name: "--pubsub-project",
              description: "The Pub/Sub project ID",
              args: {
                name: "PUBSUB_PROJECT",
                description: "String",
              },
            },
            {
              name: "--pubsub-topic",
              description:
                "ID of the Pub/Sub topic or fully qualified identifier for the Pub/Sub topic",
              priority: 100,
              args: {
                name: "PUBSUB_TOPIC",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--region",
              description:
                "Region ID of the job's regional endpoint. Defaults to 'us-central1'",
              priority: 100,
              args: {
                name: "REGION",
              },
            },
            {
              name: "--service-account-email",
              description: "The service account to run the workers as",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
              },
            },
            {
              name: "--sql-launcher-template",
              description:
                "The full GCS path to a SQL launcher template spec, e.g. gs://dataflow-sql-templates-us-west1/cloud_dataflow_sql_launcher_template_20201208_RC00/sql_launcher_flex_template. If None is specified, default to the latest release in the region. Note that older releases are not guaranteed to be compatible",
              hidden: true,
              args: {
                name: "SQL_LAUNCHER_TEMPLATE",
                description: "String",
              },
            },
            {
              name: "--sql-launcher-template-engine",
              description:
                "The template engine to use for the SQL launcher template",
              hidden: true,
              args: {
                name: "SQL_LAUNCHER_TEMPLATE_ENGINE",
                description: "String",
                suggestions: ["flex", "dynamic"],
              },
            },
            {
              name: "--subnetwork",
              description:
                "The Compute Engine subnetwork for launching instances to run your pipeline",
              args: {
                name: "SUBNETWORK",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--worker-machine-type",
              description:
                "The type of machine to use for workers. Defaults to server-specified",
              args: {
                name: "WORKER_MACHINE_TYPE",
                description: "String",
              },
            },
            {
              name: "--worker-region",
              description: "The region to run the workers in",
              args: {
                name: "WORKER_REGION",
              },
            },
            {
              name: "--worker-zone",
              description: "The zone to run the workers in",
              args: {
                name: "WORKER_ZONE",
              },
            },
            {
              name: "--zone",
              description: "(DEPRECATED) The zone to run the workers in",
              deprecated: true,
              args: {
                name: "ZONE",
              },
            },
          ],
          args: {
            name: "QUERY",
            description: "The SQL query to execute",
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
      name: "yaml",
      description:
        "A group of subcommands for launching Beam YAML jobs on Dataflow",
      subcommands: [
        {
          name: "run",
          description: "Runs a job from the specified path",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--additional-experiments",
              description:
                "Additional experiments to pass to the job. Example: --additional-experiments=experiment1,experiment2=value2",
              args: {
                name: "ADDITIONAL_EXPERIMENTS",
                description: "List",
              },
            },
            {
              name: "--additional-pipeline-options",
              description:
                "Additional pipeline options to pass to the job. Example: --additional-pipeline-options=option1=value1,option2=value2 For a list of available options, see the Dataflow reference: https://cloud.google.com/dataflow/docs/reference/pipeline-options",
              args: {
                name: "ADDITIONAL_PIPELINE_OPTIONS",
                description: "List",
              },
            },
            optAdditionalUserLabels,
            optBillingProject,
            optConfiguration,
            {
              name: "--dataflow-kms-key",
              description: "Cloud KMS key to protect the job resources",
              args: {
                name: "DATAFLOW_KMS_KEY",
                description: "String",
              },
            },
            {
              name: "--disable-public-ips",
              description:
                "If specified, Cloud Dataflow workers will not use public IP addresses. Overrides the default *dataflow/disable_public_ips* property value for this command invocation",
            },
            {
              name: "--enable-streaming-engine",
              description:
                "Enable Streaming Engine for the streaming job. Overrides the default *dataflow/enable_streaming_engine* property value for this command invocation",
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
              name: "--jinja-variables",
              description: "Jinja2 variables to be used in reifying the yaml",
              args: {
                name: "JSON_OBJECT",
                description: "String",
              },
            },
            {
              name: "--launcher-machine-type",
              description:
                "The machine type to use for launching the job. If not set, Dataflow will select a default machine type",
              args: {
                name: "LAUNCHER_MACHINE_TYPE",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--max-workers",
              description: "Maximum number of workers to run",
              args: {
                name: "MAX_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--network",
              description:
                "Compute Engine network for launching worker instances to run the pipeline. If not set, the default network is used",
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            {
              name: "--no-disable-public-ips",
              description:
                "If specified, Cloud Dataflow workers will not use public IP addresses",
              hidden: true,
            },
            {
              name: "--no-enable-streaming-engine",
              description: "Enable Streaming Engine for the streaming job",
              hidden: true,
            },
            {
              name: "--no-update",
              description: "Specify this flag to update a streaming job",
              priority: 100,
            },
            {
              name: "--num-workers",
              description: "Initial number of workers to use",
              args: {
                name: "NUM_WORKERS",
                description: "Int",
              },
            },
            {
              name: "--pipeline-options",
              description: "(DEPRECATED) Pipeline options to pass to the job",
              deprecated: true,
              args: {
                name: "OPTIONS=VALUE;OPTION=VALUE",
                description: "Dict",
              },
            },
            optProject,
            optQuiet,
            optRegion,
            {
              name: "--service-account-email",
              description: "Service account to run the workers as",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
              },
            },
            {
              name: "--staging-location",
              description:
                "Google Cloud Storage location to stage local files. If not set, defaults to the value for --temp-location.(Must be a URL beginning with 'gs://'.)",
              args: {
                name: "STAGING_LOCATION",
              },
            },
            {
              name: "--subnetwork",
              description:
                "Compute Engine subnetwork for launching worker instances to run the pipeline. If not set, the default subnetwork is used",
              args: {
                name: "SUBNETWORK",
                description: "String",
              },
            },
            {
              name: "--temp-location",
              description:
                "Google Cloud Storage location to stage temporary files. If not set, defaults to the value for --staging-location.(Must be a URL beginning with 'gs://'.)",
              args: {
                name: "TEMP_LOCATION",
              },
            },
            {
              name: "--template-file-gcs-location",
              description:
                "Google Cloud Storage location of the YAML template to run. (Must be a URL beginning with 'gs://'.)",
              args: {
                name: "TEMPLATE_FILE_GCS_LOCATION",
              },
            },
            optTraceToken,
            optTransformNameMappings,
            {
              name: "--update",
              description:
                "Specify this flag to update a streaming job. Use *--update* to enable and *--no-update* to disable",
              priority: 100,
            },
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--worker-machine-type",
              description:
                "Type of machine to use for workers. Defaults to server-specified",
              args: {
                name: "WORKER_MACHINE_TYPE",
                description: "String",
              },
            },
            {
              name: "--yaml-pipeline",
              description: "Inline definition of the YAML pipeline to run",
              args: {
                name: "YAML_PIPELINE",
                description: "String",
              },
            },
            {
              name: "--yaml-pipeline-file",
              description:
                "Path of a file defining the YAML pipeline to run. (Must be a local file or a URL beginning with 'gs://'.)",
              args: {
                name: "YAML_PIPELINE_FILE",
                description: "String",
                template: "filepaths",
              },
            },
          ],
          args: {
            name: "JOB_NAME",
            description: "Unique name to assign to the job",
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
