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

const optDeployment: Fig.Option = {
  name: "--deployment",
  description: "Deployments TBD",
  args: {
    name: "DEPLOYMENT",
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
  description: "Locations TBD",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description: "The Cloud location for the deployment",
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

const completionSpec: Fig.Spec = {
  name: "infra-manager",
  description: "Manage Infra Manager resources",
  subcommands: [
    {
      name: "automigrationconfig",
      description: "Manage auto migration config resources",
      subcommands: [
        {
          name: "describe",
          description: "Describe an AutoMigrationConfig",
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
        },
        {
          name: "disable-auto-migration",
          description: "Disable AutoMigrationConfig",
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
        },
        {
          name: "enable-auto-migration",
          description: "Enable AutoMigrationConfig",
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
      name: "deployments",
      description: "Manage Deployment resources",
      subcommands: [
        {
          name: "apply",
          description: "Create or update a deployment",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--annotations",
              description:
                "Annotations to apply to the deployment. Existing values are overwritten. To retain the existing annotations on a deployment, do not specify this flag",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--artifacts-gcs-bucket",
              description:
                "User-defined location of Cloud Build logs, artifacts, and Terraform state files in Google Cloud Storage. Format: `gs://{bucket}/{folder}` A default bucket will be bootstrapped if the field is not set or empty",
              args: {
                name: "ARTIFACTS_GCS_BUCKET",
                description: "String",
              },
            },
            optAsync,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gcs-source",
              description:
                "URI of an object in Google Cloud Storage. e.g. `gs://{bucket}/{object}`",
              args: {
                name: "GCS_SOURCE",
                description: "String",
              },
            },
            {
              name: "--git-source-directory",
              description:
                "Subdirectory inside the repository. Example: 'staging/my-package'",
              args: {
                name: "GIT_SOURCE_DIRECTORY",
                description: "String",
              },
            },
            {
              name: "--git-source-ref",
              description:
                "Subdirectory inside the repository. Example: 'staging/my-package'",
              args: {
                name: "GIT_SOURCE_REF",
                description: "String",
              },
            },
            {
              name: "--git-source-repo",
              description:
                "Repository URL. Example: 'https://github.com/examples/repository.git'",
              args: {
                name: "GIT_SOURCE_REPO",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--ignore-file",
              description:
                "Override the `.gcloudignore` file and use the specified file instead. See `gcloud topic gcloudignore` for more information",
              args: {
                name: "IGNORE_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optImpersonateServiceAccount,
            {
              name: "--import-existing-resources",
              description:
                "By default, Infrastructure Manager will return a failure when Terraform encounters a 409 code (resource conflict error) during actuation. If this flag is set to true, Infrastructure Manager will instead attempt to automatically import the resource into the Terraform state (for supported resource types) and continue actuation",
            },
            {
              name: "--input-values",
              description:
                "Input variable values for the Terraform blueprint. It only accepts (key, value) pairs where value is a scalar value",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--inputs-file",
              description:
                "A .tfvars file containing terraform variable values. --inputs-file flag is supported for python version 3.6 and above",
              args: {
                name: "INPUTS_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--labels",
              description:
                "Labels to apply to the deployment. Existing values are overwritten. To retain the existing labels on a deployment, do not specify this flag",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--local-source",
              description:
                "Local storage path where config files are stored. When using this option, Terraform config file references outside this storage path is not supported. e.g. `./path/to/blueprint`",
              args: {
                name: "LOCAL_SOURCE",
                description: "String",
              },
            },
            optLocation3,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-import-existing-resources",
              description:
                "By default, Infrastructure Manager will return a failure when Terraform encounters a 409 code (resource conflict error) during actuation. If this flag is set to true, Infrastructure Manager will instead attempt to automatically import the resource into the Terraform state (for supported resource types) and continue actuation",
              hidden: true,
            },
            optProject,
            {
              name: "--provider-source",
              description:
                "Input to control from where to fetch providers. Supported values arePROVIDER_SOURCE_UNSPECIFIED, SERVICE_MAINTAINED",
              hidden: true,
              args: {
                name: "PROVIDER_SOURCE",
              },
            },
            optQuiet,
            {
              name: "--quota-validation",
              description:
                "Input to control quota checks for resources in terraform configuration files. There are limited resources on which quota validation applies. Supported values are QUOTA_VALIDATION_UNSPECIFIED, ENABLED, ENFORCED",
              args: {
                name: "QUOTA_VALIDATION",
              },
            },
            {
              name: "--service-account",
              description:
                "User-specified Service Account (SA) to be used as credential to manage resources. Format: `projects/{projectID}/serviceAccounts/{serviceAccount}`",
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
              },
            },
            {
              name: "--stage-bucket",
              description:
                "Use in conjunction with `--local-source` to specify a destination storage bucket for uploading local files",
              hidden: true,
              args: {
                name: "STAGE_BUCKET",
              },
            },
            {
              name: "--tf-version-constraint",
              description:
                'User-specified Terraform version constraint, for example "=1.3.10"',
              args: {
                name: "TF_VERSION_CONSTRAINT",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--worker-pool",
              description:
                "User-specified Worker Pool resource in which the Cloud Build job will execute. Format: projects/{project}/locations/{location}/workerPools/{workerPoolId}",
              args: {
                name: "WORKER_POOL",
                description: "String",
              },
            },
          ],
          args: {
            name: "DEPLOYMENT",
            description:
              "ID of the deployment or fully qualified identifier for the deployment",
          },
        },
        {
          name: "delete",
          description: "Delete deployments",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--delete-policy",
              description:
                "Policy on how resources actuated by the deployment should be deleted. The accepted values are DELETE, ABANDON. DELETE = Delete resources actuated by the deployment. ABANDON = Abandon resources and only delete deployment metadata. _DELETE_POLICY_ must be one of: *abandon*, *delete*, *delete-policy-unspecified*",
              args: {
                name: "DELETE_POLICY",
                suggestions: ["abandon", "delete", "delete-policy-unspecified"],
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
            name: "DEPLOYMENT",
            description:
              "ID of the deployment or fully qualified identifier for the deployment",
          },
        },
        {
          name: "describe",
          description: "Describe deployments",
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
            name: "DEPLOYMENT",
            description:
              "ID of the deployment or fully qualified identifier for the deployment",
          },
        },
        {
          name: "export-lock",
          description: "Exports lock info of a deployment",
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
            name: "DEPLOYMENT",
            description:
              "ID of the deployment or fully qualified identifier for the deployment",
          },
        },
        {
          name: "export-statefile",
          description: "Export a terraform state file",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--draft",
              description:
                "If this flag is set to true, the exported deployment state file will be the draft state",
            },
            {
              name: "--file",
              description:
                'File name for statefile. It is optional and it specifies the filename or complete path for the downloaded statefile. If only a file path is provided, the statefile will be downloaded as "statefile" within that directory. If a filename is included, the statefile will be downloaded with that name',
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
            optLocation3,
            optLogHttp,
            {
              name: "--no-draft",
              description:
                "If this flag is set to true, the exported deployment state file will be the draft state",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DEPLOYMENT",
            description:
              "ID of the deployment or fully qualified identifier for the deployment",
          },
        },
        {
          name: "import-statefile",
          description: "Import a terraform state file",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--file",
              description:
                "File path for importing statefile into a deployment. It specifies the local file path of an existing Terraform statefile to directly upload for a deployment",
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
            optLocation3,
            {
              name: "--lock-id",
              description:
                "Lock ID of the lock file to verify person importing owns lock",
              priority: 100,
              args: {
                name: "LOCK_ID",
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
            name: "DEPLOYMENT",
            description:
              "ID of the deployment or fully qualified identifier for the deployment",
          },
        },
        {
          name: "list",
          description: "List deployments",
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
          name: "lock",
          description: "Locks the deployment",
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
            name: "DEPLOYMENT",
            description:
              "ID of the deployment or fully qualified identifier for the deployment",
          },
        },
        {
          name: "unlock",
          description: "Unlocks the deployment",
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
            {
              name: "--lock-id",
              description:
                "Lock ID of the lock file to verify person importing owns lock",
              priority: 100,
              args: {
                name: "LOCK_ID",
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
          ],
          args: {
            name: "DEPLOYMENT",
            description:
              "ID of the deployment or fully qualified identifier for the deployment",
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
      name: "previews",
      description: "Manage Preview resources",
      subcommands: [
        {
          name: "create",
          description: "Create a preview",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--annotations",
              description:
                "Preview annotations cannot be updated after creation",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--artifacts-gcs-bucket",
              description:
                "User-defined location of Cloud Build logs, artifacts, and Terraform state files in Google Cloud Storage. Format: `gs://{bucket}/{folder}` A default bucket will be bootstrapped if the field is not set or empty",
              args: {
                name: "ARTIFACTS_GCS_BUCKET",
                description: "String",
              },
            },
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--deployment",
              description: "Deployment reference for preview",
              args: {
                name: "DEPLOYMENT",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gcs-source",
              description:
                "URI of an object in Google Cloud Storage. e.g. `gs://{bucket}/{object}`",
              args: {
                name: "GCS_SOURCE",
                description: "String",
              },
            },
            {
              name: "--git-source-directory",
              description:
                "Subdirectory inside the repository. Example: 'staging/my-package'",
              args: {
                name: "GIT_SOURCE_DIRECTORY",
                description: "String",
              },
            },
            {
              name: "--git-source-ref",
              description:
                "Subdirectory inside the repository. Example: 'staging/my-package'",
              args: {
                name: "GIT_SOURCE_REF",
                description: "String",
              },
            },
            {
              name: "--git-source-repo",
              description:
                "Repository URL. Example: 'https://github.com/examples/repository.git'",
              args: {
                name: "GIT_SOURCE_REPO",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--ignore-file",
              description:
                "Override the `.gcloudignore` file and use the specified file instead. See `gcloud topic gcloudignore` for more information",
              args: {
                name: "IGNORE_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optImpersonateServiceAccount,
            {
              name: "--input-values",
              description:
                "Input variable values for the Terraform blueprint. It only accepts (key, value) pairs where value is a scalar value",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--inputs-file",
              description:
                "A .tfvars file containing terraform variable values. --inputs-file flag is supported for python version 3.6 and above",
              args: {
                name: "INPUTS_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--labels",
              description: "Preview labels cannot be updated after creation",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--local-source",
              description:
                "Local storage path where config files are stored. When using this option, Terraform config file references outside this storage path is not supported. e.g. `./path/to/blueprint`",
              args: {
                name: "LOCAL_SOURCE",
                description: "String",
              },
            },
            optLocation,
            optLogHttp,
            optNoAsync,
            {
              name: "--preview-mode",
              description: "Preview mode to set it to either default or delete",
              args: {
                name: "PREVIEW_MODE",
                description: "String",
              },
            },
            optProject,
            {
              name: "--provider-source",
              description:
                "Input to control from where to fetch providers. Supported values arePROVIDER_SOURCE_UNSPECIFIED, SERVICE_MAINTAINED",
              hidden: true,
              args: {
                name: "PROVIDER_SOURCE",
              },
            },
            optQuiet,
            {
              name: "--service-account",
              description:
                "User-specified Service Account (SA) to be used as credential to manage resources. Format: `projects/{projectID}/serviceAccounts/{serviceAccount}`",
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
              },
            },
            {
              name: "--stage-bucket",
              description:
                "Use in conjunction with `--local-source` to specify a destination storage bucket for uploading local files",
              hidden: true,
              args: {
                name: "STAGE_BUCKET",
              },
            },
            {
              name: "--tf-version-constraint",
              description:
                'User-specified Terraform version constraint, for example "=1.3.10"',
              args: {
                name: "TF_VERSION_CONSTRAINT",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--worker-pool",
              description:
                "User-specified Worker Pool resource in which the Cloud Build job will execute. Format: projects/{project}/locations/{location}/workerPools/{workerPoolId}",
              args: {
                name: "WORKER_POOL",
                description: "String",
              },
            },
          ],
          args: {
            name: "PREVIEW",
            description:
              "ID of the preview or fully qualified identifier for the preview",
          },
        },
        {
          name: "delete",
          description: "Delete previews",
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
            name: "PREVIEW",
            description:
              "ID of the preview or fully qualified identifier for the preview",
          },
        },
        {
          name: "describe",
          description: "Describe previews",
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
            name: "PREVIEW",
            description:
              "ID of the preview or fully qualified identifier for the preview",
          },
        },
        {
          name: "export",
          description: "Export preview results",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--file",
              description:
                'File name for preview export artifacts. It is optional and it specifies the filename or complete path for the downloaded preview export artifacts. If only a file path is provided, the artifacts will be downloaded as "preview" within that directory. If a filename is included, the artifacts will be downloaded with that name',
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
              name: "--location",
              description: "The Cloud location for the preview",
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
            name: "PREVIEW",
            description:
              "ID of the preview or fully qualified identifier for the preview",
          },
        },
        {
          name: "list",
          description: "List previews",
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
      name: "resource-changes",
      description: "Manage resource change resources",
      subcommands: [
        {
          name: "describe",
          description: "Describe resource changes",
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
            {
              name: "--preview",
              description: "Preview TBD",
              args: {
                name: "PREVIEW",
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
            name: "RESOURCE_CHANGE",
            description:
              "ID of the resourceChange or fully qualified identifier for the resourceChange",
          },
        },
        {
          name: "list",
          description: "List resource changes",
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
            {
              name: "--preview",
              description:
                "ID of the preview or fully qualified identifier for the preview",
              priority: 100,
              args: {
                name: "PREVIEW",
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
      name: "resource-drifts",
      description: "Manage resource drift resources",
      subcommands: [
        {
          name: "describe",
          description: "Describe resource drifts",
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
            {
              name: "--preview",
              description: "Preview TBD",
              args: {
                name: "PREVIEW",
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
            name: "RESOURCE_DRIFT",
            description:
              "ID of the resourceDrift or fully qualified identifier for the resourceDrift",
          },
        },
        {
          name: "list",
          description: "List resource drifts",
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
            {
              name: "--preview",
              description:
                "ID of the preview or fully qualified identifier for the preview",
              priority: 100,
              args: {
                name: "PREVIEW",
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
      name: "resources",
      description: "List or describe resources under a Revision",
      subcommands: [
        {
          name: "describe",
          description: "Describe resources",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDeployment,
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
            {
              name: "--revision",
              description: "Revisions TBD",
              args: {
                name: "REVISION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RESOURCE",
            description:
              "ID of the resource or fully qualified identifier for the resource",
          },
        },
        {
          name: "list",
          description: "List resources",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDeployment,
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
            {
              name: "--revision",
              description:
                "ID of the revision or fully qualified identifier for the revision",
              priority: 100,
              args: {
                name: "REVISION",
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
      name: "revisions",
      description: "Manage Revision resources",
      subcommands: [
        {
          name: "describe",
          description: "Describe revisions",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDeployment,
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
            name: "REVISION",
            description:
              "ID of the revision or fully qualified identifier for the revision",
          },
        },
        {
          name: "export-statefile",
          description: "Export a terraform state file",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--deployment",
              description: "The deployment for the revision",
              args: {
                name: "DEPLOYMENT",
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
              name: "--location",
              description: "The Cloud location for the revision",
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
            name: "REVISION",
            description:
              "ID of the revision or fully qualified identifier for the revision",
          },
        },
        {
          name: "list",
          description: "List revisions",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--deployment",
              description:
                "ID of the deployment or fully qualified identifier for the deployment",
              priority: 100,
              args: {
                name: "DEPLOYMENT",
                description: "String",
              },
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
      name: "terraform-versions",
      description: "Manage Terraform version resources",
      subcommands: [
        {
          name: "describe",
          description: "Describe Terraform versions",
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
            name: "TERRAFORM_VERSION",
            description:
              "ID of the terraformVersion or fully qualified identifier for the terraformVersion",
          },
        },
        {
          name: "list",
          description: "List Terraform versions",
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
