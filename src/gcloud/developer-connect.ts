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

const optConnection: Fig.Option = {
  name: "--connection",
  description: "The connection id of the gitRepositoryLink resource",
  args: {
    name: "CONNECTION",
    description: "String",
  },
};

const optEtag: Fig.Option = {
  name: "--etag",
  description:
    "This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding",
  args: {
    name: "ETAG",
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
    "ID of the location or fully qualified identifier for the location",
  priority: 100,
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation2: Fig.Option = {
  name: "--location",
  description: "The location id of the connection resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description: "The location id of the gitRepositoryLink resource",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation4: Fig.Option = {
  name: "--location",
  description: "The location id of the operation resource",
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

const optNoUri: Fig.Option = {
  name: "--no-uri",
  description:
    "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
  hidden: true,
};

const optNoValidateOnly: Fig.Option = {
  name: "--no-validate-only",
  description: "If set, validate the request, but do not actually post it",
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

const optRequestId: Fig.Option = {
  name: "--request-id",
  description:
    "An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request",
  args: {
    name: "REQUEST_ID",
    description: "String",
  },
};

const optRequestId2: Fig.Option = {
  name: "--request-id",
  description:
    "An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request",
  args: {
    name: "REQUEST_ID",
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

const optValidateOnly: Fig.Option = {
  name: "--validate-only",
  description: "If set, validate the request, but do not actually post it",
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
  name: "developer-connect",
  description: "Manage Developer Connect resources",
  subcommands: [
    {
      name: "connections",
      description: "Manage connection resources",
      subcommands: [
        {
          name: "create",
          description: "Create a connection resource",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--annotations",
              description:
                "Allows clients to store small amounts of arbitrary data",
              args: {
                name: "ANNOTATIONS",
              },
            },
            optAsync,
            optBillingProject,
            {
              name: "--bitbucket-cloud-config-authorizer-credential-user-token-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "BITBUCKET_CLOUD_CONFIG_AUTHORIZER_CREDENTIAL_USER_TOKEN_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--bitbucket-cloud-config-read-authorizer-credential-user-token-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "BITBUCKET_CLOUD_CONFIG_READ_AUTHORIZER_CREDENTIAL_USER_TOKEN_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--bitbucket-cloud-config-webhook-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "BITBUCKET_CLOUD_CONFIG_WEBHOOK_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--bitbucket-cloud-config-workspace",
              description:
                "The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform",
              priority: 100,
              args: {
                name: "BITBUCKET_CLOUD_CONFIG_WORKSPACE",
                description: "String",
              },
            },
            {
              name: "--bitbucket-data-center-config-authorizer-credential-user-token-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "BITBUCKET_DATA_CENTER_CONFIG_AUTHORIZER_CREDENTIAL_USER_TOKEN_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--bitbucket-data-center-config-host-uri",
              description:
                "The URI of the Bitbucket Data Center host this connection is for",
              priority: 100,
              args: {
                name: "BITBUCKET_DATA_CENTER_CONFIG_HOST_URI",
                description: "String",
              },
            },
            {
              name: "--bitbucket-data-center-config-read-authorizer-credential-user-token-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "BITBUCKET_DATA_CENTER_CONFIG_READ_AUTHORIZER_CREDENTIAL_USER_TOKEN_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--bitbucket-data-center-config-service-directory",
              description:
                "ID of the service or fully qualified identifier for the service",
              priority: 100,
              args: {
                name: "BITBUCKET_DATA_CENTER_CONFIG_SERVICE_DIRECTORY",
                description: "String",
              },
            },
            {
              name: "--bitbucket-data-center-config-ssl-ca-certificate",
              description:
                "SSL certificate authority to trust when making requests to Bitbucket Data Center",
              args: {
                name: "BITBUCKET_DATA_CENTER_CONFIG_SSL_CA_CERTIFICATE",
                description: "String",
              },
            },
            {
              name: "--bitbucket-data-center-config-webhook-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "BITBUCKET_DATA_CENTER_CONFIG_WEBHOOK_SECRET_VERSION",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--crypto-key-config-reference",
              description:
                "ID of the cryptoKey or fully qualified identifier for the cryptoKey",
              priority: 100,
              args: {
                name: "CRYPTO_KEY_CONFIG_REFERENCE",
                description: "String",
              },
            },
            {
              name: "--disabled",
              description:
                "If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled",
            },
            optEtag,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--git-proxy-config-enabled",
              description:
                "Setting this to true allows the git proxy to be used for performing git operations on the repositories linked in the connection",
            },
            {
              name: "--github-config-app",
              description:
                "The GitHub Application that was installed to the GitHub user or organization. _GITHUB_CONFIG_APP_ must be one of:",
              priority: 100,
              args: {
                name: "GITHUB_CONFIG_APP",
                suggestions: [
                  "dataform",
                  "developer-connect",
                  "firebase",
                  "gemini-code-assist",
                ],
              },
            },
            {
              name: "--github-config-app-installation-id",
              description: "GitHub App installation id",
              args: {
                name: "GITHUB_CONFIG_APP_INSTALLATION_ID",
                description: "Int",
              },
            },
            {
              name: "--github-config-authorizer-credential-oauth-token-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "GITHUB_CONFIG_AUTHORIZER_CREDENTIAL_OAUTH_TOKEN_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--github-enterprise-config-app-id",
              description: "ID of the GitHub App created from the manifest",
              args: {
                name: "GITHUB_ENTERPRISE_CONFIG_APP_ID",
                description: "Int",
              },
            },
            {
              name: "--github-enterprise-config-app-installation-id",
              description: "ID of the installation of the GitHub App",
              args: {
                name: "GITHUB_ENTERPRISE_CONFIG_APP_INSTALLATION_ID",
                description: "Int",
              },
            },
            {
              name: "--github-enterprise-config-host-uri",
              description:
                "The URI of the GitHub Enterprise host this connection is for",
              priority: 100,
              args: {
                name: "GITHUB_ENTERPRISE_CONFIG_HOST_URI",
                description: "String",
              },
            },
            {
              name: "--github-enterprise-config-organization",
              description:
                "GitHub Enterprise organization in which the GitHub App is created",
              args: {
                name: "GITHUB_ENTERPRISE_CONFIG_ORGANIZATION",
                description: "String",
              },
            },
            {
              name: "--github-enterprise-config-private-key-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "GITHUB_ENTERPRISE_CONFIG_PRIVATE_KEY_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--github-enterprise-config-service-directory",
              description:
                "ID of the service or fully qualified identifier for the service",
              priority: 100,
              args: {
                name: "GITHUB_ENTERPRISE_CONFIG_SERVICE_DIRECTORY",
                description: "String",
              },
            },
            {
              name: "--github-enterprise-config-ssl-ca-certificate",
              description:
                "SSL certificate to use for requests to GitHub Enterprise",
              args: {
                name: "GITHUB_ENTERPRISE_CONFIG_SSL_CA_CERTIFICATE",
                description: "String",
              },
            },
            {
              name: "--github-enterprise-config-webhook-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "GITHUB_ENTERPRISE_CONFIG_WEBHOOK_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--gitlab-config-authorizer-credential-user-token-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "GITLAB_CONFIG_AUTHORIZER_CREDENTIAL_USER_TOKEN_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--gitlab-config-read-authorizer-credential-user-token-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "GITLAB_CONFIG_READ_AUTHORIZER_CREDENTIAL_USER_TOKEN_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--gitlab-config-webhook-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "GITLAB_CONFIG_WEBHOOK_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--gitlab-enterprise-config-authorizer-credential-user-token-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "GITLAB_ENTERPRISE_CONFIG_AUTHORIZER_CREDENTIAL_USER_TOKEN_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--gitlab-enterprise-config-host-uri",
              description:
                "The URI of the GitLab Enterprise host this connection is for",
              priority: 100,
              args: {
                name: "GITLAB_ENTERPRISE_CONFIG_HOST_URI",
                description: "String",
              },
            },
            {
              name: "--gitlab-enterprise-config-read-authorizer-credential-user-token-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "GITLAB_ENTERPRISE_CONFIG_READ_AUTHORIZER_CREDENTIAL_USER_TOKEN_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--gitlab-enterprise-config-service-directory",
              description:
                "ID of the service or fully qualified identifier for the service",
              priority: 100,
              args: {
                name: "GITLAB_ENTERPRISE_CONFIG_SERVICE_DIRECTORY",
                description: "String",
              },
            },
            {
              name: "--gitlab-enterprise-config-ssl-ca-certificate",
              description:
                "SSL Certificate Authority certificate to use for requests to GitLab Enterprise instance",
              args: {
                name: "GITLAB_ENTERPRISE_CONFIG_SSL_CA_CERTIFICATE",
                description: "String",
              },
            },
            {
              name: "--gitlab-enterprise-config-webhook-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "GITLAB_ENTERPRISE_CONFIG_WEBHOOK_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--http-config-basic-authentication-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "HTTP_CONFIG_BASIC_AUTHENTICATION_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--http-config-basic-authentication-username",
              description: "The username to authenticate as",
              priority: 100,
              args: {
                name: "HTTP_CONFIG_BASIC_AUTHENTICATION_USERNAME",
                description: "String",
              },
            },
            {
              name: "--http-config-bearer-token-authentication-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "HTTP_CONFIG_BEARER_TOKEN_AUTHENTICATION_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--http-config-host-uri",
              description: "The service provider's https endpoint",
              priority: 100,
              args: {
                name: "HTTP_CONFIG_HOST_URI",
                description: "String",
              },
            },
            {
              name: "--http-config-service-directory",
              description:
                "ID of the service or fully qualified identifier for the service",
              priority: 100,
              args: {
                name: "HTTP_CONFIG_SERVICE_DIRECTORY",
                description: "String",
              },
            },
            {
              name: "--http-config-ssl-ca-certificate",
              description:
                "The SSL certificate to use for requests to the HTTP service provider",
              args: {
                name: "HTTP_CONFIG_SSL_CA_CERTIFICATE",
                description: "String",
              },
            },
            optImpersonateServiceAccount,
            {
              name: "--key-ring",
              description: "The keyRing id of the cryptoKey resource",
              args: {
                name: "KEY_RING",
                description: "String",
              },
            },
            {
              name: "--labels",
              description: "Labels as key value pairs",
              args: {
                name: "LABELS",
              },
            },
            {
              name: "--location",
              description:
                "For resources [connection, bitbucket-cloud-config-authorizer-credential-user-token-secret-version, bitbucket-cloud-config-read-authorizer-credential-user-token-secret-version, bitbucket-cloud-config-webhook-secret-version, bitbucket-data-center-config-authorizer-credential-user-token-secret-version, bitbucket-data-center-config-read-authorizer-credential-user-token-secret-version, bitbucket-data-center-config-service-directory, bitbucket-data-center-config-webhook-secret-version, crypto-key-config-reference, github-config-authorizer-credential-oauth-token-secret-version, github-enterprise-config-private-key-secret-version, github-enterprise-config-service-directory, github-enterprise-config-webhook-secret-version, gitlab-config-authorizer-credential-user-token-secret-version, gitlab-config-read-authorizer-credential-user-token-secret-version, gitlab-config-webhook-secret-version, gitlab-enterprise-config-authorizer-credential-user-token-secret-version, gitlab-enterprise-config-read-authorizer-credential-user-token-secret-version, gitlab-enterprise-config-service-directory, gitlab-enterprise-config-webhook-secret-version, http-config-basic-authentication-password-secret-version, http-config-bearer-token-authentication-secret-version, http-config-service-directory, secure-source-manager-instance-config], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--namespace",
              description:
                "For resources [bitbucket-data-center-config-service-directory, github-enterprise-config-service-directory, gitlab-enterprise-config-service-directory, http-config-service-directory], provides fallback value for resource namespace attribute. When the resource's full URI path is not provided, namespace will fallback to this flag value",
              args: {
                name: "NAMESPACE",
                description: "String",
              },
            },
            optNoAsync,
            {
              name: "--no-disabled",
              description:
                "If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled",
              hidden: true,
            },
            {
              name: "--no-git-proxy-config-enabled",
              description:
                "Setting this to true allows the git proxy to be used for performing git operations on the repositories linked in the connection",
              hidden: true,
            },
            optNoValidateOnly,
            optProject,
            optQuiet,
            optRequestId2,
            {
              name: "--secret",
              description:
                "For resources [bitbucket-cloud-config-authorizer-credential-user-token-secret-version, bitbucket-cloud-config-read-authorizer-credential-user-token-secret-version, bitbucket-cloud-config-webhook-secret-version, bitbucket-data-center-config-authorizer-credential-user-token-secret-version, bitbucket-data-center-config-read-authorizer-credential-user-token-secret-version, bitbucket-data-center-config-webhook-secret-version, github-config-authorizer-credential-oauth-token-secret-version, github-enterprise-config-private-key-secret-version, github-enterprise-config-webhook-secret-version, gitlab-config-authorizer-credential-user-token-secret-version, gitlab-config-read-authorizer-credential-user-token-secret-version, gitlab-config-webhook-secret-version, gitlab-enterprise-config-authorizer-credential-user-token-secret-version, gitlab-enterprise-config-read-authorizer-credential-user-token-secret-version, gitlab-enterprise-config-webhook-secret-version, http-config-basic-authentication-password-secret-version, http-config-bearer-token-authentication-secret-version], provides fallback value for resource secret attribute. When the resource's full URI path is not provided, secret will fallback to this flag value",
              args: {
                name: "SECRET",
                description: "String",
              },
            },
            {
              name: "--secure-source-manager-instance-config",
              description:
                "ID of the instance or fully qualified identifier for the instance",
              priority: 100,
              args: {
                name: "SECURE_SOURCE_MANAGER_INSTANCE_CONFIG",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optValidateOnly,
            optVerbosity,
          ],
          args: {
            name: "CONNECTION",
            description:
              "ID of the connection or fully qualified identifier for the connection",
          },
        },
        {
          name: "delete",
          description: "Delete a single connection",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--etag",
              description:
                "The current etag of the Connection. If an etag is provided and does not match the current etag of the Connection, deletion will be blocked and an ABORTED error will be returned",
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
            optLocation2,
            optLogHttp,
            optNoAsync,
            optNoValidateOnly,
            optProject,
            optQuiet,
            optRequestId,
            optTraceToken,
            optUserOutputEnabled,
            optValidateOnly,
            optVerbosity,
          ],
          args: {
            name: "CONNECTION",
            description:
              "ID of the connection or fully qualified identifier for the connection",
          },
        },
        {
          name: "describe",
          description: "Get details of a single connection resource",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "CONNECTION",
            description:
              "ID of the connection or fully qualified identifier for the connection",
          },
        },
        {
          name: "git-repository-links",
          description: "Manage git repository link resources",
          subcommands: [
            {
              name: "create",
              description: "Create a git repository link",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--annotations",
                  description:
                    "Allows clients to store small amounts of arbitrary data",
                  args: {
                    name: "ANNOTATIONS",
                  },
                },
                optAsync,
                optBillingProject,
                {
                  name: "--clone-uri",
                  description: "Git Clone URI",
                  priority: 100,
                  args: {
                    name: "CLONE_URI",
                    description: "String",
                  },
                },
                optConfiguration,
                optConnection,
                optEtag,
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
                  description: "Labels as key value pairs",
                  args: {
                    name: "LABELS",
                  },
                },
                optLocation3,
                optLogHttp,
                optNoAsync,
                optNoValidateOnly,
                optProject,
                optQuiet,
                optRequestId2,
                optTraceToken,
                optUserOutputEnabled,
                optValidateOnly,
                optVerbosity,
              ],
              args: {
                name: "GIT_REPOSITORY_LINK",
                description:
                  "ID of the gitRepositoryLink or fully qualified identifier for the gitRepositoryLink",
              },
            },
            {
              name: "delete",
              description: "Delete a single git repository link",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                optConnection,
                optEtag,
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
                optNoAsync,
                optNoValidateOnly,
                optProject,
                optQuiet,
                optRequestId,
                optTraceToken,
                optUserOutputEnabled,
                optValidateOnly,
                optVerbosity,
              ],
              args: {
                name: "GIT_REPOSITORY_LINK",
                description:
                  "ID of the gitRepositoryLink or fully qualified identifier for the gitRepositoryLink",
              },
            },
            {
              name: "describe",
              description: "Get details of a single git repository link",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optConnection,
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
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "GIT_REPOSITORY_LINK",
                description:
                  "ID of the gitRepositoryLink or fully qualified identifier for the gitRepositoryLink",
              },
            },
            {
              name: "fetch-read-token",
              description: "Fetch the read token of a given gitRepositoryLink",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optConnection,
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
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "GIT_REPOSITORY_LINK",
                description:
                  "ID of the gitRepositoryLink or fully qualified identifier for the gitRepositoryLink",
              },
            },
            {
              name: "fetch-read-write-token",
              description:
                "Fetch the read/write token of a given gitRepositoryLink",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optConnection,
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
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "GIT_REPOSITORY_LINK",
                description:
                  "ID of the gitRepositoryLink or fully qualified identifier for the gitRepositoryLink",
              },
            },
            {
              name: "list",
              description: "List all git repository links in a connection",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--connection",
                  description:
                    "ID of the connection or fully qualified identifier for the connection",
                  priority: 100,
                  args: {
                    name: "CONNECTION",
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
          name: "list",
          description: "List connections",
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
          name: "update",
          description: "Update the parameters of a single connection",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--allow-missing",
              description:
                "If set to true, and the connection is not found a new connection will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input connection has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties). Use *--allow-missing* to enable and *--no-allow-missing* to disable",
            },
            {
              name: "--annotations",
              description:
                "Set annotations to new value. Allows clients to store small amounts of arbitrary data",
              args: {
                name: "ANNOTATIONS",
              },
            },
            optAsync,
            optBillingProject,
            {
              name: "--bitbucket-cloud-config-authorizer-credential-user-token-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "BITBUCKET_CLOUD_CONFIG_AUTHORIZER_CREDENTIAL_USER_TOKEN_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--bitbucket-cloud-config-read-authorizer-credential-user-token-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "BITBUCKET_CLOUD_CONFIG_READ_AUTHORIZER_CREDENTIAL_USER_TOKEN_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--bitbucket-cloud-config-workspace",
              description:
                "The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform",
              args: {
                name: "BITBUCKET_CLOUD_CONFIG_WORKSPACE",
                description: "String",
              },
            },
            {
              name: "--bitbucket-data-center-config-authorizer-credential-user-token-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "BITBUCKET_DATA_CENTER_CONFIG_AUTHORIZER_CREDENTIAL_USER_TOKEN_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--bitbucket-data-center-config-host-uri",
              description:
                "The URI of the Bitbucket Data Center host this connection is for",
              args: {
                name: "BITBUCKET_DATA_CENTER_CONFIG_HOST_URI",
                description: "String",
              },
            },
            {
              name: "--bitbucket-data-center-config-read-authorizer-credential-user-token-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "BITBUCKET_DATA_CENTER_CONFIG_READ_AUTHORIZER_CREDENTIAL_USER_TOKEN_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--bitbucket-data-center-config-service-directory",
              description:
                "ID of the service or fully qualified identifier for the service",
              priority: 100,
              args: {
                name: "BITBUCKET_DATA_CENTER_CONFIG_SERVICE_DIRECTORY",
                description: "String",
              },
            },
            {
              name: "--bitbucket-data-center-config-ssl-ca-certificate",
              description:
                "SSL certificate authority to trust when making requests to Bitbucket Data Center",
              args: {
                name: "BITBUCKET_DATA_CENTER_CONFIG_SSL_CA_CERTIFICATE",
                description: "String",
              },
            },
            {
              name: "--clear-annotations",
              description: "Clear annotations value and set to empty map",
            },
            {
              name: "--clear-bitbucket-cloud-config",
              description:
                "Set connection.bitbucketCloudConfig back to default value",
            },
            {
              name: "--clear-bitbucket-data-center-config",
              description:
                "Set connection.bitbucketDataCenterConfig back to default value",
            },
            {
              name: "--clear-crypto-key-config",
              description:
                "Set connection.cryptoKeyConfig back to default value",
            },
            {
              name: "--clear-git-proxy-config",
              description:
                "Set connection.gitProxyConfig back to default value",
            },
            {
              name: "--clear-github-config",
              description: "Set connection.githubConfig back to default value",
            },
            {
              name: "--clear-github-enterprise-config",
              description:
                "Set connection.githubEnterpriseConfig back to default value",
            },
            {
              name: "--clear-github-enterprise-config-private-key-secret-version",
              description:
                "Clear github_enterprise_config_private_key_secret_version value and set to null",
            },
            {
              name: "--clear-github-enterprise-config-webhook-secret-version",
              description:
                "Clear github_enterprise_config_webhook_secret_version value and set to null",
            },
            {
              name: "--clear-gitlab-config",
              description: "Set connection.gitlabConfig back to default value",
            },
            {
              name: "--clear-gitlab-enterprise-config",
              description:
                "Set connection.gitlabEnterpriseConfig back to default value",
            },
            {
              name: "--clear-http-config",
              description: "Set connection.httpConfig back to default value",
            },
            {
              name: "--clear-http-config-basic-authentication-password-secret-version",
              description:
                "Clear http_config_basic_authentication_password_secret_version value and set to null",
            },
            {
              name: "--clear-http-config-bearer-token-authentication-secret-version",
              description:
                "Clear http_config_bearer_token_authentication_secret_version value and set to null",
            },
            {
              name: "--clear-labels",
              description: "Clear labels value and set to empty map",
            },
            optConfiguration,
            {
              name: "--crypto-key-config-reference",
              description:
                "ID of the cryptoKey or fully qualified identifier for the cryptoKey",
              priority: 100,
              args: {
                name: "CRYPTO_KEY_CONFIG_REFERENCE",
                description: "String",
              },
            },
            {
              name: "--disabled",
              description:
                "If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled. Use *--disabled* to enable and *--no-disabled* to disable",
            },
            optEtag,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--git-proxy-config-enabled",
              description:
                "Setting this to true allows the git proxy to be used for performing git operations on the repositories linked in the connection. Use *--git-proxy-config-enabled* to enable and *--no-git-proxy-config-enabled* to disable",
            },
            {
              name: "--github-config-app-installation-id",
              description: "GitHub App installation id",
              args: {
                name: "GITHUB_CONFIG_APP_INSTALLATION_ID",
                description: "Int",
              },
            },
            {
              name: "--github-config-authorizer-credential-oauth-token-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "GITHUB_CONFIG_AUTHORIZER_CREDENTIAL_OAUTH_TOKEN_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--github-enterprise-config-app-id",
              description: "ID of the GitHub App created from the manifest",
              args: {
                name: "GITHUB_ENTERPRISE_CONFIG_APP_ID",
                description: "Int",
              },
            },
            {
              name: "--github-enterprise-config-app-installation-id",
              description: "ID of the installation of the GitHub App",
              args: {
                name: "GITHUB_ENTERPRISE_CONFIG_APP_INSTALLATION_ID",
                description: "Int",
              },
            },
            {
              name: "--github-enterprise-config-host-uri",
              description:
                "The URI of the GitHub Enterprise host this connection is for",
              args: {
                name: "GITHUB_ENTERPRISE_CONFIG_HOST_URI",
                description: "String",
              },
            },
            {
              name: "--github-enterprise-config-private-key-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "GITHUB_ENTERPRISE_CONFIG_PRIVATE_KEY_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--github-enterprise-config-service-directory",
              description:
                "ID of the service or fully qualified identifier for the service",
              priority: 100,
              args: {
                name: "GITHUB_ENTERPRISE_CONFIG_SERVICE_DIRECTORY",
                description: "String",
              },
            },
            {
              name: "--github-enterprise-config-ssl-ca-certificate",
              description:
                "SSL certificate to use for requests to GitHub Enterprise",
              args: {
                name: "GITHUB_ENTERPRISE_CONFIG_SSL_CA_CERTIFICATE",
                description: "String",
              },
            },
            {
              name: "--github-enterprise-config-webhook-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "GITHUB_ENTERPRISE_CONFIG_WEBHOOK_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--gitlab-config-authorizer-credential-user-token-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "GITLAB_CONFIG_AUTHORIZER_CREDENTIAL_USER_TOKEN_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--gitlab-config-read-authorizer-credential-user-token-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "GITLAB_CONFIG_READ_AUTHORIZER_CREDENTIAL_USER_TOKEN_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--gitlab-enterprise-config-authorizer-credential-user-token-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "GITLAB_ENTERPRISE_CONFIG_AUTHORIZER_CREDENTIAL_USER_TOKEN_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--gitlab-enterprise-config-host-uri",
              description:
                "The URI of the GitLab Enterprise host this connection is for",
              args: {
                name: "GITLAB_ENTERPRISE_CONFIG_HOST_URI",
                description: "String",
              },
            },
            {
              name: "--gitlab-enterprise-config-read-authorizer-credential-user-token-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "GITLAB_ENTERPRISE_CONFIG_READ_AUTHORIZER_CREDENTIAL_USER_TOKEN_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--gitlab-enterprise-config-service-directory",
              description:
                "ID of the service or fully qualified identifier for the service",
              priority: 100,
              args: {
                name: "GITLAB_ENTERPRISE_CONFIG_SERVICE_DIRECTORY",
                description: "String",
              },
            },
            {
              name: "--gitlab-enterprise-config-ssl-ca-certificate",
              description:
                "SSL Certificate Authority certificate to use for requests to GitLab Enterprise instance",
              args: {
                name: "GITLAB_ENTERPRISE_CONFIG_SSL_CA_CERTIFICATE",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--http-config-basic-authentication-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "HTTP_CONFIG_BASIC_AUTHENTICATION_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--http-config-basic-authentication-username",
              description: "The username to authenticate as",
              args: {
                name: "HTTP_CONFIG_BASIC_AUTHENTICATION_USERNAME",
                description: "String",
              },
            },
            {
              name: "--http-config-bearer-token-authentication-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion",
              priority: 100,
              args: {
                name: "HTTP_CONFIG_BEARER_TOKEN_AUTHENTICATION_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--http-config-service-directory",
              description:
                "ID of the service or fully qualified identifier for the service",
              priority: 100,
              args: {
                name: "HTTP_CONFIG_SERVICE_DIRECTORY",
                description: "String",
              },
            },
            {
              name: "--http-config-ssl-ca-certificate",
              description:
                "The SSL certificate to use for requests to the HTTP service provider",
              args: {
                name: "HTTP_CONFIG_SSL_CA_CERTIFICATE",
                description: "String",
              },
            },
            optImpersonateServiceAccount,
            {
              name: "--key-ring",
              description: "The keyRing id of the cryptoKey resource",
              args: {
                name: "KEY_RING",
                description: "String",
              },
            },
            {
              name: "--labels",
              description: "Set labels to new value. Labels as key value pairs",
              args: {
                name: "LABELS",
              },
            },
            {
              name: "--location",
              description:
                "For resources [connection, bitbucket-cloud-config-authorizer-credential-user-token-secret-version, bitbucket-cloud-config-read-authorizer-credential-user-token-secret-version, bitbucket-data-center-config-authorizer-credential-user-token-secret-version, bitbucket-data-center-config-read-authorizer-credential-user-token-secret-version, bitbucket-data-center-config-service-directory, crypto-key-config-reference, github-config-authorizer-credential-oauth-token-secret-version, github-enterprise-config-private-key-secret-version, github-enterprise-config-service-directory, github-enterprise-config-webhook-secret-version, gitlab-config-authorizer-credential-user-token-secret-version, gitlab-config-read-authorizer-credential-user-token-secret-version, gitlab-enterprise-config-authorizer-credential-user-token-secret-version, gitlab-enterprise-config-read-authorizer-credential-user-token-secret-version, gitlab-enterprise-config-service-directory, http-config-basic-authentication-password-secret-version, http-config-bearer-token-authentication-secret-version, http-config-service-directory], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--namespace",
              description:
                "For resources [bitbucket-data-center-config-service-directory, github-enterprise-config-service-directory, gitlab-enterprise-config-service-directory, http-config-service-directory], provides fallback value for resource namespace attribute. When the resource's full URI path is not provided, namespace will fallback to this flag value",
              args: {
                name: "NAMESPACE",
                description: "String",
              },
            },
            {
              name: "--no-allow-missing",
              description:
                "If set to true, and the connection is not found a new connection will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input connection has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties)",
            },
            optNoAsync,
            {
              name: "--no-clear-annotations",
              description: "Clear annotations value and set to empty map",
              hidden: true,
            },
            {
              name: "--no-clear-bitbucket-cloud-config",
              description:
                "Set connection.bitbucketCloudConfig back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-bitbucket-data-center-config",
              description:
                "Set connection.bitbucketDataCenterConfig back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-crypto-key-config",
              description:
                "Set connection.cryptoKeyConfig back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-git-proxy-config",
              description:
                "Set connection.gitProxyConfig back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-github-config",
              description: "Set connection.githubConfig back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-github-enterprise-config",
              description:
                "Set connection.githubEnterpriseConfig back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-github-enterprise-config-private-key-secret-version",
              description:
                "Clear github_enterprise_config_private_key_secret_version value and set to null",
              hidden: true,
            },
            {
              name: "--no-clear-github-enterprise-config-webhook-secret-version",
              description:
                "Clear github_enterprise_config_webhook_secret_version value and set to null",
              hidden: true,
            },
            {
              name: "--no-clear-gitlab-config",
              description: "Set connection.gitlabConfig back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-gitlab-enterprise-config",
              description:
                "Set connection.gitlabEnterpriseConfig back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-http-config",
              description: "Set connection.httpConfig back to default value",
              hidden: true,
            },
            {
              name: "--no-clear-http-config-basic-authentication-password-secret-version",
              description:
                "Clear http_config_basic_authentication_password_secret_version value and set to null",
              hidden: true,
            },
            {
              name: "--no-clear-http-config-bearer-token-authentication-secret-version",
              description:
                "Clear http_config_bearer_token_authentication_secret_version value and set to null",
              hidden: true,
            },
            {
              name: "--no-clear-labels",
              description: "Clear labels value and set to empty map",
              hidden: true,
            },
            {
              name: "--no-disabled",
              description:
                "If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled",
            },
            {
              name: "--no-git-proxy-config-enabled",
              description:
                "Setting this to true allows the git proxy to be used for performing git operations on the repositories linked in the connection",
            },
            {
              name: "--no-validate-only",
              description:
                "If set, validate the request, but do not actually post it",
            },
            optProject,
            optQuiet,
            {
              name: "--remove-annotations",
              description:
                "Remove existing value from map annotations. Sets `remove_annotations` value",
              args: {
                name: "REMOVE_ANNOTATIONS",
                description: "Dict",
              },
            },
            {
              name: "--remove-labels",
              description:
                "Remove existing value from map labels. Sets `remove_labels` value",
              args: {
                name: "REMOVE_LABELS",
                description: "Dict",
              },
            },
            optRequestId2,
            {
              name: "--secret",
              description:
                "For resources [bitbucket-cloud-config-authorizer-credential-user-token-secret-version, bitbucket-cloud-config-read-authorizer-credential-user-token-secret-version, bitbucket-data-center-config-authorizer-credential-user-token-secret-version, bitbucket-data-center-config-read-authorizer-credential-user-token-secret-version, github-config-authorizer-credential-oauth-token-secret-version, github-enterprise-config-private-key-secret-version, github-enterprise-config-webhook-secret-version, gitlab-config-authorizer-credential-user-token-secret-version, gitlab-config-read-authorizer-credential-user-token-secret-version, gitlab-enterprise-config-authorizer-credential-user-token-secret-version, gitlab-enterprise-config-read-authorizer-credential-user-token-secret-version, http-config-basic-authentication-password-secret-version, http-config-bearer-token-authentication-secret-version], provides fallback value for resource secret attribute. When the resource's full URI path is not provided, secret will fallback to this flag value",
              args: {
                name: "SECRET",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--update-annotations",
              description:
                "Update annotations value or add key value pair. Allows clients to store small amounts of arbitrary data",
              args: {
                name: "UPDATE_ANNOTATIONS",
              },
            },
            {
              name: "--update-labels",
              description:
                "Update labels value or add key value pair. Labels as key value pairs",
              args: {
                name: "UPDATE_LABELS",
              },
            },
            optUserOutputEnabled,
            {
              name: "--validate-only",
              description:
                "If set, validate the request, but do not actually post it. Use *--validate-only* to enable and *--no-validate-only* to disable",
            },
            optVerbosity,
          ],
          args: {
            name: "CONNECTION",
            description:
              "ID of the connection or fully qualified identifier for the connection",
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
      name: "insights-configs",
      description: "Manage Insights Config resources",
      subcommands: [
        {
          name: "create",
          description: "Create an insight config",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--app-hub-application",
              description:
                "The App Hub application to which the insight config is associated",
              args: {
                name: "APP_HUB_APPLICATION",
                description: "String",
              },
            },
            {
              name: "--artifact-config",
              description:
                "Specifies a single artifact configuration. This flag can be repeated for multiple configurations",
              isRepeatable: true,
              args: {
                name: "ARTIFACT_CONFIG_ITEM",
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
              name: "--location",
              description: "The region of the insight config",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--source-config",
              description: "The source config of the git repository link",
              args: {
                name: "SOURCE_CONFIG",
                description: "Dict",
              },
            },
            {
              name: "--target-projects",
              description:
                "A comma-separated list of target project IDs/numbers to which the insight config is associated",
              args: {
                name: "TARGET_PROJECTS",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSIGHTS_CONFIG",
            description:
              "ID of the insights_config or fully qualified identifier for the insights_config",
          },
        },
        {
          name: "delete",
          description: "Delete insightsConfigs",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
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
            {
              name: "--location",
              description: "The location id of the insightsConfig resource",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optNoAsync,
            optNoValidateOnly,
            optProject,
            optQuiet,
            optRequestId,
            optTraceToken,
            optUserOutputEnabled,
            optValidateOnly,
            optVerbosity,
          ],
          args: {
            name: "INSIGHTS_CONFIG",
            description:
              "ID of the insightsConfig or fully qualified identifier for the insightsConfig",
          },
        },
        {
          name: "describe",
          description: "Describe insightsConfigs",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              description: "The location id of the insightsConfig resource",
              args: {
                name: "LOCATION",
                description: "String",
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
            name: "INSIGHTS_CONFIG",
            description:
              "ID of the insightsConfig or fully qualified identifier for the insightsConfig",
          },
        },
        {
          name: "list",
          description: "List insightsConfigs",
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
          name: "update",
          description: "Update the configuration of an insight config",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--artifact-uri",
              description:
                "Identifier for the specific artifact you want to update",
              priority: 100,
              args: {
                name: "ARTIFACT_URI",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--build-project",
              description:
                "The project ID of the project to where the artifact is built",
              priority: 100,
              args: {
                name: "BUILD_PROJECT",
                description: "String",
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
            {
              name: "--location",
              description: "The region of the insight config",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--no-run-discovery",
              description:
                "Sets the state of the insight config to PENDING and kicks off the discovery flow",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--run-discovery",
              description:
                "Sets the state of the insight config to PENDING and kicks off the discovery flow",
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "INSIGHTS_CONFIG",
            description:
              "ID of the insights_config or fully qualified identifier for the insights_config",
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
      description: "Manage Operation resources",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel operations",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "delete",
          description: "Delete operations",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "describe",
          description: "Describe operations",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "list",
          description: "List operations",
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
          name: "wait",
          description: "Wait operations",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
