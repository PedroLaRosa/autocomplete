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

const optDescription: Fig.Option = {
  name: "--description",
  description: "A description of this resource",
  args: {
    name: "DESCRIPTION",
    description: "String",
  },
};

const optDescription2: Fig.Option = {
  name: "--description",
  description: "Description of the spoke to create",
  args: {
    name: "DESCRIPTION",
    description: "String",
  },
};

const optDescription3: Fig.Option = {
  name: "--description",
  description: "New description of the spoke",
  args: {
    name: "DESCRIPTION",
    description: "String",
  },
};

const optEtag: Fig.Option = {
  name: "--etag",
  description:
    "The etag is computed by the server, and might be sent with update and delete requests so that the client has an up-to-date value before proceeding",
  args: {
    name: "ETAG",
    description: "String",
  },
};

const optExcludeExportRanges: Fig.Option = {
  name: "--exclude-export-ranges",
  description:
    "Dynamic routes overlapped/encompassed by exclude export ranges are excluded during export to hub",
  args: {
    name: "EXCLUDE_EXPORT_RANGES",
    description: "List",
  },
};

const optExcludeImportRanges: Fig.Option = {
  name: "--exclude-import-ranges",
  description:
    "Hub routes overlapped/encompassed by exclude import ranges are excluded during import from hub",
  args: {
    name: "EXCLUDE_IMPORT_RANGES",
    description: "List",
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

const optGroup: Fig.Option = {
  name: "--group",
  description:
    "The group that the spoke will be added to. The group must already exist. If unset, the spoke will be added to the ``default`` group",
  args: {
    name: "GROUP",
    description: "String",
  },
};

const optHub: Fig.Option = {
  name: "--hub",
  description: "Hub that the spoke will attach to. The hub must already exist",
  priority: 100,
  args: {
    name: "HUB",
    description: "String",
  },
};

const optHub2: Fig.Option = {
  name: "--hub",
  description: "Id of the hub",
  args: {
    name: "HUB",
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

const optIncludeExportRanges: Fig.Option = {
  name: "--include-export-ranges",
  description:
    "Dynamic routes fully encompassed by include export ranges are included during export to hub. If it's empty, the spoke exports all dynamic routes to the hub",
  args: {
    name: "INCLUDE_EXPORT_RANGES",
    description: "List",
  },
};

const optIncludeImportRanges: Fig.Option = {
  name: "--include-import-ranges",
  description:
    "Hub routes fully encompassed by include import ranges are included during import from hub. If it's empty, the spoke does not import any subnets from the hub. If it's empty and site-to-site-data-transfer is true, the spoke imports all IPv4 site-to-site dynamic routes from the hub",
  args: {
    name: "INCLUDE_IMPORT_RANGES",
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

const optLabels2: Fig.Option = {
  name: "--labels",
  description: "List of label KEY=VALUE pairs to add",
  args: {
    name: "KEY=VALUE",
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
  description: "The location id of the destination resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation2: Fig.Option = {
  name: "--location",
  description: "The location id of the multicloudDataTransferConfig resource",
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

const optMulticloudDataTransferConfig: Fig.Option = {
  name: "--multicloud-data-transfer-config",
  description:
    "The multicloudDataTransferConfig id of the destination resource",
  args: {
    name: "MULTICLOUD_DATA_TRANSFER_CONFIG",
    description: "String",
  },
};

const optNoAsync: Fig.Option = {
  name: "--no-async",
  description:
    "Return immediately, without waiting for the operation in progress to complete",
  hidden: true,
};

const optNoClearLabels: Fig.Option = {
  name: "--no-clear-labels",
  description:
    "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
  hidden: true,
};

const optNoSiteToSiteDataTransfer: Fig.Option = {
  name: "--no-site-to-site-data-transfer",
  description:
    "Whether to enable site-to-site data transfer for this spoke. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations)",
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
    "A Google Cloud region. To see the names of regions, see [Viewing a list of available regions](https://cloud.google.com/compute/docs/regions-zones/viewing-regions-zones#viewing_a_list_of_available_regions)",
  hidden: true,
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion2: Fig.Option = {
  name: "--region",
  description:
    "A Google Cloud region. To see the names of regions, see [Viewing a list of available regions](https://cloud.google.com/compute/docs/regions-zones/viewing-regions-zones#viewing_a_list_of_available_regions)",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion3: Fig.Option = {
  name: "--region",
  description: "ID of the region or fully qualified identifier for the region",
  priority: 100,
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion4: Fig.Option = {
  name: "--region",
  description: "The location ID",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion5: Fig.Option = {
  name: "--region",
  description: "The location Id",
  args: {
    name: "REGION",
    description: "String",
  },
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

const optRequestId: Fig.Option = {
  name: "--request-id",
  description:
    "A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server waits for at least 60 minutes since the first request",
  args: {
    name: "REQUEST_ID",
    description: "String",
  },
};

const optSiteToSiteDataTransfer: Fig.Option = {
  name: "--site-to-site-data-transfer",
  description:
    "Whether to enable site-to-site data transfer for this spoke. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations)",
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
  name: "network-connectivity",
  description: "Manage Network Connectivity resources",
  subcommands: [
    {
      name: "hubs",
      description: "Manage Network Connectivity Center hubs",
      subcommands: [
        {
          name: "accept-spoke",
          description: "Accept a spoke into a hub",
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
            {
              name: "--spoke",
              description: "URI of the spoke to accept",
              priority: 100,
              args: {
                name: "SPOKE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub",
          },
        },
        {
          name: "accept-spoke-update",
          description: "Accept a proposal to update a spoke in a hub",
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
            {
              name: "--spoke",
              description: "URI of the spoke to accept update",
              priority: 100,
              args: {
                name: "SPOKE",
                description: "String",
              },
            },
            {
              name: "--spoke-etag",
              description: "Etag of the spoke to accept update",
              priority: 100,
              args: {
                name: "SPOKE_ETAG",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub",
          },
        },
        {
          name: "add-iam-policy-binding",
          description:
            "Add an IAM policy binding to the IAM policy of a hub resource",
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
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub",
          },
        },
        {
          name: "create",
          description: "Create a new hub",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the hub",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--export-psc",
              description:
                "This boolean controls whether Private Service Connect transitivity is enabled for the hub",
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
            optNoAsync,
            {
              name: "--no-export-psc",
              description:
                "This boolean controls whether Private Service Connect transitivity is enabled for the hub",
              hidden: true,
            },
            {
              name: "--policy-mode",
              description:
                "Policy mode of the hub. _POLICY_MODE_ must be one of: *policy-mode-unspecified*, *preset*",
              args: {
                name: "POLICY_MODE",
                suggestions: ["policy-mode-unspecified", "preset"],
              },
            },
            {
              name: "--preset-topology",
              description:
                "Topology of the hub. Only applicable when ``--policy-mode=PRESET''. _PRESET_TOPOLOGY_ must be one of: *hybrid-inspection*, *mesh*, *preset-topology-unspecified*, *star*",
              args: {
                name: "PRESET_TOPOLOGY",
                suggestions: [
                  "hybrid-inspection",
                  "mesh",
                  "preset-topology-unspecified",
                  "star",
                ],
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub",
          },
        },
        {
          name: "delete",
          description: "Delete a hub",
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
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub",
          },
        },
        {
          name: "describe",
          description: "Describe a hub",
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
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a hub resource",
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
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub",
          },
        },
        {
          name: "groups",
          description: "Manage Network Connectivity Center groups",
          subcommands: [
            {
              name: "add-iam-policy-binding",
              description:
                "Add an IAM policy binding to the IAM policy of a group resource",
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
                optHub2,
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
                name: "GROUP",
                description:
                  "ID of the group or fully qualified identifier for the group",
              },
            },
            {
              name: "describe",
              description: "Describe a group",
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
                optHub2,
                optImpersonateServiceAccount,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "GROUP",
                description:
                  "ID of the group or fully qualified identifier for the group",
              },
            },
            {
              name: "get-iam-policy",
              description: "Get the IAM policy for a group resource",
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
                optHub2,
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
                name: "GROUP",
                description:
                  "ID of the group or fully qualified identifier for the group",
              },
            },
            {
              name: "list",
              description: "List groups",
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
                {
                  name: "--hub",
                  description:
                    "ID of the hub or fully qualified identifier for the hub",
                  args: {
                    name: "HUB",
                    description: "String",
                  },
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
            },
            {
              name: "remove-iam-policy-binding",
              description:
                "Remove an IAM policy binding from the IAM policy of a group resource",
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
                optHub2,
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
                name: "GROUP",
                description:
                  "ID of the group or fully qualified identifier for the group",
              },
            },
            {
              name: "set-iam-policy",
              description: "Set the IAM policy of a group resource",
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
                optHub2,
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
                  name: "GROUP",
                  description:
                    "ID of the group or fully qualified identifier for the group",
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
              description: "Update a group",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--add-auto-accept-projects",
                  description:
                    "Append the given values to the current auto-accept projects",
                  args: {
                    name: "AUTO-ACCEPT-PROJECTS",
                    description: "List",
                  },
                },
                optAsync,
                optBillingProject,
                {
                  name: "--clear-auto-accept-projects",
                  description: "Empty the current auto-accept projects",
                },
                optClearLabels,
                optConfiguration,
                {
                  name: "--description",
                  description: "New description of the group",
                  args: {
                    name: "DESCRIPTION",
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
                  name: "--hub",
                  description: "The hub Id",
                  args: {
                    name: "HUB",
                    description: "String",
                  },
                },
                optImpersonateServiceAccount,
                optLogHttp,
                optNoAsync,
                {
                  name: "--no-clear-auto-accept-projects",
                  description: "Empty the current auto-accept projects",
                  hidden: true,
                },
                optNoClearLabels,
                optProject,
                optQuiet,
                {
                  name: "--remove-auto-accept-projects",
                  description:
                    "Remove the given values from the current auto-accept projects",
                  args: {
                    name: "AUTO-ACCEPT-PROJECTS",
                    description: "List",
                  },
                },
                optRemoveLabels,
                optTraceToken,
                optUpdateLabels,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "GROUP",
                description:
                  "ID of the group or fully qualified identifier for the group",
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
          name: "list",
          description: "List hubs",
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
        },
        {
          name: "list-spokes",
          description: "List hub spokes",
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
            {
              name: "--spoke-locations",
              description:
                "A comma separated list of locations. The locations can be set to 'global' and/or Google Cloud supported regions. To see the names of regions, see [Viewing a list of available regions](https://cloud.google.com/compute/docs/regions-zones/viewing-regions-zones#viewing_a_list_of_available_regions)",
              args: {
                name: "LOCATION",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--view",
              description:
                "Enumeration to control which spoke fields are included in the response. _VIEW_ must be one of: *basic*, *detailed*",
              args: {
                name: "VIEW",
                description: "String",
                suggestions: ["basic", "detailed"],
              },
            },
          ],
          args: {
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub",
          },
        },
        {
          name: "query-status",
          description:
            "Query the status of Private Service Connect propagation for a hub",
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
              name: "--group-by",
              description:
                "Comma-separated list of resource field key names to group by. Aggregated values will be displayed for each group. If `--group-by` is set, the value of the `--sort-by` flag must be the same as or a subset of the `--group-by` flag",
              args: {
                name: "GROUP_BY",
                description: "String",
              },
            },
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
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub",
          },
        },
        {
          name: "reject-spoke",
          description: "Reject a spoke from a hub",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--details",
              description: "Additional details behind the rejection",
              args: {
                name: "DETAILS",
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
              name: "--spoke",
              description: "URI of the spoke to reject",
              priority: 100,
              args: {
                name: "SPOKE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub",
          },
        },
        {
          name: "reject-spoke-update",
          description: "Reject a proposal to update a spoke in a hub",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--details",
              description: "Additional details behind the rejection",
              args: {
                name: "DETAILS",
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
              name: "--spoke",
              description: "URI of the spoke to reject update",
              priority: 100,
              args: {
                name: "SPOKE",
                description: "String",
              },
            },
            {
              name: "--spoke-etag",
              description: "Etag of the spoke to reject update",
              priority: 100,
              args: {
                name: "SPOKE_ETAG",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding from the IAM policy of a hub resource",
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
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub",
          },
        },
        {
          name: "route-tables",
          description: "Manage Network Connectivity Center route tables",
          subcommands: [
            {
              name: "describe",
              description: "Describe a route table",
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
                optHub2,
                optImpersonateServiceAccount,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "ROUTE_TABLE",
                description:
                  "ID of the route table or fully qualified identifier for the route table",
              },
            },
            {
              name: "list",
              description: "List route tables",
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
                {
                  name: "--hub",
                  description:
                    "ID of the hub or fully qualified identifier for the hub",
                  args: {
                    name: "HUB",
                    description: "String",
                  },
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
            },
            {
              name: "routes",
              description: "Manage Network Connectivity Center routes",
              subcommands: [
                {
                  name: "describe",
                  description: "Describe a route",
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
                    optHub2,
                    optImpersonateServiceAccount,
                    optLogHttp,
                    optProject,
                    optQuiet,
                    {
                      name: ["--route-table", "--route_table"],
                      description: "Id of the route table",
                      args: {
                        name: "ROUTE_TABLE",
                        description: "String",
                      },
                    },
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "ROUTE",
                    description:
                      "ID of the route or fully qualified identifier for the route",
                  },
                },
                {
                  name: "list",
                  description: "List routes",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    {
                      name: "--effective-location",
                      description:
                        "The effective location/region to limit the list of routes. The effective location must be a valid region name. To list valid region names, use 'gcloud compute regions list'",
                      args: {
                        name: "EFFECTIVE_LOCATION",
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
                    optHub2,
                    optImpersonateServiceAccount,
                    optLimit,
                    optLogHttp,
                    optPageSize,
                    optProject,
                    optQuiet,
                    {
                      name: ["--route-table", "--route_table"],
                      description:
                        "ID of the route table or fully qualified identifier for the route table",
                      args: {
                        name: "ROUTE_TABLE",
                        description: "String",
                      },
                    },
                    optSortBy,
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
        {
          name: "set-iam-policy",
          description: "Set the IAM policy of a hub resource",
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
              name: "HUB",
              description:
                "ID of the hub or fully qualified identifier for the hub",
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
          description: "Update a hub",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optClearLabels,
            optConfiguration,
            {
              name: "--description",
              description: "New description of the hub",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--export-psc",
              description:
                "Whether Private Service Connect transitivity is enabled for the hub",
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
            optNoClearLabels,
            {
              name: "--no-export-psc",
              description:
                "Whether Private Service Connect transitivity is enabled for the hub",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRemoveLabels,
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub",
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
      name: "internal-ranges",
      description: "Manage internal ranges",
      subcommands: [
        {
          name: "create",
          description: "Create a new internal range",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--allocation-strategy",
              description:
                "Allocation strategy to be used when searching for a free range. _ALLOCATION_STRATEGY_ must be one of:",
              args: {
                name: "ALLOCATION_STRATEGY",
                suggestions: [
                  "first-available",
                  "first-smallest-fitting",
                  "random",
                  "random-first-n-available",
                ],
              },
            },
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the internal range to be created",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--exclude-cidr-ranges",
              description:
                "A list of CIDR ranges to exclude from the search for a free range. This can be used to exclude specific ranges that are already intended to have some other use",
              args: {
                name: "EXCLUDE_CIDR_RANGES",
                description: "List",
              },
            },
            {
              name: "--first-available-ranges-lookup-size",
              description:
                "The number of ranges to be considered when using the RANDOM_FIRST_N_AVAILABLE allocation strategy. This is only allowed when allocation-strategy is set to RANDOM_FIRST_N_AVAILABLE",
              args: {
                name: "FIRST_AVAILABLE_RANGES_LOOKUP_SIZE",
                description: "Int",
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
              name: "--immutable",
              description:
                "Mark the internal range as immutable. Then only non-semantic fields like description and labels could be modified after creation",
            },
            optImpersonateServiceAccount,
            {
              name: "--ip-cidr-range",
              description: "IP range that this internal range defines",
              args: {
                name: "IP_CIDR_RANGE",
                description: "String",
              },
            },
            optLabels2,
            optLogHttp,
            {
              name: "--migration-source",
              description:
                "The migration source subnetwork (of a for-migration internal range) resource URI or resource ID",
              priority: 100,
              args: {
                name: "MIGRATION_SOURCE",
                description: "String",
              },
            },
            {
              name: "--migration-target",
              description:
                "The migration target subnetwork (of a for-migration internal range) resource URI or resource ID",
              priority: 100,
              args: {
                name: "MIGRATION_TARGET",
                description: "String",
              },
            },
            {
              name: "--network",
              description:
                "The URL or resource ID of the network in which to reserve the internal range. Legacy network is not supported. This can only be specified for a global internal address",
              priority: 100,
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            optNoAsync,
            {
              name: "--no-immutable",
              description:
                "Mark the internal range as immutable. Then only non-semantic fields like description and labels could be modified after creation",
              hidden: true,
            },
            {
              name: "--overlaps",
              description:
                "Overlap specifications for the range being created. _OVERLAPS_ must be one of:",
              args: {
                name: "OVERLAPS",
                description: "List",
              },
            },
            {
              name: "--peering",
              description:
                "The type of peering set for the internal range. _PEERING_ must be one of:",
              args: {
                name: "PEERING",
                suggestions: ["for-peer", "for-self", "not-shared"],
              },
            },
            {
              name: "--prefix-length",
              description:
                "An alternative to ip-cidr-range. Can be set when trying to create a reservation that automatically finds a free range of the given size",
              priority: 100,
              args: {
                name: "PREFIX_LENGTH",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
            optRegion4,
            {
              name: "--target-cidr-range",
              description:
                'Can be set to narrow down or pick a different address space while searching for a free range. If not set, defaults to the "10.0.0.0/8" address space. This can be used to search in other rfc-1918 address spaces like "172.16.0.0/12" and "192.168.0.0/16" or non-rfc-1918 address spaces used in the VPC',
              args: {
                name: "TARGET_CIDR_RANGE",
                description: "List",
              },
            },
            optTraceToken,
            {
              name: "--usage",
              description:
                "The type of usage set for the internal range. _USAGE_ must be one of:",
              args: {
                name: "USAGE",
                suggestions: ["external-to-vpc", "for-migration", "for-vpc"],
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INTERNAL_RANGE",
            description:
              "ID of the internal range or fully qualified identifier for the internal range",
          },
        },
        {
          name: "delete",
          description: "Delete an internal range",
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
            optRegion4,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INTERNAL_RANGE",
            description:
              "ID of the internal range or fully qualified identifier for the internal range",
          },
        },
        {
          name: "describe",
          description: "Describe an internal range",
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
            optRegion4,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INTERNAL_RANGE",
            description:
              "ID of the internal range or fully qualified identifier for the internal range",
          },
        },
        {
          name: "list",
          description: "List internal ranges",
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
            {
              name: "--region",
              description:
                "ID of the region or fully qualified identifier for the region",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Update an internal range",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--clear-labels",
              description: "Clear existing labels for the range",
            },
            {
              name: "--clear-overlaps",
              description: "Clear existing overlap fields for the range",
            },
            optConfiguration,
            {
              name: "--description",
              description: "Description of the Internal Range",
              args: {
                name: "DESCRIPTION",
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
              name: "--ip-cidr-range",
              description: "IP range that this internal range defines",
              args: {
                name: "IP_CIDR_RANGE",
                description: "String",
              },
            },
            {
              name: "--labels",
              description:
                "List of label KEY=VALUE pairs for the range being updated",
              args: {
                name: "KEY=VALUE",
              },
            },
            optLogHttp,
            optNoAsync,
            {
              name: "--no-clear-labels",
              description: "Clear existing labels for the range",
              hidden: true,
            },
            {
              name: "--no-clear-overlaps",
              description: "Clear existing overlap fields for the range",
              hidden: true,
            },
            {
              name: "--overlaps",
              description:
                "Overlap specifications for the range being updated. _OVERLAPS_ must be one of:",
              args: {
                name: "OVERLAPS",
                description: "List",
              },
            },
            {
              name: "--prefix-length",
              description:
                "An alternative to ip-cidr-range. Can be set when trying to create a reservation that automatically finds a free range of the given size",
              args: {
                name: "PREFIX_LENGTH",
                description: "Int",
              },
            },
            optProject,
            optQuiet,
            optRegion4,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INTERNAL_RANGE",
            description:
              "ID of the internal range or fully qualified identifier for the internal range",
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
      description:
        "Get information about supported Network Connectivity Center locations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Network Connectivity Center location",
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
          description: "List Network Connectivity Center locations",
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
      name: "multicloud-data-transfer-configs",
      description: "Manage Multicloud Data Transfer Config resources",
      subcommands: [
        {
          name: "create",
          description: "Create a multicloudDataTransferConfig",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optDescription,
            optEtag,
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
              description: "User-defined labels",
              args: {
                name: "LABELS",
              },
            },
            optLocation2,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRequestId,
            {
              name: "--services",
              description:
                "Maps services to their current or planned states. Service names are keys, and the associated values describe the state of the service. If a state change is expected, the value is either `ADDING` or `DELETING`, depending on the actions taken",
              args: {
                name: "SERVICES",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MULTICLOUD_DATA_TRANSFER_CONFIG",
            description:
              "ID of the multicloudDataTransferConfig or fully qualified identifier for the multicloudDataTransferConfig",
          },
        },
        {
          name: "delete",
          description: "Delete a multicloudDataTransferConfig",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optEtag,
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
            optRequestId,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MULTICLOUD_DATA_TRANSFER_CONFIG",
            description:
              "ID of the multicloudDataTransferConfig or fully qualified identifier for the multicloudDataTransferConfig",
          },
        },
        {
          name: "describe",
          description: "Describe a multicloudDataTransferConfig",
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
            name: "MULTICLOUD_DATA_TRANSFER_CONFIG",
            description:
              "ID of the multicloudDataTransferConfig or fully qualified identifier for the multicloudDataTransferConfig",
          },
        },
        {
          name: "destinations",
          description: "Manage Destination resources",
          subcommands: [
            {
              name: "create",
              description: "Create a destination",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optDescription,
                {
                  name: "--endpoints",
                  description:
                    "Required, The list of `DestinationEndpoint` resources configured for the IP prefix",
                  priority: 100,
                  args: {
                    name: "ENDPOINTS",
                  },
                },
                optEtag,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                {
                  name: "--ip-prefix",
                  description:
                    "The IP prefix that represents your workload on another CSP",
                  priority: 100,
                  args: {
                    name: "IP_PREFIX",
                    description: "String",
                  },
                },
                {
                  name: "--labels",
                  description: "User-defined labels",
                  args: {
                    name: "LABELS",
                  },
                },
                optLocation,
                optLogHttp,
                optMulticloudDataTransferConfig,
                optNoAsync,
                optProject,
                optQuiet,
                optRequestId,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "DESTINATION",
                description:
                  "ID of the destination or fully qualified identifier for the destination",
              },
            },
            {
              name: "delete",
              description: "Delete a destination",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optEtag,
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
                optMulticloudDataTransferConfig,
                optNoAsync,
                optProject,
                optQuiet,
                optRequestId,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "DESTINATION",
                description:
                  "ID of the destination or fully qualified identifier for the destination",
              },
            },
            {
              name: "describe",
              description: "Describe a destination",
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
                optMulticloudDataTransferConfig,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "DESTINATION",
                description:
                  "ID of the destination or fully qualified identifier for the destination",
              },
            },
            {
              name: "list",
              description: "List destinations",
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
                {
                  name: "--multicloud-data-transfer-config",
                  description:
                    "ID of the multicloudDataTransferConfig or fully qualified identifier for the multicloudDataTransferConfig",
                  priority: 100,
                  args: {
                    name: "MULTICLOUD_DATA_TRANSFER_CONFIG",
                    description: "String",
                  },
                },
                {
                  name: "--no-return-partial-success",
                  description:
                    "If `true`, allow partial responses for multi-regional aggregated list requests",
                  hidden: true,
                },
                optNoUri,
                optPageSize,
                optProject,
                optQuiet,
                {
                  name: "--return-partial-success",
                  description:
                    "If `true`, allow partial responses for multi-regional aggregated list requests",
                },
                optSortBy,
                optTraceToken,
                optUri,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "update",
              description: "Update a destination",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--add-endpoints",
                  description:
                    "Add new value to endpoints list. The list of `DestinationEndpoint` resources configured for the IP prefix",
                  args: {
                    name: "ADD_ENDPOINTS",
                  },
                },
                optAsync,
                optBillingProject,
                {
                  name: "--clear-endpoints",
                  description: "Clear endpoints value and set to empty list",
                },
                {
                  name: "--clear-labels",
                  description: "Clear labels value and set to empty map",
                },
                optConfiguration,
                optDescription,
                {
                  name: "--endpoints",
                  description:
                    "Set endpoints to new value. The list of `DestinationEndpoint` resources configured for the IP prefix",
                  args: {
                    name: "ENDPOINTS",
                  },
                },
                optEtag,
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
                  description: "Set labels to new value. User-defined labels",
                  args: {
                    name: "LABELS",
                  },
                },
                optLocation,
                optLogHttp,
                optMulticloudDataTransferConfig,
                optNoAsync,
                {
                  name: "--no-clear-endpoints",
                  description: "Clear endpoints value and set to empty list",
                  hidden: true,
                },
                {
                  name: "--no-clear-labels",
                  description: "Clear labels value and set to empty map",
                  hidden: true,
                },
                optProject,
                optQuiet,
                {
                  name: "--remove-endpoints",
                  description:
                    "Remove existing value from endpoints list. The list of `DestinationEndpoint` resources configured for the IP prefix",
                  args: {
                    name: "REMOVE_ENDPOINTS",
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
                optRequestId,
                optTraceToken,
                {
                  name: "--update-labels",
                  description:
                    "Update labels value or add key value pair. User-defined labels",
                  args: {
                    name: "UPDATE_LABELS",
                  },
                },
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "DESTINATION",
                description:
                  "ID of the destination or fully qualified identifier for the destination",
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
          name: "list",
          description: "List multicloudDataTransferConfigs",
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
            {
              name: "--no-return-partial-success",
              description:
                "If `true`, allows partial responses for multi-regional aggregated list requests",
              hidden: true,
            },
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            {
              name: "--return-partial-success",
              description:
                "If `true`, allows partial responses for multi-regional aggregated list requests",
            },
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Update a multicloudDataTransferConfig",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--clear-labels",
              description: "Clear labels value and set to empty map",
            },
            {
              name: "--clear-services",
              description: "Clear services value and set to empty map",
            },
            optConfiguration,
            optDescription,
            optEtag,
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
              description: "Set labels to new value. User-defined labels",
              args: {
                name: "LABELS",
              },
            },
            optLocation2,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-clear-labels",
              description: "Clear labels value and set to empty map",
              hidden: true,
            },
            {
              name: "--no-clear-services",
              description: "Clear services value and set to empty map",
              hidden: true,
            },
            optProject,
            optQuiet,
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
              name: "--remove-services",
              description:
                "Remove existing value from map services. Sets `remove_services` value",
              args: {
                name: "REMOVE_SERVICES",
                description: "Dict",
              },
            },
            optRequestId,
            {
              name: "--services",
              description:
                "Set services to new value. Maps services to their current or planned states. Service names are keys, and the associated values describe the state of the service. If a state change is expected, the value is either `ADDING` or `DELETING`, depending on the actions taken",
              args: {
                name: "SERVICES",
              },
            },
            optTraceToken,
            {
              name: "--update-labels",
              description:
                "Update labels value or add key value pair. User-defined labels",
              args: {
                name: "UPDATE_LABELS",
              },
            },
            {
              name: "--update-services",
              description:
                "Update services value or add key value pair. Maps services to their current or planned states. Service names are keys, and the associated values describe the state of the service. If a state change is expected, the value is either `ADDING` or `DELETING`, depending on the actions taken",
              args: {
                name: "UPDATE_SERVICES",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MULTICLOUD_DATA_TRANSFER_CONFIG",
            description:
              "ID of the multicloudDataTransferConfig or fully qualified identifier for the multicloudDataTransferConfig",
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
      name: "multicloud-data-transfer-supported-services",
      description:
        "Manage Multicloud Data Transfer Supported Service resources",
      subcommands: [
        {
          name: "describe",
          description: "Describe multicloudDataTransferSupportedService",
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
                "The location id of the multicloudDataTransferSupportedService resource",
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
            name: "MULTICLOUD_DATA_TRANSFER_SUPPORTED_SERVICE",
            description:
              "ID of the multicloudDataTransferSupportedService or fully qualified identifier for the multicloudDataTransferSupportedService",
          },
        },
        {
          name: "list",
          description: "List multicloudDataTransferSupportedServices",
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
      description: "Manage Network Connectivity Center operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Network Connectivity Center operation",
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
            optRegion5,
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
          description: "List Network Connectivity Center operations",
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
            optRegion3,
            optSortBy,
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
      name: "policy-based-routes",
      description: "Manage Policy-based Routes",
      subcommands: [
        {
          name: "create",
          description: "Create a new policy-based route",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description:
                "Optional description of this resource. Provide this field when you create the resource",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--destination-range",
              description:
                "Destination IP range of outgoing packets that this policy-based route applies to",
              args: {
                name: "DESTINATION_RANGE",
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
              name: "--interconnect-attachment-region",
              description:
                "Cloud region to install this policy-based route on interconnect attachment. Use `all` to install it on all interconnect attachments. Note if both `--tags` and `--interconnect-attachment-region` are not set, then the policy-based route will be installed in all network endpoints, including VMs, VPNs, and Interconnect attachements, in the network",
              args: {
                name: "INTERCONNECT_ATTACHMENT_REGION",
                description: "String",
              },
            },
            {
              name: "--ip-protocol",
              description:
                "IP protocol that this policy-based route applies to. Valid values are `TCP`, `UDP`, and `ALL`. Default is `ALL`",
              args: {
                name: "IP_PROTOCOL",
                description: "String",
              },
            },
            optLabels,
            optLogHttp,
            {
              name: "--network",
              description:
                "Fully-qualified URL of the network that this route applies to. E.g. `projects/my-project/global/networks/my-network`",
              priority: 100,
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            {
              name: "--next-hop-ilb-ip",
              description:
                "IP of a global access enabled L4 ILB that should be the next hop to handle packets",
              args: {
                name: "NEXT_HOP_ILB_IP",
                description: "String",
              },
            },
            {
              name: "--next-hop-other-routes",
              description:
                "Next hop should be other routes that handle packets. This effectively excludes matching packets being applied on other policy-based routes with a lower priority. _NEXT_HOP_OTHER_ROUTES_ must be one of: *default-routing*, *other-routes-unspecified*",
              args: {
                name: "NEXT_HOP_OTHER_ROUTES",
                suggestions: ["default-routing", "other-routes-unspecified"],
              },
            },
            optNoAsync,
            {
              name: "--priority",
              description:
                "Priority of this policy-based route. Priority is used to break ties in cases where there are more than one matching policy-based routes found. In cases where multiple policy-based routes are matched, the one with the lowest-numbered priority value wins. The default value is 1000. The priority value must be from 1 to 65535, inclusive. Note the priority of policy-based route is always higher than other types of route (e.g. static routes/advanced routes)",
              args: {
                name: "PRIORITY",
                description: "Int",
              },
            },
            optProject,
            {
              name: "--protocol-version",
              description:
                "Internet protocol versions that this policy-based route applies to. For this version, only `IPV4` is supported. _PROTOCOL_VERSION_ must be one of: *ipv4*, *ipv6*, *protocol-version-unspecified*",
              args: {
                name: "PROTOCOL_VERSION",
                suggestions: ["ipv4", "ipv6", "protocol-version-unspecified"],
              },
            },
            optQuiet,
            {
              name: "--source-range",
              description:
                "Source IP range of outgoing packets that this policy-based route applies to",
              args: {
                name: "SOURCE_RANGE",
                description: "String",
              },
            },
            {
              name: "--tags",
              description:
                "List of VM instance tags that this route applies to. VM instances that have ANY of tags specified here installs this route. Note if both `--tags` and `--interconnect-attachment-region` are not set, then the policy-based route will be installed in all endpoints, including VMs, VPNs, and Interconnect attachements, in the network",
              args: {
                name: "TAGS",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "POLICY_BASED_ROUTE",
            description:
              "ID of the policy based route or fully qualified identifier for the policy based route",
          },
        },
        {
          name: "delete",
          description: "Delete a policy-based route",
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
            name: "POLICY_BASED_ROUTE",
            description:
              "ID of the policy based route or fully qualified identifier for the policy based route",
          },
        },
        {
          name: "describe",
          description: "Describe a policy-based route",
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
            name: "POLICY_BASED_ROUTE",
            description:
              "ID of the policy based route or fully qualified identifier for the policy based route",
          },
        },
        {
          name: "list",
          description: "List policy-based routes",
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
      name: "regional-endpoints",
      description: "Manage Network Connectivity RegionalEndpoints",
      subcommands: [
        {
          name: "create",
          description: "Create a new regional endpoint",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--address",
              description:
                "The IP Address of the Regional Endpoint. When no address is provided, an IP from the subnetwork is allocated. Use one of the following formats: - IPv4 address as in ``10.0.0.1'' - Address resource URI as in ``projects/{project}/regions/{region}/addresses/{address_name}'' for an IPv4 or IPv6 address",
              args: {
                name: "ADDRESS",
                description: "String",
              },
            },
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the regional endpoint",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--enable-global-access",
              description: "Whether the REGIONAL or GLOBAL access is enabled",
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
              name: "--network",
              description:
                "Consumer's VPC network that this regional endpoint belongs to",
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            optNoAsync,
            {
              name: "--no-enable-global-access",
              description: "Whether the REGIONAL or GLOBAL access is enabled",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRegion5,
            {
              name: "--subnetwork",
              description:
                "The name of the subnetwork from which the IP address will be allocated",
              args: {
                name: "SUBNETWORK",
                description: "String",
              },
            },
            {
              name: "--target-google-api",
              description:
                "The service endpoint the regional endpoint will connect to",
              priority: 100,
              args: {
                name: "TARGET_GOOGLE_API",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REGIONAL_ENDPOINT",
            description:
              "ID of the regionalEndpoint or fully qualified identifier for the regionalEndpoint",
          },
        },
        {
          name: "delete",
          description: "Delete a regional endpoint",
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
            optRegion5,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REGIONAL_ENDPOINT",
            description:
              "ID of the regionalEndpoint or fully qualified identifier for the regionalEndpoint",
          },
        },
        {
          name: "describe",
          description: "Describe a regional endpoint",
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
            optRegion5,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REGIONAL_ENDPOINT",
            description:
              "ID of the regionalEndpoint or fully qualified identifier for the regionalEndpoint",
          },
        },
        {
          name: "list",
          description: "List regional endpoints",
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
            optRegion3,
            optSortBy,
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
      name: "service-connection-policies",
      description: "Manage Service Connection Policies",
      subcommands: [
        {
          name: "create",
          description: "Create a new Service Connection Policy",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--allowed-google-producers-resource-hierarchy-level",
              description:
                'List of projects, folders, or orgs where the producer instance can be located in the form "projects/123456789", folders/123456789", or "organizations/123456789"',
              args: {
                name: "ALLOWED_GOOGLE_PRODUCERS_RESOURCE_HIERARCHY_LEVEL",
                description: "List",
              },
            },
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description:
                "Description of the Service Connection Policy to be created",
              args: {
                name: "DESCRIPTION",
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
            optLabels2,
            optLogHttp,
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
              name: "--producer-instance-location",
              description:
                "Option that determines where the producer instances can be located for which connections can be created in the network controlled by this policy. _PRODUCER_INSTANCE_LOCATION_ must be one of:",
              args: {
                name: "PRODUCER_INSTANCE_LOCATION",
                suggestions: ["custom-resource-hierarchy-levels", "none"],
              },
            },
            optProject,
            {
              name: "--psc-connection-limit",
              description: "Max number of PSC connections for this policy",
              args: {
                name: "PSC_CONNECTION_LIMIT",
                description: "Int",
              },
            },
            optQuiet,
            {
              name: "--region",
              description:
                "For resources [service_connection_policy, subnets], provides fallback value for resource region attribute. When the resource's full URI path is not provided, region will fallback to this flag value",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            {
              name: "--service-class",
              description:
                "Service class that this policy is created for. E.g. my-service-class-ad32fa4b",
              priority: 100,
              args: {
                name: "SERVICE_CLASS",
                description: "String",
              },
            },
            {
              name: "--subnets",
              description:
                "IDs of the subnetworks or fully qualified identifiers for the subnetworks",
              priority: 100,
              args: {
                name: "SUBNETS",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE_CONNECTION_POLICY",
            description:
              "ID of the service connection policy or fully qualified identifier for the service connection policy",
          },
        },
        {
          name: "delete",
          description: "Delete a service connection policy",
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
            optRegion5,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE_CONNECTION_POLICY",
            description:
              "ID of the service connection policy or fully qualified identifier for the service connection policy",
          },
        },
        {
          name: "describe",
          description: "Describe a service connection policy",
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
            optRegion5,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE_CONNECTION_POLICY",
            description:
              "ID of the service connection policy or fully qualified identifier for the service connection policy",
          },
        },
        {
          name: "list",
          description: "List service connection policies",
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
            optRegion3,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Update a service connection policy",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--allowed-google-producers-resource-hierarchy-level",
              description:
                'List of projects, folders, or orgs where the producer instance can be located in the form "projects/123456789", folders/123456789", or "organizations/123456789"',
              args: {
                name: "ALLOWED_GOOGLE_PRODUCERS_RESOURCE_HIERARCHY_LEVEL",
                description: "List",
              },
            },
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description:
                "Description of the Service Connection Policy to be updated",
              args: {
                name: "DESCRIPTION",
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
            optLabels2,
            optLogHttp,
            optNoAsync,
            {
              name: "--producer-instance-location",
              description:
                "Option that determines where the producer instances can be located for which connections can be created in the network controlled by this policy. _PRODUCER_INSTANCE_LOCATION_ must be one of:",
              args: {
                name: "PRODUCER_INSTANCE_LOCATION",
                suggestions: ["custom-resource-hierarchy-levels", "none"],
              },
            },
            optProject,
            {
              name: "--psc-connection-limit",
              description: "Max number of PSC connections for this policy",
              args: {
                name: "PSC_CONNECTION_LIMIT",
                description: "Int",
              },
            },
            optQuiet,
            {
              name: "--region",
              description:
                "For resources [service_connection_policy, subnets], provides fallback value for resource region attribute. When the resource's full URI path is not provided, region will fallback to this flag value",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            {
              name: "--subnets",
              description:
                "IDs of the subnetworks or fully qualified identifiers for the subnetworks",
              priority: 100,
              args: {
                name: "SUBNETS",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE_CONNECTION_POLICY",
            description:
              "ID of the service connection policy or fully qualified identifier for the service connection policy",
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
      name: "spokes",
      description: "Manage Network Connectivity Center spokes",
      subcommands: [
        {
          name: "activate",
          description: "Activate a spoke",
          hidden: true,
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
              name: "--global",
              description: "Indicates that the spoke is global",
              hidden: true,
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRegion2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SPOKE",
            description:
              "ID of the spoke or fully qualified identifier for the spoke",
          },
        },
        {
          name: "deactivate",
          description: "Deactivate a spoke",
          hidden: true,
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
              name: "--global",
              description: "Indicates that the spoke is global",
              hidden: true,
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRegion2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SPOKE",
            description:
              "ID of the spoke or fully qualified identifier for the spoke",
          },
        },
        {
          name: "delete",
          description: "Delete a spoke",
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
              name: "--global",
              description: "Indicates that the spoke is global",
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRegion2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SPOKE",
            description:
              "ID of the spoke or fully qualified identifier for the spoke",
          },
        },
        {
          name: "describe",
          description: "Describe a spoke",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--global",
              description: "Indicates that the spoke is global",
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optProject,
            optQuiet,
            optRegion2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SPOKE",
            description:
              "ID of the spoke or fully qualified identifier for the spoke",
          },
        },
        {
          name: "gateways",
          description: "Manage Gateway spokes",
          subcommands: [
            {
              name: "create",
              description: "Create a new Gateway spoke",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                {
                  name: "--capacity",
                  description:
                    "Set the capacity of the gateway in Gbps. _CAPACITY_ must be one of:",
                  priority: 100,
                  args: {
                    name: "CAPACITY",
                    suggestions: ["10g", "1g"],
                  },
                },
                optConfiguration,
                optDescription2,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--group",
                  description:
                    "Group that the spoke will be part of. The group must already exist",
                  priority: 100,
                  args: {
                    name: "GROUP",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optHub,
                optImpersonateServiceAccount,
                {
                  name: "--ip-range-reservations",
                  description: "The IP range reservation for the spoke",
                  priority: 100,
                  args: {
                    name: "CIDR_RANGE",
                    description: "List",
                  },
                },
                optLabels,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                {
                  name: "--region",
                  description:
                    "A Google Cloud region. To see the names of regions, see [Viewing a list of available regions](https://cloud.google.com/compute/docs/regions-zones/viewing-regions-zones#viewing_a_list_of_available_regions)",
                  priority: 100,
                  args: {
                    name: "REGION",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SPOKE",
                description:
                  "ID of the spoke or fully qualified identifier for the spoke",
              },
            },
            {
              name: "update",
              description: "Update a Gateway spoke",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                {
                  name: "--capacity",
                  description:
                    "New gateway capacity of the spoke. _CAPACITY_ must be one of: *10g*, *1g*",
                  args: {
                    name: "CAPACITY",
                    suggestions: ["10g", "1g"],
                  },
                },
                optClearLabels,
                optConfiguration,
                optDescription3,
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
                optNoClearLabels,
                optProject,
                optQuiet,
                optRegion5,
                optRemoveLabels,
                optTraceToken,
                optUpdateLabels,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SPOKE",
                description:
                  "ID of the spoke or fully qualified identifier for the spoke",
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
          name: "linked-interconnect-attachments",
          description: "Manage VLAN attachment spokes",
          subcommands: [
            {
              name: "create",
              description: "Create a new VLAN attachment spoke",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optDescription2,
                optExcludeExportRanges,
                optExcludeImportRanges,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGroup,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optHub,
                optImpersonateServiceAccount,
                optIncludeExportRanges,
                optIncludeImportRanges,
                {
                  name: "--interconnect-attachments",
                  description:
                    "VLAN attachments that the spoke provides connectivity to. The resources must already exist",
                  priority: 100,
                  args: {
                    name: "INTERCONNECT_ATTACHMENTS",
                    description: "List",
                  },
                },
                optLabels,
                optLogHttp,
                optNoAsync,
                optNoSiteToSiteDataTransfer,
                optProject,
                optQuiet,
                optRegion5,
                optSiteToSiteDataTransfer,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SPOKE",
                description:
                  "ID of the spoke or fully qualified identifier for the spoke",
              },
            },
            {
              name: "update",
              description: "Update a VLAN attachment spoke",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optClearLabels,
                optConfiguration,
                optDescription3,
                optExcludeExportRanges,
                optExcludeImportRanges,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optIncludeExportRanges,
                optIncludeImportRanges,
                optLogHttp,
                optNoAsync,
                optNoClearLabels,
                optProject,
                optQuiet,
                optRegion5,
                optRemoveLabels,
                optTraceToken,
                optUpdateLabels,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SPOKE",
                description:
                  "ID of the spoke or fully qualified identifier for the spoke",
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
          name: "linked-producer-vpc-network",
          description: "Manage Producer VPC spokes",
          subcommands: [
            {
              name: "create",
              description: "Create a new Producer VPC spoke",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optDescription2,
                {
                  name: "--exclude-export-ranges",
                  description:
                    "Subnet IP address range(s) to hide from other VPC networks that are connected through Network Connectivity Center",
                  args: {
                    name: "CIDR_RANGE",
                    description: "List",
                  },
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--global",
                  description: "Indicates that the spoke is global",
                },
                {
                  name: "--group",
                  description:
                    "Group that the spoke will be part of. The group must already exist",
                  args: {
                    name: "GROUP",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optHub,
                optImpersonateServiceAccount,
                {
                  name: "--include-export-ranges",
                  description:
                    "Subnet IP address range(s) to export to other VPC networks that are connected through Network Connectivity Center",
                  args: {
                    name: "CIDR_RANGE",
                    description: "List",
                  },
                },
                optLabels,
                optLogHttp,
                {
                  name: "--network",
                  description:
                    "Your VPC network that contains the peering to the Producer VPC, which this spoke connects to the Hub. The peering must already exist and be in the ACTIVE state",
                  priority: 100,
                  args: {
                    name: "NETWORK",
                    description: "String",
                  },
                },
                optNoAsync,
                {
                  name: "--peering",
                  description:
                    "Peering between your network and the Producer VPC, which this spoke connects to the Hub. The peering must already exist and be in the ACTIVATE state",
                  priority: 100,
                  args: {
                    name: "PEERING",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                optRegion,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SPOKE",
                description:
                  "ID of the spoke or fully qualified identifier for the spoke",
              },
            },
            {
              name: "update",
              description: "Update a Producer VPC spoke",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optClearLabels,
                optConfiguration,
                optDescription3,
                {
                  name: "--exclude-export-ranges",
                  description: "New exclude export ranges of the spoke",
                  args: {
                    name: "CIDR_RANGE",
                    description: "List",
                  },
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--global",
                  description: "Indicates that the spoke is global",
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                {
                  name: "--include-export-ranges",
                  description: "New include export ranges of the spoke",
                  args: {
                    name: "CIDR_RANGE",
                    description: "List",
                  },
                },
                optLogHttp,
                optNoAsync,
                optNoClearLabels,
                optProject,
                optQuiet,
                optRegion,
                optRemoveLabels,
                optTraceToken,
                optUpdateLabels,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SPOKE",
                description:
                  "ID of the spoke or fully qualified identifier for the spoke",
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
          name: "linked-router-appliances",
          description: "Manage Router appliance spokes",
          subcommands: [
            {
              name: "create",
              description: "Create a new Router appliance spoke",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optDescription2,
                optExcludeExportRanges,
                optExcludeImportRanges,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGroup,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optHub,
                optImpersonateServiceAccount,
                optIncludeExportRanges,
                optIncludeImportRanges,
                optLabels,
                optLogHttp,
                optNoAsync,
                optNoSiteToSiteDataTransfer,
                optProject,
                optQuiet,
                optRegion5,
                {
                  name: "--router-appliance",
                  description:
                    "Router appliance instance(s) that the spoke provides connectivity to. The resources must already exist",
                  priority: 100,
                  args: {
                    name: "ROUTER_APPLIANCE",
                  },
                },
                optSiteToSiteDataTransfer,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SPOKE",
                description:
                  "ID of the spoke or fully qualified identifier for the spoke",
              },
            },
            {
              name: "update",
              description: "Update a Router appliance spoke",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optClearLabels,
                optConfiguration,
                optDescription3,
                optExcludeExportRanges,
                optExcludeImportRanges,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optIncludeExportRanges,
                optIncludeImportRanges,
                optLogHttp,
                optNoAsync,
                optNoClearLabels,
                optProject,
                optQuiet,
                optRegion5,
                optRemoveLabels,
                {
                  name: "--router-appliance",
                  description:
                    "Router appliance instance(s) with which to replace the set of instances already linked to this spoke. Pass this flag multiple times to replace with multiple instances. For example, use `--router-appliance=instance=new_ins_uri,ip=10.10.0.1` for a single router appliance instance, or `--router-appliance=instance=new_ins_uri_1,ip=10.10.0.1 --router-appliance=instance=new_ins_uri_2,ip=10.10.0.2 ...` for multiple instances",
                  isRepeatable: true,
                  args: {
                    name: "ROUTER_APPLIANCE",
                  },
                },
                optTraceToken,
                optUpdateLabels,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SPOKE",
                description:
                  "ID of the spoke or fully qualified identifier for the spoke",
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
          name: "linked-vpc-network",
          description: "Manage VPC spokes",
          subcommands: [
            {
              name: "create",
              description: "Create a new VPC spoke",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optDescription2,
                {
                  name: "--exclude-export-ranges",
                  description:
                    "Subnet IP address range(s) to hide from other VPC networks that are connected through Network Connectivity Center",
                  args: {
                    name: "CIDR_RANGE",
                    description: "List",
                  },
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--global",
                  description: "Indicates that the spoke is global",
                },
                {
                  name: "--group",
                  description:
                    "Group that the spoke will be part of. The group must already exist",
                  args: {
                    name: "GROUP",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optHub,
                optImpersonateServiceAccount,
                {
                  name: "--include-export-ranges",
                  description:
                    "Subnet IP address range(s) to export to other VPC networks that are connected through Network Connectivity Center",
                  args: {
                    name: "CIDR_RANGE",
                    description: "List",
                  },
                },
                optLabels,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                optRegion,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--vpc-network",
                  description:
                    "VPC network that the spoke provides connectivity to. The resource must already exist",
                  priority: 100,
                  args: {
                    name: "VPC_NETWORK",
                    description: "String",
                  },
                },
              ],
              args: {
                name: "SPOKE",
                description:
                  "ID of the spoke or fully qualified identifier for the spoke",
              },
            },
            {
              name: "update",
              description: "Update a VPC spoke",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optClearLabels,
                optConfiguration,
                optDescription3,
                {
                  name: "--exclude-export-ranges",
                  description: "New exclude export ranges of the spoke",
                  args: {
                    name: "CIDR_RANGE",
                    description: "List",
                  },
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--global",
                  description: "Indicates that the spoke is global",
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                {
                  name: "--include-export-ranges",
                  description: "New include export ranges of the spoke",
                  args: {
                    name: "CIDR_RANGE",
                    description: "List",
                  },
                },
                optLogHttp,
                optNoAsync,
                optNoClearLabels,
                optProject,
                optQuiet,
                optRegion,
                optRemoveLabels,
                optTraceToken,
                optUpdateLabels,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SPOKE",
                description:
                  "ID of the spoke or fully qualified identifier for the spoke",
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
          name: "linked-vpn-tunnels",
          description: "Manage VPN spokes",
          subcommands: [
            {
              name: "create",
              description: "Create a new VPN spoke",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optDescription2,
                optExcludeExportRanges,
                optExcludeImportRanges,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGroup,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optHub,
                optImpersonateServiceAccount,
                optIncludeExportRanges,
                optIncludeImportRanges,
                optLabels,
                optLogHttp,
                optNoAsync,
                optNoSiteToSiteDataTransfer,
                optProject,
                optQuiet,
                optRegion5,
                optSiteToSiteDataTransfer,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--vpn-tunnels",
                  description:
                    "HA VPN tunnels that the spoke provides connectivity to. The resources must already exist",
                  priority: 100,
                  args: {
                    name: "VPN_TUNNELS",
                    description: "List",
                  },
                },
              ],
              args: {
                name: "SPOKE",
                description:
                  "ID of the spoke or fully qualified identifier for the spoke",
              },
            },
            {
              name: "update",
              description: "Update a VPN spoke",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optClearLabels,
                optConfiguration,
                optDescription3,
                optExcludeExportRanges,
                optExcludeImportRanges,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optIncludeExportRanges,
                optIncludeImportRanges,
                optLogHttp,
                optNoAsync,
                optNoClearLabels,
                optProject,
                optQuiet,
                optRegion5,
                optRemoveLabels,
                optTraceToken,
                optUpdateLabels,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SPOKE",
                description:
                  "ID of the spoke or fully qualified identifier for the spoke",
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
          name: "list",
          description: "List spokes",
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
              name: "--global",
              description: "Indicates that the spoke is global",
            },
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
            {
              name: "--region",
              description:
                "A Google Cloud region. To see the names of regions, see [Viewing a list of available regions](https://cloud.google.com/compute/docs/regions-zones/viewing-regions-zones#viewing_a_list_of_available_regions). Use ``-`` to specify all regions",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optSortBy,
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
      name: "transports",
      description: "Manage Network Connectivity Center transports",
      subcommands: [
        {
          name: "create",
          description: "Create a transport",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--activation-key",
              description:
                "Key from the remote provider to establish a connection over the Transport",
              args: {
                name: "ACTIVATION_KEY",
                description: "String",
              },
            },
            {
              name: "--advertised-routes",
              description:
                "List of routes to advertise from the VPC `network` toward the provider",
              args: {
                name: "CIDR_RANGE",
                description: "List",
              },
            },
            optAsync,
            {
              name: "--bandwidth",
              description:
                "Bandwidth of the transport to create. Must be a supported bandwidth on the remote profile. _BANDWIDTH_ must be one of: *100g*, *100m*, *10g*, *1g*, *200m*, *20g*, *2g*, *300m*, *400m*, *500m*, *50g*, *50m*, *5g*",
              priority: 100,
              args: {
                name: "BANDWIDTH",
                suggestions: [
                  "100g",
                  "100m",
                  "10g",
                  "1g",
                  "200m",
                  "20g",
                  "2g",
                  "300m",
                  "400m",
                  "500m",
                  "50g",
                  "50m",
                  "5g",
                ],
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the transport",
              args: {
                name: "DESCRIPTION",
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
            optLogHttp,
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
            optProject,
            optQuiet,
            {
              name: "--region",
              description:
                "For resources [transport, remote-profile], provides fallback value for resource region attribute. When the resource's full URI path is not provided, region will fallback to this flag value",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            {
              name: "--remote-account-id",
              description:
                "Account ID in the remote provider to associate with the generated key",
              priority: 100,
              args: {
                name: "REMOTE_ACCOUNT_ID",
                description: "String",
              },
            },
            {
              name: "--remote-profile",
              description:
                "ID of the remoteTransportProfile or fully qualified identifier for the remoteTransportProfile",
              priority: 100,
              args: {
                name: "REMOTE_PROFILE",
                description: "String",
              },
            },
            {
              name: "--stack-type",
              description:
                "IP version of the routes to be exchanged. _STACK_TYPE_ must be one of: *ipv4-ipv6*, *ipv4-only*",
              args: {
                name: "STACK_TYPE",
                suggestions: ["ipv4-ipv6", "ipv4-only"],
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TRANSPORT",
            description:
              "ID of the transport or fully qualified identifier for the transport",
          },
        },
        {
          name: "delete",
          description: "Delete a transport",
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
            optRegion5,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TRANSPORT",
            description:
              "ID of the transport or fully qualified identifier for the transport",
          },
        },
        {
          name: "describe",
          description: "Describe a transport",
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
            optRegion5,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TRANSPORT",
            description:
              "ID of the transport or fully qualified identifier for the transport",
          },
        },
        {
          name: "list",
          description: "List transports",
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
                'The region of the transports to list. Provide "-" to list all transports',
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
        {
          name: "remote-profiles",
          description:
            "Manage Network Connectivity Center remote transport profiles",
          subcommands: [
            {
              name: "describe",
              description: "Describe a remote transport profile",
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
                optRegion5,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "REMOTE_TRANSPORT_PROFILE",
                description:
                  "ID of the remoteTransportProfile or fully qualified identifier for the remoteTransportProfile",
              },
            },
            {
              name: "list",
              description: "List remote transport profiles",
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
                    'The region of the remote transport profiles to list. Use "-" to list all profiles',
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
          name: "update",
          description: "Update a transport",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--advertised-routes",
              description:
                "List of routes to advertise from the VPC `network` toward the provider",
              args: {
                name: "CIDR_RANGE",
                description: "List",
              },
            },
            optAsync,
            {
              name: "--bandwidth",
              description:
                "Bandwidth of the transport to create. Must be a supported bandwidth on the remote profile. _BANDWIDTH_ must be one of: *100g*, *100m*, *10g*, *1g*, *200m*, *20g*, *2g*, *300m*, *400m*, *500m*, *50g*, *50m*, *5g*",
              args: {
                name: "BANDWIDTH",
                suggestions: [
                  "100g",
                  "100m",
                  "10g",
                  "1g",
                  "200m",
                  "20g",
                  "2g",
                  "300m",
                  "400m",
                  "500m",
                  "50g",
                  "50m",
                  "5g",
                ],
              },
            },
            optBillingProject,
            optClearLabels,
            optConfiguration,
            {
              name: "--description",
              description: "Description of the transport",
              args: {
                name: "DESCRIPTION",
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
            optNoClearLabels,
            optProject,
            optQuiet,
            optRegion5,
            optRemoveLabels,
            {
              name: "--stack-type",
              description:
                "IP version of the routes to be exchanged. _STACK_TYPE_ must be one of: *ipv4-ipv6*, *ipv4-only*",
              args: {
                name: "STACK_TYPE",
                suggestions: ["ipv4-ipv6", "ipv4-only"],
              },
            },
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TRANSPORT",
            description:
              "ID of the transport or fully qualified identifier for the transport",
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
