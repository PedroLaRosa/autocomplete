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

const optAll: Fig.Option = {
  name: "--all",
  description:
    "Remove all bindings with this role and principal, irrespective of any conditions",
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

const optCluster: Fig.Option = {
  name: "--cluster",
  description: "Name of the Bigtable cluster",
  args: {
    name: "CLUSTER",
    description: "String",
  },
};

const optCondition: Fig.Option = {
  name: "--condition",
  description:
    "A condition to include in the binding. When the condition is explicitly specified as `None` (`--condition=None`), a binding without a condition is added. When the condition is specified and is not `None`, `--role` cannot be a basic role. Basic roles are `roles/editor`, `roles/owner`, and `roles/viewer`. For more on conditions, refer to the conditions overview guide: https://cloud.google.com/iam/docs/conditions-overview",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
  },
};

const optCondition2: Fig.Option = {
  name: "--condition",
  description:
    "The condition of the binding that you want to remove. When the condition is explicitly specified as `None` (`--condition=None`), a binding without a condition is removed. Otherwise, only a binding with a condition that exactly matches the specified condition (including the optional description) is removed. For more on conditions, refer to the conditions overview guide: https://cloud.google.com/iam/docs/conditions-overview",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
  },
};

const optConditionFromFile: Fig.Option = {
  name: "--condition-from-file",
  description:
    "Path to a local JSON or YAML file that defines the condition. To see available fields, see the help for `--condition`. Use a full or relative path to a local file containing the value of condition",
  args: {
    name: "CONDITION_FROM_FILE",
    template: "filepaths",
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

const optDeletionProtection: Fig.Option = {
  name: "--deletion-protection",
  description: "Whether the view is protected from deletion",
  args: {
    name: "DELETION_PROTECTION",
  },
};

const optDeletionProtection2: Fig.Option = {
  name: "--deletion-protection",
  description: "Once specified, the table is deletion protected",
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

const optInstance: Fig.Option = {
  name: "--instance",
  description: "Bigtable instance for the app profile",
  args: {
    name: "INSTANCE",
    description: "String",
  },
};

const optInstance2: Fig.Option = {
  name: "--instance",
  description: "Bigtable instance for the cluster",
  args: {
    name: "INSTANCE",
    description: "String",
  },
};

const optInstance3: Fig.Option = {
  name: "--instance",
  description: "Bigtable instance for the logical view",
  args: {
    name: "INSTANCE",
    description: "String",
  },
};

const optInstance4: Fig.Option = {
  name: "--instance",
  description: "Bigtable instance for the materialized view",
  args: {
    name: "INSTANCE",
    description: "String",
  },
};

const optInstance5: Fig.Option = {
  name: "--instance",
  description:
    "ID of the instance or fully qualified identifier for the instance",
  priority: 100,
  args: {
    name: "INSTANCE",
    description: "String",
  },
};

const optInstance6: Fig.Option = {
  name: "--instance",
  description: "Name of the Bigtable instance",
  args: {
    name: "INSTANCE",
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

const optNoAll: Fig.Option = {
  name: "--no-all",
  description:
    "Remove all bindings with this role and principal, irrespective of any conditions",
  hidden: true,
};

const optNoAsync: Fig.Option = {
  name: "--no-async",
  description:
    "Return immediately, without waiting for the operation in progress to complete",
  hidden: true,
};

const optNoDeletionProtection: Fig.Option = {
  name: "--no-deletion-protection",
  description: "Once specified, the table is deletion protected",
  hidden: true,
};

const optNoRowKeySchemaPreEncodedBytes: Fig.Option = {
  name: "--no-row-key-schema-pre-encoded-bytes",
  description:
    "By default, Base64 encoding is applied to all binary fields in the YAML/JSON file (for example, `encoding.delimitedBytes.delimiter`)",
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

const optRowKeySchemaDefinitionFile: Fig.Option = {
  name: "--row-key-schema-definition-file",
  description:
    "The row key schema for the table. The schema is defined in a YAML or JSON file, equivalent to the StructType protobuf message",
  args: {
    name: "ROW_KEY_SCHEMA_DEFINITION_FILE",
    description: "String",
    template: "filepaths",
  },
};

const optRowKeySchemaPreEncodedBytes: Fig.Option = {
  name: "--row-key-schema-pre-encoded-bytes",
  description:
    "By default, Base64 encoding is applied to all binary fields in the YAML/JSON file (for example, `encoding.delimitedBytes.delimiter`)",
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

const optTable: Fig.Option = {
  name: "--table",
  description: "Name of the Bigtable table",
  args: {
    name: "TABLE",
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
  name: "bigtable",
  description: "Manage your Cloud Bigtable storage",
  subcommands: [
    {
      name: "app-profiles",
      description: "Manage Cloud Bigtable app profiles",
      subcommands: [
        {
          name: "create",
          description: "Create a new Bigtable app profile",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--data-boost",
              description:
                "Use Data Boost serverless compute option, rather than standard provisioned node compute. If specified, --data-boost-compute-billing-owner is required. Specifying Data Boost compute on an app profile that uses standard provisioned node compute may cause unexpected behavior for running applications",
              priority: 100,
            },
            {
              name: "--data-boost-compute-billing-owner",
              description:
                "Specify the Data Boost compute billing owner, required if --data-boost is passed. _DATA_BOOST_COMPUTE_BILLING_OWNER_ must be (only one value is supported):",
              priority: 100,
              args: {
                name: "DATA_BOOST_COMPUTE_BILLING_OWNER",
                suggestions: ["HOST_PAYS"],
              },
            },
            {
              name: "--description",
              description: "Friendly name of the app profile",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--force",
              description: "Ignore warnings and force create",
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance,
            optLogHttp,
            {
              name: "--no-data-boost",
              description:
                "Use Data Boost serverless compute option, rather than standard provisioned node compute. If specified, --data-boost-compute-billing-owner is required. Specifying Data Boost compute on an app profile that uses standard provisioned node compute may cause unexpected behavior for running applications",
              hidden: true,
              priority: 100,
            },
            {
              name: "--no-force",
              description: "Ignore warnings and force create",
              hidden: true,
            },
            {
              name: "--no-route-any",
              description: "Use Multi Cluster Routing policy",
              hidden: true,
              priority: 100,
            },
            {
              name: "--no-row-affinity",
              description: "Use row-affinity routing for this app profile",
              hidden: true,
            },
            {
              name: "--no-standard",
              description:
                "Use standard provisioned node compute option, rather than Data Boost compute option. If specified, `--priority` is required",
              hidden: true,
            },
            {
              name: "--no-transactional-writes",
              description:
                "Allow transactional writes with a Single Cluster Routing policy",
              hidden: true,
            },
            {
              name: "--priority",
              description:
                "Specify the request priority under standard provisioned node compute capabilities. Passing this option implies standard provisioned node compute, e.g. the `--standard` option. If not specified, the app profile uses standard provisioned node compute with PRIORITY_HIGH by default. Specifying request priority on an app profile that has Data Boost serverless compute enabled changes the compute option to standard and uses the specified priority, which might cause unexpected behavior for running applications. _PRIORITY_ must be one of:",
              args: {
                name: "PRIORITY",
                suggestions: [
                  "PRIORITY_HIGH",
                  "PRIORITY_LOW",
                  "PRIORITY_MEDIUM",
                ],
              },
            },
            optProject,
            optQuiet,
            {
              name: "--restrict-to",
              description:
                "Cluster IDs to route to using the Multi Cluster Routing Policy. If unset, all clusters in the instance are eligible",
              args: {
                name: "RESTRICT_TO",
                description: "List",
              },
            },
            {
              name: "--route-any",
              description: "Use Multi Cluster Routing policy",
              priority: 100,
            },
            {
              name: "--route-to",
              description:
                "Cluster ID to route to using Single Cluster Routing policy",
              priority: 100,
              args: {
                name: "ROUTE_TO",
                description: "String",
              },
            },
            {
              name: "--row-affinity",
              description: "Use row-affinity routing for this app profile",
            },
            {
              name: "--standard",
              description:
                "Use standard provisioned node compute option, rather than Data Boost compute option. If specified, `--priority` is required",
            },
            optTraceToken,
            {
              name: "--transactional-writes",
              description:
                "Allow transactional writes with a Single Cluster Routing policy",
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "APP_PROFILE",
            description:
              "ID of the app profile or fully qualified identifier for the app profile",
          },
        },
        {
          name: "delete",
          description: "Delete a Bigtable app profile",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--force",
              description: "Ignore warnings and force delete",
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance,
            optLogHttp,
            {
              name: "--no-force",
              description: "Ignore warnings and force delete",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "APP_PROFILE",
            description:
              "ID of the app profile or fully qualified identifier for the app profile",
          },
        },
        {
          name: "describe",
          description: "Describe an existing Bigtable app profile",
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
            optInstance,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "APP_PROFILE",
            description:
              "ID of the app profile or fully qualified identifier for the app profile",
          },
        },
        {
          name: "list",
          description: "List Bigtable app profiles",
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
            optInstance5,
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
          name: "update",
          description: "Update a Bigtable app profile",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--data-boost",
              description:
                "Use Data Boost serverless compute option, rather than standard provisioned node compute. If specified, --data-boost-compute-billing-owner is required. Specifying Data Boost compute on an app profile that uses standard provisioned node compute may cause unexpected behavior for running applications",
              priority: 100,
            },
            {
              name: "--data-boost-compute-billing-owner",
              description:
                "Specify the Data Boost compute billing owner, required if --data-boost is passed. _DATA_BOOST_COMPUTE_BILLING_OWNER_ must be (only one value is supported):",
              priority: 100,
              args: {
                name: "DATA_BOOST_COMPUTE_BILLING_OWNER",
                suggestions: ["HOST_PAYS"],
              },
            },
            {
              name: "--description",
              description: "Friendly name of the app profile",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--force",
              description: "Ignore warnings and force update",
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-data-boost",
              description:
                "Use Data Boost serverless compute option, rather than standard provisioned node compute. If specified, --data-boost-compute-billing-owner is required. Specifying Data Boost compute on an app profile that uses standard provisioned node compute may cause unexpected behavior for running applications",
              hidden: true,
              priority: 100,
            },
            {
              name: "--no-force",
              description: "Ignore warnings and force update",
              hidden: true,
            },
            {
              name: "--no-route-any",
              description: "Use Multi Cluster Routing policy",
              hidden: true,
              priority: 100,
            },
            {
              name: "--no-row-affinity",
              description: "Use row-affinity routing for this app profile",
              hidden: true,
            },
            {
              name: "--no-standard",
              description:
                "Use standard provisioned node compute option, rather than Data Boost compute option. If specified, `--priority` is required",
              hidden: true,
            },
            {
              name: "--no-transactional-writes",
              description:
                "Allow transactional writes with a Single Cluster Routing policy",
              hidden: true,
            },
            {
              name: "--priority",
              description:
                "Specify the request priority under standard provisioned node compute capabilities. Passing this option implies standard provisioned node compute, e.g. the `--standard` option. If not specified, the app profile uses standard provisioned node compute with PRIORITY_HIGH by default. Specifying request priority on an app profile that has Data Boost serverless compute enabled changes the compute option to standard and uses the specified priority, which might cause unexpected behavior for running applications. _PRIORITY_ must be one of:",
              args: {
                name: "PRIORITY",
                suggestions: [
                  "PRIORITY_HIGH",
                  "PRIORITY_LOW",
                  "PRIORITY_MEDIUM",
                ],
              },
            },
            optProject,
            optQuiet,
            {
              name: "--restrict-to",
              description:
                "Cluster IDs to route to using the Multi Cluster Routing Policy. If unset, all clusters in the instance are eligible",
              args: {
                name: "RESTRICT_TO",
                description: "List",
              },
            },
            {
              name: "--route-any",
              description: "Use Multi Cluster Routing policy",
              priority: 100,
            },
            {
              name: "--route-to",
              description:
                "Cluster ID to route to using Single Cluster Routing policy",
              priority: 100,
              args: {
                name: "ROUTE_TO",
                description: "String",
              },
            },
            {
              name: "--row-affinity",
              description: "Use row-affinity routing for this app profile",
            },
            {
              name: "--standard",
              description:
                "Use standard provisioned node compute option, rather than Data Boost compute option. If specified, `--priority` is required",
            },
            optTraceToken,
            {
              name: "--transactional-writes",
              description:
                "Allow transactional writes with a Single Cluster Routing policy",
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "APP_PROFILE",
            description:
              "ID of the app profile or fully qualified identifier for the app profile",
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
      name: "authorized-views",
      description: "Manage Cloud Bigtable Authorized Views",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "Add an IAM policy binding to a Cloud Bigtable authorized view",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCondition,
            optConditionFromFile,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance6,
            optLogHttp,
            optMember,
            optProject,
            optQuiet,
            optRole,
            optTable,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTHORIZED_VIEW",
            description:
              "ID of the authorized-view or fully qualified identifier for the authorized-view",
          },
        },
        {
          name: "create",
          description: "Create a new Cloud Bigtable authorized view",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--definition-file",
              description:
                "Path to a JSON or YAML file containing a valid authorized view protobuf",
              args: {
                name: "DEFINITION_FILE",
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
            optInstance6,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-pre-encoded",
              description:
                'By default, Base64 encoding is applied to all binary fields ("rowPrefixes", "qualifiers" and "qualifierPrefixes") in the JSON or YAML definition file',
              hidden: true,
            },
            {
              name: "--pre-encoded",
              description:
                'By default, Base64 encoding is applied to all binary fields ("rowPrefixes", "qualifiers" and "qualifierPrefixes") in the JSON or YAML definition file',
            },
            optProject,
            optQuiet,
            optTable,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTHORIZED_VIEW",
            description:
              "ID of the authorized-view or fully qualified identifier for the authorized-view",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Bigtable authorized view",
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
            optInstance6,
            optLogHttp,
            optProject,
            optQuiet,
            optTable,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTHORIZED_VIEW",
            description:
              "ID of the authorized-view or fully qualified identifier for the authorized-view",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Bigtable authorized view",
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
            optInstance6,
            optLogHttp,
            optProject,
            optQuiet,
            optTable,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTHORIZED_VIEW",
            description:
              "ID of the authorized-view or fully qualified identifier for the authorized-view",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get an IAM policy on a Cloud Bigtable authorized view",
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
            optInstance6,
            optLimit,
            optLogHttp,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTable,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTHORIZED_VIEW",
            description:
              "ID of the authorized-view or fully qualified identifier for the authorized-view",
          },
        },
        {
          name: "list",
          description: "List all authorized views of a Cloud Bigtable table",
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
            optInstance6,
            optLimit,
            optLogHttp,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            {
              name: "--table",
              description:
                "ID of the table or fully qualified identifier for the table",
              priority: 100,
              args: {
                name: "TABLE",
                description: "String",
              },
            },
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding from a Cloud Bigtable authorized view",
          options: [
            optAccessTokenFile,
            optAccount,
            optAll,
            optBillingProject,
            optCondition2,
            optConditionFromFile,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance6,
            optLogHttp,
            optMember2,
            optNoAll,
            optProject,
            optQuiet,
            optRole2,
            optTable,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTHORIZED_VIEW",
            description:
              "ID of the authorized-view or fully qualified identifier for the authorized-view",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set an IAM policy on a Cloud Bigtable authorized view",
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
            optInstance6,
            optLogHttp,
            optProject,
            optQuiet,
            optTable,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "AUTHORIZED_VIEW",
              description:
                "ID of the authorized-view or fully qualified identifier for the authorized-view",
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
          description: "Update an existing Cloud Bigtable authorized view",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--definition-file",
              description:
                "Path to a JSON or YAML file containing a valid authorized view protobuf",
              args: {
                name: "DEFINITION_FILE",
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
            {
              name: "--ignore-warnings",
              description:
                "If true, changes that make the authorized view more restrictive are allowed",
            },
            optImpersonateServiceAccount,
            optInstance6,
            {
              name: "--interactive",
              description:
                "If provided, a diff is displayed with a prompt to proceed or cancel the update. Enabled by default, use *--no-interactive* to disable",
            },
            optLogHttp,
            optNoAsync,
            {
              name: "--no-ignore-warnings",
              description:
                "If true, changes that make the authorized view more restrictive are allowed",
              hidden: true,
            },
            {
              name: "--no-interactive",
              description:
                "If provided, a diff is displayed with a prompt to proceed or cancel the update",
              hidden: true,
            },
            {
              name: "--no-pre-encoded",
              description:
                'By default, Base64 encoding is applied to all binary fields ("rowPrefixes", "qualifiers" and "qualifierPrefixes") in the JSON or YAML definition file',
              hidden: true,
            },
            {
              name: "--pre-encoded",
              description:
                'By default, Base64 encoding is applied to all binary fields ("rowPrefixes", "qualifiers" and "qualifierPrefixes") in the JSON or YAML definition file',
            },
            optProject,
            optQuiet,
            optTable,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTHORIZED_VIEW",
            description:
              "ID of the authorized-view or fully qualified identifier for the authorized-view",
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
      name: "backups",
      description: "Manage Cloud Bigtable backups",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add an IAM policy binding to a Cloud Bigtable Backup",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            optCondition,
            optConditionFromFile,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance6,
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
            name: "BACKUP",
            description:
              "ID of the backup or fully qualified identifier for the backup",
          },
        },
        {
          name: "copy",
          description: "Copy a Cloud Bigtable backup to a new backup",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--destination-backup",
              description:
                "ID of the backup or fully qualified identifier for the backup",
              priority: 100,
              args: {
                name: "DESTINATION_BACKUP",
                description: "String",
              },
            },
            {
              name: "--destination-cluster",
              description: "Bigtable cluster for the backup",
              args: {
                name: "DESTINATION_CLUSTER",
                description: "String",
              },
            },
            {
              name: "--destination-instance",
              description: "Bigtable instance for the backup",
              args: {
                name: "DESTINATION_INSTANCE",
                description: "String",
              },
            },
            {
              name: "--destination-project",
              description:
                "Project ID of the Google Cloud project for the backup",
              args: {
                name: "DESTINATION_PROJECT",
                description: "String",
              },
            },
            {
              name: "--expiration-date",
              description:
                "Expiration time of the backup, must be at least 6 hours and at most 30 days from the time the source backup is created. See `$ gcloud topic datetimes` for information on date/time formats",
              args: {
                name: "EXPIRATION_DATE",
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
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--retention-period",
              description:
                "Retention period of the backup relative from now, must be at least 6 hours and at most 30 days from the time the source backup is created. See `$ gcloud topic datetimes` for information on duration formats",
              args: {
                name: "RETENTION_PERIOD",
                description: "String",
              },
            },
            {
              name: "--source-backup",
              description:
                "ID of the backup or fully qualified identifier for the backup",
              priority: 100,
              args: {
                name: "SOURCE_BACKUP",
                description: "String",
              },
            },
            {
              name: "--source-cluster",
              description: "Bigtable cluster for the backup",
              args: {
                name: "SOURCE_CLUSTER",
                description: "String",
              },
            },
            {
              name: "--source-instance",
              description: "Bigtable instance for the backup",
              args: {
                name: "SOURCE_INSTANCE",
                description: "String",
              },
            },
            {
              name: "--source-project",
              description:
                "Project ID of the Google Cloud project for the backup",
              args: {
                name: "SOURCE_PROJECT",
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
          description: "Creates a backup of a Cloud Bigtable table",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--backup-type",
              description:
                "Type of the backup; whether the backup is a standard backup or a hot backup. _BACKUP_TYPE_ must be one of: *backup-type-unspecified*, *hot*, *standard*",
              args: {
                name: "BACKUP_TYPE",
                suggestions: ["backup-type-unspecified", "hot", "standard"],
              },
            },
            optBillingProject,
            optCluster,
            optConfiguration,
            {
              name: "--expiration-date",
              description:
                "Absolute expiration time of the backup. From the time the request is received, must be: - At least 6 hours in the future - At most 90 days in the future",
              args: {
                name: "EXPIRATION_DATE",
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
            {
              name: "--hot-to-standard-time",
              description:
                "Time at which a hot backup will be converted to a standard backup relative from now; must be: - At least 24 hours",
              args: {
                name: "HOT_TO_STANDARD_TIME",
                description: "String",
              },
            },
            optImpersonateServiceAccount,
            optInstance6,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--retention-period",
              description:
                "Retention period of the backup relative from now; must be: - At least 6 hours - At most 90 days",
              args: {
                name: "RETENTION_PERIOD",
                description: "String",
              },
            },
            {
              name: "--table",
              description:
                "ID of the table from which the backup will be created",
              priority: 100,
              args: {
                name: "TABLE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP",
            description:
              "ID of the backup or fully qualified identifier for the backup",
          },
        },
        {
          name: "delete",
          description: "Delete an existing backup",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance6,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP",
            description:
              "ID of the backup or fully qualified identifier for the backup",
          },
        },
        {
          name: "describe",
          description: "Retrieves information about a backup",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance6,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP",
            description:
              "ID of the backup or fully qualified identifier for the backup",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get an IAM policy on a Cloud Bigtable Backup",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
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
            optInstance6,
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
            name: "BACKUP",
            description:
              "ID of the backup or fully qualified identifier for the backup",
          },
        },
        {
          name: "list",
          description: "List existing Bigtable backups",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--cluster",
              description:
                "ID of the cluster or fully qualified identifier for the cluster",
              priority: 100,
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
            optInstance5,
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
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding from a Cloud Bigtable Backup",
          options: [
            optAccessTokenFile,
            optAccount,
            optAll,
            optBillingProject,
            optCluster,
            optCondition2,
            optConditionFromFile,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance6,
            optLogHttp,
            optMember2,
            optNoAll,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP",
            description:
              "ID of the backup or fully qualified identifier for the backup",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set an IAM policy on a Cloud Bigtable Backup",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance6,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "BACKUP",
              description:
                "ID of the backup or fully qualified identifier for the backup",
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
          description:
            "Update a backup, only supported for the following fields: --expiration-date and --retention-period",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCluster,
            optConfiguration,
            {
              name: "--expiration-date",
              description:
                "Absolute expiration time of the backup; must be at least 6 hours and at most 90 days from backup creation time. See `$ gcloud topic datetimes` for information on date/time formats. See `$ gcloud bigtable backups describe` for creation time",
              args: {
                name: "EXPIRATION_DATE",
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
            {
              name: "--hot-to-standard-time",
              description:
                "Time at which a hot backup will be converted to a standard backup; must be at least 24 hours from backup creation time. Only applies for hot backups. See `$ gcloud topic datetimes` for information on date/time formats. See `$ gcloud bigtable backups describe` for creation time",
              args: {
                name: "HOT_TO_STANDARD_TIME",
                description: "String",
              },
            },
            optImpersonateServiceAccount,
            optInstance6,
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--retention-period",
              description:
                "Retention period of the backup relative from now; must be at least 6 hours and at most 90 days from backup creation time. See `$ gcloud topic datetimes` for information on duration formats. See `$ gcloud bigtable backups describe` for creation time",
              args: {
                name: "RETENTION_PERIOD",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BACKUP",
            description:
              "ID of the backup or fully qualified identifier for the backup",
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
      description: "Manage Cloud Bigtable clusters",
      subcommands: [
        {
          name: "create",
          description: "Create a bigtable cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--autoscaling-cpu-target",
              description:
                "The target CPU utilization percentage for autoscaling. Accepted values are from 10 to 80",
              priority: 100,
              args: {
                name: "AUTOSCALING_CPU_TARGET",
                description: "Int",
              },
            },
            {
              name: "--autoscaling-max-nodes",
              description: "The maximum number of nodes for autoscaling",
              priority: 100,
              args: {
                name: "AUTOSCALING_MAX_NODES",
                description: "Int",
              },
            },
            {
              name: "--autoscaling-min-nodes",
              description: "The minimum number of nodes for autoscaling",
              priority: 100,
              args: {
                name: "AUTOSCALING_MIN_NODES",
                description: "Int",
              },
            },
            {
              name: "--autoscaling-storage-target",
              description:
                "The target storage utilization gibibytes per node for autoscaling. Accepted values are from 2560 to 5120 for SSD clusters and 8192 to 16384 for HDD clusters",
              args: {
                name: "AUTOSCALING_STORAGE_TARGET",
                description: "Int",
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
            optInstance2,
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
              description: "The KMS keyring id of the key",
              args: {
                name: "KMS_KEYRING",
                description: "String",
              },
            },
            {
              name: "--kms-location",
              description: "The Cloud location for the key",
              args: {
                name: "KMS_LOCATION",
                description: "String",
              },
            },
            {
              name: "--kms-project",
              description: "The Cloud project id for the key",
              args: {
                name: "KMS_PROJECT",
                description: "String",
              },
            },
            optLogHttp,
            optNoAsync,
            {
              name: "--node-scaling-factor",
              description:
                "Node scaling factor for the cluster. _NODE_SCALING_FACTOR_ must be one of: *node-scaling-factor-1x*, *node-scaling-factor-2x*",
              args: {
                name: "NODE_SCALING_FACTOR",
                suggestions: [
                  "node-scaling-factor-1x",
                  "node-scaling-factor-2x",
                ],
              },
            },
            {
              name: "--num-nodes",
              description: "Number of nodes to serve",
              args: {
                name: "NUM_NODES",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--zone",
              description:
                "ID of the zone where the cluster is located. Supported zones are listed at https://cloud.google.com/bigtable/docs/locations",
              priority: 100,
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
          description: "Delete a bigtable cluster",
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
            optInstance2,
            optLogHttp,
            optProject,
            optQuiet,
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
          description: "Describe an existing Bigtable cluster",
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
            optInstance2,
            optLogHttp,
            optProject,
            optQuiet,
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
          description: "List existing Bigtable clusters",
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
            {
              name: "--instances",
              description:
                "IDs of the instances or fully qualified identifiers for the instances",
              priority: 100,
              args: {
                name: "INSTANCES",
                description: "List",
              },
            },
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
          name: "update",
          description: "Update a Bigtable cluster's number of nodes",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--autoscaling-cpu-target",
              description:
                "The target CPU utilization percentage for autoscaling. Accepted values are from 10 to 80",
              args: {
                name: "AUTOSCALING_CPU_TARGET",
                description: "Int",
              },
            },
            {
              name: "--autoscaling-max-nodes",
              description: "The maximum number of nodes for autoscaling",
              args: {
                name: "AUTOSCALING_MAX_NODES",
                description: "Int",
              },
            },
            {
              name: "--autoscaling-min-nodes",
              description: "The minimum number of nodes for autoscaling",
              args: {
                name: "AUTOSCALING_MIN_NODES",
                description: "Int",
              },
            },
            {
              name: "--autoscaling-storage-target",
              description:
                "The target storage utilization gibibytes per node for autoscaling. Accepted values are from 2560 to 5120 for SSD clusters and 8192 to 16384 for HDD clusters",
              args: {
                name: "AUTOSCALING_STORAGE_TARGET",
                description: "Int",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--disable-autoscaling",
              description:
                "Set this flag and --num-nodes to disable autoscaling. If autoscaling is currently not enabled, setting this flag does nothing",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance2,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-disable-autoscaling",
              description:
                "Set this flag and --num-nodes to disable autoscaling. If autoscaling is currently not enabled, setting this flag does nothing",
              hidden: true,
            },
            {
              name: "--num-nodes",
              description: "Number of nodes to serve",
              priority: 100,
              args: {
                name: "NUM_NODES",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
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
      name: "hot-tablets",
      description: "Manage Cloud Bigtable hot tablets",
      subcommands: [
        {
          name: "list",
          description: "List hot tablets in a Cloud Bigtable cluster",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--end-time",
              description:
                "End time of the time range to search for hot tablets. See $ gcloud topic datetimes for information on time formats",
              args: {
                name: "END_TIME",
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
            optInstance2,
            optLimit,
            optLogHttp,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            {
              name: "--start-time",
              description:
                "Start time of the time range to search for hot tablets. See $ gcloud topic datetimes for information on time formats",
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
      name: "instances",
      description: "Manage Cloud Bigtable instances",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add an IAM policy binding to a Cloud Bigtable instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCondition,
            optConditionFromFile,
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
            optMember,
            optProject,
            optQuiet,
            optRole,
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
          name: "create",
          description: "Create a new Bigtable instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--cluster",
              description: "(DEPRECATED) ID of the cluster",
              deprecated: true,
              args: {
                name: "CLUSTER",
                description: "String",
              },
            },
            {
              name: "--cluster-config",
              description:
                "*Repeatable*. Specify cluster config as a key-value dictionary",
              args: {
                name: "id=ID,zone=ZONE,nodes=NODES,node-scaling-factor=NODE_SCALING_FACTOR,kms-key=KMS_KEY,autoscaling-min-nodes=AUTOSCALING_MIN_NODES,autoscaling-max-nodes=AUTOSCALING_MAX_NODES,autoscaling-cpu-target=AUTOSCALING_CPU_TARGET,autoscaling-storage-target=AUTOSCALING_STORAGE_TARGET",
                description: "Dict",
              },
            },
            {
              name: "--cluster-num-nodes",
              description: "(DEPRECATED) Number of nodes to serve",
              deprecated: true,
              args: {
                name: "CLUSTER_NUM_NODES",
                description: "Int",
              },
            },
            {
              name: "--cluster-storage-type",
              description:
                "Storage class for the cluster. _CLUSTER_STORAGE_TYPE_ must be one of: *hdd*, *ssd*",
              args: {
                name: "CLUSTER_STORAGE_TYPE",
                suggestions: ["hdd", "ssd"],
              },
            },
            {
              name: "--cluster-zone",
              description:
                "(DEPRECATED) ID of the zone where the cluster is located. Supported zones are listed at https://cloud.google.com/bigtable/docs/locations",
              deprecated: true,
              args: {
                name: "CLUSTER_ZONE",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--display-name",
              description: "Friendly name of the instance",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--edition",
              description:
                "The edition of the instance. _EDITION_ must be one of: *ENTERPRISE*, *ENTERPRISE_PLUS*",
              args: {
                name: "EDITION",
                description: "String",
                suggestions: ["ENTERPRISE", "ENTERPRISE_PLUS"],
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
              name: "--instance-type",
              description: "(DEPRECATED) The type of instance to create",
              deprecated: true,
              args: {
                name: "INSTANCE_TYPE",
                suggestions: ["DEVELOPMENT", "PRODUCTION"],
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "delete",
          description: "Delete an existing Bigtable instance",
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
            name: "INSTANCE",
            description:
              "IDs of the instances or fully qualified identifiers for the instances",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Describe an existing Bigtable instance",
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Bigtable instance",
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance",
          },
        },
        {
          name: "list",
          description: "List existing Bigtable instances",
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
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding from a Cloud Bigtable instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAll,
            optBillingProject,
            optCondition2,
            optConditionFromFile,
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
            optMember2,
            optNoAll,
            optProject,
            optQuiet,
            optRole2,
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
          name: "set-iam-policy",
          description: "Set IAM policy for an instance",
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
              name: "INSTANCE",
              description:
                "ID of the instance or fully qualified identifier for the instance",
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
          name: "tables",
          description: "Query Cloud Bigtable tables",
          subcommands: [
            {
              name: "add-iam-policy-binding",
              description:
                "Add an IAM policy binding to a Cloud Bigtable table",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optCondition,
                optConditionFromFile,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optInstance6,
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
                name: "TABLE",
                description:
                  "ID of the table or fully qualified identifier for the table",
              },
            },
            {
              name: "create",
              description: "Create a new Cloud Bigtable table",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--automated-backup-locations",
                  description:
                    "List of Cloud Bigtable zones where automated backups are allowed to be created. If empty, automated backups will be created in all zones of the instance. Locations are in the format `projects/{project}/locations/{zone}`. Setting this flag will enable automated backup for the table. If automated backup retention period is not specified, it defaults to 7 days",
                  args: {
                    name: "LOCATION",
                    description: "List",
                  },
                },
                {
                  name: "--automated-backup-retention-period",
                  description:
                    "The retention period of automated backup in the format of `30d` for 30 days. Min retention period is `3d` and max is `90d`. Setting this flag will enable automated backup for the table. If automated backup retention period is not specified, it defaults to 7 days",
                  args: {
                    name: "AUTOMATED_BACKUP_RETENTION_PERIOD",
                    description: "String",
                  },
                },
                optBillingProject,
                {
                  name: "--change-stream-retention-period",
                  description:
                    "The length of time to retain change stream data for the table, in the range of [1 day, 7 days]. Acceptable units are days (d), hours (h), minutes (m), and seconds (s). Passing in a value for this option enables a change stream for the table. Examples: `5d` or `48h`",
                  args: {
                    name: "CHANGE_STREAM_RETENTION_PERIOD",
                    description: "String",
                  },
                },
                {
                  name: "--column-families",
                  description:
                    'A double-quote (`"`) wrapped list of family name and corresponding garbage collection rules concatenated by `:`, where the rules are optional. For example: `"family_1,family_2:maxage=5d&&maxversions=2,family_3:maxage=10d||maxversions=5"`',
                  priority: 100,
                  args: {
                    name: "COLUMN_FAMILIES",
                    description: "List",
                  },
                },
                optConfiguration,
                optDeletionProtection2,
                {
                  name: "--enable-automated-backup",
                  description:
                    "Once set, enables the default automated backup policy (retention_period=7d, frequency=1d) for the table",
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optInstance6,
                optLogHttp,
                optNoDeletionProtection,
                optNoRowKeySchemaPreEncodedBytes,
                optProject,
                optQuiet,
                optRowKeySchemaDefinitionFile,
                optRowKeySchemaPreEncodedBytes,
                {
                  name: "--splits",
                  description:
                    "Row keys where the table should initially be split. For example: `car,key`",
                  args: {
                    name: "SPLITS",
                    description: "List",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "TABLE",
                description:
                  "ID of the table or fully qualified identifier for the table",
              },
            },
            {
              name: "delete",
              description: "Delete a Cloud Bigtable table",
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
                optInstance6,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "TABLE",
                description:
                  "ID of the table or fully qualified identifier for the table",
              },
            },
            {
              name: "describe",
              description: "Retrieve information about a table",
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
                optInstance6,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--view",
                  description:
                    "The view to be applied to the returned table's fields. _VIEW_ must be one of:",
                  args: {
                    name: "VIEW",
                    suggestions: [
                      "encryption",
                      "full",
                      "name",
                      "replication",
                      "schema",
                      "stats",
                    ],
                  },
                },
              ],
              args: {
                name: "TABLE",
                description:
                  "ID of the table or fully qualified identifier for the table",
              },
            },
            {
              name: "get-iam-policy",
              description: "Get an IAM policy on a Cloud Bigtable table",
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
                optInstance6,
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
                name: "TABLE",
                description:
                  "ID of the table or fully qualified identifier for the table",
              },
            },
            {
              name: "list",
              description: "List existing Bigtable instance tables",
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
                {
                  name: "--instances",
                  description: "ID of the instances",
                  priority: 100,
                  args: {
                    name: "INSTANCE",
                    description: "List",
                  },
                },
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
              name: "remove-iam-policy-binding",
              description:
                "Remove an IAM policy binding from a Cloud Bigtable table",
              options: [
                optAccessTokenFile,
                optAccount,
                optAll,
                optBillingProject,
                optCondition2,
                optConditionFromFile,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optInstance6,
                optLogHttp,
                optMember2,
                optNoAll,
                optProject,
                optQuiet,
                optRole2,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "TABLE",
                description:
                  "ID of the table or fully qualified identifier for the table",
              },
            },
            {
              name: "restore",
              description: "Restore a Cloud Bigtable backup to a new table",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--destination",
                  description:
                    "ID of the table or fully qualified identifier for the table",
                  priority: 100,
                  args: {
                    name: "DESTINATION",
                    description: "String",
                  },
                },
                {
                  name: "--destination-instance",
                  description: "Name of the Bigtable instance",
                  args: {
                    name: "DESTINATION_INSTANCE",
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
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                {
                  name: "--source",
                  description:
                    "ID of the backup or fully qualified identifier for the backup",
                  priority: 100,
                  args: {
                    name: "SOURCE",
                    description: "String",
                  },
                },
                {
                  name: "--source-cluster",
                  description: "Name of the Bigtable cluster",
                  args: {
                    name: "SOURCE_CLUSTER",
                    description: "String",
                  },
                },
                {
                  name: "--source-instance",
                  description: "Name of the Bigtable instance",
                  args: {
                    name: "SOURCE_INSTANCE",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "set-iam-policy",
              description: "Set an IAM policy on a Cloud Bigtable table",
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
                optInstance6,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: [
                {
                  name: "TABLE",
                  description:
                    "ID of the table or fully qualified identifier for the table",
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
              name: "undelete",
              description: "Undelete a previously deleted Cloud Bigtable table",
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
                optInstance6,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "TABLE",
                description:
                  "ID of the table or fully qualified identifier for the table",
              },
            },
            {
              name: "update",
              description: "Update an existing Cloud Bigtable table",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                {
                  name: "--automated-backup-locations",
                  description:
                    "List of Cloud Bigtable zones where automated backups are allowed to be created. If empty, automated backups will be created in all zones of the instance. Locations are in the format `projects/{project}/locations/{zone}`. Setting this flag will enable automated backup for the table",
                  args: {
                    name: "LOCATION",
                    description: "List",
                  },
                },
                {
                  name: "--automated-backup-retention-period",
                  description:
                    "The retention period of automated backup in the format of `30d` for 30 days. Min retention period is `3d` and max is `90d`. Setting this flag will enable automated backup for the table",
                  args: {
                    name: "AUTOMATED_BACKUP_RETENTION_PERIOD",
                    description: "String",
                  },
                },
                optBillingProject,
                {
                  name: "--change-stream-retention-period",
                  description:
                    "The length of time to retain change stream data for the table, in the range of [1 day, 7 days]. Acceptable units are days (d), hours (h), minutes (m), and seconds (s). If not already specified, enables a change stream for the table. Examples: `5d` or `48h`",
                  args: {
                    name: "CHANGE_STREAM_RETENTION_PERIOD",
                    description: "String",
                  },
                },
                {
                  name: "--clear-automated-backup-locations",
                  description:
                    "Empty the automated backup locations list if populated",
                },
                {
                  name: "--clear-change-stream-retention-period",
                  description:
                    "This disables the change stream and eventually removes the change stream data",
                },
                {
                  name: "--clear-row-key-schema",
                  description:
                    "Whether to clear the row key schema in the updated table",
                },
                optConfiguration,
                optDeletionProtection2,
                {
                  name: "--disable-automated-backup",
                  description:
                    "Once set, disables automated backup policy for the table",
                },
                {
                  name: "--enable-automated-backup",
                  description:
                    "Once set, enables the default automated backup policy (retention_period=7d, frequency=1d) for the table. Note: If a table has automated backup enabled, this flag resets it to the default policy",
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optInstance6,
                optLogHttp,
                optNoAsync,
                {
                  name: "--no-clear-row-key-schema",
                  description:
                    "Whether to clear the row key schema in the updated table",
                  hidden: true,
                },
                optNoDeletionProtection,
                optNoRowKeySchemaPreEncodedBytes,
                optProject,
                optQuiet,
                optRowKeySchemaDefinitionFile,
                optRowKeySchemaPreEncodedBytes,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "TABLE",
                description:
                  "ID of the table or fully qualified identifier for the table",
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
          description: "Modify an existing Bigtable instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--display-name",
              description: "Friendly name of the instance",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--edition",
              description:
                "The edition of the instance. _EDITION_ must be one of: *ENTERPRISE*, *ENTERPRISE_PLUS*",
              args: {
                name: "EDITION",
                description: "String",
                suggestions: ["ENTERPRISE", "ENTERPRISE_PLUS"],
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
          name: "upgrade",
          description:
            "Upgrade an existing instance's type from development to production",
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
      name: "logical-views",
      description: "Manage Bigtable logical views",
      subcommands: [
        {
          name: "create",
          description: "Create a new Bigtable logical view",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optDeletionProtection,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance3,
            optLogHttp,
            optNoAsync,
            optProject,
            {
              name: "--query",
              description: "The query of the view",
              priority: 100,
              args: {
                name: "QUERY",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "LOGICAL_VIEW",
            description:
              "ID of the logical view or fully qualified identifier for the logical view",
          },
        },
        {
          name: "delete",
          description: "Delete a Bigtable logical view",
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
            optInstance3,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "LOGICAL_VIEW",
            description:
              "ID of the logical view or fully qualified identifier for the logical view",
          },
        },
        {
          name: "describe",
          description: "Describe an existing Bigtable logical view",
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
            optInstance3,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "LOGICAL_VIEW",
            description:
              "ID of the logical view or fully qualified identifier for the logical view",
          },
        },
        {
          name: "list",
          description: "List existing Bigtable logical views",
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
            optInstance5,
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
          name: "update",
          description: "Update a Bigtable logical view",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optDeletionProtection,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance3,
            optLogHttp,
            optNoAsync,
            optProject,
            {
              name: "--query",
              description: "The query of the view",
              args: {
                name: "QUERY",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "LOGICAL_VIEW",
            description:
              "ID of the logical view or fully qualified identifier for the logical view",
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
      name: "materialized-views",
      description: "Manage Bigtable materialized views",
      subcommands: [
        {
          name: "create",
          description: "Create a new Bigtable materialized view",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optDeletionProtection,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance4,
            optLogHttp,
            optNoAsync,
            optProject,
            {
              name: "--query",
              description: "The query of the view",
              priority: 100,
              args: {
                name: "QUERY",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MATERIALIZED_VIEW",
            description:
              "ID of the materialized view or fully qualified identifier for the materialized view",
          },
        },
        {
          name: "delete",
          description: "Delete a Bigtable materialized view",
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
            optInstance4,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MATERIALIZED_VIEW",
            description:
              "ID of the materialized view or fully qualified identifier for the materialized view",
          },
        },
        {
          name: "describe",
          description: "Describe an existing Bigtable materialized view",
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
            optInstance4,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--view",
              description:
                "Specifies what type of information to return about the view. _VIEW_ must be one of: *full*, *replication*, *schema*",
              args: {
                name: "VIEW",
                suggestions: ["full", "replication", "schema"],
              },
            },
          ],
          args: {
            name: "MATERIALIZED_VIEW",
            description:
              "ID of the materialized view or fully qualified identifier for the materialized view",
          },
        },
        {
          name: "list",
          description: "List existing Bigtable materialized views",
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
            optInstance5,
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
                "Specifies what type of information to return about the view. _VIEW_ must be one of: *full*, *replication*, *schema*",
              args: {
                name: "VIEW",
                suggestions: ["full", "replication", "schema"],
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update a Bigtable materialized view",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--deletion-protection",
              description: "Whether the view is protected from deletion",
              priority: 100,
              args: {
                name: "DELETION_PROTECTION",
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
            optInstance4,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MATERIALIZED_VIEW",
            description:
              "ID of the materialized view or fully qualified identifier for the materialized view",
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
      description: "Manage Cloud Bigtable operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Cloud Bigtable operation",
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "list",
          description: "List Cloud Bigtable operations",
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
            optInstance5,
            optLimit,
            optLogHttp,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            {
              name: "--return-partial-success",
              description:
                "If true, operations that are reachable are returned as normal, and those that are unreachable are returned in the `unreachable` field of the response. If false, the command will fail if any location is unreachable. Enabled by default, use *--no-return-partial-success* to disable",
              args: {
                name: "RETURN_PARTIAL_SUCCESS",
                description: "Int",
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
      name: "schema-bundles",
      description: "Manage Bigtable schema bundles",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add an IAM policy binding to a Bigtable schema bundle",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCondition,
            optConditionFromFile,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance6,
            optLogHttp,
            optMember,
            optProject,
            optQuiet,
            optRole,
            optTable,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SCHEMA_BUNDLE",
            description:
              "ID of the schema-bundle or fully qualified identifier for the schema-bundle",
          },
        },
        {
          name: "create",
          description: "Create a new Bigtable schema bundle",
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
            optInstance6,
            optLogHttp,
            optNoAsync,
            optProject,
            {
              name: "--proto-descriptors-file",
              description:
                "Path of a file that contains a protobuf-serialized `google.protobuf.FileDescriptorSet` message. If specified, the schema bundle contains the protobuf schema. To generate the file, install and run `protoc` with the following command:",
              priority: 100,
              args: {
                name: "PROTO_DESCRIPTORS_FILE",
                template: "filepaths",
              },
            },
            optQuiet,
            optTable,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SCHEMA_BUNDLE",
            description:
              "ID of the schema-bundle or fully qualified identifier for the schema-bundle",
          },
        },
        {
          name: "delete",
          description: "Delete a Bigtable schema bundle",
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
            optInstance6,
            optLogHttp,
            optProject,
            optQuiet,
            optTable,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SCHEMA_BUNDLE",
            description:
              "ID of the schema-bundle or fully qualified identifier for the schema-bundle",
          },
        },
        {
          name: "describe",
          description: "Describe a Bigtable schema bundle",
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
            optInstance6,
            optLogHttp,
            optProject,
            optQuiet,
            optTable,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SCHEMA_BUNDLE",
            description:
              "ID of the schema-bundle or fully qualified identifier for the schema-bundle",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get an IAM policy on a Bigtable schema bundle",
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
            optInstance6,
            optLimit,
            optLogHttp,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTable,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SCHEMA_BUNDLE",
            description:
              "ID of the schema-bundle or fully qualified identifier for the schema-bundle",
          },
        },
        {
          name: "list",
          description: "List all schema bundles of a Bigtable table",
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
            optInstance6,
            optLimit,
            optLogHttp,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            {
              name: "--table",
              description:
                "ID of the table or fully qualified identifier for the table",
              priority: 100,
              args: {
                name: "TABLE",
                description: "String",
              },
            },
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding from a Bigtable schema bundle",
          options: [
            optAccessTokenFile,
            optAccount,
            optAll,
            optBillingProject,
            optCondition2,
            optConditionFromFile,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance6,
            optLogHttp,
            optMember2,
            optNoAll,
            optProject,
            optQuiet,
            optRole2,
            optTable,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SCHEMA_BUNDLE",
            description:
              "ID of the schema-bundle or fully qualified identifier for the schema-bundle",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set an IAM policy on a Bigtable schema bundle",
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
            optInstance6,
            optLogHttp,
            optProject,
            optQuiet,
            optTable,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "SCHEMA_BUNDLE",
              description:
                "ID of the schema-bundle or fully qualified identifier for the schema-bundle",
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
          description: "Update an existing Bigtable schema bundle",
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
            {
              name: "--ignore-warnings",
              description:
                "If true, backwards incompatible changes will be allowed",
            },
            optImpersonateServiceAccount,
            optInstance6,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-ignore-warnings",
              description:
                "If true, backwards incompatible changes will be allowed",
              hidden: true,
            },
            optProject,
            {
              name: "--proto-descriptors-file",
              description:
                "Path of a file that contains a protobuf-serialized `google.protobuf.FileDescriptorSet` message. If specified, the schema bundle contains the protobuf schema. To generate the file, install and run `protoc` with the following command:",
              priority: 100,
              args: {
                name: "PROTO_DESCRIPTORS_FILE",
                template: "filepaths",
              },
            },
            optQuiet,
            optTable,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SCHEMA_BUNDLE",
            description:
              "ID of the schema-bundle or fully qualified identifier for the schema-bundle",
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
      name: "tables",
      description: "Query Cloud Bigtable tables",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add an IAM policy binding to a Cloud Bigtable table",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optCondition,
            optConditionFromFile,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance6,
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
            name: "TABLE",
            description:
              "ID of the table or fully qualified identifier for the table",
          },
        },
        {
          name: "create",
          description: "Create a new Cloud Bigtable table",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--automated-backup-locations",
              description:
                "List of Cloud Bigtable zones where automated backups are allowed to be created. If empty, automated backups will be created in all zones of the instance. Locations are in the format `projects/{project}/locations/{zone}`. Setting this flag will enable automated backup for the table. If automated backup retention period is not specified, it defaults to 7 days",
              args: {
                name: "LOCATION",
                description: "List",
              },
            },
            {
              name: "--automated-backup-retention-period",
              description:
                "The retention period of automated backup in the format of `30d` for 30 days. Min retention period is `3d` and max is `90d`. Setting this flag will enable automated backup for the table. If automated backup retention period is not specified, it defaults to 7 days",
              args: {
                name: "AUTOMATED_BACKUP_RETENTION_PERIOD",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--change-stream-retention-period",
              description:
                "The length of time to retain change stream data for the table, in the range of [1 day, 7 days]. Acceptable units are days (d), hours (h), minutes (m), and seconds (s). Passing in a value for this option enables a change stream for the table. Examples: `5d` or `48h`",
              args: {
                name: "CHANGE_STREAM_RETENTION_PERIOD",
                description: "String",
              },
            },
            {
              name: "--column-families",
              description:
                'A double-quote (`"`) wrapped list of family name and corresponding garbage collection rules concatenated by `:`, where the rules are optional. For example: `"family_1,family_2:maxage=5d&&maxversions=2,family_3:maxage=10d||maxversions=5"`',
              priority: 100,
              args: {
                name: "COLUMN_FAMILIES",
                description: "List",
              },
            },
            optConfiguration,
            optDeletionProtection2,
            {
              name: "--enable-automated-backup",
              description:
                "Once set, enables the default automated backup policy (retention_period=7d, frequency=1d) for the table",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance6,
            optLogHttp,
            optNoDeletionProtection,
            optNoRowKeySchemaPreEncodedBytes,
            optProject,
            optQuiet,
            optRowKeySchemaDefinitionFile,
            optRowKeySchemaPreEncodedBytes,
            {
              name: "--splits",
              description:
                "Row keys where the table should initially be split. For example: `car,key`",
              args: {
                name: "SPLITS",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TABLE",
            description:
              "ID of the table or fully qualified identifier for the table",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Bigtable table",
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
            optInstance6,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TABLE",
            description:
              "ID of the table or fully qualified identifier for the table",
          },
        },
        {
          name: "describe",
          description: "Retrieve information about a table",
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
            optInstance6,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--view",
              description:
                "The view to be applied to the returned table's fields. _VIEW_ must be one of:",
              args: {
                name: "VIEW",
                suggestions: [
                  "encryption",
                  "full",
                  "name",
                  "replication",
                  "schema",
                  "stats",
                ],
              },
            },
          ],
          args: {
            name: "TABLE",
            description:
              "ID of the table or fully qualified identifier for the table",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get an IAM policy on a Cloud Bigtable table",
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
            optInstance6,
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
            name: "TABLE",
            description:
              "ID of the table or fully qualified identifier for the table",
          },
        },
        {
          name: "list",
          description: "List existing Bigtable instance tables",
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
            {
              name: "--instances",
              description: "ID of the instances",
              priority: 100,
              args: {
                name: "INSTANCE",
                description: "List",
              },
            },
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
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding from a Cloud Bigtable table",
          options: [
            optAccessTokenFile,
            optAccount,
            optAll,
            optBillingProject,
            optCondition2,
            optConditionFromFile,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance6,
            optLogHttp,
            optMember2,
            optNoAll,
            optProject,
            optQuiet,
            optRole2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TABLE",
            description:
              "ID of the table or fully qualified identifier for the table",
          },
        },
        {
          name: "restore",
          description: "Restore a Cloud Bigtable backup to a new table",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--destination",
              description:
                "ID of the table or fully qualified identifier for the table",
              priority: 100,
              args: {
                name: "DESTINATION",
                description: "String",
              },
            },
            {
              name: "--destination-instance",
              description: "Name of the Bigtable instance",
              args: {
                name: "DESTINATION_INSTANCE",
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
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--source",
              description:
                "ID of the backup or fully qualified identifier for the backup",
              priority: 100,
              args: {
                name: "SOURCE",
                description: "String",
              },
            },
            {
              name: "--source-cluster",
              description: "Name of the Bigtable cluster",
              args: {
                name: "SOURCE_CLUSTER",
                description: "String",
              },
            },
            {
              name: "--source-instance",
              description: "Name of the Bigtable instance",
              args: {
                name: "SOURCE_INSTANCE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "set-iam-policy",
          description: "Set an IAM policy on a Cloud Bigtable table",
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
            optInstance6,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "TABLE",
              description:
                "ID of the table or fully qualified identifier for the table",
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
          name: "undelete",
          description: "Undelete a previously deleted Cloud Bigtable table",
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
            optInstance6,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TABLE",
            description:
              "ID of the table or fully qualified identifier for the table",
          },
        },
        {
          name: "update",
          description: "Update an existing Cloud Bigtable table",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--automated-backup-locations",
              description:
                "List of Cloud Bigtable zones where automated backups are allowed to be created. If empty, automated backups will be created in all zones of the instance. Locations are in the format `projects/{project}/locations/{zone}`. Setting this flag will enable automated backup for the table",
              args: {
                name: "LOCATION",
                description: "List",
              },
            },
            {
              name: "--automated-backup-retention-period",
              description:
                "The retention period of automated backup in the format of `30d` for 30 days. Min retention period is `3d` and max is `90d`. Setting this flag will enable automated backup for the table",
              args: {
                name: "AUTOMATED_BACKUP_RETENTION_PERIOD",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--change-stream-retention-period",
              description:
                "The length of time to retain change stream data for the table, in the range of [1 day, 7 days]. Acceptable units are days (d), hours (h), minutes (m), and seconds (s). If not already specified, enables a change stream for the table. Examples: `5d` or `48h`",
              args: {
                name: "CHANGE_STREAM_RETENTION_PERIOD",
                description: "String",
              },
            },
            {
              name: "--clear-automated-backup-locations",
              description:
                "Empty the automated backup locations list if populated",
            },
            {
              name: "--clear-change-stream-retention-period",
              description:
                "This disables the change stream and eventually removes the change stream data",
            },
            {
              name: "--clear-row-key-schema",
              description:
                "Whether to clear the row key schema in the updated table",
            },
            optConfiguration,
            optDeletionProtection2,
            {
              name: "--disable-automated-backup",
              description:
                "Once set, disables automated backup policy for the table",
            },
            {
              name: "--enable-automated-backup",
              description:
                "Once set, enables the default automated backup policy (retention_period=7d, frequency=1d) for the table. Note: If a table has automated backup enabled, this flag resets it to the default policy",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optInstance6,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-clear-row-key-schema",
              description:
                "Whether to clear the row key schema in the updated table",
              hidden: true,
            },
            optNoDeletionProtection,
            optNoRowKeySchemaPreEncodedBytes,
            optProject,
            optQuiet,
            optRowKeySchemaDefinitionFile,
            optRowKeySchemaPreEncodedBytes,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TABLE",
            description:
              "ID of the table or fully qualified identifier for the table",
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
