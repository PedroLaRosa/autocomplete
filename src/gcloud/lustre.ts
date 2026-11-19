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
  description: "The location id of the instance resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation2: Fig.Option = {
  name: "--location",
  description: "The location id of the operation resource",
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
  name: "lustre",
  description: "Manage Lustre resources",
  subcommands: [
    {
      name: "instances",
      description: "Manage Instance resources",
      subcommands: [
        {
          name: "create",
          description: "Creates a Managed Lustre instance",
          options: [
            {
              name: "--access-rules",
              description: "The access rules for the instance",
              args: {
                name: "ACCESS_RULES",
              },
            },
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--capacity-gib",
              description:
                "The storage capacity of the instance in gibibytes (GiB). Allowed values are from `9000` to `7632000`, depending on the `perUnitStorageThroughput`. See [Performance tiers and maximum storage capacities](https://cloud.google.com/managed-lustre/docs/create-instance#performance-tiers) for specific minimums, maximums, and step sizes for each performance tier",
              priority: 100,
              args: {
                name: "CAPACITY_GIB",
                description: "Int",
              },
            },
            optConfiguration,
            {
              name: "--default-squash-gid",
              description:
                "The user squash GID for the default access rule. This user squash GID applies to all root users connecting from clients that are not matched by any of the access rules. If not set, the default is 0 (no GID squash)",
              args: {
                name: "DEFAULT_SQUASH_GID",
                description: "Int",
              },
            },
            {
              name: "--default-squash-mode",
              description:
                "The squash mode for the default access rule. _DEFAULT_SQUASH_MODE_ must be one of:",
              priority: 100,
              args: {
                name: "DEFAULT_SQUASH_MODE",
                suggestions: ["no-squash", "root-squash"],
              },
            },
            {
              name: "--default-squash-uid",
              description:
                "The user squash UID for the default access rule. This user squash UID applies to all root users connecting from clients that are not matched by any of the access rules. If not set, the default is 0 (no UID squash)",
              args: {
                name: "DEFAULT_SQUASH_UID",
                description: "Int",
              },
            },
            {
              name: "--description",
              description: "A user-readable description of the instance",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--dynamic-tier-options-mode",
              description:
                "The dynamic tier mode of the instance. _DYNAMIC_TIER_OPTIONS_MODE_ must be one of:",
              priority: 100,
              args: {
                name: "DYNAMIC_TIER_OPTIONS_MODE",
                suggestions: ["default-cache", "disabled"],
              },
            },
            {
              name: "--filesystem",
              description:
                "The filesystem name for this instance. This name is used by client-side tools, including when mounting the instance. Must be eight characters or less and can only contain letters and numbers",
              priority: 100,
              args: {
                name: "FILESYSTEM",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gke-support-enabled",
              description:
                "Indicates whether you want to enable support for GKE clients. By default, GKE clients are not supported. Deprecated. No longer required for GKE instance creation",
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--kms-key",
              description:
                "The Cloud KMS key name to use for data encryption. If not set, the instance will use Google-managed encryption keys. If set, the instance will use customer-managed encryption keys. The key must be in the same region as the instance. The key format is: projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{key}",
              args: {
                name: "KMS_KEY",
                description: "String",
              },
            },
            {
              name: "--labels",
              description: "Labels as key value pairs",
              args: {
                name: "LABELS",
              },
            },
            optLocation,
            optLogHttp,
            {
              name: "--maintenance-policy-exclusion-window",
              description:
                "The exclusion windows for the instance. Currently limited to 1 window",
              args: {
                name: "MAINTENANCE_POLICY_EXCLUSION_WINDOW",
              },
            },
            {
              name: "--maintenance-policy-weekly-windows",
              description:
                "Required, The weekly maintenance windows for the instance. Currently limited to 1 window",
              priority: 100,
              args: {
                name: "MAINTENANCE_POLICY_WEEKLY_WINDOWS",
              },
            },
            {
              name: "--network",
              description:
                "ID of the network or fully qualified identifier for the network",
              priority: 100,
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            optNoAsync,
            {
              name: "--no-gke-support-enabled",
              description:
                "Indicates whether you want to enable support for GKE clients. By default, GKE clients are not supported. Deprecated. No longer required for GKE instance creation",
              hidden: true,
            },
            {
              name: "--per-unit-storage-throughput",
              description:
                "The throughput of the instance in MBps per TiB. Valid values are 125, 250, 500, 1000. See [Performance tiers and maximum storage capacities](https://cloud.google.com/managed-lustre/docs/create-instance#performance-tiers) for more information",
              args: {
                name: "PER_UNIT_STORAGE_THROUGHPUT",
                description: "Int",
              },
            },
            {
              name: "--placement-policy",
              description:
                "The placement policy name for the instance in the format of projects/{project}/locations/{location}/resourcePolicies/{resource_policy}",
              args: {
                name: "PLACEMENT_POLICY",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--request-id",
              description:
                "An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request",
              args: {
                name: "REQUEST_ID",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "delete",
          description: "Deletes a Managed Lustre instance",
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
            {
              name: "--request-id",
              description:
                "An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request",
              args: {
                name: "REQUEST_ID",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "describe",
          description: "Gets details of a single Managed Lustre instance",
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "export-data",
          description:
            "Exports data from Managed Lustre instance to Cloud Storage",
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
              name: "--gcs-path-uri",
              description:
                "The URI to a Cloud Storage bucket, or a path within a bucket, using the format `gs://<bucket_name>/<optional_path_inside_bucket>/`. If a path inside the bucket is specified, it must end with a forward slash (`/`)",
              priority: 100,
              args: {
                name: "GCS_PATH_URI",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation,
            optLogHttp,
            {
              name: "--lustre-path",
              description:
                "The root directory path to the Managed Lustre file system. Must start with `/`. Default is `/`. If you're importing data into Managed Lustre, any path other than the default must already exist on the file system",
              args: {
                name: "LUSTRE_PATH",
                description: "String",
              },
            },
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--request-id",
              description: "UUID to identify requests",
              args: {
                name: "REQUEST_ID",
                description: "String",
              },
            },
            {
              name: "--service-account",
              description:
                "ID of the serviceAccount or fully qualified identifier for the serviceAccount",
              priority: 100,
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "import-data",
          description:
            "Imports data from Cloud Storage to Managed Lustre instance",
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
              name: "--gcs-path-uri",
              description:
                "The URI to a Cloud Storage bucket, or a path within a bucket, using the format `gs://<bucket_name>/<optional_path_inside_bucket>/`. If a path inside the bucket is specified, it must end with a forward slash (`/`)",
              priority: 100,
              args: {
                name: "GCS_PATH_URI",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation,
            optLogHttp,
            {
              name: "--lustre-path",
              description:
                "The root directory path to the Managed Lustre file system. Must start with `/`. Default is `/`. If you're importing data into Managed Lustre, any path other than the default must already exist on the file system",
              args: {
                name: "LUSTRE_PATH",
                description: "String",
              },
            },
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--request-id",
              description: "UUID to identify requests",
              args: {
                name: "REQUEST_ID",
                description: "String",
              },
            },
            {
              name: "--service-account",
              description:
                "ID of the serviceAccount or fully qualified identifier for the serviceAccount",
              priority: 100,
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "list",
          description: "List Lustre instances",
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
            {
              name: "--location",
              description:
                "ID of the location or fully qualified identifier for the location",
              priority: 100,
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
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
          name: "reschedule-maintenance",
          description: "Reschedule instances",
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
            {
              name: "--request-id",
              description:
                "A unique identifier for this request. A random UUID is recommended. This request is only idempotent if a `request_id` is provided",
              args: {
                name: "REQUEST_ID",
                description: "String",
              },
            },
            {
              name: "--reschedule-schedule-time",
              description:
                "Required if reschedule_type is BY_TIME. Timestamp when the maintenance shall be rescheduled to. This time must be within 28 days of the original scheduled maintenance start time",
              args: {
                name: "RESCHEDULE_SCHEDULE_TIME",
              },
            },
            {
              name: "--reschedule-type",
              description:
                "The type of rescheduling. _RESCHEDULE_TYPE_ must be one of:",
              priority: 100,
              args: {
                name: "RESCHEDULE_TYPE",
                suggestions: ["by-time", "immediate", "next-available-window"],
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "update",
          description:
            "Updates the parameters of a single Managed Lustre instance",
          options: [
            {
              name: "--access-rules",
              description:
                "Set access_rules to new value. The access rules for the instance",
              args: {
                name: "ACCESS_RULES",
              },
            },
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-access-rules",
              description:
                "Add new value to access_rules list. The access rules for the instance",
              args: {
                name: "ADD_ACCESS_RULES",
              },
            },
            {
              name: "--add-maintenance-policy-exclusion-window",
              description:
                "Add new value to maintenance_policy_exclusion_window list. The exclusion windows for the instance. Currently limited to 1 window",
              args: {
                name: "ADD_MAINTENANCE_POLICY_EXCLUSION_WINDOW",
              },
            },
            {
              name: "--add-maintenance-policy-weekly-windows",
              description:
                "Add new value to maintenance_policy_weekly_windows list. The weekly maintenance windows for the instance. Currently limited to 1 window",
              args: {
                name: "ADD_MAINTENANCE_POLICY_WEEKLY_WINDOWS",
              },
            },
            optAsync,
            optBillingProject,
            {
              name: "--capacity-gib",
              description:
                "The storage capacity of the instance in gibibytes (GiB). Allowed values are from `9000` to `7632000`, depending on the `perUnitStorageThroughput`. See [Performance tiers and maximum storage capacities](https://cloud.google.com/managed-lustre/docs/create-instance#performance-tiers) for specific minimums, maximums, and step sizes for each performance tier",
              args: {
                name: "CAPACITY_GIB",
                description: "Int",
              },
            },
            {
              name: "--clear-",
              description:
                "Set instance.accessRulesOptions back to default value",
            },
            {
              name: "--clear-access-rules",
              description: "Clear access_rules value and set to empty list",
            },
            {
              name: "--clear-labels",
              description: "Clear labels value and set to empty map",
            },
            {
              name: "--clear-maintenance-policy",
              description:
                "Set instance.maintenancePolicy back to default value",
            },
            {
              name: "--clear-maintenance-policy-exclusion-window",
              description:
                "Clear maintenance_policy_exclusion_window value and set to empty list",
            },
            {
              name: "--clear-maintenance-policy-weekly-windows",
              description:
                "Clear maintenance_policy_weekly_windows value and set to empty list",
            },
            optConfiguration,
            {
              name: "--default-squash-gid",
              description:
                "The user squash GID for the default access rule. This user squash GID applies to all root users connecting from clients that are not matched by any of the access rules. If not set, the default is 0 (no GID squash)",
              args: {
                name: "DEFAULT_SQUASH_GID",
                description: "Int",
              },
            },
            {
              name: "--default-squash-mode",
              description:
                "The squash mode for the default access rule. _DEFAULT_SQUASH_MODE_ must be one of:",
              args: {
                name: "DEFAULT_SQUASH_MODE",
                suggestions: ["no-squash", "root-squash"],
              },
            },
            {
              name: "--default-squash-uid",
              description:
                "The user squash UID for the default access rule. This user squash UID applies to all root users connecting from clients that are not matched by any of the access rules. If not set, the default is 0 (no UID squash)",
              args: {
                name: "DEFAULT_SQUASH_UID",
                description: "Int",
              },
            },
            {
              name: "--description",
              description: "A user-readable description of the instance",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gke-support-enabled",
              description:
                "Indicates whether you want to enable support for GKE clients. By default, GKE clients are not supported. Deprecated. No longer required for GKE instance creation. Use *--gke-support-enabled* to enable and *--no-gke-support-enabled* to disable",
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--labels",
              description: "Set labels to new value. Labels as key value pairs",
              args: {
                name: "LABELS",
              },
            },
            optLocation,
            optLogHttp,
            {
              name: "--maintenance-policy-exclusion-window",
              description:
                "Set maintenance_policy_exclusion_window to new value. The exclusion windows for the instance. Currently limited to 1 window",
              args: {
                name: "MAINTENANCE_POLICY_EXCLUSION_WINDOW",
              },
            },
            {
              name: "--maintenance-policy-weekly-windows",
              description:
                "Set maintenance_policy_weekly_windows to new value. The weekly maintenance windows for the instance. Currently limited to 1 window",
              args: {
                name: "MAINTENANCE_POLICY_WEEKLY_WINDOWS",
              },
            },
            optNoAsync,
            {
              name: "--no-clear-",
              description:
                "Set instance.accessRulesOptions back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-access-rules",
              description: "Clear access_rules value and set to empty list",
              hidden: true,
            },
            {
              name: "--no-clear-labels",
              description: "Clear labels value and set to empty map",
              hidden: true,
            },
            {
              name: "--no-clear-maintenance-policy",
              description:
                "Set instance.maintenancePolicy back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-maintenance-policy-exclusion-window",
              description:
                "Clear maintenance_policy_exclusion_window value and set to empty list",
              hidden: true,
            },
            {
              name: "--no-clear-maintenance-policy-weekly-windows",
              description:
                "Clear maintenance_policy_weekly_windows value and set to empty list",
              hidden: true,
            },
            {
              name: "--no-gke-support-enabled",
              description:
                "Indicates whether you want to enable support for GKE clients. By default, GKE clients are not supported. Deprecated. No longer required for GKE instance creation",
            },
            {
              name: "--per-unit-storage-throughput",
              description:
                "The throughput of the instance in MBps per TiB. Valid values are 125, 250, 500, 1000. See [Performance tiers and maximum storage capacities](https://cloud.google.com/managed-lustre/docs/create-instance#performance-tiers) for more information",
              args: {
                name: "PER_UNIT_STORAGE_THROUGHPUT",
                description: "Int",
              },
            },
            {
              name: "--placement-policy",
              description:
                "The placement policy name for the instance in the format of projects/{project}/locations/{location}/resourcePolicies/{resource_policy}",
              args: {
                name: "PLACEMENT_POLICY",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--remove-access-rules",
              description:
                "Remove existing value from access_rules list. The access rules for the instance",
              args: {
                name: "REMOVE_ACCESS_RULES",
              },
            },
            {
              name: "--remove-labels",
              description:
                "Remove existing value from map labels. Sets `remove_labels` value",
              args: {
                name: "REMOVE_LABELS",
                description: "Dict",
              },
            },
            {
              name: "--remove-maintenance-policy-exclusion-window",
              description:
                "Remove existing value from maintenance_policy_exclusion_window list. The exclusion windows for the instance. Currently limited to 1 window",
              args: {
                name: "REMOVE_MAINTENANCE_POLICY_EXCLUSION_WINDOW",
              },
            },
            {
              name: "--remove-maintenance-policy-weekly-windows",
              description:
                "Remove existing value from maintenance_policy_weekly_windows list. The weekly maintenance windows for the instance. Currently limited to 1 window",
              args: {
                name: "REMOVE_MAINTENANCE_POLICY_WEEKLY_WINDOWS",
              },
            },
            {
              name: "--request-id",
              description:
                "An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request",
              args: {
                name: "REQUEST_ID",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--update-labels",
              description:
                "Update labels value or add key value pair. Labels as key value pairs",
              args: {
                name: "UPDATE_LABELS",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
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
      name: "locations",
      description: "View Locations resources",
      hidden: true,
      subcommands: [
        {
          name: "describe",
          description: "Describe locations",
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
          args: {
            name: "LOCATION",
            description:
              "ID of the location or fully qualified identifier for the location",
          },
        },
        {
          name: "list",
          description: "List locations",
          hidden: true,
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
      name: "operations",
      description: "Manage Operation resources",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel operations",
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "delete",
          description: "Delete operations",
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "describe",
          description: "Describe operations",
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "list",
          description: "List operations",
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
            {
              name: "--location",
              description:
                "ID of the location or fully qualified identifier for the location",
              priority: 100,
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
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
          name: "wait",
          description: "Wait operations",
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
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
