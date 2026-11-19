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

const optCsvDelimiter: Fig.Option = {
  name: "--csv-delimiter",
  description:
    "The delimiter being used to separate values. This defaults to ','",
  args: {
    name: "CSV_DELIMITER",
    description: "String",
  },
};

const optCsvDisableTypeInference: Fig.Option = {
  name: "--csv-disable-type-inference",
  description:
    "Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings. Use *--csv-disable-type-inference* to enable and *--no-csv-disable-type-inference* to disable",
};

const optCsvEncoding: Fig.Option = {
  name: "--csv-encoding",
  description: "The character encoding of the data. The default is UTF-8",
  args: {
    name: "CSV_ENCODING",
    description: "String",
  },
};

const optCsvHeaderRows: Fig.Option = {
  name: "--csv-header-rows",
  description:
    "The number of rows to interpret as header rows that should be skipped when reading data rows",
  args: {
    name: "CSV_HEADER_ROWS",
    description: "Int",
  },
};

const optDiscoveryEnabled: Fig.Option = {
  name: "--discovery-enabled",
  description:
    "Whether discovery is enabled. Use *--discovery-enabled* to enable and *--no-discovery-enabled* to disable",
};

const optDiscoveryExcludePatterns: Fig.Option = {
  name: "--discovery-exclude-patterns",
  description:
    "The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names",
  args: {
    name: "EXCLUDE_PATTERNS",
    description: "List",
  },
};

const optDiscoveryIncludePatterns: Fig.Option = {
  name: "--discovery-include-patterns",
  description:
    "The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names",
  args: {
    name: "INCLUDE_PATTERNS",
    description: "List",
  },
};

const optDiscoverySchedule: Fig.Option = {
  name: "--discovery-schedule",
  description:
    "[Cron schedule](https://en.wikipedia.org/wiki/Cron) for running discovery jobs periodically. Discovery jobs must be scheduled at least 30 minutes apart",
  args: {
    name: "DISCOVERY_SCHEDULE",
    description: "String",
  },
};

const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "Display Name",
  args: {
    name: "DISPLAY_NAME",
    description: "String",
  },
};

const optEntryGroup: Fig.Option = {
  name: "--entry-group",
  description: "Entry group containing Dataplex Entries",
  args: {
    name: "ENTRY_GROUP",
    description: "String",
  },
};

const optEntrySourceCreateTime: Fig.Option = {
  name: "--entry-source-create-time",
  description:
    "The creation date and time of the resource in the source system",
  args: {
    name: "DATE_TIME",
  },
};

const optEntrySourceDescription: Fig.Option = {
  name: "--entry-source-description",
  description: "Description of the Entry",
  args: {
    name: "DESCRIPTION",
    description: "String",
  },
};

const optEntrySourceDisplayName: Fig.Option = {
  name: "--entry-source-display-name",
  description: "User friendly display name",
  args: {
    name: "DISPLAY_NAME",
    description: "String",
  },
};

const optEntrySourceLabels: Fig.Option = {
  name: "--entry-source-labels",
  description: "List of label KEY=VALUE pairs to add",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
  },
};

const optEntrySourcePlatform: Fig.Option = {
  name: "--entry-source-platform",
  description: "The platform containing the source system",
  args: {
    name: "PLATFORM_NAME",
    description: "String",
  },
};

const optEntrySourceResource: Fig.Option = {
  name: "--entry-source-resource",
  description: "The name of the resource in the source system",
  args: {
    name: "RESOURCE",
    description: "String",
  },
};

