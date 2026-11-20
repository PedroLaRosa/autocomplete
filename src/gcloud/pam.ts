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

const optEntitlement: Fig.Option = {
  name: "--entitlement",
  description:
    "ID of the entitlement or fully qualified identifier for the entitlement",
  priority: 100,
  args: {
    name: "ENTITLEMENT",
    description: "String",
  },
};

const optEntitlement2: Fig.Option = {
  name: "--entitlement",
  description: "The entitlement id",
  args: {
    name: "ENTITLEMENT",
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
  description: "The name of the folder",
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
  description: "The resource location",
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

const optOrganization: Fig.Option = {
  name: "--organization",
  description: "The name of the organization",
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
  name: "pam",
  description: "Manage Privileged Access Manager (PAM) entitlements and grants",
  subcommands: [
    {
      name: "check-onboarding-status",
      description:
        "Check Privileged Access Manager (PAM) onboarding status for a resource",
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
        optLocation,
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
      name: "entitlements",
      description: "Manage Privileged Access Manager (PAM) entitlements",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new Privileged Access Manager (PAM) entitlement",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--entitlement-file",
              description:
                "YAML file containing the configuration of the entitlement. Use a full or relative path to a local file containing the value of entitlement_file",
              priority: 100,
              args: {
                name: "ENTITLEMENT_FILE",
                template: "filepaths",
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
            optLocation2,
            optLogHttp,
            optNoAsync,
            optOrganization,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENTITLEMENT",
            description:
              "ID of the entitlement or fully qualified identifier for the entitlement",
          },
        },
        {
          name: "delete",
          description: "Delete a Privileged Access Manager (PAM) entitlement",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
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
            optLocation2,
            optLogHttp,
            optNoAsync,
            optOrganization,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENTITLEMENT",
            description:
              "ID of the entitlement or fully qualified identifier for the entitlement",
          },
        },
        {
          name: "describe",
          description:
            "Show details of a Privileged Access Manager (PAM) entitlement",
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
            optLocation2,
            optLogHttp,
            optOrganization,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENTITLEMENT",
            description:
              "ID of the entitlement or fully qualified identifier for the entitlement",
          },
        },
        {
          name: "export",
          description:
            "Export a Privileged Access Manager (PAM) entitlement into a local YAML file",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--destination",
              description:
                "Path to a YAML file where the configuration will be exported. The exported data will not contain any output-only fields. Alternatively, you may omit this flag to write to standard output. For a schema describing the export/import format, see $CLOUDSDKROOT/lib/googlecloudsdk/schemas/",
              args: {
                name: "DESTINATION",
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
            optLocation2,
            optLogHttp,
            optOrganization,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENTITLEMENT",
            description:
              "ID of the entitlement or fully qualified identifier for the entitlement",
          },
        },
        {
          name: "list",
          description:
            "List all Privileged Access Manager (PAM) entitlements under a parent",
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
            optLocation,
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
        },
        {
          name: "search",
          description:
            "Search and list all Privileged Access Manager (PAM) entitlements in a parent for which you are a requester/approver",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--caller-access-type",
              description:
                "Search for entitlements based on whether you are a requester or approver. _CALLER_ACCESS_TYPE_ must be one of: *grant-approver*, *grant-requester*",
              priority: 100,
              args: {
                name: "CALLER_ACCESS_TYPE",
                suggestions: ["grant-approver", "grant-requester"],
              },
            },
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
            optLocation,
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
        },
        {
          name: "update",
          description:
            "Update an existing Privileged Access Manager (PAM) entitlement",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--entitlement-file",
              description:
                "YAML file containing the new configuration of the entitlement. Use a full or relative path to a local file containing the value of entitlement_file",
              priority: 100,
              args: {
                name: "ENTITLEMENT_FILE",
                template: "filepaths",
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
            optLocation2,
            optLogHttp,
            optNoAsync,
            optOrganization,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ENTITLEMENT",
            description:
              "ID of the entitlement or fully qualified identifier for the entitlement",
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
      name: "grants",
      description: "Manage Privileged Access Manager (PAM) grants",
      subcommands: [
        {
          name: "approve",
          description: "Approve a Privileged Access Manager (PAM) grant",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optEntitlement2,
            optFlagsFile,
            optFlatten,
            optFolder,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation2,
            optLogHttp,
            optOrganization,
            optProject,
            optQuiet,
            {
              name: "--reason",
              description: "Reason for approving the grant",
              args: {
                name: "REASON",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "GRANT",
            description:
              "ID of the grant or fully qualified identifier for the grant",
          },
        },
        {
          name: "create",
          description: "Create a new Privileged Access Manager (PAM) grant",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--additional-email-recipients",
              description:
                "Additional email addresses that are notified for all actions performed on the grant",
              args: {
                name: "ADDITIONAL_EMAIL_RECIPIENTS",
                description: "List",
              },
            },
            optBillingProject,
            optConfiguration,
            optEntitlement,
            optFlagsFile,
            optFlatten,
            optFolder,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--justification",
              description: "Justification for the grant",
              args: {
                name: "JUSTIFICATION",
                description: "String",
              },
            },
            optLocation2,
            optLogHttp,
            optOrganization,
            optProject,
            optQuiet,
            {
              name: "--requested-duration",
              description: "Duration of the grant being created",
              priority: 100,
              args: {
                name: "REQUESTED_DURATION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "deny",
          description: "Deny a Privileged Access Manager (PAM) grant",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optEntitlement2,
            optFlagsFile,
            optFlatten,
            optFolder,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation2,
            optLogHttp,
            optOrganization,
            optProject,
            optQuiet,
            {
              name: "--reason",
              description: "Reason for denying the grant",
              args: {
                name: "REASON",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "GRANT",
            description:
              "ID of the grant or fully qualified identifier for the grant",
          },
        },
        {
          name: "describe",
          description:
            "Show details of a Privileged Access Manager (PAM) grant",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optEntitlement2,
            optFlagsFile,
            optFlatten,
            optFolder,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation2,
            optLogHttp,
            optOrganization,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "GRANT",
            description:
              "ID of the grant or fully qualified identifier for the grant",
          },
        },
        {
          name: "list",
          description:
            "List all Privileged Access Manager (PAM) grants associated with an entitlement",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optEntitlement,
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
            optLocation2,
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
        },
        {
          name: "revoke",
          description: "Revoke a Privileged Access Manager (PAM) grant",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optEntitlement2,
            optFlagsFile,
            optFlatten,
            optFolder,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation2,
            optLogHttp,
            optNoAsync,
            optOrganization,
            optProject,
            optQuiet,
            {
              name: "--reason",
              description: "Reason for revoking the grant",
              args: {
                name: "REASON",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "GRANT",
            description:
              "ID of the grant or fully qualified identifier for the grant",
          },
        },
        {
          name: "search",
          description:
            "Search for and list all Privileged Access Manager (PAM) grants you have created, have approved, or can approve",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--caller-relationship",
              description:
                "Whether to return grants you have created, have approved, or can approve. _CALLER_RELATIONSHIP_ must be one of: *can-approve*, *had-approved*, *had-created*",
              priority: 100,
              args: {
                name: "CALLER_RELATIONSHIP",
                suggestions: ["can-approve", "had-approved", "had-created"],
              },
            },
            optConfiguration,
            optEntitlement,
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
            optLocation2,
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
        "Manage Privileged Access Manager (PAM) Long Running Operations",
      subcommands: [
        {
          name: "delete",
          description:
            "Delete a Privileged Access Manager (PAM) long running operation",
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
            optLocation2,
            optLogHttp,
            optOrganization,
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
          description:
            "Show details of a Privileged Access Manager (PAM) long running operation",
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
            optLocation2,
            optLogHttp,
            optOrganization,
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
          description:
            "List all Privileged Access Manager (PAM) long running operations under a location",
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
            optLocation,
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
        },
        {
          name: "wait",
          description:
            "Poll a Privileged Access Manager (PAM) long running operation",
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
            optLocation2,
            optLogHttp,
            optOrganization,
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
