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

const optLocation: Fig.Option = {
  name: "--location",
  description: "Location of the key",
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

const optNetwork: Fig.Option = {
  name: "--network",
  description:
    "The network in the current project that is peered with the service",
  priority: 100,
  args: {
    name: "NETWORK",
    description: "String",
  },
};

const optNoAsync: Fig.Option = {
  name: "--no-async",
  description:
    "Return immediately, without waiting for the operation in progress to complete",
  hidden: true,
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

const optService: Fig.Option = {
  name: "--service",
  description: "The service to connect to",
  args: {
    name: "SERVICE",
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
  name: "services",
  description: "List, enable and disable APIs and services",
  subcommands: [
    {
      name: "api-keys",
      description: "Manage API keys",
      subcommands: [
        {
          name: "create",
          description: "Create an API key",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--allowed-application",
              description:
                "Repeatable. Specify multiple allowed applications. The accepted keys are `sha1_fingerprint` and `package_name`",
              args: {
                name: "sha1_fingerprint=SHA1_FINGERPRINT,package_name=PACKAGE_NAME",
                description: "Dict",
              },
            },
            {
              name: "--allowed-bundle-ids",
              description:
                "IOS app's bundle ids that are allowed to use the key",
              args: {
                name: "ALLOWED_BUNDLE_IDS",
                description: "List",
              },
            },
            {
              name: "--allowed-ips",
              description:
                "A list of the caller IP addresses that are allowed to make API calls with this key",
              args: {
                name: "ALLOWED_IPS",
                description: "List",
              },
            },
            {
              name: "--allowed-referrers",
              description:
                "A list of regular expressions for the referrer URLs that are allowed to make API calls with this key",
              args: {
                name: "ALLOWED_REFERRERS",
                description: "List",
              },
            },
            {
              name: "--annotations",
              description:
                "Annotations are key resource. Specify annotations as a key-value dictionary for small amounts of arbitrary client data",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--api-target",
              description:
                "Repeatable. Specify service and optionally one or multiple specific methods. Both fields are case insensitive. If you need to specify methods, it should be specified with the `--flags-file`. See $ gcloud topic flags-file for details. See the examples section for how to use `--api-target` in `--flags-file`",
              args: {
                name: "service=SERVICE",
                description: "Dict",
              },
            },
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--display-name",
              description: "Display name of the key to create",
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
            {
              name: "--key-id",
              description: "User-specified ID of the key to create",
              args: {
                name: "KEY_ID",
                description: "String",
              },
            },
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--service-account",
              description:
                "The email of the service account the key is bound to. If this field is specified, the key is a service account bound key and auth enabled",
              args: {
                name: "SERVICE_ACCOUNT",
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
          description: "Delete an API key",
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
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key",
          },
        },
        {
          name: "describe",
          description: "Describe an API key's metadata",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key",
          },
        },
        {
          name: "get-key-string",
          description: "Get the key string of an API key",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key",
          },
        },
        {
          name: "list",
          description: "Lists API keys",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--filter",
              description:
                "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed. If the expression evaluates `True`, then that item is listed. For more details and examples of filter expressions, run $ gcloud topic filters. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
              args: {
                name: "EXPRESSION",
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
              name: "--limit",
              description:
                "Maximum number of resources to list. The default is *unlimited*. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
              args: {
                name: "LIMIT",
              },
            },
            optLogHttp,
            {
              name: "--no-show-deleted",
              description: "Show soft-deleted keys by specifying this flag",
              hidden: true,
            },
            {
              name: "--no-uri",
              description:
                "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
              hidden: true,
            },
            {
              name: "--page-size",
              description:
                "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is determined by the service if it supports paging, otherwise it is *unlimited* (no paging). Paging may be applied before or after *--filter* and *--limit* depending on the service",
              args: {
                name: "PAGE_SIZE",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--show-deleted",
              description: "Show soft-deleted keys by specifying this flag",
            },
            {
              name: "--sort-by",
              description:
                "Comma-separated list of resource field key names to sort by. The default order is ascending. Prefix a field with ``~'' for descending order on that field. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
              args: {
                name: "FIELD",
                description: "List",
              },
            },
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
          name: "lookup",
          description: "Look up resource name of a key string",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "KEY_STRING",
            description: "Key string of the key",
          },
        },
        {
          name: "undelete",
          description: "Undelete an API key",
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
              name: "--key-string",
              description: "Key String of the key",
              args: {
                name: "KEY_STRING",
                description: "String",
              },
            },
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
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key",
          },
        },
        {
          name: "update",
          description: "Update an API key's metadata",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--allowed-application",
              description:
                "Repeatable. Specify multiple allowed applications. The accepted keys are `sha1_fingerprint` and `package_name`",
              args: {
                name: "sha1_fingerprint=SHA1_FINGERPRINT,package_name=PACKAGE_NAME",
                description: "Dict",
              },
            },
            {
              name: "--allowed-bundle-ids",
              description:
                "IOS app's bundle ids that are allowed to use the key",
              args: {
                name: "ALLOWED_BUNDLE_IDS",
                description: "List",
              },
            },
            {
              name: "--allowed-ips",
              description:
                "A list of the caller IP addresses that are allowed to make API calls with this key",
              args: {
                name: "ALLOWED_IPS",
                description: "List",
              },
            },
            {
              name: "--allowed-referrers",
              description:
                "A list of regular expressions for the referrer URLs that are allowed to make API calls with this key",
              args: {
                name: "ALLOWED_REFERRERS",
                description: "List",
              },
            },
            {
              name: "--annotations",
              description:
                "Annotations are key resource. Specify annotations as a key-value dictionary for small amounts of arbitrary client data",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--api-target",
              description:
                "Repeatable. Specify service and optionally one or multiple specific methods. Both fields are case insensitive. If you need to specify methods, it should be specified with the `--flags-file`. See $ gcloud topic flags-file for details. See the examples section for how to use `--api-target` in `--flags-file`",
              args: {
                name: "service=SERVICE",
                description: "Dict",
              },
            },
            optAsync,
            optBillingProject,
            {
              name: "--clear-annotations",
              description: "If set, clear all annotations on the key",
            },
            {
              name: "--clear-restrictions",
              description: "If set, clear all restrictions on the key",
            },
            optConfiguration,
            {
              name: "--display-name",
              description: "Display name of the key to update",
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
            optLocation,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-clear-annotations",
              description: "If set, clear all annotations on the key",
              hidden: true,
            },
            {
              name: "--no-clear-restrictions",
              description: "If set, clear all restrictions on the key",
              hidden: true,
            },
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key",
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
      name: "disable",
      description: "Disable a service for consumption for a project",
      options: [
        optAccessTokenFile,
        optAccount,
        optAsync,
        optBillingProject,
        optConfiguration,
        optFlagsFile,
        optFlatten,
        {
          name: "--force",
          description:
            "If specified, the disable call will proceed even if there are enabled services which depend on the service to be disabled or disable the service used in last 30 days or was enabled in recent 3 days. Forcing the call means that the services which depend on the service to be disabled will also be disabled",
        },
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        optNoAsync,
        {
          name: "--no-force",
          description:
            "If specified, the disable call will proceed even if there are enabled services which depend on the service to be disabled or disable the service used in last 30 days or was enabled in recent 3 days. Forcing the call means that the services which depend on the service to be disabled will also be disabled",
          hidden: true,
        },
        optProject,
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "SERVICE",
        description: "The name of the service(s) to disable",
        isVariadic: true,
      },
    },
    {
      name: "enable",
      description: "Enables a service for consumption for a project",
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
        name: "SERVICE",
        description: "The name of the service(s) to enable",
        isVariadic: true,
      },
    },
    {
      name: "list",
      description: "List services for a project",
      options: [
        optAccessTokenFile,
        optAccount,
        {
          name: "--available",
          description:
            "Return the services available to the project to enable. This list will include any services that the project has already enabled",
        },
        optBillingProject,
        optConfiguration,
        {
          name: "--enabled",
          description:
            "(DEFAULT) Return the services which the project has enabled",
        },
        {
          name: "--filter",
          description:
            "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed. If the expression evaluates `True`, then that item is listed. For more details and examples of filter expressions, run $ gcloud topic filters. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
          args: {
            name: "EXPRESSION",
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
          name: "--limit",
          description:
            "Maximum number of resources to list. The default is *unlimited*. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
          args: {
            name: "LIMIT",
          },
        },
        optLogHttp,
        {
          name: "--no-available",
          description:
            "Return the services available to the project to enable. This list will include any services that the project has already enabled",
          hidden: true,
        },
        {
          name: "--no-enabled",
          description:
            "(DEFAULT) Return the services which the project has enabled",
          hidden: true,
        },
        {
          name: "--page-size",
          description:
            "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is *200*. Paging may be applied before or after *--filter* and *--limit* depending on the service",
          args: {
            name: "PAGE_SIZE",
            description: "Int",
          },
        },
        optProject,
        optQuiet,
        {
          name: "--sort-by",
          description:
            "Comma-separated list of resource field key names to sort by. The default order is ascending. Prefix a field with ``~'' for descending order on that field. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
          args: {
            name: "FIELD",
            description: "List",
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "operations",
      description: "Manage Operation for various services",
      subcommands: [
        {
          name: "describe",
          description:
            "Describes an operation resource for a given operation name",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--full",
              description: "(DEPRECATED) This flag is deprecated",
              deprecated: true,
              args: {
                name: "FULL",
                description: "Int",
              },
            },
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
            description: "The name of the operation to describe",
          },
        },
        {
          name: "wait",
          description:
            "Waits for an operation to complete for a given operation name",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            description: "The name of the operation on which to wait",
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
      name: "peered-dns-domains",
      description: "Peered DNS domains for various private service connections",
      subcommands: [
        {
          name: "create",
          description:
            "Create a peered DNS domain for a private service connection",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--dns-suffix",
              description:
                "The DNS domain name suffix of the peered DNS domain",
              priority: 100,
              args: {
                name: "DNS_SUFFIX",
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
              name: "--network",
              description:
                "The network in the consumer project peered with the service",
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
              name: "--service",
              description:
                "The name of the service to create a peered DNS domain for",
              args: {
                name: "SERVICE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "NAME",
            description: "The name of the peered DNS domain to create",
          },
        },
        {
          name: "delete",
          description:
            "Delete a peered DNS domain for a private service connection",
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
            {
              name: "--network",
              description:
                "The network in the consumer project peered with the service",
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
              name: "--service",
              description:
                "The name of the service to delete a peered DNS domain for",
              args: {
                name: "SERVICE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "NAME",
            description: "The name of the peered DNS domain to delete",
          },
        },
        {
          name: "list",
          description:
            "List the peered DNS domains for a private service connection",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              name: "--network",
              description:
                "Network in the consumer project peered with the service",
              priority: 100,
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--service",
              description:
                "Name of the service to list the peered DNS domains for",
              args: {
                name: "SERVICE",
                description: "String",
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
      name: "vpc-peerings",
      description: "VPC Peerings to various services",
      subcommands: [
        {
          name: "connect",
          description:
            "Connect to a service via VPC peering for a project network",
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
            {
              name: "--network",
              description:
                "The network in the current project to be peered with the service",
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
              name: "--ranges",
              description: "The names of IP CIDR ranges for service to use",
              priority: 100,
              args: {
                name: "RANGES",
                description: "String",
              },
            },
            optService,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "delete",
          description:
            "Delete a private service connection to a service for a project network",
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
            {
              name: "--network",
              description:
                "The network in the current project which is peered with the service",
              priority: 100,
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            optNoAsync,
            optProject,
            optQuiet,
            optService,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "disable-vpc-service-controls",
          description:
            "Disable VPC Service Controls for the peering connection",
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
            optNetwork,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--service",
              description: "The service to enable VPC service controls for",
              args: {
                name: "SERVICE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "enable-vpc-service-controls",
          description: "Enable VPC Service Controls for the peering connection",
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
            optNetwork,
            optNoAsync,
            optProject,
            optQuiet,
            {
              name: "--service",
              description: "The service to enable VPC service controls for",
              args: {
                name: "SERVICE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "get-vpc-service-controls",
          description:
            "Get VPC state of Service Controls for the peering connection",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            optNetwork,
            optProject,
            optQuiet,
            {
              name: "--service",
              description: "The service to get VPC service controls for",
              args: {
                name: "SERVICE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "list",
          description:
            "List connections to a service via VPC peering for a project network",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              name: "--network",
              description:
                "The network in the current project to list connections with the service",
              priority: 100,
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--service",
              description: "The service to list connections",
              args: {
                name: "SERVICE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "operations",
          description: "Manage VPC Peering operations",
          subcommands: [
            {
              name: "describe",
              description:
                "Describes an operation resource for a given operation name",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                  description: "The name of operation to describe",
                  priority: 100,
                  args: {
                    name: "OPERATION_NAME",
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
              name: "wait",
              description:
                "Waits for an operation to complete for a given operation name",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
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
                  description: "The name of operation to wait",
                  priority: 100,
                  args: {
                    name: "OPERATION_NAME",
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
            "Update a private service connection to a service for a project network",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--force",
              description:
                "If specified, the update call will proceed even if the update can be destructive",
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            {
              name: "--network",
              description:
                "The network in the current project to be peered with the service",
              priority: 100,
              args: {
                name: "NETWORK",
                description: "String",
              },
            },
            optNoAsync,
            {
              name: "--no-force",
              description:
                "If specified, the update call will proceed even if the update can be destructive",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--ranges",
              description: "The names of IP CIDR ranges for service to use",
              args: {
                name: "RANGES",
                description: "String",
              },
            },
            optService,
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
