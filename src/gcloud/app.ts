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

const optLaunchBrowser: Fig.Option = {
  name: "--launch-browser",
  description:
    "Launch a browser if possible. When disabled, only displays the URL. Enabled by default, use *--no-launch-browser* to disable",
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

const optNoLaunchBrowser: Fig.Option = {
  name: "--no-launch-browser",
  description:
    "Launch a browser if possible. When disabled, only displays the URL",
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
  name: "app",
  description: "Manage your App Engine deployments",
  subcommands: [
    {
      name: "browse",
      description: "Open the current app in a web browser",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLaunchBrowser,
        optLogHttp,
        optNoLaunchBrowser,
        optProject,
        optQuiet,
        {
          name: ["--service", "-s"],
          description:
            "The service that should be opened. If not specified, use the default service. May be used in conjunction with `--version`",
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
      name: "create",
      description:
        "Create an App Engine app within the current Google Cloud Project",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
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
          name: "--region",
          description:
            "The region to create the app within. Use `gcloud app regions list` to list available regions. If not provided, select region interactively",
          args: {
            name: "REGION",
            description: "String",
          },
        },
        {
          name: "--service-account",
          description:
            "The app-level default service account to create the app with. Note that you can specify a distinct service account for each App Engine version with `gcloud app deploy --service-account`. However if you do not specify a version-level service account, this default will be used. If this parameter is not provided for app creation, the app-level default will be set to be the out-of-box App Engine Default Service Account, https://cloud.google.com/appengine/docs/standard/python3/service-account outlines the limitation of that service account",
          args: {
            name: "SERVICE_ACCOUNT",
            description: "String",
          },
        },
        {
          name: "--ssl-policy",
          description:
            "The app-level SSL policy to create the app with. _SSL_POLICY_ must be one of: *TLS_VERSION_1_0*, *TLS_VERSION_1_2*",
          args: {
            name: "SSL_POLICY",
            description: "String",
            suggestions: ["TLS_VERSION_1_0", "TLS_VERSION_1_2"],
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "deploy",
      description:
        "Deploy the local code and/or configuration of your app to App Engine",
      options: [
        optAccessTokenFile,
        optAccount,
        {
          name: "--appyaml",
          description:
            "Deploy with a specific app.yaml that will replace the one defined in the DEPLOYABLE",
          args: {
            name: "APPYAML",
            description: "String",
          },
        },
        optBillingProject,
        {
          name: "--bucket",
          description:
            "The Google Cloud Storage bucket used to stage files associated with the deployment. If this argument is not specified, the application's default code bucket is used",
          args: {
            name: "BUCKET",
          },
        },
        {
          name: "--cache",
          description:
            "Enable caching mechanisms involved in the deployment process, particularly in the build step. Enabled by default, use *--no-cache* to disable",
        },
        optConfiguration,
        {
          name: "--docker-build",
          hidden: true,
          args: {
            name: "DOCKER_BUILD",
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
          name: "--ignore-bad-certs",
          hidden: true,
        },
        {
          name: "--ignore-file",
          description:
            "Override the .gcloudignore file and use the specified file instead",
          args: {
            name: "IGNORE_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        {
          name: "--image-url",
          description:
            "(App Engine flexible environment only.) Deploy with a specific Docker image. Docker url must be from one of the valid Artifact Registry hostnames",
          args: {
            name: "IMAGE_URL",
            description: "String",
          },
        },
        optImpersonateServiceAccount,
        optLogHttp,
        {
          name: "--no-cache",
          description:
            "Enable caching mechanisms involved in the deployment process, particularly in the build step",
          hidden: true,
        },
        {
          name: "--no-ignore-bad-certs",
          hidden: true,
        },
        {
          name: "--no-promote",
          description: "Promote the deployed version to receive all traffic",
          hidden: true,
        },
        {
          name: "--no-skip-staging",
          hidden: true,
        },
        {
          name: "--no-stop-previous-version",
          description:
            "Stop the previously running version when deploying a new version that receives all traffic",
          hidden: true,
        },
        optProject,
        {
          name: "--promote",
          description:
            "Promote the deployed version to receive all traffic. Overrides the default *app/promote_by_default* property value for this command invocation. Use *--no-promote* to disable",
        },
        optQuiet,
        {
          name: "--server",
          hidden: true,
          args: {
            name: "SERVER",
            description: "String",
          },
        },
        {
          name: "--service-account",
          description:
            "The service account that this deployed version will run as. If this argument is not specified, the App Engine default service account will be used for your current deployed version",
          args: {
            name: "SERVICE_ACCOUNT",
            description: "String",
          },
        },
        {
          name: "--skip-staging",
          hidden: true,
        },
        {
          name: "--staging-command",
          hidden: true,
          args: {
            name: "STAGING_COMMAND",
            description: "String",
          },
        },
        {
          name: "--stop-previous-version",
          description:
            "Stop the previously running version when deploying a new version that receives all traffic",
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "DEPLOYABLES",
        description:
          "The yaml files for the services or configurations you want to deploy. If not given, defaults to `app.yaml` in the current directory. If that is not found, attempts to automatically generate necessary configuration files (such as app.yaml) in the current directory",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "describe",
      description: "Display all data about an existing service",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
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
      name: "domain-mappings",
      description: "View and manage your App Engine domain mappings",
      subcommands: [
        {
          name: "create",
          description: "Creates a domain mapping",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--certificate-id",
              description:
                "A certificate id to use for this domain. May not be used on a domain mapping with automatically managed certificates. Use the `gcloud app ssl-certificates list` to see available certificates for this app",
              args: {
                name: "CERTIFICATE_ID",
                description: "String",
              },
            },
            {
              name: "--certificate-management",
              description:
                "Type of certificate management. 'automatic' will provision an SSL certificate automatically while 'manual' requires the user to provide a certificate id to provision. _CERTIFICATE_MANAGEMENT_ must be one of: *automatic*, *manual*",
              args: {
                name: "CERTIFICATE_MANAGEMENT",
                suggestions: ["automatic", "manual"],
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
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "DOMAIN",
            description:
              "A valid domain which may begin with a wildcard, such as: `example.com` or `*.example.com`",
          },
        },
        {
          name: "delete",
          description: "Deletes a specified domain mapping",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              "A valid domain which may begin with a wildcard, such as: `example.com` or `*.example.com`",
          },
        },
        {
          name: "describe",
          description: "Describes a specified domain mapping",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              "A valid domain which may begin with a wildcard, such as: `example.com` or `*.example.com`",
          },
        },
        {
          name: "list",
          description: "Lists domain mappings",
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
          description: "Updates a domain mapping",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--certificate-id",
              description:
                "A certificate id to use for this domain. May not be used on a domain mapping with automatically managed certificates. Use the `gcloud app ssl-certificates list` to see available certificates for this app",
              args: {
                name: "CERTIFICATE_ID",
                description: "String",
              },
            },
            {
              name: "--certificate-management",
              description:
                "Type of certificate management. 'automatic' will provision an SSL certificate automatically while 'manual' requires the user to provide a certificate id to provision. _CERTIFICATE_MANAGEMENT_ must be one of: *automatic*, *manual*",
              args: {
                name: "CERTIFICATE_MANAGEMENT",
                suggestions: ["automatic", "manual"],
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
              name: "--no-certificate-id",
              description: "Do not associate any certificate with this domain",
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
              "A valid domain which may begin with a wildcard, such as: `example.com` or `*.example.com`",
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
      name: "firewall-rules",
      description: "View and manage your App Engine firewall rules",
      subcommands: [
        {
          name: "create",
          description: "Creates a firewall rule",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--action",
              description:
                "Allow or deny matched traffic. _ACTION_ must be one of: *ALLOW*, *DENY*",
              priority: 100,
              args: {
                name: "ACTION",
                suggestions: ["ALLOW", "DENY"],
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "A text description of the rule",
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
            optProject,
            optQuiet,
            {
              name: "--source-range",
              description:
                "An IP address or range in CIDR notation or the ```*``` wildcard to match all traffic",
              priority: 100,
              args: {
                name: "SOURCE_RANGE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PRIORITY",
            description:
              "An integer between 1 and 2^32-1 which indicates the evaluation order of rules. Lowest priority rules are evaluated first. The handle `default` may also be used to refer to the final rule at priority 2^32-1 which is always present in a set of rules",
          },
        },
        {
          name: "delete",
          description: "Deletes a specified firewall rule",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "PRIORITY",
            description:
              "An integer between 1 and 2^32-1 which indicates the evaluation order of rules. Lowest priority rules are evaluated first. The handle `default` may also be used to refer to the final rule at priority 2^32-1 which is always present in a set of rules",
          },
        },
        {
          name: "describe",
          description: "Prints the fields of a specified firewall rule",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "PRIORITY",
            description:
              "An integer between 1 and 2^32-1 which indicates the evaluation order of rules. Lowest priority rules are evaluated first. The handle `default` may also be used to refer to the final rule at priority 2^32-1 which is always present in a set of rules",
          },
        },
        {
          name: "list",
          description: "Lists the firewall rules",
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
          name: "test-ip",
          description: "Display firewall rules that match a given IP",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "IP",
            description: "An IPv4 or IPv6 address to test against the firewall",
          },
        },
        {
          name: "update",
          description: "Updates a firewall rule",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--action",
              description:
                "Allow or deny matched traffic. _ACTION_ must be one of: *ALLOW*, *DENY*",
              args: {
                name: "ACTION",
                suggestions: ["ALLOW", "DENY"],
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "A text description of the rule",
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
            optProject,
            optQuiet,
            {
              name: "--source-range",
              description:
                "An IP address or range in CIDR notation or the ```*``` wildcard to match all traffic",
              args: {
                name: "SOURCE_RANGE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PRIORITY",
            description:
              "An integer between 1 and 2^32-1 which indicates the evaluation order of rules. Lowest priority rules are evaluated first. The handle `default` may also be used to refer to the final rule at priority 2^32-1 which is always present in a set of rules",
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
      name: "gen-repo-info-file",
      description: "[DEPRECATED] Saves repository information in a file",
      hidden: true,
      deprecated: true,
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
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
          name: "--output-directory",
          description:
            "The directory in which to create the source context file. Defaults to the current directory, or the directory containing --output-file if that option is provided with a file name that includes a directory path",
          args: {
            name: "OUTPUT_DIRECTORY",
            description: "String",
          },
        },
        {
          name: "--output-file",
          description:
            '(Deprecated; use --output-directory instead.) Specifies the full name of the output file to contain a single source context. The file name must be "source-context.json" in order to work with cloud diagnostic tools',
          deprecated: true,
          args: {
            name: "OUTPUT_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        optProject,
        optQuiet,
        {
          name: "--source-directory",
          description:
            "The path to directory containing the source code for the build",
          args: {
            name: "SOURCE_DIRECTORY",
            description: "String",
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "instances",
      description: "View and manage your App Engine instances",
      subcommands: [
        {
          name: "delete",
          description: "Delete a specified instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              name: ["--service", "-s"],
              description: "The service ID",
              priority: 100,
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
            name: "INSTANCE",
            description: "The instance ID",
          },
        },
        {
          name: "describe",
          description: "Display all data about an existing instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              name: ["--service", "-s"],
              description: "The service ID",
              priority: 100,
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
            name: "INSTANCE",
            description: "The instance ID",
          },
        },
        {
          name: "disable-debug",
          description: "Disable debug mode for an instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              name: ["--service", "-s"],
              description:
                "If specified, only match instances belonging to the given service. This affects both interactive and non-interactive selection",
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
            name: "INSTANCE",
            description:
              "The instance ID to disable debug mode on. If not specified, select instance interactively. Must uniquely specify (with other flags) exactly one instance",
            isOptional: true,
          },
        },
        {
          name: "enable-debug",
          description:
            "Enable debug mode for an instance (only works on the flexible environment)",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              name: ["--service", "-s"],
              description:
                "If specified, only match instances belonging to the given service. This affects both interactive and non-interactive selection",
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
            name: "INSTANCE",
            description:
              "Instance ID to enable debug mode on. If not specified, select instance interactively. Must uniquely specify (with other flags) exactly one instance",
            isOptional: true,
          },
        },
        {
          name: "list",
          description:
            "List the instances affiliated with the current App Engine project",
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
              name: ["--service", "-s"],
              description:
                "If specified, only list instances belonging to the given service",
              args: {
                name: "SERVICE",
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
          name: "scp",
          description:
            "SCP from or to the VM of an App Engine Flexible instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--compress",
              description: "Enable compression",
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
              name: "--no-compress",
              description: "Enable compression",
              hidden: true,
            },
            {
              name: "--no-recurse",
              description: "Upload directories recursively",
              hidden: true,
            },
            {
              name: "--no-tunnel-through-iap",
              description:
                "Tunnel the ssh connection through Identity-Aware Proxy for TCP forwarding",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--recurse",
              description: "Upload directories recursively",
            },
            {
              name: "--service",
              description: "The service ID",
              args: {
                name: "SERVICE",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--tunnel-through-iap",
              description:
                "Tunnel the ssh connection through Identity-Aware Proxy for TCP forwarding",
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "INSTANCE:SRC",
              description: "Specifies the files to copy",
              isVariadic: true,
            },
            {
              name: "INSTANCE:DEST",
              description: "Specifies a destination for the source files",
            },
          ],
        },
        {
          name: "ssh",
          description: "SSH into the VM of an App Engine Flexible instance",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--container",
              description: "Name of the container within the VM to connect to",
              args: {
                name: "CONTAINER",
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
              name: "--no-tunnel-through-iap",
              description:
                "Tunnel the ssh connection through Identity-Aware Proxy for TCP forwarding",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--service",
              description: "The service ID",
              args: {
                name: "SERVICE",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--tunnel-through-iap",
              description:
                "Tunnel the ssh connection through Identity-Aware Proxy for TCP forwarding",
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "INSTANCE",
              description: "The instance ID",
            },
            {
              name: "COMMAND",
              description: "Remote command to execute on the VM",
              isVariadic: true,
              isOptional: true,
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
      name: "logs",
      description: "Manage your App Engine logs",
      subcommands: [
        {
          name: "read",
          description: "Reads log entries for the current App Engine app",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
                "Filter entries with severity equal to or higher than a given level. _LEVEL_ must be one of: *critical*, *error*, *warning*, *info*, *debug*, *any*",
              args: {
                name: "LEVEL",
                description: "String",
                suggestions: [
                  "critical",
                  "error",
                  "warning",
                  "info",
                  "debug",
                  "any",
                ],
              },
            },
            {
              name: "--limit",
              description: "Number of log entries to show",
              args: {
                name: "LIMIT",
                description: "Int",
              },
            },
            optLogHttp,
            {
              name: "--logs",
              description:
                "Filter entries from a particular set of logs. Must be a comma-separated list of log names (request_log, stdout, stderr, etc)",
              args: {
                name: "APP_LOG",
                description: "List",
              },
            },
            optProject,
            optQuiet,
            {
              name: ["--service", "-s"],
              description: "Limit to specific service",
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
          name: "tail",
          description: "Streams logs for App Engine apps",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
                "Filter entries with severity equal to or higher than a given level. _LEVEL_ must be one of: *critical*, *error*, *warning*, *info*, *debug*, *any*",
              args: {
                name: "LEVEL",
                description: "String",
                suggestions: [
                  "critical",
                  "error",
                  "warning",
                  "info",
                  "debug",
                  "any",
                ],
              },
            },
            optLogHttp,
            {
              name: "--logs",
              description:
                "Filter entries from a particular set of logs. Must be a comma-separated list of log names (request_log, stdout, stderr, etc)",
              args: {
                name: "APP_LOG",
                description: "List",
              },
            },
            optProject,
            optQuiet,
            {
              name: ["--service", "-s"],
              description: "Limit to specific service",
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
      name: "open-console",
      description:
        "Open the App Engine dashboard, or log viewer, in a web browser",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
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
          name: ["--logs", "-l"],
          description:
            "Open the log viewer instead of the App Engine dashboard",
        },
        {
          name: "--no-logs",
          description:
            "Open the log viewer instead of the App Engine dashboard",
          hidden: true,
        },
        optProject,
        optQuiet,
        {
          name: ["--service", "-s"],
          description:
            "The service to consider. If not specified, use the default service",
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
      description: "View and manage your App Engine Operations",
      subcommands: [
        {
          name: "describe",
          description: "Describes the operation",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            description: "ID of operation",
          },
        },
        {
          name: "list",
          description: "List the operations",
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
              name: "--no-pending",
              description: "Only display pending operations",
              hidden: true,
            },
            optNoUri,
            optPageSize,
            {
              name: "--pending",
              description: "Only display pending operations",
            },
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
          name: "wait",
          description: "Polls an operation until completion",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            description: "ID of operation",
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
      name: "regions",
      description:
        "View regional availability of App Engine runtime environments",
      subcommands: [
        {
          name: "list",
          description:
            "List the availability of flex and standard environments for each region",
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
      name: "runtimes",
      description: "List runtimes available to Google App Engine",
      subcommands: [
        {
          name: "list",
          description: "List the available runtimes",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--environment",
              description:
                "Environment for the application. _ENVIRONMENT_ must be (only one value is supported): *standard*",
              priority: 100,
              args: {
                name: "ENVIRONMENT",
                description: "String",
                suggestions: ["standard"],
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
      name: "services",
      description: "View and manage your App Engine services",
      subcommands: [
        {
          name: "browse",
          description: "Open the specified service(s) in a browser",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLaunchBrowser,
            optLogHttp,
            optNoLaunchBrowser,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICES",
            description:
              "The services to open (optionally filtered by the --version flag)",
            isVariadic: true,
          },
        },
        {
          name: "delete",
          description: "Delete services in the current project",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "SERVICES",
            description: "The service(s) to delete",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Display all data about an existing service",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "SERVICE",
            description: "The service to describe",
          },
        },
        {
          name: "list",
          description: "List your existing services",
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
          name: "set-traffic",
          description: "Set traffic splitting settings",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              name: "--migrate",
              description:
                "The migrate flag determines whether or not to use traffic migration during the operation. Traffic migration will attempt to automatically migrate traffic from the previous version to the new version, giving the autoscaler time to respond. See the documentation here: [](https://cloud.google.com/appengine/docs/python/console/trafficmigration) for more information",
            },
            {
              name: "--no-migrate",
              description:
                "The migrate flag determines whether or not to use traffic migration during the operation. Traffic migration will attempt to automatically migrate traffic from the previous version to the new version, giving the autoscaler time to respond. See the documentation here: [](https://cloud.google.com/appengine/docs/python/console/trafficmigration) for more information",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--split-by",
              description:
                "Whether to split traffic based on cookie, IP address or random. _SPLIT_BY_ must be one of: *cookie*, *ip*, *random*",
              args: {
                name: "SPLIT_BY",
                description: "String",
                suggestions: ["cookie", "ip", "random"],
              },
            },
            {
              name: "--splits",
              description:
                "Key-value pairs describing what proportion of traffic should go to each version. The split values are added together and used as weights. The exact values do not matter, only their relation to each other. For example, v1=2,v2=2 is equivalent to v1=.5,v2=.5",
              priority: 100,
              args: {
                name: "SPLITS",
                description: "Dict",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "SERVICES",
            description: "The services to modify",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "update",
          description: "Update service-level settings",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              name: "--ingress",
              description:
                "Control what traffic can reach the app. _INGRESS_ must be one of: *all*, *internal-only*, *internal-and-cloud-load-balancing*",
              priority: 100,
              args: {
                name: "INGRESS",
                description: "String",
                suggestions: [
                  "all",
                  "internal-only",
                  "internal-and-cloud-load-balancing",
                ],
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
            name: "SERVICES",
            description: "The services to modify",
            isVariadic: true,
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
      name: "ssl-certificates",
      description: "View and manage your App Engine SSL certificates",
      subcommands: [
        {
          name: "create",
          description: "Uploads a new SSL certificate",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--certificate",
              description:
                "The file path for the new certificate to upload. Must be in PEM x.509 format including the header and footer",
              priority: 100,
              args: {
                name: "LOCAL_FILE_PATH",
                description: "String",
                template: "filepaths",
              },
            },
            optConfiguration,
            {
              name: "--display-name",
              description: "A display name for this certificate",
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
            optLogHttp,
            {
              name: "--private-key",
              description:
                "The file path to a local RSA private key file. The private key must be PEM encoded with header and footer and must be 2048 bits or fewer",
              priority: 100,
              args: {
                name: "LOCAL_FILE_PATH",
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
        },
        {
          name: "delete",
          description: "Deletes an SSL certificate",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "ID",
            description:
              "The id of the certificate. This identifier is printed upon creation of a new certificate. Run `{parent_command} list` to view existing certificates",
          },
        },
        {
          name: "describe",
          description: "Describes a specified SSL certificate",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "ID",
            description:
              "The id of the certificate. This identifier is printed upon creation of a new certificate. Run `{parent_command} list` to view existing certificates",
          },
        },
        {
          name: "list",
          description: "Lists the SSL certificates",
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
          description: "Updates an SSL certificate",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--certificate",
              description:
                "The file path for the new certificate to upload. Must be in PEM x.509 format including the header and footer",
              args: {
                name: "LOCAL_FILE_PATH",
                description: "String",
                template: "filepaths",
              },
            },
            optConfiguration,
            {
              name: "--display-name",
              description: "A display name for this certificate",
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
            {
              name: "--private-key",
              description:
                "The file path to a local RSA private key file. The private key must be PEM encoded with header and footer and must be 2048 bits or fewer",
              args: {
                name: "LOCAL_FILE_PATH",
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
            name: "ID",
            description:
              "The id of the certificate. This identifier is printed upon creation of a new certificate. Run `{parent_command} list` to view existing certificates",
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
      description: "Updates an App Engine application",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
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
          name: "--no-split-health-checks",
          description:
            "Enables/disables split health checks by default on new deployments",
        },
        optProject,
        optQuiet,
        {
          name: "--service-account",
          description:
            "The app-level default service account to update the app with",
          args: {
            name: "SERVICE_ACCOUNT",
            description: "String",
          },
        },
        {
          name: "--split-health-checks",
          description:
            "Enables/disables split health checks by default on new deployments. Use *--split-health-checks* to enable and *--no-split-health-checks* to disable",
        },
        {
          name: "--ssl-policy",
          description:
            "The app-level SSL policy to update the app with. _SSL_POLICY_ must be one of: *TLS_VERSION_1_0*, *TLS_VERSION_1_2*",
          args: {
            name: "SSL_POLICY",
            description: "String",
            suggestions: ["TLS_VERSION_1_0", "TLS_VERSION_1_2"],
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "versions",
      description: "View and manage your App Engine versions",
      subcommands: [
        {
          name: "browse",
          description: "Open the specified versions in a browser",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLaunchBrowser,
            optLogHttp,
            optNoLaunchBrowser,
            optProject,
            optQuiet,
            {
              name: ["--service", "-s"],
              description:
                "If specified, only open versions from the given service. If not specified, use the default service",
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
            name: "VERSIONS",
            description:
              "The versions to open (optionally filtered by the --service flag)",
            isVariadic: true,
          },
        },
        {
          name: "delete",
          description: "Delete a specified version",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              name: ["--service", "-s"],
              description:
                "If specified, only delete versions from the given service",
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
            name: "VERSIONS",
            description:
              "The versions to delete (optionally filtered by the --service flag)",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Display all data about an existing version",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              name: ["--service", "-s"],
              description: "The service corresponding to the version to show",
              priority: 100,
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
            name: "VERSION",
            description: "The ID of the version to show",
          },
        },
        {
          name: "list",
          description: "List your existing versions",
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
              name: "--hide-no-traffic",
              description: "Only show versions that are receiving traffic",
            },
            optImpersonateServiceAccount,
            optLimit,
            optLogHttp,
            {
              name: "--no-hide-no-traffic",
              description: "Only show versions that are receiving traffic",
              hidden: true,
            },
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            {
              name: ["--service", "-s"],
              description: "Only show versions from this service",
              args: {
                name: "SERVICE",
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
          name: "migrate",
          description:
            "Migrate traffic from one version to another for a set of services",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              name: ["--service", "-s"],
              description:
                "If specified, only migrate versions from the given service",
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
            name: "VERSION",
            description: "The version to migrate to",
          },
        },
        {
          name: "start",
          description: "Start serving specified versions",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              name: ["--service", "-s"],
              description:
                "If specified, only start versions from the given service",
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
            name: "VERSIONS",
            description:
              "The versions to start. (optionally filtered by the --service flag)",
            isVariadic: true,
          },
        },
        {
          name: "stop",
          description: "Stop serving specified versions",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              name: ["--service", "-s"],
              description:
                "If specified, only stop versions from the given service",
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
            name: "VERSIONS",
            description:
              "The versions to stop (optionally filtered by the --service flag)",
            isVariadic: true,
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
