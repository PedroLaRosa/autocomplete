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

const optDomain: Fig.Option = {
  name: "--domain",
  description:
    "The fully-qualified domain name of the Microsoft Active Directory domain",
  args: {
    name: "DOMAIN",
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

const optNoClearLabels: Fig.Option = {
  name: "--no-clear-labels",
  description:
    "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
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
  name: "active-directory",
  description: "Manage Managed Microsoft AD resources",
  subcommands: [
    {
      name: "domains",
      description: "Manage Managed Microsoft AD domains",
      subcommands: [
        {
          name: "backups",
          description: "Managed Microsoft AD Backups",
          subcommands: [
            {
              name: "create",
              description: "Create a Managed Microsoft AD domain backup",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optDomain,
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
                  description: "List of label KEY=VALUE pairs to add",
                  args: {
                    name: "KEY=VALUE",
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
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup",
              },
            },
            {
              name: "delete",
              description: "Delete a Managed Microsoft AD domain backup",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optDomain,
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
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup",
              },
            },
            {
              name: "describe",
              description: "Describe a Managed Microsoft AD domain backup",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optDomain,
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
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup",
              },
            },
            {
              name: "list",
              description: "List all Managed Microsoft AD domain backups",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--domain",
                  description:
                    "ID of the domain or fully qualified identifier for the domain",
                  priority: 100,
                  args: {
                    name: "DOMAIN",
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
              name: "update",
              description: "Update a Managed Microsoft AD domain backup",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optClearLabels,
                optConfiguration,
                optDomain,
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
                optRemoveLabels,
                optTraceToken,
                optUpdateLabels,
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
          name: "create",
          description: "Create a Managed Microsoft AD domain",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--admin-name",
              description:
                "Name of the administrator that may be used to perform Active Directory operations. This is a delegated administrator account provisioned by our service. If left unspecified `MIAdmin` will be used. This is different from both the domain administrator and the Directory Services Restore Mode (DSRM) administrator",
              args: {
                name: "ADMIN_NAME",
                description: "String",
              },
            },
            optAsync,
            {
              name: "--authorized-networks",
              description:
                "Names of the Google Compute Engine networks to which the domain will be connected",
              args: {
                name: "AUTHORIZED_NETWORKS",
                description: "List",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--enable-audit-logs",
              description:
                "If specified, Active Directory data audit logs are enabled for the domain",
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
              name: "--labels",
              description: "List of label KEY=VALUE pairs to add",
              args: {
                name: "KEY=VALUE",
              },
            },
            optLogHttp,
            optNoAsync,
            {
              name: "--no-enable-audit-logs",
              description:
                "If specified, Active Directory data audit logs are enabled for the domain",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--region",
              description:
                "Google Compute Engine region in which to provision domain controllers",
              priority: 100,
              args: {
                name: "REGION",
                description: "List",
              },
            },
            {
              name: "--reserved-ip-range",
              description:
                "Classless Inter-Domain Routing range of internal addresses that are reserved for this domain",
              priority: 100,
              args: {
                name: "RESERVED_IP_RANGE",
                description: "String",
              },
            },
            {
              name: "--tags",
              description: "List of tag KEY=VALUE pairs to add",
              hidden: true,
              args: {
                name: "KEY=VALUE",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DOMAIN",
            description:
              "ID of the domain or fully qualified identifier for the domain",
          },
        },
        {
          name: "delete",
          description: "Delete a managed Microsoft Active Directory domain",
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
            name: "DOMAIN",
            description:
              "ID of the domain or fully qualified identifier for the domain",
          },
        },
        {
          name: "describe",
          description: "Describe a Managed Microsoft AD domain",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            description:
              "ID of the domain or fully qualified identifier for the domain",
          },
        },
        {
          name: "describe-ldaps-settings",
          description:
            "Describe the LDAPS settings of a Managed Microsoft AD domain",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            description:
              "ID of the domain or fully qualified identifier for the domain",
          },
        },
        {
          name: "extend-schema",
          description:
            "Initiate schema extension for a Managed Microsoft AD domain",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Description of schema change",
              priority: 100,
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
              name: "--ldif-file",
              description:
                "Local LDIF file path that contains commands for schema extension. The file size can't be larger than 1 MB. Use a full or relative path to a local file containing the value of ldif_file",
              priority: 100,
              args: {
                name: "LDIF_FILE",
                template: "filepaths",
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
            name: "DOMAIN",
            description:
              "ID of the domain or fully qualified identifier for the domain",
          },
        },
        {
          name: "get-iam-policy",
          description:
            "Describe the IAM policy for a Managed Microsoft AD domain",
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
            name: "DOMAIN",
            description:
              "ID of the domain or fully qualified identifier for the domain",
          },
        },
        {
          name: "list",
          description: "List Managed Microsoft AD domains",
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
          name: "reset-admin-password",
          description:
            "Reset the admin password for a Managed Microsoft AD domain",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            description:
              "ID of the domain or fully qualified identifier for the domain",
          },
        },
        {
          name: "restore",
          description: "Restore a domain from the specified backup",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--backup",
              description:
                "Name of the domain backup from which you want to restore the Managed Microsoft AD domain",
              priority: 100,
              args: {
                name: "BACKUP",
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
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DOMAIN",
            description:
              "ID of the domain or fully qualified identifier for the domain",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a Managed Microsoft AD domain",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              name: "DOMAIN",
              description:
                "ID of the domain or fully qualified identifier for the domain",
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
          name: "trusts",
          description: "Manage Managed Microsoft AD domains",
          subcommands: [
            {
              name: "create",
              description:
                "Create a Microsoft Active Directory Trust between a Managed Microsoft AD domain and another domain",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--direction",
                  description: "Direction of the trust",
                  args: {
                    name: "DIRECTION",
                    suggestions: [
                      "bidirectional",
                      "inbound",
                      "outbound",
                      "trust-direction-unspecified",
                    ],
                  },
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--handshake-secret",
                  description:
                    "Trust handshake secret with target domain. The secret will not be stored. If not specified, command will prompt user for secret",
                  args: {
                    name: "HANDSHAKE_SECRET",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                optNoAsync,
                {
                  name: "--no-selective-authentication",
                  description:
                    "If specified, trusted side will only have selective access to approved set of resources",
                  hidden: true,
                },
                optProject,
                optQuiet,
                {
                  name: "--selective-authentication",
                  description:
                    "If specified, trusted side will only have selective access to approved set of resources",
                },
                {
                  name: "--target-dns-ip-addresses",
                  description:
                    "Target DNS server IP addresses that can resolve the target domain",
                  priority: 100,
                  args: {
                    name: "TARGET_DNS_IP_ADDRESSES",
                    description: "List",
                  },
                },
                {
                  name: "--target-domain-name",
                  description:
                    "Target domain name for the Managed Microsoft AD Trust",
                  priority: 100,
                  args: {
                    name: "TARGET_DOMAIN_NAME",
                    description: "String",
                  },
                },
                optTraceToken,
                {
                  name: "--type",
                  description:
                    "Type of the trust. Must be FOREST or EXTERNAL. Default is FOREST. _TYPE_ must be one of: *external*, *forest*, *trust-type-unspecified*",
                  args: {
                    name: "TYPE",
                    suggestions: [
                      "external",
                      "forest",
                      "trust-type-unspecified",
                    ],
                  },
                },
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "DOMAIN",
                description:
                  "ID of the domain or fully qualified identifier for the domain",
              },
            },
            {
              name: "delete",
              description:
                "Delete an Active Directory Trust between a Managed Microsoft AD domain and a target domain",
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
                  name: "--target-domain-name",
                  description:
                    "Target domain name for the Managed Microsoft AD trust you want to delete",
                  priority: 100,
                  args: {
                    name: "TARGET_DOMAIN_NAME",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "DOMAIN",
                description:
                  "ID of the domain or fully qualified identifier for the domain",
              },
            },
            {
              name: "update",
              description:
                "Update target DNS IP addresses for a Managed Microsoft AD trust",
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
                  name: "--target-dns-ip-addresses",
                  description:
                    "DNS server IP addresses that can resolve the target domain",
                  priority: 100,
                  args: {
                    name: "TARGET_DNS_IP_ADDRESSES",
                    description: "List",
                  },
                },
                {
                  name: "--target-domain-name",
                  description:
                    "Target domain name for the Managed Microsoft AD trust you want to update",
                  priority: 100,
                  args: {
                    name: "TARGET_DOMAIN_NAME",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "DOMAIN",
                description:
                  "ID of the domain or fully qualified identifier for the domain",
              },
            },
            {
              name: "validate-state",
              description: "Validate the state of a Managed Microsoft AD trust",
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
                  name: "--target-domain-name",
                  description:
                    "Target domain name of the Managed Microsoft AD Active Directory trust you want to validate",
                  priority: 100,
                  args: {
                    name: "TARGET_DOMAIN_NAME",
                    description: "String",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "DOMAIN",
                description:
                  "ID of the domain or fully qualified identifier for the domain",
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
          description: "Update a Managed Microsoft AD domain",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-authorized-networks",
              description:
                "A list of URLs of additional networks to peer this domain to in the form projects/{project}/global/networks/{network}. Networks must belong to the project",
              args: {
                name: "AUTH_NET1, AUTH_NET2, ...",
                description: "List",
              },
            },
            {
              name: "--add-region",
              description:
                "An additional region to provision this domain in. If domain is already provisioned in region, nothing will be done in that region. Supported regions are: asia-east1, asia-northeast1, asia-south1, asia-southeast1, australia-southeast1, europe-north1, europe-west1, europe-west2, europe-west3, europe-west4, northamerica-northeast1, southamerica-east1, us-central1, us-east1, us-east4, us-west1, us-west2",
              args: {
                name: "ADD_REGION",
                description: "String",
              },
            },
            optAsync,
            optBillingProject,
            optClearLabels,
            optConfiguration,
            {
              name: "--enable-audit-logs",
              description:
                "If specified, Active Directory data audit logs are enabled for the domain",
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
              name: "--no-enable-audit-logs",
              description:
                "If specified, Active Directory data audit logs are enabled for the domain",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--remove-authorized-networks",
              description:
                "A list of URLs of additional networks to unpeer this domain from in the form projects/{project}/global/networks/{network}. Networks must belong to the project",
              args: {
                name: "AUTH_NET1, AUTH_NET2, ...",
                description: "List",
              },
            },
            optRemoveLabels,
            {
              name: "--remove-region",
              description:
                "A region to de-provision this domain from. If domain is already not provisioned in a region, nothing will be done in that region. Domains must be left provisioned in at least one region. Supported regions are: asia-east1, asia-northeast1, asia-south1, asia-southeast1, australia-southeast1, europe-north1, europe-west1, europe-west2, europe-west3, europe-west4, northamerica-northeast1, southamerica-east1, us-central1, us-east1, us-east4, us-west1, us-west2",
              args: {
                name: "REMOVE_REGION",
                description: "String",
              },
            },
            optTraceToken,
            optUpdateLabels,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DOMAIN",
            description:
              "ID of the domain or fully qualified identifier for the domain",
          },
        },
        {
          name: "update-ldaps-settings",
          description: "Update the LDAPS settings for a domain",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            {
              name: "--certificate-password",
              description:
                "Password used to encrypt the PKCS#12 certificate. If not specified, command will prompt user for secret",
              args: {
                name: "CERTIFICATE_PASSWORD",
                description: "String",
              },
            },
            {
              name: "--certificate-pfx-file",
              description:
                "PKCS#12-formatted pfx file that specifies the certificate chain used to configure LDAPS. If certificate-password is not specified, command will prompt user for secret. Use a full or relative path to a local file containing the value of certificate_pfx_file",
              priority: 100,
              args: {
                name: "CERTIFICATE_PFX_FILE",
                template: "filepaths",
              },
            },
            {
              name: "--clear-certificates",
              description:
                "Disable LDAPS by deleting all existing certificates. Certificates will need to be re-uploaded if LDAPS is to be re-enabled",
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
              name: "--no-clear-certificates",
              description:
                "Disable LDAPS by deleting all existing certificates. Certificates will need to be re-uploaded if LDAPS is to be re-enabled",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DOMAIN",
            description:
              "ID of the domain or fully qualified identifier for the domain",
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
      description: "Manage Managed Microsoft AD operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a Managed Microsoft AD operation",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "NAME",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "describe",
          description: "Describe a Managed Microsoft AD operation",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
          description: "List Managed Microsoft AD operations",
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
      name: "peerings",
      description: "Managed Microsoft AD peerings",
      subcommands: [
        {
          name: "create",
          description:
            "Create a Managed Microsoft Active Directory domain peering",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            {
              name: "--authorized-network",
              description:
                "Name of the Network that is authorized to communicate with Managed Microsoft AD domain. This is usually the full path name of the network in the peer project",
              priority: 100,
              args: {
                name: "AUTHORIZED_NETWORK",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--domain",
              description:
                "Name of the managed Managed Microsoft AD domain you want to peer to",
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
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PEERING",
            description:
              "ID of the peering or fully qualified identifier for the peering",
          },
        },
        {
          name: "delete",
          description:
            "Delete a Managed Microsoft Active Directory domain peering",
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
            name: "PEERING",
            description:
              "ID of the peering or fully qualified identifier for the peering",
          },
        },
        {
          name: "describe",
          description:
            "Describe a Managed Microsoft Active Directory domain peering",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "PEERING",
            description:
              "ID of the peering or fully qualified identifier for the peering",
          },
        },
        {
          name: "list",
          description:
            "List all Managed Microsoft Active Directory domain peerings",
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
          name: "update",
          description:
            "Update a Managed Microsoft Active Directory domain peering",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optClearLabels,
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
            name: "PEERING",
            description:
              "ID of the peering or fully qualified identifier for the peering",
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
