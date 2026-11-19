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

const optAppInstallationId: Fig.Option = {
  name: "--app-installation-id",
  description: "Installation ID of the Cloud Build GitHub App",
  args: {
    name: "APP_INSTALLATION_ID",
    description: "Int",
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

const optBitbucketServerConfig: Fig.Option = {
  name: "--bitbucket-server-config",
  description:
    "The resource name of the Bitbucket Server config that should be applied to this source (1st gen). Format: projects/{project}/locations/{location}/bitbucketServerConfigs/{id}",
  hidden: true,
  args: {
    name: "BITBUCKET_SERVER_CONFIG",
    description: "String",
  },
};

const optBranch: Fig.Option = {
  name: "--branch",
  description: "Branch to build",
  args: {
    name: "BRANCH",
    description: "String",
  },
};

const optBranchPattern: Fig.Option = {
  name: "--branch-pattern",
  description: "A regular expression specifying which git branches to match",
  args: {
    name: "REGEX",
    description: "String",
  },
};

const optBuildConfig: Fig.Option = {
  name: "--build-config",
  description:
    "Path to a YAML or JSON file containing the build configuration in the repository",
  args: {
    name: "PATH",
    description: "String",
  },
};

const optCommentControl: Fig.Option = {
  name: "--comment-control",
  description:
    "Require a repository collaborator or owner to comment '/gcbrun' on a pull request before running the build. _COMMENT_CONTROL_ must be one of:",
  args: {
    name: "COMMENT_CONTROL",
    description: "String",
    suggestions: [
      "COMMENTS_DISABLED",
      "COMMENTS_ENABLED",
      "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY",
    ],
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
  description: "Connection ID",
  args: {
    name: "CONNECTION",
    description: "String",
  },
};

const optDescription: Fig.Option = {
  name: "--description",
  description: "Build trigger description",
  args: {
    name: "DESCRIPTION",
    description: "String",
  },
};

const optDockerfile: Fig.Option = {
  name: "--dockerfile",
  description: "Path of Dockerfile to use for builds in the repository",
  priority: 100,
  args: {
    name: "DOCKERFILE",
    description: "String",
  },
};

const optDockerfileDir: Fig.Option = {
  name: "--dockerfile-dir",
  description:
    "Location of the directory containing the Dockerfile in the repository",
  args: {
    name: "DOCKERFILE_DIR",
    description: "String",
  },
};

const optDockerfileImage: Fig.Option = {
  name: "--dockerfile-image",
  description: "Docker image name to build",
  priority: 100,
  args: {
    name: "DOCKERFILE_IMAGE",
    description: "String",
  },
};

const optDockerfileImage2: Fig.Option = {
  name: "--dockerfile-image",
  description: "Docker image name to build",
  args: {
    name: "DOCKERFILE_IMAGE",
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

const optGitFileSourceBranch: Fig.Option = {
  name: "--git-file-source-branch",
  description: "The branch of the repository to clone when trigger is invoked",
  args: {
    name: "GIT_FILE_SOURCE_BRANCH",
    description: "String",
  },
};

const optGitFileSourceGithubEnterpriseConfig: Fig.Option = {
  name: "--git-file-source-github-enterprise-config",
  description:
    "The resource name of the GitHub Enterprise config that should be applied to this source",
  args: {
    name: "GIT_FILE_SOURCE_GITHUB_ENTERPRISE_CONFIG",
    description: "String",
  },
};

const optGitFileSourcePath: Fig.Option = {
  name: "--git-file-source-path",
  description: "The file in the repository to clone when trigger is invoked",
  args: {
    name: "PATH",
    description: "String",
  },
};

const optGitFileSourceRepoType: Fig.Option = {
  name: "--git-file-source-repo-type",
  description: "The type of the repository to clone when trigger is invoked",
  priority: 100,
  args: {
    name: "GIT_FILE_SOURCE_REPO_TYPE",
    description: "String",
  },
};

const optGitFileSourceRepository: Fig.Option = {
  name: "--git-file-source-repository",
  description:
    'Repository resource (2nd gen) to use, in the format "projects/*/locations/*/connections/*/repositories/*"',
  hidden: true,
  args: {
    name: "GIT_FILE_SOURCE_REPOSITORY",
    description: "String",
  },
};

const optGitFileSourceTag: Fig.Option = {
  name: "--git-file-source-tag",
  description: "The tag of the repository to clone when trigger is invoked",
  args: {
    name: "GIT_FILE_SOURCE_TAG",
    description: "String",
  },
};

const optGitFileSourceUri: Fig.Option = {
  name: "--git-file-source-uri",
  description: "The URI of the repository to clone when trigger is invoked",
  priority: 100,
  args: {
    name: "URL",
    description: "String",
  },
};

const optGithubEnterpriseConfig: Fig.Option = {
  name: "--github-enterprise-config",
  description:
    "The resource name of the GitHub Enterprise config that should be applied to this source (1st gen). Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id} or projects/{project}/githubEnterpriseConfigs/{id}",
  args: {
    name: "GITHUB_ENTERPRISE_CONFIG",
    description: "String",
  },
};

const optIgnoredFiles: Fig.Option = {
  name: "--ignored-files",
  description:
    "Glob filter. Changes only affecting ignored files won't trigger builds",
  args: {
    name: "GLOB",
    description: "List",
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

const optIncludedFiles: Fig.Option = {
  name: "--included-files",
  description:
    "Glob filter. Changes affecting at least one included file will trigger builds",
  args: {
    name: "GLOB",
    description: "List",
  },
};

const optInlineConfig: Fig.Option = {
  name: "--inline-config",
  description:
    "Local path to a YAML or JSON file containing a build configuration",
  args: {
    name: "PATH",
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

const optName: Fig.Option = {
  name: "--name",
  description: "Build trigger name",
  args: {
    name: "NAME",
    description: "String",
  },
};

const optNoAsync: Fig.Option = {
  name: "--no-async",
  description:
    "Return immediately, without waiting for the operation in progress to complete",
  hidden: true,
};

const optNoClearSubstitutions: Fig.Option = {
  name: "--no-clear-substitutions",
  description: "Clear existing substitutions",
  hidden: true,
};

const optNoRequireApproval: Fig.Option = {
  name: "--no-require-approval",
  description: "Require manual approval for triggered builds",
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

const optPullRequestPattern: Fig.Option = {
  name: "--pull-request-pattern",
  description:
    "A regular expression specifying which base git branch to match for pull request events",
  args: {
    name: "REGEX",
    description: "String",
  },
};

const optPullRequestPattern2: Fig.Option = {
  name: "--pull-request-pattern",
  description:
    "Regular expression specifying which base git branch to match for pull request events",
  priority: 100,
  args: {
    name: "REGEX",
    description: "String",
  },
};

const optQuiet: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input is required, defaults will be used, or an error will be raised",
};

const optRegion: Fig.Option = {
  name: "--region",
  description: "The Cloud location for the trigger",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion2: Fig.Option = {
  name: "--region",
  description: "The Google Cloud region",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRegion3: Fig.Option = {
  name: "--region",
  description:
    "The region of the Cloud Build Service to use. Must be set to a supported region name (e.g. `us-central1`). If unset, `builds/region`, which is the default region to use when working with Cloud Build resources, is used. If builds/region is unset, region is set to `global`. Note: Region must be specified in 2nd gen repo; `global` is not supported",
  args: {
    name: "REGION",
    description: "String",
  },
};

const optRemoveSubstitutions: Fig.Option = {
  name: "--remove-substitutions",
  description: "Remove existing substitutions if present",
  args: {
    name: "KEY",
    description: "List",
  },
};

const optRepo: Fig.Option = {
  name: "--repo",
  description:
    "URI of the repository (1st gen). Currently only HTTP URIs for GitHub and Cloud Source Repositories are supported",
  priority: 100,
  args: {
    name: "REPO",
    description: "String",
  },
};

const optRepoType: Fig.Option = {
  name: "--repo-type",
  description:
    "Type of the repository (1st gen). Currently only GitHub and Cloud Source Repository types are supported",
  priority: 100,
  args: {
    name: "REPO_TYPE",
    description: "String",
  },
};

const optRepository: Fig.Option = {
  name: "--repository",
  description:
    'Repository resource (2nd gen) to use, in the format "projects/*/locations/*/connections/*/repositories/*"',
  args: {
    name: "REPOSITORY",
    description: "String",
  },
};

const optRequireApproval: Fig.Option = {
  name: "--require-approval",
  description:
    "Require manual approval for triggered builds. Use *--require-approval* to enable and *--no-require-approval* to disable",
};

const optServiceAccount: Fig.Option = {
  name: "--service-account",
  description:
    "The service account used for all user-controlled operations including UpdateBuildTrigger, RunBuildTrigger, CreateBuild, and CancelBuild. If no service account is set, then the standard Cloud Build service account ([PROJECT_NUM]@system.gserviceaccount.com) is used instead. Format: `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT_ID_OR_EMAIL}`",
  args: {
    name: "SERVICE_ACCOUNT",
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

const optSourceToBuildBranch: Fig.Option = {
  name: "--source-to-build-branch",
  description: "Branch to build",
  args: {
    name: "SOURCE_TO_BUILD_BRANCH",
    description: "String",
  },
};

const optSourceToBuildGithubEnterpriseConfig: Fig.Option = {
  name: "--source-to-build-github-enterprise-config",
  description:
    "The resource name of the GitHub Enterprise config that should be applied to this source (1st gen). Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id} or projects/{project}/githubEnterpriseConfigs/{id}",
  args: {
    name: "SOURCE_TO_BUILD_GITHUB_ENTERPRISE_CONFIG",
    description: "String",
  },
};

const optSourceToBuildRepoType: Fig.Option = {
  name: "--source-to-build-repo-type",
  description:
    "Type of the repository (1st gen). Currently only GitHub and Cloud Source Repository types are supported",
  priority: 100,
  args: {
    name: "SOURCE_TO_BUILD_REPO_TYPE",
    description: "String",
  },
};

const optSourceToBuildRepository: Fig.Option = {
  name: "--source-to-build-repository",
  description:
    'Repository resource (2nd gen) to use, in the format "projects/*/locations/*/connections/*/repositories/*"',
  hidden: true,
  args: {
    name: "SOURCE_TO_BUILD_REPOSITORY",
    description: "String",
  },
};

const optSourceToBuildTag: Fig.Option = {
  name: "--source-to-build-tag",
  description: "Tag to build",
  args: {
    name: "SOURCE_TO_BUILD_TAG",
    description: "String",
  },
};

const optSourceToBuildUri: Fig.Option = {
  name: "--source-to-build-uri",
  description:
    "The URI of the repository that should be applied to this source (1st gen)",
  priority: 100,
  args: {
    name: "SOURCE_TO_BUILD_URI",
    description: "String",
  },
};

const optSslCaFile: Fig.Option = {
  name: "--ssl-ca-file",
  description: "File containing the SSL_CA to be used",
  args: {
    name: "SSL_CA_FILE",
    description: "String",
    template: "filepaths",
  },
};

const optSubscriptionFilter: Fig.Option = {
  name: "--subscription-filter",
  description:
    "CEL filter expression for the trigger. See https://cloud.google.com/build/docs/filter-build-events-using-cel for more details",
  args: {
    name: "SUBSCRIPTION_FILTER",
    description: "String",
  },
};

const optSubstitutions: Fig.Option = {
  name: "--substitutions",
  description:
    "Parameters to be substituted in the build specification. For example:",
  args: {
    name: "KEY=VALUE",
    description: "Dict",
  },
};

const optTag: Fig.Option = {
  name: "--tag",
  description: "Tag to build",
  args: {
    name: "TAG",
    description: "String",
  },
};

const optTagPattern: Fig.Option = {
  name: "--tag-pattern",
  description: "A regular expression specifying which git tags to match",
  args: {
    name: "REGEX",
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

const optTriggerConfig: Fig.Option = {
  name: "--trigger-config",
  description:
    "Path to Build Trigger config file (JSON or YAML format). For more details, see https://cloud.google.com/cloud-build/docs/api/reference/rest/v1/projects.triggers#BuildTrigger",
  args: {
    name: "PATH",
    description: "String",
  },
};

const optUpdateSubstitutions: Fig.Option = {
  name: "--update-substitutions",
  description:
    "Update or add to existing substitutions. Substitutions are parameters to be substituted or add in the build specification",
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
  name: "builds",
  description: "Create and manage builds for Google Cloud Build",
  subcommands: [
    {
      name: "cancel",
      description: "Cancel an ongoing build",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
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
        optRegion3,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "BUILDS",
        description: "IDs of builds to cancel",
        isVariadic: true,
      },
    },
    {
      name: "connections",
      description: "Manage connections for Google Cloud Build",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Cloud Build connection",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            optRegion2,
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
            name: "CONNECTION",
            description:
              "ID of the connection or fully qualified identifier for the connection",
          },
        },
        {
          name: "create",
          description: "Create Connections in Google Cloud Build",
          subcommands: [
            {
              name: "bitbucket-cloud",
              description:
                "Create a Cloud Build Connection for Bitbucket Cloud",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                {
                  name: "--authorizer-token-secret-version",
                  description:
                    "Secret containing the `repository_read`,`repository_admin`, `pullrequest_read`, `webhook` repository/project/workspace access token",
                  priority: 100,
                  args: {
                    name: "AUTHORIZER_TOKEN_SECRET_VERSION",
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
                {
                  name: "--read-authorizer-token-secret-version",
                  description:
                    "Secret containing the `repository_read` repository/project/workspace access token",
                  priority: 100,
                  args: {
                    name: "READ_AUTHORIZER_TOKEN_SECRET_VERSION",
                    description: "String",
                  },
                },
                optRegion2,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--webhook-secret-secret-version",
                  description:
                    "Secret containing the webhook secret string for validating webhook events sent by Bitbucket Cloud",
                  priority: 100,
                  args: {
                    name: "WEBHOOK_SECRET_SECRET_VERSION",
                    description: "String",
                  },
                },
                {
                  name: "--workspace",
                  description: "Workspace of the Bitbucket Cloud instance",
                  priority: 100,
                  args: {
                    name: "WORKSPACE",
                    description: "String",
                  },
                },
              ],
              args: {
                name: "CONNECTION",
                description:
                  "ID of the connection or fully qualified identifier for the connection",
              },
            },
            {
              name: "bitbucket-data-center",
              description:
                "Create a Cloud Build Connection for Bitbucket Data Center",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                {
                  name: "--authorizer-token-secret-version",
                  description:
                    "Secret containing the REPO_ADMIN personal access token",
                  priority: 100,
                  args: {
                    name: "AUTHORIZER_TOKEN_SECRET_VERSION",
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
                {
                  name: "--host-uri",
                  description: "URI of the Bitbucket Data Center instance",
                  args: {
                    name: "HOST_URI",
                    description: "String",
                  },
                },
                optImpersonateServiceAccount,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                {
                  name: "--read-authorizer-token-secret-version",
                  description:
                    "Secret containing the REPO_READ personal access token",
                  priority: 100,
                  args: {
                    name: "READ_AUTHORIZER_TOKEN_SECRET_VERSION",
                    description: "String",
                  },
                },
                optRegion2,
                {
                  name: "--service-directory-service",
                  description:
                    "Service Directory service resource to use for accessing the Bitbucket Data Center. Necessary only if the server has no public access from the internet",
                  priority: 100,
                  args: {
                    name: "SERVICE_DIRECTORY_SERVICE",
                    description: "String",
                  },
                },
                optSslCaFile,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--webhook-secret-secret-version",
                  description:
                    "Secret containing the webhook secret string for validating webhook events sent by Bitbucket Data Center",
                  priority: 100,
                  args: {
                    name: "WEBHOOK_SECRET_SECRET_VERSION",
                    description: "String",
                  },
                },
              ],
              args: {
                name: "CONNECTION",
                description:
                  "ID of the connection or fully qualified identifier for the connection",
              },
            },
            {
              name: "github",
              description: "Create a Cloud Build Connection of type GitHub",
              options: [
                optAccessTokenFile,
                optAccount,
                optAppInstallationId,
                optAsync,
                {
                  name: "--authorizer-token-secret-version",
                  description: "Secret containing the authorizer user's token",
                  priority: 100,
                  args: {
                    name: "AUTHORIZER_TOKEN_SECRET_VERSION",
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
                optRegion2,
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
              name: "github-enterprise",
              description:
                "Create a Cloud Build Connection of type GitHub Enterprise",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--app-id",
                  description:
                    "App ID of the GitHub App in the GitHub Enterprise server",
                  priority: 100,
                  args: {
                    name: "APP_ID",
                    description: "Int",
                  },
                },
                optAppInstallationId,
                {
                  name: "--app-slug",
                  description:
                    'App slug (url-friendly name) of the GitHub App. When seeing the configuration page of the App (e.g. in https://my-ghe-server.net/settings/apps/my-app), the app-slug is the last component of the URL path ("my-app" in that example)',
                  priority: 100,
                  args: {
                    name: "APP_SLUG",
                    description: "String",
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
                {
                  name: "--host-uri",
                  description: "URI of the GitHub Enterprise server",
                  priority: 100,
                  args: {
                    name: "HOST_URI",
                    description: "String",
                  },
                },
                optImpersonateServiceAccount,
                optLogHttp,
                optNoAsync,
                {
                  name: "--private-key-secret-version",
                  description:
                    "Secret containing the private key of the GitHub App",
                  priority: 100,
                  args: {
                    name: "PRIVATE_KEY_SECRET_VERSION",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                optRegion2,
                {
                  name: "--service-directory-service",
                  description:
                    "Service Directory service resource to use for accessing the GitHub Enterprise Server. Necessary only if the server has no public access from the internet",
                  priority: 100,
                  args: {
                    name: "SERVICE_DIRECTORY_SERVICE",
                    description: "String",
                  },
                },
                optSslCaFile,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--webhook-secret-secret-version",
                  description:
                    "Secret containing the webhook secret string for validating webhook events generated by the GitHub App",
                  priority: 100,
                  args: {
                    name: "WEBHOOK_SECRET_SECRET_VERSION",
                    description: "String",
                  },
                },
              ],
              args: {
                name: "CONNECTION",
                description:
                  "ID of the connection or fully qualified identifier for the connection",
              },
            },
            {
              name: "gitlab",
              description:
                "Create a Cloud Build Connection for gitlab.com or GitLab Enterprise",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                {
                  name: "--authorizer-token-secret-version",
                  description:
                    "Secret containing the api personal access token",
                  priority: 100,
                  args: {
                    name: "AUTHORIZER_TOKEN_SECRET_VERSION",
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
                {
                  name: "--host-uri",
                  description: "URI of the GitLab instance",
                  args: {
                    name: "HOST_URI",
                    description: "String",
                  },
                },
                optImpersonateServiceAccount,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                {
                  name: "--read-authorizer-token-secret-version",
                  description:
                    "Secret containing the read_api personal access token",
                  priority: 100,
                  args: {
                    name: "READ_AUTHORIZER_TOKEN_SECRET_VERSION",
                    description: "String",
                  },
                },
                optRegion2,
                {
                  name: "--service-directory-service",
                  description:
                    "Service Directory service resource to use for accessing the gitlab.com or GitLab Enterprise Server. Necessary only if the server has no public access from the internet",
                  priority: 100,
                  args: {
                    name: "SERVICE_DIRECTORY_SERVICE",
                    description: "String",
                  },
                },
                optSslCaFile,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--webhook-secret-secret-version",
                  description:
                    "Secret containing the webhook secret string for validating webhook events sent by GitLab",
                  priority: 100,
                  args: {
                    name: "WEBHOOK_SECRET_SECRET_VERSION",
                    description: "String",
                  },
                },
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
          name: "delete",
          description: "Delete a Cloud Build Connection",
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
            optRegion2,
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
          name: "describe",
          description: "Describe a Cloud Build Connection",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            optRegion2,
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
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Build connection",
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
            optRegion2,
            optSortBy,
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
          name: "list",
          description:
            "List all Cloud Build connections for a project and region",
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
              name: "--region",
              description:
                "ID of the region or fully qualified identifier for the region",
              args: {
                name: "REGION",
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
          name: "set-iam-policy",
          description: "Set the IAM policy for a Cloud Build connection",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            optRegion2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "CONNECTION",
              description:
                "ID of the connection or fully qualified identifier for the connection",
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
          name: "update",
          description: "Update Connections in Google Cloud Build",
          subcommands: [
            {
              name: "bitbucket-cloud",
              description:
                "Update a Cloud Build Connection of type Bitbucket Cloud",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                {
                  name: "--authorizer-token-secret-version",
                  description:
                    "Secret containing the `repository_read`,`repository_admin`, `pullrequest_read`, `webhook` access token. It can be a repository, project or workspace access token",
                  args: {
                    name: "AUTHORIZER_TOKEN_SECRET_VERSION",
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
                {
                  name: "--read-authorizer-token-secret-version",
                  description:
                    "Secret containing the `repository_read` access token. It can be a repository, project or workspace access token",
                  args: {
                    name: "READ_AUTHORIZER_TOKEN_SECRET_VERSION",
                    description: "String",
                  },
                },
                optRegion2,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--webhook-secret-secret-version",
                  description:
                    "Secret containing the webhook secret string for validating webhook events sent by Bitbucket Cloud",
                  args: {
                    name: "WEBHOOK_SECRET_SECRET_VERSION",
                    description: "String",
                  },
                },
                {
                  name: "--workspace",
                  description: "Workspace of the Bitbucket Cloud instance",
                  args: {
                    name: "WORKSPACE",
                    description: "String",
                  },
                },
              ],
              args: {
                name: "CONNECTION",
                description:
                  "ID of the connection or fully qualified identifier for the connection",
              },
            },
            {
              name: "bitbucket-data-center",
              description:
                "Update a Cloud Build Connection of type Bitbucket Data Center",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                {
                  name: "--authorizer-token-secret-version",
                  description:
                    "Secret containing the REPO_ADMIN personal access token",
                  args: {
                    name: "AUTHORIZER_TOKEN_SECRET_VERSION",
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
                {
                  name: "--host-uri",
                  description: "URI of the Bitbucket Data Center instance",
                  args: {
                    name: "HOST_URI",
                    description: "String",
                  },
                },
                optImpersonateServiceAccount,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                {
                  name: "--read-authorizer-token-secret-version",
                  description:
                    "Secret containing the REPO_READ personal access token",
                  args: {
                    name: "READ_AUTHORIZER_TOKEN_SECRET_VERSION",
                    description: "String",
                  },
                },
                optRegion2,
                {
                  name: "--service-directory-service",
                  description:
                    "Service Directory service resource to use for accessing the Bitbucket Data Center. Necessary only if the server has no public access from the internet",
                  args: {
                    name: "SERVICE_DIRECTORY_SERVICE",
                    description: "String",
                  },
                },
                optSslCaFile,
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
              name: "github",
              description: "Update a Cloud Build Connection of type GitHub",
              options: [
                optAccessTokenFile,
                optAccount,
                optAppInstallationId,
                optAsync,
                {
                  name: "--authorizer-token-secret-version",
                  description: "Secret containing the authorizer user's token",
                  args: {
                    name: "AUTHORIZER_TOKEN_SECRET_VERSION",
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
                optRegion2,
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
              name: "github-enterprise",
              description:
                "Update a Cloud Build Connection of type GitHub Enterprise",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--app-id",
                  description:
                    "App ID of the GitHub App in the GitHub Enterprise server",
                  args: {
                    name: "APP_ID",
                    description: "Int",
                  },
                },
                optAppInstallationId,
                {
                  name: "--app-slug",
                  description:
                    'App slug (url-friendly name) of the GitHub App. When seeing the configuration page of the App (e.g. in https://my-ghe-server.net/settings/apps/my-app), the app-slug is the last component of the URL path ("my-app" in that example)',
                  args: {
                    name: "APP_SLUG",
                    description: "String",
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
                {
                  name: "--host-uri",
                  description: "URI of the GitHub Enterprise server",
                  args: {
                    name: "HOST_URI",
                    description: "String",
                  },
                },
                optImpersonateServiceAccount,
                optLogHttp,
                optNoAsync,
                {
                  name: "--private-key-secret-version",
                  description:
                    "Secret containing the private key of the GitHub App",
                  args: {
                    name: "PRIVATE_KEY_SECRET_VERSION",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                optRegion2,
                {
                  name: "--service-directory-service",
                  description:
                    "Service Directory service resource to use for accessing the GitHub Enterprise Server. Necessary only if the server has no public access from the internet",
                  args: {
                    name: "SERVICE_DIRECTORY_SERVICE",
                    description: "String",
                  },
                },
                optSslCaFile,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--webhook-secret-secret-version",
                  description:
                    "Secret containing the webhook secret string for validating webhook events generated by the GitHub App",
                  args: {
                    name: "WEBHOOK_SECRET_SECRET_VERSION",
                    description: "String",
                  },
                },
              ],
              args: {
                name: "CONNECTION",
                description:
                  "ID of the connection or fully qualified identifier for the connection",
              },
            },
            {
              name: "gitlab",
              description:
                "Update a Cloud Build Connection of type gitlab.com or GitLab Enterprise",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                {
                  name: "--authorizer-token-secret-version",
                  description:
                    "Secret containing the api personal access token",
                  args: {
                    name: "AUTHORIZER_TOKEN_SECRET_VERSION",
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
                {
                  name: "--host-uri",
                  description: "URI of the GitLab instance",
                  args: {
                    name: "HOST_URI",
                    description: "String",
                  },
                },
                optImpersonateServiceAccount,
                optLogHttp,
                optNoAsync,
                optProject,
                optQuiet,
                {
                  name: "--read-authorizer-token-secret-version",
                  description:
                    "Secret containing the read_repository personal access token. Required for GitLab Enterprise versions older than 13.10",
                  args: {
                    name: "READ_AUTHORIZER_TOKEN_SECRET_VERSION",
                    description: "String",
                  },
                },
                optRegion2,
                {
                  name: "--service-directory-service",
                  description:
                    "Service Directory service resource to use for accessing the GitLab Enterprise Server. Necessary only if the server has no public access from the internet",
                  args: {
                    name: "SERVICE_DIRECTORY_SERVICE",
                    description: "String",
                  },
                },
                optSslCaFile,
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
      name: "describe",
      description: "Get information about a particular build",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
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
        optRegion3,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "BUILD",
        description:
          "The build to describe. The ID of the build is printed at the end of the build submission process, or in the ID column when listing builds",
      },
    },
    {
      name: "get-default-service-account",
      description: "Get the default service account for a project",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
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
        optRegion3,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "list",
      description: "List builds",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        {
          name: "--filter",
          description:
            "Apply a Boolean filter EXPRESSION to each resource item to be listed. If the expression evaluates True, then that item is listed. For more details and examples of filter expressions, run $ gcloud topic filters. This flag interacts with other flags that are applied in this order: --flatten, --sort-by, --filter, --limit",
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
            "Maximum number of resources to list. The default is *50*. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
          args: {
            name: "LIMIT",
            description: "Int",
          },
        },
        optLogHttp,
        {
          name: "--no-ongoing",
          description: "Only list builds that are currently QUEUED or WORKING",
          hidden: true,
        },
        optNoUri,
        {
          name: "--ongoing",
          description: "Only list builds that are currently QUEUED or WORKING",
        },
        {
          name: "--page-size",
          description:
            "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is *20*. Paging may be applied before or after *--filter* and *--limit* depending on the service",
          args: {
            name: "PAGE_SIZE",
            description: "Int",
          },
        },
        optProject,
        optQuiet,
        optRegion3,
        optSortBy,
        optTraceToken,
        optUri,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "log",
      description: "Stream the logs for a build",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
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
          name: "--no-stream",
          description:
            "If a build is ongoing, stream the logs to stdout until the build completes",
          hidden: true,
        },
        optProject,
        optQuiet,
        optRegion3,
        {
          name: "--stream",
          description:
            "If a build is ongoing, stream the logs to stdout until the build completes",
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "BUILD",
        description:
          "The build whose logs shall be printed. The ID of the build is printed at the end of the build submission process, or in the ID column when listing builds",
      },
    },
    {
      name: "repositories",
      description: "Manage repositories for Cloud Build",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud Build repository",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
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
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRegion2,
            {
              name: "--remote-uri",
              description: "The remote git clone URL of the repository",
              priority: 100,
              args: {
                name: "REMOTE_URI",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Build Repository",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
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
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRegion2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Build Repository",
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
            optLogHttp,
            optProject,
            optQuiet,
            optRegion2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository",
          },
        },
        {
          name: "list",
          description: "List all Cloud Build repositories in a connection",
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
            optLogHttp,
            optNoUri,
            optPageSize,
            optProject,
            optQuiet,
            optRegion2,
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
      name: "submit",
      description: "Submit a build using Cloud Build",
      options: [
        optAccessTokenFile,
        optAccount,
        optAsync,
        optBillingProject,
        {
          name: "--config",
          description:
            "The YAML or JSON file to use as the build configuration file",
          args: {
            name: "CONFIG",
            description: "String",
          },
        },
        optConfiguration,
        {
          name: "--default-buckets-behavior",
          description:
            "How default buckets are setup. _DEFAULT_BUCKETS_BEHAVIOR_ must be one of: *default-logs-bucket-behavior-unspecified*, *legacy-bucket*, *regional-user-owned-bucket*",
          args: {
            name: "DEFAULT_BUCKETS_BEHAVIOR",
            suggestions: [
              "default-logs-bucket-behavior-unspecified",
              "legacy-bucket",
              "regional-user-owned-bucket",
            ],
          },
        },
        {
          name: "--dir",
          description:
            "Directory, relative to the source root, in which to run the build. This is used when the build source is a 2nd-gen Cloud Build repository resource, or a Developer Connect GitRepositoryLink resource. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution",
          args: {
            name: "DIR",
            description: "String",
          },
        },
        {
          name: "--disk-size",
          description: "Machine disk size (GB) to run the build",
          args: {
            name: "DISK_SIZE",
          },
        },
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--gcs-log-dir",
          description:
            "A directory in Google Cloud Storage to hold build logs. If this field is not set, ```gs://[PROJECT_NUMBER].cloudbuild-logs.googleusercontent.com/``` will be created and used or ```gs://[PROJECT_NUMBER]-[builds/region]-cloudbuild-logs``` is used when you set `--default-buckets-behavior` to `REGIONAL_USER_OWNED_BUCKET`",
          args: {
            name: "GCS_LOG_DIR",
            description: "String",
          },
        },
        {
          name: "--gcs-source-staging-dir",
          description:
            "A directory in Google Cloud Storage to copy the source used for staging the build. If the specified bucket does not exist, Cloud Build will create one. If you don't set this field, ```gs://[PROJECT_ID]_cloudbuild/source``` is used or ```gs://[PROJECT_ID]_[builds/region]_cloudbuild/source``` is used when you set `--default-buckets-behavior` to `REGIONAL_USER_OWNED_BUCKET` and `builds/region` is not `global`",
          args: {
            name: "GCS_SOURCE_STAGING_DIR",
            description: "String",
          },
        },
        {
          name: "--git-source-dir",
          description:
            "Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution",
          args: {
            name: "GIT_SOURCE_DIR",
            description: "String",
          },
        },
        {
          name: "--git-source-revision",
          description:
            "Revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref to run the build",
          args: {
            name: "GIT_SOURCE_REVISION",
            description: "String",
          },
        },
        {
          name: "--help",
          description: "Display detailed help",
        },
        {
          name: "--ignore-file",
          description:
            "Override the `.gcloudignore` file and use the specified file instead",
          args: {
            name: "IGNORE_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        optImpersonateServiceAccount,
        optLogHttp,
        {
          name: "--machine-type",
          description:
            "Machine type used to run the build. _MACHINE_TYPE_ must be one of: *e2-highcpu-32*, *e2-highcpu-8*, *e2-medium*, *n1-highcpu-32*, *n1-highcpu-8*",
          args: {
            name: "MACHINE_TYPE",
            suggestions: [
              "e2-highcpu-32",
              "e2-highcpu-8",
              "e2-medium",
              "n1-highcpu-32",
              "n1-highcpu-8",
            ],
          },
        },
        optNoAsync,
        {
          name: "--no-cache",
          description:
            "If set, disable layer caching when building with Kaniko",
        },
        {
          name: "--no-source",
          description:
            "Specify that no source should be uploaded with this build",
        },
        {
          name: "--no-suppress-logs",
          description: "If set, build logs not streamed to stdout",
          hidden: true,
        },
        {
          name: "--pack",
          description:
            'Uses CNCF [buildpack](https://buildpacks.io/) to create the app image. The app "image" key/value must be provided. The app image name must be in the *gcr.io* or *pkg.dev* namespace. To specify your own builder image use the optional "builder" key/value argument. By default ```gcr.io/buildpacks/builder``` is used. To pass environment variables to the builder use the optional "env" key/value argument where value is a list of key values using [escaping](https://cloud.google.com/sdk/gcloud/reference/topic/escaping) if necessary',
          args: {
            name: "PACK",
            description: "Dict",
          },
        },
        {
          name: "--polling-interval",
          description:
            "Amount of time in seconds to wait between polling build status",
          args: {
            name: "POLLING_INTERVAL",
            description: "Int",
          },
        },
        optProject,
        optQuiet,
        optRegion3,
        {
          name: "--revision",
          description:
            "Revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref to run the build. This is used when the build source is a 2nd-gen Cloud Build repository resource, or a Developer Connect GitRepositoryLink resource",
          args: {
            name: "REVISION",
            description: "String",
          },
        },
        {
          name: "--service-account",
          description:
            "The service account to use with this build. If unset, the default service account will be used",
          args: {
            name: "SERVICE_ACCOUNT",
            description: "String",
          },
        },
        {
          name: "--substitutions",
          description:
            "Parameters to be substituted in the build specification",
          args: {
            name: "KEY=VALUE",
            description: "Dict",
          },
        },
        {
          name: "--suppress-logs",
          description: "If set, build logs not streamed to stdout",
        },
        {
          name: ["--tag", "-t"],
          description:
            'The tag to use with a "docker build" image creation. Cloud Build will run a remote "docker build -t $TAG .", where $TAG is the tag provided by this flag. The tag must be in the *gcr.io* or *pkg.dev* namespace. Specify a tag if you want Cloud Build to build using a Dockerfile instead of a build config file. If you specify a tag in this command, your source must include a Dockerfile. For instructions on building using a Dockerfile see https://cloud.google.com/cloud-build/docs/quickstart-build',
          args: {
            name: "TAG",
            description: "String",
          },
        },
        {
          name: "--timeout",
          description:
            'Maximum time a build is run before it is failed as `TIMEOUT`. It is specified as a duration; for example, "2h15m5s" is two hours, fifteen minutes, and five seconds. If you don\'t specify a unit, seconds is assumed. For example, "10" is 10 seconds. Overrides the default *builds/timeout* property value for this command invocation',
          args: {
            name: "TIMEOUT",
            description: "String",
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
        {
          name: "--worker-pool",
          description:
            "Specify a worker pool for the build to run in. Format: projects/{project}/locations/{region}/workerPools/{workerPool}",
          args: {
            name: "WORKER_POOL",
            description: "String",
          },
        },
      ],
      args: {
        name: "SOURCE",
        description:
          "The location of the source to build. The location can be a directory on a local disk, an archive file (e.g., .zip, .tar.gz) or a manifest file (.json) in Google Cloud Storage, a Git repo url starting with http:// or https://, a 2nd-gen Cloud Build repository resource, or a Developer Connect GitRepositoryLink resource. If the source is a local directory, this command skips the files specified in the `--ignore-file`. If `--ignore-file` is not specified, use`.gcloudignore` file. If a `.gcloudignore` file is absent and a `.gitignore` file is present in the local source directory, gcloud will use a generated Git-compatible `.gcloudignore` file that respects your .gitignored files. The global `.gitignore` is not respected. For more information on `.gcloudignore`, see `gcloud topic gcloudignore`",
        isOptional: true,
      },
    },
    {
      name: "triggers",
      description: "Create and manage build triggers for Google Cloud Build",
      subcommands: [
        {
          name: "create",
          description: "Create build triggers for Google Cloud Build",
          subcommands: [
            {
              name: "bitbucket-cloud",
              description:
                "Create a build trigger for a 2nd-gen Bitbucket Cloud repository",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optBranchPattern,
                optBuildConfig,
                optCommentControl,
                optConfiguration,
                optDescription,
                optDockerfile,
                optDockerfileDir,
                optDockerfileImage,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optIgnoredFiles,
                optImpersonateServiceAccount,
                optIncludedFiles,
                optInlineConfig,
                optLogHttp,
                optName,
                optNoRequireApproval,
                optProject,
                optPullRequestPattern2,
                optQuiet,
                optRegion3,
                optRepository,
                optRequireApproval,
                optServiceAccount,
                optSubstitutions,
                optTagPattern,
                optTraceToken,
                optTriggerConfig,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "bitbucket-data-center",
              description:
                "Create a build trigger for a 2nd-gen Bitbucket Data Center repository",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optBranchPattern,
                optBuildConfig,
                optCommentControl,
                optConfiguration,
                optDescription,
                optDockerfile,
                optDockerfileDir,
                optDockerfileImage,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optIgnoredFiles,
                optImpersonateServiceAccount,
                optIncludedFiles,
                optInlineConfig,
                optLogHttp,
                optName,
                optNoRequireApproval,
                optProject,
                optPullRequestPattern2,
                optQuiet,
                optRegion3,
                optRepository,
                optRequireApproval,
                optServiceAccount,
                optSubstitutions,
                optTagPattern,
                optTraceToken,
                optTriggerConfig,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "bitbucketserver",
              description:
                "Create a build trigger for a Bitbucket Server repository",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--bitbucket-server-config-resource",
                  description: "Bitbucket Server config resource name",
                  priority: 100,
                  args: {
                    name: "BITBUCKET_SERVER_CONFIG_RESOURCE",
                    description: "String",
                  },
                },
                optBranchPattern,
                optBuildConfig,
                optCommentControl,
                optConfiguration,
                optDescription,
                optDockerfile,
                optDockerfileDir,
                optDockerfileImage2,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optIgnoredFiles,
                optImpersonateServiceAccount,
                optIncludedFiles,
                optInlineConfig,
                optLogHttp,
                optName,
                optNoRequireApproval,
                optProject,
                {
                  name: "--project-key",
                  description: "Bitbucket Server project key",
                  priority: 100,
                  args: {
                    name: "PROJECT_KEY",
                    description: "String",
                  },
                },
                optPullRequestPattern2,
                optQuiet,
                optRegion3,
                {
                  name: "--repo-slug",
                  description: "Bitbucket Server repository slug",
                  priority: 100,
                  args: {
                    name: "REPO_SLUG",
                    description: "String",
                  },
                },
                optRequireApproval,
                optServiceAccount,
                optSubstitutions,
                optTagPattern,
                optTraceToken,
                optTriggerConfig,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "cloud-source-repositories",
              description:
                "Create a build trigger from a Cloud Source Repository",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optBranchPattern,
                optBuildConfig,
                optConfiguration,
                optDescription,
                optDockerfile,
                optDockerfileDir,
                optDockerfileImage2,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optIgnoredFiles,
                optImpersonateServiceAccount,
                optIncludedFiles,
                optInlineConfig,
                optLogHttp,
                optName,
                optNoRequireApproval,
                optProject,
                optQuiet,
                optRegion3,
                {
                  name: "--repo",
                  description:
                    "ID of the repo or fully qualified identifier for the repo",
                  priority: 100,
                  args: {
                    name: "REPO",
                    description: "String",
                  },
                },
                optRequireApproval,
                optServiceAccount,
                optSubstitutions,
                optTagPattern,
                optTraceToken,
                optTriggerConfig,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "github",
              description: "Create a build trigger for a GitHub repository",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optBranchPattern,
                optBuildConfig,
                optCommentControl,
                optConfiguration,
                optDescription,
                optDockerfile,
                optDockerfileDir,
                optDockerfileImage2,
                {
                  name: "--enterprise-config",
                  description:
                    "Resource name of the GitHub Enterprise config that should be applied to this installation",
                  args: {
                    name: "ENTERPRISE_CONFIG",
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
                optIgnoredFiles,
                optImpersonateServiceAccount,
                {
                  name: "--include-logs-with-status",
                  description:
                    "Build logs will be sent back to GitHub as part of the checkrun result",
                },
                optIncludedFiles,
                optInlineConfig,
                optLogHttp,
                optName,
                {
                  name: "--no-include-logs-with-status",
                  description:
                    "Build logs will be sent back to GitHub as part of the checkrun result",
                  hidden: true,
                },
                optNoRequireApproval,
                optProject,
                {
                  name: "--pull-request-pattern",
                  description:
                    "A regular expression specifying which base git branch to match for pull request events",
                  priority: 100,
                  args: {
                    name: "REGEX",
                    description: "String",
                  },
                },
                optQuiet,
                optRegion3,
                {
                  name: "--repo-name",
                  description: "Name of the GitHub Repository (1st gen)",
                  priority: 100,
                  args: {
                    name: "REPO_NAME",
                    description: "String",
                  },
                },
                {
                  name: "--repo-owner",
                  description: "Owner of the GitHub Repository (1st gen)",
                  priority: 100,
                  args: {
                    name: "REPO_OWNER",
                    description: "String",
                  },
                },
                optRepository,
                optRequireApproval,
                optServiceAccount,
                optSubstitutions,
                optTagPattern,
                optTraceToken,
                optTriggerConfig,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "gitlab",
              description:
                "Create a build trigger for a 2nd-gen GitLab repository",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optBranchPattern,
                optBuildConfig,
                optCommentControl,
                optConfiguration,
                optDescription,
                optDockerfile,
                optDockerfileDir,
                optDockerfileImage,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optIgnoredFiles,
                optImpersonateServiceAccount,
                optIncludedFiles,
                optInlineConfig,
                optLogHttp,
                optName,
                optNoRequireApproval,
                optProject,
                optPullRequestPattern2,
                optQuiet,
                optRegion3,
                optRepository,
                optRequireApproval,
                optServiceAccount,
                optSubstitutions,
                optTagPattern,
                optTraceToken,
                optTriggerConfig,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "manual",
              description: "Create a build trigger with a manual trigger event",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optBitbucketServerConfig,
                optBranch,
                optBuildConfig,
                optConfiguration,
                optDescription,
                optDockerfile,
                optDockerfileDir,
                optDockerfileImage2,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGithubEnterpriseConfig,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optInlineConfig,
                optLogHttp,
                optName,
                optNoRequireApproval,
                optProject,
                optQuiet,
                optRegion3,
                optRepo,
                optRepoType,
                optRepository,
                optRequireApproval,
                optServiceAccount,
                optSubstitutions,
                optTag,
                optTraceToken,
                optTriggerConfig,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "pubsub",
              description:
                "Create a build trigger with a Pub/Sub trigger event",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optBitbucketServerConfig,
                optBranch,
                optBuildConfig,
                optConfiguration,
                optDescription,
                optDockerfile,
                optDockerfileDir,
                optDockerfileImage2,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGithubEnterpriseConfig,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optInlineConfig,
                optLogHttp,
                optName,
                optNoRequireApproval,
                optProject,
                optQuiet,
                optRegion3,
                optRepo,
                optRepoType,
                optRepository,
                optRequireApproval,
                optServiceAccount,
                optSubscriptionFilter,
                optSubstitutions,
                optTag,
                {
                  name: "--topic",
                  description:
                    "The topic to which this trigger should subscribe",
                  priority: 100,
                  args: {
                    name: "TOPIC",
                    description: "String",
                  },
                },
                optTraceToken,
                optTriggerConfig,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "webhook",
              description:
                "Create a build trigger with a Webhook trigger event",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optBitbucketServerConfig,
                optBranch,
                optBuildConfig,
                optConfiguration,
                optDescription,
                optDockerfile,
                optDockerfileDir,
                optDockerfileImage2,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGithubEnterpriseConfig,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optInlineConfig,
                optLogHttp,
                optName,
                optNoRequireApproval,
                optProject,
                optQuiet,
                optRegion3,
                optRepo,
                optRepoType,
                optRepository,
                optRequireApproval,
                {
                  name: "--secret",
                  description:
                    "The full path of the secret version required to validate webhook requests against this trigger. For example, projects/my-project/secrets/my-secret/versions/1",
                  priority: 100,
                  args: {
                    name: "SECRET",
                    description: "String",
                  },
                },
                optServiceAccount,
                optSubscriptionFilter,
                optSubstitutions,
                optTag,
                optTraceToken,
                optTriggerConfig,
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
          name: "delete",
          description: "Delete a build trigger",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            optRegion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TRIGGER",
            description:
              "ID of the trigger or fully qualified identifier for the trigger",
          },
        },
        {
          name: "describe",
          description: "Get information about a particular trigger",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            optRegion,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TRIGGER",
            description:
              "ID of the trigger or fully qualified identifier for the trigger",
          },
        },
        {
          name: "import",
          description: "Import a build trigger",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
            optRegion3,
            {
              name: "--source",
              description: "File path where trigger should be imported from",
              priority: 100,
              args: {
                name: "PATH",
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
          description: "List Cloud Build triggers for a project",
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
            optRegion3,
            optSortBy,
            optTraceToken,
            optUri,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "run",
          description: "Run a build trigger",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--branch",
              description: "Branch to run",
              args: {
                name: "BRANCH",
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
            optLogHttp,
            optProject,
            optQuiet,
            optRegion,
            {
              name: "--sha",
              description: "SHA to run",
              args: {
                name: "SHA",
                description: "String",
              },
            },
            optSubstitutions,
            {
              name: "--tag",
              description: "Tag to run",
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
            name: "TRIGGER",
            description:
              "ID of the trigger or fully qualified identifier for the trigger",
          },
        },
        {
          name: "update",
          description: "Update Triggers in Google Cloud Build",
          subcommands: [
            {
              name: "bitbucket-cloud",
              description:
                "Updates Bitbucket Cloud trigger used by Cloud Build",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optBranchPattern,
                optBuildConfig,
                {
                  name: "--clear-substitutions",
                  description: "Clear existing substitutions",
                },
                optCommentControl,
                optConfiguration,
                optDescription,
                optDockerfile,
                optDockerfileDir,
                optDockerfileImage,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optIgnoredFiles,
                optImpersonateServiceAccount,
                optIncludedFiles,
                optInlineConfig,
                optLogHttp,
                optNoClearSubstitutions,
                optNoRequireApproval,
                optProject,
                optPullRequestPattern,
                optQuiet,
                optRegion,
                optRemoveSubstitutions,
                optRepository,
                optRequireApproval,
                optServiceAccount,
                optTagPattern,
                optTraceToken,
                optTriggerConfig,
                optUpdateSubstitutions,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "TRIGGER",
                description:
                  "ID of the trigger or fully qualified identifier for the trigger",
              },
            },
            {
              name: "bitbucket-data-center",
              description:
                "Updates Bitbucket Data Center trigger used by Cloud Build",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optBranchPattern,
                optBuildConfig,
                {
                  name: "--clear-substitutions",
                  description: "Clear existing substitutions",
                },
                optCommentControl,
                optConfiguration,
                optDescription,
                optDockerfile,
                optDockerfileDir,
                optDockerfileImage,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optIgnoredFiles,
                optImpersonateServiceAccount,
                optIncludedFiles,
                optInlineConfig,
                optLogHttp,
                optNoClearSubstitutions,
                optNoRequireApproval,
                optProject,
                optPullRequestPattern,
                optQuiet,
                optRegion,
                optRemoveSubstitutions,
                optRepository,
                optRequireApproval,
                optServiceAccount,
                optTagPattern,
                optTraceToken,
                optTriggerConfig,
                optUpdateSubstitutions,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "TRIGGER",
                description:
                  "ID of the trigger or fully qualified identifier for the trigger",
              },
            },
            {
              name: "bitbucketserver",
              description:
                "Updates Bitbucket Server trigger used by Cloud Build",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--bitbucket-server-config-resource",
                  description: "Bitbucket Server config resource name",
                  args: {
                    name: "BITBUCKET_SERVER_CONFIG_RESOURCE",
                    description: "String",
                  },
                },
                optBranchPattern,
                optBuildConfig,
                {
                  name: "--clear-substitutions",
                  description: "Clear existing substitutions",
                },
                optCommentControl,
                optConfiguration,
                optDescription,
                optDockerfile,
                optDockerfileDir,
                optDockerfileImage,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optIgnoredFiles,
                optImpersonateServiceAccount,
                optIncludedFiles,
                optInlineConfig,
                optLogHttp,
                optNoClearSubstitutions,
                optNoRequireApproval,
                optProject,
                {
                  name: "--project-key",
                  description: "Bitbucket Server project key",
                  args: {
                    name: "PROJECT_KEY",
                    description: "String",
                  },
                },
                optPullRequestPattern,
                optQuiet,
                optRegion,
                optRemoveSubstitutions,
                {
                  name: "--repo-slug",
                  description: "Bitbucket Server repository slug",
                  args: {
                    name: "REPO_SLUG",
                    description: "String",
                  },
                },
                optRequireApproval,
                optServiceAccount,
                optTagPattern,
                optTraceToken,
                optTriggerConfig,
                optUpdateSubstitutions,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "TRIGGER",
                description:
                  "ID of the trigger or fully qualified identifier for the trigger",
              },
            },
            {
              name: "cloud-source-repositories",
              description:
                "Updates Cloud Source Repositories trigger used by Cloud Build",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optBranchPattern,
                optBuildConfig,
                {
                  name: "--clear-substitutions",
                  description: "Clear existing substitutions",
                },
                optConfiguration,
                optDescription,
                optDockerfile,
                optDockerfileDir,
                optDockerfileImage,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optIgnoredFiles,
                optImpersonateServiceAccount,
                optIncludedFiles,
                optInlineConfig,
                optLogHttp,
                optNoClearSubstitutions,
                optNoRequireApproval,
                optProject,
                optQuiet,
                optRegion,
                optRemoveSubstitutions,
                {
                  name: "--repo",
                  description:
                    "ID of the repo or fully qualified identifier for the repo",
                  priority: 100,
                  args: {
                    name: "REPO",
                    description: "String",
                  },
                },
                optRequireApproval,
                optServiceAccount,
                optTagPattern,
                optTraceToken,
                optTriggerConfig,
                optUpdateSubstitutions,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "TRIGGER",
                description:
                  "ID of the trigger or fully qualified identifier for the trigger",
              },
            },
            {
              name: "github",
              description: "Update GitHub trigger used by Cloud Build",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optBranchPattern,
                optBuildConfig,
                {
                  name: "--clear-substitutions",
                  description: "Clear existing substitutions",
                },
                optCommentControl,
                optConfiguration,
                optDescription,
                optDockerfile,
                optDockerfileDir,
                optDockerfileImage,
                {
                  name: "--enterprise-config",
                  description:
                    "Resource name of the GitHub Enterprise config that should be applied to this installation",
                  args: {
                    name: "ENTERPRISE_CONFIG",
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
                optIgnoredFiles,
                optImpersonateServiceAccount,
                {
                  name: "--include-logs-with-status",
                  description:
                    "Build logs will be sent back to GitHub as part of the checkrun result",
                },
                optIncludedFiles,
                optInlineConfig,
                optLogHttp,
                optNoClearSubstitutions,
                {
                  name: "--no-include-logs-with-status",
                  description:
                    "Build logs will be sent back to GitHub as part of the checkrun result",
                  hidden: true,
                },
                optNoRequireApproval,
                optProject,
                optPullRequestPattern,
                optQuiet,
                optRegion,
                optRemoveSubstitutions,
                {
                  name: "--repo-name",
                  description: "Name of the GitHub Repository",
                  args: {
                    name: "REPO_NAME",
                    description: "String",
                  },
                },
                {
                  name: "--repo-owner",
                  description: "Owner of the GitHub Repository",
                  args: {
                    name: "REPO_OWNER",
                    description: "String",
                  },
                },
                optRepository,
                optRequireApproval,
                optServiceAccount,
                optTagPattern,
                optTraceToken,
                optTriggerConfig,
                optUpdateSubstitutions,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "TRIGGER",
                description:
                  "ID of the trigger or fully qualified identifier for the trigger",
              },
            },
            {
              name: "gitlab",
              description: "Updates GitLab trigger used by Cloud Build",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optBranchPattern,
                optBuildConfig,
                {
                  name: "--clear-substitutions",
                  description: "Clear existing substitutions",
                },
                optCommentControl,
                optConfiguration,
                optDescription,
                optDockerfile,
                optDockerfileDir,
                optDockerfileImage,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optIgnoredFiles,
                optImpersonateServiceAccount,
                optIncludedFiles,
                optInlineConfig,
                optLogHttp,
                optNoClearSubstitutions,
                optNoRequireApproval,
                optProject,
                optPullRequestPattern,
                optQuiet,
                optRegion,
                optRemoveSubstitutions,
                optRepository,
                optRequireApproval,
                optServiceAccount,
                optTagPattern,
                optTraceToken,
                optTriggerConfig,
                optUpdateSubstitutions,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "TRIGGER",
                description:
                  "ID of the trigger or fully qualified identifier for the trigger",
              },
            },
            {
              name: "manual",
              description: "Updates a manual trigger used by Cloud Build",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--clear-substitutions",
                  description: "Clear existing substitutions",
                },
                optConfiguration,
                optDescription,
                optDockerfile,
                optDockerfileDir,
                optDockerfileImage2,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGitFileSourceBranch,
                optGitFileSourceGithubEnterpriseConfig,
                optGitFileSourcePath,
                optGitFileSourceRepoType,
                optGitFileSourceRepository,
                optGitFileSourceTag,
                optGitFileSourceUri,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optInlineConfig,
                optLogHttp,
                optNoClearSubstitutions,
                optNoRequireApproval,
                optProject,
                optQuiet,
                optRegion,
                optRemoveSubstitutions,
                optRequireApproval,
                optServiceAccount,
                optSourceToBuildBranch,
                optSourceToBuildGithubEnterpriseConfig,
                optSourceToBuildRepoType,
                optSourceToBuildRepository,
                optSourceToBuildTag,
                optSourceToBuildUri,
                optTraceToken,
                optTriggerConfig,
                optUpdateSubstitutions,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "TRIGGER",
                description:
                  "ID of the trigger or fully qualified identifier for the trigger",
              },
            },
            {
              name: "pubsub",
              description: "Update a Pub/Sub trigger used by Cloud Build",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--clear-subscription-filter",
                  description: "Clear existing subscription filter",
                },
                {
                  name: "--clear-substitutions",
                  description: "Clear existing substitutions",
                },
                optConfiguration,
                optDescription,
                optDockerfile,
                optDockerfileDir,
                optDockerfileImage2,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGitFileSourceBranch,
                optGitFileSourceGithubEnterpriseConfig,
                optGitFileSourcePath,
                optGitFileSourceRepoType,
                optGitFileSourceRepository,
                optGitFileSourceTag,
                optGitFileSourceUri,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optInlineConfig,
                optLogHttp,
                {
                  name: "--no-clear-subscription-filter",
                  description: "Clear existing subscription filter",
                  hidden: true,
                },
                optNoClearSubstitutions,
                optNoRequireApproval,
                optProject,
                optQuiet,
                optRegion,
                optRemoveSubstitutions,
                optRequireApproval,
                optServiceAccount,
                optSourceToBuildBranch,
                optSourceToBuildGithubEnterpriseConfig,
                optSourceToBuildRepoType,
                optSourceToBuildRepository,
                optSourceToBuildTag,
                optSourceToBuildUri,
                optSubscriptionFilter,
                {
                  name: "--topic",
                  description:
                    "The topic to which this trigger should subscribe",
                  args: {
                    name: "TOPIC",
                    description: "String",
                  },
                },
                optTraceToken,
                optTriggerConfig,
                optUpdateSubstitutions,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "TRIGGER",
                description:
                  "ID of the trigger or fully qualified identifier for the trigger",
              },
            },
            {
              name: "webhook",
              description: "Update a Webhook trigger used by Cloud Build",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--clear-substitutions",
                  description: "Clear existing substitutions",
                },
                optConfiguration,
                optDescription,
                optDockerfile,
                optDockerfileDir,
                optDockerfileImage2,
                optFlagsFile,
                optFlatten,
                optFormat,
                optGitFileSourceBranch,
                optGitFileSourceGithubEnterpriseConfig,
                optGitFileSourcePath,
                optGitFileSourceRepoType,
                optGitFileSourceRepository,
                optGitFileSourceTag,
                optGitFileSourceUri,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optInlineConfig,
                optLogHttp,
                optNoClearSubstitutions,
                optNoRequireApproval,
                optProject,
                optQuiet,
                optRegion,
                optRemoveSubstitutions,
                optRequireApproval,
                {
                  name: "--secret",
                  description:
                    "The full path of the secret version required to validate webhook requests against this trigger. For example, projects/my-project/secrets/my-secret/versions/1",
                  args: {
                    name: "SECRET",
                    description: "String",
                  },
                },
                optServiceAccount,
                optSourceToBuildBranch,
                optSourceToBuildGithubEnterpriseConfig,
                optSourceToBuildRepoType,
                optSourceToBuildRepository,
                optSourceToBuildTag,
                optSourceToBuildUri,
                optSubscriptionFilter,
                optTraceToken,
                optTriggerConfig,
                optUpdateSubstitutions,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "TRIGGER",
                description:
                  "ID of the trigger or fully qualified identifier for the trigger",
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
      name: "worker-pools",
      description: "Manage worker pools for Google Cloud Build",
      subcommands: [
        {
          name: "create",
          description: "Create a worker pool for use by Google Cloud Build",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--config-from-file",
              description:
                "File that contains the configuration for the worker pool to be created. See https://cloud.google.com/build/docs/private-pools/worker-pool-config-file-schema for options",
              args: {
                name: "CONFIG_FROM_FILE",
                description: "String",
                template: "filepaths",
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
              name: "--no-external-ip",
              description:
                "(DEPRECATED) If set, workers in the worker pool are created without an external IP address",
              hidden: true,
              deprecated: true,
            },
            {
              name: "--no-public-egress",
              description:
                "If set, workers in the worker pool are created without an external IP address",
            },
            {
              name: "--peered-network",
              description:
                "Existing network to which workers are peered. The network is specified in resource URL format projects/{network_project}/global/networks/{network_name}",
              args: {
                name: "PEERED_NETWORK",
                description: "String",
              },
            },
            {
              name: "--peered-network-ip-range",
              description:
                "An IP range for your peered network. Specify the IP range using Classless Inter-Domain Routing (CIDR) notation with a slash and the subnet prefix size, such as `/29`",
              args: {
                name: "PEERED_NETWORK_IP_RANGE",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--region",
              description:
                "Cloud region where the worker pool is created. See https://cloud.google.com/build/docs/locations for available locations",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--worker-disk-size",
              description: "Size of the disk attached to the worker",
              args: {
                name: "WORKER_DISK_SIZE",
              },
            },
            {
              name: "--worker-machine-type",
              description: "Compute Engine machine type for a worker pool",
              args: {
                name: "WORKER_MACHINE_TYPE",
                description: "String",
              },
            },
          ],
          args: {
            name: "WORKER_POOL",
            description:
              "Unique identifier for the worker pool to create. This value should be 1-63 characters, and valid characters are [a-z][0-9]-",
          },
        },
        {
          name: "delete",
          description: "Delete a worker pool from Cloud Build",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              description: "The Cloud region where the worker pool is",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "WORKER_POOL",
            description: "The ID of the worker pool to delete",
          },
        },
        {
          name: "describe",
          description: "Describe a worker pool used by Cloud Build",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
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
              description: "The Cloud region where the worker pool is",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "WORKER_POOL",
            description: "The ID of the worker pool to describe",
          },
        },
        {
          name: "list",
          description: "List all worker pools in a Google Cloud project",
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
              name: "--region",
              description: "The Cloud region to list worker pools in",
              args: {
                name: "REGION",
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
          name: "update",
          description: "Update a worker pool used by Cloud Build",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--config-from-file",
              description:
                "File that contains updates to the configuration for the worker pool. See https://cloud.google.com/build/docs/private-pools/worker-pool-config-file-schema for options",
              args: {
                name: "CONFIG_FROM_FILE",
                description: "String",
                template: "filepaths",
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
              name: "--no-external-ip",
              description:
                "(DEPRECATED) If set, workers in the worker pool are created without an external IP address",
              hidden: true,
              deprecated: true,
            },
            {
              name: "--no-public-egress",
              description:
                "If set to true, workers in the worker pool are created with an external IP address",
            },
            optProject,
            {
              name: "--public-egress",
              description:
                "If set to true, workers in the worker pool are created with an external IP address",
            },
            optQuiet,
            {
              name: "--region",
              description:
                "Cloud region where the worker pool is updated. See https://cloud.google.com/build/docs/locations for available locations",
              args: {
                name: "REGION",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--worker-disk-size",
              description: "Size of the disk attached to the worker",
              args: {
                name: "WORKER_DISK_SIZE",
              },
            },
            {
              name: "--worker-machine-type",
              description: "Compute Engine machine type for a worker pool",
              args: {
                name: "WORKER_MACHINE_TYPE",
                description: "String",
              },
            },
          ],
          args: {
            name: "WORKER_POOL",
            description:
              "Unique identifier for the worker pool to update. This value should be 1-63 characters, and valid characters are [a-z][0-9]-",
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
