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

const optEcp: Fig.Option = {
  name: "--ecp",
  description:
    "Provide a custom path to the enterprise-certificate-proxy binary. This flag must be the full path to the binary",
  args: {
    name: "ECP",
    description: "String",
  },
};

const optEcpClient: Fig.Option = {
  name: "--ecp-client",
  description:
    "Provide a custom path to the enterprise-certificate-proxy shared client library. This flag must be the full path to the shared library",
  args: {
    name: "ECP_CLIENT",
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

const optLogHttp: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};

const optOutputFile: Fig.Option = {
  name: "--output-file",
  description:
    "Override the file path that the enterprise-certificate-proxy configuration is written to",
  args: {
    name: "OUTPUT_FILE",
    description: "String",
    template: "filepaths",
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

const optTlsOffload: Fig.Option = {
  name: "--tls-offload",
  description:
    "Provide a custom path to the enterprise-certificate-proxy shared tls offload library. This flag must be the full path to the shared library",
  args: {
    name: "TLS_OFFLOAD",
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
  name: "auth",
  description: "Manage oauth2 credentials for the Google Cloud CLI",
  subcommands: [
    {
      name: "activate-refresh-token",
      description: "Get credentials via an existing refresh token",
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
      args: [
        {
          name: "ACCOUNT",
          description: "The account to associate with the refresh token",
        },
        {
          name: "TOKEN",
          description: "OAuth2 refresh token. If blank, prompt for value",
          isOptional: true,
        },
      ],
    },
    {
      name: "activate-service-account",
      description: "Authorize access to Google Cloud with a service account",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
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
          name: "--key-file",
          description: "Path to the private key file",
          priority: 100,
          args: {
            name: "KEY_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        optLogHttp,
        {
          name: "--no-prompt-for-password",
          description:
            "Prompt for the password for the service account private key (only for a .p12 file)",
          hidden: true,
        },
        {
          name: "--password-file",
          description:
            "Path to a file containing the password for the service account private key (only for a .p12 file)",
          args: {
            name: "PASSWORD_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        optProject,
        {
          name: "--prompt-for-password",
          description:
            "Prompt for the password for the service account private key (only for a .p12 file)",
        },
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "ACCOUNT",
        description: "E-mail address of the service account",
        isOptional: true,
      },
    },
    {
      name: "application-default",
      description: "Manage your active Application Default Credentials",
      subcommands: [
        {
          name: "login",
          description:
            "Acquire new user credentials to use for Application Default Credentials",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--browser",
              description:
                "If you want to authorize the client libraries on a machine that doesn't have a browser and you can install the gcloud CLI on another machine with a browser, use the `--no-browser` flag",
            },
            {
              name: "--client-id-file",
              description:
                "A file containing your own client id to use to login. If --client-id-file is specified, the quota project will not be written to ADC",
              args: {
                name: "CLIENT_ID_FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optConfiguration,
            {
              name: "--disable-quota-project",
              description:
                "By default, the project in billing/quota_project or core/project will be written to application default credentials (ADC) as the quota project. When both are set, billing/quota_project takes precedence. You can use --billing-project to overwrite the value in billing/quota_project. Similarly, you can use --project to overwrite the value in core/project. Client libraries will send it to services and use it for quota and billing. To be able to use a project as the quota project, the account in ADC must have the serviceusage.services.use permission on the project. This permission is granted to the project editor and project owner. You can create custom roles to include this permission",
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
              name: "--launch-browser",
              description:
                "Launch a browser for authorization. If not enabled or if it is not possible to launch a browser, prints a URL to standard output to be copied",
            },
            optLogHttp,
            {
              name: "--login-config",
              description:
                "Path to the login configuration file (workforce pool, generated by the Cloud Console or `gcloud iam workforce-pools create-login-config`). Overrides the default *auth/login_config_file* property value for this command invocation",
              args: {
                name: "LOGIN_CONFIG",
                description: "String",
              },
            },
            {
              name: "--no-browser",
              description:
                "If you want to authorize the client libraries on a machine that doesn't have a browser and you can install the gcloud CLI on another machine with a browser, use the `--no-browser` flag",
              hidden: true,
            },
            {
              name: "--no-disable-quota-project",
              description:
                "By default, the project in billing/quota_project or core/project will be written to application default credentials (ADC) as the quota project. When both are set, billing/quota_project takes precedence. You can use --billing-project to overwrite the value in billing/quota_project. Similarly, you can use --project to overwrite the value in core/project. Client libraries will send it to services and use it for quota and billing. To be able to use a project as the quota project, the account in ADC must have the serviceusage.services.use permission on the project. This permission is granted to the project editor and project owner. You can create custom roles to include this permission",
              hidden: true,
            },
            {
              name: "--no-launch-browser",
              description:
                "Launch a browser for authorization. If not enabled or if it is not possible to launch a browser, prints a URL to standard output to be copied",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--remote-bootstrap",
              description:
                "Use this flag to pass login parameters to a gcloud instance which will help this gcloud to login. This flag is reserved for bootstrapping remote workstation without access to web browsers, which should be initiated by using the --no-browser. Users should not use this flag directly",
              hidden: true,
              args: {
                name: "REMOTE_BOOTSTRAP",
                description: "String",
              },
            },
            {
              name: "--scopes",
              description:
                "The names of the scopes to authorize for. By default openid, https://www.googleapis.com/auth/userinfo.email, https://www.googleapis.com/auth/cloud-platform, https://www.googleapis.com/auth/sqlservice.login scopes are used. The list of possible scopes can be found at: [](https://developers.google.com/identity/protocols/googlescopes). To add scopes for applications outside of Google Cloud Platform, such as Google Drive, [create an OAuth Client ID](https://support.google.com/cloud/answer/6158849) and provide it by using the --client-id-file flag",
              args: {
                name: "SCOPE",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ACCOUNT",
            description:
              "User account used for authorization. When the account specified has valid credentials in the local credential store these credentials will be re-used. Otherwise new ones will be fetched and replace any stored credential. This caching behavior is only available for user credentials",
            isOptional: true,
          },
        },
        {
          name: "print-access-token",
          description:
            "Print an access token for your current Application Default Credentials",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              name: "--lifetime",
              description:
                "Access token lifetime. The default access token lifetime is 3600 seconds, but you can use this flag to reduce the lifetime or extend it up to 43200 seconds (12 hours). The org policy constraint `constraints/iam.allowServiceAccountCredentialLifetimeExtension` must be set if you want to extend the lifetime beyond 3600 seconds. Note that this flag is for service account impersonation only, so it only works when either `--impersonate-service-account` flag or `auth/impersonate_service_account` property is set",
              args: {
                name: "LIFETIME",
              },
            },
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--scopes",
              description:
                "The scopes to authorize for. This flag is supported for user accounts and service accounts only. The list of possible scopes can be found at: [](https://developers.google.com/identity/protocols/googlescopes)",
              args: {
                name: "SCOPE",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "revoke",
          description:
            "Revoke previously generated Application Default Credentials",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
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
          name: "set-quota-project",
          description:
            "Update or add a quota project in application default credentials (ADC)",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
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
            name: "QUOTA_PROJECT_ID",
            description:
              "Quota project ID to add to application default credentials. If a quota project already exists, it will be updated",
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
      name: "configure-docker",
      description: "Register `gcloud` as a Docker credential helper",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
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
          name: "--include-artifact-registry",
          description: "Whether to include all Artifact Registry domains",
          hidden: true,
        },
        optLogHttp,
        {
          name: "--no-include-artifact-registry",
          description: "Whether to include all Artifact Registry domains",
          hidden: true,
        },
        optProject,
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "REGISTRIES",
        description:
          "The comma-separated list of registries to configure the credential helper for. Container Registry is a service for storing private container images. For available registries, see [](https://cloud.google.com/container-registry/docs/pushing-and-pulling#add-registry)",
        isOptional: true,
      },
    },
    {
      name: "describe",
      description: "Describes credentials",
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
        name: "ACCOUNT_NAME",
        description: "Name of the account to describe",
      },
    },
    {
      name: "docker-helper",
      description:
        "A Docker credential helper to provide access to GCR repositories",
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
        name: "METHOD",
        description: "The docker credential helper method",
      },
    },
    {
      name: "enterprise-certificate-config",
      description: "Manage enterprise certificate configurations",
      subcommands: [
        {
          name: "create",
          description: "Create enterprise certificate configurations",
          subcommands: [
            {
              name: "linux",
              description:
                "Create an enterprise-certificate configuration file for Linux",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optEcp,
                optEcpClient,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                {
                  name: "--label",
                  description:
                    "The PKCS #11 label for the target credentials. The certificate, public key, and private key MUST have the same label. enterprise-certificate-proxy will use all three objects",
                  priority: 100,
                  args: {
                    name: "LABEL",
                    description: "String",
                  },
                },
                optLogHttp,
                {
                  name: "--module",
                  description: "The full file path to the PKCS #11 module",
                  priority: 100,
                  args: {
                    name: "MODULE",
                    description: "String",
                  },
                },
                optOutputFile,
                optProject,
                optQuiet,
                {
                  name: "--slot",
                  description:
                    "The PKCS #11 slot containing the target credentials",
                  priority: 100,
                  args: {
                    name: "SLOT",
                    description: "String",
                  },
                },
                optTlsOffload,
                optTraceToken,
                optUserOutputEnabled,
                {
                  name: "--user-pin",
                  description:
                    "The user pin used to login to the PKCS #11 module. If there is no user pin leave this field empty",
                  args: {
                    name: "USER_PIN",
                    description: "String",
                  },
                },
                optVerbosity,
              ],
            },
            {
              name: "macos",
              description:
                "Create an enterprise-certificate configuration file for MacOS",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optEcp,
                optEcpClient,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                {
                  name: "--issuer",
                  description: "The certificate issuer",
                  priority: 100,
                  args: {
                    name: "ISSUER",
                    description: "String",
                  },
                },
                {
                  name: "--keychain-type",
                  description:
                    'Specify the target keychain(s) for certificate lookup.Accepted values are "login", "system", or "all". If omitted,defaults to "all". Use "all" to include custom keychains',
                  args: {
                    name: "KEYCHAIN_TYPE",
                    description: "String",
                  },
                },
                optLogHttp,
                optOutputFile,
                optProject,
                optQuiet,
                optTlsOffload,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "windows",
              description:
                "Create an enterprise-certificate configuration file for Windows",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optEcp,
                optEcpClient,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                {
                  name: "--issuer",
                  description: "The certificate issuer",
                  priority: 100,
                  args: {
                    name: "ISSUER",
                    description: "String",
                  },
                },
                optLogHttp,
                optOutputFile,
                optProject,
                {
                  name: "--provider",
                  description: "The Windows secure store provider",
                  priority: 100,
                  args: {
                    name: "PROVIDER",
                    description: "String",
                  },
                },
                optQuiet,
                {
                  name: "--store",
                  description: "The Windows secure store",
                  priority: 100,
                  args: {
                    name: "STORE",
                    description: "String",
                  },
                },
                optTlsOffload,
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
      name: "git-helper",
      description:
        "A git credential helper to provide access to Google git repositories",
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
        {
          name: "--ignore-unknown",
          description:
            "Produce no output and exit with 0 when given an unknown method (e.g. store) or host",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        {
          name: "--no-ignore-unknown",
          description:
            "Produce no output and exit with 0 when given an unknown method (e.g. store) or host",
          hidden: true,
        },
        optProject,
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "METHOD",
        description: "The git credential helper method",
      },
    },
    {
      name: "list",
      description: "Lists credentialed accounts",
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
        {
          name: "--filter-account",
          description:
            'List only credentials for one account. Use --filter="account~_PATTERN_" to select accounts that match _PATTERN_',
          args: {
            name: "FILTER_ACCOUNT",
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
      name: "login",
      description:
        "Authorize gcloud to access the Cloud Platform with Google user credentials",
      options: [
        optAccessTokenFile,
        optAccount,
        {
          name: "--activate",
          description:
            "Set the new account to active. Enabled by default, use *--no-activate* to disable",
        },
        {
          name: "--add-quota-project-to-adc",
          description:
            "Read the project from gcloud's context and write to application default credentials as the quota project. Use this flag only when --update-adc is specified",
          hidden: true,
        },
        optBillingProject,
        {
          name: "--brief",
          description: "Minimal user output",
        },
        {
          name: "--browser",
          description:
            "If you want to authorize the gcloud CLI on a machine that doesn't have a browser and you can install the gcloud CLI on another machine with a browser, use the `--no-browser` flag",
        },
        optConfiguration,
        {
          name: "--cred-file",
          description:
            "Path to the external account configuration file (workload identity pool, generated by the Cloud Console or `gcloud iam workload-identity-pools create-cred-config`) or service account credential key file (JSON)",
          args: {
            name: "CRED_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        {
          name: "--do-not-activate",
          hidden: true,
        },
        {
          name: "--enable-gdrive-access",
          description: "Enable Google Drive access",
        },
        optFlagsFile,
        optFlatten,
        {
          name: "--force",
          description:
            "Re-run the web authorization flow even if the given account has valid credentials",
        },
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        {
          name: "--launch-browser",
          description:
            "Launch a browser for authorization. If not enabled or if it is not possible to launch a browser, prints a URL to standard output to be copied",
        },
        optLogHttp,
        {
          name: "--login-config",
          description:
            "Path to the workforce identity federation login configuration file which can be generated using the `gcloud iam workforce-pools create-login-config` command. Overrides the default *auth/login_config_file* property value for this command invocation",
          args: {
            name: "LOGIN_CONFIG",
            description: "String",
          },
        },
        {
          name: "--no-activate",
          description: "Set the new account to active",
          hidden: true,
        },
        {
          name: "--no-add-quota-project-to-adc",
          description:
            "Read the project from gcloud's context and write to application default credentials as the quota project. Use this flag only when --update-adc is specified",
          hidden: true,
        },
        {
          name: "--no-brief",
          description: "Minimal user output",
          hidden: true,
        },
        {
          name: "--no-browser",
          description:
            "If you want to authorize the gcloud CLI on a machine that doesn't have a browser and you can install the gcloud CLI on another machine with a browser, use the `--no-browser` flag",
          hidden: true,
        },
        {
          name: "--no-do-not-activate",
          hidden: true,
        },
        {
          name: "--no-enable-gdrive-access",
          description: "Enable Google Drive access",
          hidden: true,
        },
        {
          name: "--no-force",
          description:
            "Re-run the web authorization flow even if the given account has valid credentials",
          hidden: true,
        },
        {
          name: "--no-launch-browser",
          description:
            "Launch a browser for authorization. If not enabled or if it is not possible to launch a browser, prints a URL to standard output to be copied",
          hidden: true,
        },
        {
          name: "--no-update-adc",
          description:
            "Write the obtained credentials to the well-known location for Application Default Credentials (ADC). Run $ gcloud auth application-default --help to learn more about ADC. Any credentials previously generated by `gcloud auth application-default login` will be overwritten",
          hidden: true,
        },
        optProject,
        optQuiet,
        {
          name: "--remote-bootstrap",
          description:
            "Use this flag to pass login parameters to a gcloud instance which will help this gcloud to login. This flag is reserved for bootstrapping remote workstation without access to web browsers, which should be initiated by using the --no-browser. Users should not use this flag directly",
          hidden: true,
          args: {
            name: "REMOTE_BOOTSTRAP",
            description: "String",
          },
        },
        optTraceToken,
        {
          name: "--update-adc",
          description:
            "Write the obtained credentials to the well-known location for Application Default Credentials (ADC). Run $ gcloud auth application-default --help to learn more about ADC. Any credentials previously generated by `gcloud auth application-default login` will be overwritten",
        },
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "ACCOUNT",
        description:
          "User account used for authorization. When the account specified has valid credentials in the local credential store these credentials will be re-used, otherwise a new credential will be fetched. If you need to fetch a new credential for an account with valid credentials stored, run the command with the --force flag",
        isOptional: true,
      },
    },
    {
      name: "print-access-token",
      description: "Print an access token for the specified account",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
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
          name: "--lifetime",
          description:
            "Access token lifetime. The default access token lifetime is 3600 seconds, but you can use this flag to reduce the lifetime or extend it up to 43200 seconds (12 hours). The org policy constraint `constraints/iam.allowServiceAccountCredentialLifetimeExtension` must be set if you want to extend the lifetime beyond 3600 seconds. Note that this flag is for service account impersonation only, so it must be used together with the `--impersonate-service-account` flag",
          args: {
            name: "LIFETIME",
          },
        },
        optLogHttp,
        optProject,
        optQuiet,
        {
          name: "--scopes",
          description:
            "The scopes to authorize for. This flag is supported for user accounts and service accounts only. The list of possible scopes can be found at: https://developers.google.com/identity/protocols/googlescopes",
          hidden: true,
          args: {
            name: "SCOPE",
            description: "List",
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "ACCOUNT",
        description:
          "Account to get the access token for. If not specified, the current active account will be used",
        isOptional: true,
      },
    },
    {
      name: "print-identity-token",
      description: "Print an identity token for the specified account",
      options: [
        optAccessTokenFile,
        optAccount,
        {
          name: "--audiences",
          description:
            "Intended recipient of the token. Currently, only one audience can be specified",
          args: {
            name: "AUDIENCES",
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
        {
          name: "--include-email",
          description:
            "Specify whether or not service account email is included in the identity token. If specified, the token will contain 'email' and 'email_verified' claims. This flag should only be used for impersonate service account",
        },
        {
          name: "--include-license",
          description:
            "Specify whether or not license codes for images associated with this instance are included in the identity token payload. Default is False. This flag does not have effect unless `--token-format=full`",
        },
        optLogHttp,
        {
          name: "--no-include-email",
          description:
            "Specify whether or not service account email is included in the identity token. If specified, the token will contain 'email' and 'email_verified' claims. This flag should only be used for impersonate service account",
          hidden: true,
        },
        {
          name: "--no-include-license",
          description:
            "Specify whether or not license codes for images associated with this instance are included in the identity token payload. Default is False. This flag does not have effect unless `--token-format=full`",
          hidden: true,
        },
        optProject,
        optQuiet,
        {
          name: "--token-format",
          description:
            "Specify whether or not the project and instance details are included in the identity token payload. This flag only applies to Google Compute Engine instance identity tokens. See https://cloud.google.com/compute/docs/instances/verifying-instance-identity#token_format for more details on token format. _TOKEN_FORMAT_ must be one of: *standard*, *full*",
          args: {
            name: "TOKEN_FORMAT",
            description: "String",
            suggestions: ["standard", "full"],
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "ACCOUNT",
        description:
          "Account to print the identity token for. If not specified, the current active account will be used",
        isOptional: true,
      },
    },
    {
      name: "print-refresh-token",
      description:
        "A command that prints the refresh token for the current account",
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
        name: "ACCOUNT",
        description:
          "The account to get the refresh token for. Leave empty for the active account",
        isOptional: true,
      },
    },
    {
      name: "revoke",
      description: "Revoke access credentials for an account",
      options: [
        optAccessTokenFile,
        optAccount,
        {
          name: "--all",
          description: "Revoke credentials for all accounts",
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
        {
          name: "--no-all",
          description: "Revoke credentials for all accounts",
          hidden: true,
        },
        optProject,
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "ACCOUNTS",
        description: "Accounts whose credentials are to be revoked",
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
};

export default completionSpec;
