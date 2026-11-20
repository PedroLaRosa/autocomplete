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

const optDefinition: Fig.Option = {
  name: "--definition",
  description: "Inline schema definition",
  args: {
    name: "DEFINITION",
    description: "String",
  },
};

const optDefinitionFile: Fig.Option = {
  name: "--definition-file",
  description:
    "File containing schema definition. Use a full or relative path to a local file containing the value of definition_file",
  args: {
    name: "DEFINITION_FILE",
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
  description: "ID of the location of the Pub/Sub Lite resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation2: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location",
  priority: 100,
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location",
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

const optMessageTransformsFile: Fig.Option = {
  name: "--message-transforms-file",
  description: "Path to YAML or JSON file containing message transforms",
  args: {
    name: "MESSAGE_TRANSFORMS_FILE",
    description: "String",
    template: "filepaths",
  },
};

const optNoPushNoWrapper: Fig.Option = {
  name: "--no-push-no-wrapper",
  description:
    "When set, the message data is delivered directly as the HTTP body. Use --no-push-no-wrapper to disable this flag",
  hidden: true,
  priority: 100,
};

const optNoPushNoWrapperWriteMetadata: Fig.Option = {
  name: "--no-push-no-wrapper-write-metadata",
  description:
    "When true, writes the Pub/Sub message metadata to `x-goog-pubsub-<KEY>:<VAL>` headers of the HTTP request. Writes the Pub/Sub message attributes to `<KEY>:<VAL>` headers of the HTTP request. Use --no-push-no-wrapper-write-metadata to disable this flag",
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

const optPushAuthServiceAccount: Fig.Option = {
  name: "--push-auth-service-account",
  description:
    "Service account email used as the identity for the generated Open ID Connect token for authenticated push",
  args: {
    name: "PUSH_AUTH_SERVICE_ACCOUNT",
    description: "String",
  },
};

const optPushAuthTokenAudience: Fig.Option = {
  name: "--push-auth-token-audience",
  description:
    "Audience used in the generated Open ID Connect token for authenticated push. If not specified, it will be set to the push-endpoint",
  args: {
    name: "PUSH_AUTH_TOKEN_AUDIENCE",
    description: "String",
  },
};

const optPushNoWrapper: Fig.Option = {
  name: "--push-no-wrapper",
  description:
    "When set, the message data is delivered directly as the HTTP body. Use --no-push-no-wrapper to disable this flag",
  priority: 100,
};

const optPushNoWrapperWriteMetadata: Fig.Option = {
  name: "--push-no-wrapper-write-metadata",
  description:
    "When true, writes the Pub/Sub message metadata to `x-goog-pubsub-<KEY>:<VAL>` headers of the HTTP request. Writes the Pub/Sub message attributes to `<KEY>:<VAL>` headers of the HTTP request. Use --no-push-no-wrapper-write-metadata to disable this flag",
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

const optTags: Fig.Option = {
  name: "--tags",
  description:
    "List of tags KEY=VALUE pairs to bind. Each item must be expressed as `<tag-key-namespaced-name>=<tag-value-short-name>`. Example: `123/environment=production,123/costCenter=marketing`",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
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

const optZone: Fig.Option = {
  name: "--zone",
  description: "(DEPRECATED) ID of the location of the Pub/Sub Lite resource",
  hidden: true,
  deprecated: true,
  args: {
    name: "ZONE",
    description: "String",
  },
};

const completionSpec: Fig.Spec = {
  name: "pubsub",
  description: "Manage Cloud Pub/Sub topics, subscriptions, and snapshots",
  subcommands: [
    {
      name: "lite-operations",
      description: "Manage Pub/Sub Lite operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Pub/Sub Lite operation",
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "list",
          description: "List Pub/Sub Lite operations",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--done",
              description:
                "Filter operations by completion status. This flag is ignored if `--filter` is set. _DONE_ must be one of: *false*, *true*",
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
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            {
              name: "--subscription",
              description:
                "Filter operations by target subscription. This flag is ignored if `--filter` is set",
              args: {
                name: "SUBSCRIPTION",
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
      name: "lite-reservations",
      description: "Manage Pub/Sub Lite reservations",
      subcommands: [
        {
          name: "create",
          description: "Create a Pub/Sub Lite reservation",
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
            {
              name: "--throughput-capacity",
              description:
                "Reservation throughput capacity. Every unit of throughput capacity is equivalent to 1 MiB/s of published messages or 2 MiB/s of subscribed messages",
              priority: 100,
              args: {
                name: "THROUGHPUT_CAPACITY",
                description: "Int",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RESERVATION",
            description: "Reservation ID",
          },
        },
        {
          name: "delete",
          description: "Delete a Pub/Sub Lite reservation",
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
            name: "RESERVATION",
            description:
              "ID of the reservation or fully qualified identifier for the reservation",
          },
        },
        {
          name: "describe",
          description: "Describe a Pub/Sub Lite reservation",
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
            name: "RESERVATION",
            description:
              "ID of the reservation or fully qualified identifier for the reservation",
          },
        },
        {
          name: "list",
          description: "List Pub/Sub Lite reservations",
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
          name: "list-topics",
          description: "List Pub/Sub Lite topics for a given Lite reservation",
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
            name: "RESERVATION",
            description:
              "ID of the reservation or fully qualified identifier for the reservation",
          },
        },
        {
          name: "update",
          description: "Update a Pub/Sub Lite reservation",
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
              name: "--throughput-capacity",
              description:
                "Reservation throughput capacity. Every unit of throughput capacity is equivalent to 1 MiB/s of published messages or 2 MiB/s of subscribed messages",
              args: {
                name: "THROUGHPUT_CAPACITY",
                description: "Int",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RESERVATION",
            description:
              "ID of the reservation or fully qualified identifier for the reservation",
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
      name: "lite-subscriptions",
      description: "Manage Pub/Sub Lite subscriptions",
      subcommands: [
        {
          name: "ack-up-to",
          description: "Acknowledge messages on a Pub/Sub Lite subscription",
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
              name: "--offset",
              description:
                "The offset of a message within a topic partition. Must be greater than or equal to 0",
              priority: 100,
              args: {
                name: "OFFSET",
                description: "Int",
              },
            },
            {
              name: "--partition",
              description:
                "The topic partition. Partitions are zero indexed, so the partition must be in the range [0, topic.num_partitions). If you do not know your topic.num_partitions, run `gcloud pubsub lite-topic describe TOPIC --location=ZONE`",
              priority: 100,
              args: {
                name: "PARTITION",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optZone,
          ],
          args: {
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription",
          },
        },
        {
          name: "create",
          description: "Create a Pub/Sub Lite subscription",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--delivery-requirement",
              description:
                "When this subscription should send messages to subscribers relative to messages persistence in storage. See https://cloud.google.com/pubsub/lite/docs/subscriptions#creating_lite_subscriptions for more info. _DELIVERY_REQUIREMENT_ must be one of: *deliver-after-stored*, *deliver-immediately*",
              args: {
                name: "DELIVERY_REQUIREMENT",
                suggestions: ["deliver-after-stored", "deliver-immediately"],
              },
            },
            {
              name: "--event-time",
              description:
                "The event time to which you seek a subscription. The subscription seeks to the first message with event time greater than or equal to the specified event time. Messages missing an event time use publish time as a fallback. As event times are user supplied, subsequent messages may have event times less than the specified event time and must be filtered by the client, if necessary. Run $ gcloud topic datetimes for information on time formats",
              args: {
                name: "EVENT_TIME",
              },
            },
            {
              name: "--export-dead-letter-topic",
              description:
                "The name of the Pub/Sub Lite topic to write messages that cannot be exported. Must be in the same project and location as the subscription to be created. Note that this is a Lite topic",
              args: {
                name: "EXPORT_DEAD_LETTER_TOPIC",
                description: "String",
              },
            },
            {
              name: "--export-desired-state",
              description:
                "The desired state of the export. Process messages by setting the value to ACTIVE or pause message processing by setting the value to PAUSED. _EXPORT_DESIRED_STATE_ must be one of: *active*, *paused*",
              args: {
                name: "EXPORT_DESIRED_STATE",
                suggestions: ["active", "paused"],
              },
            },
            {
              name: "--export-pubsub-topic",
              description:
                "The name of the destination Pub/Sub topic to which messages are exported. Must be the topic's fully specified path if it is not in the same project as the subscription to be created",
              priority: 100,
              args: {
                name: "EXPORT_PUBSUB_TOPIC",
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
            optLocation3,
            optLogHttp,
            optProject,
            {
              name: "--publish-time",
              description:
                "The publish time to which you seek a subscription. Messages with publish time greater than or equal to the specified time are delivered after the seek operation. Run $ gcloud topic datetimes for information on time formats",
              args: {
                name: "PUBLISH_TIME",
              },
            },
            optQuiet,
            {
              name: "--starting-offset",
              description:
                "The offset at which a newly created or seeked subscription starts receiving messages. A subscription can be initialized at the offset of the oldest retained message (`beginning`), or at the current HEAD offset (`end`). _STARTING_OFFSET_ must be one of: *beginning*, *end*",
              args: {
                name: "STARTING_OFFSET",
                suggestions: ["beginning", "end"],
              },
            },
            {
              name: "--topic",
              description: "Topic ID associated with the subscription",
              priority: 100,
              args: {
                name: "TOPIC",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optZone,
          ],
          args: {
            name: "SUBSCRIPTION",
            description: "Subscription ID",
          },
        },
        {
          name: "delete",
          description: "Delete a Pub/Sub Lite subscription",
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
            optZone,
          ],
          args: {
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription",
          },
        },
        {
          name: "describe",
          description: "Describe a Pub/Sub Lite subscription",
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
            optZone,
          ],
          args: {
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription",
          },
        },
        {
          name: "list",
          description: "List Pub/Sub Lite subscriptions",
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
            optLocation3,
            optLogHttp,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optZone,
          ],
        },
        {
          name: "seek",
          description: "Seek a Pub/Sub Lite subscription",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--async",
              description:
                "Return immediately, without waiting for the operation in progress to complete",
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--event-time",
              description:
                "The event time to which you seek a subscription. The subscription seeks to the first message with event time greater than or equal to the specified event time. Messages missing an event time use publish time as a fallback. As event times are user supplied, subsequent messages may have event times less than the specified event time and must be filtered by the client, if necessary. Run $ gcloud topic datetimes for information on time formats",
              args: {
                name: "EVENT_TIME",
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
              name: "--no-async",
              description:
                "Return immediately, without waiting for the operation in progress to complete",
              hidden: true,
            },
            optProject,
            {
              name: "--publish-time",
              description:
                "The publish time to which you seek a subscription. Messages with publish time greater than or equal to the specified time are delivered after the seek operation. Run $ gcloud topic datetimes for information on time formats",
              args: {
                name: "PUBLISH_TIME",
              },
            },
            optQuiet,
            {
              name: "--starting-offset",
              description:
                "The offset at which a newly created or seeked subscription starts receiving messages. A subscription can be initialized at the offset of the oldest retained message (`beginning`), or at the current HEAD offset (`end`). _STARTING_OFFSET_ must be one of: *beginning*, *end*",
              args: {
                name: "STARTING_OFFSET",
                suggestions: ["beginning", "end"],
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription",
          },
        },
        {
          name: "subscribe",
          description: "Stream messages from a Pub/Sub Lite subscription",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--auto-ack",
              description:
                "Automatically ACK every message received on this subscription",
            },
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
              name: "--no-auto-ack",
              description:
                "Automatically ACK every message received on this subscription",
              hidden: true,
            },
            {
              name: "--num-messages",
              description:
                "The number of messages to stream before exiting. This value must be less than or equal to 1000",
              args: {
                name: "NUM_MESSAGES",
                description: "Int",
              },
            },
            {
              name: "--partitions",
              description:
                "The partitions this subscriber should connect to to receive messages. If empty, partitions will be automatically assigned",
              args: {
                name: "INT",
                description: "List",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription",
          },
        },
        {
          name: "update",
          description: "Update a Pub/Sub Lite subscription",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--delivery-requirement",
              description:
                "When this subscription should send messages to subscribers relative to messages persistence in storage. See https://cloud.google.com/pubsub/lite/docs/subscriptions#creating_lite_subscriptions for more info. _DELIVERY_REQUIREMENT_ must be one of: *deliver-after-stored*, *deliver-immediately*",
              args: {
                name: "DELIVERY_REQUIREMENT",
                suggestions: ["deliver-after-stored", "deliver-immediately"],
              },
            },
            {
              name: "--export-dead-letter-topic",
              description:
                "The name of the Pub/Sub Lite topic to write messages that cannot be exported. Must be in the same project and location as the subscription to be created. Note that this is a Lite topic",
              args: {
                name: "EXPORT_DEAD_LETTER_TOPIC",
                description: "String",
              },
            },
            {
              name: "--export-desired-state",
              description:
                "The desired state of the export. Process messages by setting the value to ACTIVE or pause message processing by setting the value to PAUSED. _EXPORT_DESIRED_STATE_ must be one of: *active*, *paused*",
              args: {
                name: "EXPORT_DESIRED_STATE",
                suggestions: ["active", "paused"],
              },
            },
            {
              name: "--export-pubsub-topic",
              description:
                "The name of the destination Pub/Sub topic to which messages are exported. Must be the topic's fully specified path if it is not in the same project as the subscription to be created",
              args: {
                name: "EXPORT_PUBSUB_TOPIC",
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
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optZone,
          ],
          args: {
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription",
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
      name: "lite-topics",
      description: "Manage Pub/Sub Lite topics",
      subcommands: [
        {
          name: "create",
          description: "Create a Pub/Sub Lite topic",
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
            {
              name: "--message-retention-period",
              description:
                'How long a published message is retained. If unset, messages will only be dropped to make space for new ones once the `per-partition-bytes` limit is reached. A valid example value of this flag would be `message-retention-period="2w"`',
              args: {
                name: "MESSAGE_RETENTION_PERIOD",
              },
            },
            {
              name: "--partitions",
              description: "Number of partitions in the topic",
              priority: 100,
              args: {
                name: "PARTITIONS",
                description: "Int",
              },
            },
            {
              name: "--per-partition-bytes",
              description:
                "Provisioned storage, in bytes, per partition. If the number of bytes stored in any of the topic's partitions exceeds this value, older messages will be dropped to make room for newer ones, regardless of the value of `message-retention-period`. A valid example value of this flag would be `per-partition-bytes=30GiB`",
              priority: 100,
              args: {
                name: "PER_PARTITION_BYTES",
              },
            },
            {
              name: "--per-partition-publish-mib",
              description:
                "Topic partition publish throughput capacity in MiB/s. Must be between 4 and 16",
              args: {
                name: "PER_PARTITION_PUBLISH_MIB",
                description: "Int",
              },
            },
            {
              name: "--per-partition-subscribe-mib",
              description:
                "Topic partition subscribe throughput capacity in MiB/s. Must be between 4 and 32",
              args: {
                name: "PER_PARTITION_SUBSCRIBE_MIB",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--throughput-reservation",
              description: "Reservation ID to use for topic throughput",
              args: {
                name: "THROUGHPUT_RESERVATION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optZone,
          ],
          args: {
            name: "TOPIC",
            description: "Topic ID",
          },
        },
        {
          name: "delete",
          description: "Delete a Pub/Sub Lite topic",
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
            optZone,
          ],
          args: {
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic",
          },
        },
        {
          name: "describe",
          description: "Describe a Pub/Sub Lite topic",
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
            optZone,
          ],
          args: {
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic",
          },
        },
        {
          name: "list",
          description: "List Pub/Sub Lite topics",
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
            optLocation3,
            optLogHttp,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optZone,
          ],
        },
        {
          name: "list-subscriptions",
          description: "List Pub/Sub Lite subscriptions for a given Lite topic",
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
            optZone,
          ],
          args: {
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic",
          },
        },
        {
          name: "publish",
          description: "Publish Pub/Sub Lite messages",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--attributes",
              description:
                'Comma-separated list of attributes. Each ATTRIBUTE has the form name="value". You can specify up to 100 attributes',
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--event-time",
              description:
                "A user-specified event time. Run `gcloud topic datetimes` for information on time formats",
              args: {
                name: "DATETIME",
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
              name: "--message",
              description:
                "The body of the message to publish to the given topic name",
              args: {
                name: "MESSAGE",
                description: "String",
              },
            },
            {
              name: "--ordering-key",
              description:
                "A string key, used for ordering delivery to subscribers. All messages with the same ordering key will be assigned to the same partition for ordered delivery",
              args: {
                name: "ORDERING_KEY",
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
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic",
          },
        },
        {
          name: "update",
          description: "Update a Pub/Sub Lite topic",
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
              name: "--message-retention-period",
              description:
                'How long a published message is retained. If unset, messages will only be dropped to make space for new ones once the `per-partition-bytes` limit is reached. A valid example value of this flag would be `message-retention-period="2w"`',
              args: {
                name: "MESSAGE_RETENTION_PERIOD",
              },
            },
            {
              name: "--partitions",
              description: "Number of partitions in the topic",
              args: {
                name: "PARTITIONS",
                description: "Int",
              },
            },
            {
              name: "--per-partition-bytes",
              description:
                "Provisioned storage, in bytes, per partition. If the number of bytes stored in any of the topic's partitions exceeds this value, older messages will be dropped to make room for newer ones, regardless of the value of `message-retention-period`. A valid example value of this flag would be `per-partition-bytes=30GiB`",
              args: {
                name: "PER_PARTITION_BYTES",
              },
            },
            {
              name: "--per-partition-publish-mib",
              description:
                "Topic partition publish throughput capacity in MiB/s. Must be between 4 and 16",
              args: {
                name: "PER_PARTITION_PUBLISH_MIB",
                description: "Int",
              },
            },
            {
              name: "--per-partition-subscribe-mib",
              description:
                "Topic partition subscribe throughput capacity in MiB/s. Must be between 4 and 32",
              args: {
                name: "PER_PARTITION_SUBSCRIBE_MIB",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--throughput-reservation",
              description: "Reservation ID to use for topic throughput",
              args: {
                name: "THROUGHPUT_RESERVATION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optZone,
          ],
          args: {
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic",
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
      name: "message-transforms",
      description: "Manage Cloud Pub/Sub message transforms",
      subcommands: [
        {
          name: "test",
          description: "Tests message transforms against a given message",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--attribute",
              description:
                'Comma-separated list of attributes to attach to the message. Each ATTRIBUTE has the form name="value". You can specify up to 100 attributes',
              args: {
                name: "ATTRIBUTE",
                description: "Dict",
              },
            },
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
              name: "--message",
              description:
                "Message body to test the message transforms against",
              args: {
                name: "MESSAGE",
                description: "String",
              },
            },
            optMessageTransformsFile,
            optProject,
            optQuiet,
            {
              name: "--subscription",
              description:
                "ID of the subscription or fully qualified identifier for the subscription",
              priority: 100,
              args: {
                name: "SUBSCRIPTION",
                description: "String",
              },
            },
            {
              name: "--topic",
              description:
                "ID of the topic or fully qualified identifier for the topic",
              priority: 100,
              args: {
                name: "TOPIC",
                description: "String",
              },
            },
            {
              name: "--topic-project",
              description:
                "Project ID of the Google Cloud project for the topic",
              args: {
                name: "TOPIC_PROJECT",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "validate",
          description: "Validates a message transform",
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
              name: "--message-transform-file",
              description:
                "Path to YAML or JSON file containing a message transform",
              priority: 100,
              args: {
                name: "MESSAGE_TRANSFORM_FILE",
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
      name: "schemas",
      description: "Manage Pub/Sub schemas",
      subcommands: [
        {
          name: "commit",
          description: "Commit a Pub/Sub schema revision",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--definition",
              description: "The new definition of the schema",
              args: {
                name: "DEFINITION",
                description: "String",
              },
            },
            {
              name: "--definition-file",
              description:
                "File containing the new schema definition. Use a full or relative path to a local file containing the value of definition_file",
              args: {
                name: "DEFINITION_FILE",
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
            optProject,
            optQuiet,
            optTraceToken,
            {
              name: "--type",
              description: "The type of the schema",
              priority: 100,
              args: {
                name: "TYPE",
                description: "String",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SCHEMA",
            description:
              "ID of the schema or fully qualified identifier for the schema",
          },
        },
        {
          name: "create",
          description: "Create a Pub/Sub schema",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDefinition,
            optDefinitionFile,
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
            {
              name: "--type",
              description:
                "Type of the schema. _TYPE_ must be one of: *avro*, *protocol-buffer*",
              priority: 100,
              args: {
                name: "TYPE",
                suggestions: ["avro", "protocol-buffer"],
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SCHEMA",
            description:
              "ID of the schema or fully qualified identifier for the schema",
          },
        },
        {
          name: "delete",
          description: "Delete a Pub/Sub schema",
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
            name: "SCHEMA",
            description:
              "ID of the schema or fully qualified identifier for the schema",
          },
        },
        {
          name: "delete-revision",
          description: "Delete a Pub/Sub schema revision",
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
            name: "SCHEMA",
            description:
              "ID of the schema or fully qualified identifier for the schema",
          },
        },
        {
          name: "describe",
          description: "Show details of a Pub/Sub schema",
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
            name: "SCHEMA",
            description:
              "ID of the schema or fully qualified identifier for the schema",
          },
        },
        {
          name: "list",
          description: "List Pub/Sub schemas",
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
            {
              name: "--view",
              description:
                "There are two possible views, 'basic' and 'full', default is 'basic'. _VIEW_ must be one of:",
              args: {
                name: "VIEW",
                suggestions: ["basic", "full"],
              },
            },
          ],
        },
        {
          name: "list-revisions",
          description: "List revisions of a Pub/Sub schema",
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
            {
              name: "--view",
              description:
                "There are two possible views, 'basic' and 'full', default is 'basic'. _VIEW_ must be one of:",
              args: {
                name: "VIEW",
                suggestions: ["basic", "full"],
              },
            },
          ],
          args: {
            name: "SCHEMA",
            description:
              "ID of the schema or fully qualified identifier for the schema",
          },
        },
        {
          name: "rollback",
          description: "Roll back a Pub/Sub schema to a specified revision",
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
              name: "--revision-id",
              description: "The revision to roll back to",
              priority: 100,
              args: {
                name: "REVISION_ID",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SCHEMA",
            description:
              "ID of the schema or fully qualified identifier for the schema",
          },
        },
        {
          name: "validate-message",
          description: "Validate a message against a Pub/Sub schema",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDefinition,
            optDefinitionFile,
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
              name: "--message",
              description: "The message to validate against the schema",
              priority: 100,
              args: {
                name: "MESSAGE",
              },
            },
            {
              name: "--message-encoding",
              description:
                "The encoding of the message. _MESSAGE_ENCODING_ must be one of: *binary*, *json*",
              priority: 100,
              args: {
                name: "MESSAGE_ENCODING",
                suggestions: ["binary", "json"],
              },
            },
            optProject,
            optQuiet,
            {
              name: "--schema-name",
              description: "Name or full path of an existing schema",
              args: {
                name: "SCHEMA_NAME",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--type",
              description:
                "Type of inline schema. _TYPE_ must be one of: *avro*, *protocol-buffer*",
              priority: 100,
              args: {
                name: "TYPE",
                suggestions: ["avro", "protocol-buffer"],
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "validate-schema",
          description: "Validate a Pub/Sub schema",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optDefinition,
            optDefinitionFile,
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
            {
              name: "--type",
              description:
                "Type of the schema. _TYPE_ must be one of: *avro*, *protocol-buffer*",
              priority: 100,
              args: {
                name: "TYPE",
                suggestions: ["avro", "protocol-buffer"],
              },
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
      name: "snapshots",
      description: "Manage Cloud Pub/Sub snapshots",
      subcommands: [
        {
          name: "create",
          description: "Creates one or more Cloud Pub/Sub snapshots",
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
            optLabels,
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--subscription",
              description:
                "The subscription whose backlog the snapshot retains. Specifically, the created snapshot is guaranteed to retain a) The existing backlog on the subscription, i.e., the set of messages in the subscription that are unacknowledged upon the successful completion of the create snapshot request, b) Any messages published to the subscription's topic following the successful creation of the snapshot",
              priority: 100,
              args: {
                name: "SUBSCRIPTION",
                description: "String",
              },
            },
            {
              name: "--subscription-project",
              description:
                "The name of the project the provided subscription belongs to. If not set, it defaults to the currently selected cloud project",
              args: {
                name: "SUBSCRIPTION_PROJECT",
                description: "String",
              },
            },
            optTags,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SNAPSHOT",
            description: "One or more snapshot names to create",
            isVariadic: true,
          },
        },
        {
          name: "delete",
          description: "Deletes one or more Cloud Pub/Sub snapshots",
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
            name: "SNAPSHOT",
            description: "One or more snapshot names to delete",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Describes a Cloud Pub/Sub snapshot",
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
            name: "SNAPSHOT",
            description: "Snapshot to describe",
          },
        },
        {
          name: "list",
          description: "Lists all the snapshots in a given project",
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
      name: "subscriptions",
      description: "Manage Cloud Pub/Sub subscriptions",
      subcommands: [
        {
          name: "ack",
          description:
            "Acknowledges one or more messages on the specified subscription",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--ack-ids",
              description:
                "One or more ACK_IDs to acknowledge. An ACK_ID is a [string that is returned to subscribers](https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#google.pubsub.v1.ReceivedMessage). along with the message. The ACK_ID is different from the [message ID](https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#google.pubsub.v1.PubsubMessage)",
              priority: 100,
              args: {
                name: "ACK_ID",
                description: "List",
              },
            },
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
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription",
          },
        },
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a subscription",
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
              name: "--member",
              description:
                "The principal to add the binding for. Should be of the form `user|group|serviceAccount:email` or `domain:domain`",
              priority: 100,
              args: {
                name: "PRINCIPAL",
                description: "String",
              },
            },
            optProject,
            optQuiet,
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
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription",
          },
        },
        {
          name: "create",
          description: "Creates one or more Cloud Pub/Sub subscriptions",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--ack-deadline",
              description:
                "The number of seconds the system will wait for a subscriber to acknowledge receiving a message before re-attempting delivery",
              args: {
                name: "ACK_DEADLINE",
                description: "Int",
              },
            },
            {
              name: "--bigquery-service-account-email",
              description:
                "The service account email to use when writing to BigQuery. If unspecified, uses the Pub/Sub service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents)",
              args: {
                name: "BIGQUERY_SERVICE_ACCOUNT_EMAIL",
                description: "String",
              },
            },
            {
              name: "--bigquery-table",
              description:
                "A BigQuery table of the form {project}:{dataset_name}.{table_name} to which to write messages for this subscription",
              priority: 100,
              args: {
                name: "BIGQUERY_TABLE",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--cloud-storage-bucket",
              description:
                "A Cloud Storage bucket to which to write messages for this subscription",
              priority: 100,
              args: {
                name: "CLOUD_STORAGE_BUCKET",
                description: "String",
              },
            },
            {
              name: "--cloud-storage-file-datetime-format",
              description:
                "The custom datetime format string for Cloud Storage filename. See the [datetime format guidance](https://cloud.google.com/pubsub/docs/create-cloudstorage-subscription#file_names)",
              args: {
                name: "CLOUD_STORAGE_FILE_DATETIME_FORMAT",
                description: "String",
              },
            },
            {
              name: "--cloud-storage-file-prefix",
              description: "The prefix for Cloud Storage filename",
              args: {
                name: "CLOUD_STORAGE_FILE_PREFIX",
                description: "String",
              },
            },
            {
              name: "--cloud-storage-file-suffix",
              description: "The suffix for Cloud Storage filename",
              args: {
                name: "CLOUD_STORAGE_FILE_SUFFIX",
                description: "String",
              },
            },
            {
              name: "--cloud-storage-max-bytes",
              description:
                "The maximum bytes that can be written to a Cloud Storage file before a new file is created. The value must be between 1000B and 10GB. If the unit is omitted, KB is assumed",
              args: {
                name: "CLOUD_STORAGE_MAX_BYTES",
              },
            },
            {
              name: "--cloud-storage-max-duration",
              description:
                'The maximum duration that can elapse before a new Cloud Storage file is created. The value must be between 1m and 10m. Valid values are strings of the form INTEGER[UNIT], where UNIT is one of "s", "m", "h", and "d" for seconds, minutes, hours, and days, respectively. If the unit is omitted, seconds is assumed',
              args: {
                name: "CLOUD_STORAGE_MAX_DURATION",
              },
            },
            {
              name: "--cloud-storage-max-messages",
              description:
                "The maximum number of messages that can be written to a Cloud Storage file before a new file is created. The value must be greater than or equal to 1000",
              args: {
                name: "CLOUD_STORAGE_MAX_MESSAGES",
              },
            },
            {
              name: "--cloud-storage-output-format",
              description:
                "The output format for data written to Cloud Storage. Values: text (messages will be written as raw text, separated by a newline) or avro (messages will be written as an Avro binary). _OUTPUT_FORMAT_ must be one of: *text*, *avro*",
              args: {
                name: "OUTPUT_FORMAT",
                description: "List",
              },
            },
            {
              name: "--cloud-storage-service-account-email",
              description:
                "The service account email to use when writing to Cloud Storage. If unspecified, uses the Pub/Sub service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents)",
              args: {
                name: "CLOUD_STORAGE_SERVICE_ACCOUNT_EMAIL",
                description: "String",
              },
            },
            {
              name: "--cloud-storage-use-topic-schema",
              description:
                "Whether or not to use the schema for the subscription's topic (if it exists) when writing messages to Cloud Storage. This has an effect only for subscriptions with --cloud-storage-output-format=avro. Use --no-cloud-storage-use-topic-schema to disable this flag",
            },
            {
              name: "--cloud-storage-write-metadata",
              description:
                "Whether or not to write the subscription name, message_id, publish_time, attributes, and ordering_key as additional fields in the output. The subscription name, message_id, and publish_time fields are put in their own fields while all other message properties other than data (for example, an ordering_key, if present) are added as entries in the attributes map. This has an effect only for subscriptions with --cloud-storage-output-format=avro. Use --no-cloud-storage-write-metadata to disable this flag",
            },
            optConfiguration,
            {
              name: "--dead-letter-topic",
              description:
                "ID of the dead-letter-topic or fully qualified identifier for the dead-letter-topic",
              priority: 100,
              args: {
                name: "DEAD_LETTER_TOPIC",
                description: "String",
              },
            },
            {
              name: "--dead-letter-topic-project",
              description:
                "Project ID of the Google Cloud project for the dead-letter-topic",
              args: {
                name: "DEAD_LETTER_TOPIC_PROJECT",
                description: "String",
              },
            },
            {
              name: "--drop-unknown-fields",
              description:
                "If either --use-topic-schema or --use-table-schema is set, whether or not to ignore fields in the message that do not appear in the BigQuery table schema. Use --no-drop-unknown-fields to disable this flag",
            },
            {
              name: "--enable-exactly-once-delivery",
              description:
                "Whether or not to enable exactly-once delivery on the subscription. If true, Pub/Sub provides the following guarantees for the delivery of a message with a given value of `message_id` on this subscription: The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgment deadline expires. An acknowledged message will not be resent to a subscriber. Use --no-enable-exactly-once-delivery to disable this flag",
            },
            {
              name: "--enable-message-ordering",
              description:
                "Whether to receive messages with the same ordering key in order. If set, messages with the same ordering key are sent to subscribers in the order that Pub/Sub receives them. Use --no-enable-message-ordering to disable this flag",
            },
            {
              name: "--expiration-period",
              description:
                'The subscription will expire if it is inactive for the given period. Valid values are strings of the form INTEGER[UNIT], where UNIT is one of "s", "m", "h", and "d" for seconds, minutes, hours, and days, respectively. If the unit is omitted, seconds is assumed. This flag additionally accepts the special value "never" to indicate that the subscription will never expire',
              args: {
                name: "EXPIRATION_PERIOD",
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
            {
              name: "--max-delivery-attempts",
              description:
                "Maximum number of delivery attempts for any message. The value must be between 5 and 100. Defaults to 5. `--dead-letter-topic` must also be specified",
              args: {
                name: "MAX_DELIVERY_ATTEMPTS",
              },
            },
            {
              name: "--max-retry-delay",
              description:
                'The maximum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 600 seconds. Valid values are strings of the form INTEGER[UNIT], where UNIT is one of "s", "m", "h", and "d" for seconds, minutes, hours, and days, respectively. If the unit is omitted, seconds is assumed',
              args: {
                name: "MAX_RETRY_DELAY",
              },
            },
            {
              name: "--message-filter",
              description:
                "Expression to filter messages. If set, Pub/Sub only delivers the messages that match the filter. The expression must be a non-empty string in the [Pub/Sub filtering language](https://cloud.google.com/pubsub/docs/filtering)",
              args: {
                name: "MESSAGE_FILTER",
                description: "String",
              },
            },
            {
              name: "--message-retention-duration",
              description:
                'How long to retain unacknowledged messages in the subscription\'s backlog, from the moment a message is published. If --retain-acked-messages is true, this also configures the retention of acknowledged messages. The default value is 7 days, the minimum is 10 minutes, and the maximum is 31 days. Valid values are strings of the form INTEGER[UNIT], where UNIT is one of "s", "m", "h", and "d" for seconds, minutes, hours, and days, respectively. If the unit is omitted, seconds is assumed',
              args: {
                name: "MESSAGE_RETENTION_DURATION",
              },
            },
            optMessageTransformsFile,
            {
              name: "--min-retry-delay",
              description:
                'The minimum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 10 seconds. Valid values are strings of the form INTEGER[UNIT], where UNIT is one of "s", "m", "h", and "d" for seconds, minutes, hours, and days, respectively. If the unit is omitted, seconds is assumed',
              args: {
                name: "MIN_RETRY_DELAY",
              },
            },
            {
              name: "--no-cloud-storage-use-topic-schema",
              description:
                "Whether or not to use the schema for the subscription's topic (if it exists) when writing messages to Cloud Storage. This has an effect only for subscriptions with --cloud-storage-output-format=avro. Use --no-cloud-storage-use-topic-schema to disable this flag",
              hidden: true,
            },
            {
              name: "--no-cloud-storage-write-metadata",
              description:
                "Whether or not to write the subscription name, message_id, publish_time, attributes, and ordering_key as additional fields in the output. The subscription name, message_id, and publish_time fields are put in their own fields while all other message properties other than data (for example, an ordering_key, if present) are added as entries in the attributes map. This has an effect only for subscriptions with --cloud-storage-output-format=avro. Use --no-cloud-storage-write-metadata to disable this flag",
              hidden: true,
            },
            {
              name: "--no-drop-unknown-fields",
              description:
                "If either --use-topic-schema or --use-table-schema is set, whether or not to ignore fields in the message that do not appear in the BigQuery table schema. Use --no-drop-unknown-fields to disable this flag",
              hidden: true,
            },
            {
              name: "--no-enable-exactly-once-delivery",
              description:
                "Whether or not to enable exactly-once delivery on the subscription. If true, Pub/Sub provides the following guarantees for the delivery of a message with a given value of `message_id` on this subscription: The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgment deadline expires. An acknowledged message will not be resent to a subscriber. Use --no-enable-exactly-once-delivery to disable this flag",
              hidden: true,
            },
            {
              name: "--no-enable-message-ordering",
              description:
                "Whether to receive messages with the same ordering key in order. If set, messages with the same ordering key are sent to subscribers in the order that Pub/Sub receives them. Use --no-enable-message-ordering to disable this flag",
              hidden: true,
            },
            optNoPushNoWrapper,
            optNoPushNoWrapperWriteMetadata,
            {
              name: "--no-retain-acked-messages",
              description:
                "Whether or not to retain acknowledged messages. If true, messages are not expunged from the subscription's backlog until they fall out of the --message-retention-duration window. Acknowledged messages are not retained by default. Use --no-retain-acked-messages to disable this flag",
              hidden: true,
            },
            {
              name: "--no-use-table-schema",
              description:
                "Whether or not to use the BigQuery table schema when writing messages to BigQuery. Use --no-use-table-schema to disable this flag",
              hidden: true,
            },
            {
              name: "--no-use-topic-schema",
              description:
                "Whether or not to use the schema for the subscription's topic (if it exists) when writing messages to BigQuery. If --drop-unknown-fields is not set, then the BigQuery schema must contain all fields that are present in the topic schema. Use --no-use-topic-schema to disable this flag",
              hidden: true,
            },
            {
              name: "--no-write-metadata",
              description:
                "Whether or not to write message metadata including message ID, publish timestamp, ordering key, and attributes to BigQuery. The subscription name, message_id, and publish_time fields are put in their own columns while all other message properties other than data (for example, an ordering_key, if present) are written to a JSON object in the attributes column. Use --no-write-metadata to disable this flag",
              hidden: true,
            },
            optProject,
            optPushAuthServiceAccount,
            optPushAuthTokenAudience,
            {
              name: "--push-endpoint",
              description:
                "A URL to use as the endpoint for this subscription. This will also automatically set the subscription type to PUSH",
              args: {
                name: "PUSH_ENDPOINT",
                description: "String",
              },
            },
            optPushNoWrapper,
            optPushNoWrapperWriteMetadata,
            optQuiet,
            {
              name: "--retain-acked-messages",
              description:
                "Whether or not to retain acknowledged messages. If true, messages are not expunged from the subscription's backlog until they fall out of the --message-retention-duration window. Acknowledged messages are not retained by default. Use --no-retain-acked-messages to disable this flag",
            },
            optTags,
            {
              name: "--topic",
              description:
                "ID of the topic or fully qualified identifier for the topic",
              priority: 100,
              args: {
                name: "TOPIC",
                description: "String",
              },
            },
            {
              name: "--topic-project",
              description:
                "Project ID of the Google Cloud project for the topic",
              args: {
                name: "TOPIC_PROJECT",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--use-table-schema",
              description:
                "Whether or not to use the BigQuery table schema when writing messages to BigQuery. Use --no-use-table-schema to disable this flag",
            },
            {
              name: "--use-topic-schema",
              description:
                "Whether or not to use the schema for the subscription's topic (if it exists) when writing messages to BigQuery. If --drop-unknown-fields is not set, then the BigQuery schema must contain all fields that are present in the topic schema. Use --no-use-topic-schema to disable this flag",
            },
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--write-metadata",
              description:
                "Whether or not to write message metadata including message ID, publish timestamp, ordering key, and attributes to BigQuery. The subscription name, message_id, and publish_time fields are put in their own columns while all other message properties other than data (for example, an ordering_key, if present) are written to a JSON object in the attributes column. Use --no-write-metadata to disable this flag",
            },
          ],
          args: {
            name: "SUBSCRIPTION",
            description:
              "IDs of the subscriptions or fully qualified identifiers for the subscriptions",
            isVariadic: true,
          },
        },
        {
          name: "delete",
          description: "Deletes one or more Cloud Pub/Sub subscriptions",
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
            name: "SUBSCRIPTION",
            description:
              "IDs of the subscriptions or fully qualified identifiers for the subscriptions",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Describes a Cloud Pub/Sub subscription",
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
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Pub/Sub Subscription",
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
          args: {
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription",
          },
        },
        {
          name: "list",
          description: "Lists Cloud Pub/Sub subscriptions",
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
        {
          name: "modify-message-ack-deadline",
          description:
            "Modifies the ACK deadline for a specific Cloud Pub/Sub message",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--ack-deadline",
              description:
                "The number of seconds the system will wait for a subscriber to acknowledge receiving a message before re-attempting delivery",
              priority: 100,
              args: {
                name: "ACK_DEADLINE",
                description: "Int",
              },
            },
            {
              name: "--ack-ids",
              description:
                "One or more ACK_IDs to modify the deadline for. An ACK_ID is a [string that is returned to subscribers](https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#google.pubsub.v1.ReceivedMessage). along with the message. The ACK_ID is different from the [message ID](https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#google.pubsub.v1.PubsubMessage)",
              priority: 100,
              args: {
                name: "ACK_ID",
                description: "List",
              },
            },
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
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription",
          },
        },
        {
          name: "modify-push-config",
          description:
            "Modifies the push configuration of a Cloud Pub/Sub subscription",
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
            optNoPushNoWrapper,
            optNoPushNoWrapperWriteMetadata,
            optProject,
            optPushAuthServiceAccount,
            optPushAuthTokenAudience,
            {
              name: "--push-endpoint",
              description:
                "A URL to use as the endpoint for this subscription. This will also automatically set the subscription type to PUSH",
              priority: 100,
              args: {
                name: "PUSH_ENDPOINT",
                description: "String",
              },
            },
            optPushNoWrapper,
            optPushNoWrapperWriteMetadata,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription",
          },
        },
        {
          name: "pull",
          description:
            "Pulls one or more Cloud Pub/Sub messages from a subscription",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--auto-ack",
              description:
                "Automatically ACK every message pulled from this subscription. Use --no-auto-ack to disable this flag",
            },
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
              name: "--limit",
              description:
                "Maximum number of resources to list. The default is *1*. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
              args: {
                name: "LIMIT",
                description: "Int",
              },
            },
            optLogHttp,
            {
              name: "--no-auto-ack",
              description:
                "Automatically ACK every message pulled from this subscription. Use --no-auto-ack to disable this flag",
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
          args: {
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding of a subscription",
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
              name: "--member",
              description:
                "The principal to remove the binding for. Should be of the form `user|group|serviceAccount:email` or `domain:domain`",
              priority: 100,
              args: {
                name: "PRINCIPAL",
                description: "String",
              },
            },
            optProject,
            optQuiet,
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
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription",
          },
        },
        {
          name: "seek",
          description:
            "Resets a subscription's backlog to a point in time or to a given snapshot",
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
              name: "--snapshot",
              description:
                "The name of the snapshot. The snapshot's topic must be the same as that of the subscription",
              args: {
                name: "SNAPSHOT",
                description: "String",
              },
            },
            {
              name: "--snapshot-project",
              description:
                "The name of the project the snapshot belongs to (if seeking to a snapshot). If not set, it defaults to the currently selected cloud project",
              args: {
                name: "SNAPSHOT_PROJECT",
                description: "String",
              },
            },
            {
              name: "--time",
              description:
                "The time to seek to. Messages in the subscription that were published before this time are marked as acknowledged, and messages retained in the subscription that were published after this time are marked as unacknowledged. See $ gcloud topic datetimes for information on time formats",
              args: {
                name: "TIME",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set IAM policy for a subscription",
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
          args: [
            {
              name: "SUBSCRIPTION",
              description:
                "ID of the subscription or fully qualified identifier for the subscription",
            },
            {
              name: "POLICY_FILE",
              description: "JSON or YAML file with the IAM policy",
              template: "filepaths",
            },
          ],
        },
        {
          name: "update",
          description: "Updates an existing Cloud Pub/Sub subscription",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--ack-deadline",
              description:
                "The number of seconds the system will wait for a subscriber to acknowledge receiving a message before re-attempting delivery",
              args: {
                name: "ACK_DEADLINE",
                description: "Int",
              },
            },
            {
              name: "--bigquery-service-account-email",
              description:
                "The service account email to use when writing to BigQuery. If unspecified, uses the Pub/Sub service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents)",
              args: {
                name: "BIGQUERY_SERVICE_ACCOUNT_EMAIL",
                description: "String",
              },
            },
            {
              name: "--bigquery-table",
              description:
                "A BigQuery table of the form {project}:{dataset_name}.{table_name} to which to write messages for this subscription",
              priority: 100,
              args: {
                name: "BIGQUERY_TABLE",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--clear-bigquery-config",
              description:
                "If set, clear the BigQuery config from the subscription. Use --no-clear-bigquery-config to disable this flag",
            },
            {
              name: "--clear-cloud-storage-config",
              description:
                "If set, clear the Cloud Storage config from the subscription. Use --no-clear-cloud-storage-config to disable this flag",
            },
            {
              name: "--clear-dead-letter-policy",
              description:
                "If set, clear the dead letter policy from the subscription. Use --no-clear-dead-letter-policy to disable this flag",
            },
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
            },
            {
              name: "--clear-message-transforms",
              description:
                "If set, clears the message transforms field. Use --no-clear-message-transforms to disable this flag",
            },
            {
              name: "--clear-push-no-wrapper-config",
              description:
                "If set, clear the NoWrapper config from the subscription. Use --no-clear-push-no-wrapper-config to disable this flag",
            },
            {
              name: "--clear-retry-policy",
              description:
                "If set, clear the retry policy from the subscription. Use --no-clear-retry-policy to disable this flag",
            },
            {
              name: "--cloud-storage-bucket",
              description:
                "A Cloud Storage bucket to which to write messages for this subscription",
              priority: 100,
              args: {
                name: "CLOUD_STORAGE_BUCKET",
                description: "String",
              },
            },
            {
              name: "--cloud-storage-file-datetime-format",
              description:
                "The custom datetime format string for Cloud Storage filename. See the [datetime format guidance](https://cloud.google.com/pubsub/docs/create-cloudstorage-subscription#file_names)",
              args: {
                name: "CLOUD_STORAGE_FILE_DATETIME_FORMAT",
                description: "String",
              },
            },
            {
              name: "--cloud-storage-file-prefix",
              description: "The prefix for Cloud Storage filename",
              args: {
                name: "CLOUD_STORAGE_FILE_PREFIX",
                description: "String",
              },
            },
            {
              name: "--cloud-storage-file-suffix",
              description: "The suffix for Cloud Storage filename",
              args: {
                name: "CLOUD_STORAGE_FILE_SUFFIX",
                description: "String",
              },
            },
            {
              name: "--cloud-storage-max-bytes",
              description:
                "The maximum bytes that can be written to a Cloud Storage file before a new file is created. The value must be between 1000B and 10GB. If the unit is omitted, KB is assumed",
              args: {
                name: "CLOUD_STORAGE_MAX_BYTES",
              },
            },
            {
              name: "--cloud-storage-max-duration",
              description:
                'The maximum duration that can elapse before a new Cloud Storage file is created. The value must be between 1m and 10m. Valid values are strings of the form INTEGER[UNIT], where UNIT is one of "s", "m", "h", and "d" for seconds, minutes, hours, and days, respectively. If the unit is omitted, seconds is assumed',
              args: {
                name: "CLOUD_STORAGE_MAX_DURATION",
              },
            },
            {
              name: "--cloud-storage-max-messages",
              description:
                "The maximum number of messages that can be written to a Cloud Storage file before a new file is created. The value must be greater than or equal to 1000",
              args: {
                name: "CLOUD_STORAGE_MAX_MESSAGES",
              },
            },
            {
              name: "--cloud-storage-output-format",
              description:
                "The output format for data written to Cloud Storage. Values: text (messages will be written as raw text, separated by a newline) or avro (messages will be written as an Avro binary). _OUTPUT_FORMAT_ must be one of: *text*, *avro*",
              args: {
                name: "OUTPUT_FORMAT",
                description: "List",
              },
            },
            {
              name: "--cloud-storage-service-account-email",
              description:
                "The service account email to use when writing to Cloud Storage. If unspecified, uses the Pub/Sub service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents)",
              args: {
                name: "CLOUD_STORAGE_SERVICE_ACCOUNT_EMAIL",
                description: "String",
              },
            },
            {
              name: "--cloud-storage-use-topic-schema",
              description:
                "Whether or not to use the schema for the subscription's topic (if it exists) when writing messages to Cloud Storage. This has an effect only for subscriptions with --cloud-storage-output-format=avro. Use --no-cloud-storage-use-topic-schema to disable this flag",
            },
            {
              name: "--cloud-storage-write-metadata",
              description:
                "Whether or not to write the subscription name, message_id, publish_time, attributes, and ordering_key as additional fields in the output. The subscription name, message_id, and publish_time fields are put in their own fields while all other message properties other than data (for example, an ordering_key, if present) are added as entries in the attributes map. This has an effect only for subscriptions with --cloud-storage-output-format=avro. Use --no-cloud-storage-write-metadata to disable this flag",
            },
            optConfiguration,
            {
              name: "--dead-letter-topic",
              description:
                "ID of the dead-letter-topic or fully qualified identifier for the dead-letter-topic",
              priority: 100,
              args: {
                name: "DEAD_LETTER_TOPIC",
                description: "String",
              },
            },
            {
              name: "--dead-letter-topic-project",
              description:
                "Project ID of the Google Cloud project for the dead-letter-topic",
              args: {
                name: "DEAD_LETTER_TOPIC_PROJECT",
                description: "String",
              },
            },
            {
              name: "--drop-unknown-fields",
              description:
                "If either --use-topic-schema or --use-table-schema is set, whether or not to ignore fields in the message that do not appear in the BigQuery table schema. Use --no-drop-unknown-fields to disable this flag",
            },
            {
              name: "--enable-exactly-once-delivery",
              description:
                "Whether or not to enable exactly-once delivery on the subscription. If true, Pub/Sub provides the following guarantees for the delivery of a message with a given value of `message_id` on this subscription: The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgment deadline expires. An acknowledged message will not be resent to a subscriber. Use --no-enable-exactly-once-delivery to disable this flag",
            },
            {
              name: "--expiration-period",
              description:
                'The subscription will expire if it is inactive for the given period. Valid values are strings of the form INTEGER[UNIT], where UNIT is one of "s", "m", "h", and "d" for seconds, minutes, hours, and days, respectively. If the unit is omitted, seconds is assumed. This flag additionally accepts the special value "never" to indicate that the subscription will never expire',
              args: {
                name: "EXPIRATION_PERIOD",
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
            {
              name: "--max-delivery-attempts",
              description:
                "Maximum number of delivery attempts for any message. The value must be between 5 and 100. Defaults to 5. `--dead-letter-topic` must also be specified",
              args: {
                name: "MAX_DELIVERY_ATTEMPTS",
              },
            },
            {
              name: "--max-retry-delay",
              description:
                'The maximum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 600 seconds. Valid values are strings of the form INTEGER[UNIT], where UNIT is one of "s", "m", "h", and "d" for seconds, minutes, hours, and days, respectively. If the unit is omitted, seconds is assumed',
              args: {
                name: "MAX_RETRY_DELAY",
              },
            },
            {
              name: "--message-retention-duration",
              description:
                'How long to retain unacknowledged messages in the subscription\'s backlog, from the moment a message is published. If --retain-acked-messages is true, this also configures the retention of acknowledged messages. Specify "default" to use the default value of 7 days. The minimum is 10 minutes, and the maximum is 31 days. Valid values are strings of the form INTEGER[UNIT], where UNIT is one of "s", "m", "h", and "d" for seconds, minutes, hours, and days, respectively. If the unit is omitted, seconds is assumed',
              args: {
                name: "MESSAGE_RETENTION_DURATION",
              },
            },
            optMessageTransformsFile,
            {
              name: "--min-retry-delay",
              description:
                'The minimum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 10 seconds. Valid values are strings of the form INTEGER[UNIT], where UNIT is one of "s", "m", "h", and "d" for seconds, minutes, hours, and days, respectively. If the unit is omitted, seconds is assumed',
              args: {
                name: "MIN_RETRY_DELAY",
              },
            },
            {
              name: "--no-clear-bigquery-config",
              description:
                "If set, clear the BigQuery config from the subscription. Use --no-clear-bigquery-config to disable this flag",
              hidden: true,
            },
            {
              name: "--no-clear-cloud-storage-config",
              description:
                "If set, clear the Cloud Storage config from the subscription. Use --no-clear-cloud-storage-config to disable this flag",
              hidden: true,
            },
            {
              name: "--no-clear-dead-letter-policy",
              description:
                "If set, clear the dead letter policy from the subscription. Use --no-clear-dead-letter-policy to disable this flag",
              hidden: true,
            },
            {
              name: "--no-clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
              hidden: true,
            },
            {
              name: "--no-clear-message-transforms",
              description:
                "If set, clears the message transforms field. Use --no-clear-message-transforms to disable this flag",
              hidden: true,
            },
            {
              name: "--no-clear-push-no-wrapper-config",
              description:
                "If set, clear the NoWrapper config from the subscription. Use --no-clear-push-no-wrapper-config to disable this flag",
              hidden: true,
            },
            {
              name: "--no-clear-retry-policy",
              description:
                "If set, clear the retry policy from the subscription. Use --no-clear-retry-policy to disable this flag",
              hidden: true,
            },
            {
              name: "--no-cloud-storage-use-topic-schema",
              description:
                "Whether or not to use the schema for the subscription's topic (if it exists) when writing messages to Cloud Storage. This has an effect only for subscriptions with --cloud-storage-output-format=avro. Use --no-cloud-storage-use-topic-schema to disable this flag",
              hidden: true,
            },
            {
              name: "--no-cloud-storage-write-metadata",
              description:
                "Whether or not to write the subscription name, message_id, publish_time, attributes, and ordering_key as additional fields in the output. The subscription name, message_id, and publish_time fields are put in their own fields while all other message properties other than data (for example, an ordering_key, if present) are added as entries in the attributes map. This has an effect only for subscriptions with --cloud-storage-output-format=avro. Use --no-cloud-storage-write-metadata to disable this flag",
              hidden: true,
            },
            {
              name: "--no-drop-unknown-fields",
              description:
                "If either --use-topic-schema or --use-table-schema is set, whether or not to ignore fields in the message that do not appear in the BigQuery table schema. Use --no-drop-unknown-fields to disable this flag",
              hidden: true,
            },
            {
              name: "--no-enable-exactly-once-delivery",
              description:
                "Whether or not to enable exactly-once delivery on the subscription. If true, Pub/Sub provides the following guarantees for the delivery of a message with a given value of `message_id` on this subscription: The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgment deadline expires. An acknowledged message will not be resent to a subscriber. Use --no-enable-exactly-once-delivery to disable this flag",
              hidden: true,
            },
            optNoPushNoWrapper,
            optNoPushNoWrapperWriteMetadata,
            {
              name: "--no-retain-acked-messages",
              description:
                "Whether or not to retain acknowledged messages. If true, messages are not expunged from the subscription's backlog until they fall out of the --message-retention-duration window. Acknowledged messages are not retained by default. Use --no-retain-acked-messages to disable this flag",
              hidden: true,
            },
            {
              name: "--no-use-table-schema",
              description:
                "Whether or not to use the BigQuery table schema when writing messages to BigQuery. Use --no-use-table-schema to disable this flag",
              hidden: true,
            },
            {
              name: "--no-use-topic-schema",
              description:
                "Whether or not to use the schema for the subscription's topic (if it exists) when writing messages to BigQuery. If --drop-unknown-fields is not set, then the BigQuery schema must contain all fields that are present in the topic schema. Use --no-use-topic-schema to disable this flag",
              hidden: true,
            },
            {
              name: "--no-write-metadata",
              description:
                "Whether or not to write message metadata including message ID, publish timestamp, ordering key, and attributes to BigQuery. The subscription name, message_id, and publish_time fields are put in their own columns while all other message properties other than data (for example, an ordering_key, if present) are written to a JSON object in the attributes column. Use --no-write-metadata to disable this flag",
              hidden: true,
            },
            optProject,
            optPushAuthServiceAccount,
            optPushAuthTokenAudience,
            {
              name: "--push-endpoint",
              description:
                "A URL to use as the endpoint for this subscription. This will also automatically set the subscription type to PUSH",
              args: {
                name: "PUSH_ENDPOINT",
                description: "String",
              },
            },
            optPushNoWrapper,
            optPushNoWrapperWriteMetadata,
            optQuiet,
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
              name: "--retain-acked-messages",
              description:
                "Whether or not to retain acknowledged messages. If true, messages are not expunged from the subscription's backlog until they fall out of the --message-retention-duration window. Acknowledged messages are not retained by default. Use --no-retain-acked-messages to disable this flag",
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
            {
              name: "--use-table-schema",
              description:
                "Whether or not to use the BigQuery table schema when writing messages to BigQuery. Use --no-use-table-schema to disable this flag",
            },
            {
              name: "--use-topic-schema",
              description:
                "Whether or not to use the schema for the subscription's topic (if it exists) when writing messages to BigQuery. If --drop-unknown-fields is not set, then the BigQuery schema must contain all fields that are present in the topic schema. Use --no-use-topic-schema to disable this flag",
            },
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--write-metadata",
              description:
                "Whether or not to write message metadata including message ID, publish timestamp, ordering key, and attributes to BigQuery. The subscription name, message_id, and publish_time fields are put in their own columns while all other message properties other than data (for example, an ordering_key, if present) are written to a JSON object in the attributes column. Use --no-write-metadata to disable this flag",
            },
          ],
          args: {
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription",
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
      name: "topics",
      description: "Manage Cloud Pub/Sub topics",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a topic",
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
              name: "--member",
              description:
                "The principal to add the binding for. Should be of the form `user|group|serviceAccount:email` or `domain:domain`",
              priority: 100,
              args: {
                name: "PRINCIPAL",
                description: "String",
              },
            },
            optProject,
            optQuiet,
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
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic",
          },
        },
        {
          name: "create",
          description: "Creates one or more Cloud Pub/Sub topics",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--aws-msk-ingestion-aws-role-arn",
              description:
                "AWS role ARN to be used for Federated Identity authentication with MSK",
              priority: 100,
              args: {
                name: "AWS_MSK_INGESTION_AWS_ROLE_ARN",
                description: "String",
              },
            },
            {
              name: "--aws-msk-ingestion-cluster-arn",
              description: "ARN that uniquely identifies the MSK cluster",
              priority: 100,
              args: {
                name: "AWS_MSK_INGESTION_CLUSTER_ARN",
                description: "String",
              },
            },
            {
              name: "--aws-msk-ingestion-service-account",
              description:
                "Google Cloud service account to be used for Federated Identity authentication with MSK",
              priority: 100,
              args: {
                name: "AWS_MSK_INGESTION_SERVICE_ACCOUNT",
                description: "String",
              },
            },
            {
              name: "--aws-msk-ingestion-topic",
              description:
                "Name of the MSK topic that Pub/Sub will import from",
              priority: 100,
              args: {
                name: "AWS_MSK_INGESTION_TOPIC",
                description: "String",
              },
            },
            {
              name: "--azure-event-hubs-ingestion-client-id",
              description: "Azure Event Hubs client ID to use for ingestion",
              priority: 100,
              args: {
                name: "AZURE_EVENT_HUBS_INGESTION_CLIENT_ID",
                description: "String",
              },
            },
            {
              name: "--azure-event-hubs-ingestion-event-hub",
              description: "Azure event hub from which to ingest data",
              priority: 100,
              args: {
                name: "AZURE_EVENT_HUBS_INGESTION_EVENT_HUB",
                description: "String",
              },
            },
            {
              name: "--azure-event-hubs-ingestion-namespace",
              description:
                "Azure Event Hubs namespace from which to ingest data",
              priority: 100,
              args: {
                name: "AZURE_EVENT_HUBS_INGESTION_NAMESPACE",
                description: "String",
              },
            },
            {
              name: "--azure-event-hubs-ingestion-resource-group",
              description:
                "Azure Event Hubs resource group from within an Azure subscription",
              priority: 100,
              args: {
                name: "AZURE_EVENT_HUBS_INGESTION_RESOURCE_GROUP",
                description: "String",
              },
            },
            {
              name: "--azure-event-hubs-ingestion-service-account",
              description:
                "Google Cloud service account to be used for Federated Identity authentication with Azure Event Hubs",
              priority: 100,
              args: {
                name: "AZURE_EVENT_HUBS_INGESTION_SERVICE_ACCOUNT",
                description: "String",
              },
            },
            {
              name: "--azure-event-hubs-ingestion-subscription-id",
              description:
                "Azure Event Hubs subscription ID to use for ingestion",
              priority: 100,
              args: {
                name: "AZURE_EVENT_HUBS_INGESTION_SUBSCRIPTION_ID",
                description: "String",
              },
            },
            {
              name: "--azure-event-hubs-ingestion-tenant-id",
              description: "Azure Event Hubs tenant ID to use for ingestion",
              priority: 100,
              args: {
                name: "AZURE_EVENT_HUBS_INGESTION_TENANT_ID",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--cloud-storage-ingestion-bucket",
              description: "Cloud Storage bucket from which to ingest data",
              priority: 100,
              args: {
                name: "CLOUD_STORAGE_INGESTION_BUCKET",
                description: "String",
              },
            },
            {
              name: "--cloud-storage-ingestion-input-format",
              description:
                "Format of the data in the Cloud Storage bucket. _INPUT_FORMAT_ must be one of: *text*, *avro*, *pubsub_avro*",
              priority: 100,
              args: {
                name: "INPUT_FORMAT",
                description: "List",
              },
            },
            {
              name: "--cloud-storage-ingestion-match-glob",
              description:
                "Glob pattern used to match Cloud Storage objects that will be ingested. If unset, all objects will be ingested",
              args: {
                name: "CLOUD_STORAGE_INGESTION_MATCH_GLOB",
                description: "String",
              },
            },
            {
              name: "--cloud-storage-ingestion-minimum-object-create-time",
              description:
                "Only Cloud Storage objects with a larger or equal creation timestamp will be ingested",
              args: {
                name: "CLOUD_STORAGE_INGESTION_MINIMUM_OBJECT_CREATE_TIME",
                description: "String",
              },
            },
            {
              name: "--cloud-storage-ingestion-text-delimiter",
              description:
                "Delimiter to use with text format when partitioning the object",
              args: {
                name: "CLOUD_STORAGE_INGESTION_TEXT_DELIMITER",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--confluent-cloud-ingestion-bootstrap-server",
              description:
                "Confluent Cloud bootstrap server. The format is url:port",
              priority: 100,
              args: {
                name: "CONFLUENT_CLOUD_INGESTION_BOOTSTRAP_SERVER",
                description: "String",
              },
            },
            {
              name: "--confluent-cloud-ingestion-cluster-id",
              description: "Confluent Cloud cluster ID",
              priority: 100,
              args: {
                name: "CONFLUENT_CLOUD_INGESTION_CLUSTER_ID",
                description: "String",
              },
            },
            {
              name: "--confluent-cloud-ingestion-identity-pool-id",
              description:
                "Identity pool ID to be used for Federated Identity authentication with Confluent Cloud",
              priority: 100,
              args: {
                name: "CONFLUENT_CLOUD_INGESTION_IDENTITY_POOL_ID",
                description: "String",
              },
            },
            {
              name: "--confluent-cloud-ingestion-service-account",
              description:
                "Google Cloud service account to be used for Federated Identity authentication with Confluent Cloud",
              priority: 100,
              args: {
                name: "CONFLUENT_CLOUD_INGESTION_SERVICE_ACCOUNT",
                description: "String",
              },
            },
            {
              name: "--confluent-cloud-ingestion-topic",
              description:
                "Name of the Confluent Cloud topic that Pub/Sub will import from",
              priority: 100,
              args: {
                name: "CONFLUENT_CLOUD_INGESTION_TOPIC",
                description: "String",
              },
            },
            {
              name: "--first-revision-id",
              description:
                "The id of the oldest revision allowed for the specified schema",
              args: {
                name: "FIRST_REVISION_ID",
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
              name: "--ingestion-log-severity",
              description: "Log severity to use for ingestion",
              args: {
                name: "INGESTION_LOG_SEVERITY",
                description: "String",
              },
            },
            {
              name: "--kinesis-ingestion-consumer-arn",
              description:
                "Kinesis data streams consumer Amazon Resource Name (ARN) to use for ingestion",
              priority: 100,
              args: {
                name: "KINESIS_INGESTION_CONSUMER_ARN",
                description: "String",
              },
            },
            {
              name: "--kinesis-ingestion-role-arn",
              description:
                "AWS role ARN to be used for Federated Identity authentication with Kinesis",
              priority: 100,
              args: {
                name: "KINESIS_INGESTION_ROLE_ARN",
                description: "String",
              },
            },
            {
              name: "--kinesis-ingestion-service-account",
              description:
                "Google Cloud service account to be used for Federated Identity authentication with Kinesis",
              priority: 100,
              args: {
                name: "KINESIS_INGESTION_SERVICE_ACCOUNT",
                description: "String",
              },
            },
            {
              name: "--kinesis-ingestion-stream-arn",
              description: "Kinesis data stream ARN from which to ingest data",
              priority: 100,
              args: {
                name: "KINESIS_INGESTION_STREAM_ARN",
                description: "String",
              },
            },
            optLabels,
            {
              name: "--last-revision-id",
              description:
                "The id of the most recent revision allowed for the specified schema",
              args: {
                name: "LAST_REVISION_ID",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--message-encoding",
              description:
                "The encoding of messages validated against the schema. _ENCODING_ must be one of: *json*, *binary*",
              priority: 100,
              args: {
                name: "ENCODING",
                description: "List",
              },
            },
            {
              name: "--message-retention-duration",
              description:
                'Indicates the minimum duration to retain a message after it is published to the topic. If this field is set, messages published to the topic in the last MESSAGE_RETENTION_DURATION are always available to subscribers. For instance, it allows any attached subscription to seek to a timestamp that is up to MESSAGE_RETENTION_DURATION in the past. If this field is not set, message retention is controlled by settings on individual subscriptions. The minimum is 10 minutes and the maximum is 31 days. Valid values are strings of the form INTEGER[UNIT], where UNIT is one of "s", "m", "h", and "d" for seconds, minutes, hours, and days, respectively. If the unit is omitted, seconds is assumed',
              args: {
                name: "MESSAGE_RETENTION_DURATION",
              },
            },
            {
              name: "--message-storage-policy-allowed-regions",
              description:
                "A list of one or more Cloud regions where messages are allowed to be stored at rest",
              priority: 100,
              args: {
                name: "REGION",
                description: "List",
              },
            },
            {
              name: "--message-storage-policy-enforce-in-transit",
              description:
                "Whether or not to enforce in-transit guarantees for this topic using the allowed regions. This ensures that publishing, pulling, and push delivery are only handled in allowed Cloud regions",
            },
            optMessageTransformsFile,
            {
              name: "--no-message-storage-policy-enforce-in-transit",
              description:
                "Whether or not to enforce in-transit guarantees for this topic using the allowed regions. This ensures that publishing, pulling, and push delivery are only handled in allowed Cloud regions",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--schema",
              description:
                "ID of the schema or fully qualified identifier for the schema",
              priority: 100,
              args: {
                name: "SCHEMA",
                description: "String",
              },
            },
            {
              name: "--schema-project",
              description:
                "Project ID of the Google Cloud project for the schema",
              args: {
                name: "SCHEMA_PROJECT",
                description: "String",
              },
            },
            optTags,
            {
              name: "--topic-encryption-key",
              description:
                "ID of the key or fully qualified identifier for the key",
              priority: 100,
              args: {
                name: "TOPIC_ENCRYPTION_KEY",
                description: "String",
              },
            },
            {
              name: "--topic-encryption-key-keyring",
              description: "The KMS keyring of the key",
              args: {
                name: "TOPIC_ENCRYPTION_KEY_KEYRING",
                description: "String",
              },
            },
            {
              name: "--topic-encryption-key-location",
              description: "The Google Cloud location for the key",
              args: {
                name: "TOPIC_ENCRYPTION_KEY_LOCATION",
                description: "String",
              },
            },
            {
              name: "--topic-encryption-key-project",
              description: "The Google Cloud project for the key",
              args: {
                name: "TOPIC_ENCRYPTION_KEY_PROJECT",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TOPIC",
            description:
              "IDs of the topics or fully qualified identifiers for the topics",
            isVariadic: true,
          },
        },
        {
          name: "delete",
          description: "Deletes one or more Cloud Pub/Sub topics",
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
            name: "TOPIC",
            description:
              "IDs of the topics or fully qualified identifiers for the topics",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Describes a Cloud Pub/Sub topic",
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
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic",
          },
        },
        {
          name: "detach-subscription",
          description: "Detaches one or more Cloud Pub/Sub subscriptions",
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
            name: "SUBSCRIPTION",
            description:
              "IDs of the subscriptions or fully qualified identifiers for the subscriptions",
            isVariadic: true,
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Pub/Sub Topic",
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
          args: {
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic",
          },
        },
        {
          name: "list",
          description: "Lists Cloud Pub/Sub topics within a project",
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
        {
          name: "list-subscriptions",
          description: "Lists Cloud Pub/Sub subscriptions from a given topic",
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
          args: {
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic",
          },
        },
        {
          name: "publish",
          description: "Publishes a message to the specified topic",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--attribute",
              description:
                'Comma-separated list of attributes. Each ATTRIBUTE has the form name="value". You can specify up to 100 attributes',
              args: {
                name: "ATTRIBUTE",
                description: "Dict",
              },
            },
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
              name: "--message",
              description:
                "The body of the message to publish to the given topic name. Information on message formatting and size limits can be found at: https://cloud.google.com/pubsub/docs/publisher#publish",
              args: {
                name: "MESSAGE",
                description: "String",
              },
            },
            {
              name: "--ordering-key",
              description:
                "The key for ordering delivery to subscribers. All messages with the same ordering key are sent to subscribers in the order that Pub/Sub receives them",
              args: {
                name: "ORDERING_KEY",
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
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding of a topic",
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
              name: "--member",
              description:
                "The principal to remove the binding for. Should be of the form `user|group|serviceAccount:email` or `domain:domain`",
              priority: 100,
              args: {
                name: "PRINCIPAL",
                description: "String",
              },
            },
            optProject,
            optQuiet,
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
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set IAM policy for a topic",
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
          args: [
            {
              name: "TOPIC",
              description:
                "ID of the topic or fully qualified identifier for the topic",
            },
            {
              name: "POLICY_FILE",
              description: "JSON or YAML file with the IAM policy",
              template: "filepaths",
            },
          ],
        },
        {
          name: "update",
          description: "Updates an existing Cloud Pub/Sub topic",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--aws-msk-ingestion-aws-role-arn",
              description:
                "AWS role ARN to be used for Federated Identity authentication with MSK",
              priority: 100,
              args: {
                name: "AWS_MSK_INGESTION_AWS_ROLE_ARN",
                description: "String",
              },
            },
            {
              name: "--aws-msk-ingestion-cluster-arn",
              description: "ARN that uniquely identifies the MSK cluster",
              priority: 100,
              args: {
                name: "AWS_MSK_INGESTION_CLUSTER_ARN",
                description: "String",
              },
            },
            {
              name: "--aws-msk-ingestion-service-account",
              description:
                "Google Cloud service account to be used for Federated Identity authentication with MSK",
              priority: 100,
              args: {
                name: "AWS_MSK_INGESTION_SERVICE_ACCOUNT",
                description: "String",
              },
            },
            {
              name: "--aws-msk-ingestion-topic",
              description:
                "Name of the MSK topic that Pub/Sub will import from",
              priority: 100,
              args: {
                name: "AWS_MSK_INGESTION_TOPIC",
                description: "String",
              },
            },
            {
              name: "--azure-event-hubs-ingestion-client-id",
              description: "Azure Event Hubs client ID to use for ingestion",
              priority: 100,
              args: {
                name: "AZURE_EVENT_HUBS_INGESTION_CLIENT_ID",
                description: "String",
              },
            },
            {
              name: "--azure-event-hubs-ingestion-event-hub",
              description: "Azure event hub from which to ingest data",
              priority: 100,
              args: {
                name: "AZURE_EVENT_HUBS_INGESTION_EVENT_HUB",
                description: "String",
              },
            },
            {
              name: "--azure-event-hubs-ingestion-namespace",
              description:
                "Azure Event Hubs namespace from which to ingest data",
              priority: 100,
              args: {
                name: "AZURE_EVENT_HUBS_INGESTION_NAMESPACE",
                description: "String",
              },
            },
            {
              name: "--azure-event-hubs-ingestion-resource-group",
              description:
                "Azure Event Hubs resource group from within an Azure subscription",
              priority: 100,
              args: {
                name: "AZURE_EVENT_HUBS_INGESTION_RESOURCE_GROUP",
                description: "String",
              },
            },
            {
              name: "--azure-event-hubs-ingestion-service-account",
              description:
                "Google Cloud service account to be used for Federated Identity authentication with Azure Event Hubs",
              priority: 100,
              args: {
                name: "AZURE_EVENT_HUBS_INGESTION_SERVICE_ACCOUNT",
                description: "String",
              },
            },
            {
              name: "--azure-event-hubs-ingestion-subscription-id",
              description:
                "Azure Event Hubs subscription ID to use for ingestion",
              priority: 100,
              args: {
                name: "AZURE_EVENT_HUBS_INGESTION_SUBSCRIPTION_ID",
                description: "String",
              },
            },
            {
              name: "--azure-event-hubs-ingestion-tenant-id",
              description: "Azure Event Hubs tenant ID to use for ingestion",
              priority: 100,
              args: {
                name: "AZURE_EVENT_HUBS_INGESTION_TENANT_ID",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--clear-ingestion-data-source-settings",
              description:
                "If set, clear the Ingestion Data Source Settings from the topic. Use --no-clear-ingestion-data-source-settings to disable this flag",
            },
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
            },
            {
              name: "--clear-message-retention-duration",
              description:
                "If set, clear the message retention duration from the topic. Use --no-clear-message-retention-duration to disable this flag",
            },
            {
              name: "--clear-message-transforms",
              description:
                "If set, clears the message transforms field. Use --no-clear-message-transforms to disable this flag",
            },
            {
              name: "--clear-schema-settings",
              description:
                "If set, clear the Schema Settings from the topic. Use --no-clear-schema-settings to disable this flag",
            },
            {
              name: "--cloud-storage-ingestion-bucket",
              description: "Cloud Storage bucket from which to ingest data",
              priority: 100,
              args: {
                name: "CLOUD_STORAGE_INGESTION_BUCKET",
                description: "String",
              },
            },
            {
              name: "--cloud-storage-ingestion-input-format",
              description:
                "Format of the data in the Cloud Storage bucket. _INPUT_FORMAT_ must be one of: *text*, *avro*, *pubsub_avro*",
              priority: 100,
              args: {
                name: "INPUT_FORMAT",
                description: "List",
              },
            },
            {
              name: "--cloud-storage-ingestion-match-glob",
              description:
                "Glob pattern used to match Cloud Storage objects that will be ingested. If unset, all objects will be ingested",
              args: {
                name: "CLOUD_STORAGE_INGESTION_MATCH_GLOB",
                description: "String",
              },
            },
            {
              name: "--cloud-storage-ingestion-minimum-object-create-time",
              description:
                "Only Cloud Storage objects with a larger or equal creation timestamp will be ingested",
              args: {
                name: "CLOUD_STORAGE_INGESTION_MINIMUM_OBJECT_CREATE_TIME",
                description: "String",
              },
            },
            {
              name: "--cloud-storage-ingestion-text-delimiter",
              description:
                "Delimiter to use with text format when partitioning the object",
              args: {
                name: "CLOUD_STORAGE_INGESTION_TEXT_DELIMITER",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--confluent-cloud-ingestion-bootstrap-server",
              description:
                "Confluent Cloud bootstrap server. The format is url:port",
              priority: 100,
              args: {
                name: "CONFLUENT_CLOUD_INGESTION_BOOTSTRAP_SERVER",
                description: "String",
              },
            },
            {
              name: "--confluent-cloud-ingestion-cluster-id",
              description: "Confluent Cloud cluster ID",
              priority: 100,
              args: {
                name: "CONFLUENT_CLOUD_INGESTION_CLUSTER_ID",
                description: "String",
              },
            },
            {
              name: "--confluent-cloud-ingestion-identity-pool-id",
              description:
                "Identity pool ID to be used for Federated Identity authentication with Confluent Cloud",
              priority: 100,
              args: {
                name: "CONFLUENT_CLOUD_INGESTION_IDENTITY_POOL_ID",
                description: "String",
              },
            },
            {
              name: "--confluent-cloud-ingestion-service-account",
              description:
                "Google Cloud service account to be used for Federated Identity authentication with Confluent Cloud",
              priority: 100,
              args: {
                name: "CONFLUENT_CLOUD_INGESTION_SERVICE_ACCOUNT",
                description: "String",
              },
            },
            {
              name: "--confluent-cloud-ingestion-topic",
              description:
                "Name of the Confluent Cloud topic that Pub/Sub will import from",
              priority: 100,
              args: {
                name: "CONFLUENT_CLOUD_INGESTION_TOPIC",
                description: "String",
              },
            },
            {
              name: "--first-revision-id",
              description:
                "The id of the oldest revision allowed for the specified schema",
              args: {
                name: "FIRST_REVISION_ID",
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
              name: "--ingestion-log-severity",
              description: "Log severity to use for ingestion",
              args: {
                name: "INGESTION_LOG_SEVERITY",
                description: "String",
              },
            },
            {
              name: "--kinesis-ingestion-consumer-arn",
              description:
                "Kinesis data streams consumer Amazon Resource Name (ARN) to use for ingestion",
              priority: 100,
              args: {
                name: "KINESIS_INGESTION_CONSUMER_ARN",
                description: "String",
              },
            },
            {
              name: "--kinesis-ingestion-role-arn",
              description:
                "AWS role ARN to be used for Federated Identity authentication with Kinesis",
              priority: 100,
              args: {
                name: "KINESIS_INGESTION_ROLE_ARN",
                description: "String",
              },
            },
            {
              name: "--kinesis-ingestion-service-account",
              description:
                "Google Cloud service account to be used for Federated Identity authentication with Kinesis",
              priority: 100,
              args: {
                name: "KINESIS_INGESTION_SERVICE_ACCOUNT",
                description: "String",
              },
            },
            {
              name: "--kinesis-ingestion-stream-arn",
              description: "Kinesis data stream ARN from which to ingest data",
              priority: 100,
              args: {
                name: "KINESIS_INGESTION_STREAM_ARN",
                description: "String",
              },
            },
            {
              name: "--last-revision-id",
              description:
                "The id of the most recent revision allowed for the specified schema",
              args: {
                name: "LAST_REVISION_ID",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--message-encoding",
              description:
                "The encoding of messages validated against the schema. _ENCODING_ must be one of: *json*, *binary*",
              priority: 100,
              args: {
                name: "ENCODING",
                description: "List",
              },
            },
            {
              name: "--message-retention-duration",
              description:
                'Indicates the minimum duration to retain a message after it is published to the topic. If this field is set, messages published to the topic in the last MESSAGE_RETENTION_DURATION are always available to subscribers. For instance, it allows any attached subscription to seek to a timestamp that is up to MESSAGE_RETENTION_DURATION in the past. If this field is not set, message retention is controlled by settings on individual subscriptions. The minimum is 10 minutes and the maximum is 31 days. Valid values are strings of the form INTEGER[UNIT], where UNIT is one of "s", "m", "h", and "d" for seconds, minutes, hours, and days, respectively. If the unit is omitted, seconds is assumed',
              args: {
                name: "MESSAGE_RETENTION_DURATION",
              },
            },
            {
              name: "--message-storage-policy-allowed-regions",
              description:
                "A list of one or more Cloud regions where messages are allowed to be stored at rest",
              priority: 100,
              args: {
                name: "REGION",
                description: "List",
              },
            },
            {
              name: "--message-storage-policy-enforce-in-transit",
              description:
                "Whether or not to enforce in-transit guarantees for this topic using the allowed regions. This ensures that publishing, pulling, and push delivery are only handled in allowed Cloud regions",
            },
            optMessageTransformsFile,
            {
              name: "--no-clear-ingestion-data-source-settings",
              description:
                "If set, clear the Ingestion Data Source Settings from the topic. Use --no-clear-ingestion-data-source-settings to disable this flag",
              hidden: true,
            },
            {
              name: "--no-clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
              hidden: true,
            },
            {
              name: "--no-clear-message-retention-duration",
              description:
                "If set, clear the message retention duration from the topic. Use --no-clear-message-retention-duration to disable this flag",
              hidden: true,
            },
            {
              name: "--no-clear-message-transforms",
              description:
                "If set, clears the message transforms field. Use --no-clear-message-transforms to disable this flag",
              hidden: true,
            },
            {
              name: "--no-clear-schema-settings",
              description:
                "If set, clear the Schema Settings from the topic. Use --no-clear-schema-settings to disable this flag",
              hidden: true,
            },
            {
              name: "--no-message-storage-policy-enforce-in-transit",
              description:
                "Whether or not to enforce in-transit guarantees for this topic using the allowed regions. This ensures that publishing, pulling, and push delivery are only handled in allowed Cloud regions",
              hidden: true,
            },
            {
              name: "--no-recompute-message-storage-policy",
              description:
                'If given, Pub/Sub recomputes the regions where messages can be stored at rest, based on your organization\'s "Resource Location Restriction" policy',
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--recompute-message-storage-policy",
              description:
                'If given, Pub/Sub recomputes the regions where messages can be stored at rest, based on your organization\'s "Resource Location Restriction" policy',
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
              name: "--schema",
              description:
                "ID of the schema or fully qualified identifier for the schema",
              priority: 100,
              args: {
                name: "SCHEMA",
                description: "String",
              },
            },
            {
              name: "--schema-project",
              description:
                "Project ID of the Google Cloud project for the schema",
              args: {
                name: "SCHEMA_PROJECT",
                description: "String",
              },
            },
            {
              name: "--topic-encryption-key",
              description:
                "ID of the key or fully qualified identifier for the key",
              priority: 100,
              args: {
                name: "TOPIC_ENCRYPTION_KEY",
                description: "String",
              },
            },
            {
              name: "--topic-encryption-key-keyring",
              description: "The KMS keyring of the key",
              args: {
                name: "TOPIC_ENCRYPTION_KEY_KEYRING",
                description: "String",
              },
            },
            {
              name: "--topic-encryption-key-location",
              description: "The Google Cloud location for the key",
              args: {
                name: "TOPIC_ENCRYPTION_KEY_LOCATION",
                description: "String",
              },
            },
            {
              name: "--topic-encryption-key-project",
              description: "The Google Cloud project for the key",
              args: {
                name: "TOPIC_ENCRYPTION_KEY_PROJECT",
                description: "String",
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
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic",
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
