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
  description:
    "Specifies the desired service location the request is sent to. Defaults to Cloud DNS global service. Use --location=global if you want to target the global service",
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

const optResponsePolicy: Fig.Option = {
  name: "--response-policy",
  description: "The Cloud DNS response policy name response_policy_rule",
  args: {
    name: "RESPONSE_POLICY",
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

const optTransactionFile: Fig.Option = {
  name: "--transaction-file",
  description: "Path of the file which contains the transaction",
  args: {
    name: "TRANSACTION_FILE",
    description: "String",
    template: "filepaths",
  },
};

const optType: Fig.Option = {
  name: "--type",
  description: "DNS record type of the record-set (e.g. A, AAAA, MX etc.)",
  priority: 100,
  args: {
    name: "TYPE",
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

const optZone: Fig.Option = {
  name: ["--zone", "-z"],
  description: "Name of the managed zone whose record sets you want to manage",
  priority: 100,
  args: {
    name: "ZONE",
    description: "String",
  },
};

const completionSpec: Fig.Spec = {
  name: "dns",
  description: "Manage your Cloud DNS managed-zones and record-sets",
  subcommands: [
    {
      name: "dns-keys",
      description: "Manage Cloud DNS DNSKEY records",
      subcommands: [
        {
          name: "describe",
          description: "Show details about a DNS key resource",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            {
              name: "--zone",
              description:
                "The name of the managed-zone the DNSKEY record belongs to",
              args: {
                name: "ZONE",
                description: "String",
              },
            },
          ],
          args: {
            name: "KEY-ID",
            description: "The DNS key identifier",
          },
        },
        {
          name: "list",
          description: "List DNS key resources",
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
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--zone",
              description:
                "The name of the managed-zone you want to list DNSKEY records for",
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
      name: "managed-zones",
      description: "Manage your Cloud DNS managed-zones",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud DNS managed-zone",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--denial-of-existence",
              description:
                "Requires DNSSEC enabled. _DENIAL_OF_EXISTENCE_ must be one of: *nsec*, *nsec3*",
              args: {
                name: "DENIAL_OF_EXISTENCE",
                suggestions: ["nsec", "nsec3"],
              },
            },
            {
              name: "--description",
              description: "Short description for the managed zone",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--dns-name",
              description:
                "The DNS name suffix that will be managed with the created zone",
              priority: 100,
              args: {
                name: "DNS_NAME",
                description: "String",
              },
            },
            {
              name: "--dnssec-state",
              description:
                "The DNSSEC state for this managed zone. _DNSSEC_STATE_ must be one of:",
              args: {
                name: "DNSSEC_STATE",
                suggestions: ["off", "on", "transfer"],
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--forwarding-targets",
              description:
                "List of IPv4/IPv6 addresses or one domain name of the target name server that the zone will forward queries to. Ignored for `public` visibility. Non-RFC1918 addresses will forward to the target through the Internet. RFC1918 addresses will forward through the VPC",
              args: {
                name: "IP_ADDRESSES",
                description: "List",
              },
            },
            {
              name: "--gkeclusters",
              description:
                "List of GKE clusters that the zone should be visible in if the zone visibility is [private]",
              args: {
                name: "GKECLUSTERS",
                description: "List",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--ksk-algorithm",
              description:
                "String mnemonic specifying the DNSSEC algorithm of the key-signing key. Requires DNSSEC enabled. _KSK_ALGORITHM_ must be one of: *ecdsap256sha256*, *ecdsap384sha384*, *rsasha1*, *rsasha256*, *rsasha512*",
              args: {
                name: "KSK_ALGORITHM",
                suggestions: [
                  "ecdsap256sha256",
                  "ecdsap384sha384",
                  "rsasha1",
                  "rsasha256",
                  "rsasha512",
                ],
              },
            },
            {
              name: "--ksk-key-length",
              description:
                "Length of the key-signing key in bits. Requires DNSSEC enabled",
              args: {
                name: "KSK_KEY_LENGTH",
                description: "Int",
              },
            },
            {
              name: "--labels",
              description: "List of label KEY=VALUE pairs to add",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optLocation,
            {
              name: "--log-dns-queries",
              description:
                "Specifies whether to enable query logging. Defaults to False. Use *--log-dns-queries* to enable and *--no-log-dns-queries* to disable",
            },
            optLogHttp,
            {
              name: "--managed-reverse-lookup",
              description:
                "Specifies whether this zone is a managed reverse lookup zone, required for Cloud DNS to correctly resolve Non-RFC1918 PTR records",
            },
            {
              name: "--networks",
              description:
                "List of networks that the zone should be visible in if the zone visibility is [private]",
              args: {
                name: "NETWORK",
                description: "List",
              },
            },
            {
              name: "--no-log-dns-queries",
              description:
                "Specifies whether to enable query logging. Defaults to False",
            },
            {
              name: "--no-managed-reverse-lookup",
              description:
                "Specifies whether this zone is a managed reverse lookup zone, required for Cloud DNS to correctly resolve Non-RFC1918 PTR records",
              hidden: true,
            },
            {
              name: "--private-forwarding-targets",
              description:
                "List of IPv4/IPv6 addresses or one domain name of the target name server that the zone will forward queries to. Ignored for `public` visibility. All addresses specified for this parameter will be reached through the VPC",
              args: {
                name: "IP_ADDRESSES",
                description: "List",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--service-directory-namespace",
              description:
                "The fully qualified URL of the service directory namespace that should be associated with the zone. Ignored for `public` visibility zones",
              args: {
                name: "SERVICE_DIRECTORY_NAMESPACE",
                description: "String",
              },
            },
            {
              name: "--target-network",
              description:
                "Network ID of the Google Compute Engine private network to forward queries to",
              priority: 100,
              args: {
                name: "TARGET_NETWORK",
                description: "String",
              },
            },
            {
              name: "--target-project",
              description:
                "Project ID of the Google Compute Engine private network to forward queries to",
              priority: 100,
              args: {
                name: "TARGET_PROJECT",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--visibility",
              description:
                "Visibility of the zone. Public zones are visible to the public internet. Private zones are only visible in your internal networks denoted by the `--networks` flag. _VISIBILITY_ must be one of: *public*, *private*",
              args: {
                name: "VISIBILITY",
                description: "String",
                suggestions: ["public", "private"],
              },
            },
            {
              name: "--zsk-algorithm",
              description:
                "String mnemonic specifying the DNSSEC algorithm of the key-signing key. Requires DNSSEC enabled. _ZSK_ALGORITHM_ must be one of: *ecdsap256sha256*, *ecdsap384sha384*, *rsasha1*, *rsasha256*, *rsasha512*",
              args: {
                name: "ZSK_ALGORITHM",
                suggestions: [
                  "ecdsap256sha256",
                  "ecdsap384sha384",
                  "rsasha1",
                  "rsasha256",
                  "rsasha512",
                ],
              },
            },
            {
              name: "--zsk-key-length",
              description:
                "Length of the zone-signing key in bits. Requires DNSSEC enabled",
              args: {
                name: "ZSK_KEY_LENGTH",
                description: "Int",
              },
            },
          ],
          args: {
            name: "ZONE_NAME",
            description: "The name of the managed-zone to be created",
          },
        },
        {
          name: "delete",
          description: "Delete an empty Cloud DNS managed-zone",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "ZONE_NAME",
            description: "The name of the empty managed-zone to be deleted",
          },
        },
        {
          name: "describe",
          description: "View the details of a Cloud DNS managed-zone",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "ZONE",
            description:
              "ID of the zone or fully qualified identifier for the zone",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud DNS managed-zone",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "ZONE",
            description:
              "ID of the zone or fully qualified identifier for the zone",
          },
        },
        {
          name: "list",
          description: "View the list of all your managed-zones",
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
          name: "set-iam-policy",
          description: "Set the IAM policy for a Cloud DNS managed-zone",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              name: "--policy-file",
              description: "JSON or YAML file with the IAM policy",
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
            name: "ZONE",
            description:
              "ID of the zone or fully qualified identifier for the zone",
          },
        },
        {
          name: "update",
          description: "Update an existing Cloud DNS managed-zone",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--async",
              description:
                "Return immediately, without waiting for the operation in progress to complete",
            },
            optBillingProject,
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
            },
            optConfiguration,
            {
              name: "--denial-of-existence",
              description:
                "Requires DNSSEC enabled. _DENIAL_OF_EXISTENCE_ must be one of: *nsec*, *nsec3*",
              args: {
                name: "DENIAL_OF_EXISTENCE",
                suggestions: ["nsec", "nsec3"],
              },
            },
            {
              name: "--description",
              description: "Short description for the managed zone",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--dnssec-state",
              description:
                "The DNSSEC state for this managed zone. _DNSSEC_STATE_ must be one of:",
              args: {
                name: "DNSSEC_STATE",
                suggestions: ["off", "on", "transfer"],
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--forwarding-targets",
              description:
                "List of IPv4/IPv6 addresses or one domain name of the target name server that the zone will forward queries to. Ignored for `public` visibility. Non-RFC1918 addresses will forward to the target through the Internet. RFC1918 addresses will forward through the VPC",
              args: {
                name: "IP_ADDRESSES",
                description: "List",
              },
            },
            {
              name: "--gkeclusters",
              description:
                "List of GKE clusters that the zone should be visible in if the zone visibility is [private]",
              args: {
                name: "GKECLUSTERS",
                description: "List",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--ksk-algorithm",
              description:
                "String mnemonic specifying the DNSSEC algorithm of the key-signing key. Requires DNSSEC enabled. _KSK_ALGORITHM_ must be one of: *ecdsap256sha256*, *ecdsap384sha384*, *rsasha1*, *rsasha256*, *rsasha512*",
              args: {
                name: "KSK_ALGORITHM",
                suggestions: [
                  "ecdsap256sha256",
                  "ecdsap384sha384",
                  "rsasha1",
                  "rsasha256",
                  "rsasha512",
                ],
              },
            },
            {
              name: "--ksk-key-length",
              description:
                "Length of the key-signing key in bits. Requires DNSSEC enabled",
              args: {
                name: "KSK_KEY_LENGTH",
                description: "Int",
              },
            },
            optLocation,
            {
              name: "--log-dns-queries",
              description:
                "Specifies whether to enable query logging. Defaults to False. Use *--log-dns-queries* to enable and *--no-log-dns-queries* to disable",
            },
            optLogHttp,
            {
              name: "--managed-reverse-lookup",
              description:
                "Specifies whether this zone is a managed reverse lookup zone, required for Cloud DNS to correctly resolve Non-RFC1918 PTR records",
            },
            {
              name: "--networks",
              description:
                "List of networks that the zone should be visible in if the zone visibility is [private]",
              args: {
                name: "NETWORK",
                description: "List",
              },
            },
            {
              name: "--no-async",
              description:
                "Return immediately, without waiting for the operation in progress to complete",
              hidden: true,
            },
            {
              name: "--no-clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
              hidden: true,
            },
            {
              name: "--no-log-dns-queries",
              description:
                "Specifies whether to enable query logging. Defaults to False",
            },
            {
              name: "--no-managed-reverse-lookup",
              description:
                "Specifies whether this zone is a managed reverse lookup zone, required for Cloud DNS to correctly resolve Non-RFC1918 PTR records",
              hidden: true,
            },
            {
              name: "--private-forwarding-targets",
              description:
                "List of IPv4/IPv6 addresses or one domain name of the target name server that the zone will forward queries to. Ignored for `public` visibility. All addresses specified for this parameter will be reached through the VPC",
              args: {
                name: "IP_ADDRESSES",
                description: "List",
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
              name: "--target-network",
              description:
                "Network ID of the Google Compute Engine private network to forward queries to",
              priority: 100,
              args: {
                name: "TARGET_NETWORK",
                description: "String",
              },
            },
            {
              name: "--target-project",
              description:
                "Project ID of the Google Compute Engine private network to forward queries to",
              priority: 100,
              args: {
                name: "TARGET_PROJECT",
                description: "String",
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
            {
              name: "--zsk-algorithm",
              description:
                "String mnemonic specifying the DNSSEC algorithm of the key-signing key. Requires DNSSEC enabled. _ZSK_ALGORITHM_ must be one of: *ecdsap256sha256*, *ecdsap384sha384*, *rsasha1*, *rsasha256*, *rsasha512*",
              args: {
                name: "ZSK_ALGORITHM",
                suggestions: [
                  "ecdsap256sha256",
                  "ecdsap384sha384",
                  "rsasha1",
                  "rsasha256",
                  "rsasha512",
                ],
              },
            },
            {
              name: "--zsk-key-length",
              description:
                "Length of the zone-signing key in bits. Requires DNSSEC enabled",
              args: {
                name: "ZSK_KEY_LENGTH",
                description: "Int",
              },
            },
          ],
          args: {
            name: "ZONE",
            description:
              "ID of the zone or fully qualified identifier for the zone",
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
      description: "Manage your Cloud DNS operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe an operation",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            {
              name: ["--zone", "-z"],
              description: "Name of zone to get operations from",
              priority: 100,
              args: {
                name: "ZONE",
                description: "String",
              },
            },
          ],
          args: {
            name: "OPERATION_ID",
            description: "The id of the operation to display",
          },
        },
        {
          name: "list",
          description: "List Cloud DNS operations",
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
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--zones",
              description:
                "IDs of the zones or fully qualified identifiers for the zones",
              priority: 100,
              args: {
                name: "ZONES",
                description: "List",
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
      name: "policies",
      description: "Manage your Cloud DNS policies",
      subcommands: [
        {
          name: "create",
          description: "Creates a new Cloud DNS policy",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--alternative-name-servers",
              description:
                "List of alternative name servers to forward to. Non-RFC1918 addresses will forward to the target through the Internet.RFC1918 addresses will forward through the VPC",
              args: {
                name: "NAME_SERVERS",
                description: "List",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "A description of the policy",
              priority: 100,
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--enable-dns64-all-queries",
              description:
                "Specifies whether to allow networks bound to this policy to use DNS64 for IPv6-only VM instances",
            },
            {
              name: "--enable-inbound-forwarding",
              description:
                "Specifies whether to allow networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. Defaults to False",
            },
            {
              name: "--enable-logging",
              description:
                "Specifies whether to enable query logging. Defaults to False",
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
              name: "--networks",
              description:
                "The comma separated list of network names to associate with the policy",
              priority: 100,
              args: {
                name: "NETWORKS",
                description: "List",
              },
            },
            {
              name: "--no-enable-dns64-all-queries",
              description:
                "Specifies whether to allow networks bound to this policy to use DNS64 for IPv6-only VM instances",
              hidden: true,
            },
            {
              name: "--no-enable-inbound-forwarding",
              description:
                "Specifies whether to allow networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. Defaults to False",
              hidden: true,
            },
            {
              name: "--no-enable-logging",
              description:
                "Specifies whether to enable query logging. Defaults to False",
              hidden: true,
            },
            {
              name: "--private-alternative-name-servers",
              description:
                "List of alternative name servers to forward to. All addresses specified for this parameter will be reached through the VPC",
              args: {
                name: "NAME_SERVERS",
                description: "List",
              },
            },
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
          },
        },
        {
          name: "delete",
          description: "Deletes a Cloud DNS policy",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
          },
        },
        {
          name: "describe",
          description: "Describes a Cloud DNS policy",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
          },
        },
        {
          name: "list",
          description: "View the list of all your Cloud DNS policies",
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
          name: "update",
          description: "Update an existing Cloud DNS policy",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--alternative-name-servers",
              description:
                "List of alternative name servers to forward to. Non-RFC1918 addresses will forward to the target through the Internet.RFC1918 addresses will forward through the VPC",
              args: {
                name: "NAME_SERVERS",
                description: "List",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "A description of the policy",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--enable-dns64-all-queries",
              description:
                "Specifies whether to allow networks bound to this policy to use DNS64 for IPv6-only VM instances. Use *--enable-dns64-all-queries* to enable and *--no-enable-dns64-all-queries* to disable",
            },
            {
              name: "--enable-inbound-forwarding",
              description:
                "Specifies whether to allow networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. Defaults to False",
            },
            {
              name: "--enable-logging",
              description:
                "Specifies whether to enable query logging. Defaults to False",
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
              name: "--networks",
              description:
                "The comma separated list of network names to associate with the policy",
              args: {
                name: "NETWORKS",
                description: "List",
              },
            },
            {
              name: "--no-enable-dns64-all-queries",
              description:
                "Specifies whether to allow networks bound to this policy to use DNS64 for IPv6-only VM instances",
            },
            {
              name: "--no-enable-inbound-forwarding",
              description:
                "Specifies whether to allow networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. Defaults to False",
              hidden: true,
            },
            {
              name: "--no-enable-logging",
              description:
                "Specifies whether to enable query logging. Defaults to False",
              hidden: true,
            },
            {
              name: "--private-alternative-name-servers",
              description:
                "List of alternative name servers to forward to. All addresses specified for this parameter will be reached through the VPC",
              args: {
                name: "NAME_SERVERS",
                description: "List",
              },
            },
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
      name: "project-info",
      description: "View Cloud DNS related information for a project",
      subcommands: [
        {
          name: "describe",
          description: "View Cloud DNS related information for a project",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "PROJECT_ID",
            description:
              "The identifier for the project you want DNS related info for",
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
      name: "record-sets",
      description: "Manage the record-sets within your managed-zones",
      subcommands: [
        {
          name: "changes",
          description:
            "View details about changes to your Cloud DNS record-sets",
          subcommands: [
            {
              name: "describe",
              description: "View the details of a change",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                optZone,
              ],
              args: {
                name: "CHANGE_ID",
                description: "The ID of the change you want details for",
              },
            },
            {
              name: "list",
              description:
                "View the list of changes that have been made to your record-sets",
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
                {
                  name: "--sort-order",
                  description:
                    "Sort order for listing. _SORT_ORDER_ must be one of: *ascending*, *descending*",
                  args: {
                    name: "SORT_ORDER",
                    description: "String",
                    suggestions: ["ascending", "descending"],
                  },
                },
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
          name: "create",
          description: "Creates a record-set in a managed-zone",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--backup-data-trickle-ratio",
              description:
                "Specifies the percentage of traffic to send to the backup targets even when the primary targets are healthy",
              args: {
                name: "BACKUP_DATA_TRICKLE_RATIO",
                description: "Float",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--enable-geo-fencing",
              description:
                "Specifies whether to enable fencing for geo queries",
            },
            {
              name: "--enable-health-checking",
              description:
                "Required if specifying forwarding rule names for rrdata",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--health-check",
              description:
                "Specifies the health check to be used for public IP health checking. Either the health check name or full resource path should be provided",
              args: {
                name: "HEALTH_CHECK",
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
              name: "--no-enable-geo-fencing",
              description:
                "Specifies whether to enable fencing for geo queries",
              hidden: true,
            },
            {
              name: "--no-enable-health-checking",
              description:
                "Required if specifying forwarding rule names for rrdata",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--routing-policy-backup-data",
              description:
                "(DEPRECATED) Specify the backup configuration for a primary backup routing policy. This backup configuration uses the same format as the routing-policy-data argument because it functions as another geolocation routing policy",
              deprecated: true,
              args: {
                name: "ROUTING_POLICY_BACKUP_DATA",
              },
            },
            {
              name: "--routing-policy-backup-data-type",
              description:
                "For FAILOVER routing policies, the type of routing policy the backup data uses. Currently, this must be GEO. _ROUTING_POLICY_BACKUP_DATA_TYPE_ must be (only one value is supported): *GEO*",
              priority: 100,
              args: {
                name: "ROUTING_POLICY_BACKUP_DATA_TYPE",
                description: "String",
                suggestions: ["GEO"],
              },
            },
            {
              name: "--routing-policy-backup-item",
              description:
                "Specify this argument multiple times to define multiple items for a primary backup routing policy",
              isRepeatable: true,
              args: {
                name: "ROUTING_POLICY_BACKUP_ITEM",
                description: "Dict",
              },
            },
            {
              name: "--routing-policy-data",
              description:
                "(DEPRECATED) The routing policy data supports one of two formats below, depending on the choice of routing-policy-type",
              deprecated: true,
              args: {
                name: "ROUTING_POLICY_DATA",
              },
            },
            {
              name: "--routing-policy-item",
              description:
                "Specify this argument multiple times for a weighted round robin (WRR) or geolocation routing policy. Use this repeated argument for only one routing policy type (WRR or geolocation), not both. Similarly, use it only for health checking either internal load balancers or external IP addresses, not both",
              isRepeatable: true,
              args: {
                name: "ROUTING_POLICY_ITEM",
                description: "Dict",
              },
            },
            {
              name: "--routing-policy-primary-data",
              description:
                'The primary configuration for a primary backup routing policy. This configuration is a list of forwarding rules of the format "FORWARDING_RULE_NAME", "FORWARDING_RULE_NAME@scope", or the full resource path of the forwarding rule',
              priority: 100,
              args: {
                name: "ROUTING_POLICY_PRIMARY_DATA",
              },
            },
            {
              name: "--routing-policy-type",
              description:
                'Indicates what type of routing policy is being specified. As of this time, this field can take on either "WRR" for weighted round robin, "GEO" for geo location, or "FAILOVER" for a primary-backup configuration. This field cannot be modified - once a policy has a chosen type, the only way to change it is to delete the policy and add a new one with the different type. _ROUTING_POLICY_TYPE_ must be one of: *GEO*, *WRR*, *FAILOVER*',
              priority: 100,
              args: {
                name: "ROUTING_POLICY_TYPE",
                description: "String",
                suggestions: ["GEO", "WRR", "FAILOVER"],
              },
            },
            {
              name: "--rrdatas",
              description:
                "DNS data (Address/CNAME/MX info, etc.) of the record-set. This is RDATA; the format of this information varies depending on the type and class of the resource record",
              args: {
                name: "RRDATA",
                description: "List",
              },
            },
            optTraceToken,
            {
              name: "--ttl",
              description: "TTL (time to live) for the record-set",
              args: {
                name: "TTL",
                description: "Int",
              },
            },
            optType,
            optUserOutputEnabled,
            optVerbosity,
            optZone,
          ],
          args: {
            name: "DNS_NAME",
            description: "DNS or domain name of the record-set",
          },
        },
        {
          name: "delete",
          description: "Delete a record-set in a managed-zone",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            optType,
            optUserOutputEnabled,
            optVerbosity,
            optZone,
          ],
          args: {
            name: "DNS_NAME",
            description: "DNS or domain name of the record-set",
          },
        },
        {
          name: "describe",
          description: "Describe a record-set in a managed-zone",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            optType,
            optUserOutputEnabled,
            optVerbosity,
            optZone,
          ],
          args: {
            name: "DNS_NAME",
            description: "DNS or domain name of the record-set",
          },
        },
        {
          name: "export",
          description: "Export your record-sets into a file",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            {
              name: "--no-zone-file-format",
              description:
                "Indicates that records-file should be in the zone file format. When using this flag, expect the record-set to be exported to a BIND zone formatted file. If you omit this flag, the record-set is exported into a YAML formatted records file. Note, this format flag determines the format of the output recorded in the records-file; it is different from the global `--format` flag which affects console output alone",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optZone,
            {
              name: "--zone-file-format",
              description:
                "Indicates that records-file should be in the zone file format. When using this flag, expect the record-set to be exported to a BIND zone formatted file. If you omit this flag, the record-set is exported into a YAML formatted records file. Note, this format flag determines the format of the output recorded in the records-file; it is different from the global `--format` flag which affects console output alone",
            },
          ],
          args: {
            name: "RECORDS_FILE",
            description: "File to which record-sets should be exported",
            template: "filepaths",
          },
        },
        {
          name: "import",
          description: "Import record-sets into your managed-zone",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--delete-all-existing",
              description:
                "Indicates that all existing record-sets should be deleted before importing the record-sets in the records-file",
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
              name: "--no-delete-all-existing",
              description:
                "Indicates that all existing record-sets should be deleted before importing the record-sets in the records-file",
              hidden: true,
            },
            {
              name: "--no-replace-origin-ns",
              description:
                "Indicates that NS records for the origin of a zone should be imported if defined",
              hidden: true,
            },
            {
              name: "--no-skip-soa-update",
              description:
                "Skip incrementing the serial number of the SOA record when making changes to the record-sets",
              hidden: true,
            },
            {
              name: "--no-zone-file-format",
              description:
                "Indicates that the input records-file is in BIND zone format. If omitted, indicates that the records-file is in YAML format",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--replace-origin-ns",
              description:
                "Indicates that NS records for the origin of a zone should be imported if defined",
            },
            {
              name: "--skip-soa-update",
              description:
                "Skip incrementing the serial number of the SOA record when making changes to the record-sets",
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            optZone,
            {
              name: "--zone-file-format",
              description:
                "Indicates that the input records-file is in BIND zone format. If omitted, indicates that the records-file is in YAML format",
            },
          ],
          args: {
            name: "RECORDS_FILE",
            description:
              "File from which record-sets should be imported. For examples of YAML-formatted and BIND zone-formatted records files, refer to https://cloud.google.com/dns/records#importing_and_exporting_record_sets",
            template: "filepaths",
          },
        },
        {
          name: "list",
          description: "View the list of record-sets in a managed-zone",
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
              name: "--name",
              description: "Only list record-sets with this exact domain name",
              priority: 100,
              args: {
                name: "NAME",
                description: "String",
              },
            },
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            {
              name: "--type",
              description:
                "Only list records of this type. If present, the --name parameter must also be present",
              args: {
                name: "TYPE",
                description: "String",
              },
            },
            optUri,
            optUserOutputEnabled,
            optVerbosity,
            optZone,
          ],
        },
        {
          name: "transaction",
          description:
            "Make scriptable and transactional changes to your record-sets",
          subcommands: [
            {
              name: "abort",
              description: "Abort transaction",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                optTransactionFile,
                optUserOutputEnabled,
                optVerbosity,
                optZone,
              ],
            },
            {
              name: "add",
              description: "Append a record-set addition to the transaction",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                  name: "--name",
                  description: "DNS or domain name of the record-set to add",
                  priority: 100,
                  args: {
                    name: "NAME",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                optTraceToken,
                optTransactionFile,
                {
                  name: "--ttl",
                  description: "TTL (time to live) for the record-set to add",
                  priority: 100,
                  args: {
                    name: "TTL",
                    description: "Int",
                  },
                },
                {
                  name: "--type",
                  description: "DNS record type of the record-set to add",
                  priority: 100,
                  args: {
                    name: "TYPE",
                    description: "String",
                  },
                },
                optUserOutputEnabled,
                optVerbosity,
                optZone,
              ],
              args: {
                name: "RRDATAS",
                description:
                  "DNS data (Address/CNAME/MX info, etc.) of the record-set to add. This is RDATA; the format of this information varies depending on the type and class of the resource record",
                isVariadic: true,
              },
            },
            {
              name: "describe",
              description: "Describe the transaction",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                optTransactionFile,
                optUserOutputEnabled,
                optVerbosity,
                optZone,
              ],
            },
            {
              name: "execute",
              description: "Execute the transaction on Cloud DNS",
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
                optTransactionFile,
                optUri,
                optUserOutputEnabled,
                optVerbosity,
                optZone,
              ],
            },
            {
              name: "remove",
              description: "Append a record-set deletion to the transaction",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                  name: "--name",
                  description: "DNS name of the record-set to be removed",
                  priority: 100,
                  args: {
                    name: "NAME",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                optTraceToken,
                optTransactionFile,
                {
                  name: "--ttl",
                  description: "TTL for the record-set to be removed",
                  priority: 100,
                  args: {
                    name: "TTL",
                    description: "Int",
                  },
                },
                {
                  name: "--type",
                  description: "Type of the record-set to be removed",
                  priority: 100,
                  args: {
                    name: "TYPE",
                    description: "String",
                  },
                },
                optUserOutputEnabled,
                optVerbosity,
                optZone,
              ],
              args: {
                name: "RRDATAS",
                description: "DNS name of the record-set to be removed",
                isVariadic: true,
              },
            },
            {
              name: "start",
              description: "Start a transaction",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                  name: "--no-skip-soa-update",
                  description:
                    "Skip incrementing the serial number of the SOA record when making changes to the record-sets",
                  hidden: true,
                },
                optProject,
                optQuiet,
                {
                  name: "--skip-soa-update",
                  description:
                    "Skip incrementing the serial number of the SOA record when making changes to the record-sets",
                },
                optTraceToken,
                optTransactionFile,
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
            optTransactionFile,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Updates a record-set in a managed-zone",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--backup-data-trickle-ratio",
              description:
                "Specifies the percentage of traffic to send to the backup targets even when the primary targets are healthy",
              args: {
                name: "BACKUP_DATA_TRICKLE_RATIO",
                description: "Float",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--enable-geo-fencing",
              description:
                "Specifies whether to enable fencing for geo queries",
            },
            {
              name: "--enable-health-checking",
              description:
                "Required if specifying forwarding rule names for rrdata",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--health-check",
              description:
                "Specifies the health check to be used for public IP health checking. Either the health check name or full resource path should be provided",
              args: {
                name: "HEALTH_CHECK",
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
              name: "--no-enable-geo-fencing",
              description:
                "Specifies whether to enable fencing for geo queries",
              hidden: true,
            },
            {
              name: "--no-enable-health-checking",
              description:
                "Required if specifying forwarding rule names for rrdata",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--routing-policy-backup-data",
              description:
                "(DEPRECATED) Specify the backup configuration for a primary backup routing policy. This backup configuration uses the same format as the routing-policy-data argument because it functions as another geolocation routing policy",
              deprecated: true,
              args: {
                name: "ROUTING_POLICY_BACKUP_DATA",
              },
            },
            {
              name: "--routing-policy-backup-data-type",
              description:
                "For FAILOVER routing policies, the type of routing policy the backup data uses. Currently, this must be GEO. _ROUTING_POLICY_BACKUP_DATA_TYPE_ must be (only one value is supported): *GEO*",
              priority: 100,
              args: {
                name: "ROUTING_POLICY_BACKUP_DATA_TYPE",
                description: "String",
                suggestions: ["GEO"],
              },
            },
            {
              name: "--routing-policy-backup-item",
              description:
                "Specify this argument multiple times to define multiple items for a primary backup routing policy",
              isRepeatable: true,
              args: {
                name: "ROUTING_POLICY_BACKUP_ITEM",
                description: "Dict",
              },
            },
            {
              name: "--routing-policy-data",
              description:
                "(DEPRECATED) The routing policy data supports one of two formats below, depending on the choice of routing-policy-type",
              deprecated: true,
              args: {
                name: "ROUTING_POLICY_DATA",
              },
            },
            {
              name: "--routing-policy-item",
              description:
                "Specify this argument multiple times for a weighted round robin (WRR) or geolocation routing policy. Use this repeated argument for only one routing policy type (WRR or geolocation), not both. Similarly, use it only for health checking either internal load balancers or external IP addresses, not both",
              isRepeatable: true,
              args: {
                name: "ROUTING_POLICY_ITEM",
                description: "Dict",
              },
            },
            {
              name: "--routing-policy-primary-data",
              description:
                'The primary configuration for a primary backup routing policy. This configuration is a list of forwarding rules of the format "FORWARDING_RULE_NAME", "FORWARDING_RULE_NAME@scope", or the full resource path of the forwarding rule',
              priority: 100,
              args: {
                name: "ROUTING_POLICY_PRIMARY_DATA",
              },
            },
            {
              name: "--routing-policy-type",
              description:
                'Indicates what type of routing policy is being specified. As of this time, this field can take on either "WRR" for weighted round robin, "GEO" for geo location, or "FAILOVER" for a primary-backup configuration. This field cannot be modified - once a policy has a chosen type, the only way to change it is to delete the policy and add a new one with the different type. _ROUTING_POLICY_TYPE_ must be one of: *GEO*, *WRR*, *FAILOVER*',
              priority: 100,
              args: {
                name: "ROUTING_POLICY_TYPE",
                description: "String",
                suggestions: ["GEO", "WRR", "FAILOVER"],
              },
            },
            {
              name: "--rrdatas",
              description:
                "DNS data (Address/CNAME/MX info, etc.) of the record-set. This is RDATA; the format of this information varies depending on the type and class of the resource record",
              args: {
                name: "RRDATA",
                description: "List",
              },
            },
            optTraceToken,
            {
              name: "--ttl",
              description: "TTL (time to live) for the record-set",
              args: {
                name: "TTL",
                description: "Int",
              },
            },
            optType,
            optUserOutputEnabled,
            optVerbosity,
            optZone,
          ],
          args: {
            name: "DNS_NAME",
            description: "DNS or domain name of the record-set",
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
      name: "response-policies",
      description: "Manage your Cloud DNS response policy",
      subcommands: [
        {
          name: "create",
          description: "Creates a new Cloud DNS response policy",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "A description of the response policy",
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
              name: "--gkeclusters",
              description:
                "The comma-separated list of GKE cluster names to associate with the response policy",
              args: {
                name: "GKECLUSTERS",
                description: "List",
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
              name: "--networks",
              description:
                "The comma-separated list of network names to associate with the response policy",
              args: {
                name: "NETWORKS",
                description: "List",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RESPONSE_POLICIES",
            description:
              "ID of the response_policy or fully qualified identifier for the response_policy",
          },
        },
        {
          name: "delete",
          description: "Deletes a Cloud DNS response policy",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "RESPONSE_POLICIES",
            description:
              "ID of the response_policy or fully qualified identifier for the response_policy",
          },
        },
        {
          name: "describe",
          description: "Describes a Cloud DNS response policy",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "RESPONSE_POLICIES",
            description:
              "ID of the response_policy or fully qualified identifier for the response_policy",
          },
        },
        {
          name: "list",
          description:
            "Displays the list of all Cloud DNS response policies in a given project",
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
          name: "rules",
          description: "Manage your Cloud DNS response policy rules",
          subcommands: [
            {
              name: "create",
              description: "Creates a new Cloud DNS response policy rule",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--behavior",
                  description:
                    "The response policy rule query behavior. _BEHAVIOR_ must be one of: *behaviorUnspecified*, *bypassResponsePolicy*",
                  args: {
                    name: "BEHAVIOR",
                    description: "String",
                    suggestions: [
                      "behaviorUnspecified",
                      "bypassResponsePolicy",
                    ],
                  },
                },
                optBillingProject,
                optConfiguration,
                {
                  name: "--dns-name",
                  description:
                    "DNS name (wildcard or exact) to apply this rule to",
                  priority: 100,
                  args: {
                    name: "DNS_NAME",
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
                  name: "--local-data",
                  description:
                    "All resource record sets for this selector, one per resource record type. The name must match the dns_name",
                  isRepeatable: true,
                  args: {
                    name: "LOCAL_DATA",
                    description: "Dict",
                  },
                },
                optLocation,
                optLogHttp,
                optProject,
                optQuiet,
                optResponsePolicy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "RESPONSE_POLICY_RULE",
                description:
                  "ID of the response_policy_rule or fully qualified identifier for the response_policy_rule",
              },
            },
            {
              name: "delete",
              description: "Deletes a Cloud DNS response policy rule",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                optResponsePolicy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "RESPONSE_POLICY_RULE",
                description:
                  "ID of the response_policy_rule or fully qualified identifier for the response_policy_rule",
              },
            },
            {
              name: "describe",
              description:
                "Shows details about a Cloud DNS response policy rule",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                optResponsePolicy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "RESPONSE_POLICY_RULE",
                description:
                  "ID of the response_policy_rule or fully qualified identifier for the response_policy_rule",
              },
            },
            {
              name: "list",
              description:
                "Displays the list of all a Cloud DNS response policy rules",
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
              args: {
                name: "RESPONSE_POLICIES",
                description:
                  "ID of the response_policy or fully qualified identifier for the response_policy",
              },
            },
            {
              name: "update",
              description: "Updates a new Cloud DNS response policy rule",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--behavior",
                  description:
                    "The response policy rule query behavior. _BEHAVIOR_ must be one of: *behaviorUnspecified*, *bypassResponsePolicy*",
                  args: {
                    name: "BEHAVIOR",
                    description: "String",
                    suggestions: [
                      "behaviorUnspecified",
                      "bypassResponsePolicy",
                    ],
                  },
                },
                optBillingProject,
                optConfiguration,
                {
                  name: "--dns-name",
                  description:
                    "DNS name (wildcard or exact) to apply this rule to",
                  args: {
                    name: "DNS_NAME",
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
                  name: "--local-data",
                  description:
                    "All resource record sets for this selector, one per resource record type. The name must match the dns_name",
                  isRepeatable: true,
                  args: {
                    name: "LOCAL_DATA",
                    description: "Dict",
                  },
                },
                optLocation,
                optLogHttp,
                optProject,
                optQuiet,
                optResponsePolicy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "RESPONSE_POLICY_RULE",
                description:
                  "ID of the response_policy_rule or fully qualified identifier for the response_policy_rule",
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
          description: "Updates a Cloud DNS response policy",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "A description of the response policy",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gkeclusters",
              description:
                "The comma-separated list of GKE cluster names to associate with the response policy",
              args: {
                name: "GKECLUSTERS",
                description: "List",
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
              name: "--networks",
              description:
                "The comma-separated list of network names to associate with the response policy",
              args: {
                name: "NETWORKS",
                description: "List",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RESPONSE_POLICIES",
            description:
              "ID of the response_policy or fully qualified identifier for the response_policy",
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
