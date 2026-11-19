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

const optJsonKey: Fig.Option = {
  name: "--json-key",
  description:
    "Path to service account JSON key. If not specified, current active service account credentials or a placeholder for gcloud credentials is used",
  args: {
    name: "JSON_KEY",
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
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation2: Fig.Option = {
  name: "--location",
  description:
    "If specified, all requests to Artifact Analysis for occurrences will go to location specified",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description:
    "Location of the file. Overrides the default artifacts/location property value for this command invocation. To configure the default location, use the command: gcloud config set artifacts/location",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation4: Fig.Option = {
  name: "--location",
  description: "Location of the package",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation5: Fig.Option = {
  name: "--location",
  description:
    "Location of the package. Overrides the default artifacts/location property value for this command invocation. To configure the default location, use the command: gcloud config set artifacts/location",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation6: Fig.Option = {
  name: "--location",
  description: "Location of the repository",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation7: Fig.Option = {
  name: "--location",
  description:
    "Location of the repository. Overrides the default artifacts/location property value for this command invocation. To configure the default location, use the command: gcloud config set artifacts/location",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation8: Fig.Option = {
  name: "--location",
  description:
    "Location of the rule. Overrides the default artifacts/location property value for this command invocation. To configure the default location, use the command: gcloud config set artifacts/location",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation9: Fig.Option = {
  name: "--location",
  description:
    "Location of the tag. Overrides the default artifacts/location property value for this command invocation. To configure the default location, use the command: gcloud config set artifacts/location",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation10: Fig.Option = {
  name: "--location",
  description:
    "Location of the version. Overrides the default artifacts/location property value for this command invocation. To configure the default location, use the command: gcloud config set artifacts/location",
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

const optPackage: Fig.Option = {
  name: "--package",
  description:
    "ID of the package or fully qualified identifier for the package",
  priority: 100,
  args: {
    name: "PACKAGE",
    description: "String",
  },
};

const optPackage2: Fig.Option = {
  name: "--package",
  description: "The package associated with the tag",
  args: {
    name: "PACKAGE",
    description: "String",
  },
};

const optPackage3: Fig.Option = {
  name: "--package",
  description: "The package associated with the version",
  args: {
    name: "PACKAGE",
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

const optRepository: Fig.Option = {
  name: "--repository",
  description:
    "ID of the repository or fully qualified identifier for the repository",
  args: {
    name: "REPOSITORY",
    description: "String",
  },
};

const optRepository2: Fig.Option = {
  name: "--repository",
  description: "Repository of the package",
  args: {
    name: "REPOSITORY",
    description: "String",
  },
};

const optRepository3: Fig.Option = {
  name: "--repository",
  description:
    "The repository associated with the file. Overrides the default artifacts/repository property value for this command invocation. To configure the default repository, use the command: gcloud config set artifacts/repository",
  args: {
    name: "REPOSITORY",
    description: "String",
  },
};

const optRepository4: Fig.Option = {
  name: "--repository",
  description:
    "The repository associated with the package. Overrides the default artifacts/repository property value for this command invocation. To configure the default repository, use the command: gcloud config set artifacts/repository",
  args: {
    name: "REPOSITORY",
    description: "String",
  },
};

const optRepository5: Fig.Option = {
  name: "--repository",
  description:
    "The repository associated with the rule. Overrides the default artifacts/repository property value for this command invocation. To configure the default repository, use the command: gcloud config set artifacts/repository",
  args: {
    name: "REPOSITORY",
    description: "String",
  },
};

const optRepository6: Fig.Option = {
  name: "--repository",
  description:
    "The repository associated with the tag. Overrides the default artifacts/repository property value for this command invocation. To configure the default repository, use the command: gcloud config set artifacts/repository",
  args: {
    name: "REPOSITORY",
    description: "String",
  },
};

const optRepository7: Fig.Option = {
  name: "--repository",
  description:
    "The repository associated with the version. Overrides the default artifacts/repository property value for this command invocation. To configure the default repository, use the command: gcloud config set artifacts/repository",
  args: {
    name: "REPOSITORY",
    description: "String",
  },
};

const optSeverity: Fig.Option = {
  name: "--severity",
  description:
    "The minimum severity level of logs to generate. This flag is only applicable when using --enable-platform-logs. _SEVERITY_ must be one of:",
  args: {
    name: "SEVERITY",
    suggestions: ["error", "info"],
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

const optSource: Fig.Option = {
  name: "--source",
  description: "The path of a package to upload",
  priority: 100,
  args: {
    name: "SOURCE",
    description: "String",
  },
};

const optStreamLocation: Fig.Option = {
  name: "--stream-location",
  description: "The target Cloud Region where the artifact should be prewarmed",
  priority: 100,
  args: {
    name: "STREAM_LOCATION",
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
  name: "artifacts",
  description: "Manage Artifact Registry resources",
  subcommands: [
    {
      name: "apt",
      description: "Manage Artifact Registry Debian packages",
      subcommands: [
        {
          name: "import",
          description:
            "Import one or more Debian packages into an artifact repository",
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
              name: "--gcs-source",
              description:
                "The Google Cloud Storage location of a package to import. To import multiple packages, use wildcards at the end of the path",
              priority: 100,
              args: {
                name: "GCS_SOURCE",
                description: "List",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation6,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository",
            isOptional: true,
          },
        },
        {
          name: "upload",
          description: "Upload a Debian package to an artifact repository",
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
            optLocation6,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optSource,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository",
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
      name: "attachments",
      description: "Manage Artifact Registry attachments",
      subcommands: [
        {
          name: "create",
          description:
            "Creates an Artifact Registry attachment in a repository",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--attachment-namespace",
              description: "Namespace of the attachment",
              args: {
                name: "ATTACHMENT_NAMESPACE",
                description: "String",
              },
            },
            {
              name: "--attachment-type",
              description: "Type of the attachment",
              priority: 100,
              args: {
                name: "ATTACHMENT_TYPE",
                description: "String",
              },
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--files",
              description:
                "Comma-seperated list of files that are part of this attachment",
              priority: 100,
              args: {
                name: "FILES",
                description: "List",
                template: "filepaths",
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
              description: "Location of the attachment",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--repository",
              description: "Repository of the attachment",
              args: {
                name: "REPOSITORY",
                description: "String",
              },
            },
            {
              name: "--target",
              description:
                "Target of the attachment, should be fully qualified version name",
              priority: 100,
              args: {
                name: "TARGET",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ATTACHMENT",
            description:
              "ID of the attachment or fully qualified identifier for the attachment",
          },
        },
        {
          name: "delete",
          description: "Delete an Artifact Registry attachment",
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
              description:
                "Location of the attachment. Overrides the default artifacts/location property value for this command invocation. To configure the default location, use the command: gcloud config set artifacts/location",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--repository",
              description:
                "The repository associated with the attachment. Overrides the default artifacts/repository property value for this command invocation. To configure the default repository, use the command: gcloud config set artifacts/repository",
              args: {
                name: "REPOSITORY",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ATTACHMENT",
            description:
              "ID of the attachment or fully qualified identifier for the attachment",
          },
        },
        {
          name: "describe",
          description: "Describe an Artifact Registry attachment",
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
              description:
                "Location of the attachment. Overrides the default artifacts/location property value for this command invocation. To configure the default location, use the command: gcloud config set artifacts/location",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--repository",
              description:
                "The repository associated with the attachment. Overrides the default artifacts/repository property value for this command invocation. To configure the default repository, use the command: gcloud config set artifacts/repository",
              args: {
                name: "REPOSITORY",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ATTACHMENT",
            description:
              "ID of the attachment or fully qualified identifier for the attachment",
          },
        },
        {
          name: "download",
          description:
            "Download an Artifact Registry attachment from a repository",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--chunk-size",
              description:
                "If specified, the chunk size (bytes) to use for downloading the package",
              args: {
                name: "CHUNK_SIZE",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--destination",
              description:
                "Path where you want to save the downloaded attachment files",
              priority: 100,
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
            {
              name: "--location",
              description: "Location of the attachment",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--oci-version-name",
              description:
                "For Docker-format repositories only. The version name of the OCI artifact to download",
              args: {
                name: "OCI_VERSION_NAME",
                description: "String",
              },
            },
            {
              name: "--parallelism",
              description:
                "Specifies the number of threads to use for downloading the attachment files in parallel",
              args: {
                name: "PARALLELISM",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--repository",
              description: "Repository of the attachment",
              args: {
                name: "REPOSITORY",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ATTACHMENT",
            description:
              "ID of the attachment or fully qualified identifier for the attachment",
          },
        },
        {
          name: "list",
          description: "List Artifact Registry attachments",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--attachment-type",
              description: "Type for the list of attachments",
              hidden: true,
              args: {
                name: "ATTACHMENT_TYPE",
                description: "String",
              },
            },
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
            optLocation7,
            optLogHttp,
            optPageSize,
            optProject,
            optQuiet,
            optRepository,
            optSortBy,
            {
              name: "--target",
              description: "Target for the list of attachments",
              args: {
                name: "TARGET",
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
      name: "docker",
      description: "Manage Artifact Registry container images and tags",
      subcommands: [
        {
          name: "images",
          description: "Manage Artifact Registry container images",
          subcommands: [
            {
              name: "delete",
              description: "Delete an Artifact Registry container image",
              options: [
                optAccessTokenFile,
                optAccount,
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--delete-tags",
                  description:
                    "If specified, all tags associated with the image are deleted",
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
                {
                  name: "--no-delete-tags",
                  description:
                    "If specified, all tags associated with the image are deleted",
                  hidden: true,
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "IMAGE",
                description: "A container image",
              },
            },
            {
              name: "describe",
              description: "Describe an Artifact Registry container image",
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
                  name: "--metadata-filter",
                  description:
                    "Additional filter to fetch metadata for a given qualified image reference",
                  args: {
                    name: "METADATA_FILTER",
                    description: "String",
                  },
                },
                {
                  name: "--no-show-all-metadata",
                  description:
                    "Include all metadata in the output. Metadata will be grouped by Grafeas kind, with an additional section for intoto provenance metadata",
                  hidden: true,
                },
                {
                  name: "--no-show-build-details",
                  description: "Include build metadata in the output",
                  hidden: true,
                },
                {
                  name: "--no-show-deployment",
                  description: "Include deployment metadata in the output",
                  hidden: true,
                },
                {
                  name: "--no-show-image-basis",
                  description: "Include base image metadata in the output",
                  hidden: true,
                },
                {
                  name: "--no-show-package-vulnerability",
                  description: "Include vulnerability metadata in the output",
                  hidden: true,
                },
                {
                  name: "--no-show-provenance",
                  description:
                    "Include intoto provenance metadata in the output, in the provenance_summary section. To see all build metadata in the output, use --show-all-metadata or --show-build-details",
                  hidden: true,
                },
                {
                  name: "--no-show-sbom-references",
                  description: "Include SBOM metadata in the output",
                  hidden: true,
                },
                optProject,
                optQuiet,
                {
                  name: "--show-all-metadata",
                  description:
                    "Include all metadata in the output. Metadata will be grouped by Grafeas kind, with an additional section for intoto provenance metadata",
                },
                {
                  name: "--show-build-details",
                  description: "Include build metadata in the output",
                },
                {
                  name: "--show-deployment",
                  description: "Include deployment metadata in the output",
                },
                {
                  name: "--show-image-basis",
                  description: "Include base image metadata in the output",
                },
                {
                  name: "--show-package-vulnerability",
                  description: "Include vulnerability metadata in the output",
                },
                {
                  name: "--show-provenance",
                  description:
                    "Include intoto provenance metadata in the output, in the provenance_summary section. To see all build metadata in the output, use --show-all-metadata or --show-build-details",
                },
                {
                  name: "--show-sbom-references",
                  description: "Include SBOM metadata in the output",
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "IMAGE",
                description: "A container image",
              },
            },
            {
              name: "get-operation",
              description: "Get an On-Demand Scanning operation",
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
                  description: "Cloud multi-region",
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
                name: "OPERATION",
                description:
                  "ID of the operation or fully qualified identifier for the operation",
              },
            },
            {
              name: "list",
              description: "List Artifact Registry container images",
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
                {
                  name: "--include-tags",
                  description:
                    "If specified, tags associated with each image digest are displayed up to a maximum of 100 tags per version",
                },
                optLimit,
                optLogHttp,
                {
                  name: "--no-include-tags",
                  description:
                    "If specified, tags associated with each image digest are displayed up to a maximum of 100 tags per version",
                  hidden: true,
                },
                {
                  name: "--no-show-occurrences",
                  description: "Show summaries of the various occurrence types",
                  hidden: true,
                },
                {
                  name: "--occurrence-filter",
                  description:
                    "A filter for the occurrences which will be summarized",
                  args: {
                    name: "OCCURRENCE_FILTER",
                    description: "String",
                  },
                },
                optPageSize,
                optProject,
                optQuiet,
                {
                  name: "--show-occurrences",
                  description: "Show summaries of the various occurrence types",
                },
                {
                  name: "--show-occurrences-from",
                  description:
                    "The number of the most recent images for which to summarize occurrences",
                  args: {
                    name: "SHOW_OCCURRENCES_FROM",
                    description: "Int",
                  },
                },
                optSortBy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "IMAGE_PATH",
                description:
                  "An Artifact Registry repository or a container image. If not specified, default config values are used",
                isOptional: true,
              },
            },
            {
              name: "list-vulnerabilities",
              description: "List On-Demand Scanning vulnerabilities",
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
                optLimit,
                {
                  name: "--location",
                  description: "Cloud multi-region",
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                optPageSize,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SCAN",
                description:
                  "ID of the scan or fully qualified identifier for the scan",
              },
            },
            {
              name: "scan",
              description: "Perform a vulnerability scan on a container image",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--additional-package-types",
                  description:
                    "(DEPRECATED) A comma-separated list of package types to scan in addition to OS packages",
                  deprecated: true,
                  args: {
                    name: "ADDITIONAL_PACKAGE_TYPES",
                    description: "List",
                  },
                },
                optAsync,
                optBillingProject,
                optConfiguration,
                {
                  name: "--experimental-package-types",
                  description:
                    "(DEPRECATED) A comma-separated list of experimental package types to scan in addition to OS packages and officially supported third party packages",
                  hidden: true,
                  deprecated: true,
                  args: {
                    name: "EXPERIMENTAL_PACKAGE_TYPES",
                    description: "List",
                  },
                },
                {
                  name: "--fake-extraction",
                  description:
                    "Whether to use fake packages/versions instead of performing extraction. This flag is for test purposes only",
                  hidden: true,
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
                  description:
                    "The API location in which to perform package analysis. Consider choosing a location closest to where you are located. Proximity to the container image does not affect response time. _LOCATION_ must be one of:",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: ["asia", "europe", "us"],
                  },
                },
                optLogHttp,
                optNoAsync,
                {
                  name: "--no-fake-extraction",
                  description:
                    "Whether to use fake packages/versions instead of performing extraction. This flag is for test purposes only",
                  hidden: true,
                },
                {
                  name: "--no-remote",
                  description:
                    "Whether the container image is located remotely or on your local machine",
                  hidden: true,
                },
                {
                  name: "--no-verbose-errors",
                  description: "Log internal errors",
                  hidden: true,
                },
                optProject,
                optQuiet,
                {
                  name: "--remote",
                  description:
                    "Whether the container image is located remotely or on your local machine",
                },
                {
                  name: "--skip-package-types",
                  description:
                    "A comma-separated list of package types to skip when scanning. _SKIP_PACKAGE_TYPES_ must be one of:",
                  args: {
                    name: "SKIP_PACKAGE_TYPES",
                    description: "List",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                {
                  name: "--verbose-errors",
                  description: "Log internal errors",
                  hidden: true,
                },
                optVerbosity,
              ],
              args: {
                name: "RESOURCE_URI",
                description:
                  "A container image in a Google Cloud registry (Artifact Registry or Container Registry), or a local container image",
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
          name: "tags",
          description: "Manage Artifact Registry container image tags",
          subcommands: [
            {
              name: "add",
              description:
                "Add a tag to a container image in Artifact Registry",
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
                  name: "DOCKER_IMAGE",
                  description:
                    "Docker image - The container image that you want to tag",
                },
                {
                  name: "DOCKER_TAG",
                  description: "Image tag - The container image tag",
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a tag from a container image in Artifact Registry",
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
                name: "DOCKER_TAG",
                description: "Image tag - The container image tag",
              },
            },
            {
              name: "list",
              description:
                "List all tags associated with a container image in Artifact Registry",
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
                name: "IMAGE_PATH",
                description:
                  "An Artifact Registry repository or a container image. If not specified, default config values are used",
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
          name: "upgrade",
          description:
            "Commands to support Container Registry to Artifact Registry upgrade",
          subcommands: [
            {
              name: "migrate",
              description:
                "Migrate projects from Container Registry to Artifact Registry",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                {
                  name: "--canary-reads",
                  description:
                    "Send only a percent of reads to Artifact Registry. The rest of reads and all writes are sent to Container Registry",
                  args: {
                    name: "PERCENT",
                    description: "Int",
                  },
                },
                optConfiguration,
                {
                  name: "--copy-only",
                  description: "Only perform image copying",
                },
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--from-gcr",
                  description:
                    "Container Registry host + project to copy from. This flag is only used when migrating to pkg.dev repos. Example: gcr.io/my-project",
                  args: {
                    name: "GCR_HOST/PROJECT_ID",
                    description: "String",
                  },
                },
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                {
                  name: "--input-iam-policy-dir",
                  description:
                    "During the IAM update step, the tool applies all iam policies in the given directory",
                  args: {
                    name: "DIRECTORY",
                    description: "String",
                  },
                },
                {
                  name: "--last-uploaded-versions",
                  description:
                    "Only copy the N most recently uploaded versions of each image. More than N images may be copied if new images are uploaded during migration",
                  args: {
                    name: "N",
                    description: "Int",
                  },
                },
                optLogHttp,
                {
                  name: "--max-threads",
                  description:
                    "Max number of images to copy simultaneously. Consider quota usage when increasing this",
                  args: {
                    name: "MAX_THREADS",
                    description: "Int",
                  },
                },
                {
                  name: "--no-copy-only",
                  description: "Only perform image copying",
                  hidden: true,
                },
                {
                  name: "--no-skip-iam-update",
                  description:
                    "Migrate without changing iam-policy. Users without Artifact Registry permissions will not have access to migrated images",
                  hidden: true,
                },
                {
                  name: "--no-skip-pre-copy",
                  description:
                    "Skip the initial copy of recent images before enabling redirection",
                  hidden: true,
                },
                {
                  name: "--no-use-analyze-iam",
                  description:
                    "Use analyzeIAMPolicy to get IAM bindings. If false, tooling iterates through IAM bindings itself, which is slower, but doesn't require anlayzeIAMPolicy quota",
                  hidden: true,
                },
                {
                  name: "--output-iam-policy-dir",
                  description:
                    "Outputs Artifact Registry-equivalent bindings to this directory during IAM update step and then exits the tool. After any neccesary modifications are made, the tool can be rerun with --input-iam-policy-dir to continue migration with the generated bindings",
                  args: {
                    name: "DIRECTORY",
                    description: "String",
                  },
                },
                {
                  name: "--pkg-dev-location",
                  description:
                    "The location of the pkg-dev repository you are migrating to. If not specified, migration is always done to the same multi-region as GCR. Setting this flag can cause cross-regional copying and lead to billing charges",
                  args: {
                    name: "PKG_DEV_LOCATION",
                    description: "String",
                  },
                },
                optProject,
                {
                  name: "--projects",
                  description:
                    "Comma seperated list of Container Registry projects to migrate to Artifact Registry gcr.io repositories",
                  args: {
                    name: "PROJECTS",
                    description: "String",
                  },
                },
                optQuiet,
                {
                  name: "--recent-images",
                  description:
                    "Only copy images pulled or pushed in the last NUM_DAYS days. NUM_DAYS must be between 30 and 90 inclusive",
                  args: {
                    name: "NUM_DAYS",
                    description: "Int",
                  },
                },
                {
                  name: "--skip-iam-update",
                  description:
                    "Migrate without changing iam-policy. Users without Artifact Registry permissions will not have access to migrated images",
                },
                {
                  name: "--skip-pre-copy",
                  description:
                    "Skip the initial copy of recent images before enabling redirection",
                },
                {
                  name: "--to-pkg-dev",
                  description:
                    "Artifact Registry pkg.dev project ID and repository ID to copy to. Example: my-project/my-repo",
                  args: {
                    name: "PROJECT_ID/REPOSITORY_ID",
                    description: "String",
                  },
                },
                optTraceToken,
                {
                  name: "--use-analyze-iam",
                  description:
                    "Use analyzeIAMPolicy to get IAM bindings. If false, tooling iterates through IAM bindings itself, which is slower, but doesn't require anlayzeIAMPolicy quota. Enabled by default, use *--no-use-analyze-iam* to disable",
                },
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
      name: "files",
      description: "Manage Artifact Registry files",
      subcommands: [
        {
          name: "delete",
          description: "Delete an Artifact Registry file",
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
            optNoAsync,
            optProject,
            optQuiet,
            optRepository3,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FILE",
            description:
              "ID of the file or fully qualified identifier for the file",
            template: "filepaths",
          },
        },
        {
          name: "describe",
          description: "Describe an Artifact Registry file",
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
            optProject,
            optQuiet,
            optRepository3,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FILE",
            description:
              "ID of the file or fully qualified identifier for the file",
            template: "filepaths",
          },
        },
        {
          name: "download",
          description: "Download an Artifact Registry file",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--allow-overwrite",
              description:
                "If specified, the command overwrites an existing file",
            },
            optBillingProject,
            optConfiguration,
            {
              name: "--destination",
              description: "The path where you want to download the file",
              priority: 100,
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
            {
              name: "--local-filename",
              description:
                "If specified, the name of the downloaded file on the local system is set to the value you use for LOCAL_FILENAME. Otherwise the name of the downloaded file is based on the file name in the registry",
              args: {
                name: "LOCAL_FILENAME",
                description: "String",
              },
            },
            {
              name: "--location",
              description: "Location of the file",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--no-allow-overwrite",
              description:
                "If specified, the command overwrites an existing file",
              hidden: true,
            },
            {
              name: "--parallelism",
              description:
                "Specifies the number of threads to use for downloading the file in parallel",
              args: {
                name: "PARALLELISM",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--repository",
              description: "Repository of the file",
              args: {
                name: "REPOSITORY",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FILE",
            description:
              "ID of the file or fully qualified identifier for the file",
            template: "filepaths",
          },
        },
        {
          name: "list",
          description: "List Artifact Registry files",
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
            optLocation6,
            optLogHttp,
            {
              name: "--package",
              description:
                "List all files in a specified artifact, such as a container image or a language package. If you do not use --tag or --version in the command, the command lists files in all versions of the artifact",
              args: {
                name: "PACKAGE",
                description: "String",
              },
            },
            optPageSize,
            optProject,
            optQuiet,
            optRepository,
            optSortBy,
            {
              name: "--tag",
              description:
                "List all files in the artifact version with the specified tag. This flag only works with formats that use tags, such as container images. Use the --package flag to specify the artifact",
              args: {
                name: "TAG",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Update annotations on an Artifact Registry file",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--annotations",
              description:
                "List of annotations in the format of KEY=VALUE pairs to add, update, or remove. Duplicate keys will be overwritten. For more details on annotations, see https://google.aip.dev/148#annotations",
              args: {
                name: "KEY=VALUE",
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
            optLocation3,
            optLogHttp,
            optProject,
            optQuiet,
            optRepository3,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FILE",
            description:
              "ID of the file or fully qualified identifier for the file",
            template: "filepaths",
          },
        },
        {
          name: "upload",
          description: "Uploads files to Artifact Registry",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--file",
              description:
                "The name under which the file will be uploaded. If not specified, the name of the local file is used",
              args: {
                name: "FILE",
                description: "String",
                template: "filepaths",
              },
            },
            {
              name: "--file-type",
              description:
                "The type of the file to upload. FILE_TYPE must be one of:",
              args: {
                name: "FILE_TYPE",
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
            optLocation6,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-skip-existing",
              description:
                "If specified, skip uploading files that already exist in the repository, and continue to upload the remaining files",
              hidden: true,
            },
            optProject,
            optQuiet,
            optRepository,
            {
              name: "--skip-existing",
              description:
                "If specified, skip uploading files that already exist in the repository, and continue to upload the remaining files",
            },
            {
              name: "--source",
              description: "The path to the file you are uploading",
              args: {
                name: "SOURCE",
                description: "String",
              },
            },
            {
              name: "--source-directory",
              description: "The directory you are uploading",
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
      name: "generic",
      description: "Manage Artifact Registry generic artifacts",
      subcommands: [
        {
          name: "download",
          description:
            "Download a generic artifact from a generic artifact repository",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--chunk-size",
              description:
                "If specified, the chunk size (bytes) to use for downloading the package",
              args: {
                name: "CHUNK_SIZE",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--destination",
              description:
                "The path where you want to save the downloaded file",
              priority: 100,
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
            optLocation6,
            optLogHttp,
            {
              name: "--name",
              description:
                "If specified, the file name within the artifact to download",
              args: {
                name: "NAME",
                description: "String",
              },
            },
            {
              name: "--package",
              description: "The artifact to download",
              priority: 100,
              args: {
                name: "ARTIFACT",
                description: "String",
              },
            },
            {
              name: "--parallelism",
              description:
                "Specifies the number of threads to use for downloading the file in parallel",
              args: {
                name: "PARALLELISM",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optRepository,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "upload",
          description: "Uploads an artifact to a generic repository",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--destination-path",
              description:
                "Use to specify the path to upload a generic artifact to within a folder structure",
              args: {
                name: "DESTINATION_PATH",
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
            optLocation6,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-skip-existing",
              description:
                "If specified, skip uploading files that already exist in the repository, and continue to upload the remaining files",
              hidden: true,
            },
            {
              name: "--package",
              description: "The package to upload",
              priority: 100,
              args: {
                name: "PACKAGE",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optRepository,
            {
              name: "--skip-existing",
              description:
                "If specified, skip uploading files that already exist in the repository, and continue to upload the remaining files",
            },
            {
              name: "--source",
              description: "The path to the file you are uploading",
              args: {
                name: "SOURCE",
                description: "String",
              },
            },
            {
              name: "--source-directory",
              description: "The directory you are uploading",
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
      name: "go",
      description: "Manage Artifact Registry Go modules",
      subcommands: [
        {
          name: "auth",
          description:
            "Print authentication commands for the GOAUTH environment variable",
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
              name: "--json-key",
              description:
                "The path to the JSON key file to use for authentication. If not specified, the authentication commands printed will use the token from the logged in user",
              args: {
                name: "JSON_KEY",
                description: "String",
              },
            },
            {
              name: "--location",
              description:
                "The location of the repository to print commands for",
              priority: 100,
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
            name: "URL",
            description: "A URL generated by Go to set up authentication",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "upload",
          description: "Upload a Go module to an artifact repository",
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
            optLocation6,
            optLogHttp,
            {
              name: "--module-path",
              description: "The module path of the Go module",
              priority: 100,
              args: {
                name: "MODULE_PATH",
                description: "String",
              },
            },
            optNoAsync,
            optProject,
            optQuiet,
            optRepository,
            {
              name: "--source",
              description:
                "The root directory of the go module source code, defaults to the current directory",
              args: {
                name: "SOURCE",
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
      name: "googet",
      description: "Manage Artifact Registry GooGet packages",
      hidden: true,
      subcommands: [
        {
          name: "import",
          description:
            "Import one or more GooGet packages into an artifact repository",
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
              name: "--gcs-source",
              description:
                "The Google Cloud Storage location of a package to import. Wildcards may be added at the end to import multiple packages",
              priority: 100,
              args: {
                name: "GCS_SOURCE",
                description: "List",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation6,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository",
            isOptional: true,
          },
        },
        {
          name: "upload",
          description: "Upload a GooGet package to an artifact repository",
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
            optLocation6,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optSource,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository",
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
      name: "image-streaming-cache",
      description: "Manage Artifact Registry image streaming caches",
      hidden: true,
      subcommands: [
        {
          name: "create",
          description:
            "Initiates the prewarming of a specified artifact version or tag",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--force",
              description:
                "If set, evicts older items from the cache if the quota is reached",
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation4,
            optLogHttp,
            {
              name: "--no-force",
              description:
                "If set, evicts older items from the cache if the quota is reached",
              hidden: true,
            },
            optPackage,
            optProject,
            optQuiet,
            optRepository2,
            {
              name: "--retention-days",
              description:
                "Number of days to retain the artifact in the cache (e.g., 1-7)",
              args: {
                name: "RETENTION_DAYS",
                description: "Int",
              },
            },
            optStreamLocation,
            {
              name: "--tag",
              description: "The tag name to prewarm (e.g., 'latest')",
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
            name: "ARTIFACT",
            description:
              "The full resource name of the version or tag to prewarm",
            isOptional: true,
          },
        },
        {
          name: "delete",
          description:
            "Removes the prewarmed state of a specific artifact from a specific stream location",
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
            optLocation4,
            optLogHttp,
            optPackage,
            optProject,
            optQuiet,
            optRepository2,
            optStreamLocation,
            {
              name: "--tag",
              description: "The tag to remove (e.g., 'latest')",
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
            name: "ARTIFACT",
            description:
              "The full resource name of the version or tag to remove",
            isOptional: true,
          },
        },
        {
          name: "describe",
          description:
            "Checks and describes the prewarmed status of an artifact",
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
            optLocation4,
            optLogHttp,
            optPackage,
            optProject,
            optQuiet,
            optRepository2,
            optStreamLocation,
            {
              name: "--tag",
              description: "The tag to check (e.g., 'latest')",
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
            name: "ARTIFACT",
            description:
              "The full resource name of the version or tag to check",
            isOptional: true,
          },
        },
        {
          name: "list",
          description:
            "Lists artifacts that are prewarmed within a given repository",
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
            optLocation6,
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
            optRepository,
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
      name: "locations",
      description: "Manage Artifact Registry resource locations",
      subcommands: [
        {
          name: "list",
          description: "List all Artifact Registry supported locations",
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
      name: "operations",
      description: "Manage Artifact Registry long-running operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel an Artifact Registry operation",
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
            {
              name: "--location",
              description:
                "Location of the operation. Overrides the default artifacts/location property value for this command invocation. To configure the default location, use the command: gcloud config set artifacts/location",
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "describe",
          description: "Describe an Artifact Registry operation",
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
              description:
                "Location of the operation. Overrides the default artifacts/location property value for this command invocation. To configure the default location, use the command: gcloud config set artifacts/location",
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
      name: "packages",
      description: "Manage Artifact Registry packages",
      subcommands: [
        {
          name: "delete",
          description: "Delete an Artifact Registry package",
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
            optLocation5,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optRepository4,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PACKAGE",
            description:
              "ID of the package or fully qualified identifier for the package",
          },
        },
        {
          name: "describe",
          description: "Describe an Artifact Registry package",
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
            optLocation5,
            optLogHttp,
            optProject,
            optQuiet,
            optRepository4,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PACKAGE",
            description:
              "ID of the package or fully qualified identifier for the package",
          },
        },
        {
          name: "list",
          description: "List Artifact Registry packages",
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
            optLocation6,
            optLogHttp,
            optPageSize,
            optProject,
            optQuiet,
            optRepository,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Update annotations on an Artifact Registry package",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--annotations",
              description:
                "List of annotations in the format of KEY=VALUE pairs to add, update, or remove. Duplicate keys will be overwritten. For more details on annotations, see https://google.aip.dev/148#annotations",
              args: {
                name: "ANNOTATIONS",
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
            optLocation5,
            optLogHttp,
            optProject,
            optQuiet,
            optRepository4,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PACKAGE",
            description:
              "ID of the package or fully qualified identifier for the package",
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
      name: "print-settings",
      description: "Print snippets to add to native tools settings files",
      subcommands: [
        {
          name: "gradle",
          description:
            "Print a snippet to add a repository to the Gradle build.gradle file",
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
            optJsonKey,
            optLocation6,
            optLogHttp,
            optProject,
            optQuiet,
            optRepository,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "mvn",
          description:
            "Print a snippet to add a Maven repository to the pom.xml file",
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
            optJsonKey,
            optLocation6,
            optLogHttp,
            optProject,
            optQuiet,
            optRepository,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "npm",
          description: "Print credential settings to add to the .npmrc file",
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
            optJsonKey,
            optLocation6,
            optLogHttp,
            optProject,
            optQuiet,
            optRepository,
            {
              name: "--scope",
              description:
                "The scope to associate with the Artifact Registry registry. If not specified, Artifact Registry is set as the default registry",
              args: {
                name: "SCOPE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "python",
          description:
            "Print credential settings to add to the .pypirc and pip.conf files",
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
              name: "--json-key",
              description:
                "Path to service account JSON key. If not specified, output returns either credentials for an active service account or a placeholder for the current user account",
              args: {
                name: "JSON_KEY",
                description: "String",
              },
            },
            optLocation6,
            optLogHttp,
            optProject,
            optQuiet,
            optRepository,
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
      name: "projects",
      description:
        "Manage Artifact Registry project-level configurations for a specific location",
      subcommands: [
        {
          name: "describe",
          description: "Describe project configuration",
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
        },
        {
          name: "update",
          description: "Update project configuration",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--clear-platform-logs",
              description:
                "Clear platform logging settings for the project in this location to fall back to organization settings or AR defaults",
            },
            optConfiguration,
            {
              name: "--disable-platform-logs",
              description:
                "Disable platform logging for the project in this location",
            },
            {
              name: "--enable-platform-logs",
              description:
                "Enable platform logging for the project in this location",
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
              name: "--no-clear-platform-logs",
              description:
                "Clear platform logging settings for the project in this location to fall back to organization settings or AR defaults",
              hidden: true,
            },
            {
              name: "--no-disable-platform-logs",
              description:
                "Disable platform logging for the project in this location",
              hidden: true,
            },
            {
              name: "--no-enable-platform-logs",
              description:
                "Enable platform logging for the project in this location",
              hidden: true,
            },
            optProject,
            optQuiet,
            optSeverity,
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
      name: "repositories",
      description: "Manage Artifact Registry repositories",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "Add an IAM policy binding to the IAM policy of an Artifact Registry repository",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--condition",
              description:
                "A condition to include in the binding. When the condition is explicitly specified as `None` (`--condition=None`), a binding without a condition is added. When the condition is specified and is not `None`, `--role` cannot be a basic role. Basic roles are `roles/editor`, `roles/owner`, and `roles/viewer`. For more on conditions, refer to the conditions overview guide: https://cloud.google.com/iam/docs/conditions-overview",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--condition-from-file",
              description:
                "Path to a local JSON or YAML file that defines the condition. To see available fields, see the help for `--condition`. Use a full or relative path to a local file containing the value of condition",
              args: {
                name: "CONDITION_FROM_FILE",
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
            optLocation7,
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
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository",
          },
        },
        {
          name: "copy",
          description: "Copy an Artifact Registry repository",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--continue-on-skipped-version",
              description:
                "If true, the repo copy operation will continue when a non-transient version copy error occurs, rather than failing the entire copy operation. The skipped version name and error will be stored in the lro metadata and response",
            },
            {
              name: "--exclude-all-tags",
              description: "Exclude all tags for each artifact version copied",
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
              name: "--include-all-attachments",
              description:
                "Include all attachments for each artifact version copied",
            },
            optLocation6,
            optLogHttp,
            {
              name: "--max-version-age-days",
              description:
                "If set, only versions updated within the specified number of days (24-hour periods) up to the operation's start time will be copied. If unset or set to 0, all versions will be copied. This arg provides a convenient way to speed up regular repository copies by skipping older versions",
              args: {
                name: "MAX_VERSION_AGE_DAYS",
                description: "Int",
              },
            },
            optNoAsync,
            {
              name: "--no-continue-on-skipped-version",
              description:
                "If true, the repo copy operation will continue when a non-transient version copy error occurs, rather than failing the entire copy operation. The skipped version name and error will be stored in the lro metadata and response",
              hidden: true,
            },
            {
              name: "--no-exclude-all-tags",
              description: "Exclude all tags for each artifact version copied",
              hidden: true,
            },
            {
              name: "--no-include-all-attachments",
              description:
                "Include all attachments for each artifact version copied",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--source-repo",
              description: "The source repository path to copy artifacts from",
              priority: 100,
              args: {
                name: "SOURCE_REPOSITORY",
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
            isOptional: true,
          },
        },
        {
          name: "create",
          description: "Create an Artifact Registry repository",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--allow-sbom-generation",
              description: "Allow SBOM generation on the repository",
              hidden: true,
            },
            {
              name: "--allow-snapshot-overwrites",
              description:
                "(Maven only) Allow repository users to publish a snapshot that overwrites the same snapshot version in the repository",
            },
            {
              name: "--allow-vulnerability-scanning",
              description: "Allow vulnerability scanning on the repository",
            },
            {
              name: "--alternative-hostname",
              description:
                "An alternative hostname that a repository can be accessed through",
              hidden: true,
              args: {
                name: "ALTERNATIVE_HOSTNAME",
                description: "String",
              },
            },
            {
              name: "--alternative-hostname-default",
              description:
                "Whether this is the default repository for the alternative hostname if no repository matches the path prefix",
              hidden: true,
            },
            {
              name: "--alternative-hostname-path-prefix",
              description:
                "An alternative hostname path prefix that a repository can be accessed through",
              hidden: true,
              args: {
                name: "ALTERNATIVE_HOSTNAME_PATH_PREFIX",
                description: "String",
              },
            },
            optAsync,
            optBillingProject,
            {
              name: "--clear-platform-logs",
              description:
                "Clear platform logging settings for the repository to fall back to project settings",
            },
            optConfiguration,
            {
              name: "--description",
              description: "Description for the repository",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--disable-platform-logs",
              description: "Disable platform logging for the repository",
            },
            {
              name: "--disable-remote-validation",
              description:
                "Do not make an HTTP request to validate the remote upstream. Not recommended when setting a custom remote upstream unless you are absolutely sure your upstream URI and any auth is valid",
            },
            {
              name: "--disable-sbom-generation",
              description: "Disable SBOM generation on the repository",
              hidden: true,
            },
            {
              name: "--disable-vulnerability-scanning",
              description: "Disable vulnerability scanning on the repository",
            },
            {
              name: "--enable-ingestion-attestation",
              description:
                "Enable generating attestation with verifiable signature on imported files in remote repositories",
              hidden: true,
            },
            {
              name: "--enable-platform-logs",
              description: "Enable platform logging for the repository",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--immutable-tags",
              description:
                "(Docker only) Prevent changes to tagged images in the repository. Tags cannot be deleted or moved to a different image digest, and tagged images cannot be deleted",
            },
            optImpersonateServiceAccount,
            {
              name: "--kms-key",
              description:
                "Name of the encryption key that's used for encrypting the contents of the repository",
              args: {
                name: "KMS_KEY",
                description: "String",
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
            optLocation7,
            optLogHttp,
            {
              name: "--mode",
              description:
                "Mode is the type of the repository - Standard, Virtual or Remote. _MODE_ must be one of:",
              args: {
                name: "MODE",
                suggestions: [
                  "connector-repository",
                  "none",
                  "remote-repository",
                  "standard-repository",
                  "virtual-repository",
                ],
              },
            },
            {
              name: "--no-allow-sbom-generation",
              description: "Allow SBOM generation on the repository",
              hidden: true,
            },
            {
              name: "--no-allow-snapshot-overwrites",
              description:
                "(Maven only) Allow repository users to publish a snapshot that overwrites the same snapshot version in the repository",
              hidden: true,
            },
            {
              name: "--no-allow-vulnerability-scanning",
              description: "Allow vulnerability scanning on the repository",
              hidden: true,
            },
            {
              name: "--no-alternative-hostname-default",
              description:
                "Whether this is the default repository for the alternative hostname if no repository matches the path prefix",
              hidden: true,
            },
            optNoAsync,
            {
              name: "--no-clear-platform-logs",
              description:
                "Clear platform logging settings for the repository to fall back to project settings",
              hidden: true,
            },
            {
              name: "--no-disable-platform-logs",
              description: "Disable platform logging for the repository",
              hidden: true,
            },
            {
              name: "--no-disable-remote-validation",
              description:
                "Do not make an HTTP request to validate the remote upstream. Not recommended when setting a custom remote upstream unless you are absolutely sure your upstream URI and any auth is valid",
              hidden: true,
            },
            {
              name: "--no-disable-sbom-generation",
              description: "Disable SBOM generation on the repository",
              hidden: true,
            },
            {
              name: "--no-disable-vulnerability-scanning",
              description: "Disable vulnerability scanning on the repository",
              hidden: true,
            },
            {
              name: "--no-enable-ingestion-attestation",
              description:
                "Enable generating attestation with verifiable signature on imported files in remote repositories",
              hidden: true,
            },
            {
              name: "--no-enable-platform-logs",
              description: "Enable platform logging for the repository",
              hidden: true,
            },
            {
              name: "--no-immutable-tags",
              description:
                "(Docker only) Prevent changes to tagged images in the repository. Tags cannot be deleted or moved to a different image digest, and tagged images cannot be deleted",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--remote-apt-repo",
              description:
                "(Apt only) Repository base for apt remote repository. REMOTE_APT_REPO must be one of: [debian, debian-snapshot, ubuntu]",
              args: {
                name: "REMOTE_APT_REPO",
                description: "String",
              },
            },
            {
              name: "--remote-apt-repo-path",
              description:
                "(Apt only) Remaining URL path to apt remote repository",
              args: {
                name: "REMOTE_APT_REPO_PATH",
                description: "String",
              },
            },
            {
              name: "--remote-docker-repo",
              description:
                "(Docker only) Repo upstream for docker remote repository. REMOTE_DOCKER_REPO can be either: - one of the following enums: [docker-hub]. - an http/https custom registry uri (ex: https://my.docker.registry)",
              args: {
                name: "REMOTE_DOCKER_REPO",
                description: "String",
              },
            },
            {
              name: "--remote-go-repo",
              description:
                '(Go only) Repo upstream for Go remote repository. "https://proxy.golang.org/" is the only valid value',
              args: {
                name: "REMOTE_GO_REPO",
                description: "String",
              },
            },
            {
              name: "--remote-mvn-repo",
              description:
                "(Maven only) Repo upstream for maven remote repository. REMOTE_MVN_REPO can be either: - one of the following enums: [maven-central]. - an http/https custom registry uri (ex: https://my.maven.registry)",
              args: {
                name: "REMOTE_MVN_REPO",
                description: "String",
              },
            },
            {
              name: "--remote-npm-repo",
              description:
                "(Npm only) Repo upstream for npm remote repository. REMOTE_NPM_REPO can be either: - one of the following enums: [npmjs]. - an http/https custom registry uri (ex: https://my.npm.registry)",
              args: {
                name: "REMOTE_NPM_REPO",
                description: "String",
              },
            },
            {
              name: "--remote-password-secret-version",
              description:
                "Secret Manager secret version that contains password for the remote repository upstream",
              args: {
                name: "REMOTE_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--remote-python-repo",
              description:
                "(Python only) Repo upstream for python remote repository. REMOTE_PYTHON_REPO can be either: - one of the following enums: [pypi]. - an http/https custom registry uri (ex: https://my.python.registry)",
              args: {
                name: "REMOTE_PYTHON_REPO",
                description: "String",
              },
            },
            {
              name: "--remote-repo",
              description:
                'An upstream for a given remote repository. Ex: "https://github.com", "https://docker.io/v2/" are valid values for their given formats of Go and Docker respectively',
              hidden: true,
              args: {
                name: "REMOTE_REPO",
                description: "String",
              },
            },
            {
              name: "--remote-repo-config-desc",
              description: "The description for the remote repository config",
              args: {
                name: "REMOTE_REPO_CONFIG_DESC",
                description: "String",
              },
            },
            {
              name: "--remote-username",
              description: "Remote Repository upstream registry username",
              args: {
                name: "REMOTE_USERNAME",
                description: "String",
              },
            },
            {
              name: "--remote-yum-repo",
              description:
                "(Yum only) Repository base for yum remote repository. REMOTE_YUM_REPO must be one of: [centos, centos-debug, centos-stream, centos-vault, epel, rocky]",
              args: {
                name: "REMOTE_YUM_REPO",
                description: "String",
              },
            },
            {
              name: "--remote-yum-repo-path",
              description:
                "(Yum only) Remaining URL path to yum remote repository",
              args: {
                name: "REMOTE_YUM_REPO_PATH",
                description: "String",
              },
            },
            {
              name: "--repository-format",
              description:
                "Format of the repository. REPOSITORY_FORMAT must be one of:",
              priority: 100,
              args: {
                name: "REPOSITORY_FORMAT",
                description: "String",
              },
            },
            {
              name: "--service-directory-config",
              description:
                "Service Directory config link for using Private Networks. Format: projects/<project>/locations/<location>/namespaces/<namespace>/services/<service>",
              hidden: true,
              args: {
                name: "SERVICE_DIRECTORY_CONFIG",
                description: "String",
              },
            },
            optSeverity,
            optTraceToken,
            {
              name: "--upstream-policy-file",
              description:
                '(Virtual Repositories only) is the upstreams for the Virtual Repository. Example of the file contents: [ { "id": "test1", "repository": "projects/p1/locations/us-central1/repositories/repo1", "priority": 1 }, { "id": "test2", "repository": "projects/p2/locations/us-west2/repositories/repo2", "priority": 2 } ]',
              args: {
                name: "FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--version-policy",
              description:
                "(Maven only) The package versions that the repository will store. _VERSION_POLICY_ must be one of:",
              args: {
                name: "VERSION_POLICY",
                suggestions: ["none", "release", "snapshot"],
              },
            },
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository",
          },
        },
        {
          name: "delete",
          description: "Delete an Artifact Registry repository",
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
            optLocation7,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
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
          name: "delete-cleanup-policies",
          description:
            "Delete cleanup policies from an Artifact Registry repository",
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
            optLocation7,
            optLogHttp,
            {
              name: "--policynames",
              description:
                "Comma-separated list of cleanup policy names to delete",
              priority: 100,
              args: {
                name: "POLICYNAMES",
                description: "String",
              },
            },
            optProject,
            optQuiet,
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
          description: "Describe an Artifact Registry repository",
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
            optLocation7,
            optLogHttp,
            optProject,
            optQuiet,
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
          name: "get-iam-policy",
          description: "Get IAM policy for an Artifact Registry repository",
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
            optLocation7,
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
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository",
          },
        },
        {
          name: "list",
          description: "List repositories in the specified project",
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
          name: "list-cleanup-policies",
          description:
            "List cleanup policies of an Artifact Registry repository",
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
            optLocation7,
            optLogHttp,
            optProject,
            optQuiet,
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
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding from the IAM policy of an Artifact Registry repository",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--all",
              description:
                "Remove all bindings with this role and principal, irrespective of any conditions",
            },
            optBillingProject,
            {
              name: "--condition",
              description:
                "The condition of the binding that you want to remove. When the condition is explicitly specified as `None` (`--condition=None`), a binding without a condition is removed. Otherwise, only a binding with a condition that exactly matches the specified condition (including the optional description) is removed. For more on conditions, refer to the conditions overview guide: https://cloud.google.com/iam/docs/conditions-overview",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--condition-from-file",
              description:
                "Path to a local JSON or YAML file that defines the condition. To see available fields, see the help for `--condition`. Use a full or relative path to a local file containing the value of condition",
              args: {
                name: "CONDITION_FROM_FILE",
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
            optLocation7,
            optLogHttp,
            {
              name: "--member",
              description:
                "The principal to remove the binding for. Should be of the form `user|group|serviceAccount:email` or `domain:domain`",
              priority: 100,
              args: {
                name: "PRINCIPAL",
                description: "String",
              },
            },
            {
              name: "--no-all",
              description:
                "Remove all bindings with this role and principal, irrespective of any conditions",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--role",
              description: "The role to remove the principal from",
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
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository",
          },
        },
        {
          name: "set-cleanup-policies",
          description:
            "Set or update cleanup policies for an Artifact Registry repository",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--dry-run",
              description:
                "Disable deleting images according to cleanup policies",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation7,
            optLogHttp,
            {
              name: "--no-dry-run",
              description:
                "Disable deleting images according to cleanup policies",
              hidden: true,
            },
            {
              name: "--overwrite",
              description:
                "(REMOVED) Delete existing policies and replace with the specified set of policies",
              hidden: true,
              args: {
                name: "OVERWRITE",
                description: "String",
              },
            },
            {
              name: "--policy",
              description:
                "Path to a local JSON formatted file containing valid cleanup policies",
              args: {
                name: "POLICY",
              },
            },
            optProject,
            optQuiet,
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
          name: "set-iam-policy",
          description: "Set the IAM policy for an Artifact Registry repository",
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
            optLocation7,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: [
            {
              name: "REPOSITORY",
              description:
                "ID of the repository or fully qualified identifier for the repository",
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
          description: "Update an Artifact Registry repository",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--allow-sbom-generation",
              description: "Allow SBOM generation on the repository",
              hidden: true,
            },
            {
              name: "--allow-vulnerability-scanning",
              description: "Allow vulnerability scanning on the repository",
            },
            {
              name: "--alternative-hostname",
              description:
                "An alternative hostname that a repository can be accessed through",
              hidden: true,
              args: {
                name: "ALTERNATIVE_HOSTNAME",
                description: "String",
              },
            },
            {
              name: "--alternative-hostname-default",
              description:
                "Whether this is the default repository for the alternative hostname if no repository matches the path prefix",
              hidden: true,
            },
            {
              name: "--alternative-hostname-path-prefix",
              description:
                "An alternative hostname path prefix that a repository can be accessed through",
              hidden: true,
              args: {
                name: "ALTERNATIVE_HOSTNAME_PATH_PREFIX",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
            },
            {
              name: "--clear-platform-logs",
              description:
                "Clear platform logging settings for the repository to fall back to project settings",
            },
            optConfiguration,
            {
              name: "--description",
              description: "Description for the repository",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--disable-platform-logs",
              description: "Disable platform logging for the repository",
            },
            {
              name: "--disable-remote-validation",
              description:
                "Do not make an HTTP request to validate the remote upstream. Not recommended when setting a custom remote upstream unless you are absolutely sure your upstream URI and any auth is valid",
            },
            {
              name: "--disable-sbom-generation",
              description: "Disable SBOM generation on the repository",
              hidden: true,
            },
            {
              name: "--disable-vulnerability-scanning",
              description: "Disable vulnerability scanning on the repository",
            },
            {
              name: "--enable-ingestion-attestation",
              description:
                "Enable generating attestation with verifiable signature on imported files in remote repositories",
              hidden: true,
            },
            {
              name: "--enable-platform-logs",
              description: "Enable platform logging for the repository",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            {
              name: "--immutable-tags",
              description:
                "(Docker only) Prevent changes to tagged images in the repository. Tags cannot be deleted or moved to a different image digest, and tagged images cannot be deleted",
            },
            optImpersonateServiceAccount,
            optLocation7,
            optLogHttp,
            {
              name: "--no-allow-sbom-generation",
              description: "Allow SBOM generation on the repository",
              hidden: true,
            },
            {
              name: "--no-allow-vulnerability-scanning",
              description: "Allow vulnerability scanning on the repository",
              hidden: true,
            },
            {
              name: "--no-alternative-hostname-default",
              description:
                "Whether this is the default repository for the alternative hostname if no repository matches the path prefix",
              hidden: true,
            },
            {
              name: "--no-clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
              hidden: true,
            },
            {
              name: "--no-clear-platform-logs",
              description:
                "Clear platform logging settings for the repository to fall back to project settings",
              hidden: true,
            },
            {
              name: "--no-disable-platform-logs",
              description: "Disable platform logging for the repository",
              hidden: true,
            },
            {
              name: "--no-disable-remote-validation",
              description:
                "Do not make an HTTP request to validate the remote upstream. Not recommended when setting a custom remote upstream unless you are absolutely sure your upstream URI and any auth is valid",
              hidden: true,
            },
            {
              name: "--no-disable-sbom-generation",
              description: "Disable SBOM generation on the repository",
              hidden: true,
            },
            {
              name: "--no-disable-vulnerability-scanning",
              description: "Disable vulnerability scanning on the repository",
              hidden: true,
            },
            {
              name: "--no-enable-ingestion-attestation",
              description:
                "Enable generating attestation with verifiable signature on imported files in remote repositories",
              hidden: true,
            },
            {
              name: "--no-enable-platform-logs",
              description: "Enable platform logging for the repository",
              hidden: true,
            },
            {
              name: "--no-immutable-tags",
              description:
                "(Docker only) Prevent changes to tagged images in the repository. Tags cannot be deleted or moved to a different image digest, and tagged images cannot be deleted",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--remote-password-secret-version",
              description:
                "Secret Manager secret version that contains password for the remote repository upstream",
              args: {
                name: "REMOTE_PASSWORD_SECRET_VERSION",
                description: "String",
              },
            },
            {
              name: "--remote-username",
              description: "Remote Repository upstream registry username",
              args: {
                name: "REMOTE_USERNAME",
                description: "String",
              },
            },
            {
              name: "--remove-labels",
              description:
                "List of label keys to remove. If a label does not exist it is silently ignored. If `--update-labels` is also specified then `--update-labels` is applied first",
              args: {
                name: "KEY",
                description: "List",
              },
            },
            optSeverity,
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
            {
              name: "--upstream-policy-file",
              description:
                '(Virtual Repositories only) is the upstreams for the Virtual Repository. Example of the file contents: [ { "id": "test1", "repository": "projects/p1/locations/us-central1/repositories/repo1", "priority": 1 }, { "id": "test2", "repository": "projects/p2/locations/us-west2/repositories/repo2", "priority": 2 } ]',
              args: {
                name: "FILE",
                description: "String",
                template: "filepaths",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository",
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
      name: "rules",
      description: "Manage Artifact Registry rules",
      subcommands: [
        {
          name: "create",
          description: "Create an Artifact Registry rule",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--action",
              description:
                "The action the rule would make, can only be DENY or ALLOW. _ACTION_ must be one of: *allow*, *deny*",
              priority: 100,
              args: {
                name: "ACTION",
                suggestions: ["allow", "deny"],
              },
            },
            optBillingProject,
            {
              name: "--condition",
              description: "The CEL expression for the rule",
              args: {
                name: "CONDITION",
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
            optLocation8,
            optLogHttp,
            {
              name: "--operation",
              description:
                "The operation the rule applies to. _OPERATION_ must be (only one value is supported): *download*",
              args: {
                name: "OPERATION",
                suggestions: ["download"],
              },
            },
            {
              name: "--package",
              description:
                "The package the rule applies to. Empty means the rule is set for the entire repository",
              args: {
                name: "PACKAGE",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optRepository5,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RULE",
            description:
              "ID of the rule or fully qualified identifier for the rule",
          },
        },
        {
          name: "delete",
          description: "Delete an Artifact Registry rule",
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
            optLocation8,
            optLogHttp,
            optProject,
            optQuiet,
            optRepository5,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RULE",
            description:
              "ID of the rule or fully qualified identifier for the rule",
          },
        },
        {
          name: "describe",
          description: "Describe an Artifact Registry rule",
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
            optLocation8,
            optLogHttp,
            optProject,
            optQuiet,
            optRepository5,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RULE",
            description:
              "ID of the rule or fully qualified identifier for the rule",
          },
        },
        {
          name: "list",
          description: "List Artifact Registry rules",
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
            optLocation7,
            optLogHttp,
            optPageSize,
            optProject,
            optQuiet,
            optRepository,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Update an Artifact Registry rule",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--action",
              description:
                "The action the rule would make, can only be DENY or ALLOW. _ACTION_ must be one of: *allow*, *deny*",
              args: {
                name: "ACTION",
                suggestions: ["allow", "deny"],
              },
            },
            optBillingProject,
            {
              name: "--condition",
              description: "The CEL expression for the rule",
              args: {
                name: "CONDITION",
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
            optLocation8,
            optLogHttp,
            {
              name: "--operation",
              description:
                "The operation the rule applies to. _OPERATION_ must be (only one value is supported): *download*",
              args: {
                name: "OPERATION",
                suggestions: ["download"],
              },
            },
            {
              name: "--package",
              description: "The package the rule applies to",
              args: {
                name: "PACKAGE",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optRepository5,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "RULE",
            description:
              "ID of the rule or fully qualified identifier for the rule",
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
      name: "sbom",
      description: "Manage Artifact SBOMs",
      subcommands: [
        {
          name: "export",
          description: "Export SBOM files to Google Cloud Storage",
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
            {
              name: "--uri",
              description:
                "The URI of the Artifact Registry image the SBOM is exported for. A 'gcr.io' image can also be used if redirection is enabled in Artifact Registry. Make sure 'artifactregistry.projectsettings.get' permission is granted to the current gcloud user to verify the redirection status",
              priority: 100,
              args: {
                name: "URI",
                description: "String",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "list",
          description: "List SBOM file references",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--dependency",
              description:
                "List SBOM file references generated when the images were pushed to Artifact Registry and related to the installed package dependency. See https://cloud.google.com/container-analysis/docs/scanning-types for supported packages",
              args: {
                name: "DEPENDENCY",
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
            optPageSize,
            optProject,
            optQuiet,
            {
              name: "--resource",
              description:
                "List SBOM file references related to the image resource uri",
              args: {
                name: "RESOURCE",
                description: "String",
              },
            },
            {
              name: "--resource-prefix",
              description:
                "List SBOM file references related to the resource uri with the resource path prefix",
              args: {
                name: "RESOURCE_PREFIX",
                description: "String",
              },
            },
            {
              name: "--sort-by",
              description:
                "Comma-separated list of resource field key names to sort by. The default order is ascending. Prefix a field with ``~'' for descending order on that field. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*. The default is *occ.create_time*",
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
          name: "load",
          description: "Upload an SBOM file and create a reference occurrence",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--destination",
              description:
                "The storage path will be used to store the SBOM file. Currently only supports Cloud Storage paths start with 'gs://'",
              args: {
                name: "DESTINATION",
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
              name: "--kms-key-version",
              description:
                "Cloud KMS key version to sign the SBOM reference. The key version provided should be the resource ID in the format of `projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]/cryptoKeyVersions/[KEY_VERSION]`",
              args: {
                name: "KMS_KEY_VERSION",
              },
            },
            optLocation2,
            optLogHttp,
            optProject,
            optQuiet,
            {
              name: "--source",
              description: "The SBOM file for uploading",
              priority: 100,
              args: {
                name: "SOURCE",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--uri",
              description:
                "The URI of the artifact the SBOM is generated from. The URI can be a Docker image from any Docker registries. A URI provided with a tag (e.g. `[IMAGE]:[TAG]`) will be resolved into a URI with a digest (`[IMAGE]@sha256:[DIGEST]`). When passing an image which is not from Artifact Registry or Container Registry with a tag, only public images can be resolved. Also, when passing an image which is not from Artifact Registry or Container Registry, the `--destination` flag is required",
              priority: 100,
              args: {
                name: "ARTIFACT_URI",
                description: "String",
              },
            },
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
      name: "settings",
      description: "Manage Artifact Registry project settings",
      subcommands: [
        {
          name: "describe",
          description: "List all Artifact Registry project settings",
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
          name: "disable-upgrade-redirection",
          description:
            "Disables redirection from Container Registry to Artifact Registry",
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
          name: "enable-upgrade-redirection",
          description:
            "Enables redirection from Container Registry to Artifact Registry",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--dry-run",
              description:
                "Validate the project setup, but do not enable redirection",
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
              name: "--no-dry-run",
              description:
                "Validate the project setup, but do not enable redirection",
              hidden: true,
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
      name: "tags",
      description: "Manage Artifact Registry tags",
      subcommands: [
        {
          name: "create",
          description: "Create an Artifact Registry tag",
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
            optLocation9,
            optLogHttp,
            optPackage2,
            optProject,
            optQuiet,
            optRepository6,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TAG",
            description:
              "ID of the tag or fully qualified identifier for the tag",
          },
        },
        {
          name: "delete",
          description: "Delete an Artifact Registry tag",
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
            optLocation9,
            optLogHttp,
            optPackage2,
            optProject,
            optQuiet,
            optRepository6,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TAG",
            description:
              "ID of the tag or fully qualified identifier for the tag",
          },
        },
        {
          name: "export",
          description: "Export an Artifact Registry package version by tag",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gcs-destination",
              description:
                "Google Cloud Storage path to export the artifact to",
              priority: 100,
              args: {
                name: "GCS_DESTINATION",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--location",
              description: "Location of the tag",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--package",
              description: "Package of the tag",
              args: {
                name: "PACKAGE",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--repository",
              description: "Repository of the tag",
              args: {
                name: "REPOSITORY",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TAG",
            description:
              "ID of the tag or fully qualified identifier for the tag",
          },
        },
        {
          name: "list",
          description: "List Artifact Registry tags",
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
            optLocation6,
            optLogHttp,
            {
              name: "--package",
              description:
                "List all tags in a specified artifact, such as a container image or a language package",
              priority: 100,
              args: {
                name: "PACKAGE",
                description: "String",
              },
            },
            optPageSize,
            optProject,
            optQuiet,
            optRepository,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Update an Artifact Registry tag",
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
            optLocation9,
            optLogHttp,
            optPackage2,
            optProject,
            optQuiet,
            optRepository6,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "TAG",
            description:
              "ID of the tag or fully qualified identifier for the tag",
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
      name: "versions",
      description: "Manage Artifact Registry package versions",
      subcommands: [
        {
          name: "delete",
          description: "Delete an Artifact Registry package version",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--delete-tags",
              description:
                "If specified, all tags associated with the version are deleted",
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation10,
            optLogHttp,
            optNoAsync,
            {
              name: "--no-delete-tags",
              description:
                "If specified, all tags associated with the version are deleted",
              hidden: true,
            },
            optPackage3,
            optProject,
            optQuiet,
            optRepository7,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VERSION",
            description:
              "ID of the version or fully qualified identifier for the version",
          },
        },
        {
          name: "describe",
          description: "Describe an Artifact Registry package version",
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
            optLocation10,
            optLogHttp,
            {
              name: "--no-show-package-vulnerability",
              description: "Include vulnerability metadata in the output",
              hidden: true,
            },
            optPackage3,
            optProject,
            optQuiet,
            optRepository7,
            {
              name: "--show-package-vulnerability",
              description: "Include vulnerability metadata in the output",
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VERSION",
            description:
              "ID of the version or fully qualified identifier for the version",
          },
        },
        {
          name: "export",
          description: "Export an Artifact Registry package version",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--gcs-destination",
              description:
                "Google Cloud Storage path to export the artifact to",
              priority: 100,
              args: {
                name: "GCS_DESTINATION",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--location",
              description: "Location of the version",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--package",
              description: "Package of the version",
              args: {
                name: "PACKAGE",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--repository",
              description: "Repository of the version",
              args: {
                name: "REPOSITORY",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VERSION",
            description:
              "ID of the version or fully qualified identifier for the version",
          },
        },
        {
          name: "list",
          description: "List Artifact Registry package versions",
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
            optLocation6,
            optLogHttp,
            {
              name: "--package",
              description:
                "List all versions in a specified artifact, such as a container image or a language package",
              priority: 100,
              args: {
                name: "PACKAGE",
                description: "String",
              },
            },
            optPageSize,
            optProject,
            optQuiet,
            optRepository,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description:
            "Update annotations on an Artifact Registry package version",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--annotations",
              description:
                "List of annotations in the format of KEY=VALUE pairs to add, update, or remove. Duplicate keys will be overwritten. For more details on annotations, see https://google.aip.dev/148#annotations",
              args: {
                name: "ANNOTATIONS",
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
            optLocation10,
            optLogHttp,
            optPackage3,
            optProject,
            optQuiet,
            optRepository7,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "VERSION",
            description:
              "ID of the version or fully qualified identifier for the version",
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
      name: "vpcsc-config",
      description:
        "Manage Artifact Registry VPC Service Controls configuration for remote repositories",
      subcommands: [
        {
          name: "allow",
          description:
            "Allow Artifact Registry remote repositories inside a service perimeter to retrieve data from their upstream sources outside of the perimeter",
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
        },
        {
          name: "deny",
          description:
            "Deny access to upstream sources outside the service perimeter for Artifact Registry remote repositories inside the perimeter",
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
        },
        {
          name: "describe",
          description:
            "Describe the current Artifact Registry configuration for VPC Service Controls",
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
      name: "vulnerabilities",
      description: "Manage Artifact Vulnerabilities",
      subcommands: [
        {
          name: "list",
          description:
            "Command for listing vulnerabilities. To see all fields, use --format=json",
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
            {
              name: "--no-uri",
              description:
                "Print a list of resource URIs instead of the default output, and change the command output to a list of URIs. If this flag is used with *--format*, the formatting is applied on this URI list. To display URIs alongside other keys instead, use the *uri()* transform",
              hidden: true,
            },
            {
              name: "--occurrence-filter",
              description:
                "A filter for the occurrences which will be summarized. See link for officially supported filters: https://cloud.google.com/container-analysis/docs/os-scanning-automatically#filtering",
              args: {
                name: "OCCURRENCE_FILTER",
                description: "String",
              },
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
          args: {
            name: "URI",
            description:
              "An URI identifying a container image or package in Artifact Registry or Google Cloud Registry",
          },
        },
        {
          name: "load-vex",
          description: "Load VEX data from a CSAF file into Artifact Analysis",
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
            optQuiet,
            {
              name: "--source",
              description: "The path of the VEX file",
              priority: 100,
              args: {
                name: "SOURCE",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--uri",
              description:
                "The path of the artifact in Artifact Registry. A 'gcr.io' image can also be used if redirection is enabled in Artifact Registry. Make sure 'artifactregistry.projectsettings.get' permission is granted to the current gcloud user to verify the redirection status",
              priority: 100,
              args: {
                name: "URI",
                description: "String",
              },
            },
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
      name: "yum",
      description: "Manage Artifact Registry RPM packages",
      subcommands: [
        {
          name: "import",
          description:
            "Import one or more RPM packages into an artifact repository",
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
              name: "--gcs-source",
              description:
                "The Google Cloud Storage location of a package to import. To import multiple packages, use wildcards at the end of the path",
              priority: 100,
              args: {
                name: "GCS_SOURCE",
                description: "List",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation6,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository",
            isOptional: true,
          },
        },
        {
          name: "upload",
          description: "Upload an RPM package to an artifact repository",
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
            optLocation6,
            optLogHttp,
            optNoAsync,
            optProject,
            optQuiet,
            optSource,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository",
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
