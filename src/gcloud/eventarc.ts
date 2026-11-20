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

const optClearCryptoKey: Fig.Option = {
  name: "--clear-crypto-key",
  description:
    "Remove the previously configured crypto key. The channel will continue to be encrypted using Google-managed keys",
};

const optClearLabels: Fig.Option = {
  name: "--clear-labels",
  description:
    "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
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

const optCryptoKey: Fig.Option = {
  name: "--crypto-key",
  description:
    "Fully qualified name of the crypto key to use for customer-managed encryption. If this is unspecified, Google-managed keys will be used for encryption",
  args: {
    name: "CRYPTO_KEY",
    description: "String",
  },
};

const optEventAttributes: Fig.Option = {
  name: "--event-attributes",
  description:
    "Event attributes. The event attributes of a published event.This flag can be repeated to add more attributes",
  isRepeatable: true,
  args: {
    name: "ATTRIBUTE=VALUE",
    description: "Dict",
  },
};

const optEventData: Fig.Option = {
  name: "--event-data",
  description: "An event data. The event data of a published event",
  priority: 100,
  args: {
    name: "EVENT_DATA",
    description: "String",
  },
};

const optEventId: Fig.Option = {
  name: "--event-id",
  description: "An event id. The id of a published event",
  priority: 100,
  args: {
    name: "EVENT_ID",
    description: "String",
  },
};

const optEventSource: Fig.Option = {
  name: "--event-source",
  description: "An event source. The event source of a published event",
  priority: 100,
  args: {
    name: "EVENT_SOURCE",
    description: "String",
  },
};

const optEventType: Fig.Option = {
  name: "--event-type",
  description: "An event type. The event type of a published event",
  priority: 100,
  args: {
    name: "EVENT_TYPE",
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
  description:
    "The location for the Eventarc Google API source, which should be one of the supported regions. Alternatively, set the [eventarc/location] property",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description:
    "The location for the Eventarc channel connection, which should be either ``global'' or one of the supported regions. Alternatively, set the [eventarc/location] property",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation4: Fig.Option = {
  name: "--location",
  description:
    "The location for the Eventarc channel, which should be either ``global'' or one of the supported regions. Alternatively, set the [eventarc/location] property",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation5: Fig.Option = {
  name: "--location",
  description:
    "The location for the Eventarc enrollment, which should be one of the supported regions. Alternatively, set the [eventarc/location] property",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation6: Fig.Option = {
  name: "--location",
  description:
    "The location for the Eventarc message bus, which should be one of the supported regions. Alternatively, set the [eventarc/location] property",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation7: Fig.Option = {
  name: "--location",
  description:
    "The location for the Eventarc pipeline, which should be one of the supported regions. Alternatively, set the [eventarc/location] property",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation8: Fig.Option = {
  name: "--location",
  description:
    "The location for the Eventarc trigger, which should be either ``global'' or one of the supported regions. Alternatively, set the [eventarc/location] property",
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

const optNoClearCryptoKey: Fig.Option = {
  name: "--no-clear-crypto-key",
  description:
    "Remove the previously configured crypto key. The channel will continue to be encrypted using Google-managed keys",
  hidden: true,
};

const optNoClearLabels: Fig.Option = {
  name: "--no-clear-labels",
  description:
    "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
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

const optRemoveLabels: Fig.Option = {
  name: "--remove-labels",
  description:
    "List of label keys to remove. If a label does not exist it is silently ignored. If `--update-labels` is also specified then `--update-labels` is applied first",
  args: {
    name: "KEY",
    description: "List",
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

const optUpdateLabels: Fig.Option = {
  name: "--update-labels",
  description:
    "List of label KEY=VALUE pairs to update. If a label exists, its value is modified. Otherwise, a new label is created",
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
  name: "eventarc",
  description: "Manage Eventarc resources",
  subcommands: [
    {
      name: "audit-logs-provider",
      description:
        "Explore provider serviceNames and methodNames for event type `google.cloud.audit.log.v1.written` in Eventarc",
      subcommands: [
        {
          name: "method-names",
          description:
            "Explore values for the methodName attribute for event type `google.cloud.audit.log.v1.written`",
          subcommands: [
            {
              name: "list",
              description:
                "List values for the methodName attribute for event type `google.cloud.audit.log.v1.written`",
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
                  name: "--service-name",
                  description:
                    "The value of the serviceName CloudEvents attribute",
                  priority: 100,
                  args: {
                    name: "SERVICE_NAME",
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
          name: "service-names",
          description:
            "Explore values for the serviceName attribute for event type `google.cloud.audit.log.v1.written`",
          subcommands: [
            {
              name: "list",
              description:
                "List values for the serviceName attribute for event type `google.cloud.audit.log.v1.written`",
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
      name: "channel-connections",
      description: "Manage Eventarc channel connections",
      subcommands: [
        {
          name: "create",
          description: "Create an Eventarc channel connection",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--activation-token",
              description: "Activation token for the specified channel",
              priority: 100,
              args: {
                name: "ACTIVATION_TOKEN",
                description: "String",
              },
            },
            optAsync,
            optBillingProject,
            {
              name: "--channel",
              description:
                "Subscriber channel for which to create the channel connection. This argument should be the full channel name, including project, location and the channel id",
              priority: 100,
              args: {
                name: "CHANNEL",
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
            {
              name: "--labels",
              description: "Labels to apply to the channel connection",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
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
            name: "CHANNEL_CONNECTION",
            description:
              "ID of the channel connection or fully qualified identifier for the channel connection",
          },
        },
        {
          name: "delete",
          description: "Delete an Eventarc channel connection",
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
            name: "CHANNEL_CONNECTION",
            description:
              "ID of the channel connection or fully qualified identifier for the channel connection",
          },
        },
        {
          name: "describe",
          description: "Describe an Eventarc channel connection",
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
            name: "CHANNEL_CONNECTION",
            description:
              "ID of the channel connection or fully qualified identifier for the channel connection",
          },
        },
        {
          name: "list",
          description: "List Eventarc channel connections",
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
          name: "publish",
          description: "Publish to an Eventarc channel connection",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optEventAttributes,
            optEventData,
            optEventId,
            optEventSource,
            optEventType,
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
            name: "CHANNEL_CONNECTION",
            description:
              "ID of the channel connection or fully qualified identifier for the channel connection",
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
      name: "channels",
      description: "Manage Eventarc channels",
      subcommands: [
        {
          name: "create",
          description: "Create an Eventarc channel",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optCryptoKey,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLabels,
            optLocation4,
            optLogHttp,
            optNoAsync,
            optProject,
            {
              name: "--provider",
              description:
                "ID of the provider or fully qualified identifier for the provider",
              priority: 100,
              args: {
                name: "PROVIDER",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CHANNEL",
            description:
              "ID of the channel or fully qualified identifier for the channel",
          },
        },
        {
          name: "delete",
          description: "Delete an Eventarc channel",
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
            optLocation4,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CHANNEL",
            description:
              "ID of the channel or fully qualified identifier for the channel",
          },
        },
        {
          name: "describe",
          description: "Describe an Eventarc channel",
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
            optLocation4,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CHANNEL",
            description:
              "ID of the channel or fully qualified identifier for the channel",
          },
        },
        {
          name: "list",
          description: "List Eventarc channels",
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
          name: "publish",
          description: "Publish to an Eventarc channel",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optEventAttributes,
            optEventData,
            optEventId,
            optEventSource,
            optEventType,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation4,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CHANNEL",
            description:
              "ID of the channel or fully qualified identifier for the channel",
          },
        },
        {
          name: "update",
          description: "Update an Eventarc channel",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optClearCryptoKey,
            optClearLabels,
            optConfiguration,
            optCryptoKey,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation4,
            optLogHttp,
            optNoAsync,
            optNoClearCryptoKey,
            optNoClearLabels,
            optProject,
            optQuiet,
            optRemoveLabels,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CHANNEL",
            description:
              "ID of the channel or fully qualified identifier for the channel",
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
      name: "enrollments",
      description: "Manage Eventarc enrollments",
      subcommands: [
        {
          name: "create",
          description: "Create an Eventarc enrollment",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--cel-match",
              description: "The cel match expression for the enrollment",
              priority: 100,
              args: {
                name: "CEL_MATCH",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--destination-pipeline",
              description:
                "ID of the destination pipeline or fully qualified identifier for the destination pipeline",
              priority: 100,
              args: {
                name: "DESTINATION_PIPELINE",
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
            optLabels,
            optLocation5,
            optLogHttp,
            {
              name: "--message-bus",
              description:
                "ID of the message bus or fully qualified identifier for the message bus",
              priority: 100,
              args: {
                name: "MESSAGE_BUS",
                description: "String",
              },
            },
            {
              name: "--message-bus-project",
              description:
                "Project ID of the Google Cloud project for the message bus",
              args: {
                name: "MESSAGE_BUS_PROJECT",
                description: "String",
              },
            },
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENROLLMENT",
            description:
              "ID of the enrollment or fully qualified identifier for the enrollment",
          },
        },
        {
          name: "delete",
          description: "Delete an Eventarc enrollment",
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
            optLocation5,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENROLLMENT",
            description:
              "ID of the enrollment or fully qualified identifier for the enrollment",
          },
        },
        {
          name: "describe",
          description: "Describe an Eventarc enrollment",
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
            optLocation5,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENROLLMENT",
            description:
              "ID of the enrollment or fully qualified identifier for the enrollment",
          },
        },
        {
          name: "list",
          description: "List Eventarc enrollments",
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
          name: "update",
          description: "Update an Eventarc enrollment",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--cel-match",
              description: "The cel match expression for the enrollment",
              args: {
                name: "CEL_MATCH",
                description: "String",
              },
            },
            optClearLabels,
            optConfiguration,
            {
              name: "--destination-pipeline",
              description:
                "ID of the pipeline or fully qualified identifier for the pipeline",
              priority: 100,
              args: {
                name: "DESTINATION_PIPELINE",
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
            optLocation5,
            optLogHttp,
            optNoAsync,
            optNoClearLabels,
            optProject,
            optQuiet,
            optRemoveLabels,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENROLLMENT",
            description:
              "ID of the enrollment or fully qualified identifier for the enrollment",
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
      name: "gke-destinations",
      description: "Manage Eventarc with Cloud Run for Anthos/GKE destinations",
      hidden: true,
      subcommands: [
        {
          name: "init",
          description:
            "Initialize a project for Eventarc with Cloud Run for Anthos/GKE destinations",
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
      name: "google-api-sources",
      description: "Manage Eventarc Google API sources",
      subcommands: [
        {
          name: "create",
          description: "Create an Eventarc Google API source",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optCryptoKey,
            {
              name: "--destination-message-bus",
              description:
                "ID of the message bus or fully qualified identifier for the message bus",
              priority: 100,
              args: {
                name: "DESTINATION_MESSAGE_BUS",
                description: "String",
              },
            },
            {
              name: "--destination-message-bus-project",
              description:
                "Project ID of the Google Cloud project for the message bus",
              args: {
                name: "DESTINATION_MESSAGE_BUS_PROJECT",
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
            optLabels,
            optLocation2,
            optLogHttp,
            {
              name: "--logging-config",
              description:
                "The logging config for the Google API source. _LOGGING_CONFIG_ must be one of: *NONE*, *DEBUG*, *INFO*, *NOTICE*, *WARNING*, *ERROR*, *CRITICAL*, *ALERT*, *EMERGENCY*",
              args: {
                name: "LOGGING_CONFIG",
                description: "String",
                suggestions: [
                  "NONE",
                  "DEBUG",
                  "INFO",
                  "NOTICE",
                  "WARNING",
                  "ERROR",
                  "CRITICAL",
                  "ALERT",
                  "EMERGENCY",
                ],
              },
            },
            optNoAsync,
            {
              name: "--no-organization-subscription",
              description: "The organization subscription for the resource",
            },
            {
              name: "--organization-subscription",
              description:
                "The organization subscription for the resource. Use *--organization-subscription* to enable and *--no-organization-subscription* to disable",
            },
            optProject,
            {
              name: "--project-subscriptions",
              description: "The project subscriptions for the resource",
              args: {
                name: "GAS_PROJECT_SUBSCRIPTION",
                description: "List",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "GOOGLE_API_SOURCE",
            description:
              "ID of the Google API source or fully qualified identifier for the Google API source",
          },
        },
        {
          name: "delete",
          description: "Delete an Eventarc Google API source",
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
            name: "GOOGLE_API_SOURCE",
            description:
              "ID of the Google API source or fully qualified identifier for the Google API source",
          },
        },
        {
          name: "describe",
          description: "Describe an Eventarc Google API source",
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
            name: "GOOGLE_API_SOURCE",
            description:
              "ID of the Google API source or fully qualified identifier for the Google API source",
          },
        },
        {
          name: "list",
          description: "List Eventarc Google API sources",
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
          name: "update",
          description: "Update an Eventarc Google API source",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optClearCryptoKey,
            optClearLabels,
            {
              name: "--clear-project-subscriptions",
              description: "Clear the project subscriptions for the resource",
            },
            optConfiguration,
            optCryptoKey,
            {
              name: "--destination-message-bus",
              description:
                "ID of the message bus or fully qualified identifier for the message bus",
              priority: 100,
              args: {
                name: "DESTINATION_MESSAGE_BUS",
                description: "String",
              },
            },
            {
              name: "--destination-message-bus-project",
              description:
                "Project ID of the Google Cloud project for the message bus",
              args: {
                name: "DESTINATION_MESSAGE_BUS_PROJECT",
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
            optLocation2,
            optLogHttp,
            {
              name: "--logging-config",
              description:
                "The logging config of the Google API source. _LOGGING_CONFIG_ must be one of: *NONE*, *DEBUG*, *INFO*, *NOTICE*, *WARNING*, *ERROR*, *CRITICAL*, *ALERT*, *EMERGENCY*",
              args: {
                name: "LOGGING_CONFIG",
                description: "String",
                suggestions: [
                  "NONE",
                  "DEBUG",
                  "INFO",
                  "NOTICE",
                  "WARNING",
                  "ERROR",
                  "CRITICAL",
                  "ALERT",
                  "EMERGENCY",
                ],
              },
            },
            optNoAsync,
            optNoClearCryptoKey,
            optNoClearLabels,
            {
              name: "--no-clear-project-subscriptions",
              description: "Clear the project subscriptions for the resource",
              hidden: true,
            },
            {
              name: "--no-organization-subscription",
              description: "The organization subscription for the resource",
            },
            {
              name: "--organization-subscription",
              description:
                "The organization subscription for the resource. Use *--organization-subscription* to enable and *--no-organization-subscription* to disable",
            },
            optProject,
            {
              name: "--project-subscriptions",
              description: "The project subscriptions for the resource",
              args: {
                name: "GAS_PROJECT_SUBSCRIPTION",
                description: "List",
              },
            },
            optQuiet,
            optRemoveLabels,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "GOOGLE_API_SOURCE",
            description:
              "ID of the Google API source or fully qualified identifier for the Google API source",
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
      name: "google-channels",
      description: "Manage Eventarc Google channels",
      subcommands: [
        {
          name: "describe",
          description: "Describe an Eventarc Google channel",
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
          name: "update",
          description: "Update an Eventarc Google channel",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optClearCryptoKey,
            optClearLabels,
            optConfiguration,
            optCryptoKey,
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
            optNoClearCryptoKey,
            optNoClearLabels,
            optProject,
            optQuiet,
            optRemoveLabels,
            optTraceToken,
            optUpdateLabels,
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
      description: "Explore locations available for Eventarc",
      subcommands: [
        {
          name: "list",
          description: "List locations available for Eventarc",
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
      name: "message-buses",
      description: "Manage Eventarc message buses",
      subcommands: [
        {
          name: "create",
          description: "Create an Eventarc message bus",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optCryptoKey,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLabels,
            optLocation6,
            optLogHttp,
            {
              name: "--logging-config",
              description:
                "The logging config of the message bus. _LOGGING_CONFIG_ must be one of: *NONE*, *DEBUG*, *INFO*, *NOTICE*, *WARNING*, *ERROR*, *CRITICAL*, *ALERT*, *EMERGENCY*",
              args: {
                name: "LOGGING_CONFIG",
                description: "String",
                suggestions: [
                  "NONE",
                  "DEBUG",
                  "INFO",
                  "NOTICE",
                  "WARNING",
                  "ERROR",
                  "CRITICAL",
                  "ALERT",
                  "EMERGENCY",
                ],
              },
            },
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MESSAGE_BUS",
            description:
              "ID of the message bus or fully qualified identifier for the message bus",
          },
        },
        {
          name: "delete",
          description: "Delete an Eventarc message bus",
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
            optLocation6,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MESSAGE_BUS",
            description:
              "ID of the message bus or fully qualified identifier for the message bus",
          },
        },
        {
          name: "describe",
          description: "Describe an Eventarc message bus",
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
            optLocation6,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MESSAGE_BUS",
            description:
              "ID of the message bus or fully qualified identifier for the message bus",
          },
        },
        {
          name: "list",
          description: "List Eventarc message buses",
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
          name: "list-enrollments",
          description:
            "List Eventarc enrollments attached to an Eventarc message bus",
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
            optLocation6,
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
          args: {
            name: "MESSAGE_BUS",
            description:
              "ID of the message bus or fully qualified identifier for the message bus",
          },
        },
        {
          name: "publish",
          description: "Publish to an Eventarc message bus",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--avro-message",
              description: "An Avro message to publish to the message bus",
              args: {
                name: "AVRO_MESSAGE",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--destination-enrollment",
              description:
                "ID of the enrollment or fully qualified identifier for the enrollment",
              hidden: true,
              args: {
                name: "DESTINATION_ENROLLMENT",
                description: "String",
              },
            },
            {
              name: "--destination-enrollment-project",
              description:
                "Project ID of the Google Cloud project for the enrollment",
              hidden: true,
              args: {
                name: "DESTINATION_ENROLLMENT_PROJECT",
                description: "String",
              },
            },
            optEventAttributes,
            optEventData,
            optEventId,
            optEventSource,
            optEventType,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--json-message",
              description: "A JSON message to publish to the message bus",
              args: {
                name: "JSON_MESSAGE",
                description: "String",
              },
            },
            optLocation6,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MESSAGE_BUS",
            description:
              "ID of the message bus or fully qualified identifier for the message bus",
          },
        },
        {
          name: "update",
          description: "Update an Eventarc message bus",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optClearCryptoKey,
            optClearLabels,
            optConfiguration,
            optCryptoKey,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation6,
            optLogHttp,
            {
              name: "--logging-config",
              description:
                "The logging config of the message bus. _LOGGING_CONFIG_ must be one of: *NONE*, *DEBUG*, *INFO*, *NOTICE*, *WARNING*, *ERROR*, *CRITICAL*, *ALERT*, *EMERGENCY*",
              args: {
                name: "LOGGING_CONFIG",
                description: "String",
                suggestions: [
                  "NONE",
                  "DEBUG",
                  "INFO",
                  "NOTICE",
                  "WARNING",
                  "ERROR",
                  "CRITICAL",
                  "ALERT",
                  "EMERGENCY",
                ],
              },
            },
            optNoAsync,
            optNoClearCryptoKey,
            optNoClearLabels,
            optProject,
            optQuiet,
            optRemoveLabels,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MESSAGE_BUS",
            description:
              "ID of the message bus or fully qualified identifier for the message bus",
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
      name: "pipelines",
      description: "Manage Eventarc pipelines",
      subcommands: [
        {
          name: "create",
          description: "Create an Eventarc pipeline",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optCryptoKey,
            {
              name: "--destinations",
              description:
                "The pipeline's destinations. This flag can be repeated to add more destinations to the list. Currently, only one destination is supported per pipeline. A destination is specified in a dict format. For more information, see [Create an enrollment to receive events](https://cloud.google.com/eventarc/advanced/docs/receive-events/create-enrollment)",
              priority: 100,
              isRepeatable: true,
              args: {
                name: "http_endpoint_uri=URI,http_endpoint_message_binding_template=HTTP_ENDPOINT_MESSAGE_BINDING_TEMPLATE,workflow=WORKFLOW,message_bus=MESSAGE_BUS,pubsub_topic=PUBSUB_TOPIC,project=PROJECT,location=LOCATION,network_attachment=NETWORK_ATTACHMENT,google_oidc_authentication_service_account=GOOGLE_OIDC_AUTHENTICATION_SERVICE_ACCOUNT,google_oidc_authentication_audience=GOOGLE_OIDC_AUTHENTICATION_AUDIENCE,oauth_token_authentication_service_account=OAUTH_TOKEN_AUTHENTICATION_SERVICE_ACCOUNT,oauth_token_authentication_scope=OAUTH_TOKEN_AUTHENTICATION_SCOPE,output_payload_format_json=OUTPUT_PAYLOAD_FORMAT_JSON,output_payload_format_avro_schema_definition=OUTPUT_PAYLOAD_FORMAT_AVRO_SCHEMA_DEFINITION,output_payload_format_protobuf_schema_definition=OUTPUT_PAYLOAD_FORMAT_PROTOBUF_SCHEMA_DEFINITION",
                description: "List",
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
              name: "--input-payload-format-avro-schema-definition",
              description:
                "The pipeline's input payload Avro schema definition. If this is set, then any messages not matching this format will be treated as persistent errors",
              args: {
                name: "INPUT_PAYLOAD_FORMAT_AVRO_SCHEMA_DEFINITION",
                description: "String",
              },
            },
            {
              name: "--input-payload-format-json",
              description:
                "The pipeline's input payload format is JSON. If this is set, then any messages not matching this format will be treated as persistent errors",
              args: {
                name: "INPUT_PAYLOAD_FORMAT_JSON",
                description: "String",
              },
            },
            {
              name: "--input-payload-format-protobuf-schema-definition",
              description:
                "The pipeline's input payload Protobuf schema definition. If this is set, then any messages not matching this format will be treated as persistent errors",
              args: {
                name: "INPUT_PAYLOAD_FORMAT_PROTOBUF_SCHEMA_DEFINITION",
                description: "String",
              },
            },
            optLabels,
            optLocation7,
            optLogHttp,
            {
              name: "--logging-config",
              description:
                "The logging config of the pipeline. _LOGGING_CONFIG_ must be one of: *NONE*, *DEBUG*, *INFO*, *NOTICE*, *WARNING*, *ERROR*, *CRITICAL*, *ALERT*, *EMERGENCY*",
              args: {
                name: "LOGGING_CONFIG",
                description: "String",
                suggestions: [
                  "NONE",
                  "DEBUG",
                  "INFO",
                  "NOTICE",
                  "WARNING",
                  "ERROR",
                  "CRITICAL",
                  "ALERT",
                  "EMERGENCY",
                ],
              },
            },
            {
              name: "--max-retry-attempts",
              description:
                "The maximum number of delivery attempts. If not set, the default value is 5",
              args: {
                name: "MAX_RETRY_ATTEMPTS",
                description: "Int",
              },
            },
            {
              name: "--max-retry-delay",
              description:
                "The maximum retry delay in seconds. If not set, the default value is 60",
              args: {
                name: "MAX_RETRY_DELAY",
                description: "String",
              },
            },
            {
              name: "--mediations",
              description:
                "The different ways to modify the pipeline. Currently, only one mediation is supported per pipeline",
              args: {
                name: "transformation_template=TRANSFORMATION_TEMPLATE",
                description: "List",
              },
            },
            {
              name: "--min-retry-delay",
              description:
                "The minimum retry delay in seconds. If not set, the default value is 1",
              args: {
                name: "MIN_RETRY_DELAY",
                description: "String",
              },
            },
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PIPELINE",
            description:
              "ID of the pipeline or fully qualified identifier for the pipeline",
          },
        },
        {
          name: "delete",
          description: "Delete an Eventarc pipeline",
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
            optLocation7,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PIPELINE",
            description:
              "ID of the pipeline or fully qualified identifier for the pipeline",
          },
        },
        {
          name: "describe",
          description: "Describe an Eventarc pipeline",
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
            optLocation7,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PIPELINE",
            description:
              "ID of the pipeline or fully qualified identifier for the pipeline",
          },
        },
        {
          name: "list",
          description: "List Eventarc pipelines",
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
          name: "update",
          description: "Update an Eventarc pipeline",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optClearCryptoKey,
            optClearLabels,
            optConfiguration,
            optCryptoKey,
            {
              name: "--destinations",
              description:
                "The pipeline's destinations. This flag can be repeated to add more destinations to the list. Currently, only one destination is supported per pipeline. A destination is specified in a dict format. For more information, see [Create an enrollment to receive events](https://cloud.google.com/eventarc/advanced/docs/receive-events/create-enrollment)",
              isRepeatable: true,
              args: {
                name: "http_endpoint_uri=URI,http_endpoint_message_binding_template=HTTP_ENDPOINT_MESSAGE_BINDING_TEMPLATE,workflow=WORKFLOW,message_bus=MESSAGE_BUS,pubsub_topic=PUBSUB_TOPIC,project=PROJECT,location=LOCATION,network_attachment=NETWORK_ATTACHMENT,google_oidc_authentication_service_account=GOOGLE_OIDC_AUTHENTICATION_SERVICE_ACCOUNT,google_oidc_authentication_audience=GOOGLE_OIDC_AUTHENTICATION_AUDIENCE,oauth_token_authentication_service_account=OAUTH_TOKEN_AUTHENTICATION_SERVICE_ACCOUNT,oauth_token_authentication_scope=OAUTH_TOKEN_AUTHENTICATION_SCOPE,output_payload_format_json=OUTPUT_PAYLOAD_FORMAT_JSON,output_payload_format_avro_schema_definition=OUTPUT_PAYLOAD_FORMAT_AVRO_SCHEMA_DEFINITION,output_payload_format_protobuf_schema_definition=OUTPUT_PAYLOAD_FORMAT_PROTOBUF_SCHEMA_DEFINITION",
                description: "List",
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
              name: "--input-payload-format-avro-schema-definition",
              description:
                "The pipeline's input payload Avro schema definition. If this is set, then any messages not matching this format will be treated as persistent errors",
              args: {
                name: "INPUT_PAYLOAD_FORMAT_AVRO_SCHEMA_DEFINITION",
                description: "String",
              },
            },
            {
              name: "--input-payload-format-json",
              description:
                "The pipeline's input payload format is JSON. If this is set, then any messages not matching this format will be treated as persistent errors",
              args: {
                name: "INPUT_PAYLOAD_FORMAT_JSON",
                description: "String",
              },
            },
            {
              name: "--input-payload-format-protobuf-schema-definition",
              description:
                "The pipeline's input payload Protobuf schema definition. If this is set, then any messages not matching this format will be treated as persistent errors",
              args: {
                name: "INPUT_PAYLOAD_FORMAT_PROTOBUF_SCHEMA_DEFINITION",
                description: "String",
              },
            },
            optLocation7,
            optLogHttp,
            {
              name: "--logging-config",
              description:
                "The logging config of the pipeline. _LOGGING_CONFIG_ must be one of: *NONE*, *DEBUG*, *INFO*, *NOTICE*, *WARNING*, *ERROR*, *CRITICAL*, *ALERT*, *EMERGENCY*",
              args: {
                name: "LOGGING_CONFIG",
                description: "String",
                suggestions: [
                  "NONE",
                  "DEBUG",
                  "INFO",
                  "NOTICE",
                  "WARNING",
                  "ERROR",
                  "CRITICAL",
                  "ALERT",
                  "EMERGENCY",
                ],
              },
            },
            {
              name: "--max-retry-attempts",
              description:
                "The maximum number of delivery attempts. If not set, the default value is 5",
              args: {
                name: "MAX_RETRY_ATTEMPTS",
                description: "Int",
              },
            },
            {
              name: "--max-retry-delay",
              description:
                "The maximum retry delay in seconds. If not set, the default value is 60",
              args: {
                name: "MAX_RETRY_DELAY",
                description: "String",
              },
            },
            {
              name: "--mediations",
              description:
                "The different ways to modify the pipeline. Currently, only one mediation is supported per pipeline",
              args: {
                name: "transformation_template=TRANSFORMATION_TEMPLATE",
                description: "List",
              },
            },
            {
              name: "--min-retry-delay",
              description:
                "The minimum retry delay in seconds. If not set, the default value is 1",
              args: {
                name: "MIN_RETRY_DELAY",
                description: "String",
              },
            },
            optNoAsync,
            optNoClearCryptoKey,
            optNoClearLabels,
            optProject,
            optQuiet,
            optRemoveLabels,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PIPELINE",
            description:
              "ID of the pipeline or fully qualified identifier for the pipeline",
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
      name: "providers",
      description: "Explore event providers available in Eventarc",
      subcommands: [
        {
          name: "describe",
          description: "Describe an Eventarc event provider",
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
                "The location for the Eventarc provider, which should be either ``global'' or one of the supported regions. Alternatively, set the [eventarc/location] property",
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
            name: "PROVIDER",
            description:
              "ID of the provider or fully qualified identifier for the provider",
          },
        },
        {
          name: "list",
          description: "List event providers available in Eventarc",
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
            {
              name: "--name",
              description:
                "A provider name (e.g. `storage.googleapis.com`) List results will be filtered on this provider. Only exact match of the provider name is supported",
              args: {
                name: "NAME",
                description: "String",
              },
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
      name: "triggers",
      description: "Manage Eventarc triggers",
      subcommands: [
        {
          name: "create",
          description: "Create an Eventarc trigger",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--channel",
              description:
                "ID of the channel or fully qualified identifier for the channel",
              priority: 100,
              args: {
                name: "CHANNEL",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--destination-function",
              description:
                "ID of the Function that receives the events for the trigger. The Function must be in the same project as the trigger",
              hidden: true,
              priority: 100,
              args: {
                name: "DESTINATION_FUNCTION",
                description: "String",
              },
            },
            {
              name: "--destination-function-location",
              description:
                "Location that the destination Function is running in. If not specified, it is assumed that the Function is in the same location as the trigger",
              hidden: true,
              args: {
                name: "DESTINATION_FUNCTION_LOCATION",
                description: "String",
              },
            },
            {
              name: "--destination-gke-cluster",
              description:
                "Name of the GKE cluster that the destination GKE service is running in. The cluster must be in the same project as the trigger",
              priority: 100,
              args: {
                name: "DESTINATION_GKE_CLUSTER",
                description: "String",
              },
            },
            {
              name: "--destination-gke-location",
              description:
                "Location of the GKE cluster that the destination GKE service is running in. If not specified, it is assumed that the cluster is a regional cluster and is in the same region as the trigger",
              args: {
                name: "DESTINATION_GKE_LOCATION",
                description: "String",
              },
            },
            {
              name: "--destination-gke-namespace",
              description:
                "Namespace that the destination GKE service is running in. If not specified, the ``default'' namespace is used",
              args: {
                name: "DESTINATION_GKE_NAMESPACE",
                description: "String",
              },
            },
            {
              name: "--destination-gke-path",
              description:
                "Relative path on the destination GKE service to which the events for the trigger should be sent. Examples: ``/route'', ``route'', ``route/subroute''",
              args: {
                name: "DESTINATION_GKE_PATH",
                description: "String",
              },
            },
            {
              name: "--destination-gke-service",
              description:
                "Name of the destination GKE service that receives the events for the trigger",
              priority: 100,
              args: {
                name: "DESTINATION_GKE_SERVICE",
                description: "String",
              },
            },
            {
              name: "--destination-http-endpoint-uri",
              description:
                "URI that the destination HTTP Endpoint is connecting to",
              priority: 100,
              args: {
                name: "DESTINATION_HTTP_ENDPOINT_URI",
                description: "String",
              },
            },
            {
              name: "--destination-run-job",
              description:
                "Name of the Cloud Run fully-managed job that receives the events for the trigger. The job must be in the same project as the trigger",
              hidden: true,
              args: {
                name: "DESTINATION_RUN_JOB",
                description: "String",
              },
            },
            {
              name: "--destination-run-path",
              description:
                "Relative path on the destination Cloud Run service to which the events for the trigger should be sent. Examples: ``/route'', ``route'', ``route/subroute''",
              args: {
                name: "DESTINATION_RUN_PATH",
                description: "String",
              },
            },
            {
              name: "--destination-run-region",
              description:
                "Region in which the destination Cloud Run service can be found. If not specified, it is assumed that the service is in the same region as the trigger",
              args: {
                name: "DESTINATION_RUN_REGION",
                description: "String",
              },
            },
            {
              name: "--destination-run-service",
              description:
                "Name of the Cloud Run fully-managed service that receives the events for the trigger. The service must be in the same project as the trigger",
              args: {
                name: "DESTINATION_RUN_SERVICE",
                description: "String",
              },
            },
            {
              name: "--destination-workflow",
              description:
                "ID of the workflow that receives the events for the trigger. The workflow must be in the same project as the trigger",
              priority: 100,
              args: {
                name: "DESTINATION_WORKFLOW",
                description: "String",
              },
            },
            {
              name: "--destination-workflow-location",
              description:
                "Location that the destination workflow is running in. If not specified, it is assumed that the workflow is in the same location as the trigger",
              args: {
                name: "DESTINATION_WORKFLOW_LOCATION",
                description: "String",
              },
            },
            {
              name: "--event-data-content-type",
              description:
                "Depending on the event provider, you can specify the encoding of the event data payload that will be delivered to your destination, to either be encoded in ``application/json'' or ``application/protobuf''. The default encoding is ``application/json''. Note that for custom sources or third-party providers, or for direct events from Cloud Pub/Sub, this formatting option is not supported",
              args: {
                name: "EVENT_DATA_CONTENT_TYPE",
                description: "String",
              },
            },
            {
              name: "--event-filters",
              description:
                "The trigger's list of filters that apply to CloudEvents attributes. This flag can be repeated to add more filters to the list. Only events that match all these filters will be sent to the destination. The filters must include the ``type'' attribute, as well as any other attributes that are expected for the chosen type",
              priority: 100,
              isRepeatable: true,
              args: {
                name: "ATTRIBUTE=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--event-filters-path-pattern",
              description:
                "The trigger's list of filters in path pattern format that apply to CloudEvent attributes. This flag can be repeated to add more filters to the list. Only events that match all these filters will be sent to the destination. Currently, path pattern format is only available for the resourceName attribute for Cloud Audit Log events",
              isRepeatable: true,
              args: {
                name: "ATTRIBUTE=PATH_PATTERN",
                description: "Dict",
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
            optLocation8,
            optLogHttp,
            {
              name: "--max-retry-attempts",
              description:
                "The maximum number of delivery attempts. The only valid value is 1",
              args: {
                name: "MAX_RETRY_ATTEMPTS",
                description: "Int",
              },
            },
            {
              name: "--network-attachment",
              description:
                "The network attachment associated with the trigger that allows access to the destination VPC",
              priority: 100,
              args: {
                name: "NETWORK_ATTACHMENT",
                description: "String",
              },
            },
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--service-account",
              description:
                "The IAM service account email associated with the trigger",
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--transport-topic",
              description:
                "ID of the Pub/Sub topic or fully qualified identifier for the Pub/Sub topic",
              priority: 100,
              args: {
                name: "TRANSPORT_TOPIC",
                description: "String",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TRIGGER",
            description:
              "ID of the trigger or fully qualified identifier for the trigger",
          },
        },
        {
          name: "delete",
          description: "Delete an Eventarc trigger",
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
            optLocation8,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TRIGGER",
            description:
              "ID of the trigger or fully qualified identifier for the trigger",
          },
        },
        {
          name: "describe",
          description: "Describe an Eventarc trigger",
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
            optLocation8,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TRIGGER",
            description:
              "ID of the trigger or fully qualified identifier for the trigger",
          },
        },
        {
          name: "list",
          description: "List Eventarc triggers",
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
          name: "update",
          description: "Update an Eventarc trigger",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--clear-destination-gke-path",
              description:
                "Clear the relative path on the destination GKE service to which the events for the trigger should be sent",
            },
            {
              name: "--clear-destination-run-path",
              description:
                "Clear the relative path on the destination Cloud Run service to which the events for the trigger should be sent",
            },
            optClearLabels,
            {
              name: "--clear-max-retry-attempts",
              description:
                "Clear the maximum number of delivery attempts for the trigger",
            },
            {
              name: "--clear-service-account",
              description:
                "Clear the IAM service account associated with the trigger",
            },
            optConfiguration,
            {
              name: "--destination-function",
              description:
                "ID of the Function that receives the events for the trigger. The Function must be in the same project as the trigger",
              hidden: true,
              args: {
                name: "DESTINATION_FUNCTION",
                description: "String",
              },
            },
            {
              name: "--destination-function-location",
              description:
                "Location that the destination Function is running in. If not specified, it is assumed that the Function is in the same location as the trigger",
              hidden: true,
              args: {
                name: "DESTINATION_FUNCTION_LOCATION",
                description: "String",
              },
            },
            {
              name: "--destination-gke-namespace",
              description:
                "Namespace that the destination GKE service is running in. If not specified, the ``default'' namespace is used",
              args: {
                name: "DESTINATION_GKE_NAMESPACE",
                description: "String",
              },
            },
            {
              name: "--destination-gke-path",
              description:
                "Relative path on the destination GKE service to which the events for the trigger should be sent. Examples: ``/route'', ``route'', ``route/subroute''",
              args: {
                name: "DESTINATION_GKE_PATH",
                description: "String",
              },
            },
            {
              name: "--destination-gke-service",
              description:
                "Name of the destination GKE service that receives the events for the trigger",
              args: {
                name: "DESTINATION_GKE_SERVICE",
                description: "String",
              },
            },
            {
              name: "--destination-run-job",
              description:
                "Name of the Cloud Run fully-managed job that receives the events for the trigger. The job must be in the same project as the trigger",
              hidden: true,
              args: {
                name: "DESTINATION_RUN_JOB",
                description: "String",
              },
            },
            {
              name: "--destination-run-path",
              description:
                "Relative path on the destination Cloud Run service to which the events for the trigger should be sent. Examples: ``/route'', ``route'', ``route/subroute''",
              args: {
                name: "DESTINATION_RUN_PATH",
                description: "String",
              },
            },
            {
              name: "--destination-run-region",
              description:
                "Region in which the destination Cloud Run service can be found. If not specified, it is assumed that the service is in the same region as the trigger",
              args: {
                name: "DESTINATION_RUN_REGION",
                description: "String",
              },
            },
            {
              name: "--destination-run-service",
              description:
                "Name of the Cloud Run fully-managed service that receives the events for the trigger. The service must be in the same project as the trigger",
              args: {
                name: "DESTINATION_RUN_SERVICE",
                description: "String",
              },
            },
            {
              name: "--destination-workflow",
              description:
                "ID of the workflow that receives the events for the trigger. The workflow must be in the same project as the trigger",
              args: {
                name: "DESTINATION_WORKFLOW",
                description: "String",
              },
            },
            {
              name: "--destination-workflow-location",
              description:
                "Location that the destination workflow is running in. If not specified, it is assumed that the workflow is in the same location as the trigger",
              args: {
                name: "DESTINATION_WORKFLOW_LOCATION",
                description: "String",
              },
            },
            {
              name: "--event-data-content-type",
              description:
                "Depending on the event provider, you can specify the encoding of the event data payload that will be delivered to your destination, to either be encoded in ``application/json'' or ``application/protobuf''. The default encoding is ``application/json''. Note that for custom sources or third-party providers, or for direct events from Cloud Pub/Sub, this formatting option is not supported",
              args: {
                name: "EVENT_DATA_CONTENT_TYPE",
                description: "String",
              },
            },
            {
              name: "--event-filters",
              description:
                "The trigger's list of filters that apply to CloudEvents attributes. This flag can be repeated to add more filters to the list. Only events that match all these filters will be sent to the destination. The filters must include the ``type'' attribute, as well as any other attributes that are expected for the chosen type",
              isRepeatable: true,
              args: {
                name: "ATTRIBUTE=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--event-filters-path-pattern",
              description:
                "The trigger's list of filters in path pattern format that apply to CloudEvent attributes. This flag can be repeated to add more filters to the list. Only events that match all these filters will be sent to the destination. Currently, path pattern format is only available for the resourceName attribute for Cloud Audit Log events",
              isRepeatable: true,
              args: {
                name: "ATTRIBUTE=PATH_PATTERN",
                description: "Dict",
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
            optLocation8,
            optLogHttp,
            {
              name: "--max-retry-attempts",
              description:
                "The maximum number of delivery attempts. The only valid value is 1",
              args: {
                name: "MAX_RETRY_ATTEMPTS",
                description: "Int",
              },
            },
            optNoAsync,
            {
              name: "--no-clear-destination-gke-path",
              description:
                "Clear the relative path on the destination GKE service to which the events for the trigger should be sent",
              hidden: true,
            },
            {
              name: "--no-clear-destination-run-path",
              description:
                "Clear the relative path on the destination Cloud Run service to which the events for the trigger should be sent",
              hidden: true,
            },
            optNoClearLabels,
            {
              name: "--no-clear-max-retry-attempts",
              description:
                "Clear the maximum number of delivery attempts for the trigger",
              hidden: true,
            },
            {
              name: "--no-clear-service-account",
              description:
                "Clear the IAM service account associated with the trigger",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRemoveLabels,
            {
              name: "--service-account",
              description:
                "The IAM service account email associated with the trigger",
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
              },
            },
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TRIGGER",
            description:
              "ID of the trigger or fully qualified identifier for the trigger",
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
