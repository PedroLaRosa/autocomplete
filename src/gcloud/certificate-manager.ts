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
  description: "Human-readable description of the resource",
  args: {
    name: "DESCRIPTION",
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
  description: "Certificate Manager location",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation2: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description: "The Cloud location for the certificate map entry",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation4: Fig.Option = {
  name: "--location",
  description: "The Cloud location for the certificate map",
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

const optMap: Fig.Option = {
  name: "--map",
  description: "The certificate map for the certificate map entry",
  args: {
    name: "MAP",
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

const optTags: Fig.Option = {
  name: "--tags",
  description: "List of tag KEY=VALUE pairs to add",
  hidden: true,
  args: {
    name: "KEY=VALUE",
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
  name: "certificate-manager",
  description: "Manage SSL certificates for your Google Cloud projects",
  subcommands: [
    {
      name: "certificates",
      description: "Manage Certificate Manager certificates",
      subcommands: [
        {
          name: "create",
          description: "Create a certificate",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--certificate-file",
              description:
                "Certificate data in PEM-encoded form. Use a full or relative path to a local file containing the value of certificate_file",
              priority: 100,
              args: {
                name: "CERTIFICATE_FILE",
                template: "filepaths",
              },
            },
            optConfiguration,
            optDescription,
            {
              name: "--dns-authorizations",
              description:
                "Name(s) of the DNS authorizations for each listed domain",
              args: {
                name: "DNS_AUTHORIZATIONS",
                description: "List",
              },
            },
            {
              name: "--domains",
              description: "Public domain name(s) to create a certificate for",
              priority: 100,
              args: {
                name: "DOMAINS",
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
              name: "--issuance-config",
              description:
                "Name of the Certificate Issuance Config to use for issuance",
              args: {
                name: "ISSUANCE_CONFIG",
                description: "String",
              },
            },
            optLabels,
            optLocation,
            optLogHttp,
            optNoAsync,
            {
              name: "--private-key-file",
              description:
                "Private key data in PEM-encoded form. Use a full or relative path to a local file containing the value of private_key_file",
              priority: 100,
              args: {
                name: "PRIVATE_KEY_FILE",
                template: "filepaths",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--scope",
              description:
                "Scope of the managed certificate. This determines which services the certificate can be attached to/associated with. Defaults to `DEFAULT`. _SCOPE_ must be one of:",
              args: {
                name: "SCOPE",
                suggestions: [
                  "all-regions",
                  "client-auth",
                  "default",
                  "edge-cache",
                ],
              },
            },
            optTags,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CERTIFICATE",
            description:
              "ID of the certificate or fully qualified identifier for the certificate",
          },
        },
        {
          name: "delete",
          description: "Delete a certificate",
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
            {
              name: "--location",
              description: "The Cloud location for the certificate",
              args: {
                name: "LOCATION",
                description: "String",
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
            name: "CERTIFICATE",
            description:
              "ID of the certificate or fully qualified identifier for the certificate",
          },
        },
        {
          name: "describe",
          description: "Describe an existing certificate",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "CERTIFICATE",
            description:
              "ID of the certificate or fully qualified identifier for the certificate",
          },
        },
        {
          name: "list",
          description: "List certificates",
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
          description: "Update a certificate",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--certificate-file",
              description:
                "The certificate data in PEM-encoded form. Use a full or relative path to a local file containing the value of certificate_file",
              priority: 100,
              args: {
                name: "CERTIFICATE_FILE",
                template: "filepaths",
              },
            },
            optClearLabels,
            optConfiguration,
            {
              name: "--description",
              description: "Text description of a certificate",
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
              name: "--location",
              description: "The Cloud location for the certificate",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optNoAsync,
            optNoClearLabels,
            {
              name: "--private-key-file",
              description:
                "The private key data in PEM-encoded form. Use a full or relative path to a local file containing the value of private_key_file",
              priority: 100,
              args: {
                name: "PRIVATE_KEY_FILE",
                template: "filepaths",
              },
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
            name: "CERTIFICATE",
            description:
              "ID of the certificate or fully qualified identifier for the certificate",
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
      name: "dns-authorizations",
      description: "Manage Certificate Manager DNS authorizations",
      subcommands: [
        {
          name: "create",
          description: "Create a DNS Authorization",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optDescription,
            {
              name: "--domain",
              description: "Public domain name to create an authorization for",
              priority: 100,
              args: {
                name: "DOMAIN",
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
            optLocation,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTags,
            optTraceToken,
            {
              name: "--type",
              description:
                "Type of the DNS authorization. _TYPE_ must be one of: *fixed-record*, *per-project-record*, *type-unspecified*",
              args: {
                name: "TYPE",
                suggestions: [
                  "fixed-record",
                  "per-project-record",
                  "type-unspecified",
                ],
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DNS_AUTHORIZATION",
            description:
              "ID of the dnsAuthorization or fully qualified identifier for the dnsAuthorization",
          },
        },
        {
          name: "delete",
          description: "Delete a DNS Authorization",
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
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DNS_AUTHORIZATION",
            description:
              "ID of the dnsAuthorization or fully qualified identifier for the dnsAuthorization",
          },
        },
        {
          name: "describe",
          description: "Show details about a DNS Authorization",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "DNS_AUTHORIZATION",
            description:
              "ID of the dnsAuthorization or fully qualified identifier for the dnsAuthorization",
          },
        },
        {
          name: "list",
          description: "List all DNS Authorizations in a project",
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
          description: "Update a DNS Authorization",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optClearLabels,
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
            name: "DNS_AUTHORIZATION",
            description:
              "ID of the dnsAuthorization or fully qualified identifier for the dnsAuthorization",
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
      name: "issuance-configs",
      description: "Manage Certificate Manager Certificate Issuance Configs",
      subcommands: [
        {
          name: "create",
          description: "Create a Certificate Issuance Config",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--ca-pool",
              description:
                "CA Pool used for issuing certificates. For example:",
              priority: 100,
              args: {
                name: "CA_POOL",
                description: "String",
              },
            },
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
            {
              name: "--key-algorithm",
              description:
                "Key algorithm to use when generating the private key. Defaults to `rsa-2048`. _KEY_ALGORITHM_ must be one of: *ecdsa-p256*, *rsa-2048*",
              args: {
                name: "KEY_ALGORITHM",
                suggestions: ["ecdsa-p256", "rsa-2048"],
              },
            },
            optLabels,
            {
              name: "--lifetime",
              description:
                "Lifetime of issued certificates in ISO 8601 format. Use `gcloud topic datetimes` for details. Defaults to `P30D`",
              args: {
                name: "LIFETIME",
                description: "String",
              },
            },
            optLocation,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--rotation-window-percentage",
              description:
                "How long along the lifetime of the ceritificate to renew, expressed as a percentage. Defaults to `66`",
              args: {
                name: "ROTATION_WINDOW_PERCENTAGE",
                description: "Int",
              },
            },
            optTags,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CERTIFICATE_ISSUANCE_CONFIG",
            description:
              "ID of the certificateIssuanceConfig or fully qualified identifier for the certificateIssuanceConfig",
          },
        },
        {
          name: "delete",
          description: "Delete a Certificate Issuance Config",
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
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "CERTIFICATE_ISSUANCE_CONFIG",
            description:
              "ID of the certificateIssuanceConfig or fully qualified identifier for the certificateIssuanceConfig",
          },
        },
        {
          name: "describe",
          description: "Show details about a Certificate Issuance Config",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "CERTIFICATE_ISSUANCE_CONFIG",
            description:
              "ID of the certificateIssuanceConfig or fully qualified identifier for the certificateIssuanceConfig",
          },
        },
        {
          name: "list",
          description: "List all Certificate Issuance Configs in a project",
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
          description: "Update a Certificate Issuance Config",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optClearLabels,
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
            name: "CERTIFICATE_ISSUANCE_CONFIG",
            description:
              "ID of the certificateIssuanceConfig or fully qualified identifier for the certificateIssuanceConfig",
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
      name: "maps",
      description: "Manage Certificate Manager certificate maps",
      subcommands: [
        {
          name: "create",
          description: "Create a certificate map",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Text description of a certificate map",
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
            optLocation4,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--tags",
              description:
                "List of tags KEY=VALUE pairs to bind. Each item must be expressed as `<tag-key-namespaced-name>=<tag-value-short-name>`",
              hidden: true,
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MAP",
            description:
              "ID of the certificate map or fully qualified identifier for the certificate map",
          },
        },
        {
          name: "delete",
          description: "Delete a certificate map",
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
            name: "MAP",
            description:
              "ID of the certificate map or fully qualified identifier for the certificate map",
          },
        },
        {
          name: "describe",
          description: "Describe an existing certificate map",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "MAP",
            description:
              "ID of the certificate map or fully qualified identifier for the certificate map",
          },
        },
        {
          name: "entries",
          description: "Manage Certificate Manager certificate map entries",
          subcommands: [
            {
              name: "create",
              description: "Create a certificate map entry",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                {
                  name: "--certificates",
                  description:
                    "IDs of the certificates or fully qualified identifiers for the certificates",
                  priority: 100,
                  args: {
                    name: "CERTIFICATES",
                    description: "List",
                  },
                },
                optConfiguration,
                {
                  name: "--description",
                  description: "Text description of a certificate map entry",
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
                  name: "--hostname",
                  description:
                    "A domain name (FQDN), which controls when list of certificates specified in the resource will be taken under consideration for certificate selection",
                  args: {
                    name: "HOSTNAME",
                    description: "String",
                  },
                },
                optImpersonateServiceAccount,
                optLabels,
                optLocation3,
                optLogHttp,
                optMap,
                optNoAsync,
                {
                  name: "--no-set-primary",
                  description:
                    "The certificate will be used as the default cert if no other certificate in the map matches on SNI",
                  hidden: true,
                },
                optProject,
                optQuiet,
                {
                  name: "--set-primary",
                  description:
                    "The certificate will be used as the default cert if no other certificate in the map matches on SNI",
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "ENTRY",
                description:
                  "ID of the certificate map entry or fully qualified identifier for the certificate map entry",
              },
            },
            {
              name: "delete",
              description: "Delete a certificate map entry",
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
                optMap,
                optNoAsync,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "ENTRY",
                description:
                  "ID of the certificate map entry or fully qualified identifier for the certificate map entry",
              },
            },
            {
              name: "describe",
              description: "Describe an existing certificate map entry",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                optMap,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "ENTRY",
                description:
                  "ID of the certificate map entry or fully qualified identifier for the certificate map entry",
              },
            },
            {
              name: "list",
              description: "List certificate map entries",
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
                optLocation4,
                optLogHttp,
                {
                  name: "--map",
                  description:
                    "ID of the certificate map or fully qualified identifier for the certificate map",
                  priority: 100,
                  args: {
                    name: "MAP",
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
            {
              name: "update",
              description: "Update a certificate map entry",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                {
                  name: "--certificates",
                  description:
                    "IDs of the certificates or fully qualified identifiers for the certificates",
                  priority: 100,
                  args: {
                    name: "CERTIFICATES",
                    description: "List",
                  },
                },
                optClearLabels,
                optConfiguration,
                {
                  name: "--description",
                  description: "Text description of a certificate map entry",
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
                optLocation3,
                optLogHttp,
                optMap,
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
                name: "ENTRY",
                description:
                  "ID of the certificate map entry or fully qualified identifier for the certificate map entry",
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
          description: "List certificate maps",
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
          description: "Update a certificate map",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optClearLabels,
            optConfiguration,
            {
              name: "--description",
              description: "Text description of a certificate map",
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
            optLocation4,
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
            name: "MAP",
            description:
              "ID of the certificate map or fully qualified identifier for the certificate map",
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
      description: "Manage Certificate Manager operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a long-running operation",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
          description: "List long-running operations",
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
      name: "trust-configs",
      description: "Manage Certificate Manager trust configs",
      subcommands: [
        {
          name: "create",
          description: "Create TrustConfig",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--allowlisted-certificates",
              description:
                "Allowlisted PEM-encoded certificates. Certificates should be provided in files. For multiple file names, separate them by a comma (','). One file can contain multiple certificates",
              args: {
                name: "ALLOWLISTED_CERTIFICATES",
                description: "List",
              },
            },
            optAsync,
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
            optLabels,
            optLocation,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTags,
            optTraceToken,
            {
              name: "--trust-store",
              description:
                "Trust Store with the given trust anchor and intermediate CA PEM-encoded certificates. Certificates should be provided in files. For multiple file names, separate them by a semicolon (';') and quote them ('\"'). One file can contain multiple certificates. Intermediate CAs are optional",
              args: {
                name: "TRUST_STORE",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TRUST_CONFIG",
            description:
              "ID of the trustConfig or fully qualified identifier for the trustConfig",
          },
        },
        {
          name: "delete",
          description: "Delete TrustConfig",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--etag",
              description:
                "The current etag of the asset. If an etag is provided and does not match the current etag of the asset, the deletion will be blocked",
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
            optLocation,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TRUST_CONFIG",
            description:
              "ID of the trustConfig or fully qualified identifier for the trustConfig",
          },
        },
        {
          name: "describe",
          description: "Show details about a TrustConfig",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "TRUST_CONFIG",
            description:
              "ID of the trustConfig or fully qualified identifier for the trustConfig",
          },
        },
        {
          name: "export",
          description: "Export TrustConfig",
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
            name: "TRUST_CONFIG",
            description:
              "ID of the trustConfig or fully qualified identifier for the trustConfig",
          },
        },
        {
          name: "import",
          description: "Import TrustConfig",
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
              name: "--source",
              description:
                "Path to a YAML file containing the configuration export data. The YAML file must not contain any output-only fields. Alternatively, you may omit this flag to read from standard input. For a schema describing the export/import format, see: $CLOUDSDKROOT/lib/googlecloudsdk/schemas/",
              args: {
                name: "SOURCE",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--update-mask",
              description:
                "Update mask used to specify fields to be overwritten in the TrustConfig by import. TrustConfig must already exist. Fields specified in the update-mask are relative to the TrustConfig. The flag can be a comma-separated list of updatable non-nested fields, e.g. description or trust_stores. Valid example: --update-mask=description,trust_stores",
              args: {
                name: "UPDATE_MASK",
                description: "String",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TRUST_CONFIG",
            description:
              "ID of the trustConfig or fully qualified identifier for the trustConfig",
          },
        },
        {
          name: "list",
          description: "List all TrustConfigs in a project",
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
          description: "Update TrustConfig",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-allowlisted-certificates",
              description:
                "Add allowlisted PEM-encoded certificates. Certificates should be provided in files. For multiple file names, separate them by a comma (','). One file can contain multiple certificates",
              args: {
                name: "ADD_ALLOWLISTED_CERTIFICATES",
                description: "List",
              },
            },
            optAsync,
            optBillingProject,
            {
              name: "--clear-allowlisted-certificates",
              description: "Clear all allowlisted certificates",
            },
            optClearLabels,
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
            optNoAsync,
            {
              name: "--no-clear-allowlisted-certificates",
              description: "Clear all allowlisted certificates",
              hidden: true,
            },
            optNoClearLabels,
            optProject,
            optQuiet,
            {
              name: "--remove-allowlisted-certificates",
              description:
                "Remove allowlisted PEM-encoded certificates. Certificates should be provided in files. For multiple file names, separate them by a comma (','). One file can contain multiple certificates",
              args: {
                name: "REMOVE_ALLOWLISTED_CERTIFICATES",
                description: "List",
              },
            },
            optRemoveLabels,
            optTraceToken,
            {
              name: "--trust-store",
              description:
                "Trust Store with the given trust anchor and intermediate CA PEM-encoded certificates. Certificates should be provided in files. For multiple file names, separate them by a semicolon (';') and quote them ('\"'). One file can contain multiple certificates. Intermediate CAs are optional",
              args: {
                name: "TRUST_STORE",
              },
            },
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TRUST_CONFIG",
            description:
              "ID of the trustConfig or fully qualified identifier for the trustConfig",
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
