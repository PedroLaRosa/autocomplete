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
  description: "The location for the workload",
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

const optOrganization: Fig.Option = {
  name: "--organization",
  description: "The parent organization for the workload",
  args: {
    name: "ORGANIZATION",
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
  name: "assured",
  description: "Read and manipulate Assured Workloads data controls",
  subcommands: [
    {
      name: "operations",
      description: "Read and manipulate Assured Workloads operation resources",
      subcommands: [
        {
          name: "describe",
          description: "Describe Assured Workloads operations",
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
              description: "The location for the operation",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--organization",
              description: "The parent organization for the operation",
              args: {
                name: "ORGANIZATION",
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation",
          },
        },
        {
          name: "list",
          description:
            "List all Assured Workloads operations that belong to a given parent organization",
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
            {
              name: "--location",
              description:
                "The location of the Assured Workloads operations. For a current list of supported LOCATION values, see [Assured Workloads locations](https://cloud.google.com/assured-workloads/docs/locations)",
              priority: 100,
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optNoUri,
            {
              name: "--organization",
              description:
                "The parent organization of the Assured Workloads operations, provided as an organization ID",
              priority: 100,
              args: {
                name: "ORGANIZATION",
                description: "String",
              },
            },
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
      name: "workloads",
      description: "Read and manipulate Assured Workloads resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new Assured Workloads environment",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--billing-account",
              description:
                "The billing account of the new Assured Workloads environment, for example, billingAccounts/0000AA-AAA00A-A0A0A0",
              priority: 100,
              args: {
                name: "BILLING_ACCOUNT",
                description: "String",
              },
            },
            optBillingProject,
            {
              name: "--compliance-regime",
              description:
                "The compliance regime of the new Assured Workloads environment. _COMPLIANCE_REGIME_ must be one of: *assured-workloads-for-partners*, *au-regions-and-us-support*, *australia-data-boundary-and-support*, *ca-protected-b*, *ca-regions-and-support*, *canada-controlled-goods*, *canada-data-boundary-and-support*, *cjis*, *data-boundary-for-canada-controlled-goods*, *data-boundary-for-canada-protected-b*, *data-boundary-for-cjis*, *data-boundary-for-fedramp-high*, *data-boundary-for-fedramp-moderate*, *data-boundary-for-il2*, *data-boundary-for-il4*, *data-boundary-for-il5*, *data-boundary-for-irs-publication-1075*, *data-boundary-for-itar*, *eu-data-boundary-and-support*, *eu-regions-and-support*, *fedramp-high*, *fedramp-moderate*, *healthcare-and-life-sciences-controls*, *healthcare-and-life-sciences-controls-us-support*, *hipaa*, *hitrust*, *il2*, *il4*, *il5*, *irs-1075*, *isr-regions*, *isr-regions-and-support*, *israel-data-boundary-and-support*, *itar*, *japan-data-boundary*, *jp-regions-and-support*, *ksa-data-boundary-with-access-justifications*, *ksa-regions-and-support-with-sovereignty-controls*, *regional-controls*, *regional-data-boundary*, *us-data-boundary-and-support*, *us-data-boundary-for-healthcare-and-life-sciences*, *us-data-boundary-for-healthcare-and-life-sciences-with-support*, *us-regional-access*",
              priority: 100,
              args: {
                name: "COMPLIANCE_REGIME",
                suggestions: [
                  "assured-workloads-for-partners",
                  "au-regions-and-us-support",
                  "australia-data-boundary-and-support",
                  "ca-protected-b",
                  "ca-regions-and-support",
                  "canada-controlled-goods",
                  "canada-data-boundary-and-support",
                  "cjis",
                  "data-boundary-for-canada-controlled-goods",
                  "data-boundary-for-canada-protected-b",
                  "data-boundary-for-cjis",
                  "data-boundary-for-fedramp-high",
                  "data-boundary-for-fedramp-moderate",
                  "data-boundary-for-il2",
                  "data-boundary-for-il4",
                  "data-boundary-for-il5",
                  "data-boundary-for-irs-publication-1075",
                  "data-boundary-for-itar",
                  "eu-data-boundary-and-support",
                  "eu-regions-and-support",
                  "fedramp-high",
                  "fedramp-moderate",
                  "healthcare-and-life-sciences-controls",
                  "healthcare-and-life-sciences-controls-us-support",
                  "hipaa",
                  "hitrust",
                  "il2",
                  "il4",
                  "il5",
                  "irs-1075",
                  "isr-regions",
                  "isr-regions-and-support",
                  "israel-data-boundary-and-support",
                  "itar",
                  "japan-data-boundary",
                  "jp-regions-and-support",
                  "ksa-data-boundary-with-access-justifications",
                  "ksa-regions-and-support-with-sovereignty-controls",
                  "regional-controls",
                  "regional-data-boundary",
                  "us-data-boundary-and-support",
                  "us-data-boundary-for-healthcare-and-life-sciences",
                  "us-data-boundary-for-healthcare-and-life-sciences-with-support",
                  "us-regional-access",
                ],
              },
            },
            optConfiguration,
            {
              name: "--display-name",
              description:
                "The display name of the new Assured Workloads environment",
              priority: 100,
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--enable-sovereign-controls",
              description:
                "If true, enable sovereign controls for the new Assured Workloads environment, currently only supported by EU_REGIONS_AND_SUPPORT",
              args: {
                name: "ENABLE_SOVEREIGN_CONTROLS",
                description: "Int",
              },
            },
            {
              name: "--external-identifier",
              description:
                "The external identifier of the new Assured Workloads environment",
              args: {
                name: "EXTERNAL_IDENTIFIER",
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
              name: "--labels",
              description:
                "The labels of the new Assured Workloads environment, for example, LabelKey1=LabelValue1,LabelKey2=LabelValue2",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--location",
              description:
                "The location of the new Assured Workloads environment. For a current list of supported LOCATION values, see [Assured Workloads locations](https://cloud.google.com/assured-workloads/docs/locations)",
              priority: 100,
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            {
              name: "--next-rotation-time",
              description:
                "The next rotation time of the KMS settings of new Assured Workloads environment, for example, 2020-12-30T10:15:30.00Z",
              args: {
                name: "NEXT_ROTATION_TIME",
                description: "String",
              },
            },
            {
              name: "--organization",
              description:
                "The parent organization of the new Assured Workloads environment, provided as an organization ID",
              priority: 100,
              args: {
                name: "ORGANIZATION",
                description: "String",
              },
            },
            {
              name: "--partner",
              description:
                "The partner choice when creating a workload managed by local trusted partners. _PARTNER_ must be one of: *local-controls-by-s3ns*, *sovereign-controls-by-cntxt*, *sovereign-controls-by-cntxt-no-ekm*, *sovereign-controls-by-psn*, *sovereign-controls-by-sia-minsait*, *sovereign-controls-by-t-systems*, *spain-data-boundary-by-telefonica*",
              args: {
                name: "PARTNER",
                suggestions: [
                  "local-controls-by-s3ns",
                  "sovereign-controls-by-cntxt",
                  "sovereign-controls-by-cntxt-no-ekm",
                  "sovereign-controls-by-psn",
                  "sovereign-controls-by-sia-minsait",
                  "sovereign-controls-by-t-systems",
                  "spain-data-boundary-by-telefonica",
                ],
              },
            },
            {
              name: "--partner-permissions",
              description:
                "The partner permissions for the partner regime, for example, data-logs-viewer=true/false",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--partner-services-billing-account",
              description:
                "Billing account necessary for purchasing services from Sovereign Partners. This field is required for creating SIA/PSN/CNTXT partner workloads. The caller should have 'billing.resourceAssociations.create' IAM permission on this billing-account. The format of this string is billingAccounts/AAAAAA-BBBBBB-CCCCCC",
              args: {
                name: "PARTNER_SERVICES_BILLING_ACCOUNT",
                description: "String",
              },
            },
            optProject,
            {
              name: "--provisioned-resources-parent",
              description:
                "The parent of the provisioned projects, for example, folders/{FOLDER_ID}",
              args: {
                name: "PROVISIONED_RESOURCES_PARENT",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--resource-settings",
              description:
                "A comma-separated, key=value map of custom resource settings such as custom project ids, for example: consumer-project-id={CONSUMER_PROJECT_ID} Note: Currently only consumer-project-id, consumer-project-name, encryption-keys-project-id, encryption-keys-project-name and keyring-id are supported. The encryption-keys-project-id, encryption-keys-project-name and keyring-id settings can be specified only if KMS settings are provided",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--rotation-period",
              description:
                "The rotation period of the KMS settings of the new Assured Workloads environment, for example, 172800s",
              args: {
                name: "ROTATION_PERIOD",
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
          description: "Delete Assured Workloads environment",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--etag",
              description:
                'The etag acquired by reading the Assured Workloads environment or AW "resource"',
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
            optLocation,
            optLogHttp,
            optOrganization,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "WORKLOAD",
            description:
              "ID of the workload or fully qualified identifier for the workload",
          },
        },
        {
          name: "describe",
          description: "Describe Assured Workloads environment",
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
            optOrganization,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "WORKLOAD",
            description:
              "ID of the workload or fully qualified identifier for the workload",
          },
        },
        {
          name: "enable-resource-monitoring",
          description:
            "Enables Resource Monitoring for an Assured Workloads environment",
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
            optOrganization,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "WORKLOAD",
            description:
              "ID of the workload or fully qualified identifier for the workload",
          },
        },
        {
          name: "list",
          description:
            "List all Assured Workloads environments that belong to a given parent organization",
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
            {
              name: "--location",
              description:
                "The location of the Assured Workloads environments. For a current list of supported LOCATION values, see [Assured Workloads locations](https://cloud.google.com/assured-workloads/docs/locations)",
              priority: 100,
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optNoUri,
            {
              name: "--organization",
              description:
                "The parent organization of the Assured Workloads environments, provided as an organization ID",
              priority: 100,
              args: {
                name: "ORGANIZATION",
                description: "String",
              },
            },
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
          description: "Update Assured Workloads environments",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--display-name",
              description:
                "The new display name of the Assured Workloads environment",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
              },
            },
            {
              name: "--etag",
              description:
                "The etag acquired by reading the Assured Workloads environment before updating",
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
            {
              name: "--labels",
              description:
                "The new labels of the Assured Workloads environment, for example, LabelKey1=LabelValue1,LabelKey2=LabelValue2",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optLocation,
            optLogHttp,
            optOrganization,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--violation-notifications-enabled",
              description:
                "The notification setting of the Assured Workloads environment",
              args: {
                name: "VIOLATION_NOTIFICATIONS_ENABLED",
                description: "String",
              },
            },
          ],
          args: {
            name: "WORKLOAD",
            description:
              "ID of the workload or fully qualified identifier for the workload",
          },
        },
        {
          name: "violations",
          description: "Read and list Assured Workloads Violations",
          subcommands: [
            {
              name: "acknowledge",
              description:
                "Acknowledge an existing Assured Workloads compliance violation",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--acknowledge-type",
                  description:
                    "The acknowledge type for specified violation, which is one of: SINGLE_VIOLATION - to acknowledge specified violation, EXISTING_CHILD_RESOURCE_VIOLATIONS - to acknowledge specified org policy violation and all associated child resource violations",
                  args: {
                    name: "ACKNOWLEDGE_TYPE",
                    description: "String",
                  },
                },
                optBillingProject,
                {
                  name: "--comment",
                  description:
                    "Business justification used added to acknowledge a violation",
                  priority: 100,
                  args: {
                    name: "COMMENT",
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
                  description: "The location for the violation",
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                {
                  name: "--organization",
                  description: "The parent organization for the violation",
                  args: {
                    name: "ORGANIZATION",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--workload",
                  description: "The workload for the violation",
                  args: {
                    name: "WORKLOAD",
                    description: "String",
                  },
                },
              ],
              args: {
                name: "VIOLATION",
                description:
                  "ID of the violation or fully qualified identifier for the violation",
              },
            },
            {
              name: "describe",
              description: "Describe an Assured Workloads compliance violation",
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
                  description: "The location for the violation",
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                {
                  name: "--organization",
                  description: "The parent organization for the violation",
                  args: {
                    name: "ORGANIZATION",
                    description: "String",
                  },
                },
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--workload",
                  description: "The workload for the violation",
                  args: {
                    name: "WORKLOAD",
                    description: "String",
                  },
                },
              ],
              args: {
                name: "VIOLATION",
                description:
                  "ID of the violation or fully qualified identifier for the violation",
              },
            },
            {
              name: "list",
              description:
                "List all Assured Workloads violations that belong to a assured workloads environment",
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
                {
                  name: "--location",
                  description:
                    "The location of the Assured Workloads environments. For a current list of supported LOCATION values, see [Assured Workloads locations](https://cloud.google.com/assured-workloads/docs/locations)",
                  priority: 100,
                  args: {
                    name: "LOCATION",
                    description: "String",
                  },
                },
                optLogHttp,
                optNoUri,
                {
                  name: "--organization",
                  description:
                    "The parent organization of the Assured Workloads environments, provided as an organization ID",
                  priority: 100,
                  args: {
                    name: "ORGANIZATION",
                    description: "String",
                  },
                },
                optPageSize,
                optProject,
                optQuiet,
                optSortBy,
                optTraceToken,
                optUri,
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--workload",
                  description:
                    "The parent workload of the Assured Workloads violations, provided as workload ID",
                  priority: 100,
                  args: {
                    name: "WORKLOAD",
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
