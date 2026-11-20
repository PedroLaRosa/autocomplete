const completionSpec: Fig.Spec = {
  name: "policy-troubleshoot",
  description: "Troubleshoot Google Cloud Platform policies",
  subcommands: [
    {
      name: "iam",
      description: "Troubleshoot the IAM Policy",
      options: [
        {
          name: "--access-token-file",
          description:
            "A file path to read the access token. Use this flag to authenticate `gcloud` with an access token. The credentials of the active account (if exists) will be ignored. The file should only contain an access token with no other information. Overrides the default *auth/access_token_file* property value for this command invocation",
          args: {
            name: "ACCESS_TOKEN_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        {
          name: "--account",
          description:
            "Google Cloud user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
          args: {
            name: "ACCOUNT",
            description: "String",
          },
        },
        {
          name: "--billing-project",
          description:
            "The Google Cloud project that will be charged quota for operations performed in `gcloud`. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
          args: {
            name: "BILLING_PROJECT",
            description: "String",
          },
        },
        {
          name: "--configuration",
          description:
            "File name of the configuration to use for this command invocation. For more information on how to use configurations, run: `gcloud topic configurations`. You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment variable to set the equivalent of this flag for a terminal session",
          args: {
            name: "CONFIGURATION",
            description: "String",
          },
        },
        {
          name: "--destination-ip",
          description:
            "The request destination IP address to use when checking conditional bindings. For example, `198.1.1.1`",
          args: {
            name: "DESTINATION_IP",
            description: "String",
          },
        },
        {
          name: "--destination-port",
          description:
            "The request destination port to use when checking conditional bindings. For example, 8080",
          args: {
            name: "DESTINATION_PORT",
            description: "Int",
          },
        },
        {
          name: "--flags-file",
          description:
            "A YAML or JSON file that specifies a *--flag*:*value* dictionary. Useful for specifying complex flag values with special characters that work with any command interpreter. Additionally, each *--flags-file* arg is replaced by its constituent flags. See $ gcloud topic flags-file for more information",
          args: {
            name: "YAML_FILE",
            description: "String",
            template: "filepaths",
          },
        },
        {
          name: "--flatten",
          description:
            "Flatten _name_[] output resource slices in _KEY_ into separate records for each item in each slice. Multiple keys and slices may be specified. This also flattens keys for *--format* and *--filter*. For example, *--flatten=abc.def* flattens *abc.def[].ghi* references to *abc.def.ghi*. A resource record containing *abc.def[]* with N elements will expand to N records in the flattened output. This allows us to specify what `resource-key` the `filter` will operate on. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
          args: {
            name: "KEY",
            description: "List",
          },
        },
        {
          name: "--format",
          description:
            "Sets the format for printing command output resources. The default is a command-specific human-friendly output format. If both `core/format` and `--format` are specified, `--format` takes precedence. `--format` and `core/format` both take precedence over `core/default_format`. The supported formats are limited to: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats. Run `$ gcloud config set --help` to see more information about `core/format`",
          args: {
            name: "FORMAT",
            description: "String",
          },
        },
        {
          name: "--help",
          description: "Display detailed help",
        },
        {
          name: "--impersonate-service-account",
          description:
            "For this `gcloud` invocation, all API requests will be made as the given service account or target service account in an impersonation delegation chain instead of the currently selected account. You can specify either a single service account as the impersonator, or a comma-separated list of service accounts to create an impersonation delegation chain. The impersonation is done without needing to create, download, and activate a key for the service account or accounts",
          args: {
            name: "SERVICE_ACCOUNT_EMAILS",
            description: "String",
          },
        },
        {
          name: "--log-http",
          description:
            "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
        },
        {
          name: "--permission",
          description:
            'Cloud IAM permission to check, e.g. "resourcemanager.projects.get"',
          priority: 100,
          args: {
            name: "PERMISSION",
            description: "String",
          },
        },
        {
          name: "--principal-email",
          description:
            "Email address that identifies the principal to check. Only Google Accounts and service accounts are supported",
          priority: 100,
          args: {
            name: "PRINCIPAL_EMAIL",
            description: "String",
          },
        },
        {
          name: "--project",
          description:
            "The Google Cloud project ID to use for this invocation. If omitted, then the current project is assumed; the current project can be listed using `gcloud config list --format='text(core.project)'` and can be set using `gcloud config set project PROJECTID`",
          args: {
            name: "PROJECT_ID",
            description: "String",
          },
        },
        {
          name: "--quiet",
          description:
            "Disable all interactive prompts when running `gcloud` commands. If input is required, defaults will be used, or an error will be raised",
        },
        {
          name: "--request-time",
          description:
            "The request timestamp to use when checking conditional bindings. This string must adhere to UTC format (RFC 3339). For example,2021-01-01T00:00:00Z. See: https://tools.ietf.org/html/rfc3339",
          args: {
            name: "REQUEST_TIME",
            description: "String",
          },
        },
        {
          name: "--resource-name",
          description:
            "The resource name value to use when checking conditional bindings. See: https://cloud.google.com/iam/docs/conditions-resource-attributes#resource-name",
          args: {
            name: "RESOURCE_NAME",
            description: "String",
          },
        },
        {
          name: "--resource-service",
          description:
            "The resource service value to use when checking conditional bindings. See: https://cloud.google.com/iam/docs/conditions-resource-attributes#resource-service",
          args: {
            name: "RESOURCE_SERVICE",
            description: "String",
          },
        },
        {
          name: "--resource-type",
          description:
            "The resource type value to use when checking conditional bindings. See: https://cloud.google.com/iam/docs/conditions-resource-attributes#resource-type",
          args: {
            name: "RESOURCE_TYPE",
            description: "String",
          },
        },
        {
          name: "--trace-token",
          description:
            "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
          args: {
            name: "TRACE_TOKEN",
            description: "String",
          },
        },
        {
          name: "--user-output-enabled",
          description:
            "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
        },
        {
          name: "--verbosity",
          description:
            "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
          args: {
            name: "VERBOSITY",
            description: "String",
            suggestions: [
              "debug",
              "info",
              "warning",
              "error",
              "critical",
              "none",
            ],
          },
        },
      ],
      args: {
        name: "RESOURCE",
        description:
          "Full resource name that access is checked against. See: https://cloud.google.com/iam/docs/resource-names",
      },
    },
  ],
  options: [
    {
      name: "--access-token-file",
      description:
        "A file path to read the access token. Use this flag to authenticate `gcloud` with an access token. The credentials of the active account (if exists) will be ignored. The file should only contain an access token with no other information. Overrides the default *auth/access_token_file* property value for this command invocation",
      args: {
        name: "ACCESS_TOKEN_FILE",
        description: "String",
        template: "filepaths",
      },
    },
    {
      name: "--account",
      description:
        "Google Cloud user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
      args: {
        name: "ACCOUNT",
        description: "String",
      },
    },
    {
      name: "--billing-project",
      description:
        "The Google Cloud project that will be charged quota for operations performed in `gcloud`. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
      args: {
        name: "BILLING_PROJECT",
        description: "String",
      },
    },
    {
      name: "--configuration",
      description:
        "File name of the configuration to use for this command invocation. For more information on how to use configurations, run: `gcloud topic configurations`. You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment variable to set the equivalent of this flag for a terminal session",
      args: {
        name: "CONFIGURATION",
        description: "String",
      },
    },
    {
      name: "--flags-file",
      description:
        "A YAML or JSON file that specifies a *--flag*:*value* dictionary. Useful for specifying complex flag values with special characters that work with any command interpreter. Additionally, each *--flags-file* arg is replaced by its constituent flags. See $ gcloud topic flags-file for more information",
      args: {
        name: "YAML_FILE",
        description: "String",
        template: "filepaths",
      },
    },
    {
      name: "--flatten",
      description:
        "Flatten _name_[] output resource slices in _KEY_ into separate records for each item in each slice. Multiple keys and slices may be specified. This also flattens keys for *--format* and *--filter*. For example, *--flatten=abc.def* flattens *abc.def[].ghi* references to *abc.def.ghi*. A resource record containing *abc.def[]* with N elements will expand to N records in the flattened output. This allows us to specify what `resource-key` the `filter` will operate on. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
      args: {
        name: "KEY",
        description: "List",
      },
    },
    {
      name: "--format",
      description:
        "Sets the format for printing command output resources. The default is a command-specific human-friendly output format. If both `core/format` and `--format` are specified, `--format` takes precedence. `--format` and `core/format` both take precedence over `core/default_format`. The supported formats are limited to: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats. Run `$ gcloud config set --help` to see more information about `core/format`",
      args: {
        name: "FORMAT",
        description: "String",
      },
    },
    {
      name: "--help",
      description: "Display detailed help",
    },
    {
      name: "--impersonate-service-account",
      description:
        "For this `gcloud` invocation, all API requests will be made as the given service account or target service account in an impersonation delegation chain instead of the currently selected account. You can specify either a single service account as the impersonator, or a comma-separated list of service accounts to create an impersonation delegation chain. The impersonation is done without needing to create, download, and activate a key for the service account or accounts",
      args: {
        name: "SERVICE_ACCOUNT_EMAILS",
        description: "String",
      },
    },
    {
      name: "--log-http",
      description:
        "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
    },
    {
      name: "--project",
      description:
        "The Google Cloud project ID to use for this invocation. If omitted, then the current project is assumed; the current project can be listed using `gcloud config list --format='text(core.project)'` and can be set using `gcloud config set project PROJECTID`",
      args: {
        name: "PROJECT_ID",
        description: "String",
      },
    },
    {
      name: "--quiet",
      description:
        "Disable all interactive prompts when running `gcloud` commands. If input is required, defaults will be used, or an error will be raised",
    },
    {
      name: "--trace-token",
      description:
        "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
      args: {
        name: "TRACE_TOKEN",
        description: "String",
      },
    },
    {
      name: "--user-output-enabled",
      description:
        "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
    },
    {
      name: "--verbosity",
      description:
        "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
      args: {
        name: "VERBOSITY",
        description: "String",
        suggestions: ["debug", "info", "warning", "error", "critical", "none"],
      },
    },
  ],
};

export default completionSpec;
