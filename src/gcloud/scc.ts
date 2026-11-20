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

const optApiVersion: Fig.Option = {
  name: "--api-version",
  description:
    "This is a temporary flag to be used for testing the Security Command Center v2 api before its launch",
  hidden: true,
  args: {
    name: "API_VERSION",
    suggestions: ["v1", "v2enabled"],
  },
};

const optAsset: Fig.Option = {
  name: "--asset",
  description:
    "Cloud SCC specific asset. It's derived from the the asset's relative resource name. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. For Example, for the given asset name: \"organizations/123/assets/456\", 456 represents asset id",
  args: {
    name: "ASSET",
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

const optFolder: Fig.Option = {
  name: "--folder",
  description:
    "Folder where the BigQuery export resides. Formatted as folders/456 or just 456",
  args: {
    name: "FOLDER",
    description: "String",
  },
};

const optFolder2: Fig.Option = {
  name: "--folder",
  description:
    "Folder where the Security Health Analytics custom module resides. Formatted as `folders/456` or just `456`",
  args: {
    name: "FOLDER",
    description: "String",
  },
};

const optFolder3: Fig.Option = {
  name: "--folder",
  description:
    "Folder where the mute config resides. Formatted as ``folders/456'' or just ``456''",
  args: {
    name: "FOLDER",
    description: "String",
  },
};

const optFolder4: Fig.Option = {
  name: "--folder",
  description:
    "Folder where the notification config resides. Formatted as ``folders/456'' or just ``456''",
  args: {
    name: "FOLDER",
    description: "String",
  },
};

const optFolder5: Fig.Option = {
  name: "--folder",
  description: "The folder ID (e.g., 456) that contains the finding",
  args: {
    name: "FOLDER",
    description: "String",
  },
};

const optFolder6: Fig.Option = {
  name: "--folder",
  description: "Folder associated with the custom module",
  args: {
    name: "FOLDER_ID",
    description: "String",
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
    "ID of the location where the resource exists (for example, global)",
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation2: Fig.Option = {
  name: "--location",
  description:
    "When data residency controls are enabled, this attribute specifies the location in which the resource is located and applicable",
  priority: 100,
  args: {
    name: "LOCATION",
    description: "String",
  },
};

const optLocation3: Fig.Option = {
  name: "--location",
  description:
    "When data residency controls are enabled, this attribute specifies the location in which the resource is located and applicable. The `location` attribute can be provided as part of the fully specified resource name or with the `--location` argument on the command line. The default location is `global`",
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

const optNoValidateOnly: Fig.Option = {
  name: "--no-validate-only",
  description:
    "If present, the request is validated (including IAM checks) but no action is taken",
  hidden: true,
};

const optOrganization: Fig.Option = {
  name: "--organization",
  description:
    "(Optional) If the full resource name isn't provided e.g. organizations/123, then provide the organization id which is the suffix of the organization. Example: organizations/123, the id is 123",
  args: {
    name: "ORGANIZATION",
    description: "String",
  },
};

const optOrganization2: Fig.Option = {
  name: "--organization",
  description: "ID of the organization which is the parent of the resource",
  args: {
    name: "ORGANIZATION",
    description: "String",
  },
};

const optOrganization3: Fig.Option = {
  name: "--organization",
  description:
    "Organization where the BigQuery export resides. Formatted as organizations/123 or just 123",
  args: {
    name: "ORGANIZATION",
    description: "String",
  },
};

const optOrganization4: Fig.Option = {
  name: "--organization",
  description:
    "Organization where the Security Health Analytics custom module resides. Formatted as `organizations/123` or just `123`",
  args: {
    name: "ORGANIZATION",
    description: "String",
  },
};

const optOrganization5: Fig.Option = {
  name: "--organization",
  description:
    "Organization where the mute config resides. Formatted as ``organizations/123'' or just ``123''",
  args: {
    name: "ORGANIZATION",
    description: "String",
  },
};

const optOrganization6: Fig.Option = {
  name: "--organization",
  description:
    "Organization where the notification config resides. Formatted as ``organizations/123'' or just ``123''",
  args: {
    name: "ORGANIZATION",
    description: "String",
  },
};

const optOrganization7: Fig.Option = {
  name: "--organization",
  description: "The organization ID (e.g., 123) that contains the finding",
  args: {
    name: "ORGANIZATION",
    description: "String",
  },
};

const optOrganization8: Fig.Option = {
  name: "--organization",
  description: "The organization ID (e.g., 123) that contains the resource",
  priority: 100,
  args: {
    name: "ORGANIZATION",
    description: "String",
  },
};

const optOrganization9: Fig.Option = {
  name: "--organization",
  description: "Organization associated with the custom module",
  args: {
    name: "ORGANIZATION_ID",
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

const optPageToken: Fig.Option = {
  name: "--page-token",
  description:
    "Response objects will return a non-null value for page-token to indicate that there is at least one additional page of data. User can either directly request that page by specifying the page-token explicitly or let gcloud fetch one-page-at-a-time",
  args: {
    name: "PAGE_TOKEN",
    description: "String",
  },
};

const optParent: Fig.Option = {
  name: "--parent",
  description:
    "Parent associated with the custom module. Can be one of organizations/<id>, projects/<id or name>, folders/<id>",
  args: {
    name: "PARENT",
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

const optReadTime: Fig.Option = {
  name: "--read-time",
  description:
    "(DEPRECATED) Time used as a reference point when filtering. Absence of this field will default to the API's version of NOW. See $ gcloud topic datetimes for information on supported time formats",
  deprecated: true,
  args: {
    name: "READ_TIME",
    description: "String",
  },
};

const optReadTime2: Fig.Option = {
  name: "--read-time",
  description:
    "Time used as a reference point when filtering. Absence of this field will default to the API's version of NOW. See `$ gcloud topic datetimes` for information on supported time formats",
  args: {
    name: "READ_TIME",
  },
};

const optResourceName: Fig.Option = {
  name: "--resource-name",
  description:
    'Asset\'s resource name. Full resource name of the Google Cloud Platform resource this asset represents. This field is immutable after create time. See: https://cloud.google.com/apis/design/resource_names#full_resource_name. For Example: "//cloudresourcemanager.googleapis.com/projects/1234567890123" could be the resource-name for a project',
  args: {
    name: "RESOURCE_NAME",
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

const optSource: Fig.Option = {
  name: "--source",
  description: "Source id. Defaults to all sources",
  args: {
    name: "SOURCE",
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

const optUpdateMask: Fig.Option = {
  name: "--update-mask",
  description:
    "Optional: If left unspecified (default), an update-mask is automatically created using the flags specified in the command and only those values are updated",
  args: {
    name: "UPDATE_MASK",
    description: "String",
  },
};

const optUserOutputEnabled: Fig.Option = {
  name: "--user-output-enabled",
  description:
    "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
};

const optValidateOnly: Fig.Option = {
  name: "--validate-only",
  description:
    "If present, the request is validated (including IAM checks) but no action is taken",
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
  name: "scc",
  description: "Manage Cloud SCC resources",
  subcommands: [
    {
      name: "assets",
      description: "Manage Cloud SCC (Security Command Center) assets",
      subcommands: [
        {
          name: "describe",
          description:
            "*(DEPRECATED)* Describe an asset given its resource name or asset id",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optAsset,
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
            optResourceName,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PARENT",
            description:
              "ID of the parent or fully qualified identifier for the parent",
            isOptional: true,
          },
        },
        {
          name: "get-parent",
          description:
            "*(DEPRECATED)* Get the Parent for an asset given its resource name or asset id",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optAsset,
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
            optResourceName,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ORGANIZATION",
            description:
              "ID of the organization or fully qualified identifier for the organization",
            isOptional: true,
          },
        },
        {
          name: "get-project",
          description:
            "*(DEPRECATED)* Get the Project for an asset given its resource name or asset id",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optAsset,
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
            optResourceName,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ORGANIZATION",
            description:
              "ID of the organization or fully qualified identifier for the organization",
            isOptional: true,
          },
        },
        {
          name: "group",
          description:
            "*(DEPRECATED)* Filter an organization's assets and groups them by their specified properties",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--compare-duration",
              description:
                'The result\'s "state_change" attribute is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. See `$ gcloud topic datetimes` for information on supported duration formats',
              args: {
                name: "COMPARE_DURATION",
              },
            },
            optConfiguration,
            {
              name: "--filter",
              description:
                "Expression is a list of one or more restrictions combined via logical operators 'AND' and 'OR'. Parentheses are not supported, and 'OR' has higher precedence than 'AND'. For example, 'update_time > 100 AND security_center_properties.resource_type=\\\"google.cloud.resourcemanager.Organization\\\"' is a valid filter string",
              args: {
                name: "FILTER",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--group-by",
              description:
                "Expression that defines what asset fields to use for grouping (including 'state'). String value should follow SQL syntax: comma separated list of fields. For example: \"parent,resource_name\". The following fields are supported: * security_center_properties.resource_project * security_center_properties.resource_type * security_center_properties.resource_parent * state_change",
              args: {
                name: "GROUP_BY",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            {
              name: "--page-size",
              description:
                "The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000",
              args: {
                name: "PAGE_SIZE",
                description: "Int",
              },
            },
            {
              name: "--page-token",
              description:
                "Value returned by the last 'GroupAssetsResponse'; indicates that this is a continuation of a prior 'GroupAssets' call, and that the system should return the next page of data",
              args: {
                name: "PAGE_TOKEN",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optReadTime2,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PARENT",
            description:
              "ID of the parent or fully qualified identifier for the parent",
            isOptional: true,
          },
        },
        {
          name: "list",
          description:
            "*(DEPRECATED)* List Cloud Security Command Center assets",
          deprecated: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--compare-duration",
              description:
                'The result\'s "state_change" attribute is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. See `$ gcloud topic datetimes` for information on supported duration formats',
              args: {
                name: "COMPARE_DURATION",
              },
            },
            optConfiguration,
            {
              name: "--field-mask",
              description:
                'Field mask to specify the Asset fields to be listed in the response. An empty field mask will list all fields. Example field mask: "asset.security_center_properties.resource_type,asset.security_center_properties.resource_parent"',
              args: {
                name: "FIELD_MASK",
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
            {
              name: "--order-by",
              description:
                'Expression that defines what fields and order to use for sorting. Example order by: "resource_properties.sort_prop ASC"',
              args: {
                name: "ORDER_BY",
                description: "String",
              },
            },
            optPageSize,
            {
              name: "--page-token",
              description:
                "The value returned by the last 'ListAssetsResponse'; indicates that this is a continuation of a prior 'ListAssets' call, and that the system should return the next page of data",
              args: {
                name: "PAGE_TOKEN",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optReadTime2,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PARENT",
            description:
              "ID of the parent or fully qualified identifier for the parent",
            isOptional: true,
          },
        },
        {
          name: "list-marks",
          description: "*(DEPRECATED)* List an assets's security marks",
          deprecated: true,
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
            optOrganization,
            optPageSize,
            optPageToken,
            optProject,
            optQuiet,
            optReadTime2,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ASSET",
            description:
              "ID of the asset or fully qualified identifier for the asset",
          },
        },
        {
          name: "run-discovery",
          description:
            "*(DEPRECATED)* Scan an organization for new/modified/deleted assets",
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
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ORGANIZATION",
            description:
              "ID of the organization or fully qualified identifier for the organization",
            isOptional: true,
          },
        },
        {
          name: "update-marks",
          description:
            "Update Cloud Security Command Center asset's security marks",
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
            optOrganization,
            optProject,
            optQuiet,
            {
              name: "--security-marks",
              description:
                'SecurityMarks resource to be passed as the request body. It\'s a key=value pair separated by comma (,). For example: --security-marks="key1=val1,key2=val2"',
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--start-time",
              description:
                "Time at which the updated SecurityMarks take effect. See `$ gcloud topic datetimes` for information on supported time formats",
              args: {
                name: "START_TIME",
              },
            },
            optTraceToken,
            {
              name: "--update-mask",
              description:
                "Use update-mask if you want to selectively update marks represented by --security-marks flag. For example: --update-mask=\"marks.key1,marks.key2\". If you want to override all the marks for the given asset either skip the update-mask flag or provide an empty value (--update-mask '') for it",
              args: {
                name: "UPDATE_MASK",
                description: "String",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "ASSET",
            description:
              "ID of the asset or fully qualified identifier for the asset",
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
      name: "bqexports",
      description:
        "Manage Cloud SCC (Security Command Center) BigQuery exports",
      subcommands: [
        {
          name: "create",
          description: "Create a Security Command Center BigQuery export",
          options: [
            optAccessTokenFile,
            optAccount,
            optApiVersion,
            optBillingProject,
            optConfiguration,
            {
              name: "--dataset",
              description: "The dataset to write findings updates to",
              priority: 100,
              args: {
                name: "DATASET",
                description: "String",
              },
            },
            {
              name: "--description",
              description:
                "The text that will be used to describe a BigQuery export",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--filter",
              description:
                "The filter string which will applied to findings muted by a BigQuery export",
              args: {
                name: "FILTER",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFolder,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation3,
            optLogHttp,
            optOrganization3,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BIG_QUERY_EXPORT",
            description:
              "ID of the BigQuery export e.g. `my-bq-export` or the full resource name of the BigQuery export e.g. `organizations/123/bigQueryExports/my-bq-export`",
          },
        },
        {
          name: "delete",
          description: "Delete a Security Command Center BigQuery export",
          options: [
            optAccessTokenFile,
            optAccount,
            optApiVersion,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFolder,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation3,
            optLogHttp,
            optOrganization3,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BIG_QUERY_EXPORT",
            description:
              "ID of the BigQuery export e.g. `my-bq-export` or the full resource name of the BigQuery export e.g. `organizations/123/bigQueryExports/my-bq-export`",
          },
        },
        {
          name: "get",
          description: "Get a Security Command Center BigQuery export",
          options: [
            optAccessTokenFile,
            optAccount,
            optApiVersion,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFolder,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation3,
            optLogHttp,
            optOrganization3,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BIG_QUERY_EXPORT",
            description:
              "ID of the BigQuery export e.g. `my-bq-export` or the full resource name of the BigQuery export e.g. `organizations/123/bigQueryExports/my-bq-export`",
          },
        },
        {
          name: "list",
          description: "List Security Command Center BigQuery exports",
          options: [
            optAccessTokenFile,
            optAccount,
            optApiVersion,
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFolder,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLimit,
            optLocation3,
            optLogHttp,
            optOrganization3,
            optPageSize,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Update a Security Command Center BigQuery export",
          options: [
            optAccessTokenFile,
            optAccount,
            optApiVersion,
            optBillingProject,
            optConfiguration,
            {
              name: "--dataset",
              description: "The dataset to write findings updates to",
              args: {
                name: "DATASET",
                description: "String",
              },
            },
            {
              name: "--description",
              description:
                "The text that will be used to describe a BigQuery export",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--filter",
              description:
                "The filter string which will applied to findings muted by a BigQuery export",
              args: {
                name: "FILTER",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFolder,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation3,
            optLogHttp,
            optOrganization3,
            optQuiet,
            optTraceToken,
            optUpdateMask,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "BIG_QUERY_EXPORT",
            description:
              "ID of the BigQuery export e.g. `my-bq-export` or the full resource name of the BigQuery export e.g. `organizations/123/bigQueryExports/my-bq-export`",
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
      name: "custom-modules",
      description: "Manage Cloud SCC (Security Command Center) custom modules",
      subcommands: [
        {
          name: "sha",
          description: "Manage Security Health Analytics custom modules",
          subcommands: [
            {
              name: "create",
              description: "Create a Security Health Analytics custom module",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--custom-config-from-file",
                  description:
                    "Path to a YAML file that contains the configuration for the Security Health Analytics custom module. Use a full or relative path to a local file containing the value of custom_config",
                  priority: 100,
                  args: {
                    name: "CUSTOM_CONFIG_FROM_FILE",
                    template: "filepaths",
                  },
                },
                {
                  name: "--display-name",
                  description:
                    "Sets the display name of the Security Health Analytics custom module. This display name becomes the finding category for all findings that are returned by this custom module. The display name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only",
                  priority: 100,
                  args: {
                    name: "DISPLAY_NAME",
                    description: "String",
                  },
                },
                {
                  name: "--enablement-state",
                  description:
                    "Sets the enablement state of the Security Health Analytics custom module. From the following list of possible enablement states, specify either enabled or disabled only. _ENABLEMENT_STATE_ must be one of: *disabled*, *enabled*, *enablement-state-unspecified*, *inherited*",
                  priority: 100,
                  args: {
                    name: "ENABLEMENT_STATE",
                    suggestions: [
                      "disabled",
                      "enabled",
                      "enablement-state-unspecified",
                      "inherited",
                    ],
                  },
                },
                optFlagsFile,
                optFlatten,
                optFolder2,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                optOrganization4,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "delete",
              description: "Delete a Security Health Analytics custom module",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFolder2,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                optOrganization4,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "CUSTOM_MODULE",
                description:
                  "ID or the full resource name of the Security Health Analytics custom module. If you specify the full resource name, you do not need to specify the --organization, --folder, or --project flags",
              },
            },
            {
              name: "get",
              description:
                "Get the details of a Security Health Analytics custom module",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                {
                  name: "--folder",
                  description:
                    "Folder from which to get the custom module details. Formatted as `folders/456` or just `456`",
                  args: {
                    name: "FOLDER",
                    description: "String",
                  },
                },
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                {
                  name: "--organization",
                  description:
                    "Organization from which to get the custom module details. Formatted as `organizations/123` or just `123`",
                  args: {
                    name: "ORGANIZATION",
                    description: "String",
                  },
                },
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "CUSTOM_MODULE",
                description:
                  "ID or the full resource name of the Security Health Analytics custom module. If you specify the full resource name, you do not need to specify the --organization, --folder, or --project flags",
              },
            },
            {
              name: "get-effective",
              description:
                "Get the details of a Security Health Analytics custom module with effective enablement state",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                {
                  name: "--folder",
                  description:
                    "Folder from which to get the custom module details. Formatted as `folders/456` or just `456`",
                  args: {
                    name: "FOLDER",
                    description: "String",
                  },
                },
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                {
                  name: "--organization",
                  description:
                    "Organization from which to get the custom module details. Formatted as `organizations/123` or just `123`",
                  args: {
                    name: "ORGANIZATION",
                    description: "String",
                  },
                },
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "CUSTOM_MODULE",
                description:
                  "ID or the full resource name of the effective Security Health Analytics custom module. If you specify the full resource name, you do not need to specify the --organization, --folder, or --project flags",
              },
            },
            {
              name: "list",
              description:
                "List the details of Security Health Analytics custom modules",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFilter,
                optFlagsFile,
                optFlatten,
                {
                  name: "--folder",
                  description:
                    "Folder for listing the Security Health Analytics custom modules created at the current folder level and inherited modules from CRM ancestors. Formatted as `folders/456` or just `456`",
                  args: {
                    name: "FOLDER",
                    description: "String",
                  },
                },
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLimit,
                optLogHttp,
                {
                  name: "--organization",
                  description:
                    "Organization for listing the Security Health Analytics custom modules created at the organization level. Formatted as `organizations/123` or just `123`",
                  args: {
                    name: "ORGANIZATION",
                    description: "String",
                  },
                },
                optPageSize,
                optQuiet,
                optSortBy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "list-descendant",
              description:
                "List the details of the resident and descendant Security Health Analytics custom modules",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFilter,
                optFlagsFile,
                optFlatten,
                {
                  name: "--folder",
                  description:
                    "Folder for listing the Security Health Analytics custom modules created at the current folder level and its child resources. Formatted as `folders/456` or just `456`",
                  args: {
                    name: "FOLDER",
                    description: "String",
                  },
                },
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLimit,
                optLogHttp,
                {
                  name: "--organization",
                  description:
                    "Organization for listing the Security Health Analytics custom modules created at the organization level and its child resources. Formatted as `organizations/123` or just `123`",
                  args: {
                    name: "ORGANIZATION",
                    description: "String",
                  },
                },
                optPageSize,
                optQuiet,
                optSortBy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "list-effective",
              description:
                "List the details of Security Health Analytics custom modules with effective enablement states",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFilter,
                optFlagsFile,
                optFlatten,
                {
                  name: "--folder",
                  description:
                    "Folder for listing the effective Security Health Analytics custom modules created at the current folder level and inherited modules from CRM ancestors. Formatted as `folders/456` or just `456`",
                  args: {
                    name: "FOLDER",
                    description: "String",
                  },
                },
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLimit,
                optLogHttp,
                {
                  name: "--organization",
                  description:
                    "Organization for listing the effective Security Health Analytics custom modules created at the organization level. Formatted as `organizations/123` or just `123`",
                  args: {
                    name: "ORGANIZATION",
                    description: "String",
                  },
                },
                optPageSize,
                optQuiet,
                optSortBy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "simulate",
              description:
                "Validates a Security Health Analytics custom module",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--custom-config-from-file",
                  description:
                    "Path to a YAML file that contains the configuration for the Security Health Analytics custom module. Use a full or relative path to a local file containing the value of custom_config",
                  priority: 100,
                  args: {
                    name: "CUSTOM_CONFIG_FROM_FILE",
                    template: "filepaths",
                  },
                },
                optFlagsFile,
                optFlatten,
                {
                  name: "--folder",
                  description:
                    "Folder that will own the Security Health Analytics custom module. Formatted as `folders/456` or just `456`",
                  args: {
                    name: "FOLDER",
                    description: "String",
                  },
                },
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                {
                  name: "--organization",
                  description:
                    "Organization that will own the Security Health Analytics custom module. Formatted as `organizations/123` or just `123`",
                  args: {
                    name: "ORGANIZATION",
                    description: "String",
                  },
                },
                optQuiet,
                {
                  name: "--resource-from-file",
                  description:
                    "Path to a YAML file that contains the resource data to validate the Security Health Analytics custom module against. Use a full or relative path to a local file containing the value of resource",
                  priority: 100,
                  args: {
                    name: "RESOURCE_FROM_FILE",
                    template: "filepaths",
                  },
                },
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "update",
              description: "Update a Security Health Analytics custom module",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--custom-config-from-file",
                  description:
                    "Path to a YAML file that contains the configuration for the Security Health Analytics custom module. Use a full or relative path to a local file containing the value of custom_config",
                  args: {
                    name: "CUSTOM_CONFIG_FROM_FILE",
                    template: "filepaths",
                  },
                },
                {
                  name: "--enablement-state",
                  description:
                    "Sets the enablement state of the Security Health Analytics custom module. From the following list of possible enablement states, specify either enabled, disabled or inherited only. _ENABLEMENT_STATE_ must be one of: *disabled*, *enabled*, *enablement-state-unspecified*, *inherited*",
                  args: {
                    name: "ENABLEMENT_STATE",
                    suggestions: [
                      "disabled",
                      "enabled",
                      "enablement-state-unspecified",
                      "inherited",
                    ],
                  },
                },
                optFlagsFile,
                optFlatten,
                optFolder2,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                optOrganization4,
                optQuiet,
                optTraceToken,
                optUpdateMask,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "CUSTOM_MODULE",
                description:
                  "ID or the full resource name of the Security Health Analytics custom module. If you specify the full resource name, you do not need to specify the --organization, --folder, or --project flags",
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
      name: "findings",
      description: "Manage Cloud SCC (Security Command Center) findings",
      subcommands: [
        {
          name: "bulk-mute",
          description:
            "Bulk mute Security Command Center findings based on a filter",
          options: [
            optAccessTokenFile,
            optAccount,
            optApiVersion,
            optBillingProject,
            optConfiguration,
            {
              name: "--filter",
              description:
                "Expression that identifies findings that should be muted",
              priority: 100,
              args: {
                name: "FILTER",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description:
                "Folder where the findings reside. Formatted as ``folders/456'' or just ``456''",
              args: {
                name: "FOLDER",
                description: "String",
              },
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation3,
            optLogHttp,
            {
              name: "--mute-state",
              description:
                "Desired mute state of the finding. _MUTE_STATE_ must be one of: *muted*, *undefined*",
              args: {
                name: "MUTE_STATE",
                suggestions: ["muted", "undefined"],
              },
            },
            {
              name: "--organization",
              description:
                "Organization where the findings reside. Formatted as ``organizations/123'' or just ``123''",
              args: {
                name: "ORGANIZATION",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "create",
          description: "Create a Security Command Center finding",
          options: [
            optAccessTokenFile,
            optAccount,
            optApiVersion,
            optBillingProject,
            {
              name: "--category",
              description:
                "Taxonomy group within findings from a given source. Example: XSS_SCRIPTING",
              priority: 100,
              args: {
                name: "CATEGORY",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--event-time",
              description:
                "Time at which the event took place. For example, if the finding represents an open firewall it would capture the time the open firewall was detected. If event-time is not provided, it will default to UTC version of NOW. See `$ gcloud topic datetimes` for information on supported time formats",
              priority: 100,
              args: {
                name: "EVENT_TIME",
                description: "String",
              },
            },
            {
              name: "--external-uri",
              description:
                "URI that, if available, points to a web page outside of Cloud SCC (Security Command Center) where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL",
              args: {
                name: "EXTERNAL_URI",
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
            optLocation3,
            optLogHttp,
            optOrganization,
            optProject,
            optQuiet,
            {
              name: "--resource-name",
              description:
                "Full resource name of the Google Cloud Platform resource this finding is for",
              priority: 100,
              args: {
                name: "RESOURCE_NAME",
                description: "String",
              },
            },
            {
              name: "--source",
              description:
                "(Optional) If the full resource name isn't provided e.g. organizations/123/sources/456, then provide the source id which is the suffix of the source. Example: organizations/123/sources/456, the id is 456",
              args: {
                name: "SOURCE",
                description: "String",
              },
            },
            {
              name: "--source-properties",
              description:
                'Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only. For example "key1=val1,key2=val2"',
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--state",
              description:
                "State is one of: [ACTIVE, INACTIVE]. _STATE_ must be one of: *active*, *inactive*, *state-unspecified*",
              args: {
                name: "STATE",
                suggestions: ["active", "inactive", "state-unspecified"],
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FINDING",
            description:
              "ID of the finding or fully qualified identifier for the finding",
          },
        },
        {
          name: "export-to-bigquery",
          description: "Export Security Command Center findings to bigquery",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--dataset",
              description: "BigQuery dataset to export findings to",
              priority: 100,
              args: {
                name: "DATASET",
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
            optLocation3,
            optLogHttp,
            optProject,
            optQuiet,
            optSource,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PARENT",
            description:
              "ID of the parent or fully qualified identifier for the parent",
            isOptional: true,
          },
        },
        {
          name: "group",
          description:
            "Filter an organization or source's findings and groups them by their specified properties",
          options: [
            optAccessTokenFile,
            optAccount,
            optApiVersion,
            optBillingProject,
            {
              name: "--compare-duration",
              description:
                "(DEPRECATED) When compare_duration is set, the result's \"state_change\" attribute is updated to indicate whether the finding had its state changed, the finding's state remained unchanged, or if the finding was added during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence and state of the finding at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the finding is made inactive and then active again. Possible \"state_change\" values when compare_duration is specified:",
              deprecated: true,
              args: {
                name: "COMPARE_DURATION",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--filter",
              description:
                "Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators 'AND' and 'OR'. Parentheses are supported, and 'OR' has higher precedence than 'AND'. Restrictions have the form '<field> <operator> <value>' and may have a '-' character in front of them to indicate negation. Examples include: name, source_properties.a_property, security_marks.marks.marka. The supported operators are: * '=' for all value types. * '>', '<', '>=', '<=' for integer values. * ':', meaning substring matching, for strings",
              args: {
                name: "FILTER",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--group-by",
              description:
                "Expression that defines what findings fields to use for grouping (including 'state'). String value should follow SQL syntax: comma separated list of fields. For example: \"parent,resource_name\". The following fields are supported: * resource_name * category * state * parent",
              args: {
                name: "GROUP_BY",
                description: "String",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation3,
            optLogHttp,
            {
              name: "--page-size",
              description:
                "Maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000",
              args: {
                name: "PAGE_SIZE",
              },
            },
            optPageToken,
            optProject,
            optQuiet,
            optReadTime,
            optSource,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PARENT",
            description:
              "ID of the parent or fully qualified identifier for the parent",
            isOptional: true,
          },
        },
        {
          name: "list",
          description: "List an organization or source's findings",
          options: [
            optAccessTokenFile,
            optAccount,
            optApiVersion,
            optBillingProject,
            {
              name: "--compare-duration",
              description:
                "(DEPRECATED) When compare_duration is set, the result's \"state_change\" attribute is updated to indicate whether the finding had its state changed, the finding's state remained unchanged, or if the finding was added during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence and state of the finding at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the finding is made inactive and then active again. Possible \"state_change\" values when compare_duration is specified:",
              deprecated: true,
              args: {
                name: "COMPARE_DURATION",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--field-mask",
              description:
                'Field mask to specify the finding fields listed in the response. An empty field mask will list all fields. For example: --field-mask="finding.category,finding.resource_name" will only output category and resource_name for the findings in addition to default attributes. Notice the difference between hyphens (-) used with flags v/s camel case used in field masks. An empty or missing field mask will list all fields',
              args: {
                name: "FIELD_MASK",
                description: "String",
              },
            },
            optFilter,
            optFlagsFile,
            optFlatten,
            optFolder5,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLimit,
            optLocation3,
            optLogHttp,
            {
              name: "--order-by",
              description:
                'Expression that defines what fields and order to use for sorting. String value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: --order-by="name desc,source_properties.a_property" will order by name in descending order while source_properties.a_property in ascending order',
              args: {
                name: "ORDER_BY",
                description: "String",
              },
            },
            optOrganization7,
            optPageSize,
            optPageToken,
            optQuiet,
            optReadTime,
            optSortBy,
            optSource,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PARENT",
            description:
              "ID of the parent or fully qualified identifier for the parent",
            isOptional: true,
          },
        },
        {
          name: "list-marks",
          description: "List a finding's security marks",
          options: [
            optAccessTokenFile,
            optAccount,
            optApiVersion,
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFolder5,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLimit,
            optLocation3,
            optLogHttp,
            optOrganization7,
            optPageSize,
            optPageToken,
            optQuiet,
            optReadTime,
            optSortBy,
            optSource,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FINDING",
            description:
              "ID of the finding or fully qualified identifier for the finding",
          },
        },
        {
          name: "set-mute",
          description: "Update a Security Command Center finding's mute state",
          options: [
            optAccessTokenFile,
            optAccount,
            optApiVersion,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            {
              name: "--folder",
              description:
                "Folder where the finding resides. Formatted as ``folders/456'' or just ``456''",
              args: {
                name: "FOLDER",
                description: "String",
              },
            },
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation3,
            optLogHttp,
            {
              name: "--mute",
              description:
                "Desired mute state of the finding. _MUTE_ must be one of: *muted*, *unmuted*, *undefined*",
              priority: 100,
              args: {
                name: "MUTE",
                suggestions: ["muted", "unmuted", "undefined"],
              },
            },
            {
              name: "--organization",
              description:
                "Organization where the finding resides. Formatted as ``organizations/123'' or just ``123''",
              args: {
                name: "ORGANIZATION",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--source",
              description: "ID of the source",
              args: {
                name: "SOURCE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FINDING",
            description:
              "ID of the finding or the full resource name of the finding",
          },
        },
        {
          name: "update",
          description: "Update a Security Command Center finding",
          options: [
            optAccessTokenFile,
            optAccount,
            optApiVersion,
            optBillingProject,
            optConfiguration,
            {
              name: "--event-time",
              description:
                "Time at which the event took place. For example, if the finding represents an open firewall it would capture the time the open firewall was detected. If event-time is not provided, it will default to UTC version of NOW. See `$ gcloud topic datetimes` for information on supported time formats",
              args: {
                name: "EVENT_TIME",
                description: "String",
              },
            },
            {
              name: "--external-uri",
              description:
                "URI that, if available, points to a web page outside of Cloud SCC (Security Command Center) where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL",
              args: {
                name: "EXTERNAL_URI",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFolder5,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation3,
            optLogHttp,
            optOrganization7,
            optQuiet,
            optSource,
            {
              name: "--source-properties",
              description:
                'Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only. For example "key1=val1,key2=val2"',
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            {
              name: "--state",
              description:
                "State is one of: [ACTIVE, INACTIVE]. _STATE_ must be one of: *active*, *inactive*, *state-unspecified*",
              args: {
                name: "STATE",
                suggestions: ["active", "inactive", "state-unspecified"],
              },
            },
            optTraceToken,
            {
              name: "--update-mask",
              description:
                "Optional: If left unspecified (default), an update-mask is automatically created using the flags specified in the command and only those values are updated. For example: --external-uri='<some-uri>' --event-time='<some-time>' would automatically generate --update-mask='external_uri,event_time'. Note that as a result, only external-uri and event-time are updated for the given finding and everything else remains untouched. If you want to delete attributes/properties (that are not being changed in the update command) use an empty update-mask (''). That will delete all the mutable properties/attributes that aren't specified as flags in the update command. In the above example it would delete source-properties. State can be toggled from ACTIVE to INACTIVE and vice-versa but it cannot be deleted",
              args: {
                name: "UPDATE_MASK",
                description: "String",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FINDING",
            description:
              "ID of the finding or fully qualified identifier for the finding",
          },
        },
        {
          name: "update-marks",
          description:
            "Update Security Command Center finding's security marks",
          options: [
            optAccessTokenFile,
            optAccount,
            optApiVersion,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFolder5,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation3,
            optLogHttp,
            optOrganization7,
            optQuiet,
            {
              name: "--security-marks",
              description:
                'SecurityMarks resource to be passed as the request body. It\'s a key=value pair separated by comma (,). For example: --security-marks="key1=val1,key2=val2"',
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optSource,
            {
              name: "--start-time",
              description:
                "Time at which the updated SecurityMarks take effect. See `$ gcloud topic datetimes` for information on supported time formats",
              args: {
                name: "START_TIME",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--update-mask",
              description:
                "Use update-mask if you want to selectively update marks represented by --security-marks flag. For example: --update-mask=\"marks.key1,marks.key2\". If you want to override all the marks for the given finding either skip the update-mask flag or provide an empty value (--update-mask '') for it",
              args: {
                name: "UPDATE_MASK",
                description: "String",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FINDING",
            description:
              "ID of the finding or fully qualified identifier for the finding",
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
      name: "iac-remediation",
      description:
        "Manage Cloud Security Command Center (SCC) IaC remediations",
      hidden: true,
      subcommands: [
        {
          name: "create",
          description: "Remediates a Security Command Center finding",
          hidden: true,
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--finding-name",
              description:
                "Canonical name of the finding Format: projects/{proj_id}/sources/{src_id}/locations/global/findings/{finding_id}",
              priority: 100,
              args: {
                name: "FINDING_NAME",
                description: "String",
              },
            },
            {
              name: "--finding-org-id",
              description: "Organization ID of the finding",
              priority: 100,
              args: {
                name: "FINDING_ORG_ID",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--git-config-path",
              description:
                "Path to the git config file in YAML format to raise the PR. Format: /path/to/file.yaml. Sample Config file:",
              priority: 100,
              args: {
                name: "GIT_SETTINGS",
                template: "filepaths",
              },
            },
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optProject,
            {
              name: "--project-id",
              description: "Project ID of the LLM enabled project",
              priority: 100,
              args: {
                name: "PROJECT_ID",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--tfstate-file-paths",
              description:
                "Comma seperated list of paths to terraform state files. Format: /path/to/file1.tfstate,/path/to/file2.tfstate",
              args: {
                name: "PATHS",
                description: "List",
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
      name: "iac-validation-reports",
      description:
        "Manage Cloud SCC (Security Command Center) iac-validation-reports",
      subcommands: [
        {
          name: "create",
          description:
            "Create a Cloud Security Command Center (SCC) IaC Validation Report",
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
            {
              name: "--tf-plan-file",
              description:
                "Path to a JSON file containing the IaC plan to be validated. Use a full or relative path to a local file containing the value of tf_plan_file",
              priority: 100,
              args: {
                name: "TF_PLAN_FILE",
                template: "filepaths",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PARENT",
            description:
              "Name of the organization where IaC Validation Report is to be created. Format: organizations/<organizationID>/locations/<location>",
          },
        },
        {
          name: "describe",
          description:
            "Describe a Cloud Security Command Center (SCC) IaC Validation Report",
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
            optOrganization2,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "REPORT",
            description:
              "ID of the report or fully qualified identifier for the report",
          },
        },
        {
          name: "list",
          description:
            "Lists all the Cloud Security Command Center (SCC) IaC validation reports for an organization",
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
            optOrganization8,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PARENT",
            description:
              "Parent of the IaC validation reports or fully qualified identifier for the IaC validation reports",
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
      name: "manage",
      description: "Manage Cloud SCC (Security Command Center) settings",
      subcommands: [
        {
          name: "custom-modules",
          description:
            "Manage Cloud SCC (Security Command Center) custom modules",
          subcommands: [
            {
              name: "etd",
              description: "Manage custom modules",
              subcommands: [
                {
                  name: "create",
                  description: "Create an Event Threat Detection custom module",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    {
                      name: "--custom-config-file",
                      description:
                        "Path to a JSON custom configuration file of the ETD custom module. Use a full or relative path to a local file containing the value of custom_config_file",
                      priority: 100,
                      args: {
                        name: "CUSTOM_CONFIG",
                        template: "filepaths",
                      },
                    },
                    {
                      name: "--display-name",
                      description: "The display name of the custom module",
                      priority: 100,
                      args: {
                        name: "DISPLAY-NAME",
                        description: "String",
                      },
                    },
                    {
                      name: "--enablement-state",
                      description:
                        "Sets the enablement state of the Event Threat Detection custom module. Valid options are ENABLED, DISABLED, OR INHERITED",
                      priority: 100,
                      args: {
                        name: "ENABLEMENT_STATE",
                        description: "String",
                      },
                    },
                    optFlagsFile,
                    optFlatten,
                    optFolder6,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLogHttp,
                    {
                      name: "--module-type",
                      description:
                        "Type of the custom module. For a list of valid module types please visit https://cloud.google.com/security-command-center/docs/custom-modules-etd-overview#custom_modules_and_templates",
                      priority: 100,
                      args: {
                        name: "MODULE_TYPE",
                        description: "String",
                      },
                    },
                    optNoValidateOnly,
                    optOrganization9,
                    optParent,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optValidateOnly,
                    optVerbosity,
                  ],
                },
                {
                  name: "delete",
                  description: "Delete an Event Threat Detection custom module",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFlagsFile,
                    optFlatten,
                    optFolder6,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLogHttp,
                    optNoValidateOnly,
                    optOrganization9,
                    optParent,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optValidateOnly,
                    optVerbosity,
                  ],
                  args: {
                    name: "MODULE_ID_OR_NAME",
                    description:
                      "The custom module ID or name. The expected format is {parent}/[locations/global]/eventThreatDetectionCustomModules/{module_id} or just {module_id}. Where module_id is a numeric identifier 1-20 characters in length. Parent is of the form organizations/{id}, projects/{id or name}, folders/{id}",
                  },
                },
                {
                  name: "describe",
                  description:
                    "Get the details of a Event Threat Detection custom module",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFlagsFile,
                    optFlatten,
                    optFolder6,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLogHttp,
                    optOrganization9,
                    optParent,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "MODULE_ID_OR_NAME",
                    description:
                      "The custom module ID or name. The expected format is {parent}/[locations/global]/eventThreatDetectionCustomModules/{module_id} or just {module_id}. Where module_id is a numeric identifier 1-20 characters in length. Parent is of the form organizations/{id}, projects/{id or name}, folders/{id}",
                  },
                },
                {
                  name: "describe-effective",
                  description:
                    "Get the effective details of a Event Threat Detection effective custom module",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFlagsFile,
                    optFlatten,
                    optFolder6,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLogHttp,
                    optOrganization9,
                    optParent,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "MODULE_ID_OR_NAME",
                    description:
                      "The custom module ID or name. The expected format is {parent}/[locations/global]/effectiveEventThreatDetectionCustomModules/{module_id} or just {module_id}. Where module_id is a numeric identifier 1-20 characters in length. Parent is of the form organizations/{id}, projects/{id or name}, folders/{id}",
                  },
                },
                {
                  name: "list",
                  description:
                    "List details of resident and inherited Event Threat Detection Custom Modules",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFilter,
                    optFlagsFile,
                    optFlatten,
                    optFolder6,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLimit,
                    optLogHttp,
                    optOrganization9,
                    optPageSize,
                    optParent,
                    optQuiet,
                    optSortBy,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                },
                {
                  name: "list-descendant",
                  description:
                    "List the details of the resident and descendant Event Threat Detection custom modules",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFilter,
                    optFlagsFile,
                    optFlatten,
                    optFolder6,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLimit,
                    optLogHttp,
                    optOrganization9,
                    optPageSize,
                    optParent,
                    optQuiet,
                    optSortBy,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                },
                {
                  name: "list-effective",
                  description:
                    "List the details of an Event Threat Detection effective custom module",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFilter,
                    optFlagsFile,
                    optFlatten,
                    optFolder6,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLimit,
                    optLogHttp,
                    optOrganization9,
                    optPageSize,
                    optParent,
                    optQuiet,
                    optSortBy,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                },
                {
                  name: "update",
                  description: "Update an Event Threat Detection custom module",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    {
                      name: "--custom-config-file",
                      description:
                        "Path to a JSON file that contains the custom config to set for the module. Use a full or relative path to a local file containing the value of custom_config_file",
                      args: {
                        name: "CUSTOM_CONFIG_FILE",
                        template: "filepaths",
                      },
                    },
                    {
                      name: "--enablement-state",
                      description:
                        "Sets the enablement state of the Event Threat Detection custom module. Valid options are ENABLED, DISABLED, OR INHERITED",
                      args: {
                        name: "ENABLEMENT_STATE",
                        description: "String",
                      },
                    },
                    optFlagsFile,
                    optFlatten,
                    optFolder6,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLogHttp,
                    optNoValidateOnly,
                    optOrganization9,
                    optParent,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optValidateOnly,
                    optVerbosity,
                  ],
                  args: {
                    name: "MODULE_ID_OR_NAME",
                    description:
                      "The custom module ID or name. The expected format is {parent}/[locations/global]/eventThreatDetectionCustomModules/{module_id} or just {module_id}. Where module_id is a numeric identifier 1-20 characters in length. Parent is of the form organizations/{id}, projects/{id or name}, folders/{id}",
                  },
                },
                {
                  name: "validate",
                  description: "Command to validate an ETD custom module",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    {
                      name: "--custom-config-file",
                      description:
                        "Path to a JSON custom configuration file of the ETD custom module. Use a full or relative path to a local file containing the value of custom_config_file",
                      priority: 100,
                      args: {
                        name: "CUSTOM_CONFIG",
                        template: "filepaths",
                      },
                    },
                    optFlagsFile,
                    optFlatten,
                    optFolder6,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLogHttp,
                    {
                      name: "--module-type",
                      description:
                        "Type of the custom module. For a list of valid module types please visit https://cloud.google.com/security-command-center/docs/custom-modules-etd-overview#custom_modules_and_templates",
                      priority: 100,
                      args: {
                        name: "MODULE_TYPE",
                        description: "String",
                      },
                    },
                    optOrganization9,
                    optParent,
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
              name: "sha",
              description: "Manage Security Health Analytics custom modules",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create an Security Health Analytics custom module",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    {
                      name: "--custom-config-from-file",
                      description:
                        "Path to a YAML custom configuration file. Use a full or relative path to a local file containing the value of custom_config",
                      priority: 100,
                      args: {
                        name: "CUSTOM_CONFIG",
                        template: "filepaths",
                      },
                    },
                    {
                      name: "--display-name",
                      description: "The display name of the custom module",
                      priority: 100,
                      args: {
                        name: "DISPLAY-NAME",
                        description: "String",
                      },
                    },
                    {
                      name: "--enablement-state",
                      description:
                        "Sets the enablement state of the Security Health Analytics custom module. Valid options are ENABLED, DISABLED, OR INHERITED",
                      priority: 100,
                      args: {
                        name: "ENABLEMENT_STATE",
                        description: "String",
                      },
                    },
                    optFlagsFile,
                    optFlatten,
                    optFolder6,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLogHttp,
                    optNoValidateOnly,
                    optOrganization9,
                    optParent,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optValidateOnly,
                    optVerbosity,
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete a Security Health Analytics custom module",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFlagsFile,
                    optFlatten,
                    optFolder6,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLogHttp,
                    optNoValidateOnly,
                    optOrganization9,
                    optParent,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optValidateOnly,
                    optVerbosity,
                  ],
                  args: {
                    name: "MODULE_ID_OR_NAME",
                    description:
                      "The custom module ID or name. The expected format is {parent}/[locations/global]/securityHealthAnalyticsCustomModules/{module_id} or just {module_id}. Where module_id is a numeric identifier 1-20 characters in length. Parent is of the form organizations/{id}, projects/{id or name}, folders/{id}",
                  },
                },
                {
                  name: "describe",
                  description:
                    "Get the details of a Security Health Analytics custom module",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFlagsFile,
                    optFlatten,
                    optFolder6,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLogHttp,
                    optOrganization9,
                    optParent,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "MODULE_ID_OR_NAME",
                    description:
                      "The custom module ID or name. The expected format is {parent}/[locations/global]/securityHealthAnalyticsCustomModules/{module_id} or just {module_id}. Where module_id is a numeric identifier 1-20 characters in length. Parent is of the form organizations/{id}, projects/{id or name}, folders/{id}",
                  },
                },
                {
                  name: "describe-effective",
                  description:
                    "Get effective the details of a Security Health Analytics effective custom module",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFlagsFile,
                    optFlatten,
                    optFolder6,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLogHttp,
                    optOrganization9,
                    optParent,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "MODULE_ID_OR_NAME",
                    description:
                      "The custom module ID or name. The expected format is {parent}/[locations/global]/effectiveSecurityHealthAnalyticsCustomModules/{module_id} or just {module_id}. Where module_id is a numeric identifier 1-20 characters in length. Parent is of the form organizations/{id}, projects/{id or name}, folders/{id}",
                  },
                },
                {
                  name: "list",
                  description:
                    "List the details of Security Health Analyics custom modules",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFilter,
                    optFlagsFile,
                    optFlatten,
                    optFolder6,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLimit,
                    optLogHttp,
                    optOrganization9,
                    optPageSize,
                    optParent,
                    optQuiet,
                    optSortBy,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                },
                {
                  name: "list-descendant",
                  description:
                    "List the details of the resident and descendant Security Health Analytics custom modules",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFilter,
                    optFlagsFile,
                    optFlatten,
                    optFolder6,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLimit,
                    optLogHttp,
                    optOrganization9,
                    optPageSize,
                    optParent,
                    optQuiet,
                    optSortBy,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                },
                {
                  name: "list-effective",
                  description:
                    "List the details of an Security Health Analytics effective custom module",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFilter,
                    optFlagsFile,
                    optFlatten,
                    optFolder6,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLimit,
                    optLogHttp,
                    optOrganization9,
                    optPageSize,
                    optParent,
                    optQuiet,
                    optSortBy,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                },
                {
                  name: "simulate",
                  description: "Command to simulate a SHA custom module",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    {
                      name: "--custom-config-from-file",
                      description:
                        "Path to a YAML custom configuration file. Use a full or relative path to a local file containing the value of custom_config",
                      priority: 100,
                      args: {
                        name: "CUSTOM_CONFIG",
                        template: "filepaths",
                      },
                    },
                    optFlagsFile,
                    optFlatten,
                    optFolder6,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLogHttp,
                    optOrganization9,
                    optParent,
                    optQuiet,
                    {
                      name: "--resource-from-file",
                      description:
                        "Path to a YAML file that contains the resource data to validate the Security Health Analytics custom module against. Use a full or relative path to a local file containing the value of resource",
                      priority: 100,
                      args: {
                        name: "TEST_DATA",
                        template: "filepaths",
                      },
                    },
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update a Security Health Analytics custom module",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    {
                      name: "--custom-config-file",
                      description:
                        "Path to a YAML file that contains the custom config to set for the module. Use a full or relative path to a local file containing the value of custom_config_file",
                      args: {
                        name: "CUSTOM_CONFIG_FILE",
                        template: "filepaths",
                      },
                    },
                    {
                      name: "--enablement-state",
                      description:
                        "Sets the enablement state of the Security Health Analytics custom module. Valid options are ENABLED, DISABLED, OR INHERITED",
                      args: {
                        name: "ENABLEMENT_STATE",
                        description: "String",
                      },
                    },
                    optFlagsFile,
                    optFlatten,
                    optFolder6,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLogHttp,
                    optNoValidateOnly,
                    optOrganization9,
                    optParent,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optValidateOnly,
                    optVerbosity,
                  ],
                  args: {
                    name: "MODULE_ID_OR_NAME",
                    description:
                      "The custom module ID or name. The expected format is {parent}/[locations/global]/securityHealthAnalyticsCustomModules/{module_id} or just {module_id}. Where module_id is a numeric identifier 1-20 characters in length. Parent is of the form organizations/{id}, projects/{id or name}, folders/{id}",
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
          name: "services",
          description: "Manage Cloud SCC (Security Command Center) services",
          subcommands: [
            {
              name: "describe",
              description:
                "Get the details of a Security Command Center service",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--filter-modules",
                  description:
                    "If provided, only prints module information for modules specified in the list. Provided as a comma separated list of module names in SCREAMING_SNAKE_CASE format (e.g. WEB_UI_ENABLED, API_KEY_NOT_ROTATED). A single module name is also valid",
                  args: {
                    name: "FILTER_MODULES",
                    description: "String",
                  },
                },
                optFlagsFile,
                optFlatten,
                optFolder6,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                optOrganization9,
                optParent,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "SERVICE_NAME",
                description:
                  "The service name, provided either in lowercase hyphenated form (e.g. security-health-analytics), or in abbreviated form (e.g. sha) if applicable",
              },
            },
            {
              name: "list",
              description:
                "List the details of Security Command Center services",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFilter,
                optFlagsFile,
                optFlatten,
                {
                  name: "--folder",
                  description:
                    "Folder associated with the Security Center service",
                  args: {
                    name: "FOLDER_ID",
                    description: "String",
                  },
                },
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLimit,
                optLogHttp,
                {
                  name: "--organization",
                  description:
                    "Organization associated with the Security Center service",
                  args: {
                    name: "ORGANIZATION_ID",
                    description: "String",
                  },
                },
                optPageSize,
                {
                  name: "--parent",
                  description:
                    "Parent associated with the Security Center service. Can be one of organizations/<id>, projects/<id or name>, folders/<id>",
                  args: {
                    name: "PARENT",
                    description: "String",
                  },
                },
                optQuiet,
                optSortBy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "update",
              description: "Update a Security Command Center service",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                {
                  name: "--enablement-state",
                  description:
                    "Sets the enablement state of the Security Center service. Valid options are ENABLED, DISABLED, OR INHERITED. The INHERITED state is only valid when setting the enablement state at the project or folder level",
                  args: {
                    name: "ENABLEMENT_STATE",
                    description: "String",
                  },
                },
                optFlagsFile,
                optFlatten,
                optFolder6,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                {
                  name: "--module-config-file",
                  description:
                    "Path to a JSON or YAML file that contains the module config to set for the given module and service",
                  args: {
                    name: "MODULE_CONFIG_FILE",
                    template: "filepaths",
                  },
                },
                optNoValidateOnly,
                optOrganization9,
                optParent,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optValidateOnly,
                optVerbosity,
              ],
              args: {
                name: "SERVICE_NAME",
                description:
                  "The service name, provided either in lowercase hyphenated form (e.g. security-health-analytics), or in abbreviated form (e.g. sha) if applicable",
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
      name: "muteconfigs",
      description: "Manage Cloud SCC (Security Command Center) mute configs",
      subcommands: [
        {
          name: "create",
          description: "Create a Security Command Center mute config",
          options: [
            optAccessTokenFile,
            optAccount,
            optApiVersion,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description:
                "The text that will be used to describe a mute configuration",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--expiry-time",
              description:
                "The expiry of the mute config. Only applicable for dynamic configs. If the expiry is set, when the config expires, it is removed from all findings. See `$ gcloud topic datetimes` for information on supported time formats",
              args: {
                name: "EXPIRY_TIME",
                description: "String",
              },
            },
            {
              name: "--filter",
              description:
                "The filter string which will applied to findings muted by a mute configuration",
              args: {
                name: "FILTER",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFolder3,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation3,
            optLogHttp,
            optOrganization5,
            optQuiet,
            optTraceToken,
            {
              name: "--type",
              description:
                "The mute configuration type. Immutable after creation. _TYPE_ must be one of: *static*, *dynamic*",
              args: {
                name: "TYPE",
                suggestions: ["static", "dynamic"],
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MUTE_CONFIG",
            description:
              "ID of the mute config or the full resource name of the mute config",
          },
        },
        {
          name: "delete",
          description: "Delete a Security Command Center mute config",
          options: [
            optAccessTokenFile,
            optAccount,
            optApiVersion,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFolder3,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation3,
            optLogHttp,
            optOrganization5,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MUTE_CONFIG",
            description:
              "ID of the mute config or the full resource name of the mute config",
          },
        },
        {
          name: "get",
          description: "Get a Security Command Center mute config",
          options: [
            optAccessTokenFile,
            optAccount,
            optApiVersion,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFolder3,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation3,
            optLogHttp,
            optOrganization5,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MUTE_CONFIG",
            description:
              "ID of the mute config or the full resource name of the mute config",
          },
        },
        {
          name: "list",
          description: "ListSecurity Command Center mute configs",
          options: [
            optAccessTokenFile,
            optAccount,
            optApiVersion,
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFolder3,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLimit,
            optLocation3,
            optLogHttp,
            optOrganization5,
            optPageSize,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Update a Security Command Center mute config",
          options: [
            optAccessTokenFile,
            optAccount,
            optApiVersion,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description:
                "The text that will be used to describe a mute configuration",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--expiry-time",
              description:
                "The expiry of the mute config. Only applicable for dynamic configs. If the expiry is set, when the config expires, it is removed from all findings. See `$ gcloud topic datetimes` for information on supported time formats",
              args: {
                name: "EXPIRY_TIME",
                description: "String",
              },
            },
            {
              name: "--filter",
              description:
                "The filter string which will applied to findings muted by a mute configuration",
              args: {
                name: "FILTER",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFolder3,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLocation3,
            optLogHttp,
            optOrganization5,
            optQuiet,
            optTraceToken,
            optUpdateMask,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "MUTE_CONFIG",
            description:
              "ID of the mute config or the full resource name of the mute config",
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
      name: "notifications",
      description: "Manage Cloud SCC (Security Command Center) notifications",
      subcommands: [
        {
          name: "create",
          description: "Create a Security Command Center notification config",
          options: [
            optAccessTokenFile,
            optAccount,
            optApiVersion,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description:
                "The text that will be used to describe a notification configuration",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--filter",
              description: "Filter to be used for notification config",
              args: {
                name: "FILTER",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFolder4,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--location",
              description:
                "If data residency is enabled, specify the Security Command Center location in which to create the notification. The resulting `notificationConfig` resource is stored only in this location. Only findings that are issued in this location are sent to Pub/Sub",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optOrganization6,
            {
              name: "--pubsub-topic",
              description:
                'The Pub/Sub topic which will receive notifications. Its format is "projects/[project_id]/topics/[topic]"',
              priority: 100,
              args: {
                name: "PUBSUB_TOPIC",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "NOTIFICATION_CONFIG_ID",
            description:
              'The ID of the notification config. Formatted as "organizations/123/notificationConfigs/456" or just "456"',
          },
        },
        {
          name: "delete",
          description: "Delete a Security Command Center notification config",
          options: [
            optAccessTokenFile,
            optAccount,
            optApiVersion,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFolder4,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--location",
              description:
                "Required if either data residency is enabled or the `notificationConfig` was created by using the API v2",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optOrganization6,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "NOTIFICATION_CONFIG_ID",
            description:
              'The ID of the notification config. Formatted as "organizations/123/notificationConfigs/456" or just "456"',
          },
        },
        {
          name: "describe",
          description: "Describe a Security Command Center notification config",
          options: [
            optAccessTokenFile,
            optAccount,
            optApiVersion,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFolder4,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--location",
              description:
                "Required if either data residency is enabled or the `notificationConfig` resources were created by using the API v2",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optOrganization6,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "NOTIFICATION_CONFIG_ID",
            description:
              'The ID of the notification config. Formatted as "organizations/123/notificationConfigs/456" or just "456"',
          },
        },
        {
          name: "list",
          description: "List Security Command Center notification configs",
          options: [
            optAccessTokenFile,
            optAccount,
            optApiVersion,
            optBillingProject,
            optConfiguration,
            optFilter,
            optFlagsFile,
            optFlatten,
            optFolder4,
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
                "Required if either data residency is enabled or the `notificationConfig` resources were created by using the API v2",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optOrganization6,
            optPageSize,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PARENT",
            description:
              "ID of the parent or fully qualified identifier for the parent",
            isOptional: true,
          },
        },
        {
          name: "update",
          description: "Update a Security Command Center notification config",
          options: [
            optAccessTokenFile,
            optAccount,
            optApiVersion,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description:
                "The text that will be used to describe a notification configuration",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--filter",
              description:
                "The filter string which will applied to events of findings of a notification configuration",
              args: {
                name: "FILTER",
                description: "String",
              },
            },
            optFlagsFile,
            optFlatten,
            optFolder4,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            {
              name: "--location",
              description:
                "Required if either data residency is enabled or the `notificationConfig` was created by using the API v2",
              args: {
                name: "LOCATION",
                description: "String",
              },
            },
            optLogHttp,
            optOrganization6,
            {
              name: "--pubsub-topic",
              description:
                'The Pub/Sub topic which will receive notifications. Its format is "projects/[project_id]/topics/[topic]"',
              args: {
                name: "PUBSUB_TOPIC",
                description: "String",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "NOTIFICATION_CONFIG_ID",
            description:
              'The ID of the notification config. Formatted as "organizations/123/notificationConfigs/456" or just "456"',
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
      description: "Manage Cloud SCC (Security Command Center) operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Cloud SCC's long running scan operation",
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
            optOrganization,
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
      name: "posture-deployments",
      description:
        "Manage Cloud Security Command Center (SCC) posture deployments",
      subcommands: [
        {
          name: "create",
          description:
            "Create a Cloud Security Command Center (SCC) posture deployment",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description:
                "User-provided description of the posture deployment",
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
            optLocation,
            optLogHttp,
            optNoAsync,
            optOrganization2,
            {
              name: "--posture-name",
              description:
                "Posture that needs to be deployed. Format: organizations/<organizationID>/locations/<location>/postures/<postureID>",
              priority: 100,
              args: {
                name: "POSTURE_NAME",
                description: "String",
              },
            },
            {
              name: "--posture-revision-id",
              description: "Posture revision that needs to be deployed",
              priority: 100,
              args: {
                name: "POSTURE_REVISION_ID",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--target-resource",
              description:
                "Name of the workload on which posture deployment is to be created. It could be an organization, folder or a project. Possible formats: | organizations/<organizationID> | folders/<folderID> | projects/<projectID> The above mentioned IDs need to have numeric format",
              priority: 100,
              args: {
                name: "TARGET_RESOURCE",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "POSTURE_DEPLOYMENT",
            description:
              "ID of the posture_deployment or fully qualified identifier for the posture_deployment",
          },
        },
        {
          name: "delete",
          description:
            "Delete a Cloud Security Command Center (SCC) posture deployment",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--etag",
              description:
                "Etag is an optional flag. If the provided Etag doesn't match the server generated Etag, the delete operation won't proceed",
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
            optNoAsync,
            optOrganization2,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "POSTURE_DEPLOYMENT",
            description:
              "ID of the posture_deployment or fully qualified identifier for the posture_deployment",
          },
        },
        {
          name: "describe",
          description:
            "Describe a Cloud Security Command Center (SCC) posture deployment",
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
            optOrganization2,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "POSTURE_DEPLOYMENT",
            description:
              "ID of the posture_deployment or fully qualified identifier for the posture_deployment",
          },
        },
        {
          name: "list",
          description:
            "List the details of the Cloud Security Command Center (SCC) posture deployments",
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
            optOrganization8,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PARENT",
            description:
              "Parent of Cloud Security Command Center posture deployments. Formatted as organizations/<organizationID>/locations/<location>",
            isOptional: true,
          },
        },
        {
          name: "update",
          description:
            "Update the given Cloud Security Command Center (SCC) posture deployment",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "Updated description of posture deployment",
              args: {
                name: "DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--etag",
              description:
                "Etag is an optional flag. If the provided Etag doesn't match the server generated Etag, the update operation won't proceed",
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
            optNoAsync,
            optOrganization2,
            {
              name: "--posture-id",
              description:
                "Relative name of the posture to be updated, like `organizations/<organizationID>/locations/<location>/postures/<postureID>`",
              priority: 100,
              args: {
                name: "POSTURE_ID",
                description: "String",
              },
            },
            {
              name: "--posture-revision-id",
              description: "Revision ID of the posture to be updated",
              priority: 100,
              args: {
                name: "POSTURE_REVISION_ID",
                description: "String",
              },
            },
            optProject,
            optQuiet,
            optTraceToken,
            {
              name: "--update-mask",
              description:
                "Comma-separated string containing list of fields to be updated",
              args: {
                name: "UPDATE_MASK",
                description: "String",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "POSTURE_DEPLOYMENT",
            description:
              "ID of the posture_deployment or fully qualified identifier for the posture_deployment",
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
      name: "posture-operations",
      description:
        "Manage Cloud Security Command Center (SCC) posture operations",
      subcommands: [
        {
          name: "describe",
          description:
            "Describe a Cloud Security Command Center (SCC) posture long running operation",
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
            name: "OPERATION_NAME",
            description:
              "Relative resource name of the operation, of the format: organizations/<organizationID>/locations/<location>/operations/<operationID>",
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
      name: "posture-templates",
      description:
        "Manage Cloud Security Command Center (SCC) posture templates",
      subcommands: [
        {
          name: "describe",
          description:
            "Describe a Cloud Security Command Center (SCC) posture template",
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
            optOrganization2,
            optProject,
            optQuiet,
            {
              name: "--revision-id",
              description:
                "ID of the specific posture template revision to be described. If not specified, latest revision is described",
              args: {
                name: "REVISION_ID",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "POSTURE_TEMPLATE",
            description:
              "ID of the posture_template or fully qualified identifier for the posture_template",
          },
        },
        {
          name: "list",
          description:
            "List the details of the Cloud Security Command Center (SCC) posture templates",
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
            optOrganization8,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PARENT",
            description:
              "Parent of Cloud Security Command Center posture templates. Formatted as organizations/<organizationID>/locations/<location>",
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
      name: "postures",
      description: "Manage Cloud Security Command Center (SCC) postures",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud Security Command Center (SCC) posture",
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
            optOrganization2,
            {
              name: "--posture-from-file",
              description:
                "YAML file containing the body of the posture to be created. Use a full or relative path to a local file containing the value of posture",
              priority: 100,
              args: {
                name: "POSTURE_FROM_FILE",
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
            name: "POSTURE",
            description:
              "ID of the posture or fully qualified identifier for the posture",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Security Command Center (SCC) posture",
          options: [
            optAccessTokenFile,
            optAccount,
            optAsync,
            optBillingProject,
            optConfiguration,
            {
              name: "--etag",
              description:
                "Etag is an optional flag. If the provided Etag doesn't match the server generated Etag, the delete operation won't proceed",
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
            optNoAsync,
            optOrganization2,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "POSTURE",
            description:
              "ID of the posture or fully qualified identifier for the posture",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Security Command Center (SCC) posture",
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
            optOrganization2,
            optProject,
            optQuiet,
            {
              name: "--revision-id",
              description:
                "ID of the specific posture revision to described. If not specified, latest revision is described",
              args: {
                name: "REVISION_ID",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "POSTURE",
            description:
              "ID of the posture or fully qualified identifier for the posture",
          },
        },
        {
          name: "extract",
          description:
            "Extract a Cloud Security Command Center (SCC) posture from a workload",
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
            optOrganization2,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
            {
              name: "--workload",
              description:
                "Workload from where policies has to be extracted into a posture. It can be in one of the following formats: `projects/projectNumber`, `folders/folderNumber`, `organizations/organizationNumber`",
              priority: 100,
              args: {
                name: "WORKLOAD",
                description: "String",
              },
            },
          ],
          args: {
            name: "POSTURE",
            description:
              "ID of the posture or fully qualified identifier for the posture",
          },
        },
        {
          name: "list",
          description:
            "Lists all the Cloud Security Command Center postures for an organization",
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
            optOrganization8,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PARENT",
            description:
              "Parent the Cloud Security Command Center postures belongs to. Formatted as organizations/<organizationID>/locations/<location>",
            isOptional: true,
          },
        },
        {
          name: "list-revisions",
          description:
            "List the revisions of a Cloud Security Command Center (SCC) posture",
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
            optOrganization2,
            optPageSize,
            optProject,
            optQuiet,
            optSortBy,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "POSTURE",
            description:
              "ID of the posture or fully qualified identifier for the posture",
          },
        },
        {
          name: "update",
          description:
            "Update the given Cloud Security Command Center (SCC) posture",
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
            optOrganization2,
            {
              name: "--posture-from-file",
              description:
                "Path of the file containing the details of the field to be updated. Contents include the name of the posture to be updated and value of the fields to be updated. Use a full or relative path to a local file containing the value of posture",
              priority: 100,
              args: {
                name: "POSTURE_FROM_FILE",
                template: "filepaths",
              },
            },
            optProject,
            optQuiet,
            {
              name: "--revision-id",
              description:
                "Revision ID of the posture to be updated. The same revision ID will be updated in case the posture revision is not deployed on any workload. A new revision will be created for a deployed posture",
              priority: 100,
              args: {
                name: "REVISION_ID",
                description: "String",
              },
            },
            optTraceToken,
            {
              name: "--update-mask",
              description:
                "Comma separated string containing list of fields to be updated",
              args: {
                name: "UPDATE_MASK",
                description: "String",
              },
            },
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "POSTURE",
            description:
              "ID of the posture or fully qualified identifier for the posture",
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
      name: "sources",
      description: "Manage Cloud SCC (Security Command Center) finding sources",
      subcommands: [
        {
          name: "describe",
          description: "Describe a source given its display name or source id",
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
              name: "--source",
              description:
                "Cloud SCC specific source. It's derived from the the source's relative resource name. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. For Example: For the given source name: \"organizations/123/sources/456\", 456 represents source id",
              args: {
                name: "SOURCE",
                description: "String",
              },
            },
            {
              name: "--source-display-name",
              description:
                "Source's display name must be unique amongst its siblings, for example, two sources with the same parent can't share the same display name. Display name must start and end with a letter or digit, may contain letters, digits, spaces, hyphens, and underscores, and can be no longer than 32 characters. This is captured by the regular expression: [\\p{L}\\p{N}]({\\p{L}\\p{N}_- ]{0,30}[\\p{L}\\p{N}])?. For example: 'Cloud Security Scanner' is the source display name",
              args: {
                name: "SOURCE_DISPLAY_NAME",
                description: "String",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "PARENT",
            description:
              "ID of the parent or fully qualified identifier for the parent",
            isOptional: true,
          },
        },
        {
          name: "list",
          description: "List Cloud Security Command Center sources",
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
            name: "PARENT",
            description:
              "ID of the parent or fully qualified identifier for the parent",
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
