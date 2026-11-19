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
    "Set annotations to new value. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations",
  args: {
    name: "ANNOTATIONS",
  },
};

const optAnnotations2: Fig.Option = {
  name: "--annotations",
  description:
    "User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations",
  args: {
    name: "ANNOTATIONS",
  },
};

const optAsync: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to complete",
};

const optAttachmentPoint: Fig.Option = {
  name: "--attachment-point",
  description:
    "Resource to which the policy is attached. For valid formats, see https://cloud.google.com/iam/help/deny/attachment-point",
  priority: 100,
  args: {
    name: "ATTACHMENT_POINT",
    description: "String",
  },
};

const optAttributeCondition: Fig.Option = {
  name: "--attribute-condition",
  description:
    "A [Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict which otherwise valid authentication credentials issued by the provider should be accepted",
  args: {
    name: "ATTRIBUTE_CONDITION",
    description: "String",
  },
};

const optAttributeCondition2: Fig.Option = {
  name: "--attribute-condition",
  description:
    "[A Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted",
  args: {
    name: "ATTRIBUTE_CONDITION",
    description: "String",
  },
};

const optAttributeMapping: Fig.Option = {
  name: "--attribute-mapping",
  description:
    "Maps attributes from authentication credentials issued by an external identity provider to Google Cloud attributes, such as `subject` and `segment`",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
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

const optClearAnnotations: Fig.Option = {
  name: "--clear-annotations",
  description: "Clear annotations value and set to empty map",
};

const optClearDetailsRules: Fig.Option = {
  name: "--clear-details-rules",
  description: "Clear details_rules value and set to empty list",
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

const optContainerIdFilter: Fig.Option = {
  name: "--container-id-filter",
  description:
    "Apply a filter on the container ids of the attestation rules being listed. Expects a comma-delimited string of project numbers in the format `projects/<project-number>,...`",
  args: {
    name: "CONTAINER_ID_FILTER",
    description: "String",
  },
};

const optDescription: Fig.Option = {
  name: "--description",
  description: "A description for the provider. Cannot exceed 256 characters",
  args: {
    name: "DESCRIPTION",
    description: "String",
  },
};

const optDescription2: Fig.Option = {
  name: "--description",
  description:
    "A description for the workforce pool provider. Cannot exceed 256 characters in length",
  args: {
    name: "DESCRIPTION",
    description: "String",
  },
};

const optDetailedAuditLogging: Fig.Option = {
  name: "--detailed-audit-logging",
  description:
    "Enables detailed audit logging for this provider, which populates additional debug information in STS Cloud Audit Logs. Specify `--no-detailed-audit-logging` to disable it",
};

const optDisabled: Fig.Option = {
  name: "--disabled",
  description:
    "Disables the workforce pool provider. You cannot use a disabled provider to perform new token exchanges or sign-ins. However, existing tokens still grant access. Specify `--no-disabled` to enable a disabled pool",
};

const optDisabled2: Fig.Option = {
  name: "--disabled",
  description:
    "Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access",
};

const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A display name for the provider. Cannot exceed 32 characters",
  args: {
    name: "DISPLAY_NAME",
    description: "String",
  },
};

const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description:
    "A display name for the workforce pool provider. Cannot exceed 32 characters in length",
  args: {
    name: "DISPLAY_NAME",
    description: "String",
  },
};

const optExtendedAttributesFilter: Fig.Option = {
  name: "--extended-attributes-filter",
  description:
    "(DEPRECATED) The filter used to request specific records from the IdP. By default, all of the groups that are associated with a user are fetched. For Microsoft Entra ID, you can add `$search` query parameters using [Keyword Query Language] (https://learn.microsoft.com/en-us/sharepoint/dev/general-development/keyword-query-language-kql-syntax-reference). To learn more about `$search` querying in Microsoft Entra ID, see [Use the `$search` query parameter] (https://learn.microsoft.com/en-us/graph/search-query-parameter)",
  deprecated: true,
  args: {
    name: "EXTENDED_ATTRIBUTES_FILTER",
    description: "String",
  },
};