const optEntrySourceSystem: Fig.Option = {
  name: "--entry-source-system",
  description: "The name of the source system",
  args: {
    name: "SYSTEM_NAME",
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

const optGlossary: Fig.Option = {
  name: "--glossary",
  description: "Identifier of the Dataplex Glossary resource",
  args: {
    name: "GLOSSARY",
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

const optJsonDisableTypeInference: Fig.Option = {
  name: "--json-disable-type-inference",
  description:
    "Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean). Use *--json-disable-type-inference* to enable and *--no-json-disable-type-inference* to disable",
};

const optJsonEncoding: Fig.Option = {
  name: "--json-encoding",
  description: "The character encoding of the data. The default is UTF-8",
  args: {
    name: "JSON_ENCODING",
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

const optLake: Fig.Option = {
  name: "--lake",
  description: "ID of the lake or fully qualified identifier for the lake",
  priority: 100,
  args: {
    name: "LAKE",
    description: "String",
  },
};

const optLake2: Fig.Option = {
  name: "--lake",
  description: "Identifier of the Dataplex lake resource",
  args: {
    name: "LAKE",
    description: "String",
  },
};

const optLake3: Fig.Option = {
  name: "--lake",
  description: "The identifier of the Dataplex lake resource",
  args: {
    name: "LAKE",
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
  description: "Location of the Dataplex resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description: "The location of the Dataplex resource",
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

const optNoAsync: Fig.Option = {
  name: "--no-async",
  description:
    "Return immediately, without waiting for the operation in progress to complete",
  hidden: true,
};

const optNoCsvDisableTypeInference: Fig.Option = {
  name: "--no-csv-disable-type-inference",
  description:
    "Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings",
};

const optNoDiscoveryEnabled: Fig.Option = {
  name: "--no-discovery-enabled",
  description: "Whether discovery is enabled",
};

const optNoJsonDisableTypeInference: Fig.Option = {
  name: "--no-json-disable-type-inference",
  description:
    "Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean)",
};

const optNoUri: Fig.Option = {
  name: "--no-uri",
  description:
    "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
  hidden: true,
};

const optNoValidateOnly: Fig.Option = {
  name: "--no-validate-only",
  description: "Validate the create action, but don't actually perform it",
  hidden: true,
};

const optNoValidateOnly2: Fig.Option = {
  name: "--no-validate-only",
  description: "Validate the update action, but don't actually perform it",
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

const optSchedule: Fig.Option = {
  name: "--schedule",
  description:
    'Cron schedule (https://en.wikipedia.org/wiki/Cron) for running scans periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, `CRON_TZ=America/New_York 1 * * * *` or `TZ=America/New_York 1 * * * *`. This field is required for RECURRING scans',
  args: {
    name: "SCHEDULE",
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

const optTtlAfterScanCompletion: Fig.Option = {
  name: "--ttl-after-scan-completion",
  description:
    'The time to live for one-time scans. Default value is 24 hours, minimum value is 0 seconds, and maximum value is 365 days. The time is calculated from the data scan job completion time. If value is set as 0 seconds, the scan will be immediately deleted upon job completion, regardless of whether the job succeeded or failed. The value should be a number followed by a unit suffix "s". Example: "100s" for 100 seconds.The argument is only valid when --one-time is set',
  args: {
    name: "TTL_AFTER_SCAN_COMPLETION",
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

const optValidateOnly: Fig.Option = {
  name: "--validate-only",
  description: "Validate the create action, but don't actually perform it",
};

const optValidateOnly2: Fig.Option = {
  name: "--validate-only",
  description: "Validate the update action, but don't actually perform it",
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
  description: "Identifier of the Dataplex zone resource",
  args: {
    name: "ZONE",
    description: "String",
  },
};

const optZone2: Fig.Option = {
  name: "--zone",
  description: "The identifier of the Dataplex zone resource",
  args: {
    name: "ZONE",
    description: "String",
  },
};

const completionSpec: Fig.Spec = {
  name: "dataplex",
  description: "Manage Dataplex resources",
  subcommands: [
    {
      name: "aspect-types",
      description: "Manage Dataplex Aspect Types",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Dataplex Aspect Type",
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
            optMember,
            optProject,
            optQuiet,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ASPECT_TYPE",
            description:
              "ID of the aspect type or fully qualified identifier for the aspect type",
          },
        },
        {
          name: "create",
          description: "Create a Dataplex Aspect Type",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--data-classification",
              description:
                "Data classification of the Aspect Type. _DATA_CLASSIFICATION_ must be (only one value is supported): *METADATA_AND_DATA*",
              args: {
                name: "DATA_CLASSIFICATION",
                description: "String",
                suggestions: ["METADATA_AND_DATA"],
              },
            },
            {
              name: "--description",
              description: "Description of the Aspect Type",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Display name of the Aspect Type",
              args: {
                name: "DISPLAY_NAME",
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
            optLocation3,
            optLogHttp,
            {
              name: "--metadata-template-file-name",
              description:
                "The name of the JSON or YAML file to define Metadata Template",
              priority: 100,
              args: {
                name: "METADATA_TEMPLATE_FILE_NAME",
                description: "String",
              },
            },
            optNoAsync,
            optNoValidateOnly,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optValidateOnly,
            optVerbosity,
          ],
          args: {
            name: "ASPECT_TYPE",
            description:
              "ID of the aspect type or fully qualified identifier for the aspect type",
          },
        },
        {
          name: "delete",
          description: "Delete a Dataplex Aspect Type",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--etag",
              description: "Etag for the Aspect Type you want to delete",
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
            name: "ASPECT_TYPE",
            description:
              "ID of the aspect type or fully qualified identifier for the aspect type",
          },
        },
        {
          name: "describe",
          description: "Describe a Dataplex Aspect Type",
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
            name: "ASPECT_TYPE",
            description:
              "ID of the aspect type or fully qualified identifier for the aspect type",
          },
        },
        {
          name: "get-iam-policy",
          description: "Retrieve a Dataplex Aspect Type IAM policy",
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
          args: {
            name: "ASPECT_TYPE",
            description:
              "ID of the aspect type or fully qualified identifier for the aspect type",
          },
        },
        {
          name: "list",
          description: "List Dataplex Aspect Types",
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
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding from a Dataplex Aspect Type",
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
            optMember2,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ASPECT_TYPE",
            description:
              "ID of the aspect type or fully qualified identifier for the aspect type",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set an IAM policy binding for a Dataplex Aspect Type as defined in a JSON or YAML file",
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
          args: [
            {
              name: "ASPECT_TYPE",
              description:
                "ID of the aspect type or fully qualified identifier for the aspect type",
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
          description: "Update a Dataplex Aspect Type",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the Aspect Type",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Display name of the Aspect Type",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--etag",
              description: "Etag value for particular Aspect Type",
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
            optLabels,
            optLocation3,
            optLogHttp,
            {
              name: "--metadata-template-file-name",
              description:
                "The name of the JSON or YAML file to define Metadata Template",
              args: {
                name: "METADATA_TEMPLATE_FILE_NAME",
                description: "String",
              },
            },
            optNoAsync,
            optNoValidateOnly2,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optValidateOnly2,
            optVerbosity,
          ],
          args: {
            name: "ASPECT_TYPE",
            description:
              "ID of the aspect type or fully qualified identifier for the aspect type",
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
      name: "assets",
      description: "Manage Dataplex Asset resources",
      subcommands: [
        {
          name: "actions",
          description: "Manage Dataplex asset resource actions",
          subcommands: [
            {
              name: "list",
              description: "List Dataplex asset actions",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--asset",
                  description:
                    "ID of the asset or fully qualified identifier for the asset",
                  priority: 100,
                  args: {
                    name: "ASSET",
                    description: "String",
                  },
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
                optLake2,
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
                optZone,
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
          name: "add-iam-policy-binding",
          description: "Adds IAM policy binding to a Dataplex asset resource",
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
            optLake3,
            optLocation3,
            optLogHttp,
            optMember,
            optProject,
            optQuiet,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optZone2,
          ],
          args: {
            name: "ASSET",
            description:
              "ID of the assets or fully qualified identifier for the assets",
          },
        },
        {
          name: "create",
          description: "Create a Dataplex asset resource",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optCsvDelimiter,
            optCsvDisableTypeInference,
            optCsvEncoding,
            optCsvHeaderRows,
            {
              name: "--description",
              description: "Description of the asset",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            optDiscoveryEnabled,
            optDiscoveryExcludePatterns,
            optDiscoveryIncludePatterns,
            optDiscoverySchedule,
            {
              name: "--display-name",
              description: "Display name of the asset",
              args: {
                name: "DISPLAY_NAME",
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
            optJsonDisableTypeInference,
            optJsonEncoding,
            optLabels,
            optLake3,
            optLocation3,
            optLogHttp,
            optNoAsync,
            optNoCsvDisableTypeInference,
            optNoDiscoveryEnabled,
            optNoJsonDisableTypeInference,
            optNoValidateOnly,
            optProject,
            optQuiet,
            {
              name: "--resource-name",
              description:
                '"Relative name of the cloud resource that contains the data that is being managed within a lake. For example: `projects/{project_number}/buckets/{bucket_id}` or `projects/{project_number}/datasets/{dataset_id}`',
              args: {
                name: "RESOURCE_NAME",
                description: "String",
              },
            },
            {
              name: "--resource-read-access-mode",
              description:
                "Read access mode. _RESOURCE_READ_ACCESS_MODE_ must be one of:",
              args: {
                name: "RESOURCE_READ_ACCESS_MODE",
                suggestions: ["DIRECT", "MANAGED"],
              },
            },
            {
              name: "--resource-type",
              description: "Type. _RESOURCE_TYPE_ must be one of:",
              priority: 100,
              args: {
                name: "RESOURCE_TYPE",
                suggestions: ["BIGQUERY_DATASET", "STORAGE_BUCKET"],
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optValidateOnly,
            optVerbosity,
            optZone2,
          ],
          args: {
            name: "ASSET",
            description:
              "ID of the assets or fully qualified identifier for the assets",
          },
        },
        {
          name: "delete",
          description: "Delete a Dataplex asset resource",
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
            optLake2,
            optLocation2,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optZone,
          ],
          args: {
            name: "ASSET",
            description:
              "ID of the asset or fully qualified identifier for the asset",
          },
        },
        {
          name: "describe",
          description: "Describe a Dataplex asset resource",
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
            optLake2,
            optLocation2,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optZone,
          ],
          args: {
            name: "ASSET",
            description:
              "ID of the asset or fully qualified identifier for the asset",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Dataplex asset resource",
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
            optLake2,
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
            optZone,
          ],
          args: {
            name: "ASSET",
            description:
              "ID of the asset or fully qualified identifier for the asset",
          },
        },
        {
          name: "list",
          description: "List Dataplex asset resources",
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
            optLake2,
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
            {
              name: "--zone",
              description:
                "ID of the zone or fully qualified identifier for the zone",
              priority: 100,
              args: {
                name: "ZONE",
                description: "String",
              },
            },
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description:
            "Remove IAM policy binding from a Dataplex asset resource",
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
            optLake3,
            optLocation3,
            optLogHttp,
            optMember2,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optZone2,
          ],
          args: {
            name: "ASSET",
            description:
              "ID of the assets or fully qualified identifier for the assets",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set the IAM policy to a Dataplex asset as defined in a JSON or YAML file",
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
            optLake3,
            optLocation3,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optZone2,
          ],
          args: [
            {
              name: "ASSET",
              description:
                "ID of the assets or fully qualified identifier for the assets",
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
          description: "Update a Dataplex asset resource",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optCsvDelimiter,
            optCsvDisableTypeInference,
            optCsvEncoding,
            optCsvHeaderRows,
            {
              name: "--description",
              description: "Description of the asset",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            optDiscoveryEnabled,
            optDiscoveryExcludePatterns,
            optDiscoveryIncludePatterns,
            optDiscoverySchedule,
            optDisplayName,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optJsonDisableTypeInference,
            optJsonEncoding,
            optLabels,
            optLake3,
            optLocation3,
            optLogHttp,
            optNoAsync,
            optNoCsvDisableTypeInference,
            optNoDiscoveryEnabled,
            optNoJsonDisableTypeInference,
            optNoValidateOnly2,
            optProject,
            optQuiet,
            {
              name: "--resource-read-access-mode",
              description:
                "Read access mode. _RESOURCE_READ_ACCESS_MODE_ must be one of:",
              args: {
                name: "RESOURCE_READ_ACCESS_MODE",
                suggestions: ["DIRECT", "MANAGED"],
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optValidateOnly2,
            optVerbosity,
            optZone2,
          ],
          args: {
            name: "ASSET",
            description:
              "ID of the assets or fully qualified identifier for the assets",
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
      name: "context",
      description: "Manage Dataplex Context",
      subcommands: [
        {
          name: "lookup",
          description:
            "Looks up metadata that can be used as context by agents",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--all-schema-fields",
              description: "Includes all schema fields in the context",
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--context-format",
              description:
                "The output format of the command. _CONTEXT_FORMAT_ must be one of: *json*, *xml*, *yaml*",
              args: {
                name: "CONTEXT_FORMAT",
                description: "String",
                suggestions: ["json", "xml", "yaml"],
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
              name: "--no-all-schema-fields",
              description: "Includes all schema fields in the context",
              hidden: true,
            },
            {
              name: "--options",
              description:
                'Additional options for the command. This can be provided as a JSON string. Example: --options=\'{"key": "value"}\'',
              args: {
                name: "OPTIONS",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--resources",
              description:
                "The identifier describing the resource, for example: `projects/{project}/locations/{location}/entryGroups/{entry_group}/entries/{entry}`",
              priority: 100,
              args: {
                name: "RESOURCES",
                description: "List",
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
      name: "datascans",
      description: "Manage Dataplex Datascan",
      subcommands: [
        {
          name: "create",
          description: "Manage Dataplex Datascans creation",
          subcommands: [
            {
              name: "data-discovery",
              description: "Create a Dataplex data discovery scan job",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                {
                  name: "--bigquery-publishing-connection",
                  description:
                    "BigQuery connection to use for auto discovering cloud resource bucket to BigLake tables in format `projects/{project_id}/locations/{location_id}/connections/{connection_id}`. Connection is required for `BIGLAKE` BigQuery publishing table type",
                  args: {
                    name: "BIGQUERY_PUBLISHING_CONNECTION",
                    description: "String",
                  },
                },
                {
                  name: "--bigquery-publishing-dataset-location",
                  description:
                    "The location of the BigQuery dataset to publish BigLake external or non-BigLake external tables to. If not specified, the dataset location will be set to the location of the data source resource. Refer to https://cloud.google.com/bigquery/docs/locations#supportedLocations for supported locations",
                  args: {
                    name: "BIGQUERY_PUBLISHING_DATASET_LOCATION",
                    description: "String",
                  },
                },
                {
                  name: "--bigquery-publishing-dataset-project",
                  description:
                    'The project of the BigQuery dataset to publish BigLake external or non-BigLake external tables to. If not specified, the cloud resource bucket project will be used to create the dataset. The format is "projects/{project_id_or_number}',
                  args: {
                    name: "BIGQUERY_PUBLISHING_DATASET_PROJECT",
                    description: "String",
                  },
                },
                {
                  name: "--bigquery-publishing-table-type",
                  description:
                    "BigQuery table type to discover the cloud resource bucket. Can be either `EXTERNAL` or `BIGLAKE`. If not specified, the table type will be set to `EXTERNAL`. _BIGQUERY_PUBLISHING_TABLE_TYPE_ must be one of:",
                  args: {
                    name: "BIGQUERY_PUBLISHING_TABLE_TYPE",
                    description: "String",
                    suggestions: ["BIGLAKE", "EXTERNAL"],
                  },
                },
                optBillingProject,
                optConfiguration,
                {
                  name: "--csv-delimiter",
                  description:
                    'Delimiter used to separate values in the CSV file. If not specified, the delimiter will be set to comma (",")',
                  args: {
                    name: "CSV_DELIMITER",
                    description: "String",
                  },
                },
                {
                  name: "--csv-disable-type-inference",
                  description:
                    "Whether to disable the inference of data types for CSV data. If true, all columns are registered as strings",
                  args: {
                    name: "CSV_DISABLE_TYPE_INFERENCE",
                    description: "String",
                  },
                },
                {
                  name: "--csv-encoding",
                  description:
                    "Character encoding of the CSV file. If not specified, the encoding will be set to UTF-8",
                  args: {
                    name: "CSV_ENCODING",
                    description: "String",
                  },
                },
                {
                  name: "--csv-header-row-count",
                  description:
                    "The number of rows to interpret as header rows that should be skipped when reading data rows. The default value is 1",
                  args: {
                    name: "CSV_HEADER_ROW_COUNT",
                    description: "String",
                  },
                },
                {
                  name: "--csv-quote-character",
                  description:
                    'The character used to quote column values. Accepts " (double quotation mark) or \' (single quotation mark). If unspecified, defaults to " (double quotation mark)',
                  args: {
                    name: "CSV_QUOTE_CHARACTER",
                    description: "String",
                  },
                },
                {
                  name: "--data-source-resource",
                  description:
                    "Fully-qualified service resource name of the cloud resource bucket that contains the data for the data discovery scan, of the form: `//storage.googleapis.com/projects/{project_id_or_number}/buckets/{bucket_id}`",
                  priority: 100,
                  args: {
                    name: "DATA_SOURCE_RESOURCE",
                    description: "String",
                  },
                },
                {
                  name: "--description",
                  description: "Description of the data discovery scan",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--display-name",
                  description: "Display name of the data discovery scan",
                  args: {
                    name: "DISPLAY_NAME",
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
                  name: "--json-disable-type-inference",
                  description:
                    "Whether to disable the inference of data types for JSON data. If true, all columns are registered as strings",
                  args: {
                    name: "JSON_DISABLE_TYPE_INFERENCE",
                    description: "String",
                  },
                },
                {
                  name: "--json-encoding",
                  description:
                    "Character encoding of the JSON file. If not specified, the encoding will be set to UTF-8",
                  args: {
                    name: "JSON_ENCODING",
                    description: "String",
                  },
                },
                optLabels,
                optLocation3,
                optLogHttp,
                optNoAsync,
                {
                  name: "--no-one-time",
                  description:
                    "If set, the data discovery scan runs once, and auto deleted once the ttl_after_scan_completion expires",
                  hidden: true,
                },
                optNoValidateOnly,
                {
                  name: "--on-demand",
                  description:
                    "If set, the scan runs one-time shortly after data discovery scan creation",
                  args: {
                    name: "ON_DEMAND",
                    description: "String",
                  },
                },
                {
                  name: "--one-time",
                  description:
                    "If set, the data discovery scan runs once, and auto deleted once the ttl_after_scan_completion expires",
                },
                optProject,
                optQuiet,
                optSchedule,
                {
                  name: "--storage-exclude-patterns",
                  description:
                    "List of patterns that identify the data to exclude during discovery. These patterns are interpreted as glob patterns used to match object names in the Cloud Storage bucket. Exclude patterns will be applied before include patterns",
                  args: {
                    name: "PATTERN",
                    description: "List",
                  },
                },
                {
                  name: "--storage-include-patterns",
                  description:
                    "List of patterns that identify the data to include during discovery when only a subset of the data should be considered. These patterns are interpreted as glob patterns used to match object names in the Cloud Storage bucket",
                  args: {
                    name: "PATTERN",
                    description: "List",
                  },
                },
                optTraceToken,
                optTtlAfterScanCompletion,
                optUserOutputEnabled,
                optValidateOnly,
                optVerbosity,
              ],
              args: {
                name: "DATASCAN",
                description:
                  "ID of the datascan or fully qualified identifier for the datascan",
              },
            },
            {
              name: "data-documentation",
              description: "Create a Dataplex data documentation scan job",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--data-source-entity",
                  description:
                    "The Dataplex entity that contains the data for the data documentation scan, of the form: projects/{project_id_or_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}. Currently only BigQuery table is supported",
                  args: {
                    name: "DATA_SOURCE_ENTITY",
                    description: "String",
                  },
                },
                {
                  name: "--data-source-resource",
                  description:
                    "Fully-qualified service resource name of the cloud resource that contains the data for the data documentation scan, of the form: //bigquery.{universe_domain}/projects/{project_id_or_number}/datasets/{dataset_id}/tables/{table_id}",
                  args: {
                    name: "DATA_SOURCE_RESOURCE",
                    description: "String",
                  },
                },
                {
                  name: "--description",
                  description: "Description of the data documentation scan",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--display-name",
                  description: "Display name of the data documentation scan",
                  args: {
                    name: "DISPLAY_NAME",
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
                optLocation3,
                optLogHttp,
                optNoAsync,
                {
                  name: "--no-one-time",
                  description:
                    "If set, the data documentation scan runs once, and is auto-deleted once the ttl_after_scan_completion expires",
                  hidden: true,
                },
                optNoValidateOnly,
                {
                  name: "--on-demand",
                  description:
                    "If set, the scan runs one-time shortly after data documentation scan creation",
                  args: {
                    name: "ON_DEMAND",
                    description: "String",
                  },
                },
                {
                  name: "--one-time",
                  description:
                    "If set, the data documentation scan runs once, and is auto-deleted once the ttl_after_scan_completion expires",
                },
                optProject,
                optQuiet,
                {
                  name: "--schedule",
                  description:
                    'Cron schedule (https://en.wikipedia.org/wiki/Cron) for running scans periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, `CRON_TZ=America/New_York 1 * * * *` or `TZ=America/New_York 1 * * * *`. This field is required for RECURRING scans. The argument is only valid when --on-demand is not set',
                  args: {
                    name: "SCHEDULE",
                    description: "String",
                  },
                },
                optTraceToken,
                {
                  name: "--ttl-after-scan-completion",
                  description:
                    'The time to live for one-time scans. Default value is 24 hours, minimum value is 0 seconds, and maximum value is 365 days. The time is calculated from the data scan job completion time. If value is set as 0 seconds, the scan will be immediately deleted upon job completion, regardless of whether the job succeeded or failed. The value should be a number followed by a unit suffix "s". Example: "100s" for 100 seconds. The argument is only valid when --one-time is set',
                  args: {
                    name: "TTL_AFTER_SCAN_COMPLETION",
                    description: "String",
                  },
                },
                optUserOutputEnabled,
                optValidateOnly,
                optVerbosity,
              ],
              args: {
                name: "DATASCAN",
                description:
                  "ID of the datascan or fully qualified identifier for the datascan",
              },
            },
            {
              name: "data-profile",
              description: "Create a Dataplex data profile scan job",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--data-profile-spec-file",
                  description:
                    "Path to the JSON/YAML file containing the spec for the data profile scan. The JSON representation reference: https://cloud.google.com/dataplex/docs/reference/rest/v1/DataProfileSpec",
                  args: {
                    name: "DATA_PROFILE_SPEC_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                {
                  name: "--data-source-entity",
                  description:
                    "Dataplex entity that contains the data for the data profile scan, of the form: `projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}`",
                  args: {
                    name: "DATA_SOURCE_ENTITY",
                    description: "String",
                  },
                },
                {
                  name: "--data-source-resource",
                  description:
                    "Fully-qualified service resource name of the cloud resource that contains the data for the data profile scan, of the form: `//bigquery.googleapis.com/projects/{project_number}/datasets/{dataset_id}/tables/{table_id}`",
                  args: {
                    name: "DATA_SOURCE_RESOURCE",
                    description: "String",
                  },
                },
                {
                  name: "--description",
                  description: "Description of the data profile scan",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--display-name",
                  description: "Display name of the data profile scan",
                  args: {
                    name: "DISPLAY_NAME",
                    description: "String",
                  },
                },
                {
                  name: "--enable-catalog-publishing",
                  description:
                    "Publish data profile results to Dataplex catalog",
                },
                {
                  name: "--exclude-field-names",
                  description:
                    "Names of the fields to exclude from data profile. If specified, the respective fields will be excluded from data profile, regardless of the fields specified in the `--include-field-names` flag",
                  args: {
                    name: "EXCLUDE_FIELD_NAMES",
                    description: "String",
                  },
                },
                {
                  name: "--export-results-table",
                  description:
                    "Path to the resource table to export data profile scan results, of the form: `//bigquery.googleapis.com/projects/{project_number}/datasets/{dataset_id}/tables/{table_id}`. The table will be created if not present",
                  args: {
                    name: "EXPORT_RESULTS_TABLE",
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
                  name: "--include-field-names",
                  description:
                    "Names of the fields to include in data profile. If not specified, all fields at the time of profile scan job execution are included. The fields listed in the `--exclude-field-names` flag are excluded",
                  args: {
                    name: "INCLUDE_FIELD_NAMES",
                    description: "String",
                  },
                },
                {
                  name: "--incremental-field",
                  description:
                    "Field that contains values that monotonically increase over time (e.g. timestamp)",
                  args: {
                    name: "INCREMENTAL_FIELD",
                    description: "String",
                  },
                },
                optLabels,
                optLocation3,
                optLogHttp,
                optNoAsync,
                {
                  name: "--no-enable-catalog-publishing",
                  description:
                    "Publish data profile results to Dataplex catalog",
                  hidden: true,
                },
                {
                  name: "--no-one-time",
                  description:
                    "If set, the data profile scan runs once, and auto deleted once the ttl_after_scan_completion expires",
                  hidden: true,
                },
                {
                  name: "--no-use-user-credential",
                  description:
                    "If set, the scan runs with the caller's credential",
                  hidden: true,
                },
                optNoValidateOnly,
                {
                  name: "--on-demand",
                  description:
                    "If set, the scan runs one-time shortly after data profile scan creation",
                  args: {
                    name: "ON_DEMAND",
                    description: "String",
                  },
                },
                {
                  name: "--one-time",
                  description:
                    "If set, the data profile scan runs once, and auto deleted once the ttl_after_scan_completion expires",
                },
                optProject,
                optQuiet,
                {
                  name: "--row-filter",
                  description:
                    "A filter applied to all rows in a single data profile scan job",
                  args: {
                    name: "ROW_FILTER",
                    description: "String",
                  },
                },
                {
                  name: "--sampling-percent",
                  description:
                    "The percentage of the records to be selected from the dataset for data profile scan",
                  args: {
                    name: "SAMPLING_PERCENT",
                    description: "String",
                  },
                },
                optSchedule,
                {
                  name: "--service-account",
                  description: "Service account email to run the scan as",
                  args: {
                    name: "SERVICE_ACCOUNT",
                    description: "String",
                  },
                },
                optTraceToken,
                optTtlAfterScanCompletion,
                {
                  name: "--use-user-credential",
                  description:
                    "If set, the scan runs with the caller's credential",
                },
                optUserOutputEnabled,
                optValidateOnly,
                optVerbosity,
              ],
              args: {
                name: "DATASCAN",
                description:
                  "ID of the datascan or fully qualified identifier for the datascan",
              },
            },
            {
              name: "data-quality",
              description: "Create a Dataplex data quality scan job",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--data-quality-spec-file",
                  description:
                    "Path to the JSON/YAML file containing the spec for the data quality scan. The JSON representation reference: https://cloud.google.com/dataplex/docs/reference/rest/v1/DataQualitySpec The YAML representation reference: https://cloud.google.com/dataplex/docs/use-auto-data-quality#create-scan-using-gcloud",
                  priority: 100,
                  args: {
                    name: "DATA_QUALITY_SPEC_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                {
                  name: "--data-source-entity",
                  description:
                    "Dataplex entity that contains the data for the data quality scan, of the form: `projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}`",
                  args: {
                    name: "DATA_SOURCE_ENTITY",
                    description: "String",
                  },
                },
                {
                  name: "--data-source-resource",
                  description:
                    "Fully-qualified service resource name of the cloud resource that contains the data for the data quality scan, of the form: `//bigquery.googleapis.com/projects/{project_number}/datasets/{dataset_id}/tables/{table_id}`",
                  args: {
                    name: "DATA_SOURCE_RESOURCE",
                    description: "String",
                  },
                },
                {
                  name: "--description",
                  description: "Description of the data quality scan",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--display-name",
                  description: "Display name of the data quality scan",
                  args: {
                    name: "DISPLAY_NAME",
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
                  name: "--incremental-field",
                  description:
                    "Field that contains values that monotonically increase over time (e.g. timestamp)",
                  args: {
                    name: "INCREMENTAL_FIELD",
                    description: "String",
                  },
                },
                optLabels,
                optLocation3,
                optLogHttp,
                optNoAsync,
                {
                  name: "--no-one-time",
                  description:
                    "If set, the data quality scan runs once, and auto deleted once the ttl_after_scan_completion expires",
                  hidden: true,
                },
                {
                  name: "--no-use-user-credential",
                  description:
                    "If set, the scan runs with the caller's credential",
                  hidden: true,
                },
                optNoValidateOnly,
                {
                  name: "--on-demand",
                  description:
                    "If set, the scan runs one-time shortly after data quality scan creation",
                  args: {
                    name: "ON_DEMAND",
                    description: "String",
                  },
                },
                {
                  name: "--one-time",
                  description:
                    "If set, the data quality scan runs once, and auto deleted once the ttl_after_scan_completion expires",
                },
                optProject,
                optQuiet,
                optSchedule,
                {
                  name: "--service-account",
                  description: "Service account email to run the scan as",
                  args: {
                    name: "SERVICE_ACCOUNT",
                    description: "String",
                  },
                },
                optTraceToken,
                optTtlAfterScanCompletion,
                {
                  name: "--use-user-credential",
                  description:
                    "If set, the scan runs with the caller's credential",
                },
                optUserOutputEnabled,
                optValidateOnly,
                optVerbosity,
              ],
              args: {
                name: "DATASCAN",
                description:
                  "ID of the datascan or fully qualified identifier for the datascan",
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
          description: "Delete a Dataplex Datascan resource",
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
            name: "DATASCAN",
            description:
              "ID of the datascan or fully qualified identifier for the datascan",
          },
        },
        {
          name: "describe",
          description: "Describe a Dataplex datascan resource",
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
            {
              name: "--view",
              description:
                "Displays spec data based on the argument value. The default view is 'basic'. _VIEW_ must be one of:",
              args: {
                name: "VIEW",
                suggestions: ["basic", "full"],
              },
            },
          ],
          args: {
            name: "DATASCAN",
            description:
              "ID of the datascan or fully qualified identifier for the datascan",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Dataplex datascan resource",
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
          args: {
            name: "DATASCAN",
            description:
              "ID of the datascan or fully qualified identifier for the datascan",
          },
        },
        {
          name: "jobs",
          description: "Manage Dataplex Datascan Jobs service",
          subcommands: [
            {
              name: "describe",
              description: "Describe a Dataplex datascan job",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--datascan",
                  description: "Datascan ID of the Dataplex datascan resource",
                  args: {
                    name: "DATASCAN",
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
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--view",
                  description:
                    "Displays spec and result data based on the argument value. The default view is 'basic'. _VIEW_ must be one of:",
                  args: {
                    name: "VIEW",
                    suggestions: ["basic", "full"],
                  },
                },
              ],
              args: {
                name: "JOB",
                description:
                  "ID of the job or fully qualified identifier for the job",
              },
            },
            {
              name: "list",
              description: "List job runs of a Dataplex datascan resource",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--datascan",
                  description:
                    "ID of the datascan or fully qualified identifier for the datascan",
                  priority: 100,
                  args: {
                    name: "DATASCAN",
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
          name: "list",
          description: "List Dataplex Datascan resources under a project",
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
          name: "run",
          description: "Run a Dataplex DataScan resource",
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
            name: "DATASCAN",
            description:
              "ID of the datascan or fully qualified identifier for the datascan",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set the IAM policy to a Dataplex datascan as defined in a JSON or YAML file",
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
          args: [
            {
              name: "DATASCAN",
              description:
                "ID of the datascan or fully qualified identifier for the datascan",
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
          description: "Manage Dataplex Datascans updation",
          subcommands: [
            {
              name: "data-discovery",
              description: "Update a Dataplex data discovery scan job",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                {
                  name: "--bigquery-publishing-connection",
                  description:
                    "BigQuery connection to use for auto discovering cloud resource bucket to BigLake tables. Connection is required for `BIGLAKE`BigQuery publishing table type",
                  args: {
                    name: "BIGQUERY_PUBLISHING_CONNECTION",
                    description: "String",
                  },
                },
                {
                  name: "--bigquery-publishing-dataset-location",
                  description:
                    "The location of the BigQuery dataset to publish BigLake external or non-BigLake external tables to. If not specified, the dataset location will be set to the location of the data source resource. Refer to https://cloud.google.com/bigquery/docs/locations#supportedLocations for supported locations",
                  args: {
                    name: "BIGQUERY_PUBLISHING_DATASET_LOCATION",
                    description: "String",
                  },
                },
                {
                  name: "--bigquery-publishing-dataset-project",
                  description:
                    'The project of the BigQuery dataset to publish BigLake external or non-BigLake external tables to. If not specified, the cloud resource bucket project will be used to create the dataset. The format is "projects/{project_id_or_number}',
                  args: {
                    name: "BIGQUERY_PUBLISHING_DATASET_PROJECT",
                    description: "String",
                  },
                },
                {
                  name: "--bigquery-publishing-table-type",
                  description:
                    "BigQuery table type to discover the cloud resource bucket. Can be either `EXTERNAL` or `BIGLAKE`. If not specified, the table type will be set to `EXTERNAL`",
                  args: {
                    name: "BIGQUERY_PUBLISHING_TABLE_TYPE",
                    description: "String",
                  },
                },
                optBillingProject,
                optConfiguration,
                {
                  name: "--csv-delimiter",
                  description:
                    'Delimiter used to separate values in the CSV file. If not specified, the delimiter will be set to comma (",")',
                  args: {
                    name: "CSV_DELIMITER",
                    description: "String",
                  },
                },
                {
                  name: "--csv-disable-type-inference",
                  description:
                    "Whether to disable the inference of data types for CSV data. If true, all columns are registered as strings",
                  args: {
                    name: "CSV_DISABLE_TYPE_INFERENCE",
                    description: "String",
                  },
                },
                {
                  name: "--csv-encoding",
                  description:
                    "Character encoding of the CSV file. If not specified, the encoding will be set to UTF-8",
                  args: {
                    name: "CSV_ENCODING",
                    description: "String",
                  },
                },
                {
                  name: "--csv-header-row-count",
                  description:
                    "The number of rows to interpret as header rows that should be skipped when reading data rows. The default value is 1",
                  args: {
                    name: "CSV_HEADER_ROW_COUNT",
                    description: "String",
                  },
                },
                {
                  name: "--csv-quote-character",
                  description:
                    'The character used to quote column values. Accepts " (double quotation mark) or \' (single quotation mark). If unspecified, defaults to " (double quotation mark)',
                  args: {
                    name: "CSV_QUOTE_CHARACTER",
                    description: "String",
                  },
                },
                {
                  name: "--description",
                  description: "Description of the data discovery scan",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--display-name",
                  description: "Display name of the data discovery scan",
                  args: {
                    name: "DISPLAY_NAME",
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
                  name: "--json-disable-type-inference",
                  description:
                    "Whether to disable the inference of data types for JSON data. If true, all columns are registered as strings",
                  args: {
                    name: "JSON_DISABLE_TYPE_INFERENCE",
                    description: "String",
                  },
                },
                {
                  name: "--json-encoding",
                  description:
                    "Character encoding of the JSON file. If not specified, the encoding will be set to UTF-8",
                  args: {
                    name: "JSON_ENCODING",
                    description: "String",
                  },
                },
                optLabels,
                optLocation3,
                optLogHttp,
                optNoAsync,
                optNoValidateOnly2,
                {
                  name: "--on-demand",
                  description:
                    "If set, the scan runs one-time shortly after data discovery scan updation",
                  args: {
                    name: "ON_DEMAND",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                optSchedule,
                {
                  name: "--storage-exclude-patterns",
                  description:
                    "List of patterns that identify the data to exclude during discovery. These patterns are interpreted as glob patterns used to match object names in the Cloud Storage bucket. Exclude patterns will be applied before include patterns",
                  args: {
                    name: "PATTERN",
                    description: "List",
                  },
                },
                {
                  name: "--storage-include-patterns",
                  description:
                    "List of patterns that identify the data to include during discovery when only a subset of the data should be considered. These patterns are interpreted as glob patterns used to match object names in the Cloud Storage bucket",
                  args: {
                    name: "PATTERN",
                    description: "List",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optValidateOnly2,
                optVerbosity,
              ],
              args: {
                name: "DATASCAN",
                description:
                  "ID of the datascan or fully qualified identifier for the datascan",
              },
            },
            {
              name: "data-documentation",
              description: "Update a Dataplex data documentation scan job",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description: "Description of the data documentation scan",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--display-name",
                  description: "Display name of the data documentation scan",
                  args: {
                    name: "DISPLAY_NAME",
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
                optLocation3,
                optLogHttp,
                optNoAsync,
                {
                  name: "--no-one-time",
                  description:
                    "If set, the data documentation scan runs once, and auto deleted once the ttl_after_scan_completion expires",
                  hidden: true,
                },
                optNoValidateOnly2,
                {
                  name: "--on-demand",
                  description:
                    "If set, the scan runs one-time shortly after data documentation scan creation",
                  args: {
                    name: "ON_DEMAND",
                    description: "String",
                  },
                },
                {
                  name: "--one-time",
                  description:
                    "If set, the data documentation scan runs once, and auto deleted once the ttl_after_scan_completion expires",
                },
                optProject,
                optQuiet,
                optSchedule,
                optTraceToken,
                {
                  name: "--ttl-after-scan-completion",
                  description:
                    'The time to live for one-time scans. Default value is 24 hours, minimum value is 0 seconds, and maximum value is 365 days. The time is calculated from the data scan job completion time. If value is set as 0 seconds, the scan will be immediately deleted upon job completion, regardless of whether the job succeeded or failed. The value should be a number followed by a unit suffix "s". Example: "100s" for 100 seconds. The argument is only valid when --one-time is set',
                  args: {
                    name: "TTL_AFTER_SCAN_COMPLETION",
                    description: "String",
                  },
                },
                optUserOutputEnabled,
                optValidateOnly2,
                optVerbosity,
              ],
              args: {
                name: "DATASCAN",
                description:
                  "ID of the datascan or fully qualified identifier for the datascan",
              },
            },
            {
              name: "data-profile",
              description: "Update a Dataplex data profile scan job",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--data-profile-spec-file",
                  description:
                    "Path to the JSON/YAML file containing the spec for the data profile scan. The JSON representation reference: https://cloud.google.com/dataplex/docs/reference/rest/v1/DataProfileSpec",
                  args: {
                    name: "DATA_PROFILE_SPEC_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                {
                  name: "--description",
                  description: "Description of the data profile scan",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--display-name",
                  description: "Display name of the data profile scan",
                  args: {
                    name: "DISPLAY_NAME",
                    description: "String",
                  },
                },
                {
                  name: "--enable-catalog-publishing",
                  description:
                    "Publish data profile results to Dataplex catalog",
                },
                {
                  name: "--exclude-field-names",
                  description:
                    "Names of the fields to exclude from data profile. If specified, the respective fields will be excluded from data profile, regardless of the fields specified in the `--include-field-names` flag",
                  args: {
                    name: "EXCLUDE_FIELD_NAMES",
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
                  name: "--include-field-names",
                  description:
                    "Names of the fields to include in data profile. If not specified, all fields at the time of profile scan job execution are included. The fields listed in the `--exclude-field-names` flag are excluded",
                  args: {
                    name: "INCLUDE_FIELD_NAMES",
                    description: "String",
                  },
                },
                optLabels,
                optLocation3,
                optLogHttp,
                optNoAsync,
                {
                  name: "--no-enable-catalog-publishing",
                  description:
                    "Publish data profile results to Dataplex catalog",
                  hidden: true,
                },
                optNoValidateOnly2,
                {
                  name: "--on-demand",
                  description:
                    "If set, the scan runs one-time shortly after data profile scan updation",
                  args: {
                    name: "ON_DEMAND",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                {
                  name: "--row-filter",
                  description:
                    "A filter applied to all rows in a single data profile scan job",
                  args: {
                    name: "ROW_FILTER",
                    description: "String",
                  },
                },
                {
                  name: "--sampling-percent",
                  description:
                    "The percentage of the records to be selected from the dataset for data profile scan",
                  args: {
                    name: "SAMPLING_PERCENT",
                    description: "String",
                  },
                },
                optSchedule,
                optTraceToken,
                optUserOutputEnabled,
                optValidateOnly2,
                optVerbosity,
              ],
              args: {
                name: "DATASCAN",
                description:
                  "ID of the datascan or fully qualified identifier for the datascan",
              },
            },
            {
              name: "data-quality",
              description: "Update a Dataplex data quality scan job",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--data-quality-spec-file",
                  description:
                    "Path to the JSON/YAML file containing the spec for the data quality scan. The JSON representation reference: https://cloud.google.com/dataplex/docs/reference/rest/v1/DataQualitySpec The YAML representation reference: https://cloud.google.com/dataplex/docs/use-auto-data-quality#create-scan-using-gcloud",
                  args: {
                    name: "DATA_QUALITY_SPEC_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                {
                  name: "--description",
                  description: "Description of the data quality scan",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--display-name",
                  description: "Display name of the data quality scan",
                  args: {
                    name: "DISPLAY_NAME",
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
                optLocation3,
                optLogHttp,
                optNoAsync,
                optNoValidateOnly2,
                {
                  name: "--on-demand",
                  description:
                    "If set, the scan runs one-time shortly after data quality scan updation",
                  args: {
                    name: "ON_DEMAND",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                optSchedule,
                optTraceToken,
                optUserOutputEnabled,
                optValidateOnly2,
                optVerbosity,
              ],
              args: {
                name: "DATASCAN",
                description:
                  "ID of the datascan or fully qualified identifier for the datascan",
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
      name: "encryption-config",
      description: "Manage Dataplex encryption configs",
      subcommands: [
        {
          name: "create",
          description: "Create a Dataplex encryption config resource",
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
              name: "--key",
              description: "The KMS key to use for encryption",
              args: {
                name: "KEY",
                description: "String",
              },
            },
            optLocation3,
            optLogHttp,
            {
              name: "--organization",
              description: "The name of encryption config to use",
              args: {
                name: "ORGANIZATION",
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
            name: "ENCRYPTION_CONFIG",
            description:
              "ID of the encryption config or fully qualified identifier for the encryption config",
          },
        },
        {
          name: "describe",
          description: "Describe an EncryptionConfig",
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
              name: "--organization",
              description: "Name of the Cloud organization to use",
              args: {
                name: "ORGANIZATION",
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
            name: "ENCRYPTION_CONFIG",
            description:
              "ID of the encryption config or fully qualified identifier for the encryption config",
          },
        },
        {
          name: "update",
          description: "Update an Encryption Config",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--enable-metastore-encryption",
              description:
                "Helps user to explicitly enable cmek encryption for dataplex metadata storage",
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
              name: "--no-enable-metastore-encryption",
              description:
                "Helps user to explicitly enable cmek encryption for dataplex metadata storage",
              hidden: true,
            },
            {
              name: "--organization",
              description: "The name of encryption config to use",
              args: {
                name: "ORGANIZATION",
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
            name: "ENCRYPTION_CONFIG",
            description:
              "ID of the encryption config or fully qualified identifier for the encryption config",
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
      name: "entries",
      description: "Manage Dataplex Catalog Entries resources",
      subcommands: [
        {
          name: "create",
          description: "Create a Dataplex Entry resource",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--aspects",
              description:
                "Path to a YAML or JSON file containing Aspects to add or update",
              args: {
                name: "YAML_OR_JSON_FILE",
                template: "filepaths",
              },
            },
            optBillingProject,
            optConfiguration,
            optEntryGroup,
            {
              name: "--entry-source-ancestors",
              description:
                "Information about individual items in the hierarchy of an Entry",
              args: {
                name: "ANCESTORS",
                description: "List",
              },
            },
            optEntrySourceCreateTime,
            optEntrySourceDescription,
            optEntrySourceDisplayName,
            optEntrySourceLabels,
            optEntrySourcePlatform,
            optEntrySourceResource,
            optEntrySourceSystem,
            {
              name: "--entry-source-update-time",
              description:
                "The update date and time of the resource in the source system",
              args: {
                name: "DATE_TIME",
              },
            },
            {
              name: "--entry-type",
              description:
                "ID of the entry type or fully qualified identifier for the entry type",
              priority: 100,
              args: {
                name: "ENTRY_TYPE",
                description: "String",
              },
            },
            {
              name: "--entry-type-location",
              description: "The location of the EntryType resource",
              args: {
                name: "ENTRY_TYPE_LOCATION",
                description: "String",
              },
            },
            {
              name: "--entry-type-project",
              description: "The project of the EntryType resource",
              args: {
                name: "ENTRY_TYPE_PROJECT",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--fully-qualified-name",
              description:
                "A name for the entry that can reference it in an external system. The maximum size of the field is 4000 characters",
              args: {
                name: "FULLY_QUALIFIED_NAME",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation2,
            optLogHttp,
            {
              name: "--parent-entry",
              description:
                "ID of the entry or fully qualified identifier for the entry",
              priority: 100,
              args: {
                name: "PARENT_ENTRY",
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
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry",
          },
        },
        {
          name: "delete",
          description: "Delete a Dataplex entry",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optEntryGroup,
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
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry",
          },
        },
        {
          name: "describe",
          description: "Describe a Dataplex entry",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--aspect-types",
              description:
                "Limits the aspects returned to the provided aspect types. Only works if the `--view=custom` is selected",
              args: {
                name: "ASPECT_TYPES",
                description: "List",
              },
            },
            optBillingProject,
            optConfiguration,
            optEntryGroup,
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
              name: "--paths",
              description:
                "Limits the aspects returned to those associated with the provided paths within the Entry. Only works if the `--view=custom` is selected",
              args: {
                name: "PATHS",
                description: "List",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--view",
              description:
                "Controls which parts of an entry are to be returned. _VIEW_ must be one of:",
              args: {
                name: "VIEW",
                suggestions: ["all", "basic", "custom", "full"],
              },
            },
          ],
          args: {
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry",
          },
        },
        {
          name: "list",
          description: "List Dataplex entries",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--entry-group",
              description:
                "ID of the entry group or fully qualified identifier for the entry group",
              priority: 100,
              args: {
                name: "ENTRY_GROUP",
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
        {
          name: "lookup",
          description: "Lookup a Dataplex entry",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--aspect-types",
              description:
                "Limits the aspects returned to the provided aspect types. Only works if the `--view=custom` is selected",
              args: {
                name: "ASPECT_TYPES",
                description: "List",
              },
            },
            optBillingProject,
            optConfiguration,
            optEntryGroup,
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
              name: "--paths",
              description:
                "Limits the aspects returned to those associated with the provided paths within the Entry. Only works if the `--view=custom` is selected",
              args: {
                name: "PATHS",
                description: "List",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--view",
              description:
                "Controls which parts of an entry are to be returned. _VIEW_ must be one of:",
              args: {
                name: "VIEW",
                suggestions: ["all", "basic", "custom", "full"],
              },
            },
          ],
          args: {
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry",
          },
        },
        {
          name: "modify",
          description: "Modify a Dataplex Entry",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--clear-entry-source-create-time",
              description:
                "Clear the value for the create_time field in the Entry Source",
            },
            {
              name: "--clear-entry-source-description",
              description:
                "Clear the value for the description field in the Entry Source",
            },
            {
              name: "--clear-entry-source-display-name",
              description:
                "Clear the value for the display_name field in the Entry Source",
            },
            {
              name: "--clear-entry-source-labels",
              description: "Clear the labels for the Entry Source",
            },
            {
              name: "--clear-entry-source-platform",
              description:
                "Clear the value for the platform field in the Entry Source",
            },
            {
              name: "--clear-entry-source-resource",
              description:
                "Clear the value for the resource field in the Entry Source",
            },
            {
              name: "--clear-entry-source-system",
              description:
                "Clear the value for the system field in the Entry Source",
            },
            {
              name: "--clear-fully-qualified-name",
              description: "Clear the FQN for the Entry",
            },
            optConfiguration,
            optEntryGroup,
            optEntrySourceCreateTime,
            optEntrySourceDescription,
            optEntrySourceDisplayName,
            optEntrySourceLabels,
            optEntrySourcePlatform,
            optEntrySourceResource,
            optEntrySourceSystem,
            {
              name: "--entry-source-update-time",
              description:
                "The update date and time of the resource in the source system",
              priority: 100,
              args: {
                name: "DATE_TIME",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--fully-qualified-name",
              description:
                "FQN, a name for the entry that can reference it in an external system",
              args: {
                name: "FULLY_QUALIFIED_NAME",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation2,
            optLogHttp,
            {
              name: "--no-clear-entry-source-create-time",
              description:
                "Clear the value for the create_time field in the Entry Source",
              hidden: true,
            },
            {
              name: "--no-clear-entry-source-description",
              description:
                "Clear the value for the description field in the Entry Source",
              hidden: true,
            },
            {
              name: "--no-clear-entry-source-display-name",
              description:
                "Clear the value for the display_name field in the Entry Source",
              hidden: true,
            },
            {
              name: "--no-clear-entry-source-labels",
              description:
                "Remove all labels. If `--update-entry-source-labels` is also specified then `--clear-entry-source-labels` is applied first",
              hidden: true,
            },
            {
              name: "--no-clear-entry-source-platform",
              description:
                "Clear the value for the platform field in the Entry Source",
              hidden: true,
            },
            {
              name: "--no-clear-entry-source-resource",
              description:
                "Clear the value for the resource field in the Entry Source",
              hidden: true,
            },
            {
              name: "--no-clear-entry-source-system",
              description:
                "Clear the value for the system field in the Entry Source",
              hidden: true,
            },
            {
              name: "--no-clear-fully-qualified-name",
              description: "Clear the FQN for the Entry",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--remove-aspects",
              description:
                "List of Aspect keys, identifying Aspects to remove from the entry",
              args: {
                name: "ASPECT_TYPE@PATH",
                description: "List",
              },
            },
            optTraceToken,
            {
              name: "--update-aspects",
              description:
                "Path to a YAML or JSON file containing Aspects to add or update",
              args: {
                name: "YAML_OR_JSON_FILE",
                template: "filepaths",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry",
          },
        },
        {
          name: "remove-aspects",
          description: "Remove aspects from a Dataplex Entry",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optEntryGroup,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--keys",
              description:
                "List of Aspect keys, identifying Aspects to remove from the entry",
              priority: 100,
              args: {
                name: "ASPECT_TYPE@PATH",
                description: "List",
              },
            },
            optLocation2,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry",
          },
        },
        {
          name: "search",
          description: "Searches for Dataplex entries",
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
              name: "--limit",
              description: "Maximum number of resources",
              args: {
                name: "LIMIT",
                description: "Int",
              },
            },
            optLogHttp,
            {
              name: "--no-semantic-search",
              description:
                "Specifies whether the search should understand the meaning and intent behind the query, rather than just matching keywords",
              hidden: true,
            },
            {
              name: "--order-by",
              description:
                "Specifies the ordering of results, currently supported case-sensitive choices are:",
              args: {
                name: "ORDER_BY",
                description: "String",
              },
            },
            {
              name: "--page-size",
              description:
                "Maximum number of resources per page. No more than 500",
              args: {
                name: "PAGE_SIZE",
                description: "Int",
              },
            },
            optQuiet,
            {
              name: "--scope",
              description:
                "The scope under which the search should be operating. Should either be organizations/<org_id> or projects/<project_ref>. If left unspecified, it will default to the organization where the project is located",
              args: {
                name: "SCOPE",
                description: "String",
              },
            },
            {
              name: "--semantic-search",
              description:
                "Specifies whether the search should understand the meaning and intent behind the query, rather than just matching keywords",
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "QUERY",
            description:
              "The query against which entries in scope should be matched",
          },
        },
        {
          name: "update",
          description: "Update a Dataplex Entry",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--clear-entry-source-create-time",
              description:
                "Clear the value for the create_time field in the Entry Source",
            },
            {
              name: "--clear-entry-source-description",
              description:
                "Clear the value for the description field in the Entry Source",
            },
            {
              name: "--clear-entry-source-display-name",
              description:
                "Clear the value for the display_name field in the Entry Source",
            },
            {
              name: "--clear-entry-source-labels",
              description: "Clear the labels for the Entry Source",
            },
            {
              name: "--clear-entry-source-platform",
              description:
                "Clear the value for the platform field in the Entry Source",
            },
            {
              name: "--clear-entry-source-resource",
              description:
                "Clear the value for the resource field in the Entry Source",
            },
            {
              name: "--clear-entry-source-system",
              description:
                "Clear the value for the system field in the Entry Source",
            },
            {
              name: "--clear-fully-qualified-name",
              description: "Clear the FQN for the Entry",
            },
            optConfiguration,
            optEntryGroup,
            optEntrySourceCreateTime,
            optEntrySourceDescription,
            optEntrySourceDisplayName,
            optEntrySourceLabels,
            optEntrySourcePlatform,
            optEntrySourceResource,
            optEntrySourceSystem,
            {
              name: "--entry-source-update-time",
              description:
                "The update date and time of the resource in the source system",
              priority: 100,
              args: {
                name: "DATE_TIME",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--fully-qualified-name",
              description:
                "FQN, a name for the entry that can reference it in an external system",
              args: {
                name: "FULLY_QUALIFIED_NAME",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation2,
            optLogHttp,
            {
              name: "--no-clear-entry-source-create-time",
              description:
                "Clear the value for the create_time field in the Entry Source",
              hidden: true,
            },
            {
              name: "--no-clear-entry-source-description",
              description:
                "Clear the value for the description field in the Entry Source",
              hidden: true,
            },
            {
              name: "--no-clear-entry-source-display-name",
              description:
                "Clear the value for the display_name field in the Entry Source",
              hidden: true,
            },
            {
              name: "--no-clear-entry-source-labels",
              description:
                "Remove all labels. If `--update-entry-source-labels` is also specified then `--clear-entry-source-labels` is applied first",
              hidden: true,
            },
            {
              name: "--no-clear-entry-source-platform",
              description:
                "Clear the value for the platform field in the Entry Source",
              hidden: true,
            },
            {
              name: "--no-clear-entry-source-resource",
              description:
                "Clear the value for the resource field in the Entry Source",
              hidden: true,
            },
            {
              name: "--no-clear-entry-source-system",
              description:
                "Clear the value for the system field in the Entry Source",
              hidden: true,
            },
            {
              name: "--no-clear-fully-qualified-name",
              description: "Clear the FQN for the Entry",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--remove-aspects",
              description:
                "List of Aspect keys, identifying Aspects to remove from the entry",
              args: {
                name: "ASPECT_TYPE@PATH",
                description: "List",
              },
            },
            optTraceToken,
            {
              name: "--update-aspects",
              description:
                "Path to a YAML or JSON file containing Aspects to add or update",
              args: {
                name: "YAML_OR_JSON_FILE",
                template: "filepaths",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry",
          },
        },
        {
          name: "update-aspects",
          description: "Add or update aspects for a Dataplex Entry",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--aspects",
              description:
                "Path to a YAML or JSON file containing Aspects to add or update",
              priority: 100,
              args: {
                name: "YAML_OR_JSON_FILE",
                template: "filepaths",
              },
            },
            optBillingProject,
            optConfiguration,
            optEntryGroup,
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
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry",
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
      name: "entry-groups",
      description: "Manage Dataplex Entry Groups",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Dataplex Entry Group",
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
            optMember,
            optProject,
            optQuiet,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group",
          },
        },
        {
          name: "create",
          description: "Create a Dataplex Entry Group",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the Entry Group",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Display name of the Entry Group",
              args: {
                name: "DISPLAY_NAME",
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
            optLocation3,
            optLogHttp,
            optNoAsync,
            optNoValidateOnly,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optValidateOnly,
            optVerbosity,
          ],
          args: {
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group",
          },
        },
        {
          name: "delete",
          description: "Delete a Dataplex Entry Group",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--etag",
              description: "Etag for the Entry Group you want to delete",
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
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group",
          },
        },
        {
          name: "describe",
          description: "Describe a Dataplex Entry Group",
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
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group",
          },
        },
        {
          name: "get-iam-policy",
          description: "Retrieve a Dataplex Entry Group IAM policy",
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
          args: {
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group",
          },
        },
        {
          name: "list",
          description: "List Dataplex Entry Groups",
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
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding from a Dataplex Entry Group",
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
            optMember2,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set an IAM policy binding for a Dataplex Entry Group as defined in a JSON or YAML file",
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
          args: [
            {
              name: "ENTRY_GROUP",
              description:
                "ID of the entry group or fully qualified identifier for the entry group",
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
          description: "Update a Dataplex Entry Group",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the Entry Group",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Display name of the Entry Group",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--etag",
              description: "Etag value for particular Entry Group",
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
            optLabels,
            optLocation3,
            optLogHttp,
            optNoAsync,
            optNoValidateOnly2,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optValidateOnly2,
            optVerbosity,
          ],
          args: {
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group",
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
      name: "entry-types",
      description: "Manage Dataplex Entry Types",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Dataplex Entry Type",
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
            optMember,
            optProject,
            optQuiet,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENTRY_TYPE",
            description:
              "ID of the entry type or fully qualified identifier for the entry type",
          },
        },
        {
          name: "create",
          description: "Create a Dataplex Entry Type",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the Entry Type",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Display name of the Entry Type",
              args: {
                name: "DISPLAY_NAME",
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
            optLocation3,
            optLogHttp,
            optNoAsync,
            optNoValidateOnly,
            {
              name: "--platform",
              description: "The platform that Entries of this type belongs to",
              args: {
                name: "PLATFORM",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--required-aspects",
              description: "Required aspect type for the entry type",
              args: {
                name: "REQUIRED_ASPECTS",
                description: "Dict",
              },
            },
            {
              name: "--system",
              description: "The system that Entries of this type belongs to",
              args: {
                name: "SYSTEM",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--type-aliases",
              description: "Indicates the class this Entry Type belongs to",
              args: {
                name: "TYPE_ALIASES",
                description: "List",
              },
            },
            optUserOutputEnabled,
            optValidateOnly,
            optVerbosity,
          ],
          args: {
            name: "ENTRY_TYPE",
            description:
              "ID of the entry type or fully qualified identifier for the entry type",
          },
        },
        {
          name: "delete",
          description: "Delete a Dataplex Entry Type",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--etag",
              description: "Etag for the Entry Type you want to delete",
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
            name: "ENTRY_TYPE",
            description:
              "ID of the entry type or fully qualified identifier for the entry type",
          },
        },
        {
          name: "describe",
          description: "Describe a Dataplex Entry Type",
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
            name: "ENTRY_TYPE",
            description:
              "ID of the entry type or fully qualified identifier for the entry type",
          },
        },
        {
          name: "get-iam-policy",
          description: "Retrieve a Dataplex Entry Type IAM policy",
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
          args: {
            name: "ENTRY_TYPE",
            description:
              "ID of the entry type or fully qualified identifier for the entry type",
          },
        },
        {
          name: "list",
          description: "List Dataplex Entry Types",
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
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding from a Dataplex Entry Type",
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
            optMember2,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENTRY_TYPE",
            description:
              "ID of the entry type or fully qualified identifier for the entry type",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set an IAM policy binding for a Dataplex Entry Type as defined in a JSON or YAML file",
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
          args: [
            {
              name: "ENTRY_TYPE",
              description:
                "ID of the entry type or fully qualified identifier for the entry type",
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
          description: "Update a Dataplex Entry Type",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the Entry Type",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Display name of the Entry Type",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--etag",
              description: "Etag value for particular Entry Type",
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
            optLabels,
            optLocation3,
            optLogHttp,
            optNoAsync,
            optNoValidateOnly2,
            {
              name: "--platform",
              description: "The platform that Entries of this type belongs to",
              args: {
                name: "PLATFORM",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--required-aspects",
              description: "Required aspect type for the entry type",
              args: {
                name: "REQUIRED_ASPECTS",
                description: "Dict",
              },
            },
            {
              name: "--system",
              description: "The system that Entries of this type belongs to",
              args: {
                name: "SYSTEM",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--type-aliases",
              description: "Indicates the class this Entry Type belongs to",
              args: {
                name: "TYPE_ALIASES",
                description: "List",
              },
            },
            optUserOutputEnabled,
            optValidateOnly2,
            optVerbosity,
          ],
          args: {
            name: "ENTRY_TYPE",
            description:
              "ID of the entry type or fully qualified identifier for the entry type",
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
      name: "glossaries",
      description: "Manage Dataplex glossaries",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Dataplex Glossary",
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
            optMember,
            optProject,
            optQuiet,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "GLOSSARY",
            description:
              "ID of the glossary or fully qualified identifier for the glossary",
          },
        },
        {
          name: "categories",
          description: "Manage Dataplex glossary categories",
          subcommands: [
            {
              name: "create",
              description: "Creates a glossary category",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description: "Description of the glossary category",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--display-name",
                  description: "Display name of the glossary category",
                  args: {
                    name: "DISPLAY_NAME",
                    description: "String",
                  },
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--glossary",
                  description: "The name of glossary category to use",
                  args: {
                    name: "GLOSSARY",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLabels,
                optLocation3,
                optLogHttp,
                {
                  name: "--parent",
                  description:
                    "Immediate parent of the created glossary category",
                  priority: 100,
                  args: {
                    name: "PARENT",
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
                name: "GLOSSARY_CATEGORY",
                description:
                  "ID of the glossary category or fully qualified identifier for the glossary category",
              },
            },
            {
              name: "delete",
              description: "Deletes a glossary category",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGlossary,
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
                name: "GLOSSARY_CATEGORY",
                description:
                  "ID of the glossary category or fully qualified identifier for the glossary category",
              },
            },
            {
              name: "describe",
              description: "Describes a glossary category",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGlossary,
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
                name: "GLOSSARY_CATEGORY",
                description:
                  "ID of the glossary category or fully qualified identifier for the glossary category",
              },
            },
            {
              name: "list",
              description: "List glossary categories",
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
                  name: "--glossary",
                  description:
                    "ID of the glossary or fully qualified identifier for the glossary",
                  priority: 100,
                  args: {
                    name: "GLOSSARY",
                    description: "String",
                  },
                },
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
            {
              name: "update",
              description: "Updates a glossary category",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description: "Description of the glossary category",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--display-name",
                  description: "Display Name of the glossary category",
                  args: {
                    name: "DISPLAY_NAME",
                    description: "String",
                  },
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--glossary",
                  description: "The name of glossary category to use",
                  args: {
                    name: "GLOSSARY",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLabels,
                optLocation3,
                optLogHttp,
                {
                  name: "--parent",
                  description:
                    "Immediate parent of the created glossary category",
                  args: {
                    name: "PARENT",
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
                name: "GLOSSARY_CATEGORY",
                description:
                  "ID of the glossary category or fully qualified identifier for the glossary category",
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
          name: "create",
          description: "Create a Dataplex Glossary resource",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the Glossary",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Display Name of the Glossary",
              args: {
                name: "DISPLAY_NAME",
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
            optLocation3,
            optLogHttp,
            optNoAsync,
            optNoValidateOnly,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optValidateOnly,
            optVerbosity,
          ],
          args: {
            name: "GLOSSARY",
            description:
              "ID of the glossary or fully qualified identifier for the glossary",
          },
        },
        {
          name: "delete",
          description: "Delete a Dataplex Glossary",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--etag",
              description: "Etag value for particular Glossary",
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
            name: "GLOSSARY",
            description:
              "ID of the glossary or fully qualified identifier for the glossary",
          },
        },
        {
          name: "describe",
          description: "Describe a Glossary",
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
            name: "GLOSSARY",
            description:
              "ID of the glossary or fully qualified identifier for the glossary",
          },
        },
        {
          name: "get-iam-policy",
          description: "Retrieve a Dataplex Glossary IAM policy",
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
          args: {
            name: "GLOSSARY",
            description:
              "ID of the glossary or fully qualified identifier for the glossary",
          },
        },
        {
          name: "list",
          description: "List Glossaries",
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
          name: "remove-iam-policy-binding",
          description: "Removes IAM policy binding from a Dataplex Glossary",
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
            optMember2,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "GLOSSARY",
            description:
              "ID of the glossary or fully qualified identifier for the glossary",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set an IAM policy binding for a Dataplex Glossary as defined in a JSON or YAML file",
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
          args: [
            {
              name: "GLOSSARY",
              description:
                "ID of the glossary or fully qualified identifier for the glossary",
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
          name: "terms",
          description: "Manage Dataplex glossary terms",
          subcommands: [
            {
              name: "create",
              description: "Creates a glossary term",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description: "Description of the glossary term",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--display-name",
                  description: "Display name of the glossary term",
                  args: {
                    name: "DISPLAY_NAME",
                    description: "String",
                  },
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--glossary",
                  description: "The name of glossary term to use",
                  args: {
                    name: "GLOSSARY",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLabels,
                optLocation3,
                optLogHttp,
                {
                  name: "--parent",
                  description: "Immediate parent of the created glossary term",
                  priority: 100,
                  args: {
                    name: "PARENT",
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
                name: "GLOSSARY_TERM",
                description:
                  "ID of the glossary term or fully qualified identifier for the glossary term",
              },
            },
            {
              name: "delete",
              description: "Deletes a glossary term",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGlossary,
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
                name: "GLOSSARY_TERM",
                description:
                  "ID of the glossary term or fully qualified identifier for the glossary term",
              },
            },
            {
              name: "describe",
              description: "Describes a glossary term",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGlossary,
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
                name: "GLOSSARY_TERM",
                description:
                  "ID of the glossary term or fully qualified identifier for the glossary term",
              },
            },
            {
              name: "list",
              description: "List glossary terms",
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
                  name: "--glossary",
                  description:
                    "ID of the glossary or fully qualified identifier for the glossary",
                  priority: 100,
                  args: {
                    name: "GLOSSARY",
                    description: "String",
                  },
                },
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
            {
              name: "update",
              description: "Updates a glossary term",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description: "Description of the glossary term",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--display-name",
                  description: "Display name of the glossary term",
                  args: {
                    name: "DISPLAY_NAME",
                    description: "String",
                  },
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--glossary",
                  description: "The name of glossary term to use",
                  args: {
                    name: "GLOSSARY",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLabels,
                optLocation3,
                optLogHttp,
                {
                  name: "--parent",
                  description: "Immediate parent of the created glossary term",
                  args: {
                    name: "PARENT",
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
                name: "GLOSSARY_TERM",
                description:
                  "ID of the glossary term or fully qualified identifier for the glossary term",
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
          name: "update",
          description: "Updates a Dataplex Glossary",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the Glossary",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Display Name of the Glossary",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--etag",
              description: "Etag value for particular Glossary",
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
            optLabels,
            optLocation3,
            optLogHttp,
            optNoAsync,
            optNoValidateOnly2,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optValidateOnly2,
            optVerbosity,
          ],
          args: {
            name: "GLOSSARY",
            description:
              "ID of the glossary or fully qualified identifier for the glossary",
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
      name: "lakes",
      description: "Manage Dataplex Lake resources",
      subcommands: [
        {
          name: "actions",
          description: "Manage Dataplex lake resource actions",
          subcommands: [
            {
              name: "list",
              description: "List Dataplex lake actions",
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
                optLake,
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
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Dataplex lake resource",
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
            optMember,
            optProject,
            optQuiet,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "LAKE",
            description:
              "ID of the lakes or fully qualified identifier for the lakes",
          },
        },
        {
          name: "authorize",
          description: "Authorize a service agent to manage resources",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--bigquery-dataset-resource",
              description:
                "The identifier of the BigQuery dataset that the service agent will manage",
              priority: 100,
              args: {
                name: "BIGQUERY_DATASET_RESOURCE",
                description: "String",
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
            {
              name: "--project-resource",
              description:
                "The identifier of the project whose resources the service agent will manage",
              args: {
                name: "PROJECT_RESOURCE",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--secondary-project",
              description:
                "The identifier of the project where the BigQuery dataset is located",
              priority: 100,
              args: {
                name: "SECONDARY_PROJECT",
                description: "String",
              },
            },
            {
              name: "--storage-bucket-resource",
              description:
                "The identifier of the Cloud Storage bucket that the service agent will manage",
              args: {
                name: "STORAGE_BUCKET_RESOURCE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "create",
          description: "Create a Dataplex lake resource",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the lake",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Display name of the lake",
              args: {
                name: "DISPLAY_NAME",
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
            optLocation3,
            optLogHttp,
            {
              name: "--metastore-service",
              description:
                "A relative reference to the Dataproc Metastore (https://cloud.google.com/dataproc-metastore/docs) service instance into which metadata will be published. This is of the form: `projects/{project_number}/locations/{location_id}/services/{service_id}` where the location matches the location of the lake",
              args: {
                name: "METASTORE_SERVICE",
                description: "String",
              },
            },
            optNoAsync,
            optNoValidateOnly,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optValidateOnly,
            optVerbosity,
          ],
          args: {
            name: "LAKE",
            description:
              "ID of the lakes or fully qualified identifier for the lakes",
          },
        },
        {
          name: "deauthorize",
          description: "Deauthorize a service agent from managing resources",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--bigquery-dataset-resource",
              description:
                "The identifier of the BigQuery dataset that the service agent will no longer manage",
              priority: 100,
              args: {
                name: "BIGQUERY_DATASET_RESOURCE",
                description: "String",
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
            {
              name: "--project-resource",
              description:
                "The identifier of the project whose resources the service agent will no longer manage",
              args: {
                name: "PROJECT_RESOURCE",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--secondary-project",
              description:
                "The identifier of the project where the BigQuery dataset is located",
              priority: 100,
              args: {
                name: "SECONDARY_PROJECT",
                description: "String",
              },
            },
            {
              name: "--storage-bucket-resource",
              description:
                "The identifier of the Cloud Storage bucket that the service agent will no longer manage",
              args: {
                name: "STORAGE_BUCKET_RESOURCE",
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
          description: "Delete a Dataplex lake resource",
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
            name: "LAKE",
            description:
              "ID of the lake or fully qualified identifier for the lake",
          },
        },
        {
          name: "describe",
          description: "Describe a Dataplex lake resource",
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
            name: "LAKE",
            description:
              "ID of the lake or fully qualified identifier for the lake",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Dataplex lake resource",
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
          args: {
            name: "LAKE",
            description:
              "ID of the lake or fully qualified identifier for the lake",
          },
        },
        {
          name: "list",
          description: "List Dataplex lake resources under a project",
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
          name: "remove-iam-policy-binding",
          description:
            "Remove IAM policy binding from a Dataplex lake resource",
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
            optMember2,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "LAKE",
            description:
              "ID of the lakes or fully qualified identifier for the lakes",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set the IAM policy to a Dataplex lake as defined in a JSON or YAML file",
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
          args: [
            {
              name: "LAKE",
              description:
                "ID of the lakes or fully qualified identifier for the lakes",
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
          description: "Update a Dataplex lake resource",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the lake",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            optDisplayName,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLabels,
            optLocation3,
            optLogHttp,
            {
              name: "--metastore-service",
              description:
                "A relative reference to the Dataproc Metastore (https://cloud.google.com/dataproc-metastore/docs) service instance into which metadata will be published. This is of the form: `projects/{project_number}/locations/{location_id}/services/{service_id}` where the location matches the location of the lake",
              args: {
                name: "METASTORE_SERVICE",
                description: "String",
              },
            },
            optNoAsync,
            optNoValidateOnly2,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optValidateOnly2,
            optVerbosity,
          ],
          args: {
            name: "LAKE",
            description:
              "ID of the lakes or fully qualified identifier for the lakes",
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
      name: "metadata-jobs",
      description: "Manage Dataplex metadata jobs",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a Metadata Job run",
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
            name: "METADATA_JOB",
            description:
              "ID of the metadata job or fully qualified identifier for the metadata job",
          },
        },
        {
          name: "create",
          description: "Create a Dataplex Metadata Job",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--export-aspect-types",
              description: "The list of aspect types to export metadata from",
              args: {
                name: "EXPORT_ASPECT_TYPES",
                description: "List",
              },
            },
            {
              name: "--export-entry-groups",
              description: "The list of entry groups to export metadata from",
              args: {
                name: "EXPORT_ENTRY_GROUPS",
                description: "List",
              },
            },
            {
              name: "--export-entry-types",
              description: "The list of entry types to export metadata from",
              args: {
                name: "EXPORT_ENTRY_TYPES",
                description: "List",
              },
            },
            {
              name: "--export-organization-level",
              description:
                "Whether to export metadata at the organization level",
              args: {
                name: "EXPORT_ORGANIZATION_LEVEL",
                description: "String",
              },
            },
            {
              name: "--export-output-path",
              description: "The Cloud Storage location to export metadata to",
              priority: 100,
              args: {
                name: "EXPORT_OUTPUT_PATH",
                description: "String",
              },
            },
            {
              name: "--export-projects",
              description: "The list of projects to export metadata from",
              args: {
                name: "EXPORT_PROJECTS",
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
              name: "--import-aspect-sync-mode",
              description: "Type. _IMPORT_ASPECT_SYNC_MODE_ must be one of:",
              priority: 100,
              args: {
                name: "IMPORT_ASPECT_SYNC_MODE",
                suggestions: ["FULL", "INCREMENTAL"],
              },
            },
            {
              name: "--import-aspect-types",
              description:
                "The list of aspect types to import metadata jobs into",
              args: {
                name: "IMPORT_ASPECT_TYPES",
                description: "List",
              },
            },
            {
              name: "--import-entry-groups",
              description:
                "The list of entry groups to import metadata jobs into",
              args: {
                name: "IMPORT_ENTRY_GROUPS",
                description: "List",
              },
            },
            {
              name: "--import-entry-link-types",
              description:
                "The list of entry link types to import metadata jobs into",
              args: {
                name: "IMPORT_ENTRY_LINK_TYPES",
                description: "List",
              },
            },
            {
              name: "--import-entry-sync-mode",
              description: "Type. _IMPORT_ENTRY_SYNC_MODE_ must be one of:",
              priority: 100,
              args: {
                name: "IMPORT_ENTRY_SYNC_MODE",
                suggestions: ["FULL", "INCREMENTAL"],
              },
            },
            {
              name: "--import-entry-types",
              description:
                "The list of entry types to import metadata jobs into",
              args: {
                name: "IMPORT_ENTRY_TYPES",
                description: "List",
              },
            },
            {
              name: "--import-glossaries",
              description:
                "The list of glossaries to import metadata jobs into",
              args: {
                name: "IMPORT_GLOSSARIES",
                description: "List",
              },
            },
            {
              name: "--import-log-level",
              description: "Type. _IMPORT_LOG_LEVEL_ must be one of:",
              args: {
                name: "IMPORT_LOG_LEVEL",
                suggestions: ["DEBUG", "INFO"],
              },
            },
            {
              name: "--import-referenced-entry-scopes",
              description:
                "The list of referenced entry scopes to import metadata jobs into",
              args: {
                name: "IMPORT_REFERENCED_ENTRY_SCOPES",
                description: "List",
              },
            },
            {
              name: "--import-source-create-time",
              description:
                "Time at which the event took place. See `$ gcloud topic datetimes` for information on supported time formats",
              args: {
                name: "IMPORT_SOURCE_CREATE_TIME",
                description: "String",
              },
            },
            {
              name: "--import-source-storage-uri",
              description:
                "The Dataplex source storage URI to import metadata from",
              priority: 100,
              args: {
                name: "IMPORT_SOURCE_STORAGE_URI",
                description: "String",
              },
            },
            optLabels,
            optLocation3,
            optLogHttp,
            optNoAsync,
            optNoValidateOnly,
            optProject,
            optQuiet,
            optTraceToken,
            {
              name: "--type",
              description: "Type. _TYPE_ must be one of:",
              priority: 100,
              args: {
                name: "TYPE",
                suggestions: ["EXPORT", "IMPORT"],
              },
            },
            optUserOutputEnabled,
            optValidateOnly,
            optVerbosity,
          ],
          args: {
            name: "METADATA_JOB",
            description:
              "ID of the metadata job or fully qualified identifier for the metadata job",
            isOptional: true,
          },
        },
        {
          name: "describe",
          description: "Describe a Metadata Job",
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
            name: "METADATA_JOB",
            description:
              "ID of the metadata job or fully qualified identifier for the metadata job",
          },
        },
        {
          name: "list",
          description: "List Metadata Job resources under a project",
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
      name: "tasks",
      description: "Manage Dataplex Task services",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Dataplex task resource",
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
            optLake3,
            optLocation3,
            optLogHttp,
            optMember,
            optProject,
            optQuiet,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TASK",
            description:
              "ID of the tasks or fully qualified identifier for the tasks",
          },
        },
        {
          name: "create",
          description: "Create a Dataplex task resource",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--batch-executors-count",
              description: "Total number of job executors",
              args: {
                name: "BATCH_EXECUTORS_COUNT",
                description: "Int",
              },
            },
            {
              name: "--batch-max-executors-count",
              description:
                "Max configurable executors. If max_executors_count > executors_count, then auto-scaling is enabled",
              args: {
                name: "BATCH_MAX_EXECUTORS_COUNT",
                description: "Int",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--container-image",
              description: "Optional custom container image for the job",
              args: {
                name: "CONTAINER_IMAGE",
                description: "String",
              },
            },
            {
              name: "--container-image-java-jars",
              description:
                "A list of Java JARS to add to the classpath. Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar",
              args: {
                name: "CONTAINER_IMAGE_JAVA_JARS",
                description: "List",
              },
            },
            {
              name: "--container-image-properties",
              description:
                "The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties)",
              args: {
                name: "KEY=VALUE",
              },
            },
            {
              name: "--container-image-python-packages",
              description:
                "A list of python packages to be installed. Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz",
              args: {
                name: "CONTAINER_IMAGE_PYTHON_PACKAGES",
                description: "List",
              },
            },
            {
              name: "--description",
              description: "Description of the Dataplex task",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Display name of the Dataplex task",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--execution-args",
              description:
                "The arguments to pass to the task. The args can use placeholders of the format ${placeholder} as part of key/value string. These will be interpolated before passing the args to the driver. Currently supported placeholders: - ${task_id} - ${job_time} To pass positional args, set the key as TASK_ARGS. The value should be a comma-separated string of all the positional arguments. See https://cloud.google.com/sdk/gcloud/reference/topic/escaping for details on using a delimiter other than a comma. In case of other keys being present in the args, then TASK_ARGS will be passed as the last argument",
              args: {
                name: "KEY=VALUE",
              },
            },
            {
              name: "--execution-project",
              description:
                "The project in which jobs are run. By default, the project containing the Lake is used. If a project is provided, the --execution-service-account must belong to this same project",
              args: {
                name: "EXECUTION_PROJECT",
                description: "String",
              },
            },
            {
              name: "--execution-service-account",
              description: "Service account to use to execute a task",
              priority: 100,
              args: {
                name: "EXECUTION_SERVICE_ACCOUNT",
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
              name: "--kms-key",
              description:
                "The Cloud KMS key to use for encryption, of the form: projects/{project_number}/locations/{location_id}/keyRings/{key-ring-name}/cryptoKeys/{key-name}",
              args: {
                name: "KMS_KEY",
                description: "String",
              },
            },
            optLabels,
            optLake2,
            optLocation2,
            optLogHttp,
            {
              name: "--max-job-execution-lifetime",
              description:
                "The maximum duration before the job execution expires",
              args: {
                name: "MAX_JOB_EXECUTION_LIFETIME",
                description: "String",
              },
            },
            optNoAsync,
            {
              name: "--no-trigger-disabled",
              description:
                "Prevent the task from executing. This does not cancel already running tasks. It is intended to temporarily disable RECURRING tasks",
              hidden: true,
            },
            {
              name: "--notebook",
              description:
                "Path to input notebook. This can be the Google Cloud Storage URI of the notebook file or the path to a Notebook Content. The execution args are accessible as environment variables (`TASK_key=value`)",
              priority: 100,
              args: {
                name: "NOTEBOOK",
                description: "String",
              },
            },
            {
              name: "--notebook-archive-uris",
              description:
                "Google Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip",
              args: {
                name: "NOTEBOOK_ARCHIVE_URIS",
                description: "List",
              },
            },
            {
              name: "--notebook-batch-executors-count",
              description: "Total number of job executors",
              args: {
                name: "NOTEBOOK_BATCH_EXECUTORS_COUNT",
                description: "Int",
              },
            },
            {
              name: "--notebook-batch-max-executors-count",
              description:
                "Max configurable executors. If max_executors_count > executors_count, then auto-scaling is enabled",
              args: {
                name: "NOTEBOOK_BATCH_MAX_EXECUTORS_COUNT",
                description: "Int",
              },
            },
            {
              name: "--notebook-container-image",
              description: "Optional custom container image for the job",
              args: {
                name: "NOTEBOOK_CONTAINER_IMAGE",
                description: "String",
              },
            },
            {
              name: "--notebook-container-image-java-jars",
              description:
                "A list of Java JARS to add to the classpath. Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar",
              args: {
                name: "NOTEBOOK_CONTAINER_IMAGE_JAVA_JARS",
                description: "List",
              },
            },
            {
              name: "--notebook-container-image-properties",
              description:
                "The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties)",
              args: {
                name: "KEY=VALUE",
              },
            },
            {
              name: "--notebook-file-uris",
              description:
                "Google Cloud Storage URIs of files to be placed in the working directory of each executor",
              args: {
                name: "NOTEBOOK_FILE_URIS",
                description: "List",
              },
            },
            {
              name: "--notebook-vpc-network-name",
              description:
                "The Cloud VPC network in which the job is run. By default, the Cloud VPC network named Default within the project is used",
              args: {
                name: "NOTEBOOK_VPC_NETWORK_NAME",
                description: "String",
              },
            },
            {
              name: "--notebook-vpc-network-tags",
              description: "List of network tags to apply to the job",
              args: {
                name: "NOTEBOOK_VPC_NETWORK_TAGS",
                description: "List",
              },
            },
            {
              name: "--notebook-vpc-sub-network-name",
              description: "The Cloud VPC sub-network in which the job is run",
              args: {
                name: "NOTEBOOK_VPC_SUB_NETWORK_NAME",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--spark-archive-uris",
              description:
                "Google Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip",
              args: {
                name: "SPARK_ARCHIVE_URIS",
                description: "List",
              },
            },
            {
              name: "--spark-file-uris",
              description:
                "Google Cloud Storage URIs of files to be placed in the working directory of each executor",
              args: {
                name: "SPARK_FILE_URIS",
                description: "List",
              },
            },
            {
              name: "--spark-main-class",
              description:
                "The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in `jar_file_uris`. The execution args are passed in as a sequence of named process arguments (`--key=value`)",
              args: {
                name: "SPARK_MAIN_CLASS",
                description: "String",
              },
            },
            {
              name: "--spark-main-jar-file-uri",
              description:
                "The Google Cloud Storage URI of the jar file that contains the main class. The execution args are passed in as a sequence of named process arguments (`--key=value`)",
              args: {
                name: "SPARK_MAIN_JAR_FILE_URI",
                description: "String",
              },
            },
            {
              name: "--spark-python-script-file",
              description:
                "The Google Cloud Storage URI of the main Python file to use as the driver. Must be a .py file",
              args: {
                name: "SPARK_PYTHON_SCRIPT_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--spark-sql-script",
              description: "The SQL query text",
              args: {
                name: "SPARK_SQL_SCRIPT",
                description: "String",
              },
            },
            {
              name: "--spark-sql-script-file",
              description:
                "A reference to a query file. This can be the Google Cloud Storage URI of the query file or it can the path to a SqlScript Content",
              args: {
                name: "SPARK_SQL_SCRIPT_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optTraceToken,
            {
              name: "--trigger-disabled",
              description:
                "Prevent the task from executing. This does not cancel already running tasks. It is intended to temporarily disable RECURRING tasks",
            },
            {
              name: "--trigger-max-retires",
              description:
                "Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task",
              args: {
                name: "TRIGGER_MAX_RETIRES",
                description: "Int",
              },
            },
            {
              name: "--trigger-schedule",
              description:
                "Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically",
              args: {
                name: "TRIGGER_SCHEDULE",
                description: "String",
              },
            },
            {
              name: "--trigger-start-time",
              description:
                "The first run of the task begins after this time. If not specified, an ON_DEMAND task runs when it is submitted and a RECURRING task runs based on the trigger schedule",
              args: {
                name: "TRIGGER_START_TIME",
                description: "String",
              },
            },
            {
              name: "--trigger-type",
              description:
                "Trigger type of the user-specified Dataplex Task. _TRIGGER_TYPE_ must be one of:",
              priority: 100,
              args: {
                name: "TRIGGER_TYPE",
                suggestions: ["on-demand", "recurring"],
              },
            },
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--vpc-network-name",
              description:
                "The Cloud VPC network in which the job is run. By default, the Cloud VPC network named Default within the project is used",
              args: {
                name: "VPC_NETWORK_NAME",
                description: "String",
              },
            },
            {
              name: "--vpc-network-tags",
              description: "List of network tags to apply to the job",
              args: {
                name: "VPC_NETWORK_TAGS",
                description: "List",
              },
            },
            {
              name: "--vpc-sub-network-name",
              description: "The Cloud VPC sub-network in which the job is run",
              args: {
                name: "VPC_SUB_NETWORK_NAME",
                description: "String",
              },
            },
          ],
          args: {
            name: "TASK",
            description:
              "ID of the task or fully qualified identifier for the task",
          },
        },
        {
          name: "delete",
          description: "Delete a Dataplex task resource",
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
            optLake2,
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
            name: "TASK",
            description:
              "ID of the task or fully qualified identifier for the task",
          },
        },
        {
          name: "describe",
          description: "Describe a Dataplex task resource",
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
            optLake2,
            optLocation2,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TASK",
            description:
              "ID of the task or fully qualified identifier for the task",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Dataplex task resource",
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
            optLake2,
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
          args: {
            name: "TASK",
            description:
              "ID of the task or fully qualified identifier for the task",
          },
        },
        {
          name: "jobs",
          description: "Manage Dataplex Jobs services",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel a Dataplex Job running a particular task",
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
                optLake2,
                optLocation2,
                optLogHttp,
                optProject,
                optQuiet,
                {
                  name: "--task",
                  description: "Identifier of the Dataplex task resource",
                  args: {
                    name: "TASK",
                    description: "String",
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
            {
              name: "describe",
              description: "Describe a Dataplex job running a particular task",
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
                optLake2,
                optLocation2,
                optLogHttp,
                optProject,
                optQuiet,
                {
                  name: "--task",
                  description: "Identifier of the Dataplex task resource",
                  args: {
                    name: "TASK",
                    description: "String",
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
            {
              name: "list",
              description: "List job runs of a Dataplex task resource",
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
                optLake2,
                optLimit,
                optLocation2,
                optLogHttp,
                optNoUri,
                optPageSize,
                optProject,
                optQuiet,
                optSortBy,
                {
                  name: "--task",
                  description:
                    "ID of the task or fully qualified identifier for the task",
                  priority: 100,
                  args: {
                    name: "TASK",
                    description: "String",
                  },
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
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "list",
          description: "List Dataplex task resources under a lake",
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
            optLake,
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
        {
          name: "remove-iam-policy-binding",
          description:
            "Remove IAM policy binding from a Dataplex task resource",
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
            optLake3,
            optLocation3,
            optLogHttp,
            optMember2,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TASK",
            description:
              "ID of the tasks or fully qualified identifier for the tasks",
          },
        },
        {
          name: "run",
          description: "Trigger one-time run of a Dataplex task",
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
            optLake3,
            optLocation3,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "TASK",
              description:
                "ID of the tasks or fully qualified identifier for the tasks",
            },
            {
              name: "execution-spec-args",
              description:
                "Execution spec arguments to pass to the driver. Follows the format argKey=argValue",
              isVariadic: true,
              isOptional: true,
            },
          ],
        },
        {
          name: "set-iam-policy",
          description:
            "Set the IAM policy to a Dataplex task as defined in a JSON or YAML file",
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
            optLake3,
            optLocation3,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "TASK",
              description:
                "ID of the tasks or fully qualified identifier for the tasks",
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
          description: "Update a Dataplex task resource",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--batch-executors-count",
              description: "Total number of job executors",
              args: {
                name: "BATCH_EXECUTORS_COUNT",
                description: "Int",
              },
            },
            {
              name: "--batch-max-executors-count",
              description:
                "Max configurable executors. If max_executors_count > executors_count, then auto-scaling is enabled",
              args: {
                name: "BATCH_MAX_EXECUTORS_COUNT",
                description: "Int",
              },
            },
            optBillingProject,
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
            },
            optConfiguration,
            {
              name: "--container-image",
              description: "Optional custom container image for the job",
              args: {
                name: "CONTAINER_IMAGE",
                description: "String",
              },
            },
            {
              name: "--container-image-java-jars",
              description:
                "A list of Java JARS to add to the classpath. Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar",
              args: {
                name: "CONTAINER_IMAGE_JAVA_JARS",
                description: "List",
              },
            },
            {
              name: "--container-image-properties",
              description:
                "Override to common configuration of open source components installed on the Dataproc cluster. The properties to set on daemon config files. Property keys are specified in `prefix:property` format, for example `core:hadoop.tmp.dir`. For more information, see [Cluster properties](https://cloud.google.com/dataproc/docs/concepts/cluster-properties)",
              args: {
                name: "KEY=VALUE",
              },
            },
            {
              name: "--container-image-python-packages",
              description:
                "A list of python packages to be installed. Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz",
              args: {
                name: "CONTAINER_IMAGE_PYTHON_PACKAGES",
                description: "List",
              },
            },
            {
              name: "--description",
              description: "Description of the task",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "Display name of the task",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--execution-args",
              description:
                "The arguments to pass to the task. The args can use placeholders of the format ${placeholder} as part of key/value string. These will be interpolated before passing the args to the driver. Currently supported placeholders: - ${task_id} - ${job_time} To pass positional args, set the key as TASK_ARGS. The value should be a comma-separated string of all the positional arguments. To use a delimiter other than comma, refer to https://cloud.google.com/sdk/gcloud/reference/topic/escaping. In case of other keys being present in the args, then TASK_ARGS will be passed as the last argument",
              args: {
                name: "KEY=VALUE",
              },
            },
            {
              name: "--execution-project",
              description:
                "The project in which jobs are run. By default, the project containing the Lake is used. If a project is provided, the --execution-service-account must belong to this same project",
              args: {
                name: "EXECUTION_PROJECT",
                description: "String",
              },
            },
            {
              name: "--execution-service-account",
              description:
                "Service account to use to execute a task. If not provided, the default Compute service account for the project is used",
              args: {
                name: "EXECUTION_SERVICE_ACCOUNT",
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
              name: "--kms-key",
              description:
                "The Cloud KMS key to use for encryption, of the form: projects/{project_number}/locations/{location_id}/keyRings/{key-ring-name}/cryptoKeys/{key-name}",
              args: {
                name: "KMS_KEY",
                description: "String",
              },
            },
            optLake2,
            optLocation2,
            optLogHttp,
            {
              name: "--max-job-execution-lifetime",
              description:
                "The maximum duration before the job execution expires",
              args: {
                name: "MAX_JOB_EXECUTION_LIFETIME",
                description: "String",
              },
            },
            optNoAsync,
            {
              name: "--no-clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
              hidden: true,
            },
            {
              name: "--no-trigger-disabled",
              description:
                "Prevent the task from executing. This does not cancel already running tasks. It is intended to temporarily disable RECURRING tasks",
              hidden: true,
            },
            {
              name: "--notebook",
              description:
                "Google Cloud Storage URIs of the notebook file or the path to a Notebook Content. Path to input notebook",
              args: {
                name: "NOTEBOOK",
                description: "String",
              },
            },
            {
              name: "--notebook-archive-uris",
              description:
                "Google Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip",
              args: {
                name: "NOTEBOOK_ARCHIVE_URIS",
                description: "List",
              },
            },
            {
              name: "--notebook-batch-executors-count",
              description: "Total number of job executors",
              args: {
                name: "NOTEBOOK_BATCH_EXECUTORS_COUNT",
                description: "Int",
              },
            },
            {
              name: "--notebook-batch-max-executors-count",
              description:
                "Max configurable executors. If max_executors_count > executors_count, then auto-scaling is enabled",
              args: {
                name: "NOTEBOOK_BATCH_MAX_EXECUTORS_COUNT",
                description: "Int",
              },
            },
            {
              name: "--notebook-container-image",
              description: "Optional custom container image for the job",
              args: {
                name: "NOTEBOOK_CONTAINER_IMAGE",
                description: "String",
              },
            },
            {
              name: "--notebook-container-image-java-jars",
              description:
                "A list of Java JARS to add to the classpath. Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar",
              args: {
                name: "NOTEBOOK_CONTAINER_IMAGE_JAVA_JARS",
                description: "List",
              },
            },
            {
              name: "--notebook-container-image-properties",
              description:
                "Override to common configuration of open source components installed on the Dataproc cluster. The properties to set on daemon config files. Property keys are specified in `prefix:property` format, for example `core:hadoop.tmp.dir`. For more information, see [Cluster properties](https://cloud.google.com/dataproc/docs/concepts/cluster-properties)",
              args: {
                name: "KEY=VALUE",
              },
            },
            {
              name: "--notebook-file-uris",
              description:
                "Google Cloud Storage URIs of files to be placed in the working directory of each executor",
              args: {
                name: "NOTEBOOK_FILE_URIS",
                description: "List",
              },
            },
            {
              name: "--notebook-vpc-network-name",
              description:
                "The Cloud VPC network in which the job is run. By default, the Cloud VPC network named Default within the project is used",
              args: {
                name: "NOTEBOOK_VPC_NETWORK_NAME",
                description: "String",
              },
            },
            {
              name: "--notebook-vpc-network-tags",
              description: "List of network tags to apply to the job",
              args: {
                name: "NOTEBOOK_VPC_NETWORK_TAGS",
                description: "List",
              },
            },
            {
              name: "--notebook-vpc-sub-network-name",
              description: "The Cloud VPC sub-network in which the job is run",
              args: {
                name: "NOTEBOOK_VPC_SUB_NETWORK_NAME",
                description: "String",
              },
            },
            optProject,
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
              name: "--spark-archive-uris",
              description:
                "Google Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip",
              args: {
                name: "SPARK_ARCHIVE_URIS",
                description: "List",
              },
            },
            {
              name: "--spark-file-uris",
              description:
                "Google Cloud Storage URIs of files to be placed in the working directory of each executor",
              args: {
                name: "SPARK_FILE_URIS",
                description: "List",
              },
            },
            {
              name: "--spark-main-class",
              description:
                "The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in",
              args: {
                name: "SPARK_MAIN_CLASS",
                description: "String",
              },
            },
            {
              name: "--spark-main-jar-file-uri",
              description:
                "The Google Cloud Storage URI of the jar file that contains the main class. The execution args are passed in as a sequence of named process arguments (`--key=value`)",
              args: {
                name: "SPARK_MAIN_JAR_FILE_URI",
                description: "String",
              },
            },
            {
              name: "--spark-python-script-file",
              description:
                "The Google Cloud Storage URI of the main Python file to use as the driver. Must be a .py file",
              args: {
                name: "SPARK_PYTHON_SCRIPT_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--spark-sql-script",
              description: "The SQL query text",
              args: {
                name: "SPARK_SQL_SCRIPT",
                description: "String",
              },
            },
            {
              name: "--spark-sql-script-file",
              description:
                "A reference to a query file. This can be the Google Cloud Storage URI of the query file or it can the path to a SqlScript Content",
              args: {
                name: "SPARK_SQL_SCRIPT_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optTraceToken,
            {
              name: "--trigger-disabled",
              description:
                "Prevent the task from executing. This does not cancel already running tasks. It is intended to temporarily disable RECURRING tasks",
            },
            {
              name: "--trigger-max-retires",
              description:
                "Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task",
              args: {
                name: "TRIGGER_MAX_RETIRES",
                description: "Int",
              },
            },
            {
              name: "--trigger-schedule",
              description:
                "Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically",
              args: {
                name: "TRIGGER_SCHEDULE",
                description: "String",
              },
            },
            {
              name: "--trigger-start-time",
              description:
                "The first run of the task will be after this time. If not specified, the task will run shortly after being submitted if ON_DEMAND and based on the schedule if RECURRING",
              args: {
                name: "TRIGGER_START_TIME",
                description: "String",
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
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--vpc-network-name",
              description:
                "The Cloud VPC network in which the job is run. By default, the Cloud VPC network named Default within the project is used",
              args: {
                name: "VPC_NETWORK_NAME",
                description: "String",
              },
            },
            {
              name: "--vpc-network-tags",
              description: "List of network tags to apply to the job",
              args: {
                name: "VPC_NETWORK_TAGS",
                description: "List",
              },
            },
            {
              name: "--vpc-sub-network-name",
              description: "The Cloud VPC sub-network in which the job is run",
              args: {
                name: "VPC_SUB_NETWORK_NAME",
                description: "String",
              },
            },
          ],
          args: {
            name: "TASK",
            description:
              "ID of the task or fully qualified identifier for the task",
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
      name: "zones",
      description: "Manage Dataplex Zone resources",
      subcommands: [
        {
          name: "actions",
          description: "Manage Dataplex zone resource actions",
          subcommands: [
            {
              name: "list",
              description: "List Dataplex zone actions",
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
                optLake2,
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
                {
                  name: "--zone",
                  description:
                    "ID of the zone or fully qualified identifier for the zone",
                  priority: 100,
                  args: {
                    name: "ZONE",
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
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Dataplex zone resource",
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
            optLake3,
            optLocation3,
            optLogHttp,
            optMember,
            optProject,
            optQuiet,
            optRole,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ZONE",
            description:
              "ID of the zones or fully qualified identifier for the zones",
          },
        },
        {
          name: "create",
          description: "Create a zone",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optCsvDelimiter,
            optCsvDisableTypeInference,
            optCsvEncoding,
            optCsvHeaderRows,
            {
              name: "--description",
              description: "Description of the zone",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            optDiscoveryEnabled,
            optDiscoveryExcludePatterns,
            optDiscoveryIncludePatterns,
            optDiscoverySchedule,
            {
              name: "--display-name",
              description: "Display name of the zone",
              args: {
                name: "DISPLAY_NAME",
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
            optJsonDisableTypeInference,
            optJsonEncoding,
            optLabels,
            optLake3,
            optLocation3,
            optLogHttp,
            optNoAsync,
            optNoCsvDisableTypeInference,
            optNoDiscoveryEnabled,
            optNoJsonDisableTypeInference,
            optNoValidateOnly,
            optProject,
            optQuiet,
            {
              name: "--resource-location-type",
              description:
                "Location type of the resources attached to a zone. _RESOURCE_LOCATION_TYPE_ must be one of:",
              priority: 100,
              args: {
                name: "RESOURCE_LOCATION_TYPE",
                suggestions: ["MULTI_REGION", "SINGLE_REGION"],
              },
            },
            optTraceToken,
            {
              name: "--type",
              description: "Type. _TYPE_ must be one of:",
              priority: 100,
              args: {
                name: "TYPE",
                suggestions: ["CURATED", "RAW"],
              },
            },
            optUserOutputEnabled,
            optValidateOnly,
            optVerbosity,
          ],
          args: {
            name: "ZONE",
            description:
              "ID of the zones or fully qualified identifier for the zones",
          },
        },
        {
          name: "delete",
          description: "Delete a Dataplex zone resource",
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
            optLake2,
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
            name: "ZONE",
            description:
              "ID of the zone or fully qualified identifier for the zone",
          },
        },
        {
          name: "describe",
          description: "Describe a Dataplex zone resource",
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
            optLake2,
            optLocation2,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ZONE",
            description:
              "ID of the zone or fully qualified identifier for the zone",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Dataplex zone resource",
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
            optLake2,
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
          args: {
            name: "ZONE",
            description:
              "ID of the zone or fully qualified identifier for the zone",
          },
        },
        {
          name: "list",
          description: "List Dataplex zone resources under a lake",
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
            optLake,
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
        {
          name: "remove-iam-policy-binding",
          description:
            "Remove IAM policy binding from a Dataplex zone resource",
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
            optLake3,
            optLocation3,
            optLogHttp,
            optMember2,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ZONE",
            description:
              "ID of the zones or fully qualified identifier for the zones",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set the IAM policy to a Dataplex zone as defined in a JSON or YAML file",
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
            optLake3,
            optLocation3,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "ZONE",
              description:
                "ID of the zones or fully qualified identifier for the zones",
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
          description: "Update a Dataplex zone resource",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optCsvDelimiter,
            optCsvDisableTypeInference,
            optCsvEncoding,
            optCsvHeaderRows,
            {
              name: "--description",
              description: "Description of the zone",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            optDiscoveryEnabled,
            optDiscoveryExcludePatterns,
            optDiscoveryIncludePatterns,
            optDiscoverySchedule,
            optDisplayName,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optJsonDisableTypeInference,
            optJsonEncoding,
            optLabels,
            optLake3,
            optLocation3,
            optLogHttp,
            optNoAsync,
            optNoCsvDisableTypeInference,
            optNoDiscoveryEnabled,
            optNoJsonDisableTypeInference,
            optNoValidateOnly,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optValidateOnly,
            optVerbosity,
          ],
          args: {
            name: "ZONE",
            description:
              "ID of the zones or fully qualified identifier for the zones",
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
