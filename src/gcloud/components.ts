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

const optArchitectureOverride: Fig.Option = {
  name: "--architecture-override",
  hidden: true,
  args: {
    name: "ARCHITECTURE_OVERRIDE",
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

const optOperatingSystemOverride: Fig.Option = {
  name: "--operating-system-override",
  hidden: true,
  args: {
    name: "OPERATING_SYSTEM_OVERRIDE",
    description: "String",
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

const optSdkRootOverride: Fig.Option = {
  name: "--sdk-root-override",
  hidden: true,
  args: {
    name: "SDK_ROOT_OVERRIDE",
    description: "String",
  },
};

const optSnapshotUrlOverride: Fig.Option = {
  name: "--snapshot-url-override",
  hidden: true,
  args: {
    name: "SNAPSHOT_URL_OVERRIDE",
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
  name: "components",
  description: "List, install, update, or remove Google Cloud CLI components",
  subcommands: [
    {
      name: "copy-bundled-python",
      description: "Make a temporary copy of bundled Python installation",
      hidden: true,
      options: [
        optAccessTokenFile,
        optAccount,
        optArchitectureOverride,
        optBillingProject,
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
        optOperatingSystemOverride,
        optProject,
        optQuiet,
        optSdkRootOverride,
        optSnapshotUrlOverride,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "install",
      description: "Install one or more Google Cloud CLI components",
      options: [
        optAccessTokenFile,
        optAccount,
        optArchitectureOverride,
        optBillingProject,
        {
          name: "--compile-python",
          hidden: true,
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
          name: "--no-compile-python",
          hidden: true,
        },
        optOperatingSystemOverride,
        optProject,
        optQuiet,
        optSdkRootOverride,
        optSnapshotUrlOverride,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "COMPONENT-IDS",
        description: "The IDs of the components to be installed",
        isVariadic: true,
      },
    },
    {
      name: "list",
      description: "List the status of all Google Cloud CLI components",
      options: [
        optAccessTokenFile,
        optAccount,
        optArchitectureOverride,
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
          name: "--no-only-local-state",
          description: "Only show locally installed components",
          hidden: true,
        },
        {
          name: "--no-show-hidden",
          description:
            "Show installed and available versions of all components",
          hidden: true,
        },
        {
          name: "--no-show-platform",
          description:
            "Show operating system and architecture of all components",
          hidden: true,
        },
        {
          name: "--no-show-versions",
          description:
            "Show installed and available versions of all components",
          hidden: true,
        },
        {
          name: "--only-local-state",
          description: "Only show locally installed components",
        },
        optOperatingSystemOverride,
        optProject,
        optQuiet,
        optSdkRootOverride,
        {
          name: "--show-hidden",
          description:
            "Show installed and available versions of all components",
          hidden: true,
        },
        {
          name: "--show-platform",
          description:
            "Show operating system and architecture of all components",
        },
        {
          name: "--show-versions",
          description:
            "Show installed and available versions of all components",
        },
        optSnapshotUrlOverride,
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
      name: "post-process",
      description: "Performs any necessary post installation steps",
      hidden: true,
      options: [
        optAccessTokenFile,
        optAccount,
        optArchitectureOverride,
        optBillingProject,
        {
          name: "--compile-python",
          hidden: true,
        },
        optConfiguration,
        optFlagsFile,
        optFlatten,
        {
          name: "--force-recompile",
          hidden: true,
        },
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        {
          name: "--no-compile-python",
          hidden: true,
        },
        {
          name: "--no-force-recompile",
          hidden: true,
        },
        optOperatingSystemOverride,
        optProject,
        optQuiet,
        optSdkRootOverride,
        optSnapshotUrlOverride,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "reinstall",
      description:
        "Reinstall the Google Cloud CLI with the same components you have now",
      options: [
        optAccessTokenFile,
        optAccount,
        optArchitectureOverride,
        optBillingProject,
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
        optOperatingSystemOverride,
        optProject,
        optQuiet,
        optSdkRootOverride,
        optSnapshotUrlOverride,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "remove",
      description: "Remove one or more installed components",
      options: [
        optAccessTokenFile,
        optAccount,
        optArchitectureOverride,
        optBillingProject,
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
        optOperatingSystemOverride,
        optProject,
        optQuiet,
        optSdkRootOverride,
        optSnapshotUrlOverride,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "COMPONENT_ID",
        description: "The IDs of the components to be removed",
        isVariadic: true,
      },
    },
    {
      name: "repositories",
      description:
        "Manage additional component repositories for Trusted Tester programs",
      subcommands: [
        {
          name: "add",
          description: "Add a new Trusted Tester component repository",
          options: [
            optAccessTokenFile,
            optAccount,
            optArchitectureOverride,
            optBillingProject,
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
            optOperatingSystemOverride,
            optProject,
            optQuiet,
            optSdkRootOverride,
            optSnapshotUrlOverride,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "URL",
            description:
              "One or more URLs for the component repositories you want to add",
            isVariadic: true,
          },
        },
        {
          name: "list",
          description:
            "List any Trusted Tester component repositories you have registered",
          options: [
            optAccessTokenFile,
            optAccount,
            optArchitectureOverride,
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
            optOperatingSystemOverride,
            optProject,
            optQuiet,
            optSdkRootOverride,
            optSnapshotUrlOverride,
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
          name: "remove",
          description: "Remove a registered Trusted Test component repository",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--all",
              description: "Remove all registered repositories",
            },
            optArchitectureOverride,
            optBillingProject,
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
              description: "Remove all registered repositories",
              hidden: true,
            },
            optOperatingSystemOverride,
            optProject,
            optQuiet,
            optSdkRootOverride,
            optSnapshotUrlOverride,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "URL",
            description:
              "Zero or more URLs for the component repositories you want to remove. If none are given, you will be prompted to choose which existing repository you want to remove",
            isVariadic: true,
            isOptional: true,
          },
        },
      ],
      options: [
        optAccessTokenFile,
        optAccount,
        optArchitectureOverride,
        optBillingProject,
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
        optOperatingSystemOverride,
        optProject,
        optQuiet,
        optSdkRootOverride,
        optSnapshotUrlOverride,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "restore",
      description:
        "*(DEPRECATED)* Restore the Google Cloud CLI installation to its state before a reinstall",
      hidden: true,
      deprecated: true,
      options: [
        optAccessTokenFile,
        optAccount,
        optArchitectureOverride,
        optBillingProject,
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
        optOperatingSystemOverride,
        optProject,
        optQuiet,
        optSdkRootOverride,
        optSnapshotUrlOverride,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "update",
      description:
        "Update all of your installed components to the latest version",
      options: [
        optAccessTokenFile,
        optAccount,
        optArchitectureOverride,
        optBillingProject,
        {
          name: "--compile-python",
          hidden: true,
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
          name: "--no-compile-python",
          hidden: true,
        },
        optOperatingSystemOverride,
        optProject,
        optQuiet,
        optSdkRootOverride,
        optSnapshotUrlOverride,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
      args: {
        name: "COMPONENT-IDS",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "update-macos-python",
      description: "Updates managed Python installation on macOS",
      hidden: true,
      options: [
        optAccessTokenFile,
        optAccount,
        optArchitectureOverride,
        optBillingProject,
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
        optOperatingSystemOverride,
        optProject,
        optQuiet,
        optSdkRootOverride,
        optSnapshotUrlOverride,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
  ],
  options: [
    optAccessTokenFile,
    optAccount,
    optArchitectureOverride,
    optBillingProject,
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
    optOperatingSystemOverride,
    optProject,
    optQuiet,
    optSdkRootOverride,
    optSnapshotUrlOverride,
    optTraceToken,
    optUserOutputEnabled,
    optVerbosity,
  ],
};

export default completionSpec;
