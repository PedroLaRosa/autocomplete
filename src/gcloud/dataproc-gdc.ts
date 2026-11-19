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

const optAnnotations: Fig.Option = {
  name: "--annotations",
  description:
    "List of annotation KEY=VALUE pairs to add to the service instance",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
  },
};

const optApplication: Fig.Option = {
  name: "--application",
  description:
    "ID of the spark_application or fully qualified identifier for the spark_application",
  priority: 100,
  args: {
    name: "APPLICATION",
    description: "String",
  },
};

const optApplicationEnvironment: Fig.Option = {
  name: "--application-environment",
  description:
    "ID of the application_environment or fully qualified identifier for the application_environment",
  priority: 100,
  args: {
    name: "APPLICATION_ENVIRONMENT",
    description: "String",
  },
};

const optArchives: Fig.Option = {
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

const optDependencyImages: Fig.Option = {
  name: "--dependency-images",
  description:
    "Comma separated list of images containing dependencies for the Spark Application",
  args: {
    name: "IMAGE",
    description: "List",
  },
};

const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "Human-readable name for this service instance to be used in user interfaces",
  args: {
    name: "DISPLAY_NAME",
    description: "String",
  },
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

const optJars: Fig.Option = {
  name: "--jars",
  description:
    "Comma separated list of jar files to be provided to the executor and driver classpaths",
  args: {
    name: "JAR",
    description: "List",
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

const optLocation: Fig.Option = {
  name: "--location",
  description: "Location of the Dataproc GDC resource",
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

const optNamespace: Fig.Option = {
  name: "--namespace",
  description: "Namespace to run the application in",
  args: {
    name: "NAMESPACE",
    description: "String",
  },
};

const optNoAsync: Fig.Option = {
  name: "--no-async",
  description:
    "Return immediately, without waiting for the operation in progress to complete",
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

const optProperties: Fig.Option = {
  name: "--properties",
  description:
    "List of key value pairs to configure Spark. For a list of available properties, see: https://spark.apache.org/docs/latest/configuration.html#available-properties",
  args: {
    name: "PROPERTY=VALUE",
    description: "Dict",
  },
};

const optQuiet: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input is required, defaults will be used, or an error will be raised",
};

const optRequestId: Fig.Option = {
  name: "--request-id",
  description:
    "An optional request ID to identify requests. If the service receives two identical instance create requests with the same request_id, the second request is ignored and the operation that corresponds to the first request is returned for both",
  args: {
    name: "REQUEST_ID",
    description: "String",
  },
};

const optServiceInstance: Fig.Option = {
  name: "--service-instance",
  description:
    "ID of the service_instance or fully qualified identifier for the service_instance",
  priority: 100,
  args: {
    name: "SERVICE_INSTANCE",
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
  name: "dataproc-gdc",
  description: "Manage Dataproc Gdc resources",
  hidden: true,
  subcommands: [
    {
      name: "service-instances",
      description: "Manage Service Instance resources",
      hidden: true,
      subcommands: [
        {
          name: "spark-applications",
          description: "Manage Dataproc GDC Spark Applications",
          hidden: true,
          subcommands: [
            {
              name: "delete",
              description: "Delete a Dataproc GDC spark application",
              hidden: true,
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--allow-missing",
                  description:
                    "If set to true, and the service instance is not found, the request will succeed but no action will be taken on the server",
                },
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--etag",
                  description:
                    "Optional. The etag of the service instance. If this is provided, it must match the server etag",
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
                optLocation,
                optLogHttp,
                {
                  name: "--no-allow-missing",
                  description:
                    "If set to true, and the service instance is not found, the request will succeed but no action will be taken on the server",
                  hidden: true,
                },
                optNoAsync,
                optProject,
                optQuiet,
                {
                  name: "--request-id",
                  description:
                    "An optional request ID to identify requests. If the service receives two identical instance delete requests with the same request_id, the second request is ignored and the operation that corresponds to the first request is returned for both",
                  args: {
                    name: "REQUEST_ID",
                    description: "String",
                  },
                },
                {
                  name: "--service-instance",
                  description: "The id of the Dataproc GDC instance",
                  args: {
                    name: "SERVICE_INSTANCE",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SPARK_APPLICATION",
                description:
                  "ID of the spark_application or fully qualified identifier for the spark_application",
              },
            },
            {
              name: "describe",
              description: "Describe a Dataproc GDC spark application",
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
                {
                  name: "--service-instance",
                  description: "The id of the Dataproc GDC instance",
                  args: {
                    name: "SERVICE_INSTANCE",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SPARK_APPLICATION",
                description:
                  "ID of the spark_application or fully qualified identifier for the spark_application",
              },
            },
            {
              name: "list",
              description: "List Dataproc GDC Spark applications",
              hidden: true,
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
                optLocation,
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
                    "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is determined by the service if it supports paging, otherwise it is *unlimited* (no paging). Paging may be applied before or after *--filter* and *--limit* depending on the service",
                  args: {
                    name: "PAGE_SIZE",
                  },
                },
                optProject,
                optQuiet,
                optServiceInstance,
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
              name: "submit",
              description: "Submit Dataproc GDC Spark Applications",
              hidden: true,
              subcommands: [
                {
                  name: "pyspark",
                  description: "Create a Dataproc GDC pySpark application",
                  hidden: true,
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optAnnotations,
                    optApplication,
                    optApplicationEnvironment,
                    optArchives,
                    optAsync,
                    optBillingProject,
                    optConfiguration,
                    optDependencyImages,
                    optDisplayName,
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
                    optLocation,
                    optLogHttp,
                    optNamespace,
                    optNoAsync,
                    optProject,
                    optProperties,
                    {
                      name: "--py-file",
                      description: "Main .py file to run as the driver",
                      args: {
                        name: "PY_FILE",
                        description: "String",
                        template: "filepaths",
                      },
                    },
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
                    optRequestId,
                    optServiceInstance,
                    optTraceToken,
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
                  name: "spark",
                  description: "Create a Dataproc GDC spark application",
                  hidden: true,
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optAnnotations,
                    optApplication,
                    optApplicationEnvironment,
                    optArchives,
                    optAsync,
                    optBillingProject,
                    optConfiguration,
                    optDependencyImages,
                    optDisplayName,
                    optFiles,
                    optFlagsFile,
                    optFlatten,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    {
                      name: "--jar",
                      description:
                        "The HCFS URI of the jar file that contains the main class",
                      args: {
                        name: "JAR",
                        description: "String",
                      },
                    },
                    optJars,
                    optLabels,
                    optLocation,
                    optLogHttp,
                    {
                      name: "--main-class",
                      description:
                        "The name of the driver main class. The jar file that containsthe class must be in the classpath or specified in jar_file_uris",
                      args: {
                        name: "MAIN_CLASS",
                        description: "String",
                      },
                    },
                    optNamespace,
                    optNoAsync,
                    optProject,
                    optProperties,
                    optQuiet,
                    optRequestId,
                    optServiceInstance,
                    optTraceToken,
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
                  description: "Create a Dataproc GDC pySpark application",
                  hidden: true,
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optAnnotations,
                    optApplication,
                    optApplicationEnvironment,
                    optArchives,
                    optAsync,
                    optBillingProject,
                    optConfiguration,
                    optDependencyImages,
                    optDisplayName,
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
                    optLocation,
                    optLogHttp,
                    optNamespace,
                    optNoAsync,
                    optProject,
                    optProperties,
                    optQuiet,
                    {
                      name: "--r-file",
                      description:
                        "Required. The HCFS URI of the main R file to use as thedriver. Must be a .R file",
                      args: {
                        name: "R_FILE",
                        description: "String",
                        template: "filepaths",
                      },
                    },
                    optRequestId,
                    optServiceInstance,
                    optTraceToken,
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
                  name: "spark-sql",
                  description: "Create a Dataproc GDC Spark SQL application",
                  hidden: true,
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optAnnotations,
                    optApplication,
                    optApplicationEnvironment,
                    optAsync,
                    optBillingProject,
                    optConfiguration,
                    optDependencyImages,
                    optDisplayName,
                    {
                      name: "--file",
                      description:
                        "The HCFS URI of the script that contains SQL queries",
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
                    optJars,
                    optLabels,
                    optLocation,
                    optLogHttp,
                    optNamespace,
                    optNoAsync,
                    {
                      name: "--params",
                      description:
                        'Mapping of query variable names to values (equivalent to the Spark SQL command: SET `name="value";`)',
                      args: {
                        name: "PROPERTY=VALUE",
                        description: "Dict",
                      },
                    },
                    optProject,
                    optProperties,
                    {
                      name: "--query-file",
                      description:
                        "The HCFS URI of the script that contains SQL queries",
                      args: {
                        name: "QUERY_FILE",
                        description: "String",
                        template: "filepaths",
                      },
                    },
                    optQuiet,
                    optRequestId,
                    optServiceInstance,
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
                optDependencyImages,
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
