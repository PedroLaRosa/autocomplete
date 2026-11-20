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

const optBinding: Fig.Option = {
  name: "--binding",
  description:
    "ID of the cloud-access-binding or fully qualified identifier for the cloud-access-binding",
  priority: 100,
  args: {
    name: "BINDING",
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

const optEtag: Fig.Option = {
  name: "--etag",
  description:
    "The etag for the version of the Access Policy that this operation is to be performed on. If, at the time of the operation, the etag for the Access Policy stored in Access Context Manager is different from the specified etag, then the commit operation will not be performed and the call will fail. If etag is not provided, the operation will be performed as if a valid etag is provided",
  args: {
    name: "etag",
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

const optOrganization: Fig.Option = {
  name: "--organization",
  description: "The ID of the organization",
  args: {
    name: "ORGANIZATION",
    description: "String",
  },
};

const optPageSize: Fig.Option = {
  name: "--page-size",
  description:
    "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is determined by the service if it supports paging, otherwise it is *unlimited* (no paging). Paging may be applied before or after *--filter* and *--limit* depending on the service",
  args: {
    name: "PAGE_SIZE",
  },
};

const optPolicy: Fig.Option = {
  name: "--policy",
  description: "ID of the policy or fully qualified identifier for the policy",
  args: {
    name: "POLICY",
    description: "String",
  },
};

const optPolicy2: Fig.Option = {
  name: "--policy",
  description: "The ID of the access policy",
  args: {
    name: "POLICY",
    description: "String",
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
  name: "access-context-manager",
  description: "Manage Access Context Manager resources",
  subcommands: [
    {
      name: "authorized-orgs",
      description:
        "Manage Access Context Manager authorized organizations descriptions",
      subcommands: [
        {
          name: "create",
          description: "Create a new authorized organizations description",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: ["--asset-type", "--asset_type"],
              description:
                "The asset type of this authorized organizations description. For example, device, or credential strength. _ASSET_TYPE_ must be one of: *asset-type-credential-strength*, *asset-type-device*, *asset-type-unspecified*",
              priority: 100,
              args: {
                name: "ASSET_TYPE",
                suggestions: [
                  "asset-type-credential-strength",
                  "asset-type-device",
                  "asset-type-unspecified",
                ],
              },
            },
            optAsync,
            {
              name: ["--authorization-direction", "--authorization_direction"],
              description:
                "Authorization direction of this authorization relationship. Specifies whether to allow specified organizations to evaluate this organization's traffic, or allow specified organizations traffic to be evaluated by this org. _AUTHORIZATION_DIRECTION_ must be one of: *authorization-direction-from*, *authorization-direction-to*, *authorization-direction-unspecified*",
              priority: 100,
              args: {
                name: "AUTHORIZATION_DIRECTION",
                suggestions: [
                  "authorization-direction-from",
                  "authorization-direction-to",
                  "authorization-direction-unspecified",
                ],
              },
            },
            {
              name: ["--authorization-type", "--authorization_type"],
              description:
                "The authorization type of the authorized organizations description. For example, trust, troubleshooting or logging. _AUTHORIZATION_TYPE_ must be one of: *authorization-type-trust*, *authorization-type-unspecified*",
              priority: 100,
              args: {
                name: "AUTHORIZATION_TYPE",
                suggestions: [
                  "authorization-type-trust",
                  "authorization-type-unspecified",
                ],
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
            optNoAsync,
            {
              name: "--orgs",
              description:
                "Comma-separated list of organizations (in the following format: `organizations/<organizationnumber>`)",
              args: {
                name: "ORGS",
                description: "List",
              },
            },
            optPolicy2,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTHORIZED_ORGS_DESC",
            description:
              "ID of the authorized-orgs-desc or fully qualified identifier for the authorized-orgs-desc",
          },
        },
        {
          name: "delete",
          description: "Delete an authorized organizations description",
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
            optPolicy2,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTHORIZED_ORGS_DESC",
            description:
              "ID of the authorized-orgs-desc or fully qualified identifier for the authorized-orgs-desc",
          },
        },
        {
          name: "describe",
          description:
            "Show details about an authorized organizations description",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            optPolicy2,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTHORIZED_ORGS_DESC",
            description:
              "ID of the authorized-orgs-desc or fully qualified identifier for the authorized-orgs-desc",
          },
        },
        {
          name: "list",
          description: "List authorized organizations descriptions",
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
            optPolicy,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description:
            "Update the organizations for an existing authorized organizations description",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-orgs",
              description: "Append the given values to the current orgs",
              args: {
                name: "ORGS",
                description: "List",
              },
            },
            optBillingProject,
            {
              name: "--clear-orgs",
              description: "Empty the current orgs",
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
            optLogHttp,
            {
              name: "--no-clear-orgs",
              description: "Empty the current orgs",
              hidden: true,
            },
            optPolicy2,
            optProject,
            optQuiet,
            {
              name: "--remove-orgs",
              description: "Remove the given values from the current orgs",
              args: {
                name: "ORGS",
                description: "List",
              },
            },
            {
              name: "--set-orgs",
              description:
                "Completely replace the current orgs with the given values",
              args: {
                name: "ORGS",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUTHORIZED_ORGS_DESC",
            description:
              "ID of the authorized_orgs_desc or fully qualified identifier for the authorized_orgs_desc",
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
      name: "cloud-bindings",
      description: "Manage Access Context Manager cloud access bindings",
      subcommands: [
        {
          name: "create",
          description: "Create cloud access bindings for a specific group",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--binding-file",
              description:
                "Path to the file that contains a Google Cloud Platform user access binding",
              args: {
                name: "YAML_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optConfiguration,
            {
              name: "--dry-run-level",
              description:
                "The dry run access level that binds to the given group. The dry run access level will be evaluated but won't be enforced. Denial on dry run access level will be logged. The input must be the full identifier of an access level, such as `accessPolicies/123/accessLevels/new-def`",
              args: {
                name: "DRY_RUN_LEVEL",
                description: "List",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--group-key",
              description:
                "Google Group ID whose members are subject to the restrictions of this binding",
              priority: 100,
              args: {
                name: "GROUP_KEY",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--level",
              description:
                "The access level that binds to the given group. The input must be the full identifier of an access level, such as `accessPolicies/123/accessLevels/abc`",
              args: {
                name: "LEVEL",
                description: "List",
              },
            },
            optLogHttp,
            {
              name: "--organization",
              description: "Parent organization for this binding",
              args: {
                name: "ORGANIZATION",
              },
            },
            {
              name: "--policy",
              description: "The access policy that the access level belongs to",
              hidden: true,
              args: {
                name: "POLICY",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--session-length",
              description:
                "The maximum lifetime of a user session provided as an ISO 8601 duration string. Must be at least one hour or zero seconds, and no more than twenty-four hours. Granularity is limited to seconds",
              args: {
                name: "SESSION_LENGTH",
              },
            },
            {
              name: "--session-reauth-method",
              description:
                "Specifies the type of re-authentication challenge given to the user when their session expires. Defaults to --session-reauth-method=login if unspecified and --session-length is set. Cannot be used when --session-length is empty or 0",
              args: {
                name: "SESSION_REAUTH_METHOD",
                suggestions: ["login", "password", "security-key"],
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "delete",
          description: "Delete a cloud access binding",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optBinding,
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
            optOrganization,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "describe",
          description: "Show details about a cloud access binding",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optBinding,
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
            optOrganization,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "list",
          description: "List cloud access bindings under an organization",
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
            {
              name: "--organization",
              description:
                "ID of the organization or fully qualified identifier for the organization",
              args: {
                name: "ORGANIZATION",
                description: "String",
              },
            },
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
          name: "update",
          description:
            "Update a existing cloud access binding under an organization",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--append",
              description:
                "When true, append the `ScopedAccessSettings` in `--binding-file` to the existing `ScopedAccessSettings` on the binding. When false, the existing binding's `ScopedAccessSettings` will be overwritten. Defaults to false. You may only append `ScopedAccessSettings` that exclusively hold session settings (i.e no access levels)",
            },
            optBillingProject,
            optBinding,
            {
              name: "--binding-file",
              description:
                "Path to the file that contains a Google Cloud user access binding",
              args: {
                name: "YAML_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optConfiguration,
            {
              name: "--dry-run-level",
              description:
                "The dry run access level that replaces the existing dry run level for the given binding. The input must be the full identifier of an access level, such as `accessPolicies/123/accessLevels/new-def`",
              args: {
                name: "DRY_RUN_LEVEL",
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
              name: "--level",
              description:
                "The access level that replaces the existing level for the given binding. The input must be the full identifier of an access level, such as `accessPolicies/123/accessLevels/new-abc`",
              args: {
                name: "LEVEL",
                description: "List",
              },
            },
            optLogHttp,
            {
              name: "--no-append",
              description:
                "When true, append the `ScopedAccessSettings` in `--binding-file` to the existing `ScopedAccessSettings` on the binding. When false, the existing binding's `ScopedAccessSettings` will be overwritten. Defaults to false. You may only append `ScopedAccessSettings` that exclusively hold session settings (i.e no access levels)",
              hidden: true,
            },
            optOrganization,
            {
              name: "--policy",
              description: "The access policy that the access level belongs to",
              hidden: true,
              args: {
                name: "POLICY",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--session-length",
              description:
                "The maximum lifetime of a user session provided as an ISO 8601 duration string. Must be at least one hour or zero seconds, and no more than twenty-four hours. Granularity is limited to seconds",
              args: {
                name: "SESSION_LENGTH",
              },
            },
            {
              name: "--session-reauth-method",
              description:
                "Specifies the security check a user must undergo when their session expires. Defaults to --session-reauth-method=LOGIN if unspecified and --session-length is set. Cannot be used when --session-length is empty or 0. _SESSION_REAUTH_METHOD_ must be one of:",
              args: {
                name: "SESSION_REAUTH_METHOD",
                suggestions: ["login", "password", "security-key"],
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
      name: "levels",
      description: "Manage Access Context Manager levels",
      subcommands: [
        {
          name: "conditions",
          description: "Manage Access Context Manager level conditions",
          subcommands: [
            {
              name: "list",
              description: "List conditions for an access level",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                  name: "--level",
                  description:
                    "ID of the level or fully qualified identifier for the level",
                  priority: 100,
                  args: {
                    name: "LEVEL",
                    description: "String",
                  },
                },
                optLogHttp,
                optPolicy2,
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
          name: "create",
          description: "Create a new access level",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--basic-level-spec",
              description:
                "Path to a file containing a list of basic access level conditions",
              priority: 100,
              args: {
                name: "BASIC_LEVEL_SPEC",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--combine-function",
              description:
                "For a basic level, determines how conditions are combined. _COMBINE_FUNCTION_ must be one of: *and*, *or*",
              args: {
                name: "COMBINE_FUNCTION",
                suggestions: ["and", "or"],
              },
            },
            optConfiguration,
            {
              name: "--custom-level-spec",
              description:
                "Path to a file representing an expression that represents an access level",
              args: {
                name: "CUSTOM_LEVEL_SPEC",
                description: "String",
              },
            },
            {
              name: "--description",
              description: "Long-form description of access level",
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
            optPolicy2,
            optProject,
            optQuiet,
            {
              name: "--title",
              description: "Short human-readable title of the access level",
              priority: 100,
              args: {
                name: "TITLE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "LEVEL",
            description:
              "ID of the level or fully qualified identifier for the level",
          },
        },
        {
          name: "delete",
          description: "Delete an access level",
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
            optPolicy2,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "LEVEL",
            description:
              "ID of the level or fully qualified identifier for the level",
          },
        },
        {
          name: "describe",
          description: "Show details about an access level",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              name: "--level-format",
              description: "The format in which to display the access level",
              hidden: true,
              args: {
                name: "LEVEL_FORMAT",
                suggestions: ["as_defined", "cel"],
              },
            },
            optLogHttp,
            optPolicy2,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "LEVEL",
            description:
              "ID of the level or fully qualified identifier for the level",
          },
        },
        {
          name: "list",
          description: "List access levels",
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
            optPolicy,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "replace-all",
          description: "Replace all existing access levels",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--etag",
              description:
                "An etag which specifies the version of the Access Policy. Only etags that represent the latest version of the Access Policy will be accepted",
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
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--source-file",
              description: "Path to a file containing a list of access levels",
              priority: 100,
              args: {
                name: "SOURCE_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "POLICY",
            description:
              "ID of the policy or fully qualified identifier for the policy",
            isOptional: true,
          },
        },
        {
          name: "update",
          description: "Update an existing access level",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--basic-level-spec",
              description:
                "Path to a file containing a list of basic access level conditions",
              args: {
                name: "BASIC_LEVEL_SPEC",
              },
            },
            optBillingProject,
            {
              name: "--combine-function",
              description:
                "For a basic level, determines how conditions are combined. _COMBINE_FUNCTION_ must be one of: *and*, *or*",
              args: {
                name: "COMBINE_FUNCTION",
                suggestions: ["and", "or"],
              },
            },
            optConfiguration,
            {
              name: "--custom-level-spec",
              description:
                "Path to a file representing an expression for an access level",
              args: {
                name: "CUSTOM_LEVEL_SPEC",
              },
            },
            {
              name: "--description",
              description: "Long-form description of access level",
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
            optPolicy2,
            optProject,
            optQuiet,
            {
              name: "--title",
              description: "Short human-readable title of the access level",
              args: {
                name: "TITLE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "LEVEL",
            description:
              "ID of the level or fully qualified identifier for the level",
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
      name: "perimeters",
      description: "Manage Access Context Manager service perimeters",
      subcommands: [
        {
          name: "create",
          description: "Create a new service perimeter",
          options: [
            {
              name: "--access-levels",
              description:
                "Comma-separated list of IDs for access levels (in the same policy) that an intra-perimeter request must satisfy to be allowed",
              args: {
                name: "LEVEL",
                description: "List",
              },
            },
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Long-form description of service perimeter",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--egress-policies",
              description:
                "Path to a file containing a list of Engress Policies",
              args: {
                name: "YAML_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--enable-vpc-accessible-services",
              description:
                "Whether to restrict API calls within the perimeter to those in the vpc-allowed-services list",
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
              name: "--ingress-policies",
              description:
                "Path to a file containing a list of Ingress Policies",
              args: {
                name: "YAML_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optLogHttp,
            optNoAsync,
            {
              name: "--no-enable-vpc-accessible-services",
              description:
                "Whether to restrict API calls within the perimeter to those in the vpc-allowed-services list",
              hidden: true,
            },
            {
              name: "--perimeter-type",
              description:
                "Type of the perimeter. _PERIMETER_TYPE_ must be one of:",
              args: {
                name: "PERIMETER_TYPE",
                suggestions: ["bridge", "regular"],
              },
            },
            optPolicy2,
            optProject,
            optQuiet,
            {
              name: "--resources",
              description:
                "Comma-separated list of resources (currently only projects, in the form `projects/<projectnumber>`) in this perimeter",
              args: {
                name: "RESOURCES",
                description: "List",
              },
            },
            {
              name: "--restricted-services",
              description:
                "Comma-separated list of services to which the perimeter boundary *does* apply (for example, `storage.googleapis.com`)",
              args: {
                name: "SERVICE",
                description: "List",
              },
            },
            {
              name: "--title",
              description:
                "Short human-readable title for the service perimeter",
              priority: 100,
              args: {
                name: "TITLE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--vpc-accessible-services",
              description:
                "Path to a YAML file containing the full VPC Accessible Services configuration. This file should contain a single YAML object representing a VpcAccessibleServices message as described in the API reference. This cannot be used with `--vpc-allowed-services` or `--enable-vpc-accessible-services`",
              args: {
                name: "VPC_ACCESSIBLE_SERVICES_YAML_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--vpc-allowed-services",
              description:
                'Comma-separated list of APIs accessible from within the Service Perimeter. In order to include all restricted services, use reference "RESTRICTED-SERVICES". Requires vpc-accessible-services be enabled',
              args: {
                name: "VPC_SERVICE",
                description: "List",
              },
            },
          ],
          args: {
            name: "PERIMETER",
            description:
              "ID of the perimeter or fully qualified identifier for the perimeter",
          },
        },
        {
          name: "delete",
          description: "Delete a service perimeter",
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
            optPolicy2,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PERIMETER",
            description:
              "ID of the perimeter or fully qualified identifier for the perimeter",
          },
        },
        {
          name: "describe",
          description: "Show details about a service perimeter",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            optPolicy2,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PERIMETER",
            description:
              "ID of the perimeter or fully qualified identifier for the perimeter",
          },
        },
        {
          name: "dry-run",
          description:
            "Enable management of dry-run mode configuration for Service Perimeters",
          subcommands: [
            {
              name: "create",
              description:
                "Create a dry-run mode configuration for a new or existing Service Perimeter",
              options: [
                {
                  name: "--access-levels",
                  description:
                    "Comma-separated list of IDs for access levels (in the same policy) that an intra-perimeter request must satisfy to be allowed",
                  args: {
                    name: "access_levels",
                    description: "List",
                  },
                },
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--egress-policies",
                  description:
                    "Path to a file containing a list of Egress Policies. This file contains a list of YAML-compliant objects representing Egress Policies described in the API reference. For more information about the alpha version, see: https://cloud.google.com/access-context-manager/docs/reference/rest/v1alpha/accessPolicies.servicePerimeters For more information about non-alpha versions, see: https://cloud.google.com/access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters",
                  args: {
                    name: "YAML_FILE",
                    template: "filepaths",
                  },
                },
                {
                  name: "--enable-vpc-accessible-services",
                  description:
                    "Whether to restrict API calls within the perimeter to those in the `vpc-allowed-services` list",
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
                  name: "--ingress-policies",
                  description:
                    "Path to a file containing a list of Ingress Policies. This file contains a list of YAML-compliant objects representing Ingress Policies described in the API reference. For more information about the alpha version, see: https://cloud.google.com/access-context-manager/docs/reference/rest/v1alpha/accessPolicies.servicePerimeters For more information about non-alpha versions, see: https://cloud.google.com/access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters",
                  args: {
                    name: "YAML_FILE",
                    template: "filepaths",
                  },
                },
                optLogHttp,
                optNoAsync,
                {
                  name: "--no-enable-vpc-accessible-services",
                  description:
                    "Whether to restrict API calls within the perimeter to those in the `vpc-allowed-services` list",
                  hidden: true,
                },
                {
                  name: "--no-perimeter-enable-vpc-accessible-services",
                  description:
                    "Whether to restrict API calls within the perimeter to those in the `vpc-allowed-services` list",
                  hidden: true,
                },
                {
                  name: "--perimeter-access-levels",
                  description:
                    "Comma-separated list of IDs for access levels (in the same policy) that an intra-perimeter request must satisfy to be allowed",
                  args: {
                    name: "access_levels",
                    description: "List",
                  },
                },
                {
                  name: "--perimeter-description",
                  description: "Long-form description of Service Perimeter",
                  args: {
                    name: "PERIMETER_DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--perimeter-egress-policies",
                  description:
                    "Path to a file containing a list of Egress Policies. This file contains a list of YAML-compliant objects representing Egress Policies described in the API reference. For more information about the alpha version, see: https://cloud.google.com/access-context-manager/docs/reference/rest/v1alpha/accessPolicies.servicePerimeters For more information about non-alpha versions, see: https://cloud.google.com/access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters",
                  args: {
                    name: "YAML_FILE",
                    template: "filepaths",
                  },
                },
                {
                  name: "--perimeter-enable-vpc-accessible-services",
                  description:
                    "Whether to restrict API calls within the perimeter to those in the `vpc-allowed-services` list",
                },
                {
                  name: "--perimeter-ingress-policies",
                  description:
                    "Path to a file containing a list of Ingress Policies. This file contains a list of YAML-compliant objects representing Ingress Policies described in the API reference. For more information about the alpha version, see: https://cloud.google.com/access-context-manager/docs/reference/rest/v1alpha/accessPolicies.servicePerimeters For more information about non-alpha versions, see: https://cloud.google.com/access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters",
                  args: {
                    name: "YAML_FILE",
                    template: "filepaths",
                  },
                },
                {
                  name: "--perimeter-resources",
                  description:
                    "Comma-separated list of resources (currently only projects, in the form `projects/<projectnumber>`) in this perimeter",
                  args: {
                    name: "resources",
                    description: "List",
                  },
                },
                {
                  name: "--perimeter-restricted-services",
                  description:
                    "Comma-separated list of services to which the perimeter boundary *does* apply (for example, `storage.googleapis.com`)",
                  args: {
                    name: "restricted_services",
                    description: "List",
                  },
                },
                {
                  name: "--perimeter-title",
                  description:
                    "Short human-readable title for the Service Perimeter",
                  priority: 100,
                  args: {
                    name: "PERIMETER_TITLE",
                    description: "String",
                  },
                },
                {
                  name: "--perimeter-type",
                  description: "Type of the perimeter",
                  priority: 100,
                  args: {
                    name: "PERIMETER_TYPE",
                    description: "String",
                  },
                },
                {
                  name: "--perimeter-vpc-accessible-services",
                  description:
                    "Path to a YAML file containing a VpcAccessibleServices object",
                  args: {
                    name: "VPC_ACCESSIBLE_SERVICES_YAML_FILE",
                    template: "filepaths",
                  },
                },
                {
                  name: "--perimeter-vpc-allowed-services",
                  description:
                    'Comma-separated list of APIs accessible from within the Service Perimeter. In order to include all restricted services, use reference "RESTRICTED-SERVICES". Requires vpc-accessible-services be enabled',
                  args: {
                    name: "vpc_allowed_services",
                    description: "List",
                  },
                },
                optPolicy2,
                optProject,
                optQuiet,
                {
                  name: "--resources",
                  description:
                    "Comma-separated list of resources (currently only projects, in the form `projects/<projectnumber>`) in this perimeter",
                  args: {
                    name: "resources",
                    description: "List",
                  },
                },
                {
                  name: "--restricted-services",
                  description:
                    "Comma-separated list of services to which the perimeter boundary *does* apply (for example, `storage.googleapis.com`)",
                  args: {
                    name: "restricted_services",
                    description: "List",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--vpc-accessible-services",
                  description:
                    "Path to a YAML file containing a VpcAccessibleServices object",
                  args: {
                    name: "VPC_ACCESSIBLE_SERVICES_YAML_FILE",
                    template: "filepaths",
                  },
                },
                {
                  name: "--vpc-allowed-services",
                  description:
                    'Comma-separated list of APIs accessible from within the Service Perimeter. In order to include all restricted services, use reference "RESTRICTED-SERVICES". Requires vpc-accessible-services be enabled',
                  args: {
                    name: "vpc_allowed_services",
                    description: "List",
                  },
                },
              ],
              args: {
                name: "PERIMETER",
                description:
                  "ID of the perimeter or fully qualified identifier for the perimeter",
              },
            },
            {
              name: "delete",
              description:
                "Mark the Service Perimeter as deleted in the dry-run mode",
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
                optPolicy2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "PERIMETER",
                description:
                  "ID of the perimeter or fully qualified identifier for the perimeter",
              },
            },
            {
              name: "describe",
              description:
                "Display the dry-run mode configuration for a Service Perimeter",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                optPolicy2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "PERIMETER",
                description:
                  "ID of the perimeter or fully qualified identifier for the perimeter",
              },
            },
            {
              name: "drop",
              description:
                "Reset the dry-run mode configuration of a Service Perimeter",
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
                optPolicy2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "PERIMETER",
                description:
                  "ID of the perimeter or fully qualified identifier for the perimeter",
              },
            },
            {
              name: "enforce",
              description:
                "Enforces a Service Perimeter's dry-run configuration",
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
                optPolicy2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "PERIMETER",
                description:
                  "ID of the perimeter or fully qualified identifier for the perimeter",
              },
            },
            {
              name: "enforce-all",
              description:
                "Enforces the dry-run mode configuration for all Service Perimeters",
              options: [
                optAccessTokenFile,
                optAccount,
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
                optLogHttp,
                {
                  name: "--policy",
                  description:
                    "The parent Access Policy which owns all Service Perimeters in scope for the commit operation",
                  args: {
                    name: "policy",
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
            {
              name: "list",
              description:
                "List the effective dry-run configuration across all Service Perimeters",
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
                {
                  name: "--policy",
                  description:
                    "Policy resource - The access policy you want to list the effective dry-run configuration for. This represents a Cloud resource",
                  args: {
                    name: "policy",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                optSortBy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "update",
              description:
                "Update the dry-run mode configuration for a Service Perimeter",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--add-access-levels",
                  description:
                    "Append the given values to the current Access Level",
                  args: {
                    name: "ACCESS-LEVELS",
                    description: "List",
                  },
                },
                {
                  name: "--add-resources",
                  description:
                    "Append the given values to the current Resources",
                  args: {
                    name: "RESOURCES",
                    description: "List",
                  },
                },
                {
                  name: "--add-restricted-services",
                  description:
                    "Append the given values to the current Restricted Services",
                  args: {
                    name: "RESTRICTED-SERVICES",
                    description: "List",
                  },
                },
                {
                  name: "--add-vpc-allowed-services",
                  description:
                    "Append the given values to the current vpc allowed services",
                  args: {
                    name: "VPC_SERVICE",
                    description: "List",
                  },
                },
                optAsync,
                optBillingProject,
                {
                  name: "--clear-access-levels",
                  description: "Empty the current Access Level",
                },
                {
                  name: "--clear-egress-policies",
                  description: "Empties existing enforced Egress Policies",
                },
                {
                  name: "--clear-ingress-policies",
                  description: "Empties existing enforced Ingress Policies",
                },
                {
                  name: "--clear-resources",
                  description: "Empty the current Resources",
                },
                {
                  name: "--clear-restricted-services",
                  description: "Empty the current Restricted Services",
                },
                {
                  name: "--clear-vpc-accessible-services",
                  description:
                    "Empties existing enforced VpcAccessibleServices",
                },
                {
                  name: "--clear-vpc-allowed-services",
                  description: "Empty the current vpc allowed services",
                },
                optConfiguration,
                {
                  name: "--enable-vpc-accessible-services",
                  description:
                    "When specified restrict API calls within the Service Perimeter to the set of vpc allowed services. To disable use '--no-enable-vpc-accessible-services'",
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
                optLogHttp,
                optNoAsync,
                {
                  name: "--no-clear-access-levels",
                  description: "Empty the current Access Level",
                  hidden: true,
                },
                {
                  name: "--no-clear-egress-policies",
                  description: "Empties existing enforced Egress Policies",
                  hidden: true,
                },
                {
                  name: "--no-clear-ingress-policies",
                  description: "Empties existing enforced Ingress Policies",
                  hidden: true,
                },
                {
                  name: "--no-clear-resources",
                  description: "Empty the current Resources",
                  hidden: true,
                },
                {
                  name: "--no-clear-restricted-services",
                  description: "Empty the current Restricted Services",
                  hidden: true,
                },
                {
                  name: "--no-clear-vpc-accessible-services",
                  description:
                    "Empties existing enforced VpcAccessibleServices",
                  hidden: true,
                },
                {
                  name: "--no-clear-vpc-allowed-services",
                  description: "Empty the current vpc allowed services",
                  hidden: true,
                },
                {
                  name: "--no-enable-vpc-accessible-services",
                  description:
                    "When specified restrict API calls within the Service Perimeter to the set of vpc allowed services. To disable use '--no-enable-vpc-accessible-services'",
                  hidden: true,
                },
                optPolicy2,
                optProject,
                optQuiet,
                {
                  name: "--remove-access-levels",
                  description:
                    "Remove the given values from the current Access Level",
                  args: {
                    name: "ACCESS-LEVELS",
                    description: "List",
                  },
                },
                {
                  name: "--remove-resources",
                  description:
                    "Remove the given values from the current Resources",
                  args: {
                    name: "RESOURCES",
                    description: "List",
                  },
                },
                {
                  name: "--remove-restricted-services",
                  description:
                    "Remove the given values from the current Restricted Services",
                  args: {
                    name: "RESTRICTED-SERVICES",
                    description: "List",
                  },
                },
                {
                  name: "--remove-vpc-allowed-services",
                  description:
                    "Remove the given values from the current vpc allowed services",
                  args: {
                    name: "VPC_SERVICE",
                    description: "List",
                  },
                },
                {
                  name: "--set-egress-policies",
                  description:
                    "Path to a file containing a list of Egress Policies",
                  args: {
                    name: "YAML_FILE",
                    template: "filepaths",
                  },
                },
                {
                  name: "--set-ingress-policies",
                  description:
                    "Path to a file containing a list of Ingress Policies",
                  args: {
                    name: "YAML_FILE",
                    template: "filepaths",
                  },
                },
                {
                  name: "--set-vpc-accessible-services",
                  description:
                    "Path to a file containing a VpcAccessibleServices object",
                  args: {
                    name: "YAML_FILE",
                    template: "filepaths",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "PERIMETER",
                description:
                  "ID of the perimeter or fully qualified identifier for the perimeter",
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
          description: "List service perimeters",
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
            optPolicy,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "replace-all",
          description: "Replace all existing service perimeters",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--etag",
              description:
                "An etag which specifies the version of the Access Policy. Only etags that represent the latest version of the Access Policy will be accepted",
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
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--source-file",
              description:
                "Path to a file containing a list of service perimeters",
              priority: 100,
              args: {
                name: "SOURCE_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "POLICY",
            description:
              "ID of the policy or fully qualified identifier for the policy",
            isOptional: true,
          },
        },
        {
          name: "update",
          description:
            "Update the enforced configuration for an existing Service Perimeter",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-access-levels",
              description:
                "Append the given values to the current access levels",
              args: {
                name: "LEVEL",
                description: "List",
              },
            },
            {
              name: "--add-resources",
              description: "Append the given values to the current resources",
              args: {
                name: "RESOURCES",
                description: "List",
              },
            },
            {
              name: "--add-restricted-services",
              description:
                "Append the given values to the current restricted services",
              args: {
                name: "SERVICE",
                description: "List",
              },
            },
            {
              name: "--add-vpc-allowed-services",
              description:
                "Append the given values to the current vpc allowed services",
              args: {
                name: "VPC_SERVICE",
                description: "List",
              },
            },
            optBillingProject,
            {
              name: "--clear-access-levels",
              description: "Empty the current access levels",
            },
            {
              name: "--clear-egress-policies",
              description: "Empties existing enforced Egress Policies",
            },
            {
              name: "--clear-ingress-policies",
              description: "Empties existing enforced Ingress Policies",
            },
            {
              name: "--clear-resources",
              description: "Empty the current resources",
            },
            {
              name: "--clear-restricted-services",
              description: "Empty the current restricted services",
            },
            {
              name: "--clear-vpc-accessible-services",
              description: "Empties existing enforced VpcAccessibleServices",
            },
            {
              name: "--clear-vpc-allowed-services",
              description: "Empty the current vpc allowed services",
            },
            optConfiguration,
            {
              name: "--description",
              description: "Long-form description of service perimeter",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--enable-vpc-accessible-services",
              description:
                "When specified restrict API calls within the Service Perimeter to the set of vpc allowed services. To disable use '--no-enable-vpc-accessible-services'",
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
            optLogHttp,
            {
              name: "--no-clear-access-levels",
              description: "Empty the current access levels",
              hidden: true,
            },
            {
              name: "--no-clear-egress-policies",
              description: "Empties existing enforced Egress Policies",
              hidden: true,
            },
            {
              name: "--no-clear-ingress-policies",
              description: "Empties existing enforced Ingress Policies",
              hidden: true,
            },
            {
              name: "--no-clear-resources",
              description: "Empty the current resources",
              hidden: true,
            },
            {
              name: "--no-clear-restricted-services",
              description: "Empty the current restricted services",
              hidden: true,
            },
            {
              name: "--no-clear-vpc-accessible-services",
              description: "Empties existing enforced VpcAccessibleServices",
              hidden: true,
            },
            {
              name: "--no-clear-vpc-allowed-services",
              description: "Empty the current vpc allowed services",
              hidden: true,
            },
            {
              name: "--no-enable-vpc-accessible-services",
              description:
                "When specified restrict API calls within the Service Perimeter to the set of vpc allowed services. To disable use '--no-enable-vpc-accessible-services'",
              hidden: true,
            },
            optPolicy2,
            optProject,
            optQuiet,
            {
              name: "--remove-access-levels",
              description:
                "Remove the given values from the current access levels",
              args: {
                name: "LEVEL",
                description: "List",
              },
            },
            {
              name: "--remove-resources",
              description: "Remove the given values from the current resources",
              args: {
                name: "RESOURCES",
                description: "List",
              },
            },
            {
              name: "--remove-restricted-services",
              description:
                "Remove the given values from the current restricted services",
              args: {
                name: "SERVICE",
                description: "List",
              },
            },
            {
              name: "--remove-vpc-allowed-services",
              description:
                "Remove the given values from the current vpc allowed services",
              args: {
                name: "VPC_SERVICE",
                description: "List",
              },
            },
            {
              name: "--set-access-levels",
              description:
                "Completely replace the current access levels with the given values",
              args: {
                name: "LEVEL",
                description: "List",
              },
            },
            {
              name: "--set-egress-policies",
              description:
                "Path to a file containing a list of Egress Policies",
              args: {
                name: "YAML_FILE",
                template: "filepaths",
              },
            },
            {
              name: "--set-ingress-policies",
              description:
                "Path to a file containing a list of Ingress Policies",
              args: {
                name: "YAML_FILE",
                template: "filepaths",
              },
            },
            {
              name: "--set-resources",
              description:
                "Completely replace the current resources with the given values",
              args: {
                name: "RESOURCES",
                description: "List",
              },
            },
            {
              name: "--set-restricted-services",
              description:
                "Completely replace the current restricted services with the given values",
              args: {
                name: "SERVICE",
                description: "List",
              },
            },
            {
              name: "--set-vpc-accessible-services",
              description:
                "Path to a file containing a VpcAccessibleServices object",
              args: {
                name: "YAML_FILE",
                template: "filepaths",
              },
            },
            {
              name: "--title",
              description:
                "Short human-readable title of the service perimeter",
              args: {
                name: "TITLE",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--type",
              description: "Type of the perimeter",
              args: {
                name: "TYPE",
                suggestions: ["bridge", "regular"],
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PERIMETER",
            description:
              "ID of the perimeter or fully qualified identifier for the perimeter",
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
      name: "policies",
      description: "Manage Access Context Manager policies",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding for an access policy",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--condition",
              description:
                "A condition to include in the binding. When the condition is explicitly specified as `None` (`--condition=None`), a binding without a condition is added. When the condition is specified and is not `None`, `--role` cannot be a basic role. Basic roles are `roles/editor`, `roles/owner`, and `roles/viewer`. For more on conditions, refer to the conditions overview guide: https://cloud.google.com/iam/docs/conditions-overview",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--condition-from-file",
              description:
                "Path to a local JSON or YAML file that defines the condition. To see available fields, see the help for `--condition`. Use a full or relative path to a local file containing the value of condition",
              args: {
                name: "CONDITION_FROM_FILE",
                template: "filepaths",
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
            name: "POLICY",
            description:
              "ID of the policy or fully qualified identifier for the policy",
            isOptional: true,
          },
        },
        {
          name: "create",
          description: "Create a new access policy",
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
            {
              name: "--organization",
              description: "Parent organization for the access policies",
              priority: 100,
              args: {
                name: "ORGANIZATION",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--scopes",
              description:
                "Folder or project on which this policy is applicable. You can specify only one folder or project as the scope and the scope must exist within the specified organization. If you don't specify a scope, the policy applies to the entire organization",
              args: {
                name: "SCOPES",
                description: "List",
              },
            },
            {
              name: "--title",
              description: "Short human-readable title of the access policy",
              priority: 100,
              args: {
                name: "TITLE",
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
          description: "Delete an access policy",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "POLICY",
            description:
              "ID of the policy or fully qualified identifier for the policy",
            isOptional: true,
          },
        },
        {
          name: "describe",
          description: "Show details about an access policy",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "POLICY",
            description:
              "ID of the policy or fully qualified identifier for the policy",
            isOptional: true,
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for an access policy",
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
            name: "POLICY",
            description:
              "ID of the policy or fully qualified identifier for the policy",
            isOptional: true,
          },
        },
        {
          name: "list",
          description: "List access policies",
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
            {
              name: "--organization",
              description:
                "ID of the organization or fully qualified identifier for the organization",
              priority: 100,
              args: {
                name: "ORGANIZATION",
                description: "String",
              },
            },
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
          description: "Remove IAM policy binding for an access policy",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--all",
              description:
                "Remove all bindings with this role and principal, irrespective of any conditions",
            },
            optBillingProject,
            {
              name: "--condition",
              description:
                "The condition of the binding that you want to remove. When the condition is explicitly specified as `None` (`--condition=None`), a binding without a condition is removed. Otherwise, only a binding with a condition that exactly matches the specified condition (including the optional description) is removed. For more on conditions, refer to the conditions overview guide: https://cloud.google.com/iam/docs/conditions-overview",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--condition-from-file",
              description:
                "Path to a local JSON or YAML file that defines the condition. To see available fields, see the help for `--condition`. Use a full or relative path to a local file containing the value of condition",
              args: {
                name: "CONDITION_FROM_FILE",
                template: "filepaths",
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
            {
              name: "--no-all",
              description:
                "Remove all bindings with this role and principal, irrespective of any conditions",
              hidden: true,
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
            name: "POLICY",
            description:
              "ID of the policy or fully qualified identifier for the policy",
            isOptional: true,
          },
        },
        {
          name: "set-iam-policy",
          description: "Set IAM policy for an access policy",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              name: "POLICY",
              description:
                "ID of the policy or fully qualified identifier for the policy",
              isOptional: true,
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
          description: "Update an existing access policy",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              name: "--title",
              description: "Short human-readable title of the access policy",
              args: {
                name: "TITLE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "POLICY",
            description:
              "ID of the policy or fully qualified identifier for the policy",
            isOptional: true,
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
      name: "supported-permissions",
      description: "Retrieve VPC Service Controls Supported Permissions",
      subcommands: [
        {
          name: "describe",
          description:
            "Describes which permissions in a provided role are supported by VPC Service Controls",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              name: "--organization",
              description: "Organization of the role you want to describe",
              args: {
                name: "ORGANIZATION",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ROLE_ID",
            description:
              "ID of the role to describe. Curated roles example: roles/viewer. Custom roles example: CustomRole. For custom roles, you must also specify the `--organization` or `--project` flag",
          },
        },
        {
          name: "list",
          description: "Lists all VPC Service Controls supported permissions",
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
      name: "supported-services",
      description: "Retrieve VPC Service Controls Supported Services",
      subcommands: [
        {
          name: "describe",
          description:
            "Gets information about a VPC Service Controls Supported Service",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "SERVICE_NAME",
            description:
              "ID of the supported-service or fully qualified identifier for the supported-service",
          },
        },
        {
          name: "list",
          description: "Lists all VPC Service Controls supported services",
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
