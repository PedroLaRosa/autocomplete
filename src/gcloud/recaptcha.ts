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

const optLogHttp: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
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
  name: "recaptcha",
  description: "Manage reCAPTCHA Enterprise Keys",
  subcommands: [
    {
      name: "firewall-policies",
      description: "Managed reCAPTCHA Firewall Policies",
      subcommands: [
        {
          name: "create",
          description: "Create a Firewall Policy",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--actions",
              description:
                "The actions that the caller should take regarding the user. There should be at most 1 terminal action. A terminal action is any action that forces a response, such as Allow, Block or Substitute. If it makes sense for it to happen multple times, such as SetHeader, the action is non-terminal",
              args: {
                name: "ACTIONS",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--condition",
              description:
                "A CEL (Common Expression Language) conditional expression that specifies if this policy applies to an incoming user request. If this condition evaluates to true and the requested path matched the path pattern, the associated actions should be executed by the caller. The condition string is checked for CEL syntax correctness on creation. For more information, see the CEL spec: https://github.com/google/cel-spec and its language definition: https://github.com/google/cel-spec/blob/master/doc/langdef.md",
              args: {
                name: "CONDITION",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--description",
              description:
                "A description of what this policy aims to achieve, for convenience purposes. The description can at most include 256 UTF-8 characters",
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
            {
              name: "--path",
              description:
                "The path for which this policy applies, specified as a glob pattern. For more information on glob, see the manual page: https://man7.org/linux/man-pages/man7/glob.7.html",
              args: {
                name: "PATH",
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
          name: "delete",
          description: "Delete one or more reCAPTCHA Firewall Policies",
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
            name: "FIREWALL_POLICY",
            description:
              "ID of the firewall_policy or fully qualified identifier for the firewall_policy",
          },
        },
        {
          name: "describe",
          description: "Describe reCAPTCHA Firewall Policy",
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
            name: "FIREWALL_POLICY",
            description:
              "ID of the firewall_policy or fully qualified identifier for the firewall_policy",
          },
        },
        {
          name: "list",
          description: "List reCAPTCHA Firewall Policies",
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
          name: "reorder",
          description: "Reorder all Firewall Policies",
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
              name: "--names",
              description: "Names of all firewall policies in desired order",
              priority: 100,
              args: {
                name: "NAMES",
                description: "List",
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
          name: "update",
          description: "Update a Firewall Policy",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--actions",
              description:
                "The actions that the caller should take regarding the user. There should be at most 1 terminal action. A terminal action is any action that forces a response, such as Allow, Block or Substitute. If it makes sense for it to happen multple times, such as SetHeader, the action is non-terminal",
              args: {
                name: "ACTIONS",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--condition",
              description:
                "A CEL (Common Expression Language) conditional expression that specifies if this policy applies to an incoming user request. If this condition evaluates to true and the requested path matched the path pattern, the associated actions should be executed by the caller. The condition string is checked for CEL syntax correctness on creation. For more information, see the CEL spec: https://github.com/google/cel-spec and its language definition: https://github.com/google/cel-spec/blob/master/doc/langdef.md",
              args: {
                name: "CONDITION",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--description",
              description:
                "A description of what this policy aims to achieve, for convenience purposes. The description can at most include 256 UTF-8 characters",
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
            {
              name: "--path",
              description:
                "The path for which this policy applies, specified as a glob pattern. For more information on glob, see the manual page: https://man7.org/linux/man-pages/man7/glob.7.html",
              args: {
                name: "PATH",
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
            name: "FIREWALL_POLICY",
            description:
              "ID of the firewall_policy or fully qualified identifier for the firewall_policy",
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
      name: "keys",
      description: "Managed reCAPTCHA Keys",
      subcommands: [
        {
          name: "add-ip-override",
          description: "Add an IP override to a key",
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
              name: "--ip",
              description: "IP address to override for the key",
              priority: 100,
              args: {
                name: "IP",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--override",
              description:
                "If set to allow, the IP address/CIDR range will be allowlisted for the key. _OVERRIDE_ must be one of: *allow*, *override-type-unspecified*",
              priority: 100,
              args: {
                name: "OVERRIDE",
                suggestions: ["allow", "override-type-unspecified"],
              },
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
        {
          name: "create",
          description: "Create a Key",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--action-score-thresholds",
              description:
                'The action to score threshold used for POLICY_BASED_CHALLENGE. For example: --action-score-thresholds=login=\'{"scoreThreshold": "0.3"}\',signup=\'{"scoreThreshold": "0.1"}\' or --action-score-thresholds=file_path.(json|yaml)',
              args: {
                name: "ACTION_SCORE_THRESHOLDS",
              },
            },
            {
              name: "--allow-all-bundle-ids",
              description:
                "If set, bundle id enforcement will NOT be enabled on this key",
            },
            {
              name: "--allow-all-domains",
              description:
                "If set, domain name enforcement will NOT be enabled on this key",
            },
            {
              name: "--allow-all-package-names",
              description:
                "If set, package name enforcement will NOT be enabled on this key",
            },
            {
              name: "--allow-amp-traffic",
              description:
                "Whether this key can be used on AMP (Accelerated Mobile Pages) websites",
            },
            {
              name: "--android",
              description: "Creates a Key configured for Android devices",
              priority: 100,
            },
            optBillingProject,
            {
              name: "--bundle-ids",
              description: "IOS bundle ids of apps allowed to use the key",
              args: {
                name: "BUNDLE_IDS",
                description: "List",
              },
            },
            optConfiguration,
            {
              name: "--default-score-threshold",
              description:
                "The global threshold to be used for POLICY_BASED_CHALLENGE if no action specific one exists",
              priority: 100,
              args: {
                name: "DEFAULT_SCORE_THRESHOLD",
                description: "Float",
              },
            },
            {
              name: "--display-name",
              description:
                "A human-readable name for the key. Typically a site or app name",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--domains",
              description:
                "Domains or subdomains of websites allowed to use the key. All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment",
              args: {
                name: "DOMAINS",
                description: "List",
              },
            },
            {
              name: "--express",
              description: "Creates a Key configured for Express assessments",
              priority: 100,
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
              name: "--integration-type",
              description:
                "Configures how reCAPTCHA will operate on your site. This only applies to 'web' platform. _INTEGRATION_TYPE_ must be one of:",
              args: {
                name: "INTEGRATION_TYPE",
                suggestions: [
                  "checkbox",
                  "invisible",
                  "policy-based-challenge",
                  "score",
                ],
              },
            },
            {
              name: "--ios",
              description: "Creates a Key configured for iOS devices",
              priority: 100,
            },
            {
              name: "--key-id",
              description: "The Apple developer key ID (10-character string)",
              priority: 100,
              args: {
                name: "KEY_ID",
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
            optLogHttp,
            {
              name: "--no-allow-all-bundle-ids",
              description:
                "If set, bundle id enforcement will NOT be enabled on this key",
              hidden: true,
            },
            {
              name: "--no-allow-all-domains",
              description:
                "If set, domain name enforcement will NOT be enabled on this key",
              hidden: true,
            },
            {
              name: "--no-allow-all-package-names",
              description:
                "If set, package name enforcement will NOT be enabled on this key",
              hidden: true,
            },
            {
              name: "--no-allow-amp-traffic",
              description:
                "Whether this key can be used on AMP (Accelerated Mobile Pages) websites",
              hidden: true,
            },
            {
              name: "--no-android",
              description: "Creates a Key configured for Android devices",
              hidden: true,
              priority: 100,
            },
            {
              name: "--no-express",
              description: "Creates a Key configured for Express assessments",
              hidden: true,
              priority: 100,
            },
            {
              name: "--no-ios",
              description: "Creates a Key configured for iOS devices",
              hidden: true,
              priority: 100,
            },
            {
              name: "--no-support-non-google-app-store-distribution",
              description:
                "If set, this key can be used in an Android application that is available for download in app stores other than the Google Play Store",
              hidden: true,
            },
            {
              name: "--no-universal",
              description: "Creates a Universal site key",
              hidden: true,
              priority: 100,
            },
            {
              name: "--no-web",
              description: "Creates a Key configured for websites",
              hidden: true,
              priority: 100,
            },
            {
              name: "--package-names",
              description:
                "Android package names of apps allowed to use the key",
              args: {
                name: "PACKAGE_NAMES",
                description: "List",
              },
            },
            {
              name: "--private-key-file",
              description:
                "File path to a private key (downloaded as a text file with a .p8 file extension) generated for your Apple Developer account. Ensure that DeviceCheck is enabled for the private key. Use a full or relative path to a local file containing the value of private_key_file",
              priority: 100,
              args: {
                name: "PRIVATE_KEY_FILE",
                template: "filepaths",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--security-preference",
              description:
                "Represents the possible challenge frequency and difficulty configurations for a web key. usability: show fewer and easier challenges. balance: show balanced (in amount and difficulty) challenges. security: show more and harder challenges",
              args: {
                name: "SECURITY_PREFERENCE",
                suggestions: [
                  "balance",
                  "challenge-security-preference-unspecified",
                  "security",
                  "usability",
                ],
              },
            },
            {
              name: "--support-non-google-app-store-distribution",
              description:
                "If set, this key can be used in an Android application that is available for download in app stores other than the Google Play Store",
            },
            {
              name: "--team-id",
              description:
                "The Apple team ID (10-character string) owning the provisioning profile used to build your application",
              priority: 100,
              args: {
                name: "TEAM_ID",
                description: "String",
              },
            },
            {
              name: "--testing-challenge",
              description:
                "For CHECKBOX and INVISIBLE Keys only, this option configures whether challenges will be issued for execute requests. _TESTING_CHALLENGE_ must be one of:",
              args: {
                name: "TESTING_CHALLENGE",
                suggestions: ["challenge", "nocaptcha"],
              },
            },
            {
              name: "--testing-score",
              description:
                "If set, all assessments for this key will return this score. Must be between 0 (likely not legitimate) and 1 (likely legitimate) inclusive",
              args: {
                name: "TESTING_SCORE",
                description: "Float",
              },
            },
            optTraceToken,
            {
              name: "--universal",
              description: "Creates a Universal site key",
              hidden: true,
              priority: 100,
            },
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--waf-feature",
              description:
                "The WAF feature to use. For more information, see https://cloud.google.com/recaptcha-enterprise/docs/usecase#comparison_of_features. _WAF_FEATURE_ must be one of:",
              args: {
                name: "WAF_FEATURE",
                suggestions: [
                  "action-token",
                  "challenge-page",
                  "express",
                  "session-token",
                ],
              },
            },
            {
              name: "--waf-service",
              description:
                "The WAF service provider to use. _WAF_SERVICE_ must be one of:",
              priority: 100,
              args: {
                name: "WAF_SERVICE",
                suggestions: ["akamai", "ca", "cloudflare", "fastly"],
              },
            },
            {
              name: "--web",
              description: "Creates a Key configured for websites",
              priority: 100,
            },
          ],
        },
        {
          name: "delete",
          description: "Delete one or more reCAPTCHA Keys",
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
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key",
          },
        },
        {
          name: "describe",
          description: "Describe reCAPTCHA Key",
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
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key",
          },
        },
        {
          name: "list",
          description: "List reCAPTCHA Keys",
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
          name: "list-ip-overrides",
          description: "List IP overrides for a key",
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
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key",
          },
        },
        {
          name: "migrate",
          description: "Migrate a key to reCAPTCHA Enterprise",
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
              name: "--no-skip-billing-check",
              description:
                "If true, skips the billing check. If your usage of reCAPTCHA is under the free quota, you can safely skip the billing check",
              hidden: true,
            },
            optProject,
            optQuiet,
            {
              name: "--skip-billing-check",
              description:
                "If true, skips the billing check. If your usage of reCAPTCHA is under the free quota, you can safely skip the billing check",
            },
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
          name: "remove-ip-override",
          description: "Remove an IP override from a key",
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
              name: "--ip",
              description: "IP address to override for the key",
              priority: 100,
              args: {
                name: "IP",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--override",
              description:
                "If set to allow, the IP address/CIDR range will be removed from the allowlisted IPs. _OVERRIDE_ must be one of: *allow*, *override-type-unspecified*",
              priority: 100,
              args: {
                name: "OVERRIDE",
                suggestions: ["allow", "override-type-unspecified"],
              },
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
        {
          name: "update",
          description: "Update a Key",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--action-score-thresholds",
              description:
                'The action to score threshold used for POLICY_BASED_CHALLENGE. For example: --action-score-thresholds=login=\'{"scoreThreshold": "0.3"}\',signup=\'{"scoreThreshold": "0.1"}\' or --action-score-thresholds=file_path.(json|yaml)',
              args: {
                name: "ACTION_SCORE_THRESHOLDS",
              },
            },
            {
              name: "--allow-all-bundle-ids",
              description:
                "If set, bundle id enforcement will NOT be enabled on this key",
            },
            {
              name: "--allow-all-domains",
              description:
                "If set, domain name enforcement will NOT be enabled on this key",
            },
            {
              name: "--allow-all-package-names",
              description:
                "If set, package name enforcement will NOT be enabled on this key",
            },
            {
              name: "--allow-amp-traffic",
              description:
                "Whether this key can be used on AMP (Accelerated Mobile Pages) websites",
            },
            {
              name: "--android",
              description: "Configures the Key for Android devices",
              priority: 100,
            },
            optBillingProject,
            {
              name: "--bundle-ids",
              description: "IOS bundle ids of apps allowed to use the key",
              args: {
                name: "BUNDLE_IDS",
                description: "List",
              },
            },
            optConfiguration,
            {
              name: "--default-score-threshold",
              description:
                "The global threshold to be used for POLICY_BASED_CHALLENGE if no action specific one exists",
              args: {
                name: "DEFAULT_SCORE_THRESHOLD",
                description: "Float",
              },
            },
            {
              name: "--display-name",
              description:
                "A human-readable name for the key. Typically a site or app name",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--domains",
              description:
                "Domains or subdomains of websites allowed to use the key. All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment",
              args: {
                name: "DOMAINS",
                description: "List",
              },
            },
            {
              name: "--express",
              description: "Configures the Key for Express assessments",
              priority: 100,
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
              name: "--ios",
              description: "Configures the Key for iOS devices",
              priority: 100,
            },
            {
              name: "--key-id",
              description: "The Apple developer key ID (10-character string)",
              priority: 100,
              args: {
                name: "KEY_ID",
                description: "String",
              },
            },
            {
              name: "--labels",
              description: "List of label KEY=VALUE pairs to add",
              args: {
                name: "KEY=VALUE",
              },
            },
            optLogHttp,
            {
              name: "--no-allow-all-bundle-ids",
              description:
                "If set, bundle id enforcement will NOT be enabled on this key",
              hidden: true,
            },
            {
              name: "--no-allow-all-domains",
              description:
                "If set, domain name enforcement will NOT be enabled on this key",
              hidden: true,
            },
            {
              name: "--no-allow-all-package-names",
              description:
                "If set, package name enforcement will NOT be enabled on this key",
              hidden: true,
            },
            {
              name: "--no-allow-amp-traffic",
              description:
                "Whether this key can be used on AMP (Accelerated Mobile Pages) websites",
              hidden: true,
            },
            {
              name: "--no-android",
              description: "Configures the Key for Android devices",
              hidden: true,
              priority: 100,
            },
            {
              name: "--no-express",
              description: "Configures the Key for Express assessments",
              hidden: true,
              priority: 100,
            },
            {
              name: "--no-ios",
              description: "Configures the Key for iOS devices",
              hidden: true,
              priority: 100,
            },
            {
              name: "--no-universal",
              description: "Configures the Key as Universal",
              hidden: true,
              priority: 100,
            },
            {
              name: "--no-web",
              description: "Configures the Key for websites",
              hidden: true,
              priority: 100,
            },
            {
              name: "--package-names",
              description:
                "Android package names of apps allowed to use the key",
              args: {
                name: "PACKAGE_NAMES",
                description: "List",
              },
            },
            {
              name: "--private-key-file",
              description:
                "File path to a private key (downloaded as a text file with a .p8 file extension) generated for your Apple Developer account. Ensure that DeviceCheck is enabled for the private key. Use a full or relative path to a local file containing the value of private_key_file",
              priority: 100,
              args: {
                name: "PRIVATE_KEY_FILE",
                template: "filepaths",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--security-preference",
              description:
                "Represents the possible challenge frequency and difficulty configurations for a web key. usability: show fewer and easier challenges. balance: show balanced (in amount and difficulty) challenges. security: show more and harder challenges",
              args: {
                name: "SECURITY_PREFERENCE",
                suggestions: [
                  "balance",
                  "challenge-security-preference-unspecified",
                  "security",
                  "usability",
                ],
              },
            },
            {
              name: "--team-id",
              description:
                "The Apple team ID (10-character string) owning the provisioning profile used to build your application",
              priority: 100,
              args: {
                name: "TEAM_ID",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--universal",
              description: "Configures the Key as Universal",
              hidden: true,
              priority: 100,
            },
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--web",
              description: "Configures the Key for websites",
              priority: 100,
            },
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
