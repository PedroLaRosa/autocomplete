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

const optContactDataFromFile: Fig.Option = {
  name: "--contact-data-from-file",
  description:
    "A YAML file containing the contact data for the domain's three contacts: registrant, admin, and technical",
  args: {
    name: "CONTACT_DATA_FILE_NAME",
    description: "String",
  },
};

const optContactPrivacy: Fig.Option = {
  name: "--contact-privacy",
  description:
    "The contact privacy mode to use. Supported privacy modes depend on the domain. _CONTACT_PRIVACY_ must be one of:",
  args: {
    name: "CONTACT_PRIVACY",
    suggestions: [
      "private-contact-data",
      "public-contact-data",
      "redacted-contact-data",
    ],
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
  name: "domains",
  description: "Manage domains for your Google Cloud projects",
  subcommands: [
    {
      name: "list-user-verified",
      description: "Lists the user's verified domains",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
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
      name: "registrations",
      description: "Manage Cloud Domains registrations",
      subcommands: [
        {
          name: "authorization-code",
          description: "Manage Cloud Domains registration's authorization code",
          subcommands: [
            {
              name: "get",
              description:
                "Get authorization code of a specific Cloud Domains registration",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                name: "REGISTRATION",
                description:
                  "ID of the registration or fully qualified identifier for the registration",
              },
            },
            {
              name: "reset",
              description:
                "Resets authorization code of a specific Cloud Domains registration",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                name: "REGISTRATION",
                description:
                  "ID of the registration or fully qualified identifier for the registration",
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
          name: "configure",
          description:
            "Configure Cloud Domains registrations' management, DNS or contact settings",
          subcommands: [
            {
              name: "contacts",
              description:
                "Configure contact settings of a Cloud Domains registration",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optContactDataFromFile,
                optContactPrivacy,
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
                  name: "--no-validate-only",
                  description:
                    "Don't actually configure contact settings of the registration. Only validate arguments",
                  hidden: true,
                },
                {
                  name: "--notices",
                  description:
                    "Notices about special properties of contacts. _NOTICE_ must be (only one value is supported):",
                  args: {
                    name: "NOTICE",
                    description: "List",
                  },
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                {
                  name: "--validate-only",
                  description:
                    "Don't actually configure contact settings of the registration. Only validate arguments",
                },
                optVerbosity,
              ],
              args: {
                name: "REGISTRATION",
                description:
                  "ID of the registration or fully qualified identifier for the registration",
              },
            },
            {
              name: "dns",
              description:
                "Configure DNS settings of a Cloud Domains registration",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                {
                  name: "--cloud-dns-zone",
                  description:
                    "The name of the Cloud DNS managed-zone to set as the name server for the domain. If it's in the same project, you can use short name. If not, use the full resource name, e.g.: --cloud-dns-zone=projects/example-project/managedZones/example-zone",
                  args: {
                    name: "CLOUD_DNS_ZONE",
                    description: "String",
                  },
                },
                optConfiguration,
                {
                  name: "--disable-dnssec",
                  description:
                    "Use this flag to disable DNSSEC, or to skip enabling it when switching to a Cloud DNS Zone or Google Domains nameservers",
                },
                {
                  name: "--dns-settings-from-file",
                  description:
                    "A YAML file containing the required DNS settings. If specified, its content will replace the values currently used in the registration resource. If the file is missing some of the dns_settings fields, those fields will be cleared",
                  args: {
                    name: "DNS_SETTINGS_FILE_NAME",
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
                {
                  name: "--name-servers",
                  description: "List of DNS name servers for the domain",
                  args: {
                    name: "NAME_SERVER",
                    description: "List",
                  },
                },
                optNoAsync,
                {
                  name: "--no-disable-dnssec",
                  description:
                    "Use this flag to disable DNSSEC, or to skip enabling it when switching to a Cloud DNS Zone or Google Domains nameservers",
                  hidden: true,
                },
                {
                  name: "--no-unsafe-dns-update",
                  description:
                    "(DEPRECATED) Use this flag to allow DNS changes that may make your domain stop serving",
                  hidden: true,
                  deprecated: true,
                },
                {
                  name: "--no-use-google-domains-dns",
                  description:
                    "(DEPRECATED) Use free name servers provided by Google Domains",
                  hidden: true,
                  deprecated: true,
                },
                {
                  name: "--no-validate-only",
                  description:
                    "Don't actually configure DNS settings of the registration. Only validate arguments",
                  hidden: true,
                },
                optProject,
                optQuiet,
                optTraceToken,
                {
                  name: "--unsafe-dns-update",
                  description:
                    "(DEPRECATED) Use this flag to allow DNS changes that may make your domain stop serving",
                  deprecated: true,
                },
                {
                  name: "--use-google-domains-dns",
                  description:
                    "(DEPRECATED) Use free name servers provided by Google Domains",
                  deprecated: true,
                },
                optUserOutputEnabled,
                {
                  name: "--validate-only",
                  description:
                    "Don't actually configure DNS settings of the registration. Only validate arguments",
                },
                optVerbosity,
              ],
              args: {
                name: "REGISTRATION",
                description:
                  "ID of the registration or fully qualified identifier for the registration",
              },
            },
            {
              name: "management",
              description:
                "Configure management settings of a Cloud Domains registration",
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
                  name: "--preferred-renewal-method",
                  description:
                    "Preferred Renewal Method of a registration. It defines how the registration should be renewed. The actual Renewal Method can be set to renewal-disabled in case of e.g. problems with the Billing Account or reporeted domain abuse. _PREFERRED_RENEWAL_METHOD_ must be one of:",
                  args: {
                    name: "PREFERRED_RENEWAL_METHOD",
                    suggestions: ["automatic-renewal", "renewal-disabled"],
                  },
                },
                optProject,
                optQuiet,
                optTraceToken,
                {
                  name: "--transfer-lock-state",
                  description:
                    "Transfer Lock of a registration. It needs to be unlocked in order to transfer the domain to another registrar. _TRANSFER_LOCK_STATE_ must be one of:",
                  args: {
                    name: "TRANSFER_LOCK_STATE",
                    suggestions: ["locked", "unlocked"],
                  },
                },
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "REGISTRATION",
                description:
                  "ID of the registration or fully qualified identifier for the registration",
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
          description: "Delete a Cloud Domains registration",
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
            name: "REGISTRATION",
            description:
              "ID of the registration or fully qualified identifier for the registration",
          },
        },
        {
          name: "describe",
          description: "Describe an existing Cloud Domains registration",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "REGISTRATION",
            description:
              "ID of the registration or fully qualified identifier for the registration",
          },
        },
        {
          name: "export",
          description: "*(REMOVED)* Export a Cloud Domains registration",
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
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REGISTRATION",
            description:
              "ID of the registration or fully qualified identifier for the registration",
          },
        },
        {
          name: "get-register-parameters",
          description:
            "Get register parameters (including availability) of a specific domain",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "DOMAIN",
            description: "Domain to get register parameters for",
          },
        },
        {
          name: "get-transfer-parameters",
          description:
            "*(REMOVED)* Get transfer parameters of a specific domain",
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
            name: "DOMAIN",
            description: "Domain to get transfer parameters for",
          },
        },
        {
          name: "google-domains-dns",
          description: "Manage deprecated Google Domains DNS configuration",
          subcommands: [
            {
              name: "export-dns-record-sets",
              description:
                "Export your registration's Google Domains DNS zone's record-sets into a file",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                  name: "--no-zone-file-format",
                  description:
                    "Indicates that records-file should be in the zone file format. When using this flag, expect the record-set to be exported to a BIND zone formatted file. If you omit this flag, the record-set is exported into a YAML formatted records file. Note, this format flag determines the format of the output recorded in the records-file; it is different from the global `--format` flag which affects console output alone",
                  hidden: true,
                },
                optProject,
                optQuiet,
                {
                  name: "--records-file",
                  description: "File to which record-sets should be exported",
                  priority: 100,
                  args: {
                    name: "RECORDS_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--zone-file-format",
                  description:
                    "Indicates that records-file should be in the zone file format. When using this flag, expect the record-set to be exported to a BIND zone formatted file. If you omit this flag, the record-set is exported into a YAML formatted records file. Note, this format flag determines the format of the output recorded in the records-file; it is different from the global `--format` flag which affects console output alone",
                },
              ],
              args: {
                name: "REGISTRATION",
                description:
                  "ID of the registration or fully qualified identifier for the registration",
              },
            },
            {
              name: "get-forwarding-config",
              description:
                "Get forwarding configuration of a specific Cloud Domains registration",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                name: "REGISTRATION",
                description:
                  "ID of the registration or fully qualified identifier for the registration",
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
          name: "import",
          description:
            "*(REMOVED)* Import a domain from Google Domains registrar to Cloud Domains",
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
            optLabels,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REGISTRATION",
            description:
              "ID of the registration or fully qualified identifier for the registration",
          },
        },
        {
          name: "initiate-push-transfer",
          description: "Initiates the push transfer process",
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
              name: "--tag",
              description:
                "The Tag of the new registrar. Can be found at https://nominet.uk/registrar-list/",
              args: {
                name: "TAG",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REGISTRATION",
            description:
              "ID of the registration or fully qualified identifier for the registration",
          },
        },
        {
          name: "list",
          description: "List Cloud Domains registrations",
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
              name: "--no-uri",
              description:
                "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
              hidden: true,
            },
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            {
              name: "--uri",
              description:
                "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "list-importable-domains",
          description:
            "*(REMOVED)* List Google Domains registrations importable into Cloud Domains",
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
          name: "operations",
          description: "Manage Cloud Domains operations",
          subcommands: [
            {
              name: "describe",
              description: "Show details about a Cloud Domains operation",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
              description: "List Cloud Domains operations",
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
                  name: "--no-uri",
                  description:
                    "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
                  hidden: true,
                },
                optPageSize,
                optProject,
                optQuiet,
                optSortBy,
                optTraceToken,
                {
                  name: "--uri",
                  description:
                    "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
                },
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "wait",
              description: "Wait for asynchronous operation to complete",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
          name: "register",
          description: "Register a new domain",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--cloud-dns-zone",
              description:
                "The name of the Cloud DNS managed-zone to set as the name server for the domain. If it's in the same project, you can use short name. If not, use the full resource name, e.g.: --cloud-dns-zone=projects/example-project/managedZones/example-zone. If the zone is signed, DNSSEC will be enabled by default unless you pass --disable-dnssec",
              args: {
                name: "CLOUD_DNS_ZONE",
                description: "String",
              },
            },
            optConfiguration,
            optContactDataFromFile,
            optContactPrivacy,
            {
              name: "--disable-dnssec",
              description:
                "Use this flag to disable DNSSEC, or to skip enabling it when switching to a Cloud DNS Zone or Google Domains nameservers",
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
              name: "--name-servers",
              description: "List of DNS name servers for the domain",
              args: {
                name: "NAME_SERVER",
                description: "List",
              },
            },
            optNoAsync,
            {
              name: "--no-disable-dnssec",
              description:
                "Use this flag to disable DNSSEC, or to skip enabling it when switching to a Cloud DNS Zone or Google Domains nameservers",
              hidden: true,
            },
            {
              name: "--no-use-google-domains-dns",
              description:
                "(REMOVED) Use free name servers provided by Google Domains. If the zone is signed, DNSSEC will be enabled by default unless you pass --disable-dnssec",
              hidden: true,
            },
            {
              name: "--no-validate-only",
              description:
                "Don't actually create registration. Only validate arguments",
              hidden: true,
            },
            {
              name: "--notices",
              description:
                "Notices about special properties of certain domains or contacts. _NOTICE_ must be one of:",
              args: {
                name: "NOTICE",
                description: "List",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            {
              name: "--use-google-domains-dns",
              description:
                "(REMOVED) Use free name servers provided by Google Domains. If the zone is signed, DNSSEC will be enabled by default unless you pass --disable-dnssec",
            },
            optUserOutputEnabled,
            {
              name: "--validate-only",
              description:
                "Don't actually create registration. Only validate arguments",
            },
            optVerbosity,
            {
              name: "--yearly-price",
              description:
                'Accept the domain\'s yearly price in the interactive flow or by using this flag. Use a number followed by a currency code, for example, "12.00 USD". Get the price using the get-register-parameters command',
              args: {
                name: "YEARLY_PRICE",
                description: "String",
              },
            },
          ],
          args: {
            name: "REGISTRATION",
            description:
              "ID of the registration or fully qualified identifier for the registration",
          },
        },
        {
          name: "renew-domain",
          description: "Renew a recently expired Cloud Domains registration",
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
              name: "--no-validate-only",
              description:
                "Don't actually renew registration. Only validate arguments",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            {
              name: "--validate-only",
              description:
                "Don't actually renew registration. Only validate arguments",
            },
            optVerbosity,
            {
              name: "--yearly-price",
              description:
                'Accept the domain\'s yearly price in the interactive flow or by using this flag. Use a number followed by a currency code, for example, "12.00 USD". Get the price by calling the renew-domain command without the --yearly-price flag',
              args: {
                name: "YEARLY_PRICE",
                description: "String",
              },
            },
          ],
          args: {
            name: "REGISTRATION",
            description:
              "ID of the registration or fully qualified identifier for the registration",
          },
        },
        {
          name: "search-domains",
          description: "Search for available domains",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "DOMAIN_QUERY",
            description:
              "Domain search query. May be a domain name or arbitrary search terms",
          },
        },
        {
          name: "transfer",
          description: "*(REMOVED)* Transfer a domain from another registrar",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--authorization-code-from-file",
              description:
                "A file containing the authorizaton code. In most cases, you must provide an authorization code from the domain's current registrar to transfer the domain",
              args: {
                name: "AUTHORIZATION_CODE_FILE_NAME",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--cloud-dns-zone",
              description:
                "The name of the Cloud DNS managed-zone to set as the name server for the domain. If it's in the same project, you can use short name. If not, use the full resource name, e.g.: --cloud-dns-zone=projects/example-project/managedZones/example-zone. To avoid downtime following transfer, make sure the zone is configured correctly before proceeding. DNSSEC will be disabled and will need to be enabled after the transfer completes, if desired",
              args: {
                name: "CLOUD_DNS_ZONE",
                description: "String",
              },
            },
            optConfiguration,
            optContactDataFromFile,
            optContactPrivacy,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--keep-dns-settings",
              description:
                "Keep the domain's current DNS configuration from its current registrar. Use this option only if you are sure that the domain's current DNS service will not cease upon transfer, as is often the case for DNS services provided for free by the registrar",
            },
            optLabels,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-keep-dns-settings",
              description:
                "Keep the domain's current DNS configuration from its current registrar. Use this option only if you are sure that the domain's current DNS service will not cease upon transfer, as is often the case for DNS services provided for free by the registrar",
              hidden: true,
            },
            {
              name: "--no-use-google-domains-dns",
              description:
                "(DEPRECATED) Use free name servers provided by Google Domains. This blank-slate option cannot be configured before transfer. DNSSEC will be disabled and will need to be enabled after the transfer completes, if desired",
              hidden: true,
              deprecated: true,
            },
            {
              name: "--no-validate-only",
              description:
                "Don't actually transfer domain. Only validate arguments",
              hidden: true,
            },
            {
              name: "--notices",
              description:
                "Notices about special properties of certain domains or contacts. _NOTICE_ must be (only one value is supported):",
              args: {
                name: "NOTICE",
                description: "List",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            {
              name: "--use-google-domains-dns",
              description:
                "(DEPRECATED) Use free name servers provided by Google Domains. This blank-slate option cannot be configured before transfer. DNSSEC will be disabled and will need to be enabled after the transfer completes, if desired",
              deprecated: true,
            },
            optUserOutputEnabled,
            {
              name: "--validate-only",
              description:
                "Don't actually transfer domain. Only validate arguments",
            },
            optVerbosity,
            {
              name: "--yearly-price",
              description:
                'Accept the domain\'s yearly price in the interactive flow or by using this flag. Use a number followed by a currency code, for example, "12.00 USD". Get the price using the get-transfer-parameters command',
              args: {
                name: "YEARLY_PRICE",
                description: "String",
              },
            },
          ],
          args: {
            name: "REGISTRATION",
            description:
              "ID of the registration or fully qualified identifier for the registration",
          },
        },
        {
          name: "update",
          description: "Update a Cloud Domains registration",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
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
            optNoAsync,
            {
              name: "--no-clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
              hidden: true,
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
            name: "REGISTRATION",
            description:
              "ID of the registration or fully qualified identifier for the registration",
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
      name: "verify",
      description: "Verifies a domain via an in-browser workflow",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
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
        name: "DOMAIN",
        description: "The domain to be verified",
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
};

export default completionSpec;
