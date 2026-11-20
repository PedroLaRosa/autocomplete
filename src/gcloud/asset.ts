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

const optConstraint: Fig.Option = {
  name: "--constraint",
  description:
    "The name of the constraint to analyze organization policies for. The response only contains analyzed organization policies for the provided constraint",
  priority: 100,
  args: {
    name: "CONSTRAINT",
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
  description: "Folder of the feed",
  args: {
    name: "FOLDER_ID",
    description: "String",
  },
};

const optFolder2: Fig.Option = {
  name: "--folder",
  description: "Folder of the saved query",
  args: {
    name: "FOLDER_ID",
    description: "String",
  },
};

const optFolder3: Fig.Option = {
  name: "--folder",
  description: "The ID of the folder which is the root asset",
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

const optLogHttp: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};

const optOrganization: Fig.Option = {
  name: "--organization",
  description: "Organization of the feed",
  args: {
    name: "ORGANIZATION_ID",
    description: "String",
  },
};

const optOrganization2: Fig.Option = {
  name: "--organization",
  description: "Organization of the saved query",
  args: {
    name: "ORGANIZATION_ID",
    description: "String",
  },
};

const optOrganization3: Fig.Option = {
  name: "--organization",
  description: "The ID of the organization which is the root asset",
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

const optRelationshipTypes: Fig.Option = {
  name: "--relationship-types",
  description:
    'A list of relationship types (i.e., "INSTANCE_TO_INSTANCEGROUP") to take a snapshot. This argument will only be honoured if content_type=RELATIONSHIP. If specified and non-empty, only relationships matching the specified types will be returned. See http://cloud.google.com/asset-inventory/docs/supported-asset-types for supported relationship types',
  args: {
    name: "RELATIONSHIP_TYPES",
    description: "List",
  },
};

const optSnapshotTime: Fig.Option = {
  name: "--snapshot-time",
  description:
    "Timestamp to take a snapshot on assets. This can only be a current or past time. If not specified, the current time will be used. Due to delays in resource data collection and indexing, there is a volatile window during which running the same query at different times may return different results. See $ gcloud topic datetimes for information on time formats",
  args: {
    name: "SNAPSHOT_TIME",
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
  name: "asset",
  description: "Manage the Cloud Asset Inventory",
  subcommands: [
    {
      name: "analyze-iam-policy",
      description: "Analyzes IAM policies that match a request",
      options: [
        {
          name: "--access-time",
          description:
            "The hypothetical access timestamp to evaluate IAM conditions",
          args: {
            name: "ACCESS_TIME",
          },
        },
        optAccessTokenFile,
        optAccount,
        {
          name: "--analyze-service-account-impersonation",
          description:
            "If true, the response will include access analysis from identities to resources via service account impersonation. This is a very expensive operation, because many derived queries will be executed. We highly recommend you use AnalyzeIamPolicyLongrunning rpc instead. Default is false",
        },
        optBillingProject,
        optConfiguration,
        {
          name: "--execution-timeout",
          description:
            "The amount of time the executable has to complete. See JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json). Deafult is empty",
          args: {
            name: "EXECUTION_TIMEOUT",
          },
        },
        {
          name: "--expand-groups",
          description:
            "If true, the identities section of the result will expand any Google groups appearing in an IAM policy binding. Default is false",
        },
        {
          name: "--expand-resources",
          description:
            "If true, the resource section of the result will expand any resource attached to an IAM policy to include resources lower in the resource hierarchy. Default is false",
        },
        {
          name: "--expand-roles",
          description:
            "If true, the access section of result will expand any roles appearing in IAM policy bindings to include their permissions. Default is false",
        },
        optFlagsFile,
        optFlatten,
        {
          name: "--folder",
          description:
            "Folder ID on which to perform the analysis. Only policies defined at or below this folder will be targeted in the analysis",
          args: {
            name: "FOLDER_ID",
            description: "String",
          },
        },
        optFormat,
        {
          name: "--full-resource-name",
          description: "The full resource name",
          args: {
            name: "FULL_RESOURCE_NAME",
            description: "String",
          },
        },
        {
          name: "--help",
          description: "Display detailed help",
        },
        {
          name: "--identity",
          description:
            "The identity appearing in the form of principals in the IAM policy binding",
          args: {
            name: "IDENTITY",
            description: "String",
          },
        },
        optImpersonateServiceAccount,
        optLogHttp,
        {
          name: "--no-analyze-service-account-impersonation",
          description:
            "If true, the response will include access analysis from identities to resources via service account impersonation. This is a very expensive operation, because many derived queries will be executed. We highly recommend you use AnalyzeIamPolicyLongrunning rpc instead. Default is false",
          hidden: true,
        },
        {
          name: "--no-expand-groups",
          description:
            "If true, the identities section of the result will expand any Google groups appearing in an IAM policy binding. Default is false",
          hidden: true,
        },
        {
          name: "--no-expand-resources",
          description:
            "If true, the resource section of the result will expand any resource attached to an IAM policy to include resources lower in the resource hierarchy. Default is false",
          hidden: true,
        },
        {
          name: "--no-expand-roles",
          description:
            "If true, the access section of result will expand any roles appearing in IAM policy bindings to include their permissions. Default is false",
          hidden: true,
        },
        {
          name: "--no-output-group-edges",
          description:
            "If true, the result will output the relevant membership relationships between groups. Default is false",
          hidden: true,
        },
        {
          name: "--no-output-resource-edges",
          description:
            "If true, the result will output the relevant parent/child relationships between resources. Default is false",
          hidden: true,
        },
        {
          name: "--no-show-response",
          description:
            "If true, the response will be showed as-is in the command output",
          hidden: true,
        },
        {
          name: "--organization",
          description:
            "Organization ID on which to perform the analysis. Only policies defined at or below this organization will be targeted in the analysis",
          args: {
            name: "ORGANIZATION_ID",
            description: "String",
          },
        },
        {
          name: "--output-group-edges",
          description:
            "If true, the result will output the relevant membership relationships between groups. Default is false",
        },
        {
          name: "--output-resource-edges",
          description:
            "If true, the result will output the relevant parent/child relationships between resources. Default is false",
        },
        {
          name: "--permissions",
          description: "The permissions to appear in the result",
          args: {
            name: "PERMISSIONS",
            description: "List",
          },
        },
        optQuiet,
        {
          name: "--roles",
          description: "The roles to appear in the result",
          args: {
            name: "ROLES",
            description: "List",
          },
        },
        {
          name: "--saved-analysis-query",
          description:
            "The name of a saved query. When a `saved_analysis_query` is provided, its query content will be used as the base query. Other flags' values will override the base query to compose the final query to run. IDs might be in one of the following formats: * projects/project_number/savedQueries/saved_query_id* folders/folder_number/savedQueries/saved_query_id* organizations/organization_number/savedQueries/saved_query_id",
          args: {
            name: "SAVED_ANALYSIS_QUERY",
            description: "String",
          },
        },
        {
          name: "--show-response",
          description:
            "If true, the response will be showed as-is in the command output",
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "analyze-iam-policy-longrunning",
      description:
        "Analyzes IAM policies that match a request asynchronously and writes the results to Google Cloud Storage or BigQuery destination",
      options: [
        {
          name: "--access-time",
          description:
            "The hypothetical access timestamp to evaluate IAM conditions",
          args: {
            name: "ACCESS_TIME",
          },
        },
        optAccessTokenFile,
        optAccount,
        {
          name: "--analyze-service-account-impersonation",
          description:
            "If true, the response will include access analysis from identities to resources via service account impersonation. This is a very expensive operation, because many derived queries will be executed. We highly recommend you use AnalyzeIamPolicyLongrunning rpc instead. Default is false",
        },
        {
          name: "--bigquery-dataset",
          description:
            'BigQuery dataset where the results will be written. Must be a dataset relative name starting with "projects/". For example, "projects/project_id/datasets/dataset_id"',
          priority: 100,
          args: {
            name: "BIGQUERY_DATASET",
          },
        },
        {
          name: "--bigquery-partition-key",
          description:
            "This enum determines the partition key column for the bigquery tables. Partitioning can improve query performance and reduce query cost by filtering partitions. Refer to https://cloud.google.com/bigquery/docs/partitioned-tables for details. _BIGQUERY_PARTITION_KEY_ must be one of: *PARTITION_KEY_UNSPECIFIED*, *REQUEST_TIME*",
          args: {
            name: "BIGQUERY_PARTITION_KEY",
            description: "String",
            suggestions: ["PARTITION_KEY_UNSPECIFIED", "REQUEST_TIME"],
          },
        },
        {
          name: "--bigquery-table-prefix",
          description:
            'The prefix of the BigQuery tables to which the analysis results will be written. A table name consists of letters, numbers and underscores"',
          priority: 100,
          args: {
            name: "BIGQUERY_TABLE_PREFIX",
          },
        },
        {
          name: "--bigquery-write-disposition",
          description:
            "Specifies the action that occurs if the destination table or partition already exists. The following values are supported: WRITE_TRUNCATE, WRITE_APPEND and WRITE_EMPTY. The default value is WRITE_APPEND",
          args: {
            name: "BIGQUERY_WRITE_DISPOSITION",
            description: "String",
          },
        },
        optBillingProject,
        optConfiguration,
        {
          name: "--expand-groups",
          description:
            "If true, the identities section of the result will expand any Google groups appearing in an IAM policy binding. Default is false",
        },
        {
          name: "--expand-resources",
          description:
            "If true, the resource section of the result will expand any resource attached to an IAM policy to include resources lower in the resource hierarchy. Default is false",
        },
        {
          name: "--expand-roles",
          description:
            "If true, the access section of result will expand any roles appearing in IAM policy bindings to include their permissions. Default is false",
        },
        optFlagsFile,
        optFlatten,
        {
          name: "--folder",
          description:
            "Folder ID on which to perform the analysis. Only policies defined at or below this folder will be targeted in the analysis",
          args: {
            name: "FOLDER_ID",
            description: "String",
          },
        },
        optFormat,
        {
          name: "--full-resource-name",
          description: "The full resource name",
          args: {
            name: "FULL_RESOURCE_NAME",
            description: "String",
          },
        },
        {
          name: "--gcs-output-path",
          description:
            'Google Cloud Storage URI where the results will be written. URI must start with "gs://". For example, "gs://bucket_name/object_name"',
          args: {
            name: "GCS_OUTPUT_PATH",
          },
        },
        {
          name: "--help",
          description: "Display detailed help",
        },
        {
          name: "--identity",
          description:
            "The identity appearing in the form of principals in the IAM policy binding",
          args: {
            name: "IDENTITY",
            description: "String",
          },
        },
        optImpersonateServiceAccount,
        optLogHttp,
        {
          name: "--no-analyze-service-account-impersonation",
          description:
            "If true, the response will include access analysis from identities to resources via service account impersonation. This is a very expensive operation, because many derived queries will be executed. We highly recommend you use AnalyzeIamPolicyLongrunning rpc instead. Default is false",
          hidden: true,
        },
        {
          name: "--no-expand-groups",
          description:
            "If true, the identities section of the result will expand any Google groups appearing in an IAM policy binding. Default is false",
          hidden: true,
        },
        {
          name: "--no-expand-resources",
          description:
            "If true, the resource section of the result will expand any resource attached to an IAM policy to include resources lower in the resource hierarchy. Default is false",
          hidden: true,
        },
        {
          name: "--no-expand-roles",
          description:
            "If true, the access section of result will expand any roles appearing in IAM policy bindings to include their permissions. Default is false",
          hidden: true,
        },
        {
          name: "--no-output-group-edges",
          description:
            "If true, the result will output the relevant membership relationships between groups. Default is false",
          hidden: true,
        },
        {
          name: "--no-output-resource-edges",
          description:
            "If true, the result will output the relevant parent/child relationships between resources. Default is false",
          hidden: true,
        },
        {
          name: "--organization",
          description:
            "Organization ID on which to perform the analysis. Only policies defined at or below this organization will be targeted in the analysis",
          args: {
            name: "ORGANIZATION_ID",
            description: "String",
          },
        },
        {
          name: "--output-group-edges",
          description:
            "If true, the result will output the relevant membership relationships between groups. Default is false",
        },
        {
          name: "--output-resource-edges",
          description:
            "If true, the result will output the relevant parent/child relationships between resources. Default is false",
        },
        {
          name: "--permissions",
          description: "The permissions to appear in the result",
          args: {
            name: "PERMISSIONS",
            description: "List",
          },
        },
        optQuiet,
        {
          name: "--roles",
          description: "The roles to appear in the result",
          args: {
            name: "ROLES",
            description: "List",
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "analyze-move",
      description: "Analyzes resource move",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        {
          name: "--blockers-only",
          description:
            "Determines whether to perform analysis against blockers only. Leaving it empty means the full analysis will be performed including warnings and blockers for the specified resource move",
          args: {
            name: "BLOCKERS_ONLY",
            description: "Int",
          },
        },
        optConfiguration,
        {
          name: "--destination-folder",
          description: "The destination folder ID to perform the analysis",
          args: {
            name: "FOLDER_ID",
            description: "String",
          },
        },
        {
          name: "--destination-organization",
          description:
            "The destination organization ID to perform the analysis",
          args: {
            name: "ORGANIZATION_ID",
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
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "analyze-org-policies",
      description: "Analyze organization policies under a scope",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        optConstraint,
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
        {
          name: "--scope",
          description:
            "Scope can only be an organization. The analysis is limited to the Cloud organization policies within this scope. The caller must be granted the `cloudasset.assets.searchAllResources` permission on the desired scope",
          priority: 100,
          args: {
            name: "SCOPE",
            description: "String",
          },
        },
        optSortBy,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "analyze-org-policy-governed-assets",
      description:
        "Analyze organization policies governed assets under a scope",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        optConstraint,
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
        {
          name: "--scope",
          description:
            "Scope can only be an organization. The analysis is limited to the Cloud organization policies and assets within this scope. The caller must be granted the `cloudasset.assets.searchAllResources` and `cloudasset.assets.searchAllIamPolicies` permission on the desired scope",
          priority: 100,
          args: {
            name: "SCOPE",
            description: "String",
          },
        },
        optSortBy,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "analyze-org-policy-governed-containers",
      description:
        "Analyze organization policies governed containers under a scope",
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        optConstraint,
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
        {
          name: "--scope",
          description:
            "Scope can only be an organization. The analysis is limited to the Cloud organization policies and containers within this scope. The caller must be granted the `cloudasset.assets.searchAllResources` permission on the desired scope",
          priority: 100,
          args: {
            name: "SCOPE",
            description: "String",
          },
        },
        optSortBy,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "export",
      description: "Export the cloud assets to Google Cloud Storage/BigQuery",
      options: [
        optAccessTokenFile,
        optAccount,
        {
          name: "--asset-types",
          description:
            'A list of asset types (i.e., "compute.googleapis.com/Disk") to take a snapshot. If specified and non-empty, only assets matching the specified types will be returned. See http://cloud.google.com/asset-inventory/docs/supported-asset-types for supported asset types',
          args: {
            name: "ASSET_TYPES",
            description: "List",
          },
        },
        {
          name: "--bigquery-dataset",
          description: "The id of the BigQuery dataset",
          args: {
            name: "BIGQUERY_DATASET",
            description: "String",
          },
        },
        {
          name: "--bigquery-table",
          description:
            "ID of the table or fully qualified identifier for the table",
          priority: 100,
          args: {
            name: "BIGQUERY_TABLE",
            description: "String",
          },
        },
        optBillingProject,
        optConfiguration,
        {
          name: "--content-type",
          description:
            "Asset content type. If specified, only content matching the specified type will be returned. Otherwise, no content but the asset name will be returned. Specifying `resource` will export resource metadata, specifying `iam-policy` will export the IAM policy for each child asset, specifying `org-policy` will export the Org Policy set on child assets, specifying `access-policy` will export the Access Policy set on child assets, specifying `os-inventory` will export the OS inventory of VM instances, and specifying `relationship` will export relationships of the assets. _CONTENT_TYPE_ must be one of: *resource*, *iam-policy*, *org-policy*, *access-policy*, *os-inventory*, *relationship*",
          args: {
            name: "CONTENT_TYPE",
            description: "String",
            suggestions: [
              "resource",
              "iam-policy",
              "org-policy",
              "access-policy",
              "os-inventory",
              "relationship",
            ],
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
        optLogHttp,
        {
          name: "--no-output-bigquery-force",
          description:
            "If the destination table already exists and this flag is specified, the table will be overwritten by the contents of assets snapshot. If the flag is not specified and the destination table already exists, the export call returns an error",
          hidden: true,
        },
        {
          name: "--no-per-asset-type",
          description:
            "If the flag is specified, the snapshot results will be written to one or more tables, each of which contains results of one asset type",
          hidden: true,
        },
        optOrganization3,
        {
          name: "--output-bigquery-force",
          description:
            "If the destination table already exists and this flag is specified, the table will be overwritten by the contents of assets snapshot. If the flag is not specified and the destination table already exists, the export call returns an error",
        },
        {
          name: "--output-path",
          description:
            'Google Cloud Storage URI where the results will go. URI must start with "gs://". For example, "gs://bucket_name/object_name"',
          args: {
            name: "OUTPUT_PATH",
          },
        },
        {
          name: "--output-path-prefix",
          description:
            'Google Cloud Storage URI where the results will go. URI must start with "gs://". For example, "gs://bucket_name/object_name_prefix", in which case each exported object uri is in format: "gs://bucket_name/object_name_prefix/<asset type>/<shard number>" and it only contains assets for that type',
          args: {
            name: "OUTPUT_PATH_PREFIX",
          },
        },
        {
          name: "--partition-key",
          description:
            "If specified. the snapshot results will be written to partitioned table(s) with two additional timestamp columns, readTime and requestTime, one of which will be the partition key. _PARTITION_KEY_ must be one of: *read-time*, *request-time*",
          args: {
            name: "PARTITION_KEY",
            suggestions: ["read-time", "request-time"],
          },
        },
        {
          name: "--per-asset-type",
          description:
            "If the flag is specified, the snapshot results will be written to one or more tables, each of which contains results of one asset type",
        },
        optQuiet,
        optRelationshipTypes,
        optSnapshotTime,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "feeds",
      description: "Manage Cloud Asset Inventory feeds",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud Asset Inventory Feed",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--asset-names",
              description:
                "A comma-separated list of the full names of the assets to receive updates. For example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. For more information, see: https://cloud.google.com/apis/design/resource_names#full_resource_name",
              args: {
                name: "ASSET_NAMES",
                description: "List",
              },
            },
            {
              name: "--asset-types",
              description:
                "A comma-separated list of types of the assets types to receive updates. For example: `compute.googleapis.com/Disk,compute.googleapis.com/Network`. Regular expressions (https://github.com/google/re2/wiki/Syntax) are also supported. For more information, see: https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/overview",
              args: {
                name: "ASSET_TYPES",
                description: "List",
              },
            },
            optBillingProject,
            {
              name: "--condition-description",
              description:
                "Description of the feed condition. For reference only",
              args: {
                name: "CONDITION_DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--condition-expression",
              description:
                "Feed condition expression. If not specified, no condition will be applied to feed. For more information, see: https://cloud.google.com/asset-inventory/docs/monitoring-asset-changes#feed_with_condition",
              args: {
                name: "CONDITION_EXPRESSION",
                description: "String",
              },
            },
            {
              name: "--condition-title",
              description: "Title of the feed condition. For reference only",
              args: {
                name: "CONDITION_TITLE",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--content-type",
              description:
                "Asset content type. If not specified, no content but the asset name and type will be returned in the feed. For more information, see https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/overview#asset_content_type. _CONTENT_TYPE_ must be one of: *resource*, *iam-policy*, *org-policy*, *access-policy*, *os-inventory*, *relationship*",
              args: {
                name: "CONTENT_TYPE",
                description: "String",
                suggestions: [
                  "resource",
                  "iam-policy",
                  "org-policy",
                  "access-policy",
                  "os-inventory",
                  "relationship",
                ],
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
            optLogHttp,
            optOrganization,
            {
              name: "--pubsub-topic",
              description:
                'Name of the Cloud Pub/Sub topic to publish to, of the form `projects/PROJECT_ID/topics/TOPIC_ID`. You can list existing topics with `gcloud pubsub topics list --format="text(name)"`',
              priority: 100,
              args: {
                name: "PUBSUB_TOPIC",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--relationship-types",
              description:
                'A comma-separated list of the relationship types (i.e., "INSTANCE_TO_INSTANCEGROUP") to receive updates. This argument will only be honoured if content_type=RELATIONSHIP.See http://cloud.google.com/asset-inventory/docs/supported-asset-types for supported relationship types',
              args: {
                name: "RELATIONSHIP_TYPES",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FEED_ID",
            description:
              "Asset feed identifier being created, it must be unique under the specified parent resource project/folder/organization",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Asset Inventory Feed",
          options: [
            optAccessTokenFile,
            optAccount,
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
            optLogHttp,
            optOrganization,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FEED_ID",
            description: "Asset feed identifier to delete",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Asset Inventory Feed",
          options: [
            optAccessTokenFile,
            optAccount,
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
            optLogHttp,
            optOrganization,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FEED_ID",
            description: "Asset feed identifier to describe",
          },
        },
        {
          name: "list",
          description: "List Cloud Asset Inventory Feeds",
          options: [
            optAccessTokenFile,
            optAccount,
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
            optLogHttp,
            optOrganization,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Update an existing Cloud Asset Inventory Feed",
          options: [
            optAccessTokenFile,
            optAccount,
            {
              name: "--add-asset-names",
              description: "Append the given values to the current assetNames",
              args: {
                name: "ASSET-NAMES",
                description: "List",
              },
            },
            {
              name: "--add-asset-types",
              description: "Append the given values to the current assetTypes",
              args: {
                name: "ASSET-TYPES",
                description: "List",
              },
            },
            {
              name: "--add-relationship-types",
              description:
                "Append the given values to the current relationshipTypes",
              args: {
                name: "RELATIONSHIP-TYPES",
                description: "List",
              },
            },
            optBillingProject,
            {
              name: "--clear-asset-names",
              description: "Empty the current assetNames",
            },
            {
              name: "--clear-asset-types",
              description: "Empty the current assetTypes",
            },
            {
              name: "--clear-condition-description",
              description:
                "Clear any existing condition description setting on the feed. Condition description will be empty",
            },
            {
              name: "--clear-condition-expression",
              description:
                "Clear any existing condition expression setting on the feed. No condition will be applied to feed",
            },
            {
              name: "--clear-condition-title",
              description:
                "Clear any existing condition title setting on the feed. Condition title will be empty",
            },
            {
              name: "--clear-content-type",
              description:
                "Clear any existing content type setting on the feed. Content type will be unspecified, no content but the asset name and type will be returned in the feed",
            },
            {
              name: "--clear-relationship-types",
              description: "Empty the current relationshipTypes",
            },
            {
              name: "--condition-description",
              description:
                "Condition description to overwrite the existing one",
              args: {
                name: "CONDITION_DESCRIPTION",
                description: "String",
              },
            },
            {
              name: "--condition-expression",
              description:
                "Condition expression to overwrite the existing one. For more information, see: https://cloud.google.com/asset-inventory/docs/monitoring-asset-changes#feed_with_condition",
              args: {
                name: "CONDITION_EXPRESSION",
                description: "String",
              },
            },
            {
              name: "--condition-title",
              description: "Condition title to overwrite the existing one",
              args: {
                name: "CONDITION_TITLE",
                description: "String",
              },
            },
            optConfiguration,
            {
              name: "--content-type",
              description:
                "Asset content type to overwrite the existing one. For more information, see: https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/overview#asset_content_type. _CONTENT_TYPE_ must be one of: *resource*, *iam-policy*, *org-policy*, *access-policy*, *os-inventory*, *relationship*",
              args: {
                name: "CONTENT_TYPE",
                description: "String",
                suggestions: [
                  "resource",
                  "iam-policy",
                  "org-policy",
                  "access-policy",
                  "os-inventory",
                  "relationship",
                ],
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
            optLogHttp,
            {
              name: "--no-clear-asset-names",
              description: "Empty the current assetNames",
              hidden: true,
            },
            {
              name: "--no-clear-asset-types",
              description: "Empty the current assetTypes",
              hidden: true,
            },
            {
              name: "--no-clear-condition-description",
              description:
                "Clear any existing condition description setting on the feed. Condition description will be empty",
              hidden: true,
            },
            {
              name: "--no-clear-condition-expression",
              description:
                "Clear any existing condition expression setting on the feed. No condition will be applied to feed",
              hidden: true,
            },
            {
              name: "--no-clear-condition-title",
              description:
                "Clear any existing condition title setting on the feed. Condition title will be empty",
              hidden: true,
            },
            {
              name: "--no-clear-content-type",
              description:
                "Clear any existing content type setting on the feed. Content type will be unspecified, no content but the asset name and type will be returned in the feed",
              hidden: true,
            },
            {
              name: "--no-clear-relationship-types",
              description: "Empty the current relationshipTypes",
              hidden: true,
            },
            optOrganization,
            {
              name: "--pubsub-topic",
              description:
                'Name of the Cloud Pub/Sub topic to publish to, of the form `projects/PROJECT_ID/topics/TOPIC_ID`. You can list existing topics with `gcloud pubsub topics list --format="text(name)"`',
              args: {
                name: "PUBSUB_TOPIC",
                description: "String",
              },
            },
            optQuiet,
            {
              name: "--remove-asset-names",
              description:
                "Remove the given values from the current assetNames",
              args: {
                name: "ASSET-NAMES",
                description: "List",
              },
            },
            {
              name: "--remove-asset-types",
              description:
                "Remove the given values from the current assetTypes",
              args: {
                name: "ASSET-TYPES",
                description: "List",
              },
            },
            {
              name: "--remove-relationship-types",
              description:
                "Remove the given values from the current relationshipTypes",
              args: {
                name: "RELATIONSHIP-TYPES",
                description: "List",
              },
            },
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "FEED_ID",
            description:
              "Identifier of the asset feed to update, which must be unique in its parent resource. Parent resource can be a project, folder, or an organization",
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
      name: "get-effective-iam-policy",
      description:
        "Get effective IAM policies for a specified list of resources within accessible scope, such as a project, folder or organization",
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
          description:
            "Names refer to a list of [full resource names](https://cloud.google.com/asset-inventory/docs/resource-name-format) of [searchable asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types). For each batch call, total number of names provided is between 1 and 20",
          priority: 100,
          args: {
            name: "NAMES",
            description: "List",
          },
        },
        optProject,
        optQuiet,
        {
          name: "--scope",
          description:
            "Scope can be a project, a folder, or an organization. The search is limited to the IAM policies within this scope. The caller must be granted the ``cloudasset.assets.analyzeIamPolicy'', ``cloudasset.assets.searchAllResources'', ``cloudasset.assets.searchAllIamPolicies'' permissions on the desired scope",
          priority: 100,
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
      name: "get-history",
      description:
        "Get the update history of assets that overlaps a time window",
      options: [
        optAccessTokenFile,
        optAccount,
        {
          name: "--asset-names",
          description:
            "A list of full names of the assets to get the history for. For more information, see: https://cloud.google.com/apis/design/resource_names#full_resource_name",
          priority: 100,
          args: {
            name: "ASSET_NAMES",
            description: "List",
          },
        },
        optBillingProject,
        optConfiguration,
        {
          name: "--content-type",
          description:
            "Asset content type. Specifying `resource` will export resource metadata, specifying `iam-policy` will export the IAM policy for each child asset, specifying `org-policy` will export the Org Policy set on child assets, specifying `access-policy` will export the Access Policy set on child assets, specifying `os-inventory` will export the OS inventory of VM instances, and specifying `relationship` will export relationships of the assets. _CONTENT_TYPE_ must be one of: *resource*, *iam-policy*, *org-policy*, *access-policy*, *os-inventory*, *relationship*",
          priority: 100,
          args: {
            name: "CONTENT_TYPE",
            description: "String",
            suggestions: [
              "resource",
              "iam-policy",
              "org-policy",
              "access-policy",
              "os-inventory",
              "relationship",
            ],
          },
        },
        {
          name: "--end-time",
          description:
            "End time of the time window (exclusive) for the asset history. Defaults to current time if not specified. See $ gcloud topic datetimes for information on time formats",
          args: {
            name: "END_TIME",
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
        optOrganization3,
        optQuiet,
        optRelationshipTypes,
        {
          name: "--start-time",
          description:
            "Start time of the time window (inclusive) for the asset history. Must be after the current time minus 35 days. See $ gcloud topic datetimes for information on time formats",
          priority: 100,
          args: {
            name: "START_TIME",
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "list",
      description: "List the Cloud assets",
      options: [
        optAccessTokenFile,
        optAccount,
        {
          name: "--asset-types",
          description:
            'A list of asset types (i.e., "compute.googleapis.com/Disk") to take a snapshot. If specified and non-empty, only assets matching the specified types will be returned. See http://cloud.google.com/asset-inventory/docs/supported-asset-types for supported asset types',
          args: {
            name: "ASSET_TYPES",
            description: "List",
          },
        },
        optBillingProject,
        optConfiguration,
        {
          name: "--content-type",
          description:
            "Asset content type. If not specified, no content but the asset name and type will be returned in the feed. For more information, see https://cloud.google.com/asset-inventory/docs/reference/rest/v1/feeds#ContentType. _CONTENT_TYPE_ must be one of: *resource*, *iam-policy*, *org-policy*, *access-policy*, *os-inventory*, *relationship*",
          args: {
            name: "CONTENT_TYPE",
            description: "String",
            suggestions: [
              "resource",
              "iam-policy",
              "org-policy",
              "access-policy",
              "os-inventory",
              "relationship",
            ],
          },
        },
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
        optLogHttp,
        optOrganization3,
        optPageSize,
        optQuiet,
        optRelationshipTypes,
        optSnapshotTime,
        optSortBy,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "operations",
      description: "Manage Cloud Asset Inventory operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Cloud Asset Inventory operation",
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
            description: "Name of the operation to describe",
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
      name: "query",
      description: "Query the Cloud assets",
      options: [
        optAccessTokenFile,
        optAccount,
        {
          name: "--bigquery-dataset",
          description: "The id of the BigQuery dataset",
          args: {
            name: "BIGQUERY_DATASET",
            description: "String",
          },
        },
        {
          name: "--bigquery-table",
          description:
            "ID of the table or fully qualified identifier for the table",
          priority: 100,
          args: {
            name: "BIGQUERY_TABLE",
            description: "String",
          },
        },
        optBillingProject,
        optConfiguration,
        {
          name: "--end-time",
          description:
            "End time of the time window (exclusive) for the asset history. Defaults to current time if not specified. See $ gcloud topic datetimes for information on time formats",
          args: {
            name: "END_TIME",
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
        {
          name: "--job-reference",
          description:
            "Reference to the query job, which is from the previous call",
          args: {
            name: "JOB_REFERENCE",
            description: "String",
          },
        },
        optLogHttp,
        optOrganization3,
        {
          name: "--page-size",
          description:
            "The maximum number of rows to return in the results. One page is also limited to 10 MB",
          args: {
            name: "PAGE_SIZE",
            description: "Int",
          },
        },
        {
          name: "--page-token",
          description: "A page token received from previous call",
          args: {
            name: "PAGE_TOKEN",
            description: "String",
          },
        },
        optQuiet,
        optSnapshotTime,
        {
          name: "--start-time",
          description:
            "Start time of the time window (inclusive) for the asset history. Must be after the current time minus 35 days. See $ gcloud topic datetimes for information on time formats",
          priority: 100,
          args: {
            name: "START_TIME",
          },
        },
        {
          name: "--statement",
          description:
            "A BigQuery Standard SQL compatible statement. If the query execution finishes within timeout and there is no pagination, the full query results will be returned. Otherwise, pass job_reference from previous call as `--job-reference` to obtain the full results",
          args: {
            name: "STATEMENT",
            description: "String",
          },
        },
        {
          name: "--timeout",
          description:
            "Maximum amount of time that the client will wait for the query to complete",
          args: {
            name: "TIMEOUT",
          },
        },
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
        {
          name: "--write-disposition",
          description:
            "Specifies the action that occurs if the destination table or partition already exists. _WRITE_DISPOSITION_ must be one of:",
          args: {
            name: "WRITE_DISPOSITION",
            suggestions: ["write-append", "write-empty", "write-truncate"],
          },
        },
      ],
    },
    {
      name: "saved-queries",
      description: "Manage Cloud Asset Inventory saved queries",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud Asset Inventory saved query",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            {
              name: "--description",
              description: "A string describing the query",
              args: {
                name: "DESCRIPTION",
                description: "String",
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
            {
              name: "--labels",
              description: "List of label KEY=VALUE pairs to add",
              args: {
                name: "KEY=VALUE",
                description: "Dict",
              },
            },
            optLogHttp,
            optOrganization2,
            {
              name: "--query-file-path",
              description: "Path to JSON or YAML file that contains the query",
              priority: 100,
              args: {
                name: "QUERY_FILE_PATH",
                description: "String",
                template: "filepaths",
              },
            },
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "QUERY_ID",
            description:
              "Saved query identifier being created. It must be unique under the specified parent resource project/folder/organization",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Asset Inventory saved query",
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
            optOrganization2,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "QUERY_ID",
            description:
              "Asset saved query identifier to be deleted. It must be unique under the specified parent resource project/folder/organization",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Asset Inventory saved query",
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
            optOrganization2,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "QUERY_ID",
            description:
              "Asset Saved Query identifier being described. It must be unique under the specified parent resource: project/folder/organization",
          },
        },
        {
          name: "list",
          description: "List Cloud Asset Inventory saved query",
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
            optOrganization2,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "update",
          description: "Update an existing Cloud Asset Inventory saved query",
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
            },
            optConfiguration,
            {
              name: "--description",
              description: "A string describing the query",
              args: {
                name: "DESCRIPTION",
                description: "String",
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
            {
              name: "--no-clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then `--clear-labels` is applied first",
              hidden: true,
            },
            optOrganization2,
            {
              name: "--query-file-path",
              description: "Path to JSON or YAML file that contains the query",
              args: {
                name: "QUERY_FILE_PATH",
                description: "String",
                template: "filepaths",
              },
            },
            optQuiet,
            {
              name: "--remove-labels",
              description:
                "List of label keys to remove. If a label does not exist it is silently ignored. If `--update-labels` is also specified then `--update-labels` is applied first",
              args: {
                name: "KEY",
                description: "List",
              },
            },
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
            optUserOutputEnabled,
            optVerbosity,
          ],
          args: {
            name: "QUERY_ID",
            description:
              "Saved query identifier being updated. It must be unique under the specified parent resource project/folder/organization",
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
      name: "search-all-iam-policies",
      description:
        "Searches all IAM policies within the specified accessible scope, such as a project, folder or organization",
      options: [
        optAccessTokenFile,
        optAccount,
        {
          name: "--asset-types",
          description:
            "List of asset types that the IAM policies are attached to. If empty, it will search the IAM policies that are attached to all the [searchable asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types)",
          args: {
            name: "ASSET_TYPES",
            description: "List",
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
        optLogHttp,
        {
          name: "--order-by",
          description:
            "Comma-separated list of fields specifying the sorting order of the results. The default order is ascending. Add `` DESC'' after the field name to indicate descending order. Redundant space characters are ignored. Example: ``assetType DESC, resource''. Only singular primitive fields in the response are sortable:",
          args: {
            name: "ORDER_BY",
            description: "String",
          },
        },
        optPageSize,
        optProject,
        {
          name: "--query",
          description:
            "Query statement. See [how to construct a query](https://cloud.google.com/asset-inventory/docs/searching-iam-policies#how_to_construct_a_query) for more information. If not specified or empty, it will search all the IAM policies within the specified ```scope```. Note that the query string is compared against each Cloud IAM policy binding, including its principals, roles, and Cloud IAM conditions. The returned Cloud IAM policies will only contain the bindings that match your query. To learn more about the IAM policy structure, see the [IAM policy documentation](https://cloud.google.com/iam/help/allow-policies/structure)",
          args: {
            name: "QUERY",
            description: "String",
          },
        },
        optQuiet,
        {
          name: "--scope",
          description:
            "Scope can be a project, a folder, or an organization. The search is limited to the IAM policies within this scope. The caller must be granted the ``cloudasset.assets.searchAllIamPolicies'' permission on the desired scope. If not specified, the [configured project property](https://cloud.google.com//sdk/docs/configurations#setting_configuration_properties) will be used. To find the configured project, run: ```gcloud config get project```. To change the setting, run: ```gcloud config set project PROJECT_ID```",
          args: {
            name: "SCOPE",
            description: "String",
          },
        },
        optSortBy,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
    {
      name: "search-all-resources",
      description:
        "Searches all Cloud resources within the specified accessible scope, such as a project, folder or organization",
      options: [
        optAccessTokenFile,
        optAccount,
        {
          name: "--asset-types",
          description:
            "A list of asset types that this request searches for. If empty, it will search all the [searchable asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types)",
          args: {
            name: "ASSET_TYPES",
            description: "List",
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
        optLogHttp,
        {
          name: "--order-by",
          description:
            "A comma-separated list of fields specifying the sorting order of the results. The default order is ascending. Add `` DESC'' after the field name to indicate descending order. Redundant space characters are ignored. Example: ``location DESC, name''. Only singular primitive fields in the response are sortable:",
          args: {
            name: "ORDER_BY",
            description: "String",
          },
        },
        optPageSize,
        optProject,
        {
          name: "--query",
          description:
            "The query statement. See [how to construct a query](https://cloud.google.com/asset-inventory/docs/searching-resources#how_to_construct_a_query) for more details. If not specified or empty, it will search all the resources within the specified ```scope```",
          args: {
            name: "QUERY",
            description: "String",
          },
        },
        optQuiet,
        {
          name: "--read-mask",
          description:
            'A comma-separated list of fields specifying which fields to be returned in the results. Only `"*"` or combination of top level fields can be specified. Examples: `"*"`, `"name,location"`, `"name,versionedResources"`',
          args: {
            name: "READ_MASK",
            description: "String",
          },
        },
        {
          name: "--scope",
          description:
            "A scope can be a project, a folder, or an organization. The search is limited to the Cloud resources within this scope. The caller must be granted the ``cloudasset.assets.searchAllResources'' permission on the desired scope. If not specified, the [configured project property](https://cloud.google.com//sdk/docs/configurations#setting_configuration_properties) will be used. To find the configured project, run: ```gcloud config get project```. To change the setting, run: ```gcloud config set project PROJECT_ID```",
          args: {
            name: "SCOPE",
            description: "String",
          },
        },
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
};

export default completionSpec;