const optExtraAttributesFilter: Fig.Option = {
  name: "--extra-attributes-filter",
  description:
    "The filter used to request specific records from the IdP. By default, all of the groups that are associated with a user are fetched. For Microsoft Entra ID, you can add `$search` query parameters using [Keyword Query Language] (https://learn.microsoft.com/en-us/sharepoint/dev/general-development/keyword-query-language-kql-syntax-reference). To learn more about `$search` querying in Microsoft Entra ID, see [Use the `$search` query parameter] (https://learn.microsoft.com/en-us/graph/search-query-parameter)",
  args: {
    name: "EXTRA_ATTRIBUTES_FILTER",
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

const optFolder: Fig.Option = {
  name: "--folder",
  description: "The folder id of the accessPolicy resource",
  args: {
    name: "FOLDER",
    description: "String",
  },
};

const optFolder2: Fig.Option = {
  name: "--folder",
  description: "The folder id of the location resource",
  args: {
    name: "FOLDER",
    description: "String",
  },
};

const optFolder3: Fig.Option = {
  name: "--folder",
  description: "The folder id of the policyBinding resource",
  args: {
    name: "FOLDER",
    description: "String",
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

const optGoogleCloudResource: Fig.Option = {
  name: "--google-cloud-resource",
  description:
    "A single workload operating on Google Cloud. This will be set in the attestation rule to be added",
  priority: 100,
  args: {
    name: "GOOGLE_CLOUD_RESOURCE",
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

const optKind: Fig.Option = {
  name: "--kind",
  description: "Policy type. Use `denypolicies` for deny policies",
  priority: 100,
  args: {
    name: "KIND",
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
  priority: 100,
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation2: Fig.Option = {
  name: "--location",
  description: "The location for the workforce pool",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description: "The location id of the accessPolicy resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation4: Fig.Option = {
  name: "--location",
  description: "The location id of the policyBinding resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation5: Fig.Option = {
  name: "--location",
  description: "The location id of the principalAccessBoundaryPolicy resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation6: Fig.Option = {
  name: "--location",
  description: "The location id of the regionalAccessBoundaryPolicy resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation7: Fig.Option = {
  name: "--location",
  description: "The location name",
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

const optManagedIdentity: Fig.Option = {
  name: "--managed-identity",
  description:
    "The ID to use for the managed identity. This value must be 2-63 characters and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified",
  args: {
    name: "MANAGED_IDENTITY",
    description: "String",
  },
};

const optNamespace: Fig.Option = {
  name: "--namespace",
  description:
    "The ID to use for the namespace. This value must be 2-63 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified",
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

const optNoClearAnnotations: Fig.Option = {
  name: "--no-clear-annotations",
  description: "Clear annotations value and set to empty map",
  hidden: true,
};

const optNoClearDetailsRules: Fig.Option = {
  name: "--no-clear-details-rules",
  description: "Clear details_rules value and set to empty list",
  hidden: true,
};

const optNoDetailedAuditLogging: Fig.Option = {
  name: "--no-detailed-audit-logging",
  description:
    "Enables detailed audit logging for this provider, which populates additional debug information in STS Cloud Audit Logs. Specify `--no-detailed-audit-logging` to disable it",
  hidden: true,
};

const optNoDisabled: Fig.Option = {
  name: "--no-disabled",
  description:
    "Disables the workforce pool provider. You cannot use a disabled provider to perform new token exchanges or sign-ins. However, existing tokens still grant access. Specify `--no-disabled` to enable a disabled pool",
  hidden: true,
};

const optNoDisabled2: Fig.Option = {
  name: "--no-disabled",
  description:
    "Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access",
  hidden: true,
};

const optNoShowDeleted: Fig.Option = {
  name: "--no-show-deleted",
  description: "Whether to return soft-deleted resources",
  hidden: true,
};

const optNoUri: Fig.Option = {
  name: "--no-uri",
  description:
    "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
  hidden: true,
};

const optOauthClient: Fig.Option = {
  name: "--oauth-client",
  description:
    "ID to use for the OAuth client, which becomes the final component of the resource name. This value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified",
  args: {
    name: "OAUTH_CLIENT",
    description: "String",
  },
};

const optOrganization: Fig.Option = {
  name: "--organization",
  description: "The organization id of the accessPolicy resource",
  args: {
    name: "ORGANIZATION",
    description: "String",
  },
};

const optOrganization2: Fig.Option = {
  name: "--organization",
  description: "The organization id of the location resource",
  args: {
    name: "ORGANIZATION",
    description: "String",
  },
};

const optOrganization3: Fig.Option = {
  name: "--organization",
  description: "The organization id of the policyBinding resource",
  args: {
    name: "ORGANIZATION",
    description: "String",
  },
};

const optOrganization4: Fig.Option = {
  name: "--organization",
  description:
    "The organization id of the principalAccessBoundaryPolicy resource",
  args: {
    name: "ORGANIZATION",
    description: "String",
  },
};

const optOrganization5: Fig.Option = {
  name: "--organization",
  description:
    "The organization id of the regionalAccessBoundaryPolicy resource",
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

const optProject: Fig.Option = {
  name: "--project",
  description:
    "The Google Cloud project ID to use for this invocation. If omitted, then the current project is assumed; the current project can be listed using `gcloud config list --format='text(core.project)'` and can be set using `gcloud config set project PROJECTID`",
  args: {
    name: "PROJECT_ID",
    description: "String",
  },
};

const optProvider: Fig.Option = {
  name: "--provider",
  description:
    "The ID for the provider, which becomes the final component of the resource name. This value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified",
  args: {
    name: "PROVIDER",
    description: "String",
  },
};

const optProvider2: Fig.Option = {
  name: "--provider",
  description:
    "The ID to use for the workforce pool provider, which becomes the final component of the resource name. This value must be unique within the workforce pool, 4-32 characters in length, and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified",
  args: {
    name: "PROVIDER",
    description: "String",
  },
};

const optQuiet: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input is required, defaults will be used, or an error will be raised",
};

const optRemoveAnnotations: Fig.Option = {
  name: "--remove-annotations",
  description:
    "Remove existing value from map annotations. Sets `remove_annotations` value",
  args: {
    name: "REMOVE_ANNOTATIONS",
    description: "Dict",
  },
};

const optScimTenant: Fig.Option = {
  name: "--scim-tenant",
  description:
    "The ID for the SCIM tenant, which becomes the final component of the resource name. This value must be 4-32 characters, alphanumeric ([a-z0-9-]), and cannot start with gcp-",
  args: {
    name: "SCIM_TENANT",
    description: "String",
  },
};

const optScimUsage: Fig.Option = {
  name: "--scim-usage",
  description:
    "Specifies whether the workforce identity pool provider uses SCIM-managed groups instead of the `google.groups` attribute mapping for authorization checks",
  args: {
    name: "SCIM_USAGE",
    suggestions: ["enabled-for-groups", "scim-usage-unspecified"],
  },
};

const optShowDeleted: Fig.Option = {
  name: "--show-deleted",
  description: "Whether to return soft-deleted resources",
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

const optUpdateAnnotations: Fig.Option = {
  name: "--update-annotations",
  description:
    "Update annotations value or add key value pair. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations",
  args: {
    name: "UPDATE_ANNOTATIONS",
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

const optVendorType: Fig.Option = {
  name: "--vendor-type",
  description: "The vendor type of the third-party identity provider",
  hidden: true,
  args: {
    name: "VENDOR_TYPE",
    suggestions: [
      "adfs",
      "entra-id",
      "forge-rock",
      "generic",
      "jump-cloud",
      "keycloak",
      "okta",
      "one-login",
      "ping-federate",
      "vendor-type-unspecified",
    ],
  },
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

const optWorkforcePool: Fig.Option = {
  name: "--workforce-pool",
  description:
    "The ID to use for the workforce pool, which becomes the final component of the resource name. This value must be a globally unique string of 6 to 63 lowercase letters, digits, or hyphens. It must start with a letter, and cannot have a trailing hyphen. The prefix `gcp-` is reserved for use by Google, and may not be specified",
  args: {
    name: "WORKFORCE_POOL",
    description: "String",
  },
};

const optWorkloadIdentityPool: Fig.Option = {
  name: "--workload-identity-pool",
  description:
    "The ID to use for the pool, which becomes the final component of the resource name. This value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified",
  args: {
    name: "WORKLOAD_IDENTITY_POOL",
    description: "String",
  },
};

const completionSpec: Fig.Spec = {
  name: "iam",
  description: "Manage IAM service accounts and keys",
  subcommands: [
    {
      name: "access-policies",
      description: "Manage Access Policy resources",
      hidden: true,
      subcommands: [
        {
          name: "create",
          description: "Create AccessPolicy instance",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optAnnotations2,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--details-rules",
              description: "Required, A list of access policy rules",
              priority: 100,
              args: {
                name: "DETAILS_RULES",
              },
            },
            {
              name: "--display-name",
              description:
                "The description of the access policy. Must be less than or equal to 63 characters",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--etag",
              description:
                "The etag for the access policy. If this is provided on update, it must match the server's etag",
              args: {
                name: "ETAG",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFolder,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation3,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-validate-only",
              description:
                "If set, validate the request and preview the creation, but do not actually post it",
              hidden: true,
            },
            optOrganization,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            {
              name: "--validate-only",
              description:
                "If set, validate the request and preview the creation, but do not actually post it",
            },
            optVerbosity,
          ],
          args: {
            name: "ACCESS_POLICY",
            description:
              "ID of the accessPolicy or fully qualified identifier for the accessPolicy",
          },
        },
        {
          name: "delete",
          description: "Delete AccessPolicy instance",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--etag",
              description:
                "The etag of the access policy. If this is provided, it must match the server's etag",
              args: {
                name: "ETAG",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFolder,
            {
              name: "--force",
              description:
                "If set to true, the request will force the deletion of the Policy even if the Policy references PolicyBindings",
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation3,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-force",
              description:
                "If set to true, the request will force the deletion of the Policy even if the Policy references PolicyBindings",
              hidden: true,
            },
            {
              name: "--no-validate-only",
              description:
                "If set, validate the request and preview the deletion, but do not actually post it",
              hidden: true,
            },
            optOrganization,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            {
              name: "--validate-only",
              description:
                "If set, validate the request and preview the deletion, but do not actually post it",
            },
            optVerbosity,
          ],
          args: {
            name: "ACCESS_POLICY",
            description:
              "ID of the accessPolicy or fully qualified identifier for the accessPolicy",
          },
        },
        {
          name: "describe",
          description: "Get AccessPolicy instance",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFolder,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation3,
            optLogHttp,
            optOrganization,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ACCESS_POLICY",
            description:
              "ID of the accessPolicy or fully qualified identifier for the accessPolicy",
          },
        },
        {
          name: "list",
          description: "List AccessPolicy instances",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFolder2,
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
            optOrganization2,
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
          name: "search-policy-bindings",
          description: "Search accessPolicies",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFolder,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLimit,
            optLocation3,
            optLogHttp,
            optOrganization,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ACCESS_POLICY",
            description:
              "ID of the accessPolicy or fully qualified identifier for the accessPolicy",
          },
        },
        {
          name: "update",
          description: "Update AccessPolicy instance",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-details-rules",
              description:
                "Add new value to details_rules list. A list of access policy rules",
              args: {
                name: "ADD_DETAILS_RULES",
              },
            },
            optAnnotations,
            optAsync,
            optBillingProject,
            optClearAnnotations,
            {
              name: "--clear-details",
              description:
                "Set googleIamV3AccessPolicy.details back to default value",
            },
            optClearDetailsRules,
            optConfiguration,
            {
              name: "--details-rules",
              description:
                "Set details_rules to new value. A list of access policy rules",
              args: {
                name: "DETAILS_RULES",
              },
            },
            {
              name: "--display-name",
              description:
                "The description of the access policy. Must be less than or equal to 63 characters",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--etag",
              description:
                "The etag for the access policy. If this is provided on update, it must match the server's etag",
              args: {
                name: "ETAG",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFolder,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation3,
            optLogHttp,
            optNoAsync,
            optNoClearAnnotations,
            {
              name: "--no-clear-details",
              description:
                "Set googleIamV3AccessPolicy.details back to default value",
              hidden: true,
            },
            optNoClearDetailsRules,
            {
              name: "--no-validate-only",
              description:
                "If set, validate the request and preview the update, but do not actually post it",
            },
            optOrganization,
            optProject,
            optQuiet,
            optRemoveAnnotations,
            {
              name: "--remove-details-rules",
              description:
                "Remove existing value from details_rules list. A list of access policy rules",
              args: {
                name: "REMOVE_DETAILS_RULES",
              },
            },
            optTraceToken,
            optUpdateAnnotations,
            optUserOutputEnabled,
            {
              name: "--validate-only",
              description:
                "If set, validate the request and preview the update, but do not actually post it. Use *--validate-only* to enable and *--no-validate-only* to disable",
            },
            optVerbosity,
          ],
          args: {
            name: "ACCESS_POLICY",
            description:
              "ID of the accessPolicy or fully qualified identifier for the accessPolicy",
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
      name: "list-grantable-roles",
      description: "List IAM grantable roles for a resource",
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
        optLogHttp,
        {
          name: "--page-size",
          description:
            "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is *300*. Paging may be applied before or after *--filter* and *--limit* depending on the service",
          args: {
            name: "PAGE_SIZE",
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
        name: "RESOURCE",
        description:
          "The full resource name or URI to get the list of roles for",
      },
    },
    {
      name: "list-testable-permissions",
      description: "List IAM testable permissions for a resource",
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
        optLogHttp,
        optProject,
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "RESOURCE",
        description:
          "The full resource name or URI to get the testable permissions for",
      },
    },
    {
      name: "oauth-clients",
      description: "Create and manage OAuth clients",
      subcommands: [
        {
          name: "create",
          description: "Create an OAuth client",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--allowed-grant-types",
              description:
                "A list of OAuth grant types that are allowed for the OAuth client",
              priority: 100,
              args: {
                name: "ALLOWED_GRANT_TYPES",
                description: "List",
              },
            },
            {
              name: "--allowed-redirect-uris",
              description:
                "A list of redirect uris that is allowed for redirecting when the authorization is completed",
              priority: 100,
              args: {
                name: "ALLOWED_REDIRECT_URIS",
                description: "List",
              },
            },
            {
              name: "--allowed-scopes",
              description:
                "A list of scopes that the OAuth client is allowed to request during OAuth flows",
              priority: 100,
              args: {
                name: "ALLOWED_SCOPES",
                description: "List",
              },
            },
            optBillingProject,
            {
              name: "--client-type",
              description:
                "The type of OAuth client. _CLIENT_TYPE_ must be one of: *confidential-client*, *public-client*",
              priority: 100,
              args: {
                name: "CLIENT_TYPE",
                suggestions: ["confidential-client", "public-client"],
              },
            },
            optConfiguration,
            {
              name: "--description",
              description:
                "A description of the OAuth client. Cannot exceed 256 characters",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--disabled",
              description:
                "Disables the OAuth client. You cannot use a disabled OAuth client for login. Include `--no-disabled` to enable a disabled OAuth client",
            },
            {
              name: "--display-name",
              description:
                "A display name for the OAuth client. Cannot exceed 32 characters",
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
            optLocation7,
            optLogHttp,
            {
              name: "--no-disabled",
              description:
                "Disables the OAuth client. You cannot use a disabled OAuth client for login. Include `--no-disabled` to enable a disabled OAuth client",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "OAUTH_CLIENT",
            description:
              "ID of the oauth client or fully qualified identifier for the oauth client",
          },
        },
        {
          name: "credentials",
          description: "Create and manage OAuth client credentials",
          subcommands: [
            {
              name: "create",
              description: "Create an OAuth client credential",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--disabled",
                  description:
                    "Disables the OAuth client credential. You cannot use a disabled OAuth client credential for OAuth. Include `--no-disabled` to enable a disabled OAuth client credential",
                },
                {
                  name: "--display-name",
                  description:
                    "A display name for the OAuth client credential. Cannot exceed 32 characters",
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
                optLocation7,
                optLogHttp,
                {
                  name: "--no-disabled",
                  description:
                    "Disables the OAuth client credential. You cannot use a disabled OAuth client credential for OAuth. Include `--no-disabled` to enable a disabled OAuth client credential",
                  hidden: true,
                },
                optOauthClient,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "CREDENTIAL",
                description:
                  "ID of the oauth client credential or fully qualified identifier for the oauth client credential",
              },
            },
            {
              name: "delete",
              description: "Delete an OAuth client credential",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                optOauthClient,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "CREDENTIAL",
                description:
                  "ID of the oauth client credential or fully qualified identifier for the oauth client credential",
              },
            },
            {
              name: "describe",
              description: "Describe an OAuth client credential",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                optOauthClient,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "CREDENTIAL",
                description:
                  "ID of the oauth client credential or fully qualified identifier for the oauth client credential",
              },
            },
            {
              name: "list",
              description: "List OAuth client credentials",
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
                optLocation7,
                optLogHttp,
                {
                  name: "--oauth-client",
                  description:
                    "ID of the oauth client or fully qualified identifier for the oauth client",
                  priority: 100,
                  args: {
                    name: "OAUTH_CLIENT",
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
              description: "Update an OAuth client credential",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--disabled",
                  description:
                    "Disables the OAuth client credential. You cannot use a disabled OAuth client credential for OAuth. Include `--no-disabled` to enable a disabled OAuth client credential",
                },
                {
                  name: "--display-name",
                  description:
                    "A display name for the OAuth client credential. Cannot exceed 32 characters",
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
                optLocation7,
                optLogHttp,
                {
                  name: "--no-disabled",
                  description:
                    "Disables the OAuth client credential. You cannot use a disabled OAuth client credential for OAuth. Include `--no-disabled` to enable a disabled OAuth client credential",
                  hidden: true,
                },
                optOauthClient,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "CREDENTIAL",
                description:
                  "ID of the oauth client credential or fully qualified identifier for the oauth client credential",
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
          description: "Delete an OAuth client",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "OAUTH_CLIENT",
            description:
              "ID of the oauth client or fully qualified identifier for the oauth client",
          },
        },
        {
          name: "describe",
          description: "Describe an OAuth client",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "OAUTH_CLIENT",
            description:
              "ID of the oauth client or fully qualified identifier for the oauth client",
          },
        },
        {
          name: "list",
          description: "List OAuth clients",
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
              name: "--no-show-deleted",
              description: "Whether to return soft-deleted OAuth clients",
              hidden: true,
            },
            optPageSize,
            optProject,
            optQuiet,
            {
              name: "--show-deleted",
              description: "Whether to return soft-deleted OAuth clients",
            },
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "undelete",
          description: "Undelete an OAuth client",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "OAUTH_CLIENT",
            description:
              "ID of the oauth client or fully qualified identifier for the oauth client",
          },
        },
        {
          name: "update",
          description: "Update an OAuth client",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--allowed-grant-types",
              description:
                "A list of OAuth grant types that are allowed for the OAuth client",
              args: {
                name: "ALLOWED_GRANT_TYPES",
                description: "List",
              },
            },
            {
              name: "--allowed-redirect-uris",
              description:
                "A list of redirect uris that is allowed for redirecting when the authorization is completed",
              args: {
                name: "ALLOWED_REDIRECT_URIS",
                description: "List",
              },
            },
            {
              name: "--allowed-scopes",
              description:
                "A list of scopes that the OAuth client is allowed to request during OAuth flows",
              args: {
                name: "ALLOWED_SCOPES",
                description: "List",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description:
                "A description of the OAuth client. Cannot exceed 256 characters",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--disabled",
              description:
                "Disables the OAuth client. You cannot use a disabled OAuth client for login. Include `--no-disabled` to enable a disabled OAuth client",
            },
            {
              name: "--display-name",
              description:
                "A display name for the OAuth client. Cannot exceed 32 characters",
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
            optLocation7,
            optLogHttp,
            {
              name: "--no-disabled",
              description:
                "Disables the OAuth client. You cannot use a disabled OAuth client for login. Include `--no-disabled` to enable a disabled OAuth client",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "OAUTH_CLIENT",
            description:
              "ID of the oauth client or fully qualified identifier for the oauth client",
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
      description: "Manage IAM deny policies",
      subcommands: [
        {
          name: "create",
          description:
            "Create a policy on the given attachment point with the given name",
          options: [
            optAccessTokenFile,
            optAccount,
            optAttachmentPoint,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKind,
            optLogHttp,
            {
              name: "--policy-file",
              description:
                "Path to the file that contains the policy, in JSON or YAML format. For valid syntax, see https://cloud.google.com/iam/help/deny/policy-syntax",
              priority: 100,
              args: {
                name: "POLICY_FILE",
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
          args: {
            name: "POLICY_ID",
            description:
              "Policy ID that is unique for the resource to which the policy is attached",
          },
        },
        {
          name: "delete",
          description:
            "Delete a policy on the given attachment point with the given name",
          options: [
            optAccessTokenFile,
            optAccount,
            optAttachmentPoint,
            optBillingProject,
            optConfiguration,
            {
              name: "--etag",
              description:
                "Etag that identifies the version of the existing policy. It can be obtained by running `gcloud iam policies get`. When deleting a policy, if the etag is omitted, the policy is deleted regardless of its current etag. When updating a policy, if the etag is omitted, the update uses the etag provided in the policy file",
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
            optKind,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "POLICY_ID",
            description:
              "Policy ID that is unique for the resource to which the policy is attached",
          },
        },
        {
          name: "get",
          description:
            "Get a policy on the given attachment point with the given name",
          options: [
            optAccessTokenFile,
            optAccount,
            optAttachmentPoint,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optKind,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "POLICY_ID",
            description:
              "Policy ID that is unique for the resource to which the policy is attached",
          },
        },
        {
          name: "list",
          description: "List the policies on the given attachment point",
          options: [
            optAccessTokenFile,
            optAccount,
            optAttachmentPoint,
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
            optKind,
            optLimit,
            optLogHttp,
            optPageSize,
            {
              name: ["--page-token", "--page_token"],
              description:
                "Page token received from a previous call. Provide this token to retrieve the next page",
              args: {
                name: "PAGE_TOKEN",
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
            "Update the policy on the given attachment point with the given name",
          options: [
            optAccessTokenFile,
            optAccount,
            optAttachmentPoint,
            optBillingProject,
            optConfiguration,
            {
              name: "--etag",
              description:
                "Etag that identifies the version of the existing policy. It can be obtained by running `gcloud iam policies get`. When deleting a policy, if the etag is omitted, the policy is deleted regardless of its current etag. When updating a policy, if the etag is omitted, the update uses the etag provided in the policy file",
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
            optKind,
            optLogHttp,
            {
              name: "--policy-file",
              description:
                "Path to the file that contains the policy, in JSON or YAML format. For valid syntax, see https://cloud.google.com/iam/help/deny/policy-syntax",
              priority: 100,
              args: {
                name: "POLICY_FILE",
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
          args: {
            name: "POLICY_ID",
            description:
              "Policy ID that is unique for the resource to which the policy is attached",
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
      name: "policy-bindings",
      description: "Manage PolicyBinding instances",
      subcommands: [
        {
          name: "create",
          description: "Create PolicyBinding instance",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--annotations",
              description:
                "User-defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations",
              args: {
                name: "ANNOTATIONS",
              },
            },
            optAsync,
            optBillingProject,
            {
              name: "--condition-description",
              description:
                "Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI",
              args: {
                name: "CONDITION_DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--condition-expression",
              description:
                "Textual representation of an expression in Common Expression Language syntax",
              args: {
                name: "CONDITION_EXPRESSION",
                description: "String",
              },
            },
            {
              name: "--condition-location",
              description:
                "String indicating the location of the expression for error reporting, e.g. a file name and a position in the file",
              args: {
                name: "CONDITION_LOCATION",
                description: "String",
              },
            },
            {
              name: "--condition-title",
              description:
                "Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression",
              args: {
                name: "CONDITION_TITLE",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--display-name",
              description:
                "The description of the policy binding. Must be less than or equal to 63 characters",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--etag",
              description:
                "The etag for the policy binding. If this is provided on update, it must match the server's etag",
              args: {
                name: "ETAG",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFolder3,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation4,
            optLogHttp,
            optNoAsync,
            optOrganization3,
            {
              name: "--policy",
              description:
                "The resource name of the policy to be bound. The binding parent and policy must belong to the same organization",
              priority: 100,
              args: {
                name: "POLICY",
                description: "String",
              },
            },
            {
              name: "--policy-kind",
              description:
                "The kind of the policy to attach in this binding. This field must be one of the following:",
              args: {
                name: "POLICY_KIND",
                suggestions: [
                  "access",
                  "principal-access-boundary",
                  "regional-access-boundary",
                ],
              },
            },
            optProject,
            optQuiet,
            {
              name: "--target-principal-set",
              description:
                "The full resource name that's used for principal access boundary policy bindings. The principal set must be directly parented by the policy binding's parent or same as the parent if the target is a project, folder, or organization",
              args: {
                name: "TARGET_PRINCIPAL_SET",
                description: "String",
              },
            },
            {
              name: "--target-resource",
              description:
                "The full resource name that's used for access policy bindings",
              hidden: true,
              args: {
                name: "TARGET_RESOURCE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "POLICY_BINDING",
            description:
              "ID of the policyBinding or fully qualified identifier for the policyBinding",
          },
        },
        {
          name: "delete",
          description: "Delete PolicyBinding instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--etag",
              description:
                "The etag of the policy binding. If this is provided, it must match the server's etag",
              args: {
                name: "ETAG",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFolder3,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation4,
            optLogHttp,
            optNoAsync,
            optOrganization3,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "POLICY_BINDING",
            description:
              "ID of the policyBinding or fully qualified identifier for the policyBinding",
          },
        },
        {
          name: "describe",
          description: "Get PolicyBinding instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFolder3,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation4,
            optLogHttp,
            optOrganization3,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "POLICY_BINDING",
            description:
              "ID of the policyBinding or fully qualified identifier for the policyBinding",
          },
        },
        {
          name: "list",
          description: "List PolicyBinding instances",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFolder2,
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
            optOrganization2,
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
          name: "search-target-policy-bindings",
          description: "Search policy bindings by target",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFolder2,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLimit,
            optLocation,
            optLogHttp,
            optOrganization2,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            {
              name: "--target",
              description:
                "The target resource, which is bound to the policy in the binding",
              priority: 100,
              args: {
                name: "TARGET",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Update PolicyBinding instance",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--annotations",
              description:
                "Set annotations to new value. User-defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations",
              args: {
                name: "ANNOTATIONS",
              },
            },
            optAsync,
            optBillingProject,
            optClearAnnotations,
            {
              name: "--clear-condition",
              description:
                "Set googleIamV3PolicyBinding.condition back to default value",
            },
            {
              name: "--condition-description",
              description:
                "Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI",
              args: {
                name: "CONDITION_DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--condition-expression",
              description:
                "Textual representation of an expression in Common Expression Language syntax",
              args: {
                name: "CONDITION_EXPRESSION",
                description: "String",
              },
            },
            {
              name: "--condition-location",
              description:
                "String indicating the location of the expression for error reporting, e.g. a file name and a position in the file",
              args: {
                name: "CONDITION_LOCATION",
                description: "String",
              },
            },
            {
              name: "--condition-title",
              description:
                "Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression",
              args: {
                name: "CONDITION_TITLE",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--display-name",
              description:
                "The description of the policy binding. Must be less than or equal to 63 characters",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--etag",
              description:
                "The etag for the policy binding. If this is provided on update, it must match the server's etag",
              args: {
                name: "ETAG",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFolder3,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation4,
            optLogHttp,
            optNoAsync,
            optNoClearAnnotations,
            {
              name: "--no-clear-condition",
              description:
                "Set googleIamV3PolicyBinding.condition back to default value",
              hidden: true,
            },
            optOrganization3,
            optProject,
            optQuiet,
            optRemoveAnnotations,
            optTraceToken,
            {
              name: "--update-annotations",
              description:
                "Update annotations value or add key value pair. User-defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations",
              args: {
                name: "UPDATE_ANNOTATIONS",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "POLICY_BINDING",
            description:
              "ID of the policyBinding or fully qualified identifier for the policyBinding",
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
      name: "principal-access-boundary-policies",
      description: "Manage principal access boundary policies",
      subcommands: [
        {
          name: "create",
          description: "Create PrincipalAccessBoundaryPolicy instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAnnotations2,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--details-enforcement-version",
              description:
                "The version number (for example, `1` or `latest`) that indicates which permissions are able to be blocked by the policy. If empty, the PAB policy version will be set to the most recent version number at the time of the policy's creation",
              args: {
                name: "DETAILS_ENFORCEMENT_VERSION",
                description: "String",
              },
            },
            {
              name: "--details-rules",
              description:
                "Required, A list of principal access boundary policy rules. The number of rules in a policy is limited to 500",
              priority: 100,
              args: {
                name: "DETAILS_RULES",
              },
            },
            {
              name: "--display-name",
              description:
                "The description of the principal access boundary policy. Must be less than or equal to 63 characters",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--etag",
              description:
                "The etag for the principal access boundary. If this is provided on update, it must match the server's etag",
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
            optLocation5,
            optLogHttp,
            optNoAsync,
            optOrganization4,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PRINCIPAL_ACCESS_BOUNDARY_POLICY",
            description:
              "ID of the principalAccessBoundaryPolicy or fully qualified identifier for the principalAccessBoundaryPolicy",
          },
        },
        {
          name: "delete",
          description: "Delete PrincipalAccessBoundaryPolicy instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--etag",
              description:
                "The etag of the principal access boundary policy. If this is provided, it must match the server's etag",
              args: {
                name: "ETAG",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--force",
              description:
                "If set to true, the request will force the deletion of the policy even if the policy is referenced in policy bindings",
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation5,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-force",
              description:
                "If set to true, the request will force the deletion of the policy even if the policy is referenced in policy bindings",
              hidden: true,
            },
            optOrganization4,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PRINCIPAL_ACCESS_BOUNDARY_POLICY",
            description:
              "ID of the principalAccessBoundaryPolicy or fully qualified identifier for the principalAccessBoundaryPolicy",
          },
        },
        {
          name: "describe",
          description: "Get PrincipalAccessBoundaryPolicy instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            optOrganization4,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PRINCIPAL_ACCESS_BOUNDARY_POLICY",
            description:
              "ID of the principalAccessBoundaryPolicy or fully qualified identifier for the principalAccessBoundaryPolicy",
          },
        },
        {
          name: "list",
          description: "List PrincipalAccessBoundaryPolicy instances",
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
            optOrganization2,
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
          name: "search-policy-bindings",
          description: "Search Principal Access Boundary Policy Bindings",
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
            optLocation5,
            optLogHttp,
            optOrganization4,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PRINCIPAL_ACCESS_BOUNDARY_POLICY",
            description:
              "ID of the principalAccessBoundaryPolicy or fully qualified identifier for the principalAccessBoundaryPolicy",
          },
        },
        {
          name: "update",
          description: "Update PrincipalAccessBoundaryPolicy instance",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-details-rules",
              description:
                "Add new value to details_rules list. A list of principal access boundary policy rules. The number of rules in a policy is limited to 500",
              args: {
                name: "ADD_DETAILS_RULES",
              },
            },
            optAnnotations,
            optAsync,
            optBillingProject,
            optClearAnnotations,
            {
              name: "--clear-details",
              description:
                "Set googleIamV3PrincipalAccessBoundaryPolicy.details back to default value",
            },
            optClearDetailsRules,
            optConfiguration,
            {
              name: "--details-enforcement-version",
              description:
                "The version number (for example, `1` or `latest`) that indicates which permissions are able to be blocked by the policy. If empty, the PAB policy version will be set to the most recent version number at the time of the policy's creation",
              args: {
                name: "DETAILS_ENFORCEMENT_VERSION",
                description: "String",
              },
            },
            {
              name: "--details-rules",
              description:
                "Set details_rules to new value. A list of principal access boundary policy rules. The number of rules in a policy is limited to 500",
              args: {
                name: "DETAILS_RULES",
              },
            },
            {
              name: "--display-name",
              description:
                "The description of the principal access boundary policy. Must be less than or equal to 63 characters",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--etag",
              description:
                "The etag for the principal access boundary. If this is provided on update, it must match the server's etag",
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
            optLocation5,
            optLogHttp,
            optNoAsync,
            optNoClearAnnotations,
            {
              name: "--no-clear-details",
              description:
                "Set googleIamV3PrincipalAccessBoundaryPolicy.details back to default value",
              hidden: true,
            },
            optNoClearDetailsRules,
            optOrganization4,
            optProject,
            optQuiet,
            optRemoveAnnotations,
            {
              name: "--remove-details-rules",
              description:
                "Remove existing value from details_rules list. A list of principal access boundary policy rules. The number of rules in a policy is limited to 500",
              args: {
                name: "REMOVE_DETAILS_RULES",
              },
            },
            optTraceToken,
            optUpdateAnnotations,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PRINCIPAL_ACCESS_BOUNDARY_POLICY",
            description:
              "ID of the principalAccessBoundaryPolicy or fully qualified identifier for the principalAccessBoundaryPolicy",
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
      name: "regional-access-boundary-policies",
      description: "Manage Regional Access Boundary Policy resources",
      hidden: true,
      subcommands: [
        {
          name: "create",
          description: "Create a Regional Access Boundary policy",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optAnnotations2,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--details-rules",
              description:
                "Required, The regional access boundary policy rules. Only one rule is supported at this time, requests with more than one will be rejected as invalid",
              priority: 100,
              args: {
                name: "DETAILS_RULES",
              },
            },
            {
              name: "--display-name",
              description:
                "The display name of the regional access boundary policy. Must be less than or equal to 63 characters",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--etag",
              description:
                "The etag for the regional access boundary policy. If this is provided on update, it must match the etag of the policy on the server",
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
            optLocation6,
            optLogHttp,
            optNoAsync,
            optOrganization5,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REGIONAL_ACCESS_BOUNDARY_POLICY",
            description:
              "ID of the regionalAccessBoundaryPolicy or fully qualified identifier for the regionalAccessBoundaryPolicy",
          },
        },
        {
          name: "delete",
          description: "Delete a Regional Access Boundary policy",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--etag",
              description:
                "The etag of the policy. If this is provided, it must match the server's etag",
              args: {
                name: "ETAG",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--force",
              description:
                "If set to true, the request will force the deletion of the Policy even if the Policy references PolicyBindings",
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation6,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-force",
              description:
                "If set to true, the request will force the deletion of the Policy even if the Policy references PolicyBindings",
              hidden: true,
            },
            optOrganization5,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REGIONAL_ACCESS_BOUNDARY_POLICY",
            description:
              "ID of the regionalAccessBoundaryPolicy or fully qualified identifier for the regionalAccessBoundaryPolicy",
          },
        },
        {
          name: "describe",
          description: "Get a Regional Access Boundary policy",
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
            optLocation6,
            optLogHttp,
            optOrganization5,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REGIONAL_ACCESS_BOUNDARY_POLICY",
            description:
              "ID of the regionalAccessBoundaryPolicy or fully qualified identifier for the regionalAccessBoundaryPolicy",
          },
        },
        {
          name: "list",
          description: "List Regional Access Boundary policies",
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
            optLocation,
            optLogHttp,
            optNoUri,
            optOrganization2,
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
          name: "search-policy-bindings",
          description: "Search Regional Access Boundary policy bindings",
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
            optLocation6,
            optLogHttp,
            optOrganization5,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REGIONAL_ACCESS_BOUNDARY_POLICY",
            description:
              "ID of the regionalAccessBoundaryPolicy or fully qualified identifier for the regionalAccessBoundaryPolicy",
          },
        },
        {
          name: "update",
          description: "Update a Regional Access Boundary policy",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-details-rules",
              description:
                "Add new value to details_rules list. The regional access boundary policy rules. Only one rule is supported at this time, requests with more than one will be rejected as invalid",
              args: {
                name: "ADD_DETAILS_RULES",
              },
            },
            optAnnotations,
            optAsync,
            optBillingProject,
            optClearAnnotations,
            {
              name: "--clear-details",
              description:
                "Set googleIamV3RegionalAccessBoundaryPolicy.details back to default value",
            },
            optClearDetailsRules,
            optConfiguration,
            {
              name: "--details-rules",
              description:
                "Set details_rules to new value. The regional access boundary policy rules. Only one rule is supported at this time, requests with more than one will be rejected as invalid",
              args: {
                name: "DETAILS_RULES",
              },
            },
            {
              name: "--display-name",
              description:
                "The display name of the regional access boundary policy. Must be less than or equal to 63 characters",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--etag",
              description:
                "The etag for the regional access boundary policy. If this is provided on update, it must match the etag of the policy on the server",
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
            optLocation6,
            optLogHttp,
            optNoAsync,
            optNoClearAnnotations,
            {
              name: "--no-clear-details",
              description:
                "Set googleIamV3RegionalAccessBoundaryPolicy.details back to default value",
              hidden: true,
            },
            optNoClearDetailsRules,
            optOrganization5,
            optProject,
            optQuiet,
            optRemoveAnnotations,
            {
              name: "--remove-details-rules",
              description:
                "Remove existing value from details_rules list. The regional access boundary policy rules. Only one rule is supported at this time, requests with more than one will be rejected as invalid",
              args: {
                name: "REMOVE_DETAILS_RULES",
              },
            },
            optTraceToken,
            optUpdateAnnotations,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REGIONAL_ACCESS_BOUNDARY_POLICY",
            description:
              "ID of the regionalAccessBoundaryPolicy or fully qualified identifier for the regionalAccessBoundaryPolicy",
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
      name: "roles",
      description: "Create and manipulate roles",
      subcommands: [
        {
          name: "copy",
          description: "Create a role from an existing role",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--dest-organization",
              description: "The organization of the destination role",
              args: {
                name: "DEST_ORGANIZATION",
                description: "String",
              },
            },
            {
              name: "--dest-project",
              description: "The project of the destination role",
              args: {
                name: "DEST_PROJECT",
                description: "String",
              },
            },
            {
              name: "--destination",
              description:
                "The destination role ID for the new custom role. For example: viewer",
              args: {
                name: "DESTINATION",
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
              name: "--source",
              description:
                "The source role ID. For predefined roles, for example: roles/viewer. For custom roles, for example: myCompanyAdmin",
              args: {
                name: "SOURCE",
                description: "String",
              },
            },
            {
              name: "--source-organization",
              description:
                "The organization of the source role if it is an custom role",
              args: {
                name: "SOURCE_ORGANIZATION",
                description: "String",
              },
            },
            {
              name: "--source-project",
              description:
                "The project of the source role if it is an custom role",
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
          description: "Create a custom role for a project or an organization",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "The description of the role you want to create",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--file",
              description:
                "The JSON or YAML file with the IAM Role to create. See https://docs.cloud.google.com/iam/docs/reference/rest/v1/projects.roles",
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
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the role you want to create",
              args: {
                name: "ORGANIZATION",
                description: "String",
              },
            },
            {
              name: "--permissions",
              description:
                "The permissions of the role you want to create. Use commas to separate them",
              args: {
                name: "PERMISSIONS",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--stage",
              description:
                "The state of the role you want to create. This represents a role's lifecycle phase: `ALPHA`, `BETA`, `GA`, `DEPRECATED`, `DISABLED`, `EAP`",
              args: {
                name: "STAGE",
                description: "String",
              },
            },
            {
              name: "--title",
              description: "The title of the role you want to create",
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
            name: "ROLE_ID",
            description:
              "ID of the custom role to create. You must also specify the `--organization` or `--project` flag",
          },
        },
        {
          name: "delete",
          description: "Delete a custom role from an organization or a project",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              description: "Organization of the role you want to delete",
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
              "ID of the custom role to delete. You must also specify the `--organization` or `--project` flag",
          },
        },
        {
          name: "describe",
          description: "Show metadata for a role",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
          description:
            "List predefined roles, or the custom roles for an organization or project",
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
              name: "--no-show-deleted",
              description: "Show deleted roles by specifying this flag",
              hidden: true,
            },
            {
              name: "--organization",
              description: "Organization of the role you want to list",
              args: {
                name: "ORGANIZATION",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--show-deleted",
              description: "Show deleted roles by specifying this flag",
            },
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "undelete",
          description:
            "Undelete a custom role from an organization or a project",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              description: "Organization of the role you want to undelete",
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
              "ID of the custom role to undelete. You must also specify the `--organization` or `--project` flag",
          },
        },
        {
          name: "update",
          description: "Update an IAM custom role",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-permissions",
              description:
                "The permissions you want to add to the role. Use commas to separate them",
              args: {
                name: "ADD_PERMISSIONS",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "The description of the role you want to update",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--file",
              description:
                "The YAML file you want to use to update a role. Can not be specified with other flags except role-id",
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
            optLogHttp,
            {
              name: "--organization",
              description: "Organization of the role you want to update",
              args: {
                name: "ORGANIZATION",
                description: "String",
              },
            },
            {
              name: "--permissions",
              description:
                "The permissions of the role you want to set. Use commas to separate them",
              args: {
                name: "PERMISSIONS",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--remove-permissions",
              description:
                "The permissions you want to remove from the role. Use commas to separate them",
              args: {
                name: "REMOVE_PERMISSIONS",
                description: "String",
              },
            },
            {
              name: "--stage",
              description: "The state of the role you want to update",
              args: {
                name: "STAGE",
                description: "String",
              },
            },
            {
              name: "--title",
              description: "The title of the role you want to update",
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
            name: "ROLE_ID",
            description:
              "ID of the custom role to update. You must also specify the `--organization` or `--project` flag",
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
      name: "service-accounts",
      description: "Create and manipulate service accounts",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add an IAM policy binding to an IAM service account",
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
            name: "SERVICE_ACCOUNT",
            description:
              "ID of the serviceAccount or fully qualified identifier for the serviceAccount",
          },
        },
        {
          name: "create",
          description: "Create a service account for a project",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "A textual description for the account",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "A textual name to display for the account",
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
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "NAME",
            description:
              "The internal name of the new service account. Used to generate an IAM_ACCOUNT (an IAM internal email address used as an identifier of service account), which must be passed to subsequent commands",
          },
        },
        {
          name: "delete",
          description: "Delete a service account from a project",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "SERVICE_ACCOUNT",
            description:
              "The service account to delete. The account should be formatted either as a numeric service account ID or as an email, like this: 123456789876543212345 or my-iam-account@somedomain.com",
          },
        },
        {
          name: "describe",
          description: "Show metadata for a service account from a project",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "SERVICE_ACCOUNT",
            description:
              "The service account to describe. The account should be formatted either as a numeric service account ID or as an email, like this: 123456789876543212345 or my-iam-account@somedomain.com",
          },
        },
        {
          name: "disable",
          description: "Disable an IAM service account",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "SERVICE_ACCOUNT",
            description:
              "ID of the serviceAccount or fully qualified identifier for the serviceAccount",
          },
        },
        {
          name: "enable",
          description: "Enable an IAM service account",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "SERVICE_ACCOUNT",
            description:
              "ID of the serviceAccount or fully qualified identifier for the serviceAccount",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a service account",
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
            name: "SERVICE_ACCOUNT",
            description:
              "The service account whose policy to get. The account should be formatted either as a numeric service account ID or as an email, like this: 123456789876543212345 or my-iam-account@somedomain.com",
          },
        },
        {
          name: "keys",
          description: "Manage service account keys",
          subcommands: [
            {
              name: "create",
              description: "Create a service account key",
              options: [
                optAccessTokenFile,
                optAccount,
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
                  name: "--iam-account",
                  description: "The service account for which to create a key",
                  priority: 100,
                  args: {
                    name: "IAM_ACCOUNT",
                  },
                },
                optImpersonateServiceAccount,
                {
                  name: "--key-file-type",
                  description:
                    "The type of key to create. _KEY_FILE_TYPE_ must be one of: *json*, *p12*",
                  args: {
                    name: "KEY_FILE_TYPE",
                    description: "String",
                    suggestions: ["json", "p12"],
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
                name: "OUTPUT-FILE",
                description:
                  "The path where the resulting private key should be written. File system write permission will be checked on the specified path prior to the key creation",
                template: "filepaths",
              },
            },
            {
              name: "delete",
              description: "Delete a service account key",
              options: [
                optAccessTokenFile,
                optAccount,
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
                  name: "--iam-account",
                  description: "The service account from which to delete a key",
                  priority: 100,
                  args: {
                    name: "IAM_ACCOUNT",
                  },
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
                name: "KEY-ID",
                description: "The key to delete",
              },
            },
            {
              name: "disable",
              description: "Disable a service account key",
              options: [
                optAccessTokenFile,
                optAccount,
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
                  name: "--iam-account",
                  description: "The name of the IAM ServiceAccount",
                  args: {
                    name: "IAM_ACCOUNT",
                    description: "String",
                  },
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
                name: "IAM_KEY",
                description:
                  "ID of the iamKey or fully qualified identifier for the iamKey",
              },
            },
            {
              name: "enable",
              description: "Enable a service account key",
              options: [
                optAccessTokenFile,
                optAccount,
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
                  name: "--iam-account",
                  description: "The name of the IAM ServiceAccount",
                  args: {
                    name: "IAM_ACCOUNT",
                    description: "String",
                  },
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
                name: "IAM_KEY",
                description:
                  "ID of the iamKey or fully qualified identifier for the iamKey",
              },
            },
            {
              name: "list",
              description: "List the keys for a service account",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--created-before",
                  description:
                    'Return only keys created before the specified time. Common time formats are accepted. This is equivalent to --filter="validAfterTime<DATE_TIME". See $ gcloud topic datetimes for information on time formats',
                  args: {
                    name: "CREATED_BEFORE",
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
                {
                  name: "--iam-account",
                  description: "A textual name to display for the account",
                  priority: 100,
                  args: {
                    name: "IAM_ACCOUNT",
                  },
                },
                optImpersonateServiceAccount,
                optLimit,
                optLogHttp,
                {
                  name: "--managed-by",
                  description:
                    "The types of keys to list. _MANAGED_BY_ must be one of: *user*, *system*, *any*",
                  args: {
                    name: "MANAGED_BY",
                    description: "String",
                    suggestions: ["user", "system", "any"],
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
              name: "upload",
              description: "Upload a public key for an IAM service account",
              options: [
                optAccessTokenFile,
                optAccount,
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
                  name: "--iam-account",
                  description:
                    "ID of the iamAccount or fully qualified identifier for the iamAccount",
                  priority: 100,
                  args: {
                    name: "IAM_ACCOUNT",
                    description: "String",
                  },
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
                name: "PUBLIC_KEY_FILE",
                description:
                  "Path of the file containing the public key. Note that only public key data in the format of RSA_X509_PEM is supported. See https://cloud.google.com/iot/docs/concepts/device-security#public_key_format for more information",
                template: "filepaths",
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
          description: "List all of a project's service accounts",
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
          description: "Remove IAM policy binding from a service account",
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
            name: "SERVICE_ACCOUNT",
            description:
              "ID of the serviceAccount or fully qualified identifier for the serviceAccount",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set IAM policy for a service account",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              name: "SERVICE_ACCOUNT",
              description:
                "The service account whose policy to set. The account should be formatted either as a numeric service account ID or as an email, like this: 123456789876543212345 or my-iam-account@somedomain.com",
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
          name: "sign-blob",
          description: "Sign a blob with a managed service account key",
          options: [
            optAccessTokenFile,
            optAccount,
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
              name: "--iam-account",
              description: "The service account to sign as",
              priority: 100,
              args: {
                name: "IAM_ACCOUNT",
                description: "String",
              },
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
              name: "INPUT-FILE",
              description: "A path to the blob file to be signed",
              template: "filepaths",
            },
            {
              name: "OUTPUT-FILE",
              description:
                "A path the resulting signed blob will be written to",
              template: "filepaths",
            },
          ],
        },
        {
          name: "sign-jwt",
          description: "Sign a JWT with a managed service account key",
          options: [
            optAccessTokenFile,
            optAccount,
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
              name: "--iam-account",
              description: "The service account to sign as",
              priority: 100,
              args: {
                name: "IAM_ACCOUNT",
                description: "String",
              },
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
              name: "INPUT-FILE",
              description:
                "A path to the file containing the JSON JWT Claim set to be signed",
              template: "filepaths",
            },
            {
              name: "OUTPUT-FILE",
              description: "A path the resulting signed JWT will be written to",
              template: "filepaths",
            },
          ],
        },
        {
          name: "undelete",
          description: "Undelete a service account for a project",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "ACCOUNT_ID",
            description:
              "The deleted service account's unique ID must be provided when using the undelete command. Unique IDs are a 21 digit number, such as 103271949540120710052",
          },
        },
        {
          name: "update",
          description: "Update an IAM service account",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "The new textual description for the account",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--display-name",
              description: "The new textual name to display for the account",
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
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICE_ACCOUNT",
            description:
              "ID of the serviceAccount or fully qualified identifier for the serviceAccount",
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
      name: "simulator",
      description:
        "Understand how an IAM policy change could impact access before deploying the change",
      subcommands: [
        {
          name: "replay-recent-access",
          description:
            "Determine affected recent access attempts before IAM policy change deployment",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              name: "RESOURCE",
              description: "Full resource name to simulate the IAM policy for",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy",
              template: "filepaths",
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
      name: "workforce-pools",
      description: "Create and manage workforce pools",
      subcommands: [
        {
          name: "create",
          description: "Create a new workforce pool under an organization",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--allowed-services",
              description:
                "Services allowed for web sign-in with the workforce pool. The flag accepts multiple values with the key as `domain` and value as the domain of the service allowed for web sign-in. If not set, by default all the services are allowed",
              args: {
                name: "ALLOWED_SERVICES",
                description: "Dict",
              },
            },
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description:
                "A description for the workforce pool. Cannot exceed 256 characters in length",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--disable-programmatic-signin",
              description:
                "Disable programmatic sign-in for workforce pool users",
            },
            {
              name: "--disabled",
              description: "Whether or not the workforce pool is disabled",
            },
            {
              name: "--display-name",
              description:
                "A display name for the workforce pool. Cannot exceed 32 characters in length",
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
            optLocation2,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-disable-programmatic-signin",
              description:
                "Disable programmatic sign-in for workforce pool users",
              hidden: true,
            },
            {
              name: "--no-disabled",
              description: "Whether or not the workforce pool is disabled",
              hidden: true,
            },
            {
              name: "--organization",
              description:
                "The parent organization of the workforce pool to create",
              priority: 100,
              args: {
                name: "ORGANIZATION",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--session-duration",
              description:
                "How long the Google Cloud access tokens, console sign-in sessions, and gcloud sign-in sessions from this workforce pool are valid. Must be greater than 15 minutes (900s) and less than 12 hours (43200s). If not configured, minted credentials will have a default duration of one hour (3600s)",
              args: {
                name: "SESSION_DURATION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "WORKFORCE_POOL",
            description:
              "ID of the workforce pool or fully qualified identifier for the workforce pool",
          },
        },
        {
          name: "create-cred-config",
          description: "Create a configuration file for generated credentials",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--credential-source-field-name",
              description:
                "Subject token field name (key) in a JSON credential source",
              args: {
                name: "CREDENTIAL_SOURCE_FIELD_NAME",
                description: "String",
              },
            },
            {
              name: "--credential-source-file",
              description:
                "The location of the file which stores the credential",
              args: {
                name: "CREDENTIAL_SOURCE_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--credential-source-headers",
              description:
                "Headers to use when querying the credential-source-url",
              args: {
                name: "key=value",
                description: "Dict",
              },
            },
            {
              name: "--credential-source-type",
              description: "Format of the credential source (JSON or text)",
              args: {
                name: "CREDENTIAL_SOURCE_TYPE",
                description: "String",
              },
            },
            {
              name: "--credential-source-url",
              description: "The URL to obtain the credential from",
              args: {
                name: "CREDENTIAL_SOURCE_URL",
                description: "String",
              },
            },
            {
              name: "--enable-mtls",
              description: "Use mTLS for STS endpoints",
              hidden: true,
            },
            {
              name: "--executable-command",
              description:
                "The full command to run to retrieve the credential. Must be an absolute path for the program including arguments",
              args: {
                name: "EXECUTABLE_COMMAND",
                description: "String",
              },
            },
            {
              name: "--executable-interactive-timeout-millis",
              description:
                "Timeout duration, in milliseconds, to wait for the executable to finish when the command is running in interactive mode",
              args: {
                name: "EXECUTABLE_INTERACTIVE_TIMEOUT_MILLIS",
              },
            },
            {
              name: "--executable-output-file",
              description:
                "Absolute path to the file storing the executable response",
              args: {
                name: "EXECUTABLE_OUTPUT_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--executable-timeout-millis",
              description:
                "Timeout duration, in milliseconds, to wait for the executable to finish",
              args: {
                name: "EXECUTABLE_TIMEOUT_MILLIS",
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
              name: "--no-enable-mtls",
              description: "Use mTLS for STS endpoints",
              hidden: true,
            },
            {
              name: "--output-file",
              description:
                "Location to store the generated credential configuration file",
              priority: 100,
              args: {
                name: "OUTPUT_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--service-account",
              description: "Email of the service account to impersonate",
              priority: 100,
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
              },
            },
            {
              name: "--service-account-token-lifetime-seconds",
              description:
                "Lifetime duration of the service account access token in seconds. Defaults to one hour if not specified. If a lifetime greater than one hour is required, the service account must be added as an allowed value in an Organization Policy that enforces the `constraints/iam.allowServiceAccountCredentialLifetimeExtension` constraint",
              args: {
                name: "SERVICE_ACCOUNT_TOKEN_LIFETIME_SECONDS",
              },
            },
            {
              name: "--subject-token-type",
              description:
                "The type of token being used for authorization. This defaults to urn:ietf:params:oauth:token-type:id_token",
              args: {
                name: "SUBJECT_TOKEN_TYPE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--workforce-pool-user-project",
              description:
                "The client project number used to identify the application (client project) to the server when calling Google APIs. The user principal must have serviceusage.services.use IAM permission to use the specified project",
              priority: 100,
              args: {
                name: "WORKFORCE_POOL_USER_PROJECT",
                description: "String",
              },
            },
          ],
          args: {
            name: "AUDIENCE",
            description: "The workforce pool provider resource name",
          },
        },
        {
          name: "create-login-config",
          description:
            "Create a login configuration file to enable sign-in via a web-based authorization flow using Workforce Identity Federation",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--activate",
              description:
                "Sets the property `auth/login_config_file` to the created login configuration file. Calling `gcloud auth login` will automatically use this login configuration unless it is explicitly unset",
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--enable-mtls",
              description: "Use mTLS for STS endpoints",
              hidden: true,
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
              name: "--no-activate",
              description:
                "Sets the property `auth/login_config_file` to the created login configuration file. Calling `gcloud auth login` will automatically use this login configuration unless it is explicitly unset",
              hidden: true,
            },
            {
              name: "--no-enable-mtls",
              description: "Use mTLS for STS endpoints",
              hidden: true,
            },
            {
              name: "--output-file",
              description:
                "Location to store the generated login configuration file",
              priority: 100,
              args: {
                name: "OUTPUT_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            {
              name: "--universe-cloud-web-domain",
              description: "The universe cloud web domain",
              hidden: true,
              args: {
                name: "UNIVERSE_CLOUD_WEB_DOMAIN",
                description: "String",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUDIENCE",
            description: "Workforce pool provider resource name",
          },
        },
        {
          name: "delete",
          description: "Delete a workforce pool",
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
            name: "WORKFORCE_POOL",
            description:
              "ID of the workforce pool or fully qualified identifier for the workforce pool",
          },
        },
        {
          name: "describe",
          description: "Describe a workforce pool",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "WORKFORCE_POOL",
            description:
              "ID of the workforce pool or fully qualified identifier for the workforce pool",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a workforce pool",
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
            name: "WORKFORCE_POOL",
            description:
              "ID of the workforce pool or fully qualified identifier for the workforce pool",
          },
        },
        {
          name: "list",
          description: "List the workforce pools for an organization",
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
              description: "The location of the workforce pools to list",
              priority: 100,
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--no-show-deleted",
              description:
                "Show soft-deleted workforce pools by specifying this flag",
              hidden: true,
            },
            {
              name: "--organization",
              description:
                "The parent organization of the workforce pools to list",
              priority: 100,
              args: {
                name: "ORGANIZATION",
                description: "String",
              },
            },
            optPageSize,
            optProject,
            optQuiet,
            {
              name: "--show-deleted",
              description:
                "Show soft-deleted workforce pools by specifying this flag",
            },
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "operations",
          description: "Manage IAM workforce pool long-running operations",
          subcommands: [
            {
              name: "describe",
              description: "Describe a workforce pool operation",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                optWorkforcePool,
              ],
              args: {
                name: "OPERATION",
                description:
                  "ID of the workforce pool operation or fully qualified identifier for the workforce pool operation",
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
          description: "Create and manage workforce pool providers",
          subcommands: [
            {
              name: "create-oidc",
              description: "Create a new OIDC workforce pool provider",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optAttributeCondition,
                {
                  name: "--attribute-mapping",
                  description:
                    "Maps claims from the authentication credentials issued by the Identity Provider into Google Cloud IAM attributes, e.g. subject, segment",
                  priority: 100,
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                  },
                },
                {
                  name: "--attribute-sync-interval",
                  description:
                    "An interval that determines how often user attributes are synced from the IdP. Must be between 30 minutes (1800s) and 12 hours (43200s). This configuration is used only when the Google Cloud session length policy is configured. When Google Cloud session length policy is configured and `attribute_sync_interval` is not configured, attributes are synced after a default interval of 12 hours (43200 seconds)",
                  hidden: true,
                  args: {
                    name: "ATTRIBUTE_SYNC_INTERVAL",
                  },
                },
                optBillingProject,
                {
                  name: "--client-id",
                  description:
                    "The OIDC client ID. This must match the audience claim of the JWT issued by the identity provider",
                  priority: 100,
                  args: {
                    name: "CLIENT_ID",
                    description: "String",
                  },
                },
                {
                  name: "--client-secret-value",
                  description:
                    "The OIDC client secret. Required to enable Authorization Code flow for web sign-in",
                  args: {
                    name: "CLIENT_SECRET_VALUE",
                    description: "String",
                  },
                },
                optConfiguration,
                optDescription2,
                optDetailedAuditLogging,
                optDisabled,
                optDisplayName2,
                {
                  name: "--extended-attributes-client-id",
                  description:
                    "(DEPRECATED) The OAuth 2.0 client ID for retrieving extended attributes from the identity provider. Required to get extended group memberships for a subset of Google Cloud products",
                  deprecated: true,
                  priority: 100,
                  args: {
                    name: "EXTENDED_ATTRIBUTES_CLIENT_ID",
                    description: "String",
                  },
                },
                {
                  name: "--extended-attributes-client-secret-value",
                  description:
                    "(DEPRECATED) The OAuth 2.0 client secret for retrieving extended attributes from the identity provider. Required to get extended group memberships for a subset of Google Cloud products",
                  deprecated: true,
                  priority: 100,
                  args: {
                    name: "EXTENDED_ATTRIBUTES_CLIENT_SECRET_VALUE",
                    description: "String",
                  },
                },
                optExtendedAttributesFilter,
                {
                  name: "--extended-attributes-issuer-uri",
                  description:
                    "(DEPRECATED) OIDC identity provider's issuer URI. Must be a valid URI using the `https` scheme. Required to get the OIDC discovery document",
                  deprecated: true,
                  priority: 100,
                  args: {
                    name: "EXTENDED_ATTRIBUTES_ISSUER_URI",
                    description: "String",
                  },
                },
                {
                  name: "--extended-attributes-type",
                  description:
                    "(DEPRECATED) Represents the identity provider and type of claims that should be fetched",
                  deprecated: true,
                  priority: 100,
                  args: {
                    name: "EXTENDED_ATTRIBUTES_TYPE",
                    description: "List",
                  },
                },
                {
                  name: "--extra-attributes-client-id",
                  description:
                    "The OAuth 2.0 client ID for retrieving extra attributes from the identity provider. Required to get the access token using client credentials grant flow",
                  priority: 100,
                  args: {
                    name: "EXTRA_ATTRIBUTES_CLIENT_ID",
                    description: "String",
                  },
                },
                {
                  name: "--extra-attributes-client-secret-value",
                  description:
                    "The OAuth 2.0 client secret for retrieving extra attributes from the identity provider. Required to get the access token using client credentials grant flow",
                  priority: 100,
                  args: {
                    name: "EXTRA_ATTRIBUTES_CLIENT_SECRET_VALUE",
                    description: "String",
                  },
                },
                optExtraAttributesFilter,
                {
                  name: "--extra-attributes-issuer-uri",
                  description:
                    "OIDC identity provider's issuer URI. Must be a valid URI using the `https` scheme. Required to get the OIDC discovery document",
                  priority: 100,
                  args: {
                    name: "EXTRA_ATTRIBUTES_ISSUER_URI",
                    description: "String",
                  },
                },
                {
                  name: "--extra-attributes-type",
                  description:
                    "Represents the identity provider and type of claims that should be fetched. _EXTRA_ATTRIBUTES_TYPE_ must be one of: *attributes-type-unspecified*, *azure-ad-groups-display-name*, *azure-ad-groups-id*, *azure-ad-groups-mail*",
                  priority: 100,
                  args: {
                    name: "EXTRA_ATTRIBUTES_TYPE",
                    suggestions: [
                      "attributes-type-unspecified",
                      "azure-ad-groups-display-name",
                      "azure-ad-groups-id",
                      "azure-ad-groups-mail",
                    ],
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
                  name: "--issuer-uri",
                  description:
                    "The OIDC issuer URI. Must be a valid URI using the 'https' scheme",
                  priority: 100,
                  args: {
                    name: "ISSUER_URI",
                    description: "String",
                  },
                },
                {
                  name: "--jwk-json-path",
                  description:
                    'Optional file containing JSON Web Key (JWK) public keys. The file format must follow [JWK specifications](https://www.rfc-editor.org/rfc/rfc7517#section-4). Example file format: ```json { "keys": [ { "kty": "RSA/EC", "alg": "<algorithm>", "use": "sig", "kid": "<key-id>", "n": "", "e": "", "x": "", "y": "", "crv": "" } ] } ``` . Use a full or relative path to a local file containing the value of jwk_json_path',
                  args: {
                    name: "JWK_JSON_PATH",
                    template: "filepaths",
                  },
                },
                optLocation2,
                optLogHttp,
                optNoAsync,
                optNoDetailedAuditLogging,
                optNoDisabled,
                optProject,
                optQuiet,
                optScimUsage,
                optTraceToken,
                optUserOutputEnabled,
                optVendorType,
                optVerbosity,
                {
                  name: "--web-sso-additional-scopes",
                  description:
                    "Additional scopes to request for the OIDC authentication on top of scopes requested by default. By default, the `openid`, `profile` and `email` scopes that are supported by the identity provider are requested",
                  args: {
                    name: "WEB_SSO_ADDITIONAL_SCOPES",
                    description: "List",
                  },
                },
                {
                  name: "--web-sso-assertion-claims-behavior",
                  description:
                    "The behavior for how OIDC Claims are included in the `assertion` object used for attribute mapping and attribute condition",
                  priority: 100,
                  args: {
                    name: "WEB_SSO_ASSERTION_CLAIMS_BEHAVIOR",
                    suggestions: [
                      "assertion-claims-behavior-unspecified",
                      "merge-user-info-over-id-token-claims",
                      "only-id-token-claims",
                    ],
                  },
                },
                {
                  name: "--web-sso-response-type",
                  description:
                    "Response Type to request for in the OIDC Authorization Request for web sign-in",
                  priority: 100,
                  args: {
                    name: "WEB_SSO_RESPONSE_TYPE",
                    suggestions: [
                      "code",
                      "id-token",
                      "response-type-unspecified",
                    ],
                  },
                },
                optWorkforcePool,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workforce pool provider or fully qualified identifier for the workforce pool provider",
              },
            },
            {
              name: "create-saml",
              description: "Create a new SAML workforce pool provider",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optAttributeCondition,
                {
                  name: "--attribute-mapping",
                  description:
                    "Maps claims from the authentication credentials issued by the Identity Provider into Google Cloud IAM attributes, e.g. subject, segment",
                  priority: 100,
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                  },
                },
                optBillingProject,
                optConfiguration,
                optDescription2,
                optDetailedAuditLogging,
                optDisabled,
                optDisplayName2,
                {
                  name: "--extended-attributes-client-id",
                  description:
                    "(DEPRECATED) The OAuth 2.0 client ID for retrieving extended attributes from the identity provider. Required to get extended group memberships for a subset of Google Cloud products",
                  deprecated: true,
                  priority: 100,
                  args: {
                    name: "EXTENDED_ATTRIBUTES_CLIENT_ID",
                    description: "String",
                  },
                },
                {
                  name: "--extended-attributes-client-secret-value",
                  description:
                    "(DEPRECATED) The OAuth 2.0 client secret for retrieving extended attributes from the identity provider. Required to get extended group memberships for a subset of Google Cloud products",
                  deprecated: true,
                  priority: 100,
                  args: {
                    name: "EXTENDED_ATTRIBUTES_CLIENT_SECRET_VALUE",
                    description: "String",
                  },
                },
                optExtendedAttributesFilter,
                {
                  name: "--extended-attributes-issuer-uri",
                  description:
                    "(DEPRECATED) OIDC identity provider's issuer URI. Must be a valid URI using the `https` scheme. Required to get the OIDC discovery document",
                  deprecated: true,
                  priority: 100,
                  args: {
                    name: "EXTENDED_ATTRIBUTES_ISSUER_URI",
                    description: "String",
                  },
                },
                {
                  name: "--extended-attributes-type",
                  description:
                    "(DEPRECATED) Represents the identity provider and type of claims that should be fetched",
                  deprecated: true,
                  priority: 100,
                  args: {
                    name: "EXTENDED_ATTRIBUTES_TYPE",
                    description: "List",
                  },
                },
                {
                  name: "--extra-attributes-client-id",
                  description:
                    "The OAuth 2.0 client ID for retrieving extra attributes from the identity provider. Required to get the access token using client credentials grant flow",
                  priority: 100,
                  args: {
                    name: "EXTRA_ATTRIBUTES_CLIENT_ID",
                    description: "String",
                  },
                },
                {
                  name: "--extra-attributes-client-secret-value",
                  description:
                    "The OAuth 2.0 client secret for retrieving extra attributes from the identity provider. Required to get the access token using client credentials grant flow",
                  priority: 100,
                  args: {
                    name: "EXTRA_ATTRIBUTES_CLIENT_SECRET_VALUE",
                    description: "String",
                  },
                },
                optExtraAttributesFilter,
                {
                  name: "--extra-attributes-issuer-uri",
                  description:
                    "OIDC identity provider's issuer URI. Must be a valid URI using the `https` scheme. Required to get the OIDC discovery document",
                  priority: 100,
                  args: {
                    name: "EXTRA_ATTRIBUTES_ISSUER_URI",
                    description: "String",
                  },
                },
                {
                  name: "--extra-attributes-type",
                  description:
                    "Represents the identity provider and type of claims that should be fetched. _EXTRA_ATTRIBUTES_TYPE_ must be one of: *attributes-type-unspecified*, *azure-ad-groups-display-name*, *azure-ad-groups-id*, *azure-ad-groups-mail*",
                  priority: 100,
                  args: {
                    name: "EXTRA_ATTRIBUTES_TYPE",
                    suggestions: [
                      "attributes-type-unspecified",
                      "azure-ad-groups-display-name",
                      "azure-ad-groups-id",
                      "azure-ad-groups-mail",
                    ],
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
                  name: "--idp-metadata-path",
                  description:
                    "XML file with configuration metadata for the SAML identity provider. The metadata file must follow the [SAML 2.0 metadata specification](https://www.oasis-open.org/committees/download.php/35391/sstc-saml-metadata-errata-2.0-wd-04-diff.pdf). Use a full or relative path to a local file containing the value of idp_metadata_path",
                  priority: 100,
                  args: {
                    name: "IDP_METADATA_PATH",
                    template: "filepaths",
                  },
                },
                optImpersonateServiceAccount,
                optLocation2,
                optLogHttp,
                optNoAsync,
                optNoDetailedAuditLogging,
                optNoDisabled,
                optProject,
                optQuiet,
                optScimUsage,
                optTraceToken,
                optUserOutputEnabled,
                optVendorType,
                optVerbosity,
                optWorkforcePool,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workforce pool provider or fully qualified identifier for the workforce pool provider",
              },
            },
            {
              name: "delete",
              description: "Delete a workforce pool provider",
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
                optWorkforcePool,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workforce pool provider or fully qualified identifier for the workforce pool provider",
              },
            },
            {
              name: "describe",
              description: "Describe a workforce pool provider",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                optWorkforcePool,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workforce pool provider or fully qualified identifier for the workforce pool provider",
              },
            },
            {
              name: "keys",
              description: "Create and manage IAM workforce pool provider keys",
              subcommands: [
                {
                  name: "create",
                  description: "Create a new workforce pool provider key",
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
                    optProvider2,
                    optQuiet,
                    {
                      name: "--spec",
                      description:
                        "The specifications for the key. _SPEC_ must be one of: *key-spec-unspecified*, *rsa-2048*, *rsa-3072*, *rsa-4096*",
                      priority: 100,
                      args: {
                        name: "SPEC",
                        suggestions: [
                          "key-spec-unspecified",
                          "rsa-2048",
                          "rsa-3072",
                          "rsa-4096",
                        ],
                      },
                    },
                    optTraceToken,
                    {
                      name: "--use",
                      description:
                        "The purpose of the key. _USE_ must be one of: *encryption*, *key-use-unspecified*, *signing*",
                      priority: 100,
                      args: {
                        name: "USE",
                        suggestions: [
                          "encryption",
                          "key-use-unspecified",
                          "signing",
                        ],
                      },
                    },
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkforcePool,
                  ],
                  args: {
                    name: "KEY",
                    description:
                      "ID of the workforce pool provider key or fully qualified identifier for the workforce pool provider key",
                  },
                },
                {
                  name: "delete",
                  description: "Delete a workforce pool provider key",
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
                    optProvider2,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkforcePool,
                  ],
                  args: {
                    name: "KEY",
                    description:
                      "ID of the workforce pool provider key or fully qualified identifier for the workforce pool provider key",
                  },
                },
                {
                  name: "describe",
                  description: "Describe a workforce pool provider key",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
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
                    optProvider2,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkforcePool,
                  ],
                  args: {
                    name: "KEY",
                    description:
                      "ID of the workforce pool provider key or fully qualified identifier for the workforce pool provider key",
                  },
                },
                {
                  name: "list",
                  description: "List workforce pool provider keys",
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
                      name: "--no-show-deleted",
                      description:
                        "Show soft-deleted keys by specifying this flag",
                      hidden: true,
                    },
                    optPageSize,
                    optProject,
                    {
                      name: "--provider",
                      description:
                        "ID of the workforce pool provider or fully qualified identifier for the workforce pool provider",
                      priority: 100,
                      args: {
                        name: "PROVIDER",
                        description: "String",
                      },
                    },
                    optQuiet,
                    {
                      name: "--show-deleted",
                      description:
                        "Show soft-deleted keys by specifying this flag",
                    },
                    optSortBy,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkforcePool,
                  ],
                },
                {
                  name: "operations",
                  description:
                    "Manage IAM workforce pool provider key long-running operations",
                  subcommands: [
                    {
                      name: "describe",
                      description:
                        "Describe a workforce pool provider key operation",
                      options: [
                        optAccessTokenFile,
                        optAccount,
                        optBillingProject,
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
                          description:
                            "The ID for the key, which becomes the final component of the resource name. This value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified",
                          args: {
                            name: "KEY",
                            description: "String",
                          },
                        },
                        optLocation2,
                        optLogHttp,
                        optProject,
                        optProvider2,
                        optQuiet,
                        optTraceToken,
                        optUserOutputEnabled,
                        optVerbosity,
                        optWorkforcePool,
                      ],
                      args: {
                        name: "OPERATION",
                        description:
                          "ID of the workforce pool provider key operation or fully qualified identifier for the workforce pool provider key operation",
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
                  name: "undelete",
                  description: "Undelete a workforce pool provider key",
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
                    optProvider2,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkforcePool,
                  ],
                  args: {
                    name: "KEY",
                    description:
                      "ID of the workforce pool provider key or fully qualified identifier for the workforce pool provider key",
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
              description: "List workforce pool providers",
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
                  name: "--no-show-deleted",
                  description:
                    "Show soft-deleted workforce pool providers by specifying this flag",
                  hidden: true,
                },
                optPageSize,
                optProject,
                optQuiet,
                {
                  name: "--show-deleted",
                  description:
                    "Show soft-deleted workforce pool providers by specifying this flag",
                },
                optSortBy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--workforce-pool",
                  description:
                    "ID of the workforce pool or fully qualified identifier for the workforce pool",
                  priority: 100,
                  args: {
                    name: "WORKFORCE_POOL",
                    description: "String",
                  },
                },
              ],
            },
            {
              name: "operations",
              description:
                "Manage IAM workforce pool provider long-running operations",
              subcommands: [
                {
                  name: "describe",
                  description: "Describe a workforce pool provider operation",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
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
                    optProvider2,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkforcePool,
                  ],
                  args: {
                    name: "OPERATION",
                    description:
                      "ID of the workforce pool provider operation or fully qualified identifier for the workforce pool provider operation",
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
              name: "scim-tenants",
              description:
                "Manage IAM workforce identity pool provider SCIM tenants",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create an IAM workforce identity pool provider SCIM tenant",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    {
                      name: "--claim-mapping",
                      description:
                        "A comma-separated list of KEY=VALUE pairs defining attribute mappings",
                      priority: 100,
                      args: {
                        name: "KEY=VALUE",
                        description: "Dict",
                      },
                    },
                    optConfiguration,
                    {
                      name: "--description",
                      description:
                        "Optional, user-specified description for the SCIM tenant (max 256 characters)",
                      args: {
                        name: "DESCRIPTION",
                        description: "String",
                      },
                    },
                    {
                      name: "--display-name",
                      description:
                        "Optional, user-specified display name for the SCIM tenant (max 32 characters)",
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
                    optLocation2,
                    optLogHttp,
                    optProject,
                    optProvider2,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkforcePool,
                  ],
                  args: {
                    name: "SCIM_TENANT",
                    description:
                      "ID of the workforce pool provider scim tenant or fully qualified identifier for the workforce pool provider scim tenant",
                  },
                },
                {
                  name: "delete",
                  description:
                    "Delete an IAM workforce identity pool provider SCIM tenant",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFlagsFile,
                    optFlatten,
                    optFormat,
                    {
                      name: "--hard-delete",
                      description:
                        "Deletes the SCIM tenant immediately. This operation cannot be undone",
                    },
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLocation2,
                    optLogHttp,
                    {
                      name: "--no-hard-delete",
                      description:
                        "Deletes the SCIM tenant immediately. This operation cannot be undone",
                      hidden: true,
                    },
                    optProject,
                    optProvider2,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkforcePool,
                  ],
                  args: {
                    name: "SCIM_TENANT",
                    description:
                      "ID of the workforce pool provider scim tenant or fully qualified identifier for the workforce pool provider scim tenant",
                  },
                },
                {
                  name: "describe",
                  description:
                    "Describe an IAM workforce identity pool provider SCIM tenant",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
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
                    optProvider2,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkforcePool,
                  ],
                  args: {
                    name: "SCIM_TENANT",
                    description:
                      "ID of the workforce pool provider scim tenant or fully qualified identifier for the workforce pool provider scim tenant",
                  },
                },
                {
                  name: "list",
                  description:
                    "List IAM workforce identity pool provider SCIM tenants",
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
                      name: "--no-show-deleted",
                      description:
                        "Include SCIM tenants that have been deleted",
                      hidden: true,
                    },
                    optPageSize,
                    optProject,
                    {
                      name: "--provider",
                      description:
                        "ID of the workforce pool provider or fully qualified identifier for the workforce pool provider",
                      priority: 100,
                      args: {
                        name: "PROVIDER",
                        description: "String",
                      },
                    },
                    optQuiet,
                    {
                      name: "--show-deleted",
                      description:
                        "Include SCIM tenants that have been deleted",
                    },
                    optSortBy,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkforcePool,
                  ],
                },
                {
                  name: "tokens",
                  description:
                    "Manage IAM workforce identity pool provider SCIM tenant tokens",
                  subcommands: [
                    {
                      name: "create",
                      description:
                        "Create an IAM workforce identity pool provider SCIM tenant token",
                      options: [
                        optAccessTokenFile,
                        optAccount,
                        optBillingProject,
                        optConfiguration,
                        {
                          name: "--display-name",
                          description:
                            "Optional, user-specified display name for the SCIM token (max 32 characters)",
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
                        optLocation2,
                        optLogHttp,
                        optProject,
                        optProvider2,
                        optQuiet,
                        optScimTenant,
                        optTraceToken,
                        optUserOutputEnabled,
                        optVerbosity,
                        optWorkforcePool,
                      ],
                      args: {
                        name: "TOKEN",
                        description:
                          "ID of the workforce pool provider scim token or fully qualified identifier for the workforce pool provider scim token",
                      },
                    },
                    {
                      name: "delete",
                      description:
                        "Delete an IAM workforce identity pool provider SCIM tenant token",
                      options: [
                        optAccessTokenFile,
                        optAccount,
                        optBillingProject,
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
                        optProvider2,
                        optQuiet,
                        optScimTenant,
                        optTraceToken,
                        optUserOutputEnabled,
                        optVerbosity,
                        optWorkforcePool,
                      ],
                      args: {
                        name: "TOKEN",
                        description:
                          "ID of the workforce pool provider scim token or fully qualified identifier for the workforce pool provider scim token",
                      },
                    },
                    {
                      name: "describe",
                      description:
                        "Describe an IAM workforce identity pool provider SCIM tenant token",
                      options: [
                        optAccessTokenFile,
                        optAccount,
                        optBillingProject,
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
                        optProvider2,
                        optQuiet,
                        optScimTenant,
                        optTraceToken,
                        optUserOutputEnabled,
                        optVerbosity,
                        optWorkforcePool,
                      ],
                      args: {
                        name: "TOKEN",
                        description:
                          "ID of the workforce pool provider scim token or fully qualified identifier for the workforce pool provider scim token",
                      },
                    },
                    {
                      name: "list",
                      description:
                        "List IAM workforce identity pool provider SCIM tenant tokens",
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
                          name: "--no-show-deleted",
                          description:
                            "Include soft-deleted tokens in the results",
                          hidden: true,
                        },
                        optPageSize,
                        optProject,
                        optProvider2,
                        optQuiet,
                        {
                          name: "--scim-tenant",
                          description:
                            "ID of the workforce pool provider scim tenant or fully qualified identifier for the workforce pool provider scim tenant",
                          priority: 100,
                          args: {
                            name: "SCIM_TENANT",
                            description: "String",
                          },
                        },
                        {
                          name: "--show-deleted",
                          description:
                            "Include soft-deleted tokens in the results",
                        },
                        optSortBy,
                        optTraceToken,
                        optUserOutputEnabled,
                        optVerbosity,
                        optWorkforcePool,
                      ],
                    },
                    {
                      name: "update",
                      description:
                        "Update an IAM workforce identity pool provider SCIM tenant token",
                      options: [
                        optAccessTokenFile,
                        optAccount,
                        optBillingProject,
                        optConfiguration,
                        {
                          name: "--display-name",
                          description:
                            "Optional, user-specified display name for the SCIM token (max 32 characters)",
                          priority: 100,
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
                        optLocation2,
                        optLogHttp,
                        optProject,
                        optProvider2,
                        optQuiet,
                        optScimTenant,
                        optTraceToken,
                        optUserOutputEnabled,
                        optVerbosity,
                        optWorkforcePool,
                      ],
                      args: {
                        name: "TOKEN",
                        description:
                          "ID of the workforce pool provider scim token or fully qualified identifier for the workforce pool provider scim token",
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
                  name: "undelete",
                  description:
                    "Undelete an IAM workforce identity pool provider SCIM tenant",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
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
                    optProvider2,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkforcePool,
                  ],
                  args: {
                    name: "SCIM_TENANT",
                    description:
                      "ID of the workforce pool provider scim tenant or fully qualified identifier for the workforce pool provider scim tenant",
                  },
                },
                {
                  name: "update",
                  description:
                    "Update an IAM workforce identity pool provider SCIM tenant",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    {
                      name: "--claim-mapping",
                      description:
                        "A comma-separated list of KEY=VALUE pairs defining attribute mappings",
                      args: {
                        name: "KEY=VALUE",
                        description: "Dict",
                      },
                    },
                    optConfiguration,
                    {
                      name: "--description",
                      description:
                        "Optional, user-specified description for the SCIM tenant (max 256 characters)",
                      args: {
                        name: "DESCRIPTION",
                        description: "String",
                      },
                    },
                    {
                      name: "--display-name",
                      description:
                        "Optional, user-specified display name for the SCIM tenant (max 32 characters)",
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
                    optLocation2,
                    optLogHttp,
                    optProject,
                    optProvider2,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkforcePool,
                  ],
                  args: {
                    name: "SCIM_TENANT",
                    description:
                      "ID of the workforce pool provider scim tenant or fully qualified identifier for the workforce pool provider scim tenant",
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
              name: "undelete",
              description: "Undelete a workforce pool provider",
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
                optWorkforcePool,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workforce pool provider or fully qualified identifier for the workforce pool provider",
              },
            },
            {
              name: "update-oidc",
              description: "Update an OIDC workforce pool provider",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optAttributeCondition,
                {
                  name: "--attribute-mapping",
                  description:
                    "Maps claims from the authentication credentials issued by the Identity Provider into Google Cloud IAM attributes, e.g. subject, segment",
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                  },
                },
                {
                  name: "--attribute-sync-interval",
                  description:
                    "An interval that determines how often user attributes are synced from the IdP. Must be between 30 minutes (1800s) and 12 hours (43200s). This configuration is used only when the Google Cloud session length policy is configured. When Google Cloud session length policy is configured and `attribute_sync_interval` is not configured, attributes are synced after a default interval of 12 hours (43200 seconds)",
                  hidden: true,
                  args: {
                    name: "ATTRIBUTE_SYNC_INTERVAL",
                  },
                },
                optBillingProject,
                {
                  name: "--clear-attribute-sync-interval",
                  description: "Clear the attribute sync interval",
                  hidden: true,
                },
                {
                  name: "--clear-client-secret",
                  description: "Clear the OIDC client secret",
                },
                {
                  name: "--clear-extended-attributes-config",
                  description: "Clear the extended attributes configuration",
                },
                {
                  name: "--clear-extra-attributes-config",
                  description: "Clear the extra attributes configuration",
                },
                {
                  name: "--clear-scim-usage",
                  description:
                    "Clear the SCIM usage configuration, resetting it to unspecified",
                },
                {
                  name: "--client-id",
                  description:
                    "The OIDC client ID. This must match the audience claim of the JWT issued by the identity provider",
                  args: {
                    name: "CLIENT_ID",
                    description: "String",
                  },
                },
                {
                  name: "--client-secret-value",
                  description:
                    "The OIDC client secret. Required to enable Authorization Code flow for web sign-in",
                  args: {
                    name: "CLIENT_SECRET_VALUE",
                    description: "String",
                  },
                },
                optConfiguration,
                optDescription2,
                optDetailedAuditLogging,
                optDisabled,
                optDisplayName2,
                {
                  name: "--extended-attributes-client-id",
                  description:
                    "(DEPRECATED) The OAuth 2.0 client ID for retrieving extended attributes from the identity provider. Required to get extended group memberships for a subset of Google Cloud products",
                  deprecated: true,
                  args: {
                    name: "EXTENDED_ATTRIBUTES_CLIENT_ID",
                    description: "String",
                  },
                },
                {
                  name: "--extended-attributes-client-secret-value",
                  description:
                    "(DEPRECATED) The OAuth 2.0 client secret for retrieving extended attributes from the identity provider. Required to get extended group memberships for a subset of Google Cloud products",
                  deprecated: true,
                  args: {
                    name: "EXTENDED_ATTRIBUTES_CLIENT_SECRET_VALUE",
                    description: "String",
                  },
                },
                optExtendedAttributesFilter,
                {
                  name: "--extended-attributes-issuer-uri",
                  description:
                    "(DEPRECATED) OIDC identity provider's issuer URI. Must be a valid URI using the `https` scheme. Required to get the OIDC discovery document",
                  deprecated: true,
                  args: {
                    name: "EXTENDED_ATTRIBUTES_ISSUER_URI",
                    description: "String",
                  },
                },
                {
                  name: "--extended-attributes-type",
                  description:
                    "(DEPRECATED) Represents the identity provider and type of claims that should be fetched",
                  deprecated: true,
                  args: {
                    name: "EXTENDED_ATTRIBUTES_TYPE",
                    description: "List",
                  },
                },
                {
                  name: "--extra-attributes-client-id",
                  description:
                    "The OAuth 2.0 client ID for retrieving extra attributes from the identity provider. Required to get the access token using client credentials grant flow",
                  args: {
                    name: "EXTRA_ATTRIBUTES_CLIENT_ID",
                    description: "String",
                  },
                },
                {
                  name: "--extra-attributes-client-secret-value",
                  description:
                    "The OAuth 2.0 client secret for retrieving extra attributes from the identity provider. Required to get the access token using client credentials grant flow",
                  args: {
                    name: "EXTRA_ATTRIBUTES_CLIENT_SECRET_VALUE",
                    description: "String",
                  },
                },
                optExtraAttributesFilter,
                {
                  name: "--extra-attributes-issuer-uri",
                  description:
                    "OIDC identity provider's issuer URI. Must be a valid URI using the `https` scheme. Required to get the OIDC discovery document",
                  args: {
                    name: "EXTRA_ATTRIBUTES_ISSUER_URI",
                    description: "String",
                  },
                },
                {
                  name: "--extra-attributes-type",
                  description:
                    "Represents the identity provider and type of claims that should be fetched. _EXTRA_ATTRIBUTES_TYPE_ must be one of: *attributes-type-unspecified*, *azure-ad-groups-display-name*, *azure-ad-groups-id*, *azure-ad-groups-mail*",
                  args: {
                    name: "EXTRA_ATTRIBUTES_TYPE",
                    suggestions: [
                      "attributes-type-unspecified",
                      "azure-ad-groups-display-name",
                      "azure-ad-groups-id",
                      "azure-ad-groups-mail",
                    ],
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
                  name: "--issuer-uri",
                  description:
                    "The OIDC issuer URI. Must be a valid URI using the 'https' scheme",
                  args: {
                    name: "ISSUER_URI",
                    description: "String",
                  },
                },
                {
                  name: "--jwk-json-path",
                  description:
                    'Optional file containing JSON Web Key (JWK) public keys. The file format must follow [JWK specifications](https://www.rfc-editor.org/rfc/rfc7517#section-4). Example file format: ```json { "keys": [ { "kty": "RSA/EC", "alg": "<algorithm>", "use": "sig", "kid": "<key-id>", "n": "", "e": "", "x": "", "y": "", "crv": "" } ] } ``` . Use a full or relative path to a local file containing the value of jwk_json_path',
                  args: {
                    name: "JWK_JSON_PATH",
                    template: "filepaths",
                  },
                },
                optLocation2,
                optLogHttp,
                optNoAsync,
                {
                  name: "--no-clear-attribute-sync-interval",
                  description: "Clear the attribute sync interval",
                  hidden: true,
                },
                {
                  name: "--no-clear-client-secret",
                  description: "Clear the OIDC client secret",
                  hidden: true,
                },
                {
                  name: "--no-clear-extended-attributes-config",
                  description: "Clear the extended attributes configuration",
                  hidden: true,
                },
                {
                  name: "--no-clear-extra-attributes-config",
                  description: "Clear the extra attributes configuration",
                  hidden: true,
                },
                {
                  name: "--no-clear-scim-usage",
                  description:
                    "Clear the SCIM usage configuration, resetting it to unspecified",
                  hidden: true,
                },
                optNoDetailedAuditLogging,
                optNoDisabled,
                optProject,
                optQuiet,
                optScimUsage,
                optTraceToken,
                optUserOutputEnabled,
                optVendorType,
                optVerbosity,
                {
                  name: "--web-sso-additional-scopes",
                  description:
                    "Additional scopes to request for the OIDC authentication on top of scopes requested by default. By default, the `openid`, `profile` and `email` scopes that are supported by the identity provider are requested",
                  args: {
                    name: "WEB_SSO_ADDITIONAL_SCOPES",
                    description: "List",
                  },
                },
                {
                  name: "--web-sso-assertion-claims-behavior",
                  description:
                    "The behavior for how OIDC Claims are included in the `assertion` object used for attribute mapping and attribute condition. Use `merge-user-info-over-id-token-claims` to merge the UserInfo Endpoint Claims with ID Token Claims, preferring UserInfo Claim Values for the same Claim Name. Currently this option is only available for Authorization Code flow. Use `only-id-token-claims` to include only ID token claims. _WEB_SSO_ASSERTION_CLAIMS_BEHAVIOR_ must be one of: *assertion-claims-behavior-unspecified*, *merge-user-info-over-id-token-claims*, *only-id-token-claims*",
                  args: {
                    name: "WEB_SSO_ASSERTION_CLAIMS_BEHAVIOR",
                    suggestions: [
                      "assertion-claims-behavior-unspecified",
                      "merge-user-info-over-id-token-claims",
                      "only-id-token-claims",
                    ],
                  },
                },
                {
                  name: "--web-sso-response-type",
                  description:
                    "Response Type to request for in the OIDC Authorization Request for web sign-in. Use `code` to select the [authorization code flow](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth) Use `id-token` to select the [implicit flow](https://openid.net/specs/openid-connect-core-1_0.html#ImplicitFlowAuth). _WEB_SSO_RESPONSE_TYPE_ must be one of: *code*, *id-token*, *response-type-unspecified*",
                  args: {
                    name: "WEB_SSO_RESPONSE_TYPE",
                    suggestions: [
                      "code",
                      "id-token",
                      "response-type-unspecified",
                    ],
                  },
                },
                optWorkforcePool,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workforce pool provider or fully qualified identifier for the workforce pool provider",
              },
            },
            {
              name: "update-saml",
              description: "Update a new SAML workforce pool provider",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optAttributeCondition,
                {
                  name: "--attribute-mapping",
                  description:
                    "Maps claims from the authentication credentials issued by the Identity Provider into Google Cloud IAM attributes, e.g. subject, segment",
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                  },
                },
                optBillingProject,
                {
                  name: "--clear-extended-attributes-config",
                  description: "Clear the extended attributes configuration",
                },
                {
                  name: "--clear-extra-attributes-config",
                  description: "Clear the extra attributes configuration",
                },
                {
                  name: "--clear-scim-usage",
                  description:
                    "Clear the SCIM usage configuration, resetting it to unspecified",
                },
                optConfiguration,
                optDescription2,
                optDetailedAuditLogging,
                optDisabled,
                optDisplayName2,
                {
                  name: "--extended-attributes-client-id",
                  description:
                    "(DEPRECATED) The OAuth 2.0 client ID for retrieving extended attributes from the identity provider. Required to get extended group memberships for a subset of Google Cloud products",
                  deprecated: true,
                  args: {
                    name: "EXTENDED_ATTRIBUTES_CLIENT_ID",
                    description: "String",
                  },
                },
                {
                  name: "--extended-attributes-client-secret-value",
                  description:
                    "(DEPRECATED) The OAuth 2.0 client secret for retrieving extended attributes from the identity provider. Required to get extended group memberships for a subset of Google Cloud products",
                  deprecated: true,
                  args: {
                    name: "EXTENDED_ATTRIBUTES_CLIENT_SECRET_VALUE",
                    description: "String",
                  },
                },
                optExtendedAttributesFilter,
                {
                  name: "--extended-attributes-issuer-uri",
                  description:
                    "(DEPRECATED) OIDC identity provider's issuer URI. Must be a valid URI using the `https` scheme. Required to get the OIDC discovery document",
                  deprecated: true,
                  args: {
                    name: "EXTENDED_ATTRIBUTES_ISSUER_URI",
                    description: "String",
                  },
                },
                {
                  name: "--extended-attributes-type",
                  description:
                    "(DEPRECATED) Represents the identity provider and type of claims that should be fetched",
                  deprecated: true,
                  args: {
                    name: "EXTENDED_ATTRIBUTES_TYPE",
                    description: "List",
                  },
                },
                {
                  name: "--extra-attributes-client-id",
                  description:
                    "The OAuth 2.0 client ID for retrieving extra attributes from the identity provider. Required to get the access token using client credentials grant flow",
                  args: {
                    name: "EXTRA_ATTRIBUTES_CLIENT_ID",
                    description: "String",
                  },
                },
                {
                  name: "--extra-attributes-client-secret-value",
                  description:
                    "The OAuth 2.0 client secret for retrieving extra attributes from the identity provider. Required to get the access token using client credentials grant flow",
                  args: {
                    name: "EXTRA_ATTRIBUTES_CLIENT_SECRET_VALUE",
                    description: "String",
                  },
                },
                optExtraAttributesFilter,
                {
                  name: "--extra-attributes-issuer-uri",
                  description:
                    "OIDC identity provider's issuer URI. Must be a valid URI using the `https` scheme. Required to get the OIDC discovery document",
                  args: {
                    name: "EXTRA_ATTRIBUTES_ISSUER_URI",
                    description: "String",
                  },
                },
                {
                  name: "--extra-attributes-type",
                  description:
                    "Represents the identity provider and type of claims that should be fetched. _EXTRA_ATTRIBUTES_TYPE_ must be one of: *attributes-type-unspecified*, *azure-ad-groups-display-name*, *azure-ad-groups-id*, *azure-ad-groups-mail*",
                  args: {
                    name: "EXTRA_ATTRIBUTES_TYPE",
                    suggestions: [
                      "attributes-type-unspecified",
                      "azure-ad-groups-display-name",
                      "azure-ad-groups-id",
                      "azure-ad-groups-mail",
                    ],
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
                  name: "--idp-metadata-path",
                  description:
                    "XML file with configuration metadata for the SAML identity provider. The metadata file must follow the [SAML 2.0 metadata specification](https://www.oasis-open.org/committees/download.php/35391/sstc-saml-metadata-errata-2.0-wd-04-diff.pdf). Use a full or relative path to a local file containing the value of idp_metadata_path",
                  args: {
                    name: "IDP_METADATA_PATH",
                    template: "filepaths",
                  },
                },
                optImpersonateServiceAccount,
                optLocation2,
                optLogHttp,
                optNoAsync,
                {
                  name: "--no-clear-extended-attributes-config",
                  description: "Clear the extended attributes configuration",
                  hidden: true,
                },
                {
                  name: "--no-clear-extra-attributes-config",
                  description: "Clear the extra attributes configuration",
                  hidden: true,
                },
                {
                  name: "--no-clear-scim-usage",
                  description:
                    "Clear the SCIM usage configuration, resetting it to unspecified",
                  hidden: true,
                },
                optNoDetailedAuditLogging,
                optNoDisabled,
                optProject,
                optQuiet,
                optScimUsage,
                optTraceToken,
                optUserOutputEnabled,
                optVendorType,
                optVerbosity,
                optWorkforcePool,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workforce pool provider or fully qualified identifier for the workforce pool provider",
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
          name: "set-iam-policy",
          description: "Set the IAM policy for a workforce pool",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
          args: [
            {
              name: "WORKFORCE_POOL",
              description:
                "ID of the workforce pool or fully qualified identifier for the workforce pool",
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
          name: "subjects",
          description: "Create and manage workforce pool subjects",
          subcommands: [
            {
              name: "delete",
              description: "Delete a workforce pool subject",
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
                optWorkforcePool,
              ],
              args: {
                name: "SUBJECT",
                description:
                  "ID of the workforce pool subject or fully qualified identifier for the workforce pool subject",
              },
            },
            {
              name: "operations",
              description:
                "Manage IAM workforce pool subject long-running operations",
              subcommands: [
                {
                  name: "describe",
                  description: "Describe a workforce pool subject operation",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
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
                      name: "--subject",
                      description:
                        "The ID to use for the workforce pool subject, which becomes the final component of the resource name",
                      args: {
                        name: "SUBJECT",
                        description: "String",
                      },
                    },
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkforcePool,
                  ],
                  args: {
                    name: "OPERATION",
                    description:
                      "ID of the workforce pool subject operation or fully qualified identifier for the workforce pool subject operation",
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
              name: "revoke-sessions",
              description: "Revoke all sessions for a workforce pool subject",
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
                optWorkforcePool,
              ],
              args: {
                name: "SUBJECT",
                description:
                  "ID of the workforce pool subject or fully qualified identifier for the workforce pool subject",
              },
            },
            {
              name: "undelete",
              description: "Undelete a workforce pool subject",
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
                optWorkforcePool,
              ],
              args: {
                name: "SUBJECT",
                description:
                  "ID of the workforce pool subject or fully qualified identifier for the workforce pool subject",
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
          name: "undelete",
          description: "Undelete a workforce pool",
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
            name: "WORKFORCE_POOL",
            description:
              "ID of the workforce pool or fully qualified identifier for the workforce pool",
          },
        },
        {
          name: "update",
          description: "Update a workforce pool",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description:
                "A description for the workforce pool. Cannot exceed 256 characters in length",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--disable-programmatic-signin",
              description:
                "Disables the programmatic sign-in for workforce pool users. Specify `--no-disable-security-token-exchange` to enable programmatic sign-in. For more information, refer to Obtain short-lived tokens for workforce identity federation at https://cloud.google.com/iam/docs/workforce-obtaining-short-lived-credentials",
            },
            {
              name: "--disabled",
              description:
                "Disables the workforce pool. You cannot use a disabled workforce pool to perform new token exchanges or sign-ins using any provider in the workforce pool. Specify `--no-disabled` to enable a disabled pool",
            },
            {
              name: "--display-name",
              description:
                "A display name for the workforce pool. Cannot exceed 32 characters in length",
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
            optLocation2,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-disable-programmatic-signin",
              description:
                "Disables the programmatic sign-in for workforce pool users. Specify `--no-disable-security-token-exchange` to enable programmatic sign-in. For more information, refer to Obtain short-lived tokens for workforce identity federation at https://cloud.google.com/iam/docs/workforce-obtaining-short-lived-credentials",
              hidden: true,
            },
            {
              name: "--no-disabled",
              description:
                "Disables the workforce pool. You cannot use a disabled workforce pool to perform new token exchanges or sign-ins using any provider in the workforce pool. Specify `--no-disabled` to enable a disabled pool",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--session-duration",
              description:
                "How long the Google Cloud access tokens, console sign-in sessions, and gcloud sign-in sessions from this workforce pool are valid. Must be greater than 15 minutes (900s) and less than 12 hours (43200s). If not configured, minted credentials will have a default duration of one hour (3600s)",
              args: {
                name: "SESSION_DURATION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "WORKFORCE_POOL",
            description:
              "ID of the workforce pool or fully qualified identifier for the workforce pool",
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
      name: "workload-identity-pools",
      description: "Manage IAM workload identity pools",
      subcommands: [
        {
          name: "add-attestation-rule",
          description: "Add an attestation rule on a workload identity pool",
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
              name: "--google-cloud-resource",
              description:
                "A single workload running on Google Cloud. This will be set in the attestation rule to be added",
              priority: 100,
              args: {
                name: "GOOGLE_CLOUD_RESOURCE",
                description: "String",
              },
            },
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
            name: "WORKLOAD_IDENTITY_POOL",
            description:
              "ID of the workload identity pool or fully qualified identifier for the workload identity pool",
          },
        },
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding for a workload identity pool",
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
            optLocation7,
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
            name: "WORKLOAD_IDENTITY_POOL",
            description:
              "ID of the workload identity pool or fully qualified identifier for the workload identity pool",
          },
        },
        {
          name: "create",
          description: "Create a new workload identity pool",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description:
                "A description of the pool. Cannot exceed 256 characters",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--disabled",
              description:
                "Whether the pool is disabled. You cannot use a disabled pool to exchange tokens, or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again",
            },
            {
              name: "--display-name",
              description:
                "A display name for the pool. Cannot exceed 32 characters",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--enable-mesh-ca-compatibility",
              description:
                "Whether to enable mesh CA compatibility for the trust domain. If set to true, the generated trust bundle for the workloads in this trust domain will include the Cloud Service Mesh certificate authority's root CA certificates. The certificate chain for the workload in this trust domain will be signed by the Cloud Service Mesh certificate authority root CA",
              hidden: true,
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
              name: "--inline-certificate-issuance-config-file",
              description:
                "YAML file with configuration for certificate issuance. Example file format: ```yaml inlineCertificateIssuanceConfig: caPools: us-east1: projects/1234/locations/us-east1/caPools/capoolname us-west1: projects/1234/locations/us-west1/caPools/capoolname keyAlgorithm: ECDSA_P256 lifetime: 86400s rotationWindowPercentage: 50 ```",
              args: {
                name: "INLINE_CERTIFICATE_ISSUANCE_CONFIG_FILE",
                template: "filepaths",
              },
            },
            {
              name: "--inline-trust-config-file",
              description:
                'YAML file with configuration for providing additional trust bundles. Example file format: ```yaml inlineTrustConfig: additionalTrustBundles: example.com: trustAnchors: - pemCertificate: "-----BEGIN CERTIFICATE----- <certificate> -----END CERTIFICATE-----" - pemCertificate: "-----BEGIN CERTIFICATE----- <certificate> -----END CERTIFICATE-----" myorg.com: trustAnchors: - pemCertificate: "-----BEGIN CERTIFICATE----- <certificate> -----END CERTIFICATE-----" - pemCertificate: "-----BEGIN CERTIFICATE----- <certificate> -----END CERTIFICATE-----" ```',
              args: {
                name: "INLINE_TRUST_CONFIG_FILE",
                template: "filepaths",
              },
            },
            optLocation7,
            optLogHttp,
            {
              name: "--mode",
              description:
                "The mode of the pool. _MODE_ must be one of: *federation-only*, *mode-unspecified*, *system-trust-domain*, *trust-domain*",
              args: {
                name: "MODE",
                suggestions: [
                  "federation-only",
                  "mode-unspecified",
                  "system-trust-domain",
                  "trust-domain",
                ],
              },
            },
            {
              name: "--no-disabled",
              description:
                "Whether the pool is disabled. You cannot use a disabled pool to exchange tokens, or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again",
              hidden: true,
            },
            {
              name: "--no-enable-mesh-ca-compatibility",
              description:
                "Whether to enable mesh CA compatibility for the trust domain. If set to true, the generated trust bundle for the workloads in this trust domain will include the Cloud Service Mesh certificate authority's root CA certificates. The certificate chain for the workload in this trust domain will be signed by the Cloud Service Mesh certificate authority root CA",
              hidden: true,
            },
            {
              name: "--no-use-default-shared-ca",
              description:
                "Use the default shared certificate authorities (CAs) to issue certificates. If enabled, Google Cloud automatically provisions certificates from a default shared CA in the same region as the workload. Enabling this flag clears any existing CA pools configuration",
            },
            optProject,
            optQuiet,
            {
              name: "--session-duration",
              description:
                "Overrides the lifespan of access tokens issued issued for identities in this pool. If not set, the lifespan of issued access tokens is computed based on the type of identity provider:",
              hidden: true,
              args: {
                name: "SESSION_DURATION",
              },
            },
            optTraceToken,
            {
              name: "--use-default-shared-ca",
              description:
                "Use the default shared certificate authorities (CAs) to issue certificates. If enabled, Google Cloud automatically provisions certificates from a default shared CA in the same region as the workload. Enabling this flag clears any existing CA pools configuration. Use *--use-default-shared-ca* to enable and *--no-use-default-shared-ca* to disable",
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "WORKLOAD_IDENTITY_POOL",
            description:
              "ID of the workload identity pool or fully qualified identifier for the workload identity pool",
          },
        },
        {
          name: "create-cred-config",
          description: "Create a configuration file for generated credentials",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--app-id-uri",
              description:
                "The custom Application ID URI for the Azure access token",
              args: {
                name: "APP_ID_URI",
                description: "String",
              },
            },
            {
              name: "--aws",
              description: "Use AWS",
            },
            {
              name: "--azure",
              description: "Use Azure",
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--credential-cert-configuration-output-file",
              description:
                "Path for the certificate configuration file. If specified, a certificate configuration file will be created at the specified path. If not specified, the certificate configuration will be created at the default gcloud location",
              args: {
                name: "CREDENTIAL_CERT_CONFIGURATION_OUTPUT_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--credential-cert-path",
              description: "Path of the X.509 certificate file",
              args: {
                name: "CREDENTIAL_CERT_PATH",
                description: "String",
              },
            },
            {
              name: "--credential-cert-private-key-path",
              description: "Path of the X.509 private key file",
              priority: 100,
              args: {
                name: "CREDENTIAL_CERT_PRIVATE_KEY_PATH",
                description: "String",
              },
            },
            {
              name: "--credential-cert-trust-chain-path",
              description:
                "Path for the trust chain file. A trust chain file is required if there are intermediate certificates in the certificate chain in between the root certificate stored in the workload identity pool provider trust store. This trust chain file should be a list of PEM certificates, with the leaf certificate at the top",
              args: {
                name: "CREDENTIAL_CERT_TRUST_CHAIN_PATH",
                description: "String",
              },
            },
            {
              name: "--credential-source-field-name",
              description:
                "Subject token field name (key) in a JSON credential source",
              args: {
                name: "CREDENTIAL_SOURCE_FIELD_NAME",
                description: "String",
              },
            },
            {
              name: "--credential-source-file",
              description: "Location of the credential source file",
              args: {
                name: "CREDENTIAL_SOURCE_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--credential-source-headers",
              description:
                "Headers to use when querying the credential-source-url",
              args: {
                name: "key=value",
                description: "Dict",
              },
            },
            {
              name: "--credential-source-type",
              description: "Format of the credential source (JSON or text)",
              args: {
                name: "CREDENTIAL_SOURCE_TYPE",
                description: "String",
              },
            },
            {
              name: "--credential-source-url",
              description: "URL to obtain the credential from",
              args: {
                name: "CREDENTIAL_SOURCE_URL",
                description: "String",
              },
            },
            {
              name: "--enable-imdsv2",
              description:
                "Adds the AWS IMDSv2 session token Url to the credential source to enforce the AWS IMDSv2 flow",
            },
            {
              name: "--executable-command",
              description:
                "The full command to run to retrieve the credential. Must be an absolute path for the program including arguments",
              args: {
                name: "EXECUTABLE_COMMAND",
                description: "String",
              },
            },
            {
              name: "--executable-output-file",
              description:
                "Absolute path to the file storing the executable response",
              args: {
                name: "EXECUTABLE_OUTPUT_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--executable-timeout-millis",
              description:
                "Timeout duration, in milliseconds, to wait for the executable to finish",
              args: {
                name: "EXECUTABLE_TIMEOUT_MILLIS",
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
              name: "--no-aws",
              description: "Use AWS",
              hidden: true,
            },
            {
              name: "--no-azure",
              description: "Use Azure",
              hidden: true,
            },
            {
              name: "--no-enable-imdsv2",
              description:
                "Adds the AWS IMDSv2 session token Url to the credential source to enforce the AWS IMDSv2 flow",
              hidden: true,
            },
            {
              name: "--output-file",
              description:
                "Location to store the generated credential configuration file",
              priority: 100,
              args: {
                name: "OUTPUT_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--service-account",
              description: "Email of the service account to impersonate",
              priority: 100,
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
              },
            },
            {
              name: "--service-account-token-lifetime-seconds",
              description:
                "Lifetime duration of the service account access token in seconds. Defaults to one hour if not specified. If a lifetime greater than one hour is required, the service account must be added as an allowed value in an Organization Policy that enforces the `constraints/iam.allowServiceAccountCredentialLifetimeExtension` constraint",
              args: {
                name: "SERVICE_ACCOUNT_TOKEN_LIFETIME_SECONDS",
              },
            },
            {
              name: "--sts-location",
              description:
                "The location to use for the Security Token Service token endpoint. For example, specifying `us-central1` will configure the client to use the regional endpoint `sts.us-central1.rep.googleapis.com`. If not specified, the global endpoint `sts.googleapis.com` is used",
              args: {
                name: "STS_LOCATION",
                description: "String",
              },
            },
            {
              name: "--subject-token-type",
              description:
                "The type of token being used for authorization. This defaults to urn:ietf:params:oauth:token-type:jwt",
              args: {
                name: "SUBJECT_TOKEN_TYPE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "AUDIENCE",
            description:
              "The workload identity pool provider fully qualified identifier",
          },
        },
        {
          name: "delete",
          description: "Delete a workload identity pool",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "WORKLOAD_IDENTITY_POOL",
            description:
              "ID of the workload identity pool or fully qualified identifier for the workload identity pool",
          },
        },
        {
          name: "describe",
          description: "Describe a workload identity pool",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "WORKLOAD_IDENTITY_POOL",
            description:
              "ID of the workload identity pool or fully qualified identifier for the workload identity pool",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a workload identity pool",
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
            optLocation7,
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
            name: "WORKLOAD_IDENTITY_POOL",
            description:
              "ID of the workload identity pool or fully qualified identifier for the workload identity pool",
          },
        },
        {
          name: "list",
          description: "List workload identity pools",
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
              name: "--no-show-deleted",
              description: "Whether to return soft-deleted pools",
              hidden: true,
            },
            optPageSize,
            optProject,
            optQuiet,
            {
              name: "--show-deleted",
              description: "Whether to return soft-deleted pools",
            },
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "list-attestation-rules",
          description: "List the attestation rules on a workload identity pool",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optContainerIdFilter,
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
            optLocation7,
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
            name: "WORKLOAD_IDENTITY_POOL",
            description:
              "ID of the workload identity pool or fully qualified identifier for the workload identity pool",
          },
        },
        {
          name: "managed-identities",
          description: "Manage IAM workload identity pool managed identities",
          subcommands: [
            {
              name: "add-attestation-rule",
              description:
                "Add an attestation rule on a workload identity pool managed identity",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGoogleCloudResource,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLocation7,
                optLogHttp,
                optNamespace,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkloadIdentityPool,
              ],
              args: {
                name: "MANAGED_IDENTITY",
                description:
                  "ID of the workload identity pool managed identity or fully qualified identifier for the workload identity pool managed identity",
              },
            },
            {
              name: "create",
              description: "Create a workload identity pool managed identity",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description: "A description of the managed identity",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--disabled",
                  description:
                    "Whether the managed identity is disabled. If disabled, credentials may no longer be issued for this identity. Existing credentials may continue to be accepted until they expire",
                },
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
                optNamespace,
                optNoAsync,
                {
                  name: "--no-disabled",
                  description:
                    "Whether the managed identity is disabled. If disabled, credentials may no longer be issued for this identity. Existing credentials may continue to be accepted until they expire",
                  hidden: true,
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkloadIdentityPool,
              ],
              args: {
                name: "MANAGED_IDENTITY",
                description:
                  "ID of the workload identity pool managed identity or fully qualified identifier for the workload identity pool managed identity",
              },
            },
            {
              name: "delete",
              description: "Delete a workload identity pool managed identity",
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
                optNamespace,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkloadIdentityPool,
              ],
              args: {
                name: "MANAGED_IDENTITY",
                description:
                  "ID of the workload identity pool managed identity or fully qualified identifier for the workload identity pool managed identity",
              },
            },
            {
              name: "describe",
              description: "Describe a workload identity pool managed identity",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                optNamespace,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkloadIdentityPool,
              ],
              args: {
                name: "MANAGED_IDENTITY",
                description:
                  "ID of the workload identity pool managed identity or fully qualified identifier for the workload identity pool managed identity",
              },
            },
            {
              name: "list",
              description: "List workload identity pool managed identities",
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
                optLocation7,
                optLogHttp,
                {
                  name: "--namespace",
                  description:
                    "ID of the workload identity pool namespace or fully qualified identifier for the workload identity pool namespace",
                  priority: 100,
                  args: {
                    name: "NAMESPACE",
                    description: "String",
                  },
                },
                optNoShowDeleted,
                optPageSize,
                optProject,
                optQuiet,
                optShowDeleted,
                optSortBy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkloadIdentityPool,
              ],
            },
            {
              name: "list-attestation-rules",
              description:
                "List the attestation rules on a workload identity pool managed identity",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optContainerIdFilter,
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
                optLocation7,
                optLogHttp,
                optNamespace,
                optPageSize,
                optProject,
                optQuiet,
                optSortBy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkloadIdentityPool,
              ],
              args: {
                name: "MANAGED_IDENTITY",
                description:
                  "ID of the workload identity pool managed identity or fully qualified identifier for the workload identity pool managed identity",
              },
            },
            {
              name: "operations",
              description:
                "Manage IAM workload identity pool managed identity long running operations",
              subcommands: [
                {
                  name: "describe",
                  description:
                    "Describe a workload identity pool managed identity operation",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
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
                    optManagedIdentity,
                    optNamespace,
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkloadIdentityPool,
                  ],
                  args: {
                    name: "OPERATION",
                    description:
                      "ID of the workload identity pool managed identity operation or fully qualified identifier for the workload identity pool managed identity operation",
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
              name: "remove-attestation-rule",
              description:
                "Remove an attestation rule on a workload identity pool managed identity",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGoogleCloudResource,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLocation7,
                optLogHttp,
                optNamespace,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkloadIdentityPool,
              ],
              args: {
                name: "MANAGED_IDENTITY",
                description:
                  "ID of the workload identity pool managed identity or fully qualified identifier for the workload identity pool managed identity",
              },
            },
            {
              name: "set-attestation-rules",
              description:
                "Set attestation rules on a workload identity pool managed identity",
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
                optNamespace,
                optNoAsync,
                {
                  name: "--policy-file",
                  description:
                    "Path to a local JSON-formatted or YAML-formatted file containing an attestation policy, structured as a [list of attestation rules](https://cloud.google.com/iam/docs/reference/rest/v1/projects.locations.workloadIdentityPools.namespaces.managedIdentities/setAttestationRules#request-body)",
                  priority: 100,
                  args: {
                    name: "POLICY_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkloadIdentityPool,
              ],
              args: {
                name: "MANAGED_IDENTITY",
                description:
                  "ID of the workload identity pool managed identity or fully qualified identifier for the workload identity pool managed identity",
              },
            },
            {
              name: "undelete",
              description: "Undelete a workload identity pool managed identity",
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
                optNamespace,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkloadIdentityPool,
              ],
              args: {
                name: "MANAGED_IDENTITY",
                description:
                  "ID of the workload identity pool managed identity or fully qualified identifier for the workload identity pool managed identity",
              },
            },
            {
              name: "update",
              description: "Update workload identity pool managed identity",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description: "A description of the managed identity",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--disabled",
                  description:
                    "Whether the managed identity is disabled. If disabled, credentials may no longer be issued for this identity. Existing credentials may continue to be accepted until they expire",
                },
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
                optNamespace,
                optNoAsync,
                {
                  name: "--no-disabled",
                  description:
                    "Whether the managed identity is disabled. If disabled, credentials may no longer be issued for this identity. Existing credentials may continue to be accepted until they expire",
                  hidden: true,
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkloadIdentityPool,
              ],
              args: {
                name: "MANAGED_IDENTITY",
                description:
                  "ID of the workload identity pool managed identity or fully qualified identifier for the workload identity pool managed identity",
              },
            },
            {
              name: "workload-sources",
              description:
                "Manage IAM workload identity pool managed identity workload sources",
              hidden: true,
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a workload source for a workload identity pool managed identity",
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
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLocation7,
                    optLogHttp,
                    optManagedIdentity,
                    optNamespace,
                    optNoAsync,
                    optProject,
                    optQuiet,
                    {
                      name: "--single-attribute-selectors",
                      description:
                        "The attributes that a workload can attest for it to be allowed to receive a managed identity",
                      args: {
                        name: "SINGLE_ATTRIBUTE_SELECTORS",
                        description: "List",
                      },
                    },
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkloadIdentityPool,
                  ],
                  args: {
                    name: "WORKLOAD_SOURCE",
                    description:
                      "ID of the workload source or fully qualified identifier for the workload source",
                  },
                },
                {
                  name: "delete",
                  description:
                    "Delete a workload identity pool managed identity workload source",
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
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLocation7,
                    optLogHttp,
                    optManagedIdentity,
                    optNamespace,
                    optNoAsync,
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkloadIdentityPool,
                  ],
                  args: {
                    name: "WORKLOAD_SOURCE",
                    description:
                      "ID of the workload source or fully qualified identifier for the workload source",
                  },
                },
                {
                  name: "describe",
                  description:
                    "Describe a workload identity pool managed identity workload source",
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
                    optLocation7,
                    optLogHttp,
                    optManagedIdentity,
                    optNamespace,
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkloadIdentityPool,
                  ],
                  args: {
                    name: "WORKLOAD_SOURCE",
                    description:
                      "ID of the workload source or fully qualified identifier for the workload source",
                  },
                },
                {
                  name: "list",
                  description:
                    "List workload identity pool managed identity workload sources",
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
                    optLocation7,
                    optLogHttp,
                    {
                      name: "--managed-identity",
                      description:
                        "ID of the workload identity pool managed identity or fully qualified identifier for the workload identity pool managed identity",
                      priority: 100,
                      args: {
                        name: "MANAGED_IDENTITY",
                        description: "String",
                      },
                    },
                    optNamespace,
                    optPageSize,
                    optProject,
                    optQuiet,
                    optSortBy,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkloadIdentityPool,
                  ],
                },
                {
                  name: "operations",
                  description:
                    "Manage IAM workload identity pool managed identity workload source long running operations",
                  hidden: true,
                  subcommands: [
                    {
                      name: "describe",
                      description:
                        "Describe a workload identity pool managed identity workload source operation",
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
                        optLocation7,
                        optLogHttp,
                        optManagedIdentity,
                        optNamespace,
                        optProject,
                        optQuiet,
                        optTraceToken,
                        optUserOutputEnabled,
                        optVerbosity,
                        optWorkloadIdentityPool,
                        {
                          name: "--workload-source",
                          description:
                            "The ID of the workload source, which becomes the final component of the resource name. This value corresponds to a boundary from within which workloads can be matched. This value is formatted as follows:",
                          args: {
                            name: "WORKLOAD_SOURCE",
                            description: "String",
                          },
                        },
                      ],
                      args: {
                        name: "OPERATION",
                        description:
                          "ID of the workload source operation or fully qualified identifier for the workload source operation",
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
                  description:
                    "Update a workload source for a workload identity pool managed identity",
                  hidden: true,
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    {
                      name: "--add-single-attribute-selectors",
                      description:
                        "Add an attribute that a workload can attest for it to be allowed to receive a managed identity",
                      args: {
                        name: "SINGLE_ATTRIBUTE_SELECTOR",
                        description: "List",
                      },
                    },
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
                    optManagedIdentity,
                    optNamespace,
                    optNoAsync,
                    optProject,
                    optQuiet,
                    {
                      name: "--remove-single-attribute-selectors",
                      description:
                        "Removes an attribute that a workload can attest for it to be allowed to receive a managed identity",
                      args: {
                        name: "SINGLE_ATTRIBUTE_SELECTOR",
                        description: "List",
                      },
                    },
                    {
                      name: "--single-attribute-selectors",
                      description:
                        "Add an attribute that a workload can attest for it to be allowed to receive a managed identity",
                      args: {
                        name: "SINGLE_ATTRIBUTE_SELECTORS",
                        description: "List",
                      },
                    },
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkloadIdentityPool,
                  ],
                  args: {
                    name: "WORKLOAD_SOURCE",
                    description:
                      "ID of the workload source or fully qualified identifier for the workload source",
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
          name: "namespaces",
          description: "Manage IAM workload identity pool namespaces",
          subcommands: [
            {
              name: "add-attestation-rule",
              description:
                "Add an attestation rule on a workload identity pool namespace",
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
                optGoogleCloudResource,
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
                optWorkloadIdentityPool,
              ],
              args: {
                name: "NAMESPACE",
                description:
                  "ID of the workload identity pool namespace or fully qualified identifier for the workload identity pool namespace",
              },
            },
            {
              name: "create",
              description: "Create a workload identity pool namespace",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description: "A description of the namespace",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--disabled",
                  description:
                    "Whether the namespace is disabled. If disabled, credentials may no longer be issued for identities in this namespace. Existing credentials may continue to be accepted until they expire",
                },
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
                {
                  name: "--no-disabled",
                  description:
                    "Whether the namespace is disabled. If disabled, credentials may no longer be issued for identities in this namespace. Existing credentials may continue to be accepted until they expire",
                  hidden: true,
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkloadIdentityPool,
              ],
              args: {
                name: "NAMESPACE",
                description:
                  "ID of the workload identity pool namespace or fully qualified identifier for the workload identity pool namespace",
              },
            },
            {
              name: "delete",
              description: "Delete a workload identity pool namespace",
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
                optWorkloadIdentityPool,
              ],
              args: {
                name: "NAMESPACE",
                description:
                  "ID of the workload identity pool namespace or fully qualified identifier for the workload identity pool namespace",
              },
            },
            {
              name: "describe",
              description: "Describe a workload identity pool namespace",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                optWorkloadIdentityPool,
              ],
              args: {
                name: "NAMESPACE",
                description:
                  "ID of the workload identity pool namespace or fully qualified identifier for the workload identity pool namespace",
              },
            },
            {
              name: "list",
              description: "List workload identity pool namespaces",
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
                optLocation7,
                optLogHttp,
                optNoShowDeleted,
                optPageSize,
                optProject,
                optQuiet,
                optShowDeleted,
                optSortBy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--workload-identity-pool",
                  description:
                    "ID of the workload identity pool or fully qualified identifier for the workload identity pool",
                  priority: 100,
                  args: {
                    name: "WORKLOAD_IDENTITY_POOL",
                    description: "String",
                  },
                },
              ],
            },
            {
              name: "list-attestation-rules",
              description:
                "List the attestation rules on a workload identity pool namespace",
              hidden: true,
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optContainerIdFilter,
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
                optLocation7,
                optLogHttp,
                optPageSize,
                optProject,
                optQuiet,
                optSortBy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkloadIdentityPool,
              ],
              args: {
                name: "NAMESPACE",
                description:
                  "ID of the workload identity pool namespace or fully qualified identifier for the workload identity pool namespace",
              },
            },
            {
              name: "operations",
              description:
                "Manage IAM workload identity pool namespace long running operations",
              subcommands: [
                {
                  name: "describe",
                  description:
                    "Describe a workload identity pool namespace operation",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
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
                    optNamespace,
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkloadIdentityPool,
                  ],
                  args: {
                    name: "OPERATION",
                    description:
                      "ID of the workload identity pool namespace operation or fully qualified identifier for the workload identity pool namespace operation",
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
              name: "remove-attestation-rule",
              description:
                "Remove an attestation rule on a workload identity pool namespace",
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
                optGoogleCloudResource,
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
                optWorkloadIdentityPool,
              ],
              args: {
                name: "NAMESPACE",
                description:
                  "ID of the workload identity pool namespace or fully qualified identifier for the workload identity pool namespace",
              },
            },
            {
              name: "set-attestation-rules",
              description:
                "Set attestation rules on a workload identity pool namespace",
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
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLocation7,
                optLogHttp,
                optNoAsync,
                {
                  name: "--policy-file",
                  description:
                    "Path to a local JSON-formatted or YAML-formatted file containing an attestation policy, structured as a [list of attestation rules](https://cloud.google.com/iam/docs/reference/rest/v1/projects.locations.workloadIdentityPools.namespaces/setAttestationRules#request-body)",
                  priority: 100,
                  args: {
                    name: "POLICY_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkloadIdentityPool,
              ],
              args: {
                name: "NAMESPACE",
                description:
                  "ID of the workload identity pool namespace or fully qualified identifier for the workload identity pool namespace",
              },
            },
            {
              name: "undelete",
              description: "Undelete a workload identity pool namespace",
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
                optWorkloadIdentityPool,
              ],
              args: {
                name: "NAMESPACE",
                description:
                  "ID of the workload identity pool namespace or fully qualified identifier for the workload identity pool namespace",
              },
            },
            {
              name: "update",
              description: "Update workload identity pool namespace",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--description",
                  description: "A description of the namespace",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                  },
                },
                {
                  name: "--disabled",
                  description:
                    "Whether the namespace is disabled. If disabled, credentials may no longer be issued for identities in this namespace. Existing credentials may continue to be accepted until they expire",
                },
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
                {
                  name: "--no-disabled",
                  description:
                    "Whether the namespace is disabled. If disabled, credentials may no longer be issued for identities in this namespace. Existing credentials may continue to be accepted until they expire",
                  hidden: true,
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkloadIdentityPool,
              ],
              args: {
                name: "NAMESPACE",
                description:
                  "ID of the workload identity pool namespace or fully qualified identifier for the workload identity pool namespace",
              },
            },
            {
              name: "workload-sources",
              description:
                "Manage IAM workload identity pool namespace workload sources",
              hidden: true,
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a workload source for a workload identity pool namespace",
                  hidden: true,
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    {
                      name: "--allow-identity-self-selection",
                      description:
                        "Allows matched workloads to request any identity within the namespace",
                    },
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
                    optNamespace,
                    {
                      name: "--no-allow-identity-self-selection",
                      description:
                        "Allows matched workloads to request any identity within the namespace",
                      hidden: true,
                    },
                    optNoAsync,
                    optProject,
                    optQuiet,
                    {
                      name: "--single-attribute-selectors",
                      description:
                        "Attributes that a workload must attest for it to be matched by the workload source",
                      args: {
                        name: "SINGLE_ATTRIBUTE_SELECTORS",
                        description: "List",
                      },
                    },
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkloadIdentityPool,
                  ],
                  args: {
                    name: "WORKLOAD_SOURCE",
                    description:
                      "ID of the workload source or fully qualified identifier for the workload source",
                  },
                },
                {
                  name: "delete",
                  description:
                    "Delete a workload identity pool namespace workload source",
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
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLocation7,
                    optLogHttp,
                    optNamespace,
                    optNoAsync,
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkloadIdentityPool,
                  ],
                  args: {
                    name: "WORKLOAD_SOURCE",
                    description:
                      "ID of the workload source or fully qualified identifier for the workload source",
                  },
                },
                {
                  name: "describe",
                  description:
                    "Describe a workload identity pool namespace workload source",
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
                    optLocation7,
                    optLogHttp,
                    optNamespace,
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkloadIdentityPool,
                  ],
                  args: {
                    name: "WORKLOAD_SOURCE",
                    description:
                      "ID of the workload source or fully qualified identifier for the workload source",
                  },
                },
                {
                  name: "list",
                  description:
                    "List workload identity pool namespace workload sources",
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
                    optLocation7,
                    optLogHttp,
                    {
                      name: "--namespace",
                      description:
                        "ID of the workload identity pool namespace or fully qualified identifier for the workload identity pool namespace",
                      priority: 100,
                      args: {
                        name: "NAMESPACE",
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
                    optWorkloadIdentityPool,
                  ],
                },
                {
                  name: "operations",
                  description:
                    "Manage IAM workload identity pool namespace workload source long running operations",
                  hidden: true,
                  subcommands: [
                    {
                      name: "describe",
                      description:
                        "Describe a workload identity pool namespace workload source operation",
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
                        optLocation7,
                        optLogHttp,
                        optNamespace,
                        optProject,
                        optQuiet,
                        optTraceToken,
                        optUserOutputEnabled,
                        optVerbosity,
                        optWorkloadIdentityPool,
                        {
                          name: "--workload-source",
                          description:
                            "The ID of the workload source, which becomes the final component of the resource name. This value corresponds to a boundary from within which workloads can be matched. This value is formatted as follows:",
                          args: {
                            name: "WORKLOAD_SOURCE",
                            description: "String",
                          },
                        },
                      ],
                      args: {
                        name: "OPERATION",
                        description:
                          "ID of the workload source operation or fully qualified identifier for the workload source operation",
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
                  description:
                    "Update a workload source for a workload identity pool namespace",
                  hidden: true,
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    {
                      name: "--allow-identity-self-selection",
                      description:
                        "Allows matched workloads to request any identity within the namespace. Use *--allow-identity-self-selection* to enable and *--no-allow-identity-self-selection* to disable",
                    },
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
                    optNamespace,
                    {
                      name: "--no-allow-identity-self-selection",
                      description:
                        "Allows matched workloads to request any identity within the namespace",
                    },
                    optNoAsync,
                    optProject,
                    optQuiet,
                    {
                      name: "--single-attribute-selectors",
                      description:
                        "An attribute that a workload can attest for it to be allow to receive a managed identity",
                      args: {
                        name: "SINGLE_ATTRIBUTE_SELECTORS",
                        description: "List",
                      },
                    },
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkloadIdentityPool,
                  ],
                  args: {
                    name: "WORKLOAD_SOURCE",
                    description:
                      "ID of the workload source or fully qualified identifier for the workload source",
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
          name: "operations",
          description:
            "Manage IAM workload identity pool long running operations",
          subcommands: [
            {
              name: "describe",
              description: "Describe a workload identity pool operation",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                optWorkloadIdentityPool,
              ],
              args: {
                name: "OPERATION",
                description:
                  "ID of the workload identity pool operation or fully qualified identifier for the workload identity pool operation",
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
          description: "Manage IAM workload identity pool providers",
          subcommands: [
            {
              name: "create-aws",
              description: "Create a new AWS workload identity pool provider",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--account-id",
                  description: "The AWS account ID",
                  priority: 100,
                  args: {
                    name: "ACCOUNT_ID",
                    description: "String",
                  },
                },
                optAttributeCondition2,
                optAttributeMapping,
                optBillingProject,
                optConfiguration,
                optDescription,
                optDisabled2,
                optDisplayName,
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
                optNoDisabled2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkloadIdentityPool,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workload identity pool provider or fully qualified identifier for the workload identity pool provider",
              },
            },
            {
              name: "create-oidc",
              description: "Create a new OIDC workload identity pool provider",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--allowed-audiences",
                  description:
                    "Acceptable values for the `aud` field (audience) in the OIDC token. Token exchange requests are rejected if the token audience does not match one of the configured values. Each audience may be at most 256 characters. A maximum of 10 audiences may be configured",
                  args: {
                    name: "ALLOWED_AUDIENCES",
                    description: "List",
                  },
                },
                optAttributeCondition2,
                {
                  name: "--attribute-mapping",
                  description:
                    "Maps attributes from authentication credentials issued by an external identity provider to Google Cloud attributes, such as `subject` and `segment`",
                  priority: 100,
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                  },
                },
                optBillingProject,
                optConfiguration,
                optDescription,
                optDisabled2,
                optDisplayName,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                {
                  name: "--issuer-uri",
                  description: "The OIDC issuer URL",
                  priority: 100,
                  args: {
                    name: "ISSUER_URI",
                    description: "String",
                  },
                },
                {
                  name: "--jwk-json-path",
                  description:
                    'Optional file containing jwk public keys. The file format must follow [jwk specifications](https://www.rfc-editor.org/rfc/rfc7517#section-4). Example file format: ```json { "keys": [ { "kty": "RSA/EC", "alg": "<algorithm>", "use": "sig", "kid": "<key-id>", "n": "", "e": "", "x": "", "y": "", "crv": "" } ] } ``` . Use a full or relative path to a local file containing the value of jwk_json_path',
                  args: {
                    name: "JWK_JSON_PATH",
                    template: "filepaths",
                  },
                },
                optLocation7,
                optLogHttp,
                optNoDisabled2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkloadIdentityPool,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workload identity pool provider or fully qualified identifier for the workload identity pool provider",
              },
            },
            {
              name: "create-saml",
              description: "Create a new SAML workload identity pool provider",
              options: [
                optAccessTokenFile,
                optAccount,
                optAttributeCondition2,
                {
                  name: "--attribute-mapping",
                  description:
                    "Maps attributes from authentication credentials issued by an external identity provider to Google Cloud attributes, such as `subject` and `segment`",
                  priority: 100,
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                  },
                },
                optBillingProject,
                optConfiguration,
                optDescription,
                optDisabled2,
                optDisplayName,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                {
                  name: "--idp-metadata-path",
                  description:
                    "XML file with configuration metadata for the SAML identity provider. The metadata file must follow the [SAML 2.0 metadata specification](https://www.oasis-open.org/committees/download.php/35391/sstc-saml-metadata-errata-2.0-wd-04-diff.pdf). Use a full or relative path to a local file containing the value of idp_metadata_path",
                  priority: 100,
                  args: {
                    name: "IDP_METADATA_PATH",
                    template: "filepaths",
                  },
                },
                optImpersonateServiceAccount,
                optLocation7,
                optLogHttp,
                optNoDisabled2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkloadIdentityPool,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workload identity pool provider or fully qualified identifier for the workload identity pool provider",
              },
            },
            {
              name: "create-x509",
              description: "Create a new X.509 workload identity pool provider",
              options: [
                optAccessTokenFile,
                optAccount,
                optAttributeCondition2,
                optAttributeMapping,
                optBillingProject,
                optConfiguration,
                optDescription,
                optDisabled2,
                optDisplayName,
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
                optNoDisabled2,
                optProject,
                optQuiet,
                optTraceToken,
                {
                  name: "--trust-store-config-path",
                  description:
                    'YAML file with configuration metadata for the X.509 identity provider. Example file format: ```yaml trustStore: trustAnchors: - pemCertificate: "-----BEGIN CERTIFICATE----- <certificate> -----END CERTIFICATE-----" intermediateCas: - pemCertificate: "-----BEGIN CERTIFICATE----- <certificate> -----END CERTIFICATE-----" ```',
                  priority: 100,
                  args: {
                    name: "TRUST_STORE_CONFIG_PATH",
                    template: "filepaths",
                  },
                },
                optUserOutputEnabled,
                optVerbosity,
                optWorkloadIdentityPool,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workload identity pool provider or fully qualified identifier for the workload identity pool provider",
              },
            },
            {
              name: "delete",
              description: "Delete a workload identity pool provider",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                optWorkloadIdentityPool,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workload identity pool provider or fully qualified identifier for the workload identity pool provider",
              },
            },
            {
              name: "describe",
              description: "Describe a workload identity pool provider",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                optWorkloadIdentityPool,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workload identity pool provider or fully qualified identifier for the workload identity pool provider",
              },
            },
            {
              name: "keys",
              description: "Manage IAM workload identity pool provider keys",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a new workload identity pool provider key",
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
                    optProvider,
                    optQuiet,
                    {
                      name: "--spec",
                      description:
                        "The specifications for the key. _SPEC_ must be one of: *key-spec-unspecified*, *rsa-2048*, *rsa-3072*, *rsa-4096*",
                      priority: 100,
                      args: {
                        name: "SPEC",
                        suggestions: [
                          "key-spec-unspecified",
                          "rsa-2048",
                          "rsa-3072",
                          "rsa-4096",
                        ],
                      },
                    },
                    optTraceToken,
                    {
                      name: "--use",
                      description:
                        "The purpose of the key. _USE_ must be one of: *encryption*, *key-use-unspecified*",
                      priority: 100,
                      args: {
                        name: "USE",
                        suggestions: ["encryption", "key-use-unspecified"],
                      },
                    },
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkloadIdentityPool,
                  ],
                  args: {
                    name: "KEY",
                    description:
                      "ID of the workload identity pool provider key or fully qualified identifier for the workload identity pool provider key",
                  },
                },
                {
                  name: "delete",
                  description: "Delete a workload identity pool provider key",
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
                    optProvider,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkloadIdentityPool,
                  ],
                  args: {
                    name: "KEY",
                    description:
                      "ID of the workload identity pool provider key or fully qualified identifier for the workload identity pool provider key",
                  },
                },
                {
                  name: "describe",
                  description: "Describe a workload identity pool provider key",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
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
                    optProvider,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkloadIdentityPool,
                  ],
                  args: {
                    name: "KEY",
                    description:
                      "ID of the workload identity pool provider key or fully qualified identifier for the workload identity pool provider key",
                  },
                },
                {
                  name: "list",
                  description: "List workload identity pool provider keys",
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
                    optLocation7,
                    optLogHttp,
                    optNoShowDeleted,
                    optPageSize,
                    optProject,
                    {
                      name: "--provider",
                      description:
                        "ID of the workload identity pool provider or fully qualified identifier for the workload identity pool provider",
                      priority: 100,
                      args: {
                        name: "PROVIDER",
                        description: "String",
                      },
                    },
                    optQuiet,
                    optShowDeleted,
                    optSortBy,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkloadIdentityPool,
                  ],
                },
                {
                  name: "operations",
                  description:
                    "Manage IAM workload identity pool provider key long running operations",
                  subcommands: [
                    {
                      name: "describe",
                      description:
                        "Describe a workload identity pool provider key operation",
                      options: [
                        optAccessTokenFile,
                        optAccount,
                        optBillingProject,
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
                          description:
                            "The ID for the key, which becomes the final component of the resource name. This value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be specified",
                          args: {
                            name: "KEY",
                            description: "String",
                          },
                        },
                        optLocation7,
                        optLogHttp,
                        optProject,
                        optProvider,
                        optQuiet,
                        optTraceToken,
                        optUserOutputEnabled,
                        optVerbosity,
                        optWorkloadIdentityPool,
                      ],
                      args: {
                        name: "OPERATION",
                        description:
                          "ID of the workload identity pool provider key operation or fully qualified identifier for the workload identity pool provider key operation",
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
                  name: "undelete",
                  description: "Undelete a workload identity pool provider key",
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
                    optProvider,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkloadIdentityPool,
                  ],
                  args: {
                    name: "KEY",
                    description:
                      "ID of the workload identity pool provider key or fully qualified identifier for the workload identity pool provider key",
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
              description: "List workload identity pool providers",
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
                optLocation7,
                optLogHttp,
                optNoShowDeleted,
                optPageSize,
                optProject,
                optQuiet,
                optShowDeleted,
                optSortBy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--workload-identity-pool",
                  description:
                    "ID of the workload identity pool or fully qualified identifier for the workload identity pool",
                  priority: 100,
                  args: {
                    name: "WORKLOAD_IDENTITY_POOL",
                    description: "String",
                  },
                },
              ],
            },
            {
              name: "operations",
              description:
                "Manage IAM workload identity pool provider long running operations",
              subcommands: [
                {
                  name: "describe",
                  description:
                    "Describe a workload identity pool provider operation",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
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
                    optProvider,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                    optWorkloadIdentityPool,
                  ],
                  args: {
                    name: "OPERATION",
                    description:
                      "ID of the workload identity pool provider operation or fully qualified identifier for the workload identity pool provider operation",
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
              name: "undelete",
              description: "Undelete a workload identity pool provider",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                optWorkloadIdentityPool,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workload identity pool provider or fully qualified identifier for the workload identity pool provider",
              },
            },
            {
              name: "update-aws",
              description: "Update an AWS workload identity pool provider",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--account-id",
                  description: "The AWS account ID",
                  args: {
                    name: "ACCOUNT_ID",
                    description: "String",
                  },
                },
                optAttributeCondition2,
                optAttributeMapping,
                optBillingProject,
                optConfiguration,
                optDescription,
                optDisabled2,
                optDisplayName,
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
                optNoDisabled2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkloadIdentityPool,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workload identity pool provider or fully qualified identifier for the workload identity pool provider",
              },
            },
            {
              name: "update-oidc",
              description: "Update an OIDC workload identity pool provider",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--allowed-audiences",
                  description:
                    "Acceptable values for the `aud` field (audience) in the OIDC token. Token exchange requests are rejected if the token audience does not match one of the configured values. Each audience may be at most 256 characters. A maximum of 10 audiences may be configured",
                  args: {
                    name: "ALLOWED_AUDIENCES",
                    description: "List",
                  },
                },
                optAttributeCondition2,
                optAttributeMapping,
                optBillingProject,
                optConfiguration,
                optDescription,
                optDisabled2,
                optDisplayName,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                {
                  name: "--issuer-uri",
                  description: "The OIDC issuer URL",
                  args: {
                    name: "ISSUER_URI",
                    description: "String",
                  },
                },
                {
                  name: "--jwk-json-path",
                  description:
                    'Optional file containing jwk public keys. The file format must follow [jwk specifications](https://www.rfc-editor.org/rfc/rfc7517#section-4). Example file format: ```json { "keys": [ { "kty": "RSA/EC", "alg": "<algorithm>", "use": "sig", "kid": "<key-id>", "n": "", "e": "", "x": "", "y": "", "crv": "" } ] } ``` . Use a full or relative path to a local file containing the value of jwk_json_path',
                  args: {
                    name: "JWK_JSON_PATH",
                    template: "filepaths",
                  },
                },
                optLocation7,
                optLogHttp,
                optNoDisabled2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkloadIdentityPool,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workload identity pool provider or fully qualified identifier for the workload identity pool provider",
              },
            },
            {
              name: "update-saml",
              description: "Update a SAML workload identity pool provider",
              options: [
                optAccessTokenFile,
                optAccount,
                optAttributeCondition2,
                optAttributeMapping,
                optBillingProject,
                optConfiguration,
                optDescription,
                optDisabled2,
                optDisplayName,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                {
                  name: "--idp-metadata-path",
                  description:
                    "XML file with configuration metadata for the SAML identity provider. The metadata file must follow the [SAML 2.0 metadata specification](https://www.oasis-open.org/committees/download.php/35391/sstc-saml-metadata-errata-2.0-wd-04-diff.pdf). Use a full or relative path to a local file containing the value of idp_metadata_path",
                  args: {
                    name: "IDP_METADATA_PATH",
                    template: "filepaths",
                  },
                },
                optImpersonateServiceAccount,
                optLocation7,
                optLogHttp,
                optNoDisabled2,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                optWorkloadIdentityPool,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workload identity pool provider or fully qualified identifier for the workload identity pool provider",
              },
            },
            {
              name: "update-x509",
              description: "Update an X.509 workload identity pool provider",
              options: [
                optAccessTokenFile,
                optAccount,
                optAttributeCondition2,
                optAttributeMapping,
                optBillingProject,
                optConfiguration,
                optDescription,
                optDisabled2,
                optDisplayName,
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
                optNoDisabled2,
                optProject,
                optQuiet,
                optTraceToken,
                {
                  name: "--trust-store-config-path",
                  description:
                    'YAML file with configuration metadata for the X.509 identity provider. Example file format: ```yaml trustStore: trustAnchors: - pemCertificate: "-----BEGIN CERTIFICATE----- <certificate> -----END CERTIFICATE-----" intermediateCas: - pemCertificate: "-----BEGIN CERTIFICATE----- <certificate> -----END CERTIFICATE-----" ```',
                  args: {
                    name: "TRUST_STORE_CONFIG_PATH",
                    template: "filepaths",
                  },
                },
                optUserOutputEnabled,
                optVerbosity,
                optWorkloadIdentityPool,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workload identity pool provider or fully qualified identifier for the workload identity pool provider",
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
          name: "remove-attestation-rule",
          description: "Remove an attestation rule on a workload identity pool",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            optGoogleCloudResource,
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
            name: "WORKLOAD_IDENTITY_POOL",
            description:
              "ID of the workload identity pool or fully qualified identifier for the workload identity pool",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description:
            "Remove IAM policy binding from a workload identity pool",
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
            optLocation7,
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
            name: "WORKLOAD_IDENTITY_POOL",
            description:
              "ID of the workload identity pool or fully qualified identifier for the workload identity pool",
          },
        },
        {
          name: "set-attestation-rules",
          description: "Set attestation rules on a workload identity pool",
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
            {
              name: "--policy-file",
              description:
                "Path to a local JSON-formatted or YAML-formatted file containing an attestation policy, structured as a [list of attestation rules](https://cloud.google.com/iam/docs/reference/rest/v1/projects.locations.workloadIdentityPools.namespaces.managedIdentities/setAttestationRules#request-body)",
              priority: 100,
              args: {
                name: "POLICY_FILE",
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
          args: {
            name: "WORKLOAD_IDENTITY_POOL",
            description:
              "ID of the workload identity pool or fully qualified identifier for the workload identity pool",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a workload identity pool",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
          args: [
            {
              name: "WORKLOAD_IDENTITY_POOL",
              description:
                "ID of the workload identity pool or fully qualified identifier for the workload identity pool",
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
          description: "Undelete a workload identity pool",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "WORKLOAD_IDENTITY_POOL",
            description:
              "ID of the workload identity pool or fully qualified identifier for the workload identity pool",
          },
        },
        {
          name: "update",
          description: "Update a workload identity pool",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--certificate-lifetime",
              description:
                "Lifetime of the workload certificates issued by the CA pool",
              args: {
                name: "CERTIFICATE_LIFETIME",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--description",
              description:
                "A description of the pool. Cannot exceed 256 characters",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--disabled",
              description:
                "Whether the pool is disabled. You cannot use a disabled pool to exchange tokens, or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again",
            },
            {
              name: "--display-name",
              description:
                "A display name for the pool. Cannot exceed 32 characters",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--enable-mesh-ca-compatibility",
              description:
                "Whether to enable mesh CA compatibility for the trust domain. If set to true, the generated trust bundle for the workloads in this trust domain will include the Cloud Service Mesh certificate authority's root CA certificates. The certificate chain for the workload in this trust domain will be signed by the Cloud Service Mesh certificate authority root CA",
              hidden: true,
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
              name: "--inline-certificate-issuance-config-file",
              description:
                "YAML file with configuration for certificate issuance. Example file format: ```yaml inlineCertificateIssuanceConfig: caPools: us-east1: projects/1234/locations/us-east1/caPools/capoolname us-west1: projects/1234/locations/us-west1/caPools/capoolname keyAlgorithm: ECDSA_P256 lifetime: 86400s rotationWindowPercentage: 50 ```",
              args: {
                name: "INLINE_CERTIFICATE_ISSUANCE_CONFIG_FILE",
                template: "filepaths",
              },
            },
            {
              name: "--inline-trust-config-file",
              description:
                'YAML file with configuration for providing additional trust bundles. Example file format: ```yaml inlineTrustConfig: additionalTrustBundles: example.com: trustAnchors: - pemCertificate: "-----BEGIN CERTIFICATE----- <certificate> -----END CERTIFICATE-----" - pemCertificate: "-----BEGIN CERTIFICATE----- <certificate> -----END CERTIFICATE-----" myorg.com: trustAnchors: - pemCertificate: "-----BEGIN CERTIFICATE----- <certificate> -----END CERTIFICATE-----" - pemCertificate: "-----BEGIN CERTIFICATE----- <certificate> -----END CERTIFICATE-----" ```',
              args: {
                name: "INLINE_TRUST_CONFIG_FILE",
                template: "filepaths",
              },
            },
            {
              name: "--key-algorithm",
              description:
                "Key algorithm to use when generating the key pair. This key pair will be used to create the certificate. _KEY_ALGORITHM_ must be one of: *ecdsa-p256*, *ecdsa-p384*, *key-algorithm-unspecified*, *rsa-2048*, *rsa-3072*, *rsa-4096*",
              args: {
                name: "KEY_ALGORITHM",
                suggestions: [
                  "ecdsa-p256",
                  "ecdsa-p384",
                  "key-algorithm-unspecified",
                  "rsa-2048",
                  "rsa-3072",
                  "rsa-4096",
                ],
              },
            },
            optLocation7,
            optLogHttp,
            {
              name: "--no-disabled",
              description:
                "Whether the pool is disabled. You cannot use a disabled pool to exchange tokens, or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again",
              hidden: true,
            },
            {
              name: "--no-enable-mesh-ca-compatibility",
              description:
                "Whether to enable mesh CA compatibility for the trust domain. If set to true, the generated trust bundle for the workloads in this trust domain will include the Cloud Service Mesh certificate authority's root CA certificates. The certificate chain for the workload in this trust domain will be signed by the Cloud Service Mesh certificate authority root CA",
              hidden: true,
            },
            {
              name: "--no-use-default-shared-ca",
              description:
                "Use the default shared certificate authorities (CAs) to issue certificates. If enabled, Google Cloud automatically provisions certificates from a default shared CA in the same region as the workload. Enabling this flag clears any existing CA pools configuration",
            },
            optProject,
            optQuiet,
            {
              name: "--rotation-window-percentage",
              description:
                "Rotation window percentage indicating when certificate rotation should be initiated based on remaining lifetime",
              args: {
                name: "ROTATION_WINDOW_PERCENTAGE",
                description: "Int",
              },
            },
            {
              name: "--session-duration",
              description:
                "Overrides the lifespan of access tokens issued issued for identities in this pool. If not set, the lifespan of issued access tokens is computed based on the type of identity provider:",
              hidden: true,
              args: {
                name: "SESSION_DURATION",
              },
            },
            optTraceToken,
            {
              name: "--use-default-shared-ca",
              description:
                "Use the default shared certificate authorities (CAs) to issue certificates. If enabled, Google Cloud automatically provisions certificates from a default shared CA in the same region as the workload. Enabling this flag clears any existing CA pools configuration. Use *--use-default-shared-ca* to enable and *--no-use-default-shared-ca* to disable",
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "WORKLOAD_IDENTITY_POOL",
            description:
              "ID of the workload identity pool or fully qualified identifier for the workload identity pool",
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
