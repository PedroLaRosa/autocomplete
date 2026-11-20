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

const optAttemptDeadline: Fig.Option = {
  name: "--attempt-deadline",
  description:
    "The deadline for job attempts. If the request handler doesn't respond by this dealine, the request is cancelled and the attempt is marked as failed. For example, 20s",
  args: {
    name: "ATTEMPT_DEADLINE",
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

const optClearMaxBackoff: Fig.Option = {
  name: "--clear-max-backoff",
  description: "Clear the field corresponding to `--max-backoff`",
};

const optClearMaxDoublings: Fig.Option = {
  name: "--clear-max-doublings",
  description: "Clear the field corresponding to `--max-doublings`",
};

const optClearMaxRetryAttempts: Fig.Option = {
  name: "--clear-max-retry-attempts",
  description: "Clear the field corresponding to `--max-retry-attempts`",
};

const optClearMaxRetryDuration: Fig.Option = {
  name: "--clear-max-retry-duration",
  description: "Clear the field corresponding to `--max-retry-duration`",
};

const optClearMinBackoff: Fig.Option = {
  name: "--clear-min-backoff",
  description: "Clear the field corresponding to `--min-backoff`",
};

const optClearTimeZone: Fig.Option = {
  name: "--clear-time-zone",
  description: "Clear the field corresponding to `--time-zone`",
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

const optDescription: Fig.Option = {
  name: "--description",
  description: "Human-readable description of the job",
  args: {
    name: "DESCRIPTION",
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

const optHttpMethod: Fig.Option = {
  name: "--http-method",
  description:
    "HTTP method to use for the request. _HTTP_METHOD_ must be one of: *delete*, *get*, *head*, *post*, *put*",
  args: {
    name: "HTTP_METHOD",
    suggestions: ["delete", "get", "head", "post", "put"],
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
    "The location of the job. By default, uses the location of the current project's App Engine app if there is an associated app",
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

const optMaxBackoff: Fig.Option = {
  name: "--max-backoff",
  description:
    "Maximum amount of time to wait before retrying a job after it fails. For example, `60s`. Default is `3600s` (1 hour)",
  args: {
    name: "MAX_BACKOFF",
  },
};

const optMaxDoublings: Fig.Option = {
  name: "--max-doublings",
  description:
    "Maximum number of times that the interval between failed job retries will be doubled before the increase becomes constant",
  args: {
    name: "MAX_DOUBLINGS",
    description: "Int",
  },
};

const optMaxRetryAttempts: Fig.Option = {
  name: "--max-retry-attempts",
  description:
    "Number of times to retry the request if it fails or times out. Must be in range 0-5 inclusive. Default is 0",
  args: {
    name: "MAX_RETRY_ATTEMPTS",
    description: "Int",
  },
};

const optMaxRetryDuration: Fig.Option = {
  name: "--max-retry-duration",
  description:
    "Time limit for retrying a failed job, measured from when the job was first run. If specified with `--max-retry-attempts` greater than 0, the job will be retried until both limits are reached. Default is 0 seconds (which means unlimited); however, if `--max-retry-attempts` is also 0, a job attempt won't be retried if it fails",
  args: {
    name: "MAX_RETRY_DURATION",
  },
};

const optMessageBody: Fig.Option = {
  name: "--message-body",
  description:
    "Data payload to be included as the body of the HTTP request. May only be given with compatible HTTP methods (PUT or POST)",
  args: {
    name: "MESSAGE_BODY",
  },
};

const optMessageBodyFromFile: Fig.Option = {
  name: "--message-body-from-file",
  description:
    "Path to file containing the data payload to be included as the body of the HTTP request. May only be given with compatible HTTP methods (PUT or POST). Use a full or relative path to a local file containing the value of message_body",
  args: {
    name: "MESSAGE_BODY_FROM_FILE",
    template: "filepaths",
  },
};

const optMinBackoff: Fig.Option = {
  name: "--min-backoff",
  description:
    "Minimum amount of time to wait before retrying a job after it fails. For example, `10s`. Default is `5s`",
  args: {
    name: "MIN_BACKOFF",
  },
};

const optNoClearMaxBackoff: Fig.Option = {
  name: "--no-clear-max-backoff",
  description: "Clear the field corresponding to `--max-backoff`",
  hidden: true,
};

const optNoClearMaxDoublings: Fig.Option = {
  name: "--no-clear-max-doublings",
  description: "Clear the field corresponding to `--max-doublings`",
  hidden: true,
};

const optNoClearMaxRetryAttempts: Fig.Option = {
  name: "--no-clear-max-retry-attempts",
  description: "Clear the field corresponding to `--max-retry-attempts`",
  hidden: true,
};

const optNoClearMaxRetryDuration: Fig.Option = {
  name: "--no-clear-max-retry-duration",
  description: "Clear the field corresponding to `--max-retry-duration`",
  hidden: true,
};

const optNoClearMinBackoff: Fig.Option = {
  name: "--no-clear-min-backoff",
  description: "Clear the field corresponding to `--min-backoff`",
  hidden: true,
};

const optNoClearTimeZone: Fig.Option = {
  name: "--no-clear-time-zone",
  description: "Clear the field corresponding to `--time-zone`",
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

const optSchedule: Fig.Option = {
  name: "--schedule",
  description: "Schedule on which the job will be executed",
  priority: 100,
  args: {
    name: "SCHEDULE",
    description: "String",
  },
};

const optSchedule2: Fig.Option = {
  name: "--schedule",
  description: "Schedule on which the job will be executed",
  args: {
    name: "SCHEDULE",
    description: "String",
  },
};

const optTimeZone: Fig.Option = {
  name: "--time-zone",
  description:
    "Specifies the time zone to be used in interpreting --schedule. The value of this field must be a time zone name from the tz database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)",
  args: {
    name: "TIME_ZONE",
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
  name: "scheduler",
  description: "Manage Cloud Scheduler jobs and schedules",
  subcommands: [
    {
      name: "cmek-config",
      description: "Manage CMEK configuration for Cloud Scheduler",
      subcommands: [
        {
          name: "describe",
          description:
            "Get CMEK configuration for Cloud Scheduler in the specified location",
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
              description: "Google Cloud location for the KMS key",
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
        },
        {
          name: "update",
          description:
            "Update CMEK configuration for Cloud Scheduler in the specified location",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--clear-kms-key",
              description:
                "Disables CMEK for Cloud Scheduler in the specified location by clearing the Cloud KMS cryptokey from the Cloud Scheduler project and CMEK configuration",
              priority: 100,
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
              name: "--kms-key-name",
              description:
                "Fully qualified identifier for the key or just the key ID. The latter requires that the --kms-keyring and --kms-project flags be provided too",
              priority: 100,
              args: {
                name: "KMS_KEY_NAME",
                description: "String",
              },
            },
            {
              name: "--kms-keyring",
              description: "KMS keyring of the KMS key",
              args: {
                name: "KMS_KEYRING",
                description: "String",
              },
            },
            {
              name: "--kms-project",
              description: "Google Cloud project for the KMS key",
              args: {
                name: "KMS_PROJECT",
                description: "String",
              },
            },
            {
              name: "--location",
              description: "Google Cloud location for the KMS key",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--no-clear-kms-key",
              description:
                "Disables CMEK for Cloud Scheduler in the specified location by clearing the Cloud KMS cryptokey from the Cloud Scheduler project and CMEK configuration",
              hidden: true,
              priority: 100,
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
      name: "jobs",
      description: "Manage Cloud Scheduler jobs",
      subcommands: [
        {
          name: "create",
          description:
            "Create Cloud Scheduler jobs for various types of targets",
          subcommands: [
            {
              name: "app-engine",
              description:
                "Create a Cloud Scheduler job with an App Engine target",
              options: [
                optAccessTokenFile,
                optAccount,
                optAttemptDeadline,
                optBillingProject,
                optConfiguration,
                optDescription,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--headers",
                  description:
                    "KEY=VALUE pairs of HTTP headers to include in the request. *Cannot be repeated*. For example: `--headers Accept-Language=en-us,Accept=text/plain`",
                  args: {
                    name: "KEY=VALUE",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optHttpMethod,
                optImpersonateServiceAccount,
                optLocation,
                optLogHttp,
                optMaxBackoff,
                optMaxDoublings,
                optMaxRetryAttempts,
                optMaxRetryDuration,
                optMessageBody,
                optMessageBodyFromFile,
                optMinBackoff,
                optProject,
                optQuiet,
                {
                  name: "--relative-url",
                  description:
                    'Relative URL to use for the request (beginning with "/")',
                  args: {
                    name: "RELATIVE_URL",
                  },
                },
                optSchedule,
                {
                  name: "--service",
                  description:
                    "ID of the App Engine service to send the request to",
                  args: {
                    name: "SERVICE",
                    description: "String",
                  },
                },
                optTimeZone,
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
              name: "http",
              description:
                "Create a Cloud Scheduler job that triggers an action via HTTP",
              options: [
                optAccessTokenFile,
                optAccount,
                optAttemptDeadline,
                optBillingProject,
                optConfiguration,
                optDescription,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--headers",
                  description:
                    "KEY=VALUE pairs of HTTP headers to include in the request. *Cannot be repeated*. For example: `--headers Accept-Language=en-us,Accept=text/plain`",
                  args: {
                    name: "KEY=VALUE",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optHttpMethod,
                optImpersonateServiceAccount,
                optLocation,
                optLogHttp,
                optMaxBackoff,
                optMaxDoublings,
                optMaxRetryAttempts,
                optMaxRetryDuration,
                optMessageBody,
                optMessageBodyFromFile,
                optMinBackoff,
                {
                  name: "--oauth-service-account-email",
                  description:
                    "The service account email to be used for generating an OAuth2 access token to be included in the request sent to the target when executing the job. The service account must be within the same project as the job. The caller must have iam.serviceAccounts.actAs permission for the service account. The token must be OAuth if the target is a Google APIs service with URL `*.googleapis.com`",
                  priority: 100,
                  args: {
                    name: "OAUTH_SERVICE_ACCOUNT_EMAIL",
                    description: "String",
                  },
                },
                {
                  name: "--oauth-token-scope",
                  description:
                    'The scope to be used when generating an OAuth2 access token to be included in the request sent to the target when executing the job. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used',
                  args: {
                    name: "OAUTH_TOKEN_SCOPE",
                    description: "String",
                  },
                },
                {
                  name: "--oidc-service-account-email",
                  description:
                    "The service account email to be used for generating an OpenId Connect token to be included in the request sent to the target when executing the job. The service account must be within the same project as the job. The caller must have iam.serviceAccounts.actAs permission for the service account. The OIDC token is generally used *except* for Google APIs hosted on `*.googleapis.com`: these APIs expect an OAuth token",
                  priority: 100,
                  args: {
                    name: "OIDC_SERVICE_ACCOUNT_EMAIL",
                    description: "String",
                  },
                },
                {
                  name: "--oidc-token-audience",
                  description:
                    "The audience to be used when generating an OpenId Connect token to be included in the request sent to the target when executing the job. If not specified, the URI specified in target will be used",
                  args: {
                    name: "OIDC_TOKEN_AUDIENCE",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                optSchedule,
                optTimeZone,
                optTraceToken,
                {
                  name: "--uri",
                  description:
                    'The full URI path that the request will be sent to. This string must begin with either "http://" or "https://". For example, `http://acme.com` or `https://acme.com/sales:8080`. Cloud Scheduler will encode some characters for safety and compatibility. The maximum allowed URL length is 2083 characters after encoding',
                  priority: 100,
                  args: {
                    name: "URI",
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
              name: "pubsub",
              description: "Create a Cloud Scheduler job with a Pub/Sub target",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--attributes",
                  description:
                    'Comma-separated list of attributes. Each attribute has the form "NAME=VALUE". You can specify up to 100 attributes',
                  args: {
                    name: "ATTRIBUTES",
                  },
                },
                optBillingProject,
                optConfiguration,
                optDescription,
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
                optMaxBackoff,
                optMaxDoublings,
                optMaxRetryAttempts,
                optMaxRetryDuration,
                {
                  name: "--message-body",
                  description: "Body of the message",
                  args: {
                    name: "MESSAGE_BODY",
                    description: "String",
                  },
                },
                {
                  name: "--message-body-from-file",
                  description:
                    "Path to a file containing the body of the message. Use a full or relative path to a local file containing the value of message_body",
                  args: {
                    name: "MESSAGE_BODY_FROM_FILE",
                    template: "filepaths",
                  },
                },
                optMinBackoff,
                optProject,
                optQuiet,
                optSchedule,
                optTimeZone,
                {
                  name: "--topic",
                  description:
                    "Name of the Google Cloud Pub/Sub topic to publish to when the job runs",
                  priority: 100,
                  args: {
                    name: "TOPIC",
                  },
                },
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
          name: "delete",
          description: "Delete a job",
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
            name: "JOB",
            description:
              "ID of the job or fully qualified identifier for the job",
          },
        },
        {
          name: "describe",
          description: "Show details about a job",
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
                "ID of the location or fully qualified identifier for the location",
              args: {
                name: "LOCATION",
                description: "String",
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
          name: "pause",
          description: "Pause the execution of a job",
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
            name: "JOB",
            description:
              "ID of the job or fully qualified identifier for the job",
          },
        },
        {
          name: "resume",
          description: "Resume execution of a paused job",
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
            name: "JOB",
            description:
              "ID of the job or fully qualified identifier for the job",
          },
        },
        {
          name: "run",
          description: "Trigger an on-demand execution of a job",
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
            name: "JOB",
            description:
              "ID of the job or fully qualified identifier for the job",
          },
        },
        {
          name: "update",
          description:
            "Update Cloud Scheduler jobs for various types of targets",
          subcommands: [
            {
              name: "app-engine",
              description:
                "Update a Cloud Scheduler job with an App Engine target",
              options: [
                optAccessTokenFile,
                optAccount,
                optAttemptDeadline,
                optBillingProject,
                {
                  name: "--clear-headers",
                  description: "Clear the list of HTTP headers",
                },
                optClearMaxBackoff,
                optClearMaxDoublings,
                optClearMaxRetryAttempts,
                optClearMaxRetryDuration,
                {
                  name: "--clear-message-body",
                  description:
                    "Clear the field corresponding to `--message-body` or `--message-body-from-file`",
                },
                optClearMinBackoff,
                {
                  name: "--clear-relative-url",
                  description:
                    "Clear the field corresponding to `--relative-url`",
                },
                {
                  name: "--clear-service",
                  description: "Clear the field corresponding to `--service`",
                },
                optClearTimeZone,
                optConfiguration,
                optDescription,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optHttpMethod,
                optImpersonateServiceAccount,
                optLocation,
                optLogHttp,
                optMaxBackoff,
                optMaxDoublings,
                optMaxRetryAttempts,
                optMaxRetryDuration,
                optMessageBody,
                optMessageBodyFromFile,
                optMinBackoff,
                {
                  name: "--no-clear-headers",
                  description: "Clear the list of HTTP headers",
                  hidden: true,
                },
                optNoClearMaxBackoff,
                optNoClearMaxDoublings,
                optNoClearMaxRetryAttempts,
                optNoClearMaxRetryDuration,
                {
                  name: "--no-clear-message-body",
                  description:
                    "Clear the field corresponding to `--message-body` or `--message-body-from-file`",
                  hidden: true,
                },
                optNoClearMinBackoff,
                {
                  name: "--no-clear-relative-url",
                  description:
                    "Clear the field corresponding to `--relative-url`",
                  hidden: true,
                },
                {
                  name: "--no-clear-service",
                  description: "Clear the field corresponding to `--service`",
                  hidden: true,
                },
                optNoClearTimeZone,
                optProject,
                optQuiet,
                {
                  name: "--relative-url",
                  description:
                    'Relative URL to use for the request (beginning with "/")',
                  args: {
                    name: "RELATIVE_URL",
                  },
                },
                {
                  name: "--remove-headers",
                  description:
                    "KEY1,KEY2 list of HTTP headers to remove from the request. `--remove-headers Accept-Language,Accept`",
                  args: {
                    name: "REMOVE_HEADERS",
                    description: "List",
                  },
                },
                optSchedule2,
                {
                  name: "--service",
                  description:
                    "ID of the App Engine service to send the request to",
                  args: {
                    name: "SERVICE",
                    description: "String",
                  },
                },
                optTimeZone,
                optTraceToken,
                {
                  name: "--update-headers",
                  description:
                    "KEY=VALUE pairs of HTTP headers to include in the request. *Cannot be repeated*. For example: `--update-headers Accept-Language=en-us,Accept=text/plain`",
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
              name: "http",
              description:
                "Update a Cloud Scheduler job that triggers an action via HTTP",
              options: [
                optAccessTokenFile,
                optAccount,
                optAttemptDeadline,
                optBillingProject,
                {
                  name: "--clear-auth-token",
                  description:
                    "Clear the auth token fields: `--oidc-service-account-email`, `--oidc-token-audience`, `--oauth-service-account-email`, and `--oauth-token-scope`",
                },
                {
                  name: "--clear-headers",
                  description: "Clear the list of HTTP headers",
                },
                optClearMaxBackoff,
                optClearMaxDoublings,
                optClearMaxRetryAttempts,
                optClearMaxRetryDuration,
                {
                  name: "--clear-message-body",
                  description:
                    "Clear the field corresponding to `--message-body` or `--message-body-from-file`",
                },
                optClearMinBackoff,
                optClearTimeZone,
                optConfiguration,
                optDescription,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optHttpMethod,
                optImpersonateServiceAccount,
                optLocation,
                optLogHttp,
                optMaxBackoff,
                optMaxDoublings,
                optMaxRetryAttempts,
                optMaxRetryDuration,
                optMessageBody,
                optMessageBodyFromFile,
                optMinBackoff,
                {
                  name: "--no-clear-auth-token",
                  description:
                    "Clear the auth token fields: `--oidc-service-account-email`, `--oidc-token-audience`, `--oauth-service-account-email`, and `--oauth-token-scope`",
                  hidden: true,
                },
                {
                  name: "--no-clear-headers",
                  description: "Clear the list of HTTP headers",
                  hidden: true,
                },
                optNoClearMaxBackoff,
                optNoClearMaxDoublings,
                optNoClearMaxRetryAttempts,
                optNoClearMaxRetryDuration,
                {
                  name: "--no-clear-message-body",
                  description:
                    "Clear the field corresponding to `--message-body` or `--message-body-from-file`",
                  hidden: true,
                },
                optNoClearMinBackoff,
                optNoClearTimeZone,
                {
                  name: "--oauth-service-account-email",
                  description:
                    "The service account email to be used for generating an OAuth2 access token to be included in the request sent to the target when executing the job. The service account must be within the same project as the job. The caller must have iam.serviceAccounts.actAs permission for the service account. The token must be OAuth if the target is a Google APIs service with URL `*.googleapis.com`",
                  priority: 100,
                  args: {
                    name: "OAUTH_SERVICE_ACCOUNT_EMAIL",
                    description: "String",
                  },
                },
                {
                  name: "--oauth-token-scope",
                  description:
                    'The scope to be used when generating an OAuth2 access token to be included in the request sent to the target when executing the job. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used',
                  args: {
                    name: "OAUTH_TOKEN_SCOPE",
                    description: "String",
                  },
                },
                {
                  name: "--oidc-service-account-email",
                  description:
                    "The service account email to be used for generating an OpenId Connect token to be included in the request sent to the target when executing the job. The service account must be within the same project as the job. The caller must have iam.serviceAccounts.actAs permission for the service account. The OIDC token is generally used *except* for Google APIs hosted on `*.googleapis.com`: these APIs expect an OAuth token",
                  priority: 100,
                  args: {
                    name: "OIDC_SERVICE_ACCOUNT_EMAIL",
                    description: "String",
                  },
                },
                {
                  name: "--oidc-token-audience",
                  description:
                    "The audience to be used when generating an OpenId Connect token to be included in the request sent to the target when executing the job. If not specified, the URI specified in target will be used",
                  args: {
                    name: "OIDC_TOKEN_AUDIENCE",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                {
                  name: "--remove-headers",
                  description:
                    "KEY1,KEY2 list of HTTP headers to remove from the request. `--remove-headers Accept-Language,Accept`",
                  args: {
                    name: "REMOVE_HEADERS",
                    description: "List",
                  },
                },
                optSchedule2,
                optTimeZone,
                optTraceToken,
                {
                  name: "--update-headers",
                  description:
                    "KEY=VALUE pairs of HTTP headers to include in the request. *Cannot be repeated*. For example: `--update-headers Accept-Language=en-us,Accept=text/plain`",
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                  },
                },
                {
                  name: "--uri",
                  description:
                    'The full URI path that the request will be sent to. This string must begin with either "http://" or "https://". For example, `http://acme.com` or `https://acme.com/sales:8080`. Cloud Scheduler will encode some characters for safety and compatibility. The maximum allowed URL length is 2083 characters after encoding',
                  args: {
                    name: "URI",
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
              name: "pubsub",
              description: "Update a Cloud Scheduler job with a Pub/Sub target",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--clear-attributes",
                  description:
                    "Clear the field corresponding to `--attributes`",
                },
                optClearMaxBackoff,
                optClearMaxDoublings,
                optClearMaxRetryAttempts,
                optClearMaxRetryDuration,
                optClearMinBackoff,
                optClearTimeZone,
                optConfiguration,
                optDescription,
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
                optMaxBackoff,
                optMaxDoublings,
                optMaxRetryAttempts,
                optMaxRetryDuration,
                {
                  name: "--message-body",
                  description: "Body of the message",
                  args: {
                    name: "MESSAGE_BODY",
                    description: "String",
                  },
                },
                {
                  name: "--message-body-from-file",
                  description:
                    "Path to a file containing the body of the message. Use a full or relative path to a local file containing the value of message_body",
                  args: {
                    name: "MESSAGE_BODY_FROM_FILE",
                    template: "filepaths",
                  },
                },
                optMinBackoff,
                {
                  name: "--no-clear-attributes",
                  description:
                    "Clear the field corresponding to `--attributes`",
                  hidden: true,
                },
                optNoClearMaxBackoff,
                optNoClearMaxDoublings,
                optNoClearMaxRetryAttempts,
                optNoClearMaxRetryDuration,
                optNoClearMinBackoff,
                optNoClearTimeZone,
                optProject,
                optQuiet,
                {
                  name: "--remove-attributes",
                  description:
                    'Comma-separated list of attribute keys to remove with the form "KEY1,KEY2"',
                  args: {
                    name: "REMOVE_ATTRIBUTES",
                    description: "List",
                  },
                },
                optSchedule2,
                optTimeZone,
                {
                  name: "--topic",
                  description:
                    "Name of the Google Cloud Pub/Sub topic to publish to when the job runs",
                  args: {
                    name: "TOPIC",
                  },
                },
                optTraceToken,
                {
                  name: "--update-attributes",
                  description:
                    'Comma-separated list of attributes. Each attribute has the form "NAME=VALUE". You can specify up to 100 attributes',
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
      name: "locations",
      description: "Get information about Cloud Scheduler locations",
      subcommands: [
        {
          name: "describe",
          description: "Show details about a location",
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
            description: "The Cloud location to describe",
          },
        },
        {
          name: "list",
          description: "Lists the locations where Cloud Scheduler is available",
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
      description: "Get information about Cloud Scheduler operations",
      subcommands: [
        {
          name: "describe",
          description: "Show the latest status of an operation",
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
              name: "--name",
              description:
                "The full name of the Cloud Scheduler operation to describe. Format: projects/{project}/locations/{location}/operations/{operation}",
              priority: 100,
              args: {
                name: "NAME",
                description: "String",
              },
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
